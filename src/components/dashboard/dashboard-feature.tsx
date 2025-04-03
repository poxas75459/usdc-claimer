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
    "5QWSfhoqJ4u6fR24QRULCpZhX5hoFSwmvkGkkSGwBmTobSXvPQNzj9FZELxKAuKMKPTNMJKzcuYWwP468D5JQryz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hfgXhwEWrf9UfzU1K4St1nS6X18QgLg74jybwXLgkUeCgMEXKxoT62ZGGdkRi98sn7Pec4iivDwMSJziy6BMFej",
  "key1": "MpY11NKPKWLNVnZCDCduBvhfCYuCEqrRyA3o95STazS65jobtMej3AHdiy4BkZ6VgEHf2TCXziAWfsETWKBxhhC",
  "key2": "3iKuQUHC84Jeb4boCis1b3rfvDzeDv5wU5Zc6f7X1FAoA9L8CNAemSwfraUv8zgKp1cmZzA1y95xhaY8NHc44bbY",
  "key3": "3SC7hxBFZftCyXTKyNLfyQbv7gGV21uffKZXnXgaWLoVHdub58jPcjE2ofeTjhRpw4UXkZWMNwVAexvcNXQsmeMu",
  "key4": "rTBHXy2kwUFCWzRYuqM4vk5sAJxu45bxkYgc5dask6uXwgvKC6MxApWD6Nh3Jdke7VCbsRW1HytFhmHjq9bXf3r",
  "key5": "5dLw5pp38uogZ7YF9R6pkua35b5wfcvTNUqdSejrvCWT2fvmHLANZ5ZpDEhX27WajLjdqjpwtBrZAwb5F2KogSys",
  "key6": "5r3pk7o767aTWz3xc6FCQGds3xjMBWKszx95mKFfAELHZ2kiP1BYTu9tkoRLCdYbZJyRmY5goT65WY9QCYyXujhm",
  "key7": "3P6Bg3nGCfuQ6EM6QHqnajKjDKANaq1aVFdkeWxEi8AgYpaNPPKTNbL1vwyVe6DymxawiojxjP5Cgoc58SaUzGQ5",
  "key8": "4LarYY3PomoxK1SXSURXLaRUrLsqimBc7JvnYU6ZNegmTzxePtw54uwuzFihFZfFnNoU6Zs3hCnL3Qqq6ddtsHQc",
  "key9": "5erosgVqAwJqqfRFbTR12KaPmeikrYqTtrN9JSx6R1DKNZ27rkjQmDsLWEWo1fiZmBNXmsLmarDe34NuoCJiEUw8",
  "key10": "YEZhGYsvBXnVyBS8NYbdfTmcNPcSWfsYGZhiqj7YeHm9HABJ3k3xGSQgdCKcGYtKCsn1xvT134L3M43pDh9ZpJy",
  "key11": "25TuemJXtYk5rpmLrwoGTiJwvQMqwmJJhyBHEVzxo6HKUT5FMBRMLf8VrazQMuWuiHTkCGSuip5mjNdHXecBQXeW",
  "key12": "3kytJtoV2qk4uyLJtaZwFBvHuv4HdxEmEcoABYjPrqkuvALg2viPXtLHebJiN3YQxrWjRPrLhR1mCEyuVBVQxqYk",
  "key13": "2D6stuFVg7gUVKePszy6iwYnsFYVhMmE1B7J9F3dLW9xhe6fQ1nhDzL38ZwErmZ232phDkDhtieSU4wvjLCV4NhB",
  "key14": "5prgrvEvaG4PnxSPCCLeL6nKaWJ3xCDjXB2AYdPTsNRpQmghBd4CBVKJnkGnBjBTpwaF3fhhxTvNQZsWiSSngktN",
  "key15": "QxtywQoyYfpjC6rX7iT2aaPPBQExx4TzeT16bC7d2GsLfqThr2aHoWiahNoHcErn9MkUR47PAbLffJPcsoZb9Tm",
  "key16": "3rw33a7sJodRF5UmA4fRyTUbNG4p6zkHaNGSBCfQqCdwvY9ojzfWAdM4vHeLy93z65ZC8i5A6gscvykS4DtWiqSZ",
  "key17": "5zdE3PDPrQf9zG8ZMJEHTe12vgU15b1kqmM8JfSo98kMzNg8GwzUCgUe9WGPEK3TFjz6BC2DFBRKPfUJkPjpU3XT",
  "key18": "XcarcPxfyCJtZUVVknRciAAKb4c7WGcKk8qq4rtoyKzZtTStVmkmJ3R4yuLAFQTCFhyoDyzAtd55pUh99TZwbEW",
  "key19": "4NxSnZbTPdn3dfUQcGEgZoiV75CSu3xWCmRkEusFhXStTa34dVrHezwEomzQeG5FAdvFoYkBuWC6iN2SZQRGZgxG",
  "key20": "2cX4e7ieMZxbivT84VpEqAPdUdiBw9WEpyStS5s5jYieadUZvZsca9iJo7AVb3ZgqK3PQXjsPFLDdn4J1spZmzpy",
  "key21": "4F7w6fNvWHbfVYZf2HLKWCQgBnyKPnneuuix4YzXqLEzSAHMCvUZtqqXX7cGzLuAzu5G2fRvnBcc7J49ffpRyyiF",
  "key22": "xj96LEDjQqA4MaL18wRmu8xCv6CMBZX8Rq1afM2eXWkmpWUCXkZTnWUnZqXPRecBED6Mxo3jidpS2Ae3tseWiN7",
  "key23": "4ZFuPb8ZPwhxZ3WWoh7j3k2Sx9rQZ3w6n1JA7LcyDEgGFdbrXX4KeMULp3CJav6ocL6KsYYccBWB2B3okhNU5hj9",
  "key24": "FghjnqGq29pdzMTj9r1QpZARjTBuGpgWgmMMysmYkMkGssgLVn5bjhGtXik91UTQGA1jJ5qYEEjpf7NqaxZJamd",
  "key25": "3TPhggEjx3gaUB15Bdw9mKTyaJpfuFwxarQtshQqqrZzPaWqPBQc6D9bZEGN14L1yzLwCPSqoywbMwWyVKouNMeF",
  "key26": "3VrRdNXWgxQnCfpPhGPRuspk9v9h7bfMhaSnEvuC3SA2qezZ9m4ZbLwL2jC4e6Arrh4QJBrcXvM1NWuB5Xvbkfw8",
  "key27": "4VEGQv3g5hkPGZkzKkrGDGbLRcYT2rbTS9yhvJgqEn14ykKmxkicQF3UWAfNuw5jQtwRBMUD8ST7XEoMBkcQvLRT",
  "key28": "3iTpu9pQvESnRGxv4kh7hKiWe7Q5483TPLCRgGbYaZXrWwm96cy7TDhFTy73yYZtjxdZVs67kNVRNf5APoZFarYD",
  "key29": "4Ef6NK6bkEMJK797nUFhto516jnSh1xrkoZKn4w9xra3vPsPiXyDfVoyd7ioVnb23HetGX8iAqe5nwE4mKPXTQBe",
  "key30": "Nv5tnRHqxgoEngoqDd7p1kVQRDGWHk6qyY7giFB5s2mdQs5TrzdezGyYFN8cSLJcB2uA7Jdwh9Xmrq4M1cGD8Ue"
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
