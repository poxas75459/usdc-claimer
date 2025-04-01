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
    "541uWLLp37hZnbC8dFj7Eo1hbQpED3K53fQz4FarqJZUrx4fqDPGcKyPnFpmBCM6hMCoiB6Jb1r1zsh9yotiuTo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bfBHfRP11hGwYUcsqpFRV84wKtCeJMo9YzK348mbyoFk2dcbxPTkhJ34c9FpgL79nsPwGK3Vm8tgKnhuSC1u177",
  "key1": "y4LDZELUA9p4htA1T1Z964eGYR1xJR2fkhPtuFU6oeugDzoc95BkjPPA5wpmM3p9hMCkfRkQ8gAZhxt6UtzUspf",
  "key2": "2RaujTtFantAtDNpWJyEuDUMUC6K3NAtvCryDeJstsBRgZnAgbeQwE2J2bYrPwGH4yQsaf3hutyW9QeBFp82pw4L",
  "key3": "4Wy6XANxKLGksqqhyzPqsf1dEi4UAJUgk3MNmU78urEoDYd85rJCZfTUDEQhkNrjBisvMz18oXBLcwcEbQCRcVZ7",
  "key4": "4d1oogxmJJEhTHoW7bmtLGWY5nqY4XR6HhiD1n8mdabMqzjXeeRaFkDdtk78NUw312V5UN2CEjXteGcMxh9KdzB2",
  "key5": "4wQwZ4K7ZuXTwfrgF2mJxZLTkk1kU9U2aJHqXWdDEdRF4AwM6tj5jz5fe1Gm8wQRFzKLYJUBvwZQXDHmTq3C5TNG",
  "key6": "sVhbEmoEBBve2mrcfkXxxaoiuhQ4V7MQ4KZvUxnE66QAm6XPBYjbR7MZdjcePmecH98DhQG6ku4LDUM1eTkKiWZ",
  "key7": "431wGNrbc7q4JZqqD8ok7iknLexU6EZm8HkS2AgTfMD11Ln2N7Po65XGih2MMmb6ENbvLaBQnF211MqvnLHT4nY5",
  "key8": "3w6zR5VvGenFfXE7zWBJa7dm8ZfP7EwnCgJL9naESaFngqTEc33XSfmj4u1QtRKmL35TAFC8WDEscPpWTuNJM2qw",
  "key9": "61Vk7EZAfjM7KdnA2KM6TNckfEC4d6W5B9wdjW7b4X1HjNcodTrjoTA8iddkaxWANFczSuQJkPfqyy4DiW9Se6Uo",
  "key10": "47SYW7y3QjbtjjYfFJeRXmDSNGc6bGk9jNgzUbFYGABADzboFvCRJCFPjw3k9vQoj3EouriWcHKPyC5PWo3fYxvv",
  "key11": "5hszbyoyVB8C2rcvzW8knDiJYoVT2WyNRofhSjZt61N3HgMCTZrAYGvporVe8GBj8SZgXuggGo4aZshEswKPNPre",
  "key12": "54zEzMUzwGAF76x8QzS97APxLsPQvfct7w98DuUKY49jB9iPgBShE4SMqZ4XgWEJjYZHsHEtCZVQXQwyD5SUHi2Y",
  "key13": "2RkMjczZJB8rzQfr9o6ojaguNK91xk2PMgiVQjVPuqWqAb4p1eGVfVj1Cq1LJctQ3BXV2TbE8PKqiqLi9AZhbwcC",
  "key14": "65hdSvG2vsQAYtR3khAxUCTpF1kWie8dvaBx8fCfmgfKRy1Lh57qZ8eksueD7ScXygJYyj9mhWw9tujmRkFsPd4i",
  "key15": "CVoVxgoaFJNh9L4o2ukZgzapKJruU1sE64KpFSv3mcGzRJiEmtv4Yn3TgQKVPjaV4fB1YzygueQtW2kK8w5TM9m",
  "key16": "3uqBhpN5st5mUrPuUQqmeVWZWy3BDXH2nWDQPTS3CcL8CS9PgXTD9Bs3FcA87jn5pN2sATmdHaMfMQYeCTExQgJg",
  "key17": "Z2W449FpyvapdXm1wQwfV6yYTKJBbMAhn2Eqb5iWDisZA1Yf4WqF7fS63vFu85zzixn8cxCaQiKhZtp71nyCEZM",
  "key18": "62E1SoMH7wcESnfXcDfg7CMYUh9zD6pF7o7pBKm3ZQJ2y4HnJ2UEawFUcbTsZjkPp8rV7h8zNvcB4NuH66qLKskb",
  "key19": "3F3P2o56hc9jfbfEyMkW3kznddeLtu3bEoyxo95GLeQfZ5J2hFLxFb2xNe8XPoeccapWFS1RFTRESfYdeqEo4mq8",
  "key20": "5NgUZHcTRhqpxr6XPrMh59TGYKVMxdDaR19by8mtL82bKSJ837fo2U6pM3iv7iHYift7eJLocqVqiA4JSf9QDLML",
  "key21": "3ME11JLodonxMzwsKkQG635AxrZN1SbdviQpCHNvmKzB6Zivv1a8es3ahUKdi7oMG9KiuafHTL9NRjrUPXzQb8qz",
  "key22": "4mmYNnNcuQt3CJieNJ7ZL4snJVb2GHUjgkfSUncyq4VSAxTXiuYzYFVe1gfVGF87nFtnHtgZqHYkHHU7wxnptwEy",
  "key23": "2w5ora4fUUK3y84TsarQ1jaQA2QxgJxtt8C2DHWiUGJbzLzD8kRDMwha2uodrKRVsHYUR8fPBS5H9Dw6XBoUidA6",
  "key24": "3wkcMcNMtdKYWc3mM7B6QBhiBvpLd6KgbRfB5MyKG6KrdRBhmxccLsUYkq1bmcMmvS7z3yeUNfgxdBtsT33s5YFs",
  "key25": "38GoTuPSJZPvcmrrE3FxP8dpGSNAtYKZMHQEd5WWeWq7ujaosEqLzBaFYjjL8hNtWrD9gCy9UhgANupi83SFbEDs",
  "key26": "4xis5PzkEorUvVmeSHafoeUJMs5Js96PpbUxMELpNKBzFJoneLfaRhxn5CXTamqmD5bNwXFbCMDQ4qvqDaRHYLLJ",
  "key27": "4Kg9BGNpyEoNMdVbkV4bDjJ4MhJTZGbdDYwS74VFLSutKiRN1xfRjqt7VHz4u5mij7B4J727nYTrm2J1ZXdTnhAW",
  "key28": "5xHGHdPguZrZ9UQyLYkpc95PhM2aAL3TcgPbSpBLYdaDkvg7Qs1rx4igrdWbTsYVGu3LPNXfcDrZsKgSioUSsBKV",
  "key29": "tMwsg6eTCeGdNAcSRLy2ciGnDrS2AVTSubX976fjmWrhvZQSzb1DFDuFXyj9KaUtB6XNLMhSiLHVYHku5zFNbfv",
  "key30": "3SaBeVjTyTJ2VSJVtDuu9cTYQUv1FBtBV7zAjmphdzhNZYzzAzHweeqnVF7ZRNHQju2yk8NDDq7yDvNcWwr7Xz6j",
  "key31": "dzQkdZQ85wkvmPtC6A4hqDAQGNWp9i3MvWuRKmXKpE7wRTc331aQK7s7cCL3wHg3iFfmqd9qEcgx73KwmFp8gwb",
  "key32": "3HBMSyTetQh4K9jqs8VPefR2LC67PpXZ15wSU3FJyJfgiLZ4i5d6fAN1sXvabyoyvn75uLPsyZ7CwaHXKg1iL4uH",
  "key33": "4KdwabGH4jzT6RTQCs2FcfYiawcAsDjbeGnC9ayMfNBnX2cTNSo7SQRS9ZmMZhGNchEUrDKzzZj1QbZmobb69Kuq",
  "key34": "4bkJMURSkhDADWQkb7BC9CfKbNQiJUg4oNHQ1ZiZfcwrZ83DkHnTPyJunwJSWBH4DkqGxqcLmpVUVW1576WRzJ3Z",
  "key35": "419H33F8VpfeoLzqJy1XW3uyYrJqwyCmSPuAij3KvwPDPqJNMgGFBrrXzCuHC4ddwJ8TCbrhzQzqskAmdp718vLf",
  "key36": "5cf38jkVVunZEnZUCLayYUQfEAH7N7DrNe9t6MmzJcok4MgmYCYvN2PtbcYhBmC7vnSdej7VQUkYvAxKojxsGuvm",
  "key37": "3WJExqxxahw8HSYqAptnvdcLQ8KZmj4cjzKKCRPcqoP5qC2vbwgCcBHb9mpgNP5zggqupWR66n5i9qvx1AfkhrL1",
  "key38": "4uBZW1PWzPKhucoXZYx2143dgQ5eeJ4Q1HwBtFtsPQz18Yz2cob5zEiayLBWb5cTRQyUwgHshn1jsCZqQZEUPRUh",
  "key39": "3DBPP22VVTrKGrMugrVuS9xUsmWTuzamZpujVaDS9QzBBGhAfzdo6MsyMRUY1F5F1WnLam2j3r9pNv6hQXRJist",
  "key40": "7j68AvhRcSwcdnSCAgBSYMPWnHKjVyuhDyBHrjtkXnL48vKmiEpoamFGbUFMarFBWxGtG2ag4hd5BPdEzZVWKVY",
  "key41": "4cZ5ymKQvLSLxRpuXgm9zSGRjxFNWoZhYyPJMBbPNhusVxXh9ZEmDEYXdNAjtztSKdoYxXepbjaBZJPJSkegBUPm",
  "key42": "5YhSqtyxSTvxiRQ1kfACjtMR3jitPQJmxmgwWu9ETpd2LGyi9vwWcamAT8FugWrgh8isUE32wgBMvtx2U6jkJ36F",
  "key43": "3TfFA6caYe9o4Z1wJwL4LcRAtSRwgbGSjudhDs8FKj3U7MmHX54Uw4QDxYgsZqrVBmnnTeutaBuJvGuxg3tM6bxA",
  "key44": "3WxovJ5DNDVVWypFdbqNk99bH9uvfFDMo3iyRAQvHUzyunWmf4w2BMUALMozj6TYkfcosRdGDDUNdFYqWyjw61kU",
  "key45": "3qdpRxCZrgFFWtJRyCZi4fiJWAVuzaJTPzHj64jK2YYmrFqku2M6x2zWkut5n1zmHA4o5XHhvnJPELedKGPEBntX",
  "key46": "vb4Q465P1g6kdE4Bbr8GLH78au1wCRxFX44g8GDUUY4RTSWY7cmBEkDRSPBxdPPrrFYhHyjnpPKx7Uy1hcRQ9P6",
  "key47": "4KzgGREJHoDu2PNzQ5dqz2s7nCTeuU4xn5LqjFfuVuKMjVuBT2fKStipvGY1Gx6xdECKvsnZn6ALvUtcmWtgYrGA"
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
