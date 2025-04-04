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
    "36XJLysATAvQXnTcXy7znLEcenNDaxQHTLm4ntKA3Apu5m8q3opfACmYZYD7HEMCRJUqAg28d58L9echmzKsdYRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FxYCBDQGsat5WdBrRo4cuX3fkrRyP6rnjh1FnYvV7juP8Fs7Vw3WWefqSV56h9DerUyocniXvUVLDLXNwS4XyuV",
  "key1": "fre158QeeF9vHCAUfATWZ98MXmjrj18WZoyYPX8pNpvo2oidyu1AJenSRphhwYkWXUS4HJLrEUwPpzQYHtgas4S",
  "key2": "4bvamVSDEawjhRvihELr7owynUkpoDso6gaJVLY3shbTUY4YNSocptPnpGLPhD6qLEEbwF24WfqBak1kSgAcarm7",
  "key3": "46GCbRp8nKN99kNQ5JuqVfPvNJGQFK3mL3PPQM3vDvZs44d8dmPWTmBnES4CG6oN329Ct8hsmbVx3HbLUQ2PGkL5",
  "key4": "4Axhzx2dLVEry6HAZ9P6FkrimzGZnmiMMpsQSAiqCg8N6jjRa3G9vT3GQdQyCQCLRaM388DpNdxnzkTZajXfEVbM",
  "key5": "5GQwg5xwgoL4Wq7xHe71FTzbszhYuXoaUo9iwVjCXJ24cJKXWEDohadsiETLDxAten5c6RGw9KqysZdw79KGHXw9",
  "key6": "2tWS9EAxha5gY22zLaSrE9swZAbxLodSRM95QGZkVijwaYMZdaUDrmsQJbDogHugJ7FBPvfpPi4hKUUKYuM5gTa1",
  "key7": "2KdDUw9dX9J5RBTwK6p365eu8wL3etuPp7oNZJvAeWKDhpDPVDqNfruvj3XEsBZbRcmrh3hZ2cFW8WnFSoKZhWxe",
  "key8": "53i5kTGKFh6tzyty87Ab79REpRbedN7SY6pAPFyuVbiEtLw84f8dj3N1ZJa4GNmKhhA3CsGbd493RovpUQaniySA",
  "key9": "4u9TLAmNFVzgenkZJUYfzxKg2Br9skDAxS8GEJytVCydLSc8ULt5CnbpSUH3CCBXbsyYhh2xFkGxMmHnsvUTS36F",
  "key10": "2Gxo7aDoESDEVNxiGUfFki87wJcaXzr9c7Sa7ccNDGSvcvyiXNHeVJKR1jNJSUjBB9HHoguGFFWXybkeY6MhiYje",
  "key11": "382kBeM89odqFT4vGmHZumjWNRgvUF1skamQGkxv8VDGhrHe25LLiccdNCtdCwoC9qvPwsNLgmd65dCar8BC6nkd",
  "key12": "3KQXR1VkbB4VgV8vT6Q8cPrhdprq8DsLY5CuEj5FEi4joQJYRADFePsCR7onCbd8vgzkMeG82s3sdqZC7jKvBD6",
  "key13": "58U2MeXQC6rpqF7ckYHFQMkCqg2ryBVZWDBXahS14yWDNAMDqZPtEh7jGeZ42XM4NNM49NMn6f9PUPwo3xPkqWKp",
  "key14": "2kJePaqBuXED5C2u4QVsh4i6uo5DKh3qNZETYvNsTrbv2uVPTxa57x71e5ruDpCXLoiZG4JbDF9vDerXSZ25Fbx2",
  "key15": "4UgAFhxAKGwVasoS55ozdxpoGTCzaoRCKpqz6k5qwVtdzfZK73WcMp2DTLbnByab2EgYSPAFoSRUsWhTtRVaJRoQ",
  "key16": "4BTZanBhUaKJ4T9S2M7ZZxhiXJnavr9KLxvCQEngdn9y2Amona7XGahzJz9jvMFb6YPwTpSfKAadQvLobxWCh46V",
  "key17": "jiByj4RfYRpkNrY6zvsxdrwDdQPH4vafFgxUYe37Zmv4DyCuPhE7QTcmNRzVti5ekHDrVD7expYo9ETWZ1hTGrb",
  "key18": "3BDp2jiYB7qp98qjzT9Fh3P1iyFwJ8VDpZDv4BG376ow9kCU7g8uxb7y9UX69BT5D7xaURufeWKVMXBpiR3oFvok",
  "key19": "45yS8Khyw8ymFdBugnXFpvMHyGRZ1iJgYcgUvrHrau5hSdaL2rS3miPnwQa6gFEvJUT58yPyfH75Lcbe5wMSLaSR",
  "key20": "6hmVfXGDe6PXX4xbLnrRfV8ZQyeoZDvz79D4n5it2Fq312s2HTx5yV9QfKyPSKq8kRLfXRkMwQx9H42cs4NPtvx",
  "key21": "534LS5eieJcuWtsBJC5uQkxDF8y1jUfegoEywTXGPqM2vPTotm1w9f9Ny8tXnSwhPaQf6a6ZUhoLPxGhVsApZyEs",
  "key22": "4pfeLNUPTaSdAXJermsqJWAJzT8egbaeYY3MrBfxUaPCVWjvxPohrPmdRXScsTtUyDM2tDdK2x31r9KEHrfqmJWa",
  "key23": "y7KBeP3saEvWg6eqPDKEMgsjHhLbKiA5vsCquA1MNFM69DBsJ511kLGak7S5LHbsKzaxxeLewAnthBPjaFWGRxa",
  "key24": "4NWMP214eDAUyH6wT8mgcHYHXRYCh6gSQo5x8je46HJiLELpJ7jvQ2y8Kq8ikxZ3qWeFgZsfT1XzyFLrP2Lg6os7",
  "key25": "5aJZSUWyfcGM2G2atsfHFUAXmVGoQxUsoxQAb59RnJa4E6s3btNZY1W47so9MQYAWiHVhCudZ4oQr2TatVEwA3XH",
  "key26": "5vb5ThDh9S3f3VjGcFjj4XE1KbMcSWgxWdyVKnrXq59mN6aJQgqfnYGqz9b7YUpt2WYwkHfNg1HA1VFM8dz1dk6Y",
  "key27": "5mimmCiMDDe3bBeak4rB9PiMDbV9Dcr4qL8eBKPYh75NEEV5jTp4xj7JS3fshPf8SCngf3TBQXhvyUp5jmmVYjXe",
  "key28": "f6iYqwjCsgoHGv7ixLV5XyGYHzPdBwZnEsBWVCiYSySb2NiX7eegVETNQYfZhrPpSJ4s9tZEo7Q8QK1v9Go7x61",
  "key29": "BvS2WS7XoWUar79pGAhduZi3hU1WvM3De3rstG3jT2iYhp6B7gPt14orhvRaQgFfFfvu6ddFNyTD9dP29e6kKSU",
  "key30": "39FcGCVEceSDhzTXNkQ93fzNnaHQw3b88Nd79nYFconobSFwToqD438pZ56Bdp8WhmcujBysyFiiQSM8JAwFGMUW",
  "key31": "4ETVAyY22BrvRETX3MdPMLAHnaoyAYS96LboTyDUxWXxdZutPrsVuY47j2Nh9tbXo3D9x2mnDxBEEQkXK5XaPnRE"
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
