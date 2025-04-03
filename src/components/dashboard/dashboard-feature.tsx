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
    "v6ZR2zDYy7WT5HcfeE7PKo84XA1rLJ5UDi5W5tYNmJh7pvuoD4Cw5JYmXrnSAEKEMWjDVKyJyfKTDK32jgesMns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YVhVx34ESSGf1EHjuUa8VrPm6nYAxokQSNL5vtyJwEvw5tWa5GC4cdowpcFMjU3UBHq2B3BrYHST9uY964VCdvg",
  "key1": "j5caZQKMtQgAfL2JMaH5rC26caE6pSbeCjACs8JtpuWQtkk88ebe4FsBw8tChE12HtN7kX9WDPW7WCmesb7oUdp",
  "key2": "3q4kozCo4yCfuzUBkxnS9ikK8Qc3ae3Kx4MQ8C3A8mANTsGKJ5wcVraZKxCzJKpFokQGFkiuUw34ypucJhTonVgT",
  "key3": "5kYp6omtn8wFHAqiGXbrsKBm5McTzHS5NjiR32AXQHiQ5jd1KzBDnsw4y1MBgvKDAUXt5Kjyrm95cDGdm1c5ckbG",
  "key4": "2PDq4j7fG4pD1E7CNUQWn7oADNcnUvhCFWoFR9Mg4zU6SQuCo21QnirGDUktg866csuuvBgGbWYjSgHhnniQWee7",
  "key5": "2HxBtm19CMAPRB9sVZu9J3ZTuuhN1QRVgi5jJfEFwdUnomW6jGHeSdQYS8RQ12UsnnnB5mjYjJDqmRsDYvKgb64U",
  "key6": "2K7h6oNVwLABww8nvPWDhYuLN85drUozAWtUxxj6bMTLnpYV4SiHiD3utxxLadr9hyz1mYgxXxQ87P6hvJg9exsk",
  "key7": "5ajipb6SPsJBBpsHP2z9GAiq6qQP3Ei9XRAYxLGT33exEqDFgS5enbuBbWpLcQ4itPH2P7RkEf3EKa5wzXvP6prw",
  "key8": "1Ke4Wxx8Xv66o9ZcT4vcho8PkW9ovHmFDcHS4gxSGtChxSv6AnXqf4LwxpzmrofRTBMLmbaQJjtaWFN35aM4ffG",
  "key9": "3CeW8QKwjqaceGxVJCwS6u1eYKEGtbZy9nvvFe7zzkr3NXgVYtjV8vVwHX8iDGL6Evgsk3ia5T3v8z5cs8xL2H5p",
  "key10": "2ALoZQDV1uuc9eoaPANGnhoCprFcrU8CwehDsfhnWSwnb26RciD1aBqGAr9ez17BFvdoJvkUK7kSkakjWYGrAFFX",
  "key11": "3r3wGTQMDrtgZhdx8MnSYT2MUje61C2PNeqKmWcVmjhnSAGNnfc2q3B6w8mtCsgywbF4aeHtSvQ3t47VSaENWqf",
  "key12": "5aYrU1VQTvf5UVPYAsTtVoGqBMh9j7hfJpoBHw65DM8VbQn9Krdp6FbiiMgHKLpL1Si7sgFRZ63mQQxA1EWJABS6",
  "key13": "4hqvBDBpeufKqr1m7wJBu6bBAjyDSZXnpAdX7fDM7tsMZfggHKLZQdtHni6scMgKWTHMNVDU5stnN3aM98wavLyW",
  "key14": "649zaJDi6FZYr31aoY4AxJwo1agQ6fT6ZhbEKSZsqkYagGrR6iQoHNQXGAHkdPcU1c9f8WqtZ1wbhKBWxx6uauBA",
  "key15": "M9FvZf9haj82R6JanKNAoi1VpPCy3H4LuhWoP5GeBTBW7Hsxpu7nCLUZ5bbtHQZWRjwybhxjFeMxrsyMNvdU8jt",
  "key16": "4LbPfXkowoKs6bn5TrshDe5rAvh83TL3RpzH8TKJkj5BRa2iM1oN5TV1BvebP6DP1AGPqDhpTanm3ezT6UcByMhV",
  "key17": "3H2Cd1meYDBxfrG6Avxr4qRdyYxhz9oHtCV7FYxKrAGs3gm2z7Lo7wkmVAE3rF9WTgrbczq2xGuxD6iGpbUYM62q",
  "key18": "2sNEtG74WjmQC1TBgfVEvWTdLuPjaWBnqvreuELJ3cfzuXmYBbMgjKpxVKVe2Z7XT6ZvBBv3RKJcGoLxnuUkjAmc",
  "key19": "2RinEhzmiMqUp7zQLDhrh4f5eXR8t5wPbRhCaYCKXHF4fMm9TrnJvmtU3CxW96683hdgBp5WTKGUhdE35NDQ9q2t",
  "key20": "3PR2z3UNKh9RdiaLHQCq6inMVVBKsM5w5WeCEvKnVTmdqeE1URcgQGNZkDMPNggpSt2dCFp66S3vN81UXfVbomEM",
  "key21": "2NanuRuy8weYn6rJXEfNQKkFR1t6DGZshJfkhwDQDQgYs2E8a8Zsy7pVHMZYUqPjNjFWvS1iGYpyZEYn9ND7QFr2",
  "key22": "4FGgrk4tAPbhCVJebmpeouhU5Exqo5bX7P7pmgPzSSaN4A5dpQFp6xVqzTAupTRv9PBiRNcMguMFhC7vB5KeN1DG",
  "key23": "3nn6rw4qDj6qhYBfCTDfxSReB6dxwEV8gZubRNvTN9dUC52LCPfijQKXgLrwWjgnNyPn1c37EaEJz6z6kGddM4pw",
  "key24": "2PxCi34iUCgRF2fprsiSTSfxb3HNH1vE3gnkTXe6MWcYEiWykVuJYGBzW36jp4b95gmf5SJqkj3qr2SfxXvPJbQt",
  "key25": "Ry92YeLsdDf6MDjzWbim4UGQNu6yw6iiWr1DapXWHsLaLCByKTYgiUXP1ne3L11EJjWTdcbzj47wRDQZ2YoMrtJ",
  "key26": "3SgYqTwRiaFb8hRA33Q3Dz4TMy6VB6Dyzkde7XkERpsBSnKFLxM4fHw64H2XeEU8uShuR8ah9nLPEGMGtkEk87wV",
  "key27": "27gJbchpdHLrK1B92JdyiWAnWU3XBpEoYZUDPUiQe76e8C6roddSP3o1kxenTdR7AMjrbspyGMbYKEY2KZaivnVg",
  "key28": "n9kDawL8WEJao7TNNCvfdztJgCNkdPak8SD7NXcAbSL8P1ZW1Y8hV3p2Zg8cQz3iyWWowmPAt1XsJgGfLcvi3iV",
  "key29": "UzE9GwAYZHbtJ73DAhgqCwNnwLcB77pLEus8bj4NwkTLUsJphY5kFb5YuaXdQ1ax5v2H4eMTk7q8F6YPLvNiJTF",
  "key30": "2CZHEvCHVLc996c5q6Hm2euaNCyhVEYDMN1UcZyDw8MgdDbkNHZ1ELb4vjPdt2qKXwJdqaS2EJxqxrXvRXNg6mjs",
  "key31": "5v12YUNuznKnaT7ayQmHrgzzjmmwrc9wsGR4pxz7HQLxf9MxaYCv9SEkgySHnYRUxWnBepg9VAvs7PKQfuP9GRuS",
  "key32": "53K2H2gPdZrSpSUpQbZr5BR2scfLgddxCk81FJ1HtG1ezkAQ4nvjJLj3GSka173tiSydEHjYer7NuTVKnNafsmgk",
  "key33": "4S5iPn9aLrRRzMmNdRFLf7G5TVmJdozv2KsgFbQD89Tt9CwbHmExfvSgxZRVw5wGHr35UEaGBdMNY5et4Q2myPfR",
  "key34": "3B7LAemrnfrSFyRhqfPLAJXuMhaeGkRmonpasAfVNLBMDgeSPLL52P2DAP8qQCHegPDYjiyWpvUmxKpTN6a5nyor",
  "key35": "3LkCZ3TbpQ55NjKwTNEp3o5qjLrLqbcy36dLre7u7rPbnv1pJ2LWpyJLH8qcEPS2A8AmSGfuBs16mEbFoJfW8i5f",
  "key36": "3gdzkuo6BpPg8sc2k9mdJNRXVhD3eTEA3FKZREwPcMJfZS613xHKL3nPpUfuF8oun3TUZejyu3Doh6EnUyebVzAN",
  "key37": "5VjPd5LfXVoCJSsECtovAsUxnAEY8CSJRNxesnBDYXohcz2Pn4Lh92ZmzSBUe69wgRAv2aWxZwkd7qD2UXVrYTC2",
  "key38": "HCFyqGoepiGL8PvuydRfHkQKKP6Ytd4Zx1gsiBtH5Cxye28V4MD7VLXyrQ3EDJ9QjRXvJXTzEUDsrLymjzM8ha3",
  "key39": "3U4sAK3odA7Xuu9eZU3bjwpw2aL6wM6N9JXm5Yw8Bq35tM32LBsCTrgAjLuBmmMwWojt2hnuTLuDVZkg9RMwzeG8",
  "key40": "3QbrSaxrkX82BwcFw4Y7WRZJbmUQNYgvMxNcvot3iFkeBijt1hpjf3usdoF4xwk1iFdvkobndAZ7Ksf6tafWBPKK",
  "key41": "26QgjRwoozhV7KWbT2Q7g6uwVAnycX74qARmuvJ9AZhPCfQVV3kSNf4U2mLxtimRxkXevwfpBGKQTobk4QSW3d5z",
  "key42": "32aPbXjjHBx9cwaEyJFYBzjS99Fh7CNFhXccoXZ5JFy5jxBGUbEnucLVgjvgLNpSFiAA8UNFAUoBJduJgQjCYvND",
  "key43": "4WFjQzte2XZviiadznMwxgn2cMEt1KENjoZjrQu6pUrtFwGKmxPnyKMnou2pTq1yELAJjqCUg8ZEXCuJJhWs6Ko8",
  "key44": "vUzjoj11xUiFAHZ4wQLVfcgjXTiTRBXKCos7Xn7c5GbVyaKsnTw92nZpZgpgbGVjQgZbuLXVzAd9ma7ERNiniAc"
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
