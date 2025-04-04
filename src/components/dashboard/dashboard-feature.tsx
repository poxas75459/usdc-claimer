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
    "3woXovQ77knJSbtUp52dwaFcwBVjpcZiLuQTUhu3mf7cGnS4ZGWG5NwHnPLCPFGF7hHdMuyFNfLVuTwG3eKRzdGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RN2JMXKfm2AdC6j77eVDKhCzY4qbWBs5SejjtS6AnyoimjrGQABM4pMe16r6v8R15u1tP3AscP5W6SpuXJFvR2W",
  "key1": "2pAEdE8R53U8GeKdJn6L3NBf8Ldy3tkdDXeg3eudjGV5mGBDFkuDJzNFewyNrGAt4tJ6r8X9BjcxNZyk5RBCEnYh",
  "key2": "61ngV9whWkSV9Ck53v3zeRRyX6sF32pKJAS9LyCeq68K1tFTRn4v3mRNQwm73ENmcr18ksCtStutEaUbRKx3ouxL",
  "key3": "ZgTjxkXLA4DFHZgMQLMRBkXzUH5GxsxvovdSokExvYnoXSajqUzY32RFciabtuJKbanDXLz4jcHK7bpd8fjWrJt",
  "key4": "2cEBHpBwjeb3fN3iaSaQnkkvq1fZgAzMkCRSR9gV18ZcktjJZgBaFD2MNUntMGFLBwDQjJWLTW79A1uC8ZVR7Doy",
  "key5": "32kde8KKwVUStxpEDymxv3EUvBsWTQXysQgiG2hWLfkKEaf5xio3gnr2TNXWwedgvh3irNM9tLgCv4JUzqrgrErw",
  "key6": "4xVG8MHFYe8fvKg4fDrw8JWPCHKMk46K5uVUG3v1xk73Q1MoRNXC7euM6nmBtSXxrhRcho441RbCA3q2J6CNowWf",
  "key7": "4ksL3yZ4WffYLFkxM7Nfpt3Aa9JF7XnEJeCnGmVPGwJcYy8YgmxrvmPpFcuE8F53E7BDyziqZMkTUjeB4WevQAMY",
  "key8": "2qgDmQfR3MrRRyfDLi6exn1sYr7zTD5qSNKnRPshgEzH6g5huqHs1tcLkNpmjvD5wDZ3SJfK26oX5yNwHgWbiV49",
  "key9": "54VCyuTvr1PmFiZmjBdVfMyVJQ1LaFxRyt8TmgPuJcs1TLPPd685t985oMUTZdfGCDkTHCt6Cfa9rrCZx7o3Q5VX",
  "key10": "67FrbSxirwshkL1RNrLwqAaVajoon1DXvCjL6QCKXiKKh3LRo5HcY2i5u7M6W6arwFgiuvMRipqrAmrn8ibsEYQM",
  "key11": "3b5WH83hWTRTemnK6jbuiiaNKpBbQQHQn6Hj2qbHNBQQZaiV9bqqS4DZKPRozvEpyqrwtZNEky3PLexCxCMovtCN",
  "key12": "53wkbShh9hWcSRqHaWGx9NA3VBSZEMUUSTqxdtYmqfT2VxLACyK8dMdVv3YsgLuKKk4NmCFoLKSCMrM2N4o15u53",
  "key13": "45XoEkR1ahzPPqBWzzcC7r9HzEzApjY134sCg9BBCpUxZ63quEbk3R4MoFR9fQL2rdbySuPisgzePme4DQZiYxDr",
  "key14": "5ELdnYXrrpYaTzEFzLAxBJJGZ6qPa248B8mCf7babHR1JCv4jV49cYJkRUNMKNeyo1fFGtdDcBgc9KVmZFjXaWXD",
  "key15": "5KzszQrUpQ9XxHuh3F3f2B7h93zMGtKwntpvKf9fN3BuQWzXNGqFRa9a7MKF6528nCk6FtBqpSBo5fqiDJ3mqE9f",
  "key16": "4Zm6eh9uejhardszF56GMfe3juWMYBA2H4UpJLKD8nN2NrtvtozM1cnPDv1JDYJBSFYua1cEsbAtiajDSMkWFBPc",
  "key17": "BsuwQ5pMHHo5fgVxRxNQqdgfXFEEaYweQk4Au9drVTWB9DaHpDHM7LD3XZjd3V522Ting9FnHfzafGrgz2jPaya",
  "key18": "2xzWEmQSkSe4muFdZUPYeTio9b8JYBAURCwbJjg2TeqL185y3vfP4b95qmr9PU8V7kMiMxFFbFiaesGopkKnVDpp",
  "key19": "65vBpKTBzPzExuvmvTpazUDJCjUdXS4gHdspwFVRiSABheHRWBoV3X8GMDk4mrXqUVh1neP69gNYBVujLcQuuv2p",
  "key20": "3dSNs4xAQBVTLe9XCR1kcbz1YXEo7cVwxwx4qej2PemfdfNes7V3TEqY6f2YDXZyKGqncq8D3f45fTsR4H1g4G2E",
  "key21": "3oVJEdYCpJj8kp1afJnmCFwq25PQojcUsAqV8drdmJkuZCnrAEZk8bVbSN1XrzJ7stRV21h64dz43K7zCn1Fx379",
  "key22": "5HuY77bjXDxAWUb5CgWWkVtsWht4mbxJ6KEna5K9AeF9f1ZHoaEPs5foJKmcag7iUkVqeg7b8kbWX3MrY7rXTgyP",
  "key23": "36Aw1K8uG7byEuZbuqGuLpdEMyYWDa6hjgJaRPrrJLVdpxaHL4fiK3QTRtZsKTRrXxnV6HGFwcvjEmHxQJ6ZtdWx",
  "key24": "4wArbeeW12YbUwD5Zc3osudBDmxNgHSDuWUf2rxmVVV5EV8m3GWMWkqWY2HRsCWxEsc6gkiZG3LsMHE33d2gsRjN",
  "key25": "2yXwxnc3EAZGq5W6LPUwShvBwBihyyrXVEpyFV1Hv9RzsEPbWghinAEeH1MUyBS3JQBN8oksfqUkVty2hZQFNZ6E",
  "key26": "4oYcymGZv2z53r8C3AP6XcwqSVGfenbXfuJoEfNa6bMZdj65pNKud81jntagEhBYP49JWUsS9epNnVjruqjskh3r",
  "key27": "5bhSPdKNZwVnaWwH4pUfa9UbESr2Wc54ijahRtbcSeJ92erksZLkFjZiGSWiBBtEP3eZ7wAzmDk9PLhC7vt2a5e8"
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
