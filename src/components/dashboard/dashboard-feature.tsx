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
    "4FJMmdxawV3KVzapSBxiWbA1QKRVB7525hcnLBnssxottC2cZTD6zSzwLfuq3xC86XGfyrUde9yF2zbzDi1DAYeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjhxqSBpzK4zFEcyw55pszohRPN53VTzzbEFz7aAbbrG6mmxMp3LPujBfpAdYN4BP1f7Xo1bLskGWQcUZXwRcdA",
  "key1": "2sJSchfLe4H72BNbba7q2VKeJortMYgG4ru1EJE17kK8WkUXUXtHQWfwB9iLS1hwDhjm4EZvzcQd3R6ZwYssrRb3",
  "key2": "48rZnXFs5tp7Kb7LJWqohZpSZa96JpiFgkKvzGvRZ8NXDEVZguJfA1JB7CgLGg5S4y54wqVQCGpoyTVv3R2RExTX",
  "key3": "336oJfb4yiqsnZZNoWPrBVxjWRV7jcypVe5Xhav8pDyH6cykCPjQWcJJovngTfZsGD4hR9UDJK8nJ4rQQ9WW98Bm",
  "key4": "5XBMyhBEZtZSmq95eANg9jD3PsAHce4BfHQSLAiVJQF9TVXHPvZ3ZK4sAW3mamtUFRhZSq8aveBYbzNwSKfdkWJo",
  "key5": "3H2CKAGACmTU9HQ4sc4jWBSMydGot8ouxQEZj4Xy5GMMppokxDk5jZ631epaEkNK71CF8vje12vg8m6jsUV5hMva",
  "key6": "3aJhdA97B1k7rFnvxsXRkpPo7HjZysmZSDPbPydUP5cXJ75Gvt1hb2xBNLhGHA9tJwALGQzXiidNFH9Z8yKf2eSM",
  "key7": "2LKprQYjxrxmL1eHZmawMfiLDDo2od67YmKCQhGC9ht9pB8JjMcghNvvxCMy8kQZQSUDgwkf88NFsbZhQ9zrXKs2",
  "key8": "2XWjtnHEWNUxynKVhnvD4o8fLvBYzLVyLmjraVYSfFB8avkERJFfXdjktydRBWcCVUKtASvXvSR4G4uq5gVYYqBH",
  "key9": "4Vs7mTiFeDU6aUw1VPgqLyHRVTFUktELtYZVZoWk11P6hubL4Yv7ZhzBHyVERN6QNA8uqpp7dQz5Q2yTqCLsQX6w",
  "key10": "5pcRTH8yieHMZJFRYWkxPj1qN3fmMaVfVGL88kARsMebmt96yadVr4GJEDGpoE2gy3gtucv4xTiQw7qRQNPuy11z",
  "key11": "4LSbc53Cer3wNi1CLzmVhGJExpmEWwgXata4HP9XWdzxJrNJAQpyNjN5ET7KWEaYBsNNncahHe8UmhHoB3ChxnWP",
  "key12": "7EQneMp6GgQ3Uiv14pAXEmkvTdRHuC3sV9Mt5VRXvAJyFBKQLDadTgDQ5AFPwCPfhUTfM4p8ggyCq6huF8zM1cT",
  "key13": "4uEbEWhVsA7SKeNyBSs7w8Us7FS7rVpN5iuMqvx7Fq6ZEzfg1YpXNKooAwPSr1A3FGjT23D8ZNQe2CMCshyUiQBW",
  "key14": "3Us4PtuJhU6ZSWd7fnPWKjVZY39zdeMPYa9GTcu8uQFHHgmt7sM8QLPPzfMacuEZx8R9edyy5PFyRhPewJeqiyC7",
  "key15": "3n6hYYuuwVUsbGBJXCNh3qU9mqyVrw4DSDEn3c7NzuGmSwsz8898U5sVTKBGmwvj7pJpbz6njtPh7ksLw2y1ESHR",
  "key16": "5qbCVyiZc7EWEPhdz2JTccQ3aJ6uKFmvRLimNR47nXUondAUEcAqLoEY2Bk4ph2v6HDd88aYvhut8QFzGrecWZbu",
  "key17": "45AwNZZHA6aWDf8wNQYBSKhBhJwmVqMJLQaJZQ36AwbwEs6RDNNhS7GAo7NEhqaxesryNCvHE7Eq3h1i93q3V1Fn",
  "key18": "56ZPFdw5BycDE6NiwamHRaTufrFqCP9xMWKR3uFbidvYewuJ5ZX953PJ2kb5vVsGjywHVL2DxwoY2yKLsTBborKS",
  "key19": "3UMPbvJ7wFDHkeFXTWcqYoqNhzRE3ydgRUBR4cECFkMugHTakW34Hvp8jo3rzrtv1mT8Vj48Dz4GsBsGN4cz3Yg7",
  "key20": "YtabeBYLB7bK9Ez2jEg3n8fV43DaxwrrquWDhmMh782Qy5NasVV5ic9obzh5JuHuu3t19Jd8PVYrhF7AgLREJUa",
  "key21": "2xpQsvRMgadbxHxS9VGSDUWssW187UzrhDVZ6f7brseYyg1ZUE3sgomAXdkpk9xiAuttQg2BaQk5qKBwj4VchWkD",
  "key22": "xFCdLzGoum3zAFgbnCfSAHKRB3msg6LFvw1cFH56BqMUVUhA5YD3QkxMhWNmjN1CVxrL5owoGQNYR6t4AGvhoLo",
  "key23": "72g7j7p8B5NEa2CnGmzkUBjTTSMwGZHkNmkZqXADgyJq61gJhwM5HW7bocq6je5R68cnabUmWP6mYaSxRct8Vu8",
  "key24": "2T4TvcYWwuxYXFX6jYUG13kKXb2aAZ7k34UyHxPUtz6FgvUiLAL4Bc3YwmLSbYbWcK7nhD1VMN6AWexv9q3thwYL",
  "key25": "2XUaNtCW5p1CZrrH3FnxeaHKPifbN4kv4wHq75bRTN9HGatNjfrEaHGu7CaktfW4iWPfrPeou9pDckTVzAUVFAXg",
  "key26": "vEji4tXkjTedrd2j62SnjYuGKV46w1CqKJ25uVuWMF6b9PEy8eJGfndUjsaBZDTqnm7aNYJe2Gks6DM5VtgMmhe",
  "key27": "5PPr1wy6V6nJCnCtvL4ucC7GfjJAJhF1AQGaTsvyEo4F7PzCbZ3ZumfirPsDm3bVAzj8RCkzYFB9ayMG5aJwqujC",
  "key28": "3RiUNAG128xNrH5okLyKC3QmHgjC3eR5aC42hAgjBPQnUZF7g5GriYjAw5344jwrumc9sE6EWSrhsJMJBxPBFyRf",
  "key29": "56fEqcXkT7U76WLE5KP9Zk239MRAfgkEFzmDS2zb8wcq2He1qaSJbU732rMAmiYkz8p4Ro7ipa2s72U3XsT7xM33",
  "key30": "3tQYfd4kxMkboN7Q9u37iw457Mme7Ndp7z8Uscze9Vvt9hYHZM7ZsvmZ6ish5XPnF3hnuKgXxQBvhZxbonDiNvcG",
  "key31": "4x2MxaStSDirv1RT1FJkGoWSdRNM9iYvi4PbBYPzXkDdiQzcxSuUizNS14pmcwK52ZLvcSty8N3BgbawtoiFQHuJ",
  "key32": "26oyquXSJJ7YpPKnypFy2bkk1sCaRAYdKd6oFecsHF7XDppzTsPZW7tmKfv6NdzBDpCVxWKG6vH1usFtkP6aZpZs",
  "key33": "47TMUxhiCjYoKLoB8aDUd5qCCDgnf91iQWj97SB4ii9bZ4NLtBJWGwpjmBbdpaVPDAoCF1FFh8yvE1UTZerekPxq",
  "key34": "3L9WkXemweYStRKauF7Kwv3h883Z3DWT3ETKuLRNAobfoBwmukihu1fb2mUy6iLBt1x3Nor2J3weeCKEsaxs4zn9",
  "key35": "7o1sxKmuV9hasz94dEzMXoJhFv6Vrb9m5viHqVh8xDSBKSbSWJmBDTJJf5L3Cvkgpkt5Fnw9REDRi9PhRthRNCS",
  "key36": "5TWPM9KUfp1iPpLYgn88zWGmcrYv9StjXc2ktdLxD3qzmajVVmYs2fEtnJCS1XeJcF8WSxTfEbmkDw38KULrHoUB",
  "key37": "4p5688XSLFnXXNuQEynZB1y1hpAWGJKy3N2FTBeBX7NWSGQRnUPmKAmWo13czWMebCz2JTL4nYcrsQhyVv439xEY",
  "key38": "4Q1upqFmS4g9dXj1rbHKBUMMvRgiaJApQcAHBQHi2pddNmnp99ezJnKQzk3F3CVrJy8K73njvpmknA93E79j3XUb",
  "key39": "4nFEzQmKB88fCfJM4FkmzC7HWDma8AxGRN1D7Ld2qrXPbVyx8PQ5pP28ounSCEf5VqFRdqcsMxCqbgyQgH8M928E",
  "key40": "3VVZzPTJfMqiexGYh2RcBy4G67FstxR2iRv2d6KP6p42kZW296LwzkCDKpJGHDiakswaCDqyHJKNWnSDcYVA2g2E",
  "key41": "L4VHCvdomAW2osmizt36Wpwkh8qqtUFEhAvrYRCe7RiHAgJw5MzFGancqyP35zTaxR9Ps9sqwYb81NbB891HuVM",
  "key42": "57gBzpuAs2U3kk3qs7mRkuTTxJF8X1Njo9sJ6HtE5zZFsf8eGQJV1FCFyGmLEJ5zReWTkQ7pSeFkU62qCTgBioRu",
  "key43": "2FEgorrLgCuBKmyP3PvpBPAG5XPDVtnYDiL4RWgbvb3YAm3XABiPBJDDB3jM4pn6u47zxwzrwHTYafi1haXKLQc6",
  "key44": "5T1oRVbMBHZzBF6ZwUBu5hbiujy321JihTb1vFL6Ao3TLpgs6bk3MYsaf21KMNSZKLGJJMP2haK8hKKDewYDYm73",
  "key45": "5LShU392CZu1cxHgkiNW8WxxsQCx1PBhnMSzYVTfeiVseDLVAySAWjGY4UZLWFuLgnR1MpfWr62hfSZBcBYFWKTe",
  "key46": "4it4VwTWEkcvNA4vvdJcevePd72gMCHf23AFctnr6PwMisByeX1Br2WLdNARWHvVSgXsssQ6BRZbg2Lv7fZWAAcV",
  "key47": "2FdYDGnnNM9pbo5aYBLmuBWM2YQUXfZ71bN3HgQCZz2kGgRK8gp26e9YPvpt7bEWmqp1kXu8beHjd9XSo9qixhFN",
  "key48": "4k2vnZT84bQu9cdVHTy5BHoVsSuxKdsY7FTePXMSKb4xgRhMMhS5YoLyrQbWFNRzSkvPH5AArnuyWnhccamTnDkC"
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
