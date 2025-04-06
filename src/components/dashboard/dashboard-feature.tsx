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
    "55R5cSyjxQQUojSm1hMej9FLnWCdXSKRPFLqSfGTsw9W8Eho2aLV6U3CGGBBphxXDcqPZioX1iX38G8p5VYuK3JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wikYGWCMJ5B5XHwJVg1Q8U5Wee3KGs1Kbvfeva2k8GkQnfQp9jr3wVpwwHWVMzadRV8YaugRsJT13jJU2JHQuZm",
  "key1": "2engGQqzQ9yczFXaRwGxhBYdYgHP4ujfx1nf4vJZzKATpDuoA34yqAczsUYBRV2fr2Gf5uC6ZAk5TSQNpiEjRbcB",
  "key2": "33cdm8F2BB8cFbSrrFrnQ7ApSfgtNZEvtyACAR3d57UBUB5ajRw8LZbQyqpTesjkBaPZnEdwXBZMpT2MRi6ctyoP",
  "key3": "5TmCFpG9A4HGH7fEwTANWezTwuzuoCXDX8mfH4kiovUC678oq5Fs33AsUzWQwGqLff8p11xJYdVgi1LqbZ8nCCrb",
  "key4": "33JMRBk2nv4TCYcix2wHjKBFgFXJanqDpWWGoLqYi9icx2FkFe3xjvzNYDUVy6kuyRg28BtjVa6QmGttM2hZUukt",
  "key5": "4dZEBPnD6HHYPt19EhhKaeRYBKMMuYkVnjfJuanhWPWe3yEL4FxjGsFhr84n797YwvQLvFw2VUq4Hpqzz2Lc1ZCE",
  "key6": "yyxmjx3L2RVoG6hTYurASF9wFPvtdqkW4qmtU5N7whiUf6G55eeW2epyZ8FNcKebfVwcZ1suecQKcLg5HMYcNpK",
  "key7": "4Nz1rW3K2Gu8ft6Va8Y264amnhbLToZcwFpkprNQXWk8wLwk2G5GWc5YYfREFVANCVsPSXYYa9KZ9Zpr8tX81Pkr",
  "key8": "3vtPAd2qWqhTzQTAyqasCeUaxWS2zDMAvuS96tYrMwcreNGC211xiZyaLMPRBPFXVVjZVGQUJ95QmN91eUHJx7RL",
  "key9": "rqpW2EQ4afqAWb7GoQD9XeCRKP6ujx2eDfEicJFNN1PkQPfF2mE9S6eLG4FTY9f28LMdnzkg2X59TfnpwC2yHXd",
  "key10": "3Xg4cMd8qCN1x1oeVYKPL7BgQVrsg78J3rHFRxJdMSrgsYShGqaWJq2z2mR6zwCufG9iVAqzex4L4c9L6FD5amFa",
  "key11": "3aAvsYSjDfowafJ2DJuHrKFYqWD47NjCVQ51U6vbttSb6m37zShC4FfWneUwaH5RoPSn65U6PYzscon4pzXpHjZj",
  "key12": "nxoyG6vEmvbdMwaT7Xp66FZfoGuBacEQ6i4EU7JH4AboDcgpgMXs96M3VhSB9PbSVk91xj2ee51yy3x5tc7rHSL",
  "key13": "XvUZkJu1bYx2a7sJTJpSg6soFZWqbabeeMXX5kDyZvGRwN29r6GZeyu8fuDrJR1pBAb5zf2ior34Jtgj4AzomLZ",
  "key14": "r9Hw2bBd63VLtKaNYAAuoUu1rWEqJnE2hncEN1MDz8dYKTTuExpPRABEtPqLF3Nq2CXonk4vzVVfJNipBCxCiVZ",
  "key15": "mWawS6ksRjwt5oWVbegtiTmyevCVW6yGpUVEnVAyP9hPYwTpU2MTabPNqVFuC1PruFSQobHh3yD7fJwh8unxs2z",
  "key16": "4Tv7524iboE7Tuh8Rtg3AawCxCBQm3TFqLhmcMaEmYxtEWouUHdJV2K5awSNtKfyX6YumLcWpioEuwFTXGQwfehf",
  "key17": "2jJEuWiP95nqVsZYC9Mh1M4veTyPWf5KfmFr1zdaQw62ijXgis7dxADHa3BXfZA3UnuvS9jfi5C7qqkq2PNxuHqt",
  "key18": "2J446s1gktyUQQMD3LzJ8FvLNfrjeFfn6vFShA8VqveXh4Vwrrrinem4p1SqTuUpfAa9zoxAjaq1mea9wG2GNBzi",
  "key19": "5w8dwKwKKR68E1GdKi852xxJop3CBXXg1zXSRQrDDUsoUzGJWGnc8acqnWqJF3csH4dAqDA3gMhs3ZBuf8rq76pR",
  "key20": "3Ydti1QzfBa4sWS1M8qTtw8u7Vkr89w147UfzQ76Aeh5gQ8vSGpjYzk8ST1TBTT9QT9KAhAvtsqmYeiso8S67HiP",
  "key21": "4WngnfKnQsafZuCnFcaS1ZdUZqXo9b6dquWtVVh8H8hPzbU3D5wfHQCY4EjQQqYyBGYaMAMnWRzwVXebR1HjYLoo",
  "key22": "2PZVeUk7tgTXuzzjsFARk6ma4DXuuK785QhjVtzvJ5TPkrr6L7AFBfPUx4dpWCvf7DhTrf4Pu5aKgkHetcmytYxu",
  "key23": "uxd7wVueENhSmRrmGr1F4CWcCmaZ7sJ8ewhMWTmgi8bnR9QnVqPnz9Qv8RrcHn6SJbffxNRrcytbr7koHQoBgQR",
  "key24": "3krmW8k4xy9oG9hRCTp4LHfSFUPnkbokhceEKaw4x5qDnLwKqyPHg2xruikMzo1HovX7UfVGzojFSibSwZZdioEt",
  "key25": "5hP28yDubGZTWp4kBN5djTBz2mCyQzDj3qponTw2jxLJ9C5o3YQxXhJcdpcGCVUCxmRCrM27kSUMr1tWx162xoXk",
  "key26": "3vHEtpWV85xvWZfGAbqKw2rA62TJPq3aw6rvgrnpgjpgJwvbG8DUCmJCKmxgigdytVwsTg819KZyWCpw1cqgFDpN",
  "key27": "5ACfXANLxCFLhAXyMSA2zna2Tgaf9qkmwgAobZ3zdLzsLHTzBSHsbEY9tRDX1sho6mxWA4E7rASUmP8tTQMRoa2F",
  "key28": "3dugmvuK2KMjrBeFxsKYUFVvuXk1T5Bb4uowvqB5cm1BRmVDhQhnLYUyvUJ6LJ5iZcq16rwpndGLUxgy4hBXrZC7",
  "key29": "4bMjPSFgxLnbw7mJuJyw7SsYbdKH9qyYmoxAG7hUAGkWGEo3AuAdRQt1E1EYXnx1c6fR9kAXbLWzDq7zNC38H9Dv",
  "key30": "5DR9UbH1xD6GaAz4pAHijxrwjwrTBiEHfMr2J7mH2f8pVwwbw4gZKhd3oQ5Lf1HoH5mUJJWNfMmfGpQqTwpiuh9Q",
  "key31": "3Shy6n1A6JLBhEQPXUdijX5Rc9scsZ9aNrC1cxGbqUj6NV4E2ADsigGXpgXZmshiadowqaEwBGQW2KCTv19tauaH",
  "key32": "5A4FmURcesTtVZajtp2dy4EuR8hHpmGhSDWnqUSW3vwe3CuvRCbbbXmvqbhdzWqme3QGuAWuwsgBVwwCwtZ8TucX",
  "key33": "2nK9D5MXHRYNgV3DBNm17PpYwUgVku2cDaJqsFkAjGdBGrWcYWi1LNnNesNxdZ7jgXBH6ZqexP8ZK9w2ETQLHB6x",
  "key34": "2vZATyicMR7ZyNR1Wx9tySvJFP5kyUiz6CGLsUB2Akh4wvcZFTcL7xTeZGHf6Hxx4Bvmh2bpmrd1KG289YjDmG2w",
  "key35": "uf7CpjbsZTSwgwZNVuXm7U89prGJ3WuzAX7zLBP2eF8ZVBtK5zUa6n8KPeD8BB17YWcFi7XE99LKj2dGPRgqkXx",
  "key36": "ZCMP6vkVkLquK8VfJW9aDDS8nA4fmKZ25g9n6Qqu7zibKodcfgh2i3QFaFRhov5mm7Pn6WfYZch7DDho2MAaEKc",
  "key37": "TXre68XMYuN1NCSUECVcNcfgavav5rPKSQHWLfdRmPGJYMD7pF3CtCHatdeF3rikA7pKkksc6peHQjYbMC7YU5J"
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
