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
    "4KZ9TooHy8nJjwjd982F5RdAe72DtPRYQt11MmNQ97r3rj16Bo7dKgMSQMHdaNPvZX4VSUn3eqL9xPXkqcGHxGWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aS3Jt5mUoqFFMpicSEH6UNCSgKcEbf6quCAch6eUX4Z9duTuVqASxfFAggw659RAbNn1NL6ks8GsLX8zFK5cqA4",
  "key1": "3aRiiEjzP4KLjUyS71YyNMJB6FoHahYPmx2Tgq6NvKovHmb1m9HH7W5cCgEheXKaDD677ruciYmWa1XdAodMeZ6t",
  "key2": "2byDwa2nGMptZgG6HdjXgg5LJP3fK6oU59eBTmoknPTZQtTtStBSXoj3Lbv8Q78Guhc7dyUNDfhsTN7PMwhSCpvC",
  "key3": "3R2inct9Dj1p2E6Xc7R6fNt69uCWxj5sxm1gB7pGmXbVr87NB1jvGarYDU7j97biPbsLdumaCSococKkQHLhL3zu",
  "key4": "37VsFH8aN2PLfWt1jNMmtv3y3tcjdeKjtjCc2GnqH2Yc2CNxTjYmWiakwnuTxd7siRi79y2vsJZqS8sJpNpjE579",
  "key5": "3beExNbTub9Nu4hKCNsgXTS34btxWGC4Z1FcRut4hhyWzDsVk7SFC5SBQPpKwFVpWWQfV7iei78JBC8JVpqqL6tR",
  "key6": "BVv1dme9F5fKRVN1b6KYWGWRPu1gWTbxi6vhezhzpHXKwrWRQXWGyCYActidt5gN5sht8s6YWyVo93PTzdxn5Nm",
  "key7": "5ibMSXnrMWToCunD8NYwD9igU59aUSXySE3yYhoYyEQFZmuy8chWws4hHkqLdCSJGYAyHD5F9WseMHKQsqw2KgA1",
  "key8": "1hHNAxsZwDjYb3DjS7rdL8mYRdGv8zJLyecsvg18XconxWKG5JNpo7QR1vBz4C7PchczuyJgPZxSZXTRibDfLPF",
  "key9": "GdB7f7KGmdyfE1kTNjJHzYDaqgXC5qz8ETApxniSxKH3mPh4uEBCTfvrQpCk3TjKL3ha12agfjeTcgZzTzetZ2R",
  "key10": "bYUR1DP5k1bkktiv2JGBeN2GcBXQHKN5geaHK1tsf86fdGUGjGYB6sS5sTGDs8AD7wy6Mi5krkvcWifFpQ4BYqx",
  "key11": "4fN5CntbTAh8yta9TNUKHT3nu8unC996TEasEhHNmm4rfr8NA4nUNzAXBheCBPAJDJ1QWy4nY94ZYAJCEidMhtfk",
  "key12": "28wUmFe1TvfrRaUnHeEhv7WtLzaU96DVeE6t9CMWV5Mxc535hLTj5gGBV5iNjyX7gwCtVDpU8h9SHiiFNgH2kbAb",
  "key13": "4qCZk6fZRoeTkcuoNdXUFogKJobdUq64ieTqiRZWb7jfGnj7fwZiACiWwU8rQoVUoyv1iLFhj3iZYxq8iZTTsHd1",
  "key14": "4VmWbjpDqckZZMwPaZ8cN9rATz4DvXSUdFBx2TFVmYiL4HFQzCPyqXidbkkUSdauK5k1Rces3CbwkjevHyqNY8RS",
  "key15": "JubTf9e5ogobKwg57qgCeUNMwoAFeEdmnJ9JSJkMezVLsixcpJ4wWQ1UaZaJyzcHPqq47iWKz152WMfnsR8xKPL",
  "key16": "41hmFXzzL5JhS4ryTL52zT6fkiAfKtfQWCyCFk3MwjeqEz4wxo84MDzsaUtz9sEPAEUigVY8fTqVcL6XkqspvVgX",
  "key17": "trPeTLgVUZixKsysZ6hoaYbGs5AyobVjAcApC73rvhMEQYnHBeJvYdNfZU5a81UbJmtdyh1446baQChSit68DmP",
  "key18": "3Ko1hPMfRNutChTYwjBckJRjary5ssKkvGwyDKAkLtx7T3qvpYy9mPVwFY8QvvjWHiKcpJS8UN9gEwcidoG6LjxG",
  "key19": "HpAwPGw1aQjzHVkyXjAqfKZ4NwhWkgYsp4Li85ibEkZmxnPZiWodvaZHue2qvY6b2qUHS5pg9fyq9pCoWVW2QhP",
  "key20": "2khPoozQZ4tv8eixPM2oSKcGjLvte4B9x1grTGTZPB9bH24L6DGiFTscTKv3BxELW7BMz2vKeozEmDkEHn86V276",
  "key21": "4tshzwrNGbHwSeMgTgG3hQcPonxhXDiCDX5r29ewXMNynUtSTEG6VcpQtmKmroLGqTqVc5kiaCQNfenQJaYpmR5",
  "key22": "3dfGEfzpA8D21U5pu52EPvvaSshgoDHgY8EUAiSMPvkoeNNat2xRPyg61KD81myTjbapYKLV9AofHgGB5GwAXt7",
  "key23": "5BkZrKHoH9DnJ5WZXHEzSaBgh7dbYHq7NvWdHDAsv6Ki8oPZ4oRrtRoQjEao7idCcN416M5mo44cNJDNGg3SUiYL",
  "key24": "5uaYCptmaWYw5ssgHE5SLgFayyLEk8jmMQFRsfsjETm3WNG9dwL1PoNsucBhSyFZYvQ83ywCYfN3RCTopWXZ9jh3",
  "key25": "uCkxB2mGVwyjFBoz3qcgNZi3653abXGmGriB866TrCgAVe9RjSapL8J4wYeiXDQj1J72wa5VPjPRyex9mYsUW44",
  "key26": "4rz27phQsF169vX4kdknKFqqwQrA5Sgh3d3vqqyXh5ekJ45wTykvv4gKzvMeHnB7Ah976rfWXHaYTThkshWHwNAQ",
  "key27": "26mZAhf5ayF7yu1CCz8qFjZujzeeCt4AfESYFhJxSF9W2MBhw4Xz8LtvC2jVwUfTuVvhRM1YWL75ZuRz168SRPt7",
  "key28": "4eFaEBhbvD1pvtdczFLHy8SctLMgj6cr1w9sMwGz4xFGC25PxKfZ6dfmKzGo7Zvk3uEunEtmKiWXCvNoJdopdjYn",
  "key29": "3vkPqZu49s8wHerQae42FCZvB5CAtvqFUSPc3ARhBLT4FzkXx9jFQj3mq6Jj6Ytr1hYZSwRb2YsHUkNrAJAXF72p",
  "key30": "523s9mqhxaPavqWHGtKHq4YS13jc1mS5q7Rm65qf3uVsXnLRdeQUgNwCLkas5TupvEjRPFs28CspVjUUJUknhpEt",
  "key31": "4Hrd7ikzsTZQzYxoMkjRAxpLK4fXkHVea5bK65K9mv2fvUEhofVSHE7crTwURTitRuzPoKzrRLMviQqHdNykJ5S4",
  "key32": "2MKw55XK8aub28CtAXEKZ65fzsTWo1JpouxcYftCyTSH9QVt3f4uH7C3gx2b7ueP1hUYUYeSvU12B7rpPqafosk4",
  "key33": "4iBrgTZCnwFEw2bM9Ffhj1FpHYSy6D8MwLUtbV8v3kSFi1GD5JoZq9DNa1FBUMmiwskMC4kHqLjXLb4TGv3y9kKm",
  "key34": "51gjBoHTfFVfTN1gowRRYY8XqDQMcLWNJxZrFv1kupXJU7BSm4LQJQr2WunJsRaemgwoS3S2Y5E35uHYSadXzYK6",
  "key35": "2uDNkwLajBhsHmumR4qFAtsqFsuzW95wsRQYhTMf9e4sGqy8owd4D9DyTrpWBL8CE58wDuUiNVcuHPeKqeLq4ysM",
  "key36": "kCJ5sifMwD2B1phQAnTShKwyjfRPRpXGhW7XHSqYjS3rithxJjuGSRGo72EG6DUSLyn7duCppCSbPMJv8Fhivn2",
  "key37": "44pvJmpc5KBbQR3kANZmGqkdJHMV1ye4zyudT9y3srLmf7FhJSRzqY4YAfCU7f35L8hxdW1uiXyX5C7yx1Wun6F7"
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
