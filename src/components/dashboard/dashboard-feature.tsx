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
    "ntDy7Q1r77LJmyrpDSAQqHhTDZgp5H1qoQNq5L5X2TtEt6bKEEG9px5kFj4UN7q1bSG4aQMpBtMgatTHbbdb1CR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VjpNiWDhNviDNvs7j1eNGEDhbpfRsKr6dnUiRRwHZSSppbt8Bc426gzUkB2n7n4QsAJq1EvYoxLjG8JdaKwWvCU",
  "key1": "3PXbxQwM8p3PWD7n9aBfot5drrQDcAPrjCAhxGMmQZhugH4AAMxXyFqU8H7p4yHP9PBMyukSuxVUb7qfVpZ12dTR",
  "key2": "5UeAMJJa93gwNr1BXv81kgEgVaQJgiKDb6Jtq1VoSdYZYd251or6jUFVPvi1fTGkU7C2mXubPkFKPou7ctdbZy5M",
  "key3": "X3tqNm3AhTZFfFD6wPkenFMk6gZbL2eNvsp4i8hFGjSgro99UA12ikqZk6pyr3gPWgKD9L52xgUuQvyQjQ2yP6w",
  "key4": "3wmwpxG4vhqgKcWogrU5MQ4JcoUhjQLVpp1supvD1Hp1Zs5qcZXTgdQbj8wWxTS7yg4Ti2GZMeY7r536cHTRU3M4",
  "key5": "xwnAfQGdVoWBFBv3hxFRQT6aKFTs2ou5kCQ1HpBYEDuvUmQubQYNxC8JpBp4zWdRAKX6jHjgFTqJ5DpA4dSYKUd",
  "key6": "3Qd9LS2t4qTE9zAtP5ZskHFXLKSRuriQrhitoKKiF7ERWqnXSKDEium6e79y8X8MbMhrwX7MJKbGSHfMjKpN4E3a",
  "key7": "pjiN2craKypkKu5rNixbQBDBySPc39jsbBgYmwvL4Bv7eHgkfRPSJRx9m4KTvzNwcQ5Brxo3HzbCu2Lf9kZaEhU",
  "key8": "ezYwRisxSE2B2L2Cx6feCrvo1wNN47RjGHEd6JGNsUJ8xvgurBthtkJ1a6x1oo6FUYM9UdzfhVSRx9EtAboV7Ls",
  "key9": "VnrEEdFVdtvJi1spiawSJUg77ggvfL5MoMZ6fibzRHU2kJJPnfKNKEu7CSsHYbNpNZ7J3D6iwMXBHA4kibjhQfJ",
  "key10": "5icefx2YwycBdkwjL5yJFAwU9j5C8bA5ardby1v4skpzLSRmABCPjz7uDD1HABxUVZErJvY8QgaawoLmqr8yMhd4",
  "key11": "5QzCSQxnhoLKqC8XWBDx7W4aJSCMxfh1KfCF4DyUfmPRH9nScUz3vHkKDzsvbsZfsc2oNCULqnEmbEABq1ad1aqS",
  "key12": "5GfrNuDYucofcxw11PdnK2y3o6pBGDDLD5X5ipHiEjKHncuGmxY513YEpxLPwZtvPt8Z97yok89uXbfTh8DseCH8",
  "key13": "mPPHe63PcQK3YBkiMJxhX4o7KkHwX1yvk99XtaWxPvxiTyAmQPgcWrC5fYYLKiGQC7Kudvyz4knXPxSznaJFzca",
  "key14": "516NDHzr5ADBHQHckQB4Ri56PopVa3Rwm1djUkaZS6JidCyiEyWVSqeJskaCRKHGBNQKRgLss4K9HsuLPwK4iUn",
  "key15": "5d8r166uJKjt2UMEABw3NMNMX3Vbng7TcueaoAJ7Ju28BTqzCZyALmz3aC8mbMtvwy5thgCNpzQ5w2q25mnVit3e",
  "key16": "3oiKGGY4gaVstorgMtkREdmiYSxZCiqcK6Miz2Wxtnqcp87WzSDEKPDdLEjcZtFT9SWPTEGDmfjfUq1EMRgYZbej",
  "key17": "4YCBrgn8kGEgSJXM2VS8NJgpYdNLipiCLMaXMB4pLH9hZiP1xJC6gyd4ZdAw27y48wTNn1vwmSQ78fCJ261QpEF7",
  "key18": "57prvXn4SdjgjWus3mxfDEHRvnZcSwd1eygMmf2cxcbNQuM5hm5MgYwTToAnh8KYPiJXdEnnvxqNE2p1EN2oeUdK",
  "key19": "2eLLz7f1duTiKpNGZmnm9eCFU5YBR5hgackQDWpn4THGPq9a34hazTnsUK6wJ96KgTbDRvEAaAVEqocdGsLWhd28",
  "key20": "d1A7sfW7poXMQkhCcnEAGmjnG6U8EAkvgsLTc73rcupVdrNRXprgRnCTtE4zCBHZmBLHj3x7z5AW5MbYqHqeTVL",
  "key21": "2WFpXWtyVdfcb529LtZNhHg7o4kbYc6XbQE8vWQN9QcbqT42vcm1V5HFDLnm69S9WsdrutmhydWXcXCN4LtfcyeL",
  "key22": "4u3qsoVdHNPccVnsyMseC46iuR45o8gk8dFTByaYvDNgA1SWP96SfRbGoafMba9KRnJVmdAr2gkRp94HJLFKbeff",
  "key23": "4VdGTN1EwkYrissJ1MkVzQDRmyury9qSAsigYV4gs1AVn75C4uhikJE52smC9UbCwMPmchaSs3XWieg8u9QdVATK",
  "key24": "4oS1x57zwAh7vXA6xbwddmJsDR9FnrnkdEo7WScct4exiGmukuzVKCEsf1ZQxVoeVto2icy6BdD2jiZJEZCrhgok",
  "key25": "TSVsgm1V3h8yb9b6k1ra3iTbMGD3sQazcsXBKRTFVHcWjP27dTJkemYbB9uFTynXEfAob7CdDUpevzunTih8B4V",
  "key26": "5Gy84mTxM3jhjLNa4Y5c1dbq188h4reDsAeo2pJNzwBRjgpgPbTXxaQytMjgJNGeTeRNwAazaiuXTqssGoN1QaCt",
  "key27": "5sCgtzFQfhgzoz93jg2KQNhiutbkVJfZxDvXyWq1kjjKGFWpchvJhEmitqdArMETkegBg89JNDhPb2JCvsDL3gkA",
  "key28": "3oY1HzpEBZxyKodDUfhSDEHMxSsT7oTNjDN12Tzh1TttFnLqbScRHdLhg8Grrs2bycfehShx5miUXU7fBfsmyC8G",
  "key29": "57mLPTm4dWFySywHK2Ld5AjK6hrhmFd1ehWysHztMvDq2KnqtvrfUn5fT73nz8A3zWG2hiJKVvL6SMRwZQni7aLA"
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
