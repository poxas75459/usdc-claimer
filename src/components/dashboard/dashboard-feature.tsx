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
    "EPEFLj2NPLA684qnWmTTdx4y59iL7zwTUf7V3wS6B8pXb2LdzzY5oPPyQQFqwLqz3bv3GLN1YLzfDtJvMBGULv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eqHFVfUe49hmCdad8zgYFtaLwEPWPmsKP6o5VwHVgYcRB2pLQCEs2thJ1PLawtfXLjoTRiT1J3sV9cphZNn9Byt",
  "key1": "5APCVspNQDfw3h1G5dguS5ZD5qd8VXQG9GPucjXDxNwEnKoa89ir2w9xrwmFhjCD9iQDMwwtQoGthFWKjnGhg4py",
  "key2": "3XWoehtUfPTpcZ2bapoo2SXsq5XqCVQVfNCVHUBiF4ybMbcrmXibKUkaDXcPLcGoJGzfpcc1THFTt26c98KeFSU",
  "key3": "FggHcQeMveUrDJxnuGpfhFPNRqeXvGnZZSSGJkm9VzomhHMQqFZLFGdWHqbbYvvWyzUo2XvrQjwoPR8o76uJqHB",
  "key4": "61c3wJatCE3GwUkLKEJC2kmvEEyvokk4jsEijQepE9mNvfgZfurGWDXAKTG6XSjjBcwaapjQswpB7RfHHUhc1diN",
  "key5": "4Gm5YDT4AM5sGvwFuuisTfAmqmZTRbc6K8Bh2KNm79cWfsMoM8ixGoT2p5WjqrK7igyDhx2sTpk22kUygC64H3gc",
  "key6": "24Bv5b1tAkbQs4isUzQek4NLy8VM73XPmPAdGefn8PUt2fiwTuP4kJubzHgo7brcQwcNNuSHXwshiTJXhnyyCfbY",
  "key7": "2xExYg2RtDfN6ZHeQGnuZLSv7PcvjzXJDcPziChy5Jn6BJo68bybk2qHi2zvZ65qUWsi1hLuGUMAbaSazK6i5V62",
  "key8": "ZjWEusfnVG8KnarpBRk3rAuZLXwR5czZQCFLTcoojjvUpZhLuhiJg7iZUs3MjPPsMxoPaH3xXHuUJAhWAamAH5D",
  "key9": "29B8CFhFFDbpcD13j3igEoc4s2eLXEuds9opgzQeWEmmDsFSfbBbcXwYaTQ8XKAeq7oGV1Em5WhCwH5Jy3BhyZC5",
  "key10": "UWikfpDgJSc8KuzkBDWs8wUUjnKcc4i1nCGM6R9iYcY1z9Nn3HXTsa7HAiXzjhoG1UWcKbNdCcZQsMvZF6KWbjZ",
  "key11": "415DBsiV95sCTfFF87u4xrHW6ppZ6P4yb5rvGC8NiLzKLqsNq1Bp4amJuysgzbGyNs6LKe14QSTkiP3hGeLALNJi",
  "key12": "31NAZ4QL9823a1Tm2vYPCWGZ6HMXEj11XR6KmWVt8jy2ciNSa4YoVSoJoYv6Vdj5ntp9CLy8PSh5PBots6NiTynj",
  "key13": "3CcLqDgs2mJGNQGBgoVyJvVoyFEmeQrxsAyBwXcKXvpCqCP41ahX5r8j4cMokogMF4qjFQtvcwRNZDVfMsdivWov",
  "key14": "3724vGhw1dcZRVcMpeon4dEyjTAaUiR619bu6bVQJX5yrdkbDzGRKMtJ3DctJE2BmL8KiiktmtRCnZuxuhnus9yQ",
  "key15": "3qkMNs4X5fbc1VuYehYRxSsuov2YUZammkUQdCjdpNH19AdEe638kKZngyak6PcHAut34NdKka8L9h2huUwk2Luh",
  "key16": "5TmARwWuvrNjHezKueaFzV2eu2PeqywiTaU6yA27AWy4TWuJUgyeYxczkJ4mQyyMdxGTQiVrHAyuhvytFQEJiUVo",
  "key17": "kkHT27Qb7QqbXUE75PcxG4FMuFh9XdgrjghkLUqCvLGZTc1CD3eH65SQZLGZXMS5NmdMQrE4AGknhPJGnzB5ksT",
  "key18": "3PgNQFAXKSqkWXcG9WSUQ1EwQB56x7xgC9385zLfG19k3B9zsvKJL4LpPuJSRfhGgqLb9PGbPmi86QmsZiGZeabE",
  "key19": "4sUMNTCwUsq6n3im9gXPLeJ1decHJUHGS7GMJ1VXUdCvNpe5H2dhA7rSGbyi1MKEiQQrBsAXnF6DEkfueZLmaSFv",
  "key20": "3S2ZisYJz6djyeoL5VEy5nZcvceqDLAEJmFpfZZ4DRiW5vopEdkLXDUqgGJs2Fx59Vh5ecdj7BVnoxXtmpWJZDXG",
  "key21": "9625NCtYf7jhfyWt7evD9qrqT9KfG29N2NK1ekMg1XaYVrV7TvuZ53r5nTLhVd8N1tBXMGEecfXg6Yy252SV4KY",
  "key22": "2Hw9V2UmCvFLrycDKtA4JGKBy4KuY9GFC4UoTCpKSumPK3tyCQ9nWaP4YsGrzbHkvjc8UMDh4xATRLHfCQkwFjS1",
  "key23": "5xujrww29GaB16J9bx5S3kQst2DAqKDVg49Bj5QifVrTicNaFJemYVgoS3Z8b3pDUza24c6VWdomwGAcDBPaRG2D",
  "key24": "3umuHiTbSzQiyopX1z48gZNqPaSChbYVqCmBDd8dPXAcfgkipzbeYD5GsyX7gGnu1n1wQXZkkF8EqN8Kfhtvb29r",
  "key25": "4TMATupd89Nxzz25TNVDQx7DhXt75xpNrq8DNW7CU5rQBQWjbSaBuVeBKvyi3yZtW2XtDHQEzaciMdyh1veEuMg4",
  "key26": "4ZCdvx1Geyv9bFU1HekF7AhQvgVrj98QNHSNfEB81s5PUfvrrLUCiSBCiHGZo98KsUJhTXEHZBbhrHta1XwWACnM"
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
