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
    "1iVEFw8JCvPnU1gztJkCtyb8tFYYnBcyYzZdcR2QFe7KsbanpsrYXpvfdyRgy92wfvkbrH9mByqKppMRiu5WQAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Siev5H5pkWFznYW5ySSFwCTJhWJSwDpffgYFLZURoQbJcBrp4L6tTQLYUcRVdJ6u5YSv9WAcgVQVP75yte4EVd8",
  "key1": "5tWhqVmeaGRL7qxuvY2Lo1jkK9u3wEzQU19DdvKhbav2S5y6zVfFnKBLNqTQXgiaUYmGxgqiP5sqnuxYj5Lnbi5i",
  "key2": "4ic2VexAjJrpp1KQfyfq95rFfMgH52ycseJ2JdVNzmWeJVSaNgHZysBFWZnZScbpw3uFVfNVN6E2KGUoeSiE8HMX",
  "key3": "2fMoAsZGipL7MptAKh9L9rEUjhcmvzuAWKUoUv2wKctpGXVP9gSongXTNZY7dnirTAcFYryFecveENc5DA9MoEmg",
  "key4": "4E59bvDZ9Nn7ezCzFMmZpFqEuLbc9n9JyHwxWZ8WkUHvxdUehvEKh69meQnFMMuUe7QcBNPk3N1fZdp62n8uALqh",
  "key5": "4nmUnkrWQiPTeCmdpwYrAkwM5hdVpCZKQhWLjFhQ1m5xVer4U148AqbUm2Am4UhAwKKwp5JYd7p2nddBYpemoz2Z",
  "key6": "3WdH9b2zCPSLZ7TABwag4q6588awn537WZH9zb6z4MMHMVnx2n44tm1yrTxxtvZ9yMjtJbMEUK9i4yUwroPYzCtG",
  "key7": "Ur9NhjcyJyGXqaMNqV9rCvrKVzg9E5rt2XPDrYUGSM52NqshZ5PXUq8UDua6YsgGabN2sx2fhhcx2CxH59t2vXA",
  "key8": "ccYeaTq1dgaRvYB6S83MDTDL7AhqKxEWUnmoVrYj1UYFyky4ykwAo9fCSEJCdkwRkE1p28QzvGneCJ3ZWYFR1t6",
  "key9": "pEq8LH3oSWA8tGFJNHzZ3DMVuJpjj4cxjErqxj3Yb9jsk56gi3JAcRUAoMDPV4pCTcjneaaM5vSJbzqSwb1P23x",
  "key10": "24rkuNiZfqPUepfLLvFBszDp6QZJHUpsUNJFSEWgQaEBTsoJbSgeDBxxWHLx3AAMhkzapnFnwPStwCUBvmjgnbdZ",
  "key11": "3CJM869Ee3eNbRmZxeWrePfjBWc3wV9ssnZymU9Sad791rvUKXe2wCNVQm4zJA76hvvpUgY9SJsj8Uw8tGYiK7Hp",
  "key12": "2HjBPvWJWnwpBuFS9F4srgFVtprqdyTLWnCA8jyLLnXzmxnQEv8pa66g2pqx77Hjf3hWFRamKZ2mLHsAaQuPRHrK",
  "key13": "2nCdpm4puCK2tatA9RTK3bZTbXDYFdiCG8LERkY6y8vbnUh5HV1XZeRTVrVLY6Lr7GzsC9ceNJmbHPPnS2pvE7jw",
  "key14": "2btCPNEsq3Qvu6CDKrzCmqnMc3vsfBMwQqsSQjEV2qpkK2h3fYUNoqgYkBZuziPPmJSrg7stMzSTi55hsWAEFdtX",
  "key15": "3EFQnX769WCmPvfE5dy46S9fXVM4d7aXRVkdUtqHkQAavR5tg7nHzMfnz4mGXkjuBaVxfZ9FrwsxHW4yWLtDWPhp",
  "key16": "3masLLc2LGmUi1eko1UrUynM8JmDEiTdYKumHokFwc22gmh3GqASshPV8W9DScHjA12Z7437SB9wjbaKGT2K6q9f",
  "key17": "62PEfRPLF5xC9DB5YcsXNfcQrUwrNGuPeB8bwaTvuHkKiRrs8PeFraZWkaDTQXPbxQirBEV5YcfTVSWdYRq8UKbv",
  "key18": "2aw9KbwQrKqHPoEbxsqvXepJQHh5brs7u9KwGRL8v7a6nsJzzogLmEuDmv3ZBn3F38YV8yrRjBoeUkYu9VUKkYgQ",
  "key19": "2SxyYZACkywa4VVuuvcyLXe5yYRdJBV9ji7r6emSSxufs6EfnvmmrtS9jBZLHP7pnuHJapgA87QHx3w5ooTFLxuX",
  "key20": "5tccTCTb3MbkhkzKcRiEEhHPiraw3SVeKNHSg8tQmzDj85Zd2GD5fH9ivdHps2SnQgQ6cLhXZp47EAFvLyGVqpwp",
  "key21": "3VniojnyPsbMbf6y7LWgwJvJmxDufTBQPXrE1vfne8rFLfpVYkJj7jWFqkyRiib3fHc4UucrZZEsWkHGSLy5zivW",
  "key22": "3pkKpk1TTtrM8pVZ8DfZ819aZeQR4tqaERfiCUySGQD1eguB3AZCa7m5n6CboxcWUPN2g6S4r1ZQKC8bfLZAQVXo",
  "key23": "5ZqZnT5wt5dpwB1X9jS7BFrHJeA2FuTRAFcHYKdzZeM523WMY9aF9EA9kkceYcQnV3Lx2hasSVGB84wMhB1xYnvV",
  "key24": "2n2QEevT6EegndSMuJWoMCmF8NmgCCYMW7gGGk5dJpMRfzJxRbfuMCiJxPuixEd5vNZJicT33bFyW1tYXtJ3gQdM",
  "key25": "3GJsYgzK8PL9pGSHCxqnBxLjLtHzodF4hEmvSJdbzK7nm3cmGGrToB1tNYkuRoQ41BmCrMP4QArmSrqaXjdCd6CQ",
  "key26": "35DCToqKjPth1xagt1mCfYR1b1CjzMAZ6qUheFoEbohuJq5PzeSvnegBNmyN3r9FqCCtTsGzR6yoQkhzBU3Ufr3n",
  "key27": "YxLYyu6VJPb6576rETVdCbwvFNLirKB3M9Gv3453C8ioPX1Qn87VF69mijxkYd7xUBPr68rTrnE9NaMmsfTaEKa",
  "key28": "4MvQMn4tz8n9sEqiRFZystebdpnHrwDsg64JFkRVPhanS4XQq1iQQxMnczqNDh34AepEFodun5BRiyoEJ64AUvJ7",
  "key29": "2ir1fdxiJbcoZ846rGw9pLX91Ad1azKfm4ws6WCVxV1MAA2hRpr2HwXPuPCuKmTNvs2Lw2TWQfs2MUQBfdDNp7kA",
  "key30": "4iT1VYaRjqKY7q71WxjdMuD3FvJkMYN6kS7ggakYqL2CUNMPmWqPmzhqZJ8FFh5JZLhRrmfVtrhtpp1LCwr6DSiS",
  "key31": "3so19hEYx7St5TXV5xYRNaSiCj7FRds1TbGN1eYGMQTT5CcVS7k7JpK5zdcahNfv72YXQ61sCjsQyoiGMgpsVygL",
  "key32": "3cLSuAZMVpCKq7JDyrcaBu4WUDNXdxKTVnMHc2LZFSMaMQZskVnpHByLmE5YYvGSBchAPtrVj2oJC3JBcG7UzACF",
  "key33": "ybEf27T9XPS8BQaDKhVoBnWqyxN44746gF3qBRf5Pv5o8csrA7mTCs3ucz2bdfSGSFXEtz6Y1NBPzvAeQn7yTvD",
  "key34": "32iK2p6rFtrx8icaSeikT9CfjorNfcus5UCYAkfqDFPuP44chQV4XT3o8ozPBtDA7PrkN8jLZmFn22m8YJeggfCb",
  "key35": "4SdaJcdmoVAQn51cpitK4rRV26f5dUqY25DxsTfGrRFznZCWbJRHkN1ryAfhhwThDLQWQeEjrja2rXJBoAMnoFz6",
  "key36": "4RdWhHQyxrLhUADRzyJvK8ww5RahZfYWVe5j2GTM6DWkxqn5cZEe77w21LedYuReWM7mSMQSZDQC8bKe3Nnn9CXP",
  "key37": "4VQryuPtGnMsKkm4RQB8sf2LJd1B9gTQbCnEbM3uSy1SupoubfXrcAk2vemWb5sDTVS4E5wjnJUBrRqbPHht41Vi",
  "key38": "28CKJYidWRhbCinEiRpcG15yQugdNcAsBvgDW14X3L8gJ1XMiHvi9x99iXKqgF3Vdyg4QKH6hrwSratSNkDPp5pd",
  "key39": "2bdgJzsynXKV2SCxpH6Ro1g8rCrKXR78G6RFXYttqRT7ajpxEnKN4Sc4Hhe31vMMnW8upaGkkyTNxMFWZcjaWyDe",
  "key40": "5ZMMTVFj12zdED4W8VK5PoysA2uyW3V93uASmr2B421JM8p347WnriGSUzRYMgVHb7eYJtkDxDWssf68wRdXSWnn",
  "key41": "2rkUC39RM3YmeLLMuyAYZeJEewK5vWtepjWaKabhmAEHZLvJpfniGbRsLXET3VJEN6TkRpRgrDLCPMsBwMTws8Yb",
  "key42": "2RrkygWJckfMud1aYy3Mg4S41SBZVYHdMvt4v5uhX28mv4vx8nrz38CEz2Exskt9evqCFxadTAXTD6ZYhumSHor4",
  "key43": "3PhQJPYmizfjjUWKnAee6oL8qvDuDzyAEKGiNjNvZR2mhhiU77sf6wRMkkQCesYzMC7aaWyeesPZtzGtUnpfnkjF",
  "key44": "4NQpzt4UAScG1B3qK2mBUXUyRVErKqDe8bjA86dzt4roGTpLSrkR1KFksCAppKyhtanRd7BQ9h93GXkPSECoXwUP",
  "key45": "ceZhSdhPPH9aVS7vFWmRkDPuTMidaEDBLuxTMk2uJdwAsQDhxikFTrame3haRV3zbzsP4uMW94zf5efZrYyVqpz",
  "key46": "36ycUnkmrTiwdh886f79ZUBJTqPFhZUaskxgprCv7H5viBvuhUnTcVrpKiAPMbkWbaLNAJ9La7kEqQvLwPuut8Tb",
  "key47": "a9gLaPtJczgAnwzqbcE8EGDEAk9TyUZCzhbK7uQdq3v9ND8j2VdUJpLXdMPEjbjRH6Xv4W6DUFzAphsDcTs5kpJ",
  "key48": "5LGWZCNwMpWVMWxN6auchKVVY4RCwEiL2RH3C3URdsFDRUvtf2vNP5BCtcs1ymPsCE6qqEn7bWpD2BW37zF1bw2S",
  "key49": "5hc9swW1fD8ZgG6CeaWQh6rKNCaLhWFVBTUqkerMiz45UHoM1WUnUkY8HpmG2b4E2yQRPDxELbuh6izPsZucD8t7"
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
