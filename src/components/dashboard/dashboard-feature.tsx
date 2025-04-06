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
    "6FhgjRWQQdK8UoHHXLMScRU6qxANNc3LD49K5twnCh4b3WX5qtjvQmUWX3Zxw35yAReHAiMTk96fvbZoqdcwrsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575mJkKychsSL6RQ64pc8mYhjCmotAFMEpXxb5cvKf2dnD8uiLJ4HVHYZnn1PLYnx6gTL2vtQVHpHVLDAQryrqee",
  "key1": "4UUEZcKK3rAGne6QypdPXo69Cehdg7tu84wR68gWJJbdvmYW6LvUsDG6YbJ67tbJDfiWpG9tFwLteUU7wX19dMer",
  "key2": "dhpaAXby9YZrAb6NKAsahBzrtjsES3zNhrR8BV7BdTr6NcQTjXbcFjDMexQhBUdauKfvKZgjfV9SEXk3ZQAPds2",
  "key3": "4pDkEDDHkR6ysC9c2TyefhkWHcMXV7kUQ75KDE6oEJ5U8krZHqZRjJCKCn3GvmxV5ArH8EeMkEK4boociZDozAKQ",
  "key4": "4tMUTzNEchur9Xs9N3y3vu5nbTtEDb8nRreogBX8wdec8nZRcGv7JT3bkfg2RwsgCWfTk7m6go3zHzFj4Tye5Z8G",
  "key5": "4NU8LEhTg4zxVZGK3GhwECBnaG1atLVoLZDPxpcdVvNc4ezYLwb23xU99ac6MMbKQjVhmE139292jJazWu2KBm3B",
  "key6": "57XjRH6tHFJ9ABQ2ujKuanvjgtqZcpMzVv3yp7TnRcozSLqgm4jwvPPSoU56eAFjN58LvWNjh7NGQfnCA9AJC4Ac",
  "key7": "wPfKGeeaA4jnzu7563WwDLX1zJh6bzUHBjiX8Wq444sH2XQmH3WExry3JU7ptTHrB5Sx2cAWGLJ7NcRQdUf9Rj3",
  "key8": "FfjhpdfUaMHiKBGU764d2wEmLpmD8Js4KAEfey8tYsJdcXqJQbx411VcPjVud4N6BKAbHmL4N4vRsEPN5godEzm",
  "key9": "yYFYVvSDrFmfRD7BZAupiGyR9kJ1ibkSVysuKapqnWXdS1CZXPMciGuuPfaqPza7UN3XbLmUZ9gFTCgWwRzh9dj",
  "key10": "4wo4RmEL6pztgEKHTNdATdiDnEEGpkXhsmkm4pDg41GFvwJjnCMJs89bkc77GhcBF5cg3yr8bwj7VzUNc63oJe2f",
  "key11": "4FGnuJpi7F9NyJvxGBfDpdmCgrAqbzhGfQevzTYK752bkmkcKvmGt9GxzFyUJvpdvYpgHXsk1bsoQ1HpE4JJu1sK",
  "key12": "4bRYfSpp97uxtiNrDrPajc2XpLTJLvMP4nHyK7zdhURFwgUaMvoL24kZPknAerqRNhReoQAyTdGamucwaux3rHJQ",
  "key13": "bdMBqGdwWe5pCAHzRN7QLouzsjpcHcZqV8tBSs78EzCCpSY5nr6pG8Esk2bGmCB1EFPW6wpXhGt4xJmCXRrSmZq",
  "key14": "4Ev7XjUJxVtCAT3PyigydQJcGPjEz3QdBGpNekubivcAhFm9bYw7TM5ARwi4mztG4tDfmNPZK12YtZmEyY9ugtMT",
  "key15": "3k6gDP8dTXfDhZkSBqQEbEccNgZnXoAk8U6vDaLiCZDdzyXtnBQV7p9uoKGrCW7a4XmzkqABvxFWhrhxRaxA3sHX",
  "key16": "3dPefmrQUs1sbsunBfEmJn64hevishuqjgNtAeazssyE8yGgBnRBtQi4GmbH8Nd1cJypV6oHeT2g4FBz7K45PryU",
  "key17": "4rPSNj5LTTRp3ryErd7VuzWkvDyLopkZbi3FUjrouKsfYtAQS49rPn2ctrem3Cy37PVNfUwtcMC4prKWfkTPoRxy",
  "key18": "5etRYvJR7CNXpHNk158E4GNjiJQ8GdBqS2XvZaVuogVnfDosUcmb4FLnWDcJx6Dkju6QqPaMuUpKmGyZi89vFJpa",
  "key19": "McRrER7WDXWFmkw6Xth11Jy2LJGEEWLeBaKnqnkztQZga3PReGxiyhvXd4uFXCeztuSZm2G67ysV1W19Y2R3BMY",
  "key20": "3JCm12C2wcWSX37v4DiQ97m3yUYqg8eX9c6w74hE2h7JyYgRM1etWgxuNJX9wy4Ta6EsziRPUYXJrKmyh41wfMTb",
  "key21": "5argdF6mG8tvuvECWEbgTSNBD8c2XUxqUkUQ49rZAvug6CmGgvchLDkN657U4Ji3wRk21W91FzQRPC55LymrCALU",
  "key22": "3HnaxrYJ2qKDxk2rHz8EVb89VkCcoUym3X3MYhVZcGWyFxeoE9w7iJJt4ib72sHte5DFFN6waSemLBRhSt3iybED",
  "key23": "5Lizcdhj1wCBsqoxRi7n4e5iWRoQQ2oDow3u8BPG9Sxi5BHxfEWLCsoELavtVkWpkLRTW48h3ERQUuAxH9sPBhqH",
  "key24": "4pR9SYRrKfpM8PSqf6C3uxji3D2GinFvbWZ5pR1RF115HLo8ripZpKcCpbLnv42sH9GJRjY3jnv3q3JaoYdBn97Q",
  "key25": "4SxcpEoBgP874owvbENn4JmLS9gpSMJJoFBAfkA62zHPotjUAapav1oBmbKCNWoquWc66y6W9JA7DH5QixczdGDN",
  "key26": "5hNKqAQFRdgiHQK5RCWmUz2eZCrp5bx7sTxBgg7woqk94BAeTBHqBzb5WCPkKbUqbAHBRifq6WPXvpv4cBB5juQU",
  "key27": "5byQjNdJDnCE3bRB66P2oA5VXS3XAwM9V4uiiidjDh4CF3pbSRBES9VfrQGYA216rkyffds2hCdv6BHgEY1VRDZJ",
  "key28": "3kUWEovByBvybCQ7xgMXFYkmWqpyojxs4PDv9uxPcgQ2Rt3XM6S7d6ZKkwG44zqeAHurLpzZA247h4Eabgzp3hUS",
  "key29": "51ErxPxPpayBPpp5zCLyayX8xVLGQmnDPTfc1dnCoa8aHYQxs8b6PN8pPeY3UXpCwFsA8L3XVPnerTSa1QiFWBDP",
  "key30": "3t3oVToNccRvfb1NfN1rpsjvCnRY6xmspi4KNMoS4g8ZCRQCpVNcaCsYVH3u5eByZTVmQK6QSTW2VHXYDzFqwnmq",
  "key31": "2si8xwouFJVKigKC8KnaP6FiQYnQaGgKK4iPE8EMCsaRx8ztKyQjFSPt8Ldj9zwcrk6hTrmxG3psVyiszaeUahSX",
  "key32": "3xCiMkLgNkrfRnxiVRUmXmEMob5LQw9DBWH1PzZT5qdeVcHGoAJAb6yeN93MaXsN57UNgCKBifPc9EMHp5xVvPsg",
  "key33": "z9wzZzo76BChrQ7aDgptxvA7YnTD7j6aZSewQgH4ahMBu9eMz3q2NYQsLNwE7AVzLap4KzLRCwJdU7vzuGdckNQ",
  "key34": "4kzx8MC78S5QSxwVxQJRrh9MC1mhMaxdoLbZD7YhpbZviJTBcJGD3iw3kXbZXdfQH6aGK7GEXEU1GrmsmL5nFYNs",
  "key35": "4bE4zNCXauuj1wmscyTPnfN9QB6RSquf2CZaQMJV3pitQSaQxuTMPXrgvPcfqfGTXhJmiZBRGSo854vqk5nMa4mH",
  "key36": "2yWbDZFRqBEpruwmRPCkTNpMUQLRdoFmt48cGLKTgVaRMe2qfDUnpT3fzf9dDLpj1pnD47f8smgwfsyZdvTzmJKk",
  "key37": "3Kdx91Gto2MSJDphnPxsm7q4xu4F4xZKC7k218fwqhYh6FqerRqSfwqNgWaEXwVbeRV8BJYJ3R1VHyFUfpkZFhuA",
  "key38": "2kRqBmJLerF47b9moqugKw2BoV2DiVxRABAwB8sV5w9tSLsxh1Q2YXGiQ2t9CpsncpjnNh98dp8cogu7EpocsKuN",
  "key39": "4VF3stLFDpo9N539W7Nr8VZBiWKbUhBW47pEof1M1hady9WUqH8zYtwK7PrA2q9CiQwiweUAoAdMA5Pw6TYjiehk",
  "key40": "5uQkQvF5q9b6DfEMTsFnGWr8b8zP7TC9cR6WDVv6m7qi4hAqwuCFha2Q9idL6iR65Wn3t5ha5UcLE5Av4AYGHzcm",
  "key41": "665EfjUYpzcsAXrzJAFjnkAEbGWm7rQsmZeiU7wMf41WMd6nRUSRpMvkHzHYu7iDWRWWuVjnLBEqBHNAN7BFm8iL",
  "key42": "22Jk7CMnQA4tBoJ1zBrmWqLXGd3mQZgFiH5ULtU28oEeDfP3pJdNgTZAheGsgWvJtR4xjcmiv1X45fHbu8NSiJ24",
  "key43": "5FH8FWr4wARGhtaSjFFo3Sn4LW2itLE5uQsPyACXK7Et8zjwVCjZYMUk2E3hTdXR6UVUuTk9StXTTwqBx9AZT9wZ",
  "key44": "3gNoVQ3YxVK63asKyT6K7wBp1rGaGvv8ZHSMGJ4drBptbforGhHhM799kudFzPMR2yEGM735FdpJbtpjjX9CCFXi",
  "key45": "3TUnAMaRgDEWcya72AGNH1VqV6mrkTQRAMNYJYhMSMn8u6qBZCKwAwddKGpPVipuvKwrG6caCQjDf4oRNfXZFuyj"
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
