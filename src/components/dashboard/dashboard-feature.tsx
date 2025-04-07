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
    "5JdChpFLcERY4bo4eq1KfBL4uDkEserBPirSYgzw4adXeFNTZDLtwMbAhQeJmxm5u3qD1E1icKjxoAqSWY2rqxQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scf5meLgRuVPcvUnrTG7L9h18N9TUiYQAr9rnvEN18qPUkPpNbcxxLfbeZdCSjvXov8taufF3DZshaJwFRYtNj9",
  "key1": "4rUPqiNxsDny9K5kvJA5gu3U7gkxhP1V9d5vpJCQXSAFxaS8rMC6PCNd9ktZcDgCkigwVnHcnvvYjs8igXG95btr",
  "key2": "isLSEw71QwdTUZAzUP9xat48pJ2bYQR1NNFUomUfjnzuBkhoJeieqWM3Kx6ZFSVZcDWsmdvyUWXcVm1VJoo3Nyn",
  "key3": "4ATrR9RZSFHh2LVveq4iho4CbMw17QsWqh4ThoEJKaz3dnBRsb7GBN9Q2hkrmwD1HcgddbhSzgdWER2i9gKEdz6J",
  "key4": "3eVftCR5GKR2juecr3rMy4dbbtUQDcTXJDkfL2deMLoxiTv1tzf1hnc6LHHxEBMgMomKkN4bPBLQPVFht1zNAVgp",
  "key5": "vUPm11JEQwk93asT36JDyxwUEhvDJiKTi3hEqGCHmbCzhctNBLAFVXKSb4wkYcwMog4DdgTwNBPxD4fjzeQAcUE",
  "key6": "pfznT3CSUrM72BvLMXsZbc9KpCEPVuF7bdHqQmXCFi35YRyHdwZtWAHrceXysMdEYTJS7EwqHeEqUutskGHxUJx",
  "key7": "5sfSiiqq1c7WcYDfv9kPTa8yYtu1X8Ew5LZ9zNuK6LKkWUDbnbeG4xXx29g5nSUUPnEv7PNH8ADWPehjHtyZhbnJ",
  "key8": "3rePE9nWVH7EFn4YHyFg4W6KD2HXK8rUCxv5UB8u6sKrY55ii2c51QWVLPXy14kek7MAuYRyBZpHG5wwDDKmBLZG",
  "key9": "4dnNvC1ymYkgSBCf35B8UPgxt2hyXiEsUV3KDLzPpoFNuJqEpGvkWqMX1BpDZJJspsZXJduhX95fsZFV3ZSNHapE",
  "key10": "3vF7dqZo9pVMYA1EdEFnjjCMQ1snKHWdzsw6cNpMDK6AtrhMdm1rXVjbQt5mLqw6SN4VQFsjWeMxWZJ644pCctei",
  "key11": "4VQ2xo2bQQ8roX2kkmp7JGuG6YvQGdw3pHMYMnvBR1NazsL7G32HVBWjJJN1Hc2S9r71CepSHjRaNs4xhK5vtiZ",
  "key12": "5exjpxdEFFiGn4b6kVHWjTWH9h5sPWRk668QKtpbm3MNFVePL4aUfVpvPksQ1jnUBmTHVUMMBTBHXbGQ6KkgmqvL",
  "key13": "612Bx1XjYduuw9kmvyprxPYZq2qw1AQXRLqVr4j7X3ZTj1VRJbdEQJhCetAmSz2H1HsW9Nv32QSJ3EQUj4FiV7Hx",
  "key14": "B2Krpu3NBshhsig3CVuNEWFx4ARivavk2w9pHKLuwsDiFmFyaZiA22psRG3SakNjgt1PUp7kBbBRneSmhRXmmi5",
  "key15": "59eoMtpsEqVRsq1dEXsUzmfvvPy3MPkQM42XoD9m66TfA3Gr5g9yeyKvozYjz8V4MHGNKDPJN39Xi8cU3t3pSSW",
  "key16": "FXmRnHbbbACbyfkHjXDN7CEMX5FxMB2FJSNPE8uP3U6k9pLETMpMapitEa53YYP9bktESMCyrYz8T6w9TWKfdBY",
  "key17": "4QFpJ5sHEQhQrVbnY9V7nza11r1xxxj6c6tNwk8c3iky4NAbrVkRCexic6EvYEZc6p7GhbTFXHajo1W5PypTU3ic",
  "key18": "3Lgen6nKsBunHDq53XRpKuWuNmzNx4xn18UZvP2wRfc2HjDThpF5A5YfrwTKygUq2GKdUHjf3kKNDEZNSRVDTBo6",
  "key19": "3aNQJZ6o5kEdRbLuVu2bLTtU8v7vQwi7QZJzXU7CBVpKh1x77FcHsixN2Fk6eZzefzVC6uQvG12bFm7gcpJiu5vR",
  "key20": "MpkvPaGyEJgE7F6i8MQBcE9qVnYLN8UJn8bZH6Hht5k6xfpz75cNdz6XmtyAxTi6pbejvn2qb5p9XfbWAxFFP1R",
  "key21": "Ane1krEETtA8sT8JbFJ5UGMgrNC7f3vjcGnBYfxcYAzaVeE9g2CRGq2etGX1q5k2uWAs3bi6PF2AnWGRdErHf1k",
  "key22": "23N5ixfkior3UHwh7ubGocpj377sfgv8oE5k1cjuRZYm8WUhPJBtQ4Hk3whRBVGzgiMVRKDo6jHYEwuFMeXxhvH4",
  "key23": "2wAwHJuiimFayjSXde788oBKg3C5okUVs4NXRKu6A59sjHbryw1wqkKX5VJR8sDmwdcTSxtqTDr3qE649ajxWnC",
  "key24": "4NmfyCCTsqDgNhCFnnyJoFmne2GfwgjvB1amfeDxo8s139u2aBw2G3w8SL4duxBdaCMqBm6sU588wNxV95WtKrQD",
  "key25": "3S1Hce8Wqxe8xvKcXVMTWRy3nfYTnGEYeiRPtJzyUY4PRnU4zHkm4TtVZ78n21vHbDG8EEc1s7wZP73BvTiYVQF7",
  "key26": "4EuWdUJVhmv5Ph8hu94LCRsz3z3zpf3k6wFKQvnL4TXCSwn9N8rgWc2NS9zXGyP6K36QcmaXAiKYYd6oqTnurxH2",
  "key27": "28GYDp2rg44mT3d5STeTJFdfYmLmmwzM25LaCLcXarRtuYKt2zoBEwR3evjdF7GFBkRaQbtToiWjgS35iU8LGxoK",
  "key28": "3SsQTUsWU7mrY8b72ije2z6NrewpYq4BZ9ka1g5UqgLeF4JRYScH8ZHUZH1rT6YwZS4PUSAQuSpgtogeXHxZrF3C",
  "key29": "24ZuKrMkvUC27rtAvH5CV3Ek9dYV6Eb2BbbipTxdknAJN15adDAeq42yqXESvTP3ye76ELooGJ1as9gipYdafSfT"
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
