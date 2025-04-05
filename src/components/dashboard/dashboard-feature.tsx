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
    "3x9iepEsaNRZM6zwLw1E1PQ3n1sfhKPPrgZW5XDv6eb7ZWnNwp7ZKEmvuMqKpt9QtHU3ksz8BLtjsZm2gvv3yJZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KcR1ttG8yWHMoAKWUAhpoQ58pPDo7giKbWq8fDW6X5jPQ2VLY2JZpMmRYrnid1twgMHkR5fVEhSVjNoCXraDTjV",
  "key1": "ukChhzRBDQY2q5Eou7BtCYSEvdPZQuxEe9YagzPoAJ1AZR1WnZKrdQEVpk86mZUPYGALEXR9mBZwC8GCTAs15sz",
  "key2": "5z45Dko5i9H9VWt96PnSmoSLHegUccSJa5Wgh4sAaTxfyH4aJ8fC3dVxUEmoG2Vfevd7VTutGH34zpzbm3shXcKU",
  "key3": "2V4gZ1JHRU922eAonXoziaKTsqRcuvLnqPSjkMdC7f7gznRXUVvsxmyVfUMGY8aTGNVDpfSuzo62pSzvoZwzQePM",
  "key4": "2VS7iJUGLaXmujSfmBTwgcvk2jHEj2as4sQyJwcg82NS5EuVotMten7MJ4s7zA3zRqtYbMsejPpxYwqhNwnjj5Fx",
  "key5": "65ueeo9W56TpLkqP4ncKSb7KbgnanvDGGBN1wcYFEe3DndxSU5Cf5wZogpEZJ87VdRZ9GB6LsGqWF2zPzVqAgf4u",
  "key6": "3UjBV41tWdr2BmnWmcgigyLe4w1r5cCAUDxgLaNm9JzmaUKU82GmxN1i9A4GvVNUVQFypLG5822buHnNmCUxjdyq",
  "key7": "44UkjYQ9ffdo9bNr4b791Q7dfyBvqwmzn95RCpeH7dEenuheEpDehPTMub88pWzHgkoVuGEoDdAUXpaaXXZoJ9X9",
  "key8": "3CpXxXcJNbiqMYvoUkK8rMxr6euathXogqwDt1aS3WwvrqkszpvdtUSmayuFJEmqCgefehjSppnJgxaJw9HAe9P3",
  "key9": "5vyDq6YPYbaYCcWiaZsMLvyhLT6hvL2sn1ip6HyLTxP382To2tqoL2bsWpnC8i5UzLSjNC7XaAt6HhY3dvqX49JJ",
  "key10": "2Df1M8AnLE8EVnvhwPpgYpCCKNNzk4uVPqMHYMBciAP1XnRJMzdFxpeAXdodWbgG479aC7c4bCQetu93dSSU2Gsu",
  "key11": "2jrvsX1n1kUPB3bcr1b9rSi2NVnMc8bHuFVorG74htBTSbJ9zFZt6Z6sk8aibfEUHgFFbEy6nRSwa3P2hLNjf7qu",
  "key12": "51pgApMA1SD6SiZBqjo8SneFkXQskgfry8Uodr2s9eoNfoQFh2vQuK5XKEUrRSN4KQeEw1BoHFn6q8thTFjV9K42",
  "key13": "5BYW5Qb78BS3BukzVrdyStKCNYbeGGAchtgHntG7A4vLpUGsdieJv8z3A5vKig6H7D8pLn1rCCKnQyd77SxVrViZ",
  "key14": "3gwcXNKS2o7ewbhrAsadV16MsPFj9VSLcN4wURF6VEuVqY1TysCvmFvG1PgE7KeRwyi7XRCLM4hjTyB55EAoShSM",
  "key15": "44PzipSHFp6Yf7qML2xvyauZJz5DwvWgAqpcbpEfqbFpA7pcYJJuiYWWktkJ4iHq6h5eKgJiQRiDbA19WE266KPo",
  "key16": "4vHsCk4HgaGAGyJBoDLXp2B8jt2gArFrqzHK27BwccDggHVvxUZ2ksZZ8s9MStzijnk1ikrYX38svFW8yr5iPnj8",
  "key17": "3PhNZ8nBjCvqMmwoUCAzjSUQEcXwagSKmXVtzJMp2BTJuRTHxUkDn23Eh7kKagShEjjg2MVVdw5QspqFgLD7YQym",
  "key18": "3a7cx7Xer9u6WEVAMXCByFBNixaZ7PLdDLvsxpBHVso2tXAjkQ2kZ5fUByx32Eu41CpneZ2gTWttmuUmBYYYWPB",
  "key19": "2EhSR2qqYK9L3R5H3JqH1ZYjeVwAsgKwuB4GQbp5dtCt65FcjeP82N243u4Af2pAYXxCt3rxSdZ9cQs67nUsDZnS",
  "key20": "2StVywPnoapLUcajyMpfc6dLtgber7h7Bp6y52F7myEKcUaNrCvgyoshxQsVnV33RcniSx7HeWd4xCpV6Ht3GFmw",
  "key21": "65xQpQHwTi5CvnzFKmG7RWacmeAmxQ6m2aMTyudbNYUCWdDVav5m3vY2hd8eShTNiFE7vYrgVsLP6YooHHuBCX53",
  "key22": "2MDQY7knvJ7swxBFMdxGeD5F7cCystJfSEGScmAdgBBN1qDwnpcuM2QYT6QavKfqp8sDvdmDfTxKiWM2o3eDf3Ue",
  "key23": "4BhkVgNaXR8UAxTBYwXP2LQHmEVRxsyfrS8Xh3Z2HfAMD7BTgsHU3fFzGNmucFZXaWJVQFgnDf9GDuNbvqZFGWPZ",
  "key24": "4n5haqSeXwXJRLFhxnZBJqoiYyvCA2Y7pw4C4h2koBCXLnPCqXtx6ZtAYvrerxyoAyJY4rkwRkDUofC358X4W9ij",
  "key25": "57nLBc1T8X49xcusQj35BXGhk8JmjXQLn5mMtrRQqwX6AsxL3dEBQtBcyDJxpiT9gNHpUSvWmf8f8T8Yta8RXddH",
  "key26": "2zeWaTp6rVWgvskwicgEgMqQhtzFybtbTi3P4TJTLER1hy94QgAFTR2UqmGLkPcDA1HRFEoF6YWsrEyoQw9qDcLH",
  "key27": "5Xy29KWw1RzTjuzhGhvQaKLR5CamHnxtXNLuLQkeXRRkRJJvbDno2fhJojitG5jFdVbXfxi2MBmM7VD8fGVBEDag",
  "key28": "55sHsr33gj698oCVpcT2oGN7iVkpPTPSG2yAd7bzUd84dfujVFdtvRCWqWWf4kAcbEbv75kTGkpEgi7TYGAisDom",
  "key29": "2iUhVdQpGfAPRpfsPw4k1rDP7Ejjs9v25oPEB8uzSu33HMVAqwbPTwzyfWHZCL9TNNhdJNAvpF2ysbgBX33r83wW",
  "key30": "3etYdoRWBdWBSdhBBr4oawuBwmmuVSiMy4LzKNTF7nRxtzqkaRAPVriVgNGpYkqW8t6dRToM4kqgj1frbn4NCU52",
  "key31": "W6UfUNkXkHLL4qbE3JTRT4mjQy2psTXhLR5ucBtLcFinihmi9e7K2uLSmG8dBCuGuda2V86GUj4vxyPh7AT86ci",
  "key32": "5hHjM6SGhno9FXspD3pyXKnV81mCrayCm4jw3GDcDjC8cMkJTtX87myxjyoviKf3E9DfPL6YufSCyhLECdc9KjsT"
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
