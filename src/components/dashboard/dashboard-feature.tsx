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
    "4VHLiPA9kpjWSVB69JJs2MXBvT7EJf7zL2Z9k9igSBQ8bx6NK1pH5hgzTXSDgt3kEWgsHgiv8eCnM9vZJ6TvJmqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jipZZ2NtJEQsevScT68HLYW6EEaLpU7UbMDzXhLXGJX99eyERcNjGz935xJs4QxCMvP6Mu29gJw6ADNnyYYFdST",
  "key1": "2wN2tSnLXTdDajeCvM1ERmHPXwwQhP3H53Hb7v6zgLcbvJA2pkfYPMvcdmAYEp1ceMSyCyRrV4hn2aB8oZnyeast",
  "key2": "xpbwg3wfCKnLmV67AkgtQHGg27kDJg1qneCNRrDVZQbPNUxYhjrt88R6YnYEjjE2vQh6CoYPdJ2btE5Ec8akkAC",
  "key3": "3DqYX522MobFD15qvVeE3UhYsW4Fk14gho8sZtx7YZwHgaXPeDh1wS9thqCxzrnhYFanuSai7Ugb6WYRrCqQSVri",
  "key4": "3dzWiGU2johejBW7jeSVbHtqwFxDYgtAGCYFwVr4gnPG9YXd9rq3ZX8XTwjKHhMHCXgYyqo1hBo5En3cw8GJVpMf",
  "key5": "2ZFDcYwjG5uavXRgDiJNjAqk8tREXKMhVkKfwK5NtSRAd9fLeX98ERZvK1pJjbzhf6NA1K6LW9d8QJAapPmhKMfe",
  "key6": "2zACfhsZb8Tm64UpZt7JdMHL9uBTVZKUThkqaf5CueoH9vDP5d2z532Gd17AxdDQwx1kA2Xfcmv8W4YYjud4A254",
  "key7": "HH7QygWck1HLRs9SVKiSW3TNgjK2mcZ6eeAZxzqA5NNFVf7Yam3vHADCTqCfmh1NaKF5RWjUm6yPW8nSr3KTcso",
  "key8": "2ntnnRWdHH2LrW4jGsBLEYycbE7BUht8Yr6gcggpMcDjJJfzSxyjeWQfGE8ssBFHV4dTZueuor4he99BTSKUaTmM",
  "key9": "4mwkfgQ26ict9qkdijRx3xb3QjvG4Uk9N48HYVG7nppbq3pZ4fcLxxvFqhqjzYocxZUwYR4SREYNMYYnDWFbAWT9",
  "key10": "5aeLGhqmGpt4pcGifXcof8TpdHDSuhc45spYvAExUKprUdwouT3XwjQVqKDnPsWaVxCr8wxP7uSxzAYgEsXnZiRV",
  "key11": "2gUUYiYbnDuBQ9FZZfnJ9TXBjS2mEzNUyARXukDjBHoS2XFPbzJ9FZBeBL4wbZZX5fdmh66fBfAwG26jkwQAoaVK",
  "key12": "2w2ep5vJiNXN5z5RVaJiDqHA7tyE919p42v2oTnmNyMJvro97TcDeJttEWSJJx18zXrmKAQJ1AMFSpYg7KmKLANJ",
  "key13": "2U2PhMPJMZa5qMcioog5Ldy8tATcAZik2mAxfCHpMmEGsd4i5XTFGPpVS2gBk8g1LTKTnqprAtb5SPg3sN1YZY2R",
  "key14": "2PrT7QueSgALN1B2hARQ8SXM5PuKa3QfTAdqXVALyrFhCNFaWkz9W31bum32jSLwQ8mHoQpenXGNSyyKMM83mChw",
  "key15": "fTeGZgJk44hs62zqs2MmyvQdnDgZS5aMq2tbwwCyoST5CNkhRkMftCJZ6a2SkNRyeQoGSXpShnfsZ3m41AYfR4S",
  "key16": "2YDzKm71Xu9xWoEioSQ4XWng41dAdiRbWFnKoFRuLPS2gfiaoKWkHVfnCBnmtuUfRPxs1YpZmabQSwiYmyf3TdSD",
  "key17": "2Me36sPwPJVqoP5q69UsMGqQ79ta5AW95Jy154UwhVEERFvFuUKRF77RzUecTZqQ4sMaP94R7caywSp3HLqynm5U",
  "key18": "2jZS2byUdu1XdeQ7i4K1XAxmoS3Lho8gsZMPPDHsEQNhzePr8hKpCrShgcNK4s6wXNHggiezafnycbym7AA4HCrp",
  "key19": "58HKFe7s9DbYAf1o5jJSjWkgwnPoScAoL8qWToQGo2kWvfYLKHXr45nEa3eKacSF4Y76oLbSdjK5FaTT3fsxxWab",
  "key20": "66JMtaU3s5PxQLyMgLeZfZaqAaMSwCBtRtzbbq3zLEzwgnFTqKegwojUDrL8d1VaA1iGa8D79piGn1rjwUVtF4wM",
  "key21": "2NocKxVnpyBvBJi3EbT6uBARDHMEc5XMU23gvtoZqrYhJXpFLp2MoDcTAMwLF3uxZu9Tys73nVyF9Wur5saYaaVt",
  "key22": "2ZEJ5Qq7c4kcVBnbs1Fix1aqBTBRi7ZA22sKZz2Nf5SCCPe8UjC3fvwNSdMJ2V1jcgvvRMhmWdZ55EB4Vv87QVFC",
  "key23": "3YrxK2PJ7baPwTDui2Te6X8LP5Lc4Mcg8DRLNUmexfUBWXAVWAp1V1LRvimoHk8w6B8wX9J1n1C1XnSzd529qeqn",
  "key24": "21Z1ePWQZSN4Y5HSz4srgFN4NzQ5T1bxZ59QvtSyWtvzyyQR35N4XSKcQZZaAKSyAwRsZRVBD8yy8p11wVh8dnoA",
  "key25": "4VmnW1Phqkw7jcWdRYsuqUFKW9MBQKLFHx9A8WyNkGNB1TvDeqKoKC5vWV1Uz75vEoqvzj7PaWac26css1Ch9f42",
  "key26": "UPo7sdYkaevATCu766vDGdGH9znrtQgecatsUBNyJSEm7UjEFazowAntjuzTmnwTxnQJzsK2NUnpG18w9WiFQUi",
  "key27": "2ZaUw42jKuDDkQS6FdVxQNWtwtkeetvkBFDxYf7WMYR9c2NoURZGx77kKWqFSXzLqobLi2BCyaXv2iZqGEiihJh6",
  "key28": "5AEGoaVFeaRRAVEYJ24wFoTgYBBYLtxQHcWrpwZ92uNnRhE37zc8A4zfUFWNbDKjzHF1n1PLkVsFbMufWzXJnKLN",
  "key29": "2Ejo49G8WaP9jkvYBtqbJ7gMbRP6HJuuKMwQjTdDPR8H4bm8eTBGgSYWfAkPFryRerWBqjuN5dE2LsAJK7m9hWzF"
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
