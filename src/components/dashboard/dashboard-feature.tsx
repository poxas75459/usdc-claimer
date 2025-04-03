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
    "2qwj87puWuYinS1NU1umVGwaLN8guA2EmN3kj8hFxnvMpZS4n7We3gY8B1z6jdheVXWe5QNsA6jHwVTEX7fFvjAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dzku3QMJetv1T6JEyomFwaf5wfqKzT8AxUboJxjBbjczzxqpfgiAjmNsfhzJC9PyHaRtw2Bq151DCvTkg3mGv3P",
  "key1": "3jo6Qh946SZq3HwuQQ5b1Qcs6CZFm6xz1pVsiER87CtB3nvugiqqUzEzwtjk1L961zGrhzUjz9ep1pGFXmsdDBzX",
  "key2": "2akEtkW2XDrAd3qixrRPNh8DkoPz7xzV5noL8Evrh2ddgDaVywWYCNX4j1GFmAN1HXx5hFqBWkJBQ8C5GoDRwDur",
  "key3": "2w3ZB9xz5i23YuyYNSodgr1aahpm34uNYeEF8ucBrXi9dtndkYE2v6itFStMZvESZaxWFrbRKcmdUetqAcQvJbhj",
  "key4": "23Au67c21aEZ4Jok4LPm4hRfLv3z7uTRobnMRNFcySxZzFDc3do6a5dwupx28zthHkdhVpwZDv96zz3FZGuP15Gh",
  "key5": "5AiaHm54xq2f57wzfBsgC6aeu3q49mm6TqP3f9cma7WSGbzcBuanq6CpH3xB9fZcbgEPxZRX8HhmJnAgkmfRS17b",
  "key6": "NcbYMeEupbPhabSwdLHDzGToCubHg1ZZETgSLe8xTBA71uvGKigLMeBVJMwCHy2onFv2f7MZs5fPb3ectxNtPLu",
  "key7": "4zx4RCcAkRuBpVKMcH99x5Sw5WLcMuayF9pis2WFcHc6HsCvo9PcC2stxCEkJaiWVxcpRSRxLMjkxcpimWDQgAjS",
  "key8": "5VDZPf3Rn2s7iaheg17CUZSXoydqEUNgpCmFT8EjcRhyCw9GYcTKWEZG6BWqpmJUNaFVj8mzt2MGfpKxkaV4mKyg",
  "key9": "5JdQCLqyGoGF3dBPvEcDZFdLGmXaLJm8vmnd4TeJk6zD3TowkMZWMFTYB71xVDsSBViTaDcVGWX4yNciQw3KAEZC",
  "key10": "5ZAFeA79w3Sf7f19NR8cqa9DMLz6X7WDHzFYaVgHd996MJrXzggudA8LgZ2chUpi8pFZjuDwuBeb5g1RhUxBPpjU",
  "key11": "5aFQwKYDrs8xPmQesXMwoSYDK2F4cDAeSb8jpahT914kBvKKXWypKN86Gd8G95eD7JxNajMCApWREU9PH5ogWauJ",
  "key12": "5sdVDcZ19ztDgiDvzprELbZkJQDLy5oDpFLhtq73Sr1n3iK7CzgugsJ4wcTr8S7wzy1XXA8kpVSLKU53gzPMCZYL",
  "key13": "2mCx1JXoRFpWN6yX4Zvjh27QnzLPRKYzV5vx4zYQKsPE3DKb2sGLmQ6pG4PqGAJKR3xompioAEmu8qu4KWReMPeQ",
  "key14": "5qkkx7qT1ZjNcAZo22qxspxigt87d8kck1RZSaYGWarJzx2t5rW9WiaFYARCVBXJyqJdNdzjq6ok86LvcXswHWiB",
  "key15": "UPHqws1GaFjU24FULt3owQzRjST2SACia6w1ABbqS6qjGe7m75e6YBdUbwMdmm9nn2h5V68E6oUBsb4SJCaUvFN",
  "key16": "3wQ1Ke6gPireLVqqvM3KX5upvrx8fyH4UjP2kKxRY6xPujXxDGXGhSJSV5Dyp2kwVw5RFdooTfPzrjz8nz9uqq9n",
  "key17": "2sVCPWa5sczCcFssY4o9368pKziyzRHfSG1KtF7byXJPwycoFYad9Cho7hJeCc25VHHvfrJCbH9FGHbspwKqo9Vu",
  "key18": "4ud7nr7uC77tcRnY96DQpXLi1JoFvb9hqbeU6cbw43AQDzBBHF8RpMLWUoaeANP1dPKzmRDCCd1itJJ4uu1iQjN8",
  "key19": "2U1cS1x56GrjHrjdj3Sizu386a5c5MYQ4tDjKFoYQATSpGAXYQhMvdseXvC2unwx8mAUgAJrFPZ3JwzsiV23V1S9",
  "key20": "4Qp5rT3AAjTftorU56S7azCYL5onrz6AB63PXYUPRGKQgSXafN67Qw5izpNG3rFkmXkobVPapdCyPW46pPumXcUK",
  "key21": "9Yby5KJ149qjGwrSNU2X1NGh4dESKLpzXMtdz6wsckR5UzajKD8LGK3zn7RPzVer4F4BSTACjK8eKicgZ7o84gb",
  "key22": "UQxUP9ihyyFpEwEMnuPQ8dHrbLyJcb7jmqHmgRTF3NE85J8sdBJ2GcmEWXAEftohXz6EwMUb61HEB3U4B4Wf9mn",
  "key23": "5EBzYLz61W8Rq5dznmJbkqXvpNLuWstv9idiD6s1P7UYXjDTh89uxmZ7naqBsxhvV1WKjEGsHtgb5wTH1racFEAW",
  "key24": "4N1bNneHqMAJcmomVGEP2TfsgtMZNfLEQoia9U6AXZjYqbxNYuVo2m1zwnj3FqXvThUrNKtmLeGZRbawydGBmCqx",
  "key25": "4NBjkQBfJTFcLpq47LmYPnpmxNWdWfUwh1trqenV2TG3Ly93jK8L5ZFTr7fbjDCiZNYbmQfZ4DRUkEMbnV8d6DM1",
  "key26": "2ADUV4CuLuBVrkaHpGCGXHU5GvJiDXYQkrFtCtZdqnQVuJWtQsPxucjoahWiXxXMdLqsGXhpPaS56XsBQo7u4q6V"
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
