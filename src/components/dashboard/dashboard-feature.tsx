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
    "2pq5JBqSNdBV4MQvZZJYb4HzpDzyzQd1xQje564bvupBarEvTf27R1qBYRDhLQZ3QVFYPX9F8S9aE88bPNSSpQGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPcKtDPSU8QWVbvB7hcNfhKhETJXkiKQ9Bb2aUVp5fh3cMPJuEwMH7iDZs8jhksEeoywpk4giy8Kurns2ACvLXH",
  "key1": "53myJLviYyGJCENka2rXMyELFX945Mn5BsqYcuPMZkgtFUtPHk9EFtnpePEYwZBjSwUNugQM9F1BMRm9Sg9MY3by",
  "key2": "5QWvhbixpg5Bfp6xbAM4DJNVowcz9Rgny5iXoti2m6N2LibVGbR4da6D6c4WtQtr8x85bCR9j9MaeQPffseWQ9u1",
  "key3": "SPP2sW8rp4ib4bh6us7XDdDHWUUk3sdCLSiEkhd2SN4YxtabHznfUjvBT5iyEv5k8bhQeuUaFjYs8N5kC63ADBz",
  "key4": "2PZK6hekijFaYZ4NvfNFUesEcQSKLddVAQzULZdEQ7xh1MStTbAJznuBb12HL2fUp3MzDjnTLp95SopFYZaB1Gy4",
  "key5": "3GReAXDU2n4nQha3ecaJXsrh4ifFDB7jPZVYZ3rpLxDYtzLc5PfNWVVDvNsBxvRW9SmMK7UhEM43gi9Eo4MuMxfK",
  "key6": "58EDdjPRXC2zfnc3XVvkF4cqcwLnUmpZXD7WPYi7hpR2dSKUhujXMAXpKZrzNpkrcJrtcMWDnRRiH3QUudRzctFq",
  "key7": "5KyHuhMQsBfCx8S9SRpXNdpwMg9BfH8CjHqMFWbaHcQuqsdo218BqyxJB2x9nGmSHZX4euXNmtizsFZuuhbdTy7R",
  "key8": "51VYMt3rbbPrcdWdMTDgGfodR1dhgTFPSWY7zPx5zvC1wNj1x3NuitmGnZq6cv5khUteSXewt7jxHxPHiSrw9H6B",
  "key9": "3UgyDRpfQkU6HXZXcJBWrbtFa9XqvfgsKLvRWZUrKGebQRLGfEGc8a7urYFrFHkVrGo2oMr8poY4vzCAKabRn5Xk",
  "key10": "2hh2LnPrTFgU9qKf7VFgBPYD6f57mTciCc9s5akY7qPhqw8kRUYPWjU3FtGRv2wpNyaN5K1sSCZ1WvqFaqo7iZsP",
  "key11": "mE6eqbAzzioaxGQuLnEHj2qQRRhhF6n3TUug1Fzuqy5C8TpuqEYzFoPEBSAxdkAEjMrVF57dSMwkqGic7SPPkAR",
  "key12": "2ahdK3JRzHZeotty4oUfA3ENYT9sv5UYB9pxKBzTr8EbaW4qdb2zB2BmJAm5RZ1JXgQ4Vn5cw5JSVchuu6ofNFwT",
  "key13": "3MfZAb6WAunKUxzJoZVwPE2C4YgUM5KBxfiLeHFLsn1gqAhVT8L6HuuGonoN1gMPa6b7hzyiedHvBXijmAn7UvC5",
  "key14": "23ThimADfyopsDhkksDStQGUNyYP4LjK2RAok88sCfWT2Lfg6ztGZit6jjYkxsE14LoUWA5fuDx8pCV2LFerE1gY",
  "key15": "Jm4Cw4ATebaFFNX6f7RWbfbmWPmZVA3iMVaYcjmRPt5wvTD8ZWjcugXZxfm4mAFk1XJLjxvXzUE9rgavCxahqNE",
  "key16": "58HdmFAyucNJhs3Vn4sb3THrLmGQA9reAu1z6ioHFisy7mZCJSCrqe5MqZhp56DKCEWGVtv4svbnt7RRYP51Gnwz",
  "key17": "3ccygabLNqSgbcTpTLkJrkQBTEKJMSkf5f2Rm5WUxdLD8BPktcTnVAxYuMcnk6KQ2cViKb2iPHqAEAtRJudfx7d5",
  "key18": "3uTnHoz6xpBNn5rDYgYd2v6eThnwfYU2sjz8hrhaBL9qR4BWBP3JtA71JKe933uLuSGW1iFKXk1H7qPG7eCkgsri",
  "key19": "4ECTknBikHptosc7riQVTU6RokwZbtrMeZXZHhNGhKyvz2bV4ixMwANwi6tVwoFbfFgR2fBF9yjcsxv1zTrPCkcb",
  "key20": "3zqKn9FSgqoNLbY9v9t1pvEe5hoD2biCm6FfuKtEEYcn5Y7UUzfjFy1RNDCoPpWVLW8RhGcyNFbAVkZByytS6pQ3",
  "key21": "2peRuyWNufrJucpDLwazvLiXywEkS74zkjbyGvWbukpo2h8kt8bQyBBTJwvmAavyTmp8TeDoURKaTBUHGxbb4dMN",
  "key22": "wfYeoA86TmCqGPoKbKDKaShJedvcHvJ6dEqcqBpPrFZCxQMun2Azy2bNWWLdqVCiEYWLfNV8XFiXECqLww2oxTR",
  "key23": "3r4wpA7Cg9cHC9cZiU42qMykc2p5SZSafzWe12SgJtYk8YkW6rjvgMkyaG8T2pmhr6hnhaJxqVFTNb1YxDrQREqh",
  "key24": "3Tuhb8KRdiXx72TJkKu4c1zWtujMLhNQ8UfLRwCYcNDCnaiq8JBoCU18KmZZMhyTuSLdX1tCbsjQbbEALfswh8dh",
  "key25": "5MXzGXpDf78MPgrh8xhB14ViMbjH9AH7eWQQnbhF7YNSXfrt2zPb7JzdzVoeAqGwNybJDZ2k5eBFtQLjHNBdconp",
  "key26": "67LK8phJpimJCjYgKQQxtZMyYCx8ADmYWNujEg28cmZgVB2zEhWppfSX6fXbhni5WrUCj7wsqN3fSve5J2eQE3pf",
  "key27": "3byziNCdLcKURFZSkMTGvQcWuGTBVBbX7NEjbfTQePcaKGjFjrYECigL2oBPEY5rK7ygzUHL4gyhWUoMi9yKugmr",
  "key28": "5zgMQ5jUygJ6S1EpZGpTLNXoDCK2andqKNo5qfnnvY9pSkydpTKEv9SoNc81T5eS3t3srAPP4vUyq9Yqk7D9HHfA",
  "key29": "5Wh4JHLJeZNCD676sCwJ2PX2CmpNkTRovYFf27M2ddFmVN18dZiFWsFQKLvJ4uXfRvLGZDL1Xcqxe7PvsRHyhTzo",
  "key30": "4Uv4vVx7hRCWUE3wk1Nk94bKoMVTKHPM6s5MHZfEpK3cMgxxFbHXcqreQz8vfPAL8pPiwYyYW9YhndKQ2XuUZDig",
  "key31": "3eiDXaccgoyu6oiMJTvcUrBs8yf2oSmm53qCsoL7hYmE1YDxKznjkFSCf3uXNhaCaGgcVJCPZYKshT1GhbfC143S",
  "key32": "432ztEemXHMGkp11rST1VhggfwM2fkerXCyEtwNeAwJdLjPyjQcb94KgAWqxe4ZBAL8TBvn4PeNY44Jz3nuXTxn3",
  "key33": "5265KdPvwnpi3xtXZ8MtqADcesGCvj1n93z7SGGpeT41oAwBtzxPpQJrGPFKGeLkgypVo4UX8YWicupZEb3UadGc",
  "key34": "FpN8yDDze3r3mLqhCo5CbMcAZYQFV33ooMWewaqANxRvtLPxmamFBwmLUDQvidLAsxkWqrHidCKp344sPsVUfoN",
  "key35": "4sf1b7bmoweQ7BHN8TrTAVnC9Hy6rNZnJ8qtujpARuAkaZwV3XjJPhYq6QsKzN3qxZ4i6KeZqJSPjice32Yo1kVi",
  "key36": "2t53G5AFXZavMdR8LrNXZJZU9Ld5TkgUTQkPUGLNFMe121VVgkGp1LLbByn5XoN4uW7FEeeG88evH34ATWtLp8vE"
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
