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
    "2kMcFFwneCPYF4TyEZo3roZ95TDkmV2YSAB5WpBf4bQwHpP42dYyJuqPYKTHcJosZmLviLSJwNLJY7ppNxUywDfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwQWuCvhAFhF8nfSYJ3kGe8oLvBfUDgvZ77RXZtSSSXEkQHER7hcLGzcaWN97tpmArSdsjyenb8mtSN7CJL2Lci",
  "key1": "xdb9CfFhdceixoMFSZ1mV68mM1rxiYBXw7AT9zVLe86CJELqAmCH882F7xkjey7h3Ji3dKUmL8YWa7AwMEGX5io",
  "key2": "2APxHSyNTmK96dLHBY6N9snAeaoztTgkQ6rRL9vHFqdyTX12ZiTLxWVBfuQir3ekQ7LhiQZ971TWWMaom4pwQUjH",
  "key3": "32sDd3dBrVYk2Li4CpdfbsiGxtgFV8dTVUXwDgdKgXxbzBwy9XnSUPpbiRVmHYxuPGkhFzft2dw747qTMVMPoLQD",
  "key4": "35e4C6JUAz7JDMMykqaXWJgkam8q7D2mJe48nESRM7rvWMzc7jERFabT2bRCdRuMHLPkT6ZuJaTszFvRMQJ7aDK6",
  "key5": "3na4MkKQnKXicUJry9Krs6Bu6n5Z9sHmzGwwpKaFrZmfa8czDeDtHf8mpbFqcc7AqNN9ojXbDVcrw6f7vS1oPupV",
  "key6": "62M9uoLDZqnaVam7sDfzNHNEt1ksifX3vSHN1cGM3hLCN8mQvyGiKLzdRahFjnzY2aMGpwsRE6Mztk5PEpqQDVD4",
  "key7": "3oFReZfRvwQD3LdWXyvin7J7crghefNTQDNn38goJ6mGyBfTM7Fu5a7SWrcBqYB5DrBqe3YW2twy8t75p7MFvq71",
  "key8": "2kuv9kmqNFfyXKzzWCthEii9BrFWkHYa1HnJkbDbmbSFinSYPuHSHcXHAmFKAwmyU4SnCpBWgJX7h3sFxzr3Pc5F",
  "key9": "yzxECPq4K3k4eD3TKuNJcGHsDw5mkbEdvCF7dprMuEUf2Gut1UU8afpP1jS1UQeZnCt7tnEq2eLyzWj9fmxEKZp",
  "key10": "2KKre1oyuwGci1aLDPnpNNXw3vBzSi1Ga7Rs1mY3LTwr4uzzHurcRMDJvuQrGNJWXg9szLYSsvKK7SH6P4fGiabu",
  "key11": "ehHKzLSg5ZL5EKNyJjmtD5zpkycFwFXkHUmmmrgDwXGY2PHZHNpYFKwPHWcAe9rUP1Jtqa2jaeDe6cDSX31tyMg",
  "key12": "47RzZdDqMBEaE3EtR4no5gao7MVweSvgBbYxMyFZYTvybvKFkN3AMVxNgVWExCGidPUDNuTpkv7o4fDCQTkay97Y",
  "key13": "5UiSwjfQPGKkFxk1jDenH475DweSKrYQZ87tdbfBEaqtKZoMh1hnYvHivkjcHfS6eBZ9AB8Xca2wLYunUadVQZKY",
  "key14": "3ogUSQtDwHJDQc62X5XuHRmtK5SUXSSDrSEJFBpEgYpT3c8kFcqmsgEpGLJpbdTDcdRyN6mDBQh92j1mwnDFdzRN",
  "key15": "4w37kK8LXuNKs4Uqm1AHK9gWVDzCpm1vF9ZjK2GBKRBL9ZiCVcwytWdpC9UNs5HDtsYM4CauB9kJMt3931r8eanb",
  "key16": "3YN3z79UA9TmUuAMa9mnkL8o9sUFPvxB3ZcL8R83xK1Ru7GVGCaAYqdee2F11pNW6ufcC39zmxU9HeCk1q9kDprb",
  "key17": "448ax9E9pQ3fRrsRRPFjUG39xjcqju4ecf7ZTXg5hjECjnocAvDwrxQ1k9LrYL3JnbtUPVvnPoVoWuz2NnjDUMhd",
  "key18": "MpVshRPDkY49aPCv6wC2uP77WUkGZFsbC4eqoo3rB8HhdPsw9KV53mAdNsnzemMBc7EAEdCKGLuQzMvZ7pzZSXb",
  "key19": "2XEkx36aTC8aD5PGmMrBNnuFKg4PsN85WGLjxADzKMC1fNTkTT11CVWiMYet6G2jowMuyDpRGLa4rFXBmXqxHH2F",
  "key20": "29cMuXF2w71cLoNsx851LXjcxfCwZVP3FGMG2PohExq8RY4tofsEyHwEg8aB3gLwyN7yvMi1SFk3uP6dHmVXEz15",
  "key21": "3cwcddDH5Y4zYKnmU8GGNepG3YLcBrxn9eFNRt6eVA2dppcPAFXonk1YtmmVV4PBHu7EgnDzYJCZjz5n2gvyxQPB",
  "key22": "cyaEuQWBpRKSLJGZ4SXub8rE2yEjhBkMz2dkXz1wJEF85fE7J3eMq3LmacTradsfmNvaSMV7o6BTaDC8QpYotFu",
  "key23": "3KqySb3zEuG6o9vn2SZUzeoEvWDofPmQrocRjUDe4Q3bFAuTW8hQm6gJgZZq3McBkQuahuFYETaDRKtd4UqD3Dmm",
  "key24": "3n8MAzcsCFMgorYL4yzhwGTiNzf18E8zg3zSfgNCYwsFAWQDwSru4aSLCocRxaTmiGz2BfEjULzjk8PSnTWyTV5g",
  "key25": "22FmcFtnYr7HUjFLEz2KD6bLv3ZsauyEJfewRdmQ54w5yvWoNNPYszQxTeNTBTv3u2DbpMmXAGuuVa3Xa3RMQU7h",
  "key26": "cDafcZ3GrszZhoSFKxcA1q7HVq3mGEgsLFbrZdgCoUUfqzuUxmFUx6LKCMSQiPE1ZX1hDoXUxx7YpQbkEdnV7LZ",
  "key27": "4MkH7m3bMThRJoMk7dudV781fFzpWPcw2fKzcUiixgWmrMvBhGSiikQizkpofL3PsSvM9JxZ2myvApfEamih1wgm",
  "key28": "3bYgPcgdHRJgGd4CUK5cQgaWvpKxSe9XR6x1jauHV2tFAspDd7UZWzLqLMg7cX4tfYh6Accx1pTPPzxvs11ZLCqn",
  "key29": "5E4LZUuWRaJRcpX61CdhhjGhg1SDPXDSPuRdp8sqSqW1rAUKuDJ9GGUfZMFqDedHLP8ZBBzrjSXAxKSjZuniEFuv",
  "key30": "3Nxd16SQAUXoETdvT2eRiVD1qFKL33x3LbcqRhGQXB6NeCveiQiS9chwBCVF6Vo9n1hSdggPxD4DRvY5L57T2Hsq",
  "key31": "kjcC3TiGrua97S8iYuPe96ppLoud8jW8tScrhNLJY16man6FB5Q2xrr1m9y25P7RggXek28hqgJxBcCcDHC83tK",
  "key32": "3HKLvwgjnsmsZitvJ6ike6rupaJT4rHFkhLwPhYLer6tq52syhY48TgH85Cbf8cmzQDeuUvkaauiTswZZv91QTEC",
  "key33": "3kLXiJN48RzPm5be7LUPYNX5ZCNXM7DtBmQyYvMerhbJpnu4zi5nL2mA8EwZ6HqN9XGucsra3QZLc62H9hN6fCpj",
  "key34": "5ExaGWxHden36vEstzcy17QDcauaqCdxzse4D6dc3M5unD1CtSsQ5jicLKgkcQPFXp2Xb2EnRm4a5wX19fgpXKJ5"
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
