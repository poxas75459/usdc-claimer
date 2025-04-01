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
    "5ayBggi2p9SQTHQkY1RxsaiJti2n8gnLWv63XV4q87xhPgCcANjkaqcJ8Zx9XEvzgbSZ2GmBra9xHcHuBH3na8Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjBvD5bkCPXVbMht5xRk8icGD5Kdj57MsdjGSN61T93cF3pL6xLB4tckUEmdeT2wN3FfMDYfnC44oLTkv3dZ1e4",
  "key1": "3v24xFRZVa86wTjy2xRMeDUNxxQxLw94X3TonGso5uqNv35PUr9FTpCHvcASbBuqQj1YYcw5shdjHe92arJYSwYe",
  "key2": "2WQQ5uEeLmSEb5bbPfBdyzQbPWUGso3sz7Mh6cX5nwZhLMpBWgi7X4s8kC2UaECqvMDz2q5269nYBmbs56rWfnmV",
  "key3": "3bsUjLoZQNDbsYbgGipXynxsmFTrwQZ8us6LnxNzXw3dGBVsCiSmEKr7Rtumn1wbnV1ZbytCMv8xhDEuY7poD136",
  "key4": "5VZg9t6BsTtXEtvUMk5vn9rSE45iLB9kmGNmbdjuUBPKLM42pxZrXZLR6mBJiH7NzPADbdiPx8mpet4VrHmuf22U",
  "key5": "3fudrP7n449PHuHRaKXnU1yZPiA4v9EFb69zQrF6QYLi2Dp1S6wJbrFjjteU5eD5kVQKmnQwpZv3dW6pJHwhirnf",
  "key6": "3Bv2qvS8CUXN4KR8Vw5gA8Ehvot76xHnAXSDzfKbRr9ab6xgvUB5TbMnBr3GaDVek8EVTjz3hJepLPxuQqLcD8ma",
  "key7": "3qJ9Px5Dw7isNDDHjEFizqd9M4E8E8FFuW1FosE1HD78N1Yqx49PRXnKdowLWN3YLQ1c3ZNfeYF3S684siwvifC1",
  "key8": "2XjR4VrTWNPFSC47NKq5Kjn1x8BdfXyiqM6EhEUB9R2SaWq7hNPocxK53AK9pRNWCcuzfJF39TsNEreEMVZxgscV",
  "key9": "657mWYbS9ytxXCkFNqFor2F9YyCsnhsgYPbeYNkFdaBgkmd9SqUgpj3FRBXufBebJWycAD2ydu7f84fHbycVdJWV",
  "key10": "YQ4fRKjMB4VWBANpHC9dKVoPkFAH6bJnx82RLQwuUpuirC69vT1EBws3pDKFE5d5f7jS9iQJFBqkSxWRA4fNykz",
  "key11": "2irKDNMAAy8N759yEAAkPLY2JXbfFMJz9xXDeszXM9Gu74ZCweSyB6tH9zmDpjRekd6ALU3TCU7GA8pEaN1kXgRS",
  "key12": "4iw1Xo3JNsChfVX2ii41PABNnPg954s1WZxr5U3aYm3JcuBor81tvKxKYrjQAsBEL14Cwh6LwtMptTLZeEP6rmxK",
  "key13": "3SW4kvZytJQPg9xs41S1aUPMFfg1ErAZbXP4gRzxfq9GphQmD8tPPWbwxFumgbhSeixKoJCJLEmdbhviUXHqVzJU",
  "key14": "64pAviiZHLbzYwVrCGtxsJaopaNzxokVtjNmpLSFv6GhvEVkjYGDdJXxB5CwVGMC1nUaRWHoiALeKjJzDCJyhvny",
  "key15": "55HSTEM8esYW4TzuSVQNmtsdR82gigKCzue4oLPvGgEFUoQeUJbaE8ryfd2CxruucjJr3pY1r5hXn3aE6FdTzPYZ",
  "key16": "hTHQMGL2DPkCvMpkyyXb5fDaxRQ5oWuterCR1SPwbakpLbhR5c1MpQ5vNCnCkQpiUWMiMFbJQfDbzBvwnVvbze3",
  "key17": "5Ln6ZAW23HP6e9BgQXaETX9g27Ywcd3pkxvphzJXHyQjUPipDwvY3gjpg37KyXa2ubej3dNqv4kaKXq2i1ytn97G",
  "key18": "3bpSuNocyRLALKiQwnJZaNrcEXkgrVM2BBqZFmKfqF9E2Yv1TVZaobYQdCGhM2APrgN1FsByz4jAUJaRqvpNYsmF",
  "key19": "3Bs24bzz1MNLsutjsDHN8mhPPwKvAEze2wrWq1sG3FZn1mJfP5ddxBQtmWN8fer1MNYvfe11ox3G9v6ub6fGNeUn",
  "key20": "4snhvsjhyLaAcii4gVpTz5Xy6mmmiSL33GaF9FvedGJpDLUjres9UMKGHVRZwHFD8xj5mhz2ZCKSkgrbjCGt8nAx",
  "key21": "4ANMvvE94dzXAwJ2uU1Q9Qv7ReDiksC71ppUywD2i1zGgAYQQKmYbW1nChJNWKoiM2wpVcN1VrsXQY6ju2Wa94vg",
  "key22": "5hs5iMMGXidmeim9EEfDUUqrs7NHPaHWfcsmXkzRrFr9gYxq2qpi5fLzSgy6yMgd1x9ah9b2N1hxWTioKEFmjbzC",
  "key23": "22LX7y9K1c8KCX7jkhukwwBrqDnd9VFFRG4xk6oYKWGDR14hGmzXnmviuysLdmii2WApjwnC9XdUtkxq2Akdwp92",
  "key24": "5xAWXzm162CNq5CVdoEYTATfmxB9guQBXbmHs6jMtKP74tmDqmUfnaaYz5xWjbAP5SvupqYRhwW2Z3asaFkAdzUk",
  "key25": "5TAFB3BoFegqzqG5BCeN4YUQpwQ3ZJZP4Umec4A8Db1hUszGWCEkNaHqUsjhxqHwJRknUddDy3CaGiacBoTUEanC",
  "key26": "3waNUztV5HPCHCZmDy5fQ3XQqPX23Hr8BiSePHYxhdLNrCKbU4VQEoVL4KR1ddwagogordePognm6V8moYzaME9d",
  "key27": "2FaDoaRAJKYiUKtKwgGHQX9MyUqjAnwiqaifUPuSLQT7Fzre4muRBRXu4sq9coHxAw7gxz6WtXDSh6NwN7o5aTdC",
  "key28": "41pb55xmtcjzxXsBgu5jnMNcW4hGKDPKcvzx8kuPzBfioEEKvnxbeb1rPGnbctTyKR1i9bi2BWkiYgY377z9TN1S",
  "key29": "2ntEp7VKDxpvWy2BTb77WJ3pTmN6L7YVZexfbNbYrLkvzdWK5uEgHEdRcvuJyy7JYH53Rdah6TxCYN9ux5PVpsjz",
  "key30": "5kv74dTz95sc8uTuTvCycwrSMVEJcCxw1irLUCcmWUM6RjgjgsBcSAJKEMDaCYJH61Zg77AbDFHEHmbysY9sYsjB",
  "key31": "c1rX25SHFvAizLDGAenwykkomhbM8MNYhK368codeWKDmw5hhRcDAvZGYpiuzmiHwYQoLqqbcBP2EQqPaioQQqG",
  "key32": "5pRML5gLedNmVSUTLuknyRFR56HqyiF21Sx2N9ww45yuQEqq5sXrhZdhgwr6YwMW32Xbi5otvShDbVNYXLD7gb1y",
  "key33": "464aJKhHtWJVF7xoTt8c1nNA4fzyW2WeQ8Z6dVfmfCjA35cHWFfP9et4hGNEJnHXAxG78T7FEQZj9nK3bYSBGPmW",
  "key34": "5eGLDVqdab74Dgd7ysDR64kDZtMW92ugnfX23bNUuniVtUkarfWwVGZVj7QGnGUYXPdR3CHMvSoL1KdxL5WnxhRS",
  "key35": "615mLphMvaeQGiUgt7Xf71kccqKEC3aQvk1gaRqExdhjGDTbGZCY3dnctZMdDpjiSxmHxhYYFxtdkUqYKFEVy1Ca",
  "key36": "4c3cKDreC4oQkJAgn9x5bTS7ikqzysZW5ZxtfKsBKe291RW42VzmH5EhHioqLW3SkqdLLuc7JUJS4uiM1adfgq6d",
  "key37": "4TBMpeGaqYUPbzpjekECqpBWroWrm9qELQAfp4Snk26j6BEpJYUATJ5BDCPGaGHYoSrMyje3ruB39uii2TWxiPpY"
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
