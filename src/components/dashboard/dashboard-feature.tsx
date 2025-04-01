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
    "2DKCKgEieEVe5jxME9jDqCf2DL7ZcM7bx2EakWN4zk2ZKhHRdvKf6CY6jriXHFMn7oVBMdHgY66TXhA3PXrJdgv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgGAiDocytWASJxUb93ZgbNnqW37QjA5qaZEmMxNWki63oFZjW7nELQNXgh2tc7yg8Qs26FKhCaZxiF9b3zSHbU",
  "key1": "B66C4Ar5qCYwoC51SrwVSP1gLB2XL2sNrrjH9RCRXSZRxipR1eDRk8k1buQovPfsxStuC8fewpjQCd3bG4uduPJ",
  "key2": "4qpDFv4oyX7Ar6qvVN1cPDybzbq4HACxUunBmFTtaYjbLc8LfTABW6dbFDviZATTr7BPZfv3PNiZfbJe5mVXZKDu",
  "key3": "R3YyDuAKzrcusqQqsdDew4LJFw91P5YHtc8dWzxTMaVzuuPRsqwMeEttXTha7DRbUH5eCkiGuUvrAtvLdMD4duL",
  "key4": "3tJSnCAML2DNHmAbCSpGrEotnYm8y1yHRS5s1uTY5TavVnRQpbZvbDpqGHScinbQwvDnbYfPj6DZJrTDMrpsx8Sk",
  "key5": "NxfmBTDqJQGiMiBJpH3zKvfCRFckPFBfNXCgmXNbqgzQZ3MiP47QWwSEnyiFczHCdENp8BeMwYnUmwjsLhTDbLZ",
  "key6": "JSDkJuKsdsNbdFQey4P7uJowNLfQbTM56hnPKWuKHyUges8R81kSYURP4m9k7BTzrBhagZxAXpPLrJAHqqkuYwm",
  "key7": "2ukkwkN5zVUyAVUhkemwY9AAricXsJzAdkmbU1ChBDbTUcCZTwEXFd1CY8DynK4bU9ax9iDvFo84cxoFvfXeXNkD",
  "key8": "4YRxddbyHyFdcyqYRB422Bbt4QCR6FwrszZixbriLmVGnrrRSrRE2LFD47A7M7GHStfDJcQBGXjaBfE5p9n8oKjW",
  "key9": "5bYWdS4ivBPkB36rmNYXWUHRF1w1xrDqCoTiz34p3dbMA8qRqMcDbowYZutu3wFA3TW9LBLBe2X1GCSce8rHXY5y",
  "key10": "5FpDG43WadqJGEEm72iV5HZyMxxocvZrEVsBqCngaRH8TeTRSY57uwf4fhmuHiPQxVDMRXkmWcbR4CkNgbE2mrHr",
  "key11": "2P4MxXxEzmV3BSr4erY7UZL4yNpwt9h6drBYpKki97rZVQbhX4qJrNeRfmVHSySuKVGfE25sCNVrM3rKHtYfqCXh",
  "key12": "5Jknv2nSw6QkbnxaH17vUcrnsLR5hcNTa7BYUJ1JYbmodZRRNkWiU5gGBXi4Pikrr3LQr3hP1XHzsEABrmZSSPTh",
  "key13": "3kuF53qBQaejm2GszGBaxQmMmARWeFENRwgLiC3pRVzgka3bH2NvmF2Wdw7dKW6X1nQJKo7twL1JaYQc8GAFE6cK",
  "key14": "Y8M6wLCMdNgzkSeRizqY1oQySnGxhCf4knDmLv7hYYesn2yorrPKrk6U8fmaRiQpacCbQG71boajnCm3tCTf8AY",
  "key15": "4huyt8MmZXimdpTGvNHdYeL2NtfRh6AJNq8odeSbpEJTk3VLWsUZpabJCqnGfGB3Xy4Bf9zSLE2ybGWchJXFJNr9",
  "key16": "3YddpTh2BjTcdw8XAzcPChxbVXPXiTHbfQMDNmFKfdoHayA8JkrS8WY69xecSgsju2PZcVrBD2HXEzUAWxsoh1fr",
  "key17": "2afACkiY1F9i8JaNPTPCVCupuRHoTUSbDiZFaNbp1Un6xf3VQEv6CsySN5z5i1mHAmZug4XesYS1VjXUss7aPs2u",
  "key18": "4VsdcD62sNwyLbva4zwGPdBgiHpyPMYsBRLbRxe83z6PAS83Fm5ddVBFnd8LHruD7zqdbbprSARupN2Li1noBjB5",
  "key19": "5HzbzNMTmwmLcHrHpa5uWjvwmLUNY2T8rMa2iQ426UL9pc6W3m3pFcQ7NJLM5vJrYCgwdR8ziYCeS85rpkw8YRUx",
  "key20": "2sfwUEkhZ12Z7H2DMxa1Qu25SYziEMbQpqT5bDihVK6he6eQ1aZy2RtFdj2e5P7V6XpqoLuzf4e44XKqyj5XFQUc",
  "key21": "4kXR4cdWSRcJRxx9f2HsWjLo57zYW5iBXvx8CzTidxnMMaKMykMQgM6AMRo6t54jJGTwS7Z39msrYBN3FNxquKPF",
  "key22": "V3AsyJFwcGPEuPJC9Zzv2US3rBfrRxQyVefs1TtN4Z8G3VjnamtwcfttfWSeHkMj8uWYSsjwcULmqyQwWdeGpSV",
  "key23": "2cvKjvYcwkSEZKQDQu3euZPZ2K3BGwS4wRCBy6d9rhVyqxZRuwyCo7rLjwNUo43mDk4wDjjBVRGHuZsiUQCsaHFo",
  "key24": "2kC19QokYMt6npw7zjvibeXE5zrHC3JDmoiy2azbYaGszK4Vgwz21j97M8DA9XHcCKoGc7FVvL4JMFXGyFjjRHf4",
  "key25": "4hNeU263UuNkEmWvwvAem9sRmGhTBBv59fdv2Rs2dWRRTwh6bQ2DGmvNUAp2GGDYKcD5VKZ7wf5k8tCzCKsYQaNZ",
  "key26": "3o1H1w5VdhvtMZQdh83PvEaDWJN3e4WCNQPqxPPFciph8sFUSWhjf4ycxcPPfo4UrndUvtbatiZZDme3MgipjWjF",
  "key27": "2aR8dNDYCbBtar6JWszchYjx2qi7UmPZL68xNvRusCuQ2cW3q5ygxv9JRjLrtmEESFwcoeGd3wxgxWqxtKYs8agK",
  "key28": "qPTeHz7Xyb3Gc9GLJuDVdJkyjnvhMudvrLKZHkaDciH21urytnnsBr27eB4XEXmYD3ymF1Gvbj6eVoxNsDiPiNy",
  "key29": "52UY5zqJXGUR5pnEVHKtjYmpDbzVmPwCE2GTbjApvvFhaX6fd9fenYJouTUaYKDQ25brhfTzae486GGYam48sbLq",
  "key30": "gMY3Yv74tmL1We8cas5WSSSAB2yRG4KVewjLmM2oQL88E5ThkmPsKriZwThvTtB7cymh4TfJSxbWn85FB5PAvLi",
  "key31": "2pT5SZMypADeJaTdDFpvhrAK53hkvm3YyawMh1ZELYJ4weBmBrt4h9vJwponNiNxV4zbsCgzk6aM1RDZM3chHYCH",
  "key32": "3NWabE4jsovjpyo6fjzvPQnuc6bs7KTzaGESAuHTc5HVCAmfwvRKq6Qacadm1ALBYHtS2TprXQpAo1ksqYkdejgR",
  "key33": "5STwYD5mmVgNAJjYDG52wP5afuvPdoXzcuQyEj1wpqkovtjKBwi4oZ7779r1x8KuGk5yeWCHqX8vFEKwfiuaSv9v"
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
