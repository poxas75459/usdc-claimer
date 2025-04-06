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
    "4m6VtDPd4wrsGmytjATHDiuJUdvd59A6CEBSxdeXrQUTVPPKUfLBqAEAYKYV5Fu1dxf2eerXjUZqowoWvcF9Tnkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EvRR7z1KNa1xdeZqQNkyQWNQZ6xkbCz1zXasUMKybipwbdxkKFNAGF2ayufiY194Ceg3Y2Fyf6kKxMWfRC9LN9e",
  "key1": "5tTUYeTXnLAzA4tAjcC7GjrXCcXbbqaz3QDGNzafBGtMGtjaKtfwANhedpaMq6NBvmGP9ATiWtoE8zyQ2wQw2sho",
  "key2": "5P758uxH5HBS2vr1TDk9osmGpkGon7zpMsrjMcweJn54A1nab2c1VrVXKycE47i3sPfPFewG3wy27e8kCJoGtd6R",
  "key3": "5euCMKzKHbyAoxKEQNnNXBazdMworziCY9ZXZ2t5jVZt5Fq9uPWPbNzKSq8EisqMgXJLvqeVwZvMZ3G2Uzagpqbb",
  "key4": "4QE2BoQTB5wb8pecGKZRnuD7sJ2P5DTF7ftYpdZWDapr52ZWpV6mNz4xvA1VERkkH6TeYREPZ7edTYNyPBEUxZp1",
  "key5": "2UWYn1mvVjWk9hPQrFBjhELR2Y4dk7goqW1PWFGwnNR7bcTA5uhpPzaRdUCssHWVe7c8V2y25oJYzUXMrq6qHu3H",
  "key6": "5Av9ChbcWdkwqTt9SFPtD1PmYiyzfrY2s1Uhhu6TTojbv4oq3Pq7oQSnGaypDRtBhWjUoX8cGM7TJYWfoF9Go9XP",
  "key7": "5TokofYN2jv9JaeTmHnv2dmUciRYmUjqywEDVeUqxL8b58JiihGztsrCtdnSSwZzfwBKUX9stJ4fBKL9CpNpQJym",
  "key8": "AbhitTZCbY5ABrKPorDqfpVmpBHW1TL7H4vZrpALpy5i9i9LQUBTNjfAayVdsNmUjdfcFXq19rUKvMdgwJKSrEy",
  "key9": "k1cPKSmFJM1efy3tuPxgZB24CjmuEt9YgeJJ5BQbqwpehGhzjpb8bWnrMg3cJttwGCdtz8J2KqsbLy7rKyJhJh2",
  "key10": "3noWXUfVdtPeYup1YaApznkfj2JuSzAGxzMVBXzQqFV4kmnmsakd56twtgSF4E1j96ewKpQMmGRUiNbc5ZG8kDCo",
  "key11": "3VgiaM8GGcaPhh3txjGjjSqs6Wo6W3JcS5eDaEZ1RDEDLkSYCLW1iYHJcgyzb2Kr2Y8mfnqU7yuc1rHG44ThEwH3",
  "key12": "53kgdNTY9saK5A4eHkiyENQpjxy5yxS6gpintEufHq3gzWXCD5s29TyR1hhSXy3UPj2J4ZdSkQxGZdwiGuFPMFea",
  "key13": "2iX3mXZrHn9vK64B3dw22gUjwcNofxYAMYfAWzgRmthxeuXDzL3GrQhMokfqHqB59N5pvmYNiY9MmKT2SJMC7Rvx",
  "key14": "2SSkQSy5L2JEU5e8BgR2qpcbq8qvuumfgLVpfdD6qsMW1wW9AkbUAN9K6xQCczC7vL4rR9A65JwkVzsqo4yLWryd",
  "key15": "5To42189Xr4bPTSJ8wigQXYKGBQqFTxgj2PwHMs5bxVuhCbKs1Y75vaS8DwrsMbwMiBLYymGDair9KcNBpBJTDBv",
  "key16": "5sSqcf8MyDSe52FZEz9RcXeZkRCPpewL3A4KBZyNhvVejZSWN7BpC42tXHqVfR1BtVtj7teGwumUQvwX6hAsdwQu",
  "key17": "5Ncd3R4t2kxmxQ2pHmFAEJLyPosWzxqjZaxN3TKEAC2EZPskg7DV7GU6oJhMXkJxQuYdxQ2DaCWmVZvduRHob5mt",
  "key18": "tqQ2YrMYPw7rqbiwhNYvii3JJzqwL7ANjYN37v2aZugrWX3jCknXa5SvE3bJYbsL9fmKACbpQNz6Y8nFSGA5tr8",
  "key19": "2JzXTUgF27EpGMj6xoiiofTJgpNV18NpuDPkaJeU6WUyf8V8AaVfnd1qSc3zAJLDyBfPtBvnQqAYPQVngaBiWfnY",
  "key20": "2EUTXiVmqwJhPQEqHfJK7iKUmP9dntdzmhQU3kjLs9yrfhY92tpG41qJAPjLrfjYms61Gq6pLhXJRywYjZ7W8hZJ",
  "key21": "2o7g77CvsaseNHfSDqs1stXNDC5NBE2ZJNuWor3qfTpsN94ddHgtKZycz4RmSP2ZKpfaiPPKjciecB6b8J794qWX",
  "key22": "js1L1Mg8c1uY9AV8w1H2ocGZbnoZcJnZufoP2L46SgZYnGDJL9Ua2JYh4wazQxLmcybs5s2gpX8PhqW7JUvEeUF",
  "key23": "5iACQ6mgBCzWYP9cMab2hNYyyazdqdT9rSgwm1ikocmguWVg5hBwxpswzAtrtB5CxxzgCg6VfNGz5HJvein5BSNq",
  "key24": "3KxM4QBCr9DWEUYhUZC9bYC68ruEjznCEnWdKYdSfCmmrKMaA3YSoyE2f6iwKFHu25pa6qduc28Ux3rYfnMaxviA",
  "key25": "5hzsvNwUyxX3Z8cJiZinMSt7wugnt9B1QeBdeBpNtn48ZE8B83i5pTRi7QXy4cw2bMSr3fzb2f6mN3jbEWWuviyb",
  "key26": "4r6rNc8hLdtRD8UdmSVY72Z4hgaDSi869dm6ZcoEcAunJAgE2XvrbeuRrfYMCyxaXZvmMYBp4cy58BRAyNc8r1db",
  "key27": "27iyVXhZJ8CRF9EkuaekTBv1XncdhUtSJEbJxyULzVDm1XWfebXz7UwCyf5D3L2L4RPsJCHmqS7Xna7i2YctLPir",
  "key28": "npVkzeMQagYBm7hFn9YxJ84Ltkwjd6Ba1H3Bvb3dWaMMnBUAdgkaVYhcxF6U363gE4ANanD5PkfNnzzE1BZrBZU",
  "key29": "2Qcp9GE6m5v16seqBUFjRkXdmpWp6LytLZQAdk2a1pqDsRQtArguX7qCdrGL1xmfmNwchjS8XCL5j4itqYXLQmKr",
  "key30": "2MJfrFV3VmAfTMdsjHjdtaauTDcJaitLmemFQnBNzTjdxPWbCsKbgKSdqdijQgxk9vsqZcQ5KNdpjFHfmRJje9tE",
  "key31": "3f1GWnQTuaRDDKV2r7FrhLbsdkgdvqbiiaxZR17ELok3guHnAdFhkZtx3vf6MrTZHvzswW8Q4AN2Y2QPh252hZYf"
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
