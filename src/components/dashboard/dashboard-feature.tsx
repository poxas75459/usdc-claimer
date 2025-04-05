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
    "2tFi7PFVBbd2VwQuvk6PdYV6PQrhtGo91rqD7a4YGxmvknqUhLLTXgsgivmNNUVn1B8Xdj3cy6Y3tbh7imUbAivj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MpQwho8hSLic6zpeL4pEkTW4ZM5MqCPWniyu7e6cw7VwhrutQMa6FsitxF4j4CWbLLLNxTMB6mP8HtHvPoSPU7G",
  "key1": "3Qn7KjLc85dGk8vPDQwydAgRJhy69Y9upc2UcoakD5g6JKKy9VwdaasLAmtsYsLhP5694xUeNgiPz9M6GzMYoaDe",
  "key2": "4HE7Ki4XMbcz6Q7E2sCs732rC6fQAcLYsiWkpTaQYnhTwT6QwzoiELXg1YNtxWd8MpsV82djJTB46C7xHqwDHWHx",
  "key3": "3FC8wR7DoAkChM21zk4qhbxYYw44rqkhvCKkxxuC5G1Rp3JoGcXV1jDEEhbVqbvziRP3iyu6CqqSLzXtJBh3ns5X",
  "key4": "3Hkigenc2qRkNR9djrqXbMitaMmxbrg7CHzxWmh47bsKc3jPBnphu2spTnpVC42ACwhpHQttnQS59h88zC7YNzMc",
  "key5": "5iRtu3dv9Jx2HAvxHhMvZJBetnSsgXfTGZLE47nHjLq25QDhyyhXtkVYJX9gRR79HjJ3pRXsJ9eWqzY2HEH4EdZ1",
  "key6": "4hV8iCZgnSzgfj6L4NYx5LAdBA7kzXcTKS46xcTymT7DxMRjEHwym6vDtUTtoxGA3nHLAQUcnzS48ThqCne7wxHc",
  "key7": "4i2Zj4cT7KUT55XfN3S6oESy8krHyex3bg4wqehhAUgVZKJsCJ5x6CyLhTRuBSAWjNZB6YpC5DHeJ3oZvkAZeD61",
  "key8": "4dujEdr7hnNTG6uWRSSZteBwnu9wfyKvHzCuR82tYBQ2w8ujPfyPzicNj4AUGwfCdVuoKxqhzmgTwVaPFiCLXD2n",
  "key9": "4c1CKKH4Z48fyThc7UzM1yFCf7BspdHE7aF25WCipZ6i2ZyHEMzirAFHem3J615GpDNDXzUXoby2n1izMVWUs9o4",
  "key10": "2EDSYqEtn7DZgi6JYqeyNDX3x58fo24yxJPPtapFPW3tvcUYgvwmwKiMuQqajDUBPaTxg2DLsu8daDEhiDDHKcR",
  "key11": "4zwPsT713WvgvvFpHZoWLfsTkANGXPnQPf1ivjZ2oVKSSPhfFEWc8Tcx12tbwJENmm9XDvwx8qWHidx5xA4MaXnX",
  "key12": "475XYnT21f9XUnvAxiz3TzoTTssKBApWE5pKZTkoV8WW8Lzky9vJjhvSrLQupTC77SmoUjZrs7bwanSFViNYT5Br",
  "key13": "4TGLHeXum3ijsWTsEueDrh5xFeNhbiMzFR61YuMNitZQXLndNcRebTEru5DfSwp18pw77c7WUzN3kSUVY68QUsrV",
  "key14": "4LNDxB3Q915RGQyzn63oaRkhT6ET5j4bMHtt5tiNw81zBBQHZg3FGYh3W7FH3EziTbLzF1nN45FZXbSMdVjZymh7",
  "key15": "4zLFZrz3iCvg7ApNtzoU8kCbxPg5syWquRDdUReao1oQC2Nt4Z8VMTceDEKG8V1XECs8f2NWbwhuBHsVVQRpGaLh",
  "key16": "4Kdt9Ew2sxR2A1hg8nJLSrX4CSiEnRxTJgDxY9a2baT1KoQikSEGQAzKnQDTdSCLgkArCLGojsHt644D6eTvhYDd",
  "key17": "34ECtpZu5Hr7XQCBjBgb9xcvfuVbHDNULmaEZfACAQWjw2vddXMFJBE7BgGUMXESiFsSJgoWadahy7h8D6BpZeDH",
  "key18": "CrU5jWq3vnhvQpE7z8MxH9DEhQEzimhEXaVMgVMyPganWhkJwNt9fqQ2atctQUsHWYTWPfUYuoaUyE9xmds72oy",
  "key19": "3xrCGyREYf5fmaeeKfs7aGoxjUpxEdutC8xDFsowZ9TDrN1QyGDFQQRv9tsLoSxzq5rVH63vMRdfqVtewUwHxsUv",
  "key20": "2EQr24QyzgSJEhLPJSzUcdRHv3agUJNF9Qa7ja1uyHiezF9eS5rXwZKvWnWpuBpuRMP23Fqe8GRnGNwQQAJh33Z8",
  "key21": "2Xgbkjyb69gYcykt9Uz8eP1UFLGysVWkEvKANnNC18Y1V4KAWX6VhqFzKtp6CqpwJZ1Xr5imHkptFfue3UuQgp2m",
  "key22": "273k2tiDjhkx2Qd8M5cWVLE6Z6i7fqbu98TfyD3cFgC6JQCHFU2mS9Ab7wbNzBfYoMyge4FvWgiHgZi8qYVx5sRC",
  "key23": "ZNNyK1Uwe6ySheHgHxSKPghGzN3YWDL9But3PmS12jKMzATNu9GWo6gu3yD5onX46kWXoiLknQY6WPM9kXpp63v",
  "key24": "u8S76LE45Y8GvC1d6Smpgfm6H4iGsXEHJh4pZXFDYyrLoeCAp9bhTMXz7byKANBz9gSVFVwgcga7WJ1gJWZtY7c",
  "key25": "2LLzyaXsLJ42c2N8GChEvQi8sCifxAA46Q17fVFxr8a8VquZfKpWrDnYu945hhHQe6J1CRtvtJqXWiTNCzttYGFw",
  "key26": "4ipZug6HkVHkZRfHyev2Kg1pgvowLSubLYbk66bLiFU8oB2uRM3Ns189TAeXZX6mzWjHdc1UH75gtc66jxgzyuQV"
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
