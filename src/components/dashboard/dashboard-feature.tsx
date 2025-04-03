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
    "4yVpF1iPAmtQJRoZVmRkadNLaskiDzJhsUB8ik9npTaqQc4hQsSWuTzVVgGT6uNkdZLn1t7JkimfVawCWurNzsu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479e7yGfZkYQH1o9eKGeHbErgzTEVauD2TXGq3qMm2agTyjoNEnCQ6NeFLTZZf1nQ7en58nfY5oyg1qWx69rQBCt",
  "key1": "bvmw5cLuanLjNQpbiP8zahBH9cyDTYmYS7jUeYkAuPJ4cFqUF5JJ3vjMdheKryrVW9zYvAX7NVTKJ5jEungRvLV",
  "key2": "4zX2FEyNNrRrK6obNycYoVe1GsDtKwYvxPPAnGTmN7p8zu1FBY5KvvtV2R8PxByFvBVuwCmnJhy2K9TG1Yv31Pke",
  "key3": "5QHWd65gQQqVu1dc87Yiv1KwfsqpNgVuE7kEfL2qB9BNnK32sNVMUJM4gBrZFDjHY3HcbhG9TLhMcGCQ3d3B25Qy",
  "key4": "87pmWR1tukYTjkrAJMmeLhMtxNkqvzsnewP7Mrk8JNBpJZftr75d2ZTt9UEMMz6VZjWyTNH2tnZh22DaKLHVT6h",
  "key5": "STvRE6VgndcXoc4f2yPXYKZp6j8uZVNEk6ZD96Bw5MvDnHq4dTRavGuhzHMERtumwaSuzfAFmQLuDA2Q57Ndang",
  "key6": "dBFk3TgjKqix3b3YXPKs12JQecqNrTETimmwTKGQrneNs9vzyNFtzWAZBKv4AT7KVg34qnpEgMEVZozGm6nfhZS",
  "key7": "2a1H9LMDKxZ32n2RfyD7NkekqBGHs9p4tL7GdNip5JCRtzAEyYy4aUHvDYJsYRxhKiKxfgfxjz6E4vztUgp1No9e",
  "key8": "3cAyauMaJ1ZZwcN6TSidftDRmaVu68bZFHfq8WVsj668SDefqJZVkD4PACEE5GRW8XhNzAi4SiCRa2TXzZPVAjbZ",
  "key9": "3GSrS2aaVU3EJtjXuiparCv3ux6rEUV8nLevBf6e51tsv3Jsm3Q45Tsny8kVUUBnAbopK9gDyKmGqUay553Qg6fP",
  "key10": "3m7FsHd14wqvRC6dCsRSt9TGAy4vDmAYRq9Syt9BpZT9Pf4Lmn19DHB2vX5byLwYZ5XP3qQh3ENjn2yG8N9x41MW",
  "key11": "7sWgNB5Q13K4HVQGz933z9nd9LZQcbNt3HerWEH1KFmaQWtF2B233CQdz9eW3aWchzHTRJo3eLfrYKjh21tjkuT",
  "key12": "3rgtTCFUjxMypRfjdZhiN2YzeA97JDKtuufi21SmUD6CPn3pFAAS3UZiuT4ehesZT5ffeNJsw62TcQ8YaNzrAxc7",
  "key13": "5gWXZNKhLBiKZkykNu2dDM4b8gQkwe1VRJytofrdEZFRMVCyYwXWS7iWUqELjjMUMzzecyL2c2N8Un9saTXWYHeU",
  "key14": "3ouejf4HkJTbT5k7pf3XWnPMWSvGfNyLAy4hUAaGzyNcoPG9ZEYMLyCiheFYWs7nTEwfNp7oU6RtHhBcVDWPj9UP",
  "key15": "4owr1wJfJhamPehX7RXmMFPrgBfKiLkZcd3ssdZrm8uBRhkQ6at5SJ5U8qBBqxhLQU9p2ZAoCtAmotfbyhhoLE3j",
  "key16": "trodpqFjk4KEEEoJemZo8NjwuhFHeUjdXwxeSZsVrfGrAZtm7HoZ2bjni1btbJzKKWyBj2XqoUKu2vUwJdig5eo",
  "key17": "5KLbRePrcoNG4QmqgQHRgQ9HJtzSU8mFZFkvg9iPiU3q6SsFpdB3EDMHYgukae4rujNNaAoCLyxM3MGcNxLC4NJR",
  "key18": "5qY2GSfqdTSLr4t1xQHumWULfLD4ZvJ4a9qwdWa73KuhnXAP9J9d1RbxPZa2k12KZYoqAQgy8bDkGWhxAtyy1E7Q",
  "key19": "Xi21PpKW6mQZgVoyc7SixXaWypzqA7S6r4q57Zd7C9Nwyu6E6BCdnizptGXkSWBtEnqFiKyQc6v44XhRZNQ8czv",
  "key20": "4ZrqFqhRUp8SaFD9TsFV3ExHTB5pKGmiRt37TqPEqK48J3fcUfdDqxwzbwfEe5d5ji9rbekEE2Eebs8y29hNJrSj",
  "key21": "SfAAwAJYWmKiF1dMR1tedTz6mPrQL1H4EAzFJecTHDp26HUr7FnU2dzAVJ59Y1SAXKFwAGENXyiGcvgBPLfRZtz",
  "key22": "5LhFab34B75ev9qd56MzobG4Qc798KF9Gme4CxcCsNFPkUsq3Cc8j7SgnXi4Ct8DsgyrHj4bRhvty49Pud7jKdZ9",
  "key23": "48evZ9CbffGwnJ7LmGqLWDSXpQB78U5NF1ZNeVXqQ5mdQ1TWYuChcxSBiUpNbyx1jpR2mpR9t3BSkge2ec7Fdc9g",
  "key24": "3BPe9Yao5jd7E9p6FuH3DvbdoMg9abgoDyPmmdBXJcFo8D51UEXt1MKfzGv4sGbSEcP52oZJePJJUE8MKwXikh9r",
  "key25": "2MmMHZjM3YqPcEz71uh6VZtYzQVjBQrhdRz1CnAuyJfTf4CYC1nLxxvkZCm5i7FDDMJpVeBqhDLisWRL8pxH3Xbo",
  "key26": "4en3cXEmqRyqdREDFZ34t1Mdwr14VKUwG12qkrR2xdAknTT8ZHW4ophERHCScozaYhZty6RawRTD1j7cf2CC2nEZ",
  "key27": "445PFgiUnyuzziT11GSvc9TeW64ynCRKhFKBuaCWyvqzkmUoTLJDqc7CAbnXtH5Mt1GRnWDBaKNENsC8YUrN4VYV",
  "key28": "x8FKc6pGKqojkGxhoZd31DqycssU8an9ob1e3HQf1nPcUAdMvqFsiHSeMRenHxkiCeeB2SzSMHFzWncPt5v2iTQ",
  "key29": "5FBWzk4NdFBVrVqrqaCH5rbwi7NApUv2TVcsLpo1st1NjKsTRf2nErPbBKhJnpb5EkD4Gj21tvH1DN9cituyjQX6",
  "key30": "58o9ZeDdPLn42LBFU1aD89Qtfu6x9PDy1UdiF5CgkRhsajvXP1TVxEdn3qwujz3euFuvZUDtYxr2z8nu4Qvn7hWH",
  "key31": "2STJfnPRrcttqq9vBCdrquVUjXGdg61LVdFRrbM5GCx3TzALjZLzmGvhkJex7d6tea384MHjYnaaKWiAkH7s11Ko",
  "key32": "4iozVQZzudQrF1BjeuLFFzdxogerq3G38MvstPTQ2DK1i7c13sn6TTBM3A1AVU6VE9VQceKsnsaR5GMLJ48t9quZ",
  "key33": "54YReonq5L9WEkKwE76F2qfSYKjBFZEHQj3dEpJPJXXkwJhop2wjTQebVgDiN46VjR2Nfp8tZxkZywjFNj1kQQc4",
  "key34": "ZkwUpXWMDgiShGK4WC6MurWS4dgUuBDzr1AUonPApEDtFMP2KtBMB1FRuqTDz7LbCrkZVbhGU3zGbs4wK5YCjKr",
  "key35": "5441qfXd5cnTdkVYsR8CMfpcFb3r2GQVDKXAZfp1aX8GT6d8VtkU44doxtEpZzQRdePtVVc4bim5crfnAYTCaofo",
  "key36": "KJWDhAnmRSE9eQdJGwNCykGTQriFF3BtKtmQ5BDcWY63f8qmBdwCYQQkpRHQ4FQme8kZ3TKH8bQqAWQDyYkwHEK",
  "key37": "4YqSD5Zey6vPe1ojdk7fqcVW76E1Pwjw8KG62kjM3CJZ2iju2egQXCVhgYqBJ1nZ67KvwwmzRWdW73qidPTHUvVR",
  "key38": "47QDiX2wxcyPqrai73Bg1CnVDUPnBMP4rwwCLLVnn8tpGvzXviSScCjrzLYKowKjguYD9vwB83ZSnD9RHGeF72BG",
  "key39": "2NEAVrwBXWA3w8jFNKd55N4QrPwC4tEkve5r2onTczViNhwMgSyCcHPqSg9aRh2fkyXztm6xqsBLbvyoL9zXp67G",
  "key40": "5sd6RKqqUeLHL45ZKE3Ekvyyy4GX7Xk6GTBmZm7yhLm4Ja6im1oS9srpBvh6JofFuEBxpZCmRMxkzYNmgmQGDrsF",
  "key41": "4AZeKMEN49CPQ84hhLQ7qXfSTbXjQSHcMwqKmtCMqYsHNguzAYkDAu6wmjjyeNTrVNxTZ7MP6r9EPAW1gm3qB5aV"
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
