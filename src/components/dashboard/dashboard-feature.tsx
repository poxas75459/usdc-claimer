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
    "9t41nnDNJYZNz6a8NmBa5TBe8Z8bni3PBg1g9bXPKnZNPguxiEckqCYtJhDoRwRytv9o3g27ghi4Tajk3qDGxem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r9A7HU1HdXRutFhwPEDRD8eBs8MkMhhHg3dH2xG3Sx93UHdMasY61sjAzGUmmY4YpaxFZm8UhsxgEPTPcE6dSz6",
  "key1": "37KLai3KpqBVXknnidPTwMBoHckYLxnYNVw6UxncRvYMaihXSsQJw3G9EVCWjnGPVK2G4k2hSttywQqHtc3wUt99",
  "key2": "5eZynkHw5XnxiTPzET7CgNs6cYMnNAeFqM4JsbdYjuBMSK9zkCT9KnPMcn4hgb7rDjFAhw9dD2ck4EiRJ4SSvvvK",
  "key3": "ETFXXErMrVTsX5MXBxZoNw6haPKzhdR7pk5jXn5FVCNuRjvJVLquS8xcbtGpPkJPeZ91YP8wHJaYUCLiF4ztM8z",
  "key4": "3MwJsigwunbmQmcZDyxyYKik5yhNvUX4dxPRftoEuRL9DtagGF725ik9GmPiTym12ZgUR5XhHMjH9XWTiamj3zXB",
  "key5": "5ZLf36z6zZZeKWqxAgLdhBwrQn6vNCW79a621VpqzV5Atf1Dp6dLFwh9YD14VD1MdDys7rCpTDdcswREmptUeha5",
  "key6": "4aJnFLXo9K2m9Zkk18VKeXVEYK6D9voBcxYKvdjGv7mVXBcmpp2cathTsSsYie6Sm1aTrr29bypZpk5fNxXrsVfW",
  "key7": "3rviTeDjrL73TYL4KQuiWo7dz5GDxJ9MiS759d2YSQptPUfmPMNTTkDgmPUV2fsw3RU9e5otqFxQnJGqocfb7JFU",
  "key8": "2aq5FcsHhRVaPDhSiXh5pdwcmXjDynURicy3vty5g6NPs5DviHvv5mA2Jj9QtHZb3nr7JoxhFwSgYj2QqaADd2eb",
  "key9": "44PpH5BzbJPisqyjiwou9XTVNoERQ53bC5MuWac36Ew7yd7kvVkprrHEXWUqE42sx5Mi9yJjKATZuAgSLLw4mUsy",
  "key10": "5U6nHAhiE2zXUrohHmwTGTkdHjwUt64FCreKpJWZWvgWXUzTi3WFmtXHkKxctdYqM4K1zCMdKpHbzF4jkC4grkeN",
  "key11": "g5ZnxwsgR7ygmrocN8MEpzA7azUihYvcEJKojCYHmQeo3iDBwqej7AGD5TDf2f52LGBQven5MzGZSYUSev7DepU",
  "key12": "2nh1VdDJCjGM7UTA6XAgex85nVBn64LHdxXpSF2w8rAfbbGZZxSn6hN25nPoghmh1ibbwjJNFViaSDxvcSaM1e2S",
  "key13": "2kY6LMG8FE2nPzCCKhdfYhiPsVjuht1kLBiJ9y5bgfJa39ZvwqyTQUq9D5NDDdyF8vi7uR7gp2vgzp5fTQH9KXte",
  "key14": "4rPH3dHWXaVqTodjWbVs6hk8oo4yhnsCzQy8JAP2mJsFDmYwbuFfkmNYtCQkdTwEXWSCVomDYRGLYBb4XqckAqTM",
  "key15": "2N5bsc8b87nchhSH3bCTzdj1yf1dM2pBaZW3E8UkcdyoqtwNwPUEFQf3BFPFQssQ9BdwApudNorsAsx43ztUnz8x",
  "key16": "5XRix8ytyo7xcWiQvTHMHZjcDmuSKTi1oCfhg7nR9vRaB1weagreUyjCDTccRt8oEhwwmkW9aJTWSUYYixzhUjvr",
  "key17": "3dJjGGakQpVzdVaH1JUphnFFExHCF73cqeQeFFiCZf1gtocyQj5ocyzyk7THHFfGEVeTTPTkWbdqdoqcxcABsdMy",
  "key18": "4bNTPdgDTFoS7iTi7Df9R4ZqYEB8SCsWNqEtH7DW4bEBiRicyR8hZnQcgRZr771pPxeE8C4dyZqzYP9EuQHAoM83",
  "key19": "5gYAJF18fhSuYv4ZLbTgsQWpP2mhRqBSbsxJAjfnwkaaziCWYCu1JEzSUYad9vCiEVfHFXxDyaM8Q3CfZb6xvc8z",
  "key20": "2xS7C2cbZcsohUCFg7UJqhNoZekoSQfjRur3PHhQok92u4uNnK2nUxZdS1hhpAbcpxGxhgQiVrfwsy28jZWoqXpz",
  "key21": "2oU35x1CkMrE1bj4SqMyuFv93aKuJCxkRiC3hfUPEjqrPkq7yiNbe5whBqC22jk8xskBNBgx5DKyVcDYXQyY5p9A",
  "key22": "3Wt4qVb5SXAaoPCVH5Fzaoa1EvQQrrhiC7FUyoqa5tdSsHrmRxEJW1QCRME1w8aRqkrT6aqD7RcKU3TafqDuaLM6",
  "key23": "4MTtKXTqBjGRajnEJN6W4Gx3mMiT2DG4xcZwqQe9kXVStJNKQFaqxvx12wvEheVHMeeMU9KzPcueLDgRqp8o5hrx",
  "key24": "5uEV7rHceG7KeJZmev83NnZHLWEPPESHEuWJCyA4gxtwms8S9byY163BMtLW3P1bHGjAGqG2wFm9LZSc5rrZ8wJW",
  "key25": "n7RbPeA8BzuPzonK6yCH2CM3ZBUVWEnjzDs1G5KKo5kmcnKfWteXbYaqQddKRcWWxURw5kWv674hAKwT71q2j5E",
  "key26": "5wVcECVpCUhF8EY1rT9wBVH2bDRC2E6fYAhuia8TZ4sBBjovJcfAnnwjhU78uVigd2gnuisZAcBT4iNMTg15ntGm",
  "key27": "55JefguXvJskietTdZkvXoLSejb5RbPZZRfdVZLVNSwiuNG9yFKKVjNff4Lki82P5dsRbo8JEnMjCY89irHEEchw",
  "key28": "YNpVVcmwoY3aTYgwTaGa63j3evSVaQagKz4rEcoNNMoi2299fHSQveixWSQbGQPv6A2xubg3DCeJxhTzPgzcmTM",
  "key29": "3tvmcYkgSM469HhHxfArnU3rswWSpqLn2PhuH3brJdHRJ473xwWURUerqeQEiLmemYAnsDBFpk6na7o2WU4vFjEL",
  "key30": "2qDaRrZiSrVfU8kcYKoQ2vXaxc6pkymM8cq8U2oo7gcEkoQctYjcumXKGRwQsScQuB6WeQjYqYdX1hNyzD3qyFnc",
  "key31": "CqVYeoq76fJ3UqVmf25nPj6wnCvADDwU28oi2stbg73m1KFVyyqBHoDukZusm7JpHWtcTeV3cvjkD5KZ9XNnSYW",
  "key32": "2BXDDHBV7D63zQJV6hx5foZ1FEXqVowh623SKA7kg24xrHmbBBSkoFjziz9MWuAVJoV5ZDhvEpsU91YARDS91Vqg",
  "key33": "27NRznb6E9gnx2zC8xzsvZtW9PNwEf4hrJmqVLnugkSquRmULcHTJSXUzZk8o4uCZuS2ob91VmrHnxQ9ovYXe5qC",
  "key34": "53MfRqQYgiGFeYcJwCz3SXo9Y8Lhffan4xCfhjF8Q1NHR3T6jc4TCRsMHuvxoFdDvs23wyBnrRnG1eQxhwCffQX7",
  "key35": "2q22zAdG8SDxr2u5bkrK3WYEcbc4aLCh3CeZ6ZX17a28vjmjqjbdSpbMUDooKSRgtFY2pCDNLEc9SM4wJcvUxrk4"
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
