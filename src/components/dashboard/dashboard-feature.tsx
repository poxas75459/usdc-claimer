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
    "2X6DCfxeMYH2LnFKnwMBLXGPm7Xux2jZrBDC4HaGzkQjqiT11WU3QY3pwGNekJKYAMgpdFewLRQT4ejeQxrauXVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7XmgDvqdaGG2Fvx8JrFMkacaJwzjaYrrKPtzL9Ps4k6ndTGTbrPSTboKw1vp67CcWjM4mPM79fYt8q3TqRgSs1",
  "key1": "1LWhuRJDCsesEpaXJBVC3pqcACTgXAf4KkXB8v81fjHYsG1fQYmqjT7qvZgforQdHybLsXvfV2cMp9PFtTSnSzC",
  "key2": "41iT1432xn6jDG3w4urprnBLohLT2AXLLuPFTtPm3mVxhGrUtgERu4pK1BL5xtG9MgkK1RWiAejkHgrfTyBUzu4j",
  "key3": "3kGm5EYXihyBW7S6YSUWNX7M3dxgFs4zPXwTvmqXTEg9uDSQMVvqKx7t7rLnFH32vuVyRv8hYTKSwqzkVxHsEd8z",
  "key4": "4DQNxGWweHfe1rNvc7q84FR71AFAAeW3uMBPrQLpL5UTUTP9EY6gBABykJpkMsJUxV5R9DxcSAHjaoy868WNQ6W9",
  "key5": "3LgGqVzKgx9Y5yE9dUazW2xHqvJ1usGwpd6VVcmx9xEUHdnyfYM2ADK57Vh1uxbabLnDbiQV9ST2GRoyztoU3VF3",
  "key6": "o8QZtA4rk7sgoVM2pDJ1DE3tno81TkKcG52cCzd1ReUbiydDqFVwko7c66j9nGbhUZfwaRRb4NxcbwfTEryoxrG",
  "key7": "3WoXW3NjLQf6vFN7wSpJTHYKoQzFd24PrqDXqAo4Znks3RpD5w9zWVkn6yQ2g9UUqMmkWQkuU282mcicc9uq1Pfm",
  "key8": "2pKkkDuVhsz21ZpDQXHZUkLet488BmAyB21RmQ3ZNCyFXSccp6vZ4AxvSP472ooXHuWq7viTRqMP2D6pcvnsinC7",
  "key9": "5nVmdRtkp94tLHwcCu6hQpz1c51dUwLMSjHjGvMdcik1fKaTc2Xk3cFyYrP1CQE68oPngiMNZeDvjTLvTfisDfiE",
  "key10": "4MVS8ztpajodKUdkKMfb64VpQA98KNH8iY1nEfoVLCDAPivEUsNRuC6YyLEkg19woS4jKJKvfjZwnXnGyxprXuzt",
  "key11": "5pBTZzAPeYvVCPtZKbJUJcSTZCT6JVaVysikrsJpE9KtMD689tkU8CLVDqehEpR5YpYePyVKyEhJg9xLGfW7zXYK",
  "key12": "rhvtoYa72ky3dsm1dPF4d6VHGc2ZJheJWGRoZFK8VkCna42q9kTeyj1JHsRGmcgVpo4Dvqtr7oRaAG9jNjCmP72",
  "key13": "dsjsjvVfuVqF4Sh3f5JCNn1asPNHsqiDctRwgryZDALncicTCdezzJijEksjRSzUAdZnwSWMjPrfJm2K2jm9RSm",
  "key14": "f99b9z3fkNBeQzW3XqD7krKJ6tKGgTudnscH92WLowkFAVRowMA3RTENPiFh5BbQv295A93KVKHn8jvHBcaXzcM",
  "key15": "58wYSbRVvft5PMNq3JyDPeE6gvzvXyjqwkWNybHQWMjkPmm522dwaRK4a7dT8265KvzGTnGK4TejTQAiNf9RgBow",
  "key16": "4VnX1KG5WKPGMCDADmcp7RVFwbip7WEKCoKBy5zSzu51ahYAvmus6He5hkgVQU1AAkNdKjKmJhVNSFkqMxozzbhh",
  "key17": "4qLGr29Qf3iXjzxWVNeVCMpsmCjSqcGgqgEJuYyUA56NVuw3gXAHvPjViAmydKQxRp4YqV5zZbyxAYYZ72Tr4qLT",
  "key18": "3GQBs6qQbBgM6oa8XZqNRckGNTyuB4ZfhFkXo6eWNros5FcfcCS9wu5u4E2xv8gMKkacy55UFzpuHkKu5WifdvYN",
  "key19": "qD6FUd2hKB2KUZfPqUx7fxZPo2VZaSR6ixSZ3KpybrVaoh5Peef3J7cKRsnDwHPuE2E2RvEGtiV7MEuYLmiY2ND",
  "key20": "2STaznV2kEXhCwyWmqfyc5jgDqqHKwes6j9NC9oscTsCv7XnoJrQV4Yoc7WFs9KWZwsa9TQsJPyJe9W2eWL5Y1r3",
  "key21": "vKJXkUk9Ciqa4nEKxieFvqLN6PfjMTsAWe3KPiEaupmfsyeNBAbaHNbziFUvQQe5CAA452NgyopFKasJub3y67w",
  "key22": "2JioGhiu3Y6fsB3XqPx4EsNL5fcUhDRcpRXi66KEKJkYazpWDKBjg6uiovyUJ3zu8UZx5VZSJowL2SC9YYe9AiAr",
  "key23": "2kT5zP5BFUkBsNiYtSRC3Qa6uWi7389wxRcUduqbU81rBd6zkJVpyeiv12KFTzSk3cQkf8yos2YvuST6KE4hzi7u",
  "key24": "3UaSqMy4S6BgZgV4vza9vFK1rEB3tWmNQvhPQHnUM57LrBpuobr11CcQY96EGGWFrFUrZhxLucuhiX6FWE9RzUJw",
  "key25": "23GtrNRZqAUZR9mHn6EXCmtRPJq8K2s2YbbNjdTd2hbrsvhS71ZehTuJBpRH9tQt37bkKLNRinJAXkWVKWyT7DVK",
  "key26": "2hqhSiwyQ6mcfhGXcSyvuvRGF6BRbySD5Fh5T9qXszWQJrtifsUBGA5B6GmzGTKH7xuPt3qDwy8PRWUgPHcMLmMz",
  "key27": "5Gy6EnSTsJc4MWiTwQH53X9Tn3Wy3DmadS7b3myyP7vKALCGVYMNysvBcaWmE5Aeh638AeSjk6FaYeNJQB3NTeZd",
  "key28": "3ZvTi8rhzPQKXw2wEUAmVpKM14adchhPPsHZTfSz6jxirQr7ZHyHX6FKscukxbRuAF2RaioJfFWFg5UZdeSmAAku",
  "key29": "QZbAhD54kKaP6qMkbKhuZbBYNVwHxTVsj6x6XsM69QvQyEkBSxaTahDyMHn9VAKM76ZYAUdbRaxfhujtS2Zvvxd",
  "key30": "5t1b2rQGVPk7195muJNFXp5XhUUPL6fDdnuuh1Yk4WoqnjNHcwYrsNWbR8eTnR9qaNbAgTqd8i9dLwY2H93SfEtr",
  "key31": "2KLW3WUKN8FCVEJPmE8pvC9A576infLFRGaXzaAxiF7j64S9sY4Js6c91Yh5vER2qErjWQ9gAEQvi88ff2gR2ebE",
  "key32": "cL7NqkeyNYV37CsZHLenrATKFEpbKgGbr3sd7c62oyJJg9C2TQAy3qCGFet3swSRy2VWRjW5KqfvQUHzHKJL6pF",
  "key33": "3tr6B3bm3pqrAHjvnPUhHXcHc9c1VShNe52jArmC1ytvgrWzbhdGGECX2yyY7WrkhzmY6o6pLvaYcpZUarbBvwbs",
  "key34": "448zKGpg16E4j4HCMwmGS7dsBL9XmLch8WTEJ2VJhUbXNqNuyvkvvLwga8stvPc4JPTGAZ9jwVZdTQ3z45AhJ4zN",
  "key35": "31GG5kyRRhmnDN9c7BuYz5PZgptBFRZ6G3ChLerzLVdtE3H7eH2fm3un7AUjangBxbY4KtSqhxZp62Sjz2nBAJ4k",
  "key36": "3Tb7uCuS1qpKgs9JcWxPtE1ZT4GcQ8HLbjSzd7nwKhWu5XPKHu6pakmaUfEawkwS6Z6PM3KJCB8Kq2A6Cz5QSZd1",
  "key37": "56jLco8Yi87bhZwVxZjn8xTLKHvw4weNm2Ra7aCFqH9KHVBHf4FmfnZj7fnA3RQhZHjXNA6ddAMgv1fjJ7tp1iTi",
  "key38": "4vQZAMKV224cDFiCTSb3f3UUFVhozLwuiE48QZ1teWRxGUg1TKcj8Z2Ciim8DMsTRft2VS4TeTTiQq5nZPrsDopE",
  "key39": "3uVjRV2eCfQLSAHvcG7PxmktsC6KEqpAFRxLtvHD9mvtK6RmqNQdtHimtZdwxd3C89cbxFRR2RfJYfQTfkVqwx16",
  "key40": "2hx6agbQEf3m6Uw7wRBrCAHCCseQVBsSct32jM82MicM9fXd5hGW66tcfuued8PDnewADjEL9jAvVTWPNcev5R5u",
  "key41": "unnhzp7S71QNMxxA5hHNBwN2GucFs5ZFmzZyCqa9saX1mTNWR7StSvwQVv8DRBPUPHHwwkQspBGhdBWybSQtCsa",
  "key42": "28jMWEHotizbJx3aUC8tgTE3t4q5n6iW6Rj5GDR7S29G7N9ppbXmTwyrGkwiTswzhF6qLRdGMrUa8D4cku8M9neY",
  "key43": "4TRGV1q7zCa4qfhE39Nxm8gXSijceAiqmp4F9zEshKAqV19Aa3KnpbYBZTX1dCyoX3g19sijHxRKxY48kQMck8fE",
  "key44": "2XKCoMUp8qZJmFw6gni3ZhjtvzoF3GD5ZJR2SGxHV7eG6MFptacsztYs62Rc5zwyVFb5UkXdUmvd152WZBQjKMjE",
  "key45": "Rz1EaH44kbsPpGRNTH9HH1AL63AciiHs1Zg7MiVHPZL89DvsoFKRpa8A7s5Dy5aznsH5fWb2XMwzcwavgTQMW3G",
  "key46": "uVoJuiXQZ7ksvkMYyzt5E1ivyYNN91XmGt4U5ZveaQNxWnVHVF9LXGEwb1zrV7BnJJ69RPZ3nHjJDwxxhv5Sjdh"
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
