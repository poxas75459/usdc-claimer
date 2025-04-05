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
    "3663EehksEKRqd8b2QiJduXadjQfmsdSuEWuXLfzRUyfE1BmqKeyuxaLj1pq2iy2H3dxuex9bRg2NLTuAjXCQkkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rSEFREAJjjJPfqcDNTVZaV2FmcaG3bC2MqRPcHgPvcdNBcHYmiAHHCsNhNZqiLBkEgcYLKsTtMbLqDdka8X9juu",
  "key1": "4iiS2MV3TxomKVsnEP7zq22jBCXWFhUV2WZxTVdLfgLVjB3Ywt6xRw5Tzb3FdsLuhdtnZH9GPJVEVVSV1tQK4U7h",
  "key2": "3vMFsz1DisuzqE7sXgn17jKaimZ4e3ofCymCzPDwVDxtbSRhbjttCs1aiHtYNavJZn57DH8Ud5UApuidkMeDssRj",
  "key3": "28seTn46xNt8VuHQeXxhzvzbaUD1F3Tygt9C5iboVgxSe9unPDP6NUsr9cndhoaf2qHibRRo7d577Ex36qEAqgtk",
  "key4": "4iWVwa4ca2nnzrJ6BeSxbUsibdN4XfL5K3rQqKw5dgTyWzNNjqv8MbJ4ZL2LPapquMhyeSuFBRfTrvcB6UDtQ6Tj",
  "key5": "3XVFsCxtpkhtR7xW431EqxZfmE4pHQgqcqmWhrCuXhBuh5JzrHabMNRAaeeHqQ3r3UERb7r5sgMDLcsVCFYWq9tE",
  "key6": "ehcxddofnujiDwWFsn2a2tGaEMqrdZZkUxKJg5P6Mk3AzYQdQSnEZR7AcWpDy8WdUbCWB4sy7rXrBrsvmYYCCrS",
  "key7": "3bCv6ec4NT9To5d7eYZkC6FWPfRbVjwgZ1Hek6j3PUQYE12LFoHEULDo2Sv9PaTG29RqHxQAUMmEYXFHxKUGvHkG",
  "key8": "5KPmMcmRvNCGoAgbw5jiBbns6xXj1aZLVcqHZHHKjooLXHT1LWytCh76tsGDUPjHE1yXMhnTKwExSm4tPo34vqPQ",
  "key9": "652A1RaLYvTW3iAek4DGTs79kEh2WWcyU3xg34VBLv2YyCXdx1yBiLoHnEJvFh8sXGn3M3j4NxdAG5LyYnVmKe6Q",
  "key10": "4bBCXnBcXYa6LLKeAozWUMXKukYK3Jb8MNwyGLvrQzQ6SiBhXm4tdARsgHU21RBaZEhR6LeqwMn4chtoAw8oA8zX",
  "key11": "3MbxhiUmHy12brnzyZEtYRERzQzV8cTKMBQ1qmMTsGG5HiAgcw7hxY7KE4FzqBPHUFHSACg6WrQ1S8vpEDVSrhbR",
  "key12": "5BzqJ2S8s8R4f95bJtAWZyT9jyN1FwV9FVaJRqJWSZssYqbz2j2CnkGse7SpqTF1cboQbWAQZwqTCLJnAASDfAkR",
  "key13": "2ogDseuBwGNkjawrLxkpARHkHrsCDEkaYpMhQ8Eae9yoGB3LB25CPPtCCQRkfP81NRcA2UqkNKDf5G2aVhcAVX6H",
  "key14": "Us84foAoWmMbNKpQ7HDL4J1ayNnarUB7VkYYEraT3ymQQwY7xeAYJoWZZiASXhEcJuxZw7ZSUvGTxhYqcpkLYFb",
  "key15": "5di8FRivL9pwU7GvBUskPqRdmyGG8cPmAfhRmzvAWC34TawfFRVm32nsBqBNLDiNUxBdjJa29QYgfQBbyJggcRXP",
  "key16": "3T9yn4Kizd9orAiKygKmdsVXVQdbNU6mh2faHv5r8Ys8qzxdUdNhTV1Ddn2vVN2GNV9qkAcbr45rH7e6kz5hCnpD",
  "key17": "4XonroB9GgB6fLR8kdqRyD3vZWHhcMKpmgcDRvZC884iSFa46NzXvrjtpPSbTGUZy1pxNgdSjzZ9pXndzZiRoain",
  "key18": "4jgMrWA1pQVHUykM73UdXBAeZ5BTqRwkemVN9meR5mNNNu7Hp8mJLnSsDTaMcYQgp9cVdWVhpMoTYYPmXNCDevyc",
  "key19": "625Si9eB2sqiW7CnA2GJu7HcZFH4ceyzYQkqiaRE2fn7owb78do4Uf9r3V7e2wmoiCDDvmPfYyMeW4FPheAJkg6D",
  "key20": "3g4HR4Mn98pEH1vnyP2NdAz2b3wb5rA4AUkpEgDLaTznyqnSB8KKoewnTyXEuU8UVS7B7biKATdN436MnaEY3tE2",
  "key21": "4kGWMfwzBtmr7g97RoXLA9Qe1mDT3u4xpcwtP28Vubt1VRGzPKKo5H4DgEC1X8cJGbFTWxdg2NiK3TJjxsHkPPJe",
  "key22": "xyjJ7ZikvpcbLuG5ZGkGrU9hRPjXE8CVQd8pf6N2iTqYgx8RFn3VQF4b3Vgci8irQm6DgnJHSx8oenEikp7sxm7",
  "key23": "2MNiKvrWkDo1RoEXMoRyjT6sCmn5Vr1PWkYXszvxfNVK75WbpMfrAHVxn7qTBfZqn93b94nuMxB14WKfaxuetrRs",
  "key24": "4BfAh6xkRv27ekjyDzZfeMuFjKhoA85Qycr8YUEYUL9y8ficxKs8sgBpMRgkf2EsQb2yTzjQqej2HYwP1ZtRyxaR",
  "key25": "4Q6wWTtyupd1fpeXTsYxSbzHq5wZ9RJsWqU8fbUcDA3KL1RiL3GsBCr5zopanqWLohc2QsAc6rHWepDcNbiHpDdi",
  "key26": "66HCSfSBJM9CfgGL59FCKzo8AoaHhGniGi3yryPxKBeYUH8QjeWKUDNEKLzWreeow7ZXPpgPb32iDDKaRmo3crot",
  "key27": "2atFbzNKKcc3u41cxorkT8J1XseALQ716eFU4PnfB6nmgLNTGjYQKjZSb6MB4e5Fh4MLMTJAs6MC2Khu3rxLEBdT",
  "key28": "5v1orTh7FUY6rDVSaXT95ejU5itBQbwTXCAjCCwPDTkVp6ZTd6uSMnEy5rg8n8fG4Z3F14NUc3xwYrS8Q1Emwvno",
  "key29": "4zasTe4jXL8BZhZiJSt6cW9rkt5EVE2Pa7T4WB5fyF3BkRtcvErbg9mM5rCACa6V4cXFn6oBvMhxFajoLChYWfWQ",
  "key30": "4kTTMqeqqzeutmgHvAfPJQRKpKPRovZeTY5N5W5DAta8xMn3q39nMqn5gG3YZDwqgr2hZYpgPJDdEbvT5rHXJdza",
  "key31": "3WntjGpLcPBGSwQokpjMVFzRrUcwbcJJpw4fywYMKgPZYudEaUViS2mtXJYvLc6H1zwK4mdnCkWoTzgLjQPSMa1Q",
  "key32": "2VnSB4Kj3Wq1d8hiBKQGDCoptULpMSzxk98SAQhRgyTgRq3HkbtKdLPcbpSs22rx66D1CDvz4v7RUkJgbUXMD2QW",
  "key33": "3EGZSk1YXTGDaz8XAMoAAAYEH49K2sqRhkRpHBjBdTgZLwosWHd4efkVDx8hH3ZNDT7YQDDaA67gDtBhmyctg5i6",
  "key34": "5d7P8NATmabpFfkgup8QWPBf4VGp1dNJTvmHYGPjDqdMmr8TousgFAcfqZEahNZxtBKjz2wy81Uyu1RDahX5ZbGT",
  "key35": "3Xxe2KNh2PvUFWz8Vi44mp4k1CnNeY4aGz1yo4EEZW2TWXNPWJRVFoKDqvyij3XhTuDk1LRdD8XwctWymr7QHrk9",
  "key36": "2mmRNNpyf8UozLLxkFjnEffNwjmAym5GXRw6KgWTdHafH8aQGiHe5BbGo5bhQKR51o1rJyxJpz1B2o6JBbLUhmw5",
  "key37": "53qd2zUJGM15FrMYPv8aQCXUWj8CxmF1qv3LzfAvG1WABcFXwjHFStLEAGjQVvGFQF13WBi2cWtxXBHD36XBLngs",
  "key38": "4aAMZLNxJbGfmrEZaiLrVG88A71o6q3bQpPmGdvj79FCVRCLLYR9kcWYLSsFxYL9Dz2UqLco1mhB3HL7fea9Pxiw",
  "key39": "2buSkdLVbSaV6mnahnyPd7Kna8yxvPVDAnw1oVd9gJPvkhjS996AAdS4LrBoNgsbBouDWKXUD63VwoLoxpk6VnmA",
  "key40": "5kJ9oNEjajZwpgx1TrF1g4LDoSGUKhGvrCZhJvGCY64DpDkNavZZsnYacjwr9zZRxzRmJQ2GvKtuChEiu6UZ9AcX",
  "key41": "3TqXBb3761oVgnjqxfy9SSnBAFrxQEdo1c9qR9EXgM3MF7mF5dSfxfdsZYE3FBLAqoZ8HrTdHyXNpF72yaDjZ9WC",
  "key42": "4RUXJoaVMtvB7yQ28q4jnGiW3QfJxbTCxMKwfMENL6tFLCqz3vkV59XPz35buTxaSQCPHSgqoTBV6TgftU14vqmR",
  "key43": "Pc8MWVFjHeVpS9tKdQ77zwSvao6tJsCSPFX1xcmPyzsrkyU5tNw2WTq9DmqAUFqvK5r4jzVwyuiWAZnzzmsg66k",
  "key44": "28HbuuHNfsgrVFVyD2NtW5bAoa2B8eRcvVHiQLacMD5uLENEfD3iF2fPsAJ8J6RhX218sACRTfYAZaU6LWvQb9S8",
  "key45": "3Bcfi9KSmfaG13KCBmSPm16JMtemtFVnF54U4u2kKsSrLBZPBub4dEcEpDpyYtWoDRtdyvqwnujP5sTvMHjA12Kq",
  "key46": "dSSUtX5t6b4aAWg21hPWK8KTuF1eDEP3Y5EpbCV2EK44Tp3SE4LDiyLvEwZgFJvYvW51q3CuFy2LpebUDjDcZQy",
  "key47": "1Gd79c7DPP5Q8ow3gQVJUe3VJutm6rAM6zxL9xdDkVmoRk3f4LXUYEuqVdwRfqYrvLXnyrzMqJAaS6L2QQgHU9E",
  "key48": "5sH2mYuTcL3HS5bPHo8EgxubM3QFhCg4uWsjiXuZCLCRajWDp4B1p41kJGesumW9DodRvJxuvvTJpfKes1qjE3bU"
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
