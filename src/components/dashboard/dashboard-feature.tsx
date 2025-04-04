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
    "4wVMAuHP4VQ9iJusdSbcHHRgUBGGqGpocLJGLGWU6aM6xq9kiajXfiE66VxfKeMpAFzfGpCKArq3RFt9NnPrAKAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYxaoCDidUTED18KUVUrW9Kg4msmN8QhR3SuJ3UnPGXM3MKuMjnCssqPNULH91E6aLCN5oodFXKpYeYfAExg4nK",
  "key1": "4BPWvwK5pda74NJWvvZTMGrBfDVgA4fMmFLiE2U2vCvAAMLUSyFJUjDMEQ1UB1ML4MFnqbsu226pkLvmDuDsADrD",
  "key2": "ngrk9MJfXU6tAy6fnVHk3xUuzEifahkXaQBUJfVdT2cQ9iFuhQVK676wkhe4XpYNYZiJXTbyQDfEPNvSswQha6w",
  "key3": "5QGC8wTXcK7s2VuHnAmvZF7DHnKUiT2oxov3571KyEtKdkTybwTKqwJ4irpTYw4hhTDuDH9qF4AwNuL1v3jaaHGp",
  "key4": "2zMeAX7aABDZ2Z74aC2PgC3w1PJL93C776ywdD5JpX9Wzndr93cyCiqje9TrznFyaQWhN8iYJRqmF25kd8p1D5Ym",
  "key5": "43GruxHh8QhbLGWKA7EgwuhFtKkpMq4PHVyJVkCeMx81F6cvQVPAu3VZ2Rjfm3znURrVxpgcEk2er5Q93GyNeZ95",
  "key6": "3yzS4C65noi5j9n3TW8N11sUqGr7HXXJyKRCoCjEJoWrGu47dp7yHBYRAQ5pJNNsvuokYLjfDDtUiHbjbsPvtnKs",
  "key7": "2JTnCk1Z8MtHWwi6TtCzSy3PWt5b7hMajmwyaYUKfRd9SU8r5SDDyDqQXX39gVuHkN9o9HwCQLSqSCquQdAkXyv3",
  "key8": "48FxE4t3QmrVM4yCnF5sq4xFeDVCcWC4JRkjRuiXoxYDwh33tTGUGQ1NWrfeGQebSZh2uQ7Y7conATQi5nNAhQYp",
  "key9": "gf5sm6Ca9U2vFuXxpRFGyiriK9TU4Sg3tyWoMH9pbDihphBMTvCpVrpRhjVY8u3x44vRyceRRzTdUzzqZubJYRd",
  "key10": "3tyhJaudPK7SpZB6bPSFeRLTXj1jj1EzMgA69t7Yvkz2XVbwdGSWBxDJZZKPhnnLM6xkKdGWAGdg7BrhgPNUF4f",
  "key11": "48APzdncuEWkk5dAco76iMrnGbHzXPMHQ5kF7unqRgGQsqXMvaujuqar3oURBsx5GRhNeCkkaX1dVhjcds6csDkB",
  "key12": "51Jpb3DEhbnhRHQVat5i7v9an88n9ojRkST4xmNbdLsMme2L2a4C5ZkTm89NRW9fYmtskQ3NPDiYeZJawyfSBZ7R",
  "key13": "XnasNC8zsyUxGmdNt78d1THkYPzA12HhhF1kqVua5XwtRN9gJk6oYaNCx8ZsKKaPXPP25vMPuW8mRuHLfoAadRG",
  "key14": "51ULQNEUnUUeZLUehFr2NS7XGZ586CcFHunzeSewjSpNt5p8KaC5mVQk37wgTRp9Y1EoVETzCeyAB9a4ofhxRNCE",
  "key15": "4osV8qoGz7VQMpVUNwqcvbzJWVF725BKf9nFvfTkBRC1v7ffczPHc6Fzdi265YPHUGT2K7xfStAJk1ydH7mF34c5",
  "key16": "3Zvm8fg7HsM2HWUJL3DSwqy72Lu5EHfcoUinTGH5kZccFZ1SzBR8yJP1NxUWtVdvYYskLf8g48qVva9muMCyrhbu",
  "key17": "4Cf1fe4JBQXKUmN1gvTQNdpsMpXmuaDJk8HkiRBU2Ad8xfz39JgYQ8YtDYGfRFyTU1Kg6k8o58PWh6JTgz9CFcLe",
  "key18": "4aqx2K9CnCGqPq1ndSKPx61qXqSwbks7orQ9KHSDsaNEVgHgn9SoCqHakWuEtW4WmYaFGi9Zd4CizUeDNdJ6yi8A",
  "key19": "3jsTvxFVTTGQAajcngtUazEpSkvhKxfHknz78nQENE1To5NscPqaabeLEZPNtjjzQE2HNAbQ752Y9oQAGbRUNHfW",
  "key20": "5zxn6x475fnrvZbrbnYoj1R9uHzy5piXVa8eScf3L8Rn6DNYnFHdHzFUakmEwjc5CRiSJD2pzuvCYirEZBwDeuwP",
  "key21": "DGF7Hp2WZkC2tYzg1LPmHpAdEq8P29KzQYY3e2k4sLJbX2S4fJX1UHEfEZdCdLMXNjxvThV9n8pojuAJAvmS3vH",
  "key22": "ghrcsVrGufTgnRj2t97JXvMDWCC2vdhpPLC7H9crfvn3TddZZEe8brTXmsARLrEZZwEE6aZvRoXbEU4VkuML32X",
  "key23": "3DupNdFNDp1dCBSDF95x5um4F2u66TTkRG1eQjZx95djbfnrNigbfi4qNcjZq4QDTrJXfd2XYJp57F2tMKSbnXzL",
  "key24": "5tcsG8uRajV6nuC6xW6GqYuEFVVmeDUHcr1fNYZqM1Nf937kXeuwVhwmSQoCJouyaAwBPp8gs3SbC32XD2ENnKgz",
  "key25": "64gBBHf6C3gyQrNyCfFb5cAzfcQ2VhUP9o5Cb6GFC4Chw6SRksj5pmU2HyprbMXvsJ8Qmz2hZy77sEoRQHufoVHT",
  "key26": "4HgYpNRf5CDxsQkCUxGikRewGHZtB67ccsutb4GibsikwcQMdWgN9tpwdTq1W2cxbejeYcyGKm7TEiF5Vvvd3bm6",
  "key27": "HWMUE9UBJmbvJNZRdDy3eFYjMNEGTDqUWBTnryP1ghjmJuWN9UZzYdKE34oJxn64U548dbXiK85ukkaRc5ayD5r",
  "key28": "4nzfgRafqMWdCimc93JdZ8VDnGxe2V4qQkdZ66kARPof2cGiQ6UE45X7hNpQMUVQVJipYgUs9zpGP2kgbB3wUsZp",
  "key29": "4XaT8jTXDr29cW8x1TsAbEt4K8FYUn6qD6L9PSAXLxw63n4funHH6EtfR2fGQvvk56NgPfqQPGuxV3o1P6jjuWpK",
  "key30": "3uPreMgSwBp4oQxP6zfoyfTKNukDZmiDvJMfSmz5tTtBr2xpCSgLXtA9ThiU5VxbzwecuHSxTJD9GaXXvvrPxhoG"
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
