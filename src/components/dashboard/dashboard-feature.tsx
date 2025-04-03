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
    "3nvJecrcNaMcr43PrPi7ssvFDkN31tnu4i2V9zTLBKGTvPhZD7YfZUww2i6KNooC2d1PrHJkTpUrR6Pr2WJjbowX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gpZHTqz4hpfcRpEfoLLCgfvVVXZMLTU4EEWbASnYK3GNcb5QtmCXenyb6BFgvGxKHi52UvhNNPhtfAULFdoVTVY",
  "key1": "2uw2W92NnovbggZZpUHqEuY7WidKqZhymTPb4W23WpcwJycFZdhzUoPcQKxVzbfjmKWPhseMQfsVHF7jPsJi34Pm",
  "key2": "2YuGzfXkuTdmEtsExR8ai7xwSnxS3z7aKfAnyzYLBc1GPqiUFDPxbUFdnyxMDhTSAseLTaK7kgLULtVRQ2C5dvsa",
  "key3": "4wCHed3QRsonbdnPSX8UXkihckmXsi1bMdptnngfeZzXAM3XNqrhJanXNxp2hCCjFDJP17Zdt6Umgws2nSA5Rzb4",
  "key4": "3qjqF6vkZ4ezfLnvW6wTmpGbq5qRc5miYxMSfhVLm4YsjuYVnoNm18ZqZ5tYYMxGvyefP2QZQxHv9v1LEXaLsAGY",
  "key5": "2sQtiqrVXrLU1JT9wGnrpqTP6n4tg2to2FnubqP6qiVqTgCrrqiebrU7vFbLeLTyVrNiygMEMicKFJmbf8iFyqFa",
  "key6": "4U5ZuNReqzQF9uTTiWkbC7ykrLAx8oZVShqDk8ysgx6tvYWuAyNeJ4jgUa4VLDLTsUpR1YfTN4EF3Nn6jjtGb5eM",
  "key7": "3pnZzX6zpmpurw7ibBedFWUoJfvRpUpktDkraDp4tytCr15CxL3H4fHFjn4nQKJoZHk41fwaWCFp4MW83m6PBKyh",
  "key8": "59sqZ3QesPCAs9cioFqpje3p1qPCAifEGN4UbfFqAiV9CoVj66fiuUbXdTmfkHy8FgtazUZXcXJMeTYFtoe37kQG",
  "key9": "5Frug9dvzJniQEA326K8jfdPNXHodeSB1fnsxds8v7q3gDfyx3QT55BeBTQ1WUjVyTTmHn1w4oiUsC2rV2CsECvr",
  "key10": "5jpBDt35j88gLBStn2HuvqMoHPrQjdpy611wNYdEX2JpEWtTdak3RuMFVHsn8JRUuc1emZwJ7ekpe1wsFF65jkh",
  "key11": "znok48yeqgj1Q8Ak7HJJpHU6Lwy1c6GhBVfwBQMoeScpyp9jivFegw9spMGFk7sPcdRUhhrQc33NKnLXCjL9Ps3",
  "key12": "35d3WmZE9dJx3htSUWGXYrBeBwTE93XGYfEPNqJ2eBihKTp6fXhCsThQLY9k6aTM9t55tzXSuLJUSokWfuK7Lgoe",
  "key13": "586SzZNsUJrk4zraekvBuWqHWGRLSiA5Tsyoo33cm4ZNjpMGiXz9gHtfbNbFcuryLCGe6Q1Ap7zx4327rdiejuJX",
  "key14": "2qLBueGypR9KaSzhn4TPAwLsbHLxfPuDNmrdS8LqCQ32AZ5Twbu7Xmo5goivwmZ6JKJaxHAjrX5vFamnGyhMvJ6d",
  "key15": "3dp1nVFVDwvVxtNSMWhaGbNaArGNGZsg1zxiBTwCbMAEsrvXc7EaFYQ3PfYYtMW8MYTZDju2ztRATuWcF85bbGo5",
  "key16": "5D8xzTtNK5gLdqtbrHfRvcPAKgSHcTFa1FKw4ncxTABJCa2hugMnfiABkTkW17d92bdrvGU2SxQH5Pzkjqbujg1m",
  "key17": "zYra1Ti7XmypFryyuRtWVdoStQMo1KFTJMxJGtQafi8z7Yw8aHyBW828AyR4zGUEfiVNYLNXWpnsxDLjgZyq6dM",
  "key18": "4MqCt6hhN8PMCkce7tMRsxogcJmEFGMjS9WzzJ4Crx7MN2tPCvHZbwyoWMvnYFJT2qhBE8wEDDhCwjjEcdCJhwhW",
  "key19": "5PoSsrkPY3y37vYAQKpFuCujK2tcC3wEiqWdK9gYRy7ApUZrC5g1Aqmy3uerYwb23yzsYCaCEZZZRzBK23W9rZj8",
  "key20": "4YdgVoeg1jsx8sMK6VDSR8mpt8whCNKeGFsVayvjMWnb8nuSA34Zs2L7Zi2n4F3AP4mSy6cDrSzvS9gu1kEWQbvi",
  "key21": "24Pj2v5iLNBkoXwMCmVunqkbJzYBkgz3XDxtG2KSrWguuxphxU3actKJ38GbnAVdbVZMiiKp1BVBXbRJKqXaQbhT",
  "key22": "2KLA5KMqhywx9HfiJQx4rN1U23UWd4EpDfdPw6FWai4vWsKXwFTsGnewbCUnubo7mW28L9aVKFRyjib6eQhBZwDV",
  "key23": "sa9zwzq7CViWfGgCQvK2YqN1U1D9nACCAJe5KDHuwSabQAabnCbRf3vnvfhxr5AzTpNXav6Kzsyx3WYdARLfe8v",
  "key24": "3zmB31JDbhSjCS5C8iP8EjhzfRyrN85SQykVkfaGtXk1SnUUfZGEhn9fSUiD7wzh3Lo7imsphnTnzeWzLXQN5dgX",
  "key25": "5m3Zu3LQRx2igqcoFR4TvSVCapJZjfEJnFFqzm6oPugWDKD7UA6ozryvXwwCSR1YdPzaW6VVnN8Sw9wgH8M3PB3m",
  "key26": "4YDBEVB2eftNxn4E2Vum7xXX9toNzrHpAoKb6gtUQhGp9HivMeg683Y9rV4ok1oJJtNdGdCDs9pusP9b1yZPjMkj",
  "key27": "2Lq6tQvB9LWZSjbEfWnKvinVitdzvLkK6qhW9VtdvVCxhxhJHed9U9gc1DEJHykLizvWKogkPCN23LvVEyKe3Sby",
  "key28": "gioExdeTDHBo4fPAmBHHoc3f8Umwy95Xb5aiXkd6RwcKTNiSFMyce5QTRaASCUSgtEJ8sutDUHjFoFyMcAnSkVH",
  "key29": "37TsebfWmr19GfVLmKwqCkcneQ84US67K5x4EY7ybrkiZmpfk6YhVPaRJBNiKeGZDEk9KkmBYCtKUtuzPGjKXKFH",
  "key30": "pa7FUvKZJhzYewZPjEdVe2Fn4q2cvuc1XWGbgaxnCTxpDMDJ5p4GYgjELdW6W6WogCRNdvXvmwqZzn8n7aeLeW3",
  "key31": "461ZvyX1QZrtjXjiw2xvRnQ6XQmgVjTSgGJhmrFmB6sPQzDDXTBMYnGd8yxsBUKZQ9Hg6hLY5R2vEpHDv4ccNjRB",
  "key32": "QUnkgY6SibpeXeYE19V947bVNkZBDnQtx1qkyp6GeMvNQzn8iN8uZbW43Eb7wme97EsApALAKtMqG1UBT8Vi3jU",
  "key33": "5Sy2itEmP2dB7CuHz5omnWzBJ24eJd81VRQYNiSFwgQu7hC28fK7FXSGzCu9uv6pXSArehZfKKxQKRbeAyTZsHAx",
  "key34": "25p5Kx11DvyURCka1U91N7JKvaCdHMCm17uopjWPffUt26LHkuVwBJ9p8gxZ1bq9zv8PpH4ff74qDV82nWB4MuHW",
  "key35": "2Uk9h8mRu3Gu8MSRLHc5cnGRNjzKv6Npqhi5bXiCDENBjtwHGVrUzjTVsG9xu8tM5sHJ5JZakVB4DQtLP366xzZX",
  "key36": "2n9wzgQi2Rgzb8uE8mTXU6GiAXzz6d436ghXvSvjuMmzMEYUzVtE6B8WnLyADVyCCRjAcBifJheKzZrDV9rzB1U2",
  "key37": "7t2Xnx5WY7NwdipPq7zHpf5xDPrHZFydbeFzaeYD2m3xHMKoTi9CDSxwoa1GR6LJxSF4CNm2ZaYaaS384tfWnhz",
  "key38": "2Rfkxz4YtyTxcL6Ng2ebgFhJVxdCecH2qdoZdJMWuf3qhYZHrHoC2f15BWtZe2iaKZaz1uuwn3JuN9qkem8sipPN"
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
