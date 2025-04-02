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
    "43J8Lej6vHWYDq4JA86gDTfdhcxwS7Dp3TMPPrWHS6rkp95Drmqs4xidiSC8eEGut8VT21qdozVFcpVrQjDUKwWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVBHbKbsu98yEVb85RdbfwLaNscA66hqmRKfUsfBRDmhYAs9XesnjShGFQ1f78boXLAHTfc8rQaGR3Y3BLZZcsW",
  "key1": "3NuTgbd21Eo2n3XoHSukMrVTsDtzHJPUicdQCsJjqpBKUnKLTt2MYPCpiYgyq6FvTEFeAGqCDu9gTvLAGwJVrYzy",
  "key2": "5sTnF1UygAVr36fwqEDboy2pVA5VNRKHd2WZuGcnbbXsYyecMfra2xrsmGyGz6hD9F1Mu6uzcU8DfBysZ2xWY9XD",
  "key3": "Q9YqfprAiooyn4pqy1yDcZvBWSGyF7uZ2Zid7QAh8KXwQPE7ZjaBFao6NS7z9YiD9LpQFBwBB77NHdG2KWRUXTc",
  "key4": "5oSJ8PdWaVPjWdTy3GKDBTrSsCxQqeu2Ks9v5ZHu5NtC9DEktfKqjdZaPNrsSijEEChHcYMrSFQv6poX4mwj5KNe",
  "key5": "5eQKkDcyDzZwAL9hXrxUkuq78Y2CTf9uWEbTKvHYQuQF5XHwffCYbqSdjGSJnj12B3ZXeyQRyHHtGW86x8kYxTEj",
  "key6": "3h1pdN6VMea7heoiFUt4n8KBP6NnQ1mWm3ayW8YJbKuKpPBCQXxeve7NTPi261JenHyRcVXDjSZ9SgFTZz7KTtQi",
  "key7": "vWmDgpApf3d3eifmEceXVZVbLzRg98r3nfdwVY7npe6xRW7eEH6RTFyS9R8CHLHUmMLdvjyMJF8UK6cJTAv6YV5",
  "key8": "5gfcYxmDbwxFTZ4tPQDTC5b7RT9NDd6VAbMD81tgYZWeKavSAB9iV3D2TiPavbCQMkwTAQUMR9tyo2qLdvzACEm",
  "key9": "3ws9zdmA1MFNPeedqdezWFbUppz5JSCb7fDz71nFoDfw6r635txGdBxtUyS8dmKejwTrKdfN2R5hHusLirkqnNuH",
  "key10": "278eVwb4SRJRiUbEyvswVAnZue6Umev9jWwC5GFt7jrwZxM3REGNB9NxbKwiBV3r7Go5LFtMcZodBzi51vdyr5Dz",
  "key11": "6PbkzCkqVnD3UR5YkLbvLUXgn65oqvMZApQS9LpaUwRvipdGQMf5BbikDeZ7gM2QHPgtiMWGNRX9MkQvvtgNPTA",
  "key12": "3Z8jbgkFen237SzM3F2s1o38XJ1w1ynt4Gubrxw4NpALU6HkvMMQtWoreurUeHHgvJ527ETvsBsdafFG57TJkYMy",
  "key13": "pMpnBy2Z4hDPKj6HS8FhN3ksts46h9kJzirPhgW4evBbdQWaidUVpTpaeP11Y9HVUhg12HgNcwiZZwRYiZWqibV",
  "key14": "3wUihcNEFYJ3eb2qs9i2UXcgTHPhRubTG1PLiaBzRRThrwmFmiNxRY36Rx1g91v1RVtq8jsEZqYtqbMtFbx1RFrw",
  "key15": "2NMyYb2dRTMdBmnS6P3HBGMzuZVhLhSDYasYeaqDi17zfsUELhnVcHD9irC1XhtGs6JqamhTPQzpCfyGEgSTAQmR",
  "key16": "61WZtgnHNPtu3m9M2jaL8qDZTmU6gwYu4buxbehyw9G6ndpCfPHzhdkZdf2XAWHyBqSaR1Tm8eCr1VPUedYywnVL",
  "key17": "xuAy84BwbrGJzRiW2pFnEc21RNEMdzSY2ZvQNHHbP16Jqrdctakty7hvZUBL62YCzi3LJzYuk1ioYNypqxXNrzg",
  "key18": "3uCFJcvuQLMBejEwZGzbdFFj7vGVby8yD1Uch2QCM3VarbA1SZaFEHaaUHbEbvzVzdX84JU48aAsXxfw1kw8r88G",
  "key19": "34KXYxXL8TNoTjsJAgri4NQsFRX23ExRBtjmKisL79WNJVhGUSubL1TQshvsPScgkqpCwsLuYQwbqq8dB4wjMCj4",
  "key20": "3hmfBTQiYs1Lvxo9e3DJ5BWGFfWHmS31eybZteiMiLRVJynpgvMzWgbJvrztLi342XRkdXNzage66LJVtx5xgjJi",
  "key21": "3YMakM5Di7qRyL7ZuGdrHvEEshpnKHsALmQZJnwgh2sHPd9ZTDAjaCw7BW78y9yNG6AvGTCDDrVU1sgT1MCAcbdT",
  "key22": "4MhHDKnkvgrr7977AatXjoUPoeBFxVMkSGpPEGe5bjZfr9uuT7ahTitMGcsaEK5C86FAcEtfaFBDcuy1WvybkjQB",
  "key23": "4nj2qQsQUg3vnCEVVQnwhNatyfEjt3mwxREHy51rdQ7vmHAcmRXkNdjTo75izKQVGtktDYK2CLnPEi7NBnkqn1hC",
  "key24": "5aSvGsQapMFq5xdTwjDoH3kqVud3GAUT5n9DtfVGpJw5NEgZZDZVJEgrzxNCCiJA266r1shQxEkeHXtHpNYTZ64M",
  "key25": "2C1uJmofzDgJeufhukLWjbQnLW7nr3brKDr1hYEzwtzBk2sZZFMceqQYL6imXYr7zRuFcrngWCUvF1nFwPRx9Ge6",
  "key26": "3gaGhXd1Rj7t6dEiMeLRSTpohW1SBKeh6fEnF77Unq16b336anJq9tRACjFPdZTwJ9foXaU6PRBuvB6fCmLC8BWn",
  "key27": "4iux8AbRCT4NS4wYxgXyUvGR9LEtadZYwTUEcuHx1kAbf3nuUGUgUWRdo4bYMz7op4wJ3JtoTv1V9PhU9dxLjnzB",
  "key28": "2RymNLFkLbmwr8JMXubHxnQJqWPDugLmQocQoBfzkhzeScJqfL61VtZ2awrAbex5GcLZTjRL8gSnF6nFq365ordy",
  "key29": "4hiSLHyYbMud4DEmhn6nNZ3dA5NgC8huDPDVLiNiaNHYwRMSzQHsXGySAYHhXGA4fGaFENqErpu7P7AmqvA8du4z",
  "key30": "3BA8ByqvcyCAVrSo4GNxDL7WQQwsRHWapRcK6qsfx8avaJCgGLoey1FxkjdHHZ5sFsDpeyr9AvmKy8GxCcf4B4jd",
  "key31": "2uyMs7qDXi5rZoi3B3VDx4TMPXgvLA8E7kAJD6TTgehzXN2HNdwsWnxpuDSvUqBwPNxbTxG5nsA3iB9A8DqK597r",
  "key32": "2dRqyCXxGQRwKXm4YLySERWbKtSsmEDJ2vDdDcwx56Sdem5i9dy8LTz5iimjRAYLH1uMFPop1Tqyr4D9WusY5jgZ",
  "key33": "4oLSRvsTnvSRneG2TMPLCWxDQSXMBSL9XF1FUgnwrQyG4hbhRELKr2qhc55JvgWFgXx2hDxd557efwJGzgLNMYbe",
  "key34": "4akmnfXU5ow6FmTCxE5E9HuDoNZm9gKTbGPGnR5yVuJeziyiotn9VbFPynmLjkLpFdq7dYh1aWfGp2BpTyNU36qT",
  "key35": "2KcoKffkj2XcxpcvpD5CMWvnsCzK48rC54w9YPFUtUNvEYJ5oLSrRXwsV8ppJpDDmFjB3EtD8grTQ6jATw2M9VoS",
  "key36": "agdgrFKqGb1GmgBRtk6uNap3i6zUPqC4WuJXLFWhu4VP7VwFZXgExjPco3G5Q8itkon8484Twe9NsLvEX1PhHUm",
  "key37": "2ErZKSsj9yJGF6AHZHkmCPeakRLqRhVX7Y2YPm6drGB7NYp8dZrDvemJVwAJHHVQf5N8qMcf2HU1S43xkbPHz8WL",
  "key38": "2CHCKnFMB2A39nHw8dsgXNkygZymmsatJZYkvR8oNA9ua4QXXGQnvovpTd85bDVDG2Z2yFZQT6NaDzNU8UH3aGsf",
  "key39": "3GGAjSPj3KCRp9Zzg1KoBAx7QJGTDqp86joydshacPKejV8GCuLeByHHgN2zFfE5u2hFyhhVUfPZrQedRzcUm1VZ",
  "key40": "5ogqEyboUxS3PtcmufSVkuEpM3jJfofBAqGKv6MXzuSpcvMaDHGpn2KMoTbNG92q4yMHzz9YjX7sFp5syuC86YYY",
  "key41": "45sL1YXdNDPqg5D5pbCwqV1gQdKmPxSmygah7e2xUDMQwL7cqjdvng4eeCK9cHMoDQ67fxs7pAhYU3xVbyCCsNzX",
  "key42": "4VBB59dtANY7CVnf69oxVuBxq4wUmzygvYu1Fz7eNCK9hK2PMDSCKCTWNN8h9bWDucgVqH9QwvcsWVMu3KZAgTwb",
  "key43": "67BSQxFVh3nUvsC5C4MTSGaDa3UigjAGLNz2uFUvP9h3Vk3ZXBhbUFGWkAud1nM8YFWHx2fdewroXtmRGJ33hPRv",
  "key44": "2bhddxp9bWKHhUUndjVFZGB7UBiMoQo6yWVacTDbS65ya52MijfKibbKuUkXvJA76dw86hpqWKYmccYTbvgtAQKk",
  "key45": "5BXbrHM6mQPSVn6XHkg1yEaAzJvSJ2HD4jrcyn314sSCaJCoPCu3Hkkh9ouDu5itdAwSFJS33sVYc8eSZSNbiPJX",
  "key46": "2JoocFtSvJDdizwkdNaJvsEqUWHYM37WPj6ztLLMpHK3YUMpdWYx5xCshZc9E8AvjEJKNzaZFXprpuq4xhezFV1Y"
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
