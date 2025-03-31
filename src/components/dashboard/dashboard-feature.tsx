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
    "3ecG2ectewSyUU5QnjwtC7VyvTCsGgRikfN1tLLEFqYqzRqbnqHgkyWwGu7SzMZJszeerxCmcVFSqbk4DUgFzSKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5pRWNUo336dC6rKSwUpkFU5UmXuYSoiwGou1NGn6t6LXfbQHZnV92xYUjyJeN73LssScHrXvwhbbVbxiwU1HTg",
  "key1": "23DojFQT7R1XmnuG3NtSUmTuCjE4qS9eZoUvppZy1fRc9jqQo2PJqQZk62LLC2t65mt7ZjWkB8RbRzvcwgMP7xDm",
  "key2": "62UmPUX6ZLEQMsV1JKs387zB3HrUUdMKhtfmVGexVZHcXHtmMpaiattHwftTGMi2emTgLXQbmDg1WFgPs1h26gZi",
  "key3": "49fwkehfBFQrcHEq42jg46axJhChJtfVDni7KVtvdKa7MM21kfQHxDdjnQ9KzAeD8PBrG2vF1wL4LMHfjKegjf32",
  "key4": "UnVujhM7Kd7r1E4j4YA59MaPirQyupGiYKsPu4YqoinCUHNeeeZ3pNuwNNQMfDeRbKSNz1ywxgMMcjLEsMVgMY4",
  "key5": "XdxWKVoXHFdGSAS79fLNpSdvGCKnyYV5kQU5g3QZt6dgr7tAyjpgVfW99xcgbJc8gQAn6nKWwUwHb7edfYSCGeR",
  "key6": "4QyozLyDCEbLutiV5W7Hg86DdLz6HXGRjMzr9P1gHMxs97KHCLsHQFDGybi4iRjn1FkCVaLtjTnHvL6P8ruJKW6h",
  "key7": "2xTmbyj4Mf64izHAN5rdtj6ypJNwvNviidDw3fnYEi49VXx8Ya7TDcNDPQ6GMMpJAEZNjba7e6suh4QQR1YNk8Ni",
  "key8": "3oDENuRe8p4JWJWhZUmwpTxdZ1uVudrLt6Z25GApTFuT3a6EtmfFKHL35JbGdvNG2RLSYbH1ZYMhkaeafNsin92W",
  "key9": "5K8A4wQGiWa3AgvzXG2ME8BZZWfCdtqZzUuaSdFr2a6iazYBLFVkeCjYJyzouNNbnsECvFYxCnYcayNNmYs5pFz6",
  "key10": "2T7wLAXF6px5yendzq7Z2gfm3idAzADHJ2HYvGiRan52BQKXPAiywf8z6BNb47XaM12ruxhikqzqfE83kmxbnY56",
  "key11": "5FaoVW3d3UfGG3oVb3F2b1EwWpvfZeCn7146AVC94ReykcmoUzQd6zYugoTd7JqYkwyrC5QXH89amdthxDnxLksQ",
  "key12": "5rjSikQ7M4bMckDPRyXwuVUSfjyvUJ319RB4mPYDSQnu98rpRgumQbH5nhwqJuBmaYp5FtHMY8Ex1UrfqZ8itd9X",
  "key13": "3HbEF4KjGpxYn8M8Cd2jRpLL8aqNEkFUsjkaqnGZeDRzkdxsXU7kSvKjbfJX2GW5CNHnnCLJuwBQZZ1QZuFDp7n3",
  "key14": "4rLbe3xH23Uz8gJ8RP2qkgDFfer7N21z8YkZduNigYPwnSNpSeSFTZyrbQj8FHcTFXyGeNJcMTw2upj1k28dTaDz",
  "key15": "5kGgPmYuwLjuggLaf2t26RcWsC12FBcXiYa96g6c7RtUyCTcdDumjrxb9uYPGLYDRm45kLbeq6JFdRHESmiDwvd6",
  "key16": "3kEWLua7vRgfBHuyxzRs1ygJc6kw2tNVwj6Gtuoe6o27L6kJfERa2f7hDFixizR1rkgmgYZTmuuHZWcFQuYbFMeZ",
  "key17": "3ps73X6tSmCKqMUWYhacnn5JGL66RzpWoYmFrXkP1W2hcS8zWhCneaCtoe9xZDzcuSG1qSARQEteqR2pKvSnMa6s",
  "key18": "482aLeMBK7NLFiGhfpbRq7gAqDeYgcweyJ6vS3Qcz6fR2rj4Sg6d3C8BkPRLnU5xqvUdYJpYszaBzWtfbxbY93C5",
  "key19": "4xujo3uAVTdmsqEQSE3y42raPTjYfpoEj8TXpf9VguacodsfcfN8nqoq655odqPFASGfPTLuUeTGAWvXnfSujj97",
  "key20": "611paK1tLXY8ZMkBS7tPfZMxdaowujXZbTDK2fTbDikQbuwCwBCmy3iGWaw8nWYNweVEbYhFvY1xPtnu2rhFTGSX",
  "key21": "5odbUxQVvMUkkMo7xuNxGn8RmnH1KU5Bxc6bctAENDaYef7C7k5bA2cJjSwUTAKpfUFRzPHdc2vBDwADy7Rqh66Q",
  "key22": "5eq5zJ3ajF38hnNK96B3iDc1bxcKiz5ynoYiVD28vXCYCeTr9F3sHG8xQcFoNekr2MeXSFMz8XTfHT9VVa3rXEkT",
  "key23": "57o2PDqGjRnrs6NqFWtXmx5PxyES5ZkxHkt1X9xA8UQEYHZZP7nBBkvRtP9aBej3AXVQgeLbdrpyDuG2aZBGSUzr",
  "key24": "3wVcpP1CXKwWmCsb53cM88NRA4cyT841ma7ABLQt2WqzNpkQe8S2iECMXczw8oRWAZYc6SQXQkNRZe8gzUMm67Gz",
  "key25": "KAXT4hdAtaD5o92tZhKVDv6jt2dYf1qq4aoN4udiVxadfDfRpQaUWBaT3QWScKkTVBopVtAetSiYKAg2w2bCyJu",
  "key26": "Bzabfi4MtXaiLfT6E1YN6926JiqynwcNPdc16R7cJMXA9VzyyFkA6yEyMmzNBsGhcood3ZgfCnBqMwmwXd56uR1",
  "key27": "4dE4e8RASNY6g8nZejypdJA9T7dAXtL3Lekx42eyWdaZzk3VbTgMToPiDb12WFM2jwZjUS8QJqJ2NcH3kwbb5f47",
  "key28": "514c8J2EEYghBcNKEkd4doNPYth9jK8WpyGPQjCQGsdeg6fe5bSRmjDXJakpusKeomSVprVNPnJJq3yBWiGZifiN",
  "key29": "wFVSSGo532ez6v7h7ryc1erEnuvVVByNhkrbjZXSwmwNJ8qHXnuN22UPsMPMirVJzesimZHJiS4rLYMwE3viwda",
  "key30": "5oZBKHwU2zEbZxzw6Hvi1JJXVMtsr27eDXR1suxA7Th2QyF4wx1BpsgUpJaip38jt7TKqT23m6MBHMeTsdEErU1b",
  "key31": "3Tafq1jFYpw8vRcK8R5LJQXymVQ8GFkowwJS6gsM5shVjZhr2Vk5WKALBzBvZ8ZwQxcxNW5epERu876fdQCiQK7m",
  "key32": "2eJ2uRpKAkxDpfGAZkTn1ZkTBcsKKmrp6F5Z7XJyRn4se6HdNVTHh7pVcZLRzhHQ1WUEkjGxYfvhT6UVtahTWAUy",
  "key33": "5aqfMmCGbSRvbbGmeV3QZGK6cvFBRVonezX6FUzyG9can9oNU4gGPmXu7KE4ETvrTtdkJZsXcwjUKjpZ5ra76Tft",
  "key34": "29Vfu3QQ66mDUFBwV7eCvzs2vwRCXsCuDMm7yQEkQVmX1L7xJPxqkoPFSn4tWLYKaT2w3KpQk1ZEUy4d2JtSSqTD",
  "key35": "5qeL2i3W6U8cb74n8ZVJvWXc9swv2pbRt2gRNCTWDfLZ6KcNzfSSKHmU2RxKo2JjncjvGNbyuoQxKt8KgnCNuNdA"
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
