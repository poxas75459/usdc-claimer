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
    "4fZnWmm1kBzySo54zmvq9A4qWWZWupmiua9nkyZiGQ7EQXpoXmNJ5YZeHRJ7qCsWjWjZBWmaCD5XojPoeNx3FmW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z28JZFEq5BCMEBuTaEJVnoykXBQ3pebpXWYHxqKh7YZw2y1U3PiY3brWNqinh5PdP6HA7RhuBKLQUbtMVd7YSjf",
  "key1": "5J75GB88EExU3WS69eZeZLXAWFs2v5PdqgKZxutM66qeewFobu7ibzXkmpu2nc26oHQtZ2kRcBhbeSAriJN3AWWH",
  "key2": "4QcRNH7kmHWcrH6stTTdnee7eJvvr12RLjDuXrEGDC7RdabSA3kQeLonKc1iZMCHKzbGBUdcf2zbRxDHHovDNmEB",
  "key3": "52aTfVT6Rg6LuopKfGu3ZnP6MrGZBudik2yUJ5a4jwue1KFoREssW4F3mA2Po13Q4RpEiXQQoNSYtkdAb2SBuyYz",
  "key4": "5DFfjxhVSSSAHdkRAGHJ3NJJ56VLr46xwzwpfVWqKgMAtb2LVsqixWE5y7wd3iNJuN6YdCX7h2tyhpSZZ9ttD3MT",
  "key5": "3WXyFn98VuAqW2v41fVJDosshnEKrktHxdrUY7K1SEvz5h2E51mQHUBjWKJjAdiqwUxLwu6qgnV4rUN1RFqpsDeB",
  "key6": "6sueNbYfctvKN5K6DUrYQSFgLZTY6mDeKUuQ1duYmcB7b8Gof7rtKWVWsCQKmUrV1Z1WnoMtp6QbrMRr5j2295p",
  "key7": "2CwQMfLAXcJ851YRtUeb8iKvhSVgD2vkhLpk3xjnjcAzEYxnRvdeHRic1yp4hkVNraCj2eKFMrR5eMe8zU3BWgdw",
  "key8": "2ktdKHUZsp6vkzdq1PsAQFB4wTGc3qES7mYhY9hWfjzNbyMC2DaeQuyHSohEPNHFcEpLafKbG77rV2rD71i1Zcrp",
  "key9": "44RB72o61tgcDBev1r54pCNVfEiQnktGUhiVGuazGnQUbzT876N5ngar4jaVBKbAPSGpfLJcqgemzpqS7wy2Mb7u",
  "key10": "9YDr51LgBexWKMVu8e4szp8BxBQEq6KKWC22t1WvKoPNSDXRVL64s7WLmJ9aXbBb4eZ7NPQ4ufnutj75dmKGDzG",
  "key11": "2Dmmvg8H5acCoXWy4sm8GT4SjUB2L9QYBV1w2c4oTKkpBqcQvXMiVQRBJpJguMHLMEFuMgUP1yLRPPvsMftGVqQ9",
  "key12": "1RqLdDZxtaAgj8rVEyFNti9LjReubDdi66HB8Ag6GotnaRtg6nMNJ5jPCuYY2rCtdZVvoEgoMLUPKFRqjzYJpbZ",
  "key13": "2zRnnX7xMA1hvV1LZGtoEtUekKRg3QSmVGK5hDKyCcfdeQ2SPbQQejSKqDempANpB8LUvoWd8Uhkxt9Lt3od8sLP",
  "key14": "5TSnCuC4djX2cKbuFvwvzWdHiJDzKd1D4Aj2myESK4gYH2iMVm5jbSDBLAvTwgfGoE1CeMajaMsQ2P6NioxW1b9a",
  "key15": "5kCQy9agUvPewHrWGA2GK5MjvosNJxCyjXaKDksygVdjt1QP2nneGJMTqfuZc4nB56G5PEQc421dVqgdc3RHfLyS",
  "key16": "5Xx977uVhdfLGhST7QHR3JWqmyTbYBGq3ov9i3axcbj9kYoTTDF6315kYgJMnzjZRethXkk4qWC5Hr5oHnFGUQeB",
  "key17": "3U1nYiJ9FFPjnGTi76KGooTNULwfjXpnj5YvtC7jV4YBUU4LBrNcGLT1VRJQGENdyg6xm6bpy1NUakTVKm43sHVC",
  "key18": "2dsf81Hw1J1oFrMVUYAMU5hGRvyC4qQBMcjYiX8ggTGN3K3ZNMzqWiWC33Z1uvEkTr9EEU22HJUWeUBQucr1JSJU",
  "key19": "4tb9YgwrFz8avUNjGGoHJUZ7VYKNGKgA6biEoRfbjSHSVHvYsQgmp29Ab6iFW7JXHPz27tqRFHLjpgxDtebPAnmg",
  "key20": "5Rv7MtzDvvwFbUg2dWWdquY4E9hKq4wswe9bCPMm6b8qNUWP9nHyRg2fwWqbqy1RvASypNmyBnmmFVEx3idbJSKv",
  "key21": "1CcUT7QnKeqzr1RJp8pSW2iWfojdhdtsvEKSweXFbsbFLnmTUsEUXy6g6VUkLvos4axqDLNABZbwGLQLqEqsyEv",
  "key22": "2G6SVedUF4E5obT543uWd6j9c1XvsjoNhioLDKE6NEqNBm7ixermQAZeNwQ7Ac51iAy667VwJDYQdQ5nCy9Dc4n",
  "key23": "QmE577QJiFsu8sYCdNJkhvq4fDZYw7izrPRPP5ttaKWWUY8ha9mc9nbovHgku2gjFfnbrn9A2EUPGkTpe4NxHJq",
  "key24": "5z4A37wGwTGFm1wvV4qyTQCA2Ma7MWZHw45sSTTafaNun7j13D1cyQeBucz8wxkBDCdBQNxpAvnSJpuon5pwRmZ8",
  "key25": "3u9aaHzUgpUzBjN2rUm9H85pqvotxp4dVuAmZX8ETNrCZyporLjRs7YQ3WXeSawEVPwLjJnd5e1xoCDAiDB2kmVe",
  "key26": "5RPkVFf7D3hgpvo8aiU5EjCjHVb8UcSAhVvfvYCa9csCLVACbzrQZ2rtE4q27dFLUayeuiow3toRLeEiSbGvCh23",
  "key27": "3jQ4X6sUX78C4V36FSDYoDPPKsRFoyFJWWf8SVAKHmthHpQF1stpXhzHga1435DJJcHTunYy4YxJqQsjpmBxgytF",
  "key28": "RVzVNeQ1aBBw3STr2Swmdg4bWeHtJkRyv6qaWsSYFE9CVbdSubKQumJv4FDzm4F8oEPV7G3KEYViVgEWL2wpsWm",
  "key29": "2JgRfBADxoQwzC3mzrcZtGU9UjPPrS6AxZF8aGMHo2x2FDkkqCDd9HqVHc9tpD3Lq4Zne5Ln8nXiNwJ31gDRxqz7",
  "key30": "4AkwEoMML8hKjQLeRhC8Kjpgy1NYVJFk9A7CHnDYQ8mgXKChzAmCCxB2nb86UVx9VP9hkLt899VMCz7g1AT3GKyA",
  "key31": "51779mA562rfd78nr6uVDJdWJUAnEWHh6ibsN8vcV2N7ZnAKojZNyvFejFNp4WHbGDWYrZNodAPcEtb9a1iGJRUp",
  "key32": "1QCDKe4PkszPxA9Wfh5rqDj5z7qvXunxLp3zGaLastAbLVMP3mxuqpkV4DhC14aB7qhRyjKu6KaHXqYvryzJJWU",
  "key33": "3ej7rxcEdoxrjuQWHpPq316J5CX22KqoMyP6WWstnHfGv9BmRABDYScU1j35xqEKtuehAGZBoTrBm2dWrcPnYJad",
  "key34": "62oCnKXrVfsv1xou9orqpu2soFWvL3rF7fYk41RZ11TRr47DXQtJousV9kT2ngquWeB39AAEbKzkY82jq5M7Sh4B",
  "key35": "4ssM5RRbCPWTNm3mNLxiJHrtv47FveQsiEvSUWCUfQvPMuk9DdzBAi53XJCwYwWUhWhLtp4HmFsDp2FqY8ELW2Fc",
  "key36": "4HR1fr22K5MkvLyZ2Tq7YGrhPUsbLGUxkenidHiug4YMSRWAkAZpkQD53Xk2jg7hByPjJKJAXjeF865bqHiD2XhV",
  "key37": "63mjfuPmFUXCenKR9qD1RDpcA4NFViyQAGo9GHXeyi5cZfpeEGQDHQjo38XJfSU1HMnA2mfzNcq2a7gze3Kdtci9",
  "key38": "5r2ujRpxt2UZgKmKzmJJDKYq7gVqGvTj6YnRkytSnWUPS3qRadzQYPpaxe2PVCdDWwkBPawe7P2Rkpi2wgRUsWVL",
  "key39": "5q11Mhk6532m5mzujGmCTAgYhmt2hu7fFDW5Sa2h3r3sBiazqSyqZBEnnL3qHPSxEQLwsGXbDDhYXZXTnAZiKYzi",
  "key40": "3rGC8KXhPwt11D5yNNYLKYqtq2uJnsyLzzoyqJvVJZ9QTEbtv17GW6nU553RGSATGRfRifNFs4BPbionxRYC4KPV"
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
