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
    "3VWsfpdVEh3pijmgnQCBXtVXhXjFo2SidRz4rcoKChRmb2kgaJ5GsvB8KgohGRSfnxZqHyJDdGwtUPpwkfoD9hnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QbpMnW35owpXz2EXNwBmBTdgnC9T39UYcxxrVTXo8qD6h8Npbvxvc9h3bXPRbCQwfybyZgJrLebzGDZ4UqRPVaH",
  "key1": "Jagd5P7TWSdvALjRbVrHiBnBy4vGTXKp16JSogB9WYTrhRcg6Eka8BjuxcjGRwKyML4SB1UVwdRkPHWx52Tgvhz",
  "key2": "2LsNU3VQBeWL1p63zkr8GPrSCKTmzZbFn39YhXBaGnqXUFPLnw9XtxhQmYZfC5mcFmjXnH7B3pDjbiT21qiAP7Pz",
  "key3": "59ktrzHz8ZfAFBUvowjfL7DbubGV6DBa52B8mqP81ZPWuVCjAZFseQzmfG4TSvBrKj2RszDRz3PqVHGCTqjEv5fv",
  "key4": "3CxvSYQz28ZRU5yQxeCfo7Sn9b5NbFT4DyLiw6qpXUfLUn1RFAReqWBXzrYLfXLeuGDiJM4c6kUrGFf3nDjqVuDn",
  "key5": "Ng3eLdC8ny4AinDSUFr52pToSKVuUUuuKwFwFpuZMTXL7mKqy9vqWkzU32x7YkPyod7HGBX62GXC39eGyozyxRY",
  "key6": "2NSdqKH24L3JD5WUXcS9mgTZKcP4gykVey8RKBsSFFFnRRYLWcekhUSRBKzJ4T5vzwhzfeiTfAkoXH7ZXLMvniFS",
  "key7": "3Xkp9efVzERWjyb3LzSenn2tkxQhUN2ERk1DhKA5MqaHcJTEbwuK5cQsHSmuEj2rAiZ79mrJH5T238x1reM7z1Ny",
  "key8": "m18GEFCTzshDwsMbqQjmo7Shi6fBSXxqtXX1CJ5Hdc46uat414GDWeLo9wZAbLFdbbuNdPi9fCAuDr5fVUNKMmj",
  "key9": "oaBtkRuM3NZb1NXqfHue2LXqNpxCZQXDBSVFQ69fxJ8oqRPG2L36px6DouGitb96HoG3go4HNPj67F8fnV2HTdj",
  "key10": "UAqiK4ts9ZNAnrofbstdMDtaJZg5hEC7SPWwz8NEmsRESJsYBBL1nH2wPxtPm5rvk7YKBhf32toZ2BAYKrKKZFd",
  "key11": "2gF1As6rQVS7UCk9dCYCp6AH17dQaAfp3XjqPoCJ8zUKWzaxXcGdia2RLGUmojRk4kxbNnpLwGAJv7hdZLkXb8AX",
  "key12": "4cd1VQ2EGGzxBBCLo7dwPY5P8Q9AGZZ2PTgr3Ki632UEueKNtZ6Heip348sFQAu1HbhVELMm6D93GN4kECaqm3H8",
  "key13": "2TktsFSpczyxmenkGbNiVTayX4hcNwySjWxH6pe4EZNjbvhS8J6tGEpTEQ5TsrqZTaVQ6muHUUSJLriCDuivt3gN",
  "key14": "21fnwL3KhFvLPF4dRt3FuQ9nUK9xRQeGujuokZvRosTkvLDz6VbuKHW786NRkcZ33Zw8SRUHnGVd6Kitnu83AUkB",
  "key15": "2s2ZdKwErDAeRacb3YCnmFvFxL37HUuXmUj73ziKuP81hNqgRFX7CMHJfw4N2QKtN96xfwSt2xgjAxaM7HCJHMQW",
  "key16": "4vifgBRbPiy8uibumrk4BGer8nGPRuaVCHKr1bFeQcWPzg6nrzHzXCmZNGak3MYgcBVmWex4B7nMa9zMcXhidNDq",
  "key17": "3J6CVVqkiRWS5WTbzzckvx4FkBbQzumVL5qv7H2yahob38RXZaY7Po1FvKcBHSehTPSCwpgd8tRoQo1kfZyPec2b",
  "key18": "4CfBKKTm4is5aL7NZDyzYS5pJ29ocm4uhBcaihhP8UFmThdc5Tma9LEUxwmoqS7YjVrHrsaVu6Sqw6fiSJsfE8jY",
  "key19": "3eBjhz8NPxfFBHAvMnRqwgkRy6Wcx453F2Yus7qQtVbt9cjXsAfufhfcD8ehEziULmw87KAhTZSYV7aSG2u3yL8J",
  "key20": "4g8vFgKv2U4xELyfssgyKHnx1ZChsh9gppxbXTQt3trQGXkWGqH187WeMcehUVsjFoK77cga8LWQ2aYufdDxurRy",
  "key21": "bajnC1J4EPqNJyUVnfyPXKbvfxNJM342ApAHAaW79G5WMYrbdUfJWDu1oFji4pmfJ8R4ZNnvZPkPNf8YXETdu9i",
  "key22": "4exCrzkSwcJWi6qTC5FEYqwvo92cSdecyknhxq9NHDuQ3s5aureGDrere7xpG3A7qyaXaAZ8SD63DdV3iLsorxLn",
  "key23": "5RpSkPgSZ4NXMyZN1U4SJALmAVgvoMrZDiaQVYiTAHAq4sK92ZXjmdrdMcoqMqgWUghWG8PcQ4apZmRBv5gDoFJ6",
  "key24": "28j9x2fyJwvD8DAZzhVbpxiDWoejPqgPmc6YrkDfQZgoUeDqGKPHQJFrhNgDwniFQhu89b2cDmHunnRfdjD1CSge",
  "key25": "4pmX9q5SthBm6we7234fmN9Ucn25q3hnxvwp3LKj6nnwxZDDZ84oekVfp6VKFNycpfKP93gw8sTG47YoJhxoaPaA",
  "key26": "8NrGMjHUkxYKMFsgEw9YmEUP3fUZnTVixQishzUem3nUgQjueE1ds67vqTSCVrA9mwhknzR5YbPKgP4fQJ1pNXA",
  "key27": "1oXsrNn3EYjWGF4ULFCDxV3CehTNXV3rzohiaf4Nf1buCtSmpcEbv8rtvWPZVZbFQLLxRsvfuJ1iXdSqVUvph41",
  "key28": "QydRvoxfQhUi8atYSvnsoHShoXrDRpZ3zjpU5e6JAkMi8Pur72pNxt5xnBb5E8iq2fqDxXY9oANWKRBzobzykRH",
  "key29": "5WFhWjihZwvTjAmZqbq6HZ6rg1J3PthXFvAidvswU2xBz9aAtde4GcA9LdoZ9UAxEgP5bzbjTaCtAKu4VNt4peqR",
  "key30": "LqbB3J1urLFx1M58vMaBtx68f54bzZqhU8vZZtNkz3MFaujYZmZwrcm2RqCKn85aDY13VW6cJ1KQ18wbSMg99NW",
  "key31": "dSHnvvBybAwCVVZxnqztwGiWJJdDjV97igwaWpf2BXC5XZbq7CreR1hGN7LBffKm3pq4VFZiqur1wG449k6X9TC",
  "key32": "StchVdNUUaWLMJ1VKsGZnoyQ491XvFUceKCuEYxyoVsnRPVXZEEh8wXLGnc5sV6DTa6jKHBbnZM9CLNB6rzFQWe",
  "key33": "5fCGjRMnHWy5kzXSys2Zhd2fXRtVYiMUh3Pk9oSzdosVE2SQegF2m5nphevbdYDQLyFYJqumhFb9YnYo1rCcEdAC"
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
