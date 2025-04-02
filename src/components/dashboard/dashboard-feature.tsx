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
    "4dSW5EyZymeYc3ymdm7ASaYQqQ6twQ9uzpFwktWY1ppJHF6xXUphHNR74qwG6Uj8836p1uRbnByxy6e9sHWYTs1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DBqkuKi9TEWJw8yxRyNL1Uzue3Jck3yBrJwJpsbeRx9U7riqjW9vHe9RqnYqRv85mYaYN3CkQyhBYrf6uSLuphM",
  "key1": "447BdsLjafSjAVhioGtCV6PbEE5FMK5V9u8fmtWLkNf9MwEcL1Uqc9aNFQmz42gbCaX1H7CN5F8CkcC4sFhe8opQ",
  "key2": "2aLTKvpxpWmE1TGc4iRTa61qYvFi8nSDrVRQx5XvYUNXEqwUc7RDd3fwiq7QSnuXBxACag4nxqGMgfdewkXDiGdW",
  "key3": "53Et8aMQhuQZUKbjrXwmeSkEfK9CcpoxHhfpF6awnfeCZXGQcnYmi6sr1GdzCfn6woBDZTWWo6T9Xnq4MV9z55N1",
  "key4": "43Ek6psS7XHv8wAzfEEJ8c77gvWH5thb1Uot6LdK4Y4MYQyCzDiSBsnRzYQcAnfGmCE6G11Z9iXD5c1FFzHjcXWJ",
  "key5": "5AgEtBLogckKvgGZNJ7uhiLnhFy79qKY3ghwKL7nwWAANyEhCvw2psLqFeQfaZwuEuKfuWLVLNZoNoTB6wJN6xUJ",
  "key6": "5HMGXSNB9DSnDxmgBKogyNx6ZHCqsUftKQhJYDC7QffWXkRTHmXwpYKoGyxxWdDgVLq5xyVaNqx1E5a3AU5kRhKq",
  "key7": "5SmXo4scehvcxmt3ywEHhGca7muV2JLEnqPutJxCnKvP68Yg937gJNVm1XFsiBQpe89mYHbmMUHwyYP1cxPvsvGz",
  "key8": "5FUK4ruLd2BvCWr1GS9GkbKdPNCF5aZDW9QnyBQ4o8nvcc9Cs2WJ2YqCsA1DY5gkHTFzdFSJxjvuooqfFsDzmXq4",
  "key9": "2ruBPy8HNsEp1mfKodAh7mertyYQv1i3cArNiEnazuFvQfdKKhWgKrCJkvvpH4nNncyHsrAZydg84KFHDTbsCNbi",
  "key10": "4598fcpTxvmUybTD5jAAigfA9YqgXy7TTdMbRwKpYmE94ixrjMmNrhiSKFAjSD9Xmz6w5B2bsHTWFVQNiinU4BE3",
  "key11": "33J8TFfivFb2cVkUCQ5NEigGPG6pHy6nWr7TTVbugwLds3EPiNWQSKuXJARuSUR9sttfGpV3fqBPvPFTZx9QcGdS",
  "key12": "eeWmmYCfjAeqd2a5FWCtabtaHAuRYNdPqhUjuR4stWyVchem6p8gAS5WgbVevkgv6C4K9XjasSwxfH3TGiNucqo",
  "key13": "3V2d7weA6UaSB64j7SKD6QDgk4xPZvkvSJMUawrfrWuuJpNHkwvFbYovq5QBSK9hY63vXQLRUaARUiNyP5oSnAsC",
  "key14": "2az2B12XFhuNQH4trVDUPGDoD5UTo4W73X8GK26g5kY96xoV1AnhBjdjbrPwQS8dPjwvSBjZqXj4zvDaWNC2Pco6",
  "key15": "Gq1MhqoBMiweyJLSNgzopxH93gPbGR67bWqZmbCHgENvrY8Jkyu5bigyGsYSyzShkh3jQachUAB1qMzq6VMyPNW",
  "key16": "4C5Rg6M7aFWCDEBBacGmwuoAgXgvY9beTPvTFnQV4mY56kmpmvDaVcZwrWzGPQhkBFjjzmRKfMM5Qmo6L4krjM1P",
  "key17": "2FUH91PGGDC7Vhuu9oZf114Hb8MdKiiKCJJbMNDmsdoYz9bWNxHMwzErBrEn7wpsPLzJZLcK8BT921rxyLvfXRHo",
  "key18": "3ANxKm6QJrinWjPe2EbnDzeDoDXH31SPebnV67RD66P54dTh8uDaCvVgokTXQYcwuVDqKpKeQVnM2Cv4wqBK7F9j",
  "key19": "3GcMQCGRE4HAUMFRW7VRLvDZzPhoouXowQNzMHqSWakzVPEAa1MHhXxHuHzHpsaFZjxZ1wyErSgySdGLC1zdD5s5",
  "key20": "4tTGnSfVMrsKYqdPq1E54NeKs8bzkewwn9WqiUsqYvSMk1Twk4FftCPLiwxfRtU74RN7yKCLN1N6J2HA7U1icy8V",
  "key21": "5oGpK3BST6YkicWfaTm6zwky9LDtzPavuuuD81t38UTFU2j6Mq27BP9cjCdaAR7YefESWL9zKS2U9SG5bYjtK7QR",
  "key22": "596ZCyRBSgW7wvjfgPLe3tZffEVTDhpFn6waskPwkSciHc5Jmxqqsx635iymE7TPSRFoxxGnXHjUhZk6t2J6CXC1",
  "key23": "3qxWdUZCMXb9j9TuBiXtJuagYsMFfXzMoRQuXZ41AqmCyZRMnZW8pjgnpRScuU2eT869bR78KR3vzbex9qQ1BAXR",
  "key24": "QmPymUXAmEowP3LAdc7qGSgLQUThb244n8gQJn1CYWMZQHuRL1kQ7wYKZ6xYdZfnHDk93HM6yTUpiB72Pg2y61p",
  "key25": "5RcFc6Tau4eoGSCAUDG8EUnm5uhwSYXtUsY6axWUiWwxBemYKVwE37xuqSXQWHyZwnz5pVzJ6L5dvrNjEVLv1DB1",
  "key26": "u41DN5spPVNYabkdUaLdKKkoH9gSsLDTDTCma7URuasEASt4DLJHRKnaKu5JMfGdCyiV5EggXfPmhhWNQxYJraf",
  "key27": "kHwUiaU8GVWhGCDjQT8njsW3atUy81PN9E4xUCLK3dPvmdCDaVfs4KGgR4oLGbnx3dg1GayBF5iJYgDrN2xGmTR",
  "key28": "2j73yzMNJ3bJUWG75C3F7WeXAPnWcwfMSpQCvNJBnqCZKdDx7XMv2WujeaB9WvnvWR7Zhr1n43mfh75pJTdJfcHv",
  "key29": "2WbwYC2yPbanKskr7djK534F2eAwzNibNcwHRVjSBJtCu6jWFwRu2t7gFRXDTCbApjZqhHspefivxws9FwoScaUv",
  "key30": "5StLi2aNLQw6iGgqdbemYmJDzCSNra37yYuiHMRsDvdM4J9PQaf7aKZ53qrHVjBM537rtzgF2FHVaYPAsEzH2J2B",
  "key31": "5TttijHVVYZbpgtjx4ww65XssN7dnCRsBFLiupFSrbLUCPLJNiv3UMHJeAUcFK5c1LidrFKy9QUdX3LfQK67f7yt",
  "key32": "5vZXefzeVZdf2xu9G28cWL3c4z25AhJJnTVwqEBWSXMEEtnsXhAJy46qUJSdTvX9z5phPYDTzrrGZakbnPbKVoZM",
  "key33": "5UVPdhxyA3DpyTYZorYsYnfLRdKiWs6iQ7Z5qTJuqDGiu7H5HKWQtK37x9m2drfXME44WWmZTA9qD2MHopJogXGh",
  "key34": "36zvxfDk3eFN1RWBRtwUQ5BfuTDYQBAXwEf2kjDyPQb8bh7zyMEKzJ4QmDFAtXo4dhF5UXXGDvn1EewDvwvWxFtd",
  "key35": "34NBiQk5NPj6fhgkRz7xnn9x5fPGxf9BUKswHbBuozUeo5dEq4PAGTnREXxiYvZQuLRjkDbB6zmMvHwPjsmgr2Fq",
  "key36": "4CgFaNdaks49RAmqcgN7M7bpteEkPqUwt2VwawSFDKRiugYXADuHB2DGbqZLwDkCFDkLDMhiteVyAvd2aSbH33Ju",
  "key37": "2tELAckHFctshMwJcmwLtGQrMEFLBFgRequrLKNhg6SYhc3vYqNJjjReLzXfiVTaPnjPmEYJZMt2hxMwYG7w1FxZ",
  "key38": "3EfHbjkskRteYUpGk8zyQ7bskJRvJwhmkGE3DHhnPwVuTDmkdUECUpRMQva97yG4iUHV5m7H2QNMwuCWcfuKonMP",
  "key39": "5H9zC4B6Kw3Eq9WvVQV2sXL1A41MaRYXRArs4G4ptAgXRkmJQPYpp6Ng2jjsKMq2kj6nSz17zTLRJDtJzLUxHfQr",
  "key40": "2Qb5zbE5hqh2Mp2AVqMiGGSEf5KTw5ZsSibje63Guf4tnymJsrNxGQ8QWvVfz6JJW2ZNqAgCPet2yPS75zRFVx2x",
  "key41": "5V1DmCua5XpwB99y4TSpNfzWxzbbqUeZW79E5fhMmhRis8HJW8ks9n3KpGuqZbnDMq6qLhPaNWXBAMZJ6XMP2EeD",
  "key42": "4axPJScPNu2L5bjm1CdkhF4tr9tYSrz1FcLRMw1Ar9UUtXYJNNraa6FV1eR7NULwUj4BjSCp1DFhq9QyYBnMGXzw",
  "key43": "CUrSvJcVoF8Uca9RivF2H9GcHQHpnjFkJw1AqxZW2ScSUggJWVLi5Rpt4mCzAKwDGtJfJ7T42fahcfrmzJa4sJU",
  "key44": "4LVJof8xmXywhbXs36EPrJK97WLV69FSE1wf27szQoomVzHpQxVHX8X32kmxWB1vD2CUs7gSKwtW999oyZXpqEYv",
  "key45": "LbBbxVHgASkGNTM2jD9FfxaAr9aZDEDqyhGDUgsz5LGKwRb7hT958C2QENhTFsNrxsGZ9ACFh6bw3PdjBxcUv8j",
  "key46": "3fB76Pg3AWQQQDa7t6wGmRokxt3joqqwAjq5gZYFS2BrtdqGdKvxyJfG7SNV79vAMwSrALkq29jrKkoLDcmPSEKq",
  "key47": "5ieq8LzjdfqtZYvPVu7z6wtHvTxZrrQFDFSsQi59E4gBfcY3mUrobQWccrUTUKSWyZD7M4jfgtdi7kPyB9bLUdWk"
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
