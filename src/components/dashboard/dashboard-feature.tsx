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
    "2pFU1R8X9UCbjUNdLCMAm1spymRj5FCBeN1xL2qttjUcMHq85KVqLUXnZhTzMihdsBM7NnxG1fTN4yTZGvt8e8Uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FpwWiojD5YLHkxCLyc6ioDsucwE6qTHtk6ETjLcECFEn7vqJkFHCTmCV4X6j52JAoFshS6dVJqkWrMMqPoak9CY",
  "key1": "KauzKEJ6xuKvk6oHkYS17wFtuQopx1w7sJ4L3hTFptnGmTA6Fwvh3kgDRuSTd8HS6v9CFuqhCbeAx8MXgxBSwLh",
  "key2": "2g6e3CjMibrKvJfCBy5WpPHDywUVC1iWFwBxhT3T7H6SWyVzreUmusH8QWzq5rU1bSqYX8rhKpxWPbgbpVcvS2yw",
  "key3": "4Ak5PvZ2wBco67uYGXJUAG5LAbz5bhpeLpdjt9Rq3PUNjkg2UmDAR7GGodXjAVMZJheE7YeKLJ1YReZMgmmiUANs",
  "key4": "5E34d8N5oonj16CHwhSELJgjccKmqkFsZwaPF21cchZWqhCcEjR41T6bPD7brCuSMM9whhJbrbZ2GvgRYk4Z56cN",
  "key5": "5WH2Y15F4rt2VfSemzPLMK4MsMF7dT6sdQ5Y672VccMqWWemVYm7UNk69bWzKXwq1A2DsUf7ZZutfw14D4ftg6Es",
  "key6": "Q1zCQisGsJnGwsiNqWbjtGPbkGtp6y5nfdSpA5q1kH8PdKBjpzQLJozRQBkCNTHXx9WbBgFchcFq4j1zezEyz63",
  "key7": "3EAwj9NoKuVJmKfnHDHy9NNLtnxAuHLeommyE4dBc6zvSrx6R6U6r2HjrE2CyXRdVomayXVKtxSq6FqmPAHCzRh6",
  "key8": "5caQKxGhkBErrGrnu9qc8BM59M85ttgHfyWsSCjw7Jbhhgz9g9Z9bdGsWtsLUVGg5TaB6XTqcdYzkwVakNxkJjek",
  "key9": "2oTGQrBR6uiGLoMrFWUBdecQmpNKwKRbVpWbLdQ3aE9DmVZRMbz4uHvSPur2BTKGu3UfZMcopbgtknK3GjxQp5yF",
  "key10": "43NCMzYKZzsCzrdh9ySZbDu4wpEaA6JW2uzcfxRtFuHTHMqjULV8dNqFsJtLWWTX3dwmgkZK28kpvjHWTNQYyENv",
  "key11": "37t5nKuLxUnf7a81hhj4EGgnpMxHGniq6zpQJvbzV99NZBemNR4kW54XqVJysetfPh5vq2d5MxYQRAB521AD8Vc7",
  "key12": "3pVi2n97GV7xXxuAj2TcRcJfM765WFmzqa11mxCUGZiYUqsLmt4KFzu5aQ4kKFbvYDKDRgbJ6qfFz1UZLAo2CJjg",
  "key13": "2oisQw7chJF43Y8HevhY1Vi2dkc85nMoneGXZ3pvYv7FLfJiKFRrucCgYGzf6kW8VZjEjE3tzC6tqzSKJra1LLYc",
  "key14": "5hJFqBVcAfgGgQaEmvsXBT3AsotdxaPVxujjxkkoeAeAMuDUa42s7uKQ865yLhMdMFrQ4xzsvVPVMyKxwxTWmQEb",
  "key15": "65mCu6X9AJD2RfcTt7GWdg7LHNFNEE4s2k8mQhQ9kNS6s18nEvVUk91qhFRx3VKu3PCu5KWuUqRxnz62tSXaABrs",
  "key16": "5VkVxF4vjkwxwQyxFfSRE51jZnkWtaJrsdFcyNrKshjc6WoyxuEfWvqx4FESTKQCHo2MzXArw8ABsHoGT6bNZYHM",
  "key17": "3qVwhEr59cZnyvMxozaPTsCEJzeUm3GccuyS9Dff3RGdVubyrAmpzWDTzN2wKggqFUADWrmC7zjboLLYU5cFsJrb",
  "key18": "Z6G1BkHqCtK4LP61piKh4YeF3chqdmYZtom7UfcaCEzb2uXEys2VqEZ7LBL3NU7GBgoReJTbYqwpHWECaVJibJa",
  "key19": "5CbEgy9a1K8Ngbe3VaqFAGUH8Wdqtku6nP3DrfUW8NrEAUfXVzhZowuQ5m6Tw62sW74Lbx5vRRyyJK5iCmwyuPg",
  "key20": "48SU1cbx56BdFUjFigbpE714eujA7nohmo7isfd5r9ryJMsGBQFGjt1dbGw7kt6bH6S8uVFNQjcuaunPu8bVBKNc",
  "key21": "5jQWw1YZo3gn5QDEM1ArHA3Gp8z6aMkT331anR6EQsCqfixCEnKLkGfrEke2cTZspGv2jrcHn3oEfpxrMcpfsWTo",
  "key22": "4KtJvQdhU6QxLAB7AYiSLXkvSbroxf4PLBFpF46BdcMmqH8a5FjJaCJSA4tiXpuAHxowbrDCzApqy67dMrJ2BAvn",
  "key23": "2TGFSmRzWeiJiQpC8SRbRccsBTHGzAnDiJSdPTufALbeMQM9rARww8cHFgXTZA2oALDWfpMqb1K6XtfYDD6r8rGA",
  "key24": "5g5PEpHCveokmmotcn6HdeeCN36EoNMpQ3t7KHEdj69LGAXECXgApoghwYeS1Gcg8ySAbHjnA2uHtKfjbLDrq5mN",
  "key25": "4sUy9G8ExfVY9fDPo8AiC7tWXgaHGJHsdgbsobVWhvbVzVV7VG5LnEyfi4GxdfSVZj7aJxdhaZqVpCJhCfvjxbD9",
  "key26": "2SoMQK8ictLE6swvHkNzYUwHMU4HA7Gi3qAKjt7AXKkSGad33EFhjTtpuQwj4uPPg7WuRLQ72vbY6dKpoamLfzBK",
  "key27": "fjDe84u8cEsFnJF2SgeHZZM3oAffHfygJVDmenTWCJ7tsPc6WM9g3eAGpfWVcWNLdrfsrRbrHL9FP8w9r4ZWCrk",
  "key28": "5QhHeYRF379fRdbMNxKq4X35QQ8kxStX2d1ShkMo2QK74e3AdUKRCokMwReZfd1AF8naAZ8E9pmTA2CuPGfga9TU",
  "key29": "2xsQXnXo7mE2UBcANztSh24Gtx8DxiCEcmEFP7atErzNoqgUiND53T4iNeAjGaPFo1CHw4mqcwe1ior51K9YpVMG",
  "key30": "63NpS5hZFaAhbgtL9Vg4TnxKPFmaB5RtoTqrgNnyunoicapy3viE1NSeYbHCbnL17Bt5haf63kYqqYxtPvejYiJB",
  "key31": "yxBsSRQxc1TmJUTbW1TqAwq5zU9uMNya48kt1UW56ozjuFKudQSVVVZcBzbCBHCaTfAVaqHRHNt4bLPLaSopX9k",
  "key32": "5MCJ6kAF6HZ9DMh5S6JJWmDGKrmSmCyaZQz8zKe3Jt6SSeuB9YdWJ8p4NuuJi63JjDPMWBHvjE1Z8eGF5yaDEicM",
  "key33": "CxePpQ9ko5NHFfZmfQzEMxBw8PQE3qBpjmCst1fZdRZTqLdqtXGzTKmgWPaECx5auFNbjU4KFpoAG4vvDsuLhC8",
  "key34": "3SBPcE54j91Qs5HkKfj1S4BuTdapB99SSiWDimoYT43hn1TmqER5ZRFyMLAYJdeJYQQePotsWUyb8YwR8p3PN26S",
  "key35": "2DmnRG6FxEzW8GCiPLGQujGAQ2XwUwcmxZbVTnFHMejgoFHAKEsMk1H84nXFFi4348pe19EMYmbEbzrX1RLYgSip",
  "key36": "3ohqMDWVrW9wSuz52Bmoeyw8DP5tuYQBhNjSiNnFrQuYq5F6dA5gWMfhYteqrMqeuB8bfFCQYhSZFCRn7sxYCP9h",
  "key37": "3euFS7E2iAct2G7u3doiXHjL67feVizweiupak78buUxN3TiUuye6TQMhA5A55TN62eCgn7wfbGngk8SnNc7kqkG",
  "key38": "2Q3rmELx3tWDgDTN1sdFkAwx4p6RT9SRu1D8qx9wBYiL3Sp1scDuYjHvAt9whLqEZtm6RtbeKr9wxBCjuKeEeCSC",
  "key39": "5fbNhQzKFC5L4Dx54EkDW5NEEYDJS8qjAWKFF2ya89fSbL1p7aBjMdakutZpHNhnxyhZ9ajz1RYYTRcjGegT5Daa",
  "key40": "nLx2y2rZFNztTGse5WLsUGnL2VZjvKz4fVqgvns4aKm4wKEQgKCqnX2VUMr3NmRgpLp9LdPGb7raE6c52jChS6b",
  "key41": "5HrHye4c8rn48TfWFAf1QRuiz1kVtqCVntLA2PC2JtSBrpM2wuXPZ815DNDJgviW7UBYTn1QvuXoqDj5cjDQZUiy",
  "key42": "5ooQcPYnHLigrymHq62h7PU4WjdmwCnx3tqMPeev1d8fpggmLXaxvwEcC2wTzNoL1TyhNVy97ijnoQtYjhj8hbqq",
  "key43": "5AFpwvdBjfDsERiyZvcSWnVEZ6WbnhXqXY16Fr42X2CCiGBFy4SxDLz6KdZoxrcrTqDMoM3tMV5xdLirt8WKfFdZ",
  "key44": "5N13uhLnQAqNq8NXrm9gYHd3eFCprtZKaordLT6thGYytuupzd9vnjqKXr6q6fnB4LqenNAPXn9Kb3ooe57PMYQX",
  "key45": "3goeqs45dohkwazmkXr9LqZAgxR1EELURs57GZFg7tp1nZpXd4VzPepgGhcBLJxjFzeMpiQauWgFUDMoZkCY5uqb",
  "key46": "F6uUx473TdfjkCV1EJbAyxWtHGXoXoc8g84BScHABfdr2ts1v1DN4oZVyHuSJ6g2rJ3vJ1awpbykYrhykDRQ4RN",
  "key47": "4zw5AMuoqG4T1jhgu3Lakh5kZu4KffAEYTqaCkQ5DGt21d7FesjBcEvRQBPjnU1wJFn3PVvRJxcSvdULnq3vqCfX"
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
