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
    "2qikTRmcdWFjMCDUS2JjdgwAJmcY5TdqbcRipVhehFDUPgZEswAYTctERRePkEXEznSQdvFhbwE9dfU4uQEgL611"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51z4KcoEVsUmiHeZb4hGGj7K5yGuVU8mfa44tbpjxSdCGY9texpzF3Xf1FP3es7kq7jVEhm7kGypXjshZry7zFnq",
  "key1": "5XpduZHdHbFttAXwVZ9Pn2rYAC6LtheEJQ5bZTMMkwZErb5yF6sgvxKwoKadPgEA5iHrDPdB7YroiSPT8iY6XeKe",
  "key2": "534ezumBadBt9gJ2rD32Ae113fcxBbzqrHZq9b4UrHJ4VkVo6VTbpmJKcDugUchRHW26sa4NBtuyvMd7yv4aY1AB",
  "key3": "3wYk9BK2rRaMsu3Td6BVu6FxUrXWYAEmdCcUZyCrD91b26MBpqSYogVpnYZwY5q9oQzvJ2q44FFqSLGjgX7wRt6u",
  "key4": "2MXdWdoSvJgZkd8yRqApxxPoeRenB8f7w8DRt83or2wXXix7MGSaAQahq5bS4snzF1E3W5HADWaYMg219QBpY7mc",
  "key5": "LSVKzaSCdSkZh1WMe4dxkPGKfgpmtyE3HH1yD1upC3WNFWwAZKKxiGjiwtCfqKvZRCqf96txEMhGotHJpxk6fYC",
  "key6": "3vSc3mAYaX9aYRBKvWV7GbR9AcPkdpfGMjHjo1K4YbdpM7Z1ENDm2WmAWNiSjX2Lj7xREvNw7pwiS68froCizSwN",
  "key7": "5gNoqkLEG9EdsMySbbSRG25HCF3Wa6EwTe4sLsf58rLpLqaoRU3DwyDyjwizkDMUWUowj4eik1ub7WvAsRi5MbJc",
  "key8": "2VxYe2WqbyxKJ1YqdowwSTzAPzsquDomdjQozEwzTqVH2Bz7SeiBpv9NhHbU3TNEf6EcXr38tAUFLp3dr6YT9GB4",
  "key9": "2h5Yz2VmC6aykbBVDjtxJkvJvWBiKJp6tvPyyQmuMysQSgMEMdftunbNpa1s65BbWTJJkbtcuwBLrpciTixERhim",
  "key10": "2R5NsKfrug49T6rrGjRQb5JFHdDxbMNEe3kudwcMiDygn4Pam8CxcxPrtcz7D8YRTP2wfK7F6FSZ7pLVvH4aG18Y",
  "key11": "2bJ5yHPEqHVfRSGmSNshpp8a9DRCF6GJbXKC6JeJiLQgSM1KdKmCmmcrZZYWHnKUkeqdhN2WY7wS1wJpsPqasPUp",
  "key12": "61CECFkuVBkARzxcxgWYqeVA3Tc8B8YRNuoy94Jm3NJwWiZxdhmNRLUUWm8gr7K3TBmH9xRTpF6nH6JMgYfcd2mt",
  "key13": "5D14G9gBV5wNfYZt5xsaxWFSABCLtpEw57B6KXzmzdc9DK5qN9FaKJBsQNiYjUjEsiTwWKVcuqSUaoaruTPwzU2F",
  "key14": "3vVezPKgLnFwcKvyzGx6xgi5VywyPhPETqxBLaJpYVFgwkGBJcYirTc2nw47j7rnBdmgvirY2UBXfcqfBaQ6DHK4",
  "key15": "5RGu7EQR9zmRQQx84Ryrm4uH4XKyuZwjz1F1gwA5WLLvFt7qA8JPUEgVxVG9JaQbZytajFEwt8q58E32hbTXK5tM",
  "key16": "Te1w55HWQU5zNPthyFwkC6ATtef9wKuCqJEgSCVnQic6yVgFFoK5GuBdmbjKMphMKEHVFBBUrGYX516r15HMZm5",
  "key17": "5FPT2bWuHzkoduULaFPR4mFym7w5MSgQV1CBG2mjY52suDhbwtmC9yA5FujwLeuR59vQewozGG6fHi2rJx9FyVU5",
  "key18": "psUewbwHipBzKKwnRbEs7tLG7SKUrSXUhg5VaxnMpvjQBeFd1vjydBntGqKJVTzUZs1umr9FNc4FwEssX1CPYmd",
  "key19": "pcdhi5ENuEPmHE9ZZgPWLAbhctcftmkmPgRuc3Ys7TuLo5Lk6Vq4CPzS56GyA5gRZ3pWdog3GxrqgqKhDh1dPZB",
  "key20": "4N6rqvqtngifXoVvSwpLmsuM1A9W88uPtDK31fktXgDd6enLsirKY1ZFjyaikNgtfXaUM1V6u6XHbDy2qxefRRjf",
  "key21": "4oKHuvq4xHTUsNMWszdiKKajNco1Nbe4gvGeewvZgCDv32RUBaTK2Fu3WybGBXpt8Y7gvfmVjEVnLmwYc8nHWbAP",
  "key22": "2fUZaC4cQ16EgkRHgYfH3pPnt3qLkZ3Wbr8DkQryB8GUaWKfjTeJPsiJLWE8F2ogaCSmzm7VqmDGcV1DU9BwBCoj",
  "key23": "5ud5w4xqe9am6mMb6BQpoMJCj8rqnQNSoeqdaiCW8kPCTVhg5FmZDbnAfNBwommry1PaTzq7HvV5XGx7e7yV6snU",
  "key24": "35NVXJDDV3PsRGiKhhhiY1VTwP5brY2QZuxpL8TTAaBrAXwTgdyrqt8pAxzRipWmpZLEDymL1uaVYLqVi8vZjz4n",
  "key25": "59X2T3625xi7jYmUzpy7EKRqzVLYPqYnxqi3N5GU9H4FdqHdHp5DcBK4Rg4mpoC79YaJkqyhKzgJt4ryU7FZYoMP",
  "key26": "677z9FsXgxRCk1Z3hue8NBbZavHzXHKjSPZBvLxZpmts6JU4bUvRShX2jZMLVFwFem7mA8hPCCiG5Znsw8iZVx7n",
  "key27": "41rnSymN3p3ZCGUDKtLtxRCUycUoKxMLPbmsud8tgotq5ysS9wsPtRLPC13TeTDwyzeRqqiZD8kh1AN5p6AaafPw",
  "key28": "2CyMybVwGmBnnAConkTkoQcJNRUaXP2kYBRLjTmnB8RXq8ePMwuQmd8vy6wGEzwDJBgMWZrGjyUz5d6Js1Jtve4E",
  "key29": "2Tk2pg5HH1BKm5q5N6hLow1SkxcPFLpKC7aBhNSbXEBRebjmJYBm7P91tJAESHnpuDJruhax4DvouGDeR7SNQdvv",
  "key30": "4wrYeo98GbzaPwmLjyPpBRmJcQwVdsB9dqStH9NRgLAfKj8nRun74RWUb5oSpPxmF9QbE3MnfcYGMJ4MXaG7E2xj",
  "key31": "5849BP9id4eQHNK3kBY4o36pv3ZneCmgqagc4uyJnv5DJ1YmNsSHVsEpbqrU83qNMV1Hd5Yb32TvtCRaGhusxCb1",
  "key32": "aSW3CJWg6fmoaKgRaNGkaMViE1xYnSSRHinHwpbDXHWYaaqarM48kqQQURauTsZXAerJJ1RyZXwBgFppr3vPjhx"
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
