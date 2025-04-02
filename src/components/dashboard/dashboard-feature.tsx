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
    "22f5nQSKt49wP3Z1niwGMzP3Jsh4yCbAJ9pHamzoRABozKmj1B7KbYyDXCchPi7ztmerpqQEtMjnJJqw4erxwXt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQeVA12UpY5oyTPNTEBPn9DUBVNJDsGyrRVNoCQZ3pBtZCJBMdfJKJWZUxnGKNPS8cygSa9ehkfVhMdsjo1fu9q",
  "key1": "5EWMjkGh4kb5CAdDkF6ovWEZfdwDNk1nKryYXXuC7Ww8UJzTcdor8fRWYNGauyrkiJDXwX3mHTnYZ1JiBGEGUZf4",
  "key2": "3sEVKY5nsSsud9nFS2SGP1cjmniFzFenv9dEMU7Xaf7acknVAyKnJjLX8BfbkdcFVbYuXb3uyxYFX4ax9NPrCeVs",
  "key3": "2PKu5UVMeJNdpjQVDCFFGbq4Z1JJuoYTH8RKdrSfXL4ty3PQHYw5dtMExFhzFrMhDRZK5zhAW1KEX5taiM79hPwN",
  "key4": "5dZJdHZNLft3PWhCd3E8vMBgbfXdukKM9ZV6j96y2EZ6S5K713GvBNWnYqXBbo8CeXGXxscVqY7TL7mqcCEdS6Ke",
  "key5": "72XeXDFSFS1H7grJcMJMqUA1G6vQgWVVQBpmbHBGFhrgE36cExmqTWTwHYJYdTpCi47nFDPpGZerMRnn6mFxaz6",
  "key6": "5FNWUTqVMfm4PUuAd7fNQvXFWkjGBsXioyCAXU1oxVhTBUmGBK7UjZBKfXiLVihBDgHgXv3EPPoV12GzP2WUZXUh",
  "key7": "53qiryrRnGN9dPVNBnEL4MmYiVECj2GNYcviTjHy7n9nDnVZGZQEGsKk3fqqdoZAqZMMnEMqD6ddJT3WUnfxK69o",
  "key8": "28GuNHNKBnXr3hbFYJkXngHiBrW1npWA3sSJyfy1FVfmsekDbBN5w6WfmhscMPqGDzb6RYJjZjF5g5XB16FoKDbB",
  "key9": "2XzbEXGpziT1RYJJmJbqCFNVsatH4o8Y8Wxxib2Z8pqdgEm5QLH31y3Sm73fs6XWjBaqKHYuRE2gBFFqvkANiU2E",
  "key10": "cmbTuFLrXQL9UnR7J6xJa14ihEpgnFLUSBLNYyUtkJ41xSpDC5RohLYuMSQKwmHTm6t56P1Q6S2fkFiYqiHgBFJ",
  "key11": "2M34djzkttA4MsSEL7os8ZNtYUfi7rKNfwRxW3GFSkgZwzyo4fYM84PTLcUjZwmu9L2TsPSLcX69QjYYZ9vJMgV3",
  "key12": "433YSujA6H2p1FoK6bRBNcNjnyXLFdbdCQVoHCJ72kST518WFnqvBBu8u1xhULTGsy2x9hQY3AFUdWP8EC36ej1B",
  "key13": "25QVzETYYKbWHHF33WZ9guxTjcjMMBBANR1vdLK4tARA87sMX4k1CNzhYQz9iPpN2SLHbb5nMcsPTcVAmDKriygZ",
  "key14": "667f9MyobwwRqTQbZi7Zu7LrVAKszPevVjfcyn9W6gKFJaC6262qWB8ABSi4MaCEH5V3XCmhKJBG8Xwv8DDZ32L3",
  "key15": "3M7vTZ4gEkS4bewirjsc34hZEwRnPDvkoX7UsyfWjTmqZH1PqvTiBPNs9KFfWMidmWgQ64TFN4n8JonXtfPQkBZE",
  "key16": "5nXBdBt7y5pxFhRCBiQuE4uGeV7oM6WKjYj7tP6ZsZfpZv182cfj2H1ADi8pgw49RnnFGHoRW56WvVwoWRWHVTo1",
  "key17": "4sWV4sSw1ozRx5UUZksFYfr7VyTa6M8Uv8G4XggeKhcmNnSYt83u25FtSdT3Czee5tdQBMcCMGujhofNG3vHajR2",
  "key18": "3xLGCvdme1afTN1HiAM1AnUe5s4KHmNehHwyfLMVzooPwGQeHN3X1XEsa4AX3pNiHdo5q1pjPwzd4DtDvpnAn3th",
  "key19": "3vviMap914gQmEGLEGeqMiwGrkUuXtnFov9wpA2duLHaq97SVW1bUjKe6qj4yfvibMpZkW91xrpLB2LgcwmJuoMv",
  "key20": "4GRz5HdquF93aekoQAKUPpMt4F4QSHtYRbsXf34vswsSjgDcdYRKXbbSdbwVFQXkp6YAqvjzwCWED7gFU1wW9d7k",
  "key21": "3FeceAVgNpasmJ8PB4zR5PkBxYe92ViPcPVrLqcGcg5k2Be6ZBQ9mxGY6xbRSq68bjZUWwBkfvkSFjDKatoMqSjD",
  "key22": "5qVmTYosGBbQqW3BphL93hAGpMoeARkEfyqYnQ4iuJXuUU41y5Q4suUnkubUSq3yay3jKxYzLwnALtv9NYN34FZ4",
  "key23": "4QcwV1Hxr4Dozm9sV3PeWqwqeDe3yoVhKxC7FW8pm5NodEVEer8LLHcHQSuit9hZfsmbsJAYLDFhzaDEzhWWDE9x",
  "key24": "5MjNhV8Q8e8f2SrA9AAc9nXvFhx42hvvEsRHBFVztdCAVniWEQEtSmdsCvPvJMrUHXvKMSSA2QGcRh53vwHaoAGU"
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
