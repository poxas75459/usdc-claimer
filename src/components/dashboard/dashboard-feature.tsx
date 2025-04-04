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
    "5wyNnupS5uDXSYbARaq11pquPR38S36JtTBU6Ge1pmP8iB2AFEaje4Mm2Fc2p98SvX1uYFUCLE7sHFMfyCxExNuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YxZ9mR2Mrw2cM8pvzn4GByy2X6bQMYb2gmi7y6QiFksiRHCfgPLZBsJ952RCaEjKsUQkZcPt6v2XHUt43fqhTKj",
  "key1": "3yCqqzhrMEW7FSDgGeSTgpT3q4XudYNWdT4U8diL1qCryz8HbDtAMLofcyT3nb8D3puCmmrPzgHdamGyWeDM2mAP",
  "key2": "AzoHYo627NGB44B4Mve23vzvssajRwWc2Vk7QfLPbJFXQsa5mR5iUYL1CzooEEEowceMcJaHpph4s4rweEm6b84",
  "key3": "2ybH1sZtkKSChRUQX5E3ZTnGttYz6XG8ok7dgacVN91UQxTEJvGTpgPpiN6HDj3TZa4nMgRq6rBYnLmYAuMqA1Un",
  "key4": "BuNUM9ahaH2gPbRcyWfVEv4SeFRHdJTiiaKUqMQepqVdDYtLdefjsbSSR1q1KcNVw1L1HmYCqiJu7kvoBh2jGz4",
  "key5": "2odbEtbC9smzmuMyrdPHBkSPbXaR1mKGg3DEWmPGWvfS6TMij2MPuQeUSQVLKbGx5Mx6EzFhDMBXr847vpFPcEhT",
  "key6": "3dF6sLDVJaPzNR9PoxqTiGcmLu4yBGqrJMk7zqMBr8PuQsYngcAGQax8NaN5kUXe7JaWJ2y4YapvN875XmSPCGTg",
  "key7": "5NT4muuj73r2m668WHkeUJWJxqhiLfqGqMzJJuj69221Q2QhZotRi4stCXANcFHJbWMA9PpuBsw2FXKwAaaoS5HS",
  "key8": "3KYdk7sQJcSykLQsLG15UHKBBPnvGVS5mjp11TbEycgbs3vGcrcHTf6jCMYxHKMgcdVEUM5yrRhdkfh1eVE6zUoH",
  "key9": "v66SZ6UfnjNtJa42mmhjW7y9CkrLVHLM8P1hkxQLQzHfoaN4Fu3B4SeHpRH5VxhwqLfYPw54H5edXFmpSbmBTf6",
  "key10": "3e3FseC5LLZZQWCVG4LVd2Ak8YVw1wewWXgYbkeKA4g8daxZbEdgNDuUJMKhgcvXewa2ySrciamdDBjBDtpTktiC",
  "key11": "2sALCfpfjjLpktY3uAH8J6qk5TCXoevpcdVnrheQjVDb9yyqNDxdKYL6fnqFULy5KqGV94NNChCUE8weDq5WDmP2",
  "key12": "4LiDTr91GpiiAJ1n5i9qXvNYNP54BEDRCMPAWR9btGMr55yJ7MxsZpTHP29TqVUJrTWhLrjLFZG8bQUtVzbDGqqU",
  "key13": "HRsDuSNtA28FXAoT4Wv3hcXj41WUmsKCVFCZKDNdXvUAuyhgcYUhDBmfVWHk7DudVFvzYjMKZqpxyig3qZeQy2Q",
  "key14": "3gYDP8gwy5K1s2k2uZnccRV7pRgN6444dA3efm62hi8E4rt1n3Xyh1Q54fbsg31uevvH8ZBjv83Byd83jkLbpVeb",
  "key15": "4MiAqQyqA2Cfm8ccptRUnZvBTdoHEcatWsHJD3QuQZv9UAPyW6cJNFdFaasTTfLgMNbXRRH7ykstoAAKuWpYhYK7",
  "key16": "4MkxiPAgcP3TD4MVun6yfmJhkWCcMhz4w9edyDdGSG3Uf8pcJRHPaTNY7hD6bT7596s9S3WNShNEeRJD9wJYprKv",
  "key17": "3mBBT9Pj1uvwKiBJiEnzvC2ReTys2RPwQhTPoaMcJvZwtCampapx9k9oYmtuDR46AW3Z17NB9ftAT543pZ1c1Zyv",
  "key18": "GVnCdkJJ1r5yScVdrgn8UVBSbhqDBBVcZBuXu92jB6aZyayVEHPsdXktmiah5BT4h4nnjimRVz3pDREo9f1Q2NR",
  "key19": "3e6dV2wayT3JU9kZkPtJ6EuxYtbdjLuJEbBihWZXQvDQoUXG3aunw1LUZsU1vYgfrzazEqNgC9qKzGTx4FEqTYFQ",
  "key20": "3zq12oYR2tNw7t4AKWgrDtBvkvYcA8LiMeVSY6mfxVtuoirpqVx3KYqLvspts27rrKPibNQ6oscc7cbvCkQZvQKV",
  "key21": "5fzevJp3RLWN3zTJTMr4vEQpYfe9deDLhCVPu4N7LLi3wznLPzi4bJCb5Tiqy3xz3d7DkFAHzKo6Ctrjyc8BPTtM",
  "key22": "5WF6rJyGtCUK4h7YZjALWxBi1y9ybfeWvnQZjfQcQcmvLBe2NkrddFVp5B683cgSZ54qucsVyfXBRag6o65TUCn7",
  "key23": "4m324zCmxEoYMtE3oj1RJQBudJFgVtNKDHgVzA8JbuJEH3SyjiffgpcQ3HKCLzk334AVLgPbiybUtaXcHhigrX9S",
  "key24": "25PLo6AGjXr42JuWNFsWQmYyec3R7iQpSdZsYRJAM8EnnXPZYtsRXRwvNv5FHEghHPdpsGZN3tCrjtssaFuikcAz",
  "key25": "5eiDX2ZnVHcfumrXFyf2Hr3iaaH2r3snr6eqbzzx9suCXZFAk2qLchpm3hUiV58tGjonnLtXXGx4dzdMPo2v8MdT",
  "key26": "3z2EK3DfFh8wcRudhaNKvHxPZ2jmZTu5fi4gh3LQSdHogjnzg5T1Y7kXyfrFQnLourxrUNUUQmw4q5Lcb64AFLoo",
  "key27": "66zLwxjWoHEXa7vNLCrk1ptpQdgWV6FSuiW2x2oRkNv9cnqHp2FcDBqkHcu4ErwG4NYkhiw3AExSX7sw2AuWP2xS",
  "key28": "4hmSLxcJ6Eg6ZaSYornHRwufVJVChsk7CXUw7ArLgBXK1dTaxmBUvHmuo62wvPp84sLotiecfk74d1EGfiU1QVQj"
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
