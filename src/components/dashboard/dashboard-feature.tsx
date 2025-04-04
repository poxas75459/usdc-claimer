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
    "27bZVToTbshyh3sBpbe9bfBmSPNbZc5PqwLf9ZhZrv1mBnxxZFKv5W98RUsjjKd1BJ98ikCpnrpcxscfPMma1wUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TjuuRYxhSY7F3dARLBKK9UN4H6NZL1gJ2sBp8KhRttwXnpGepmjQSrActzmSyBVKPkyUXrdDxnMAdZPt4tUJcHC",
  "key1": "3kG3c39TKfLub56hjLGobEe1HdZbmYFSBG3VdSeD7qayuPxh6VFmxQwwYEhKscox8JAwVMmiam8xnHD7crPfqVSK",
  "key2": "5FjCQZcNb151iCxvZypdRFfyt6Kn4XaqpRqGMHKACNY6KJN7m31rU3dzSqqn3pvqj2y7D4xBBFuDrWNAGsTrFU1v",
  "key3": "Vr6c3JeZDtnTf2RTqb7EoKC7NaUs2XmVUw2h8jSkx5nuFCv2VL9W4LMN9EahefjKkg8yYmgTBv94CBj1wyEb7UF",
  "key4": "5gLozdmBszH8xm7QpWpGKRYR78MVsgf2hyfBmPEt9N3HWNnU3ZgkdKMDEoirpFPvWjhbGC3avoiCgoAd9SLY74To",
  "key5": "64VYV2Jp3NM5hsTzGw6taW7G9cJE54VDxu9nqSPqzcDHZALQ99DESeJrGqRdCd4YRcLrXuA6JnzeQ9cJWTY3L3vt",
  "key6": "Xpj3ehdAWbpTd1FCsW9AMN4bWgj3sMM9cNhMY8SjaTqcfu8fgfBNS1PGmUFLmo4ziTAzT9qihTr8k6YAVsvDS1M",
  "key7": "22qB3Pg1XzUgJ87fyY9LXhn43bkC1taBLJhQdiPgcjb8k4Yo9b8LAyBeunS1bVuBqKdRvopDuXJ2xnTMthreE8hV",
  "key8": "27vGVCkEqrwjXQTEMgam7EDxzCdQrzwyPzHpat6wu6XguEmpusmFY9SsNqeKkfswmw5xjJ8EFQPDyCQ5oREhhf3w",
  "key9": "5nVU2jD6PtHqRuhPVtTnMepVYNDkosUYzb4Ayg4jkymmMSYaDaRuEy1Ht31TpZhf4Pj2QZcaXcHjLiiC2WmV5D9v",
  "key10": "3aLiwDkPnRMz1dcZ6Uv9smKLz6syk4TZFPVCi5ztGWEFYWCyFHuVRUf82h35aCjn851MPU8gsWh9CaqkBQvV2rRc",
  "key11": "1U2aWENXmFNq3f1S83b68rGmC5Rw5w8DrcGbhiU8YQ4Q6TufesaobxdTmF8Rc3HtRyNSPqTzW4xL8TFFoqgdouH",
  "key12": "35uado8XKYyKKAvQipBc2c3TzLZ16KYHTubp3Xg4s48z6gnors3SD6qLRQtkwjKVcq53VEGpAPwSmgEPyA7YU3bZ",
  "key13": "3GL9KiJqE27tUXs3AQackicRrirQVrc27ifncycx2dguqEj9wUB7tVweP8YcRFqCUHhaXq56mFC9SKNAxPmKdKVC",
  "key14": "5VeJWAC7gNtBEyZwLLUH293indNtSetGzPNBDK5M5127Vfq4NZ31DNReP9WjBJfFFsocbizLwbWkgUZ18CDMLYdH",
  "key15": "3KdjoG9Hp2ifq3LtpjomZE3sGzPfKSCBLokbDL4RogsdvVfPJkuAKWNzZGTxJjnW67sRfmvRYwspue5skSLu5R7k",
  "key16": "3cBWSAYzda6UuPbo8hEM4YAQYASyo5ouN8WKgWLC1H2YraPHRiM9141Xt2t86qM6KwwqhwnwP1s65hq6EhM4K7h",
  "key17": "4fYrbuBtRpnKwJrwovqAKVsffEducitKGZCnqbuowzFZ1YVc9gEUvuR8rw1xrgbV11Q6fFE4Ar47jz5iy1pEz4Kp",
  "key18": "55MsBscKbkUuBinFBN3eiT7tES1GpG3k9vdY4a8JvQBnU3fxJqTLt9dbYbFxRVTSzxnnrLY15Wa3tfvDVZhdu3Xm",
  "key19": "3tnSRgJQd1ebkUVJQnjB7ncpo2fNGub9o1s8v71poZF6wSd9KXNGpBWygymqqs7q3aQtdp8c5Y7KSJ8BmKijCJtE",
  "key20": "4f6y82cXfFs7nftszcXq6t4g7TUPJT32MvcLJDat7F7fBXPkcVfDwiesBNYkjXfW5pdaB37cvtHdti2QLqtNiEEW",
  "key21": "4mSnzrQcKEbPbGqLeuMSA21ju5zoBowT3ZLBHEwc6ufwxKpfzFgSXr1rodh6JbCLaxbghZgHdGrfEtxPSfxsPzr9",
  "key22": "h9GZEzAHTuUYUTgp9nNpYJB6xR7Hxjd3Gh1Vp9eEmMhaYr4huZtQdhxGcuTYbd1YjGqnXcjZpkxx2jVJdoN2iUn",
  "key23": "QbdYnNhNp77xmtiHtmpbxjuz3NYUCiVBdmrq2bRKE6zLREK6BfnuetdN1EQzHcXhwSywMMMNyjh3qwDC5S7HArj",
  "key24": "4xxo6vfYwfRHCvmuAY4Cs2uzx8TmPnUjbidu2Lx9YaizFaXAETcJorrjq7pY9To7dTodKB3HKU38WNZnBT5g3snY",
  "key25": "2JSdjd2qmW6fXWizJFtt82tVLJsnBHMjg7T5mwAdb8W1TntK1Gdx8rHH8W7fZGLV6c89BiCFRFRgHFU9zzTfdddo",
  "key26": "52ov42hs5uX2u6fw1897JfT6FqFnDxKHUcaD39LrwrXny8W217z93mqk9gDipr4Rj2XA7b5NCFdN4McbwSD1CsY5",
  "key27": "ahvbXwM73UHF9yNgRsASu2tfhbKmGwpgtLaeWwz6kx6SvQVHXMrdD1CuGmyxKLAuARHy3L9YnMKDo6bfYoottMw",
  "key28": "5qk8TncbZDtc5fVqyPEqFEXdECXsz5gHmMBdQk18hT2fDkb7fZHAQUKfnU1UFWYpiTemKwawuCyP1LypALJJsioM",
  "key29": "22V5mL769L8hqBnFZJ6Y2XWMmSsjXodmXrjtibzpcjKCNnJr2M9wLB8CMaaGoKTEog6j8ZmgByz3AfquXBQsTzNk",
  "key30": "pQHPMMYjrsw4X6MaPDyNqVkxeSAxxN8Rw1TMJGTouZVt215MRQzgEjf2gkVuG2fGccV4GjHkoSDyJgTGTDW8De6",
  "key31": "3E846q2oLp4ogQxbMzRxGzw6hRMgcs38j9pQ51jf21goX4yur2GUQZY9wtn5S7uhatnBFv35rLLcwjortVukqRX3",
  "key32": "3Ev86GKGVrNFhT86UypB3miEiyMz7T7xQY54rjR4vTgPESSh7ZfKZgkEn9eh62kTgQAWwNUaQX39wzwetWdvvKxw",
  "key33": "5u6emdzDc9LmBQRxrzzPh7M7DzzG44ajQFtoo2mNG9noS9xLAZpBSiPkZDJSaNPyp8ygcubEqNXYPhwfKWKz965L",
  "key34": "55XVMHcFx6dGAkc8P4vQnR4uQ2MaQsRRUXPkLAnzxoZSZ2LeJpE5vL4U94MTheAEVW97iJnzV4mL3QLpbJSzHKaR",
  "key35": "2JckoZru2bDYbLkvr81QaXirXYAJ4DTq1pM4z5Ve6vD6Pq8sc1HNENRrsng19SabzKEAugg7YL91NsXPcUkAr6Hb",
  "key36": "63RKaSAeAk7im1gtV7kLg1QXzXTS4Wzk9PCFn3eNtPSC5E9M8dkPaHNak4ktimWfKtYCjByBRJwzCMYzfuot6xyV"
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
