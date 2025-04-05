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
    "37xkSVL75Cpz85zdmJkbKdxYDo1di23YA7Wugg1XpzG9ShrsQAv7DSL3dBZ1UkiJWTVGK52kcjFyQevmei4HcP9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vj5Ua7ZKDgcG6EPK3caosVA5ynVDqq9hbiMYXQGpYpPJWHuZFr3fp9PWWip6uBjsfvh7GP6PddLZALdUQikYyvc",
  "key1": "3VPMjXZgAxS7FUmLt2gdk6GgDWsCcyWfqvzqqNDEvM6yZxgke1mqBWuRXU2EzWHpJ7c2oK6kUaTEDgVDYM83ApB5",
  "key2": "4PgvDcPVRxuTrp8dnMG1tGLXFwMDPFc1E69EG5zA8FrH9BWEGchs5E8peRRn9qPD6wsD5Yc2TqkUVpfaafq5pkcw",
  "key3": "qmq6itPpb2iCJcRZnsXaKEABENNnTZ7aR5hzj1mnyvqzVHFEDKNzQzQaPMc7KoSu2YyJpzrrjB4nR9P9qMRgFhy",
  "key4": "5NFReUiNfbJhurSFLDS1ZqFRzkx5RMihizBn3dhz4zYEce1kSvFSEKiwGNHKGAFH8CdBZ6bAV5AwV9g4wqAK36CX",
  "key5": "4RL9J3VYxeNHp25L8NAjrZ9tymuV1XAZvNxDFoCoodHnZFCbcRcoAExcUnuM534ydfQ77Fe5XnKuQ1ZS36pDBZr5",
  "key6": "5UPLWEpVg2pKZJkBi6bskMgnzmJHGcHDbqu3xWuJGg9xPaCxsHDHw7avy4cWL191peQM76BGsRq6n5UYkHUZXwcC",
  "key7": "4BM2qtnTkz9ru3Me4KEbkyc71t8bi8VyN1x6g8Qe9dPYPihQbPbV3gLBLDEZKt47i26ErJXhDdBNkmLwi1UbJCB2",
  "key8": "5wS2ynpxLXmP5NyFUQd8iwfUA7XTS1prFbv6L2qrGk3xTYib4H3jHxQcRL3HRTMA1amURw67BtyS5og2reo3ToCv",
  "key9": "3v3WFywjwjRNv4JpNLVLU82RdEffruEknVHSF2oPEk6udDdseTATV4Cr5WbV6RXnzrKWW94Cwy49mtQjET9TREis",
  "key10": "4ZyjbHuva6agU2Q9LEXwxPj3UUQYjV6yrHVL9WTcca7wgUGryH6F8So2NgBsT7ZAVYDpN9nKfnHSX3nmnfrssT7s",
  "key11": "4k6S1s2NDWKNZGoP6q4Ed7bFVjuZcjYmpw2q5GVqmWzx2AvAxa81GgXkSHanNzetHxmnQjWfrGM8F6PPeErv6WJJ",
  "key12": "4z2378tWde58GAbFAuVFXiNY3GG5PaipR1mPFCXukm66JRthAC6gBburQQLqDjMqciKNi3oNv2N1hxYPnx4pRFTW",
  "key13": "4CXgSjP6vtcbWJcyWgXu3dsPAKUU96X4bpkoKXnjauzLYaHYx9NU2ECYQec7by7YBDXtVGb7uCB7BEQdSo8gsgS3",
  "key14": "3LHWMw3q3u7Nzb6khggFU1C2C6VyUDSVtV6QvdnJjNMzVskLpeiUisbuEgRT1EqJGSd3MLgNG7VzNV8ffH1ENXNf",
  "key15": "39aeMyB4GgZGunC4EH1XRC8eKQZNHor7GB2Fmn7LQTbN62AizFtgpAzUy2qCEmD1Txzm6Ywcqtmv4n6N5rKfnHym",
  "key16": "5oxbarFA2Y87et33qgthrRtsZ6vDeJwJr4f7hd6J6saTwK1sNYSEXTA3yUVhichb2MKGQmjNXdhU9WtvVP2yc92U",
  "key17": "3iQHJuBfxDW5w1EiPC443gns1DaSUS5egfKPgDtazddKTgj2VRECcA8qhY9RqbxksRLYGdL19SfjjpVMt1YKTPCo",
  "key18": "2x1H23mx8zXsD3YqW5Y4xnYEMgTyHFo8p3p4wQK194RxqWkWoH5vrfXYRW1gNX1e1V2xp5KN7gYHSmRnQ3jcqnM1",
  "key19": "MpEzFD7viZmpf71wcXSwJfNjFxqwdZjAtj1YTqEiw7zdSCRHiFYeEpmzkcfSjvk7H3C4tH58c5xUCs9NLtEbC58",
  "key20": "35oCdYGFPxCmPMm2wrs5wFtMcxReMNfdrkcVsPGdsMUHZTsoLES4drSvVLavPLx2C7ZnhBzXE3QRkkaLueEfHmoR",
  "key21": "jtemF1BQuV6XAcGtcfGFMfqGjJn38UiZphZFdTQX4h1aHAtQUNCGfBp8Kw9FH4rGSiS81NWdpk8DFpK4qcJo7Uo",
  "key22": "3m7CHtYcRN12DaoDHdAXGvE1FvvVNoJWJjZyudtHHCRi9NXJwir7A44XfnjgiAHEqoDy1rzndyLPE7XEzHitx5ao",
  "key23": "2ZBsLmobHngc4N2RBmebiKuAHjLvfnKPoyiwx9TSJQc8SuwDH7e1jxvPt2tzvAYA63n1TRJmUVagBqMbZDEhf2RT",
  "key24": "2oayTifwkFtS7p7p3UaxGdR81dfiDSr9ULEkwcUpWfE22FLtuqF8QksJJFwiNTKJGQUoxrGmeWYwbWtZ9vKFZyF1",
  "key25": "4FwAMVuwdCkVHCZdZoCCGL2BWiWkpbHWLdEaAe3j937AGcMqm7aYNyLnURoqRQvgH1FzKMzczBB4RcfLQAeYBwaM",
  "key26": "LyQUk8P7qp96VyuNHRoRAUVbhhZ5tkBzYwMvB87b3f7xj6zUswc2eSEo5ANLWe3heardszB7MKLqB7AnU9EkDPg",
  "key27": "2VLEPKxwtZ7FpQS6iWzawkiWGqt4K9PsWV2DaQ45e275Rt1gNBpWMXNpZdxkVecWTQBsTSQBP912PMCCi1Wm7MUh",
  "key28": "63WKnCHvPzurccekXHqUB9THNaueuvJ2iYULiybMSnVMiefwk4LR8E9AWyBLPjfM5tTo3qJeDo2TbZcRfTokgzfK",
  "key29": "JiE3fuSkZad5pnVGK71H6kt4eWDbntDSpHkNSf5TXFrJkubnf9tb44sZbABmn58PyXnnX8cTBVimtqq32aEGYiK",
  "key30": "gn1L78J1zahoJoMwRWLNRbZp7qqnTEDh5JBdbNfrySQiqjXrkNcRmqzEjubiRHpWTpytG1mreQRF13vGxXKeyXD",
  "key31": "3qYvs5PPdwUaHdPjAnXmA5w8RHRgbcSzs4d1cgEXXe3jk842EiVsNYinSqdt4Fn4f1csAQbH4LHqfVw54pEHJB2n",
  "key32": "5Wrs3ca1PF6tdpzdrnfR3CeRa4q1WyvUidaNGkvfHEvwMF9Q5jw53bkuYiGCGR4wfSrEPJ9GVLZEPcKiW4vp14Zs",
  "key33": "3ebUcnazathdg1rNVEJoxqeVccKPJK2d6JrNR8LispyU1qWZ5EZWBg7kYEgT34eJTSQ1Lu1frHHJfvNfmgRGLyB9",
  "key34": "4153nHNuy52bqhmWFkDSyzoo3n8rCBXu1ecGRVvuGWdAmQBcvDbRX7Me5vGYJiDFM9Q4RC3qiuRZcW9eR5NMwfb4",
  "key35": "H5FqsbDCy9qj3UCX9uoyQ2nYiFyGEmmXh7jexiPGavnQfSeGzP4SvLEdABwyExsdGS1xmWVCVFRGaXzf5iDXezk",
  "key36": "3Vcd6g2vNJR5ijKLnmju96qZ449pSkKANaeVatbdUyrYnBQUzwg5bwFdaEmCqkASgVpEboYZLZRELA5ZtKP4zjqk",
  "key37": "2aTmk7CzBXuTdQcMGVkJHHHrun3BkSp5LQ55RXNFhAYC96gS7xWYYnzf56QgxtKvjZBkipL3XKncgdMNGvRkMskA",
  "key38": "2xtyMBZAYRKouwafrMjcxHxbc5hXUEvJUSm6S7tyzjGR7y43CQqRRKnSwaoLPU7DXe4sFcSNCTw1WEgLqxzQBPjg",
  "key39": "3HpSYmMqiiX2f4jNVibx9rfHqnspr4sxENmW58thdrXWQ2BSxJCqdMqSZtejcAfXZQjTeu846Yh6Lr5TJ1AKy7MS",
  "key40": "24hFNAVmhVyaEL6hM6WZUuzd87uy2HSrsH44QWkgqUuyaY6JKC5n5B19yUWy3L4MyuyTQoSTCkMCjA34XosXuXde",
  "key41": "3pPCfPdFkdwbdN3e63zWAZWfRDRgg4rWKfFvtMciGWPubpCVuchxgTPThdHVQatF53UW52rvwDHMsTdDvdmrSnTp"
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
