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
    "59KJ8ECBLDtpxcQuR8Mq4m48z8YxGU7v5thy9NztjyqifPK6oVoLyrcZVqjpYyPdRs9BsV7NQLoQdc3saNNgMVy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H1p8G7FjeaUbFEwFXVSHiPETKm5uhMDdg6BxXAZNXPL8boSY58mSetucCLgmpZoihu8cWmbmQaAuVvSi8GF5y2B",
  "key1": "35b83gA5HqPt9HEY7SkkLe9UyW1YafHkqRBLwxmb1W2JnDeYHyDokEt47XeKovFEoYjHiHABJYKJnrR7EZkXJkaH",
  "key2": "3fEpZ9Q7BdVtm9FvGBFfrgv98PReBgPf1KNGXi3zzEs81j8NbHXNRgmpuZ71wPqs131JgS2NutnNcGaPHq8Tdxxc",
  "key3": "5Y1hQrt7mRrdjfKY9XrKEBxYgtQqcsUMoxSkjRs2CjrU1WFBbrk1EkeYzB33x8RsMcbwPr9Fpih2yyTdxitn42Qc",
  "key4": "3Y7kp58qu6RkAwcCZz4B95mRpSXEUWia3vdSUNF8zxSyBXCAq4XQbLdbhrn1HBbAs2Vw5UoUjzB7NNhMGeqRqL1L",
  "key5": "3Ge32wsUKHnhitHQxjqX9H1j5gZjo7jGDEDEMnUHYqb1dvSEApGGjEX6XHchJnCyfdVHuhPXdWoDTHygMvwRGLxk",
  "key6": "3zdaHMBgaxc8QRu815Knih6QJMNRaPuDAdpftDVeyqLrgnficJeSVsAGhtfyvr1dxRS3pK249HM7L14jA5Mw3996",
  "key7": "4Q2JD1nN4kF3rXRzUvdLnQkWw4odJ8nMLfwoTDLcBAaabHzB8iRPswY9EGDX6unmr31fuPRYgdGnjwZff1jNwS2x",
  "key8": "5hu9RqwEt1X9FdbedTjqhmjHcprGfzZ29hew2qjvqx1PKxwrod6WxzcpMZNQVnq5Rt8YpDeAg2zcawyZm72bbTgd",
  "key9": "4hjfJX791HyN92GCjritYU1eYJP5fCCLWMfihMRiz7YczG4fPjY6y7oQhUmcdsYYNYzQJhTZBewbGzpzMqNM2ANd",
  "key10": "5AJoHrEYDezwRy4MRusmnKbw6oyJz9vthcb9cWin2K8DD9RXJREww4uVoeS1SQRkbz3Bue8xdayoGNNkUAco8iSJ",
  "key11": "22i5UZgQrGFq4zbPbytRLj3uqjkadcs5QW8zMMqf4yqNdTm98BZ62TNVkkokAQU3hEMN1cUGckbvmiHuVkqNs35t",
  "key12": "5mWXRbpmX1fTebx4bYHUm1R767i74c9woEehJGbCzTT5Djz4ELBh74Rw7NnArBpdc92tLRXLE6eqgctgKpPaHM7g",
  "key13": "ew5jHF45yrW9EJxkpfw33FBXY1KEDanKu633XUk5RmR9g3zCkGGHx56gUM5RV6L4aSsTugqSk73ze63rZN7YqyK",
  "key14": "Vefr1rtxKKUX651iztjXiui9DLo8mmykTJqNEBA5PvK7RpAKnG4bxWgLpanoqjCyHRMEdTQ4rShejJrhr2NzpnZ",
  "key15": "2smB65ioiASeGiuuxLFCZJLX9gH6KQXKyRz6SVDmUKDZRSMNXPFXdewt42qumiZUgaXVokAEkWHFzB5dWChoJTJq",
  "key16": "5mcbHu6erBA7bBJFQKXGthmy4vTvkZVfj1pKd2YGFtRUyDgJgziFebQ39dZNckxazRzR8mdJUtWzUt2VWMtXeubq",
  "key17": "4me2B6ptRB4Js39UE39bmoRHavy3VoiNQ9x9g81q92MT1gZoHNzbVYq4FLbbWULAjEKc8Qt3bY9gcQK7VLZws66g",
  "key18": "YnkTS6dEUguvNW1GjvhWYNNwVr83cK55m4y8kyCSi7Xk7XQjHiVBKqSZgo2ymAvPriujWp3HKyK7sZ31P1qzUzV",
  "key19": "3nEj51sjwgTYhr83qywkSWpgZV6nXEbecrWqBhnq6HsWgkrhckAsAjhJCVTFcqahkSY8XgrtEWkBo5B41GK6Rbp8",
  "key20": "Fz6R4b223eYvS9sdhXn3CmJRkkQfjaod1pWXmyzRuchQKcebQEkbdmbHUWJxEfAyNUWSsvD82ie6RvMWypDCbq2",
  "key21": "3fBzHzxeV2yCa6DcjXZwWy7GArTggReYMthQEetkn6D1Bp8MMkPTr651wPyQaNTVEdps88WGmfGsXtF1NkbJs8xX",
  "key22": "3JBFiXEPrLKnQRXL72FK5M3T6ouySV5MBDQsx5N2xduZW51WaTu4zqdfLiNf7BHEDDLnRcTgku1WeyZ1WfCQBxiw",
  "key23": "5R47FszCUSictGd7fRtmKWMZbLWLSxrc5THqRwWorqnAnepKGdYeXQvYn18vw87Dkv4p13xiGDu9kr2XvaYxVA4e",
  "key24": "4JLeRpeUo71Ukyby5badc7fXQFgut3GdiV795ue9CqzYPBSrbWeA1HgBwzF39RKaXEgcmGsBUGk6hFMBJEZ1q8M9"
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
