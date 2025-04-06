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
    "28YFLa4iEeJE14qymZbDsqFN4Zxbdy69bZFFRnCtnvrYyAoLXUu9JkdsoVSjE2nF9twHv3YMEECjH7V3qKGoGQmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w9zj8kWXRuUZYgLFNvuF5fyJyWMpHs2dK7ddjhVVdDAq6aRtYJpA4AaQZK4Vp6v8ceHMqwdqUSctrkMCFfGVMBu",
  "key1": "5Cm773yTvq8FSeKmkiLjV2X2uuFwruVDjGL2B2fEMk7iQ9SzLaBCHyrU9P4SrqhEU7NwZNgT4qjauBbZmgXwzAGJ",
  "key2": "4vaCfSrs6UViM8iyiRwJPQpY7drP1t1vcPbFkxABGTR8JSV7e1wJKtBbZULe4mXb8cMhKpkyBvnUuSrk9P6QMgiJ",
  "key3": "2cFuLNGWiqdm6FNmq1Czbyu8gf426MfySgBwoPLKZrAfu8L4WmYqjEYxWhefphHLQWunF8Jr4jATm5763RHzMvGV",
  "key4": "4yMeqjU66JaZJXbBFeRN8U1PHAGaZCZCcSy153CjsLXwEnwKZGXca1Wf8gf16rNDPNFXQepNH4vmRhcgSThphRtm",
  "key5": "2Xnb44t2tP268B2uvYaGXY4HyAE5Htu1Q3tHujx5qqeFCVPu24wdidqQkDwtWUxc3wN5qASsr325nj8LHbfHeCLV",
  "key6": "3rAxrUXcNWChWyz1rn3qxyYyEpqnpmtr7URbwoXoDSM8xQajcFzd6cRDggFJztgbScDW3GAUe4cT7aZwHd3meQDt",
  "key7": "2z2JJpcXRnFNnTZri68gc3RCswbpKYNTD3hWFm3bhoQVDTNjft7VcXLu9MjZfNd18kQFQRQXutAPdLLzE98GJW9R",
  "key8": "oQEpPPCaauTSf6szwgbhQoaqk4Gw2KUf2mZLRNEUM9j1ngJfCjshjvjDkoPgZyprC8rVL99ErBkwqqeydan4YsH",
  "key9": "2EfXYuRVEZC17xrvFRY8XaFSm7zLGJzb5zcsjsnCYaH3DFEnH45aPAp9PW19Nez7SyGpm9D3puGSatmAKhLtojrs",
  "key10": "5423M9CkDgpqyMXkrJu8zXUX3FCFGhFNca1YRTQLqmKi81TdNYxPE8zNgjFwjQSNvbDfd22gYTeEz5TjS56Af7Xf",
  "key11": "47tiUD9777p3fVJU8Xai42paP7MWH5xQQKeKZaKszs2uG34an9ysR4vZEyafRxHS5DBrWzWBi6PPNKAANvUHrxAv",
  "key12": "7aEQG9H7wUhZzctN34iwgsyM2TwWMiRaNR8vEHupNzdzVpfTiNCJf5eBmRVB4kiskESoG8tBZLgmtNu8DXz36fa",
  "key13": "4FQ6GLVUjsUNXCcaaJG5hMPoQczncQKJxkbuhL2kGZvrewiHKfmC9DcGr3XpTqXHv9a3T6n2BiJLb5hPq3wEinfz",
  "key14": "Gi4tGqT1ZPyZECBbMJohfEp9Xh9TugYkUTEgpV9fbf7TdTnBrFTXLmFPAJmRpLoFcxPT7En7tXwC2EpY6MjmiFQ",
  "key15": "5knhycKBBQHsFzJwpLSAtWVWTrWz2tbzBHy27yu24gM3PAiCWTtwEYBK8Cu2Pfnr6kbWLMATkNasFpR74MQZ4JQp",
  "key16": "8CTvgTjVyx2e91c95AkPDesBZtJQkWrxV4Fvn22k8jhx6sSySGjiy4s1sbgsRgi5Nrp39RQYBtVQaPqyqNNVZPZ",
  "key17": "H8LtJnuk95sviEDrtSMkPJb8qFzHF6g22En5qDj9mZFYXSFnXwwzNcAGB94XiJXXeYNU7PfVazR65JzA2vTAdRN",
  "key18": "3dJ3RqYMsPX55FAJthuzxMCfeLuPGD5gsF7Uu2ydAEkD5EXE6b7qf1jkwqm77XCUNaHwRXZiFobAeADWzv49CAnP",
  "key19": "4A7h1fWMGK8emkc472w1KMMGbpRCvH5NaJ6vaa2eqLuQTP2aypnJNcxG2spd23MJkuhqkujSDkGspm9pkK5rHe95",
  "key20": "21HrZ26neBWJizuC5rnjkZsbtDdSCWULYfsqmYEdPUSJfLFep6nydy5641aQjFrb6SYnZ2au69N7iDwmnd4LiTDo",
  "key21": "5gWqBnsRDk7G3wnG2fTPaArmjGTDUrdKipJfA8VDRrANsMMM3xrQC5gV84rtHbgwua2mGBRScC9bhW1nKJuTjRoV",
  "key22": "3k7ajfwP8SXnTvB3vYd285fYqUwYBbqd5VF4hbGf1zjmikLMNTBcrAaTZRJWbtSzMqLSb5ombfd6GBoune7u9KTm",
  "key23": "5nqtUj1Qzv2DX7EeN2GiUcGoGtCK2pTmL2p9VB41eiaAKz94QsAJVqoF1xmiUA8JzS7KozuNGgDd3doSswHSJ6dD",
  "key24": "5p2YScPyfQwHDi7EzJoEdu4xjY1y2jKRN7QZBSiXwbdTMZGwu8j6fMgfo7jYxWH4RWAy56WeAseVkfz9ohxGPp79",
  "key25": "5qVAo1Av9fDJHr6bk7ggLjDnkeSP3B9jw6mugSLjQ5LquikYE4psDXbMe55S25VvkQd8SnQJQZK1aYVFMd7DkUAs",
  "key26": "4yB24SxhnHYhhdkVziar5zKvixkU5i4wYMUtkmMSmS4PuMgXvq1G4YWuQZ4hqgZYPpW5fFiCFHyU5RXBjPb4LCF4",
  "key27": "3LfENbSfH4em3TmpKfHjv8EESmyD6HJgZJPGd8zMgezZkY919Fo8HtiXKj154mTFkYw7darUpu4VcpT7WP56CMRx",
  "key28": "33Xrh1fHqjRbhze9SUWG5TKyhvHBcxKd7YywJXgbxYwJHinRyH6Hs3imncvBRx7GbiYczUhXn1y1xt8u4WTrcwJM",
  "key29": "7EGxCHocMiR1cuqQWvsrBsFWWp3fDVzUCiyHunMWsYJS2wWVeUsevJ7VkcT6LmTNcoMWD4af2qmeLEHmWiDg3S6",
  "key30": "5cu8WD4te8Adpq3HA5vYb8w6J4rcMjqNZiN1iTQJ8DcB6iizA68fBDW3Vf3ywdZiWj7Q5SfCASAsEoe5RfWor6X8",
  "key31": "5YDzkR9pfKUVpT3rsdcHdoATvjHQ1U8kvxLrGykeXFfezZb7ErHPQXvWgjJNRUCMpE4uhbUweM7ZEGYPpM9N9xLD",
  "key32": "2w6jV8i6ykQs8yt4MuYeNiS2c7VT1n4GAU8Kr1Qm7KBexv1K24dRjuS1TFkzYRvjgqANv64Vu2wVaPLtWpyMod8K",
  "key33": "2R32o3gWDknMsJ39C8zV9KM1oUbqNQ9xHbxmukU8DXC1YdVXVvGaCucm47p2w5gcVZXFeKgUP9MqNT1cfkWqsXX1",
  "key34": "hYB67cKHr3wEh7T3WGsZUyHtdGE2aotiu1wHf5MB2Nt3QC4dGKS4pTbFmpWAczY7h5Z4fx3VXmiPes2rxvvgNjg",
  "key35": "cZtRk89v1yQw2Yi2zaNXaiT8zC4sEDMR22pj4JHzSUQNYkBePEtMKK5bBTbS9BrqQ56zQLZ1bcu5awpLWo7rT6D",
  "key36": "2gzsaqq2NVFdcY6zkg5ky3t6DaD8NoSF1iKumTp6485hvC77P7B7ZCpnRtQmyoZnPtnp3YcD34C3vNkShAYfhsbH",
  "key37": "3eZgLJ7vK2GgbT6fdWRmGc3NJTquxAc2fJzq8w2hab3YkJcRZnsVRV1oPb5dLoFZiSwuJDu7w7zMXyf6zZJUjPY9",
  "key38": "5M9QPJU9hWHyAz3amc9Fzj8Qu7T8BAF1dKfjM8MPJUPVUM5kBpNDPchMwEr7Jb7VkWMsAHJabREzCZmBWzuiqiBP",
  "key39": "61bAiB53C5iqno8TqZbVgPwrGgW72KAekFaojaEkygBYPtoS2a1xaMQoHR327j7tHrR7WnznkkpNYxStvauDZAxK",
  "key40": "4W3QvsSkN8FtzdNyBZntjJDV1QwHmhePsx67VKDbnPiiV95kTcC4sjiP9BotTEHHd6haS7FEjqV1FdutmcTAk86D",
  "key41": "koB44RuwamXExSF6QTLBuUsJcdpo65onWE6UBSiHdPWqerPjWFWGhRi7kvHf1H2PzLbrHm6HGQYf6v1Bu3dwvHo",
  "key42": "3Ayae6hU4X2EwW5e3efRS2mUHLe8tSepYbkZZEyW9VynZbcb15YAk3ftj7pxETBH96Zyez2H1qxMLMF5oxBZDqeh",
  "key43": "5rkp1rCtXngXJ7DpHjEs3FuDkL9ZwNeEfvXGww2j2SRW2wmMVEy1qDXngWuYEJcEjevZDhVTnv4vZJNNaxNKCVdw"
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
