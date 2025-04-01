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
    "35UNNeX7ji1iMFcfPxu8zaQjWeVGpRGdDSfoRcb63eKpkhjBhVr54DoSbvH6Dtbu81Doc56kGKGssxJmUCeGDW9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8CeAXB34wirSfX4AHL6b1vba3vbwhg7TZLH774sKcnvNPSe9qkPuYX9iuJa5SB1mUXF9UBxaKt8A7ukArhS3mn",
  "key1": "2SxoLDU5Yi7838DDWjC6RZbvpoNG937bebwWzD6SW4hzGaX3tGDfLeBK295dYxHjLbxBWxKXXnWzCy3MoQ9dunLF",
  "key2": "3f58DoYJWAL1XXhp7S4Eu6HBwrVAcXhPYCwSedyMupxg1cSd3mNs4MPCtawNwsmjoNxJeDr7t3ro2bN94sHAhS4r",
  "key3": "5PkgxwbRGjnt63f5ZajxU5c7XRKma8wvpHiZ9dUZUtLL3vWHPuUZAG4hZBmXPqvyJti7xeUjzxVjNGVgg1nwLcPm",
  "key4": "2KvjyBG9BFK85GSuA1TXHv7a3VawTCjcFQ4TdRXuf3rfCAZZdSf64BubMCAy9P4ufp53RkGgxDXCDU985giEiJEB",
  "key5": "sSFeQ2TNBCZJ3n2eQCXnzA1W2b8FauEuJeR7SZLYwoghdLLrD2zjJXUxj4pBLoDPaWaviVgMTvWurLkQGC6XdmJ",
  "key6": "wLSGc6Beaqi1thJw2AD4tGsxBo8NVEeHc2CjgPLViod3qUdQYbX2qJ252RGDQh3Da2Tr5sFmDxHHhvQFf4F89n5",
  "key7": "55Ui6jJhfzn6sc1JBasUAHu7aJDArLb6XmC8iWP6V7FsqipyPGZmUeyqAM9GiWBLcTmefg88wyuoj5vQfXJ6Leug",
  "key8": "3dRcExNbYWmsV6F7NXfPoNetQ1oehns6HbLxJsDEZmDYVpmfrSfmRFxxEKvFqA1Qg6G8fBDxWVzLyLRkEGKvJNKe",
  "key9": "5HJN2BurKvLVDMxdSaJxMgebQ9TvpBPdsndzNp3AaGTzacMEMKh4k94oXrmFDVQRscoCh36z3H39KrPoctVa8f8E",
  "key10": "zT94SErgVXN2Tn1kA12PKxApVApWrPJwBmZ22FgooP2jePkU7dj1LycVAuui5s9LwSnzcYVpc21Lk3T8nyeBRC2",
  "key11": "3AeGYp7Sh5epiwq8foBVL7n2DhtpPtKDP2zfgRu13TUuscnb7R4zVemYNo9e2AzuQkoaZUn1fxHbj3HTEdhTpBfc",
  "key12": "4pwjH7pZewa27Tnf4nA3ucdqokxyqqBS9FW2rG9MPfykdqUJVPa6cDaBnXpSjoWxrtt4P6HaTo5mANC2iRh23hSh",
  "key13": "2EeRr7n4ksGtf55TkV6Msnvh62hH1RE1VPTJ59f8d6Bgv2EbKx8H8x459uXbD4V4pUbqXrBDMZD3sDFWnpUFcb2x",
  "key14": "2ZTMFD65AjLp9CbEGDummSFnGGrY1N6HtTYYWUFeAx6iw7n7HisDY5A2PmFKskZVwn1DRce73ZHbgMZfidaw9W2Y",
  "key15": "4FtPFMQFD1fJV3AWE2J9d2FygmxZcQks96U7QW97PJs3x55TDspWSAmfwrk6mB8fqhMEQXdACstZ7TNHe7MdkfLC",
  "key16": "W5BU4z4uZ5ivhJHAgfcau7cQYnjSTr3d7EJpRtqzaWomW3yVsxZmFsS8tE4aN5tjNNLrqZih4JCSrhNwc16EY6L",
  "key17": "3XJfbFwpm6KZE3yqyvopXvjAkQnPwJvSEGbpJBML5hRsSLHkTJRS5qcN76tJW33JWbk16ZgoKdx6gVAbH1TTB5w5",
  "key18": "27uuK9phv2tGozkQafhy2CbiFE7e7qUeWgehu88azVf9EZdctnMz37HJgZAwkbeSb9ZU6jG4YBzY76ZyxJtmHJMw",
  "key19": "3PS4tyrorAc2zLphqy3tyQPoqPHD3WAbLAASirWWxTe2Bk8mSwJDGZ2fbvMovtruvc27tmLo1XKA5YbtauFEwfiJ",
  "key20": "611cZHbp7jCbEZ9vXDk9KzZzkuYC4QNTLz7Bb1bzoDX5NXqL8o2uzm3CErEiG6EpSknbnyCd82jLy67jNU3vnp5C",
  "key21": "4a7XAEmEGST1Po4wmFyRKNBf8XuRgPUucTRD3ntntpAG6gwP8fBfHLCBcSii5A2RAqVbVG6X7Z2vfPq1dHsugWii",
  "key22": "4Gzkp1WgyCWj9M2tH92tQmHEneM6rbwabq8iF1UXJy7bLXVHPaCPbVG1SAWrMDq8sFqsP68ocPiNVootB7b25N4N",
  "key23": "5rsCiWLYi1LKRqbCs7g6NvyghQw25sJEM712AsFdNcUNMicysVpk9d4f1Rshdss4zMAMcLGeriVbMCw5aKF4zr3A",
  "key24": "WNa9MKLmDDAKG3xvSypYPWfVVB34Tm2Gyejut41arZ2owwNxQoiSHxKra4LkwKY3LRA8SKLTMNsmZnXUQNJonBa",
  "key25": "4BpN8NHnuMUtz74Jnfo76k5g6w689z9zPzhD7kgGEwGJj7oWVCTZ9aRcAsVmo6GVpaqKUJFkZbKyME1yjwN6qp8C",
  "key26": "MHx97Fd9CpXvZuwcKwJGq6aozJFUGzj3gTRBk5S69nu2WBJ39Kv7G6yoD3XiJFJSpgxEzv5tMPecroPGXvgHgij",
  "key27": "3eSpRHTdWeFJ9vGyhyrAUVeVxDs7Uk4PKWvSioRRbWEt5v7ZM6Pmz3DhBgTyBSxDsmYsimVtcNjwZJjKbyiBLZXF",
  "key28": "YykzHQpRZ4QmLTKCmoCRaHd8EhqUUbwVrL5ywBTwU59zLTL6wLUvrqzRBRruJnW1Zi4kg6EN7cjCUeb99irzsxy",
  "key29": "3M5zdZtrWujvEEGhaoKtCZc3n1gr3XD56cKFCnpQ5rgWT95WV3VdxjhMsuXy3TvZpg6gVgG8bz8dn5QpxaBQnDUP",
  "key30": "56VU8WzQpQCt6pZwQNDtNv65TkmcapEiDM8j2AbX45JtAGXkooQkqURj5b2wukZU92yY6Tgnha9FCrXxF78EXtPa",
  "key31": "5o7dqc867M1MFbb67zaXV9jvmvqKBmYsgnPQvce8PdCfpm78C7SzEpTm6CSgaqV2YiLm4c2nFbjgEq5XucwCH1T",
  "key32": "4e4612pa2tVJrmpY5he2qw6oWzAa4cpX69sY2hS4xLhpKsKEwLhvuWzV9FK9KifTVS4mHGMDPBikGhBx8FpQbBqk",
  "key33": "2pv32gtQUU3WbZDTxyw2RiUajemMK5MaQwD9CsB6vxt5aB3kVQJR4S6mVbSQiuVpdihXjWu2UDZTm2aoP4FV9WGC",
  "key34": "25huDTeCfJHLx9eEEthMHZJUTZZV2Nc2zgjkiyDcmr1ZvX3xU1vVGpQtsHwAk7oswCa8QF7qyKN59UFieZYstRvf",
  "key35": "61rrVHbuLnXwZrJriHuDtTxQPATF5H2m7SMou7LcGXDCVZV5LtbiuA54dVHmTzNiSFJrE3NJYpziQrrGkB2WkX1Z",
  "key36": "25PVyNzvewFFLwwpd3VzkxkcUK6r6jiL2H9AQuu32Hm6P4ZqmKLiRLVbjJZhfjnpujL6y8pA2oakd8NqMkMm4z7y",
  "key37": "2aBVEW4Re8wsLWoLDR4BjJQcjuqcoNHqEkynhZswmeQR5WJEmhGqi2HHZNUHMV2k6a4YusgrLqpuZxRBKhcGKvaB",
  "key38": "2h7A1rgz5N1idV8PQbncDGAmqYwDUFcfKSnZ7MPy19HzzhUEA59DKq3f9ATgnEJmfwaXxtqSSMzTmt4n2ARTQkSd",
  "key39": "rmCkDNueEMgu4pVd848Vhvb1gsbs5UyQnuLRFMESfRwUvZ5bKDESKNFgHL9wCjmQ4XnQSjgAxNaWxns3Nd6VSne",
  "key40": "29igdDcgd5hDFxaPWoc3WtTmQRSzdrxseRFeBNi37tCiD8pkAP74sESTmKMxU71V4KzwmkPjpXHDX2EBzvLCUB5Q"
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
