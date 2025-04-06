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
    "58yhXrJMcGgEaqNWbYawPet2GdAeE3SrHsNvGwYNvNQaqDYLFsZgoaHABKhAx5numeoYckLiSfuJNZaXSbFzE89E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQFRMBn3p8cyZWUv3m4xDDE6Qv85pt5Qm555XZQ9MqCiZDxGC45RyZQbLUnWDYaNZydbCiDMRayXmGUhehTWznQ",
  "key1": "VyeRqUxMwZugpPJNNN7L9HFT9UMqcu4nTVhQiK4KwqnWM8Z863AWRa9czu7G19zu3pYpBJr6pkKcMrrpPGCdeMa",
  "key2": "3zJcvytPBxzFW4b9HzZ6Yeu5sU2tpkbhWH1zXD8yhJGFE5fXbusx6kE4qQJ2qjWN9J1TFTGUkhv4Tf3PdizJ9aVj",
  "key3": "4xf5vMcU4Mtf4qUVk9FH58oKKLvzJofDhMqhPTXNuyhM62iw1AxVm2AJCxvirBVKVpqL5kaAENqf5TfFmQkTMY6B",
  "key4": "4khEAf1cg1p7SoW9uTWniCzTP5E7cUXYr7Zzqpm2vf4Dbb9SnL8XwKSLKtTZ8uVRnnUC6j1rJdn9MY1c6mhnMEjc",
  "key5": "XWAhLz6o1SGvRkntLGCJE5EEvrMc2ALfGQLewvZraShrkW9SVRa5n6LsPfwBsUrBsAc8kbLwBQNM828asfnrwAL",
  "key6": "21HtogfwQoysXYYBz2aYNXhafaPhBdazDNmg1bP5vFVpjKHBuXYWoafPmTVQkqahtfFnYwHMjKaUajgdX51wj7mE",
  "key7": "4ZEaPMQaqPwBNyV6dYjCZ8raUvbGaXpN22LQjoWBAk41RZPXwyskMgrkEkHM1rg54SE1GbFvnnqAtizKAA8afQXb",
  "key8": "2WrDegYHfw5usEBUSafwfhnYQCPdvdDTE3EqDjJtw6w6ac7nLzdC5rY81yu6sLajugmRczoW4DV2HeBMjPmQBv2B",
  "key9": "nVJHzVuK46ug5m4zkxFKconumprxYiXb1SiYiN7ABunhSMtcombRBRCJFiDdoaiWDsaNigvU3eBsqZintRaUFym",
  "key10": "3Ez3AS7AHJgLRVs5KSXkQZoMqw5DxyVBd2Tfg128QsWDdftJVU31aSGmsoxRCcKj6XA4RhaepERCPwGEH5v5XiQs",
  "key11": "8qFFcJJ79rE5A5DHcBDS151Jbs2gpW8veTWm18EiWFJcm5m6wBAkjyLmaUGAXuysAogijrttaBdi5YZgqrrwrhL",
  "key12": "3nFLySdb5UJmVWjTwy37TBkKkqtD7DEgcH8CurP8fTGTkJjMYkaprucnAoU4WoZVKtBofqov22ittYwrUgBSi9eg",
  "key13": "4zew7mN7RBPqdFVoaDSBEcjPiFmdqTNS7AVe2gguFtKCUyh89L9MC9Ryk8efpXAz2HBqaWj9wSJxiPyEmLAF1ckP",
  "key14": "JPRRoAhBp3rGjt2ooqUTDUmieJDxVtDBSfZsSSzx9gF1yTG8nEHLwDKnv7Enpo76JNcqNF1giYusQ7g4skisjXq",
  "key15": "574BqZjHr6MdfHDns1Sz4ncyAsU9XK61BB43AfjpiD5WMMJVuFT5QS5v7e5WvvnZdpu1moQs3zGbbd2wT4kqiNFu",
  "key16": "4aoHBsfCa5pNv5cS1u6ApFkvh8MfTaU3CqU7fkVFUu3QhQQKGTCf2Dowqrd6ev6WS3B85Smvr4CpfdWxyH44hAso",
  "key17": "3LYAEjWG5cVy1FFGKAW2R1DziozKHxNb5eLWWX7bihiz22e76EfHuZsPtJZjfnU11SkZSQATpsAKjJESdgakb9dK",
  "key18": "5zo5eoRDbqfavdJbUrVhikgzryjDdbs3mDBgxd5C2ptGo4gbnvMuJ3WCuHDfdRAJw9gDv1dKKpeoUWxdLp5WMkTg",
  "key19": "24FmoN8JP5KWJ3QqxQErKwwP47ro7fZm5q3aSoJZ4Y4Srs8yMDrKkmqC7keUxsvAjYCLueq7gpP6sj4A1qJVs6GQ",
  "key20": "2Ey18rWf8MNEbxTnmRHPASqPXKTAaLbqqdtzLwi5Ezu8Ep3BaGVLLemGRLd3YTG3hDFbH7LMUYjhvhu4gcaYdTzV",
  "key21": "5uxxzcssgQYUXC52aRDETNSWEYSiixhe3RViBKpFxTKSYnDuvmGsPPpkwmFJbufmfWn7Vap212V5qjAuNPP49PEi",
  "key22": "52v6UkTg1PzRnpVYRriJVgSbvLnN4EyfLz9XfbszhpbYsQVyvSPix7CuV7xf8RofPZFKgrDzv2E9cGZpibu5etRt",
  "key23": "3z4pUyKor4JKPtzfqvuWtTC9q2VgzBicGM12DPUVwoKGFLRtTHkPZ4Zdgb6J1x5nQmn3kLCd5yV2ZSVSscN66umK",
  "key24": "3QaPtmXgcJN4ng7k26hyBXcCiFGJbU4hAw64c4AjpbqbgyRikqDPAAdgqBDPsLe3CfLfVrigTq4VF5M68JDGQ1xC",
  "key25": "Gca3rmJpG9qAsfd7hzLetKfk1bYgpUurxRjfpbhQbt4AJgup11kcXVmkYTeGqx54F149v2tFMh8J4J5TXE7EABP",
  "key26": "53UX7N85FETnDxAnDFm6Mq88uYSyST94dH6idgSVaCQ7G5uVxkaHVFXf41jshQXu9iz2dPi4hvPvM8VfEWrUJbC6",
  "key27": "3KHbDJfV4BkSd1GgLAmV2qC7WqEtfEnULb9KCFC8bUbdmVLvnW934uxtrd5jG9jPVfZHYY5qWjiYXNyCwb7oB9jR",
  "key28": "2UXzmbxkqNrosw41eJxumTD8AsAbq6WCRhmEaBHHTLJdiiV5WRLxyYQRcYzbw1hCf3FS7gvh6stmJaqFysj6iphK"
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
