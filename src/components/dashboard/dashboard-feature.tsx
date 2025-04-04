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
    "4jo6VnngXx6sz23sPiGQxjUdNrNDPZRwMRnpgNuiNeMahe4k3z4L2PyPMsc6NMcSsdmEH6UnzNpFmD295c5Ei6Pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47JEgDwtnAPqX8UcUEBzzx2i8J9gZDcwPSSVD7r2ebkyovtNZmMNQ4W2pqioTZzjMngTcZ4YHaxf2DgdxEFhJkCz",
  "key1": "beZQtaEvDDJim65TV5uNoCsvUiUNWSxfMxGuN7cfiUQJFDgi9np3HFcrpfHm17exEMwh9AHaxrHm6TRBVsGEjyb",
  "key2": "5PGS33u1x1LkCmLSXANQTGVxzM1jQLUondVc1NQzeCkSeYYJy8fChGpJ4uVhsDCbyXeHysrLQwqaHWm6bifJjdsE",
  "key3": "FQZWQKzdsmUXB5FFPsorPq19BMwvZChPCCHAc4QEb9q2oD7gTRoZ2VehYbKkNBfYssNaKUoNLCVNwrKe5wWAJXT",
  "key4": "4o7L1wruGBiA5VmX7Cmbt1GVXy7Ba2hcDUxAFwDZtaEFy4KvtBEuQc4dXfzXKnLbs3uipwp3UAvhFxhwVr5nc1nx",
  "key5": "5Ke2kS7jmpdSqtJ3rLPfyG6PzgWiSAzU8TgMzkRuDaR4SP66TDbEuVJzLxzFqxTZXa6aGBgsMk3SGvK9UzQz56eR",
  "key6": "58c5wVsw3Gkwch9udSEzyQsmvWyPxjrsvoE9KZsqjbbUAasN2R3LjN9a1cnJEjH6HtWA4q3AMRQs5sDysdUjXDxh",
  "key7": "5fw6SG1LJtuVQd8PLB4bv4WDdyb5qvt86TZHHYWtTbrPxJMfSLovQnRP7vC556v7TcqzWASb3vkwc7qW2CwvVwsZ",
  "key8": "26d6xTSo75aQv735sh7N5hkmhqz52MmrmBxzkUfjffvKFNEFN4zSHnyDvXUpGJob7mdEXcZJx28UPqCnPT4ihEo1",
  "key9": "3dEAayoEc3PQPACjDjUfG6Q9eyPcRQCkdQKswmUW2iX78UrTA1sQYNF33jgkx3VmkyT93cPG12bxzsfW1tpp2tDr",
  "key10": "5QoBG8kzLiaEyeJWvVUnarsVo1K1dHMn5dc5e1VAHXJUdrRoVY3Ab3E9SCYmuvrvx2vxbkmq28EQgaTS4F3jJvWx",
  "key11": "bzhrbiBZcXMKJjMy5nmgsMuPqXH13CMy9jMJRmoagEvdDF6VYpDpGMC34J43JijBWLbVSLsbeLjW9X2bbBdTchb",
  "key12": "2HRaQsTB9eSQkn19W4DPkD2fiC4d4P2chdYU5Du2cH6Ng1eeHQrTq93boYxcPGDLr3gZuYCNR8cHYy68JRVK1fTi",
  "key13": "3pYtxxKyYBdaUwzLQhe8aX14CPTDkpKL1oavGZp3WFVm7oGRHqh8dgnYJwrB5S8itgjNp7RHD1dWYMukRojNsHLk",
  "key14": "CJiVxAtxCAZJEoEcnHruHhJruk5PqkGaCgHoBm9zb3hjJ7dnvcZw8b8uckwpGPhs8RWvjVQQQZnEW6tSJDdHVhM",
  "key15": "5DDeMYA3E8db6ygMRKUwJ8t3kmGGnxNWkxPDpymrgrVd4Y3drGFZmbYEfPw3v5y4HryahU32Krbs3B9UXzejRDG9",
  "key16": "4mWULoHgJZDGkh3fnGh9ZD8y7hiwcjARjq39CkjC3DSVciFa6HJCJ4Xjcik1xALXA9Gn5w8ca3sL1yAJ8vtdzL4d",
  "key17": "FvTbT4kHryt4TzXjacErunWSemkKmL2u1aHvvD5YwomsSg1ZomccKzzjvXeTfUAChV1TQmmaHzxfVhbpzGAfigT",
  "key18": "5QgQAFpevWjDsufZQva3asx3P4jwemjJBkgtvZVsL4jYXNJAHvy9kysteBkpZyTPKnN7jNLh9agSx5YT1xhbZzXp",
  "key19": "2SS3HhbZEHfhxdpyrJpbxW33jLaXQ1MjbHaHeyoYpDs3bLZzCH1kTcaPQ6UYM8FHpWWskX12SPd5EQDaYoscSRzj",
  "key20": "4pQRZH6k6sFW5auYUNLYKELgwCaQpAR2jBzd1aeG2RwrvjNGQK2e9A5HMU4JXsnbqhu5gpDEHV92Hmu8bsGRk7JM",
  "key21": "2nCobb2XfKkTiJoyCpPLq6yhgK8SFqcqLbPfBNYDkG8z3FbE56heTZizb9yAScA7opZFT6fnwhVVf9Ngv88saTgs",
  "key22": "AG8J8rMju6BGzrnzCw3SM3mfixStRmoPnuRcs9qeW3qTvY5HnS2uDq4h7iQwMPtpX9Dwn9niBPrroqAxS3kCswp",
  "key23": "UmrXFfhP3HbjuigaDAUU27bwwBBeeCZYV7P9fJAaQxAEDaacNMTAKurCmpvmAShwRwsFMAAEAbCNW9LtSwW8gW9",
  "key24": "cL4jDxHemhzjn3QycXsg7Ho9p7191YU9syz8ne3KrK2yBkcUfvCroYLWHWuYEX4R2qoHs396D8dfDYHZUDRBmD8",
  "key25": "3BvThLZMfGir9q1yupAnQLfhhwUNrjW1G5CBHywik77wMtyPnxmthFgs4MfMzYLFNDNGQkttEVyHZxVEwKWSmfCw",
  "key26": "2UhTK1ZMqaP5q2tRcgPcQtd62AKCYRBbAkLpXyLxu77x2RTCMpqPMApZqfsKJbxz9S3AVCgHeSgzj6ugvKcj4Vq1",
  "key27": "5tFXProMzNMd8wAAB76S1nF4mt7syyJzqaTNjvoNJVW3jQ9hgd8gvkTpXQnUzubisp8qq6eWK9Dp5rbqoiL3oQjP",
  "key28": "gXMSXHotx1ZkZipDn9u1aVPwETrudoRXQKV8deyBPuRTMWRUL1R98NPi1zgL1zVKKHC6htDvuW1CX4sEiWwgdCn",
  "key29": "9qqdNw5H244Kt7qn1kD7jmmxzPRqCi8YtMg3ddWT6MUEM7Ekoh64s8GxdMn2r3NGweNENEKi27w3qKmacta9aty",
  "key30": "4x77ZJ2w2LL3vhBpmNfs11tv8pNHD4m9mCYhKcbhFgHbf4QgSsd5xDMXbCfVZxWj4LK7ESY32kPKeocMMguDVpKa",
  "key31": "2hdUm8T4WPU6aXgXKx1ytjko5YoDKjX6utUqm28sPNgDPuhRqfXk71xmH3wT57KS2YS4QsEdoaUHwGZ7nMFSNAfM",
  "key32": "5AzUHwcgZawmCUHu7UnaANf24VQ6eTqWGZgW7NEyciqQ2cjXpLS6yEu7gCaC2pzwrwY1UQCJWz3VUNmeg1at3VCg",
  "key33": "5FcpG87hDNjc17UFSA2WbuEtABn4A76HfGp6H2JhHCqsFsTeEiGrXPoJjbQMufKp2MeGDnNiBR3nYyyu6erGXVU",
  "key34": "3ydQ772iud8Kc72BRHjpnkwNRCLLjtuzsJWBwmaMNm9YstSqV2WiPeuWS8BJ1wn1QUdDGR4YiGusokAh5sM711VE",
  "key35": "2kvKuNHSo9QH1BybjiHkL7NzKHkLUPtYi9iptgUgENHJh48152HH11DddK2ezG5vPwmGaLyEZD9uW4nhuw2Qj8Hq",
  "key36": "56QXsECtjavkVLJzhmAW4B5ZkV5mmhoGa4iBh55f1orDu6iDMV5ZgLaLYH2ZedVXYdAKmdjVs6FTdDyQNSCynjA7",
  "key37": "2Tn1hTbePJ68zMpM1LkQdfVhPCxfvY7szgG59f9kGQRBWJGeQ5FoyEHY5C5AenmR2umsuqMyjz4N7EgiXhXu6TQK",
  "key38": "4YmUMTDpwi261GqjP5eJ9por4P7snHCckyVMTDqh5h9tz6J9QxixuRpa46Ecy1RLNvm2koAkBcCgJv2i79dW7DFa",
  "key39": "5zUv8WUV9mGHfZ1wJ3Uu1tPkAcyNQFjme97GYYnv9FhA4LgqevZrLv8nCvPQGtVzf2GjrkHxhbvQ8cSSuZE1WM1G",
  "key40": "5snkpbW8UHw5GgDGbZURCmkVfxFbDAoBrWwPpw36xswpETaRRaiqEbzz6jTnB3paxuoh3sASiG8s4sGdH8HbJrLx",
  "key41": "3LmGjWjJZCZXFNg9DtpXLcQXwFfZgzh21xfjh4mAYrs7J7dh3Zp9niwz3cdw1MVKAk9oWjJ9nW2MXewfeBxDYCYx",
  "key42": "4eRpkAi7CVsqbjL9micGBP71v2vnPwkVQehNCDmVdrffJtfGctEDPVw4ys4cuaAtnZN916uiiTAaRVeq5xHza7S",
  "key43": "EPxhpxXdTuXAvCDpLBBhAjRHt2YoBNgC1tfRENyLbRr7bmPwvhCRi9eyZhJ8J8go3CB4hYJUHLWbghjXxKiytDz",
  "key44": "5N1nckoZt1kyJLABw6UWDXJu6TWvgZUa7zBRmNB8BjgGa4pKPq5UYBmMzzMNCVGLuswyh5m5CbfpDk4FPbYZHPzr",
  "key45": "tPJWYYXQVcXmUhJjdtXskbCZ6keZVTuysFXcoVmiFmxz3HeTD4A6nkAbenpEXnxBbYsYsaJ6etL5fU6ftdSThsP"
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
