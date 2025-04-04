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
    "3Ga8HwK8ShCQyyfWqVVaJTLt7p9daApRaLKdEuSEPZEBS5B4W5JKMUp5mLu4radFhECyvURshYvAHMpFVSqGA85Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqov48PEEPoJ3TD43auXkE8enc3DLuxzELnaKuPsHqDuMMUGNRCFfVGu1m67uJ5eNZkz5KtBV17Md3mjnUdBksj",
  "key1": "5NvKQG1CC3juSphkjPUNXArnV1gV9KBkKQdNo2nJBbUpRzVep4zgGE7zHqXoFJ29Ve7UoGBzbEiNZvNVPLTo8PEp",
  "key2": "4RbMZHQxNr22Au3ZaGZHZM6g1UAVaeTJp44PwUUz1CPSFQw1xdX8cyxEKK2MpeKU3j4KV4DmufYst33ZH5ZVx4Wq",
  "key3": "2C97ZkPihLV7R1pSYRgzcAqKewVFaxzVj4A8s9unamJjj4f5upK9EAWzB3QMJkzFLqRY6kZ5Wdq9t7iXHT6XcaaM",
  "key4": "PrcCaDJ9RdgAxRn92wFvvjVtTRb7XbZDfMG7jcHa8r1JbDGgk7AbBMwEwKmEszWzUAtGwgrXfzPo1a5gQTGZog2",
  "key5": "5VzaT6UE7gW3FeK7nEmJj5r9AjSTsCwVVTtK5gVFf5YhnQw9dwhPhSRb86ovrYvuAepLADpuFj2GMnQ2uBAXA6sk",
  "key6": "4bhJWgNgGzM9KjC42Dh6NxVw9Z2mLUcX4CvJjy7r8o8oscXBxhE6Y1BnZZXDxDLu1caSgELdX75WibpeeFWEkZZU",
  "key7": "46bUwmEk3VahYu8U3kDfB3BqP95gM4Yf3N5ZN3PFp22PaFj98dFcHvQKUZBArf4q4EMeBNsJ6R9H3myYxDqd6K7A",
  "key8": "dYb4n69huXfX2mt6VdbysJJNCEbwyspyq6pEfbXTSRBRFUkxRw5GFtERmXCUd8Qc3kz9vpDNAABgFZGZ21Qi3Nf",
  "key9": "37FU1gDCqNSyLedYBaSVn4J8F3NpA4wevWfqSXqMsQ9c7Ws2ckFVyAvd5MLfwfLDqXbD32J6YonSxGifKfWhPt4i",
  "key10": "39L7J7e16eQRve7Njeq7riSBv4ecgZYBEvPWko8Tx7AWoeSeA7sQcTxm4Wfz7zeGLsdmbGnjwrKq1iNrL5UsyMLu",
  "key11": "3fxdzEFrRKn2zZ33UBhdmusydEgWoimsPuLjBgGCvyoz61GeTuXpXYmetnQkJXQe5pcGF7ShKSoAtBFqSqTDf1w7",
  "key12": "2ka1fq8Xd2R9ccvaDirenESP7aDi6raM5MnYVmydHLAUFWdmtjcQKg4xZfZ1w4ETNrq4Ztqa5EPdtpDfVeioqajj",
  "key13": "EpDEefERgMFmswEF2Lyv9copPMnXyeJ6sT1kNLNxhvLpzVKwBFqvLab9BcY6K5nuvmssUy7qrvX35XymRuFg471",
  "key14": "2vafmpYZWR5bGCrD8gW8TovnM5zHmcdshr3px5PKRm5BdBoouRYYNwkfLwr8H9yKcepXFjamoLMMweMDrjZpWw5r",
  "key15": "3kpYeKiobWhq3svWzpiU6XkrrnzuRx73YJ478i6fn9gdmZVA6AQNrxTqR9WCHFwsCTGebXqzXkK2jDq5XcJm8dgf",
  "key16": "48uWy3oLN1EPFfcfEUmiGkBGQe4mVScr3uPW5Le1HDy6jeW5r4xFySWGGeGZDSoQGgn1VmypRSM4fppeG8xWaqiF",
  "key17": "4VYeiYUCz9UfUBqUccSGwMhvXSxjvSEJuYQN1doSovQcCahmHseV4LcYHrnFNxGXetMAHUEvPFgmiMYnYmY17uMN",
  "key18": "6jeFzfyXrmECiMTpMzw4KYff2QCQ8q9aDk9iJRU1JevZmohjDTsK1Ndehx8iAJBV5ur6LmVQgYewR1JiGMLSRtd",
  "key19": "2W7bV6d7u6dZFXSTdgkKEuCkfw63BPXczgvLNS4YVd9GYRXrvdxAgsJj7kwHqemLjMfRjxASrLtvPWjfvsd2S12C",
  "key20": "4aQdoPUrr8E1mPeisr3rnAPAkUitD1vgtJvvs7cWEASa3iQ5N7hcF4ysCjDTQopLyE8jnEAaW4icTFPaBAWMpXgJ",
  "key21": "4V3AgnsrMMHVf5kmCLs1tmk4pdfP7AD2tSWQ2uQtXPivbuNAYxwaMDq9Mv8TYvnWhJ3MSnw6rcdJsnHLecopc8h",
  "key22": "2ERjBpzwvYTJhycwrXckw1vi5iQrXymCuK1BKWcHRUPRD9NiWLN6F7PfhdU9om8G8jySfwTfccVbz7y7JQj7gzZv",
  "key23": "MkojpPmQUWefGvFdUCT8YUc2Qn8XFUiSoQuwwsxoVUGo8HMqd9f4rt1vobq6SrXNYCEYeYZzjhxowjxEizUZpES",
  "key24": "39kvryThUKRc369adrcfDAwRH1WhYPzq1y4nFLTckBKysSNP5WJXX3fGokp8ou1vCMUYoMu7GxbJgDKA7agT8YG5",
  "key25": "2XCf7tazPj7PUL2BXGUQFNWDXuUXpUp3De7xqTLNvp5sr9Nn2vDWKwfKGMaqAU5r5Sfhy8zunKZaQVxYuydH36i1",
  "key26": "2MLJCoZNCBojVpecKRcZmvH1pbVApGsugv5xTEsj72stvtd5T98pZgaDenrCj8fqExivs8FtWCWGqT2E5Amcs8WD",
  "key27": "4vtwxYULjYj1fX2NnacjEjWQY2iSqAeu7Lutgwu6yo78BTDN1BVHDvYetaW9GbCWWQfAFhkByvxVWFmAsby6bn4x",
  "key28": "3LxPMv7PzH6HimDE5ay8dsDWToukCEdjYH3uswCczayrAKsjtjPWtneiL22CGNQgjYNPFmbDm8boK9q7GFfQy3ZR",
  "key29": "3ipaMXfhhnXUzqiRPwpD4mSaJazXTijPtnUgXyw5yoABtpamXAPsdNEDGxEHuGZhuYEGmqjbt2tbktjihNUQG4Tu",
  "key30": "45KBkywqyDcMctmZ5yE9GmJSqijjZptfQTkTPZPHRm8wwWqXEo3EiFSpVQcaP9sxyqLXZCN6JX9ePorTyBdK2wGQ",
  "key31": "3DoxxiqV8iiGyaRBrtoq37R7yWeTRs179BcvATJjigv9cAUHB3YSjsxNchSVrWsNcUHD4a9wQqq3SBbNWPK1LymM",
  "key32": "4PJvRLS2uDeSyd5XV4ep7oEfTPBXANqjS6fxcJCnPR81gihagwJL61xN6yK7sMd6R6LonJULXHkHY2PuoQpigwLt",
  "key33": "5McJPjtMTDHY5AHQPYJpxMyJYUuEt9yivokzqu99TGUVxMkrAvhUSotqsGXLLfpxmKurkzTKrZn4BoN6awQejowv",
  "key34": "5WQGyTPRMhPpouee7git3q7bhetH5ipVHS8tVUJvHr6T4nRLjRauJuNfsu1pwobg8NT5oA6WrbVD1o7TnA58VXbm",
  "key35": "3uNFD1P3wd3x42QeBKFi8MkhaZKiMirNj5YMyrS48fQMsSDzDEKScWoRjaasdXmC5KH3ALnGWmxo4WX8mZhWiBco",
  "key36": "C8SJVnb6ezUWjxmNp4VHF5nabyg4mJ7bHDFT914mj1pMWcGFJPh64Jnqh5Q1x1Tb1bq43h3rYxZzSvP39GxJJv4",
  "key37": "4gnpkSY6ANEan37VHZ1Mwf15opTgXEFEKFFdhY5uM7RBa5ajrsqWZMov6cH42VaRbXPzinMfANnmu6W9wRZ6sz9x"
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
