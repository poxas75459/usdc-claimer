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
    "yXLXaktVcTHPYsMyVrhuBgavYReyprMHWQZnJZnxqe9dT7C5mK56DNiyontue1heczLysyLHJW8NCHEEzEKWKku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "judbone8iiDtc9rdUiokS1MYdhcmcqqBwuuAqx4WZbsReEuGDCHsVdo1mimBvYryNJkZ9rE2JUeCf3VLUfirB3z",
  "key1": "2pR8SC8hAbWyNYSU7B8GiZuPEB8XfnaCd56AV5YJ5SuFe3Du4RAi13GmX37xbk9MyRkLLk3f3YMMaEp7oh5kg4Fk",
  "key2": "62M54LR673QNSi9L95yUUSLmRRzJSDFuDQWrk7QtJDiGZcLmw4RF2occ6e1BfdHAhMwc9xKFyiQED44yDhNqwEcz",
  "key3": "q3K8nFhaQLPij4w2NKkYat2A8LQ4HAmq3iTpAYhQGkC4MGc3U8a4sK3zUPKJo2KmNT6rmPQQaWwkPhrUZhHAz1j",
  "key4": "3MiZcFJhc3UAQWZu4ohwu8XLX9xv94gaToXMkhXeWDjaPGWUth5vNX7MFpEg4fh9zdRZnw6PjmogYGayrCW5TBwN",
  "key5": "5pnRDmBBMvNb5QN9hQti3SF5K4KAbKT5Lnnk315CaJEM5nyfXZx1maYHGLQ1PRPUnKZ3Y8dgDRQoswVCjQ5MgMog",
  "key6": "4bK47PyzPQnqyqDzUoaDaMz1D1SFJoAyFHT8ypd2Tiw7412fLwFmM9huDBaQDtmbqLENUF6EAmUetUYuLcER7WJy",
  "key7": "YrQVKrJLPjieaHokFKJzDa8Xk8XfdqkDEuMK4bssyb1Yj1iZ6JSQjWkXk4eQkED8udxRDPmjg1j95gD1zKdXaAi",
  "key8": "2NQfRmT6GiSwesaX8QYuycRuRHqz55wYmU9qWCwjbeLmW12kigm4vBAgE6EpNLvjEXhPeuu1nJ9GPALbxDACZJxR",
  "key9": "39AH1CT29dAo5hSGDtULaZnKy4PuvM6mJ8Q2mGPcRZ814neRi4PDUK1MqrkDDmxZRnmsTaoQTNCR4jKdTLuPv6dG",
  "key10": "4F3godc85c6KvKsfomMnKYAgrV7ipmU1g6gKs28jbuQu3DKs3qrqwKawGQrwWTN17c17FuxYw6zYMpGA1QFEwucD",
  "key11": "4QnEoVZySvrRp7Yohht22X8x4KcRNN3MahjVcXPEMy29n9EP6Q6cwQ4m4T6hdAyUSQidBLSVgK82G2okkS7SYX1A",
  "key12": "57rjmpzuQDM6oYvDymfdD6rG3nmGdpczXkgaxPeFG7gxGJmfJbvJ7GDhQ44gBYYVpJEZgcchts51pgCMumt8MJ1W",
  "key13": "2vKTGEaBwjphLPveQhgPHh28DpsJf1ANX21ZgUn3fhhyt7nnAjGSwHZ7n44g1AGkCsULpEuwu9L1GnQoCdpUZ3LC",
  "key14": "5yPWWhhRAXP374yeAApnt5V71B9pUpZTN4Nrbq1prGPzxTdhnVGrTpocHXCxxPBRBF9Qw7VqyVN9jGc4Ge311RaW",
  "key15": "33A3c6CRn5R5cimtChvXwtbuH3aC2aHg3mZwAiDGqPBxS3FC3GmSYdZ9RDn7YLcwBhsC1fkUkqYJsQA8cCduj22A",
  "key16": "2tkDoCTeNjr5YMUGH4aZNQJa62R8JNzCPjKThucW8CpT2RSTsU8pfu8StP97wG5DVtV2bxMmx3x9nque7SXoZta7",
  "key17": "2fKThjZEkbtgy6dnZ7fxubHzMDQsTcpLeg5jrH7xNofP9LYSc5wcGWGDd91GTWZExUN5JBGnuSmiVSBiLg9JcbNJ",
  "key18": "h7NYkZjggzpi6HhAFj6sHDKYSFWVopGPSMk8xQR7jTRWXCxdmy2a7EJ2ssPDYdwQ5kvmTART67dEapG5Se7M75Q",
  "key19": "4NZJyvtJqqoZ9CeYNx86r3rf8ifRvUdxTStDfPxqQz8yEUgFL6PevBEsMP7ikST3T6Dh4nSeJohpYQm7EnnMpxRA",
  "key20": "5hsvnrqVYFKN3FMq1yaAAQ6rcZVZ2CiJovv7PWxbiwFucqsg7taF3fUFvBM8Fmgc6PDiedQmCrA446CY5wVm3GG1",
  "key21": "5nudG3EGfUU7J49y7X7jzkmtjgpAMjfZoKgPNPvCKYHq9Z1PewEWcbuSkZSnphpHCdQpHbU2Ncbp6qMKCpWEU2wU",
  "key22": "ukeJXrZYvTxffjZ5ceMARgvJQVVuWskfSnSiNHzooU4793pnSueJA9MJx73bNpvCHyRofBFj9kdxoJJ9caHKr1d",
  "key23": "2h6T7V3dZEmkhQG97WNR8XJsFVUrxEntR8djsnKDCGxV2BNb1kYvEM3tGrbbmbt9yWPyW2ngwAaLtRsuGdV6UJ3n",
  "key24": "3BvH6g2iBNSLnjZXvhq3cgoDTHZXuxyRdowmJBpBpH1ZfoyHYV5W6S9L3oasSz5YRQzSc66sMG5cs4mozg22am39",
  "key25": "EsDgvNTcHELimG3fPkErgxofYXvBiFHRfBkYm7nDCyAa4GdSEeYJryioRauXR2wYiipehGPSxbjouc9gYisDxUv",
  "key26": "5srsDnUWotPbojxdc7jjb4EuxunsBbNDHK98ALyjgezs2VznboxFxbm4nNq2oD4DRzi9RxdEAbWXiMpac28kV9jc",
  "key27": "3WsA9s3Pf5DCnrVjq8hib3MCewRh3TbgQpdjzA7Sk73sphxwzhrw8TtYx4f3dj34KwXj8ZamM2QWVnMeBrGd1Nb4",
  "key28": "3biSzbVUmTJMkECoEFrhzTu9khAMYVpLmBRRVr7foEzU3Doaxbb2behkGpRZ4Efrg7PAH4ScaGV7rqTpPWK21Snd",
  "key29": "VMn7xZMhE421Go1pcx2nGSa2g7aTjRUYn6BPC27BM9rZG8A5eibjPGJH1CysMQUfTf115DduC6zWDFqoU7thURv",
  "key30": "2Uoj7F4WBgLisZ5oubRAGE9SmmUzH5uTDZsKzitcPrYFjtimub6jYJK2Dn1CLJYYpqoLGYfCpXscrxqAJaMykh6T",
  "key31": "4XzsmxCKEbdw8ejjFYLiNyZ6zrbR4wu3MiNYiGu6gWNiC779T8vfUfjhfUzBD6EEbKnJf1wzarNaXiiHw2oyvRau",
  "key32": "2VrRVudhmyCVSk5mUHeJjMMAr865Rrhb76KRYNG2i7NANTjhTbz6WBxz55jrBFo3rv92ZybCoYamTjcLbVyFAoi1"
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
