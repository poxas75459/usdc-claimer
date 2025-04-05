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
    "3Xx1TtZ9buRfnck4vFMR8324KKHNEAid9RTCYBp6A7wSofLD4ApvzwFbN4q6DU36UqYiSGZqsjRHh7JftvajDuyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dRXxqGYe97qJD5Atcijmw626gvKed1B6CQVJchpXhoFh1doXVLkiBEuMkpGzoH8iiaBDMG8PoLZnPXxMZyvPU5z",
  "key1": "63PmdCULR6i2dEaDTtmnjsf8g6VLUiyVRVnHfEGPxb5iqRMgbVddzCFt9zi8L9DLHKGVL8Rcdh4zPDoPyRPvvcHN",
  "key2": "5Gi129E5hhv6iFTEnSzfUNFT12hcnGPSnMEngtgoybbveQAV9rtp1LtEF3dXchma8WhU4Ak66X3NrxES3grF9zJS",
  "key3": "2as9jnXrFPFfVXrWKfqGnmCq6vKYjgCDGtBKwJtxqVU2jq8ZkNg3hdkwdKDwiaxs2ERUSzt6KSFYxwo2HPUJrbKW",
  "key4": "5chFE3y6REuRyfLEXXG2pnTXszGZwkDtaRqfKhgSWFbNJvCni4aTeWwR8w9WLzpty5fabkwEtdfi4b5RjDEqZCVZ",
  "key5": "5UMKQNYvsEaKvJHRyovr4KdqUmKaWaKjNkcaYYjJwiM4D2R17vcTnXAYoMFUta4RTtUX7mV4Bjabw1SqrZg2d8Pv",
  "key6": "GzoPTGzREZ8fk3NYaPsvHb81Z8xXX5gtrNwzXi2HKWTT6Ru5svdqSHmcqPZsKEvzeHMu4dxbGki7oXvVf2LEg3Z",
  "key7": "PBXFXqhqWBqE59JpxNvoTFyHFGqmkN8Fac86EZTN3ru8a3QWdkoFstNWFZuZs5XxZH39iMeFPxjjJZVfYPXCvjG",
  "key8": "D3JCPLqwyq7KJTU63qK5vZmzyCejCmS28eKB3ymWmdfUunNHq8LLw5iEXDXrjB12669ak8r1Gk4u5s3gVXF9cUY",
  "key9": "4xec9iWgFXQ7aaxDC298QEypqSkM1HKeYdHMVuwHLpAj9mZwt3bmqekfLM1FVj6RrFAMaZLjojnCN7xhGdPcPMBz",
  "key10": "2exzTZkCbNLhQ2E9WhrxVGx9MJUKRxHhH3uxpgbaRi9oDx8fyjydjoZADTUGzU7dEoF2y695ndVMNZQvnn7UvRCB",
  "key11": "BN8bqrjDTLneGW8bZje18Bm1vigE7YFbRFvWGu4xD5ro3jkU3YHrzGHL2aEpR9BEqxdNquQGG7HH9Gcsy2LSrKM",
  "key12": "PgN38jVNFy77T4dmxEFwp4ApwPzwmqD8W2dtf85Qgy8w134kqKQqwCKwrv84KHCynXX8bBawoTqicsNxVHj5U3T",
  "key13": "5M3V49a1xw6fAfjg4MD3ipHvGNa14j9Qxa1M2trBE91e9GjPrso9Wb8xwYGLD6pnP1z8XeFXQb2SWxB3AWwRjA44",
  "key14": "36hXawBRDxo1PEyXBdXXoWY2sd7g2fTBRXxNeapxLJ4AqPdVSiFg1Wik1ocpPDn55JFUZk4Jwkhj8ZiB4oppLY6G",
  "key15": "3GrrfeeuQYJh85GfYp3s5qb8kDLedvmYczZyRE5DkmcDgqeinj8kfxt1r2KCYX7M39fvmK1qbuaSb2soxUj4XAMZ",
  "key16": "Rc9huEeT7VaUouY4FgY3ez5hPCbh7vbNihJ9Cj5ndKYcCBQ9WmkuwGDUASzckcAYXsnpMfeMSBZ6TpYzSpPXxxk",
  "key17": "4yu26uC4wjBj17JZWVhPZrBVqE1fVd9uHUZJmoz8pDLuyz4d2EFMRzn8R4G1nHXfEVusSbEmEP7gLSEWyNsbYMgz",
  "key18": "2pBGXZAtAhU2hW9hSaDLx8DZyHYD6Ng13YF3oqXu5U4FHtEXNpA21NMpwrGCXcPtyds7krxfrkEUm74ww8RL2aWj",
  "key19": "EyDVKwcUqb8JuC5p9SCW64HjBaEpGDPR1Dty6yQSCPgLhYEUZADxvoWfw2ry99jufeb5hynBaxjB9BRy3a96zpe",
  "key20": "2Gd6TyTXvFSGyxgcrrBzCzwF2mYBC83RKZ25QVisbrJvmzEmouFovNs316Lvshxdb1gxmEuZ97fSdJBAhbs5d9Gu",
  "key21": "4Q3fU49s5TtrcJ8TZjCbYruC2bYvKYK3bAbCkU8VrPxkTCxySuC9s9FUEgZFpRVLGVmBrCGsoBsoBj47HnQ4jhN6",
  "key22": "3rjy47bBr4ofqQgqhs5hjcSunqw7TVStjCpya1CucYX6NzVjZDKVdkYxcHTTBsosSBF8fTkJmMmrfXstwQLPCemx",
  "key23": "4g3H3zhyrZhMrX64Et3DvAyfNhzYAhr9HdLySzLw8L2jbtxYvJiuVWVHUHTrGoomcsHAyHi1xfDwUR7ie2sDEsvG",
  "key24": "347hemkgKyJJrxDu9yDQdmc6JsVYcmNwWtHZ5K3vtqLZYeJ4Tdc1Tq9GudVcnYk4SA41iMMvRARwrQD8Cnf8LuyN",
  "key25": "1s9QTj7KWtiGn3fLuVi5KjG4zgmQ9WyQsGXZaL6Bbk7s3exsEt3s6pZmjZ7kTSUMHN6VDw6odQ5XEWmSc9WmqVr",
  "key26": "3k2k39Wn4uCKk8pE4ZVJweE7ZhCnibfU2UU1a1GPcJkWQRV99hCepLhD8stGsGbvnUsienajU4tsYK8HM1r1SLuL",
  "key27": "5uuxc51DgsVNsiC3TLNMoJ9Xu9UH2vfJQQyvoCxocU9magNqYU1MVLzGxbQYmCB8ifv1QnSRwNrpytRuoNKrVnUm",
  "key28": "3S8rnZmF3nS7ww9Af2XnBnJ4ayaQLW2XUuoAXMPWACDA514ix9yPqS7FMnqJxgJ3eL5KMpXffLs4zwGNNgt8S9fk",
  "key29": "5kziA9fso1TS6aNSXg48Wq7fnsMXzmBfV9XQm3KPHZ5NT3dxyKpN3ZJiD7e2MF4qaRzJpEYcoAar9utt8eggjScU",
  "key30": "3HzweEBX5LxCax21M2qqnA5RR2Nuh8JRqLgvZVFgyci4Y9uNNpPvF7YctUmWxeJ3PwcreawYb4k81gtKhZZYV8if",
  "key31": "2RPRqKVza1GuC1fU6GSeCeexEtiM4m6J3VZykFwgUSe7djqvYNXz6EbXXMbspVd6Ap66mSgXn7VmxjkPv67cjAUi"
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
