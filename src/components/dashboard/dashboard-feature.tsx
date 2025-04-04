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
    "4vab4ErVgPaYGgvUcAGLAbMB8XpQRk8ungX7TVc8Vffjr1UHzSY5UgEDpfb3maL92SUsr483gvaQtxjHS1Gdnd9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVpURXJzWH9QxbTbhmjj6yuGj3A5HWZh3tXtCyopUbDa3eupGupwBb8KxgA8XPPBvLSmtabsGwcf8cDuEj9y6wv",
  "key1": "3TmBUSpfdnFGSbYQ1RPYNXq32vBHjV3i4ocWV8Ywjn2pcmBzJbEk8GZYTPCk931ATPSW2Z4hgmvDdeX3aeT5MEcq",
  "key2": "3UazRs9ztkuqbpMqV2UXhdvXC2y3FzQdXVfQ5cTwnvq7A7n75MxCzosEULUhsiKtTHRtQyNTuWXqQJkp8nt31dtd",
  "key3": "58SRQw9YkKribat3rTQz5MGgkkLoKJwmiNwgHrEVY58KqDPPFhS11jKJPttEiEYonf6LkDapNDh6ApqFVH27rM2Q",
  "key4": "3rFna16kNLfPJnK7Yqme5Ft7vBaTNoxBkYHjpPJ7JTer1uGBNtnuwSW6q5NTGpqKCkU7dFVZk2mCauycPJxFReGX",
  "key5": "CAAbUVhBti2fJq8AiWuT1GSGoJgG6xi6EoajctWJrESyB4mpW1sNe8P1DkGzTD6Mfd15a2pdhAJHgf8Rr5oUdyU",
  "key6": "HZrEZdhUZ3HWF3waCmF7PG3uZrnbdbhh3AoXTPveitAi58LhdLUXaV4iWSYgkPb7nVHXvWwCPA2sqdaeaVANFD8",
  "key7": "2vgFhe6guLYNvDNAdDAZ1trDEZ2AA9RP6zJyMrFpRbF6WdVy5hzJyzNboS9aneCVroUJ1jxDve7TNrJs62zQSZUg",
  "key8": "2hXjJhojn6JBnbb46qxjCN1rdEQNfXSTeJwAC18ybQZuvkAAi7TFjbPViSjtsysKrXjoPnDWBweEJ5C7iXXaJRp6",
  "key9": "4H7US4TVQDozYM4jnw7Veyu6Q5c3BV2nEHED224CVCRbYGAda1eofr17BqTsPVGMmhxFeqUpHP2vva7jeDauC4LJ",
  "key10": "ZzSkZqpTRiwjFYaynhT6k11DX2GLQLLzNvG29Cms7jjJZkmAZzyki9hv4bNoYt7TZULKVkLijRSQvzHQ2pdEoH7",
  "key11": "252YYcgQUpGmK7VWDv3WSNf7PJpda7Xf9y3MoDhEf21VnBfMR5HBQmMYQD1MC26qMDHqpSZWWwbqmq3pYKEjpTmr",
  "key12": "59raoE3XzHRbTN3H52EiA1Na7BC5YDVsUab9haiLa3D9LHv5FYF38DnKWJTKk3R7mdowj3Cd9dHcQ1Cmfim9RHQP",
  "key13": "3ptT2p4hqEqqr3ouxggFrv1gngYxrvevzEuBLJD4AqxdLfT9tQ888kmrAnA6qbauNo8YnfWSAkeZdihU7JY1Ljn",
  "key14": "4b3omcofkGTSjRpENMYztcR3WJ1t3Un67RNySMbZQ2SwcUrgEs9mWFXYGRnZfSJTqh69ePrXDHhXNrYoMzXAe54m",
  "key15": "2s2YoozHyrwwx1RSX8ZpLmeAoBqzavq1UbV4DNStddo924n9cp8did6oFFqrovzyQQWr4uZiZXLb3pmZLho3GieN",
  "key16": "3ZmBffND7QHkmeyQyhDXKNTWYmq7QU14V5tgbRDopG2yGVtqoirFJrhTrRmiFvPgJNefrrKssLWP7JumGs2WV1r1",
  "key17": "4Y9qErkFhvM2G1SXN1tgDktP9sDKSUsX6bguV7oHGrkh7fF5TJHBbtRpGWwv8a25gwC5QqhdDe4c8uSmiX4RdYg5",
  "key18": "39KctTJ6MF4ZPZU8QubURYM6EF2L93MgdcZ9gVrbbJTy57DJXc4SfGTYyrcxHqeWoPGCoABd79G3tSssQnLqCueh",
  "key19": "2oeYnsGW5YFk18fyPg1v7DPDG1Xj3SDea4DdyfX3AnJX1vg4tuj76GLyXm7BiFEbxehPp98ERa4id3kTDupYt8rH",
  "key20": "5Q8xt69LomugAgkp68bnSe9DMvWMoBtrfSf3nGBZRrwwKy3rVG9uqnH3skYy78omZ4TS8dcGX5YYqpUNTH9AFKSZ",
  "key21": "47p9PE854Szb7GYyrzQXQUCAfv9czFs8z2XiNd5MRgqATz2MbVduAm7jqrfDGoGpLKbLxs6XNQdgq6nyT9Htwi4T",
  "key22": "2YWJTxVXfU68dmWJ4eiHWMkpzHciwsiYRL94WodpjXEpGm4SUHdMy6uCW8Qkr2MarPk8GPC8CtrPmpnhFi1gEKQ3",
  "key23": "45yDgeg6RH9G2Khp69nM3CzkhkLGrauvNrikPc2nQQtpSMYJMAen1nvG45pjtTEBYfvpbG1D29drF1QjQKKisPLy",
  "key24": "2S7Hj3fAwHq6M5H5JsPnYUtkSQqKNZB2yiNUYU8buZgHdLvkvm4a886DwRFDrPu9mnXQp9DaoYv8BSN37keZvePC",
  "key25": "5GVPP5XB2VQEieFFn36SNcB9eZ9W7MnJ1zNEgzfpVMVdPw8kgfjsrtKMgAuFrJzuqN1ns2xVB9qou2tpGyXbKuSZ"
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
