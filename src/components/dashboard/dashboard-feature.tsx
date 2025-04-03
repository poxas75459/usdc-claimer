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
    "56cyGgB5XrqvC8JeH4SKwmKC2rC2WRRV3ZX827djNVXtjFHX1Hyf5RDaAbpE1nNvvPcuZ9CLawuKX5hdVqa1YweZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qgGJKB5mpT7BJegRaEzcF1J6UaTqe9PRPpwcDkYU5eQJNJ1BKfBvaPUyFLt9A16Jx371zZsLfEducFC7BastQE",
  "key1": "4874kJGEVC5EfWG4LWFPdRmtXbcTJWu1oxaEyBqPF6YEhWgSvs7BQzeJ9mWVWqaPzBkmSGRjGUUVtYnZaayYQMy8",
  "key2": "2Xkjh9uu2x5MWc5UsVXvZzz2Wge3GYrc5EnjDKBpZHu1TBMJ3gjZmGFHbMGdRVvCRsAaveSNMXnUZkGQo5yWofP8",
  "key3": "5y38cqR1RQEf4C6tGbfx2hVHoHkQE9nN2Ui72bkSYvgEQ5ZMPAESU8zs8v53sb7mv31W45zcGKvCTHuAZ325p7R",
  "key4": "5Pa28zoa8geb6iEsNjQ2JSoVrsfNrCutvM7j44jG7TNLVhje4bckhy23SNiECFadC3YKXgLy3Dzib1LfD7MM44Pa",
  "key5": "2NMjPq6DkkynxfezYW8oDaF9WMSiZxCBtvvwDj9rNy7Us77U4ywj5hm34S4Vmr2cZVWrRat8boF8EsGHDgFXAbtY",
  "key6": "2Dmhex45woUz79ojbijCBNXmVSRVGrmM2QHkhs4TUhiw67XHEADvNrftPfHiD6u141BMrDWBZ9TCPZpp4GAD8X7z",
  "key7": "3RRRM8RNC4NVWpJftymF3hxinvzkz4ar1CkqMx3v2oHbEAW7kNCW4e4zAtHgWgp4sbU9ioERA1SYMhECZAEfg6YV",
  "key8": "4tfKu4o1mRWTMu1RxEcPacETwMyqz2VHuJNQh5PHEdybGcVwwfCkMCdydSGGsxmZsBc5vK9N5t91HtwxZENNBmSa",
  "key9": "5zC7QuXouAxRqGhxsVGMqBFa5ZkW4DNYrqA6W9VbPuEd3TJeWMWmxEjTd87i7CHT9Dk8Pv2w49NQFUi7xC7Nkq3D",
  "key10": "4hJXY77FFn2nkYoxsg8U7ecZAs8pNevoYNELHgEazKBF2b6PQj5yRhDFAqfW9VkHhMLm6bHSefH5zXGB1RuzT4Vb",
  "key11": "3cCQxHvqJu7zjRijgbkXga14PP45ArPGcXg238ZfBCcJ7bqfyfDmSXXNQC81znybmxDWXpeysCUu3tjaxChNts85",
  "key12": "TyYDGnfRmm1EooxR6j7SdckwrnTVWUm8ATDirBtTw5H2wSbGwjaTHYzHhAe4j7tsY18i7VwcXhaE9TuConwjLy7",
  "key13": "3bajS7aDi4yCxwJS35pF5fYWhQ7oLyBhH4eMuVYSboakXAS4YLusNwbPReiSnVrnJcCSvrgzP2ufSfSvEqPckbTH",
  "key14": "5QDYtj5b5meJawVXhYV7po68bPc2cAvJqy8G4cnmWKUd6k3nMfnxQfcDNoKxJP7p82vEB333DyaQ17RrEu74PCgB",
  "key15": "KksCQNtxR6ZS3VfbcoXSt162Te977i7isdqzW8AbS9NEEBmKtQPyfSGgGkuH4U4QBmcDQ3K7N4TD5nsAHXF47nH",
  "key16": "36WWpniEzoYFggKS4y1nk3Lw7t1cfdApQyB1fE7BM2ks68XZHJqeUNXFhVFXtkYuuDBiX2MTM1aJtcbK66C7Jiyy",
  "key17": "2mAPbbKqV2F4mKddzeppdhneZS5f7e412QMVEYMn23N82fVWw5iPjrG7CgFUsjvJ6uPzHEeKKbgeYHXJuavVEkXS",
  "key18": "4jnEgWCqJw2DRRH1uD8ucpvxqx9uPKw7YMAecdnBVbMHkznzswVesu9uVp3SA51AkFHW727w9wLDh7BmsmWAVnDx",
  "key19": "Mwq3aPeUFcNJhLdo5NdqA4GQ9SppK71ck7dMJ6RVkyU5yrjc93ZadbVBWpNR1Z6KNtKKpeP9pbhQWNw3dv6HqeA",
  "key20": "4GYdS4LbdRxqTJygU69BzZYqAVmNgxBqKP9UhwuntT1cfHKtpn6pF3yQZ6wMZuzdRnEhaPaFibz118jEJQTruSiv",
  "key21": "238r3sZbpktgC6FZZQtzGSN9GLoK5somhsqBkcfqN6CaWRUHBJHDdxfPzn4bBZQ4pRdmBDrWH1XTjqTwejPoZV1Y",
  "key22": "38cDUdR9eEs6xym9LXHpjkPrr7mBFxmXSnwXpipwoACp2Qt42K3vmJxDtqL2kTLT9YYqURyRwF87FLQwxhLG6ZH6",
  "key23": "33tUYh9dPc3CZS5BUq3Gp9Nv7d7pQadYdRrTp5MCYqNrFQ3Y6UHACyjFDg9f8qSAprMUG8Y8sHEsNS4tcLpWdNxZ",
  "key24": "4iUvhbDBkeb4HhK34YsGtDY5DsvrWPaKvQmuKo1bpxWfPiL4tZZUCPEfwuXBaEmqfi2h2nCJtwX8LF4jKFmM4tYk",
  "key25": "TYXvtSZNrTtAMQYnA13KbMiwCGKyYKNa77yGAXDDLG8XSCaDkcqiVhavzSp9hvVV3RcxgzJ4H1Cy9GtW4n4RmqA",
  "key26": "xEAKcaUgN8uDgjVuT9wbhj6yjsC9YDvsWgfyR8x6tYkjnZmhXa29QdPK4x5DrydG2B3J5H7AMqig4txgVGAD1SU",
  "key27": "5x4ELHNM7erCY7KBuJabKZEgRX8JFRjpaAtxJKygY175Ggq9kZ3wxedSii3w84mqzp3fyq8n4XapHMwquR5tmjdR",
  "key28": "3qPtrdpY1zdtU76mDXpit2bwtB1U9mHTkZvDqsYPVjQoqhwyaxhzjS5vWCf5zNJAMrcoBPKRMXFRnPW2WmaDN8d8",
  "key29": "4oSqqB8pEyAX7ujH3PZJqhpvEQdoRpmkYAAsbaFqdHc37DeLS2nL4fGGQ5L7Hsdq3SAVie8Z7rxEEx6WiSwauJHQ",
  "key30": "48yFCatYxuvRqtiEzFttcctNM5TB5VDsKDVRRh9pybicN2M6FTStugWRtXBUkhZLkg9ugWmzAjZCDcEokb2wR9KA",
  "key31": "2PNNCyTETC1WTRyK3L86dZyUmuD4gp711CgGwZ66Q3DcKFw6466zhgUeu5mCNyyQxH29T977BbQxFdAE7T1e97Eb",
  "key32": "2Ksb8WELuetvqT9X1L3bS6VLekV5etCr7qV6xYMUSnY63gb2hKBvsPweVY3GS2vmEAWn42umzuUnNHgCEP25gTfw",
  "key33": "2ZH88HDpJXadinanRhv2Zv4LYsc9kHDX4sFTLJ89mJrH1U2WU9Nndyu78zwFVpq8BqdHAuoHDxnfibd8ytNPgGGT",
  "key34": "5aPxhkmwQsZtFvFYeqa72Hi3vowtRrmAmz4zDNSWigWqwxoCHSRJv4jpV9xnmY1ZaoUFeqpxMX2ceiNfnMxnCCQT",
  "key35": "59XwxAVh8rQ44iktWwDCbirvUuTrvoapZf5S9CKMyty4dGnAMwm2orcpE6pvcTKtTqpiRT3Sf53ZsaULhg6Td3yW",
  "key36": "2GbTa5YW73TAonkyCcVC6tXskNfksznrHUi6QyEHfCimLnTVV8EXzKkjyzbKSQrjNGCiYX7mKPePSzqAProvTik8",
  "key37": "59MsxzJZGyFvJeoAoroVRD2oxZNxdRBmYsFVJsVZDpru42ywREHNtBnsF5CVK4n4jP9YPyN7BkQ1DhmWnmn5pKDk",
  "key38": "RPNi1SaQvyrbiwMEju9ddXnog5BTZCgVzN5FeSc6FgPLw1hh5Ry12kFTRzYvQ8Qqhi5JDtS9RREs5XEWr3K52Vt",
  "key39": "4FriQL3bCzKkn2QndwaN9DEw9nadoGT23fdjdmDgyLengvdNKY5ECDbkUWSme3GVUG2v1aNPjNf8U4C38ZRawVVs",
  "key40": "2dM9Knepe49uv5ebJLssnvKMvFWojguzutJ8wZncNRzTx1jAd8zGWrQmhm825nUeGLWC5bWfHuKG1zTRATy2pkFP",
  "key41": "mK8oPNT1Esf9SJBP2DiWp2NPtqjJNFtK5zyJ3sfEP7UbKRQKn4PAwcQhvJydHAKf9mUF7RcF8nLSCvUXMpNpnXn",
  "key42": "2SbmUzo8zwCUKmyY8RNvaQNfcpKKT32Uu5eejj19hnb6fTSTJN7fiZsV8CQxrh4j3HRUW45KNW3R7xKaQf64gpL2",
  "key43": "4xWYd8Vw2ysVxTm2h3LDEJd5QAZeGF67SRu2jk5MBYLtTRS2rQYyk2GR7c9zq9yMeLfgV9pDYcJY6a151gj1fG8d",
  "key44": "2sW9tm9UtbnG71r6TXSD65mxGwvaVvyhjquEGa6DnLN91wk156LwYynGEmpWFD3GrPHmn3RiPC8TdYyUCMeXDMLt"
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
