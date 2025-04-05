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
    "4tA7YYj4GFGDQqSFJaEh33DJMh85wkq7Trsfv6sf8DhxcouEPoq9SENS97mszJkRszFL82XksmYmTPyZjDhJzkeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32VjeY3u1kYTQkcBJxMmTFLfDc4p6Ad5NiTQQKa8c8yjaXU4Q4vBSQwNHYPAcrB2odtY7SH36ZJ1ku7WyYpx1UgP",
  "key1": "47SvSbUJh6AzgaEo7V7NHDskNL8JFYqwvMWUQFnyXyuxiBaMz8Re7bWREQZvBJusxfUmpd29wxNS8YUUSyDmrjv3",
  "key2": "3HUFFEAzMkgLRvykMumDc4oRAhXkmsbZ5dsE1r92jTsFNRj2ueeeoyjY3MtEFqQb7QoBnD8AGxyBATrpYdRDUwwm",
  "key3": "3L1bazY48bhtYtnCYmDjiGKzMGpVToxPgvVBWfGANM9eoYohtKDdXzzmNbZuEDERiKKev8wJMujUyqe8rbgNicE3",
  "key4": "3GvyecUBdeE23nrhyK62ayipc9uWUXmU3dghYMfS7pLwh5gXvWdGEicuSdnaBxDdknBRroemXu6kabtCspTQdwBU",
  "key5": "492ujP9WddUxfU111oy62PBPrEDQu1FLR23DbXzQVgQAicZs6dw5cT4Xs1KtAUf2uQDSbJZXmswAGPQzUwxZQNtZ",
  "key6": "5Dx8LESazjZQTd2i5ryVjtfofjVPHUbAnF9jZpzvnnVgCGczCivzqYbsqboH9qCzaKP5vZ9kPaZGmD88GuEL2kNv",
  "key7": "4TFNgJPX4uzU6aiArGpHqgjh8Hhhf71kPTUEE3FDuRyzKc4C19FCxsbfeP3Ckpp8L1HPd7jESg7fw7SzkurGprfA",
  "key8": "3svGQLv25NCNykDKm83pu4nz79PDFo8iss4aBAh2xX87498QUz3oheW8SdP9QisTP7XbrrDyBAq894j75sTphfpS",
  "key9": "3GfwhVxJYSUg6whUmKBQa2GwLJgFxdDp9jR4GKjWXwcu4jawvDd45cdPqeWzBykkm6XNFzQ9HwAvUMoFzks8d1GB",
  "key10": "4A4KNJFoPTL8e1F6YY8h9gyjh3S3vbcBkmtjL1U387ZXYWm5PGmrG6ju1nrvYZiZqkH9fMNhz1F51JKi9mZBMbiQ",
  "key11": "3SgGrogZ92bjw95pTheT3DsYvXJyiHpSwfPM57vZXCCsJ7STDT2y9NXpMNG3AFhDZYYK2RyRdfHzBDk4C4UrpyKj",
  "key12": "3cfbDCALRjmqdur2Z8HcDzp1pxrmp77fE84tHTUvXRY4rmAcPkLVREKV3JpxdGVaWkvumTszaF9TMybXmTqhvXpc",
  "key13": "1uTjXY536o8KrNAC13XNPvhGknzTLaGnuZZEwTHiqag3fLh4kavEh6PrGKjuiCst1TkPEuB5mA5GTTGea5SmBmy",
  "key14": "HaFhwk2KG7wDC653YoG1CwfUUaDCJCek3ZVj4sAA1ikPXyn8Ah2ZpAqnqCDAkFAyTfUv5FfedUBZYrrTxXUJiR6",
  "key15": "5JAZyPCoESUNgQahmuaNLEvJhd7z2o5t6HN1pVq69wRKt5FfTDyoMCh84HdtsZ4zu3khAnULioR79Z4kYwtj21iX",
  "key16": "24hJ4ZpxvPsAFZRvEViwJ4JdHiraF9Qm1ac8mAKpCyWYeRiBcXJfw6WZuy91KsixE3agPEPKk8q6zNXnxya8SJwS",
  "key17": "4MPPN66mqfCjM7TmyTBR7ieYH9AQicRAsqhtaNSxim9JreYfxnKkrtqGpLbcLYeBCFUkdPHGfSpumt1qZyAWLYM7",
  "key18": "kQdhr64xpd1MnZN7Npr1fzzZb5Q1vPKwmirxNndRj8kY4k6JTBnjbnQKUqP5DagbtNWHUV5sFJjz9kKFLTxs4xR",
  "key19": "32ntkaStrHSWohrQjrHqWSC1a4Lkk9E7Uk9ZJhN6TSQUVxQkFJCpj2gmpjqUMirZYvj4ZvifPKr5g6sZQiyiG57m",
  "key20": "5AgT5GAuwXCney7CA1fzQqYK2rY1puezpbazijNFBB2vDMJqzHYfhk67S4DfgAEcUmGvaRMQEge9Hsceh8Sgr3mz",
  "key21": "2YugL6Fz5C5qRFzNytfyooVtHYc9cnSAXvW8HdkidgmL8rCKqqpN6VodHDXxw7KjPmFsCcRUkBRkMynPvVAQyzcP",
  "key22": "5F3YoCqhEo75Hib6QGPCtjVMT3Lu3gRwas1jnJCXZ85bdjGtxgSvnzrUmTRvHjXZFQv7TjH2FT14Em5T5YtDKc1W",
  "key23": "644S3oHFK5jpvo5aiLsg5pLQB8PHYSrZwcQZgiuYj6B6JmHEa6D4UNSeRLhGttLPSmbk7K7nL8MFrCo2bEphUfU",
  "key24": "BTospJxAc1o2wwsL1T4mG5z4EQLKRAxmKAX1Du6QjW93fLaCQa7aLV392Sbnym679smk9xPUwkUvSH8SukaKU1e",
  "key25": "4wmkZyfF7KoG8xnvZpEeJs2iuzQeSNGjXFEbYN4ysXqWp7hmt4m6dgQWkLf3YTd9pBscizaG3pEvKimVtFkxmSF7",
  "key26": "5P34UhEPTkE1Ts4yo2axHcUcpcLZDwMHRQdT13dCUwp8UA8kxKf46gjMCUzkzBXm2R2gXJQKpAmakbeJaemZecyY",
  "key27": "5Sq8zmzZGbX2HSykyfzotv3rS5HxVrFwyCkatQq7ooJsmdoYzYRSqXoHgu5MG1QLEY1KoXiKoT13sKkWsvRXRmfh",
  "key28": "5RAMDyjvqPqkxxG1amyMfvgqyq3A2XxDcpDKBJPiKUfvisq1Xe5fb7iZqXsPnaAHDV8cQeWhwEWRQryPs61rAcw8",
  "key29": "F6FSDoUNhVBnx1fcS4omoW4yLJberdGooweqvZDofdVDdFLuXGAjYDn6FLaz86UZcXLuLWsfcM2M32w2KkbE2QG",
  "key30": "5hiBoMKUdHdkp9LxWr4LcGR985vPSfDythcvLeg9ANvbnMQ5jmfYy8dWwzTfyHMe63cQwK3dRy8mT9XRv1Fj6RZe",
  "key31": "2aHcHhiwGafaXB4hBVLyj1rDaiuvk8AvhcGdqTsk7VcwpKUHD1G5w8WftgEmW4aBiKzsV78R8fivKhcfs3hbQaXb",
  "key32": "3kWLReRRkK4E7NoQX3D9TzsgenG8FzK1VSnHgsnptWx3Wnc85oab4xjnZG8mYoyZ6M3ss8kmMUebxkfqFkYucLQB",
  "key33": "61Ex9bf7y4zew5D8ugDtn2aQAbo6zZMtihsxNRbnRHTgK1hqvdRFurNaULuWNmxMyxJiNGKbW5LSKGivXgvHZdtA",
  "key34": "3cn3e6XZXhtFzcouiksYNXjtnNbkb1JjJGYc1yh4gJotMR6Yv3vYLjcegkspVkYuuH1ckqHTfdfjHNvkax5uc7WK",
  "key35": "J3BeeT5Fb2mJzzfGBQFmdG4y7zgJwzsYexJNcw59MUt99yLed3BvYmcBMVLqLMTVyQf19rAdwGd7AF4yeWGAHqP",
  "key36": "3YSsALdjEsRyVQuzambnYNYt9XB7Lq9xjSnoTT6oD22t2qNfYYvuitVRkFe5BmKr3Yj5yv5X29tDY12fBmSs64Z7",
  "key37": "2jo92bKXsno4d8AzpuVq79fYHtCBc8WFRknBveoyjSMwj9zh51UJjyv1ZbDXuaYTiQ19Y1v3N8sWsmnkxuwkCMxD",
  "key38": "3RikxunwKABrGB5wUNzbdJHdw7oTLmc3Yayfjj1oHwhQrNQLsCzNuQHvJfbuLvBrZ55seau2UdorhGK9tW2T1yuL",
  "key39": "JVoF5i7Jq45wzuCzZogyvjY7kMYBDkk7FuS1QChM5ajhfWUjhcdA97paP8xa8mDM7iDCtiKujvxvzKpkM62xf5t",
  "key40": "2ozNCD8KCSBnyCwk6MAdxm6LUmYikdZZBrPTBaUNq5pjoZwmaeRYrMPKwSPswCDtyqAkrMexyAt6HGMgBmu1GZG5",
  "key41": "2759ZUPAAsSVWCCxafNYxHJc4mUCd4jZV31AeJLM8UY2D82iWsUEpt2DRKPLZHWntxPavoGviBPXhpqLEcsSuSxz",
  "key42": "129iMSFyiahCvY1GRWKerCXHz4ojUWkP7LXzPyRoDBobRTwThhAeWyPEUB49wdMZmW5L6BUC277PFFuZBVKF8A6Z",
  "key43": "4siF4f5tVYxPLADGBmx5EFpYKWkigQD5KA54EsLLpee7NGRa9VzbVjCLkvMTKtxmmw9HMsfC33m7sKYJLfW9KL1d",
  "key44": "61sfGYBAH2xhWHZGCNMxxEmTgWL4ppg8nYqNh61JphmUeSDNtMGScMm5gLMxhfWrp4ETCoiEcUxAXHYzsRCAzsHy",
  "key45": "3q9wZmS2HMHoXY6MqUuVJb6Jtqsk5qqQc7PGzR59dvcKYhCPLtJvETbcaLHhsSuu5oFbeyGGoPHDywjWCzvPG7bo",
  "key46": "TPojeGEYZwzw7VogM5xLw41LmYVPuuxpxQpczMChbGXQ5QmkfYx4MgyyZx7aW9X98iDHsty5hyEpjzQLh8sVo2m",
  "key47": "5MVF822iroMGGnDvZhAXqrH84z8Bnyn7UgsMvZyDr9rTQEpxmBtBykuBn7zGody3ZUCiKpg4GfAbdAL71cCmpw4X",
  "key48": "8p87KzhNdYkt9i4QQLnrb4aChBDG7EvrQpXky4fAziZrLigoVZJAe5GJEGArGVS43gwTrQYPB7HFFqLhUetuJ2p"
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
