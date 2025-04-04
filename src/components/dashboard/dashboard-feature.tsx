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
    "4bx3rcXQhEWj98fjo3beDaBYbPe7nJVs2ZSeZMXxzwE1UVohMohydRWs2tc5sU6guxzWjcfaki63i4rpx6Kjacnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMkggmTd54y2BcHX98vnrLipGk7L7N1VEcGMHpAGdHEcS3dasR63Wso7eddw6cpCUzUrwziX2wHoYrGeWijSxee",
  "key1": "66KhwpwPCtqszDEmNHRUQbZU67jvAHkLAtAaup9CPRrdp1H7KvSyyyPoS6Rmxc1BeePb3z5siXWfp5rmAtuwgUaf",
  "key2": "5Ke2UV17iX4Qe71JXWuivxa4eTcBr4WE66STeRQX7U6RffGjfTxUi81SfUiAbZ92aVMmEjF2DP3RkqPDZ7bYu3k2",
  "key3": "2mkwxW3U5QXz2UsdZcN5h6HwanjBK332iumBZeHusef3YPQYzo9vyZVoA9RprLioUHr5VZbvccP9dACdGhQZw68S",
  "key4": "2tUTi9LWedebzKK77pgVNgppo3La6kMf7cFJ7JypMDLH6NrviEUMZPCD4hhpq7yqxhAivkqokCJcqstV2DzXXrhw",
  "key5": "5B1uQCYzzYAg8D23NogG2SA48xvhMhSvF5vTg4FczuA84qnbct5ErHsZiuMLfEzukmKWXmbyRN7XTDJaw15T17q8",
  "key6": "3Eb7WoR2xSQB47JtHEYtdx4o6TAyuFDuVKuUT2J43Hw3XxebURFKWfd8GWa3zvjDMmtQMFFYbQjubSUcecVJwnRM",
  "key7": "235NvMyMsWQLjRkt7Kr6wJCmZNPYf7URbDvuJTGw84ACMjv3B1gQZGX2etQSpfxHzRADcRXhy5Uw9hDqKYpagZbb",
  "key8": "3reRrqsXLwrWuct98gW5pVBgZ5gijLmNrEx1JexK8CuaPzjTvBKK4Bjxow3juUbGjmYSJPPERJy23CpxyTrs8YP2",
  "key9": "FKEAFsDc9RQQfQnwxJtP9Wv1eXJVHZFM8EyHdru63C8KaVgarcfbnrWgKW7mPBeKjQSuyAa2UEUK7iuQkdDSTk6",
  "key10": "9qM2kFpgRh5RMvWxZCRahAhe8TJgwpwC9EfVkdy4cZUzy3dBLTQksTDGj7HXbuJdWjpCNDWsXKh2y58b3AbJ3Wu",
  "key11": "38XPh4zc3U4vRiQokm7shKpJKE3kCEpJWei84vuKyyUKfhD7TFMU5KPed3zAj9QVbteYm39V3dCuwCVzbf18gaQ2",
  "key12": "3AuJBthB9oL5tagVVhC4Y3zm3zPhSiaqQg331JoRNmrNQfF2eCn92DBzC2Fbs9E1WtdBuHogAgCHbABdDhwDYTV3",
  "key13": "4mRbxUSKMr6vG2wQX5RTY6ywjfE1Bi9cnGwMNYYmkGdyBy6zVNacC6yGtMLi8BgQZYvSpeofkuU9W4RHAgns3WZy",
  "key14": "EZwGyDLCDefW767DbZ6w541XpbmhgXbzWQYdDFTjKBZBe7UA6oFmo4FgPncB3JKBjGMDZXgA1zhBhtJPtB4fUHW",
  "key15": "25CN3cNvr7idS6nAfuXGx7U5VhaigiMpWrZFanKWWrbiQSVz1y5XWyc6ypRfUUiYMTtx1JPvNw1kDQJDGTgMEdpX",
  "key16": "3JniHpsXE2uBpyPQttGSejAa1xy6YRVgVCABnyj7TdHBQVUsGjKrpwNgWsZJkM92i8E75WEY1Gevp8GNBh5MUgSF",
  "key17": "5jGcCyAE493AVqpAGmZwBguCkpPJXc13qrbGGjkyfx1U7bn6TKvm1CK4gHxbdbq4L3NvFZxV3bN2P6c1kuYDygC8",
  "key18": "4HTz5HuRVBjAMdMQgTgPNbQpypjfoAHwmfTcYoJQfPswrYR6ax6HcqrjGxgwkjt1J11VZ7oLmnBmLtSyR6kCFtsf",
  "key19": "6FD1BxMuLNHhXBRZCN5tESrBdLyp64jVkcHq3UygF3Kkca5NJoDfrnPX5VJeNp6TYtzEPo3WqTvwqgcj9y4rA6G",
  "key20": "oHeXUzjTCLT9QAgstXWwF9F91PHqdd4GBkLpmc5nPxGLctqowo2A5VmsMkXJX3G5eXQqnEjtfudAafhGrC1Ey86",
  "key21": "2RcrCjQKv8ik4XM7c1LMeAVKxXe2zwtzZrTZsnUuukHmEdcyNBxaxmG37xu6vLopvVvo2mdLmmDsifdDKqtFo8uC",
  "key22": "nX6HNeqxwFZJsHQW4NjDS46MdcYYy55sFJvuqPXAS4gP2atT4tCzMekieY9yy61ArrS6oEPJ9zmznfr5fYUPiPb",
  "key23": "3GcqxHwUxrCkyPYneGB14QFr787HBobDQwr8TNDnsQ5Qso8e6dZjqyaWchPeSr9FXnhiurY4D13UeVgrmhaCZyVm",
  "key24": "4xEYYziVY2DDCBU76DeiY2cpq2dqBUXTUVyMCP8sE9eKJGq9LngZwjvFn1Nmd4BDToL9tMwNtE4p3CJa628atQQ3"
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
