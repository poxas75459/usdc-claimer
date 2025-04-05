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
    "4coCqTJY7RiCN1Zdx89vkvY5usMwSnYjnKhFUnhHJTWQGfiNMgZ7qmGcfjrzMk9FNQvF2PevvwzAseYTGvZbz9pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZFmkdJEgFdvirR6h5qbdJcnkBiN5VbWKxp5W3hcesQtdkRWDza2CYisuSDed2XqgwAT3aBZwfWZ41G2dq35BwU",
  "key1": "rHurAPrugoxGRdnY92Sg5YdDop4rNEVRwri15RAW1jzTe1BqQKg2vc2FEUtVoa44c3KVbt24cTQFKSJ5fZzqBA3",
  "key2": "bdUuizdPVxcNhWrsdFqWJVso3QM7wnkurzhSWy8N6tJBCy71CHiXKWyScASXEEbzmhMRSbz6UVbwvBamSuqjYMP",
  "key3": "4Dk54r6a3iV9WKyp8zbfakiwiPNVcaQ3BvWSxhh6JBLKZof252gQFkdXR3u6EMyonoGVGnEFBc89atdtZSHc2pPY",
  "key4": "2QXd2SgA12UZg3v55m5gV6m8eSZSViCGrLVqftZRWJR3uppAEjrnDgkrQeHP3JpWE6fZ9Hq9Pro7Wq5VikyJeGZJ",
  "key5": "2ZXe8JUyRqdUboSHJWGEgoKDVKnUA3JmWMDDiYBcWgyVDs7jcCBNJu9uYtkrWUa4uo98jdqyww2CyuC4dTc8P9L1",
  "key6": "2NwEJjeSj4mYsSpM8AQdsEomhezFpeiJPuj21db4yY2zJNfW6KZ5ejvwnYm2tuEjYRznWFDRRxXhUyYWeLZg4WQE",
  "key7": "4YWXJwAzE4QZuMwqhtBse4pGbYXCvaUWdEUi9y7HbCkKiTRt2wFizoqXe38p3bUYxuFV5ekN2qvmrRBUjRi7MMQv",
  "key8": "2LN785riFK5iu8dmZ6pKf12babFHwbrZYRsKeHfgGT6wwzaoXCWeiAojArukYaZ6cnGpSkvE4d9wmXmhJef9GHXW",
  "key9": "2oiP5tcSdgAW644yzjtAVKJgvoHpBV8xGUcHYYiLETuTuvBbV4vyszG9aJcVfA2wHkGciFAmuHkRnDP1QuRYxQW1",
  "key10": "5BcSi8fdmGJHmNFA5ZvtTQVHyfDeD2ok97XyVKdzsuBnUoXLwKGGpRacKNX7qmkWELXrmN387LP8QUqRXQky12nV",
  "key11": "4ZPTTSWHFZby8RUHf3xCmjqRqj3CRdC8nCSgemNFcpUD3vCp2fZZP8EBqVzJaWfBhagDeemykUs6xzfzgttheb6L",
  "key12": "3JYoGBWEovgKsMrzXj1hxh6PV5BgaRhWmRzubgejD5mDrhciCYN8irp6pN4bXngnHaGNQUwPvprRiB7LxQ6nJc8V",
  "key13": "5RwtcNM11HvcHpgzYexHjvDfdwhSipBVfRw1jYVNdKYeDkj2grQ428NYFWMQ9Dk8PEkUJonafuepAJc7Ro8sXKXg",
  "key14": "46kLhHp7FZS3DpPyz79VwLLGja7XTYkGF8U1FSuKjwpWBFktkt1svZ3RhRZiGpSqmUdG5syMpwELYcucSUXRk4XX",
  "key15": "2dPk9TPKVkQZLzgRScRCEKtmz4UmmrMopx6K5VCSpNTtgk3QpenZMwYxiPjEW2duyLqX26x4QYJpbBywXZph69ui",
  "key16": "3HYhQ9SjiJjPR8gPWKpC2Vcd4uzbhrPx5Mp3xAKgU3uqQjnGVz7jzT3Nrm7b4dMgZ9zEr6CxQp7vZQCVGN8UYzA4",
  "key17": "qB1LMG8AqhAMti7cStaj2EysBJAM8XC9i5jSUw72R8om3eiowDmr9q5eEfC3DPMC1j7JifbYNXYAuuKW14vt94L",
  "key18": "4JyGpTd6gd3wAkzec91WCNY36JVSQNLLeAf69HnoRKzhmCrvTnW72LvQW41FHetdMvBNm2QaCpMse6pFDoAV86f2",
  "key19": "5VPfM1xjY2svexq9nZGMoGwUwzAznzdeuXSaqTH2TkAAQL2iq8PjreUJJ94nNTSsuYc6mmqs6fy78WSejyJxstmL",
  "key20": "2LQu5XUyXkSvyB2c5pXENdAdZgoUZ2qaRvmYTRYHQRZ9pDv4XDVYAoPcFPZomXJYaejGD7HLxRfezDm2LwFnf8zt",
  "key21": "4EbP9X5bTT22SymYTXRXfyAZHyYuzXPZmESDdHDPzuTjnHf4s6kFVCcBRfSJvkv84dr9RWT1Ntw3N1R2RzU9RFeP",
  "key22": "3gv8P5XbNTMgtduVAVSGtPBzwWvyCpe1N8nWABPke6WNSuTNRd6C84ndZzaw1H2vh4WXPjEFjL551DKYgZE9DN6w",
  "key23": "4y3UDcoafqKYWzEqw594AynPkFktcPFzQWJakzFUiwozJRHayBefBFEcyS6nBAz4PrgkNMK8XUWmwSTNdcSAUwh2",
  "key24": "2NZHyMXNCnfBTL1kX71xACSp3h7hJTAMPTiTwvH74ATCp1BpjWTScoSBUM9PVHP49QUoV3zGp45Hr3p9ccaEQW7D",
  "key25": "4Awq8XGmjVt53c8fxg2YwkGKvuGKscVHjkYTwy322j3TLn2mb9enmohEGALmMZKsZnWx9EDfciA42DcdJK1wG13z",
  "key26": "32wfLkzR3y2kPnwhJCJs54YfAunw1CJF3FafJHTVcLvGoazUxdfnA9ix37qAvPXCa1Kj2VMFZZ8snDuG6Lp5k3gN",
  "key27": "4LxJU2oJZqHNc32RfuufCwUo1g2myJhabX4jhrvoNQHDokT55GFr9uVRHAkpoG4Z1Bd4cRrTTQ9isvAqDuh6JyZk"
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
