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
    "4na82aHPRyqZTrvkRCTQ68VWS5qPPfpv5rr1VA549Hu92dYFjad8uESZfWCjeZnbU5js4QLNgPrWZi1Mjy5BzJR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pzmpKKyRg7Yb9yQHc3mEZr19yvUHjkwLQqCmJVsKVsqm2gn3d6c5NFrL2cRskSzYNbd2g7Edg4gYD7tcc6rnPxf",
  "key1": "4YZMu9uNWQr21tWomUjcKCEkjDodQ8NaQ6n13hzZQWmDx3imCoxuJpLH8YmCQv9N9ZhvtEztH8itR7sqRjPTj4ar",
  "key2": "3HSiBG74mmsUsSsjN3eErCSni2te5Xi8wr3gWkPBD2MvZQ6o8ciaaGvEZPL351c5cy53RMAarJuySfDyy9bRVe5g",
  "key3": "293oDv2Ps7kioxSSFB4dQ9gCG2STYz3nYg7PqghMxRdjR6UTv71e6tk6KRmQAwaWiVwb6FYfxkQydagBJEM7Uozx",
  "key4": "6157Bgj6KPJ1TCzDXMn2gYyRX23p9V1tTJfW1J4VsxBREuTfw6kFY4r2VQdVMrtqJS6orSBdyBJx7EGDFFaVAJMb",
  "key5": "528MMxQ2D5XQUbREtQTxPvR2CPhnd5C83wkLYNNxuarAiAPmwRYCwhxhDJkFokS2siWBBdTT1XkdabeYitnpLFNK",
  "key6": "4J5gKVqvnAA7Ztdv4d3mrTy54HRzqmeufiorJJ6vPXr19R4vPyLChMzrYPHz2zR46nZFQrvcY48nwRzFUA3GW3FR",
  "key7": "HHbrGrh9k3CMMm9Sq6Bd8rsxChjadgN4MVywp9CqGkmymqMqcGjteVbqV6cyJnoRNP6WKDNppkoLJtHAfKrEyB9",
  "key8": "qD9mLmfeB8qUj6eBJotztrmetPJ7S4H2kJUAhJrJj9BpKMKke5ovFdqAyiPask3m21zmv6ckXAUQpBb1wQemSyo",
  "key9": "2QmVR5vUTgeNLRzW7eiXQa72HSW9JZqK6V7um2PXfkvG1YET8pgVtEeHv1uffrfQCqNsyRu289pHLNNLzroNrMMX",
  "key10": "4WWS95QeKtw213P4nTNiQusqntFAQ8MQCPcXpPMdgtbPrbRyEk4WFjaWrnaiCYCC4LBR9c3RndKQmqRwrifffJnV",
  "key11": "2zV4JZqgYi26qhPgruDfakRDqFgtpiUqQ1swuzjgwyFQyVvXaSBYfS1TMmavsmScueLg9DbXBfyxVo3azxegrasb",
  "key12": "2hGgvPHtCVknEmWmHMPt89Cz1XecbRijNrSpd2phy2Ry9gg5BJuWuGTaVrfuQpHvVqf3tRy5rZfF9TDHec62rkXQ",
  "key13": "3udcnj1ehYxNmBztYN11eZuPUjc2az1X8qRjXe6ffyAW7fTuSd6oKiCGv2oBNRTkJzaWNDNQv8zSG9BMZYSY3LXV",
  "key14": "67RJfiZyPYwX8txvvNcSM1uJf4jHyyficWXU81o61jwoXtb1FnpgAv4VDaPFeAbu61ANX92AUEttVWfLdM8Se1pC",
  "key15": "tUAiPu6Qek9GXDZ9dx5JyRsUavqtxsWi9aNQjuyfHUXNeexREWC2d7gNKxsCcRL9tqGYgaVWr1n9b2Du5TpaVDS",
  "key16": "4SR4enm9a7PyU3vUYzfA1VeFH3sf5YnMEPKxf7zd8eTESV4ADmwmztyBoUgTf89HAHGnUxwX86e7VY15mwXXtBw2",
  "key17": "41R9rS5ESeTLU8DNFgQug8zqFx97aGv8gUDLHKgJQAjaFnTsQgyvtGqiYmbZA26YeeNY27AKkLTgzgJj9PkGyoHR",
  "key18": "48pPHGt7aHkvDGHRzL4iNMmh5S1NFondMaEdEXhDpNjFufYWL58jGRs6QYK9RAtnbGVDxE2Q7iCPhC8AYn67yVXT",
  "key19": "3pcGiuZdcxaVr1FMVEp841Tt2iyanEyVn4iZ2V2Qwx7cF5KGSwFLtxoqxJ3ubom4QtbUmE8pJMQwsoQtEKxpxYji",
  "key20": "2xzEB49boXZNGSSkxBANT1oVGVVSXBp2jbLJq8P1VunwAbLaaudRS5nXztNyKdJdSdmXwkUx4kH7oickue6CUHn7",
  "key21": "4VEHaR2qNhEApY5vkRtVEsA4rqug5xZhMpkRyeyc7Xmz7SaVtuCEciAaWCgCrvhwgVC5CqVVbAX2nZUSpfgVAvpy",
  "key22": "3XcyGtcw293BQxszk1xcoTvJJ3MC9pFGMzfQotzwaaDiZn7Y3W61VpVDkytxeZToHDebghHgPGFBRbBRrmLQuuHK",
  "key23": "28mYo4QTn9W7AMHsZr8ewjJ3Z3bDKWAeJ5QNhfsfnorLoHhv6agRqJ1r6qnk474sNASqBaqPREgJTMW6Q3gQTVCB",
  "key24": "3VY36eduD7yuqHrxvDCQCVrzXdTDhvCSftacDBrgKENKTrxwBZxC3LUgfyW6SS27cZVeZmdBCiJf2EWusSBUAGcK",
  "key25": "3UUdJ1EHtRsrsRdx6GHrmuvhy2eJ2gcB9FR7LdStYPqkZPVApchbPy99QHf26BcUPNgHY2QF45xyxHNx3GsfMFTn",
  "key26": "3G33H9TSX5Ce3Kwx7Q7paBLhXnTTSvAudVtF9xm9vBFDMFt2erF4HmzJ8LZV2Yyti66obtGiSRkzRTFagRpYB7dG",
  "key27": "dVE6nE3qTo5AVBYeKjJFCy3be7L3tR9TKJKt63F1wwVSBKjbD7uP15AvkaWufbcqQjNLtJEmNYxHc1MfEPCKVZd",
  "key28": "3BH5mLQtc9Dy1YCYnFfHFgoWuWAQW1AA63gdskdoN6aiX67MEewHfm4nhdjNxgsWE2DuZ9hUxTWgxU69SQhDRutc",
  "key29": "3C4mF6ENfzdwrHyQMgssrhXzQyGdi4eWMV3TBVcLZmbC2gySVgwsrKk2qHxSqAtkHYA7dK87HkPf1qhqKRonoi7E",
  "key30": "wBoRLu1H31t2uinCp79nNa3oid3Qi7pSazbBzkKeW9Y74woF2AhJMke57rarzxPXpRKKcKVYHKD4qqeXfxzMfyR",
  "key31": "41wefMryKj9RivtQ5L1svHeAwpFk3MCRPMBxsYCyV1u8TvSFXeZVHmdXKJxm7tkFcF71oYKzc4H2WCCqdRN3UgEN",
  "key32": "5qiLb4MukQrTrQVNcL7YZT3i7RPTUsNEDckjNui5HPicuomJpVJbSvKGicCmtP4JTeS5qNXaAxPS4jUdunGSK2mQ",
  "key33": "2Sy1GCGt47w1crS2169sJGgEiUPjzxDaNhoQ2KRK3GJm1XHxtoVwVB45iAR9wgevmqtTnh8P5PPDtfTwZ5gmJekv",
  "key34": "4f9JZKVGDXjeJkKQ6HQQzNdB2wqhEG7TWtMrRUnEZYwyTVQESpuASnnti1QLZScy1raxJd5mCsc79xmjcS965dnd",
  "key35": "2AREErr6f4UGa9Po5ZfgfyppMJ3UJrvgCmDxooV2FsDq5fuBfj9meSx3mPde6TkkqLYrWrASxY7gtXqUadi2N5ti",
  "key36": "4Y43KyPse7Xnj76hRw4SPCYXnQSkvTxpzQb8rQsG9bXbajkivi1c7jeue7qfUMBVXSWziaPADUqCaekdDsm4y7oN",
  "key37": "5tqPaS3wwsFa4UkjogpkX1deoomxj9rJe3xbCBpwpfbZ5acHhSYBhR9NQi44KAey9qoybeZ7f7DroVwqEVC5KZpF",
  "key38": "4YfzMgnsAfYeBevos3xpwezdf8Vy4Ve4G9PEoEShmhGa7DrGyfoc4dkGwmu4cW6rQmWKB2HQDLQKXdhsi6TKWipr",
  "key39": "4CiTGBdm6JdJEVBU9TzbdaP86kXaHeXRDHtd48HRknRndhXyCXFxMJk37DjAMUmFK3kiMFnkdcvPJTkeZo3NEiNV",
  "key40": "4DsRXgCma79PkbvssXSuJHth7jsf4BmYQrbyQHwJQ13EjibaqzN21fHr2iKVtaTNKSSXzTGax8Cnrd28TATvvCQP",
  "key41": "4HLv1PQpGhJAHMgjdRwbFMvHtE5Qmc5uJW22N5AKGwEy5VfsF9R7KGTn3TFtQuAq2YLayQDp1fD3J4BcXcL57NaL",
  "key42": "NioM2cpj69auZ15ByguQFpeNUsu43Yyouf4vz7fShV2kDaf2SawYEdhyMrn7mxHVjZV4YQ5sU3vSwYBtguEvYbJ"
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
