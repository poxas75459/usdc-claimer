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
    "66pPHtpd1UG2yT79hiy56vmbbZRgQqKb1foq3tFWUANg3QupssDUDfhoED5MnXx3pmYDNFowrbf2NkZ1e5p7o318"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibcYR5SDTdmw859EEemg7Yu4QAyZS6hN7EKG9HmRRzrqwcET5xD6bQB1GpJVr4dnk9yD7kNiYiXCvRXA2hbhaoW",
  "key1": "3BbjxNrLzpXi5ugj8AD6eAZb7VwqCT2dYUAG5fFqSNjroEJdUCzPXsv5dwauHHaN527vAniHsnkTVW84C4e6kd3S",
  "key2": "3ZHRSz4CaC3mTVQzfWi9FgGk6gPxocw8iNLXDFqo6WUKBE72meGqwexhbKHiRqTr9V5CF7KNvTwSFHCAKx6smwL",
  "key3": "2f7FbwY9pYHvMRTh2mmTzQBRVHUx98zy4Xoe6J58JA5DGV2Eydikd27umfdk5PVm82XZTxnLAwXWnubTGTKXSGva",
  "key4": "4VxM67gjid9z2UaV3brdhH2EtkFLyJceWUHFbgS855f74BTKwchyxx78kznf9X1G153miDagGFPmYJJF24AK7GTo",
  "key5": "4m7gPcX7qbd7wvi1R1JLQ7mnsW8m7J4xdCqLaeQMHj5qJUaiTbAtAbXrY81UFr7z5XmDCax4fnCfKUEEn4qMJARe",
  "key6": "3c2mBkoeKpefyhngTZqMyot7gD8QEp56JrVM2heiTq8zfgJ7WP4qDbEUZqF4Cz9npcKLVgJBTMzWqk2nauNb4y32",
  "key7": "3Jkr7gfSiTKJx21Ee7Dv5CKPAgDKc3rdvv3zpP25t5qcN58pYHsoXzxpnEMu82uAwDRjcLPPGkGU5hoQaGXuny53",
  "key8": "32BvEuUgsR17vDDnqbeLyHWWofRPoL5376WgoYgaeY9zXkr5VzboyebePF8qSyHZ8FmbETgYHXhTWLA72iNACbZn",
  "key9": "3J5T9HPxXd2d5qXgv9RL9cxvTe2TF1pjfYqSAVzUkAKh7Sx4vH84ztRR9QVqpbSGrZpLR11brPrqQQecdrfBVMNe",
  "key10": "3mV3EsYg12JDCwo8WJs4xVjY2fxqgQT9vKCBW2WALTWyvtyGeWqXzdBfB7DNVe5K8oPMuGmx6reuBmneaiZodTnY",
  "key11": "KqwxKE44xKKytUSrNtzFd7b5JqTnyDTM72x8EYapf4jPg1q7eHRkRtrdVxj1WFYEVT7cV4gLQVZTe2bh4tuD2ar",
  "key12": "38bZhssG3MwhC6Ya6ZuD22TUYYv76YZM9DXpx8N9gatXYHwAoQv3AqyNXQMHpdhxsiqzqkRyBuHN34UecJYycvpQ",
  "key13": "5EPuvD6p6hi2HyYTucXCApwFot7qBFfWyv3MLKUKyRKT7gHjK4wLcBKyY8aTZMXDeFBPwQrKJL2ZHxRgRMzjR3LE",
  "key14": "5x7VEVp5E6iaUb9NnLi9dUzJakejUL69ftSLjEyWnaYLngDTQQyWc4tXc1F5mQhNytdUxFZKwsEf2a3v6aRB6rhR",
  "key15": "4PePqpndCT4q1ci9qSA6N8VYgqQ7efvMMRmAbNjyDkGoWTMszRNkeTL3ihkU4cMz4b4UGJVuA8iJ8Da3zc3L7Boy",
  "key16": "2kyg7G5GuvZT4zUGZEiJYoHjJighj2tDsQGXt78fwEHVZbrZxwTVpPsfzFk3pX9Ep2VM6wfTTasCuz8btgUihjAK",
  "key17": "5hfE7MkLeKEbWXBf5CSGoxN8QxXTxLZpkLepghzvr5zytvcPxXjjJthucSJvjB2agC8iQCY3fioAdSuGSS2iTd5t",
  "key18": "2ZD6fUdBpBdrdcKzxJFKn628DQauV5XBDF9QvMcdDkkd5tibEEmKtYZSNspAPfH1DwyYWPSzpKaBkgw7HZ3YfWp4",
  "key19": "649kT4LJtecqeDSzBKhnfnFupWFkPgq8joVrE11Hp4HJFcKTx4WuawVHY1PfJ7F3UTPFiWbqgeVjwAm4qN7hm7YS",
  "key20": "3DhZggL1X9959dJAMScC6VpDdvojHed7MYembT2ohAHY1YbVD5SdyC34xCQHYkFirMJCb3WYG5JFX3udu3h1MG4W",
  "key21": "31eSVkAwWmZFTdrzfwNMsw7qcrPkVwdLBP4aGmmSZTdV7DHavfcZwDGhLfxLSU6a3nFbHaz1h4wKbgnsqtmZZnBv",
  "key22": "4CBesLr5d5AEFY7zDnNkBuVsTcu65uZicgHHBA5soGGywxtysfiD1UCVDJxxN7oW5gxcyuRei2DkqMys1vh9YNXi",
  "key23": "4rUWiutUk2GNnc84FqHUSFDTcQpVWvtivU5ByhrHyrhfQcuS8M1iJ6dM4hKKqPHofRPeH5x5wkJ7UvGqk4ZGvJM1",
  "key24": "42DeBUZ7d3mZjtMg4zYQnEFxKfrL9cq53fEraR9i77GLAyLvhaspZZCHwqVUi5RQM2x16HumNzEJ83w2oBgRrYP",
  "key25": "yBHe15Go8TZtF7kCqDc27LBcnu4xSvS688bphaHgUmi5MHEqnwLMyskkmoARHT4EeK1RNpKsKgCzGgVfQjDrojw",
  "key26": "3TZgfeRdk3vW8XZhiSc89xcPvmsQQoE4eT8LbLiUR387SYPCWqXHZrE22XMUQmT9FqYJ4cNFA8sJfqHdt2YeKWLH",
  "key27": "31VQbWW1rZPGgceMqF2KanetfDshHw8VQa82YQzyWtS9W2kF7tk3fRTHQviop9zcgi5sG6FybKgutp1LjnsnaQmf",
  "key28": "PsitRrADH3izF6C1RdWDmC5LN7i5PQnQvNX4UA9fSG3ZWvgCoHmmKmfcryHzjkXKC9fyvTVkNs8RYNLKXZeQXeC",
  "key29": "dTN5n1aAoHgnbSda17Drh7mALhYZsnncsfh1uwfuoYBt2wG8nU4LhxQejuVxcc2xmVzbv1TZ7QuZpCgUKNNtcJY",
  "key30": "QjWxBgtZjiJ1wXqMPG8ps9pNq39i517CSVeN46QHwywJ2EkDbXfqbjYD6z5q7B4zvp172UvMJaWoHxw3APWgBPf",
  "key31": "4pstKzAbPoKqKX7fkzStCuH48c6zLJzESzi7qMNvxMXV2xVJwi5r9fM9cU5B2Kz6wJmn1Ff1pRKaUTJjhnvgvrVM",
  "key32": "4i9Xi9Sg2WAsZwYYgxozqbPWwZMTP2kCEBAkRjBcTW3HGz5uYGKdkVVzckXCbUKDbWqkJEmCRHaRR1CkBgzzwuUU",
  "key33": "g9JfvxVkFwKqo3oD3GcumV9VH8Zdw2cG43vo2o4NGHKbMNVGBWHVr8pE6tYS58U863fjpNffv5fdrw3gbM2rC9N",
  "key34": "388Zvr6WKkhVmZ4kto2X6wM8J8m2dPszupuQKeW18EvJA7RBkbpgxmcY2AzH7m7LXGMiJB5ac46KpJfEJza9h9hz",
  "key35": "5nYG9JmCj4QiFjJpPpZ4whfFHhfoq7UkbobubVc85NkugPSPvtEDVhAuMX8pGqt8WNty66Bt9QRDaJG5W9C2RLUK",
  "key36": "3TGbte1EkeEmdx2fhemzFbxHx68j9se7nbN4YwpXnoS9WnvzZxTZ5x3SuqdmEm13dNFF2RMvTKGLkHBsS24xPQvo",
  "key37": "2ENYS8go4o2WYqXsdjzL4TgYuxhZdeaYjTkNG3WGDzCHid6ZAr2HJYPapNQbErod8EHqHpTWe19joyrHkczFLvP",
  "key38": "TyoNmK2oGETbKoFcUAgVGj1Rh8oKhNFQpqTvQkHbeiJtNyNnt4rzJHmeFKXJTsdf5Ksqy4UHUrUB9PzWUNdV8kM"
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
