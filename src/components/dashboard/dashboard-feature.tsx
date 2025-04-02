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
    "54SYndvUgMDQT72dSut8ngtBxzcKky4DzmEDRQiV2EvTQZXRBGNP1nCWwDJrU4RuNrCtwQ6VCwNHq4se1y1QGioi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uY3Dmz9cWXqpvyrhXnjJo1AjCmYAWpFgjw1zLJjY5PHZWPrLfmE3zjkgq1HxVEXSEjW9QP3LcV3TVLbGQ1TghrG",
  "key1": "3pBf4sPAevkrPpWteFGGbpbyEXWvUPTbQSJmhthmNy7p6WkX58QNVRN9Cn9xAvbcSxi7UMTpjJb1vsuJeXQKtr1h",
  "key2": "zB9Ks87UdPpMzeA9wmCtvtP9yrGZcwCyefY3owaHzzp7ZAb2CgUTVumiPzZndTsoQN2fmC2rHGota3XutCFJ7rj",
  "key3": "294CAsRmBdHZsVZx9SwHfgD1pWNeduyoR4RFybKvs5hWjfQa6F3UbAAaLMFcT2avvCfCrxJ2mBGC2zjhkPV947nS",
  "key4": "4u2Ku7Aas1ABwTWmPcfZKDFwaas84JRRKwrTKbC5VieGkVwbjpuJ8qswrVeV8F1h84ZPkyfvSrKv1nL2Ccs1DWnW",
  "key5": "9BEH2N4dNQTxUfWUpYiF4ktoDsPvtvcVgCWGaZWsvJo7uhrf8usfpRJN17pv71Q4CA1byFv4r5inyaSoq7yJLfr",
  "key6": "5bGQJeaWxyPp7g89gYmoLDW4f2JxiMzyXsiNP3c1VpbLNftcFEnEs73PN6UrorjDXf6XMeBrKadTpUtAErPgYsTk",
  "key7": "4VGdfSeEq8rh1MHStEoFbN6LM81rRzAVUKMN7q9YeW5n3znRf4GyRkPovCsT8WNDLrCtW82h4K6wwikjpceQeBeg",
  "key8": "5akKNyikdjBdkdgQDKPadPgffwaGLTU2rnrXJXqEBx1whXaWZztUjT8Pf9hU9CwJjUKHMCuM66sVKiYQ6XhszXXk",
  "key9": "kNsXA8X1fmfuShB69nPJYgWcrVrXS5VYdTXBQRSc1XYDu9SRoPBx2bjP1W8XAeQCRdPZEzJyu3DieStQEw6cERq",
  "key10": "341iXZgZt9ZoLVSsGe4VUunBAcLQqWJsMgRituDY8kaFUAB5ev8Vn5D2WYuaG6Sht6rPoX6a9tXvrxyjmgzRaFHY",
  "key11": "5Q3cXEQ8QzordRB7u1XKykcHmGW19zGan59hmsGVqzGG5udCb9B2JVKYDYDfe1mQky99R1RoGpCFWWkS4A2Z3DrM",
  "key12": "5LwmT2wHUSXic22Fw8P6AT7qtfhQ4EjqZm3QLkPZouHSxx2mqbC68XitdLp3QxFyp3AiJcBbTASuk5LW3h58qkdb",
  "key13": "NuQg4BXTRjKodgbcHazi86Gkh3LYYmyd5gWkPBE6qQe8bGXVKji4LvX2Ro7k41whXQEZp6Pn9LrcpxFyrYQZ4op",
  "key14": "5igA5cwnrKvJqJgbgwiNdZPvgWTwosw4cjKzWnagtRX83aYwRkFCg4984X4b55kDrJcQaGRRrNo55teSwQq3dw2b",
  "key15": "5DG9hMQ5wmjZm5kxUpKVQ9fpYFTEYSxoobhfMphvtW7q7cLZavEgzVVzaSfP3LjBLJSQWyaSFJ8NXjpA2MY8vc9E",
  "key16": "2U8TQcfkUtvcQRgZ18F7P6JQad9Mr8yEDT4uCR2cGWBjAxGLesNqwzxsuB8uuYiiU9gb55Q9s3mTVz8eAizUq5Wg",
  "key17": "3FNKJ5nxvjXgbPciNosCz63yXrUWSLMLwj5GEWCGnm9DvCCKjWfZQm96FXm1W52LohVe6e8VjsxXKH7siLx3XYow",
  "key18": "5fuLjFVRijjV2JvFggUgXxDsQjuiAun4Kz7AZ46vsBRankvfGgKiwgmZcH6RmvfhKmYg2VABdUvP7wxt5TRm9e3P",
  "key19": "2HApD2CSpA3d4KVdwcgAGHgcqGRPyamooVdCtKwf4M6iVmVUnzdfKdvZA9pcMCopcmiDdWwGKDUKMVJ32i7uGuBb",
  "key20": "k8Ko9NgQtLji1WzD4iQHmBfxtFB7WhWShP1B2MYodbeuzev283pBvXcqRKxmbjzRv2bN22Y4tY2AMnLceSQmeja",
  "key21": "3mLsDio9nzk7znV5Sa8zqLaYPqpHsZWf2oGpswfavkWz7DwvcfQwhnZ2UGMu741xxGcJrF4Toek6UX78Q3PwwK77",
  "key22": "2nUoH98KYT8J3LwKRGJTycnwFAJJMst1pkWxwMV6SXMb87URrBw75GzSxad6bdwWiJHrmAUVkWZRSHrNTUoMzwk8",
  "key23": "LcSdF688shs8vnXjjmtxmxm6rp8vp64zYEYyg6Bm58rCcgdTtJn3rmJDdGre7UyA5Ga9F9TfyXZPUenkcGYARtS",
  "key24": "5m6ndK94CpahSaXPc4zZPRj5QEiSL5eAkGz8NEcqyh32iR617W5tRBZBsvFVdHdJKBSHwuJqSp9Xpizs4Kmru6an",
  "key25": "3YxMzydhMvyQKFnKR1HZZR7nRfkDh9NnF3u3vLx99vVxNNUxHX2yASGJytQEvYaP6iBaC21MV5tAxMATw2tn1M7i",
  "key26": "tEKTnLzPXszcyNNPA4jbuKiy5vyUp742Q1hsaZudYZJSzzhziKerGYywEQ1iLVmPqPhHY5fx3ofQv1uHPCf4UuL",
  "key27": "4ygjiKaRCyLAAo16mgoaRrppMRVjq6xKbiJDHNxohURHVvbeWQFPYeLuDTnhYPdAfs3xAdujar31nGPq9uKzhxtE",
  "key28": "gfE31aGoJ3fj6bZWwz2mVyV8saTdLybpsdH352JUtpbAc46DF4meExHED6sshTArdqZzLZKKFmLiVa3NCdTGuGH",
  "key29": "2kgsLEndwRDWk9cVhKkoDoCehe4iE8CHuNWjncx3wZt1oAUT9jvu1Ur8WmE6vbiCDi69B9PEUDw99kNZYtW91JZC",
  "key30": "54WfWsCHiBHXWK1BypL2CYWWGv7AgenWFrTj1Rw6RCtxKLMKzC1MDr51caGaVosbZpeuD3w1BNjTCXbZuRcseyQH",
  "key31": "5epDrNL4RvZozghu6LxgSxmGwFpABGwA9GTjdzJgqYrKR3GKzcge9YjmX7DE9vCMyCLR2n9HxaZ7noxrL4JNubg8",
  "key32": "49FdWhwrbVFJLxMcDqaarPCkwtHPrFCZ1PxmSuWbPUKi5rhhrQu4gWoQXUXRMSUoEALs1xTgMPKr2m6rit9omQwD",
  "key33": "28PsAwUuLfa69FXxpv9UGKF7znM4p7HLv7QK6ZpASTanzjWgbJnd6Jz3JYpPHRoyMSsMP4paEwv4C9NYhmi589X3"
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
