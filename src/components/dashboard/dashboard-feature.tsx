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
    "4kkNxKMCHwzdMuxHApB78wEcwMVvE7Wsbh5dTFyZ5sYigeatvEKZkUQprigjq8vtcN6qRY2wHXUdBN1x2CcEQD3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474VcnPGCTCLNBn5Q1SMUjR2Xnpd7aV8DZ47hoi4Gf7grJGzT1fMKwbSGf8P5HWfnZwgEaR9Lw7DoNcDHA28ZxSH",
  "key1": "2kWXDWFukuuySKHeD8pcmfV7Di8GFJBtzeWV2KhQWd3Y5aDpiju3uRXv6REHQXn5WeAiDWRyTBfSdsMqAUPayZdg",
  "key2": "5PmvkozchK7ey3rWF5BKuStjvoYhpdMs1L3tRnbTJVGZa91BnyDuNiCB2So3Y61NH9RfYDqFWaF9ktoDgVnMU86f",
  "key3": "3JZUS9kupe9ozD1ZiMKzX34PphLnf8e7wUc9HF2eD6PSVhfVKVHKdzGZkx8dneCwuqLAmKCN8ywSfMuTNy6Q8gz4",
  "key4": "9DE1PnV1YtQeMrtC7tuUi1KHCbXWXqmmmEUAY7fVuaHdpfzKJxuiepZesgL9vSZkczfP95yXxNKP9VXq4fSep7n",
  "key5": "53QsViUPeyLsGHpwtD2D4eeAZTm7zyAcViHEGqEbG12qSxCeVUS4RBkJPASbUf33XSymcehfSXejha4sKHcQvU3c",
  "key6": "4hzfk7Z6uipUDAkYcYqLbVYHgjqV8tW89T62e4pVUn76hLnzyHnaF5HAXDqLoBVq6pejTJ94UrZzTcBqorDwZHww",
  "key7": "4myguKWCuo2gk6HDKYKEXuRsixQCsMkSmJzgjLL22LVB4XfKzbAC3tjGA67iG5RnJ6zgxkKfwHUCkUJP1pneZjXW",
  "key8": "48eeLJmhQryaQiKZ7AGAuGB79tugunjbWTTqRoZCDJR1Cex4Tn73YeWLDzs4na9xLYm7x2K9aFqsb3Ga4Zagz55u",
  "key9": "oeCtLUwtuP5brPoG1o7EwoU8aLFB6iLhhHigi2DoYjcvB5pUZ8wEZVQ25kTBvLJRCV49gwJDPjetSaCWSKKUAxa",
  "key10": "3EnRNwuUa7JaK8tz2JPrhG8eGNMMbWTovBMYj1Zfdsg6F6VLPZ56ciiBN3trLDe4TCVLHH6HNj1vSdz5iZbpKPqJ",
  "key11": "4bH4wX9bxzhqt1YkBueCuqd2R69xbadnzNSdK81qmnvL3UCkcnRqWBntdzYe4D8nmjyRE41BaqJyjuxkQDN7XwaM",
  "key12": "4n9RAyLE2HFpCeYtaJFVT3zbaGAJMX6J8MNYCwxxEVD2wYzUqqY4nHnCPnn6sDdGBcaKezEWjrLww9fapKMAucDZ",
  "key13": "5PkZMQMcajqEXNbjFCN5HLKbiLDQ3cUBVJmANJgtKNXu5qGwWbY4gEWeCqN1o1nqPJAnZJfBkcwmBBnY4YjgMyzX",
  "key14": "4hBhsec2RkBiNPbSBKgz56R6jFaZiNBWHxZiY4Tn8Rc8iDLCGhUswWsv6L2cf1DjanEHDLBUpoWmWdJPbrJJf1Ew",
  "key15": "2cCFfUoyrsmfGySYAijaYQcKZkX1EdzZzTbyiuJEsu98NeKLoFwHZftjcMkpRDXAyZvcd8MjxRr1tNX5ZCro1DSc",
  "key16": "5oEFCRUFkVEz3LMKrCu9CCLb48Sp5fxwHmbAcPTy9fcUnQKDCGqRR7JwePGJoKyxibVbCe2QgL5euMo36A8dYY2h",
  "key17": "i9R47NjyccPjrUbviGfXNL3yPjXzK8KZuXXdKBLowzm9P9nikXofY1qTK1iTsbvqioZJfUxXkoNW3rtz9XEUAnh",
  "key18": "9ooPYoMm3GRxYQzuyXs1YAdBfiKEEE8Sa5sXSaYsQ7HeMY3tyYNHeGmsaiR7XPjhFq25P2yd9nkW31fd7e6mNym",
  "key19": "5exRoLw4UFhXXWnZuBXGW2BWPPgbME4DCBXgn9hGntFPrKCjUk35kvhTsPmcenUcr4VzwCSyYfqjq3QNu1amJE7T",
  "key20": "31uioDGE4STSVw47gVVDBqZPLb2b5hdK5dGt3PyRSFfZeEdEkEkGEduGaF5ggdRsfM5Uuf6wDdwiBpQh8o45Xc17",
  "key21": "xErFDUs7y3uCwav4wCFfoKHZej2hQtVY1wGtWJDJq6tb9Qbh8UTM2gvbbHH7qeqQoyx6mXiWBDeVagn35HSf25o",
  "key22": "2BDugaKc3WMjMXDYGBMULiMaHGiczYbmT8ZU5gSCgYDG5PTmhmdUBHHwkk2dSawRQ1HruanbirAxp4Yc6kGECawF",
  "key23": "4jp2HsrqvKiL9eA7QH3wLi5sSczPbEK29MQz2ptsgUr6QmRAvgZJg4Fci7K4PpKhJw8YAnXncrx42q8efKX1hpF3",
  "key24": "433FDdERFKipYNwbjphxAV6hjJSWcNcMFxsJMBYUp44jBmEgubsa5xS6WHTaeVTnttJ7YHnpeXfkrcmcVbWzu2Q7",
  "key25": "VT8LVo29A8utyLyCN8fASbgAvtqbBeYMKjtkcBnDbhYMWw3mWwaePAHD7KniRrmJMvPLiYr2ETXWcPEGTtjQkX1",
  "key26": "56i3PMa5DVcWnqf1Snp2zYLdiwX64nvuoqKTvq7QYrqDe6GzY56m1U2p4SKcGWcNocRgThibvZB84atj3iyUhrEQ",
  "key27": "5cGGjNDeSmeiDBRKaTeEuxCvJpUeHsVtDcuYJThRBA29atf8BeHnnwDXnnMBJYoxZawNBeAjRMbLGBmfYg44JWCR",
  "key28": "5w46ho2NSz9x7CqaGzyU43zRectNzShMxdJeFkwkyNaAUb7hmnURX2n6WCLaUNiDqDgnpL445UhC1n2kbu3ngaV4",
  "key29": "4pMDPrfVJvFCZQj7GeffXgHgvEk3SvJKmakjqG7avM9fU2tix6yXSqPGmuuHKsH9kzfarLUZ8gP1sSzuhE6My481",
  "key30": "53BUSAAM79q4eeg4QhyfNBwG9orK8wZQ1oV4L3nKWFmXCLH6gBsDLePvKP56yrqC9hPWADpnxKui5qsbkPSnKvgj",
  "key31": "2Pe49Zar9q5MGEAwhuiNKb4RV4z8H6CfGxpcr2WDGxwj12rCppdrR4vEGhqKSXvxR62gPhXmni7T1wY1in4NDW58",
  "key32": "3g91JHcyNqfSJHULZCKcCFBX6BuqQipPXQBKdbB3fu7zh33pRi3b1NAaPaAXCNEY1512t5scSU9NR1W1huQYAEQ4",
  "key33": "W7Rp12HYao79DvsBcyE9BCzgW5SVHXtJYCgAPSP2z2Qe3KjUmGNR75XtWg4pJTKpHevNbtd7Tc6ukXcVspfzsev",
  "key34": "4PsZhGD8MW12TLmdGbRhisN6dQXZdQim9EUGdu9iCk9ttwx4gtKSCKPhMatJjanLE9c2ejTACBYnAgK8MyteRdqJ",
  "key35": "B3WXbteQpTFmMATh26MLiQQGZt7GqWGpBu5dFZosqD5BPwwqLbnxVcbrVMstmZFkFvSBi5yWNb6vrnMupDmxDro",
  "key36": "62qmfRVSxQMFWemVswnoryfCEtZpTcMeT4HoawpBKbY2hBXZg6mhUmZ666wgUeubZLytKf2uTFNPWLUJtf8GJugN",
  "key37": "2eAyDn6n22XkVnyrs1uCLQ1ZzGMaKDtmCPmq1V4YKk2SBEQ1RyNxRw7PReyZJrdgp4hNaUHEpgAB4GbBaRjjHuT"
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
