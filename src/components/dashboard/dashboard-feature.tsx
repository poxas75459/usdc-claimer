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
    "3UixoWbHjV9qsKjsvbmXSgLRkVW12EepbGua2vPragpyPZNaFz9c9iz439fYJygSiUqrf7UNPo1YqtfFYSNiK8Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mAVakR8ms49398RvYfVQ2PfmkRWC7JXs3rTJwSqDBahNuBTDhZnNv1fv6xpsAGKQ9WCcbqgw1rSNF1RFzuUYjy7",
  "key1": "3iFjcoNMqgxLKcQQbERCA95KKx5ifCevJ6c1ckHtmg5HMXpNfwHEXpEgW635tUXah1xX8Ldst8QMLadzwxq7WRV7",
  "key2": "uhC7gSk7vf72UM8YhseeXKC19QPZ5aUpBdpjzJ9zKdgw9TWpFZtfyafMQdMSHachzxYFYXvnzbLeqxaFFhZpg9C",
  "key3": "4FtbQxfBBsbkdnLdXzpeSknehsyV6CpDFGyrnGVdFwiJMe4vq8QfTjgH7gVvFzBm7HMNg8nXeYFVwXFQtFbiabp3",
  "key4": "4XRCKNCgKFKQaD6LbvKB9TKeCGPc4TSDqNPGroXjeYDoMMH94SUMKdJotvMZvHrfBACzHCyTxqh26JhNqkTq2ta2",
  "key5": "21tnEjG6XZkbnFiWHnq9HpsAGYn8RNG2oe3SFZLA9GN8zurLNfgFsBs5UCtiZwZTouqUGAnNNoBNT4CHy2vgBt59",
  "key6": "3wqxu3ADYHCgSVxsCYFDXom6wcaKJfBoFxAiRjxuuaZ5hsvoDUVCG9ENpZdvh2Gh5qKftAwMPZ6kXtFud8zjGuYD",
  "key7": "5p5EJwThTwBMwoJ7ZYUSvnzPBqbi6bKTVEq6yWrSXprdC13iQjgxaDPz4SkURKmHSipWgQEg2PQAET1g7NjV8p3Y",
  "key8": "3uGf8Zx1PqG5PgMJHmPAqwYSqEJVsPaiBgFdHZ2QpFn4ovCXH3nsUudr3j1wPmkJXvbZ5jHWPPH4G6MxTaLorCE1",
  "key9": "4AFhChNgR1VcZT4KWM2yQcaKPW3yL7ZKMuRZtT9qQM7CR4gAGBJkcfSqh82xCxBTnaNJrzdJnTnFLWTBvmUNwHw1",
  "key10": "53SqwLHZStBgpJk36d8tuMBdPDD8jK9jJVetvxbho5RQdBLLXndavX5TyHchur2SaqdWtchCwDb7fPH8LQeJEkg7",
  "key11": "55Z3URijEtLpmpM64nMDy9hk79jXTHGVUbUnhBQh6mB1apqEvSLuSZnhWyGnNZ88A7BwTBaPtxVWJXVc7EFue6EH",
  "key12": "59sjDxcSK4HDeZ5fKtsa5YDUbNWX8KuEUpwzFnQzke3Hf5pXuQLzRz9TtdhKojC49zqq979hZDdgz44qRQ8GJiuA",
  "key13": "4RZEkeqfwbchcZtj9KbLW5JYEtMh7t8NEg8JArnx65F56SB1rkJorygKrBbzrcrTepW4t164yJ6MFdKHFonitfu",
  "key14": "5SwDcTbfwMyMAX8XgeYVj7y2pdsdqzVXWPed4p9Tdoz6XUQE1ZbPYB2ARvK7baJ6rzVeMy2DAcQPMszHq4rmspz8",
  "key15": "3YPv76v9QFMC2C856Z8QrUJfxGeAVeMjZ5Wj9zg4kyodUCPZqEWFacc7na224xzaswydjdTPMSkKqEoMTPwrscYL",
  "key16": "3vWP8TU6vg6YrD3GiaHF18boEFefRAUPKUQyPZDepMnXDAQpfLro58dNVSUWcpHNBp9evtLuD1igvUFRhK4B7Z9h",
  "key17": "4oAcazPLMmx5hA7NdtzoGDyzdVBx4Yd3NnShKhbdekznEHSDHijkezFXAvcfZ3RWW36rzQkATV9Kkt6XoxFc265n",
  "key18": "5UMDN7DFPZjswWJyV7ouctT9YqeugVKadK8zYCxTut1SxN677N8pt4PfFfNkaJrNF9uUW5PMLMWAdtgY5PpAnUnx",
  "key19": "iigzCNxtc7cJvWe9fdLVY3XB1bBBuV7MY5zwG3eGoaAndrbWnt3HKSgNe1zLFpPar6pyVdBqt5S9VSH7ZH3eLnb",
  "key20": "5fNNLUENiTybyHMdy1Sp27Uwf3xmJPFU1DRgJaQ8vrAPM4hVGamNugWcicxTiEF3P2sb1tFKzK5a7Rf9qCwM4bvz",
  "key21": "2yii6FdM9Jhb4tki4PPEqvHEAcULzSFMavCa1HWqyf57uacb2tGUkLvu6GxjK177NR3NrJd9w2T5G2feRegBx6MG",
  "key22": "3BMY3y1wsxBD9eqkQNR4Yn6krNZjQHWQqigHDR8WfbkQvau9CZwK3gAWtQFkJLqoFS2tk51WYpRo1bTXfACpc4fX",
  "key23": "3oCx8p7PwDWKGXoDNPKy1AnYxfJumnBiLYhAGzcxNAywjyeyXtkDHhbKguEdqgMB7CDewf6dEXynnEcp8QsHvzXA",
  "key24": "45udSBnoipb6xwtXpPsepdad9kUkaZtyt7ouzpfbJvqeqT4HZi2iYrEaryMCmP4cZJPZpjNrrgKq1pGXWTC7Tds4"
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
