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
    "58wcyg1cfkmcH3Gu4TDHgx8icuqvrgb8f74mmcHyHgTGrASqe7jcbCqF2Ry7BFzhGBWykvBBBSnF8oRP9yii34gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B8YLi6vyX6YHt68n5ZDPvR9Ezwdb53YTaqpSG4GwYJQkR3jMswfxdCtKkdYvTjE3wusuPt4eda9sPMYrgfVF5f5",
  "key1": "2CBBgjX4kRjUX6RiocFmJUAWzX4BmT5NyVpgSfsGnWE6DhHnUMnCg4mh7ALDTkmrK1hLyhrkD9gQqo8QuJUkB6z5",
  "key2": "4Xu3yEpuZMTFU3bsXpFjDXe8bjuAA7KiDmLq3fF7w5LiuERWwgWL9eLeCxvHzzGVsekXGqynDjZNnkFQkhqTGeLR",
  "key3": "4KoB7H4KNB9UVu6uNd2rnnSUSbmf32k2t9sXmpTd7cegHp7rFvovfg5dKtuRPvEw8qqeMPzFNugRttPzm1y7vPTN",
  "key4": "QDV5JiZbDooj3y4pdSx3Ug6xm9ujmYJHiJkJyB4oH47Rhud1wW6mENjrMwrPieGScaoNoVcEqd91FxTRtq2jvBK",
  "key5": "5KbaPNNjv2tF4ems2ZF5HRNyunJvzqByTVBeytJRmCAAcPC64iiCgTtFk9dPEkomURA9fzzCkkAZD3nSkhBvVcsm",
  "key6": "3f1dD3pANSsQgaoknwRxRPz7R2dpsmaF5q2fynzSrQ9fK7rmx8T8yVNywx2eX5xcgCr4uWZH1JUvJJfBuNECcgVs",
  "key7": "cemjwozbFC9zKvB92UHWVbaGYd7AV6zPDEptmi446G9w45QdK6kamK3Ydc2nJVrCPhbMVY6HMR3AqguTqeXuuUk",
  "key8": "47nWN9QcJ4gGBw5n4qZRgDuoCpNj23XUPWXhRfCGfhxC2XBEkwyjD43i9wGkHR5oXU5KGWsiz9mvqhJnKaP7gAzp",
  "key9": "3fBCahq6fkGVNChuUSnp3rqZFWdPyor4YnF1gUa38Z18S89qYZpocdxZiCqFeeiCP2JVfT8yop8TEwokCz8TQMx3",
  "key10": "5YU8e6tpWNDVmoLLJvKPUta5shRgZXyVjEWSYEJQtAoV2kSfKmxjBbPzDcAmRcj6nbqZnDvM5xEmh5C8iYaZgsYc",
  "key11": "41Bnr5Bp1nj8KtTTG2u2UBdYg9qLzRKqFx5JfhigqHAuor8qNFwLryuJGVcCxqN7e24ze7YSh4ZBDHn6kpku7NBo",
  "key12": "5WRA49ALaN4nfniDKFV5ouZTYr5W39W3JVeEJcZ9dXrVDGLZ3TdNUAKXWXR7JcEfma7C3YFGsTkAKbUHkoteURbi",
  "key13": "3aPiXZLzVJbwHmz3RoT81fwVtNTucwwDbWwwUNAFMs7vsMeE7dCpowkL8zhJcuMtb6w5Lu8BeLD67ErpGMgjSXNp",
  "key14": "4AbjH9hXkSXCkokF87rNwdAp3kYDdScu9cQ5bAcq7qRLeDRUxRpKZsgWf1QbtQPXqjWgqFZAC8X79B47GCJB13su",
  "key15": "2CRCCnJXDZFxsecCVd8xQnN5S45tSKvT6XuVkkKbU5QPf8yLSHKZuhMqKhiKctdruvfwWBVmjhbU5ucahBeTrtxX",
  "key16": "4hkayZMaHJNCR2ty9pCAvyjU8dg3zwVRi7hjzHHXwMfvj5pug8DchaosJjYFHPP98LVyWsSiZATa9bRm9v5TGQM1",
  "key17": "aup7wwyvb3BkXpfyFsTMFa8dncU5VHcJa9bui3UwTUciemdP3YUcMMsHB5ExwhH6cfVjTB9oHoRqqeCvksGTGj9",
  "key18": "4MhYqY1b5QzXge8UQyAdKmFbCUabLj3VYUfV9CoisqBrNQ19hbG7GkxxoQG4aSJyofqE7svpTYvFRY86PczS1ZLt",
  "key19": "3gqkY75Gt21dUcXa6no9o4z9uFL11PSRWjVqtdHo5Wen2wTFtwif7Gnn8AWuPLygam1dN2nZzL13vkNXuFTU4oqu",
  "key20": "35MnJqWzj8F2n5Ayn2mJaAsUY73ziRYGXRpQdjt6Bpmmf3SJb9EK53j3YaCYZqBWe8oRnLPLxhcXqa5MXGMQFtMW",
  "key21": "61RYTbN6gWcyvPufvnCJgKooGATUhN9DnLViBb7EgjUyNV5teyoSyq1Co8G5A2xgSBTWRryGSBxVnfh4xZ8MWH3o",
  "key22": "jQM3iNhVcncgaSZHdCKGTHAKKyhZQj5H3CRVKaNkFgLHPd8ic5AEoQNyKWakwkDn2dr4maAzH2hyQCebGoncfuF",
  "key23": "2HdXrLpqJwt1Umfx4UJyTHGKdRMpE7C1vmz8hFigkcyn1bvmEwvoGSkr7qpwQC5H5TnPqsPvGaQR7tK5gjcucPWb",
  "key24": "tCnvFmrEbihK8kcim94VdmrJ6sMbQKRiJigF8CTzFkSRyxR9mspKhxE91YvY4GSxgDRXXKAe6UVtyjtDXDH7oUh",
  "key25": "JQ9UhMiwW3yfmceDJVE5HxtrqYhj7LVRyTt9KARrJWfFHoZMvWChafp8dEwxqVPaoQpGHUQybynf8B4VfoXqd9g",
  "key26": "4NnGytRkDKPv45GmqH732Zbtg4rjG4VpwUc8cxrTdfkjw43TxJDtqER4y46iGSuy3zwx5jvwfXNZ8jYoRpQVBE49",
  "key27": "3MDF88CT3cpokjTLT7a4n4txA8Z1Z95nK554HA7x2RzYrexJjF7cyLus2xe5u4Xb764VUfoqWwn1K3ZumyUiMCQq",
  "key28": "3qjEpmZFFD9F6KiSFfWv5WkLKPFPRw7pBgVitb6tSrogM28fkKCZ8AeZAQQhjphWzp3FY2i4CUkBce7mqisAwTrz"
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
