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
    "2XFdZV9jXu9PrktPFEdhSenjVC8BTtF9Za6Wmi4GfDww8qmkTAHCg1TD1iLYFKbir5JgKsFTDtdCEaWgo1c5nAoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PgH1MpADcQMzeNg3Tnmyt2o7oxu5xNoRoTGaJWLB9KLY1yN7zExwThv6eQwxw9mqKsN1fmYKLq9iCV4jhrbzCk",
  "key1": "6TV9kRFZstQqV15xuXD4cgZwsobbQdUATtRkY4n2cHskRk6M9aGBfBuh3NdZ4CtNjHrX6eEbkVepxaKdJ4yGXXR",
  "key2": "GPejo4AM5XjmgbArX6ogPWGBwP2ELvdw2KDRsuPZk7sB6ShUfzG5wzt9PSpJbxp3dJVHjgrBA5egJq3F2LRVDmy",
  "key3": "2Dcrq4c7NeLCL1gCDtDzTMW5v95vRVArGXVG6iSNQ1Uy3DV8b7bv4WLxwdDg8hmminPxCt3TKjke5ggWBWxufwjF",
  "key4": "5WCQL2ow2zEZhYQm6mLDNpDgLjsxRyG7fqPUsN5a1DHNmhtjBNoRrBuMXpXgT87xSAdqqxJG1heKmCXp5TYpcdeZ",
  "key5": "5hTqA1AL6R3fyyk98GotpHiweKxU7w6K4cRKBTqY1Mvkudbhh81edVZtq87669iNVjKBNPikKpb55HpzGbH7jgBo",
  "key6": "2PuaP1J8DH7FcotU3Fgc9uEAaRPcYxMnrS2XPziAqHq2gsFLoEFuP9midjZZSsBfhwWmSvKqu294SDkDgah1agpC",
  "key7": "333aK7h1gm4sum9DfzacmPaMa56LB5ZpZfurfMCFnACSmjoHy3eXh9Vx7qLrqMMm5KkP9r7xVgc6fuWLgHppW7w5",
  "key8": "4xyb6tvoDtTGjGbR4xtMfK1VCG1YT7UouVksfcZvJfgti6badLNK7WuG8oEvuA8EnYWadvpLMvxSLRocDi9UPoN4",
  "key9": "5x9DpVtwsYSTW1D5LoqAF36cxYyt5q5Lz7AgdNTtZz6rqNqFvQ5LTqoFKq51CpQfyZ5BhzZFdrkuEzpdhUCPHb2i",
  "key10": "5KKZa3a9VYGtNDpQuAvg2xmxHVMDsF1NGJDp1tMEU1vYuSkTtm93r9qazJMhdMTcxfjpz85w25QLz7Z24XXdyK9A",
  "key11": "2nrHy4mic7zcU2bsg34HPyDwLiWmkR9G4XWvRzjSsP84vfM3DFR63ctAGD4EJqXewC2DNGDmpnE4BUFP5xjmH9vE",
  "key12": "2pj9o1DcJNR5PYVj254YkuMvWevCGRH1WVpgEwktL58qyD3oQH3kPEHsvUzfyUQ74KzcGBYoChAkyDL6FWEWhYme",
  "key13": "5ixDxxE3RBYkc9cP5ReUEci75thZtXP3DUYuMGoyfK3P7VuBaCnigF65xKZKVv82p5Tu1jvazxEHfLyM8EGnsiE2",
  "key14": "hVwjhS6DWTLaYFMiqWQkgsp6cRhXwgnpiVouWu866sBCEefeQdREiEUNo2aCviiPwcv4jRSnvSrbpa5Ccu2X7Ke",
  "key15": "5DwRjmagrwad4cY21wk6AMUf3fgFiVZtvNBqxgT9D1br6qQfhkvKu1zRPRRQ17jkLRiMuzWR3p3pBEzg51xm5nX5",
  "key16": "2auwkEc7ZESye6HpRksRk1AvDfT52Lm4Tb8CySU2SjXYqmPEpjSiRiuXiWXrFXPeZCZ3CucnSwcunsthyHpm3Z2C",
  "key17": "26Pq3WH5qVvzECLStmx3G1KfxMGHJExQLZxC5G3zczFbDbZqxEXFkheHYfswHksQSxTN36ktrzPkrvuws4g1yqA3",
  "key18": "kiQzWbbn6XkNaoajk6uiLdbqoR1BMZE8q2GBseJPwXs6pjBd4dmVJkM1vSJnFvxFcFmhtpTTUANbam6YKKasg3T",
  "key19": "2SuWy8FdaF1VvUSK7zN2QMXC63Wy3M9a74GN5M5UYYEhBkoztGkiAg1AiPW1FXfaYpzcfXTypNFx7QBx87e97kov",
  "key20": "ZDhpxG5AVHNMZJr84GaJtfMwqaXRREbhL8Y7T1WZAhqP1TV8mT5sy65ukkjY4sGMUbuTndbPoyf6yhfZjBYZpSz",
  "key21": "4EyQ5nVMvfubqiEGPSorYxLeDrULhEvQQ7AyMhNbACQwbC7GqYUYfj5j84eWPXiM3PPPFTQ23ZnpJEDfjBFTfLE7",
  "key22": "61B6rw49GSNGmawGPT5ETJySLNdg7xbyP47AvFCDaHkQreWoFtnBtXtb4M7dqecigY2YpyVoskhbx3HAgmuKTnKb",
  "key23": "61xbdinFuJdzbg2jGYzApoNthcXm2hC4W4z43PantcPDXsSFYnd5sPZLPUdHWjqBNGa4BJ9AeparU9Na1TWcztpv",
  "key24": "3E486bTjg5uhVtJ2TKYgSrfbezisa5DDYbLzEpGSxa5HBzLwWyUgF9jVrE3hhbk82y8DZa85Pp4cuzpjvQpyXL9E",
  "key25": "42uEjKib44xdDAie4qxa2HmSfQDVuwKCih8EdLzwmbMshMGh2eiEEiFmu92GrTs7QC8K1Vp6XHoZD1hTxAXi32rc"
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
