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
    "Fqp62DTPvhUZpUUzUWeoQWAmq7yj1mxA4DvpDikXxmT4LhvbmchK7kmAcehhnzqCsYHxS3bETpffjXpgGAmYorD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9fCnvqLxzsPuFFb9BbsbaxLzfB2E9TDueZLxHtCq5d6gxL9SxB2wY6YoYHWhiT6kQpvdPBThVje9MvWPD1oKb1",
  "key1": "2XJfiKVRdPc9tUHdUe9AooyBrNxtmwEijR1V9LXC8LrDm4MsHr2HbWscGB4fmtwDKQyUyYHbjmBpb6DQ8uBgFZsX",
  "key2": "4i6WzBJXvScKG6B4kHAornSmdrEudH9Zhk715VKAJC1RURH9MCoar7kToqRtrpMyQXaZKvP7Ehe3FKZjafSzxeM8",
  "key3": "3D82H654WhRHQcWzStBpt6RBZ5KSfy96B5RJyNx2vjzVk4tqWoTamzwiCxKm4A5awECqqTyX31dom1FxT7uQpBCA",
  "key4": "2XN1Ejb6Td11cG1zqdeMzRHwjjsVsg8kvnqQYXePnfmDou3aVvQMeEwQMGqyrRBBNqFVBgd3Zrcqo14gSATu5Xx6",
  "key5": "5YQMGd1Juz8RqbrY1mNEhf9iu7thTJnzuXu3x91vQiXKsvsosJbuhx2e5SuvQa3po5SFspaZQGTD2rSoWo4vACYX",
  "key6": "4sDc2utW2mNzQN61HQ2e89DggqkHVYendFD614r3U9JQWL4JWh6Jh2nuCPiZTC6KA6R464NgU9do5Wz8cs1xBzdu",
  "key7": "24wYLBijpJ6UTirBkkQAWo8znHFbcJ7yz7ujdM2Wp6MBbMTzc3eLKGAtYmvyjV7edRAydTBTLZv1fzFm2XFA97dk",
  "key8": "5pGcNnApYaZv3iZffz13s4U9VCU3zYTrCyAPsBm6iNEWNatrt1Xxr7LWDuanPhVC5fpZz347UNfSMSMUQuq5VDsz",
  "key9": "4rZvenNALCSvP8RnZa4tkE424Bp4Gn97TVjEatsUwMH7wUzx74brBw4MNj9vxEaBry7tVs5fBp2eY1C5jG5kErv2",
  "key10": "3xEs94SkPnsaVVADAEvJQAvCGEQSiTfrAuo4MMUJRnFXmEU28EDH2WPkbFXTSBJ2MnWr6Wd3vD81QmxS4Z62iDE5",
  "key11": "5DA2eTR9TjGo6pgbbtS2AHfw9ZnoJwT1ggiRE3DtizcFFouykk4KPNEDsg7oG5LqWvyuKCjgrgwM1BjQ3X1uBJBr",
  "key12": "3kzxyYqXF49Ycsq3e3srUCSMaPBEVS8eLF5dPQ7Dfe7UgEiQqw8n53nbcrS11BMScVehDLeYFCjNs1nnSXwTCvwH",
  "key13": "PwE62MXEUPZ4Q8bjdd2Sd57wLehWZ3tHPWCC9saqERn7rinbCdRtzqoyq47kbSV8rE5tY5VRQQrXyqCmEZDuehg",
  "key14": "3tHSuFMiWWuom3SFUbbvADZASpRJXsfDLWcfbGYxihAp7APd1uCy5EUsNLaTbzGXskjfewBm1dNWe5G1QMjSh7k2",
  "key15": "4EJHyJutYJvvyiuNM2x3Ajzq4u1CBgQy4rnMjZHg53iqyfkpXournCjTUo6xVp2osoYyrRUGdFyJWLdBAuR6o5MJ",
  "key16": "V5dH8QfbHLmqigVeZsCxfEbgkJAxHQX8HpZjbcywRy2mivZGkNfRsrzHZUnuqRstFvsi7NHNw7YBCj9AsdtFnco",
  "key17": "3kNN4WU92W9kjTBT9goqskg1XSix99W3fZNHCKdkzJwUL2Pafahk4LozmK6Bvc68PehpHGemMkRbgsBGwHQ8Xjqk",
  "key18": "4UrxaMJ6WsF5uYxP7mSuwBTsFsWPfRWp9Kof5UstFLUjiVMTMWW59g4QhSGfERnLS1ZpQSnSVg1Njh1USu6Y6HtC",
  "key19": "5d8hNRTV9pZ5g9Q7y2Uyx8jm2p3jMoMAiHzskcmth27oLc9G41XnhwYHmkfUifC7WyFJUig6eGmoQDcu42FXvre9",
  "key20": "4yKN7K6oRR7XX7i8rfm81of4ffq5BzRyzeHLVx13DuronY3qPJoUCG3D5aPrV7jPAKYTBAYvW8Z7fgwceeowmwy1",
  "key21": "gAR74ArcgDvpTca64rsMXVVphDU5UGVpiMrsykDahUmhnbvu92A76bWLSHHmbQGpN1EDwFr84EhFhubXH5meFaY",
  "key22": "MLgYvc2AdL5Pt6dMcGcpmx5awN57cx8b4PfEueZS8UM1SKWF1yy2m8getziDLuT3XZVsgmb2BngfKZ44SC6BnpG",
  "key23": "3HmYm533JsfDRpUNijztv2QapxBA4bKrY5JYD6rxywovGPPgskC3wTw9WcFyr4twqBBKZUCnRvbqDyy83z8Sngd6",
  "key24": "SZQv4734EwjPvH4dDSh6rXPzVGnBrUDbv6M16TEc9BaYnJ2d5V4R6nTMvkegwVcoMYAdfFPG7665eoMUZEExdfP",
  "key25": "3PDssuRxSgxcX6CDFUFocojcyaqYUDGNGq8NjiFBxcoSFBZHCxcjNF1VpDHXrY9eqAMNc1VpEpjVVoTRq58H5h1S",
  "key26": "2ginFXSzVdKCEC2D6LxfPz4DDacddNacvR5wSRKNJYbXewGCtxcGX6zbMVFkBugVFgUwPb6YQabBFHRoDXSnPuoZ"
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
