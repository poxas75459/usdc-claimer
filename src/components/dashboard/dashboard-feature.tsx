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
    "32D8M6EEHjfj7gQZ7A2mWz36GUb6Sr3k4Z9D2M9N4MhEmwNHYFXbLWaz3wAtS2EAXMcQedJCrgturBsgD8HbHSJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aa5TkYu4aPgeNL9T3py2XVdj8CiuDHmztZWtTsv168knNfvCQcVLGkfNnSH7qDyLbSw8J4uiLTH7SLoGigT9YAL",
  "key1": "4m4u8XZjrDCYGegmy7nkzAsfHdzEF3P4ZLhRE6dXuDhY4tku6NYGPbgHdv8m5MHpS1ziVQLXXntNe7bmUwY4oRhJ",
  "key2": "2UCRLgF8vtpdsudrrp4rYPYXRpaCGpRNc71E3Db2DKi6ucnMBDwSHwp21GnsGmpDVNyyUGC1oTLWCRXA3xbpRKK7",
  "key3": "3KRiTqPruaqCy4SUg281xMbFH1VXJHVE9AadwHTNHZM44Z9M5AqAYdcy649mDuMeRhpAoWrLGLadVgeTd9L9CmWs",
  "key4": "2KMjgtkEJZgdE7FqfkgWoVZjwqWWjZqYNE8L7g4jtqpWjJtdJsHpGDPwEe6kdYXerTUgqaJ14sFEkgk3sah2o7mQ",
  "key5": "3jP1tTvwTXjkvWHj69ZcQcMRKqzEmWNN7AFHRD8rFLzV7ke6fesjGyjTpfWwq8DPttx3eQbXkSfTVBrfbWsNxq4S",
  "key6": "42urwQXUX4bm3AwdAaNTdYEPHf89QaHew6BehfoX3DTXoybpshbEd5YMubsgtcNmSzktNKzJNrz2TGQeMvqphKMm",
  "key7": "3AYqtf7St7f3Yhit95vRooCNW95gm8XXFifPZqHGRRd3SXbTiMkwdJ9qd78zQJfupZ547Kao7Z57mHoknZaPJVQR",
  "key8": "4VMCFNpptqh3okbtsuuKb2rgdLE6uWFnZKSEZYFPmffL2Y7EXNtjBtDiKuJ9jYtXfv5kzh5uq3E2GfM7AYRVhhK5",
  "key9": "5HDyWjZvNNHLxK2vuSXWQrrkicNTcS6zy9QBtzD4F4yNVPgE5mTDi9QHcQD9sb9diaz2BY8bhFBz3C2Ahh4BDGRH",
  "key10": "RABhj9Ja4doEm68bx6YJCXXUpFnNXQk3v2ccoULtfgzoGU3EdADJJFFvb1yuAJNm1DesBZ1WKvp6fv5YzdHH9gS",
  "key11": "2jLmid2YLRXrym12wgxZ7SwgT8jRczVXb5sD9Vy51vLs1yywUkDQkgwGX5vX7ShGextc9H2bepCwJTZ8RppWyKyG",
  "key12": "5DeH9y6cndzRRotv3T3Hs8hXZvxBCnh2uPUsZhQrvsrQHJRcvYHsJ2WtRWVhZ4w2bvRW9BX14XBXVQK9qCqzHJCs",
  "key13": "4nonwPTx9sHHLVxEpNnMVF2gLm5g3RzgGB297cxjNy4T8ekmWi64X1nbGH5keeZuu9Srsw9gS68nha7L6MjCLPb7",
  "key14": "51TzVqXxMxjSYx2vSdKCN6V5Wuio83JXHQJorUa9LYcD5sLJQ5MUvKhwxN2sRgUqgqEmQkxVZABT7psGqWPo9HcX",
  "key15": "4aQVTWpmPAtyq4jRLrnJPwUJJMtuUKojzzVbwRuuXXYX26MyUAprQe7jPPgrxSSikbz9cRC6rM3z6369SYbmmAp3",
  "key16": "2wwTpLPzsC9ma8pHZqcDSjAv2QxDSeXE4mwzVrNjUSERohbsLsK7XqqRq19QS4oAqQdwvFhFaEYE4E5xtztrXdvj",
  "key17": "5uuSJFogsLdaVH7hX6fHMC3TUVYvJq7BN5UDy496CuDJdAmfjuQR6rz7Tj8hFif7VGZv8myCTbiQmLstKNxYk14r",
  "key18": "3iuRv3TQUyVn4yUDycjZZxz1yHzVMPKPfhurEmqWsx5rvh1XctWXvDLBwpuJeUUcUTZRMGwUc7xRSVaRn8CEo6KU",
  "key19": "4eZFP8LTtk8HSKYWxQ7EKqH9DaSUXq9WaRAFbtmXY38pKDsgxgF4v3QT5SM625JLE2Nd5Mijh7hex564spDz9DvB",
  "key20": "3YXJr19Qjs9ZHgJgX7aCLMUgKnT7m2bmMf1BkdjkYmDt3NVQRM8u3ouBtj6GGYyhpuEWisA4EsoN6EHpBJnVRDxC",
  "key21": "36M5GJRDJjZXsmrjV84LPeX2j5w3KjuFE1AoK9gtAFXTuz7aoN2CSnqg4CHdAyfyp27x9YrXKTZZU8yxwZeGusNK",
  "key22": "2GUwqVz4KgfRqPDoSbeWa4HPAamN81UgfgtnVfQubQ5fF3CWUEy4mN7N1p52fz4AWvz2T1DsJ3nXYgxA5dV21a9n",
  "key23": "3BHUPEXciArGVBkYxzbVr5zvNz5jGVseHUoGzPDu8WezipwHaXUFAH3RX2FBeSY7qTCUF5ysf7siLb1XvV2GJDhc",
  "key24": "4f7epiZzSRqH91ZevGRV1ZeDLwgsPmGVbDkRUK7EjRStWAwkKoXFWL7zh9RnBfpuF5L4q79f1LrrgpYQEVPWeZ2J",
  "key25": "65c4GmnwWzcKjdhGAJciha5DJFUarXpiHAFq8r3u9ZujhJm4i4tEjmsr8BcvqFTwqEDkJaPDamYxxdmrV1J2Wzvh",
  "key26": "2x6zK2CJaHYFS1qqGMGW1893AHQDC7fHJmENsLmcewb1FTjpGLb1cSUSjwtwV1rbjSYh6mnzCWsCT3qf1qM8m12y",
  "key27": "2EgjuRaPAgQB6EzorgctYPSjdcj5d4ykJ5HTXsaTBoaBLuj7rZwKMqnmyn2Et7zfNrTGRfbRMgr5DF2rquNTfYyA",
  "key28": "2jStvwJ82mczjzDaxJmfpsSkrTyaCkwMyRRxEaUeQVGqwhXCodXTdrnZwJGDcqNLY884D9QQ1pw7g3gGJQ9Hmnmh",
  "key29": "48RR3Wfrn5d7p3LpD8TzXaPD1uM1Dc9qLuExWNtxvixCuJngYbkEgkdfv1oFRJVm7mG9VW8AEfdSX311jpShFsTv",
  "key30": "2ddWeTsBtBqF83fsJ1DBbmyC5Q8mm9A1N2zbnPnvhoxgNQGkfjNQ8wxexikkPfwmRy98eqpdBnUm7Hp5SS16PMUn",
  "key31": "2XQ8Q9BqQ82M9mYcFzk7WsT4n9ea5THCum9CGd7AmQnZgcZNGjXciLpzCaPXWABPRqWNWCTGsZPoKGdKJcfh8AKu",
  "key32": "giurrruUk3CBvzRgGKihwwY9cbEfZUw1S5y7VLP6XZjkQcpfjSAXhy42EwXv3aJiZZk6D9rTwhBwAHPVKuVr7LD",
  "key33": "xXnVFFE2Zr5wMgMHpKU2NhSDHTbdcfPh6v2dPQDtFsQx9QUYQ2pHYz5fkQPHyiVnFCJkQ9vrzXMehFskWJrpZFb",
  "key34": "2chke3Hf4axjAobMDsNFtzvBQ5Qe9Pzag1NdCg4CNAtud9GNHSER4Y7B56pZy3NRQ6YkF7ECLUumEnfsFncp1Agf",
  "key35": "2HGPeXx97NyvtZSex49Py1RPFAKmbTy8i4DBiDPkEJe52P6JLrJ84GBkS6cEVQQbjN4jcfGGdSiHaRg6FZma2aw",
  "key36": "D4dFnKU2dv7VvNRg2S77HufjBfrSHaW6V4CcVQuvoxpWKnHgfWC6haHkFZBeGZFTjVgLdQb3GrcfS3YSqjjNPP3",
  "key37": "2dWZcSVDeBhatK6Nv35DfNdzLX5BUjGjQSamhhn21ASVXdhsBcuRiERnkNZsbwUcS9yM9NuK27AfhBubSTdAmm8f"
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
