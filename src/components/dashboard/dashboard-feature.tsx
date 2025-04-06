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
    "4K5r87EEdaTwVPz83Mez1ekhEiZHT6VDKHctvk7S7zjKwVLPFH2mwaHKCZdfDzDcDZn1DQ8RFQQLK1HBGvTUSk1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LymuK3LV9WWfYKUobRvVob4dukCPM7M9rtKGxewcNR1gsXPk8rVneuRyYUo6Y4XLswd1878pnBLYRsJZBrDFqP5",
  "key1": "59y68SncXB1tEiZduhTgBtN3bC1PruXfdLoo7AX2Exvx62cTj5wWNxn4wKEZ2k9hSemcUwmWi1hYpBfuHi8ZXGWF",
  "key2": "28VuDQpJHC6CK3kn92XddTvXL9thd3F77dBcgsnSzKwNaAytzM4m6DvRFvHBXGzJyHG91J6CkhTm6AbE5knUoyZj",
  "key3": "2rxRGHffEEeMP83v8JoQ1eVWsatoyiUca5GoVLVoA4PhxVyNW9g59eZ9vNR3eN9hsaNH51fDSig87aSd1dHc8Auf",
  "key4": "Lme5ykGSojEMN9wumgnbiNnK4c2pm9nSRkLkSiuLB2ba64Xdb5PpDFdbUmW33GkVU4oEGioR39SAGZ3pwv9aTkm",
  "key5": "2x4kF99po9aF4MnxGGnHbxeTabibb4ZuEvSePAmdZc7bhHpLvZhhPr31ubWCEaafVdoFS5xyCHLxQk7VEhkz15sr",
  "key6": "FW1ce1zeDW7mk8FPkbE8x2cyby8qTRTkQgrcKvPYqdshpb6DfHC6U4FnT3YcuU9YNxVMsPQPztThMtcDuxpCf3G",
  "key7": "4AAas47Nu515Wq3pbzn4UweDS8QycaBRnh5HAKYZuefSaZQAyvEsKue1s5MMTqXUiF23kSSD8nN9T2uKFXGUzwAi",
  "key8": "4yJnFtXWsupb49rfoARZp7JM8GYfUSny3pSs2iMdpxy9UPfXhwysptBxkWwqXE8A1i5Zkhbh2E2Mukj9vEmZX5on",
  "key9": "47X8viSAJiCrhwwXidpZkJWKLNe5AgYeqcq522Tw8SZfkLpAnyk6M8wx9f8ctWJJQ58zV8Aziuutvqbr47kCmz6N",
  "key10": "2N7PZzTaYyzNKj9nvX6ayVbiysgCKDMJwvHchAsM63vzABygQipPjGgJZgRehhswhzycfmk37TAVpRqMyh8HMVed",
  "key11": "4EAsyTzQ6CuBXoweZL95HxutHUukqCrcUKQDvsFS99rAGRr47TsAVXKDuyg43Y6FpyPXiTXTheRuhK5dwaeCfrj6",
  "key12": "4bixUWtMenx6j64v7oSJa24rpNzYuiAQ6m55BcfVTCaddCg9q9bfU8nodCusmeHoR6vmNQYk9XwehNoMhTTGAcZ",
  "key13": "2vbugfDstgUJkXshx8rQs8rah6pVKgi7rhsoix8D21t7qukDpLPchgLZ3hYcpxruRdDdALwt6ybwQc1jLewCkPso",
  "key14": "2wPyq7xy3Bq5dtyA2WjJHi8giVvm1Rp6QiMPtCLvA1k5YCZtyABRqFa8Z6v9RiGJNAAaZF6TPCZiQ1Kd5ufFWaSo",
  "key15": "3YuX6VABYc7KSzT8F9CLJ3qg3P1aLmYKSEE8hZ7bKxyiecE2fvLA21q3b4GpMKYzzjQFLuRvji8M2KeHUa9Cifdi",
  "key16": "3XuZ3hanmwDJH2JGC7MdUrFPUVMPGBgEJztBouNkoSvZZwivV7VKtbgZr1fEJuVpehAadrWJrWiagU8q5Y6y8Qtc",
  "key17": "2yoCvYx89x1WVMZ5S4YpfJwya9JygktVTQXBbYhscVaP7kXvxMoUZcxFFCgNPCFV7uCGKsWJ7GpQn58P4EumpYQS",
  "key18": "5jdHjTtyJLipReTojEVCGBC4EUKiH466zUYXQGPQBy7rCEypBN6T9hqcps7xSPF1uHL2rD2wQmdV13a69kpNh8uG",
  "key19": "3oK3cBaD2eCSUT8pdeSLxsBFJPvDRVtas87WQfuAdcjcsh6MLa11usNn5oEXCR6TgSkuZbg52buvEMH1BcrjDMFp",
  "key20": "3sfZkUsFLRFw4q7t6QNdupRBchUXwtSsWm9pLz9hB6QwwptTR7Styw1MEB3ywmi7z4PYPXXu3Wm7gCQGnv9vz87C",
  "key21": "2CBwViNaD7GWfqR3B1fU54gQUZD8hczxo5CUTWec7aW3iU93tQfByEHab3wofm9J4Q8mKGBFqzuPs6t7fAJ3kiti",
  "key22": "66bYnvhiJ2k6jBLFCMqKqX1v535YYrSYKS9Yu9Yy41Z9bwLKP6pabaLJLyi9YS6YZrJLZyJnw7PAHR8cvPxtNdaX",
  "key23": "4q3C5MnMx792WGhCqRTj4ZHEspFBzbGFZ7Fm8wko92CkanckYGCHrfeLfZGZLK3tyC29HMAk8oF2h5JBnERdbN8N",
  "key24": "3Lb6ygPpsBzeyTCeGPsTsjX3yVTjgvDaU7WKwcgBUNq38eiX4cLeiB94BW3ECdQi59DXoxphP4faTpWy5PHqtKxt",
  "key25": "4SZXMNdiABqdyJioYPLsUerefqvB9qNGf1ehnnviFQ2LQJDZvaR6eAJPAQb6z7wi7yJhYasxffbGVrkzqmqiFnYB",
  "key26": "2qguRoPYRhHrHJWtBYtjv1RZR3Mowp3DTwLogxQsETh4JkyX4XMuQQVorRSZYyXkvum57TRyAKyQy6Y7nsBZZ9n8",
  "key27": "yueNokDDtXt5RRRyj4MR7uHCwwj5Ti6srZ7KUPzNPJUB9o9iYecP24m4RS1kyWKErqjRMFWt37yL8TF1nneU8UE",
  "key28": "AmDoJbcq5yZEMddMZVDbhEyEHGx2vWFDuUe3wm5rLDf8aQYaK5nxRE8tojeEAk7t9Z1p35NcHAfvrnT87jpoDKj",
  "key29": "YJJjPTpKtWLhorhJDBEx1MbSM2knsBpeUDkV6kFzez9yM7ikGPszXgWFxkJzZWB1NFdF578RCTs7DKQWgaWmNUR"
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
