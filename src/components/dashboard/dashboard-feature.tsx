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
    "5iMP4Prn7x9vFzuBQkKceq6h9muWEqe2gDxMVw8fbK9X6NdFTVgutC6M6DBrwTWpFFS3G69Xow9HcGWmBXTS7gSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1o18Ajm7ETkFiLpwGEpukREcBbSbFFeA71iZd3tyoGGN5JJpYGcaj2rik3XHzcaiJH5wvY8LzFn9QVCs4WBPLV",
  "key1": "2bdkYe4VWrvLb4MToGhQRAdbY1d5KgCjB7XFC7kPt25zGKZqz8owGCj7eK6hMNNRUJs5Fd97DXWixkE1Zab3R97y",
  "key2": "4zbCy6cepmqWCeoGdweV5XWpjsLiXRWR65ekn1wTbraGKvnCW8CHCusQCWx8GDYMLsTPuddzS9HdEv2FCkJLdVz3",
  "key3": "4dy4nkiW1MpmXK2kmZHM4pfWrG7tfmC4n2AMKWtPbKAGb6zmPh2J9P1L594T9JxeEYyK4RZPpWQJ2zhG4xZgGV2v",
  "key4": "5S2KdQxA68axWnnMPq2Rq1wfLDVFsKEHNAxrdUi2vGTK86hrdqUvwUNf5YTMkmaKXLNSxZNpCSs3ZqW8V25zijGW",
  "key5": "4oVvjAqSBsxJhSNuBUM44XXsVcJiMso3yWGukMEMrJ7zbnyoDSRzMGAdcnhvbbhpjQgBBCerDufbVBbKZ6GMcchp",
  "key6": "5SqemUUvxi84LdWvX8742Z1wtDntZ6MvM7AuDirSttgJ4RosBJPCSjv7V7posv27CqDve2s7huEfWJoR2zqHqByX",
  "key7": "4QPEVJVoLtJHXkXEmnKH9nm4pdsxYbS6LLpfkDpdhR3x93hyA4SuTkK89NiSA4Jymjr9sXQkVyNYbbrupFEPh72J",
  "key8": "5BymnxjQV5Lxj4dSjBqTM8RsMHXRGSMjDzHC1FE6xgyJCMAVepEfG9bjVFxuyQmdhf9tHg18L7Ac9acnzqDPtqTw",
  "key9": "fc1pvNxrxcf97SeTLx4uEcpaopTnKWUSNCL4qpzGDWD2dEJFpHCAsMygCo6WPAucDi7HaT6rKNFPXqnxXhbgHS8",
  "key10": "39xVXTQVJnHCoL9phggTgpmaXLMoi9AykqZRVPnRGMdapy2HaETWj7N4RReTaEswpMU8kXyx93ZGagMvrjWr1t3R",
  "key11": "5gCDMT4y6i54TgLQAmjUwZUARpn4MPmtBXWo4D39Hh8LxM5TpCo6wbinQSgSWG9nYE6vdFQhjQqPfBJkyRDVwGGZ",
  "key12": "2yQxh5gDuHbYRQ68k4mgmonL8LqVke9GDyPGidpQWRk3VPgrZTBbu5rdzxVem5apH95MXaaV954ygDW8rvqTrJtw",
  "key13": "2YqkjNTnzgYxVUSep8ey9Mh9owo2usZCRPQW9W7a18X8PNcNPgXgb7eyKcvcVJzcG9MPPb69KYiMABQen3T8EQcF",
  "key14": "3A3Vvp2ZgfEjjfs9arv4DFQHFPs7y1fgj8LfcdxQqMpW2pq9RAga82Wh51FnGPon348QSNo6UVqMcAKMy9Npyfpw",
  "key15": "3uusxuFpQEFYD5Y3RKEF3s7FmxctKxH7Cps6wk5SunaMkcF1gwwWP6uhjnPWnjg6KH31aHeYDeGPnm6KMgJQjCpF",
  "key16": "2M8aQjb7JaUQmYfZdHqQ4fZxgLf4VFVUMVkxSDwNUJoUJn6eNuTRhoXAyM7AjP4Rb1zaqtCVMqbEnNkeAhHrksx4",
  "key17": "3xSr7HW46gDmjVVFkL6GCdSFVo4eWf9uThrzDqEdiLvByg4wFrtMEvcxwAyQ6fRy4XuN9rVGtPpwtLKQ4FfNmEVq",
  "key18": "4AffFnG2YacL6Vvgwbvr9WX5p9WyhmZfzn6VfvcDz7ES3RNm473gqFPX4w85QJubnJdoxaPjYaAGYzpearzgFPX5",
  "key19": "aYxZh2KN2LdGzZMpGHNWcJ5hyHDRfdvD2CnsknRLSPy17fiVxzTu6pNtRYDqx6QosUgXHSV5FggXLwcP6Aq9uvs",
  "key20": "4aZ2MmxnpipRTS6oCJn3XBDxjxazJ8ZJVxEAmDcNVr18TnmWrTwByi9sqSbG48ynPe6FeRJTrH1yYzveTHTEEN6v",
  "key21": "7XzsJRbGfYfGyjUJnmvAcL4erqPrR5yM55s7HDHZEp1WiBTkJQy8cGRUDCDwyfsuYQUuJs6LvdVxtP4jiuoMytK",
  "key22": "5EyzjtEDw89bA3tpXTPPbCVVCdtbJ5vFzJdUUSKf4syK6ruFghPprbSkoPpVDESVznVepe229sWnuQEbxy7sQ6Zg",
  "key23": "2ddUnVR5d5wdAP6GxyDcsZm4g3HPZXhBvk2PhG4R9K4GF1ByasLeYgBgor13Z69oMj9Bqb4v96xDM7YP5Ugq6F18",
  "key24": "2EeH3qWzzcbXuJYWtfrXMYfF8sJQgMJwaYaCRzafartmfo8EA6hnVnvj8KskVswWN75m17NnE7cpbTGynwwn6kLi",
  "key25": "3R18raf8tWzaEVnGm5KPywWTHCSWS6yCDXgL5zwdM6faadwFhwdBynKKHQmsgt6koE5wRQ2CP21pF7oqMvUdgVS4",
  "key26": "2mcxnJyoVy9MWkZmh5WCBkmFQPszzKnbGzZdqQiFYHUKMhKQGSd8vHXcEkdpGDogkC8L5avnesrgDaJpKjtVR4RP",
  "key27": "2nimNfxg4jWPXa4DCaieD5a95me2onv5uSfStHy9ukKaNcKmd11CxAWkA2ETzj5SshAvX1JaehVch95apfQAK5QW",
  "key28": "2ZrBp1ZpPtsSC2Xqk7qRQ1rSPEXiEbMpZ9phZBH5VpjEx3F5fmWdYgDnAFGC5YCWVboErYGkrKouFtNiNNvCCHb4",
  "key29": "2NUnY8HZokWDpmi42mcoWBgNJAyiAze2zaxf9kWG8SD1mYJeSjSYws8r2Yn2D4eJWcWiDZnTwkMdkyg12bmCL1eZ",
  "key30": "47NQ2zsKE6d6LmyAKYghiukjEo74DuKZYtvwWUcP5VJt5NubBZRUsEaxTtUr5jJbK3PvAmDq2JCR9AgxyRBJBY7k",
  "key31": "5oyZg4aT1zK78xK2TbMxrabpPeWmrqJSdQAqgp8tGgo7UXdQPCrvWzhCfJXALkE4PVc8kpwxWnygSkUMJEgdE2Ge",
  "key32": "3MaWQ6W4wfd9BX5qgsEB6A5bxH2nyi7nAMHCJ4mChkpZLH5ouzsr2X3agzK8Li35K8FTS2jazSrgQXEBaaeUWedB",
  "key33": "2pCnidW9dLwW5e44yMAkddJof4b7vUAqgCqrQkGPS9tRohKmTua6ZDp2ZcTeSk2Ry5aztL5LFvNCJBjryz9AzXUq",
  "key34": "66gdQpokcsMTQQTaSTS7Dun9HnGDyEd4ksULthfhTQxbEeqwR8nCt1ZUdVhFuesFoACdCuDaDdwucNRLkCKQ5dWT",
  "key35": "2hnAnbQGh5uYuLZFavsKFXYWDjBxhFpS37Zox9YahesWcG4R7HA7FaBgTZFipa6Yi7xgYFBQvset8TZLDyHduDXZ",
  "key36": "2tUnSLWX9w4v92oC6Y4XUGL1RA8ydXbhLcygaxgYUa5bpmUrtmGUJgDnkLPM9Swnq8CuerzkRmu89xzss1ywEvnP",
  "key37": "suoSB6LbG1uLgyMvrXPBxLZmfdxiZEhTkK19uCpxzFujG9LWZxGc3fVDfqMC9R29zBtxRuZUw5UeBTk5WYVtvCi",
  "key38": "3KcJa9o12AN8VkwD1iVekw7rkoU5yB3FkVpnt8Z8A6D1Rgnk21c6G6mmr6pfKEezpGe1MfpRNo4mEHdK1uukSKZ3",
  "key39": "5dKcmQoLrMdW5vsW4w9spuQGqmM43mPpFmGKan77JDU2Coah2TFoKM7WnFUJ4LhAET8xHC5ndqVHSrU5hm7dxVPm",
  "key40": "4JEpfkvJkpM4uVfdwiqn4sxxd6uoWQmqgUh8Eodvg96qc6eyDadjzSMHzW7s2UoMRePDFE6GtDzSi8Rtg5Abc7pE",
  "key41": "4iL9trhTBJUuMSpxTjvaML99mRCb7cPLnf85yifiKAa3qr2evLXho5eDysMjg9a11xWZFwJXo9M37YkPk1Vww7u9",
  "key42": "5fCNTKBKVrvSAGSrFieUomTs7j4oEDKkHeKYf4nUrMSP2v5XrTUiRTkP7HmmAWd2XDMFx7kvGQm3U4XZSKF3FEG7",
  "key43": "3yp6Ch2ChZr56f4gALQhqzGmd6i8tDzLY126EG8QnXySDupPceK9obEdvTzoYbHZL2sebthAz31pcNsy4tEGFB99",
  "key44": "5kvrcaRvM13wKbCQ9LW6gJFGfTptzWK21ci8byjWgUhxFGKq7sufdH8PJ2NGRj4cXQxehXsbPRiGx2gmTTiD1xsS",
  "key45": "gVuAigSGpHUiovBeUV5LqpXPrh6vJUvri9PEVBfga6629TWMnrE4D1qrhzi5iWfje6cZM669LUrtwhSKPXbUFiX",
  "key46": "4T8EXPYCdD2kdiDQgUw3f3uhG1VAuo8PpvUGHvFEsnSnCfAChrnFeyeEJR6CRCCRH5W5RbPasVSx844arqvMgi5P"
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
