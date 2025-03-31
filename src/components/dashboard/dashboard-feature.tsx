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
    "3kq29eE5w2c1i7kZ32AR1PQhMgfzGBBo2zDHBxDLjhY4bvvM1V9gfnXVZkXYNdN9KGn7VqYse6D5QcTo6w68qA7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zG6rjCzuPL2EDBoZWBZLaE52NKcjNxsFiS3bwDJpQaFzxxeLti3v61gfxmDiUH9vZofdx5xKaVJWPdTyXcXtGm9",
  "key1": "GK6a6VNzvbcKzY483i3KjzJAnMV1etF5C6Lwu3Ha5DQZkjA8JS5dEcRLQyowVjh4uDQGdPc24wQkp9hz2pyBmiz",
  "key2": "2QELQVmYBUDcscxyakC1e2GioX21Xz1Pn74zPs1YnxAdZTPKm4MCnp3NHt2nYCu86hFoWovXzm8mecj9nk52ESJZ",
  "key3": "2bBqLyL1WCrpvEfG1GMqdxKWnhxSWSG3fNnBQmhXK3mm8HRvQUDSLh4NucAPKpXiimeKi5NWwdmEgRVUVC8PszdD",
  "key4": "2oUWpqja4tpvLi37WXouWvygjRF4dBziawfqaL5P5GEbK3pC9p7VVvWirLjKz3SgdCE3qRg7daULn7dBYoHDpijQ",
  "key5": "5HwMBJS1wSErfYkqKUVwofS5s75N1RWXuuNu841YRUptwZ2gwDhz4bX4kdZ7hSzP7C6ttF9RHHJTQArV1g67zckA",
  "key6": "5ZUJdLLr1fPdVnpJL5xhgPjtDosPEbKA2WuQosWhw1kHpmvDH7JPoEiL67eQSrHm3pqVi6ABA7bzmVKqqhMXgXVi",
  "key7": "2q18hoJAmutHUFDDdsELfgDQ3mXL2hqtuT5wEGNN9AGjc6czYeq29dRxUMY71APaLmRZ9UpftrNCXiAZNUDWVMwy",
  "key8": "5PK5umx1cLFVTwkBWJKH69MtXXisX5D5YCnJZ442wftE9b9MDsBg9jaeXDYAytToHJ8qpacFWrErkn26DYu59GMt",
  "key9": "5C2VmenZK7UJM3zpirMxS8Xep6wt5zbASwK9c1DVupGCotpnUFsLmM51DCi1adFYF3gFsaTUkvR7UzBTekP3hww7",
  "key10": "4Nk9eFVKZVh24t6UnVDqCTPCzGSq6iw2Aai2cnXJifJee2YVj73UHs6zk4cRa6YLmh5d5yNFGvBuvD4Lpv63Fwm4",
  "key11": "HaoKU7JtYhRRckuJuBngGVXARrRV2J5dxVgkP6dPUnb9qWMv4D1hVkmwBjt1SNM2Pz3sdoD2dwPBxv6wQwkoME6",
  "key12": "5BbkYjtz3Gn196xwmJtTDMGEHgs22Eioiuyoy4dS8vTeKV4T1Zxfrhx6VSXK6LELyP8sxfm2nX71iubquJr4gUWg",
  "key13": "47bLW3EnuT5ZTgSA3X3STJbMPxSJqnnVeDByK9bYCJWUbBYDrMr3Zt3qh3maKkjLYxnXWkiGDRahB8d4N7omnYDv",
  "key14": "4LZsPcdvzfDfXL9axR1t97z1wohro51fyKCcBRsrnyxFvXZMQcYxiKKfG8ikFNRgqwpeFQczXk6TaoCyvG3iN6wc",
  "key15": "2aTsXiYECc62kEFy7EGEFYirz6fhx18JER9kC2CLvq2M1Q5DptmeNW5vm3BHMaKR3jfwmz9jWZLxTUeVXS5yyLHc",
  "key16": "2qVGWoYnRrxFD311idNoNQJA1qMRPR69iiY7hjuUmiticVdte1Q7bjfxJXuy1kPQ74MSNQLG7Zu2BzqHQZCvKgWA",
  "key17": "JNAWaVcGVAPy6Lygeam1LqUHnNoLVMmNgtVs1RJvGs36jZsZxsXXXmgn7obX3qduhcH3hWCj3vL9ju2uLcWMYEQ",
  "key18": "2ptYkdwMd2rtUWaJSwxdGPDGEEev3QdTeBfSpR1LVuv1bGhFu9AMgn3kdvBhNsviNbtEtFQrodeobRw1Ym2gFA9E",
  "key19": "X3nbVDbdpn6Lo7F8VoGsgdkQuU5Ft1Hu5hLqUWqzYEKbBx2heW76ZKDun9yZPfW8yqPsQgvyCVW4UkfXapLDx1j",
  "key20": "49k2CcamXrweyyyPYvLo87G2fLCL7zStxsJCUQZ1MQY5pZrN1bwCAQFt22Q7KJLDcwS5JfkrtxcK1ejB4fceSSvr",
  "key21": "3oxc417sxTEN9gAKSg4Hs3L4Ybred33DemCDci7nj42sjQwKGxMBtKF1tjytAWbrXNQvn3gB4MYYGyPovUivYZZw",
  "key22": "29zXNZdpwnoJAS9T4F8DAtQgnP1pL4HVvcHNmuBNUParHM11oTdatZHEUeWkjhsNpQUuwBS1bi5mLVFJUHu5EJba",
  "key23": "3WuEUNg9yx92w1btu7seWguv48YB24bfDcRu82KV3L6hDF8pu9aQrjjGjB7utNs7hRziubUBJ9djCScZyQZZzMkT",
  "key24": "2PvFZN8QbiToicQZSJdjFrypsM3xq2VaGXV2MkeKYY26DY18pg8iFfc2J7EQvJqGjHzSFjNiqL5iEjL3TrXTRPK2",
  "key25": "2k2Q32bwUZB93AFmMRstTE42n5SZw7Sa7HubxoXLNTh79azim2N1UzkjEpkPgPaNG65nLuXyhf4m9mYZgWqydpHH",
  "key26": "3ZLLojhQfUtxQTehSttW4r44GKe1FPtGmkNGTujUqvn5r7CfN5Pj24R2R3wcsDsgCM3XZL2bmB8wxh8GxJmmUKQb",
  "key27": "4x2GPwoDz7egtBEtyyUjKsvETfrAJJeQxX3Fgv2oyTB7Vnnh8HudNYGGo6boLdMQMUifh3HxVQJNQ5Tc8NxAJR3X",
  "key28": "4HfHNECNvg1JgVmgTCjkFfv4PzJcVCGFgbunp9m6wwNgNsZAGAiWjUC93R5rAg15SfKAskWSffohDCZc27L6fiC",
  "key29": "GUXsMVV1YQ9LCHXoNg317gYW7U3NKDRz6eWXXz7q1vZ2jXkY5zknws9NBejqnQLQ6zZkH6u9rymkUDXxesahuuo",
  "key30": "2B63J3zVmqmMfGc52TKiZ4dhfooHXpfySLtx5fQbi34VvoWPN4bAXGcsZnWy9qzZrN2ZVJafgZUGw5uY9VHXLPvT",
  "key31": "386YCWyGLYAQiJd1s9QabGLJ48p72r8Aqw7LdZuvSqhnv3uywsqtEZB8uMND1bFRNwiZtrT5t8dgqBpadffH2RMd",
  "key32": "3AJHNAd71mDeKp31D59Du71Xikip3NGCjN5ka9TqTYHRMVuscGxn5iWxT6kLM49Ybx2SNaLDhMw75jym6DxoCoJ8",
  "key33": "5C9Ujk4Yg3LCLyyLnfKtg9PRQMUhv5iAfhbYjzMTBmZXYaRHi1QDkDUi9Yav3qtbk38RSsmd4FmeHHiif62rYq92",
  "key34": "3XCD8TX9k9yZfeXbuYRVWz8Dr7H5NzgURdGhKNiWAaATzkCZxD2tAoCQBRHWrgRqU79oeXo4oAh7bMSYAszbpJk7",
  "key35": "2EmXGQBGM7npommfFCATn9HQeKpAFNurxoaBSAq22K1MsPiEk7ej1RGPLqrnRfmCV4JcNExjCmNX6ukCjgZ2QjTT",
  "key36": "baaocCYDmG4scDZxGDJSqYeXJM99GtMxgBj8jPGDtRFarysyhJRkYSvHuzhuva2pVe6cgs63oHo89yBm5qnpU1e",
  "key37": "3ctqiT6XPEd1kHGEY2u2o3kpf5R5w84W2VxydgVh4d6Rd3aJU5eeqbVUfeEEeRqR9eymR2znxa9ghEC7VDaBJuZn",
  "key38": "WDMrjxXximgap2xXGFMHBemKN9kG4mid9Vj4bk7h74DVZN6hbaY6S3PAUcobNXReiCmaQMYMdAVw8tWFRoXvy2t",
  "key39": "3MvKbFxU8CPSZP5FVhGLRJK6iqSLee8RnNXYxYKN3TTDReB8ST3wAUV4YBD2NKrTnazDTJxiDdMj6EbPrA47s3MQ",
  "key40": "54U3eshMGt7PuU5aonsMZk5irJ5Kjx7Uet5ETqqujHYuXrPeLxCHPT97w7GGfxYzLAadan9p3dQxn9NK7GHSLWYg"
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
