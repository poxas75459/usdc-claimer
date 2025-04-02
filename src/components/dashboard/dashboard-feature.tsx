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
    "5AD4ZbTkGk3HWzM8sdWw5fiVarwEBkaK9gPcXBUjU58QxD9gGDyaLeZzf9WMmpCGYwJSqXaaqqa3y5JNMhue6uTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAVAuvVTs6Tq7Mr5yfLPDMQGXgkaWvSSbfF5xMC3hSiipUMaDhuyfqpk7AbfGnuuGSfd46ADTHajPUkth8GjUBB",
  "key1": "FZDNKdu9eBKfUiefxmm37ZMjH7cjm5Fq9MT1nAK9hwcZACTGHqP6Vfp9Sm3Hw9B3Dz2fwvXdSX9GME4e1edE1J9",
  "key2": "5tfHwguy7hcGW3fxErvS9vCDASn3uFXjzWam3tn5kTv6ogsE2dd5YKTS4fkKKqH9EAFZFEfmwDRNtVUsFjLwPB46",
  "key3": "8fTPBshQMoTjB39B7SQowcmvjBoabESvP7WwUhRgzN2aPLrcAgQ7wiMcCnKPdK2hhfJ1pFKqA6jp4PsGfu7yvzp",
  "key4": "4j7GQETcMRSMhzTkwfmX99dYHzTLKRThW63F7TsaQANeSy7zPMmvCwh7tnKnqZgDfjoU6UVX7LMGjgVHfhhUWkKc",
  "key5": "2DL6uyDv7dvewW6ZYjYo2YxjqifWxFbiWgCyPV8o86iL2fV3FDBJvvi39sbNCCY6VhHiZ3Ua7mvLugPYZWEvhfdr",
  "key6": "LzGaAM4dstAut3UZd19PnFk1Lswaja9JAm7gjND6R5gCKFF8AZPERZcUwHfzJxrP6mQwV1JcWGzVQ65gQtcBvYq",
  "key7": "665N8KGwZh9ry1tETuu7QmsoVAAKavKuNfuUKbJvFoZkjzZsXzCm5UBfFnhUZar4ur2pXrZbxGCUcJUtiizPPjdm",
  "key8": "4oQMsrgkYRkUBSs91gksCdDBD7CcXGoDwqsB6aVhQswTBSHyBYmM7Sa6hEHfUvHa6SYCwg24Wr8SgNdT3rzP8DUU",
  "key9": "2A6pD8njUEkT4hB4cJMjTwvSKDdz8spYdAyNmAVKmU9pxCvxNq439aBV7JPUShVedS6erkeCez3ZcdxMSdh1Vuod",
  "key10": "21eXf23hiesgiEmcDhXvQiHsTG2uC27iD4juA1LaDn86Hy1Ua4miTQDF2yS3kHDkH7Y4fKKF6z3ETDiyVR8yTDxD",
  "key11": "2Lwi9hEGQbSUMvy4kfxgkBpWhQzw8ofZS79tGQADJRg81cEgWCJU1vkh4xPPeeQwuLu5gaeS11uQuJS6pDqXYSk6",
  "key12": "45Yqz1FUgrQjYW6fSYvNWGde9VwgeayPsbv8dWZBx17YYgKp7jcCTmwhE7mEf1a1cRJaYUfFetbPmz4kCRQu6jBT",
  "key13": "5bfBFDZqdwjoFYAVwZWdMvYnbnYb6DJndRW4Z8s2kP4uedS5xi7sUhLZmLnRLRjv9iDXiMxdPqze2s1nXe56xmPL",
  "key14": "47epSBrPaiLNgafcQvkbGqLPD2tqvsiYQVEep8Bxsgjz73jwvX44hbWjNPubYqDdtiWSyWdd6ABAV9ZWu7CtaXAP",
  "key15": "uSEfnVDMxRvN7xdQqZCmPCeV2Y3aPCDMvPTUSSrsRbkeTR7URB1wXKAWhU6H2tZwtUqExJt773M4RybQyn6xC7p",
  "key16": "ZWSsubeKMjig2Es6Rpw7Rc9rfQBK7dKfFzT7P8tFVy2acQykNoe68j1mhHc5XePXEpNQ9UjMicAwRDz1VtsQvFG",
  "key17": "3zQdfnYehfuVkuYW7jA7ywmbNptKN71MhcJYQLWXvXou8EBi4dn9Py2rdFmYyZZBcGsnBH9PSR859zzdgA7ZWQod",
  "key18": "4Lgp7z4zyV7rQupEa9L2jsEgs7rru6NW4KCkUQj6SBFkCP3zpyHa9dYyQFZgRR7cfeus7Z752GQn7mrhQJh26Ugs",
  "key19": "35i8B4YoFZM8HDnMvk23Lz3BdgfhqQcziWJqxLDAJHcUAqtHZFb7PDdmU9zFTVVTi2rotnK3VsYP4iA9P7ZfeHrs",
  "key20": "3ZhGFggG8CZRjWzW36SohboDrU9chsjUKBieQgznAVD4WAvdK87PgVq2rJw1orQ8szXhcM9xpG5ZgiyfrPd3RUgD",
  "key21": "irDBLV8GMgCbadiQTks676hmXJwr219aBm5cg7whnhS9VEbL6phpmsto82QYKptgvmwdw2yhGZ7m7XX3F9nCPhJ",
  "key22": "tCC8vcW3b3if4fM7q5ikc5ugvEVotYyrnz3WhdHzhrteMAW3nKNP2QtPY9G798KM6WQuy7eZkosGbRHTFj7iwtA",
  "key23": "4pdRhxRyuq4NhvEiRfSx4tqJYvxVYzoL13gd4tPV5M3Syc6dsL6xsFupRPaMNz9XJtMRD8ayVs1wYA3abqec5FHe",
  "key24": "4imEcJNsShA4eQ166oWH5cKtTBHqzgqQdMRwUEEKowp7NxBRhF2vyFRXQC1XwkiM5HqRihrn84RdsYAYU3e7NuHL",
  "key25": "ktWCsfr6Wgnp1TwaMEmDVdmtruDYZhCLrG4876yZZmrUZyQKYVfSMRf6DnPHAvHKyVoNx4z5KkWRheha582bzMX",
  "key26": "2Gz62Ud2cFtJSM5NdRwwtxz3vGbgAUCn3bpcR1JpPepSGNhNW2UohjhjoCfUDjcD7GsaptBAUBHvULb7vdTaTbRC"
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
