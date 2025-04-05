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
    "2Hxs19F1haCaeqpX2VCwKDjH1dGvQLBhBWNWpU825C4ykc7Umk9zDwuVfsBeaGkDhrN7rZtiT5RyHxpA6pbaYG2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iVvMFv1hEPXPcsSxedkB1Mz8Gt9Yc5uGAaY1pbTw4Wb6bj1bm1maDH8hLZpysmnEwG3BQFa5D4LtQJ21PHZMUKQ",
  "key1": "Fw1pAKP1g4U6V7XLEuyU5Xv9egTMft2cQb8r4FCbTWmbPSForiegTNgdJDUCdRytMYYp4HN4Z6PTjC2UzDHQRxB",
  "key2": "4U9RBJC9e5q9WqBELdzC9ztosauAD5v7DbNTndJYNbBoB26GWZHvSrZPUJ9F58dqyxAyKUnBqriJ46CgcaPJ4LZr",
  "key3": "afTBr8u3KxMJKLh3wxaRS249N9VgT2z1Y4gSiYCd5238BG4iwWiUcX6iZxRrPsDDteppzQN3pfChDMHtWL4DRLQ",
  "key4": "53TeGEGZQhwbg7CqUpLgFp1WtutPjrYr7kQGs3nok2Tx3DE8vARjQVZMAVMMRUcv4PGXS1S8FrCGVCCebGx9u54p",
  "key5": "3mWshuSiDWcF3mXVLbbgokDNZ4vbiJBzz2Ax1inTtJ9jtfoah9qnJ1PyDvxdsrDtQqfaytwQs5Cjoggmp9PVU2ym",
  "key6": "3qaqT2K34wAVCRwNsHZLnWhFmRPTWXpodaDGsqid8bLgFX4EgGdVK1rEVDQuDW3ckP4wfYn2wWgJ8MWFrSvdDReT",
  "key7": "3EGmrHtu8C9mkG5QFpWC3NdVUkck4oznj3EifTruZTSuA58Yj5oVrVKFYPSCZqT92k4Wbei5YuZ3PBpUScXC11PA",
  "key8": "3HqKxwYiDF4z62jivqmHs3JaqcsAZE8ZiFsPe9xt9Vc6FqbaabAVkJzaSFXPXeJGvzqMGS23rVLoG27CYfhFnJ9b",
  "key9": "4mASm3bHCdVoG8RkvzxzWFnNvWChvGbpJ4LDLr35JrhzNQyWr1AAVK7zfxPQ72KtfhpVcdrYrrPHjhJikLT5cxkT",
  "key10": "4sCzhgzPyDTsfR1bMKgJstXs5mpJxySFKfGEVtb1QB2HHDq7gAZxdUyhgqGLGgjFJNfkr5QzL9DHGbibvuwFLDQt",
  "key11": "5ZqZQcMABLQAGBuN5yYjAHs1JpnwAWVKRi5517BRNhZgEV1YpH966VYJkQjrNgrEr9KcLMp5N33t6FtP1w2spvus",
  "key12": "5qCdxkr5Diyj3D69Bh3JA85GswrHcTmhiWnWAy3RVi7iMxKcfKyrAAUzMY4CWwmjDbLGtacwGND6putrZHYJ6cBV",
  "key13": "5PsQDsFejJ5Dj8jd3WKrRX7kWxHyCgi3KUZPaC9X6s4gcG5xmypJUPXRxG3ybXksHLHTtSkJide8w51qrQJ2qf6B",
  "key14": "5xBVQJrG6bfHzE1ENU6fys1H7L8jn2pk2DQwW9swBZ8A1Mq37c6CtUpBy9NpJ5w6RXnjyjcYbXA3ENG1pKJ9V1jt",
  "key15": "2SzDGvHE8puS5ayMxSDsxGf1Hg2M1jBK5Y4WqxEYJx93JMdsn8Fq7ARc1iehpiPPbLSZByfVFUbeuzgopLq92aDT",
  "key16": "5mqSrXbdGaBUzuyrcFREW1y7wGcDGM62GLZKGLbz5wVPCtARaNknGnJAtxN2nLHueF7gBQhuJPTzgdqYNSiPtu85",
  "key17": "4fj2jwxBbTtdcvrRzUGGYB7VmosgwE2sKJQvwZPCPScfcNuvuRqNwx9cLmsnh5D68PUXWubyy3wD8nQGCqb9Lbez",
  "key18": "fgh8e8SSBeoFcbq1kFQoJRiTQZ97JYGrgsVA2waz55qpVNGNZ5cv94qpnU1HZ5TVEvh5FHAi4f68WaRq8Cs6hnA",
  "key19": "dkSRLTgncSAghLBKxk8YFgsnxZH8TTjDWPK5t5UxLnwgHuqkKWGRXBpJXFV3r5TgAxaYZSGxSAECPMQkquE3a3Z",
  "key20": "2UfNFCJ5orGvvsHX8CMwwhNgNJimYGpSXzzpD9Z6AJvM1DqwvPbM3ncHmrK9ekm5iAx72VCYcMwcaXDiz6kNkJca",
  "key21": "q4uewDon2P7X94cy8LmNFkNrnwuh2fGRKtqKEAFbL9T4Vj9MNLMtHM4KAyGCNmUAHvAM5NnhJC5P4wAxi1jV33s",
  "key22": "4ZyjUgSR6cDp28qktP3CBuFWhY2RgyGRb8HZ9gimSTJ8ZviEZ8HbFBtmGjDN4c2wsEZbskz3U5xhHF3aRsgEu6Ct",
  "key23": "4xuoQmuxmVdPc9Mj7UZLTy1MpmdeEv92u8zQVArPbMzb6zX1y3ekbvQiX5UB4yzrmjfumbooTxtJAYS9pkvzXo6m",
  "key24": "3Bt4dUXHBRosEEWcVg7ScygcnjkZPhyqM1EPy5Uu3dnVoWZizQP79y7esgN9gA4EqV7DeH13onbetoErBWvPSWp5",
  "key25": "45xetbNu7AKqyzozdgPQu5wHKwRMjK6b2GYSP1t7w7itFbDyWeEJcnXhRSXuAHcSY5rj4kN8KZFLqqFJvnWrgvuJ",
  "key26": "4Qk54HNdip3nEVW1vbGE8WAYakgppLzEgpDHHkxEUB6hUUFKtNKV7up1k8N8hBHUz3d9cwwfXoo1ThAr1g3L8ngE",
  "key27": "2eKGp4A2dSMsc5YZ4o7DUBEsfXLcxwiraQbe7vkpMz24ZpSog1fK3shciVDdgfAycEptHJtzoje7AH9g9fvSS9PY",
  "key28": "2bt1GNE6cdPTrresKgfKRM3fGT4PDLn5xqqp9zqPKdKKXmnjuEnL16oeHGzRRxoCb84v1rNUQcvZzzckwJ2iMJXe",
  "key29": "5gCefsJnr7Jn8JnUshELAV8AwsEyUuFMwjoV7CBBVgM35UFUQ9bLozhFGM8Ay9NdsCFci6mavQK1DjYzrT6gotCm",
  "key30": "3uiPJYT4jA159tbHTfSdZWNoYmn2bxu3fr5A9ZR9acjRFpdP3Ec189A6pyz8cdaorCAn1yfxhoY8fUDip1DvgAFz"
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
