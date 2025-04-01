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
    "Zv3sz3M6jgsqVUxTUpAFdasdhdSBHbtdtq64f2MUNumqarGRhMzm9ja3CqR4oxhszA3VWvAdc1bPqRnZPCaUMQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vdraXQ1fhVyrg14i8uEQN4fRD7HMdJffDu1E8yH1nh2hqD9reXccsyzvyjSgnmvahWC2GnhQ4EBKMTagFEu7Kur",
  "key1": "272S86Pyn9stPzWokDR5T6sFMPFmLqtiUFTDzYC4pTuUn6YKWfqeiJxZuYsBnqEXqeCBhNNCthv5qsVjgo3NPxRM",
  "key2": "LoJ7U3HXjvwFPpawzi6UV8qamygUiXkiQrX5jnPWchbgeJjsMeucVNLp62xttRdP2qtPGsTEJ5Ec5aUtvNXmVVQ",
  "key3": "j5fN7ay6hQKm5R2BRsAkSftiJDMzX6XonrL9L3y143P8BH5Fyz5Q5AEjVcLAL9fnPuKwtiUZMPnBgvtZKudvVKM",
  "key4": "2Fur3G88VbG7ggAt6EZ5obiPgwDHaMWrcaKHXyAsemo3PHsmtVJSgqxH1m5KFPywWewjcgc7NRycaGJCbL7s3QAF",
  "key5": "4Zo5o1yHNn6BXPAtABDQpvenkjhy22rWrgumBXuihsnfcikkaGVMgeG5e7pTbEHx2R2VhS7rJcGGmrpN6NmarMCt",
  "key6": "5Jn9AZS6v2sG7Y5TRswppQwU5XPLnZZrmrUpsrAhieafypCP2mghWvQVfWwvySCk2tF4gyma1QXwJVNgNVb1NL2d",
  "key7": "2PJaAfM95smpYm9XYGs6TuaFEUCb7wToTM4XAYgDST1fkXn94QSqqWsD1bQFA6uNMX4TbNh2uTjx8nb4KxNPN52C",
  "key8": "4h1usDXnpccqWns3wW8XvEpGdx1CbQLXcHuwDSWE9xGurqNrLdrKtW1seAVLvvpUzLmE81N5b3CeaVEizcaXZgfx",
  "key9": "4VmRh3Jqv6YtQrNvzrmr1uFrDGqc4vhxyiQuNxCvZiT9XLmv4KyoYf7SUaFWxRdvgbUfFtDaPhEdFXQNmbaZhGxZ",
  "key10": "4zgthi7fxz9coRuY4pASpYSfMUD1EzWR3HmaWU1nAtuLnbQEuTKpbwfxQ2h7eDXQJH4NBnYJHpqkCkLJCdUP1G5G",
  "key11": "2hVAgsW2VqKSxUrQUxwx8pN23rofd3KW3b8VuxusUsGoiUGwQYaRi7hQ68nuJ2mmjRX6uMmmbqHLpUPNAiiBsuA7",
  "key12": "4TRpY5R11fBDfGuCfJ7QMv89yKbmKfdHv8tUUx92S17hWB4xruYMECvepHbbnhpSjaxnhgrv6mcDkRx1dxZKRqEY",
  "key13": "qVdTGizkYrCATdfd34yKBznDpL43u7EKxMQhinsREX2G4jHsm9Dxk7g8Q1g4PCrLFBTni8wVPATVq9cp2WTpwQ8",
  "key14": "4AKRbbYCypQF6TXJmBcASEUGBvttkGFKMkjiaADJiHmJPX3Rk4ZSaMspnGiqbrBafa1uM2H65m9QVM5ibr2tCcPC",
  "key15": "2vRNkTJ1AW4ETmqfYYMwHiH7iqRJtCybkY8j53tpbLKHzGCGjGhCSgH1caGJGcQDJmnsg9FofwfXayHRHS4eExKH",
  "key16": "3Sp4zBUANXgGPXqzEYJaVsgFuo3fjNtCkUK7NqLkw85N3rJtKXQKrqnaMvW86Y75kdyTPHFmwRQ3mDo8fs7LbvAm",
  "key17": "5KRNA61v6ssKqWWtuNsh8Y4zcHgYGxkBq5AJAvoWBRkH5jp7s1F8dTN747A1wz2HTbYntvL7r83NKRW8C3SNfJ5F",
  "key18": "DoJpWmitTcwDmqF94rYMMPHfJZB5Mg6J7iFkNKbyMbNhLPBjTjugB16LXjpMQs162P5cbNXBiHPJqJSWLkF12yB",
  "key19": "24z8mb9G6woNSts5AmJeHkERQRhsvq6SYikVFwLb7Cz17GaMXySeXUYYiPJqi9W3p4MpaDftNRJmaNhTD23165wi",
  "key20": "3GVMh12rx49EyncmX1y7wJAsFf5Y2FuRkE8hmbM9QnriohS3LTztBsmzAGPYnvxP3EdhPMZZgai1wfbgmi1ve1ng",
  "key21": "5D4bRS5fB2no99haq8DMB92MSKXhzmK7qKU5iaEwBiDQ8A7H3oT8ctW5LU3D1u4UkzYtahwhWLQXc5ruE6cZGVzH",
  "key22": "52RgMZJrFXN5NFdkwTTEzbDDx1nws4WeSMMYQkPz4thQCgAU3DhkSVtUdZHDtXc7WvbW26USb7X551YM36cRbrmK",
  "key23": "p7R6QDvnGwQH24g2wf5erU7VixTWSwHcfxqrQMoMURiZP5HRewfwGxHBMV79sKRekezH5YAUHHv3GD8gjgZP1A8",
  "key24": "27LJEG3jz9qw2WJ66vHSHKXf5HXYRvrqkbPhfBdWhK5bEefXTBL3TPaRRem7rWP8g4TcmuhSS7CVCkQ98GvLJYpK",
  "key25": "4EtP1YjpZhUUNNy5KgNcS6rC6fzydANBanrWWVpHKPFaakSxCcTx5Xef1dJPaJoLKbVfJWLtveJdiVVcBsd62VKe",
  "key26": "5GXJStyeVgr9sXhofs2fgh9RjqAaeLTTodVncGR5GSGHRvbzRf1ZEFgJxnDq5BPnWXbk3XAuz5irqLAZKwRmZupy",
  "key27": "49M48aUqXXf3GNyk45TC7rzW3DYDpJZkJHhA2Zs3A9hh9rn5sKdFtbku5d2xRmPa5E97Q8Q1dEY4YrEfrU7SP1kV",
  "key28": "3Qt33G9AfFwFj3NQYPJpk4wFa8ckw21e1RqA1Lm3Nk93azrmMuyVjNmN2aDzDYAL5GBSymMqApzAtrq64HPHX4m2",
  "key29": "2aPPstR8yqp9rwufnAgdUG49W1qmw33mF2btKAxrt4XJdWHbFedsKTM2ZmHgMSUXZfFkWL5CABdTAPNwLrzV9Hfa",
  "key30": "1NNSWQYFFmFAz8bmQa8AAxjf76XQZpYvsa8NdJdDBV9d4hJjQsBWc26Le9WyjxLcqJgvfh8kzMtFcCwZaVmPWAR",
  "key31": "5bHEtDst8kKHTnq3dTtxFYwndJKWdGFo9ueUMjU4jeRtkdQfkGkFXteD5cBmMZ8qzzZrMcwbnayyQ1s7UgYiRktn",
  "key32": "4i83YqtVxgjWWqTfQFC4ZVQ4KxhVfLP3ERXuRB1Us7LALUmaR48qVjmjQMfnvwTnZbXwP16xB67rRi45yTjHfaKK",
  "key33": "5sV7f5TVYzc66A2asHudwFU66pNypJb7XJwgYtYHMqtJdVRVq8RANYqKGZTyPiczBr4XkkAZ2xVnLX8wUyvfqkDH",
  "key34": "2NXyxcioTw6Swa7jgFpCUG5t9awXVYMzN4a4DBxHa7yiCC6z2aEPGZiYQTcGVBvP4wxtZ3wknVaG8U6zZFVcoQr",
  "key35": "X2jbPTPAzKUBQWqnq7nw9zQbserg48Fyi5HVxY7syLvYo2NGpfPtUc5do2QxiX333aCFhTvyH61GbVhSQKBc7mA",
  "key36": "4pJANAB1yEEDMAAiH7nx2AJqcruur8aq7KwVH3BLVFkiHr3gePUcSHnimiCXjf2b3fQNbkLcEYrA1p2W7eFu1zwp",
  "key37": "46mqa6cgWNgBDDooWqr6U2jwU8qGuS4gB8epd7EG4jYww2yQYZPh5P1XWXEvw8GHe7XMai9vNMAFQbwV2vunhgkM",
  "key38": "58SRydeeBnmhAq6cnWdRAXfgbnMTyXPxrfejXj4cSNEaJbkfHHMBvAxcXKXKUKkRFV4Y81eX3aiL29FxGzLygRGP",
  "key39": "LzNg6oupJecBpfLisYz4hnAEcmY58zJN9zypQnW7c3KAmC6pUnUvXSPcddXxDMvzwtZ3498igUvG3J2FyAUsuNB",
  "key40": "5L3zuVDS6vpfc6883nkdURtXWXLVqvQ9cGWbnv2GUQ6aTp1uPW9BfKGgjPz475C7drqW1Uqwn7TtQFsvwHR4x32H",
  "key41": "2FRFnofgSZY24RyJmAwEJUsF7aLGHfy8Zg6Aws3dVREMFVMeaG1SPpFjTi9qQ4mYTCJfhK7zcybdRscvZNcKSzor",
  "key42": "2d4aksoEMrR2zgrsiRUHLSfwfcT2PYjULSSruqoet5t3FNLpwb942mA3dokKSDha7AVMAVqTQZcLUrwuqT6qMpSs",
  "key43": "5QXQQXjQVo5F4oKxkJqo8SZGT1zhUTSrizbouoGNykFp3Ky2sWoMULzXmgbwNSmeJJBYqaX4YpVZJBSBSebPJFrx",
  "key44": "3c3kRX7jPMWG5jnQETbqkb2yuyPwePafEoHQY9q9Y3qMJUwu1GSF5QpGPLCM5emh3Yk55KMyJFhu99bYCf5GchSg"
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
