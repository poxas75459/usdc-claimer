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
    "4ov2qxkWWxv6LMb8aHfD3YaSTAExEGL6bDDKuDj7KDfSW5QNSjAphiybpWEqsv3U6gJFpyHdAtbAKx2qS9X4ALWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56BGLhMzcuP7GzkogikGZwuNCia42RpN7iR6Wo4mhBuYK5FBmmaVVVDw5reGd98H7Bu9XVmPDhzKKEpB5NFzcY3R",
  "key1": "5NwTtRwmoJYbcs4f7rqVNgCrSrfbj94MaUL4T4pRk6oucfjk9k3eXXFNEwxASCtgU54m9MUSB6ri5gnWNPgdXeLp",
  "key2": "66WwejkZLeK3yNG1PZD46FcrQRWq3BeYWxqWEakPk4ASeGD41vNqw2yzVSoMTbiZF89y4JD9MRfdLm3eZ5uPByDj",
  "key3": "3rLTFniTfw9q2SPsBCokRgGtmTm3JYxbxNqFSaxkD1C3VCeHAt1Hpxks4MLmjLtc9aPxtE6B75J9fBHRwDKdB4or",
  "key4": "3vTbQiXdBsfdb19kix9pdgiAuA6WtLz5mXpQoiUxa66VpPSNRMnQhz2w4PCTKdhvMhg9jYvTZZJfLdKMKvLZxZZF",
  "key5": "5hK83xLwTPY1ors3jusvCPzRUw4Hst4Fv9j7HK8hyuTM7fTBXGr6H3rwHmyAMuCz23njxoLHJdBX2SLEkSJ6vFF8",
  "key6": "5cbdy7euUaVKvDNvL8djkrZsL5h7Li191b1ebYUZzzbAvpU6cxC3Hb4Di73Bdp9Ko5PWL7MM83vCC2L3j1MZ7ivJ",
  "key7": "46btks1fJ7SicdvU1tLWXM2UN8LffBP9h1wymhVegdwaVm1KaPkasnZsvjAeiDJAbtuoT9kQMW8QKqgJkmHSafv4",
  "key8": "4texigrHVeQjBTiRai5K2QSrgbBijHauoVftz9p38XY9Jbpmh14bVa1gHgbXYeMY9Ndv42bEoZd55UwBf8Cp8s7j",
  "key9": "5T1Rh45D2q7nTG969QPvr5xGztX1g3M622Tw3WPV7cVFb7D7hemC9jMTKoz4hNeqehZDyAJQ3oEq9SmDJS8orzEk",
  "key10": "prUKhuKGpKup7CVt8DZauehFQ8g3EGWKJLuY3e74qatEwN6no6jtQsm9La4ewaARDjdoVivehdJ286t6N5S1ZCH",
  "key11": "hDM6h2Ya3C72G9KaYrmtaN68mX1nxeqbNtBprgdXpgn78tpSjp4vSH3n5bRYXPvn8Ri7uBv2ZKsDAnuHkKVEgzu",
  "key12": "41xNiLCWCFzcS2KCWABWzpVbJCM9Hv3PVpvCdCC5ueMThnDRpCpea3BKbaD1xfnZFH9Wd8zKL3bL3q66CMZUd75M",
  "key13": "5RQSwaxKqtUNUuFhx1EX6NG9SeyH3PTEMAHVVAR3EDxxrN7HCou4VV4siN6UG3iYpB7xwaiUkrcRHKka7zcZGJ1A",
  "key14": "3irf17HSMe5cS4BcNFbZbRwmPd1XUoPoKAy46mACHqkRXiW3H7ku3dhKdPAixnaovX8TwgH8a63P7E6EeFdoPY6t",
  "key15": "2ddW2DgxuEKSXFum7TxWtKDZJyDSWfxtBWi63yNAcUxeudaSmnxMevQWzY9oYRJnC4qf6hQ5ctrQ5W1xxHargEYw",
  "key16": "4YBi86Ch9WnQmfR8TCbhKumUbMbwZDBGBUWyQjQndTu4XNgz4EJpyvPVFLNdt4K9hzD6WRAZvj3iEmAvz7R96WhG",
  "key17": "3zHAxg4F2Rmeea3FWS2wimTiqw5xuoJ8NJzQxbNQvSt6SkeeGbJVkrPXiGJ7irXFCH92KjRU74FdDP6CVJTSv4KH",
  "key18": "4ivBhckU9y7FkXUFg1M1GpSPPUyrf5bTDEboox8wVc6A9Z7DWUDkft4xiuEgMVQ4tZv34aQ7ci4Q3SBLtzt75WMF",
  "key19": "ckCtQBkwVAQXjKJrc5yCxeFs1q4VAVFGucLhXipBB7sLGzp9Q1GvYwYP6YHszNEJdJ4VYoRSpiSFQgEZR4mZCtb",
  "key20": "3hzpfyXeTekWSCBkLRTVtdFYCwruLLvpKBKxEtrKe3yBQjzi7i1yCrK8YxiZmPCsbQkiQCW42vLgKqToY4ih8KoF",
  "key21": "5i9VQqPYbFgbnoyPdAWPHMqpNpeCTCafm4Jtv1aNRfpUJusNEuPneMJY44PSnRN9CEo1cTzGqy4TyWm8Vd8WtD2p",
  "key22": "2LggSecv5fPeukPeEo6ghu3kUWA9KJjJmiiUGCrS6YZSx28TrZia54TLdEvR5i4wiUd4Z2pDkR2P16Z34STgQSUk",
  "key23": "3TWbXNAy1GQmtqmfZXRVh3Pi3WHKPLDFYiKByc5Kd5e7raWEvwL1kaG75myLUgq4AjsjLJCMiE23S4LSdtbErjPZ",
  "key24": "rNW4yhVMLLffvh1wdTnPzaT8onxVagXZXKFRZG8AzC5FMrXUVrxXHQtX6u7GrxUbJMMhnwzd6mynufXahJHsrfD",
  "key25": "2zY2DZ9oqT1ZmkdqF2DHLZmBnVGAXStJV7o4J8nco6QkGFFjTv7ppqBC8az5JzbKB6FcjBcwuFniCNkVy4ohHBCK",
  "key26": "MKPBvDbn71aXDwGfUCCcPzsDQdiVj32ZfT6QhxScEAhwKZ4cUBivur6ra4VQpZZPTEMJoQnyEua2CemWwTzFVUc",
  "key27": "3wvW2BUN4VueYfPAzvZ1EGTtzYigBpdhG1WUvgB4UJG8fzXWrvKuLwkEBg5wBdYp9pyiwPJUuem4xPkwSpCg2V6A",
  "key28": "49gzipSxoRvy4bGsphC6GUn1L9Q6vbnr3CizJrD1MwXjSTeFXqomULSPAiiWhkNez7MtYMouNpqsmYH4rKJZGVxc",
  "key29": "35f28tfm3mw87AqHgAQLPNd1h6FTd2aeoR8fWLxaa7Xgb4JyqYpwApnDb1Rj6hUvsVhLAKHRQEz3p3PUxRCDj81U",
  "key30": "5MHQcogdizpsxf7aoNqqNyJTbk2JtjxirccGDX4RDJbiaEXB6b1hcTc3eJq5etGHBGTDsHV7hPoobadH79XVCi9f"
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
