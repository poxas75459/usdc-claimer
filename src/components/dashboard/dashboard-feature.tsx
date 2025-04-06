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
    "58UYz7VZyU5syNhosHfLWsgqd5PwuozUNQGreteoogXRvKimrXbMsDw9bpZwK1pKxqq27ohMJtbkTfBWMsvLHZCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMNcZtKGca7VvtoEDNzQWaNd4t9tVkGQNohtJb3UKvEq2yCgJh548N71YFdkNhMyZkfccUZ9K6LdNNLqBX86J7W",
  "key1": "4uaaVEtLVvLR1qpn9u7iBaizr1fEcE8n3YCpyv6kepHWXFTVfSW4myzYYaBRwU6nUK1ZHoDs8pvHT1tXioLjs25E",
  "key2": "2E8ETNpF7QfAv28YccMBTGsXQdvKvuC7XRrH73sQ3UFvuUs2AvLirHe9EFuUBEzCeUbwV5TEntKk3FfxYMdGstCm",
  "key3": "24w1LzwrYEkvZntWZhzD5zNqtGXDEhiD4wdpC8jJfhwwr4g7bgSHBVWRTksfhoLKkK84LqK4rPpNPQzbrRy9FzD2",
  "key4": "2UyNLTQ5jQsQCHCYznH79rCMxrFX2ERyd6DAsDkZ6snBmgQRXsMvfjSYVsSb9saGtaHvmoK6wKUcpeg9NsT6rJ5U",
  "key5": "49J3uwChLbmYTny2wutCBX7ofvHy8nkeudYLNhEF5ty42LEcuSEXiWxwDVkJLN82HkY9g9ts7s9m9ty6UTjZU7n7",
  "key6": "3zKVgvkrED3jHRZm1SdQhVpKbFBwasgJWTheXPcc6gcg93rVN5xcVwn78TbmebWhEVUBMnopRHfkUM5XJjfoeZ73",
  "key7": "2vgmrU2N5yHCX6NtYWnmp1ivcD9yG8HHNT4d4ey1D45uDSrcNSArswQWtBzLfZ4rfQmi5vUPrK1LhMKhf5EJvtMV",
  "key8": "uN8JhCMHN77YcjYuhimNPLgLkAuGeTQQ6mCvmBQNQPqcaUFQWPvLud16Tx5UK5jiEWVRHEEAmh6EbhUtJCAPr1b",
  "key9": "4BaMv8runQ1yjH1MczCvguYyFLLLMpLYke6A5B7z2hVpE3Z7nVN1Bc3BaUetJEDNnqWcVxdNuRH4EcPa3dxTKQng",
  "key10": "2XdEePZHpzjdj8ewiJR4cHT1S7ne5BSD9FDTVKZxsQDodnKUJ4og1vEDtXZqe54qeBfUe4dJ1W1Jmn2qwVUHTSKp",
  "key11": "eZfFDg2g7dJYNLRELJEXzuXQf9JgtdQkfALUYNcyt8XKzrGYt4fAEPxxsL9BqKuDRb7mWGA5YkpY3ka6pwHY7Xa",
  "key12": "2C4YSvf414cbtEiLYvR12ErjKY96fH8PR5yrM4QYsAKukVA5mH9zfSAeXaizTubfDw8a57pkumvQW9XKCEa7jjKG",
  "key13": "2ez3Zv6mZJLW5aG1cgYmDW2XBTZmg6cLrhZkqGc1SpGwhxLzT4WwzomeCAi4ApqecFPmNUx9mf89pX2QUNeW1bG4",
  "key14": "4kVSKaW4W7NbQjSAwPZLiNjT31LD3kZHW7jNTY6McBbbgJs6Vrm7FRLDMgQdH297f1hXCLSM9XJazeRhxKAZ2Xic",
  "key15": "5Gi31DgvZsjM6fpQbFCkYfGVQszWdevA3CRRBbdQszSH5VSDXyejJe77MaLvD4DTR9aZFxGwyavB9NhzgTMeUCuc",
  "key16": "259npgpk3vjxWbUzNiGA9kLJ9CK3h895ZPJPLayMidx51mQkzDQbkHCasAXR8YXdubPRohbPFWss5P8YvVBRAwpN",
  "key17": "4nD87maYgp1piPQ3G93i9aez98Fg2ssD1YS87Mxnv4RiuDtLudb9omLHpPRW69v3P2mH5x3QFLUCJj2q4MfkJ6A2",
  "key18": "z2KYvx63F34zSH3FiAiCinfj14XQMY4zVNeekcWkevczt1wwyyuJTG66gQUVKX41bqvrPSXfpooBwkH4u31NEkA",
  "key19": "2AphQWRDr2CdMNFjCNTghmzYZxx7aBhSTooVobg5fCn943j7c74SVe2h9Xb2XYYxDBW1M3Y5jTzAzmPRLsu6u5bZ",
  "key20": "21ymtnqH28HuJUfxJqsf1iGBR3K6CmxyDg6h3x9Jcd5gMZKbSZPAyxN4Ve8MYtVzLnhtqRUomDsCkBEESVCwxcHJ",
  "key21": "3xY8Zxp7ZqTiU3fGkQ9mpSVAVKdJxLuWBazT17gYp4T3TsMpxKxJ27YKxZ6r76rykwift3M79cgrH7id8z9Ld9Mz",
  "key22": "5u6QbftRhhrGx82LZb58Bp3jNN2zMFFugPbVvTLo5z54rQ8ieRL5WneeUL9ai5rhKAejnm9U7acrkGxHSywaq8Xu",
  "key23": "5GAXJidqYjRdmugzRUdNUqR3EAS5TZTPsHjatNWyxSr5mayTKuQT7TnX7dLBMwkH3nnSt5B9gNUtFMjpoQBu3o7S",
  "key24": "xZMhUctQiZQKESZgJpVQU4acCuhVZVBybfr1QKuRZvu4sWgemdrUJLPVaz9UfcsSe2vWgAT59tvW5wMnsNMoNyM",
  "key25": "33e9MyY1fmGhW7HsHKh6Lkymh2pEnFs62FDKXecY47r9YwVha1AEMa9Yn11DaBMy6zXZwDLcvx1HV25AoPzuGyvU",
  "key26": "4qvsx2YMD41Ypt5Gg1WFWezhr178U5ZN9UabYoQbMG3byg5Cdi4ACg3LAxpoPgnnwBt3DDSDPHfhAHEumvyPdmqq",
  "key27": "57kbdhCJ8CEuXMZQSTE3ck2EeSezJTd5HMUXz6KF1ocCJ5CAgEBSKNebAk6P5SsUvX34d3pQoeG4uxf1m8EA7LQj",
  "key28": "vXL1ggWyBQjCqfnFUWfYCJtZZDiiBSJNvF857P6aDPVxVq8ydfbs9tDLh4kbyQYJ9wViR2P15fryJioGAgwWquR",
  "key29": "3BZufGKRdxHQKAcHbuqNC5jcoczQWvdbsFGQWv2Yap7ge5ZfyH6xBqhLeQoAqACJoRRufbBG1PuXtfWZ4bDtE4t8",
  "key30": "3W1PC5HBjbB74K2FDJJcB1EFY9yr1CLWLRhJpToTCiE8c9wPCjWXnCtmbcmFPQcw5EWMjKHnsuBDdhxQ3UyFZCgp",
  "key31": "3JBTqSPbWXLUMo1RjJwqksgATWoTwUuo2pKgqdsDXqCda7SSTTabRAWSFbNrWc7AtsibXXfJdC6n8go7tienvgwi"
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
