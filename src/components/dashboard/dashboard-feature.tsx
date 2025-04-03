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
    "5HzLzbUSQgQ3ASV28jnbYrSKegkDZmsdkcNSwLyvBPxpfGJcrPvbfttRj8HsRckeTsLnXGLJn41iePK9V1Bbq8dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5TutvypDscMq3fkaXwhsviD5fnXXzpXQz9QS8B9VGkLgNMe6UCxJXHe4HJMCMwW8fnrrt9j3gmVPqRBzWvjX4B",
  "key1": "38xt5NXB7YqH1NsGnhgNikpox1Ms4hKpQ5sQW7V7ibp3aQ4A26JCZt1FV1omcE7iLJLaMVcUmYuAQxMt2f32YNZD",
  "key2": "2FL7f5xnkTDVC7WVJGNwGBsisJbqUTYmDhnXwipzsBcDHYJSnza2u7riM8UYFEBcvn1XBE5XhNo49YDv94M8CiJh",
  "key3": "3KhsgMdk48CKfcBeyrH7vZHK61z9JhT8FpTfNfsktbYbQ9w1h11TUzx9rupmk4txLCmWseEYW1CM88T7UZMQaBdD",
  "key4": "4kjGhLP7LjqTnWYKQpXSL2HsUy1xGgGPjnJMpkUwvMKxfAtCqwHna4Eg6C9JzWRh1yfi6gkoBq6Y7Wy864KCekCv",
  "key5": "4wgAV98fhPr8DqdD7vPMdoDQBhm37eJ2TYvsH81G6DKPu5fYCHRqZXhKGPqr4GJuMDdaELZTsvqwWpBbDv1gPNcp",
  "key6": "2Xxf3Sfbymv2YRGqWhM68rsvu38J7iuMpHv6TSBK2jKUdEZzcEYrDj33kHcXs3NPksf9XF5BsB33371ckJuUpLNy",
  "key7": "3HrS442TiMt4TwHkxHuahuANzBKSaNDLLdtKPyocFDAwE7yKDzjLVPwrWA2wRuhi7EUXJf96kLnNFwXPPghpuMGC",
  "key8": "geDzH12uSkEjSY1SSAa5hvnnTPL4wz5oKefH7KVuAHv4sHT546Jwvppxb3inhqjqdAHUHB8vnETxqicpU3S6upt",
  "key9": "4Mq9HsaWWK3iyTtmojphYsu6SBpCvBpSxcwfqWGr6FXnu74fA3qqFC52V1EqdcpL73Fjq7usP4PmrJ8BTpENKXDq",
  "key10": "55VFfftY4VoQThiq8i7FEcLPaKf42P7mfZsPvLukJ4SQe47cdYovPTGSJcbDGabNMHZrdYupngTPPPTBipVpULz2",
  "key11": "AUc233siWUNUSm1hZTQLFCcWS37fKko8Z7LdavUwyXqkPjK4gXydinuvzx3UsaExUKGDkFVzjcMk2w6tTMzzNhK",
  "key12": "ybZWQ2f9bWsTQho33fyrdEsYBYVVr7nNhd8xudpYTHRitbxPzpfBhoKV3R3MRrN7cxZh5KyvXmZ8ZpTLuMSAAQa",
  "key13": "5yUSpheSRM9TW76Bugkj9DZ8VP8HWL9LkYCNXXeaXqgNrEKtaQM81wF25AyYDur988xM6FTsQmxBe45p8QU18zdP",
  "key14": "5bfXH7EWmJ5iW7P2bhtHXvipDbGCvtZAQPpU7gk1jyD4A3VGre9HpN8vZPEcnAGELcRUgtLx8ymPLRc8syRYu1hN",
  "key15": "5gyroxHSGJgcnngTpeRBfCy8MfxxJFGjTybNw1cJaVgjV3kQ6tZB5pJfYVcLq9GnDfYGiz5JEHXubfXuPXkwbNtn",
  "key16": "3JVRiq5EE4T5v5sJuCYn4SNe72Fdd9yL4cLNAKABcaGb8hnKSsX6KQTDhUZS1LwSQqwTBMKTtaMXN93TriByD5wG",
  "key17": "2ooARaHQJ986AQDSHHLBiBeygj18xd5FpBJDhvUjVa5k9m9QPA8RsLqyuwvBdFrbw5228jrGFyguZrjCd8Z1CbYe",
  "key18": "4GRXT8WQowSdvRD4YELsiNn8Yidac7K1cfYvH239N1vtZSJFoaNcLqui1TayxTUTqr8oz99gVv8g2ijNn7xy9jHi",
  "key19": "3znPiXwqXJ4c1Zu6dJsVfgdEkUdMGrLY4mGrLyoKvGVFiGMqs2F1afCKfknwqbwgztsMUNL2GRgTwGZhqxw3cT3r",
  "key20": "1znSSc7EJA8fNf47pA6HTM7CnBkUdTjCAhDF58Kg698rch4wW84CJvbFNMnm6Ziu76kBcPxc6APUewfwD5zybv1",
  "key21": "3UrerGj7F2NNjJNXdf862KKr4fFT3vmCNbjTRMYTetyyQaxr3mBys8E7NHd7QkfsanuMqgKeFNza3i7eEnJhY4FE",
  "key22": "51x8k3zQvvtGK86bi9kPfmWFN4AFA8rSdqgpokCvLBZdUaQPp3zzEDqahaNcAhbwNMxVMQcUGGkFydTPR9wnrDtq",
  "key23": "5Di7BujjodHnVrzdHgj84wqmJLYcUfg6aYDDmFFTzsvUKFCko3FJb6rN8b94MEhFyqV41vFxMRWugSEwWTZb3Yeh",
  "key24": "4XwVbnEeaGZyMneGga16TVjyy7AiH8WeAYYvnJBKTHK9bJRUxhVi35ncjU4TdbT7x2dUVFqfTQwn6TXu46FVkAPA",
  "key25": "3RBUGPdAN3SRHNBq1B5YcS4wUnHbYdc7rNLQcXqGV3iRww4GKozfP2mL2Zahqp8vKHgxKbte7W9cqv1kqyRt7Ydr",
  "key26": "5g3AyfzUdDVsSeNx9BT3Lo7QiixKndhFQw95KRicToLRq33Sk64ZEFfuw3Q1xEppaghfuhxkjHWuF2AWNMY4PjMi",
  "key27": "4j1W9vo9xC9ycncuAcRDmhUZY4kydQPmHU4qVm7TvtC3z6kFUmczxWyNLKhGPMfGFPPWjyHzkjb45qNKHkXuizf",
  "key28": "2iC9Pt24KFnfcTuCKzR9uSVokDozsbA6unJFHeaS8QzYavo4x8kb8cDpB38MryVV2KjPHLw69WVAKLfcrwHqNfdP",
  "key29": "5PrEY41dRGVcPVx2174xryyp7sfBAe5tCdr2TqUzGJvSr977HzzuFMD2hZzVo8YVayNE7QLRunrRd3fZjEFYcBq6",
  "key30": "5YFr5gJ3NnfXk1BtxN9wcY1nh1XZLjGLSmbheqXAgzfKLE78vCuUxXQxx5YwPedFmBVf2umRtj5cxHgHbyVhQGV2"
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
