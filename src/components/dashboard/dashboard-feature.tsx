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
    "4hm6dU4geuC4KwJXDQu68mKv1SwTHDe2Hx7MEV3uKAnHaJ6n8P7avTLrANdEkyiBEM4aTZB7W4sRRpjJCiYDEq85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKmyJekUUWCH2TiJXqKMVZ5MndM4RKGZQ38XgtX5najFCxpQnmGin9X7vQAqy7x16zJvL4N8rzjC6arH1LX9ar3",
  "key1": "5Hah2d1PBZi7B5jfBxEsCg3hTjDx6DbBDQ8tTFAwyxxbCQibJqHxEZGzm8B8nRuugYrE547VdBUKdo4zWUv6xuvp",
  "key2": "25Y5RkfwndTX2dR2iMydpjGL5fATqZXpTMTLbgnmHGktPugi6f4qonr1qkiWa9ohxSRY8rkZwnUAPkSahwZyCgnz",
  "key3": "hZLZ3BLpZPWftcYDRofMtWnud3P7cfLJakhXLodiH2mZscJaLNwQNVWx129dH2ZPpEmBrFhsMTFYo6hvnCMfKff",
  "key4": "2oMRHGUco6pYedbPE6SQ5zKGtgUDTXHB2ghVbeG2hCXKRrW6PbaP5YoT6khgtnNHGKsgY8vTujqcDemqXSaCyC2s",
  "key5": "5Lzh88fS5XAUmQkxGXgsLUqwc1rz7oaiSrv7GjUJXg4A9H72NgCztFpuoqLXBBajBxpVe89VzFzhs1gqiXimq7Zk",
  "key6": "xbguPNiFqohmAZVtZnUaDJdmdhAMY5ThdutCLE3mLug8KztgZakgiRrbvrrveMZCKHKosboGYghYFWF8cK96AaS",
  "key7": "5PhdgQBFFwdJExyNDShDqd5q4e8Kkr8mckaqJHRyjHjWx2XFW5KFij9mS6pbS6MU7wjN2mtzwCAahvheRERtf6kD",
  "key8": "4f93ikx1sfCEsFaUPiuTCB2qazjLmgJfCBipKbhi8pjjxo1uGSQ3wyS1kDWkspLxj1fep4X1HAvfmCK7U86yh8X4",
  "key9": "3M4ZkcSEbKTXvta3doMPwSWa18cXZXPpLtw46U85sWs3bhNXcfseHfhWkDBaShdwyLo9mu7HPRpYW2xMwaPgfPyf",
  "key10": "5MCFEf51T7dWVRGk8WYp16iNjW6384BhccMookXLiwNLF9LDdyaYpVY3RaG7UvdyhxCDnNLosP6WoGXUiRF5jHk2",
  "key11": "5t6wnSUz5Dfey4vkGD9dq2haLkCj5jbFUhvtXtfok1Wg9s7smNWAotd8nhf1pNTB21fioutaPcAxRq6KUUeueVxV",
  "key12": "5UnLpkCMeyi4xEUW914j53c4ZFjtwDTaaZzz3EX4cqSpe1v5xTQEaMUGjVPGVM2L8NMq9reQ7L4hUPU6Nv9aVzdA",
  "key13": "58PjK5Qme3hVXdqSAVBpwCp89XydaXoFWEp7TKckyBSaYu5TLBS6dnzoQejeruCssczJYSrd5432XL8WeBWJ1wxC",
  "key14": "t2MLvZ2dZcthSUiSHmGV9bbhLWdwksbHHCvDT2zB2x1hnWmK2BXsuKfGc4pr6Hjm37fFpARwWLP7gJabXJhSFdA",
  "key15": "4jymG3oF8gasNk9eUuGp3SwEuWq7SJHmmsftzTPpzs5BCy2QKBWAzhFXsX63suPGKGYKPKQjdr4L7xreenya1PxR",
  "key16": "2N4G5dLzGmdgWuGyHZNT6eYuYh7qyMBc5b7C7C5XbumhdbXovS6rbzCikUts4vY9fjha76XG7Y7Qn68JbzS1NXNA",
  "key17": "49oJQ7w1sfYZ3rE6j4Vazf6TgnDLRWZCv7e27dq8kVwuu77vM5q2g7m7a6WZWtXSkh8R9AMpNecKp2kYR957dQqY",
  "key18": "5Seiv9FUhvX1RfmDzUERck9eHJXL3uwu1W3t76DayVGuqp7kfDJ6FfCy3MsNjYBVgeatuKUNBYhqeYvieYiCLka8",
  "key19": "gs3jefUWPUqqgoJsnEHM1bpcLikgaNyYvha1B8j21ewQ1rtrdsK5WwzAFRHj9iUUFWn4S6tomp7bZsFD5pJ7njL",
  "key20": "3Myhdarad4R7HG9SxXtWeimtoNCCyDAgnZ1nSZptYN3fXxJuui3U37G7o544s4B89SLBaXutW8Gny53QVjMrCo1n",
  "key21": "qPzXLPfCMYiDH8kamVFy4RoWNpV1GhmfBa5ZJeXUdRdfBLy4KiJ8xEr6TBnEYCnsCQRadkveL7rnU7uz316xzUc",
  "key22": "4weBC95qUmTKL96gxWZqy53JeZcWUHVoRuiXgC3DUrLjUu8vQiAHZBE4FV2j7SmrsWNaEm8Z3ZM83JE2E8H17G8z",
  "key23": "5YKkF9ezTwwHVkapqEF2ootrPhswXGNwWZEfcAZJdmfYuDoP1Q3mdz7bwCj54UzPP1332ssgRDpJRBMyb4uexSE2",
  "key24": "2AFJE2UXQAjzWikntGCGww94r8eT81MJUgrmASnFcwqZpsu17AZX57esZ6QiAprw8LVFT1mfZXDicR2eh11Fwb2X",
  "key25": "2uSWynyuUCjhJcuaesaNkjpMvWd53uNn7FAFQVeL61Kc83XedPtU4RABiXEk4248WubFLooYvf3xDkqpRnZPvxWD",
  "key26": "3976NYcZ8tHyBeUwL1Ct8JAiumf6t1oNKhxvZYRWrws6n5h4MrMS3MNT543yJk45F2jQRf5sD4D9Fd3AKpDg9VZk",
  "key27": "2bmSyZNN2deW4CwinbN7ThWaDYxXhkrgqyxfa9uNoSZPRV9Xt9TYUykpRmS4y4CkJoedyNxshzYSiuHJCrjZf2kf",
  "key28": "jcmg9VDej91NjTcN6CNxvdXTAhf2hNACkKks6grR3PXH6tf2za7Kcey5UyiGJA1ZjLXoEBjFbdzGAdJA4wQuSd3",
  "key29": "2aJ8CyNsNJVG2bmHukTkMh6UBATCNfvzV1zpk2n71Ku2HWVWdQjk1DVT7pWAE6LhTeq7Xv9nKKcFw8bz7Xp7eZpa",
  "key30": "4rSXcr61YeiaZQos1PGUHonUr1dX8hv1Erc2L2nexGeHSHAwW92umxM4pWL1VEVqb2pDC88nP36E937wPWgdVKBm",
  "key31": "3RPVDSdzcxJSAquBHEseEAvcb6g89d8SeLmZTy8CC5H6Ek3L4XMGLm1NWScYMMpsn8pcCND95pJxrcCrWDGD7op6",
  "key32": "ycEgwdshoCz7sUrrgEvFXd8c5FvKmzmZKcy1UhHpqFu7qR9CoQXmg8uCGqfF3fcjgutpxJ7Eagt3dZswB1h1eow",
  "key33": "3ieeVW63EPwsTJ68PAjhfn35nm7pFqrKDyBLgx1dzNSfaGwLV8KxbQGg6KKRrkpyNBP8LdayZGXHGkmwP4SWiGzu"
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
