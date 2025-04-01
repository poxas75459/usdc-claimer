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
    "4wyjr3gLjuKG5Evt2j3iqKWLB1bie6rNiSeGMSyuWJeu5Acpy71KTcHQVRRWTjeJ92vmk3HAr3LSmRTmxuf33xeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7kCsGpRJi1cKR9HM4DaR6bFTi9DVW7QvkCuSGPHiEpjNHKyAHj2M4qzcGktv27GXsNrdSdSdVyBKJvtt366yxy",
  "key1": "M8VpQuDYC449QUvdYyd3kU9Ybrjr9zvtL5RQ4PWj7E2hnNX1YXH1ocv46Liq2RBYNHXMRnc3P8CHmQohYtRXhyD",
  "key2": "2s1AnWBirr9cebEwKRhA8q6hPDzHxa4UUNFdwouXFhvkFcLPQpjXjKF36V54Hh79Ku6ztk4qQNK87bEznDvDRADL",
  "key3": "2TqMWBX9Fya9bgpamLi1jR8zx6nVHc1WDRqmH4SDwJkjBLTjZFwULkwMo3HtvDebfXuW7g3QM8Yf7ffpAZJmwMYA",
  "key4": "3tmyTUSk6GS5uuYmkHDdjFQHkDKBq56CxRNTLVT1kNNFh8HG4V5ean7ADnUbPDCduDFF2j2j5N32w5GKvRNfHoDk",
  "key5": "4QewzDD3S7QDTvMt8rxeKS1WqLpbAPZYWBJAKfshjwgxZv8gcJvuWVmTTdUFGHmPQntoBtW11AveDyWEVgiQSrmb",
  "key6": "5VijZY5AMiV1yMGM5791UPkoRL3ArxYqUfMx19KW1TuiEVAQiGeTg5jXL6L3ied6FHpJQ4skbTWieq7EztnAQTbu",
  "key7": "4TEUXEowRV82zEQwnmHXfQ97aircaBt9nxrF6B865gurGFdaaKpk7kPzSRW7h6MhitnEFbGasVbf9jd2VdPforGN",
  "key8": "5vhNqLgDjmZX8WSDYq3eQz8T2snnLcWBFEDT1L7SxnwQ2JN9BrREmamUcot3TV8D9FyuxFHpGh4cFpUmvfCkMgfx",
  "key9": "2YKwTgbX4BqnYPd3Mjd7FEi4UfEMQYSJptWTBqgnevAJxqwQW1o1rzuB4HfgSyMsQJFVFoGvc97B4N7UHss12Jj1",
  "key10": "j5gaLW8tkRqToLdHtJVmBgjDZrRjtNsQJ6bJx9kaQrHvwz3xo1jMY5kKj2MktZWok4sGecvQPGqEG8czydfHMQ9",
  "key11": "3FyTkTCo2ZqnL9mJD6Bynuzf1RrE4HpGfo57LMBfprePUPzLNfudjBMDce1qZLL5UezXF64k13cZTomBaxCAGy3d",
  "key12": "3fiBKcXckzGn8DGwNtYe9Mz8DANuKduk6AdhNFYoodQoNjjccSdzBsTkJf98dQ1iANH3p6XtJHzdLrNbRtokFJk3",
  "key13": "2NviLrZ27PPJy4UvsLD3JdzyjaKkaWtXhi2QksrcSZ52SqtNCYMVBo1GuNryVv7QH2789w4sXUYMV1wBEnCSQs2h",
  "key14": "2hDtNBo3SZGDHYTL5LMqPd764dE6PssHcTgnnr6v9DNYbgzpH38dKRmQodBQv7RhAVpQkeSN8ja3mw4c5QpwAXyU",
  "key15": "sEuWTT7kfzUz1Jtc4GSHeMwE5B3qCLeCSJ9FutyVZy1K6okvaq6jCWT6u5nACyWDHbzEPEsP4hhQdbPebu9K2Wq",
  "key16": "49MJG1wpqYxma6LuE1fATqhxQJTpbEcjVEgG2xxasQefKyF4T6GygrrxZhhdm4gfJ1euF1QYHNYc9USmCrRk23y5",
  "key17": "128wW8sSvinrumdUgTMzytUpQMrnoSBh7yU369DjdDj7RQfH2RPXMiSz7ovrgSsZDfbM84bUXs3q2y95fwWNuy6t",
  "key18": "XKiALe4MmBQUoTfwLG6ottSePGGd38X4guHE4VKpn3EHzgXPL1xm8KxwDcjYgB54kdXzqMnJXJEU9acKrzb1CrM",
  "key19": "BTR69hF1zrsn9ZxcYDSAgXTXuhwdynWAcZfYNZrhGjbvZERVmpMMVJrjV9f25FqoJmdJ1ARE7oaJiAvm6TVuajJ",
  "key20": "62QtRQjQcGvX6Lcy2ucZTqdyTYVBPxJUgr3jroGkzBvXNWLf1idJ4VXArVXyBYA4NsAq9qXR12GKYiin2i4rmNoX",
  "key21": "4HBDpkXL9eyQthrGPKEuxvbgKEQwjCgmHNY4d2akDaUUNiEvmv3zehA6CaNc1WaLdnXAcJGEcunYbWHvXVSzhYWf",
  "key22": "2YvzSAoiRPKkiWWWY3CgSrx7AD6f76EAMQaa9tja5RUv1SdRgKfAU8d1KHWnm1YUPgjRNKeeZuLwG68UyGTn74dH",
  "key23": "3Lp5xXVzvxqE6pZvxFGFwSdSAuQhrgoncasgpeBvrYJCRTdgrRTm7PmYi6ERx4AkrEEHCaEEm9hEGt1Vdk1iacyv",
  "key24": "wqcAG22Dqp3RMwrbsBQnGpqdvJv87xSkagifEbMdcfNpSQpAFekQQw5jSwAUEejStaPnnHLzF7WEQGwHV2dqUUe",
  "key25": "4jGdxabd83kdhSzNfzRESSMufU8Locndba2ewWXZVSKKRfPhmfjzGAqWZTpWimzgQmFFA9c8fjEm3pAMFbz988yi",
  "key26": "4dcC4UXCimx7tJXQegJJQmmfGn6jXbNuk8wbxXVtfCWWLWTynwWxCGdSGEkAEtQx9cP4PbpP5mb4bE47MvYXM5Xf",
  "key27": "29C6SYfdhQdieLwt3kAwu6QDzs7WwCbiqkei46bRCnoG9ksVeNENtzLAKrY2SMFD47WRGxjaW3CJoNqvZRd5DCxi",
  "key28": "2CCAnyUbJtjjBgaDKKRipYycee29iKorfLDSgr3xeL5gs7LEbHYGHZRK1VGJuW2kkT1GNZG5TFm15xv1sd6H2o5A",
  "key29": "6T8ZEYCASJDr6ZeXnuH6W7ZrMHPh3Kb3YtH8EnG9VHGxQNVx2YQE9KwJaAVGoY13wRwkB1P8UpaoXvidgwSPjDn",
  "key30": "3VGGM1QPaMAuMbatg1n7o7BNm8rPCZY3moVy7Hx1GGp9PRYeq5dLFVw4j2Nw1w4fKLZxmWs4rrnKP6AN2TJrcDUS",
  "key31": "3BQ5ACp11xioMjAC6ER2EDQxY2EcfQHyHqMR3adVocXE8cPJczAhAXxBKqDv3o8GzJF4NUbyQ3UYWgAgQDKivdnV",
  "key32": "tjm6zuydwJks61F4LQBMuMoQb4MSk7dLrj9636yuzb2RmziPeP5AQYzTxFnk7Kvkkq4JjUhbQxPzqzrpYDxfn74",
  "key33": "66A3ranGiDjvc6FVMAF4itkReqRnpj2PncXaKrJVWp5h9UXeH5Xb3oDv4bmBvUmnEJRtkTNYz44JUkxQyGS4apwG",
  "key34": "5mfsXHxYFqdbiDTtQpAP99gZiRnU51daWyH5WThmhn7HMHeimLPNTedbuzvX2pCaFXWNncAidXinQGa6tkK51kB7",
  "key35": "yqf9cWzozvokfdqwinjDzoiavAchWFFRME3d6veydvq6JoifRmfg3Qtai7eMS95LDNY7SeH4u1voFku1omWEPSP",
  "key36": "2D3BecqibtosS1iRFGX1ER4KAw6Ssug1moU7PredQWX6nhyTvkttDbd9B7EshyiWU9DEMriaGXQM9zCc1SiL9dB",
  "key37": "F1SM9cQPvMc6NFgMZmhAaLKVbPW9srrTErnye3pdgnUQ9ZunePxkNaJ4EZtkbGQwrRzLZwsFFKrshhzcZsPJeA2",
  "key38": "5wcEej9RzUJhC3p23jZMoQ2UgyfWMLjoxifQZtGfZhTZZzQGVwPGAnNRv7YRRV99m6NG4FUmDu3hKRKMopFA963r",
  "key39": "5bo9GREwX7Zk81ezWDFSUXJ1rprzK5AAk1DcGv2MqM6XpP9pcrubTBxoWVr3J8r7cQ8VX8zEFcYTWfbSnWQBVGsq",
  "key40": "422XWD2TskkR5HQe7PbomQvouu4232MpLww53jN7G5UgZ5KatKNLSAeEh9Mf9J7q6bVWZEsXdkzUpwN5ZtHYWFav"
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
