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
    "4b4wH38kAYH4BNAqRy7GJS3wBjPZPDeSEC98PFDcVMe7AN89cbfZ9i3RTVCxRDRkHMmiBYcV7LUpHBWPiEF52sEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxKsn8yJCcnRuhGjS8H57BphswPBJ36Dp6U3xyDffKdsLV4h2mynE2dhZRi8kEH8YSEXcktuYHEtzjSiEECYKiE",
  "key1": "3REUVYVquYtHgRzUdfDnku9ZMYDQmcS4tve6Y5R4ZpSZJDawvVriaDXXbw5w3ms4EdbKPegGn3Hr9FkX3vFdUhzQ",
  "key2": "4wEjEQscZ3rNUdTKWkmAzANowXDim2X4z4m1QzACo2mo3XUg34cidJEWFqtL2jLAuny1g8dyd6DZsKW3xxNgcGge",
  "key3": "2v4otpawhmAcokZgNPTJquqKrJkUeU3NHx617Uw8ahwrYhRyMzeSkfxyJykRWZqi8NkfPp74A6pHBGjWJJkKVAv2",
  "key4": "YGskk8pkj992mqXEYJrqEJLqqo578c55hJaCtRcEJ26n5bfxn49RkxJTv7PsokeUPGHuVAcSp6NFJt4N7NPsyk7",
  "key5": "2mG9CbGQ7NXPu4G2tbPQsyoLkGk4nnfqACdYN8ctX9UL7QzYXdfAHtx9eXTjy3YFDe7UmDNC5JBD295hvsRvuBpe",
  "key6": "459WWLET3Gjohgt4bs4fUz8cqoQjh3RNYVAeURcsCYhgKozc15DeVwUFAor4NAh3ZBnHhfCpzJ5TemfAWbnzTkDw",
  "key7": "4L2WcahczNQ6qbC1XCrfUfqqjr3VUBnDV652w5tQ2byWptYcPjrMS5m66TBoArHT451goxZZJuB1tCSTryntuQYp",
  "key8": "2miQXFNqPbDpaXQbjMFv7KxrFK51Nb4MT6XmASCaYGzRJuzPoG4PYFVgJRXfcdS3d5vkMzrp4rtZrLAYDMfcYAX4",
  "key9": "3hnnyBMjWvEM4nydQz8WU3dzJKTT8BHoNQx2z2AGac4edtSMbpsCgKFhwVjB32ZJtWHkYg62oX2BTbYSRjRCZMSb",
  "key10": "44ALBsnE1Vtk8aCNTz8PLwCu2rAG6pDnDHyFp4nvCev1DA21he9YeDpQ7SgcPYyJYreDz79gaVkn9hvNyDrx9162",
  "key11": "2hhrgU78P4HamARjfWdFuAJuLujBS2oA1akn3rfWSFrgrU4smVxHwqiFfvUpiQ1RGrhCGu3KaNiFWoaxHAiRVfHo",
  "key12": "4gZrPwvYUeA7dcxJG1FVy3DAj4PNW6uWGfKY7ECwyBsFynTWyi2x1gdUjb67ZJJeucuFG8UntTDtmFHVB4LmBvTx",
  "key13": "4vjUKwNzjF7RbS2s187wQkznXABie9m8dAE7vywj1hs8pYS1ip2CqsTT3YHPT4yhLNgDxrFXbHioTAUZBktfUeid",
  "key14": "3kEUrmPakHxSFNxRVDaHkxY9vgj8vcp5iem43Aw3fev4FpEG6fqZta7tKj9rKAwAL4FXEd9gEyFNTTMJvByUKBRS",
  "key15": "8Xb7EJbYTqGFBCbCPxwRJcEN4NZwGXitNAH5azvwUg9zktgNvHi57CqkcbMt8FNEpAcVS6D4fMGAj9byEvcaUS9",
  "key16": "4NJjv3LRk62Nvv6B4xUtCBqK7Kox4D61njCkY1KAr1mNfgKsi4fnPKDZNTQXAmq8En7UQFRxLqbPuCtLMWjusfuo",
  "key17": "45TEASogwMMV9y8ud4zZWNN7TCkg6zMs2ponJYH1hkLUiarZMNqjAdEb5ks8MDgVfx76EHUKTgbrKf1x3ojzBqmd",
  "key18": "31mKJLbw6E5SwQGiiAEDnmNG2yCD6mfnStaQwhesZjsdDsAaDFXzh8jhXjBbqukMXmeJQcvmq1u1m1U3v7v4odAg",
  "key19": "VuFcstPuhMoeqBGtUSpwek8qo8wBj1czxRYkXx7tG5t33SuHyK8SUEqNM4W4iVjnTcDwVDiydHyyUjDjACRgp71",
  "key20": "5CtieqdEy1ppx33YkUGPqJjnpkk92PK5zPXWfbahtESocAcgPXkqcitx8WbJYQ6QcwKCrXiWz599d9PFT3qMAZLy",
  "key21": "59sHAAg1u5fVLebjQ6WLfARiF9cqSbaGqP9GzjuvuvKZXQLshQWuVPbe1rUTjXuW856k6AHEuN2HQosHSbeEcPbH",
  "key22": "636YSSSTwPMs4CwEvafY6iGS8GmKrEZ9Y6nxjTRzWwmd3ZoNVRdv8hbRtHrzQsY2r8FbuEUXsrgRdMgMn5iC674W",
  "key23": "2Tm5umbQekQBocJX6mPtwbP6zJya5Mw9pSbzV3kUCQ22FfauU4ETSVLss16T4tYxj2dmpDDUtnnWW8GZGXuAui6h",
  "key24": "VPaxYS7AsfFuAwQ8syedm14zTvNcNrpyYwcF5nxeJvSChTonGLMa8LizQmnYMy4EtayA7BuXzd91UX8Cm8BqRLW",
  "key25": "39QQxF1kXvue33ar9wh8P5EBKYWPbQk3GVU3A1PWZ3kWWoczJGogLxjL4e9LL8fwKMWRhkSFgAFHja7BTgaFWjcb",
  "key26": "4wdK3Wqj2yx31TWSgtuh7QZ3MM2W8xsQ4oDTa67mdjPP5mXEKM9njyyGuYFViMF5znCYrqCmBs2QBJUV9fVX466p",
  "key27": "4VM8SHRtH48bAH1C25hYYWtTZs7d2PzxH9mBt9LVaYCPfvro2pAjCYjULuAMfKvY5JotKtuaQ6zv4HGNusNA66Cs",
  "key28": "67SMbwdsUuXVj7r9vUf9VKgshrgqQvFdfAVXscqaBeTzgjLc5LAKxh9Sq2uyfFw471dvTpYGJEjC74xzqLisD3Ks",
  "key29": "3Xm2s7gndYU2iWFjz6YenY1KxhwNY1AwxDAS5XHPTvAStxjLooUxw4iqoYiEofNkD1TDaCENyKK3LpNFexfJFxbZ",
  "key30": "5Ed5PXmpLTDqUg6bjVaxrPxMyi1cKWGzpxwLKm8CZiNHBYMLp9SyYe5dCwFRSrcz1M1UU6k8HMuu2BE7SwnPNDY4",
  "key31": "EbEw3iseeH8BK5BGc8AWGoMzHH3jsf3TbSVghE9yoBU3Xj8W2JzbNiYrHgquSzsoR6DkP9WENWJrQkCYK4DuFNK",
  "key32": "3qoNRSc3C2NXNc35efTHHnKif3KLTrXc98uTf4oHMbcnbnjeC5hiwNSGiMSa4CcSzsyZL5ft5CAtEfM33SdViYNT",
  "key33": "3WaDJHkseHJAoQcguE95d3aN7kGNbHzXHYqNV4yJzrJxetNAupZuHG12g4bjtK621qjsNs7TPkdAdq9bgwYqFfEx",
  "key34": "3bxm234V2tavEo4KLwd7jqWpPPyP2mMoxJpUgWPiHRFkfzRivH7RijdoAGkmWmxboWwd293PKWgfunaDatPZmYzw",
  "key35": "2eB13iVbeRSmtJZf2jEVBh8RnUbaKJtSZyfcypVveFTS1DVMSLNxBxzPnRbU87qzBnZqPUmvtpVafagPUdQDPeNC",
  "key36": "5fvg1aWDj6ckVgSrkuVwekGk6j4tTZXt4nVNbUXX3kXkCrjk8CQV9R8Unypfg1cefUTh6pMBkFfNGbHsMzQkvCDd",
  "key37": "32hFicscprXZUk1xfoUvLRYjQsz2XpSNFnv3V85cMgtjf6gRztmomEMMc5kKhdXTLvxthquFYhhhiJH2RvdCTipn",
  "key38": "66qaL2zaNU6gsGKQCZDXEWz8K5tbK7bQb7b7xr5nv8A57oRV3ihM8KThKPixuwMGW8f4BcGLeWKF9guyVQVohsiS",
  "key39": "2SL5mhe8Pxgb7Lz1Tafod3sCK8ebt9reeJoK3An4sEHGahV8wEgmZmpHSQx3TThnK8LpdP9aSJyR9VHpJez4mES",
  "key40": "4FpZ8C2fRUWnEr2nreF2yaj82dyCLUr9727DVFa7HJS4qnYFD4APb6kZGpsYQbqhtBbuojyDb8Gzo8asDBaeKPuY",
  "key41": "5z5o8C6GdGz1YJKyNiJiok2EXCqjY6tuaFnsDYJj3a5znpYuhm4aq6SSmaswrY9vcuwUpiH5fgueH4P5K9WZoYMr",
  "key42": "58w57DF14hwmGqXBiXdBuJZLr24YQNeCy3eGeo3Yrd17wtLGJ4btaNtbiNRAsEMBX6j6bf8GBXhnNFZHSVgekSL9",
  "key43": "2sUkRkiKSos4cTX7NAT3kvdAEGpSZXKhghv5QvmtJ5KuU2x2VPrSEx6TsfTKdSvJgGT3F711qttfBBPjj4MPE48C"
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
