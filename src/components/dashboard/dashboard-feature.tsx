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
    "EyEkqSA64k8JHqJRSe2nikUM86Z1v5okb7X7hWBN7XGTGoUGcSX5sRs95DAbyRSrRdiVkgfWXFioxU4gE3Xq67L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AerBvFksvkPk5n1fhZJtQ2QbJ8CM1eUyww7xxsenVmk7VeLi6WbjzzWG5sCcwXvsJxPrXsGeUDjedE938wN32G",
  "key1": "599TUYsQw61czaakX5XmPQiB61pSun7gd13zn9B3scasjLEqSiyq4hFAhFWeFYoMzWZoTaMHEWe7VpwGoBhn9U8L",
  "key2": "5Ez6pXSNDCiEtpeAEidPAkvFGjcTSf9iZ1cCpZXJZLj4kUUkFDsX6qwo2CFKQJ21TvoJ7vPzPUcMcL8TW4xNk5tN",
  "key3": "3vGZWR59etkWHQ3egU6kdZgjTsEeTS3gq8wjZqHqedJWy1azpTWmBAVeKUgTkhoh2M9qvZcHx3PS4CwG2L68Szv9",
  "key4": "61ozgyXuZG6fL9BnxggHPBP7nybomKAmUoDd9gDYHfDRDRL61E1tayDTyvQjQsi2NqSQAi3UmGMdYCHvnazB3L9B",
  "key5": "35mJ3NmoHW7KEFVnkWcKydm99QF7YYnDETBFRWW4kzZeVWdadc5itg4dPUtyRoj6jL45iz4HUngdhdSU9c7McrCq",
  "key6": "nPvcrpLChxtqfXsHHSbfDdRJLEY4ysrEEFuvYv6eXrLPAiMJRbewThEsR7HyJ38wCQE1AFwMqxpFFazCjXtFogG",
  "key7": "2ygC3hfvZGeb6yHr38JnVnVtqQowCQ4pG2yyAU8H4JGHFMNQ4uHosStSYMW2zVquQMVS13uFzGjdJLcS5LEgbsyN",
  "key8": "fVnXsXb5Rm6y82NoFPM4xyKt58dJqFNr9JzHvVdNbtoXMQBDsFtf7Rgu3GKVEUosPt4hnPEVV21auyZwXYqLZuj",
  "key9": "3TnD5uB1us2gTKEDH1kcpmtsbJh73q5zbEwfDrbffRbi7YrHJFpzq48vzofwpPDx9X2njJKBHPAGgCKdzVxLLRam",
  "key10": "2iG9YALyTvY5wBPxsD94N3JUYqbk45ynjtWSRwxoc7ss9Af6joyYKhPqB4t2w8yBXeF7bNFqzzdH4ik8Tu3CXUcJ",
  "key11": "4yHP9Y5RbuhJud28guaJvHdVmMYZng4utFZ6aRm9bm52GhM5ryBhM8ALXzQyZUKre5VymzJxYph3WvW1EGmnYXWD",
  "key12": "2tJdGoB3dtFHMkjkhqnkY7kuqTssuwettbWYJyRiSMhJsZwfgrUpeMspmeJiL9m7dXwkm7TtNkUwMbg3uHssMS2q",
  "key13": "2kcvR4hosMozKFBTgyvDSapqe1F4o2fyQvmgdRPisN9EDFSZ8yWz9tzP3yuvXEx5c63uRYJSQGAikWYGFYh8pohC",
  "key14": "5Kz9Lmy6KNUGgTVZtePBkoy8a1fbbHL6X5oT941ExdX3LzCJbRaxvMHUyrSs8NcgL1D5Qx8g2m3hvMxprQD73ASy",
  "key15": "5AoM7VvEkXQPtmFyLwnwjxX1qWGQvjiGQQ21XXsRMDxEA3bFrPL88CYGvHw1caWSGUEQRQBusW74XWnQT1XzrKjw",
  "key16": "iesyjbdHYyJ8X6NfhKzmUFdrj2pEeNxViE9sbE5aZJpSicJUHQ4j6mDqJfwemo2XvwQyRTP9zeYDUR2iAQb8cfV",
  "key17": "47Z4Yw5CQBDsJteRDzwV5CwKgbA8qHCPio6zM1pbd12xDTedPKbQxvw2zPUWgzoQTnfmwRddnTkxSP7UADMzBXHQ",
  "key18": "9A941RRuJhSKgjgQCy3NxvPvyLyQzw2pnML6RwyPWmTouFeAoGwTh1RRqJQKpcfS6o4shjewwi9YL7QUR3ngoHV",
  "key19": "3RyFY7EFntoT8yWH3Yi77qXJ6Sv14bMwT2oTw7d77fsJLif4K9MLaPj64BVov279uF5MGsN1GPmQnoFz72WzNypX",
  "key20": "Ws4efA7dMyPWA8UMooxDasib3Dz8FUj6eJJNp5wfHAxRFLt195Ke1CqZ5AFZNjso4hH6hA7jBKPUAW6Wvf5ttMW",
  "key21": "EeM3B4qPQpXAwYgmvpSD4EN61kmLHWMQsTzYDZDsvxBgaz7apThUoiMaXUw58XM3xVS6YeWr9KWJEhLsZ4dSRjz",
  "key22": "8XZ5nGFQ2sGissger93QVnj2YZQ8sRQ66hsTNRnucYTCqFrozaHJbdLu51ommZwu5bKPFoxQeNruVn7gWiLUThz",
  "key23": "5dKATqFfywFkgGBPqPMGUqNevsfK3hpRzccERZoJJoZ9dH4yfRvThDMG8UGovLyN5CMsdnNNourF9drTdhi624KC",
  "key24": "3ANZiWYWPLTQcBDq3WG6PnZ3pLCXxpy4eVDhcVA8LbsuZvfLNQgzEje18kPehxGMV9jUMiRBR8A56bK4uusEFuq8",
  "key25": "31cy14Crb7wipjd29qDWfDB3UKrsHH8iC4v3oXYhRjBH6uzMeFUTXEhs2N9U8bVBxuk6vXVN8L1Lx9UqHmxta9md",
  "key26": "5Wd4QAM5ddYXfQkTP3KNfNpMiriNfXcsKkaNRXyHyhS6ZDTci6Uk8PkXxYQPfLpEgmmvuRNAmLLYpJnt3ETqLTFc",
  "key27": "2aBfKb6CFwPug8HAhaY7ND7ZHSwGRaT7ETNHRHMVtt7njsKhEtdpx2vPHUgFgZ4z9eaxEbqwJwNyDPXYSM3n4bXw",
  "key28": "biq7HU5s8DvMp8ghdDjkAk4huSNmhwrE8s23Cx2LxLR2fcP6nRR82Mazjt65SBnbMJ6CdxHXg1eiRKbc51nBQpg",
  "key29": "4PgvmLKdcXDdPJvb8k6uR9nHBAJkg1XiC1xf5BtSwPHoLRZka9japJVaTM2ASGCmKE5ajzdZ4uov7iqc2KKHSsSF",
  "key30": "4hsCN7ekgB63n2uHAPYL6mu74r2oFw4KqAxeXLMyrUoP1NmXShh3ZAFQiJgzbMDinfXGoKpqg7kSG1a3NK1FQtJG",
  "key31": "FXqjxkMwa6vKDeGUyMoW1vqJf5JVoeJU1rkGkioFJi89wJtybuWYUMMQJx1X54S538oiRU2tG36gBw5dDPQELZY",
  "key32": "2agmkZhM4UnVcge4swioBTsk5eXV42S3uk5HyRGcbFFmQ3GGozqLFM92J7bq5rPK37Ua3kYrxHKsyKhEyP7UMULR",
  "key33": "55QRW314uyM8NUJZFeeVdbLeAbuvp3ir78tKJghA9RKHw4EAuxDHPZzZpa2WWttaEKj98sZyEK35vMUbvGH1J4u4",
  "key34": "5rrfdZ8qxuctk6kmqPpeKABwDELTeYq6TMVczyG1P9ajfRkURatepwLs82ZpmWrhwn9vmmPSho3s7yHRc5wrdTjG",
  "key35": "2ixwBksEWnGgx5hbwbL3VFoSCzNKdBX8Y5exUhfBy4QuxvMgJn3tgEVRo4pSKvjADS9pQBteuh3auzXEcycJKHVS",
  "key36": "Dwj4Z4GwfBu2jKabta7qZnkApeq468H53as6K6TeeMnbkxX8L4Vb4GQvfu1PnM685AdPVQT2nFv9ttpYSbmw9zu",
  "key37": "624P2sTT4dQFXWzJM1RXbnz65j6asKTPrrkWAPTgdoswyx5t6MGssBWGb9uxf1dAh8e5P18MemGeCKLJdvQnxQXM",
  "key38": "5UJ6ZmHSgSATcfSM4Fk2ZR5dy2mFKkyNg3QhZoVgyAcp9Uo17ZCoq43aJnVfDmn6VgLGRRSsmiXuZVr5WaVy2fDQ",
  "key39": "5BS6PUkj9rWmZKkHS2NuT1DLt4cdZ5xup8xF6ME5h1fbTuveb1azMJkkdaSW3P2cUeFQEdoitfoJzjBdyb6x6Yxr",
  "key40": "5FbyKUu69RNSdRVp3Z2DVJhM55fEi7t8DfTJoRRWoYVxgGsEgprwP9osbpDNNxzZQbT8YvUre2kcLw69ZGNwVKsa",
  "key41": "2koJMAfGnSGRC79seEzG9RUFyEZFgqyHNyJjb1o6Ui4ywb5mnM6UaxBHSd6p8YZCJ5tLNuXBsGhQotpi9GpK9eJZ",
  "key42": "5bdzk5vk5cj9SBFCGShyogvm23ExzWvjquQzGkRABGeGV2C3GLVme8mAuCjv1Vppr6qC8UWYPrbWjAVxZia237LU"
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
