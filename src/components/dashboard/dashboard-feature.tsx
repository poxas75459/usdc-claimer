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
    "52Aj327WLR3kXnVnwMB69Gr5SrVcbFFsxq8cKBfw1AvneWNZacBELZSH1YHHUN4NSbPo2jbyQ8gMCipCAt2Pjdhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3ZJB5h59sF6PCGU1c42Z7NvkvGTxQsGE5RRNSQdm5A4714xo5A4EUjcUhofAEXrTdocXdfTTENwSZLt1XDzu8z",
  "key1": "64SAEyqxwjHgdVT5kjFtiAjrE6bh9v6LYYSLCM4JZzNyrfrCU4vsPBvPcKd1ZgJNYbhc6YKKW1wY3Js68Y2jRToP",
  "key2": "3KWTF5fCzfJrHZjPQ3CaB13eQcrZ4WwpmNYXakXRThgDeJxjJhupU3bzhsyuEbM4wkW3fx2a3PNpXGHfDUKA4PtH",
  "key3": "aaCXyyygZ5e63UFE1hNaJ4XC5CRY7XvFJJn5jvWMN6CnQfSZzfsTyAeBaWPk3HXpW6YCDhzAuxHZ5ioC5q2GtAK",
  "key4": "LupV2i2DTcVf6kgBMVk1R6FUKDbGTdGsVvqzGPPaRy4WN3tf8LQC4KoLCM4Ho76gDpBZt59not1auNkwBANwLCM",
  "key5": "27pKhmt7m3ftCjjengonFwHza4XLqjBXaqSH3mX79We6m8i7zj8DkPJfWj2wuSLc8DRxydEC1c9V3iGfQME34Lfu",
  "key6": "2P4ceVxUiWgkTdRnAoGJG6FQTAmEYE9A32fKkfF1e8LD16X85Q1juuE9hdZqCGFYZTS4yEx6Cyb2RLJ6p6VMdxeA",
  "key7": "CoJbBCwZpsn9F1xFPU97LDyZtC6gRPFN4TUXSLKFMBqzyc7jKMWFg8ex5C1Vf4h4CTvFyo4gUaxLjYyrV9jCg39",
  "key8": "HQZMgKqjuhRBjhjzH4s7FzbBGWSh26TotVeMu4tL9NeVGCGugtkSJQfTVonHt9xBaTgq1rEaKSkfDq34iBH6uA1",
  "key9": "5Ukp8tERggPkzcPTx4ANkG2iXNifNk8tTRToGVFp8mwGq6iXHwJUnqJWag6K5Qm7AUYWgoeFq5J6BW1Phbdx7teL",
  "key10": "4VFXAdwq7mr6tzUXsrkj4aVihMbtJoRU81Ds575VCtoqQ2hGqeAzT2cCqQ5PYAqjRg9SL3EBDdBNcNdZ6PQUXYHb",
  "key11": "65subYkeNMr62u8w9V8SfMyLUbEKqe2TpmRguCvrSEq5c4HsGkDCbvLBSvXf8XxoYJCR2KXQaFPF7izEB1SBMBfR",
  "key12": "cdpcojr3LVD2AD2fYebmcwd4KY8JhLLBdx1GSTF569fQDbE4nhJcws17cFydV85AHpfioWqHeDJP2syUPRpQaRx",
  "key13": "2oYXeowCVUq17fdsRfMwR8v6Qv9QDN843e9Znvzm1obWg3zxmUQpURcJx2obezKrcLtRrr14YvZwYdvvk9CEXaTs",
  "key14": "4sinV5NLJD3pkFdpLYf2JocNcEpQEizVZrzkcEwTSehmKqd95PB5ZhqbtUsqcjp7CsHoTDQ8XfEsSAaRDGBTH8ny",
  "key15": "XJfUSFH8p8gwFNzkXibu9QP9J4rSYALL8xSR7ypmr5FE4kjtLAHyfvZcp6XSjDHwXc2qF2KPCabJLx8P2C76hX6",
  "key16": "2iQf8kgj5ZNhAAxmkfMkWm9nz5mQEP8ZKSfCnzKTv4qa7kZ5gZ2nLPs5vW9NFfkhVBiGgEUGs8UVMVNqdFiZ9wGE",
  "key17": "4Z6Xw9TTrUN7o4Ra6a71TcwngFGcbuNW2YQVXeadEeXSGUtfQQqn7C8L9nFFBYhJ3B9cgjAS5Ed18KPgkZNuDgZa",
  "key18": "3MYskmZBPBH7kJcJ7S291rdnLsHQHRcXLsazNPPDQGM1bxEAgsjfd74JwYtqMct4nd851VpRUxaw3e3Q1Fia7oZf",
  "key19": "29ZjWmb3Puf9LfKE3oMC2UArqE8xo1hU4DgiKpayGNVs3pF5zERcPxu5aTNSC6wAhzsCGeNtTXnQupohpVWzTnXQ",
  "key20": "5LZLMkuB6sapU3qTRJXqCvuE8tJ2KvZEK9XuYxGN4gy9zuCL7pA63fW4sQQf6nCme7rw4pYdXaJxvBQkgSYnZmb",
  "key21": "2MsiK3UhGyUgQZAykpBeDkcJYmBYtJmHFn4MSm5m8v4zkGiKgNnKJ8pvFzMm3g7f7a8oa6qeVxG6CgkHqv9SrDPm",
  "key22": "27NHS3utpNX9As6KHEQJgLQCzLjEJ5a1Qmem82KbFG5S7uDhuACR7ug6Xzo1jeucm4gyMR3euc6tYq98Gq7jBo5R",
  "key23": "3hcDTmmjUNGkgmF7utLChhtpfqeeCMpqpA6TUJVe5q8h83dF726bspo62wrh6MZmPauZMTM4E3Ls26k9epn9NcB5",
  "key24": "4t2tQ49SnrnTcA4N8bAYYszwJK2xh53k14jU3v8PDv8o1sqcAykqa4FxcgB3hvncLQyWiJ9Dk7KRgk3i6F7QTMdF",
  "key25": "dW81eQjWyFmxrWPCwt7d5rErQkZY4EwYGYFDKmidrJZfdAMSTZfv7ru8YcRtrcKUNxTD31ncManapWeudPnWVCE"
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
