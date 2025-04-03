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
    "5zkpydRzfKH9EH2vL6DGaJXYR4VfNCsHpGUBDCDFUm6Je9fMWQprn9MM6dBSfLbm8XN3D4Gwg8s5gsL3Uy9ceCPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dTRiNbU12rTWed98DatmchyRDBmQsj9N4B7gUcDRwx8ANmdFVJbqYUyQmAkiQh92PDytxG2cEqZEaHFd58TZo3B",
  "key1": "3mPX1cWxokzV41HMymPNdtksLGZ7ZhBw3NJDs6T3EgMxqVsoQ351wJ1GjuSwKRcmoiFktu5x1xfF4e6EusLchtN",
  "key2": "4pky12pH2ymaqtuL3rDZGQEyRh81rhmKCW1si8Dpt2zgH4zXMnzGFS2B8TeaF8NXeWyacwtYVKASt5DW1QewjW5Z",
  "key3": "3GZZQp6NxHbFy4R1ZXuzUyoXGKUHpy3X9GBvut4BjGG4JAJs2WQqqMvob5uuAJfzd8L5tDuXsH4SCV6cud9Xd5yB",
  "key4": "4Ko1Gy4fZ5X6L3F3zDtSwaVeh2xFExGYd3A5AR4mVPSVWEwMZtdxgftervHP7KJWWgmtua22nFV2snL72EowETwA",
  "key5": "5He7dQ1q48VD4hLFMNf6iQeVEUBU8wc13GcJpfFGURzRVBXc8FjFpJn7BcgFgjhQSLD1GWogA4KiGVQBtVyPws5i",
  "key6": "2rbAuiFcwwSnkWkvRGLDQK4suzQRmPbjv2LFgosC6MEUypFw7KBPjHzVPVGAbkUvEvaHY3PUfDQSyqj83aWZD3mq",
  "key7": "gs4Krm7JWMsy65w6Ld2dEhU9kK4LRpVd6baGQD25DwFfFLs5bjyxfm9ySBf6BA2LWhpf1g2J7Y8yad6QJswHq9J",
  "key8": "2hejjqF9EBK5teCVJvYa1dug273yBUohrKXruMYvuEa3UAt24KZHhcwrGDJBukjPRFToMAQwJsDGGU4S7YnVYvKJ",
  "key9": "dh3mGCqmvUEfzzJYEukEnEgFLyYfWwV7M5qCs1K7BniV5g8YS4wVSLtbYzseT5FKH6UVr5Vaec9LwkjnWfSr15M",
  "key10": "hKi5NyBBFbzbFiDJojhCPYEbqJt8z5n93ibz35e8YeC7Fy8fmQsbCEw4wvqh3aCBMJE4mdvaHFoiJ6whiCtqB3v",
  "key11": "84KUV4xqMhAGpRWRNvREJhG9tmWWsuHW3uSJHZxyD7WJZdB6GWCcraNiKNxQLYybR5nZiXvXPw9BxSJLHquWiR2",
  "key12": "encTkuXp1fN2DZE6y19HgLpbwswvFQrz2qg8WztSrp9wV8VTcxJPzMAaSZGXEgiGuqhU2dXR2t5omqLarXcyz4Y",
  "key13": "5XMKxxLH43gjAG149QjhRmKWuSo4B6671B9ifg545762sPP4GcmD54ZwCCS4RWv9GTs26cKKuqyj5pmfHV45KMWX",
  "key14": "2oR24xLnywXZdw8KzGSfLUE3suf133HP5qqA3i7jkZP1ZtaWjq1EDCUWf5xKRR4UvMso9xdUwm576GJBk7rckDxm",
  "key15": "59WT3dUTPcxTWTqfB5C5a4dQrycj7jc7deeeUJaD99D9d5zf9JubJsMpZKfMGiGeEu8jcqQxYYnVmBmf7M7VfgrM",
  "key16": "26mQA1gZXgTEDxAqEpRTA1DYng4xQKSdNujZD4WcoiTxnUDQCHyaCco5aJnu5YSpisGBbigvkBEs639QneRbnkj4",
  "key17": "2uUfnbkiq2rfmiBt7wHfmYRLctYP9Nb5vf2XDkGdBxtknbjxU1GAAzZfqfWeUUsktYxP2gZMSQWC4KtTaGvPNtUL",
  "key18": "JSFcoLFRou64TTAY71miKP4qFsmvc2ch46NsBjURqiEazEhriZb7R4LWckfmscqkq6ZqG4oYhkz2aguPyt9M6ud",
  "key19": "65c2ChVx1JkJ2QAyK3mcT4DvZgJJVPbcSTQfeSG9CaPvavqKDMh2NMHY2r5MxGb5KaMLfYaYHMFdk2rN4HFUYpGZ",
  "key20": "2ot383wymwhkfYqzR5rYCYgjeebe8khg5oDkVcdwMGYfZ5pcyaqBNkAMzTyKg3WWWgh7duzYqh8HZfzxFdZxHzyz",
  "key21": "jGWahxZJTXvXVWczwdWw53LZXoMy9D9126rtUkoKgycyswyF3CsJMTpFF35VHC4699exZbWhRyc3979jRr2jT2S",
  "key22": "o6gLeRPjD6J8zmnMVTnxD1DNZa13y153atkHb6Kv4HseY7tH8MNqfn1ZZWRfwhByCoSSrq8fTkV7GKAvY7pyf5g",
  "key23": "5r2dVfFFas8ZESfLyqfW71BnRkZhdwtSBsb3xhqLEgkxbymVb1xV1TfJUn1fwd9jw5u23ZHqfj2HprYVcbV9SoDm",
  "key24": "JqkchFr7zVHCLpYetp4UPST6t62GowZ62E1djuHsn7n5hDfA6cwwHg27EA9jwbsAcTaK1RTRNCduJ9QrYHJyZof",
  "key25": "5dDG9hBnHHj7e9VZZs67Z1LHyFHJU7Wcj5DhvFZMvQXtXVYsZVBi7QsGTcxPy7XdVC76eHdbZeztY7XUM9zhTw4P",
  "key26": "RHaDbrQA893t31eBE3pgnKedynwdXAL138YJP1rxWmohGnduUA7TTwGDYobmpZQuY4M12ptwK8uNDXibyFbSScM",
  "key27": "2835efh3mutNCeXycEzAREM382WV4WTdaeeKSDi68u7pZXfvGNhZdN3ERcu3nZUPyb2QXUP2tjCYZPkmZNPTEzVq",
  "key28": "2QxMsiKCfmPgek4QGaUACB2Dokmi6L44cw4F3WLJMRWuido66cuBW3MvitVmVWhtQw3KtERv5cvKcMc8wriftSYE",
  "key29": "5LDDusgtAW6fxhVL9yvaAxxrEc1dG3z2Do6v8Kw8v31mM3kguBqDZhjgXe59HShrRMHy8DhSy3BxFXVvUTnZKS7A",
  "key30": "4MGd5ZtmJzoVYRyg9RtXeerJBBcMUVUBmu6Nw5nVB5aJcwpNGrAqrxF3H5P4SkxxzE8tZ8QFewQdBHzSW2BHrwNh",
  "key31": "4y9mpKTE1cC9Coxnh4G32nFcgqAbYnLhhAHGEkKnowKNwGTZQ2aSzVG2aez67fLZNoA4nGXiiAVSoDq8aNcXtth"
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
