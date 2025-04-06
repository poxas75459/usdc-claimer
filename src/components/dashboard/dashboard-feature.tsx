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
    "5XWjGTbufDh4Mhjxacc2tVGuy5HPLiK8tsH9Qr67Y3GEAnpL4BQAqmhdcu5L7QvHgRwrqQaDYszYAEtX8JQrgdZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47MiN8ThUxcKNSWvoQgcTRgG5vQ1n8seqDG6538ZH7NGNBPPJ2GMhpcwX7nJn9Hzi8ziUGC7zBk1e6cX7TT7WGe1",
  "key1": "5Qt8exSiVD9Af8zcM1E7Pe5LTbuuvyCpVxDHoWsCRTmxjv6ee7MRnRgDmiJ2oPxjPn7p4vqBoW7TsqsCca6Cx1Ut",
  "key2": "4xAdKNAfbGi9CkkKCzByniGQFceFNs78VNZWGn6wtqNbYbNNTkr83s6RFN7zaTYkPmbeLs91o8JLwUsrdu22PgUB",
  "key3": "62sRLR6zKgQf4fpqz1U7Nx8JQtBJwjThc5zSeWmsdy1LAZFuJzdrPofbwph6Em9kMC17uHChAkhjbtFMVryiL8Lh",
  "key4": "496n2cm7wp14nAFFsw53YHNFbxZADpWh1UHd3V9SzebogeGiYnE5MmBriMJABhzvzkXhnQmXtbmJvDNzv5SEjw7L",
  "key5": "3Z4suXNMpnuyWw7u17CSni45nVB7pYRvyvGVFR7GcQ3GTFUR4HbaRJgWeqFxra4Vz4oBPyKek43DNhRsR21Rvqf4",
  "key6": "2WjSirtcde8mWgcicKWdYFCVh7vmKdqN9RXt6FYJFb1KYTUQj2naPVLNXmyRnAA9EcWGNKPFEmj1oSwNHSzH46tX",
  "key7": "4cMnTkDTnwEX38KbyQQu8UMxbSHGVp4mTSjxE4mtU4LadHrKHpq64mT6byGhEP2Dg2kBCRTbSFc6cd5yz4UawfM8",
  "key8": "5ZFyB49FvLwKvtzKVB7EfM1vxQScobTtoMqKixQqCVPPjCiLR7PoNLG7sEkmRANgGvtZH35Qahkc3L8gon3QG6tQ",
  "key9": "5deBvZcbzUDP9DJSqZEmaWoGB4RoHYKMgS4rKVmVafcjsTZHgn3GDWnsnXXYBLXu6Weian3mmnz8dQNGmRPqDaWP",
  "key10": "4VERembx5Zt1Nw3weg3azHMeuZHTBH3evwJFq87xrhkjQC2r8rULSZMVthdxNjxqz6iU2x9HFc5DpQj59XSVke6C",
  "key11": "26UmvnKmUz6wdTuE75sUeYYMSCr4fRMWibW6BjhNeuSPkeZ2RKmfpm9ndarsUd12NfqLTbvoXTkSqiZSxYRS6yqn",
  "key12": "3u14F2czy9FxPtYE1tBqcsdoKXseSVp4rJePGA2e1K6huRrzDFCAwCunmRAY6Uqna5Zn8Cg4WANftZVzHzc5yDCs",
  "key13": "5gMFqwR927c8pGEDeoBqbLhiVPBRC93aP2Yoferv2gs8whwmuvve4Mdjq3D2b9j55fDM2onRh46uCzzzZUo4rqNk",
  "key14": "43Yq62ZH4qJAA7pLkVZ9MaTigkwMP71iyY7kU248Z5wTt1LuVk45iE8nvSQkWKhE9Pk1NbfrjBN9cwhCRySZM4Cp",
  "key15": "2v1DTe8P9V2QzmZZfmHAdwyxjh1W3JpTsNQ2t7nFPR3SHNKXkWH7ZoVExTYCf13buLB7vTKDget1jB7ELXec7bhp",
  "key16": "3LA9cryGoSSEvCUVJ6fdvHNgQT31TDoPXfeT1jRnWaPJju9zVTQ1tfkBf2Wpnc4TRBamYEk9A7gLTaE5DG7J7gAY",
  "key17": "3CxySUSNSzmcV56XCMpxBRkSv8mnVDdUceevfL9s6jZHgBCqaPSE7G7VSC5Wacatxid9jELHxczhNfTDZyMq1qyy",
  "key18": "5GKVrs4vhc2nccoxL1RQyqKH1p8rttH6qixm3usJLKHVmWShGQ8fV9CugVwVVnSghhVRYmPsgnRUapSdesqu7WLQ",
  "key19": "4NWBCKyv3ciBZiP1dA5kWH57SXBirP63pPraT46inrScUwAtXWmgJYcn4CqsA44qyVbaHTf7nQMLup2ErstKzjcC",
  "key20": "2xhSceNhV9tgbJ2WPwNX6iAsqueLLeegQVamB2qYmS7VCGcboV1aHBMSV6CGkjzMtuUuGDAfz2j8v8NzYeseWeRb",
  "key21": "5GxQaoUTrhWpapmjjhFfUZ31JHSaye72vxALMrHW7ApB6EzoLMSjvSrWhQrUi5rA1M7mzUMeaYA5Mq9gzDaynko8",
  "key22": "392rM9k21DzeTCEbj56TpehU7DLZ7HeHE6WabGzUCp7nVD9bdpzmkj1kWKN8cY5WoB1dvJpe1Meprx1iCKA3gwMY",
  "key23": "3G7n8dCpSGdwiNSgqPbeJPVFUwM8WkcLXxKiF4e6ZhKMYhwv2VjnJsx4jLByYdTv945qhwaT9NixYgkYR3ukumLA",
  "key24": "3FKLddZyu5SZXfcU6ngMNztXQPHCT4N1tAJbnmeXfqD8eReNd6BeJZGtF4ZgtBqeoceSMoJCPRRrUGiZRrzLLjU2",
  "key25": "3CUBrCsMQ2ZYe34sNgWy3GxGecyiqqfbVvAs99guCFSJow6KJSQNKF5FtKVNxEq9dFmQqUS1kJkZDba7nGUAv3ZZ",
  "key26": "5PZRjHKYRp9iMPmwcQfQQXLSqpypPKRfXJ1YQvGc3aH3243nr85BMHbPG2Beo2t2B2uHKRdkqApjdgXs7XdCedNk",
  "key27": "5HDgXW44hqeAY1oGcddVyJaVF91b4oJKFkHAHyPghdL9BvXELyghYHMGnVLz8LfrJie9WJJmRNSNmSbTJCipocXd",
  "key28": "3WXWc42fDRbePT45oZf66yeRnDEsmCuwbE3YK2YnduhAAA3YnV5sJ6DXwjHttwvhMo4xkUjvyj114vergyfWG4eG",
  "key29": "2VNiDQmcGDeqWduwsQV6X8AcXu4g9h6r48dVwbZbq9AGeppwVJDWxnArmewGLHqHXYPLgd71y7RsnHnpQe4Sy63",
  "key30": "4yeJ6VfmQN9c9mrX2Cs5hvXaPd4jmiCC1rHG2Ej8AQssSukNQXg28u2rBn4JuaSEwYYUbxMMWEMduwN5yEZbxEVt",
  "key31": "2VjR8KLUWwPUy17sstpzSkWUzWDWGYyRdHTS6XjVrgEACqXpdmmXt1B38gdDiJZgJSpSJpAMK8NU6JvhtnAHrTYu",
  "key32": "219AMaawPrqw6dnfaUXirMdNaia6j9KAaP2dPQbszudrpHdoVHcMZe9qk9N9U1Q6AGiPcWfM6BYkCMfe4HuZpozT",
  "key33": "5aW3NZtzYTeQ18m6oMijQ9Zg8Z4aJGJGfvUJcFtoaaQZN8qGtP46sqU7JMSaoBRMUgj5Y9599Do2FWkP37VbjUc2",
  "key34": "64BSPu19RvtWy2ZQC3MyPxq7tkdcVqBqc8VCLMeCNLKCMDmWJsvp8d6wq9j9tV4PRhbaRFGmNMizRf5FaJXkL5kR",
  "key35": "2Bhv3vxK3FXxnz8gcQEhktgLvt2CnZEaVzM3reQqdAHbZiirwrV9Ud4d7o3eJRYJ9y3eHvPhS6CjowreUd1131B2",
  "key36": "36XVQ8YrewB38NLMwD1wuovRdAxNERmJXTwyx2bgqKNg4Uiz7Gpg2uwy5PovssoCB5woChSGFqadbPaU3vG3Y5BX",
  "key37": "4JSEFkvP3oc8SDst95LHpQkPHDmUU8gfrX32GkmfX6GKEYZBswPLhJMyZ4KENETxxJfGZBKfVq3ZYdnSKY2c7jtP",
  "key38": "3TQrD4B7axt5F99X6WMY5Di51YiWLu5TuQd6cBjdXixkPhBZzEeW8fGUrrzBRxtAx1BKMKB6PNR5wwVJwFFTE4aX",
  "key39": "122GEgKvMGnSqjQN9N4GSDYSz3LzQd6oyvugnQNrJBbVxRvxZsJULyAoG2VCADiN2cb8uUommuRenxwyuVtfkHE1",
  "key40": "5e6Sh7KS2LkYvHraynPRsiS7qjArwV8Hp7MQqWztZ3fmueZLrNCKc53xwe8uCu7yZMsduQCVwMsRDUvMsNpcKW4X",
  "key41": "FHxtiC6R4TZYrmWbUNm1HDmsZkQiEgQcV757A5g2bFiF743Df8cHPmW1WsL4ih6jZJ9MS1FdXcxK95e8hQk3JA2",
  "key42": "2P5CsvpJEn425CrXxbsJJfAkUyLCAPTQbVob4LQHnHmQjv7C9YNmt5WdEAWjFZiNuWhwK25g9aEC8yD9QymKUZkp",
  "key43": "3fEQUKCjdehfLLDe47HxxtDuULbzQppSuhurogZzJjLujPK6NgNZbjh3b29BrQ48C8ayQ6VTghVvNmx5iHfqGx1w",
  "key44": "2RGsG8XnSrSjRorwJjUxcFWz5tPyGLRjB3XBYeN7JNyE9whDseCJo3hTLjyyh8mfmSWqKZSv7wVXBZpLiW9QGCVS",
  "key45": "YctH7wSu9uRQcfm62E65zXGjfxK35NV9VaWztZmiHvCiDUkYd35FQTKvG5convC7oTUq1fZvbLmUYC8FntW99u9",
  "key46": "2gAMGxBtz3R3C84RsgAFz2HFhh9sJBuFHozNboxkk78r5TAm7RqLutdiiu1MvDgm7JjeNUX5rEDWniG3Fe5i8hCP",
  "key47": "3bDo4e1sz3Z42MZrBWJDbgbzSzcEM6RuH1NLETE71rgMfwhZEHujyPQqBPEhrKqYMrpDCM9tYs2Fk3yzujTfj8pk",
  "key48": "2XK4gHssbHUWWJofqWuS3KBm6BCj4gAknoBR9n3gRbYVukTUMTF2KbRTnUZxAcW4j586n8vabTZFwnXsJXPEK7WH"
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
