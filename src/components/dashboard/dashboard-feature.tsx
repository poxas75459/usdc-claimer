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
    "Hhf4goyGDMGm2QBwSLfWMdNYS2nxJHSqBFbD6G7sUXjKsYB1n4VRWBYnXbWSfCfyvAqfkVPz3ZDaSm1h5JuF5Ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wyaa67QCUBp7nKyGBeFJAGXpQiQ8f7NHLinaESnKWVvqwjoae3cjsFwNCvoJMbTVpykruFuNvhPS6BspSg1bZjm",
  "key1": "o3dXQbZ13isknTTxpRKhRZFaepDKYcngvWVnDk5CLtjzC3u6wWFGXW3oHL7xZtHqpDJZwt6ou9MTLsHxVzn47mP",
  "key2": "5VFsRXPnRRHdexSmMWipBjC78QLMVX3YRaubUzkqmWY4CRJw3hyozvzam48yH2FYJZiCdvFgGVY1t3hW3czHSdm7",
  "key3": "3Cp1kq3w6o5KUYwqAs1gdx5b8oWTh4P6V6u5LtiJr3BC3Rh4ndTzETgKBX3tG4sLrcDzoJXJV8ke2mkVty9uFzYM",
  "key4": "5WQvYN6feFkabCqvjrmayxdVcP5uUjf3uunaZ2tuYkhBYsY3Qr4CjiS1FMpKWJhvugEjbb6SeE7ngBe9cZ5m2FPz",
  "key5": "2CWBR1dzbSrB7hUMCAxrbYrcxTEBD3BvJyxoXkuToNDkUPnzqSx4vjNHMHdVqCWH527jMbVZk44MmWNbHzrtVnYx",
  "key6": "54vg1nsNvPWVAmGjQRqhKgL3uwzECoUYn1qmjixeyKkLeiZ78VXrAQkwZVg9DKD3ZXoKA5n2qQnaCLoErzehMVu3",
  "key7": "2VsBsBAP2piWweis7TUVWn5foumUVeXZw5DMC4XZDvCg6mz4aBg3ZoBAzXHMZm9BVoduzdLwuEatrx5Kwvb6SmoZ",
  "key8": "44Xcpb21yJg7fj2o6t7jfEPWcs3iv7bqfmxja29LKfZiiWWSgX6kvzRWK79x8k7QVerdCszo4YUZtDwcQZJzmN9X",
  "key9": "2XhprffG3YtR9jdByR3KGCYQ1g5wKNH9mBFbcX7Dk7bFKZTL8vSSH5szX6EZc5FNe7xsyQqcTi7LNj6JpoZAtgzk",
  "key10": "63fFfFj6WZPCgxkRuaGyk11ToK3UPfx9kZfVoEoCxDbCqwB6NzbWqiYvsi7LZM7LDG7M293tYpXUu1VVqke2TeAq",
  "key11": "4Ug1W38qp6cAcFe5ogKAWYwBw8bqUPVzNaHooA8M63JXp2edBFpabTvYmfmV4bpojqX2FoJfhWvJdK6d3Q5jN3iV",
  "key12": "ZXjJfdkB9g3uHV6XTUAfSwjtt99JTNooGECTKXQnbb5KqauBjut18861E42NjrRd7jsT8Vukud6HDNMCEFpXShd",
  "key13": "WGDyUA7Tx3PzgvvcNYyR2QTfanc49zzvARS8AmdsL5RJWBjqijxuSaWVmEE1cibDwka2FDTjs5t5XjeFZn7ryDB",
  "key14": "5ryidFokiBAGDaugLoB2D6TQ3o8txXf35qRk3ojDeSkuJ8QNdX8H2DLRoQEgGwjJvzELHcFVwsvLsgqHzE6mWZ1X",
  "key15": "5pSiBwcHKxTueso7ChXQJnYwLb65ghbHpMhGyhomXLGkoffSJsrCzQaYLjqXEJLZCx1Y1MXU88vXmYLbAZ5pNZ4s",
  "key16": "cfrbnXydURL89PMRYA2SCL2rCRWgDAa1abKfN1X8MEtJyUVwj5s9okJAt7sxRoajGK9ujRC2JniSjRD4EtJEod6",
  "key17": "4aw22muzofeMFf8zdXpRkQ8zyFzNU7Dt4yZWbDnPVrpx1ZubyqwDoKX6wjy2CYBuzS4kTnbhx1GoNhpZLkoqfjKL",
  "key18": "uc77nQTTJewTcdmCCrd4HoffXo1B988M6gYZnNDstpGnpA1wnTCqUs6bgSTXV2CGjYGP3FYyqeHnXKQPT4Ax8yx",
  "key19": "2MfiSYoxHKWHF5qmbhXkhqXADCjB5t5cu9x7nDg7X5HzEyanDVMNxhqGcr73jXeRWsqPH7nrGCp8VSiZjzpmzU77",
  "key20": "4mXrhLvC8vxDH45VCFTy14xPNFvsjYbTKaNEUsxzLHoPXoqCWDCasQfsA6FRkk2LBcmbRbzTCRFNGS6Lu76WpkQf",
  "key21": "3GL5QSjQtajkTxiYKViMxAy87MdxjffQmax4TAZVB4uC2xzeJ9hP3RN2S7Y35r38goZaTKiTeuqdM546xsdMZWy4",
  "key22": "4tNfSDryhXviF2XQA4hXBycc766DotXZpR68NBEAFvwmG6RmSfFAE1PekRsVogxbSztU5ZbVzRe6eBiBLLfC4EBq",
  "key23": "4KVb2rojsWwGQ8W223qScDoYSXDTChde35pj6kRBztjkkwcuMG158u1Qsr5RXBiiRgzx9xHCM1onNNQhPtrXBS6j",
  "key24": "2Wn4XZELTFMpyhXhR95uQhch538xxMS9eW4GMHDXcZQzcQnF6BiuWou1EsrnyxUbkb2iEdT7zx3yy2nUjbKbQu2C",
  "key25": "2TvL96tohXGxw6PvT4jCh8CDXuGjtpjAPh43G93GJZLXcfd4fUYUDkfzjhi33VUvHcsp6j3zsojV6cwhiWGb2PTS",
  "key26": "3pFUpZXyuE4SNFXXnoivRUGpDkyNKPAadD3951X13oLDDZQmWXwpKw7DXcSRw5ngLsvFT8UF4PFkxHukr1Fg87rU",
  "key27": "2k1ukd9cmjnXJxhrFiGyr9mc36LWzU8yT7zzenr6ZHrLUbsne5CAhmPJhCZNS5BCmoisW4frrvH4VLaWSPesP3vg",
  "key28": "5KF5mUATRycwd5ZQkjeSH8yR5Xi3pcMnEnmTQrr5ng9tD2LRxgkqTESNS1m8vdTqfgvZe7wuh15cwjZgzEWcfJDL",
  "key29": "5Lr5P2j4USBh6YHTZPKLzCDDvhWvZG1JNxjMqNYkWXuxmbgbxfuwEYepqM8t8CzyPwZCxpSJ8UeKQzUFngVjrHrf",
  "key30": "fXDpPJvBh22PYq1YfsrSnu9xpS8YEwpiotRcFoygcDJnsZptQS2nhvDDQseWfBxrKyHbXrW4o5YYuWDhxEesfr9",
  "key31": "5e8UUzt2DE6j4JQCo4kqNYVRxwENwoKPjzaya4GqBVr5GZjfbsZmvFfvuMeRQepRwKL6x7MMnqmT71G7jijWKkdA",
  "key32": "5wNxwy7dPDCkEgJrGdQEK3C7Qp1M42pgHbjNWVgqq6oNvjkcZ5ChrksC9bEsmC33C4WvLf1RgQfGEXQ6sk7XFtno",
  "key33": "9B57bA1GYQZUTe3poJfNGhacVMAKSfoYmcokP5Ks9UzbYwC7ErjyhgHCGK91mvKcHHvT7kDMgRRm4i1umWhQKiT",
  "key34": "GCfcjZn59LJG1fTyE68EG5QEF6GPLv5BXiF4yJC4NzfnRm5E8D4THRXusEn6kFUfezxVoE13jzMSogTW58brHMS",
  "key35": "3qo29M2me89juZfaJAdvmdrKdiHEMqJKmiidvNpijzBaE8J7BTvwEcxqaLZS928rhnXp2PqKHgFSx6v9SsDi5GRK",
  "key36": "2iKtmTKw2BqmE3yNgWKE3RW9pu121C7ASysSNerL3qsUCSu3cyGXWMocWcspwA86xTxrtPg7JDewGMF7WiLi6P95",
  "key37": "45ChuktWPp3s2sNLHWttKaHBWQ8G7Zi3u9BFv1gmkDHbX3KzcxG6amrmykvwTzgQw3fEEmemVzbZFYpBf83MUFv",
  "key38": "29b7ryJZZ7AovoyCLBw9XEooxZvPLNUTWRTUz4q7bwzBXxpfQS8QcpA81LSuLtZwebvMhFwKNyRGMNDUD3w3ror7",
  "key39": "2mzrwsGcw21a1ipg97HyKXt7GiwV4GT7VynDk8uQiRptZKzJMWB66ZT6rktfzgvZrxvmWxD8PAVn5PM5uEyqo7Gs",
  "key40": "ZNpnbk5p16ZLnjHdgGiKVnwYEaxiN6by9Xr84WqH9sF1d5sNpRztSWVw6LsuvRnKBPc9572zaDJPKLcoD7YHi9p",
  "key41": "3TxaRkQwn2akqvLD9DSxLKC5GFiBNY9PJ7pLR7BWY3P3nGahFw5TdM2SXaz5FKnVEsVFcXbptjtT8zxfYyuhHkse",
  "key42": "3cKcFABJFpxopwNGqa6ZJBmyowTR77BjUkrBPaG5dVepCEEL3rjR2DV1T4YbDsw7NmfHttmRwSs4QWr7fgz1q5b",
  "key43": "2qyHsb3eLkruwycUUMEv5K9UkjuCKhe62iP9QWfQB8nmZrg1dJAkGjkAVrv6FCY4d7kGnEc8dnVSRb3FbsfgXM89",
  "key44": "5kx2SNhJfSHTBAT8VMqQidcGfMDwASSoUwWkt8qnyz6TjGphh53N3zEG2rZnhteHtf1wn4yj2ezHhbq1GMkCrAQd",
  "key45": "56Jywam52FXfuBMGdGCN88HkwEdCL6oQHbQ5q4y3d6Ahvp4GicxMsfwNu1oES95LFkwRCWADGEwx2AaHTKhNygnA",
  "key46": "3MNQtUcNPFe2YB5xtXEnHED2S9gbqQp14PiCHycgWpH4Ch6U9Tc43mt5Px5VEbLredS291nbBpV8DC5QVEprjcuA",
  "key47": "2rSgNRtmqmfbTX2QATU6H1P7mj69bhpcYTrNcLavzqGDicFpxgTv2oqos28uiJxEuakfNTn2M379Y742pof1pr5G",
  "key48": "59kTi7oiYpDVNyEsPgKVSoezQBj9rhxvCNoLWvf9SGqFSi1zLamW9F8RRBg2fcj8RvkmbwU8PNmoM1jyAzMkupbC",
  "key49": "5jQkqSqT41TXzMozcU4X6zQjvzF9imPVnkjTYQEyDwfcduGEYVx3PSVtRscCZ7LoPa6VnXeaj3dwr7hQebEZgyya"
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
