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
    "5q1d3iAopMYPMfNa7pvtA9FALW7XxgKNTHfcevFmuXeywBo1XbzLYY1b8acPs8qUHV8FkeUykwmqcmYuY2ruRKB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tS7NL5xdCjPzGe5AZsSoyL2rThmbFA35hrysjfmxmAX2LcWwMfmWFSvvoPxerA8aVNyg8ckcYSuZLKeF4KvyWem",
  "key1": "4opo4oefFLPjJvQTqhgEpE9HxZNGLxKV2meSnchfUB7W1TTskEf17ayNXETFRCbsgbzCRSarHHPrsLhAUmjGUMES",
  "key2": "5Ve4wQu5UQQh1rueXVSF6uNLCfsdNrXzP898jh5UduC11yNuPJmvGEkFNVbSTBqkhipFMiaApMZtUVix2qw5S68J",
  "key3": "5CTR4oAbV2JcEU1sPodHxvJd8N24DCh5gubAXxaRWx5AjjkWTmyTzYSmtgGY8mx18sarKGyD9ZiG89nHyrqWz4yQ",
  "key4": "3PuLK4vAZcfZ5LdnUUcyDAz8YfRNVEWeeta8fYNkyDTR7m6Ag3n2u7yQwjruSAqy6svEjaC7fuzfXX2GevsEwveM",
  "key5": "3J4yLrrThtQ6ReJDMTYw23r6viVaJPQy7vP3BcdiV74GacrUGuJu8dRCMEeFGubRrJscbnhhTwXS5bRLdkqbHVmd",
  "key6": "2z6oA39j8qPrgiBKm7KrZRv2GQd35gRRyhCq33ww3eWgbSqzUkdsU8sKS8k3LG8ifELtP9zzLRWCBndaX1Zdzv5S",
  "key7": "3G1meSYiwAYqhZDRnjn2c4i6gAGtVAsR34xgHz4sZRWDSNrdx3PHYA6LmPMyf4PBwn5ynYhzuzz3CbcotiqYPT32",
  "key8": "33oEaftMHDjceMgFWuuMMQi3HEFQ39tyoYPtzEhyPhgGJiiE6b95YioHCWSjJoGMPXXx4aV9DZGTmrAkfBSmNcUq",
  "key9": "2Kg5jp4QFpo1PkYFyTvMVzXUZhesR9qPPtMQEXMHmiSh79JLGW2EVLvose4N4sEM9SRsKNAycZL9HqaTLKmWyUZg",
  "key10": "eWxBJMPiVYyWgpuyWGUGE7ZY7eMQUWnN64nC9kCAtYKSbTBN88uJKZWaPhhauvv16wjLyZmzXMU5K7uEMQNH59B",
  "key11": "4BF2DCVXCVdY5phZKcJsZtRzKgbCUMsUmjoS2qvTZPsYm6GX5QTLUDNCkQuKdJn7eDFKTRyTYf3og16hp8myhwjq",
  "key12": "2jMsz1zGa7EKFYjgDzFzKiMzv9f7CWZQhuJipUuKsv9bxqkksLeJ6Bh8uUUuQPpQSESyptf7y6zvXPGp3B8R6skB",
  "key13": "62qBjFNDg6GC95N2ZD7o7LRcteRXDAEsV2U2b6MCvpAMNZu89YqRocmkP686Nm8sXsX4HzkJv3LwKxYDFnW8pUYM",
  "key14": "4zQQHArcCFqmmRvjq5tehh6CeFzi55XRBnRDTaqU1bBWQTt5YuGHzUmsGKg9B6W7taZrraAync2fUy8Wnx3R1s7G",
  "key15": "4kBF5q9Hq9sS5Vc3fRPGLAEwfYEmvP2a6adewL5MbNGGcnHbQ5iDy9z6zxqSWeMXcK7riSUkfQdEHx7e7UG5Jwje",
  "key16": "YkMd6c3GXJGshL8zzqXJaMxFMa1inEBfxVjMM9NNgKvkqBksKz7eYxi1oNyXeqztPrZkXYnzzQiXoYMZavLY3hi",
  "key17": "2A5uWvo26X5uhAnwzCJ7MrycedchY41XuUqpWBPHXU54Br4HTcerPrBnJdtSpUbPBmDocRVgy4oNwGrBoJuUSNsz",
  "key18": "5ddGLcYj9jWqr7LDgdeCWjXZgrN6bSwtCX13nnsxiujpTGRZMYWYj6pZ5Be4mn9Yw5Xz6qUQS9xQjNgGDNNBnWB5",
  "key19": "3oc22eHSqCFAsdsKvnUA9hbQn4L8w4nCDDuvw5PjGnnWVbrseFCkxbxFR5rApPdgKKCqmEHT46HgqqrDfu4fVj5q",
  "key20": "j3mnecn6XfpPmBREW2PpSkgZCkvJXLU2zHibdvkLNy6h9SCQPa9yrHyjWLPPp2pBdPys8VWATQRnMgDxTm9g8Lc",
  "key21": "2zC3b1bzuyDeK65fVGn12CMt7KZceVRhM1ee3R3jcxfxFKyYANS5ekw86DA8XUWwNqFn8tX6rV4H4BGj4E61VaLU",
  "key22": "27LQ5fqwrNMBUZcRG2bhsCDqfiQqwHAbBVFhw69vQxrEk9GzQxoLC1HbPRwNtsDQUcsLyBXCdnXJ36ekUzyqRBQJ",
  "key23": "5eeBqv8HUEfGkoK9i1aTqcNckpE3BGiJA75WC5RBDDtpzBbaTKdC3RFHntjasr4n1NyJJJrTww2tjrR9hp2yJq7n",
  "key24": "2P4PLG2TJybjzSz7gcN9QcCFJH4QihR1PuvPkkCoPGsN9UFgZUt1VT843qz1YWJQLKD45mzxFFVQ2YCdC8tmmVQT",
  "key25": "3jbSqpKPYbNufyvqdRbqtphomNwDce9QutVNGearX77ur9cHQpnt26avUBaxDaTwHhwA5DqW4iEQ85furqEiPV8o",
  "key26": "2so4XieCdtGJJTbQ9X4dFFHJqQ576zBPRf3bFyfhbzPfYiFibsZcpcGM2kvsPYEkGGBCazfZKNPX2NtTTmpr223f",
  "key27": "TiAXLeiM7DpU4KoMV1JSHrmdiRWqmNo54MWzXQAhHQcBdAk88Y7zEyboMvs5R8GQpETapjGiRQhofaBFsTgrUN2",
  "key28": "29FvNaxxCioyQmEL2vv4fst4M1VSFYT2XUfhLfqtDPEMemikhqn1t79Mrd92oR3pvMBuTaQEUEgHys2cP3iGss6Z",
  "key29": "2U1UbLcD86RzFbW8GFUwBei8mFdWzei8obwzD5ABKLVpXdSyMejqxRdVAF4CK6rHN7TP7u8HpWvXXmXXanJdSHaw",
  "key30": "5muDCPfyjNV7atzWjXbR6ZiBu5muuiTii4pYT4bmermLSVFWgFJLUWyf3miNQiHx1URCgcHgRbg5rUZbn4ZiDvr2",
  "key31": "4Hz5Rwig8piyVSq6wYkQTJDi8oqzXspF5jvyMEZJTsA2ycU7g5g3VziUcTVuBXRG1igHiGxRYFzVYyJan5git4hU",
  "key32": "fYydv4bPaZ6J1sDMGmJzreToGRNAZfnqvBCY9ydqCpAAZH1L3S26DNpNL7pwuBozHb8ydegjJWNvzcdxW5YrtCW",
  "key33": "LRFXLBk9vkwVDTFythQP3eF6rP1ewHKLwBTFcfMH3hWgUaDXg9NAKLgU3pVMq9G39dGeY5s2QafotnPSfqyzEQu",
  "key34": "57o4jPJZkLT4iMXypYdGxji9KP9WK5CNpQ94dwXDWEMtaUGFQnB2noAG4ASw8sPRrwp5Hmz77BZnQMBUF1cMbPHA",
  "key35": "PpDQsdjwhwx7amm6dTu5XDreqEDTzHth7am98PMndDgFwab6aJQLebSvVTWxGwkPXrrtLbjwo9uqWNj2CUppvNf",
  "key36": "3PwvjjuWHS4G8DhCiDjM5kE7Pva3Q561evNrz4fyHBgqums8XrPaj2vxzwtBZhNCXbLonbEgMySyPEvW76x8UzPh",
  "key37": "3PZVWWNSbKcJsrZaCGsxKJ9XedhJqanGWuJPonQ4KyURQuPvg5L3cho1m8qviwTbFmowi27FuuxjszT9WpovHpY3",
  "key38": "2vcSd3wJtmdhftkF69CZ5G58ZJKkdiXdDSF6FPt2UCfUWfoAS2LaYbvjxjZKqhyu6hsQgCbiyDJDGfnafF4Cd5hA",
  "key39": "3S5Bq3796gQLGC8Xq9awog8qKL5PUt2zCgz2muqbKZZ1rdQb8XskScAxDirE6gRCoHTDGqEQd3QKBAZd3fB4kC15"
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
