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
    "Z1WvUHPjVtwQKaCavsvFUf113MAqP7MU7tuv23vZy4eBwTr8cy5kUsdjZBHCrGoFBjuaFK4cbHNMNLiBXbAoCTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eSuuqukVNxnTZZ4bPYYfGBw8BTFhYWWwx8tnge8Fk9jkiBPBDNzVcr9pMS83Y34B85PnFfgBioBRw3L311w6myw",
  "key1": "3bhvrW7Eyx44CcbQLiJ3bjfbmbZuq1DLnSQsw2HuHHPvQpEZjFcsk6LXaUGPnked8yrQPWCf5fvwzNLjGqP5Vn5h",
  "key2": "3MNHNJ67nbcvftgJoicU9MaMyp9i7EHHGnv1m2bmYqyPZCjNf8J2RmayeWnfW2yq6wFkphvXxjDzkxD2T8eHAwnS",
  "key3": "4KBv8KyyBevAhX4LJVwicP1gy2VSjzj8rj6myXBxuRfAbM8v6KMhDmLV7t9jd6DoFTE69QcoxrYatEHiD1YxzsKq",
  "key4": "3t3iJdA3jU3ncgq8z2YLjZzdfrLnrBUNEBW6nLy4FRJH517cnc3oZipexr7jfG7fwUR1h2rXq6THhs4bs6uMMx8X",
  "key5": "29X1qToCqPraXSpUUCPLWuuRQFE4ScbyFpwFqusarE1Np2GSWBw26Ffq8jcUuVftChYx63bQoePE8jb1rNbP1v5z",
  "key6": "61YtXsrHGrxpKK6t1dMbTfukxdfEMRnaWKJ5nwutGrbDgWsYVxf3wmEe7rfayLZscpZ1DXV24tdoWT8YehpES5PJ",
  "key7": "5HdTEUxPvXLdmzRsJiAyKsHrYcnCMyAbhAowrdCAm61J6phu1LVqbWCJ91QhY5tfYpNR6hyCHD2QRV64P7oiKfbw",
  "key8": "5jxe9nfz26rpzetQEGsVDjG5d15e3JMxUjNQw3yhLVrVcFjDZbrEuYQxsMbj9iSzE3wPqhcHuvdxhJm4R9hu41dJ",
  "key9": "2ze7PuR8A9xXevJ4YPNtLk5MN7onRvQCbT5pKgSvBycpstPN4UCaUtkiefKmDGnu9dDRFpPnuKzY5TPVgRZmWwB3",
  "key10": "3BTMt3xTuqLXRwNZVBCMEnSjnXBqxLHAdBVnJNqz3pUWyNT8HmZyjEvY3KaMhzXVmt2ZkZV6NGf1T5ewrfMRqt5D",
  "key11": "47ZgcecWwppr5iBkzTeUKjo88eGZ14BoWrMW4oY83dNNgBWz1Na9ckWgdvwBG8MHJWGmD9h4fkLQ5LKVSDUhH6qV",
  "key12": "3NgE65jq5byVx6hyW85r8734XWEjiPNajg8WBbhv5Uwp9HZMJUhAGNQvjWLEaMhVqqoqeVgdmJFV5Es7JDJAn4uZ",
  "key13": "2LrvrEYQzHhEVDsynjSiSHkKmC4Fe1MA4Y9fyUVUjybiKHjV583RcALjqzNbKip7Ai63xPGo8przprNZYYjiaoZY",
  "key14": "hrSAY4EKzQYf9hBXFHCxCN3exvCE6CyNaRsTyXt13622i4YBEzst6Ug4TUUJt6AAUQjwPQdjPHRT6yjbd1bmwND",
  "key15": "5qP1BxneA5EkaxnuypRsss8byqpondPcDcJe8CweDq8B99vPLXSDwFPVCq5Gsm2YPrjWKp6TrB6MgaEZNJnc8ECV",
  "key16": "4upapur6gsppq51GvNcyqS6sJEA84AaCY32WM3hx5JCjowysiA6QpVEQ1YN3Qxva6UGGmmheF7TfDj6E32kaSsCj",
  "key17": "2LV4jmg1jMfTWJ7jK6Dam4fGP5mt7BZDcradSu8KxzVGLUpgnRjYQaFvU6WNNp7goSrHrgyBRKq8A1ZxgD13jt25",
  "key18": "2pLJqPByh2gXc5hkFavCi37CLhB4YcJkoAHxBf4m4BnSQgwKkAQtSC47cTkqWY1usWLvFKGRCCRqUrUTJTY7qarq",
  "key19": "5AZpfG92vSPLttRxB2NDihcTRWvN59ajPrrD8kxGRCPFTjd59HY11jzEhrEH3HKmYD2HwtCZbXTBLjzf8XVoyE6L",
  "key20": "261GbbbqwMyLturRVBrpfo4HvSh3gA8Dt1Lukbrnn37kHJnHfFbyyde6yh35wUca2SGUN5Qkda4LmSrqiKGbRJ4Z",
  "key21": "5iNQDRyuPhvuS16Bfrg1ajnvH4JSYm4p24gh8e34VK6Fnovxy7mYzaaK9moMqjbyCzqRoVVZhFDMgq7ex38kZvs6",
  "key22": "2ENayZLsXZohN5J6AjNjoPQqWnfbiHYXFsLPuB83DeRY3oeCWenedcLs9MZqv93s8FhAd7pxwzCUboAV1riVaTuo",
  "key23": "4PfpvCuhH9ewXxZYpuznm34VMrkb5jtCCWpxMCWALBZGJnwTJzN2uLTfcByEusk7MDBRcwgvHUYkNAHAejQ1boV",
  "key24": "4MqyMMGxemw2JH2BTuH2wyBFtcAnBYf47kRPqE2h53en13TWDLXhrTRDSt3eSHF7pWWgSBUqMixXNHCd7DEMLJXC",
  "key25": "3ZADUDxfSNLk1CNMxZkWNzMo82L68rTrjW6pZYZywGSnu5ckq4CVqznXsRAAUbPBL2g26cokSyonim5DujGwe39M",
  "key26": "5kgWNE4FZAAr5Witw8sUjDv99M94z2dHqgRhGnHMWpUFAKuQxRxCfX79AP444v9KfCYQkaAxDkyqnjouvWyZ6pxk",
  "key27": "dn9D39D1RUNctH8mByAtQuvgxrwE3WRvDx3N8tbac2Tuu7Eucs9tmsAD7RiHCx5YQ9yKrgKGnm9QxMhjmQbkz4t",
  "key28": "22iKQrLtiJFHxLimLn54nHj6Kg2YWSZBJAHM8TdoqktSvnj3ikMs2ZgQQ3kbFjsgXKLDMP5TJLMxKVdacJxf1PDa",
  "key29": "RuJUYkADVgo4oVHweXGaA7BcXPphuKwRQw3zFDLk2uF15xU7azV3XYA57ppZfegi15ZGXx4sRPGVGVwGS7ghLag",
  "key30": "EhwrVuh1cjq8DiXvCjXtitRjTzdnhrCTPcFw4rCbq9utZ564Nt7zkBfxpHMwYAxAPqv29zxSemYa9qLuzRpdAEH",
  "key31": "3SbPAdorV6xUK7jAfz4MiZb9R5Gj5f4BJWJ9sF5NY9bnTFHsG2hsnP6jqmgDToPZD1qfDFtahGhR27895kqNH4NT",
  "key32": "4NT7o6HMYU7nBxHuFA6vy1NJW5uVheiaxpMbDnLiUPnq9QeEXWGgkvZRVATGxtxXet6FbyqHxTaMTeVRQSYNXVmX",
  "key33": "4vVGedLtiqaceHXFgdzvZjhiVUVTdvDoAW7hip8pMycGfJgfBdkZKwFZGkaY4jFoirzXyAuDMnMSxN2VFNcPvhoV",
  "key34": "3sUTGyfQb1eEndh7jJkcqUPzm2BjtfhWGHeXRtehPKGcvpcm8eF1JXJC1Ws9r8eJsubGL3Q8fCRMCDm6dgsrnFdu",
  "key35": "39UEgdmz1h77wxEC2EjVce3rmebotz7LkgSx9NHPg7JSJVvtmEqEQL6YW82wQHYii3NXxqdL82Td3NzWChKJg74x",
  "key36": "4bEoLEuuyi8xkiVRrxyZY3K6u9bP3HSMvLePRLJFjVbsVEaPiXkJY45uEM7dS8N6DLbqNGuSq22SeoZe6Fu68MG2",
  "key37": "3MmaAriW1Lbpe3gBUf6ecMwUTkD5zPubxXKz5DgepVwKgC7sPUzdbLUKhQjhNtRPzqCiB6vvQ5nS9dqLPixmBrFe",
  "key38": "4vT6rT8NxeiSiXEjP2icHyzCjDNX5BbU54gdytoFvHLN5CiNi4RwyTu7ZSra7gJcm7JNNEQniXimPSsWQccD7NKz",
  "key39": "3NCM28XydxEHXDEEPf8SF92Tg6gMC2zERrgFN47xbVhDvaSLpTGkEPqoecDBC2xME4xoxX6Br3m2oWjE1UqQzkfZ",
  "key40": "4aS7QRHvRQdd2MjznJsB86UngQ6wWEBByvnzR2qvN2EzHVRuaUwQgBQ1Ujfd9dDjM1v9Ezvwx3g16Z4TFjgXTtCZ",
  "key41": "5P9WWAKsto2E6itvmu89vjYC98d75DyoVm18jzFxi26tP6NSzfsZAmLfZkpBwAywWogJMYww1aBAg4U3cJ97zFYs",
  "key42": "U8XpnEFeWUnNm1rKe8RFEa1AeEMARW67ZkZ3zp8CzEgJ5bVCoxMdQzfSRpx6CtSW5vA1u9tQ3JrC8HcfLs2qvYp",
  "key43": "2wiAVKYq4STRhrfJ3KVfd9YYazeSZTQSLUyJ3pbs7LGgAxMwYpYp4UBn2RjYoq8gus5UChJBiXuwf8czR4ibr4vz",
  "key44": "3APXMUzfW6nJYbbE21Ckbfb6UDbhnjdCMafcmaqDHVdthufWwLL8b1qCipKyYqbfzFS9cXxRfFCu1LVugEMMnv2L",
  "key45": "366dKGAhaWQghhgj34ye2w39MkgBLDR5gNfMHA3sfgKsfMc7Rm74cBq97TfQEAiVt2WsTuQUpqQXPR5HACm2LtbD"
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
