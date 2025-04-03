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
    "2cSWvrxYAroA7v7bXH7oHvUPfyQFky3ytg5F3j9ypqxvjCb1WNWSKxdNrweXN1HVKVzVNHBwXT44Rt5komUo4Lby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tXMNy2ssyLaSZvNh11v5eAzFHfGE621GmqVLE9dVkPDMrZyxW53Gt48k8ST9Mrta29YMzpC9LeVSVEGM8V6TMko",
  "key1": "2SxjVk8ENZ6QKzPvwTbXeREWH4qg8i6swNKCkUptdMhsRF4RmVzM4e1sTdNs5NEAMcMsRuWkYUkG9aEz3QVXyN82",
  "key2": "2MPVovEDDQNk4TXvziPLWa2NdUG49TLxFs7cfXNq5wo4FiybbMww1s4HWvtKPq16cjBAvKEpgmqQzfvx5mmF72VC",
  "key3": "5qemrztzv3GxoSERzahdNNqSMNFwFnTYMmBdhWs2yBYMa3aCmpKWMXAzzUKBiXb6HVM2S8AKDxm6PvhM62rY5rDu",
  "key4": "Ym5K8UZYMRt8Ek4TtVtJZABH2jHfV5cb9WLKnCPJAfZAVoCVmGq2DSedbCn2HQ2QqXrxGeyqnCyDEsfVbzViSr4",
  "key5": "5tf7k64eSYj1eyxH4figwkvWzTTDCSX1T7pcKh7NfKxAhCRXMACNyH3fpSLE8zYaz13QtmxqmGWLUJr6ggAKJub8",
  "key6": "ooJFxiCGuJ2PBxMexXtUADDV9Txe8JfFgsEHeoToJRiJQM7mKkgz99S9r45Nhst4VbPaFTJwjN4D34e9EsDW5zd",
  "key7": "3psMAFjJkB25G5Jc8cX5sZDaKgzSRjozSW44JHQWygaKNKbAg2RFyUKTDZYYriwYtK2GA6pAieSBESDJ82DDD4Th",
  "key8": "475C5wMrLaMFw9TG7qbhrrNJxCSEbUGUU7PqYNNkvF7iTH1XPhZzrpwtqgyNACdLyBhMnrfZKgUf8hhCfXUBL6QZ",
  "key9": "2K9FqnH798kyCsoq1xhQ6HW9NjeqpJifUUWe63RcgGD4TMD9ezirqLtYyt8M9GNJAXZ2WhgjSVqAhG9TVMAiAsqd",
  "key10": "eChvgZbdcJ4YdvB14KBh3qs4z6VWTiiRi95ohbrv6TXLkJqbUm9wH8gwq7ENANdSEm76tb5187XJRvGtgwZ2Vtn",
  "key11": "3pfT1qm5MJozxJFvZPxyffd6ZZK81CeuFWTq1kuuQdWkWntBQNHk8yHTvG5gXMBcY6jQyERMp4PqLCwfbmMegx6H",
  "key12": "2QezALjy3tfeJDiYxs2QdctfB5NB9XsxNPYPmiQZpgE3GMskiPXJdKfxgfvYsj7ucLsA58fXfp96BZzbx9yvb8W4",
  "key13": "3Ket1TFJaQD5x7K59AJxAmN7oEjwr6uA29Z6oufnpBCeZJ539ViqW9B1nSmWNTGtVvGhefvzebthhLasyZKuz8nr",
  "key14": "3sfzNoJx1xit3MxkvMWK4ocr6UN8TCTpQyFPJh4frSckiyVZfCMSMgreNfxDLm74CFCq4dPUABh2GtWKvJyxjjiv",
  "key15": "2CtsrCwPCGpMRQQanrppGCEHd3pudZWEv6Qif6kVqUqoJx7BdT4tWgnkM1F9eJ9Dr4YhwZ5T5izKwgGLZBpiRXS",
  "key16": "4WNehK26xvNqyRuC9gtUTrE89jJUwapJ4UKhckUvrj6fChxEex3NEUYJwQrWuLmD4N5GTiYqLsEYyviHGFNGZgdh",
  "key17": "2J7kt64PkyFTQXTbXyco6HEJjLxroXDh89rp8qEXJXwqLeC3eembuZeUpMTW4tydqNNcUEXoVZQYKsHFUELXPydB",
  "key18": "5a578GBaCpC7Aj5yUeHRp4UnUR1rRm8jKvP2nK6idV8Pfr1qYb7spqpTAq2f5F95rpXAW6hSGmg6pSsAB43Z2dH9",
  "key19": "3jHSGvsmqvS7DvhnGMYq4h8yiMunwcbct2p32Vv4nFaNdAjv6Y2vXRii3fNggk1zp3VMXmsmPzTGEBEbMXHvpbb9",
  "key20": "2mkMRhCgiy8rz7G8fmuFMVd3uS63tbjWkvNcVf8X9qvFpPCZdDyN3KybMtxta4SEvY11BJkdBqT114cjpxsjNXDs",
  "key21": "4ddnsXvppTzZSS9zhKVBQoM1ErYjaTS3K3MNnBamRgFoc97BGvKcKgKpEWF2wW1JRsxgEYNJVhvXnroEpipnaaTb",
  "key22": "b2QZBVx5uotEaxJ3BZaEV4wexbhedyw8Z1eKGem622vhiryVhKuFD4n9z4TnuTZqhBbJNbzev9ZE4HNAMrsz2Uv",
  "key23": "UteaqeHgEMwTpHPVQLCVtxiZnB5SkaXXgNtgkJpZ37rUF5E81KUFNW5LebiQabVKpYbihgU5y7foUAnQ3VHJq5k",
  "key24": "3rSzbCVtiVPcyevYP7ykVTgEphqCQkJQaJ4dftnGwjPSWQDXigpLNrTUazrikTcrhBoJWWR4TwrmWUuERkuSBA1u",
  "key25": "5vXLtG8AnLXRTYvcVA8mredU7AVKHA2MhcW1mjZ91Rcu64GgjKTryTekAMD5ANrkEwwyRtck6Xn3RwQ776PvYQRp",
  "key26": "FQFf86GVTrCr3u9rDe1TcV7rqgWEepUBV8PpXxkDbctFMb929phVMuBLdLPzCd8PobFrPhmMwZeBZ9hoh2kAzTq",
  "key27": "3rJP5mFokkM1gnNFsuzo3ZRiKUQBqKQoLw3MpHsQQHBtqVTte7BEEdPsDacdDwcztXjLwYE6wWgG4KYg7t1s821R",
  "key28": "5L2hTw61i61wR5Gjxp66EPkJFakNtysp4E7XjkDUudR9DTMuzBnX8XEEqW37qx2ckj375KvySamsKzJxi39zxhR6",
  "key29": "29wyDYNPGNA1mqEkgHu6suTY7cgriweq5Z7piAQfTkz3u1eyqiAchUXmyDMnFAZv7Wyduxu9YWVUdXDj2GqNAcUX",
  "key30": "4nc543Zg9EzRea4bamkhQCaX3AdPNBv6fHh5DGhE2tMtZPxhtHRL64ohjMS8hcgg4kj43zFPoMHfcu59GbPY48kb",
  "key31": "4D1AzFisXanVFGS7xDyPciFrYZTdKoyhaCmyCrdBczR37ikt4vFDiak7UTj2baZ4FiQPxP54ijp1aXQNPUKBw2z6",
  "key32": "v22k1TVysNoWQmd8a7gYMCNLwidNoCdUBTAePiDJEmbMNA7JRvYUiv7dJwFEYCydiyYRqrpWRLbv57YSEgd2EEd",
  "key33": "3rfLyNNDFMyVjgEY3usXjxKddoVxDteakJzACeqoRNu4WwWqe2Ra2jDd69PNH8emnPqf2s9YaUWrwRyn6puNp899",
  "key34": "yim18xLYdDAKmYJcwNygrkGauBBmYonazefVLmL2rqAZj41jYsvpdUh9zE5FcdvjNs8VJeGb7DrbWJNxMPCyw2v",
  "key35": "121LvqC6kyyHuXiLxcKpCdGpmzR8cQTJvnVqJHV4mwPykc1z17J3uJfhor3gUcMLhyG5MQ77pyBDRAJvwAf1tPeL",
  "key36": "5ydAZ6jrN3T6L4Lrk3JCefnsSSY71v43h8rG6sCWszq84yZTrkiiu3H8qUcmVHysVRcg2bPG6XqYBuCbPDruQ4xv",
  "key37": "4PL7Urgj2uZ3EFULHFdmaTmiN91DT7svvmtHguffpkFHFZxBSwikHrdufxmq4jaV5e55MJ9VMSv2cLiPE1JB3Kvr",
  "key38": "3AyPhxGuSBEJQSpzLt39z3vJxTgXZP4FBpAM6HaD4HU8avBzWbXvvJ5aFcZ4cNxE3fDpssLCgG6REr5p9pS1XCvc",
  "key39": "3BL9y4AckTRpwmb5CQWKTNPbLby7heRNHXMKJjTuTnYov4EMdiqZiVgrC266ktpCv1EDExtyW53WybsCgbuqRqiq",
  "key40": "3He2vNUGMLTGPxvUr5RmgjiKNmAwYpjJnVBDkuiHpuUZCRxSxPNmtn8c8UhaCGYnntxMrVYVdvFjc9WVC2d4JL8K",
  "key41": "46Nkp27jYfHLsT9jscZxdX5kjHy5uu9SYW341i6KdyE45Uc6eiMWHQKqYWjA3316sNuyU2NXHpwqjyvkyv5RJRsP",
  "key42": "3Mo8dQneZfZtgTwACtTfy2y463TdkzZcXGFWMPjSGEkfy7MPNQ2UQkSLeunZnuLLm7jnArBTLUcJopaRHXC6QKnQ",
  "key43": "5fmwXQxqz1N2qbw7V2K4HZSiTo51t4gKw4juD2JmV2DhUDj6LVUfRmrspG6wq9XbWMiVXdzFQ2uaXwbcjv3bFy1G",
  "key44": "3GUMbH2P4677jZV7iQbCRqxk7JYRJsQ26M9mvpTuXARgJPDVkPGqQmucUdFDTbgmWJNrFZWU7b6ioK8QRQM9hPpi",
  "key45": "3xWfVJbwVQaoEpL4wAPtDujxMFKsZNrtLpDFwLar2bJFstCeRVxqFVUAo3o8PkrT5DjmiwdYTn1o6HoBJUmhTqjq",
  "key46": "2wvQ7RtiKK2uP8rkdy3rWH2rtzuiPXUBdt9TsTFjcCAnufHrmav77YrvyZtJ3QabVeXJGoU96Rginwe3RxA1ikn7",
  "key47": "4k4gZg7tEWNQod3y1yggMHG9bSdzzQsJN5Dp1v9fPdYviUg1oTJvDA8jCVUjD9QwnXd4noF7ETYad2NdLWrbKvEW"
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
