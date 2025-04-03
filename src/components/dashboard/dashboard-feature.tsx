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
    "3f6HiXbeen9yd1EQ8cBVaY3kVA5mWLc3E8iqzs5qRyupfaVLcvpp9oDEum1WcBiR3aK8rcBWv8rJrLSmZJJe5T8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mSWWxhLa7sVB9TrWnn9JJwmnKCtRUr5XiVDfnK51kSRnPq57peNDp8JyJSFgcwTuY5hctTtnizGCCpcCK3Rqsfw",
  "key1": "HJzHmcaC9UUaSkLgBEBSwejCzuCDFVUHxr68Q8Hnob2CAzYhLiLJQRra6QCdbPAMq1rT1VZXMYhk4cZndhFtxsd",
  "key2": "3CiGVrdrBXFh3gE8Vg5xvmovQBc5PHBGDKfcktqY2zmEboDr11rRt4WiMsM1HM8x5ACoFNveR56wRtKnzVpq5a2r",
  "key3": "2DJuFZjB97ahCUetQH7BJSnGabhtjhaSLtpNaGwBzZcDBHScamK8dFvtqP7t3Fr7W8spokto2nm4Rf4k1cd1xniR",
  "key4": "5skkQqtpU4HcBp7mDpwn78C9t2ENEkmkAZWRHax5k1ar4e7ndZkqcTM6DSi1qr386hARM99jbK91nVkns3FrQtf",
  "key5": "dSUQLT44CZjoS3pzZrVrygjfj5LKXoGWcywDRU4HhfYhEd92i5rfcs5Jhs5f8YyK3CYV45LPZtf8BiY7b8y8ZZC",
  "key6": "2ffeRjeCrvYmH7kGJxbuDknC2kmSUhnrqnVRJ1zh4M5A2oEzqJbDHJe3it64KehurvyxAw7MxM5iSgcp656HNQyJ",
  "key7": "tLWPkSxrVUdkTFgj14WxYkrL4fjfd5mnzXosbw7EUDTChCBePf81cuZ5SVAYBbamVp3fkdw1AnvFiJffqHvhGLp",
  "key8": "5QpTY3p1cAqqPUuGgV7f834bN2woL6FAorQFUquGAWDsgrQ4wLWV8Rzvov2eJ5BuaN7brJhXygLGPbNgHRx99rkq",
  "key9": "46s6HnoUXZHQrF6wpPbXfN42A5HpKGLq3Kc8EoQDqEYS62F1SZJkTxg941WvxJPR4vaXA11WUo6Vp6oQrUrhsg1k",
  "key10": "5V3YmaAzJJLZP2N7QxyMWme9W8uZ7erqeqtjFJa9JH6tsPqHCAmqN7twbQWSP5ooR43gNKEGymmmRGABK11vvYVJ",
  "key11": "4ricfodjXQmjRkZsUACE58vqo8fKkLcuY3m7BYVjR9zCwWrRXKpEKjh51fu33pAk9NU3itqTbRRFkUFyzmsGRyPk",
  "key12": "5VKfaf2wqCoBt3atqWmVxPyFy5YX3UBZfXPJox7TiBpR7nyzTxep2ALaAHFgQW3uo1DKST9sTkGZBGgBoGiKtqSS",
  "key13": "34oC5iRpHm5bTTcdKPpAH39Y1F3r979VRc4nSxTerFSgkyKFR6E1qxoEsJaakgfrgaALFeHQ13K6vLvbV8csvbwJ",
  "key14": "3EXmeY1x1GiiyeBxy8c3q1esG8ZGizyqfSe1vBN1sqWFtmBpnYWrA36gaKzgyjXEL9EdQmjLteWTzrhYVZLqJEip",
  "key15": "215bW6BoxVL1wjrNesnvt6BDHX7Z6Sc3JUoycokMPMZtWobQUeq2uFc1fiDpok9LhPgpaCLrn5faKfo3EintLqH7",
  "key16": "3M5FywrW4yQ7McK75RfYa9PcRuB2ibnBSny9165odqYn3XsryrxRYMTgkzMA38epdADNeBo1SYWmysmR4rZw41jj",
  "key17": "pF8yiCqm72hPbXH8LoMQJseX8a1bGzszb9G24LEWqCQ49Wqea1ikdC62BFs19UEfzUnzy44E9uL5n9CtRu9S2UP",
  "key18": "3ajLPcS4kZM3G2voGHYjHxBQ8uDcztWu2Ao7c3DmMKiF6JkCp2qdg1SYJK7ifmndvquHgrBZ5nV6EzhKo53fQ8Hb",
  "key19": "33VA41KYsBw5Q2j7QgpdksCrzfEQaXEdUhbDjFVG8xMmM21vArNdSNhgA6qKtQxZh1HHpwhavLxWmSgimBLTKLiH",
  "key20": "2HPhQVdUqYxTooG5bjy68yJovvmZeRNyExqQtXEu1ZToYG5USWNGUSDpqBYcoRfHA2n3mMmRMhBJnLbYnCR4Xrm9",
  "key21": "4xfZb96XjJqbaaxG4infHDNnCrzcDjihzFWUTNhfm2f4PSEyRdFVb3sfjB1hJvJ8bZtAYwtUFMMNxgMEBYU6spXF",
  "key22": "4wWpjWu5Jkkxsk9q7KnbWaTufei2vMqd6JgbmbSPYPvHz2iSkA2kH24r9TEQ87TsPC5ggJrdnY2KZeodEJ3q4Nk6",
  "key23": "3ZjXyjdC3ii3sD3CtGd5rGeUgzQYfcCzx6mv72V469NVy5nJLnLNFAkCWGPS7uWVnNdT8ncR1y2dhSE3VEQybCCZ",
  "key24": "3Xxk7X2TDNhB3Ywx1AF7V3x4ysG2Hv8gqE2zehuub1gBnEhwQAtAajBaqVZ4KwvXZrULZnySvpoeCcc911L7eK9b"
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
