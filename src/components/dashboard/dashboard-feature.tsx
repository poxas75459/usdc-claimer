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
    "39SPwu8qsYnuLSkYXyKbT4AkcDH8TSfYzJ3mUient85gahwoUr6oDiL5i9wFF7vjEPupdqrBHqWMh3iheTFitJd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dAnDuGWvXVZA1xEJmV6sT7vVCxoMk5ZdTtz7BfPvFn9xz1Uxkr9hhfHa57f1goPxyzcvFeR3L6482WHe5KnRLo5",
  "key1": "4uYexvWV82Dbd6AnbqPaMcYjmBc5ZbF3hHFw2jyzpSjn4XCnyL5sH63Cy5LY8ft1bV5MZ2x3TyEE1YTRmiBysY6Y",
  "key2": "M7bkFGNqK29xy9QYnjMnLfA6aj9KYDdLstNVEgZ3E9DVVpHBMk4bZr1hACbG3tY2q3V3828L5qZHBHt98s8Vdw5",
  "key3": "392YUJe91janWNAamnJwq11biRKNeQ17MHD8fB9HXxFquWhUqBFEzDfYsjjkxzbwgTvFDnVWENrDMubLGjhwJ9p2",
  "key4": "5iWnsgEX21qDWvc7otn3cNwv11hqYe9AXAR2XunQfG2ShxHZu3tGc7Jg1kQJWKo2CjWaZhaa3rjtGqYFSfyP3X4U",
  "key5": "37iT8t2ML9MYX1xhkqYhBxPozwKAnQhza5ZmkwzLkRWEa9C87VgpLHJuaMJtW8PMpGuAjvWBt26tLFsdzEuARJx3",
  "key6": "BgTc61XdK3AnoCF2uTW9eWrSzB9fUBMPhnzkLHwyrSuDjjSQqc88Ni33xD2shS9pyBc9XTw5S8Ue7JefXRp9imk",
  "key7": "2WGKBD4rsepGuiu3dAJJ3g6YDD8qVLeq3C131t2XNbzqfwPddgVobD4edbXLfxQumXB6MSE5NAVoXF3QwmYL6DMm",
  "key8": "2oHYX5RvfWZTJ6qdW8WCD8CrgYd1unjfL3rwo9rm7woZiNf7gyJM6Ug7QB1cSNeFR6ByMgzPX6ZXx1xYq64ip1Po",
  "key9": "4D8hX59hagw4A1hWMyo3JfzGEvm46BVj7Q198VkzJdE4H9dY1jzezVoLzUpvTRUK1YgoDxefUnFqumNXY8zrn3EP",
  "key10": "311bunVqunPGSguBE9G7uGu5makYkhMKXqaSncAoFammdAEX5dVs3DRFHuhYNKj1TfYd2xWjXaLW5yXDQkvo79Xk",
  "key11": "3Pe8XLkz1icXsGF9ytkusHyz3xVvW7PCzY7qs3GwcKx67pAPyAsexJerqRt3uMTiKD3fxX2uQKk6UZUN4V3Wszgo",
  "key12": "55ga45iocGqfuAyRpHDKoc9DXht7xXBWQttwYjzK8DJEf3kdVhEsyP8eBuB6ttL1V2pC23o3TiEJ7XMyunRhtuEt",
  "key13": "4NGjokLEXyxKTJkwG5pb4RnLfwfjMt51qYah7FVnWGF1Jxm8FqkHSVshRTp3F2ebSEDfWH9wQHYH3j2zsJAB8q34",
  "key14": "4sMxZL4V9ZyCYqfzLQcZQbwZTh5vGsvWnPiHqbMQYfUG1PbrgVLuCJ8GBbJekof8AR5ArJMkK9QgyiKnrUcTmy51",
  "key15": "3KBiwyRcUTZE4jVd1r4tkXpSLrWC2zB79DjRSBP2P8MWtdCJeJW11WBFZi69h5SSdVxmcb7YFBAjvEfbToXDzuVB",
  "key16": "g2q3DUdbPoBULqYMVV5tKqQJtRz5gnbjUATsEUsEvkpniBj4athz1kPyZefJtZLAWM7MhNQVkPokxsJNVQ11jpP",
  "key17": "4uycHDaApBdYPqEnc72kNXiscmXRDZmpcJp6N46gjZhZWYBzKnyTnnkMZPJSc4MYrQsP3xU2HGhcaV5JREpmdyDY",
  "key18": "JNp7zjDZvwAHTRz3K33dG5rJxRpdKtvUc2TG6igJ3jE6EzaSvr6gzhnSCjmzPumFJYQCjSZz14ciHz8X98Vac7B",
  "key19": "5foEQUMHUs7gYZUTNFHdrQ1gzfxS5biJLttjSN6FXRLP5VfhAK39YyBSx2X1XqkqNGp6f55EHXTD8xM8DnhrNHzA",
  "key20": "2d2W77sNgPobRE1ixuK22ofaGebNxgFhjLNhqj5zicmTxmY1APQZMWY53E76iFpQNs4GR77By38Y56M9pGTyDS3J",
  "key21": "57RYn3mWYsDUuJidNRSDSa3H35MUWse4SHL7zw9S5HrDU71xgwQScdsJD2DYxSV7aYcqhGxBJv2LZyDNd97AH19x",
  "key22": "4xaan6L4KMSBFFXXeNbFVCnv4xrDXkUQdByReYsDFyxDzjhg2RqBcJZXpVaDzYMThNEDfj5NtKjRrRrBnJtSK4xS",
  "key23": "45LDFjykiFFz7sTwQ7gpcDrNpaijgvUvFXLiRr64bktKALRbngpJTWh2Vk6KwiQtDqErV9NKmYHB1TNETnPxyAs2",
  "key24": "4H1VEr3EyUTcKtVv262EqahtQ9HKPkvrjV8ceYj9nSUB437zLQzdi8N7SnkqjW8ct7puS9cf8gjKpxb79MWebP14",
  "key25": "356wgeLF9tPWBheoNB1VXMDuv84gjtpG9iHJ5yDWkBAffpS2ApEhnM5hrNLk65GXshxRRUkHZZUCJrFktDi38Enz",
  "key26": "4rha72Cer7qUsJ4UQHrjjbzyFtAdohxwXv4sd52jUkQXPcABV9nUjfTNvfJf2vVsMkkacAzsCCzsVY5hLcuhqtiU",
  "key27": "2D2SCE95a8vfpC2tWE6EQefjmNCAdv3Q2wT8TsQzrHAqcvYSnkBa1TfSnrHTLyLgncF7A9yHDyMsEtZ5RKBG8eVx"
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
