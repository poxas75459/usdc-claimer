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
    "3kBFdNrJHi3hkuTxAS22XoNgGiN1unTQLbof8whY5xtYhZmznHcHzwTrNTcHRyUKZJPDKBfVBZNHsWjy7N8BHBaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJxFPhMW8qFbCufZfn89YaWPwureABiMZ6uamcoJArYGetzZhfNR5wcKDQUyX4zbh5j8KSfx8KP2jJpwruM8EvX",
  "key1": "31KMZxFTiJxcwFNLoZTjzphqosee7TCFcxaRUcpXvaMAF98f4HUNja1xZ4uZiQkwKK234oMutkLynNP8NRMzgj3k",
  "key2": "JyKL93ekDhxW1D9HyTZaF83pYC3Vhwih2V31KVxPah87RuCaJvzBLewcFSGiFSSd4G8uyivWWMNZKHU6YNjdd9q",
  "key3": "3FzFhCFbfX7XysJoBRywmHFEmbEmaMxAi2LAa4W9ee2zi6DTKovVDZQx5EWe9wcuALpPBF8x4Pk8EWawTwhNDuza",
  "key4": "DmH2zHDiAYfnfSk6c4obbqLivzLsFVKr4fcQh2CSY6xtqpHzGMfSoMXM6VeVeA7tfNeDg81sKQwGcUJKSzggEun",
  "key5": "4ZQjdTRe1ck4i2UaspEUYkLzaLX9DzTmVCwxS5zFyibtkANjLLp3YnC7L6RwgFjSPDFh3sZAy65F7PvAg5EpfJg",
  "key6": "53wxDbrBz67kQ9ztXojVnZDUvwjoTMPFBMd37sPsDHP4KBuE6rKVWZZVDfRaRC99DF45krYLFoYKFiAZa5AEVPeo",
  "key7": "4yd3hrbZB6LoK3jPwUCoqVV8m6D56Lf3cKQXTUfJQuMT4EGc93Au5sJ47g9X9andKrkEf11XJTrTUmsNy87DdsC5",
  "key8": "5iv2BwcBmEpuJKEZQXCSSVZCu2R8aUTexTBH1txb13mnssabt3WUMMm9hdyGiK4gT6zo2eLVk4LxW8d1yoQZyKTY",
  "key9": "3Pt5HQjD9X4ZadF2R7ez8fALHw2rqhZX7kQmLT9x4PV1j9zEsimFMA1pYq5mARUBRfXuJaAbW9ygiVjhUF4fQFKJ",
  "key10": "3LvULNPZdoPbDh3p5jbuEzpE97Y4NVikY2xy6ExZizQP4phK8hyKyKuBUiTyEgKk9zJTyFfqNTxmZyhXD44qD43s",
  "key11": "4EVhPQhJr6dAWKjMhwc7Fq9cHC2R8bwvGFptXUTgs6AN4dFKDgUDbY9rZLwtTNsbQcNnGEKvusz5ogcRZLQzy52k",
  "key12": "67C772MNT8kcggZdnceH1SFzxyYp3ZL1VDkDyavz3beEzYZjvkc8n8YPkzr2L7gfpDJDFFHGDDrW5gLGCVp3Veiw",
  "key13": "5hDftUc6reiFynQCbaUchfVxBNMuqM32M1fjyqPVEERXeV4XKVtF5uVynxMFxWePmNp3LH2LsKRyATGZYBfDQScr",
  "key14": "4nq1NH7MHezSSmLqBpWqh8j4GC4mAEEdmhER39RjvqpmyRhTEENVv9zgCTPhTbZGJsBVBk5nryvUEzT476E3i1Re",
  "key15": "2JUnMMvQFX1FtEnPSPkcQf7sw3AEAxTg6dfEYX62G5woLg1E5FoYbmgbxZkfvQeWokcdAYXvzopMeF8XmjXJPSQY",
  "key16": "yAh2nFoJefDg2LmASe3nqSSMHpwi63CfqgDdxkCerMHNjcS9LV9HozqZEiGgdwU5uN2B16KwK4b6QUnVcmwzA63",
  "key17": "5Wpx1kDp9b59tp9NgWi8v5EAdUQUYEXTABUkVzvYGEBjTF1KsUvshppg6vwmxoUWShMXWWkk8JKsHKjHxaiaUwcq",
  "key18": "2TgZLe2eXccmbk374opUTdZPBYS5F5hRW7ksV834Gaik5Xk5AmcUhez6dRs7cr1cmPPcmAJEALEW8CSFYrDAanCQ",
  "key19": "2X3CgazLGtYoA75JzaycDxHo9fRwrMa2XwmU31Wqqk9Ba6LBYYC2yYMQUdQyb2nrhhqS5iK6ENJZ6Q3BA5vchLdN",
  "key20": "2GFjSpoC17JSciCjca1UcY58m1bx56hC4o9s6GbwptbR7Soa6JJF2JbKJVunDNJ5onMkV8BrX8qRTSQd4vsk4g3w",
  "key21": "4x2nQJSyj1W7axq9FKnhXETs6NFv2Hyr82AsEX3jZfQ5uoAUAHyv9LjAPKjBWGz3T9Ek9RJCFPJTWmZJ8bH7dp5q",
  "key22": "4mGkPP2JHYnSheKvVf1N4aVpuzDGeq9AyAjp5BsCbBHdPr1jRcWFMTAUAvu1DSWfCTG8knpZpnkqtUnxBn7piDJQ",
  "key23": "4CAc6HykRnPYzZapmQb7JGHEVw49mGY34pJQGasBmXyCmgwXG2oQGN7kKNxPGsx9FfHwk2oMj6CjYQNqo3LaYiU8",
  "key24": "3VtyBm5PH9Wwb3W2mXAWHEZKaLZmNx83VLuEdDJjwq2hwLssW1YYUrD72RKAReEPwDmjkEYKXT21abfjbcsxPsqD",
  "key25": "2UF995pbcCPc7Qu7cyejf6ExAdy2JEe9Fs14ZUfm9Px8jJ5rGAM1NKNR88bboppEPELape9zqUq6uLgkiqJ5Gka2",
  "key26": "4P3sSKDTYbiHKyk4LcEmufSMJ6gAMnutD1HnsxXHRYTAydH8iGLs65xhbHgGDCMjPVYa9FLdaPWNKrWzYpFMD1sz",
  "key27": "2ScEyUbK6U6eGS9qKaV1tHNxkjWaADgKcUSbr5xH2H6PEcqXBCiVsyBe8HZ9RGQ6kxFpCaJD7WLWGE2N9L8ZuS8G",
  "key28": "4rbRnT53wrZ6cL1jVP4L2j9upJxftbmnzFpC4ozYK75DB1S1yuJFudV1ic8X4YMzZMbMTrwRiMumTNDPADjhBSzJ",
  "key29": "3AvpcRDrSUesw5DqdSowcAdw8uu9X3TgK2NZjgbVpak3D4UQyEzDVJroNMNZeQgEaDtzjXD5Qgwu9zEUym2XAA3G",
  "key30": "3fkJyiZEQcB53G5tdjpNeJv5kZrQKS89D69fP2jx7fFsvNzFxb7jnQXQTjCRR6tsGc2RuXygYH5uMHmuT6vsjBHA",
  "key31": "24aB2pd2w6bdKYNhHmWuwMDN7DNTupzhZFv4bVAJZhfiRYWoJcAs7p1rFcThUZESXcCCrL3UxAngS5RMTXFreDKR",
  "key32": "2bPhd4q2qtQDBnwxTyfRytxYgcQct2EnRFdRRWQK8FLBF5BW5R8eXbQ19Vc8kX4dhjApNJTTNEfzZxRPvUNUkRr8",
  "key33": "KDL1ym5LvLeK8QF5wDJVpYpHjQATNdnkZ1WcWt7E9aDpxzFE4w8j4WPXtza9f8VVZy8dcbChJrSwqk44dJxKFcF"
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
