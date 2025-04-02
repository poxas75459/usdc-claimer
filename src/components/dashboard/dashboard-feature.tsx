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
    "dLHyFRtRvcme9qaA7v2ymgued9qw4FTx7vpnFMfdffQpzBQhU1K6ZRs7rqqpjh7tRKor346VfU4WhNa19VmnL8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UBrh1iui53ad58CwkU7bpeSw7wBHjg4z3NFTiYJhoVAEnLnveUANxhmtNkXTd5n7PbqHsp39QxG3Wva66f14raa",
  "key1": "4B2qNKWxfsvZJRQZpxwm1t5kAtJByWGGMpXr5v698xT2GHA6zpNp4DiyvfeGmmez36DyBLCnhXEDte5yke1uvFki",
  "key2": "4ivHwXom8MNZjpf7eTME88WVULsVCR1s2tc3HpsfPtjm6sxSaPhirVukgPrersWkmp83ecDa5skiWcEfkP5j9Rrb",
  "key3": "52WepR99QhG4Eq1BsmmXboPFDnmebNhgcb45gnPL5LcTac2GAoxgHxT91Es4kLQzQSpker39gc3kHmhBqNJHj16t",
  "key4": "4twyqzu5RU4icRQZcs8NJCXSBCiCZUGexsLYsSNhowF72CJpJUHAqxiuRCdYNfKaQWa2xpsN1scNdCFLAaz5wuyR",
  "key5": "2mrhHywns9YdQpgrR87m88ECUEkvCZK6kPHmW3hEagviFZu75CHUZB854xPgjCRzhm1skJJSp6zL9zNwEX5bsHjA",
  "key6": "4yoghAcMwMs15MquygH1ThxQm1qYJyt9aHBUB4zQJ63WtC7erTfukmxEbvyC1xFYTNLjTdXNUExo37QFNdgBgyng",
  "key7": "3nQoSMkc7bdxsNxArLryJnJ2UsDnuCNgDyuukDGvB6bouxcRGKqpxDiH1jw4wBQm1aphGxiSRtRAnLYphqz2rUJx",
  "key8": "48JVvUTeJWadFh6u4AqWpuZegUU5ksFYk2bs5eh3zHk7XDggcm9G7oDHeBYh28ANUWecSt1SwEwSruGyzvXaSHLp",
  "key9": "67Cjsw5swR4SLH7HUU3N6SQsGE5QCwEDhB3Baz1L6Mb5Cg86fGgxL4vczB9Q3PNzFVL2CgRt5sUsnKBsdJM3iSpg",
  "key10": "3BT79NTqVuyjL4x399q7dVGnwwUbev1P2jiVGr7LZVKNN4gtKfsfy4DMCimKweBu96GLSx7nHyymVoCD6cg2XSwb",
  "key11": "4TjNEqUmZ3ngRmPZjVF34uNMYR9GLVuRghK5w5iLwCpqNK2TfBArvXTHfV7WoMqp5grRsAkEEU3vUcemQCo1ExGh",
  "key12": "VmJu5jd36Qd1EEtayRYZGr3Cb4yXcFvqqgUuHe5tQHBxHDB2hmpTS3sYiXoWJ9LyvoweKyp3Tqt7GHyQR7N6u5M",
  "key13": "2Hnj1o5HMDNpCPMEbdsiMNg58CRZCQKxS5RNiKWf72qFP7ZgvQk8mknaqwfvjxydBvwHvhLXj68Fr4XWZpNYiPRk",
  "key14": "2zdUWdQtg83gtNNwkoWdkZjPbevZZTog8S2PwTbkgjbXZUCdJn9USMVP4pMJDvETDft2kGSsYqakwwKWjHKrchFE",
  "key15": "7W6xNzd263Sb5dQ2aVu8c5A6YtV2cn43KDy4NvRMZ5e44YBgJ1B8E1mcSXKD9dd1DPRqE87u5fBtHG4SoU6fua3",
  "key16": "26hgzPWGgzsSyCzdTgX2M17pG1sNkqf3RZk57ZU2WQ527vnxBesqQ9WxPbJtm7g4reguC3kyJpNksrHkP2KfskWL",
  "key17": "gyeWMUuiGeW3u4CZwYrfLAFLjtVXvfUYsc9pYhMpCU787EAEkNkukwqJ8NmSCDR9apHFUGxWHxDMDi6L2XFxrxC",
  "key18": "ytaUBQfjLtEyjD8sTfaDDPmQndNkEyycGV4knR2DFKdVdxPLPDMzWHiUJcfJKDGynAVWLWuzjkioTFxfJXQS3jy",
  "key19": "4wVFp3pBy3R1BSEXiiU8aNgvsrdbuuGNsNsk5RscgPwdRSVEEg8XpZkvbemuGNyAgbsz7MNZcQo7DnLXoJapVdwd",
  "key20": "3DkqHXPB6fp6sAL8ww1LiVLCkAxvmyNkoBXxytnpWNYUxNw18v6F66M4vv43JqjqFyv3GvT3WFXVdpaK1D2RhZcs",
  "key21": "3iZodHCpDoKqTSu6aVGpLhUszhtXTjsFcZnwBNHwodZ6b3hFN9EqLNP12ipiJXZpKSjuiz9PkJTpRtc4kehT5Br7",
  "key22": "4TxLjSqiSBiWn1wqPMnNDcUD6iMDgbKMyPZ5HZjihCJqykuoWRWmvZxYQw6m877HQLF6WL8venQ5nMUgaSNn9m8a",
  "key23": "4JUCVRQ3UFzQz6bizdYHnEHWE4f9jxfLrQSGGCcwZXLGD8yjy8DUC4QopFJGw4sfGNtY6sqUz9DZspE4ziND5Usp",
  "key24": "4mBhAu6gGRwazzxRwEn5dYTPYypxzbY9LmRjjynweEBeQw6Nd7JkzWo2xUtBc7WVRJXngwEiLaStW6GjdJEGvjeG",
  "key25": "5ZyQxXje7FjkVq8dgL7VhVi3Yy4v1JSPpwrjHALTn9v6Lp52TBbV18unK1f12JwwLVvc7dPKTv8wSLmmEodBwhjf",
  "key26": "2WT7967aA6Sf2g3WXQnJB5PYRRGL5FbAyurMuejBnXD3nj9QuZgoZZwu1agpoeaM5v9mC429q18iRYmxpWGNCRsB"
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
