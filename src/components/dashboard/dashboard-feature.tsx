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
    "4rdzmJC8UXYLTaExaM2krve2YFk4bND4xHRZQCSEuYTJpAn5Z3cjYSRnfkeyq3Wchs3QVHmZFUCkq2YvisCHd5Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLSgpK6RVLHRu644vTTPMoHiGyttpss4FWSWNFkBsciEQcqJuvSFDWWiPFdQaogSX8isR9z2GPcUCgdFE1fqHgP",
  "key1": "3ggL2Ln8ZQ2652MXuRhvbLA8MGyLEce7smcWMZo7jcacRkjJBpCFDihTQxbKvoCf2y87RWK6DHDjE2fptMNfEd9u",
  "key2": "iZkmkSL1Udzf2NYjePqENmh89KMGPqotQqA7ZX5uBPCsNXQvE3NvDBkUoYbarQwyFZeMt89ZHDDDFcAingJrJyh",
  "key3": "2tqrLf62xnVzYVPdfKxVp26RqGwjj1Me5i1ujG7QrYNKedCLRAq9gGzCprTBbSNf9vpuTPa68rZej3byEKwo4VHh",
  "key4": "4osVRtxenfXDhkpKC1J8VH8j9QmH5CP7gZ29Nt2pNkqNvGDkht3FCqr9qXrFNVNXzY6LtRccdGevY752MsB8CLmT",
  "key5": "4e5gM5fjafuxYA5nSrmYC3Gxjd9BtbxJrBacgzNiLmYQWdb64nsqFdjRgGNCTg6DQw46DZg3fiu7g9Xr5gsdBV7w",
  "key6": "Eypi9TtenAvEsoDkPMmSi9husnxuLjR12vyA6D3785DiotxiECWNuBfj7Ub8StFxhvANrN4WesKXtN5sPMukGhR",
  "key7": "65YxxvnR3fUh2jXtR4u8kkHsjPS9b7afx6E8gPGq4QzxgzrGUovrJyRdfLxD8bANk3tLss7DRdik6tnpA442JVTP",
  "key8": "3ihnh9tHSmHbJB4ydkbNPrY8iFiuD6cN7Gfhxj8VTq8L8k2xuZxeD3veWvnyAWvPcPgvgjtm4btmM6o19U1DnyxW",
  "key9": "2uszVaaxvHn8xyQCow82q55bNxdzUNbAkHWz22DCufJp5BZBnwCrHEQFYdSxzmH6jEQvJQ5FergsCvFqikFgxg2U",
  "key10": "63yJr51u2QYQEPjzetAdWM46yjVmmkZmrv5o3BGqUf17D6eewCL6v6vkqoYrSe5LqoXrdztR95LmLDx4WfQ5qGiQ",
  "key11": "3UhzyDQgwedAQi7uHiyfyHYDsdU2R87x7Tjh4xzomEuR1oATVrgTyUyKi2eDtVQGce1CNt9cVSAvKX7YKCdGRpj3",
  "key12": "ckPMYqCA6Xeo2cNXDy3TatDVZcToLfvHiyFa4NyDJN3uyGUaXPqAyse6hLKrBGH8EtuPCcbHMTLmjhNuiT2UDCK",
  "key13": "kwzAPLQeRrkgZEgpr2HtTTJmxa2y8nzgEWwqKZKrAoyi7JQ83ipuxH4hqGmusrDnscTpMACV2dUcmjyf9W1U8MB",
  "key14": "3EYfy8TQsr4EJUVBZ3Wg3Es2to1Vigm4Zeoe1eejk7HUDr8dbKhzVvfw7mr2HSgeGvLuTpFTf8d8eTrJ2Kj3Fj7C",
  "key15": "2ruCiDviDFbE3ermeMtVMNySrE9nLckrpa4phsdrEXzcdsk2bnnZySnCxVYeqwqisM73oT8hZvZV1uqTVNkjj3SK",
  "key16": "4sdGeXq8yeS5hJBo1YeLjbybuhrdgLuHZx8W4g2kYtuxtgwEhrgGiuo9KeymeVhg9Q8gSfK5Ej7FaPRWFUkY1ohT",
  "key17": "5wsudtGi3kZPEn8SHWpLySwjWf7UPbFcLziG9XLKJXrm23TW9vZUgEvY4nfGCw7hXnogyUvhpCvzRQj8tTfRHzwy",
  "key18": "3aVV4VyX2sroVq9fGukyB9ZPuscSvcxAM8hf86YNLx1J2bNuL9i2HkhWVRuasVQ9LKNRH8CQQ6J1VXFHLprwuiaN",
  "key19": "2kxqWJrwQfN7hXqm5qT4oytnuZ7iexq1MdwyY25z6EN4dbyvjw4HK5gf92pNuu2cKT73PGqQu6pLmPxhBdhnUK5P",
  "key20": "56NfcawzrYo5ZXigW8YtaoVGsvuyMdT76eNCn5hMDgQ2mVWxGSRKzPZYvLpSCpdpXXV2cwgyXAaTEwwz6w4qa7im",
  "key21": "2ZfC5mAj4sg6pGnwNjJUZqFRRCfdUSTUuPVY7LXFuqL2xRNkT4sjK2QunKAz3or3YDWr8ARxwe2sj2W7VZt4z7Tq",
  "key22": "jQEjXEgjVSY95ZJPierpL1PS887yEfj2n6Gm3kXsfSibZfEc3saicRyZYMogdMkkuFj7gXLxdXyvXhDpoj42HgL",
  "key23": "3hLqvjJweGCiVNjvUqYrdTiyQV3G8hu3Svh1gFeyy945Aki4LQT8CZjAXHworXf4r5b844oQnFBG76yfTkJwrKKy",
  "key24": "242NxS81SVqde3unLWGvQuUHE4nnY52Yxn4TWTchJMGLwBekGZJgkuJ23yeVt2JwjSs1RzMTAppPdL5GekaHUNRT",
  "key25": "3h2arKSsbdmy5HFzMSav47LbFxjw79WBe7V7CDVGSmB22y9EDsWkQKiown2qg1eGgYQto7JkJ9SWNp519kLiR2Y",
  "key26": "4sVkEFpWSzkJXWowbzRYzKPB7VZECcE1ehJJMDZgCRTpwUqsqUn5sz6AVrewjEj8JiK2w4xAfbQWfdHZRD3caUr8",
  "key27": "4pfDwPkH3mJUTeyTWZoHWerbDScbfECtxRsZGwSdZxzxNGLDyUAvhFmJ9pWUnyhspVWv7bwhSqrmf1CjVAG2bTMj",
  "key28": "WZcBnvFWswR8YGZwxaHZEefjNAyd1DNgevr8nVwXc1Ad5kxwaxzngPFmEB2dpqabsCHCP18RUvMmouJfLgNRRFz",
  "key29": "2HTAiS3wsEGFEe18MUZ7cSECYBw7bYz3RCEKYnC3ENSjqzVpHC9pgMQqzQyeFuWWjaM2z5QtS5Jnyzj8ZPoNZDPo",
  "key30": "3sp72xpFzRd9915swxYKDutiD8wACWQsH2Lw1AfeDRtuczwHJAo8byJGJkbpeQ6Ed6UqJNhwRsXQKmfoKKocncLg",
  "key31": "5BGdq4CQZbAPKQfzDsNWWJvJziwFiHoGwurDq2irbgW3UaasrUGJTbr4MNAJZhmE7nJYQC2Tm3axkw3XqELGtPc4",
  "key32": "3C5mbL5nTrZ5yV3ft1HN2vnk1xRRbH61i4qT9z7f16Nhro2nQeu5msLSeqLbgDEQVKYfTM3BqPBWrszzbAAc2rp7",
  "key33": "4aZnTbXt78d4WU7moBL8TxM4sHusivWGeKoys5NESeCdvQ1N6jFfaiEjTawtAKZQ2bQqeY1b87zhqgdTBsHiZQmT"
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
