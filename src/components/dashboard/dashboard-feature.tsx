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
    "bH932BrDRgMHd7B6G6aDan5QGNZFpdHs2HCEPciYF3ZMPKHn4bzgkXKXxBjZVTtkAm7EFCo3g7fVAvRaStzXCbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K91UrubUQJ4wj9GeQ7nnVKS5zWFFFAsRSSq5zLtwEK6uxTaJ9zisKY3DKakE3wzkVUPYJUfdg5mysC4nZ7PwQp8",
  "key1": "2AUXH4DJF4YUL6j3yjiXeivtwtYSGfWL9xSxf3mHjoK1WcWoqqQ958RJ7r7LquRDyZD2CnZwpz13hKWGwJdmTts7",
  "key2": "4QaBJNhEpKKEQgqKkTCRgPV9hbNPGAa9gGEQ88toixsTctqt3LAGeV9Z6YpRhEYWoRev8R45nxjaaszyeQGYu85U",
  "key3": "4WqRGHwPRTY9SjPpmDG83LDctztCKbNRX3eZBA4dCusNn7fQ9b9dwiouoBXHsXQozyZuT7m8ctx9mvwcPjwTcgK6",
  "key4": "3jzFJUqz49jrhycRwgg8UiWWLUeGHBh2nkNr98b6KkXbnLgFgRGpn4R66Suiv2wrSUw5qfXJpC8Ce98ffU2dCFhv",
  "key5": "3TDNPnTf8nEoTJJ4q42oTe3Xq5pxCajTfbNYNifz2emoszmxqYo6tgLav3B1YPX5pZfqsB5ihCbHEGFdkX7koWUF",
  "key6": "37pEj5yUgSnyhzAqfsZ7nCe8P2ZeydWXGiBRZvnoZtMjCdW1LRuqfE6KFmiB2Qrz2MxUm7Y9sUqbELCZJvcSU57p",
  "key7": "46ZAA4vvoVgiPtZqgpgS9bfLcv3bRvkcYATqrJTfxXmZFDfeGbA5Rc9UB6tBwqj2corD24vVJecbFcwfezwMndL7",
  "key8": "eUFkND5WbLu53j4abzpSn3sq7orBpdvze5nasvjbtSDhcW5HWbLGkwqJQdK4NzkygHrdG5qSzgirsZ1fJ4i97fY",
  "key9": "3eKpGkkDtvhgGaqiotAngjJmJnuPN41nJXEWbEBEdHUhu6DALobxSK9m1wfbeizDfkaoDWp7MjXprdB48yVWZvY1",
  "key10": "4icywj85VKaW7PzHi2GQYHr2khUmjAQ4NiAgUtLAsmcSJgQ8XY8vTqS1DUPcRuCtsYxEhu6p2HpfjFx2apvuDP1t",
  "key11": "zKjmBkRRzGtfM7t4Nf1dVZHYji2gL1ncWk2rUkeBkVPSoxa72dQe98SAjBquTq1cNjyXd2kyLc6EDfBNwG8EGp2",
  "key12": "1cvWu1ENZ7mBra7i7ir1n2R8s6VSeKJH3S7AFSt5NzFzpsrNnvkqCAua2LWaVF8Yv2VKB2nC5p8nA1vehuD47Ed",
  "key13": "25RFidANitUZ4Qr94r7aXSWCEYxCon71T18SvvQbYp9mawi4nFiveT7MYUAKLdBY4Zc4dVwH9LYYUC8nLVoEpX88",
  "key14": "5A263vXiUeNb4CQk4nBmexC6en9WSAU2mFPwBPqt6s6rLTNh77oAC28gPJAxbw77PFw6HsXTLad1Q6ofjzmfGjP1",
  "key15": "3BC9czHKFeSk7dJgisVbV1Dtg3VXtLzGn9M3fxvhZccgTPrLC6WjMZuY7VqMYwWEmtqc6EAQ118UwSgHmGfASDMi",
  "key16": "3N5howFgVyvtxXm5c7Ah9bNiooK1JZF9MhzWD4VjvPMGyRHzWMCYMTrTu8BgboAAJ969y7KASuKKnUAagg5CdxH8",
  "key17": "5cSL2H2EkjZReH4gMhD7Buso24z3a8tsaz748TkUtkL7UHHbYXGCwvCV8NhtcxREjQgYGhbJAV9Zuopsyd1QKggA",
  "key18": "PP2puqWge6y54HnPqGjiKJYsDfBSKvPHMwi2Eb1vewThdFKY3QKwLuuC4Ad8aUNAPuvHcyKbE7nvpduJDqpicnc",
  "key19": "3tJyd6d9CpBx8WW3tJhUvtXdRrRmQ3TjXeekjX1rXbM3TQEVa8kTwqRsqgqZKZRTGo9Mfgjs5WA2mAXzYWaNT8Y3",
  "key20": "5NU6A63BeGgHxPRtc9Wrrn3LuwKvwGT2hVafEgRYTWMLMRQ9GtmtqsLdeBQxwrZdBhHXDN6PEU25dBUY5Xd5A6TE",
  "key21": "dNupdPabhNmB3uzKEtTCp9og4gcSXndfgmytCALzSh7dXJj6aTnQZumgvEo9SP31mavxTcbwdBNQfzdnmpoJH8B",
  "key22": "2nyodAeNU9Meyz1YjYGreBhcVAqxNU59iz4EqR4uRR9RM8e8KqeLnvoWBbz2gs4PzYSt9QMZjwAhC8yveeKD3a4v",
  "key23": "5k26Xa8cVxLDXMMStrUq5f965wMVajuxNMwfKTmgTBgn6U69Af77X4DX4wL3ABReSkPqSL1kt2ZP1XDoiHy1uLpL",
  "key24": "sTcNa9UG5QrLtnXQXVEHzs8NQvNb8DtbVFK1PzuckrM5xVERFfHeT4Henm3RepscaGsrk9nt43MhSyVGmVczrD5",
  "key25": "Z511UFm11VFwQYBUKVB67qSb86wcVLr48njZ7rTeLA1V5SPiW1fmXWv94ufesw8r7SV4ZYAXWY3c3KPhE11ePJ2",
  "key26": "2sJw2MsBJehZNQ5gg6Ec7hcHXtZKbywgaXdCHScbT9xeHnxzfD8ok3PVEQxjY7Sr9c6vbPnX5TCh8uwkeyLcBpud",
  "key27": "2msDcyViHQ5Yxva7xhRT4DyvFzNRwTTpGbHLCADQCKDPM3j4vGDEHs9i7nPVF4T3DFmPq1mN1CPU4mzGvL4MezGf",
  "key28": "3UPt19Z1cLAMnrA7V8cdvaoG2v3iGms7q9vYViUyug2U2PHqhJEVdyh817CTdr4T8ZXK7QwG9jmTNbu7rtGEEqj8",
  "key29": "2fPPZHDeKiPSQNmVhaTBjBpapvBxsk8oGroti23FZivTG7E7mWJ4k9RZveEeAVeEiGkFntWb4LzYDABhNULSQidJ",
  "key30": "DBkfZFfLkEN3wzPvS3q4MkJ83jYPZpBtc8t3WUkLybxw6x6pF13k6GCWFNbbMw174NzdqAUusuBtJ6Wq7Z12X4d",
  "key31": "2uBFGAfScS3THGiiByad5Lv2BiogcaVTngktcSECMvSAde5PNnaz5BqE4DuP7p9NJxW29YujUu2bDeoqMVxN4u6B",
  "key32": "44rxU2JLxLjiDSu8ABYxzAChu72kfSt39VPLPmGhQkRDPYFVaE2LxY6gs6R9YkUY7gRFQCM8VU34VhEvBEnQktT3",
  "key33": "5SmwL4kWq3ivXRXADX5K4D2MpNNvu4HGwrYkuUtvNMdbSPDM56tBndFH6YnzjzKnkTx2BNbpGL5AG3HBGc6FQq1x",
  "key34": "JVm13nTyrMkdea8tQ3eSbGgJASxhPdVJfgrvY6txB7JQsro2W912DTT8eKo3WbmCwSw35bcetkj5ujhrQE2KeUA",
  "key35": "2CoTEeZLiewSEVd4b8oLUxNLcVJ2uhSQhNiF1U2S8euu6kxNVS11C9P5eRdf7tESMJD48ASD7guPyzcmREoZuimy",
  "key36": "3e69JgKC3WtUatjZaqDdiCbzKy1kZzyrfgKijhT3LSsMD3VDjzT5rYFcFMfEsBaymKs2dSXR7R3vhgFK3YnYomd2",
  "key37": "2e7MDWHhsSyGEtNhE5rJAwMJ4Qte2yNtJY6SNFRNjP145YZqPzLzDXUCRRCFVG4h6GapeqADb4nDvjMRzFCiVTh7",
  "key38": "5rpiGC2sh4SprBPE988pvMRvCQ2zaGwcv2pdyvoMJuPGHZYtg6w8XDVeLTXXGm53zaiY2oMrhh61mRKuSg7TtZ4h",
  "key39": "2jetqmzoiNb7gyxhw52tmDqH6FdKgeJCJFVxrnMB4iKyVZAnWF8WYZMktUUFVFx2p2vdm9ELCq99EDVainfoukix",
  "key40": "2XuiPMGx6xw1zF7gPCtV6JamFH9Xq8sAXjE6TnZ2zywrRDVxdSHiLJ1FjMVTqr6foQMp1TBVXUy4DAMtufBBocmJ",
  "key41": "2HdkkeAxWzLNXrkeH5zPBdtD8hcDvxG4BKoDMLuTSMLi87Z1pAZ6DftZwLhGCq4TMUdYYHq8tS3nMHcmviCPfZV8"
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
