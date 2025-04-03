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
    "2d8rzEWuzEBz5d6CYqHK9kWkt1fr2a1japD5DBcfAF8VW7vjVwHYhJYuTdjbjguQrBpm1s1RAiSn7PZvXLNZf2am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECBC5qYWCp1eqd4JiCpkqTkhYRoyDSykN3mPbB9rGTsscMTNC3VyLP91WTCoRVFdkj4YH1DAhfyYFX3DJTQFhNT",
  "key1": "4i984uNktbG5QtFG13FvnrZ8RRPr2bAfdaEri5KE4E49sKNZ8XRLnNoxVaweDMN7gBXzKZP2YfeCVD9gc7mgSJsQ",
  "key2": "5CFqdCRaPw5NJywizShxVWA5Wmdp73dPDbYfxc5jfNRjQ4eCQF3KCfSiT96JkKWRv2LecxrTHMnsKaErSY2qUPZh",
  "key3": "WixiEruosM7GYKmucNKna3mQorKb1xfnnL75RjrzpzGAtvzAh1CwhkrFrAbhpc2WddpxLTrxdMLwHpeJ78maSHH",
  "key4": "5CTtZjahikcg69NxzYcNcyXxkCptReYyZbE15kEXFr77KKXf9q3HMoNZBDwLaXUgFgMTeiaaWuks5aaxzuDrN7DJ",
  "key5": "5idbSM68tpEayNvzfMvjPodRkwjtkNAdxpWybqD1JbPFk2dCjUMnLrgeT8rwsZCpXx8feSemPYvHAEGGt2XcbfpT",
  "key6": "5jgcXg5kwBj37TacpQN8BZbkVCm7WasCsTNknVESBx2ECj9papizMSmEG1o51YQRnrKKSD9PrdRnU9PHXbueefR1",
  "key7": "2Qhmp1r61B9bbmHPFC3NX1WDArSrwc5jTQNtrMuVRYA1XQooPYa7rc28Ex7Uyc4eh9ytEcmAmspbFRe36PMaGCUr",
  "key8": "2Q4YCBNwZ6fGScuhKEjXA6mQznexbmZDGTH8aPsz7d3xxwncJhioaR2Ce1Spjf7z4TnGTkx6pJbEkqBy5Pjbgr12",
  "key9": "XpKeqwezfGr9ucTan2uNuAN5kkcZP26gT4NSZwjL9DFSG9sZjpf4MSS4xzQedDSKLUPGfKGCu8sc332fDBHRNKv",
  "key10": "3M7BkGTLL9LYZ53oPhDcp283ccGbBWoFxJa2asPyHQWXm3dw2soLrr8hXWDypf33qy3Ha3wNJdaRNahV18chAdVz",
  "key11": "3gsYeEEveoADcqeHDcfwrjnUfY8b6xrenrcUt6VSzapycuqWeuvwZ4YE5KV5nVU4HcVkpWUiz1ExsynnCnxWKnUj",
  "key12": "4iqzvdVUtPhmMwuGkK5aUjLkNQzWYafLoTsVfbaHhGLYPmWSrhwvUdrYZDp51Hncr2RzMcnf7yR8gjTWkhZTSNfh",
  "key13": "LgenY7wtWuVN8szbUA4yHLRfpXwW7zR4MX9pTELRvxpZh4tzPgzeW5NNjDLxKU3tvUdhBVD6LJzvhY6tbA4ZcZV",
  "key14": "3L93jfsf8SFjt3gVHQZoT8BiSnoAtp2a2wEGRBqzTyMoB8Uz3hDyd8uvkFJM2CS1UUCKEQym3F9SNZMBdUociMby",
  "key15": "39kBA3AKn28eEJWDb7xHuUpKhiTvV6nsaeD5K82mqVbCuboyQgtqW2kZ7YjhHbeQ7j4fyUq9ZX6nxGEjVKAbQGMi",
  "key16": "mHBKS6gFNg4uk6zep4gMVvoYdJVRWNUxPVtS1fdwDafsunbNnjZigeEn2tHXKcGBDz8LRUaFW3aYcRSh46pPLv7",
  "key17": "vo8SvB3GNsDvdQiVPdXrHJjwjHoiH72SUXXNw5CdmDBkuQkscbrQff3LPtKvjnrK158CfgRqs4pc3bJk51AXDjT",
  "key18": "4n6PQxRAgZSHaDSxeZCQwAzhvKgNy99j5YraBH5M4ezszgzxY4nZ5p3BoLWrm2ve8JiuXi9FBWgavw7r8qdNEdFd",
  "key19": "3jr9RhmWBYCNueenCZXu5LUAHiYgMzAeNUEox6PYSFU3Ri8f9LCYS11GpeTibwZXqZtnxGnKKkYj9B2ZJkA1Senf",
  "key20": "465w1DBBcaVid9gW1jxsBdcxxUM6gY77mG7fhdyYsuAAZm6YmYvjD7sBqZtckFbHqzSSvzCABbDVioZ6NkUA4GKs",
  "key21": "3cTNkNVpHz5mdH8CCrEJtLhB6T6bmj1Lvi1szqdekRZUbVmWuaJH6L22DVJCukrcdgeNAKF6c3k16KuR2x9JNjV3",
  "key22": "2F1AJXCv2qAZiVBakUWLB6k9YyqRgzLhoRQ3jaL76ViZhhNuZd63H93Vd7jPi4EzJp7KzK1p6FodX1yMXagQMMPb",
  "key23": "VhhXB141ShJAjLEW253SmkiBw217S9z4Rwf3ULRN5y2ui4j5Q9jepx2SEc3NKK8DQFy1mm7nDfXg11pgZLUwNf2",
  "key24": "2m9ACfFGZWaRRDVur6T8w1at6aHeYnJXocMJx61brErX4taDEhtBgAYpJnjcsB6mgtx4onXxgDm4KZUSW1W1RGFG",
  "key25": "5v5ajWVDDBXbtiRrRCHmSAsxEsroidz2GpZhZQMByvtUKzKU7794WXoVWFxCWuuQJMU9QPa5uDM8GSib8xPHHmn1",
  "key26": "2MMKupWP9xxyeWAyJgjRnprQmc1mh5APTp3VTTTovQPGtzTV2Vyk679MBe8SiNdu8rPsGEZ6A2sYAjhTBWYpLY4U",
  "key27": "5vzkwuwZVornYNYHAqDTGWJWgSjYJJSgEnzrB2VnaFvqtVtKchVqfs6pLLbm4Vkd55Nxsn79qroyz28KrBHiPpMH",
  "key28": "47MHyv5ZnJrdSFnt1gooRheGHynEmwX7uCmjEpDZk526bpb6MWdRgmthd5NV1rEzNfVU5du339gn6gxKsqe333an",
  "key29": "3iaZD5zgyAFnhuyg5hmpsChT8TTWyWSD1ZY3gS6v1nMHGWCCtQytE1WsngAVVQJheAHWttLh7mi5NnU928aew6V8",
  "key30": "5qxihuLy7xp1MVgnPHLbftjNkruGNqFJ4LxifCejZzrA5SSFC86A3xD3nLPWinfR3UPFPCPaTyhh8XmZpUsFxmhP",
  "key31": "os4xmargZmE9EiCmEB1dTTexjme4yFmnMP3icBjzUnWzYsqUzF4pGLHAEdBhxCB7iFejZQnX14rLNPu45WDbBkz",
  "key32": "5b88EWDsNiuqmgx4bompoJkcFKFfHhPRhMcYur6TUSNsA2eaAYJaBPHRro29V4JYLuhmdrwLz43ExjR2sqNEyXsa",
  "key33": "3WYbFfgqo6pd3FeDtJNA7akhTGz4HwqT4WyKM8fPbxvgcBkxUh1QrUZ29zBEqMnG1pM46JFvdjCW4CKzWese4xeY",
  "key34": "8G8bGJviGoXHSuEdUrtTYpxrESy2pcEbSG6inWpyKiuvtYvH6sMiDWNHybyn6XoZ94tVNSr8EPw3t18vWDjpEsy"
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
