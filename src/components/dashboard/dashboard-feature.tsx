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
    "2EhpFm2929iJChgdzssRT5gWNGCXQEXzzRQ8D5QRHxe8VZZTDMQWwCKz1j1QhxbP3247V9GQZQa98y8sefgjPkH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pwoGki6qkxhWQ1TrwYQL9DnH857znAtu5DLsqUpvDhvnPn6fRUSqZ9wVk659fNpJUzwV1aMTZHKpHv4Ludh8qqf",
  "key1": "2YfiHE9AhkQQxqjYgmmE3TA7BkYnwh7JN5nhU9HbhdZ88MvK9fhnpTpyGfJZhSnv3NEJ8NGVhbPBanbs9beyVq2E",
  "key2": "4ZCc3TKZqkfj6gQhEzDhNgWs35uExTC4XnLPCdekMpyeArXXyybPxQHusCAVDA7ppQprTighKFzSyHPcjxnvG7N6",
  "key3": "YQbJAp55MsengwzagRzbEDorc6GWBJimRS4UgQ26daGSVENrEB4cCjcwAyuBvkp7HzXSPLoqSR3m7337ZKG7uo9",
  "key4": "KshpyNuu8T5tkK3dQ3SVh849zH8zKEbEuxeA9wJJWDgaapSay9otXTyWtuc2wt7jrpV5z3SVy2XxkE6jEvFnt43",
  "key5": "MKeCUWQs9K9pCGvF7R32T5khmm6pYMxg9GoJuQimQugvF9eDr8VdWGEc62Hc4mgzvEjXedfgQGowVqenwM3Rzaf",
  "key6": "GtgUCQfXFTsh7rHdh1FJteYEshtgHsKGb6R8vuUr88FjEftFrF8kAnu2uVmxs2HUi3wg7DKgbWQjsXtH4QJPd2C",
  "key7": "5NuBjfmf6Ks3K1T5CQncf7iDtbSXucCxq2V6FJjehCT5GaTwEuTW8n6xhgC8r13bLUJ2gvCELdwCoravP9DPCYDL",
  "key8": "4WUBg1kfv9L4J4sidJv2Az76uxrmJMP1PVFf98L3NAzUsNjr1LxuvNXxJ1pwEJ57QnPrj9zuNBmnxvQi9j6feFvN",
  "key9": "37bc1JVX7KMugookZ8a6bd3ttekhfmzVJz6175YU8Gy74Tnq9g5jvfd5fHEqq7TXQetYDdUseVb7cXL92xQu1NUD",
  "key10": "5QPaaVK9hEcBVtUXNPhNZoZMJu1aRPseDyVBYxwHreUe8nXkFTPTRKuxWvD2awdkEC8Tgu31DrDYKWFM1ioAknmW",
  "key11": "3rby4Qx7hGmmfL3fd1g7x63ytC6Tid31U2ajkGvxHdpwhN2qCAWCrW4vf12SkTz1LXok1cDCk552CwT3vqkQQMxm",
  "key12": "5pV7uZtaFBtxTS8USJM9WAUeUsWjMoGXcnqrgcn2EXrWVueLpUCQebWyAYJD7sW3UhbFHeqcHmaxtuG4wD9HSiam",
  "key13": "3safU1Lez2svtfpM4JxeDyrLtKD4vgeVRTXiovdt9JqXcYrtSp7Pqk3TFmyRbjGGSLUhqnoyPDYBaX6718s2xiMS",
  "key14": "5Pk5HnRGgdnu1K8uncBaPongp2TLxJ1r1dB6ivhYb9bqQwkXYG1bLSvvn1p3o6F86SjAqCTM1joiWDRHQE4y19Jd",
  "key15": "3AkTyaxgfiJV5ywmHWjgRffvwapYoAVQ7xgejhxaMRrqDZ6J1ZDq5NVZTyWgpePPZKYXbPuJXxfRPzE15LVahQyw",
  "key16": "3g8T65SPJ1DwEMX3ZVH5E5LQKHxuh4Vs4bwnWEtzFnb2hXScRt5eynq6n9K2UaAQhytiavdDfNY2YCq6PdoUXTuc",
  "key17": "5NZ71uAXtbmdLYyF1JUnbfDfw8a11Fv2TxVTkuioScnqotxMLXsd2BLTRNRjn6LM1hWLNNy9x8WsEq2qvxFgPEac",
  "key18": "jDJeyGeqZfydAzWdkRq4RbWK2GfSTp2wC9Jw6fCZRKsJ6DN3avbM3i4vQuWMxM3Y5WBm7Fm9qGDLnDPZfhKzq1e",
  "key19": "3pTGnASxyEZdQGKpQgV9vjVDReANDGk69DnZNBC9LPLaVc6Vp1Acvrj7CUGSYWzu3Fr8QS7yuZ1jfJ5QbsErZRvE",
  "key20": "5szMgum9JkcHMNWLkbqwAk3uHKdPT2LAgu6fBCDhdQ8g2jjW3TGFSrq6c9T3BaY2U2fnXNg5XQKofdjbkeya6RYF",
  "key21": "2Ya2SZWZkdgzZ79JKqFqom6y6wiVCYNWj2eHswnTmdiB49YWYkGTLSUGGkcYTW9rXGchMqkdGedqQF4qfskSNEFi",
  "key22": "3mz3WqCM9N6FdnHQhnq434Sb7bSZwWHHx4h9HNqWy7ZkW2MhiTm3tDY1nh7GDDaxNJ8JhXziRLBoEYc4kckSnHeU",
  "key23": "56PA5g2UwjMcQCKm8wKsb8WvEXhicUWhroi45v3dMArmvKrzRBVnYiLdkzsCF8Z7Qpjj6UZPSYko2wwG6CrR6NGi",
  "key24": "3BH6kwD6rsGye4wJhFcpzuFM7181anduRhs8jozyG2D3bvCubqxMV6vnUcBKTwG9uAzYAJZcxZ1tkfZbWP2a8W9D",
  "key25": "4mz9pjTFzfkLfW8FRNBFQiLZpn84nKPunh2hRbg8YCPwmcqPBCsz8CFdrVs1JYiJNRPkJ8WWqjH8ZbLMs3NUt31j",
  "key26": "5XjLq53YeJUVbgHzpVq74eDiP15mP4jWQiWz2559ecaLoyFrnGt1Q19Rmfxuz9StFviSNHXFpgFiPsB5Bi1uDUdR",
  "key27": "JKebiHHkZ9nBftib1YUMqaJva5JiUWBU2PZR1Wnhg3sHF39gV22J6Tr1mJFDr1MMVcZQMCYeNxLWazr1a5Q5bjW",
  "key28": "2TYrtiTDaAYUakCyTzFraa7nvT9fbFA8dYxmLWjFgg9qxkT5wHG3BPmAZCXB8geZ77SaDV3i3Z1mjtFJSuzLToEE",
  "key29": "6VnB8JEyi3VqEri5eoG1t6thuneC1zYWT18BA7Hk8X9SBkdQN3Cmy48aBAqsN7jotEKRbfohSGMkUzVqQGY5taH",
  "key30": "4Vqg2XtHcgUx1bUS6S127ks2AedsaE7kWd7mS8Usa1MtyjDz2YZacsLNA9f2pSw4yMnc7yyze7cWDvwKGEv5tegK",
  "key31": "14r3d1A6zVz624GMU4BALbN6FW8YFtCFnYBiFBVJcYWDZeDyf1aX3fPGKVHQJYq1hrbftcvkfHWaEzSuycDV2BU",
  "key32": "2EDZxm9ymxMe3bqXMTqHYFvsnwh9dMwb5c2n2dZdmdSLVJAHSsgNpTTtKL48D1BW8dtxZWuCP21AmrHbiCtCLBni",
  "key33": "4XuAEBZ6wB8yZ19G5YYWemSgkczWMZuEXBTeEz2xtWaDpojkYKVpp51TswLhkvMkofxDE9xh8ChTnp1rjHehf8Le",
  "key34": "3Lfums4ZLSFdt5gE3X9MwUemnKCsXmjsz5asRVeRWmNaZwBfHF17YJRkMSJpBHU11ZRUysnjXTF8QMtWZqnsv2zU",
  "key35": "xd4zziVcCgMSrbDAzKETufMkgQhkHBqmHqDU9t86KTtTjnMtsK8jsNt8Xdij1QmXaCom9tkU2Kb4EuDuJ6LcrQe",
  "key36": "2qedFaCLUgsPBZPMsvWmuQLdWnN3r4wRRHyD8MbPwR1WtQx2zcDtBQUr3apSmC6YMCEXgfSZBUHNXvNvYY8AypDd"
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
