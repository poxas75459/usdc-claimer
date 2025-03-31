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
    "3BRyma9nLHWVx7K4B1SU1vBstFUux8wh4JTnTCWxeUDWVtZCJa7spKNwFvfCHfzD4usUFPeNqDxgyQMqRmvxutyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jtQjbPpt4KER1hVC3xNQBmdebzSttvG75K3oK7WcbReUM1Guqcvw5CTw9z3w7N8gLNurj2ZJu9SHDkV9514JAtR",
  "key1": "41KWAxEaz1uGDnkhnW491sHGsPxm2SwXjbLGk4p61Q3ci9wBkguErWJpVU1t5RguXWNbwntPsCX4dx2fn5hUuw5Z",
  "key2": "2B5DJXrwkLJoB7mkyiQ7HKDVeDyr3nJqFjDzxGkLCQDDL4Y6a96cENhEKtsadBx9R5JJ6ZV7rWcbyenqShtZjXHf",
  "key3": "mvRJujEn6TrWTGKchhe7QpmWMhAeg5DpPJxq9AHFj8YWrUjusGD6wok5pGX4mFxcCdw4ujrnSZVzNksw5zCTwkG",
  "key4": "5B47VFehuTgXwsULF9Fd3Z8QRps8pZU2sdntzST2Q9tba8pLTrhmiRm2HwvbKGKcj5tb597rdoJ5paedG5cYM5fY",
  "key5": "2rjBBwZAMSppjXjPDs9hJVGj6ypcFZ5JXnZ1fg1fgN3fmE1qtztSeHAbVEeWxbfjW9hYvDNjvT9UMP5xDpQasCBC",
  "key6": "2iFqw7Bys9FpwBWXPt8ukgXHMhaMtm5SofHvrJaqN9a1ToUirzvrCpTW3UJiJdL2tZA22GPb3aV6Ee9YGzHRyFyQ",
  "key7": "w4Hy2EbNp8syR8w4yw1hoceKzH1uucgx6i6VqzotQLbECrZ6zN1z9exGrCbhFpmyJtSuAMYoGuQwrr8nFuJMYnJ",
  "key8": "28UtiEpcUZsV8eWAM9n8dT3ssmxRJgCeuDb6p6cAWb4uxV4c9qhE7rDwqb76mcsWm4XHjFjM99Kh5RaNTXaPbhGX",
  "key9": "3YTGCQStvUJoCPrNLtEMF16cVSQ6CUUvX55gF8KAbPQznuMJGeSfFLokoMYxoTDnaJZsTj5FRenB47F4Z2RcYaWn",
  "key10": "2PgcSXiP82SNManAHtwoqxHWN6g3advYgFXBohhjDr4M9zYhXtVG4tEqi7oeKvGFSKtvwtRkLkB9tK1obHc9gU7P",
  "key11": "3c9XHPp7jrrYFVHDgTeLbsQRKG4UWCdsguzFiGkfepZ2CT5DPmTSWhJWz8smqEh2k7xS8jV8bML5ZxkGRpLLCJuU",
  "key12": "4V8qba3zzzaKLof6v32QkvKws9SqswbsuCypTAm29XonY8giDG6vge14ojJPvgWRrMrtgPz2q1H5bSJoo9g9Ffu5",
  "key13": "3pAo4kMTMWPyieRuB4FpRGUD6tRXnYmiu9FwJP9wHGK5j9UTXgRmaGWUSgcSdSYrbi4X1RNmCudaNMJKfu7yo2Fw",
  "key14": "3J7UPbbSJQ9qHc8uf8aPLjCm8Qzy6KgdCHdQSehdyrnAg3jYYW97Der8JugSeAXxNj8Cs1Cf6w5antWWtoqYDeZC",
  "key15": "2z2cSevKDekekgMsYS32CVTCKG6d1tibn8THyjAK7sE8Zd2u1pamsxLN1h9QHmfy6ABp2mGwhCdcHcZX4zNsqRN8",
  "key16": "4GqxZg1XQgBhUgRtXbUiYd4itKxr9aNymtAK6Ywcb1d2EWw2UEJtckKyKwJ25eaRrFzUHVimver6NMFyB3DdWYgY",
  "key17": "5TbdBYLWeXXs4cMKsNyMLQhktztNYPKxcDMoRt3Es5gdT4jodMTCugRv5xfeWiBCUcCH4NK4NCRP37hNnc2Kda3y",
  "key18": "22hV8E6RpAw5diY1KP7AJrcUQiXZg42M1iasPbPEB6qHTpqsUGRLbyWnQwH7Zagnugxbb2xi2EP4JWACBrc4spaQ",
  "key19": "4NhKQhKXA61cJRzfmW5iYevH2qRMiSe3S7E7Yr1wxteRoNv8HbfYqfQyscez9Gb15EihPKPE8Hb1c9YBnqkgdeHw",
  "key20": "SM6Fvda2vsinEAckgBjjb3KxG5zevXnMB1KtKSvM8AgxqH8hV2HEiW7hgFgz7a9B7NodQdmmv1393CHrzJ9iGJH",
  "key21": "4zKchv4YD8JZmkHYnLh2TpraRJXzVnMT2v5FkoXy4WZZb55aP2wVncCnDe78KCwsrU2vvXZwkJSGj4yXG3oGxZQ2",
  "key22": "rzzvopetzfvzJdqBQksUeHQ2Yi3USNd6766PZWF1SPzMC3iSTGBtKUjxbtnTycTsZpTat3MUJt63afcdcTkH6TW",
  "key23": "4LhJBTvQT8LALSRo1znaV65EAceh61oaYWRTsQdurhkrwWBPZo451vjRgwcV4ATa5UyeJZBwwtuVEXHFaQRLAQWR",
  "key24": "644QiB1oZLXswZyeVexKnCKsqNcWo3qob3UhPgG8nrkkfdcf9fG2Qx3y2CRLoZRaMXyFNXbrFKz91na9KZqDz2HD",
  "key25": "2k138ATVAAadQHGDjUN3sFRS486YFrXvq34RNfVij21gxMYZdMAuiatddLcrqb6W77nGoPucfirvjxUydfFu76iV",
  "key26": "41apwVKEYu56XcdE1KfPcqSk2pjY7dKnYEE7gHeBLmSqHiyNXku9bVP5216zpwkiAc5Qxctsy82drYCp3z8QBziN",
  "key27": "42wBdUERRDmDNQsvAuQ5w3HwW5zm9WarmYa1896WqWdxUrU79KUishvJ7esM47dE9HxddZY4UNfxZcZ1Qjjp2WJh",
  "key28": "667FaZbp5tcZ3E2HDdg2ntqqCXPfHbzwt7k9ZRjHj9oA3MSMnaHK1Gvc3GHK8rgaW8rmJkzPew6XNpHvQTw2xoUy",
  "key29": "44wMtV76Vac2Hq14NGzmvv6q9sqSXgmNg6P3tPrWAFsAhTuNua5FCwyHg9uSDZwAyVNYFBBW9Wofht5fQFx2tQXH",
  "key30": "5PXiiDNfPEq9EXJL54rXTVmz3ZHsR7JfuMiFtBiiaMQCpus7U1w6vUFxeMeZtBE9jnYVz9ppWqjuf4R8YJ9EgChE",
  "key31": "3X9vQJKf8WJ2QngQMMcUvdkvTL17wKJFUPAkimAPtFLCpZuvDFvaVrq1ooKudU5dU4qgnwdX72a3v1XkLhgp5Gmy",
  "key32": "2fbPcuNdNDGhwY3KTAznwKU6BgpfkjoxAiEcUL5Lhof8yXpaTCTf5z8PoKqZmjsE99EQcqHJBohiErTizhBizmTC",
  "key33": "4KDMeh95XVDSPcVaU6JnHvRkRPGnVMkYLHrE1cGcatAWozBUurp1YRPY2qrh5ixyRNpFFZw8SiPicTPzsqi2Uuzv",
  "key34": "3WgAHvd9MNCGxiQYmCsrXNfrHcW2mRPCfck1uyKi2AE2ctL47TzDJB5zACvc8DziNb3yJkQ6p761CY4hEAwkToce",
  "key35": "4zx68zoTD1J1R5Qmzx9rSXsr3kbCiH31pY2Aw4sQS9DWCrvYKEQSwScTAtFW7gqB2YBgNQ4DE3omTQQeecxfVcmN",
  "key36": "3ZGiLvCDLEAiqJyRNFKvjXRZhQPJiW6DN14eYJuNvDoavupCh9QLyYqze85Mk4txp6Nx2m3bBFs6fAsdQJxKY57Q",
  "key37": "4tByuvfUphnvjjVq7saH3SGuDkLni9QP7ji5s7ob7fvHCtsPtpCPPLusF65BZ2Jh4RTCVBXbyqPBHcLQH14RtSHs",
  "key38": "3xcVL2jNLhFdza3f7GFJyuWKw7zSS5aVjT1JC5SR8bsCRCBjmt2a3TgGKQ3nxSQ66wX4kQRz6YjivBYqdikNJrEE",
  "key39": "5L9vanwpkffRtQT1PApyo4EDVWcLaxgjG9M3HeMLKczcjEivf3DiG733QnSBkWUbUU4kuSGrtSF7nYGoTZm1w2ue",
  "key40": "4ipwfLDktdCGaZHuNBqqMVFSzkxBZUwuLnhPgWdrNVDUsN6rwDwnexbyqEtQNiQ4sXG7YJWY2r5fBp9AFHJf8Thx"
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
