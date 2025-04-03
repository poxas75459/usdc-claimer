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
    "672KhjArxKmYP4JTprcz2ZmuwVUeBF18sg1rsue1jNFz7a8UaPRjcZinCEp3De5k5bKTbEswYRWLSKNXfDvfaf7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VNAVNfnMNrRCq5dPXLxk3A7o2wnPBwXCwyBwj8iVeTbe4LNivCZ8ekKoj4qy3FhuF6Kp8A4RD6AMU5njKJbDigD",
  "key1": "67BnDYN8fH4v2rKBNqy91KtAfJrFgyeSyMfXcykYTqmcoRvB91MK9BcrCx5F3VSVTVf98wLcR5TDtPbne9YBSngq",
  "key2": "pSzJ4zCC2qZzVXMRKGDEGacWPLi2SRmcUSXAVFv4JV7as4nLpRwPTg38aoyGcZTHjcyQit9CF4Sj1tUU4PwbwYM",
  "key3": "yhCiqi1TjJsAx8rPnZbffy5ALSfG3yPjfXceQouS1VNxUWRqUttxqyyPyFCNWyaNHtPwVtUTSCXRiK14TJdnKJF",
  "key4": "3JQYoLkfkEA4crzxSDtf7U8qTP34Nzt1Qz5G5KhY6o8oycGciSsnnPNZgDaYsfnRcnNCzfyVdKHBxxF1ExGhaWwf",
  "key5": "31JV7dc2tgErras5ZMoVZRR89hkisHY81fHVRySMHPQqr1fTnZdwnakZGmNugEHNtJD7qVDzmWvDo8Qe5E582qZe",
  "key6": "27ir3LPBsF5aGo9kkxKB8S24rssk8huP7WQcRAjxxzdwso87EtR4myBNgaoz7Yj8dmjwWJKYx2BYwUMPcPXcsNvq",
  "key7": "3kVA26wtRNQSGjxmaz6DkGMHonZrJVGM8MQE4puY7eAyjDeZN9VgNjGr4GW4Bo8hWUK9CFHPQaYJDs9QthdCpVCy",
  "key8": "29iC356azGx57yYLrmDQZRu4ehvP6TvnJC5Rpwk5KECAWwMhEaZJDGn1swZEpwWTjorHgofRsTNE9iADBoAMHFvh",
  "key9": "gVoLpFj7BpRGYeYUA3xeBmkMccgyvXYMu3uEfoQoc6ZTzGKdh4T6qKw5xEbaifLuvYGnQ14rLTeCpkdrw85ZmqM",
  "key10": "5fZKvSnjFskS8o2eisJdHUiiNrHkGUqxha6F7C1qtQ92KiMGczrAwyPCK9V4bQBhB9zCvSo3CrFuo3qCNXmwxfMN",
  "key11": "4fos4rKD4NqdC87gWzb96GdpTG4wrE8CUFGQnn5MCfwhe8i7SAAkQXTK5oRKiFc3bxLdjAwAsFwusCtcomf4wqvS",
  "key12": "3GcxidQ2jDsdpAL61wAarbZfbYfG5XmaPBJ8yr7kg4RhhtWPHaiaaYpqNSiiDr7WicK99kXqk8s8WLDnEfESGpBe",
  "key13": "47Wysjs2rcZDfvsYL4tf1HzmDAW4f2UR6RGYQwLe4c7e9Kctso2rrwHufL16AtGgYYyzdYHovGCTy28LXmsuNnTM",
  "key14": "5YVN6pqbEWZ6bQ7Gxy72VBojjc2TRAB25bT42muKKPVPqLttL2mTwu8fgFqrvNqABX27KCAA4nBnKT84Bzv3utPe",
  "key15": "otT1hCyizexnEjkMNv9r4xjZ1vJSv1ndcoiyCz5YLf4AfGJECyEHTPnnJui7qyhGzrbngBZXToKt7Pq1grt2ufd",
  "key16": "2xHNAbXoDa44MKvXLqn1TTfKmYhtaQxQJUguZPi4myETvS7bmF2ua7YpKRzKEVzaZXKUKZUwNyWLN1vhLQarwmqh",
  "key17": "4p2cPkwTZSGfiksXc8WBDZEnLPcpEcqV2R11CXBz1oqUqN1oCLwjmVjSY91iRxkXEgGGFmgqUvpNnoxtpA7qcH8r",
  "key18": "VbFXL3gND2AFehFuYL2jvyjwySqPD8ePBi2XzLuvs3i8SYGVo147NAuTCYisMaLqWpNicWCxqLcFxgzCVTGhQ73",
  "key19": "2CZXegpyqjs62UV5mcyXPzkZmJ8HW9oZaeikKaJpNqaB1RgznPmAuNvgm6EUBFkMG7tumrDRGj6EyGu9m58dNho1",
  "key20": "3sCPxmhzQH94YydURJ1TgNAhjaCBmjcw2B5Qw36RiZP4mw3jXuDnKHVR58egD4kyETgNZ6vMTCRXuSewFTpWHDjh",
  "key21": "LvdbqncBg1U5rbCw7Mw4uPu5zJKKZSiz9YhmTzGoCUUqK4bgEVyDS82k7wpTKZNymNQZ35FSHZ7SQNFXFYtGpS2",
  "key22": "3kokXfZqRZnqRS85Fiso2q6xWeTYsLPaRuJ98haJ6FhvBZgfXan8rfUQav98Pytt91ueXdsy74tt3kvMmioArS9m",
  "key23": "5378UAUBWEu1A6x7sth8gwSG6YnecD81QtbLomHKU8Am4Vu8B738fW7ModasvLEuw8rnUkX6XC16hB59nAncCbBL",
  "key24": "3qnAAzkVkfopaXrXHYAWaUEQpy8iyev8DMUQryf3E3H5rR3sUvFrxf8Bv7hf4SBXXuRvq9LEY7iwhr1R5w8DSL6i",
  "key25": "3ACnvi43BxynCd4d4d1tTdht15TzkeXBixNr5PFpL9UTLnQZ3BWGgWbvLjxFkXgDKVyv2ZPUJSVmgN5766uxy2ZC"
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
