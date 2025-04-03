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
    "3NsMcv5ZVBajesDjiHa7QeKKBfjyDz2ViK59JiDrrkDgVKob3zrerNdXbKrJ3AAgnVu3aa8XQ4DMfGBaNZ6Gn7pN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k11BXEotLbGwDkepSM7YsMupwcnGk5pJJUo3Gbut7XwndicJveDe7LYn6rvuCbDPfRKueJteLFRQncL265VnQHK",
  "key1": "41oXShu896FC1erzHnAaFVM2ddUoM9PV8ztY38RRLqDT6HAyWFB1jgvibciWmSqh8DBUyWSc66DRuY2gnsamv3Fi",
  "key2": "5kgMinqjWtnmBEK5Xnetism4X9qXAcQ5A3Nibuf3iH3zXDneXQDc2FxKTxmAdGuzWRZza8cZQs8m7i9udoMJQZRT",
  "key3": "5yfYh7hsedSeUpLA7JyXGDzPLt1mE1nxv9efxNV8x48kKjZjLA4dJBbtaSqspCDqc5mZo2cqtZh9ZZYAakLLrkTy",
  "key4": "32AJBC5tzG4PQxF5X8AFa8SKRuAMhJ88DMr5qng6aik4A9yQMrF4j21vqo3tKuCW43GvSwyPd7BtwLXgBAnDaLM3",
  "key5": "2NG9f15SehvswkcoEAm3TothREwpY3pBjhuT1hKnJ3WT5eEkUgwtFWSJpVrxgex8SVcMmcxCNrbFPL628YvHDthm",
  "key6": "3MHziXy8e4turT8HRoYfkKeYHgpgjLMhSpKUeD8Mui7dMeAEC8bokHJQ89DtsTGeRUwbhtVDM86H9VREy7XJP1QC",
  "key7": "3nzk6bqX7eBEG1ApTcRWziYGGhVf5H58udMqB7gpZxktGyYupJkVTDtQHKeZqkgqjuE2V5zbTvB4dQZQv8kei9gi",
  "key8": "35PmwnKefJezQVU6GDmQzWZJZhEVia81vMdB5twM5RvK6L1ZPdyidwkhqt69JCV4KtSqxQGGAuqXU16p2CjoQZHJ",
  "key9": "5FR81TgBih8q6Rfqoo58uUTjJ2MmUnDMEFkRo8KkGQqCGYZiSCgcH2dxguz3keJpfhswqpqYuWezYwwcpgn4zTzS",
  "key10": "3UERZ7WXjP9sh3gCctRvsf7Rq8K3VEiUZNB692Ri5YDpMfdTxfGtQuH7BwKsdDVpqKK39Z37svfxzzTrczbND2NK",
  "key11": "6453VU3z5WApr8qeh7xgA123ymtXzaknUaRHu5jnKTCF8ncW9LpZ3AFhvV6BehnXvaz7PXShy8m4RJhweSiLZB72",
  "key12": "AbHFQbHsxjv8AABrjp7esdE1piMKuhLmE2bB7BVifkYJwSXFADBis82TjGT3Kb14R9yofQY7bosvAA4KgU3hVgE",
  "key13": "35uW6PGys9JMF8uBFenKqM3uggFxiadwBHH1QzzvA6jvrgZSNrj5XkisLyoeRaanS9gmc1wkMm5ErwF1CyLFDWry",
  "key14": "29q4XRrXfquqKFY9qDRTS8KYh1EYME6TKYP1WHMXgCvRJviyv3Kx9UqdAAvtAejsKGYUTyaeRvKAJBiLPQYHVABb",
  "key15": "4NrzsiGftrtAqzLwbM4CEZmQ1mqhS3aUSnr1rMWWGUQQAU6NwrQqMRXz28dH4EPj89a4j1SnC5JpEXHT9d5zvYLm",
  "key16": "24Q3arFRCi1iNTrFWHcHXMYcEZ3yAMazisQ8tBB5pJ3NbB7FN3drmsMKwJsdbnV8jxrtyXuY4XpfYevY39UogLsc",
  "key17": "2AKqgL6M45ggoZSomJvZ9AnHhSP8oHziNT5FwqnRE5fYomqpmykRiSAS11UsKrHViTJ72aDZnGSf42GQS435hbbK",
  "key18": "57oRLtcwzTfvxpMYZuh3JDooUasv3dVqwwUJULW58LFjqLP9qgBTUfZtDEX9DchebogM6EVwdp1MWWfGHv24odaV",
  "key19": "5PFM3oUM4RCktj3y34xq461T82SybmuWP3HU42TaHksdsfBgHWr4yZF6C3CDwDVgq2jLW6BU7RGucrFo4QMhAZxc",
  "key20": "45fVG2SGC3fK3hZ3PemxB7dzVQ2PVewkAodmmuV71R7wQZcbdynabR4v4wPSNehgzHJ3ns5dcw2WCRF2TgAiMSRT",
  "key21": "42SEevPrqJi5ESxv7XNSR7TsBPhTALKMkNvAhuqXxpxJktTERT6jWAyTXJFmdWD8txt3nLDAVg2QviyNQ2q8He5M",
  "key22": "Kxu1kTQdLimtGHj9uPLCJQFcRkXgvYtwULA2ZiQXzZcTxL3uenwW5hn6XpjUEALUDRzmPavG5Wsiq5BKoon1ctF",
  "key23": "PydQugCY2kf7Zx4zcgZb1hDfG5sMYZxpbgADvkt4F3RDJPJUFMutm8ik97zFGoqThCU9uC9PdMANNN6NMLp3Eu8",
  "key24": "62P3PDjPEo9khbe6kLa9f1Z2JS7J3HScVjcLLEzUjt1jgFNkzRosPKDbtwAukfrbN8BWGeTzcXxW8vBGj4M8ML88",
  "key25": "52ogaQ8d2rwWMT4CKeTHfKCmNtd7abNCs1YFaDc2eqGWTDJun7Z2J7ksX21JkW7SWfEwYiSLjxRTJMLDMqAacbrc",
  "key26": "S2TCL1iXbEYhpjk4ZtKYNkGWRgPpVmCZ9AYYZU7cXuCPtyrHuRYqjwEwTjFePWB3UywMJCDnHZoSY3YyfFEbrmZ",
  "key27": "2fCDTi1uG8eC7SL3C3644ztHfvyfKTHvxL8asAC8pMNfPNMpXd259Qxx7PwmsgrSTdsRoQfqzcro7h8xehHtRe5S",
  "key28": "4RBanfzPXnqQVmANumyHWDULJDGwZ4WDri2WtvrVoFjxg1NTBXJA3EdKGMACTnE2hsRJwXZpipFxXdppcu8PihG6",
  "key29": "5k9ctUynDB2V31ymJeNRDdtyL43pWCQ3tBVWPHmhPuD4XsPvhPf4FmRcCBcXZVDG1gV9GEgowx7VJVwTaAvTPkuW",
  "key30": "4z1hH3AVPj3ozs8xdBVpn2JF8qGwpAaEuGLm8YYpj8noGuZTnCrtkxYgcpJ7WLBou7CbPcJyerpeCbBjTrEdWXpi",
  "key31": "2YyaU2VdVZSARvBGFNiVfgM7UKN9jodhKL1r8MVzDy7baFbqz57xDmMNchGHAYs6gD9PGydrMEkTqcDe9N5BBPBK",
  "key32": "yAc3gUwyxwYkz24juQmPUBeaAGgyWCjhStexaEvMg4XMiQ9vdUxDqmjYiJ8ZE1nUohAopcKPhKMXTKKgmFqPbUd",
  "key33": "3UjSLXJtrBc3B7p5ETpNCeq2KGNAm9MMN6ntJWUYHX6ZMXHKMaKZdUoKZHhetdYvGj9SooKshqYUZxRHHL16TEhP",
  "key34": "2e1EV7KLNeWMtkDr4netksQKQmT91SuXMT2cqZP8rTu8VJWidTNqntHbW3gvyzrahrSxX1qHPapmtcmRnBMBtNHS",
  "key35": "3GzRAq6jD9iumSK8QTDWxWjXPAGSWr4uMopsPqfQZmqU7WYSvxMqVsgWJ88u11UbkEJC4E6rN2p33Cf3bZwBYZQa",
  "key36": "5L9NnjJXkemHUcUxDqtFC7cLZr4K8FJbYo8WL4UkzSpQ5pFWFj4QGXjrLdTaBtwbVzG5c6CucyPMUFFmGgSTuXpj",
  "key37": "5dqf93wqqydytFKNMMMRD8hzy5xiuJAiCyBn1ucTvS7Wtbzr4pFaSTTj7nRBH9B9b5fUuzJPhiT69MrociFs5Ri4",
  "key38": "54th4gP1JqCE6cgZRWSgC7jVfpsyKy6cmQQr69WgDmEiGsTY3tnTZVVnnoTkqqmgPSEom8FGVa5ojwVWeSJeWNHd",
  "key39": "4ceDhN8kMXyPsfjD2Fq9YhGne4XBzT6E9kVCLuWhRw6bkDPcnspydXkk2SsnCXCW9gw6TsDCPMf7SogMEa1gMxkv",
  "key40": "259sVJfPk3xp9ADNNU165cbETG5Tn5qAoBK4fVqp8PfpmRyJK4yw2CnMnjsu6xcqYMHeCRQq6kqiQoiSC2fmJEm3"
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
