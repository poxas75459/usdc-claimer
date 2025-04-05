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
    "25T5KVVxcx1RLE6UD8nWJucbJBjsz1jpgN51oAGLXLguydR1MDs7pn17o6xU48ENienRiRZHn5t9Vw281afbqdus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zrSbXcr4uQEzyTYNjm4hAPa6jAN6A85TNbKELHtmgHes7dMAdKpyhqJ3XtzcCvczEyptFJpaFYn6kxyvTSPMH8u",
  "key1": "2jsG7FbYMqUPWRtT8qSU2dGAWE2YnuuuQi1rSMPeaTH1FAtJSB58t2JTPNpwut8ZG3NbExfHQiEQKFBccqCYZGs7",
  "key2": "2citCxQLLgp5WFHgcznBERNEYd6SWcuvfDxAPtFxd7L69xqTUREPkXxRExaYw3yhQfBy4QF4kDMSkhPdDbehXKYo",
  "key3": "2bqmehXQ2MKbqSP6sDVFcPmPUTZTfjnLQ6oUDsDj8vj2iELdtB1zZWbP7MsoFApz15DZrzNCH6V6TRuxPTZHRytv",
  "key4": "5HbNtxsi6KsgY9nKNwLSHVYWh6WsvDN7vSbf9H8onVVwnTC81HSm8EMwmVmqLQiWewbChekRRqnJReyLiFABmUMK",
  "key5": "fuwmHnikihbHpS7dLUL83VGbgYtne2YNZYp6saUZeNYPa75TtmBx8pEXfoNo2H7myeXgHJNitSN2fas2d6ktRo2",
  "key6": "58Ehzg7dT8rc9G9DqnDerBC6saYPUR6iJ4aEDEXJi43ZV8wsMk7SX9MkNpi1mpAkDuEQURvhbWUQfAWDpimQm4kc",
  "key7": "5V5JYeH6mQyZzRqGZQiFhYmzedpTuxGdH1Bm7uhro3jWTXnywkZ22wnhhdaKfFy3xzWq3N88tTV6N9RoXcbWD9EE",
  "key8": "2469ZYpbSJLBbxthDSTRjVPPAeTDG1oCM3QLxRfmKzJT5i5mZrNFbMZcTgQq7D9yjGmRLyjQfu6Ko56A9vtiDaHN",
  "key9": "2V2xWaFGuMur3ZLvRKUvuHVWu8y8qMWRZ7hPrTeFtmbdHLRftxYaCaPpXHHvia24Fovmrn3JWQcBXvarowu75eGW",
  "key10": "2Xc7WEPPtN997bAfDZf3pobMN4rbrGDgYRfYvDr9fvjjCqBXZ84WtH9iSejPc3rzWjX3XiC1ACYeZem6fbnnrpMY",
  "key11": "2VLVqSHGCFSYtvbZGERAHScN1gimctUAKLUgFgKrmiHoMBVzTjVYm5VZSzQP6ocikEBTH1hrUFnyh93D7uLTGMCk",
  "key12": "2pAcb8fv2REZoyrYJj6zzcL4GgMCagKJzfDEqnwYR1w3KdugC4THRndPftBChn7jRe8VfSUuJo73XUZQuhLkhqog",
  "key13": "53Ar3Nf4VcQgX1aCg3fRzSn3Q7rVPLX1nmAdmWFnvcuofMcXT6wwq976aZ4mqk6F6Q65crLyGLNdoyh7sp6ocQKY",
  "key14": "3sFLts2XJ6HSr8jpdk4MaT7Kh7CK5KHjiVKr3Vtso4p85N9mQJNyMgUTQ1JDc89TbsgWM4x93xK7Vwj5bKJ2Kg2w",
  "key15": "3DpsKceCUgXhG4ytnLv49SeJcwrz4cVtzWiyy24rsF9Tt5B1Eb77wS5U7PU1nY2pwcF756ySivukHr8icMJBBfLY",
  "key16": "2de6RRsS2RxvLCENSUdGzJeNg31gFGJAbn656uahpVf1Ys18NeyGhLiywzhEeyavrzqyABocdYPWsYVnL8uX7iPC",
  "key17": "2rmFc4PJQH6VhSA1Goc6sjcrFjoKGJgriVsMUhhK6wfTvGrE1W66wd3wUypwtDcnqNEX1Es3NLFSNq8EgGNFCwhp",
  "key18": "6N5NPcmxiNk4zVSptcYCR9wBfFn3Rmjwg1wSqvMNEcKwZ44q3Tgm2xTfQJaBL8eXakf17s3pAxQs3nRVRWytdb6",
  "key19": "hc9NaZA74tPqxjawJgGsiH3tmWQ4UJoXP9YZuexcbmYBRjF4riKZRzDEcy1GUc3GCf1ur3qE7zVDPNQuJX23KEB",
  "key20": "3RBvZNpfuBngqpJsSfW2sVvDytzJkApKYXYDNwCuypPnCik5mAMauajCbMCuKVAJvGWYNfdVtct4jG6CqEfZ9sDX",
  "key21": "5FQwETpeLxkGeq4jAMEd4GgBmN2AA6WmMY4tyq6qNQ9Egic4na6GbdGLkRNjDSwMLBfpHpv5Q7wdQBbXkWDAnDmz",
  "key22": "2cjPn7QjgJ213B7zB48Y5QMY7ahXTikTc7BjvCRf5KNEKCs9F4kzFECSo7WbRR6M3dq91J6ZUjhf3mMbSEwvEiYa",
  "key23": "5MFWdZyJYzxrjd7jhM1hXa4Vvxp2hUiMbQjA5zLhmqLoxrEsowyDwoRuz5pTJa4HdFyhgbdKiFjG5DEREWJJooxb",
  "key24": "2gG1DbJgxtwEfUkWCnAmDkvFZEm1FMM243X58D2MSraiMuWdWP9T9bhjM3cUNNo6Lgn9mXsn6FZF1ueBs1JesSbu",
  "key25": "238REZzYFHPkNtYDtAHTJ4LX2KJdVtBkm75AwyseCUT9BbbMVUNvHcJemzrrmXYN1TCW9CpkMRorvjr5S581Thwt",
  "key26": "35aknaXiZPrn3L8JMihw2QDKpwUjLLBufTTeViZ4DsfZNahYzoBVpzApTgEpchVXwd7fZJrf2zUC1y7QfeXkYvpM",
  "key27": "4kd2HiuZtFuxm4LkNoBVd11KJJVYgBfWKDzFytaAPCzJoUB4toAfHdHAnY5sjqBNmZhNL6Y9Z88NxAWJVUxHPP9F",
  "key28": "HXCzY7wfVpiveEbHSPTTFf3kZi1mWDNuViwGp6kCMSgzdaEf5tc38rDB8WsCYagx4BezoQcsDP8KuouRT49SYGu",
  "key29": "VbrtKUmwes4raLbePXusHF3voB8jvjSSKMueLd7MYWwk1am1hpfeFpyQ32nixDRr1z8xkSoKHmyxLG8CQuiVCuj",
  "key30": "2to7X32NFbPSVgYaGp6dMzHfWhPGBJRUAD4xbvQqdswsSq6vx2or84zaiZZLMfxk3zra3n1GcduJ1sYkLKqm5Bju",
  "key31": "2mGUgm9xfSfca9PbYoXf83WnSLXJKKXEoB2NVMaeV8fsaZZDFCSWP7Zjfw7L7danQwMYFCEfPYeZ45fVjx8ywFgm",
  "key32": "3yNP8RtveEjuTowxEDKyQMaPvYeLRo8YM2xD5wgWpSLEEpUHNTsU4RmyCUvXs21A2WHsfY7LGwG3d4eRxfcPXNgG",
  "key33": "2f7UCT2obJpdWrs48N2iGmok6kS67EWDqRPeBHgJsTfANvDHB4WfYNM8eJZG23WeX1n9Z887HRZsQo355MCW4fv6",
  "key34": "5hS8t3XHqVrVKtAJrEXBcAhi4fuwstXqWah8GRgxiCCBUDv4Ln3gtg9tBgdS2CgpEpBRDm3Ug3PcmuM2Fg8HThwx",
  "key35": "4bTcSXB2sb3tSR8nhHv3sszrCqrnXDJF5RhkhDy4BNzDmbH87co65u7ErwHhVC7Px9esUTdZDZk9y9QHmZxBpR5T"
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
