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
    "QEC5vmK9Ku5w82p3xrVWtgsEAUBWNi76uK48ziAVEueHGBFsXYSZsVpNnNLpwSMcmLdKhJea6cagBHg94nx82pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDX4wFHeu51ceZPecb6kPJzT1Ybg3PrndwWBaRnTm51Hj7gmCYZaJJAgCAPjUeUAMdypfmdbrQFGkq3xPKMYXHZ",
  "key1": "5FzeNuQ4f1q1ni3GqUxSP2G4z3uXdjpuPh8VHEZ6UWxdQQpmTKuqGukgBVD5PegTYhy5qBTKQgs3SB6es2A2BF8y",
  "key2": "2PeHPTGiN69KGi4MmXWCgbmDgJicMo3hNvK2TrRXxFEXWB14wd3zZY8ZDvMTGmm3RyLLE9GqEHYgfeEtGN8Lvgit",
  "key3": "4rE2jR8cqzMymAvtr61t22UkR33VpFcRiBY8k1RBBjMTcKmUPbENVY4yk6smc8pYH7jTb1bGXoM9aCgDRq8XmZSm",
  "key4": "2ZBoE5cchzejdBtQRhg3jCkn9XakvnRKZwYiKCUWBgAMe73GSZ3WsPdnLfhZBazL2dV13mU8MejHN6FE8MtA2tBg",
  "key5": "22bdzkx2g1zfd5ak82KXoRfgj6ELmQAtXZFyKTc2yhZPnUf6QDESdgdNZhVgk51yTMw2QkfKmfT5EXWP1N4LKuD7",
  "key6": "2SNjrNyGfPaS7QvczaUSng468gJj6jo6AXdW4npwdCpMnkxDT4JFmYtLYqEqkh31fmRLeyYXaWaYphTbzj89aDaY",
  "key7": "iVhawSULMERN4Ta1bKP8ckFN6y2NjgekCBoajL6tgxMC7anVN3AZz3qqtVCHcw8nabvotRJMGnaMWzWZTEyg9Ko",
  "key8": "5Pq4kMt4Hat1MP5iVAqVN8TEzP3sFThHwGQr3yf3nSBpAwp9daBxjb1XXZnvQCod1z2yVZPvyEsKvbaVPgvkDRhQ",
  "key9": "3eUsopSSJbL4o4PrdPBcgSLx9xtK7p93N4aGSdfjMkUQ4xevM4DAmybt6Ma3idNKkxbd1wSJ5TTDeAxm8CqTGcwa",
  "key10": "3iG9UJ7nq13ewRH2GRDv3XphiUAevrZCXiergCWDmq5Bwn4vvhU85pBEXQBvrVRhkYZdyjMdPgnSTip2X4a3kxVL",
  "key11": "4f4C4GhnRqnbDfg8EGK8aBz2yZsTWc9oCmBB5VkhMburtXaqNHBwC1YaNtrryuNKVyqE4pz15yUrb4NBgcFHqxqM",
  "key12": "USMkmJ61QZecHUs9nN62KJvbitFCoWvoADjBJRmqm6Anouz742HPMAkmWSwog38qZN7ki7BD8FoRFkgoeCUouMd",
  "key13": "3aYCMrCZvxHGs9s6HzXpo9KHtHwKLwu49mtW9K7P3J4AC9XYxeY7HMxMq6b8KGvosSccUWeY3s62WNbxrrMZ2kdB",
  "key14": "4HyV5fTMrk7HdEoUS2JrA3ZaZw3mQm2HEHKMbqqsT76MDnzo6cjvF3FG63mmEXfwXX3pL8KDv1rFDgcJ7JAaneP",
  "key15": "D3KFNKvcb6NWEhsGGeLWdX8kPgdqJH9YyLB5HE6y71JubNwcwut3cqeiRAaiQH4fjx2L2VKvQTrFYiRojjEbp2W",
  "key16": "4u8pqeaYBRjwtSEtq6ZgZ41bxLbL1AsAHYnFbRNoW1JbAfed6LnQwvDqXp1QqgktNcXRC3BjRYijJcy71cn4Q2aJ",
  "key17": "bN6mwsRccxEHRjoqvhCaZZWjyXKSiFrxHQr1v2pDeipqHj2NCRUGJ2RH8eZdMgSPh6js4mQ5DX4Rmr6Fa4rE46n",
  "key18": "3pnruut1G8K3rnqkUB68RCUh2hfY1ZJ4xYocMopgDchb8TQeVyYpTqbqdu5TRwhr8MPgPB1hCcvCbssdrswoNxjU",
  "key19": "37N3DsSpmg57iYBBZvhAVCVAJDCuvabvdwWu3aJL5QciAGWKQ2GMuyKTctCQ7KFztjSvZxpxgTLcRquse8sKK4Vd",
  "key20": "3a3cxrW6jfVv4vTihdMNZ7B9cHSeATNqX2jq8dZHaXv2M357G3Qmg7HG4r1rM8AEHCM99vpSvT7tvqDnb32QhBfW",
  "key21": "2nJAAPEf5DxNsqM9GFtPbRh9QPVKtMJ3Ge9dC9WWmL5SAuBHpXuaiqadWo8qdu2oVVaW74dwUFpRY9RukZgNDgTG",
  "key22": "339TH5UCZiV2nHcn5tGSLvCScvN6r1eAXEZNQCXq7ToTutv6Vzkvrj5VontWTc1gVngnytgviHagC7EAUFrB2Gbm",
  "key23": "XkUvCZPQz6GXcc8FZqe46HsV18HLpNsGnNjAd6rPaY5z6d2xLcdYNyrWhoCniX7bZ6mUArvr8j7wMvotRwp3Lsr",
  "key24": "3Sm2p7SWWVKaeAous9ADaLxkoZjDavDWBSjjCzU8MqikQeK9hMCRAwRLF29hc237D9m8pVzPYgssCcUEs2MdkGgV",
  "key25": "bhGRijWyXNUoxQ54sfMD5uwMh6ZTfEgLu5se753zvYQ7oE9UcXBBDQYBfD1eAPgyXH2iominGS4bAkXv5bnfAut",
  "key26": "4CneR3jScrB2Pp4vgHxejR4GwPk6gbeZyXmz5NbdarZaA1iEeccj4se6mhfbumqaD4vUZGhYV8Nyxf6GfrDEdp1C",
  "key27": "5RRK68DPShXsQqJvS6pPtT71i4JAEJmdCKsFXe22JxgrQbq23uBBZdHAdjvcYjmadxGSJtdR4AvF8Kmjah66aTnU",
  "key28": "3dwawfG6ycz4cbgYRenRAURmgX25yPdQp9rvsqWwWyrsHK9zc4e5KmHeoFU89U5C6Tex2oxEBLSCNr4YFjbLp5S",
  "key29": "2bZyLarfJP15WMHNALXwJePMkEpt5bZhkgrrjvAiw3G6cE4uNWhYhzZoDd9ExTfeHh8PuxoY4GiKCktZjHHd8peX",
  "key30": "8WSUMv6ih2hGMyUVMPpDeYV3vTHVmPACX93M2hETSK4aoSHVndvvz2jDiq8daUb7viSyGQ1ezGwicePYwH43gEJ",
  "key31": "3hJ4eEbGkQ372ZfgTGkk71YrRcaF6CffHxmXwxBKspUnnKqaGUiijJyNcEJK339GzqSUWCv5iXiVXzhEvfY6HhFd",
  "key32": "4rJaKpJc8j9EuLtu6GXVU4hrHu7yjmeioDiuxjjhGjuAP6rpUDEmCRkAaYa48i8J9enE8o6Z7PqV7aczvqLbQy4",
  "key33": "2f8HijKTw4qCrVpAL1Kq2Hn32t88hagDrQx9PakwNtGsmVzfg97wcJH2SYpmgK9VA4jpQJEkyFKec4ifXX5LjNDL",
  "key34": "7SKGMBwYM2YyxNz471gcezSgVzrgFtb1RytuXmWiropKdSQd1R1Pysr5ZHafTinTGj8ct8VTVyV7pSmnem2Xjvj",
  "key35": "4AoHTusD7sJde6EetJSxNix5jb28HCELJg6aqBEZhxL6qxsroXWEkj5Nt594JLhVUAz3oAza73sMDfT2ZbMiLRu8",
  "key36": "64yrqAjEpSvkjh82Wr2jL1CgoCgKrA46n6MMLoYuPt6PM7p4W1zZddtaBcMVLuuQLqZmTHF6G2wwG1u9UyNyE8Ga",
  "key37": "3teHE4fw4Etb3Lm1LmVG5VsahBdbJx7VsP8ity2fJPbM5VxzYN8H4nSBunaL54T2R4W5rpNCZpP5HD8dgmPxBmTP",
  "key38": "2Df9NSFMQbNqhPpuuG9GEhEbA3gXJvkihhyesq9BdY1PcqVc1AWm6ij3j624guKCvqHcxpkpFraHE6GcSwQsGAwp",
  "key39": "3JcYLmJ4VwybFvUxwDsvTDtXuwjUNk8eqk9D2oJ9AaD2vRTnGu18Ezt63SCWLqCst3xTxZqkWJMxU8dZA7UbbDVg",
  "key40": "JZ4R9VUd1Wo3NMJEY2fztMLaCX6hiuLsRGi6tVJS28SAiaacMxSuM5PfgYmnvhjZvNoaVeA27KoQxVjLimxzsSP",
  "key41": "5hCpbm9STzD5rh4kVjRSbwpJPzgzMSU41LdwLzHd5GKYkDpDFMbCZFHoKrcFkhSx34JDH41Lt4KmmP7UM9xhjJyw",
  "key42": "3AWGBCC2JuFaLDaGyjYdjZuQdmgxRXneEpWUpx7XVE1oR96VNJ2m6MZEJrAV4cCGkxFQUCMk6tf912vKDjpp1LMB",
  "key43": "26fjLAAsq5Z21uxscGFxsbB2x8SD8jYhS7Teatvt29kEKKho7G2UEWtib8ZL6KwLptjEciavgqAjPEaKPBBa5Dgi",
  "key44": "4BdmeGxRXnZWzVQcV5Drj4qZiTomaLM266h6GaH3pco1yfaCjZfcbZtUmQ2M8bVQuQN7swB7HHP9c8V3Z19rEwgk"
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
