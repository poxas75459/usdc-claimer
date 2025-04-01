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
    "51GTZjPhLGSTHEPL9SjmRNYZyo65buUfnJ3eoexFf7h2josRpYPEpwrszKYd7yYBZCi3vdBNjSoLGmA3maWMXioT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuaVEcGJSW31HB7fcEe51X7dpBBn3xCExTHWTHci9TG4mJWZUPyK613odrTnqZL8yz81XefAmsti39j839WZudG",
  "key1": "58ZvQySE1yuN8KHhVzEJMYvKH6edCiEzoCLUt22i29YmewRLmdbdv4XRLHGKjV9McjG7e8JruxRJhhC2ftrVTCsA",
  "key2": "5R9ujBS9FJjTjudwzXfPXNLY6z71sMfZsD4jVs1TauQk5SQYdYDEoTh5KcRU9QhWByocytJvbVSEDAYyxRKKR1b1",
  "key3": "3YjLMXV1zH8SZfGmfCyxqxXSiCqFFn54khswDosbkawsSxsNiHFxsLiBrmk7cdNMnxrdhTYcUE7mAiMP2j4hW39X",
  "key4": "271SKTSvZLdWbgMzaD3TAKEyAPj6frjBiCbJd1Y8t6D9mcc9uRgY9dKymd1s1gRj2tek5ujL18gQTZykpExhDcxB",
  "key5": "3mX6Ub9bzzWiEDwfUQ3piWEfwq7XEjDgQGXCtvKpyVWDQee8PCT1fFsKTQGjmVBZ6xApog49goFpbxT1eVg3inMH",
  "key6": "2BtRW8Nbv9JWEVEsEnrxR9PLFMmCMdyNz47rVHssTpxUJ4W3a1o3tXRJxjatukhXQLZ4BvFAy3KuN28o6hMcBmrf",
  "key7": "3zLAyvE9roXs1Vk2zJi6CPki9JJAdriJowa943SzxHwQ8YtJEukz2Q1XkPMTSKvDJDaf9oi5235hTBNeN114paH3",
  "key8": "3gvKo8tm6kUs1jfTMdLkoQVvketH9mPUt9hTh7TjHNXNVkmfuaa5qT9xmdoSASZEgd3sLHZG9ekXbF2kFEeth2gT",
  "key9": "368Uc2MaRkzS6bkXcE6jHm6KeRZW7WV2QKLvqiNeN9QyzA9MuVjsePSRzuFaa7cfa5qCUna6gxASvkevN2ZmH5K7",
  "key10": "6QW7tVpsMg1i3pnXtBh7RwHiJqqnc41fg6kMLK8msXSzNeWdCZQGfHVRxW6Ag4U5UjJQ3dRx3Un8JUTfeBcLqJ8",
  "key11": "28WnnDi57CzqJ1pcGDkJxscob8kG5YFbqEMvvtNg8m6tjHQPmCpK9ZMvCWSKkdT8nBPdkwsxW3D5bxvaP5RZjMec",
  "key12": "53VSRkFTXpJoPeQQT4ZP1MwSwMKTCE2tiQWgVkUBULRAkUNyg3VfggwnXpgcWoXAoowJhZBChMyentobwdLbivrZ",
  "key13": "2aBzggAkUSgFTDjQfkoEXvpezaUm4KJ6TDPLzuA717VFohRdcUUmEt1L4CGtn5UN58eSeMSBJJyxxJ7UdoAv96i2",
  "key14": "2PXwF87c46d7yjHXLHM7vRJN5b4ewkqpFiHd2mgjEnNKDS6uM3r4x2EAgkdjNDsSg4nFdiGNQH1H3BeQhTBa2Jqs",
  "key15": "2PcBR3nZ6p69axTSR2uRiHf25a8PULZxr1Zwwaph8dU8fiC4TG7Pz1u51BAEutbRUirLcMvYAtpiej2MumruqtxL",
  "key16": "43REiyzik2WSRENdBK3Hu61gY5o4C8656Yrs57sb5JsGfZYPPBHRtxktwMFFdULu5NPVQfjp2Cu2FsdmBHs2oKZK",
  "key17": "4avAdmGXpsbwWEjCGPw61ZxgLVUdkgTrL3uu1yjFgJBV5bhyPJbii5soQ3LZMVdX6dhYEVjwVpmYFeuFLCDJh2s8",
  "key18": "3WDiPobDQH7fmUBagFzvACrBPCHrTgQm9DFAhxhwY8tN5VnoFnFCZ7PUZdZEhcGDv3kE3bWGxxVyXAsqqtffgQs",
  "key19": "5MCL85bmsGHX8QPphvK8SzrdMcoM5HS4sD3aZ4kqYEwaCmxQHLzk2VM4kALkJ23d4WMNrWqy39JKjKYwQBQWaijQ",
  "key20": "58sfKhQuxGMFULENWj7aoq6SrBocXvXwxb2Q3x2EXGimNP1A9JH3qRVmrdBYQGvnYWsbB3urRFyMswjMEbj9CC9n",
  "key21": "5ChWjNxnHzUK5hCBhPe9yfbV7LEvkg7WVXHP6Lb4zGAcFYp67o2HfD4cc3edsdm9w22VMH1UWF8cNC9FicScuAmG",
  "key22": "2hj8PaGLhsscoPbCdzCC4yZpiPrySt9CXokr6km4GEDmPHFUPEUG9AYEMxXhgShxUMkwrJaojsHoLHkqPhbUyG1y",
  "key23": "5QfYXQFyyeVSdwDY4v5DJPPydWVUGznezLHStpvivTMaSsPjNH6ec6pxyfxwTwAWLuSL6yEyZREGnLJykZPMXjT7",
  "key24": "4MQg4r85r8pG5H2D95omqWstztQndGfdQ48WT8EbYkL2r6vEBUKZqQZkoyZCRCrSvRhLpB11jpYcRdA1rVwGVdcc",
  "key25": "5XsitSA1GDXvqNA4ZfgCoscKxvz9NdnEDxe1R87wS7MJ1edXkXyzUvDPXL6BYbpkKkFjEAkQnsCo2xtB4FAukd7j",
  "key26": "5QqDPu9Ym3M6uDauKueV1pqQfUF5AdDvL15n6aw24bY6js7hchdb8VhDSPYSVa8LdhZTNQm2C1ZeMuviGn8ocdiJ",
  "key27": "N2c3uFRdKp2zNcWZrLZTvePhSfd1tju3JXg5eVCgACfF4TZU1sHjNHqC5vhnU4gZtZhEmTrTdcVA51HCe385hhc",
  "key28": "5bpAZRbrMWGpQ44zdAtXek4QQbSHQtrDs9n7PBh1btpXDXkk49vjvqVsWTXkizBTGdZqkZ3JYGEezDjmQVkjhJrM",
  "key29": "4TDjBmEiAyQtSfCstq9ibKYUTGTJfb6Wzpj2ifLnTQoHwSxzzKNxe1mPL1f97W2541UpAKGiCmQ3FPW8CRwrTBHX",
  "key30": "3mN99iDbaKLWBLoW8V6D4syu9AqhLV2gANqXKaUk58N8mmGFohxZ93qTCnwUZVue6pk9hYPt33bCndcgqcrd267w",
  "key31": "2BWRJnVL7ziPUVKnaeaAJgj8MEdWvU3m586Faqk6DZCNrzE78aEt3udRMSg868n1hdx5RBb1oBEPd1gXqRvwJUdJ",
  "key32": "5om1Na4n5K9mM3Z4uZb4bkXfjeU828TrAhynNJJQatdGYzpDsucacadtgXYvWPZSB9fpAJFi94u6MjeWN67w1Str",
  "key33": "67QdJYgjcwrNU7TDbFfG1SA8mRcsJukge4VXjJ3YfBM7kf5n86H59HCz4vD11qaKQMBfrxcPma7BepApNrwi9pcK",
  "key34": "25FSoAufQz2CUr6wVcGVxBs12Rmx2YNty9GX8tq9MLdCvN9RfAWNahf4H6Hh5a5Mq2PgASf8AWXKvYgz4xXT5iDx",
  "key35": "qggaS7hvc2T8ZkZzapAqwWaGxNobyrL4rf9zq5cJWSA5ZnX3rZUtfLHiH4YmVUVkgh7AckQ3r2x5mE5v2bpEVym"
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
