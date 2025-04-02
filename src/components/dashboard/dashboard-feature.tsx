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
    "51LvK23kFy3BWhSpd4v63WNCKMCYX8iknd1V5VZAVoGXuEGv223GmsgNrAhJqDrofTS28k3z3cjEpqkedCyJgYjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "maXfnGCCDRhJfM4Z2wv8mWa6xcHWLHEH9tZZanBmMRqvXPNj7XX16DLyk83vFKvq7AVwsQC2XNEVt5qDwBjgYPN",
  "key1": "3GjqrDkpC9QA835LWsgAzAtqbkZqDqDEWveKunZev9d2VLdGkPjZ1wg5CGLLP6dFHaBdkxzAFPNuJjquA5dEN27S",
  "key2": "gUsYMGZ9WEvVqDvqcHRVsrrQsR4DMR1hbrXdHNS9Zd5LW5NPzZQYy7vibwMLYWWF4SGabz9s9HtEbNGE3ZkWPiB",
  "key3": "2NUooJQWVhxaK5dQQhkzrLp4G4DZrB1eZBYVcvVHDX1jC6CA4SGRVVvfWjHrVy5T1Vgs9ryhWKi6HoydrNJTRAGU",
  "key4": "5mEZT7AVitDZpE2A8yzAtHPgntV8kxt7KWptcJvcgVyueBK6RGRfGtTjNTxPaRM8CpXwRQ74jeHVuJLPYfXb5Epy",
  "key5": "4o5TrsaH9dxM7dYmF4CHKbTm9JtbXFayd2HUL5QyRWsjqVdupYzg9tAWV3E11fwNAPCiamBSx5noTwsZ9WXRsE87",
  "key6": "54WFi2GY91pAhg6Uj6iAcJtoLzNymq5WvCw6J5CX12oZkEMnmpHkRKEVwok7rPfEsA6cacF4mvbKPR8pGSPP3gNR",
  "key7": "4FSo98cH5ohrsK8TQ817qyJsCTWQHH4wCH9UPXZDk79zTPE4LhwCWCd7ZDJmeT4Q8Tnsww87uHZhqZ2RWAm239aT",
  "key8": "5B5b1uD7xdShRhzPsG828osaSPfjerhc4Eg5FPqeWXfnnEaKwafyCEDUnsy1rpupAvouPhpiPn7Y4jsb75UXT5Ro",
  "key9": "5EC8dhBqCXuM2f6FNDLqfZxm6dyf5zyZr6Xxuk9FdaX8BHzRH7dWAhJMhAQXRMtdKRNtiVbpMVojT7Z3ArJxoLnL",
  "key10": "123y5kcY9zU1chBpkyVSSfVkaxX2CmGSupdeaXwuLFaxHKzsxtNkvK9TaXtiXbJY53NqyoKkfgrWmHj5jb4t6keM",
  "key11": "GwSEM4tE2hFk2SGwipiCapiP14bmUcvuqrozgyk7osWZ5ZhjHjXFCiEfvUDr78fSNtwfG4RsNZGUMQhyCmeuSZ9",
  "key12": "2KxpyhvTK66YCCX3kSPoC5PtvPJSB5M79WZuCmyggCYGW8oweiSRkNnN2yzzkhSFqRiSNpxiwyJQtJA4ryDhSxVR",
  "key13": "5Z1mH5Q5KvZeDuy54hwYVpGgehYwJMNKs8ffYUWc6EHydgSXV1eQp7q1x5K7Jhe8TTLqGEee7jYmxSNP7Cdz52Qn",
  "key14": "39od7DLVxLdueoS2hb1ikJQ1FzrCppFh5pfBNbpeYr9fKAeVmwHWj3y3kCXx5jp9ZSc88XrndueEqx4BKUiCVz3K",
  "key15": "4kgrmmEbWA7GZnGiuaWR7CiqMjJ3x4CYrT4SVg5DwN41dVwCYuoAW4V3VGqExBUfV5SvxsPymYfbk3Drcf2rVKC2",
  "key16": "4KGJq2TbUqvLt5Qe7c8guhMivZmMijxMsw48z6J4hXDDcwa7VihSUQhKP2Sc117uJBnF8cJscq8SgjKATFPRsxP",
  "key17": "4jGfWbt68iiWwpUeNm4oNMPAvDrMqjfsaHSUgdVTyaNgtjVqXDD1v5ietwiPQLiNJ2Q4RXxA67r8nJ9EBDcxxJU5",
  "key18": "64dLLGuqmWRY7NovS3iCh6TifdYPnrypmSyYdLRpeSrwip89iU8CobQrKYkNMmiNsP1VM1KQQBb8GSTb1nQt9YW4",
  "key19": "354zcAtBivtk57XsdM58zkotzMewvc5cY7wi1JAvsBQmJxgoHtHpQEjnN71JYx8YGBqDRxLAMF9gd4eM8xzwQ3FT",
  "key20": "4KGB2bDad2nHHUTVt1ThjmnZLM6aoxMNTaHDGeVMp6qVsisJpct4yFT3mUKaLLiqALpLY56YnYcBkxk38iHJaJoq",
  "key21": "5sHPnpvMrzCAKskiUo67AzZRee9vvGAXn1heRJw2f3JTMWth5QJTYDX43YHfjFdryioixV38Moefd869ipsTvnGc",
  "key22": "2neNp9zroF2DEVYQWQ211BRHAW1sufQdeY8z3uBXNgpPmPz7TnmfKuPh8DqFf9wnvUw8X4nENNX4p3WT86MLDH1W",
  "key23": "bVK98imocFAzkp2ao25qoV3T1zUmuwMfGMTAZG5QLctfVfEyP4r4482BqrApkF7pMZboNLkB6BCUGHY2nkvVAju",
  "key24": "3c4u1o4bRuxLsBdaeXSe8g2S3SHcdGqWf3CAEqHGFth9gLQyo4Jnd3GUuUwzJJGATzKZDP8jGK6ovGZjEDZaEvYW"
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
