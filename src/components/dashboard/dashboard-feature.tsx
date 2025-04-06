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
    "d4CfnFkEcZgrE7Azn4h5SEi7w97gZUzAKDHRPAhb7ovxkN3DUtaZmoREw1vAsyuWonFQJWYJyW8UEoaoDFdjoNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rjQPMvESoTzUGNUe4CRCVh8Cxq1W7kaixBLKr13vkW2tsecFnBrpmqQxaeCy6cPaKhiRkw4j93gkR2qvG8sPLQB",
  "key1": "39QSXnx7KpdLLR8UbxJwL6G1DWo6HX8Sd1bMUFV7dSRRs2BxgeAabLSHKh8GiDhqMpQn1wVpxMibcbWrLmicLSBy",
  "key2": "5xs1AFv8um6qVDPKhiyYDgjgjQNCHBcqweJ1aMyDMveXJvvErbZKEs1nebUSt6oSm9JTHoJBdw1XLkXy4RizXjx9",
  "key3": "4fGcSjtUDed345Ps9UczkoDW44EnW5zR4JZjSVPbirunDj7e7eLeiXuSLAhMmj3vrX6Tqg5ehuu4TzpoFVgXVvkq",
  "key4": "25UaZcFZiwtnG8DAcSs3bhpdzRwEvqPo3i6F3SNyN7Wu6xZFTP1DYuVWahQ4iPe9NLaZLuwK8J9FsXmBe7RFiDay",
  "key5": "5RdZ78ptTFw4wNaGk4zS6BJ4R1WmkZ7j7uhsaQsNrzWbw22tFvt9FtuCoirGpXVp4ADAyGbCM8512xBMUy8brePQ",
  "key6": "3TeRgnptbtcMkUbZK8xpbmigLb9EkDNWZ56gdp3m6yTKtk61auLiaHeQuy1dygC683fpT4MVqgi7kLpQhtnADzCX",
  "key7": "uqpgVi2cTfX2XPtDmBUNUSBuJhqtEbgjtiNeTw8GwfdnVgbk7AbC3Lqg2KkXHNzZeHBqyRg7AasKsYM2nhmW9Tj",
  "key8": "3EPexmvfNrJDpzmQU9RiZiorFKShRefRaBxeY7aSzhpV1yjEmWucd7gzp7VxU6KN9jC6vafNtrVcMnBPLRT3BtEm",
  "key9": "3K7LWxvzbUTPCCUebybGSQ3nXRsbE8VTq1fQGf32LYayXfZidXx9xaJFktBiJHHwjsbsgcPTFzmWWa5GWbcvSJA3",
  "key10": "2GaTtJLnoR6jr3xArbYD9Veavj2oSNbdfSeiiGU88hV1hKMd98sRHaNmoenuVquT9idQGtzmrPVxji5FWTTXEofi",
  "key11": "4hH82KFnV9VaTiexihMU5HTwE6Y2FUWgjDH1xu8X3752syV6Nb37ANXDwDPAjB9conQ4YoaGbSQhNVe4Hart2CF5",
  "key12": "YtyZpmfKDZ237WF9zwvHmb82c4DQksgNff2YB9SosCiXg8xGwi7dcgtkUpKVG71PjVMtZLv8b1C6boqy6HixBvJ",
  "key13": "2FCpVrujynK1QAC73CWUnYPwt8No25TcbSb7KXUJcAjWrJPZBfFQCRC4dcErLLLVDYspazPiRDXmtAG2yAi8bW5m",
  "key14": "4b6yxeoXF7chUYrBC5RFb2hDEviEW1G8AjwJqSsbxHE6XYYWo6AxEWibfLw6syK48pTcvVa7nZmeuQwFVf1aVDBK",
  "key15": "5PRyjRicL9iz58KovMNUgaChvRGbcpe8YvL7ufK7REo8hiRphw2EsznRJ81VjhQ247FmNZYZhV1YHTXQPjpg7iWc",
  "key16": "5AJmtUg4ojc7X1hs7W3adzcj4o2WoLARPxijXkqeUDofxhdbZQpYHkcZ1YCr7j6Yx2aLX6GZhMg3yHSXBjVz7qoJ",
  "key17": "GfVnC6QWRFQBuZs1SUx9Pb9ntU3p9HSZ3U9QbjNZHiJRGfpenLeqHYvDf5fUWrSs9phghxHw1b5mfQEME1aDhwp",
  "key18": "53XRWUaQcgCJ2pCZR9VfSFaHTQ81p6xZPrnFTAqbNruCLHFzyjEb1ZWaQ1MWxDQv5edyW8rnD4RSh9ZQCLgmepaL",
  "key19": "Zuc84L5ZEDVZHasRpwuuTRH8Uj2TsW5JsXR46emGe5dnB6pyuX4e6NZ8GWVSSHhXfUvqdZR5BkvEtZV1hhKTVUY",
  "key20": "22hqnKLWohJ61YJsGma1ueKx6eowPQuaabnfWPHwFyCf1oYzZECS5srH23QbbUTuCyAsmiam5Kn99Q8fvKhQvfUV",
  "key21": "2Kp9oGMEKDhJRFZFhdmLDRDthrsKHS3KdpwPj7us4RUqay66VogWby9EhAXnF5pG6aoWbQZeKyo41vzumoqRbo5y",
  "key22": "3VqnprkDpNPaZKxjWyRJRCpMVSFR6mRsqqZVrBRdmDCt9xyQwYDRPdcbp6fTkN2LPAzUQkPQS1S9k16BP6AzuM59",
  "key23": "38AwBthJ277CRUkWRkHxZUEY6acVCURF3nK5zrWLqrTa4Fb4MDPQZHCuPuDzUpvFGAfeXZmy8RMTXas6kfkUUR42",
  "key24": "21fgmXETpnqtvEuuvCR3QfA57jWw9L3BqJTVmZhh6B7GbJwY1eJyi5p8Ya2atUJcsUJnQ4T2FaGgioHEcvTFxu7Y",
  "key25": "5zSm6eP5BtyjDjGLLQs6heFajaf2m4AeJsYNLvtcJzuAFAu6dMNNHjZNcp6gmBG4HywSvJ3xbSQY7niCdF15zvLE",
  "key26": "4nxoDNvh1EmfJ6DS8FdwRW8LZwUQVf6QUChPh8KmNUb6KPZhmRNZKHBcbDowzcBmaHUxhg3D7KMzbGJQ43jcvwVn"
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
