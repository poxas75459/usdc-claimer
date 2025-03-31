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
    "5FtLXpKQHJZSsvLRdTwrsifv2FRiJVUYKNgWX5H9MVETRM1CXRtdc7wjo3XjB2dC4hS44pc8R8tSeyguyHCLCXTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55T77iTz6r8VsUBhNLvWz4A1LrHC4e179J5WzD48pTR9srpNYxLjN11JpqadFr7iZ8uejZkAN3By679CgQMmcPt3",
  "key1": "NWtLjsAjyUJWeXZHbJj9JYivdjo5wFoMFodbwfY1oKwc5BAPSZSKqULQyTonsggo5yC3CfHZxsYxoBxsJkXY96B",
  "key2": "488MwXPrT2bZi3ZkdgXDsMjqP6aLpcEeo46zUw63EVYxAUxiNdfhvgtCjJxzoibaSpbZmM2BpfTrbzdLYuPKZENx",
  "key3": "4JpLBqRoptudBejG5cpo5TZEJdVVRq9rrdnMqcudA5yAEAUNYFdUUV3kQKdaYr9dxt3mq1bebjzbaAKQokcevF15",
  "key4": "zHBQ2vecz5HnSgLjQL16a9r3ZD1Bp77TRneVNCxB6PLYGARon2XoY3LEZojsAz8RCH7vVAJ4jFsY962rif5tPNq",
  "key5": "5j8emUccZPRALxHEumFtzsG7s1uDm1coLnwkvffVE3FMXhVam2Nbd5xmr638WFejL4MRo54bqraFoVwXuzRMAkdr",
  "key6": "46KEcorXmjtXh2WiwBgkyjW43apLfy4ovFAPKuSXrqJeDBqvzovhpnr2zPnLT6tTXLSDXmAV2QF5Kb7bqgGqM1fu",
  "key7": "r956jhgiBqsiCihX4t1aGLj6LNoQmXuUWdjwYWoQp7VuyAUN22crAs2uEDDfqMrqSk8cPXx7sTJnnTwzVQ8Lst9",
  "key8": "2pgJKfykxdBobA9CAt1Un2Y7dkWc6YU6SddQBrE6JcGZHeN9Z7JQJcajsoVrM9cZKBSy2z88XjrcwUf8UtwVHjZj",
  "key9": "33CX11DMJppCtnmPUVVJ5Ya24ocs8ZwtLBgzxZHrPpR5wQaj62dwW2ALvqQ4Lza3QDCTfsLiDvAtHpE9Er3jyKus",
  "key10": "2QHssBUNEHpp2FsT44eA1uoZzJezxGQkUnXobnCpGfGMsfxxzdtKkpXnsEdHLfb1hp5ynWfBoyzD8HD7oFKRi5q2",
  "key11": "5MPwucMmKL578MZkHoCeNmybLHNrkgAZFFiKdJzGrGPKmx91y9ktEvF31KaB6kvTA37rbPt1sT4ncgWKESnDzry5",
  "key12": "4pW1GoqKzDqKFtzZyPXPppJN3AwiHux5Uv7AsMQ1Ao2x2XZ9cLTAAxuBoP4b3QcDQPqMmGDgkP33ZaFGtsKN15sN",
  "key13": "46d4tmo5B5G9rWSfyh5xcWoYYYMws9Njd451Hf4iCX7sTfcbPxLWrv9aFx3xnzWegV8CcHTmMTeBP1tLjRNLddUY",
  "key14": "4snpMpUWrz7UyCaBW8aW3qJZHFxwieFdhu6y77H81ssaKFQPpZJWtU6uqrjZ5avA8h9aEPhNsJwe8As7cu3dPe7E",
  "key15": "4AQjFvQ5wbnky5xuWzwyCWREoLVNiBHjecRhCSGdwZVu68nw5qXz1QH4e7tnBuEZMaY5TYEQXSLeV1LKcDv6Wo5w",
  "key16": "5NC28MoVqFy4k98ck4VSj6vEq9Xsocyd66SXqpAJ7RsY3Y6RX7Bdy23MdB3msw4m3pPCzTrVxt1BJeT2oc7ddvuf",
  "key17": "2d2Bo15HTxJjpRrfgHDsP6XVggsVktntjcJVMepybFMuQ4qwKzaQDU9CWnMLMgcL4w75hXbREAS49dbJtiEQUGbt",
  "key18": "4fvdSSNxzCFjR7ZNwzJCeNBsNByN6e6H5RJRX3Z2bSNoKSnB4EEEz8wzxRxtHVbxYJ7X6Uvy1VpPT5gSZVMeUcfR",
  "key19": "53v1Mz5unBowwfpc6HZRdqeEot2V5SZYzaH14dtYtBSRRtNouksvYnNWDJsjj6mdAXK8Rya2NGMRM7x4epe4ExGJ",
  "key20": "4UKdjqP3RkYHsSqdcw4bqvyGKyHXFfS465x41KGNx92CsEjNic3rYRhtgEUvJGQFFhQaEPpikKWsYwfqjBbgnPKG",
  "key21": "3CpoWUL8qcxjNEEVv2pzotWnV3e1JPfL6DKUMxmiWNhFR2FzhPxmQaN8GtkLLbwiNYtfFaxWmRPSRLimZryfHcAh",
  "key22": "qVDNpvqfmMkrhogDtrdj7EJoaeCRGqBe9xiZtEfQuwGokTPHLh4oMaVdNamcNNYmrAfZTnpsRRvTeeqk9EKvUWv",
  "key23": "uSURhjNTHyRSYpwwyp8nbuowqkqvXL6htDxCTxKXRNe4CW5HXCHbxfags4WQE4MJUwF7qNJafKy3douewUbXZMQ",
  "key24": "63ksNBH5aBsHBA1SeQGuFjXtyVjxzFuvM4KCPPFUrbnF7TvPJF26RNWMFuQG1SV5rmoBQZP2u7iTXuhkWkzt6jd4",
  "key25": "4umEn8wz9FW3bPn2XuCKig6rxoEPrYY9z9tkgGiC1u4hP6xr243q2rmYLS24aZkYkpFn8LTqDyFGy34qizmnqC8V",
  "key26": "AqHvsGKKzHVdytCR1qKzGDcgKoFjEUJeYozj8yPUC7ghUPY7sKUG36jkf1XqUYWEAZUm57E2w5zU6NFfCwPthU1",
  "key27": "3iexmz9At6x65Z1W8uNHoUPpvzzWDR7d3cEFm6YiRGoM9kZUvRuXgG5SRczfsiomxmC4akSPiJVFyfsFt2hEGQcQ",
  "key28": "2C8SxAAbYmetWE3A49juaLxa3qc8BmuGnadyQ8Q2C6YjVdyXRjufGzDWvTdopMz8JjRFMQMZSYW1yAD3NHjfaUfm",
  "key29": "2MpyXmVJbuyQmYEyHTjvML5Ei1JRjgaiKmchtXFLda2Ki7tm8iM5hvtE4BJZJiv5tw2YzeiimhRatgtGYX6QGq41",
  "key30": "R6RZ7EebhWK5aNT1by2Lfci69FWWEgSs7wkZ4t5npJsHHVGTPrx8wAVLPNXnqrqVVvrfHwmDKtuY4nxCcZ3UAt4",
  "key31": "3XHcxJWUhYPzKuQwAa1mzGbnQyWLQCgLgwELvQaua5RCLg1ikEfzg7nEYbXjpgUZVujF46MgQ5LxxSSKhhc3vGQ8",
  "key32": "8K97oiuJBsDPEVbhxrGEb2753BEYUDv5WQ6Ed3U3HFucH56s54eYmaETc5TbEZ7r56yUw458aykTbc8xYzNdN51",
  "key33": "5BfLmhhHoLXt3USNBAKnqDkUfL1uVPi93y3svsJtT4rDZcWGaQBaytjtgqdhajeTcViwLQrp4TdBrm6Yf4wbb7Jt",
  "key34": "3o2BZZjmWQsdb4KBcuUjZBLSo7ocN8s8sNbcrVDYuVSzHkxCgPXuL9m4j6iysz8sNNMBFSgRCw4zMDM6MDT81v84",
  "key35": "2PeLF1K1CjrgAJHvaZRF6Yi1FXju3fZJ5QYiBs4FNULU6fYWE1DVqhggagfT6wq6GfacuFxEpKSMuCohHcEq2osT",
  "key36": "3WJrGb4UAd2ZRbMKnazRR7JgEAYyX2uiKY5jrBuzZ8tkkqtHUUs3gewyG4HbWCfaSDXpknehqhHd9Lu2YtSBR4jZ"
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
