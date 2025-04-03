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
    "49Bm4k5BFqA8zqHBvGH4DyzJFhC9k7hGyd5fZox3Vjv5TRziMrJkhRUhZ3H1rmPRLqYBsjt8V3AsVBnZuKuhUnSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i46ox3WATxWiCrKitYSLFUJ9yfNDupQCEsBBzTREEzBSntShhhBc22bLfFN4fxGrXp4HFDgYsuVGYXKQjgyMYKT",
  "key1": "5NbNXPMmq5YdMxJ24AJbLw125Y8HnqpHFveFTrbxVihNtHqXmwHz3BfYpJphEThYgLJN2Kvx43FoqBPrpheJxgiD",
  "key2": "3TTcWE6rN3AfxQvBtbh9RUAAjqB14W8AVbkWjWEsFQsszXU1kq6hjYbiHxNExVWiHc76pE4tdEwggqJTBwL6wk8p",
  "key3": "5iorsDJmcpJdFvjetGREoXZAfF65LEp6T2i9pGWMnY5w1ArdXrMDtHoKu1Xxf8BELNm4Esbnq9wR2z4VvbHZ15Ai",
  "key4": "2wLQtPHz6UgubpBP3j5AtHtr5wMN75Pch8fW3VyBrw4Zj9au5qsQJcgKMiEXBuupxikMnaGjp57exannKmPk2eQB",
  "key5": "38zsSdaUkWq3C4bHBDn2TsZs3NJhyqDf3LxPwTNwXrqhCTBfa7S2WEuLXKVW7RpiyvYbQkewWwg2Q9FYhzJS1uHg",
  "key6": "3mWN9cndJhRdeWyj15k32f4Uwv2GzbbfunHKAN1X3hxUXgNYe9bi11FMHbWZt6zU3WNz4BYVLfSvQpgWkMBUrR9r",
  "key7": "4kFWnxikJ54iZcg48LaGvCWSVvAgChkWJQNUoS131FtHhQdXoNYcu4HamKA9ub1XZrugSeUeHXU3KAzxP4io4tre",
  "key8": "4Q99LsG5vqTqewb99TiPpN7p2AAKEBe9kM8vUVCCFSTmkkyekcGgsxNroY4gnGeZfGKV9NRB1HkDJP9YPBFyG5Yu",
  "key9": "3X816skqWkTC3341rqoFxMS5z6hfaiscwkQoWz9fLb82AJHFVNhyFib94S7vLAuEwCYfUcUWypvhnbaNwGLHm6nQ",
  "key10": "2Py4shDAVWUesSkqghLcZKU8Car6k7nWCxr3dtnwu1QB5CNRMRRtpYCRkZ2BPTC49ZNjngBaA468Sc1KK8dPjidC",
  "key11": "3rfsiP9CS5U2iw6R7AwpBofFpETvZrSKHwj79bPxk6S2SZR6NSx6c87NTwbs9BDeVg1DK8frJ34m8yzX9iRGZoRP",
  "key12": "PS5wTeF18qSU8Carbv4X5RMbxXBtrSZr6XfqrS51NCZjB1WcV5j9hLQA5Jo1EPrzSESr3Ar2eXkAcCiFnYY2J2T",
  "key13": "5qPxGFKxbgxHbT3eyKmvrbTjM73bUDLGTMDnPSiF2VqzSPYQCv9ZhAoUymw4KGrvAo7h6f68mXyhpnnfyfdE5fHp",
  "key14": "3nUuJTPUzmFCkw6y1C7GicrJ1Mv3keAZLtmv3quJoDVMxFoYPjrAmWWctDMhb4KjRjDu26QX6cd4JoHjbqaeHKNV",
  "key15": "zmoNwPR1gnrgnMxt6c5VnRWFyKBR9xnef2baLuZb54VqffUfNeG6svffZFXEBLDwUKFmff6FotD7GaU5u6bj8qw",
  "key16": "55u5xXTB72DLbfxrr78tj2evwb63KtNvqWaPsw4RdsDfByjtx3ap1hJvEpH3fQNznZcRbcp5eJgxC3RfgxiweApL",
  "key17": "VzyQZeDJVRrWXhDykacjzVQHprBEPA1pMEqMcJs1xaAoYQpvLMGdQLdPZFeBBvxPPtcYorRZXEAbAxqUpYAHsbk",
  "key18": "3YBmhnK8wFirkp6BtSuFeVKVWyyL6bxqpCtvgtAZnSGjwd3ZVJPRHSmAw5JqnbsPCTG7Cph8cD3gG72gpjEJCSAC",
  "key19": "5L3EudLk8qyXZbKtzWX55iCmjX2WLGrUMGR4AiV9Soj6Z2iCq2j3tJtmv8K8EpQ9Q13f93wdprgxAJUAuE5sK8Hp",
  "key20": "hqYVAZw5bYYT3bLrfxxpQcovqLh9mGuDih9sMW6hgo4wMFTNpUYsZ6sSawsvzL9wLuHMYjXxjxrS5G6JEH87mpY",
  "key21": "5QqVUWhocFgYHtYaSDi1RghZqtVhzYK1954dz9cijPARKcZHZ5TjwRpQtjAGmmn3Js1u3iGeD1XtEMBJJe74iCUx",
  "key22": "4Dp7Etf5JUmDZhvShNrVACpiq1jvWHEBZRJkhnnohQE5WxvmcNuj5TtTNG9spCKpeq3MV3cJ2jRN6FETmhZsXFn6",
  "key23": "3GJJCpXQ2Tb8yVsi4RSdmBMHMLmJKwGdyJoBMd8d37ZPBofz9uVaaCpyeyVwk272jyoJG6nPk8eyFwayESsJwDSY",
  "key24": "3KEp1XXxFnJ3MpYJXb75KhL4huHrtNxcfLGpAX8KRnWvzKxmgr58mi4UbanfBgbGjwrFcd5RJwwyPhYSnhweXJ4L",
  "key25": "378xuxT2YU9AYx1TcToQf1fw4TQsVnNx1bQ1ZrSVZMTSYqjXi4g78DEnTYUXQBiC5cb1BzH4mgmQB2piuW9LKD8p",
  "key26": "36ju1wVBEfmbfP2jGPCLcLayqcywghhc6NEw6UUhJQoReHQQRXQ4vSBgrVkWGz9EF1sMRgiMjD9iqMvQPxdQea4X",
  "key27": "LxLHZ7kjjpUnqP4MJ5RMrBKt9dLL51c898xX1eX9RxZfxyYNA1PGjoy7dUkFohg8DYsXNHqrWknspVJQpdhGRwu",
  "key28": "32V3sJqXFM1APHgrgQV6ACSdhaBfe47gWxWtoZMKwiWeaGAFSFbFfcPcJ26W1e9WB2rvaFSDqvXrdHXdYMV2kP8t",
  "key29": "5EbTPfF9HdszQ5efqKigjBT1YcqhvAHXSDjK4Qf9jgJED1nBL5r5xiuNZHWGkeEXZVdyk2evb5NCtwtmQ23dAjL",
  "key30": "5MNxXD7EXPEh5eVjk5RAJZySzqvYf6pDYVGzQsuc2eGHgCNGvvQbghzwt67XHTKUSp5APcsdjMhVM2tPe8zUJXeB",
  "key31": "4i2JQ6dbFtR3jifHPjb7nwmc3NVhrrshciXPBsEJgGjj1FDSMs3shTfeVkhCKEckVs3xaaxBMgu64Pc5njj7omxk"
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
