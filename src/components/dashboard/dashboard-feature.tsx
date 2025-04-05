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
    "5epCdptzdrtBfxTAnHQ3vSG8aWzpZTxKuWG5J5UiMq3QZpcgYCsKpvJixUZ7xWfmu6qqYXDxLQr56vm9DvviEiN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2tc2SXU1wntAHLtR4ixP7brjnfpETrC6d1bG86tLU99tQMqL2C5adUd55MpQxefcQU67ZSh1XiovTZEzXr7DKM",
  "key1": "29sZzuuUEBBnk8tyy1Z5VmGMNxXMyJg5iv1VFd3HFRZCtUJArXEsyVx5yakxRRfo8qshrHk4mgXzuKJ8Troo3gwY",
  "key2": "3rYiGgugQQSbLXV6aEUP7J1iNLr9HmYu5GzKAszH9FDvu64Ke8vTCTiUBCqfvF4xbLHb2ksFdLwiP7R2pLZe3jky",
  "key3": "2CaZfKX9WCscopvDM8UwNnXWraJ3hRkqvfhEwA3P3v5KKr8V3p2C3x6EfxjpHKs3EUcogEcpPQ7Xo9RN7enC7ujK",
  "key4": "2ym7tw49PbVMFGx3PCBS3ttZdNgXZVuBC2NwWKXfhSxome2K3gHcv5T7KXUH3s6CtcQwkSjjdCQfHjEfQo9KWMyG",
  "key5": "2ZJcGDzmWcW9eGcBLcgbC76yXpVRK64fHeRGcpdPTPsszXwNocXURuYy1vmy3v49cHTxyPmV6QYBVy5UvgHjvNcx",
  "key6": "37SmUb5ZZxfJdwryEuiyjEv2UhsvCULX3MYdoXbY3FM7FqHmUQaJoWHvw8DGU18kFV2Fpv9KncU6n6J6VKnY5Z7w",
  "key7": "5JW37Q4wVg7fHCk6miyk7pFrbtSdAk42Gd9HQxUHJYZ3Qho8CmUq87cgxQwAs7mnrDY8y2XMewfTNzKJBHC8aeA1",
  "key8": "3Ry1TgRvYaVWTvP9U9WEVHA87eJMfcJnp1by6K5yx9GNVrZbbqMpyg6GKbNCGYz8yF173XctuXLufeDz3oz69nJZ",
  "key9": "5x8gx82XVF3nLGSRZKavVy4YgUtA6bf9fdKD1JCTRcgUeV3fMw8YqqGf1MDSeFrZb8sHRv62Vx9eQzNXJNwd7GWw",
  "key10": "nMhAQq85mxVqx8YrDYhEdAnAuxJQTZf7e6Q2fHwc4kVfADwyWG991auj3HvSqii4yZvALmU1wgA7i8Jhx6w6VPn",
  "key11": "4n8CzANFeFHR4eBupTmCVXGZ6SUVqsQ83vhM7skmHGALN9szT5xwz73V8ormvyrXP4tkeSPRVt5p1AYf3YVz6igC",
  "key12": "4GK9wkbbYFGcFmUDXPc8NdF2srXNMFES462W1nNM5dAE2fYJeBC5RqqbveaZ5tY1P3f11dC6rLJmnfRsU31R7Vdg",
  "key13": "5M54doHsdiryFKwfw8zxZ4wox9xRVdJRzqSmfPDhXC5Pt2U6BsmA7XzKCX1sjQyarkj2sA2KBA1XCerwvNmxg2ME",
  "key14": "22tQvkRsB4sn5vfiVYdBsgn85zNCcu9n1KEvRR9KsH5LHuycuZBBMuv7oJ7xPEC1Ry4vKG1FZifqMnx3bGvAV6sw",
  "key15": "4gsa1oSf1viU76UvB9Qvft2GhM9UokvLCkuxuwxzLaCioHkTWMt2RG9ceQi5ANoryzDYKMHmBB2dJMT3Byx6oAWu",
  "key16": "forwUJZomQuLFkKjfHMgZy3eYgX9Zi4ar1fEyMDiLuNcGMxMGKpvJziC9u31kdjvMZdxX5ndQFWzJdVffmycocA",
  "key17": "5yU4LXifLZpBhtVLjvJKhNTccHr45QddnJoxs794PH9LFVPdsfvuacgJhVEb4vYTKfJf7SfwM1ku8tzR8j7YQBi3",
  "key18": "4NzUkgAPLTdgB5LGTdBCPphL3JDvhbjmxJ9fPDjDkofRFFhFMw1thx4WeYjFFtZ8TYFn3nVPNrm3RvpoiXKymvz3",
  "key19": "5bSrL6YkxPsZuh6FjAfJVdHgxMrrX9PP5GNdmgx7DJVS27CBj3s3kRxVw4Vir9aSciBgrWkPeh9LyUtGBcSMyEZ5",
  "key20": "2STEmt92TCm4gUBjqPRUwiP64AynSdMD6bE7CVkjFjZDSKGKrSMbZUJRZnsN7YnDoVfwfw7keNHoSwG9jTcwE1h4",
  "key21": "2ucwTxaDmpNrRUssHGiZfiZqyAbuEEPnkHukkJuG8gjFkDEL1K5cSQpGhyeCrJskmWU8umCUobUQShEx1jtFe63d",
  "key22": "2vQ2x3LSeA75dmg1qmeyWW9ddP36UScJfEyqT8gFunC9vNHKHVTwvyw4ZmduijybKgAjsXntDNT4cfgNP2KbkpJ6",
  "key23": "52Xb2TxXJvUxGaXkCiJ1KVUjDAnRSt3yKMyidMg28KbwsJTHpVAvXRFz6JaWiacU7oViovDU2rpFK2CVjPAxVbSb",
  "key24": "63TBg1Xnn2LfQxVrMoVsN3xjPfZ4j9yU9PNeAZJaBfKdtsrBG6DxTkRvn9GMqmYnMwHiiMpDZeLMn9T1veBgvZTg",
  "key25": "57KspWSVGwsub4RpxyWAwTGt3PYUnjeJtN8pse1Jsny5Q8Sy7j46vBHdLTvt9YVtsLLXG4B2ESMF2sERvaqAc8dP",
  "key26": "34biitzfipsGeHumeVKKBLxkFwkKK61w36pFZZmGoC5kNZUiZassg4KnXGpDr19ZA8UcTbnbLny7XtYi13gHExfY",
  "key27": "5jQqQp2Jwga51ABQPtV8w9SycNBJchnHd682u19DgzCZ6M2Xj6dGfKDBYAEB9wyUhYgibdnAzVsTpH33ia3M6E8",
  "key28": "ajTr8feuYCsR4Ur3Eeou2B8dbnm4RqBNAAK3AiVd2WKwZ95Upa7BHdLqNBvwpS2eY8BLARZ971vHPZBdrQ1Xz1B",
  "key29": "5fJFqhLu5FAojTQ1Xj9beVJs2ieUfaSkeitqUG2TSsQ1KzmPMpj2LowgexY9oZvkb4Ryjngn15wQdEQhbYFWX5n8",
  "key30": "3ogGqsvjCgQn2EvFZS3mDDC9zFnJkLsiih37ksAXyQbBZmNKimnN9f38DMcSoSmfrNNWYWsBL5sjV62zyS7Qd5tL",
  "key31": "3W5x4ffQh4yyh9JdgncGacFVx5dhtRj8kMqrwiEMrYT9Nm4aMF8yjaAdJD4Qa168AAiWxid8RzznNj6pH5oCqRJB",
  "key32": "4DVRAsHYa8j9BR891eDENbsELHkiFRyETE1LfT39Lx7XrUdVDQwsHM6FqLKNFwJEWwmzRX4a2aFYhYCZXGMtLQVg",
  "key33": "5a2KWNoECDotCnBJsv7BLnykGhUw2GvsQPp7oRXqNZ6ikXpmrPeiS5EiSn6yFhp8FZBXu2bqG1cnRhfgXRgaAXGr",
  "key34": "59zaBJDGRtxhiSiDoVvSwGTqG7zZrdJzMfSiKCs1nkkcYgYoKeDqDn9bao56ErCDZ9CzQXotrBfLre9ErwxaomWE",
  "key35": "4JLxRZ63gGGqZrij5LwJFBP2sDNKKcCNEAGGq3qfPwDAojpJZ4pjgYJEk9dsTrv9jrY51yGqWdnbkbx4XdQ52q2Q"
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
