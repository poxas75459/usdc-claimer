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
    "5vvcDQCXUEq3sS9UL7s9tcoPY9tts9De3H1wbDTQiUSvBfVvHEkVDUm7LQKBCffEPQAb7FXXyhojkriAPkHLbXay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43WFLP6pqP4f92JVnCieeiRzoyJJt6ZdSu5aJbgcNpQTuwZQALmCgLB3civ2iS4f9SJA4sSzXWNe6zKw3fPUD4yt",
  "key1": "2LN4VYjQNndkinD3eJucGKoAse2ngvf3NhmRyMjHUveABqzLhL71aN69rLQTg4xEyXwocmKXCSHiyb6XJz9tE7FB",
  "key2": "5k4TmHUkbsGNSrga6vApK91Qav1e65TBN1JQRkScbVfxThXMqQEVQszTvjAqo2MfEBW8JsUsT39PV5QGzzRUdTgH",
  "key3": "5pTYeYNT6FA768q5uxmuHJ62Xqi3C4JCFcBgtjj2b5AVQV1JXVbeaGHZohnCDd5nSCsLqNgJqV4gjQeiBqfbk8Lm",
  "key4": "4fA1S2F4fTbtfyDkKrj8AEfHDmMecTZ1SPTDCmKhasuJ3GLcJj5BMhTjVfugzimEgiWfTEt3LbXaRt2QZFMF2kAM",
  "key5": "EqMM3YsAgQyg1A9DLwyzMMWuJxpxVEhPwrfxRMEBoocxrKDpUcWHfuaysZ1scc865KqhTaatkEv1wE1kqcBDvdu",
  "key6": "4gbbhsTUHGu3E6nPVgcrtHCR65kVMCjv3cpD3w4afD98pMDm9hx7zdcoeQXT6RpSDMunVuJdripXDTu6rFJwPeKZ",
  "key7": "3qbKgq78QVWSPoMP6RcPVrJ957unhhKMEFiXcAq7MgzLyuQzhUKbbZz1ndbYrnSzespebtUxH4H6hiVe3V9z4yXg",
  "key8": "56CzD3tXvsC77Rw4m7bGhG1a8YwE1YhYmHNMy3BQVH5c4rc7vxLUCD5emCgYBpUy1WzTzBUJYvvw8WPVupNeXhYR",
  "key9": "2qXabubWrynLepJywTWdJR63EMSbbjtXVYQbdZWwY3ynbAzAhUuBj9DpetV6Y39CJD1WUUFs567ZzTjJmQnaqP99",
  "key10": "44VRjcra6JZ8UPQsinC6roQgKeeAikEWR5qMmgbokEmmnu1UWp3F4uX35L2p7PzSZsFdFPHVnniB4nbkKnVBKjS",
  "key11": "4czHCzrPuMZaEEXZkhXiPmuEK2t1YKLaJxCZ64byEX4spdNzEdKUEmG61sYTAh4RCm4vchSEGPoEoxh95FTQYEPE",
  "key12": "3ExFDsPNxeQC2kwVqS4A5MkKaiZfg63P51Cs4cAjPJytw75nq1ySERf2Am3RnDwkjRuwBnneuG82o5d3CSUskVD",
  "key13": "8FPmbMnpeJ2QL8zn8EzBcBVXkfpPG1SeFzkkxsL2M83bj1JPm9HBxhVLKdN5bqRm4YC6fWo6pNEPtiqynPtjqi3",
  "key14": "2BF4AyC7gJ3URLyo4xTyxbUH8XLmFQYY3EWbfpbhnc8kgieykjDSui9PRcsd549y4iyQqr4Rqa6SVqGEUa9Te7F5",
  "key15": "5M2i5T82Vbwz8zPir9BeTVkRTswHm8fUcpB9LJW8cwsrRQBhnJU94sjkp13A5KLvy8y1ADpvPY5TbYij5AUcTaqp",
  "key16": "ym1WwNnSfe1ra17MiFMHY22Ref85CXbHAMVLAXtrJcsDJeXaEEqgmxrHAuBoSDH92RERGMhCVD8QWK8TG8TGfsX",
  "key17": "3qVM7iGv6EczvLiwrXuQ9oYDWxvpJ3MGFbtAx4odq27KD9RWXH8r3XbGcTscSbPizKZhtGwpa6YGoN2HM3tWhJju",
  "key18": "2d1VJ3JDyrtUTFuWAt9tsFWK6tmT1ZitdZHkoyry6zJUP63B9UAjNgnffX4QBR687phAWjAnoQLmmzoDGNQc8eP9",
  "key19": "2JVuAVSU8PyNUrNSv1ipBKS2uaDdhhSDaure4HPQouerQGHQ6rC74x6mExhAJSUWwAXFPZvUvHU1fNFSaQbDWJLx",
  "key20": "3xfsFhPydsyvnm8gXzD2viZvLZeudG64Nx9M5Wd6m76Wi5ryHEApPaFci6qKvJfqszvH8bJk6Xmi8TCGJvzGXdwK",
  "key21": "33JkFbPPLdyuUp3yKry1QTw65xdircQuvYmUZqDLh1Csbs4SSE8KPh7hdY6ZnzuXAFjC6Nvv7oJqwGkUfgXQxuoR",
  "key22": "2UEGbNviM3rLXLYVc4HDPiSF4LZkKVSVgshCRJ4xAK4hT4qKdQdbRpx514MVoaPki9mBA7e1VE84VHq7Zv3S2jeP",
  "key23": "64Z8QQnUbkJYMnod1WjA5hX5jykA6amJwmfykyRna9C4XarvmFqp91Am1rzCnvidqtSLQBrjRUWyCcmT8bY9Yoz4",
  "key24": "3ENMskhK1MogcjHs2drVdmY6s1VaU1WMHwRYhaAa4KyDbRjbj5n9DzwX8Nr9SFbkGgALhZ2sfpGpGkY36TNsxFGM",
  "key25": "BM38hjEbuqyG4cyynkPLuQBXLBuDUUQmLk2NYpD9EuJC3LNRrdwgYEwkWj1ohDiUTcH1c64uYKm4R3424jPmax4",
  "key26": "3YnXWeQo6QXU5bE87AwSGCnVBz6LZ86YpNguM52pkmWLPUiG9WtVjrQKxxJY7Ub5morRFcgpdAHTRSGHUWTLnJK8",
  "key27": "5B8Rk4ctShNS55EP7byYvi9JYoikU9FNsMV1Tfefh7YHA6wCurJB62QLuukAgqWZc6UGRQ7tkczPT54GKT3Ujgrp",
  "key28": "Ry2ShEb1b9VdGEKFCyPmdy1k6CnaX8ZgsuTmT7z1bmG3zrrQnuLoDR4pS3SsPXMfhEf4oVk7w9P8fwf5SDWW9H1",
  "key29": "2uPrwbYbmyUY98Sa1ndxnmwc2bWcaiaB54ZWWrrvBsCaRJXW7uEtZYGfS571TahCyDcZYoR2foqF9TXoWErMZVXq",
  "key30": "2ZwzFVxiSFBrdQL9P4B45g76PHVVBjsGDW3fRJktzBDeqrxAHcetTvHVu6eRJXuQnT3qwayEWKG7RJTxvPxQzZ9z"
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
