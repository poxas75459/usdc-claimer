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
    "36wFTow8deBRtkXT5ptn4MwMgSU6Dm44BdhZBryyKBSGUcvgnUmY4TMs53Jjcz6X3WsKQqjCojTYH7ew9r9NHoeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TrhaRnvYL2BC84xuWPxMCoZhfWfF526dDfV8fZ5eBH6LxPhQvyRcPFoL4wLyJgsdmfiocnBA45Gc24m8ToFYL7t",
  "key1": "4CgdAgVYiCyLjwM1bv7rcNcPPmTyRXNdxzPyJVtEBhjSH14nRLWuWpqMmQzX75xvPFNEyp6pfcKZREC66A7xHYYJ",
  "key2": "vZMpiCD4VyzTZYdQ2QagkjufLy87biUYChsd6BeRkL9BCSeAkjbg1mcfnoGKD6cBVD16TshSpX1TR5CwMqAGfPP",
  "key3": "3kuQs4mWSakQM335qBnCzNX1DX5XKQ5rf4HTiAmKc2PRVdnx7pkorhmBztpHt3Fg6qWCuipNJGQGdQhXfxT4oxxL",
  "key4": "4KYyBt5Qw63VvKEckH96dNcX8ZmPuUKbUkK8SQMVVwr42cknL3tQA2gB4y91vKrRxhbYsKLBZv7gPx34hBJDLxma",
  "key5": "Dg9XNwaViM5iDPcBq8UPDHBU779JnVHBPmWApKvkHd3kxES31ESF4KCmEhnnotoAF52VS6pAKtKeormgMoRrKux",
  "key6": "3jJdHD8QPM8xQAg4SWv9nTqGgexcPruyHcAEtKRdYFxKRnwsWW4FTprnApLeSc1acMkvQTpTBJL6xUx9qDcEZqnN",
  "key7": "32VeRLvLac3FEUpANWgubHmhP29QhYxrZDJd3Q2Tz1B3NLFE2ZL4KQSppDQHx3NSENbekKHvtM5RzDLHcmiLrjp6",
  "key8": "5Ny1QdySXaj2sP919iyZRjKf64chyfqUCJetzxmSkpnihJnt9EKRYxBiGfaEBv1ddzjpnFfyNEYBYfj3vFaNoMHd",
  "key9": "3YVCc93YQSyRTG5JyvywjefjQSU6U6EoVmZynLtcnreXBgsfTtXeEijqEY9EizqknrPBrjwU2H9Lq444t4gFdQKD",
  "key10": "3dd99mnFEn6wTn8VgXqNVXGiiUUauFrbGj5Yub66VUXDhdXr1zF8f7UznJfbvK2dKTw1sQCs1RwmiNL4cc2rnuCZ",
  "key11": "JM1S5f2dT91CCLG4VtphUzmt9vRUizj1RBYVmstuJGbvG9nDn9C9a7jhisx73ZVu54fhSfGj2vxoLK131F7CuZt",
  "key12": "5LYmkezzATkhmkDjyDmXG5oqUcqvYDfZjDz4XfvMPjJTS6aFX6XWSMpimK8y1Y4EMWCiRp2Pa3TxMYm2fEZMq8gc",
  "key13": "4W91Lw2BZXJg9k1SnFggcbD5EGTcX7SdTnRhPPCy1i5p86sQWCP2TYSVPWTBzj4BVYCTmzdj1hJdaKjCCNBMx2ka",
  "key14": "2NCbTefXQbxktivjgrTa4zss4UESY6vhkAFaH1Qsqy3VYiFzHwZMXjuVdQRAkJBKRf8jW6qmuZKYHAdgfj1ZwbxT",
  "key15": "2dLjYodAn3WR1vmRvDmiX19UbCTFq237bHjGUTxxAh3B7KsX4bCZjKde2FvffetjmTYoSFUr75j73T9P4LPVNbtZ",
  "key16": "3qcEaSzseyudUbjvkdukf58jTX19fm8FMEkyRt8VLgcme1mbj1TMXJrH2NgsPTN3Cv1pzqoqebcyAxh56aYzXkZV",
  "key17": "5Wm3qCWqytjyKb3j4z5ZouzkQ8KBAbNBbwUG8Qh7vo9nyuuCNj8EymrDhDPv8vSq6tp51RcGY9VYTVbtpa1Hb3wY",
  "key18": "2EfRL7onMqRimeiZG9m4t82RP9qd2Pgf43ipZJHqxtmthi9sVtXqgd3PWTeF5sd5F2t72W3Vu7Pjk44p2ttFtwHA",
  "key19": "35UyNmArdRGqAKDjU1xQY74AQams8nQxuepGBid4d3cUk3ZCfhtrHG7wDN3XMcfRNALznwoF6WHRLWDtGz9Xpe29",
  "key20": "7vWiEfnymmwWiens5H2zaie6rL3wY8tWS8GBMKqXdiVfVwr35QZnkCVhahAZfMiA1QnwM4iE3YfCzHXowYCVbsh",
  "key21": "KiMBGqrnDWBEiPhMpDGSZBaGbM9fwXVk8xsgPuGpNWFhM3ThKxr5DBAR96gEUH79gPpGZKMiUNjb6u7fGMyM9mE",
  "key22": "5WAWfidFrDMnpGFLW8sdgSmYLpnLciYHbQ8be9cDCVX4vaNNyWdKSGeFpSYHpkTukwf7pxVrv2Ru9z1Qs3GxVQnL",
  "key23": "5wzy2D892fR9YUfJ1bYALqWBDTSumBjJCWiernZH3RJ6d8oqA7A7qoEBZN5qKbQEedQiMjoiW14vhs4sTBLwewZN",
  "key24": "4Qx3qze91frgYQQAp7EFhttmEzAya8KiQvozDNxHYSPsCsycWcWkQpYHQdnQgiEZD3UHqDiMQY1vuDEVogynPZgj",
  "key25": "63geXyGdrjVp3qNKjBa4juwxEBF31wB7kZXqowmtQhWu29e4oceLxxzZjsNXMWFBNSecn6nigYM4n1UeHhG863Ez",
  "key26": "WFv93jPmoecVP8sZ1XvURbLXA5WdqFKkdQRAoKRCsGghuEW44QTwvmDNeWnMRsZrSno3BsErfxq9QkQP9VGNfn8",
  "key27": "2toER8xTTeeKj3hkCQGpBiFyct6MMwRNyBE3XfeVCzyrvR9GCHkvTmVwgSSonjP4tmJS6rJ85zY4D1EtnXf8obAy",
  "key28": "62HAagAKhdE6F4HUbdwAU4g83eGvz2ApDMx58pKBFWiBxfGrrGPQxgXAYVnVwtobzKJrRewEfmpvuUrmRqpZ7uUW",
  "key29": "5dXLhsU4hZVM6Sh1ZbXHXqnxU1cjNNQU2PZV4YbjjfuYqVvoCfAxogfTM8hMznqHNnmJxqdv9MAa3KKvTgoamhtj",
  "key30": "2xwn7n6KcC7ckajZUhcfz3sn6WmQctDr7oQuihagnmXTPY5DBCpqkcNA56G971PsqPqLZqDGDtheezjxtfA57p4h",
  "key31": "654RgSv1bUG9cTQA8vmofnhdL3D9a5WEd4ecp7bxCND21dixknm7v1ASMT7uDjC2TDRcYpN4PpqcwEbanvGAiyUk",
  "key32": "UgXkyZHLp119iTCvRyYaM7goomRZ3rNRM2Gf4xUgM3LAqnDmsatavtQpcdSktMsbWSZAgsTGho1Zo3SL1YYxQ3T",
  "key33": "5nQ5yT2kBr4SbFkcUsHdCSLzsWuUEXBqur8z6mPvwfxq1mx4f8RuirnACPctvjGEkaS9y7aatohwrdo6HZzYnwDR",
  "key34": "4VghTfvf66BSD6wmXSoaJynH2oM5pApTYM6xoMKZMCCSLfmT99wQoi2U6dMdJoxk2F7ExK3CFbEZfg1rnkTPVfoL",
  "key35": "4GwPBdDLMF7mEwaXJaHCNRtDeFDqH43NajxXyWCqYNorwZcUDk93WP3jQ881K7gcQpqFpjQPrx8F9NeE4xE5D5Sc",
  "key36": "3JaXDTN8bqTjHeSQmPWfdSFp136gCQHqvbWVgquCUCK5GqgwzHTdTzV4hD5ePEa9vPsLsB229PBSmi3WcQGoK9hn",
  "key37": "X6wddjJeYu1dY3hYjP9YBVgNv9cQCpPeDnEEk7vg5xuDXmtWBjnJxY9nALBrH4S8xDwstLX8msGsJnyeZFN1Cuw",
  "key38": "3cPykceEfSZ6t3uHm6Gb4CEdPJbkuajMH9zy9idmwvb1aQjyAS4Xg1YW282ygAtNFkLAmq9zzMjogvxfuyfcYDK",
  "key39": "39i3sJvWKUnEKBfhJsTtsb8wgo3oqhESRW7xHxrpT3bCdQhvBmFABtMM2D8SUAwaqtXfiqDt4UxjpHCsD6gSiF4X",
  "key40": "5xvZZX2iSjKp8bqM2T21izmqjwqDqaceq7iCK4g5yxHPPGaEen1Xnseh95KahfmFCKzmfFdSzQ78csooSVZuktN1"
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
