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
    "3zayrBKYNyT1dqur2QsHEPYWo95gh9LecHi3BB3HMBXMwfdYUKkiWwFCYix6u2J9ZMAbE7sc1n4JFbDfSMH7SeXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24hDfysjASKbvRHMyAiABhwdreGJ1Xq4MUkz53hPnyX9t8vg9AD8Bo8L6D5siucee8AqwuDEBx6x6HpaR3wvJrSp",
  "key1": "4w2bTfGnggW5ZamiQC3sdseHjqfZgX4puQUqjTiKSg8t1zZaeNwSfzuyHGxTycUvRZZGDVu4zj6q3kLBySJPk5ST",
  "key2": "2MSpwzibmt5Vp5Xv7ffnmJM9pm9rAGkZjz1bxpgwEy9SpR3ocbXb7unHivo4knios3Ckue2ZJ9EYrugjM5nyFpVe",
  "key3": "2dFqZ9EK8waAJXPygUCqNst8iX7TJDB7UjwXGwhmaiqvUdD4AsKq3pTronybiQQT2QJTr1Z42zaLVCfrTYfmk3Pe",
  "key4": "2LqvXu3jS4kudq7wFJC68mZ4ciTAntqAbkvxZLxiYFc5Rzi7iZbyeQVa3aSrXWmpsE2nS6s2xi9C3faH4fLqjNbq",
  "key5": "56ivmaWJP3GpYgdVAvy7o9PMrH4zbZWtBUs8wQQbak6yim9jQBUqvAJ1xjWtpMXCJXnDLt524RqvHvGnrdgtzomP",
  "key6": "352xKbiUehu5fZCLYpqEduC9JrogyzvBiPpf2DnNLMCqeCYvdZb2WYW9KnyUj8TLvVQYREgYYK8SSCLVUsxuZanx",
  "key7": "4MyV2JFePEmT1ooESYoTZw999MQYzBa8RRRF5y3jP3LqqBHNTdM1n1wAECM7AJ6jhLxBeReR4ZfKbESdaxPHVUvs",
  "key8": "5rkvEqKdbxXpPfxdfQd3u8rV2R8TxfjbWGQLMbqLJtYgbBGUeTXogDcukaqNY49FSj3vMy6woYEkVxTSCAwwtsSo",
  "key9": "61bkawQNDLCvMQD2Pxt9FV62DEEWd3SRTMrrWquHMFGutVgZMSFsjzVUUotc26HNo1FwqZNLeRDF6ui4KeHCAQDY",
  "key10": "5G5FPNh3DU8XP9C5xaCgHQDXWZobv3LZ7LTWmRZSqbcABtvQtVEVn3Q9CfJE9XeR4txy2mY8voTRVgJoCKSoghpo",
  "key11": "2m4jKihepLZSwy78AcYcUoCCpZM1bmYnZDiJay3baFcPXxbBKBP17ccbTExKdJANsSzKy3G9riS7F5xBDTq68E9T",
  "key12": "rq9UhYk5TyV1n5tdebkJNNuV6xwA2pgJgzXrox98vQAbUgkJ7EF4oMv3R4aUv34Caez5tBtDzLXKyeFmx5kJ6z7",
  "key13": "5Umt8HGqGXQrnUdwx4C3YayRG9mzhoS8YvvAD5nM8ytHZxxb3Ndiw1NeUX8JeCvMuNksHipUpcEU9gD3KgDH3bGy",
  "key14": "GgPWZjNrBu94k3KmssfWDLsbd8K2Vmq1snmcBZC9ByKigUn8iKnZvNgzCarfdCBn45m2qNHmXrSF5jqs1ozZ2AZ",
  "key15": "4cPU3LzB1SyuNCRfCpSjEfEBxPAa4zwoHndu1DjMrLMxh8JP5ATT9H8rfs11PDtNjmmt5J8NFCYnKNX32ENsmcST",
  "key16": "64tPG1qu99MF4fcnsPSu4aXWFidfNMbaRgJNbNYBd4LSsKkp4FSRJ8s5xNmCBHdGefDDqvE3ZyzgHs6DCufbmBE5",
  "key17": "3QZJ8d8LVpeHMh4LtDS9dWx1yeeZzhwMUYmW3T3BYa3osKn8GtLHKjrWy9dujpX9VzfteLW2CvCGALG8sZPZs9pX",
  "key18": "4TjsGH1Jvj67fFH5HMt3kxopGBQ8H76gSjx1SRvKTjkCS83HK7nsJmv7rMfcn5Q84HvushSHWwvHVAtAYwxS8iRJ",
  "key19": "Nt7oRDW7UqgDrRzULqC56UTQU5bpaZ4z4PuS21McG4iQCsTBN5BnJ9F7TX2inSZ7EeJLXEYopAyyZNURgyBQxRT",
  "key20": "u229L4n345NV99XQww4VuMXRj1vv86FK3hsGBrfcWhhAH57McbLPvkWpFM1evA4XjYvBvmt9gS7hR1ML5DSdETr",
  "key21": "XBcd6Wv4sQ7DYx5eGLKfiAX26BS84kgoELGEtYkYzMz3cZC1eutrEtjqStbPzawU5jgbKhGq5kR6vjhoJBrdqTP",
  "key22": "G5KoUJFpZgtX6d28yA7PxkohtkkNKLzu8CeP7Tqn3HCLjE3fnsoANN6ehrEDD7Nz1bUu4hxmR4w69XtHiY451e2",
  "key23": "5vmUBDemJuuawymbNWcay3TeXCjiuKdRaA73T6FvyHwDU1hELmJz8s932hrVmgKCC9HDFKEF6HuYHnjCk4aUYfYk",
  "key24": "4m9ZrLk48pP7r1xkMvDZ1ZA3ndMQSiw6ZWscRJrfaL5pVaK6ADh6v27gCN33Yg333AkAqXrtgjbHwGF84QaCHGEX",
  "key25": "3YVbnmah3Win91vPNoTPvmgpZ9tMKTfCLyycgCjMq8FJVDyqAaM4dEnBqKqmJMAc46W16QQsmdYQAe2yTPMXd6jF",
  "key26": "4NQYLkM5NjwMuSSefL5KEx72TnrsHkVRFBvJDNBk6sHHeotW3vBVyxfrRsGiBYdHu2w2WCsHspUCBtcPGiqMuXzN",
  "key27": "3GEAtAisjv6tncYoKPJ1L3i1ye1zpqBjZveJdQxLtoQpugcheZY2RyHvywuZJmpqMxqkmcQLBCMWA9sUbNZne4fb",
  "key28": "zqY4gAcgTsHisj7DBk4kHzjgDZZfWka1zEf3NcqXZNXeJ3KQSJmJ5brhrSkmsGNDAtQnpcYYR56JyX6e3gyf6kU",
  "key29": "3hZnXEeFyEQtmmkPHfpwBPBktph4AmzvTZ8o4bWyCuxvPke6dGseaDfEkRA7DkD3FXuifR6uLMiL2w44ve5xRksB",
  "key30": "2zFAsP9U2rcvBU1bffauLDL1Wu8cuw8iD4c6qajymTtLj2bP1T1kTMbgcQz1yN9YBwcz8XxhXo6gxaQo8jH7sHe4",
  "key31": "4QizEkMkyXEx3aetcmRAKtovTfDAPGBPpqbmaeTVhggcSebVzuT6azqGWbo8QxivUBntk6TEKk58jDdJXAmZsVfQ",
  "key32": "cmrFYkERTKzgSZZPv8iVmD9sFVCB9GYpUfACPLtxfvCtgexM2MgTFyfHKSpWrGVCLQnDPRCFv7aaQtQd9H3s8FQ",
  "key33": "31xJyuABWB699wJFuzQa3uorEoHkH7sEFKKgChnjw9JWMrJuQA8VyDMkjiHoxS6AC7YUg5c2ZbnaqQkZ6Ps2D1tw",
  "key34": "5GqXLwgT7vtuoFxmcYKxpp3ZkdnqLTLZE8u5uEpqy7nnegWPDcuG9yqMQ5Gu3jvYVS6xkR9eVF8JTyXWW6iigyQk",
  "key35": "4rEBsnyTZ17LP75d66LdcYVr9bFbMzuPajx47a7FEo8dkGZ1YCsSi4TTHxX21nr5DQNjuteumNnkvGuiPedJwZpF",
  "key36": "33sSRQ7JijwcDFjoqiWwEcee277tt5namM6jciJJ1uovd3tzAD6eyArLXk7M654eQhFASceJpgbfHA3LGt8qgBWb",
  "key37": "2WeSfbcYSy3ot7LWkCSPwoXbX5MjzTsEVZ71xG7gZ5cFxRqXaZKpQzUixmMW4X6JjccQjbzTJXm8sQeP9PpihGfg",
  "key38": "5tcRYTduLxK5fyK9Mwkfb5e4zGoiqoZL7wXt15XVAhPTo4cikyX6ebkKwewBjexeVmF488X6oTSJ6DocYy3Fwx6S",
  "key39": "3N1YiyAXmmeb9XRz7GgNgQFtvb98KMtEibSUXgUHJmUgBkaR532mB8VNBkK1soSipUxPXDR2S6UqDupDZi9nm7rf",
  "key40": "2bwLC5qS3MspuheGubAp1z5Ln9kQux36ANbZBVbTaCa3sXBA5SUgL3X4evhezJ1pcKiVJJ84pe6tme4GhBZ7RzTF",
  "key41": "33MJVfXoX5WVuPASZHrrZaJqz82aXfWf2LaBc3wQvvXbh9qzTzuLm5j6ExnRDjzFGP3AjeJWVcQuDFZtTDmRaSgV",
  "key42": "2NX91skaWXihVC85p7y3SWf3ooektiwWAkU3MkVpMJj2r4sUuFN1p3AN4WYAVd47iYUwUmi3JLtMRXqYpGe9fHni",
  "key43": "3hd84Cx8ysEBkKLNxk9dQMSWPH8bzKs7y7ZP6M7FziESb7aNP5zPFJesgQpk5bCJmbQbeUu3EZdLSeJxW23Eyxt2",
  "key44": "2sNQRZS3KzRwbdkiQGtQeH8FjqGAgXG1ojwhUFBGLHZVTJoJTmf9DF6UevqzJS7DsEsAqDbq3WuVrwjrj3RaycGa",
  "key45": "qXFGsDTW2nvaq1gBMi4n3q9U3j1QZZ6ujp2JafHKTnXeaWrXzpg3M2uV5vpRz1Kr75gqRv5bTJAaEanocsYmr9m",
  "key46": "2MHUxCdx1xWQR4gzos7mHuSneRCCuvD7xsRq4AGwC6SSzWiCK6KXaxMGhSaexMR8PxmAeiz6bb2sevYN83JEbuXD"
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
