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
    "3vry4Xyu1KzxdCBxW2tedH3igkFohbNVYJT48BijN6rwxwWuqecNjjve6QfvJm4Gos8R2evEhqBxDVtaraAUVN8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xznngyTdLjQBvzf9VF8vajXp4qHsAvFxRi1RsbCmW1V9xb1yq9dxZhEHNxvbzPWLk245dNNDRqpXogB3u8w3nzg",
  "key1": "3iMBuuZoV78bduAzc5UGWzKnZXrPTdZon3fnZiv6ishz2qJaV8631fqVrdqaJTNpLADuGUH9wtxdYqMnu8Fd9w9r",
  "key2": "63ZazSR7wRDoxVLaVxUTezVgaoDHQLFmrY5e3ppHQqSfUPDVuwbw6ERhctvRuKbgKVgQRMWveS9bt1yV4uv3mbGD",
  "key3": "29W6XR8KUhmAKBoEAnjmduaBatujsavqj4K6cp1k8eMRNk3ha1HSoHbwHTJjYvDy4jArVw2i42w5hSjCS88G8gr8",
  "key4": "5aygunM7bN2HGFntC25ziJUcp5PLgkBvRAhfrsMreL4mvVsT29yjCJDd2WQaqwLKxzVjRpYDpuSN6Mq4hY11aMn9",
  "key5": "334aHc3J3f7xa7oGxiRmSbBNgv9A3oRU19aXsTRyzf7dhjz4tUD5VAwKwi3wbGar471HjCdidRRsJ6iywQaCfG44",
  "key6": "44nwyEtm1iZeqq2HzADre6hYMMD1HBeQHR4jbAMNkHMSwYSqrFvxg2fHkdEwENbucoec3qsaiSZHTKDyUurKXurP",
  "key7": "DbgWyDsNNkb3X3qNiBNPfCZBnwXC8asAMPakbd97Law8gjiLbjFhimLsUCrymNnDWbBkWvMXeYZtigGcYs5dBU2",
  "key8": "4PNpgtFJn1tm8whmndRpb6e7MYWyHHtmGuicfPS9irucJNxaMo2tdGS9vN9qnie5yibdDyVwZ3hVh12hoM1UPtAT",
  "key9": "s8ju5J48hStzDiu9paea8CKWBsas9siRfyBiPzp2koJEBgmxpYrSvdkg65Sfcq8p9jKkdoShXucEJhNV2qsvt8P",
  "key10": "dABBG5mhFBmDEM3BabLGULLrkgp9wVgZgLUTZq5fHK3it6V2myj6Ca2TUiBxckVoU3kWEAQHue3joNHp1Rk6Hu1",
  "key11": "5c6LdbzZJrGggGEetCYcBV4aoCPiAD9yzh5mAoUe9xUbbn5uYH5huZPeRV4Pz2NGunBybRTyWBYbc45HAcM7ktqJ",
  "key12": "5Gc7PGHeeLaianCmaZRnZEBAL1rWkaobqpCZXWt9xssTTvTXju6bwTXDgzE3XHNcipwwBWJw94uo5ZSd7YMYb7Jj",
  "key13": "3LHCSGzrtYR1sFCaHhpErgAywRNzir7mAqrKbg7Xy7qUmZFKPUyo9R7WbF11kQRAJCWSmypw18QAqdZdL4nd9nye",
  "key14": "3wrB3WXXYd9SmFa8FKzCMZE13aQz984SamaFpTHW5ziNKCAixaNUe6Cwcwtkz8vXSE6YUh9apEz9FWKwhKhinPci",
  "key15": "xyRPRr4zQ234mB51S9S5seMqHyBvoTGPb6rEgfYKjrMR3Fk4u2fJ119HhCfyPdamyqVyqYLQxvsVVXWnVt3vyZ2",
  "key16": "5GpqGL4u6rTrL7BDzdMJvQbt48F7U85AUfv3BATu7CimQbCqdKehmAenbEBkP6Lnixtfz1fGHRR8NuQDmqHEM4tn",
  "key17": "4tHp2PB59drBicU5uDaAqh2PQeyGfuCfXXUcgv1VkN8W733GmWWDFZCzjb4EEU1TEL5oQKsqK343nEPMYdiX8vyE",
  "key18": "98p557MGaeUSvfH59pvaXtQpFrmxyYonfUFUR9pouhYjUrZpEfgTcnYEQh3qwa96uB1SBnToEjgXVohQxUL5Q1u",
  "key19": "5zhd3M8Zkuv8vo5zKXuK2v7R38do9FK5jRoBWthcYASMCRVxgbuLXY2Q9q1cbEdLA6aSNmjX4WqC2yzezYvRMqou",
  "key20": "2oZFhQHdk6FZWiCFGA88LXM9ex4Z3c4FAgckgBM1NugjNxMCJQRpYiU66jnwb4jXUm2WkAnLsThCsJrJd3M1M9PC",
  "key21": "4bDDTFB4ttcyraY6RcviBtFsh4o37anm6Ee98FJSvE9Yvrrh4Y42bosU8bUwpqeDsvRJwWgbTbS2pAPvTpm7k6sg",
  "key22": "5f4Lui3fyVk8fka69NTQvz2yc49Pa49YPxMXbCbzNApMofk3CZffU4YUkvhyw8LFSQotV3QTYDPuHrhsQ2xJVfyU",
  "key23": "3Xiyf9sF8M1mQs36QNQMuvRAkLcg3snazQJk2kj291rFTeosxEAGnLp2QMH11kHAiKtGfFE7dR1TEwa2K7y9TcRi",
  "key24": "5yVLAqYTNMim2Coww5yfEewxXLXAx1ohKcuApUtbMCbmvQQhLFBEw1LPtY3rT3JCsKy3ER3Uv2qVdpBYjm2tDnWu",
  "key25": "3KNjLh6HbWZKa54FmqEa4trjTrQ9Qsi3ZyKzP1kRQ9HixvrFcnE815CwsSHDqn9a6dtJSTmLEf4EPvz4XEH2cmm2",
  "key26": "4BPD5jNN6KtkkHmTyZt6aBxspgdubuhVt5n6AhekzuXPTsEdnsZx4RaqnCSkX8t5vk4UXHDrwxoZe6j5k8vJL9gr",
  "key27": "495UqHBWjEtoa3ZoFfFTagdSmK3fRLQLs9FWF1CenFEaCBdCNzvJffFjKFdxYhzTcZYNgmMN9XBmLT4WpyGv1VyZ",
  "key28": "39mn1yfFyHfihPhR9SLtSwrPRUgusaqV89paa16t7PiAeqnqb53SzzyRe3KfkHZPdFnuYBGq2mirAvadyfU3hWNR",
  "key29": "2bS27NW3LoezHtF8Lz4cA6bJmGmhBNHDQtpMaDybGb42fgr4PwFXE3dRQDUGJQEzXDhi2XhH1ZvLtyKhaCouVGBL",
  "key30": "4deqR2KpswHtm52sU2ch7DwuR46V3vTG3bU9Z7N9fb66xQcXfMWAwhL1FgNnEm4hDoKrCxJ3zPybBEzC7RCon7HF",
  "key31": "2Uj9jqQdYdyV6b1T3meMdzPCeVDyZGy9cEnXHwNWN7bL51Vq2qo1cninGGhS6wpy6zJrCXo5kdiHDXVigPAwbVP4",
  "key32": "xxk8jFQdhZyq4jtvHM9dtB7oDZCsqgDU3EkT3b4DZ6Ch7RDLzMuMAGfgezAomiJkB2yAZ2g6iNH3HyJuVehNcsC",
  "key33": "j8mq8hYSUfQynDSH2DXHFk6EYb48RuGoZuyTp72frbGMxfCW7ginriSVAJtBcrzzJCVUjByEcpm9kMxW83TkzTm",
  "key34": "3VoTTvER1eKnGEAzJHNxtmpNp1Dki9CYKmF7iLhtLdK7q5CJfHLUUAXSbMZWsbBToPGzbZz8LCC9s1ewaA753XFV",
  "key35": "5w5GQwzFCEGRfkVaXN5KsSCFUfgEtGqNk7UjtHiNsr91sh5KfveaqnjJXApX4CMyka7DRppvkbE15HtZbzHKoGUC",
  "key36": "2tiPSAY2G39WkjSGM3JBXgrBe3m7xQR7hc3R2x2Ewmtb9V9SWvjMCscdJYHvzKMc6BHUKQTbcAA8W9U4sTMDkcvo",
  "key37": "3HK8YuZxXGZPK9KC86ot1aj3ig1QvvQkuJKK9DuTh4Q4ByLw97xCngf7dAfXs61YRgou1nfx4YKWv1r8efpwKJP1",
  "key38": "4j1qam3kHuqByuNtQPkkxzQiyXRDApyX1jHfed7M13FUSmjM69KAMvTD4KC92pQYTQdLpLRnVSfwiEKjF3EExJgv",
  "key39": "388TAcHazmGQsxrzY3JSgj3WhGV2v4visRSeUtbrEse8Kqx9oJzNXKMKtRkGyRAjZYWjF31AF8bESbNt1jKG1GEJ"
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
