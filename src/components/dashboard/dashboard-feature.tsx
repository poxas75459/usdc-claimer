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
    "6NHnGwChzvdCyLCyBArSxiwia5ztnyfzDS5UiLJZT1tKTCz7wrhAr7QRNWjFRCWHkCqJJvZYfT6FSPiZxYj9qrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L57DpqMtLBhhici9mk8yXDxSkjBthhNT7ZSrMpafDDVy7PjUzZLVxnrg6AsjHf6ZEQrGPinHg1d59AwRBHZ3wZh",
  "key1": "7NkwHtRzgnKGscWoNbLX4F8WauVtSxLGLrd72s8xuMBiUiVzsDTeZnpdkrdTPWpBoFRcZmZesdb3UERDKcsagMG",
  "key2": "4f9iLHMGNedWxE2VBp5w1VxQQU1hk5xfCT7h2g3K8eX83KTRUeHLScsYjCyZFjrq8KgQB1cHtWs44iApBaGTPqbM",
  "key3": "3tJMMU7JRVsH1iPp2PTefMSSAngjaoY2bS7DcAhSPovacwqaCPE5tGoiXExVCHnvn7egNJAQJu6yJecBg3LipxJh",
  "key4": "2iAbNtfz3DiKvDaMqBzc9AA98Asnb9kGo8K3AFKmavVaGrVfa9itvsNs4jMHBjb7mXhVFTeJXueB6tnDXCkzxg9A",
  "key5": "pfT1D65VFWac6gdGM8xudqWFAgMw62xR9R7zFaBMep1ZJNSiQN8xS74CzJn9sukCrh3hkyu7SALGEVGikvaYge3",
  "key6": "128rS6aLXy9kLf3ADdigRcso23N5hXCZKH6XdFsGUgyQU9djitwJGwpDSK4MoywfFhi8Bop5vUw4BEgy29QZj7Bu",
  "key7": "Cg6R1ihCiwy9kC9bkubV2rsHEvsBzbWiYxowLqQxHCqEBR6ymJ4dt8yfMeD2DX6nQfogaxFZpiguJ8i2sHsPiuQ",
  "key8": "3vKd5h7VPcUzyba5JXpocAmAFkX5VcSEf1ZFcbSp82LyogCxXihtVNfdSDdcwad2Vz8Kigdmk3DxTTK9fK6bZ2HX",
  "key9": "45CmfHgh9scnojzFZy9coeWjqxyuPAhEMKm2pJFfVuk5GjTwyJ4bmiBPmR25mnAHBhMi83UmSxoPRPb9H6EHQE5y",
  "key10": "5oFHLdC4yZWHSEyKKZ3xdWrAym8UvR5YXnzm6XaYjnSTkuLagFZeSrbSd2BvQJFbyGCN4yezdyabnzxXzXtK2hB7",
  "key11": "5fMqWCi2ax7z84Eoo26E2eecm9Uxm2Jfv5B5gTWmpHP8uPdhZHmH6urHf9zmCP2QNTCjh4XLksyMMyREvGnABNkU",
  "key12": "54cGDCEtfzYZAeEva9gasHJdEm72tt9T8c18oSfxq9wj1pbtfpnVtzBHgVTHrDrwNP2dQ37swpRZWqzUSyBR75nf",
  "key13": "56rhnq1ZF9Y1p4oaovQtzp7vMMtaYwLv4AicTDucmycgsMTKR4eU3354qjkPPcHsXRsE5NgLyKfSgeMonaPn5ehZ",
  "key14": "4tji8xtutpCABjTFCNz3EZbSWFcTQqD9XhgkaLNQ3d85Bh6oxzNugphMc9b3ikfthYKfYg35CAhvv9Kem1YYEpAB",
  "key15": "53ZgHPZauFqWWtaFPDqknfiVi6gNj1eJGYXARQyq2T4bFiRYgXabWAWHYPYVamfg7cMmQAPP8yRtPAYivnqaGbZN",
  "key16": "2CEbCQ5wDyJxFuASQvLjwZdiapHpbdNqcMNXURRZjM2g1m5AtDnqPNJuHrZZbMhWS8XF7X1hX3JuXSyAMF8u9U9p",
  "key17": "3fetXbMzxbFAcX7CWUX8ayeTTz41PCS6ZeWUkqqEjsvxt7xfDHZxCwJBxT38uncGZHhugJNASV6FbDHPZRFhQHYi",
  "key18": "5j9Q87pjHEfXQXt3VYdcqqjffHxJk9fk7eEmq1Ds28fNXuM2Ar7D6AVakXX2JgzihMdarMEHpYYRtQ4xn6CRGkRU",
  "key19": "2rD7YsiaQw6LDQeX6RT8RVnfw9qkYDpuYSy8homci91JnXLC35WCdHmwqXzeEz8H9R98zHuiwX5NeUFwkL1k6jHi",
  "key20": "2JttsQCzCJySPNnxcW41eHGvQTKyE4gY4pWyz5XtpPbZEWeNw6eNajrxcp7UNAoRJvAvF66JZT3vgqUqAiC9TqVM",
  "key21": "koPhuQGC9tj9jpwGftqLbcJsssbbgy2eMTEYmeqji9QyN52W36ra96TdA8PUsW5SPEX2NwmHJwcGrdVXoVMKjXa",
  "key22": "amE9nZSEC5QxKAQ9mvy8ueoxV54Y2NUP3N2RCqCKC3dLtnTBMhAdxGZ7WF3UyKLGBkrgaqN5KgzDjbFiLYKhXdV",
  "key23": "8AEKMVdd5pkdNgPvgGaf34eJ1Chgt1DhHUWYptT5Zs74XMqfdK4tonoyk8mps6RzpRJDWhwvPkF6Cwsmg2da3yM",
  "key24": "4yemZA4C5QHiwtmgCZPJ5AiBbV52VHg5aKNsBe9gKTV2TJgWrVQtEWArJGuNSKfdxefL3LH9UWMxTYp9wjVm5zeM",
  "key25": "63824evmKxF7kVqTvJS1cCUh4Rcai3QkkCmfE3PP9QtEEjpey1yc64zEwMCaEYSW3Q8YRbLRuy5qkGd7ME9vc8nK",
  "key26": "4uauhcZ825orEYNCest85ACwxXXHp6Agx2iWhhvKLk2QALPDj4S2Z8PKpcXdtDfGHD7QoCEpi1xyqiBqS3euTCvd",
  "key27": "2WBXP1vxNngrn3LztomvFhcSN2vWTPSJRnnciCBaNCsXG6X5Z49aetTShVzyZ5SYDjMro9oYsqTrRfN9hQbkkRZ5",
  "key28": "2iR5jtjqzHxhLfhK4U3fL5gjYcZg9BM9AwTgEpjondQDWM7GzUJiMSo6T4qLukV1rAysKvugpMgUBEpcqmRRPVBr",
  "key29": "3qiEqatWQa8dxfM53gf79PJR5vrVRvENnnPXWCfndFXgDjr9wmWQKysLyHWZgpKxdZSPepD6PG6PhZE2cBScCYBU",
  "key30": "3RnQiGgrjw5VYzMVUFCM3TKaEgkTiLfbTp2CjhxCb8HCmwWkwykGm9LtAMK1UTc1Y7d3xSVuCkGEmwxDke2BJdue",
  "key31": "FpBySnJ9VJzaw5ztMrYgY94AbCbYiX4KRksu2fdWr7YK5RbsNZTDffKv3NTusWmkm3cZ4SXYUQLozDgFD5qJpj6",
  "key32": "5Y3u2WN4U2v5vgFLQALFtDeGW5VdDP3q6Y4hyLCRXmcHAySJH5G58NZ19kab1Fg9xo4Qh5Jh74jtfzdiYpTYeshi",
  "key33": "4GqdtRCFRFcpfc6mpQAxoESfpcN3vhjuKLKyL97sfBCmVzSSL7695iu91LSSpYwNu6JJudZCVb8kH4QsroKB7Qp9",
  "key34": "xsmG1a6PVMu8NpEbZLKVRL8eXLWegBekY4RbQwnXnq6KJdamzmxW9mGymAQgxPh3MaVS8JYAyStPP537devhTdo",
  "key35": "36fcPMNLCgBvdnZhpmRnAaxyE3SY9hyxLQcHXKa3cJEyrwmJyeLK3QyCYkNisSZzX3g8y1PjT1gUKTi5C4m3K8hk",
  "key36": "UdPWD4oUn95Bop82W9Lxv4Qtxo58rQUWQWw9dET74XgnfF9Ufrmx8qPrkBQKngUpGSLEr2rs8W8MR7yUJiAXYcV",
  "key37": "3JBiUJA4VSJGGeYayVbmmGjKFPxemJHzcPSrav6uV6snBXkmqfdGKABn2GcpqBFvQy1TYn2sMNsmDcwB23k1U4Fv",
  "key38": "hqv6rMzMGqg8xdpnp4wtwhGsp6Bry7ca7cSwqpBUh9B1fi9Hsvt8edNQRSsCAWcajKC3Ps84WKJer1XjiGwHAcw",
  "key39": "JQENZs3KAd1XnTqDynsKicKXsfHR2pKa5fhRfFVf7uC7iTdUzDi4mXhkao8JLpZzhEsQhJbF4BUH7dhYGtvBkPQ",
  "key40": "52571zsidM6YkoKLmwZK7ghVNtxYWPctXDXQGwGeZjCxntc4C592zhAMyoxtHLc5KkjyyUc2STLbKMkN7sUWNte9",
  "key41": "4Na1JE7wFoziLduAuzWtfXbDQRBsNrgB8SLsKkQRZf9gVuC83dAjQT8vKvyQaN1SgTGqUmb2xq1JiSV6NsydxDR",
  "key42": "51WZ5zUTBpw5dWqbwhtJXqCSu1WjnQha17x4YYJRohfCF9YMcSEBud16z5dMwfx8drMTXhAzq4kFGiGsNNiKxmHs",
  "key43": "26RasNdXH2nBesu6F9P14CBBiF5twVqKGxwrqTuhZgkUSZeP3Nc3XDNPv9oRV6RUz8KY8DCUdhMc5EeXhR7WZyNq",
  "key44": "4JAjEosXQU962bfjcWuZnqM35rfj744sEDrwGEpY2XsYa8iWHqMaR1ntuHocsz41umJSn12fFqRVo34MsBjAT2ED"
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
