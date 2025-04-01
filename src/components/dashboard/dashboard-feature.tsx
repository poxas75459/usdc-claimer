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
    "5SMnUS2CKkNNmoDoxZawb8GnSqjRKRAnDjYgkj8nK1yq2hsh7xN8Bum69ZLjFPBj5Eiayx7parRSW3MNE9n4kHop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qQ4EMnjqTbyF2jw434owcPT8a3Nq5oMxto5R9dFHkxK1vPoSkodW6ZH64d5oj7Rs4hNvzeuYR2nHNP3X3JPgnpk",
  "key1": "2JWecrkqPWYHEGw7Q6gx98jkwpppM6qip7FtwLYcs8xqGPsniVjDMiLJNgnSmw8FeoLPWjY4Cw7yWV3ZChFNayPR",
  "key2": "219Q4NVhPL3Kpk4fevNgmDz7oAQJN52y7eJzetTo34x7obUJ3KGmjnaCvUFp28wzT9EocnENfP51P7MbzgjBL1Az",
  "key3": "5HVhtuqZXBwaswL15uwBUW4BDbKmPbuusfYsrPunCVzX42pp8Jv7ojdfAYv7YAV5XqCzYwcALbKd4PuDaSiEYdpa",
  "key4": "56ZfcWwjpiEgoDViiFBBGWVHDwtUygMtiQgfMNAN8VrmGGMN8mMFg3RpELNBARHf5K4SKYdchk1ZDemwVTJUkzu9",
  "key5": "4oR7BUTgNzWsijuN4t2iyfSjJ65xSWxQDBtpRG3U1zYDBavuZb98b2X9sArqquMxMf397Kwuu8tyVPL89ztnEzyq",
  "key6": "2bnRDQNkU5Skq7sW2yCq57hLhTGBZ95a1eJUg2BtMz4zhvBagGJR21LBf2QTfs4PumZ5iJUpppqXG8wQ2qLEVMms",
  "key7": "3PFzQYkKtpVNvRyTmpJ39tV3dUUHZjUzp5QTF7MPSRCpV8RqtZRdHuSFfmyG6cYqS13A5G54vYGRkmhDzWUXto9B",
  "key8": "3gW31RKmMzdqZUH5SPNvAqSN1fqreKY1f7B1yMhsk67KrjDo2Ang5gvwULa4trCX6kfpJFX9cXxWSYeqFUCBVufd",
  "key9": "4Xp2tqQeBgvtxv2iSJEayDAh2CbhP8jsgpaTbSbS637LNNKUbWKG8uq4tXjiquVgcR3XWJctZCZRBzHs8KLSEMvA",
  "key10": "3sTtFzUeh2zXkVkorA6h36GVUxAQETCYs9c17wU5AXnF4rxnvYsxLuSiaRV8Cf2pshoSpMG171wboHKsAN94vR79",
  "key11": "4fJbLMpCZqcn8kgczCrmjQD9Q8jaCNopApViXG69byNHCcyAA6UQRRUuunyaTwDbewVwUpEWRgTKuysbTHynCskB",
  "key12": "2AkKX6TbCm5UsHY7JbVojVoE8bLqVeBDiTguSDqnJuK9vF3HtBHK2ptR3L37fj1ba2LA3FdcBfbrV3NDaukFw1vW",
  "key13": "5oQvAPJ96JbDbTqewcfJcMLNKL9EJjaM3YZzgQg8HvZ52dMo5UrvWEL9w3KxUEm7aZVTeHRbUxVRM9tTLgtQW7Bf",
  "key14": "4fg8FEbBPaUn5BuuZ57eV5PW56yqowph94P7xaC4Mq3ujDTj9bTELY3WWXdMH3K2E46nKYsARTFY3S5dwPMKqi67",
  "key15": "3qtQ3rNZ8WRenY1gW4WAwPiymtuJb9k589n7fN3EmU9Ymcnrom4jSN2nQAHXCKdgtU1yibKJC1JB8H47EzFAuKB9",
  "key16": "2xyCbgjgQ6K1WSxh6xD542DHojVdiTjXDVKRns6iHFeXCjn6hnednJtJV2xKZVDCt5CDbupoX8ZurMBA85i6i5hV",
  "key17": "3DYQLeAC7S7J5y6Y7xUTKfewsxosvwrUUgRYq3c1C5hYnjopp5p1CrDEttGirxDbYkttVcBVEz5WduawzdrqcgrX",
  "key18": "5GbtvijryYreYQRCpET4VEiCZHyBJpBpGPUvDfge2dagAa42gZSoKbNtuaptM37YjYrPZYwUcW3fdK7VgZkv6eLn",
  "key19": "xbKS6aqwSgbRWCbKej6MGDYd3WgsDdDGq63tgBKEJpPNdyVTPG75f8yr4ziApe2yUsZCk9tcgY42xyP7UAYXmzR",
  "key20": "3xDjVQnYwHebfX4x4UdEedQ4oQGCrXJm4Sr8FndnqYBvBN7RrUrwRcFe2AtuVp5PEVD4a9f5c9Spsp4B6b8fAbM1",
  "key21": "53oJ7txhTaBf83XfhJUpJTVnZ1VySicg8EKqYSJ9dzNNRogNDSCZu7y5Yp12tsL5qCDnifRMShMp2zfCvfj8Kt6d",
  "key22": "355i3hwRqkkVJZ1KVXeU7fMB6MHmXJomPC7MbGktm1fybPCSDTaTbYqpyfTKNknvjxiHRxknnhSC9GyR7iS6mGAh",
  "key23": "5HbX28jvmu9oiUSbomAiytkfW5BwiN2HSW5Big4EYT7KoC4Pfwh3FSUzsJok5DQ55YFGNaxJifCU79C2LgxtmWuN",
  "key24": "vVPWNY4iVf6g3NzSQomqnXBrbRAYYGQYYT2W573oTuPhpHd3hgnDLFMmZAjaeDf2bWLdQqgdRPFke6yCLLft7nq",
  "key25": "4WfSzc29WxqzA7WTaLsjvav92qByZDhTC731DqiwuaNKMEzs3VViAUsqambafjeQkHRmwniGmLNe8wfS7d36Sndd"
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
