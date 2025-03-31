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
    "57ivRqCSGZfh56eNDvKXwwSaZ6rrg7aJABwXSURDt2uEVQKkVwMoGo3ruuuS5tPWQ7nZbUMvrtZLDDiwV1zfkMjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hopvm2JwTmK5GomuuVU9SWiQQqCuwX6xgSfYk1pP9BsFWxYDdpC7WQU6TviYAAHJSnid8hoGQHCwxPKfwqAZbEo",
  "key1": "s54h2i8U22pUyLGc43irjLF8FezhViW16kzPbCEVZo5QonmGzU95qSDh6kdpkQSsKyHixgKPMXLN3pQomRzpmYv",
  "key2": "JeNzZfNz6rpjPzJAZ1ysdj8P4VcrWhSiELUDbE1bZZSW4WLLyMWwDYh3PNqy5wiVbMKk1sBhQNeswpVHtVL5Qvk",
  "key3": "4hrtAhfL8ZmcJaA2UKicKNwcaVXeVqHPtrSCXiLfB4uTu3Qm38DZQxaEVZR2w5HzohDpgiQdNqKCGEN2J24JgF8G",
  "key4": "5eBg6n9YykkXD9A765s9o3sLCFTRXGp5216Zb49fSQACULhZmCZ6hXbiDZMuwgHnssiwCcwx7rytQVEehaydDiFK",
  "key5": "2epbzTyreDMbHXKuveGvigVnrZKLfWW13AHHP6PZ8F4AYpWvVf5qM9aHgpSU1y2iwLum45tnhkz3ajmiNTHsCXFc",
  "key6": "2oXn8kMSwdvZ9UgSD4x2pzVbF1GHFFYi8NqrJiv53oNukZJRFWyX3byc3VRYnfMCGF6YpjrHVnLR94zBoKjz9tBW",
  "key7": "4axsNubk9QiYXW8CczJ3SogZ7HvV1nB1Bu2SiKa2kSvVRj7MDnZRyBD2MBcXJ3rX8PpTeLFzf4fp1MGhFCk6p5AL",
  "key8": "3yAotq2UTCtpYkqTuAeXY6nCcMpDCpwG4HGczGBEjDLbKmogfocV7edFpV9yRHmsN3YBsXLJFB6uDNTNoQshRhDU",
  "key9": "3Q3YbDXoLm7Lga5TtUQLRwUJ4wR4PNHRAsTFY5cE3XFR7Z5Hiqb9wCsYzDvQP6Denf8WmVzYQqg2hWQJEqG9eQ6x",
  "key10": "25VeAthUeeUajruJU1ADpGc3sGEGU1WfhwZKiH6WD7ZPpr2qJ278nrKgGAQweBHS1tW2UGWpRucD2STuxkr52NXU",
  "key11": "5ezBCeqiLsRFUCuRuuPQWVnwuYzEDEmFfm6fRyJSCzUvQZhfiuqmRbV5MxxqpHbjAi6Y7m3uAh16KiB31taCujUX",
  "key12": "5fme4CoT14ixkhT9TzXVR21FbrUjn6qsvphzfSrR8U1haDSefMP1FDEzxE93jxKGwx3zWSVb9TnW37wYXLJpVZV2",
  "key13": "4XuJrpf8XQLEzcKCETtciULJ5D1Rj1wnT9ZoJmo5ogQoTmKv1S79hPvk645iYksvt5usgqSPH1M1DBUF1E2YWfaa",
  "key14": "3jMB6HWQxynsVG9RkEfjwMoPza43F2sT7v4VVb6FfZu1V8KetNTJy4FoU8ScoMidrwBkCkfaQRLa3BZyMqrsezpv",
  "key15": "3A3NU5tjSm44L6iRdT7GCZAYtXPacGzRmYRFGs7XddahJNj34esau5hdGJKJmDZgg8Cq2SSWRrDt7jzfuPuR9wXR",
  "key16": "4LhxT89hZXxPY89kF1haX81tFfFewnYK2AXvsgh4o7v5rgPzsZQQBCffScm3Eta2CGjYU86RLYLnpheWV6EZhTQK",
  "key17": "4t5AJwQEcB736TGtmzFbtQzCrcTrGRWRHxBaCfrZgXC4Y2P2BgowK53aACkikyPCDAkcYSpTs7gFCCjvJRGaV5sB",
  "key18": "3NoKR2R197PbdYuQw4mpKSxqMiWdif9W8ttWKNo6CmPZ6GjCdL1SmLwDo2yHrJQPEbQdp3PrVJZUyNi3AFJmAvyc",
  "key19": "2xNr92tRvrm4i4udmofKtnM9fuWXTPE4LosR5sCgNSVkBEugDSsFHmMpuodD2eDeBJrMnu2Z2zmmypjn3akgnHz2",
  "key20": "33oXQ8feEH2pKtqV6drfMiZaropo5EdaeNbFCkkzgnynukpwkgfe3WQr7232dxzcxu3y8dWd8JJXDjkMPZpsRrTY",
  "key21": "5kqixUb42kFB5koEdVqXNYw5icZvvmFgaiSis6szrCg9q3CCS5qezLtXNWc1nDbxWhdGQCgcVPfxReUedrqT6SQT",
  "key22": "5meFtzv5m7myKq9DNGDYj2AcJ9QydHurXepmpcZYZMkMDQLNwWxp4Hz4CbjCGpefpkP3HYXAFNtjXYSHnoVBiLsF",
  "key23": "36tvCM72KkfinWWYCzzMVcvXuyHfktqLqDgjDpbeuxtDLKn9yHCKaVvt2Jc4H5M59zuBwzf55oabSGT5S2dkn7NY",
  "key24": "2i6UmkX99gVJ3sTkqStyJxVwiuEvtps6YiXgqmEwrgRNtnBFC19s698VZfAkkjZpKkC2jCn3YSex9BYaJ71tN94R",
  "key25": "4bcRePgHKVx6YYi72GojZVgED7jzAeR5WSsBrjaQRHwuUoTRT3KA9jEhTsyxEpk8BARUJYs2GZt9BBdnChijcp4X",
  "key26": "4ScEC8VtxDFLkVs18istWiYx4bbvQFdvz7okgwAjfa1MuAyaKQgxEzHoMQpGzhxyYn29rrsWrPMus7PHX3yhpTQ3",
  "key27": "3tXztcXsYWJC32MEn6ifRVwBsrAn8TkpQa6uyBMCN5cw6dvxLXgoVTcWYH5SpoyxbM5hDBSoEFrdPYSjwxC43WwZ",
  "key28": "59URKU374ncBNXT9LaUuGGtLPgkSXzycovLzSCBDcKKnfnjKK82qAPyo8ecP9ssCg2zFRnwY39vyCDPKniVmQAwL",
  "key29": "66uQ8LApTSjoF5Wrhrsy6tGcqAg4RLN4AEm2BZFXDar1ABKZXMQRjZE9NqzCCoZ23oGq9t9jHmrZsEoCaMdvbHv4",
  "key30": "rc4kaYhRWN9rqGo5rgFAuwDnF1bikq2GPbPu7PSCf4D2tr2jaxChiZFGzhnrvLBUAugrQvmWnmfaVrZbKR2wESL",
  "key31": "5VM5pbGbfXQgEkWUV5gePZFUMah2btZEy8JoYTKMBHagy4yqo29vGqLhEDejKzuUY7Us6j6jRa1HswMntp8T8ZNr",
  "key32": "65mksdmZXghtSDhxVpSt2PMpsvNM3CLVxnJzLkfn8M1mJwJoqQ2B58ZGCtpYdab2gddQFov7kc7RBACbZWWj6b4X",
  "key33": "3ZsbY4ydarrjQyKK5YeYhVfzzo2s81fufTs22pCe9RoVj6tsSBhX5odStfZi5n6bUMCYJkD6WiTH1ecMhjUHzaFV",
  "key34": "23VKfYZCchsEUjPronuh2yHZrnGGY94xZHJL2heLge8jrL9jywf9A9dK6TgJECCUGsR32iqDyXaikiHtxe8xfByZ",
  "key35": "25ste34dA8GJUbMzTcDsDLVW3dBw1WPymr5VH7gYjySf38WCYTUmNDxxK8Ej6cjpvnoNLV1chVWFFcMchCeGagY5",
  "key36": "5tRn8nFudK5AZaAZH9xuGxZxxBj1fC88gq3ynZiynoYBT52HYiTpJZQu2yGKwz8qeHbzjpVsvFv2JSp48RRYvKBS",
  "key37": "34XQo1h5DkkM5wUZ5a5ppZ4Z4jBMK3TBFVCtCYz6xNRPkW1oAJq47NkTbbz4emA2S7mo2Ap7Tpd8qZ6a183xNf8m",
  "key38": "5nykeSAH8pnbKDj4V5RA46twzcnowxyZibiPAAj8xsrvwceW4je923P3EP5cBaJLfBF9wCqDPv8hMZvtDyj4KRip",
  "key39": "2N78dToAHb5CBRkwubveQjofHcSbs6wicQyK4rTJXn1KhM4jSrTj41TbUu9L8k28rXjTFxBRgqrv3f322h1sCp2F",
  "key40": "21fjUw1tCnWd2pLdHk4QJqhwYKe3p8CWFvfHG442fnNoVa6ZEmySVAYz3PBRDLBJZTvhV2xJ4ufgTgawwjQ5VrL2",
  "key41": "4a2EP425bWHaMpzyPMbgcAv1putwmGXFoCXQ6kwWb9uNrKfx4CYn5utU3idYE7rWYtbLjxEEz2ELdTopQpnTtsYe",
  "key42": "58R6XzjXuegmAJtspX63i4zVMiyKfhcDTRtRTbLHKEP8iaoKp51rZzBTu1ja5LT83B1mdN5qGo12UBW9Gs9PLozp",
  "key43": "5fZpHR6M6Z9E5va6cdf6yHj7UWzeY4ZdgoAqqSGUhysxbAzBSyx7Ntv9Ca4MiC3vteHwkiG43fpj2aoR1jqpVZfd",
  "key44": "53a3FpQtq7nb4eoSiwebYRp5f39MrfrNzaC3jgutTL9WjcpVj5QPBcUnvP6q44DigEamtsuQkNaYiLjhejfKZD1a",
  "key45": "4qAiMyRZuztnZNVvtZhrC7GwcgacE7EYwRd3aHLGZp3iFDbAX8fyTDPeTPxFmPYVGKmpTmLGcYNsuVnpBovpxmyW",
  "key46": "5uw7LjeL4rMmvzdr34FXeFdsoehd1fwrjorEjTasJPMhtoL3rR22DT5iDpN12hey66GUfLcDTU3UgJVFSTh5rHny",
  "key47": "3m6JQk3Vtty787tqz7ULMwG7zezXpwYU8jBrJV8t3rwDJSVWzhrQrLFBHsEYQcpiyDcoBL1zsYAZsVUnkjNESW2c",
  "key48": "G9aZq9fw4fzTj4tYgXNLDE11PmPcb5g7YxG2anHvnANrkH7kUKaKErY59tbF9hBaEBk97QNpfTvXAKSZCJKvXqD",
  "key49": "5An3n5fYRnriTjyHKwUg1SCFFugNB5YR5Dn29QEdoNnsdAhYN5BpMNXr2WiYRiQpUQFSXR8VAxPEXnsEtzsVnpij"
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
