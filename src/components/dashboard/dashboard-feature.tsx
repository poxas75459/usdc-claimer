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
    "55xdGKQQgi8iUn2z3QrmHJqjyP6QUz9EekJECu9r7nBxTKV4kpWFFNJb99ww9baZF4ksnz4Eb58BqvcY2P9RRYS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jxouRzR4ZNEGrvPdMPiH66hxusFN2i6VdLibFRiuRqFdBEtnEwWiUaci4A54S7bWa5u3p4Zirs4hnS8D4jGuT3R",
  "key1": "3ZgsuyKyzFmCQZHD79eSv37RSSd6MdJuXJfHkBAsKT6DDHUZp4T6M4zfACDv6M5Kk5Yh9WkKkbteJMUAdQrTvAEz",
  "key2": "45LWvg8dsfZLTiHjkfaxQkjMnncN7PqYgLBaFAdimH6RV2RwdBqNCjV6FbhiQDqY6cUymAwbYDpYHWtsQZvo9Tr7",
  "key3": "2EanmwHm388xmVvveP5XFWvYB1hEsi5Bvw9rTzXAANkC3cwfvqfzfxA9ZYk12k1cpYUpYhVJG1STYGCr6UCzoJQM",
  "key4": "2zwmZdrXbkFAEAwcqiiyaGTUAa7tVkNRLgEfMskzmP2Mie5QuYWquyYJT3Mm5ePrHy3Ut5YxP9o1xSBGpCnCNffi",
  "key5": "2djKdjFaq72NpTzoVTQvLHM631hqRfrgZcKSUQWgbAyDhEpyXVcGqREk7guF3E1Tg2nLAU9exyYd792ZEKVf6Zam",
  "key6": "b5otv1P3ub8z2jW9eTMw1k2fxcwqb6DbPA5X7E8Mmq3tNy81BXGKYULhJyourPE5Bp6zsfzZUxUeTz4VwSTS4dF",
  "key7": "KNtJ3knchuFtr1DmT7z3CPqN9Nnf3tQjqEmQqzUBKvTZgdrbZNvKWQ3PFgSzp2TiSmd8ywQBkeqUH9TEYtNMEfK",
  "key8": "2V4WZeqVmRxyJVfAn35qjQzH9Q2AfrSXVrQCR69z1XMU4jfQ4qpSgfn3DCAn9YaVbQWiBTrxk9GZKBuYrVuJkWMm",
  "key9": "XHSYKB6GKy4CEbVwFyK9YwaieEKMFBLPuJ2r9f8c9bcJ9fcVDrVPeaBhfTw6LT1txeqWVBBpRYfFu8o1vwddVPG",
  "key10": "3EaUaP6wYM3dtV5LvCmzcwfUE9WvUv8ab53EedXBAPXb14Dg31K2UR9dtz962U7PTaeDmNUMfY39cs6BNqVqEtss",
  "key11": "5hgZiJuBhcFnWJZ28bAzzBY4hPvfqcDoS8nuJ83auZe5bjfZXDfvHXezsV6GtSYDc7TmZv9UKawL82mNK4Eo9YkL",
  "key12": "4jRHFfcjgMPKWSrayUAWGJ1fU43NSRQU7JQxGwdGYcNSrTBLjUquo692Tc4iuXg9n4HaHt2pFrsFcX2jRbsucioH",
  "key13": "25NHZwpTZBeooMTtGvi4D4SFnWvNoKYFLgS6eHfwSCT2bBCxv7ztKwiXQzR8pGC47W95Asfubz5oKT8Pif2RLy2r",
  "key14": "5jWasfPnUvevCGm24j4hLvrrS1PSwoNq1YuMFTaAcxNsqCsSowcCTjwshtbDWjVzubpLtKCVgqzwFwrJRiBeVDfc",
  "key15": "3W4BTA2mJ7ky338RQd3gc8YhyFqrFPPzRbF27Pto9PUo1PwgXubYDZ1t1GQHMNSjx81A3fPVJX4YgmPW9QC8U9iz",
  "key16": "2QG9yCfq5Yg2qTgSLtQrnRnroBEz13Kn1tibWEds9B9CSeucbzPcafQVNLkLG6eXF9gbuPkSJmJ7N9LhPA7edsHi",
  "key17": "4APb2YQQ1jF88LoYRCSm63XU5JyTzUeig7NibKWKuZsTuF4zP6NkzTgCWNHwwFYhDiyZ1QwNYQm8SH2teagf5291",
  "key18": "4YHNcNUi1mW162ELsxQWgtBL78xM5bEfa13CtfsmVSbL1KTm53yNiCK8yWwaRsa8bG7rXES9DyWNPukFqBCzJMnS",
  "key19": "2abLpnZMg2DBLWT7BkRgVHAZi8d1auQrrhbuu2fGGW9bx7Hn46x22kA9pHfQeXctjKcYdGiqBkyKsyswrR1TBLB3",
  "key20": "2AsKdEuz5gnL9kVk9o9Jnar3EVw1GBPDAvZk5rPM5UT5W8bszCTkXH8yGV23KD23ooxGuG8yi8HErBaonACBcej6",
  "key21": "5ZrsChDXGKnBXW97Jp61SfRXdasj4fRWHKneE9MqjPDDNk5z6risGFEbCm9uAyNu6wxcddMc99jDghbq2yB1LEyD",
  "key22": "2ar6PV71bMJn1xPUDM8v8VxAU2KdPdyCkwrspDkrhqn3YP9fvf5kLSgeYdkDjti3LW8wYpYwDzPL8VbPoVf2dZnp",
  "key23": "3RRaWQhKeaFtAFVPs2J7ZJQrSNEpDjAQecKPo1zRGkiokRqH78VKj5ebiG6F5ntyMXNorecZSHGakXXgHM8XT71",
  "key24": "AMztYVykVpv1v6GXy3nucJgS7Pq4qHSHAsb2oy8uNkxVZxR9stuhPKtH6NUeG8htLy3ETjvV92XwnN6etbfynst",
  "key25": "5rNZWB2WVbM9A7W7yV8ab5iPjbPNbfu94V2tSN9F4zRU9DvnfZMpcg4gdCQ9fiAJMzqaJ6EngYEhdQc3Vps5C4W4"
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
