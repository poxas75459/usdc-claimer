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
    "3r2Eoz8C26qfeNwQ4anBfmcVgU3szrR6nWkRqXUbgY496bwGVqNH5HmDU4NEmZCYomodEQBYS8htxRg1P1aWdtwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hnP3gZoiuAQfL835hpFnm9SttoJh8PiBuqjubQ7ByPu5uanUj1J1P7x32HZpbywpcS7TQjamhYWL2Sc22arKd8p",
  "key1": "5BMZxABCZuVJQvWkrL42fPcJPsgiEvGXM1tR8XXvd1EaGscGo1VRfYZJXMPNAhP6Y4Uaa9njNrtv3eS5qXXFdsjz",
  "key2": "oFYyEHC1LS61vxXDZePGxGqLiJ8LcURJ1XYKpSq4MdoL3T8EFcZV4qxAcsVFdY1kxDzSzmNt4DNuQ5XmxBg8HiX",
  "key3": "3vh3B9vjkeoXwp9SjdYpNjsuFuw8NjSrpXFHEjKdAwKLfwht6vu9b19tUrpw7A9eHWiu7A1x1RKo7qLktvPfMvi2",
  "key4": "3zYGBhzSm9nzXr8jM6TJXNDK3KsynQcHHKT6LyC8Rr5o1kpEkSdBensFCWLbvsErC4vApnVpTqnavS9Sv1kwyxzQ",
  "key5": "8kvnxbsshqocLCxarY6CgzF7gs5s2KMp8yRM3aaXSaQkobvh9bFzA8ivvqaYByURDDcHQ8fZhNYiVfN5vRctBUz",
  "key6": "4YCU2jiaTquTbWLJGBzRsdGPGGF7ZtAXDYnfDqG4zS1VoApPA1o7E7PYz1ujy7JRFP73NTG5QLdRw2qtErRDiAMD",
  "key7": "5zg3QGJRAz5Ac8UZqShGXeSsPzvZ2CTRBDmvfFAia8suUEU1wfMq9iqz1Ew23ZMytudrfdE7W81R8gm6Zr3ovVGW",
  "key8": "kaD9LEL1pFV5CzPCdjAgKD63iRcWnnwpPq9KPZP1yCJQmyVJfvKuTbpbLeHbt3GbWrjrndRJtFa7gFnGuJAKAEX",
  "key9": "3sNTJjPz1KmTd8Z3sN2pS1w5qV463VKXkpuEuShvu2GUx1FwmzMEBvkBKowBZrFYavzhWJir9AokAeNKBzNv4Mn9",
  "key10": "5i3niDUL5aEcFUrbbGedczaBJqsaWf6BPc7gHKwk5kcU2yhqtrRM6RXQXkiMPnsi1P2vAHAmyhLNSH7TCVmbjBdS",
  "key11": "3wDL7585euyZQ8c5mgmjz6Bwb1xEk3N9kckVTgAvbg1M7JNVmgQYFUgGSnNdmqGjajxMkX6XDCW7LmiNKeTU1T9N",
  "key12": "2Ypq6n7QuttwJBn5fzxyDKsiHccRd9BzmqcwcLBpucArAqRJmwKyXdJoenePBuQLS1K8f7qrCKAa31xLgcdGKyUL",
  "key13": "kZJbfuuPkv8x6X4x8W2aQHpMoXzVGVP6ZEVd7AULgNcCFQgfLEspT68AigrguScovs39xh1hmoiFBoaUUyuvpJZ",
  "key14": "4FgszupztkFyXaf8cSpwv2MM95Dvd3FBQLxdu2preqsojHu36zC3BNt7RKdxh6KJkh5dkgt1GSvPDVbTE4QwjUTM",
  "key15": "2AoLjzA9qzRKiNvWw9nGeKUzpHBCSRUT3Lv75aTet8di7vDVpVfScSjcZiR85Egs5AMwJ1La8npcEmyKULTzoVWe",
  "key16": "3nhxkswhVcsNPYnZBuHKM5is5tSShRc4cC3kACqvcKhhxfj4Di6i4kYcmmJUtRS8fmM4L5Yi5ucBST7cxTcvk57A",
  "key17": "5nAJc8SRH4c7K7WZ1de5a9Yjv1FAj2WHXVVo2qNNScHZc1G1mLHMhrrAEqqgTiZsViPotpytVBmafwTLdXiratfP",
  "key18": "kA8pREtnsKXU6k4Ua9yuFMrwSdGwhAFCGL9iqiaL2ZXfvSYHSnM2hzvtqRyPayFfugmWyvScWNeiuMhcaMgoQjZ",
  "key19": "3Vtq1kxQpjjbmER2mpMR2j9s4UT4mkmDyDagB5erneTSoqF36Wvgd1joJBmMDijeBMSUDuzJm9mMw5ick5rEEarR",
  "key20": "3vbbP7wThneiprjWuiQdKg5T99VRhTfMZ3sovirE7beRmpdZvKiHoD4JsnRUVVAaV35ga1VBKFJn4Ae12ruQiW9J",
  "key21": "4rQqJsBHykv4e6NKiXSkiAiKtUDzjfMfVTDMWRBuGnJJNPTMqVYwccAtUYkFT1aDipHsNrTM1iHUQc3GQrMsosdq",
  "key22": "4Yj9Udx312yq1NFvNRh3Et6tcvBCJkiWHEQuXhSv689hzfa8Yqx6JMBizgFuqXmYWxFp6a1hyUBceHPgh9D7CHzZ",
  "key23": "3gCnoGyHhCVVSN7X6q7uGTXQfeAhF7BDmWLsBgA4sAdk4BXqTKL2bZiqKcM8DW6FEFUE25xHqLZy4RZhtWydMoiy",
  "key24": "GQJEuXtA3GGRbBMLZPDSHp9p3oZBjX3diYpH7jQWAX3Ze1z8ndkWcLy6FRvEAp7jUET1qVVtbrnpYpnnVHV5NLh",
  "key25": "3dLkGf7KUNzf18BV6YoEgh6opLGqjeVdr3cf5ijrnZfoHyRaLPJ9VdJ1W7PJW7skg3qoHyhKHjP4j9YkTDx8FFTq",
  "key26": "21n5jkpKfMFxtVWCyeUwydLf1Dqi9NkbHppCq86utRnogMjxkZM3EECsfxChNqcKm5FMkwDyWuheFaDRnEaNxrny",
  "key27": "zTFNeWR9hPChJ3XLe6DetJ98dVXPSfAtVvoWz3RPGjKYMvfgPYsH7wfpvRPUaA4XiEDHvs3XHWEqv8gnRjREKbM",
  "key28": "d94pTT1JrZbYNXE7jhbzcKGy1meEf7XzEhTNNP9wAGgztN6kdNibNNfqULPwcdbZx17DYxJE1nA7c5gSLHuqLQM",
  "key29": "43LWPMXEwwVsJ7W1mgHQphG43qaG45FRYxVXJDTJeXXDD6cvzkBMXCG5f2s9KRYd6nPtMtYsyoEUzaQasrCEcSMJ",
  "key30": "5DUCy38RXYZVnriS7Xzg8mbxVYsj1RVfXXPAkKpw4MhLYA7x4XvorQgyAdHBopKDTrdzQZscPTLaTouJ8bt8vVZH"
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
