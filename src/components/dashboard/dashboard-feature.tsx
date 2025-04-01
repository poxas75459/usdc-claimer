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
    "2bRJMXfCQ1YgT56BR2GyP8ozLz6T8HwrU9CkRb4zUuYNTxaNfxac96Em9KZVu7kQqVMqsZgyrzKwCfu7t6QnxZcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGkmbjEyKeVDVDYGF7LAs6dHgfxRNNs3RhboReobY82cenY73o33Tc1JREpcbS4d9FKS7z44Sq4MaJvP1vUmdDF",
  "key1": "9NA2RehPb9MiEpaE1m7cjpW29AEtWET2xxngBBTxa9HoFpCv4Tfke37YMirQJamTsf7LrowG7XXr7X9PQ57FLXa",
  "key2": "3H6E5MaPozrqpkLF3XphJL34aubdbqmJPDdeZQvpjMM24WDP7NXCeMRfUBBuYQYTRaY5YyWEAWv1CpsTipp6T4TB",
  "key3": "2iWQwj3oHXtLwJA8DHTzBAXw6dA6kRkHKFQpCLYQrdqS87yynR5ssJ3UBCQjnFzU7SeGuu1jyA1fyRPwoSF1vE8B",
  "key4": "phqf1UAQZa1CuNpSDyfsmkWWRG13HjMET4wbzZHUrZwT5WCvEok1fAYuxe95gFhmJw5vrrVkPhErsRspUYRD6pr",
  "key5": "5k6brF2XXSFryRfBcKjNawZWFSBrkM1QREchb6R1t2Th8Zfn5tCnqnQqkwyqnttJqdf6AjaJijqtn2PGVMWq4ZBQ",
  "key6": "4S25txA1qSNW6vdNZsKQXFaeuCSrXN9LHuejvbgEsTd5fn2wuURHoHq6Brzc2zKY1BbAZHjEVaZi7LbzoruhpqLq",
  "key7": "2XHh3Mqz9Q5gwqzsY63uqo3SxSAehnYkZX3gTWeJP5FcY761zwFzD8WG9zfkcaa4TvGFuRvBAy5UoxrBCS1Vm4Lw",
  "key8": "fdgFuT1rU9NyPCPRBA8wsgB5442ytHXGqnVFmY3Pj2Cp9KaKWyRnWkZK6oLkBLRSUcdMKoVTtGdpqzRFgpqkoiC",
  "key9": "GhnJF7cr3sUKNicvpprm3HFrV41pW4xffNJ16C8C5f7A7fYBRE3ZADyerW9rTLszf6GgoogjnZUMFFQDYrqwdTx",
  "key10": "4LdfNtHy6rV3SDXH5PmEYrCwtohcr5TU9i1AMAfXb3frRHmdFMVNFWozrBcMXu8xXBGvCHNLYcLAv1Q476aWqJBX",
  "key11": "2Akce78jnftpwD2fLUzNsMUKRXvazFVefNrpUraqHJF6sk1EYCZk3cpZCCxpMoqhHRUuduxWTMqw6PFjr5BTqb7x",
  "key12": "KBBZ8snf4AvSUNAUqXqFcaT8cDPRbWUtDarWA6a1qmrrBJ24GEKsNtwuGCSNWmhoWjuydDf5oq51tr8CmViNtrM",
  "key13": "4ppmQduXy9KGY773cLZcny8pBTAhQCDbFae2ejjth7FS8Lch3AUpCZ9MiBLWx18cNLDnFPF5XitiFDJkRMNrxCFS",
  "key14": "3ZzYZHt9xrRa9fwKvTgWRyirAvwokdxgzHr2AU8GVbie8GDkLjZehgQtzscDT4cUPiHaGMsrztiKvVRD666gQozo",
  "key15": "qF3daeiAYqTcw74nRJ17ttkeVEpvjMPhTCM5JY1qMUCExZCHM6pmK21yRqM52aRF62ptQo3xqvjdPjbE1NzJbRj",
  "key16": "5xRuVp9GNgjfG5CnoQNgMp6wEoHXDnfC9dRvNfRnRV3MWVnBzPVrdPf6qVTGtju8yToKuKWy7Ze8rjZeEAWcVBi7",
  "key17": "5ou7ZNXsXAHTwNKDYeGkr8HXNFEGsKnuytDYQwiBNdSgjueFspgT56kFG5A5vkDipz3HAUyxJbbkjdz69LMbiKw7",
  "key18": "2WbSm6Ce6JJcQon888QZSu1Z4uaegYGgLpUaYbYDG1vtku3kFmtZuTYxUbKwNYBKgww4Hc48uLanGY8TBmbcH5NM",
  "key19": "2JT1vha2tKUtRJcxBGCffSmCZcMNnNLBzpBMnfoYHTixQTRFgCjmDQf8z6SytPKbi3VKiejZZBFWapRUinLwhooL",
  "key20": "4ZdCdob7b4FEhpevmwDGFphkaVUUdLkeoFqwAwWBajnDYrpc4wjzJbM5G1ehXAhwxqpxkdTWFkyQNC4B4FtGXxHg",
  "key21": "2fwfmQyEjzkimvsAfaD4UWq12ptmz8msKST8xXbywo3ptTSt8VmxfrPXb1tPMCmm3gMuJxktmU4ywjDeJ6Sy7JwJ",
  "key22": "3yfpxtTxTapC1D79W7xuxwNDas3xx3ZtJ9LShYW8y2XJQZTEJwjT9uDmBFY6J8D4hkUiHTuPRZi7oj6sowaqxsZy",
  "key23": "tkFWgeALavLp5sQwmrGk6aVjFEybyqHeBN9QjXPACiP1oqoxp2qFrR5pyYNQm8ckpQD3vphnoTA226s4ayk25oJ",
  "key24": "2GBxTZaGyfLjetaZxj9WAC1i4PDDm12HKxYPPwMhA6AXuPVti7ciFZDDyqW4U6E9gdtaNFhHpswMVbA2SXNUFc6P",
  "key25": "4nCXZeaezyiQeQ6wCfKpGNgwZfahbDoTZEDd2iafCWwZ6Vrb5aW19FJuGzAUQaXsJ1123KLGiWCBHRJPVmqtFpYo",
  "key26": "3ehaD7kkNXBNz8mmFLPUnBCnBwTD9K7CuuMLnX9QjRzrDq2kK7ywMVpc8t31xqCr7uFifxR4rXDWAf2w2gkRbDNX",
  "key27": "qnDthTLGyaXL5dsiKYSGTWfjuyodWM5C21NhZVJoTPMnXrebaKkpLa8pYdkrykf93f3Lkg1oYKvnEfx4wpmK2pK",
  "key28": "4GoSGGteenURrJQLzunFegNK6HzJtSb9iQMLxm5FCUHzyRyskEuynQT37Trpd85vUnV8PCaGNLtEpmmJZes1b1ax",
  "key29": "3HZK3v6GGNpd8oUuHGRE8LgzbwChegPYoXwPmk7GVgkGmxxTpvrqK4GyBJWN6QwZJNxHbvcfPTAVgWNKgxfuFGoN",
  "key30": "3oLV6nSiuB26n1CuzHRkK6toktv8XkkcEpyE1J6kcNELYPmT3DXSJQrqqVY9kTcqtKnb3BucQ1DEKPGST5rycoie",
  "key31": "2xiY5VUpPJ4FRoLmYgdBUickBsv5b1JWaepvyxx7nxUNDzXGztpgw4PoTRpndZmQRiF5szrYWMPEhiMEHdQXdshW",
  "key32": "2DqNG5mMpAcdkQavshjch8wDc2vjhFXULAAJuoNgUxE1e1vjGSKiTGWUMr4rnJcEy7ARSXvkqMhQaungZHWXJfPr",
  "key33": "4aW9r6KzaG4kcQ1iaEupZXtVXQ8VcUKPAumUc4YA4urGdcrT75xcgEaQKo76Pc7TJf5jNbkyroheDSRx434U22jv"
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
