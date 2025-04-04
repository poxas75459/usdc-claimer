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
    "3mbAzwRQZwffr8ZMoXBLF8AL93XbbjwgtveNvspmeH3P38YLpSDt61JeG4kbf3dGZmdhWVq9Q1LNxodMNxiySaoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fi4rWpqv9Fr8KnYYHv2nY568vU2JSDGbPfdjaNB5WcxtianwCUXc75PoDZPZJYjCqoCuixdnLnGgb1CHTtww7uZ",
  "key1": "VGUY5ny9mdZG9FBMXEsjWAt7kjkhxGtMcybDEwMohSTKT2RiRBF9mK3jep91d6WLDc9Vm3zR77oz2u6Bd1ZQXkc",
  "key2": "3u8k758aDK7XuN7fa8GMZpQPq9AC1Hbc8epd9MRDUrCD1UuTKs1mT2SaL5RnvB8bJShiiAXnkjRjApZjQorVSGxU",
  "key3": "3SigfdJSyQXpeyASMLC9rAF1ebBt3V1pnVCkkQesZXi8cLGv5daM8sJMqRzwFMPeEufKGNhqFkXk1hN1D7qe7U3f",
  "key4": "5M2HcqaLxVLxv9aNrkrcbsx5D4Dqji57maVY3J1Sf5fxan3GWdJbAMHLMwz9w36ameBJnQx3VdcnpWFm4SYHiVHc",
  "key5": "2PWxVPBueYVkqZmGqZjfBL22Jn9n51wcPA1s8psH9mgZuasJwfC3ghRvvkjjzuHTc6a6oGMntSsGcTskgWgVBYM9",
  "key6": "3xLtptgQamjZujj36MvnMZjHCXr4C6PWVwnNEht9qtpZVvg9gT1LvA46SiTt8Lk95tTxwCsbRWtCAPRb1uaUgcLN",
  "key7": "4w95oJLXhMi9JvfyonvJranqs7uSXwoQpLzzsidhMT6JN5yN6FrzSQVna7Zt59fmnfmyLNNFREVbHA5y1DqamLb9",
  "key8": "63kPiU9z7m5RNHCWU6sTEqLAyfBvV22DD7HsfyStk9Gggjf1p8N1rPxypNi66Pqid5A2ySxyHnaThXzQZo5zTMU6",
  "key9": "5EbdxbjYCHbfBgkyJCKvwTBvKzsztYUSbzo69n9nBzE1UCaeNencghYjeTengBDzKGzBCvtmsrJTNPsobtK3hVGG",
  "key10": "4ppdE4j8uWeD9d1vwHjd8SrrphDbDyqmFWhKVsAwsNGu1ZwZLapJZBh1RJGLfJmUWg8YxiL83vFDWUMVKm3FXxst",
  "key11": "5XkAZBXgixa2msD2WtEKExJese1LQmnNQ2wzf2en8k9XKGG4vWNNzhxDbYJx3dQaKm5qiCJgyiHQDkTW6h3mpk25",
  "key12": "4Yxy1DcyT8vkDHRDhzAzdUuBZ7hUE3f1phPGCYM3TnJBPokVR8AiQofp2Sbta1kP8ajpCGTo3vrz1NWXFNsNghCE",
  "key13": "27PgnV1vKbKYhz6onj6zQaJsG1Ahp6xJyvB7ow98yEP6ubB1ejRBgMYAHt7XdJPaghhxUS16122p2kUAqJzXNRU7",
  "key14": "ddokP3AwJqNFNCKBbP3rzNZe2uT6U9Kc2gcVwxXdvZPCQTrGZmD64MEbWJrFTcmihcGmmY4jiRjp9KFVXQU3YUb",
  "key15": "65wrW9Sme7RE3jDY1GHzhRKdPdtR3rDiU5HPiUi9R9Y58T6s7h6d7dL1zcKpp6L1buvDq8XC8jVmMXWKKh17t241",
  "key16": "2dMHyebPFqokRnhUzpLaa52vPc467k1xeqGbD1wKLRyZpLDisfF6FWXbgaS7z2VB3G1oiCkTJNFmUzAtvdJ8wQTC",
  "key17": "4ucw77NFxV96z7JXTp7au6Niy3u4oGjRp3RmmnintXQJfRX58apKcFkuAL2Zip3zM9JfZHppMKxfoHwdJkeW1HQN",
  "key18": "2gcNDUwUPHD9GpyW19FjvJfU48VqrTigfWmigo5Ti5ajj5MjQeyH6is594pzVT8FFo82Cqh195adqZARAYd6pHas",
  "key19": "64iQBdcF2mGtdPaYNC66YrCPcg1NSMA6AmWpdR1gntznswnuJUXkNq5ibtiZF8SstDJsZMXwpgzJt8QYjkaVG4qS",
  "key20": "FgAQmp85kEQxwenvzSmtyMzhPfi8SM9ntckyjSPSxkuZU7Cv6NLjWfLnbKeKxMzEPgb5i8n3MsY7uvn9zN52GNR",
  "key21": "5LRsU8pxJ7ubrggaxLgSjvVtFPmYemhW6TB8XCCQkhY1RZqCqStYewGCseUumTj2hY8heUENXshDswWAYUPC9tMm",
  "key22": "2JmXFmbSNp5cX7rNC31fWzsSNauTY485QkVKPpFrRj1iopiyhvYZjtJGnnXtVeWEnthCXhdBAD7T5jLvFtrJqfbt",
  "key23": "zqeE8G6aVeih8ErMw1PVSk6dgPuzndmBgjNTpH83UVYc9e8VviaLZCGyNHknWpoquSxkEN9hSKvAuk3PsnHJwi3",
  "key24": "2TTbxi7jDJTGcB5qEHktERKEA2meQQfvNfMkVjthBJEGfg8pwQ5HRhZ933TeNX1NpGiJQjhC5ZdAmy1iQxEjvFPb",
  "key25": "2XfSY9a7aFvWBTdFKjGv7hiJHhmDN5kKnsKwZqmT4FyzYh7KztgCB9ewscdnTKyzSg8EbBTzA4FTyfDsKRWDp5rU",
  "key26": "eXbRchSCXeYJChHhAPW4tbLuZUNGemFkqBCEjkWhVZGRoEUoKswF9Z4UwwQv5oRANvSa5gheCyTcG9aUozmWHiQ"
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
