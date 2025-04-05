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
    "3FAisc2i6bfPXu4HFSH7T89VKoTDfUT9RDe2vtdpRuivugWHEnqmQCEuoHo6e374Kkmi2En9vRRorPFTYHcqypfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkjPHU2JFb1NNg3WTU7UPewDUjB1Jy4k5vkiRkw62yz1ys3xdPgJR1CBFvR7644QU5QzhTkZFLfzTneB37V87eB",
  "key1": "2QEdhgCwi3pN64RArviiYTbbBuPP9VckyvnvNu9eSbBHHzpERJfXUaiD6LMsRoBfdp16dRhQvscXcz6SUuPaqghL",
  "key2": "4yP4mZjB2bhs3pE8jUUd7kPgC5py1CXjNsnoq5ESuNqbHwQJUSv3X77CzEFJqa9ZJTm1KBFPUTpodPdSvaMQR1hH",
  "key3": "3xUqGnsfxfDdrsr9o1baZ123t7VP9YWJ8thLEDnigvocsa51bSuQpYvL7Gcnu5UCUB5U9ZCHdBe2xs2SHo6MiJQx",
  "key4": "238M5rFpEU1KJpLnWG85BcmMDnjCaqYPkjF2Aej5fotNoxduRiQcfaDQdkwYW2JGeMKnzmTHSc5mBdJ5Enmkt7fG",
  "key5": "2BWUagBVB41gFCHeVj5hsamNM9thZrynXvTTxR4WMBELgBo4XMUSgZXUBwX3Aay5Puy3qMBTBXgENxdVpTMMJjCy",
  "key6": "5kQKvfCoD5iKPztmy5JmWfr5mCpJaUeVVFBYr2TwSLEDajnmHTnXrEtUw3YjywyEPix7Zo6BZgnZeoHtP7r9rJB1",
  "key7": "nfcn7xUzsmVZRbM24EGtrwHARcmDY2deXFoHQGt4sUEZeFT4oso7TJ7EpoEUaCza2xUt2xHgmDxwX1HtfdoZtxh",
  "key8": "EUmhuHjgW1X6UMCvMNooqf7rfC8rP4bEyuLShYySiFQEmasLeP6V3nr1dgwiixTjrQks6C6frLo8WHyjfYp6UuU",
  "key9": "64Pnbu7b9P136SQFP5cykucGoksfbG4ih2XebzFH3W63xF5QzxdagS17NPFcvP9msJiQS2fP6KL1jmDcJqdi43bi",
  "key10": "2b9H87a31xKNqvdHawPiz176sf6JrNtBM55orouk5N5TSXBbfhBtAS2RfjsL5UNF6F81XY5gvoMJTbcZwtUFi3Vu",
  "key11": "54mr7oDJsHGbkNLwZfVM425veWzAKthagYgfMGwpaDGqfsXVhgjCQbY6V1p93gLvSMC4f2eZgSjzRQgb8tRabBjE",
  "key12": "2d3WHm3gGwf6oeJWt7oxN5rera16yM4g5HmmsxKe29Bk1nd6afnT2ZiWQJLuadSXHCeTtd9i8h8aaQrCS1Vc6kWf",
  "key13": "3hphtzcd5F4aDn8k6TwM689Xx1WuCTkrsJAmQdFJZcZ6Nz7CBQrU4hdMmUXetQvVLqQBdFr5Ldk1fkSbPEvzXQzd",
  "key14": "2rS9WkNyPUtqtJxYQVt1MnsqNkfk9JXRJkjMQh4FiYvkabcUDefXoG5vKuxR4zVYZgt8Mmy8fAJze2fkW9h4V9DM",
  "key15": "5wmPJz7JVG7kAmTy94MQpBdxPorGyjdpW6QL9pmrvv6oHHiNtUEf4FsK93Df23kzcpbCW4aVpJHJ1zRTZAT2mwdk",
  "key16": "4ivEHWyUX43nFQ4Twi4sbm1qm2Ah6TLh4RGJbgoWHsvmxgwZbtJMzjQixm8FomWW97VQtNvV4GNj4FFSKkQVvz9B",
  "key17": "3MHPLYBAGFDXBxwPByVDmRgf1aGEU1WmePEsZjigwNQiNQMUaN3LyRSZejLzcy7yusqPWtXzcRtBvyp3G8GUDs6t",
  "key18": "2ncdoPDVqcynmBtgvEc2yKNFddphWJvtZuowJyb7XcUk1hZ3Lzk6jgTzbHYpkRxSuAMvBYGqXv6BukkD3eYbhDFy",
  "key19": "pmk5FpoEobnCwEsjypF6UHe5d9DEY5vMhUizjqCAvAMfGpkVyMzFQdwhqcQFPMzYRBPY5rqUurohek5xBtRL6ET",
  "key20": "3K28Fvso4kbs7TM6BeMAKzPdBZsJ51cv8mRDgmaYLk8n6mE54pnW1aD4B79oysTQZDTmgfLRkwAyuVDL8YksS3cA",
  "key21": "27JFTpMUtSDiRvwBhmoA7iDythx5M2gFDiEosbKggVGMtLb2wNQqXe5K7Mw2Pbx6Lm6cF9uQq1R39oWgkDNJCkBf",
  "key22": "62qATkvAhGqr8638WJLR2zSUMVFaFmP3DPBZ2ZetiCJrrnncSxBwN7wLC85Qcge8HQ2iF9KEW9wdoSpxCqEyJ7kG",
  "key23": "qsrBQK7fqgDC7uYFB9ozTPzMtHi8RTRSf1RKSSa1kah3LrgxWZwPmNNPHBQs8bkM2RvgeoF6yv7s9JgdThJnpmJ",
  "key24": "4MeSgTsWu84Y4tXVTzzkzHti2qCczvhqQiYGAthDo2fP917hFVbAR1HYxmbK5d1xyz9sajch2LgysKnAvh3FtArb",
  "key25": "55M9zL2Y4t9ogugv4D4mbY3jQ4gTRQbZMoVJJLRG3FS4X97pLfERe4ukUQQiGEvukFXFCjzELgCod123yw9RGRZB",
  "key26": "3KrETxuSxvGqCJdopC4nzCHxsR8kRQrtxW5o5nPXkHEwzwAp69xkzAibVTrndCq5eTPPqmLR8jjzH2L2mxvr8NNH"
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
