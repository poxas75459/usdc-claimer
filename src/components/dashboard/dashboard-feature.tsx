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
    "33Po9AtGiavBDxn1dTamMqZpRuVBTxrXhWqpthFbvwpGmjmyX9y1Jk7T2upkzCdWgs8JBYH7NeXNYkr7ux2jgykw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ajv6KzLyDYQjzcqCG3TZS3fJgh3R2nYCWi2MnRZ7hN48seo1X2i1FUAxxkYNh5UzjzRfigsmpUcMiuDU9LZf1ba",
  "key1": "3sLbnM5RjrXA218BKE9wXoiTDgyPksRiXVSpy2BzPV7dwzQms9UzWPp3gfS1PMDv2UcbLnGBDXb5dRfcpY3PPkkM",
  "key2": "56qbaSZp4dZp7VZhFJwE5gzKmtSqBQxAwB9zdy4vvePj7Hr6w9wZrW7jw5czSrMh5hNhrBxZ4S5zSddobRixCct",
  "key3": "BJZGYfowaLV5hZEWZdga4hCc6N8YjSitndQ1LURjBUAWqvpV5AAnB2Jo9z4ovMTRADKfXKmsG7LRYMozsE6hJKB",
  "key4": "63a52kTHiVRJPjKdAThWgvunkNUcAKvv5EkJEzaKMEDCH7Hc1PQzUkSLrFa72HShq5Vf7fRT5jD53vvwoj9jJu44",
  "key5": "LZ8yoLPnBAijECCG3fHaUL9cqcMHtDXW6czpwgPYKjPfS9Q8LkD9ntaSxtASW8anysjEsBLENN2X3wmF1JuLUKS",
  "key6": "53iwyJQaSFrr1b5GDrcq2xKf7jYZqAc1vgmGKEdtyb4MUfoHndrASJnnYcZTJf1sc2Yh7Za4SUd6qUVHfbmPDw86",
  "key7": "43GG1beZ1uKUM5q4spBpwofr3eTugfkcxCvDfLfkPUKqKgj2P9af5zhHh61KpiDTabnvHzCijVVWYQdz24KLUFre",
  "key8": "kSHArvwQaY17mUZX3tRjL6X5UoL2S5UbcUMhSuuuB5oP1aM5JWNFqDvYdhDQwkLb7RkN4PKF8rpwj1wdfcZv12s",
  "key9": "37hvuaiNUb48znwGtog4uc9RSfsiomhxVRDqFkz1YkMpYHuWgU9RQvjw8cptFWk1XHAnUizTs1KfjNLxKWQ2axQQ",
  "key10": "3kohASuELfoRVJ57BJNHD9gbUWpNK62YYamLVf1t2xVmSNQd5rnR8nf8dQv9cduLXcCLsYJGEZviubFMcjWAZqDh",
  "key11": "3kftMdJ8HepqkrW3dH3QhWQP4kmziTrSavAWdDo8nUPVpzm1NKK3sTFH5X3Q1crZyRjAXt2pjRHJvqzbXbVZeK8T",
  "key12": "5ZgQreoBGunCEnpXKsspc8j5d2RjJP3xjwsmoXRNTMFjWZPjCZjJ7oRBEzH5N11Xd3rke724w3CfQyHSKpcTKX3z",
  "key13": "4vnbq7S2ihTkkUmVX4SThq4VrXsJ78qd7vSRNxb68G9G1vHWdcoNQCuS1gRuSipfHvU335A8B9i4LnMog1fPkwd",
  "key14": "23wbv7R5X3uR2vM83G1yXmkbdqPA8HLcqognFVnYpDbBRX1dsvJwAHXFwaudPMgXc18sqckRmGkA28BMdcEm5KGv",
  "key15": "5RzxHa3LX8yFNWKX9wb2P1tdPbXvMHfzwgdG6kNpg1HbZRnFUdmUaRpr35J2hZqB33kfXBFqRvF9nn8ThBiiwVjj",
  "key16": "5YcfCv9DzXvsGdNetA4oqHsDGdLUChcuPnyjWMhnQFJuN57cSLN9cykzajRXoHPK99phDHRS8GffLb6Mu37PTbby",
  "key17": "2yAFy3q4HCuuzQ8d4cbHPjuSVCqpsdSPGrt22Fr4N2egV97sGZQ97oexMskDSXvCMJ4ceDh2xYFEtjqz5huCQpUR",
  "key18": "3L48PJqAq1EfbUQVzWS8gXUZtH1FrmYd27zAk5ziVdMk8jPUTiV7cu4zZ3z5fJoJXYbNU3KRegLUKDZsKELKY3k1",
  "key19": "5GkdBuUAiQbrMarpeYQuD9DfHWUvorWAXnAtSgzuSmxCxisDLVuKa3x8PknArHxgMEqwm2zmnVveXrBMtUH98vd9",
  "key20": "3GgZcBJc61dAHkZYjQXgLiGa9imXdEPNR7TByzs8ZPt5z6ii7p13hXFKeLAxq9ZLpivemB9M2hW78iaAShhr63LE",
  "key21": "3cNPAeEHjtkDWwrEWJY8YP4Tu5s47FUA8L4m48aXyscGevSj68D2pehzweg67zS32qVXTJtcW9YMVYRULx4ay1fN",
  "key22": "4WcMperjgxrTgF3qJGdvhjduEsnnAbPaYRnE44MZB6aJNNU1bnMYod5NTBV8Zobw8QZDA4NDTN7TJh1ToiQkh1cc",
  "key23": "4fACfyUinyFxc6GNVDJmghgSM1nB11ZytJfJf6dBreBfcRNLsYi4YHXXaCbYYS5gqgdsGhoQ6YPufZsDLSr1Kwiz",
  "key24": "25NxSe8qze3YafPAL7VEdsNfp44S4Zrsqaa3FJWKzDeSAoSZELN6Y2BxgHN7sQaHPCCQp7NeMkC5ZAyct9AYao9a"
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
