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
    "5MXgpdSR7jfXeNjc61SRFoaenZ7vMRHMeBKiTfvyz9nHsWYDgn4cT6QyEEtSLHBAoZ2r1dNKYknNoVp4Nw1uRo5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BghFsq5EvcYH74GtSnxmjTeihJa6M6KmEgCv7R4CdmAbE36aUd3qJBAQ4DYswvUa8a9vW2yCvihMS15RMNRBKxT",
  "key1": "2FMwtVrRqaTETpZ96kuPXqza778ooVto3DQtJupMPuNKQrfVYzH3dBv8EYZcn5X4Juz8QQbDrJwL5DK6YJ3sqRbW",
  "key2": "4Zpu9Vsn8xyEXU6cjGNAFXFve4CzLUY3YBPZ1wuvG32c3SzKJaQGMyeaZQSPWUiGWKmec28Cp686d8AfYA7K1Vnm",
  "key3": "3GWRBt2CFJ6cHppKKbwm7PhbwmH6ZXfLByHjHt8BuzCkBSBYkq1swJGk7RyW1DA2MU9Fv5NRdADKToMDRwQjFaEe",
  "key4": "3tQseNLdKNc2nYqzpsKp8voTz3hdQxFNkVFE6CteTadPmedeGHszoQ98hUi6X8CDdLqRmbkzvxsCPDWWz32hFiKb",
  "key5": "2tUCo28tixKGGZWvtHT2Wp2GvCMfrxjDqAM5uCVXb79A5oaat52hoLvq4SpWbdAGtK3fB7rvWaKHPso4ZVx1EcF",
  "key6": "5QPoutAtuzhzk7sDqYkMXHbnGZS3vp6wugMX9x6wWazjCrPFsZcwAAgmLQKBMuYYi8ur4GrnCzMRdsDMqQYKtEQC",
  "key7": "TR357nUAXGEhFoNRm6UZxxJRZBBxeokcTdCNaSBj7kD1jNY9pKGdWbZzyMSrNpkQeC2urMuHXuw1J9KMsZyfj9k",
  "key8": "2QAqF9jJWqbyGEuAUQrTCXMzKgQpwbKHMqxbbYffa1P4Ah8LTact7nkPdY8ARdY2QfFY4t3xaFyUPrmmVPJCVQVo",
  "key9": "4x8Z5EkTPNG1Ycy63fwuMY5XBpjkfi9rSxCKK7GvXdkCVjqACwTw6duujpWMDz4J2oLmJHUVLDpZXzEgdXj6V4JK",
  "key10": "Azt2qJG4aGQxwKyndJwvnkMmgJXenZza3tKkuMx6iC7k3rju75KGRNAAh7XJekj5wAkJby1cJbVz2HJxH5eT4KY",
  "key11": "vYDrJUhxC94QdGNFhUjwedYMrxCGF43HeRGQ4WEnk3BZf5QDuw1tnTizzmeac5coy6idfGaDvv3MR4iL6b6nxKB",
  "key12": "29dC4YSU15Yxv2KUdDMaSsv74r9m4BSoQGW5T7SNsKggY4TGJqHaUeJ7Y7KmPDzRVAcyJmMvPdvbUfyHsiPRsuAc",
  "key13": "4e54BmSNmm2t22pnmvhdRscJ7Jexvx7EKuHdXxya2Z9eB9GeD64pgckgQvAK6crTwB5uyusohCsCVoUTLiSQjAn7",
  "key14": "5EjNDweu87SHTvtksk2JC7MSwqZ8dsszwAtRbXFGWB7Hw1NeNbDwmcXMmWkMBW9GMA8XSkUFfGCsT8QLQ8TLmY8Z",
  "key15": "3smtRBxjMc6Jg8H6jaF5D6ZsHp2s3kD6qYUj4aRnqE9DPcTs4whyo47ZiUgGtaxSptSPpVCk8uB4wzp2v5fTGcmE",
  "key16": "XM335tJFpFSL77Mmjbw3BrzUheCPXr8JKximCSvgnFssdjC4zvRnwqM7PcXgKU4KTaR1P2C9c6kzaTSVJNzZDbz",
  "key17": "5hLLXMexNYzYhrrZ3Jk8g538ayuBN2WXrzvx6PZuGcBbv8wCe5nzgJHPsj4fVw6g5XvgTtgU99iMGw714daHJuAm",
  "key18": "5MhTeNK93KxMN8Bnp5sjcdsSsrwceYmxwRWa7wXoxbc52uZFSifypgiXCS74DgqPCovtzRfMjZuSCtjNT3rfYiPH",
  "key19": "3G2XJCcRF9esFEdWch4zNUCEiVnr4ZRsLcQKHpnfkGrXq13x9XgpTbXVfJmRcHQV3PTaDdwGxN2TSdzdh9WZN3Rt",
  "key20": "5C89hpjPbcp88ypKDSinMXf5WH3DmE2DdmZbcnqtYWZkT6JBpMJ6UFGutMtrPKASVuwaYB4vFtkbBQq2dEjBjVXE",
  "key21": "57XFoEwwCfe8PuA96E3UyDBMZ2gk6QwJgsJskwzXPFTmhzrmnT9ndeCNCfMMUGC46x9FaoDbzZmNEZ5JRebMtVvp",
  "key22": "4VucwpcVp7b9fdjrcAyeKBBFA7w3kxx9K99QpsBYrwPansxGvJWgHF2KXBLsscFrPAuzjsoLLGoQvFBfjASf8JJD",
  "key23": "5cjbmoFo9nxdrmFNuGnMBDz8qufbcekBP5YZYyrWsSkkZmyRNPQTW5UPsYTK4YBHWyoX6oAbwfXQ4xYfVREfsgSb",
  "key24": "4cT8fqog8iv41A76XzApVqiHKUqJXmNkJ3P4aMyibScPz3CDF49Rr8x5HWoudtbZjsYdyrLELNPpm7tLuwH9vPsp",
  "key25": "2nFH8qveysxo5SeHekXViT4mH3afEiDxtqpaAyvoPsBiNACBx6xm6cWnLtTzRt69aU2RkYqroo3D2iX3G3qmvM7q",
  "key26": "5QR3F5JLCf8Ba8JrXF3qMzbiMHxDuRAJBDdYthJrJcWomaGSL161by3H2xp54va8icgsqz7kYwyXmg9jLeXzsDT7",
  "key27": "5L7J5hXaMGxSH3aLnn3AFEvBq4MtVNMEsxUCKcH3vRSQzPYpVDjPvUU3L31cCFtSRfwMFzstrjZY9L23i61kZFZe",
  "key28": "4vp4ruTWnpwK2uaoxMqB8DVax9DMpaWdj7fyJV5wUtkiLidX5yGqquTX2o46S7ybMcBroSBciqBgu27AzaQqrfze",
  "key29": "3rZZ57iAPrWghH4VtCSavDUPpUzqn7uCB3Hq25iLT3sCgNggF9yHW151Nz9cKdbyCAJqY6GCUzCFrVtmHFwHgw9v",
  "key30": "2KLSPioXi5Z5V9MzaR1veLRCTuB4ehtrFxLdswZPnTvMwqJVYBSLoVpZfNApiAH6StBjTEUraor2jEBT7MSMggrt",
  "key31": "3iWvw2DJ3D8M51wpt8gujyVMEqoGrdQm8CGqs3KW7bC9SPETBR9uay4Huch1XY3gXhEoku69Eopj9mSrxGDD8pB3",
  "key32": "54r6iTxJu1rMpHcoFcGKxcj5G5mVv5af9ywQfR2oq5TP5EugAck22RJVMTFoyGs9yLQpdCDz5x1Nt4BdrkJXGsyv",
  "key33": "5ZyKnFf2YgawCpPBYy64g14FPZtj86y7C5GMMc2AQbyt3BUuXajjYHZ7Ts8cGbzcK1Vs91sP7kq4EDn35iJi2ZJj",
  "key34": "MbTU7YxaCERmDLBxENTBmXWGAZwCPs62XZmpCQX5m9ccdWixu5oH5vVF1oDkhR2eEQWrJswbKMbPE4K3fwXP8Wo",
  "key35": "3pzTqgc4Jpjgqvp53ife8asVAsXNmiQGTeotPzK7CM4DHEwwT89rMbuhFFjBSVdsA6Y962ZG27PPDgUue1oEmixx",
  "key36": "2jS2biDBZMBBfSPn3mzSJfTQ5SqjcJbPmZYYfrr7kuPGh2MKVLKGu1HGjF5jUjkomaDEif8DTHX4RTkXYPB3Ef2A",
  "key37": "3aMyx2fpLETyA8EUotkJrWmNp9Gfx1eQy9TRJvSLJSDHuMnWQ1vDtNmLLoRf9cbwNr8ASEXZKrxUChZsFLoDmduP",
  "key38": "5sde2QQzEXpWkQoycfgQjvzNutE1AH8JowGXHz7nop1TJAY4CKRdG62hzEdrEKgkHR45NVo1pLtLCAxtbLTmHVFX"
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
