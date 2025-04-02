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
    "2tMU9pdi1cUuRaVMYZtRZHGCBBZEopZDHPHUoBqpHustzE2dtY8F9wMmQhsTWb4GirUr5NqRAjy8kJaMW1XeCw9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nBWwmWaqez37Ej1hZAPDFdDzL9dB3wsCzPjKyvbBZkXLsS8YLqE6TN1pk5RDzHkzzP8vCNyKPTJMHDDuEmbixHA",
  "key1": "52CUSQa13LNXvhdnTeuJGDR2WGi2XTLCTn2Jn6Zzovdo3prmPuG8ztmctH7DeN8h8L7CbeNaPyjw5x8MnsKq9zvU",
  "key2": "42fbwSxtQ5GFwPqiuzWNa1YUZhe7HC7yLKQhGm1E59BNWCSJLTJ3tHGtBEWg7G1CNpNvXhQdJb4EbamKUUNP3wBc",
  "key3": "4jKgYMMLXGz36kAFH7D2bb6i99EnJdZxnxQTASciL2374T8ZimtJuUEb7G7fthYPsh8FEEwp4U97NWBcj3caG53r",
  "key4": "KqWk556A5EjuAwgAoW9XszhixHgyodY3V3s7SmvQYfTwJ1ZB5aEvKrwJHSMKTWtAkxPkMxyhqcjoi7PapTWWwY5",
  "key5": "2ShH6KknFmD8GzJ3eo4yKNvKxWZEEr3xWCJ9oHf6Cf8Zt5MyY5rmCr6aGisMiR9vNQL7AAiLBkJW7AVeTAfAQGwD",
  "key6": "eWNyMryzqY8DErMBMtE3QCNNkznwxpv8p2Sab9dSEVYPfywBn8W6JS2PUcuYMWQKpC1X1WRmv1H1w3nz7YWvHcZ",
  "key7": "GkCgf37J3uLiV3RnrVm4ayFVDyiq72UcGSa4TTPgMqBRF9vqVJUdqsLBRzkVHWXQKcVHCNUxP2nsbtpLbQnsno3",
  "key8": "242vmN7e2HZ2TWGpBerdtN2bkTsmDST48DovprZ7VXeZxS6imyeF6XzTnJrvkUeJMfUdqwDjGYP2P492xdYpKNgE",
  "key9": "25D5QfAUep1ARNDo1LrB1x3RKYCZzx36JwVNshpEvfMx35syYJ4NMbQmJfGjBJQLums3rjcBJcyorWdPbXHeMe6B",
  "key10": "4ZcXhkseEmziKeauRtA74Hp5ZmhLctcwbVtR2Cg7jiUwnBuUZTHLv4Q6ccbxYBQxiHsXKNJx46cEFZnozZWbBD66",
  "key11": "49sEkGLu1YmEfhuAmuasynbh89yMhd3JhWycmvTK3nUL68WUpkugErk53qTxrc9p4n67LUtyiEujboJQxEpnVW7s",
  "key12": "7YK2VQVUUNnBqoSKD82FaVX8bjRTU3aezqhoar6PwoRg3neeJoAxq8n5MpzH5iMVMfX4mEM45sbBoxuMgW2KHzw",
  "key13": "4Yz12mKGfG64NN3nGZGKiLxeTjT57YmXnxr7NKboJtA41wzJSE99dX36dbXvJ53SXoRffL6PyrRBQh82rhq7bytv",
  "key14": "4KSLrmBhXXWn5QGWofctreECtd6URbCRYLLmjAj5bazRprLVJwpmkCFypFkcWGDbg32cpKkiG68rsHyqRKhzDcmS",
  "key15": "61XwxLULhWW2GcGY7Jjwn1jnsytywh5FCmdrZtd83jrJe57WaUFLWsiVM9q27sPniZf336j5CMgzE1RHUziXvgYH",
  "key16": "4XFFJLV9A9ZDZNa4BoUiKUJSFEzbaXwZkPYe7sgCV82wDT2h9yXRJuytEc6mT6X3DGvcGC63kfddBwLrWyvGwSYK",
  "key17": "3XouQFmFMutExMTYd3T7zyRg1YPXkwo7N96pTLFxEoa1W8abH4ciu5MAngRSeK4jiu1kQdiWhPupFKLBKfBsctxv",
  "key18": "4ab6PCmAoSwFqoEmJXuwh1oBJz9RuWQLF54jBBZzwp86cGRSbd7pJhyHrKCH62kCBgzkMP6YMcY7Rbzj72SBHdhc",
  "key19": "5oysVXbeyMAhyMqvtp2zKwr21JgYvb6aC7MSsFFJSQZq6MiXSePdQZxR954qiKjLKTK7NmSfd3xuKFL5aBvPjfC1",
  "key20": "3zpa8GTPo58gNmVpnALkkc8YiAV1ebyJS5Bk69SxaKAvwGuDM1AKmzhm8dcQQhiq5yQNnaxgZmkopWiqhpQF34SS",
  "key21": "442bzRHVuiZoD7sqVKrxRUFf7Ew9ZLyFKbYAQNcKerCrwoh8riCFaPH726vRVMVTmekYfqCDecfsor4SKnct5c9x",
  "key22": "3eT3jHp264nn1caqEGnGJCKFX1mLx66dRKtR1niVf4gjrD9PqAtQMPcG89DAfohCuS6fdRggMpJAUro6KRJH4eQ7",
  "key23": "3NFfGAgQakd8jnXd4HJQMoEhtmBpN7imYeuFeCrnDjWpAY2dwPLFFbUD1D5wAcbZe1XCYmJtYfbap57gg9bKmy2b",
  "key24": "66iARiiotB8CDseGo4UwwoD72Tm8XHZrant5fbFc7Aty96GzgsbdydZmgLCoMaPT9s44WHdiHAed7k6S5p5DsZqk",
  "key25": "31CompCr4TuyoCkknAFSDAVjmiXS1uHhRoqiTLNHAGgvCu1i5YozgQpn5mTvR2GVYgQnmPZS67YAFTxcJd6kWzwn",
  "key26": "5Cs8KcBUCP9Jidzw67P9UytszfoigVVsw3dggMWHFc7cxx4PawqsEEWqXpg2jCcpowhN4hMrXCkRLcxpTKxXoJeN",
  "key27": "4nLLoXzNkEdTcMHESX8PTKzWoXTGyq1TLbGeKi5hDSuon1FxKYoUE1113AErReedPgW4B9WdftfYsGu8SS7UoWQV",
  "key28": "95hMGKkzb7JyrXJFQLXL6TBJMy2Qy5v9vKXR6AvZtUpfMgSSbmk3QRdNEDBom8RUk9SXzWVSGLbRegQ28PkBDZi",
  "key29": "2bdGGz5tBjE5uCB1fGxM5ofEde5jpKogV9qEFPgaABA8GV6a37Y1Jq9sLgYnEMEpMaCgd1WYjeHVdWkA58J493rB",
  "key30": "4gCYTiqZWUkyQnMcrRAKRF3gNAKzs1ig7Xe7eLi1jrxok7Bd345AfHMfK7AYxxu2jwVLN97RcQXzijgHjzc4HdbU",
  "key31": "551MiosFnJZvLBmUHZtYUP5e4VnEg18qrcc76hSCe4yaWB2cDNNExAXyHYrnKNSUktMg2QVEprg2GwrYacovYE6U",
  "key32": "3K857E6m8T7ZoUsJFJAPVzJn3GL1WsN3873Ky6ULd8eUHRXPcKWz28mRpviagFaGsHndtkrVHur9oSdvzU7Byszc",
  "key33": "2QMKhvxKRu1pujX2o8xbKRAQ1j5pA6C6DxiDSmvi75Qc4zFdomzhjJFeiEqKdkvjeezH1H1eFb62zRDCtrKqmD5u",
  "key34": "aTgn9vGBj55iG4fmKUgzBKiA3xHTdv8Y7qBoJeiQ8fZCwCBM9kBxefSiq2wsdy1d7zXNX5mFYcEP66H6UrduTcQ",
  "key35": "2Dxz2NMsJ4HXYnh2SvPyJkwbjGadvFGw9wm23ugArEjuxYMeFNqjzFqGrHLCxGrPSN697GFnrtqyasxdmMXr5cUq",
  "key36": "5E5gQA6AdCCqLcfLqWFJQZFjUxH8cXSYi5j4oZaTFvkgwEVitbE3gn62nHhkL88UMLbYgvnfZjTK8QT6duV6pqwG",
  "key37": "jpJnC6QHWMbHgC3ajvxZqMJEaiz1tznjxhimtxEtV4rYEBKNr92g5rSRLeK8g6HWekZrNQ9FjKfegai1sWMqyAP",
  "key38": "4vyi225zErojJJyUtKKgZdSprqNbqo8TJ3vrJmWSPfqTXs8EhWDx9EcDyPXGqMBdGjMAx3A4TvHhZFhsg9mwn4LA",
  "key39": "2sKkqXGujcG1BzWV2kQLPYFM1M3kEU7UDN6ypM4QuEnGj4APggJ4XT2poJiLwDGpm7NzhDA9ZiCC7wrqbVnjwnBW",
  "key40": "T1UqwdiprbUEFgT65Hh83mjivNiUSWJu3g3kxcFvhws39WsjAA2eFJCGvWwCnWivghPAhKwNYF3ceRhrWyD9mh4"
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
