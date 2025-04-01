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
    "47izkhHzsHPqzAZGyyFUqVCjJPbBGBjVXVJvz2Ue2Ank3DXQonK38vnPxT8tSrdWs6EnFzFkzPNeLkfJQLn1eNpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z5REKt3iUSUeeFCdyYpFL8L5JD2Yr1MEr6XC6iemfEpwiDitJGnqrixFMG7cNLibUxgmUneXFYXP3jaMmD34q7E",
  "key1": "3cpyK7euGXrTWc5GqLc1C9hZSt8RkjfZecNiGeto5daiPVBFyFZbmabsLJm9jxNLMrbRbvQi7F3Ck3mSVCBBc6S6",
  "key2": "4MP7EJU3pVQ823BEFcAcXUEMTQywPfE9X7BpZiwYjGGtN5y3EAEPymm9F6rnR1WpjhxTW4uYgr5ka2GRegmKcT2v",
  "key3": "RyEPGbhyJcaziQhtpFYEwrKwRtGxmKXEzCfWyor5PTHhNPXy7TEuFd1KVDrGfyJLgzMSLpQALSXAcZ6NCUEp5ek",
  "key4": "2akYtT3yd4dKwhkUFvC9CsoYh64gyYBYQJRhNw9mTQYDM2bu8ug9ytRLswuD9XBLwJdq8Y9bqkh29QquBPbRBcpT",
  "key5": "ZBYZxwEcoy8YfLKUjqV48MANPgroFZX3bxQ3iGiKdYwjU8dye6rWRjYXWZHozzhae4Cgmq934TSipSaz47DXbEc",
  "key6": "37NCm6cC8baxZN9hiwFVCaovdKRZ1NRiRVC3BGf2b5gvCthjYDSwJrrn5vSwNaWxtfC2cAfmJr3R6qLdQFBD1XxP",
  "key7": "3SEaatpuzabX94JQonqTJodJxhuevLg9XiGJRR9npwJYgh9wmNc3ddGexUsoAQDssaA43tVuS4RGVT2fKTe9WPMA",
  "key8": "5TiMtcJKL36G9XUbK2T95ABA4aNZsGP4QA8ruiScJArDFF4gnDSRsywG2ip5uFnPMRemzNQmpKhPzvBp38NYSBEp",
  "key9": "3K3KTmbTs7aMcptJfyo4tmhPmdEk1wG4Gukx6qM3cd23BPhXgnVGM5NBztxePC1T9Qhyhb8kBtS1K5G8P3pEdZkt",
  "key10": "4E882YjPYCNhh1YzBXuxkr9tToLj8UhSsbLJYLQf6gFmvTy5KP4m1EvauLj92fuZGr4eNLweVE3jBs2rRmaGYddn",
  "key11": "yDubgC3MmByKxMb1tksijsucFTED1bpBDCYbw53hhRzNY45muCUWYfQffn59CYKKSapkYM7KkvX9Lyww3cwpU5a",
  "key12": "4dqYEo2gtktgPHUiurfvyrdH813LbhT4CEXqMyWWs2rfyPzmbezZMt2TEptCbmceg1Tb7fVQPG6aG5bwUcCyNo5i",
  "key13": "3ZrCu5m68v7yYofjEC9i131GgLC5MY49VGimqKpe4o7311WgccK81kdUMJvS4wiR7YAQ4QPnEotNun5RDmUM6X78",
  "key14": "5KqiWtky7PXgk4PYwKhkHVZ5ARVcQzCT9SmsvREv4nL23fojmiieiXtAjCo6VZU7GVp4kYoCqx1ouD449fcVgvqs",
  "key15": "WVZEsbSHcwR5U8gHTKqMYHNhzyjnLfUeUMNcGkwELEx88khBkZPx1EmzjQhBZDsjPFzQBmq9vBXv4btUKibyjue",
  "key16": "2WfXbrtqeTYYrvg8r6c5sJq9fpVzMhwKH7eZHc4rxF4zGikaWHRfsasxuCnKCkXZQCw7ChN5ArHDtXpMpzpQj8KZ",
  "key17": "2q382F3C3mFc1pu4yEvB9dLeRhW2gDFgL62sdBqTk5E6rAj1W6J8nP5MnAhWakw8M9cLq9BcEDQ3tYgUPbhnuhgQ",
  "key18": "5xZutBY9c8ouNu3oTC4UgEamPjfCHK6WtvuZFRpGsrfugyMwfHJL3vy46rvQ2vL36mqkMCiP99eovcLYuvfmFNV8",
  "key19": "28pdnogqf1qAk37RCCCpWitD2eMPhh2jMuz1Cy9gLaC9RhC4Rz1GgiwYmHJVkThbZe4ZsHWB3L9psGPXSdB5r21x",
  "key20": "4EXVUCepWCYzyhr2RpjAt8SnErK2UczoBA3KQUGiwRma9Mqz4oHGNmikgiLJoLFbwXVG64F5PVteFxs3GX6soZRq",
  "key21": "5P7MDUw4WphxQ99mjjQnKnWiqa2UprZ8x6Wi27EdCjLN3DNA1TL4oDDTDdZ7AaNQPRfHBCQKeV7TY1NzbrjJNXR1",
  "key22": "5tMTdsisCKLELVA8NZC6oEPLZc5CVNHakXE4xrVVR5oG4Ujw25hmTreGRK9AAxBvjdH4daWRzxETSJtDkX9bjxHR",
  "key23": "4EqBFQ9GMt1dyEJLGCDK3RoXV3ENeeZHUs9MAH1P4puBj1i7ggUMs2jT388QmdgfMJY2rwoacKWyCTYCgAeQDQB4",
  "key24": "5kPYUhJw9UYo51fm5i5NcyL5F6bqnHQZ5qfvSYn5USojew1eNAwCEE6oCWp74mY4eqiue7SV2w7z5ywd1FVBVvLf",
  "key25": "2qLSSNPQyLSZP9w6Dp9j6bt3w7uHBjKNHerADowbCWLUUemPmFaqcJvqLAN2nvMEf4MvHtpNt9XkZeJsmAReMD87",
  "key26": "3sKF1uiq36SoTvznfA9GhHkxkV8v8zzqxBa6s8pYwUa8SVRjJvwo8zPhcPG6f4DCxPBpS6phMLykw28rKDCqRviK",
  "key27": "35NMPX7mhqcYSzwjwE6kAwy9ir4oVH85pNgezsFkytBpWDXauhxd5AGfSu3GUmK4vWmx9efgZ7HErz2rkxdfqGbu",
  "key28": "f7oqRJJy1Y52Aamyz6nENaJSZvZwheSCjwdBZaYZTorUFiE3zG17vq3HDoDTfLFMovEJgC1NhEnZbcZGQHn6QKx",
  "key29": "2Xy8bjyymr6YPwHX5bgeBa7gvTa7eYFB1b4jfHijxyinGDxAgTmYMxV9rLHvYdUPkSpW2trgSqNr3tg4GdJbq2MB",
  "key30": "2tWk5qGtQqfkVeqkV2Cb5vD4GRsmkYpZsHdDdqafWGkUnR8tm3mJeLc13C1tpTHYHsdzbxwQW617ZwR8jBH4Ph6n"
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
