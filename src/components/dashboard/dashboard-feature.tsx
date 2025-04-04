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
    "2acjDpxE4zCyagFxodPFzieMhhhv2x5YTZKJFnS9a855XVZgXfycaHx2frEu5yAyLAfLYhtwFqDnGMF2zG7Y9tMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cpWeCdMZe7W4T9mXMFkgYBeS86pX9YbZecoxy46YYfJBBf5HnLv7Bm5A3WyTqZiNemsD2pxWMXbp1VUbcvyAZn7",
  "key1": "21v47L53LUXMdEC9j4g3sCFJsVDjwJNrtq1zZPTiDPMY43beTYrfHWWcQmzaGaLKmnJDpDy5Hqe94TArrsHYQrpx",
  "key2": "sSepHXPsS8xXSYKA5Pp8nzHyWGpTKn7Zi8CDpWGLxHr216vfh3y6wqRcYjCRHEPCwrRCVHcg8tAneYH1toUtnQv",
  "key3": "3szr1RwnqNYpxQRm67qhYfokCkD45XvSbYgZ35TYHB4ek9XjqZiUPxavG6Rn4Uxtb2jMmAgpWMZXNdhh1FcTEvcF",
  "key4": "4JwHrw7AZhXQFFu4UXWqFX4ZtNavQYhVBZgKi47tHQTkLLjT9objvHP2aZvpP4keTpMNFEZ1ha3gsQMrCeU31iuN",
  "key5": "3daF4wtQeK93C7NCgf3Lme8nitRMrPmQQgjEM2A8C6XbaYQGegonUChh7c4t85KnKAzsmwrDs2rs6uki9cUGzuPm",
  "key6": "3AkZtD2iipTyGMj49XS1FM2hrzL9C5JQXmhR4SSHMzoR8h6tzaPdgKZLtBbCarJZTycDj319BGq4u8x5aJaYioG8",
  "key7": "5sgcUcD2T3N9WKRc599q43DHeorpQEqYL7EDCFmrLGWHZzDw9dRv2k26coXK6iJyUjBZAfCDg8GD5X4Shb6oQaq1",
  "key8": "34uXX6oj56WEEmWJxBNroX5sxSt1hMYNHRnurA89F5CBiJK3K1hJUSsf5ZDZPavDdjUKsaGyNGHJLqm9ewWyxs7q",
  "key9": "2b5HoSTbYmoao3Akd1PtRdCvviZ6fnJgvTXK57eKy6PYDgarqXZPatXJSo3gzwEir9Lwa81zdm5RERFcFPi3NBnA",
  "key10": "3DLmfGapiM2HcdATah4umuTfVERJZhJ6BLgkakPN6nhahf9r55S5cagFqsmLNmBjBwBqsgAYaos79z51aJxsrqvq",
  "key11": "1QxHdQ4fnPocKm4VwRC3U7KocJdYGQrv5GdFXuiHbYFjYJ2nTckttex8voEjK7PXPd1jUnScBfhYZT6uptzCmBc",
  "key12": "5x3aiianbTDTYAHUQunHKReXNGSngoJqoA8XjiS1LxL9QwhCnSJ1Hp3W7FnaWj7ZhVDxsYsFkgADtYpgc9XGdvch",
  "key13": "RWa8eNahEbxapbN1YNHjwjy4KgcX7MdSdtJRN3GSSyyiENT4UM3UfBmsASpUsMyr324cbfHytdWDcJFseEfmti8",
  "key14": "2vtXn76xEEeQL6jdt1kGZjGXVarbUfwPHVgg3gRJA1tQgrFXuPgAZKFYszUzbuqiHZedqxPP3erQn2npaEGhr2gU",
  "key15": "38n4Dp2rjS1qxPRVoJaRDjJWuoQzBgx83a6bFPjU6FuYgwZ1oZ9zNwob17nbrfC7ohBBpQwNME4JmW7FCTtKT1cL",
  "key16": "3JNCFarkP99747nGHk1vHveJrmmNnDQRuDQMocnGyx3Am5chVPVriE6WhWVn4Wq1SMqFrxjMUXNiDi6JHwjXhrSj",
  "key17": "2Qg8jREaFShj7Enud9NQ2Fe3g5rJ1mdqfC27xbuZcL5pYUg7USTEAY7rDcLj2AcbKLSFcofgKPzYnvBgTx62R8Yj",
  "key18": "UDMnPrfuYe7Y5GvM6eCY6YWcQXJ5275gqK1vMK4oBtFsYrGRHXCx7GeJpPRety7TFjTyufw8nPzSvV6fbM8dChm",
  "key19": "2PJPftnmAP9zQ6ggxysw1fNKfRZyjep3ytLgHnFQC65xGqKxnQrbyYDdmEp47Evmd3hxeiHYXMzByvcHaxfQ2xvQ",
  "key20": "22wQbpMH8hEMpEHwXzQwPGoJtijxQUb87aQgH3gK9Ez5AdvQPWM6vEhps4toTk8pfhVmCuquu7MxDq2821Ao1Nqr",
  "key21": "2KUPLzM4tnvkhfYct7FcBFUhd88epDtvukVM7r3Yt3csdAJVYuhvkjxtZNXN7ACoMof4BXSHZttgLRUww1fjruB9",
  "key22": "QRScv2VDsrPzUx5brAUHzXaszqxUmpp4FQFsyQM3W5o12tVLGGbJqLEixJznL5e9vNSHcPYJiHDgzwJMvKztQ9z",
  "key23": "454FXwiconB3vScz7eQqVju2zeAP5MQy2b3KwvcjmsJ5wYLAr3kMakeJvKp9nLXnnjxZ49RccWQDEjwsxZ9fdTyS",
  "key24": "ibhcogPFzkiBZ5hsCsNqPeay5aHyuZFbL1TP6aE9BiGWTtCC6zCv5YvN6UZ5VdLCPMb61xGvG6TWck1NYJUpxRy",
  "key25": "2cpNA4SFaB25m9uo4vvah9yBApK5RiLX9Gdg8USNvZdSLS6pxuhZLi5THvA8ZgE9hxXpm9CQ6eTyMF6cgdtaAai6",
  "key26": "4T7oZ8mNrqxZyaPLZomhyQHj3WwrCXM9JdbiG6CQcJuKKw9zPnGXmsq2LLYrpVRMEjaTaj1jSED51gkwi6aLLnnW",
  "key27": "LsxLrTCnkbr3vCH96ChxYgTBTbARScnXFtrcPXUtPy1eTEdVxXdrieVvKUa4ETkgxMuQmyTdmujB7UaeLDUxJeN",
  "key28": "HeWE77BvVU1Nq6M4ysU5tcTkRoVyw2v2cq4QMLU4J3sJt2haSUmjTFpWPrDxuXqJgtgHqiecTg3ELQTkU9YDGcJ",
  "key29": "28dyHJBG1jUaUYQ5t57tRerxgLFNiH8E4U7aXddxuUU1SBRY2tK73bzwZJwnGmmhAxpVjX3jhBvqcd5J9HgkQe2k",
  "key30": "2kGUXLSxd5vmtdivgJRXtqVVBP3affzx4md7q2ZDAmZAr7GqRka7LVjsQ2CYtcEmP2uSc11usuyi6kwZHYXhfUBi",
  "key31": "46vmo5uDKHmG2qQBU3e2XgUyhY114hZ4i88ghYSe3ZYmJ7Y1Xcg75WZBvPipjPCFUcsFM5j2c43V1J26MBPNcXcZ",
  "key32": "57dajy7wgTSdPjre2pbfuxcZHcLSXE7BpPhz87Td5qMFZ9qbBZqpkNuvuTZ9YLuVSq3dfQVPDk4vt1Xw9c3nVAw2",
  "key33": "dFofyit5siEcmS4nKKshRgNRnhHdasyZx2Rin2z6JcTmYHkjNRFRay6Ez89DGgtAX5riQZCFfbADxSpsN6SMFXc",
  "key34": "62LQqtbHwr3tB1ULKzP15sLcC81eAkSoQFrPonTQDRHZzhgTrNtxP5RU6rW9AadudQqfo3jfGXxLf6xthPDJDSrG",
  "key35": "3HA5TfUVQHyVVeP5MrxKpaCboFon7jfnshHTWrsCDGNV7WEwLbp2Uq19apvqCGyi6wdUVzwkN5UF84ehGf5oZGq1",
  "key36": "3Pbsm2kNVXoW8QWm2Rb52kz4faF3s4oDrEEKEi8nw9hHwxQsJGvwWvQBSzmkYw6W9KiGX6tmg5bSEQ5Hjgn2BfJZ",
  "key37": "5Jjww5KwqvCs3p4RPCYgJZYGP6hS1UWiBUPmaaAd6HtXtDCdH8qdFuuy9jkSLUdhgEK7GjFKgEcfTmLHuGrMR8NY",
  "key38": "67hTjrtNe3L2GW9EYjstXyMHTz8xthbYppbSdXYxi7LbW4t1vHVWQFhEFUZUWHmPZxLPejZwWtsA1pELgtWBC5aS",
  "key39": "4MFo7kgmP6o2M7UexudzTc3pjdzMFezsty6nKeGyHPoFfpXqsZB4dtAzBqXg5GfaUkxF7aVik4KKwupXUhxFATuH",
  "key40": "3wqhHMUM38cZqYCo7QmhTzbiGVyoPgeMjtGwhFdbZ52mtYtyJJWUd9iWptVMpTPJrXnud8Z2cJo9mdz738YKZSUU"
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
