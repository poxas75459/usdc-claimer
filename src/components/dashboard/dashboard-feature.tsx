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
    "4LPQGiuXVVfEsRFLx61LnXUxNZ5KvH13s721aD8xjy5syu36UWjSEaV3nsD6swf76Ro3GTebqxo4PSPejJini9Xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQXnTej9GvwxUnRDVjBXwbAt1LxX1n2hLMALztwUpKNbCNCUUfBJNqmtqncJqFgABcEgYsm3kQuBJE4K6FoAzhK",
  "key1": "5VKHJjbPbEMeiJxXq2gcWo67jpdVyUitaHz72sb2CVUYe4Epei79PVJQ1MfCy526evbNZ8yDb4cB6gcmTwskEc2w",
  "key2": "45E864ygyjXvs1VvhKV2SSgGxidr7hGQcheQd6C5UqS4xzDwGCMg88D9LyKL9A4LwwW7tL2zTA7tkvDHXT5PxZ5o",
  "key3": "ZrcVhn2UrR4u3ymg6pt2b2KmURKpEUkzemTKq9YA2QZ6rDrC9GC1LaUPeVN38Xz77xFMkjN9CktkB2mtQB5RpT4",
  "key4": "vJGhnBSGCUy2H8gdBn9jhqK6eDZgKiL2X3mvhnQa3oxcVu7et272cDpog99RWLNErKKup4guQSGpZ3moBhh3occ",
  "key5": "3ufb2P9NNqwfDBQrbv84k5oeMPxwNsoLD4GjdDm5gosSLE6xRMAJUSanTDQECB1DCMkYXFup5tULBfevywFopQEx",
  "key6": "5vMh5eMEhv48NV5rfR8Ra8h9KsoiPBjHfoNh3f4rPy4KDzMi2AfQxqa3phXJSLBma1sri9vbMV14nobv19fj4exq",
  "key7": "T1vRejZaKURTyr5uRgM3g4q75bQZwn2oQa2R9GXMU4uhcxTLjyzhWNApk6jnP2LVmLu7Vrmvi8xEgxGF3VpVicv",
  "key8": "37SQCwUBGUsspH77HLnuisFB81NqxXTqMx3eoAn5YKUTvNhcVEmwFXmaqESkLW72jnczJbAHzCL1VF47JVk4kwev",
  "key9": "59Ahe4cCyb3DGfyEqWSwS9465LTZPfjdKcRGazQ5egp9iWnxs2CzYNkMDSfc699tDstWTa1Uakwt4BybmZ3ZHEoR",
  "key10": "5xNtTQTLmwjBFp35tJ8yiqw2SoHTSqwD2SpfdyzKseF716YfECDBZsqUyp5UNrD3r3nDYragag2vb7GywMtEYGtH",
  "key11": "3dvzJrELriU5Cd8zEKHyYSHRdrrf8dR1A99nGeELVk3karDHSivtCPVzNcy5bc739VYcBdH9V3YwWKQJNtW58F1C",
  "key12": "5yFYuzqE4393NpMWncrcDypWSq4S9rDtNZDsUy22WPes7wMjFbETDpA8KNkR8BtAtEJf1JTZEUCfVtQEY4Jwxp86",
  "key13": "2C5L18hYfEWZvmikxmcKaGTCocUAAYH2AkVALTADua5RuKZWbZ2fXhrpe7oHDhnKht7zYbBj98rHneAgToM3wMJ3",
  "key14": "5nXSCsuLyrRoZ46YyycEr9qGgA7jSfmpQDBJ2JDxTeDdx6e8U16UT4AEjLQyHkqY8TGmQx6RDcgTnZv7LsXqJdWp",
  "key15": "XJtggA97PHRQKUQaABBnpTv6M9UcHZgDBhPHmzghHni733G2LaJWW4vKhK6SaoojoC3NDCdruEfQmDjkpQuZb4m",
  "key16": "5MbXMcpWpWANadbCRdfGGp7ajzPWqSe6GMzvGJxAsvHh8rqFXwQLsnjps9BezyzvKMQbn895MXCGxPXBw3VkFyYA",
  "key17": "5g6pcfKUMxdc6brNhxAwhRLQfmBzratrXPdgv3HcjVrBPzAANdiYj3BB5M3sHguaATsJY5E5wtj3PeEPN9TETNy",
  "key18": "3r8fhvBnAxiRAWgGkbYjEp1ATjk57UxPrz2RBNMNSyRZ1BMmLNjyzqgUJSjtFN3D3az17sLDoJ2WNoGDNEbp6BVW",
  "key19": "52Pu4xmajDFXEgWoBDVUE2bV6c9k19e7iYawAMx89Q7R1h6mRP29kcVqkiSVmQhQQAFTvHo65j4WBEKe5Z4WD7Gz",
  "key20": "26pLJ2S5mTYrrU4VCT5JUDLQW4nPQUk3ixdnM8duaAjAK4g8TxRRJ4EakQb69G97HfZEVWg7kJAQ8im4DfUJVJVX",
  "key21": "5wE5eYhy6EgnNyMBFgFLopaFbfGYzNpsLJB7RsJUvGK1U8C5GM2sfk6p1fMzKDVffRSz5cqDXUKc4iCxqK9dnjsg",
  "key22": "e4svnkT16CXsJwLvSjMaFvicMk6cz7FkJKuEgJYCYF9mgKhPcXXVqMZp4qEPw15gu1JP11qjYskryjJbwYxVzbP",
  "key23": "2ZB5kuiaymQXpvemCvXtxiouE2dizNSSypyswedJ18zrJQwTSrgMjsKD4S3m97v7dGYwWT1gtKTLKHVCQUTLLjcL",
  "key24": "5kTmuovusY8Ma82pLRuopSN2PSgoRh5B4GtbW2C5VLhcbzZ9Pi67tuHwi9EdVr7JziTUkmGy44eh4AT7i2V2SXBW",
  "key25": "2Be7X48BFgm1uF1YQ4GncKocJWgyzoTSgn6wzG49wgSSWaqugnPVqJx8szAwfih2TsTaYwMJR9j62Q8vcX3YGz8s",
  "key26": "5WbiqDAXEWcBgEv8GJfSccFYLmWNVpp9XwmhKdKbAdUhstRxampURLQzpfzadZNG4DBqsgpYiATm7v5T95BJTA2K",
  "key27": "KPvccPQ3xKLPkUC3ZV9PmixUeZfiGJUQbykUnf4eUf5H5iChx7Bth3mLQQFk3LTchT31KgpYhR41sAQqn3DFYfn",
  "key28": "NJoaMc1oEwtbghVnogPgiNZv3Uxmv1UekoF1ENs6DDLxJe4hksbYA6mexGEGBdxMMu1mm3WRKCwDhyhcGA7BoWx",
  "key29": "3gRN96PSEifmpDmzKojxFKYps3rePZuzSjn3VpPHKZPpYyYdda6SeCYYTxpE6KeuYqccVZ1aYKN13Vm6Sr929rS3",
  "key30": "3tw7LGgXyUmmCM3N2ctL3QK19LMsPCBnGeTjYFaxpiU8Sv5K6BNBrjVW9BzkXacGmB17dAdvQ3MDhcT5mmAeL9tV",
  "key31": "21FfF1WfTU3Va1jD1TS6zpz1MfnqYrafbnVeDQhexLd3tTAdb95X9hZ4cbdkrjfHibX9ShLAqdknrgFLhBeDQ5hA",
  "key32": "mVA8oVcFWjZHRu2NmfRRy2EnMWezx9zAKcbFZv3YVSgABG11JFbd8T4uLddKvZL93tGk9CvrRiR7Rpz13iNyJ9T",
  "key33": "SjkWJhKQzK1hA7RZqzSaNSnVg1WBdw56khLdeUHkZfGxQk4cxnAVWQEpHeSrwLuSpXhaHVMG5hXeuUeyvwMFZh6",
  "key34": "2Z6X9McT9c6GeL9jS8BVniQPfUzacqP6H76nhKcXaPh68Ar9niVpokmwgg6njCQaJY4tUComxrXpXaLD3gT5wJQM",
  "key35": "45k8FGM1zQRJLyyTXXiCRqFCfYmZ6JpjiEr9F2HmRKmgLSVxaKtDNWatQZCfr1nyue3sFMq6atrRAUTNpKrqYwbF",
  "key36": "3fVYmFTmx5thcedA9yaoBVjCj9iT88YecVuFvATgfWzqQ3VT3HjYT6yrNJSWBackjWxxxthJGLnSjJa2SpY8uGpM",
  "key37": "3q1vJQDAKzo3LR5dDgbHrnKvQszqUB3PnF7AXc5FTN88mAUkLBRVkmceyzDvVKmZxnpX7VDbW7iEK5AVKxR4KQvy",
  "key38": "2mMMzDBTwhH5MYWJS2zn8XA6BVf3C85YDuYLJtsVidm1gG7qz6rxoB3T47H3P7WzEQFgjP8a26qjDcxw1HdL2tJU"
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
