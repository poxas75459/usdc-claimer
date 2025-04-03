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
    "3TKSBgR7Mn7hrQ19sqUE34YzA95tXnzfnLwcxfH9VgpHWq2sHy3963zKgKXa5i7YsxQrNPAn5asbGY7V41BMghYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrNfxijzPgrLZJvBTco6XdEk4WEf4L9jUqDEBYxv6rSkYsc4QnCYwoQBb8iwAE4iDRFYyo16odpjGdbSgqv2TXj",
  "key1": "31gksnfapon7m3WCFuDxyqee5sdTK3QKzfiG94JXbFGUQe9AU4VGCBMw2wf5GZG8j4NkXXXULU2uSGkfkLPkBYgv",
  "key2": "29ipiVgnhQrQ16ZuDTH4nUYCoY5C8FGFtvAEWjwxnTsvUm1zPPu6141DkvdfFWZMRZjhhRqD8TjoNxwSNbgmXxpL",
  "key3": "4xqLrEsHcpHVrYBZYhn3gzS7qvdwHRKD7pQpuPjZ8vHwqMGS7yssE1SbowbhP4Rvf53TeeZY3tARu5hKZ3LudyuT",
  "key4": "4ktTVPMj4QuxdXc2fG1XhSMS85sPvDU8seV1rDQDF3xCtE6phNyAqe9NQFsLHAYfWJxzADrTNsuwfAkDdbvThp9p",
  "key5": "AvScJoC6KQHBkd4wnE6FgQSgZsird1TR1DmKTAyHWQEtufd9idm4NJUuL9dz8crbbsxYYJvg2twjKik6T2GDvi4",
  "key6": "4ZMdWMdRqVkXUbCs3L4g6YGqFQuNHMATq7ANJ5AKbLrvHe6CCR5hdMF3vfoX3Zyzw1E57o9dhxjoK2su5nZHJHo2",
  "key7": "3TAxiJGQZe4zUQ9ZSVemQSFJsmVVPNCNQBDMscmgzeVYN7zvi7TkyFpCTJaXHV6aqCDb7KEbmaPcjDXTou5T9gNS",
  "key8": "3svsbwEXwVKjFcRLqagKrhvzXvnum3ze9se3mSRrJ1gMQXFEdRAMEzu6f1bP9uXa2uwHGxmH6eKddNw4kyfFoAxG",
  "key9": "2PgReUXRCZw3tDGGBets5Vpb9Dw7yzhxBnQG9qe177SQx3G39hoeAzMrqP2KKXmfQKsDHTZGqfdkAVZm8fAiZ4gH",
  "key10": "2sSabNyu3jZjnNt1pWkaYpmX3QLXGphg41PiKkBRmLYizvaHZuKvGu6Ptb8otfptWjwDcH1z7YNVseH8bJ52JJSK",
  "key11": "7NuxNb9RZtN5xiTXGCRo5fJWVVPzxjQXDmbZHzMSVbjEAmtAo4PZonv8K24Z213Rg8kAhsRXRAmVmyEz38Gr8tD",
  "key12": "LHEq5uVwfTNLP786iyHpBguhRjUxR9HSMPcYXCVBVq5FpSF8Xs9pDpqGx7dMsqUmZ7bbCV33Vd8BtSrAWwctrov",
  "key13": "ojRpGs2wDNHVzG591XgZpS7d9QkdoYD4UHPATpSqHJ3fZAwVTNrgSWZG275SA45zmTFkktgPnGNCDMiKYDeowFu",
  "key14": "3XkiZa34Cx6dBGto9qWqsTV4CUuanUB1Hyx35iUg136NKSfUL1xBymTYAamvrnzDgura6MY5aKGuDwSqbn1VEQEf",
  "key15": "4vGuDkWC7W2VYxbWLjEGpCPCgBFapAjYFyfVX5xTZzZtBWUxH2KsZwDyquB96nCHbkoeXYWL7a3n4r8nvhebmVPJ",
  "key16": "2ngBJBGVKVK4M6oF9oQuUNUdYgeZWBEGNKJv2ANRYQYmV2ucin81kKGeU2xMk4Rv3sv1RaU7SzSF1VBk2Y7yiDa",
  "key17": "549ynSYZBJVHuapuEeSRTvpaw6yJ8vjGXm1Lea5SJQbHfgKBPBbUyDKt7Qhw6YvLAqH5zJwLxNXhGWHJH6kqw7L6",
  "key18": "5frdQEpf43M28o2EByPauw6DwNX1AtCvKz9d8BuiYfejFM2Y3xDY69p9hr4aUAgR8bbs4dXzYYhBBypdPdumbd8L",
  "key19": "39kkKkJEZuCwnyW3RKZ1tLWaTn28U9TVpbzYm5m6NNuGzzEBDBnFy5Ni9f9GjEWB85YNPk4PDgcCQ66MD4Hd1JhN",
  "key20": "3JQxyQFbba6LYifKAR7Ff8DAJyosQLzj8CT6v5uxKbCJmj3GrTXDCU1rfjVGfbtrJFt3hSehGCoXkYRTytvedF8h",
  "key21": "3V4Nj8iBFMxhr1apg4FvTUVoQpkAzYAUs99Ed7SPuuSFe9LjzJ6FC81fHydf934Nn8Erxdxt217Ej4nTjN7nAjC6",
  "key22": "5UmLwsHxKST5XoVtustfyDKjQgXCqVphLHGemZhGE3K1EnM62ZLiMEt9tWaafibKKHvoMapGevUAp6iPByHju39X",
  "key23": "3yL7tQireQnK2zzrEfaGzsXtRQwM2ekYMw1t3dHPrWGh87c2ugQQU3VavUcaXU39fGa2PkAA2ivda2TfGNc31kyY",
  "key24": "CsLgQUwu9GUDSjkr2f8D8GxAqyUEstrSk52uYdERex81rPMEdLZHvwoqcMV8rR6yhK6HYMHR74Pf6D4RFhhu45L",
  "key25": "dbhAgwbipzddSdg18YxyBQNX1mdPeLY5KhYHyowrY14J6kAEsrrmYQLk7YBkF3Lvih4dj26P6Z6EVKNRj882Q3k",
  "key26": "3hg6VfY1VkQbXc6cU7vzyn14z5DPmWzm8AqouMP3q6rKY4xFycmuJvRZiTP4aW3g8Hv8dKemdB5RDhndWwX7m28f",
  "key27": "3xXLY18L1huwBbtCqPgbGajMSMeiXR43yyutMjZzgHDv6kaGLM8qqKRzCMZaogSmEFAEDGCfqhLesyBtQieqsHQR"
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
