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
    "5BXPdmviASQxctsoRcXxgzwWfgSvRBDgy2KcJCcL1DadjbQ3cNUJNyeTUiQnLiw63qzWebZx38iyJmwKUWPDphSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W757LDMKBX8TqqWqn9A1XcqeYyU5U7K24fu1rtAYtm6Fwyn2YNBM5v1aWJn5JPCwFHeqznXsezHMugLnH8EMcTj",
  "key1": "3vYY3y2fRwzjHBQMvw8katL8uz5531Rf5S8pSM26GzKqu6175W2djAPT9qUjqWm32ju9m3L7oHptxhRuMYoRauZJ",
  "key2": "4EWLoQzWVwbMeViR9bye5cw3oon7JYMeSr24G5yLM38voBmq5U58dNDthWcorwCTYQAjrMXuws5kqxwNaBYGqFuB",
  "key3": "3Z6YbQ8c2p6BDbfPhPY6D75uTcupFwLjUBgSrSErJpVHWzXaBChdSVHeeeSgMaNjYVQMhBnd3551yVVgDGBB5Rot",
  "key4": "5uUqSVEn4HCKnZt2ke9SS2iA83RKaFvh6h245L54SegZbrfVF9iHRmLTnv5PMRvEiHzoL8c6cUsguUnVNoxnaU8T",
  "key5": "4zNm6Nkg6BeCBBjwGgEbGJGsrfFTJo83m8GRwAtZB454Tn1j4YjjwyVNkQu1TuwisVARuWfbAS9daT6Pm34NhWnd",
  "key6": "4vD7xHy6HC5wR4Dz4L8YNxUfS99nFAPmEKJxkRET3hcPdQLAoL2BW2mBV9GEqCYjm7qCJJcxTJKJz42VYszhBY9q",
  "key7": "tZYQKNUPY1FCc71rTGPXQLznCSUNbCptuzMdip2qUoZ1KcZj9f5firq3dESh9fHNKTCDMUohYVUdKWxZpfVK2Et",
  "key8": "5MB2WYfcpDqGV7b25MuDffWPxtYFEnvP9vhBxaL4vg8JFFBi5eAyTVwgfVKZLnjAfmXHtk2kUaYJJQTCyD2Bes3Q",
  "key9": "F8Ro5SEYRVebqFHaBJGbS31bZdjArRtsRiLm2wX8TVy9RoFLPy23kCazXtbHMPRLLXmejvrFeRdSrGKvZKnmQ2t",
  "key10": "2aurRSCVn9rb9LpwxdDUByENGytELRugEdx3WJve7MZGzuidxdpTKMXjxsJm5fzobA33RGsMfUwg5jfHkhAj59Db",
  "key11": "dE4cuHr8bhtsK5zTaArrP9HDrc58xLVmXsYqGDjzH8VmnKyyTU2Rj6ibQ4xYfq5eyjPYiTtXLHSXcQR6J11WxEo",
  "key12": "2fDUcTkn5Gg1AYNZRkEW41apQC42cgKhiTFFPiqAcRr8odWo59BbRnuN981kp3WvdQqcE9xSjTEEhzg97mYc41E1",
  "key13": "2TnGF8jY4bSUAqBPk9aRZZhpJapCRjKuLR2Vsu1RcZZZ2rVvb2hSbC7N2xuX6TKc5tzNXWhtySQrAn39LuEaeZKe",
  "key14": "2PPQep6fXcmVZ8Do3o4ZXwStqvSndVnrH4qecQDbAyehJw638bfNrb5zumXouZQJAcU4gkxRgEKrU1oke4KqfUwd",
  "key15": "ufZ2y71FYGyTeedYZkPJgKWL55pgQvDga3g4WMkPn8PwfwrpMDnBTn8pRy9PLCecNz9Z8MH2B4jDhVBfVio6anY",
  "key16": "4Sozop42YXGRH6dQfKfkabsp1u4vFFNpUHYL14VdrvqAjTEdM6Wsxh5sbLLhasUFERCupeTPgXFMjd3fVpYh5Gc4",
  "key17": "3PLnEhib5heYxeobYWBf2ykbtnrdyGWgMxduP7e5HJM3g38G5384fawJCDhKMmJfHwY6E4d9WWSMjzrwBwnLULLc",
  "key18": "FHfHYt2E5wMYxXbsnG8AjLpJgkS7ff2L26eKmxBPZzFUQgg5ZnsEUbXWJ7LJ3WJrN7kZy7mjWDg3wG2nptTnoEe",
  "key19": "4M6ejxskHGTP5toQx2tr7DMiuU216AtQhzihY91DKq8g34WNqTXd4amsJFo4hEMYvcMSvz97UYn4abJL9jVW9mEZ",
  "key20": "4LTgmh9KoSXP5iyLQgshtFVsjJCnvquWwwEVkxXprzFxoPeGFQR2k82dmzrsS1MaXBrCYfrLNZSHzdKZ7dwJRV3M",
  "key21": "3i9KKgrpBMHitSsS3UXWMoj9AagHG7yt7CeyD48Vxy4WdHNtNvzdA4uyGpjRJRCHw2m4wsVKm9L6MA2MhRvzN5eW",
  "key22": "4TroAv56xYd8SCxeNgQLAFEfB5oCqhnpcQiKqhHySpZ2hzkB1dkTt4vMstEocuvivLurMkLxhk1ibr6LsndS83Aa",
  "key23": "3TC1rchM6oiwaJK2PF5fgAc66zSUxT2EcGu2Lp5sDoeKHqjFUapLEU94sy9xtff76mRoYaWZTNhhfP2WJzZvNFXK",
  "key24": "3XTx9FfLSAoCWkDUdRdQa28mRxz4V1kbwyTBkAPgriNLdsPsotxG3Beh8NobLdJ1YKhcwUJQ9NBmBSfqnH333K7N",
  "key25": "5BiWAe1AFfS3HeHDP8Tj4XHtRgw8WLck3j9v5Edb51WSHk4Q8YqKBFLfQpEvAwcZSwGevE5y2UJTX9gzXdWgPb5Q",
  "key26": "m9JTihDo6srMnRvBj1KCoXBLqRN2r596U41BTRZsJYKrnBY4JA45xQVVfFA8Ymd9msd8aL12qAgW1GTcYHAzvvq",
  "key27": "3s7SBcmdV5Y893zuxAsJDGBNYp8fXCVVp4oGHdPwh9d5wadVASNnmZTJpmrpYcYZuThsUp6jFpcWaHaWda9UiAjK",
  "key28": "2JVDDL3AENRP9VYf6vmL7kJuf9VBYD7BYLDzszSfcDQMHcW8tCJn5K37UC1KcbyQqcHK6JqJdWFkM2ZDUhKRk24U",
  "key29": "2JVMaaXE2JXawCCx3Pe5HVB4F5pJvpsNybWVVc5X2PmTanHvsQ7mNejxderguiJYSfMpNdbvjbSELzLzr7G8hguN",
  "key30": "hQYEZGGzhPPvvC9swfQzrdwZkC9Y8f8UTRKaivaNatzHD3KiJYt7gNaxhB5gTCw7DkXr1ycSBwzPXAb2URZ1DPX",
  "key31": "2qFCxYtZ6ofmCg5fFMysE8qej4SJN3KXQSdu99xWCZNZYimN5vtNZ3msqstGTrrJgFXefGUFExncmpNQmCEhRUoK",
  "key32": "jDvG23RQSFeezwEhzycyJNBqE24Mtg9maFB9R7bXVDebTbfXTP4cuDnEqaLh8qK7ktGcD5jepSEs2fgGu9KEQiW",
  "key33": "2zfZSUWFLKRUSxhFpVtCmoYvqMz9pFdyfWSibdHieeVwpWyqX8T2QRg545j2BCg1GnKiaurLpAu2zzYAHjGrmCim",
  "key34": "2dyfFqmmiNV7ubH3h13zkZ8uciDtKUtvMFF9BnrfshRpvgymRDVPvE2q7nciwATfpv3brbyaqUXUiFEGXVgfAiHF",
  "key35": "426Zg7ZPrfrsVUuqZJs5adCtu5jb6z7Aj1ivEgRRVeAhmZiVbkrvNyfRvUGFnxsMN7gjCuoyWaRfpfUJ7zWLqbuW",
  "key36": "5w1eESK1ufRUSiv5MBxcL9x8p8Dx646oqBHGssJr3BnULL4eJpDCpXpVXMqViMt61Zodd5gm8zKNuU68dXEUqwSW",
  "key37": "3kYzVZp4nAwVHivseu4xy6PageyxyyHetecA15MUqJQu4FzXhFFHFo31J1WAR3vYwjWx1xeVt3egdKSLnJHQbE1M",
  "key38": "fLqJcuDffKjZne9Up9T6YGJri5PUuARteRVbjPLdY1Ch11Ah2rcLTQXR8MwWALMpGeTKtsVFeu7TJSXfUZRVgLq",
  "key39": "3k1nS3kNu5zXj5PQQedcjkKJh8KeTbzTHkVJrRnAtGCKJrqYeSRbvNLvdnRyTAeV6aiVFJhLTsUtRMCNThpER94t",
  "key40": "34EkR1m54a5wzsFFRCqwHWFMiEwRTnhJtjxcfTryS2r6AZqmTk4qg9JvjNaXPMNsobcedEGmBnxshqysNsqipdPX"
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
