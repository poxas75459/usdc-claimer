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
    "4hUKxVJq7nQzUnNm6CpsWqameuS2utZ6MtR3M4kV3rdT3SWZzCvJPXfETRcSchEkDf9CaMr6QnwVDjXAPu75pZyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wbC5y46Teyrs3mchcBWt4fbQteY5zCfL8pjkk8aJREzRQkucKv6nY6cr7kmQVCjP2YmcP2sFHrG7G6ybowQdwAb",
  "key1": "jxURyLx7cLxLUrPLX3LPr4RigUwpL9Ggp1qexnTbixuQSpah6uUCUhYuxrDv6j5XQkAjPLskXGU8g6ud837mVxe",
  "key2": "4h6Gmpgih6ULpNVqCVu1FtwQmYjt563ahpwqEfbe35zFFLgnK6ukw8hQKr4uwAGk7bPokSgyJHQShFQoFP1qcq9Q",
  "key3": "6179TJ5NXj8b8goHCEEnNKoCaRQmE6kAVAymimYCvM4HJ4u8uLqtg8orLKrvifttEe2uaZnQCaeBDa9qSfCgaPpv",
  "key4": "61KPZDgPPajwvAwJN3r5dyEHz3AGcBUgXqvAh2yWBfVYkFHCRWDHAmvvHvmDUtRTi9wYMh94wThLNRn9f2p4fg4i",
  "key5": "2Q5mS5qDtEGpCPwUhq1iLxMUkghFrS4fmn4uXgq9kMfGGr7LsoEWioWNG6MxGteh9sGYpJnLk1V4eXikCyfTvs8v",
  "key6": "5xURQtux4i8izNnoKBYEQ4USGusdNrvU9TVWoDoAambyJQAKN35txUfqhP9DbR2Au7T9tCca8P2kUa9DQyUKd7pu",
  "key7": "2e28DGRJb2YJPV7SF9LqyBoRQ15m1A9yVpXfGS5ziyGSH2m7HhDTWA5sk7kyQKrXkmsXiKXBzZRaCV51xKJvqTNF",
  "key8": "5b5eERZpg145V5Xi7PP2BJVkLANBPkZLVc5itZS1VeNvKnrUi8D18QLqKLniAcjBfaAnZUvm5RFZEGtTQini4Pw9",
  "key9": "3FpaS8z7owgUTBqKjhbWfnmy2oSTvZF2uPihetbme8de7Gj91DpX4F7mTWhnuwrkTREm2jqdevm9YB7oqnb1M7Qv",
  "key10": "4XdwTdNr3ZLkGJBZk1cxnsqkc2fGPdt8qLhTGw3ByHGuQiFHS9nFU9c547fGo8xKYNDwc5SzShUKHm5u5ckAf1Tf",
  "key11": "sXHhadjnyJ8tV3t1HqEgcq699JM9qr6jBDG2Bc6F1bMFtcXtR2De6P5xu9rYeytC2vSNkEUUbTqNMiTyUKnNAZk",
  "key12": "2o7a2nRGq7nwJ2tkLi9onSPAuhpd52fsmhX93wc71oxtbsnxTpnmuro7MkeGvS8m4AxT2aTLThpAWzaAukdMharW",
  "key13": "4yB54kbnSpv4rwJijYgjW4UWjUiaX1EehJG8XxP69WNg1HMvdqFPfYa7zU11ZdKfGY6EzZBLeXXkGgmxvoBwPQi8",
  "key14": "6J15xqj7hEVp9CcReAheoogqxm9cdQqPrztj1AEVP6q1tyJZiTNjoUDCGLL9oYZu6AoGQ9f9c2w6XgH1mra7xn4",
  "key15": "2fXjyHRtsqyoxzHDXRonEPjsWU1wWgUQYvksVaSSfQrqhWgqphxjaypcETiMqHmtaDJeH39yoWoJyC6nSW4cABj5",
  "key16": "4PoFbXeE5YwEpKCbfdFudtNS2hwcWWMKH7xnT57JVjP57J33BV2X51nGzF4Zw4njj7e2s1N69P7n9u71qxLeZ37q",
  "key17": "3khS8j5Qh8jQQ3F6dcvzEhtScYFYLsPCtZKjFfyKhGMzaGQk2jnE6zY1ccqhXvhcbCV3fdsgjPkic33GL4w59cBG",
  "key18": "HUc4cqN94H2LDCoYGZfA3HUcoB2Vx8iyr1BmoA5ajA2t1nEsvR5GrxWASDsLNHqnSiTaTHJCZwAa6C4n8o6W7m8",
  "key19": "3jyTQwFssNoSySwpkuFCPj3TnJA2i2CBHF9DcvNejBvz4jRsEkThyZKcZj17UduB2cNoeMiS9PEiYAB6TfCSCaUb",
  "key20": "3UiUyTjngMcUyg5AGLg7hp38Zd2qXmMjYRxLLgb3uEd8izwXCGMt5KGKnyMhfQTpU6N66swDViaRP5TKZQLHYJjv",
  "key21": "WFtcLwC1bjj69MiCWK6FxRaftaUcsXLEP9D1NbG2Dy9F2zuYjfXAjzyvJ9iyP3Fye1DApoWLWkbdf765vkP6rmi",
  "key22": "36fZisiCpfT56vCMS7osytCKaZ43JTxv4D8CZseQbjN8YnjaR6LEJxgWyMrfTKm1rK753zLe9mYwxEHxdWnLoP4H",
  "key23": "3Xbvcj1SxLoRHDb4EkvEK97BM1RyUw5uSeFEsKZDVNxpi8kxN5KMMTu8N4ZhBwt1Qr7XBCY6KDKjhXaAjQChbrot",
  "key24": "3P4KtccPMRU5p8fXjTyXXnPJhSsUidnMmjEg9xUvwtF9DVjhwv5CsemFESLZZphz7BYqDW2CKguWk9D9k5BQCDUv"
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
