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
    "2M7iei6Ey6iFXy3WEcF8QJNZS7NucTBuuuEmHnSATuLkSSWmN7DiiRCFpxoLvR415PyPdwpyAdWsvHArp2eJVg8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNE9DCAeUE8e1kXraGkn1idbWrDGwNcgrFj2S6Wqtv45EFVBt5NogneEyuWQzQVqxtHNdyAdWqAqwy24sE1Vqzo",
  "key1": "4xJSbRc3aKq3iJZg31snsyjNhTbuSoAke4qbwCD1thxfzTXSPd1MGWVoF2JRCsZYQuXR6su3LsaYF5bqMFoDaCFb",
  "key2": "cWAwTvccuGYpChJ7XNpTuTDRzNGhPNb2GhAeSx2dxccAf6y4qvRQtxyK8hdBT6JYM9ftSTDZ5CG1R6yJBdTW5sn",
  "key3": "2Cw6qwP2PYxPvN69SSnVKAdANMaA5oubhmyMSVinTdLB2RXeHTyEVxzbSXtfU9XAFDjSFZ8S2LD1bN8YmwAYVkcb",
  "key4": "3TUS3ZgnLRDdUGjtnip1npxe5EydYFtjLat756NAd6YbpXftof4xYWrmsMBiJmWKDLhcA3SbyXYkGMrZ591e6QKu",
  "key5": "5gkxn3BKz8XuRT2YDXR2H4LTL9ZpU5DkW5HNCGWko56W649T6RmNDrm72VC3Pdk4yVs2QZxNp9A6Zf7uRbNtuv9p",
  "key6": "5oNoncgdKfGwmov6au5JYw4EYGE6RngcdyrDGX2XSZwwvRWMBqryGHnGhGT1Zdaia3Njdm2RJvdHp6Chz1KQetMq",
  "key7": "4a5f9sATU8maiXzdEfa5XopcKJDMNbr7K66iexZKgjkab5FsxP8AQXHWdN4ztsYJb2jjjeAQezAVjHTmdfHBX7Db",
  "key8": "2u83FTkCqz6oS7TA8hohhi1KFYq5mp6fJNHUCtQtsehij8AVzYegJXnRqTt9GYcyCmneS3LW4aTakeawt6Hmcq5g",
  "key9": "39GJiyfJJoNUUpsdpXCzgKH5i4nYsGg2F8H5PaLumfbnWCnyynGUvsxZUrpkacbxtaGQmAfycQFiDEtqhgv4N8VT",
  "key10": "5PA2rViQn8ABfyzTT8pS3QwzFAgzrWHc6mCQKjGGxBSi7qBVvfDVqX76pfj78nFpcU6MKBS6aFTPM5LAVBLcuVzQ",
  "key11": "4rQmUneDJL9FDs5hrpjmPHRcRupgiYfWSqLqsooEyk2JpYt7pTaVoJZyqZWosJ3k2tsCqEg1vMAL1i7dcKAK5B1H",
  "key12": "4HNk3wuTWmE14R3c4cxDKZtzs6BNwCDHS99H1aWvjxZtK1KZy3TzuYsiF57NoyejUpcTH552912AMLVSSs9L91ub",
  "key13": "GCkhepMxLfgnr264gdmQcbJBiWD2ydKvC874EjsuoqoXnHzUjtv3f1gES1EfC8RCP1n6tQkrYhqc93qTvrKKxJZ",
  "key14": "2T9gYihp8ZNMHaVwx2tyvMx9acBrN2QTnYHgBjNGQrduvVigWU66SJ7MPUGo9UAMntoi1Lyq5A9YpDFa9otqBV94",
  "key15": "5tMxTWzPHDnnL7s4DLAXDvYjVBKnTFfHCGfnp5YjdQV9SkU3QL13nx5GGndNS1fYiBzXusWjooEM7g57SxetdxUo",
  "key16": "2qu72RYUuRjGZL1aYdneMmtJCLYf6MVjKK9NXRwNjquW9q6y9HtsrrKSjvqsz55yiv4YbVUAk4W8NkwMmAqq4jMG",
  "key17": "4eVxyHMA2rraWpt1ZYLRpciWHB4x9v7ELq6ivvWyAkTBgvy8JAgbSst6f4eUTdESLjTppa2UD1ZLxp8HqcWmDcqD",
  "key18": "3vieue8o45mearwfbjWvXddDuz6DVTtXaPxYeSPajHMKwmsuNiHh1shBjk5yg5WttDYNXh47bMcAy2ZFf2nBxG61",
  "key19": "2Bzsm8ChkSm9xoqmP8bJGYCxhCk6aFz4AQM1GV5qqqsr1xBmJDisjiHG44jSDnsDcRRCT7UNWztvK2tcpQoCjko8",
  "key20": "6521mipaqf7hgTj6iL6kDCj91w8YqSJzdTi9zhMCSi9Asg6cBGSfzb7RmXjeXggm77BffpWFMYrTG9wKJ1AF1XGt",
  "key21": "4kfSBLYD2AzG4256R2ZZUhKGu2JvrWhkdCNSLVrFmF9hEdWy8HixjEyCeJ3mvGxd8LdzixKt2oR19PQezdYyYHVW",
  "key22": "3dGeXQ9kqtPHbSQgGoRWTNYih95rkQGzFH7VmRqam6UBt4WD9gdpoAJj3Vct5Yh1tA2yxvbk3HBTqVdHWunozLnr",
  "key23": "5m4N6664nRMoQaiKkYjYafqfynTsJyUeZMDmnDniepJVrymgMERvC91yBCyEfYCLn3kWFnssGYgKScLV5C2fj37Z",
  "key24": "65Dvyvjcs5qrVEPBuBuGjLuwjYwSAz1XKXz2dJE9RZWRgM8fF4FBKVn9TA2hLs7ybeMKDBdWNALi3ZVQT5WyFU1P",
  "key25": "4WbQdnWebf3PVnTWbcm4D3pVoPaqZdHBzmy5Be2ZinKx9aPbJaMp6aZekgrySLFnnCK14zgRouRrDbXncvHRtrGT",
  "key26": "kVUguiAeFqcMYbEySQp6D5inR2Y7emnAemKFcz4ZPZr56K3gDw6KVb8XjMvrA9J6jW7LP3sCJuiKpDzqNBTFuyC",
  "key27": "ggzPXT3bSbiu5qK5uyog4qtrwKWFYLMqbX6RL6jTqHjEHY3vUJ8fCXvMVmXBNdyv889NB4USefUsKvaZuhBcpPx",
  "key28": "axabQPC9KUS7aP9aDxGAKJgVJDK9Npku3ZunDpvWGH4vJPSE27vvHoryHW8JAWcDX1vGRW6b6bwcGefi6wiV1Fh",
  "key29": "22mYmCGShas4XFuATTqoc2D5P9buz22vtcVusAhKiebA6N39wPSbyD2xfN3svrzDB1toq48e79ifQiw1yXq23Csr",
  "key30": "2DuUwEeGniN12NbtiStzx84p4giwWaQpJvx8p3kYmwpczLA8F7r6S2sqpCrGMrKQphFguNCyRdPQUB6U8hQtsU3w",
  "key31": "4S7h2MpMQNq5vHYNoPCSaXZP3whPcfTu4Kif9zt3W6wkN9nANMGLobza5pEEwJPR2rNKVQHZn5ESQN7v6aMxVHVA",
  "key32": "WJL8dTcVpMFe67CspYdKtfYjNF2TYcNGayqyc2MqbxDqPva8Kjw7PHA8SSr3J2g1dVyw5eWkxms8sSqdXHUhLKx",
  "key33": "uvQsDGAyNq8bgwhxVGHb9V1C9FWyPSTm58f4KnFGevzik4tSsmZy9tni29r4w5NAMAJLDRFqoUEfVoEQkeQTatD",
  "key34": "23txBS6dZ8G8ymy2295EcFNSqPwet5zLbZpehN2e4XVvbLULRWfNFcjLNsCj1TA3BeyHrKHnz6H5s7p2dFw7rbd5",
  "key35": "5bYGBvydkqsJvtP2Y8Cd4sBnh1sDLkZBPSs6qwfYBwuUTEtWVUzvkzsHeggFrAsy7inTC3mVHLXJmgRFFA8PgyBL",
  "key36": "3krkPZPVYcd7UW2eFy861NJEMZ7XLKyxaMrEahjPHnezoVU7e4hVFmpKpcwf6jKaRiwQSVyZvqrFUdY9oh2xXYMr",
  "key37": "XTqxp2226LgMhLuWxdG88SLywAC16MDWdwgXkD2tjKZ3kHUE36L55M6bFswfuugjrAownGe1iVWesCxUzvSJMUv",
  "key38": "345uhAdMeWGSsCePGvc4YJVeSY3W65pcctuYQdDirLy8E9BLjDmZ4h25SH2uvCoZtWFVEGkt1m5gEJCC6EGoPqQt",
  "key39": "5cBHTfzDAZj12f2etMKTCJngsA7tYN24vvDwZrFXuy8EW1CUfShGP2zGMz4bgW6dA5LbdDEDicUXJSpeXVfgfNLL",
  "key40": "4AC7xBf8JcgWxKxemNkWJbp1rCzwNYc5fpmHyJkExW4UJJYULvU9J9zngBHcfrngvNUR3CjRZ37ucgbpK84tnwUc",
  "key41": "2Zp6UHvwgk3AoF6k5maPVVrczMjhsiLMLfQSuEg1LtEAMSrTP8FnCJ1UXbR6q2CkzcNQrYTF4WbMqNgxoEhvdBFz",
  "key42": "4vFKiTMZvLKb769fsuvc96e6LDLJmgTiMttfdK3g3KBB2e13oNhNKEkY4DQw6vnNFsoPi2GYFeAsM8SpXWU7FxEz",
  "key43": "5TypCkWMiUiDbPsvyp9ji8HwJRYLeD7PmPYdTyRMfw5itn1ZZbhA4jJKUwMqkVGACSVUPtgUFLGbHZCs24cpuS2c",
  "key44": "5kWXhGg6ry4UQNwVL3HU1hjnELpWdHvVViAUdttKzsLehygrbKL9Es4afbSPnMcErqzpHCNCjWf9vxYidS9fzKj3",
  "key45": "5utu8EYGymhKhDpPULVt8zVfcFKQy5VfrtxQdD79g66sRH1UPTBpvExvC81CCPaSsAd2CfcJaNmSF3PQ8HhqcXKh",
  "key46": "sx5MU4QGvKWrg2XuesaDqsyKEJXmgTKyAKXoDDK4ngSfk5RwVm22QdV4ZJumPbxfgoeV3fxAH8jdXgHT4ZvWXpT",
  "key47": "pJ9gxAP4AEgT143sajRYQzJE2onwJ1JRjHRfdYk9WaeytonRjKHLkhEDRY7Y3Q7tjihbyQqirDvT5WEpSPBGi4A",
  "key48": "3HxQGLgyiThWeHR2CtkF4nq2MrR4F6nZx1GQG9YfBXwypG5TT2Pu2mUn5YQciemkWa44DeodXtRm7Gy86qDHGAua"
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
