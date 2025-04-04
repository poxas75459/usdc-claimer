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
    "2cjMWBWCdnBnzDpwKbFLoh3ERUiGc1qEm1MX2cx3wPvWBVNzskmDVW5NCsNn1j8Nqg95EUzUsm3kGQ1T9v1N3HBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TLMAcJtKo5GZgUdZLLFYaTPPWrMq9JTH7MnqxHxBHZvgAp329DZkvHsaVEaNu9Ug2bxJWigu35psTCq33stNHqG",
  "key1": "2VoaaqjzR7Xk3TcVWaKWNHmkyJB2TTehtxHo6jbXi7HauyTiciJHqRSPniCB6QWGJ7X9Ri3cFxoek4JgednyYaK7",
  "key2": "4gUfxXqHC4CHqQ3wXLCVpmX5JkfRjMvkNKV9Q8HHMLBLC4bnm8Yhna8J2o1B5KzBQktWBrv9qxais6jXcBzVQN1A",
  "key3": "27ZGfF4UmiyN5cbjnYfkaVBv1AjwsKSFfVSNAYUcb1WhJatFjWy688VvH7ZtKaMmVT7um4FKvDXjSWJfQdtBjDDj",
  "key4": "2PRHWXhx1VWnKmmqaVS94m3dNjoVqLdtKfwDBHBnsoXB4TuubvQwHGQz6HbVXxv6s7f4tpUucxCG8XXbHaCXS6mn",
  "key5": "3hvSiYz2GysnF1YMUwsC9xKPWs52cgXTtGRL1XXM2DRNJ2HbUwSqCZahGHPVnShXLe1W2GH2mqTxV9rSGp5zRaS2",
  "key6": "4VncQs2YgQczXC6crii6PLbZrSfRN1ZLYbkiHiqsjerXwQehj1zwax44yZ6mcjxpqr7MRyLCPLMuCuLm1k7Getfr",
  "key7": "39AVaJWL8VhfrX6ixV1aDUazERgeVezCRUUGcaNXC1vRPZ71k7kEUvRm4zwS9MsMBxVxoU7CCgN1r4Xca259P6Gz",
  "key8": "3moTRY9tiFQ3CZTwQaBs8BYvafdCHMkQvrJ1bvXH8XYsTTAwQstgf6AAUvjsF2KCg3rDNtpWMi1TPsHZu9bTucqo",
  "key9": "44Jf7HzST5RBpejYczfJ6NBhjd7VQZC6rdgz8e4KivBniuyx429hGyPZqhMUfcXHu7or9PSjvFzrZmsx1Ygnm4WN",
  "key10": "4q2GsYvXACZj4LQkDuZb2DJ927BLt6kCcNp63Zr2suw3Yf6VwHjM7RUbD4BPJ6E4YC2u8MXHyYQR5R2G3aMnhkZP",
  "key11": "2evELfqUyJtYRBsFt4gjr4VfBJgeeS8C8ZDG4AuCvQjUqSPxM4mQtCUv1rvsV1M4AU9mdzrPNknFTE9GgvrT5JWa",
  "key12": "31f6jwuYdjutSfJs6t3bvo9wM93SbTLys9rmaWHbshN5gxnmcwjsZ4KLyeZmbyLPPqYoXoju97ENqCxvd3gChM1z",
  "key13": "5j8RTXfYjX7gSF5HBXcf5uyDtLJamUaiSZrUT7SWTeNFAWQEM56kGhxdsvBM3v28uaQmzhccFXdHDp4aWj9dyHEw",
  "key14": "61Lpv43c3Rj6tSEfne3zSTsPFgCHfHqcXAUoac2tDfyvcKUWs1yoP94jJ6wKJQ7vPP5aNcrdBPmPqsAGqmHzuZcG",
  "key15": "5HEPLmGearLF2SB6NdBu57RrLLSJE7BtLocNcQaxu8VVKjQZFFNZ8npqiHprENGaT6KAzNfftFFzKoX5fjJKhtQi",
  "key16": "5UNLThxoQnR3Xs4f7KZV9QURefdUhXwSbGFf15Q5dnceFg7qYEe97r7B7hB7Pnnpg7Fe6F6NJQ43RyPkuGMajUBy",
  "key17": "5F3Bq8jixBhdD8JG657qXfnLBN1UuYN7bPKa8vDqGBKWXkPuR8EncsWUkdEdi3WrmPj9RRFhGsLUZVb3LYUkhUHh",
  "key18": "5cqhtLfVqtgoP7bmUN9rq6KHWUs5rSfWsvjsewmo2a5nu6nFYbLwVNraG2ZcrvFJJhZpuk2RCrRt31c7sGyZnT56",
  "key19": "ukWVAse8w7PX9m118qJakwKP3vqH3SXBBF3bLubpcWkmge29J7bXTbrM4Sr4iU2KEh2DVQqHYTPJEqnXHV3SBgN",
  "key20": "5B1JKCvDV1V5ZXp6NpVgrz2Z1Xj26vShaKryrwaYG7dMcdDbXSHkFGfDQXF9fSX6X6LgAwii7vZMcSPgYHCc28jr",
  "key21": "CS5mikzqt6gtsEMeykW5kf2KbGeYZGMSEv23jf71eN5fNEQo5coSkXyLE5QotmapzoFnnedSNAXbmb9DnPtxpnf",
  "key22": "37zYeiGktHNwaGYYWJUnGdCApUgweZK3GMLemdov7wqSXbZC5KSCyrDJsW4t6GeoWZyqmQWJH5frPsuVoz3SVdXV",
  "key23": "UzCmWX21U4iDMEPPbtEDJLBmcwL6yz3cBJAgsdW3SzP3bTG4FEGWQ65srVMJB7HtDiwucgaq3d2N2kd2dDfKvJ3",
  "key24": "3Dq2PibQ7Vxb6qPmhUg7J9EkfJszDdsTmF5gXy2XJvjb4bXt833GvEs18PxQrckFWxmW412rys6oY5cRxDRu3kMk",
  "key25": "2VQr79ey7mPPn1RQiuJU4J52QoUXAJLAyq4176ZSjUCbHMo21p91z2Yzca53NcACyyDk3bb5NZPq8Ydh73pHqSD"
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
