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
    "4G8a4HhB6bBsj2XnKa9vTem3PTqeFwtynw8skqJnbmDS7K4Gb5UpEi1iiZYZFTc2dn9QzXNTXjmGUXx5vPzL7AnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tm8y6UTw9uBxykD2P6D8hjA5eMkYEuyP66TVS2yjb61ns7MtFyVfZSoJWptLAbfQQUquoTwLYeEN4cDDaFcGr3C",
  "key1": "4L9afBWvtt11JA88ZFMwuSfjgViHmZujgu3jA4LbvRsRdrpGh7dUTKqpsouv34QmGdjCzBsVF8azrzRECfMu3Qeu",
  "key2": "2o7hJm1jkJYk5fyRQFpac3xsyNXhhV86ejabFsKEGwFbZecMwezrV5VQoVp28EqvrLBQTbUo4tAxmbvBXZWtpn5U",
  "key3": "2VwfpocCgbuC3P59s7xoMr9yTetvvH2E756AG6Cid2j9qVy45A2SE3GnXC42PgfdEdhijg4P8KryQEPeV7dN66Ro",
  "key4": "36qpCTEqJjUjKy3pBXaKDZLGJCqpwmCuFaQtJuEiSnX9Jg4PaidSZi5JmUx3sa9E6dGn2R1n9aSgoAreHsvT2W6S",
  "key5": "ZkwuWirho1AquVjgs1cGQkHLsYeTwoGRDfrDCS3ZkDKU7oL87nu5zqxLwQeofmGSqg7yGBN2EKFHw5aYd6ctzsL",
  "key6": "5tAGkxxEWorGpiS9v85BapbZUBvVfeYAAH3Hy9TEb7JA19npaddcF8fyQzh5UHTmYEERzygSMZT2gBbqpHv4UrHt",
  "key7": "3eD4fMfuJnoPiiTQr2yuYHjiy3zd6fFXMzUncRxtfpbP9g2tjfhbgMGZBxnH1dukhsXSgaYVNbehLrJiZoJzSm9g",
  "key8": "5SN8SgKW6h4SsV8MqzQDH8Z9UCMAkPAY2rc3k77EzdFF7bA86ihzhK4mMgcDeyhx2pDruxWmS3xkNj3PgXbT76aN",
  "key9": "55z5Vtun51HXXWK912LZzzF3Rs11QBchH5rcubQpXQB3heh32ePUepu7jaPBdLh83yXPg4uxYBQ6WprWejuC3Fb8",
  "key10": "2utqD8avGXXh76WgTPn6ein21ssYGzaKCBSDVfcVMvMyNzwmuTCUKcfGcmfWQK3b4T1fEbnTAnxEmgQYXLVtqJQL",
  "key11": "4TzRSdUXa6dkY5NF22WDvrkcr8LWE3vg4oLhweW8N4qQvCeG4YbkX3xDGXHKhN4vKvgng7aozgkfxkhmuCD1G1gH",
  "key12": "4taKP6vJ3LYqacePSqt4NWnXbKdPSYjFNbFThgvBMsDZuCpwbGU2Jy1PrktwjxZyfiaREyeZmNoLoKHk5v6rDfoY",
  "key13": "QuqbPyCMvEATEJsbzYeemGCF4zbDpSXAf9dSMKPqqr6io8n3z76xyMLDx7wtBEeSU84ZA6s5dhEiDGjJsUJDgQQ",
  "key14": "5DVRwcSXyUXNuEyKMHyPy8NHtBkdALE79iZVLRYxpic9BvhbzoJ17TopoKkyNefNUUbxK5DbcQsvDwZDbrbhiHPz",
  "key15": "4erstFNetpELbRN7w9Rnt6pPX26jtFyefCHZTujK7ACBuVP1QnpUaTZeozCaCZmk7wVzU3hyyFs96wgCcjGY2rrT",
  "key16": "5e6JKnUaDtMm2fvanZxF8DJmW4xCeGuGcNXyiAVW61UvrZr7ztHBvJPwhmM6ZBMdWJtHSoWUu94yvkKbCoPdkoBf",
  "key17": "2SamZawp2aHuvCDSXVqyMaHo59765QrXyo29LnhZQg8bJZDzW5vmtWVpVBhGcbvhuQ6fBKDxJEscmJVSSk2KWfjp",
  "key18": "45PQcrrwsEMdjFj1qPZjELss7kB7vBBBFg1rYHgbG8s35a9vwaUdy7XPG9ko4fTYqmn6n3sLEj5xCtW1sgDbTAqZ",
  "key19": "2MFsCiTvfsLCuGbBHRzBFVsnLkybmKEUDaiDRoHEotG2ZwgXXeJYkWMjDcCzR91efdRPcyhPbPFaz3DjbuhfoDCG",
  "key20": "2HmHvp3PkNtWKYr3AuLbAnFttBZN9v14ZhkYkeeuoM5ZWTvNw9diLTCL5Wx6jFt8MV1qfe3tKnAEaxG8s6U3Q24a",
  "key21": "3Ds4Z4iWrioYvRg2XMHaJLofTMifN89wiNW1nDMz7hbTZ7x7TVcD3exqVwHmCFfmVBd1VPqCfB1Qkfkp2nuQftNH",
  "key22": "3xXdvHJfhcx8NfFXeeSrWKM8LT4BCKnpdsjJ9RuHmNRcStwkLEhkJYrNZb3q18SkE58CcfYSrzbqcv46yDFVktFZ",
  "key23": "2USHybzNwb2RckR8Z8XLy4yt9feK5i6yFtXYuJZdJstqdw2Xkwb5NrVdL5ac7CKDtgHXj6kkh5UyHoLSq9DK8qvi",
  "key24": "4cp8bsDbyeMuGYfdJKnoA7ziqzEWuHp8tEFftdvvXfy3Fx5M3DhKmuiWk7ApLwusKAGEJdPTWeVFnSrUTYcJNbBj",
  "key25": "1ugrq4mKqoVo6fRHVxZRZKpm7jyFSqQ2z3LvrNBtPLnvZMAFiwCY8sVNrtY2BwAA5ccQVHR4QmC7BaMFSzdi24h",
  "key26": "rxanmSWpP7868WivG9WzyNzfmpR5wvkjiLjUfCXhbENnxRJheDz5zsffjY6ArxfhKKTc5fAqdsL8FnyuhdWENwE",
  "key27": "3muKqxuP3zdSTrAgzQVm6dZpwKt6HTofd5AFUyxLdLUdkDCshDcCyiay6yV79xK4vEtFWC7qYh4KpKsdmdsHjF98",
  "key28": "27X6faEr4pEbkjYgRLQaBAxWFHprrzsTb8WyHRea8neH3dgamH2npdMjDfR6BqRDE7XmsM7qrXxtgsJoFbsui2mS"
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
