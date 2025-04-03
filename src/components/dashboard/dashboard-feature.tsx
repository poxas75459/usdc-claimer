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
    "3iapUiArtAdZQDkHa1uEX6L2dcnLUVbm9Wx4YsCx6L9SBFjeLwu2mEi2ShXfHfvJG4i3Bg2GbH8eXYzKtaupautL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44DwPnd9fACp1ZtqPWfmY2LLqzjuwSkgQcz7zsNoxBn3r5vKNjVUS7iTEUXBxV3eZGLQ54CyYqM4YT7eeP9Vz2Sz",
  "key1": "3mKXxv5De2FocyUo7D7kUTDESwsx8FGxZf4DNpGV47mNevcLTdngygdDhX4UpCFMAf7A8wh82vu8Cww4FriJvfrP",
  "key2": "2s1BiZ2Mawj3uexdMGsx1M2mxpJvMQBaFyF9gyepTrdgQCu6yo1bKhYBj2tdpc68eZ4kPxrWYBbDWA6uRYRHKwAN",
  "key3": "3ePCsUV3n2iiHTZFqXRtRayxzvVhd1UbVyGBfzuc4PUXnxSXDdnR6CYDSEdLVQHZtjzYavEjCMnzBAH5oMRUGEYj",
  "key4": "A3rEJ8gY8jayBZKTwxMDksU9C3Mjymv2wTQ2NHpeAEPz85V8tW82r6YYipdrKRJnGh8hdYttDf3YdCnR4zygpXd",
  "key5": "4ViPU3QgNbr5QsEjFCfCg4Yc5o6NWzaGaVQ4pWrdKdL5gkoSwHXXFs7F8XUifStVzrtWuSEET3mhAoCjCZYxtJUM",
  "key6": "5i6u25n2hacm4zQabYd3HKPhLm9XHmY4RkFKirU2qtUyaezWV3oP2M5ubTji3RSnXyRSxwEqqRBqemzZKZ6fUYtf",
  "key7": "5qvfUTwFLMGLv85Yeekh1HcG4bRpiD2j3AjkfQVwDduY3Dz2uz2tLihYMiVhrMHUpZTxyJdxCDaHas6cwRATPW2V",
  "key8": "418bS9JU6sKqeoYmC91c8A6sYCg5j2f3JFmRcdpAjYi9fmTG1TVKCrA3GPwEDUBFA75L2gS7kdGb2u3CJm4SndSd",
  "key9": "5X29NbYvVUc5MkvDNyJvwmkTvsw6gFAAE1UhXSvnejqSh15KfaGFBbLmZ713NpuuT7eU4cT5BWVx7vmSzQArRC2F",
  "key10": "3HqG16wZDzo2Vm6F1UZt6rR25hqMudzgf5McXG64YtaJCXdiYJJQfwbnBmH1ajmmDembRC9fGLcwBfmh7bWD1Y74",
  "key11": "5fmGxsNNpaTnwe7BS45Y4S9gLsdL9WewZSpVPEjXhPf5EUpvi3ZvHzADxS2HgwpX8iva98i3Nu7pqgjSaUTZAD7a",
  "key12": "5cBFSh9t5wyuPnbnVYdEfkHwxxVAZSNpqrsKSCGM6eQKUtET7pBNKejzUagkUpQadppp9Bi1GWXEkoBNnBihiBEM",
  "key13": "ga6zSxh3n5qdqPoastHakEPrS99c9PHw9nzQEC2ZQGeaY5BAvZRxx7nmauQiNT1FjD4i74Ru2WH14mjqE2w1si6",
  "key14": "5YS9C4tkSLYvvReXjqiqUtjRH6tQQRyEG7UtsCCtkKxuX93XCVzMpACqr5n44RjJ6murqbaXS6KAqVeKU3GqLmha",
  "key15": "288ZjxneXoHxAC19UsNEsA1Euu255hyQUGP8VscT7jByS56CkQ2i1PPMifQdZrLnH3VVP5482bhdEqKBZeg9KMXh",
  "key16": "3UL2sPxpVLK8nhfVADwpXw4i1mZ35zw1pmaMHWgyFT57ciyopw2mswMgs1XuScytGHYsAngpQoAmu7qduFH8evNU",
  "key17": "46E4Sn17tgLFvSeCu4mNqdz4WUu32FZj3g3jFNXC2apvpay5u4kqnH2JSefZsR3zts1J1R66NEWA3CH1ZEbexu2w",
  "key18": "iTci8vnUHUKvkjHFCDu7qkeTU16sdk2zMzMhvU2w4G78KAMw3sAoC5d3JjfKvHPGkjH64MiCdcWSc8CSfTp4ZHU",
  "key19": "2ZoqK6upcztQeqWj2CJ5YJHBoKDcrwsfxsTematURpPPxDH3bFbHMshXAUEqKG2fdLwNMUrhb7pamfg5Wna6WrkL",
  "key20": "2hRDJsrFcvBNE2W4rQBEhDUyYMvDoMgs7VaYb4FF2eNjvkRFGLjTXxnNCXZ1StwFrAjFSESSqDYusq3vV8XAEtv8",
  "key21": "33Ftr6CGpoyBjE43eFLzmdGWeJre6Ee7oZvVrrYxmkaQHz1SkuCCu1dzB16fiMH6rSuR3rnbqzG6NbN9adjcHMWZ",
  "key22": "2fiJAgb7soTbwN5VD5esCV7B3WjMNUQUVS8MXdpZvMh7DonZcMoicW77NqLDaGgSmBuDHP2zZ865ovfAeVW6Gtsf",
  "key23": "2A6SRsb1i53TZfhp3vuPGxMtZEQNC4kzEBjFUB5mfzgCFxqDjd69WaTg4B5vnLk4KfGJRYRvUDQn9vp6LH6z3Qgc",
  "key24": "j248tYGxMQhAi8EaBYtVfyXTsYW5XnJYvCgd66hEUomkqf5edtj8GiCNZAqwAsUq56dzjVJNph9ntrPRQ16fmfz",
  "key25": "5E9Ez9tZqK9T64ZNVRcrvuutUsjLrPzdgfP1epaSe9sUCb7aFxA7qsfpqzNSwcSBUvrxAL24ejBPspbFoCgmzhvX",
  "key26": "2vLeTFgS1yMBtuBbz2QTS7EHZbweAmF4NV5qzVebHhhuhWdtRB18T9w7FRN81Kpsx6RCd2b2qHoEHae88nTjtuyw",
  "key27": "25jytdQShRa3EPMf1hzd6wzm4Q5daLK6XGtgSfW8KdnAxTs8B14jXQTWLG5CaJJ8kZenm5c2j5grFDPDW7xrXo1H",
  "key28": "3NaKjdztwPEzwgx5KLAZtyv39myzuqczY6eDbnnMZyW2HfHqXxhX4gUzE8Jf6L8bfTJh7LJoCMJPV1dAxxjmDW7U",
  "key29": "p2xLCoFu2fCV5MeTyLrz8i72siPRFTjqrToySr9iBBAzEGosTy4acQBp12sLb5B8NniZqdF32BUYxyrYZrfF5ib",
  "key30": "3DNCSQapNb51HdiJrQL3bpagbWzN5rmLjB9b2QmswsD2umddTzbSafJLNLJFtuMkKiaGkXHXWvZBG65uBnc8E7EX",
  "key31": "28mpP9RD8iS7fkqPpyrMn1Ks51nanbSC2jKYJWtQmBserxZNxeyb12fCM1znhUWTujLYh4nuyUgKYiFwFZZoyFBo",
  "key32": "3U7LXCA6md1fV1YoeRkvSVvyVVYTnUHQJWE7sn475wD4fZNKJvRJCDRsCuxvmwqoEVoks96cRwS8GR3NSS6WrJrz",
  "key33": "2YUVpG8NvVi48xX3k6BjQDmaTSShtq6cvEFGb86W32jss1tfyGdGo8gBjkXFhDdKgoeMCPqKpCWNZfmzBNHnC7fU",
  "key34": "o77e4KB2yJDFyExEwuSXwhsHG72q7ii95CKS6nyRwaTbBHDDPDVmQLa6njkqHUgUfV1as3jfWRz81XntfT4rGMZ",
  "key35": "3rFUwx5bis9d6pHaqGQJpk1KHei5P6peAmiNVwynCzudTjdwMrx2J7MJB3cuKXnRf7DyjLdfHLTLGPyhN46RhcTE",
  "key36": "5VgxbrBrtngafpAvD9eudRULM4uSmLx5f3qcKJX6DKnVMqWoahx5sfBtFMnsyfZXP1MiAaxiKDMAyBakAXVYH6Tr",
  "key37": "2QVFieTcwZ8iLTaiK3SVoo7MrAAry29vUPgY54NNYVgDcfzU1pcFnzZS6B4cyQ551e3TAp6Grhh88A1Acm4SBF3c",
  "key38": "4s5T6Uz5PAT1i633otDjuo9h59kepATgpWvixESYziJ5xexo9iUEqKreqBUMMgRQRFZpSTeA9k9pFu3dhPC8bRoe",
  "key39": "5DkVYnqS1VNZr4Qg2m4fskaLZPzARiSyKs5ZebGRDPg36DuT2gtzeqSjp7yZP5AYYAi5nBfRZuuzJCUKe7iyfSX4",
  "key40": "jMLsND2acayYmSNbtbvwbYymUS8g3yc1Kug11yLjVQbzbVyDDjZbrfhgVc1Ayj1Wv5UoQA7EebXpXYrft7XWkrs",
  "key41": "2iHxdop3h3cZDGu55JUakv4riujnks43j6tbY2MCZVSXL1PWqXF14RLrN8D8Kdaxrt12MnvuVHvFhBBJxMk3yLZD",
  "key42": "ypJRxm7vryraDwV8HDvBmfcpooH7XQaeCfjcGshnqaqkPXU6UX8KfLspYQqwVhGgJjAeu78ZobwDCLMToQhbt5D",
  "key43": "2uDdXqvsSpV4WwEUqqsjMaSAcSvQwM7PsE8jLBTS7sMtjscttL8rmpiNk3ryhDWFpjNFRnvQZm14xwQ6Ge6C78Ek",
  "key44": "63KFpmBn92DBEUF9VfQcpWyoyWc2XfVs6sfwzCurFP8ikcQ2PZN5no6nsvQeFSs924tHTVRtqSSrUsssjvndDpLM",
  "key45": "3FKhXJycFo3XPYnX95xbnmaNoYQL74Wfyb54EgQ8Tgy9hc8hVJuVBQLJhedV8ivtp5wbv8JRHA2qk2ufE6SWCJyz",
  "key46": "5hhorT98eLCyX47rDYgWASNvzJtpxjY7YomSf641EK9pwaxBkCYVKoQjz5hzvqQSEJnVvg85gdL444U3fnWZPbpu",
  "key47": "629w3udkooYMGRivv37RqCwc2bmYzfBLow5ejjLjACsdinZWJxzWkU5GzGzM8y8yriMZroS3uZy63Niuznvha2rm",
  "key48": "2sqJLxJHh3AeB4rJ2CTK7ZK9Bpzz3gtEQhVYhEAxMzFRaxs8BM8mGksWtMfQRPP8HCcVmDLuQ6n7y5m6E6BhTH65"
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
