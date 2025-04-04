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
    "sDiPKn7AunWPRmEQyV1sbscWviQTyzTA6QNQNgGesRv7MUVrUA588Ffa1XxWUbULtagBUCWc4ai657jHUvyM5e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTLf83AALcd93T2x8Y7Hp6nNtskQauFyp9aCuW8kFSKjqMR3JiG3vfebG6xFxHwndShXP9bKeZ1sV19LGZVsNDQ",
  "key1": "2XrYTmKVJET99sne4pae4Vv1rkQ4quQXDrb6VrbEP5iXnBLakqvFgdTbwMUGhKBG4HPkQomkzppmJjNzHU355mf8",
  "key2": "48S6FEZMMgprG2fNXqgkuLc9awNDL1grEz2oMStGnojZz6YS67KztozH6MCtX435dxRmdv4dChUWG8eGJg6gK9f6",
  "key3": "qxc3DwhtWf2MZf1JjRanavSoqbAdc5ProQd4o1Wj8dwVXe4JRPEy1AGHGSPkbYn6VkzpKfVg7dwgeJypdJYJRmt",
  "key4": "PetWc9bzU919Qkj8yAiHP2rd1GzyUQw9tC7vgD8Zh949Teoo2mNAz1mme3E6Gryhhf9sdYzdFfuHTxJLmV2jrfG",
  "key5": "2REin4vuFFsBRbe6SQcrMKPHXSz2P6XFZn5e3qA8AsuSivHt8EvWc3W9VvSjfyvcvSAJJj9oL5Q8txHEFiXPWTiQ",
  "key6": "NYyoRfR2qbaXCXC8qhapE6MhjRdHPy6De9P8qXypHnM7KfZiTXW9CBauvXHacAeijPE72v9NBD2qmCR8FK6zps4",
  "key7": "4GnQfkgcRGa8CN4B19P2LdV2MFXeA9BEewLUs7X9A9dovpDLLQ4uEZiqzn3JDKQzNiepHcfjcT3pSA9RVYs9VxXp",
  "key8": "4ebBMWB4TJpt6RXHHxoaLuLcLZHaZp87WK6uo2J5vUXxjTmJ9uQc5oAZCVxmnCEoqXXk1XVmvwCRRa85VrkEsmN9",
  "key9": "7BKrF8y41xwphLa2G247sH6yYQ4EZQWwTuxZFVwc6SHgz6eaKLrChwet4a11k5s5q2QXD3PV5wa8NxdgCc6nu91",
  "key10": "3ViTSTYvM8CwdE4buTc48JGtgDLprndYdPBZAmJWxuLoAFf3Npr4XQTzHg5og27SY9vreteQ7w6KfGG92TY6Yps9",
  "key11": "58R5jNmyUxvP1bqeQ1oevPUPFvK7TdS5p1KphLs3nr9sKQqSSFmNbN3mhZam6cZuQxPKCw5JXZNzxMdC6g5vLUMk",
  "key12": "4TBXYNByTVRa2kyPTQuL4gA56WU7G8BvhzgEjya4GVoCEwP7fhVjMYKYacRxC8CkGq9gGt9YNK2yYZh5AyeRZi9V",
  "key13": "22kcsVfCTB3831WKvwgHJ9t5VKXpomaEu3Lm8yqqCsJAHtic1thpgUjD5oDyZ2FFFVp7yXHDABG2b4N8mGFr2uzk",
  "key14": "VXcev7LhJk6FoFea1oYjx9evxQJqms7wfeLiwqGufmfnbjiZ5CTgKFocqMNVcZ5SAZyaCSyLJV5aM7CpiqsRLRP",
  "key15": "61Eak65uHmZAPbrSrLMB958ApwXBbCfU71bxDivyLSjgbQVwkJZxppTmEW5zx4Azpr5DZDxaPgwbD6Vh1D18TMEc",
  "key16": "2ZGZMM6tepfUzod3PrWRp7FAd7Z5uoYa8ExgSdhgFgWQpVXy9dvBfURpR1H8J1gf4idSqtfareNoozVX8KLFdQ8p",
  "key17": "3fVKM2yS4d9wfMPMiZdnS3CAcPAr9ipemWvzZDF7KZmi6w1mrX8wGZ31QvxAcRKMZVcPub2PZjH7tkkEbdRyHF2G",
  "key18": "67J4BrF9fFYuAUN4CVbiFtA63soJBX5L3XhZo2p9tVLMm9MMH4WnpcCydTRtuuTZsKzmi2GyBmDcfNG6mCEe3nq5",
  "key19": "38BrynQjLbSeABtqtXmoTc4VDv7pUoSrMk14vwTd88eoPU4M7BKd8ra1RG4jwx6Ppq75251mG8BLfEEnxdALABxv",
  "key20": "26r5teXjNDQ4yVZDXhcJWmtvsxonBzEK7XBBT6YNrdkNeWFkKA8KN7gWu611Gsu4mgrtruxTb45ijVgSX5n9HGiq",
  "key21": "3dRMtQy6btyQAG2yBhpvSoQ4GzAy94Pf9JuyLtLJAAnBLbVw3GPPDSyDbP8XxLE2yESis3yq5gkinb6dCwQAtC1Z",
  "key22": "2SiefQ6QUms7yksjhD1eWj3fhvLjkPCfdqWaMPnwWPFjW23XKa2yC2uFnKW7BZL4H1R9na73go3CQx4YYwzyhjvr",
  "key23": "3fxitwcNPMPwcy3NnXNZsX7SA7Kks928jv8FBGQnhWbBmVebKGQ8Nppz6NmNgbXXMH9mkfmvGAHdR8vr1DZRomiG",
  "key24": "5Pv8thRf8Z4r5RoEUe2P79tZUmcAQQM5ruLM8x8MdGEXnaxaGF4pWrFwyWmLPSyjmEn9xYmYTsccsvu3CgmYeLG5",
  "key25": "jZHz6zF1JBKejCp6TcZi9XUpgNnWzqdVk5x8o2aKg9ntdVBR5SBv2tcLGm1pHZByQy7fgoTiXpqfQn8NMSr94he",
  "key26": "4ubk5M3t6YqHuyrtszC5ZK3vk1BBbWmMHR3cZPY1T1KK2YUMLyowzyhngZ6NH8cKgyEDZJsTLLmZoEBTPFqCNH1Z",
  "key27": "4cMGR42sDidhZUnghHGA25xfv5s6qh1CWq6gWKCZpmMVHSUJPjYa3uz65hoaamJx4VeBX4mNV8qkwHuNbTStmvG1",
  "key28": "5mQPsXnRMYPdNwLT1VuNobyT35mjznzyR8Ci68a8zKbMCd1SCJvRMCyzRrJRsid6gNYr9xQSQKfCudHAF2QSP86F",
  "key29": "DqwQ7L6jTzK4fgDwLEUzTeaSyXweYz6tUg2DdpBVG4AD3PZxZHvVnUqp4XXtrcGbe5ooTkDosj8qQG3f8NjTNB2",
  "key30": "3n4K2B3115yBaK6D2QBjXB5ZUPHEyRioBEY1sDp2mNeAEE6sBr9uy4pJh1x6uL6wKZjEYkFABY7CoRr9JCmdz7Yk",
  "key31": "RBwjbqe7Vw1d1gJrzrMtZsSmMcfjb2EHgG2ECmVHsReLGbAN6pphbW6wZn3ZmEwkVLvuf6bHPXM8FWUVv6Gmwm5",
  "key32": "5VYP2CvHpRscJQSjbPiKpnnAc95kYCWSznutT6AkJBezvusPQDcSSksYppM12RcbXCDsGtbo933Rs1nVE54udVV7",
  "key33": "3riK7HAo3ZWvQ2nDgvd6fcJU9V3WQrroE7a2GjBkt9SBwC3HWpPCPZ6FFANPpixgj9QgD1XtUWvztxHMX1NBrXtd",
  "key34": "4AXti7WhqybEWs5bCmd8tdSFA73RjCFwr5CfJcQWVVpNCJt9ejRs5iq1pF56xNSHy6cVN5J4fWzhdJeueJWfkppS",
  "key35": "5Do4MsbdoyAgEMMAqHKXfz4kp3cTziN8vfwFbhEEAW9U7h5TNnM8L4NGoRzq1pQ9K4z8iVfo9r7mUbaUaLiiqNi9",
  "key36": "3sLLA39NU5y2fvbwBjLBpE8C6C3Nj9iK4aH4WR8csaGKw8Py4TabrhJzodsngkjDuQoj2d9HzTH4KVLDipAsRWbB",
  "key37": "3pB21jQJgDJFivZWqQ5G5FMzgrDyj9Uf4mqBSiNWpaTX2mctg1r4QTVVEQpj7yHUdKMWh786n3QACPBsAMsESet9",
  "key38": "5RogKDmD69aJ5e5iz35jxP6etbRqBUUoEtLTBNgirsFKgushynrYPrR4vgAHR1aLk7x5Akc6Cz6Hbe1jM4ygwEQA",
  "key39": "4bdxGVE9VHkKQkTTMxsBzjdgq9uJFhE8mx845PjbtmkkGwLJdP6AXEiU7Pf53vq98mrqRQ5GS6ZepXsLLCm56XF8",
  "key40": "2UBcm2n8Mgv4QqXiRURnc27RkktddA4ga9nxQKhrgFbBe6i9GF2LvgvJa7sUEaSnny4bCDZ1nkuVKC43JbaRdPJj"
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
