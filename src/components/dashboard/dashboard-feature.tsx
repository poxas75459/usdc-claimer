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
    "4Ez7B7unLXqxroLT4TWumaQL9CosZVGt725awEFfquacqpsLRKorxj68n36ru3uVCAjTs7488Jdh3cZ4Phkxyarp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uh4vQuNeQKP3152BgjmNVnZKnChNBx3intLFghDmQ2D3sDEHhPmMqWrsJ6FxQz1kQPs9xuGc4t6a7nfwqBFNNJf",
  "key1": "5HSPSUrMo46GLZUNMebdJYzhYQGuiFUSni7H4otJKVjNXDXgUibiPtG1HDEXnfLa5kLggVmGUCn9ropiGfJkFGjg",
  "key2": "4uCuQHTBN5zo2MSSKP24gqkZWtufy4vbon77SEBVG3YwcZkBTKMkXmahSEq57KUQDfuJywP1Bf9efjypRZX5N3py",
  "key3": "3f6Bm1qoM4UjkVvoFnmdk9Na4aiCKWbNTSqUAErTDDxGHN2FVfT6NGozkr5wCLdU9W8H24Je1uwfAHgw4oDtpUw8",
  "key4": "3GfEx49yTV1USE6pcz7redwk8uNooW7ZaHYpeEdK3jKQuSDSiJcWyr4ToFM6i9W69sfezyid8tztUdpfx3ZAZgMY",
  "key5": "5pe4h8FWWZKu26pjHGbYvEVHC5TReGhhuG42dJX2bck2LfZSPvYmE5jdDNvxJ4Kuiiot3Yx6qtYbepfJKaXQfGJG",
  "key6": "5f7TJfGRaM9UQ8uxXWve93PYFtUdsjcXyJL4jacfiMDQfarLMGJxivyTvQig9rBzcc3Nu1Kq9JRWWfLdZgg2sTSW",
  "key7": "3CDXfWVUurpUNiKG8qQLSRdtL1gwj2JQxFMDCecfHUfHAFevbFt94y5BudU6XuqfVAVioahKWgfkw9VCGgESiSob",
  "key8": "dmf8pu4aEmGCqiFFQkEGr1f2cME9kTZSSiVeDKnR5scqpBDZbZCKwrzyX5z2EYS7uJMjzE7jsT2w5QbjeTicu9d",
  "key9": "5STg132S6SSudmbiGYy24C5TnrTtyVhh3zDH69BZBzGpNAtBVLsTTACX8HsR5tjbEuu3DbhMn5g9oiVR8JdZ8oF4",
  "key10": "4jyhmZfkYB8f9BWUTECtV5DCvdCiJyoV4pLXggDTkAWjHwn4waz9gAECpHYGmjiRR9WriuTKJ8g9Kzv6KtyEX3M1",
  "key11": "4VNwEmDqJn1mpPeD6PsFqh8iy3tESMZapFMMiSqsc6wfw2jN668eBtNoLJcABts88jx5N5fBKWFaeLkqieXvFvdS",
  "key12": "NNPRazJ86BmBirB59VhDpT5msebYzeU3GS4Sduia4hxDACY1W39RXzAeTHUyWBhDimRnBfMfhUukwekokchuPoT",
  "key13": "5LGELjjfECkd1LFb8zHLxfSPS5w6ZkfPLMgkQf8Y2d6jJWMZjAKfAUHdBGWERGDukyFy2N72x5ZrT8PU7piF8sKZ",
  "key14": "e5QSwUCsfzuTz9hjpnUhMhf238uHU5NAfkFV7W42nDcJKefL5TnK9QmeQgjwvjKHngKSmpak2rNaMVQL2hH5cLr",
  "key15": "4Djvgw59Jzh9q3emAnanu5muCmTdYf1imXJscmq1VpNPmVpimF4zYNrqckchY5VUJXu8JXvRoiHE5nnQxhuHrDvP",
  "key16": "B4KM96nRi3VowNP9hFhqJSQnvCD45fPjCHrz6RCjBjPdwcVQfurFBy13dLKq5PZhpKVhk9sfz6BTNWhKcrTypJe",
  "key17": "fjJu9B2HJM9bXi1GVsvGyU92HNMMjwfWmAX7bSvi2eVw2AZNLe975aYF72PcNGoYof5fVfokux2rKckxRgQLLDr",
  "key18": "2oSqh2aT2nqBQpWFg3P5NT9XD86xJqZJ5vVXcaambEMjeuaYvxRaNFaEW7Q6sfCBMTWgajmkx3WXFVotto7cVBH4",
  "key19": "5YfcwS85dhtXUGyvatmKadZsoU5rQoPRNqecE8QZ59pep8o3xNiiASriU2Lw9vNGP6tRyceP9PjoVcFqvHTPUzgP",
  "key20": "3ydu1q5uBzSor2FwW4fShqS1Ao5HAQCsiKPdCxC6GFowHCohGF7bjGFyG2XZ7gRszjPriNgWu3ogamQ6qYcM6Rny",
  "key21": "2Eq68fsEmKJmFjbc4m5BxMQ9Hyiv8zNsEGzYCeUkZq5gUHcXrpbTZjCayYn3wSPdFHcWdcPdKSe8gtdmiY8d8ALi",
  "key22": "5hChxjT9hPngHogHprkHmb9XukKQHRfXaBmpHRJ6xbPCzDjisnTggtutnEU3r6MwJpZbKTjYt61FLLxesGA3DLwb",
  "key23": "sjHomBNXdCmtcFr7WwRaZYJZe8fgtdFvpmwYsHYGqpudR9cfbCVdaQNEGFYGuKDw5CZWfH1kv9G2SDeWryUvP5i",
  "key24": "6ctdjoG6RHejs6ePAx9bBnoMivqQ3ruMhjTAyMZi9828cFPVKJYwu9yKnzk3ojLcHhhSwy3aaL6QWWtL2UHyv7v",
  "key25": "53ikFF1TU6fKGgLtHHAWjMCSnP2ckeMi5Sc5PMcY6MFaFaoQWjU6b5yjBwwcBfNhtei6oFZjDYXoC9F9pB8gWPc1",
  "key26": "23xuJ6Tk15Rr7Xrt9pAoyBHTUK3H5WZc2YfKEWc9PpA8Lc4Ddkic5Rn9t2LiZ3d51YnGRqKojfPzV8UdA43Bx5y2",
  "key27": "5rcQBuWQGhUAiiYUoGw9tRqrWycrKSjyzstYnSDDFDiicPcfmGDa8Km59z27vbmiJmXF5wgzQmDrtTF3GNtDmv2J",
  "key28": "3Nwiw4BFPdoeWsSxeTG91mqPyhpHLs6EBn76pyiwAXwMqGgcCqUhk4dAiGeugZ1ZsfLfUKanh75z5MxxNmuasKLL",
  "key29": "4547cKM61d5SuvyamEHFUugR9mcPaAFjmMBCazHnZ83CTb55J43ympYdLpogQnsZBQzo57tRx5Zu4ktzRCEFqrXG",
  "key30": "gk4pTfieZJMYBiM2FZdf1scmiJy2Jjte1e7xLoxExTyjeWtnRWyBPD46881YaQZGog8EDHFPMHvNDdvrHfjKXGw",
  "key31": "4TGzAM2rkLRL5WNzGHPLHiA6Ec5fMjjPbh9M2jRfrGf1NFirQ7R2BuEHhyCCYgk7R8ei448zhRnxmFatj6ZYkNQm",
  "key32": "61Uf5vDiWDXirivCvXdxDvHjJxhJXZBHzGwrRP1QcJxHc2YgdmwLUKduQZKyEk26RavbVnyDzsGrW4hjEQ4LGGKe",
  "key33": "3t8WmGo5gAovbs64c89P9cLuNSdQmjNcWvBiweZoq1r6g2zSHQMgFPWphJXTXerJWaKSuTErTzUujB8hap4UHR9w",
  "key34": "nv6n9ksQ7Wqg6uF88LxegxELmoszmPrb4yfaimroGKgj3NsxmK9DYx8KqvgS6duMZVvpSC371HMtZCR8sEAC9zU",
  "key35": "52ngUmkny7GEj8fkdwATAKx4xJBrApUv3HDjvCAEUfDmHdYBXFzt9iLkBZEPhNob49iGJQTY39Ko9Jjou1CCvcxH",
  "key36": "3KcAFdNHfuZjuxmvUKabzKgYvXjJ61nhqNVSS6oWpmPJSajPG4KRoUERTAm4zu9m1h8MexGzrRSbs7SnKGrM1bJ1",
  "key37": "444AndtUg2sRoR3Z9BbxgS7GGyG2fJwkZcbB4Z9PqYnqvQEXu8PyFbhZMouKEmuATvDkaQG3Lbu2XRCejNCYtk6d",
  "key38": "5wLJTA7WmCGALgtsWQGcPHXjEXJCxFzoyoaiKkLLepfSpQbGXzbgceGJXZyR22EAouqewLMsAoS4WpSfbJNLEPbj",
  "key39": "29Ntq5WPggjn92xDX3DLaqAFKp7pA19A6rJ3QsbPnYkXiqNd29YaXgU4M9LzLBVGgw7TWWKavn1zyYycu18NaWxY",
  "key40": "3jRBzUQSDTSsoSkYJFeWic5TahMksKJzmzznTbjP1q2fvMxPLaVvgUPBMB4z9tJC7WJbNoypWuo4LQD612S18cAD",
  "key41": "2YVFqiM114fWmkyF8A5pBuvYhFKxN53LEVqHdY2PKoZr4R1f4YRqPwFaoTRaUyp7DWvjxj6QHA1ANE52Kzup4sdt",
  "key42": "3YhQVQmACdmvyE6bF2DJPJmQCSSPaeFPTW8SrW1cH7nDcdJ4GG71DgYXstHaSf4tGX71t8siSjgvJSQmTxyz7eKh",
  "key43": "3PMvAmYTfNVLRStPwBF8SWKz7zr5aZceroTw3hbDTe6Y4G6nsfByPcUvNsTxmHgwGqz7MYeTUgYRKRvt3GoTes3v"
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
