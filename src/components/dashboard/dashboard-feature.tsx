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
    "264FCrucqWvzgtqQa59KNyvhJcv4aP2o2av2uwYphYkWuToKpyHvxHNHxtXBPgGb4H8EvVtyDCspiZFh3uy6LWff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyDCvrJKR3TMeBEPP35E2UB7bHBacTFc6kMup2M3wyZzbdhAyYQ7pxs9yUAnRX1UxjpLo5KN4B5xaYVcXuAkSTs",
  "key1": "241XF3NKHCngwZ4jskD5hqvJyQjKjaoMJhLVE1G9aVopYhxx4GsuYPsPP5ij7nDY7Hf75frxd1bBbqbGHinbZseL",
  "key2": "2iks1tce76sNfi115v2WqfTnouSFraGGTxHV1KjgAPjDFeEBLLDCLEavfc7zCzJE4paCwoco1XEKAhY8HonNY9Q3",
  "key3": "dpxszEHavnGq2rZvz64Kz8RMLmf5tTLwA4iMJRBampihXwZRUDT7SyaQN5fGdxW8S5KHaKCrnBWCmeWRUeBBpwK",
  "key4": "3NhE3qAD2ccJoAvDwbjKfcy77gKREcUnzkXN2zs7jtC4smWW9P3UvNpmFUj2SkJBCMphobVveJ2fgPJrb2LDJDZm",
  "key5": "4mE5qk5fTbZmaChMYaauA5spNe2TXBaMfK1KC5MNK2Rb47f8fEefJXBDFRGmJ5vt3f1nqVW7TS5nQ3Uh3Ey7gQ9S",
  "key6": "LqQcnR4DCnYARqXH1sDhRWjyJnKZ7cWY8ofkE4n7DNzF2phDwBSFgqBwZkiPwNJA8Zx8hFVqzUYLbmVqVfJccYm",
  "key7": "2DPTRaupH525KECRKKT9KxYmvZhVhMvFzRVxS5rcxyJoiekHJ985ARSYzM52su1qqyT1zFHpWmKk9QpsiHxvri2V",
  "key8": "3m7734NBoRDjJSCUxFs67euHjtSHU2XsJZ6yquyTQXSmPh3jVPKkdcQZL8LnvfTsGXjrq9pGcA83mkHQBDmZhniH",
  "key9": "2azEXMvTGSqZHtkbXYwJfAX54dGthbDzaLgNtKgTPZce5rbd8t13tKFiFW99kofZHNaCcpgWGVJCkG1exjKpGRfW",
  "key10": "4yxzaN57nV8bAKxhCxUWQPEAF4EQiXpHbSu6DybvKDM9zjh6zFrGXovym2UhCye7H26BvxubqSHDfYRxtPCL5jGQ",
  "key11": "4cgEHLZjey2a82YtwysuEsdN4zJErgs43ast9dopdnLx8x5rUCJRhe8HhygWDMbnNUkTMG5RvCcjGzmJdJLRYhe2",
  "key12": "3uYjyrww2Npe7BSuJebpALRH2gmLZHs5zocTkDZX2fuz83cHwUegKS5ZnEh5p1hDBkAmj7Gp1PggNg236h2UpLds",
  "key13": "4QZEVJaaJzn13KBNen8Lbnbbf5F6exczS4PMnAukVj6TvougqiJ5KcgWxce17YdXy1retckYBaHiQMVhgN49VpvG",
  "key14": "hFBu8Buykq21SLu7QwbD6dV9DYP39tyt2asJn7fB1BJdBELnD7vB3Yd9JAuobcspARXag5dYNxhihRryjP1q43r",
  "key15": "5v7PTCB1ygRysi8Yj4Km8PEjJHZzCa8j2HTeXC5wFRcMm4K64NZ5bDBzHAiFea1pn4qJUKHaeHqH2UBFBDLkPu1S",
  "key16": "3gP1nNXbh8vPsiJeiSVyf4CCXLWMq5vTZbGrBxBbBCfTo36cFhkcr3nQinXtQ5MCktYHH1krcLBfidd6EhBd7o5b",
  "key17": "4LyjzyiiGJt6P5sDPii3829K3mmA9vmdHoweP85MeNnbPWJdKDdaUPzRjjayfqUxGxxSH7kzxQm4zMkZ55xCFyr7",
  "key18": "3RK2N9Kvg1YhtDC5DSi6nLptB7F7oFFb8i7hjKdCCeAmNDtUNpCAREFjeQi8uhjxfWn7NpvfEo55QMmaiBoosAKw",
  "key19": "2kzyGJXaVZejcjR53k48skpgPb3mURzoBCCeDxVR7bbz2JEu8kfAFZSoKgdbUnEAAi8MUFy5WsStoXs7L7BLYn29",
  "key20": "3FaDhBnHp1KW3x7GDaXCK9h4xFrf119J3zmcT3YEMkH4hDwCutm2R9JkxnEiTU8YNMv4EGSBAqYpVhnBuZavqpia",
  "key21": "5KcQy4tXLHWhX2r6tWfZ6b3ewytcRKVC19LHWYQzbHtqgCWKYpSzXgFsK6NG6ZjqvxeDuVXbpyEwwSrk3DTsXssc",
  "key22": "5uHLwkBFndJaj6gJxwpxNDXijghny3tGeTkcUhibTTWU6LTXGu9GciWXz9omrWGmthxf7FzDgQWvDZqy13NQsTN4",
  "key23": "3utnPgnjVdDBckbBV9jTcEqh3SJzyY6Bh7FKBcEamkBCxn6dCfhYHR4izuemx7FX5r9DEv8FXL9KgADmSRbVMnDC",
  "key24": "5pWFpUA8uL2kP2FnyCbJPnYiKb9TjcUEU1NBwdTUwApZJTGGMY4mNctSeMdZhZaTubTwkcXcnMDxNJvFrvVqMdrd",
  "key25": "64wZ91WfJNTTUV8xTbNpWLj7HQ1sqttzNsLU73sHRf5hbLt1oWA3FnnF8PXhRKh3Ra7srWQgmzsKN87u496hXjY",
  "key26": "4rwJ2khmYC2abEVaLzoqcnYAgCei4xHCb2s5ocGypzBARq4CiiP6QLh7CiWDLGyzntkQQY8F9miZjyQf9LgZj7Te",
  "key27": "L4M2Udrbc1BJRvhhUsrRwD2XWXrz3Q4XKJ3DTA7tnKNwWvcqVw6QW29dFzBjfh7tEcvir9svLUCR8ub5Aa8vZVM",
  "key28": "FmPVkZ1NeLvHg7p7SGzbBdVYyqTsZ7r1gMZVLFphH3LMqykXesjwTHgDrPzLyiLMpuGbjNLTfu4FcdXwTbDYNbz",
  "key29": "35nmgzeNGbxdBTwo4VbhtdmnzAx2k4AAVbCgorRGkcf3wotTM1J9TFHzGo2deTjiWHwyqUuj4wh6kbhZYiXmnxAt",
  "key30": "3roBQSrbKyeSKHXR37yBAEkMYwRWN5WM1kKAkRFZrv6s1uzUk1WVkX9FwuQENnidtZMcd6kUauXKNAg91ZhTghsw",
  "key31": "jESVYfDeXGX5X7vt9PAY9EP5buE3SvxtqfHzxJYbt5PoxkjfTEnkFs6DJ4uGEq1n4mepzCSZwoz159WvUP2UJV2",
  "key32": "5rbtdGEyoNvdh8C9ZKvN4koE4XNJJzPuBRH4PR8AfcdH2UDuru26vmJcQDCrnQ1kVraTHRGi5DXeH7jqFy6vP4m1",
  "key33": "4UYSdBVJ1Likn2qGN8k3Jc5y4wVVg6VXf6a5WcVVRk7WYw8Fth1Gsqpz19g8XfociYg6YevZ9ANuDf6pLJGS6Zkf",
  "key34": "DonA4GotjhN58iqvs82uciTUmfhCgDgNbM2dqeVyVn46E5smrB8eqpiW4HAcCW1xyaQBaLCRLVtgcjxow3txByd",
  "key35": "2zLoJnc65D5TBM1ADGnVKdHnVkLLgRefG1UorRg81gyoofgybHkco2gadENSHCHN5y2dnXkfJnrwfudJBN6MfHna",
  "key36": "5zPZsPRapu48hZrpfQCxNz6b3XmVaJbQEUjZb9PJmHH32i7SM8JW5a3CU6TGaJibEzA5sXd4d98oVRoim2moxkko",
  "key37": "ybcd8Mc54YS9eiTeR1RFjtPtQPAYz4EMX1ZhcCzZJydJtjzH2XprNABmeLDyfjotZ9QJ7s7NUn7wtYnX85jggvG",
  "key38": "3yWgn9qSugqCXAF3wJGavF6jVQH1b9ZB9crwjG4Pdco9Jk4tQoC8w6RQFxZGdrfhPCXjBD4qp99V33XxtjxXHsyr",
  "key39": "5mWfAQkcwh4dipAFq5s5ZEJXxnzJAP1hr9iMDd1f827FNxYJUj9ch8JDfGejN4aDc5UkVkpikGj5NTm6ryhQhW9W",
  "key40": "2j5oy2PACqCf2tc3z455mTGCC2mQCgF2FYQYjo3pq9nXz9MgD8ERmFEuu55o2ph2xeQpUZL4mcKkmSHBW3CYN3tG",
  "key41": "3S9K8LWqNcCpToKiRg7wPaA1CQm4B4fnk3C48pzz3r6QWKmwh1j9rBGbHX6jhCByh8bzxkihKNwMEcpRPnUKRG4F",
  "key42": "2bQTLWYAtMDAe7eun1ZtAvUqef7B7V1xeF39FU6Zi4m2CLEYC3cD8JkBHUnnY7Jge3DoYfLmyTtPomsMMDs9648E",
  "key43": "5B6JUBtixGtBszjBd7GJXHxTazSSB8YD8QSCgtecp5GHVL5Yq5o7QB3X7qqXePPFeFsR3k5e4jHZD3MjWtZmXhfx",
  "key44": "3977vG3PA6MQgZYDWezVwnUbHNp9ab7LEkF8AVpsb33baHRmEUFRznYvmZeMB8rofwSr57z6RFSw2nMaPyJ4ULoH",
  "key45": "4u46EKyuXBvQds6YZeYmf12RyapZCpj4UyYn1rZRA72Dk3K7tDSRMZLPVqyoaM46faVKo2mbkuUL8RZGT7YfJnHT",
  "key46": "55tHGbgzSZFiX225aLhgCWJv6rY2uhXcBQrRS8wmKw59GanXquR3iZhwxnbbawavLXseUDCD6GyP1VrS3EgHM1dG",
  "key47": "3dFQSghpqfpFchSecJbgyg5CyRMBPvs7e1wj9hGn5okDtgG9Qh7sh28zJDwXGpSH9yqgBxbTyysBNAN8VEYq8zBL",
  "key48": "GJZVZknV9deP6uzsw1FPRC9TpRCZkZA25Rs5Wf8Hx57uT4myrCtVqDpkxxo25LsHdoMsuybeRR8aJBULGemtg1Z"
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
