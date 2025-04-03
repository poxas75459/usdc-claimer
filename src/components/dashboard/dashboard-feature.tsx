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
    "jVqJhceSnqEqfpKJKZd8f723DiFGQb5rQHSSqjqt8xX2Z5YEvEYRDknQRkf1tS24HKM695oA9GqpJQcPF3J2rJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czFxpu8rWGtHYnThGVzUhtmmTe9KEYU5Y2TjnUZXDHYopUmoEfmEYLetwVgFcnUMXw74V63fcH6Dw3Cg6s9c5Qs",
  "key1": "3ijTTwggNZ3MC8hGE2Shb4YusJQwuGgPtnrAyiEQfnBi8odEEifvRAK3dgGvPnbaVJEy8yqMa3QnTNczUNbaMAAq",
  "key2": "4WHv5DMUFKEaqBppBKD2sBTn4fEXR8JpgMSjUEkaZuGXsG1spRGARkbSeDETTL3puLLd5WNPJVusteDQ6fetxt85",
  "key3": "55mKTH6mUdzgJz3xdVQwU9Ws6SChnrhXbDpF93moGDsUX3k6uxyHGMt2rijPQjvnoQxJdsfSwwJ1ir1Tk4GpAcWc",
  "key4": "3e3WYvCcQMzmg6qPDY3iLqSaHb1rdhJbqBSwuBYSfvd8ifhfdQHeFzJxjPVZEtKsC22hcPHDzP5hZ4JjsiZuwPaR",
  "key5": "3UJQfrRvJ3sBWnjHAqRkAUxvWSDsbKeusoGjUF53cXBaoF8FVpbn8YLfo9fpZSQQ8h31PEC7e1Nq5kyZP22sRHKn",
  "key6": "Yj6LeQGr79ePCXmk9Nd3EPvRq9MbVNGpihQjjVV3hE9iKsaH28ZRz4JfYUNsmtcwSAGnxcoMcUed8XrLGAo6PFf",
  "key7": "5r4FmyFPX17PusnHFvwLUM8zrCGj2UGH9k4sw9AAHecTQ3mus1hYj5eGHkop72UVQvJQm8qTkqSahon1HitZMVvm",
  "key8": "462dLcaBNHq4N75icYEyUcZn8KLbZo9BxeosVyYkA6HpqF7NCM7VuBGpPxembhBCcEGBv98NBRgPjGn8vyLvyaNY",
  "key9": "SUMXUTZP9zBmRmLJgSitUTDbuVjAoApSorC9bMixPyqpu3HVx93Fk3ZhmedzZy4zx8TuwbJpmxg5F25ZeeK9LBH",
  "key10": "2PcmHbBgKKPUSuAS9zphZfDRjBoDoJNpkD1VsQFXgiNbUjxc2cpQ76eXyaeHAgacyQ9ESrqcdoYBrnE27sjW65gg",
  "key11": "26TKgjQdGEGJF5bd5CzryyB3igFPAyqRJ9aRiaEwDQyyZMLtucCYXnmNSPdoMWft6MBhwX3wFAKhkx7r7KfkXyYE",
  "key12": "5FCEmjPLiG9YqWH291JU9MAQ1TLTVxBYCUr6ZnucP6FiyWPaAPhHRecK4ReoED481wtzA73XJc6ag9rgdzeseokk",
  "key13": "2PSKXUxtLWW8btVtBor7bWaSGzoBFGybqwMcWoTDNigTEuuLAKkoStYRCZP82PDagsduyqMtbY4yuYn2iqiSch6K",
  "key14": "2YaEk9a1F4P2MovtZTYhgmmfhg518yX1BALueZVgrEANKSKFNH8EpDadpxT72YGSmEQTdg6tiRutdds9nG8Udxk1",
  "key15": "26v8hubuAApS95McEgJYFky5b2JjC65kCzRK3AzUWcK7XELL49K15wvECTSjGmsnUEGcvuaGs4Bu1e5iTX7AwBbq",
  "key16": "5FFEYyT2b7bdZabKANHzLGt6sWUmDAUuPx16dpRgEBFFhyFh5M7bg6QppiLikvgPGQJhPtqkv4wMiXKPQy5s1M3f",
  "key17": "ttVnCeXBg1Mm5af9vzf29nmfoGhndWmuQC98V1BR5CjzD8EXnkHipf58esnn36XiFj8ggiD2cqosYevRmB9kjuR",
  "key18": "3XhpFuN342PRU9yukPJUE5L8ZgpY2jW9TNnpbVE1L3AmDkFSZhaFXH6z6NexaJhRa2RsVBxZpxEsFf7Rru2t6x2o",
  "key19": "3zmyuSE2CE2RcQ4sg3JyXiQdf6xVwQgGxYzm7e5DaTa36hG4bRfukz1JuVpDmwVMbvUvG9Q7489vyuHRVy54oZ7V",
  "key20": "7k8qgtCyNXkdWeK4VGkdRct7Gf6wBAqAF1t4qJefTEfFZTxNFaLHwx5TD3g6efKromHqWLAd1ihQTfYSKCr2t4Y",
  "key21": "53NxFgeHy7ewkk1EgsHGyJaof7H7YjsUs5owhoFh1zuMNwEFTSVvrLC2FMXeqmB6qb1FWkEjGZ7pfZ1QU1jo9XpT",
  "key22": "fpEaeWthpVCZwwCSdy57W2Fr4QUH9Rejp1LEpoEy7NwGRnYXzcYB58Y89gmNRDpPSNzPczJ6kbiNSH6wpbqtDXG",
  "key23": "58bXUpXbwXVd9srNBevRNfjzT3mqo86yKHFRhTejcDKixevBXrKsjBQtbivhVbMYZR47YMRMVNZDN9YhQPxsrTFA",
  "key24": "63RPATEBYrP5tV2bRryzHXxVnyq38sbhE7um8VDKM2Fi61MU5bHovNzSTTzWmkzQXLi5JRNWkaQj9p8xrkJmRWjM",
  "key25": "4ub4ZbsryCmyD7EkLM9YHLoaB3T8zSKTFZGq5c9Z6FfWtBgNAotvxhwg2E1pYdHwqxES9Tenf5BWJsAWAGCVj7Jg",
  "key26": "4ztmqR1fJXiiKrvPSeovrHCrvNL76G9xt2TmQy8ChSDXJFKbhjU6uap874BM9SP68rjB7yg5PsDQUSsXH5jUMabv",
  "key27": "3finHTYvu2pe9EY9PKMD9zsiXWVhmfmiirfxmaD47DGqJGoV3M3JcDScXDsLq3ap5AYQpiV8eirqXtX2SgurmR2T",
  "key28": "4KM6FA3g2Qb5zoryEuDfTwd28pQtNc6zgJeL8xsLFrnxfDHvucURcjpa9gxJJoSN6WroMC2Es7TFLQxkENYvxocd",
  "key29": "5t9sSHgS7p5VvgrHHrHpJahzjvMLHMczCCF8W8AWS2bAfGe6KWcswoQCtNCSXyNx6BYsFDtm5TFg79jcNeD7ouzM",
  "key30": "5f2Z1kyhcjVn7yp6kW56D8XJP29GGhaPSVb2Xzuv1WZubZGMS2cpvws3zDD7t3sowWi3kewjgswVza6AmKdYBbBE",
  "key31": "Ta8hx6xrCbwCFGWrnKbWerEVU1ytGHjpzHLnWdNMQGRDJ2Yy6X9FuTA7ZCbH4ZUDnREWZrKFZVsoMfvJAXiyai9",
  "key32": "5tLg5tXCKEirhH1E9VuW7urH7ALCKMukVY7BwEGMWs88zdEwG6v2ZsM2X6vjhAyjs5izxGDwrxo1aBXGKifUtpBn",
  "key33": "2j2qEabEHHbJ3LwcbMJ77nMK8ShcY8fw1iEWCuuxgVSLFqAzMSqVmV7K3mYC7fstNBc7xhirKgRniZam51hB4rcC",
  "key34": "4mUnqRxHPNrwAsGsnmdBdaGW3bRRni3bCNAtzXC6b4hjDFQRT6TAvBRhpww7cA8Jetm4ugFXC9t9JoKMb5h3itkE",
  "key35": "2tnhQ5CXvkt8WUM9xfbLiWMrNRokDuHjEPbMom4AXkyWkc6MqvomL1akwoagoX5KiT1TDTMK3VdfLKchVicFtwxH",
  "key36": "5XNG3EGYUN3D2YTzBHJ4fDJQYbYVN6UXUVnY1M5eGjkiCgLqbeQAsVZXczTnABGqpE9fRDK1WSNwU8exSMToQToE",
  "key37": "4zUaDudmZnicoHpgHKdZNcVag5PqScMBkZJ8R16qyPaCTSFCxqUe3CH7XMiWCfQcHYwsUm5FzAMEaNX6uf2CdEi6",
  "key38": "JbzMfaNBzPsk63gCQBj5ww1BGY1NEZYonT35qCDn8CKG6V4vbtzKT7L3YdofD8ithiuXRfn3jBSN1aRuaqvc3jU",
  "key39": "ma99mZdyb1YDzgwAaiY1aGjdwmDnNsyeybiL79j26kt77yN1ToySgA95fQgJnZ3VgVPkjSvHhvuNZwMpCVnwPJM",
  "key40": "awibDEtKGpdkGK517EhwriUzVPNwnMYpfD5BVwW2hKnfffFf8SAXDhYKJK8ujiczGwFVdmNe9B7r4XJ7o52bcRx",
  "key41": "Sp7eprnHnU5HrYrVzmHpVxAsCZ43bR2caKZW4Nku3L7GGdD2YquEh8L6bQg8kmV3UiaoME8C2RBJjCDyXpUnWCj",
  "key42": "4Ferfd49XNmX4EJKgN5CDsSKhPK1t33LhgXyAnjWLuTejrYVRWz1BLc3fXyeP7VPKsEjTay9WEN9KAHN15WwUgvt"
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
