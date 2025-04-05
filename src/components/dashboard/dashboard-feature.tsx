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
    "2dfZyt9NK7aekiVjDFwFFPQNR6UTZLdcFrQgT3XZGSgpYy72cJHfrvhGC1W12iVyF3Uv8Rqz64gonuZZzAgQUwWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Su1J9qKeNiWaqr6HiqDf7N12pvMK5LmHfY3AZYqaAYodfXHd6Ymqi58AxZ5EecxzhJvcEzMA3vSiDzEJKo2wTNp",
  "key1": "43RuEKmyH1ZdB2YywGAQ1mKguKAP1dmDY9iqQ7qZyoswSAjp3swLTQZbByQKYokro7qq6gHcv2q2QW8SU7wLmpNj",
  "key2": "2bV3Qrg3jfH5Q8cgYm3THxveVi1yPCS4aF15NMwgt7CPXrRiESsYRUGhYc2no1xzxPUX5CFurvETuxfCj3RHDWms",
  "key3": "y1sz7Ex2LwJ3vFNoh4KkFtApgUuVJ1xbw3DKBZSP2wvx46g4eEGEtDhxEARDEa6CSyXq9UJXbUgXFRkTBAVAM39",
  "key4": "5bLU89TLu3SC366ckETDXYUW2h4Tj56qXXKtZcxBE3dWTnh1t5Y77gPm95cN7xpqgg2da1CXf3xv5oCwGK9ecr7g",
  "key5": "5atQxauyWCid4SB4YpAcVsnH3iN667WP3ybM5vJ4r2XQpk4Z6xxRLJwMs7LNsHPyzMfA4cULoVpcwUyLUT3576LV",
  "key6": "3BEDUmYZkQyvavtZUAawchqKu4vdRs5LuoUiVyWw7p62JE1L6Em5Bo24MC2Kb1bQJ6iwV4XhRkxv875nZe47tEmk",
  "key7": "5iu4DXM1PpwLeMiWLfgskPMEhZqDVRHgH1HrQvjsXpoAwvngLhECeiRKbrk9DjTsdJcGrfcZ1K29K3rRnUhYoarz",
  "key8": "3N8dkWT1unSsYZQyhvikNtjTcEhrJ2fjEmCtFrVQV6sNFzYbqM159RMa2nQcEqvGPWTBCywMWuGX3K5FXPU9CTsD",
  "key9": "GX5WpWfjSU9QLo3sCKxYj671VTFraggkGc5b6Bw3nhRiCsq8iQiwMdaBdpppARFs9Eix7kvTtVNaMx4VstyRP9n",
  "key10": "3Z5Vvt5Q2sqhXEE4GBr7C67a97i4hSg5Y3N5LLuuuLtYfCRSPjyQTtoKHNtoAgB1sGbvE9ouRAfNYNdTTgJmxRyx",
  "key11": "2zVF3VSS9K9JhR1K5XZHM5t2cQ2AiF9mPoxXynjN2mYG2pmWCqWqapKX4rZcqY7ks8F6QYEoSCQx1tQww5FFSuTq",
  "key12": "38wTAqDA8HutZHqBo2MN1x5Z35mAFcV8QZotoUHJh8yQk9ams7m5LBmuBp4UvUTRxwoMssdZbwnREQr2U6V79XcL",
  "key13": "22Xag4CZ6eFxVejcUVVt2JmfrNiYiFFrmEwNn6H9tNwi2yq8HBmqt898VVASN1zd9o6R94dhwGQnH797pRb3fdt3",
  "key14": "5H6hESKngoD1apAW7M8a8vqXEpbpkCboQH8j3qmKx7SrwZq9J7vdkXmoEQArUP5pGaTp3C4GdcwMFTiXZKvm8NGM",
  "key15": "4Z45jE2aS3PQ91sgGatF86hHF6XF51cTi1XTY1VrkLtexw3mdY6TnBPE3hryUZBnwcnZ5GBuKNa8AcfMqNXswNCd",
  "key16": "3PEjHS9xmgqf2ggFa54xLT3LQ5RbNAn1EVhwYTcYUYqNKuW5FVBgMCBL4tLkcCwL7XESDB1A3vSixN5sbqPA9s4a",
  "key17": "3Mt1ASgJz2b5NBcnQZxAYRw3SBogcupVRwZTCXz93UKji93cET3AxPNJy6Rm9HyverjPPQPKaPU5YMrFjdhnCc6z",
  "key18": "kgWbXFBa49TNECAtxF7ettDF6ZmEz3yvYZ3aKAJw4hKrVpHdRekQ6fRiVtQArGivn9nfLTNMoNdZZhxXYDkothS",
  "key19": "64v9XKunKfuMqxyCp9eh542tByaxjE17KxpnLD76vkFvBBemCioFpjJYfRE8M3CTgeVTRy1YwoZVHdkNdXMyuaK9",
  "key20": "2BA9VdDaTMqJiQsS2mnUj2C5WzX58o8RG4yMXvar5fR4EWxx3Y4LTKaAJ3pbjvh37oHEr1ztCxGrDfSWu8KQPyZF",
  "key21": "2tpU1AwF6HoVe5DBgtLkUBFG81PLDp9bedf1N4oBuhsiMY1SMXQH9Px92Coa4YC73g9nrZRKBNmDnxybHaSx7Hu",
  "key22": "527z22kBTZXjtWERXZwHh2t3cuHEBvnFDw61PB9cH6MggVRBHtNVVnJ47aZKoQoP5neSCTuExqLteuRwuifoUFW",
  "key23": "5bLGWxFpAwKY8nDmAHr2ZxSFLNsnhwG5ruPWpLuUUZjvPhE6zkC1zcDeB7uTAQDrnuVNgvvNBQvmz2pRAYMurrzJ",
  "key24": "3XidP5ybjzdbBAYR27Lb3GpPD1hqruwQVXvL4VLrBcdYHfb6pcJj5ABMzKw3oY7muy6zXzEobmWyXNcRHr3tyqGD",
  "key25": "2q4srL9N3jErBX3zwJYZPw32NYhpd2F6TUkzCyBJbzbADNh1JLbum5eYYsamQ7qpf4urprceRU5r96NWZF7yp35V",
  "key26": "rB3S7iK9T8aJGk1HvZaJ3fn6b7QV4kjdBZBXKRZeJhNieo8UZFBBnj5VXBbbZfdUA6HuJZFG6MYutawyAJipWMU",
  "key27": "2UTMC3xJziyRQuNQt9yDvHDZ3ZvGYxTaCb4MdRxFY4nSBerwJysVT221YiGUhCsuqGgSKBcR7zz1vUCaryspGJW8",
  "key28": "4XnzMXXGswuryAvjTuERGatFC8ZSaaizjNEWASpEg1Zo6uk2gUWbvVDecUQBbvHaB1BKFi5MNN2Fk5MfYPvkAdq3",
  "key29": "5vTA9cHCHPyd8i9UH7SaSv21bDZJWuUYjMWR4ycK9WA2obv5s3MqzqnyMhrp8jsPrAwb1oPZs6Xh1Uhd95daKUnK",
  "key30": "4Dzsii6UvmBjcoKN1CRZ4HSKgBx5RLvHgRyx19iVznnzWFLDFsfdKZKz2kZXWWHReWCZeNbUbmbfXevjBvoYQgiL",
  "key31": "J7fMucJbmHcZo7iDKPJ2xVnwu8PmqyEtCypmgPtkhNbwtqFcfBsMmW1CZ3D4B5isf99bJkDtR1Sza264FPkPW5a",
  "key32": "jhMtXK25DfQsKW7t2kqpHuRNXPQZxZJfR2dJrB5DRPwWBPQmYm7cmnG1sedvjXaFPZmV4yDVXECprCFCVqHTwrV",
  "key33": "5gSztNaoTHx6rHrdWTzdJwmbLFJN6r3qmX1CrMqVufcUhUYKr7238PiV7uz3Vw9xck4cCNpZfxGoehYZHhRsmxqc",
  "key34": "5ejLGNyWgv9AnoCNDrr4JaqNHDJbhNFfxYmkeViZfzZtWXwnoRQVS7ybhUorqugFoY6MFWGu2VXopPJ4r4WFwBrr",
  "key35": "5c5q7djTaHjQX9ejztNSNX5R2CgjURmkufuBYH9w9TVXuckFg64AAKZjheBWw1hK5x3wwZac2t6w5FWA99vRWyEv",
  "key36": "4nvYaDK8KhuRjLMV5Sh5ynDDC8gvEu4Jt65uAmdZtM4snKyt5RVTWvgxDvSeyszWUq7QrYGVthazhLJiSbbswKgQ",
  "key37": "4RvkUJHyQGpTKuyph5UGMsHzJp8FQPCnpH3RLjTe5CDozsSNvuSt54KH6Hupx7M8eqJDfdQJFXCgoBLmUBtZUQxX",
  "key38": "2NHR5F5Y1jXztkNRMuD8mtwta31pbCDUziVsHVK6ZYreky7E8nmRvqPcM2uGwDkPi5gyR3y93Sa8iehu5SB76jkQ",
  "key39": "2i6z4WzRD9i4EYARYFo8DxNL6kAxNJsyeBcEHe72QrD7nk1fzS9ULGnBDEfuM8qQcrapapdJBMDSAGvm84u6tKFw",
  "key40": "EGCxRxT9rCzFB87nZiiiguirCtNiD87pGmduZbnJvt8APiNJ2UxVUYZPZFN42gZDBMFT8MCbMxHNdt8RZx9vnqw",
  "key41": "5NSPDWJgbivTdHNoWKmtJAaAXrwFNKhH4w9hzPnYKxk8xenwfEiJu2sbJQPLMNie9VTd3qdwHDUbSTeZgyXtJ3ZL",
  "key42": "3UBCQAF1DBMsCYwWAjfgb8zmnnch1baxjpsCqwGfeE74nKGBQ5vk8ZH7y5LdbwNWxxiVVPyEhAKTDmpNzKQqFLPt"
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
