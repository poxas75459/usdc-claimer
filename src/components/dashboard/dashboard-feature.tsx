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
    "4V8Ue3g6RhPiPcn4yKmcA7sxnGsgpE3sjC4tsm9pBAotwQHkZXrCi2LqXaZUoV4ZfYJwjQe2rnkrbZ2BK2ffujtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXA4REsGTJejgkbkNE8yraAuAP6YPoxpaWcJFWjAyLuiQ7YV2LNwwvLZziy8BMSBWaCDYENAMWBBtDgQkhxyP41",
  "key1": "3c9935AVwH9pACFxX7hKnspvXrZzUXg3sCFTwEYMNG1NHGefF2YBuRfaJkfVgFMBTUBaXJRhGPXe8hBW5aN4PR6J",
  "key2": "67nHYyX1stbtxxjF6AaTZoxo2jB1Vnx4RaqyqG6qk1RHroC3Eju6mgjtxTF6sGzSCnzfAZyXiGmyTtZ9Zcx6DQAy",
  "key3": "4G81FXeWNGwZne1kmE3a8JFVt5xRHoLNEvJWJbGskmsrEZLUXa5SfxRupphbr2wQ3CXcDkgPF3wkn2HE2N4HWq8m",
  "key4": "3dd6K43XdU1x7GKbPkaoeYP78krvMG8DNALmSK5BhhFqNq3YDvDVzELUUfUWR3nGzvs1Nz1XtZQqoyPREZB8tTcR",
  "key5": "4eCq75o1pkHGrcBZWMvVuQcXq37PXpADRPRAYd1nAKdHYYVfAD9Eo8inFdE9bs882gbkPtmSYydFJj76DNMkGprP",
  "key6": "4XK5YthjKVjUzHpGTm7F1B1XARXrSympxaSRTFwaZX6EF7QfmzB6V4XoU1qDYDCWyLRgWzrLD18gneoGqtERLt77",
  "key7": "jEAthKuF6RchhXYXW7xLSHk4kww4MRydoGa4EWq58XjQwPTbF4PAcdK971Uj6fB8Dm9Ux2iThp9YruJvrosqpBg",
  "key8": "4HafYzwm3vf7n6tHbBKoY2Q7JJ6F4nCKwZfJ75WeRyjqBZoCW6DQf3btgb6ZPZn3q8AkfhUBSJPxzmnGpTZbjdK3",
  "key9": "jZanBZ7FvvwgVJE2b6g677AgXehNGBLCBUfnkq6sgwjANuCc4WB2DEMEoQAYj5WkJZHgXXLFHwdXP7GxRdcm5Jy",
  "key10": "4veFUASUcgYisLm7u7m8kaDvCPXqFbGjAcgguxeLULW3aiinNeqbyNAW199jKWvUwgFn9B9QJahz2dapvzvaoYL1",
  "key11": "4uDHPVhDRo2RTfzh6QxgJ2LcScNfgYudyZUfTa1UrmTiwx5Jh8XiUWVoVE5DY1u96qT7oAJ8oMPbBDTCwhY1QtUd",
  "key12": "5HqoB4811nMXYrsNpbA2zu7ez4bqz2LauTJX8d4Mbwap14LwYAENqD6r2sF8RGW1tuQoPDXGtM8oFfFqzSdzKiJ",
  "key13": "5V9Acj97Q28t4bivk5ZNHACTY6NgRXAHHxWPuaGTHA6eZMbsxpNT7FX77m97oRewDneowYpSRrduY1x1EmkeKGnL",
  "key14": "46TzDPgj9dGa5CCHWATQmyRea2SmRw8Kc6uSV4qhGLvoQ5aR2jwxcqAFfcRvY9f6aunAKfqu5LybkhEkzQ74sigs",
  "key15": "5QVrFQA3Noa6EFiMbSQjQxDcrjz6mjXeHbdW8VMm28Qs9UFeY1AtXAmHCpgSRi8dzqqp9NGw8vUh5xLZiCYpNBWo",
  "key16": "BmKMjmP955wPzq9mCZJc4tG1WnxNYj9oFhqEmD4ehrVTFLFfk8TwfUwsvbhzk8PySqDK8L89ZBxu2iSJsvQQeks",
  "key17": "5sCjZmM7aaoTz143xUuKHrDcfgmHgcCVK911YD3F5xzYv2d2kPrG5ZFq8zR7yvrs7Az1JuHA8uL7ob43fhNP6BXo",
  "key18": "3YtKdx5f7fpnktR8yFBUJYhFYiP8zRJzguN2hBARzQAqzF1ERxqLheuH3pjzGjnf8EfgTu1EwdK49t87syEbB1BM",
  "key19": "5PKwuVy5WYRprsfTv1pdqfi5aa6TUhUGweKzy9qT3LaqGYGNZLGwYGTUyNtVkfNz3xqevjYQfBGEaSTDP9wrVAo3",
  "key20": "41ECs39V9xpYkqcWFUepF8nv34NBi9Gxos8rxKgPbGNiKEVrnFRMhDKhhPD382sPzZ7Yq41dmzQFQHBBaXfAEU8h",
  "key21": "5WVJgCCGJcwDubVdLxZgrYEUExcxCSwFV9BhMB3i2rD3KWFZvUafcNTXApRmuCkGnKwQHnGNwcMzUKPegGqC69CB",
  "key22": "5Gwv71PxdRhFecfJYLGaZRHzp7LTJJmjw3ssdoSibUERPUtspa9vQ1gJ1VowScJQwiB7uVmGgeghiUmDQzq6MEyY",
  "key23": "2jgg9qiZKADHJf9o5oB4Mpxw1mv8no38MXo1p3RYrS9uhiWJo4vfgxecH6Ph194VSz9uWqhM87Dd7scsWRJCJu7A",
  "key24": "4mMNStMjtuWxbUxAKsWb1CH3UtQkDLcx1Xmga5HUAjAzP2GUCDrXKTD7pj3bmyWg5XMqjrMWGsUzSYvMcyiE1Hv8",
  "key25": "65EXoXVijdbCTvXPrZ7Yjgs91TT5KFzkPxAX31nwacdfiTeq721UUUDbKdKxzRaxF16rLpnoDnUQEshP85bHREvs",
  "key26": "2mhuT52KCZyzrqSHytttnEXeqnRZaN56fWH3o3uVbnejeQByUWXHUufBjr7stF7Vtks5DyEoBAhuVuFDGTUfaAg6",
  "key27": "4RsGM3YHQcvMJmFQb2uaMZe6vT7K5gXJGxDYxa9dULmgBPXC5ruHDoqqEV7YgG6aXrbDoCse1oza1TU81eYGWFJ9",
  "key28": "5LAVNXmHBUAjtB9gAWnPsFmXRgvercgj9LJkdg4bzV8VkJmT8zT1rnUZSs4GjXtK2gwRsN28zJyF27NRm3QyYSSR",
  "key29": "5L1V8sDwqvtb6rLVJa8BPqcsv1Wr2NaBy6iz1XbHzPzPqojjT2sESnfLLEaGmpu2A2Y86YMqyCZABGqvazVRTkP8",
  "key30": "37deg8yNZeLCdwM7LggMwFt3L9KzZ682dyzdLhREtyPr6Bem6VWmcfzznqtjXLKgvXTUB754uquat6RoB4xJuP1L",
  "key31": "3KE5eyfyb4omPKUJ9yFeUS2J7FuxSNG7x5V7atThBd1xetgnC6vNrFSFQaAMJ3YxQtTY3scKgNa7ho7qsRWevHzT",
  "key32": "4WoG5bp9i6kSP4ELkrjDR2PEDtvsLe32dbaMoH8Fr9Q6WJg6PgA7CY1yZSWYmZDcnxMtaXdxQXCFvcPuyeHGnNYu"
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
