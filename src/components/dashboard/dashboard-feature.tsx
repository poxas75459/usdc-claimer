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
    "3R66WfdRPTNERPeth7q5TEXHKXaz8RSbgqbrtqdhBi79gyo25vWN2nfEfS8XnNVsVQE9g1BTffD7EdRksR7zVG2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmqcGtmZSUNcbUA8GmELrarSbqeCD4MtK9WmBFR7zFNEg5x75mqUnE7vG2R89fgGMte1mgj1qrjDXMp5oeSRy1e",
  "key1": "3E8R5T84ACsCq8dmiPzJU4S4naG5HsDvciawPweXfDjMgumMxS6ESZVbmaqo2wt5Q85F4w7d3mcfTFVjz9eKJFmF",
  "key2": "4CMnUatm3Ztc385d2buLi22tGjxtWDebbM5gqwZqW3ys6ary6qTLkjwLVWz98QNuWyEsuJusX7yewfGVphAuhAgD",
  "key3": "4LHaRvdykoRMZ9TWmKRdGmJLoQ2fTeadJPZWyNBWkD8QZWM6WvXwTYFEmu5wa7esnLa85ZW2maxPcsHoMYjDYe3t",
  "key4": "5T7xAwJqgbJ3MdbS8pQRDuwAD8JtkR84gYeV9xctjodmr2J9kbgTDCUjHrDzcxYLebZ6QZcjKUGNYnW6uZamaiKu",
  "key5": "4UVoj7qexchzgAE5kzGfTrEypU2zmDn4p6nkcLPRA4WRkJyzChTwhoFa2DSWovkKf5YbPbgogW1kQpxDDz8t1KqP",
  "key6": "5PBUZ68rfX9Hy5wptySq6x2jvCQRgbCVcX4a6KZTH5sAmcY6uFxCeNJe6XzLrBvKMSaxMaPPoDsRuYu9mh4YHqhW",
  "key7": "3c7iPFTWEXWhG12ADqDYF5MVp2j6qzMSEFMR4fHh2K4vSXTWGrnQHGWHRGA6PwXdHqjevPcSEwxryyPTmffJw7Gn",
  "key8": "Pob2wp8xH6Pnt892JGcnrEqHDVzUtiVxjqih3Q6nzyMBGHDrYvtKZJJa8a2cpPhDLmRqMGm2RjbWbU3dk41553F",
  "key9": "4nYKPJDvAgHUHBQChJxgBtbgoSaPr1Fbx3vcWq8m6guiNCp6ehL8yt5XRDC3LCxkFnXMYAYnn7Dt2PoCfwRnV3yx",
  "key10": "43HpvfvRk8oaKbjD1Qq1NysYwPZfLchbCLMyR7j6VnzfrYyNmnWfTTB2J7htL31CFrjY1SHHNKGGQpyydyXTVQg6",
  "key11": "5SeN3kRFBXaeJsu2k7SL3rnUzSfvWKAgzHLCPwwxpEi3DgXv8t53z8e8CzqnzEgTNuJ9LnxFyxKtihU7JGYnoYgx",
  "key12": "3iNqUnRu43ZFEKcZfUQ1YXnojvGWG7RhvktEWyq2JYQSFUry2a1QxmZkLaBMbXFdxPgrtdEQopdUCVbBY36sM5dq",
  "key13": "2Z4kdpWjM6bXq9h8uzZADJykubSMmGZ4VeyjfWxg19vnEfF7FLcqADfxQgo1Tfa1wnJDfvSG2XbvF6ky7N9wiHZk",
  "key14": "5x9PCMjJnLq4Q7mpm7gAhChedr6681HSKJtDeunQb95Q6tFzfQmXYboPqzxqt7Ln2ZuGromwjxGdmSXqTCBVj2Kb",
  "key15": "5vX6akWGAe4yVXypNRhSQSMBGSzJty1iyq5HJw8tNQwxLnXrSqDCBgAu76uWQovSGu4P1tgEw2c3xavoBhRpsJqX",
  "key16": "5TgWj1MLaKHqTAooDzUsApXV7tvAdVJF7tmKYtAe7czZAYoJzJUzq5LeRE1WnLdwznRs4YkSq3TkR622sFvepgRq",
  "key17": "2Xxh6DgsuaZeS9fNErw7pFfXPXixLwcST4X3zH3fKmouBwQqT6UPZYp5TnGzPBEGwc7S38k1so7h2TFxybsdt3Lk",
  "key18": "3RVKvDHgLovAKAFS5CZP2gNJeTYuyVYdu5UV62FhkDCbcWpFpuxR5NQZFwL6UxxC2pZdeCEXvJya2uwprndA1nEA",
  "key19": "3tysHSMoHMxA7SdrUcbszrKJEhG5iXWPXFGdYojTmgWccn5LhFoknamBGECFdHrm1VxRVBbaeoJh2fjrWQc14RGK",
  "key20": "3qSnLcVu5oVxb4631JZuqjziqyNZzfMxsMzN3gK2URU4wcD3QnUcDt4e5guYLA7Ebb1SZAGUoiNet5enWfNHi5ek",
  "key21": "526L18Xzx1GxAwNTutiUgTkyEduLogYA175cd3zfEUndMgCoH2vcp2uYNEK3jNemt9P8QaVu8cQEYTVqh8QLEBy5",
  "key22": "2uyx3nhmqaoPw2xPZJiouDc4pmapiq3hDRv6553L8gNnBbv4Fvbo4txnWybHiohJvbVJH4NqxTqrepnuthZJiXq",
  "key23": "xbcMj7NdtgDrAqPd5SAMFKmjy8xAzZk9jyZr81ZGpp5LBXPUXbG5k5NuzTv8Kb18GuMwzt3mLFGTos2yAUsQZf6",
  "key24": "3qtDVGzmCV7Jrkqy3dM7CoaJj1jiaGG3YMQjfFVDt2vyrXwruHJdkokL21jpSBgWXEjhTZKf9j3VUXR7Nktd4S5T",
  "key25": "2JxH1JwS9KhzDFjyiEZdMKAY3Wq8oFYWAVQiXmQVnczjnoBAgsnr7qXsEmKovjCuFuSLBEtHaL9urQiNXBdH2tF8",
  "key26": "2auYkBETWXs2mwt3FxqWkxDbEpyixb8cpWUtGJeVDpiGedNGwtsYC8PjvKUGLtFbdqFsHxi7Gt4CfvWuyZ3kFh8F",
  "key27": "5pHtWQFUFjwjFWtkwAFceUzmAEKhX7BBBY5Uba8uPvTh9C6ah1RiVBHSjKtKAGdu1YBLadqM28i2qeBVfWzzzrT7",
  "key28": "4XmNwFH3ANqzLyh43uomyQfQX8BGGswkzi1Xh4pxMUR97brCqZWhgx4b8JwAtTWpMC5dnZUKrT7mqEhbgvRCqYnM",
  "key29": "2rsQxMQBdrdSUf5u9KFv4VkZko3HdURwPhL9oVf7gsGAXjBA19nJsKfkNXr8e6EUBciBDHpPqtVLGfQuL6fF8UUU",
  "key30": "3uRkZ5AiiU3BkC6Xb3Ji2BEn1rEfLYgrmiheGeNitSkA3ZqNmFaoaShADL1aZQKWxZHmNQe57p7CRmBAFDLjGJkK",
  "key31": "5eBBSh2damtLj2nsL9fwZPZ3Zwntt8WZnRNBwhxh6EnqQyWBohCBMm2QDkiGNEY85qVHY54pXrZqNJHPQDPRbcUB",
  "key32": "3pWuCgeiqBqg7WVL3BiaJmTCqqXzzgTfvDhnn6WjcvhmeeitMbML9XDqApCvpCZD9tbgJq5kgfhiCaiHWgLpTzKv",
  "key33": "5ZQoU1xc4juMSRw3FsyvK49Uw3Vwe8sx7mz1NXCX3cVgmj6ytYCQ3p8c3NrH4b43whvVxkQM3ovimYFK5vZxV7pX",
  "key34": "4BqXdbrNKmy5J4WyrGWUMNb5keTMaiZrSUZTiXMVGmCxivaScEBiYayxkxPCvuw8fFKAR8xeQdbjMK4tpZ1EKpeG",
  "key35": "Yv8dfxwKn9r2HnU2gyDGTJwZPToNur4B1aTB7WRc67X1267uiiG6nsDVsNiTK1AazH3uNmKMDyjdgiYRBHrUjKa",
  "key36": "ugeZyqdCYb35bu96ZHpX98XQSuyJXHY6RaouoJnRaH1d9Vc9yXNv9Uksze4nHfDhTNPoCcz9Jq1WmieyyA27thr",
  "key37": "5cMPFdBMSvY5zQ7tGbH1Wv5ZV4zo1xqFmXBFStfiu1otfk7QpaGhg4uhKzfLphSHAgvYXvSqKYTxwJaDNrLKjree",
  "key38": "FXbG8fidjJDUKQzrn8Kspf5yoRKmCJQLcRFSRGjf6SGC4h2BbFEgmDYc7938WHBbTN1ZPABQ6Si41QQNFDnzrAd",
  "key39": "5C4YQvjwmhyAFgffjcx8kV26KhSzGGfx29MTarCy3eggm5ghXthoqyGXuwp6EHWv9Gmuvwk1EhPajp4gSbcZahjz",
  "key40": "5gt2jJtYgPQvsRX1mGfxWFMafDo7eQw1XDGrC2bDFSS3B4Yofq4soBn64kKFySPo8sdi6UAFZmHfdkUAAYGU8L1Z",
  "key41": "2vMd1tQXzJ4QDJxWxXA2mJGuuMUdehfymXmbupWRrqYCUddMdzLk7tcsFDAGpS5bQQJX9B1NvTHmMftJdumPSvbz",
  "key42": "5GgSFTkPibsy9CFnFZYcSVmnk1tdYxfFBwKkr2exxgdna7ECLZAdoxwus3NUN9iv5yFYRinXswaTVqU9DzULLUcz",
  "key43": "2i4eQdoEC5JLwdcjgQcGCY9wh2S3F8GvjeHEtNjH1rCt6ws7GJw3ydUnNEHVtQLMisvzxChN4FpfhwsRHQUkDEcF",
  "key44": "221agJsHNiqgs7NvG8Z5JjMmTfKqaxrrow8xspwTi8hfkTgi6K2RvpUaTFcRck7escc87zKhRXfQPiFafsk8ubKZ",
  "key45": "53tJZ8HfTyLb1P9J9uXGNwixGvehGRUJor2jaMVSrvEANycRLaERWujSV6bt2t7AJh3XmgjuYqE9wZAmZ6uP3CYB",
  "key46": "4pML7Suu6HmcsbYfs36X9N31pYDsnaqyBpmFUffsRjTcu7f6wjXkPFGaGLXZ62Xu95c8mjPkMennXr8UBXYd5rAk"
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
