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
    "5ujrETZ2663ygJCpwfLb9eLRGbEuoK2qJnmn8NREU1zJ4ZnZ7SnTVkwaXPfLmPYyqgi3t1FsNcUSn6yTaVhfeXDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BpLsmwNPqhHLAYiY7QRSPPSs1fyvHsGofpBZ9zvFBZXFXT1ij6366U2fvMa6PW42arMkVmULrdVcSw5MkoFup81",
  "key1": "4wpk9GoCUMc45nRqnvFG7KjrU89a6aTzTtBBTU1Hb3TX2LUodxTGqseTwnFDzbEHwkpKgFSxQZAjg1WB7qoGMDtj",
  "key2": "5VttS9o9nB8AEbqdJz2zTVtNzU85yibYTHWLvQUicZweSgTpeoTUFmeadjAM2XW2iMeJq9Wi8UXT5VNL7QChS9r",
  "key3": "2ibG2ggJLwBD5skZCt7NVJ6CWeBsqTbVTuZAnrwRwwUcrTQX3Mwnr9z4LK7tFaucpgWvqXDS8txSsSv39c7yx1cp",
  "key4": "WwkTnoNRkZTSb8T7NWztEvfPZxqegsZevAvW3XyVsuX7NxaRXznUPwkUrXfFbe7fYvSC1Pv1qsCwNLH95LVNhXU",
  "key5": "LSyz7yqsAUTmUHusj7MmaEfKE8E5vaDan2bZhPobquaLbWx521ph9GiWcADGmtiLRUVsWvH5yBjRNXKixwAebH6",
  "key6": "2EdpiyBXRsj7U61y9XAZsMHov52cHf199AEyxaHebNZknwKxwGgF3vQuwqyFRZDsxJaYkgsxFgci1qds8qQFomHZ",
  "key7": "5gicZEw53Wwzfoo29oMPJw2U9dWQMDjBGJdRendFu65BYzDRbwp9A6f5mki67v2SG2Y79c1Yv6W7H78P8yBAB6MD",
  "key8": "ZyQgHtaK3b3vDGa1PkvKnC4dVjiPe1uu8zmucyQeumdaR6r7rUk48RQiw4XC8w53Y68P4hLb63mPQew3F7x7p3g",
  "key9": "4PYX2BviiwWfzTsrx8an5yThoef2FAtmWJCxg98wVRJXgypgTJeP8Pe9bzBgjEb666LSwLpvUj8ZKhb8kxHqpaFd",
  "key10": "2Ldt6JcMMcrvBqZq2qQEK534PcomyZrU77tc5dyChXzVtfG7Rwk5xttsetkQKHcgQrUSu5EY4JTVujSXv1bn63Ht",
  "key11": "23rTuBKRXf9xtp1PMaTm9Z4oc1Q3k8YdatUjcM1Adqgdn4qvwCigmQxSCvNvZcnKmGfr4YyU2SoxKin7r98UiaaV",
  "key12": "2M1u4oM6h5MX9DbiRkN6RSuPjU3T4sqPP5jkdqUqTYHMxUQXFk1QML7WEpg64vnbqhagTaGZmwRLfkY19HgiR34b",
  "key13": "3ukqAjdi4JwW36HZGDhWrCF5V4bmMxujsyeQ5d1rfp8mBbNbuZvoZvEyDWeWceHHg8umycmEMMxckxXaBc2sbat5",
  "key14": "2BLjcDuchgyV4sjsdD3kzywAyXqiFJyYnA58xr4DpudmrGwrmBRDLtpE18FpKtVNCrY5wg6J5PJr6s9qp9cBxCQY",
  "key15": "3ETViTmoNQyCd6KET52umyr3zfEuyAd8cDy7Hf4Pbohdi1GhbZT8SCBCuk64R8bQ3Qw9376Qm6uxcLwaqJWAjCy",
  "key16": "4o3xGVFNmeXXsJaqRk8VL53oB7WsrcSuMH8L4TrKndV1nWkYxr7b8qPoCkMMuVZB22kUbeX6cB5ku7x5GvzpH7Ud",
  "key17": "25o3mNCSxotrRoqhXF59qckxRUcZU7i5hnCv7h6tUWa9wwz1SRzugWP3RytwfhdGJXTQNrbbyPtEEYnY7nHZ5vF8",
  "key18": "2XjVoxBKnc8Ptg6DH9HD6CvWqMC4kQdCH6q2KDdkq65kbBE7Na9PhvcYYHJZPXtqGky2r94F6jcheGRxHYgyRzUV",
  "key19": "3yzUs6Ao2PcTuoYPhY4yynSExpWdFS5MCpURCLMnEG7HCrp1LtA44Ze99Jh5HmohbSwUXbxxcvXGYzYz41emhbcQ",
  "key20": "M3coxYRqReqKQdGC9s4Lx6qCp3xNP72vY7Maxj18mQtbYbPfGy4vaWP9ANPDDpradb4LjZ9k87WyvwHNdbFdWvJ",
  "key21": "3hiCgTtD7sMgpZVkctQUBVaCtH9BcL36Dw9sEsdRtLoKKwJ6YidXvEMuCmHXHY5kWbLdDq6dTP4QUxkudX1769Sm",
  "key22": "3ndhA4ZCqSFp2CeVSCTskDFjCYDm6ChRfXrjs7GjSbdzViEBw4U1UG9JtsRavHH4cxYWxqsaFUreVHpFTttPzCub",
  "key23": "2XiigWY5QBDXGzPUwbRWdia29vahspDMw8N9jQ99qxG6buLoycqiDc9myZ7a98FQhzfJeW7ykwh1B1MX29xkGsGs",
  "key24": "2NDQf5ZjHE8hMVk2DTMeeY73TQgGM1ENgFx9gmjf42BzJeZ6LZAapn2N1m4zDnY4yU1VWqzHtPjoYurCCK4WryzH",
  "key25": "Nu4HUZ1ssrN8CUauE6ENwJG5bvCYAJY6QsM1eZ8g2gFXq3MUYruzccwt4VXUJKzy12G1nLHubt1bd2Vsjp5gqUB",
  "key26": "B6Z7urG1pQusoBYvFwXLTtfKdYrjk178vcoxavWSZjpm7RHhBD5mnW1JQtFicUrkCTCLMd89YRrcWz7y66HzVeP",
  "key27": "2wSkRCpSftLu1zZEUCUjwoYybbAcKEsgkkBJSg8ZjrgEdLYHxwHXU8u1HGrNgK3HSRaoi1dRaJpcDrLPTdZyWNyV",
  "key28": "9x5WUw2PWUEhckozqhhCra5gm6YLfVAFzzD67NPqJquUgriJz3fQVkHKiYf2xM3rsuF3rA8pJHMLC6SJxUdFXe7",
  "key29": "4ZiD1YacfVh37Dr3ty6NASXEUCHvtaTWGnLCbhjBRd7obQWG1twDHyQtkunDgaUV8pknZxUWisZnPyvaoRvPSLmT",
  "key30": "55evszzAZuZZhKgcxNM7K3anpnRwL63XTCCuHNTZaeP9TWRBVXyNBMW15nu1JmYmNkPG9eKK4bkTwnz2ffTz97y4",
  "key31": "3bmBH9Ke6LJ5sWVhRwv3ammS6kBkCnncbSZyJmvghwNzJrFfcx1YS1R97fqrQuajPVuXQFRDkGkuNTUrqe1EcKSf",
  "key32": "24xKXhNcSRMWinhgqpj4ZCkmpUXL1yYJmzqygRjJkKTwZRem9S12iVTrQFhTfAgoZ3f2boxwE1zu61Z16rLk28Mi",
  "key33": "3rgtWM6wvJG7m7ZdXcHpSmQkzQbmFCGr1V8wFMAtADJu5ABVpPw9zhxD3HoBKKdmy6BdKKrkt7Cdjc9Uq2Xq8t1D",
  "key34": "3vycGSJdwuQz6mBgmU2jod6ADJSJuN3JcjUTwT9Wgcy8zJTv55ZGZBKcRSq9zjEZCNvp3bZfQZ5UM5fM5cPQKaU8",
  "key35": "5dQ5TrZ24T45ezpx8kL2r1MrF2BWPiFNpUfw5iUnaccV9C5rW5JNLKKN4BbrnFK19tZLMzfNPprQjKoQiPMfSg1p",
  "key36": "24mjJnQ9r1UyKsdMQyVKGjaBKJFgy3zR4mJ3vBCutpubZwXV4ZSFmVSQGEZ4h7jxqjFHzc4kuW1u3PJ1QnPHdGPJ"
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
