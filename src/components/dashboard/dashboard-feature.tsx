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
    "57vW47nxZdpzZdDqxfqvi3oTetdmPmoTycjWemyn5xJ8RNCPL3NATDx6puxTozgyP9Na4KRCTb9BV4dSSgNo8eye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465QGZovK5pUCKaK3hYKCnYawz65yxz4L1zgzTzoXKLK7mAtHMevnFqJC2JM1DqqiYANogqbrFkVY3rmXQxrVrmr",
  "key1": "5D6VodZvZbpBq4MT1MbbQGEgSJeYo47R3pfkRqz6SLD1acU6wYtfYcZS8wBgMQemjP5oYkJS4q9DeRm7DDmT9pBx",
  "key2": "5NCsk8SmQBXKpSRqgpoMHjCUMUUCwwkHMRYrYQo79L5aHdpfAfxKUd9MMWv82S5JQHDteCrfwMV7chsi9Sjf7Ku9",
  "key3": "439hMDAyj2aATUUuramDotY8NXfRbjpP22bQwe1SQtp2TGVrC8cM53pQGrxkxtiw1Hi88NpEmxaZ41Wg8ckyUvyb",
  "key4": "3qET9NFm3ms9VrAA3yib92NHr2FpDnHpsYkBSxkeQr6dgYYqAWYi4Mq4FaZsnmTXY5aXQG1LAgabTiFunEcSXRxG",
  "key5": "5UFLwFZsUzSbiZ2wZsEohNWCxhQCiFqsDVoSk6DxZFD9yh9KA6sTUyQ1dJkQRLnKcMGKaGP5gf58mjJnaH3cFTEq",
  "key6": "39adN7aHvD4vbCjgiSnTByqu3G4m7XeGzZWuWik7c5XREEQ18BnBjLnKBqNj1DoYj1JpmcA1x2cPar4g55QzDWBq",
  "key7": "49YMyJv3DVUVrmZWCh8ezNet86KBky4hd5c1i4t88VC9fDdA5nRizpwEcwr7GAvX1mf9TCPEwCnLeyn7pYH4q21o",
  "key8": "CKwmHhF7VBpCdbCoJtNb7kQ5GyxBjp5816aq2Y5xnnoG9YpkpmqjoWjP2uFuA96sRK8FhniLS8wH9EUT9aKSG6s",
  "key9": "3esVWygSwjkgFPcMnR9j7Xjywk9CEEv8LnX9LiqzctQAG63RYTSWeUrMWAegM9xAesmQH8M69VTmrr6d5gXsxdbz",
  "key10": "2dRyhB2zoxs3kSJE3pyS13nPgEdTj6ufNkMNH3MuxeryBNvtxTmK2nhZwUjkLYaMT8Si97TJ47DneXsgyPXrV2fy",
  "key11": "v6nQiqzEj9jh2vQ4PzcSxTjBCFX85o6jXBqkeoZQpjWm3vCv54NRasnhF8ReAbwr6CmYgK1NKZB8bhCdH2WT6MY",
  "key12": "3HBo6vcUHoayorTXAtaGugqhG7dHPgkcEjSsWXNvdbJtw6N5nug3zPJz58S3TiixhUvX3khCDhmtzjiYF8Uct9GP",
  "key13": "5WqoqyER4r5xWnncQFZnrQUaSi3CxVSjJ68xqDZMsGX7qZzgiZGruaLPaPgr5U5GMhdmTNJ2YU7vQLabf9pGc1K7",
  "key14": "2tfe1rdNDdsqwYwdCVCDbkmDCebc7yssgsHvTzSdxUi7vt82HLsEZqR6nMjyvQgJLwT6pVt1YaGvtGiwtxs6jWqa",
  "key15": "4XUBLD3KKz9WQSskd91dRYdHxjcxeSbkziMBsptzgKq5NzxV54GvMJfmKo84LJL5rskfezA8zcd81aQ6hXcBJv5R",
  "key16": "3AoMSYNwSMg4ekj1ErxXP2zU6YwvECEbn8hdfUVv2NfszkVHiUaiahCuj9KfpFXm8McgyyxiYc2c1t6zUAqAV1Bq",
  "key17": "2ygAKb3KTCPJSFs9Qfgf1L5KYnJECADvsiwVCwKZqjDY98dFH5vpzxqoB6pGPpcyY1ovdUDu7g1ZuZvxdLzpNfhJ",
  "key18": "3buLQCDmfdSrCjjCPWGnrkpQ6dUN1GJmPCENLx3BNb5HbwjE9vJ2gx2z5AuYa8DmMezcYKa2YFo9s3KiDFwcPZoq",
  "key19": "4JPTuuBHsB5PyoVWokJL7VRnqHCZdh9Le1pQ9CnRDKkdCxgoxxS97QJio9uDjgqusQoDQPFANu3aFj4wGTqZC5rW",
  "key20": "3LsnaNKHooQT3GkKu1eKkBzYjmvPzVmBDei5By6yBcfmY1aFLRtYuWVMwNW8etXy7u18LqZTMTer6uA3nXKV3MQ3",
  "key21": "2hQRNgMMrFzJKLZab6UK4ZJuYgNs1BVM6HRytTmHVKegax2XTXQmK1F35nC7Uryv5iaCpnc6RxEoG1tybtw4btWv",
  "key22": "3CfvCN1Q8cx7vddVgGkR9VABdQCQLZnMqa4dNNq952rR7dxCcTTbzEHUzayohAa28SLkiqaVXRJviTa51ZJHZHib",
  "key23": "2Ng9VgyUmtoQ1YdupgiYyfY2pEm4s4N9jfAbJyktCq86WfPAA4VbVX1ekETordYeTGc33nER4ziFnKBPUv2H5V6D",
  "key24": "34zThDY6zqGCT4Ew2Vk4FSu67Wru88GQEUR1hGfPHzcHHw3Mvf88hAauTZuJk9sXHmwprA6uok3vUWQ46t5gLz8K",
  "key25": "3LJJpviyErLhLuf9YrKdnpXazVHUdrbaYDAPqZgxLGQwavJoqceJR2TcAzFUHXzRvTGbPGqbFTUCSQSFm1tzsU29",
  "key26": "2a3bAyX3h5exSdCRsatYgQLvwSeF9CM274dS4iXQuhefaGunWBKy1BtjTVdoNxqA3at7T6JF5UeRn9MDNP6eQaXd",
  "key27": "3pZqQj2hqez6nsGH92x5cfyGq2m8VzFFQssk8WMimGZZruBmDmfhsjJ1LbY7zG6c8avWGL4uG17ryCAH2DwD98w2",
  "key28": "582xBqaHyxYWAQyKjZ259XmAtaKfAd1ziu6rc52695CWyk4ZR84dkmaox8Nhc2Lws91XsFx2EHawKPLE1fiobmq4",
  "key29": "s3oXFUuGFjs2LXHYuD5SoYhQLSXCPHtSaH96Grjc8xPYG5iLXmJ1jSY4u98GEfvbo4w9waaiermYFNjCLdEucD7",
  "key30": "5cECVkz56e4TkdJSAcGHM4zsUZChczdtWCtfkfSFbyx9fanHoxyn5ys4dPCCFtXgq4yeZti1WuMBrBi5MmsBQLj5",
  "key31": "4tZHqSzxGb9HBi6Ge55drSpJMVPYBGshCtrw1a94UJvG9JkAzFHwm8pRiMhPhN6hQYRCbRgiBwkz6o5iV1QiAqMS",
  "key32": "4gQH7qGj76Q3EF9CZqwKGHhKZywJPqQ1K6E78uRaXZPbiakJuHcerDw7LbFBLJ5KY274Cb4ECRZhms4NnoRaonX6",
  "key33": "2aExWFuAbh4ZNXJJKhCmaTsrcVeLWCDZo9CYXTJ22iTCSnAGMHf6NkbsheMsrRtFXxeeDo4gKgYgTqTU5XHCZAfY",
  "key34": "2pDUiqb76i6TbTUjAdRdegGzs8aWu68p46yJV4jyu6dpRvM4hURPekPBZATjfTS666NiFAV3LTZUtdqEssBT3kdm",
  "key35": "3byWJQPsNkHUXhiuiyfQ4Pvng2KRHftXFhNNYw1qaxXuKycsjQJLQ8BzBmAodYsbfGAByLJGMYi8mz48j5riwspT",
  "key36": "5V36yp5BjBpmYmQYs9DVGsHm6FGrCobGgXc85Cq3pWdnXuf8xwPUxdn8oUnT27WEcZNtwbN79fThPYq834J8wuoV",
  "key37": "2oMa3bk8cutxGJGe2ejehvuEq97tBuvEM3ehLQxxTb4x9SKCmpmkVFcmysLtUr5bw1n1BXYPQRPUQP7JWdCwexrb",
  "key38": "5p8Rperka7oehrwML6VHLd7wV26dGq3RprP4wDAZyya7QGu3m5ThWcy5KoueFQiyeNFCUDpgmTAtxxW6nyTMYBe7",
  "key39": "4rovrYvxy4Gj61GZRMqterwFX9XuoXaKxt7kG3GXSXs4u11bGoaLgbj32NCDYWinaebK4zgW6GrLGvFuqrym3DZ9",
  "key40": "34C77Ft3QNFnJ5pgfwF1Wq5jgXwE1f9yXjeo9RKa361GMm2F2zC6qhWuTgygchX5FtFEbtRaHM3NKrt9VYWoboaQ"
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
