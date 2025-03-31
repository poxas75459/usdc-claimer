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
    "8yVTbeBtZncxtPWDYmcm1pQyP8hojZhqAPZ9FHP6uK1MVVFNZ5BV3EGn6fudxShbRiro1PhEjwkJFKyVe8R6kXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmVCyGRSf6kiks5PfbPXeufYPePen397DSUbRed1nHEuoAvmB2eJHTdcYsr9wjKbSDzC5rqMDus4NUKKm2ntWUP",
  "key1": "2L8uRDA332cj7N5CDZA89bu38Suxfjwdte5KkyoWtJG7Z1sR1KTGwbGLgquEZGt2gpTSDEfeSqpM2t5bepuKXjbh",
  "key2": "42gytLNVEqbNsLYwCG1xMuDJJfNfrSbP8eBv6TUzRSExjpm7vf9BaWV1QsA6soDTBdywbJxGogDTS3oLtr9EE3cX",
  "key3": "2mhQ1pmhCXWk7X1chexufEzxTb3gtpkr41nwjUPid3nXZQgaz2j5vmXxc4o5sUZh9oUBDs3TgM31j1T9DvhRJBDi",
  "key4": "URS9S5VRqF7w36N3NtdajEyn2ZR982oPGCeeGyJMw1J4ferqcCG7hi4grfw74NB35gMKgPHrzV39VmgBpmSgA3H",
  "key5": "5d3uh3YGHz4m7hseQjNVCrMtsLuyrvE1Qwxcr4yknw1Eoky3xxj2idRWBP4TdF4KtFrTJRnScaqHmFKrqKGdzdce",
  "key6": "316jGdbbezV3VhAGKiNFZgRFjL92tHPXeMcKFKXNHhRF7zZw8Vdrq2QDvj7NaCRTByP18q1Q4JSnqMsMSiqjuwcp",
  "key7": "48eo9AjLDkuSEXf9jcJWNxsAQfyBdD5WfALKhRBLqBjw5gLq8fQDXqjKzvfzMXZUXGorCMWwx9UarsDgXwcaAWTQ",
  "key8": "28Riu6h7VgxxBYUyhMFQYtBmrzPzdcxHZPAsF8nB3imRtuqYyWLpPucoTjFP9o4r79srLpf64Updh5wpLSkDYM4x",
  "key9": "3MVqJjHj2iMoRhzXjnYyrGm2KwVhfdpYiyGNWyhuHC3phyaXmEH7uKQgEnHQrS2kGnM5PbiTfgNkTafaacmH8Bg4",
  "key10": "2jk7HvyXpJ37MRNJr1YPWBqNd2atJXSmh7oXdNaxe5Urof2XTHgWi3hxqN6ThEYtUnWQidbjte9PbaWHe1t19YqZ",
  "key11": "BD9BjLvi4AtKWxa3fL251goie8s34LCmjxjobU7Wm3VRACyDVkio5G9r7RQUWJVLywEFd9az22KzbSWpY9bz8mz",
  "key12": "2D6KFWGjUNcwEUr4XqDmJCtcPveZg3uXdECKPKTKR3D4vm2vy1eCNqQfN1TSbFpw1pxPVeqzx7JGRaNeVwm98Y67",
  "key13": "36efMccm6PysrbrxQYncqeazvmkLSb8EiwYHmMrU3GFGaXKBmZLsxpiJjrNzS2Whq1vE4pABavUoFAfoagTZApVr",
  "key14": "5pLL3AEi9no9Kdhfy2EviFAVUTxcNr2sCD62pFTbQZ4yur5Q6DGPuz5dJ13M7R9WMMkSjGzrqvhSCfR1NyYhHoxJ",
  "key15": "ZbbHf3kuFMWUCfVU6d4ajDX6F3YHD5Z6LbdgYgTSVmeaAUMhEyxNcbtSSbmiiHTkggdX9QumVj834E5Ev6NwLXF",
  "key16": "4gP9j5acT6r3S2ezmk4GP244CJMcf4WC9od5BUYHE3VfwuG5myFGZgdGB3gNehM59nkaQ9ceWKtxVU4i3aCUzLV8",
  "key17": "5gFLLNK2jtNmA5pQd5vULyEnu6uUyUuYeRgovgLKg7pFwUUE4Mh7j2G9V3Q7beGN9WtRFFaHc8xyUpBcLdQ6VKtB",
  "key18": "4LBGz8E2jfTCNYRb6WB1VtymMW22mZZEkm6H6eChPPdbwCv7pBx7wgUUKHgVMrcfByX8w9dfciEpJPHcazR3ZcVb",
  "key19": "3QdH2rbP8W1TfbuxL4PD43Xm5xqaU4rPXohGEjDUbjdpdQfh3d9j9iGVXxfxFoMx4iaceMp6S6Bw8ToyEpHNZPqu",
  "key20": "3XZmr1iS3YpHtXQ2DBAoxeMfs8zvv7yUajHtYiQTQhRZFofis9ss48e9kVhUy3gHc9wqpGKfx4bPBrhHG3CRu8dW",
  "key21": "3K8zT8M5vDK7nqCaHQjQ4u7xsFkvA83BDwPvbG4RSnKCFpZkuXXXmmqztYwkSg67y7pi8mjQwChYsvnpcsQ3vcNo",
  "key22": "2ycympPv6L7D41hs8h3uZDv1jfh5Jo7eGbPB6BxMzqU5U5yHuqHGGPEgteX9iyDJxtYMteVYZQCCfaRSw2rMH4at",
  "key23": "2SN575nV5Kgryqakm5v2SyXMh8A8444uVJep9DEWX4JukkbAQk6agWen4LbmVxKUtWeSav8nMndcStnPHcciyK29",
  "key24": "4yr6wFLZv2B8Q53pyUmnG7ZeZmF3ohXxDPeFgG5AGAXh5o5CJkP2JyBKVWY6HauJu1oHhTHyxSZs9XCTQRDuz7go",
  "key25": "2fLYi5Jmtai11nFPoKBsaRjCvDk3FrMD9zsgiHRNSM3TtVMxKNN5r9PMQiw7VWWawbnfRBtRppbyqDnMUXsJfDDZ",
  "key26": "5wCSx9tQ2adbKTMc4YhiKExgkUr4mgyT6HoVxo8HM4ir8GVWJ1PTfV6iaPD8g6MS7o98cVAC5Kyfp2AJfNjUiKmo",
  "key27": "4dNX1w8PVtdHwmiuJRcm5mTYRuQdfPMkbGTEBbzgojS2udEKKySqzz4Wd8dXkGyJxxxwaSCrppKzve9rQrbZf1DN",
  "key28": "YzR6YRBxtuKQvWpeHj7m9zDMTQPgyBu14nBq3RtsMqsqTWfhg4qse3B5JrfJHcUuvYduJTQsn9QsN9ZpHtVGgpu",
  "key29": "ND2bfeHjwsFjbZyzXCNgWfuLSwCwkJDAaiVNXUpo4y2yCEdbfNnu9YCZjiuu6vk671SBjJQfvSn7P14GobsnVgm",
  "key30": "s4aCUacUq9x5j5biTsZBY5LqiCcB9dazrbVBS7qrua5HWbWBpFX8ToAfTTZNf4YAUW5L1936hJM91pqHarA7Wv9",
  "key31": "oGAEVUv7msB6ZtgCyi3kj3SMnmkT3oAU2EYAQd8f4tHzYrvCcgA8NQAtQrNymb8xswwd4Lxc6xBh1fWdPPF3boC",
  "key32": "7Jr5pP4bnBz82P42kdAx3Qp4N3DmDTVkEqiHNWtQg8XUY2QoLoVU3fbjoFXRH1m5frnSmzA8tkEHRGMfyWS5kNn",
  "key33": "5DN8aRuRN6jJxdbjFnn5woZ3MjDbW4sdSBN4EoamdBTAPsEyZ8QQxbWcYQweP5S4xbX56jy6mit8rncy9zRP8wge",
  "key34": "42gLBfKt5PEgKxoToLb5m9Ve5FcJC14FogYHJU7aV9k81mwqhGQAmSHVPtCAZzRpPGCAHfSW7VmRZmZ3At5H6HBX"
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
