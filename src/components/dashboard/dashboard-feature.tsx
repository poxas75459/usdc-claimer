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
    "FEBDWiAXQ761SvEz9E7KJ1qSCM4BtGCynL1va49DUCy22TyUrmEQ6prw52dFjR63dLWH1jFxCREZx9VaAyVtd7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arUrksvdUpWnYgKKkCaLioawP8DyCWXcFx7cdCzZXEB12dGBwDZkkwriErxdN2vY9ovpXya6wD7qA8BaTuBd7Wt",
  "key1": "516vwT5YJ3FFeUx4eL9SP7XKNbZCWZ7MSTE6k7mSkmvFXdMS2fFgR8RQJrFhbibEmHnzxn6VxVKwKCnmSSeSAMZt",
  "key2": "4xuDNpmFozT6C9xpB9JQ6Y7T5xaT63twvVuxyA76UsfrEzWroZ3jhKXAWRb68ksMwNj3iD3Ubd8q6fkUDPMxJm57",
  "key3": "421Ff9XFYfqkbomvTBhqDJeggfJocHXADtVBJMWDwj9YYNXwSVerXe7norpCrdmCop319XGeCQCeUWMCXfAsRJCB",
  "key4": "22LxkmATF2wsAESakNsT68mzNhDPn6cfAy5ufHH4ErXAcnvKZrewZweERNzULURbQUhFLRXwtTqbGhUnJoAhDzNq",
  "key5": "CSkdnK9JggeQsPX1XfaWkuZybiy9McQPHEmKb8dFZny8hrVk93T3GtkBWWEH4UgMnH8GzXHTHHkycSq2T8rdini",
  "key6": "aaei8C7GUgGH9Qb8i8DgTDSHh2pT2yoJd17fwYtMzgWaPEH26kMyPpDbydpzH7uTKAdk4exLGh8sHiyEXW6MDbU",
  "key7": "2HoenFxJQXqAgJK5S9jcyiSuWKeqdCKTHzs3MnL3CW78XzYojFcY27pN1CrQY8trnfZD8hnwQQaCXYJSdiGLyfjM",
  "key8": "qF5L3RtBG9ecSDx5fiTy9erLLAsHE8oyXyWhtErkovRyZSzgs5ZouGAHquXXabnU8JDj6PoYHZHTdbMfPUzBDWo",
  "key9": "vuo4RPMyYbkQj1YkENzsgNYY5V6UYL67V7CWig5k3WeejS5mzStQVE7W95tC7Kpa4Rh3VMh8qNBCMy6jo3rcQ6o",
  "key10": "5oE7ZoCFjAknRETtdyAZKLoDTR7njQaYmoYuV7TxBUsJ3qDkvMhvaaDUNkrnYZjBgPnJ6fUKZYevYnYYSLpAdARz",
  "key11": "2dAScx7DShKL1d2DPmmwZmof5PL3guX2ut2wicGwVNgzkfi7m7NxfsHmPrqpeKqEPTDpTxxyDsGedwAYEBvrbFff",
  "key12": "5XKxKUPXK1yNjKXVSuGUnSHUJxkrvXXxmbDCwk8sC7yLXhfokJaP4JcD4JmLdzF3F3XB6VSUMVYFV1dRVy3tLhqL",
  "key13": "5HEvmuftPdg94TrMUvUZuEAYBRSyhG2bWQaJcgoMU5V9eBgb3GdFaHfzfZ8sZxcMP9mMzXwUZuePxXexRMQFDXkt",
  "key14": "3zZtdAgHvsi7qbiKWkpSTRkfaDY4CkU5MvqxPns1bsph7q7jej1j7thhLCTn3HJX5J54KCXP4eYJzm48NLZ9DvLB",
  "key15": "3icowCmGNxJZXu3MWDwgeFmBWbFFDuKGhpVfcCYWhbGYDZMmA2tWSVW44BwsQbAcH2NYiJaPcbDs2v2x1YWeij15",
  "key16": "5uQosBKHCwdS4Q2bKpDRHF4sWMDaVuhPVQk1pWt7oA6P11cVX5fjivMJcnYY65Fd9XB51crqmmKPzhCnD6bY9ArA",
  "key17": "2sZbN2cF3VtiKgfiRZbdorsFrfXqj1b3zvX2wBTNCV1YS5xy3wVKdn7KagSZVuNXMKyo3H8UFa6mHCiEEgUpHMu1",
  "key18": "5NJ8jeTYg5y2cCiR533jHXVgz3mDc7HGhqUfeXJkGaHBE2qLt4tXPXfsQb3iAawAaJAsPSjMH67eAx5oN6caUraX",
  "key19": "2vjLpQUCCBgU6gnUByMxq8omxSrDopowCpnp6BS82YtAbH3PC85jqwTecPYfPZGH9ueBPMo6QiqpwJNP3bqT7Dha",
  "key20": "2ZaXEp4zGjxr3muwtwdBpYeBddnVNKmfavnu8zij1jv2sw6HBLrbiujfqvf1NpNv5NioFbLJyegkG3cMeSm17UaS",
  "key21": "5cCDkSR7ttYDSVNWwbVVffDtSnuQDBUa7UUpWFdWo82Hh6aHJhcuEcFrtE4g6oMMs23xypVkBdrGygeWfbci7x2G",
  "key22": "3fLtNRi7Shev9HUK6CbYidKZowo3V2DXCPrN2pJq9Ev1ZrJGhba9nkdGfuYJG7yEmuZgT65Kye9NUZLDcn8s8VdG",
  "key23": "5M5EdVuVynWWMCNg4A2wy1uVoX52TJoELahjfgtRxbrdbWjsuPYtEjsv4G6xWSzJGcuwaWZJYyEHWkPMcM5VfXt9",
  "key24": "jbdd4s3SQZHrX48hEQ3uKVLJMZBS9vKpSHY2aA4tUXyw3R5yyg9hJWcDVgpMZVefnFLDxnHwFENjVcwcpGDTxr9",
  "key25": "mJZLQSqipRDwckR2xLpjsKJCFihg8MHpM7TkEqoWSQQ3oVhp7g7hNn1U5jU4vj8n2FwSDDgmGNHVCyz5cN3dgD2",
  "key26": "4T67PGAEEPTeVHJM1RpRUUjtHfJHzPHDFygi9vM9i77A8uHY1hhoPVPCoxhhSkpqcWqs8unoBpkCZhNRaJBZZdWk",
  "key27": "3byLQnkHimK4vebd13ACyMVCkxFneVy2jfUnU7QuZQoaTWCbhjeNJAjY31jwgNm95pqBCeKBQSHGMMAjHbVj55CZ",
  "key28": "Wief3EYd2naUC6UfDjhJpSRmshUndp2SZdRRmuT32HndasUpa9G1z7RmduLTVbiHUTjTnAYvTmcLVDiZNwQVfXP",
  "key29": "2drn2hUXhKbSACZegZ7FDwGXCuDsnKZyHqmTTT8gj1iRtdSSo5tDuZox4jq3FUDsTSMNnecCaLkwUedgnuh9RU5q",
  "key30": "3tAENirZgkQVjVKsG7VJdSVfNEy1Rtg1k5NqKzw1CTJeP3BGNPnpDPq4faeb5fXs1PjN6YAhhNogCvZqvUkrr812",
  "key31": "BpT8R8FBV14kSDKMhC8bx2dS14thv6RikGfqSVMo3LW9evgHRxSjRHQTUpRZCmoXNprzLHRDRQmXqSXoySuL7YX",
  "key32": "FFnW4ShJG5tdykRgs7zbk2UMsWXKa7h7e6yoXoX4epBdEkUeMnbP9PgsngweF6UQC3ougfZ82EBBmpP6NmMerHd",
  "key33": "3FhmToJKAiAzob9NKYsJw5BznJ46Sg99oLJ5q2itunSWHVaVNb29iFHSm86S9JFu1o1i6cwJPYB1LxeSZwbhr1Kw",
  "key34": "aPrLbJ6LCg431rVhqHikSxyssZJRhECpT3cUV141GdoYTU6uwvmT1t9YbiGi5SSDDJVYfpozMK4kvY4zfHKDg3j",
  "key35": "3nvWjbrSdkWDBXtyPs8WcxXS37N6xRde8tWAtfPhZfP39UDFMjesCRZsi8zTwr9jZFwTyw1LdpHgdQiQzHUTAsUY",
  "key36": "34Cj5MBgo6Dx6DtgKQDSsBCzegDdJpWCdkXVgy9XgPgsMEVcEzhDcAqouFmuBLCfnJ6JscbiX3FJXAJW2iTNVDz3",
  "key37": "3KfBAsVP7FBeNy1mrXnCyfv5RiY4A6PTXr9bpkqZWq2VpLHHwFrCLEsoM3T6iNhmyimYRQkY34bdUnz8Ja6bMbWR"
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
