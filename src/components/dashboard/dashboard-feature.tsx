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
    "4XH5WrtNHaoRtgqWb64dPNdbB8bqM6k1fVgBap421EtNsaMU4bpJUTHJHFYS4tvb12KPRRj1tVqHubgztWpsbSKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dBx6wDEHY76VSpay2f1S99EegbCeuVbzMYqcJewr1SW6ML9P4yeZHKZ1gWA1V4MnaqfQzqYZww3cLBErGgPWKKk",
  "key1": "rUtExMquEP9Ts8wHsZ78XvyVArH7tsPzZE3r6trcYhZHj57qTCWCJbeqbbkqJEMun9MxrUMwmk5WRzLCiE1h5VR",
  "key2": "3P6eftQd1VEBo2yFARZQmqKWAPAjgEqn6ftMt28ZHHt81WoWgH2Wgbef9t6BYQBoXhsLvZ8nJhuUggiQrsnAKMzL",
  "key3": "4fyGw2m4kpsa6kUpZkeoHC7HzXf1JQNuigCvfxXQ9PHZpfRvAa1uipyZzNDyLZQmZRXKQu8DfXGb42rnYDaPt48S",
  "key4": "34qiMqkobYgzAneAweQsi4utSugDtRVLVWthZNkFAXPvZjhP5AUKQ9rMsAn3sA4xFbT3BD93UZ5ufqUDVzSMqqwK",
  "key5": "2Aynv1xebwMuCZXGnNNT2tq1RaXh27c4kpTYe3BxbGwEw3J5RXuSpg3mLVW3tbRJKVMQgrwe2zbmsm8wbqCasfiU",
  "key6": "3PGQ9XQUDerHVPes5k6G6e96Uc7YoF2UxZVPxnrf6seZqVqByttKqeQCQZu2CWtGirP6vx2qJfAo5WhTXtFfobjf",
  "key7": "3XRj9RHprnrVBYjMapiX1aRbnGfmzLByj2QZgkzTNvQ7ExBRkBxR2ePNuXP6m9muabZFyBCaPrafKKcvo5UYHUxx",
  "key8": "xNNFfnjp4z5kTZkF5w5wsKEKrUh5nv8cZenBVaqmLRJgYMAnk1PPzfUJdREkM734e1mi2gmxHSx3i2KouVeDeSk",
  "key9": "5WcwVdDvJ1hrTjbDQpHCDURUuKttTmcYjcBtv6XrpHKqcZ1vvaKGJdXQvnvqizWmPbtuuvtxsb6EgVcPWU86PHGS",
  "key10": "5fNG7xyVDELex7p73gjGrTKsbwZremqUBXHXLeBYZfcuvoqatmSBCTfqgaeQtZGBGTf874EPfn7Yw9ppcXVbcAGM",
  "key11": "5CSc2ak55wSGGgTzBJsTvmXakCAea1JAv3LDxQymxeVFpM2Kv3iP6xfbFQqgM3PPcCTJCehDYzsd7wbh8wmGmHZk",
  "key12": "2nivm48BHJGNbRqdjzLayMci5kUpMN74GvVwn4Q6QonbwSYr78jQQyLwtJfJ8JdrriSbxnrrrqbEnLwd2YXov4JU",
  "key13": "idtTMrxByhxr3QM9pSJyE9tgjbvtBthHtSMwyHzkNT92WCY6dFABsYnXma2zEsWbNv2rwz2w9u4D4n6FQ6YFb5j",
  "key14": "5n6gZbW3LdYvQSSZf4a3FakAk6aMJmoysJdJqpZtNLhjQQ8Mij4es1DEfvx7PBsLhUe7GB8qdgcMdpP92vSVkV5Y",
  "key15": "rds7skp4E2LtB49RJXWcCv5DJs9uwmRPMMGi7NkKmug9QkW2QAPvLuGXCXUKno77GGhHcmmnxU6DfpMs4vHxw9b",
  "key16": "29HAk9bffhHfav6J9drjioGrJt5gjdF8eikWR7Dcc7ahxBA8wAP8XHeUKT56XK5KqKKRgW9HyL5NhRNWCnGpcoho",
  "key17": "5VnpD97okVi48Zo4Wn98Lp5Rv1JV5KoEha15b52XbsvM78cvQzpPjhk7jK75CcS5vbHz1VV4v4WXWM1j4mvVUrxt",
  "key18": "63F6nWEhxt8CS4f1tdXpAwK26cUXfdbYGahfRE3YPzVHkh1pQNTNYBTDCaM4WQy6QB3EqZSF3SUGbWdkbaXXjgJ8",
  "key19": "46oSPz6airctJ6BX2NPsQEmhmHv2nqJ72AFUFJdjEvXVrRyygLMCJQkLZZVsved3uqVbgHfVy2p4LtiLTFEG7Ysh",
  "key20": "4EgxQiuqmu9mDJEL7BCPPqYGfE9ossFg72LqDdB4qpc8asz2wPg8psysDZFRgFrRRncBSz6PgYQwSiZx62EKD7ry",
  "key21": "5ch4V4qTBeyJ9Di8799eDG3jqLV6C9WFXnUV5rD7fDx6HHuRfZYVXjUFV38HKtThUPPiL1s55bZq4uhTFdVyfVRt",
  "key22": "2rqpwY4SqGJivpozgUam8kHdQMSnG4aXTjhsUFetixYbjdVXHV3NWAyR2g9dNYaKs18js3YRESMmLbEhrxaVyjcL",
  "key23": "5WQJ2PKarz7MWMwLKxdg8xag49SPi97SU72ka25iSi7eV8VmRw6cbPETVirVEJDh8J3bPoifXHLs8hj6uLUD28w2",
  "key24": "48Dgn1fJwm8bVGRRkXVcL8AFQ1V6ofrvvoKQ1zRiaK4WPbG38qmSnGvah753N9RaSH7avyN41Hqore9g4gnB3MrY",
  "key25": "4txs6X48WNox5eh9LV5diwiEdeyTpyzHQ1dcGQFPJyauskxQjKDHuFBoukg1V4pnD4UuHJMJPjoihHd21iu2VJco",
  "key26": "jutPcQUeG7jy4uhcc9SniE5KT3jyS7nSG3MbcVA7Z2WxTr2aXp542bmyFjbW8tKny8iPdRt3bpRyGjaZFdMiQhc",
  "key27": "2xZRSEm8NbSjXjSchYQBwXWJXEuoB1ixexXfmf3RvYE6ortk26jVjDz7zjMbpLGJpy1WyW5mePpqWSAFCozc9ACD",
  "key28": "5WBoJ6JYjmnrN9HGF2wSLAhWBqV1vSwjQtY1AcFF15LcHRVr6mpxktZC7FiFApvrCmpC4x6RhdAhqUgLSjr5GzaU",
  "key29": "3p9KXNYAHJnqJnbiHjZ8SB6theEQ2mMsmtp8sWLovWKDSXQzJsMUaBUvbpZnfaDGLaKTbbNrmnbiYmGRrAoB3XCS",
  "key30": "3zcp7oEEB99kNsBATmaJXWrJmpdAe6Evq2XZxViCXY8BmDyqsmJxG8Za934QZuZvMqrnrZJ82K359jJNGQU9ThA7",
  "key31": "4MtARAagp7GngdF8d5GwdE657fwkcFAuyLRnemAsz7XnPApyx56bc8E1N6JqPz2iUHNy8oeyUffPxDsrA1QNwdHK",
  "key32": "3KDrGaw9nALDF2uCyfiwKqm63AeqA4qdfWR5qAJPHFY8SmuCDi4xSgxcFw8hPhPf5KJ7w8cYQjXMXqfSz1U5gqPw",
  "key33": "3W1N6f2TLEUnCU52FyyUto5QPQUSE92T62RuPfBzpuST7pKExLfoSySmaVeUHP6z5TChQb9vRpVVX7cqnxuhRAVm",
  "key34": "5iXrA3upXqVg71kEv2yUCkMczojkgFCxTTxKzRrtRXdWhof9rqWhznPKSU1x4hdWwxkcu8pGyL9Sg9xd96VT3ht2",
  "key35": "UqtBi2cak1Rc5AbuXvdeZYWDKKMQwmTQFiQvSNRABRsF2hFzfbmVXPfb9W52B8ehLnpcimJ7vXSjV6EYZCiQCWH",
  "key36": "bW9SLVk4ovZntrQ8BDRa7E6G6gUmepMmgwkEbw4XMmQi1QTap8d19mNWxvEGzWYjEbzcZrtXGp32N2oWqW1PkY8",
  "key37": "5xUtCtyypkvd5PeqZ9BKgnzZWVxVomgEuwDvV5Pax7ydoQAhK2q78i8DyCV4CBHhLcKvftGwD9hgJfXghoRt4qyr",
  "key38": "XqQkzxSE5Kd2xs2zem91R782UEK7Vf9N9tgXGCAyp3MDaEezQBUmA5L9sFGspL9UnCRvirx1S9bhA76cqbeWvpF",
  "key39": "3Ayn5EDUWJbmdKRARJD48eAYg3hfG439Ag1GwJbh9EWGTiFscZRrHxWAj8cZLU253ERh7sQbV54iweKsM1Wwifv",
  "key40": "4wX96Wh2WMmj1JaPmPhKVHukijU5cXBJHDKHL4TTym5KH8XfbsYSktQ3T773y8Ejv31AEzBibtrpD6fmwrsNG4FD"
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
