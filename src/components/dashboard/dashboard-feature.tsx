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
    "55DThNrjvJ6h7E44ZeYxpru5EaXjVP2BNjRHugKCwv4kr9uPAP9JyGdBHY4vqPmFeESmeydkG3xMRctWN35CqgCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQDok5qgikLFmx5wgpxBNdDhCutxCjMt1cFrn6cVTqQXjy4kjPjNTa3EVpaG8XmwTjhgNzmgfHgydbtEB7k8Jdz",
  "key1": "4HkAgvvkGG3k6fh6M762a9vpaBc55U2adaUN3c3ybU2H41QdB8XEdZkqbuGvfrctfwMToSPNgxr6AiBVXD1PtrRd",
  "key2": "5Bj8vFus75ZvPPnyhAmVteiWYz6htD3yssewMcYvzjh8hMQFz2VKi2kopghzhmxtBPFy6urnSb3vxd7xhYrJbKKv",
  "key3": "2PkkVeYT3EjY1afQwhBrfqpKm156dEPXZk6T1LHMzvCWEgcCffP3H6jWNfExp5uGvFcHCddt6kw86F5EzzAsCXtr",
  "key4": "xw2PUhN9CWgz7kPPD44xyzWQRuG1KYh8cQUUudTKobyFVAa7LBMcJdtiqViKStFV2mn4wj9UYfzB5qfysm2H8hF",
  "key5": "57w2Ws8MYoafJeioTjCPYXvzgas3MSWWcNTTHe7fcZfZsQmmXLtoBex1zi76snG8x5M8kzzTmGZnLaoocwYpdbNc",
  "key6": "2DjGLsJMWz9LMvBqCS4D6KvBLYdiLyraSRHNLPW1ekMa4XaFVD7ALR8RmGAeHxQaFTK8RdeDrmQ6ofaJH627rur6",
  "key7": "4RgKk4wgzijWbXbpiZErekE8CqzhTnSkw3E9CEHJpiHj1NfNHPd9Kc3MfTJQ3kZnGzur7ShcuZ1JyuAg7bW1LnWJ",
  "key8": "3So3oBEwKpsrMzGagmR85wUUa6PR54uHHfmdwHnP63WUyLC3vexNcm9bYwo41yUSLKENopEsUSnuhYoPau2Gvbvi",
  "key9": "2odCS7QVJTHzgEr2EfQxaddtNLaUXnQWv99GjbjhPPX4Byv6Y2jcu4YcTvudc4dtpcdkvGcmNp5gAmHX6XiAdTrX",
  "key10": "5bNk4P5hbndzuXhvLsS4FbvKswpVtbLBKKyK6742EjtFXowVZ8pDdYGhmXs7EnDSdANiAVtMCU4RjB5qfuCvJJWf",
  "key11": "9W2iLWfJsGyCpkP1NGcagatAMUXxnWAdf8n9LsWF2EqUpT7jRNq9NfmwWNpD5cKxU7rNnJkXXkEEgtzeH74HcUG",
  "key12": "5HYfuy7qRib4XGaZqPq9kavZzweAv37zyjgQzENhpbBFMaCPYggEdRhSmQs9dK1gJhA6yBKEubF7euh9tpGZrfn5",
  "key13": "43HRfvx5XYWXcmC5ExT47MSX4FgZBbFx7qzyDEJhXNEVe1XVDHdAUU7tMT8nThdfU8xB79JE5U6UsHVGMVanEKVp",
  "key14": "hnbDuiuW9C5jVsuLy9kTAzbjvej3wssb4bB9eMDXFBSf1dVnuZsVPJMLifUAB43xBk5PpUr53WMU7zpgceHAmkQ",
  "key15": "5L6UQ1rWP4nmFzNMPeEBCwkT4Xq6A29smef5e7ViMYvEJvvgwj1WU8KB25SWWAzSJhLsGTUshNG2sSgNdHfAaWWS",
  "key16": "4B2ovYBoPbNHBqRgxMjqdxahfSrNEbnfcZTFhMQ5xj8r45V35Z1sEyafA8NzGkP5vqPj7fhX1k86CrjkjzcBMgfu",
  "key17": "cSgw7x2rnumnruih7FqxkAuQeZocFCzw5L8YUL6YQUzb9aEPWiVJ354mcpcpAyXyQLLkagYw7iVcbG45kffyR2T",
  "key18": "5LRgmvdWMAKj9qaPgWXt7DqYNnSxvW5acqZ9jFfjSBpjsyZt9ScTRtdeq1CqscDdMHMaSkNCXhbgYyaa97XQ4WnN",
  "key19": "TDxx225wWEVMfRLTq9E6HLjQZ5AEYTmbyjUyU9Waomb9xgwFG3LG3kc3d7wNPvo7bZPHiCNRbRzehrevEScQFYB",
  "key20": "3GNENi78DLHoJq9CKseZ8DYZjf6bYmo3qHtSG2Ev7fFXYCtVaC8fV3x2aU2U2qGPBvKRd639dr8KPx7vWxA2FhnG",
  "key21": "3nNnPgqH6r1kt4M6Nmd6mDxpfG9e3tFm3fULxW4NNB4QgHyGjRxv4vmexzur5Lzf1VTijXcUNnqbtjsscW7cTYGf",
  "key22": "2FEGGU16P5ad5iTXd2ZWFrWgTDuWTzV3MUSZN2Bns8yzHvsiiDvdiKeR16t9D8SmcCvRX9vG1pSdksGmcQsnLv1S",
  "key23": "41WkfvdApcDxMwc6j3npekYqgcZJHC3AUJ6NdqXhqPfDaBMeMdHoY2wo2ViCWuZ5hpXX6jrpYcG2cxoRBLeGDqga",
  "key24": "62vAYGq3UwRSUgdxzTEWz8dYtYXB34kmEek2s5b5Wq8KBh9qxYgBmmM77qUMPXEn4MuSZ6sp95gL7KzBQN2YNcuP",
  "key25": "hxuAid3gEphBUPgtLMokMytrvsyGTLsibk9FbWmNgkGvdDj43K6cNeZ627ajzwN9LYx5HDBdcWZ5CbZZGSE3Tf9",
  "key26": "4W2XDg8HiqAAF8trCS5FzDjztPj3jMguMJmcghHgCsD2d4z6tm7jz7UBhFagTX3Gfs211x6jQXxe1dUN876DpRiH",
  "key27": "25SQzD6Pp27winQtdFDKNnkXvWLGdgGbLfa2jJDYDyHmiVBZXg9Qn1XKmDYCX76ob8NmCj38YqiQyUaLYcQ886AH",
  "key28": "5UnJyaDy1zc282u9QQb2EU1gYFrtcZirv9sXo4eXFYdouSryEfdoVeNMAP96U4k6SNFsUM7uaxaV7zs5JGsmJpRX",
  "key29": "3WcXmavaZsJuG6AAp46gfdXea5utxBkxS79133FPiV4YAq97RGgRy58tAUbRFE499WdTjt66fnB6H8URajvCd6xf",
  "key30": "31Yitu49LS6XHHF8qKGycrX8XQU98A2mCx1g8Q2seABmT78n3KZYVCtC8EimoqAbZuut8v5qoFdJdsD8Rd6auBoV"
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
