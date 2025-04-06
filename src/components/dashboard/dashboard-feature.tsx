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
    "2D2BuikRznfoVm7owuuR5WWDN2BxBvFd7nWvUm1Kqo8JrbChefFqqBv4d7m2bSLZsheS3owq8WGexgmCusjsHnev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmyDmKAVQz4HTkV1oZ9KQMHg3DkzCQUXsEpPX6eVnt72GPjejV6ffcRgr5qsCjMw9qBDBfGaWgqPJ1Bj53B5Lz4",
  "key1": "4s21UogFTtnJkxyRPTTXtPDkDao6zgR6ja6BePi2wurVXEY5T3LbpRQLKHLrTXtSxL3ZL57u9SCDzmfHcMsCNZUZ",
  "key2": "3U1kiViY98CmrD7q6HdrAb4rWBfJ9vipJht3j8CQfVrMEDSZjxUKQWnfBLtbHM36k4nbq6VTXHqciDg3EjJJGRt1",
  "key3": "3jY8nou9YRtLEkAeGz9HxUeJWf38xGu3pq1c4idnZbwjUA6wjWc48RRYTZgoTjEpwbteoYcCfidxd5mkTieRkoHD",
  "key4": "2oydiEoiZj6NjYPh3ReYsQ8HYNe2cciD2Cr91bUd5KDorHUEA1ghE4YkEsg9HNMNR47jbzS2Whiz7LHfCKXgrpVR",
  "key5": "5ZGW8FrGNsYY1tKsFRd6zY1m4UXYDwcPJ7bLAXBLxdqeaLAxQpRbjvEBBQWSdsKabXNC93Krsqm7rao1LZAnZ6zz",
  "key6": "5SAt1TdVeBjqiSfMviNc7egdaqp6yjmmrx4oLQzao1zy8xsTjBHANpc7KVeCZHKo9KKwRNoAGvaiBCYv5P96jny1",
  "key7": "4qewZTbf8QNrNhfoTkca853pFEJBM6ZJgFVvY5vcQU8DJWTthjvdVvaZjR3L6cGaf6bYmDLFp8U59YVwNKz5FpGr",
  "key8": "3hSy9tsiLb7LqHY7GEfMV63eBFFjjKiWFfrk4KmGjsfQrdcL3McGYtJvJ5T9yFVh18X8ncMWvzXpFDGeAbC2RfWu",
  "key9": "3Wo167Qcgyan59VdJuae8jCo1CAzH6xsXxa7QHKhDX1ffPYTZsoJSRYHnMkSy8vQJkV2qBQEyASLK1FQNR1xMUAJ",
  "key10": "2m7dGwvxT2isRhobVCr2j1RhSpNh17EME5E9bUm1ewoayaoMdkKpch85DZ4DaBLuK7bBW3Hxj3AXNwvZH5yBMCHE",
  "key11": "3H5qPQjqfweWkm4bB69FFhFGhLtp4RqfyurnyRwGkHugwXMzEz6VsQQ1pJf1p5LPG55XiaHkGscj4eAmVkEiXE9U",
  "key12": "4ASVfmyxjnsiVCHAtBDFSEefrA1w42L7BMC6ewmkexbiPCmE4Nn1MQrBihQx9gka3PYdThxw42AcpGCsNCfLdqUA",
  "key13": "2NCCMoEZGqAac2ya6TFqmMD2NWoLgqX5RUra9rmpwwvyGNwAcWYRPXvp5HRfWPbbR6doWcHpU5KfA9eKtFyuRV99",
  "key14": "BXNWBJiHqkAvunudksujCPpkz7MSZ95rH1DnzpASiDUCNCyZP778swcsYND3L1xQtF15QPkAsPDs4e81S7f1cR4",
  "key15": "3Epism9tfgDKdbuL7wn2tC6d9GyRRRxS8uPBoiYkUWWgLDj97zodgwzNsngnGcrEEjNJWyd9mCUhLorBHge4tVVV",
  "key16": "45rnjbDot6B4ouFooDZCbv7R6FdGEuzV6YdMUDx6gsPDkQAdnfxpysTjTjrC5ai9jQVW2VsPSkGZoPRPXKXdSCmb",
  "key17": "56A59yTAyzwGi6sNkP9JXYyZq14xvWUuUEujt7a6LVJ9rLwifdkM1emzKa3K55SL3KVEXgu1s6n8Vj7WuJ4PUNyZ",
  "key18": "33QWAgBYXJFXRnCSqcYHQFhgZJKUaiiYZJF56cqpS7s4nJNyKmL67paJeyzGkvSFiNRaT1a6WrsERq16xvR8RxiK",
  "key19": "HS9bXqaTh3LAFVnrVC7vG98V1LnWotT8YLjVbwrfwCipYabnjvc7goWDAG6mH3DkGkRqm7mUwNj1JC5MMBe4sWK",
  "key20": "5YDhShWpHH1NaYKdUY2DCMJEeHcod4RRQHefZ42U9hzT3WiSzvrv9dEqNqKmQpecLxtHgHYd4eRTHN5hnrkAXSrb",
  "key21": "47CNLcXTQqm4RKfAQGoKzvh2gFSQrhT6aL2nZHH1QBEqdXd5zQc2cJx896CknDp1FuAWg1DuxLRa1Zc3p3i1wCa2",
  "key22": "43SitUe1MqYuAB6fDNcB3wuSciy76WZXJuLDEe3FKihvGKD6RoHhyctccqRBNZvqiUTaUsbX3yC4WWG8HQJjo38Y",
  "key23": "618rE64ah9UKnYXqazuUKdoWogFp5h9Ecv7vNgMTtdf6t96xWSDFH6DUzCDW9Zz4zLuGoLXSUTzJ5Pf28geurM1h",
  "key24": "5m28M1tBzaQHqLqD8wqZLX5FjrTYEY6oiXtuHNSEyJvoUSZKkeokN9DNbjwDHLBzYD7v8QEk1PyxnaeuL2EDeSB6",
  "key25": "3tFSxZZCiobHkBGuuFjFy8ZsNUw7wN144cKd2x2dsaRhn7L92VntA5U4v2YoomDfop3zZdRJQNQytuKdJMs6P1f3",
  "key26": "3EkEJ6mKRVLoowukrd11fsmF6NuWMsuWBkfhWvES6oZSF4qFgVKbzf8BJ8GRNL4JW2HhaWkJTPvrg9cQUcZFmYCN",
  "key27": "4FNhA3ZnY2D9Ph6ywQ7WwsE83aA8Bj9q936KiYCM1EztQb4m2TkbgCJn7wjx34vPH9aoCcFtXEoDk8MvRF9R9GeF",
  "key28": "51N5zJCuvK4F9ETGL9Do6RE3nVLcUxaBMoh1HcoENDyV1246reZPQNTU7Ghm1mxV6wcT1kt1YE7efPEGTmEgBvvw",
  "key29": "5Fd2akftCvZVyJ1uePJypxpXtUvXtQ6WzGohhrFgWkpysTzDd6keTZemjKKTHVh5GJM3ZQrJaA5Pk9nH43huZ6L6",
  "key30": "3cjKtMM9Rgu1noZjVDqwc9dVTyrbe5w6R1vGc9HK2NhXGYVMVJXe3ZeAtbe3NuWkaXk42d53EL48d7RrsLTVmhHF",
  "key31": "5gY4F2V9L1g2c4njkihRREJEdZXSn5gqZwYj7SYARg82UgW9V4WC1pDgkxoLujejVH48xTY66xi5HY8FauPWckKD",
  "key32": "5pGxxtqQEFdbE94kudnKaYPaUEZyNfX2diz4UhjkUmfAZRvQRPR7EuHtR5tMyW6YhJFs8ayqTKEXp194mbVQ3SFh",
  "key33": "rqVei4aejQRo1THWq7svea3P6w9joRN4Sz3orx4ssRK2DR6HUYMohEWrDBaBr4HUvTuzUdnqZUhS4Axid9oxuzj",
  "key34": "3ar2pbb867fv8rLsxWr7LmWAaJxh76K21remAwPZ74XDFJcToU6NY21vQt76GrYj69mg6GGc9J8iEv1EbfhzmMn",
  "key35": "fFdKQjq4i5oWD6QUi84ucm6E1AuXoa5nqQuswx87KRVTpu5pbtinHgh5GaqbqqWscKF6ZsSAjxQpa6Ap4GzvHdJ",
  "key36": "5Tz11qmqgesRhdzrdc7expiG1WPXUxG2QtAhjp8uLtNwz85kL5L8XXQWCaoWcdnqCNthevyn4cV7epLcxGcTMSoX"
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
