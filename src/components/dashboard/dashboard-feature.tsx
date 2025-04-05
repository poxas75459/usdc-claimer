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
    "iXurHngpXoACwXvh4Pp9gkuKFbMwvykSekbvzTtXQSPEz6BYyq1HWnSzX2QVVZh5PQgsNuyzkkwVx3vS37J1Dop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jkfK7QJuYYrsrua3pQiHfeHDxGxY8CqyK2Yy1gr2yH71VVMTXrkCkFjJM6EA76T2pPJEmd82biH9A5LhadtVHGw",
  "key1": "4zGguDBFVcpvjxLRZ8QG32LVq6eFq7q7gaF3CrgPPhVRBXPVbbPR58bKVPm9YPXBff3LdP8Xspv1S5isAWdmgwmr",
  "key2": "TSoWiad9MHNcmKYpcc4gPjkdGrPsaN28EFddZp4mn8PX3FZuvqQq1PF4tW3ZuY7ySqn2isU66Fo8Q2daJgQUYZG",
  "key3": "43jmNrZsAe7SE8EpdSm5PF7KWcFzLAtkBtU5oBzEnYsQthng7EziJ14PEEffARYvz7kTPWVD7vbjSYWTvVcvVoiB",
  "key4": "4aS79XGQeKiZP1ebVpHTcqyebDKddLy6dAKxiEcEatPgaDjY3o6qgtSdgup8xPa2B3as6p6Gw4o62UXPEpbYqdSQ",
  "key5": "3pfq4PFYoJYfcZD1WE7srkUUdUobk2sDFJHDzkc7ZnoBvS3V2CB2NHpMpy9bspNBjobwRmYoQLZqeaDtC56Yvqkt",
  "key6": "PLvdphC1f31pAKL4thWaoRBEdMhzZuSXvzctefS8GK8s3NsCRZtfJxR19pGmoYsQAMuhvznENWCfWB3N3666j7P",
  "key7": "ssM5u4mwJijvs5am3noJFZwftfinqpvBeidJQXhusagQSZzzeLRB7uQ2zPvd3DyXhJAh21TPvXJ7ApM8bRoFqAb",
  "key8": "2X2Jpa6psV2TYCMmeTWwKPK3rKpAkkWsePuEeY2AxQX8KaqzVtpJXZTy7oYYfjJ2jrgjvHmwKnjGA9qLsVNyFmeG",
  "key9": "vwoxsGuKw8UrGwg4JQjWit84FonyyZUvtEXHbE9yh5yE1Yxmja2cL8zcCJ8U9a9Ea4JXDQCYp6Nfy1SbEiy2Cj5",
  "key10": "3JvgBZEcd2JsDMPso6yvJVS1WoXdgf6YC6tYHtUFmQqphaKHqaAyZ1qD2MBJe77jWWz4AReAyiWDcNCAp2WRzVnx",
  "key11": "2RoFxfKLudVavqouAEvx1AHpCAkXTs6eRhtkWa4Tv1sZvRc2pNdfi6MWpmJQbzhDMwjGXABVCgerS7MxAkgENWio",
  "key12": "2hqpzZVknKxADpdGJe7peJXe9ggkqw8vYXsBvaU71Hynh5UbGsmQxBrpfCMeQvAvWjeMQkzJKUFxsdZMZVSGa2cj",
  "key13": "2gj4uhStYf8iHkV9ph635WUX9tbCGWF9AhBhLiE3qr9YUNCavRPFGVcyLbsBR6j8bzFLgec48DmLDSs1FkkrjaQ6",
  "key14": "3KVbXxTMwxdKWGB9eovUiomW6NftkZrv5GHRYjnZF4EdYuJoPiq7ACAiUBtSPhw34NrQKSzXMAortn5eVw7pHDrT",
  "key15": "DHiJGCVmP5hhG4gaJNzVpXXsW6JRfkVacz673HdKQjySDpjsQSPXtNpvZnubN72eFYbh3zPBtQuw582eWW43YHp",
  "key16": "52WprzUMmxzfRZ55jZUVhizubScucBPmHcXZLoCqhs1Lin9NYGpGRj3WrUVXoWuJvo1K8UhnF21CDDXbyejHqV9x",
  "key17": "54bvNGeP7dTV8AM2EPrRfayeUqWdHzx2X3tALxfTDRDHHtZFkiQGc8BcBkkbzVmj59QycqP73fAMeVbxx4oeNwyM",
  "key18": "5acjGLyKptSwKnTo2kcfYUhF3qpUGMtLX5aG9f4ZSZajf5zXHzYibpk7q6AoEF3BrFVmY1XKswvsTcZRERFhtDm9",
  "key19": "3kMdRBFDKHBjRp82q4QkupvfWCD6uNpfwC7zyWskDRw9n4zpdstXALMfhwah5Hy5ZZd1GjaXNXN9fhyjCCLBV6Lp",
  "key20": "4uppDMhXzGTWkwo1qSzd9VWFyrXvwHTPHH1ENU5bKmzNY4c5FothcCcHfJs7PioN4AMDjMfi7y49Z3MRMx4kSN82",
  "key21": "2At2uHUt1hQG1WVPi2KdQhw4G5Rjqfx7tazuGQrDGFhLHLM1LmDmgQLRhdfxmybKaXMQGUVMSSkRA3yFRTVb35jK",
  "key22": "2wtDcVZM3GuBAvE9NpnQqs7EMSDoSpiPqyEFhw5RoGztLMTFrW76cm3qh6BA8P9C2q8PZ1dE7LsHpjgLBKfH85Cn",
  "key23": "2L4spWhrgKjfTJJhP9Hk1eXAjoR33kiXmeoP2i8gmWh7YyzKkswxjAak63GmUazCL2C1y9Mm87FDXhD11vJ2GQVD",
  "key24": "3YnFfsRQoVupCpyLFK1MZLDQYMXtiTMS8g2GsCukNJTA1hGr8npUtx91ujJoDvGKdY1dMc44DxHpDcmYG4UQYoHz",
  "key25": "5Cvu2QYwYHNbMpVgrJvVBBEhDYvj6huVzdLqC5kBhWq1nNWzXJj4Th29ssecSwDYbCxof9L2XnHPXRuzJ1zBRrxo",
  "key26": "29fvKWP8xMtwVFnqsu7L7thLPxZW92Ai7ejf9vZ2d6i3pMkL1uUeAgZ69QB6BiNNDDKUPNoz4sCENrTnjG6kCLPG",
  "key27": "2197SJ1z5DzPCENmnhNDjDvwsJJwDUU4frULvTddGgV2u5jYkezBGtwNajVrHC9dP1LN2HhXPqksDfoLEjfvjsoP",
  "key28": "5QUMmTwKojmpwMSoER2CPgU3t5UipZQ6jh5Cga5CkJmSx8VruYpK9eWtuems4TANpynibSfEb67p4g82d8Ks9nnA",
  "key29": "8jkkkjAZCCdm3TLkRuS9BDwgFqF99SPLzVQUnM6pJgdyueuHewhXBvPsez6tBAwBFrogN3zPScLkbEi2xeSjJ6h",
  "key30": "3sewZDUhAenDNVhD2KzgkyJFRiYrP9MJy8Wpd9WucJ7rkPNCcFTEMB5hG3PSeZjMvuDbCbabzjS3yCSNXNGKiVpv",
  "key31": "UjrfpMfvHcB6X6735oSS3YUJ9gLEPHJFsn1ixxe8DtrcvaaFtsKPEcq5H3g5BbPwusAEp64HqdsjXQYSoZvZigo",
  "key32": "2mTeawDzaogh7dunkGJdbRGKExNShsk1BvKNnY5dH9rKMUmtasoiHLnemzJaHZKVyGqt3uMc6AzAu6Cj6W6Sj8q2",
  "key33": "5TC8nS66GZLNqF6FovYsQbTn5heMZw8mPtCP51UGKhGiH18dqYDePZqn9critYf1a4JtHapGPVPYGxevTGs5Lc27",
  "key34": "595hLtbdRPrUPjd1PdSHR5ccx6GgvgGZ9D7MmQe9knpBCsTcoYo7C1ZRENdPvePxxDNFrmffZDqz1G3AHPzYYqVL",
  "key35": "4j3kgT24Rj9Xq8WxdFYFpxS3sXFqhm73vprVzs38RxTnK2wrExGJchQQQaHYHfLRChHDkDFJWgJ73jYLfzJWHi9q",
  "key36": "2oJBcfmtEdw7gNQcQDcJbN5XmtJBPVTcbS5AyJde6oQ1giqUcfPNpp4z7uVRcsmzhsc7XpMzA284Nukz4LuU6CPS"
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
