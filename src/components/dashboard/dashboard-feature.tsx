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
    "4BLMqi2PcnuDxj2TbNS1jmerYCBZwREpAHLccJucEveEZeq2eaNxJLXKFD6SEbtFMGCrE5Rrp7Lg4jW5EchL42tD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nU9z2sdfXXDEYU7Ku5dhQbQdkN6VYJNNGKqDzBK8H41xMWxy2bBHhKvMb4mdVhvdw6R999C5zgS92zgtK3XEV6",
  "key1": "5HJJLDUxroZY9yZdVuNgHxQ82Kmt5oWb3aKvy6tZerAWFKcrWZCQxAvKcKk8Hqig4nawGApBeHvzhTfnSGqhfnah",
  "key2": "35UBgEauYWQZBbsMUZb3WH2ZrkTvng6QT4fPT6zTf3HZFvh4ruahFdbkCEUJo44i7uFbWow4EDwJWytrGcbFjy9f",
  "key3": "3uni3r6Cx8u1nuK3ynZciYEZsfjBZbCALDKAPQFi1VmPvQBRNtuxUWfRG5qjZn2HhFPeS1weeCajgYrMDo29rfEw",
  "key4": "2ZcLw8AF7HViz3RaXGojUWiGJy6gigVqgL4AuVWm1bipTFrL2cycyUYnsFYYfxaMywsbUkXAJPo7RfUgfAnJ4KaK",
  "key5": "3w8od4sKxgieEAqcSmCFW8V7cCqvnAhS5BNSbcuxUhLG4e1WfkSD2rfy21Yhn6UxDWSB6WJSs21p9mGu7K4QZnY1",
  "key6": "2RzwgW1cesu5xPxah45JMFVonP6bktiZjark5Sy3yzfnKM4RPcLxvnwLSC9Nd7Jw6yJqofKaSFLE3ap5Wo2sGz4t",
  "key7": "3xPzXbPNWHswT8Rs44FG4hcguZFH7jvoH5WJW4M4m7DV5LQ6Scs8oG1nSQkYC6h2UD19fxNXZM9NmJJW7h6Zt5wB",
  "key8": "3CcipDX8pKoCYegS7GyvYTL4Z9PH8RZ3eVmh5iyAUj9JyrwMTDd5qVQvakKo9K5EbdFb3DvmxtwxDxvk1LB7Zr71",
  "key9": "3jaT7P2fCmFNg4W8GADAMgRvhAhqEmPj9teq42V6zfVPeAQPkx1FbDKj22DjyzNhB5pmGvN5XdMH1GP4LTfugc3J",
  "key10": "4dLnUu4WQndJcRossn4Ac2WrjJRg3m27XNJetSiyC1qGDQHP4CJ95EB7k4HVtpue4AG8nNVAvqgXtzfQoKrNh6xc",
  "key11": "2rwTyqmr5JdUryG2bzFuCKngZuvajrDCqTp2ZVd1b5SHiW3D9KqBrzs6Eobrf97eZXjyPQxsFZ86AzhkWghnPjSH",
  "key12": "2TkYs7oKDF1H3qj8gcyZoCHKKdJmL7TaUfdpzW4VjSQP8M52w9QwjiVVXYGde91QVikceyBb2ZppP79SLsavWkSC",
  "key13": "2Sh2dG5tBhpAW9AeQ9u9UPhcgHRjeJ9hdcUh4b1xLxLECyUehsSy5DX5WSrJW3aYjWEZwQmHhoCmHKhuucvcAMf2",
  "key14": "gtzGst76boL8oQErKWYUZVYNyWgs3gJjNsXsFSwvc8wwh6HJVyxHgctmqzpzrYroCy4r6wWdPPjKowKagZ7dqas",
  "key15": "2oW9w3M8WzkaTUnu2TfBy7AuTMD7vdeS3nkG2EndhRFW7UrSbfJMviKozef4SWU8an45CNhPzkyu5XArD431SaNU",
  "key16": "2Li1LqyyCDpWyAYMKt9Nf1J5AzY5B8FyzsRENsHM6z5hEDigjia4DcGrBGmeLMz2Yd9By5TunzG31JN5WFCFnAU2",
  "key17": "5EywAi7Xh2hMhjSNwshXFfJ7HpKEKWEUx3qUnBEZV7rU9S6dRrbVsTMYpMkT4zHuKveVhJu5LXrCsxf2pAm5SRMu",
  "key18": "4dK8xkCazBJcmHuPLdr18YpqwmjcwQ3jHWJdPxojjesoReN54gCmhgeU479Go7yhQUd8SAmvkbTdHeiEg57zfYc2",
  "key19": "2VrR9miT3TEbH2ePpRNLFuWLLWFLiMPSmtD3Mm8dbwStoXstNU8YEZ7ZTM6ixi9bcWL24e8P9QUqDv4jw9nGP6w7",
  "key20": "K7t952DLu35ws5ABLhmbchaNG3jrqHQg9FVtPrFvGGyD1nH7tjyu43U81x9MvHoH1suz6ZJ22JePJHjhqf7a337",
  "key21": "26zNHuFjpEAf7E37VJRjjgUDRqS84CUqeVWy2ZGFPSQqhyvAs4dTgd8dEaUL67QcwmpszZ3mgWj7vuR7yXCZBh1R",
  "key22": "4a1NuEe7XF37SfA5BYo7ejBrduBitKpHMpSMvqBwjuBSJQYD4xrFYBP3XC8vUN3f3CYWKwec88WMCLFpXFp2RXxL",
  "key23": "312Y6uY5FL3e6M1b3emrJjWo6uqmDYnRMYRCwM7SRKjXe3R1LhwTKK2HxeSXWkxeJKtX8KeMH21wH5iRz3dEzhRJ",
  "key24": "3XsFSdGpJEGSbRHDeH5UxDVYZ51FQWZWVorittTBJrWthphxHxEzQAqaSfQU6buq5HuSA86TiCMA9vHFHeGkEmxz",
  "key25": "3SSdpZJomCRS8yruCceUaW6wE8T1UJr46JSCayGYgzdS2AWBhqvhxKm2vSWeqx7McPpQfkat3KpHSv3f9ZdCj4ch",
  "key26": "3VcZsBx3YdMhSbHWRwG4cdJovds8g1nkPaERBVp49kEsV7ZU6r57WuBWfLs8YioFwoeD9nXN6BffFHNphj1bg7zx",
  "key27": "4SXPMLbie4UaRHckmADuRTFqHpgBeZUwFsiZEho9xaLAp9ywvbakWJWKDruo7wYT6qwRYmLeDyvC41J5AmFvEFQo"
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
