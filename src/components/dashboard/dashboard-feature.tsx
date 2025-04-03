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
    "4wo9VgYyGWTBNqkU29aFu35o8C7VU7sPKJS2M3uwK7BAtjj5gqvbTqnpa1wHE9iX3Ue8VkZMQmDGjUj5WNVy5Z9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Bgxevgoo1hUJybknuywPnjX5MBEGnHesBNFTQQPHEzEhPYvfX4MBpMJfGknZr285uvPgwUDKuvUrcZaL1eLnLs",
  "key1": "4zXQ3wGQb8UuDg4XxfLGgiviD5L4xL2LVh6uU89nAYanNz3vN3qyTG9fir3JnBwDhcmgBgQRkKgc4J2gYdyxeA2R",
  "key2": "4dHfEfJNBgx1DKqyrpETCK7squwpoA8VE1hNwXkzfWMB9hmyHQ2nrBxbovQo1Z2gqfANm7qqLLCCEyP1KKoaKdyn",
  "key3": "5PsEfeLFgBe92Vta8qjGkGP2PMbJVKChjHFgWKt9UGFBMS1GzuG92ZDmPiJ2WocnFHFTB9jPmcuTQpSRdvXJbgQr",
  "key4": "5roev61CHMjFkEXg9oHk6Z5LPA4dP3U8umkA7Wr1VvKQTwtBcbP5mTgwfdLayMn8ukWvhdKu2gxohteVrAh88n4e",
  "key5": "3hxWhhVFU6t257C5qb2njCGktLMMtzFENWYpgJmMgpjn8MWFzDVLAfiSJaaHJvYSFH9uqrEbqEkHbSv8Pm5DtAqY",
  "key6": "5S6jgQapiKnXyeiFaWLxvE8by3xRnEfPqpE2FBYESzjP7VTDpPpv7tUDchSCnBCAHFcKs1kZ6zs16JeRaNdeQmMb",
  "key7": "4cSRx2wyJiT5CxrUzdv3FkkWtZaaS3EqhCa7FrmDTBuDFGMd2MMQArx2kau2zuTyR9SMV85seoJyzR9TCtan6imA",
  "key8": "4ErqECLfqCi4bccXhnHcVqyd6EkeDRiCpPXq2Jia1uYitd5bQJf9KWDPib9MHUp1wdDhkoiBvi5brWcswCSuPBFw",
  "key9": "BDgpRd5HuM2rpz2ReyBMtXQ89aHhn2QnManAaXatDc3Z8ZXUh9xnbqpzUWxsnbMniMEt46CRj4DfbDnCxsfnwQq",
  "key10": "Zikwoga33Q1fQmujvrdKm6uGGz6ut7iT8TK7K6NHcdjD8g2LSvrFrWPf2npWqvq1hsZQq2wn6AzepHZh7TZXtYt",
  "key11": "2L2nkGZNNwXT6TV2eW2ppY26DbBR3mL3SkSfRUchGvQaaAf1m9o65MivDREU9QWTZ5TTDqsiCf7fspBpz7aBHaqx",
  "key12": "Qc1gSon8DHVmqQ23NZ4C59yxKtYMQScEhsuWiNZki5kCGVid4MbeU6kGAY2vW9mFxjtixvStfMCjSqhHXVT3XBd",
  "key13": "2kWsxBKi6kkutLXixktmUZvnwXynBkSvTfMRhKFji1FWwPv7Vdpoivn8sqa4iJzWUTNfeBWBbRcantwygrXcN2AD",
  "key14": "3S4wfEeSXadkZmidzU4EMRD5GnCX1kcX4Ug8fj5jrK3mSwHraV5QXYaY6sMB11LVw3LkQQG2vs43G4dSVeLJ97Qh",
  "key15": "4rxCDXQkvmm5zBUrYM5VffMDDjrzgDTNvgWsj4tet89PmKtxhAZjf3ZNAZ2yGM4qc4gqtvWoCJ4ve992jUkQbjQB",
  "key16": "C6x3U9BpcfnGxvZif7oKh4RY8T4f7wiDgrXPe3XbPE32mVcgMytejfTxaeJHQDYK4GzZ1JUFqVwhgWj8kxEN8ty",
  "key17": "3TKeBcDfj8YscBEgQTKxVrs5HmMtix3H2sQGLFhqUUivirfBKtBFBTCXdwey4azUGLabSDRJRc8LaWWjedJMqcTT",
  "key18": "4SpQv83zKAMZJghuFHjN9U8q276sYRAw2RxS8AMYSRQq9RQpvuVNqMrUXpeJGgWdbjWhHpX5NH2syD7Xmpk4F8DB",
  "key19": "4BoDZZLzJoh346aV7roP7uLiVzb9hHJiQo7RYnraAoBXZiHv6fA4UA4sZXX3zsfCdRMwMH9Nk17oM1H4oGRmfjnv",
  "key20": "2LPwmxueujKDN4KQdJHCeuBNf9SHesthBHU46hMuo1pFtLiuf9zrVWCLGVDhB2HBSUZwohFjvhzPchhzjkTium1M",
  "key21": "35QoFxgLDUHd5VCyPuEXsUgpb1rgfsDMda7EeaLkQ6EGFzW6yWvLvmVe2DhRb1bRBkNA6kHZHymy1CyfbktU1eoL",
  "key22": "4G4gvzV54NqQ9YqPK3mSsamT2H68BSTJCzUesBZrWruckkomQxmojQVcZoEjeuyPK2AqRLLEfM7qr1HUB8r6sbWB",
  "key23": "42BMk9FZTffNeacFX7V2FX7gZK7NAAeSRCzd5Nfw3WTEJMEmneLMCeTcJWZ5M56bKLvLVG1P957cTuGcvSV5ViQ5",
  "key24": "35DmemnwgTccyoGJTQ6vVNfRXX2B2LuxCxP5G6UEzkgC8dvZdEZYU3vgbZhbgNuoKeMLRPGbuBvxcjQKYLxMnxPe",
  "key25": "3ExWHkvfGanVhmVkBGyxKGtRmiqkF1iPqaWTGK4x31kDDPhTwhfCeF3SBAdJxk9GGUcxHdmbqt5mBmq2SkENHhpQ",
  "key26": "5py2nLTyyUZYRHYztq33F5xdqSsRx8donLk86ofPXs7y99FbMUzCqowLEsTHpm39ZkPM4Jmc44XrggVZ2V619Uqi",
  "key27": "5h1k77W75n5XtkwxLcNB2jUJDnEr1T61D8Nvx6VceHtGmRhuqRTr3WjPvyXaQod76Dqg1K7L71Yw3vzu3NEM9y9v",
  "key28": "5S9fYxtx4PHz52ooPMNXctVywQWWVXJvhFCkNpMc1ZXVSygoizaRSkMw5QFS55yqTdNKypjU5f5fPKVZEqkcMEjU",
  "key29": "3BhVnBNBKJd6Ytr2sBQySM4uDW41mQ7FRM4y9JtGDAvLhYSUNCmQCv7MT1kdrrpjRNbqTACX7zcgJnrBdZJkhJyK",
  "key30": "4jRtrfTaAT6oiqot4XKguE2VfKQQGcMMu29wimxQufYxkEkSrsQd5N7k8QMnCCsdSjFaqdXycojgJXkV2zKpVvQM",
  "key31": "rKLtewGKLQFtqySLVWHv546DADmHQxXEUdsovT2krMqVYQ19RpnyTf7bwetwgMNocpaUDK4a3ALeHNnqh1Sg7Yv",
  "key32": "3E4FAJjVm2K8MfjUrVpaQWUkmUpxoD4QbXDWfAYJKegyxweLRBbmUxmVyMwkW9kgRL6yW3DU4WoNBuHcLqTepMNy",
  "key33": "4sDGKxnofuU44EAzBsASygCB6USHKHWncT1dpvoQVLgHqyLThXdYretBtyEpVWzrogsWAk1bzu6QswYR5qMvH8ap",
  "key34": "4UBu995keb5ywXzEZVnaq54hQisw1iZgJNp4nYoMsWWxyACeuEC8oW4W85Y5n4mfXPiUinwAPSSLheacpgVfWSya",
  "key35": "3AeArP8Krgi2HwoPJdmDAaRLcaozjJw3bbriXS2jPRyy5M6EJDY6dzdtkDcWUcAS6iTjGhjzzi4GQ7yHCKdQJXzo"
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
