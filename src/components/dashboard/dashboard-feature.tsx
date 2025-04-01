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
    "5Mho2jXC1Sy5MsGDWU7VEjk5N2Xas7pPnXw3NZGsdxtriPccJz7rKmbRB6SqMp7cuEs13hTF5CUTFBzv3kqfQWxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CiCSg6YK6iV5kWAZvGSPP6ZPFGJU88miJkD78VQ75iSGZZhBVpzmECwYs6SWkoM4i213zfLHcM9mLN9DYtwqxpN",
  "key1": "9t4wv9qHdmBwcCeGADot18HtsijGDMnGQ4tjteGZvPNTopbnkk3uPYERgykbt9ZRjzhnNBAjv5aATxPYMVNUjYH",
  "key2": "F5TL211UzvfHbqcgc947VNZMtDpMrbyJYu6vobJzDUqeEHHSCkzL6fj6sfj37EnM2chZyunvSU2dc8aEMsSTLys",
  "key3": "TXJEYqmhKxD3wfxnMs5GJSs5JgAt4SXsECezUfXxDGBr8dWtTzct6GaXTdGgSwThjsN81LitPALtkXsb1itXKPy",
  "key4": "2cuwz7i4j3qRFTZni2Q1QyUNQLXzeaQp3ncniJyCj1Q5SaGxorsXsU86qw6gevRQ8BcQS9vGcaEL4Fw3TS4wma1",
  "key5": "5uzM94pzc5Zg4VAdrH52Wx8Gk1ypAKPn3ry3fjBMgKkHwevkJanXhzNont13aDeTjEH5i3xQyv8UGYGhXGtWaQ4y",
  "key6": "YYLwHZY2FCRZ4MeCp8kro1bukEdjoM1JDaF4rHefzd27pDTz2z3SkUA8SkuCgtEe6uJHSk3zwGqr2j2RH6VZUa8",
  "key7": "4RXNd7a4cVr9ngjZZAPS7fiNKgQ7Cefku7dQ5aEaG7nNmsZRYyDA6LmrC1Vj6bDx12tpbTdoPkBtNNDXxS2KNYRQ",
  "key8": "2dtHu7wAXaPkzo2mZ8yQHjBFTzuFGnHJH73quhZzcXQ4tg7BBJaAqN8rQiKm9FmvEvp9rNKdk79ZE1tSPpRJbPYz",
  "key9": "3P3wNRTvQwmMYoHZQCpvWhHNmT1Qt1GnUP6BsvFK3K7w8LL1jEQmfaVwXrftocSpyVCaq3Tb557KzCghGaT4JorX",
  "key10": "3NMPTeibfezbLAqSZu6vGqte7AY1uCfkxgP53eWfUVjszxB8pws1f4c3STHCsk1BuyE5gYiMgwiuNkAB8NnFD1MD",
  "key11": "24uYKbx7a12EdHpw1Gn47mA67p99MTGnHj7K1MmUsyZcjAZMw3RCCnnDMwV8zG3uQMTqcSBpoWNfbvqUkA3Myof4",
  "key12": "5jm5dbQxpb6mPVwGiEQPA9iGshjbWvov9xBincWLLfTigVQKrXx51NZS8bhbpH42gqtv1dK8T9BQNbsa8XCAifLz",
  "key13": "41HLAzJLbyUr2ETwKzG2GnhASQt5HgUafLxkEQRCjWEY9hZ4wsLSg5cfZoz5uaf1E3GmLZaY4DFE3rDjLpEhbBEr",
  "key14": "25xc8hesHeV2oMSShWbYGSFAzcHiweo29CHuQvkY6PYnVAajpydz9AcLf7H9E3rmJoaVriaNrijmrmKTHtpSFGVV",
  "key15": "4mUWF32LfTKNTzNj4nejTNzJNjngMV34ZDK27zzSw8QR2RGTM1YcM38K3istRTwNXeYvKWo2drrLCd1RkPG1iiKs",
  "key16": "5F5bPneUyJ6SE7y2aeAB1jZm2iTeqNqKb8by3SK3Hp8Y2VB2JDmNUmhLQi9KmyyAEejjckgQomnjsH72dpweW2bd",
  "key17": "65HuFfL4xyaTE3mXCWPavqgZXgJGqzYTooPyjmML2qu5AhYSVjumWEATHGs2Cmz9sFa4JNhciKkEKhnGDghmpZG",
  "key18": "4zkyzpiFiiXHfS3yqusonHbeqeF9JHMVd3M3eu1nCssnmdkWHDXTAgQHjuzX9bRUb9swhrbX9kiaNxNw8gU6sDSS",
  "key19": "2hbjRVAKMeg4reDtfkqYFyAdxNWiG41zZRAKMzkBApBXispJoTd5QNZNrhF5xBHrZzHYcc1dRSTpeTztb4AokiMP",
  "key20": "38Zs2r6m5ie2k1z7BZ97hqT9z7Jns1v16c3x7dXxG797ugiVEefpRLK6HUBMcf9Pj9yc9j5QznaRn9rzQNCAKcqc",
  "key21": "4GhxiBA2Wuavn6zMPfxo6o4XQgiz7JwUqso8vyREJW4q1gNhRkFxMHK1jtCVddfXna7YzxzoZWF7fgowekRVcYjG",
  "key22": "4N69x8LX5iNofZH8FsJDfMA7puMXy8VNyEvz2nWmFm4tn5i2Lx23HSdmKnRpuRmxo8KTZmZ2nTjp8x7D1V9PPenE",
  "key23": "25g5kD6mhhwp45dHdzRyarsojgyeVcxNyyAUTiS54HvH5buLyZoiV1ABBKHodNVMMymuRbn7D9JobQeNSN6G517N",
  "key24": "tqQrkXxGhbPmECiTWbdfChksxJo9mCUjtiRsFibXycbh1PNPHYn1TKwVyv1VoxfpinqbvKdzaSstRdnddGmjaZp",
  "key25": "iW5xp1aimQQfhnco8QxbrqJycYPrfybVyYJTxpqvXDoPEtYZrfou9ZundYdCgUNxxYH2vqwPuH4fEo4rCDEVJm3",
  "key26": "3cckWdcYqtxrzWpYjzGrvhQex4aXah1jeYqBFkAL9hpAM3PaW5KPPJt2quNbNPRTXw9XtZNzLetwysUrbQ6bBPWJ",
  "key27": "3iUmSA12qYg4ikravjVeZncVV7NtNNFDez1a8nbCjKQDJBUarxjJZpoBeKmjCT78wDJnXTy3J35wSQX9YDxssNa4",
  "key28": "5j2e3wYMkahBFq5Q5bai6dwQ6C5raeR6ryPegNwwH5F9SnQmPqRNJev4TrRx3Md7FpTQU5nrzdyBuwLxz9so9c93"
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
