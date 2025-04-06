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
    "3VVmaHk1WsW9c8nyUACfGhP28ueeRSyMH1ATCfJGVSeZy5mbngdCBpZBquAsFLCwR2vkMtsZ6hBMgUdQU7TpHXMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lfz9sgVuJAEoEHvDTmvnGiL9uvFnGVfAuePFAeyVeGgtHUL9GSkrG65wuSAXQx8gziNUoSWMdBRwxtf8FMH94dE",
  "key1": "33H14pAiZWucSkq7DHmpG3yXU23Cc4EkoaGAoMbpjPBCTZqTaLKwaNFWAJxVQgCfsU7ShNF6uiJ7a5fHhGyNgc6P",
  "key2": "bMms6LBCBCYE8e9DEwm42UHh2oRqRdVM5acZZFhfvceHc8iAWNBhqaK36EHvERfG4KhCsLaC576PCUDExzZS34R",
  "key3": "2MbQkZyCkjmsXmTXzbHiuy96Bxx5yy3J1PQYwntUAbhtcTJzheqtTETf86Lh6bMoaLVLjFowWdkV3VqZ1xsKawRy",
  "key4": "4NST6myrfMa7fM2nJmVdQXFVRAQcdWaUA4XCwUhccwv1394xVHr8Co5PhTKGHRxmt9P873fgE9ykVSduJEtF3aG",
  "key5": "2e4wxAHmbWNYRRoEYYupFFvSep4fSRg3xciWcLTKUQ8ePiNzyPFv2Q4obXJNa79eRcCL6CjwC2SG9BvSSmPv87Up",
  "key6": "5mZYLiFuHhUWJaRjGxAbiZZ6nT2Nr7bTBPN8qJNctPQLbLFXsAKrKfKkBH6whsAdL5DPU5rXd3iASXzxXVdaGo46",
  "key7": "4s8y4qmPCaWxE68Y4ijg8nmYrcAX2yvCpBmD1EbdvLNuUFg1ddd9cyS3heQ4eeLYnDrYzbru8QWSRp9kxNyb8U6J",
  "key8": "GigyrXLAwBcvXR16ctGxB2RfSfcJzrBtHg3s6j62Ta7g8TvKf4yFHHUD4DfLQC7hu7ksm3VGo71FhDDHWo73bh2",
  "key9": "2jKadAbkHefXs7fUytz6Ri9dm4hjTNPz5BzGLwi6ah5b5U9pmVgaE9mkZfd4NiCZd7wfuaWmQo5hDF1PPWXTLZSA",
  "key10": "3dmF4gFZuHJvC6Djan14H9uSw61nG3Y3PVn1ToQ7bKnMF8Am4wi3XwX39MMVG68d1CVjZdvZbkxnhGJXCnjtVNoG",
  "key11": "5bj8t5dy2ZgeqGbScW1FGeJA5dZEuBArBVoH4oaYhYNapDV4BaXYdb7RHhLGSeVMjrKSENKpDaQcF6yLiwrLYoRU",
  "key12": "2CHRLAxJYG2GNRWQ26BSHLQ7Q8DgxL5RCDNK5RTVdcXDg8Z7PhGzQ3B85cA5xbdAATCHmzDkwjUDwUSXTXiuV53w",
  "key13": "2arcpkBdFPjJeD9MyaV3byR7vMJJ7tQj8gBzdXwY1mYG1UmGGCES7ea3D6xfDs7TmCfEQkPy3KaYD7JoKYX2setG",
  "key14": "28mmicWbKpQztQSEeZSPeAxhaiodf7iBJ8mzxJhoEqbPBZqvaprKuLSbTL1M2LmAsaPhiBXwTPJVMCD7ZbrFxL1S",
  "key15": "4CYZyweJ5AzyzMV14Z2iDr85ZBiMYtJs6XqNvXJPyNwoYTaKocSVuivRT1yNqZDrddXGQNwtsZdk4GjCJDseUdrT",
  "key16": "we6HLAZyKPWckEgYMSexZLx95mvfKCN5s22MQLEg2j2E7bWuc9gwkhEjCcyq6hWw2uYVury2Rk45rArSFVGBuj7",
  "key17": "xKRq3LCkBbJ5tyjQqmXcy9Hvi8A9mr4kwMEGunsbLYNLGbotTo6WZjqNjQPHdEodhCRsNbcbWcBpLRqfa4EwUk1",
  "key18": "5Wgtaerg34sg2fX3z5Jgu7p3AmXtf9p1EYrQD8s8hJ5yFqYU6676ABFwkFVMsqmeqVLz1bmUidkFQWn4AgXV5hnS",
  "key19": "5Dm5jdFpnsvdsFaahUsmfk3jaKig5QU8iNiLLKTD1at5Z5cZ5aZD6SDctKKnXdBeEd98x7NS5Qom4EYStsmHdJgn",
  "key20": "5SDr2iwxpDges6J3wRUGt99mMxAcm582YUmAPFVbxz4faY45ThaWSApFN7iDTJhsNWQyFJgN96z3w7vCm7nyGVzX",
  "key21": "2ssmtMjQEarvCiz857RMRcAaS5fMXDUvgdE3VySaTWcG87CRZ6LwDZGU9uDCDuTEWDPFh5n9eGfLZDUPuehnuLrR",
  "key22": "3r3QokoVCA91Hd6X3grH8fJEYe4FNggNirnunWtZeGVX5Hfda6VNttdjLziqiQDS1LNGFLwkLr2WECQhssTKsBMG",
  "key23": "66akfPxwhdFKG3UPU3v58wW7EUdoUHKQHxui8kpezs438ydNW5cFanmK3SsqPHRwUEBXTPA5yaqkpZn5K4ukx3Kj",
  "key24": "22uata8K5YjT39CYUFPLNgt71Z6VqiFTpfQc6RTJyo6uBFdLmLPxjQ2hZeUdoWoAW5x35chivrd4HH5ckUT4k3W3",
  "key25": "KNqLcwE1xxotr86YuWEHie7q2vqtx84Do5PPWHWKd7js25h34nCHD3uuYbLFU5VVoPbTVRA5veG7CUZs6aaEb3B",
  "key26": "529wwc1rUEZNGomHSR7jH7kzqfUQyWDgYVuVGQ5KbEgiwQLyAJraQ3oK2LvAC7otmKMvK6pkWUZ8RuJrWRwvGXqX",
  "key27": "42FS3hsyHsthEWbb4tGBrhkHApQPasuFpw6kvdShp12Qiz8X8VVfneGExSbE6woAEfPmRjKL4YYRjup8D6fz4Roa",
  "key28": "od3kBwgvwkUBd8Yve5QZniCC4a7R3wrSXHJv1N8cFRJJb6yk41oQfteF3Z8PXnRu5sszJQA7Q3NAe4AaNCodt9j",
  "key29": "2LCobK3bqFvfU7PPtqigtVboq13LS4Fcp2u3UsbKWGCfM2rvr4SkSLDH7FC28EdQxTAoE763SUuR3oTydXy2LBoz",
  "key30": "5xQYd4cW6vqSgujW1QGhkgvrHwjbN26Gh34Apd3kJnN8P2BgkipQS772KmE26XR9V3414pkhvVzRMdVHNRextNeg",
  "key31": "5Av9xYihvVSC2hSrNqJ8BLjqsyTCEHGVdV9uMgdstJmaiXZiWEF7Sotawc5J5hzTSrhPs6ganY85hcpzvPohTriY",
  "key32": "544ttWASWFCspbf5keB3Y8VJ4fmEQtXchCMgJndCB8HweihaMqDcY8DCQ2gP7fDU2B2yW4nuaZwQAXxGtdwuCpXR",
  "key33": "4BVTeiLvhDoERn1eEVnLtXgowrJjbmAvE2aS9N7X1HNJ1UDwZCoPKGrs6Tbtc5674HxRVmGdFYw9ZX48BwAmyQTc"
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
