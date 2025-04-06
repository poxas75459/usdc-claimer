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
    "fnsx27GLZJywiUgTDhrdqSoJPtzLJfF8d7YSfvaLMypDcLSx1Y7cTbaQckpBUtn2iXmn1RuMQvUbtMepcC9Fi6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViThVvCkTp7SWmHWshBBHi2p3HtgdqzbDkYboTP5yRMCJfnGa9A6T7upxL3WKFtD8vMF7dqDEbZdDxSosPu5jnL",
  "key1": "aDgoUb9UT3f9ZrJmA8VBdr2VTuTuo3aarTcWpyCZFRoBXUK9sB2um9DJFL6GsjuQxKAMUBPcUBwSPScYK8JDKBC",
  "key2": "upynUBrEjZ76uH2CuiXXVDBrN2tC4VoevQuqNm2VmTkWtVvQt5GWmrhCeepQ11zQKiHi9wkAUdHdmgZZq9XVHzc",
  "key3": "3WHEhDgNqNQ5ijP11fCbEsLhDvcBncYVPC6rzn2fiK9ftRVbLGMJUWySmRiDJyApSxPSGt2awvDfSYUrR4Xv1TBy",
  "key4": "4qzEUi7xeUACXpkKa6ss7bUnE2w2QMKNKaQRG3q3hqGXs9WzD874iPS5CgGZeN8EdhDr2VX8WjuhYQ8PDHkv19U",
  "key5": "C1VPfWCWrCYt44QoFyLMUGGRupevGwxwYbYZ7wECpymPCPGpx6Y4MKnMsxQ6FKy6Ks3nMxutM1jkU6GJsetuFxu",
  "key6": "4JTjXm5XwHJ5UB1AWsftM483kAA1MtiV3zaLXXQFhJSfTMoJrXyMc5dLSGrUjqKZwmCG3P1Pf8LtE8LRvvVKBncs",
  "key7": "3DYybZgts62VUmMVPiTzbBea2NCPqCvufy7Yzc2sxoQXpUrmjkLQYFU2hQd7oumNPh2eCYP8DgvzMBgKhcJLf4Km",
  "key8": "2eTo13bx9r1NP5vPmuJGXU7Sv11V9C7VVdQW3KS1mFMYCGunbBwq4sW1wsVSCX2ttmF1QaQRGebfbTBMPnbx84k2",
  "key9": "2DZNKbkUUpj4ssid7JjoPQRBAGAgJdDbKcF8x5pjNw44UXteU2p9E4CebGCUNcZTbgGatYz1jaessyVUVaj5UQmf",
  "key10": "HCrDg83Nbxm85ceFBzNUF6H8cZbQikCeuFENPnQa5rhNMeEHMb63oMBxAicMZDNa2LDpvNLDg5oqmqeuMsVSXMd",
  "key11": "3vPG7mQL4sDzWAAHgHPkeas4TzWyYqMHzwWCdpTjbJFXWRiyTSWUbDW6rQ7ky4QARBYkze2cNci95hwWPjravmja",
  "key12": "5P6KtaGoUtQx2Ff9pSkmA9JmpssM2Aa85Fav2sCR61XMj9GR2D8CX6x3rBpaQgNWDkdnonL724zz3nqw6uxMbbDv",
  "key13": "2LH7wwvfqFMMWhcJrtM4bRQjmK43a2BP8pX8qKBwpSyTgneiPimsDkBefUPof5Mg8LmwUmh7pDCqne5EcxKEkRtr",
  "key14": "s1uwF74ofjJvXe62BbSnEe6Zbh2oAF1E3xkg315HBf7UNKbLW8pNdBXfkbS6uvvC4VVvwoxpJu4sHDgFjcMnzoY",
  "key15": "61KnvUtAnDf2JWveewrcn8ycfQrdYgfLXnwsnYfJTW1Rsat3v4KaGZ95hsqhRjoLxZcm7RQ6e5hfqBFYFeYT75Tb",
  "key16": "2bqX82NBihN3WJjQVcMNmxGyXoM5H92KzPoTQPV9oQQ41nLfUx583s7jp6KrAC38Xa8n4pfkeWWgu8KxNYjJWhBj",
  "key17": "2ghNRS37Yy1C83D7KgZDEZNhkvJdhTEXG8C2UbgBk15zkNkz3Wtr9nWeKtEqxzxBzHcikm8qi8YHLRpGgogA1XLZ",
  "key18": "4fUeKX7K7pZgRmgdcUvEL3oKFFYPJYwqq19EKUngvZV6WTkuCX91graEJCv1585r6mktv7tVXxJY8VLGTxgn6jN5",
  "key19": "ZTf3GKqHjdNupJFW7FZ6W9hGrZ28VCFzfrnu3up66vCa2y1zoQyMLRTcgTyw2ad7ox6UTGpyscsyX8KUxr4xCBy",
  "key20": "2JVvJSk8gCHvoZcR52UasRHptqYMgWcbX6nEgsKK56ieaEa4tsYL2WC4R37xU48QLVJ2Fx4TdGn3EqHwzDBkkWpb",
  "key21": "328M4C6jyoCtRVym3AKyBKGSqcSuEjDDDhB5NxCarsBAejjpDHvhK8tA47rWEuyXTUhWxxTfXRziU2r2vR9bFRXi",
  "key22": "2XPtnjtsyG8p4mdiQJNUmbXDvykVm47x3SRdCaxCU8FxNkgYdSzKnrTAfsgjzSumFqvQWh6ZuRww8WNTE3hTJC6K",
  "key23": "5mAyrqQX6LvRpwqWnNnKcyv4FGYGRGpDS3UmtjpxHt4JFpcH2vtg1xt9aYKUp1Ri6gsX39QiNGPHFU2CbTdqFWYg",
  "key24": "2a8E4yyFRmzzCykF1E9BJ5g9p2tG1wodxM7B8Brg5iucmt5oMbNVTNZ8kGp4RHWt7HhZFifomiXX6ikSRnX1a5oA",
  "key25": "4z4iZ5UdSTbAJoj5uikhprv991cTXHsuaXKN3rCHVu99WigMVsCVg2fuu86ZjWoaPPAHNWVW3uFsJQxZPaRTnmDB",
  "key26": "366sS83GD5AWQZJs7rFJ29dWaSvripu5G5wTwxcBnwng29L4JkZiX3m3KQs83TJ9zF6WhANBbqWSWEoSQbX2f3KS",
  "key27": "5n4wmSAExRjGgGAApyprsZra87f9tB7CiHC8c4LgvsToNwA7LvLRGivQmCQeeFGPBTjDgzjwaNaWHGjkrR5HyqJC",
  "key28": "2PTLuo9bB34AGYPFaYUUxJHHYjWFLACeQmVrbz2PpuMkigBke6WJu2N6fmfRTaGhdHjCd2YwETmNZyGfrjen2Rk7",
  "key29": "3Gf5bihwzqZ49dvKpb8LrjouWLbHsAjoTi7KkRuSmnnFhfejS25fjZ2Pmv6iHyEX2jzUunyGaeA4torNsAfTkgf2",
  "key30": "48VjSXTsxE91gQzYSWbbg3CFrF4MjCE5CyqWZA4sSnYPZDeXHSKxA36w3VVsp1wjShjBM8NiNxTT97yumrs2V8oo",
  "key31": "2k2SuwyR3EfT7nL2MxZStsNjw17o1uZvnVtg7gw41TdLk52DYSo5Abo4q8jCBziXsZ789ijyZKicMUR39YwEpz38",
  "key32": "5FdavNpDCvbxd3CuawQWfmvfyyP4DNa3vipWXkj2J9fopgMfAv8hXQn7e5i8aVZsbTsLW3q4DR53dFXzzsPMYUL7",
  "key33": "UAbMXMzBRMPKU6xTicig58A4rWGzyWic8KMhJYzsUUFWqE6RSc9DM44u5mQLbwESthNVPfMWPbATDP6htjEoDNn",
  "key34": "45Qw5myVGXVEbFjN5f8nkpRK3qyfYndARB3bVPxi8JwPUG9LecXjsgdCDLchNojQgyDW3Bkx2rDDeyiuhRVEs6e4"
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
