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
    "4DDrFaiKP59fDZUkL9FSqRkED9iSLhe78pte2Xfnp4czFSVapWjfoaRMjN95f15rVjiXPtdLs8erj8FEgE8KxN27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59MvpB3Zm2GS5J7N7npqAQV22oUs1jF2ygzqL4LwaKUhDEvCmgyrg2Lgr8nWh3zzZBt1vRE7axxNNKtoDn7WAiDS",
  "key1": "3NSip2fowrfk8TTW5TfXXbvmZJPGDULwsWh7megZsToAXuxAngKFngcgWxTa8nubo2nTVzpC4xiG22DNHaRgFTG8",
  "key2": "3xM6roPhLhRBwoTXHNPmirYoRozkUuffeab3F3ycdaQ6ucTued8mjjpLRpgQGEjC2n4pymNbs8FNviNkmKEmiWW3",
  "key3": "SiDxXWu6ka7otMkiZzVSKRtBsARLYQsPBSpmfa9RoWeSeBugPRMniuq8mCYcV3jSwjUS88CeSgXQBLTPExi6aUZ",
  "key4": "4HjjcpNu8ofsnbWboKPKU1BDEhVfxnjjoBeZQ6nAsGBye24vF7a3WFaDUVBWvj5arJHnGqdsXMRmJ2fcum4Nyumr",
  "key5": "4JDqNZmxjDfmA3q2utMo7gnRju24Ji8kyPEWSKtWz6wupySvmTp2tfjK4srt5CHCUN6uD8xCPte7wjwmrayAyNmN",
  "key6": "4UNsnBHyCDyjMSwx843om3QpDT23tmPqdrh9GuVBJ1STak6qiX84kXqY2g9pc317aVbEmgv6Rfzi1thQ8fPwr61V",
  "key7": "4HLAonsuYPTxMjfQttXjsStavfwBfdNTKUcYCmA5haxUAeu2BAVwd5EgfvNswqeeGZT8zc1iCRRKEc2Lcuhk9V2V",
  "key8": "5BFWaN2W2LkmE84fQBbBu6sP3kh4hKvsnmKGqbH55BVUQRSFBJSwsZa8BGbURXUs9jnYzW2y5jMqA3rMR37izPvL",
  "key9": "DPYFPfoZXHasXyGy6XZiy2hQKwHE8GGByxNCsr8TjFZn1w5HSHQaTNPnc66BEjhApRTidV1Fqn9VSb9ENoVJagj",
  "key10": "4tk52aaMvfgixBTncQrQtt5hGMgkwnHM3VVc6DJV9qWJJ5Pb9JXqpSKVDQzFNikFPrkbyYbStc2KhHSgUFwvq9Dz",
  "key11": "pmzy811EbDt7qthnndTXUFXYL36NSTzifDNf4xGyByFRtW7R7DsN4YzyX8Vf7GLSMgWAnXYbK39i6TGib8gZcFx",
  "key12": "2TQkL9jBvK3mqX11btvkEAsacSWYR6DR7ihN7iRkjsnZoCotE8B5rzxFeGTvfTvwbW8nQB9KLLgQfUvUG2hF62wM",
  "key13": "x9y6V2NCK7h9giwAXWwHYJDCdFeGAQAmrsLUBQrP8qkRAovg98kBTLBsVfa9N6UaGHNrG7bSpsW4DhyzWjUSoxQ",
  "key14": "5ZJdwKCHJv9HVa7wvQu49xvretGkAqsn53gsPVHUyRHY5jYCro1q9ynwdrGmsAgn89w2keNHRYQbAC7nVW548PXo",
  "key15": "GVZaJenLfmhYhy2jpdygw6nGLAE47TKCnECA3GqDvSja2D75GW4CWETuFwTe3HMS4r9mh8212sXmBLj9v3odu4f",
  "key16": "49EuDdiyVidCYCE2rq7f9Lnk3YgY5tJhjyKkmbzWem2StzYNAE76hf72ih34PK467xmHFBvyZMLRyb4Yn75tfhk2",
  "key17": "42r69cej7w3F9JfhFNzsmVEMT2KSL3S4y2mtyKvZzcRcWTBd84rCKyBByK78UhfHwN9Rc7AK3xPdvM5QX8hj5fao",
  "key18": "33UFjLJzRjiwHdC9vZpgkkkUUqWngtoaBn7aoLNKvSp7imUqhSPy4RNkpFqyoSgZJqTdHZ3FnDTkXHChVqLmKkKt",
  "key19": "2qpmLyUPVKJoBiX7KWpsvAVtdw9Qjh3ikZZLwfxb4NxL5QTWTDxAHQdnPfncBigmPLYQHAy4iFaGTsEbm4XND6Be",
  "key20": "GudDjsncT7nyJZyYBHN9nQ9tDxnmHtHNNHfAu6Hi5JwBC6Qm7zMGZWxWR2JS98LhvXT7gMSV7khYphcnXTwS96H",
  "key21": "5bvNywVcZUrrpt6PwgqFP68CW7VUq9G374dswcaZrfuoPytEaumomxNe1fLf6QbZGGNT5iK13pr7dfky3W6B2ZSK",
  "key22": "VSaoHcEUsK8fkcCPc6pMA64a9k3FsoobsGMPqhZjS4F5M8gjepaiW9mN523KnRsFWrA8Bv27KH33swrWFTB4sUL",
  "key23": "3uERqA6mQ2688WG9ZhuhEe7DPP6T4kZzJe9CcBmsyyNwH1j6Hb3MoHUsc5A9bYKVG9rfAwdtEahU5zo2zvLEAFvG",
  "key24": "2a2C5tYsDWrt3RRE4efKTcvWvxMHS1Tu5pvRmZCG1PcXZ5W4DiACe7zHV1s4JCJDCUJqQGxSmifSML5n9sKBcqbv",
  "key25": "3vBW92uc8yjpppCrMBeURS5v5a2arzzFxMKcHcsNJ7tt1txfMfd1iNL8y2WhAXPWAGpveEQtVjVGUS6G9LtnRNwy"
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
