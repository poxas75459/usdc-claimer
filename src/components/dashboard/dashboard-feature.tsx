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
    "3NxGh7yHS43honFE4nHwZ82r4Hzjv2CZiCgMHFLDTCZnqqCBQ5SiFxTA2x1iWLu98xW4xcmYv8zQzg2UQNNTEWny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACFGZuk1YPzzewGHL74mgnkHfZnXQspvxmsp4QsXVgFnkDGnQc5KGXDcLp7iL2HHUQX8cSYoATbAPGmxM9iKQ4J",
  "key1": "2BSXk2kwCUTJ3oxcoVndWvjDrecvmTzzK2eV6gaoNbQobtwrBSvxag1X5GmJnvCHr5ndMSqF8xre4HYYkjhC2ew2",
  "key2": "2YyQ6EK5d3ExwyJWktucSsaDdq61YAWg1Jc4TAfdKt2X5GwuJca9AW4rVh8RteTijygQhbNcGfZkiBtURzPnd9Kg",
  "key3": "3U31RZf77WoV6LM15SxKeZujwPPecKu8b3YNQvm3tAKzLmCuzytSJab9ee6V9v5oksj7twbbPGU49pbzWSp3TXB2",
  "key4": "QNF2atACL7zHdWdC9K1ZwMUsVcXptZhDaGcqrtrdDE1SCu55TbWWL1twrCdsYvDxih3wWQUCpFDtEpbqqgTwc7C",
  "key5": "4ZogLbB8dM4M3Fo1WJ8NhKsNBtHzy438WVXNF8yJ1726cSHXbJtm8a2mjDYEZ7cePBC8Yt26CWJRjr2RPDRiFyBT",
  "key6": "4mYVACxb5LjjJmBMPkkM9NWcQPXcSztfW4idMotnka8DYVnSA8DY4FKptJKBpiFebmZRR74xjL7ndAMEVpYQPTtF",
  "key7": "iAXtBJDwwxqW7E3942Kzjh4s8FiZ18UQ4ywDGYdf5XLdkFNbfeqREkmZ9hWWtMKFeFRhqZtytdTp3Fbypy3z156",
  "key8": "4VXyWzUbPEd9sNNEVhSVppvuL5DxTUtp24rrK1sY9R4R7HT8JpbgdF3mt8fjHinnzvrKfHqCiGoPE6P1TZjEH7VB",
  "key9": "3W9FcKmkSujDnViEiduFQZYF4utJHxRgASCpA3hn1smym6HrRxhK6qJ8ba58Yu515mVuuLrGuhHWPy5cAEMWoqkh",
  "key10": "3kJPybJ2TxHAH8nbTztK3HNkMstnUknAWJRyYBQUXW8W6QcHFkKTcw93U5kutJwcJzKZM98usZMVXA272mBUbxvN",
  "key11": "57hLEh3DwnhW36GhTiBSGYMrejRu9j7mEXbNDeNRMFYVmTkPC3RHFqforpDNazzDTw3MaikXweHCZsmDAyX3wDT4",
  "key12": "1YjVhoeqiGPHEfiEhZxsSBfaziitR9yDkw2HzynpwvHFGRGMPJTBEY5icYwoMfquzSgphZeLrG2yr1F1yChYJ2b",
  "key13": "JdETtzmMPMcNVrMMP2611dacD4VY7vAyVYaLFv3M1CigGbC5tMhABMa8MdAFJ5QmhhiRPEptvckPFM4sLJPiexf",
  "key14": "5of2KyzNxgksZNSpkMKj9pe428a5nJtRHKVWCYHRVcWae2S1DrQZdrXYV5nCynBy7M7ZNy66dPFG8Zq2snin2pzF",
  "key15": "4my1QfYJV8rGWRRu4ra6oPkVHjmadeoQJBmCuHbrCNmp3454g7ny17aLvEhFsTHnzRKJ6siMQbarXN5JruNBz1Lt",
  "key16": "3Bq7jMKL39ceg8T7UUKZKByuP39jTw1e4NMKXNJg5SDGMxVPc4umomnfssXmfnSAtNiAye7wpLh9rwivhbpdzT6w",
  "key17": "5avdRWt6jGRhCVVaS8bNQMUZ613P4Ndmc8nc3y9Y8pA83tfpKsUQ5bkCXn3WpPSvoWW59KYbWC72y8zV7FmFcrpj",
  "key18": "5gQW4zp3EaGYgwUm7e5yG4XJcagh9kXMYQndiqQKTPy2jo8z9w4eWbqDjYEC52C4wK78F5AoU17YisqYUhnBTsQQ",
  "key19": "43xDrxPc8Hw1qh8zvRC3zAa1wCrUo8c1vu3xMtfRZ8tmPWGncZra73pXQzPDyvSKe3hhnHsT9JEQg5hJqaxVrUNX",
  "key20": "JcfTogUUCEstKNJQV9LFGaJusBFdZYgZ7jW18mzkeWCpzrkVzJhnWJw79GnWL6BoxidBipTqWz5CDz7S6co1cF9",
  "key21": "4xv6g51afX9AioAznf3b259pS8neKYzxdTuvpHD5HBH4AGqc4PyNNs3H96dVsLGB4WrGSEZsAWUWyNYCDqjEWcEH",
  "key22": "Sp7ZbHTAUB7mhUPnCvfYmn4LBtBsL7QYUxZC8vmmb4G7r61WwC3naEHBCNfBiJeM9XvDbofmof9WgGufP2kFxGg",
  "key23": "3sncdBvhiSt9q2cEU1ZedvS6Uv5SiiD6TDqe3exQT1ZqUeFVSL4AB1RMx7nXt8iL58er3bQc9TBaachp2H1hZGfc",
  "key24": "3fg6G32FjfmyGp5YDwVjcdkWqnM4RwzgmygDYYq255iLGDeVqippzXrwx1ZC5UuVZszxhgHTdtwB5UBmfA1g6zL2",
  "key25": "55UaRZtyfsGYJkbKHHeRUpfRg3fQfDv4LwyVwsHs3vwvdssAomqfDwf1xh1U7maD7sTnfhRffcLwrXgLP4CLrfSD",
  "key26": "SY3X87Mpyh1XUEEdY4rzYEKMrfUzZVaAP5FF4hXtJwGKjqPnon8VtE9mJSfKh4eqWLuQsyHiHscfda57Lw9uKu9",
  "key27": "52QVxRD8rcxBn5zgPnjX1tsX5FZR4PaWBhrMtWDg87kzcHWojwD4K3pxhRGCrL34v9Qg8KEds2u7JFGfniuT9cvU",
  "key28": "3N1pwovD65hTXF8n6BWGhMyFYPvxHxitzTS4doUierxYZrhfSF8saTJo1b3M9p9mmNzM8NiM5xqQiFPoamGN1pT7",
  "key29": "3R1gBubAFG2wKV5siuiCEgY4VuxvZbR1syVBxa7Yswnr5GRcNhPuBmL7p5HQj4NUFBBqJL9z5Nja8PoVvfLHDUQC"
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
