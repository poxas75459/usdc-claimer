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
    "4StGgZoJhg9a1NNfdZS8CsqmK47kiLHRaBwNJLp9QJVXq9wT8qYzMLJGHmEEWwKf1vwFkg1BAbdFBYYEGf7Y4aij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mVV3LArRjZPFw85zdpLqfbSDdqmWTgLhXMQ4HSGy8bCsZbkNGGMM5JxFqaWfbYXu3C2qSytDbrDXaqEUnAgVwj5",
  "key1": "338fmgzqu4Lbm1dio4U19Nhsb6YRZYgVZCKuXqsdhHdMLStPc4bGTwthRojiQphqZvq6DKPx85mVbfSPBmDA5s1S",
  "key2": "5MqmMA9f4Yq6dDBXjJmrF4LiRSpnKkcVmSFptEH3DQfSCWuk9kdHrp356AgBraTGKaZLbXBZSPr9vN7uxcfEguZd",
  "key3": "obgBhizurgVjyAdFjnvZLJVzMcQi5j9xU2vAPLcZYuLNjdzGgyZEykVynbRzgkSbMzMthN5aFZxkRPsD1rh9GUC",
  "key4": "5ffhtopkXrPjENcDiikmBixD18Ynoat7mYfmhXgMLGATYVoZhKnWpVE3cbyVXtFbXwtAsBBLsJe1TfS4Jzc8zRAW",
  "key5": "3jaJ6mUupdnTj5edB3weu8xTXdQtbpeuxGb8hQtm6gLMZprh7Mb3X97eQD2tp3KDbK1oqdpV7kQ5EYMhfxMeFBAy",
  "key6": "21oUJK4rUKKirkTwRxsUoSTXPieGPMyyV7jCGyvjrGeg4FqVx1QF2t8XpMpjJEkPKGo2BwGE53efcn1rsLdt9fvF",
  "key7": "3j7wnrmhVC8hRMYQp3iPYs4pf21Gmq511bwV816cLUHxX4j4cUW1pZ5KBH4AYmYcdWYwVXC299yHBya7sjFMoUbp",
  "key8": "2eHEBXtWYMvWXb1EuE82qJ6eopGp6o14Cbt3ySMvA1MyEdyVKGT2hqPV6hvHvvBz6aFCDoJ58haR1kbcMYPhCS6G",
  "key9": "TbqQWfvzxuafsuH9iok6kB5Hw8gYeKnzxYpicjJ1wJViEhyXHzBuYEkniGjME7hbWadkX3yXEhUwReUig9tk81k",
  "key10": "4yEwVGwQnAUMaZF7JSKY1F1yn8n6oqUEK3dBgTjyNnAbTv8Ay3baq8YpJuma2vFN7WnqunXFGwEQKYukCDBKknJb",
  "key11": "3BooxduHbxnzhnn2LmHTx2fwFCPG76s9va1gGQ4YSSNp5NpH88SJsmuVs2mjk7PUQ2JqaQ7V42VCLsysXtr1SdMd",
  "key12": "5cxcUtoJiJmQuhb7iwmrvoPxRqcDb3FT9NDgFFdq8mFejq6avs7SUJwzbopnhhuLXjJtrKZatnkAJZrDxrxax1VH",
  "key13": "BDuzYKJrFo6BgEMz6DVmpG4UPATWZjsWJiM2sRUdcQPkyx7Sftrw8Uwh4uaPzrYwmBZ1Ftm6CLj28ze6xAE68xS",
  "key14": "31gewVvrWQ7TNEAmujUknPYLspms6jyLMvSPjsd7zGBtShQyUpk9rmTygkKfwn6ugH9AfMXpuY6m2hSpb3N8mKH5",
  "key15": "27W4FcwV8Dio8kjkc1Co2YLBVigwagfEJupuXjRS51TsKqaju44nPT4UHFfFcDzZombxAC2YgojMoQ4a9jsaZCnc",
  "key16": "2YkZsbeLN1RsCNNGPoUSgUmKXXoxNNvdGnKA8Qv6n59hRo8Jk3EkxT7TS3bdSNgYvGQe9Hg2cf1W94bncUBmtkex",
  "key17": "ZiLLGQWSKZE3ceY83FVgk78nf1fHfsmqBi9dwonJhg7btesxmn9iCV3m1cWn1MSzF2vcKxRyTa26xh2Sy6syKGM",
  "key18": "5JP8nZ5ACg25pcW9naB9zGLBuvon46xfcRG8ypXYLWuuL417vg1oNETHtaHbKguXerB2YGdLMNpVLyvWiEGiFvJh",
  "key19": "fvdsVkBz8GQvHvS6goZ2vmQp1sZtmiCrYEMpNCQCDZu1XoPfdzhaVfWJk7mEKbeSHdbweEXXMFF2hagfsjpjsDi",
  "key20": "3mSxn4GEWXZzb5zWpaLWQ2hhpC1uGEHCA5ymc4v9N8G4qQF2rnr4XyV53Lnu9szUE1y9P7SbCKpErPnp3e2ZzBwq",
  "key21": "4sK9d6Hr4T9mVNCnhwiknbmjfYEdYj22VbUSdk4hvxezGjNTb5XZNo3RWHav8kKQKEzmRG4gYRrzWL9iegpXuHVu",
  "key22": "3gjoZb2ahRqxGyeQeoqeiciboHadziFQVhVuyHE3V8Wg3WRchps2vbxeVS3WATW9oyGqaSmEHAyiSRmV6rAuBEWi",
  "key23": "2WMVKFXutD1oZWCn7Bu6PtijwnpMQUQTtzaZLPFD9rgNMFjRw2KJ1j4b4deHsgfbAaYeBcSeccNrFNBPoPonKK8d",
  "key24": "4BBLgHAtswne2Do1147khNQeZS6s8CwxYtDKfBCvCWQETEqtipjD187bfKngGqfMZRdrEbksFjh35QbvtLsz3GQa",
  "key25": "3QL3CwiR3EN6fXHqqzp1CCgtHgy6ajbVcKJxVgih349g2wmN3K3cURjuUpQEBwxZ2qgGsCUTwcEhVMpEiZbsC8hz",
  "key26": "61gazEXQpDoob5KDijEzKxhQ6DmhkL5xncaXDTqphpnbdvBD2tqTpaDZHhZn9WSY3FNJmok7kf2LYoSc6wRNGmFY",
  "key27": "3XSLpNLCSZwdbGLRjh5jyomujzZsSKBB9K1gbdFH6mtK8nXc1fExGzuVmnKcKNA1z4XgjrhKF3sxj865PJz51GW8",
  "key28": "5DbrzMG65tL4VwgDnRUy42tHsse4dsBX945uY87N3F62FtJobxFdSQvEGAorpVMMfWMjYkRym54USZTmCfKxCg4A",
  "key29": "4Qc7horRqp7m2bGqg7ngrqQy5fF7LyQqFsG7GRnc3cPXKRpAz6fkzHEPBmYMCjebdX6nt23Lvz3arVTqMTUV8evm",
  "key30": "441g6mtQwyM3vk2SFax78sZZ5Hin2kGkhkqQWmUswYu1WFaL4hmNWhWWs2W5kQfypCEWaG4HgzCNpXPoZVQyxnYi",
  "key31": "4tLXDnJewiyMUGeSFNRoqqcQNqZNweUY82FR31UwrqpcNMZj5gYVwVGyng6BNJynkutXdHP76E52pZ1VSreWrPmG",
  "key32": "35viNjziBbsgcYPjWjaFUVL5yq5Q88b5K5tdMg6kHBc7aGdSw1wQLn7QBdDEgzfevc3G4bATaVY5XKXGqfudtLg1",
  "key33": "63eoFKbDu2qQrjsRcjY3ANEGvVJFBSQpN1o79D8xpfSm1LpNxkVxTTXSJh9fQCBD6iA8zTkh27pPdEX1gHedBxpi",
  "key34": "5tfG595YFRkoqXnBVtafetNwkjLK9ofU1qxpot8E2gRd58XMZHXL1c4gR9L7b4BuW6gWjAveFp3WriYJZS3Rn4Qm",
  "key35": "4GMQ1HCRyzr4eoPYfDAiW5cC4wzqdPD1ZV1msYqWVjGEegeNhLnydWS59k5Emr1tQRbYDDVHb6JL6XopTjtwCizB",
  "key36": "3gTrWinPoWrXtmEvtzUFmoh79DayKAr1FNQ9bLkkUehxvJZZLCPvnXkTk3j9CH3wLE3NMWYZrJ9pHS2KBAzykCMV",
  "key37": "H2tKVFjniCA2gUj7zdQFc1SiBY3wmKyWV2iCvPzac5SyxKE9qbqrc73GUVVhoBPDu89gfhCYX7enZZ4NxGFqukw",
  "key38": "51G8S9HxzBNztNDbC5v4wTztkowRcLMPQtxu2ndrftjinTE8iMsqHx3ZWr7JRXfeWZhSD8J5MsA3aR3xoQVZTMYT",
  "key39": "5fV8R1mmQsVYAdwpRECC5n9EsRTWVjbTb14u5HDhFTifBq5NyY9TTQvGeKyboVnV4dhzZoDu28k5sDRdrcAZWR2c",
  "key40": "575BUPZnTpGUSGc62DUCah3WYuw3Kq1eGW6HpFd1Sq27NWsgbKM2hpKqAtGzwQ6V66dFDnUeNoF8Zx1NQEaKEfyD",
  "key41": "2e2aDQWVcDTTapxowmzLWDXkN2QijMGMXqxE8d51oqKqKJDBjHDux4bcTYoXJKXRbT7gRFDjYwBBgFt7744nBNqG",
  "key42": "3EBaABzEgCFmFLa2APQYCi9sGLYbnWquwJ7yNJspVKCCyGRxgRK8GyERU1r8ew8jFz3wjh3KaxmRFnoEUCiqaPvZ",
  "key43": "3xYWQnvHAJUy2ZxD7SxdPRfQ9VzAAx5Qb6XNWcDrEqfmuQwJPs9qLo6z5Wki8DRXBn4XqhYNY6pvXTXqqrNsuncW"
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
