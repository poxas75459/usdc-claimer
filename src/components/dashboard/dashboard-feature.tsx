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
    "3hyPBJgjWYwST9QQVe81K9UBJQsKUgHAnzT4R281jdczz2oLdzvBpH3o7WdnaSNrGTo1JS4L5WmvUBLUChYDW7BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v4JNdP1ExpR3v812sDM1iAoLtjbrxBrAdgfYu7x7XSRMhpV5gVY4v6mYkMm4bqDanu6QkidrpABvCDLzPAbWoiD",
  "key1": "4toNietWbxXWkLF2j4pRRhixrdPkrxm2UoRHUYsZ5VozszrhkXsHCazqR4r95oL1CPzb8CV96G47NSZuoABEH7xp",
  "key2": "3gbaKRLQ7nBYGYo1NZKdn7Np7MEVqnjkofKyNARLGA2B9CmthhDAxwdWFbHhR9qm4YsPjAq81RXgDofknnu2ADfA",
  "key3": "54E5VepxJnZM5fMYbvJZnKbT3SpzrLpxCCP5WxSNQ46CoMJfRwNCXmJ3zuW3LekY5eEeHMDX7BLLsnAFmjBvuXDj",
  "key4": "4d6niqMJJr1rrUZFQ6c4tB8NvFhv7q23qawtG6a9Z1PuzpGJBTZf3XV8b15eXGThbhf5LQHaSPot2yrrkGvSsP8g",
  "key5": "2GBZB2yt28G6R9YfM5xCnjYTpw4f2b7cjaTEMTFnf4VgeA9XXJuGJVFaiNchKbj4bCttRCTZYRJ9z4Dt2XN3KPU2",
  "key6": "msEHRByUNzUtAW6iMdYqtrwxhpHBJPM3ALyCAnDFSoDjuwPDNPRBJ9ZcQnozsZ3DAnu96hGLMP5B1W1ywF4sheU",
  "key7": "5vHtT6DELyFVdGXUoe3NRxLU8jFgA6zS6ZqiRbn5jT3YnMTTPAYXfw5EpYwMym94X6LdHJENAMnS1TKnYfh6GUfo",
  "key8": "3CfB6PfActnoM3Xqp4zDLqbzPqX9BHJ32BF2efpqzkRXnjX6CfaBzAZTgKsKu8YTGtCugW5Am9me6a1Rr1wK5rxx",
  "key9": "3W7uhtj9FcFZpvMnFinDTfiFFNNZqNvcXHR6vHzhiDqNqPsNW3duF6oAYPHZurqRs5mEu8U1k3YuZWrZ89cDjEqo",
  "key10": "54b74q4j9kDzaPVpjUZLsePr8k2pUzN3e3HW35ZfrAWycntfPucRPGJcbQLCtz9YQ7QHU5BfrSFS4af42Lxm2GHX",
  "key11": "hJo85MtZ1813HFiFJzs6kfKaK1PvScFt7fz2b2fanDRyCH8iFgcAUCtoYJpHoogpeSkwRhmq284nZR6fmWW6Tkq",
  "key12": "3ijk3BCgtAiwnv7JDJmXG6iW1erLSoWWozuASgNSEAFduadru31qXZa5ckb13Dm53NejhiQ9wAfWRt6ZJfDzQngM",
  "key13": "5kCqhvwm4Byzuxp3HaR2KJX54Kt83GsNf8kop5KoS9CywFsxue4WjSy321so4svom7k1B8CtLwCy62dTt4ULzco8",
  "key14": "46B9wzLhrjka3QrzMsTgEpk45zFnGmEf19Saeio6Y8TJZ4ruKiVWwzYaMKXZtZR1J1EKM9NrLMDgaEvL9J4MVsig",
  "key15": "4b9tQv2s3JfRVzmKtz9rE6NUaXbGYs9cLdW5ALrE1XZLqMGtaFciAgr9DAz7ayNicmc21jxa97eE99xzbKvccD9P",
  "key16": "3rkmkWkS8bwwvKPkGDwRDVrxHWZ5FH5wwtkVGvgEsbaNTCwEPaxthvDXd9g2f6AZJJtTxMr91GENvrjDJ8ci1WVY",
  "key17": "5gphshp1g5YpfkiyN9cT6PgYaEJH6rmwsjDCY63AjoFAdcazEpUJ1PAwFVMLyPWiMPGRadwi6kqkm39Vcy9V8XMz",
  "key18": "5G6ACwZKNmu4qLcwujpmHAw4f5gyqaYvV8Nw7JELUm5TUm9nr7nqpXJmvdcwun4SYhm4qTEeqFxkXvWQXmoe7Euu",
  "key19": "5cmxKnXSKHVmi6G46T2EBtT1XW4NAEYT5XWJ5H4odkA3gwQjHc6Hk2KWn8LBDgWxZW3kqVwBPxFcnGYVUEKFDzkZ",
  "key20": "2hsSBhUUy4SM8WEegBQRjNqarEx45tHrMJhjo4PeNzdiYPYXZni4auELMEmKjQvfFjihAkpdvfGBr7XaTzaKi8TB",
  "key21": "5L3dHayCnxsQ4N3Wko8jJtd6dgpdsmaDWit35c43MdPC2Kfk24BWjqBR3anYBa8pYVt7RhLbrahX1SRyVoXZAB7h",
  "key22": "4LsLhsjz7wX14oBc7qJdKMGX6RFbS8VYmAiDF6ACG2YKo8sYyWPcbui5GsNTjyvJBmEK32vHSSN75ZDmsUmRkUqF",
  "key23": "2htWdQXiWS2kss4DakkQpky7wvmHCfroYXbQsukQdt5LsqkLTFJz3eFcZ3RGJeukZyvLEeS1YsU52iRvx98pHfWr",
  "key24": "4Bw4rZS8DjzozUZXYgtTMqwGPWr2rgfT6KjfPnf3Esu41kYk6zrBdMhSzCQd4JGVsB2eWV4NDiwXkAM6Cvc5CNsQ",
  "key25": "Q7NtLLyJ1sbLuyQnq5DRxdvp821tmtKfPdASoCFJc8BguwxKHMcAbGETCatxRckrCnFFhUNHXrCMbFAZUBFeunN",
  "key26": "5goyowVeDD5f7K2eWDKo3tCnUS8ZZ7ejQdMymuNmeNxUWDaKRA3hN2U6r26WeVxM7V9fH8GKQkgBmFQk2ztthyKf",
  "key27": "3nyvTFBrJvGUNZvkne3z7e7QKHxRL8Y1uyVAZWNXqhpvmakKgYwsAqg2TPVCeVs4rFGMTJNBoaZGjHeUH44JeuuK",
  "key28": "UeLCZFRCayhSdVGXKhCbHcMDwcFW7a54SCw95ZtQWAPvHoiwg7bvZmHQSbVnW9ikfPhD6wZgKNrPygt4AschB4n"
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
