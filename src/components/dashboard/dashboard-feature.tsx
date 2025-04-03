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
    "2Py77hop9VWRQJubvJKUE42uUsFRfyDUMKaFijhXC3KqKTvdfcAShh8bfzXiuueTVXSLtRXkEqP9qEDy73pk3NMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BZTqZyJpxgxEGX646kpuaktzfzBSjDGxLFgWqJsNpwt67VmtARtqE5WL8A7svGE48mQRy6MmjsZMHYDLN33GcVA",
  "key1": "3YHE8QM2S42t9K49srNRv63eSZ9MZzS1zwmJ7QMyQxn41ZxJAs2fcEshC6ihxazKpy8yLUqpeCrSA5wPDb8wgUmn",
  "key2": "3NKA2oFR18jidCSqxBFwhTRdHCrfXY36YDxtgBuQE285JJi6jMQi2EuxEJ2BexhxkzuR8EYd9FQYRLgDfKyqM6Fw",
  "key3": "3b2bLwnpFvESvrU9nioUGxhXYQ1rEbEDhY5YWKgBZmwXcioeJCqRFSfbTgH8zNGiVzGj7betg5ukTCYBLXqAgiJP",
  "key4": "33nduQTZdByCyKHogSQnNAx7rNx85VCNxiQnBcrAkyBEMe3a6UjoeKdwkqgCn3dhLm9u7fTYoqCVr7PeKxjByhTY",
  "key5": "U4MiMZM35a2q2C24QMij4LeKw1fgrBv6ZaSmTJmZJcpNGm7HMjUVLLiUEUK37PbRUhj98LXQGYJXPFCGBQrN9pE",
  "key6": "4quqtpjW4BRnSifdbxtQPijicueDYEzma9cY2w5YSnfGpab3GDXn8WmBgDwMvPeNgDKdmUUwdsiSVeump4dGpa8p",
  "key7": "2HA3XqXEwsoUDt8Q5X9YjtceWKTDZn68o4QF87sH72WBZ7hrETop9iiqYCjrjvcCqMGBZ21XabAxaeGXh9N5whqL",
  "key8": "5ZGcRkKrUx4sHPTnYfFjLhdL4mENRRRuyymtCsVy8i1JmwZ1xm6Ex4BdXyYQF6xcDU3QobZQmhPQQ5jkbkJpiKSK",
  "key9": "2JjuNMHeEYmnGRdeqjULUdgNDTScg9Edb8yM6UYzd9wQnLfmofeA8HEMbSSoYwVXco5zqhpUVVqZmes36HcAhxdy",
  "key10": "2rcBJSJzNa6tjvKHmYdYLz2WPBMKm7rBwn3n3F5CNRGaincpuyp487zYMiaBiztjgxEdfoxpvKMrbgsZYuTPEvTA",
  "key11": "2JnyMKdPQGYjYqunL6Rn1RxmTrYY6EDXFFTCEo2kuxmdsgsns4Lqt1o9GZoydC4TBCSgEg4VBMbkcxTt7xxT7Cfa",
  "key12": "2rHQHbiHjL7vYYYdzERvMkDxygHR6oqBVsZVeMAbfCxy97o2bT9FMQWHjvLnMu3FrBnjJz2hdFoeGVu5qafzzfcw",
  "key13": "5a2sTozhQfY1wBEcKBpvGWmd3eJcTsUSSjYccp9n4d6ykVVbaUWBzKHrJn9uzNMFkP5Ca4ZhPaLbtXFwkJAceDso",
  "key14": "4MUskXAviwAUEUkyPu3fiTxbmwXtw6EnZSkhvTtdcYe93927hHeGzi1KNQSCqx8m7xVEsUYuRibV8gJZWj8vpKA8",
  "key15": "42AcXb4UduLcwHSjMGaL6PpTsQaZRjVrUrsTBzba7LutCA8eWLiAnr7fmWA7abaMXX8EEx8EgRycbGWsZLrd3uHP",
  "key16": "3nnetcCbwShcPJFCAq9Ke3EcXUwWqV7C13NrJrLBpPA6u6yXiTpTPfqkKJWAeLPimGDkUfBb9Dbz4dxXGPzKP9Be",
  "key17": "5y4Kp39RHJDvLn8PHXPTBVPsLNz7omgifpNYbVHBND2sSYfVnBK2FGrW6NqyuYE6ii89X5iUFTMNv6ExguZokRLZ",
  "key18": "4MwmCvMYprDGLPfAqvtxj6F5iLWGBdHGDTXQfhH881GMPZTpEkQBZoxWig3CtQLbTSA65WQRuApUXheNMn9np7bw",
  "key19": "33MiVT8pL74G8xBWt1jqTaXxX3Dc5B8aQjCPo2CipKDKpHJT3ytBSRJwJMskz8zSyoHnKRctPe7DcNzhzagadBcp",
  "key20": "5dAH7qBWBehn6AG2zYPrH7btDm1zPuouijwjjpXbXqjMHnkoPKX9veZSZ1tz5n5PFPyxpx2zxpvwaaQuc8TewXVA",
  "key21": "3hqJkyrTjMAVtDJ4WynnH28fthfqEpR69VyQKKzsGGv9VduyrDzCKeuCtVDuRPzaQNd2yuahBYw5DTuLLqsAQga1",
  "key22": "4q1J8zdHayxt2VrLiPDsxErtvD6rKt6WFv6894RSzh3y4Nubv5iumXvCm9ti9kU8mH6scpADpzFLyMXFczcDqyf",
  "key23": "273rkBTq2NXQY43B693GHyLTBYZBVoNJAsZp3kdRgMRsnfXKCjrGhiBsE5kwMmdUjuzkLdYVoQgkaCXpmW4Rxkiv",
  "key24": "2LVMitAss2TnVZbgqQcMpV7xVAvHMKqfTmFGLa16dtFgHYwBTJgFhwBNXVExyfkVkT7spDM8MzuKhWkv7p3pMgG9",
  "key25": "4F7z26eobBtZf7eo619suhbc1D7BBA3dz65zTprQdTuVv3E9qY2wfp1XXY23a96TjLxN8HiLeNbhAZJ6WenZKTn7",
  "key26": "2hxYzecsESzhcNzy56RjXkBDVBsCkHCZfmSQdLGECMHseUN9mRW1xiXdbGnBoe48zYwgnJ6GgcC6yLHdgnmy4GR1",
  "key27": "2ErmBfVrZD3d2PiGRAuSThBry8jo1wadHn7JWUeK2SzaFui8Pi4BZ2e15Bmk6M9tuC4QUMD4EwqjGEzTV4cbeJ7T",
  "key28": "23383dEPErtf3NmXRqg9ty9uF2Yf4MR9RWpirEhv4H3cDJ1KTUQJpwubtcXq7XaiuGoapWoy4edhWt5sphciNS9e",
  "key29": "4v6JFwb35WhHqfygrRq3e8zg6LRJTx6fKh8xbvQAhtF4ivmHxZDL1yMusQL82PybKCNtHrzQLepiALEdvUhcP5EY",
  "key30": "4dfVNjfgoCa1JnqidfS7fytymLS41ynWfXLZCMgt5J4tyYvnegEG8GJ6vierPx7zsv9JCpnKFYrTRrNthBwH2Huu",
  "key31": "3aGTjGqWisuDsGVHoTW3LFtr5uHoKKWBYHQo9mcc4VSUJtbUVd8iLpa6YUDaCtypK9KW2QVo3iCyoMZTcZ5rL6yk",
  "key32": "4b6zTTd66dCRJNHpPz7EZ2bai8i38L3f64QXQENEoVWNY7aU6rG7W29kBSrNaXPKtv8FLZUJpqef19f2HdgLxfG7",
  "key33": "4uVCpoM6gH2Mu5snfgQKo2XyQvoE7LjXYYCZyX65ZGharoV4TH23iD7xp8vTrpHaGLb732mcSBwNeHdPfzvqtCvr",
  "key34": "673d5zHTVwkNWBnYigzVSHezDiT5po2SWRAUCDSAcnjfWyYwSwoHVMcx9J8BGYJnHrChXHytVEgH8jgRPBCVhTNz",
  "key35": "5FtKMBDTDRNjDySUrpLSEpHtWWUTBwPpHBava1hC4gJDWmefs5Zvwoi9xytigRrv5oGTKDFFZr7FSMh8YPrNXjCM",
  "key36": "3vkAMsAufnk6YQenQJqVrFzGJF9NM1tjUR2ve2Xw4c9MTNEdHW9NksymE9UEksNF8LmKpQRVpCafbYHGtnHhu1ZW",
  "key37": "2iCmt4CisviNVcxzEMvEASQEfNpXiUeKvekdovrjLUtXBxmRso8XkVvMAWa4MkqeedE16PvRD8nNCjg1CJNhMbNE",
  "key38": "5qHcLQeRr4pQUNEStX4qetoa4eXNgP6CMCbXmMnyrgJVocrAs38ToAGJ7JGpXTUF75P8gpAdG7Fp3AtAJSsUKK7t",
  "key39": "3EWsgjhpFZ4D3AVU843BVTTxS63LbTrMyE6oaEnJ98ms742QniYqQR57rxwcHuCaHNUioCB25Cm3jh9gre3rnvfv",
  "key40": "43BDkeNhVAHJ8DyiZks4njjN73fmrmwoPDxYmSngTVfmTGhCzFd8iDQPrpTUpqj3GWc9Lea3KfaTZCvZyRLdnBnc",
  "key41": "Xw9RkmHEG2mVwPCRKTSKKpwqUbmeiMKjYdK6Rtkk3WH2TxoUJnySTmfafNnCyc349Nha4RWmnDx6svAWs5eS5QW",
  "key42": "uMsoapq5HtFQz1QStGeyXydA9wLEo3DKEWXh8ViF5mQzWFwMQLwvKhsKd8895Ta5ApqCfBLeUymayrrvJQWgH4y",
  "key43": "3V6vSNgreUkvDNZyRLzpxaoSpJKY4KYmC8KCi8GP9L1mf4RusWy57zcMvCdsL8CKG23cJuJ6EaMG354MGZsGJ1Hv",
  "key44": "5ePtbk68WqPAZ345A8eyTxJ5EqVJLYw1JhkhneBZHKVRJD9iaJYx3yihaaRFpj8XfYqJmQhKCFnC9QEqVswhuVMD",
  "key45": "EuQrGqa1LpygVDxPYb5WXiQTDEyL65mApBUJRqmPGgq7fX2jpgzEefKQLak5qMwDXYxSjU8ggxjhTBMAP83gGpE",
  "key46": "3ENLLyHbG9e5BJCwXEKtQem9cBu5Y1EqqtxA7NEumVCmkwcmdWrrvEMpWsPA4ezperY8AfzCNTwJSZnMbDjfkxhi"
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
