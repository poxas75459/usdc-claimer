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
    "5EZp8snKWWhmAvGqKs5BgKYe18HJS7T1jLRorjnjNwp3yom9sqWY8KuasQZVvKpFQxCB6KfHw3XaQ8p7GbjXZTkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkBqx9FCxgyrPMkHy6UMmFaNXLae5JgRcjTwqy48rGRThossDFGePVuVZi48uPTPXzGjvpvd7ZJQPV3Ey9NGbTw",
  "key1": "34hyagWj34aDMNmPsnL69uuHCSi4Lb2KrR8XCLPzttwb5wDCrEdHMUbaMA2ttT3Z9A43zZ8m7YBVhUkhBDxnnjbm",
  "key2": "41Kio2qzihXyS7KpHDpnVhGPvrgrwqCJAhMvmYRZfq4epqSe4bxaYcHnCkU3EF7rbVS7PX322ikqZzTR1EauBnWG",
  "key3": "2WNANQGp43Lh8muZiNdd5EFQuXBbivNqEehuUkJNvDKFAP99uPtKFK7Yqt7SjLoKX6HoRZk8oidUETtNbG2BToCe",
  "key4": "5Q2eRQt7gJd3HJBivoU3fvHcwUkUCobZwMRbc4UPFWeGoeWQbAQxtEmJQ7m1nWRfbGX5TGM6SghyJLdnFuZHnaK9",
  "key5": "22NYHD7wdXsNx1fopLvWVq8mB1uUX7fjTaCuV5WZ2qR7uXK5Tn7R7wvgXR9NfTDzvsKUw5dRTsy2oe7MKwArrSBe",
  "key6": "2wYaMd5SpKQiEKLfRypEpbUro6xvvYU1m53UhJXBn9R7Sefxp9wh2Vc9WzZaLYcacMejCj3KAWEgFd5tqV2NkryG",
  "key7": "3PkZcSMQKMkftnJTsTcYJ2f9EbJ9ZdywqZ9vM3qnUKPgHtiGgBCP1meA2U4ZU3KcFHLTbkL1cLX1FkBWqFeQxMXJ",
  "key8": "5yAirzKKLAkF2QTXfeThdMJuLfJoNvLVjKKfnFavHUy3rS4Q2smFURJhaaDmZWhLLc9GE7ZGbYHqnk8mVDbU7Dux",
  "key9": "556zA2ZQJQVEL5cTavXAvkgtY7xqWUwZ7STCA1euNo1978jcH1RCUCxZcwgcQLKtBZ5or8qry86qvWX9UecxHCfu",
  "key10": "FrvjsEW7ViunhsL63GVTgGh4DtMG1U2xjXBQvXiYZSFvVEZb1nCvp3vFZCpo1R8FerjExLwTPezeNgwL6qFJEMG",
  "key11": "5sqHxZxa6wwri3Dme2BDvpt2jeN9eLoQ83BTHqWxKSkwQP3VK9tVddWiFG2Veof8T5uR82PS9E4fxaQaAEGNXdie",
  "key12": "fBXbvapHYdvqVhNU1yDdv8pdKjW5rWpX4VAwuseq8cGs7kS6deGDfAhBZuMXkCsHY1CsXmofCT2DAgg77yy9VBC",
  "key13": "3K4zAUV3kRjWxdpZjLxDaLn9uWsZp9bjURL5khpZ9CFD9Pzb5SZiMbGqMcy1eBdDAYSa9xUfAuxmQBYz1jjqqrFo",
  "key14": "3bLzwVRwWbjU2R2U3to5qYRoGDivbkDGCGxrnRkyVHBQy7z2XyWFQD2Sg4JjSwGeKR2yyaNicnb7Sf9irRhpqUKQ",
  "key15": "5iVZJn7NomSz4UyQ3P4SRrkjvdKbbYUiqjnMGevHw5d5YnFzSJwSRSyz3P9muiwttikNyfnVxG7P3CZw2VPvFzjg",
  "key16": "5CbNWe6FwXfsLTagj7EQRkBSf37tFiVoj8yKbXkSgPahVcXRxLZ8ZjcrVUNfRe4aCszeVw8ujp7p7SqoEtESssgA",
  "key17": "23QEkXUeZNjnNHzy9DHxbMntWiMpvcXqUXEua6epZfkmo2vjtiV3ZWMm95KBYtzZSeDdrFnxcGA2UvUPpJEMfWaA",
  "key18": "2nJ2x2BdoQ76fMu4onhPAxLw8skxB416v4U5Tv1vUzXsYC8cxiBqaXzrGE8pEeFLdSjabJnbRU9yxCasqjF15Nbc",
  "key19": "5PSPH28MHE1Lzmjgq7VEyjGiQAtVAGDdsJok5CgKzmy9SRS1wososQqqLEY2K13uJ7T9rjexewnbrALnvMt4H7Pq",
  "key20": "5rSsCCRKvcFL2fHd9Nq4iaRM6iSZXGEVVNUmfeEsGVKAvjkRSAjFcvsnx4MtqWJsX4TmFeMRdVzMH45eMmk5DMRW",
  "key21": "4Y4DNUuJm24muiAaFPYrNuLrvBDZxqZaye6BgBPX9FdvQqdhazaBRfMYPHzLGN69DVecPEH15HUr33rs2uLfBtWy",
  "key22": "3y5VCBCdbFT1nS2z5RVoM4UNWKse5VaiRrnjsFmfbMCGo8LYymy2pLUMYf8rH6cCiF94nDuVZ1JbDkDWnJnVhucF",
  "key23": "wWWyKTeJkFKhZfvJMFg4NEwAvjFdupkjhQYvQrpW8ScNAFob4EH4kCf9xL1Nrz9NV7qwhX5gk79kaesmH5vkR4r",
  "key24": "36eAXAy15tzs3N5Z93uDQtT2FbBH4DxRYTXp84H2F31GC6uw5vnVExhBe2Vwt6feu52ooA2vUbbm8xh3KkNhAw6c",
  "key25": "5HrVjPunzQLPdanit3u74VxCB72rD78mzHS6o9c84eFpBKRvPohVHtqgJXV2Dwz5ofJa3sfSAwVNgnqHXzbvMhBo",
  "key26": "3K21hS9gcVohYc3PRmSVSZg6JqtWcPmiXMMkZL5Fm26phqNDYRE1NoiJj4XkBT7uJAC1KyXDiJcAEN3G47Cn1nri",
  "key27": "5RH5kXp8yKDZyk3WvXuZ5tg4QuZA2dAxE2QMqqeLmGbciwr182PG6vNE1be9uWqvar4G415BGMmQRpPodTwgDEhV",
  "key28": "3FhxPC6Lb8VJBP7LsKqNeWw7Vb7wLT3B6g6hMEWTBwzZFw5oxhmUhdwqZrFY8KDqPKSsvh7zNYbTgT3cqRWT6seQ",
  "key29": "3yFZgZdeSB5Hg1HUmL5jjkibv9TprNL6dFyCAEnX4mVL3M1V6uLM8gf78JTj6xyfGGFKH6bhMYYb3QW8qD2HZkDB",
  "key30": "3Qr98EVeqbC2cy42mPVvopm9f14jGvAQWjDXrC5ajTN9hPhrTCxd1ampENmnhPTcTJ3dAaqWCPVD3Xdxz7MsXYUw",
  "key31": "3NK6eTTrWqHpkYMgXauz5eNgErk4gd8akp2W7qVxRhaKtmobw98sdtpnJVxoVyiDZyjo6JyFgWye2kgunzPZdmN1"
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
