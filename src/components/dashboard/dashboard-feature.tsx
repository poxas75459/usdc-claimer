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
    "2HFcz3oZp5wNVR6bMGAdEXztZyyrkJDu3czWvYQb3yGzWM1QReXz918T2cdh8QDw3j5S3QXKUzoHB4G1AiJRph6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqjQfCoUFbGTYEBLJT5Vm17qf2fz3QJdgxrp9EwQj28pcZousHF4BKwXKSYFM2ioFyVNj71rRMd9dKy9Abmrgj3",
  "key1": "S5iKrQsuSCfReFUgrFKtv5rMy8PD6BnX8FvhE3GzKRPQDPnieJJ8Q6bj2ohoyktyTvhpmrpDY5SWtYMKHr5NNj9",
  "key2": "5GUDWPnyMHDDunB2fMtnqeHy1HbARZVFzxcCtaRgfVK6gQwcc39CLY3LwapoooXfYcXgESFzLwoAVDWM2kfY8exS",
  "key3": "3ExoTzeEogJW7CjVnj5jn8QtHxjbLFmaCPZ1uZz6wvfiNv6uL9tPpj2eLZ2W852YRPw7LAMwmqoW6NLrSQvoewML",
  "key4": "3dQCJdow8SQvrGQQ8jTEovGfoA5yQB4ovN2gA4Sb2KzJ8Zs74o1oyeR55sqk2rEkK2cAiATgFnRiwwXTzoE5QNb5",
  "key5": "3Bdw28b4DwfniXY29LHaG3JaSUatM1vPBdnDp7DEF5U8b4ENUbpid8ShYYEKboj8p3F3BEcusFzYyXz7bLAiwPMH",
  "key6": "HUr3mahdMFykeG8DSmJf6Mt1EfzMLZkkRjfY8veiCDHA5idd2DBn5T6RzfLtHiw6sS3bsz9EnZcoq7xTaich1V5",
  "key7": "121gB81LmmB2SdGVWafgKQ4fdLpjcE5LDup24RM9dMF5siYVHneVinmukuavv8ngN7kpx66q2WkoCRwNUzSBoyUq",
  "key8": "2oyL9wYznTdSBeeXMzFrc2qXpyP7GmvLVw53sFGuYWgEt3wXpXgNvFpSLtR926sZFZ3yHx7Ci3kzdsESNB9MsKRR",
  "key9": "4DPDYfCSRc7cKmuX1SasbwhKwseh699s9uQFGp2A59RfppnAkYmSm2ptx1brfksSbof2C3XvcysbL3cH2L3j955Q",
  "key10": "3QcxavdHjkK467vpyXr2HD4Nw88RbHbBD29KkNJ9eKcPCKDA2LWqPb13vegSTkBxA2PWCsHvxHRncypmfAhNTpsk",
  "key11": "54HTVTRiHHbSXH3zL1Tqp54wfZ4LKSWZReC5sGJRr6mMY7KiMp3URCt2UrxqcSXud1PYXGrdK5xm78JiqBsjARHM",
  "key12": "5YTzquDc2TbJwo4NKQPujmPDDVyrdgNADuWbZKMbGmp1jvLFmd51TAgNnKBeVGMPWGQF1U1decqkeHedrez3df8Z",
  "key13": "5Sz9vqfYK88K6nmYhSHpJPAnhk8bygScJnwRfP5neWQ553FuawoX7usXqJc5ZPxjLC2PCRScwptarjknZ6kQfEK6",
  "key14": "NjAtrAUGkNW1URuFHTqatLuA65poauGfZgJw2ihbtBPQpEQXrokcgoX6kHHGrbii2FRNhDvmZwUmA3ihXLkfzzu",
  "key15": "2WY8bNh7uvewFYywQG1QoNCi79ybWtBWDFtgPzu5PwrE6mmJzoAAahrxpq5beqW2u3gY3Ut3JkZTc3ehFfZWLHiK",
  "key16": "4RJR3eSFoyNYhEKUfYNGX6tKguWyPTbvjCh9uCcZwH93MUEWWtgqCWwwroz1eSYDaX88f7K2BPjmyeixcuiRbdkg",
  "key17": "mzcasUjfnUAfGcJVmBS5PquqQmr9Tb5Ft8W6He28Znny4CiqdENocm3kW6CfknJHnHsU1mpQj9GC2iruTqRGp36",
  "key18": "y3PSizgwcthQqwcuNcBMxDwbPXrT6gabu6YhD1YC8g3JukZPev6Nwc2YCRRfG1Hik9BcK7eGXnWkdrY7aihDJGa",
  "key19": "97dEwNGpFnTs8BGwWDRXf39pKkDsiUXFSF9Lup8SxUksXsJG3bUbz7w829dByf8wAndEbN8nhpMg8sSYGTGRdnq",
  "key20": "H5aTkCXmHMWYmniNr38712P3REdgf4bVvRtc2naKsDmRCH5hz9PjKANn3MjqkZqdh8nGa66dDQfgtp5PpRkKvzx",
  "key21": "32g9tmJFPJXVmRP79g92AchfPscm2qQeyVLixLS3mHwqibgifRiHaCxsZa6xC8ict2anBViBuiDWqTLGPq5Ddk9S",
  "key22": "5b6YKXvKgj3HaPZZ1QBubPUu5Hy3b5TGHca7QkTyRLJAXkP5BXeYm3VyciYZ4GC9H7mexkz74haKMQeKt378P1wA",
  "key23": "2s2rbhhAAAycKzBtZccfRSsJ5DgrGnNoHp73L9TU7h8ZGYwp7BiBM4ugfR8TP2EsqT2ZUdpfF2ZDmTKNvyeV53gw",
  "key24": "3ShUsMy7LRuZegoScfVTZnDixiemKjjqe286fTyejR8xTym6rNyhx1SXjj2LJDUZyFmgDpHjv1Z5oK7yHJGey3sD",
  "key25": "5NtF76j6JTkvJvvR9sE1ZWRnTTGg8hvf7bTMnWGkisL5aLGcVM5bWj2SyUaSzfZqDZKhdfV3zEWAsrS9yewVmvui",
  "key26": "5YbXxopBhqcM4ZW1zu1cBYTbGBnuXhxGrXyZGsYvdfSifDsW5WJd6XBZhajxKLTsfjpJrepjaP8Gvo2PrkHSuSQZ",
  "key27": "65RWGRzup8zotKr5mZUfA1itsWVQHrDGEd5ZQ4ZXYjFXAmUVRcbnqNUsh5vTw5PwzwWvCcewCTFuFwFrVWyXPxrt",
  "key28": "5FGQJWtEc9y9bVccMQiFqctD7fAtKKbhTYKsFmRaTMKFmb2iSjRnm3TBnL4zT2Xg4iUKRfJUfztGeiipry76ZWfR",
  "key29": "4V5cQuR51SitT8sTMjuYwHYVzYdrRzMdUWACXtHMASU3n1bKZfzdnjQoNAhp62dunGGWutk7DhwfZTueiZciW5mw",
  "key30": "5z64d1Uy9xZoWaFwBzAnf6vxdR4fPD2JXn9u8eF6FA7REhKGRD1ZGpxbZuMTDVHHWuvQV2M9nnzaXY19GjqX78AN",
  "key31": "3hEYA59RMtiNrtnWb8u7ZAEHVvdhnCuESyxrX4f7xFN6PfqLKWfFNkm2eajbQbL3A6vtA9NdVnKnA9LRRm6xk3Pk",
  "key32": "2SyVBtmtNxW5qgoUUYEjYqxbm6yqPQbaeoc3hLJyJUNWx8MLa117K5pMYdvehD4RXjqKdd7YVzuhjqd6GX9DJm3X",
  "key33": "2cUoucJB9xHCVjt5VG4nCzUgvFLNQG47XTf1rgrWevZ4tEJh1U8KAa6UCYsrCTonnWu8GxrWmsv9zGSYxsokKYrg",
  "key34": "5DWWN4sQShgQUpKhAueVdha2oyw3UmDQLYfBYvxUYWAvcU1Zb43JZd4tkcXtWYWry5ZqyqLL6thqzfqsf77pTy3x",
  "key35": "3P3Zr8h1xQbHecgzfmuWXevD8z2zk7bwhr7yHbPo8ShgUgZbJEZLHmYfDF3eGn3cSYniHXezVaKUvkqosXWo8CiK",
  "key36": "5xdZ8FrMeFcr4LtsYi4Nb55XMv7XqSKVhNZYEy53tW9GoXbxyZGuBDGhfmxqJNRonVig13zQciDT6k9chzuPt1Vc"
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
