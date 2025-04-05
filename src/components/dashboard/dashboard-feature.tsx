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
    "GG8mc8oinhTpSejMHrjndCqusVcEdeb91iS1R7RDJ4JzgBSKDZyoxbiQqFDUZrijZT6DxaTVyf5Ha9Nh1cVZxub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hKXfzCqiKeKTHa3t7VZPx4RMsJ6JfkXfZSM4L5iQdBSxjveRgThee21Rf8sZZQAcshXgvL2nK2UnPwxcGBXV5Ga",
  "key1": "5jgexLosaePGHL15N8WsjRirKeJyzgMTbZyqUjDS41HxmyPmNhhmDxprqiYKnZWtbhiqwboQ8s5kd5SmxXyoE1xR",
  "key2": "5bsr1G9HiJUTwkc7RemeoqmDtpq1AnJcdxh2XjP85E4Z2U58yv6EhgZuBHWPX1ccsh9Gz11zb9Ln9WhPMaeXaiZ9",
  "key3": "2s3ooptFh9YBzqyXGyoWekWK6yqp3Vo62W85zCCRXyTBHSvrehJBFJJhKexL2Wt7ckvLK23s7oUXEzNqKR1d7hBP",
  "key4": "4PiEkVaF5GLGY8DMgSJ3KJdDZqQZZ9k7jzCD33PpotJ2Mnw1vb2qXYTZJ7sQtaakcpYkBRKZ6JwVrtLJrvbwfLJ2",
  "key5": "5FsceyfysRHzyEAGzCfYwTQ6TYXy25zWGejxYk5gPYUkxCLPF3MnpU5a9VzaVvue4hPTLiU1m12DWu93KG4t3A4K",
  "key6": "465z214g3Xi2QLtmgmE3EiUSq7YceMYsSqNzcobHCuZCqysdC7VHqigAtSJn3a7XKKCvm5dwDThqfNUYgsNL11d3",
  "key7": "2qTRFcaGRpnuw38wuu1qWhH7og4M4rQMAVQzc1BLKVzvtY2EkzfLp5Evpio5BCk4o4Csn1mCe5suSLN2GLu93rMF",
  "key8": "4mzNh2NRSCgwdxahteHNkUxK5v1H8MGErtejUNGJcPtXWR8Zma4D6stYzT69uE1w5io5VBToGA44Td156xF8C6Ty",
  "key9": "2Ji8Tqy4VudsNJyzruZfkUx1WFbAVxJdKCmk9spLgtctN91kqwaF7LrfhkXshpNn6oHNhhb1LxnGG8GJqBA3q4jY",
  "key10": "a4L82bfkCYyfGnK9DNiLLLbfohtd34bzvesm7R1xWUDTBSAVdjZ3Xg2DihS9cWraLekuH2XCZeD7jweCd6Q2RCY",
  "key11": "58tDuxaoaryxz3K5nUZ2j32HvUcevaov7HimftqRaNkrVtmsQUWSkirbrT4CZPQbEpg78QKT5tZk5jTq4JYQTepY",
  "key12": "2tBZeEZMbmL51f3o1MRYNxXkMgAc3GqHhcH8YbfkjkDqQrZVKzATvcUHnbZQkjBWtaEU9rjLC5TouVPP3Fzgjp9W",
  "key13": "3ZowH6jeYc62XzXzhE7sBU837A9oGd13TJ13JJuUrCsQDeYXBbCW3VMtaBHhiL6PdoVcuBfC8dW3zj3sVjfvTft1",
  "key14": "36ATFf81CHDoRebnn4JkKcrF2GibDuxBPLQKPXRa64wxDwU8k1dbAqNPznV375dKXx7BnjggCmRLSwph3MYfou37",
  "key15": "4bzi7hvQXjGbvWiU2xQQD3XNacMBMWyUDFJMsXMr6rgAkk2TzVnZd3rwxdaweUNiyjtrsWK74gbbqVmpD9VmGgZi",
  "key16": "3nXdz4z89SMVFanspa6dYhezVcCGBmHTrePTkXv9kmo8zRt1u9JuyQ2ZZzzhA7kZX799whTKtQcBmBsXCWaTSzZe",
  "key17": "3vC3uWCxnnqEp23hMyKPm7uMWfmrMk15sHkk14wxmYL3GYFQ3V7UVouidnd8RSxWfzH9twGecyA56LAQqnTcK3K4",
  "key18": "5UPRvUEbdMnYhCYrHdSWtema353v9j114Zz3vGw9jqarvitL4c6YEQN1JUZUvPXYkK9zuREfZp8QJUH2LMTH8yoE",
  "key19": "2ep7QR16biuLFFScdgVzyZF4JnaNY8iLsVfP2T57zcLVfH3wDWF4y8UD5bqc98NTFrAVebH3qWwt98EC968ETqCZ",
  "key20": "LcPGAuHgDhumSiYKn2vk4YnrMrM1SnVZQAAsY2pBaR3hPR4YrWJujGZBXQ7n7eVCgjQL3E8WYbzaszjPDsRwQJY",
  "key21": "3SghMor5JBwnHAjb591m5L11hzcbiftmMzDGGEMK7VLAMyHMNcUuJhjZPa3nk9FsuH7gbS2oPS5C8DXcUYnF9SaL",
  "key22": "jAUotnvufme7CqiH1SzLa76D7GY6FCpfzW9hPNgdSsn1CWnvppJkrikUQsSeNMtEAbcVm3r8x9NedZzbmtXffAR",
  "key23": "jBrK6GaLDKQzoHZUqzUjkaERi6AB6qYv4MuyG21oA6M1NU6MEvkAQWkxw1k9DMnucvnJkbEkm5uMJ74uz2jnXca",
  "key24": "jV13CWawoQQAuN3Gfv5fRheymg4SMstSiXcZ7rMsgT5LhFQbBgA345vRCJ5pjzQXXuhKwe81k2mjjqxa4Y6jCYx",
  "key25": "3S2CtwHyqr1s2zsi1aMCGT6qS9CdpFsDHKByBatABoobZmjx8MEtAaKuWmmU7tHn4f9ecvM6Te9axVNxRDxy9ymm",
  "key26": "3mNLLJi1MdyCowWRA4s6Vky6f9VEkWhPoPLMu8uX7fzfwH2pR2ggNAoYuzs75MDbjkKEbV8yZA1ARoks66swimFa",
  "key27": "2VHcHjrx5kH2LyoHEVDJArhSzXXAircDxjcb75VpGcYzmg2siDNtbgD1VwdpsxkwJyvug1HythLZT69zrCvgeZN1",
  "key28": "4NmFnzhKZkCzDirbhmzcXWiR2MShA95CipAhiyFvVQxzTuxAR4o4rEZyBqHgYzNYwrNHgChniwQHQNmD5sfNHzBY",
  "key29": "4R8CUqghaRVUZfzpiPf91ocg2SUeo1Y9DjHPyXUnr6aDVkHtgFTZ3CFrokssdJF67uoupJCvZV6mUaSdcVXoye6n",
  "key30": "4kqci8AN9b2qApuV1yjWeszjZUqGfdPmMSnKAPXdgTkezBSFGyWVZJTpcGFEP5TddzkFwYCwAPM8cxRTspnXxVEt",
  "key31": "59UzBH63H6Ns7hTBZeXaYm1SS5g9AhEghfmG8zbRWyhMYQeoL4KDKYJq31qx1K54u6YZRgrRoTJDJJQFNCYNKg6y",
  "key32": "31vjgFXVtN9jPNZJmb1Sw6CraDLkLk15QmBiN9gJbrkXbFDkkPJXMQXqq4ANzo8F8TNnY7V2vRtEFz32nT66f5A4",
  "key33": "2k3P5hgnMm4M71ZsWz4bv5L6BterdoZNxastEKzRX76gCPKWUy6fKFqhPL2MQEtQFwbhXrHeaA9Rz2ea3cbeY3fq",
  "key34": "4RwfYKPssSHA3E4bvhdrPfJcZoznc4MKz2bLJ4K8hnhEGbmoFzagex5AqbPeXwSuaT9jj6KsBUuvA9MU4c9gUCzv",
  "key35": "3Dd3n93iVhQsXdvwoh72vaMzsmDHffQ1KaxJuiXitFmmH2NodnpwS4tsR1ErjEAm6cSdirKbYWBtUxyLJPw9EcHj",
  "key36": "QPYxRirykdgNYNSXJc6uoVjExC316aQ1Gt4YKyMetWnzHZnyNcC2EX7y9ogxTZSZ2g7RCP73cJP5pLfiyGMmJgq",
  "key37": "61kQXipPu2eGBZ7dMu26QLBgMLNELDoSdJL1BHz5mZMo2pHrLDmcS6vA1Wp7yqxyatd7uaexdXb6m1vzdNR66C9Y",
  "key38": "4kiA1miQ3YzQ7ePR7wokY6Q6Kv6K2bJ7FrRmn9qYyG5mkftpJxFfXhSkLmMxtr7K3M5WkyrUmhMgUxncu7NLbeoU",
  "key39": "28jeW8D4AqRoQUVB4vPjjDa5ceydxF7QpV1Wuw648PX6zbzwvc4qjdqdFyyAQzmZ2PyeM7zxEHTuMvXk6RQ6wUJG",
  "key40": "3WxfW7uP5WwbLnPrXKmUV7zXhKLc12u5qGJESrufgxGtPjQu38oud8FsA13fdSE2V3vyL5kyBxxmwX2R81AwpDgo",
  "key41": "2rqViLWQhNswHCBa2Uy2ataRjox3PiScWD9bEcaFRuje4i6jvj2fmJENGv94YMRMcCqcQJi9z9eVUceAiZcvYSUd",
  "key42": "2DpwbqS15eT15T1s1tRDXwmLU3BKpdhSmUAKStCk8zU4kxDDw2hdN72W1mZvbi2LVW6k7Uq6R92XK8dpMS5bSQdt",
  "key43": "22jKwbEj1bmbCrgsD5BxuqRBdVQFa4M5KETbu6wXgAcwdECjkBuJDSgEHVxhNEAJJuoFzp6FHfQihsnu5TX7nLBk",
  "key44": "2291yNrsxcSnLVeNFEfQSkRsZY1XxqmsarEWVFSzJYhuFYEm88c39TTNzdZE39WZLpj728K3mU14UuWaaWEeacdJ",
  "key45": "V1MvSnXpuA6MrAGUMkSiBh5gLNc2gyxNnuDhZJKnGxDbCi9rM4TaQbUCVNWnPPoCSRxcFYmz82CM4QdK4x1xWFo",
  "key46": "BPtS4oKmBPTJgjwBiisaWrPQ5X4BCv97RBK4EFsNxsxivH58edjNDYdBqGaBD8w81XpUhU1wiyKjT16zDwUim9J",
  "key47": "3oLXDGQ7X469sNLPt1ci7DcT9YYCcG8wCsWz7pUsGdZ4iAaycm8FDrv939wJ5Ddao5GSoLfeSE5DucQMCaKDtycN"
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
