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
    "A5CLiAsDL3dAx5EgaWzqZt7dgEd4hu1BTW7JSKurUmWy94k11jRFkj6z6ejhJbixoKhW8msSUYHjUFsJjUCKJTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnvh9jEBoigJnMidPu2eWyE22XUk9DfQCnErDmRyPwSzNwDUBF1d3yoHAwrnjYdKqfCaFVozACCWAY2JgLG88Qc",
  "key1": "3MQjDzdEwwvg9uLtggR9X9TxP91a2eXHK64Y1iCrJa8b8P7XBTfgReHBPeY4dmT6e1ejmwieB3dMFjzCmiv3fkyL",
  "key2": "5N6mggqYgpf1R6Sm7iJjVswLZbYU8DQeVx7ahf9NTdp8s4W7g83Cois47uM5b2SkGrKAT8b3SGrVU9woMhKkpN7n",
  "key3": "t38WtMx4BaRWNR5fJzYwYtpL6ogAafSx1UscsGtEXsti4eHccPTq3BdcaKFbnZN6aZbxJ3Hbym2GuYjVvERkrox",
  "key4": "3ehUKbW9ERWJ7CLcrLyQBiAUBVV9bGgemtbDiVVQBzJPeywxaPP7FLKNiUJHqdMqT2pGNNoFkV4qEcVn7ssUhRdd",
  "key5": "3urmjq1uBabxzfybMuzYPV6jE68SB9aAxJWfSdWLUP5FGimdbciYemqPjJ2KJKJGSz5pKjvH5rntFbU9PkszBxsL",
  "key6": "24sPb88dJy4RYs42bsU3xc2yVbNU9sBc4DuinhPvQqKMFZG4oehREmKrFhYmw6ruGXPZkdCSfp82iV4cMFFjqA2Y",
  "key7": "5P5T2Wvmw9HTxcHvXsi9WRswTiN7ViyvrYV9k3X6joMqT6LihDv5LU24BPXNiNyCLsjUXe4ip6pknimYumZayDYF",
  "key8": "4MJjnjUyqXudPEkA6dELAWXnyzViTgM9Lbb7KcUi35DkBxkGYsytxQ3xkfw6s2Fx1WbuYT5h41F7hoKatLwh6yhm",
  "key9": "4wtYDeWwBiQFu76HkQKj9ZTRVeEkSUWBKMGxULJPniKUD3jn8hHySkHHSjAS4kRKiiTBX8S9m6JycWtE76ik8qHa",
  "key10": "vQnBRrPLGwvxh6yHEGdTvz8a2M52bhwfGcY5KrHfJ5ctEFdE8AEuuTBgsMS6YGhCaaUcxSwxxFpkj3LGz92fJS1",
  "key11": "7p53MqfbrzMQiHx8AzviHaeqgfQtcTABYJPWR9Sf2AunGc5j2LVncmBxFb9BpE93e8DNyw4BveHGeUDeJiAWQUy",
  "key12": "4vWTMj5mn5zoLvVZApUt7NTsXZ9xrAp5CiJ1JumZ3b7JBAtyPt8DceumoMkN1hdDgKvENR3DQw9yWRnEsRA8rBMH",
  "key13": "3teBUmKwFWTLpWhzibwdSREPp9tKPeoV3kjSNiuAFh6hxQYdt78wsPj8T2ftDK3ctkZSfy1L4FaEzerQ2FZ6zck1",
  "key14": "2M7chwnkQtSkwRK4F1kTjVidEE7cASn8rXUGQYyV3JG4zwzBKYcsyhqi8mPscrCcsoeWGbtv8GnTNM8HneST2vnE",
  "key15": "5KBbbcsCpsCuHRNjDBGnYh6c5qVpQ54NUsPAurhJfHG1j1Du71nxwe3JVoR6wjSaqGCMY4zUWKW5AamdPvQPR5hZ",
  "key16": "BjYHQosZpRmaK2qb79BW1gUpeGt4ae2M4Ej4xyyXfcKkXmxmXeL3kK6p7Lhmtau5y8a8gMkoG2CcERuznAJVE3a",
  "key17": "YQtwxDZ9r8xZmezB8Jiapai19ew1f9gdmFZ4joGtNz3Dm5nyEn856DZwjenXmXz73i5mmwxWfNEU53399mqsKXQ",
  "key18": "5reRmnrzxNGzVBJta2kARohPEk4T6ZmrEq1Zaf24kKeLHE6ELCibK2PeFwFESXvfnhuiKp62tDpoGxtpLHzm4jER",
  "key19": "3QXJCNqzWF3kadFdas4U3s7eADDkqN6LPp7BL1iyWbHVVBG63aff7C7J1r3yxaRLSRMt2XU37cNnF1AXbAfBBtzD",
  "key20": "63xA9uY6S91CK9jiC5P5tmKak9v5Rgd17Z28Ya6q1j72csUau2WSs8Yx4GMJinykRFjiia8cf3vTxeimm2ZL49gG",
  "key21": "5Hd3zSuj34BFfZFmcpvoDFB1PGaYErkXeQREJ9PPwtTwASGPqDUAyk2QKE9ZNRRMVPB4ofLXAkUhpc3fRvAUVdcC",
  "key22": "3dmvXLZSQcTKm8v1gAzAfsp6e5K7gNnj54JaxLbjt5CrtSZXHqtpJMELKTYoZDHRYx3sddZ78Uf1xzi6doxRCHBn",
  "key23": "tVDvSeMsfwnsEYkfEbUbLQQivKAZdwN3SnE6cgnTsjAa8qMUvVwJpn75RhfvnSJM1RRtm8sd2e9jEP4hyq2rKPR",
  "key24": "37Y5DybJcW5HB2ppknWX71Pb9TQCuG9MfmfhCSSvdc4VNcKrgCUEzGeoUYbZxbDZXkCMsrJb6sJ3cNLiq8zvFss4",
  "key25": "5c3Zn66u9qZSS6qZvpP7KUP7uwEJ33dSh1pSKVN84JtBrgZfyQXRWXKThWQ4qvHUkcQKVCNnJUia4z3E4WeXWnLE",
  "key26": "642yRex5tE4GqvRugyz9ZFbQK6SwwbuqHSMy5fu1DunaeDZu7ajiP967jK4jL3KULfWz3EuujrEu4ntsgUVoeB8Q",
  "key27": "5JV1hERvC6XRFL2nFk16FyFGafCBLzaxit9Xt6wEym1qC58cco89JYCXxqAoPLWE3kzFEQqXvjGcqxMJdEzi3sAm",
  "key28": "2SfwNdTHBMhwKB4WyF6bRZ7PYdAdpftRADhj8YVxCyP2RBhh17j3APxjUPfjESUmqAbamurWeyaK46aJQ3TQvs2W",
  "key29": "2BCqUcwWh2skqo58PhwsWBs89x6xTn1NVUcHrenYVQaW8EuVKkchboHMzF4BuSA21HzXZPmddkjWGubSS1rK5NoG",
  "key30": "3k51m7JA9jPkivtG7EgbU9BMvGgRYHUJSVQ9BpdWhbavmYQJpK9EiztTHQfpo2A6FF7RgzcUB4sHey8ZGi7rfTzv",
  "key31": "4YpnvseYTRVhum24ak9bC1BgczoEvEdURyFCzujBiWmrVXqSB36uzSR2RMtsPvcsuszUgF7YYnwhEA11Y5PPg4rA",
  "key32": "44yYcxLGHB26bDXWbMnngaR193SjsL6yCWauv48LnQh9S3suZbPhAK1hG7quknwrJE4LBaEDiD8i3fvza8cDsW2d",
  "key33": "4TwEZNsfEEr1xZW1NQ4L4PgXUPTb5tNBvtS7BQukEFdnyDZL43VQdUeBeRDksmksctaZHPxFzHSXfEoNmty7ADBR"
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
