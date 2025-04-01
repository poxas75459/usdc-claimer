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
    "3SGuPTJjWYbzdpn6LxM6UHX37xVH3CsV2hUpCxghVZE2Vw3q7En5qcrzjURfRLcwHcr7RCWACuvZ9CtVj1Cysshm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LasatPEfunmoEvVEJsNGiizgYPQ3QgGKvETSVqjkLjf3NrZUbSMr8JYZEP5jnUJjUd51YWn8m6DkqhZPLzPtyX3",
  "key1": "3LDEXbfkUyKzAHEUaxMSofR93JqQ1k2Pagr5LpYSW3WR2Bwn7odqJqAjX8wgCgCMX35wbNYCPmWsL4UxvZajDv5H",
  "key2": "4Q8FpiKqUmKfA5yF8N24EC126LdYWHd6rUZ9qnRPr3zKEjnA8rrs9EdaNHB6jH4oqxffWnNNjsASADFCJKnigct7",
  "key3": "25teRXcyNjWXogUSPR6X2UJodTzaLKv6Knkw2ojG1nUwg9EiyMhZ9uFvGDDgdV81LWisSsTLKBivGbdHUSD9Psos",
  "key4": "bWZ6AR9iS7mJuVVvCSTFvxmbaxsf7QYFirV9SbxqHrRqDaMrRhfd1usmHagywxTSBtjem9g7z1gRtRRrine23cX",
  "key5": "64wn1ZBzsJGzhBG4eEWTPoG8zw7LSC5BVdbrYyGwUigd4Mt8ojhKAyi11gW5J22xxatG6g72vvx4N1TUyJqtzRaH",
  "key6": "5s5njDokW1rm1gEGhnkhX5TGytGioXmAcD5pCEJ3hQyJoC9SPK6AwBjxFeYxQGvb2Z5zYmaEbHGRDM3YjDmg7eHo",
  "key7": "4eHVe72MgVzdKg4NmZE663FsCVbGLFDoKRM6Thqrt6TwU9aNBgBRkBun68RDsiE4uYTSTYPqQHZyY4XwCLy3FMkF",
  "key8": "4TtazLGM3KLhjuke4QXqWDbpcv8oFwRvMa1tx7TqyuyTZUnVAAYFnhiQaMmCckxEUYr54sRgJeqnUtV6kDfQRHZU",
  "key9": "4RvrSsC1261baTYt9GHBQpj78oThFDzbRXL8gc3WoySxTbb8pmL8ZwJW1UYq6GytZ5W8mHFASi4j1MjUQAsqNdFG",
  "key10": "42NpcnBeW2raYG6fwixnw9b5jDVbNWw9LxTKBYMonzhouYPmSQz9uBQBVzdvJ1Lvg6f9JgFN2MAw2BtBjWjGj4Vb",
  "key11": "4bKgaEtsfi4t98LrhtGpXQ5N44ZYTM4CPtTDMs7AUrf9AX6AE3zvaRZxdzCsmsuSPCY6SPRnRMMjc84LSv1TfsHd",
  "key12": "4mqTeXwzyt2FTrJgb813b8UnMdhCX7Siudqu3uKYsCMGLVN1qESfU23ympsLS4e1qJDrHLVTqJcdovn1w8efQCDZ",
  "key13": "3fAL3vs3uPbYivgrvhb8CqhRCYRKLDEBBkW4kYP9YEhPuzodEH9Xss24XCcDFFHGsMNMnYt8SRy1rYK22XerJ9Q2",
  "key14": "5oiXqXGeaveEVV6XynzBBVCVC3EZ1KfFoZwcoNF7CK4dXDTkJ1itErvZma4LVeNjjLzuwD1ZXDdfu3Rsh9P65Mch",
  "key15": "46rSD9WaUKp2SjnjErMUDEMBtkbxrRvCTYXULcyyVSZp2zFBcAYr4VXxPoh4Znt45cZFnrcnMncwrDFsQwcej7kH",
  "key16": "3MCgXnMGJSnQXjZFCJGPv62nBMMEsJb4q7NxCd5tuEJrM9sZNQinCvDST28EemaR9ier2Fh4ae51oZVCRNDKLCGJ",
  "key17": "5Gw6Zcx3MFFYVnsFLBcbnrgkEhbrxL6pXTCqjFVokWM7oRmT8X9NwotbmZAvMhfZDhS3Y99MpAuC3XrMUSp9TEQE",
  "key18": "2NF6m93ASHCAPW6sY1cGH55mNnY4MXKqSBw6ZhgrmNSTR5qEwHEgTEcLSYDaVRTvva9Qv9UPKU6rsxnoYNhr7cHJ",
  "key19": "Nmi7hxvbyNvsb6qQsn1oitFjDQkA3xqZFLaogDtnjGRCGQLpkWqfWZaAUEjNCAskvWS4coerg8FXYGspZmQYHdV",
  "key20": "3UKpqq5vjGvAZ7J9ewvxzCVHArZSMthWSp7Bq5wzUQo2aDBs9Uum8NdrriarUEYtkRvwMF9CBBWZEi9pVVVyn5vM",
  "key21": "2bQ2bxzjyWuvenV7eEi1bciCgPRe3GRyYmw86YosqF7ycTnXiDjaciTH8yMi7foAjqb6w6Dw5Ri2QP4RJzvLi8Sx",
  "key22": "59SpVTEGRCueTVg1ytCm5xygwQEsJixyNX67pB12UFNbWgHigXqJkrpH6Wue4CJNtZ8kft8V4GHPeD7PhXoZKubE",
  "key23": "3tiXCm8jaCEeUJ2RjqHqCwx7Swwx45cBkcTJSvzGUZeJ4yxYRfPzqNLcWvqErfSKrzxH3Ca7uQ9vYbYP67r7wkfj",
  "key24": "ndrt6L65rVcEbgWSWVDxstPsJMGTztzg8KzqB1gFAaZ7SQD5Ckay55S7h6rFRLFZa7NVnXJ5Ts7BfZDkeNxzjYL",
  "key25": "tf6cwhsT1ocQRLvJzyGxJX1V2ELiAL6u6UWmYMqDLym2FAHPkiAW3W6HyqSQ8iYsUDhDsLX9pUugZLs7uKEJcqx",
  "key26": "2E6SzsngCF7m4GuzazMij9fRgUY2fe3cxSUawsP8qbCsCC5Usk5tFFFf49Sh8sDwCmwEQqQ9XCfbCtbuVXfHLg3n",
  "key27": "3qcXr2kcBPpsjQG8zmWEftdQN8DXFRQPpaPybAYyaYmDQeFtUueobFuaDDjUxGvSAkEghE8eF2gVHyTshi2GffH",
  "key28": "2esz1eDqCuksPekCQrLUqCuvJ792ksA9R9F9HS2KrVJ6EtXB3MskFLiFiZJD1UN9gSj2hE7Dh6QS8HDNPky9VzEt",
  "key29": "4SVdB2CAazoERKT1fGPEHJZrz9Qh6LwkEqhFMFWk5Zj2knNE9zXsagf4jsQYxngGRs6j6xPwZnpS8U1H8grLBV97",
  "key30": "4CNnoWB8o24bEZ1SAoxRMpuKmtHrUP8bEZsVwxAr5HbTU4KHaeEgoF1upp7EyZiJb6LGYJufZZwsWQ2k7NhkFx6z",
  "key31": "p4ZVTVMVsR1cxiXGxYyQWoJbiwxVQMN7bpN1ohEtAggYvprm65UEtxN5jS4M5fzpjqKCHWxngnPNifo4XaSgHvH",
  "key32": "5zbySek6hPvWfaDvgZaENYND7WEUSPgcBXuqvuQCKhCtktsYcBV2uuXaDBurDpHZFVLPe9iSg12yfKMdfaE47JPT",
  "key33": "2Wje91dxTfM7JF39Kk6z1vjjA8y8nG4tXWrNGgJK3hmS59oqiYEHykEGZscvjBTLLkQkHVRRXEKmxjy1XPfbYU1d"
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
