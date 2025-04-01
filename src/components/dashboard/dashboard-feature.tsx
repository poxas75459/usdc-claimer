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
    "3ms2bSzAqrFy5DS69Xg4WEkze6UrfmAAPJCUK6vhhtrPmHP3AGnFUKbqmLpJRY52ePzhJGtfbAt1TVEk1GubfENY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNW7cqW1MRfxoUw9SBVbn1GX4iy42Yp4koqzaP4u5o34foaonRCCDfVnNaCCU4DFP6tVtX1tjZDAdRvCsEH3LYF",
  "key1": "38kV5zUdidWvv1kNXu681Atu5q36TXKSEwq98AsQZMFxeiNNSn99FdLxHg9ousNMjSJs2kRSDzUjEvW9Mjcv2Vo5",
  "key2": "4LqMBpNDmezShybygjgHcHcp5GKuGKBRSKmEhdy56vF9vhpfT1pUrq4C2Be8hfLn7MBgdwuac8D9tkjV5xZJFE2L",
  "key3": "5XThM58XqFu5rakL5oucNuqVsnS8sbTJQwdQa1aWUDDw1DKjm92hWCHKHr1ZXoVZY38w9ZHazRxkBuEBh9mKFNMc",
  "key4": "5htR65XGEaPBtCYL5Yb3wTRZEv1HvWg8vh2PEtvTtHkxRFMRn27PTBigeqzbo3se2BsWzX1d8KfgurnL1RRrCppa",
  "key5": "62RpCxZF9nL3rpExE3m6Jjk7NriR5AcWP1Qyt2bjFoLqAq3XkhCBGNAc8sVrC8JtgPti4RnbTM5aBMsC6zQzZdoY",
  "key6": "3U7r8VXB87VradcMUfXRo5cTW7mDY5awKXKCAsmBmzhY5r13w7QaLUvdMa32JZjnZLQkuwAgF1roqNLKNV28YduE",
  "key7": "3viFfekmwjrTkoYFFJ6Ld4B66ZsMuaV6bzHGm7n1vMbPXR5nzJdHWuyJNbvgRMpt7yz1xcTnGTApGuwgyi8bnPWx",
  "key8": "4jHzCTbuAvNCwzkLdfTyasnmm1M3WgRHuGrQLUmwPBYk3wbDvNWu95geow8tnfDqUa83LJ2qojBwaDprsCaZT8Es",
  "key9": "3LeR8dtY8KG36pUNC1BfhyvqjajRsH54J6zQ9GwY5JuRis8x8Xa6rittDjthxe9P9pmuMTNfMeb1bTtaA7X1MWah",
  "key10": "4uY7zPXF3oL5vzcQSQnbE2nmuoguioArCD4uWto2oVufaSVheHaCMHth784zjvpGyvTEpBf6fEqUnExem4xpZEwF",
  "key11": "4RU41nJtuACUf27gP67DpPzKAcYnZjZL7dCUnGxxZhCagA5YRfDHUFyiGsm35xT2VYnXPze4TsCQkk2iNHd521vC",
  "key12": "4NDggHRFXQ15juEMdpkcWE5J8MZB6WDJ93UiDh9ibGAPf1icffkhm6TF7MRHV3FYUNMDJCqojFHjs1SwXaZ7TreK",
  "key13": "5ucKNfHoxSTCL7CuGt8ztiwjPBgzikvYWUwQWpqkhL3jd6RMERWxFzWvQbKcP3hS9HAAAF6RrQpQWx7EdtwMWY7",
  "key14": "5iMyFbsfYvdZZKJL3gPsQLv3y1HZ9sqyfKh1EgNgKaz5u7z8D1w6uV47vwH1VxcZodst8uJCj8vacWCTCcv3cEdD",
  "key15": "2T7jYjrbBmG8LwMHXBL7EgTzowYr9rh7PNew2QvPyq9PjTPM3pw8oCsg35YKhet5qEufcTSyfeezS9aaq16yyvks",
  "key16": "2sbWKULTL8dkCYa2CUmeXYbYa8yxaPF4VPFNMNyk7nHnZubVkLwpxvG1Q8hirmtbda9TkyW6AG3t8jMPk2LTqctt",
  "key17": "5Dm3e2EnKWEaLUDUReiHp1yd4wqsXznw2jKsnpMqEbRCqnQP2EJa8cjeuS9LrCtNX9KyGLMngytRoXL2JMmRgxqv",
  "key18": "gozojXEJ7GY9PGAe8nwLvpP2y7C4NaWanD5MLcCX3sgUdBfw67ghNK4uKx7wwc4d1Jg7tzh5w8eN6XuRxLSDtfH",
  "key19": "3bHpBGtQ6F4uKVh1WRmC3kE7EGEhKMLyDS8Tt7nsLd4N87d5nqbBdox1kXdwgUPzL59n2hABXpHBr1HvhLt9JKcH",
  "key20": "61BEPu5SKyQXjJejHZYd9WeaNT76z7rjoiSuS5vPGiMa78pV7vR622s9jPVGNf6pscD8PMd24TVMx4tSfoUMWXiC",
  "key21": "4QjcNQUETHaBijPK3afvxey9VTVs6BfMsRGufR5MG6hGKYYajGk2L57EMuvDJj15KYyTaAui63Jsp15UpYW2mmAY",
  "key22": "4gn9hM4jpgLgneD6UsUfCn3bLp2DVovn5Rr9JYPnz9tGQgzPgfVrCLj7yGCCwpwHjeC8yzNa8DzBoAnrFbtRnpue",
  "key23": "4f2rrqbtg4u2kVPB4zDrQk5N4XqF1MddixRuEDpVPWKavd8boEUGartF5z5V1MEmV8D7KdZoFgevknxtpA7KjWyw",
  "key24": "CfqLgoQVNiMAk2RZmvJbQ3ysGytugw6kuwEGgbeT6MaQF3qQpx2W6QEx4Rbx5poebL3qFrmKyVLPbE4uvWSN1Zq",
  "key25": "T3E8iaHRJph8dUntpp3MM4Nki9KBUv2qJKf2BxpmLNHjB8mD9p2eQf4R5T5r9H6pNXz751SMnP9jrFujskBpf3W",
  "key26": "3UVcLX2Jy9zADMtVv8dNELoWEcN7S1YpNRd5XWzEDU3dqc5pFrHTsxaAiVqguqRvMXF5hNNqx7CDssnGS9wVk5Tc",
  "key27": "1xC2YUKSGWGH1peaCaVCeTSCQXS19RZPWYioaBhGyvpWvEhWAibq37Ds94pPichpDvkUciXkJgkiYE7GjCiAdgJ",
  "key28": "3vZQwbR1xEsYKJYSVEkEYihUWjyLDrhL2R3xifChMee6RzNZ8VTE6q9vgW6hg5xfkEaiAiwAWVSucCGJk719SEgb",
  "key29": "5tzQjGfNw24z5D6DYUsL4xRaYeXCx54DHBCRGcpmXcn4brnsKmi3UVErG2tpZvzTZsBUpXqx3MoggsLqWw1mSsZe",
  "key30": "524BWPDxBwGF6UeLXFg3yVxyTZUM7vBRQwfA6AFutyEv9qmjTvt8nWiYkhVEEbk22dJxtHocS3HUeuwS7feLkTuU",
  "key31": "RjPdPNtm7JjMs3ZW99c3mt5AsCzN9L3hbQwLmsBa2ncqA1kHUPfNGiuGd2qBG1JbzEqyYWzSjmtqteUSgjuS3dt",
  "key32": "xq7T6MtMqxFqjerDNQb7GqA9jFjGHakM2xnCXW3kfPTrQHkpSrWvxtFJaiYDXG5ogQN3M4B8t5dp6LRKJYA7o1U",
  "key33": "2SWeTfp8VEomtkmMMSd6LVN9JNhd8P9XzYa51aP3UKjrYdQjPHqRkubCHa5vfL2pnUVAGnErMtgxwyQNKWE8dCcd",
  "key34": "Q1Aiv4VpZXMgiBfWPLc9s6WLReAbczt4QXBMwVDreruFJkDo8zNcUeCDxS15SWzxy11p2pV7V54DbuZwmhreuV4",
  "key35": "51Q1gnhKo2zeNaby4nm4vYwj1qEpT6kUU4mkoTKpDRVfCgjprSqU7E8btJQkQ6PkMp1JNoZHe6Y3dqWXE4Ku52qY",
  "key36": "2CqqWLFQyhD8PZ6rENoLNgAFTPQ5hhTkojx7KJMKSJj7siqoqoZMDNoCUN5Jo16x4Yu3UJq23nPw4JAjq43dHzgG",
  "key37": "4eeHaaYKEDZyEPUMSZLoWtKr21qAmvGKoru5AHBJKbDNSgQZyXZ4SwEAQA7SMytpunCoa2Wk8EzFaPoWwaXjvkr7",
  "key38": "AWsYaMoWpR9m5qVztqGpPiPmYeZrdWmS4TkDHHXBjuSBkMDXcFwGVNZCb9BDjC7hK3HYSqrineovUJKuUpiqYMi",
  "key39": "3V5ZoRngNw56U9j47siBenizXUgfaN8QtTdirWp8AaXDyv9nSVkqhBYJyMc4gkR3rzCCziJADhAwTJkRYbnmas2s",
  "key40": "3KyZofyTjGETgbyLkhjMyDQUCYWydnHo24rnoSNNk9M2ePtSTDNAQDsnX5SncgBriVFk7KHPJdmJ3Q4xtipBE41o",
  "key41": "4zLswkS8XsB8niytfAbYyyaQHbrarwBqwibDjq7et2R6tzabyu4cfy4Wu2ihcwj8GPLVESeb6T8YUSYgtMCMwFtr",
  "key42": "5uY921WL8Ubq18NggWffAvQi3sm91ZSD1YrMZTFW6bBsdofGzxr2havQTijLMaFBP3SPYBKQZorLdcVuUjqSoDCv",
  "key43": "2ZES9so8uitptuPMjtXzngmGyxucW8jY3TZxvQVpKGEX3tNwSrcSkX8Lx9fNVVoxvJYHbeBTzyJnaxfAKWthmo8v",
  "key44": "5c9wEDEwVqSghxmp2jLT3EZ7sWts6NfjYye4NQLBRQXbvJtsAdFyN9JEvaitYkWvobmdNb5ixiNwpNLaz2DGAFPU",
  "key45": "3mPCU8YQnK7zgRKLkF3TV28AzRWdayAayJQhh1tMtXVfwdjudwu85a7dwcvu8KemFkHmTxDUZrkwaUFxUoD8wgno",
  "key46": "49VCYDShwDWfjsLeerEWYU32rm7s7dCH8sKRawEcpn8sAzCrscD7hg1rFh6vrczb4Pig1JedqguRxXEN82t4NV5J"
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
