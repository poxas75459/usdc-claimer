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
    "4dYDBM4kbsaDFqz3WyefgxcG2L2grsK2eSjxeqRKMhpYtEYWZkm9ruA1coBthzSpEhB45YTGfnQFPnGACW7gpAsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8k35DcvTTxzfypsBmn8xoC9ztedfvKgLX9DPcN6gY5Vr7UtuszBv3dLZDPUQHe5TdaP5G7J31Zzj43ZzD59dgS",
  "key1": "Qb5sagGBRdaABrPrsPEfQtmTBwz5MMDo2BqSaGNikRo7uJEoPwgXsuCNVin54pF88s8GZigDcYsQPXrTuJQhANR",
  "key2": "46Tw5uwfVQJJrx97EYNAJbb1oH9phdbV6bfMaQjREZ4N5PBXDExkbsLr5vE6ooY6S8v3PF4vMwwLgquZUxTRQJun",
  "key3": "3mLrCY9UxJ4WJxw5p4JdyVfbCRBLs132WDSZdQQWnyaa9ZxnnYj2gXjBE9W9WQk3CcEzcSfXMC2UR7Gs6zwJmwSb",
  "key4": "2ibQdQhCUTatJNxzVoSPRSGnJa212qwQp1RfxEmDwv61wvtpuTq5LQ3p1UkByBLA4ophPJjwYSAkjTkbqPfiPEvu",
  "key5": "2xR8YgyyeAZoJTiXcTvGbtqxTobHAXxYmAxh6icCVBgg3zUuR1bKNRhLDM9R3zYJVu3PVt5JXEYTA9r5aqN6ZeeG",
  "key6": "3L7Tqqope5dZye3f7TPwbpg9EiA6Rmrdz4tDrYgACBtpDJNE5gL9raMyUtW27h13qftz4cN9xKemk4aWU26z2ycy",
  "key7": "xhpahNhsVaHGa8CnE7SevzkP9sGMhC4Xkuc87AFLcCRCC6xduZqW33G4gSTTf4fZz9f9YKEvd1Nuretoc1JceA4",
  "key8": "2bZL6fovFZsyjq7wzMbqCaDrohjtbmDrRRt2vTdcK8i8oL2kJu9xFMcqAmnzXzmfzMKJCJ6ze2AxeoimM6RQG78h",
  "key9": "26ap6XktSExUW36xyts7QQXu9CGBnds7U78e57dbuND1DwH5JQXcowWi3M62YW1Z4VUFSeBuEaaCUFjtmmZmbPbL",
  "key10": "25zCUHUoUtQAw3nJxLabAVmiPnqh9K31iiqSuVXXkozTr4dhtzcA7MxjuPdhrPS3HhpQEJ3Ld7tHNdP96VBd1fC3",
  "key11": "Z6NoTynaio9eLRu51P9XpFdWp8fQ39QEAyAKf2vxf4JFZ3f5uC3mzYrDJ2qCfLTwxRV217Q5An6kWyGE8B666wH",
  "key12": "58EoFyVkK3jx4J6j7Q2XRRpLEhvDqX1oEWTxedTq6TKkTs4RCYWTe7ZjfdEZbUyQ82QNTVrreEJJKzsmKouZacfu",
  "key13": "CNJvBVv9ofMbKJNhZw76p8gMJcMyUvgRQZqAxxkLXBAJZidD45ZHLpF7Cvp4rFrfAW6kkX1RuoKUsSswfabND22",
  "key14": "3s8jfrk3Eaqqo7h6YcWuQfjpv9GwsPAwaDDPPAb13eZhDC6xmnovqNgJUcMpCx1aXz8TtJVW9y293U1Jf3mNS1C2",
  "key15": "3UN1MNSwc3PouwXq6EKjY29hFvdPuzQTij4mDtjHpeB1AywHa1f63Ty7RvSuQTTaxBni8jCAUA9TAJNsZznmAroH",
  "key16": "5UsGDt76EFPcw8KFGFRVAQrNrS6gbb1A3Mc3RKpDU8E8kBmjxRbdM598Ku2kP9nndd9eC45NzHQjbLcrwY63VKxV",
  "key17": "4D3gsau4U2hSAF9FfQ2PoHjKr9QcWGR2ePCPG2Y6N655gpET2vWyYLj383NARHEVMjfSsuGLf3M5qCp7hXBYyH1R",
  "key18": "3fFxD9aFGrspDcnpFQYAaiYPYu6TyNWkvmC5QrpGF5W5aoeKKDSBNZewuQXF5nWrG1MmffnmyKtM7wmYcDsBPoZZ",
  "key19": "CAKbvBUFV2EZvfyzqb27j8iqrrgJjtq2ecMpMJsj4CwQ4dnBdA4WjNbzPrHwr3jBHm7KLwsKKL8PD3mvgqnSGce",
  "key20": "vvvdHzz3nAW5orVchAaoKzFyKrPY6HpsNoRAyqgJkci4TWcLMC4Mo4ntcLcpdKB6s9EDSnKjnoCg13A4fAXWDH5",
  "key21": "5rdz3WLURrLJLeRMxDomeNWzuhmwubGz9EMdMys2TCTC7jg8J1Qdq1EkiTQUtdsbyoVywY2RNB4QExZkKR6mqyEz",
  "key22": "2KhKdK4Ypdcvn3pSKdo2JFrF8mncRPwQEUtQJJvTseEnqdBXMpC3hXP54RYaqT2EuPEpChgetjxwggYHY721r54",
  "key23": "2spfxGiMmpxwwspHPwJXV9qyUoXbx4wn4cCkQgGYE1CRUaQE9X69JFzxYgJsiWwUpfTtQEyqpn4vxyHUbetkmFtk",
  "key24": "A7nfSi3PgK88M8kqjiQEkYh5hb3e3Fm8ypfcTdiNxqzv7pKfDwZXKzgkKmi9G5KGbJbR3b1VxkY8kWTaHhYadC7",
  "key25": "27S5dtAPa8stZJ7f3xhQVyWpdHyJBPatDzATqdC94MCWUFeaxWN2JCTrx4isJDdDe6xAV42GkwGfrMNSsivQk5EU",
  "key26": "7CQANWhYiGD2USseCfqPbtaoQMQ2KkfU4XnJHLaC5LXjRxGJUNEg4pnbzL1VYFDEpT58Rejr2bNc59jQhHF95GE",
  "key27": "65Wera6koAapSzQjoT4ifdbQtAS5yebMPAestLhLUXTQ3ivxLNhsx79VBAbegk3oXpNesYUmEatnC9mvGZMZw8Hn",
  "key28": "45xn2izK97fAiNCWZ6X11Sdvz1jym1WW9nAo4mDVj4ndyVvfoaPd59vAVTjbnX9knnjDUP4K94eKFjyKiShnweQ8",
  "key29": "3cHcWUfJHQd4FqjqqAchP2NtdcUKv1UKrUNbJghy54TKhK5Lu8d2tJctUs1fw2Jw8H6AVdBgqbsUqB86qu9KG37W",
  "key30": "59EDkYPwBSBtk7DmbPfGWBvXYJ7zzKeTR19NS5ant7XgjtTU1Req84LenyPUJUwLF8vfDtmayNUttbKv8Cf1Se8q",
  "key31": "5ZC2oXoHXck8qECLkocRXAMMKUzHo1TKFy8kNR2UmFJg3KXrxAoMohqVNGceyBNP6o3X9Yt5mA7FwHWsYex9NR4v",
  "key32": "5gkH6RYkW5CJ42r8ckWNCoPYQQN6UxqJbCeRo2VHLwKE8Q93ajCsL1x7bMDxdQQTP8VzYjj9Kipc3mEj8JCaZ8Jp",
  "key33": "2RwP5pN5QKx5bpXuReP1kGjE6Y8HnmZcaJbW7P33zPbmBy5g2DFYZ1CrKbKGVXYV8YeqMas7iNw6pz6ueSbR5N3o",
  "key34": "5DuzqBoyxqZbf64dRGkJH3ZCBbfKpRWcxVsKd2MmGGJXe8xst4T1Qrt9gf57nRCMoy73UkQaRdRZcxVHq3j21NeR"
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
