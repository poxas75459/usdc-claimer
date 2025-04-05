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
    "3MWuV3PCChJWKMFdQLRscjq8NUyZxxV3nT7HdhpA7S2b4BAU1nWFMh99aRiYByNC3sCqzbHuLnRoCcnJL23FyZ6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jwg8vcjY3A51incXcyKqtwHf3AyYCzfyv5NqJs7DVcPg4tefQFv8ta6wHS6FJYss7odLgkAb2aYEJmNPLU9ARwr",
  "key1": "4AAuyk6JadhEiz36dh4XACJXkccWHT798SBRBtDvjDiGbhRRuhHrCGpKysDxhAmqvDEeUZQHg1XER48mXfJnT84S",
  "key2": "5b1vDB32FWNnJA7fxmH2Z5EJbJjsUq5suMdC1YiAcDjCPDHhdGZGLyT3BDUywUP6AW8wnZBrKndeGGVirJby33v5",
  "key3": "JXphpNE5KEmb1YNqpx5RoZS6S6QXR5256Fqxx8KZsa8YuR5TRQ4d1jxgQurptNZSMKRS5JpS6SeWQWAM7xTW7eV",
  "key4": "4peDnfnr2Ehy5vP2cgnf12Wb35bF1C9MtoXwYGcPhUsvBHfgxjSYxgnBVKFzagiGVVKnvpW8VpLXQ2fipVFR8Bd9",
  "key5": "31n21AcQ2stfjNnmYZHSDHDytpnFzHui9eGQ1uhC1FxEZ4fdGLSWVxM9BjsbfANNTBWawaJMDjgwnSt4cV7m421Z",
  "key6": "63Qb6whzh9midc4H6eVaeMXxEkEBb4qubqceWVYQBHLUBsDbibiew62RiWbB3WCNheQxdWaaH2kzhiahE1HHYG1b",
  "key7": "3jzgZyThwDPfaGAjVuXdpRd7hrKYKJd35SYk9KuozEXeXLVi85ZZxawsmezviM4Jwno7SR1tcFowfegvzncVnfzj",
  "key8": "37jEjFStA2NbKFMRpqdT8GnQxQVpoEi7fMWJCpk6Fxct2di6BJNawvEsLa9rfHnWTCqXxrPXVxs9hqvETQjWAvmg",
  "key9": "21BvCvjyvXGMt4gC3MnZYPWmfqoF4EGjF3cCe2esWa8yhzPevxLpKt9ppmxPCVCiVbeDkcJ9HzFDhLp3Epbbu2aU",
  "key10": "5b8waJY21CiqyZoYpoaWxaQD9tS7fjPWVZHBdg33a2FvbF3zREbQuv9SvW1zpqZs1oMkAtjSiVg2nYpN227degV9",
  "key11": "GnS8L4Px5oa82gQejpy6MGFLzXJn8WYeJtwL4W4M8shc6cSGYQm5SU1K8yshXQAP55pgu2dSN9uBjb65kvc3iS6",
  "key12": "5kVAdNA6wLzcKLxNezfyfXeaKwATouCXkPE27Uiaju7WSDkvTRr4bWQoneQD6CX41sH2TTCsE1KCiPnwXQACPbor",
  "key13": "4C3FgCxed8677J467LM8iY9JLXNSq91RCaayjFuuP34QbBB3pwJvW5FqXiNZ8xvwsaXRZoVfJ8eLYCB9MSg1rR3F",
  "key14": "3JGMCd5rWPAWQ5YypU8bTabbTBVBmp3sdU1cnStgEBMuU1Si31Fx1N57toAeQCCt6cEpfHQApkwjiS13okVep6k5",
  "key15": "4ysUag2LXFCDuZAEz4nWQPp6wVkBV7JFLv5DJ4o7mXg8DJHiTLxtTwVDXGpHz8JN5iYGW5uuNsSTtaTVLjDRozdV",
  "key16": "3ifsPhXbafYX1mweMDZvksCU7YubZ2ovJbmtEUhvC1ugNqnt3nRh3ejEh2G7wmnr7LJY19jRTPzRnhdUV1axeNtw",
  "key17": "EtdJMW2tYUH94gVZsTHdaGDmk86x9txpGn9XQeGukNtGvf1onaignNrMxa8HYuSEEVpj1L6yvN1nqtqn6c9j3D3",
  "key18": "qdqkWWQJZLCi9A73cX6S4Lsp1Uc2GRZbHn94jDrwWZkXdm6TEySwsggxYzRrs7HnEAnVwqZLQMsh8V6o6pkYeZc",
  "key19": "36yB2babEEWY57poDmquowc3ehfYLj6L9DnamYWMLz7BC66wQPQyuSZgJx2UEo5Y2yxz4zfEn88zNTdLFsKxMVKK",
  "key20": "yiXkDmgpWKtgE7SiNEAV6RUDXnfNr9ZTemv42e9T2PxxecGtD14Nj5exzQMeKqWZNLiXzXLNiRL7tEvqmXmcWG4",
  "key21": "57vMsds7VF4KUJZAbmEntd2joSHtZC6KHi9pa9yNaQT1gmtdhdZmndkk4C4HjfuT4A4YXnUYkR1DfpJwVtXAeFai",
  "key22": "4CS2GbVtAG7UwXF678fZDtNzTfLqVNNE7hy3e4bVQYKKCLQJCa5WtRT8f9Xt3YRjxCESkp8secAnNgmY2NYXmF9w",
  "key23": "2JdnGH7CjaydMjDrKivpu4b2qtX4Aze4L8bswyATofwTA3iKDmCnxV5F8otpxjcgDssmmSKun1DAmwrPqbxehEBo",
  "key24": "26ruduA7w9ZrZeg4yL7sFsWfz2k8xgYLo9A5UKo7kB5KpufiSKupvhzajEeMNV3spLfp1fS7i1aFG9DgHYU2KSYh",
  "key25": "3An7z9WtDarkXwgtbrXGaDpTUxf1q5GEbmG2q9CYqSRwKqoGEs4QbkYqU6ioUS2UwkqTFEwMVAFDaLYiFj9GoX9r",
  "key26": "GwjZJAW47Ao9Jz73FBLnpmyxpy1QMTbzxUyHvjXMkXb4L1xfm7zrGP9BAiSM29Dwkq3c3JraKqnMParFJw2AHft",
  "key27": "48A9z6y9juuF6sHyXSFW6nHgjeMmvuV6YnXFKHv7qP5Q1D1UAYipqXShVQ7Tw6NNtLjUAfvT26F68mzmMdtVjuN6",
  "key28": "3bejPsU783JBZagS41PrBwnXh7pyp3g5UjGoy1ceEr3seWsLvTsFsnFWG2UiTJrxWnNqx8CnvyNkNoyxoJgcVMWq",
  "key29": "4YkdsqFpG8U5rG27rk1gpMV9g18bvqDqh6FhvZUusTtGNriSZt4KBRdEDR1yXEP784jHdTLUzJ9LtLFp5j5fFfAG"
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
