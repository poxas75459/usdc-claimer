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
    "S8ebMdQ5U83PrCjAXGQec3RLRn8FZVeHrRcXREDVp5motsPGKNNWwpTdbhGMvSf3SaToSMUd9ZKn9FCC3XmANa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LNYP98cF6Zs7VWEFzjXwob72PVHNHc38HzJfvh12qRRKXapfXGF6ZftSNFLED9iQguJjGRfJ6c9Cfr1HimCKLkq",
  "key1": "2ZUzFSCBcjpuYPuHDVwMDPxoztLeBHj2dD93V3r6gvTjCSuw8PotkuPJN2dvszYoSRmn9GJooazs8MMrZcUougJM",
  "key2": "4Uf94Z8gewJZw4p9NVSL6chp9jJedaa4u1oizJ8P4Phvt9RWhyGMqoyBg7kD5JGWtSf5gjf67U3r5iDckHSwghjW",
  "key3": "2cd9YEBxFNEqiqcV7RroSb7kdxiic2bRu3Vy3nTuRzw559Dr55fHejt84xtGQqCmMaso2heMMrFRqH5BLuratA2Z",
  "key4": "5LSPTe6w8vLJFdZFokhiqehZaFTmKXUPkk64BQLy45J9zEGdphZt711C5Vtyoi7hv6WFg61PyFSFoi9kmHWP7dhN",
  "key5": "4XhD2caqsFL2cnyKQh6Ahot7wXwcmA5zGvdyt94npWsoSQqo5hRrsDgnrYxtNZGeSZ5X8FSV9vXM5jHAt5HYd9fo",
  "key6": "2T3fAwTQ4uz5xeFZ9gJTJm8Ka5A8WNtaGEBn4LrMndegYFHYvAXFFgwRd8AkEEuMNetWnSaZuq6ZHUdMAsyJKsDV",
  "key7": "5vfZ6Cxf6gu1Cu12hVUAGjGJj7KzjFjUzaUofHaAXC2Pq4S2AVTWipbdY2SLqKC7KaJC2hBpcn1ARRYngntcn7NJ",
  "key8": "24ARkxWXQwbUNoKKLQxbieeSQTXSb46M4mjDMSysqYtxTGss1WEPPBLMCmGKsSMfMKakaLrP2PoMoerrCYXrNSuK",
  "key9": "2t8M7PAiQmYNbW67xpbzHPPR6VGCzHyakYb47Ejtft2286TxAEKqNGrvh1y8piqFse7sx7BcjNowDJi6WQtemcsW",
  "key10": "2zMcC1jGtxeZoKSzHj4vNxbYKbrnP13ntsxfwqDKdKooeCqtpfRpFBUTRRjwto2tAjjadL34RoQUB6mbRqB49Evi",
  "key11": "53F5TK2r7PKM3PDP7s9mfh69rZ6JgebaPJaHCHBaKY7ZkF6coD45EmWprAdemPBF9NQtnGyXpfrCtindVHR2t2E7",
  "key12": "QzvHXBrH2wr9fevKammkSrR8MmutPgvHoXjrdJekGGXXXiG51jNrXSxfhfcmdaAvwT5d9DbvQU1AWzR56qtwLZC",
  "key13": "4sMyYEMs8xJCbMRCz6LDyFsWW8z89XVLUFNsMVePDdATKM3nmC84s14tu1gpPmA9KYGwcuXeRMmswVZsxthQN3eS",
  "key14": "3nAABTd2DWYCac84DbJzXPHKRKR3h28faTXWexHuFMAGS17sjn5vNkdJxKKvBVUN3adSfiEFhyJ48fh4UeH9EXPZ",
  "key15": "2nwaenfcdHthKzGA3Ef82AYCbAj46gxKiQeojAeAiB9fX5eWKV2XbYsVy7pDAFLP9W6fdAcaRM85k291Ymg94JgF",
  "key16": "Mzf6YuPR6Tdo84hi58CRzMg8KoVs4i1vLBJSn8wEDBr9ECfi8WjTJQR6p4MfXT8UwBFmzzu6hKyCP7pXowBV84z",
  "key17": "4WmLHrMPoq6oSf5euDuGRzHij3XjuGhpRSCVeisHBjNQ5EGSMPzDwZnjbebomMfJMLcCMmobx3Lhy2kDEkHHk9xb",
  "key18": "64FeriN69vFfT9j4bLj1NZDwWwiRf6bwhU5PhLyd14Yu1fP7PKB9cB6vRiRQmSir8iDDyLKt4tWiuwHiJR69UmBD",
  "key19": "3jPtBfBwgN2dSv3nGT4StcNYqz3N6qacA8iCaypA2nWA6dVd4Mwgb5u8ssBb333u5JYjEUfbYsbk3DVKDk8zT6PB",
  "key20": "62i4mm6JWKGRr4SV9YidPM2mnDVSXFnYfZgXYaoLiTr6msACsYXESjPTrnE2FG2npSYzwePxARRUWPAJq7JzgL9G",
  "key21": "5cxFdoeNtN8gvSQpk3ocr97rdHUJcsiNfcekyAMgesrN6AEET926VV1vwkdpfYaWJjyxJmcCx4BmuHx41gCkBey5",
  "key22": "64HpJSuiijkoyMaQXYUsaK2WEWgRREPxNnCsFQou8nBfKJtzbcboD4ixoQNu4TQJqMU155Zzsx3Q5d7kNybrJENL",
  "key23": "2nbnGCNMo3Qku4c6o7rXF7GkG7FDcpGdSZZk5GdTJCtjSAUe2zi9iVMrPMf1VpAD7TXP8LVYMdNNkPhXrt19Vwsv",
  "key24": "33h2Httgf1cGCdGBKBcChq5EkMCvunxNUm4Yqj2hTVXb9xkbHHe7mJSiHgjxdZkrtR8PMUwoxZJ1HTGqynBNo4JW",
  "key25": "4hwo4sbdAan1x87M4wTirRDNGAfYSVZ6jjnvTFZHtSKYGxyZGfNe8tf1ZFNbSaUZVE3WiPs1riX9DdWseXg8BM8c",
  "key26": "64JugdYWwLPqobW7wJ8eJdVYWuoiNLMYsbhzmdi4JPZsuWVCUXPpY5L8S9yV7qZH5pSKrSaLY4yzWKgHnYpGKAwi",
  "key27": "4xQQ2LioeddqmLQkH4ghzp6FZgj5LUiEhEneQRZocX6smxtB1zVCocGoBQ5YM7UJFywA938t1rVWHsSqjWGwdGTS",
  "key28": "caprpzWHyduRZT3ZAN66xp15zztLF7MqzSRMzhc3BmNZibefuvtjPYfbfDa4m53KeUpdzV7mW3oPJHtAZkGAGYQ",
  "key29": "3kvJ4TTZcWh21ZHDLxPyvgxmJhkAPsQcNLEU7J3NT4rnV7bPZnEyB4EwVpL1hZW9WT1kysZaj8R5QSboK1CvGVgv",
  "key30": "3SBze6JRAbKBuaiiAfX2yNAoyN1WE3BhkF9XSRNKzEZkw5o5hHgmtXKwtJj6M63WvEK5zKZG9UsGAwcZWwva2jex"
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
