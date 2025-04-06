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
    "2E4hnWw9sMf4PpSpEksDzferQcevSdrFqva8P7EMg1LAFKf68v7wrAXo9eaGgpwfDugxznbyeFRAucUnobp36aWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUhAVCmHHk7LCfTYZtjgQZ2uhGJX8WeZEcCWeNDXa2sW3J5GLroSxaLwR9XS1bPRHEbGoyktwfCK3YDPgXUNuDt",
  "key1": "W7psVMnVp6wLXU16FFAL4UAuNtBYGEp4Jd8ZMmwEh2sJrntGgbCNu3grN1TJQEQ1diFoChCfm4JRrP1SbpcEkab",
  "key2": "2rDENRQAPoZyYoUixRFCKrPMDSWC6hd9MUgE1j2Qxu7S6nEEnyo5vuwkvBAsaJBxQtYcxsnMTGsCoiakCv7bXCZK",
  "key3": "4WzzAXQ4AVSMeqdB1s5gZprfxgQStEPzgC5HX4TCffEvX2EFNgs5ycMbiM2gkb6XaFynr9bDtzoCxsWCAmhj8gee",
  "key4": "5SfD9iBMsEvQQNoZfvhR2ZafDQQAUe5PPcS2WA1qHA255wr1zFgXqbjgKJAsv6JwG2fCGjhu4xuT2xg8vvzJBFZM",
  "key5": "2n2cEYcUwKr2u5tNxPYuJh9TixMKRnd3KMSZpqUWtoLxeLk4KzTe9JZm9jCgQnDD7nsDcoCnsmSC17iW6jtgeR9Q",
  "key6": "Gm7Sq2keyxXM7qcnCYpAKrbAnyUhasEdLMNNrz6PmF35iJoJwDRQhoButEWc49Hf2StW2wKF7HU8FCzS1vkFZvM",
  "key7": "jdKFuCjcZJWhQMBK7ASGQnt3VXG4rzYcycwtrWSUXVPSXqarbC7cxHuV5y9WfycucHGyhD521y2RL3pZEzcXrcc",
  "key8": "g1DRqSRtKU7pEC2vYiEXAPQfquqGdkkz87wvWzNnFNr7pjBFQGSWEeWNS3XNvM48QaAFk5aVuMJXwPbKNJppv14",
  "key9": "3n6fKYcuoMAZC5JmCisa2dqwKDyQdtxqAopbB3f38LCBSswcabQ9gnPza74uDQUrRr49nvnSxvEvj9HFDepQwmmD",
  "key10": "65oKtrKqyXL5hfJFHTRsUzbM5fJfoudjB2h75gWhpgDJWFHtMw9qDjL3Kr7hTDJH1jq3J3bodX7cb7AUHYXkU45r",
  "key11": "43WDRqdaCfucCyV3RafQBUtVVys6ycKmDrp52STakPpb52awE4vYPhmJbwirQw84cF6TgpaiGM2FMk1zDfgRcGwc",
  "key12": "5UAaVNEfBct3G2fB3M3DMYh6dWTgvtg4fJ16GWEzH8bce7C7Zc7c6gk37cSaZYYFVZJKtwChRP6WFTmqRWGeKTes",
  "key13": "wQraSHVVjRGMv3hFK1RJaXVtTZVMmmKPMSRdxATioxRsgEHQPeJAf89UcVvkbZsjgvH6aJUykotQXvL7XhYxURd",
  "key14": "4micmFUKHPhCdeMBgnFqkB47NgXyNJthYdEejptRtGYMxEVf4jnBV5UbJM9im76YrvGEnUZq6iWu7tF8VCxjhCzH",
  "key15": "jSxpxiRyF4gQQDY2MZ97a6mEEVSpjWpQEErzZHxQp2KNW4syy6XuZv2aNEaLVwrmDvfJkwBxAct5Sp4tWNwXqmP",
  "key16": "5HjUUeQu3qokjxFQ7ZsLDVBf7H6ozsmJ82jCoy6JzZ579jt4qbTGmTntx2MtXBHNfopHyLvfbJ9iDzpry2VPt8kS",
  "key17": "2h8FXBrn8koxtWyFaZ5iArNBLP1wZHDM4XqEFFRufj5ZpxZGW4MZ5cszyPF5SxXM4U6c6GJrNgtkQwsLQ6AnF4vB",
  "key18": "41V8nkbgXT1Usy8TaH6i6V749qT1WHnMqgUzFfHPp2i4ymWrN52ZbH2azoV6Z9UjGAUeoPNjij6zRjyKrXykPAPF",
  "key19": "aBBfMEXN3kPnyU7J6tpgpgEhLCit2cs74xAgdUXdqbnHkkGnAUX36TVcdGh3SaBZ4pVmgdGrSkAMmcKKNd5nTq1",
  "key20": "2gUYUa2YJLFdNc4H8oibVDKJcqfrgzwWmwnxGQhZwBhFjsJUt2CYkMRxN33Y677587JKQ1EHB4TaS1F51e2qgsmb",
  "key21": "2cXWHQsLdEq6mGafkSx4HekHLcfb6ULNkGAPmZZfNjFtMNZLsPydtfFtgkRKPwPF1hUEoPW6zHMPZ5z52FvBNKHa",
  "key22": "4we4i2tC582KHP6mpf61bpQudbFNhJRsZWDYEHdHSSiSxoTTfN6x2CGDM3uQFas8fU5TzLWUw1wUQmZEfZgqm3Rj",
  "key23": "5bRrCLhNFfyno5Pxm8uhjW1v7ESTNH9VzceUSHhjKeZdwuF1FXYE2NBvi2cLF2cikZW4phg8CtikZTvUNhGEc25N",
  "key24": "43ccrBgXdY2wKehe33BxQjZ5WS66DGdti7RyKkiz7FRZQqsLL9hRgo71VvbaiRomfk3yuVkjiMjdo7G9nqu7icLz",
  "key25": "4VzBZJPvvHjy6ETzj79vqHaxkUaD1uM15N1UqX14WQUNYZzrAi44yGicQPECGB231RczsvJR9Rm3ePy2NcrMw5qE",
  "key26": "4MidjSfTW79KZmpuzLKyZ2CdFaYGrrRJ5GQ2SNs5bKCyq31HJBS5oMZPMArmiiP1KT3BT2XdHGCL6ZnEH8YNBPdH",
  "key27": "56nZxu9RnvpbbzwDsHRosJJyjxDDXuzA7ZYUPuTM74SpzuPxDqSHjmzztVzfsgoyFcVefRggrF83GszBCqQmMjiS",
  "key28": "5yHZ99D6zawqPEJUtmE7QBik2mnLgs1b2wn5CNtagF9CtGmG88a3MCZXcMP1kq6B9AYHxzJ3myG55yDpfg52AHaY",
  "key29": "2BZ2dRjSdSbdWhzQD4SDGr5TkrgXEW8TtbbYkkXYVxEc7o5u29KvASx6FMsx33x8NqzAR7c91WDiQEpVbUuzUNCJ",
  "key30": "2sxGkh2jAueTT7Lu4Yvw4XJRF3FeAdagN2YRKWs5z5bFWMh9mc5KsAgHcHmqJYNwsQzD9WTszfAh9QwCawM5unci",
  "key31": "5SLYhmb5BdpdWdoJE9dL91UhsC2prusPVzb9G5XPWPykuaDBFuGBcSLQrTLqgTZyxF5pRAHS34cp2swTDxsEAima",
  "key32": "3fBktGhKZMvFPRaEjssWfHBV4UJk7xYZ64oN2qbaLPDd54EbPG9L166XixA7TecMySwHtB3JUrRrJpF87ywhxcGE",
  "key33": "4gbRiug7oyyBrZq1mqx5fDZuTP5QkQ4TwcLtireXvGTZKLRegPw7U49n13Y46234KhA9s1qdDXn7R2JqJ9o5Ms4r",
  "key34": "eqo9YSRLcVqgSg239WhZ6HCyQL2hTDCiVz518SQ6CQJF9VPA7ud9LPgh9RBsShfsftQNSuE1d8cvUdA4Fp6YKyp",
  "key35": "2cbZNsQZZRfBb1QmqUuyAmDY2HcPcpMY4Vjp13GcyQRB3HqJUsNGFD52K4gAUExUizCYp67LMbSGKfLjq5yKATt4",
  "key36": "5WwP3Z42HHeuqn84BtMQNKqxPpoUZBWQBdmZ8Zu85Te1rdnkvswNfDAqyrqzKfEG3zJpGmuDZQHYtcremiFjPfQG",
  "key37": "FQtKc6Yg7oJwqU786nauzyKRrqVqBD3iLPELyP2Veys5ifMbCDgoNyBrJ1u3Vothh4AdQ7tZAZJHJYAzkHMAMp8",
  "key38": "3WLhzT21s62jVK4vyY3T8uDsyWxDbakMBPnQ3Aciig1rzn6rmVfRR4mVXzS9MadHgnsWt2zSCNC2P8NLb2T9DQhv",
  "key39": "4ifaXiKrPBGj2R4YULzak9C2BNFhQK4skt8p6xidWS5x7MyzBJy5aaByJSp9fL9HrwwnGnJgmbXJyTbBMUF5h89n"
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
