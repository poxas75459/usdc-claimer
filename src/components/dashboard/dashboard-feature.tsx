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
    "4e32MyWnpyDDvFWK3L7wrD2wmXbsR7W7vimTLTAUnqxCC9HeL96bziaxaxkLPXSy5fsvzCfDXQQx7fXCMqgebsvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m5foA36cKTZBTjTaG9ZTwBLYwN9pdywUcQQQne8i5qSsTQfG4wjkGGDWv9f7tDEcTY7Kcq6QPVNYVYkmfAr9Zhi",
  "key1": "4odqCChpAYNiPVHnbwhLy9ujVxKo7YmVvG7XFdjLP2oFpuSyxbu64WnY8BrLfqtTv5G77HdqKSBAgN2DEMGRDD1g",
  "key2": "351Y7iHQ9C5xd3Jnsre2DzfpnVmw8XXzBJNZ2jhZYwqWBpUWhMFgDzo3M37PyKiqtqiXLZ12yHdobb7KQRHKWC6j",
  "key3": "3Z1rBM2H2D2AprXZmP9oPB32iYTMtrndSjEQYGmfF6wnzd6ov34aBfvdJZr21Y9xVYKJFNuNY3LCApP65fZChCjC",
  "key4": "2zHihNqWB511H3CavLD2g9HFki6rU9uTtLY35aPoXdMyRzt6PmX7VWdN99g47wkQXyKXurfXY2oox6hBm91kNKAc",
  "key5": "3VSzMU39ane4988hdunUPboF59PN5R648PdCZA9CrCaJS2goEz4hkUHin4mqXcP9jarHbGobMqvdLYbLUVUbL1D3",
  "key6": "5HdXzop7qSYYp98Tc2DM5dc9LDN24bEzTBFSNfvMUwhJRhWXY2ptjTMYPDPEKZ2fJToAQ2ZP4togPj7EW38SQTHV",
  "key7": "2dXxFg2WHsNnm9gM6iLTUDzEg6vEqs5sydBST6zgpjCMCXjRLFydcLfLdFEaYrVyxCheBj6qog25YE1ZrRH2Jeb7",
  "key8": "4c5UiakB3LCAWPoL935ETYPfEUTUG9gfAriTfy5YTpsVnqyUPTENkXwEpLxWK9szHX4uWUASm649quHmpfDmWdv9",
  "key9": "4zWhHDzgP69n9oUWrxKbGoMfRcjSG4JpQrEoYX6jrBghi4HSfTu6uND79JpfAEfFgtTMR6KzTUWdVPUsoQuNTtWZ",
  "key10": "27pqzcKxCBfsJnucQSPUP1qvEpQXXrnwcCeDpeFfptRF4JLdMbmMSZGJGmN4QwDUVXvdm7YVydPkNjgBL3uNQkhY",
  "key11": "62F6WVyHhEFfsxtV3zvP9mMzzBhwoQW8b3Mqp2sr9iH3yiCDX1NF8Gu3dTU4h6YqEeLqFegtZQ2naz5M9Qzmnvqu",
  "key12": "2bko2RMdCHUPoG1PRVivuz5mUiMyQfaYDD8QwjgauX2pMNYC8PaR774yri4JDCdktxHnfkhNcWvYNEByLnsUKfHg",
  "key13": "5iM3175T9crJb6i5zbScPYfMgW678ng1eD8kr5UC9AZsZ5j7FpuDTQhfhswMzXcxSjFp1FxJaM51sU3vrgRvJ89H",
  "key14": "48avnqHfYPn6TPapZ9ndG2G1M7oejmYPNk3ofKAA7egopYprqpdbCTyfYRxKxpUP9L7JCWPBK1NZd5nVYmBbbt2c",
  "key15": "3G56Kg1ce3mC9pbVBqZGjXifwRWGMgacdaZq6XfNbQfgRXahF4JFEjKCNYGvwWGEBM6nxNjoXrXkGF29Jr1t4vUU",
  "key16": "5D4Zxjz2ebNKNQKXoupAm8P7joomnJ5Sy9WLcPjYZVwq3pnAEZXkSjt71nULgZC6nm7M9Cv1NeUkFzJhsgEWd3ek",
  "key17": "4xY9ERZxZpGA94bEAKRWrJvJSapdHMa55bzL2sWX8xqJ1nqVib9sfhNEfJgjMuNxv83S4RjuNNQ9tmZkL8aWEUYm",
  "key18": "BJC6V61D1f9r76Lgrv1sUSAfmkeVNpJ42WoZJVJNcxnDWjy23U9Xi7pcFDFneBaScHgiHGygjuKvrQagWFH74sM",
  "key19": "43YLFrqLhAHLbAC8s5PNzQkpruFiGcVb5JUMukSCgKsf2AGhu2AeTdXtB13ovBrSaE4ZpwHfaDACvLDvrMR3pnVV",
  "key20": "4f6oTc4dkDXEwGckHL5AQcUjaZ4zn66C1Qtieg3HATkJJEs1HotUFdFBbvL1VR783AAsMrAewPR8aehQGqCmMCgR",
  "key21": "dupgD7LR4vHvUK6X9EUPsdJPvnFnVqNgU7VDFpc8ZjvEuihnFhs4zACkgGJL6SVf7gUNEDXZmHbKbkJ8VSDZyiU",
  "key22": "4v1YcZQLMQ59KNCyCPkEWEDtsmvgoXHAdW3cg33mDucY2uoXNuvXFGa9XkeTG7w4EHFytVqvDTxSDk49XksPsskH",
  "key23": "4tU8MEMtipnvXeaKAHGXPF8dy3RMhEeF4m6Cw326haoB1Yh7vGJYzscmr8noQERYVAzxFhWUEmmPLUKqZ8mU7fa8",
  "key24": "356S3i6v4S1Q9hiT7r9HU9CeS8YVpiFhHiNuNFz4ZLticUWM1oDtfm7Sq9C2x12q2vq7qwTS48FK6Ar7KrKR6fvU",
  "key25": "5wS1ojg3qrQeNy9EW9Zjm1BA1CVNxnwate7ci6WNomNpM1ep9himMWKaFUFC8bvYW6pB3TJ9NJy7NUaKfPohuswZ",
  "key26": "4GbFoo1NNRUWvquk4mJkiiDFRhXNLLRBGkUor7G1Pnky9WrJ3JtpVEW4gm91ENK8vneZzSVo5tUf32dvFp5yC4rc",
  "key27": "63Xex9NKccYWLdFS5pViwyjL7bv8yCCQ5xo9XPJZafLofGLeZeVxqxpsPfQ2RhGtBrKmQS2pVRjsAgWVnH79bopQ",
  "key28": "4M1vzFoLoM4s5oFUeEr2MR8xHeg63q3KvnYrfRaTz3uH2QP17k7SgUnngw7gUMwDfcPeK7bNW4S1tiA4jgDPSthP",
  "key29": "5z44u7e9cL9PJKCWacENUu4TEm9dyUDD8ohBua7h7L48RLaGX9aCboaovoUEMfiXwRad2C2sgJMJ7UTDfdwiT83g",
  "key30": "55LGdcemYwZSGgSRJgbvB8V2MCPWJkMHbx6QB46F5CnZSHKWi9ei2dB95sgAKU3NsdQpdegBbnGzbqEhWckbVMeD",
  "key31": "4xpUHvzR4SZSSHPcZ7WVbekzrjnV4iDXh4BmrT9gWfQKFtqCkn1DDKVaJxr8CXdBeL8XJ5enfVa1fWAtuiN8i6PK",
  "key32": "KvceFaLyFWFzpRRcpqM8BsHii9qFiy6gMKmepvXadjAxAYLAN4pzT8Ns1iCDVdaqAHK5pyf8oaVe2Ez1GZ1p6vq",
  "key33": "5wF6FRsFhoRWgrcK3J913ygxDKFscA5AyzR4asdkQwFcMg9vDptF7jGhQ8dd5DSNsWMvhyT4YegCMNczuBZu5K7X",
  "key34": "3imynWZVRycAu7gpGeV9BTYfsDUQ53tDqrtgCrVnuRGhsHznJZAqic92UnGt53gAw8oCXt9rKDW8LitCi3BzTPra",
  "key35": "S6VEJphSZciZViG3trqKnB3ijoW8EMPkiAwjbWuPKESbjitwkAYsstF9F2mBzajNTYNHEXEMWpsS6Z6s8FAVpQN",
  "key36": "4EWXeQGgPKZBbk6k1eNXLraGMarFbmp7o2bij3rE7BTCGP9fcfEtCr3sohEB34oKvmmoPtiNZ1KdsKzTuqux9jAV",
  "key37": "4ppvQiKK8GX9w42Tx1STEUVwZn9hSMDQxJha2AwJ4JfJPn26FaMVFgQ48V2GcCuDsfiWb5qiAfmVy2AF3GiUNB67",
  "key38": "5qxPaHo6Yr8B97o6768j24NaAzcY5erUBXvMPyKkNxw6McNtQM4Nqh5sqUDNbULqgYDuWCfpNMsS7aaedb5TcGP5",
  "key39": "51CbPjAYUWZqRZP1FVRnoyofVbnUAziq23aA2mTWJT8nt1GShiEAH1LkBUhtLz3zF5RAcGayRx9pjr24NZub36qJ",
  "key40": "56gQwAahot7WwtiRHWYyhM43dgQt7UHrUX9hNiZSq2eT8SkURZXRoqFwbE84YrtirZn9YVAKjtixktVR3LoLxZUG",
  "key41": "4ipLGiRRM5NANAKztJ1UdV4iQAAqpaRgEtM7TnyfB8jQQDeYqRM7Un9uZsCvv9bPLtF9yLKRUAWQ7bZ8y5iUjNMp",
  "key42": "4C7vLTCFs2aHke2pqQsbDW38RAaxfxketkQ2P4NAF8QXLiKcG3b2zNHrbJapeBT38wjsr9snEXxCSjSnpMwbMBHE",
  "key43": "4H7ZJi4A8YzytgssmJN352xkj5tLeDHxzMeTK6UaSg6AsyXzRqTYAuyJ1EGmhisxogm7x61p4XvWemx8mbs3xfUe",
  "key44": "ezbaPjDCfWkAt2vabXJsedSzQUdbehSVZmyWftphTfqLjbAbxP2jX66pEN8GMJpJSyAEeJUFQYrzyxEKgPP4P9u",
  "key45": "3dm8xFQriNdEECJj4CcNU7LQQccLd6PmnaibQcZNdFMYxtbMQCcKt3h6L2YKmhY8EoMeaSuh774bPjcyn5bhpFMe"
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
