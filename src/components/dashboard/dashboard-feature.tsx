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
    "o7AydeSCma7AmQdFXTdmf8xanmZrNMKy3KVihdVWwq2LhW1UMhbTQ6tocmo1wckAwNKxRo8JpTjWpkrxAYxTWMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNAH9k3kGExxQdgwgGCaxJ9o2nWjhG78fEaibkG4cGftkESYYGkkGVpQiQ2M9NpbNg5qZLu5uuknYgcnf2X536m",
  "key1": "26bykfBAAuxASqFVeBpcnyShhhgd1Z67kej4ZHVUdrot5QgFsi3zz65nkNdpMz55bAfiXGbRht7WvKmek1rptUyP",
  "key2": "3pyRPbQKB9zciiQAJLY9Wy3x8FusjxnAYXQoaHNHNujqFA4Q1AGEykBR9xqhk3SDhc2Bb9h6uL9LfCWctjVevdct",
  "key3": "5CBN4NcVe4EbGzX2BNPs88deuUKHc8cEkbeZUhrnioaWsXi53BRW5pEZXa9Zkj79iwU3RNpR4ggH4d7hoZCXb8xc",
  "key4": "4iBpzvJDA4PtmnM9qhZF7wa4ewRHtag5ZrraE1Grat9K3KQ6Tp3fPEt7kkpF9soKC4GSHdedcFwL2HvjXASnVxPP",
  "key5": "2RVwxWgfMhnjje4vakCN2DxfCPZvkrdWyiLaGrnh5xTo8zrL7qxFDdnJ2HUXu1VwAjR2YGBJeycz37QVf6whVhah",
  "key6": "Ah8EYQf2ijc9H6XvNoGxmCXzXtLoRJDcEJiHQek5VUe4DCGhVf8N7MvUdmLHFCgeYcrY91PDn94XiXAqYKhU5NB",
  "key7": "3YLKQtopwgwweJF9WWp93MDQLwrUPdgHNMtxSzxt5SpFifMWqZkt84BttDqMitk1XGpwgnLeCuTKf4UzjZPCuvez",
  "key8": "mpJx311ej96iHx7ML9AHRVGvBG1CLwHJj6A3HLQtTWWrLnKC35FnCwGSonNuwcR2cp3goetRasQeg2cBAoYKNox",
  "key9": "4n7m7nPqPEowoZpVoQTZPDWfYqDru3e3poPF4kW75e8JKutLXevGNE1bMEoLYuc8cEhBkTZYpAGF62BVixzWm6gh",
  "key10": "4KphASN5s9P1jdD6Txc2aJn7CmsorF7iengM75qoA5ujhszFVqdRAxcppTEbGCRHZte1kuPRkJyozEZwEqZ3Zh8D",
  "key11": "RFoQsqP8rBe31nYX19jFqPyqqYisqD4d8LHke9w8jSDzhQufgzC3USBpoUZqjwKZjZM4zcZXsMXVdMBqCYpCtGr",
  "key12": "59mFzCrJk8eydPZdANbYQHpkmGxaz4oGKWXXxruhmWrwu21hL4sHTxwQekzVjKhp3dFQScLmV7t51A6jAxUDtCLE",
  "key13": "32toLF81gVsVqys6bVmcJK1LXTWDfvkcrGVyMx11eYv86EidL7gkPoCRPx5TDVh6URwYb2M91Ydvyd4ryrSWAidx",
  "key14": "5uRJ3cHMCXiHYVXWmydmQ1R2gjZAxmsNmWPeeHsV7DuYvkvT1cR5DegHyBuu3L51GKKbKNhqwbSMXcimwAuaQwZY",
  "key15": "42RhLkV4ztRXo9hAQCRJSGDT244am7EyssT1a1MrE6FWqv8u948hjvkvuxXAAHHnHEDbtbfcwnVQYfJTA5xg1Hcs",
  "key16": "4SaZv11UWwNz9kuqpaHTE6veSUiH9i5Zx7AXhjvPfUJafiTQQP2uuXTyfCfhgpNxjQy3dMvuAuq1Y1uFSb7eGWad",
  "key17": "3pMGpWTJJjbgDDxUMXGEuQgkoL4J4bvJShyP1NZ8XnqpmhQDy9ZsZvdURWJYEv4ZVb34FJ4GD4yiJAzVoQpQX681",
  "key18": "erNi7rGpgwMAjyn7uwT9b8tdzY3HHpTeQfJDLUmhAqyku2ePMqD9LWYt3kRc74JK6gXYg2S2y4GRAeMChXcGWNH",
  "key19": "4Gm7ujeNJMCPLhSMRxvnDLfCXHT7gajdChkYTzVrgsZU6mQd9av12Vu63PaZNNHBQP8NWPwB2gwBXf4cKztnS7jw",
  "key20": "3C1hXjXkHfqRerfxpaupcTzKLWCAQb2NVDqA5TvY8xGykmwVD3TaYHEA68RaDZTnWuLAmxUgGahQvpwfcpTnW8fE",
  "key21": "5vLGav1ju5HkuMxAvEgD1cMKrjPN8RskHqYrvJQpMRrAs4C883LTqhbcd74fKk9whhV5xVczJgRFHWLbxU4ooWjF",
  "key22": "ovgVY46ZnrwLDX2AJcrfMRyM2TdvLV7QnXvbc1gACiWJK1GkDtzX5wb5XBDpbjcmvrBXRd6G6WZRpHDJrSLvy1x",
  "key23": "cY26kiTgNuy1j3XCqL4WQ3gKe23FDvKmeRMs9DAcLYhS93Li8GihGnvoZpVYkdghzzkhNHeZe79mg7kg65L612N",
  "key24": "3BsHbKkyLmiRdySApELcGpA927HAkYdkvcZ2kn7YECQENeEKxFjnR7VGy3DCqQPiMcNTypL6P7BZNMQiHGHzGjuL",
  "key25": "5FxJZ9Ctpy7YvbYwgFJDaZK8jdFB7KH3iiq8NgPswgt5aF1rDTTM1PxqTYs5c8no5M5PYysF9a4jUrnnSvYs5VSQ",
  "key26": "3bh4yEcvTWGTX784Q3KRSfYCgAPgikqKjTy6cVf25xrPkEiGKJZpXnJVAaxCjE7pgvfmd2n73FBpaPwYXYg9QsU6",
  "key27": "3JgCMFjRt6fujgoTSZSkkx4ELWpzwRoh6pRTBDQFLSexE4V3oi59U4yf9r6BnnptduHhpsHWtiVKSdCDUkikCy4L",
  "key28": "MFCjC9nJUAMChX9tDW5dA8bfCzHoZHuiCYkTEVWrDDGimCciCQKFyWe89xQfodivxEC31VLa5ErCtakzZa17oCL",
  "key29": "duJubuJnhw7egQtThcaJuFXQy2AfPkQsWiGwrgXFYGr5hmiCd5RWiUY1Z4CX9fjzH6wtzm5HPhtKnaTWNnS5qeS",
  "key30": "4ApCwF6AzsJiohjCg8Eh6S2MeovmKT8KJMNBLsBUPeE3xmW2we7Q4FeMmCfpSLhB7EVMZhDJWHgPN5PR5KMFW26c",
  "key31": "4m382RSDKkSdGRGHqTExm4Br4yBjuNcKMuDxbh9XQgSVTQQP86ZYaLf2z5MuBY2GvHhYmzMJAkjZq5hztLQt2y3W",
  "key32": "5p5tVrygtNNRToJ252aYqTKrnoZDPWs22o3qyK3MFx1GtEKmMKuFHnGvCtGTq4BUKby3joTVbPdHELeEt3Gi8Xaz",
  "key33": "2c8hQzhHq1K5sfMcN4mVrWxmPNywr5ppA2nreMQA2EvjKF3jhyXcs6dMnxCGGbhJKrxnHysnvJEirvKQtiFgUSdH",
  "key34": "gZpPbXTkNLQDFDJ2aNQDS7Y95DxtmXf8eygo57d3BG2KGzj1Qqu6tLHHYw883Bop4JmJwbMXicqZ74vmZxSzXvm",
  "key35": "4DmMsNh2DHBbAUwXniEr8sVrky5qxcRuPxTzenmh2nBMP65295ZVik12TyvY79a5ZWSSkbxp61TaUd8vsDTt2QJs",
  "key36": "kvANYDNfeu7QP4RqUX7tbBqpcn8gpFmtHYYwoAjx8WuzjGefBdU1yWzwf2cxkdZqycWPAPXC4eioywgjUpWipZz",
  "key37": "3QZF3AddBamYb6pjZmpYG22BHwJiq7yQdNkwW9DdPQEpD2zE9nLPrstcribybAdiBBPfHH2fSQSQ5Jbymm1MEtqE",
  "key38": "23W5cVbp1kBAEK3zwPdexTZEB8NrVwSMT3Z9qgFEhvg7Uiq3DbG7XFPYxgG1FgAYSfxBP87DPdSt6NzueZ9cgMSy",
  "key39": "gQTMAR1BZNq1h7Et3HgorwEzwxUuvwxEzmYAp9CasAzFbJ5HuiPGMTWd8QH9KZUEmNd5t4Bva6uY8XFnYUoWFtR",
  "key40": "5tvT9PMzs1fDmRH6d2tBEnZ1hkXdzvPTqa3tKkMrG1dM6RMMgcuiaBr4XvaJBBb2Pu3vCoq2yRdtGjL3VGMyqHfh",
  "key41": "4Qm31wtLrWhiNQ2G2H2JJZGN2JuqLcgHTKg59dYYkVVUZ9QLPdGNrecQ2YgvYoVJEsEiwmPryJPgrvzeJLrDrgTd",
  "key42": "5WE6FM9c4XZZyXNHkoFXjRUitVPxYhwQ1Yq8rhPkS5p9TudAPqZo8cRy1C1FKPaRVD5h9tuxFr6k48n8Dw2nNfbe"
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
