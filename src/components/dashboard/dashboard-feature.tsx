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
    "2vsdkLMX48KkgnBDeYgTFXVLLRAKDm216nbRr8kCWUGktHAzqXaFx1xnxSRYnkRyoCNMPbWnerM4QfUQMW4jXqZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMcLfg4myUWN111GWq1vyRUNMx29X4oJtNJHFoSPiFTBs9zTFLAXxUFPDPeAw7BYxFhUocoWe4tNjwkviD7R5rr",
  "key1": "5ZbkxHC8BB9oEuoc5owY8EVdyvgY9qDsK3iMu54FTGRGbbe9xYwWbkBTzernho3AS3axf5cJnY6RHLaXa46TcWE7",
  "key2": "Nw5HrJUWoA3ZbUe6dLe5vgQ4ZJDknPityeycuuZNW39xgAZ7fWpAvwZjqaN826pjasiw7JRFt5UqSrourKCNArb",
  "key3": "2kmDvk6djV6tCAj9Dr2d8JH6NHXqU5UFwkfcRhTaQMSJi7DXKWVW1C2vP4FPJZtzSZQAXPacYHJpVP6Eqrs6thrs",
  "key4": "4JGmcfhAVadoALbpiwWCNvsnr2kMEoqoyKcs7p4gKwiWMwiHQmhAE6c6J7661eJoUmtokM58vBaXBFKsczMEAURs",
  "key5": "WxAi7NNyM2dogEhTvSe7UtkhYh4WkxRG3zitxSREHTUxDfbW3RM1LUJxV652tJbJN8A3vFhdPxcAMnsfeogCwJ9",
  "key6": "662v36SbDDGKAVeAmiXKVC9QruudJnXovTeaZFz5oPDnoPXWu2opMUrtfWrKp6DA4f6LBtZCqGGpexHAwQ5sGDVx",
  "key7": "4pAXDWxeDCQsDyEdMQsPkvHgwz3Zg5tRUF8LUaLAKHkxjNzkxb64cDE4tKo97xFtxxTyGsNffcocphs4qfH67krF",
  "key8": "f9BiXDPCX6cEwsXeoM2tnuVDRshEQnmUpNrH4FAkqyxKPuGkfoRYSEu7S7JwYhgcMDq6m2QS4uH7h1UCyTSt1Cx",
  "key9": "22ui7g6i2utC11P7nknt7xfdMyxspmmr9gAPk6bMR9uK23gbegvNqLWZ2quHVuNdAnLYSUTfBjtBUW6c67spF6Y5",
  "key10": "4nF7XMctSE99M7PnWFP4zQJFUv47R61V4ozL6Mv2nPXkAJvyFWfD9CLu8RCE6VZ7sG74od7bb7VCU3xaPX9C5Hfx",
  "key11": "5L6J5cuwarmAsopV1iE1TGJxUdUk7RuETUvm4VvzwGXTKzAgLciTgbj2xGPnQGgx3XxuazPiy73nsJA4MqXkrhTT",
  "key12": "44HrTVUvu29yWA4W4Xx9gGPWXtuRUtjSM3hgv9BUsSe4RoXpH2HaeLrZHSu5PrUkURXsPrCwdJKgRJyueAXNYVA1",
  "key13": "5Ld4r5oA3DnkrHrSEjBXfHV8rQy6EbV7oS7mFWUJFRE1EDWdfPAURZ1MNKxqaaRgSCBFRpwrLkzZ1ktVNH7osbLT",
  "key14": "MvR9ARZWn34fPwJTLYcyNy8S4bhrkLyq8MagCRbT6Ye7qpn38UsTB9tzkWkEDfCTFMoadhMTUTmivf23hkTJjYN",
  "key15": "bMA3n2j7vHuXdtsZtWozbHdMN8xkUPYZ6Kg1S7Pyfo4oeAbpMz1SX9zASGC4ucjE2X4YcH1Np9JV4dKsrvtnxca",
  "key16": "4WJ7iGp9bkkBpwTGm6o96FG7CgitbLVKFzjrbgsQmJNVScTVaxHtmA5i8EjzZjHT1w7wxyEhQHmCUxYcje1fKtnW",
  "key17": "4Zqhqb2o4XSecuEB8UNXiaQRyG1DM9aej9F1oGq65id9ZgoJjPGZuCoKBJpWLT7rigN9kh36NuidityrWLsXSSLG",
  "key18": "42fizZ5B2xjczEMZTjoicJJZQVm6tz4yNEfPGXK8kKCrrjCLoR9gvBuxNhj556ibAm1accUey8vJieoE6Be9mZLn",
  "key19": "2RU6HRjVKHKiXMqKW18PjFpimvrEm7heP3XX5pbpWg1yXx9kz86kZFh615B1rn7YjeFVyZp26xkZLrg4fzX4raLH",
  "key20": "3xnCfVheZrSwufbY8FRGSn3TF6Uzv5Hg9Mo1dTHyVjEz6n6mC8hx4E3GrZoUUpeFw6jk4BrQFXnfskiqQup2ZfTc",
  "key21": "5qmFZQeg34iuPsA2NqJC6CBkZ5tjnvNr5nT1kmWknNPeDuiFoH7GsWkKETAKubhHE99r8Dxkm33RY36H98R4tjjq",
  "key22": "N9YAiEzs7SMmkwEx2pTMgm2AUGEVAwck5dDpRRhGQSwf2GA4iB3kDm2fQ948PjBSWJfbxb7ZP9FSTn3Jood1jqF",
  "key23": "5dpF3pLbUWyZH6QaEcFAKKrifEi7Ekt6WaGhCrNZHanhX93wMYEgAZKhUXr1WZotViBYZvvyw7PJL6DPX1ojCmNR",
  "key24": "dhc1g5i1cwQX8RWjfgu2FANvD8Q58kipE1kRvuFwTYdfQbsAHxUZWpYyV9dfYe8z5tZZjzYKdpbRzuB5zPWCefw",
  "key25": "5pLQc4Kewk57XbH2b2p7zG2qXEDLE1nNZkeZ77c3aTMqnWHKWiNpmdEnDkx7QMMfiiBDicMwebZTF1V2u4ZfgVt7",
  "key26": "SzcE1srMM99bju1cuGPug1pLAQG5VATbxTAkJgm16Gqa2gccXvqQytfGZuHcFqELzdd3TSz3gdML9VpptQdnNSJ",
  "key27": "65eges29L3vFmjn3a5FRurwUHVBMoPUsHsWPvZjNMKDdQVKbDXaszCWXVKKQmUaqj89ra64zrsqmYigpdsYGT7Wo",
  "key28": "3GjEp7z5T9CT8KqJauU4HLLuFJJ53qi5TyzVt9rwCtnPkhE9ThLh842rR8AAu5pqpX73Kp4gnzni3MsMikGZH39T",
  "key29": "5A6pRKqcLjfiwxSeUXiTXuzkfo6E7WW3ZKjgSMYEYZV7raxh1ByBzqL2NDu28cfpk95Le8aynNuiyLpUmwsmkErk",
  "key30": "3K4cSKq7q5zkD2YV7eQd9FMhftzfkHvZojci72gbvjktHF7rca9HPFtnD2eAJPogFaiJCY5ywi2hnZPaWqqUNnFA",
  "key31": "2UQ3Gukjf4zoNSdQbrPMbZAmXLKb7CZ5DnjYB8K9Z5Gm6Eqma2ceRL6HT58LVUK19suRuZgMXUngCQUQd3FBt4Wr",
  "key32": "2rFC2gfbKkRui5pkypUeHf4V8Fa2EZ33dqmx5JT9dAKjtXkrthVErM4VFpafbLnGTYqCExknDcyJ1AAorfpraE9u",
  "key33": "N8bUHEn3D5NQRoNwQNbgGcg7Pg3GZwWUWfn5UsdZrsvheT6kjviYKD6UrrqRdZp8qaRjBCfQrDz2siRU6ZnfJcz"
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
