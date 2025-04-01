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
    "4G2zrCwaZoTyJKwv78skxiKwGsKncyXDzPKoPbdBNTkwD27GmpB758zGt1EWUyZvxtGBzU4bsbium5hXY5RePDMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H4VyVPMaU7Q7f9BKrqFoVTWms3q3eLYj6HVbe4CDSTrV8qXXdkK38oEZg8UGJzYeF8rPq1dmtYeQozntEVrGVSH",
  "key1": "2x9EPJ9ZCo87Ae54KUNE9rPj5jjemcVm2KRS6TbkNb7t2wewmQQ8ZFXaEE121R3MMJ9Q9fy1YgYVbnfA5aB9Bvfo",
  "key2": "3gg5HGxw3bDDH739ha4Bw3PCJ48NuEXfasmUrXtPRrAbsaKJgQTEpApUXELic3BqPCA8VMVGMxH2TYaBtr6b48Yr",
  "key3": "2cE88NTFsiHeXLp5f3oBcJ7wg9EcJmDEy1batQ89VPcrNPCmBGhXK9LXqob31ccKGrySbc535GJAwrpF8Lxsv7qT",
  "key4": "34XQt6K2gPMoC16REHGEbU73FpcXEeTTYKDvB811Caxwcpqj1q1KyQFgXizjJD3tcuuta1HnjBfaCeTHKKPxxezT",
  "key5": "4gSXrmDNqd6bRRG8J8eVYsCBpwstHhb1wuVhqYYhkhm6zSRAys2iBeTBfsi7LJioqrX8k5t5mWb1pfXMX64LPqT5",
  "key6": "igxxMiGLSskDmTZBJKCKE1yd59hMnheFAcKb9XgTmFiJxfNoGEygt5wPNmg8vwJ8u1txNmCoFW4GGgK7cyVevhB",
  "key7": "5PRbFE69SPgamq9kPX9jPyvciujv6WbASS8Z5kaf1rYMJEba6CRBL2CiY24hvLC7KTmhyo6wNnhMeCz6W3vU3BpS",
  "key8": "PS8Am9e3zW4TwYFePbsuzS5Crs4VE6pJ7wLxQLDjHRBQwMAcJND5xp2xYtQi5xWxfXdAvsG9NbJaF8MNeCopLMN",
  "key9": "aqTZRTp2ByyNbrCoNWurgwjPC8shF194qvsUp4rNRLGfU2DAMAghNaK3f9N7PQiC3HQzrwMTGufQyuNZ6tKJCN5",
  "key10": "2X9uNp5YXKSju3gpEuqhWHThgPCqPCbQrNkEo6tyCcse2DZZRgnnBtkaAiBrcrGkW6r1qYf3QWwpVZvACfSLcLi1",
  "key11": "5yjziT9QPqLSUnpH8Se177paHK1XiL9Eg6CHBaUydNsuULWvLt4iNfjEJGKQmFEE97WHGDm7GpDx8jQUmWWS89BR",
  "key12": "2M1qYwcGrhDzTnLxyExwiYsF2Ba1P17HMytApb88FpVt9C81iGokAXDpjG9js8o56f8V5h8JPtVx6kS6TGSBc4UM",
  "key13": "5jwxjdDVMUuS2zuVh6W8v4uQi9x2h7nzDCSUqJzza2griokr2NGe1YYyhCeJcwYRHvUR6c31dGT4WP53QQhgTHTm",
  "key14": "HLHYEVgjpzvYG3PyzhHKSamMNKUaXak49vx6YEZF8PRaqFkYnbc1eCYCVZrhgqxA2rjrvJdA4LfvNvRGnq82KQA",
  "key15": "5U5C3cz7J4whTEtt2c7nZNeFEPLRAo7bT2WCgX9s7xy84VgkEksXTqzbsX3JvYzPPqUDoN2S9Xs7aENeLCk6vsRp",
  "key16": "5j8pxcYTHs4Gq7yop26uzBq6RpZJr74ES5FmtgaaZgWaNJM3B332wJeecTXLSudDTrGM58Kj2npkapWshCaRon1g",
  "key17": "3AQhnJGefiG6bK56HvrjEyw5dpbS3nnwGNKxV4XFvp5WfwZdieBgWb9ZjTS62cWvAvSYtPFfziHguJb9MwJoGfBu",
  "key18": "2wkeCUpCwYdc3R1imkRyWdnD5o93YNUsFDNidmyNEkoSXCVcY1b2uiNens1efb8c4HHDdEGfrPWraFv8U95SBLJJ",
  "key19": "2YiahKb75vgeqttQfnVL3AkpFrosBj2WitbhBoVZmfqWADtuW7cNqkYeagrn3nyu4uomjcQB8bGijYfRK7FwxyZ5",
  "key20": "3tcYenNNXuKPhLyqUzxh5bq4gXMGPu3DctsYJx7RuZfdcC5zpo6pyeRQQYRixTdtbz1jEupUZBtPfrUqw7pTC3Xp",
  "key21": "5k2Wc2tTadDsE6FF2ZnZEjpVKjzhgYagnXNURD2hxjp4uAXFPAECVELNDbW1uYRTZmF3wf3PfJmJEkFrijqPtxjD",
  "key22": "28Toy8zR7gRJw96aCPapCDUMqrbdvivzxxLq8rcuu6m5X89D7prpVD9zxQpVwUiEzFBqsBoBF2vqJKDTz6ikfj4Y",
  "key23": "3JMgcvZj2aS35xXZX9rGSrKw6TKrjjwhZvzhAUP2GXB43p9zrxj2RBpLX8YhN9NBRhfVBsdyM6pE9WQ5Z1KjHMSB",
  "key24": "mG6VqF1fKMbURgK8baP6FZTnYynkWXUmtLK8HQ3PqhtRgDQmzcnBMkuFLokeum1epQHdAeUVwyf61fNbKPHGcu9",
  "key25": "24p1j86tgduGMxFnkzTDw8gN98bCbtcjuhTdk2NDuBuicHscDLVKuWWoogmkjNHZDnvdrCbu5JqzarFiss5dDEDQ",
  "key26": "CqmzphLbB497XMSxhgG6jSXARo4UGVDi5GexnjFiCytcH6FUAB6sVmR1gqKZ1NKK934hXacpbysrBpYcJXfP83Z",
  "key27": "cFv8JgJ2zcdaupro2G1VBMqEiE2uYEJEWjnXADDGdBFhwxetXcsYunLopvU3tCPnkxSqUS3mPRBvH9ojKSovDig",
  "key28": "3DHwuzGmzHyNaoaj5ZLrDCKmGqkm9gMcCrcvD4SELxkVYjWASxcHKqDJbjYttnQuG5h5EmY4gXozc1T494Dy7jBk",
  "key29": "5TDY2x8wRKyL7r7SAsc23ZoTYALYf2rG8wFsXipXaJSW7vRNunmpQK8b5o7piVip1p2FXMY9nrfoLt4k8XtVqNai",
  "key30": "2R2aSS4si3tiCgZtvKK3gD2RLqPbJdYnM5kwXw3s5QtKn39fgg6zTDHM1xq4u7u8apb16tMWs7VbpQx4RtNBqmc7",
  "key31": "Qje4Zd9DopH5vhcjaNbkCPXHHjJqkm9jtPxdN6nCq28pVcCjCE9HM4TFd9QBCB3intDjUHC8dSEYvZJXbrKmrG5",
  "key32": "5f3nJ1rthWwq9nk4KJPfajv24cTtCmpmCG8pZ4MGseH7BFSnuqPAjQbk5tycLgnSk5WDbe7iaaomN7Q8V3wJS2UU",
  "key33": "318uZ2TEE1MfyiVEALoHp1qg8kUAwr1mALGK5sogYAWaMHf5Avya8gCCLKkx87xsX3yBoUmGGd1i1W5azpuaQzdG",
  "key34": "3VdwxEN8envw7sTZp11ccvdrszcJH5zf6HMbGyZbg1NbXFTLL6ok28AcvXXrbW7fgHbrh7BhbEYADfbz7rFv5kPo",
  "key35": "JGq1QvEB7TqScbPyVHaN3q2GCLjHTqq4aDo8ECmkKg8tow2mjVjV1ejnXyy1YwSDzHgyvibrvhSJxxDXTCWWzoc",
  "key36": "2PSc2vUxWcWVEVe5TPm1a3zWXxoaUNXXTQgg2HUs36hcomnDTBsuk5XnXL1HHZqgX4u1jd768BwtF81ntSVwPkx3",
  "key37": "57LybW9K5MKTZRdmWfbFzXAkMNyqmv4na2WKrFrH5SFGE3PXEa3Y1wurwGdyzk3d142z72zepexr42pyQDfreHYf",
  "key38": "35SU6Wt6esRh5BwRKpE2K654DeWxg8bzrduL8hhAQ3wa9EKj39juAaYPTn2Pq53P7crxneRR3k9HULAWbRfmHfr7",
  "key39": "z7xAJWXeQ76inCj1MhFTxApeyfHC3oDTpDixQSKWpjUGr99saXyUuVRQMULbyAWKjL14U2sWSUuUwgZtRNmY7u3",
  "key40": "2zm5hRTuwjrgkSd8Q2yCEYUj56bmp4wJiUEkYBUaYJCPHZH9gKR65uShtMPKC2DBe6onvJF1SRTQJR9AgpmUvFhN",
  "key41": "2ATeZtbTPmYrQBs2S5mdHwQEtk49WiAyye8pyRMQtF8cvUZechh5UhUpducgFNDDXM8PtdDgLEK2hSCpBVbi6FEw",
  "key42": "YbRhRoNQTRg7Tvvz2ShaKjY9eFZHMVtigWhf7ArFE2YXDW1kZWKMuPYfL3ECgcmZPAzC4SvMzPDjQycsFAfq2af",
  "key43": "3uY4ogeKCHdtWUHbkMsKa2y71kd2BECEeEnVT6LmbKTShRWMEVSJ5NKT4SfamLjPRM4oQdM9pxoJz6MzVkN9ok6w",
  "key44": "4qN7W5tVCjYsLnHDEuKHgZkEmP22YcJCYavWW8a6jv9SNrfcJ9kZPcB2XmrwqLzdDhVUCEQgRcVVweo6FQqz3hbP",
  "key45": "vDspeETw3ZMm8rZJVFKGdKVsKTdwZutv9CabjGSsdug7dwc4eEq3wifo4tpWS3LaznzBZrxaxBXt7oVAhtbaz6t",
  "key46": "AtVYsUMeGj5NH7AjkcTnD6PL6XJGfssLZwqxUZdNq5orm8azNL4wn5QWFMjEMS3mJzzQHbK8vGKe6BXKJVn8Pou"
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
