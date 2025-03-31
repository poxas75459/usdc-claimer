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
    "3W2BfQynPyQCHgeGX5oQCF6dJ5nb2J8XgqSAyn1UGf8Y65ot12feeMFgEqgoYNj1Xnud1hcuj9JcB1pTpebN4N7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B52tjPPMhk6UYYarkJrHtMkbTxA7B8HN88fZKgsw1MQdeJ3C54XFF2yVWxjkLxBgD2FLcpWc5FY6NGm77hx7qxW",
  "key1": "4tF2iiNxhZBLtoJY8LBpkR2bAAPqqd4LtpWRvjdL6vqXsm6G6CqTkFQrknQnfBSmgtVcKTXVX2PpFCvRw29MeJp5",
  "key2": "3vxeizgV2bLmuPYRBPvAVwAFbWC3oDP4jbvZ5yXiZ6RDgVh6BCFfkJda5o1VGMLDKi9RuFJ4tsY65EvGqnTxnnEY",
  "key3": "59Dz8fZo6W1VhgjDARb52k3W3dduNrKqRkAhAJB8uVq1YyPWqypwF5iUdorLk8gQG84pe5NtgFSAy1ruQFTxaKqu",
  "key4": "F1BiMR5qbvD9bHeFZvWh6AaAgCEHYtAvJCfriLZpzFaKMgcjSHih4m1fKwfukWLSdDkY5RngbXgsLZvPScPZhrW",
  "key5": "46cc4oiVPDuCq6y4ZNLhpDJZcuF4c3zS9kfixZqhtPkgUM9iaMih6PTLq2CJi4cJR7GdmBDm4Cei19PRBV8Qnsu5",
  "key6": "3Nu6q31vgRivJJcrA7t4HojTPsqRi3QVoV9icZwjqiAbXt2hbPp5m3mkkwyXqfWKf5bWnYECCZxwrjuCuB9SZ3nn",
  "key7": "a23WVpsYe3kWzXJNeZBC5W4PWQS3QFFS7ZGx66RDbH1xLXj3P5GYhP2vSV13pjL1UEMirkoQUqyn2CqAS6JPyiW",
  "key8": "3KekjnZkr8pX7j6Xr4297hWQYUzjSotkgR4GSLz1N8F9Y1MCzWiaBnXJQwmXoU74YC9hVZK2dgKUiWc89FtiVjVS",
  "key9": "5E68G6Y3r7S1VAqN6k5cBYt8kBTa48UM5nHg3iXhy6kvWxAKaKoAr3UXnLoedJG21wFcN2giXqDs1YHtYyMVLNEm",
  "key10": "4igGyNB5DGdTGZKycipTy6QC98ntqFojHY3kiLb3tRq5b2xqRnWwDiK74up9dXFXRnfTRCdoBZT8LxG3GqKnW2qS",
  "key11": "3LH7j2QfPJBt5uRbm1VthxsmYir8s5jmQMtpMzaGTfDrt6kvC9Pj2ZAi3ZF52AYf7s4vWVmKUAyE4PxQPVUAZjs5",
  "key12": "5p9cFsj78KWzSLuDUcFbdJmGFYmpjfFceGig7GR4kyZsAUr1p4GZU9mbZuXPDBZ6kA3TD1uZEpEKc5rV5D7L69SC",
  "key13": "2DkthsPoCcbBFS7i2wG5gCWzrScn9SvRjns3QWHmqTyfov9SQfjSxtLwJdgyN7LkVpBTN79zxRsGnS4v21sVTM4M",
  "key14": "3hf19KNcGFhxATtyj7PBnPbzQzDxFNJf7gyzov72axi5mcMRK7k2d2rQ4TXfQgLHQcM6hT2mR7x9ZtDxgEyATRUH",
  "key15": "48TuBq1KtcKeWMhd7vi42qBRJ3DUCQ2nWqeDFww31uQ6MbqEWyrL5GVsE2hmzAjHW9MpqaeKibAtyc4yNQAkQqdk",
  "key16": "2FwCuvwcTB34EHkBh9Lz1o8D3pGmjCW9PcZcAa6zx1a2MKS5ZQrZhCS2A5kRNsNKnBKrFHYK4L4ryyQ5VdDSYSaR",
  "key17": "61GmziVEb3dh6BPgKfcyWZVdtHkuPmXun7e4T7cU8MB9oaRBKjYJ7LUs7GxSdgFzcB4SFcD5yQ85Rx3z62VF1Fft",
  "key18": "5nbzya4tar24r8uDUUuAtJLDvg2xqLXYfV1EY9XSTW3t7hm7mtWKyTpK3f9yPa5hxBpDy8oBVC4RTeUrEPNjWQ8w",
  "key19": "5TuNvECRFAsKMt1ctMx9SuhYPKQiZuJAbKsYjYEuTy8qUAaXqTVW8vZQtLWdqd8vavuuC98ow82ZU2zjSDcKzdA9",
  "key20": "HiRovy5Rh8q6erZymV39QjGLCZPu79VGqnL3L66x8iYo6kTwLEo4p5YKyYjrBRVcPG6MyH4wvZRdUofqbSst1uk",
  "key21": "ZQdEXAegcbKjoh9V1BmM5bhztSBZAWGmEhrV1isLeSByQ4Mrnpv16jF8RMEt6YSd7TVcrXTSPFLfgZo37oiaGNV",
  "key22": "3NHispULHxpn7fRnvrqSE8WGVYe4bu2G7fyXNbWRZv3ecDMzAhNhbCnN27SLUEy2e8V4dcscX443ad72dqFhfr8C",
  "key23": "3yPpQhEYcAtbUvtcfK1rXDCmp7nsz23ke8sW67fopLxd9nrktRnv5S8DFZ5v8icy3AmcMFqJdPGzrwDsXU9To4rb",
  "key24": "31wfa6exgYkz8ASHWDNCy7WJXQQGPVBY9shPtW8yHTPoZZepb8zGMgZ2KGD8uQYS2tK5MfkMZ3s8BQ7BShwjcJPU",
  "key25": "2Vh23ZbGtLqQJKz9k7seog6jLPeGZsWjxZxv47jhTTief6ionVx3EEdjrPnyXJMtFfdAarmZpeDRcowzb5mXap8b"
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
