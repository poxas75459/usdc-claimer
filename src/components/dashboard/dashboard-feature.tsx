/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "uiZ6sLj1srVczBJhTu3B88R5EPKAiZYsNn46vtM6eRfMijXmwdhnUGovfC5GSSVb29PLuaCW5QJeWa5S4LiwWaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eh8gPHwDEsNgQkFnd9USzpXDh1uXh7b6BLH1izfgYte6dm2QV5urTkcfATGY6ACvc8GHdAvtNT4Mmw3YwzrvKpN",
  "key1": "4nCaD2WeK8enaGo7oaFShRUy6pNRUVa5bPtBotJuqH8agmpshCfvpQExQApwcFFyc83TzzjCbephHWeQ3VfUhP3R",
  "key2": "kbXJdGh7omXLb5tbwCjddftWUh1JfV62i76VUcjgMX2iCJPcEQ9fEg5dw5qKjEr8FAtPcY53VSt4km82Vk2wAGW",
  "key3": "2E8bFbrBcntTvesTK1GrbKtojKXA3btMjodK65y5GR7DQkfaNfEveM1E1KnsYgKkeEKy2kLJtdcRrZoy4uN1wajE",
  "key4": "4MmtF7xMahADna9u4HTNLjK2JAHVhuSdQb8kxvi3HWbs27cT5GP7zQJftXMBCajnx9QUDcUn2nWmcmmTgV1Syaok",
  "key5": "3CnmMdv9CzLRKiBWFMvSb2XkPEtDuLFBowgq6oj2Lt59PFoW6SgSK94EXap5TdnbKVGpNrgfUTK7yxMzRqSAjtjC",
  "key6": "4PdFztKMHj93G5wR77HtRrd3wZ4YY2ZtB3AfLUJB8VP581ykJ7UAAE8TTE1d6guaz7kH5Nxb7oseGygmc5ciPsmy",
  "key7": "dnyQtQp2WjV3wAixLiCYR8fbcdM1M4k6HY4St1PxVhoddwVksaoduEHBqE7RoML7Cv3F8bAj1orUJHZT9nAJ6h5",
  "key8": "3rGF7UcuKHRxQKPyjHFgxMre6975qjTRu4uRiUhUsg6tgajVTHEQG4jY16Rp2syd6fKpCHtBrm5uyM8DoTHFjx7K",
  "key9": "kXQD2vBV4Xb58E83M6Y8mRrL3cK9suWUyRRk8TWe8mg6y9wmwmc2zktQT8mYoAKsMaB6JpKgfKgQGkeEhtnUBUp",
  "key10": "3xHTTQJ3J1m4LdeoymuvApV2MMvjSb1pESX1ZqD6BymBFVnd3QvA3PiitvLwXn2Fdr5i2Wg41n6CgJAhqkr2WpAY",
  "key11": "2HZSgaGJUQnTtKpc8BScMk4ak3FQRttCuavG1vq4x9sT7bvXEuJusU7hpqviyPv6dqmpDCRWR8ozKDEHJppA6siQ",
  "key12": "67jGwVqz8PveJcz7t4MPj6cuw9k6CHbe92GNReUBZiQpgEbXgoFCdggLe2Hr6qX2UqpwgvH1SWeM1BjVrw44egDp",
  "key13": "HLYKTpDiGEHbzSB96DLsMgHTrvQj5vYRs8syPbHP5LvhecMzzwnSE3hdTrxKuWZKq1qfQVRYAhH9MGHALsJYcoT",
  "key14": "2VE5DZSAkK2wx1tGAUoeHfx3mHCHTPwGTK6CWcj5NyFt7G7tfe2wNEtDHtoXxJAsgg4pC5BsrbJqGA9GTBqxPdsT",
  "key15": "4KWdrCLswCV8wT9kRi3uUDgaARMDkbdGwVAutJZncfq9m8aV1uqN99YzuUBmjmbQYqeLZM5WRzQTPQQ8qij5oWNo",
  "key16": "3QuAMLpiH1ua2oSk9cETaHgnM4hshtB57mkxev7KSNRV3F8UPoM4pDPAQCh26WoSswu37kZLjoMv4kt6zsf6pvyP",
  "key17": "iEEJAA9udJK5mxva7SpPoxFkKCPzTahvAAcf4VZqro5shtC8i5ZHMbcJxPgpbqSDwa3vXkAkB7sHbXfkXmNFxoo",
  "key18": "2HK4fj28dqW4zHkQZWziuV22YijDbQbGBfXLr9uabmURVY7xoQDisu3DBHwN2gSR8HLJcJMBQrcgRDTg8zC1TX9z",
  "key19": "qnSw3uN7SK5aPTmKCxC1PzWaWx4JkGe5aJBwfqHeYBpSkTtBc7XTuZD7NSX1vptHggwGhccJBbiwsyixVf61dEB",
  "key20": "4S2cQ3URvozsk2obLACa2q7ikepEDvAbq8x81Zt65dFN8VYjLLBvxo28U5P25ETy99LaecDWUP9axjAH4pYA4xov",
  "key21": "444g6D3gx2yQPKqUaz5gdtcmZipFcs6J45FL9uP7jDbBbhudWhB1jM2dgtymRNW7vDi7wGSkspwjEaVcGk5tNkwd",
  "key22": "5cftyuvEmgbM28HvLRoMkVkDLbsjumaq8YemKVveaTtv1DU8SCt94iuNG2nVdhevY3ULEKfUNU47NyrarsAkt1Jg",
  "key23": "33VR6s1b9BsKhVNdob2wwJ2CX9HuYxocEUFCvUGRLCQ7FfTSrZqgtgENne92aUX9JgFH5tbU3qtqtQSyZ5cVHsqn",
  "key24": "3urrb2RLfDH2fvJ3nPyNArJQohS5ZVb6SuWEEJmTeEPooU6tUrwRbni85bJD7n8oi4TWhoDLoEN44KRz1sDG6zjm",
  "key25": "67fwd3htvcG2dXA3zQwZ28tw9gdSLkwGmcb4q33uGbyq3abZkPwTmBL824nRMNS1WVwA7Jk2rJt43o1J5d4T18kC"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
