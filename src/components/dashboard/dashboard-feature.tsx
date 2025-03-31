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
    "rEgiaS338mWyDG9PEc6jaiHAAMA27v6NpJH5WUT3aksDX4UMDkVpLYVbJM89SecWBGHVWxw2C2gBct53MqVQB5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FQdSCbofX6CucQPE2LA8hfJpnhXKQ47nRJz5zZHZATtwpX9V5pDmRDPKW1yg2HnbZRqMBc81tS3tKxQGACd3EXS",
  "key1": "qsE4WiVZ1FkZKbZaNsWn2LrJmqv6jPDpsZwzQKY2mCFL6oQXuRojDFJM1nXEBPV1UF37DEBhFQDnk4PdGU9Y5Ej",
  "key2": "3DMLBXfMXnYbEt7ih7ncjRMomGvqBgPmUDjN8NP88UfQJ3r2Eo4kP8icsETknWJzZa2tYyZwT5toAGL8KqdUbRmo",
  "key3": "4R8zq2BtgKayRVmvxbHV45zU5GfwkgaCDJUrsrMscJQxw58Mh26tfE8k5Yc7zasWhp3QHUikKo9SoEy5LYZPfL37",
  "key4": "Sh2sEbVfAKVrRy9rBZdtWVUt6pD6rx4sUR6inRUh5V6oXDVqYWR6gs19SqKKqu6ufWYbxnNfFCSYh57az1t5R8w",
  "key5": "AwvVzV3pBxvieuBUB6Y95FP7zJwFbvBoXSk9bQk4nYyjFv87X7ieuRPQt8vKxts7GcZRY1GG43HVuer3E33Ruy7",
  "key6": "2TR4bfSAEacbWX4nau3uzXdcghwxFNmcbfP8CuXVsU2XkG8MiiKDcZULddAVX4D43bPHW88Gyx2rA6CcotY2JX9A",
  "key7": "2Ynwr2Q169Gg53qqxjo1DcWL71z7QuPzogmuFW11bLaMt7Vka11KzxRhyeGhWHRjRvfmQw2Emrjmk13jjhZeiXZe",
  "key8": "42YfECPHBHPU8ZVZYZ8CmptgfpSBN4r7bmbV97T7i5kjYCGoPZuzucYzrabGxfHRf17K578CufQqQXWfy9AYXanx",
  "key9": "4QLfVRjez61H7j88NEePFepgjHpsUU8VV7WGMh7bxwF4HKnriLmqXQyJBCDztaJcKKiuQ2MSxfvUr8wYT3YY2K6w",
  "key10": "4GUEkBsoqHRKeoFkdBXTvoEo8AdkQaLBva9MkrU2P5p9eLQoLPfcwj4zccQUCo4HJzRF6Lmw1uE6iKQDK2NMVF1c",
  "key11": "3ehmAL9QRTtkphQnbn9q8xMLRDQj8a3ZSshBJ16AGUFvsvHUMTGFPp6cm7wt8iEQVaDwV5S5toDmoJJJkYQQvqoD",
  "key12": "586sakYhTzdAMFojgxh5UPNatT7zQj3nAgi7tYvNVyi4z9621TP63drP6zPbp1n1tKHiSDRJmqb5TEfeyU4Hp5hD",
  "key13": "6Mx2BByr7jWFMfyiUWLjW27aKLoUtJyCtFVuRac9FNKGPrvuZUKFn9y9oMSB1AXL51y19ZDRsbkwVsUB5YK6BYz",
  "key14": "pa17QmyqyNzv3oBsyWiYndsHidCaNoZomCSUaJmhAz2pBAiMxdxQQhxMkeTY9za19SRGmmvCdzTKWydXRpgK2o3",
  "key15": "5uc5jcPiJcgNKYsdKrhrwjcen3DBM3dAKSN6mK5vRHR3YghEZY8LNx5ft5wT9sFhMThqA6nQRwpZyRWkyqwzQs8d",
  "key16": "3dJN7nbys744KNbgZPY3tmiJCt3jrkNmwkqdjwE5FBYDgS9GxMqxNRa8MH1RMJyvE6J4Pna4oK1rnfpn1FTbhrho",
  "key17": "3wjKQpZ5wLGKJp5zAUR8aH9wsZbDbUCbDGTQsh6WMkFpzMSDAfAf4DYGjpk77HF9J5mnU9WHgCBS6LowsqAGySbW",
  "key18": "5tTvHWSVUkoKUv41SDr6oEW1d9QyPJx55vrhKgY9DLL7habMFWPmwJtumqFfp52gahUSThd7q8dLCYtf4XH2ExCF",
  "key19": "3xiTyZtX6JPJVDjetDhd3LEnRQWUpLrgFHVwyjDNxokC4jmjJXgsH4tJiBeJtiKN1DQisvRiewkrSU4vwbuqBUE4",
  "key20": "3ncyx97oXKeudWmrrKBocQJznRWPbTopeaxy2MRZFy9975m3CjAhFNrUhGLAjbnJps6KetMH1yzEZjfmgY69Z5EL",
  "key21": "4WCmVANNQq9AmnKDe6toxtbSTzHBioUAik56oyKyWFKLXVF4b524yA7TF4BxJ4b8u7ptoX6ZBKqVRoFjDFhMSSLH",
  "key22": "nd9LDWhLQ3xi5XKjcYMaxmCpwQEzyctjjQynMhhN23Pf3JpA8KELEHSad4Wh5kFZjzfzLyt72Gf2fsfTECYQ1bS",
  "key23": "3e2gA6PbNwrGb8pRdyfyf9hdb4i73kupcUx6YTdFnvRkcMoHptUXz4Sfnit9EQpB2Gtu44oeiQ99sEP1eq9RGpaG",
  "key24": "4ikcSbDBbVS4kVeMCwuYXpRYAk3Xinn5vfHKex4CGqYTJPBhj1edVpW6CuDV2UdUyZyepcpDKQd1AkQrdC8VhAHS",
  "key25": "ooMVwHk4CcbobHkY2j2ZNeTUAnCE2kdDkLWpadPSRoidsr2bE4WYQJzD43WdxAwCQ2PYSG2YrC1D9ufUQ4m4PQi",
  "key26": "26Br424WCDnY5stoJDiyyWYuK4gMH3K9YvgkZgoJ1CBNDJrByvFoqbq7ruMRn73cahD7tmGR8JGrkXbLcEHe21T6",
  "key27": "ysk9hrAxPfNJFf27gmDhsAEXkzvgCn6BdxVFnsr5kCpKTVDsqXzGrVrdVcAxBj3kXgtZsc2yeFiVa1yHHA9KSLc",
  "key28": "3mcZxBh6Dauyc9zcBvgeBRuWE7kHcPAwxTRC3TF4ftDU9v3xHqHTNjhSU4Q2k598PquQ5RMD2BRThQjhUKbE7GKG",
  "key29": "HREBZFhU4gUMG8gcsz9qR2SBRNfrq6JEvhdZbxZY9CHpf1myXn3PvzM9c9tbVzKmb4QSMfdsrMMDMveAEwZwWcK",
  "key30": "4fZF3gWx6bANrKwXURdViyUFyBT9564TfqT4GvGjX6XmMfAK195jV6tParxy83CQidjUe2M4iTZX3JYHt4nmSqYo",
  "key31": "4tUBJVzNF6Hdr8gUBoxEX59hyfZYFvBXJsHTi29pNr1rNGaF97K52W1juhhrXJCdNnUUcAqyPUPW1yLSWexwcZSz",
  "key32": "3Vedae2Z8GHCJxHYCtQXfboGsTioaTg5hkDETAxBjt3ByWMGUF6aBvvdyvNTcsFhzXNt93p6sPRtfQXLGXq7B6Zy",
  "key33": "ZEcPXFuXSruvxrrkoHqnzSxWJFdG2Sa9n4rbKWBiy5P57sR38HSrFdFvKHUcKFfS6SWNMUaZtMqsUnpthvkLVmD",
  "key34": "3uLJc5Zz8feBYCZzHFuqfxUMbBcvAG1Z1V2s5YahiQFDJ5GzSK4ZwsvVPQ78cKApUJ6N8b5duMMyhm8L1PDCppEc",
  "key35": "adT5pDoEyx75R4NaLktQiLWBgzmdzSsjCkMe8pDprBztPwxoJB1e4YU8rP8Rna2Ajps26QK4Dko2rR8bd1Yh7xi"
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
