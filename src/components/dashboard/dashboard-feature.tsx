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
    "bdob6ERXpoemxuKrMCSWzYMKsaCZN6GfFaeQPTKMmdgvRJcRze3mDE7CwB2W5eZwFBCkXJNb8JCTFRjH1sZLiQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39fDnR6yvbihS4hwk72nHv2PT84mAPvdGq3pEfnNgm5whjkykdRm2habZdeou9HoGvSCF2AwnFMz4QCjvvR36Qkg",
  "key1": "3UazX8xM1wDUoEWuoPF8pq4f8XpcMjYs9QYks1rKk923vMFjYC6uG3JwSbNiHLLdyTNmRCvvryiqBLvdHVAnid5J",
  "key2": "2Sn5VqJEfhnY6hGPCYU6TfVpqFEEwwWX4vST16qmcrgThiUqi6EMiJQymxmnusfW81vhCFmpSnq35AjHzj9BnS2n",
  "key3": "38Tt3sPZwELDR8tW5D6ogCtEnt4gKYhLfMrre1oGQZzjagE8tHtGQgqukU1exqPkLX4PzitYSd2epD3j8AGRiznx",
  "key4": "4juZrNwVrjbmxVJKbd8VEb6Bg9xY6L459vNQq5Zty9jhatsGuwExmKVhYH5JTiS6KzcQhmrroiCT2Kvd5PzvVEgw",
  "key5": "221meTEBQmXFH2egCXqNBErr11dNJjXF8aLALA8MxTXfWtxwhxjpYLKptErmZZccsTvFwhaqC6ecKNH2BQpkNoce",
  "key6": "2WEsgububB1jAAcRYu3MSDtHmJoFChBp2xjb26tEQApwGuivLERgvEaJ19Asrh9aPtXXWXDjQY814whFYnSTJN7y",
  "key7": "5EH5PFDo5xL2V7hhUKqKn6DniCitzNogQE3r9BYTYdxrEJq4gpiNoJMhWsEdNYGAtFTZDfMb1o3A6QpMzGDvunWG",
  "key8": "4EcEwUG2XohE1Db5pjkzVbhyjQ6HTScZuoGkQb8r2cwbLkMq5yBiNEr4eDdPs2sShcWnyP1c4RY2w7AG7kmNvemE",
  "key9": "2i89nP5nHJnhRw1CPb8ndSsJJZ9tmRTqUg3EsFw2xbKYEZquA9PRgt3kp3jdqFdJqrQUWk848r95eFi2Xv8dhFZ1",
  "key10": "3zNisXrrU3WSXMnTTZ53Xo4a94fWRmdbACLtrS1PMEKaDbBctZfsccWUb5FxeUYFr8Uy3JjQNF3Dzg9eNJnNpbAE",
  "key11": "3YLUpVZubBzeszUdzYEHnvXbPcTfu6S7mfJiTrFAiw3nynbJUVvbaPqXGLjKAC4NL5qv8Cn2fnn5JaN2t5HAPkEA",
  "key12": "5tcBDHeyXoiBRFESt59CVThigZriTPnDZoQBgtaSKhoAwmL66DiRvwqsgv1ayCXHercCDC9rEXqAocVZyWAsTF5A",
  "key13": "5BDSf7hXDsNvwxtAfqArZqDDH9JWLJ58oWJkAfLjZtaUYUzZiysq7KBhmVxTAnT9u3D9t5y1d3bCpJ2WCAcBnVQG",
  "key14": "2vuqNhsP8mx8vkKM4W7NvrNzsC5MQFDCsgZuT3Y1gDsaDMVQdFHoSYRfVq5tPnxY6RZVtRNvCv5SxvmPnYszCQsb",
  "key15": "6o4Lwx7oSb9KurD7sJRJQuVqm1VoAERw94u5MP9CmFSMbfmvigUC5cxgcAigAQZg95aLcujncsaa2L9shr42L2W",
  "key16": "5ojoYGzQE5RwQCHiJ3DSBu7zaqgDe5igEKBzvjAu18FhMSZvgGA8HDwXUz59dGiZC4epC3QSqFS1FWUpXkdfDBgM",
  "key17": "3Qe5XirCbrwXd917KJWUWH1ykMDDvfUKX95bY9bL3fB2XCeGK7FJLjT2CFJMtVvvaiZ2QWXeKCSGxhsdeMaY7C6K",
  "key18": "63wZdonSZUZJ6XGtiNDua67eiXYyDsAMp6C2AELetz5784uM2Y1DQ8ihSGxbxSBLLcNNaD3NZ5D5coUKcLHAYSDJ",
  "key19": "2w4TWZSsCDhX2E7K6vQ1sQdjUGAR8tL6RzXJ8sHUFwptiREec9TiWeRsvoEw9qd364cF3hM4AxePLK4865vp7ntx",
  "key20": "5FrAmSbAT6srjXf9kBhtwaLXfeVzWjQPkxcFzd4Fe9VFJudZYuQsJbZhLNdKHFyYAkvTcoV5BSLnBWtSe3z5oXku",
  "key21": "jXEyLNCSCdNUykdZTRhCQEerrAMZWAgnfJxHHECwLH3HnSQATCT1JXwAaUW36cSLHU87gr74kWDiJvLZDQzmQPH",
  "key22": "23cXPn8JM4DdHrHprNSfmWHqrvZ6FWq7AAE1iaTBjUeBkYuxnw5S2tXPhVVhBFzwxDL3kF8q7kiiwffbk5Yk3N8t",
  "key23": "5NqCdmVSEKMsLJP1qbwyaTsHLhSnaq66FnicBQdpUzVVAJivumszgW7Vu7cZPTyzEcPzZVSHudd1yAEBXi1cemfw",
  "key24": "oWAbYf4XSJPqaS6pgArgPXAwJD1wq1jS3QRSiND5NtqCb4fRVKGHgKhzvagwDFLCshwSAfQar2X9xx68Pomtz4r",
  "key25": "3ywwxW8wXeD4CWVnDXNpszyuWgNCto61QFQefdCN8w6M2xBK3dMRTDBoMAznZL2kNoR9XoFBDb5exbBdCyS9ehNE",
  "key26": "5Rqf3eWBRZquP855p5wyri1k39LUYdKyNDbtNLQWR7cves5n3qNPYHREP8M9aR6cfjME2SoEZX4Vjm1YRyTgve2C",
  "key27": "2URSZptoEhk2wnKWotTt9NMBkwjoVMFZ77XKoSFLV52gAJRcoGqbZCSiZuRsuPeuAfuF1Yc61EGzVWfMFQyy4KnM",
  "key28": "3fdd7UiHpDksPhpGiAecTt4m75KPMwGjRCmLpDhJvcY6vCjBkBV8Ca1uZLjAH2EEQ1P9M1XNqxECASq3xP9rgR97",
  "key29": "2zu8Rj5GNnqbGrqxc1TQKGgpyJ9g2tb5hYHBxrSWrBkMJneQphZ6HHqomJ1HhvQ9BiXFooGs3FcGCEZaDEzfsjLV",
  "key30": "2T5Jo5Qw8Db6qrrtF98mJAzkCthhXnXaytqUJFrUnyxqtdrMBNox73YbwJFTujaTH1BaXatNoEexFTAWNnkNB9qd",
  "key31": "Ye5oxCHPXBQbpzqNMWiQPsTn4jKoP1yWys3VvstanKWiQGzabEY6EkbuVgjsSDR5MfzF3QxSzpNq1CmY3SgJ6Vk",
  "key32": "2EooXiYSt7GKd4Z11iaRygKDTc1nTTfVs94TWT8MDDPfKTFRdN7YZvYq3sK5m8iRUvAeqvCm6gPtjAeLm9YPKsQq",
  "key33": "4EeQmGiNToNsArzypor99Gnp13uDo1ZqgLpxZeQyhi4pfgNoXS25T2m8QgUYiYrb1nwvkXVn6ATiz9qXynCDjFp",
  "key34": "5yDe8y9UrK6wHvQzostNHq6DDMLeaLkrbHX9rumkLk8Ey3AhjwbAsAmdjbV9vYPfF74bNkFSR2W3HYDELcAGrXb6",
  "key35": "2b3PQLmErPX8XfgxMn7jVCpimssFwkpDrshWEsaheZ5acYu9Sa9TEid12N4dGXmdcSFu8peA87tGe71MshXoZNw9"
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
