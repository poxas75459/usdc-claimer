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
    "ZMunn8R2eDG4FkinwMA8nQo1knvq46FasAtQq9APa7iTKbS5cYmY9Q7scpyFm7ofetofew6P7tuCSQtQVoXGnDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gsCKUA4qMT9mbpwCoRYjKpMzczbFZPpBpFG7hHeJLvPtfy2yThCz2u4EU6TYbWnssgCe8H4dpLUzTQei9Hhj5GW",
  "key1": "3FJhJkDmmBEfS4xHtnx2ZD2ZyJVpiwbLKKFWjQmchPy5CjjCgLrbBidNQyWCQeCD1kJysKRFv3wfqm6uxMmErYjj",
  "key2": "5o9cFhz6BEqpami1s2PUM7zKxmzzgzjRvnjkP2xWCuhHmPKMW3jTLY13h1MMkTnSw2BKNXDxz5dZUgPLYnsCdHbQ",
  "key3": "3Q7DoQsrvSwL1cDwAZTzfX51TxdAq4WLLEeUwPvfu6WftW6mP4SPL2T6dePCSfAccurKdgpF46j64BNQVbMzTUe2",
  "key4": "3MHQuuMkweTV49oXkbLwKSx5QQvr2jALNqVMgzALx5UEgi4pMTBcKRtvD7Fso9Uz339yB8DzgWrdRv1XdGQKaE41",
  "key5": "36t43xtV3KezZ7eVBRBnUodGT6oeT66j8Mbz4jRXzSTUa76mp3zmn7NQZdug5SyfF7MK7JaTsghF4hEHyzma4c62",
  "key6": "46n7QRwZUfbHmMmT1Y5SZtJbqcaeT6ZSUnYSjAygNUDuQNP6jT68PGee5NrfnpwtgDHAxZSKmX1iLnM2KzLTKbje",
  "key7": "5RmG95SMW8qpg632eNqsDhaRH1RVM5eQMe556YFaQpNBduWBBewGERU5ee6KWV8vLuvnzRAz2pDanArcAjdJSyu4",
  "key8": "2KqFvoWcxH1eypw87ZqBAnThRFhY42RvDEDAQhoNnNLTWkV71CjzD9T9duD41Edf8bRgXdeo2KGo7haBSUGTLXpk",
  "key9": "4f3SbwgzFJaRWvxDxR7jpaTw2uwTPc869z95fpFht75GMHSkZv7W2NgvpiA8GqT6joPce6tUjxWkaGsZgo8F79ke",
  "key10": "3GpxQsJkPxC83EXbDEptF7tUBcCZmwxVZgFyLiW8xsxvAcEYWnDiTAHYAFVm3uLBU1NWUgVh8CyMPfWyBCHJGeXo",
  "key11": "5WfS8SHMQFbKptxcMxzEjpXgr2QoysVTYhWSSJHtRtu3Uu4wmxvCJGVYdXLaFrVBS8woJXBJnoywPgykZ32UCjxS",
  "key12": "Ga5FUm4xWHh3axtteagUJovjjADXEvxJqcUjUQocSnt3PPYsNrigX9wH3uYnikj87BNoKe5KNmZd9UUw1RdN4nZ",
  "key13": "kUdicrcp3yVgPVc3aQnHQgy2MoXbeVspvNwy2vsVMsUuY9uQtU2fphxTRVwuoo7w4VRVnYp7rmuRijagtzThARe",
  "key14": "DFeDzJg9JEfBt1WvvMXETSFu7oykLoEGWeveJPeBBJfCBW2kYSL5z43ReSwWUMByxMPyhaLhxHJiAEYvS79gYks",
  "key15": "4rjXA5kDkvxUgXtPbax1ZRTLBDH3vm8RYZ3Ps6VWFRGzAkqjCKCnB8bu2twwe98fCN3XTA3z915vnzbxL7DTbFuB",
  "key16": "4aeA3LW4Nk2tRLQDeJ19LrGcrpbaQikBRruMTkXNM2rhGwgMHvdTPEREqpQFxto7GkZLGXkobKhPZrqWpzcTRtDd",
  "key17": "3HDxXh2PZdPkeCY5y38WXW3uZS8RUWUJifcDZoLxxoyREVS3hvSYQWiPRW4TAYVTKDUXJAADU1zTKn3oWo256toD",
  "key18": "53RkE2j5RY3e61NsYxE6MfpiBidiRmVwYnvbEFaVsdetTvriMit4SDHroxdy27RQ8Pu1x3G2UuQgCaE4tth4YpsF",
  "key19": "3VkmRJXqdniiVfjP6qqSR799rHi4dY9TEQW4rstkFRWA8ErN56ds4PUF4XhqP8zcBKytAt4cmRoJCbAaa2iZjmL2",
  "key20": "5GdJENj8L7EGseqGQ3XX2Y3XHhjK3w3VViqDzgzQuv5hBNg2F34hrgdTZZm6T6GUmnTs9KsAmcZNv8bc8jGAf2aR",
  "key21": "2hd8yPCbL4Bc1Sc6ZmLFJupAoG78Afyz38C8aZoZ8dEJ3m9TgALKG1mwQKWvH2KnpXH4QBsoZPHU8WrrbZy7vDCs",
  "key22": "5u1qyt9T5qjmeNrMaHEKWdUEyPTuUCrrhNuM7WhEkVzgbvDERwMyrU2cKBHQqQeoWKzu32vJq6FUj1eLeecR1btp",
  "key23": "2dR4RRZSxKuQzK6vgPVpL3yr3Uba7bq42jsBth8RdAG2UNqaWMm6KynL1FDk2KSVzUfHmotYTWBDgfjsmVzHC1MF",
  "key24": "3wFAWM5k3UVzmqc9qCB7JpHPiMtQ4AV9pwpWkfJEMksAQPserMy7jx6BzpXsDfoqYWrLPKYjxYDnHwvsZ6g2icqw",
  "key25": "BKrEkufETq6XteiYx5JcV36fWp1mGfHBp8sALNDAkD4xAruvxiXzGYVFVX3FfHAyJmeSKsBWpL6ySsAZxssHZtx",
  "key26": "3gp3dKuQrKCoc9k6dBwA7DCFffgyUKKMroU1JDoPq3hJ86Bniecy1G5mk2gW6MQQ4xDjyV4x7GKfNUWAXG8hXAkX",
  "key27": "xxcHG7BGurSsSudexcH9LJRiH63fCTx7dCAvLJ3TBTisBpnfcTQEDb4RCTpFEhyE5ya7Z5sq3SbX8UdYduSCyvx",
  "key28": "2sioZfbQBbUjDJ5MbhVHPsgj8Qit7TAirKTWuRJawT387scqjQpwNcSQH46B27zc3LZvT5kNXhRG6pQXXhKFSKfi",
  "key29": "5kwwnfva74XzGooqvX4WhfkZoiFiHeB1s9ENPMQFHqFdyUJEze1tMDhzYhBiVpXw3bAQfRXXE6nUq5uabx7f2y68",
  "key30": "3vUohQzXUPg3J8aGCRgMKCnUxuWkekk8Ckxsd42ZwyrWmFduCT625pXBBhpAh1AHMSzVjABWdiMtFay36zpdugCb",
  "key31": "2beRwMQLrDWRUc1uHFDtHf249gsUujqBe7xSyJZpepxm2nM7fWZYkwvYZrfSLNbRk1ZpXbsnk1zSiUfTsaJj9ecK",
  "key32": "5Wc1UHyxVzVcy9zuWJv1BqQFBGjZhdXftQ5wF1p61vMRGpVX3e7wJoCxWphWmGpHLah7coxpUtTGyYPz2uokmQHJ",
  "key33": "3UQDAjNBVn6drXVfA1mYNcDHTfsSKySyahfRDESztyomFXW8tvXuyHaF36KGRQJNdtRaeReiADu52qinVH9WdQwZ",
  "key34": "3RobqvvtAitV581upXe5r6ajYBU4v94dxyVaxWthEKNsce7zBrgexmf7HkzvccvcRcbHyg2LFXpeKX9WhphmMRiX",
  "key35": "2vqZCN6fBo1zBeKQniWj7utUKnETtVriFPtANoDp7zNTSRw52ZdGuRo7LdQ423urmrmLZAi8wStXzasufNNqvkAf",
  "key36": "544yCKnq25opF66Bc1ok1i8Mu6iD5e8iJFKQG43jMuVxrgUAd15nJSfxU5Ne3wnof8GyCCVDWwK15LsBKKssSVv2",
  "key37": "4Nrg6wfzrikJmNzhYw4rqwjGgU4EdueXQDj5cJq8yyRXnpGJeuBN587dVwVac7qmKgr7bkpp1dRVoEKVHodmmMgG",
  "key38": "5Wr84yfFAtjb8jpNSyywdg2Yz8HqQJyNEPvzJ3Ad8TMs9ntda5jqoiovegnh2NZXUuMKvbHUoX8fA3N7P7WTr3sb",
  "key39": "kF93MXNCSHZJPNauExAroa8i74hzj2jeV5wfjP9C7ZLDvq3wwtJfcoxCtyHU1yv9BWZ3y2tpRe7QrhYHXh1jz7c",
  "key40": "4jrnCnBmrkVu43Sa5jvcZfcQnjMLnMy4giRFRJzguH5aqi2DGAm2dXkR5rALnt6TkvPDJRe65xstZkZYboMMdBvj",
  "key41": "2mDusvzWLGaC37Whq1QC5ZWaNmNyP6SRvEHXSXuUzn6T6xQFotLatP4nARvXwF8KBRvtPn3u3whzMQBBHDhawSBx",
  "key42": "Djx2HDtcusTYBdTSLvdmwbi2t1JhtViciFJKUUHKzX1sFiSZWTWemc3LvWfnLhv8mXgwkRxsHLvtgz6oSwXrLHs",
  "key43": "8Ta45QC8PtojZZ399hiCfLCASyzoVVXpWQgqFDDfHDaZSpn5PuPZWQYbtz8gJYkuq64XdRUqCmwmSofqJT8nDWc",
  "key44": "5rX1FoaDEcpE2hrKgWL9ksU9TPP68k98udGXCDJK9JBbiUrWitPBatu4xhaaqjNxLoP5jXSQx1yakqb5aCa93Td7",
  "key45": "2zMvP16sZmUZ5WRA6H8u2ERbgnPSF3M81KQidxSCrHu9wcYB1ZhuuK5BFrEDPProRttHqWQRZ6X6C3VQDGUnFCkG",
  "key46": "4aCfPXv2JaCUkEzYzujuJVhkQdDefVobk6fF2Cb5b45Wd8Jeyy4AyZiEoaLCPUi9d13bWGGWwZtzua6NsG9KbEo9",
  "key47": "4eGVftjHV7pPd3vR9C4wrwbUiH41fqoJ4QAnMhTGbavtfJCdyT5Wg2DqJQ2bRVmoWQBSGof3X8LzcWXMvo6cBkRe",
  "key48": "4k4iEnReFjytSx2k8ZtR3x7wgbuZXNp1FgxyUnwEyWCybzyNQrLWrcY19Y6oVEU12myrZDX17a7Byd1yN8CTFJrr",
  "key49": "5bEBM5HRoxkuGHK9GmmAD7Bs84PieX4sECRmF2BioNwWWePMSSkveEEJnmNDk7M7DQeXVc2e3G1yUejkRCzyQGVC"
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
