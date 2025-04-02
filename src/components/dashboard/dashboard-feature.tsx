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
    "2jBnzpiFQ5d3gJYt9oxA3fSdKjod39EK3sdZxfUquYxHSDC4uu9WnXxsWADhhppcVF8hGNE5Zy6zeJUWhz9UkFSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q1TzRHZrmVJM8x2RQX6sXhy3AbsaPQKKPAGgz8y564MXD7pWTNPnhPX3szNxtafLpkUod18SdJQJtcvKxypLg9t",
  "key1": "5sNZG8XgmE7k9uQMwRa43uTLkuQuBkzX169bCQFNfgeuRjFwF1hAGJ6PbnPwW9hnNMhwR8NnRhMKLhCE5ixU4C2R",
  "key2": "bfv22rsDpf45Kpekda6TE3dWTRpMBRh143URaFaGSxhBLwc4QpAqgwPcybg9GbySckak9Q9qtFUKyC4zEbwn1ei",
  "key3": "5u1xanExB3DZB9v6A56LURRsrSq9iojq1eYSPUBykoFWpiFM6FtP4cRzijmuNhGeeVAAyT5iud16PKzC6e71MvgQ",
  "key4": "nE6aaHfyAz7yY31XmnKUtsqZ8S6LqeDshMCoiJWp8qfxchNpfkisPiBJyXZm5wf2RHC3CbqntfSi17yFbXt9H3z",
  "key5": "4dQb4FeCjLUuG7XEmqBxQtaQp2LsVbdD5tF6XPa3S27r8UpMMcBA75SYqNrAhVKZVRwMYGg7azgF3gyJfSAyduJe",
  "key6": "2bhpc8AGaXqJckydRYFzDep7c1ysNktMpMztRnF2QpAjvS75FUAnTqmCN8mbJwSYtFD7mX5jervsFxTvZzz3Hb9q",
  "key7": "CHPHSVYsf4N8ERirZpxBpnsw6x9m1XfCd7pF9XoRyxXEDVKTZ17y9tVqm93YKEfCQmvnfSTBNnZHfCGcD46f8e2",
  "key8": "3JHNfhTaD5ju5vwD12eL3vDnKZki9tNcfrB3ymvorYsG92cUA5FySVWY2dV8GeaYX6c3xwAspD1owFDktz8PMcUb",
  "key9": "2CRE5bBwXxcp1HCFbYanHX5gfWVVxPs2AJABMEsM58qX2iR3fdcwn548aMdWmdgUBcA7G3Nj3gKhdq1pEmQBoLyt",
  "key10": "43LoQzFd3PbaMif8zQt6kMDEELQa1fMSD4t4qimfguSdGyHnnsZy63gPjU3Kvxg15pYdC11TnRhPEKTpn3BWBsT8",
  "key11": "5obEPXdrq6BZ5xqESZBY6whhsz3Y4XtVkctPPKL6eLd1XDCWKohLwtyehDecodH59quxY5n4qwB4Mhn7CwAmMfmt",
  "key12": "4VvV2GxZhVNxCYTe59hA5DcicDnykfL9PTPSMtBBvhG7jAkQuT5uPJoTDrNtmmvASFJoGw1Wvsct6hoe4F9xfUXq",
  "key13": "4tLi926gNUQpG9qMLVcMKwxRAhgxXn9oSmcruHVeoB1ykWvyVTySCo6LYZS6mQNUhCH3A1YYSXoxziGdcbtiJ97q",
  "key14": "31rMovPK372QRCCMqs8aFBehZFSR9rb374FEvj8GKf8A5mF1Q4kRz1zPP7tnZUEpnLbKYx7qhaqee2yNeF1xTDa1",
  "key15": "4bGQ1yS3hpKddZejfh9RUadgx9cU5E1GtHMcUddGmHto1o96Z3G7bK3WhY7Htaatu8sfE7y2jDUgKtfRuZRrRfhi",
  "key16": "WMdK6UkEw9UtbPaGzzeV1C6whBMqsbLiXRFzHARGmiGt9jXTMnBd3BiGvT24wZrxQhv1u4v8LAeBvKswckRL97s",
  "key17": "4NQ9C3vDF78yQy1p5EzA5mnmn65UkEBtCyFuvNAYjqd7HBCG1E732SoZhR7b1NWMPjqLSyPLPLw5YNLxHEcBjBqV",
  "key18": "5T9453Tsa9TFnpa8wzTXoN4o49nVkwwRMqkSHCDGC5BFCcaHRgbzysKRVFTTtqtYnghPxjoFgWFQpvGWBjEcMueg",
  "key19": "4BKz63ApunrxwZuwMtgYVdCv8Ap5d8D1b65zAwARvL9KZsQm7hQc3iLEDiVSXbgtdHx3HPcCeic1jjQBx69SfPvr",
  "key20": "2MDjN9S1czNVny45cuB62nSFXJy4NUP6JwtZ2YQqMEj3r5dfgLTo7azTE2SDtfHYpKTVate38MMkrNsr8qZWfzQj",
  "key21": "57DsxhgpDXG841i3LXTXY2za4V68hQcrF5jaeqfsvTAhrKAJbnXyaoxAPwtzziUNHrW5K2gRtGbAQKi2e2uyyj3r",
  "key22": "CykLPnxxvbc9vvfPQyx2BHQhELqLguY3VRWqAf3MHWwvpskf5kmzjqqfZgzpHbWxnsA7U5x56x17MboVcAWSy8Z",
  "key23": "fVS89nEGcMEpkK53m7cwmpitugPBmYtsUveoVPpoTjz6FpeqLBEvhdTfRKjaKgcd5ZtpxEQRZxLLHA5outH9doE",
  "key24": "3ZHrKa5VR3z4inS6jcWbtbpzKK8hRdPA1cpBFkJFxtzQp2QKvR8eY259F2vnbb4RDtrVtv1pPMEfuXdzTojqV8XY",
  "key25": "jbRHQEtuugyyGrwuKm49B2E8Frf34KpDShhSA86BtYffTbTXeb2XKoehq2dtu59aRP7frkcjZpFxYSGp2fHDTV8",
  "key26": "4pEoJ8NoGfBhsz3ztDQ3bcQyUVGBpSPQmq41ZYV2eaAvaTc3tuTkevDCDiaSUPLZXJGV8n9uDn9GAxBEVBWuyJy2",
  "key27": "4Y5aPyDPrBHaPfiaBkAxfj4Yom238iRX85bx5yAzhMGghMe9Sg5RAz1sg3RmZPuWgwr1Cgm9hRHsggvycgYRWWn2",
  "key28": "VzR7rEh2P9NzWkNjgWNqWT1cPNTNsDWGY7DHMyx8fbLsc6SkLtwohCnbL22rkftLjcSSHRrmbi4CQASwyc63V9V",
  "key29": "4ZMHH5Wdhx1bSKfG3W69ZRigyrwXur5jpCwp6vd71NtTiP2yRDGRue9EkRZs1StdYctAAVZFVKbZxTiEeWufKrzH",
  "key30": "4mi42Gh5r8YPJvgxoNSwowiHzbQcphE3WWbgvDXHfLBznLmJUBEUpVrW49e2REHcx8aGp4MVe2685aAVSHSRkZae",
  "key31": "PjvysKtPxbMzXkf6yhNcLcVREuh5V2zCY6VeZpBvvSTVoKMkRyyYq22JvaxJvg7A62j4PFQdvwqnKUqDMzHTq7A",
  "key32": "4vSxEZ684NFdgwWzEsM6ss7kjfY27WKY5VcySov1QZ4PSjZ62QDp5YRNvURNPLLJAoUexPoq6L546oDHgb1wYeMc"
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
