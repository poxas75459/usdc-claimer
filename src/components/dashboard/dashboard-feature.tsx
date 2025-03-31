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
    "4Zp3Ycxrnst7Wj21YL8Yd23vegLmkMuWkDauwSD3hwP3sFjomy78NVHwEtBgSVPNMRh66nfaCdK8dHYti59feCSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ozeacvGV352CkiQUC1nKhrsrcxE4bW49Trgz6F3SNrvK6eSxjmV7xyLfs63BeDbVFbCqoumNCyfW3Po3s9PV86P",
  "key1": "3nqkQxWNfSHw6xTNEbQ15V1Y7CF4qaTw87NTys6yp45ckysUxspitvWf4aDGsNV3rwu9o8hvYusFpcZUeBQwT33z",
  "key2": "4tcY1td392rxozg3JC6skv8EL5ybT8UmjtEPCSM2wLhUswy37j2J2obZC1Net8WixrWK5KbidehcL5nSdG2yC8YX",
  "key3": "tfwkpAM9WECHBdz3uMbBRb6gyKMnfCvMa3kukpJGyyWobGMCrqH46Ji4yAMUSngWWTAX14Vy4xCWJf41BQ4f3qb",
  "key4": "8HoKkxxsfG5QDNsrKrdcT5Row4GuJAZH9Qxsj53L9rrK711BiDHgsuTHJPkTSfd6DUwBWm6aFEx8EzEcbRqQhZB",
  "key5": "ZnH4p2bMfjj8EWci264jJaGFxPpyYxBPLgSAacvW5jzY8ACfYZURhdgyr7Pvvx3JFvaaristUfmJTsCqttbsJ7U",
  "key6": "48q65WZBKd6tqx2QLAHByWNFHCoibXU56nP8wpbzqzr8mDLn7N9WRSKVqENYtXU16bTwU2HnN1ASq6nWtcyyjQN",
  "key7": "p4iCUXWDTAbwKKPeR44Y769kwWTzREmtjRReYWjACAMdDvDZDvxAWwYrBMruo6WxCa6AXgKoqGwbEA9HufW7WBj",
  "key8": "5YhHzKb2MheoM3NfiKdU4HuMLKbrPXFcaf6eVF82AFMqcwMEvbYQDd3UXeh86jyYeWCd7VPH4SPEPStQAxJbEkns",
  "key9": "2suVPBhqsuf8X5Ur9JNSd89KCXVKyHZghdLAJbtXotECjgNZ6NKfxBmSxieSN1d5MJrAsKrsp3vMn139U7YfVfAK",
  "key10": "2pZmg9yekir6gcnjQsG7DcZWyhZxmrnJXZ8YH4AxUWnLvw3AFGHhLujz8zNzdsHyMGab2C6riozCGNdavgcR16f",
  "key11": "4jTUV4JKMFnCRaTY1KojGWd3bUyLqmJQPQSoY7dwHTCLSWdBRW7LV1GVhmsUv3bGSMzJKvgFQj2aoQtLApHoysVE",
  "key12": "aW49iopmPCupMPz9jq5g14Gi6U8TjtgWcz711ah6nBUKgbUeb5rYDQbg4kjD4Gdgo21xW5eGkiR6h9fwVZpVbGs",
  "key13": "JC33sRJ9y2qXkh8MoarvmrmjSivt3gq75RXgw1tctngQRRgex5CmRxqUHio7zF41X9oSEtGUJTeqbFD6FAkPvtt",
  "key14": "4XseLoxr4Vr6orYN5EucDDzn6sJQVdjxFJRRTXBv74C2sJCYS8xo6Q3yQcYHzftzv5ayMEUcGGqTrAtWotR2oa8",
  "key15": "3KiZpfM4ygtshFs56uxvTv1JenuqeThNyyTcajb32muJJLoHQzgyYYprCfiPYjfRi63QgyM6pGyVg6MCUZSg1Ex1",
  "key16": "2vXKmYxVw5Tajm9ZSRCEQq7fTP5d7R9Q7mZ87nqqEaMfTEZRTerZ4VcJ7eyq4NDAhRJtFjzQKNPcT1nFDEgpDySd",
  "key17": "3g9iZzJttoUkCkKMM2pk4Un4ytHhsunSGYBVUuF44io8GEvQ6aBFj8W4jfwLMdN1SqLY3YGWjYABB1SSPW8xfKSn",
  "key18": "2NUiPLJfDMLKkUS2acCt4xeX1Z95PeVjqUEzX4xhUgMVB3tERZQnzB1JihVEGiYncSaT9NpeGqQztWyHsG6WrB9i",
  "key19": "57PTn8zMQwUoRyU4WeuPZ615u91Mcz9VKhTa3P6VTCsEGS8j13pXB6B3YarUwCMXKBwhNLgd8bL1QbvDCrab6m2D",
  "key20": "4r6FwhmnuUTCTPvToRLXEbsrWhqeS942FrQzbN8WndjcM5DmNfEgxyVtxTqy9onNbnkxAoVaqCuTSrJ9rYHLFq1T",
  "key21": "meghkN9LqsYjiNY7oQYJsnUxQMvsigW7LLCJ7FY9jWFbY4kSyFxBvoNESSHW1RP5gL1uodKzmNccZcA9HbbH68U",
  "key22": "3bUaBL23RxvHoaidztbc8V5Raj2VjYgG5HNtHAPwMM5iwb7tAsuFQiBXvoobfh8vrGPFk5TkBMjd6bwTtDxxV8bz",
  "key23": "wdnjcwSb7JWer6nuJKmZxXM9JjoN7CcbJBysTcK5MrJA1VqmnoNnKejksocMJEVG2ZiEgeovyhnbNB1TCk9myLN",
  "key24": "ZHAJr8EMDQNPn35HpFb1EjBo6nSuNG3JWqA2A62S5EuoDbwbmHZUskLhMQ7RwropZssxRhQ7zvVmcoKZcGR7rYq",
  "key25": "gq6buVS2frgg2b9YfzNvxQ1mfnePx6RToB7F26vFGvCLzQdeUUXiAGErvmfR1m7Rs2zwkc784VXbLLwGh9RcA9d"
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
