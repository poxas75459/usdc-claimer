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
    "5Fn2XLYEgH3KD9YFGV2Pfv3tSZbpED9QnP9WzgsjWr3b7XN7pbNZv6mZb4KVabnjMrhmxAVr8V5b9MstaafKYFip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BuU4wCXbxpRpAiJudHFnViZSQYrX8JRmDio44k6ekFqDkUGCptmc6xa5GqEVrAupP6imGUu3YtpQZSTHBhya4cy",
  "key1": "2BpPLrp2WZbYUTU4cu7HJd21jt1MupHo7tLkt85xUGdN5j6zgkE6DfbTsSiL8Bfjt31stU2tsngoGNJGiQxXHjwv",
  "key2": "4aaYjwzKb3Un8sNgANpEExTU3UGhzC7j9wTwsohCid7dL92Tg2Lg3UhGcAyNCKzW82CBRvaQoSj7ZpCQUhBunDcA",
  "key3": "VJzpsJnPgib86N2hoZpR4vN3MghqR3JEXC8UwqYkwbdqnSvWrmgAFaVjtKYiGqNhA7WtjQYMKEj1M512z4b7ynF",
  "key4": "2rbh171wKjbkTHrbvqB6KQQdWL7PhcNJWiT5PqFR58hkv6f9fEJ7cN2MixhLGSBQ3Nnqebxqjwva2s4dfHy8nZTk",
  "key5": "5jEvMTuVKZaVRKwbHoWGb4HZUJ931GR8FcYQv6CH1Gi2QQUJQcwm71MhaSkvkgEe3zoUWRfytLw2H7zai9roomwk",
  "key6": "2QE8ZmTA4F5EwMyj3xrfStzCg81gNckWBPiWbCrgKni1tenLEXntVZv1VWeqi89KFeS6fNeiPtxtfcuQ9F1fXXjR",
  "key7": "5sJ2ZiYqzMsrrZ9q7E8beURyQLagGkBdo1w9aU8Ds9izoLsSVMTYhikNDrZce8ynM9B84QfU3PLEwPernjjWSPnn",
  "key8": "3C7PqRjQNNdizfBVitqMh32h2ZeQFc6AhBw1s6GCmtsfmyJer5PpwpYiJgnyP1R7QamwGvHTbHVrXmkunowkvuCa",
  "key9": "2uLQt3bAnvY7xj4qo1tHgdtFF4gTExA7WUf6cEo7gs6mSfELYJ5rDz4LHyRmKK2dtpRBrKS5iZa6HZuANikm5XKP",
  "key10": "4V2NhqWSQgup9S7x6k6qtvWks4vWYvbFRmK3y6MJWTyrXXfhcJtknJAytuuL8ViVwnN88ibh6uLeRnscyZTucjqN",
  "key11": "4DKNpkMDpqKnSzKmZhNEW7VtzHg6SpcDxiG8mgVvqhGjRoY5eRg1grHeJUCA6PT68trftRUJY9bLzV3fUEpA6Gqx",
  "key12": "4xaYVPsKMAHbZhQkDUWNZkVug2ex2gEp65E69nG7D3eLzfexFviSfWkFSoKEWc44yLLu43zQTTkzLWkK6hXvF7Te",
  "key13": "5ZZ2YMtyEE4cVGbMeoW5t6u6pxJaSG8if8HtrCcf6zQqACPuXksRqYxwRAwvFNopK1AiQmL78pY5CHyydWRfxrci",
  "key14": "5aGvq9BbaH1kf3pK8UhpmTUdncWeuu8xtXBM3YFAZgoufZaubRjqKDtmBqmAxL5NcG28nyNK9g3oBWsZebtTYCaM",
  "key15": "3vm7vGxJ6sWufY29jtYPXBQDGvDXN9p98yjBbhEoKqaEx2h9FEkA5U4RVck574KjpkCohb93smRhrjBAL5cVma1u",
  "key16": "4PRJpgUAqfxh9rrhNCoQUhzRnb6r6VPpQ8um3ZTg6BHFE3Dav9MkVpU34rDLsrZ7w5ZdrUPHP8TYUTZ8dBw2YNA5",
  "key17": "668QjErMZtgScjJFvJcYgM5r7pniCdGXcWKpfkfewnV13ydu9JkVdPsuCZBUdkPPENKKmEkSZapYt2ngs7JxHv14",
  "key18": "61Gsgwjm2yTyVqG7b9BuntWpx4GmTAQsMV3M1vD6HsdFXV8w9cmHvfs7RXRYVEJ7591HpnSc1nw5k4e2R2PSw53a",
  "key19": "RQRr81dtDMMQRFb8iDf5psSLcHuw7S7fi8VTuopPnCJis1i6jH56c4hxJ5CZGF9YajbrLbf6Hzg42ujvEzTy2Rx",
  "key20": "4YW5tTYBMQy17T38o39SfqVPWfmPmqpRwhAp4ba9z2LdY7J1Ne8qGak6GX3nRDKg2My1yee7bT8pZyosJMgYi6nk",
  "key21": "2sDEpMuHcmdMkwiUPrVofGo7cj1Nh5NWcaP2RXzQk2XWp7L3kDSLJydyX4sHUcFX8i66W1DzqYJEPwu7M9S4KQqs",
  "key22": "4spmTEvRFCY3ZA1iGZwKxzBwgf73iAcps3dayRNsftGLxyfpPR6ZWEXLvmAkBNNc7FQgNWXJELVP3unZkjZeLUbj",
  "key23": "4bTxZ6HALvvXEJZaG9fK8dbVdCuRcQn14p1UuKC5Nwy89iC6xrBGmFkRjLki4U6ueKTNhVJ4RpB36eVcd25wUEVx",
  "key24": "5QhQ995jUNcYSKXAwdtvZZYxLEXfPXY2GrPxAencjV7TjA1XXcyJC6bwAiEcvSGSq8LWUiQ8gCNpYK3JHYtPFohL",
  "key25": "25SpLDu4gwtmkP56rkZc2jF6pi1dJwCqWCdr6GoY8G3p4BQbdRPu2jh9gKN59c4KGxAqovR4upnY4s5sx8fPrdxv",
  "key26": "C3a7RR2Qd1WcriVifcLyEuNKHCCjHouM5pDdy7qcTH77TH2EKyJRsTCUH2rvYeL3oEqBVQp5sU7uiN7sDXrCrvv",
  "key27": "4ViJrmUTjuf2mAstvhgRaenSq7te4HC12TeayWkHShmPncahDV8XMfHBp1HidnvckrQKvwkpYVJfR36qpxJT7tDF",
  "key28": "m4gBDrCt6AYkpoa6UktpEYVcawVyqJPSr1pnH5xSUQ79SLt3RJDmYekZBBiC9NeJ21LomFvKUvmWpco2zjyPK6u",
  "key29": "3rFgsx8HEMspcypGJBskC5paZdRNEwTr4jHTZmoE6jhEizKMJrhgowBnrERcSpPxw1LYKpYsXn1oYdBkJYuExgiC",
  "key30": "4Y1ZcYR9BZB8GhynbUJLzmhGwzid78C8WGYY16Cov6J7YFidMYfz3U7VH6i5L9xvLHDgUQnbwxpdjK69grWrW4ag",
  "key31": "1WAhQCtZsraWjdbWayaAge2FuLd8tvDq1RuGnhKmVXAiDoRek1AASUbnspbkCEGQZeYCt6ezN8jSpdFRortdZov",
  "key32": "QxbuqTrWG3DqxU4th37T4jWaz68agzzxAJYjjFL24Bgqb1rfNKEr6qAbLb9E1ucEcFfaCxusNE95qZfU31pN7Fh",
  "key33": "37dTgTKBgVPfh5RUexUAxQo7Uag31vcQD6Yiars4UZYmAGuvXKBMhkHws98VtFrCoZXDCwaVmnxqg9KAdB4Jfhck",
  "key34": "4WhHcRdekrPDHXUQ1W58VVR6ssNmW2pp5yeYZHcCdhTfAfZj3gaDTxSd1yZVzRD2F13S9J64bJwMyFQ6DAWLuUf8"
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
