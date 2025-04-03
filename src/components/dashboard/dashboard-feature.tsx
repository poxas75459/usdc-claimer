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
    "2bCan4jP7xGz5mt3TcSRq2PpsBZqAM2xyKBhLLYw8Jdfw2FyawJ2VBKMRZPcVZwNhMiBZrZqjEVDTRvBf1sNfdaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iA1tn2av5QUEFPEddX2U3vuCyk4JXhniP6wW33nhyZXWStzuNsusLf12wwdskJ7jxZyLXKMhe7x6H9K2SRDDFE9",
  "key1": "22wS8yAHAze232mRP3w2ynkXnEDHD65n2Udr1h2378aREjLELJUkbEKoaVRhEyexnK9iKi1cMXH5jqMq7FpYACY5",
  "key2": "3vrwLsTEepqoq4K4SzvZ4DhsXZTuCvdqjsytYV7R5ovXctCGvQkMci7rJiaH4ZHw3LsRHgYo7N11Rk57gFMQNm1D",
  "key3": "2f5KBE919vJQrP7nGnrrGavCsRSaZhPS2KY94eztKfqN4YxdJxFaDq3JJmYhMhWf1fw7LtFZfeKX7jfCyRigLnCV",
  "key4": "2e92a8Ckmp8SRnyGfF5uMxiSSPDgmHSqd6oQkMzst7Sp6pFxyTf4JCNm2f86Q83y55QDSoccYrqA7HRatsFJmJBm",
  "key5": "5zwwvtGXoo1PSVcQvCCdTvqmKFKiHFKk67LuWFKNJpxvK7ZUz3yDYMxWoeZk9hVm6QDny1qZ3UBqPFX3EjvxxwH2",
  "key6": "TMvseuyV15tXkzCVCJyMUxzaVG8DBd2EyR8Rbg8oNm6Wm8Vpm46KCUn3PdnG95UUee22d4oo6Qmncw1AsqKuHwF",
  "key7": "3eRkvbQw7ZLnMrVANFQXm1d7RsRgZ2MbJk52fFZUDUkee9MEmqv9V2TK2Dhhi2k3o1htFdPkcrZMJLYUXET15RB",
  "key8": "sdbJd2C6QkDMFFWFcwtB5zKa1eBKVT29Wco7dF9U79tQ5AdiTo5VE4LNvWBEmwyWJdBpd8pzpjUkgqJjaTgySKP",
  "key9": "4JCwiMkxffEz5DTWjcVU2BYJXZtuR29TwXyH8Yh2Pa8ffGuemL9GzzyKUXmNAT7C9uLD4eBor4LTCZymtVZez6qj",
  "key10": "3L3zDhvvSRWNY3V1KkNNTVP61N5hxnKqGBKoN9mPj6Tp1Lh4uZHSQBAhPYiPTzVzUdiWDC1pjjEdZHjYEL8Yk6ma",
  "key11": "2S4Z62GLfDgsYyLQyqXyMNeYg221LJbRHyXMU4HYWWbk46KvNPcSZgjT2TaWCHN8gfncv8h2G4NAFWk3ckJ9qMPU",
  "key12": "56sMfHrLfJPWGgDaFeoMo7PWa3j8c5NERyd6JQ53BehSm5Moj5W4dTsjRcuqULsZzrLbxgvhbwRpPwNM6cMTi52z",
  "key13": "2QE8voXjC9okHfrQkivRZvVs1pb1yCcWxRjjfKxdQzQPK6xqeCNPrRrX2oMEvEnuo4AmHLen7Ro7vJo3a1XPhP8Q",
  "key14": "5Ffe8tvxKBFxhthiv8bDBeyfi6kDvKu9aNTAjUwhyGQcRRVjMTdzuhPdUZvu7UBv7U65ycDr6fbWDQZyiWbyjfuk",
  "key15": "4YorvFJfPS3Lb5nbqtHnkgP3tYVLd4PZcigbFy29im1FTwe5ZXnQXP7QHmv5Vm6SAj23QCufui3kQ1EbFznbZUX1",
  "key16": "3KTK6vUvV8WxXvYhnXcU3MPU2auhBKNTgRyPq66MhkH3VLh4pYg8rcfDSXfg8qBXBnYVoVM2MsjnGaNKFs1UEeZd",
  "key17": "eZdA4ycFMtHgWiBBafv4ufMSADNbcNcYB7Wx5J98RAJFAQLwwRysbQhoXeAeDSb9krGZ8xN43jLJmcTKXDdhe12",
  "key18": "HcdJwkLyJGz7vsHqoFcxQ8b7CrnYN9rsimzQoAmxX4MQzmyg5uckaw8pwSDJut76bHFWNzu2Q7aMvcLxTYPWaPa",
  "key19": "5T1A13W8HjFba9Mx3FDDd92SGLW3PNcpsTHStb7QACuLErk3dxbjfN2urA5AqvWT9KEiE4DvWqKn4BNnCkgS83Zs",
  "key20": "y3DAEQMiGwUcESc232UkVDzQgP1Bvd8SjRRDat777BANWgcFgT7ZSx3his4y51pGAkpLVKskLJrmv2uFrqRqXTY",
  "key21": "3ftigNcYFzffuwKhevpGpMcbjHEWpq7vpLfp1cnZ5pCvUFkPef2nSuRK6rfRL8mipfGjcQ5d8fMzRUN2gkor9CGW",
  "key22": "63SnpvK6k4v4KAKKj5Ta72VKSpwTg6fvDrJ3dxaWPPUBiWu8ZD2Uxyn1kr2VLySA6jScweGsqHztXDDZnX2gLz8y",
  "key23": "4QkW29otnFxH9GdJvin4JSg6NZo4oxt7eoMuk1bPD362prgqvWWAYWB99dLcTL2oNy4BGE5Zh9Bt5Pu8qNWwZ8MJ",
  "key24": "5wm4FSFPXFE4eeGiFoBpAhhAsBNSDcQjvT3GfyuXb5soxN4W52iU748ay6RHp2Zkf6a9VRoRbMXNgYMRYaThnX9R",
  "key25": "5LMbuUYXTgh4ZeBhtZCj7ixaQ3NcZrGeMKquEwDgCvthU6YyFYqzNkHMc9SaccD9FAnVzr81SJuwdVfZCBREYt41",
  "key26": "hYcbiPbMLH5pDrddBp2QCLEsGjNpXqwyiEj4dLYDV7Y6FArUD8EdeqjQVG9EaC7fQFx8tHzFKkhUc6Xu3Dcjr9s",
  "key27": "67LStotduRpypPFg8W75o31RUs3m4oGNJ12RCuUSobggySQyhj3dYNLj3Ey3mv8CioPWhfq5oV9hqbMZQZBxCneq"
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
