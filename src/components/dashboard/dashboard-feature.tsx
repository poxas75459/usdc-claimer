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
    "QW8vWXrTVqbL1iHPZZ67G4iLRfafxX6hDoojDR8pCCtVphytyN1tkSHcfqfQoEhPchJUtkASvBVbBTDvdVEqtQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wCFa1fGM2H6kcV2tRs7Tvcz2DU5a8Uy7tqNH4nrKRx1w4tiRayydRjtWQnJv4m2ksy7yMGMDQMm9tSZcezpqJA",
  "key1": "23u5etCRVkoDd5vETYZKxcSfRFdWXzTDNrvsscy1FHTSAx78f5VZeEkxVuxeuBi3tiWfjLTKtvw3iMZj9hLVvv6c",
  "key2": "5gXJj8tYThNcYzGnq7HrkrBGVMeZob9civq4tLRTBddyhDs9frkPKqbp1DkmSeWev677seiM8hDGtQfJC4W9LugE",
  "key3": "3FaqwsFbyWdsXsrH7s5m7TQbqaS9y1Kzas99SEU9ELsGLvd3XqyTYkjUjFfb47JNkiqg7Z2zosjeF6SKedaCHZuD",
  "key4": "NzkT5Z4jEzTEvV1VJxMPxN9NAd1Y3xyv2SM8Bxdsi7iwbKnjcEd1mvJiDqpTdRd1bmuVwFgtG1Hj4PxFAoU7pmn",
  "key5": "CgWkeHAj9guz8ixW9JGxZKLcE2ATuqzHryvAMQcJ2qWgThKtbXqPjFAZCCVRHsNHPaa2yWBNDnJuTp255qFYCGJ",
  "key6": "XpC2XCqmiHfu4fxrZ3Jawy2fSiSsVEYZ3aUHvLojf9PeELTBek9kAdTn63hknwp2RhkANuNkvVnAyhLVX66DG7v",
  "key7": "28fFjFfz2kVQW53MXWSvxcL5fecRL7bS9AZzQvKGFZbiaDYYRkPnPBrCoN4q8aCkd1xHBt2RSAg8NKUo8jxQARhT",
  "key8": "494x7iK2UihUM64Pw6PSigYcnJsBuFJrgfvth71AbwWbAiRU4XDdjA6vGrFe94YEGBZHMTtCgxhUtZhjNVEJhzfS",
  "key9": "2YnG9DnYsgCeMwPm6SNJfbMFA7BiwtiGUJ5YE3kXrYWHhQA2nbtZuZaQkZwjqMZMwa5GgPSy5SPzmarZaNzFADAW",
  "key10": "HjKVNjsa8PGwTJtU5w2fSUd1Ui2PL9N51k3skBKTSDCojMwKvb2g52KWXat5MLTCxB1YVT4VSHAH1Mg9qLjgtK1",
  "key11": "2G3igBXJAy2zPBAVacJxFDLdBaN6ZRxUASCeSKeJqukLR1ZjKaXSun9ZvxWwKp46TbJ5QrupuQvptc7DRjaWaqo6",
  "key12": "4VdGszxgjNvj1kgWcC8mdCxtgsezA5X7Lv1Wn6s5V9dQsJPNzLdxf4Z3n6EZCmhu4UDbYwUGQfbqpkPrQ13R68km",
  "key13": "52G4DHQMF1WiSEC4ANSrvjG8ZKCnetfVhJSy21ZcCGLYcmxgTzyPvf4xGa5LLJdugqmP2nXMnKbQx3gm7r2wwpuu",
  "key14": "2j6DD9CL3AyuhNA93De7wa7dAXLuueHXymCGbr5kqxhGu1uNmCwi9SHr87mF1wWyJZj9rERfEyxJfzZsgcoGDdpo",
  "key15": "2WA132PA6tRiVcJH66sajS3mu58B4r3vDVQjfVGXr42ZwCtuvJK37zitP7QJRQURNLxjGWNDxo2k314Y7oW3rG7",
  "key16": "Ptfiw5y9nfN4J88q9gGPy3xSUgwAv8FFoF3wsxCkpLZ4m9boJeQPocZVMSbmUShKPANbnBTvkQjWWB2UjFBX9B7",
  "key17": "5P88WVzvw5hUs9xWWpFK5C73YM3t1FeH25qyhuEKWW96NsVGGfV9t5QFuZJhNMNQoXDgtWEvsLEJXVDoK1zFdq4v",
  "key18": "2LF11n6xxs5LYqyuZXZ5qn9w4SghyX99aVvERhmn4ut6MrebPGrKZ91junYXSVkvDJPkdJyCMmFqSZmXtzUjXwNF",
  "key19": "5w9uoAwUrZC1srJ9BZ4v8dWGkQMrizcFLUHdgrY7dFM9q1iKmmhtFEojUwyKP36rYYsdo4WPFbxdYN8QbkSD8maC",
  "key20": "rWxuhWixk5RpE9mhG5XY87HFQqbARDiLayHVcQAcUm51eESVSqz17vPQtourzdWgM9DfgAKPYDgpZUcLdvBBtnG",
  "key21": "4NPrXVXthp1BEVThFTnYt5457YsUKL2NkcRrrjCENpXbS5r1ZDwdEPFTkiqsD4z5UxnTvxwtPHEdm3zeDNss7AM3",
  "key22": "39BMM6bQWz9X5UdofM38zHs23HpSaU5d4znKEQSkadHygoU5UjgQh4AnuG1n7BcJYoFgeqxbPXBuHECjmqD8yp17",
  "key23": "3XeraYxwndcTcSbbrg9Eu7X8oisgxGYEeC8YM58RQcjDg77KE9NnRnuSWxfKkAvkNVy9511WvGfxRz4iKogUi3mn",
  "key24": "2PQG6WdTkCuVyAkTA93GsQfdta592iFMxqVXwGYEaPoymTxAzfA95buVWWMijm53ZTi3L2mGFq5gKjBGSQrx94HC",
  "key25": "4dBn3WYhKd1zjgwdp41UGG3mdHnZ75DE5NCEXfKTGbYpdAPQBLLfTdh3su8MJwDmcNPCui5LiAWdM5nfEEf8T8Uc",
  "key26": "QahZHUqDTJee8yoRVWsxU2TasGXFuMzZZz3ffJSnwDudmSLdACsCnLJLCrvEuNTRDvagdBVdYWoHrrsbyYcnTVG"
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
