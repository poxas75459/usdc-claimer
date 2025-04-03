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
    "iSL4tXTf3H1bHRgQVKSwu99JaUGCf5SbEFdZpste6RctxjHbeDSTob1p92F88hgyt4EfoaPu44N3czFZdwn33r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AU5PscRn5u8exxFbjQgqikjWo94PpzLkyyd5BNvtY9tht1Fqxrk9ZMFLdRcQYCy5rVjWeY6CmbVwHMhdwcR72y4",
  "key1": "41sHF1QmhYBDZmPXESPKdneSSwymhBFqXJa9uHyKf4KYCraNuyHA4MuySnUrZJAsPJngzaqhaddsWwocBjKbCt5E",
  "key2": "2H4pkpFzH8LSiVztrtdxJ9ycoEwsqHfJK9Mfvcr8qzenL7aXjpUnGo5WdmtFAL2UfqyZvEihQXjEUfzhCK1fQxcu",
  "key3": "wTzzFN6EJ54u9cYdsgfNLsvQvJWAu5NHd8YECUm5wte4KMpP1NDWrm4yYGNbtKMEeUnJWgAZQTqtVdF7QGBm3Dw",
  "key4": "fAWMNNzeDqPLBDsQG58mXZscortgzuhbBwXsryXLcWKMuSsWp6TRekG3VQtk1ajyQPS3bMKm2h1bchrDn1U77m3",
  "key5": "3uoLRJ19smfzzP4doKYCCpkWX6S8LSJbJzGhuhvW7Gouu1yj3qdqiXxkDFe3uUW6pPxLoD3vniyM8PY2aB6cmYgd",
  "key6": "2NQ1d4z4cd4ozjBc3e2nRQaPp94vQNDFkB41xqSrACbPxmZGAEfNG6MarihsMNMyuRjCfUvWV6hcxTTWfcX2QEut",
  "key7": "3JaYeU32ZShe79Z7QJqytzXksWtQFxEnQeESgWpkxAp8jNSkmbcL1UyjKwm1FyGamH1KP7G1USonPsPNykXSzAX4",
  "key8": "9qTu3j4LKMhvjPcaaVxctuMNd5Gg2mTh1SXyb2jzyQJqUH6EkteTackcnMiS3yr7UgRHiy53V5jdtyGxtaW72Ph",
  "key9": "327WP33VFiXj7EhoZmbw51stBudqavRxSGYMP7ZCVPHnUjvr1zgGMazrRTuWmQWfbs8xAtjyQ6xqiz7TDnbj69qn",
  "key10": "2aseWif6n5ULi3eWtAwGhsGkHJmH9qCfXzGSjRsENfe6bN6ervaZpy4AnZFd23cdkTWj1Gz8z2cRLxPWWsUu3uZJ",
  "key11": "3JkXmBws3y995xjkJqTePdfoRipVSUTRv5ABkF5iXUzWYa1Ud3YXgpRK2q36KEH3HD6V2Bh5XwzKyuA85emzYwEp",
  "key12": "5wNavnzPhYeqYUsw3iuoxUWF6eZkPVDbvCzGgYpLyZH2fX7Gt6RYZXD5zfjWKsiNnfkwuiVoaTCm5TJA5MU3fgrZ",
  "key13": "64xt87eUSZXHvkFBKS8qBBxtUXAk8xTFhdiWgpj2L35VsXaW7jty9uHqhpFBVJMcHPBj4tumwLUdP9cg6W55qPqy",
  "key14": "3QEoB96KxKuQW31wRg1uV5pn4mTcfwAqTiV2UkpKjcAnc8G1PzzgBdmraDmHPr4t1TLKpUzpprxtpkwksSPmuUje",
  "key15": "wimiQswAraKYgFp9nbNfTQqHSYAe76bGPCfsd6wtMhJ5vybeHcqWaWcyP2n2FujF2Ba4P5QeqUD17z2VNHTzLvK",
  "key16": "3drVSx9KLMTR2WjUg7xT4ShVd2iELSqyc2PN83gkgkxi6WLCMQMgmYRiJS8cU1TwGUHbtBVtCwmKzFgainPf2Ziq",
  "key17": "HdhyEiV9UfpiUHuGX1rcdKe4ip43ub2U4sMNbcKVPRAN2vvFbZxwjXL9An2mYKVh48fspWPWLVPspF6nHeiJFtu",
  "key18": "29GHVVueHqP3rKW4SLSbabZ8fLLQLFUyRfJZe1rikPpurKcTo3VLpuJ5myy2BUU79JW8NzbCWxJBUunm5n8zBzNM",
  "key19": "3o6UHkB39XuFiNZU4BYVSXF8kpxoKTxiaKaWLRVmUDfPUBiYTZGsdjdpE4MFym8AaqSe6W12GYW5e2m5E46Yubv5",
  "key20": "2zNCVWvYm7KzR2UjeqrfXBbGspfgRNdH3BkCa2WKHQmbHR6pHd88Fm5Cqceu2v6emxrEGL7WU2FEKUchT27nZj5k",
  "key21": "4Hkdvex48i5KVmDaFkvi6bYdQtHEoJZLtYPia6YbQDoztKHX58LLXj7EmS7uUzYW3UiUq7raPeNfhYwtZsiZwmps",
  "key22": "4tvSGUMxSnwMGvMBYAyqZpPLKXcwbNWkUHHPXSveA8ahEPQiZ2fsoxhBsdktpADsFbkqEe9TBZXo35bFL1Qin3zG",
  "key23": "ik3AgnXuEUgvupV2dhknvfTskegCrWgzkZxuozcN8FKmeWPVSZS1BKTQJBYgYSkkL4fsLW1daDNnkX36kgj35Yk",
  "key24": "4ASzCnRBNJFhxuXsL3NKmPTyjtT4CBPQ36S3bBaaJfPYJbum531pZmXZPGczMjqqiWnmuPEmVbqLGdZ3Ljo2UBru",
  "key25": "3qJUZLHJ2kg74mnPNTDxH5UZhiVdJZGy3z4o71xS693XDqxQ4nZngsDV4utq81grK5SwmUALCcZnr4sfWKuRnYzd",
  "key26": "5Y3vK7zNP9372X1PL2zU8DmHPVg4d9Ey3tBrZXbFi4LsCU9gNm5JYT74hgpfc5RTQgu3N8mGsf6Ri4oG24YsTkxs",
  "key27": "2SNvRmP17m44KijJ3WDbRd8vAnUisrkEfiaxqS7zZqWDbD5iQzsF9KSd1zSbxcAkq3rBuGtfcofudX8zhLyJc6nu",
  "key28": "4WWvGfq4D1HgPNQ3bzrwmrAvDtZ4BatoQXuWjt7LJAvZPwZvdB1Y33KPMp3Nj35WwzshyY3TK3ocW5CwjEiofPdf",
  "key29": "2arNvN1vBmLuEZu1XkBvTYJ7CVVYM1aSPxGfNhLzVsx2ADD7tbMtwA9nmSD4NmZr3WxLSRVcA2NRgR2QjyL3mJHw",
  "key30": "3CQSiwWQnjYHofVKQbh2t6nfP3moG884h5zjMs8PVhmw2ye4bXs648fvhWj3dzcTj1jk6s1bDZ21KpGJgyFabya",
  "key31": "44nF7pwJVpqYgjuJ5GKXH7CXGJKvkUWuFRCtR58if2vUBoymyF7Ree9bf3DukpMq8avavABug3UqBdGWEfKttKvp",
  "key32": "5Rtwnxf1jGtGV5FZUEdLKJnhsv4M377U6m9DogGqcLRBA7Pqpsrg6LzsTRJ91pLA6AxsVeABF8FZJX7bWjvDxr2i",
  "key33": "5d47FeNRDa8KoaYoPUfFWwzUPiGiBu7VeRfgu72xT4zXLDeX9M15wKGUsnp3C9nkKhmRzJ4Nwhq94qgL8WvtxMFz"
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
