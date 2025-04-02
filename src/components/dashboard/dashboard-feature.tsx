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
    "4M481vC27JJ6KfsgWqQPfUMvPJTbgbKQWzNnFP7mVRhicN1EfsQV13E7SWVNaQAv5fztJ2Ja7YEzDw3WnHSq8Kpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kh7krEe1sXHcVzEYE6BCfcxRC4GpVRJmTGvrQyscDmZJDme5f9nemrZkDaP9PLiZXwS2zi8vGNjyGWUt6tqntrf",
  "key1": "2o8HsrP7recs6GihTnkr6vQMrAZEwE3noPd2WQ5k3pwz5PFfAvSykThNRzxRC3GFMnYp1iPhyfFFKf3zeiykJfnQ",
  "key2": "4vCR5dc7na9FUfQLYWoVgEdfW8Wdek3ttgbtm54fde3r2mcRCFaxU8PenKFwTmTKUNzxj5TQwa1Xb5LMh4JVfF1D",
  "key3": "5fUUP6kfxrd4h6CsK3aNVLNHNv1HXB3TCwLCN7ABLtDcpcTvTNgszLTV3d9wWrU4BZgN6VkoN9mzpqKiFvEnHc2x",
  "key4": "eDVdmZrFCrXdKy56b8CRNcjangcRGUxJrMdPY1F4BQtEzcSURkZdTK5KrE3v25YBMdfQMBPYpMCFyNfseMzumt7",
  "key5": "4N3VkeoTJdcj7xjVGvGwJ8ZhkVFSdUx2AtXgjLF5tYPgo74MHjWiaodVyMtuLeA2oCsRkEZMnGeazBX1GmchRLN7",
  "key6": "5wMwhkigS65cb7GGiMJpp9TA3KyDfuZDGKr8eZYEi49oWu4oZGDhw8gK6Dx3mNa6JAJi1UuYHzoPy1gNdYNRoLt8",
  "key7": "wyB447ysgQ7wu9SyUNw2Z3NtT35tGU4Rai4YiakiHAz7N1Uani5q4m2hGxeDW31z2ZjKfNvae8gWqQawec5xkom",
  "key8": "4scDrYftpZoomKRqKxBfQvbTF9yJdvv54GvkC9DTYvfcjBfgZ3WczBTbBZ2E6yP6Pcz3rV8xn4HhaRWGEtArhAzV",
  "key9": "2zUGvAAEnz5YLgvse3mPorBtqACRhnmyBUSd81zMowLMTnhf8mBuLBAAmzDurDysFbs51M8SpVHett4bT7A8b18C",
  "key10": "2h6c8AFMttGYqTCnWDoTLsvi6cGLvEmkdy3jsX6x33WLnqatMARBjyi7PFiwbUiCEoPnB6ivUgCVyefGqdvLPP97",
  "key11": "xn7cus1ADMdn7YQak5p5qAB2dR6ank3wdMZK9YzVF7fCj9AKzfjfexBp6YzQcXTzzfTmrwGzMpZbvD27JDhNFfG",
  "key12": "5478A1nLi7vKdB1CLsYJnDsehEhQpdAUtXQqrPjED8ubCfginBGoiXVMr6jUn1ZKcpZjnKQpcyvAm2G46deSPC9L",
  "key13": "Nx7XY3DLVWUXkJkPYi69x7fuXaPzLgCYHfhM1auzWFrSQF2wDBNmoxqE9tNKke4zk7YuoxuJnDkoq8K1ed4Lqmn",
  "key14": "21Av4qmrwS8JCo166C51jeno3aT21YHxCAsfzZcpbsymTmG4nraZYpAZLNwmB56V3wELUkPwyhxBSMRorHccek73",
  "key15": "3t19BE9jmpTvTnZ26zQzcchJe8AMvdxSQqdk96bUG6G4gRSLnJLFuhweDiEm7Vv1A3ZxebqbPA4RerjQhUUzTE1e",
  "key16": "4gwndnYdrxs7454CdZBPu9hYyrA9Y6KjjtjzJysihgVKYHHj6jdzgdsMGtUtLFSmmnK8YUyLMDwy1snwz7bJKTjv",
  "key17": "55Ww9H7JQDYsPozojZ79tZ126ByLawAPvrwRXfWMjYegmfpAGHLsFvgDzjx3Se5Fd6AxJkPStTX5DxQGo9Tat1rE",
  "key18": "4kSvJWQEZ6j1LTYPrCtukMQvm42Bjf3JzZV3DnNxeER7SZDKnoqGg9vgR7G1YHYJnXD8CTcM5ZxxoYNKsPpyPLZM",
  "key19": "2cqnYBSasnZtRudeJYzcX1jJ9XPLrgehHHJe68SXcmP3oJxngEwbGZSSpzcm2FwaZ5KfxKADhXh26MKWueQg1U3v",
  "key20": "5hDHuJDV3tUguXJCzgSvgn3rYUN5xVTQT17UewjqhJPqnTAi5gyXFB3TMgpapj83CTnmV4cQ7KTf5GvNLY4YUEUY",
  "key21": "2mEMChSuhbU6cAvfAfjWM5vcyFLLWNAptyR7NwWsPfemMhVxenafk475ZJv4p3hzQKVoNkL3H2DqAk7XYYc7L3cE",
  "key22": "pFWdVAXostQThHtNAcMBNKNFfzunt97utTjYzchS82toNbYWXpL6yLtAf7iEnbPSVatmSSAqZ2xu6w1drs3wpDA",
  "key23": "425vjWheQ7VtiVwQg5Zd3B9NqZd8PPMDcnFuYNiQF7iyFqXovnXnFPTMjv54zVByooNWLgKewjyXDU4Twrrjwxdr",
  "key24": "1MqmgoDt7ogBJKne91cZqcZWA4Z8ASJthKAuVoKpKngSe779njTYUGLxM2hVfHE9vmu2snkKsAtm6M4KcLu2HhC",
  "key25": "7FN3Uq4ekkbTFNaKYgQHy5Br1zR2xBLoeDXg1z5iZuTZsHnXMgJdQ9iDQA6sXCveMe1pDruxizxAkbJb9wexecC",
  "key26": "2qdVENkW8kRz9dAfGaESdx7nEzptqfxSz3GV8bxTkeeVPKxk3TF6EvwSxS4Mt47GmxGtKP7c5zx19PrVoJWXwsVV",
  "key27": "4yopBWXRQL1SW73PHUjA5mKgjr4j48KcsKxugQfnG4B6mUAwqfXuioHEphqA9c7KruNwNkVaQcAJ19AQvsNsVugK",
  "key28": "2qTth4tZZqzhTdLFAiKe8CEeScXVxdeb5GD17GqEtwyHtMB6FJd1BL4vpk8UVDeiYV3CNgaKZmjxa1PUMgySehDF",
  "key29": "2uFgtYtPiWYByZB4fpP3fWr94F3rM6C4v779KagEFxx8cC9UgvyMjKhcn1jJ9wKHxzuyfQpDyqnZnxDR1y68nAiV",
  "key30": "4H95dPH7mmQ43mwcnyaK1KG5zsWxB5tHwZF3TNEobbrdrEKVKg3KpE3snQA2VQhjkSpsGiAs1kgtSBo5HYPd6kBj",
  "key31": "2EGTZuRYQ5EjPSVFLA7hFC8CPGSM3kAvjJPXZPSHMYFvWtzuwsqf31BCUUfjJgteqA9caqCFZeR1v9oTErGFVBSH",
  "key32": "4AWuaxKLHhoaaKZZQWDuQnoM2sBhQmdAJ3r8HiiTavjtnSv15nWau3KsBbR5R3yzmMwjVX9HNneayM1hQGFsMEFJ",
  "key33": "3g868C6fDhu5TgUd5YTo6vrtevj6ecHJj6124GS65Gmr6zDBY2JS2nMpqXEVoDUwGrZLw2TM4q3A97z8Sr69bcZh",
  "key34": "5fjEf5dwjBg5iLysBPFRuJjyc7ugUWAWRfunWrmCiEaQi14hii3seWKsAzYagytSj4ywGmWi46UTYgcooWerymGZ",
  "key35": "55m694rvRYGQgjVDkcLB3vaHQ82eHougE7vfFrkQeopp7fETaSdu9hy3g1DUyq6dBzzreJ9n5dUzt2KyUFPFfmQS",
  "key36": "WSeGST3tSzp4H19hVZWMVXQEn31DJ2ZGQgGMBo4ntotwJMGhuZBAYD9r1jcEkUY8fZDmB5YvzyiGhAWmsWP6vxX",
  "key37": "58WPviz985mcH8cwGepvRMw89w8tLKJJ8h8XtFoGBE7qHWhVdWLKX75iaMQgU17cedsHtfzSN4Gj77FTfpFFxChP",
  "key38": "3TqhuR3x3qecLX2jzR1YTGTzWL2Bw6op11gmg9vc2F8MBqkG6FcN6Evh2WC2JwUvT6crr3BvA6Kq1mHaCWFcH3bh",
  "key39": "3nwRCwpP1mqAxt8zkodsmNy68vaUAjN68sQiD1gQYpHBig9XgsQW5xEJALEFGnrXT7Rp1m5r1qFTyANkmbUnJhXR",
  "key40": "2RiYBVZJwiVU7WTBX65dRPdWUCFXZ9UXt97nmFEr2Pqu9RF9LdYYKQgLAM6BXRHpR4ZTreQ81nbpjHd7owQPRfNi",
  "key41": "5NGSabT1dWFen4eKBhH8p5PPZkgRvcSyDZug2igsTpS3eqw82SWWnJBKQtfmM4Lc9YyCfsHScF87mLyZxSFRWm2K",
  "key42": "2YgJ6hMecj536MA3MhaYexUSr47MqLA96j2JjeUW6JFd2wHDbgNHxPRtuJ43RCeP4emypAYgc8p5pUm1jp5dJUGx",
  "key43": "27RSdZWMkz8iY3BDNvJgdQyZseET4DdZDeqkC5heVAYkMM7h8pasXWmWj7EAzzCAvr59Hn6kp4d846LLmHuNEQfv",
  "key44": "zEkzErdW7FC9JKq6Fnog8pTCyJ5HzXKkNM8eNmrA9aAuNivj7CZWRrMXtU6RkLzGa1N6dL1kasJNhL1BTn2nAea",
  "key45": "3iucjCb2bUzfMZwzhaATGLQnvZ7FCmp9TUkeLSgnqdzzXNFPZsPVcqukV3JDCf7Qrr3qTso4E8orv8Cbi2xYKWk6",
  "key46": "317zKgpQAYnDmw9d1b2Hy6r9LvCRtAXXp22rtwbU2YxE95TShE8cUZWAPPp4yDQP6U6nCPsTm1CWNtegtstARU1t",
  "key47": "5XP38EMWf7M4be2iviXQHfMfSKp3Eh4Vi2uZMSnsGzSDZc3S5XJS56RbzjGDdQB4psetj1Uq6Nq8vAVsT1dQc9ia",
  "key48": "bAX9GgYCDMxnNt7FsvtKLrZGhoiQ3zVpSTDyu3VKvHMcAqsPRNVLgnm5xWwowPrypGwxFiM4LyrJRNEmeWi2ZSr",
  "key49": "5ohY2557oBCdKAf5ADxy9aEbnx6M3pTz17fPAVP2crNdpHyfmiqCg2A6zDaF4FNnZQeBoUoLKuarf5bucbV7vv6Q"
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
