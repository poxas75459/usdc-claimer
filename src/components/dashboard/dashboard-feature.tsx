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
    "4rFoJtJqxTSVJvH1hNPnU8ooaEdbN5XXRPniV52dkGPbtPUkWK7Rqh1Xm3gbeU3xBKXR4ERnRGu6TiswbJeD6jhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B8PLNsmN3Zw1SwQ6rEyxV42sbmMzgMhvCFLhWw5CnhfQxNbKEJsdGWZ4qnqCqRtDbSyHCZ7zJtFPcNJRy9juzPU",
  "key1": "YmUF1hDyyXWfW5rXYReAfYHibotPvsDESQFmUNTNw3rAGGbnziMV539n35ZRMLV37GrtuiqhqxbhsSCvrnwiTgF",
  "key2": "QXcDg5E9mGaAkHR7r9cDq1HhZ1KnhWgDZ4sAQ3CEyMbHtGLPa6AHZ2ArPqd3Q4URmpwJQQMvEDjcHAgVogh5d26",
  "key3": "4tu8AuJkcnnMeZLGuRUZGKxruAFfc2EPC2P151uG89zkRDhQmEyi8KfSJHYp8yEcdZuJTVKtZzkSpcsoNK5qJsAC",
  "key4": "3rDD1fa8RV9XXdY3rZZknpAqxcQiCWNFUSttQs2HLA225oBPtDtJzC1cjMsK8QqBgFGEkf14PrgBrwwqhrcrDTVL",
  "key5": "5JV5kRfX9jMvFDAkXmtmYwYRbzHGQ1fQ2uRcw2p1S8c728PjpEEwSXmvizhNs9VtmBmVsVg1EuQ1ycdrngfX9sK8",
  "key6": "YutABLnfaHaxwZ6RbNJapjiG4XqoAdP8Lr2qKPwtTxaYD9bo2a1EQCmSWCZiBFrCuWUP6ZYeMTKe2gwUE5eRBDc",
  "key7": "5p274BaFpiJYKChqRb6c6ckigUoUv881w5Kvf1cyQ4pfkMmXabdeeBHZpUq1qaahPfsutXyn24Sv1Lb48SoUz5uL",
  "key8": "5o5gXLUsPjnejY6YznzKg38PX27viWX53phNmhncUY2mkQ5MKpZrN9PUYgfyGuTkD6LPaYD1LiQ4Fuo7iTFUxihD",
  "key9": "4nQkffQcC81FsBpXwZGqEwFEvV1HyTsQshmQprw3MiyxbP1B6hUzHhy3Hs8uFNnkXTLwum9qiKYAEBHEGHba9yDF",
  "key10": "3YW47YF2wPgENmz1jZD6XzSg2p9Ms9vZ38FhQQU3UJRDmr3TZ1T3iHyGdHHLB2LxAuiEt21jugwikgQz4HNJGgD",
  "key11": "SAkzKof9nbWfPegF1XA2dAnYsobJ93HrQGSmhwtyEoUQAosBhWxh6mi7gEhqEmwLKCbEFGHg8kPj6AbpLFbt5zd",
  "key12": "zQQREYo8f6Qz5aR39bpA7H7X2Yvocbb113K7JxxdiSF6d8ndaiWF8YxnTJwFTNMkE9Q31zJhxzHN9ty6H1Q5Hut",
  "key13": "5YYv67CfQ5kwHsSVTEkJLk6ev9z5Hm9sLX9mJzFNEa2DncwKR8sqpuN52AkRZJVFkmJ6UQD9xrpyqdpxCkSpSUz9",
  "key14": "4ne5jf1kvm67tYtAGpvfyoih8tRxvjSZZmpbTQuG8sbUVLFFY8UBrYqtxNkMJWFK2zUJYJFMXsFivma9EyXkSNGB",
  "key15": "53zcKTjqzqnQsMbhiZWjiH6dB6DLHSh39mt6bZTGGFzF4CdBdMXXGMSyYzF4xQkcZWttKwqtkoKVC7Ek3FgtbSX9",
  "key16": "4iwsRf1ZFnNTDBMncwFdZ2usB3q6JwiLsJSKV4X4UpF5VMmKabfKjrQ59jsQRcVp7pHkTU5WA4GVffP5Nkpo9jTc",
  "key17": "mJCxtHJ9feNaeZ8ryMFwc6nhAjEhEmU1nnRzrEmpuXTahdeqvaxYMfzwm3KSs3idz1KiXaRM29o7m3SBQnZV1UM",
  "key18": "3XJNFToH9YbRYPZ7NUoQaMCyN5qHGdQVvVpGvK3QBigVWQwLZ2TnjVyUojpt3My7ddLLpnX8VqcPwMGALLg8CUsk",
  "key19": "4ZScNj8NxLy98EqamMb8nEJUAgix8zY9AzRVLvJqHFwZs5Fr3fWWdd9Gh4RVjjHQtsRUFGUFfnFxuKhLW83Fir57",
  "key20": "35kJ1YfQuTWGTC7df2y7MycAJqQ3SecJ674KR5f2UGB4h4QngDff68cdFu7HgKiCzF17ntUhUZSRXVitfE1anb6E",
  "key21": "25Gv2JrqZkd6Ya63Hc8kwqMt84VnUwy6yxQD5o3nae6v8bhkQU1MT7PaptnurHZPf97AJuR6T3oLMHTspN621bQ3",
  "key22": "5YbFCk87hQdj9Dmv29BTFyNGMRZ7pgrnwZ5ZW4merR8FmKZNsHmkjYdo6otCw84Q4teAcEytSMmNmmBkiD7DMSuR",
  "key23": "4jVpkdkgD4ApfrmxjthW8MxD7feCG8Ay6Q4duehpyN7TwmRQrWSYDz4RDD8exvfsRnVwLtrwNznjjNmxQkjHg681",
  "key24": "4dZZWbTCgHEeNsMGi168mhLLavuuBcLb15dNNTMaTs6NnKEDwE1hTGsVAe6cW44XCQewRf3dc7vSvQ8HTXLe7fCk",
  "key25": "4WhFGXQNj5wfoKDxAJLgFFvWGgDhyZEtLpSukFJHSod4odr7tLqBJAZPshDE7xHPJ8CX2ayJypsUzqqGXzpKMMgP",
  "key26": "Yc7vgZ19xdMWs94783gjErDi4Y9tDGn5GWNy8apsxefW327TgunaqxMTofch5tSZxGqKBcgHmVxck6Y71Neo9sk",
  "key27": "2i5FLbbo3jjB8fxRiWhPtKJL74aZtV36oRoM4dDZdtMnkn3RmTqHtmkiYQ9aYHEDXdJ36cBmwyv2AfihJkmkrB8v",
  "key28": "3DqEAumKidSRJT3u7QNVakVbFpU3wuX7Q3cZtcYbTcwtSTBMa6vWPdRkqruAEq7FA5TH8tYCpNdXzz4nCPHFBmFx",
  "key29": "nv8qopVxhDEoYNmTAkTRomrcT3uNTwDoKQHxcEnp9KQCkgk41f4VhJVCDXeYxeYBWymDEe5Lx62X78MwiB6nVeF",
  "key30": "4A7vdsLxWmmDwBHYpr5p4z8raHxy8oFmp2rx8Je1DBJgth45HwQM2Y9FMBj1BzZzpCUyYiJZyxCyQXcK2xr2g8H6",
  "key31": "4DSMchDEi61dFusamJNQ5oyDBbVS5s91vRo4bD5ZS3xNAAFjaNyvvGwL2kpFoPKx1ZaNiqyc2SiYsCSyCy9uQeJB",
  "key32": "5Lf1v43DF2SVazD9XPQCsRhExqNDYcetg3FwrwoDUEFWeAdbHxgQbKBJFFCzv8BMHH3Qf8DeziyyFgAtoYLMxxTu",
  "key33": "4pC7sZHxq9JMetcAZcwSgzYTigQ6o14bMAJ5cMK5qTQKEVMH3dcQ71LYLPcCW1UPmB7wMMM5mx8pgKytmsSpscpq",
  "key34": "SdiPV5AtCvwLd5AgmBh6yBaSvSn1Mm4KL1cF9QS6hbSeq68UtALK5TCHL7AJ4eGEuBh5HiCrWnYegiMPL3CcyEW",
  "key35": "2u3v2U85SbgmwTZygSZwADV1WyuaTvgWcp8p6e5ruy7hDVAoTvCGZH6og5XfTqovcBntZNr3LMML8mCUeMeTJELX",
  "key36": "2ZuToQGbAoqBKSAxfDeBwJj2ho9mnWocHU4L6fAJ1GdAj73EC6JbRXinjrzYaAFCLiLxiByR6PLsHNu4YgMkbPii",
  "key37": "2KG54KTEFCBT2ow3KrDn9erE8WmxhbSWcEkW7Nj4hNKRRRTqmzj4jN52kGY2MNTDz4EqXU9wqzwArxvfUTDbChrv",
  "key38": "4E1yBN3bdPP7ALLruSVvAhrvs7AEiTGFikAh7aFAEbx78YjxrtHeHriBnE7psTm24KDKzpcQEQvA4AF7V4sBTjKP"
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
