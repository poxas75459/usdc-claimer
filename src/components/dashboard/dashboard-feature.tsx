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
    "V1Ztb7LHjCXpcLu4ymR5ndB48yGWtMpqb6JcU9onrV2hbhc3jSmcp75TtbKLkTzWNbZMW7rCt2SmgsiHwrm6AiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCUWCspccEEv53jAeYfkRc8dHEDzA3AHsZznGDUFEsCAp7PpGFLzPS4YtFKvyf78pocCCdhTrsZakiDJbeU4L1K",
  "key1": "4MQyuwbDmDx6XdXZmmNgFDkF9wQ7ZShWEv1Cqwyh7nh5U2oKjsw4GvW8vsfCtr2ApPn4LKgBkPpVexJqsCUjFvZX",
  "key2": "3BFhSTJrP9KztYomdr8GwLiDjPg9vwdJDmvNQ171WmqgwsCARiU1kqUGV99cMEjnF4UndJSMtxgo3uBGVEVm9xdG",
  "key3": "2uneCEVtGHium9xKoL7hdWEZtrE2BvdQDA6JQBLpULM6m6WodQPg54ZgUQP2v24EVUnphCEZUEXyTq3sBNGu4A5u",
  "key4": "46gmTqWmTssmjyNWxfPHJsqm9Wsk8J1d36NqrkqHooEFEMVDx5RsDt3LTWPt1GVUBZnMwSJjR5kkuJcwvo6NNfd9",
  "key5": "37tiy5rW11wNPmLXLNHdwFq79actGSKWDHqQskQQmSTmtJRkcMjFPYfKMLTPUxZEXTs2rSea9zV1YtTedcRjfDce",
  "key6": "2CTyi4ZYui41ye3twM8rTvuGMc6tobExAGEcRvt9LtsEwgqXcMZVKsjrJkUysmD2UJ1AgAwWfFRBRsHAnp4y4Cvz",
  "key7": "23ucZ6uRT69Q5JyPzET9fBQfodPDyPZr6LRYEzpurUGn9fM5LrG6PBsRJMVmMA5yzHmunJVyqmUdA6nCE9EtNxa7",
  "key8": "64uzTtmQDMZc2bymV3iNcxYn3k15krKRpwLoj4MfE6sPrrnKMDSzk5vhfk5oWzKXSvqAdmEeN2u5YJDzgyca66Tt",
  "key9": "4miaussMjvpCNDUwJzyydbG2XBnAiiGyy3oKB7CXiSCmXF99QbK3PJNmK5Ka2LnAeF4Jt7jVr6LKaUTaNgwT41k9",
  "key10": "4FPN6HorT2k8yBnjybceAq23cMX4cvetwGnosfuRmkxr3XoTmond4KWGkN2Xg1Fdj5ncCQaS6eGFDDd84SuYxojy",
  "key11": "DHnJ9RWuPgmmHw76vffiW6yKaMHBZ7sMJBzQuek6C3Y1rMtHUgKjFFaeBQJtjHNiuWKTu2VrtMiNS6p4NXrpbyt",
  "key12": "3dTdvJ2WrSBjhVsxsdrfNW54fHq3bptQUtgCWW4J5WQCLmPj9MmJxBC8YXVkG6SPAvWfPsQp95ysdFrKU1pUiBfo",
  "key13": "3FsPay9Y2BzyLWCy7XabusFyGgEvwnUR3BaqgxxkkbQarL75A36xQa5kFggGrcW1NcjR68yiCrbkWRYrHeRKbFCm",
  "key14": "4c44McSP1nZCgedMBwj1wScbwpBCVTbdrnk85gBXNKykHiENxNoaen3g7LPnA34CLxEivXRohjN8GXSjaoKxcdN4",
  "key15": "t2JHUWiB5b7WpB4dihfeVGzf9499tZfmHfEwPdHqWdpDzTFaGUCFZyNW415KfvCfStVwDvGwqzM3qa3SVx71yW1",
  "key16": "3oxwbJfi3DnVs2AnXc2nGYbPL8xAai4MWeU15FyaGYPESe1c4EzjrT9qNgVqt3k2YY45xVNuEG4g7CSyBhKxd6xF",
  "key17": "f1nYMoQm752HFpjC9RPECz12r1UrFaCxnAeCT3riXDY6jGZ3ioCf4SioDwU6PYKNESDFxDTvnC6tpZbiup4Aw5L",
  "key18": "31gbi3vbbmRW7BVXWWppEUV5L1qWJqUCQritRTay8S2vQi53CBJgpxdyseh7pxVyDF3JZ3CVE5ZAK1RExW2KQYap",
  "key19": "4Gxgifg8QkyFGN87QUQBoauBuu1DKqUkac4eWPjSf4foDfWU2TFFVDPKrtWtUBCpm3HZsqT3HX5fCg1G54c51xcW",
  "key20": "32ruEhxnnw97vMrcEMamKMjkYfHv3N6TPpH7z5yzdFjUeToZKuoCNqdCFmgbS3PQGWyEiRpAEKwo4UJSuspmqyQZ",
  "key21": "2Z2jHqC8nDSQCkogDDu4uxGFWLqz8bth2fMdPnPAAL38a7zYg2kVVsPB4BA1oPDS8PLehcmfTNk7c2uUiRCU77cy",
  "key22": "4S11RpmxvQVojYoKDaJce9Wt4AgupfiNL3317Be8eyzfH9KCSedfJzyGz2nHsLXUfhroX1AvDyKzFcfLvq7zt3co",
  "key23": "2nujhY9X4PeV1KArtkBLN7aMffuFMNWebNaziGCJ7LgdkRM5mBw2zBxZJMVWK7fpnRzuHM3Zc91vUzy7gd7iTKoS",
  "key24": "WHRaRF1vGe2HxJQqEXMsp1BX1wziduSBdYFxgkN6Gd25fRJyo79atPG2zmoqzkik191gTPysxck79uFWo4MZvMw",
  "key25": "3dZXTqgCyCrsrFFzUbCXiCahtynGaGeAhiV6uW1MYGyGC68YUjznW3Pqbqj9W6mRi2qybTHjuwmVzji5f2XyfRkK",
  "key26": "5oGFKXmPCVSm9eoAMy11RMcTfqqLR8QsPq2rdpjqeLDTAynMQPoMcB8tHc4Jx9GeWNRjZAfF7mqa1QPz7ce4wULz",
  "key27": "5pmCJo4uKhX6ZoggW1rMdGDVfCM5ezmgzj3UztXXTFBisf4dEK4fKBZ7LN2bkX5KdbM1TfJ1LKsUybRrJuJmfrCF",
  "key28": "2dXpe7MSrHyU3SYJkbB8ywisBdjkcfisCewt9vwFuEtVuUEugwEXioCupqWA2os7NQMk5YzqAX5A8sCD5BQCJwL",
  "key29": "4bxSC4eUBJMmyqLdgBGaLbhdLsHfwqTkFnbkrXKaBPoDbYqSFPutripu65tAXV4sLDkvA4RSv3WoJGe2Tq4mmeBr",
  "key30": "3Csv5BK8VME364kYVH9qJvrBKnNM43evYd5U84ZNbYRuLamtND2GCoYubsqKy8vL8jAyVCAPnVVAcrHXsECvegVg",
  "key31": "4Pzjp31BAwjJUzfkG9bkPkAnZ6eQpQsNdta8BdCinpUbLpyWt64s2bGrFigcEMq4sTSWUeq98qysY3nCKQWPkBT7",
  "key32": "2WK7viHjicwRgfQ2UsZTQ44SHgkG5hb2viXM7cZGKKnv4U3kakxmo85s7GRvec8vsgF95ExT2DpnpHkyxWaVeipE",
  "key33": "4EsX3WPfLvVebQX1fsmMqgpFMgbpTMYpyg6csiLjKB9Wqg2kXEpkEviMnVsoH4oKFtmGLwFP4LPNiWGo6uSs88N5",
  "key34": "5qBdr2jnM6ZbPQRidD2HBjkLiZhhyx3bAPG4cKZsNrX1KT2v6h6jBajanc2dcyc26dmjDkyr45ZeGMAkHNPxabjb",
  "key35": "2xWFaQ9kPjNzmDmthoSTjq1PQUyeTXMFgDUMAF4J4LeQF6KMer6pgGr3oF3GCzPXQfrxn63UptnZPJnxuFoD8cLq",
  "key36": "2GZvzXiFdWrDrWaeLJDDoHzMRn6bfAibbkKgQWaMgGMvKAZRQ3VGb3gNv1ust9uihUT6tBMEipvgQdvV5tNiY4rH",
  "key37": "38pQvFhpWZj9uCMFf3u1ix8ZbqnnekZnJTfdXUYkV9YQkqKR3c8DmBykJXu2cBi5jWspoiPisx2DWAGLg1HtRPDT",
  "key38": "3apU2SaxTS6VHfxTTG7M8gQDxmV74CS9KvvC7ZxZYKbo8HXE6dg4VYpknN4tobUksx76KkagNADdmfjqmcFfR95d",
  "key39": "KC2tuii1bRLiAWniTuEhdRpskX5dgitJAzzZkh5ktoetyXH1LqMdL9VcfVTuAFviuXtYGciTggmrFfXqxqyUFoY",
  "key40": "GdNK2XX5QMcamZ5Le22AicodHY1zPRAp1NznSxC9rDx5cH3SrQaBiscfkSC9CGRbXx27EoiRXqFzFHZCjPLnmQ1",
  "key41": "4ngLRmHejmCRzVzfxacaVX2FFgXkFUNtY2VE6jHrXE8mwfjN6jowxBgSswsRKr6QotFiZYQsfxCEve3MrUgLPdwe"
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
