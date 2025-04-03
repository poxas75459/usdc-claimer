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
    "5zcK71X2S6sPQqj6xuiro38Z4WmjbNpcwH1dK8yEyGFbEgFUdXt3nrXtJa5YENz7pv9hvvKhmiuKa8QYMVcSKwU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHHS9Qk3HP55eykz1qR1mcYumxYbZb1aTkExfBypYsgU8N2c4VuwKr96NUcbb1kGdjtHHrbTn3bciAneZg5FWYY",
  "key1": "NkrSGpqX6SKKYjpJ7z9Rt5qJvP5j6YpkbUH2kNVkLmzYsy9dNE85ScUE7Ajvemo3noLFF247EHbpv7MWrWQBqQZ",
  "key2": "3MWg62WnTRHWtM3v4MGZW2WA31dtnDDJ6gMXPC1unq66Q4Ya4ESPCUj3qqDNhf8SSm3H4g6vNeWCAtY7X33zQkVt",
  "key3": "5XNFpqTnUoTGGC1ok5wjUW7hvjz2rT9XtZ5kDhULR1RVSjCvYzc4ikHVQhMMZZ2A695WRB9B5vra7Wsdxxr2bvVg",
  "key4": "22ogSrsLCu1J1bJvjBvPuyp7joZ5Hn15TQxPZ3GMsZgh6V5pddqzAhqizCcqEYeCGgdUQZAXz6VpprLsA661GSJm",
  "key5": "58KceeSebXyeEmdQwyowbGHp8h7g6HdfZusAQpyoajJ3C4yQ82kA8SyuQAeTxTC2DBw1HxcERTkdFjLgacagbt8n",
  "key6": "4ZjCbvyR1q9XaA8M5EdSMR8wWpgqbk85DrYKSqzJRNGtk4AaLXAUhGkbK4bKZVf661cJjt719K7JPw6L4asQfu6h",
  "key7": "3RhZPaY9DdQzygkUwN1du6d4WUXySaUcAfXRiFhHMLHxM8p7HbkLDD1bvkAmYbRE1b9DZFAxZvUaqR65XfVAac6L",
  "key8": "2xrE5KLhRECoMsYMr9DiLUBpVLLNUoqSmrnzfWue1NExFtQWXMRR2F3x4NbfzQ24h2egZoQT6KhgN7WTk8rXPAfw",
  "key9": "2NCkmHbms7pJ5McwWfkZwY8McDoAwPaiUuFK7sUgzxjMzJZodkK4h52om8R2YpQYUgRvNdxV9eArSykDB1u8bMWe",
  "key10": "26YnU4piFpDBKGK9BNMjMnTyZzrJSdGVbAKzVk3kwpE5B7o3cAqj8MLQgpbTuyDJG7gYnmKAAM9usrqNbRJBfSmB",
  "key11": "2qjExKy3EVXuqmRAW4ypwTvtiCPYHJ6uVmgqSgansnYFGaQLZZGKCGcZtWxoT1kzBLzmobnsHCRYjMeJTj3EUGqR",
  "key12": "5Dzd7pu5jz43iRyvamaDygUGr8JSjUjwE178MsavN8xJ4ZGqf2cRiKYfnRVXMDrf93g23tat7hrYEXChaR4d5P9W",
  "key13": "4PKd8qL8GNaZbs2QT59Zp2enJJQA8WKddZZBFBS9PcjwXug5pNA8rKSzwBnVVut3rrxijVFVZLk1m4qKuim1GTQb",
  "key14": "YiocTGNQjoSY7tkYdr8iUG6kuLgdME9JK2G4Fw7YsS6SzQaZSwiH4U6cjw28fJawpCbLk1XofGNAcEpWYP7n8F7",
  "key15": "4JbwJ74FP3vWLzB6ChNkVAeU9ejCnnbXFhqfKRP2hsQaWhg2wYs9GMxrHzUTJAuBQ6TaqyTV5Wp29DCA5aRdDpWC",
  "key16": "4ocbvLb3oany9qkyZ9HBS2eL7rNDt5z8LEpTuZKvgrdvV9HuULRDXYnSbM8hvkCDcPyPfT7sgmSLnWRKboRT3hqE",
  "key17": "WbovT2t3kx5G2D7baofddVnjmoTuCFbHDLK2ziNbHHpHYhHrpBFJXR33eRMBqBtcMxFkRfjLdVwmfne6DeZurKo",
  "key18": "39cqdk9vY4NMkF3F1tqYgkhxisW1Tvviyw2Av9b6KZQg1h6Xj22c2sGFXuacGHyHvD5TRfpFtGnd2X7otUt4EyGn",
  "key19": "5MY7PYoMV92UhuHDyrrg8zfPgsd7kYvYWWEg5GVGKSYTrBcEmWRx3Ja5mSLYospd3orGahpvpD4M32LwFdkKPaNH",
  "key20": "2SyirDsDvCMmBf1ev4Nai2Gj1NJiEe6KH64R6bE7mufrhiV7ZzUhCb1LB2LiJuYhrEqovY2cDr7WYCc4bSwqhy6G",
  "key21": "4drVovzGcvHTTkHJfpnrkLvQrAKn9hiHCdNgdmGrtuDWE5Km8iy7QrT7T1URB4x2mgU52xDoCftGjGUBQixaPED5",
  "key22": "5iPs1JFhsQH66EqLJ53xy74KJATsPhYZqtok3rAiUnX3HnziWP3Zg2aU8YGWe8GkGKnJcT758cJKBiVXmv2f7DnU",
  "key23": "3nV6sYHLomKubmHDJG11LoKwpJ1fcf5g1aH88oF4ErMuJdkMoN7TrZbxkJEuqTHHetkuusXUTV8w39oVisNvXK6m",
  "key24": "2FqRZe56n7PDeY8GqMyQxcPxQsMUVkfN9Uhc23qYzArxiLbi847NLgoYPGZHuLaBxJd1fJGXiUQr96MLf4wehETh",
  "key25": "mM7ZFgdSqbmGgQCEhEsJF1V6xiqi1rpaYj7CjiC5PPGmBtzqq4E1GicwRGRmzftvLKvFB6q1qc3BB4YCb7ABuWH",
  "key26": "4RN4fTyT5C2GuAYpF1fHw9vb3Pjf2ejG7Jk1iBE388TAVh1TMpgd1fpACGirVmw43ULiohWBfa8gzRzKwP3JnjSq",
  "key27": "5Vx3gJCngt57D9wwJXrPWA1CWg8LxTBsaUHaQqBxfqA8bdyx54ftbhBQDBhmuq4n2unyHnD8ppX9mgxBGRX4KQBY",
  "key28": "4FqtAPNVHMqgDQvKjS1UfjS8WBSD2mkAT1YFQFAYEsnZW3ZuKFAfTTcbQ3xiSZBKnLhbC8iX5N2aVdpQA526jMRL",
  "key29": "4CUkCm68EbSmwCZasFVPP7J9uY7aSzs8k3njKVfvH4btBMaYyajb8uqDBeDv3CBsJLK2TqK1dWd6hj2evJp4JfoU",
  "key30": "3ne8DRTP5oioHFxRhxKoHX8dPyikhPjPyageXKHrFmDTMQcppbWaEfz6XJ37XVoqdPFwxvTBWvimoZ5cf1aqy4hn",
  "key31": "2jPEWcGE4aK5RPWaXotEauzCp8xwisKPLqhyuzeyHDrBtmQjRaczVsq5CGWDX6ohWPBunfZPSUzYyztmsrzykW5r",
  "key32": "2n9kLQJTDgrc9GBq8PDSGNXxX6nsh4bFXvNKzFyXpWqi6CSg3PNy8N6iFnsXuQiZqj5KCe81kV6xzM5Z9bgHZzB7",
  "key33": "4AatT2521EKQd3GFiDZT4KrU8MXsu7KmvjF3fMvaaKftaTizmVfaGDrgj4bgdNHt7WapUPAp6yBxPpPYxQfKyLKw",
  "key34": "Lep1bsNHKdoTKyTW4VLiSofrD6KkY5JKU6yDSAgEgfYkoRTq7npg6VrpQsB62F8L9eeaypxeV9mWEEidRUbSjeW",
  "key35": "4c5pq94SQAZUemHKxKrFJvRNEwLKUU9VsZDLw9xLVyUbFdzE69wiXAAMEg9yuraLBdkYrPxrinGz3E1BU2EYdP9u",
  "key36": "2xydDWrEGEdjLj8TpBzBZCeVceGbWxb9SRjLcVik3FjNV1mzwAo8Fi38w1HbE7DQbXzwRdrrXExibHyye6ekAsVW",
  "key37": "2vRmS3YWQNSRPQuWZXWCERJBLJzbxjzaGKMM54tUpe3YgiDVx95XtLUJvtxiuXmBaVGNq47BuNB1dUDLS2rV6GAy",
  "key38": "56KW6KbMhSLFhYem8MVi7eaTz3tasvov1bZ5UZgPSWPcTe7m2ZE5uR7UwN5RHyWucfXWnGdP7m5JUTKCUkZzhMHu",
  "key39": "2Sa3KFEvvb4DAJsFnRYpuhS7KPqjPvXw941sfH8Eg3fiowosy9DVhXyq7z1Di6ANY66LtWeBFtCCgYR6xfdiinP6",
  "key40": "rsrAiM8qmjGqbgrjabEh5q5WsA6QDK1Q3qhEzYco9jNKaRJ3qRoykuNfb3Z5SZ585joaMHjsjfCS8t1HovUCckb",
  "key41": "bz8ADAgxp9aWF9MCcfck29GV8zXKBFp4cGJw7RTGdwvp5fNijuGYLRfvB8GuNiNGBJUMEy9Yej7Fw1kbyndcS8F",
  "key42": "5objo2nE86HWeH6aHf8JVatbJzBNfVz1o45Fd8pBYAjZVAHeVDsJAo2JRUfhmc6nhrZsywNeJgoyUNrKUA3r3vos",
  "key43": "wkrv5cMbcWb44nCVCD92UEcXhb4XE2eGwDFJEDq81cB6M8kosXxqWndoYd3szzhitdbvds5vSKxH5fS1NwMshed",
  "key44": "2Rty8Zkoni1bt5JqjapVrkUDt8cJGDipXWNRKADQq2xrsFpr4UEgVpZtMNFaBc1s4EgsktxnCediiiDsTiwnVvwP"
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
