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
    "3NCqiHES7sUv39HYE9VzJmhBWHEdbk8U7rMkjFenBFbzuGH3JbnFm5qrJcmFS3PN38HHJA1YAymhnXzGcFPnxXrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqtwekFx5w2V9wPFw1okEEGcTgEg8wCDHoZWGzpWXVNmTDVarvRKNQH6VCJuCYa4QtAHyGH4GjiQ8XggjFmT6gW",
  "key1": "1CukfkVsVrGcGjB2uzyVcX93Dc7VMi6PShvbYqTzCMGK3PYp5t8oaBkjJAzfd1NRbz9emmQvdGTKweAu1PdFnNv",
  "key2": "5Wio58pEKix9NjhhF1ToM37V5FZosUdw18sBEnjScSHLoCBNNNF14mqvxPhjGjhsmf6UwNuQgXHLMEnDWjLQfetz",
  "key3": "2EUFrBaMHWboNDVLo4JzHgSGsYYkvGbLFt9x44Sw5a1KecBBPKBHJEBgVtLGh1UfuMo2MdCTT3aEi9bAmHd9cEfm",
  "key4": "2ofdEjzvzqBQ97XEiHtdF2sBLun4dKf8hqn4MPppqsist6fcRiiy19LERjQegKmuyBSBMttndmpoRo17Yx1JTZKt",
  "key5": "4xNaeo6AKMMNjafbJ98q5wpJJtc5pUzwaMsDxbjLDEWkRdUMFJiXL7b7eQ31fs3PZmPfsJ4vsEmCZbiofpPXhF48",
  "key6": "kDMax9m6TALi9KJ4Ru9N2Vx337zYP28FUeug2ShnTgwhYC512DT7JYpgrxVx9qVu4CGCSPmeaF57dXWREGJ2p6D",
  "key7": "5nmqoLcod8s8eTbioXPApuqQUCFLtWW9cjBnZnABm9XfGJoAimVisMsnUoEBV334YXodjTVmcuDFBwHCiog6mg9w",
  "key8": "3buuQLCKSgyuoaB2rEtfrnqc9G3MqTN4HetxJnpBwMUAvckaLtfNJpwew9dTMhQB26RBQSuqdbYCEWCKpWPUikje",
  "key9": "VL7eotGs6vBSheMUBHgwNTbHVdf2n3AoRkq6qvc362pKNfzFKJ5oFHg51agk73ELM6GEHt63CWvi18ZLLHxnPnN",
  "key10": "rQhkQAzsqWWZTi3EGnzGbvGKv8qGKmWu321XfrE5qkaPAmfJZb22ZM71Z6suzMjXcigEhjtrczR8HTRBvT6f3TG",
  "key11": "SC5RRkJsSukxippveNd8iYmocKV5D8rL52QGJcrUpvn8eRXxTeQcbj8tmnpocB8rEKg7HNBzqXvjXWihsYnew4o",
  "key12": "4YWhuF2nbrz8cdEi2SsW5tXV4wxRGvtxEWXb5aGxSks3kLfcNVhtq3YKdZMw35qkBCuQahCMzv9esFoBYMiu2DF4",
  "key13": "4GyM3E9dfdJykFLYr1PauCZFHWAbHng1Rtfr1MBSGTN1BnwgNGnmqpUsa8vA9Lscne4UDJCuuPYpkVnWLvUmoVtV",
  "key14": "Xma3iRPfX28y3v8BYQS7M9ZuSLMzuCurSCM3ALSkLX6oszCzqC1QNA9PcFDh5TCRp3q3WLrBNCRbKCNUZMM7Wxv",
  "key15": "3oUozXGL9aFq6Q6Qdm86Z6Rec5iv67ZJrF4NByhSRuy7EWogeEB3mmxRi64Xy8y1LnHRxAgHdHo4WTibSs5egKtp",
  "key16": "4AKgFtKcSZYrEFyNk597Atr1iz5Fc9rqu4cgkaD1KUFprdFqeG6FC4t6XWFSsSAvFmShTK2egGFWBUCHDB78e5oY",
  "key17": "2pXCuPXAdAckUMT8Rf3DsiFtfbAdWnJZhCm9zcbVc2ZthRZ2egoTm7EnNkQanmsYfc373beJgkhMEaeRUzD4qEKq",
  "key18": "2SNkkE9vsJJWxw7K4X4C8UG2gfp2FAT1Jk6cgPZ8bgMDyBfRLQRVb1FuFYUNHc5sTkLG2m72KrmfesuiFboprVV2",
  "key19": "nTcvW9dNcU6djpjnirMgM1NgWwWWsbzCxrZBsLJgoV1sj7xoy3EaNtbQsb8MC9q4VuqLdqMUo3Y1ZN6vAjTcdXK",
  "key20": "5eX6zXNLn3dePEBxsBc8fKTdiqSYTMFe14MmBn22bK8HAuXsQy5NSpb5ZsDKBuDumuysczqTnjc6KPgij65yj8ri",
  "key21": "19JX9qGUjYubTWSj7koqGRKG1di5ErE9r9TPrZUQdoZEPXdEFwqXwr7E55jS5dK3KUUJsTnjMHtyBGEYM1ee79a",
  "key22": "4x9WkmLEa4Su5wg7XDiCteZtmtBuLnFJYqkYGRgCQs5KFZRbSB6j87MMtrKqbARQabmKrHa5LAXnj8P1iAa1fgt4",
  "key23": "4vivfbVXF1YeyyX1kENQaZLk7q3g7Z5JkRJC8xGHu38uYEFnYQkwg2N6wX72TwRwLxNG8oatTG2S14QFr1xYSriU",
  "key24": "2MbwMZ9ostHs2LVoixLTaYATKzhUBxAqYeMMKMTXjSfRWd5YAehCYhx5b2NANsuyafhAmc3A4f8qaDjKkJnUJBdH",
  "key25": "2DWvge4QUzkqkPuJyHQhK56qiGPiEeSURmWG6yhasHv6BbXSXqeE3NVU9o3rrZ47GXXxRBaKSYthQsPjoo1TeEem",
  "key26": "2B8cNKqTYib6kYKjjm9Ho1pfGuQYUbEd1SSLfZBkTUmLBxC8B1V7zoLkp2mzB1GjSaCL7AztcFd7tUEfQwJYS71P",
  "key27": "2yQF3wBtL7thmx26nLzEGswtucwZhSrRD9aNNpirn1wkcLWtuzTA4z8rckjdVpEkPK6s1MH7sPd3Je4VZbUTA5YR"
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
