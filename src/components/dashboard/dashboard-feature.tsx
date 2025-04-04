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
    "4urMkpHK9Kn1abL2p9NcPhXQKSnA9rvjodm4WVeuNhuS9PMiKcyfHpdKYWUqGCFBoajXCtf3UaaaVjWAJjn16NqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJVGhMfj8XYpRXUwFr1HNpS41XB5CvKtxkR2neSNHhEoDwYQNQ3LQfC8LNRhPXB5JcEjgkQHtuAwKcHGvDZzFPh",
  "key1": "4TeeZC7qXqU2rk2u3YjpSeTH3Z1FanyjCUdGuoxy13jCVnnK6tN9DkgXEhGNQmQ8NqDYsFLFmNxQJSMiukR1PBjc",
  "key2": "AUYwoPpvB2MWG11FhuVSx5HcA5bg5cgUJ6gDJm4NVFCPaBdmqDdHCRHQNkcGhWqUBwfruX5MDiGmJ3bBpYeMsne",
  "key3": "5Ro7aDKrpfxBJuZjjDMXvFQKb3UA6qMjeDNS2heZrtzuZrWqCotsJqXUMz7q9krhc63T3wz2p3zsFi94JM7vqQ5W",
  "key4": "3ysvQU5Duv3VqZPxcMAkC2uPArk6ZAXYkrJPJbat5jA9XirxytwyLSntU4S4Wh9RECQaHJJTon2HcmZXJZ2L33T7",
  "key5": "3s6fwjMcRrQ1RkT939ebB6ugN1HZHoLkWb3bQKqqCvT1RLHkmep73XPDdt5URZDeFU2NF6gxB8otMzR9owHwXDNf",
  "key6": "4z13bi17HMstutZmGP9wN1zX34xjaCUwYLovEXchrGnLQaJmBwemyktaBc8bBSxzJbC4GrZhR8Qy7T2BViX1RyYn",
  "key7": "3wgA8VNq2VdEqZuqhhuYjRWzfkbCKGbVt2QeaJuR6CawwWyZucBWriMEQLXT2Uw9tmc51sRyCasgCcv1qju4ERa8",
  "key8": "2udnmBSgZKjmyTLbdxkiKyJMhLqxH9GvWL99UkBS8G4fCb1rwKcRjgTa8q6c2VmfGBsbKDJurGib9vxoRnYsrvcr",
  "key9": "52enT7Ys7VN1sVCYfiRaMHBA9M7e4EMgWQdv2zsDPy1zRZwmSS9pbXENww7gAuBoSFb6SgzpD8WvSrwbXDXMebn9",
  "key10": "4Q4xW389C2Ya8y51FPC8m7Ln4D3FPUnji5yM1aziNpL8vNL9h6Fv1MRnufkBqbJwKNBp5GCYdzyTfv1nvxiV248z",
  "key11": "3j2sMRC48rKnmMapAqVVH9ZBJKiJbDUh3eDPVzpftS8kXDhXDzvKBjUhKkMy45mZKctxhemLhc9uwFHoc91LpJWM",
  "key12": "5CWHqmrbcbDxMGiQjn7BFyFdE3qmmq57Ruodxj2mJEz6Be5MdR4Yu8UzejzwT8ihK918uXMj2N5RSJvV5C8uNJNN",
  "key13": "3ed3MV6QLeBrSzJm3DGyR4veEAnGBSeUcDxoTNuU9ScqDcCvvJty9fgbgBoqKpBMvjxY5vL5uAQbvKmm3rhV3Pdg",
  "key14": "2cYvfsPKhTAKyDMvxxnJJawRMBqwFybKJQ9EEwVjaAnMttCYphRpaPYJrtxzwbm47tDkbgu6PDYgZrTJxWFU3kNM",
  "key15": "4TAhGcmowNzV4FtJy7KGUrkTtpEz16DNADz6TiuRaFCBDvZMw12nmSy9EmidBrmnJsLTi6fva3E5WPmNpAhJpMwU",
  "key16": "64mBtPfb8Uo4mzVwHR8nBZcgVt6GxARMeCurkE3UgxTAcev2kPV7PtibeaHmoZVwwVoXtb9YmiLaePTsh4p43pJA",
  "key17": "3kUNqu1oUG53s3hrMhNEC9jLdFXdoEseymvzHKrCBTWDimkZiBqVYqNWcSJ1WwHcXko2xRMyjLoHfcZV5ZgHpiZ6",
  "key18": "3QQRH3x7z5NW5xgzds8J2ioxUs8nJskTMyCHk8qh9ti7XiboobjurAWbCuhn2pKgss5btiWF6LQezMWhx4Zgagdg",
  "key19": "3qo5WKFgWeRZDZypy7XZEGNybBP6TQ8VKcVzXf7ciwUUwZudfeRFxU7HtH5fpk81DLcKtgPte2dFhBC3VKTJHhgR",
  "key20": "4k1XFSfk4QkiihvszyLJFBHjLBHbMTSJSiszmHiMdtqNLfjREHaBvpmWph35GTwCcyEycUv3ER2XoRZW2nm8LKm2",
  "key21": "5jfZF7ayyh4177Z9jCboNBSo2Fo9fTRBES3df78LjRasytGP4r7JEAaPEe8Cnvekp5XoPNzrqiCr1hzETyaUtDwU",
  "key22": "2YpUqc1TE15WLEhjq4VM1KJcKgsPSXmku4WcuswPXNk2jpuNvF1w8kv4thP76fMYYh5gSuohNH7YubeykWwKhXEm",
  "key23": "5hYFv67SZH4EupujdRki9UETFrrAGkM18895c3XnMJb1ZVEytPwt7CBtUeLhuZwU7sPPEEomvrbsB92bSsLK44qF",
  "key24": "5wVkBJFvUW7ShhuCP8FQY33yEJtVNJifupaF36o83LXGavywEYtJFuU31uSREj258jawG1vPa9jhmzBg3m2neM3Y",
  "key25": "pJSatsgBUuuEjVVDQFZsTcVCPrcRUxMu7jcLyXcodv3EceumHmFH6Mo9NbE8DtSoRv1EMNJ95hKNor5CSS3UVZY",
  "key26": "2MtqagWWXPQk9XAcxB6w8bnYFgkMWMNiszpDJDuTx6HBx8CD9HARm1JavtCssjgQny1RrNitKchMbqku2oVRPD3v",
  "key27": "5XrFB7u4SLc4Je7RphUhMG649NDFGTzyfdwpASYFEETJXhfk8bmfm8avyZa2e5FW9cYYTqjkFwaStbTtxnH3VSS1",
  "key28": "3i9MDSxecYPqB1tiM2ksvKF5VX2gDR95WA6BXLWkREZC8uVhQrQ1YiVQTH3t1rwiw9HW1bPKc1bFfTTnpJnVbU93",
  "key29": "56sm7RDRnQAoiXqe85zNq4JRxMNbUDGYzHFoVeemMHRPGKpWERz2dBrw6hVqqvEX6eV5xdskE2xkfMCuhGpDRfM8",
  "key30": "5s29KLx8MhRV6D5HhjmidovQYAD8dfsAzEhtwGa4gReVGCvvjA9dZQ7PoB99izWqUxw85bsvNR4PVMed7irei9yv",
  "key31": "2Rw1xr3h5epYYpBexrfn4qoT25PCv8kaUbEbPYB9AKqupm1tdG6XfKxRPaKdYZz7VEVUcXnBY2k2UCKc7wNEsCxZ",
  "key32": "5BfFLT1fECgFx3B9c4rBXUPExjh8VKp4yVCzrN1zUaDaRH6ZbkxSB3EapvHohAyHhTyxE8H4Lz2nGUJaoyYzy52t",
  "key33": "5aBDMkrdW8CFYyBoBUecaxwb895LmZYvr1rDyVWTBMNSy7XLHw5z3vGEFdMLhArUfUSznrFCr6LYsA2ds4xLpt9n",
  "key34": "3x1uG2NjwsHHzJNnKvayHq9Kw8p3ANGNWtjqbQBW6DELEvFrKnWJ4GxmgUeour1Ev8CfM3p7FgBRixvDHEaz7FkG",
  "key35": "4bTgBx87cA1xqFVfs17gAe5bnXFKgYWMVtTWeDCRN7952SHTgcDnReGxKqyKDBuhK5ztWjp83qkbg94tZ2SxPnET",
  "key36": "4wG1gnJjB8L9RGV9ZQ9fsFLsVH1uRKXqDUKAbAnr27BVAFL44Uv6rrGzoGjsXTUEbxJJaLKUooD78wKfKp2dG6Zw",
  "key37": "38QrGLRMEuDvDBP3AjUqmXLF7bLS5kTaJAAQYhWCXzezhaHWGT4U8wsLCTmZkKVj6XHfCA3yiNWCSnQXL4wW55ay",
  "key38": "4GyvURh5eJkRdcGua3Dm3SCmLSC2FrrwsvMyfsfZg6aXVHaeBReuiknzPKKov9YpvA7QiKtisonMtNCcqWKGrjL5",
  "key39": "YrWTrmRgpZCf2s13Jyf76MeM8gHgZoZ48rXCNsV82fJbrvcGB3bsrrKBuUAC5UXcjDLk3bQJPdCfuNWMs3f3ysD",
  "key40": "3GU8Vkb7XxQwTRWDddzboZeDbDgiFnWWeoUpqHpNiPYe44rzdL5EzorxEPT1QWeqjDZVcaA8owmKUBoEEe5BVthx",
  "key41": "54XaYdKV4BFwg69AzrigmFJ15Yf74AjbWKV3qA1KB99MXHjGiEiAwnq7d6G8TeKaKY3hDModiNbmLkPD1ecvBWr3"
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
