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
    "2NpVieA1VVvFDdhRA3fKCn6ohP3wUMr8H5b4YE6NqzgGAHMEbQPUFwSDdj5Sa5PLUc1jEDxvZ7L1c5NtEmNx5hME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DMiSh6t9VVjJz1Z8UjexYbx19pNP7rPypUx7B8rz7HJi4Dn2rdn93MpfkR8bP6ezg1k1iDVSw1mMA8udembXwje",
  "key1": "54GSNBf4vkTeHFbRP4JAcS4hyLbMwS8Zkhcuttp8kcgcNfxDmByfwusQxb19AeKdrXNNRX9msCF7w4psBvFvrw6P",
  "key2": "o3TdSzocG8ue3Hbyj8wK8zpttUgZUfemwUf831phsZrnLX9qoyGFsvpRztu3bafKp1JiHGcLw8wQAs2zt7NUtjm",
  "key3": "mo7EHLPSccZFnHLqJ4aePc4Qq7CoV3Yz1PhgkDy15YUwvHmnFHGddTY9QhEjG13PRjnb3nwZChY6h5ixiEkaMeD",
  "key4": "54tUJ5nX22VN6VCb9S4Sq5LcJFkqScbABZz5SRGTkn4tmBxCUnqF4vWGoQUvU5KqeQ7gRN4oZXiy1vEmd5wS12DG",
  "key5": "zq1xLw1cs5d1hjhB9v1GrRap51XjyU92vh9iENDCJeTNo5VPfQjQh53Vq8cgAn9TBv4bJ8Ad6h88Ciak5LojMAf",
  "key6": "4CL5BEyyUjtsSzfhkZSNpz919rEyacyFXBrmwBQWDqin5yxw8gWeQp4EzHecNWoNNJbFoNwrEm6bSAwYK947icgu",
  "key7": "bdsAEZmm1GFyLBFC3R9JuupNAuUeCYrWb86Nsqs8NLZiphT1kdhCDDVDBa9w16iqcVrxhYne81QDKRoh8Le3YV7",
  "key8": "5Qj8nSpBnpECBZGhPT764iYw5TVbc75r7TJ8gXQhvGhpB8x5yxaDwCjcpCEnsxpBQXqJ2CqSsnCwdcmjXnyd8ugJ",
  "key9": "5iyBz6yCULoQvXFkCiXvpgNeNqme7P61qDhgWr2LK7J55Trpo3Cq2iF6J2vMTen52fmJNghP9CPwrAMyQcX6Etfz",
  "key10": "3ZmPwSULvtSqgxQMY8Qjm5FBKqdHQGFE24vQiHZHmpeCjsNwxKALhB3mbyCDAzjtnHG8mNHaxwKk3sNZuVH8o57n",
  "key11": "4E6JrdV9dwGVrhWa3iLgDaMS6CjZMSLo4rcAnyvxzH5LQXToqgxyicXkhpxBkMATjjRpJBwn7YUa9a1kePtSh5vQ",
  "key12": "4ARjRWaoXzu8VAosJhpxHwDt12zwSya1VR25Dzc7DWKSVXtJNHzvh41CAwTyN5WVSoYDAjAzPJqUdfugm3GXvQTn",
  "key13": "5wFZoxMWtgZUViaVcRhnDVPuHS1WmiHnQF3NJKMSUbE8XrJMtdabNqWSaL4fhWuSW4JAB3wBjhAXGQxPuQ15k6C3",
  "key14": "257ks1heiGEofMai7vGt9oeGcT8LnJnkacQz4awdeN4QUj9gAQzdd34qUVAzKr4MQqic71cEoXVTvBTJ7h6hECdy",
  "key15": "2v5vc7CjWUbj2NJSRpF2oM3tAdbe2vxgguGqLHXcKgrBQ2ct92xDmxNSTVUuW2MBf8fcay1ax1mRxyiAJPbYQe3t",
  "key16": "5ptSXAy42zxGstSZStc3HrpzNvS1oFPPoKbNqsEQveb1JnaGabEE7ZFdKwqY3yo9vx7UiFR5XzffuX5encrUoQFP",
  "key17": "5VucK5tHguZkNeX5XKKsA9wuA48wQF96RdVDis6E2KgoNsu4PeVRezDzbhmWP5VTsUa4nqr6x2HjjeU78aPihjef",
  "key18": "NwAPLKxXttTqisLUt6N58rGZbKaRyGGBggstviqVDsziaSFeMRyN1QDUmpuxc1eiRyKHHdQ95QweHGFQxeTCcJp",
  "key19": "2qxhpqJ2kq9XJ51MeVbPwdTiYcCYNZQ9FaJ8QF7CgcppqN1UNwVzY1S8PmbDAaX4NtfkThYy29zVu4MFEahCYaJ5",
  "key20": "RnHYSjUgx9Y6zbNMrQgDRiQ1PK5qU4QLg3bweNQQJvwSKNo5Rp8c3Md5QyETY1KjdWejpVpUsXEKtY76SQYETM2",
  "key21": "2mjZnWRb6bEU6i481A9F6ap8XuYrUyTm4774L23knrcs5QcwtZZpDSPhcEcoerzF9ckdxW66vZA6VupotLxB7YvC",
  "key22": "4Hjn8ELVTosLhN3ey39zMwRP4RvXKK7mN4nXmvb82JBh7tKiVDoYHiRS7bPAJkSS5xdyB43Fr8qKPbbrfWXv9QBw",
  "key23": "Dejr3x2f7KFxKDEgaPwdLXHvTnqCxuMTZBn783CKSwCThajhsVUEMcsc3o5deHzBtiXBMeiz95PU1mWt1FwohWF",
  "key24": "5m3M6EpQ6k5tmsYREJAeMLebvxq5qsDUYw53YkooKnPpjLBtBLSffbgfHKa7TTdb9bk5KSEpyHrmyNiTDkUaPzj5",
  "key25": "hdn5JCssJzx6j5tTqqWJ9sBWePkV9FKc7JWsoNto17GQRff8gA2UtGd4wrBbFwM6kY1UBxhr34ZtgStcirYNa7k",
  "key26": "cnJrS7NbrqWKhx5C8bVbDVxpKhzUijCg9XdAsCTBt77GPyQHkVWMjdwdVb6HvHXUVqQc44X9XQnc7zAeBNgfWah",
  "key27": "5LSQ2Bs32vmG6wBWmxDgozJBBFG2DV4pVjcaF3AgZ5CgzMRXHDbbrSCd1rVYhXKd5knarufKB5taJuuC2ojRrGoH",
  "key28": "DdxHeJSACSv2ccaxHPQ8P6zoi2f3bRrMd6VV9Zk7RJr5fQ5jxFDqqwNFxFAkEYggY3cRJFUVGBjt7TSsz1soC5V",
  "key29": "3e4zedvA8RLwZeL8wZpmNCXHEJoSKEpyaXM8y33J9PeiHhhy33PxW4X2sCk3ipfExw45y5GjM5bajJ7i59iNpTRG",
  "key30": "4chyMwa5VYrTDvMqzcLppiHeetFh4RznGPNeDv3d46EAQLbn8MjFS9r6gPfuGjAbvkphdxgE2u3cNbcwSE1WFayd",
  "key31": "21u7LwRJ4Yx4idYQhnm7bLGhMC2xz11jJPL2nsw4bfMgvo3Cek9M45EEgpHdDmNpfzznsREf9B9H1So25ehpb3EN",
  "key32": "3w5C5E7HgCya9fFrma7Na5XMCUKFsvY6hXgaCKw5Z96KJu3D39fiTMDaK5RfsBr2arUjHcTYw9gr7ghF3AQ8gKKi",
  "key33": "44KB6XJoFfykhfhFwSPpgPgFcZom3DXxXP7sfS5MUcJC4VXZUomnyuksVZRD1ZvpnsGWJQTsuiLseEn648oo94F7",
  "key34": "4k8VigsVTxTpgDPnyUVz3Mqc6QX3KHrX6Pi25DRCnY1hXGzVks12387zD9VEXV5nfFff3LzQDpBTL6DzD8jQR9Xp"
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
