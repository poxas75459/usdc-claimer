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
    "3QRXkEVqwi6bCxoGTwwzcaUsE1ia3LXAB63u6qiwjvhRda565moZuBUThmzBEv43SHXii9W5TbXSzDR3aHA8r9Pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QkT4tbsKLdTLAg1w1oSvBtynbDfk5Fyhp8nNNDPWoeFrZ8ziQTDobBoMLD84ZZQSLbfUFKBmPk5RZgQ24jHhP19",
  "key1": "3ZCfAjtfJUZKHjQoQZGGokLBaKCwdWkS6dyzspyUHAY4HfWwX3dfjVN483saQAnLuTWnA6Unrkt1qJ4oiwgYeKmF",
  "key2": "4V4zVRct4Lgp8mU2ee2JHFLdSMeXbdoBgerQtdeN23MnP4o1hRVFUjG3AKS3cKXxkYpsE6NptEyKgot4PyUfDq64",
  "key3": "4x2RdDYrvyiLbjMuDYECaz3YBokDxMUH6UH4vBEeipX8s8QTxLiczQv5quHYjBdfrjsk6Rzvre3wnSH7GBFauTfN",
  "key4": "3MfHkyKUPk9mshp2Yw1Y639tzMKQZ1mXo9NRR92WeaqQB3sGMEg7q5716oG4VEuEKXy5TXf4AdYZSQMZDnmGdQYK",
  "key5": "3o22YyuHXKichR9hmMRd57HPiuJ2jUgfQBVsBR9oiaPQ9iPNyU173s3ggVZDGk2U2uRPVy6RS9agJZFX6ERWVdA7",
  "key6": "5rcMa5tJUnmHj9m8ifFP3vsggCjyez8MQUG9XUvhPHo1cF6yGec4DvAcc5bP13SBVJFbKnVm4h28y2GzqJaSpZBt",
  "key7": "67rHgEKkxs1r2PiPBWhQeA3yrPue4LV8kYWFYKwUo8cd52Kgxc1j96EXWiWkTW3AB7DET85ebZ2FHQaoXfKYeocV",
  "key8": "47xGafWsvUPNuN2moPNn3RXZrt6XqvXfQEd7DWsnUN8yPqDtmUU3FhDKEKbcWCT7jpPLZXfx36jYCaTKneDGd8eG",
  "key9": "3G1JX1jQo117ZeCNaDhuPHmnnZ4dWzYNStcS4ARRKRHogYMSBt2c5xDoWn4XhJRds8YzWnQqB1NsPaBsWZavFKFd",
  "key10": "38itvYKE2TFJV7XtCh5wVkXoBg7JT4bT1rngVTH1QLysEoQiYFfMwLjMhXfuk4Bis6yN8CzpaR8LngXsuQP29vae",
  "key11": "5PwJkQovwjVtVKuViEGCtsxGRcFyjTSAzBC2j4jdgVBvYEzJUbie3jxfBrsZZphNfsRW9NjLkSsQhuQYQjT7TYPM",
  "key12": "2J39y4tVqotby7sQsDzid9Kf93voFwEYoScr3ECvgDcniJScPmxvUsQqLdDQUiKXzWVLZRjazMafr2oYtRehoVFT",
  "key13": "66WDwWQUKwzxBvHW2p6EToXSeR4VF6DDA34wgPcxzyjrJVtRP4RUbAQKH9d5syq34SLVJEDt5NNMh22zd3qz8Pzz",
  "key14": "5na3rvmN5Hw9dG3mwWoDUh5uAiZzfTuSJkDbsBdc9nZyb9pcdE7i3jtLNELYhVYE9qB5qdsgo4ExkRVceF9ix7p2",
  "key15": "49NaLrRQwJwqiNMq1DCXjcZ529xupnECp6Qx1NQoXVbYCsJwu87Fsjs9fSPNebAoguCPfBjcxNxWMCCmBKbQiHpn",
  "key16": "4huHqwPuixfXpcaRWua1gSe575ZvP42HpCmgsmdFvE6cZ9STE5Ft87yL4C82Eafw5kzSZjTW7jtvc3N9uLSur55q",
  "key17": "4EnskLgF32ex1SqB9qDY9j4LgxjEjMr7jNPkRaowCrWRjvTaXzUZ2c83VesaQjVuGTPB6FPv2N3bNBC81UEWcjSz",
  "key18": "4b2nyCtDA828ZF8L3PYcTbyad3pJtiPw6MwpNykJZGPh1nU1Xri2iu1CHqDNDe2ZgdDobTyZwVhnCdyqCRkMqCfw",
  "key19": "3HeoBLDBNXWCHYgo1VfZtAtvcyVNUAQEJQX1Skp5AaD1jMwVphqVK32Z755BvVcYLdb92bLcy9RvXReghgmZGskN",
  "key20": "656qF4E4aVQLXdvskrC6AmLeKsDcm1jGZsfSeevMM3LX8G5WX4mEtSzuZbkM37eBX75Y6WaH3jokcFe3EVJ6Cjbg",
  "key21": "3gsrDZBy2H1svyEfXeSngQrPSCbQQmLQBGHiTNQYB7q9VZyPfxHvjdEagUY9We419QmdW2TEWjBms3MAWfUwoHNU",
  "key22": "QwZJoDsse7HZtxTo1EiBt1wjhZ3hi3pXJovGsLxVbSZxqCEPLmUBAiHzrWQsgFha2sT6u8MJHbn7dqFvKQvwcjQ",
  "key23": "3uN56t3wM4EfEFmZiRWF5RAYPzGEwJkZnnUapQkKNDTY28dhjufA7qjhdShSkXse6rrPGCsSFVarbx2NC5YTRQqQ",
  "key24": "52UM2gUXwg8Zn9yFvy7EZyawfk7fP2wGa5wHbgnW9LRBnQwLLUFsni6bCYPo4Hk7FMQSdSzVTfDNAmBM286iBQaU",
  "key25": "4fGcUnsGb7423STmXZkt7zw2pdEoANDgfd5KKZaM3jXhUvQkBBXPAi3LWVw6o432VzJqFRNLm9DZHx6wpLbxfcEe",
  "key26": "3X3MGmHhSdH2WA4QgsUieR3zMgeVTtS9FPpqxxHQ9svxXe72WwfTN7Maqtm9cmHALxbDWcfEwzb2Kf7h6pbqjwcw",
  "key27": "64tfeetw6ThzLwBuzruDmuhgkLmJuW25HsgGn5vgEid6jAZy3c14SddDcbGWYBosHVZY5ASLNkCHPZsKB72N1pMh",
  "key28": "2wjJmbp7K7kAX1pgDediz22BrxA1nUyZ5C7fTzFfbV78oDksVCiT3WmojQxiTuyd31RFL2tpFUezZgVG2ddqAog1",
  "key29": "2AbkV7dYgVN2J55w5Dpy7RwaYV21Vigubd5tEQHPznB4FvTKPv1Un11EdtYV2kAJd1zWmMtZ9LDQUpy4YAVYVPRo",
  "key30": "3CmAHydsx7iVBwg5jZvtr5EpwkLcXg9QtjxvsfUuZuNsD8vojoFynEKHaTi7FVhnmJvMCAEC9q5c3uR9c4bprSKA",
  "key31": "4rudB7UoamVjVnvBscbafM17ze8EtcxJqvQwd2mGB9bJryHDiZEfnG7hkBNVk5eMJPYWxDpvAhx7NCnhzA62mTqK",
  "key32": "4n8mmfLExbpgrk7YSDny6AgzmiY4SaqAr4f2142Pg75kqtV6rCAGBaF7x1u8KnYUx13G9wdHYPn43YZJfrmPKXTB",
  "key33": "gkadi9QfjkjhZwZvByfiQqNFcmSt9MWMcEGSmAevLpETTDR7VK1WKMznsdAmwN97zBsVVHWBmYq5TBnKyWwBqkA"
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
