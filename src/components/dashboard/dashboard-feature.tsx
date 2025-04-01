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
    "39ZinXD4vKc77mtfLP9FuvfXK6RS4MGXaECFuarN2q2T66sUm2H8ofRteup36nx7Bk6ejeuDpmGwgNcF49ww74d9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KY4twvGxbEQ8AdcVRfyAE4hmw2hF65fjVcvfY73ovpUtB3zZub7UtP7y97t2x6B6XEpSsMpQMD8eTpyxBPt2PSZ",
  "key1": "2uNa5cU8wbuaQLHmgisfWjqDPnZkMPt77evY2rsU5UGDNPGjyA6s89gQyYeMHprwyBVnM37QA2H1gbrFn8pSvErT",
  "key2": "5Zu2NydyuK2EvZRZbXD84LoNUWnbcJvh1XyY7fT2jg8R3fXgtbFsQ9uDWtVccf35ygzhbgqSAdUqTE5GjCndove",
  "key3": "4SrfLcMahDehfUxaMTt1iKfY2E9JX1xXJBVnx4BzxMME3DYp2pY2Rkqv9gnhiXV8mawpRmFKpAY8RURVNyEvZQwG",
  "key4": "6qCEQqXtq8TSJ4y9vVSsidCzry5JGnzYZpq9afzAfTdfDvE2E3Xw4TKPHzdVtwmnXk5ZtajPyhQ7hppVEmsq1ie",
  "key5": "3S5gGdh7sgTYKLzXNfY4dXKF3YafyJmdpt3TMMbeg5qFk5axjNByKv91tGLjPdRKtiaqaFw5iQwnt3K8itMsXbK7",
  "key6": "3wfkBWNx7z9gdCmKQ7Hmg7M5T9TieC5eSbA74XpYDgUpg5m7RTKUScRJRC5Vr3WP1jrgzxodHWuWD8Dk3DWMadi9",
  "key7": "4p8Et21LiYnpr57g4TLFmuEVh4g9DEX4WFvx8bjKuhsqhfJoFf6vGQDoQxtBegcCDKSiVUFQboSmBEqycYvX9Ut4",
  "key8": "5iHguaXxPJf5FNR24KpAAKEVrZ4DdE7QcSwT6vs1CXogC9X22qM84VoioZuew8U9NkzZhdfQQo5DwS4DhPtVr4Ep",
  "key9": "i9FjMYKPfADehNmqhdHkuXDq2Mpi8KhmVjLs9so4LFkGBcq8B2iZuHRyKpC3LGtLd7nVwztB5RptgvcCsGiZgAX",
  "key10": "FjtsLwHswXPbhZswyKMnbVpNCKKN2CZaQQ9gaWNkCHL6UBRduqXVKHsg1V5XL7sjKvpiynazsjAsoT4oz9uGy8G",
  "key11": "HdhDhKMAjr7ngPMXvbNc1BmrWZ86W4qE3XVuWkWzLtjH8L9Hqzasx51xs88iFEddkeWg11WzpetrSMK9aMjL1qQ",
  "key12": "4mMCySAQZ1MhHiuzfEFP9kWAJopymo8SMqfx3xaEMCUUxzEPvohhpXTJmjjPmpd41ksemsDE9BwTJxH6yT5QQwvN",
  "key13": "4ZiVW3LBbCefJKatiBjtmSkpmc4LKaRShdqTjBbRUVFBApp8isCXmGfjBUPJTRowUMqEma8iF9N3XG4vigsxXn8L",
  "key14": "2UdcR34Vnfu5QRjz27ovrcyLhdGBnMxHZPysQz1CcWSt48DNj3kNqxqCXiqPL7h4aMLzeR9cZZjDCvQxKaaXn6M5",
  "key15": "22yspZbzh55Aaj6dtRHKt7EHNr42DTRvKXAYT525UkPma6ZFuCbkiefw8rM1yBP4Ez8FRsBPBz6GEVDJs17ZrbrL",
  "key16": "2Pq5CTQbidUNnT8xbC6uGPmMGQQ62nCzGCt1KuUi2uPHutZMEmKYzKiCoMA1igy3FSYbQwPv7J6T5urdQ9bK2oX1",
  "key17": "43pzCU6aAcyqoP4tjjQk8SBEzoW5UjSDqdVpsXJN6QsiXAPdjKvjGtHLkU9hrMktCXAgwvfnKsPo3wfP3ThJoBqq",
  "key18": "66MkKM2wn36Tf9sjt2eJ47Xg4ogP7936M34zYaxUP9mwT2DNhax8oDfdfeMWWBKZ7sMfZZ13pSDE1NabCt9Dp96q",
  "key19": "2qvaXSLLeBwFtRN52m8dSMR1DLPFtHLS8d7beEdPcZRrBZ2c1eFJuZzXVz3Zp3ViiUVFoEGNNpW3maGcS4ZHESco",
  "key20": "JXETT5ek2YDR7ByrwvMCrripLfzVjs4jQjRGaYhBbiSGAmY1vqcFFcacHEjJRWnPbxkuF1L68u68X2SNSRQMoFd",
  "key21": "5uvXRB36h8HZjjbkXQRUjxNZK5a7cfyQfyoyBBomd8fMKrpMsBCovbgLcuE1qwJLefG5wXFdxbPgF4p3hsLXXv4s",
  "key22": "3dz8AMRd4iRd2HptGcFjokihJCN5atLr2Zcn5vwZaEH7vRwKUmY1N5ZbedcpxpSNtCpqVNiJoQcYATR8zZ1WDwjZ",
  "key23": "5QYXiPXKKWEChoYhqmCqEMYJChjP4edHeDm2YZq8mGPJsKdj5NXZojrM9s8LYUxAjb9oUnzQHpm39VKV3L7aN1dh",
  "key24": "3A37sFboSkG5kmDkrvZgkVwuQy5PJc918J2gU4QsP4Yy98s3BqDdzx7QYYn1C4J2UWK6omMeedM6qsLoPhVW6bQx",
  "key25": "53zopuAdMyNfCLP8VZyST76EpAjMbQT4ztLNXg99s8PcADV9eEQWheR1SrnZj8tR3wVPM18eEXE3WfZyJD19D5z4",
  "key26": "4J79Hatq1i8P99gRkBJexSjM7cZTXUWVjzM1W4FZwr5fWZEofTDhEMVrnySjAYz68eJRMFPJX1q7AzYaUUvQw4ib",
  "key27": "4Z4LzjK4Qh3pvnekueoVDw6cesrmtpfZpk7RtHa2U2JfFG3zBFduvP2Psi4DqmdLxjCYRtqYN6VKCt1J5UZQuzw8",
  "key28": "dvZrNojjepXWuQpMDAWvhVFbnbR5wP5imFbeRSDnfSDkxWTLzJtfv1DhYRSn1CpCGMNWK7j8JGre3SJUqLpf28p",
  "key29": "5n6RzidZHBYWWgYdQUhbEdzRqNTcexjsHUjHiR5rwhvuHr6oyABu9BkunHtn5bPDBT8ssmeeNKpxxJsSczta1Eef",
  "key30": "28perjbEz2sbmx43Gj2biB8izkFg7K3ivaa2MjxvF1XaZ1PQgRFQUQL9Dev1LkFYbkJx8QDPyGxhZgwPh7572HeM",
  "key31": "5DjeMx1A6KpyDJeMQkCFcfJab3zTj5ikiSkUfwkDqbXf1hzhMLNFSxGq72pLoxWm56GeCancV9nj5gWpj9PUBKbm",
  "key32": "2y65iAmq6cZHwQs8bJ3pdtbx1Kp3xygvz7a5gpvXyNnWXAaCh4TUxN8PSz5vQr3Vt897sJxmVBUwAUfKx6QFmiRH",
  "key33": "4HDqrqBgu2iaQPdHdNYytxfQX3bXgjaapqwtD381rqFZVoAXdiuWMQeUiUkrZrP2pvXx1thvkkfVzV4WkcLphqXF",
  "key34": "26Aw1fQqnmnVPUEVfYc3JzmUTs2hKuKANqmcVKpg4KocS14hDUXFYxbXyrZRFJvD4XFY2D2pvJJgefgmEHyrnhjc",
  "key35": "5SzTkwihYoNXLoSXHLqPKaFKumKL9dtwfiuAv8LTgurLiKWBu5YBor5HYjsDeyoYszq97wdKthHXMwtcQFJvyFmi",
  "key36": "51JBdFZKFvq2eJ1FdjdcupeEBUGSxz9dDeUDbYALFiQmkKGZYsi2A1UQefZ6jM5BG6JzFjyhNVhFAjStet1bQU1o",
  "key37": "4pETZvoLj3PiLSTajkUCor8e7i6a7fgJzQE2ZRb4v9gbxxKAbmWxLdC7V3bRiFpY6psW8b5WXHwPH5sKSbqhAS27",
  "key38": "szgbTTfZtkByeibiGQJcDzFAWML3HdiZWj15wUa6tfJvtgcoyastbZp9qak73WZS4E9DNzjFpkwjpQhLjSAXLaS",
  "key39": "4J3ziPcenJf11i2J8Ya4zPuj6QySCmfWut4bZkYkUbyoPYfoAsJpFRngGwbcLtotT8JFMmLEyjfsJDEn3PmExXT",
  "key40": "2HR3FhaEBJrYW1ZCPHaLnbPFDaR84hZwN4jwpkuvDYBtGmhAr4q59QNaD6166947wvUjaR6QBvmmzeZmZPMKpH6m",
  "key41": "3aWdM7MGsQR47jNhtb8uDZbenJm1616LDho9sD5oZvJQChPFDhHGaRFhXkUYuahrQ1esi7H5inJLk12ooHyfizBo",
  "key42": "2VWXNkjguADnyczjhakLxUzyDCB9YZjirWRwd8gqoS6A891hUyMFM3qqFV7FqtqcJyU7GJ3z8FAA36D2timra5zJ",
  "key43": "2jJz2wnzarAm8eh4Yiu6qT6RVyc5Yee6vLNXKy3cQy3M1fMXjcgGhhUjim2dbUPv6Xe1UoD7kWBfZQN9bioG82DQ",
  "key44": "4FUGNt3vzwgnUK8S2V3EAR3k5P23f59jqSeNChZTFXifv8bqMdPggYHfywft6bWCrqqX8t33GEMvVY62sa7PPtkD",
  "key45": "6WjbhgNnSYz6swoA2X5Tqkmq5aBcYenuJcPnDVKg8rgk4pJcv2Fx6F3FRUE3gk8EK2U96KRcyij8LFv9v5kErBr",
  "key46": "JzT2r71MSF1xUE5LRuUmwGds5bBq1qAPQowWkoZmbTUrvdUzCjAqANkN2ZLAi5avGVWcwhYM3QfX8CdayNct7TQ",
  "key47": "5t38AcUtoSo4yyosMEymv6vU19cFT4NztKpU6VXnAen3yvHQY9UZkDPLHCUje54feF2LAKstQwp1fj2dTyH91XUm",
  "key48": "67CE7Ew3PArYJfo6URiXkoByLGF4ZyxX2drRTGNgBV4tqJ1zDJZesBJsQzc3XxD9QHmbK5JmJyHsy3egVjam85RF",
  "key49": "3HEBN5hJVZgb7uK5UWAxK5whvDQU375oa7cSyooH5Wv9ktg4pBU8C7pWbf7iNmUetimLwAwibc4QLrCPNYxRzSgq"
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
