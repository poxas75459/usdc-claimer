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
    "4Srimfd57xekCkyJJiwHvdzBBo8gKvV6RyTy8WAoDVzhrbnjbPhJaaaS7P618jgY4Q8798uNkDMi42vQ6iqXE1fD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bV33NupcNsYt4m3pKSrWZFukaH13Z2T1x2JVTW9LiNJaDbARCMt2CPMEiG1syerdqx1WEsrWr2u65QHTeRqNQL2",
  "key1": "oZFvmtRCcggSR5Q2Gn1h1YJvF7cUdnx7pi27mJ9oQQYbtaWerojyDgDWdQ4NJJ76fvwMqpGePhS2RyAgS9tmyih",
  "key2": "2NQWyuKetynV6hVv9ir4Li9pxx3TQaMwpxKrT3KyuwFAppGcvBzBnvTVEAJtCCg8x4y4duKChjKTrXCuQzkRduS",
  "key3": "5tfmJEcf3aZ5NsAPnqnb3mBxEpGve7HZkguVZuhhTtcrv5N2pfmDESfGPoy3ZYWipz2DBhqRAA9NnHoH54ZjxBVw",
  "key4": "4kM8RMYgdBoBVaVRF4T8ZNoknCrub4epgVzXDd32xof5fVPrTwhPf9EY2dXVxmkNamQd5e2zxCjKrAVhcBmiXB2Z",
  "key5": "2u8h7DsN9Xx4wwHnNYC8NACPdhHVQWLTHenS19J8BZN8tpPBXK99iGHENkDcvFfDE3xZRzCtS59dRQ7WFfXEHtPp",
  "key6": "AFmxtiD1w6tEveiJrBYS1x6d4hW2X3aBGqGpzU57BQ2JYLf65NA5DGUjrkwJYZyJ9hDYo1HxmcnYjwVKrFfjo9G",
  "key7": "5xWE8cy1meqFCura4iXyDUJg9U8rh8S6fYyTdFy3z6wZrawoYiLi7HLUnXQichUrA5k1d8my4fDWV4RMoxRQrgpG",
  "key8": "5PBrFr7gWpknJkk4fwEhU6HLy8CpzAg37GRGfzAnJGa41zG4PBFJYJhdNN531mnNDkLWP11VT6c1co6nZ95p9HdD",
  "key9": "5TxrndsU55PZxfZho6Bg33CDhuLHHf8WSGY33brjENePLvHpzLco1UqFyWUKZ8SbjkBv5i4x9d8XY2urgtUsBkX1",
  "key10": "UTEfycWLs7eBpoe92GqL3SwQxgrPk6ArL4bXtxUNwxLfp4WbEZy5GcE1zrvhu2AqoRX7qSUgiKTX7yWuCF5axfH",
  "key11": "2zTbDPbf72L32ZjAWXXoR1qzNAniz8nSuFcqtwESfUMaeGVKaYSQtmsUmnrvpsWJbQKXh7ecfUsCMUUDMEBvU54s",
  "key12": "2pvJgRgf3uHgTXmirjjbgLwyopeL2gAaJmoN4HJ1v6VBdBxthisaUzgszMo6XRM55ffJ7kQiRSZZMM1urUCfEGLb",
  "key13": "3drH4pLUS9gmjsC3qwB6vnYYcEhFYDzkk1vaHcCGnQrsraH2aMX5pq6BnMaXrydyeoefy3F1CGHAucumjm17XD6w",
  "key14": "4UnSXqta54VrWiQWL7mw95Ef4z2g5XHG7vc9eGSB26hZhuADsMGmdRn9DYpDXs48etBvozXzcJ6QvDZ1G8A54wEL",
  "key15": "3ewMaqyWNMVPKnp87Q4Np51Z28CCYhTi1sz3hX6X888vy6wF2faAkyti3xfXLCbYMnC8UTkGAg7H3DjQVkFYjw6a",
  "key16": "urrJrxm7iEtGCzvrcWm5SfnJaZKkZGFLUF3i8tGN4vwdrjDbMESzkou5KaGQFob5V4R1bGKmujwoUCYmQo9CptC",
  "key17": "4ZsR7KR7Pkerbd8vmxmPvZSTWxLoibhP4FwdVZZ1NSSH58L2hyT7Q5JNxRCF2ZmHmwy4UB5xyeFmBDZPHuYL9Hxz",
  "key18": "7kyXDCUymK8bx3Z5ZTxmsvAJkcJgkQV3QCYwbp8BRxvz8xyg4Ffs5GkXkYVPe1ML3fQ6qnowqhEh5yskLskBmMm",
  "key19": "2DoLA6icacxCCn6aDwejUWymDRf2oAGmP5Wwbb3YcvkanAYJ9xivo7JCNjFyEMNo2QyweVgF9PKzjB42oF7q65Jf",
  "key20": "2mBqZpYY3mSjjPR1tJiYyZ1fLNHWxZkifrY9kuKpsiG5u9M4UcY4AZxHo3cM6nBVRZBRF1SevdgRdfSFJym3JjDb",
  "key21": "ZSRg1WceBgqaHTcBGt62UeZURSEkujw7rZwuVZbT9iUhZcdosgmtKJwmheN8S9gmSGv1DaoZanR6UAxsS7Sdg4y",
  "key22": "4Eri3qSuy6TxWRKwoHTLXMWiZ1p8SmLrMzzkNeotbsZgMR97PooLfXbHxLSEwHN3tK4eZnyCGx9CUPxgvHp3dN6y",
  "key23": "5TcZpcQZkP1ewPnZJPgJZtQrMeG2EsAAzF1sDG4vXSha9F5qyTRPV5fKudjcNUGrtYm7cYLRAzZ7gFcikJb1McrB",
  "key24": "4XmWT49n7gwdeATkBxYW36JjS79ZerHss6CfLecH6qERkzAiYxiquwzSQjsQuhDyvreeJ7gKh5Vz7oGFe7foN2c6",
  "key25": "4NgvPU8DHiZuEhpfDUFcGG5R5HoUbnWPhs7Kcb7FqKXe6L4LmbApxyoKZvoJfoCHUyyTvThyG5b2MRiUNFjAQSck",
  "key26": "39QrN1W9ReEWAvuGLCyXUGG5TGZBx1Ka57p8Q5iVC5yqpNymE1c3LHx85HTTzepFjue9JuQjGiDbaNgsuoxaCSKr",
  "key27": "3wD8R7rgYRRc7BaH36w6JRugJr1SUgEZCqyGuC18BAQuBvuAEcuh2eNE4rkhF2o96vyRvP2We76yaNb2hXcRmFkR",
  "key28": "3pkFELmN7mJCDncz1sBXCmuz4ig1QKcAE8ZKzbniWLnGLPSCVgZrRaQG51uYWfTxVbHVqc64ggvrADAVCxpojW4n",
  "key29": "2bu7wFEG44VaC8aV48fzBPrWBn5YQHf1JnVX2zW5sZho6nu5Nfn48cha9nfx4y7auAuq34SFnwkh8aap7eBzVyTu",
  "key30": "2qnDSJ1iZkENqTTn8mwzYKgHrtDZEoHibsykypMSt96Egg1fGipxAL9JbtbaXhf3nS8rpkdxbV4ebowNu1TFpDuG"
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
