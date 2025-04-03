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
    "5r4u5idZwWWYVYoXY9Au9vueYADS45iJFqwXccG7E6mBhCXb5HVafJzmBp9zMEayEwhFTZfXi9U1Q51MUPKy53xR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2drrygyPfEdCc44LTZFMKduoVSmVVxYBywAc2swAaP6JYdgW6GbUxYkdHLTgutkwiUHBfchA78PNwA4CjZMPqY9h",
  "key1": "5ApaoiQAzVPk596HYTgtCtSkSdBnuC4EJaeb2Rg3CxwcdUxxwWKmqGFDwNYUP4JAimcnGht5eDpU8JwGgheHuWGN",
  "key2": "3UHC1mtUnjSCCuKKqqqS1ebr8JQPiV6DNNgPj1VrQqb3dEXzQpGLh8pAvz8yF7shtgT4YCRoV1qfC1CWN6q6s858",
  "key3": "3oQnP4CrP78y9QCZBnXRQb4Q7neKVLhVU4eD8iSNazDPneqLDgCSWpUM8xUv4CvsQPbN9XKFDSAYxGp9tPhqFpk6",
  "key4": "3XprxGqgvVzkR6ngkKTruU7zH3Mq2RK7vgqFZE1Z8dhy12Gd2sLAHNeNk9GH4QVuA63AJ8BrXs4bjxRvvjgVoQaz",
  "key5": "anKgxwQmM4vzqa3SeucdbPSKjjsWfSTQPJjSTPNqVyYTfjAmF9wxkBk6SdeoLiR87XsuworHLZPDTahZYpr8H1p",
  "key6": "5JA5mVLiihsB9nacaKSxETSLrowPH6GhQPnq7ho1uQN1mxcKtZm1QykXkH4yB4D4yZ64421AKPMYQ3s6hsRm8rVg",
  "key7": "2opexV8S881VyHZ6VDpv5n1v8b867XqqyXPaTDZUGLpND6CbiYqutQeTaeVtW7UzPeCYRSijy3SgK1XuF3CqqV8k",
  "key8": "3J4zanUKjovqFBpyWvCwghnwzt2Yccna1xJHces88Z5EWa2GypiYGXrSBm15DGiY4Wb47LfjvAkF3ktGjJcyMweP",
  "key9": "5T9cWHunAKewoZWdfn2SXiZPMSjMfpGADjTnWmaBjt71BYctGonFbX4KrC8FnnnU7cBkWiMn38pQpsMGeZ4pumxB",
  "key10": "4v6pCrKS56GwSciY6Vmb7QD59nvrJvsbqP98ZAtRkq9NmXzFgBYuTPJFUzEpJS4N1px1EASuFWNHmFwjshkJR7Hy",
  "key11": "4iAuyvXvYuyjckhVcfzRRG5smsABaUj9GZak8xH6ouqkppaNG7gbt9jECfBQpnQBP5xrjzRK224bPPnrYtSt5vuE",
  "key12": "466CtbD1FiaK3PJhFtmeVKNiqQuCm2AswE7u4LFwUiN36Rj75ZbZum9xS2ALtsjs7QpTpniD7Q5mRmgm2LEQ4WkS",
  "key13": "3bo2UP2jqP6kfQDpztfuMiRqXcWVfNZAmXaFxc1oNASaP2n43SEdBpAZjbxPkxL9fhzBFaffBUuj634u3VSN3mVf",
  "key14": "1uWzr6BzjHKQGX65gKMUf8RgDUnVkhR2YAXVyM7MxxieQ2Xh83osDxbR8ZATWKESkvpp8N46tzUa4RQL9qnYmDr",
  "key15": "3tXQWVqg3FHpijhHqXo4S3tjmoG4HYuFr5ovT9HNKz3YMNUK4qYjFyfaLZNqtydC41tYtFYtPisGnoEdggBo4mze",
  "key16": "4T5GtBshKxmvzd2RbziRvmKU7kaQ7nJCgcWhSUPvqZNveEFW1pgTzQz2AEP4TJdDd5eRUwZsiAVnDcDRR9dqFNhk",
  "key17": "3iaJ12tufG6wsddNcLFSsVDCQcvsu4wGvE9EcKALtZvazVdGcyQwx9SxdTCP3Fyz7G5miVFNi5jXDUSrgEZCMBkm",
  "key18": "3WV5J5kFiAF6XUpqLucQzHsu4YcptiEhMp3X5geNiR9MmVtCTkHGiSuroRW7CeiDyPboe1J58pXArNMmruXm1gY6",
  "key19": "3vy7gDQdMiBAnxFyksmrNL8LvzEfKxnvKwzyjco6KU3aYvrnLJEs8xhnDAxPsxcVHbYBSkFPepvHoXhJbrf8EgJN",
  "key20": "2qGZGFJA4gcHJ4hTE3CKVFMcTntT3YmBAKtvmSnQ21WjoDTbfZd8iUjahsyhDhPGjHSJhcvz7pLZXz6YLNXZb1qQ",
  "key21": "5akiw7KQTM5xgYZ3Hrqk3yLurZ34ecYo8xV4e1jXNFDQxzkzh32exGNKyL2aFzH125HskzZY2y3dSuX5vzrdYtnk",
  "key22": "4UGF9KXTtFTDGTwD1Bj8p2qDSDRgPAYk9GGKmtBaSjio8rKXVBZ3xRfqZznfPUVTrEHYzDMN1G9YTMETKdjSY42f",
  "key23": "3BDpCVZmP92Q19UeUrTrQzBAtJrp8nVfGC9wTtrTd2DzYVxiCmZmvuxz41PaRSDENMsHbXZqntrM4K4atLxWWDXu",
  "key24": "2UF7ARbSDLNNFsgpACoYCc2faehYyzAQmJWt1CStyzMzbdVK8LqAE73Dim5zm1tfXytKBvNCEGuMe4wxgFhF9efY",
  "key25": "4dQSWkzEuX1xGDsJPTLGdvuLDKQBFT6cyst9bBgL8g4hi8x7uNr7GHYbqhwfCk6Mks6RdmUFh9QUmxcAJY5kmsSE",
  "key26": "3wG5caBvC3fhQ61Ztund683PN4hagxxCyTVRWzBZ3d35FqUDgLQJdvwrCgrrAL3K7Xj4xQaDWmkP1CuyMzNMrkkt",
  "key27": "411P7dWotaqbjGNGZDHzuP9usD7h6KycwSHbhduLrVdfptD8mHwqi5AAj5v9Y8A6a3QMRNW4nd8YiMEq5GvZCdcT",
  "key28": "5yoi7xB31jumpTpabSxh43Ph41sjmW4EFV2A9hCiaUahjxfTEXZ5zuPKdvBkoYxxSK5fNHuCdteKZfkBxSYGtcLd",
  "key29": "2PKz9d1qqgj8Mw7TbgALirGk6AJUDcY7m3zEs7fmQHGwgyR4ddzjxQMZ9YmZK4beydoBwbJUdmCRiVcbzBk6c3a1",
  "key30": "4JuHvg8QjQQ2Xh8HeBEWeN6PoeeKWF6oPpiWL4r7obAw9BrvegMM945fsU1jszbwwsd9B5eooGxjYfH3osVuvSVg",
  "key31": "5suF3ab3aHm8ysUAZPkJE6NBdY8uP9MsW8rhyqc8dsqii54oG3z9JLQqbPrjrEHajYKTqaLsY5t32xex4uLSBbXQ",
  "key32": "57onvnyjKRGs7CNA2ANxaHsgTrvvLE9WJ4jpLHEug7BMw5XimFB3hFVLbQ6N2KW7uJueBZfvXLqGKbqWPceC4B2h",
  "key33": "2dG7MZJVUfZG5NKnDhqFwaRzKygrkDpzCaRbUuz5kxyJBY8BxU8GpuXh5hSK1i6pETbEzJ2VQiVjYbFiTJ6RVACo",
  "key34": "3i7UCP4sZPWDx1z9nPmkR5u3ohgVneNoMqWT3GBpN7ygGjMagRe9kHue7mPb12YTttCJjHVdyjGrFVb5d3AayJLV",
  "key35": "5gXQJUGNGpYExwGNycUKkXp4XgzZXmq77KKxhompkfwstbPXxJ7mqfFeSxZwwq7akP4Jxi7KsE3XG9pThC68S5qf",
  "key36": "3oqJX56nKKUmQMfRUSymuvnhGkuhUyiAtBFHmiTyWsGmHxDcH2LgF9jxz4KDj7X6q67T81qux45iWTSWgtYD7XXA",
  "key37": "2GtTSm2XpVcdA4P9LYfwMbxaWFfD3sVU6jGiJwk2XSGJnsD58s5Z6EFpCuD8iKPdSSFTU7RZ5UuWwmDbqpEKn3k1",
  "key38": "3BTvNra3eZ44RJpPVSXGyPV3G8nopZzkhpCw3mg9WQPBoAf98wwUNptqJ2MzVRhN3NAhWdssJhxhtGAqAjMvLkd6",
  "key39": "2eYii31k1DzBiqciprDtqBv1JXynAzuBTAnUNtSuWi3hUWct3vHc8gbVvysWyvg57oia9EgQhKVEnir3gacGY3jt",
  "key40": "26mf4kFxUWseQtzd2vSFmHHkD8Ecv1T1PxwyUvXRnQUMSow8wUqgjdyFzmphsiaNfP1UkMasYnE8xPmTUJkD7NcZ"
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
