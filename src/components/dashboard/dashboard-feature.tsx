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
    "2XHgLbdpRgT7LJSYjEdjeZ9pga2rr5As5zkvcWtm2pMrRDmBxbZ7dWUJ5sVJdx5T8SpJp1GDbAVgrFhw8idLwpkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54S1JfQYEP3TKgrJ4Sn55K6TSetKHhXuDNU8tT7bNnWsWaMTLMpMfzd86u3X6Kgqu3yALzkhQZfDq5Y2Hzvhb86J",
  "key1": "47M5A5fWFNLnXijADxifLSNWTA4xq1JcAvruXcQEKAv4vq6JS3BFpy9MFRvRyrD3zZducctxRTQTnyqt8GN5REJS",
  "key2": "PReeKTgeFGUy1vMDL8tEe3h81qPggWzmC9hN29EkdBEjRmxB15kp8cZZdcp7cVwbFD76gNAwuidXJLjLWJc9Dsu",
  "key3": "4oJPevffN4AAEyY7fhc8fafu4Uk4i26FdXDP5Lt8hguwieSFGrVin4DzrQ9o8ku9PjtubcynXQGiGFkgnRDKDuBP",
  "key4": "5tjw6ZBHGCSj5uHpnsStKHanLwH6k4ZeYoC2KvS5CKyWtkiH3QkuvGAmvC4sKnh23EXJwdthKWXk5rD4BL9TNeXC",
  "key5": "3P1jobYaMLCmYoCWPWDZyUumMMjt84Uk6P1bXdzP6d8zoeJaMQVpe8UGLAKFcjiCvoMVtJ5AA79cpNoBTUFznFyn",
  "key6": "eSCdAmxdBiSsSGty5cqWjnaqgzbBMVFsyejykb186mRHAYsafUXr6W7PtU6G12i9ZCzcBi1H6tC9E7Q2SLdxuWN",
  "key7": "iLCcENvvDDD6RwD4CmWS9p1tjTPsj5f63oGh8bGYed5wYnVJo6aP6UDuDuDpu889NRYzTeAkZUgMHpj1d6vaJx6",
  "key8": "nG8t9hTVvYoEsN2Zmd1FvGD4FhCaDPKWhDCGsMqoacGce7QkfDdsXUcGE8Z9QVmjEajh8nn6nRENksDW2VbsmUJ",
  "key9": "3d4fPfgiebZUCYxqVMC8FFzFCr8E28Z15hB1bsUZK2UqSF55YXuDEZjhgV6fFZ1MPiJ6KV3KGAHE3QcfbUjAwsZt",
  "key10": "3Rzv9nXYJ7efneGQFELEiU9p57Lmv6wn9wJxHK9kkigBzqJXxKsKk8iivJUfBh7HayehTAAu9F54wxMcby362EXj",
  "key11": "gWh8jp1tPzH5s2PG6gj8Ni9owMTJpnqyi65FB8sXa5KJwyTDJgPP9mfkZvCegZiZAgKbERDyxqmunx81dcmKEPU",
  "key12": "31TbK9rFHFdVdaAHtcr1n2hGbCAGsFpHt5FmDDWreG3kM9EM6rkBGuVUFfxxucY36yaVatRuQqdgjfaanJT9ja3h",
  "key13": "3TKWZLPPpqEpRTyXTxWNxnNdekVD8HNSDCwB5gpTXnkUTo9nz6VQsKWyv6sDzBU3dcavgi56xvXnEHXzqoYbLuUB",
  "key14": "5NhndXVJQptr3EyJXwyaK7wp1Q2uEqMHnixMZY3JJjgtXygfaLsK2U2fUZpbrZbeqFFspxtqYY8xBJ9jSLJi2uMR",
  "key15": "4c8gbY4CgEbv4NYwbFGD5WNLx1uYVzoUsmq41RiR6suE1NJsSzTTzBrArQ2xrgj2HdoQbKdRoVtkojsr4QYmBFG4",
  "key16": "48FPc6XDuVHDekyv5A5sAoSBeySZxvHC6aWHFpMSVkcMNW4rWqUdx2EHk2DDjuXuULfuou2ohbFAuMaR49D9isJM",
  "key17": "4WCQQmkLogK4z9jbfxbHmnhhWBqaLyJ8moDh9BWjdzQoKKBqCtFdJoE1DVMmxJjEWtdhZBjGm78zSKt2KZfkqy1G",
  "key18": "4p5jTmZsLPpTikYF6BCYbZoBgVmcrHSdoKR1UYgEHDXtCe7FcEwbVP6DwBX3TwPMDkkXzBPoK5qiSFC4PEZCXSQW",
  "key19": "T4pdj9tcRWBoTpUSBNSKw5VVkYgzqj6NFMxKdGAzoT2DXLXu83KshAsejhFwx5PfatHr8eY7CfsnvEcgqantqiC",
  "key20": "5efyEdNdHB5UB6LgCihyLG9ERpJ11AMLQyD3FtjxVCBPMpQDEYjoWH2uYKnVW4yoiLQ4uufnoEzhv6CYX9fW6u1m",
  "key21": "65CakgJGhBFJ1rGduewdmnezBKqGiZUPhKsBagUjArQzDiWqbumtMjMjCfa6ZM6PWTzZGNZVW6Dy6rbqoxQ5Ld4b",
  "key22": "5J5WTQYD2RgnqAkuwoyEYb8hMtVdDFL8hKL3H5ese8rfjqCY56PB1WEGpb7tVTZdmSbBMCLS9UaPzMktF2DtXAdo",
  "key23": "2997ARPKBmGnpryzqj5b6FHkh71nLJnNf1KDrMcji7UsUXrbXjtvZDUuTRGekze4yZ4MUPU9AuGDzLSaXVgtuSZ3",
  "key24": "67DYgtC1TifHFVHYDkdQMxc99vKnG2vRCaaMM9hY98dTJddR8RgWKEZuMw9VxmLhoS4zR22UFQ5bQ7PRUJDDJ4bc",
  "key25": "5sj5uirUWP7Qpe81RSXJB1Q8zGf4y73c5s3xEuK56qdXbmR58so84KkWnr4ouNKAsPXr4ps7FhRCkuPHnpyMqgDQ",
  "key26": "aghu3gtZHZFrxSKvMzpGk4MdK25YGH9iia4cUKgF2428eCcseo9FHnHTL4ryumPFy9YxgnKWx8vTpfNZ36Erq6S",
  "key27": "5Vg9RHQ6Tk1A8FTHL6UbD8dQx6YDKLf2SdC3J4RfxCSr7gKBH7TRUg4CUAo3H8oohJW3VpR3BL88DFdbzbXmGVY4",
  "key28": "4xBmzPLKmJeK7QriRowjHCMYvf2r1MfBM6vaRqrVYtYpRyLRWfcNtc5RCtjnpPaTqj8k8hL9yopdYZLi7mAfL8JW",
  "key29": "5kzx3ipkgF4ptxKTHDEnpsJAJVg4Gv8kJm7CxwWjpSEXN7LTSuGhmeLNpEN1e62Mo2pcgkWr85m4pp8LHHeHtZ4h",
  "key30": "3SBVqRfJZFzv3fBAwPXgf1C1nBHkkkAwHvavUX7mkoBWJ9cK6WZtA44jpStWM8DvdwRVWoAQVszaHuFqbiJtQ1Sa",
  "key31": "47DShx76gVqGWEgbnCa1kE9T23k7kqqrWwNm1s69QyP7RPwpzckt8a2xbSkRPnc9K1JUnxHPN2R3pjE3nSyfkTKQ",
  "key32": "4B4sX9AzDewxHeYGdXmvuKrMJD8cMm58ZTizavrTLH6qXzVGY95cF15QsfM5drEE7Lrpm4x8a3HnrAhCzhaYLLwh",
  "key33": "5URE8uPQYFPGXBKQuz7kWpa1Zy3vAg2cn8VmYQKAfghA24278gfxDPJMKiyotn4bnsE4BLkYwGaAbgmTfHDkkJWZ",
  "key34": "21vCWG1uFqADiv342YK9P7RBkgaxuDrRmiK77TnJzx1kjLAbrSznNbhMH8ifEWqqeN1J9nkxMmd9GKt94yuqEzTx",
  "key35": "4qmaCU8uuQiThAjSfu6u52uxjJEUXCCaJEZHaZdw7wuKey7F44js153JNuJUHStGJU7DnCvddoEShtkR6iHzoq6z",
  "key36": "3p9umvdLD6sPYTyeQiUTKG9K4fWeNMqps2EmvVUyYHBKnRnkWSNZjERHTCF4i9dcQpN4VwcNiKpa6AC6tMpRa1zQ",
  "key37": "4op4EUFRAGEo2nRjLG1YeMfYvM5h3GALtijzF35tYs8mVLXs1oGftRie2BwaSam8r6qGg1E7LvKyNVZXky6BFgim",
  "key38": "5VxapSH88sTMD6SBXAcwbXAGhVh7iiGf39VEvYac8c9Tg8A48rDv1d6XVC6pCTsqRCkBCsbhPRyWBNpz9WCqvbzh",
  "key39": "2zRBw1d1bhdpakqoKWgwvti7n5zFtGAVjewsoUeF3LjAESr3HaWEbidoeYizgwnFwCKVVWn6DgPxHKhmHLy6Vdst",
  "key40": "2NW9xitfTKNg9ivfGr3c4eByYmCJrUXtvt9ZsLAbkZP7UJ6JYCu3Q7SGYd6nNeGNAMusdA4o1WCRZs9fjxuNGVzZ",
  "key41": "43eMpqxMKBA3qn5EY7s5eaeHi55Ree4oGTcQr5ieUSxQNuNnyVPL6BaPXsLYZ4Yu87iitd227ifU2jwd5iQQ9RZG",
  "key42": "3dPViFojqAgfr5Yv3kN4nvh1TsmyjDPkGkNvMFbvtod1cmhz2YzQjJyeDurfiPTmidvizWKNqPC9Wqg436pt1jQK",
  "key43": "65yJnB9Bmn8PgJKrW8XoL51j8h13dQjwmFu6FuGrJYhAwc8UxxCqngxY26mQiuHfbYzfVMJsqVjWu8oSYEA7N799",
  "key44": "35kJm2Qn1idxXLT3duJGeUNEBYZVDqZ8vo1DdQa3JmXDu8a9nEP4q3NaVXt7A46APE8MGAyvXAj34ooj78MPoN9n",
  "key45": "xXpfay8DwDZBKiASgJLUZzLYCZZ5Ba6QDgudXbzdGxx8VPwcwRVZLv1zkE4iYQHL6D2PCQ6Ne7njBSx2z8WkmAe",
  "key46": "4SdyNCtttrkEgFpQHcdT8e7E8gKfWYgGj9ovX4hxsi9tVRzoiF2uUJnMAUWmjwSG5jErYw5G2LWp2D8ck1QveboE",
  "key47": "635VbimufbUHkLayFvzxxJGoJY4mrXbynHGLDtcKqqM1C9kRRdSRb875JF2pmN8xp2dLwrQyCAhE4ECKGwK3A9DF",
  "key48": "5attEPvoMuUXdgTRCQgQ1BXzHKJM3CAAKU5oAYyY92WpMoD1E1Wsfdgfb2fCU3K46JCfANeeeZPk1QURTjdXMq8V",
  "key49": "5CcDXgYuyz1b9UymHUhQJ5taoganeULAV22AdC7RGJTmeiEvv1bTZuqu6yETjFKdiTA8SmDfBk5Nnh5gjvaDNiRM"
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
