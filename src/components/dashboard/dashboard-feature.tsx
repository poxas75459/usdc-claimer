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
    "3cRA1oCMfKTSE89TZo2mKUVXRZwZTbET2DBgragni2pnezQ5k38Aiw32FsoCdEUSM3n77CfM7j8JsohSA2D3vBt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjTX8YT5zHuHtrAZhMN5ntWmxPCJC7jxdj1J8kAnr6wYQV5MHimNmXcYCCEHMmiteUzX42Z98VKpTCiKNTH7B7N",
  "key1": "qaE6v7eGQ9k58iw6UFqENo3K15APkMi6qEjGPVUMVE7TtFtykeW7XpTyCMZo6fYvxkWYr1AXS7cvy8QnVoxym9t",
  "key2": "4QAsM4DArpdtLiibZhj2bwADLcsauh1ZkzgFtbZQe42iTA3F3hCDqfXXiG1qLTzrVdYD3EfBPCTVwg3p1k15b1BY",
  "key3": "2eLKkkTuho7jxnrctZ2UdgkTY4n3UteFNizWa4X2SgJuCNhXBUXx2oDSiz5QeyrHX8W5iWSDvpxdrvoUgN9nNUfd",
  "key4": "rUnVtcQNXLGQqjMzhRYCtB9yLVSxS4dqtLBFkW1hAhPX7vzcusb6HHLoCn8Bz4M5ZMH83gbhfKyBjgcZxgcm17M",
  "key5": "LiYCx62Z4A7KaFSYCQWNX9aiL5HT993kKAEaiE5ujFAbmgtzwsFWNRZZGb4bNRHaTLHuo2jPNNbceAEh3RzbTZ2",
  "key6": "rjhfozX5S1FXx4Drz4atGgc9LYb3zVVQxWACAUvwkEE8d6pXVUofvY9PvBDREVnSLBrnqmVmswfnSN3iL5dKswy",
  "key7": "2fLcVRDUydt9DNy7g92ikC4drkfUmmEaMNswWyCcrpBSsbudBnAdNAfpT6PqGUFjXepQDYnhpytZ55zuUTXkoLRa",
  "key8": "4W5RWirMVbRBnM17kGjjeD3vUqT7TxibsZCR8NjpaXnVkCYUMuva3cgRtYCt9YcNiShuBGMxHmaEBufLY3i29wMv",
  "key9": "4F9LK864xjoQjvjxr8VD1xot6ug6KMbXZEJ6ckerFBWqgEUsUouhFCCNXjF3yYxu7L6LZfAqEkHoyEkNJg6fDu3a",
  "key10": "4cnqAsF4Fmnbf4y1gRvv7DNkz4mgKUGeKpMH3yPTXf8XKpAJX1rXWR8W3XkB8V5evanCxny7d2Wx5a4Cc9Zpbis2",
  "key11": "4Z79fsn2RokeXK3emoVZ8gSgJyJwQ6QkadKsfejBVxyGxdTpa9fLmyGhWzjF1YcBVVe9CyupyFH69CavqiJ6Rhpw",
  "key12": "4SANchLmEPBywDJ6s9qqyyHBTveqQ6sz4TRQAB6Gi4GwYhAdt8568pehPhdkERzYsAZaE3zpAaAQqpPduAoY4BcB",
  "key13": "3udd3WYPyXuA9gvLy3Uphd8vwVrerxcWJGEfmBUceBt6FFAFUuZgZW93Ytg9DCYdmTfiNgmByLnM1Bchedim6KFt",
  "key14": "56UAUPDw58jpXTtH8qCE3FUZar1xKoqWZNvmmjHQDLX8yvtp2Lo6AYXf9wuMJGk5vtSNdAX3ShYtTErqXicqiLuv",
  "key15": "2NNY9E2p1YZGiYz8vtY44WZC8VsG4im5zNUdrda481iiigwTKFq6aZEEatcxfc75Fv7eQnTRVc7sFq3PdCDEXjz2",
  "key16": "4DPVGw9aWiEFhBgxqyPw5igofbikzqdaptiYyEH7QmLaKgaC3fssjgna5MmAws4LPVW4CyoK6wZ51R8EVpXLZDiq",
  "key17": "3voUnKUMcjC5SuKvbhjY8g4Cwa5vGgCVexEAx6Ef2vdejmbLSeeAyazztg1XuPb73iP9TiS1fLgSsWZ6JAZDvM2n",
  "key18": "mNaTs3TPcmCpeQpTcT6GGu3ppys7tMxz32FyQZjgude9eTVUoczoT5aJZG7Q6m5dvVzDwf9zT97UJEnWJj7Kc7y",
  "key19": "5gT5MbjrFyEqG22Qy6mmi5BvitQ5qYoPs85Zvtob3itrBgDrjDFs2BDvW4pvJo7PM4ubeWpCbC461U19SE9STRD5",
  "key20": "2HvoPcvHxhzkrE43NHNdoEL9sXr7kHatvnp2hMcXFfD2D6id1BugrAiYmk3Ft95BBrJFRpZ4gZgRQ3xMwmGsX4ML",
  "key21": "5Upcd8EWRqQDVeA86jiahBEunD2uwwV5TnaiRYqxPMedeMmMazHzrZBKwq2Ss53SNYd1MbJw8RwyDMNKqh9CgMz8",
  "key22": "jvHZYUg5ob1NYhsTz6F3PtDgLvfvydUcHaUi1d9xLUBMkRYRNrNGadaeVXzixnCeKKrZ8K3LToq9NCZcH8x6mgq",
  "key23": "2U64363wdmWjfjtKAFbDnB8emjW62L7rPuozuLEj8XPPH2zhxa8L82rQSarS6JXoV142r8Syz3rwUh2BXuiDyTja",
  "key24": "4BVV4FeYdEpkairVwo2FCNxkKwDL3Acj7EHeSwguk2pcFtpRHBJs6jFZs1vgVEU9zJTYFEfasJGSFVM41gNxF5i4",
  "key25": "52bLnP9DM2xDnCpvExmzQKU1PPQZNdNB6YMHs2Q65GTtDXkJ4G2KXSkPrAv6fDDap4r2SQ1RPLrUh6uhi3Pb9hd1",
  "key26": "BizWcYknjx7FtA8uitHmKdEveHvMzrUNN41eMgyDeHBJPMcEogBtv3Go3yqaoFNQVUb3X2hmkdAuUEP5G5U7EZb",
  "key27": "yfY3Ksdri3agJDDVPf2aNw3evZZdsis8J1vxXNrCs8AyMEZNK82m1Yxud697mY1gxQYEVupN8hcyBdehMLMmwPh",
  "key28": "4qrqQaMkyU86D6xerw2g88fz6WKCYkp3iPXumYB8mqRfjyo1Dq8zN3PozMKQABXnPjrR32t6V8jdcSUhSJQbb8uw"
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
