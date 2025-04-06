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
    "34ddTqrcjD7iMbkcxCZ7mSXKwCEBKh2oWALcwZKPiucgyJvp4rEx5qERQ2doWuUxwSt7wH9DAVL1Yo6sTrptRndK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pp6kk5onfYdstgA3qxB8sgMQ424S4ZWq6a8KwjPiC5CGfaGqLpv1oNEUQCSnuMCQMY98LnpACbw4vLMQPCTKkYc",
  "key1": "3Xxz8AsqvJzLmoVRTU4gjF9QAfWMJRPgPuFhHF9g9jRLGkTVtwp1iGDV6iRPATvunmq8Ro5LyLGAbvegUxfFTUE9",
  "key2": "57xHQ55b2Rd9CJjdW7rUsVrXiG5kqJ9pR6cwHMzSuoTtR2sqkdVwQCzBvBVwd3R7dPnnqRC4mWibgj369YX4Hrmd",
  "key3": "4ibivvUGy1Ch2KAQpg7eR74TqCkMDoD4AT5LUtwew3cMssFFew4eCjLy784Q9VdPwvQTeAkQoenFpQSyimE69Z9",
  "key4": "pKgGKZniYvGkAjNy2NbRkDuqARde7antrHtgFoE3k8pDLhBbmwU8z2uUq4kwL6jNmJavHpjCSRKGfjsdoAvfwVC",
  "key5": "5VoiqHi7g8E5AYsLzSEitP63skWZ1JDACopESAphCEYjsmVBW6JWQ1ZZ4DFiM3GKi8Gz6H5M5prGAaLdkGoqLhoP",
  "key6": "qQgoswgfme8pvtDNJdC3Y2pwL7uNur8R4u4RmBshSiro9oCM4MmquibJuasPtZG5pq52KiJe9vnYx4bHMFhxV64",
  "key7": "48LPT5qgwX69vyCSdHDNFSLS6bXNU62PkemSRssciBTevmQegSyMR8b993HiUEfhNKyUBMbiJD1d5yPHL7Tyv5GF",
  "key8": "24okpevpjp3u2HVB32eyMGUnEZ7CTe4HuDg4b7wUzpVpf1SKX16q5VdmYPRyYBfcxSdbx4xnWPumNSy7S6LfAq69",
  "key9": "AA5sdePEgL89QPfSXixvsRdkVoWZ64KuEG8x4um9CXEsNGF6vWNvbyTKsejrvfaXwpS3x23A5UXW8pnJFQnXQ4w",
  "key10": "3ZfJrrY8t5paxrzSa3NDdRS2vU9pMzsUM8wLTxE6k1L42ajLw3ir1tEwgD3JRmH71rH9ViALuYv1QWBEutKBGsNA",
  "key11": "4H8tApN3DYZ3BGiYaE688JSoQ8Wnwo4opqtG4q5cSaT1T2f5wDALCJJTuNE5FsRwTFdjvqu3hXV5dQoibcNs1jot",
  "key12": "4zM6iNXZFawKAL6xhaSwsvEFiQQ8RrXr6211XWzPe9RobDyKV31qUtF9VBvaZsyyY8TPdtvC21wQC3EVGrq2SHi2",
  "key13": "CjA2wKhKL3m7DYZKTXK9YR6ZJBfRU47aRyQwhsWcbpLFTfbidW5EPk4gWMpbxuUSNyMZRcfkui62hjZB9HaRDdr",
  "key14": "37uov3AorU2wQZTkyA7fa9Jqit2NwHZVdCetA54R3ywjsWpmrSfM9wrbo36otwD9xFuyPspMqomSQfPSxD339rQr",
  "key15": "3bwHbao62rLn3FWFVbMhSZ6HgBEsogs6iqYQs1VSzVqr6iMxRyxnDCnjVogwzAbaFdd84Bgmu28nEhSgEZBr79jo",
  "key16": "5L12ioUj7CZJkZNwxWXuormy5KmP9n2AvKps9WnDqk7KumxAAer4JGhBSM2anYfFCu7bpabDt8hp6MLLZTGsLTsZ",
  "key17": "3RxH6vhjSk2moffQf1sqxUzCJUCG9W9juYBfkipe6kjiavf9FHTUUmphav1YGwPURsqB7J7ZNK6CJzEvDzxD8Wpt",
  "key18": "Gn9ZfhEQP5XFzG2Zg6EEoZNob3rE9gr45foiDtFssTG1YwQPYpHQsEFbmapXHkRzYha8LsQW3jPPMF9Eb6NkJht",
  "key19": "5Hj9XQA95DKcScg2S4dp8hTi7QB3CDF9ea8CKUibodojykZAxTiM9mmSR4wPMLQ26WMEJ6LoeSazjVh9F7Yzc1gw",
  "key20": "3FnBAiLrkf7BiJRpt3kfJyAVenjrBLaG46QmEyrbG7xQc8Co5ZdbiqRaNvVNVyagQNWj3WNjATm3LDiu1P6ZAZjR",
  "key21": "2zXTw9LS6ecE6HLNQ3wwGwB3P1x4YQN3rSgX7ZUCYEKwBcuRQhrbuaJ8KyMsdJsxDHuhAZWxVr25ja7kv8G9UAys",
  "key22": "2UR8McgqnWGEHe5FzgkUFKnkgUgRVpR7nv413wt9bpUNXVKmQFx9ALBdh1mJfGchmjyNx67GqLhDYLRWNsuxQGrq",
  "key23": "27R4kbvSHU6rDj58nF2SMwUm3UAHSN9EJVCi8F2epxs9nj21ddAwiW3yzXAH7dq6rPKndhhGfpHFmxR2KJA8sgvU",
  "key24": "664M4w1K2VPJodsnJqtWuKWgESLm3qM1ep4yFFWvyCEQ2RKoBh1wVS5g4hntBRGWqyjWKpjdHwQfwjynehoQokGG",
  "key25": "2jiBgKtgyMwy9mtAfPndHihhsZjMpPK4bkThBFwfHQ9wzSUrjq1a79RxNiTNvHZrcnKREykkwzPR932E13SkoGWs",
  "key26": "63gv4hiTZyEA7TEmspm9BUaE63AUd5SU3yrfP4kPfcSr5gcctbmFNGiyxzjCwdtcFxxNGwCDFoHgCae41NFaCq79",
  "key27": "4ZadT5WLkxrcHHR6szdEDAH6fpGMvtYYShKe8nWaJsFEfqmGDK8Csa5Ni3PTuMVvnHSe4osmLEm7D7sexHvgcwvS",
  "key28": "5BD8nNVXVAZvfTkxhLYh5jZY35ZihZet6bSzA2s1ZNxgxF2jej86vDjAcibmPGzy9UJAUG2VpT7YPZ3T4yjZ9Vj",
  "key29": "CWN4NQXbnKRAzSnRovxh7xMJf6yfQShvpWGucQatfcFbre6komDCMPJTLtrnxCTwTUZLJQ9AWzoLLVLV5aFmpec",
  "key30": "5ftSKyP4VdySWTUFw6vEDtnKLGuH8W7DWxbjdEKRX2k8BPUZJ4Moxud1gWRQHtE4vPHrC5TEpH8zUhjbznzQLeU",
  "key31": "5qycQeZkSMe4gv6VqfZFFbekXVsjLvWNMkJnUNCporoPYWow7nEGJ2AqpME9zNfMMaE9i91Gs3wRMEU85oD8uMNZ",
  "key32": "2kHFg2vu9ycJsyzzuASTTuZJDVoY5EJhDxBPsqrZL1JFcHTaD6vedXBBPayaV6whyNGo7zUGAyu8QJsFbAoV4kaz",
  "key33": "j64obZaKzRS96T3Pz2Z2ULNWPNa3U8a31qjjZ1hXhWjRVdG1xF6NzaeGZ5KqEjVapuYzrZ8m6gdkbH9CBw1BBUr",
  "key34": "XSiziEg7n3hQbX1Yzn244orpp3Hz6VyUVgg3ArDzaV7Eis6Gw9EvqTYXUMBo5R5Ep2b2NtKiMXdQ6nQm3tGJEB3",
  "key35": "5W3hx9o86gdrgovVSd1r4QFB1oJyQ5f6ziC33XixhEAosbLakahnPJfF8246mp9EELdzFNHEJrZQGRdisuPYdVro",
  "key36": "5ZeGAyY5GR8QLce6DYaR6h9QoFFv15L959R3hBinUEeHUhZM5rRrpEDUqwgjBGb3V66AUbD9GwTSmZZfiSEokbny",
  "key37": "5MNtfDCAR7mMwofk3Tx8syF23f1bWUFLN8hdVMCWia4bXh4A38kQd5ac7wokc2QckpeGSRQRgyK5ZyQo2ZEXVUA5",
  "key38": "4mznbipss1qQa5bgHVeV56s2L2NQQUohmNPnfdVt6uZimhVjiKi1QL4UWa1qrgvC4a1dA8E7D62Q8zzK7TjXe8s9",
  "key39": "56qdJpr57PNvFFURVnHxmNZptV9UHM16De4VBwDcfrTRBx5hu3NLo2vWcoxjyueWxXKTzw14YJJNy48qVzvusW1h",
  "key40": "55Kuz1Ld6vQzzv13yvGkvPVWZmMkzU24XeJMGKvveWbczKzB2PjVatuSycxR8VxLSLHwEmYHjtRZgsJFip2zicdF",
  "key41": "umegDQJwXLnLkXZhkg9CH2Ao1sLmn2UcSVR3mkCjXYvu6qSPBtu74FTx5rczDWBmXXLB9V9Uueh3XF5HJBnNqy1",
  "key42": "2qXwWf1BXQNpTqF52yQAhRaqHR9M3kJB7BtWqnrX2LGdhfQ67f9hoop5p913BqbWJ5SfxWjRKAo2KM5ArP5JkBxK",
  "key43": "4vX31wjAxuYQvqakmAa2GmANynUhXgx41ZoBkGwn7FRgJmyuYX8aYcd3pLn4wZYqX4B9MyWj7A1wnx9hH5MC1Gb7",
  "key44": "VxhgYRuASPoajZ6KQBF9AWJMM8JMhkepJaMKemboEf9XjtduZ4GPcSdxxwogqn9M48XQnpotCvCqsD8sJufgpYF",
  "key45": "3kxk9vteevgrNZPoqaeJ6FzsofeduVYpSHWy6u1ZvABt5vWjeMHkyJfEdWfCuFL6hTafXhZzPAiv1znB6oB5WyHQ",
  "key46": "3r6edpYqXRSZKEXwJgSjwL7e7nmLJeeJhECiUzhLNmoJxLoxtp5eaC5MGgVmnAjxj1PQappVhZCreXYuzDMtJwjc",
  "key47": "4bUuq4xrk7a12qmL7nLMv1prmuDvib5DKyuwjdNAMxpFEMgYYyZnjztMnwGLCofhviMB9DhoSa8BkLhmp3t3r9At",
  "key48": "2Yy4Trzgt96zTx94Q4nYFTDa3jgWaJhiwa95mcLki8yKP7aS7dS5kqFmnS848xXAYsFzHds7P6L5xLHo58KpnNYe",
  "key49": "3LjBYEchPwknuDsRweFymnSrtrj5peoHpKSxJP7F8UNbarci8zvf5kcFEpQNUFcgyhqqe75pM2XNoVRD8bR4DczU"
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
