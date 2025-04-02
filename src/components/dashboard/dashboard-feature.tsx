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
    "2tqBHmmpnRetscKtXV3oYi6QvG9cj2ueFEuoc3Cs1gW1J2WLNwPRB1nH4RU7TUKcoY5QtnUpqn7KxuKmChnXasaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eSPMSeViQq18ChCAvfDKWGKkpwt1PTLtmuv1cVje7YRaa8uWDJvYYNqJr9B2RtQcqB1zdSLQp2jowma7dxQTJSh",
  "key1": "5sKXrFRUDKiaXcqwNrb52ttUQMwPSJXXXhDFxTxuTtP9PuHaP27Xk6dmxQ1edqPX76DCF59Kibr3obABJBkVMMH3",
  "key2": "CyCwtfPRMvcdN43KpdicJsUn373h8xE5PJJwfPfEExnXGAd9xJGgYsUgyPyqmg7Hwp8eXd65rhoLRUQDbENYpbm",
  "key3": "QTBjjqkwpjmQ8A9DLE5DqMcmy7PbUEic6CGJmaTonZtQJtU4jMCvKqZBC2XfBX9SMsGqZdqNhizqPieaUhXBgY5",
  "key4": "3wavWXQRLGbuHnfkP3FG8aGZtgC5XM9M2zLuVSLMn4eVf44mq3feG9fELPWuM91f3jucZxuBbbctg5juzgoHpERL",
  "key5": "2EYFJqpNSLhihLqvmPPDpfpJewcZhvzay5QU5YqjxSPN3Z4grB3WNYc4snbJVp5vMb3qqqstQ8vmSGC8WDDrTewv",
  "key6": "8U7xgt4GUBam5jDDVeKPQFe92MXATiFKEYS7EaWxAjTYndLGrLyHcUJdcS4RoefSS9fJVWCgjhxkTqVS2Ma3L7W",
  "key7": "2P7xsSj32Behu1zFuTvFAPfuVTKuSvVBaebVob7syn3sUNDgzvepTcBmNu38vTyKMcsrSbVe7t67gsf9kmGAZiGB",
  "key8": "3PPTJg1MXECGuX5TQEX4ngyoqu9Tor6FMQgey8e1Avb8dMoX4NngQezQotxFGCgG8VWZKxTtnBavYUdGU1fRfNsB",
  "key9": "2pszPDCE1Cnf52nDnA7znkYfLavFLtR1tb1EQCgW7Cec46KRy64fdN63Fq6oq2BsCBq3TNZAoRwP2W8n4DqHX4zT",
  "key10": "JMTiZs1nNK5ZkMd3xTSRz6QaKT9kDacW91zJgjJxrifTTxAErU4rH9LEMpyfmoZhZjRVLQNNYhfuZsKn2rbaMsa",
  "key11": "4nQFXHnnMsYKyRr6vrRHAZh5yEiR66FoBWQ5oaNE5t9fbsTGjC8FVfELXSx4QhbZgyWqqXT5GmardM3uu7T8STHU",
  "key12": "5uggxcMKLbZqaTDWxfTRP8PUSoCdpGBnbGmdHxNVS2fpW5j4jLaSG3p2fgWshDv6KaXLYGssAn5Fk9dm7zDkxNxd",
  "key13": "548CH9W9zoGkqUNHeYRHFDm4d6XiuNVwjJLhcjoA1cK66snynegn8mUHwmYEYhJCspNk3t81h7KW8XTjipGA5BB5",
  "key14": "ipr6S2nCGreGQCGAfpHxaXVPAywJXpUwm8MH7sWCmbj4SqbiBNmWUA9CUn55ERxkmwxed2aiAH8C7asNJbCcCqA",
  "key15": "5u7Nu461i9FtGHkKQhVCZondirJ6qgXPDsxxWjKrbm9QaKG7Wbu9pjq1roeY29WYyWUEhnsAk3apDuwC1CZxbmx8",
  "key16": "VTeekGvk2sYpyGmkmbbGzKysWkHtRkegmdw4By6w1mnQYDyXgnd9NmGGX32jQh6G7dAmMXHeNPomSUg7CRFx16v",
  "key17": "wqy2Y6Y4DN8M6P7DBY6kJ6TMGzz6Vvpc7CbfTzRSafbiQaTWkmMmHcDbXoa4LUDwg25n6UJgJuWXc71E8Yk69ek",
  "key18": "59Y1zx664gEZHodXAkRyH2FCUnqQAxbyyRpdPPKDRJ5F31GugxjMsgs8PWuUuPw5WGjEuJ2NwHXyUVzAcP7oUFak",
  "key19": "4BfPSLfcvbxAQte1StqEJ42cHaKv5cAAWmWKktuaHjDUCK3WhAvufPdtEU1kxjfptaWzP5Rr2ai8A75sa2V9MePH",
  "key20": "4gZqK5hdahFEoGpJksY3dgJvjh8Mbpar6UsFjLwN1MbxDV8ZnFUc9MjHgnK5uLbg8PRHGo7YkWYmvFoejDiJ2agK",
  "key21": "4b9AjYqbZ9yPQg4HDFqALTpat4jabGKF9mzjjDJN4BjHZsLybJDtF7rJ8LjjYLWSTL6YhV3RZZtYgdHpxbQJDAsN",
  "key22": "NVzzXQszFafR5SFjj488LBDLuXRWnBwkAquEWWL2PH4p1b5osvTXEQ2j9EfEwr9A4NRNDjFT9BN9CEfigzpSF9Z",
  "key23": "3djHK2mv28uADfpg3XLwqXbXYor74srAC6LEPthYjh9NcUD2nd8Gp9tWYJJ8eoYvEGNLvQgikjpm2E8sN5Fdsyxg",
  "key24": "2ywPjcubg4HvoDv26DXn8oynHHBnBSetpykPWrdw8b6MjDX8444DEhdMPVb4hfk6cHHfCg73maKiECmYKacY15YH",
  "key25": "4Ji4622vxbchQjxmbGBijvkoMotkeftU36JTQFYBgUq4645EBTWpFrSxURBEEhJqDkgYWsc9hHPLKvZ49t9Et3zz",
  "key26": "3JYfA6SbemwSFT1atq4Mnbnegk6fzFYLDRMrse3wTUfKWW8JzeHptSs5DdGWb6i1GFPExoEANicvoNmw2jWZCHEM",
  "key27": "354u4nRp3nV676LhefnUehYV7C1Esfej5VBbj67s9pg7z3fTynTrLifVS1ujukeseYRDoaFwYJygyefvxZUTs7r5",
  "key28": "2CXnb6rug6vB1GV7yc7ypyDyKEXppAtuEVYh2FHJgR1XyYa3mEFHar37RdqLo9NBJK3eLPqGaaSZEoQnzeGGuNer",
  "key29": "GrhVStNQQKHSUB2YGK7qfhoe4ER3XM4tsMmrnXbhqMEnoPReZbNucNWYWvJFvtis4efxjWaSfLhMEXWhxdE13ma"
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
