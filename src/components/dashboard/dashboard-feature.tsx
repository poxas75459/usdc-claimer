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
    "2Tbvx2HHGFDmAqzD97epS9Xi5jHbf3oo3CW1ch2e1bDAGNSiUmRTzAZVBHZLR2GmuAmyhuRDejQHuV5U96Rje6JK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PfxF12YRahPdzxy1ugp1qsLBRux2ZVthQchyt7hgMQp7TS96sjQtBXkTxPNgFjWMYaR8DHuWvDDukG5LJAkHL5m",
  "key1": "SH6kogUvtPzJt29fcz5LTbhw2kf3zNL8qf3bKVqdXgXbQysGVjW4PEsjiuDjDiHDDuxpSUeZqJdZRbbWScgtt22",
  "key2": "k4tZy2grGkbKZMRJz7sPirG5T5vF6HL6jiJJG48E4pcjC1PcmJYZj1oR3yXzom1w8Qq2U3GwN7hnsRHGd1Liw87",
  "key3": "4yZbmX74Sd4sLr5tzwNGeDeMky2cEjkbgkLf5XitTw8GmyQDG4cA47sMd8BGvBX5HHZfzwa27iCFur56UVYiDWPZ",
  "key4": "3CkZj1SCGUSrUVefwh1z1mLctkqDCAB3kVd3fvp8w4iStjxfB8zt1qZyqMy1FzD6ERo58NFemEX4H6PYgHxoqueY",
  "key5": "46YXU4ZCVKdPD8a6TFHKn4iaihQNc7ehYj3Z2jNGi3j9Ax7gHhQ3P533wDTZpcY6dVkgNNme5jbNkY3BAQ9tPtat",
  "key6": "255Xsk9DBmYgC2UmuuLKkU8wgG9ggEsZRVdM979LnTvo2r5u9BHWHYmrTJqDz8NhDRGkizcP3aRX9Dr4UV9waGGX",
  "key7": "rVujYCijDZEQ8P3D7KwwZnxwFdUyjREATX5skZXvFW3Sxs5VbcWBhuzSBehD4XREjKSCtca4TdPtZzL3Yy3mebQ",
  "key8": "2KbYMZoLRXNQWgyLgkvaRFuen7xPfHj5KPkafuBFEpJRvUFLogxqm6pZkCvj5ijnWn7xEfJ9qsmi92bZahxuheQX",
  "key9": "5NFhwpMjJTx4Rjh3vrXgYVF8TeebbMYftUwzWABhFHZNr34Fq9Q8raheHhcXa7DobB5HTxLubp2oFfM2JUDGPdGp",
  "key10": "31USR83489quTX13tNMi5SL3QWWeUiw7JqUrjCCtXPWtBwYVwAA2E4dzu4i8bcyjKwXknn33kptoWmQjkp7E4RAT",
  "key11": "3EmT6V7ioHYM9mRPExqqie7GPHkdczuwAJYKHEhQ6Zq4oStKThv6S4WnrTueXFHbizhnTNBJwP2coLdwADcZ12VM",
  "key12": "3K68zX5KtVq6nMqA79Xqt9H58fshnQnnQjfqFEFdaNSirSMaoKHBtzFuNRh8ib9A7fuesXiKijFQywXmXgFtjeYD",
  "key13": "5PN2V4yg1oUDpc2y8TeYs1NhvDj9RDyaj3BALX9uUcW2gzXF1tuGPXmHK3vgkfJdoeGZCi1vJgKae8Kug2cfdm5e",
  "key14": "3ypNUbCrHjC2LereMCA7gd3QqX5MWNt1a59TZES5LN5vio23DJfqMCVr9a7EhcNQWXPJZa9KfvwU8g9hmXQ7z1mY",
  "key15": "32rAZvsXm8t4XUKbnRXNDVBaUyY8qJAxKGz4pLznDfRzCv1VtKMJTw335pPZSFaE5DBHa7gZkGZR9rwL6zycUnHm",
  "key16": "4ZNSFd8Jq58JawRG6MgJ9ZxwLQcaFMMFrVJXhMBN6mVZ5mBe6EG24aKQmAnUPam1SGfJY8CjhktFWNMDhKhhqLgV",
  "key17": "JNyFb2CdW8PpDWwHSuRCKdFnurrdUK4n1gxpTAgzrW7rgLYFcM7KbAFY1VN4qQvVEMEVgP411AncRv3YDo9KN6r",
  "key18": "3fapHkVXkfx34M9jspQAd3DiCdSBHSXSWGaYxXfmoPfZXNygqRSiqhqBFJL5jwkgnrYZRDLamTEqKvjBaScwV46D",
  "key19": "ogNz8PqBEXUxVop4iFHDqujRxNVzvGoKcX712dJqnfsCPLpDAAobnKZkt9NQx84dV5jxbfxhATbPCYCWDvSrqe1",
  "key20": "2EkGLGvcnmY28cCFLUPLpwBCwibjB7HZsuTNmfvKGmm92DWZN99z4uXJynDsw7zD1NQcCM34YT13VQEKQCMtwdtr",
  "key21": "5LcWvu94Y87uj34BDCWAPjF3EcF1UqYUUaSuJ5PvTDw5Q1z9CmFdsNABovkKJi6uUmvd5rM1kHnJgcfSYKkyi1De",
  "key22": "4BZaimduSqGJeyU2E67mCWnHWXYMgkyALc3aRyHzDk7eqLMPVkznTromKF27qxKajCvKFCUbpeoKyt2tiznfeeYv",
  "key23": "4BoqsGcuk4Ge9AsdpfeAYH7mUeDWDpGoPbLomFptqVRuToPBdfer4ap16sxAabMRyrSuPifLu3VugEAtRHET6CSD",
  "key24": "3yypLRarLG3AQfBuWiS4n67XAdzpAYSUYragZxmEjv66bcdbgzxLsnRjpb4rjzidkGE2GbqHeMXmYvjRYKrujzyY",
  "key25": "3A98eADPvH1ZkBF3KxkgZJV6kHRcfFm5nkkmoRz2jGNaBjR5LLGwPsWoK2kctm9pBSHRySxAMGDXMDPpxEjXsKk3",
  "key26": "4vAkMC3kMStpzsh71nPVK1NdjecRJ7JWj96fv6KHS7eNhC6UfCS2xcV5jtjgxwX6qWTxqvH3cUP1RUJUKggbB59u",
  "key27": "4KiCJgeJKJ1W5ZFqy7AHpffXiLvSaP21JhFaDqJoGwfv8w3pg8U9oCndRZo1LX4TiGMZ8sQLk55uqxCJTQbjJv5y",
  "key28": "3iMJh3XAjWYmjHfebafs6FziaRZnDbjWrcqSgoxCaEv67S4FS782tkJTsVe3mdF5Qbt5E4qK3yVhGDKV9JHmaU84",
  "key29": "2UBvdLvWxDi63qqyWM86Nw6FmZuwPyb3eHTmt4JD7iGYKwbKUyjEMtMZsvNmNHW8PU3vvdpb6wX3sfBMhaiEATd9",
  "key30": "xj82YBsrJ3CRLGFAqKh814EfnHCn12RBMvrF8VtJsrgQT6ECosLV1Kvyf2Jxdd4JxdqcBTd3ta5dcch7Ud28iH1",
  "key31": "3prX4qRHH8o9JuyPKQ7PKfz1YmhnhFGvfyJgkyBdpxzgJ7MLWJCG4WE2mnkiCBWjJtqmUxE7weDvs7fVt78HvBgg"
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
