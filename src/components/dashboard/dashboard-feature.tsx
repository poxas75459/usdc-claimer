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
    "2ycEThpFTpFsH6kfN3DVjZrAyJLJC4ipk7uzpG1cnHwL7xhLwcgTTd7UtEqQcvS2hLZ1FVGTzdWikAv1VQMi3Jeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfufGQMj6GDztTUNLvcY3HW43BaR9kPaZJbchqXGoBG9MAwF7F3wKsNos1mFhzUKDWu3q1Wvxx65vJGjGjovj7A",
  "key1": "3z4ScK5AHdmVFk91fpSSAzB9eeSUvSZcosinAG7DYChUe7nW3DXEqeoE2TsHMCjDtFFEhtYRY9Fmw43Yp6qVNvgP",
  "key2": "gs2dDE7c42oaxkVy4FPrECBAFuCpiUCczkomB5KsKa2bK54hjhW1FZC4FzkkpKrXHmo81pjNogoeE7YinveBibe",
  "key3": "eBW9vmzNU8e9LSWAXghoQS1hCiFSL4Vtj7uG9hv44QdtHxN833zf7RSbstXKHkFAdRr2xyGdhoQF4EnGMKaAyEg",
  "key4": "4uEZB9YPNuQAEhB9Zfzz36zhmYGEgyAqAfTbg523S48KB9cohRoPrT9KbqhWSWZ9BRJzajynMTwipi9rSiAmC5Ue",
  "key5": "4ovNGt7aZMqnLXnYXWkRvXNW1vHFk14bX6DBPUvSEtkqJBPPnKcVsaAo9ua193tnxhBq5Ha68to1rLoykAuwmw6",
  "key6": "2HXeZc9zkMeV9bgF3GzS5Qyx1P1RASz6CGRmEFj19FMYr8HjNfuQkExZbHAzUczLsu4iiK4YzbmkuLhyz7BfLy9T",
  "key7": "5tqPUk8xFFZcRpzvpCtd6y6uHnQTLHE5SAkSVmNqtL8838D31EHa9cfXNPr9bZaqBKnqF5xsAKWfWh8LNjp6BRX7",
  "key8": "3AY6TUNrAKQuxoPsi51up6xsqbvQTJuposK5kyU566ZQ8cohSMa33yjR5cUBGb4tXwCzT4QEC3LYg1K8TJdPrDXy",
  "key9": "2pjHBpHXcAQpH1fSBFyzuMCurdCQzMKScA39n8Lh2Fypwd5y9mZvLbW8iJhc4GZmKBqNbiH6qKCQS8XgCdQHPjrh",
  "key10": "2N213CLG1i4mKyXFXq7nsPFnPdHHDr9RR5riv5i4oVPBtAvNBqQ9tMUeDZmYQkw8eMtCp2NWkjHYHRv8Csqss69p",
  "key11": "FtArLCHcZb3wGzfjY23uyKbeAVumJzV69ZJULqgKqBJ7HCHTZFn1Tr2wdRAMvA4UnaqiQpTjbbnQmDBP4eSU4AM",
  "key12": "5JVXBujptvWZoezUJYvzg7gxGiiphJLcvdv2nUeTbfbiemS5AnerkMFfZLET7SdhtdCJjXu2Akra3wXnR2g6UXZG",
  "key13": "2oNPCpQ8WSwFM67tfHmzXHKemTp2rZ6dfBcXnB36EVDjpVFQXk1mvCny3fjWkGaWddvaorBtpgej4SXoVDa315Fr",
  "key14": "4zMN5X5draSomcta8ixiMEeeZYGt7X1GAFZS4DvbiEW3JcXgwpL7HdZWHKZCmirNn78bejLEqary1CTKsbxJc78N",
  "key15": "3pNaDU8QgM2EKJg1JkxHZygH8xBYCw4qpC8o5d46HU9DMDZjYNx13pLWZ6nKH5Ai8ALEDVqPbWQL65avXr1aBokU",
  "key16": "3KgSi7nKMxqbCt1huioAvykqVvZWiNFp1a35YyR5oZfkEbaujUNeu44sBHFG3eLS6tipdrpMDEnuHf9mwu2DCVdi",
  "key17": "4HmA6hPckwRvyX3w9dZ6DSJbuQ7e7r3oSUUYGxRYYddCiNspF88uLahmK9u8cj8gcqYqnxK7ggFgMVtHGme7muvy",
  "key18": "2VLseSqvQPA26J6g4Tw1c7FcVj7zBYWWY6NneoV3YcikcFGWfrTmbxZgWMaDJ2JTdCH9jo1H9hUBxX9vsaq2Tt2Q",
  "key19": "3B73RAfqYvaFFyE8DBnanxs7qaHPk1LmsbqCHEyEteYtuFwjS5mYC5K9ovxVPqDgP3CeY1Kgv63SqZneYeD4DwGT",
  "key20": "2ReekLt9jGgvqGRsLPVMntWQcT5Yt9DB8m7CRYzinP4kWmFJ5DNcsh4tpKQVcbUSap9Er19Qp8zvWcvxUrra3HV",
  "key21": "4xdEoGwh1q6rLYq74ZQaitHc9qWb2GFBTYPDSsPSJZUeKREAFZ7UB6qpFWxLvMWavHSUYtVg9kYyDWNSVV8RDwPA",
  "key22": "2L1kEcbK97Jk1dpuq4n6xr5teYGWvdB4oJi8xAWWNyPJYfGxd1NXW6wHE1zzJsiY33h6u238E4FDq9cius5gkDo1",
  "key23": "27Bu9v6H4smiuUjtXaHHmHzzrppn4dVhEwB1d4NkbVZJm5ZFBSnGGMubx1isebFGTiEtQ1SYxLAn2Gz9VL33fdcW",
  "key24": "2Rx3cHBpFqdRF8QZ37o8o8v3GzM6fxDi22DkGAyXEsWs5bNA5zXbnrtR7CgGz6if2BCWn7RSn8kXi8sFYfgFex3f",
  "key25": "4A1aMq5QQH1RkMbb9U2CkRxEjAgtDptbCrCQsTR9KakgoNkuoBkHen2gzBKVvgjFU8ft1qu99irxKU2fuG7Lw5Xf",
  "key26": "4FDT777YVZGdV78VghoyNKuYWr8tNqLjTgRJM2BY7pjaPPp7MLmkowShNKAVA2KvEEUhTp8JCHBzo7FEsUmfo2Ao",
  "key27": "5nnvUA6Shn71aori5MjbM2tNTr4xNyawPArn8Fuf9Nep7gLfGRNx4F2v2mtwDngZVvKpwtFebstg4cjpw3Bk9UEt",
  "key28": "31PKTwyLMtd4tNKjvBt9wXubwf7mVmLS11jLu1yFemuexBBbGbrUCuojEeHm9kfCmav2RhP4QwEeeBFjtqiDkkqG"
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
