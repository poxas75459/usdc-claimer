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
    "2SjmjrJiYyRXPYyH2x7dJcLg8FHDhsGAwYseMMfp2sXavdXWNPuaK6wudcJaq1eHwABGZVmUBPGncbyswVDebnwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qznNcamremB1bSpSBLMAMSPirsDsWxS8xN3AjicPcVnt8xbgVqvM8aM9nSUnnmFdf1dLZjToaniCD3DGLzjwvsd",
  "key1": "5LKJfQLNRxB55SW33FtyLqxSNyiHeVdkySLHnGHSRbJEqbfN8N8mWL6u1DLEKhxNiZmz1X9KbbVsdUQ4YQCzPyDj",
  "key2": "5NkUzkBLnSyPns5j4jUbV4KoS7PWSACDwakaCRkxeSgAB5Lgck8gBdhB6VHyE8aKtGKuqxoQyJUB1NDqShQ3HWMh",
  "key3": "85iaNXyUKXLxWaB7kGavYUXesSxM2zuMnCW1pCDqECdSFLS366KcefNTxKc8cjr5FdC6vWZkLvEMgoNFETVPN89",
  "key4": "5NhydPFEfuRK6hM6B9wVkAbVzfgPKDYjjJTqqemGgC9vVh322NG7TxHmcBMNDssT7KFXFUAEVuo7id1ykKPFHUrU",
  "key5": "5L2xmupA58cvD1LyeP4tuQcQDuTDJF8yGSivZBJcn47YpDcsbESxPbLB2eXu1r1ngsBT5GDf7Qtc93dhCKH9B9DX",
  "key6": "4jzJDojkfGskZHWzjCDk8YPnmVeMy3o5XKN9NjiyLQbLsCjUD6zTJeK1XJn5dZLj3ggfFX2gKP5gMX6CsdA69fB2",
  "key7": "qYaLqqCW6me3grrBu74HBmRQwkFQ5oGwNJjCfx7Qr252rKw781AvPzmtztLUXmmxcXZtT59HCtrakAxTQYV8qT7",
  "key8": "xo4bXtb8BZAB3u9Uq1Jv6FzrMJn6Jx2aK1bfj7W1Ld86hwgbaXjRBi56ixnJBNsEh2CSakt3efVjf6fDwdEhRM8",
  "key9": "3SGbFVvs72LW4p3eqyHDM7sxRSKDU8nB87yXEKZLweDu3dHcAZVvWEejFch47HKQMS93jied1ZdAWXoRefZ44cmF",
  "key10": "445qVNrqzSxL2SAC9b1hdNad1gYtirLG33kRWaVt4S1JMQ7w5aBJ7XMaNwFC5iiXTaCYshVH66sLFPJiUrYHVgn7",
  "key11": "6kjsNSoe6fSthD2SEri8tZgSYjRZxhRJByT4e7v1jVQSoftxQM1S1ppZpSbB8he5jNxP6mNZmpw95hSC9VoJbP9",
  "key12": "3aAi6DneVpkq7twePi7D2aoWT2bP8wfANACFKd1kjSbbUinqo54Nt8NRdcZM5Kkd8vxLgwkbASDf1HhCLiiNNM7U",
  "key13": "VVv46QP6UgXJv72gvLZwMZg19ecdXUPa1yHxg5ttigqZJhJrb5y3svfQSB3PYUpMK7jnDXqL7QZVrtWj16MpYFU",
  "key14": "4JdJLGUt7dUjgKCxkK96ekW8znDEf1Bgj1FLvfxwsN4ZpFGfVQDxgSWWYKHbmzyReWra3wfzgX67tcftcst9aHP3",
  "key15": "4pHB3RQbfR6Cio3bAcx8f89LmM6yARWjKC3M4Rk5x1nkPhYiXgmuut7bw1HyeUPxDH5VwhJVxzkjwihmYfQzHik4",
  "key16": "4TZTHSUefGZcNedsoEF8Xppi3NDmhza197yMVw1X7CXSXtEBdTrjxRBPcdf26ZhDuxb19ZtDvU84jfQN8pzfRutg",
  "key17": "LErUE2Xipuv8ZKt9bUDDh5AmMtuwKWkjGXABbpqBNLZE8zjik3ETqyUarzv8HthHm5EqL99eYSv2Z97qeQ3d4NT",
  "key18": "5G6zz12cRJWiay5LUr1PBqpmUmqCongA65oA7bYewdZgPZbaxya7r61TNcqnN2BZaMgHFwgvGSP2gXbfgiM3YEF8",
  "key19": "M56743FKuPSBoZTMvTxSbS8iwheJudpr4zjPaAESgrPDUrdKhEnvMFr39Kug4hypDGYuSaHTWvCqGTLvEcN7Sj6",
  "key20": "2nDuFViRQiAziSaSaGAXrx9cp276HRZfFstgQJNThfAyixK58rVB6Ewh2z5EQA3yKZSgKBatZuS88CGZETvyNbJc",
  "key21": "2GvSQRdVrx8H78r7iBow4AKfE5MuvXDypFtD9zosXWW4mpFVsiK7mrivy6hapQj3VCPqbWPikuDa6WqMsvHtvLDg",
  "key22": "dvdPeEEV68tUv2S6xu1Wd5yX8GRu7q1kWHDtcGMBLY6UHWSc9Xm6BEmYLR18i4YbqSbZz4ErriQVog1iuK3qEU2",
  "key23": "4dejUjobVY1iLcs6bGyxEbjVxdRTsCravp8WRymrZ8FFLKPdYRJsnLFwYrZaEvkUGvL6zxRStqupS7fp3FeWh5pF",
  "key24": "12A5hgtDmMj4D7NTDjUEsxq1pz8iqK2aKRPgDp2tJbb36eN35NjFvAJoRDJPqw1iCuXwYs81fmvYXk9MdhPNywpg",
  "key25": "5QsRGgLe59x8Xri9BQ8nTQidKViTdmKmpQTunHoX6RpZiZ1yzvsFU6QjjnSNVvJaRvYHzWaKF6NxpEjpUuo4DnAX",
  "key26": "UQkvSvCyhbX8Uy9qepGntjfJtETkSc5q3rYGshF2GMzV3T1MiXaP4B5K61k3nNhJbrTvPa8FHre9yxc5pHAgst8",
  "key27": "2JrTgqfzcZoiUuqx6KNCKCnaTqDGVegS98QZCCJfbSvy5kFCeTxrJKjjnDAzuf1vcrHPRFxXi1dDqEkT5NdCW9ae",
  "key28": "4bHB9tPQuGWDpKe3AFVcfHzb6Dcc7KekSHWCDmtzhP6rfLZRYd6yQQigqNEZwYa9ogv5qw1uFKXLp3Xo8nNZS58P",
  "key29": "5rM5gWQKgAehnqH64pbrUoTzqzavJcH48LSz7sPBqvLW9HcrnwtwV2aPTJ3HEZdqHddp4hDSxmDaR6wZSGv9HDCN",
  "key30": "5UErka6TsPjyi7LQTMCbL9ciAapUnFvuS8223as7psxD8U1AX5uHUEae7Cmngj5nZLgNfuUuazm1y3VpHAnUK3d7"
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
