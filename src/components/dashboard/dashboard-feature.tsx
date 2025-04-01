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
    "pJfg3X91fve92AsddhD3YDEBDxFLp3QUQ6ez7Ms2y3LvzLMfdnyRpWa3up8q6M7V3X3GB2htDQ9c4hRYAwCapmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YsEkEeqPxAKZLDNr6Av1qCyhswFwL6x9AqxBt3mzyixdavLoFemC9z1hZ6SKfdPWGuzZni74uGueBebAxaEkP8U",
  "key1": "34MMdFg6BEhx349S3eL7iRqdxwcPjb4Ao5GEPBq6FAkduhjeCQMNqxhWHscMdBFf8Tay2yMQM76WaVVZsWxK9Dfb",
  "key2": "jufRtgZ5k3wBSJTx97jK9AyCmmCoV2yEvAbwXp3bNWbtEBYZ4GxDVR86JFMFdkQC83wwh2xgzH5eUcEFsfY9pFH",
  "key3": "4AzK4CzaC1JoYRx8E3G6MoH7RwjMEoHrYtAdKith2jxn64ZRPeNPY38dMwfdeWCXRZxZFZwYgq7m8Z2REtDhZ5aZ",
  "key4": "2pxizVainJC4pQP6mBSD8LmN1zKVtgftqgJUDD6VEFq6VPc6XZe8QSC8uQZveVghVtpvfQbCnhDRdUGSCDV75zNA",
  "key5": "4xVUx2e8iQMbRospGmLqs8iXqNRynCQW9og2y8pVYuA3PFSVzuJNSpc5BBVUWnpbJ9fFZru9EQX5sRqAMoSFDYT3",
  "key6": "4dt89p37igJW3G4xTj5Eqqbb2g78Jjpp8xeQo4LuJn2QBfVs5Die7aT6JLA3mZ2sVLQKUKJ1NiGMFCfNCiEKPdXH",
  "key7": "5YZyWu9UmkWK2HeRV1faeooXT4QS1Bwq66jEyh4Knq14fqU3KfDcQYdD9qbLu39NprWjDG2kN7o2zF8KpE6BhUqY",
  "key8": "1mv7BziBBBCpRXpPWaGT6yKDRkCecMGB3RQeuPChgh6AMKD2P6HtAxcSYpbkDq28gpgeypRRrBibPUNrKiU7HrG",
  "key9": "4f57z4cSDNaKcCCueEAyunDVy87zVc2MVMXDxDcEcneqPtaLKt8zjXC91RH9r6y293g79fQT8fy7ugdjdtzr1NGp",
  "key10": "WcSKwkcfVDA5iU1yCpy6sHYCh2artEBbty59yegKp7pm3JbGsb3yyUiAAQax1yDdrZQ6edNULF331LUZcg4bZUT",
  "key11": "5yUPE3jirfWEfTFnN6P3W8coM3ZxDu3rKLoLTjdUPRCJxZL5P3oRXso697HemcapdvsTVbqQJpSDKJ3qpMwFETgf",
  "key12": "5BYUeUpCDpvQxVFQmwMRwp8a7SNTV7vgxNbEFHDdZUV1DF7CuuAKsqhZDDXLjM52EniQBCKuFuqCNCjFCtiYJKGN",
  "key13": "3qW6EeuQ1H7fgP41VNUWVLof752qFeKbJhtxRGC5eFfff41XjpE9PHq1Et7xzzrunMfzFGuQUxY352QH3ivGJE8y",
  "key14": "JEFLLAUWAU2BcUcq5Sqk6FkjqZQp4L6o64BiRnGNjEiLuVbvTmnL4a7NHCrFmLQDVyfL7XfEJeRvfSSeLtqaGwe",
  "key15": "4ma7TXisqUdtk5WNURUmRgYtmzxTuqz3BUqNNLbzZYKfwucRwVrzEM7qEexjqYCUrDRxufvuawMrtkLB2CURX4VS",
  "key16": "vDBCBdVyQvkanKzUW3Y3Mnfq1TdVpYyRVwzevauPNC1ufoYGMGSDGQhZjrWvac5FdUFj8FK2QNkL5xa2YekBUYG",
  "key17": "2hx4mWzzwNsn5qxdhWmPewcSHwAiTAfeiCFdrAUCDgS51HKieQVau7DWkSbJwVEbbnDEUrFgM5fEXZx54w3GTnJD",
  "key18": "3nhMgRWLM68mrnG6uLHcUxgCLaR597CFY5ie53sS5S8hmP7sLKzZ3P2aeH4RvukCVnS3TR8fshWC152s6UFxfQcn",
  "key19": "3S2CLCifW2qj3NXcZuDGxV9ixNoznUXbssUFoQkD1CunFNH7BGBPXGeX81p51Eo6QsNXahTVVgNJuEZ4NLrFQue6",
  "key20": "4jfmqLAdZaVkB3QUBgz7J6iPBkAaA7MP6ko66BuScUMRs3scx7tAazPibaF7dzK6nQEeeu9uYoiW3zGcS6273jAM",
  "key21": "67C5wDrBjhXH1y4nPkvuAz7KLC23jiQR8QhRXjKQJuAaRhUNwF9Zx8PRfsLFWaHDrApyjPMVPtgNDsAhFSV1voDV",
  "key22": "43NEEfXDCCdfMTkpctsasTNe2TdFL891Xk5PXXV7rHJKVSJgFdiZCEy6zYokVbTtGKKuFAwguwNDc8j7wN63AQkf",
  "key23": "3GtHKPePSwEAaeY4U2rEyBfvwJ2S3RrCuWBXAzRW1koDmzGLVobUuHQubMjP9oybJnzB1EyMPEx4fmAaySyE6fQB",
  "key24": "5xD1Pk14QydfduhU48NnFEGFreD15xh1xvpSYxiPwpKFCSXB4LYfoEaMiqf6EEDVSVpJvrTCEWJsb3A6mCEZJdmh",
  "key25": "3CsqntmGzsRv4V5UTrN7Dp3jsY8Ev3o3oRghyS8p7TKpWH8sCmd74LCHYRqFJoEn4kHtPuqS7okCuwWYph8qj4CQ"
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
