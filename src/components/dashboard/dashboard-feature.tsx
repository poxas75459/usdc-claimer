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
    "Yo2RsBy3UiT82rE2J8pFCr2DUqv5rRrNqNYeazq2AbyZpJEpiGhmHY4Q7vdL47mAkGy2Dryr7W2463ddsgNMbrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDTKMCsbjzaKEqq56PNJ8dCFA7QJK17xvATXpTgbJp3sdpAvfQCBt1dz9Tfh43wcPec8E8dM8epPzkQedWTrzms",
  "key1": "jXbC8dDk9EW9ey54zYWsSurZzQWRmMCap2JqzCrZgjLCdAbD4hnzZmfYo3x4cV2grUyH57KAPGRWUACK54EmW3N",
  "key2": "1rMkJ5og8KKfXxjS6QSENiiZcKzVfbBKpDXvAxvkECoLJDiJqK78DYT8hVjojcDHcCcXjpkVZrYorZ1t1tRN7z4",
  "key3": "ydFdtVFjGBUU2Fx3tXLJCXYKUwMuLb9b76kqXpq4YZ3mfpwgXgcrY5SaJdRcPeTwmWhqXqec2AY8FutKWV3w3oC",
  "key4": "2nLY2SCyKQodowPgbw1XQodYE44punb5R1D3ojRTT6ZWfVJp5rjzGCXFQPhXYhvTAw4eJH2QX556u9xM5ARMLwgt",
  "key5": "F77qiseua8xaoPtqG6VywJoPHdcfDzZy7nJsYt4Z4437w5ndNSeBTun4EJfSgG5zWK77XaLP1Cz72pMj5DaNhKh",
  "key6": "5Bm4dp2Ysu3FcPWMaQcnzzBuCVrTBSva7Cds6vDSACM8umC7hZS6vRkF5mE8XD3JuN9dg8K5uDks5aUVmmfdwcGu",
  "key7": "5H5HNEcqr3J9HfGqPLUci4RCaSoebsrRPs7WHk2aJmkHXnaC1rV777iu9rstVDnCCdAMnLSeHqp9Syt1NY7cNZLQ",
  "key8": "32ESqMVGg3NL8kzcHVEBjh9XWFqNHZBXajP3Mb26gtixEdeATiHuHcgPAQbvxni1T6bV8kKUTqgYNJ7GAZ4xRRLL",
  "key9": "2AXw1DGGCZUXobfiaZFE9fnoxzi2cbdRRnabwX6mTYov5P894VpmyrPue59QsNw79i6Ge5E8Ps1pStsC8ZEUvxBf",
  "key10": "54vKzkfVTx1Z3ZH8kpK5NNDQyDj2mqFdqZB2WDD5EHqoJ1QvfAXH8EAXmRuKg5xDnG64iY3Qq9pAE7keBGBwicC6",
  "key11": "38UJrFFu9sFoT12pMwQnEtYHeSD9ooKmPAVoNdFZJwG7NeyenmxotJ4ryrHBi2xNxyW1FqqiQZptVbdbvC6XvxVU",
  "key12": "hL7TcMkvTFYqQM7o2oGfYuDCF3eFMsFxUteu8pi1gXaNb73iPf82S1yUwbj7GDKHMyV9FcXAE1jo78mCNzQTi4a",
  "key13": "4ptuMzV8zUSPtC2awbtvZf3pm7D8U1SqFtggwFPXcZTDagoXGfi3EHsa4A91W5xMXV8RmwkF7v16BGRq7V6YGjcS",
  "key14": "5e6NNGvhMZ3yFaLNHxTDVNZAtYvGe77NscqBP4NNTzwdnAsksRgxXcVY1dPvuCL3Jh8mQSZRCJKYojw7t5WjSbGR",
  "key15": "p23D8W27fJvqky1L3yGtWdPJ7HhiBJrekpZZ5XTdS2vDmX5r5o7WbJQ3Ww2w4hnmgGf8CN8MxsYA4ETavRts71d",
  "key16": "3t7ho4arX1RRHrtwcZMxqVbA3pvKdZLYfsFYuxphPKb9PF6H1HiBWXrG96rz6GERFfdxGyiK7UsMrVcFtC9d197k",
  "key17": "65LDVnhwuvNwp42h8X2YMCpvK6HvJm8xqLNh7C4JQhjGzzWjjEtKBgNeKsJrit8UbiYo7cGHKZnjBouPzZUAV1Lh",
  "key18": "z64DfoxA7zVtvXRcwJXcErGp1iHsa8Kt8oBdG3swg5SeiUNa9hCGnwL8ZN4V1Y9sTdtwAtucAF3cQxqhzw231RL",
  "key19": "2JKizqAC25o8ufScwtzyVw78K2c3Y878hcdRA57oVPkrMmfQYLsTZtcyikT2tenLuVZhxckjBBQzkXM3K4i5BAu5",
  "key20": "4gEw6rKAH5uTWmkXU2jYJAbA8i5ewAQDUHSHGbj7x9BvjENxxB534CEbFddw23GXLjdaPjs12VADNBFv95a3fTQ9",
  "key21": "4fLUN9knkxGh24YLNFRGuEHjdSgNG8GLBuAJah8npKHim5gGvi3bhhedUvGXDTNtpnaveLpCF6K5nY7GQ7u5huZe",
  "key22": "iqZkfK6xERxVCuzrA4BEgt4tihymidqzotEnKagnHcMcpygXUz46d6LuvukKN6Q4QisgNtF8Hx4g6rd8NKfzDGw",
  "key23": "3XBjUmiizKpb2zSke2uQbpuJDuWDkVFc69yjdD1PLZ6Qe4Caia9CQQ4CasuRie64BEKfJ39zdBGinmHzLg3stsv",
  "key24": "2MYA485d2iQoTqFCJHhe7JNrU5pFB9RG5CcSjVFWsrhhfSbRSrWtsBsasyKyXYUiLxQvL27mNmK531xJdqGNLYv7",
  "key25": "5xrrkgr9aXLBnyR4sm1Ndd9fUmcVT3dWJThkm3vyvrK3vK5SV8GhVqdnCtvojh3bFYqdhNLerepfA88h1o8tz6tU",
  "key26": "5BxwdbTSLxw1wqTAuEfZWx4sY1PmNWd4pSn6k9wEKKuHFEQd5yxfE1MqNK13yyaFwh6Jctdy8pctzUtcB8M7XgVw",
  "key27": "3V6XpX1AbfFvqFuvJEdfsUW5uM11R6CH2iXfvdqisbHosMfX8DfoEAY6K2fePSUrD2qcubfQRHJ7UmFprfpAqv3Q"
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
