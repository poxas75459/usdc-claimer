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
    "3KSmv7Et2XSFqGSMQn5BAtZriRiyMHWUWgcQZU5EmoSyzRa7vSpbZCj1YmQk6gZkRpTn2K17vk5FHajiTqLNuTb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGbCouGfazLvu4TtmcHw2e4pXPLgn3RyfgU53bLAGA66MWb1iMv8aYRnDSz6x9bnTjDHJq7ddztpTwXaUHgE39f",
  "key1": "3sthambQbXvrg7miXvHRFygH7M112efpBtr7FkJPReBXgJhvBTMxajzJeTpNMZYFzjSHuf4E8VLretRDvRq1JauU",
  "key2": "555Q53AxBJZU4CQQEa3RyFyKC1iibqTtB6utnZ29FqCdV2Drq5YxdvM8mWYeC7KuveuxLrNfUfsNohs5B2jEvKRv",
  "key3": "qVnZwTcuDVtu7XjtqiqcQxM9sev5kThF9uasbXNXYR2uYRbtZVWMKgYhexu9e95fNUDELxBvntLbXk9RJsgYYg5",
  "key4": "2PfsEC59DNUhTzPHLD9MrXYsEQQYbaJ615Qi11vVtpwrsfism4pN1yNQXA59n2wKqyiXmWUETCspGMgfRjRb8467",
  "key5": "3YPSEQdhwrpVDXojjAhrWfS5a7UBJjiRJj9X3v5CmAuKexxK6QPhm5oajzAU99a6WhWh9Zhvd1mUAdxVTJLjWe8F",
  "key6": "2oF712wJy5q11A9n1FTUtMZmwXL8W3UQvidUhNx71dDc9FjsFbRbzTiBvZpdTuX9hsgHPRsGQx6rAWXsKone5ZjV",
  "key7": "2s2JydEQNKY18YMJsbEKkBvTwBh8WaW5hx5zwuP8V26sGX8AcsHfesNU6Agv6ir1N7nte3BawHav4QCGSL1hRWq1",
  "key8": "3BmJHMWecrZtz81SJYAJuQDKZYLsEEK1WpaxPivB73MM6fpHPJLCeGfYLV4esdUpi3uTSdp9WjpjZ3sh6iMCwdwm",
  "key9": "2jrFm87eGmLke9SL2FiSES5wWwT5w5ax8WSo3U43ws9v7dr2wpjaDqqtzDHquVzpHPxpPysNhZTwFo4NhNHfiowo",
  "key10": "2QckszxFUzfpTUTJiiuVNQrj6U4hcFuYoxnsquZhNkZeTvLptXwynfYNNu2jcvGd73S9qiDoCwU3xdzEHVpT1wh5",
  "key11": "2cvSpMQkeZ2TnB6ZeXyUPvVLKED4CZaXCw8XKs8sKHHDFtgS1iKyFL6No4LWoELQbfJXAUgj1wvy76JyUZcCM3RG",
  "key12": "2WqUoiFn62zW6TboFHeAwiNocPbzC9TkFpj863g1aBQb5B58Hpb1GUSAt3XZ7xE7XciRjapUBHxxPDc2gee9z4zX",
  "key13": "aCVgH4oxwjk1cZEV1FuCmzFuYne8fc5Afs9VbM3pn3Bx78avQtvaD7yHQdRqs2onjtLSTFe242hJQogtznayE9o",
  "key14": "4wwaDNqTFsybKkeReqmK6J3DLHJoXA2GQjztJWmAFh6F4HdE3FFk1zW9tG9VY6tZnmQ9p4iYiLfU3YjEHEbdGBfo",
  "key15": "FfW1q7nwN3tUAdMwnBLBTVKCF64H8tWsAi7tviKSagNN5R9wb4UHTQ41NmhM7MthbPRk756iYSUy6WV2GvGy1R7",
  "key16": "5avNn7LoJKmPSsetAwci8QCHQS5oeDeRiBeqNAoqBN4nDGtY1MHXNzCfJ4SAbhxEvFvDiyrg1qVNLMxnMierjNAF",
  "key17": "2F8Q55SZm6miw6MZdbBhBCoB51srLti9DMpAZ2r5wReee8VC4ihukazo4XKtzUspaq8CV2HrRiyreEUMyN4E7CeQ",
  "key18": "5u1t8KPVhNhMuGVZBQyUHf9fzNWNtoxNtYKnLnzvfmtiGFgNLViNiwGKXZfs53wCdgDxUwSbez6aZzK96Yz2TFJd",
  "key19": "4A1Pv44srzdqz5ggMaQr9LDKFyLhzzPs1m1zMN4H2zPgH9REuECFJXSvzTpEcjCeCu4iu46EnT6gmCkg1G6XYvFZ",
  "key20": "5PZcm9mXq9TLAZoDuzLxiN3zKT9Qi2T9ENcZjpbd1rVmv5FapMiKctcKUu6Spda9kjkQfCGuRpetchGMNnbC8w2u",
  "key21": "4DHvVn5JS5N7gZVd8kXDNtRewEL2YzgsQoZ6iyeCEy8YzfupV4BHEbQYN8KJ9Drs7Tu5CprPqoNDWMB1Hj9Mr8M6",
  "key22": "5x4zoWiDnoXJzt96SgdsEvZTVogLFyafDBJobuMuvzX4dkLeAVxY6DSFAgKCJR8zAf1MvuG9HhYeRw1qkCdbCZQM",
  "key23": "G6CvcNPRekoba9H5jYhsGxvjx29YJAMvbrnfvDaRyqxQNEzq673evGeLsakSUXbfAE5nEM2MNiTwPBQjXdHXzVB",
  "key24": "3HEKiVqehQV8wzEhwk7nsMwihC7axw5FuyZtswtrmCDQL8iVPp1BUUa3x1vGNumUviTA1w86L6EhJzxSqM1XrKTv",
  "key25": "3SetGNKWEXiKxbBsdd2FemDXdRD3EmhYZ2C8iqB1XBwkebu2YBQbw4mjyLvPWtSRRe8vYjUantPQnrCj4uNnLzef",
  "key26": "2QBdPUNcnCPGMdL5JrZzk3TvJAcsNoqS4sxnKkTfrjkUYaEXeQJTWgku1AgrYDTGJbUA4bCGJuMs9RrkvtCQNYMt",
  "key27": "358WnCwbEEUu18NstiXLE95SSgCGCSMF7FuqCaqbeut1nsgjwaoK8JN1VUohtXhFgcev7kLgHDW49hxVBMV9Tge3",
  "key28": "5qAzVDGSZMP5NnfxxHGqvBLx8E7XPyyRhum3fC51NUp2WjkPGbw1rN3GjNzZLi8VAGGN3G2oj8z6Abhyfi6NKejb",
  "key29": "2G1kPnm49SQtf49owckCCJVyZA4q8ayCyBzSruz5HxB4Jr4bda5ByeT3C6JtYkw9ZUcg1aYkYHJVVoPMFEAaSSHr",
  "key30": "2nTHHBzf4GfpKNk4p5HS9cUJDVeTZ9SggMVWgXcF7QXLzVtdAA6ZT7iABeuwU7wFBeJQfm5dqoBJpF7CrLPQHotF",
  "key31": "n2z4ooxHNMdqdnxxBcHn2oS8t6oq1bWJSTeudF5AHCPLaTA1QqsNTSe1d7ymL4Q76woYitZkWnKKCxYbXiJej39",
  "key32": "3EqUqRJ1VN294QeNba79WWPYt5TdkJRQoaPgtXh1YQboVugdffqePsuw7pQm6JEJtysjcZDdfQT2bgFrLpvYQpus",
  "key33": "2SQtdijwnYzP6xEwEvWTofShJSxmvrTn56G4YyejzNwv3ZuuCphDsvrY16Pi1AnxAFv6xbLiHC4osHso8ZAJogXu",
  "key34": "5qWq3okHXzMj9F2jkyNGUpnh3gQwgCbterQJRA8K7tGutuZPJw7yLWiAPiw4dpSTCh5rk9dKQhVBWzto6b6HzfFq",
  "key35": "3YMeBRFNYmjVvgBue4uRw8jGnmnV7F86BpZUZTvzB7E97u3GFH2XyAtmvVZrTvXC3D5VCAM4PiPQUmqLgfoc5Xr7",
  "key36": "3Q5FHyGtjKYxxe2rNBCnWvgdaSVjEcAF3nKdtMjQKJkL3Ch7PE6TYgrEV2wPSVAJ3YJEmUn6rZbLh9e6FpFLjC8f",
  "key37": "2dMCTbHZmz5mkjeXj4BhPrtRxFjZHLZc1BshwtSS4r8VhVmVb1s9pcxWHS4SQa6GFBMSe8vUXBXRS8cbFgCuZutX",
  "key38": "4t7nWDMUHaaRRoNBpkukrEj193DhQ1DQmzaVA3e1Tn9cY9j1XVxEAszYBZ7yQnBReVGKmu1tsoLqqTgpLstc1oWz",
  "key39": "54STniGRnKmav7Zb39V2pvSABnsfG6DoKSB8i2Zai5zZT1uku9R55tKTuczpi5GAnTfwbQvNycVLjC7a63VUTfoy",
  "key40": "2NDk4fTMG8GgvGx5bHZQsN5o8dDtS8bjBeU3ViapjhzGYJ89ic3R4n3UpnBtYkTuB5auZfSEMX2zvMkRP6Ec35ue",
  "key41": "4qQ6NjnmYvFN2aPcECoLQ4oADik1Dw2izedmWQg11NbNirVpuqCdn89b2QuzFTZ3fv4wdW2EVbpZgjRgZRcsNPRh",
  "key42": "4Cco9ZgpFMRFkiZA8Fmg944vbB3vTizFDdEYaLW7Bbaz7vUHL4soxqrZAhuk3mN6PMtXn1TacmjtJhEANfy7bVRn",
  "key43": "53Pp2v6N6fKm4AkmNjZZZmbvY6oRAvxasGphARQqG4opjfCcd8zhgGXcrNsXMMapCmFF3AG9EZGrHo8AqCoAHP3E",
  "key44": "FDJXajzXfHneuGcoxAzDgpJFSmYjRog6z85BHADWiQcdu4eDvzfwnaEQgzgfDYTXWcQqK8KBc5GautvstNfp76p",
  "key45": "5y6wkbZ36Tz2zP3kuH3A3Pjb8BkhJksQtBMX2ic1isst6weYt4GdjMpwmECbFmYW9yQdbgMk29MbwjjSvQisjpxd",
  "key46": "3abobeNtJrb8TkHu72ZbQo1BVFrfPtEzChoS5tWnHpivYbbmAcTe7JDYPWp86M9XCoGxc5LweqtPYJqnsVfjM4d2"
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
