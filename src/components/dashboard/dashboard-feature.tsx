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
    "2zfTCuPos8acYGEgDBo6ajFBxAcuKJYGvKLGmAuD4pfNkugw2Da41riMvCehRvvmrowPYWmJBCkogHzSFZ75DddW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sp6FLTvpiGmRP19gYg2LANErQxQ1xhDS95Urgc7zr6wcD3TsNqRR4Eo8TQGrUtMbtGhMtAXRJ5AZj1S1vwutXea",
  "key1": "4kJv9xR5Em5YkeEqjcyxBgzHxy1t6M7zNNG2Y6tcn2nanTebEZJJtc62is8Jp9rkP5Nc7iXZVhQH6etrAaPxQNGx",
  "key2": "3Fc5hsscSspDLR8FBuGQzpu5wmPs1mjQLYyoQWsoYQ1BhhRsm43bf6Evc4MrZhgG5vZCNM5GKsKiN1njzXC3T7mH",
  "key3": "4BhHY6FPmtmW7Akrmd5Zo7GGj7tAsecbMMcEH3gVmkZXN1mLNM7hhU8TThhF97jkqjkg5vPox7YFdMnYvqCk97m1",
  "key4": "61yXH7TREKiVtPUMhWnSvRkszWvhTXsWGVPrXh5557NtseR5mWAYQ6xMaRg8cQcKxz1K7NuThAsagAV1BvwM99g1",
  "key5": "5wUK4718a7fDUNGHbFjFB1sdv89qzhTjb2STyM6rKWRuYrFxBA1FoZjFX6bRHCwSr4b7dGFfFGeLE3L7yiKawuvE",
  "key6": "5UqDsG9X8cnW7BBz83m774DX7wzkTRV8UdTsZ5hjddsXA6NYCvznWf92MuVQnLwGzcZrmHKtEdApUCCXFbf8RjY4",
  "key7": "2kyzkUwEMPgdM7KCLcJEAjx44QPC14P1U4ptn2K8NbGUYFui7UrV8YqURoePeSsHZ8NDzv2L79pbrFedaBBRKnxi",
  "key8": "5edDnd6mDEZmg22FAtnsC6PneGFS7hHJxLqFE9QZ5L3sPupBHobaoDndFMq7G4tNxY81DKLpMENqMtqe2Nx749b7",
  "key9": "2PHEBQjtQjh4N7dWEi1rY9abCLkhpoUXPxQiRiWWVXKhnqvnFRsC625SLWedHEiTDSYntp21gMb6Yi9kaXZNDu9P",
  "key10": "2JcvVjnYmnVjbrZzx87vq6NKFcNd77v6wFRxfDTAkZ59ixEC25WRpEFaheBLG1sEmNmZpHQDPoSqxvj9EiXVU2iV",
  "key11": "2qALKUDCKd2t1hmx4CjEDjo3Sq9Ry652cidPjadQV8hDTsNN9S2ts9sXVCorubTSetgZRhM1Uk9oXD5PKWciMiw9",
  "key12": "51TiyaSyztVVkanQGQjX6Y65wDZnEr3zr3BGTD7D1eXZsX6ii3DknDj4qagjqPphnFsNeqixVjEgZgmyJsMtCBT1",
  "key13": "umcqdixRtuY3Q1L6vEuY2Ew3L8wBDpCzi8sSNF2ucDs7xx293XE6Zwb5yii3MNU9xATUmZ168xb8kkx3ySc3MrH",
  "key14": "4dGnECaW5Pgd6UKor252SmaZDjPZdJCxNvRXHHciL4shTuQowKRBaXAwH6LUW9CfhrfcypocFPwmpLqqrGBbD8iG",
  "key15": "5VBiz5dGdXntG5mgTBW4afh2zH6yo2JRZF4yVnLjHcVx6N1cgPyJYSsuRn3pyaCp3hEiwFsD59UyL64CRnriHQ69",
  "key16": "3obuM7reCEtakWGMsCGdwVhtarrzn8wH6QhSgPjFDParrUGsBt6YErP8kAtjCdoH613zWB2SgEz13sHNbE9nzCGb",
  "key17": "5f3VMaHuvf1VrhSzxomS4tudPxSy84KjdQUFPmbudW3PFWfMqGtQpDuZ6wK3mKbRGAcADXj9YR1iTXrskYHQ1MQd",
  "key18": "JaGTNCXN6kzhDMKZ8HmgquzLCwsnaSaQVmvxrGPZwhJKZ16i7dPf6ZdQEbcaVHv54jQrFsY3nktYQXwaoqGn4kp",
  "key19": "2FBUXkFP92hHYx4DJA9EVE6Rkje2nxB2HUTSbCQpeLaTtn5ssTU59yN4zuudJusyYUYrhkgMaVyjdqgDf7xGM1kA",
  "key20": "2fRya4cZZYbNhzrZrwU6EG5kvqgumzsYZRqMjfQq5rdKo3DJxvBmwcikMv3qdNxpwv2op155u2S18g75wqGyP8j8",
  "key21": "4C8Y1x66ecDNwagiQCrSU6k6wxnHTAw8zWodPaZ5pSoGc3rXCYjGg1qT5urug279NWTm3Rv89bVTaTKDp1snWxZA",
  "key22": "4KYYrGBVsLBGJ133kZAGdtNrXGwchceKE2N9gVL8fxdkfBrwLvM5KHcLN7vVKxHT1gVWTpqb4dCSH1pHwSYGJbp1",
  "key23": "4asUfZHzRykGrrJqpqWqUCaDs7ARczUko6rzmecA4cXQYJ47N4EWaoqGM18YQCoRwKdpxhmjL2s5KehNfyQy8ETz",
  "key24": "4N8dvhZXqtAimLHaahjVDdhjkny61wmRfdBCBEdFsDb63QuztKCCMQFWPv1fHwKdBqfEcNtC4y3mkRfkoxVEogYR",
  "key25": "3B7qgxeW4YBkg7QLJhKvVticaWBvK7TCRv4NbVMaHd3Dcxk2DeihizLXu4M8tKXXKz3H5TeuencK582bMhC3yxkn",
  "key26": "4Wo5rbmnp4kmpR3tUwwRbJPYiRc3wDcuiFUHPDzXVPCQhboAtad2CAaBUYvN36L6fBjZiQtQyCAi3fEh6u8Rg5uL",
  "key27": "5mjXcCixnW6Y36QqoTpbikBELoG9wSmLGMbZDdddUcaunAu7QvXfHXxBHjCrPyXFi62cMFvDv99wxccVibLojGiw",
  "key28": "5MS12HgPmLTNViGQa3P95fpXRGVkLUjTVvxffB5HmexDpHi7dD7aRPRjjZkKjLgz6r1EFg1t1nZ2ThZcr7YeGJq5",
  "key29": "2ZXU88FXsYvSttxA3k4pzxR9vu5MeVbVdPmQoKoPNLLHkXFHKHmnQp3f3X5DeVqnqjFnRmBLmoArR3rNuPvHPhWd",
  "key30": "2XVUdK8hjy29JrQB64fyFsN5a66dHxfVdHzeLFiRCDiQCvFPbjSvL9nSCT1jwA5JxjN6qwXy1WkwRpu3jknd52wb",
  "key31": "2eScodgMFsQ44iz6y19LiTmd8Srm9HYQpmFZXKz8eouwZ5uWQC41eg7KYmJGFdnij3FmkK226G1eaRQN6SQAnCt1",
  "key32": "2EPBNDUzVqQUVawFsZeeSDcbYC6ZAwhE292T1nUkZ9xLayurGjsgdaC72vXjhkPhJVd235fNtsXCaU3pUchh9dop",
  "key33": "3gWAp8gSpUEkMXGUPD2FdJf6F3JjNLk7cEXHM24egPUUe7Lo6zGeU5F24WYo82GrHSifkUETf7xBzN9EuQgeCrUg",
  "key34": "4GcrtEqk2E6MQKHQwPmXg49md1MD5K8hjrb7NQnfSvXRGKDA2LxjWAEyhbZ35vUQanWyRcxms1uuARBpuG5x1f9w",
  "key35": "2eJg7jkUNa2zvL2xNMC6irtNxW5Z4kSVwhcrsVorHuJLWeJWf8fMd2nTKn3N3RffdTYaooyYxGkaHHjHyxZR26L3",
  "key36": "4B3JZKRfvboDUWuyNnusVaXbVrMRuU2ZzDtfnMArFF4rHXh8rry18u6ngbiQuCNKFA8cfhWbZBDhdP58nQxnwPW"
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
