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
    "2SucUa1XTfxcr5FSyucF9Xt4h9jcJciXwZkuFp82eZyQsaxY4jarJzT9wZeknJgYbB31qFsaV1H64rHupnx3rNZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6Qsr7zHoNwN7WxqbcSxf13bn3uDQYGUJ68d139aup1ftnm6F44vci7TZm6ev2gS4Xq486WqupDBmDYg5qUDCoK",
  "key1": "5XbA6gu2amWGVQkZxLS5iXFJhtwAWphiRk8h81b1B7eYjy7xTLYu4Ju75ZYXjfrpXS7VDeL3FAB2kUQvajpsXFnN",
  "key2": "4ungeKitH92GwATmmQ6pPQf3qX69ibznnLmV24mYPmz3fgemupCB6dzpZFxa3Hs3op3omRpCxs2W17NzhTNss9uG",
  "key3": "3d3XC1EmLT7HbyhUeroPJb9HTx1tPEicrCV2pbmrA1XwypugasZqH8cuNyPrjgFwmWLNBzCqJhu3gGkp2RcZC7dP",
  "key4": "54GmQndjHoiyqjXk6nuSMxNKAgLNG5HjvVztJLr83ZbjufBhUStekqPLsug3RmkkGEhn6kGQNDheUJUGbPuiXbDZ",
  "key5": "5rdp4ffAdkESsiFrmkYAWjtTCh8NGZGqQjNcGVAkAVRtS4fB8Dm6o16Q3fdLwPcGsa3STdTXY6rXFijqTH2muFcK",
  "key6": "vuMkfYmYnCebP35NpGuj2T9v5E9YmthTBM91zVG5o6vt2fb5ShbXydNDphxpNPeaiSDxTGuX2HASdvHSLJUw8YP",
  "key7": "3pYT8Hbmo1c13CKEBwG2EaD4NwajEKNKPrahJweHaVUPmJHM2uoemBrUEvhcFZyzUPx3rojLcJ2ajygUZPJqmw79",
  "key8": "4koDeAoLRLed26GUBLYZBYdZHuy7wMss5PVqqDHAi5knVyp4efz4jwabd71AjBi9kWGfVP5zsUyLXPV47EvgX31Y",
  "key9": "2C1xE4nihQhpWnYorpVDNjtRnzqzGSP9HGddL2cugWFyiHHZoeVqEPgbVtDxfsoQWZTJoBJd2yJedUerHb8Z8C5A",
  "key10": "ZDJhpTnHaPTQxsyGXk8F39b84et8ajmVD21sSSovdwtxs7AfJhfu48eoW6jPMAGGVyLyYkFxXQhckUe9T9xwnKX",
  "key11": "rEr2hb3X9aUHoFY4t683g12P4EmZLNnkiynaFPA81kUEBP4aa2CSkQEVTc5Teed6Y7KZy6oCEMgsea7AoHobXSZ",
  "key12": "5DLFtc9gzmMdhaBmGeYxyKc4wdHAw1dTbtuKWABihs9fpa5WE8PGqh5uJYXQ5MAvpmcgoc12exwK5L6uEr5ELZwP",
  "key13": "2trVo1tahcmVVj2PBHqi3LcrYFrkcypBecDL87r5Gv92kFiMdvaLBZuWaoie46RzV1cCo36449WaN95STBQJsk6T",
  "key14": "24pWYjZqZrn72kmUEkgwz478k8h2ZjzQJuNjg8SE1i96YL5p8N6PnKKaSFRC4F2qsJfA6naQkPisgBXhwBPqpsiG",
  "key15": "5YwppR1ftfmXX4pji1Yb4Bt5b8Jj1CsK6XpSaizKRWCy76SwntijepWec5DDZ6mMgrqzhHfyCYsbpNXZrZbqagjU",
  "key16": "5RodQWTDt5Z3NmWTCbQhvEVeastg3TVQuKKbb7XANAMfsk6bL5FHf7HJuxxCCm6j684WiRSWb5mBtxyMQEU3tqXL",
  "key17": "3b71YL9vuHRtGSZ7gxYWFyrp7uCvd5mE5JMdc2d3XdMswj1yLFm4s1shGTNnAVaWjt65wpTPAyFswQg4hLoNZTSk",
  "key18": "2GY794Rnzrv1bpn5Xmhz2goT7pzodPNDhCVcR8opXF8cpKwip6228kEyWEXxLC6a5y8H9TSf7nBvoDAAV3iypiJS",
  "key19": "3zUMHigLvcv62yLY8tePe8isHk2UvS2nS5Rnn6gAqDxYJ5gyXxF1FFJQjSPxpaB5ioaMG81n6mJr66356YFQLw7S",
  "key20": "5RWVXA8dZzEpWkjbw2Yvx4oByPeQ8MdoJzR8riyebgSQNYfTcnjWc95i2qESWy4jHviFR7DK2j9SmaS7rp9wPUmt",
  "key21": "2Avyio4mrURwNhTMP9dbKK3hDRcUnsTpwsXm6QrrUNBf6UnUwP3Wc7Avxj8Bd8oMFdZpDFQfUt5Qn99LSFaWnX6Y",
  "key22": "6k9WEtL4Z8e3czWhLASgnxa2atvVs6ZXrTnRPPfWcCJojfarD38iBsoKUFuqYgjy7gyeYbw7hhYizFrV7CrUoiz",
  "key23": "2PdfMjomfv1RC1F7bEkfL1bayeTSru9xN2buxE6bX1PjZFjHttsKh7diDHEdCiNeVQTZMz6n7f4fMTtK5kQPyvUN",
  "key24": "3X4mpUSnTNhbnGEpzncbGaVMHQtcY1ZjfdJhdY63ugs8YmDPahVoADZckJnEucZTbuPVSidVbE7xix8qojv9PuJP",
  "key25": "couyGeHWPvqsgDie8JDu4e3J3evgEtfF1HcS7w5sv8yY9podYQMRSq7AR4iCB7vef9Z58WCr9yTkgbwbPhh1cH3",
  "key26": "VTxPq6Z1iFmgnzW3u2N4rXt3hSsoD5CZKWiMu116U1M6BgzrPQy3scrY66RkhJVUfTDqAeb3og54zFuPcK5NynK",
  "key27": "5qb3qKytw5JN2UxVhM9DViEGw2HNXm3onUpasNAaRxfSPzvVKw2W6vfVY2D4jzAW7hZBXChUamuNxy2DQh9AF2rg",
  "key28": "3Si1eL7SiPpXM7B98MYuHaVSmV3wAE4LHwKFJoXCyamw1EJd8JMALZzYF2edTUCDTa6iXUYW2PuN2cXckDKavZuf",
  "key29": "2CkMQ9VqLWb3cbmZTeCaXQkpUJhzvakcH83FBixZ5nyUB4QLbRW7U3yj4XFTEhLUGQrMpzRBNtHGUopeeGR5D7fW",
  "key30": "5v9iVz1kbzSmPpeocynZhw2du6jpZEjZFFnxoS2jYp3CthXgqhTSH1h5z1WKK5n8eJzCgWt2291RcpqV3FcPqqrJ",
  "key31": "5X6849Cvgzmtq1wyt9gpkGjHpumrxHPdJkUgRFFRvjCLv7GcHudYmSCMgD8dwdVvGYwgE2i7Bi6ufmoiEWVzVRtj",
  "key32": "4q4M5eGqSRPYNDgqfpMYL12GUxP4ocavRcUDCEBvzCcabjdHigmrokNdoi2wfpCRr7MSr2Qsspgp1Xszgf9VXVRR",
  "key33": "2hhmnP9r9KnbqG6btEHE73HgFf175XU8DRawUhivJeYzu4aMMD2B9TiUswfsGLEKNczrFv4VmzrzQgfMc8EyodqY",
  "key34": "51BiQpd8VNFddPmdm8pnrVNwiMJqsFUc9CBJyE25wTHjs8KBeT6GW3ZUc9y9fnZMdddVS6uiHar3v3WgeU6Uvhou"
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
