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
    "5MMDfmQqvLPSrd5tjnptPm2Md78vKD7LV2WW4431FpjmQKP6p4Y7cKjoX2mMuiQLeRkUfs6mcA8MrK9hBiRUBDjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J3TLBps51hFZAq3ehwZTvmJPFsDaRQ7vjbk5vCem6zhjpHVnQZfo4zfio4DaxhStQFJuy65sYsQrYExZbupFAdC",
  "key1": "4g6k5LRBCpWtd23z1mhwByYfuanA75UDzktZCxjoqD4LdYrBaA8TjLtzxwf3j337M39cEeiRNUYM8EjNnZKznQf8",
  "key2": "t3vWQ2P9yRYFa5WM1gcp1mbzL6Dxfkfw33oBHqkTnc7AhguJ8Ju3edqGekoEGzigpuz7sKHqXEQnXiy7EZ4zbEQ",
  "key3": "5PeuRv8rD7tV3vXDemGvXhXA9ZSYBsno2Kn8evvu8GXS5fjSWpzWtt2KBcxG9S1hxvKJBMaUmaY66Ro6yAgfs3oF",
  "key4": "3rfdZPrLSzJE2K3gNck89gaZDDuqq1dq7BD4RTWe9zzSdSvDV1rpo6aF4MiCPgCt1zHukqLmEZzQ8TSVfzeoMpjq",
  "key5": "12X7Q6nRdt2otVEfkhkSinxX1EXRmBs52LLHhd11JX17KhySUBtS6hEkASZ6nKCtmfhRXpsoW4hkQM67BRnt6BQ",
  "key6": "3QU7NnxxyvNH9RWtrJBtcdeiUgYcueM1W2f6TMG17tNoCLwxedbJnbKkPQQb5edZmr7ZAcCtpdcT5tUAeYaVFPHM",
  "key7": "2c48aZm4GRPUxRcWkEdyQF3YTaBdqdMQWxgqkAK2aeayWWaxiYCXraNTggMVLzUiVaFKAkFnPPMKZLwpBjzjhncx",
  "key8": "45gPNMsAQrPwU9pRPCwLnSd7zmrfvaWQkaB3Pd7yUGXMs3HunkGggpn346ThiFj7FSEeuskEvWv5uXwjLQ3mFkeH",
  "key9": "8w7gGRGf8YzJ9ZrxcRfwDvnWs2y9mRhC5fPpjRp6o226NnF3gdoqjtVDZQULE3PTTye9LD6gJ3BXo83UUnEFHaY",
  "key10": "4JJfm2yD1mWXukAy3yCbjr8GT5MPDNHkWwYvty2xgQAZdrRueLRsakha2wKXtRCdTU5KMibgkERH5pkbDevx6Swd",
  "key11": "4PnaA26b5MrpSXu7UskySG1jJzZkpZSE3wB38FTdUAPzGZ6jxCRRmnXQ2kzDpqRYstLrNBNpB6HY8oVkFtzQegeh",
  "key12": "31qBvVxqLBzHfhGz3e9Aq89NP2p2fVqddVG8CVXg8q2ESJMxZBxdp3LYqk2uP2vVT6fKoUwuoLdtZYYa7bMsVhR9",
  "key13": "5RQJLf7EHzS8GDocq1V5j3stehWVDqQzgrUivbbZnZScrh3PahZCE8Yc1xNdSxsSJ8KTzjHXvEojVME7GYdeA6X9",
  "key14": "qPbHcYDWqCLBD7v4cenznCgJ66gh4m89mTuKdBasKSV6nuqj5DmRTK4Lq7iZ2ct3XsxPkbGJUsWYVAbRTjvP1BH",
  "key15": "2urwpFjfF1d67HADUNU3hJzp1eXPm7dCxQqcRoiMK11LN9kijc4KVossUGTeLxDHWavWcac7oD71DhQqJEKjF1mx",
  "key16": "8xfDcsbhsuu7fdDKTxX6pZUSLCg9Gt4N3aS1a3buDgi1iXLBrnTNiJqFgUgvQjZbUVHHPAgVR7i5CfQdMFmc7z7",
  "key17": "4GmqZ2wj82wz9Re4gmryNiFDt9oPUHRa2pWH1qSAbCAHnefK4V3gkB7Ucu2obcRXg1reX5mfMv1srQgQ2hHUc7B6",
  "key18": "2pqE2YSSKoPvnBE69AbyQZryDi6gv7Fvf1qPCFAvjG8wEX816Q8nTbBrLoUJMQRFBtgW7h31WGWdencJ9qkARrG4",
  "key19": "2LCZ8E5bKQS5zPzsJZqJNMcYwTkf8mQdVPDnnku8UZ6s4QdELknjaTiaXqjfnYxxVGyoE78W4gjVxYSWUgdMQBwd",
  "key20": "3z3t73BLF6k9iPEE2LnNDFTL1MPMAomUrJthBpUEFi8vkaLbyFc8X5GUyMmVZRMtnLfQUWWQg4erVQZ5Evv3XkX",
  "key21": "3uVwxwL5SRZULQzeGVoCy9PisxXpBH6F6Mai5r32aXLGGbFY8B6hvkm2YMDjXHHpJNdY5NfRW9fSyrDvAEBQAJHw",
  "key22": "5bvLDKCpD7txShC9gC9MqJChfcbfudwLFmJGZHsx9mX4hzy5FTenUtAhKEokzyEgHumTMoWPyZStCc67CgH25eVo",
  "key23": "3jkf9hCCYvRVqdqrqfkcGHhB7E3hQHBE8jKThew1EkLFSBcUtpLaXz6MGHNqy8cL6MG4xux8wxigiSuXPpou48ua",
  "key24": "48y21naK6caC3gjZCn3rKHYWuz4cAtGsk5ioLH9QbwsZnEEbSpcE2X5MqoHKCBZeLu7wnXWAJdcqpV933psnyrA6",
  "key25": "3NrvJJ5fGs6sS9PyrLGp41L63oyUvPiX1zNKLiYtbvyVBWRLUYugCoUcLVriH3frX5zNeconvq8PTeDq92FhfMrS",
  "key26": "4iC3sDHf17HEhdqXAHUesgEWE6fzsp5ssYehe6FRUmdyMTqA8WGKFC96ysbLmputQ68UzrK4W3PNkKVRzLw8hwe7",
  "key27": "39sD2AijRLeaz4yvrtm15y8wUW3vTPuKyVH9c3osQamvYD4hUZgDSGypMVnt9ks27R4xhAjnWM5LqWHkoQHJ6yyn",
  "key28": "2aXKcgtKinnaHr3qCqYiW5deV3LCfCEuch6cfoLiK9dRssanmbca5QqfwhjtyDeMV6PswM6drQhAEu8Tan9J3wZy",
  "key29": "aLh3YwVyXJMcPDmAAQDrrTfVYXnuKXrpnh1Nd8ujAvnYvVdNSiHZMEA6szR2ExZiCqRibXR6ZrSwTUxXgG6KKPu",
  "key30": "4eJyJwSm3oPvCP1Rg2KC5hRgPTc83mFQ7CEx7nn7jkrxBWkwa3LyTQ5VvBSdsNfYHF9NZ7mmsZPAdhgGXf4YZZo7",
  "key31": "4myqPwBe4PhWsfNgX91vCFs3S7VbdPmHbCWspHSennJipaSqfuyTeKhZe4tjcxfYwxrNqDH1jJBGpa24vARoXPpE",
  "key32": "3knqYQwbUjVDhDVhQmFxCPfCXyaDAUPUJN3k2hwxkJDCq83Vxhrf46wvt8ZvgvtZ5PPDgES6R3WqiMj735CL4XHC",
  "key33": "3J6ML2FhEz12TFjMdCH51a9ATJeBMGNEBSdZZrwRTiokQVMqVaA94hAANdDrxQDnYQ2stPfXAMUP4NuuMfAQKYrE",
  "key34": "4UGr4QKqqK5Giv5sy3SXHbBavsWw3RpqVbDca4WTRq4ygD2TpSA7p3vBsoZubZgfdqaSwBBgLoW8LKnU35Yy7263",
  "key35": "4yJkN7P92TZQFAFCi2bN6g4oimoXFrZK1saFeDLspv81AjaCcVe14yZm92dy9MzBAJ4K1uTiSUVgsa4VkxWisxQ9",
  "key36": "3nyAcYwyToRdNGoiNku3YvxZ8BoVFmLyMiGqx6eCN1QPAZJVziS9WySPNyc9PGyuQTGYv77px8q1QHKbZmmA6GSt",
  "key37": "5YoTeuUH99dggxGkLsefZ8q36eFrcfJxGt5VrmiLmB6KLjwdwin8q7nXQ24McsLDaoAjuw4RuZnPfu2n2LsvzFRW",
  "key38": "TmoEWtdZ5zxeWWw3JVdWpJTM9PDCTmGYtPX4wgqgyRKneQ7nvBRnG2oQXbi1c2zQ59WqPBiTM1uu3b6rTAVW7J8",
  "key39": "4HqLKw4TRMtpHrn8DpiVwkbDnS5b41r7nKyhjuGUxJYTMa7rmic2dqyKvEnqq9DBqRXsVTaF9C7WGc15n6M85haw",
  "key40": "5VTdPrannmkZFaqmxY9p2HVDfCc7fzCLnW1yxE3dhuHanvagfKGvxXRLXWG8gJ9LZU15XqM7tA8p7aQ4A2hkK5NX",
  "key41": "5m3eyByS7uTUKgwxSrfT2FyKPWtKfDjpRqz1PU6LS6qCqmgKex9FANKjCAfw4igSo3qFkqYvkxMZNbd2mTg4mHKo",
  "key42": "bk8KZ1iD5GPDFKHVa15wfpCe3jB2pvWH1sovJvwGpfkLNCPq4kG58Krp3MUuaAJcipNaAM3E7QRPUdFz1CSojVM"
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
