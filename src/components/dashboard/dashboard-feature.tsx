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
    "44pxdAzkrc8J4PqzgdY8pXkS4sEbehW1XoiamU5iMQpq4JNgecFeXYj7LvTnK3fMTHLsfmY5XpNANcofStrivTLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rEnD9BeZamP9YzveHYoFxuNwzM73UDivBQeKaYHt9Nv7fqzgD45yPf2p8QhRXZeonW3xDZ3FTcaGhtbhbJPVUZc",
  "key1": "34vyDy9KXKuxLKQgifsTQCJuJmbq5Tk5UcqsN4VJx8JUKkoPjBJmj6BhmJN7MWwP9EnSniCP12H2DgmB75HpoVR9",
  "key2": "2poPMPfFNvBQxtPsGiFKWznYcnNBtHG6wP5f76Uu4B3U14DzyX1oe5HPZ2Kf7uBmitgg6fvqnqnTHb4rEFJeTcWz",
  "key3": "4UGqTa2rLReH82Jn4tgM9sWFD2xQwr8QrVBPMsAsQ4ScBgPhPTpCBGg88VZzkbh1kEUvwLPndoGhjtVueivjmVfM",
  "key4": "5meCNxk6PTWfXPTdopa3HenzhkK3km5w2XRFvjibDmS8as1vRmLaWfCRMWwJAKxzz5mwBnxYdVe5okQDb7Xhg9d6",
  "key5": "4vXXZrPav85WDNWMF6V1V5D48wYZjfRQ5Nekcx85TGQXCG6mn2RrJ3mwWmWBTpLxBkrNPQTivYmnWpcrtHFMbWtG",
  "key6": "3p3Jz6naJrGx43uanpu6yVYNJRcKKSwV5ANYEfSxH5qdxnfJLyw2XPcpMxa2u8e9VneqGyNNaefHzDo9fUkgFUJz",
  "key7": "2cpLqLHrTDkNZ9RAbatND88Bg1K8wnzXMtQXhDHd8M6ayAhtMQh6ErAMZLvxANZZoBF8kJzk1vDx4mpy8DoKBGiw",
  "key8": "3LH4D1gRnrYh7qc5JQPU7iJN29kZxYUBzzTnn6FUTFwKjRDVvo5gVrq7qVoKiQxkeTzfR2njziFfuwFjBGDcPREN",
  "key9": "58jZwgGgB44igJp4tg77Jp7R4keL3A8cam9noPgtpDTfGx1AqJPy7bkxyjjeY6UQHBp4f2jSmzd3oqRWxHbVP2NV",
  "key10": "4C9G1NwBgTTTibtb2YgTxrzTiSFTauQSXXb6uz1z1Ch2JW5RyhXQAMR3qBQ82pk8J8D3kGdoya28aPK2hjqdq5EB",
  "key11": "4bKZ2w6StNWzexicekMmyyv3dZqgoL8qAL16NEPSiEowB7yHadfkQffVYzuTPNPn3smwmA3QRDkWoMRvxjg9kPuL",
  "key12": "56GhaFPXzYXgM2g41w2QiEg44g6Zft73ychanbXQs8SVNbCcajQfdMxv6eMqTWGuZf9NJwgR4DEFbCMfNiw7MGyu",
  "key13": "5Nf4pcZKbnkN5Zaqdywa2GSuyY1R9DmxsTEr53ebqBzxqMFDGLDs7ricAhyfYBGMW7W3gQdoNcdwtRUSj6ytgu3",
  "key14": "2TskZhEnTs9abUTGSpiEzEcdbCUA2oC2cbCLdhJ36dKtJBLwTtteHzX6GGELxMfr1f9ksCtwr8Y1wyNq86twNjLq",
  "key15": "2goy2JEJZ6ujTWM4DQFZ2e6kRExqkYZVLKDAUDS5ZkJSKFDftLXxgpFF8YaVYqHHbWBy6zbvbH8ReAqPBQQqCttk",
  "key16": "2FZDyXzmuLDH6chod9Bb9GFaZKDQiDxf3Mh7YJ8CnpTPLVHgaCwKZRq3mxsSB8wocUCGQccvgKwDYBJYQuRjiBvV",
  "key17": "3wXTrFMoYHJbEoBDp2qo4ifBfzahZR1S7ocUu7gsJSkJ8B4oDQ8iWnLs9wjsWPoKBaz298wuLrPoK4teEhFdksfZ",
  "key18": "3Gk6fQzz5nywMrjdqzrBY8uMGB9RCMvZVngxJXsPjQwdC9yx8qy5aa9uk88Roqg4ew39PGtDWLM2c89UraF9ai5d",
  "key19": "35yFACynouhzhhEwVQkf1ZGUks6iFnwus9RgjNs2FNmt4Xbq8YRTy1VvryHc2qczhhY6CS5z9k8jN4wQhZNZTi3L",
  "key20": "2TkeQTtp2HqFFZYJrtHZbo7YskCdEZ66Z6QrcwYqVzwJwA3TwynjX5ejoB21h5QEQroKeD47vwgU1yKXXq2GLpzL",
  "key21": "2iEyodKmrYUFo3Ho5CBjTE2AHApVbK3QvBKwnPpYxUCCGvmaNncrq49oE38uUD3TeSvWBNQaykv3KvJRdudzbyac",
  "key22": "awmLTA5mKPqri5D2xRPTBkWcTdKdf6A7U8aiKj7fjNuLitZY6St6Ez6fQ3aKGXw4isxfqZQZy8i1p3ruojkhwpo",
  "key23": "5f6vJbee4gfr8c2a7S9GRE8xdGy1astezZ1efsj9Y9tUzfgmKa7j8237m5aB4TFdg3gSFNk1dJUcjR8NzHuWDQpb",
  "key24": "5Bn72sxYtwGzES8mtKdJvNnjGjEZegC63DeCpqwfg4PMsfQ4KgXhteX2fcXRYgFKEqdwb2QYDkp1Ey4byrYVrh14",
  "key25": "2NnhbUhRggwxhuUsS3741cC3mLotFZKCJKFwEvNyH2dmnoU7RrKL32MxmDKrhk6FrxToaWbqejeocL8dYD5XYNt7",
  "key26": "Mh95uzBywhxRaWNuxpLB3PgtMAzVG1qAKUrNBmLJdFe4PHxdnnbt4RskikFiWtfoPArs12nb8AGPRNYrCwxnkHr",
  "key27": "5QgPHT27kZi5EYJDB2nuH2FRSHVzDrAGuWUCzfA9FoZFfKKmrVewASU7Ng4oAxfHGKV2d4RndCHDiGW6yrF89pEy",
  "key28": "5JnbpXX9KhqFuFxPNwKr9XRQchppwiUcMruKvGzE1BJcCiijNMtT78EJVPfnq1ABd1gEQPFhRzXiSw6nQsCMRC3T"
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
