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
    "4q3i5EDSv72gFT1uvtmoV64Td91kfXDNcuxWNhcCSHt2CvdZZyX7USU935WKFL9qFexSxHwrnFdKtBbj78W8EXrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ynWrL45fRNKhiUiZquersK2ruJfxciyqHL6vDfMr4MDtvPZdoh9F7fXTd7wUvBVDSPEoU48a1nvr64jMsgRbq1k",
  "key1": "3RrxUANPtgY1txtufMYvDbRHgifgiazEn5JoESxrrra8wHtsX3jrY1wdeS7STAjA9RW6gSKzPunV9pKcNEN6S77h",
  "key2": "2p9wPus84cotGGznD7qXs55FjdQEPxBQeRWcdSKVoCDH4bmAHo4Q91vjTThSfnCLLf5xKesnHYC4dcbNXcEBhiRt",
  "key3": "4KbHQGK2J9DBLvzEVUj7zGaWfakAMAfvAXanTLeyeRtLVcBT41Ny1cYLUskLDDFyMLTB49Et8bDXnifzSucwDwT7",
  "key4": "3Eds9ueFtr7KtoySNYyHoUD9cxztTpxhWSS69FssWBQm4hqvTDaZmRQLVJqs3qd6bXvuQEnCwHx4iH81eHLWTAkw",
  "key5": "riBxQ5skafD4WBN4M7jaQxtsdrfeKppyVokcBubhYqmzoPaPSJBXZEBRJPRWH8a4LENYs3zPj7gJCAPU35YjJkJ",
  "key6": "5SHu6AZsE1qtxNShMuvC8yFtR91bT18zW1yfjjmwtxWRTbeJqmRDPfcpVYuXqNu4yJ7fj4HoTTMhZtzshxTAiaLM",
  "key7": "394stsxdzRy4yR9D26MHP2uj2usuquuN7LAGcvmWzzvHHo7kyp2aof6PcNNpNCcKqkiHTp87becaAeJ9kE7519ua",
  "key8": "5dEMFgrDy5VHBLzHnfwCfEbrKSGEZ9QiZDZHraiNqibCGQEAhUgYo2RJeFEmMziFw9VnkXLDg5Smgpa1bP6AGPG",
  "key9": "26ckTpFPBcgaeeRGN6xyrWGGXf5QjQZR218YErKSDmVBGXkjqkTadfUxCTBKn6Bmg5jFX74ChzjcciQpV5PX7as7",
  "key10": "3RX6KCBFif7UgycdNtpwAL2nm9t3ECEL8oQAtiWMUK1SPiquMTvfoLPepsUH6TRAbro6SQSyT6t7LiXs9PEU8uCB",
  "key11": "26idjFEQjQAFq1B7qcugFuc8xwi3oS5pYAvd1HEHDHk7vS2GXhYYGMtBCo4c85jMj4dobxKnpwcsJe419oKL1HAw",
  "key12": "44wbm4ZHt9Jk9JUvusbucy5NCsNd99e5FGDyroyu7hpXFafX5JfWQovqtqwFCvYYdkvgsFSB6s9nJaNH1gJizdex",
  "key13": "5s361YsJwGP5XqC2rBaUhNXc1W7TQKv7pxxz7pxmZV8ArHYneVpZwUV4ANuT1e3a2gqU4MEEMLvhWt8hGXdkU5q9",
  "key14": "3kHqz9SkwquRHGjjc3s1vxuZaCjuQiwmyFCeUms5ShAZdbTw7uSzjpmPFhHDKhwxSbeXBkLPkGTjHZDT2iFypweN",
  "key15": "MWTMxspX9XZtYRenz9uaeuEZgpUG36KFmixUJCrXef5hNkP72WwxviGqVE5UvQZqhXStUPF2WdvoDZiNmGkF5ez",
  "key16": "5CQzEVg1tWpv16j9FeHmJjDtMEZjtiriFUQBEmwDspw5LaptFUjxzS2qkCovZpHjNFyWfFAJGDeVBSZg7piE8QUd",
  "key17": "4c5YpBjXSV5prcYBbF3bBDShw1kKy1nrJRwgFaadZbHcQwPjQGFiEaYW2m98cXzgbeSo8AGW26cFsPvu4XAHZhTX",
  "key18": "3z68D4UWV4Fvby2psz3kJU4s4ujmFSN4ELCjC5dkU3YzM6McxfWiWwMWkZsMPadAnPxa7Mz8dvyAKp2x6geKwqiA",
  "key19": "4WXB6mk8TLMxR6uXnGNQj4JDKGDeqeJ1ggvxs1egVerqAbsWxnJLTJYDa9nRn5g9m53cfrTQrUXHj3pxA1P8fSjM",
  "key20": "3gkVJgrT6VFfM9dxusNywYtCK9N1MBpAx5HngNjtgiXUpA5CmHjtwX3JU5Xg4oy4uKdFATVy6mrPFPERbXVAWeuA",
  "key21": "5GB4o1f6zNHSCJN57DqFz93gmES51L1ADXJeqhbewQ9cRR7MsPvfXr6t1sPNtSmcGbtQDWLyimEEFNi2A82UVifo",
  "key22": "4kiDULbaphcGvzkcrPC4unrbhJEyk9mYC5iStCbFLr6wCz7XNi1FfG13zKDrszZtVwxfXJmxiCzHePDka38y31gA",
  "key23": "3ZidiZkerFFp9GZiqU1bGWZYCmR281HUd1FbprNnd73W7rcKNFF1V5iKzUNyxps1swv1oxAMPqGZzu5KVVuNwMZK",
  "key24": "5ZjaG5hCnKtbcvNCrJHyTG4ANndAKY5oVrDiHPB2egB8o9ogGS3C2fi23os6jCunVMuAhDka1tCTJC84yZvCzs9f"
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
