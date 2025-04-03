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
    "j84ULGARejXxW8yxcMFWhdiP2njinHhL6B65RGoHs6Xx6rmq6rHyaBb5nY5rn783DW4upfgZqEjfkuW6VNyKUZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbT627KZom2kweyHhH4HWSVrikicKwch7ec7tBy15jqBtxmjFeLoVEfUgnMgcHBpmL1ea9KSw5CDB53uD1LVYjB",
  "key1": "Nqx4DGsoJJh3isN78U3zP1nDgL7Eb1fHbFsx57ej746qgkTbGRz6jvLG3jtbnREkdooBug9Jeb4uhiJJMCTZvkw",
  "key2": "5pbQ4EohBhCA5JdEXfGwxwmKf33viJpdHZZzLBZoYiXcLRFNnNq254pa7pdera1sJhUZNAVyKc9BuwNF6X9TToSS",
  "key3": "5ihHqk4KBLauzC7ofmnq7UGhajv4DJqhx42NTkSZ6WkFTo9DfxALo3gjpT7FFNUPoVSZWjFoQHKoEzpHrwWWnYbB",
  "key4": "5L5HDtmQchr1CRxU99eZ3YGNZj4MBNsTtna6cq7MmHYgvZ5MAwVspuUTL38LACjW74EiVBrENRqzipVxRB4XhqAx",
  "key5": "5vAMfwiBPXT8KjzzRXby25eMp2QLRbajL5vvEdWbz1TjF3QZSP2YWUGZ6tFXDAXefZcjb62x3tQgZ4t9SqqWsA63",
  "key6": "5EB5MB46w7cX6usbXrm4wMV5J2hb8yhaJnjeii3FMCoU7avLPTyenw1YbVxx7hJ4iDSnSTEFK7mYw1E7AfkJJEXj",
  "key7": "4RbjetGUcW16XM8MyS8DMNDR7xTmVcLLPoRA5DvXwjUVAHib91prTewQCcmrrrjxiXDTfd3hwkmr6PfYhciaohtd",
  "key8": "Q2NXuStmRmaWVK9hFpT9wn4gMmKPqYKiJzeTyLrsDdoh5AXKTRWmMRx8qQYz61L36zwSuEBHt2Jz8E1tsCvU6dX",
  "key9": "21EgDrqv3kWLhDWB8VbMeHLTKrwhcccdHnKvc44r96McUVdCzv6RazqfADA839ipdzJfHxh5my7UanmqM7cQz8Tk",
  "key10": "4ziSnho4fWJHtyNN5MXHewb9ih49a9VvuPAdQB9BVNPH8on5ixssjksJz2XS4FR5rNVM2kN1X2S2ncNoDBb69KyZ",
  "key11": "2DWJdHiFCGSq1f6kHtXN6hL66LCkjbcJLM8AnPtHP7rhiZvzYm3Hv9bm4Cc1ZuwG5sQdtV8MXn2zzZTUhomBX2zU",
  "key12": "5npcaN1oPUpr9Lsa4Wqpa2pCBysh8N4qqvjuHSyz1UKAZySQZcAmiGMYQGTkkJyhHjXTKQYZfSGbbXWyjFcFuv78",
  "key13": "4MuEnSQzaAsf2DHHqwzdtsbNP6KXhUxBnBDwRfZ5DhifTz97iR3X5khR2hbD9zeBxhH7eFkZR9NtfNWeVMm4e9pM",
  "key14": "LfrmapTvz8xQ8WiGV1ssKY92XdV84QBktV5GDk2T6nHHu7ErEKpRqKw2MHd7D7DDsbtU36kUxFVy9nQPzjDv8fG",
  "key15": "5YSw1uqsrhBUiv2h3MWE5RYSivvYCLkSAF7YCp7JxwPNy7jxAC4ZkrL2mUvvz88qs1XBGnGETBN7hiLEsuvST9D2",
  "key16": "2zWMbaSkQ5FRYYPdknJSAZEaJ4b5grzjwSo4rionp5JP68wmYpVcksKegLCVC4f54eUtk4KBVStgLGA4bJYgUxkX",
  "key17": "3SJgVkcAzGuUL2X1GnyfZUwDdFEYxusHakMXVp89cUJWBeWeCjb8mDkgfJhBxLuTJu74JN1b55u3Zd5i1DLZDrYA",
  "key18": "P5K8U4x9CQsM63bTXRbTkttB5FxyJACuKAF9uWcfyHuwH12LUwndrjcvrQ8HEPThK7B9BZhonRWBzR2ExJbVBup",
  "key19": "rGWHhQydFMVtihNHo8eCpyf4n7rX8UTMdWnvHHStF7EUsxb3ZwEBxX2Yp5MtBinYHmhV8NsauJjoTV9EWaRtXg6",
  "key20": "4SaQ2XwLajfDDhEazAbwvypnHtyCjFPnrLQZQw8dtR4qRcBVeAaXKzEB9izo7pSWxuDkxYtiNypzC4rEnaySN7iP",
  "key21": "3fBMmVt4ueaAo51sbw8Zyvse9xWUzZWe2rAaDBEi9aMSrhq9DyxPfWZTx1ZBZwXEaTJVKxTgzgfnK9LJYqmiunue",
  "key22": "4YdexEzjEwAfT4RVPCZTdUwPHELjzGYMAYCuwhSAYufVPBQmzYGNC6y133EUc9idVuYcQGS6R5oQAU8Vn4AHZEUT",
  "key23": "4iB2GBpBYQGohWEBnYwg9tRR4effgQoYTCxmvU6deAgjFBsSYUB16x7PmvjkiZmnKdZbzSemaJqK3Qf5VyjaBSX6",
  "key24": "3kNBhJHNHyRKHFRvMrukJbHVzwSL8vrTk14KLQSYeH76P9Uo6wGrx8dXs5ddJCrTqRM37ANGo2vwKGhiQDppLK3f",
  "key25": "2toBa2wmqs6a5YpgaQzSsMXbBW3De6oXYLoB8yyZrtsAzM46yyJH4oiiAsC6ZB82tMqbuuG7cA9LniWkZaEPo2wK",
  "key26": "39d1iX3dNztq9SBtzxGeEkUEHVQoyenBy4dvutVUWXVLsuD98NExFgucb6ChXDBRF2f1PDwYwtKJfSrXeqFyVwAm",
  "key27": "4nzLaLiDL9qMb4MxbEFhmh4VF98jW1m7V3dxBoZhMbZfre2v4kL4ySaik5Mkh5PNfbst6eDGpjJGaWrEs6FV5Gax",
  "key28": "3Ci9sHoaiBtGciyY8AXqAvjScc2uWTvH3H8CTNEBJp7FDGyrn5dGcvUutDkzX4FBAvJdXhi8LTq1aED7FvNrXy25",
  "key29": "31HfG1b8wKC2LGfrbJF5o6ZgEjF6zuud1gr8eFyEhgApxJAufERS9CTf5MSG1H87iiiWTzrMnv34t6cGUbLmTj7M",
  "key30": "5M9q9nfaTCdqzC6xEeUc5oRAQZ4PXSf24ja8zBZayRLgs3MvS5DBKKvo61vSaw8uY1X4rHBXn34hG7tiqGH5Evp4",
  "key31": "5U6Kj85rkesDuLnvFN2FgDhNnY7nS4z36eA9pBXiJaahDj4b4Z2bGodmXNB8wnQq26ydQwyqvguB7NNMXUnAv6wm",
  "key32": "2dzYZErHHuki9hgSPPWCu9jj5ZKjekh4UGkZtHNJMfLrS7hc78cGwVg1rooxBZm9Cc9T6eYfnpu3Py4urJYg2zZ4",
  "key33": "5DDcXQpHwfETHxk54Dsa1NWDKefkQEY4RNryqj515XdLPtZCWq5sW8WahCAnzQjH7MBPpG3MWmmRbHScUCGbv1gy",
  "key34": "3WThUrMENBAnx9HWM2Y3UuuvVrpxU8BBjav2UEZnVPQsdyrpCSdmXYkVuv4VMf1j2hG2jQKhKdyxrd7BvzLNvmFN",
  "key35": "2wq8oNd3SgpRkM75wWj55vc7aYdVnEa7NqZREgf7ANBmkMCFovVhtDX2zTDg4vwLsqFirMx6xC8RBJxRq96n1tib"
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
