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
    "DSiX1YZaup1taLAjtgyDwvPLFwvrru6G12rbt8F1g1yXJsd6PVsybePi22yobLgbAGhHBvbzGDTrUNbriLMS73R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36VFsSnwJvi71XdVRSYsus7kERpHaQwobvzgUJjSWBFZvcG8zmYCFxUMLLL2JjobPqiwJAG7oM3uLnjJ96PTxPoh",
  "key1": "4nuznzuDVYZkg3ivnGT6zNrp48jEAcomat2E76RLMoEheRQqmPpe6iExNbd7sfWnyXURKXZxDVxg17TPXb3T6tjU",
  "key2": "2KVMTsuNs49WVsasysRF7TnxaZSiKgtpF4CBGmRYyZbtYp94VdZUVpxng9gdwskA4suxjkJgX7euhi3cEdRBDdoU",
  "key3": "3zFiscYJNvsd5UZCH6z6yDuzYQc1wUAW8C3WQ2yjfz9g72MJ3HUQ8UmvtcHFcso9J6fTWdyanT4X5xYWQd14km6n",
  "key4": "3xJbav7boySdq1nRwETPoXYAyXzLSxEPnXmEcK5Tx1jxCfXSuVoc9PvPRAHrg4SbkRSJGjnSBpyZ4Tynt1n7PaGU",
  "key5": "32dkcoKBfC4h7PN4vR8JdtjdReTzH9zfwMe8Yb6rvtZmhNbAeipvmtBjh1ox6rQhhVaQ18E1VMAidhDxi7wuZQS8",
  "key6": "krWxHEsfXZBvMo4j7EHYDnJtCwTjpiyHnrqaZJkvfjaTK8Ecoviea6cxstqbjG4HPqpRMjNmqcp4Vvs8HqFA6P5",
  "key7": "2WL9tVaR4VUf3W6GnY61y9ERvUmCQDrsryMh8RpafDEr2uFfjTKepF7WKBV7RTESWp7xi5zvLbRoAKjnQ9iAonuE",
  "key8": "4yH89pA8fS8V8RTCaAoHzDMmjyvB8L2iKEou7pEFeQr5gGgtecKGJJ3QKjY8Gxo6CdUZQaQr62BP5azsdHjctSdn",
  "key9": "4KiXwywktt29k4EKUyzmoaRXtnhWZaYmMiGToHW5HjQ5uuGMM42U6toE9vYJzxbcgqkfAqJJDAcTC6a7hAo9Mzx1",
  "key10": "4gywq16oKS4ZfQ3NJAyVBy6zWstCLNqARxySqw6V2L2pCLD8m7JRZWqSLcdXq4BrmCtahAuxLrzfqhxa1GAvkqWq",
  "key11": "43qnZc6U5znunBp16uwhhqWTgknsRdNne1GvcaCxkyB4SsYxEGAwMmkMTTo3vpZSy6pQtAACnh9SN7zA1QXzUwQY",
  "key12": "sYK3QTEmV9gf8KhTwrMhH4rJf3dwA6NbH7dULtKVr5DbdWhCxj5gGysyshFZn4dKawLQ9hoFS6ENdRCdq6xZ53N",
  "key13": "gS8hsrKZafBijyvUfYHCDcdZNeUJCoE4TvyCzGXF8iNG1YPYCkRXRuFEqdSX7Zdm6EPyYsfXcV3roxL5sqFrzXr",
  "key14": "ozEneUjS2Nht5Dy36arnTWVrqqihdjmoW5rcpqAhWcLDbYKDoHDsHzFFfcB7tj3GntAF283j21twa7kfTwgqP2d",
  "key15": "2AcMZsMsM83x5qG6xtVT1eF6vao9iT5ZGfS9Bxj5ZUMQr2S1bUWuqXFjqBxooZvoUzZXrVtEWZ39vMdHJhBxomPq",
  "key16": "4c8nvBxnHcRHfHtXU6c1uvif35ZqXBjj254mjRiAMwdxHQaBD52XeJ3JeT4cZ5EiJBJLTTAG9ENVpzKvH3S1k3B",
  "key17": "4U6yWWjTUdwEeVi3NpEpCY7hc8qYoLvxKHbaJDERa5gp6P2YU3fZxGaXjhdxrQoQ89GZri2sQXbnH7rdFR4XJEJ3",
  "key18": "4VVwCDiKgV6Rj6Qt9KZd7jwoEfnK8ZEpipoxVmFdzQBFB8sWf8ZkYTZ3cXhR26b2mvZyQQDktHkZC2uR52AwpFxN",
  "key19": "2o5dP62C8pvtbVaLCpbgbtGQxm8yGkVD1T6CQ4ywd5RM2nSbn6ZRQqLW4gU2BmkvEf82hQFEGLUzMSBkViHXphAz",
  "key20": "22xgwLSg4r2PViocGij4qjWT1j9nSUEg6YQUMckf3CnSJLzqKpWfTD4YQtJaf2wRam3G8dRuscrW5i3tpKxy4yHT",
  "key21": "4LrSRLVbTPtJMBfc5YyNyFFaRNivnrDxn1T4fZ2jHEF37sZM3drr6eVxqajjqe1LqtyBwdB8Nd9pqFzaCYcCPD1V",
  "key22": "4QoFfKSME1yozt6sPvydgCrEHbVfduYLec9tXt9S12TxU8i1ACYfAve82r858TeLHsRnguj4NhVU5it6KD2fz6gg",
  "key23": "5mcHeEBaWvM5cKwePy6tewQKm5ZaJAb9FzH3vFefhskorjJuy3NchgH68D3YwmTmuxXPoqxrP1efXNyMSzGbmUvf",
  "key24": "4qfFpJTQ6JkeJGcBdjas1g8tQFu5NJc6RKSNMz2tJTLsXcNa8NbaBQwYrHyQCBCa1vomL4sRrLYNd5iotpizQR41",
  "key25": "4otJT7WKgc7GoaojsWFboNktg83iMRxtVpc8gBx588V1TRJ14KM6XS4vJmeuzTHs9qivrMoPjAxj5AaU3EyV5eXM",
  "key26": "MdcaKhV5a1WX9KZFrUq2WHRwgUhm2AQwtyW4cuAayfQy6C4YHwGhYnDb9KQUQwkxnfC9PEvHDbz75EFViH7FZSP",
  "key27": "4pysWC8cpg31ot1h5DdkyrDgwAuEtfvz7ai42brTANpMdrdjmhRxxRAYr7TWFrFrYqUPHLFwUqBa5PcD4nLhU7CH",
  "key28": "4kPSsRpWUyPQeUrZaVa5VXTgpeifQTpSPAk3wdNWoVFmc9MCYskMcBnhQQ5yAFbKCG3Z49vF9xWpELM5zDU3FDYB",
  "key29": "3Wy7pnxBrZiW2kYWc9VgF3yS44k9XV7aAzHadhkjZQriartdyJ5wiF98BtNwCFA64rHbfwDvmTzs1Y1B7pqb5Q2j",
  "key30": "5C4GXtj8KmMASNCnCTmHcpwFyNZEMEs5o8xSdQcSoEpdWrdwMGsaR69f1qAZazoMvtK7kM5DnXCvF3b81qNe459s",
  "key31": "wdCPsnjX8NRbKnEdKHJ223HHEvPSAp2wJtCgEsTxZup1hbBr2hz2rRJ8iz7cuNrpF7FyLWEWCoaLnKpHPxVUKG9",
  "key32": "27gbubGFfoSaWo5pfpjGSrbF46anAhDDmGVQ6eaV7p8EyuEnt7F6wPGJ46N4dnzF58n7mNJ6J3bY2FvUMijHBdMn",
  "key33": "4SVN94b6md32zLNcPEmhRdEkS6ynDau2CxUDeJ2WJfsFiAPtGG1bTrNr98af2XsHAJxSmCVG465w7MkdzuU453iH",
  "key34": "2hGAbm2egBCbFrEjwTPknn9PZa2mmxxdWegsHUfxGdW7baeUHLihxknudkNot7amPuFmWW2ErPYAxiT1GokLzgR2",
  "key35": "5CRFFNFpYMJpXjb1ivSjEYuyv5wigKNGsegNiG5Zg9ruTSVT9hMjCgUb3CDVd1XUhXYqRYWr34FZwkvakMhMPAmd",
  "key36": "oL7aJgi5PKxTBVKpPUE9WKvr2LcodMpRGicyEZwkezQJNHoNP6qaRbhPyEWm31XyzxfuMsqHp13kZy1N9xoYh63",
  "key37": "2KyWBXEj5RcjquCnCU1P7849JRY2M2BkhfUQAgKDieB6JpjfgbFUmMgSCZd1sempykg7i7v5N4BE26z3K3o145D7",
  "key38": "2VojxRj8usPpYHMHQChJ8mH5xB4xNRGoBMdonMm77VqLgiG9oG22oRXktjztYWH915GL5iMw61F4dKa68DYj4FTp",
  "key39": "2Bi7T7UoUV33Z7EW4qJrCZQxffphV3W2ADDPgWk9jp39m28CFFfocpnG6KGiUTVvB3fXXWMKCY9mwkEv8CBUYAsq",
  "key40": "5rHUbetA5k3SXPSrAxoXSNwjtzwr28hzadcGipaVUt9Xq9qCJSEui2vA5BFtsYqSnzkCvmPkyEL2cYoYWxzXNFp9",
  "key41": "ShKpMiJaeTXaiDTASPfPt9WRbCHSvyrsxrFRqA5xo7QYnNpFga6Z8EHhBfWgoKh2iyWu2XLR9HhaXxRgYo4jjzi",
  "key42": "4LjuQ1SACQxRNPQr6yAhi8q2aUtZ5b2H1oDPiPPmQMwGhngN2vtttq7ehkcLaTwY4VJCShSs4WHDHZvvAVMu7Ajp",
  "key43": "YggzCQVaAg8enfrtHF6ic2SAJvbkix1PD45aDtmK5u4nqYUXNgRA36Xk3zdjimEDN2JNjRNuAag2GYSkGtSHnUm",
  "key44": "52QN2ChvA2uobHPedFE7jQSXsSP95ysi7ubUwfT6b1Ahr5sKEcSCepzXZ6XMc9CiHXoS1QZ7CSo1KouET1cgZnzs",
  "key45": "3qQShixtjmLqdTxaBcfkLPU2XTdmEhTMf5tv3BX7gLLk3E5CUjcxZ2FDYpqp6ujbskr6VXrXnQsFPg7c82LQW95g",
  "key46": "2Y3nyyf2HW6pJbP5hUd4vnvCqy2QSorsviRmSPr1a9Unu3WMGXqR3Lz1pCwkdiFUtuMMpezqhc6MzViKnQ4fEahQ"
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
