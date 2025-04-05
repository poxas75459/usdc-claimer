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
    "2NTYYFJ9PDH2C3odVPXkCLTz4VnKzjqiMyXzgL43Y4p6b14vKRuLbPtaq3GVTRyED2xz3Kpf5F8hbA8C79oaqSoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXfyGUm35uPUgboDSuAzVseyPQ5uoDGwFU6Eo5v72aPw1eq3FzH6C2rxYyxtDXyH67hw6ZpSUTqHtht4M2nztBJ",
  "key1": "54CUtwyiDRJrkTFSjL42Z7UVuaFm8HaGTjscknvBvtv2gHfbwyhdwCo2ZukEVFzbCD7gEA32ihArt8bbKzbnVfrE",
  "key2": "4z2sYW3D5Y56Z5kVwXjBwtroYJvNaEV6XhQu7UoHXZJoNMpPGrjrZGBNMDHAsFb9B7V3LhcNHmTE2HujcLBk3eRr",
  "key3": "25GWJkTV3ptzT9U2VFpnYxX4gq6Wmc7PMfhcAqpu6eaY1KDw6mhrvCAu54zhbNHL7NRpvZcMx61z4kQ1fKrMebrT",
  "key4": "5cjKc6GCdgWau7prpzjsrNUJp9vjatzyR47YJDoBB2vLGA7aBdTV6evnEmA7kAbd1JA5HEqQ6hUnNEiJzcdbwvsv",
  "key5": "5Kd46MtiPnm2Sv58A4GBB2GAywkKnBEZGB6KynzAJ5A2C327JsTQky2eisQZ8akSy5F31DrvTQ1ps1LzadHhEg5h",
  "key6": "3ceuk4aMyidkAB5y8wSM8R4xAs689Nk1TTKsVJoJUsohjtYMU16NWMEZgKTSUeaSAPDDd4ZjcKQPFh2mwZfzrD4n",
  "key7": "51XEX1TuKfsqM4wwwMgd3Br3YU3tbU7Qu9XXfprthzc1micWmHxG9Xy6xowdXeWE9S4A3nbb3dUX2W8RHiUwUuLn",
  "key8": "4Zq2Q4W9LfbhtCVKw6F49M8A2V6HA5zobkSKC9q38Pdhu5z6qoGLDmLtuJRfXEwpNPG5Tk5SNu6kMDHMmFe66EAV",
  "key9": "4rJ4KdEiZfF3Y9Gvi2ep6AAS51KEgSWLwUoMoiq467yqKhAhTZixdR4fA2eDSd9ZibnKmpnr2Ed84kqjG7nBwh5N",
  "key10": "3hJ4Y8JGKPs4W1ZFEHuu6KFaXX7krZuT8GCb2YBLoF4XR9aCDuXvRaMgyRn5gL98YNhkBoaEsiBHV2hdwWdv54dH",
  "key11": "3H8i9w1986eG6KECyoYX8s7wrcgQbsj6ooESAomrsvZrsbVGQuykbNPPrBboFFv1QwwhPQGD1YmK7C65ncymTKmK",
  "key12": "3mxviHvC5gdVXwBWj8eiRMAdm9bwr5JVqWcAnQ1zpwBwYbYFoADRDGDi32UJNJXauVhLgQdeD19k2RAJSNwwTmA8",
  "key13": "2nxiu1dciVf5zWnaMVqG5SCHTRwn5hKLj1cS6P9tgnZ81NJJqRfrN3QsqjnJw1MbzgHqQbRUfZZe7HnuKB4Wh6Z9",
  "key14": "5UjiVTtrFVqJ5oQmjLYTnW6cEWXAZUtromKK68pTtgV89soBHkdM6F2gVDq6Q5NHp6W4C4TJ37dcnbTPzgH4QVrK",
  "key15": "rhsnLS1Vi8MNpQLVvnZ4NpPcwR1xZrVDDqCoFjkxcVz7ka7kSXGy3vAnLVK8VMXJaaERG5aKeqjNauweP7dbvAj",
  "key16": "3em33DwT4a8hTxVmuY24BMKKayaVVLtDwyvkWtVtidCj2ozG6GkBXDhJirUxFUbVBKWG9evqJMBJHa9KdDhQaiSq",
  "key17": "2JosGsWdQMfWiuf3fYsYqWyGQqRQdm2ByHnFpd8bjcMFeQEXaMuJFV28vbfpSMycitwshoYrMsBg8oVBMLMCe1xE",
  "key18": "4Qt8VoXzNsWKNXBvtyDz8uCgWyECEdF72F19YwSuJnugBuJwEd65KoGZyYGS64Zivdk5AaRpggQ9uCj3oNfoALVi",
  "key19": "3oKPxnK5S5vSPVtsR7nx2sqS5pSRYE42qPpAF2uDnTPKGmY7c1Ec2paK1wjF8Uub4FrZk7By59PunGvxdwwzP58J",
  "key20": "JWVYZmqLCm5UaqnUNdtm4ghkm4fgWL8svNdZ9G7WYN4uekgiNoU32FeUtmDs5in493Y7fYm5sKRZf2MZcHkTMMR",
  "key21": "6nd2WBWxCUtNNW3dRkXWsnnZwJbExCMwLZNQPjRDWsw5GgF2g2onH45vzDCwP4CjZdKUrkBz6EDjPri8ZgV3PKh",
  "key22": "5pXSZ3nwWLS5XcxmNzyeoss7pCMWzEgZmGY6ZpPHjgRjFCNMm6wZ3vs2dr93ubjV1hhYTyiEhKYiSkbty7uvMqWN",
  "key23": "5nwe5N9AifGX8sjPqTQBMCQUMTxBE5gWmVwYzboQfRr78k6Zb4Ye498tCipdaTqevxwUR1RtrmBCZjeXuWiJFJw5",
  "key24": "5U8mUiqX8KdKmJT3TLWoemKLtoMfUs9tSGoAcXQVaj4daffQfqqCt9kGYsajNCWJ5DPG6VkgxX4E5iBaevEM7AR5",
  "key25": "3Su1t4bQoeG6R2JwVPv7ZCwsYyKg2ZK7UgVAe1qn2J82SbHNe7Ub34a4tvZvyRVZ9duhfmJFeKRX97CEaE5XLjX3",
  "key26": "2EsArE4UVc9g9FGyaLeUZiqbdrXgYtnUmFGXHKrEA44zgx6NpbTopVMxBxPux26JSsS8TZDjYKahcvwoeMFhVmop",
  "key27": "yEaE349Hsd5NWbSDTigYFcKep4fHpAcV11XcHeecfGrMwMzGATswafmbQMCQ6e2iWb7Pf2X2qoGdCobxML16wzi",
  "key28": "3Yk8nouFLdv7N1npiXj46ErsArkYCNkQbeCk31Knhw8pYdBrvNHjzX74grXnjcX4LZZKAeMDzMBAB6woaAeyVLMP",
  "key29": "2o5BWBV8y8cb8uuLHgpJRfF6ZQ5tKq6rC6Me58sr2RzW82Xts5M1cYUSS1WMbWiJC21GxTtKi3sXmzo7VwnjzRgq",
  "key30": "3L3uSndj8dMRb9U3gAY9wK2ia1mcn1bvqmkjhJ5eQvoTxBr9TPfpYgC7PftZBJJ1bYrUrvUCjGiS5piEBqy6Hy1X",
  "key31": "5M4YeFHbQ2JSsw6Co9Ke22THQ6Udmj93KqDpTySn6TS3P3DRGnW9EgLb3h3etjr3jyTXr1Ujp85KAHiBiUmjZVw8",
  "key32": "7PpE2VpgMv6sm2bHTF1qaWj1P7b6YW1siJ8SChrNq9WpZaLbRkscfUfFAKMCZyBvJqApAhLDiCE9zoQCLFTMzUv",
  "key33": "4q5KiHYogA712fp6tB32dSiaWCG2TUT44tw3pyGgQufr9TYNkkVJMMvqZWKMv5ymNL9aNMieUiyrXmRuY3zab1ek",
  "key34": "4fRt3AqYEyrN6xJWAZsGqyaxKfbjMgK3sv8vU4LP99dpo4meraDLYksbH7pj7ufqtJ26jdKrKRfQNHBjyR7u52ff",
  "key35": "36WHd6Qda8A89fw7jYs3KZUrB7kBxZv5Mw1pdVqehLVeLvsY4BasC79ezy4GrKy3hdLsEwcMrcnXpKFtQuGyFC5F",
  "key36": "pg2cw4bHdrPMAB2BQdsgsASukAvSUHTMUZpsz8Ecc3zJY2SECYtNuDW7XoYHQX6wEcDoiM6UhRB19jgVm1tXb7E",
  "key37": "5nzwewtMLqgranK4zfZGYXbShkdau8onm5AsQmHbFmPrPEkvoRGvb6zX2xxHp4Forv7RStq4Euv1EBrqPSQKWTUr",
  "key38": "5M7DnhRS1AjzFxBNoRPdFNkXr7q51YWGSnwKcLcvipa2CAEPfbUYhPiBaGRfzzJjmth48G4TLWeSUUwPXSuFtqk2",
  "key39": "51UHAE7DaHbLKsCPCDfuVseZ3u3htxtPhc8y7hqA9Zwo7Rr9gkVxMUnGmW2rgqKitpxABnk5gkUTC35fu1pgyuxN",
  "key40": "2N4vqi3hLEqT9qrbGKr1iwq7qoWv3RSyiL8CFhifeZTC1CZXKC6FTjJATRn8EsRq3Fj842XTpu4unA88PCsjNdeQ",
  "key41": "5vd5e3b95bP5EXE3v22eHaufmYroJGWk8J2uN4D1zQAy7Xp2tLZ7CmkRBWfpyLAGpnkkZsASYofGJgtTE5CuV3WN",
  "key42": "5uBgRJ2cfRtXTUaXi3FrJVZbgDB6dofKBjLUyrTmq8EgFfXwcyvkMaTh81XyfTQcD3hRsrvFus8ciCkoeHT7Wjju",
  "key43": "htimKD2HtzrutXCmt6kQ7sYJHZJ5RYuQe4iFkamJ6H66gp5f9QxTwYoxQ5RNpypR6YJPD9TiU2cB3G5b3w1Fin9",
  "key44": "64FcGvC758e1nR4r4n8LFfdbK6a6imdK1v5sSVput3nwJGiiSGrzEUqyg5Nqz5VLT1KSvVWsgFQ18oy7g552muKV",
  "key45": "2PfJap6JzMpDREa5hq2fR3US4fAR1Zd47AQZqCTWZxg2sALRd8zWPUGqeM85yPLFaVPfhsycnzpgnx587B6FUY94",
  "key46": "3wYYuhpkGrRGuVnqPMjXSFVWRh629f9GJipvY6RUBSAfmdyNjd5P7uxmD2AYNVzn4s3ghZzUwZhYbrHCtm1gQFZM"
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
