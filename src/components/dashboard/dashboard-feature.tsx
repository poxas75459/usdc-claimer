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
    "58S9aXqBWDgu6Vi562pm5rpm2QU4zpVvzYn3CC5sdrA6vY419nKY7WdXd4osxHLw9N8CHZdfxtGngtgXLnjUTCwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWTSvJ8BD1ANtztERuCzFZJSZxSW3DgrhRvUyr1b6E8ZET5xz25QgdmaaMTr48TPV6F632sxiUpHXrK7dzUbL6y",
  "key1": "66GQHkb4YfHJQobgf67MTR3fPmvm43vNe7vacGWjhwxd1CcwhDQvZJpbCxwvwRx8f4RgPZreCxQXMa6TGtaJKYYQ",
  "key2": "5fX8PBjAgAGjLA3Sbe7XVoufwbQkc8PideRfRzeM2xEWZEkA5FebXCbE4bipbr7RxPAWk8JbzyX5d1gb3SXXjEBR",
  "key3": "3mRYUTqPaVZ3XMGDE859TWFiWJBivr1CzzeQ1SRHibTkYWPQAj3P5Md9N4uzKfvUnpBxeuch39LyVHSggZrTVEAH",
  "key4": "5N9JVtscXV3YdQSjeWYCheeQeFc9n7FTGvteRmprM585S8aQ7WkYE6PyGvzXoedY1LrVGBKYAeQyA8VL4L7ZHYqq",
  "key5": "FUCHVV6cQEYet2PfB1V4YNA1uYTjAiuS1iyxb2uhM661o15PYFSB77ntKjrzPFveX6B332eVWzsL9pmKBoix28R",
  "key6": "2DDUthUDVxLXGVSAsAdqHPNPaYLBs4ZGPhA2zbD7fqZssQ59QMrGtorFH13BsYAvjNBdv1HB9tL6hFPue7QNjmUc",
  "key7": "fKvV8AaN2Q3cP1fjr1zPRnqAduBaF9uRaz6pYwsTTNLgBHAK2jSo1qwHFjuYHnrGU6EmZRLNrhoKooUWW97Cw2H",
  "key8": "3H5uPqesJKe1KZLtquaDtbgU5XRrzpKNwLZ4s7KvzPMDfNwbugrXHR4ie1UYjvmPhJmmkbaJWDHzJccuEHkiTWBN",
  "key9": "4dzpEwfArJFYfXQu2wbT9w3sK3cQjjEtJw2iSyXMioH2vt611eMt9SvPPSvXvSyTs1gyQqqQ6FfprfcewDJR8Tjm",
  "key10": "3Ni3eybmh9EvUw565FBtyaTQZ8xGkRYDDjz3phLrEnSh4CzQssXVgruqLqhuA11UbUJostRibZiZwwVNvX5drHzC",
  "key11": "3cokLM7bRWyRj6mvxh9Qwd8kkgbjNbREkcXTMzDb731GTA2yHZKdrosKaStYDgtN7kVbbM6ghMphe3319yHwd6h5",
  "key12": "5KqrZagYyWXu3STaqUnE3svzp5NcncYL44GPhALvEDTGEa7s6frJWJxxsPjJzd9UYvcGKJ5rLZe91w9TKNWfQ1Rf",
  "key13": "5sLwERYF6gYRj9svhuV22WtcjGAxSssCzgxNr8JGYwwptGVp8fEbbQKVGXu2HpqmZmJk4ZYdcdFf1495zoDZkwPF",
  "key14": "4DgjeA5XKBDZdGwzCcE5LneSQa1yGnAaxLfLfK87syU4C1KzTMA4QYamV1Ebuycp4rDZyT3yeStYqzW1WcUTxARS",
  "key15": "4bTvsNPNGL2oPSj9VP5zPFReLWFygfY4fadx9dsUoHMAfJ5AcSxzD1mtRbi5SeNdkU6HHBrMTmjrFebP8nDi8ad3",
  "key16": "3yQqYNkyFPjPoCPqou1rHRoetpukbv18GgMMSrA5VKggcqGRJqm6txfZ86W94ZGbvwNVeusjjMsdH8ywSNJbrpSw",
  "key17": "4EABAhxjqg1cVxQg7wBy2dbg1sx7FpQw7mtKKQFD797uaD1KckHZKY1vPfT4HVEKn6t6SqpAg8MeQi9LBgSwFuej",
  "key18": "3WR1YWkNrYaxX7mR82S8ctW4t428rvrbmAUK2wkLqb4qKiaGPHbocniS6zDwje5oJLU6hn46vBxRySCPvyD7KuSQ",
  "key19": "ez4qo7o6RtwZhpFazcTZsB6NhDXWN48j4WjioF8jZ7MFgNJFNrPnAeyH3rQjwkQhbEbaQLMSakUk5FdFX9Jamiu",
  "key20": "5aYsmvvqVTPhW2n1TYEPAdCuMBhbRHKGU3THPLQLWnbioCtp26MNHwP5nhqPAPsvDP7tCN1Y3aYJnSJvVuhH1x4r",
  "key21": "4bDJFwBVFVTQaQr1ZAeJQnCEtA4Q7tL46c1NvVFpWSsWytpfWrFPRyUS8DnTFDqLSzxDu7PbWjTwcyBujTEwyJse",
  "key22": "5TWdiynvt9DBXCV8D9FXt5TNXmrYgEtXQuTmvG4oCnd4Fh1Yc86c3C91J9rZusvvGDuLV7EdThcCMKc3SJ7B9gLh",
  "key23": "5UAvuLPoFZQUB8Pno5QP5f3LSk3QQkmDJnG9KP2zfh4bboG8MVLw2rL3ds8kV4RTkKhH6GyQ7zy1gcrds5wok4qR",
  "key24": "hNaD6rknYtxni5tnWHrVtX1HDhux7xTPmpUsiYp6iYhWkwQYd71wShn8XKEChR4rNLkUV34UgHgpPx3XLZgfN6A",
  "key25": "4TZsRudG36AT2ot4RVCQWSDeKmqsTf8TC3wZfDzvM3H5NWshpcyJQviff4LhxHMrmiigS758UHcYjRXwxVLFkkE4",
  "key26": "5NL4MnvpYsThirsbxHcsanPbvkMvWjqrgJjteN64XS1Bd3sEydzM6EpWhyAtBg9ELgLJmau8FhmH4Q3tdizqQmS7",
  "key27": "2UEVaqBa7iHcwavwdsGkFykYNj4Vkfm18UHXkYq8JUku33D4D6MLb513eP2dxpv5BoPTveVi5Ei8FupipKa36xaL",
  "key28": "4JVcicjLb4ignK8WDvvb8o6rSaRybdsE9v1Tg8aHpW5g4n28rJfpAWYqBYdHPeMKdaudBbwoUnYikRcMRKMeK6Vk",
  "key29": "2Mw6bTFiD8RrHKWSxZUYUdkcT69j7SBttjuXNTjzP4fA9u3Gs6ii3GJjmaebqykiNE9tdy1GrVcdKPaNKAUhkf8v",
  "key30": "5Kb6hM1YsnjwHXTAd8539ukKyeaRVwfDAyNXgiZkXiQ2qNUiqV97yg8UtJCSMsieePmUGjNeddt9VrGH8E1C6MFj",
  "key31": "2KZgEyMewpoTXEyiuqWHWbGp6faq9NhXsExyu8o9yMwJnLRi8kQPTBdug5Ty8Vzr1a7AXupWE1JiF9EsyJEmihbf",
  "key32": "568HvXKGRXZEmzGkt6kfDFhr7dDEqE6HwpnUtFMoizEQmSyBcG3EAZZypdHQT9JfPRZnmGzuDqeCohumszuXYnLQ",
  "key33": "f9bXVBnAYLHZXUYcozhF3UwgDiUkg39MzyJrJHwQV2Cr8Nshv5mLSaTMDvSPRcXGV3vFxq3EEhdX4x7PhzTsTM3",
  "key34": "5Ug5bd6B53sUcgWueDUoJnv7NvA3zwkKTHaDKnNXi3hv8BKjbP5nTLRv75Eja2ENXRBBTKf57xGSi7HcDWQRz8hC"
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
