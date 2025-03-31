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
    "3Pqb7GtjxMAJJdmJ4FWLE5tJGMf8ReLu4SvLdpA1f9NbQ5VbMUk59mbHiKRsrrbyz5aDT9rv9No7y91aHgEs6wiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSxecuotTq37qthDpW9TP9hMb2ieptkLUWMx2ZCg6kqaojaPu7wuYqvANaSmAqd1kmkjSur4Ns9PZm4sEFVCNg3",
  "key1": "595UaEu5YE9h8hDfP3cmkrK7F4VKxTUaDCK7NCferpXfKVzZrF9NvnyNbppAKG9WHmLqv76m3RsbE9ut7FBwo9Wr",
  "key2": "mYntgBzK4KsGhDMhFMFPiMnfJNQTgVQzreHet3mModpL4UFMv1ruJ5iR5WuYjVmhvwPKDYKX5aLRuS59eVbuPDm",
  "key3": "5SPTpgcsSDYjquuUhiEyUF7URFryCrAuHRLVwktfDLKZRygHE3i1QtqpzAtC7c5YNGKEk6mtiKcH5MJ4VEYEmUdH",
  "key4": "4w6KuSLLfJ8w2DjhKzuSWgUemVapw5XKyv24fcdrjY8kLbacSDwx5GCMFH65i1fAnutxZH4RW72RwzpqHTouzohn",
  "key5": "5zKw97cLV4b4pko8FktLFrxh9Wge2RP84dCPUdfvDeKufSNbwPyAkd1AD3sqseG1EN9w2dm95eDw3GBRcbnnPrrb",
  "key6": "593n4yFg6UUp58MQt9CrKCt59Epr3EDYnsfkLBLh77EwJWwqpdteGcQrjxkkteZAdYSuH3EBkwHHDcjxSsfkrSz",
  "key7": "2QSoHn5HfURXFa2mXRfMyy5dzSdVca6Waccn1Pyn5dh7TcVPHf6zANDfk9DAc9gYjT2XmiBiRdcCHBimER6wKbZ2",
  "key8": "4dHmvfEKdL8QZoQUwDTRCR5GXB8FffZijUZJxhvk8zMt7RXRysXarK6LE5Ca3vvWNSzugCpFRdsjFCndyCvMsXEz",
  "key9": "4iLvY2Fo7xW2NAVjSHUNyQwhd4gr2gP7MjEhMVv2CvvwVwaVsiWQHcAHRct2yHCkdbKnfo8E24vJu4vRBti3uTK9",
  "key10": "5A5WxyAEd5iB9gPoWJhet2hcRXgWMPad61Aaakqne3yU6HZgT1TJwEZ5V4YBnxJywMa6i8TUn8miBGfc3sJqHssj",
  "key11": "2tQ1W37pXwgbKyH8LTdqDoPDNb3G7JQxtPyfwKqYV1Jyo5cv9vGMoxEW2Lfmtde8N2AjmL2cZbLreAFc4ZWXDQrv",
  "key12": "WRQBe8PmwY5s1DHHidvu9pSFMhCY6G14E1tigkmJEcLP9cbSgE23oCTykT2TGemBeTUuWDak14ss8fArAGM5jCU",
  "key13": "4CpaQ7Cw8haCPko2Rd2uyMdw6u8mNMLLRh1drXBniJ3LgwgqTdMjYYmrSH8Ws7M28Qj8r5FbjyuQL5ixujPCRYnn",
  "key14": "uXjKVWdkyiTm8XaZQzn4vYJB5Egcz6Y7AkkB9fVq5TmVfoQnkX7LW4rTD3ES5JjBeWJiW2gW8oX72htQUFt3hhH",
  "key15": "2omTHBXZ4bfPHDdY4TdtwZDr9tZPyECVycL1hFYCaW6BKG98ZwjjnpoPEDSFXTvDQzsRK72iTGbTeBfL5PnvKTaK",
  "key16": "2AZKHqtJGe9okeLPw1jsqJDjqJBwEDzKgq2rZmPdEYjk7sBBQxf66M37zeCKGTBf4HvHEm7BEHtwwyA9Gx3mgSPG",
  "key17": "2CyzcEQQqDvzi6itLRJ8fFVYLPZhXbfgT5eu2pX8EwWKky9VmqsRTdFhJdqmJMTCo2jKkvDwRL7GVsmvP3BjYYG6",
  "key18": "66uVqMWgNC6bxceeaK425VkoPjvf31uZt9mBeuCYGxkqL2DeuDum3RpPTRLgVcK4RAQ5AKK6Hj1sZXNkC88Qa3y",
  "key19": "58ApTKoBPDdBaP6Hp9PyhA4R6YDZ8CACCcQqmsSq7Ws6niizooXy2299NXX7N6kfLJVUN2PRbsFM7QVvcp9XzgND",
  "key20": "41dtVYzfLmbTSZNErNTMduzkH4BeccqryonxD51vkfPwgvDdsVVc29JD4XuHMNbooBabn17bfKRXycuLQrgxwdUW",
  "key21": "2qeDDfjzAaUk7U8A3FyVzdf2BvWkkjeM8G7BQpwWsV6Z2uwuLsiZFRHWdeDKg6LCGH6jiKJqoutbpLYYm7z5WuZD",
  "key22": "5x7gVPz52KXD2oGuJNxQJyRVxxeeiUv2aWUEYt9XZHL6A95i3foYVjQFcM3igYtL1DXH93ryfagnkeJKBqX25rN5",
  "key23": "38fABugDZbSEEpRsXexW7Z8TNEpjGhBDgtrktJo4GMq6D5B6unNc1rcVH8m8hVMJPwHnS7AAfyK2zkj4eZoB6YyJ",
  "key24": "4njUciGjm6YQBaYK4NYbhjPAPJmwkBtMvBeUAtG3SacRLw288ajmvcoUwNUicSULRUZ4txCaXEJTptcuxqNqHZJD",
  "key25": "3eY22PEv4AKzBxby1mVLHYJAywiMn5Kf96KuZm1sD6KX3LxGtvhT8BML4MPTBoqqYBrLzcLrEJ7Wq9ifTpNE8Wur",
  "key26": "2U5Lm6sfebatrzpwVC8byFDPuC2wCtfk8VhYyufohK3aTzMWeeDUMNrZx1RM8AqHDRwYkdhrZMCyTw6K7bh1Jap1",
  "key27": "3sipwC3Wj4JRUioLER2HjmFGuqgauvLmVDPL1bpMYfX7PqWykP7emL1pmh4Y8nQfyTk4wN5YgT71TSzgdMUCHtXD",
  "key28": "5mCcfvgTpiRa4PzgrwhTU1V9nPZQvmtAM3NRZmDdaw8LkGdHJCuamXbg7Le4JLR52psQyhnVJ6hFUcfoC2Np83Cq",
  "key29": "QZ7FFci8fn1yvZnEUn27YCb5eRg586x1wojUyX8xri9b1i62oo1UTHGYwkeAnkEsvthAJ4wZNuhjk9V3Ljdy98e",
  "key30": "2q74GD4DcAk1UZUYz6GHY43iPVHNkJaHFJeyqpTnha1dToHQWH9uvrbmNzKbeg5xoomafD2q68Q3utnhDYtG1Ysq",
  "key31": "2f8jDx9Yv4hrn5RRN6asvwqjsQkDc6ECLnJmqs85S78zMS84uvR9KE68cSAhyYraeraYT1uey5YSXVxyis579aNc",
  "key32": "2naxT3cYRT3Ho4tyfiqma1YYS1HcBRsjPEfQ4thCCXSaJxTxPzasGN7zx6A2Gcy3wCgPdX2dq8xaicQ72VSdgsvx",
  "key33": "3n2fVRvt7jEqSrdctZMbqoQqLRVNQG4UWLmPzY46Xxf6KwgcpeF7Pn1SVT8ZiwMVpvju7E3EoER9HfVtfy9Thd1",
  "key34": "2p8i9dnUp95Yq9aZpcdsw7mcwt2jZdK8Pmt1oM24vYomRniLHA1uDGwMeJC8jcBPBTnPha148TwXEWnrw8gNeXSz",
  "key35": "d3aGbTn3LwV6UDjrZpMACUpSvhrZ3DCE4JvKshM8GYEje3pPsKUsp92CRiydeWLJQ5TUYrtdZkwT1XxKemTExCR",
  "key36": "2iCNi9opwgmDHMEkUqfBFTZWbc5VX1oNzJ1nr3DH44t7XFjCgeGKrb5z5HaoVLNq4e85gPTD25EqdQaSASxT7vkh",
  "key37": "i9bHEP93mxfbzmX2yChY959Fk1UrVT5gGdak7EdzMuqJVKeDpVY4X8avnfCoXQMvhKRP9t2TCkRecvue3UTbWLB",
  "key38": "55DRbWF9Y3nX4fj4ZzhuSBGiDSBE3KWavmT9awn8fC1PQ7yKFkoRGfi1E2WG4frSTjXdR1JtgdnHEf4JPYpqhjfi",
  "key39": "4mx1wYEDPSTsH76p76miEmS7Hos6ptuo4GEQNCNYsEkjV779KkLei6CpDxA2d7zn9F2VN7tPC4nZchCFPupSchzc",
  "key40": "34yve2ftJqCTLiSmVwVEPkWKvhdHXFygVoPof6q8JZ5NzuxZkrNWF9jX8ZoNVh3mbDVdbZHqi2hfGEYXcAppyvw1",
  "key41": "5erkNUhrfo2xyXp145xFnM471pxCnsymuRpRZXsnNio94wMHNNnDsvWAzB8jD3GenPgCs2wo8bQFdcpaRhnohGnV",
  "key42": "4MdvoRncmSGvmEUov1Sik2UJ2wyqKTdRyk6dUFAsXDYGBTt3x5JFsPbcNUbr39m9HdLM9iZFGjDy7YrRaZiFaG3G",
  "key43": "4nTZ11rVqo2wfz1eotvtkQdZ7hJ3XVUNZ4v4ACDvFkQJNpbbi6kLYfr2UgTWb2E4fozFC1te9wx3J8qQSChgu1wZ",
  "key44": "mvJMtX2hiq5taP6WSrrTA5XF878YqqdETeMiR9kAx6yQXnZzu1DQkdVYdwuMr5GMmrAQsLzq1npZmqe89Ksxrjt",
  "key45": "5Muyn5DGTa1ttGAFs7je3KRD4mSdztBWmGSe18HSni3pVGRJbnKVwu9WY8muQir6uKJqWL56kqWaBpmeTMXnp2UR",
  "key46": "5tYTLUXJna2x2mtWWS4T4vmZdh1qEcYeQXjx1AKsn8BGn5FJ6KxiKxKhaCAtubAvRWVANJ7xg3Vy8mPDtsSSwG4w",
  "key47": "31KRRifHYAsYpDhJtDVFcmt6Eyt4aC5WoV7aSMUDF5LKuLTRjAce6GGV9szsRN6orKj1BHwTADFp5EiAUCvReiLy"
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
