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
    "2DGZQ2VCTxxvgXSBR8UqFL5Dq9VzsTsXs1QaPmTYY6Aodxhq6LZYHNRW4Et38YUrHng3Y43dKvZN6vf5JeB7XijP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ALZnAydiA7GNN8SzST37GAL74uLhZmKeVcTzTSUGBJTaj7Gf8TZCfo9uAABbLFWoy2pfQveaujzk1qu5zstZmeb",
  "key1": "BcuUV66sMEw4JQBhcukYVgrw82564QviNiWxRqoeiMh6NCMTAtSDZs2yybGQnx5GJkxPbK8EQ2yCHjs3n9pmiPB",
  "key2": "QJSCF573SEmJTXZUhEsVACw4sGnY6Umv96LcjgHfw6dZNZgFthdstfScj5ZC3SyCHkQjSLYYt6dSoGPJ7qtQZ9y",
  "key3": "4jgBMNrrb5YpkhHYR3aASw9h1EiV2ZmekraDNnU1pXEkamf8CpfxD9tftfNMfXA6Krs3jbkXxZQkRpVwfTVHuxJH",
  "key4": "3CLQvz6gfr86GtxshgBAGNQZex9pmvFthzqVB1nEharetsTnLarxJc1s73Gt7mRQ7XLQaXcfCh6XZRbqmeJRD3gH",
  "key5": "333Zt8R1AzzDYBMuhJeVXmqqa8Vfakz1AcnQkZE6eevnvLuf3W2yPWztNg5nYwSHKtS1Z3KYXj19GFx5ug5LXKgr",
  "key6": "2y6YfitcdoqC2SzEsn4eFCpUjjYGFWTbbDkyF8b2fjyG3tX5NXUzC9CsLbTP384ARYVGSBomZ1SnaCCmgJia39th",
  "key7": "2ikwfN5cR1FWPdkBwcpqEy2MesPtsfgptqCD1r957pwFT9xZqbTKz4tCPPLEGprAWSmqcbDrKzMbBhg54tM8KzGy",
  "key8": "2VBniH3RscobhhRyiVMaYS7hMASm9xWc4JxNG27MZTAE4Ak2TEg4ZLNswFFcMg9tQmEbMA5VjmTqm1eiuePQLpGf",
  "key9": "5jB5Dk2ipAvMKrhKEYwj1bQGe3B9Zr8KPNkxNy3PRwry5MT5jvzr6jH9CsxbViUdWB6Tjhcj8vy9KMzKRimGevh8",
  "key10": "57xX86vSoUrV5Xw8DWzni49b55Hy7L4ZZPz2QH6sT62Qg1mozW6A27LSDb3TfoFZuGEb5SMKUJFTyZPtDXXwBb6U",
  "key11": "5dF8cmybYtVq97Ggn7KBmqPMuxtuMJ577oDxNyFSQoyD1v5hXfrVdAQryMYjbDG36LNhCXxph3qpqCPMMXUtxs7o",
  "key12": "4DGWqJL5LypHUTorLdGbZorFRQrqquJqvzF4Wr7WeWLxUBYmKi2VGL4NcQo2iPrVSLX41qztcjWUexfWxCaoW8v9",
  "key13": "3Rx4knviWS2BCmqjdXCisrJyh6hdj7AuHEhKWt8fP3ekiFBJX6Cd2exkkLHQi1Nj4ucU4MTtT4fMVHrf4i5A6GcV",
  "key14": "2WKqzdo9szhCfpzmMHmwaS4ATAd6PdZWEAsk5oboWaEFZzstJChmBixGFm34xjnu1aFBTEUM23pWSX84Zr7a7yih",
  "key15": "5oEPmaeTJgaUhMQSx6y4GnKQs8Tv611mrPNGWAGd5jnhLTezfnrdbwbcRSku3xxYFyGpfhiFzF2Fsv9HcZqpzg3T",
  "key16": "2fYchXLnv2zTd4DNvQiFZoT9JEYWCao8upMcyb2MTm6fRVX7guZeTx4o6xUUHvGMLx9EX33toXwZR4EYPAzsATbp",
  "key17": "hkoZaWswC4VgaB9zTzJwfNJAerZabhhWTi6WAUx4NryqpWpL8ztw9G6ZhLEzAeWbgWfYvhUocmgzYUPGEAvU53h",
  "key18": "4NG8jFadMTLAU56jbGZndRnZpNhA1qo76DvwavAvizCvk8cAP2y44mFZNBBNqt8faNBJJTDLDTew6GSdyD16spab",
  "key19": "5TqJ4wG4wxqjy4Rv3v3SUmravLczcrLzST8VhFh2fvgo4WG2W54UigbtnKtCZRb1QJ5YTcNE2DqBAnHoKhyMRHPp",
  "key20": "5jmvsm5dGiau2HL7AB31kxNXCwJzTUD7Mo9C22EaAU85jpsLdqxjfJbZDrx3M64mgijCH1BQ3vi4wtk3ZutwN8Hb",
  "key21": "wsootgX4H7QhtNBk1E45sCaEE2NsPo3dwkqtBb58ryh1fnYHvVveb8fiBqWarQDYeTxb4d3CL7ExTVheomJ4TDj",
  "key22": "p88ZvkXhcwfifFocbcDZ9oG56aBk8yX2zoQKKKT7Ciwz5NHbpBn4vMxfxqRyTKMvgddD479h8PbVXhiwaQkRL59",
  "key23": "47e6X3MPcSjWPRyRVxzw5e8bePDsR7ku73ULBVPHd4vuDuJMLxTDuND3UbXYwWXxnJ5BCoyK7znnr3W2PDFYXGMS",
  "key24": "2F3sRieBuK3Xboh2bbcwdhiaWrx66CdkbNkkeDK4yg9aNKz1NmQCXDzs1D7nqzgYutFpbfpESmbrfdieejMHvegA"
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
