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
    "2emCfLh4M8tarwW2YAv1tjCTaoFPFgVwgW6s7tADq1J3g7bT6rDzPrimrEXsdBdcGsGeDgRmRFPEkiN9pyKG4E9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5Y57o4R33vbK3fYhw9sKRRjUsvrxXBRNgaYYNRrmwaznTRZEzSLeDqqALfGmToQtXgaTmVtdFG5feNnDq3LAGk",
  "key1": "4NN56KDVTm1YJ5EQCcsYwBuPxLzLVF2ikmczj3wY6y9Eo6QLss5PRi5gMB9bBsqvL6hTYS4eVfdWiEapKKt6r3Xr",
  "key2": "mxdDeytC25Y4mHZdQ34Ht9Q6b5YZ2rMnVVRerE9CFFTmBW8YSoqC18kGTP3FbSEMF1hAGwyZPR5DPaCn5bDJGw7",
  "key3": "586C1YWQP94fse4wTtzYwhPSFj1Jt4z7RmRPr8AvumG13L1cK9q6s2ELSpvw5HsG4HXZNtVmrj2zCGtrr3m3oZP7",
  "key4": "4M3ALBfmMGRSGkqryUdSg3eZ91aujf2K44PQKLzHNmiZ4Q84uazAqeTDfSboPRKx4dvvHtmPujaja7KLPsf2Cj2Z",
  "key5": "5XCRGUxfth3K4Kxya7yET83BXDnVAy8c7RyXfdv2oessroJGbvtjKhW33C7awjAv7vZh7yyWuFUiUhoCYszDJCam",
  "key6": "uWiS4Vue1fPgNekEiTYnjHrroGsj3NbVpvFiyXoAyhcsuYirP7ekLnGDHR3n4tWVybVmDuTWAjL1zFb39deJGzA",
  "key7": "62qhA9LQEhJbKZtxZ3xW2XMjna7HSL4kr5iej6rt5SaJRY1513ZHWtvqM1vkbgYM63rGccipLoviJFHR6W8qdVpW",
  "key8": "3xzaLqLfziL9Rs7pwYU6BzKxWPDaxnSuPAP94wprvGp9NQdkJch2x2fbCr2mHFYeZvryHoUpsEoDH9gdT7PztAyr",
  "key9": "3j52jcaBfTH2q5o2MK5aN3bbXsje3CkmUMcM8a57mATnRXY4VTV1zWwjNYLhejwrCqoGhTJmZHaAxPUy66qrRo8E",
  "key10": "dR51wY81femkJn6RWCumbDdaqH9CYWA7nEcp7AWf87D724fQBBnudPJjJkPNzhmpQiaUY1gysu3gLXtz9yV8Z8F",
  "key11": "4VWC6qnXqEyLu2E13jvGxw8y79kqvgsua1onq78BGB7itqEpZScS2Vfd6Aadtvv1Gs656VJFRTevLC4jJ2qp3ojQ",
  "key12": "46qrD91AwC8TK3Zhr2LDdnhcombZWN54vaXMXRCc14db9DoE3K3n8dmJWSN96qdtdSqB6ZK2EmGbChZG58PGF2qa",
  "key13": "Jpbkjv3hwXaG8oDaSqq4SG3Rwx2W6LkLvzkqUsMncrJRf2tbUwRD2ndwdTJjxZpLM4rnvpkivgRiGagoh911Fzk",
  "key14": "3FhDzUDTDvphrm4NHcHcN8EqkbHyZw2BkKwrwsnDyUcvDEsfKEMWdkfiLYYpTd7FBNRHJHjVFLREJdpvDDjMyRmr",
  "key15": "3dfVheLJ8TGZkGEQjLyLJGo8p8KEtxGQR5Pe5MN7MFpR7Mr7xK4SxgNnTr2XyfrL635G38Tr2MB25fT9nZa5qEz1",
  "key16": "5KHqJ4QhPYW1RB7qxNf8fAUkQ5A74xoFzsSyE1LLUEq4geepjrAicvUxGHrTCvdWsNEtkyL5p7vRApsujhVxP3WN",
  "key17": "5tqxkMXroJXpv8BRvLwthiNQLt5tNo4hsTNPehGaMy5UHjtGjZ5aoEGLKWZinYH3L4WSgNQZh3MyXrSzWwDPxKpH",
  "key18": "4K5TRi2FzBwArchmvJvBaG3667euxQrBtsbn7BFmP7e1qFnrWGiGWRu6vN6h3rS6eG8hzoCKJtMckXjXLYeSiCA2",
  "key19": "voRrs6QFVbc3MPfxzf7T8UVtpCAiBhvdWNJF2hehQUgMy7tuw8ZfsAba4FvPsuNZat2VwbM8wJt4SUvd2CKGMy5",
  "key20": "3EpTqT6n7uaejYpN5vGAjehpZQwqrCyjzdicsoLAKkBHy8mozi9XyUEvGkqdHcZvbwW8KZNY2PfdLDw3dr4Q5Kur",
  "key21": "5hgH8drfYwqC2UNCACPV66sSbwki9QFgGvJBKyMky5BFrPzsVNSPNpR9vYmjMTc1FQj9vi6r6QqHTyj7UVveTcGm",
  "key22": "Mgk1P7BTeZN8CcTCenHt1xqoADqhwKPWxBBJCmgKAg5i9sT4isLY9QTPTGnAuFjRcKMERAuiPSdCRdLnB22nNQa",
  "key23": "2bhM9xJsCjs9qauPYXPn5AB1j55Mf6DMdtVt4T2mw7Y3twH1nL6LhoVXoLwDy4D2KnjtLoEj9Rjnnot71aJ5VEya",
  "key24": "5VewvYWkawoeMR8xovYPSbBLSyHeDaLhqjYEbBURZEbB7AnYioZkc7fxx9c7QoSzUsuPnDczwUdpp67ua1XrR7k",
  "key25": "5jzzpLTh1HXrhE68rbwdoN7T8vgDPZBSQPUCFwGY2ZmzNgFHDwzY2mftGHxTf7hrjkab4omVRHAL7A8KpjzSTR1F",
  "key26": "4Nu3cQqSiaiGMUjSh2iotxnwbCqaxRu9aABKzpQzg58UeFZHxjPq5Tv8gT3Sgb2tp3usCenM9zyPZdLSvxwjuoze",
  "key27": "5tJTnoqWWeL1KqkAs86QbAFPdF2kYDJQyg2R2mqrNR7sTb4uLd4muXrj24bjVtvyERcMz4uVCjAYUB1WTGS3NhwQ",
  "key28": "3LNVNyv775YwW6rfu2jevNkYqEV1N4sGNSeht6NwZVY6psKGQosXAp1cioQ3P4gJeyDL1rAoTdRHnnufbGeDgr7X",
  "key29": "4aUjkAP42bQybPaPxyMG3j7bKe2WzG3wBHR8MBjoBTRzkJkih96uNGACEmtTeGyt3Zo8KgQ9TBAQ7Rvu8emSjc2",
  "key30": "2XvvQwsWhCQKrXRGzgzMTeMEYKWP4NG7KzQEdyTUp9SybKgaQfinS1BEUvVfxS8VavfHjfv5uuQkKNKAEjjQNxbW",
  "key31": "4wzBM5AvLJFeHbAXdNuovd9s3ChaJnS3DfpFzLHkybTQu1A98K6Z4LfXrZYiBpPCjRKwKDeZapAXj7vfYgjNVniF"
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
