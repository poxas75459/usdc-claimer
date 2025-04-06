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
    "oDagWxNMvc7nPobcx46irY89dZBFAExUxgH5oqRaJ7zzNBYA4gfhxTAbimSDasEwyoyGv6f4nDqhKY5ddiKaNU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQ4XYoBSdmQ1Pvp8gvfZkqVk9o9mPmVBrSNj8akmjxVBk2XEPsDauuWFtyK3Wj1F46q7Q45XqT5yKRMFm6wPTr3",
  "key1": "iJ2cGsofCn7mbnnkfJtPZP4DH6p6UYxBd6chRNUN9ZhvfgnWQMmQNS5DFGwVpSN8UC9oAbvpFDzztn2J6jewnPA",
  "key2": "gqSbkYsrtfrSWHHCX6PC1kHiXehH2KuXCk71ms11qZFrPC26KuBrnXutRQVBqQUxmrpskHcxku1q6AyHLLhwDss",
  "key3": "6CSCJZRjRcVgNuQfLDJbooM2PM2o4nguiFCYniqNjqFmrkCEeEgQ6pGS6a92GT1hhT38ZfCVWkb4fyL3pVfgUCV",
  "key4": "2i8Zaa6hBvsH9JwTRWVeLCzC4Z2FPLbeFNy6TUdK9rX9Rr2Bepny5z1NA4PmRZsxsUwuNFaSA5a97w6EYqhURGz4",
  "key5": "3ddMMFRiEPHrmEM78VgH6XqTtZ2PH7ikJmUUQr3uvig5C35XzWaGqcorK6VrhDN52a4xASDDK97p1RBnXD6fhnfi",
  "key6": "5Q8Nxo9fxhW1UCxvTSqkyyYPQq6bcKgut2h4DtCCH9oYWxUuKuuwFhhEYv5dp2mo8DwFCGqCxXPHXHxhFjJ3KAr",
  "key7": "4goMRjtHCmdPscmBHE8NsVeFbws2aYa5JDrTY8TMgm3zyBUD6kFyctBB9kwicJtuHgUEDZ7QJuowMSfNRHMQFwvK",
  "key8": "4xmvU6cDTT3CMcSJc1YArvmG6DCT1WQCmh5zvb1rw4en1zy2oMw7aqN1aZ2YkEME5QMLRfYEunv4UyyMUcE8C41e",
  "key9": "41Q6rynBpJp5rgxbp3xfiwysuLoqReTGsHsp5iLGAArcQjyyRiV2DKvjTLdzccz33Hu5JLYH2Yz7PW28fpScAFZD",
  "key10": "4VhGWPRX92fWGQv6pb8ym6b2bVL1JdCo7aeRkVobUX5MCXVsHfbT4kG1xu7cN6Y2EQ2b5XrpeiiKdBsctzGE6UqG",
  "key11": "4VCFxuJcZTpXekXsBmzspdYnUTjYQ2QV7SestziCRVW7adKH2CntjoTSNxNHtRViUT1mF2qN71aYBCjYUxjknfMj",
  "key12": "4Hvbro1vGBL2fduFzJCmy44nMPe53THuyLGKTACdRtFQhWbdFYtjw5zfhzm8yRDJw9vyuGVLNysy37BoVa66Fq8b",
  "key13": "3PN9y7VRdbwK5BnoMpfBtpwisBZX9qq9a8Ajv2FgvUmteX7UR3rKUETLBGq2MkARzzDGBZywoFVrXJSerHM5bC99",
  "key14": "5D3s8tmPhyEDBdoaWkNg1kBBcX8NhEjmdwLBCcvxcNyBBWHoFz58y9ASCfTKT6PWGAadUUAzgTSiqbzhSuc4bdcr",
  "key15": "4NwqBrr5qyFbZGd2BgCnnJk9NtYCbEQtHcEGxegP3Zw5Sm6G3E1ojTHQrhqSv9h1yZazF5wcTxQfYudvJQRSZkjT",
  "key16": "2qVZGi3JUxgL2LmnjxA8DTKbCD7CLPadDdechQGsk1yE5UUKnu4N2yoPJY8guzbXybhfQfQBLKtQXocV52WhHwyf",
  "key17": "oGPsPghZUQCTE61yemKPGTPcoxDC5bM5Wk2KHrXietsXNcNxkcqqMizhmUUnsmKStngJQifY6FH6ZqWZHbP4eLF",
  "key18": "MG6HonumatRC8Y9SGoLUQwWqEpEMZLYpjS1yZnaQ73XhoLEKpPCyZNLkYyUDqpHKfVEEUj321jeCswDsi3RuTVo",
  "key19": "HKEZHfY35sBPyNmnRuekivP1MrRv87FN1rwgJ2wZv1ihCEwprKvzBcpcEC7dZkNXyuWobSzd7NA2PJJbgkk5EcZ",
  "key20": "dyzUA8WstJc78DkhkDr7hG5KqRaimLuXMLbYD9vWN6ocGhedVx4Fs9HMRqMhQJwyDhVnGQjoTLvR7wKugt6pzmJ",
  "key21": "27Cwfhe5mKAaWsWuMfjC8Gj2L9XujYuGg411ryCTc1pPpdaCsMjjCSMCYMKgYqDhZ3otUx3boutxg9x1mX4i7jo9",
  "key22": "5AkKXFCDFkhA5e3bWVAUCXv8C5SPiAXno9d3G6k13Wrcdn5s8MAxqTtiZvh5Lym2a9VP9cnxPucnXbxEKSHtS7Fv",
  "key23": "2QeymC78iQJFak4RRedr2fMyEWLeonyeKEjXQHhup2dvQPYjzWMnsubF7gV13aZmd6Zz1v1M9SermiD1e2CFsNkT",
  "key24": "26HfrzJBS4yYF7dVraCjbGjUdkVwBiTDyDHUHFAC9ap3CSfZ47yBpy2Ymbw4uzTXRueRtuZPbRQpwEzmhD2QVcrh",
  "key25": "53nn3Dqo5VkmdxpXCLzKK9EopcHFtNEapibTS4FMSzYeKV6CYQ2Gr6TbAPANVRF7jZWMXY6HKzvzmWViNJZyEmQC",
  "key26": "5W52e5HbRAfoJqqwzaEoM4GXZ7mMCmCxnuo1UyTf2GUczVZBoKshvnF45heFKqQ9AEYTyK7QhURNiGJTMSDbpuPU",
  "key27": "232fT1TkqLXByPbuNAh7stpmr7Lb9wj5CuZwGDaK2nHZSnyJXcSGdTK3rUSyQhLoyUK9EUCo4PTsXncwNgA9EbQ7",
  "key28": "2CEWwY6ZKasgg6qGEXUSR9LuS3KdSYib3FA71vB5VMXQKsgthdZfdxgchWSLmBfhFWeGKxXg4Yac7fvBYPQXWgYE"
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
