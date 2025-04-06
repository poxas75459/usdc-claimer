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
    "5rfe7xMjwFuF9ygYgmMY17j26QB5mHsY1c8svm5hFdm34p1gwy8nFUyLtghdd24KNcvQo8CdpMHeP5KTeofTKk3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMbEcqZdBnvGe3vkve1F1WTvHhDkcQru8YASYkEToVBw16pfGcFERwjk73f26mtrgDWdMS6G6pecZKKN8qHZiCs",
  "key1": "4776KqPo7XvPYuMXELDsVtshap9zBaxrVUjNTTorJvzrx6zgE8jqME6ok2DyrC4LWQTJKgApTVaGH3743RNEfMTX",
  "key2": "5b6fapxW8ngqEqnE5SH5mqkRbuFnvgC1bLWVohW4kZDXmXx3Vp2KLnBgNsBvpR1629b2oG5ixH1yVC5w9KGXxbPc",
  "key3": "3R9JQ5tQrLXkYtcV2MyzQgSX8XFBKvddD4mZjX6UyPT5zRcq7Rjqacs99FZeedyRmDSXzJc83yX8jGvpXkrbyC7z",
  "key4": "21Js57aiZvfNknAjCPQmbhjyDAj2gJCQuR82rY62z5bxjvAGQLa1E8dSD2PQAm1jhqPVP7LToEmyPPxJuujumwTY",
  "key5": "2M2ovfJom4f4pVyKt9EDWoRNu5Bf5mfFEGBsWRhot1SqH1KSpSZzZdYhY1k85Dusop94aoDah4hdwsfsBBVUqPmo",
  "key6": "5dfojVFzZqtXhhKt6Whm1bM1jTvGP1pmGCiQZPPyHmJd7uR8CD2YWTDSzAcqSff1EVoB9bC3snRaLNXvNmqcUr6s",
  "key7": "2LJxDMKqyGfk8YL3qDwn4wgNYa7EtPAoWZgXEpXqwsY9FJxpXcWF9iyN8U5s4gLtb9NVcrr3zFoNR2h4thtUgVHC",
  "key8": "54Mgpw4Rkx8DDWao1YhccbYkyWGSBQFHjNp1u6fxhCYbZK8Mg1oUKzTmGaT5uTP9H9e9pwrhPKyNxSuZnaPAxotA",
  "key9": "4CcsQaqixaXsh2pFUB7kW34WnV579dwz7pwmYuneM1vYPEDoq5k7Nw2Ksh43AJBvUDzcXK6sodFaFmsE5PmBnEok",
  "key10": "Yi7tmWjWeSW35JqzV71u8xBeDSgnvegSVX86YUTyg1Zsc89RjVc7w4FWDWUtfQNJUWqz4yvKHdiW3ouXTq5MzNa",
  "key11": "46wpMhqE5VTLyK8oo5uaG9ntpjzmn6Z7rXdHnPd9HQ2vQ2ierQh51JzKeBDjQc8kzoWKT3NPA9Z5KHy3FTCPQ4Cw",
  "key12": "3Ri2VwqskAt8pVYsr5Gm28JNmPtmd89x3x9v1yf9sXKJk9QA8XBRUZKCx9MBVuMSY7412Q4oMauh8xUGUtbJCC27",
  "key13": "2Z7Epxc7haaJ7X2CftmsLJCEyFtvHVuomJ1SACwX94MFg6kUKmfBeSMThTZMQJ5NVaBvXi1VSkJaLetXTKptKwLL",
  "key14": "6caphTuoB5kZfBVX4bPfvz1jh37t9kaqC1R6U2o9obXxs4erULYXszoMdcWD52t43b9k3KDh1WoEfmRgpHAWtQB",
  "key15": "13sdNfEy5qVZsrjW5X8hTM7j7ZibxTMjk6wTEi3kP1doZNKewKwAueYuw1Lteizqf7H9EUZVCYusF1C323YEnim",
  "key16": "5EsbVY5xFoYEbnxcmUMacLbms8AMt9QWHnaVxtxVrTHkbpTbmdAsJGVo4Rkz4sJAU95ysY25zpS8sor4JTsVR9e7",
  "key17": "3pYMBh6FuQ4F54DcDcfQVNZaGC8niC4Yrrz4rdhW4b8EZNTPmSvpxtFSnQH4saFyUXrYwRJoiBtEpfCZepjuWUJx",
  "key18": "4cbP3baMtuC9ijug8UV4PH1uZpA5HVrT1wKaRSQQ51Wxens3QTgsdV3RmKqq5fSHDLPZqoGGPvpSxiLSZSGqEgwc",
  "key19": "4koPDAtfcg77UZdbA2XiimWJQMApTqD67rs2DELjxs9TArFexrfeyVTpxwxS3wy4tMFbVG4gSkeqgVaFJgywJfqr",
  "key20": "5KLZ5R4wMBENHMCAdWZh2QuS2CQ855KNrZoz5aLrexY2HoPqd8ZdMpy9Rsrjq7WiPshxR9jU5Nxft3CA9q7XPkin",
  "key21": "3eDqSgPgSsma5DeJ93C1dLqiqCjhPxtWEY5BExPTEHqiQqCZPmDce2bh8jz1B73fo6xTjjiLZVZg5agvaa81uSoR",
  "key22": "kJFVjRZzm5YBoHE6BNoRT9sjedEnrDK5kRs4wFaWDoYbykepSYDZTgCBNFr3eH688uWFCeZCLNztMnq3weNxYkK",
  "key23": "4K9DaNn8GQXie9dmQwcUHenqVmeCoP2WTjUz25o2npKmxMQ4KZkqm9Wk22beGvG9QDNjwRUMZeP4FSnnRnn8Uaig",
  "key24": "hrjkZ33sXro7vXnCRgxyz3DetYAmuNw63Tr8EL3sjtRSeFkwP82nTwDoUPUbNUATQ6LhSRokwPKwGeftnDq5Kjf",
  "key25": "2ek1ckaLzuNBpTRdKHDzinNcjLuTwE1PBBAhArE8Sana2YGoVenFfdV3U71GeNKEVuddXVhLSyK9nabM4cJ1S7zV",
  "key26": "ZoPuuyHCCrABmq9GNr8BtPY7WBski2zDMbmkPDAQQrwELHDgrD8cyzMKjDyaFftgz5urvyQB6p2qxWdroXKQYv3",
  "key27": "3HspzAxxpAu3DguN5zfkF1vSNEuz1wTaVyApRLmkkmHk8JNisz5QcrGK8L1KcDbkUb8Vtbth9kHmTy7DQD8UiSZ2",
  "key28": "22XijMan92tieUgZYBCa7QCvMLZuVccFoHeuwQ7W6um55CrocLx7KVDhemeq9c1pupL5jodv2cRLJYBtgKTSvW2A",
  "key29": "341guRt5Anbna8Tc5K2eTb37gwRC2Bg3wWeXGypAR4tmFvCSMYaz2D4rqnrJUPzsN7aWPiPxTrZZ6uWDimFMa4eQ",
  "key30": "3mTdnBEA9gyZf8CD96K1SQHGwc9hvcg9u5cCoQjNYhje7TUAAMWX1Q8TEx6d5qnC8F8dXNaPrzto4VR7hsCVGpKL",
  "key31": "3kgXB2c5F8czRirdz6HR6xThDE51r17kdSR3mA6LijkyitrGxSDW8NXkPFpoA1kjy6YScWiJpHHgVh8HCAYLGD5c",
  "key32": "25bjr5iPLxVDxT3bLKr2tVuSWfLc1KZyd8hHP56XtEtsDSeKSe81vaX1YU9dpSPPLsKx4AMyvnpWKjnULT2YWx7u",
  "key33": "2C4DwNFyNVoG8aWBQWjXDfq8wTs3omGsm3XbtKj7BszDNrnNGzrn29aNob9kFMtcUsdv3VEmqgxsfCUwvQVX87su",
  "key34": "4NyCVNQvZ81buG4bXEgBrZPwk2ydbuvWPZ6zfhffjRC6wKBKYDCQcDcZztPcPyUAMJ5eu8Km63GRGMqCUDSs69US",
  "key35": "4daVbA58uvuLFYRLwqHZEoYobW5Uu1yYoM53FM3NYnd7PQG6TGCc9eEZgnGWiw7kmVjRgZ98pjPjRqcVYhLvCY2F",
  "key36": "NA7Fpei5EC1AienZ4E54LECKT6iVuNgCzceL3PSLthWX3FYiv19KkfNpaUhiBfqNLFCcJEiVupuFBA8UNk5qS9n",
  "key37": "3uDjtApNvpPm9JqM9g4uGBUz53S3Ygy9EH4dAx4KGDAJYBdG7K58iooM4fUWqqJWoDne7Yb11Uot5tzigAafgDcv",
  "key38": "Ss1Wu4ApcDRDd2ao4knFU1kPyVnezB8QQuyrgaYe8jSzqBd51XpdHvAnW66z9KWepvbauzExPUHTBNARgkkuV9C",
  "key39": "4ZDFa9bkx8GQNDPWt3vqcpJKRJ3FSHjiZpKxaA2zWJGTZiWQijz4mETQS7NdRzPNxvTtAseC4eRMjZ5352Zvq4JZ",
  "key40": "QyamL29RqbT56U8gs9CjDBBdctRgN4QCW6NaB5jkyZCqEa28jFfL82rs2wT65Gzfk2P8JSyi7mB3acULy6Nxi62",
  "key41": "3nEHeGkWTTHXooKH9KpVGvxWRHivZaHDFm3HNNV7vPrjWyKZ1wSwKFW2k8GnbYKLnV87TBfLDoCxYc6wTh6D6d8V"
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
