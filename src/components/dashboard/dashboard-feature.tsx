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
    "92xzgrP1Wsro6GVxrkw334fahRFz9BmuREvkK7NFSAY8WhPRazfyr1QWxrVtze5K15jHspZxg3n8cqRKEsFDs1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLfVr3LtST5wmot6ZARvToLe2qNMn6GFH5hUGn1o38heV4Nnd4HXHNwGeSKszRETC9vrrnXQMBrofs1zq7osV3F",
  "key1": "51nVhjBDLyjgFDrQ297Znjj4tzeC535BGPTTW6S8bFWCyniRaewsVQokFt2Bkuaxq2ScUu1SCT3NrsqcU6abDq8",
  "key2": "4qr272s8nyNTHV72aDhEzyevKM6eguv4red5Cqw7ZStM2BzabnFbtHKeLhsfgExfqi7TZYc5s6MeTHEmQSDgrEc7",
  "key3": "Fa24hmj525xKTQcYVpmP2fCHobhn1E1NXKKkz6R1dsTqH7E6X3GsinWeUqRqnSiaH7enqjUqP1JYeUeCj1WacGd",
  "key4": "3ZuiceogyDoGEh1daeTZzsWKViyRxEyD3fmNVTKipb5CgaXK8qtJahMnfXD7pSQU44vsZRXopp5GqSaKkgtWhusJ",
  "key5": "Hvemj5W5KwttUgAR4gRXMLXBqT86zRok8QL9fmx2WRZ6T2sjrdeHLCDCPJKcHKtkYDmZXxcMfbiMF7qPeogd85m",
  "key6": "3Q6rnxoDGruZJx99ajKSU8ZRgS3pvrZGph5rhdYJUbke5odx8DmdsuA1zYJECYExEHozo5dEEuq43DfaV4sh7eox",
  "key7": "5z8FjnHLUdoL3KdGqjQVstWR7rfVP8AAXMmxTL5P4Ygh1v2t1yHJGtsxyyvWbC5KXUdCJ9XMmVt3qGWTxe5XDvg1",
  "key8": "TNG5rvHJqqb4byi3pYtT55x27KwnHNTc1b5ERCvQHZ7WhtsV6XVvWsCC5jvJH8YpA7cvFDKk8wdU4b1HEH4skCw",
  "key9": "4XcjUzGGzHFfWTXLhd3smNS1fJrjJs5et7qmBiz7YfWdQUJE8PddvzMVQZHAUfYGenoRd7pv8cALbLbfyoFsPKhP",
  "key10": "2Ar6KrhZA3KRH5Ed1gdWupy3dG9vBx4dTQs1jcmZBS9Sdk8T2bgY9tcLXZ97ovuBAunwP9XfkSXAXtonDnSw2A5J",
  "key11": "5b8k58B6bX38jrphwH3t6KECPpxtpNG51yFD9qAAWCssxatqohLKJV8U85hDSyujiNePc8xz822cmjdJgmQhRvmX",
  "key12": "AJy8bkWmTYjsC4VXXbaJVUZTCv11tMETXWm2BLLUhCHJvzyheGg5NnJUrgC4ZBn4xmAe297qKXLUrPY9AwdXsVT",
  "key13": "ayuP9JJGHi2DVgVEBLxNPK3rmwCXsTX6kykWhfJ8SvFtzWyytj3UpXGPmtghnawBXrxaodsULfP2d8NrtkFtnnV",
  "key14": "4oHH18BwvwwaBLM27LjSxA4eAUwSfbse6USCZ8pUQtEo8GuscqXnHnLoc2sJsBcvMKQWwJUzg3NAe1G298rAq7Zb",
  "key15": "2grwNcFsh2Y4DBHLxBejehwJf4vis3pTFUVGbqU2QTCcphDEnerH8NxLZSdmKob5SqvzMTNWNMaFPFSCKHqzTMZL",
  "key16": "4gA1U2PCVgawW8MtnyCTXqvwjdpjEfJVRiX9PUb2mNKLvCai6DBmRLBhGVTx1NnuvQtTjx6tVrYsAsZ9FWhfMX6j",
  "key17": "M2qesQX9ycbXFQLyTBnSgzhYW72gYkTfr3LCwtQoTXDwG3s8aa7q7Un4CX3egp9JMuXGBXmEB8x9tNcaj35UkLm",
  "key18": "4Ppcu8MYaABovtJpUivrxK6iA4rYeYKtrSCxrpMKxWjWvVhVJFFgJd3cqGQWCEHda44YENWptbo5DLMnxZkJYnBf",
  "key19": "emRwP3C2EiXfRRzTXw4iHbTfWdQfzymkatmbqyzD8CiJkbGL9QjvjcXiYDHCQWuVg9Y8vc6SpUD1xqZoGLF84Pn",
  "key20": "3XCiFha6755prfFx1t9DJHKTVDcp6QEA3Q3Kqmv5oy1d7LMj5kthbZnPLWwHbfxjbBEoPiGfAbXqiSFHuWL61mK1",
  "key21": "2adN9jKBtjjKpHZW2qqDb1VsGR4xiHxGa8DsdJQVn38GBcHXDDfk58P8pSoAq3Ddw3hgzftGPorMttinXqdewbw3",
  "key22": "3JnPbZsEg4f8dJZVv3z8T6GMTmHwDoDcqhnbCkALAn8nSdsLSnjzqNchYqZgfY1Wr5qmdrdJVnuc4RLgtXBTv2T8",
  "key23": "kx4g21TFmxhCWnHNEAcWtfCxUZNJdTnBoyN8dzbrkmrdmbiU7evibLqQQDrSaCFYRHLibyqunWDtRmZNCmKnMWK",
  "key24": "5oEJLh1b4FFMyoUwMtdrAXUBWDJyL7J4nncUNnhKuLPqBTgRaPpTWwNofgZxFMaMPTDr4C5WazzPUBoKq73vT7s",
  "key25": "4WJYob3cKpoXmzKwiXJYrXvzCMdfhjqfQ4gZHfbMmTpTzoZLBDwFXmyZBKsZnfqK3NSXga7An8hiBpPCnZ36shXr",
  "key26": "5qCs46gKTJEzpYs2XaePiSghuQUVWVWUTcXmoZ8fYTH8i9oR7ycdQzGKts2iwdMry2Higto84EtZ6Mmhh7F5W1MA",
  "key27": "jLTmLBktoLyoLKVNcyKXwUzQFLfVQZmnNECQH8nA1RxBkgYjYrHgy1k76yzZXYC6D4ZdSF9cqN3kLQnfVTVW7uC",
  "key28": "4z3TZ5L8cSGW5MF4QcyAhCGCQ3nermuvy4Dykn9eR6JaEnWQHZNsY8LDd58bUKep3YvUxcBVAfNyrM7RS7ChgX4w",
  "key29": "54MwsVxNu4jV2qsMH4EcpqCMfoPCBoGcpyP9Hfbi99MBUbutiEDxp76yP3MaBKKvYCbnTSN8anSpburMLLJAse93",
  "key30": "2qBmFmHLBABDaYnhxohXkwZZQV9B8kY9s28Qwas1EwsFAxkNKXWqRucccWJ1yZcDe1xD9dxPqKAcWzCjom8r1Xy1",
  "key31": "42rGE9xBXy4TYKvVF4Lc6d9SZn9k8SwkyF6WMKfJfmvs2MykqArbbZ7QymUM2AK1Dqm4hCDJ8hReeiw4pWdv7jnX",
  "key32": "4KYL1NCyaLaECNb17b2JPrFXMNTU6ajFUgakcaMvjW6nAshg7um7yCtN4duigkK3B8AsWqbSyXJPLzxEdzV8rumJ",
  "key33": "31SkYSiFwNHRRFu5gsvPU8fUT6goALUXhxvnoT6b8pTYXZZ4LQb9i8oNYVZScGX743E2stG7FvHMzMmU9VHUwd22",
  "key34": "3jxRAStVmQCAerXBRkHDY4JaDoEpGydhdx5RTFCjN78JePHxPmxpL5SKcNhSYbRdmvK26aE8Myuxt7ajnujSCP3Q",
  "key35": "52h8fo1NnWVFA7ENVMrdskgVcqgc4dvYVDTpWLDjoyJmgwBsnaYHiFKwiPuaemaG8hzX9aRkvyhezyyDoNnnrULC",
  "key36": "46xq7sv2zcCfvfY2eVTsgz33wywEY9bogpR9ZcKVUrS8ivJnTcUvsXUC9iuPWyoBqyWR2Ho46SPUK789re6Q7f62",
  "key37": "5d94abL5LAjT4bSPZohzCD5Bo2itteNpvx5hqo7jFhmXeMa9xLEo4VtmcpS7Um1FB1aR11K3Xph6Rs5VNiRzrGaW",
  "key38": "54in5RbouvNrSkkdt3ctVEhcM2iR4Yhz3CmZAabDEZWA2hyBy8UJETS4LEjXiB7EK3Ub4jQ4n4rEUuaNUKmcfBrL",
  "key39": "T4AgqkbzZkEoFF2GGr7XCPNjnZ1q233xqNGsSHH9TsWntyyxRaduM2Hf4FSqPGUh6z6e828gp72UgVqkyLu5NnD",
  "key40": "33Ycg4K3zj5XCjj5QUWxZcqoj9LsvsVEk9GV7VF6rPV2uDt8bvL7cTD6egCKYS2WgCg58SX9vCfkEn24n1dtaaTz",
  "key41": "q7c5yMrZ54WRhZkUAwhXCHZ2BYXwx2kCqASAreSupCdtXqD57AWNsHWhhi52UBWxaLj1m258qKo2knHW6msGrp7",
  "key42": "4syZAbAxWhc3rK1fMEFKfVAWSq8fghTPBa2rEhCRwb4uaoVnoAuUnMUgAALwvVfcAXqmzWi7wGLgeq5sXRo34TaM",
  "key43": "4osTw5j8nH3KVetfrBf91ebfKbZhp5Dmpzh4VVyBWngLHdkgYkfHJSNzU64HRFXztXXddNQ6Qi2wxP4DSLWmnAsm",
  "key44": "4dZhaDjmHhc7zxVFAJYvNd5gErCL1QXTNEdJrmpFdQXZvAyafbU3QbeoUDUVXp2G4PtNFhfqBFmUJNdEJEQhJQeQ",
  "key45": "3WcxMD6mTLzyYo3diqqtvtKnuVQX1xAZTKHKMb4w1A6A58cVQggXK9aLCNb73AXpffnYnDDjpfFUj7jhF51ob9Wo",
  "key46": "31wXAaxrjmfkfGvQxsqgxMZ6Gfr4Fpu6VzqMTPSUrXtLxAkjeaQkVNELRJKPmx56oVV4AQWVQpLYUnuA4D5SVoLu",
  "key47": "2jD8cZ4csEq33kHZ9nsc2Gcb52tsGHkspsbLNfzW9efetTwdqUCnhqodFvN8KXmUA6ymZJ2bpTeh755FooaxuxJi",
  "key48": "3HyY9rMEkEyDxbUPobcEWfPZLfxjos6yyuqYz1pQsxJTTWDSCctrF96pFvjLbhAqo4yjM6QUcF5ZGbRQMJhdG9pM",
  "key49": "3FBcgF1Ki7fUmnwDWZ5dafPZ5D8Hp1H1HArz1X1pA2qDr8BJrfD9bGKxtAu64nG93URJAcjPxtyT1GVXRCpfbaMQ"
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
