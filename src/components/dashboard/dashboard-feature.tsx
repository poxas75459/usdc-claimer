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
    "4LcfLby5j2vPZ7mLKMbzCKtzzoYyyB28SNjn63BLzB4vhoUcmwFQNZPdA8FJx9Tde168QBpPsK1oEA4ptS76WTGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sS6SteAphWpaVdA9eE9tXfvzYk28ZiGk3na9jsLvkf6dhyz13E3AN1wh1aqzwKtBHqaC52LSwVLtAEMtsjDVRGm",
  "key1": "nFFk2DoRd9hy5oz9Zrqz7s6Rj4jSfAgSWEbAerVBJZR3GSjviVGGTrGZb5puDSiiSn2gGnQtt5Lbi5EBTfiR8ZK",
  "key2": "3zFRJvLLS5M7tPhKm7EoXYhc14uo2nZTsvuNTJo4DiFVxeqq5EkSJraYcijxBvCXxCzAhY62A4wZXDjm7Uh1WAim",
  "key3": "5veA4RDsWjSouJsDVac2DB7U69rDwsDbrDFzynQRB36P1AZ8Gw9daeuTgMNCbkE5YMt9xphkgmuXfFG2ZbgJSip",
  "key4": "3QcQnBtCv636HhDa5b4z57YitU8Dn1ycQqKvJgz2nbcLcLqnsurnctge65t7Zd8GNvNULp1Dq1oCW3hufLdT6vxw",
  "key5": "32dqttnLQnymvYqC86Go4fAdwY8t9xmHx1KRHFo2DXNC3Mi6usmZHyRM23Joa3fcoj3g4KyVKfpmD6za3yYAtbE1",
  "key6": "5wMiHiXaFRGDc7cw6Rx8Ft4pWHQYqpLyoKRevuQYpMEKTeCSRxQwGYHGVLddUt9Bcoxa8c9FiKb9gYGJKeZxeAkx",
  "key7": "ZcCDGM2psBtERgodAPK9pk4DMMhVhdvdDDXfxYKo5ELN8gDCex8YeJwNyhjL9kxa5q3UprD6K9T6uJ6PzU8ZTJq",
  "key8": "5xzsd7DvHFRU5Jybasu3H2TChTQp6BbRrhVfdZDZjwxjtyoxoXGYDYXEuG5B2Pg796k76LG8CWYefeyTyryBdqAR",
  "key9": "3G2JmitpoX4DEv514P3P3cq6WHZQcXwqcCJH2ArZkJcBtEC9KYWnfveSVKkPF779yikPwenmHCoLmYNgqy2FFk9g",
  "key10": "51iBvTDJrrkTHz36mG6DdKkG3erwj3jov8WGEBimLKh1jBamGmVKSMGbjiwfB8sxJ38LBTKpzWNBhypBYBaUUUh5",
  "key11": "y9BMJBNcwpM8FjUyhEvnhFk9bERPrZjWZScq6Ja3zc2YY2kqp87uSYAbe9DVRnQWhpFtFpcnQfDxnpxtzzczheq",
  "key12": "2zGZrQmgFD4v3Q1U2sjkSGRKNQXkwDURNCcX89MRGLPGxfcC5r6LD4rBWcYAT75TRzQEqvoPjTA2uqLjHNLpMiQc",
  "key13": "343UKjtyb6wbzuZUAyvDEcPnJ3m7zaMgg669uS5JdNVFkoWdKrFDvg53jvebCFxkdf6jmFcMRcCr8HLv2U5rFNr6",
  "key14": "RCtBKeQEdPnSWXavNp5UJ8zwPqofFhXadZVR1oixn5cQdAXmQ5ZDg6V2zu2LSrFPPmz4DWdxxb1qnWfh3nouwum",
  "key15": "x9o8QapjfBpAVjKpyQTEsoRyFobmH7iYg1URSKkNBjD97gPfvfe3rzzsk4uPF3fQCFFSyWa8zgMGMUcLM3foASk",
  "key16": "5CSEJayzsQuEHFSQo7CCxwCwzE18bSAkzDFAFy2q79JjYPSip4UF2MHk1ngtFQ7MDJ13SrAY2wnreFUw8CeRfkBR",
  "key17": "2ZedgKZjykaB8RYTZcQwSyUikGsDv9BxfmWbZoWbPECbDz3ZYfCpCwGNJVxk8SKp4JxQ1U9wnmqPknquhU3gQvgy",
  "key18": "3acrw8xRjqe8VJ7tvL4ZT88vVVqb8YmnYj94cNfWSfBQ8GtYY9ERsEfp2cAu3bXmRaem1aQNCdkjdr3nzQuWmQGU",
  "key19": "6PB3kKwQCjMebVYoE3yaS8QBsLVqWdVm768aGbNQ9HqpUh3nSsquzfiPQ48So2uWZNPFEWdNvbeUJjt8AgK6kxQ",
  "key20": "5bVoHsXUHPWQCDDY5BCBAjepjMLZfkWN1W5M86NKWSGdevHr6gLfu2sXyj9k9CQ6vwRoNaezL857kWp7HqC57F5T",
  "key21": "2mAebV1sJTAF75W4SAHYgVgHQF32MrDViP2dntH4JYHiGbSjT5ff6H4pjLuuP2jvtXGCsdQ1CmPz7Rtugeeggb9v",
  "key22": "WgvrSujXwCQxKYrkWdypu7RrDrW4UVLfzyRWMXUmDATptdnbNp7kWsfJ8cNKUw69e2Jiptzz5erABKVpfKSXSn5",
  "key23": "3HtCbjdEUtj39w3ojDNchQENhizBRUMM2DffnHPau7sGQ3ygagQy3gbw51QNrXWCSys7vFPQwyA1GHuU1PNdSs3V",
  "key24": "57KQedWkc2Euh5pW4E2aQuQ4ndqwtChDQi8MBRzKS27hrkJFFqBqUyprjYRSHouxoeUU7EvYPShv7z6UBv33LfRG",
  "key25": "hWPTfNQiceBLR8oVmnXVoiLG2XGs1ZL7H2SuqQpQzmbbbXLXSJ5tJQdrNa5g5Nz55uSrK4eNwgfCQDHh152U1Xh",
  "key26": "h26BijedvMubU38thtbWKVPWMztfQooGjchEqySG6N53ZHthGJrMh3ngtwLNCnxG3mHzpSFhwmpbD7FodoR3mkY",
  "key27": "3dJs3wY7V1KsUmeKdiDTs3uXBRxsGWLXhMVCT4shpvrSobmuAU6vnifzVSEZW99e3X92hY1VaoVxB3TKASvZTENA",
  "key28": "55geay81VhdGt4fMUqmgxi9fv6EEwjzy4MAnWR3Vk8jRFUMmM2RNS2evKM8cJUbAJuujL5CpkhrWVaqJBWpWBWPu"
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
