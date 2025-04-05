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
    "3hqg94UfSCYDyGegWozZC8itghJwAUxWtDucY1dVd51gnXThVv8vVaWxSbDveHWpbbVfZ5eqHiVRn9eHq6rqqvkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4cq1DMZ7gtQwZLuxHMWfNkzdV45p6by3RCTiVD21Zu3Yb7vbCsKM785kXugurxRmfYisiaJ9bBfdQ5qPGg6LUG",
  "key1": "4EriqUHq72FQSmU2kdVXU9gLSQbBYkGV858VL7ri4su1WiTzbJfz1XRebQ2sPnqNdU9osRzxnsLLmtNy8UCfiBnD",
  "key2": "3iyVTiceqfPHEHqQrr6Bk1afFfhotqcDpVcv6ascRi68bA9yWXeApsgxqvZwEVVUBawAtgnyUqbkkLfcCxZwtVxx",
  "key3": "EsCcv7RH5pMPBGATvB7DNTsBUy4sSB2qqg4TSFwsAYrSJRnhJGDPnLvAhymP5RMXrWsSZQctJcUH7a5dbd7KcGo",
  "key4": "4ykuvBLkDRBmtJHEadqehYghrjxK9rKx5V3B4uEyyZXqFD3C6d9i8vsHbmdjxgDBMC7ofXDwjLqHhbhf7qNpSMKh",
  "key5": "5hiLhcSx2daBUE46yTDe8yXvbF7LAukSryhE3GYSzWPCSr7juMGpqG3LHUTHgPLNZkzZYXXGJSzuzBmZZ7qn9uhL",
  "key6": "5ZPYcnHaRL7jJNxTQPG8gHvbytjLYE5LHK9swRm7C3aduqspfLF8qoughM31mowKjHFRHPWGKekcZiPfYWQe2ExQ",
  "key7": "3fXtQxZkc2f1DVP7Rimr8RfEA2ctGi8W3bhnpFveMF4f8eUEyoYe5CxoRSKapGpMjfNBC5s2BNgKhcU3Zgzt5wMn",
  "key8": "595dru4JceEmGD9UDtXvPsTtr7RPnJKSAu3uyYWARx8CyyMvhNkoEnNshnLt4ZBR8zkPXgLnAeebZc1orLBmNtiK",
  "key9": "KWsfX1ZqjZxLLdCCNWcSWqw89UEyMPeBqysFhLnWCZSBZduPxLRmnYEncAUUgejzU7JCZnbJZ2MxfDrwaCL41dt",
  "key10": "2mcBR8WUs89jb3WAWVB4BdVRYf7yEChZXYrPCU9YQCPNKLSkyVvUDs3EsaTEW3N3WG9KeNuQX9MgkC6VuPArh4eB",
  "key11": "XWZAFL1fURk8ZKMqcHWToMvxfegxBFxhuneMxhAMrB4PJJMuQesbV7ReAXmFkdFb1B7zNxYa2iuagzVkRcxVQwD",
  "key12": "5Vufe6TQYV45kRbnLm3eSSBbGyLUyLqpsWPmRV5jTjjwRauna5riGxHo34kFEN7HJVJfQzv184rn4duJBw8VtEdi",
  "key13": "UxiYFa3tXA8PuzUaWWfLuHgVm4Z65rhKm1RsBaqssVhxubDgkP84pcsCTYPAzjh4Xyje5FsaSNrxy1F477rJnf5",
  "key14": "2ig8Rf3jRu4fcztkEkvS8QKKj5KKei5YLVLrX6AYHWXkag3AWD778A9nabnu2u7Vs7Re8jBBWyxmRqcmxwAWXPjF",
  "key15": "2CxJYy1ZzfGw6pjKAKQJsUA9tygA5GkdHJqV63k9Mogq7oFLFC3UTLkoEf1x6BsoXv2yy8yQTeA61AWrPyXXTh17",
  "key16": "Qm7jCcGZvmHMCuQ5FkfWAGRDxv1gHvyD4z3RX41TPZui5iprXBdgeWGTBmQeRd9LUPF82QYMNfERuvqrzApj2Qa",
  "key17": "5NU6GMSLso2k1KZpd8Pr7YvDBwnqjvTn4mKz1fueDd7447Tj3HPCCxxrTbRDS8zZm9dgm6tuDCbQqSnXpX2VpGpa",
  "key18": "5HVU2FEbLQ8LiXTJ8ecmZ46sugYJk9Pr1LdvTm5e4Kh65wwSmwdRCjCvdr1JWmmZxsyZwX1hQmGhawpdW3evB2vM",
  "key19": "5CfD6CJaP7tyo7ug7rarAdKgTcEUXp57vRP97wutsxiNZacBotLGiC9WiwSQeqZXZP2LZQKd2YQgeoFfyjGu7t7N",
  "key20": "121pN2oDv8pFGdY8qHc9vgYiN3VUWDdNUUCmZe2xaEq9uCETUPstazvvuEDYkL6iGKgq4hA7M42L13FBjngpq3yF",
  "key21": "4TVtwZnVZBNSNVKRWMQc8J2BNjzCYVnquiBqLZn4fDBCCeFoacpM5KrcubvvUGhHvT1asH79GUvVrjoa6xSnyk9z",
  "key22": "5Ey1PgkRHPkS3EdG2jLvDjz1Dw5pnMUJYwLNSBGagC8qZa6kgUptHSGXXQDP2yHoE26MiNE1z42HNfQ88ycLAxsR",
  "key23": "21Yn6rbFiTFcfVjSwC9SrS21XWGc5QXfi7MUmspWzEhMMRAdTVXgTqhBvKzfiTEuwwK3TrcBcXNPqAQMgsFRKWYk",
  "key24": "4S5ZsbZzcZWiNGDJNyoFd1gPt5PxnNeKJi1aNTWnvP2NzL2rLpzjJWeGqeiQxn4ueVscSzQSgu5te1vQWYKfgWMP",
  "key25": "ufPtXGDxNjRinifesgUxVmU6tPxNGiGXNxuaXC2ywLtbB5G9TYSjMvyNTgo3uMrhFXhUtB9ZZFrVqZ8VEyUEXxi",
  "key26": "5WmE7x7H6jUfmkRQNVzj3Ueyx4vvWi6pkdnkYnjbXLdoXjPMCDippXeMcV1GikbceWSfKRBdR18jf7PnTC8rbsYX",
  "key27": "4f1wMMrknvjqR16fmGgwajPcXwsmPL8hVUQYHqbhEtCiFbw8rFMvic61D6E4uLKFpYcJdXq5Q7TJPL57iwryCvHV",
  "key28": "d6YaVyUBWJ7p1HvJtMAMsEWeMssdfugYBaLe3mwBmgtGtDoKoYjgi7kiKcVSLft8ue6X3wqzxVD8EcEMgWK1HK5",
  "key29": "5TgJwhJ8UyvTdnAdnYNqaQmtTUg5pYjoFtkcpLr8DXeidyoqMKzB29Tp6tFiUNPna3BtCAFNYrt3KxfVby6LDihj",
  "key30": "4KVAfwRSiVndu8EX7Qq3vPhBVS6u42C5ukM3CLK8pjH3VV7wRP2TWJq37nZRgKVQjs9YDLN2CuMLXvt4a2gQgxFd",
  "key31": "27rk4qfVxrFG4Z3FM9HEZZduTCEhssq584rDB5z56fxSPco3sDxXhvwKuquCeJGB2yDcWkVPbHe43BySdsFGRtYN",
  "key32": "n8q1ceV8CjD2tk7fZ2GV8CW4ufvAWFfde8vogYiYbC9LwqBUnRhmHrqWMy26fXdmHNNfWY8pdKjhFnFH9G3oLmt",
  "key33": "5fEdYAPQNXq8yfxxgfmBuo7PxZSuJuKKJ6JwAGCMPWSku3CGWqSWz99W3VxH3tFesiHjLLQhkZA7euHifHmjDddU",
  "key34": "2cePDGNtZKQDLR7U25oLmmdmssXUgyEFr7SjFoy8xCLhMqdUBbY4HQ1RFeQqacF8SwuxL82VBj4Qo8nezPfspGX7",
  "key35": "36H15HXxeLHzS72AxxgnCLRcQ5hGQnFva2AQQ6CLeqztosMvEZtYa5wzfj8RczBT5At6bk62LfUseLs3qCr7kYCr",
  "key36": "5UFih2yukn1ZqoGkVaNUhuMinGfXthd7myXfKw37wtqDK8iZshexEvH1UUVH81qHS1jTrQyTpKsiWibL45orYHCK",
  "key37": "5mS6koG8f6YsRcNv6AqFVKqRGeUhZWPLARa4CVbzJKG4dtMG26VazTwBC9ATYzJLw4HLw5CJN6Yt8ibW82KctVQK",
  "key38": "4mAcrimyvXwinwFeTu723fhi2P1vhN5hu8evW4XverXr9oWqhr3DXeYgq8qvhWgxxGhK8e32AAxbZpu7yxJC7zYk",
  "key39": "2rx897aT13TwFv9w5DsLwqS9M4XHHU65y4oHcCpHdQAMnPfvP9QtBoQsm5geWHUvfrGoGZUvG22MX49G5xLBzxSh",
  "key40": "5phzzsmTEkGF53KygRXMYqpooiSH6ayKy71TJmnXtkvPsQNpMY2ewxWuA6pytutbwgmSKC8zv1wEPrPxchjnscWd"
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
