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
    "5hNK4XySgfFCVEWDWHop64Pi4Un4ymiSfhNkXtCr4HM2JEP8bXXJrk2Z4RjZqVFwFSDtY3RieBrJuDrfGRAzqcMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hxj7q6m7hHt6vVY5SQmvxJ5TcoSzf8UEBart294C3veE9TzUtY2jVvNZf4JHUdaGk1nemP6w8Mn6YXZVwq5wFMs",
  "key1": "5AmjkV3c64nk1LiALBmfvAR4VuyVwPPM2GAVab6xVyMoAXycW5BeSys9P8s9qdA8Ctv6QiyZ7BjGPXw2KebZD4iZ",
  "key2": "29sc2kM447bsqbd1ZZH69uYWndSMjdcW26PVQXEz86Cv8xJaNh6ctEt3fnWC7iECZynKmwWgYMbqUY3ENgFxxYJX",
  "key3": "51jqqsNbbjCMGMsxd8B2UszDNvz92C8YNktmRMaAprUEDUsotEzuHzwUWovsrwkSu1vjgTdkzUACzvYkGHUdumQg",
  "key4": "4AnX4DbAMsx4dQbuZYNHfBNg7TjvqRNJE44aCA9V1T4UmLppfnGxqSRmYujAYfw5o5ocH7LzLa5ZAnXt54fXYyU5",
  "key5": "358x3jPhMQnDx8yMtffkpFfMx7XSiSWohd4JFKjrxvHz3FShr9CQUhCCC1YWBVnbXdntURtyW2cW9vosm2yQuzR7",
  "key6": "5Pzo7ZdzSQDjtWtjGsbCcZj2gYRugNxjQkGoiyLkF7sGXbkeY5CKs7NqjKjNBihAQyvErQaoSbsdqnfDmTYo2Bjj",
  "key7": "6RQfM9qWqnK4k8P52ri3sbSpggCJ7tqxj1P44vgJZPG34SrQnLj9uiw3MKiyjamS3TWsB6mFyUhK9Ryfna4StEx",
  "key8": "3h8vskoSWzCPuSV3zprTq4e6RinjNsgZAVhxbuk6ByG1qPkvcFHWxpUaKFgW4UzWPi8W1nzQtLfdDC9QNRtjiJq5",
  "key9": "5e8U1m7D4dmC4diWTFYddDYbdn7gdFVoeHHUGQaeoTxEAa4KEot7X4u3DLb2e4EXRUMCLiPU5LuevNr1rfob6FDg",
  "key10": "53CpQfB9ty1VSBtmz3XxgTcG82Wn7KfaYwAe2TCLurdutx4CgX9BkyZUiL794S2L1hy8vevHsWQRqkftL3UfLiVk",
  "key11": "3ZnJsZD5AScf3g9txfdmKqUDAsiuZSiYW3ubD7eTo4mvGN5fd2zgTPSQKeVXjcxSmXbaSJF9HrA7fBKGhHpHaBft",
  "key12": "5S5E1rcki9DM9cVraMEKqZb5uWHq6HzBXXr6gfzDBRrsn9nU65uGW2RMdrR52mkrhJiLg2dg631K7h88uEeyBTpY",
  "key13": "26eXHQ3AyWySMjZNk1NPwfHUVonuRXUv7AWUrip23DSUYdtACLDwpLZeKihajoDguXie7XzhyzoZT8ugwcGgrVJG",
  "key14": "4V67gif3DVScRtWQbkx3e53dEfz6GsnkR57W2KWkYE139jtyjDpST4YiUZQqGGQp5DjcLS3D1zZMJqGi3bvYo4he",
  "key15": "4NHDjg4c729yd2FPkbRfd1W92mQUQKHDosUgNUHxg1tmyhGmkS6PWoz6tmL9LdbegfS57J1RPuSbkVRhJqbzWhhM",
  "key16": "2LgAUxjCpbYee2HJXRrJU6yFhj8H941qUAtdqe3fivsJisAR8NKvJpE43eJLwhWcudh6XDr3BpBcUMvE3VBSBC1m",
  "key17": "5pfGfZrUorSbGWbpxbzf3cDs1SVnvAPyKAe9KWyLcVTQ3s9Grk9VxQhBhD9S1cx6nhxGSaW1kriCayKvuvKFR7aK",
  "key18": "2AZ35UX6kQdr4mAeFBhd4JrRhGn5vqt6pJwkVXS63tztYfxhLw73pAnxCS1ppMcxutsvfFQamSQ1HpM2f7BNeArR",
  "key19": "4VMctosVYB7ye86eM3N9EoNTAVxb9f33x8EZGAjdNbE9guyJZ1rRfwJhCeV7EKGoxHcmz3dJ75EGPY4ABFJd73ts",
  "key20": "2hV7qosbQM823avY3DfV54cPxf4pGpKu4pVX6ZiWxohPBjyUSdLNb5FsqMfFxXsTwFC8m4A7C1FYfgLoZDJoonBA",
  "key21": "5LjRQ9srXDYYTqe3S8iRMmCcNmywhvWypfhtHC1kXd2oGFBt82RMU5GqEUcJ8z5m7oyGeDKwWUcrgNPrkV36S93T",
  "key22": "5gSPMYv5g5JjjczFwLzL7DWFrikhFqb7Vh7xQFLddsYBCHVe9o4PJwCaBtkHLenQR9YGX6vE32NcH4EDpTYh8VkP",
  "key23": "2Px2gu4ptUWLhw214WW8egewM6JgSqY1wfWfx78ERBxmw2YtMtoGutAnj5cRsW73TD9t2x8Dx9wBgFnagjcJRHSF",
  "key24": "2Nd7HiyJdkkWhQpJoEgHihjvskAHhdsRd1WWKbuky1wZpdAUHHHPzUSVa2piJR5upJwt4Bq2soGEPfg2Jf7H1qvy",
  "key25": "gtGLF9oNszCeNSKvBhjk25PNR1KAQeb3Scv4Gf1Ps9HKgXds11bSpqEztfi5y8fjHmGUbtC5RnNwZ1ci2XRvyoD",
  "key26": "jiZezJxXuQq8S4frzKZdkKFyK2jn6Am1WA2vLe9dGeDzXC1Y9n3p9ZHU8dFNn98dC7C8fwmDPC5CzD5CdGPYWP6",
  "key27": "2GqKTutQnJcnS7ofCduMAZJ5a5qDDN7D55CC52HGJc2JWUvivpsJf4chf9ufRuS1RMCEewzfGHAHnoCCk3rjwdz2",
  "key28": "2mTn4fo6in8qtqtuiBSaVMmEq4mvgav5mn4EjJxWScBqoYsXaft8zrHcL8KXx18a5CYk4cUqG6dWkJu8YV9LXZH9",
  "key29": "2n4bbwgBESW5t8VZTALE2YGSqDd8uUyXW1Jm2Ky62tJgUXJhvpMb63oYxuwsiP1j5PDfoYq3hfvx39FEqFxybeKY",
  "key30": "5AKyZYYH2V7GgZYjXUZid5xTLmknj7fpGq7R4abUgCCxzzvw1RtNZ2tctAmdgMvUpxPoY1t7r5gcGPUuhb8jMik9",
  "key31": "55TRE4LAhXfCZh57Lf5M8DbYEDhjTeqxpaoB8Ja9Vsb8rg3G2KuLAeEkaDoz9vz8QpgfUsbGotqbMkoiinjxGJ5F",
  "key32": "5aCwnweDhtLyA3zh2LBqwPWJURt1iawVsqJN4JkRbhvaww16vtbChwfBfGVCb6Uxv2jHVZb8RYQwwkaWiwVtbZpc",
  "key33": "3LihamzpWCNKW2eoJyTcNbyd3GmX2WjXWydVhgarCE6hejt6DZNrXPJvFzVZurmNAL5xnxkGJQVW8qA5U8299gQ8",
  "key34": "3Lnu4Xx41pTM76jZsCPSjeLsmtDrZZ5CGNpPKKdoEi6NfcF1nWZhUDQU5jk7WVg9FoECJq7Q72XgowgBYVdtANgK"
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
