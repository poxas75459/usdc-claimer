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
    "5woQJzh6YJvWwBucyTiUee8UWnitfAJwfXSPcZ2Qd2gJdLtysTppUPHQuycqXAFTePnosf6TWfufxxEt2AW6bWbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YiLngpv36x4UN66afq9zU1k2BgMSNMxNhZmd3WnG682akuuHvHQwhGfahLQnZaGYRg8tEoX6r2bubHaUKvbPgNx",
  "key1": "4keUvCcGAXuDswZtbijaXVCNUvFLNYHwxB6mawHLW1DNmCiHw4rqnh2HXZVpRjd49SRp51jouMp4VHL4kHtTJvsY",
  "key2": "64kiKA4jQF2pS81XXxPf574BhnE7VnyLrYwhXdoP5vAQEtW2GWTXt1JxAmZyoyprg4eHSYNrqkTZTD7guFzXF6y7",
  "key3": "4SH2diQ2SdyA4J8XbkLPW8JyaMijq1ocWP9tscmCUsjmvMWuCEHiFtGzad7Gs61SQdJrBtjgNEZdc55UM48BDtUc",
  "key4": "2Pu8wCnpQBHPvm2jdUiMwFZrQj33K91my9xRsc7oZh6WeW4ypg1jUp6ozYcgceuig3iK5etiqZw6hnH33rdx2fan",
  "key5": "41iQKiAx2PiakDfmA9P4VXUixby621oNtEpbWLdUixmfA15FML8xmEMPktZiFXpGWC7KkEa7LpgTy2oynK9U7nvQ",
  "key6": "5jDmK9EBZQa6x5uMF6b51qsbRD26F1iFd1SQJwxow3paDW91KpykkXQgc4JRBFb8Sn24kbU1oEXRsNq9MJ4unPZ2",
  "key7": "XuAvuvRT4CSY2L8sdmGgAcUv1XynpTyStNaYJo7aNWAUjVFZuZTQsr94M5zobkt6JPto5RLpTXtAw2LB9Yi49at",
  "key8": "3nhREZmU57mBECQjQ9xrS8hBr5MdnT9Qyi8dGgAQSoEjNgVaiy3LhPF5vzH71a9TEmjcqwkEKEmsNBdwkMWjU8N",
  "key9": "4YEadegM8U9gmMRDtip4A8cTW2j259KUefdp5tJjd7jFnvfBSfQYcd8U9Jq49vBy3jAaNtR82LCGhgDqdStYjbRa",
  "key10": "ZwotE9AweSMZh8UvGbGFbYiJg1sBYwixdGzQpf2YJSYvEe3SGeew2nZujN9M156tv81GEjLLgLXrpcisqLbg8K2",
  "key11": "3dWxyce2CBwJXjMcWDKHJ7AaWj3pVgd3ZfUW5kPkRSVw4awfsksjiRxsJfJrMfsd5ojUtC2uoxzFvCezQuynKeqd",
  "key12": "4aCprmj4mo4QuEAG6mgjQ1LZmbghpyAW2wbnvvp2pa7A9vrdkuZQaLP5QuaJqijxY4P7yJ6kGkmntthBEzbgBzGP",
  "key13": "313nBhSFSv5iBVivzTzZwL37SiAx3nHvR9ncjkajt1dsFomF7KU3fcSVWWAVzFdCU5mQVFKHBoxGiysnGKhnNCMM",
  "key14": "642wgqbubhjir2s8bn8rDygZ9kNwYGKEHX3mAvouSFBmmRAviWqcjbBHN5YKZRQL4U5Ji5VMXYEmGQ1Q1JKdRZQh",
  "key15": "4iGC8u6KR9hFsJZMJmpyF45XR4Ki6qvSC4NrjTsmJgUgXNXp1Zi8BiRsETt6e1Cs5Y4e8eTGwDFAn64aPHvt9j76",
  "key16": "4iQNuo4qkMNqqhQgM979tfRSdw5DWn66vZoyVFEFH4kb8xaVPNSYWtHT9mHgtBeDtkxDUdLPrCg8ALdsYK3wdkmW",
  "key17": "i1rAjfWcWV7x519uEBBAcRvS7RipkeiNWv5eCgxcRQZmYCpzQzpZJuUnsZY75bGDaRdT4j67hdz8x66v9VvGWdy",
  "key18": "2hSf25miT85HK3D7SwDAkEVSZ1VwqwBmVKze9AVdo2iKKD5NeWBCPMU2S2HCkM611JWS2rESRYUNZ1ddnAv4s7Ej",
  "key19": "4xVC8vwNLufKJd39GHzwnsF4GzWrCcuB71o9kiA8bGaE3qYJQ4nxpE2bSxDTVTSBqcu9e86dGVV3BD81gAQAwW2C",
  "key20": "2vnCX1351XD5Xc8HKF93jhHgzDmdpsAAf6DgZYYZxAJTsZvSpqUhyJ3rAGMNrsWVwZkc18YZ9z6xwzWHTdVskuFA",
  "key21": "63SNcQA4fvGUhw6tTDh3msV97ZokEf5PMVzKngCkV2tBpQ3aYKW6FQ5k5PXMa763bTVNfTDRKoMCJNTBU4gxcoxF",
  "key22": "45Exd7rJ9gpgPEjCg7vdZ5Lj45kPSepi46vfaxNy1XRr2aTRHFX5xYnH98MgTGpu7KMf96WrqLDfmaoobTzxLSa2",
  "key23": "ztb4Pt3gAkEDuM7VVeesebThJFwyPaHGSmsSZPENFAMzbeV9ihR2dc3kqbpsc7B3epjkSeoX3mJYtjb3g6xxMH1",
  "key24": "2GUdUjEp4RGnptvURzq5zbPL9ZYuji81K7C8E3Vo1Ph9BAA5UuKxUhKMpbsW4LtBeqyVe9bMXrg7PaBTm8E32YvJ",
  "key25": "5F967Jj2qZMA54ud5wG2tHZpZFMk3kU2EeBLW389dUB5wcSQr75gvThM4Aif4xh7YhBXrfw7i5NJVzQ95tNLysEq",
  "key26": "4xWgkP6wnhxpqQ89bKLXrfD5XZND1dPGijV4i2xWuX8v5fBGP6t6fQagZ61D5pwcd1d9fGxUQ1TMe3yQ4ApMtzCt",
  "key27": "2u5Vn1fLQSmXwvrZqKyDQt2gvJ4rvLhDSkTdnBzH6RT57Jz9j9R2Sm917LDvvNQCNqTsLKrrfjozEg3D9wBgRL5W",
  "key28": "qEZVLHgau35YtG4hk4UN35E1A7LU9sUke8rUP34RgyVaigppnbbRJrSaEXVNqzbiPHZRBfZW5uaHMSozo2KexZm",
  "key29": "3aqXPJG18SvFu5vBJ5q6u1SmoS8TrFPXQ3KhQ3zbMcghQC8ZuUvVj67ERubBamcRbp8vxvdqQMMiQeKXUPx5zRQH",
  "key30": "2Uu9kgcDSaZ4oqLtqD6er6xD7fnecKdkHm4BpBAjXmbuJCRYnErYMHru9E7EK2Lsi6yVDCcmC7P8ZfWDTZiannon",
  "key31": "3n2TtG4Dp8MnFumv1ZqCVKim1jdmqcc9SZKjFVy9mJbtJCsSPtAjt9q1wHLSsnS2vjB82fNbA7cx3UUZDJw6K9v3",
  "key32": "5fCRpzFv5hpc5zJB7oqoVRdJB5R2dX9B5xXB7M9WmKm1Lv5aqLkfJ2wXzfkSCYzhMHN2tKEbj7cUXUSwmKS7SvVe",
  "key33": "4YbpkzifWhhMge76if5U9aadpDhfcKDyLHiNQbRnC52X2zASU3QjFtQ3sLVtW7WWXbvXSjc946MabSgem3MyvuNx",
  "key34": "67ZLFBQveXK3MGvqqeQkYwAVMZDivxQmtQWGRtVfPJhmqDQKZgqjntEbaZ3w4a5WmaLfq4qAWhZTtDjtjNAtC8Fg",
  "key35": "2vipiKWmLJtNLN7aohnQXBnTWFGQTmC2YdRtZSqWaU9Jg6FPcocLkpQv51Uz5ASHDmEXNkjtFXpEAdAzTvc9gNno",
  "key36": "3BkrhsV43exKWnat7tGEr2SonXkW8sCzDiRPpD3CZMa2A4oka2W4cGHf1WKEquJZaAwitEy5R2MbgF4GmSWDLsqt",
  "key37": "38MStc8ao9wipFJvEo5iYdSeffyCDtpNz5bioh5cdNuNJKZtou5Q1jCS5rxb2yZni18TvPiTZuV1zpF6UzTC2CqZ",
  "key38": "2S22yacwvNr2jyqEJkaeZP78hgqBePYbp6mireEBXrz1upT9wLYkJprDrhBe9QaeLiY5BWniJZLN8aAJwoS2h2sp"
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
