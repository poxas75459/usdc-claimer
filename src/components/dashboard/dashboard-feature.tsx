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
    "3mWDzqjFEw8wsmT9VLHDoNv1vCp7kb1TdAKUKKHQfe7Q2ajEz4Ju5uT4k9P5cwZK6A2NvhZkP8VYrYHdG14h6BtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3Qt6yDxx6e8MmtV74XviYCdzh59fKUoX36iK6MmhvbXtdNHNz7CL7TwyobqcTE66AiGi6RvFCGqN79quRuLb6a",
  "key1": "qXY9fpoq7vrrEXHaZ2i2354EcAjZacUNGP98aPev7AaaPiKMaUrdcWyj6eYrXf6PkZxNXDMxstcasiCyXVPx6D9",
  "key2": "3Za1oqeF1gSRqj86U2B2jKstXsii8oa6ZoenU87m3kRmM7DmAgfvM6hu8c8GZnG25NF5reHoRdCxHoSrJJr2XKNb",
  "key3": "4fr3cPYrargPqHSKmYkXLCG6pDZx7kCoeDGnX1q6CXFXiwH9XFFgPHLi1tfetVozXEYYGkv8xi6uTfqyHSSwt7qS",
  "key4": "24KE5snfKEmLjfTCeRnmbaXmgT3Mh7h4CcPcQBpgZJ4QovraX6AgNDhaZW5REgCs3Phcr82zs7vetd8CqDsvCu27",
  "key5": "4WiroLyHU5yZxGu57WPoS45DPj9ZDnMcAbC86YyYnyUX4w2XxWHjZ3q1gGz9HEAnkhuht2u987R7k4SfMFfWURLf",
  "key6": "2yMwzxeymM5sbUXQUQshE2x6SmyjBrFfS3Y6iW5C2dCGkYfjUZC91DGhRvz27rZWb4yyE2cqZMZwVCDMvBy3apDx",
  "key7": "5G67gBdEnSfpG7SMGdpBjDGDLCNRGZqvkca8KoXddwXxn8hMHjBXFDZ8QWMXbURd263dEMc19KGpcu2NcxjR5JF2",
  "key8": "3MajvhezASoASfwfFuABzaEKFgLEboDfzYm4xAigsro76dQCkubfu6M76xFiE6mUBtRrqqVe1WUpw5iyJ2p88Xi8",
  "key9": "5ZUCZXqo7hEJYi4evvvySWFfZxsBjECrFLnLmCgzSr1XoUyhCi3apHgz76za1LLjNHCMoBiee8LfcNnCQjJc7CtF",
  "key10": "3FyLRDAukqeNHQk3XNuS3yAd3UhonTA5fTRRbaCkNtVMc2FpM91DKiiNzk5z4BSZUeRjnwceVk2D4Pa4muGvuZ6u",
  "key11": "SCWSuzg34CFU8tFyjfFecLZ9XNosCUCaGSN1aRpSdR3xMvj6mPjnTkBm7AcrfS7taBopfLXBBFrFXHKLdbwMWPK",
  "key12": "3Tua8361kfowk2YLCWuBkAxMpozAVgCLbRTSiXgEEhwiW6rqGQCQyGDmyQdm56Wjk3U18WYiR2U757SvW9wYn2hG",
  "key13": "4pQKwHNh9arDMfmVxNVFAB8E3mm4astKFTWfUdZYZLGmoAD9EKh2GqahteC6vmgCWyPKAWyJpuJpVXoScUQzfFYY",
  "key14": "3FRpJkyK4ha6hxAZDJmRL76BbFpiXH3Ajt3PzDF7htEGcrKMCN7TpPH5da2AXXtArwcQgc4YhMVoHs3wP6MpqSVD",
  "key15": "3bBRSXQbnt7ZAxYQnEaM4CAYfYTiMsq1oJPSFW4qeBQBEkXL48xpx65WZGiqYoBvYgiQ6Evvn5fUWP7ichirvhma",
  "key16": "pgrjsn1Gs4P9uY2THAHLozQpiVFybRWhJg2NfXL7L7LcWhq3ngMQqJBYoC62hjrHRPP2Q2cfkwGtGRN4RHsiL9E",
  "key17": "2NBo2DoZ23i2YXT7cD3HuguaiFSfXQmpz8diWvKyuUyqbvxLzMJ1vSBm36YnAijGbMCTnnNVJsMzEbZYbSyABA1j",
  "key18": "5zdtRAF2Do242a8yV5CJRAPsGDYBB9bkMY8JKnZR69fak6UJjqh65MQZjssp8r5naBNh1jw8GJHWrikhMVeAvmq1",
  "key19": "zseNg8mpn2Zb6F3fkXGqUUUYsy2UsGzQYCEH43N4jEyqxpp7PqVFJqyvMTqH3WFDzVyXs9TrXjeyzrgBzTw4z14",
  "key20": "fc7k7vcZFYYgtsws9xsBCEuVnvnsE8mysdFoaEtjfefMLG7Uy7ATV58BfGkwX7fV9xVXgw5riKGRz7fdXJeoCYU",
  "key21": "3ZjGgfRsBzJihHZi9HffWCnpWhxZJR3cr8A84mr4utQ87wBwN6D9DzWxeJJvbACeHLmpvvUJWG2HqgtohwPYVKEY",
  "key22": "4GXqJc2GtmHaYopEmJRxHXK39iJAEcb17vNpseCYC4enQ4NNwCPg3WmxPPnpNcp2X6bksgoN8xD5NR5JL2hCgHpE",
  "key23": "2ZsbJ3vrYspgV2QuExNxjibkBvAdBEHoH5KFAmbzaGpWrcNUUUMAhViRMvhdbSLwL9yNWo1Y6gLKpE4X3UM8sEnc",
  "key24": "3sD4ovKDixLEGoAgCPmKTDZvNbhksVdmpjKTSdNwpqMDaGFqScHLeRiUSLRWAQyMmdabTmF28pAS4bLpbapEyHbV",
  "key25": "3mmN5ctF4CrSUav5LCFkSqCt1qcqKTaBxEEqFA7VoCmwEXe5kQyTAjZJq15gidcWc2s5ZmNb4z7sFCtZ3iPWDr2n",
  "key26": "8qEDkLmnMZx2SV52V8zy5dqH8RrjAoKoeEqkdhZBu5vL9eJrBUZi7NPn7yRd8NL8C2hiDRPe46syfBwpzWB2qe8",
  "key27": "3KE5xrKxE6xP6crLWqah4bsK2oyFE1iX7Nv5oLmMeMQzKjUJnTgVPzyGY4pRbb7kzYGzuzrU8eUozash7SkG2UMH",
  "key28": "5wsxPjd5CymRMYRPHP91w81SL6AjpayxAA24MKVsoAuq8xggSsgGn6dSMrFz1LscWtgcVicG572NboBkqTJz3fdV",
  "key29": "55xXbBGbGyW3V9sHbhcf1WQNn3tAgD5sWzvEuA2MmW6LBnYgJNU5qpEukCzBpSnakyo3VWwUD87JzSnd44CzBjrv",
  "key30": "5rU4U4A2976397cYec4CDGz1Q4G1iJVkZjz9T1aiRECwGGtJCwM4b5NeRH8uGxJh1p3szP5Vr5SSP6gorF5yYaQC",
  "key31": "iXtVzcoR5MgiYqC51DTvR5P8PMYRdDNx5AvPyEVKSfM3qXgA6wcqHAWZf9otv7rc5Aw5Qbb6R2Co8Ctg3L12jWZ",
  "key32": "2u2sDUTcDLUDLi7U9tTxRKcqscnpPyYNQmQtC9jjMkdVFBKbUfJhScF39oHGvmi7R8ka2RW6tqwu4FLJnBLMSZai",
  "key33": "2St7NLgYwBTAneJT95JznGVuQbxyuTcBA6UgJG5SfVZ32kxLmPmbrjmM8YGor8dG7JJ8Y3p6SWVRDqMw8StG4vk",
  "key34": "57wzvhiUs8CYVzDZgEFcdsxEVtLApjshknngvVufsA2JPdof1SSQTJrXExEXuWPwm3ioJPEkZNWpaffvyeTHhpL8",
  "key35": "4HbUTz66sktdL59Jk1BMq5AR22DVQpZvRi68MUUQi1rVw1tRCFT2s7YkfZL2HGymZkenDppaxzT6DhrBaGR9xnRN",
  "key36": "4AFCZZE1zD1s61EWQwBvnNmLtdkbsfXaXwZDew2DksNYHB9skUZwzRZsFTzdPxxH4H2GS576kjPNVscBKq83HBdi",
  "key37": "46gS5xshUwFM79wijfGG7FMY2ropPJBchf7JtvL5woyC3rif6wsGFCop88NhNfEB2Fqi86ey1YPhuKoLDXgvHiTR",
  "key38": "e8bHmHJbnyHYMqCN1ashsuXQ1GRydsJVst99Em29f8EFa8hKEYW1apXerbN9FYHiMhvncmT7zzRXz4VdSCz9wuq",
  "key39": "2BcXkmubPnC6aD8JQLjX7jpavgJQbVKQyvPyCTK244Bf2hXn3ZN96QYtodM24vM4uaj1YGfkdW5NtaSxPZadUVX1",
  "key40": "oK785Byy2cLVubzBNtCZeBWmR4LjNqP1zu8EHnDPpfdA3z9w7kVoVszZZcgESwZQdNvsJK4P88bEgvjLWoAZaSv",
  "key41": "2poQTJRARdvHZGZnLAVCNFJ7C8Y1KjbWovwQcnASRAT3hWgXnj1g9nbDaXF5RRcQyrxgWaptXLdPnHuER3CMnvPT",
  "key42": "dsW6ZAniZZhqrQgZP7tCrtGeJbtq5ExVzAHQYKce7eKLHEqWZnXJCiZ768Wby3kdeKGuJLirSHaxTD6SF5yUVU7",
  "key43": "5dQCmP9TMS4YqmqaVRcDQxfP5Gfg8CftHZtQZW1U8Bcma37LXM1yNoQvyK7FBathVj3uMKFxyCwwM9E36KwedmVn",
  "key44": "6GZbqx7wFpAKhuyDuJ4vfo1c3Bpf8yBjkhiUgst9CQfcvyXTwkpJECrrzfms9yC8haZEKJxuQqg7FaiMEx7JMG7",
  "key45": "3LpJDB3A7EQ1kRPowk7YQLuYH8u1qk2rfWMsPJX1kRk3NyREn7ASChYC7wpijQG4oofKJK3nkHNe1ebSkRLLMxCE"
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
