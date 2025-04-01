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
    "63bvKAq7yi31ZZeRAmufC4VoFJH4X1qoHAqHYwnoTuL1nDaMV5YJ5kD1c8WNuepPpuVkA9kiq2qq53fviiodWsL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SveAoJvkCimtCpovGB5FAejWVLdhd7QwWBuG5VBZdAYkXRteJcSV4sEtAX63BnhU3i8kpzmGpYTVvjB5NPaWoFi",
  "key1": "5afEKAtx9hngPzkzkYJ2STyrmd8TbbZah1oKCbbS8hkKKbna33JZjpNaUYuSn2qmDmPNb2MhUpes78vnPUHY8n7L",
  "key2": "5xLNat6tT18cDWpnKEsN1vy3WMd2jM3TB7cp6SeF3K2hyj93u85WPnGRWkR97DEwQXRtRCKpPkbpvyNNTEjvV55K",
  "key3": "3Kdj57VcVNyQFVQp9VXTRKKPqxv4wrbd9TEWuN3AuKtgXLSsMQPwYDyGfw7XEzb4dN3ab8CXFV2uxis5xTo78dFv",
  "key4": "3LYNLJxPKMZsVTQZRFzcHeTxHVch2wUNnFeh2HxoyS2oc4kPWCtfQwUEecnpFu89wdWdrPYiHEHguRWR3dHWkyHP",
  "key5": "4tRxdceF8EEBC33PCBQjiaUN8zcfzoaKRWzQ49tRc7oM3YYzwyHD1bQh1p8BVv4pj2GV4DdSJsDasZdVAUy1EGmJ",
  "key6": "xXUJKho7LNAYHnPQ72TGuwELX26bgdfUP2FJsNsVAvFRBE23QKBsXRZ2RJYgFgoGzoT2YPW3LcBYP7H1XJZwHWZ",
  "key7": "qHgKLHtGs8dYNwELVj7kYY7ZX6p6B2LcXaAvnmmSy8YMUabQuG5e3bSd3PF2JDoCUM9zzNsNsT9nCPtVhLpyC9s",
  "key8": "3AYHsgq6X5L8Psrwh81QxZdMKCsEpbZHx2JH1Xr82GsrNdnzuhaXPcxFag1n4hrzAvHZHJThDpEEBmMqouFzrFi2",
  "key9": "2hjX1LqzS4o6mBG9ZHwfS8WYQkufUYhM6oVo91e1k4vPQnhgRxi44q9fsM14X6eStD5PZhoZ1aYxBP6QMEDYFphY",
  "key10": "3nFEDAQmAVmzN2GVXG6Cw2snLu7mPAddQrmLErGfA6tMSAm8rXCFuUAe1c6xJQdo4sBjFJsCQ1j6n3mugfEcP6g8",
  "key11": "2QHkeK6yohu3AEaaqKwXwEKMUCrNE2WMXZ5gXYKowfkDbLT7qSLVFLzWNmiYaB4ag5jU1r2jP3WM5TcugLjfJH6V",
  "key12": "2kHTyyDfVMR8anPRot8b2XmECD44jk3hDXuswfKA9LUaasf7pVAKTx4STKix7jg49BJ4hD2TJxGnbwJZHA2SQiX4",
  "key13": "5GVtaqxHubMN8tFaTeo9aP2cZajtxAD6GxzwGHoziF83pDYXzWtosS1mMnT1ctP5pAsCvoP1nLgKE4Wgt9gk4EEg",
  "key14": "53mLX8Do3rhD26iHisk3Uqnba7fvN6SE19dRWz2UDW1bLTqQzfsRL6BHkH9ux4xJQ5ThmXzb15r6eEaGvsyY6ijK",
  "key15": "5gvYxTmT1bf4maK7ULsuDS9VnX9udja2ProaWVrqr1ByiK6JjRnddAeG9we2u6VL3a7dTLaVzuy54Bp9upLW2ciK",
  "key16": "3rjUSghtvtDAGS2arfV9Vm4sU93jvuNiTzrnRsQDFNP2Zg2nZxfBfPP3V5L5mvd4p1pQMKMvYAN9jTfeJg1Zur8E",
  "key17": "5QsCjC17hSn9e95mSKuC24AywmP6wDJgAVNALYmhyCJM1oKeiyfmHyaL4ZSK9CRKhrxvK9rLUSuscJ2Ad1RgHnU",
  "key18": "4txTzdX6mWgWHZ8HX9NGzTkot5ndBQmYuVNXQ4GviiyuoVQEfgNu6WHLaxvZ93hPHJHWd59Qv8gSn6C9aduiNuvV",
  "key19": "2hNebmMsVD83BVZhic2hXZgS516dR71Wb2SJq6d5DdsAZSQYQ3owtmtdfsRZdoeXY3Zo6kDzmV74CSuMm6coMeTf",
  "key20": "VEPU8FiyyjMX98VTYtYUFdnXi7M1Bz4asD2PokaJ741oYzfqE4FnrFYU5fECzvgtT1rjvBzNLKxAdRvP39TbnyW",
  "key21": "4oXWV6WyshRRTRfMHFsnUXtTHCGd67h2Q9NFUKNTst7zkAhssxp89v1onyfvcju59iGKoUCsAd7x3xL61uf2kqJU",
  "key22": "3ZPe9pTNNCsFfFcGmQVsJu9ykhhxAFd6pnQCTTKik6HbDAn6CU2hDnUN9TuVitLfLbmBP7x1AL6f7AZoxUGLk8rx",
  "key23": "4vw1vPkyBLwwJFuwa6VckxbBUQyp9eEhWwaHQSFjnR6w8sdNTpLvTcF1frwXMBzACumxfgBuFm42N9P5EfUHsgZr",
  "key24": "4AB1QHyQdS6P2cin58dvDGJmyhmgfmmTTBP9jVDfoUiL6rEahUWxkUr9sx44zE54WEGaztxRKmbGeVegiSXNoisn",
  "key25": "LBajggfhuUUstov2qR9tX4kqM4qtnQBPsZRXE9uwZoM6f3Qgn9kFZePdGBD5pLRqd77ASt1uQQZAaq7nYEZsKK7",
  "key26": "3reMHmJezEqMN1QsDbdGrPdoijDs2szktkpdZaiS1bQGuYPWKJ2jwpD7VYDdQ6Gg5BMHyRJgQfdDzUf1Wt6Qtsb4",
  "key27": "431Da5nLKqu9NcoGxUNxQXwNueBm1TGVXXs74Bjk44RHM3nW6CApuJaHSED5qAnTbti3fpgioNHb7kUdk1iNLCnS",
  "key28": "2bSrF3TPLF22dRLTKX7zDYGioWoL7j9iX1qbTZB1HN1KxKE6MSZ9KRAsNGNJeMpxDP6X1ayP4hWvHxw2SqTqwnaF",
  "key29": "4KV4Zek68YD6gNH1Zqmvssc4KvbCAHdkJFP2m45T4eUXCywABerXwpWFMgnHe3yvMXLLVTvt5tAAAFKX3Wgh2aut",
  "key30": "2Pa4WasE3PhKnuzpUXWxeUqMqVQjT1JdxtRaBTCZ5efvXUFFXeLoLNxWN4qPpJ7JaRzTwvKR4X9XxS5RjrhcDvpw",
  "key31": "2aFcY7VwsbKKhN9tbHW8wG5thH7rhwFdSs7WF9PvuxS7auguLB7bwQLi8ReiVqS9TbGMmG932a17oz93vsmk4oZ5",
  "key32": "AXqJwjW6Dmizru6vZwVs1RgzJ7r6dkbCwzP7XU4BcoiBk6WTTZAFpdQvxjbZgvPHF8N8gm5q7t4fmS4is3Uvq3S",
  "key33": "VHoNBaZbpojWemhM9QvJ18njzfa1YaoK3aTG8TVGKMTT7NW3P5X2pep2syuB9ZWwPAseHhntK6rDDGfR4chGWye",
  "key34": "3qYkyfGhnBrmHLSQJodwvaaBFKrvHGRacMVMdSH4sTf9yk57pqoi4iGQAU1D3V8FCEsCK6xqGaLycxaXRfGYYUPB",
  "key35": "64TL3XJARPirwD1VuWTGKCLNuRKUyjPjJTfu23eB138b668eAC5JLzBmWtK1Da4TsiMTGL7HC7QcgzVm5ULMRUeS",
  "key36": "3haawix3pWJM31rNvcoavML6jdpoKE2r1anGkknywVpEKwxUVAWY1oWZ57BdZHDPcZjLaMUgpyDZiF8RPbJzJdie",
  "key37": "5QFNF1meADUWCUQt3vEJLVcAwFHUeZtpvBqsg3VKq67wh6HGn8bDVau9iSP7vUTFnko9DpLve4JaX9ZmkWALp6Ms",
  "key38": "2XSx3VeMf1GvKNA93FgAyPwmmmsLMqBWm8tMHVmCmRvRRpUzShc3sx2oPSgzfHuRqS1jcBVeV2MTQbxYVXuvwZfi",
  "key39": "5b4vhnWqhEDw6rsHwRG3ccmr4ucDrb2sYbrXb43T4cmv8kz5eMjKdeG9fD8kvu7681c5v6oJ64JNWV9b2wr182k9",
  "key40": "3CkXDoQ4CyiTLcZoSt1FDBTvYi1excZG8USDXqW9yTmmELYrWzXxPaN3SZv1MJDzzuUbbMTWnAkG6VhzpDVq6hec",
  "key41": "4AqcDgjDDKzyrFceVZhsqWjzqMuozUBo9ZG3KratCyZwMbhuJNWpeXvWsPy5ePHNtp3YQCGphnSeundbHyn88BPk"
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
