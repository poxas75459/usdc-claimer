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
    "5MwwTcUWKMonp9iWKegAuaYwFuVBope6XupL24uVaw2f8NGU3P4n7psx59tr72gagPQbrFyDiATYqF1mmk6Bkggj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vKwJjXGhkcXr6rmRYgti7Go5tMjRJk6RrfACHRa1M8ewE3MYy22Y7E6veXupt2kL3i4vLog1osUtzzLN4AVhHBk",
  "key1": "5fqh6HZvABxYQ5o47P3Qu14YHtLePWKTsNQvPMwgLVnZSgVevHEM9VKzYZBw3UhC7HGk6guRbVm7AkFePpX9HMEC",
  "key2": "4WTgsQUvT9K8hk6RSPFhmShFeHSGKfYH3UWBJAPYQaBoEXvjQbEQjNk7Jha2LmpZXsYgh4TSuZcQD4wCQwbiP9MB",
  "key3": "4hcrtv1TZoogkzhFzcHA8aZH9kGnv5aLxS7z9E2Xepn9jgyUy7UGWTcwigLT8vDPjpkBL33thFeAd4puvvQ9JkX",
  "key4": "3KwEa3B3rTcyDQ2WAPjJCUSqoboK2Sy8mdeSTgGPf3aLd4kQi5swWEKZMsQvW5R75KxWutJZmPk75PvGJ6jEnJY5",
  "key5": "2KBF1FsgrwcBNdQ5dKU4gmdq2aDcnQqqPd4FsWgaBD4P3WCaL8Now68bV7ouacUQpoH5RjjeG1SNJiv3DM34iaoH",
  "key6": "3i3PmS58zBUgSxD3uMiiL9LGgEt3qMtK8JJtLUQPZpKF8DxwiwXz1p79cbUcmMBVYJU77a4Q85mEZgB6mJqxFxE1",
  "key7": "55mpN86vddSuwYPX2KK6doKz56cij1ksocth1xmpAE9j4RjSS9ufKLgrW2s3d4UyrLyrx84GCKWuthrz6sqGyF6s",
  "key8": "3dr4TkuinAPGHXoXLY5CNMxqPWTtu5C13ahb1G3amNQccy7dtJfv45qYcb5b1FjGnuXXpWDWJ4mkjH5pmxYsVk94",
  "key9": "4W66kv4RqBQDseC8H6F7RHh92K287aKV1gZPW3z2PJY4m8a8hC4Wtppcd1qbPq5D5uhDh4FYCfPqXYPmYZMXER7K",
  "key10": "2cXqeiAUvXUkxST8ULzEFgG5vicFwy8JhBoJEEgNWazj2YtWSTF4UAC5vGQMK4abFTckNGvD3neNht5H68Wi6UV2",
  "key11": "4fZ4XqCwUSAojhNhxRpQmpcLBjPpQMQBhMNQAKQQQuJBZyoUpoK2Cs5s3Rw7mT5iAV4dukT3bKYFrmRyhtoVUA5",
  "key12": "3CuaRiPwbRshPbTvx3qkUNYbTqrCroFbuZ1Yf7Db9c72tQsNo7CDkdYY71fmVi6CrjdZMSVu8yZt7FYSsgHABhC",
  "key13": "41Jg5yH3XS1M4fZj8UFYFAmRgnoL185SbeRWUk6KVRJmr4vTXCB5QBTYemgVCB516d514miY2EWCXWpNj1bore51",
  "key14": "2PCw2hTLG5hKkNR5zRGQdHV727mL6Te8qoJkrW58MMvCC8drLTmN3qbdD7KY2MgRnqktp61VBQ7RnaDsfzKr7cHx",
  "key15": "Lg1JND4psTdj9fa4PxWwwv4MyvYTAz21rRwj1SyqHXBB3mBaJWjBffNyF1TtSsi5QHQet8k6eV1YKRn99pFoSRJ",
  "key16": "4FieosEA2NF4uSTPaeUncABaaiGdmhLxrnPAyvu5adcZNdAkzv3rvnT7c9z9PbP1bSiGmLkoriqgrmaqf7gw58aV",
  "key17": "4VRwb1MU1yU9kD2i8CYGsCvAoyJrXkyLXUVgMZBm4yPj7cYM6eDKz4ErtM3EmLm3TGphr1xsgWGj29mHfvahUqWK",
  "key18": "5DqtgqVVW4StUJZfhAzZvvu7a2ptssr35DasURoj4CnkUhJeBkTmnUqifsyG19boMkvAuYCRHRe5cd6u2ULyCTVS",
  "key19": "4e4tcTnFujdReBfTWR8hn1BvTtYyyWwZ8Pqw8U9hXcsNdSGoMbMob13eLUtEaCTUJCxAav5WxXcRgpmSCoJ8pwrk",
  "key20": "291gyg2owgam5S4BpGD3gxjZMnLk8Uwg3FV2ZddNLCjB6yuJm6eVhvAP9Cx5GzViF7XxVtvvyHdQfRXgTFw9BBbR",
  "key21": "3oGNXXLpKJz7pyex3sdgfEJ1NAwsMuF8fggixtDVsRZqk4nEm87xCWdmcDpHkQzHXmy6DAqSEtLYFRRGmEXk1dtm",
  "key22": "2jyCrMFT8Doi9ciG2W6dSa2CZVaxAPcFN8ogumEgnv5vqNGhQYWRm8mP1zNFbci837wy6X4UBkLgHh3t3xdK8auh",
  "key23": "fi4jY3j7QEwz6KdKbH3ywnh6nJwAxLfzEGBDHUkGYJVQLcaSDJ4Rxipp3RWryhT3gSfzzMAMJV8MSc4Pc6TeiXk",
  "key24": "4KcMW3hqLyJm5ZmyKurfh3NtLZwz45XiHZyt5guQfchmFmuhc2hJ5V3pDaRGzYY4Shs9GUf8KvZK4ni3QmCTaNe1",
  "key25": "41e1U8tWf6GWvhzLZd67wXizfFyPPw4Dv6mBHDW75KB8qtHfJZ9LM4w9dMbjoMyBQTvTMjHTSnQNdrtaE1MLxHRR",
  "key26": "121DGmFnvoQ51CbM8eJtzRKsP4Qg8EzTEAgiAvKB9GoqFn7eakPS1psQU6VuhBmaZcLWJD2JEgxE1tGSeUVGsnAC",
  "key27": "5gwrc1em8yTu1TuXExkWfvARUf3FYC14WhKzf6aSMnEiT28MMCD6hfdE7fUTSSuMbE67ec5U4cwJ34JbVpACDzwt",
  "key28": "33ZjrpVoxpdjAJr2nvNvy4Yg6tPxE44nrG9rqZXjYKiMb9mBQPribxjMo8BbyvaEHDbd7tUs8KsF5PiKdesTHUWz",
  "key29": "2tG4ZZdaNFai5Bjqk1SHb8uf8Fm7be4XxLHc9VzBZaMeekmXv2L25BuJKKZDU2MA13TuY6QrFyscWCgcApZH8joT",
  "key30": "3ESBWuEvRwq2QQE1xpreD2Fx25wEy22WvUYhVHo2cXDXg46xdUMd2LCq3EhnDqAfPGChs2DwpiCrbVmRZc5Ndzxc",
  "key31": "3q1Rn6FmKWgYqNXwdicGYgeFSZ23hp4tEHpBWhkDbkp79HvjzNnmquBvthBEvG3pKKpgAgQ1VpUcNrhjEz4QVTpN",
  "key32": "35q5oytPmzn9MHzCHg3tcsJiVrqk66EJrynjDiM56x96vw8RcCpqWzQ1WiPciHYAkehPfDrDmQW8DFAyoMULx1S7",
  "key33": "m2wP6SLxucyfu5pa1XwsvpS6SmJGpJbULtyCMNqZE8nrhoLEVPzxXvHyEn8ernuaapAauwRboEUEAw673uwyhph",
  "key34": "oBNkrssaSPqfYrSYo8KPmvYdzsbaBNSP4oJnWAw7xB2CigVm734h4pncURFJisPfqMQuBX2zivxUVcgm6jKkvkN",
  "key35": "3URvNLhgAqSxGH7JCZeoV9R9BqYdbE3GyHpdZZ7AjLybA6AY4u6kHe3g1uYAXznCt8sWW7AFfyzcrcqqw6cjDu1y",
  "key36": "fE6w5wUWzUPAUSY8LUWhJCvGDHGLKsf1dJkvz4s2J15y9b2ZAWZbWZrq78XRNQKHe13aE9TASfBkkHHGSU5spN6",
  "key37": "49gH6TzGdtLxsAMZUj4tdFsDqvCtnLocGRzqXCswHxPYHmSoGrNW4FvpVKwYwYnBPcvFMZZLpjRDGNf6wdV3sN4m"
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
