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
    "2GjhdAVCM4VyY4sm6iTpFLGaQJsg9cWoiwpxp9AeSbEVs5FbeiB2rZjRvA1mxbWr9MZierCY81RLYfuWw7e5nKcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hBLgkkvFbb9GubhzLDPt1GATztgCRotJ18tZwJanyEdB6qbtTMaVeRrTz6kd1WivPwzzzoM61oLDUqf2qRUqCYP",
  "key1": "4951v8bnk529C8aeb1QUESKYHwpTNcVgoxtsZWc5KRFBZDscp4V3oNeaAvXAYgxU6szB9wChW187qUKR67pasdgc",
  "key2": "gnv927uXLmYEqP3sM1AaqKtDFRxov4grzz6faQak3c4HZwMJNKeWvdMgiK9AEyJ96JQLANRtAXpY2LWynhcPHqr",
  "key3": "3ZXCbuAd3DH43YVX37iQ1oEDRnafTnqzcLSpVfL1ubdc2tEpcisLL5izgMuHVqVt6M5GSgpDp6w5VqTvbiFWAzc",
  "key4": "3NVWzmxXt2tawiPWsf8uzZDnVnvHpt42Z5LvNUbUfEmqzLuCKMgGH17MSu3uFsvxKCiNAnP8wcQfQGkLyT8P8vaU",
  "key5": "3pai69nviZRYY9HdCGYynM3bXbJfKxcuDTfFN5tAoZvuRupotNpWFJNgESo8kbVmmGz8oLsjy2UGTkQgKB6huEnM",
  "key6": "54o3ojCFxk3N5ec4UuH6YNgidAsUAPSt24A356Rmu2yGKPz5UNVQQcvJCGEL4zK441yGFVJriwG2GEqR3aNucFP7",
  "key7": "4HDwQapjmWpbZiMjX2uF9A68kTfj6MwPGc6ZtqfFLFXGXKE8PYkat1zFryuEaCPUnRn7NnBf3CAJgYYyBkWA6nxV",
  "key8": "5Co2MZnXKiuqytDZNnkzxd3BLj6C33N7BPFrDpf6KaWicbXvh5YeWYtMG9NVuP1S8KQnJqqUzEaQ6Q3Sn4dYKHpD",
  "key9": "5cN8veTRK2nx6cdNjJxHcNKGxLKZVnEpMfgn8Eysv6u2GarpZdQcbqPD1jmweQrbNV1aqeyRRbua4LqS7apJdWqy",
  "key10": "2LRcwZCyuBbDfs4sNZiNobyQA3rKKzSBQPoehScWTATpCMrJ2ZW7cohYRmycrKavMgygdpJbLWqrSS3iuEvSgQiD",
  "key11": "5AzNXt8ERTjRtqYyxAHGSykvQ5ptHw5qBNqFgbopWdQQxZYAUAankqrHMjDDcmQUtkDMeLxZBsniCGmiV4Ua93ho",
  "key12": "4nFaiwwGx2Z9c6ZEsW86Wg3aURwZ7aNEVLpqRVvC4QHtKe49msdvarrE2x2MDCQaQ1EcdU4ahXZEZRb4P5TeL4pS",
  "key13": "4bfzHsqMSNZeEEPu84WD3SFb6CHSKX4agX3Fh7Ct9KcQWSyC9Ppoub9nEmjqk24eXXYnugx9yVcgzBb1y6YFNeb4",
  "key14": "3g4J57bsAZtqLye8Bw7RjSQtV292Dr31D3M2kPbF5RCvnYrKcy5ebW4asNuuFBmXTnCQEbTV1HTkrqhXmnjK418e",
  "key15": "5upABA7TGZXvLCTbzZ6dLymtN8oP8E6L42hZJA29ATJv8BpH3a3rns8d6gR4XKN29NECxjQsKMPthMEtPYhgSBgH",
  "key16": "32eJYagugSg5kEKF96F2vZfHamXZBoCfUX2SpKbTsrYP9QxhDf7p5vm6Cneo1AAJpKh8Rbk6CYd57kJwV5piwGjb",
  "key17": "53J7GA847XYbo7M2xywq617aeQujY7w2MqH7xtY9UorffzAJNg4pvdB5z1Tf79ooMwnyn2CzC6fuNEPY7DtRrU4G",
  "key18": "5svC5FHqKitXqMv9umRDJMK3CUpmEGPsKjEcBGzRrxHTxbWYSviDPmyhxaXvF6ge1VEKKaFyWoYDzws4aDDs1Atx",
  "key19": "2cF3oKUqfJ9r8WrWiAQx6FuQMrxD9bp2vixH8mXTuqDtBj9P6VBnD9AXmXEjDyrBTb6VB3xobtsvMZ3XDBiKmyCt",
  "key20": "4jmd2jvY63EBGo5CQXsLokc2kQTLh2oiPSYP1qXSUCcWek5GQ482TnoSH8J7fY1Y8vuXjxTYgKpS3jeWWjUzZP3R",
  "key21": "2ao4XEA9FviwbX6Lc8fgrMkJ2LutVDFFnFRD3hs1Nyzga6QHiQ2y7CatpRCbiymLxuesxqaa5X6mgrACVuDTfWas",
  "key22": "3W4NJinpWComqP3FNuX4AFu2Kf9mVYtDZZhR9zroD6b7sEt2dNJcLmvgxvDmaf1QFuT6DN44FFCxBga1ew5JdUuQ",
  "key23": "5sFFbNBy7vCzA17vV9jBsFdmiF1URThzUJmZnepusqEqn65C7iU1kDCP11VDVwRJ5YSqgqymsSzWYzZNGLr42zPB",
  "key24": "5GMpdnGXtLbfXrRxjP4dcuDwXCMjXzpCm9JCbJ6h1dt91wSXmmdGV1dppjGF2BmdoZfsRwzp24WbEHhQJycPp1sT",
  "key25": "2DB11K56dohPGZExRvQtEhfw4zoAkQifRQCKh6We2ekDWgU5hHPqKDRewacff6MvSYwNcgJJMLqwcCGd7j3VZQ6S",
  "key26": "2t62U56NWbYA3rmuLSrpGrkEooGMA9UyMAZYrGfco3SSWMJjbdY1iTw2RshqD8QC1XLtVMHu2yfPYjWW1zSDXLZF",
  "key27": "5GfMWxfdKWXmqbr2q4bLtdzc8npWbwD6GzyVEMXPWqoqQJ6i1rzDrkHnCdsPNxuzHzEFt8hNvemzRa4Z78aodzZS",
  "key28": "5CvFchs8AAHaBjiCL9CR3DJ2428BzrhF6XtS52cj6PZQavVc45sc8PxqMKM7gV3TfzWKNzxR81hkR7vef91Wd1qU",
  "key29": "3igB5kNF2EtuNtErQWW25wr9eu6BgL8Dapn7u1aZuwhhex3YJW32hf35QpkHe83xzL9Hg3tG3amSX1yRFDDkk3Xp",
  "key30": "5asgfEgxM9NC8AhGtpRDpdF5qovCd5PQyDMgLBWySik6Nm1EB7fumTc3ap7cuXw616yyBPLcRW2Pr1FfjXjAA3kb",
  "key31": "4uGSen4jvsDW7SSkVVKCykd3LKkrGWL6cnFmPZJh4t4eR83SEV8GSWP5B8N9EjpVBsGdQoBkngHznLGwb3pkfEZF",
  "key32": "2U16fhCyo1wpQ4MgdHfMy9iquAFwCc4DEHEyGZtgdzkxqUBaKhKLCHF6QxAm6nBufSHx4bV64wbfGkkG1To1m2YC",
  "key33": "2PEbGyZczfyNQpjmsRnyKN61pKXqydyftnDroCoWrQYQkJ35e9zzkk3s5JjgYi4PCSPk4Gdiuad5vhAfR7kvWSS6",
  "key34": "3z7xtyKimiujLSak2PeiLpT2nNuXqXY77SnDK7QZ2inL9NxNToV4VyBjoafNmuxVFfYg4EGFXiV3DvhJvgNw7j9w",
  "key35": "5QGvdeycLhsHxtToxjWC18vP58sAZKSy4dFLRyVaFgxAf2jMNthKR5kgWyTreg4qE7mxPxE1LwKUva9de9SDSGr1",
  "key36": "2ZojkJxs3U1VtvfJHE5NahjKtrQTX3eBvDWE9YTYJKa1mAstgwuuXyPMPoLN7xr9WVvyykZhn5T9vXcBvdh5GAAP",
  "key37": "hfqCFVdjudKVf56k2Nq8ADUa3fCv9tcJYs7LUaAMYTUdkCQjUfBSG3oo8v5sfRrAwe2YTGjdV3Uog23av6TTvyE",
  "key38": "25nJxaysRKTsbRzejTWJ67pExJjKgPpTbTwGod8xXUa8RwRnThr4n2gwgZPWQeJUxeNNmqZ2xmKjrqa3bX1pTuWt",
  "key39": "5gynxN1QnW4S6qX6u9v9shZTZxZrtVocy2GvGBx2WRUHi1uoNNNAjYzKCRK43HQKLSQNJJCCrmy1L3Pu6zXxqGmo",
  "key40": "4Xypm9Yws2CZNcqoc87tWbELgQZyyRPPkWACAhUVmDEXKJaJeqyhVV6f69xE5eLxsBJo1R6MiGDo3Rz6pcnyP5Y",
  "key41": "4asU3c8LPj8gz8CE4Y7thL6tc6AGLUbPyGtXYibjRLzyKqAj7aEbYJJGqt2c2zbJmYVWcZocewRcyX4JG486Lh6Y",
  "key42": "2XjqAniNvbeLy6MurfoKiUarJRgvKVmdWWTxqXCo8juy5p4UqqsMQV59YeYj594xmXxBHMeRvddQo7WPPNvnbDHv",
  "key43": "5HA1YP5s6TtdG7qRPpTQZdLP2XS4anzUPVW3VqQiS1qTQYo9S2H6Xd6ZR92hRjekPGBLSpEXDLaBFz1ikFiisZK8",
  "key44": "3X6vErVLxTd1swfCWRZb6JVDtVDx4F4MVZ76XFL4m2DDmKN3dymBf4he5wcirunDseihEN9nkupub2TuT5yDQoAB",
  "key45": "zpa5PzhQpEnDkDcNZDYv4LuwnPxg2ARziE1DAvYNbpaRbiHaU5FsChPnojmY6CJgJPyf1FAYPv5ZFJY3ntHWDX3",
  "key46": "2p1Ty59Yu87mXiJ664rtntyJKYkCFLv1GZmhFKTJ5zCcrMNpUcW7mSpRiaWfAMKQrTmV1xNyFeTEKLCJn6QCLbPh"
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
