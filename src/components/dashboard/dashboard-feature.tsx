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
    "29H6C7NQHuaLTpPvhWiF3EFQVhqkdHvpmg5JRF44s1reJbFh8qcrfQFtxkXLtex59gKmunUQzrqWxxSmDMVYjpNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g4LisdEUiZAQj5Qpp8W3mnUPnKAn4VwqwJXMh4MeAmRprgsV4UCumNwpy3yWGG272gCSXNuNm1T6u8y6ahv1vj8",
  "key1": "21qd1dLq2a9rPc623aDeGDVTDM1Aj4bhRXLMLEtMkdBr9n36dzRbKczZwjGtnnNq3nwTYcMppN87HFckrbyKJe1p",
  "key2": "3Xxviiramr6g9uZMfDt9Ezbihcic9YYEYSd4ts8YMiT3eNmG2C1UHNEmuEyyo4KPTnY5KXXCnYcB4YYVjnFUzJod",
  "key3": "48NuPuFgXhAh9eGkMAP8RBxx3yWGop9fzNW19aCYqGmDGt7GrQ19Z7abFxGRLW8J9DfyoJ1cdtfNsURivRWna4je",
  "key4": "5DDD18eNtMBCbRNxqKxHfFtJi1eXK7LijUhxFcpgr5T8wUWbQgpWwWrMx9ojVo9vE7jFiroZko1w1T9dxBM3y7cf",
  "key5": "5Yn9qtAQ9nTK8V33GDvL999NZNTUEhgU5apjMfrcQGDdf7LtGE9QL4WuWq9raEGWCarWAF8sZb75W8MGuD8rt1UJ",
  "key6": "5m31itsaWoNddSop2xpEFxSoMFfgv2akHxdZAGYHLhPxBhUdBuX9EU5FrBAJWRLNYJ763CWEmqLyVxEKTG9sU1TR",
  "key7": "rSouqe8M4nLgVwaARjPXE6FaJS4DacAVHWFy7eWN2oLPeRCfHH7c9My1Rt2a2xTf454GcpMBeRHVbmnoZEYExWt",
  "key8": "42syGYtVS1BMr1LQ4a7Uz3HrD4TQEgnTqeZmtCdnJ2ELsdCdYyJuY5ntnSbeVGfXyA1RvrJxMnRbpdEv6UPzhTKH",
  "key9": "32nuLGVPpQcpVCc8KesASni7XUqdv4TcsN5sUHch7BXrfvJhbgDDJJU1UT9mxgAvQgiKEeek7HavyVacyR61mmaJ",
  "key10": "4n5Rop6QtnJGJDq5Nq1pobZmijGU2EBvyL3M5J4Rcnugb6U1VBrkCacG2GLGZumNc7KCdf2qUK7zyhxvyz5jmMfA",
  "key11": "22YE6AfYmT3vUnZ26XH3YHbvtaRojomAvuE5nN1cFbzT6a481bLBT2VY45JBX4r4og4WAXZHDCgF55nk48iQ58GQ",
  "key12": "4YiVsyqE54WQXUwGsi7Z5FCSuhEJkgj8k9MWZV77xZtGuV7BymPjs5qev41ggmihbpUjQFGLTNsUCPwEm1Kovrtf",
  "key13": "2rv9Udt7M3VQdgVgfQcsbfkcqkSCv5QDWnk2eqmQBdy4TCEGZNSk6JFydepJgmupFYyzT3pwohJ3HZ4eae7eYQsR",
  "key14": "Bq8LXMV6E1Cxqo5hgHqFyWecVTW3aGc6hqzdTaqkQFecaUc13aMaah1beWNvxnJzDDHhfr836Ma9k8THEHzJhN2",
  "key15": "4sshedsopxPTuPmfqRKaaDACwTFpjbUXap8NKup1WNfd5uNswg298ZQva3CjsMMPn66QCfaw9NjPxgJduh8W2UWJ",
  "key16": "kk1syihoANvyyAe9pNDPbJVXPZ1UUmk2SAkUbwmUz2t6gq5G9ystrNCeRUQTam6KaUHwjvgVmPKw6STumakF9tm",
  "key17": "4tXaD8nRJajqNB6cHDX17BXUyimUy5nQ4opysxMX5hM6dWezBjUfuaaWGDnRNv8W7J9uHPZ4ef2ntCQMVS4RhvV6",
  "key18": "2umuZH9NGNDkvnBzWjYkvc4BNJMz9LX8p7gro8r5x1VvhLpjEicwCTLAywPVER26aA7wpajJfbSeNR72iphofJJY",
  "key19": "2CG9GeZP92Vzj3auXTvW3KoWSuLCEk9mALqkTjfszMrm2jy7hVKG3wRNgGnXKxz7Va6LRJLm3faY1rYYsc39Hv3X",
  "key20": "DrHrvs1ABwEaEfnWM8v4EQma5Qpy7BMzkZ67p42aZSjETK2JWCTw2xBvt8qBmVAF6ipc3LVdPKmTycT4jQbY6CW",
  "key21": "5NjtemMA1fawZ7Dey9LgQeEdHDZ24tzUFpesLp3pd4iMi4a8kYZCnJwFRG8bAnZJivmJPjgJQtiFeqsrtgCHeK9B",
  "key22": "xXtgdbpNXPrqbWRcoxBaRxZen6YyFokSYttSrzs3foKb7A8rQEE58dTmKmLA7WgHuuSLR5p4tf3bwif7SDLTAdt",
  "key23": "4XRnKNZo4R33pDtw9sLcY5Pgt7EH4k3qmekXt7iGpLmxDrCUfae8YgSBeTnUQ25b6JHYwsdc8g5MVZRpExipy96M",
  "key24": "5RMj1FtFbSfBJyBuDBtS3djFFALudikjenxZV5ieTasA79An8GAPZjMd5JNwHLKXupBkQCUyhUWQhYLJqzaAK7sy",
  "key25": "3PqTfNYdynrGEyjUZxwfCBR9K4wtmjLvCdJZvgofnhG5bu4iLcgecS7C4HHy64DbqgemwGsdWSHTi2ppYYQnmR9X",
  "key26": "3Z1r6ThFwdtmDbvzWTTUa71XyE9f6yMdgWLqZgngSnFQLtfgHUDaqT9Yfkwjxu2xDfgTZ9urzWtiZ3bKpchBNYCH"
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
