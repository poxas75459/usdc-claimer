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
    "5JFdhLu95PwVzLvjr7yCMAnrx1PcXMvdjLdMn99Av19pne5oS9nfQECU8c9dDLGjvWJtZfikKciCsxFNNMj6z6Sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNox6PMnLDLYUsxCoNJ1Jk93oFyb182BhFdCJxV5aNu7JB8GdjYRWFhf44ZhEF9Y2jVmLm1R87DYKXcLc9kSuNP",
  "key1": "4zWCAhhwkjbmEnaBqHbYevsc3xtw8Z57bbQm89ozuPBA6XwxdGHPCMKueJrJPr2VuwhcYAMhctFKKJkkkDgajDbg",
  "key2": "3Xq7UiVRziDo5dDbwArFhu57eqJbC3NzZ29Dyj8AdcZFGEx92RfjSiGA4hbBqGjgi8Hg5AFVUepFv8dxwAbFNaSK",
  "key3": "23suJsTdD7gufNt1CBnf72FY3Dy1EBHKriXBEi2UjSW2SC6XwrCeqDaB1Tvvf3TELSwXx5XGBcwBAE69ziExdwVm",
  "key4": "2ysxQTiqSd7YJJeCgiR3J5ETjuXrnsnF51B3JwNDjxaTxmCZs5Hpcv3ePhFJU4qSn3QueZyewPgVK7bJdLChYhGW",
  "key5": "3zESGi6QxwtKdZQzxKjceSrExf8CfzyGsekL8YuJ7YXp7N4DBJkaJbViezL8abbbLCXooKBpVfHVgxjrjA3VVRyW",
  "key6": "2h4PdsjDTj5s9YtV9PMDkGLq9e6XrShrVSzMFFdJoVDa15LveLLu9BwvtRjSxKYFYrVfgRKTX4Yw4SvWJp6PGPC4",
  "key7": "6PP8r64QwXP9KTwsRR31267SW7RqLKWJEbSc846DezLcEoMk6cNCxQDZEjiVP9xAx1RZc32NPjGmtVLaoi9wnbT",
  "key8": "2rvFseu2dj1kS2WMAw6mVmD3Sq5TEd6Y1ByPCsVb8J3vbguegUUfP9aswkVCvq9H49N7Nu9xqYM6EE9YvNvnkXhs",
  "key9": "2rkZo9wqyu8gkmTsyHGSvx6XAWtxGNM1fjXsg8Zjg438QmLeaoAwS1DjB8gc5ZgCjsHCL3NkWW7firfEBBJpQXVT",
  "key10": "2UN2q2NQN4qTP51KyrksPHKjsU86LVViHHy5cNMLdAeD2BXsvucD91pSWNmpznvN7KYZAZnXPp2oyk7nQkfvxzNs",
  "key11": "37VjX4NPueFALs2MJcLDPFKcR4n2HYbaMRMkWZqy9o36Cx8EAYGhdkztpdTawkPPNzvkiQZCAj977DGRcN8VsBn6",
  "key12": "47mK264irATEZaui8epR1EuX2a6evdC7Q1Tw42Z8zCKuo3CCYuQhpsjchGoSK15H7JCMuLkBWzp1xgBremhsbEDr",
  "key13": "4Um9hFRA3C682S5D8si1N4MGRrbti5hAyH6FuCv446HLafveqNFwvSn9WrEEeJhohx6w2pnGE8xZDJ3pfN1rbsh8",
  "key14": "3A9reX9xTAGaWsbr17h3R5nDVwjPe8A1UZW7wWTqVSMFiN7aTZCCbG4ENSNk4nnNi3fjrTVe3VCRa78rkfL8N2Cd",
  "key15": "wPjzDd3TDGVHY6x3DDikQRNas9VcrALindqcyegyor13joBcC4hDzyD75YQWAZ9NrDH7Ho3YVh9toyj5naMDihz",
  "key16": "2K7WJU1c7UEpjaGNosqFZ3da6e71i6i531E9TdjCPRoZwKE9mp325PCZt2Qm58vFKKmdfGo4nBSYUYVs4hfnVnfR",
  "key17": "2EiFraV8aP3CRpNPzAB9aeXxLtQj8WyhYqyZdcKRhrNuoqQdvwkJ2TwEccp7jU3E9UWeAcsi8kSG3GC9dFoZ6SuT",
  "key18": "Yd4LpsWWRBZa3BPcj4uUdFJeGsGRZsapsyyFvKLby2ugtWrkCiCV6Q7AU4agqRWHVx455puhnrc3bmn73xPcyDu",
  "key19": "Vrvz5Ew3fsrqDmXmBaTXJXnwbGwcLdn4HHW96Jf6aiz7kkGpYCwuj2tv2GRaoeunKPH5XncutRyAgwc8HJmiLUe",
  "key20": "3V3vyApDvBr3M9NctR89fwTYZiFxrnhzk2dBc3T9WxWE3QD3sRp2gPjrVF7UbvVPAkRY7pv2csHYrz6b689ZHhMM",
  "key21": "556rEytXnpGxTMHoCkPFPCzsPy5Ni1bCRfKv7Dj46kHVzNDqorWrgn43bkeG4Ga2BjEpscETM1VeVU8myFN28q4U",
  "key22": "2yxSRTzpNLTiXXrVMEw1XZ7a4tBVof2nHb18ozofic3hSKmufQa64HxFigoDWckfbRmbCRkjtrjGNh5MArX3LCuB",
  "key23": "4zR5oky13Dt3ciu3e6YoPNtntAatrj4gwBXoyQp63szGTW9uFTTfanQfLkt6nQ11wnhspbPp1d7xHDkEP1Jce4DU",
  "key24": "2TmBPTWqcmhM9fReDWpvdbTAq9N2Xc3Zmqgv6PzPdF3ypMHZFEh8asoBLnimyr4GYMPukRPrhWBTHfzt3s4LNCHu",
  "key25": "VEH6arwjwGUPsTaZ3QC4KofgUNpardnHXNfrx341KRGqjyv7o9taxtU4V4rjERzfB582Nrq9ch72z5zN8RWc13R",
  "key26": "46dWLQUud7FJQpLi6ErAv4n41GbiXBdXtDnG7zjmDqyYp8XJyaif7sizPxBzR4zdg2v1EDteQkYNEtcgKM1WXude",
  "key27": "5DcxhZSjaAYxxy26YFVw5KVJB3sT8sp1gYpgzmV2iC8X56utVVeFGBSse7P58afhncuahrgzDriawncE9wahXgpk",
  "key28": "2RHKxFSXXyoGANzcTwseUVPZVqvM9yCe9oFoibrgGFCuLhhnHJQfE754UciyCM4CgADFYfXSftnKgWmPKC5nVtth",
  "key29": "2q1e7ukN5D1ez7zvD1DWRTd5XSb4MP2fb5s6Sjo8fmrszvypY4ExSb8PtZzYrCyxT6Dh5wmPBSQvUmfhwPt3xwhE",
  "key30": "2Z6gBqfCAkfy8tioUvNmeZ37y9DEEBYoe8JxZ1QE8dcNkGrLisKa55xct3PrGdbrWezxcWmzqH5KH5YCZp9Niyde",
  "key31": "5qkjZp6ySE1gLcvtHH7maJdFhm6SH3Ujwy9V6kMJY9Kc4no4iniidTWMbKaGASixsaxNMUWYsbLcKWRH7XLuT3DV",
  "key32": "3e2degzAhazRYkgR9Jq55NM1vGsmKpUZxsmzbjchb8WGuF1tSZCKUzv6K5McQiWqWj9HmmnK2NyQEub42mVZqWBW",
  "key33": "3Ca2xWGnhUphJt4VG2GgxPdPVcMWwWwAZMz1Fo9zMkrMdGUNt5TfVqePLn1JYvxRTHbEENURfSLBBVKorjpEkA8f",
  "key34": "L38PmseUJsafNj7dARJd3FhhXawCgTCW9TwFCizCVmgpp7CV9qSBsAXaQhRKajn1sQ3444wiMYon4DQu6JFTLPm",
  "key35": "3iBbKy5B5ducPm7ar7hmuWZxa7x3m5PpUHhfHGbK5CR36yRmQvhWEWjKkpgDVTZAhUy7wstCmVY4rGt1NhGukuo",
  "key36": "3vJ42mpMoku7KUvqPAqBk97aWJdrscN54Gderbvvw3zGa9cohyhiRBPe6LLtze3iuX6YZaTeNqb7gNQFkHeCnykk",
  "key37": "2oEEP8ZwWMZJGJbRFTn5qn5xZT9gg4chMwASFNCGD8h3ds9sE5sF3TM6xL4n4EFJ8MrP6AfTjnX8dogtcP443LX1",
  "key38": "NkqCPAJ4D6PT9vZ9jKAPp7vSEPmucAu9kzM1c4zz69bE4TmGxNtSpaGRdSiRt6fYQdqsPzjaujR4w7zzhPTtjme",
  "key39": "2J6hnQkmn2uDd5ppvkFNvxobaFYm6qyp8LE2W6c3q5dXXL7h2E7HjX579hXXEvzQy446obTzYRUn6sGnsP6E49ga",
  "key40": "2eUaVv8GB1voxWCgmcBGLt8E5VgFVG6yqEzz3jB6PuUeABMzgHrbfX14ekAiXM2rbNAbDfp7yBsd8kxhYMui7R1B",
  "key41": "39m2ANB8BWjCXiEVg9zCcnWJAsBEJQqxzaR1npZgWYkcDqEBYZP8Hvf6e7PcFFSh3VtnXAYubNiSgyCgZHCLipnx",
  "key42": "3tphKqhM4LZzuHaPDR2TDua33ZyiahXZgJp52kdoLyBXLFi2ovmU9TzZdYjXazPmsMDwo1Mg7ofYTvBuzWrPkDBv",
  "key43": "24WRAC3feQA4VhKc3x3CxAnbBf8Gph3v7gp68vyC6khX8eDwKaz1tNi8MSJvVPq9WwKHU4PrKBnzkfTj3NASfX9D",
  "key44": "3Mg5hpMBY5egnLGKvKYxr1MxthA3Avwm42KcVS267RQbZ2WFCYLmbDGiyQDHk7zX3QzYehuQa6Zy69G4Wr1JfunH",
  "key45": "ZM4ZtE3nLyTN1Eq5oLDtLsLdDd5qgsYWHyKx2q3V1WMhkEPbCdizmdoGFpcBEPurq1SHZL9G7Pekwb2hsRz8uhX"
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
