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
    "5R4XWjBSixAFrKVMfwUVWkR1Q7QUjtVZ1XwiNS1YJaUmbEUE1RsUwnoT3ccXza3TuMLYqzNRf7Pun96KzfGa1RYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rv4V2yr7y68myNLRFhPSbJnTdQrZbTeGqQCE6REf4fP3HFw88sb2CY1d18gZ46UBikLHHrGqAqZPPDfrSZnxLxC",
  "key1": "3xJJm85aWyeMQicS9cCNDwD56MTm6c5qHPkSx5HJsiuDv4x7DxehuPddqeoAJquZCfSRNP7LT3dPgWa42pUmRNTV",
  "key2": "4DHU2nrQMnzmPTvQt6VbHa4mDpgyCVBjDnEKeFkf7apDVbn1SZyDSPDvjg3JaFkm8wvRAaAU6Kvi4PnP89j3rtCM",
  "key3": "4yCJrByrmSnknR2awyX2bWEBVvbm7wgsPrZXqjTAg9XyTu25Gzkxu6Akub3QuzspDmjy35Pa4RuBezS4PcwWYGeC",
  "key4": "3aiKAVQuPKBZRi8oG7oLoPbgQpSaDKtkcaAtimtipxdBVN1UeuD1jYfP4fkZ61U2rTsVucazNE4nwvLKWKJnTyXE",
  "key5": "4G66PpsZtKvCVd73FpnJFDfaxRqxEi2jLyxDqSDuYXuLe78fx4sf9eaPimCpQMREmQTeZauXwCQdQ6pWJHLXLvGY",
  "key6": "53vfVDvYKjoqQYrT9J6SwrbXdt4bCLEqDxe2MCBPnhvDPMUFNwHBjTR8Kfz6JKPqahSYrQHFh3QysEQUScshkJA7",
  "key7": "3kNAtVH1W3Bok29Jxw1rWjvP2enfnyhKjLMU3F4yFrgSCJfeSb7HRgX7xqZdsko7Pubj4D2rxirWzAgX9zm8J43c",
  "key8": "dAEWANwD2mn5LUo6Tyqz3orwme2pakGvupFhyD5xdjvodktuYJ1AsAsWmHBqbPb4uZ3ykd8oTwDirgm5FM8QV9x",
  "key9": "2dd19LEbQRTmbjLvUVbGkndpPUu8YLcordvvXFpZG9fDcMRJLP9FiYTzVyqPvjhNg3jnpESpqc73iXQhhFQ8iPiU",
  "key10": "hdPY2y6Wg7E3PxSGBHTdiFseyGRVejAzXyFDTaEuikjHfRS5QYpvRZPYe6cMf5NTZc9nZmzjBpeRui98DxaWhum",
  "key11": "53VsCbgkPqgorTNwwf9wAgGj2x2W1FmkguepEC7nG9joiY7cnqiSwLsgKn3qhsuaopuRLMqNgx5xmen73nPrr7Hm",
  "key12": "218X8iWYqut3CkvQiNnPsMX6SHugdHmvXDFpXVL5jFL5xPduCU4JT7uGD8JkHMKwJTTX4ssZfh4KVM4V24QZ8jA9",
  "key13": "3VJ5LmY9EmG3iibMVymwRcCyXej7VTAS5HS7URQJ9ZSBiA279CeWPwwY5QSpt1SiMHxzG9YKaA5A92DnuM57LmmB",
  "key14": "4yDjukRnnwA5XXyizwzftXJqc9T88nGxPx4oJ7Hu6V9Euk7DwKJoKk1TW2hWbyJMkgMYKkFKYs9DMjbi9yKYFmCw",
  "key15": "64LQPbXx7pF6rj6SR4w9rJ2bHfGRg2MxUsGeXvwvqNFxyuELLPqi21DYvrwV5J5cuPZiU68Z1xRmx2cfqtUd52qi",
  "key16": "3xZsy7Q9FryCgW6Y83JWG4Trcs62HBGJPetQkDHSE9qkcLdzTXS8BusLxicqdK1eGmVSEx8FYMbyJGVVSfirHCvw",
  "key17": "4KbEWpyLR54GnfyML5sSh4UwCJqLfbFt6qcn25EySNyYqfuJias9zoYAyH17pmf7ejwuY2HBUKYZUrsR3inpf8x",
  "key18": "3oUq74sBYdfP6T2soghUpjB7JCyGFB8t8nHVFbtxRFWuG4aMze9QAnD2rPgikEtM6JbEEKzsG5V83Uei1CLN2HNM",
  "key19": "2zSkYoLmELs95CdNFoVF6XA3584Ba9BqAbiEBeANX795aeBpnT6U2AKWAaxXzgiPH4F6M7goJcLMyHSsgUh2BNdy",
  "key20": "5uBwbwFn8D8qUhiwnKwcngvkrTpkyfA9WPpdQ9RacZzgUfU2gVCZN64F8Bz6Z1ebs7bdedoHngVW1eH5amQRcout",
  "key21": "5MDnP65cJeR5joqrcFpPWaFFAwCcbef4qzd6T3AKE5rgUjsaxXX8pgfAXqMrvfmzhdDc6JJW513ovaqPbbHmLht9",
  "key22": "3vshgb6dDPjPo6AdxXm6bP8Kmm4MDLsbFzdmkEBEaeFuULj3kagmxD25niZsHctAqi24gQuFrdYyPM7hNpunmQxP",
  "key23": "4teKJQHnc2ae8PtUk4pSY9rAJvZ4nB9CKzsYMTfTaTyYgSRNKrGbeuz1nJuWQmrVNNBrJaWTEMNGRXUKKZ2vKvKx",
  "key24": "3uzMFSccTxPRjbUWZCU5vghowM9B6TiyhxHdWgHsXLXGUMuXLDPpL11mtmJPsAyQ7m5GHyvJVrubHUUmGCmf9nn",
  "key25": "258s89ov9phc4Xt9QNBWsEZjQ5BwxxoZZWBYxHqrH4C5aMGiQqtZvEm7mb4uAWZzr77ZFwtC81Zk9wL6gu8E9S2B",
  "key26": "46FpD6YoC624uZmJPqWmGeRLUopLUnNNtDCADuRaDDWE3Aa3WyJoJmtSuKKQpbKz2o2yshuCf7zwLRQsqGuHCkwX",
  "key27": "3qK3bUkW4ukTCoe64XodMnWt6Wo6jvPipVM7NetdVtXaeoycZvozMFstEmd8c5upaYGiwwYRR2peB3KMFDQwfVkV",
  "key28": "5Vg3GTox4QrAQ7vsGQGxardCjypprYAdkEqsJsMYphxt8rNaP88J622eP2y7b8YRLc6hJq9EjU2WaksUd7P5wCsZ",
  "key29": "2AurRkTW5WfXqRpBBceRFyVvqCFT8DZ6DPnVbQoBknQoTouEegiA79ewYHQPnkQSVpdKB3BCn1bCrditV63NBygp",
  "key30": "436CK3cC86u2cZenurjPHCi6aZjrZqGTG2AMYcgvR1Axdpx1HvFoqdqXA3wvKSXYxLz3hTsyhKLDCFeA7DN8GXKZ",
  "key31": "p4rUSA17f5yhcUofLk7xvNLKninsPdcfe3ccmVm1bR7WAgS2ni2RTzfFcD74eH8noG5JewkwkNAe1UXmb45gVKz",
  "key32": "enpSQ4zLCAkdm4whZWbNWVz7TFZ9oVSgGgZMRa2YDHUnDZnKfsD3CpxcL4k6LFMrhugA9ttEZFZFZqXpfc5uMAz",
  "key33": "3hAetP7VW7Vb8n6dSUSEQHnmPUNaX1VUbVeyu7Y67AV9pdmzq9XYcx8JiuKHhpJh53qcCP9ZtKe4zrNFW88UibdA",
  "key34": "5jJFNZTgjonRkPMwQL4MxmcHJnkU6pzjejATVsZ8eDGacx3SnrYjmU99DMrDtWR6fggmdiTZQhZcDw27s6q64949",
  "key35": "5wtKHdoV3a8cHguwHnxNis3bRD1bDLY7UrgGtocBWAvAh4zXt7mKFB9LdXvvoKHCn57EgtS3FRy5e2VA4tnNu1Yf",
  "key36": "3sdkAGmkCSFL6pDyyueMzM5j2YPD8WLTD65QksY1RoiFGAs7NuC61et6nbtJdH3YKR7j4mv4DyNtDYUepqhfaBwN",
  "key37": "iZAkx5ybCickYB7JVirKJoqpiAF6JBLVWctLNbUC3X3pGcS5SHT3sse7QRs9kBGTzbrFnF62Bgkw2H8gVsG4Ang",
  "key38": "5LdsuTdceVddA6ek6ozwBLJEFVjBjFNkDMcbZVwBzaA8Qr9hgswUV6xLTG4echnnSAWHXL5Hc6oyUU1XEtgnHKzY",
  "key39": "qqAYQnUjacoH8KArXdN2GkTu4fbpe8F29qnvK9n9RURTvnrb41tZqHiRK6C2xTEMycrVe8WEmvTzdpwSa5TgN4r",
  "key40": "xMP7AE2wgEuUifBGjNSCf9qRFRyxQ6HniDchTe6RggzVdAJJ9GxqpreA3b5cVSdcoRBWmku3HdDuNtbVxb4rXtL",
  "key41": "3DcfL7idyQakwfdr3ryMnFcqP57PSnHASiXnsbszuKHeWGZ9bxcNEFqmcM9tQc6W5SxuKCemHQYFHQ2caYXiUShc",
  "key42": "eZSzJnQ78rXq3mAdSXk82Qm9hW6pWZMhFxkazKib4t6ZYuGcmqAjzsbyH8aXkJyFGmYDVrvD6VwD8eKb5d59Sx4",
  "key43": "5dKB5EoPChVr7F3zaU2Bk7P9GxNUwTogjVpLB4yrEj8hwaAuCpBy27y1Z94FYzMZyK39JQav1PhGPK12283oxhwn"
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
