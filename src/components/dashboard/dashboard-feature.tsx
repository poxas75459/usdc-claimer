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
    "Dwj8JQbnir2mfmnGLpB2Zoayhv3j9f4yxwqqWMg2L5a581pyEtMdxUQ1FPuGZ4fgkTMaFMjoLYbBm5XEkxZjSqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4fBrLvcAMxgdMYLMPv2kvWCrFwWmMyuK7Hz297nH37ccMCTmhVCRUqdA5NEpMTQ4KdnVnuLyYByY8m8tRQQugi",
  "key1": "2onmZc9fMpAvbkaGXoEzQ8QbNGaaFYbruW2FnwbHDC9b1hsQhU14VZ6fcHGYnmUyQks9pMekPFNcrwn8G4BoVvGN",
  "key2": "37VXqqYK2uVcknmy6NJkNpf6JcBi9abZGE5K4QBVMhkRFHu477idgma2gnZN2tLGKBtbMZYn9tFbkgSVuu2wDAQw",
  "key3": "66oxKfFkkMfJDwzDoLmdA5XTgk2MwPRuWViX5ebJNULvqt45h2G4EWSNhkvr9BpxWWLwupVTucoxYVsnye2hF3Yo",
  "key4": "3EirPC5njySE95ivbo6bE3VhPpJJP3i6i11UUvuvWFP2hhA7AAAQjnYLcmrNdYnwJgvvaxB3d9pYgh4YbriQYeiA",
  "key5": "2CUfsLxXhDNsqrywdPrhoCo1t2bqDxhChRKjRV92PyFjqUDaK8qtAL5pfjBULMgfB17erY9pZTc9PamWEoNYCyrX",
  "key6": "4q3DQotbpP7wE631TdBmKCe5qTfhF9pdBAzzrjqM6w1EVNvodf6XutSs8Negj79aLMvwJqYaRqzQitzJbbCHwhgn",
  "key7": "2jketysBBq34FpVg6Gu5p76yn2F9bhZPa7VciaZAbSjxCDd4GwbzhYeLJYKfZdRyEEMftFJiXZ4UL53NwzMx3sw4",
  "key8": "4QU7QCtrK5C6BjdqxZiUfRmDq6ovwi19BRfzzfnvqo4raduYaUKwky964oRBGD2KWxhAk5kaYdWA3a14GLHEa73s",
  "key9": "5iuJKkJry5ats7jTgTRp2CKAY6NveB4hvDeff3ciLTRHYNBso8xfbPkSX7DkqoGZGbkigzxUFCM2UcuWUAccH7nF",
  "key10": "35pTbDeCf9uN2zULFbUjGRDVkAhUSv4NvQxwtLuZfFyaSwGgCz2Nva7ofkW7VW7hLFNUH3uJnoLczsDARUDTXAWS",
  "key11": "4mY29HoCmaRHJq7MPoJystV8dz4MXhq2YNJNJjU6kNLoK6Aapte6okyeAiPRtJdcvrMKrbxkfWi14xzQk3UeiV8J",
  "key12": "5UXv6NzHELNepgvX1iPSuJkDyGa3Ax2JYYDBkNdurmczCaR5GbMnnsQBQhRfWBrCuKwZKyL6LMq3PfNiyYUhgN9S",
  "key13": "2vX1oFsFrAYpVEMU7tNibXBVapTVANdC5GvyxbePP8GFZAwxcpPgXXtNo9FTr1CTLhqyvYcC4Vj5og43c5pJEMW8",
  "key14": "3eqBsRpMn5jEMSCZpMxgj5SQeYy4BxDNmPWmVX3BXfvmJh12tGSHCHemFHqAWjEVKgEif6MeZ8zbjgqYV2NZ7hF",
  "key15": "jtzNy3yZrji5KjkoLcgn78HuboHo1uca2BDtBgkxTkduMAT4y1GjKWLdFZAnorJCSibqeb6mUfoW8Qo5JVaRuRx",
  "key16": "3Bb9frc6sfCtcSeft8abC5BWKUyzpXKDur1eMHNiLGLQc3Kcd99DuZdNZ6mNXuTZAza1wVWXC44GCyWxjzjwMA4Y",
  "key17": "27tWbHRfN2DMyemncVGHDv8rnwdLcFnU3KRvFuTb5LsE3XuELV7pH3vwEFcmpsMpdCduCoBAv9wecNxvNM7WyH5q",
  "key18": "2UVQsKsuood5zDPnqzAMtm92o335UWrP6R5EyEQ6tdFFEXRM3nszx2bQCREfaKhuEKrUNYT5eqLQb5LrX5p5HvZG",
  "key19": "AUMfViMaGEMQjGEAvtMTL2R6EE8egFhkhozidhQi9CL69A7aFBdo7yaHKXeupYUM8vegtS1RtUaMFa9T9ZZ4wdH",
  "key20": "2326K1PyMyfPxkhnyEC9Cg94UT19ro6w3RZDcwSiGJmyC2gvCtSmzRmTLftgPQn57TPx7qBAjPwUxNyeesVY71PE",
  "key21": "5LWqkh7vGh4dUerfFm13e4c5rfUKSqULooeEeD2vYWL42XbEQkvQhXvBsdpvQF5NnUqEbL6GzWikPBTqrooAoAsB",
  "key22": "3tG5bPCExmaoHxssnuFYHFKJuDwi73ey79TdR9PGaFStGLegd96CqPTCANAvHMwQoB7YEwWxBtKyJnzB6PCH7tgD",
  "key23": "3QahBFnPUP3Aj2182AfAUeAJdj8FvGxBbcRA9wb1L7epNLXTPLS7Y76Ryrw3fTv9HPYmy28s6HjGwFR9uDWfHSqH",
  "key24": "4r8jchNdBTrcgd7Go6SsqS51viT7ooBF8sTHoPMNb3UgWSBzBr9qFvQA5HcJxx1QU57BBxNeRYN7rEVJ13ZjdvkD",
  "key25": "4ZAGHndtZyPqzVg9gP3eFKSj111eCeLKFRdcFBVcpuEr5WVhojoPoqBmW7xu9nds3udZPgLZW28iRpdqAmULvLKE",
  "key26": "4hqq5XsMBRFVKNCS9ThuwNrhvVweXW8eeqR9qBw1kZn1qGvPbVPJSs3fiXzVH7HUiqs9bjXGoG1KFV8M1L5xbsMj",
  "key27": "3C4skd7hAS6zAYxCQm7z2Hz1hu246K5Zxu8J3RnmitWKHZ5aYywbcz1iFqq2snr6pmtsZh8sV3XRWvdGUdNDCat6",
  "key28": "4ZpUKjWiBpfdBJPce3JiQ6JStp1R2HyU16eQhyxMKzuZdUFWYtduCKAvjLu8QHQ28pQfoMRNstNnkZwNwn3RDLfz",
  "key29": "4F98MSX2Uv48fjxAQSpfvVtcBtaNRa3CceHjoknugHYj7VjVxstZsaXzVaDvCtnx3zfxAjPpwyUsHKvtv6EDKQ7a",
  "key30": "2jyfwPBTesq7FQqZ2SjHwyZbs63CmqFJ14BkV4yRD77MzEEVwzLQVHYpbaxXjKXFduZ54veTJp92eUcqSBUczGz1",
  "key31": "pVoAHSepRUognDpA68j5PQnfpf7eQuvMDc7YU34yEdxk8aUox6QSEkBSJPZERaASkL9bwULMCGRZXfsq3ZjKcgZ",
  "key32": "3owQmk2TwnYcsdEuD1J1q9SXry1Q1ZtnYGhjoCYXiBWuvDm59htvDV9au5Tff53yzF6kku4bqpqVDJkGcv6qnTvZ",
  "key33": "4whxb3DGoKHWTggQwe17P1NPG8UdkYSn3f9oHRMyRv4b6mUDFxQ3izNXr2wHrfiHfdUt4f1qufDnypgi9jet7cMb",
  "key34": "5wuzC2kVRHKKYiVSHABMYW3b1nXCzVVsvsCZxVDeLvD1wFkgWW9CSd7qvSf8WQYDa4qhy4MadpQA8aGmXPyirPAv",
  "key35": "4CAheYgbJwNpyftshr9CGcPavS8PTgyUU7CmMmw59iCqFTEJcuJmnjcyYGAiP5YUu6gWL5j9Uh1wub2YfD4fDHVZ",
  "key36": "9DZHip5H6FrVSiE2W1E71DVZSADjFToqkhBXrMn9XdDVfFYeSsbaCxvzC7LH3LG5S6pwwmVxgC3BiuxPdLsqvZ1",
  "key37": "4Zxvd3o4yc2SzRG78zSxDvmT1JZ1aq5YVoffJdLVCFCSJfUfjBpbGUMJQ7qKX2uahPmskypFaeUrCKzsXTmdLKFB",
  "key38": "2TY6oFAfvFQyCqK8NQHeaS2sCPdZMroUSLf5i9SYr8SaXiuhRZZENXy8cf6wCEyqQoCqRqwaaFV32iM1QxRPJxD",
  "key39": "RfPbNrbZMtbf34yGpqcHLiNUXfNYPmnCzFb265CKuTg8gdvuZty5QRDbFoyHdeZJxMfehVpSNV4tSsj7TVkkqQm",
  "key40": "2YuasxgDhfTMSQbTMrRomwVgVZFq4BCdkhAoU5zi3fCFiLmNSdKrkHNJX4sCDd3vR2YY4KpRBqQYG8sdsCL6cNar"
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
