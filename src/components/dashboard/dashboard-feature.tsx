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
    "62rVdq6FhvymXCkstH4mmAVL49k5nKW8sMN1ByK9svgW791XeLBj4x89btTZiF72Jo9U5ovpEzQNWBcvbSH1641P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79VNPNV21Ywj5ZqhxbKPGUy6d6hEc1HWeYpF3BFMoSb3dMJ7vzP3BQkMw271Uku7qaaYPik1cx2B5ZKH4ucAVcj",
  "key1": "g5KTy1cQxsEhfLcHqLSix7aHiXaT49K6BHcXjVskWVKmEdS7hdpAYUT7CRGgRQCNhiK8e92US693o9t6p8e5oNH",
  "key2": "wG22xcacifvNb8Vj7diW9fHghprYLJz2TBEbWgP9FA2EU7SRiy1YWwp4eDRkVnA7xBQsr2RebFkbRZWgG9J8PFq",
  "key3": "vNRora8VRb5kMcWu66ikWZwT67Rke58k4VajrBZzAZWDnfygbVZxqizbsHobFVVX44iivBRSejfi9EsdssfxzQ5",
  "key4": "2p14q25ctoy4tdGrhBZCNA64moy7D6JshGwbwcvksZz3zPU6s8BUzocHHFeNgXVzVu25xD6e2Mjx69yBqA2ZhW85",
  "key5": "pNGugoRgKz8WDgc4jXj8QpANwGgpzqpA9MiRH39ZogUz4AGxDoDLPEMRQdsGXTvfqBH36rGevJ48bTCkoPtJ2yP",
  "key6": "DDPHLX8Wp5hmzfykSvgwhy6imKSZaca2HSzB2Mwkg4eXKGZ6UdCT87qodxFbNY1onrnTUVJdxiDPr7uko8uBCnP",
  "key7": "4x85fnxHiZqTw38PhRfMwYoyZqoEomVwNxvnVTYXp148Y9Vp7DP11VJtHmdGwPKcSVNALma7LDpWBxnXaEU81qm6",
  "key8": "cLyWgUXdaRjS6w9UDS7AFHw6d3kFSpbBstj4FjPGDBLDQQQigYoRcnnfZgxqLtcRQPrWqYPWG8xJM6sZCAeYfTq",
  "key9": "67ANWLQQyxEGcuGfqg8ovLh2LsQ7pCkqxcSwUQnTDMuMNouqVquzjpuuRWzhZ68WKM7v2mmRwRAJb5f826FAwsfg",
  "key10": "2VuswdUksMqChiqP3QtTwmzNa66QHtXipibh8rwewRXsJuCwQf8bWePS54WDMtW1xa8GHqhKEVcxkaSX23qksWKw",
  "key11": "2hL5sVfCBpYypquPRk64CrPTDc9iHyG4SmCmedC3nfmuvxuaSp2ukJgFmMHoGpnsu5eXKFxkfogUxszvNBsceD4J",
  "key12": "3xDNajfKbSRUyGbstLNr5RscrhqzXUo7oMNR8FKvPiCN8cyREJ1ZuBbiLJooNC2vKgBWHK2vpygyfJgbmbeBfki1",
  "key13": "5bzSXDyqM8UkSU1xEwCqoHNncKUDYUmeKiodtrj3MqzdGYVhM31eFyB8qAgiv8GSfRisepKQyueGBMvU8wkEJApg",
  "key14": "5pSLNTarJpjwscdBsRBV5gbG7HmeyuxHPQBGY4PBH4oJUJwB9hqkDArQpEpQPZ64KgeQknKv61Pdj3aeW5WWoE1s",
  "key15": "5VBBVhmm8gysX6Xgbh9axNDuZt9XEkrDPz5s4op1vXvhureJdg1KPQg9FfvUf8kKjSa6GXjw7RR9j68F6H98M9fd",
  "key16": "3UhZtw8QHDri16psiTGLU3q5b9ZBsTQKydAUZGXYXyZ47sTpN6DNZeAHEnJCWfD2GtJRvFDKmbactXUwQDSppHi6",
  "key17": "4Rx1eJNURdZ6dkG3A6nPebgLamv1j3mrkxHb3iKFkJLTc977g52zTPwL6BtfdfeAUbHWmEEJozkDEbpfmbsm7qto",
  "key18": "3uHxctNqd934ruwhuQxj3BDvHLvybA59nz6LFSnmPGa14PKz8x1YWUSEfzRYa2ZEP181jwoKUfhtx8581THShkfW",
  "key19": "s7bAB5LV8NnLMnvHh88KCXBUEPd1Nh5cA5mh1V9Tmut61SsY4KiSESHdFX8B3NcUJxxz5jbRUfzSz1wZewc42qy",
  "key20": "aZkAwvFeyMZ2iqRevV5zh4rp9Ln5mTAWio98jKMRz6d3UKpti3oL8AhaTAb9EecNWb2JdeAgcACUz8PhkTna1mz",
  "key21": "xFzEPPakFg63bsLKyX52idmu73Zz6ZdHHPeTVSXR11YDZseNipUT3itkTQG8hB1EhqJbTtwpoWrJkGKJjMz3v33",
  "key22": "5B7kbwEu9x7YdHLt7oP6GbnaVcG2LZrZ3kbr7G8gY1AgKxLGn4q1zTLX1y4z5kBJJ2o36UBFV6Sbfdfv54BHxAaM",
  "key23": "4fSaxnzVFFmoJvNbVThPowfy8pm2v4j5y9GnEhaSeNS79qMr1aQdxgyViYu6KPTcR613Pa32Y2ayLHdu5VLhcJAe",
  "key24": "3CDyqhVD4xFpToUC3evgCBUrHGDLur2dSrn36fcUuWqFsU3y1VV87VanYNUkGBP7GFwriRNzZJbANKiRa8wqu2se",
  "key25": "3uMvBhBUmHWZJCjg7418aER3DdnKFDU8NM4bje8vhA5Dyq2k3x9wUrSCaDoN6UoQFC1Ar4BfyXtUMLTDyrvFWaRa",
  "key26": "3jLDPxMtGPyobJxZ1LKVwtobCTm6gxDAfNw17rYencURB1GWEtoUkhbKvkNUQPBtc8QmSHLpHRJrZX25nf19fCBe",
  "key27": "3xJa1f7hoxtxKUkr9gxkLQwGXtnwETWW5qwXb9pur8p77ghLPcAHAkwwSC7XC1JXRghhiLL8HteiCDXm1SssC16v",
  "key28": "4wqk8zxyEU2yK9JcLvn3pyfUCqcEC7Ww7Tqp2Af9udrL4o8p4GnKR6A5JGAyHbnPCaWTPQjw3AAbqvQV8QtjH7d2"
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
