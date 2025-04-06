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
    "3pqg5qCvdWK3DGLCwwezCF2rk8TXdoFUjFzN6bn7oeVjbGqVEXBJPbL7qERYZznQ8e7XiZYrVCxEJf1QCo5kMhwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmjjN8J7DXoQNCHEYhWmGBFc4Gi7u92RBoTpJiTTc7xG2yoVWHBNpKxFxdefMgCQA95243WnWG3qeitmsdYrGp9",
  "key1": "fT3UGMQGHQRnqLKh9ZiLxxBf9fbvyoijRc6AmCLDBRw2zT9zTj6Cmgn7jfsciWiJWmCDcGqHCTeS6BnFE8anxkL",
  "key2": "ywAWM7Jty6cu7aWK4oYri9d7Hh65jpXgRr6NmfBDNYB4nsreoFSSh8g86akmLW3RzNjTGxQwB6AQrkPc4Typ2ET",
  "key3": "4b6752BEderSeuStaKw2GZ3FWy9ZeUxmdU6j6hni2p5Y98T3GedJsZSm5HyP5gVh7sGiftEkEjMCTDaAC5sjg2zi",
  "key4": "4PWpinApeqxmRuuKmavRBYESUw24U3jWhcFv15tK8h5S4dUBA4xasTMk26w8ZdjeojHzF5dTAzS1rLyPjFcQcDPs",
  "key5": "3xc2PDdxbqfWgvLw4ABvugFSgqqGSFFAGn2eLYpt5zJxLyapQnvTQtP7LPRkVJswgFfWfB1xdYTN8MpbtwgeCe5u",
  "key6": "44v7kK5fMqbeZHJRiBFN1QNrnCGaYhWmGYUsKpctaJe3cuPAHaW4qfmvyHiqPv2KR5GQHNhwXCH4S8mbhJfcCSLU",
  "key7": "5ueWLfKEkCP7vZezxgFTjNQ7wsti6xfU2pFnCfrAd54a1s6xmb9JkuYatriQQdPbtEvumSw1CurrLbkpYPu6VsAn",
  "key8": "5xxwtyaumgCv7kwDmL15q6PZJBwumpwgwyXcGk942oq5rA21S9yTNUszAB6ofEFPqmiTcDmVWFcqTrp6RgasDd1e",
  "key9": "4cw73FfAzEAU1ms6Jhq1CtGCrxLobNrCQb1WFGHBaRvGLQU6PzGEw4u1P434VCjQxZL7VxW4vFm4JD7CEbxM1cBy",
  "key10": "eLw7w84N1PFFAMHdyTqVRXka7833CcGZVLvPtXP1JdMbRYv1T7KngWj4o3tUmpZcmFivcTFGdR7VuGP8HxzZBaA",
  "key11": "64mrLqJK12rmjK9uqVyU1PCkA6CMALQYypyFwAZoZBqkHDHDLSSRqvaCDtHfTV58LJmmrA1MX2mY3WZqRPKH8ZgB",
  "key12": "2jA3pdEP5J7SjqsWNU25KTN5v8rctVrH6txv9sh9hi6V7dDoQE9zeqL4krXdH2KL7gXrFnJbLsU1UCWw9kNB8RSG",
  "key13": "2WviC3rsh6RzQC8ypJ7dbRZnWpNxLstEJ42NG2zFcX9d6FQQeAvTbykiXgq9oWZVQbeGcFT2afyLNdYeCi4thLkj",
  "key14": "4SnXM8M1vQLf2VY2kZK3oJGGBvwcGmtyQxGbUfhUbtdQrBoe3JGHq81HbdzZJu7nxqwbA9fuodFRztp33VFsqPD1",
  "key15": "1QkexYCCzHVPLRJvMGo7TPxwFfeJhsEkmyYP2XHtutESkDJ3cmQFFTFm3TRrpNDksNYXAhgZmpPfQTcLo3CaT5w",
  "key16": "9VbGXmt6aSPJJAEfd4izMEScwpnZXqCgPHGjdmaGfYwoR1eNWw4TH64nJx3TJ2d8XghZ6aHHnVJkR6ebSF17aW4",
  "key17": "2fgwGedm4KdARa5LLZSQQphgM2uLh7QzR4khCh57xj9rJbhXAPV7DN3nhLF38z4y5qHBXFNCM9So8rr6LwrjbJNK",
  "key18": "3tMbMR5HeVyW6qGBC933yMP3CmV3JeepaGG997HghJsZrpEyHhpq6AQfGAjKX5peTfaEaq9Hq5RecbMSCXQ6pPZb",
  "key19": "2aMykDmfkkG82NHb7Xctp9GQnUWXGijEtR4AeKcQiDS1E1ktqgWLWFrKxmqueAPFNVqyhXAPW9fa23XZppp8Vp7w",
  "key20": "4mz1z61bQbiGoKmLVDeystmt9AzwPG2bAPDTPxh2EwRBSDQFd2Y6SF9zsUww63aPUGWmroN8j4QJPvYdLY3NEEZR",
  "key21": "61vXKHGbTnqLFT4TPW2T8CcRB2R6wfMufpyrBNenMDvVf6abJdjdELhaEyHWkyNcnwZNUrYbDXufk1yjxudUvFd9",
  "key22": "2cjDMgps8WC9csz7E3CWgmVkYKd7VLc83QDCEmC8CMs1pqsfRggSxL4s7yYMCjZjPAeP74c4fCTAuCCDHByVhEHd",
  "key23": "44cA7HPmuicW6dC8ChhR9fHwF64QSDPJGUjBudUptLfMB4TGno2dz1ZqoMo4XXeCsUWJh5kyuwUMpBSLdAVbKAkr",
  "key24": "3SirqLJpyAeqFKiEpkDj5yDMNHcbWoy5BoNrbA1FY8fXrF5MecXFC74ZZjaYeRRxUAhvCm5hpFbAJBvAvjhzoT9N",
  "key25": "57dDzabU7pa3nzWaaTLKopahcUe49givTFPmZ8BMGQRR9nqs9miwVBAToFuvHsaYx9vzmn2d4HEbcrp64xDxMxcH",
  "key26": "4aJtYgN9y74C8324uFcWubgpAU1qir8nUiqLeMGok1heWXH4RXvJ2SwmupPuaNgrTZj2jrP6sWoiAEv3UrSCFxqe",
  "key27": "4zhGSgmbheWjPxvMgFGvBWa3WSizPjzBCwNuk3QrFvuGkZbXUPha8onrFWaCxLBEwFGWpgYpKeB4ztqQipfndALK",
  "key28": "2t9tb4Qd49Z3FZUeLcjRXDHin3RwLPiPtKm7ctjUAWLWjmUS1v51R7AhCzCV928VzNGPguFCo3fnTZkKygAtezS4",
  "key29": "31UvDr9kiffb723V7N9brNRTnffgTM3gZc4CfNc7KECA8Lea7NKm4Mj6iJ2i7rviD5svgnTFgDymgCGoBiLAWp8c",
  "key30": "5aPcdvuhAV1pAbE1HAVRW9cMNRNKXm2HGFcwFAb9LaMnPpq3kGdHrLbLaepnjRnR3PtvPs7ipU23c1YAhWcjgdvf",
  "key31": "tGagJg1FU38SMyFd8XshKdTy9qK9q697nEpikf1d4M2y5a9oRTFS6mXKEJhv8gRfshnQHkTg2SUsdNj7qQRCVGK",
  "key32": "23HnMHwwzHexRJZVtvrgSvUbNhWUxDYeibZPAjBrh1LefWZQh18brkcZxhmG4xGQShNggJLudmdgs6rUzqUSdbjL",
  "key33": "3RTANhZUitJmLwp96uhxfTnAJBZLVGZWxZq8wfDN6miR9DaLvj35gW798qKs8AWhrfCEeS5o2xzHSUGAtTogHBez",
  "key34": "5cjKpdeg6Y1P8QTexw8i5mbaR6Xi5KjrULaEwHgqSR34vGYoupTdzzd4Ap7XQer17H1TA529XCGRtczzLHaHmeJF",
  "key35": "41yY8iAWkvdtMidSvPVgcJmkT4U9HonCUvuLJWWhJdyzYJf3zgiUrwjvCw9WKgu38MSVrdmxs7hDDaXW6pVuzsQG",
  "key36": "3DQVfPxQZjWXAxiaLpanuXPsdKQY6t4wUxhXkiYfNiMWf8wmHh6ifXLsn5BGK2V14BZTSEedSAvGkMggLcELjWMA",
  "key37": "4AD7RCTZdGLPgbkfHqyftWdG7wZzgRmymtHqQnaNQgmYyzUqn6YPimTb2UeKtLQsTzaZxXY6jc1u9p7Yxeysy5Yg",
  "key38": "BMeYcsVLJYdLP5sWddxqv4keT5diMuCZuCLGwPv2zgP1eGNL572o7jMwUni6w3RjAzpDeUbmF5NgLw8QiLyMCx8",
  "key39": "3rhazcUZ8MKbRXNahPnWFp6hsSuvLST69DZcdSUCnJV5jiYXDLeZAVQ1d5ucDzkhx24C4RwBNWow51zYxkT5nvjk",
  "key40": "4h4VCBmeqgVaBSz5YaZmBGNUwMLwaoCNHSkh9N9x72c4cQRRnp6VDQwBe4dpgsMGTCiF6K3J8jkEiuuGM4RNv3hS",
  "key41": "4xvrhGnPw7hGLjnPza5XbvybABikNhgHSENvM4HNCCUHLHTZJ9qFwsbuDsGB51necWgEeqcdqNfKeHFjD5Li9U7k",
  "key42": "2HehtP8CfXxEe5hCAqYGTT5enMWFgeJLbZiHJqEtuLQfdVF62oJkLBSymRNkCxDGA9VcPs7s4yc2HJFZZE5V5QVC",
  "key43": "3W9H9AP1DwhBvT4Qy5bfZx2MKAHmhcdkH65qqtHYUdtQ5rqfeWNuXJ6LaVDS3PYef6aSK18DfLPQRTN1NwVDbsDE",
  "key44": "5qkXE6JQ4zU522uisaQgmpRg62dLgPsSZ2GtcLxVpxW24omGqZ3uER5nSeqMtHtigS24SuxnheqLRLRqLS4GTvwo",
  "key45": "2q6vAGzt8T1garPQCpurVFKjeyGtkCdUDZW1ueERHVsSYLiiPft3QztvDEGkthUqDbKupuW9CdTNQKZmGd7nfWEB",
  "key46": "5hohTbx4UXpQjpKavtjAhCGbMe5qFkdArSD2QMTMBse2kifxJwo2UkTi7ThrBUUCP2rFvuxoro64eQ37mSS8zA85",
  "key47": "cKFubNaUUpQGLYLjKp4e4ng91iJWBNHsJBzuDWPSh1NX4sokhMbrdSXddmg44Dssa2AK9PZgpseNqgVvxTF9t8D"
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
