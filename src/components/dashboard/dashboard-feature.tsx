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
    "2jkAvJWsDWTgr3eeVwpoqux1kKYhvraXjZfyZ97Tzab3iFrRn2BVXrjJJ7WwiyTK1tnx8uGyQy6qHEFqD7seVtuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qU3xuosfaiKDg7Wgqq79AFmAXbV33SH1C29w7fiHLZPSsm2PgHVVA4xDCM9foPo99ZSuKTke4RsQEqAwNrqVtsA",
  "key1": "35zuss2Jft9NBQ9nSyYVDpJAQ1twPi1T7DgyWkk4qv8CK2KoioJDidZdJmVK81woRQGWvFLsNtqqQaPvzvPBxvE8",
  "key2": "495Ahud3jCWGQP6AhvYauq98avdK7ySUf3nR1bhTW9KYwEWDtmh4axpEDcuX4k2og1KBnZo3qpjJGeJTAG54wJMP",
  "key3": "4MznnpUUe9MeeUCzCG73ddYE1R74RY288YKuRvmgpQftwuzXi5xn3LDzbDQb4PXNimFBjYLUxpDZetCZ5wL1Pmwu",
  "key4": "DBD941ZV2YE6ZnfHyGtyUcZtTPaSUhyDLbK83eCsK1FbJnvkcz5hR1uQYhjvcwQGJ1hu1UUVLBfgiicKs3KYGkc",
  "key5": "3y667cPRwMpERt8gYF1vLG6mNvwLdzQJUWJCTsoGAAC7mfP31gmDZkB6REEqSJ7eFq8g9RxX8L4T1Kk3icUBwqn",
  "key6": "L9fFECB5CH6WWwNPPEtyKknKUaTKrMMbs5vrNS6shLYPccCPXJDRAXwKETf1iHGkqwNLKsewGXpzCxm6N6EWXnD",
  "key7": "49UqbRSsyDhBni3nGgNwYCisbgpvW18kfq5TiJbkVUYGM1aRKXkbw7nBSrRT9JaBQApoMhH2so2anQw3WJApT7L5",
  "key8": "5ipNHMj5pae6HTGGcS3szspd6mNuoid5ycbF5YeiGXy67tq3UTsvHQDxw3DYTT58B7bBQj6V91dEjUCAG1UDhwjS",
  "key9": "4nsYeuZApNEAtAJec3iP6TYN5qqkg4oD1WQaN2o1usre1tjUoMgH5j1r7UuJR936SHzY348u1sUZLd2m9EUE4FC3",
  "key10": "54Y5aDWRPi8Gmh2jDrVcm71tuAjg3kMnJzVvsUR3BnYrbxyGvGnyQfdZiU9FTFdgne6NavxPE4aQFRN9TFRL1ZhF",
  "key11": "PaHSLqmmpxzUzkxE53RHKQSmw6e7pbKX4w4zh1jZh5XKiAQhG3NbDjiXRtGcYfffvz5ucz4V7beZ5tzaq3Wi4cM",
  "key12": "5HFkaKygw1vPokULKaGmt7fDkeKFwL8HDZj7VzpS9uGd4mp7veSJZJ9xUaCALzmZNnRjs3Y9JcK6DpD4VDS52RJD",
  "key13": "2KpB8acsv9Un3LiRi3RV1JsBk7wbM19EVHHHyXdnBNWjnSC5yX1XVfZmfUkKyAT9454cN4iLbJFtNMNCf8CbcR2n",
  "key14": "22aeWH6tc9B7yUhRLPGWC9p11Vp97LxxTA42J8Lz6E2nEJATaRPwygLKbTRUBq4Pi2Lhh1RtzRmqbr7k7bhKDXrX",
  "key15": "S8HF147NyUwFxTktfzhc2acQE8krAaucVUuEg49AnHg7HfFmSW78jGfBUbiu37cDbZzAdhtzv4Ct8ea1Bm7AByT",
  "key16": "5AiBn5CsZ9yq7p9rkS3BBDCQ1FScidA6GNrQSzGkzvyn9q8CgdcrrSfihoL4JUwvj6xieoq6w47XYtv2Y4GvBgfy",
  "key17": "urhL18kxNpdSjKcYvGUjAJD1JQF2kB8QoAbsuyKStiTShuhwSewY1BxYtAMair8Hwpjyew6UsvGJ98GMoSzi377",
  "key18": "4BxQtxqEXGaJEtY9Eqrc4rTyNZa2YHAnUd8mbjciUnja4PcqPWGo8e6ZtnDjAm19voR84HgVrTsi29r7t3GEuMF4",
  "key19": "2GSHgsdZVf8yyZQnupKLZ3wF6wsxYU6iLkbc5xfSEz8kTZqgANoHL2ZdFr4zChCq9wiw2N6tas1ScUzqtXHh4vr2",
  "key20": "jMWNYzE9TdCcusDzW6M5LJDFuWpT8t4gXrrud9Cpa9fCJgnSWn3XViM5vnfLN2JibcWD9kSkppe6J5LtZ7NK1CJ",
  "key21": "y6fPtqtmnZF9jAU3VNgjSaiEwfCkQUjkG3vVfgyPqRBfLsZYcYsjQ2LK6oDWdxUQNt8TRTMwCCZrYyxHYYXXnmx",
  "key22": "tjwH3f8djDAmnrN3CgnqdzEEvE9bWNsnKFCxpAFtCyafwcPGu5LN2ATQeYVStvjE9uMn3if42f7Lg2KRbddfBSp",
  "key23": "37BjC2Hb35dWX9jAP754Nhx5ApyPMGM466QnGNYjqeWzXVWifqjaXr48N86c8NXunZrezT7rgTecRBGU29bpVhQ2",
  "key24": "249QMS419UdZ3tfqqJnsRPJoWGQbBW1gMC1RoY6nH8t3oKSaK55AUPXYMAmEoLmzJNUM2WMo8owSFrsnSk68ReF1",
  "key25": "r3do1CG2jPk7N9DpMnT9A4hTh1JPKvNen7tBM7EQFg9vJrkybfHxkm8yrmfsdewyeBLQErErK8NbiDj6XDPas1r",
  "key26": "2nLa6ePDxhVrBj8dGzdpBPmrtBBSqwjaDMzLQib7BretUYvjhjYepiTaRsFbuidwzxtaV86KNTF6Hxss7w46qhsV",
  "key27": "5KB8DhdhMYSjSP2XP6UGXTsp5iDCVWtmfGM9GSNYCuQsBhgUyNGQcME5awGUQZKNRL9mPoD1RtptzEHxekxdZK32",
  "key28": "2gWZ16BFzK4edNPq4yWEdcQPia7WmJYfpMKqV55R1igA7WxX8cSDdAu9JxxrwtcdekS6VX8BCR6Es72XbsbZW96q",
  "key29": "NgACE7piUfF9abQVyArdUV919fwLH3UGfG7g1DrVBZ6zhQc9KnMrDVWYK4Y51ZbCKrfGWYtrbE5TazxdNbuSQJy",
  "key30": "5MbTKoBFAsSvxLGmbDe2ninmBCzRE5a2DB7uJmx7M7kWdmTkREBMQVdHaecgAkB15AHdd31xNaSm7pnbZoh1xjaH",
  "key31": "VHM8pjGcj9rxNydboxhBBa6oShx85fihNCBE5UdTAmbcKC4VK8ubpkdyp888QDfJbFWMAwESD3hk8VjQfgmfSU3",
  "key32": "4syep3GNdRJzpBy74bbbPP37MYqHZ2PSYA1RmNNk1HnJRpLbHMKSNr3A4BUuszz9CbavuijkSYcPWsFS4FTA5awi",
  "key33": "62uQF5BRZEY6HjKFjHiath4z9z7x4C2RxV8XkfYkUvqv88WP3Ra1zemWN1Hyae6Nb4zQ9g3Ey4wVzs2qwTBZ6PE9",
  "key34": "5pMyY29g4LJ5CSFJyKxWhUVENHsiZNxEyCpxMkwtxKrNYuymAZm2Ms1keK3LQeLcpBLXHR6EsjFjVBBs5iUUMqbo",
  "key35": "7Q24muh4jNWmFLd4ubiYBf9heCCgrvySLJBpigqWMN1tvB14FkDXUSgfGwTR6CRh7VWRsWAB2jAUaxpoHQMECt1",
  "key36": "5qCWXHT6hMPYZ1iDaT7pauAa4a1FsUMJsVuuqrTLSXhz7uenQXG62SuBDFWVxvk3BKuCrsgnAwTAsU6h6AB4JLmC",
  "key37": "5jAWAcgEMf8mqxA9D7cWwsHe5Rra7vUvmdhVhRLH4xD4Wkfpoh32VfwHWFwXGipQ8Lyw8DAahq2PTnSstGATuKMd",
  "key38": "4FW7dauAzydEj7kzUG5a59MY9cGbbcmk763YLK3FJgmkzVTZNakH5sEDH2meqRKymJs5gfNB48pSPQ1ipvVicVH8",
  "key39": "7nCqNGcqFUKmbPcpo9mpi7BoFvWSEm6GgtWhbHrBufdH6SfZpWZJCPiMxzzFAtmQKtfhr5SqPu61s7MqSjQSr67",
  "key40": "66Vf9nUKELwUmyF8rqAXz7NCPsCAgQWGUP4scGZDU89sAxuiZNVpj9msUjuMQVdeXVxfVVXJg5fQzZj1q7hm6Tkb",
  "key41": "2BvzYqY23Dr8FWZRG734jcTboxqgTHuTtogNdLgnsYYthyVdbgyTrbKvzzxdn4CYyBioy3dy4zHcSeAzTyYjxzND",
  "key42": "4uAwXBMduheYAUGa43sZ9Vfzm9vGtct5rvgz59r4QNUyk9oqpgEV2kbF5opqvsR4QEpdQQrzCFkhiACox4cjUCN7"
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
