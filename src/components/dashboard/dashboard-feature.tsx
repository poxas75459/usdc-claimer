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
    "4EUaEeanSm3aCJPxuR3aD6amBptWbCcm3ahcYVsEwG1cMyTVKw2XZ2ER7es1EKxZM3rPPXHhmmAaZtssWVHk25oQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmjLCh3SKGraSrcGZZLfKyR1sedcEP23Gwy8kX5PNPW7fnDC2vPtt1keRSpdUir7XpmpRoBvxUE5bqvLmmqb11S",
  "key1": "2z4M5RnKaU7hfq4vRLf2JXoZmgtTvvsF8WJS5fLkeYKktCLTxDV5K4DsD7HC44P3WMpJ15W37qSSvc2HPVfZrNQJ",
  "key2": "4AhH8MGZUhdkZEagPPtXb4qPZFEXJ2ExWCib2k2A2pbUe9fCF5YpSMgfeFC4qmyjf8mQj9gjRYP7L4ZUGpzu9KXh",
  "key3": "4ypEkP3Bf1yQDv6BrSeFTtR4ct7RsmQxHiWanjMXr8Kk55eH4sp3fbJoedMKfh7iHTkqCTHZ19S7QWdVQRV3Ae3q",
  "key4": "odtUszpjMPpjHFpb7qa94QHUgC6e7cCWkWzW23WCJwUDf7NuDhUUJaSX3CGAE5Lp6bZgVgMArHyd7FdWCquEc2n",
  "key5": "4FcXuNU5gGNGpM7XnZgY2LWaja5KqvAGp1SeEXXusWP7aAcbN3BYynR9oCMzd7StfqCwr192TKAFPhN184h9uMgd",
  "key6": "4gdAiV8MuoENeBbyYtgUCDUUsK2uCxPMqKchFPd2DBriwhb259d5ttLhyoJVhtjjm2E1xREE9CiDsXo6dYUmhk45",
  "key7": "4Gp8R3Ja6f1S73Bb2wZie5xQCkikmZXi6WoBpBebgZFvro3vWpEZbBwSrYkqgUwnkb3ZGDbwHkEekEFipRQcrwqZ",
  "key8": "3ubXRbTdfdZ4eCVs11f89qZNRYyBNnyBJrypnDvUPaRjtUU7q9tCSagJZiNUYvp7Xd48bXCSba6n1PZD6RunFagD",
  "key9": "WoEH1ubphbneSMyBKGDfon5ZsuejYRVvkPKEumRVRTfEtUoXYY5nXBbeWB2rJhJJ17Xzh7ERWaE6o2VXMZoXAKZ",
  "key10": "5CdFG4KhkzT9HwBYhCrzY71ozMQGwfbeTojRZqk77YEnLH83ewCXDwReLbodGnWJLbfGczEj3U5b1PgVqKE2Yf4E",
  "key11": "5Fmmbh1LFoA2fRkepyUEezKSCkGpYDLbEnMiFXZERbzy736SmNpa4kwSakfSSkayQgKRhAaWJPpimtBvkbxxeeox",
  "key12": "5SeRNjzSQ98hWQqQadURoX8qZFcnth6gp2rn1oX3AtrU28gZd8RPVyS8kvGcqAJfchpSUF7stmvrxEtCy5XvuPxu",
  "key13": "mM1p1t2n818C2bR55YLArfuEC1DcqhkpU1XP6dpfwduK918HikH1Vk4mPFNietmwZhhMsi97jjK4KS3mdVZZH5k",
  "key14": "5rtcz46P5sAmJcJRFT63L8DozkxpahzXBUC6oU3AQDBGYmS7434QVKg6kNZkMLkP1UEU54324c2cjwPTEGgnSwPp",
  "key15": "2UF6VubsGZo2YtfVdDQVWPqzb5NeWDiwQFqXeiH3vqtkKyTXDswXmMuAz7DbEHr6qniK3QpyHnTD6nuHSqe7ZygC",
  "key16": "5WQMuLEWGsJ9r4xRL4EfPg2b6BhZT7Hx27fPt9CzsK3fgTHQMgeJSixecG55CFVbWvMkNGdwF1TBJYjidUKEHsPQ",
  "key17": "2jnTH64s6GZtw92eFzuKuuAPNH6fzPFiRuNUSvKo6GD5hJK49RaeuyrpZSaeqb4BzjZ9UBiuWMW9UcFGhD9MAhjT",
  "key18": "cemrzc7WGYFSFZL3vKgzxAZBmwE4Jr9YbQAP4DCm6LXXPSM6Ac246okhHuw8METHJarQi5ooGHv5P1U8ZChtVaf",
  "key19": "4stwfAGTND1qJBiPL67sVm3cuyEHZ6CDUES5sbVCqBff7xf17uqu2T6HskDP7v25X6rbkfv8ndSr2hPdKXRi13dR",
  "key20": "5SLcjNoUhcJKymUsyNwhjgr7cucxGqCTpwvVvPa8Sc2dmi4UBcrBUBo1aL3h7Ea87q2LR6xzux5XKP71w4MTwvVZ",
  "key21": "4FdhZKqjdHjhAU9YZqyinynH6k7xNb19fGTtyv1emiRrw7LCKC48oJrMqF4VxLWMpqvTkBLCbShwpxKspQoikfgw",
  "key22": "4PzBqH37fvP4bqmUF4xWDjpGic6FiBsFtcvCLhFe3cxL4Exg5niLtk3yzATbEEY4aTPuhJ9oaN1EhktcAcZ1NEe1",
  "key23": "7BdyoQH621M7zd9kpoTZgJUsBp7NHJYSASvhE4ffkWWJLPsrtPC3yXrvXagmRd1DzjqrwtzsbztjajtMBVDwF2j",
  "key24": "5MhuNThs5pMr9oPJyqmbrwPZ3D4ee3gnurrL6gWJAdQ6yGqqhQuMp4jtpUPmqWoshSBkxpuBjx6nrHxC2BPEi4m",
  "key25": "5XgxSz7P5aunvUeg74BTNeKBGxuWbzyeNTUwhkofuFGVcZgoaSRRDXKShH4Wk5sSG2KQkCmXxiqkm4KjbrnqENzi",
  "key26": "2g9raABjGrLg4DwP1hu1Pk4Jswe12N9UpUq4qgN1edgRzYU2uW4ycM8GwVmGGvw89RnfhTnH7Y7sMG64fZDbGjPc"
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
