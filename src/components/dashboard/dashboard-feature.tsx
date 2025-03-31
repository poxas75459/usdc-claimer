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
    "5ALE43HQ2bT9yPaEmNXfSUVAAWSv3WCsu7FQYDN8XpvEhMX1uduxwnfsRganbQNk17smE7aQL73h37Af8z5QZWGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tcb2FRrjASSVT8PRB1WafJtxoivoXoMHqTssuzybzECWXCu9Vk2ZYgXQ1WXHRqjZYL6MYVLRiByoUZvDg5Ly5Hy",
  "key1": "2RpSh2EzKv41XAo7CX1aX99NGrsFvntfPjiZYS6vfADq5rr2rdAsuADCVKJDDaGwVYVRLb9a2CFapcfMrGfK5yvo",
  "key2": "dGt8bZx8FftwP4z5BKVz8QwYzSouGc4k1fb5y17Fx19om9RgtJc47DPmLZShKigjwkUpgixsy6jnczun66sjm4e",
  "key3": "43zuRHCYW7WkjpoAzoxc7ku7STyPbUTqqCumsCAdxzaos3BkGTXYdhyJgRwHG9pV13BW9oRTeDsQs38tcEbaqvvx",
  "key4": "2au8XWaCmQdvRcvZEYgLneM385kBxYSMNAjoqTX7aGMeKq6sS7etGQZfbKb1XWmV7MrJdBgZ9H5tgcnndqEPBVSn",
  "key5": "5fDQqHG73rVo8dmquJDGCXVMLuMkVfme6CY7Lp7gbHEzZmP5woCr1RfcLaX8wJASKGKrcFfdiJNnkt11AVkudG4n",
  "key6": "32spdF7yQjn6T1NZ7YgizvHPcySXbSp1zBr8FVDTwrBvsjkEMobiiEKPb55guLihssYh2ndRKCG5T75sTYPEarXE",
  "key7": "2mZS19oZK48KNryYMTAb18r1PuvCcwrgqLHZbQBpsYAxBaqbdhuvYkbYQwZzcrQDW2U147SSyHgWjmBnrd6k2cF9",
  "key8": "4GwYAByx6JiFnywVeFWJiG1rzDYrAdkZHB4enAM2krcjLa8JJiiuVURwU6LgQzGibf13fskC6gCKHXXMiMAWtbd7",
  "key9": "sFvJVnhD7tVBmDVRXGUck9yqweYQAv4XBBux9SWQQGwTDrf1QRxuXuebdHbfZAXA1m6aCkUrzJmMNV4grkzg8i4",
  "key10": "i35fH6qo7Ah53hasULEahLZMShcmmcvkWUHhJuA2U8P4RJMbd7FpM7X8nJUyktgsYikKMBx658KaySVkTUgk39v",
  "key11": "1qCaZy2HTVGsD5Ka9TQwXe7QwrrFndxbUffcT9Z6iTX6iHLuxgZnu59g2iZYMR3JixbQLza5C413vu7xjSFfRM",
  "key12": "481LZZZwrnVBM39VqYpWByYhfzRE9F6tfcieVJsgA1VePsETqKg25f2Dgj2PpUjtU8dPEjFVpiQk69BaFGePr341",
  "key13": "3J7PTjtZbGapYJp7TUbtKEFNgwG2aJA23dkqFodA6u4qYxyEjisunZ6sEjpyHWMmp98xyqcgonouGsvUNpFvLs7i",
  "key14": "eTfvefes7CU3HEVhWSTcH83gziL95J4vnmEMUHs9nZcpNd72Jk6DjKdJkowwyskJs1bW3eNRNy8ovhDyNovvo5H",
  "key15": "5JjZasKZPLU7MqYwiyjMqbEM9VmkEVcCefYoGCiiZgVEbBsd9Ubbhj763wfUDiU4MeJPAsKdJhen8zHdXp5f5ngf",
  "key16": "4F28F6ov28r32YWUUHWacSx2hD6we8P6exbeSWsuAc5rrCEckbuiVrjZuWsus7cKco7D1hAqyiuiWQYH5gSLuiTu",
  "key17": "3UfvrbpRXT7E1QzkzhCuwmgi78y9dqyi9wJz4nqdMZcQp5E82zN4mJY8BER6xozHKcT2twNZdfytVJ2dz9rJFsnh",
  "key18": "2jBByvhdKcuCvdhSrAN6gpepBsTT2rsRv2yFybykg3h8MvkjuTe8wm3pkAnqpYQwuonu4yUCQ1cfTr8DEV8b3g3z",
  "key19": "2vdc58iSmi3wqsMV6W5enBtfWXLKBqiYfF5fMFsuBo6aqEcuFfftY6rkaaG3dmqijUD1bWQWPSnVFALudfXm11F4",
  "key20": "2uRVRfPYSRik6xTFQKHLDPPC8XnVUfq67Z4AmDkcsYKmkquiXUgPXyyS2DDQpc55xUkoG3hPc4jUrevZuAc2Vtyr",
  "key21": "39bVnqz5Nv4iQ1ACvfQV9Q8AYJAUR2uVNwJsC6nZip8x6pZkjtrbmTAa13TrkJXkPUiQpp5u3ssYxqgCapshZaeb",
  "key22": "51aTB5zi5Z8qn7jLPCUs1A4ivwKmmQNPKio97r6ZvcaCDATKrsun9k554M631o1FXkiWR9iqVths1TjXjNck63HD",
  "key23": "5wiJh6bSp3JKQhBgda2ttaRph8Q7SWcPfwzaCmvoF8W6CpnrR2ECtepcjLM55sNfoBnqwPBCN6yaPur8XWKdtxEk",
  "key24": "2o2pPLZx5Qa445Rccdc9Q7E99WStrHwsTa3wgD7cSTQS2QuctLFm92XhHjAMXND6NM139pppyHUbJ5K6zxDogovh",
  "key25": "YJQf8CnvZYEYHEEKA2SL6SGSDhBFFos2VtXpn2qQoc4WKe482CFeQxkttCqwDuMAFiyMt8GB34SR5TZ9qFBTYTx",
  "key26": "5ZxhRXaetvzQXo3yqf1SSxkBS2UB8PpiwmnQL3pp1BoSi3hw1bQftQVo5vR981SJZYWja2AyN6C2eN96S13WSiQW",
  "key27": "45f2ZMa8Hua6wZdLRzmY6vpVnhD47evMjwtShxcURijRMsdzMk8GG9LDdgmssMXhFNTCDJSh4SpE8JiQf8bVL8B7",
  "key28": "dEFkfFXfDA1SUrxy4eWbCdmweZsAEax1nnXcCU4yUaEzx5yiasbZdHvUhBueTEj84PUYRUzRvrJdgTv3cLzfhjW",
  "key29": "47PbUjCmp1seaR6XC9XtTQZJmwKTiP6yVv3Vtpt44MKorxZ6rRDVuWQhR4o5etyEBmpytQYxoqUmZmJEmXtkQADB",
  "key30": "4DGmeY46kE9vjf91vJ8qS65fTwqdRXRb3LCQVAX6kjsWcAcWwGUfFZE5De922HXviwuEQuDAxp15JEQecgz5sPJE",
  "key31": "3hQzxJSZanhHJZbonJufSs5iocDx3TKCctnosLMDL4j7UxjWBwY7tEHqgDWtikhy8LyZWwwpdhRur2h73Geb2f1M",
  "key32": "3mVjnDRJqrDNvbd4CzyJr2mVNfHVojAUhyX1JKpwaDkVepcsXGD6kbdNZBXTb4veMoBU2vsAfMUycmVRoNjNR2gA",
  "key33": "5MbxMKGgzvbaa2vrqtqFqcEXhF5n9yq1dyhe9bci88scdoGZPVzxR9iQMYiJR6BDNyYjysT91fYBbMuGfiehgDVN",
  "key34": "4m9sGKzRYb5k17SETZCtYrRKeT2zTcMDP17dBwDJH3ZGKEHsdSwSY3tK44YyQozEvJya4a49SbV6K2AvANgUkTFj",
  "key35": "47hKoGEiSwBZmy1ubLpNJXAu46CRPLrTb9QhVFpe8HnrU7iZkdQkts4ScsF86yPQJCvvCgwAj6rHtmLysiRWbPdU",
  "key36": "Q8yFQEBDvRxYJ4ApNcoxn6eAnXqcrsg65LL32XysoUAWLtLeNXSdTiVkNuzevnH441YFRJAQBoZ9N9Cy3eDZYGV",
  "key37": "56U9bpDkRjuVBQgnepSennqBcE3dSKQL6cVJ5h1AKWh8bQ5sG23uisBLXjyn57pxpAtbgNEyYrQsxSkrQbA3wzhe",
  "key38": "5rQDjvjmAwDa9sh1kWusDbJadHQWeYpuCTZTZtt8UzusvMJguWDTR9v3eq7s6QpkrHtEceGeaWWFVGQqNQrAYGxj",
  "key39": "62zz51vDm1Mb3rYxuz9xq9amPWt2ZpYtoAEDBtGDmbJ3x8UsmuiBSzMXy8dAbJ2QX2z3RET56Hsk4D8LmY8kZhZg",
  "key40": "2fd5numdBZM4ERbiDbWdReNMHWwJxMrMqS8h3c2i8nB87N4DKLP89Wd2u3YTiMwXPTCRvZPoDcAYwzZf3cEfP3a2",
  "key41": "3jfEn2odGfjRUGVzbFc7dmp8nooLuzjKGGmmZyCz7iHdjyBFf5p3UtKuWZFLwLKA4sBENiZAAwZ1Qx6h3S1fyii8",
  "key42": "g6SAQZG564xEj23rw4NpebXDypVMWVeiLqbrJ5YMu8q7FiEpVTnjogtY44KHLVJusJ6tVRhNACdywq4KSKKRzZ1",
  "key43": "5wCiVz9kEXThe84e5BosmqXXFig9dwwRQYqQpr3E3qkDSed38gSV7Mj8Ud2pt4byyFUd8P4VV2Xp7yEtuvTVCfAm",
  "key44": "22rqDsgJ2NX6tTMtLvR1V77FZriFTghH4u3FWzB3P6mHkSv6sppPRBGLwbiuEUXZhsbzrpZXfX7t4FFNyE27cs7H"
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
