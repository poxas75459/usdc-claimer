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
    "2AbrCuMoEdNuq9Dw2rPVnJFk7zz4buyBLyspaeVW7c4CeRb5dQ2gGDQ4XvoDewr43Uvv2GndWm6FZx6ooyWMJkzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqMmCTAfLt4EudgqgyEK3L6kn8qRfS975Z3U5HN8S9AcJrMLdZD51yR2rRTRvRkATnbzuxEDbmC9h4wZviJKrZu",
  "key1": "3uPZsrFBpQMJv23GtcfLA1m7U4xxED1u9eiEue4UE1QNA2jLtC1d5RcNoorTkhhyGVhfGcbEcwDc5asa91a8yJLJ",
  "key2": "4KdyH3zroQtcmDamdq9zepHffYcEfLAiwfnTBKa2wpQSdhU4xWSQW9KYwHspJQnX6ggJnwPy8kbnNaayed3cdVRY",
  "key3": "5eERyFHHm8qQuSaNp4xtNVmMwvNom4pF5tbVNsTdCWYmWcSjHvdhwMqPGh6xdFT1cYbJUho2j22wWMsAX7zibKuX",
  "key4": "2dyiYJgUKS2FAiQDFqUN6hFJCTC9nULrjDzrdRVGm2dgNdQrwfHTkR1jXCMQnKGjGzUE6qsUEmW6MKVY14iooUYZ",
  "key5": "4JwfA8CthfvonpfVX371qXqUumW3o5zFiMxyab1fXZQHnGRiijn1pYikho8r5N4BC3z7hVEHVm72A8AdWqaW1QYR",
  "key6": "3XMaeFqf1yXYJ1pZK1SJsv5axqs3NdQ1LhMtMCbkqp3UHJ8RL6Uq4jGNkm3zwKjfxfPPkWsS7X5qL6MsBLA5wTzZ",
  "key7": "6452hxwh4dhMauFNiCEppX9AghuGRiEVeYtHvGvMMStp6fzXvRiSSE6su1UNgtTHVvyg23UhKW3eF2xnCFpFVweH",
  "key8": "gwqCRDjdET6YoFGWGj6nm7Pzm7QR2mBq8gpYV1EfhknqfT7Cx97mDk315tsbwpbqLYqtJuVN8cmZuhfefUhDQ5d",
  "key9": "4Sxxrmyi7CjvY5ynimKiqwiREibShzoBHGsiv3Popx2vLm5hPUKNKAKAjT66ng8Uxuk9aM9tvDg4gFkae3TpczER",
  "key10": "DMrEsdBWcZU6sF5GccTJzH4tHynrfmNGu4ZSVqKUxvVjk1PXuLrpjDnJkCGixHNL3vy8HVXfv9K3fx1ZwhYyuwY",
  "key11": "2P8UykNhEnv4TE2w1ppN6hdp7eRNhN54QNpiU3Hto6DiSgb8neYr6du3c7n5jaTe6d3oySbhv8KQqXHmq5jfMo2U",
  "key12": "2CXCAn2ZrBK2UiX9XSdskUipaJrvYCn8w75Y1r1QHQSn8gt3igKL482s8gZUF4wXze4VsNunNpMpLfwgogEuG6iZ",
  "key13": "4BbEGJwyi6FpWxgzn5UrvMsT7HaLFLfzXMqV86QUeUQWTH9rbvn9ngBgXrgddBjMa9KZZQkStUzKbfW89F8nYSnA",
  "key14": "2uYTMusRB2Mo5BF878qTV7kJ2TKeBGKnr89uSUKq4RoLxshR8JZ9jwJVsE7QmJfV8LcXev7eLECvRMP7xVJRuaTr",
  "key15": "3mrE1vzcAJZ5cs3cH2scSnRFjYrufbrWERshiyd9TiCxZGqSd6yHA3i6yJC77L8mwpogjbrxBLeyP6mgPwkvyDga",
  "key16": "49pPVB8Z5kKxKfeW4fgsmEHsSZmQxCL1feErNx1t2oRnuLyqyzJ2aWAYSU3G6LWCZamh6CdwFMZyWzqqLnpyH419",
  "key17": "2pLtWVG4aKUV16qeV5hU5LNsbBdhvMQxfc4kAjpWkQKfL51FETRjDfV9WeJMvaxk2C3JyUC5bHmM7Z8wmG5WVtGi",
  "key18": "3Emv71T8DhWKCbzAeHUFKtePrdxTf7Fwx4xTuw8kCXMSZnJrCnkqKSoxnBTN7Dq2SzuHFZidF6HnH5wwkNZkJgyu",
  "key19": "4Bu3wExdv4LryReDNrUHMz4yW24u1tJNUDoXuMDEWPBkyVQ2yCfsmMTuyQGQ7UT99EK3jSEooqGmMwKBxxsrVB1G",
  "key20": "2Gr7WT2WefQ5rNDuzp2jCqcotee6wWjwqVpgMJGPuL2ZG1zwFTAw7aQNUNrxhZctcjxNhoqP3ezUKQdRFm4TqEPo",
  "key21": "z43HeShUxTBRACBB2mqZLntpY11fFdCXPUYWksNy5YGnyRzjJFGCZ3oG5R7vHYoaqSKv5ecnBs8By7LUagfk1fJ",
  "key22": "5LDFtYnBQGPtum1XXFc5i7MyA2TZ3vQ6W7jLTaqdyvtMusJvoQd18AxL89xysHh11W3bQkiyTQSgS3hVADJw6Efs",
  "key23": "58zhvfkgy1NR7nsCxJYoKyitQ5t3K9bD4jhfZaxM5wpMyLkku3j25bY4Wmeq98PmZS3EWaqMLsVftj3kpKgpXxtk",
  "key24": "2ZbW5upU15YMsZufXSJ9PZrv4qoxxX7P5tXEqUAEQJdYbA75sU4XezJmqE1ct7EKMng4d5i1JrYf7dawLhA1DjVE",
  "key25": "2FCGfBPndvFyt4yuJvUDtp2jcmFA2Knt2RJSA5MvroDZJAUXgLsCc6Snwu7mn6H84PyJLr2oiiRKZesmCng2p9B6",
  "key26": "FkEgAX1wgpmqYrZsEfhXL7RvWpBD98yNFN7A5zk9s2uZkmkNoPdaTkFotjwkTVSsDd52wykqizDmLZxsPvrrBAH",
  "key27": "PhpCMoqh4ffYhqWUY2Asw9PGVifd1DJaJEE9sWW9Asn1Wyydg4ECJzrAvy7WAxjF9cBitynQz556LvJLhGkTUS1",
  "key28": "5XjpMmGvLvYhFPHKSzvM3PnUBq6kGYtFMJ7M8k3LkLwCe3hNJX3ogw13KNefKRc9KYZsuqFZzdfuDWSySmn4kpXd",
  "key29": "2qZ6qUR2wTnfN7f23ci7kDeGQ7v5hicjuEhUCtHXPyMgTE96sWUrxo1oBVPSxmB13g2mpG2Yf9hGdF1DssMMCbTm",
  "key30": "5yZiTTNZo2C2XxGXPFBtW3FLRdE3KS3wzfg5JNGkasTS6rC7chdQNB5hFK3Dp9oGmtzZjHkNiExaCPPwXk6JGrkW",
  "key31": "3agYCyEP4HtiGYHmJMvMYjaMv6N8vvKPX9HQvhC6vpYBTWKw4Rbomk8BRikLLT7c9nFuammm23yQGv9u1zPgpUAa",
  "key32": "28Nt1tCJ7wgBvv6UYUgd2rJFmKQ6Yy4n3huMwJ8J9wQUgR5WSHcHeLBgJtKXV7yWP617fShBEkthbWz6qAeUfjsi",
  "key33": "5AUD1HBzUJVjw18vvqLYxz8hSJoLLEkPXJkTvcKyHEwa6pPwZT4fXt4VVT7f9wE4s65ogM68Za5HdujUQs9vYeqZ",
  "key34": "eUCCVG62rYfQP7AQfoKXAwBMAfCywDeDWVk3X1ywXHaZEQnaEN4EUMz2ScDuxN2b8GABQaARymRyzJ1dy2kWHsh",
  "key35": "2HduaNeXbwvh1FpwE47BUbj7WKoGvApZC3Zyk8nvjAcWggc8ytBCyFgwBhtpkeRkEwgvLozkuaCXWc84ymJqDsd6",
  "key36": "3LSdgcLECJBBcRZBhdyeDQ6JWn79ELBGhYPe68nQLWFfzX879aQiBY7cMbrjKfk5Tbrpje1yozzjwVkL64BUcveW",
  "key37": "2V8FgDXEtgxYeN6ZPtgndT9fwu86FTCkxYPUp95rFMXTgXFe5MvgvDm8ZFxHL6mi9ktb4kRdZzPK9toKgGLr8bgS",
  "key38": "SeF6VMBPwVkxiP3ypbBhVCdGtpPdk4acsLVzqApvr4tKjCjPFLLd2UYoRwcGQk95rdBDrMcvpzQcjWa6wikogSe",
  "key39": "28rMWMuezZg73hBhhWsHyt3pqAHZmYvVmH8LP2pJJhWEYe3DEFrDC2TAkrcSRMaiEwQq5rW5fJmLhF4xWK2JwTJz",
  "key40": "4c5iWUzoewBzKQS81aMj4Rh3jkbkqw8k2PE1PFB164ZbDeM8hSP5LYEvbueED4iWn7Y4XzbfJjBjoV9n9feU9h23",
  "key41": "5cE7Xg3QRGMutg4SbhEYDRzj4M4rY7EkJckkbMtbuXrsLxmWFzvHwFkTQcifVmFa3mECPaLHb8ERPToSAUHkUuYZ",
  "key42": "2Z5BoZw6TjV2xFEooXdApiNnea2YMVnVsh3ToU6JyUv18Ao5QjAFSree8FKAGyRgYqYukUBp2k91kKgVMLiTpqdD",
  "key43": "2GtaEJ5P9cCiekEExEXw11bp69rKnQP3wbkossDk2SQPQtGDiR9Ddo4BsEcwdKLrjUVkYaVg6qcnuC5qm2B79MgF",
  "key44": "2ZAmtDfKPv3shg2z1fa7aTiTHEUzMDCCUTC1QtgS8HPtFUP36iB21sJzUYSr4XYUqsxL7ewacvy6NYbVCFHgajCM",
  "key45": "48nzDREyqod6TR7a61K4oLqMyJWaEGTQZgJArrmAperLkAFdwXWNXQ4MUYzngoBgsmm16YwV8TEembHv7BKtpgtC",
  "key46": "fXnRXgzUr3q5qoTCLpEuuUZp1P1FCU5DKfGpwUtouADKqqqW6SxuV7mwRAH4t4M5cKibAJnhr43L3o5MyDqEJJx",
  "key47": "3yyJghc641Ae6V3tBzxKHL9XiWs2PwR54z8B9ytp1rhYixs4JSx3XqeL7TTRydxYJ1dJTv6G2a2JqkjgYAgZe7YA",
  "key48": "5xvgmvishZUoJLTtdbwyP2WvwHsjoxMUDcKDdrUS24QbWbDLAHQdinZvWvZrEQgr93sUDbwmRyxCS7wFcftUbedY",
  "key49": "3iL6mdn5CaZo7LSpjHxxJ7JN6NEyKmCYXp4UqRmeZvN1zENuZkekMFJymhz823cwt6DYHsmwCuEHfP6jp67UuChq"
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
