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
    "3mLuDkRuF23yfY3nFexMMrRHZo5nYmAkRwo1vD9Wr4RfDUwoRZkmxkeCnNRzrqGsiGrrcKKrt7vtqXHkFEqTqVxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aFcqvw38RZSExuXMZt3CVqhpDMFbqHoaDyimiWfoehvDxzFGsR42NNDpH5t3zfNkLNNSyGh3XD45Wgd68ZDbgb9",
  "key1": "3L2LuB3bGD9T9ztWjmkiRZ9TYWxaRLrZFnZnwMSWtApCSpFkTtXKBJgWWXkBYg8B9awUKHpgebhWZXMmfAvnVaxN",
  "key2": "Qo8DzsxFb665kMfif9NMeqBh6i2CZDbpXSN9udcTAfoyRfEqTdGWFNkQj2MPjKCmdg3H7hmgHzc3zDkNXHPng1T",
  "key3": "5x9qw8X2nexe6AwVQBDWht1p1gqV3vr6o23DiFo9ZaNsGrkXkP4JxBnGvE4TGDfLdb926LyRPVPmZrEWK7M3j4pA",
  "key4": "Cp1pQnCn9qqrvXDgp9ZDYvBLPL3Faikij89KTAsptGWCnaqB5o3M9RmnXvByvzqc82LxiBhZH1bc6bUPXgDwBXA",
  "key5": "27v1iN27vdyPbqar8Gs8tSxqYRoHKVhYFxoXuuVY8bJjXErVeKAqVmZYEbC3HYGZ4ducgmaSmF8zs3VxYesuYFi5",
  "key6": "3PoFe57LQGkZoDzU44CU65JBcK15tuWSW4dqiGny16e6zfu5nZ3t6naBrsNRcjgysdQm2Xk8BomRtgFC7tLLBDbm",
  "key7": "56xmU5cSdWWg2W8C7EHzuiEaVEkSh8JagtBY3xAsbQpRMgMKcXpZf17A3si488yMQHmTmLk7MBSxDoBXuMbkP6uV",
  "key8": "K76ukQVyXLQu4FTjrTtH5jtm1TmbxHREgVocSrJV5P4ixFw3vdrAMmyak8ziLYrtHwEVX5CymvPc982uGoSgZgb",
  "key9": "5EymWeYGyanCbUCpQCZeYrrCdjPrNVTHFLGJbTA43cxPATZSK7Ci16gYrvQjcW68wqQTjCPvFVTePZsVTReXDRki",
  "key10": "bqNqYifzUcdQ5XG6NeyAfKLgXv28uQcPh2UG9aM8rVUw2fAMZUxWJBoDdEmF8yvXuFYY9v5QDAeTeVEVVZ6V94P",
  "key11": "59bSzus9NJtQAqgnCZ3jCDmNmozyRhxDqt8sTK7ZedvPfGJm2MpTp13Dx4VoisaXJVokN3VGic4tc7z7up6NPYM1",
  "key12": "3CQupjxY6JqGJam2JUiyx33X9hrfyjkAP5pCDwMBFDodis6SbGtdq8RuK8HBwMiai9CaUDsCTSnhgpzhy64y2rfR",
  "key13": "D5xJk4nGh2wd1YNyjaJpD1UUB2fPPZecFYMyeJWAzLxynwA6PSbU5XybvGqG2iYrLatuponTYVpCjsauSKAEB1f",
  "key14": "3kjkqi3SXP3UQQyuwMqb97RZDQ6Nv6ifS1Lbq5trhJBbaskMP5CgRw4NRBtUu9CGpjoohVk6LUcGap4nT5baYYmk",
  "key15": "5ZtSTxH27o3MPHRqJEuArT8bfnHHtA6Z1kXVvtozTewmxKBYGdtPspdJMdfe3Yt5n2PLxYekM5HwnDwUBuTxYNhe",
  "key16": "5w2odvx8GcKsrmgyRN28wtg9urf49XEyBNKBa2Puo7nXQ3HUCeUtFEQkv75tdiQsX5jN9Yxa1rGF5morVR2dKQXS",
  "key17": "5yGzLFtRYF4FWU853jvr9Ukzd4oDgPop8XuMddi4RQZbsrEmQa7MN3aqVEmzmzk3F6euAqdwBwvkRXizSUiRfTUa",
  "key18": "5kJwC8wRQPboii27HQN4wqnJ54ewURaGwXuo3kwdS75tgPFbpuTfzyuqNrZhyR2umx7JpWA5Gkequ7rjeKJ1hwDx",
  "key19": "53ZC2AofgejGrKzkYuRUNnJjbeRMP3bmwSUgUqAzWr82p2FRxVNTvgfbuhqiz74LPo6PW5tiCe8MAAvn8Gc1AGZT",
  "key20": "vrkmiEQWSarVVvs7LWrzkokM95aTaDbZ2ZGRQHcMxWqCUqbN81VcbVrrQqm6xa9RKfyLTm2oqo8Jza8EWPZKBd6",
  "key21": "4eJuCQQieuDimyWYV84UYUoxJJwHBDzYCMb1PwY3eHgGMMo39w5guwhdpTUnmBqagajzpmE2TQNpWKhuuLVCYGoV",
  "key22": "4Vb5QDaYJWUZWQcDsvFZu3PbXF8LfrDT7Ch7BrFW62Kw78SqjQQ1g4rhwNcYU3DU55xe5SSXUp8FMQSF4aLi4QFD",
  "key23": "4rjzDYfT1KptYWdn1XFY4MXm465yJJ6Svz2Cr1YoRknsC7TJBpfkkfiPDCFyJPMbYx2oePbyoPDkTmutSD8CVPx1",
  "key24": "22GANe1xmumTRSnKgBhuKR1pJr2XhSQU6QPZtZmktjQQ23sChJxThgN4fpbJRk8ggwXNhzpfBSSVRuAP62YvUAHW",
  "key25": "4yf4jS1qPp1HYcvEmqDPcfRknR8JFFuVZRbhZuwv8EaX2sjhKYuA8zCcn94Q9A96Ks1wu4cRz9Fh6Aj8SFsJpQWo",
  "key26": "3tUDKiRMZ13rWzJ3La9FdAusNQ8jxwF17poK5ZQEtGKT2AkZtuztAFY8wXxM26yoE3JBZLUzp9BP6wDB4WCSoJjs",
  "key27": "5SrWaMDZWJEJQUaFjeXhz6bpsy5ig1FS8sYYTU2foCH3PYWnc7emNFo7ziFfvJWVdhcqUqYgp7DiqU8XPtAEPWqL",
  "key28": "3HYMVamYzQrzoDnF2pF84EERwamzBzPAvN5JddgATErm2gkdRvtd68nbDWaagH8TepeGFDjPkPdJvrKW4HHvfjLv",
  "key29": "4duJqFP3LeHJdQWurgQ7AZp3aXHjoj2L8EFio5msyMr3iSfhV1pocaSmBGBVh5C8FAizeP9wNtQwavrp8xkNvb1G",
  "key30": "KYZpYadrxZEkMFBVEjC9GJy35441gtmpppoisx4qscZSFzW2341fgbSLoaRymA7tMKSwiA38bQX6mPGSdwSGNZ1",
  "key31": "5fRx2NxMXhELnvFW76tpuTGpwttciGTGMhKUNFUZa4vtZTt9thGy9Ebv6X9TjBH5MfM4haETfHzpuiW6MmSa3cro",
  "key32": "55bhWWjwPg35Rkdv1LfpAmX9Cd71LbL1WNY4HA2dTNvoLrNMVPw2ajyVAyxefavm4ZLn1SB4C9Hg8jF7PxDtWTWe"
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
