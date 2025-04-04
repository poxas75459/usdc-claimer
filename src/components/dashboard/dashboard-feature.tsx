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
    "2K2iqX7sFetEnKHiB1ig6evweTD6fBLU7oba9CGqzqgp1Nish1ziadusctG1CdcY9gzncZRS1fzSAXAky3iwoq42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NsN2Dyu2wgUqCVWyCuAKujhx8SGXTdonCgWsGk6M2mkyctePfYkXpmN9En8iud5L4LoGzgNgSFHNbz287eSkTe",
  "key1": "3Svi7Rq1YHNyasGUQ9p2dMepNqs7zPALN9g8MVKZJ3MDbSJnkrkEypuMkGuxwGHq52Eqjyym1Ez3dfU528zNRxBf",
  "key2": "5xjGBJ6oCeqiKfCoCfCT5grTZEtuMNhMAHRywUYARv2eA3yKNXHaPGe5k1JJb7xH4nHW3Yi75EHTMYGinHKcGeS4",
  "key3": "5Ah6igNTkSfHKUDubpSU5QU6b9Kopfix2E2An3rraSR9wANY3AQDjmSjTNjdohw6BuGZmLgwL6VDhyYxfbEkUmVM",
  "key4": "4mM8Fz6f3JcE4oCadAyCaUPRr6sbPoiDH1j13sTKzxwRJKPkBoCf9Fr4mnMmJjxznAEG4hVU36ihSNYcnt6X7XBj",
  "key5": "5rBkDmJzXqCKVdKoBGS1w42tKFGK6enysgA7Gq5P6JD1yZKNpTaDhoa9FYRNGtZf5xsJXkUsGzQp1A3dsEzXQN8s",
  "key6": "3oZ6sTGtCTQP68qmKDwyDKgy9eCYWHPMqgMw8Yq5cFAQceFzijpURMabYhft1qD26dZKKynNNa2wSvVzg4AqNMM6",
  "key7": "2J1PdXNmvZQPbYmp5X5g611cuvwj6xJDNqA7LU88HiEarLQXjwF4gLdAw2YtwZKCbkpiNWQwdDW1XFp2VftMH9Ks",
  "key8": "3Pa56XMpFfRXC1uRGTvcEPapcZMAxDWHL96Dnuc4U2kufgZNijEWYCwigFG7kxiRV3xU2gdWVHst2KUMWAQWJc9q",
  "key9": "XqGMBkqKvxzUZSBBympktVcXNxL2YJHBXq69AG6mrMMnEepBQ1SHQUNjr5rV2idu9RoxRZz8pVK8Vv5seGPgX1p",
  "key10": "4N2RYqHjAC8zUxYNJkPpTLcNMdEmjbwEsCM7iFursAk444bgK8N1emCCXzwLodyTF6qte9zc2X4ob38DBQut3V1L",
  "key11": "5fiaJ31SWFLapCqSf9Hxn1eesKs34z77mR6EhS7FMzVRTdhAAA54zcbBBhBw4DU3BucynHmRfzntUVasKTLCV9HV",
  "key12": "41UJL6Wam2vAJziWuCPDkGYMEKi8upDaLwHpZLyCefA4n3F4pApzFR6qnLi6KwYKNAdM24dGaf9fcki4xGWnjnkU",
  "key13": "24X4fxpP25ffaKUVKLAz7kyuzZKhehJCbGXjyKKhncGv9qrnxgqFQa2JFUbD3dDRpNX3WURuYw8tANkn21wnxSQf",
  "key14": "Avr2SU9HsPHHXBrvvfc83zcd5m2h5wrhXmouTyG4w3rccn4zmZULw7bx6J4Pw8jUUnLdfzDcoDpSa8Wqswc2yr8",
  "key15": "4GxHwqwKykZQ1W5iVqj1ZHCcQmB4rFk8m25kFwkj9DrEmqDaTPzh994RXV9Uzm1U5KRMMD3G97PmkiY3ympVaj27",
  "key16": "25KBtenNtrGA3trVRZkzzbZeDSCXVdvSuGdbAZNEg3PyySMxTiEA5XgCAMYbVjafJeuGVE2716Fs7oz4ZQMD9fh7",
  "key17": "4vFZ73n5G7g2kZJ4DmHu38WSCCH8yzrw3ZCt8xuvqE4WN8yQjwrnry6zu9qgZtBcRqDwtgH3eBvZ8oukTNEKwaNz",
  "key18": "5urb6awkFs9oz9DxuZ3jpXRQDQJMbmXwnhgZ96RwgDdaesKf2EP7DDwfKRoCNC3ckjHkLrCdx8y6VbPWbr3Wc5bF",
  "key19": "29x5FhJrg718ncrbsmVDXc7MZYxLUyJ3uMujTRXZ7iPPfnosGvVn6PVSyQLaHGHoi4ao4bsmBLqf3a7cjPfSCPKJ",
  "key20": "2qr5SmAm4iNFDxJAgydr9tC7VKDyTFRRwGAyzJiqquaiQFzcj9mfBADahDjQMPW9CrTNhLkP4aeBwH4Goz5csFeD",
  "key21": "iEzT3FgZG89BWuUiX8JiaYMnLNZm485c5svVFVDPc66k3eQH4aqz8uJXFdKDgYBXoouzvjtGaWfFL8Sgmoa1dGK",
  "key22": "5Gh29MM54Szr554mEdqQsoKKy7UJWTw4cdvoDpRVG9vZzWy23F6ZNvH6s9zqzvhnXDHnF8GGcJZqCvEFa6B5AWCo",
  "key23": "WfczBDhBDYbSjqF6sAWBSkPyk86QEqwtKUM7J96yFujSsxG5qDFXqyNCgKZcPyJbP9rogiwNakk297DCWRGgKKJ",
  "key24": "5EPk4PXzjFebmKi9rCguJ4zVD57xLDXG7VMVeeHJo5zsyPTJfaSHhX2GPzyQ3z3fELUtKXQY9F4XbbFTNqqd7Xmj",
  "key25": "3fGfLBVDfkLNcs6LEg6qho65gYhT42C2aroCMRB6LYZrwS2U6RF9WLbCeq1BmT26EK2RNEt4d8hUq8pMExamo7UD",
  "key26": "48d6MTUDNGMYf8njX1pi9k7WLSxHHEY5Kt4fa59N8g6hFdUBXhnLKXRcbSuZCMUxsD7ynSRp4kkxrAE9CwzWjg3u",
  "key27": "2SjjJnKTb2jwYMC3MKFC8nq7PVMGLsyykMkmHhve8wuSZ5XW1KNxj3gEEtwm7rYbgPHBmzbJ3TNBUa5CAL8ABswN",
  "key28": "2XLMZNBLmG38dc8s6btvDDbvwzu1cdMtdniGYjDRQdDTLPh5CSdcpiJTBo7k8dK1qsAzfs78fnS17SeTiDk8wScL",
  "key29": "2d7KqPYqPoLb6paxgySMGKqMNndi2z1kQxCGmrusFxgMJwWCb2ZQf53VzFzivyWUjUk1oLA4rx2qM4PFzDEnrgMr",
  "key30": "5V12VjmXoChpsxHwUK38VeNeGmUsjuBMUkGutJRwrgMJ4GTe326hDjN71JiNTA84vrTZzzA3gKMR2kjdqx8FuHrn",
  "key31": "3rFMymtzNzcAZ9TAcQqSzSByu8K9TcB6kmi6tcZQe3sxTTQnkZUGyVTkG4GqCrZiPYHr2ZEuJX7kKrgtUfiDtMRu",
  "key32": "63h3P6BVshDWDxNRPp2xLdR4CszGuzbGp4ZkWcVFiXdMLKir9k64taGFCqmYKNWVM4LDFCni4saSbguNsWWUNZVP",
  "key33": "2s3DrDH83sr8rvrUcnC38UoyjP523z6mgiKc8dhZ6xStF7HURDRoF9dfjwhnupHZK7zp8KUg75JZH9QcmxEFN8E"
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
