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
    "54HUiKSdPZCWAQD1EFs7mX2FvSnK7ypSvS4iyMCWF5MgESopMqQyhTLFV94qHH2kEAheGaKTSWthgAns2BpTJAHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WQ8MTBqYANDAkkk5Vqm167Wjxz5qV6mj35QtfLx7KZ2UzEwfsfJU7a5SoJWp7aBTkJSk74LSkJVZ1HTyun6gmcV",
  "key1": "3j1SXXYchNkLzHdKA6JPQQPRfNY2vHsDPov6XhwCi69kBYeXkdM4UpXkqCq69Aie6a1yEKwcHajzuaH4eBrEypSc",
  "key2": "3jXhEUH19gJNMxT9cm8yShfqynddTawUHuGk5AKhgtUboGHPQr1iFpnPh7oMiGakkUk2un8ZVgJTSauzoRprECez",
  "key3": "4ru3szZKrvtszFGFjBjyZzhiK2wjVRbUPQoHeuxFwt7tNNjtxro4xA3nGgHNZCZHM3cJ7uoCm1khm72N8g9v1xTd",
  "key4": "NP9PkQRyBZRZAVkxaAdzvaNkVP6LbZYoRpQUwas8fsHHstmAYWry7SGBeiXd9JarpN8vBxmQixQWBqrbEWLr5EE",
  "key5": "x976dwkmcmHSMYyKdTJej6WtVpinNHV5S5rCR2oPTwkGEU7RuDxtApiDf893mtv5UPmsdFUqMLjfQGAruecTeGs",
  "key6": "JncXxK389SmnfcnYvtUSDcmN6EXv7UhNYVV5itCzB9MoHDWqV2uwqqgaJMfQFdqaij63fgdW6tJWZQHdd8QF6we",
  "key7": "2ZFtNij5SbvNGpPaxu9ikw6uo5wAZy3mTJ4aw4J5NYJwVGkwMsHn4GP8ATS5bhsjVrVx6rejEKQ1DHfNcTpsnws5",
  "key8": "2pvArsxMZu2JhdLi6jBNc6LMCwFUVHVh4KCBi5pRre7JZPDEi7ibM81J45QiF8XgY9iJLmWj7onmMmsXFwTGx25j",
  "key9": "3eiou7ThvP5EKHUyAXZYeHUXYdPssGHfER5UcFQhf7YQdd1fwDmXvgXdyvfvBQxwrPRVPLFnhhbxXhncdRXS1cRg",
  "key10": "53cGVb3UAHgZ1AYonN5cnzQTe4MfftsyoJFm2gy5jKEZyGGAEQUxL7QeAwUxgq4VrYbf35Sw8W9K2vWHaJwCJS5A",
  "key11": "4SDQPK5fqHnco386jUtcw6Uzkj5aueLjHGnZNf68RwwGQ2LbAof7dpnKxmAbR8fxWQuh3VvjxFmdKGsPDnyeKxEe",
  "key12": "kvq7TLZsJrcW5vMUfVi7g5KvGgvtSdPLzxvT5Mf6C5yaNp4onMifbhDL8sYMGDz2nC8JoCwXbDgrZc4eyLBCdWx",
  "key13": "2XcBsHBJi99bYutKe9pFbbV3LaJx4aH2zWPZsoL4h5JAr19sxHRhRairYRxBEAaqWtjyHzqq8tN7AnkBPyggiAfz",
  "key14": "5bG8opjeXgaTrdEm45UJN73QzQMJbzaawKXHtZE1JpWi1o87WSsHqR1Bhz1gzrcDiKGmExU86bBZUzBK9PcXDgVC",
  "key15": "36Sv4g7RaiJuU5UawEVceUgsqw9Vwnhrr4tJsrLnZdjDPge4N8SAJ6WQpWjfqasFyCZdga8wbpHi3cnAEEQgGKK7",
  "key16": "2XrBSxek2cKJiEsg5AiYWGiaNPc4zpf9D1BHtP79XDGN1SLpnkbNCzNyav1NoPw2C62qUD4FCagAQVVWT9kMrdiW",
  "key17": "676ztjdXxhjmKh66C8sdzJPY1BtandjpfAefZaK3KMFDFHsj4PvKSXCwkRGn38SQecbAPrThaVnLKnTB1xjGAfPc",
  "key18": "52nyJ58byRi8xVQeMqodVvAhqg8ct8tWWpPV1rnhHLaejzVrd5gozHNo8jMhu5gEsAy4iArvpRadf4qe2pznDc1B",
  "key19": "4Y9Efj3fWZkmBBZVCqwvNEAoNDFuxaByfZ7nnt1TAii8Vim9pVwEKbpczy2aBV2KuV6SwqVMw4zUXP5kH9PyGTQu",
  "key20": "2Tj3BDGL4AGrXP4vdPg9TEGMamWk5HayV6J4T1wMxupgLmiDGJDKzadGJKAu67VxoxGpA6wR7j7GrwNdp6ctesSF",
  "key21": "YzXqzVcNqm5cBvtKReHPw8jQMhsB8EsamqG2KK1g1h5RyodfBBhf7ErfCLP2q1iHSc9zjYWTCoPaNmhWUHyLqGj",
  "key22": "5YK1ySMqEjvPs519fR61ch8UZP2FbELMXJHkMy8L4R5wGoXths1oiKpaxUDLfKS1bmFpfUFG8jggFrW6CHCSXU8A",
  "key23": "3gd56JaTt5tDet9PkWEymHK9XSYF21Be7uBFSBviDStma8hoWX2rz7z2SwfpDnNLVKWg73Y3SauWvtzv1tQora1X",
  "key24": "4FejbUzshkc2awzMcnRTA1XKxisS2hfqXRn5jCZ4zaLWUbzk9WhKeX8vunudUKx4xfesCmtobbASm3mADLmziLN7",
  "key25": "4BEkv9CBATAJvoTpFwmcSgQWSpMVz5qShh3tEXTEocqzfifn3YvEi4dDyvphVQED71SNE7rQA4v68DcgiML9rsWu",
  "key26": "BY1sce89LSF9M2iXy4tyX5djuDTR1sxkJWaYYmjkPtF5i57H5iedB6bmGrnPzQ5pvAZnHQNsX7dG2EbZt86FDDX",
  "key27": "5URu4QSpSqw8jAzZEe8QfJ8pUuxd38CUa3pXmhGVesgS8ydoEDNe4V924tTt6dLTywuZvoV8Vr2jjCbdC3vCagFz",
  "key28": "4CnBeN1xnvVcY4vTqDrNUDVEEmWSmNKRZWkeM6JoQQRgMTH9Ev8uBf7cgLFfJUt8TyKPdvtw7h4xjiH8FsyzaoBf",
  "key29": "x8oZ9S5jxiWsdG4qP3ikgbauyEBw2haH4GYgskgx5kRtRUmpVpRFRvY1ebJfpoR7wiCSdqvBZQXK8A8BtVEKas8"
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
