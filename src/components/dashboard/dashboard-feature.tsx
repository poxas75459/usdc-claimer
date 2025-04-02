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
    "kqC47zA5uHakYkke3VQq1X4HyHEz5CYPVLpmXXArKkv7L5RUWpe3nr9coUPZgNe7fPeKpSzeQhUuxinzFQnrSEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "atQ9yfpPT5kniN2pqdk7QQJxFrxV1NGoNkLV5ymGLcZcCY8HZMr1Td1FSJE2wDbg1nzktdSBebmR8Rof7PpPEYP",
  "key1": "2da6nDzQizxoVaE8vHozyre7vHorJPfQuAWw6jEX1DW3jZNEwWSSmoo8G27RNP4p223PFCFYLiEQWxzz1NZz2NKw",
  "key2": "5MYwhVBMSELP8QaYWoXfqvS8pQWxQs5Z3LxvnCTH4gT1GSrQawwBKPTWuyTq61G4L4dchnYrhHQvnF57wcWGzb2b",
  "key3": "2pPWufyQTSoR6oEkyZ1RupdWf7kbWZESXgPGtHrX1a3YZWgLSiJvjaUVLwouYhvN58LXL8GRswTos3ev4RDcjT2B",
  "key4": "4zL8tssHjrZKxM4PuTt2up5oA6ajLN2oVLFpuywjLWibfdMDFR4LCDokSJeB7xwnhzXtmdvx35UTPxMWtef2CSjk",
  "key5": "5fNcnWyBc5H5esWD1hhPKyKXhGwewWqJSDk51k23zrRRsRmaHHNrwqThsQ1yUW2Y1gXmrbHTdW14yc1CTNpJXF8u",
  "key6": "45UBbcQNrTrCficMJavG8eqP9ZTBVR9HcN77EoBp94EML9ZHVBU8SKHBc7vKGFfgZQdMECt3v8i6VnjTbxv8PYWL",
  "key7": "xSEvefEU8KKSaLDq9QCo882esaM85GeVmYLUosXSq1EMy3HbHcAdaxzSJR4cbb3j7CMw7jejvdinjfenGDZarBT",
  "key8": "3puZorzH26GMmMCZbnvWpXGukpjmEPAugcXCCHct1RqJY43uoB9XhmbgkKR5WU7BttnJpN8uWgfxG38HqUeaHij5",
  "key9": "44R9CYWFR6Z1Ev34PfFeda87TUKd2yYNmjnHNt2Cm93sxkUQfx23FhUvWBL9rUHKdrzkvC95fPtGBuRAzVrYXK2j",
  "key10": "2BX7pVTWRuygV5JmQCqAEJu9bb8RGCDKKWgeo2PaKfqJgBUwvc2jPizxJnAhYzZbaYUGBEAUweZaGVmhJzyKvmxo",
  "key11": "37qu8p5hsruwHQqbyyBibPqzT743A4k5oc3gzFjFmDDwSZ277Nc5EMcErQWJNTkKpRwdWrUnKtFMffQ8kF97DhLK",
  "key12": "57vbgXxsTtEZyPckgks4E5o4Hnv6bxvBrox68ebJRw5gF8quGpguqsYNnPrt4MTXJ3Uc7UT7WiTGDw9VxQHAuWi5",
  "key13": "28Hhg4J7cDqQFSja5AMsxNBZmVcipQqqsRVqyyuoobkmtK8CjWWAVUGKWGkW3yzsGqErWnoVZVrmUgQvc2ULSQs5",
  "key14": "NBS4Qa3bFyy1BhmXEu3W2tdBdgzA43NJ2WNLqpMoVfQfFjbs16VDBBQCnLETGjXhLjhtXJMXNLfdJ9XFXg1ArmP",
  "key15": "57kJb47mNHk7ZYdrDSSt1sAKZDrT1nFpp8weU3LuaRY9YNrY2jJVpUz7Jpn7HWBUTacPK2YKrjSewHQAeAVDfKt9",
  "key16": "6Vz1JwChzZTLZQnLbv1pf69Tp4ccFHoKkcWjqZBQNqeG9ihV7rsp6rME25nifLgXPFNEWvfj42GXtY1W7nmbWAh",
  "key17": "Urg3PyzhpcjFYdcX1Rhwf3xiJUdbvuohnMroAXi9VR935y4crU8zG6QZN7Sh9XqcxPTZ2CZAQB7pnFtuSXxtbwX",
  "key18": "5TQe7sdgrQWH6V9vpoSLyHx6XfiUmamKMX6kVorcwPKUCcr4vPKgHn113QqbqHFedrW4fogNCYaoywMokYWarcRe",
  "key19": "uL2rLu7uP5bhrrcodQ8ZK5AKMF2od9SEQi1J7RRkJf5HzDycKJqwzK7xsjvF4utXPsecG8tSU9uWtPGuwXo1xBj",
  "key20": "3Gw2yLbbvXJJnGYEX9jTGaJmjXK5Mi8ETdPikus341YLjxyKt6siiy7eLgRAr15jRZBRZPbBC9dzeayG8p8NzjuM",
  "key21": "5Z1on4UmGsYxyitBkzSLXYK6PxkdJaNQ454bWVwBnbpwnAtFHdGnZt7Ewb93NtJwMnLGMzbkxJWVdaqLkLjxExJn",
  "key22": "45k6X4ySeBhD6RC9QuH6ksmY3gFbi5MjKbi8aeSmdPqy7AEfHVPJQnsUr3qDFdYFqwDb3roG3DwFZAW6GYxVZ1q9",
  "key23": "zEvRev6SKgk29SKwwyNqYoSVPZt2zgHeyakMiweuL1oSbhH3sspKpeACyJSatKyXDDwYWbbhuvfdLdWKYSarZXB",
  "key24": "55nAphtETSLNSrZehvUTXHyt3H3KV9GDVg5K1RGCYciWB2dk4TTHYQCSKHUVtEYnCzQWAFtfa5eMkBexVQWEdpaM",
  "key25": "5wHN4BJDKSCNz3bRs1RYuPK7EDt9LLv4Zi6sspc1E6Sx7at3MY7DwFzL6hH7fhKgGMfLB4ZGVHfPMBVFwudkmr4V",
  "key26": "3Un2ab9A8d2HkfVdPrNb15Kvs4SmB9ri628gvpLAHNCseSUxtU9Cw4AuVfcm18mfjXJCpSZL39gjevDtMSvvJP8i",
  "key27": "3zkbmpTiDQARJkxQR9reEiGeyyp7cT322rXTig3GeC2oAbfeTxnGMjupiNPduLvdj832HSg4vSyTPEi2RjvPUugF",
  "key28": "5jTACezDvAdmP9AXTJkTu78Kf2sFcQB9qskzmnJ1ke2nzQsVxKjzc8vCDtUYehLAfZPErbEnZi5CkLmXTipxcFAQ",
  "key29": "39QHDMqTr8eLfR27BABkKcNsMPF4FHxqutyjB9cbnTN1fdErHdXiGcUxcHgC3kL3pN6JoheJpdMsr6ddiSDf9URA",
  "key30": "5BjdzB3y6G6TkeJoRPfv6wnbwXhjzGDsLicchk4NpytvTxgdYRVkUJ9VvvKdahBWbuttnovPif3Wm6DvuEdti2tU",
  "key31": "4NxY1bdVksUpieQJ6dwUmsnPUttfHQR3wRmezH7C5np4bAV8zQdwUv45KvDsqcGTtnTygQENpFCGF1FLUxvjX1db",
  "key32": "QN1S4n4mTmXXeZRvUXwHJFLDHUSfBMb88ybhJCVHAB3ez9JynRNoAd1CcpmTjAp8zfvqLyjzwfsM9jo15CKi95q",
  "key33": "3rdkhg4bsEphjCDcQanEsR7XZgn6jrUqfRZKELrr6fZT47LjmKBwthjY3hh2bq6JT4ew2MfyVC8togJdG5xTBSvP",
  "key34": "2wuik55vHwawQyCeK8oFYRQ99NvfJSuTGGsZZtiUUEeU21ZWGYJs4zhLhgwHmx58FGu1JZBp3Cmg6j7GyycLXXN9",
  "key35": "3Adaxbmv5H4vE5Pg8NhivDrgFTRxUQwjR8hMNDsKwcFQuhWWgi6Uw1CVS9otcxKJGa5iRECPC2V3FT6YHJbJP76h",
  "key36": "5bufTAAZRA8agFVN2bqYD7GbgzUquEAxpvaWyfiBGNZfBBPP53FeeNKNtCiM9WMvgR2WhSsfcPM9XcAwvLMtzrat",
  "key37": "3mSnKq6bT6qYXgkiHLP6Av3cswkRNfAafkLRGx8TAsudRxj15qMSi6DGydKsm7Wdf5K2yUB1PGzHAaATmAqvtpbz",
  "key38": "2KThTzVjc6HHE6evKgx3dozXGa19j6jJQbJjHuFZw2rEGm4cMuYefYwMTh7ENN4tRVsnGvx3jQ5TtQvmZFyuUxZB",
  "key39": "4eCvy6fggz7fHL3Jyet5fiZDUxREVk6JTJ5JvgcRFtDFauodoRzr1f2ef1G4KNgDzAigByeGoDBCpS1SYGuAiDkk",
  "key40": "4qPWQcxELS3g8n3HSbe5nstJnZSjpKS7zZSS7o9A9pX78AswuyS7KktVAYK1phxwStebu2uM2hKiw18mURHtLrV9",
  "key41": "2dV31K22TgepD7wGZgTujRd2RuR79FDYPBHBT8b1iMi7akeHs5GZ5idSSzfhtUhfygfjfUGAGDHnfsrkL6dL5wMJ"
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
