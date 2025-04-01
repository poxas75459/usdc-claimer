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
    "28nZ9zPbQdiQYhbjnYmmKSD6vrmACugwGCuYcDV1Lb1hXcS8ygth2eHxQ1WnYNUZerq4QRcaZfRQWyenzJWSmAVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RySPKWVmss19PHqapjgCWDNWmfyHwTMuMnaB9GTtdfByScD6zBVueJgBjSVLYxbWFP3kZDFmzVWc6PmzofEh8EU",
  "key1": "4d7jr3PXkGQj4wweSBrdX4KNZCH5QvwiGxqFdMFC37jaEB69qbF9SGKXguFKHKp7mHsjn4TdUbzJ37EzR1MWgAuF",
  "key2": "cUwBB3xU91CkcwpTMfieJLThjCd3TFHQPrrakZ57wdybeXKhRcM2nLbuASMP91UdHrwfY2nNizV7kx4U4U3uj6r",
  "key3": "35dZMrcyNg5XEucFXLgb8Z2GLFpodMmZn1MqbcSz7Hkr61NMZzCTjW1QycekrXtBzCwZsTjDtkiBnq1XEtEMwAih",
  "key4": "5hPoGT8ferunfUeekbsYm2QkLJdSjyFg9U8Bya94MUxfeRPB7MwEiw4nKwsK6vnhGdwucnCWNDBVWzKrELcXn8Qs",
  "key5": "3nrPS91tn8EwPL2pZ7kRMnt9d2f8C7uYHyASeDM4YfVcbbndScMNwsXrHyuVCkwe7Tf5qkX39su8rx4RdUrWBF5a",
  "key6": "64L7SZGHzWWfrQaNBc9UpMbre4b8jLQCYpeUPatfffzGNhKMSVmf4f4Nho7bG8JZ8G3JwP9fP1Zk5fMurpgJqrcA",
  "key7": "3fGkMCg39e9b9eGXQZxCTALe2swYHSVX8iJyFRMHcj9rdG3VtSSLwwuhr9v3oEhoWuMKtq1K71dhUMkbM4oab8Yb",
  "key8": "2tntFnYo5DFLoFd3QYhV5x8eyQNbkDXNwnS1UzVAsywjtpjsrC2pgerF3dG1hxB4Qkj3wUgawMPpzTPnBA9T4eBw",
  "key9": "54KMW39JgvL1RF3xeD2AdA9xcTKgWG6335UBk5izVi3jwftQYYRdY2LiaLaTxWBzdt8ZSKGjRdgXu8XHXTVuScqU",
  "key10": "5tukVoesTKtF7tcpdt6Feqpu4jxLnc65qDBMudXVtLFvwygxvzJFWyA8FftgrrYrwMswnqjBLBzRqioPRUZb7GGV",
  "key11": "3GDwYxX3KfFHucg6FetuzJTjk7ZY2ipGYQp3md5Ty3XpXiSmXpQn3ssXMAc7QPifpm2qRCdWQWatTrnwy6mA2GkJ",
  "key12": "5QFGe6FwfDiyTujUjtSoigzQEpkH1N452kca9t51jpfQQ7E2MXesHC9z5hshzEgxoczscYpkgiLHpfS6eP7cbAjs",
  "key13": "2tqDijjZq8hqhEE12B67kgte3LBzCRp8Hp9ozxLKBr44fqv39iZrZF3UtKLyvFyu7TLcdxhbVQ6TvmtVRmRBAfbJ",
  "key14": "aWpCcgYSt6shk9S12sLLy6oN1SKgbCic54YZScX1Mag3YkSB24HriWsuSE6iT144g9AvbNkuWqPvx9AWW9BeqjY",
  "key15": "49wrUgwR3cbQ36uh9hTfFPCMHNKHGzm1ZTZkuPe6GJpD5HSvd1Tz8BVc9ZvaAEzinf9VivVN3uexKwMQd7XyJdty",
  "key16": "2gAe4DU6ZeDZ8WzYkW1dH6oagALtBhpEJStrMfHS4MXoGsyuyQSTRRsMU23QySXMGsXuynN6UWRCZHVzKNDqichE",
  "key17": "7QSdkryScue3vhk5PmiZiY1fHRfxnbbEqAdxVaBKQrdbfThk345mzUvXVmeLzUWtqWpJnjXddkj94NuY2xRvJU2",
  "key18": "qfn6WSwMnMYYvG8TKi1b9EEpB2WeHD7SUN5iugcnTXYa8Az9ZEcno5sopqeDNoicr5HQHMcFg4bXVg9bga8wcKr",
  "key19": "5dAyzHd9uXwuErLuadsMyHcA1V5eXpJ2pWKD44rmYJGNmrYtGwPUSVeaHRjCCZS8wMdmRQi3byWALL952Yk1vuEt",
  "key20": "4NgY2FQczmVNUXPMTSxw3UGUZvfJWrVHq27RXh2TG4jdLcoKYAkR1KatZFb2BnQSaXtakxdZjg3uNG4wwkkKN5ZN",
  "key21": "jsYnocVsisBVdyHTsVbEV2rC5EtZna74NqgxdZhPyyd6Kf2TTL7NmdVC6vP78Lye4kT8TFiiGSfQuTTvTCrjE3i",
  "key22": "DBGuNP2BjRXCcHRJ99QMbErQoVAskSf17ty3nrnqrs4Ap9UeP7sGWkYRaE3xbowfcgdbyCbv2jj8FyJLPgXKGSn",
  "key23": "2Mmu7NrsYS4KgyYEYSaVkzgTt72RqDAKByKe2PbDYYAP9cpUrdc6WXsBqD9FHDzEHursi1wDCnhfaG7fEgukZYQT",
  "key24": "i8s3NbZvCM19RSEqU8ZZQMSwCZa4usKW4zSfm9PfEkU3zaVssfUkbe2QTpqMudNjxEmhAc2wPBvDy75njodUfM1",
  "key25": "2Uoh6dfXJYySEHxPww5sVcJTrDfbh7MQTJZBKHhFuVcZF2oWUj2wVurZCh9rHw9L6nvKw1LG38EHDKm5bnUa9kDw",
  "key26": "4zEyvdRuvh7somqkUcqqCCjztta39QPNE9VonYcYct6eAYRo7Vo59qE7rE6CDxFhMuiEA1LQRymcjozEfHRG6GRt",
  "key27": "2vHEqWw4vALbEfvrPQdEsuR2MwGFw5dnjCXqU8AwKyuYQQs2e795zQ6XyMh4VVSY2RDhpFnhGvCoziVLw3KAi6di",
  "key28": "JNgzTk1CGqjrQvatgBQKeFj8wF6LyFY2mjkk1Np3srJSRVnwEkdvgSoqnkLrBy6crJ4V155yDrp34sQXQvbn99H",
  "key29": "36MtrNkwU1mrJa2on5JfgS6UDv4TrLVqQE8VPFRtbaGc6Hd1u2crtQ6Zjt5ppk8oH2GYd43CxKr8ZVCnMFzH4DQQ",
  "key30": "5Aqnhg5E6huxgcn9nBFB5GqN4vitS6gBfHWZqQLfEvv6JcoAMf4RcYfdr7U6vy1giseW9WFgFtnQQSYe5DBEjnEQ",
  "key31": "444T7i9g94v2dXJ32qEVKbKPtZs6TN9JiZG3t2qm8xk8gTRXcg9ANBGeLazPGeV5JUQYfiq5UtmpE2YkF5tBobhf",
  "key32": "5zEsgBfN9XxRHCsmuUn69fxsHEVbNpxL447ySvDoL3zKZqxqYyPff3dJjpmhBJ4Apw721BqrQC8KXa5Sg2wvzyfB",
  "key33": "32Jq7x8moQhaywfCcDch8UqiXDSNHkn8yKWEJecfTCYooxdBfBXjYPmpU3eCEpbJqk37qJEuMJCDWhYzET2giRk7",
  "key34": "XzMWRv42KGVyhkRv2tdbzbg3LDEMmX2h78eixrpXhm59UsdQrbHrbxLugMLsfDcAhpT9iTPtkTa1XrcykHPkHeY",
  "key35": "3Kf9oXNMdpUQaSdUm5YMSFYdcaCHJRkpbwp6yw15nx25q5ZgGaAYxsUYkBwUBrQSMP4a9UBPico3hdsvQgw6wwLs",
  "key36": "aLQjrBDiTjqSNXYyuk7AL4eoSpVREZNjpLo1L4jvU2S2nSZqx7Fz6gWEPdAz3AvoLYZoTABpKcZNKsW3wcqJPAg",
  "key37": "bwTJ54MCRxJ1Rr1kwNBVcjdZfdfpFo5vtiFFVpTX6oP1VDxK3NfddhRYr7ueyHsJC5LguCJyQJbWMjwsouZ1vSN",
  "key38": "65kPSTTBNsxbNUcgCWSQx7VpLa9L7xXhi8YmqwcRwGCqseFwfVg5mntQLWJGnbvhrr8JgJ18X28TuNHnPjZfoxjU",
  "key39": "2oarhYYiZFTLSVax4grgDJJQabYuJvV1p7jy6Tz4XGsjgKRUrjJBxdjWWPqk3ps55iKZK75xny9vkGFEx6WoGDLV",
  "key40": "5QNy3v6TQeThMXik8DdW7U6xsYJMT4UGkJ3ynY8VQ7Ycqa9CVe8cGPaPYGHZc5VVpbzdq9GvA5MefmRRPLgiYqUE",
  "key41": "vtqsmNtQqbCMkm6DsFy6Hs1fQHwXeLDhruv2PH3aiWzxz4izGy9x5iKrJc2qKvn59CSWZAWxFwgvPPqirYRRY6B",
  "key42": "5i9v2U94fx6eLu6JeZiK2C2jENQ4chGMc31HJ6eMQcvhegFQgPwRuHnJMdRpEETHMPqU2bZoRuqsvqr2fz6MR2Tv",
  "key43": "2LrDG3X4ZXEVCykN3TK88dSQXfiW3UEn1RcbgwukwvfDiW6axFSWtRMxx1283uxLyw1Zq7Cd4rPa2tGzUcKzVN7e",
  "key44": "21PywaMUJPjU91Ej8ZiXuBvy3p9DiJRULMuf2b4CynpPjJ23BzreXyqfUaQRaDGnYzFoxnz6RhmDSDRNNoDwavqU",
  "key45": "4R3vXCFuY35ApFfAmzWzDnpqVSq4tMPX1iqNYKKgF6uJqPZ1opgKNvyTbAz6C4BYrYZ6yDPA6PZm74RoYssVe5P",
  "key46": "2ztQCPMjU9oLiUzLPjGCLWD6NDtQR5Ni6R9zh54vWMx1j5S1FaZi4R61sxyW9hzj4e8T1wTZJFW51BYiHJtuwF6Y",
  "key47": "63vUU8Qw9tUR2jK1fyaQPxYMKtVxowY54kDmcVpqELQKtcfuXNj7tFwhvqL6mUrwKEDLWwgeUooVXvNKeZF7xo7G",
  "key48": "3SWuhnHBnAaAXu3tcCcfRz1rWgP8xhzjwBmAeRJ2PmDJiRqMPTzKSGuNT53d7Y68wXiY1gMC6WABiriqiNe3hjig"
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
