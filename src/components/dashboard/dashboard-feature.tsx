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
    "Hjdy8gryfLqi4zgn1vUChVNgdemFNw78PbVaATQHNosva7aPC5NPWhqAqxe3Kyj5NxGZDbSZacU7gqzz8NwHFmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7z3igyBMAJRNd9kq572KQDyTG1qeRguZDdo4QfQVD9pzQAGhLYPjA1Whf1FfHKKR6BH3FuJAavnT8z1jnsFEkf",
  "key1": "4GAyZvXh3AszB7ddi7TwTcQaiKTwQoSdh2zsDXLJYgKDPgJssK5tHtxPy6FegHQJK6yRw6LULrECzKuTHYgWFGFf",
  "key2": "5CtjKFfGYRv15F8AtL3LoBfdTpzR4wmGTp1mckmADAnjtyh3kggUTHB4RgXju1bsM7c5VMSCcPrczJDwvzW8FL2x",
  "key3": "4m8ataGtwkPQJ6eDxFbjcj5MeXU3zgDZa1keSP6fKbjHsfbeLBNfqN5HRomqnsNuTbiWRNeCGDrH2TYX6ioXBgeL",
  "key4": "2pbodDg4iehiASEZjgwhh6s5dq7Xa2vCBqW4suShWftXMLkpQoQYnZkZVSz6rLjuJktd9RREeodDzJSzEGGWQEBp",
  "key5": "4zGpF46jjS3eCCQFS3fNTJiyrGJqH62iaKgr9krTNcShh4ivzSS6W2GZWQgzKKx9Dn4rmx2rP6Q1TKgpjL6aSEo4",
  "key6": "38NMt563oWoiEs5ASeyxpHtRLkVaLu83bBobb8U2W64XUeeoGNaHCXmKZLDuEKyfS28Kns8aNJaMqVFvepgWd3WR",
  "key7": "22XxkBdWpvqufnaYRPmAyekbkLusULzWybJ6VzBmNQuCzYSCXeHaNnPQv6Rkxadv1fMempCLD37WwBL9AM4QMgXc",
  "key8": "3nnFuo2jMY34XVhX7ea7yBnq4Ny5E4UpyAbgu6uQHKBRzFd4h6ZzxgBhxnCoTrr3hrjpm7soa4Tw77Lwfu1cuif9",
  "key9": "2gPiubXXfjeXZcxoE6UkxoF8xBnvtpPUekX6enyvrQYXmN4yA2sUfP1BYy4rU9ojpYwMvW5dH7BXLq7qRortsti8",
  "key10": "5YfAosFCjoiYYhuBQUuRtGSqj81j6793zCb2MFAJpBmKS3LtCXj43bq1GvXSh6PAqVe8YLvD5kDJ39KqQt4MZcyr",
  "key11": "2rbM9WYrWpsPLbR44fiXH8fouFCzyZ7Edi7g4PkFiacyq8Cjwh9Tbj8VbtUMDHpH6GQPjKnYmwz9oh2vRp9qubnJ",
  "key12": "5bAutrr3d9EbJroCGcrNZRTpX25n8CupSMunF1H53ujcjM3wWw9hq9NdepZwjok8scDGpFmxfvVxvVstGW5kW9dk",
  "key13": "21DVgrbv3JVPM5rce6oEEghuXqKk1GW7xvYJhzdKhQJQAwJLWnEFWzetzf7fi8qup67i5hi1sU7Ujij1yVeqgkLM",
  "key14": "59DZyjJF4LxsP4MoawBn8XFceVkabhiqHy1KnxdgaG8WkCv7q8TyJ4avrPcRMZvoCN8U3EQz3ZddSVbPDitxi2ic",
  "key15": "1bvCsocAqUfZhHD4mwqxiGtPu9BHRtYkcJKagEMY6kXaM6VokFuCQr3GRmweu4MLtq8xk3XWgjUf9L9rHqE7CmT",
  "key16": "3dSdXLhrtuiwzybdmt6czMxAB4ddCFZbSYbs5P8CKu7ZieMcod6WSNJonDuMrrrDQsS7TG6N5d2x418yiYhn3Fs",
  "key17": "5mdz5bSTXEGNsMqSoRosQL4xNTp3mrDAb2jm8rFqui7vuNTwfgpSeNKETA2cwkHCCka6yy7p69BRyk7Tp1RfQeHR",
  "key18": "59nF9NpHGYYwbEiNJtP6mNAeRqNu43mou8DtFzzHke7vUqU4cTVoTZBfDs3CF7AaRb2MWQamL2azvhvikNsXV4FX",
  "key19": "4E9fugkYurVLdACWJodveFS17wCHDhN3zMpRSxnuKSs5MRtewdxWHKt97EWrLtGxsTWJn9vmxoDqeqMzyig2bGBM",
  "key20": "2R3BZUpaGBtQ7iaqsMHDvNPbgbtKYBF34QuyVstbxmJLz9SfH84zEWQ3UuPEcrLoVos7uZy2hjJp3yqESvB7e6qA",
  "key21": "2RQCrwxjCyrzJyTvqhLUxAeAxZxaTDBbGP4ZdjwjMdzWR2eLHqfBR9AYoDcf12DkHk8PdZ69CDeT6Jx8jdXuYYug",
  "key22": "4ixq9VuCFmozSRc7Lt315avL4Gg5UoXt3w1Cq8FrApyNoFiTm5DyHnDiVavsQrKeiYtuSw16Eiomv4h5iAj7Z1qV",
  "key23": "uCmsQriuq6vu91ERUyFKxY4NuXN9SnhAFSVyEL6JKtBgRHZ4rXPD8T93s8LuXYGM9G21eYJu6nZqgQUDZBcxRQj",
  "key24": "5Pri9a1PF4zjC8aahgRkoHvxiXpXSfBroKPTomcRiKfr6hyT1V4qar8aGxY8brP61sx7JgZ6deQXyMoT1U5LSmqJ",
  "key25": "9XMa6fBpc5Ws1UATMLm6wZNFBYGH3KjE3goQHz2npxmNEGVx7JzSbeo3vKf9HJcbPkiT6WpJmBjVGVchvz6DXWQ",
  "key26": "4CT4K7DWxqW6x9c3ueE5GZ6UpaNHdn7j4vMEdYiZCmDDb1ZdydPdnHBSYGq9K33pPRyh1wd7ypVBLruNWMvWGsbN",
  "key27": "Y7zVRBKWMwBR4fbcuLymPiPNq9qHffXTKpRLQwn6mPhvUy1DRn7T42rGxkuUrBZg9cUaHkSoUnMggLmyEN8gXNu",
  "key28": "fSwtocLDzddyL9cbtkvDjCDEwpAU3LLBnYiUhFpk9ys25Tsxj2aE6CxWxKn2gjVRFRKXyvsbuGRxSoW84kfeUNq",
  "key29": "52TxTo4VaeWS5ki2MR8vw1EvE66MCB3RdfWyrSmL6G3QVXGU4YBmDXFZm99J2Uv9C5QiQt2naxM1r1auXE5hCimz",
  "key30": "3WUrM5wGzc4scStv56QqUvbdujJbiH6URkGDgQqHyXX6c8ysNQqW9pC94W5GmBRxkaULoAwGaT4vAAVWkoitjmsP",
  "key31": "a8W1PibhvLjkESq9Eq5BYqKCJr7Kd9WbCQEviJSoc83qq3FBPv47SE7yKU2XRHarKicqfRDwcXi2jZw195DGSTJ"
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
