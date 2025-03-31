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
    "4K3xvRGjrK6v2SLsypP82RmcLsCVzVBV3BfCfqKt6MEkpqVbunK1q4BwrbsCH4LZFekkDkEw99FL3Qsqby5oi61N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pd1J7CMUR8tHAySBxN7rsTm5h4jhBFUmq2PCNkDDjG2ymMgrxWQCSXxZSngAwwgSNThWzCV93Vwg7NpuL84quTR",
  "key1": "5KZqVHfXkeu6YYwmCF1pbUgVLGBDvgJs6JhHM9J42YxwmMY7pesyxJEXXnufAyRM7tnFzKpoVcBnieBKd3d1uPdN",
  "key2": "5yANnwcoJfMV6xjJogPPmQ7xqVCtRsjWxASmDRXsaxn8VAGQ3Uzn1edjrp9AsZFoGvdbBUNSC2rojbL66LWJAnkH",
  "key3": "2d1uwbKTf6p62NyHdK6XU3t4zXDiRx3C3HR4Xpq3t4kb8y31tCmaqhwiPM44CA2XaARg4BBSzxjQc8sYUedPqiMW",
  "key4": "5XXb8RLwoZqJJ6gea4xAvZxXq4FP1YEyaNfbbbFGYFBEvASsq2BQN7duuw7LruQLjJ4u88qDQBvrxMMgE39x5VXg",
  "key5": "2vHf2xAX2GKqhLVNtXBK2nmkKXHiNeJc7mESmEkcjfh7E7DVvzHn4Ma6cArHeowDyBNUgNhC7tinTznXtEqHgiHm",
  "key6": "3ds3PoXbhjGGR2XFAsqgXk4CRxrqLS3mkkqqox6dRhezzfeAgGGxPWkYphQJ2CrgeX7zwe8F1AZTYuhNyKtE2wLA",
  "key7": "4RhwohBKFodaM9GaCQ7dTiBtV3A8NWA9XDfgEUgHQifZ4p9bHiwvPPwMKen4gk5VoS6JJAURED6jDqSswiBDCzJk",
  "key8": "4bN7cBFY6fMZ9DmERsxPBEdGxuewYcfduKMZ6stXnrQcSaMdUzYDGKsUtdYeR2Kuzjb7nDdTBN2YfAXJEZrS8dRi",
  "key9": "JZ4xiZwjzyiEepgdL4CTRdo45zncPXyANUo9xCvLWw5GrmKXSQ4B2SneJTKfdtiZfPc2GoVJbHSe7SqUntEkrwd",
  "key10": "5axsEenR7sLwn5SmRWVnBAfPJd1AEJ4A4BEWGD29Nb6DxkU3N8MLX4qpRgsMkyu6pJ8pshb3cyHveZoKZCdJouhL",
  "key11": "98pT3p3pRg2fpP2SbFsBXiGLJt6datMRmJVAGeG4QLdHdKAR5HsS13ncLF9c3DFifbst4RxUUVaE5yD7YweYoN9",
  "key12": "5SY15f8vcXmazncKe8j66eq4oPaCkoRyAzbwAnuUKoEXmBXyuu9Rx7fBN7TJxXvmmNmX76fcCkKAyW33ezAfzZtW",
  "key13": "2PYjpgwmqVXTrSkGDizg5CCe4icE3KGuvKEtAuajPoyZEzEtemcD7gTcPQTQd8do8DEn9bJh3beHti4Tim2Zz8Rv",
  "key14": "5S95bV4cXKMuQm9k5zpytUt8PYPTeHv4PrhhRRBngFETpS26wwqEaV7VMXnvg6McQ3obrVqQ24FQC6jKYGNFY2Fb",
  "key15": "21NSRn31VTNiTrKLdJbYoJwn28WHqBtEjupSVsDkSAb6C28ZopmYzhJupyorK5DdMcvpP57jAaRoUpUXtSGb5wQv",
  "key16": "4HP5v5Y4nCBaCJudmZrfU86tqKYovmAZuMEmk6e1vgVcQz6EPg5i8Vw7g1tH7Zg373f6Ft9ZESogLneiZnBtBpKQ",
  "key17": "4VL1sF7kdQv2AWkEVNeXtWRp3UrzU9LiJjHaodsaVcK5fdZKwgDzDYQP3Nw4Vn2P97jXmPTx8FTvSa3AssVhHvUo",
  "key18": "37MSXoVK8DeUccV1huxZUtvDX5z1cg1h44mwAmGaEqKnNh8q5SSnAVcD21aV3yWFHAFx6FQmFXstrjkoLMoopip7",
  "key19": "5sSmBWnrCHZ6uUAYJRhYpRnmgx1JPeHmB54hLXkgJHMhcRQ8f2deDGHSeqmi3biyKrDtvMssAAgdzLQDZ5WPt4fa",
  "key20": "3Ekch6H2UMibPKjHbBBBGKKZSJpp2vbfQL19hGg3dz5mNcu3qgQSENn8wfKqwu5HZYEbk2XA9toPsb7AER8M8FAe",
  "key21": "4gzJShNQaoKbg3eWh1E1WeUKMGPCrb5YKR7MRk191WCzsWvdN1cvqw1qsN9iB85p9r8T8Y1F15NisPCmD1UUjiJb",
  "key22": "4rx1iS1ezHTpNrkHyZ8E3w8xpuZt36XVoByFJsNFBpZim6uhkLuKJHUfK645DiXfDFz6VqHCaBeJYTCDCBTdyjHE",
  "key23": "3UMq7LvkcYsjCbVKba7yrY5addSxxmAfhxBfcn1WEnZ3UvCgiDVSMbr6sGXWkhXXAB8dmfrgFKd3Ew1gBXQuzuy5",
  "key24": "5oBnrRU5h478E2BLg4QZG5vhUhmLvfq4KD9VF9sCrXG1ustWRRUL4TDfy2HyV2mtqu7gbTnhb4YkLAeVXQpCCFw4"
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
