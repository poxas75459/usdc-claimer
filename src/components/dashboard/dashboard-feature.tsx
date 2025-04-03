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
    "SDCBevh8zsNhwedJ6un7YT4UayKMmeJ6PWExev536E7LmRNLtyCXpDFt8WCuNSeV6jbHXfdLvhJyr8T76UD2rfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ne9JMxbTZ8t39Cy5KY4wfgkYXHumJWtoGTFiVXwBPnbHy8vPemkKRYF7ZWrzv99hEZhX7ETmXvhsr9FQzdb8PrK",
  "key1": "1SGPWYsmp4FYRKjAGU1SSsyuANWfofaYSvqJrbyx3991geaDzkpcQmvxdvxp2ncJFLEyk3kkf3oegNWS7QqgaGa",
  "key2": "3qR96WaMazRh6FDRKAgd7LAz56yVVByqwuDbLwXrMAbKxPgvbezLgwgmSmz3MWSQoyvWAchBQtM9tPYxAcxCR1Yi",
  "key3": "63Zt69MUznF3SR8FtdUv2DYzZT9NBHuYs4LKoZNQkfnM2i4bAvP8ZjX53wRn7GXHjbZzz3xNq1R7tXcogA538YNN",
  "key4": "5qmwc1fMpzXtvJzTJztV8XPm9fFdCcxjpheCm8cXahkpHUt9LDUWne3k7zkMGy7ybzXVihqbxsWPvBtoJd6njBUt",
  "key5": "55c1ATymQxMgHgkQ6CxHcuwzxyELweTvXnUVH3v5QiHySnfYvJy5v1HVE4JEXTjJb1DXmKnkN6niT7utqbU5UcFo",
  "key6": "4bMB8GVwQEkdk1LNXmXbVgQevXpzZM3DVGLvyZUvDA3CLXesUF1QPjbavxoVP9FYoSx2mEmPrQ7zpCWsitmLiz3c",
  "key7": "5e8LNT9YQu84RmTqkkTBEvdVtNvZLGiC3tBzfymgFJsVskmiaCz5ey5DWehntW8meznsvu9arE7EBM7UfzW3yMX9",
  "key8": "5VWMumHWhAAoCXRGk1sbQNiqwHhWuG3rqSKGNZWwGpDngNoGV5d7FGVatyPGQMDFiC5ChsC1688PXZRVHVXAuGKe",
  "key9": "3cLA7FfZ8b3cgC4HwWuYQyn8YcBnfgmNRbXXBCvwtFedRBFDcBXog2h1Pj3uuazvFRCkD2xbR4f85SURBBXNvjD4",
  "key10": "qNwtZH7BXa2MnVs7o2L7GdyLUPptnCWe5dNkHsXpZ9SRxz9z63sqtJ47zbQ3Xpb6geKixdWRdGjJWHQRXR5NHBM",
  "key11": "5hjw4h1X4LBskdEJ5irvPx9NcDabZkoaEBxFtoxfsrcvUb78RfffmcyfkabCNSzUx1KG4hsrgzrqjVnwkfTtWbPw",
  "key12": "5UzLYR6E3B2Eo6jTdp2f7RhiaNLL5uiD8jNmbi8KKU9sb3eGkDQoTXjJqRaFQK3W2WFTTw6rQBbCySnRwtRcnYri",
  "key13": "x79jf3jABvq7r1HT8QBCE4BNFW781dxgC1twDejdLwukwqjJ2xqeYaWHQ8tWrQY3JVBaPv9j8JvqKzAU7LH4PDb",
  "key14": "2LPfMWtUMYtsnDbuCrkk9R22Bvzhp6JCU6q8fR3a2s5gnN9TVUmYVnWkFMPz4kj9Uj7iMCyk3SRjJkQfNvi7jTeZ",
  "key15": "2MishKgts2RKrHyXPNtZigesbZ82HxKSuhfrePeCLedruekVvadKWdM43CyBwNLTq163h6YptMKZEQ9LHqY4Fgm9",
  "key16": "2LhNdDNWNFGkKVLwGPKETwqqTyddAtgzEFa7UYgGUaWWiDopL7FdaCr2wHGoMPna5ttpaWjPkwL5a9d9Z5qC1aYg",
  "key17": "CA99odxJgrGvkC48dHtqTeud7L1BiuzpEoPmeGSxLLPndUNPoBgZuFddwiJMRN7S3Z5X7ZfMgw5bhKEKTaUFPCZ",
  "key18": "4NFyFYyv7uTybmJwQLSyDvgjEdy4chGXwRkoPGduia2J4YNn7nH8FL3JcA569ejNy1SpCvtckjwPMfcAx1jZ5PTa",
  "key19": "3n6KnFvnnL3ZDknysEH7TCvFx1VhtVkCLBL8jgnXruUmrB3oRGxqT2tqBMGUDGAnD8RS6wR2NhZLSDd2wSD9g56D",
  "key20": "3eLYmiLEcCiNNp8m2VGmySLSgwKgih92dZ5woC7w8DHyGmpNsM1fHaSTcejE1TMM4yDhchCHegSiMazQN6hNbTJh",
  "key21": "35rG7vuo45J4UC3ioQMoTD7PqkxW76MZ3Ndh2Vp6tuSxLNVUUEfCjEmae73iTUyWTmmraU2XixDCtPeQR6BrM4nL",
  "key22": "46KUYbNJyoFVyCed51db3xWC5C4KMC8NVPoovTfmSyNX5ByXdpviN2vni7ruGLCSP2ngFNN1A45sbNVnQRaoRDzf",
  "key23": "2d58BVTMLMmYyUZmBxzvFZ6vNPty58n7Uwzgm1ShGQKZwWpaiPbopMWeBevy6CjR7Sx4Jzk65DNmm5bdqvbVRdn5",
  "key24": "3B8e8MqsKwLQo59xWScuATEfqYfQQagwUDibRAvf57LoP2ppJnqpw9dJueCU6ckKkL7G7byE9eEgJSwzLbQRVJry",
  "key25": "WTMHscLDLaNKWUNuZp43DwEwv3kPn2ToBsh7sAK4VDnhSRFskTtm8HqEwPtuZim8DSdANEDk473EKoH2LsZ4Gwu",
  "key26": "21WB4G4LPTicHWGEJetdg5VugvZSXNmrRdzpz8E75CASUWhZcxQAeDNAPeSzbdSQJ3tVG7dmgyaNzv19sGjDjxxp",
  "key27": "sLMEN6Vr3yb155ZRyBL7qhuLDHjEHy2LdDeUSpBRkEmGveXnm4aMYKsnZbww8nq4Xh54CqDNJbZNhvhpisYW171",
  "key28": "5ZMG3NQeyshdMxjnAFc1G7ZueeuAjME118noC7WDPH6zSzHCi4rCdtZ9azgyGWFmcUUnFK9mXcjMMRRnofYaDVbz",
  "key29": "4Na5oQiSaFSkXVnyhLBgChswsbyVJHHDivnQTnCPbqFGL8rYGJkNMUMzgBQa9cDHc8kXz1zTUk9SPB61SkDwBjkT",
  "key30": "2UKfJ5ALEXA9B8f1iUY72mp2TC8BhWZYLiKGTNnWgdN2VQZY58x3ctwCXHNYDxBGAjV47dHa3hZN4zyvRDb22ixx",
  "key31": "5s9Bap1cXHP8MbhhUzcwGV4qC3apSHgzx9hPtyj5zHvmXbG6Y2sZzt7ykMX7hH1fdrDfb748sXHc3DbfPBznAwKw",
  "key32": "3KKf7FRFiiyPjsCGW7SwhTwmi2tERLhSCRwuQGXtHj5825JtHMxYFYufN7gnahAPLk9nD4n6gnebVB2pia42DcqF",
  "key33": "3UXRfPWBDUZQdgJ8yT45wQoraNCkRS1RmyeX1VvXQ48KMBFG5VwNZ8H9JZVL35NoNyt3NT4o1nUqG7eFXPwyd7SB",
  "key34": "4pyYZeCW4R7xVQumDEnd9VecnAV1uCPCRrH24Eh4CmXqhK5Z4L2YhdH4HHCntnRRwndhZXgeLGLCHCWShSRGsie9",
  "key35": "3ymg3r9CYc5A7qcRT2TvsZHMkmEfC3pTTy4RUdKCKsFZfK1a7q5CvRuvzPDM9nPy9gL5NQEfp2pinRb5AHCd9irN",
  "key36": "3J6Ham7RpFoEztZBrbdKSyBznPvV77wE6tS4YWAZueUcf6UXwrfc2JvrxooFcuReqsSJM7TaYNq7BXpUSgRkUDEB",
  "key37": "5NU7k6ZKLKh6LvTVmipdHX2ZvA7zBc3eZ4NZKvz7DjGFvEdYQ3PPjbho4xCUZb67aAzoQeuSjVyE7ruhTw81WL6X",
  "key38": "38XGa2WBYRJE61WvWzJETbWsTTPzBGJqyLuqqLCUcojeBYwYFsiUZSXwadVYxbDu1qLkGUnLRSX9FGKNYPYb3Qm1",
  "key39": "25LYfhDnsjZ3JtXJC2RtxQLAjK9d2SYE2o6jy4JpjynBzDcajfQ6JxDyJkpMpsiZLmyFZfYNchPtCpa6B9zz1zkW",
  "key40": "bbgCqSTwdQfVcwZvoCHEa9cwCXwyZ3Dw31cNJPXcrFiyD4MUweYfXCqy56ENZfFxHobvHQSSbRxSbAd7ZpFqq9S",
  "key41": "58ahVhqznbFsEskxp4obv4k1FYXki6qHvWYqG6TpdmfzdULpiWgsAWUXuxyKuqML1X5PBtFkZZtbb3xh58Lmhy57",
  "key42": "5QoXjuevB7FLte1p7Tyd4Nug5Z4ouDPj4SSSBsEm55LE89vVqAwi79dquVhZKXNaybuumpCeReDgEcqUCzHjKuy7",
  "key43": "3BgZPCW6AUCqXfWyc1QghbHSH6XW4WJYALbPnQB2J33746UmrA9WRgZxWJrXjJ3xDCHnQ6fUwvgcSDuGKhWwBuQ7",
  "key44": "5WbQwQsa5T54freYDx9kEYkFxrAP4DBvio51gRvWUs3A94EhxrPjtMeYiijqkFpwi65VhKaaJThz4y75n9Uc6jPp",
  "key45": "xpRJwh1FsMsvedSKMvkhjEKbcjD2Wbc9kFkCpX7RZygQxRDcqedLG9h7KukkLoufMSura2mN54H987RwxFRtPkX",
  "key46": "zjMbZbSqpnqSgw6HJbcKtcDmK2qimHcRHn3NfhgG93hGYmPbt6wWj5GASTWJHb9hW7VsXsXdVar7yAN4hMakUKH",
  "key47": "paniYdfDudeSsku6UF4m3U4cXPj24diauMAbM3YABFhV4dva4QA4QSc3oUzSnsmTrF7A5L1vryjhRo8iKxSDUiC",
  "key48": "2YAnu8Ws9Hjkh6227otFXD86UfFvCun6UXEauiqbXQMoQveWGRKrQoPjggHYYqozfotJByHW3WzXfCEzTuYWRsrQ",
  "key49": "3EWtLHjFZ6sFQ3BDwDB3A4rT1CED5ApiccoMRaQev1A8pXbiQs67iVkUZbuipvFNgenuoNqz8dquGShpUGMX6MQd"
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
