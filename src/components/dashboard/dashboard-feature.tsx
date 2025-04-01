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
    "3SenzwAevvz2kqEktwQv9W5AxD5XHkccgUu5QYKa5ifAvJU1PXhJgC7eyy2UTj4oGtEGjL4XuLhoUXuoKqx5FrZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bFczB8tLJ2H23219VCiPqcPfMPVrFeptEiuxN5RMGMdjBeFVAe9pVEjE98LUrMwpokGzZkmLX3VZ6Yq7Wry4ztr",
  "key1": "4FRZyiFpcZYWybfFV9BBM3NuKZuA9q12wtDLXnS7eB9mrJQzUmcixFPu1A4uScjoR79s2cW1nryadRNhiujHoQgb",
  "key2": "4MN3qAHWYf1K8hTkvb8vSrnSz83QRDFSHqyCpnrRs1Ur1y63cST19oDN2YCxptQrSLMXNMNySDpptfEKrYf4ggjx",
  "key3": "24TARweme81EXV6bnhzqV42WwiKUBaUsNQ34Apj9mBfgSSUV1ME5VTnkRz7DgyVjG8qnDU8Xt22mfuKUyJX5zXHp",
  "key4": "4ReCVooA9C9iZjPCfrfqZ7SBBUtaCA1r3G21vTJm67zAZqHYZ3YsusQer5Wkz1AH2vw3NiwBSwGUNzDbwyj7YtLF",
  "key5": "4XgaWjbRZ5Rbi1xsmPhjzDFtQqBGRdhcZYjMuJ8jKuViDN2e6b1ZCSV1EzGtafELQE3f2CDTch31uLdXjTzD1Snv",
  "key6": "5qsqTFeAy2hsAn7BHiFJMCn62yNbpYzmWj2wap7DDcrGGpdy1eLxTpTHTjdHhXx2jsQUdxN2wBhxEmMTKUXZ1DJz",
  "key7": "CQasqUGu6Z9roHTiMfh3KvTWdVUyuE6gFSjz47pCLDJ9tXBZbP7sKxVBrtCLd99gKyEkvwpXearCNNsWmKkcsyt",
  "key8": "fxRCf3undesbVMHrSsECz9vov71bZh4Bnf9jdEV7tH5HwDn1CDMAKuvRcRZKFAwzLJPDqkp4gPm7k1de6vvsg22",
  "key9": "pSzt3jwECQcShMpNyM5nBZ7ParP6Qp2a72mwcF3VkmJ357pUju5HTpQRZXUEqWiDgjaypg1YWRsv8oRbrU5bwLR",
  "key10": "43Hkc38UjsJ6kg2sztKkyhfAJvKsyM7r8fxde2VAaRY9mq3WQ7qQPMQFwYqPb6tbFmWSyU9vc5ewD5tH7T8EH18P",
  "key11": "W3MXuLpkxXapxyXdws3nALBL8ym7qH6HtSSKoUBtEjFadsDSgtagFATfu7txuvGtUcAb43K5C3R9KvMr7QSjSAG",
  "key12": "4Uf3k99SrdghtSvw42Yiheq9dY9UDrhGMabKG89Edj8Mf2RrkWnmiVbzmGDMJnHS1bdvNjAwPHN9X1E779L8aA2U",
  "key13": "4L4EMAvorx7oos4362PkEPDUWY5pL8K1qJhsu2qZAqNi95NzBppCFCxQbJcV33rtvZBqWLh32joXFJ2kyyjY4pNc",
  "key14": "49qYMGPnijvdE9Md9TH88og7tYmQByojTzYegjuSZ34XGLY319PrdxgEQLa7FfTkCW19Dx2t4sXfRQ4qUHzNV4Jv",
  "key15": "4d9dNKetRozGsWYHvhzgVC56aeMXVNpS4GyaT3pBYYWYT3a19QFN8RsPsiKHKt3UzMsCMkr7kfuYnDViBppmuM3h",
  "key16": "32RVFFeSx9r5iEvqHENribcfkvDw6NigQsKu3sou5Hc5WZPyWkQSsXkV1qESDzxamSSEm8guWi1pbLX3GNYXiHog",
  "key17": "ErVXVwiQsVYxoJTmzjUdzoMgvovbCm2FcMTatJ66R5VmmuvK5dq94FqB4cyTyyqKAgmzjNExZwZpFrrvb2RZjDN",
  "key18": "5X2g12NkrfLvvPokqQWzixnFSFUH5wkA6sysngE6RJmxUhGLJ1GDCX5qV6Z5LkMrHstBRBvnyPBSJ64M2zX2ZfPs",
  "key19": "4hy21RnvFTfWvKZBKoD36NKi5marzwpah339CtrhvM7GcPvt2GuFr2u8sg8ph7asBJz2HjKHbRAH7AqnrDbYLQCZ",
  "key20": "5PYJZSfYiTjorzSw5otekkJxGhwQZZj2BbeH9vDiYRuxQzqHA7KdsQZ6Kberhih1RHGznQZZ5GE11DtQGwvVNTKR",
  "key21": "4aLDz1K3nBtbL7X6oxjXgsszFBGBpq2xUqRHYRVgFsqjVfmTiRmGAv5wmyGatPwzDkgCoQUNyNoRXEwbTuWpNzgn",
  "key22": "4fKfbjWazEWYTRyuebjo8euxm7pAcPnUj53XLvYUpiZHLAjqk8k6g4ccfBn2KWXsBdCJQh2NEjRmENskpa283uPH",
  "key23": "3csMjDpJemrKDuqjpxQeuQenqiBNmMsAhUe5AevrzvxyE7rq9xgHRKw4Y3mPv4xnjWoTDz9GGE2aR6bNWDZTx1G8",
  "key24": "29umQeHcfCwtk9yfKtTcRY2uv66nDVK9GUtZnEo9cFAkBKmKEfPUrJ5Hp8uimHpFDbvAthEL2FbKf6WLJ71daGn8",
  "key25": "5jWpNHWvw9S4RggWfozigWFusygRoNsW6ZS1GQgn56eLgVhjbtHDu859UkXkP4Y888k8ZWLUBSjoQD1zJzEyJtEx",
  "key26": "QL1x3Dh7Jo1pjaQoctVHPWPcMVVNvcYxNbhqDYhtRvU4oxALwNH1dJKxx7QywbRHd3vnbMNzRHiNQgKWE6y1v14",
  "key27": "NXfB92fLzPxvhdi1A6iUxhQ9o3DkxhdMnRAhG5AdCUdFEg9VxjYEbd1yAEwJtzdSekKDN1Lna6HcXcoqA4rE2Fn"
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
