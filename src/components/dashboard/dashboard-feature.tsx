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
    "52A7RWCnZzeUiqfU1YRTBJArvEBJ98gtsVT5E2Q7dnPvzHJPjLfkaSwmvF2h5Cs7iCVsRJZSCUtwEQ9p2DZe1SXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Qd9CrGraXBLphMa5ZymCVw99LDquaUuZp6GkEfFAUug2E5HCWk26jbSHf6Mfbs6yiyGWBdqiyoDRZMkgdWzVQe",
  "key1": "32fLvQKEbD2ptAEwpfKwu5apyePvipFMKtSngxKYSZsZQ6NpbENqyP9787eaEU7spjk9krY6kcypzQtw3Lqpq97f",
  "key2": "3bgxzjhz1HXDJCVaXEmXzVf3ahdCRFfzrjbeBAqXLF6YWRWLY4DT1TbSTnXj5dpTbwcousrzf2WTRfa2yqZFMj5g",
  "key3": "2bPQztyA225i41NCCPXDUNxQw8mruSymkQ5G34pq7smS64ABWZxGyPJZEGutu8CSAUCSLkQYY8pkRPZ2YnWNC2EB",
  "key4": "2QL5AmV2wpHuEkrNgHWoNKSfSc4CYCNxgCsUU3T8aLvd1DcDwLJzYakydrkb9pAzGJSqjoGMHmr6YQVYn3JoQQwo",
  "key5": "4ver2Mh5DybeqNiqbHrHkTXnHBtWsm7zLAv44185o3nxtZQCxfVkmPWxA9AsfZDRLymHAcdMHQ2tEv2D6YZYVWJq",
  "key6": "nWcGLEKVH3D9aJsERMBrCaABnJhdNhjRam3sgzqmrP2YqixNbSCqXdappN56MdWSrBuDVpqKrH6CisyJ4NC2fMc",
  "key7": "5v3dWgDGvGERH2yQ4L5PAKfEJ52QmmxhM3KUeaES2kfTxWjaQmoL9CXqp3YdCoqbCqzVqHSFcKM4bgxtnyhp1jns",
  "key8": "5ptZesvkenEpyNJF71F74tCr3qzBGt66i1eMA1zPk7vJ3sknMHfbzHm1bSVaXtmfcPmi6CmNpQXogwJRYME3dEnF",
  "key9": "61n4s3hKbwNZ3yKHJRap1jjbLAdiKxzvf7wMTAhAFQgS7S8VgvxyvieCY3i3XzKFatTw6FJeump7eY9KYrbWHUf4",
  "key10": "4q88CFhYrr5Lb6xQNUCjTauFkxZWQD9QLETFNXud6ALUASBGgsJWFj9VQyEcSV5jdVtYQ88MLNUBMGxwWb8prsBA",
  "key11": "VdUunijfbXfM5udacEaX18DCWfL7S2TWyXpxzVYZDyiEBQSEnnGEqQYgU1vp7hBgLxe8j3cCqb21kGEGQwZc16Z",
  "key12": "3JdE4N1kJEFisv4TioDwaZqAsCxhiYYS9iUsmhLvUD86N54ukv1QCYxqomGAjz2GRj18QxtrZx8b1PWrbrQNYuBi",
  "key13": "34fswYb4hZ6BxmujKLMD7J51W1HxYKFruMuPzc4PfmsG2ft5LndtzFTHCdoQmymEXCiw6PMtWks2844tBtwYKyow",
  "key14": "4J4VUFQUqf1sZzGfqR6iCqtpFEW1973unJCKoSpJV4HtPoXjeZhcLyaLy5xpUxjqPRuagE3MAEsVxUkuzyPr55So",
  "key15": "5HSLg3ygVTDUvZDSuNdFJc3Mr4Cf8nCizJUysh2YA7h227otdSXEncMWBCwk5HgCpMnuJmaqzrC4ogYEVAgpvLZJ",
  "key16": "3eF9pdyM2LEn2vtKDpcmUpZQtGecYrNjgsVXGCuwzQpggRMBLAg1KsgmuySmdynw9PcPcbdcrKEmZTCEd7JWyzBu",
  "key17": "fEcRjBhMuPiQkgu1PLj6JeKo3o5UCMw65QyHC77yD4E8Ap4jRRCHQ2tMsJipZfyEf7kY11MqTig4Grrc7X3MV21",
  "key18": "4qf2Bbj3qA7q83PvHgfEEZmmdoojWt61MRBhmFbfWhFQNaaeP2seTV7FYMLGfhjcPrezNozUySTsNsdeWCkjPjo5",
  "key19": "VghmuepFRLaRFjrN2yHnDLmEGabcbCkMKSa2trNuVLb6CPj82voXQNbsdCQMB2ni2psDqNzjCwJuMfWXf3oJYUV",
  "key20": "4F4GaFAKQQphyGJ3spSMhq35KizA6tt3hMfdP1iFjkNftPM6SU4rRmBM3BihudwL1tT7wefoFXBHk1ZrRZpi1vrZ",
  "key21": "24RbqerFLRM7K2ZmE3ggSZu7WwJbdvUSzywqRidnFaaC5u19Lq86uL39Y4g9TH5aLUxYxieMxoJij6JfK15NeauY",
  "key22": "5w5pzMxJRSrUzszRUy6qi7iTLzye2vnkZfWmWR88JN8t5Nt6LJsZwFtqbtdmQ4eH8pLQPboQXH6Nvf9ktA1QF5D4",
  "key23": "4z9Zg7UrSZvWCtEmtD5qoxjTJtUMDAWAmTtjk4bkPL3bNdeodaBnERLrjr7saiyUgH83EUUFNs9MMGAF9v8u5h1v",
  "key24": "28rhbkrLqpThZJtjDf4hbydiqjmxDUsjFg1wpda7obehNeBUjWM32jbPgNpvzqKpPas1pisAqdMnhJ1aiSiZ6jzF",
  "key25": "5rL9bdJXHZ2P4tiZELRouse9QbFE1uw3hQQYomfVydXoP3yWfwXKKTAMHUruxa1gZxXvYtKbFLSn5YEyoYWjTMPD",
  "key26": "38mn8FAg2qbThR9Z1L3uGvEyt1i5MHTdJd7SS48FYmFKwPF5448fmrCiS4Je7CvJUjnKFrfdhddFEiP8zhhqV4TB",
  "key27": "5MLS514JHBvWXbjGs9dXhMuZLwLXKvK6prbFJZyNnXE8LZ9dZJf9zerKhYmi8eepDffaCdmUSN2jqiQghgoQwwEE",
  "key28": "4Nwwc5UPDE6bk1DSsFAu8zGxDv9c4p6ZmkV74gKLdzs4Gmb5Ncffqy1hg3HktoxxGxxGDFv6KqeULq3mcjHA37qi",
  "key29": "3BijpuUcoaQct4hrmu9dwhobPiRyBNazvGbcLLkLed6JDLWZrJXyqNCVk2iBfmM7Wy4z5PhCvKXUj1VmrLcZvm6j",
  "key30": "3xLEnSdKsuazHn63VgwBGHjPh7m8Fsg95N8Gouq8QDpCZvLqyS1bpPMUjLfF464WHsLdBVrwLJi6pY7xFEtFECZQ",
  "key31": "49L976gek1Qmd2QwgKgHmtrgXFsEtNMdzyAdJCapjGEMKkuad3VfyJkPs4LCHgCmq2XXyurFD381NJyN9KgT9Gga",
  "key32": "4xoLaNGmP1QA3uX2iAMWmJb4QXpJhVkbAvwfufW7Y5KJ71ogazcGsw7kWkzaXxQ6vDvybBwZYa2t7YC6dU3gH5h9",
  "key33": "sZpJxD89UsZqCKVVGMpVfd43TW1AdeehvdocQj1jurZnbhv1KvFFhZqU1KBjseuRT5gPqCRVBE546fPiCZ94qDT",
  "key34": "29fWX6JuVnoobg3Quzfa3p2fZe3SYZdZGz9j5BkZ54yiGENYpeNvP5msGGtYavCtRC5wqKSdy23wGihDGaKBuGci",
  "key35": "4r84XquLDvCukYz4f9NMxrj2wgy1eTuocWD2peU7tW74K6MYyL1UCRhFtDKXJY6VNci9FzjouhkeiZSvfPkaFknN",
  "key36": "4irMjtbuVUMDgojG7NPB8v8KZ42kgsW3iZbYrMxr3DErLuDmMTv2CxWVqwuruR8StNW64bK4o83bjW2y8xHfuJzZ",
  "key37": "5QKp12B58DXjasDaGAaR7vzZBYVv17zDaZQ9aNM4wSs7itxsSGErJuY8deow8xvP7g1SQL5Zj7hCDCBZTQi7hc7u",
  "key38": "38HsGyu21vZhaGhTzzDcjdUrVndgxrsXARTiuBUxvV7iTr6TkEfk84rs8EfWeEyeAB31RfMCDNGxA3bsPq7qo6pc"
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
