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
    "64BSm4T9VUbYtUuSaEE7aAakGJ4Udr1m5kCuW4EHUymx1oCkjF7132TAGthbunz3fQHUfDsXQr2dZBuvwNrfwvxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kXwLq1oe1XmhM7yQ7ZTezUZy8tTFLLp4fjaNs6DAw1SujCjMBUr1DUtHYubkZRqPeZgboLSzJVNfYUJsS3dtu6x",
  "key1": "MjxwC4QAsq3pknoiUsPTWuJrB212UmDzfucybupLJsP7U1uw3vdyiF4NQukmGciFJU9DCNSB2CtbSSBeTrRtgh5",
  "key2": "3kqnKecgL93z43Tk346VyrEnFQMpRARwANEX1mGs8Gw4MLfyHN6BouZnr95EW87EE4SvVm3QELBa5QtfSGhZFbnE",
  "key3": "4gRYXjfvCM91SGxjtFvdSz2m8QgmEXSQad9ymVtfrTafaAn1MV9LCrSWDbHgz4FrPhVvmXxBZ6kLUYLyJ1iivmXg",
  "key4": "2NmhSKFwFSU6DTAdKDRmLgC48GaV5yVtixWJqiUpjTbMLcREHXgXLrW4LhRU4xXt4xgH1tT5NbGHQUrfZhaXrQiB",
  "key5": "2THQiJ2sN6D7ky5ddcQmzYsZwhLsfiKqqWtxUL6eUm3z1H7yyVQa6osZ73EPPa6kicVuLbvHfxbnwFAx5r4Ww8My",
  "key6": "2Bpxd1S7yEaYuaHK4chQxWfkuvnxhZfFRbZTvBtEcKs7sc1GhKEFq1njugxBwmNgty9hEDpDZ5yHgiqGyJnk8ngr",
  "key7": "5P2f6BjbdkQFmFGLTKguMqSLHVMYqvBYKKuovX7JFM6WLYnMd58LRaErzjANXXHCHNWH9KwU1J9CumxaPEbtLkRa",
  "key8": "2T2Lpz4sxPFCTvTvWxT4AZ2XRWh6aUUabWDeY9Lm2UT2vnnxtY91LMpXnCuPhD4cZqVXSK3mpQ7kh1rPG28Yxe1d",
  "key9": "5WETcBBcfJkb2nFccS8rvUxrgUwQSCC2NSFpMcPLAmHQrYuR8s9kHz4GPGwrs9cvDvaAUjftQt1YqjURYDGPfqaR",
  "key10": "4qbsr34HnL9HngkGhrURKyuXvF4GKWAixCFJwAXJFXR56amppWnVhmtyXkfFFox58iwWC4v31NPy6s78bD5hVWVE",
  "key11": "2oURhh56W9Sf48NkBzdEHAv4Df29DH9HhB1QfNdBscRPDdncF9c4PbducgYY11Li8HoGx2qX2f5KdrJ2wc8DttxP",
  "key12": "32yhL4Za4w18wZBGyw4eGUE14kBEi49htyYCqzgbRGKYLDY2oTPDrQhbUU1xL9JiedTDhGMHrUyp7ZK8aPE517HD",
  "key13": "64SjQ6jqayMJTMYx7hZqiaiLytJnTn9ixjSqYrehF2NXbf7M6TuVG4eaUSK9sVfUgMgvdpkLFgndZK9wDKSC6JFE",
  "key14": "3LPwmJ8bTJhR8BJDD6nQewhM6vRFF4F9RuEhxUhu3jGio4R12bTVPiWNoSYti4cZBkLGiJRDpPQgto1k8H9Afymy",
  "key15": "2ShDp9w6w74zethBh3BnrCA9Be6dYDDzqsk9bFb4SpCe8rvZdWww4enqYuZrxrJQoc4s9Rfg1gmSy2RAUsSZH3R8",
  "key16": "4h59SfsCzz6omfkF384W3Tf4fVJw3JTxHtSQo8hq7namS6ypggAG6ZtMNrphpsu4MpoKFUyvEpczfMtmrE66EKi9",
  "key17": "6AasJo5Cur8pA3mgZeQkGRjC1x2fCwZsdQB6dwQv6SVjEhTLM6bpk3GzYo1e3EuqiCnjtRRsNQMpVR134LoQwBW",
  "key18": "vVa6JofDm47sCX4EfttWWqeTJfDxyQtxvve42833WZqNfUYTQodSzbS3BWLPnZQihHQkzJBgYnoP17FxDrSZ24n",
  "key19": "5BYavrmAbcWeFRNtqXe9S49uLe44Xa1CP9Nzcx5DG9EvzbY7FAwo9SQf7CzenHziUKnGCwUqCkaJWqLDDuwhbUvi",
  "key20": "36TArRZ347hsWVUjVZaLLeYeCtQyRZmayCZZ59pyeS2cyCEeMeKPfWVuPLNnnr7wko1iyNDJQksBGitY1msEqynD",
  "key21": "5kYFRh5HnG9bzkUed6QpDyQ8gZEMnoZfixeDpXUC4WuZdv6aYGcDjPRosKQnEpRJfkYfBa4csSVYc5MiqWkdpHNM",
  "key22": "dJCVpsG133S1goxBAbruXgv8e5XHt8ZbnZr3nohgeJ2vJdjWdAyn8UMFCLA1FUTgdWKmt6YmP4KQzwW7cLMSdm4",
  "key23": "2DLrDMksGrWxJJAHdjZ8oZet4pBw423YnpkkPWVoFSuqL7CLkBiiDBMueKHFX264tu5zhhMUsJdUgL3jEvBX2gLA",
  "key24": "47CVZhSSwzBat4kUrbYm9A4TGkpwqhJLvMFpBRxrTLSMUDeoxGpb2qjfd24H8SfSPUwsNWtvU9jddNK9VYFz71hG",
  "key25": "q7deWhfKAasCF2ZoGJ92nzyXGaQSK8KgTnBtDvoYAsaYwWW4q5dw6537YdgXuvvXpPZTLSzP7JKkwuR61GzPzxz",
  "key26": "2C8va1cd5WBSKyaUwr5Lwqk9hZKmGZKqAMw7MzFqQFoRAjzPBRkiMUq9ykMmiYFwSgj9FK5AtXUkSMmqs4aVh3BV",
  "key27": "5bn2wwZyLYq5jKuBzhBLZ3rLSb1e6xec3HTu8UbaouoMCqfn8Vtcy5pwHmM2u4stKaDee1uE7SenRvvKWh4z6boD",
  "key28": "zTVbL6GpkJqztbtD6zJWBMLg2hfi85HAj97KDJxrP53eemWCgMLj5is8wJhBDj5kELgbKQR4s1i1vz1BqSzg55j"
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
