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
    "2TXPNLWJKULBoMQBt4ToQAugWf1xUKwYJ6xoyC6989oEUcJjZsbvzPqT8b7GPeXT1Td1HYDBvWn3eXvrVWb5YBdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21wH3UaPxj9Mr4xsnBEeeMRjQWQzibu133jbLXXXkJaGoEX63RrMBE6j9xcAQ1GYvMxvod5AJjpqxM2WGVAJdhyt",
  "key1": "34fNwzDLKZJgPPLyc7w8sCjhuT2epLTNvzDx3UopyRzToomEUcSHmPbJqqUbMHERyoabG59h7vdrntMbot8op84s",
  "key2": "5tvrioZgMWfx448ZHrxZSZ1uAJRtMfBK3Thq9cuSgApgqjFVwbT6BXHgk6sj32oBKsvprmP9uUocUXog46y3BaTx",
  "key3": "4ueteaT2EnFiocxvuPT9oHjFCUh3XysUX7hTxxZQnxiL4XreCdZnjNWdLYfoikMFeTeN4WbvkDBtUXw8jHL6nw7s",
  "key4": "5afUpWdRhmzp9mR7nB6Da1GSy6jWVEkMQceZvgmjeC822tDppG2nMVuqBhfMWSbpZ99QU5kriwk5jS59rc8SW9PZ",
  "key5": "2ErvQSNcTqCMdy8FRHWM1w1jf3npdRRujN8VyDJsfe1waht5MCqE9ax1roN1PrEBjcNDsYcwEkQuB7m9jHqiiWpJ",
  "key6": "2bD1z1ZYZBFso4yKNTwNdoni4mnEQeuPNkgYaUHf99iAeYat6NgXvxhdY84ibWakxiVhpaJ6CvyMaVppwoCE655i",
  "key7": "5ZjidQcjPoTAMdHKiSUp3Z9HuMjWwYaqkXdW7He9w5CMTAKd1j4s6narq4EQJS1GwWukQ3bvKa6ehDQpZ4q3XSbg",
  "key8": "tE8dvV73eLKNsszkgxwVni9taNtGNi2URVupoVfMA5EgyDn6beFFmfC41Snpf4MW92nMhzjLU19FkZF4q6EzdqD",
  "key9": "2An2jrVgDM2Wiez6eVKK7dQ8BiE8f7EQP6w93zNWkYemhAx2DEibKLnZCFgiw94Cyu38pMJcN4wexLVqDJXupb9y",
  "key10": "3tpLypV6NbJq1i8GqhPbSRimBiYuvSyg6XpUa2ay31ZNDR8i1cGJq1igjksGmSskwzhPhkJGx38we1JXM5ionxkd",
  "key11": "24XrDaVKcwYp4LsAC1hFSLF5BDVFDFhtLfxSgGdzuA7P5jDHefBEPCnctAH6Dyz6DLkqRfX1iVCM2gL1ZxVUeGyy",
  "key12": "4UG4Cgnna7g1Cb1AefscSrT6GULJr6uRiUi8pBkzsEgwU1JMrZvrJaXbzZP9nHw1o7XNfSkNLdtWs5w6yNfV9jAW",
  "key13": "5ZCDbm1cWnybfmW2YbCXKEFxdRFmqsy5LecrHK4c6CuD2zcnCMjsnJHRG9SbbGpHTXgA81qer5HeiZx9eajsfhrL",
  "key14": "5Wfs5bARVsu18mNzg7axrPX3e5vxE6yEA5abBbbGE5BMSYNaVaBkhaRVPaFkpqn8sNhbW7S9F8LBFQo1vmPDqSMp",
  "key15": "66Sxx2i73K8duoxnEXUy53L7j6qDupDm6EA9NcKv47MhocYSRuYxRi4Ch8K1bPGaBqckLS65DqE5rwwsjkjgLGh5",
  "key16": "akSYwq5DupiWtrmm6u8htB6kqWrsLXezk5V2deY5BKBtGenxqcMcpsSHPpDXrYATPDCACoixzHVxawAbep2Jpa2",
  "key17": "52yo4NE38ReEGpVWGJ6ewFH4KGCnWvF5V9tpPwAcNaV2Y6pPCoCjYnsxypVL3eTQqSvcX7nsGvEUS11e4c9e9PPb",
  "key18": "2o19ndSNdZ8tPGxXL6stuCcxyjub3MvPmjH4mJouLb29SPxAGWx41FtPTtYkDQ55RWDwrhZuYSESSJ9FPFjom9tY",
  "key19": "2eNNbpCkVYsJ3fEYxRn1C9abBrJoeX9xLHivSooAJeiNHfjBa5UWczDqyVm1Wm966cJZ9GqA77q5iNSW33NifZhD",
  "key20": "4XyPkhw4vm77p2ZTRb3MwTxDAEGRSW3b4qFApsgZLDD95XYQkDJRQBhxxdAyrPgmbdYk42pwgdvUfJJoLJPzKS8v",
  "key21": "4G8itq5zneSArGeiq5ehezyie6gWJSEuvf3gWZDN9BSTU1RS88gzLPmWhdnoycAMYXWuaPURe4FLvwHxHnSun3Ay",
  "key22": "3uaLheydZsNg825MpArx47i91ZEFFsuzy6od9abRVFqdYJQZEPDY8iwgVYGM9c15r4rQChiJ3W9UurXAxyTvud61",
  "key23": "3z1Vtss8c5hmrbTmvZEq7kp2S2nyd9meYK89NxkLF7N8wizABbaPvCxZKbJDP5DkVog556cpFd4qbUeGY4hGJXBj",
  "key24": "3whaTREq9PBAPnrzmrkNwYvq7W5RVkTZ52iqi4LRMA32Zj1nVecQfrzw24Y9yKLLJ141EubtYove65vjgHGKhUiq",
  "key25": "2kG6rVj6ekuMCuc2icckekYALVGBw9W9Wtje3ffaVHEunngtBEsU57NV7juXtzj8E4tXwR59efRuenr6AxFYaUGR",
  "key26": "2Z5rG9xMER42PPFCJeC55bDStfJquGNS6kxGNoPUrH1XsoUEEfyxf1n483Ec6CBXSHz4Kkx9FmvGAjLC6LnFPJhf",
  "key27": "5gtBm5TC648eTLxd5ueiUJkRrZHVCnYcWDPSJfyLwdky4XRt83S9rnJkk5KJNJAfQSsRFEk6Gt5kcGiqRWoB61x1",
  "key28": "5tgJSowGe3LpahbuFheRaTJZqaF1MSS7af2h9dQcZz5Lv5JkfddEHxA1E43edYUt7F2tj8XyGKQXzmZ6e8VatVPN",
  "key29": "4gYM7z4HYAvgL326ogdxA6t4RnTfeHAt6YeSaC9mHQkhxFQF746Hfty83oAPzv1RpBFcj3wSLdzDd2XvqysG47sc",
  "key30": "3LjnjJ8T6GmZ65ca4AYzJm4jxmjAsjcPhx72PJyP1xTR4jULddP23y5o6v9e6Ug5fxSERKcpJCiq4QQYZjGMoTC8",
  "key31": "2CBzzNaSiA4wGEY48VeuzNVYhSPCfjX6cYi96f2Rd34sUeJPbL1vGbuNXFFpPvtbBpU4vzBHnz8uPFYQN4b8321L",
  "key32": "3MfCpE3A2tRuWQNDDCkPykmgEPxbwPXbf5Eeq2vyAhZE1Tk6NPfzfdThp5eAsA82xkqqhjqmkCLTFLd135s7eKfQ",
  "key33": "3nMTtAqGi643aNeHMh6AJx4iUkjuZystNzHeR9sdkV5rLAc4PjPNakwQBf16iLKMnAMZEiu4soxHeuYQzUZffu8c",
  "key34": "3RpgFXQkqfgqk9UBEZaBaeW42QvhRHiRNzHJgP1wwvShYWCFKYxFRCWt46XfBXBSUHZeKiWJzTqWFyKPwQ5KQHmS",
  "key35": "2b836ZgWCLUQB3bUQHBD2dad2UMiUVFtwwT1SnHsToVi1GGzncaK66PazU61ZTxWetfHagu9njAnAzVUmE66rhRy"
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
