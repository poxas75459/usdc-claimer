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
    "3Vfd1zJHQTTNTtLkvJA86KJzD8Y34Yf84d8kZK4Q5qazGpZxzaRZW5jDDZcEXD15mQiE3uf8m2R3qzyxAemBweXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g7kmvXAbi6cu7EHRZAzEyjFnvvTpLMveR47zbwLzhtjRSjrnMjcuHuPtmrr67YfnRx3CpxE5dbiVSrZgkY7DvpX",
  "key1": "558s2eo4UTZKm1NrrT1dXF1xgT3s2DjFLXTcL86KUgAuE9qJvoY2sZgJSQhxgaoETbZN4LxA9vq9w4xY3EsHWkfd",
  "key2": "3fsYotZdgYnZJCEt6d4SBE92H3zJDm9ac7yRYgMHGCkubu6tKT9WcXPpJCXoxtdKgJwm95Uq7bsKux3pj4Rb1s8G",
  "key3": "4vvTyHZSZ5SUGMxFvvMBJbqG2TvfQuKu47soiv4rMz4sm8HMfESqkvmMf2vetF9cM2hmVEk5y7ZzwwkfLBxbzMQb",
  "key4": "4j86iUiUWvw4jRiXhNA2DXfkRejNnm7L7j3pKPd5gVAK86zbDjNU2RdEnC3RMyafEx9w8m3gNDz5VKu9TsnXBhho",
  "key5": "2mUD99xumkVvgeYnrGtza5NVwjG7FqENwyPwSRnHt7eUn6czPcN5kCwJSdqe7GmA93ywNVk8T4R3pX9f6MCtAmmP",
  "key6": "3LQwS6aK2yL2Fmv3Fy6QAHZFqMGaj7TPeW8hjrmBWQckzb7aJ73M9Lm4u2EWxy2b8PhXMyVWxGhkniEnDu9FvifQ",
  "key7": "2o35QuyX2xLQ6noTBXaonKb3pesMCC8vFBr5R1aSrNJrPnH7FCqYGNAotp3mpXwNnVK3aY2WdYD7tg1WiPGHysa9",
  "key8": "4Ev6wrPaDWKzJtq6ikLjbRHbwDB8HuHtHv8oBHzRbtKy3YdXXguo4iSPRdDYeG9kAQzvCZm7BQR548nGrgqRFQGk",
  "key9": "4a8PYSvL5BLKRUhf8L7AppB1mqEabQbKgwzXuGj3yRSVYhzKJGfeoX3pTAY34TGuWLyLFMNQBWoc3MbLrZDCM7HR",
  "key10": "5ED4gvMf5i5xnVioFATrhUcenxzEuBUG22fG3mP1Ca64ADwZwoxtsaC7q4NeptTEdsHWHw7iS7Ah9A1rkXMZXYS1",
  "key11": "3uMSjKbkYdSCLPmpeFxPcs7DTSUsq4DxEeUKAfExr1ipgvpFdjWBQcDAYxvURHstdrVACTXJqRKcqFMKRiNPNM4J",
  "key12": "TwcLUjuEEHXQrBQUsG7kfEeoHhUgiYyu1fgkQMPZxdGCGM1iG9PkNfGzrxZ1J9WqSqAYtp4Se61Ymib5UsT3ajR",
  "key13": "2EJoVgsErQ2RT9XgRSBHQqGdLrLi2kUKNxkm8pScjBq7v77hzkmLBto7eXbr9FvgQZLSVsUthoDRg7oKiRpBHkGj",
  "key14": "46kswgTHQWcy1eb5gB4iEDGMrNX2eRHTi92iddGN4XDjTaMr6BoFmqRbE93TGPtMthDCMa24eMa2P3Q9ExCqForn",
  "key15": "6163uoXoPkgUu9m8TEL8uppmHTQy8t2vyhffuYTvSkg6PqpK5VYaY3N6vMarQsb1PkiCFECiTfA99hfwoNSKDZzX",
  "key16": "2ZHkZGzkdvxAMEWRnJLbenGPZnEjUkdZSDjMkxL3hsWcK5eiTpLBSA9Py25vjFV4ynZfpyX6cYqSTAZiQUknqtw1",
  "key17": "TGMbABT8Zc1sUJqvxJyH3YE8tj72QcorSJVxhzKrtGJQuJ4P9jcL5Qp9oEHUuHkqFcWg4TQF4XEcHYXAzQh6SVs",
  "key18": "2L2zLDDf5LJXfaYDnC8dqytQ5bZzR7bxnxdDiWK9euerTCv3dqf5EU4EYiZwupGTMhZ7dtvWS1xAkz4phxBkPMPs",
  "key19": "33bcbvMaTTj44CWU17GrUhtLeSTr9rpRzizXQAiuh7vvjs1k46LYCru4B2njApNRDMbGqrGwHY6vJSu5eVj8Woco",
  "key20": "4fiwQLztt32uNhsVm37WUrBy7s854GeXwfFYNtQNn7BfYwF3Lz3wKkMPggdQddaoP8gZnmHBqRS97XBNFhfqBjSK",
  "key21": "5tprHVRp8CZtc6dz4CEWKWBTQWYfFHaExKGRJb47eh7WULGCDN1iiGcdHUc1RCDCsUp6aeAzr22baTnkCvq4LoyZ",
  "key22": "WZHqUt2SNnriovit2n3GDXMPbeLRGBfADukHCT44VXuc58CbmeAmiJuCfaaFtdMKwzZQEAQLunNo9Fxr3Rz9b2z",
  "key23": "c3WqwNguJhs9tQj5HaZEd4T4cnhAAncKKYfdzSYDk69pdfbXe13FqLpM5iis288vRLgUUzVfTCEQnm8opfHejN7",
  "key24": "4RxuN7e2Bubka7rsGFBUw9gAiiDEDSR8FrPUxbDV3Skf3Gxs8YmpFS6WDy9xrKDenjVSSZ928rYzs3qMNBH931M7",
  "key25": "3MLkozxWTRYVU1xVJkmCKh4BHUDe7ktiGiQT4BBUHjga2UExSqb2Nj2ipjNpUPhwTi33cbGgHLEjSzWwSfZMCAgi",
  "key26": "22mqg3C5BgC9hJrB7CAnd8DdH3yp3qN4uPFG8XRRdA8YB3wGbQxLj9cwnx1HijTTYxwxYJQM3JT5Bo94LE2hxa58",
  "key27": "44LMd9Z6ZEgfTY2hyJVSwi155hqAwZWZPumSSxCGHumACKJKR8beSBEcNbMg1kfLepE48gZuA4sMxLkaJwScguqP",
  "key28": "5FWKCHYfkB8yuUSaJQyQAhRwMPEMTeDkz785hqvdZgCyQVG5cHydLUevM7jep84vSonZAqF52LVv8cwZv4i77MD3",
  "key29": "3RLMMMQYFmCy6XFWLaKPtHfkDZHSdrKBHkvwxnGz72sUAPR2fMXkFh21q88k5uV4GDvrUL5mqVLgZvveGwTRysMo"
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
