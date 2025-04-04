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
    "5fTn8iUvRwSGAXcyqBruLRnWXYriyXeNFJgaG9bjQ9aNW8j9NVyUytNs6KTneznsf2BygFuBpiRtzuKdneJuRLTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYx1RhNxFPCmeGw8Tm9558YG2ZKk1ewNxZVjwK1ippzQyWa4Dw4RQULStjdffGKBgpzaadZUpkAbAQNLzAJErjc",
  "key1": "4QntdMDKMKZM4QgC4Xny8Mb8rPa3Z96aMpx3fE85hTRvgNPFGh6dq6A3w2Rv4Yx9pfNr6oVEqrWfmDqCzVf89tKT",
  "key2": "4EN79fyo7TJPsUpjqxsXEqRFqikJrDtaPKSyuuTNPz7iXGELHWBsv9VrU2kP8oaP6MPox12eTysGvpEMJsMB5zfd",
  "key3": "4LChF5Q3J8cS8mK51ma8kxon3godUecyAdE1cMekJtwr2iRDDS31izws4NaKx4u2xFBgL8Yex3c7d6XQi2L4WWQQ",
  "key4": "4rYELF5c3MXTh6QBcVJDQFCpdsjwgJMUJNgPgpZdiXt3aryLjQEHd4fLcKWM21Kv8iePfVVkTnAnNsW9yA8vcYc4",
  "key5": "5jbcZqSxk9CsjEtF1ezbrXc2FkkbuYeHWBACrQDRAcA8Gs68GyNZ5nUWTwr7RQahKu6kt8M3sCTE7mQWkV611ZFd",
  "key6": "5nmhhAQXi2E7N5mFEPjb2zshYmUEzQaKf6RRDkdUsSPuvWn8pSixKNkWMaziBftELfixYWRBFZtNstLmggBdRPrW",
  "key7": "2tGDBH46GaPhyKJBScTUZps52S73dcNV1bbCHp1VZjdL5M7tLP58Z4N1khLdYWe39E3CYcYVzJfcSGYBpj6gLnwx",
  "key8": "4ChAQoG6MKBkWdcqm9nBws97FpALbgT6iaamLNu1g52fzqv1btAArX9VpiQ2yJLLDDqk3EN3KLoKF8eFhtwqycTh",
  "key9": "4spyQZUagxk7Gir64iJeFY5DjKzb32tVj9SrH6g3FTT8uEteDp6qCUQ4XQxNGmJ6YMbs5238Y9VtmNZ3Uq2hcQTA",
  "key10": "4B1cH6H6kwRkqHDK7CFneySBrRKQb7goqyDCQkamonCdUA3Pcj9LX7bN2AbHx6hedyzkHbWayyc6t6frLyKj24E5",
  "key11": "nG5xcEHh8wDzZg4btXNXjQedVZshgoEN9F2KfcCEikjZod31zercNvKnggwspzV8VwAXYN4vf4Em78euFYaNocy",
  "key12": "5sHJ4G1CXGicbpzwezMWvmkNc7Q65mHiXJzvZnp6RH2yTVjp8emPYqfd8NF1czR68QMpe2YrHWtBkrK8QQjfadyN",
  "key13": "2rpxzx1fiMUtjRvffP9VHYc551cEXYjYz5HFrZn8fby6jGtdpx7fiUNfxZc8FDKnf99F6atxsKtxzeKsPGyCkSSp",
  "key14": "2zDBJWcyUDsLjoQG8ib3xKdaF35QU9SzLBi1oJM1yD19Ds9Sxqdf6QG6NUNrd3eD5LSkG28WgNRipLwK9ZQcyrkm",
  "key15": "3CPD6Ec9evffNnFShjj21r4js6ADQHufVgeGN97VKbV27QZr4o5hqTgVB6AoMEHTtwoFC3xYAShs5uG2yn6BM9xM",
  "key16": "2sc97BQLgajCwwV5Dw19iyksWB2W4a1YE14i6tD78FT757q7SWGyzLJnjL1Ki9VjZxJJVMqWebsNPVpiasf2DhjW",
  "key17": "6dshoGGY1uiS5kBrhP6oVLFZ9oyfvDZhTyv7gchnaBGmDgM71UBT7HZUjBukyZyKKhf2krmWPDxWXuokuzN8bof",
  "key18": "3RZTJ9Z9qrz33fpv1xbd1d28R1cfkma73cQXptvbMJJvwmAwvPF8nDTekv4MUw42xPqKuoPcGKU4UjTdZjQqKit4",
  "key19": "xchTZbNugL8oGuPo5MbcNpNuCmFvf5EYxDwGrBphJe7bTbFGjNqYTHtfFVpBeqxt9RygtSDoLzkfaoYVhFqZ2iL",
  "key20": "4EzssaJYMr7ZCbMzFFdNdAywE4Husyxc9tS3bRJYdp5tzprhwdP5aVCih5Zgdj9UvHmaEDCZ62fD26Mx1a7xHYWb",
  "key21": "3Lgau3M7MRYoh36TMazFJ11XU5UrmEFTYURjH7C6K8RNvMWDhq71jQeaou8DFR3BXYpwZGzNBYmP8QwdjibcjtAB",
  "key22": "3A1Wdqjs2HpsXxujUuzXYe28vYw8RMQVtTThU5kuYEJ5gFee6NDm4bTN8kTvfgvvpKwthh11JLUoP8t38eqGQQdi",
  "key23": "26hcefAnTNt83HaqY4LqRTJNJnJQMkWkpdjcWMpCSKFTrnDMH7aLVEXm6Yeh6Smkpv9CBCktuVqZKrApfycSMiJP",
  "key24": "3nTMn9omR1jseZ6xkZUFQwTMBxN2qeA9vUJ9swAXaSZs36U5r2Go2s4WKZFcuCoHEcjp7hckqRCViuhtwVuPCKkB",
  "key25": "5kjqRoEuWSsDbsLTKhWpM3ByMMvX96nqtvPbmcRRAagUeAeJRJB1qQK3Xp8HNHaC4jS8a4zWjZ2eAKscJ6xPA5kN",
  "key26": "5Sb3YZDSDGvJnkjWYrXzHALrcH1nhjXqNZyPARpzLX7Y5K2bmPQwUjGHY68kLVAtC2yUuWzXJCt596Q58PNTBSGb",
  "key27": "5fMAn9vuuebS3yyHbhknxCh9rFeWP2VnmmYu1h3j2Fz7pH62upuXqp8CYfPftUJGHjPvY8QJdCBqyhavWcjrNM7e",
  "key28": "24VDetYJ7cq2BtoNxmSFmGhzzBqkh8g7Y8ujKiCcgbEyP519jP1uTCrzmTpZAU5xMgrufDHHgbjKxbL1EsP3yVmX",
  "key29": "3L4rt9SRda2npHK9f27HWAUyhQr7C3APXB9ZHbMUfsdXoGvzbgayDNnUqTMabsjdQW4KSaYZSUkSqRgZifNbGYjt",
  "key30": "2HDwJZGgcXnxtdDhiTHviHBsRPC2WKwaFqvp2fvUJBmCzX5jhzBmHopbecMbxhPz1etxJ7EckCfVk5zpzSzz1sxB",
  "key31": "4DDB9ms13wcypFfqTRUPpg6EPQxWeTVPqnNw9VaLKqR5vUPGgcKE3R3GuDD8hHsv9rAuZyL3vk3Khb4tBmD3NW32",
  "key32": "9j8Qxb21ANKg21CVYktdijaFs9fkiY8Ym2TZBboC7vPGfRbyNGdtFbHHZgBgQ2kHcsGNKAno4k3ZkfxrT6EcfP1",
  "key33": "4uwefX8WYwQ6BkdXqXUuc3bp1f7TSA6sENETjmPeGX5jfviMEnHRi8LWBcKfZSAKVCn2yfrqKTM4PEwakfmN6SK6",
  "key34": "3BdorWe1ebQU4q5S1hZP7tuTUDcjMfdoAaSFwQqimdHx3kFVfngYP8rZvYVyJn3cCrtdk7C4jkRNENZKZuquHtnW",
  "key35": "39GFKWtiEx3HJYK4YueBNCNAFSP1RW7S9dqdsB9zjTf58LrajjvqV96DDYzHLCTQjTdmV9y2cb9qNMohHtFZFGv9",
  "key36": "2F9MYEXApE6Geu54CJRzBjKBF7PvzZNd8viY7YYZB46mQxixTLsAL3UWcRTo45Wjc9dmokA8rp1HZ2n25nnGVN12",
  "key37": "5nAbo3LRYipFWk2y1AM7wEX5wni44gJdi7Eboe8MCd3Yf7axg7b6j6cg5JXR8PpxDJRsqicce2wGWbjcaZWqrLUD",
  "key38": "2ANRhVCHE8uZ9YJirpfjLXNTkERTzfYo33qx3RGH3tiMbnQGmC8M9VkTUNrdJ81TAAy2j8pJfnYhGpoiEicEY6qh",
  "key39": "2JwoVxmg1dUyoJCWkRVH9a1gG5AFieM4qXsZuN4sSV1mokL7jVuzJsmPRDUTq8PX7nEhfGu72Ne5sqqkumtRQEZV",
  "key40": "5qPpRWxgQQzhbho9ZoUWu84DTRTmcwpXFrnWJtNeCAG7TTrYaE553wSbDMHrB19x3JDmNKCfPypMqcwgJAGGjN6w",
  "key41": "2df1JtNgaRfsz8hhgfueyLjhxBD3SYtpYx6yRpiwBRwYUJK8Egr9fdyiybqr7dVERbHYYNKdrLCMD6zefApNzyA9",
  "key42": "5erdFGSXJqENqUaXgx9VMmNKJx9aZSG93SAqEzmdsiayQkE78K6J1vrXG6mM6qwv2x4vyyHRpifezUpB15m7odUX",
  "key43": "4X1YTitxGwpxaZBTpX6xYL3eU4sGyUWuAHM3GJVSQCnPEeEP6q8qLaH3byekfUA9Bv3tNt6v9w2y1Vfd7HTXvLSa",
  "key44": "2dVpPShu4ZJLneKnW6NMCcbHZX8XZJnBfeq6BzpnhAmzQVFqMXRBGfgn1rNeAwpu6rDpjfh72BK4a9xxjnNExagm"
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
