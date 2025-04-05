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
    "i6yTVvAVqatkm8tkATAjM2k5mDoaUAjt5qd5wamtDZUJmtsF1SuFaqb6jvahia5mD7E7M7naswL8vagViAUVJbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "veyx4AtLKKSXyXDg9Lp1m9CC6GXZN6sGZGrw725DzCkaixQ2vmGzCjdTzN1ZGRN1AoiGTvZbSa4NBfwNU6BV34e",
  "key1": "343wE4Hb5xUCDfMeajTiB8DcBX1qvi5LHxTKgWSgYeLUV32K4mN9Br8XqoSwaBNkhGZVYhTwzZQB1kpgxwwqM1WV",
  "key2": "44JEf1VhLn2mkpSEbSnuPGDY6ifCaXhqy2axPLfCQS5ztA6QWpBtNBqRHT8MT3sUEU4Pc9MF4ea5pwcieBNByGvH",
  "key3": "2A6hgETjhe6wxXPXLCvXjdiPpmR8abgDDfCMVxAPotkATN9BYg4ZBajgsAnFLRkMtHTpvxfSr5obdkZHjmJp7wTr",
  "key4": "KfaVNFdzhRJ1tUWCWf2NFxyaC4ZccX438A3uDkRyrnRPFJRi8DBHNPqenRroohVChM2eJKRmn6W8B1XmAQozmGe",
  "key5": "5w5kZdZ4TKbk3UmmWghcnhhiGUJhXmQgXL54MFZNr4XkFEN2JFfeaLaX4eWHkA1t59pUe3ujnwpQxrPRQEYdCpn3",
  "key6": "2eDy4Qb2rvHrMjX3GG5cpgw7dEH1xgkvPaoKiSnhhbsZ4oFKioAi1vtS6zJQ5gnwm4mnnunicHUQYkkNCuzPTA4p",
  "key7": "5y1SXorkREN9br52aujumHbNdt5ZwfYktJoD3Ux2NnMCFCtpaPbuoCiXPg13Umqd9CyNoj4nDNDJoW7f234k9aHW",
  "key8": "3YcJs6PCMfV1TKBtSyYRiD3gtE8sBvPw1QjaGo1WCqemmFLRs1PfogVna7j1JtsKThoM2z2CWV9Kme9R6MUQ7Q4y",
  "key9": "3de11NMF2Fhbi4qFMkiqXGzStQqS3kLiRZ8RgiYSpba7dab9NcSAbaBWKj5XfVgZu7m29GRK5TCCpVoHmpdiJiqb",
  "key10": "65nZgQuL2jjTnmgCAnuRy5pGH7XKc51ia9EKVqNaPGLzdQxBkNbpMqRPS8Qc9JjHtVRPhNJbGysi2aPEhhLqiHMf",
  "key11": "2SBJbVfUgYsyKc1RTUpUTpcdz2zaFi2ibkLGZi97Zhjjnu23i62mygdAeC1HLGXKACWq5TpmWNvek8kB2oyBRqRk",
  "key12": "5Qq2LGn3GLj7M7JBjYVU2nAu6aAZ8XErwepvbAGTPatw2UN1M9Be9odiBKF8QZmjGXZU77hC9fFcdgjP1u54KMZ9",
  "key13": "5jbFYSyP7SXaSCxQ7rQKXFy2sPqnJ921ActxZksMz5Vr1HmqbFoM4SyeWfU247hpmS1C9uF7CphNXiTnabiF38w2",
  "key14": "5b16nbt7edu5bD5U4G1SemZA8SW3PB8utnTx5sA5hBRmSn3PztwiMxekGVekYGvyTWfFfhaQB71MTbwiiJHvd5Ah",
  "key15": "3sfL7rpsnXdTVgEgTVFTGnPnwERNb4Tj4oxF8B7jtd1KqQjiDhgf8UneMsY4HjMkw1J2VoXsGzbyhaoCz8kuHpeY",
  "key16": "5qY2cEHe679qwtG65ronK1UiVQaG6pTXbmyCEAKNu9RuZWfLNYVzDUfE8kW2VqC6GNAA7neH2v6s8Ln6HBZ3eVXb",
  "key17": "zHqSK8JX2rdV3k2S91kxKfP1XcnnApGcaycnoJaw2QNacNLVHjCcVeKF7QoGyny9pwGZNCNrPnhjpieLxcyYDp3",
  "key18": "2ozBYkFMwuykgua4oHoAU3hW7aHSGLo18iYH1YSKN1MEN47UPiu16Ry6rzUoV4zxzDjH9U9v1dipqrzEYdhb4p41",
  "key19": "2C4PSDDcNVCN1qX52j9DzxHfJrPBx4WCXdoZg9oq7Z142UAtXKCp8NzDA6vUzCPxd7V6hGcvjNAsKgzmvdozHzb3",
  "key20": "4fAwPqEUzL8h7B6zFiD4gaPg8ForxyfBxTXHpzFkRBxWkknT27hCHQ2Ye926BdDPdGyRAQSzb9RkoiMmGo5jpUFR",
  "key21": "jeVxNx6GTwqLmvsdbadoc9tLaixdMVKf2XYQrL6CszWKo3M5rkgnznvYQ3xSX9jtUkp4XWFzyTmEbhJuTBBZYoU",
  "key22": "2sKBCMEQC7UbZpjed5DZhRRfJpzi1cx2LUjgz2wS1AX6XsjFfqqBND8zvcLVzb8aDLfDhDZ3qcCqinrknHd3EwwX",
  "key23": "5cPe5b9zmzZVVeUTjGEiwaV8G9xfLLbJxYVwpxcN482tHu1uEvGudVoNG5wd2CUq5Sbzszn4jHDFUMx82rchSUHn",
  "key24": "28a9womJYoxZsGo64k78iLcHCmkZ1saqDpBhNU98YEV2eK8PSS5sHDGx8QDtegr1DZJmKEa9RccJ8KfBN9QbXkrJ",
  "key25": "dZDL9RWCXHZgY5FWiRUxYjzvyKGmbhgVF7Dhb8J7Y9xpwKT8NLZQM3XCZGtrDrNkCurHkLeWx7o7Y7JD8zH7CVY",
  "key26": "4MihjZb3mth6KigyWuA1xeDxxNrTnnS2vExUSBmF3nMEsxW3QjByTf7BjckZSr6YUxJsM4vaNSejGv4VvEsjUP3",
  "key27": "5xw2cXy7pR1Pxsf1ptTzdEV5kHHMDEm5jWNoUXeMVUd3wmsTixCASJkvpyKQM6NZc711E8SZxhZMnu5MY1AdhP5S",
  "key28": "2VDVT5Wra8QtJercauZwTPQXvHdA48CqHYkVSH8HN536JzK1UaRboQ519HQReRUJ7iQArXYyE2bP2eTAjb3J3Jhf",
  "key29": "AnjpwcjzpAichUbsxoKL1MHk4xvmQHvr7fxC1L1ZfQ9gMEyTC2nV6e5jrhqVDH968DTe3hBFMbqgsy9y6gEAQDi",
  "key30": "2WcXDWGQ9xcq4H6wxzeavjY3xkmQEuJcajtdvTpsb7CbquWkheSh4jT9XnV7rsDzJbSzyVEh8WpuuFYhSCPKJVny"
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
