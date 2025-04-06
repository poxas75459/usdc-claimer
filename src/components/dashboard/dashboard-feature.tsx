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
    "3DDkK7rx2GBpe9AKV8hiT5rsBGX23Hktmr4rLVRzPPeqFuGrPE61uBN3qZGvLieVGzftCNULaoLPHyyFLFiAJSB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TEGfzCDWNw4yy5P26r6yVu85s5qTyCumQy3UYrAXTCAY7NPWJDs7TGZLGrB7DkK6PdZKRCT1Bod5dp6gP9sFieu",
  "key1": "gUZmuacQyrboTPue1vKKfzDSruChp4uiMgY7hBfDNANxXtSvxBuZm7i9h9PZDosRPdveSuvQemekr7bdkhuDqZx",
  "key2": "5b5w7UPCg5cQCthbSPxQ5avA4PsRNzxWjpptBKMhLUwbCoAiJJxX7UtCDvHJfnzPiGhZ6UDG98tp5S3qCBRnWMGq",
  "key3": "4Mgv42ygnGsnHJwcg9XDMUMkoxiCzsRCXvzqm6haY7bVj7hbatkCkiDs6sB4yEFLZ55KSh8ZnX92sncT1SAN8hK",
  "key4": "5YURLXVxJRcyX57NXoFo1mbnEzkQktpLxXmeDqkuZVygsK8uEtj9nZUAqvAjmJTbndadJdPgdW5k33QVsk1MHmJK",
  "key5": "59pyaayi18KGmCc3rY674Bpv9FYhYLbnNWfd4LgzYbj69isNMx4TCHSWagg4ZhBS13T2T8dsy2Mf4y7UpvjY9qF2",
  "key6": "4gkfWJc1b3L4FXLh9hcuGEX4akNKC17S52CJyTrM7U8beEPu7SQ6ErmCD46U9dNi9Foe4hgJDqvFRRAc1aKrKq6X",
  "key7": "4ANeZxWio7TKf3cCNpASM5ETkWaCZeYSCrAATY87LorS2znEnegH2aiG4BoGxWxMcvH6z4YZwf7owcznMGWeZsKk",
  "key8": "63RJNJ7eGpVH6vCThyXcQL6xnXyXJsYeGDvkB76Y5zeskMeaEjHHWGTpx4MHnJjjzwE7kuu85RuHCEa13UwntCJK",
  "key9": "5CDkcTeiC4AfF8DrsBL91YB6b113VFL2udmfEAVSx5bmpZW35kJiByUpuXj6phQTQQG26a58MKnnF7r38WY52GeN",
  "key10": "3mX9twKiMT4AJKrbQtYySLArUhxzktLAvkyqA1b6xfzmiHoVS61b3iVqiCqDKuFUgXn8aw16A2E7j5HuLxAg9THw",
  "key11": "39GEpViP1qEEJDYF5c2n5EjhkYYbVXtpmeLhyduhP4sWitFir9ur9YQB25jyMBchtZnEwuRd4QmQjYNdDNAV5YDU",
  "key12": "3DEPSNeJXyQjgxW5maUdtEE5uUcNyZN1jHgkbWx2iJ2xPxKdeoWsggmZ7N5p65Qo2Jqv7oGgkEpZBLL22goaGAVe",
  "key13": "WiTEPcRfEXk4j86VuCU7K8BLnGfFjwZBcMkXV4tYEB76s1p1tD5ZTQ88trtaLCskE4sU2cwKrp6siyRuSnYAArZ",
  "key14": "4HEhMumwLFmaYVDcPZVWFutrtXmkE2Cu7dYLMY9BvDMPp6GUb3PH9f91LzMbWwCXaEmVpS8y1cxnc89g716R4TE4",
  "key15": "ZYyi5QqxW5y1pobMeMrs5iXwixQ74sdMobZCTVrGo48NNZqePxRJnSNwwMiLBdSHu2KHX4zfCLN2gdxDva2t6kT",
  "key16": "4VoNR1LuzNo8L1zu2dybJJDZHD4FijbPr1QrTqeNujbToLH4kqCzNjbBS9NHViZAx2276haUkrYCxjnzrQAGkKC5",
  "key17": "5LSUTpipppS6wVccL1FNmXFqdgsEXRmXMHxs3nGCSCd77w34vGJB8uQX1EykPJNEWhX9sBKMyyxnUSdMzFP8d2NP",
  "key18": "5hzXBFU8KMaLDdMrHSvnGio1RawGWhqJfgCRAdU4c51jCgGxxSHbzEabLeEaJ6PHBh1bNbQKVTP4pmwLCgBWcZUH",
  "key19": "53VhfyUJdiywcJyhh7Uhve94sNiYZpUyN3KzLes7Pc7SATfWTqnFbBapbMdJYj5hRw9nqEdt3C4xQohLcSZPxLTS",
  "key20": "2KhSDrxsuvn7iHGcgXejwhcZbmY2Kz8ErbbFKtXJV5rfFgomHtWHEWEZDMkRwGZ2m7A74N3eW3acCX6DSktmToyK",
  "key21": "58ipN1aRU37KqnpbKAnFvce8fWr5bQN3EmcC5rQtJ28JkSGRqbeHgNCWK7y6AhGjeFLnkNKEFpgwkkGKV2vUj735",
  "key22": "LYPpgqDyyFwLAiaxCJ7PdnYUsXqCTNEToJ59yBy322nc8k2pKVYGyWEDyCgBtkryiLGvxHfGCbWvquieynMgDkR",
  "key23": "qaXgvwbv6zpZQ2DipUQgXtMRMEMQceQqGMAjMJ5BzjhGvcGxZw9Nka7KJGtxCTMUrHst9Do4ht7328m3QXpzCqz",
  "key24": "JFgvtptUbt1vmUjSxB8Ery8RLCcwt5XMoyDExCeDPNfjq7dNj5zdW9xda2MgdS5aqkUoJ7hYPZqFLmBqnfweNA6",
  "key25": "2xWtajAgLZWionxjuYvyJ5HPAi3bYgruVqYo9UcuXcfHGSQgqe14FSpNt24RAWbDPa8LKbpjPuMhuci5H5BvSkqa",
  "key26": "2wMXWa5mzjLzptejohUjwEmgZetGEEqQKUtButVP4vtbNzbDAiPi1uujrAJaxQeSvDtHWupK2faKxqyQYKLVZS43",
  "key27": "2A4a2BBYZH1NbA8DqsHno9WADUzsceQNCrPKr6vxWFMZhe9VEhPANeEMSmoFUEXExSyHkHZTjM4k2ww3HnwTiUqq",
  "key28": "3nAeoAAEQkysyHDYAB9rfgACu6RuH9czwZRpCgptdB86zAgcyLud6tANTLdcbctf99uEMpnyXVmitwN1tJQJq8nd"
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
