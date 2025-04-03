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
    "K93jMCEFpehHo8eppLnDbKfSj3Rdub13xpV21UBU2cAyZw7HdHSBHZdt2GTqpemDNzdwm5oZR1wX5svrWmV6kZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pBNjRhAAQSRCGvJZF6hnrFAW7dC8Pew4V7kzcDGD9Gxwzu5gQRBLn4xU3xcnCL3pRE1PykMDYgMczZcduXJ8nJB",
  "key1": "jafQdjBhxBk4tXSpdRJyDCrEG1rKpa1m8eioYqKh5JN24K9uaTigWg2ZbDfERHQytcaoc4ggNZZEAKGiXivqXuy",
  "key2": "44nkD1BTmvJeDYoqcVEGh7Ep7637EaBwf2KLL7qnk621AFRz2aMfbAjYYvUaCPzoqyPkNfKCRZwhV9VgBmPSgtFy",
  "key3": "LUzi95xmYVRgXeQRP73UHQEsFw1kq3EPa4nvAV74iehN714oe3xg9qGcHVdenmfdvgygNynKZYmJjMd7N6aCiMA",
  "key4": "5HsjtvuGCVpQcGWsXLg6fZonTSBeW4y4We5e5t4boQuqFejiojq3KA48XgfBoUUxoqWvrKDhYt5ZCqtFhc4A6xoS",
  "key5": "LbhTk1pVFzzHrMLTn2kNdw79Ty3G6t9HybNV4PbrYFUod3MruPxsqVU1PAUcAvkJDGWyma1ECusfbfd8m2nniZR",
  "key6": "3Re1jmByJQTS9aKU1jbrDG7j7y59iTmaf8ucpqkRBjo2B3mr5sXujvNjqJV2K2dYPcLwzj1doybHogpKc64nTT98",
  "key7": "5Lyb1AgQHb31C45rko5dFRKynPGKpDSX1muM1pd7j3hn2C9BFtSKJCrKU9HSX2g4yzD41Sym2qiMzjJhioUjVt8P",
  "key8": "62RRNrXFkWf9yMtcCiJxThp7Zv8ybu1Lrb152LGbEk3MLdvZg57wjqRifGTaajzRUL5eAuLqarxVzDTS7pbgVTJx",
  "key9": "3Z15i6i5s4GUgXsT5VKhn6cwAvRNNPpMeCEYHGFwdGgQuLhCgDAiHTutgYAQVxU88ikbpesiKSJFmzPpCZwQ5Tzb",
  "key10": "2T6TzGxeN5nxkRLgyjq7NLUgTdTeC9CTM9jMbzvUvSAP1aBEKzfNf27ZRTPRkfxosoeK4jUxcDhRrk9C3Chp89mR",
  "key11": "61RYTjMSFPJJRBaSAohUBnw5NKxkbrqvgatutoPhRoudwGGMV791877Y75EeAzKwoTNBY9HvV2rNs3x4JYFSczY2",
  "key12": "3qQ7UxGvDa8BTjpExXRUFViPmdFcH9Qvk9wFVVVJEVarmHJ5nySM3yZTjKhz42kGpE5SAmD84JwM2fgv5TfJ5xiJ",
  "key13": "5z6dnB6e3Nw2LTkD966Uq54evHx8tBGzNit7EHn8ypJCDXX58on7HHC6SbTx6BBwsQHNRQ1ZkmMHiyXpYwTsqkxk",
  "key14": "4DTjxDDo9FDrpy7iXPA2Kfr2qG2HRJmEri19JdYK8SvEfLN1vaTAUXcPqF795xuDYYXy9iBM2brqNn4QPrXYchGo",
  "key15": "9Aq1JEFDQGrw73MGHBFiU18ZVzR5UNV6KwzdgWcWYX9YuBG4PfVMNkJQwcWXYadSD2UimrqmbBNuF1EJRwjNnb3",
  "key16": "gET23CfTgst4wgFPvaGTUqneN3pESPentxVRrZAFZEjzKr43x3Wt9dY5zAr4wZoNhJV4y1cvF6sDiJ9AFRkM4in",
  "key17": "6zdCD8VzDTqJVdRvsYK7Zx9qAzRxommYygzX6PaFj9cffh3iZndDCXFSoi7hC468odupavXYVfs7jccjst2z5wh",
  "key18": "tN7Y3UPrZyLEVuBP5ZSQcKTQiLHS3GSszpJgDzCvEyKA4arK6gdJiRUHFnbPja5i6BdjC79i8Hq4FhxUsCERYSf",
  "key19": "2AQXsVLUQoT7RKRpebX3BvfGvmE8G47qC8PbHWZapvHshNmeMu8urTCZW3gtCn6Xp4erFnXm2WUiXyFEMZusBCUw",
  "key20": "4hLQ8Q4D9NhxGVJj3btLXGbWWdvpDtwinu3Z4bsNFA6G9X7i7nu4iXDPU3J7G6h9UMEujJ6ouTEh31i5Q368dS6B",
  "key21": "4YsbQxGSad2beXCRMtiuypGWWyBwEdZjL69v37iCX1QsAWpKges7Fmtxq4z859XcmH4TSp25rozLXaSyRLhcC1z",
  "key22": "5PcvDYzixeEuWFm2uWk9xyanuZkMKokg9jNaoR9Enhiw9nTuKnxkPbE4eFUSY9fj4shm6kx8t8jSFnzGmVrCZBNF",
  "key23": "5PsS41KXR9ha7bwPiFAP16fc1eccLhrJ9KgLpZeT3B67fk4DRkmVGKgBt2JeSGTHTGMNhPr1qq1HBL6RRmd49BKq",
  "key24": "SxeyoZfUGDfFGrSPjpRpqGwaZwAJUzwx2o5jjaoSY7P5j7LgEE2FMDw5gTPxRDYK1XAuFKDXpyZH9P39z8pF5Co",
  "key25": "3SF2mswBMa8daikDZFJycExqFiPeDq4JTyfPEcDWP6vsBoV4dky6FktBvWfrHZk2NWeGsRKS9c56ADWyj6Xnfx1a",
  "key26": "4EMJVJg288AjnHZ1eHthCRmajPhV2JjkiXuHcfL8Ev3Rx6tXBsZn7TXupwey2jMVZoqpQERpFDtUe1BT6HERWQSB",
  "key27": "3eD8KFVBG19NLUo9Y8CD2jmeRQ6vWZ3SVaoLqWHLS7yrtGrUZ77oMP7qQwyR2U6R1MNSzJ9jGgvhM3JrChUMVaZ4",
  "key28": "2VtNmo8qcMqUpMgw9GUhWgTRA6z7bX2VkuHJawTUiFvvtB5fWEXAxgqPPd9aksrdZnAGy6MWXhXhHz9Sts1bB2AF",
  "key29": "4TJitNJXdYKstbqMfWwvhy9dujKwteqqKZMzCJ6PkyctETXbyji4iR6xSz1idErxpu76v5LzEPD1LAy3a4FqTMBf",
  "key30": "W7pFvkNywDvnUkt3Zqrt3LvaDvSJzw5h1g4TbEY4XEMWPj5uaHZ4VDNiQ1ajCjAc2PjUJq7UaooE91MWKcix6oT",
  "key31": "5SF47Q7VScqqEeBq5pGSBCvyzPd6F6oMy5a1NRGTxC84LSZtEHsmGP3gVYGYiLbuf6iGHBzb5vKmALm42SPQrY7t",
  "key32": "5fdkVnFiHrDRg2odj3Lxf1Lj8BrQif8Z1aQQUnVmWUv2hmDbqRbL5zwy1M859s8GMMUBAzR3wzbgpuMtwbcNEk2C",
  "key33": "53CEwuXjVfaFGpEFYwQQJTfJbEAMuJyTC8QfvbLwXK5WKhCbkvrHUZc6haw6Go4MbmNd1BEB18eqoR2uq3cGX8eb",
  "key34": "2p2498HkSjsua82RhpNhxENF5Ar14dk2TmGVi6FDtYddBn37XYDGPqXZGvdMi7z1zsLjDjGMCjD3ZJAcpunhmEZE",
  "key35": "4DduLadFxZgcxVTxrcirzmDdxLM3aMdP8GMwQpprbHn5ANn4hfGgJKXy4QZVh1aKpGkW1BaTAWLkEy3z6Cp6L3Ks",
  "key36": "2KyhHQFws57BUP5CfhMbvCh4C1eiCxWdhX7SYRpeJzDdn5YD5zTkPPZbBjb28LpTwWSdHAUifDNS8hcsqsVaBpN7",
  "key37": "4QgDVVX7b8A5qauaJdjUkQtnx3Y3LuZcGxH3V7VU1XrYLeQBPHJVUHsUfPLsDocasWB35spmi4UUYmPo9kJUmyNd",
  "key38": "evQ37unxZbnbRefUcMskiJYNu2Yvnx7PBP9L95QUnkoFqTr95bZGZ7HACVRw61QioQZKJM37ExD6ZHgFJEkSKnz",
  "key39": "5Yib7vVeRhCXkwjioaQeYaAnKRtn5UDd8CG6tf4QritZHeR3JbZ7CdfFYHxtBNhw8uE74GqwwubnKdadLy724bPT",
  "key40": "5wQE8PfW5DGymUgCc1k8viS5AkakaTCoyD7pMFA4uSH9Ay8HD92WhC2jWfeHBaSFhrAGsRwA1aWC2gkd5Leey3Ft",
  "key41": "4kMiGtdDu6rcj891xiFpCzxV6xTK9Vre97Ygpdn9ZfmN96KgMbHXPvftjHGTAChe9fxt8J63G9gKukL27BSmnza2",
  "key42": "3FicwU4RGxy6ZNFxpRSefp78tHo8wpjtXRGF4AJ1CnD9pE1wRbwQ6cTiudmym5wvd4BupZp4q3RX6QuoUcjLnMUy",
  "key43": "3T9EMJpQFXNnrQe1HU8JSoqgPUk6mT374Wz4zBywVrcXY5qaYqfF7MF2fQpwtWuLMtVcCKSAikUQtj5jMTCo5h2J",
  "key44": "b8uuobPSAyHGFkvAS5Aqs6RCu9VJ1gTbJUa3bnWvqmji3kYJ2xg1aTYmMBYjWgFeoxdtWgyJCitFDTiqGRwHX7t",
  "key45": "3msK751HQnMQCyZ55kHbZnhN7UdN7SAgvbbc2QA7FjXbH6mtaKJv2UN1gPcs3SJC1tyH5GhxP5ds55pG6h8rrinq",
  "key46": "3MPdypnwuJJRehF5BaMa3NLZToj2YhhqD8fRuuyu9niupx4MonnRmUw7e3S2tkRDNAZHUbeb33DKrAZz1ssFRsgP",
  "key47": "27cyhGM1fdz1PBGhvxcrjCNn8EMyD49qWF2fkJtsBKUX9fkozvHfsRo7Fu2cqVyHdSc74PBTu354R1U8jQzJdHyU"
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
