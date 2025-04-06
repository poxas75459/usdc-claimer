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
    "ZooYfWtN3Z23bwVRuxLPS8DwworgkhQ2iMCVo6ZZr2hAf7b8z2hQYTj9o9aVxJKAFwNuGgcrfwArnaQqQXyXhfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skfrWppcAiQPupDMugGTqp7Pb4SY2YcoSiabodeVykM3ChVCPqDfMGjUXfKqvMbVTtzfMT4woTghtee8zY53QxX",
  "key1": "5LXkRU7Wp7yCKKbb5cTbcXwfQcR576TKB7aASTTLUfhd5z65Xy77JZMi6AsfqRJwVuGfkn5aqiQEG3U252As3b39",
  "key2": "242SNwnmU5UhCGTPwEb49AxfWTyTAcoqtsx5kneyi6Jo89Ymvjp7Thg47nbzptpHDQHXBG5kcTS8TUdk5759A7Ri",
  "key3": "aM7TW5eN3y1NmAZJX3CJK4MzfaqpwMmwi5Jf9n4wXGnATaEhAaWk5dtZfMh5YuNFX5Z6Bw1xA1HwYuW8CvsCjG5",
  "key4": "4p9JQ9dp7MmgEgiSVCFLCjsBRAvgsonBjJu3W5nXYRSH5u2zoZAEpAGPSr8qsKNrFC89CnCJG2UqVCNrFvXixNWi",
  "key5": "23C3hpxFanjLHThDw9uXeQYHwMQkhGM5uJxZe7EKF4E3SwsBjrdEATnnzogusZDqapA5UYRYS6qie5JHmWBeho2X",
  "key6": "4NjQZAiUZT2yXwbwNeV8DdBYzKJxTT3hyBbuVENLCi5FfTYo5eMK68WmZ89vmNJFALDpjR5M6qBaNHATtY4zcYSq",
  "key7": "tgXMcMwiLoQvKS31tbx9LNSStSyP4W9pX5hasW6y8wSNeWBmnXcEGrnUSwNVkSuAq8J2MifmwcxwvZWnq3jdNJx",
  "key8": "3n9eT8K1FAojiK2qFGpuddo8bZbjU4Lr9WJLrBGakU1JSrSfxtDXJWWfm7iu1bGSpppDrEQVNPEbAEo9zZAvVXhC",
  "key9": "Moucf5rfaJLL9x8evQXShimSKoSASXR7t4CzJNSDU5Y9L4T2rHfefrv3hLt3sfjjjLGc2wdidTExaPPXXbZ7y4T",
  "key10": "62KgSf7EixP8ZHT8ERuxv8aHPgEW9g3Rmmte3HRmNuxTnjfXACYBsTrnEX2gzoDMpc68qWUxoy51NjHSogVGy5wF",
  "key11": "5UmpNfLrtU3tPcW1z7RaoHq5Qq3E58cB56FhJMeaweZAgeSpowyRfBvcYnVjGzf7cEtpxr1qAK9wuQtK4SVbP7zc",
  "key12": "4S153zZpAYjWew8RzDnRvAsKkHNc5ZAj6x9zZ6jpHScYpr7WLBmhADDDqmbPzoHfNTNTdcaG8Zx8fgbHHPisehSW",
  "key13": "zDNVZcBVoLFBySqpkigRyrtLsybHpeJCp86isJsnX2LYAN9YUkKe4mJCMBiedZwE1hy89DwrpTDNuTcBXsU583B",
  "key14": "xqS332QU79rC1TsCxP8j3wBPLK8nuDX2vxSUrhQWZZpPtpiGyQZ739CcXnBeGv44R1aecGPWc8GWJFKR4ysUuLJ",
  "key15": "37MRC4LrDpB89yzNmX2zZPSa359Q7fjEeARPfkH58NkkYiNgwoBUQrtsjyFesNjzbgVckZPWeYYwnEs2kYFt1g5Y",
  "key16": "cV4M5aykfvpf8EvqxYMAUdCL9Gpk8euVLCKFNtVNhzwRWrPwgom26akgVWtKc6NBLpg5cW9LZiVKbMgBEdssLza",
  "key17": "3SYtfvRz7nwnSkb9DdB1J6EBYucaVG1uYn5apC5PgrDrnqJ43nhUbSTBdjnoAYHqi4yC6u3yG3a4eFzJx1EqKoo",
  "key18": "5MvgQaeVbn2Lc9sVLnNhxpaeriNHFaJzYTJj6zf2AZzqVZ3k7XME9AFJNBWRFECWqMyxfTzKSTNxKKoUCunMezeg",
  "key19": "3MHtgha1YF9DYwTVuvdrS1rYgNKD4f6NByK51tyJwarK5w98BwJ3hTYFSQaxPhLrf6mqkNFSWiRYhXEHSbKSbvW2",
  "key20": "52jpL1hA2SEu4hYZqKqKTZgnUoctcRMPaVdgLNCeENFDnXA3rADVUbQ2nd7NedYvpH5BnETb4napupyhm5XETX2m",
  "key21": "3AyxCds9Fo95E5JdT2n8HxaEzc7PNaPsWzHEKLtVNkT1hiCpxYbQRsBUWniquYAkEbMMoTaB9NetYD4wS4kKcEdD",
  "key22": "4ibSUiUeGKTDZtZn52K9pyFdXPwAmms8NkQ8uXNk6JMNrSrWWMVcoSCu6XUQdqGSe3Rw155mvfujtgTC3H8n4SHu",
  "key23": "2BdSC5iDAPLx1ADHXgbroJ3adbJxtcN7vycwdm4fY3Nds2DEPDr9nu4pE2prmPXBH6JVqn8hN7LRpTinRpXtGcP9",
  "key24": "dDi9sURsREGaDWUoWQjmkL9BGMpVVw2zJUPXdeXLfZxqsCt988csDy3MZuTxspYEYJFbbbwubeyYMcuXALKrFx3",
  "key25": "32ZkgrwpAp3zVbN1zkwJARm9V94zaE3a5Bg6KTBhBYWKc84etythapVntMgzw6UfhcZ75rvtBiWxGX1FLPVsudUj",
  "key26": "23AwxbVzMaC7UT7SfHqHNgUoRMhPbzeHEm89VH44hQ6T2TZrBkg3s1FF68iFPa2gVb5HSiyAqcPp1YWWPYDse1SA",
  "key27": "5aJt3i7yBfCmWmANe2ETg2ZqAeeygWbSor99MnwBXeSDgaqnVeVGPWNjWLHoFQX9tqhivKamP55xAw1xkPbTJxHB",
  "key28": "33j5iahWRH2RyjAzwVFCyJMAn8gZMGu3x8P2vwNbxozXi4dC7cLojVUgUxxjo4n15wFKJfQYF89duwtNRApaYHno",
  "key29": "53h3HMFwHEdx23xzAXGD1DCgRfniXYgSBctJsF2d9bP8x6kB9ZcikWPEViL8LTp3VXZGPKnCK7xdrtuCK49qJo6b",
  "key30": "XxqUAHVRAgYUpSw84z55MMvWw77wjKNkHPCLeQEZtFbPXN3sdh5oyn33DxfQuQkrMuqjWkXu2Tmbk8wXWsAS3sK"
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
