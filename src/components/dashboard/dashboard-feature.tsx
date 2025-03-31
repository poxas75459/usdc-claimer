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
    "5XPyynEs23XsKDe1S7oA7QGtLGTz1eADigsZB3Qutaq1mh7NUrShRf9hC8MMqaUZspmDKj6nCzAMzKYpvYy1yDeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HzAL4cS6eJNSuPNXrMJX2wD8DzcRKuxGjxsznRLGNLYsfQhGHCKioPX3ucajPJnHPvjBwR42SfpwpRWLtZzZ1b3",
  "key1": "4cacKUW6mdnWpc35zTxRDuVKWcEc69JnF7W8VC9ApQtMvpAnGfrKUhCKGr8wKkaL1KijxeT3Xk4SSgMboebZKQnK",
  "key2": "2D91cgbWLaSqSaQa3kQb3MuLb7kmNbwy7FzPTjvU54Hz9ispw2ZmS4FpnoDBNxE6czKSzTjapRdPXqjw3YfLXBpV",
  "key3": "3jWepxUpAKLbFo5nUzhfQKKweka3PywQuEvQEQ1Q87P8PP39zyXkVptUoLzPPUTkKbrtVCAKBZTQ2T1UfxHF2sf4",
  "key4": "RAPDwVaQ7YcacFo1JzJZKTYZcTHvZ4A54qjJwm9eqqFd4pKgituXCVxrv9uQ9dwSL9qiqooeM75yV5X7dU9BdQq",
  "key5": "dgpT3wei2Kz1tVipBJFAivj6RBUGUPoHnuYVWPoZoR3pcUWRbAz5vMwfpaP3Vh1eRfeNEyKgR8Sh84EC5kvgZg5",
  "key6": "m5krAa4SiFzkKrqKanBHpmwJJTVMsgzZbaxuvMhxNAqBZ6ikhu5sE7VrzfPkvrZ2dV6j7VjduxaSFjGB5cj4kwF",
  "key7": "3b3nxZvgyHJaJcxgmKTX357McAwiuYXZSnqV3ghK7NvuKxNeiY9kEzXKBe3aF5LCyLQC1626KZawupcdpBfVYftv",
  "key8": "ieNdyGz4neCCv3QxbH1HwTwXzkhAkosLBpL8SVRFNXbypjbLuS8rv8ihDDK1qrLxvNGTbieUfoFx1zyzwyLSQSg",
  "key9": "4XuqL4FcyLzo7UBbhEK9eiGz1bXYSiFbtNMrwbJz2RPX1UzcWnjivwbkSYA8sDDhT8crVEAP8UDeAcjVGgLqxEZz",
  "key10": "38CYfqPPemgD94P4SN8BUC3bHYFw2FSotX3vPbzKas447x5tuKKikQBkWUtBK6zawrfrQ8D97zHeSNPLXyZsZYd3",
  "key11": "4N8tMvUTCZyLuotq9DHJv3MjdbxgbCxcw3jAgUdzuMrdbmB9beATxZTyQrdBf4P1CMDThh3kiMgWscaAbrgDqxbW",
  "key12": "3brvagzDxc41s1L7zM9MFUWF4UgqKWXENRVZueTwjiv1KoP4jwmmpdibELkugmrW678aGHwnjHc4Z16VG6gMrkNS",
  "key13": "1p9cRnMsJhtm4JMFsacPLwz24Q5rvjvuTC136GQV7daC4Vjng6WgjUKMq2afHkk2GUiZNme5jPAR1vzvob4f3pN",
  "key14": "2x393DyzMCkffsJUv7WafAnMGRPDChepQZzVdcfbcpMnAJrXku7NiD2Hqt3jq8zmiWw23DLLiVaKg6AiNV7fojeT",
  "key15": "31oekSw56vap3FHbPxztTV1He36fwwtofwDmEjZ9D2cw22pvAKA4Y99BkRGsKWCpW2irDdReHnoPfbWmqYPVRg43",
  "key16": "5Hap1x1iqkS4XbfgjUojLa3jzQ2LwwcP47f1UMEoa3RCH7S4WgvmcH59zjt7zBKFNseH124y1RR2vswqqGFM4dHF",
  "key17": "4zhfxR2MY8CQE7G4GxELq2Dtjg8wQSrQ9oumxZfDQ2QdwZ4FwnL9SaGjfXvSVVVQBvZB1kpGJ9ma9jP2i3XZHN1",
  "key18": "4GcNwPrEbAUotfEjrtQKxUwqsFcoL3BczAyf6fuxLFeL5MygDoMiKuyKCxLmNJhB5p3KeXY3vwKf6QVnFmuGqdcf",
  "key19": "613QyvmAJ9k2oakAEUF5WBdYn4u4pKhwhvCRVW3gJ4droaJEEq73yQA2twQWvJabne4LeMocUiSFA41u4ybP1oDF",
  "key20": "2jcTGKfBtHHz17aKNL7gZHxArZ9xR26Bpe4v1as5QWuKWLEj1J12uAeK9cofFBF4THaieFcvfAZz6peUubWgbjax",
  "key21": "3XhJDJwjywjXTbT6tYJjCdBe3TFD1ZBN3nnyDJs3g59D1djiJK4hPtP1B45Lj83LKZPT9Zat9o6r1ZQkt6S8Uh2z",
  "key22": "5iMNbdvFDSKiLWgtmMX4LoPBWohAocVENMvNydiLP1r9kk58GxxMW8iVHP9qSLDY3RAyWTzQ6MJzF5pDNSNVmnm9",
  "key23": "sGetUo9oW56azsGgJLaFaTCWBd4w9f4wGX6vN6E5NPaSz4Wr74M4aM8BDzKNeyRhqTJhwfJc2pPFYnnYUfroBCG",
  "key24": "4MVqV8ms55aeZRgAKxbTHfBVmMT3abHj2mk4XaJT6Hddp8yMAuW5nwbr7EnNxDpXEUh9ycdKwoHBV7Mgh9dRk2XL",
  "key25": "53ChsZebWrwpb6UuZJoEd29eUxsFmjbkEfu9LNxcZ2pBrAz9461YVi91vSJhhyx4VvS7MxZLzw9x8qsemYhrBPGd",
  "key26": "5rwB2qgnyJCib2afE77LpojgwNc7UbERQWHKe6RF6eKHz5tymzX3f5xcM7Zu8NFx6xnLvtEB9G3dezNnZYvqcHvu",
  "key27": "2ZtBuajT1UP66iSd3PTNyV4AZKW42xfCnae2v18WV9ivVzE8rsdYqnuqFa37cGzMdFDBqzCaANAScjEmtwjkPrLc",
  "key28": "4ThxMgCEj6F5Ckn6GsZXCL17Hn5BbJqpHe4k9hgf5tVpTw23HmrQb5RM4HE4r675QAVCz7EsJr63S4ips39YpERm",
  "key29": "2rhf2DMzcQKVm5UdPaR9x91V9KkrC4w9QFb9C8SEJpYpADgMf3xXU1pwfNh99t7qNJWsFn4hwX3AaoHPB5bbC1NL",
  "key30": "2keAWkQwgY3ayMKHAjogdei7ezzsSMi8ZZncD7FHZwcPwohxiXP5etJ97ffoMCc84QEdYupHAPi8exSAN9ab3dXQ",
  "key31": "3HR2V9S86LvejUDeppv5A8uv7arXLHaVQUTyEVzHmk9iBn4J5WaoEBtxqMJ4avJRPo9TNJKRUBDEh1wJFqRN3L6L",
  "key32": "4DPXQYtAFJArSQ63EfQCaZmxUS7qeLb5sQYqNGhkzNsqdh9s19MCDtRudPmP6BDr6sVdKUMjWbtpf2PPaXJn1MEq",
  "key33": "4YF5zu24wKfCQyVm3TYxM6GoL2Rn4WWsRb6xzcjkhFNVmpRheKVUum96yspzLTD8G87CV7QbzBDtf2zV45zd5hDz",
  "key34": "ZaNmiujHXp3F5cJwZyzDsXPjNp12k1krcd4BenKtvUhpY2vEwqz95r34jTJZCJ21YV9GJ3SkBL63HYFMXXH5UFc",
  "key35": "cLTxmugTJ5KySW7WLAwvmfYJjeJhYPwExh5zuaVgqgcoBXFu4ewrVXuDrJyt1UinT8bWciUyUTrjwumMhNM9GTq",
  "key36": "4YXcLqvsMCnpxCaSnSmpCvEnqJRNbRKmXuUUkA6sUG39KR8DtniNekaug5EZb7FdwMQvqbDfg7sMVr6wwKQf1Wu1",
  "key37": "3exPG7n8RdLgp8rDwGj23bCMJqLBe2bkBo5gRRYEtPdaEPm5HTZuMK1BsGMLyfED7ziNbNcaoBPkMG4tpC5ui8CV",
  "key38": "DzoNxvn2e6rbufJBWtjK6e9y2MUYZRnZ1JoufyRoja5zcWPFPUiMhj5WBQvbqdXNFD5PowYyj3FziAmM9ye2Csq",
  "key39": "5MWcxqMQKhCGwovoDK2jdvU3xeFjbeGZEzJvQmzvFRSZHyJtsdicPXjQRaohEJgjWnzpcnw9zEr64w2SMrjW25DH",
  "key40": "3sj192mShsPsUVueM6h1yzuv76t4Sbmh5RkJ9U9NgktLw9R3UbvQt4kdPVDss7Bjhtz1ib8KVSv3dkYS4K7e69Uh",
  "key41": "5jP2fA4PbtbBETgvqJH7m9NNnA2DV7T8NoKfy5vVbzjcKWmATMx4wYidUY1vYGMYHVUy1Ck896aY2fcW64xRH3C3",
  "key42": "2xSbQvs1E4FVgyRuppM4sv5g6rxdmczRvr7V2qLkbwEqg3McHm3MABm37ud8cPCts4UPbmNVaT1DfUJGeR6vBwsu",
  "key43": "59RXBDbzCz4FBe4hBbxb8MU5rQ9tDb7AAyZH7dPDwcPSos6RDsdLb6bDB3AKmjAJhJ6bBHh7gQp3DzKc5ufCFoJ7",
  "key44": "54rDVS3YLq3dEnxjhYHN8WdkPiHEPmrEQWpZJZKBuUPq3uiSJGQC6L5tPdqyUJPecoQBFW2pDm6UEzvL2NeCURiG"
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
