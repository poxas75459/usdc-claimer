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
    "RTWGavuzh49U7u1PUcqm4cmHcpELvf63kWFRGq4WanfwVjRRQ5AytjgtRxpTYwnFhAxYKU8kJLvXcPP4rAkgbV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vbhEYAuk2SdJxPPSopKzPgHoz5sooHv89qMcUbACE8HsyPXXBudgBeJGGt2zdKxBiqWdm7oyVgaFfG93WEYdY58",
  "key1": "3A62i253EipG1JnUWGPNVmQ5jdAJgsD5gQHVaELt3CHM4DXfwxVpXDCbonoY2sxujKyKZEZkZhihnuH86jGXa5fS",
  "key2": "5AnUMoQA7aEsg29GMfuFAfrv2G2v4HuqMxj6SrGNq3L8uV1WV63PTsymXrFXZH9fhXBRK5KdBemksW7YAnnK8r4F",
  "key3": "KPb8fHchXTmJamqomrrB4PXaw6LnpNbGUfNmoV3FPzvDKLFMgVqy254LDeQNyUaWjjbDx9Gb8fBC3Zs8GqjAKKa",
  "key4": "5gZ3K4ji3Z68vWnRcs2p76L2nPQJHxYZLEksZL2ALmuwN3ifiHQFw9fRZzFdEKjRfjtnM3QMsFvLEfV5AvGoFcW5",
  "key5": "41MMDL5Z1vzEdUWB5yYXMq4Pkr5e3mKJXXCZfWKLYVbrzwPSsVCT6crLsBNDo8MAMomS98mhd4EMVvbGKUZvcwr4",
  "key6": "2xhEK6WZs1WHpCWkE2hn4W4UBMq3do3KwG6dJKupg6jVS7eYDVZWhKUDSVnk9z5HxDYmXXiuKPPmxjGiRErvW8x6",
  "key7": "KXaSXDp2YrJJxyyXce1HCkoTuQz9QjNyGvv8pvJsZsvRNdNx26UhxHkZUQyNPhtzFy3gHGZcci2on1XF4LJFHB5",
  "key8": "2TFkAjJ9aMzr5nKz3hYsDnSwzgBpPXzTXFPkHn6rND3W9JPHb4YfrMFZMj1zp8UBw7i619B45bmXARa4MGmvJ2kj",
  "key9": "4JmC9vx4Dfr7VR8TZnDoCVuWmRaBrfwp8eAY2ZBW1Lx9F29SQ35ie9BkonzFbZRZL7imq5EgRGVejttVdYzcDJNq",
  "key10": "4QvTuhPpifbXgLLMtBLALXF16UwCc7xkCPoaaX4WrrMUGjsdpaQXn6b9TxgBzkuNZoXYeUzHkcmxoBiNtgJPnc1d",
  "key11": "2TpAnyexPSurrazTTHWFJ39EnARQM2MTiFNVQgC7dMiw1fxvWNQLUYvo8WPfSE1sGq6r6h5eQuaAJNBhyH15TQL7",
  "key12": "2E8iCpujYLdEYhKcbeht9SMWy9ucx9x72WNSxWYPTnFWjBUDv6v8SSCp6NzS3SAz2eSJ3ui91fC5iyZSZ96xwiCW",
  "key13": "4nWAA8ko6gmakE9LjDgPsmxFBtW5ZhPeqPBRSnFwU6XsQu7yRBLJs32nhEybSvXcmU8DBEkCrqVZzb9d8bpZEao8",
  "key14": "3yoqT23zjc6Qa1xTaCAdFoQK4aJDmKRY9b61PB4PzwNeTfE6xH2zRW47xLHM67pQ16cDqPT7higGekpsM9uKtdez",
  "key15": "571nLTgTFoMVLREjXWpc9XPEXeVnuvgmNiWpkDPLq93duU5qr9aPx63jU9sZvc3qDN6i9v6S3REcoUENoGcng8Pn",
  "key16": "2MvzeuP9gYHyV2h7g4NT7AUQSQpSVhLEtV2vonabLGKwCuk1CiXHKgf1SemL242fre3sVT62sbSbr63cuCckqcLj",
  "key17": "2epLMnjxZGNEMpfgDTahhpvDHmbymkqoSnQ3sPCZzR1tkH4smcgEpTcvWv5TsAojuFJdD7qJNsSjWnyBF9492sp4",
  "key18": "hiA12iD7qUJ834jJRTZD9s7NtSAU9LuM8h6udp29eEv3AbQw2hVeJNksWSeUJyrJNxCS7rhLNMkzfajHSAUtKNg",
  "key19": "3Ge5tp8Nz2US1hd3yZkmpHGFvwZ1EKz1tnrLXjAHQJcj9goSmYrMJwhAiUyy11DtBY5b82gMHUXotiAHNDPE3SBj",
  "key20": "267yyLXAkSkAe2VpGc4ZKtzd4jr4EbPWTEqQNoWP2cut8UCgPNEmtAwGPf3GCNsrYks2F8eRLZRmtsHXRaKJaXNc",
  "key21": "4mkQ6zBUBwAhEyywuVHB8buWh93zWhvRDYGSUWjgMeVogGJp3VuNkZ8wKUAjVwKvcfgYn3ZoyxS7ZcXrwfwWHio5",
  "key22": "3PEFsU3Fyvq4A7ryM7FCpSZoYdNHFGC9oDf3oF4CNwmHEHJnZ9bBmbELcEfY1g1MPxzLupCTZSTP7sbVgXmVVLzP",
  "key23": "4ko9oiy1Xy6otudNUaaXfkExfuDS2BPnZq2b1QjdLkHWcVYzcDPr18Zhvr8gBaQziQJ4WxmqUUUhRhdxFS95nQKR",
  "key24": "4uCnRvBpDp6Ty5gLrgKnYRs5mRYm2YaPn9jX91S16rZB5mDzKJGA6fxoZqcw6qTWEyA2pkggWqc2rDQb1yutduzd",
  "key25": "5p9YnBpVsC5iDN8FFCK6QQXWYqPnUTjejoyUBbZqHaqF698qNS9xLCTcD5SXEQs25i5xkEQChzswb6zxWCqk8Tz7",
  "key26": "2AtvgCgP4Ac5dDBzRGHgbf68TkU2sSxxe2n1oEVSkxf59oxVuHaA26R1dQvWWWAjHmkXy6LBs3Aa8SeCot8W9gt3",
  "key27": "62fpJJd8TPYjBAEaBCiZrENQ8TwSGEux9nTRPa7wr4uMj5nTo7SkMV2owkyhAxGEWUkw3UgH12hFiuzTtszgaLcX",
  "key28": "2PkDogQFx4LF8djj3TmoMj3b1jDKyZCqxfJ6tXsnZxHKZFzimFD4U3kdgGnW1T6DEUJ87NjfHFue8roV3Qo6Sdop"
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
