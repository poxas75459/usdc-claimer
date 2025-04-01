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
    "37NaNSXHnKbydq1aaAjbFtV6Vrja6wga1wLCgMLXBYpr9PcYjRbc8Vv4VhNogc3WzBzRWcifr5YhDUB4Lq43Nenr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLfc9tmvxBUQM9kKnhJWw5xnLCLttNnRgsJ7RSKXiGMpkbYxm6wemCnoDgikMg4WxBx8dkmF3yENrFMwhRLALzw",
  "key1": "3NyYXm4X3cpqV4Jm9KGtTqqk5pJU54Sss7nwQ53Wy5kYyFKr8YugX4NCkXML5RBdjC1xuFdFc4D77jzxjq2Ed969",
  "key2": "47ZsGnrKdj5K57JyNa54GxUiEGdEXUY8LnvyYmRyqHuRdsCEBmWJPK6b1K7J85d1JjZ6QxhNTE3PTJTyeGPaLf6g",
  "key3": "2nfGUC9XQBqVVywKddoZHvJ727jE3PfTMxkMJT5GuCWAd5jhNYQz5xisvmVq82wh69QYoGpJgKrnNzn9wfBPZQTg",
  "key4": "39idSDQRyHgXkZk4DTahXYYTEtmKv6XAppJ7eBFBkbBFTemBNGQUG5kE6TfPJLhejN6fXAdWaP94R8pm1NVNCc4c",
  "key5": "2EmeopJRiejqiKK1Ju3hctp2i4b7GECqPrTkVCUQ12GVqfYnSGBn35CRPuJGbdLL6ETSSMWSyWnWHZPDP8baWYzs",
  "key6": "498TSTR85K94KG5Yb4teThiFA1Vcs2VZn81xrTDiSthT6mis6W35PG5wD5Vvzo1W9ZUTQzWp1VWMury9rzLQAnCz",
  "key7": "3siRRQFo1sFMEMXRGoTTkZUZgT6mzGC6yGBfQTrWPHTjrM5vsA3VLjgXnqh9nR11ndEcyEHKgbRqVhYdCzDodKq3",
  "key8": "2xXgF52vRkTDT3QHUjE3MuiUGbCH8GC2Ty9caWQPiMhBqAv86854GSz1qLozWDAR5xyEMhSiAtz8kGvofdVxgTJg",
  "key9": "2R4sDhWoR79xAqxZCXupN5WaaEcuPgvLPgcrcer2f9gwL98zKw3sqgyiqLouZ2SMD1squh6178aSy5VviCUUuupL",
  "key10": "51v8393PNeM2w3RDp1dwse5yXL4nLYwE89eBufkHPmXkPUsexRgUT3fnSY8a3Q864QNkZTFet3TARK5661iDzCGr",
  "key11": "6474ew2DTUFbSzjCP98SQSALAuxNfdWmU7NLuBz3BeESVy7EXeyj3sDQfPWsX6DifM8ypjUChgT7dKTCnAS4WrEX",
  "key12": "3Se6QpPAnWihjK7PvAaBtSc7KbT23XZ3Q4YDnokwBoQkEjTMjkR5MbfeGRBYeZwPYotCSkJfp5Ay8m5SgEMx8YxL",
  "key13": "2sKGscWVqHCFQhpqegJ5s7mdN5HDRzvm7MrHhkynKW2HggKfprGEpDZyZkR1MZJvgnuN2EX6mUwcGtGgimApHJcP",
  "key14": "8PT9gKoTDAaoqKNd32nvTUr8cLTsiBetjMK4DLTRh4ZuBnSbsWxVkHqkGdCj4z3fquErzjrivFe6QFatpg1cYxG",
  "key15": "5jnZqKL47ScJaB2bAhitfMV78BZ7HAxErPsqcVcNmaUEtLTAoSXD4AoHAL71FsmcNCTjXao4p9AsfwUhcHBpNm9y",
  "key16": "3uFVMNMBedSjnjQDLYEEcqeNGNB1jaBmZB6oiKdxebhzqoC78azBcSBLMS1cTYR5DJhGHLcq53VVifegUK1U21se",
  "key17": "3TGxxJerW5r4sHJnqoePMxoVpeRE7URP3SpFo2XunD7w296MR5J8spcMrWxEoieGPktxvWJwL2UtzUijJiRepSfX",
  "key18": "3k4AekTvevBS8puVjZiYpmF3XJgmnJLP9CbWPBEb1T4VLUidh7RoC6KtZhqN2yYpTZ6srAcdrrV72hVQqc8egrkF",
  "key19": "2EB8MC5zmBgRpmeM1of5jfAmWnghevobkuGVY2tc8DdCP8TGZurLeS65wYFDfHwSTkPeCJ71tkiEdYJoZYZoNngF",
  "key20": "GFLFj7nLZQ2SJEhg8NT3K1QeBwWqbuibFVf3HqeqR5wfWRbGqTNMAJeu6Mckk5vM9qNfZYKobgi8GKv3DJidNR7",
  "key21": "4TasEnb75tRBgSVvWADFih6JVjAXmspov4CbySeuEqzCYVW1mgncMgkpZGei9EtQ77MGmC4y25Lv4m7g1uXy41Ls",
  "key22": "3hoP3nbETAC1WjuHjcvYpVWW1AeV9XmZJXZGh6234kucjdnVzQ9Z4fSXsqMBXfJdaZf8FepLdQniFP8uVUjhX4xs",
  "key23": "2LeC2yhvCvKW3f6Y818ZYCD5tUYpVTNv7bEMozycaVjFnWuMiguMMGxHs1kYHUezBtvoqATt2rQND5FmY2VmRMeo",
  "key24": "5SeFEY3J1X9dot1SWnCBp6xfXWJnZXpfyXv2aUWWbSFq2TjiMwueZQZJckuECdXSJuFJVQZfnbpbEW7axtW6DRD",
  "key25": "3Eurmvag51aJTWZn5Re68YEFgpBamt4nB2XPsWk3EEee6X8YbmSj58pNZXfqKYUmtk6raSA8xGmeuLDvhv7rtSz6",
  "key26": "5gmQwhsdf6fmoRkHj9CN2jyRPURQSv8DWq5yGfEJ6a4LViF6TXgfo8M3v8UFxjr6zeMHxGC5BSUDPqZDr6EVoEsF",
  "key27": "Fuq1gEP6QEnDUNrniLEVJP1nwJsbjjCzsxmitwAQ9mSzmG2YbXKD2k9EacxvcTF2jv6hdBd79umuSPoQM5k1vm4",
  "key28": "5eJL77REAgZCnPB7tTuHGYDU2DEaQoLcaRq9C9VwWSVRRJbti9XEDN73RQC8jH8p4WtdpLe6kDqDYnts2Es7obxT",
  "key29": "3TFHAyXomBiag4XaRNixmjoKmcixQ4oLX4UU3QFBSvkBUouHW5vkcUUbKQ4CffeFw6yReKqYsaJLrZ8BM53Cw7Bd",
  "key30": "5KyBQdHqtfBccG3sJURhTpKARturzZXD159CKHB52kL2fKkNS1fJUBGkwCAMeV6UGvW3Rw1BBcGJpHLLS6m7xwsc",
  "key31": "3ErCakKTL2XyTxaRMNbtRETmzgTd7dKLRuUzY3fRcj6qDNjgZF5zoMBxS5xe2j1xPxD53ECQc8CQzwnehqTcT2bb",
  "key32": "4kMdHKZYsrRn9hqp16aKjhGZmgkyGM7dPHBmXz2emvA4MJX5wzBHYZakDfAYwjPBhSrNAe4ve7eUTBnviANUA1t3",
  "key33": "2CKDkwtbKMFZj1aj2SrvrGssQnrRmZJS9f7MtFDXKancXxZcUWUt2TbPTfRZTS6J5r2RSG1CterKQhpH8hskk4Ff",
  "key34": "3kXnpGMzJQ7uFkv5wjpzfyNc9H3HsXm8bq6yz4pVZd9tEFxcN9dMxrJ1rJwDxMUaT1WsG4nJbKWZdtzpZPUnEPCm",
  "key35": "26L1BsvmvPjtRBGTHNrf7hTVX3yHSyW18Q4jRmA1R7yYX8ExJf8avsc4WoerTjqtATzBcpmAMYCPj1R9QeP7ihoj",
  "key36": "1EGAjSPj5m8WQKmXEa625aV5ga4hnS5e81Hn2EqGQWefKTwiAM9QmBUEcNq145NAYJVxhzukg3xafvCJGehcVzL",
  "key37": "5gCowoL2TpsQiYC3dzChVeNSWMR41Bu46i1JjXCMXqECkXqVkWqsNThqBKKpFizmPpmuqQBnyGCGcANCS2iZAsJq",
  "key38": "48PnKnHCyLjxU64UVGz4azEF37tK3KBidXqSDv51SuPBwGg5muV4hahRyEVdCqCUBBq7oaMXQVzSgHvZhedtLsmV",
  "key39": "S4iwDiKiVUWbbizhP8cDAecQjXCNvvbZzSnExQud8rsgwiwjx9bqegQkqPCvP55PVuXpwxNN4Qe74yiRF7uj3Dy",
  "key40": "3fiTefz6SpWLSLQCAhs4iLF4Ca7wBtYbZQRtR2GboYXtwdw6uMNMwucH9u1K4NqVuYpy3v8Tf7HQ9mAjKwukdc69",
  "key41": "5NvzHtbjp1jsWv6qtacYpHFn9fdv8ivV4RipZcFwd4rPA6Z4t6rPdTsY1RK3EAPKFucd7WHRM7eFbNtkHQkiGyQM",
  "key42": "58h2rBjzVZZPSb6vGjhvJajzVxkKZfwuw5R7gevveo9KWYqq2e4N7NuX1KU8B54wh6jGBDbyxEEHuRkHJNYJXKaV",
  "key43": "4kjprZcsQyNMP4G1TZH94PMDU7Cm6DxFzck9zR6VkYriuwbKemrjfrGJkbGQk7TNw4fvknRQmXLC6ug7AzcviYtB"
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
