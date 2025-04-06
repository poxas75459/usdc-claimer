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
    "2xLUZP8W6e2pKD4Q4KSo3ZwTHs9BL1dWb75QjtKYtyu7rfUy2BtX9boU8umcMNkJG2boZ1tJ2CnWUzbmgSUNetCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QvYLbQNYRa453dN4qUSQdSQxwbhg9dXjKfoTTxjG3urQ8LqNprfrT5rKDoFmYeZTsZ9gWiye6HifqwsEqmiTr2A",
  "key1": "Siw9ncLKNnAqegQYye5jAZEebiuXUzMPryqMLPHZXxwFdmMfrD4fCkfEmCfYef48GXNRDqpF2x7wyG9X7ADhpG8",
  "key2": "4vM8aGMmn4xdweNeKdoRzB7PH8GJKtQBts1FbXoPGXox8xPnd6B7vXhSUHhuegvRJqoNp36t66z4fN7sm9zdTKwK",
  "key3": "4C6E4kRHdpjbpn4MWSYZ2kekGDAPyKTLBnUHY1HrQ9R9Waeg1H2A2L4mv9YviZ6roif5BAHSE8wXwQMXMAVS42A8",
  "key4": "4G4nx3fCUeMC5KDyMrG2c93ELPUZtFvPy2SFPmfTtbKo2fzubcfZEQ1FUwqdwqv1mxDLZjUimHNxJ31L1MXmQExN",
  "key5": "myhE7nYVGHfZwqG3qwm8zxqw8sPHbKnSh9tLSGG3JsQ1q8zegD22uRqcx33paaYiS9ARM6nSNcAySc3vsbYXFQg",
  "key6": "48AcWLh5jcdj5DkYyHRyMGC7UDtQNaPXohzFV3dZnJPPF5UkXUfRMovRk14h9vh9PXyBPhrZADmBwTcqHQqg3Yyn",
  "key7": "5Xpzea9dpGpiS1qDq75CzrPJRXQpcjqeEtCydwZTVxZqWS6DHLPizdH8M23DDPQYSrdN8sm3iwWSexkF8vhqigao",
  "key8": "4deLVKVprPhUG8ik8Arh2wWqPn35LEnjFfz7J75JjdCNJ5jBkdJANbPj99EaTTVaiL2V8Bqfm52p45PNrmEtdYMb",
  "key9": "bCZnNWVPGcqwJZwiCc5rnXGFGzNVGUbGuDrHrwSjPDif3WLS6DPp8hKHEg8RNmXhKE4tX7hgYPGw6C7xKqF8UWM",
  "key10": "3jrut6mh92TT9WqHuF6sQwZGUkc6KWKFwnsnsQYdL28mvTHNvQmAFvJVA89zyyrw5Ef4w2iQ2faku75QhkVeULV4",
  "key11": "5ds8RUGjyW573n4MvqE4WuHQiBDg8QUbCbAY37R43qKmntCutxxT97CMeNDhyE1ZRWD8jgo4nUbEi9Vm4HsyiE8K",
  "key12": "2Vhz6P7E3V9AkPTNtxa71ZgnYURzT2GzEj2cEdMDG9i5HKtt2Ju5YagxHCwzzkHJTRukPyHCHdFiLFaMy5e3Hbyx",
  "key13": "4VHFbY6fyNeZ5pJHsznpD5zGEh3XrmLQxzpaY5YuSZvpBet3PauXSDxeCAL99mfSviFHFWXxx4TZfKic3B15zXAs",
  "key14": "3uRqhrpUBhsbLPe6K2mgcrwAdqzKP1hhYLYBEykHZm1tuDUe51FRXjTXBvB42DCcFprFtzBcbqkuganKSpgbFuDK",
  "key15": "vwkXPxifFrvQtneazxaSnqxvL4EyKjhakxbnPMokHocoxT9N7Ag2QbZSdp1eyFNXz3rpCA42ty5Tm6udnLKzWoQ",
  "key16": "zdmWEjRC7UvspAAuj95t3fGoPi5RUEwms52oUFVTLZf9rzULrrMTwVFKUcNxr1XSB8bstuYSpt3bGfpLhjqC7Ja",
  "key17": "3DUqu4o3BPUGcq1PVQyiEzfZwQwZMUcBLqz1E81G4prQm73L7DCHDSwhHDAuXiQQHitjNgZ82jQnRdv84MH37xgq",
  "key18": "EotQxK4eQ3AseqTrm9kqbwPxMgfDyYyRJzRSBKLdeJW9JyE4XpeBKwcqkKzB2UZMnNtootRhM4JHE8gAS1hTdrP",
  "key19": "3UKpH7QHZQWbR3QqA57SasA8XFcFYYfHHPQ9LnE53XwvT3BN9reojDAFBes3nFdqWahZwHTddz5JWezsoLjSwPXC",
  "key20": "4iRqpdhVJrMyDfSwpcpLAtrn1M693oMnQg8pJWJ4UTrh7RrWxQaw4etvJLHkSP7PqGoAr6MQM1uF337zMmUL1Trg",
  "key21": "3pS3CMiiV6Zc9ssuKP59VoV4NGizgiTiSgDHJqEADCJeiSCH42zPsffiJUrt8h9j3baYNwazWsuPx4R3wKq3j4GY",
  "key22": "5socsxM2jKXXNtLTj8SHsnG9ZHkdJFSyQGvwmvmWP8YmidedMRQCQ1L8Rn4BAdEtWzJVCArKgUPGcfz2Xi4TCvmd",
  "key23": "2XFfBjxfRLN5srzN6EGBwGXNLYnLrvZ99rzBDg6eF7jPp8AkjgzRdGqi6sCoN2FZKzEyS1HLqhP5UsMBZuK1fWBV",
  "key24": "3XBqkNjico9FsYwa7ZaRdjmFxbDHUm2B8DXoMWvCuU66qUxtdpL5cxfagM1K75xHW58jePUQH7EhgtWorYc7nvC8",
  "key25": "2BKi868JbxvtBGrfBAaUwM8RunjrwuP89pZVF9AAtPp5pbtaUTfoNYfDoUYmPRg1sbWf8uEjxKhtALzqnLCf8QeN"
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
