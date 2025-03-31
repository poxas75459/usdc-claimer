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
    "5S94sPch6RGx77wNQdorU8yqwaWSX7fiLkghjjW59otYeRRKAwHLtkFfSpfcLRo5qAjPP1YDSowU3NfrZS5H4naV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FEwxCLmzv1NXQvSQZZVekPAcZ41j3TAKSYebf4iHoHDbF9r3d7JvcoT7LuEFC9J6HgpJeZ4sjixJjzsxMde5ugT",
  "key1": "4T85LUErGNYKKAvJMZK5Pz9v6fm31MW2fysZkfkbgCTpFtQYvzSbUMu9zeLY6NLSNo6BT5h9dKtU2egPozwFhPcW",
  "key2": "5Ag1Tf9e7qpGNQCinZd1EngEWJpZnM421Tgzk8JiPp3wTbnqsfph8WPgRoFLWbw4qgfVJPK8MM4qkfxjfGMT4Zz1",
  "key3": "5v6deB3jdH7T8TZEHgNgqHdmBxXWk9uo68x9Tn2u4a9vJzn7fe8nqqc5piCXxX6LtGeVcrnPZcTnkh3NAJ99zPCj",
  "key4": "5JJB6r4uBVqbFBRKiuzFkbwPFnJx9XXbK8Q9nkL28xRFQnbvTQRSoZzLhqwsxwLy5741cKnBStHGt39GWuSD6fFC",
  "key5": "5yaCDQQsRy5hikbscpSiNSB8NyFLy1bah8JvrGxnoJdXPwVqs9wgqwagR3zEoWVAvz5t7hJMMgrvwhm465VJqeM9",
  "key6": "4YteXYaC2iuMsHEGc6eayjA5tFZoQ9dsF5GApXuyyHe96n86CnQp8NwLJD9FGahMbVB2Ehb1hp3oJjC7kkbzkRJj",
  "key7": "39kihKA49wtPhgTB9x23bMz8gpiZrCgDkeoQgtSLp1u5o7MFF6igLuG5EYLjZcVFXME97vXZvqLUn19vn2bQfPkD",
  "key8": "429kk6W4Z8muCjLsB5dXTgWCmvmPXbXS9CXh4APZ2neXPJwuPTECWyxiq64s3JWJQCgeALJK5cfF1MDKZVJwwk8K",
  "key9": "XzAhVFWsygGeNLpY7WFzmFxfsdBNqBJTyNfKp6LSQN1MFGCnkL94Y2JoQBHtDEah5xjuespmPVcwybQaSZ2U9V4",
  "key10": "2DpDpyXet33SpGTfS1XZudnyERRGGjGSs9azqgEQUZsU6gKVJNyQM2gCZmdc2RRBNWSw2yXQF2FpH5K9czkQw9KC",
  "key11": "5uKpgdUjC36EExWX2xGaF77WaJVotN3UuZHnUazVkrcW9udZf8hsmaSWoNgaTck45XdgV7956nMoyQo3enMK9HCn",
  "key12": "3A8UGYRZBix4bv5dQpARRnwXom11LV9tjsR5s4GRaxnDfZDqYszz2nLqUFmJwhS2R1M7GULU8RuzYuTpaGXwAWNc",
  "key13": "2JXJjycBstAczk1dUY8Y9PBbi79sbFSBUBHbhuCXi4Srp6G6drkVLYRQPQA5SFN3QVigDvYmgm1cxjgpAXJuRFds",
  "key14": "2R5aowf6oyxJanQCVarLUJ9TfY861725kmCm4XbZybmhpDkndK4WD6K6QwNcTSx51x5Uaw4vXfNc6yTEwzr8btSp",
  "key15": "e7FswcRmcTTpJV1HbE11JR7orMDUbzTDpXCF9ZNhfkMadXnUP5jYQdrHmakta5QL75b32XKW4uzo6avKzDPp2nh",
  "key16": "mzWoqBCmmKhpKSed1t9up2ad7mQ3jLjLgmxpa7yxGWyS6PAgLScyzAYPv4BcffJLCVcLF8cNR1uM4xTd9ajjA7E",
  "key17": "574mCgwcGfcAK5VoRaNz2ehV8NqoGAcK7VetWjB6ps3aHAKp3xaUrvyy5xyWRvFVVj81DoZ3SKaRZfJAAbSwbvab",
  "key18": "2LNrb5aQLjb6fR2Wjco12BfpTb6CWAaXcMrWVCzAM4v3AURzKbkUtgR4GgYaKxFjCZJzu8i4mdEP1enZFkZqxApg",
  "key19": "67SYkhZT3VpTBzS6ayLHuBTuvnzMX6yRTGFC3o2zPpSoTHX4BmFZkfuz65PTnRxMesN6cRTeL1mJu8zgGAnVXZwR",
  "key20": "62Z3gcdjhMt3bAdP3nf5WfUoRxmv9LMq8nxC75SEkcs47NcqBSH9wzwacYNhcHDFZUVWmzGCGLBfu9oUd2qtMHy6",
  "key21": "3WMg7stUEZEBCeJ3K5ACwTpRedC67FLWdTyspGMxhkbWjTHVM63pEwFXLYQRi7pReLY6dYXVt6oJGKbR9hyHR8sN",
  "key22": "4w2Fozpz7VfUdP1iMgPLKCiFieQQ4i9VFYGBnTXK48SAqXeV18G82nfNVmRby6PAtWkS4xvutpQCpwLaJEw2ripK",
  "key23": "4ac15wucybscEizwryW9fJgsgPX9b7NRDEqokcNhDs32pXYzJ5UXQufAjwknEn7qwChJFYZFnSN2imMkz4yeG4vt",
  "key24": "62sh12hGESTZGhfthke4s8cTQ4PdA1juyHCvwRg4eoQh9HgJdX1pWuavCiQYdxrH69ysf4CRm8JCk3mqG3Xj5HuE",
  "key25": "4knKPoffRce4bPWyp7GmDXXCYXpsYECcxYsdqMBKTPGRKEEhaFbywTYn8RRT5HxRm16khSPyqMqeLShkxQSbZh89",
  "key26": "TekbcmJSx5KyycbYqQ6F5XMhaP5UpZ69AF5EX1aHHGkTYPEzCpZDMDoZYmL5oejFk6x2hvy9jewKUurs5zQaTYj",
  "key27": "2Wp7ibsnTQbtjAntFmWTxcqg3fCEByK1LssirhMTLdNqtY6JP9FSmXyWEzE8CtJwJjPt3viSrNUYwomPyhw1Qs8m",
  "key28": "2tZjzAENPf8Sfn83rRYbFtwhse52MWPAiYMRDXuVfy7xNQpRNm3ZaZNrfxsGSZPe5KZhoEBMSVG9M91VRn7d8AyG",
  "key29": "4H3wWriYpW46Zgs63vufWS7njViNdNxDFbgpK6teVoF8tqP9B7SakyXrbQxpHtejYf7yARMuaRG3gFASf2Waw9kd",
  "key30": "5qCBs3pj9sZxRySJbdYz52PtCP1yBFW3MhPka4m1Q6UF91qgUdcj8xJm2S72oga7koL6kUVdBzLGhVHQxH5jc4Sz",
  "key31": "4mmM31X3kUX4NihZrKhiSSUtVZuUx8E5njLZnEKXeeguRVskjKD6gyJRmRngHhhhvABvkJW7yXqGuPGPz22QC9WC",
  "key32": "4Cn2T188rLsyj9YJ6qtXYjz29C6ZdmV8YTUNJGPb4DmrV93G5T5KuNzXfQUsoUHQUfuz8k8G961yFmvG1C2Ld6uy",
  "key33": "3HwCgy433wYk5Kk6n6XCUF88i5wuqMQJPe24RF9MHJpm6nCBU4Mbg3nifc2qv1b5AQAdvDP56zCLy25ax89oooTd",
  "key34": "CxG12M5NdTQRPB8m4eUKnzkK6s7GdYUANwmCnRg3CQhusBkKfvaieyLdVKfi6z4AdBhzEMyYhuH7Bo7V1eDsVxp",
  "key35": "5ifSvxMZtfFW3wwDFyDdMMFxoRweiMHu1rr68ER8J8HJ8q1SPjpzH8JDDgynErja1r4U9LwPS7kWYaXdjrP1mjMS",
  "key36": "2eHrm4KkQd8NAJWKnQ8QN4iSb9ZVAg1ZVfxqjWwRHcuiPK4YtMJeu4JiemvyRXJzxXZUi1XF5R3PaEm5o2QJNmo9",
  "key37": "saivz3jzYnBFvcKadQde9tDL4rUskwX5qv5SgqCf8BwKsQaRofufDoJY6SgVf4PDmtmipYPCDJxzrbuWvzMdLRr",
  "key38": "2mq6sgJcbLEK2v2psyYym79TyymykYnbvJMUD51JgYLHcBu1wt4u1fve6iwmxPYAcdmpGL5pPPmjRo3nVxGKHRmA",
  "key39": "3V35m1n93tGird5eqZqnte9i3cnQwWGB6jCgFR2SgUmrKwSfw9nm6ASctxktUxcS17ghdbmnerHWg12FMF2FCTAJ",
  "key40": "5ZMZs7tEc9DhPKwJC2Lkgg8W94jdQ1KnvoHRSvstYry8Vczh9t6i3T3DTU3jaHpwrizJk2P7E5Z5ocTfGjmc9LJz"
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
