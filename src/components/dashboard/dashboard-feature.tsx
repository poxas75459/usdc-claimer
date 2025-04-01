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
    "3uAtjv6MSw4Y4tj3si6FtibuZSeBJ234LvGVawq9bSTN8irmVbTPHZgk6zqrCQA5KLxvoB9PEKs7sDWnJFztrULZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJ8M6WeVFmcmAtAvnaXTEHjX8uG45R7oPDQCwQwrWfxPEXTrsGJP4UqWv38JRScNRy6EzSdGN3YGNr3AGBDWGqh",
  "key1": "86Sf1sXRY1vYi7opMjM4ypgLugqeMXYXDcianAkDriznXQ8scyJUMXFoq3HDddMArFz4qxX4n4oEzUtrErQrxSG",
  "key2": "KuwRmTQ5cotChr2LzqUocnyi6UfytygsYdbhaJvcbz8UrKPUgzJcgDwi2UpyAg8A9kKcC8Q9jezqUwFyZLAJsya",
  "key3": "3xEWi4rbVkcMTSLPGKyXTvcQbgSkxCzoMt1ZVdFwvvpgqjzaPfTQ1Lfa4yRkeXPgbHxum53ig9DKsupSkhwvjyBb",
  "key4": "kdzba2Zww25SyPtJJkpk6Q5eVDdBoJcs3JDzEno189cQVbiQatHfCzpiqWt8BzKhxDWH6Apnhh6chY94XvXK5kM",
  "key5": "3zDhcpNSJN4vbG4i1EhX5uFwCwG47GBU4zACRNjUqnMdMCW3s5vkvPjF8W9CZqFGWmQfJSNH1nue8a4qsYWZwPjb",
  "key6": "2gbjUk2dfjntxPwL3r2CtUSo5BAZob9JTM8gPre9syVzANvNixNKi31Y1y1qrxNmKsmq2oxdFtk6Bydq9kQwFTx1",
  "key7": "3wW1WNWCrq1bbWndnJxaWEdvDwzF5VXxwEAUp2XN7xaXvKVBF1upZt6v6ayYqBGJbj6Z4GHRz7txcLRqbwemQ63b",
  "key8": "3b2zAvqx1Y7KUNyeUXTa9RUPFQtaMFW3W13o8GfWjD7wKMzujHCMDpKuVLKs71qTFX4chNWz48SvFA2XHMPhxMJz",
  "key9": "3FmuXunZY24xt1kBf86fbgnmZtavJ7XpDuRCRLojSbE6ZQVJvEKsUwYP2igPh7J9SNRVLpuXWcyweE4PwcQpNeKY",
  "key10": "3VPbNYxa5LEMqtSaGh2fvCdaBqMipqQgV1F8YKM7F8XKSdm5A7Bjnp8DTuphKqwCubQqbCpUMFV83n8VQNAPZt7i",
  "key11": "5he9Y3vx7fVNF23rwGdMuKSFXbAuo8CyiynsxC5TfXck94RTaPDXhHpJhK1r8C8B6tHUdKTjcR82wUCvGPVbMqha",
  "key12": "4pqVweFPXg7YV9tD1voy9bmrHeChTnyoA1gTvdodd3d5yE9ffaE6rAwEZwFhee5JhZUnEfG3pQNo2wYGFiqud27w",
  "key13": "4FVpXvfmLCYXbUjBZtqwjtoUiHHxn1fd2tUqn1LpKwctDoxHZU6Xkk9wWZv4ZPKHNEyu25WRKxhjQWvjiTk8DBKc",
  "key14": "3qcnw8wf1S7dCf8GPGjKi9Mb6ktvqUyR23NR5Jr66NeDfjprc5VFzA3Q1wW5QVScHLfvrc9Noso8Mjz7XV7TffM7",
  "key15": "2KJQTBorrm3VrH69e2VXr1WhaNiiUREmohzV4KQKS13QW2G52r6XMp2JgLFSevbsrGxDUbqYnNaVhjBR4AwcYzwN",
  "key16": "4tq6AjeELvaqDEuYCRKDGbmMJVo6XF5tTwhY316vGFNvY55pXHjbckSQZuCjAd9nKjT22777oTvJficLG95DVE8n",
  "key17": "41hWX9NJHqX9FvDG8UcyhJJHbFMMNCD81z9kA73rUQgnjSmgdN3qPHjMNkNsx4znNgKyYmZ76PrdHcV3qNrYvn6F",
  "key18": "2hnHHu323eMPbiXwodvSTw4BCKm7PEuZ4zLRingG8uAfTru1yWZJjfhZ5fxihvukfCuuR9PQoqrVpE67dF7d8wbz",
  "key19": "5iudJULREaZhEig5G84nkn5gUYmNBLbzi8P2kuV2wkGmMiGEHpqQWEmgxPcubCW3fNbrS2Ac4qLYheAGas2vEBjK",
  "key20": "M7dqt7XXRpL5i2uv3FbkYc4Ai36L7ovfuynNUgh5YNYuJ3z9chNBapBVJtVHAC4vnxHRhHsRpggGQCSNWKv1YQ3",
  "key21": "5KFRx6sfy7JjUv5JARzHao69EMiphmYAvuQSHoP3yRNhDe1Nx2f14sbP9SDMNWFw3AEwkzDGDLcfg6dLvRsPvYJo",
  "key22": "5NoXoBT5QGufXhBDByTiUfC3bMnyiyZc2CVBowPTEkmRe9JLpEYRMdQ7KCWfFKhzEdZMg6F2TqDzEmX4LMk11d4H",
  "key23": "4aiuud8daBVMA952DUMQMpnSRU714oNkLj3Mo8hntbFjNYvUmf2EQSzsP3JRqTDUkY83oQkdtBwuS4NAXEu1KnHD",
  "key24": "5UZzDDQoK6mZVMCf9LsxJRsD6W9vXA3eb2ipVQzEgJP5PBFnVwpeRRtCWDsABFJMUXviaVFHUtiwKPhHe3ri1EB8",
  "key25": "sH9H5ebaYWD2KWxq1YAkUjKXDV9r6TMAemo7GZKtNa4E5kbYYFCZSvw4nT7RMNhdZhW1wg2x32aKMbG3m2PsCxo",
  "key26": "4QqaN7MbVqZ3zHU2TPoCEknMdSB337a82gA2kid3MtRseACCCLXdEqqF4nNje76DK4UQcq75EeYnvykuWKXdzKTz",
  "key27": "31dFuvD3YM4rdtLfRftgMicn3S957YGiXRqQDGhkmHfQd7x8kpYwhPJQy89wtumvRTvUhkMiZ7DwsiqYoRFYQ9fe"
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
