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
    "367VUZ7nQTUdX9Sxv5MKURSy47a7zEqbwXkSbzGueTkn3CKUWJdpzmjd1hSSkrm8YfGh1aY2PF3HaWGphnFy5cgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZqtjT9bwRLXP9muRsPnB7oasHDoyTB9fqBcBcqZPYwVw1JRwdmB9p1qx87wAaZTN9aeK53TuzSZbS53xSfqHb6P",
  "key1": "5rnmKYPfNiiiv7kGxie7Dw6Jw2bUFAzTQDgS3s2xsVtuZU12EQXEDXj3LNWxCY2VRt1QZ7JUqVomQTTupYa49vss",
  "key2": "55uAocTyh7vX9tGarkyVgq9WZ3zcYRU3R6JAyhZPYcEGRwwbSYwAzZ3XNbtuNRd1yL7xvJaaZdqtrbdjLqZDaM3v",
  "key3": "2zefwkqCShnNuvht98WLkTDPV1hmpYE7xuvUsXTLaQ2QvqQB9TWyUZqxEKJUhjFaPF5GtELEniGRtixSr9rFpSKN",
  "key4": "3u1K4RSeSLY6o2q3P7cYr5K2uWnKtWQUrex7bhdZJNHvbjm7pGFVLdET9xChM8hWt2Q2W7XKD7V9WoVknPzY8p8f",
  "key5": "5NcokB8VKsSpGXECdsmGox7gMFieVUMKooGNERLUZaVB8Y3UFTG9QeWXCwXJtJD4mjHDuqGmbzKGQbrVW2jtKLn4",
  "key6": "QJ1EQr15oCfwRTkmugPz3KmnQToykE9CS1WCHdpxi6ZZEbn7DjqZKBcEHsg11fB5cveAGJfSNbir8ayTiPxzwHy",
  "key7": "2bPFw6rspXE45eSpvWL6uhcs8ZfyPc9R5JY8NzJfdoB8VdvMgop3syuCWQ8UwK2DJ3nn3X1VWU7znoWQW3QfFFUE",
  "key8": "4UBk7QGz2hHgGNCBb3ER6mqJzsDSEGuh1BZbZMiU5ioMjs16zD1LJ9tkBaJ3hDozix2TZRbHQiTmj3qQdaJGo3FD",
  "key9": "2RNppbbvubN4g7eAABLX3nqPGr48NBWX2V58uNVmuMEsTYZmpKnpeYHgaAX5K3qRXDrUD3uEfN9qSURf43tQTaLr",
  "key10": "T3avw2wGXEMWYYky3K5GXJefopZ86g4DdV1oGuxvY2cMeyt56Yhi9UorwMvnc7qCM38gJirPkDHxjV2NqCvyFuk",
  "key11": "62yZhGNHjUAYqw72P24KxyhqBJG1k6kmJ2692o9HvUsvZNgzdWhfSHkSNwpj8BzZwWi3yzD7y6XeuT2dsLoWJnv4",
  "key12": "dFt7tFLSnV68Q7FhQX5KtJ36RiKQhjLW3oS5dF7AFwBijeFFSwCdCjVF1X1zESTVnPYVoD9P6wcdBm2rgPTBVBr",
  "key13": "4AmerzUFvrXFtEEsrj5Ar84PcGKzTkw8eCGcJUSx3rUWnHe78V4dDfLVyozBTsh6YbU5C5ny35Q8Lu22gyER9yoF",
  "key14": "3he5HYteQHhXACSedqejmSbRPxD8NUenJqrk6MACBwMiTLDSVhr4me4khXm1oDjVisC4KXZMwM1HFw3cvsAunesM",
  "key15": "fCJsgFsW4evJJQbB4zaczUwUcS1ZkYFHVNWFWhdcbejkjbRzBRMot9dNACa2h38qHkYQFhSefFB6r9jCkHby7cY",
  "key16": "5maTXmTGSKZsL5sMv2GFpWw5BVtERpahyigEfWxMu2z2JRjahvkDXQmoRY9R5U6m4CNXA5eJ6hz9FuUdCbgmvWqw",
  "key17": "5xsKaZwpDgiTL3m5KFauf5XLt22zWASArCgLSyJSZDyi3G3kfmBk52MkiCDk2zg1wp5zBo5GrJhCjwEwpJp3iVmm",
  "key18": "BBBsZe8yCh65gseQVWW8qFLngJXNKZiY1VHw7t4avcuL7fnbHwYuAF4w4vReE18Cj5HZpdkhzUwYAMSbX8yXSw9",
  "key19": "5n7AApmYh7Wqm156M9DdUe6wcQhanvAZfZd2vp2KqAi57eYagxnCDnUtRbFnFir89UvAMGUT7fqtGp9R1xdjeh66",
  "key20": "4Zg3sdz3AjLjygaDdtUnfFbGcG1cWLBWe5aa7iSiLW3FG23WLyML6eSSYLoAUvjpzTrCKeDsmgpA8Ssq7sadE3D3",
  "key21": "3k79bdws5YhSjUpP1qa23Sxn6ohP4kefsqRJZesiDaJiQgape8S7WxLkVBxwXr4xvtKgyuBfV7RJN3VVm53vpFrh",
  "key22": "4MahhL5eZNqHqJEBd8BW2uxVytdxci4rFmvVT7wHYGJ1wpPHKjBMFuxFRC6UYt4Sh4AM73gwNoR6j86Z1rHC95bT",
  "key23": "xVtHy3poyMKk7foxH6DNj45rc8pfwJiop1dLo13iom65R2eJ52b9mrTMyBazALJQKm9t65ZpTPKkYGP4deMvcJ2",
  "key24": "2rZVbq6CH5hWzXogrPvjmKKJHyXKJkDsVqzvxq6h97QrAVWJxP7iFNKXNeDmnqKCNUARtqRMaZEdmCEhTFy5sCV1",
  "key25": "31AQyCMFg54yyEHK8VSsSK6hSG2BZTMfz7QYn6SfiYxLXKrqcDpj2UzhjQHtdRri2rcDn2tz4T9doApx7QmVgsEX",
  "key26": "2VTGfgpAr1yKnndBJXkbRTZHE7KFtyXzizm8ZQDw2CxKwLmARduUu3tmNr5Cq3jhu71xWUkxhTXfomfXPkFdMq9Z",
  "key27": "55gHE79G4qWXgDaQxxzz7UodiRWMQfuD7a78wBMCagjam4PvqSd5ghEdBuBhkqWXKxdfCw1WWGVZNiJfNw3LJk9H",
  "key28": "2KjFXTSokwMhmUe996ovZwzkkNpKUSePWa7gaWLBELw4jhzNf8NyqGJqGKpnA4CFaHGqY3cYzMefHKtii3jVZinw",
  "key29": "kp2XRQWKePXD48VtWfvGgfoNxYPcyrfeAjaErWyTShXerPBhkQLQJuRMeN2gN4hKHc5DzC9mSQMvTqoya8DgR37",
  "key30": "2wWAA9SCnSMxVu7wH6bs9ff2xUBLLcv49b8MRKpYw6HXnfYA9UF3yiLsSoYu6rkkDraR4JByBYETXquAwytcZyMW",
  "key31": "2552GMtJuCrJQq1AENp2pkjWfXMi3WsMEpKyC81EKjXCcjVAj3c4Vs3FyUkEyfxgsppxWZwDb3nX1YgPsiEduAD7",
  "key32": "53S7GhrCthR1RMdUnP3sHJvx6cedtZhCkXqNvTCQPeZus8sJf55PUCQqwirEXBwbgZcvqZKUzkWtZncjkK68M77e",
  "key33": "5C5w1uq9JHsUucnqS283GYuVLvuHymx9EK5WA2ueXVFfXfn84KzPcjyQW8u6aNTewfmaudhAfp5SSYSJaXC8R291",
  "key34": "2abDTNMcAZiuQevrsDzgbLfFeSC1DhjdqKc4WTHqSFJoX6CtEGGzBDjUPNrHFeFojj75vaCowsDW1xwgnWR1Nydo",
  "key35": "2DdVbNjuJhQAYiUEh5bchzPFyeigwmv9j8jestqeT9banXK5MMgKu7xSjFq22gWQwMGBC4rYaBvnjvEWPYg1NCXP",
  "key36": "458EDmbvWvKk2CjHUsatSgsRBqnw1DhHze9VAekyyqxnkzQdDRzc1yLZJdGaPEdCefBtAw3wEx4k7Tij7c6Lc7ZL",
  "key37": "3vMebPe3kAuMtsCtmKviavtf49FKuTP8u6YqdH8nnpmShiJ24K3MCGisHA93jq98xXzcXWQRuQhSCRq1HLGA2haL",
  "key38": "3952A8mDZFMJfmqcYeNTWiHx5kGGomK9c4xYBYuFfF9MbYLqu2CBFAHHhvi1xHfBiE9g1DyyQPUGj7xLhsBCvJfu",
  "key39": "2FmLGH55qNGDJrcQpUnoHQvQs1Z3d6mJogczzn1BXweXfAqxscW2U8QYD8kxoe24VGxUE6DBPS7U6SyKqnnCjf2Z",
  "key40": "aBkVy6RBZrAtZzGbZ49zoPwQyED7n6qu4kShn2M31b8kUXSuSGEbKDX2usMeACDqaU6Wzpg736Trx3B1ZuphYbT",
  "key41": "4krhyjLYTjfHbGv6KzCq9H55oJKMLm7wcpqtHZU9hpgTtWGwpfxX3ab22EvFL8Dw7CmKy6VAmrN9mhSvGwPsUmTt",
  "key42": "5xBFJs9mK9cpaYQZXbRSS5Nd2EwxbQnhfhfwfa7i2h2PRqrcePxoY6ZXFHWG4VrVf9BMwVgSFWdfkDyh1FnNThco",
  "key43": "3NSCdeG1yLJLganjN9Bo8aAcANafCFh9zYjfQTxSiNjE5UgtbGsV2VK3zFm5XZ9W2aTAVdtgEqrGj4Xk6dBTzLvC",
  "key44": "2DUyfufZ5tkbS8WaveNEwRRtAB975MEMo5CEPq8E7mH4u2fKCCoEUKTnQ4rpAmp1mAKUd2jG6n1moJGzSEmdyDPs"
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
