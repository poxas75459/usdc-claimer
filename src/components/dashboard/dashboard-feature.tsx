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
    "QNMtRoxHf5yiFr9CGZrx8RcNBQwy3ebc1vwL9sSiPxPdBKwqgtTyHjN5hzWJAWFotsR3YAfFkrSsL9NtrwBiZEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GrmaEGq5wY1ZLxdFsDJbRhK9zbhYHnYUujQA6Zqu97KyuYYJybvCAJ6DiexVYLdLwggBzuoQ4bPaQwoMjAsZqNH",
  "key1": "5ooKQKMTTdfRdbJQAjs1RTw346nXmd29Woix84RQQ3XkK7W476W7TnfaFue81WvbW6dYNeB1jLS2q7h1AwSKfGgM",
  "key2": "2w3jeypkLwHoZvFTB4hdvaBADX9Dt1a9jCKH4oQ1s772S2wT3dEtaT2vXh79sK3aUYR2TWem9fnPrau7B3M6uVbB",
  "key3": "4UJDntHvTBhGuGALAS29vLFfbWKbVME9x4TxD6mguz4XGj9FdY9M35pCTi6R7UbPX1rMnpySaVBBuQaxb2HPj9kW",
  "key4": "5sEFECoRBkC8qws6xux7vxNMxTHEidgkNkEs48tbLskN9NcVndoUKc3xCJGPBSq8p7ZDVyJ2PzW5Cv6dRYMGGJio",
  "key5": "4NiNn3yT5mpFmkyznm96S57f4zRoKLr5WHQRDC2dY4mu1SNdmuKmx4TTNoY3V88MEDLfF2WAdKfX3vgxCXgvGTac",
  "key6": "3zqguVRjzJcFZ3yf2yWg29sLnzPdhK8bMaFxTPEAuFKCujmdQzecxxEZSj3xtEpP6aKYJUZN6jHhAnrRoo8C8nXK",
  "key7": "3o9vBub1HHa3zaxMrXf4gKDEjexKhWgH6HmshBu45Dfa2yULopmn96b3aY4FM9ybyPeD1qPghidWX1uV4HSJJ7EL",
  "key8": "3kiGGq7omumqKKuRpmkgzdTXRiXqKK89zuv2R3G6EceH9nmSsptxt76shDi9XHY2HEw1oYgv9yafdf7xNkiTmAUq",
  "key9": "2rsn11Qj5maSVd8wqC6WAJGYgVYVLXeshYjxXjGUzU6ta7VHLQaWY3LTbLegd7zTabnfRPHSuX1nUnm62Cci5XLN",
  "key10": "2n1cgy9UBUiytXP8LgyT3meMwqPBjB2CmUuY94yKdtJ8YP1F9C5WFiV1uG8asVECBpq46cKPCD1fGWm6dVEiWNdx",
  "key11": "VHGvRtA364cy3GjquVQzSro1JrCUosTQvRhjC5WoXEpTgFiTGyDkzdoVaf39fEgWx4LLH2F875CjprxM8YgVeE8",
  "key12": "2iC8HUPcSvsvFHDze2atCSsqsFp1ainzr1GnwaE1BwmnPhaj3EeyL8C6i45JFBzZSw836vBUMzPfvcCJCRXrnTEd",
  "key13": "22VwVRpqyzJ3EXfayWZ2zbHRFXELFVCeA6bJD2dkV8seFCS3jzymnHZSoFTLeX5UPrxhxJv5ESvkwBaYPPWsLaFT",
  "key14": "xywnyeYQAam7c2z1qeX6DDkexNUVam8JpH5H5B85MZekGfvxqpt9AtRG3h6QYW9wjDq76R9w2rASZyXi12HJGUz",
  "key15": "c2PizTkSEAkqjUXjXcSvtsrT4maUNdZd67yrSCZcrR83dg2iLz8vN8aDK7wH42UETiMi5bHnQf4frKh2HmDuvqm",
  "key16": "5x4njRvGKB1hgAvA3QLSK88RhMpRPKXHcnvQcx3S4sa1C9egCnqntsw9cnRPeSipUFwJyuzEdFEwDiTHSziosyA9",
  "key17": "4a8gsr6W4CAn9KoK22H4LaBkDiZi9DcKyczYm2rwGy8ukWpr4LvyXjx37dufsLLmB2QbTufsA9a6dfFuJ4XfSWRy",
  "key18": "2rSP64haqjy7MSafW8GmKZeEjhDZpmNxS1mmXdfVyHng8XgyyMCNiyKwn9sU3Gt3MvsoVTVSLrTwQJx4ag56bhV6",
  "key19": "4JrKYjb5zeZC5TSMFSoBoYAsZTW4McuXMGxb7M34weSnRXjepMNpdbKeJceWa45grtV8X1HHj8w49jsw3vs87LBb",
  "key20": "2vjy16QNUBFzh3JyAMQ7g3KKooTKqd9fssZRhwsV5dPcuCf53tJRsaqUUWf7hbNCw1rvLntDEmbxZX4BPuMyQtKN",
  "key21": "5mfPUhjYUgBRatGDxnWk9TkmF7aeX9HN2TJXHC2W4FwSYk8vKbNRGXWatu5nXjgomqpXg4hnF8BEun25fnigTc8H",
  "key22": "3xxRF4jmboFvzWSHYN3stoDKCkfpVn4VE8tbLH54qmd7BBS4T1UeTekMngpTa5gSuSDRXzmWkhSEREUTvNFH9o6a",
  "key23": "3c64d41K1h13go6NcmrXZ5AgiZhuj1NxCaT8E1iJAAoNM3EaoqY8faz3aU679o1xL6vY5cmJ9EseXjLeNVdyRB42",
  "key24": "9mgkvTjg9ftkG1kgmL4nBN9iQFQSQwYBdrzFnK5P8vE675LBLsCvLBQSsiAMHy5wJFH8K3e9gK8Qyqf6Ye5ySnx",
  "key25": "4c8HekVTC5rmx7V7CTTB8vcmVHoTB6fr8nK2k5NkFzPcnZrnarAEg37GTZzNXY3donfNfyf7Yx65fJXLdN9dSaG3",
  "key26": "2ZcRQe53jGgLLsjX3eqCqtn69cvVsZrC5HuPBGRmNKFA83JwhmLnJKpYWywS9YbKZfm35PTecn85LAwVhkjFiqi2",
  "key27": "4PUdeYTcNGf3RMF79YNkPvvJLA7k2nq3B2LfFr9JMeXYXbAegjY6xHaZGMcWmfFWSZhJZcW8kGyNBtjgDLu9WqnN",
  "key28": "5i41g66L8RLQjE3AV2xg4bVTG8YXczXv6jmABuZQy2QLLjSUnfyWJ5MioKsEvowKtSnx5GZNYD9xfYLAfC1PDT7P",
  "key29": "5JdFg2weyirS9VPUwVhPtdXEW6nAR8t6FmP9ZhVpAHZf8ocbsdxdgzswzrep1jdv2E26y8pujdWUwhHc7VjRGBHZ",
  "key30": "Tty18GTDsqpUrk1QAsqPco4MyrWxCZJDtLbpkQQ24TFdNEmrcDuuruSddRATsh6zghPR3UdNYnnhhuE41p4Ztrz",
  "key31": "37pm3ZdWZEQHkkuchsDHXcqZkDhgsHqmokkkCh1PbtehEUw9z9QpYmroKWm8ZSdqvE5bZLCDbHEGivKbFwkkBypb",
  "key32": "64Gd9Weq9uJFmtbSLz6JxoQ6uGBUb3vhvin8YH7tKEPVBqDaYJ48mY5vi2WG3NCRd1qMezGRriGn6U8AjB1kKeCy",
  "key33": "63WnKZEdcQuw61ZsKHK9v8jdDxPoypEaTcGSyBUwuXDvPFp57aVbiTAa7yobUNazh78Zqo6rxVamWtA4pCkiZcQi",
  "key34": "5Loxczo3MywqiA5wxBteLW9riNKmsoKfFqxMsLnPWT3VfSrpEudzEqup5sHDrU8xKwc1KTZcUCS6emq5zmxsCMb4",
  "key35": "53eRHpX3jAZ9hhDvMw8rmmCb3G1iTMEZc5ZqNPbgTnaxDktbYT1nRpzB328mC86Rv28PUntrqTCj28NUp6NgUPoQ",
  "key36": "cYhNez6kNG2bFbryTBJerFrwpmERdueY3iHZ7WytUhjy7udDNfkCzdsDE4aezQwsHG24g2ggDr4hg2iAsEUB82U",
  "key37": "3YE4dsoWf5AC8yeY4T4BrfQ7DmXBJwGzWXdwAhrxRyjsJzq45Wb8KnBqiseP8R2ZmJajpXCHG56R6PVdkpZHKFA1",
  "key38": "Jqmu2PV5PHL2XooPJT6Vr9vcRQ3hJHhT9nKJRxEjGqzC7YEH8h26hsAemWtm2D3AbDr1EjtJkMrbhVWxoKfNY3R",
  "key39": "2Xs4nruC6whLycCTF9XMP3oqGT21NNFBHJfqByQtRUYxmiYpzi9PVzk4BXx4DZgovkHHXHZvrmZaPhp1pGat5vSc",
  "key40": "4MfimZtbKRAoWhtSXoFmQBuRW2cAUnCVpn2WJSoo6rL8rFbAW3NtwH3Y78tczFGNe2anBXaNZkc4NCHvDCc5MYZq",
  "key41": "2CZMwccGBZkAEvBt72vPuUUuVpsPbGssqED4YKboMZTZ6DV1HQqBsq6zseCyzHKbDRWNdMxsJZ2qQbEChgUKSEib",
  "key42": "49RLU2TmCsUDv8HT3Cc2BiMJZHuAmuxtgakEBBbwq1Fu8VBdWWsrseTYFQy1ipyjC9c4pu1WorvUPsZPQ1npMqpB",
  "key43": "2x42Qc2fjvLwpXw5ey2L1YEUorT77hsnw58LbJiYZL1tfQ4cqHYe7UZ32wicootq6vkFen5omHiKGHdRA4oEYk6g",
  "key44": "3pMiiew1SNn6pN3G68gP1fRqije9DbiHG8qoYbD34D6kZ8pufVgyaNtQT35ZJn1fqGJqefkETMKbKV6P36NeoePd"
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
