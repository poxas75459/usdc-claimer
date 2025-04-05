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
    "2VfkeZRijnQ4ntxqphbceCdWQJRMDp2nRnAUgc38itZ1YgkxxuLESdjqHaB4N15D7h5GKR8gL8cjQP9hH9y7Y28Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n8y1EBm5PjTPn5taoR1oMKfjrQtbCrtQw6abxmdnvc448WmsbZ3VpoCZcyKgjn2mJbHS3yqDpTH4puxwMqrwimH",
  "key1": "2FQLe4NBGHVCrN4m2DRJNq9e1xeUXbXDdidcpgNkytWEfwv1VLBe34kajZXiQmgepfbrd7HREPVWFhZTsnkL3Bxu",
  "key2": "4Gnn6nyzBmvhD4WCtkuUTYzrnDpaGHvtqF4WbAknjVddtCFSNAjeLTY8SipjwRKCQ97qPVYfxVt6UBEBe5fPdcXm",
  "key3": "fAK3CaWoARxK9RqevBYUvgQgubpcMsZNvB7nvmQUWPpGz8pkX5AReMnbXFvj1mcQU7cXDjkyYrw7VzzcPfoHexR",
  "key4": "5TnSbijVqJ1r767zgosZYt3q89kDuakShUSHRoWAR3RGKgjbAiNFuPWFKkZDHTSBNueDJTsuLmpgz9WVckiuomKf",
  "key5": "5xJhP5AV87F9TAav4u32z1wTAR6ZpFugenTZnxfAva6SzYjNvMrTaFsKDVFtRQqoh95ddMnAMog1wswboMDWSMnr",
  "key6": "3qGLc7DQEsj8Lw1L65HK4nQQUbfdcCsaY5CCV9mv8zqkvCr6f7cSt2TpKaynGgE6bNrU8QspbdoErikTX14eQshh",
  "key7": "24EggXBg2kdfhKU12AduMJgqVbJnwydx3ycerDkE7b4g3UtGTJzq13KzrUT7knKwSioPhicuWv5t95HF5cNtAQDq",
  "key8": "5LRBmiY4QaYnkfCrdnqtH7f4ptGWjRymkr5qdhLCh1389ub2sWLDT6QiraYwpSNWpincmUsWBeiTotVB9wSNGRgq",
  "key9": "4fBrB6qFftvv2jeZ3igsxALNv5GfTYmfzxMZ8JFD4YpoEemLhNymSPnNoh4FckNAdjeyPosUiSDvPpoAETNMmdLT",
  "key10": "WeU7fARMeuEJiKo4e8WZmNDsjyfeSeKLn5gw1cuMZGd4xJw89uHhHQJVw1yaTW3cxCfh6fatEDeVNMBTPyXdDq2",
  "key11": "5HyG19a4v2hgQGEe85kk7mLSe3Lu9sHUFukNPH8YTxrTJyp65yyeyVChPne1zC4DnyJWuByh5KHurwPotDfwqBkK",
  "key12": "2osoTfuNZM1NCAk8TqeoGnM6JYzXDVcdavA954NVvKSKyjUzv91Bo3G3BKs5iUME5avYau4VtgLkPAGMFZn6aV4i",
  "key13": "5eHDSjF9UN8H58JhDQrLG9SWe4JLwdfQsdX6H7Z9Ky2pc2HzLjJbvz1ZumBKE6nw5LQPmvRQhPdwt2VFwZpc31bv",
  "key14": "PsU1H7uVn4iivDMSjBsRCwuEKg5oTmkvv7QknTx95qsgxmB2hM7VZ6Q7Qbc8bCyrAeATy3mgsAsvcx7LpWQttnS",
  "key15": "4W4USkta9GcK95zgzBCXuKfXorj2oeePxjT96i4xccxC3oYSoGLw3tcvNSE99g4MPDHJBxq6xVAEuzRghtnyfL5b",
  "key16": "2HrSrWdagW5YpoDURxvVH9aH6qo7uFe2FNZfwaykzVWKe1nmU5fAtiQ3GDaFhrBBhmE53ogPUMhSJp5xLmzZD2VL",
  "key17": "EdX7mBVZhxqV8Spwtk3QvLSKFpShCpVUwkT3NLsjyKSBgtK18HfYB2wgVkHh1AqgmWMWDaVfuQSBH9fM6H5oqh8",
  "key18": "3EE6AsAmhyqjzFyn1fDuS9WVtDzjAjKdDJmGoMnWuT3eFJ7kD5tvX4EphNUZeJPXTdegm7vLUbqXRPj3YBomm5es",
  "key19": "GuqQCk1EFud1MHj3r8MZiJqS3ztA3bKLnhw6TbiJPebg7Utrz2Mjm7EMrKrJLe8ARAPdmih1nXarMFTg49eNhiF",
  "key20": "3oeF8QUq5irBfv6i5wxzNDspCE1FTc9hYtUEt6HmT6aGgqRikzbSYnbz91yfwU7NgYSDqdQJcTnBSyMcyMmwACL2",
  "key21": "3Tv5ZmY48p9qA4eDYLyzA1hqQGkpDtkmdMgEZKKf2b8iveLvspAAyeszZJkZg2bb4AfTcnXyZb7uWti88KCS2H8m",
  "key22": "5aF9KJSLYBMEGrfBb3YuhStNtjptgByLfaA4nrznRKkztiNSvytVGaqcZcQ3uhAxDFKbpuH7wibJCdMJ2jPZDALF",
  "key23": "5j51KhRGyKZ1ehKxyubwsekFSEMF8VwHHmTs3DgaXb77w3K8SjSXRqH13gGLv7hJqHXwZN8X5ynY3bYuUa9ynNhd",
  "key24": "vzMgpQ52RrqH9vtUoAVFuq1qzxqnZUik66x6Hj63jyns2J3xAyjmC7m4cJAF21LfPjWpVZAiLK2dPc7aYgyRuvw",
  "key25": "LxUSkToFt7ztSkwEV1qrK8tTU2sRQNaycAPpzL4TDVqD5aNHwPozabC7KJJsd143wUT7GFcHhTRh4ghcHmpmqsT",
  "key26": "3EXB5xWpaJ7qgcGc8qpHNDnrRHDTroSfWvgNMFq39u9wWcZU7shsiQAu6DYCK5ApQAc9KMXnrtGScPPZZsxY9tFs",
  "key27": "Uju5iA2gb8LFWVvHjsbKrtBxGJ5HxBvCodYn8sTDttG7HFmGnbUsc5jWG8ULExH25qarnfEpWtV1up1J688KW78",
  "key28": "4JWgrTNARRsR9v69UJLTaZpDKJWaPqgG49zRnhyaLps79dZ86PMgy4sak2JB1zTF323rs9zabmUkdbSnPMCaaLXA",
  "key29": "5v2Nz4C1NLXr14FPr7yAdpQMPKAsRv2sg6gyT85eDwqEq9RqUN6mmAnXa9c8e4wUwwkgfXhQdvDngz16TSAokCuh",
  "key30": "3BuBUvjiU1DkpZWaaeEcXXCE8uS7vgLJgXDQ7iXjRnhoRFYuXi75De8sy13xcTDvHCuGEAJ36fcrKt5D93kGnEvh",
  "key31": "3AjU1n7bg4ijvK5q3U7RR2KHivqfHyT3WTtYFbcv3QVnH2UAwF9tnkHyUxaf1xECTCwewS4ji4xhxTGDRdB2cZp2",
  "key32": "2fZ9ksinVZ7ouU8ygtC4y9FV9rWksPqiMb4P5rz55r3kmouA2MikFX9Jo9qieugriE54neeVWqjkhxoPfwNvxK5N",
  "key33": "3HBu4GTjVkUwTQDncyVw18VdW36Wg48XqmmPEuaTipcox4f6Cr7MDcz5S8G4qWxAsYSbw8RJmu7qn1tgy15a85mj",
  "key34": "3KTnKjiTD1cci2ivtUvAGKeQPioCeRQS4fxL28yVCCtMQKWRZCoLCu8mL1gdnP6qdLJzZMPvcMP9kHwrs8awa6P4",
  "key35": "52A1Kq4czzMfFZHdRLm8bmuNKBaGnEwyp2DNYtGxh765gBX7v138TP4nrE6SVrJwCRXU7KdfsajHKkdkgNzUTw8H",
  "key36": "662KBAhCnUcfown2aEPPLVTafSk3BHqQfqah8bHTYqXo1kgZiK7SRYQjMZPK1oJNw2Gpy1c47DXmDsw2pChaVcbo",
  "key37": "39yqmCnwDQqB6iQWjWfXxN4vvm7dxBxK18Ji4WsVKcvq8y6s89jK4dLpUL2zATpKHH8g3cgSZqWcpwhRvmCr6SGK",
  "key38": "42jmdbAfjohb77t6NK5t7YzMnk4sGz4mdDh87gM9NJh3i7BgCKXFrSBeVPCZWHhBZpU7x37ZVp74v5Sg3ZqnUviH",
  "key39": "4tBJaLbkri1N3BrVu5LDPNhJ49qXC2yTbVLP3kVqGYzRYqSMJQfHmRw1EqVTHow5EGkPyf97BHceeqzWJZivEeFu",
  "key40": "HeuSKRFkn7Few3QUAtsqqisX9AthcNfFr6JVvRwmmS91bfDmbfPjqMtjk8WGkv8L3AC37SgokkJznd3votsHZL2",
  "key41": "5T1BXBTPR3wasSvA5dvo2YffB41XVocwYW7sRC5bEzTnGCZvTWxDJtPYiDphc2z74VPBhErVEyeRqF9cg1sngzsx",
  "key42": "4Bd3RhDK1Q1x83g43BnB5wpjnV5gpmDfyw8cjgv958WUrHWybyzUU3duFjoNr8qNF4xo1eDZMHb8QY2Tv5PF7YtP",
  "key43": "3gZviY85xgGQdkLva1LiDbxFjNStBwMtgRxSH3NQsWaSb2pscwcy7bRgLo6ebyZwPJeTt8UPycipAheAVk8T2AfH",
  "key44": "3xHVLWHxKSDB7A28F7jD6Ny4pY5j9cPBya2yZPQUK5RopWoJBWzK7xTvRzo4jzzqNJ6nKLYG8uWcdyKyZQqRvyyG",
  "key45": "5AMqAoBDafpAwfPHaWizC8ugQuQGcE6xgETPbBLiH2ted3yXqEXtyaUdEkHYrXg9N6uYj1WNyr2tuuYw6Z9fHojJ",
  "key46": "RmnKJaGyJSfPJFT6gT3fTg8iRqabd3VMASs6UfXm6aTbjHu6S4ZzcjeAvs8zAoWqJgXM7TDbGgrdv6cBBEn2Ry8",
  "key47": "29uVGwa95RbPfimCWcdUNrzfthgfedok1MZ6RWuH4zqSuqWAxkXrD6LPDmzqJzPjC4pELn5hYnwsnNiF57pvvdYZ",
  "key48": "62HRuVchRWXGLrDshEhdjyj82d2Hx6eR2Mej7Y2zFgh7pegLb1KXT8LkrVuEmGApBa3CKca616KMm2gC7isC6oFw",
  "key49": "3QKoLpsTpLmKt3dHtuWwHomzBnM8GPaAwUuKiYHVufDLCw4iEN9C882Ug2kuaPwfuYASJSSvcFCr7gJpuaNAmiE3"
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
