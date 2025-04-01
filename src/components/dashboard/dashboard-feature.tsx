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
    "2GaE3sjb7XnoybRVmXtJ3YLJca6oTUwCunYkU3e3FVoYMAUUi8cjP9z2BL7arjoiiRvf56u1P2Gehad3LKBddAg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sKCeQoGeibjTTk4KDtrLnp1v7PVEQsiWXjm2o9EwSn41Gy59ZqeXjaZBdLat1AEk18kBscVfHmGpqJWrgShi6jj",
  "key1": "4hM7zmwjMcyxMW5TppbDP9Z686n6L9LjNJFj5LN3AueDLEZkqH968NjHJgDa6eSeT3VJkDqFc9DJizdECuHEwBYY",
  "key2": "5SFTjB4CJ5wi4QXZ68Lr4JCwKHDTGWT7hhXHNqRXpxvaFuwXjGseCtqjc1gfWtcFGcifKN9xdAswAs92VbVdvRSw",
  "key3": "5UGGojZdLfsuPkdaobsRi6hxWUvMJSe5LQMQGRUhqUDjghafd1oFnP67PnUzNMcbAvoDn1xbALnwUbiMBvsFrkoo",
  "key4": "45CztTWkdGximYWzpNCzsYJV66WQoGKWouaP2rN5hnk3uSBwBN58x2cExDLL4UiK7MCuewjCvKT92xBaitQa6n8n",
  "key5": "2KGusJx3Qk17vUkcgVgYSSkj2Bde6knwQmohf6PZciYkYXbjho8AuAxw6WsMy1E3GHx7frcdkA1kTCLREmmeGFYg",
  "key6": "4UrgK23HhbuP4z6Zse7686JAhSwh173WGVPoc6aikr6W6TkdtB868tCH6hsXXytnjG3kf79MVKDKhbzYaRnNgrRT",
  "key7": "4o6Mp22jYF6HnUZRjkGfimNi5bkyrXVjGsmMB4XqohP8CEtET2tDXkEDAHYKktv8TrYgJTJRQU68DCcVZdfHtVQf",
  "key8": "3Mn9UseWBVgueSgzSKoLmdNBfLWanf1AT5TjjEUE1VaU4Gv4oKpTqCjFkbA4THi5CcKHw6GGcs5F9r5QUiBzgWin",
  "key9": "4sSGE218gv2dDvhy8M1CduZgm77Gp5UycnzJRTwSeH2HkZsso1uXKyfvNfZJVg85AC9HbpQ1AUDtiGPZMupT7kGg",
  "key10": "49Rbw7VxeyfvaYMqsQAZW3pDBLJ6oQZBXv2mKUUpXMdijLGqQGDk2kz6oFeZE7z4S9CRAJCVBkdw5cMQ5kiHG6Uq",
  "key11": "587nz9J5zWd7736LFFH4gNo7VJUZhJynxFGEHFeKBnExqsUKUYoBRCqid9ccKsXcbBWY8RvZNzegA2ddxg8omwtD",
  "key12": "2XwQSrmjNCYXX3uQKQSKZtBGJaGeWTMU4LzoFzCEcipeEpcs8NUHneNjUGccTcGAZMHEqmXjjQatKRw5H3LZT7eM",
  "key13": "2ZWLGDKgcZ6oSpDmmNz77tLEuSq2HGqvEPrsmBGZDrA29TdEvQBxoNLUw1b6mK3bqN29cb68Wiypaj8nzNsgjkhV",
  "key14": "5pucYiNjeZTuCrwTwtUXjZ14826LmV6gNzZMpSscxJnLjAZqhCH7q2ZUjYa73kkWABdZCmwCTpvRPSudqcTqCP6f",
  "key15": "xmu1UK3VD81eks3LpbGDirF5Gp5t2uQ7z5DJfp9Bqu1Eu8E5G5VPoUQwFSx6zbF3HDzba4pKXtaicJhTbYDDeWL",
  "key16": "eZtbs6zBhHcPnPkLtURinVBHrpciC3gqTMCJxW2vGvHFsRZvhS9bCDSvDER2bbmQYAPzvY8WZ2eqjWFS26jqrnv",
  "key17": "8ZecMBEMxPbSCoT2Unjwhaa71b3hVRbWbV6zsphvqKhD6L3ecagQcbopGnB3nybVsmTz9Wih7TpJDmnTe77xi1R",
  "key18": "4hKrr8h9aV25UzUSYRSL4QhcLmrZHC1zzQPhgdvvaxSgagFXtm2MngpgvtciHzCjBotrzeCSVKXEjnUsFQpythEZ",
  "key19": "4cwcNiR8znjLNJrnPMM25tjvudvAf1J5fYz5LjfuMeJbLF57YGYSPMWEjavYwjFxWZP3WE2A6Wmbvqb1uYPbtQo",
  "key20": "2KrXKhcVCfwfPvPKMjDmY8zj9PsNFsqsJNhgeyNz8RQdzBAQpHKbcQ9kvWKfRsDBFQDgS4nvg3JMAb56kK9UuxsL",
  "key21": "3cpN89Qz5JMcSenjPbyHpkqZkY3jZSt23WWrRZrGQ7rM84xnoaqrnCMjUCoymwR4QFCVa1SxjaKG1Z5ZC5ZqQRmc",
  "key22": "2tqiZQZV5F6n6dpgf1BwLwmBZ7JzHhe1C4rL64bUKBEk3QQaRpSP8ms3r2tmt71QDvVqKiQenuwSJVuy3j2dvGJw",
  "key23": "47D3TtAfvNHxtEUSxxGRmUFws1uz9YQe6MqRJfam6fzy91TE1iRRc5Z5H2Lu4vKmTXvoDciUCGGpkCHQm8zKXFPG",
  "key24": "PUmfmyHYo44Apxqny52UTJVaLq5MrUjagWXTr4aLEhMMHuuGszaGDH8CMVhd1kcqSpM5MNXFLzxty4adHNV2TsX",
  "key25": "65nkETzsbkTS8rz24stjqiCpqr27gsXQa9JrxpTTKHbbLMAeANvyqENXCcoHss65H3XdhzvLCnJa26Zhz7TvMTYv",
  "key26": "3yJLBJboBydEg2bXYME4dN5DHbAdMCLcHU64rnKPp1jeeuxMrwgbKDPXJRKDhBtsquoKs8bmpSYVmx9TyhSUVrMA",
  "key27": "3XCzWWdMThPv6tWREb19ojPisfELK6ZJSFMdcVShgq1oJrUz4Mz2DqQ8My8xUYQVS88FRGHmBLmdYM3qoYMWg1oB",
  "key28": "4qj8CbVWZAM981fDgGcgmnoiH79Qn51bTmDKwWTf1DTHGK1PkS2BXbGjUV2RJYgCJotnNZqsqzedThKdzKrfY5GH",
  "key29": "4kCzXFaWQC3XQu5SFyWsu9MkWC6jSL4xjGSYufziPmd8owCom1CE74ydfBFktaKHotHJ2ZuyHThejUz33ktGswRu",
  "key30": "45uFxMDCwKFYFDN7sBG8ajpiQkMtyscLzWhdB9K2Ze9huGZU2rWtF2kaUbJDzgb8DTpyye3ayUFqwMZWNB94p9VF",
  "key31": "3Lp8E13Am7eYbuEVsBkpCugpJaPtsXJKrNESBufqy9V3eym9Kds1M39d6CvERbUpTZfHaZjJzzMSPcNBNGNcUaHv",
  "key32": "5hyhbqNW7UsYpLeXzMBA7T9sLgzUBidci1nD92NgWKjqRUuNTuey1aURh98LkjtASbp3zsBoohFhXSdhwSVFde27",
  "key33": "34XE5fAqCkPFHxTHXFYpuVjU4ezxJeHpgUk9BoRjJ6tm8MfJ4H7gQ2YZRAxrw23ihGpW84T2WGWcZP9yZmHSSEok",
  "key34": "5N1B2sZnJehJebyrgtEATfRYxbZ9t4XXuHiPZsGNXc9BfHXBGRfJ8DJigvfivKWvGtbQ5wUb41ZebfMfpmxunMCG",
  "key35": "4iSdcf9bdkyyR29bUkHRyQADnDWTujRSvihVw8yWRZZniZQM58yD3B8YzjvthGW8B1L1UP6JWwfxUbgvoxWBL3Ke",
  "key36": "2CfmaNmzn2nmt9Yqu2yvUjuYM4FFgsqGRFmEybvd6FrfNQD67eSVtrto76Z1BfUEpWP83SPDJquFj5rid5JvVc8u",
  "key37": "52wDeVSn1iAGLTfWvzEWreZeJ7enj61rR7jKd49NL6PLVYzQsfGfWmtQxTT8dN5uN4uSibEgN3K1yYxxUy9N97Vt",
  "key38": "6iqmN7jPQTZZL9aM2N7Cxaynhv2Fuw15LfQsW81UBpgPNRgXmTCbdD3gaG9L5X96CTnq7kB9GoGkJsXeuZyvg9k",
  "key39": "5t97bzqmSsEFzyicx4fkxQwALLkwRymLJamV3NoMcWY24MfNTGrr4faj9wyeXNtzMPZ1najGKPghosE66q8fz6mQ",
  "key40": "KAcR89VCdQcJ65DdmUuoXYxuChzzZtGYCwYtjs41S61svjjeN1aUg9qF6AHmLDwufBmtqvFfyUCsk7UiDCoQvcD",
  "key41": "LAHGXw33TYbdytQrEGx2QqmCKCTUk13SzhG2dunweq2bvYuvKn1GGjQZUDvGM9eiafFLWDdttRmGX6siLWLfMT5",
  "key42": "M6TWdkjVetcKQgPvkCRPyzBLQxQneSTw6iEcxf4T5stDghHjGyenPSHgTqbXpgoYkYoFZmnQmdx6AK7pQonKbVD",
  "key43": "tSsUpmPXotaJaUyt4bdrQH9fWvbpvedogzzuPQRna5pVf87uQPF9SJ76ADAwhjbmEToeZGbpadw7YdPAv3rZgae",
  "key44": "4GBk7XWYJf4W8w2dKqnaBiBNB5DvQRHaevzhpSXGmUhDURTL52VhJDzG8H54RUuTzsZphvKSwMCNqxknrF3qWVac",
  "key45": "2mje5u74bhyAYEQyWiZGxXWSLzvGD8LwaTtKRK8r8RYuFFFLLjGtf4jhRbtsxoDvknAJNGEJJ7qMmbcT5teX7Axm",
  "key46": "3CmEBv763oqfKUr97fW6CJWvPSkuJwKZYMvc5DLivKoT1hBqsFzZoTGbEw9J7i9qWjfE5a6vhdhcS7m6kq74jFLh",
  "key47": "3GAN9Dbu9up7igRuSi6JyCEF41kLKj2xW3Jz7Br19gNzPwZJ1xcvPTyjZ9fnaW6CmZjD9gDjHEsBLuZ9H9W9d4y8",
  "key48": "4nMKgdbqeHjPPfmiKrpuxaupmjeCYXwfohhU6Ux7JNPHXnsPQqw6ezmeY3ALgPnD2BVv5hsCETFfjLX9okoLJScC"
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
