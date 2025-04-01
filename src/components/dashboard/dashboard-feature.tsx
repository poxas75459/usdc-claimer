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
    "QUMearCMDGg2TJBfXT4NViRREsD1aLpWei3TDrj86SF8Yp6Sg26pVopEcCVQUgUk4AFaGnVRNZw1GvWBFLStiUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nLT8f1FCe1MsGA3dpucp6cUuEuFuk3QfeShL8jo3gc9FGkFix7dhdPrhu31Dq8V8qwHtS77PMtmBdz4FkWHM1fe",
  "key1": "FYByYJRMhQ5PHQmCjra6qAgquNYsF8ksko6y7jTVK4gQZRMMNhTMTxhYjz41ebpJkUBcB7kzEYqoSfmGciZeZgU",
  "key2": "2DTRXfDZg5hSCLNtedw4A8RAGhP4g8MF3reJpA8PHQSQsD88UkRL7ma9kez4P1swwob4fBu5M64q5TUB7Mp4XxAV",
  "key3": "2Kx82mEiuBuyjdidir9HuhJFTi4iHCBePNJngQx16hM5vQc6Q1WAdX9Cuukaq2ujhrD1S4ZuL2JJ9VhzFrzm1piy",
  "key4": "4Vj1XeoPzSVuq3WF5jowptfk9JsuwCDb7aoqfwKEMZQd6ZFUHxRYs2YpT13di3zCmNt9VtbhhuPc7nxiCYp9RSfs",
  "key5": "2utgCDTfKN9P1D24TN61CcpHz8HHFhJ4ym2nb5B81myBgGPA1kGejscuNGjjU8MRv6ZSspLvebyuH8rY2imCTKfD",
  "key6": "4yBZN52bpKYYEMFKmNLATHfknPLEkodzSNN7Ev6FN5EHPBRcvD6sCFgsWZGiQGx4YYhUstN2aHxA19XS55pSfVZB",
  "key7": "3c9rFgUY6SEvMYndKDbyVT6D8W5aJVSCUTVdotd4fQRjL5ztfQgqTwCryUs1wAgiwe3N17wkt67JTtnt4ewQA63S",
  "key8": "3QmRWcn5HFVMZKo2aja5ihxBJHC3iUoAqraU8gQMPFvkaXqD7WFoKPyr4TWwhMWaChPnrDgDiM3NVxMDmdZTR3Sn",
  "key9": "3XEJ7sqmFryB4PbB5Tt7gpytJMBvkTYEWyiQ2AMQ7gzuas1ywTHdJ55AUKNoxBSQhWSL9Ty4xQiWvXYKDxdzwym1",
  "key10": "PBMyTW7UrVrePDCXWGi6mwyPwZaBAZMWEYuy9eeDMLsbEJAHgxw8R7i7h8LxNCQSgibZrvsgpRPgpjToG9Nwc14",
  "key11": "2LgSAWQDMSHYUfZYw4r2vmtKQviwS4aBmvCqK1MZZCSVD4RsFZ8Qq63oSTXtRg9zDoaftXj459aRfvz8xEBKUhY2",
  "key12": "2DTxoLeR8yxvmwj6bidPZDETkYceToJ2u9vFdydjwyqxHAARKLbbTyEvZnaf6WmcTZKGBvD43W734xVJ1LShrR4V",
  "key13": "2AMZUQM5P5Q8yDj4g9tSbAyCqRq5k9R4Mb1TaN6DXsTvBfpvNgqrQPdpELcLje62v9bsxWbv3tzaYGMEdYpeptp2",
  "key14": "4Xjed27m6dXvkMW3R9wpCVzhcd3Z3xEpMgnnNJqr62SCkrgfvhQviYVBQ2TdpC1KXffwyzBTR1AGFmGp2BjDBv6v",
  "key15": "2VMx9yNr4cY4VCkFUHZgFej9j3RnhSKzScCkM7L13a47SNc99YJnWKQvf1C6r37LB4fxkDPTiKoJpHzkMrnhvXmd",
  "key16": "jqkjmoXUwU353Qrmn8FHRA6PPv9dykYLULEXWvdbeENHEpo88mNF2CjsgjJveS7jYrmbMG6xS1QMbJWcjRYqEd3",
  "key17": "2E1ZR1hubRg4c8DkuLEyU6s47hpLfBwc5uLMeKJq1gx8c3jHLC1b1rsWAEKSxqVyS2VW67srPP9NsH7Mnd2MgXv5",
  "key18": "2tf4XBc7dxHjKrvx4D9prtdY3H6fY4sYaKfi9xuB2isMidYdLPczYif3u16cZGztcNokHJstmHq3eSqSKNFWNmca",
  "key19": "BXGs5CAk18cyTjFpRZf8Jpm6BYLCTJ6t3Jdbr4PwewSpCvmD9mqHbHP84UukUJLrvHvUy2WCP6xvnVJdwBztMgZ",
  "key20": "nR2RQcXLsgzQpcvvbtUN6Vu3eoeCjSPXQF4pg4NZusQvsDLdJoYtZFCkxazTbjoAf1aBfPXEYutqEviQwzUzE82",
  "key21": "YuHXsuWxe1hCzTiFtgh29dZyZcvTqkPEsuYDbXMoT89giSqqWb5nUp565BV2TtjuKkXp1yShmbipqXc6iDVLJQj",
  "key22": "4NQib78DCM5BdSmjWG9Gqpie9jjsAxQjaPd5CMMaGXLz1GufobLQDweUign8TTP5fpWudbWGAZjWBrTJFj6TsVvd",
  "key23": "5m2iNFsMJMGEZVbRx4dbF6XYWmzwJtKKuVsRFRFmitTjWv2EMmr6fX3Harrqb6LRXLmtX6fhaiyn4xCs5egofBL7",
  "key24": "2MYQ1Mx4AjWv5kJsAVLJe1CTFqZ9XpuTC9e68t7PFfriqZ1quYwWbn1JsYedumwxuaWkhUzXzJwq3C65cDiQexMJ",
  "key25": "LGUVyMGc6zXLUzR7MStEZpvY9MrM7Q5X9vto3s1yfisvwM4jHR9foGTPjzHv3AYnbEPdz7YRkosVff5WXXRvRMf",
  "key26": "55GkLqm13Ce9tknWRAbieBN6ptv3rynqZrY4pBduxn563Quo1dA6tK36fQTTxWfGWhVHkyxmbBCZRorSoTGu2cw4",
  "key27": "5UEpHvm59oKFUaffRcRgJip1pshe1hUjs9MAnN53dqnCGRsB5SxoaHLwjrNz2cgN46YEFFCNwaKvpMHp2pJsenrx",
  "key28": "BHmQZ3MqDBz3wXifFw554Wp9xG4AKJFig6rbTJTNh1VQU7PnMGR7WKYZ7FSf4L97r4xDh5eWz4JG4epR74DQ2b5",
  "key29": "2x121ADD8M2GRoWxuRwidt36UWN3FTbHbGxB34K6LLNt1rJjD5zGES12hXisgMsQESdiPF3UPXkKBvzGfqZ4pGKZ",
  "key30": "5wTDCzjapScco96TtuHs2x6mixWQEauQiZdCBYWHggTgLDmPPPhvK2ZaLFhm33Xs119FaoD5ph7H7Sey1b6EuGGt",
  "key31": "7sQYsBaUv3y8BVEqLRmbvwBsHHX3DfJVZxrsC5pA11YZDurs6c4prgjEMuCQHTdyhdVRLV65gvyTpj6Ef7avaBd",
  "key32": "9bM1zQgezvnVn3We3aSAQ5kbqCR1eMD38qRPcyioufVNRMcQY3zihcGrBU7xzfUjpCGdDUBe1471xQJxTFrM8sc",
  "key33": "56NRPomichSjhMzio2XQffs1F3joH9wUH1zzLJkfNYQRzjCRidmssG4Q6FiEdqp298XGEbdtfPrCtqicJNpHbAnZ",
  "key34": "569pjqeLNftNKfZGWVhfdbcZXRrSgznRonKD2pLmnwfNAM28yGNno41utK2s4gUNbgZQ5gJnohQxvYUdSPPDDKsc",
  "key35": "JiteZHE8tWAMpQ6RnUmCHPwS6rQ876urATDfAqheTvWeFj1hVCVKpnHEFaGaf5nno96Hj33XsxM1xms5z9L5zEd",
  "key36": "4xZVuV7ecfAxXgbFQhUn2YpReBtZEmNii1FMg1D3rQTZvZ2yk71fKNzGCLVY2j1T6uwigcgzu9Y1b9Re4cbVLQnS"
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
