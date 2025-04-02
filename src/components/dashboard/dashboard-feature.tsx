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
    "3Ey75vZcysAUuvS8fxMmQzZU4vnMvKyefmkXmW5iT6ijdGMQRiRhSYe2BkPyPQYFzwK7gLtgwKRbr9MxLsan9Yb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBkuKfSmxUMXNpLmZ5Z76KYAsgdb3aAJL4h44H1n7qnmX5VnjFjpSQWyqDc9atVw2CoZxKbnUk2J93eETsxwmQg",
  "key1": "3Z55eCyE4WK19Nku7QNvsNTendwkb64dGU577o2ZHueew3AdLtQRaeAEm48efxE4gUXJzEBxv7kJfpwVN5rD4cCV",
  "key2": "AgYuk6vkXtGYMWoy6nk843XYXNGrorLSZUoLocEWBbfichGrFWviQo5SWTPQDvZmFjUY9st2uP21z312vei5nyw",
  "key3": "YuGSUrxqN8w5MW6DhZ8k4Vt73f7hDbsgoL3eXGC39Mv3igEHNcFDPm33jFWaYDMHYj3iTX8WvC9mewBkFXUtkR3",
  "key4": "44v9NJagRFBkDJfD8tCnQXGbySEvinwi4Gq4CXD2LeX8Prt2FJGYUBC34QAXuYgefb7Pw5My7gUpBVnXXYagPB6E",
  "key5": "5TnEguQaAkzFxWGexW1gh2F9qZhBY44s9rJNSWnCJF3sb6aoP9sM5tR18tZBS87iKJMnWirhx1NBRCACrdrBsWj6",
  "key6": "5eCvuhYDjXTygisKkzv1kbuZo4Ts8bvMJmptjjD8JE4RHtTipMW3ejLUr1xg4PiVZ4hjDTMhf8M5GyY9F3yC8Avp",
  "key7": "3W3RQeReRLYx8TSqoWmHqAck4wae8iAGjbR329dUCLvKZai4goqCet51NZKEMVts687KTp9fW4FDovNGTiTThfHs",
  "key8": "2g5uVq2muw6pjTRdYA8phvWSSpJ5dkbjQPuTSz8r3Zpe3RxWbYyEx2ABskUi42jW1q3yQ8GRTXicAmhzRWYpqAPu",
  "key9": "5mt1iR9yvCRkLkdDDEdGWgjAfUFLvHijM81fjMDRtCamdXvh7h7BpyGLskeNuJ3CjwRo4NWaPi8BV2HuscMByxdX",
  "key10": "4K5ZDwTqnXogj7e4EGjEDteteN6GsSAA8VdSovEUNUQ79B56btobbUkSSGMxLLx5MrFZm1eNQLW8EbD4ZJiKgBaM",
  "key11": "2wDKqmSHh8NJ8pTpFi1xZjEiqBsSgdRZauJ4FgWNnSUyYGnj2ox38tcNRopaU9pkkEC3iJwyQbzJuajYrhqs2bpn",
  "key12": "417QuCtz56iqR3MSq1BRNqFx8VwdtpAerbBYHYL8YsLuCdrDVzL79PMeGngQGVmzY1xMzJdrUwtQZ9QmiJ7agxbx",
  "key13": "3Xiv1S2r5iusdyMKXV1VzGfSL7ewtyxMo7bnVPUUt57vhAVNscFjNaZsNV7z4SngZA4ciJSfDjD91naoMmXa6kjh",
  "key14": "22b22md2uGFndtewahv4WVj27KVqSre48C5ip7jvEahXjYwfQVhtSAEdM56X1GRofGy5RE2higzFY5EBoqR1jJcc",
  "key15": "XpwuuPit2WkVYqkVECpRrQTpDGaGKLAWw28riyvAipNdPpjXmq32Ss1p2MWDKwF4EZnkpYybJF33u8fF3sefS7M",
  "key16": "4yaKKzhzAvDznCGxX1BdwmZ2tCR1QFLh3kakF9SdRhAEVhxLMvCm49TcDRwUYopdSxN1G9fgwR8FwYNm7XDnYedV",
  "key17": "4tAbfNLk3WiQMbRXeNfGTtno8zqxdSmonaBZWpuJ7AAu9KWV2P8KCQ9f1FTSmczRhxFDj49AXWghQpR2Tn7WxKjy",
  "key18": "5A2S5dwUbBs3oQBXEmpC6gkEcmCLAdGb8LQizJMp7HRast8jnUyWGNmEZunTo6tJuCjBf2i92LAXHXKfGAg8m5vd",
  "key19": "2LzJkbkvM98tMPeU6gytadPmaTBQjSx7TCLBJNHVGbpugvTzpMhmiVUX6B6LuGfvqfWspWAY3Zhn1jf3Ukr6N6SX",
  "key20": "2SZkE1WVABYKG4NT6P7sPRnfC1AcC8Ve9uEo8PT6fjNvrJSQiozVkAHkv9yJzfEjcufZVdjynmYXKcUfJzNvFQmM",
  "key21": "25sbz1SnSJxiwvx7pZs2R1VCh45hreGqUE4UgypFbs4BDEjVp7eqUBstRM47wG4itWuDD7QyguMW2CgvEYSJBjtr",
  "key22": "3pp6qL3FqxSgKH3ZFo6Vczkzu7ugkbvy8AKLbyqRtssi7Z4k9EM9TKDabganLPvxsCgGiAw94fJ4zypNDW4PRLNm",
  "key23": "43CRgq1bu3tsKT8zuE9kscsaVGE5o4W2aHvtZ1DfYbQXZrE74TgwX1d8j7sC7Sv9rgh42h2yez9rZGmD9b9a4MaV",
  "key24": "5uXVnHwNcVcaRabu5jhCaSNJB95vACXB8D8y7f6g4CJJjo7b8AdLHea7Gb8jPDUU7DUFmJHeMZVFnAnN3g2cyi1A",
  "key25": "4X7gqtVnaBGZdVGHF7BXZ3U6MZvHc1jTYGos5Fb8PYdmZzmm5qf7tfbiL8CipEC379Ep5prqLMUEPVmiamEhTVga",
  "key26": "39hKC7y6pHBxQHh5RMXVgThZxgxgcVzRjE1MSuWResf6YWC3NrLDSX4oKSZbu65agHwrGDk7UAtBsRjw2mHdxKPd",
  "key27": "4tuVEtv3iJPej4NDLKaTXaH9LwVyffqTqLA42kzm6pbu2aFhM8bhk7NsE9WWxhJHrCqjEC4ouLT5W5XAfFvd1idB",
  "key28": "4tGc7Cd8FiSNJtxpEN9p9SFsWVu2Ze2ibyy4R72SnHfVRUJuk9K9KPAhSiMXELmQ173HJw1AN5pF3xJ4wmWWoq7w",
  "key29": "2Tt3izj499f3XMHeXUP3bcWbqGvX7eXpvtR4B1577ip5MjnXzj1HMWmgzK9CsEqaWffnnw1Z8M5GGGY77vgeYgHJ",
  "key30": "63FUFye6XKpGB8YYctQUpwUWXBtRG8sqGZRQYmRe1ziRLqKtkQ99WNaxtxaqfz715UTqGdtGwUtaoJaeg45z4KHL",
  "key31": "3PxTtA3AFLRWw7Rs6UDaVR3HviSG8dA94RTLgLgdxCPrhrq11m7nL7ukJbJndnxT4toQFQDcsEFRyeqPsQKstwVz",
  "key32": "4D4xcMUngubeDVWvgRm1C9d7PSwgxjBp9eDfHpbqGgu1sQH9P8CDSCbsfMCPUjjxmsUrPaYfPa7ZuDaNg3tTyFXZ",
  "key33": "4kpTXZi6wEZGWwwXvwxPNh7PH57t52h7zsktmDUVAbGpzRB3Xf5wCUqP6xTZotxfXm15utcg3c8Vs8kzwrCF4qBS"
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
