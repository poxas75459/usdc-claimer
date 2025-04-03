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
    "5Q2mhV58LkDqrwPejL7WLc5sTGqZeBjxuevmV9rNgXLb3ftYvkQ5eo7s7UMbp2iPVdgf8r2L7WaLE5oNtzRyPEkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49rAxdFELCuPq5H42dveQ8bgjDS1tE4BNfLvBKYqD3dFkzvbsnHnAn4Xin1wjKL6LZfeQe91W4iL8BjthKLNoiLU",
  "key1": "2tLmovPKB41SWBDkQv6vPrgkM9EnaoEdashRh31kGDvE1apmcUszCRWnN7oCoRexuYwG5U7a82V5B2dQ2aMEYoyS",
  "key2": "4d41NPWB2NPtTokRDVq25qJ6wYwXTGjCTMHU1ubLR7zbdfbLRf1tT6eD1AMRaUUmfDbWbz5dbvPEnPP361EvDEXn",
  "key3": "5i7szg6LxThXqoaaNbU3GM5P2vU1udGEhAoRWTFKCHhsioS2cmERvPmjMeBRgUKsc3XFav3Cf2N5FPCnQ6YDSXtW",
  "key4": "4wV2rkhtBYEHbAUZBmpL2v8Yo2oQTcjeVcSEFtpph6YZPvQJpYjhUhB9D8zzaBiE5JL7bTXQt61dXruHUYNv24ZJ",
  "key5": "5DiduXMA9FUgvp5FkoG89dw5EZzmEHAZHQ8Eiv3btKDaqPkX7W5Yryc5AqF4HUYBphwLAYA2sSBi9yUb8L4sc7oz",
  "key6": "2dxYWf4TYQRVgjBzoutQnxJBbiwTZp5BXavF6Au4Cw1jY3AKpAonFakPpYZk67fXHWdVkq25MM4K5v1TgDPTm9As",
  "key7": "4iohaR8yEzWiHYYvF9J1d6BAw3NbStnLJh4D7YqZsvugPuw9yCDVLiQKdJA42RYLPToQg6cFss47gLdGdCeYQ5QN",
  "key8": "4YJADVuRiAK1HDyJkdgEofazcnnehkhT6EsZodBGqoZmboYwbS3EyLynrBSBcYrDeXfnmeP3RdsbeaygyBGMR1Pj",
  "key9": "qkLAqmkZ8azW5CTp13SjxVjMmSYZe2iWxiESVQGKhdPU3HFn9QPovUpPzRYNTEERgpZRBxELNDQzP566HDnDqwm",
  "key10": "62ZNnGbvv7T89ZHXU7b8oxNJbpQWU4NKZ7i3VV3vS3Qw9t2TpfqMn5jckRa9MZ7fEmCruFEVHVxgv3xb2HTPLdJ8",
  "key11": "NdSuV3ECBe7nEGMYaJKiGozoRKv8e2Wki7aq1wActxC5YfdToB7sNJVLwJnJZVRaDDic9c1sEp5T9gYByF4rfRf",
  "key12": "3y8UZKPfbyriKRA4SQFqxE6DNk3vMtnsCVLYabYJfVYKop35Jtw42CeHnuKuNZXG9PBU35kU1bbxgweyamdPEg1y",
  "key13": "21fLdpnZHGxRjSj1q29BhpmpX8G1M6vGmzYTy9HTbZ6hdUdrVWbUwiWJiWLHWrtLzLUfWDZPm8VZUtrYMisqkZHT",
  "key14": "3bCMLuodmEyr5Vktbq4DeUVGFGCGAJGijmf9aTBk8QJjHXzvBFHPjKtAYKR3fgQeRXdRrg7NbR2ogfU62SvSRaLT",
  "key15": "3wjgMHtRE4fgjTm6VZxtcQd1y1mngYZVDcchX9pj1Eg8YnET2dSde7Rpyx7agR6Pa9NQzgJhCwqtpJkoKd24N2Y8",
  "key16": "v8gmSakTB5nHcSMm4hXvQsuHfRTdW9jkcf6TXg5bn3BxoJLzgPT3DpfF9WobK5tDf2et8m7n4FD7VeXWnx66VK7",
  "key17": "35ncn3cETCYsbG4F7HLetGgKCPZwjVLvgpRqNaiBF518bQUu6Rq2yqn8CY5rSbUcqUipcxnU3mFDByvN4Ljjvt4P",
  "key18": "2FMMjeaPa1q7ELGytHhmVGUEVLNtDst7a9YsAvrQhBMDmoPSg9r549VftrkuLVnja7ikmuJeJPra8tDZWuUVbPoN",
  "key19": "5JZ1ztmqajGFDUyt69e1XTC4tL7MY7ArWJmiNyPPwvsiFFXNEgr2ZdzXhhWsbMCdnGNR3WAaKXWZ3qYwoBqCSw2g",
  "key20": "652D23EM8m61CibeGewYxPPjayfJVBhyZ6KcrD7jK4ymvpXDnUf9GD4gZLSa9NjuQQYfBheqe5TjzjBo6JcPzgiK",
  "key21": "2HXKTDLaLCZ4xLAVABhuqy3uXLjsck9mTDTb9E8L7uet7ZBpjLPtyHrcQtrKpTnSibFomZ9Ums1Ca9W8Jj6sDFZY",
  "key22": "33mcSiBPVo3GxMPuL2FYvDLBwPcrnmjH1tecTQg1m8XhpgGqGcpbopL5wSrQr1iQ18VW8c4wRbR3CxN3ns92mJxb",
  "key23": "4g5ygp2ieX6iUrwYAhTQJXzFioauA2Y9urPeW5xjfwPGUJ7vPccbHcWKMPExfzDQGfx287ueABRmdFrkHQYRkqmi",
  "key24": "3LL1jxQS4J44174P2sXBh4bfCvXNRJoYf27mb3zqpr5MR9vhK4YiDXRfb9Asjbrg3MxYUr248AYi95A7oe9iqL9r",
  "key25": "m5xPAP62g5Ssv6nQwWB57o5m5fTzxJ5rM4e9YEoHAhhHkbgowaFboanoVtDvEJr2trpypGf4fZXMdVYqWvRFLuD"
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
