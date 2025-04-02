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
    "2g94hDL4qfNbdECUwaLJTPwicegBrH8FFPsbtsaeDrf1i6YxuzjBfiraTH2yyErieHFiHU369TMZG3fsuvTjxFQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ht9GQsmj75npyh1rEppzYBC4aXQRXk9RGYEXv5d1GHTmxTpQCfFAvH4CyGxrxhgZV9zmTJFMoDrgtJDHYgRPQyL",
  "key1": "5zqYJAeEMk2rqhkyx1rcbERsZanjRhEx62s4Q2kYxm8Ee9b9NnNM7iB6ZSUNgPNJq3zM9Db8PcBf3G7YCXK3ZvFh",
  "key2": "3dBDXfsYTBj1UH5PZHnZAoXL8PofB4uhKN8mExcD6Zg9HZqoKSD3EU9ZdGJGozuyGCHoVi7iXUJtU5R6a3n8oYGg",
  "key3": "TjWERi5s4LewP5xZwjwE7C918aHLS46wFLtjQqth1j56NAZRUBaCg9f3zf4VF3Yja4YZqkm6FAWBXwS8DMganoV",
  "key4": "5SM4yPAJuffTH3e1KR2GyB2D32ogpcAYkpQDLiruA2QKznFrQvc5DJ3ugva8GFqoAiKXX2YqdYhRd8znoWmhqcKB",
  "key5": "4F7P3w3BjVSgToSaRvRr2gRSFEEaWdpnRCBFCmmNDYur2BATZursWPqgFK9PcUXzK3sbCsH5nAmgSpQVVtYN6hVz",
  "key6": "KRRmcHgHug1QCZ5gY8LYGSAPT63a9AihYSQLLJGs1BtnoZKbP49Do2pYE2ppnrwbeGPJHdjhzjhsKj2Y2iEGDco",
  "key7": "44zxGWephYgRXjbcVMiqiSSjHFfzAiHQhbWcz71fJnc7htHDqrhdtUqCNf5ct77b82bvn13JWopSAPDRUN5yy9yv",
  "key8": "39piaX69KfhF6svY8phxjh9N6V4h7AKSPPBnGrY1eGJ6eze5oBxCVECqTFzuYT4pvGbfuSemTpjrLG77RmzaUd1P",
  "key9": "3Q3NcngUjJ8QgjwfmMCNQfMQVQkEm6c9LjixMLFauogJjCQqNDy5DA8oTrbz5rEUri8mBTYGf5RPqxXetNHQyXJ7",
  "key10": "3xzsv1TCsH2gExY5UtviBR2FMYHfWGrMteVgpVB7QZ2rSfawSFXiF6CbEmnRrRCksGA3nmRwD6fz5NvmHUVofZaC",
  "key11": "JSqvYaJkjmQEW4NLELCx4cpA6FQsDFsXdagvu9QLaufxahTRTzoi3We2mfRx3rmCSMmYzasqNvPdLJDDQqTaFsf",
  "key12": "3cezmg93tUeh4zabpvJWpMiCEPf74x9rHmQCdwzBUQzybH6AfDPsyvcXV9Dz9Z1kCiXWdDucKLrsnpUZ9tBT4yQi",
  "key13": "ZvR3oMWGBpQTA1KUJsnTWpnhxeFFEBBNFxdkSEnPVyX7jgZCtWsZFPWM2Hstov8sfd1kRmwdrgpQaMpoGQKaAVx",
  "key14": "2nqbAZVZiuaxDPyehEmHBe9quKionrJ1VKf1ufT7Y3TYNxKZ86rWFrxLk7XxdnPkqaiDK19T9uLGva6Yxuta5Rhk",
  "key15": "5ddWwn2WMJHxxZK4ckBts5adFeEbbHm9eCQLaVv6YkK1DLECLxwRm17kKg8bdAjgi9AedBb8Gn6wWySSaJrc1HnU",
  "key16": "44WTY8jMGCAcDcNbyF23234RPZ8jpZH27jAx4ymsarHXtJurknc76F7TESwrkV2eckSZWuHDouuKo3bM2BbZBtFe",
  "key17": "4fP1oJNLQ3LxpuK4Th15FTAcp2hh4Dx9ZiHosi1ujtqzMP6MYmwEV5sX9HTbgAHAcy9n5JRjzzVtPC1aQmEJmF8m",
  "key18": "4qEdr4pm3ibGoUG6Q2jMAbhDXL4greCJVKQ5jh1i9R1ASCQ4csQq2PE4KXm1Jcpf8FsjrP4rXvyid79Fv9Ef8jfL",
  "key19": "4PhgU3PrhpuFw9RdtRpb7MfgjyMhmewwgzq3S7n5FaPVMNSRQxRFj5jAWE1TKZ1KtVkw4P1XYQvtRH6hPGm9bRM",
  "key20": "4SQ62Ht4PbVax49U3mqYV3BUK7yB1EyWm7a6CmNGBaPhtmrHrRiHHv7G3vswqLEVyEZFHJbbK7Af1SUfAXfS6p2G",
  "key21": "JCueteVs1r1Hv3A2nSgeYrDE8Hj7gkVCyfGbMvqjoRsnkyNXEGyqb16hNM9Q8PWgc3t6EDimYqAdwNifo48Lvyu",
  "key22": "3sj6FNhXTxgLnDMAcbBbZNaa3Ffc8WhLaXGm6YZSELzYA8kqosYjGscn4Wb73F4FKG9girbhsNz1VaZAPQyqC65b",
  "key23": "4xgN6QtzJkG2f8m7D5sJmYxvBnMjb34NR7RZirhPtXE4BJpDnvNZL6ZkMw8p6qqYURo1SQQXDPQyTqmnGsc4PM7w",
  "key24": "BTJAavgF7B2qkmhk11EBATJyrc8QyEaWYJcBkKaRjMV3kfh2TKz46ojUD2Zm1ztYJ1mnZrfGLHSwrGZwx1Aec39",
  "key25": "3zZHjMjbYXCNiQ4oHG5XfmcbqbfKaBFkp9AmHZBmKbZh3Vi99yw8UG7iF3PB7EthVVPo8MKmAqNEYswx366ZbFHj",
  "key26": "66NtWGnQbEt6m3uhfEwpfTa7WuPyGDXijHm3QwpuckxqqrBKjSDvAuntNyCpLvX6RRSb9mNzo4h9Wfpx9QTyTj5",
  "key27": "4V5WR9JhAWrVXsgFZF2tYwYpPNqH5jKtRX9HjEioGVqQeHCiMCGZFmPPS8YkEwh63CmrHV5cjam2oD5vyD99AV8s",
  "key28": "3JfC8ANgKQL1GKE2srVhTeHYhZdZTvBB14f8WnBRdSagBsoTYxro7aVcpvuyZwb5Gra6N89Rshwp8DM2azqm3nTG",
  "key29": "3ktBHzN1Phunny57ybeKMbLeivCRFyWCbZgWmHiREetvH84xPXzacG44dUoa1SUMWUtPCvA6Qcu2cgUArfZPyhrf",
  "key30": "3jsQUu7dXndAjfQgWzwbX6sHQPm55vr1WLQJP6A2Rafa16NDydRTbcT2s1Dua4mC2C2gTJmZmobTroWXou3153nm",
  "key31": "3MDijUL2WsQcTX5NLxCmRLxBpPCjXhaGhxgkPuCXznewexLZeBsAk34NSbVmuQYXJfjUnCUoyAuunkkPj3tjVgiG",
  "key32": "2rxZvJqPT5Jq3dqGx5XawSZikuMM6xn5d1gfhmtVJSHxncvB3St89fxja4V8mYGMcjvNx9Wci2Y7nHi8Yth159Bf",
  "key33": "276MWmrNhKbpz3w1wPM5eiwBoMkEP43c2nDYPSXrGSd8uSXVwomQ2V6FF6NYn3qvjehSQCxSVGivDdAo3qRNtuEE",
  "key34": "3N7hG83zkq8sDvHCgyQLy4pfDXiir9jnCP9ftbv6yrXMg8jyDmFUJgwSmSNLU8B4ZCguqUyVeG3XSzFjLuTdHuK6",
  "key35": "2PJ6bbDzS5XjoRnVx1GM8v9NfBV1AphFVxeaGKLswU6VatQVjTL1yDDNWmwfr6X9vWXnkQ52RgiZkq9YJGSiBuji",
  "key36": "5ybY7qybBMS4CPnCUBHss4DbXJPvb38Ybo7LtJGj2zW2kYUfsCYsdUR8oFZDxZrKhSzAMModkd1Qpn2eH3LqiGnG",
  "key37": "27A12zX5u3EyWjycdxVeeZGYqvMKnU5fD7hnk1ePrtnfMYqWiDHUmLErUT42kuJJZPw1S9kx7RtGRxXmQK6XD5jm"
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
