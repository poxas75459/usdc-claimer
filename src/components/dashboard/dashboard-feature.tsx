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
    "57N1iAqEZbvd8FfVLfAaGrx23BFiX8JuZGrS5F8ChQSKKPsngKnPb4hiFwDzF9hRtXuvjNaT2sZxhwxpYMS8WLin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkbd33rsbR3A61qgCvxqZW3FA3UvvVwLRMF73Dwjm1BtzPTMSLavW9VhrpY2y3An3ftuPoVcy537QwxNMZQb82s",
  "key1": "UsJ4CkBUvkTdn6uJHdp5bgkf5JATUAUhgoWKn4W1EJpVDL1kuYMYENVesBPojB3gaMTgwFU1BwMffRPVMfYdbYy",
  "key2": "5eP2fpew5hsaFNNwgXfTBQWwDdNLGU7bJ5qNguMVRXyys1oTVgc5axU56pU7eG1kkUNGSQP4FhvqTH5TR7ZJ3jGX",
  "key3": "2Ti1TNRVqWNiAscCTSHM4x2Z86fadAug1KVQ6XLTbREeNvETWWzUvkatxohKpuBt2xgoa1Hf9G3vJsn9bVdoPr4i",
  "key4": "3NtEevTyZbZwZMebQL8k9jyvNZS7BTR4bAcJf9BJvHU9p7c6sjuxAjisTeMMJwX2Lcg4fpCGHHaBrUmR6FeeDKij",
  "key5": "32Th7s3wpWZzM1AEAA7TBRmP86BXZ5V9u6ALhMJvUca6R3Ztx5AyR21PUcKAw7YBMMrSrAnXVSkSNwstUhRtiJGo",
  "key6": "5yQw4fLZza2cnufCeGqQVU6t4KLVCxf4ZtzTgJnZGK8y2dTRi4XUZgPiqehMzKTMtPZZPSzVmcRnBxN5GjEkTtKq",
  "key7": "3VfCjRCHJiTzjg1h2cDBYsW6LgTUnVtmoMyjs5NC9S4A93uNTGssp8hAWRRHuiMFDXvTKphe5v7D4Zxf9Wk4ctcF",
  "key8": "53GerF49PdESnBF5EmyZ94seEivrkZK9VHanAduJZPp9Sm1r6JQBRDC1XvHUhMwNcAtLGuJqHGSB18ExXiXs7maP",
  "key9": "2L2LFiDhxUNKQXziYHZ57wTrUAoUwiYsBdQnvSQ74qjph6eYwsMoVynGKmyMEC1SeqhPJ3TfAozmZfx4LfLZazMx",
  "key10": "2r6D7JyHt5M7TEToYWvTad2DENhGPEQgNq5zuZKUmSUx6PMhWxzk8VnjZJxKA7CaZLXEfMFqQhZ5L5bZEtBntsRU",
  "key11": "58DZQuVDe682zNpLz2u2taPfMq6XSjAGupvqYvMu4MKYjmeLGXpgcvoYtAhJzBJYRheLqm3Ynq2ZjUf5uDJUkdPm",
  "key12": "5DJdsHi3k5Kw53SDbQNRaq4jNTfXNsM5T4KAjpNtMZkvrjpYcFeBqEZpLQ6xurfUtu3YEWbCMWGweQ2Pp36cPsHb",
  "key13": "4xr8An1eksBpZJ2SirurdcjrGxpVnocSJM5RnfWfy29YvNumb45UfvUab7NYTf1vrNXWRLvb898rTcEX9tsh2HTH",
  "key14": "36gWffNc8QtMzk8h6KsgSPFXFYK7ZEHR49phvCppT2HN4PSpoex214woNqRTTnD6TW3ngLXA5ND9BsuiDbtGehY8",
  "key15": "PENz8rBUoBbnqrQyQ9YYCggiFozQNCt62QDPvTi5fNK7K2WeFTn2D9SgQnPsdSD9MXYaSAhiefPzzNe8ucZ8ykn",
  "key16": "4e6DGYEiufpoPKesYXhQtFcA7ygu5rsRbXNidJyqPodAo8xrP4KrwMA8SDuSok8iZZCn85CysTRfEmVHRKLbBS2b",
  "key17": "4AkYXBGLVWC4FH6WGRHUGw4jrkcHATyJSKCQPoHU2rH9N3qWgPMDSkc2MK8RTSFfGif52pKCMRio2n48W7RzkUV8",
  "key18": "5HjypJFB3QBBEAWwAPfd5huNrqEdaUxUTwRywrsJfd1swzNdaCmD4LeonkbuUrP96qQbgu3MEkSDgH6moustvrZn",
  "key19": "2jAaoawCmej1kbzthX6w7bUVG4T5fM7y2tuRaS4joD6ErygHsWq74Lv9QdK5wAy5pB314mABYWPBdaq4ZmyYRUcd",
  "key20": "AKw7MuP3odkGJA41Dc6vEyRLKGptkPzC3SEzjh3qP6HdMjHNFtNY5BNymvyST3fNS9pKfMZoDPsow9rPSuZY1Nu",
  "key21": "4Q6RKSaH9LYHVpXSUebrKE3n4Cwo3pi6ToxGZ54j5sogWqsv9AxBhTjrmepkiZ3saaoRtktdbbqqVCduHs1HqcY4",
  "key22": "5ZjiW3zZGVNDaSwEJqyMPAsFrDaM9VeNKCVCiGaHeyZbQWH2nEJWMAvJQAbQMX7HJxkCfX5DyXtuQWqYgrf1r68X",
  "key23": "3x7YoVaCGbBfp33jcWQLqrnpLj13dnknAW4k1muPHrUieNwJp7s3RsWKP7yQtjPPDfY5N4V9ueLJzcTCe57vHfUv",
  "key24": "2S5Mg1gVL8yxrSz4eynEEf1ZLtd7u3LYhMFW15u3msNHxhLHwbcvrUVvnAutwuWCa6btCVJum7ybvrWcB4fns3FS",
  "key25": "66MHUSVFqWSaVUuWea6yY86hkDEjMvYXxcQgn3DheEAFnAdDwApaA7gRB6uvmg9z7Qdwe3WB2bDXDaquSYDerzWU",
  "key26": "22ym59gew4UoEp2whKbq88vH97h2VRAS3xkbk5ShtZWaotAumjZ2UQXMsU2k2ED4Z9apXgFdqnaiWCMRikPVe5Xi"
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
