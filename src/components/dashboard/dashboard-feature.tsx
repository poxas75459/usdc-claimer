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
    "2PjLHo5qfLXSkpZQyfZYZwQbD8ChJ4MZ8C4gcttj9F3R2LiAxQAvMnjnYVDvKUyeJ5AfEyU1bavj5SSnRdmFcG4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7hgS5dPMaRezc9JbwPvC4JqdCJSvBEfZsNCok8aoFykVsrgYV27ggQuCpjEB1CwSkmZKYKsBQDncJXwN8bpghnd",
  "key1": "3aMfBendGHvvkQHfPJPFrqp2cqpTKbwzD7g9CmsEdNDTjGXhhjw9bMe68yyt3EMCbSym3Y2Wd3oypETGfmdAAvqk",
  "key2": "5G8PHdjtyTJAyZxtmXtLv8ianbCFaKZsgBP2Y6t5F8bXBtq4UdUsQmjbW9XTdtUCsZj56CXR6Vh1XYqjR1QYsFCF",
  "key3": "5RaQeTiezE1wqSDS6dv4g6KnjN3cJHy74NwcVpAXnbheZ9zhZyusKkd14gZYnSJMYot9en9WwLeRYyTx8234iFGt",
  "key4": "48va4r59hvtthfDZrNBNVXRByix89Rq5poFLGHxsGgUPRuQFfWYa7mxgsu2FBTWpcke8sdoSETkz1tsLXkbzXaz4",
  "key5": "23yGFo4iSVpeVJ6SiDSXHhogfTitxK5PMd97UnxbgLo5TtYhKFszPzHYVvnxYGPpkFikjwpFNe5qgVMRzzFP94EU",
  "key6": "ccVpxgw87KcoXgbo5bbKiVJUZbCz4uFm1oHSPW5UaeZX9JTKywrTZwUxvhY3oEDANjQWNSB6d8CfJqVoMKA1BZi",
  "key7": "45o2bmLqGswT3j7NPChxFn1MWnMzqHL9a8YM8pGFHSpVYAuam7cJHa2FrDC8XAPHhGbCSGni1CzJLJb9x8dVZ5AW",
  "key8": "4BTavNh5yrrrRiCQ4qWNG44x7Hb3L8zbRxSMUmEE9n8UqX56hJyg8a39QQJtP7awAUqhoTbmu5zEoVyL3pJ5EFjR",
  "key9": "LQsZ5m57QgSZWQs8hSwWhQ5nxiVg75Z4dCiExSyWmHmn5WuE3jCCWL95gdwN4ZZawsSKFKg7Xow8op2HqK7hFXt",
  "key10": "3ym8gAxJetHbDgZrzvQGpwhtUBuS98LLrxFXFjMQn1Y9WBYkXfs5GSyXv9VzUzrVeME7CbzkHXdH3NhMzMS73ja5",
  "key11": "4MDyjMvscSHkPuPRvKNRPoA9nQTXw49HrhVCPxa3Lp7wemnzxUvTaQuF3qzNyNXZ4ftkoXNf6T6Y4HHcPKVEA9hc",
  "key12": "5f5sGQPQkBqj7Ybg5Cva9qVtHPqaToM34XWwG6VmQQB247NxFX2KmTZFuPRSiioqpVYYm2PaiiNMmCx7rBX5onUK",
  "key13": "34PRYh96SdxZf2jiE2G25eDzVBswbcqs5kMtHcnpv5Rx8JH2kf9VdGuuksK44tJxFu2n5DFwdVwgaRSfEubwLguc",
  "key14": "3f9mKFL89hhpdLJagAHMtJLeRC9UGuWpUHVcnLMM5YTSuVLyUDBumDMq3gRmUftfuBW8qQABtwVbGjzrLB1LYPE1",
  "key15": "44iFEJaupG5sviMYswWEgbDWffX6jGM513qXnLfhuGgMkqyQpStyzsXApbRgHGYeU2GV8FakQ7tru3SNqJKgRMc",
  "key16": "3s858k3TqodiCqSzwehSYNQvaiW2fK6LBKnF9Xn1wUyf5dHqhecXTSEgdx8z5ZHb3bK7v3oZMnESgRUHGoLe2mjC",
  "key17": "5EDTyk6wXMMQPKwsywJ2r1YXzLMBpeiWGvusF2nSgUqoaj1AzV2eJnqA3zNtVRmBqMYiqr1y3HduR3FfakatUfTQ",
  "key18": "5KEgL8SDUatNhd46uTAWjhKzdTFvYCYSzXV1igXft2aSdX8YH2G7wYicdxh9twTasjunWYsSfzVLADx8kEigGgmF",
  "key19": "yc6GJsE71apyFyoCim8uqAqwwZWWeion1SgtqYXxsQaKnBBbqRr6GfnyCW3WLdxwkyQo1LfTJE9pjMWmnoVkbqX",
  "key20": "5PCrXVyj11fbqSpN1x6moBoWZtaG1ts1xzGiQi4xdi22T2nCpUWAautf2iynkMZrvABw7zGajTW8TT1SuyaDDMzP",
  "key21": "j56saGpjtiM21vNUqrVjnndj2HMkcdxvGrEqy3Wh3yyMXz6cLKuij6udEQdvBCpzdxyniuriAWnEsaDbAQ68jRR",
  "key22": "R2tXVu7FmYT6cggks88hPZUiqzzGqP5wkcXLsoBD1gsNHAXYhBAk9AyU1u6sJSonVAypRNKT8guAFMQwVJeJTjt",
  "key23": "27B2qFGDfBAMWY5sfsQ9pDNuyVxzk1mRkwRUDhzsDs7wVmmfLh1cXQwNkZpHenttXHa52TuiMkaZwFCjBexLCVyf",
  "key24": "2JRWJTwfKW2r7VtM6LbQZykfzkAAy9v1c7GHdr12qgdoqpntxhoQS6KyigQ81JzYrnUiL93TYrsTy5NoQcmdqGFt",
  "key25": "4saj4kiBJz6QPBYZzTZB4ZjU9UR4vdDfxFAJZrdG4YCQt44vo26JKAsSJtCd4Cnyahb3xBfpYiiFJWTL2suvpvVg",
  "key26": "5MaE4yK9etHy3yjz1Kwu9FJy6qRmgfg59EH5m3YKEcKegTKxLoe66azGgu1wS2SCoHHNiLKrVhTP3x8sRBFpXSrR",
  "key27": "3x64meSDE5sYeG2xG8YL3pA5ZLCW2bLeRwhnabteRf6zTSd46HNHqwMpJDsB4HPs9BVq9nxQWrVFxJ2prA6erXMU",
  "key28": "2RUREUJESTnFpu5VKQXmVc9NHfu3mbYuxYmuWGbhwKetvLbqnsjXhDmDVJBRg4HeEgedbNpF7kQ9o45UH7KJMkoR",
  "key29": "bAHmyFBQMsxL5NyJsfDsHgoUAJDecQsNG83FzNQHr8HBJXEgNzEcWKSepuwUbjSJ1yZFRr5vhWvegmWrCNY8VJs",
  "key30": "2GhpedVwsGhTeD9XmVxB2ykbK7uysG4S6FqPzFVGWCdypMDuaZiA8xX55PP7gV8CrBGyiFtbRMn6skecumD6YXVs",
  "key31": "vP4kT87n66RMuyV7ERqcRoKPTmgLoA76EsYQ72pQKSjN1E4jZUuYFSPFXYYuUShmScSdYMNhghV2oRpGRe1Z6sT",
  "key32": "4p2LV8GovgrE78vuejfeBpz6YcreK2Vm8kmo2yNDdgYD6vrQfooxSLxTYhLTaW3gvXQJtMi3RqwqmnV7EdzM2xgr",
  "key33": "2AFik3BJWJtCecBY2SVfWVr4iFzPJUNw7skH5HnSgVggA8V6Jb6Vhk58484DsB8acB8Jwni73q7xyQJzMUK1VBz9",
  "key34": "3cYfsWo5srQp1MZ5MtR3iwPwHeP5b3mXgqSvvZeMY16DC6bkyEyHREj1bRkwFsA333LHJnnQ2AxknhniAtpoPJGF",
  "key35": "2pXYN2krsvTot4P9eLDh8KLQ15x4crQQPJTusrmcP1Rpqq3TW7QKjw9GZAqcUYJgoD2AGRsVsPcDm1jBFqMr8NU6",
  "key36": "3bS6L7VKXcKD2sJcFG8D43RGqkGEcmmZR8JTJnVFK2E9mQ79UbFx323bSqrYb5Wm2Azo6zYJYRsP15fcDNt7rz53",
  "key37": "4ZTogUwzunuUNomDTSxAbFTUjgS35EQNEWTzaics3viMSev2TxYtBAW8MprCSmoc1cmKc3j2KYmokkZvwmGmgigU",
  "key38": "5oP36HM6ZFkvC4oBt3MvdkM2vhTfNAyEtSUEJhj1XCCHB55mZ3MSaWRs6kMoJ9GRAWYdzht9UwqDnj418oM8qsdJ",
  "key39": "5BtGezmYSPEAiStx2wNbbx1T6p5WJtfvaU89ci8J3AwSqhhTxPuxRuZUfakMGPZ3FdYH15oagb3fUcF7RHGT9PpP",
  "key40": "2ciR8DjeZzFyHRSDFvJwGgXDdG4j2A61G2kBYpt2frx7wxbt1u6L8hGZE4CRx7qkn2DW4wjr4SGuvvYfzJWyMEKv",
  "key41": "54jFrqh2trhV8UCievNvDnmMDPUT3kn7MHMeZEjBvp3rdfrxi5HpWjdBvsBMspfAG8mb2Pt73tH7ZtP1s76qzTcd",
  "key42": "4r7ynGwpqdRW4UqbjsA5fncUEyor9siYJHyrpkshWHUgxRhy4iAMW8VuC56DxCyhFyrKT1CZpit4Gxw6fGLUUm2n",
  "key43": "2wq2oth1X4GzLS8BiUwYW7VsNMKZKPe4PShzJSAaP7rYX9jVsaxetvk7cakzmcGjQxtPGikxpbWZj4ZcqixYERBU",
  "key44": "Ukvp1aw6TanL4H9P9kCkGAWfAgGafWZ6Vtdq4pXLtHh3ZkSLbvnrVhzT6tGZ6PsH9kQtX1HqwnV6GcRmofn1hUf",
  "key45": "2kEybrtVqKFhmgG3vQnLC9cWuwr6GDiEmu6eQYioSMdaNKutuYL8Jd33WXKhystupcNLtRAme11Tuu2hPbhn1a75",
  "key46": "2dJtxLqtbMRKkCZkNoPrgK5LdGomP75ocNJiggK89KJjCW6nBx2rEZzrc8NiaqZSmVSS1JMGB5j7teEsEFz4xC5X",
  "key47": "5AA3f8hC5E9XM2mwRHCjBgVYxcYg5iUokimWeaGNVvX71HJo8Ft3XjaBQWTyAGn2c1L5fM73EhmgxE8gHaYKjKpK",
  "key48": "3Enwh3dLEGDJg1RPKQ7SteZ6RLPANtzajTJcdKm5Ha9SJxeEaeYG6QcjezjTT8xYjfug3WaPKBnyk6VboQJEWmDZ"
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
