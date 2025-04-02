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
    "53ZAdEo9CTmsXfx4H7Y7XR1NDR7Jaq5HpSKCmcsuSq1DAXaa5r3ybhAqoMBdshuvD4yM6XeoEAHMsGuxGmCuXKgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57yjzH33FuBr7TxpKsz2kjvdzwAwSkJ5ex2nquMTmyUpWy2zsasRu5x7d4rqZYeETwHT1z8CMHmiNdmkZvbz845a",
  "key1": "58F2W5gmseM58feVS2x9hxo24WvfdwPGajE4odXdjYPZ4mKdNDixJBnDypqfmYQ4g7WBaXhrBG2ybs1ScqWKsMT",
  "key2": "kDWYTKhR3u7u5RwJ8DoAUHoxUEC555kCektyF7zNxXo3QnE66NvAhHrb8jjLh5vjRBBE2yoD6fajNiGZCZujmz2",
  "key3": "3gxZVh7xcmUqsqiVmd1H5Ar9XM6fLDKJeencvYJCNC3pk6mowf9Xa6BdXE4guTWEkMsVuEjsRpYzLQ5DEFLB1kHA",
  "key4": "4qPkq9UjsQAz2WftZcrCx5RerTmZVzaDhZrBQ7EJoezDC4VFsJABaPb2REDc2xv68U1PuvqRcrhTqhM5jeFHDnj5",
  "key5": "5sxEZz1kGmydLGQrwo7DJbWx2jqAQzkMrop3RC37QmmcDvENDBmfSBbrWFzsz5WQWy56vTUeQZAafBmptaTTmXMn",
  "key6": "tZS3oMQo9YnJuAZSLxTC4PoCKZ1muMrHGLNgaD6qCjnhwDpgRkh4x2Jcz2QQ2LDCBh8mtPfGPsMo8Kfmt1Vcq9u",
  "key7": "4DQcavjwj9tQP5qDKPvNmBhbbrFrw22dCAiV8BTmiyXnkuw9JyKQQP9G1XQY22yc4LA48TKGaJHQ7JqMDrYcc85w",
  "key8": "3n2Y44p6v8CoHzozRpSaptftDUNYDFBjw6n22FQqfEAabLRcS1o1x2jNGUvBHRiz8QXCcL2sW6emdLNq8c5EgrjF",
  "key9": "65d9x2FpbYqeWSV5Evi8zaHok2MmbFXU6mPM6hhYMyY97ewiVXBW8ey6FanELJC6vXqMsjMFSgh3EgGTGunyUuAY",
  "key10": "oJ1WKJxdm6Gxy7LfUtyqPVvwJM7XtUo2WyFu4X9Wcr4T4bFkgBo8iXhC31K5gvSqAcGKAGFLFN6p6iYhjxGEGh9",
  "key11": "2FRvpPoDSyXydXMMNfiHbVWTwe652WaDMcutYDXqhYK1TSsach6KHyuxdnThdaZaYfpK4SAcb1LZ8QSffJedhedc",
  "key12": "2dXSVjG5GXH4HLAKRBZF2x9FfzJdZo5fpSi5Y4CSR6QvnFphQnN7nZJ4xDgod2SemQjJsqWQAcoGWUw8AQm58P8r",
  "key13": "2EaQ9ixokEyGc5CZPFd9GtwnBRxsvJqpmpqBkrKZUzMn7efhspTW4rx2zAtm8ycVMFXb7od8d7omTFHBX9ur1TPo",
  "key14": "4RxaweEe7DZTM6pKNQbfaRxNWKL5yD3XM9V5erTGeDZdvLAjrsXXTEffrKaGgxE3r9fFX5BFEVssqMdGimUVAtAG",
  "key15": "4WzENdUYot8pBJhjzpMU7W3QGnk55X1dKXZfKvpTsB73kWGxdxe15RqF4SGjR326rAGML4WsreEGobBgqd5CAmCP",
  "key16": "5amFDVPSXRPWmHYfYkKxENKoyxbUmHSGBWhFejj24BuGjsRfcGwYb9BUaJetkCMz4syFCbTnGjGxnkrkoANgqnLR",
  "key17": "Dn9xXBh6GJwhgMDyPFBF4jD2f19g7cwk6X1QBJp6q4zAxgYoRttJfE45idiFWp7MWrTvsLDfewVmwgZyEYtfk5Z",
  "key18": "5jSFg4e4vYVm7dSNxGZDx4R6M5x4n27eUkA4yCebqjHsLSvPbq5N9Wn9AbPsNXx3fXDMsfj4b1yZQvCxzuMq4GsP",
  "key19": "5jQFzZXmTyycBNTAnp2XAT8so6cyfwaRgR9TMCLfiYiMo5ejQVDFH61X93dKLYS1fbdgdd8fMwbrjB5PYDapxRY7",
  "key20": "4mBHE7mJaEFaQybnNSo9dqXHp9o6mTd9ntGU8qDb5KCnx155j5WqkrWXXFPJpEPNsz1Ewv5WcveGD5PkXT2X9Yxc",
  "key21": "4sZojmeRNgN6CuAfnMum6DPUVP4u3NSW4Ee9L4FhHegWnv8ZH5LFtey1PRmYHhFcPepBnS5pUhTGgZ7kZVQubTyY",
  "key22": "5JNrUiqTdo39u4N6TCYpT5qrZazB9wQQYuKtYrwrsFayGsyLXU57UaamBbCip2GdkB2HrrJoffimGMyqVbnLz5Hq",
  "key23": "3RdKF22pwhd7WaMTK2suNZjqqZGFYwtyPTquHoP8mjfEjHnxes3zP4uxYMLFSXFnZ6B2wFfvJAEnXwtR2DMqinRh",
  "key24": "44AKsUqAXqBn9erXctyDLfN4zKHPvTRCCHLdQBbNV65Cohk3RirGKzsj26EWAx2pb4W7WU9QhRhsbbEyiFcaaQtd"
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
