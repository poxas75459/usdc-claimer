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
    "5VvRS8z4Mpa9igFCuNnXp3HytiMYHiKvHw5ySt6UDL4psdUkdsdewNp6AxGaazias3Cmn6pJBSGXXvWL2vztgZuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMcvW1s6sn6ec6SQavH5H2hSAW9chEXfPkYuFFkYz1dySJqmkRPawxYaibA1vAWrhkRHopX2sUFUn25GovJtdJ6",
  "key1": "4AKmJUUL9P8L2jEvztz7rxtVzNp8hgJMXMfJWVs6NB6HQ8pQRder8HL2Xz6HVtuordb2EVyY7JzhxyrCuVgLbo9E",
  "key2": "5HusbU4JNuJ6Kob165f9gsaA2No2bnNehqNMJqXLrg9BbLC9vBCJiXHKttkvacocnNWkHPASsb8ARTk7MVXAekbR",
  "key3": "3x9uHJWrG2Cv2jnWaZVPw3WCzh9NAicqQWw1f9vDtFsDE6BXpQ8DTpmPd24D3nLquxeNKSCB37tDq5ha8aFbFVeg",
  "key4": "5LfGwL9Xt2htLQyuVZrnimAVWTRSKDgQyvxAs67YF6CcYUwq2KZXjppGvCCKUJYcGPoU7Gq4KwxuqFZWW4FjL24w",
  "key5": "2PgzHpMApwVzvsTNQcNawN7T7njH5PHmVcKUB8moBn2GNxdxMbs9rvgnUMKHeQX9LizVwY8qVgLheiEMKxeoKpYN",
  "key6": "5izag5ozrSmfy83NTpYtDUSeS3j6H4J8s35a6yVppVJaVQUSCVYBWftviRpAPU9vyKjNCfcaR9PEDvk4Dt7wv94n",
  "key7": "CopihbPGopvzVJZeABiiP4d9CiBxwWn2rxVtqg8fMsTEvZTiAX3EzN7VBSwtWBcSrj13NZHjdzdT8hrbkUyntrR",
  "key8": "36RDKCXVkLiN2pi8fAPYxA6byuwvE9t6xvkcKqJE7Tt3zpj5WsWNpeFeBzicrjuxzRJGLmGgGx6UiERKnP35ysDG",
  "key9": "5rnn9bTJ31KCkNfd5BAvp5gXawB4nWddBxUJtPfqHBwdjRrVMBwYpRyzQ2LqwMJpFzGUtuaLKzRNApGcRyhzazZr",
  "key10": "5gxVHj8PpoYgWRdzKq8VJhycEMxRBixwtBRH8WyB7mpFNP89cXs9JbGY1hQZYpAfZa6uRXpsnpAg5R33wVf4eQ3D",
  "key11": "MGHXuHrkQqHKj6114sweCBcG9Z4qP5WEJohdat9czUx1P74SPFnpjHdX1p2T3QJnfWSSTHS7wb1R4ucW3VhS4HN",
  "key12": "4VE2Z6vPiZdMGkXS5j8kPgTCipLUUEkRoQGjGHupS44EbB7Q49sxDGndzuP9WTWm46b5KauRobmYtTkGkd5y3hEC",
  "key13": "2KGGsoLjaGAjK3xsufYdotazYEfP7Tq2wknVEQqPqv7He9UPHG4Dz4z5eCMcrHs4mg6rAft8bR5mtKUb9ZEPYVo5",
  "key14": "qacUgjebCMYWPVHV6s5KQrGn16k1vKQZgXmhUQyWyvmRs2FjkZCszqcntSaXckMX6TGDt3haNCcumsJancsTFGk",
  "key15": "QErsR1m3nZS4cqBN2qP4dKsbMYi24LuZUZrT1rnu63aBh1RL7McBoWxM2zbjxrMw6wwcUcKrkGdbZkXi7JYRVuq",
  "key16": "4twHTog1h9uF6skQ9iFDU1HAja4J8rB1Q5LCRJLUGsjaNK4qfWkVpaa57TUP7xmBA7HThSViWTd15pmSpnCh7XKW",
  "key17": "iLifsvXpfaBRNsy4bj412EsyypcQguYscgbWo6en1BkAk4aWrnjZbusMfGvS5hAPhX64S6Xqjto4cdnaXx3NKC4",
  "key18": "5HKUvk5A2CfFceHy5hkh43Qzuyx96D4bLgC7uyX3ShEyXCUzZArJ3rKzXfUGjhbQMG3tB4FYqfRwHJVEa88oiWLz",
  "key19": "3Nta6T7qpf8qTqqX2uBc71uGLDL6jkMoHC6fjBodfpxELGULuoL8eVxf85HUDBafEAdBcBp9o6BUmdz8mHfJ4gJq",
  "key20": "5wxeBMnmDeutbjqtZ4WEqwTfp9q3uGaVHVrC8e8DbDviFdrxTEbp92rifFr7Bk44CoG4Thb8YooDqU8mcwHYxFxh",
  "key21": "3utQJkBpuFhCFwCFJr6XdbH5wkyR2XJobsdjVpvH28dYCq1hyxQDsvRdWeRLcZ7YK41HLEXLKaBr6ba3Kc1MAi86",
  "key22": "41JeDLTKdhJYfoBiNCacvQ9qLLUuLy5FeQSTxXicUDTokRtfCayBHTXMSi7iKzXSsxRVd7c9sFeuqoDgDmQBDprR",
  "key23": "jMKpzUdLL828Y2j2XQTjwhRpYuJwQA92kbPrRhFZ7SB9tsyp9FiyiZScRjrE5u4KpWLowBhfdjdNm21X5kgcXE8",
  "key24": "8AS4YTzJSMPhfRgMzbotZvfvATCNN8ZuVhabjipoWJWFRU8oZLgvJr5gsncHDQaeu2S15gjSLFZ2kvkHzJX3qxd",
  "key25": "piDcPt5CNw7CdYWuigYwcmMnKXaKAuFhNn1qkV11d2v2WLTbFLJPN85LChcMUE79bgtWYyEkqAvpSAt1cVyUWmB",
  "key26": "3bpUZ1QZkZRBHvUWAE9kZHXgaZdFwqQLFcAwCq7aYJjPNHCtBrsxicFTyukxpdkvwRBgMqz6P9EQee5knUDC2wve",
  "key27": "5tXqUqbWux1n622JQNsDumDsvgpME5Am9Y3nbxp1JmSR7s6WL3Ee72kGJBZJYLnWFCAzihD1gnpN1bNeQYrY8JHx",
  "key28": "4smF5KFrKEcpyPYaG1AJvkK1dsin2i7ecUr4jj9aao742Xnj2pZurKE6nAjYsbEdWbQkzevdAoRthrGRM5q2RJSi",
  "key29": "4KpcSBSDxadFDmf7Fg4ogCEvv2gca3N8Zk1vpnJQJo5qYPsvUnHm49uxePCFbPSufwLqst931bfFaLsDJMABoBWv",
  "key30": "5X579ozYzYYWF8You5DdrLufbSKAecs1XWDhB8g2tzCRTRPDm9VKxsk1tgBY4Xdj7bVwm51rXm7NAmAiEY5TY84t",
  "key31": "53QYozZz4iQWcNVxf3nb3vBzyFQiC9ysEodRynQwaSr66j2ZjA5uEpptrzkvGLo4PwubBHWR9fKdvtQA2UtgBqBd",
  "key32": "2dNcwrisAiT5D5Wp8hFxxYyR6kRzBdmwKjTG8cAQtUTsacnpWer5D6k2iU98Yw7CSzQyi44H4pzATYqiug7dh83P",
  "key33": "4QjbnH2yB6TxGFa6q1XGeSHdoE1kVStMoaPhPhTm9JWvJdinmTQxsuPZ7D4xgrr1jv6e1dM8LWRdrvuuzyn2ZXsR",
  "key34": "4QVfMVLhKghzy67Chhkm59YvajVhnZtNsQQPN2rsy5XgNKDzTt7zZR5jJfTHZ7NQHvcBYgtha5M6YFotiwoANJDM",
  "key35": "3oZ4pjEefjTNtv5BaJhS6c63PnDGTopJn9T5QXnKb3TNiqvJdYs3M9cz4noAN9mgn7NDUZpvQZ3E1368SR1NdQwx",
  "key36": "54S6GsHDb9ZBFxPoEibxYTT45uiwfVjEd3W5oxJrnwbd7jwiwQ7PQpWS9G11dRhDERfkG67cHz66CFuWn2SvKBr2",
  "key37": "673MB3AoG3bbWR8PEUHWHjFm82bto39ttsxN9adAXKwnx42CpqQk6wVqREKexoxbJVvCujWbcESD2pDLo9yEWRfw",
  "key38": "2WzH9mYRLpHDjpjqrxMYtqQHk4LVgZAFcwBCkv88bKRc5WVbMt2wsowJ9ntSUNRDqyhQApNRLdXErJi3aHnzWry",
  "key39": "2oHSeT41iHZhNFehzxAup4jT6ab5Wz8pHzrJDM8sGLb2W1CLrLodQsLB88gh3ugevH4Hn6TUhULCb2FimPXEqWGS",
  "key40": "48PrNDxxyaxt7qcceqbGLNmdDTWGYwvPKoL14omqNSdE43Z8JcFcwZAW5g8NbzpP8VKYLyJPUz7s4yU5JeNU2cYB",
  "key41": "YsDGdxFBgJTYrW24fnxmBpB3KHJvJvuJzoXHkwUHSKU6RKL9TQ9AWW6yDEKBAjWQknZJpE9on6u3wPCKw5MhNWi",
  "key42": "2zsiFSojAw9QXjFaD2URVk2mwpW9aUD82Byhkud8LEU3t9SACW6Sbi6Q1RFjTYsjy1aGjXueLsWDnvMT2p7LhZAL",
  "key43": "4qCSzCn9iHGSvhMcWYdxNn4bcFSyrvqdihTeBMyouQmTs7GgCnipmynAGmEqhwz8VvwHxxWyZhL7rBQqt79fTEMb",
  "key44": "2HZCEi8J6JYWzKYUtUQWEi4b5NHT2fkHMuccRmVksh9s4LhNEmPgwh9ScnrPgKQJMGG8qp3QnzTn8FbghLxEU1fG",
  "key45": "2vbXvDmSQjn4wYpGjpXHwSYh2Lz3b2VKscCQHg3e7Rdq9V3e4KTAVpTTn6B7a9VE9GkGLehfNaNw7gAKpTdJBAq8",
  "key46": "2Ws24bSh62ZrW3Md1v5jkEZF4hBybozxHXU5qiQrFPXUvFqLmtxbNUPQo1MWFEf6kKBwyJTNUfvQAJbS1mbXUe9r",
  "key47": "36oMNKzCR2g2JC9nqR6N7kAFsAwLBjYtwdYE1nG5Kod1LgR2GLMmLxS6NkW9LnPMsTGQtDe1VucDFSNjZ7mUu56N"
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
