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
    "5DtdVUU3n6QX9L4iwdWPgerJRnYaPQZrWzC1n2fXYhJWgtGoma764egmX2mA87jKWnCX9QP22p8njybhKjKHW9mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZRWbHSBCetZBUFuy3tH2yNVsvZhUeAGpZXPq6K9ouYhxZaV6ZJAiudBop4UTEpkFz8x7SUF9bXbRL8zusirnmKw",
  "key1": "56wXdf9cnJJ4akR3yHuxLbp3PYZKi8xitaJk8c8z3Aaaj4TajAYmAmoxKDfVV62bNa96AakdGYM8GitykAymewCh",
  "key2": "4DUiXvP8z7j5LvAU3jc2stejoBgSFCEeNzW46QjpFAcYKbM2wNkZXk8nkZa13JG6JRKGVBiTssGLTQfM9tSVaYYS",
  "key3": "4ifKa9YVwvRWQJSxmDwNrwvQxxJezaMDf2Fbb15DChp48cAesieBuaWmLXz1HJ4R3jR2GjvRqACJNnEcZTNxf9qV",
  "key4": "1FizFK5rNkgXsQUypvLmCYcHJxfo94gKYYpntLXni7xojKYTLqq7Z3ZzDfjkqYCXHcZd4qQAxpNhcKsfmBSqUsq",
  "key5": "3g3XUGcSLE5gj3RMEjRAwfqwDMr5gN6LzM2Fu5nWAJEzGPm1Khd9FnD3TzzEucdrVNvEMWB5S3rm2yTLPM5XdmKf",
  "key6": "5y3CinhEKPbd9Rogdw6v9AMdvDqFQNDJZnUjpKgUDPwnzisKnEQnGLbeDwYByAR69yEdwoXUNcctuTUrNtb2QPTh",
  "key7": "2KYFVPNAmejAYUJpNAmt9xfcwtQb4GaJjPwoH7yHSm6jPsNDqQa1qNuCPLhnNCCwPQSbYiEaDxfCu8LwyL8bm9mQ",
  "key8": "2sYeUdt7fGg9Cg8M2YVUedxe5TBBaUw2mHrn6hMCyfpmiWjRMio4sBYo96SruMnbLfzFYePNJsrKMKCMP4Ai3shW",
  "key9": "4HQu2LgZ5cn6c1LmpP2qyrKNgpGKpBwBs2i7YKkcPPTqx523DwEKE2VwGgvPaH9nAYZ6sxfCffUd2DXpRwA5Qi7b",
  "key10": "2YWZsU7i95xumXkbq6WasHTyEfGLGrVx3baiKeimg6ssaJKVLQiy1VuXnxhzFDVZw315XcBqfuQ72pgedeo9wCWM",
  "key11": "kUEqhzTeDNDBJNaLmihnPJSGyGp5AKoRnQ58pLHojFEqxfsmrZccjW4D2sMmSQ822KkekTfi6jtP849C5UA9WK2",
  "key12": "4xs74URgg5GfADjFA43k9MxZFzasHEmcBfKAh4gAweZpA2dE5YzJL7YzjVsW6TxWvburSFyFTk9Zjw1Y6pbSXiJd",
  "key13": "21eMzwEaTaHh2kTBnKYSYQAhw9vsaWpU3xK1a7DevU1zce4JsbfWrMpmo3fiWtj9RsbqiuNcH9oFbNHM9dibjvYV",
  "key14": "F4fU6arNDL9nkBtoSpWDHNqYchJy2cHX6rXBbDy4Q68WpRVYbup3n2SLMX6uZ7j2Jn6gFXbezH46hT5d3qtpRG6",
  "key15": "2GkMNYPPYdpDPHqMrqDzwDnTscMttWt2QNhUi22CvV7XzQF6ZWsDwesguorw8yKPaBGtLB6ubdohsuiasaGcpvym",
  "key16": "46TUSYqyVh3H79ExyPS7eVH48JtgGAjQZpLDMpkJTurRkjSLeUGVJv6oMpXh4moj5iCq23UpZc8uXGznNyz2ta7E",
  "key17": "5yBg5oHHxwrtzvEvXhWMyDVAfHzZ9odiQrsJGhpsud1AGHvEJJHh97pZeZF6gwFJCiZPs4FkWbkYMd7NqRQfTXFC",
  "key18": "5dcnKTjrURMYdZPxYHjgzJ5tMF82ZZP6bDt22QXcn2EpWu4NUAe36xoaLUCK5XoC3xTn6uUtGEUHvm1ERFBQ2Ww4",
  "key19": "5VL2bSSZseNq48WGUQaqkYBfYspTAEoGycNhh47oKvUb1gbH3uftAikUVvSYTbspySY9R3yM5gaELXuYUy25oNeG",
  "key20": "2sbarCCUH5nFJQHJowgLZnXF3j8FZ1gudoZNpuoC4WSTNdYL4GEcBRV9yzjnXUwuxEsswTmpZcrW8ShGhxTtEgf",
  "key21": "5qUuHKLMGFLM37CmSTjpAHXa9zsryiLKBUJD7JXNCLoDseX1NTqPaq1xoQMAQaPG2PPBPeRAbogYwDBrp8AAmV6q",
  "key22": "5SsB5XEXjjsaaLaQH1n7r2fXWuTDCtXcNDUofJqm7Azq9vBNu9iB3qXXQs3hdN96qTpcqAGdTQukCAizpB84naiW",
  "key23": "3MuGXeLidqUTpQXgxn9LZ2xkh4M5B22BWpTEncDfMUtsHg4ZDd32D7bUWjdH1bsNTu6TLtGFEo5XvLXrr9uQJSVz",
  "key24": "2NF22iJzS5LkMmfSqgyMn65kscCAzS1Cm7VmQzk72ZvDq3aC3muH98oevsV4Peq3mjXLJbueC5J9nCYYa4BYKWy5",
  "key25": "2tjhvKoztm8RWKr7qGoWjLHMwxJ4ivq1BeM9hvE3NitEF6dVhyhNVfQbahm74k9hnH52nFR57k54tARmZR4LrGtG",
  "key26": "KJYAwqYqoztuFcX9G69UQA8SLkk7mLay5Bz87ZccXPGR1gY7f21MPmMwPHGGtsXhBwr3EUHxbqLf9iiF15ynf4s",
  "key27": "4KKR8goLVvtS435Y6ubBDhfyrzzNbpyrvcdiSi6WasFF27ZUgy5ArEQKzqLTGcYgBRYcaaj1qZTQQWVPQxSCbXgq",
  "key28": "65YHW7oWHa81tfAx445kyJsLUJoxspNxsjZv96vQkkqcUTbkHvWPusKroqQkYueuXLKWaMxxLJXdo7SfNTRcpzoK"
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
