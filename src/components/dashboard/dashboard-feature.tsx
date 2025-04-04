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
    "3cEwvTyWQTJifXKbiCTmme12ujhZk2mLB1SM4zhcQA2o1qxE7CGisBBUnxsYmbg9EV9uPZh1VQgy31JCFt7Uh4aH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xyfv97W6Gx94fikQ1dVT4bZ9hPZE4KRJ3vnsAfyQEAMWFTVTgt9pRuCg3wN2BrKmTXrPGotmxCPcW83G5wmH9vT",
  "key1": "2HHprGD6X4NVuSyVbYbJH22VqkraMnShFiAemGpTtN1AVpNt4edp6xvEPUpXcxaTUcDduDoXSe4APai5b9rQxxp6",
  "key2": "2T3dMFafreZEQq6ZmoNmTw6QY6watTfccH1PHQUA1QgPDhHv2hsu1k3mTgiSnuJfmipa9mTx132LWy4Pf2CPYJpX",
  "key3": "RQmuXBUfiFpeG45SdtgR6kaZTHStyvVoAucGKAU5bau6aSVNAV8L6vqYoCpkTEbL2v1XqE597msFjismxE1VnYW",
  "key4": "3xpFbrETRNEwFZBpN6jSAfJUKLuR8J8dX6n9Yj7GVqSTEcdZztzx28EZF4ptqfF5kJ28dPYiCYaQZgK894xbGh1R",
  "key5": "2eTew5VVnfU2uNA1MVsUdWiMNYg3kai6gyTLzLsDRZrgyoTKNJ3xxjWcW7BbTL8RtQJ5pdzmyxLpp2pgxryCbvvr",
  "key6": "5jDBREY5hid8FGEGFHjP8n6BhUhXSzbnEuySmYAUNgkoqmhmYrkYz8LuAtWavTkEsyg1ieRb7sf2RQgbbk3jWcSi",
  "key7": "32F8Xgq8hsE9DYMfoReFcb5qp89EJ515uCFyn7btkM9QQbCNVfsU5tUnzoMFw8kAUmpfooMczPznNck17bskPb34",
  "key8": "2gkgSGsXmdjjPzHG2hwHGovQrx83R8WCUP6fHupzecPbmXQEp4Aa1YEJGDjs4SqRnSPNCABgrDL8Eem31Yzcmbt",
  "key9": "4W3mjh1xnjQ252u3BVBJZbt1uF9t6ZagEVi3B91tug73BGqt3EbPSG96tRcuKrmFUSC8LySA8YbFx8LyAp5LUHG5",
  "key10": "37p5vPAzwXgzfVNL4vBMumHxbUM7FbdNMrTNgTc44Rd1G1ZNbiwQNoba7a856rm8R6cKyAPHtTcEU17p5wB4RwjJ",
  "key11": "wASCsVgsiNHuvD7AuXU1v9AxpPmr3uPhupgjgD6M7C8vuXy28Y77GfhW7ymW7NPJF3Ebdr4dAXYJ1QYjj5xubKR",
  "key12": "4jGogg64Q8xsSgcTQud8Zd9kLMFhfuza2nBPURNNz3BwRCp5fqwWFw2YCQKQ2qH279VTosVSe4udpMAq3ENd2E2M",
  "key13": "3nEAm1xAnDdqYqdWgseytLvbDF3KWx6ZtVnF47Ku2tKGkzuBpRapfE8rmkMntivkCr6VhTPRwAZaQKp3MbcdMMzN",
  "key14": "5hyL5GGaoiDSKsF1jeAKS71bKE72Yig7WPRjq9891ejZsHJAR9GcpJG6zRob19kDs85fb2oT385RAYz6Ubsbrxz2",
  "key15": "FGaJJAo2y2Pd3FQ3APwosfSJCanaKmpPvsHWFwXCaGbfpBE4hoQadXzo45q7Huh7vH17pFFzs9JTQBeLQibT6z6",
  "key16": "2RAs5i7nZ1UjatLikg4YSnYJEM4ozkfpQYK7ijMdYB7a69trnHAN1BkjyuAJxHwdZVqZmwvwrWws8Kvx4EPJ5MeV",
  "key17": "4oQcNGHgbPBm2FnUs6rCcnPCRuUTwGTZVkBuNZduoqc28e9SrNhovtS2JAkbTCX6VTMrFYp5Pyx3sutB9LAvH1WD",
  "key18": "5uWVGdk1ctTcqYBRn25HurbNVQTL3VhyLcrNXwic3PSiSbxW6YK5pzrxsDXZ1cVJ7rXT3CnCFwUf5t8TvVjvDsiu",
  "key19": "JVPxsLnT13cDpQdGXp5BesiRvQ3rPjGDG2hc1k3Tk3GoJGio9HiPe6mMgu7WtGGRmJPmY5oowd1v161ZW527T5J",
  "key20": "UwFPkU5wVikob8kz3VpuHPmxfZ5AkCjFv1ymB6xF2NoRwjtwSs2friWeMzbUpBY4HFGACCpkig6srJ2iWxMsTnT",
  "key21": "W2uKshThstsNTJjctHynRs8bBFAaPnTrLz9Q8LqnzfXZpa6YyArrF7gsPQ1LaaxHG7rzX7fLnTSnKymwGxPyX1a",
  "key22": "3sZJkxyM8ZSBJrbQeCiSVQav1Sj67ba8eBzgwGT1GJzCzdBXbqJ1jXAPKmqDkE2Mg9wWhKzXa1B3vccvtkyhLYYL",
  "key23": "36ze1hSBVNLC1HJsKgtSGQFv7wRenLkSXhs7KdApMJoeTrtBkVQAt49PKNpTgw3Hjkud8QPM3Pi14esCGpWmPZWp",
  "key24": "2eGYC6yxBUx8WRdz3y2hGVxhp9dpHQLCh2xP4wRypionkCErh8HnmRPai2XWmhdwVrncJXrpB3QyxjNs2DWmsMhv",
  "key25": "2PqKBB4mWefMrzHVzZEe8B5BRSYDWbXCFHtqJpdqZKE2x8xkyPQu3cXbEJxsjp7tFvr81h6vKbavP6EWHjvajny1",
  "key26": "3woKw86CaYSKZJTKAeXAaDyvJEEXuMxkJ6d5JG4hjN6TzJb2oGwvd6Nym35Vde4nNe3Fjjjs3LG6J7CWGfccYo3n",
  "key27": "5rmjEncYYMCeWPsC9PvFEuznm3f82ck1yaW2UDmox6zQDod6qniNH6J41M5GX2ZyAuhWD2zbzSzAwfnL8nJgLfgi",
  "key28": "4vUzjZvfnLs3ZWJDBfLXQfT9wasSRTqoAFcRcXarLKZCi1bQsUgXCrD5dKW5rFxqYp7Rjmesgc3A3KTNQUjaaAf8",
  "key29": "4AmTh37Bgq9RnAfRAd3yJWfG2n6ExEkzgMtGjWB3hqg2Z2LYP6eT2y28GhisKBLU3ji7zSgi7jnt3MBeM9D7sqmh",
  "key30": "3V3W54Gth3aAj2b8sW71DWBVpns8PJdzoofrVjQ38szWxyd9Rfbmp5LPjaXNnfnXXGKwqcyNUMWtADAhtw5ChZa",
  "key31": "2tyQy5BQv7VwxVSVTzhx9F21AtKVz1GCksMPKMSKrzNYigadjnTartvSu8rsCJLhM5dj5wJuPEC4wAdXKLJhpQFX",
  "key32": "57BEX25pkyfCCJQS8RSDJ8jAzBN4zdtproog62BSjJf1EQF2Br6HDCVPswnzKoJLrrGracV1LennxADGdxcEJkBu",
  "key33": "62RHHU3iKTX36A2PFvHBL4d4L9avkwqQQnEsKHL9GUcJnqdE1QEa6nLTc9sbajrYKW3da4SKT7EDqrsDLUvAwjqW",
  "key34": "3ZxM32Fx9pqm3jiCMmeSipfkL6jLf47VzLfGd28qXne5V4jMZHW8mRZhWyEBa11N2xQLBbHQdKPErUGesqtkUJCQ",
  "key35": "2zi1jZ54mii2XDkBCioxsictdYv8JX2qJWkadUFNiwcT7GCceK7w1e11wFXEdf4CoidDqCariM6Z5L5coeer9TBK",
  "key36": "4WEgLg2JubKNeokacWD4YSmo2DRYGkREmFYXCyVMYZ3MZLrTyY4TADUn6bYbQtdR912wnkMqzVRDcHb5sqoWfJKz",
  "key37": "4W4xxAxtmhQXQPyKBpxFVRdngNtkVJL5YCqbC4w9qLERhtdMUM8ZiifWte16XwjU5ApKfyyEACyCwy7tb1iaQ18R",
  "key38": "5QJBKywZZTvkdABLRpkWQEBktBoc4yVN8mQuw1PkXUWA6Yje1LogWy4qwpzdPnpyH5azi1xfqRcZbsHXBfLQNYz9",
  "key39": "igTmiqSkxEQ9nDFtZ3qusxxjcqtweGyZR1sA7hbCQZ9bSNdVzpiswnPxbCASy8b5Z3ypCRKe3AuNRXDYKtfAiPX",
  "key40": "tvXkRMM16w9CgUDbz9JcXZJHchQdq7RSWyzgBdk6s7G5LDVg9fQk5bTGfgPe8dhFmHVKki6dVf13A5m5XFRFM2C",
  "key41": "2N3ro8RmptoyrZH1tPR1WJTtn288MFVjd8p9jYQWoRMQLDYczcKL1rjJgeDpkPCdBSrGeG3XKByHpYri9c9KmGAs",
  "key42": "2fHWKmnky7A1eVMv5qyx4hit74ru1cAnbFoX17ynah6qu1LNRfdNKvKuUFTo49nKPue4u17ph6dAD8SHTwJ8JRhP",
  "key43": "3LHLT6st5jJyiBJ7oQ7pNpjNaoM4rK1hFuJ4ubbfsrGEKhMwhjB4J9sRUM1Bn1nJbNyrR6J5JbFTXtkrUTfvQPfW",
  "key44": "mcURUWvVsrEDaMrsjA7DncDx1PDuX5rEbP8kfoE4J179vxx4rprMFrsrVe6u2yttnrRa5qmpCTmDLyaMXvyKAZW",
  "key45": "k3m8ejaUjrZ6K6j7KpcWtcqqMKaaQAdQDSky3uWVVrF7HyLtkGKeBFqEhMDLDoUk1gxQLNMn1je5ZCRDgFHsyFe",
  "key46": "JowRqgh5AR8no8fwNRQ2XGSXhBEy4Kq2VXp48yopkDbi9EE2Wh4LmPKQKWWpGz23FcH2RSx4DwgZWuybQqqSAkv",
  "key47": "5MziUbZfhFQNCFxgx74dzZY2U6hPGcyKYQhhXB3pNtBJuUHavFDtPGqYTfjLW7bXjikHuFwcK58LW72jpom5iKDG",
  "key48": "4CC3WCh7dULjHbpvxysqkdz2u7Gi1wtEKHw5zKMAyiWNjZEWrUtEFvPd24oLaXkCjECgA44WLT4roDKphxozwJjK",
  "key49": "5UH41SnZbhGEEoGvcsRjAdEc7jxDe1ZUj3N3C16jiK2DCmJo9rFFg3EQCgHyCYNskqTPNAnVhdg8iCYMK8novFB5"
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
