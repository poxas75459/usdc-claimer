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
    "5zy6P83dEmD1SVJMmZksgPoWX8yMko7LNJdjkbKtKR1xzdDgQT5V4m5Vmw9FhKeySFWhMJY1mFSUTEwn3Jt95wjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AeyQBZa4R4G5yHP8cuh1tyqa5yfwDhjPHxtcfRBYNYG9JHwgdMm4pVgQ3RZvyprMscJvQRtq2pkRgyNcwBkdwoC",
  "key1": "4ng5yrkXTtEwwpD3C6HNH9o597RngVzqrCP1bNSgZSkMtUfecAdpRkBmxbN3ZTd6EkGWJH9m65q5oa2qhC66vEvv",
  "key2": "3q39SpgZVQz7SDberCjD5jdg3M5As15izgWWiSnGv8okQefrgMyPAqiZ5ufM3o8t3WcZLGhAoVfAzvYGxkEvYjxo",
  "key3": "2gBpJL52cobrSBkehtMiuxv5y8jWvBghVCcWTtnPPm8iVM9oPD2q3uCxUaaAm3rqRYLKUHArHrzrModtg9anRGES",
  "key4": "3MhXoVfJjM11z55RwSxga2UVx4QWwonTS1R78zmdgWjHR66DG8W9cKc59aKBx8HTZqmhMriTLVcA5bU4nGXe1pmQ",
  "key5": "UwDsEiQMXmhCs2XtfZenQRS1owVRWgk7y7SShTKfYKq8NVhbzv1ZwiuEBmkJQnxCMFARTmx2eksiS9isLsauUqB",
  "key6": "5hVALF5SAg9euiiGkUrC7HA9NEepWdwXiYVF5oPMWGzYtLLMWXauGWa1itjJR1ybvvutaLvA4xSNGEMRb9nb4R7N",
  "key7": "5SDqdUxfxK3bc8rZQVotpANYDNvzFzz1okLmch6DU5T6zxCE5B3i4e2F9rmomCGW538mwudeoWcRzBKT3Eq91h5F",
  "key8": "5wKwvztRCEX1G6NwH6mtBfLXsj44orzkEgxFfegs52N6QhyJhAYzrJ6kHAahsq2rjtsoNZb7qRw6hrWmXpHs4Nkr",
  "key9": "2CegYFvQQziPmXzjGP8n2MoyNKwRe91FLLHQG7RpiYm6LrxQ9YpD3vfEczDGjYkkWpkQBSEaKDtiiM43tHVEoZej",
  "key10": "5EmSy22P7wjK48gdRskmYGsswnru7cj5hb6QaXDmxPaLGSDaxRmVauiXovBaVz2tHudZtEiT15JXQTkkRwN2vJ3u",
  "key11": "5JC1EVMVW7vGj4VHeTgznGQG3G7DER4PmjvRPJcfECAwciJyPf2CVeQyTi37gk6HGbQM9NxX9rzNe3FB7mp1QoqC",
  "key12": "K1DGEwm7qTmikMVhfVPgWV3DqKQtvQ4BosJDrH5u425vEsb5f2TCLLirt226uqBe8f2YfgHqrzhKhNExgDecdZn",
  "key13": "413ccfT7zvuv9vtcgC7ofzR5rwRsmYMsUCm8AUkK6yQuGCiKsPbTcyn2taXYVN9DrPsfvCreoQNcLSmL1YUA97y7",
  "key14": "2Af2QpN8XyrX9ckj5EnZAbdHHVFYCwKsBEWkuhwWnYoUe4rs3zU4CBD2JvkYfwrUwFC9buWiqNVVktkm8e4mfbSb",
  "key15": "c3Gf5X7cskhznp5NgdKfK3HjHS9ZWTjBa557WTRefn2XJLzNAcSpxCYtJUoHzCRHmHkaUsmwDQpDxUv6A6hBFFC",
  "key16": "3GHtBPDbQHfX7u5SeH8pvfyq94weays7T2RsCPT2uR1WdPaqnCTKjeD9DMCWgVQ1r32NYiHLzPfu3VyEQ6GTevSU",
  "key17": "9ZHftrtJ489N5D6uHVVYxmkBoUeoghoUfkHasjrRkf1SzHpdjDeWhqpd5urcD8YWBp1o2Jrcj9hqabiDMCqtUpD",
  "key18": "5XJah4T85YZKE3wF6zmwUMVnLXCPSKmS6LGxrNRub87CiXrfWxusDsqeAd9djHiqWjjTbg43cw7EniQoxSwXzQo7",
  "key19": "3UFKPNsGY4tTMVUk7uKq9od5SUF9auEFPXs8N7ooCUWY63UbZuuzUSAuph8KJMagyeegXMmoQA3MXv4CtiAAeaRr",
  "key20": "XKGpg6jQdnsDzi2n76Qdt9uxsqLx1LMneFPZX37aA1CR8UKtquyURwiWypzAWRdcR55C5nb4XxF9v1LmxDw9tB3",
  "key21": "3Z2xo1iYNTXuuqzFND4eZUk9ApmkwhAqCZFUfviFZd1An3HtTd9YrXGXVRRjXyWw3STiun8hA45E1pNCqfzSuHhm",
  "key22": "4z4yGvBL3ak54ekxSTbVAEkoUfNLxrg2geMjgdLjfWDTVvakkiYtJVFAsvwnP5rUNfLy2pjS4BKX6LDfvqKfc6oN",
  "key23": "23ijkRMkPNx1biobvNXWS8J6s5j3GraiirbeUWMFbuKiiGDEj3hxGaWtXHAiCNd9mrBosQXLmCtQwdmTbpyaCaEL",
  "key24": "2X5uLgdUe1RQb9ymVoo6DRrBiYmgnpev7823kcTGhRbvMuwsEo6TMKETPLpoYGcy7So2NAwDZdLQKsztEdSg3UcS",
  "key25": "5XueWSYRU2DpUkixqN8EqEyYQXVg2PJXbPeRzCuPoLeAYHKjsqKegzKZF9hpzJQF5BKuF5Jc1rWQ6vWEwePLknJg",
  "key26": "3Q2kSxArr3JfZNRHYuVR61etCmDEjD9t9kMCd8RJ4C5t5ZGWs7NCRLAFPp3g4C91iPSQZMr5JR1wJsDZ7YMhQZ9h",
  "key27": "5tcoesfSB7AjCL5E1FUY3rGecZuApLc4gDp2Rjv6citYTcgc5CYEPR7NkjBBVe5dFyiokVPcG7SDKWvyVDhAvwSz",
  "key28": "3RX4Jw7CP9Q9EXwgvLvCvbqarW8ddWZ5R7Fhr24RQSTUVpvkkTq46NQKftJ9KH5jDjDM1ifdTTwA6M7PYZYgaKhd",
  "key29": "3NNX3mysr2QT7MKeHRKDq4aV9amjUmfhDN1gf4Gyt3QSqh3LtjyxhvkzqzmyL6N1vHx7f4gtfkwf3Mz5wJcybh3",
  "key30": "4L8YcELXPaoPdVGz7bXvDXiFgTtTk8gGyQf2MJ3GY7dPtweeZv3wBhLjtBfY3XopKEr33qEL3LiygwnAeGSRWXmU"
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
