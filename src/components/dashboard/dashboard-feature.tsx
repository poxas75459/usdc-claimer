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
    "2reJn4Ra3gSDG4Av5qjhYaY4uAyTJnYqiC2Z9Dpn8BNj5HCo5M3pa77rXCKQQDfbBTzm323WPM7xT2inkhBn2Do7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CmKF189rtp8KPh7KnhjWif7eRx2JJUavz66n3qoT9ddUdXS5eyJiHeWDbXGf1kZDcGbSPD6yM5VsnZ2RymcQzpY",
  "key1": "nuu6anLhBoV2uuTpMNSQ8Lk5EHzFUvRqeYXQeaBwCQJeBW62A8XobMqmtsKnFUTJDWjLMTcyvinoyveHqG8KxDk",
  "key2": "4XH1ShhA8VmfEvHyW2tWxpztmd7EUFJ7GFrzEyMU19ejtJyvyAMwpQ3oEgUubS5Ybw8EaCHtyQETHwBMrXUewLNC",
  "key3": "3QNPdCGPYjoL45FUCeXQr5U93nTyQ2zh1ULhfxwnn2ufNgeumPZNPAFtfQ9xBujmtzG68soisFmLUJW2G4NWUWVA",
  "key4": "42ArMWue6oKGeA9YHDLXCsPRiCQgqvH3FpSiWfuita3z9DFosPu61jCMUQSzgbGRa5LBtQg6xXGCVHyJuFhwVT9Y",
  "key5": "2MUMRHeY8BUkhHAquz4vNiDbppZMnocBnMnFBDdzr8jSPddY2jv372qxD5oEMg8HEosHHroYqDfVUxDXqUntFC1v",
  "key6": "Q1Sc5wuXL3QiEEfiu8o8MBaAe8QRkg7vpUcfReEro8XuaX5zDcZub7tyE5riqBjME5bRVzXEa9y6gfK6GBTtmMr",
  "key7": "5G6v13CmagyEkaw8PBhxxcjiPhejDkjJKPqsxsTwvGmeBVRU2tYcTUvmbcQXUYPYbPNQEdGg3u71Y7WoaCi1mS8Z",
  "key8": "4CxxJQPvjPanHK4tPs8TrPq9EmJvtDQDwfqs5aQLfcvoHi7QBkL5rMD4Nfv7TdyNy87PhJy8HG94MeX63vmZPcU1",
  "key9": "m5zqVqmx3diKkN9hhPQXCtt1CctnDcFUH6bq5aneRtmgutRR732bbGhkQfL9CyHSPtQ4azhrE8orNQefqpMVbQE",
  "key10": "58EZrRgrny3wa5XaXyoLELPkoCWza1m6EkK69PdvHRTaSUwTR6WkjndhwVf3Nc43HpyGHTqF6QyTUcwmENZB1FUg",
  "key11": "5u7p9qB6mjZUGHLNxw54A2y1KARa1YBdiT281nv6DRJnQJRKSL4j23zQw6JM7ZTM8jpnqWUwACpnh2TK4ZuDuhmT",
  "key12": "WPNGvGgQ88mfC9QGjyttF758UrkU4kF1jx8teADr5o4QV5e781seHKaKV2QvfycAMneGWCqUixxXp9cAf7iuCYG",
  "key13": "525XhKaojMtT6z4CLtkPr2UzwLgFZAiV9TDtmP66jw57R1fhexMnrt3246dmHh66wSF75z87UZ6EzCGcwwZjEipW",
  "key14": "5EXqpc2u6Q6Bw5PwP5S549S5UvdS8B276oKoF1bLbaXUadFx12YBxHe67KCufHV7Z2aQbJQRYiNmEspbDHHm6yav",
  "key15": "5FXPVWGBrhpPV8RieFmUcDJc9o5sqxNd1Vn8ChRdm8XNWPRqyKr8RFHe2UEf33Mrv8NAzXvsQc4szAFir2jH3VUR",
  "key16": "5dHw2DeUMJJkURRS1NeRccM2Di5nJj7Kxw9faokXXgrTasMARYSYWYphHUuRw8ex1Jd1fmkvRVDqprGnRN2GSgGb",
  "key17": "65LvYYa9EQ7LSYVyyff6d7i9cfrdpLVzQyocJHL7SL8staM492fM5PCpgRejvJVBTtuWHsJcfpejeaXLGe1LxW3y",
  "key18": "4jnP3Ugtj9cu1zZ2rGHvpr9LvC8aMvc4Uhv5SXgyLbSbsr4rJmY2MWZCzy5dox6L17itZ5DFjQH3mQXojxtkXPMX",
  "key19": "bkvSC4TKaGqDgQUaxAgV117MvVNqCwZ8gVZK5tdNqyGdLRKc99b1WHXBSiNzdJxd6hesvsqJr6NxBrMSSNYABY3",
  "key20": "4svZXvRTo67znViMakSbHrXa8CX7Q313fqB8ekVEXvabfLKMh17KBSnfW87PAnPnC2bPvbiZWFJM4jtZrRpo2CFT",
  "key21": "3JR5b6dqVA434Av7B61ru8gbzVtqE9zFbhUGtpn4mVketZiTiriqDeYZ1DMmj7wh6FogvVpTK5VK2oYBmMQqzUYN",
  "key22": "2LcXPes5447umfzuWF2396VSotMzUrR9mdk1kRgdMSSd5LjH8QhBZ7JExPFajgcai13UJNEfJQaf13JubdozYHSb",
  "key23": "2SPzxvLjsQCVRDKtW3qoxqtVpdnsz36JLTR5Y3AV2s1rAVSBj978oy83tpVwTzPptUqD6Zw3gmtwzztie1xwYwQt",
  "key24": "2c8YyuZ38b25JcNPvefS1WcHYEW7W9Q22dhNbDaYm89n8abWdtxyGt3vdx5tWjdo6kE34Lh7FoDowZf6rPSfUQXb",
  "key25": "2AsdQVSfEerL8KtA4DTdXpwmpmHQd8ncBxYCuNsB9Ko2Dd1H1Ub6uZf3RxSgjMnPnRgj8Z1DxFu7DgykFdWgRBw",
  "key26": "3z4NXqbCFmDjqSyazPeCW5D5SohfVRCch28Y4DR2EDnRbtKYJpGinf1M6YGyNy3HfVfGY8XfByg6ZwfLtJpsK1NA",
  "key27": "5PY5HxVzPBuw5Wy3bbo8WYvUexmjSJWB1xSphRGYcWJStS3BZQhkS4uqijoRh17aUed5x3bnPUoRcpupxueycmLA",
  "key28": "4EsrzzvqryBnyvMnXNWUNU1gYtHfrb4KTHGZsj9oFSTkMn67MRpTSY8uvUVcEnXweArgsSfGmdhy6Kmo9x2Y5WDC"
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
