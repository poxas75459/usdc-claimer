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
    "34JKMH3hcrbwLP3iDETCYbHX7FFYHJwLwegqfQeyEmtTsDbDeXTfxLcMYmL2Kif6Hk2J2EPCVhcjDrrMKKkMKdv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FPP1773Y2nUHB7FsKFUnTuVEXafQ9GzTuHFogFrQX214BP4tWciMCXj25XbEPLeFwFiqzZybxrgQ6AYWfqfAKzq",
  "key1": "3gu4zc2RKrBLxcRdNGqXynP6mqTqSccGWgeEFybJVYLCJjXDU7CUMvL6qn6Eg75f8oJJgJJB5H5WsBLudR9CNmYb",
  "key2": "27J5errBeKRzm3f1N5tCVr49qeHXcbApm9WSAXYNJ87YohNEf9rLiiC8MEaacb6bXsRpbA1PSErUJbLbKqezhLXS",
  "key3": "2XJAvmdA3jppESTNMLx1WdWwAUeEgCrbd64TkprKL7Tzttrf9D5rzMqQJ5TpWpTivM4jGAA9gpi6MRZ9QbzYAnW5",
  "key4": "2WJ6RxHH2C8eCWRt9ijWRsRyBSs7gyqzjEAuJmpTRHG9TDu5WY2TifxDUbXHwJ7QtGCbq13r7S1bit1jY2UgDfAr",
  "key5": "5e8nacK4ipvKjBnwKsCgiXxyDUU8iNLPGkyqYxNqimSyioXtMqb8Tkcg8SeEf9LHoT7cspXTZjbszfQGFv1HU2NN",
  "key6": "25kQ2EPE3kwzovpor1voz8gUotErzUDtvY5unNTNAZ5HMGAPsveWZXuCRwHUpaNDe6dG2VLmsoviCD8QPtSMn2Gs",
  "key7": "jFUbnCAp81XuxKq1Bib6biiez6cDjp5o3FNs7cP4om6qXksULxg1hBskA4V1DxuLYuJuM86pHajUyz5tiWv9euW",
  "key8": "6b3avnmsYhjrSrgMjWJenjBdVZv2pwS4eRjqXv9P4h8c1Dp1ciSzFGxVRaHEdosovQo1ET6Wf6yb5JvmdiiwXmK",
  "key9": "3SK6jiMZwMgfoex4buptQspuJfRrYz78PbCLcz9K1H1cyzzFwLrjB7xv3hD2QDkPDk83eeLgJaTtbWG4ffG4XYFq",
  "key10": "62z1dY9SEa1DNcNjiUELLCuctBYKZcXyWHJrqBCW3HZ2UjCgFuauE6z5A65LTnZnkWAUGunrFfkkm5kTKe1d9Wy1",
  "key11": "658fv53mzPGq9iT8rAR13JoCkpiPBeYZxBshyNrxoHQ1pfGwEub6cpEzHVwvXLynJeaiGaUzxCvgrEZfcvSrDLdU",
  "key12": "PSMsaEvaiTYJwsmarFHEU8VyuNmB3eTpWJZQP84GatZXE35kCGNSnPak4UWp4SrfKKJ5N5JA79Nj1CVgjHhWHS7",
  "key13": "5J1ZFSadDYXr9yweGsvxJZFQApZbc1bwwafcYsAwwuRMHaaLKuEHWd3hQNhUJbB3XwkBhZf5hTE3LSiSbxyYEGGu",
  "key14": "5dGzD7niekQRpMb8DePSPafPtwanAziWG4vWBgAvYQrJXGFxb6qBZLDmntJxd88XScQZUzmwHAf5evf7goebawFG",
  "key15": "2Tv6HMAqRUMaY1aNGuQEB32iZAQoCfbkD2XbrfQdRZvPWxUs47PPP1kEdLZzLWMWUb2akarBLXSnGTSDXZFmoVcX",
  "key16": "4ernpYdsiKkFAkCeNKYTxhusMXWNfenfcWh2JM8XxbSwmdtKQjxKuUgZVHkApCZ7E5eETVCZe6H21weZtXzKFHBq",
  "key17": "2WA7nLfbegVXWXwRGu4fBJM1NMuY7oMAjib8Z49QpXLtnauA8tPXNsoYU886XM127xwJ5ozmGFs3BCjsKCPKniEN",
  "key18": "4uerRcxVvJT2Qpp8vHCqCjgpEMVXAH6rYuKA1jPcUq1z8iVhVHuHYrYMY8nFgT7zXjEKRpQ2bEhwE7qqD1Ra6K6X",
  "key19": "4ySsocSqwBfPqWDKWcvyWEiL7AvHzyey4NCdi5vfH3Re1xPERZqibXqdJDdHDNMbkM7jBJauuizWraBzcruA2XZM",
  "key20": "4ZJZk3Zybzp1XYZkL8RMn2vFugcH63PauTwDGmRfCEXysFt1Fs8BdGAQuZSXM9J934axyuHM3Hktr6MWWVMZegqF",
  "key21": "4YnhNF9XgivxUN9aoFihLg6SbC8Cx2jiKUCwEK4aPYo1rgyvQkcoVYnZp8UrY4GyxsU6JxVAXtdFsXsGLju9DMhm",
  "key22": "wYJeggE1qLKLEYqHJzxzWDq3SYuL5hHeaFjECnqrxvW5uyPnK9vKGhQYHb7Uvp5eMtYL4zmZDzkzm8UxCNuk6Be",
  "key23": "5Zi2CVi1LsvCpioMsAX2t6gSPuzEJ8tYnxuTC5nZK9BDzwrUK9J3AVXiu2GJX8f6eWtQrHLwBtm9QjD7va16VRGy",
  "key24": "4ZSNFB4QEm1fPHet3YTjuH8MJjEV3Bbjf7Vy3mZsooieZFVch5aoWhx4K5JH25nS4o8SZsiBj4GoEAhYuZXe2EJZ",
  "key25": "ngKdYiP8bL8ohYSLuy5yUHuVJAapoNe1acZmaiVNbaBdGHJv4VU8fiTKi2QpAqYMZX3VgGx2moCWDdSbgkjbUVh",
  "key26": "2ZkuGTCRUM18h5SaGikiGodSEddHGH4fH1gh6V9QgYiVvf3aTBJByofUuUWKMm6wafpGYCecA4tdfSNgRDk54wyH",
  "key27": "33isrzNxuhEs3ipcL5ptLK2upTfzxAtmPhcn7KCrbJdHiF8uAZG3dnpFrMPsn8hax25vyrRgRtBWxsrEgNjRFXor",
  "key28": "4AGtPdRz2bAKCdHBgYbMtpU8eQKWqmFYbLUbQKywvmo8G4tJWYTLeQa361fHFNUSHayGBGmsi2QzJFjzeF23Siw3",
  "key29": "5FApMfPWVj5YiZpSKVB474bnzr1UEr9FtYHqg6S7M5ukXvwzratnEkSB8BGtxMsrm4wHMZAe4gMinZqjaJUsGxZL",
  "key30": "5WWXgU2AfHgL9hpV3rZMvA1ATfmu8mpiWJtRbvdbQf97QQpXJzJwU8NDhQve3X6U6bDGwsDeQLD3dFBiviFnf8vN"
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
