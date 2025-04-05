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
    "5N3Y4ye3y7pprPm8jF4frcx2eB7dvxPRWFDvYBkU2t2B5DNY6mfmouuNq9e1x1vNZMQto93iA7JySBBffhRwGEmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nhX3PY395u2dq8Tw9fLpoPBMrpd4GmLrnzQNECE3UxgQaJ51cvSRzndDRxn9x37Zgin9YhrYW8SH1xs9S5StjY",
  "key1": "38JLQXkypBNiqbqSSUb9CxSGitKzRXKxbDfNwnSp43hDzT2d9opHYNnFF9NMPiZGd5dmoRzyVBeLhNsHB4yTH37U",
  "key2": "5GmSWovXZnbaWYswMC5y58krZAaFEUPYgxyvWWofAUwgByRcsTo7zkb9abdn6z5bqo8KndGLhU8zc9EH1yKYD7vb",
  "key3": "4z2V8QFG4di8wzG1dFSvqvtGiU4HhRfLuwA7sZh2pZysBujr23ozXU4vYkHDq7KNhmkUffbQ6gSiDhJWNjSqpHMn",
  "key4": "5VhRXpccbna2SXvtJXYf2o6vEdNBDWFS2xYFetUjuB1aaRXK6LCcUgWQd7qGj3KsV1LxL6EUynrhShDN2fM7ANie",
  "key5": "3nUnyCZZBYSckKj42q6E53HFws7YqwaFNKNaYaAm3bfUL9HXv24UpvMGgiuP2uUN9RdPfYq6vGLkvbiAwD2wf37h",
  "key6": "3Ps9wm2niR9w9DQw3GXXeFwKARduWeEMtBasN9YsBV6dCWrRYLQAy7GK1Gq3eGTtS3A8uSALyJu5A8fqa4BSHKEY",
  "key7": "36vnUHB9NucqzEomL6ejB3ys9MxLY3R2noZwdqFVd1TP3QMsGvKBoHUFdgkdqjeZmDHrgqkq874qKKGirNk1HLw4",
  "key8": "2yi9NWgx4D7y1WLbJuQmXc9bA6YMrdBWBkAyaLXswkKzjzXGB6hi2GCQ1vz7nsKoRC1AWmHoFdLRKgwewFxbH8vM",
  "key9": "4gdVJGVoEihjMwC9mvUZCJuG8rjVBBQPoNARGgN9XinLZac2iwQG2ZKeCVrMbdPJ1X71pZFcRDVEz4CrBg9JGtnc",
  "key10": "2aAGUpmUc267chNqS27s3724qAgKjf5ZtpZ8dwRw5G6u7HG6twxCswxP947HscfF5RCnwoQNGCUGojQtj71uq63Q",
  "key11": "SULiESdpMyTaVwhQWReEir7mqykzC34XMNGDn7igeH4VvrFg9qVmTsoXw77V8n6uvezgKrCaSusaoTMA8x9JxA6",
  "key12": "2WUmDwAfCbq9zscSTyU2VTL4QF6ti84VxFRYSt5iWGZZk7SVcB78wE8f7x7pJmkc8rmSmenKob1H6AU5pdzPns1F",
  "key13": "4FHXZQxipfbTgi3uXusCem1Fu113o9zFnEY32zMEwnugZNk34NUc9EpPMDzNjxdbaYTHgJGKrSz8ncsVv72ikfrr",
  "key14": "TFXP8KeBo5yzRqAAcCeg8TCoTg6YuiZ7gfx3VRMDVNge2xfF1quLQFeEujEc6gTR3NCGwEQAu6LGsfDKKsjFfbn",
  "key15": "3mF6CpRdgJLuXwNzpkrMUrMG6FXU2rn7Ey6pmLmuZ1roaFMTGG9jL3gMGCkvRbTpfKXsKzth6w4mVa4954hMwEyX",
  "key16": "4iNzCCtTDDN4oQiHb7XXTK65x9tCxqFqZSCGw3esHCiRTuJUZx8fmNVk9p7ctKtb93N3PMwnFfqXXCSqJ4aFhKB5",
  "key17": "MSN5qH8jMT59w452hM2BBCZJkMSGYuE19AVPJK7NoVzgYATppdBojFu7pE6acFR2ZiVGSbJKjQsupNPrWx1FDov",
  "key18": "2nZTAztkELkJwmtdPqZK6uiufoAjAKwbiHvL47Kjb1uHhVCviqoKvRyXFwaWuQgtbw3RFrGtqJdoiQvFyBZ5cybS",
  "key19": "eWzuYV4CS5XGiZDh64xSZ7562ZduW6c16s1pbYVoZ5x4zoEDf52rxPBHPTpaBGjRXhjjYicPSswQ9s9qXNpu9Kn",
  "key20": "3x1M99nvBoe9p4JiENCkPw3yrGQEwYaTGWrupNJ2FXHGjYJv2gTuyHy2JqZtayqW3uZRTuhKSnGnnCB6G55DV3AD",
  "key21": "gnQWm8MExFWDoT4DDSJZgaZtKmc3VFav7tPjsA8SLzQt6cDTsKE5r8365v5QTqm7rzh5d92aWk9JhaL5pR4VtsF",
  "key22": "2eKvswTYFHwxQkM5oYi9igp1HfEfAwkmbhAqVVxMxyGnydVz7j63FZKgj3ppxGpVX4Gbvkm2QhSEvng1LwLqnNva",
  "key23": "5C6Qy8HF7nHwfvoFrxokgfTokWVdTFKRW4wZihz22LSf9jUv86LLFfZq3NqQ12HevW8CE4jCKv16tq8RuCHbcYB4",
  "key24": "5LJn7V5prrdtwVofyhBgWzcUS1tqvrB6FF3xnscvap3ew9MkiFy7XKysQvTgsuzYxwugRY1SyLPZFtG8cN6apMVH",
  "key25": "45dpfqF9y2YUgz77HDGv3aearSPHyn68XvbbSYKBKmneNmqdX15BS6QJSqhAhi9ZxBtnZg1rMkwFRwBA1Qib9TdY",
  "key26": "5zi41YKW5tw71fbMQEfUCA1QVgQae6MfHQzjNFgPWnRJVBZnSYbuqQndhXDgsaeDwmF2YUm3HBEm9mE7ZsXySoky",
  "key27": "4ucFFfrgEB9WmN9jySS63gz3VBsHpsqMZgHSGh6bTdzhcq7KQ3RXUTb9qGrszaCwdReBD6E3Ljmzd2s1RjcYoQZ9",
  "key28": "3oN44KTu6thMs6gm2Vg59gMNEjSZDu3P2uRn7682VkQQtpUpzyw9ahopv9sJYUkNwfJjipnXjGguENsUMLiNHR85",
  "key29": "2j9ZtrrMSMfQpJ2P56gzG8BM6Zhxt83pSrd8naNTYutdRPNSPbn4bcJrU5LgiaaoMm6HTovXEJL6pWbBJ8V6kApP",
  "key30": "PhpP3PVpS4zxMQR4wsLFhqQgzyVXpGFZKQK2EhKWdbNAE3ZHyTxXTcoHC9cwQgjAWvR5Ho6MCBMFAeFJJXVVApZ"
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
