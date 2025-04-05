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
    "2Rv7rKEHZcercHNAZbxzYnCgfEJjohEShkV7H5H4oYB1H8PWdL5cew6wJtvf2GYqU7ud4GyUiJj54JfktYEQ3ysK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iHSwJ7DGsrfVbWXvmdfmJfQD3cjomnHoBmopJ2muez7qoB5zagLRwqnhQmHbNSu5QiStqY21H8U8z4WdNoaU1f",
  "key1": "45Y4h8GYyCPiKgPbgag2p3uuPKTmz7NyuyEQ2GfPPxAkKyCDVRpwBpjyQUuFktegoWazagEyBJeazcfxBxppYyDh",
  "key2": "2pWesStRTySn1wZBEYbRxkCovvbdCSpfmpdrUTSUcSuwh9JhS67XVUepAKgNUEaBwtNdxfwCvkfeVBSWDHEDPJZt",
  "key3": "JWBa5PrjdhbwrfvFdRrTaLSbkveb6H2XqFx3MksY9isNVRr8NvBchyEueFkoi8y354pBJWj71nUoiGEZd18QUES",
  "key4": "4DTQBzmXMb7Sb7jJTc23mdF2NznNoceWTHuyrSFCQrJBF5tMcjV4DfFfYnFWU47wkXtwWVuciBDTsgAUU4vCR64w",
  "key5": "gnWX3pUWNLt77qqcpMTjSUQub6aBvPkg5X4duAgx5LuZaHAz9j848Lnzyfhc97BzkFThaPBDGnYfr7D1wERn7av",
  "key6": "5BbYkuoBqHxqZu1rw5dZ1qndoSXy9cojbihG2TqQifJh3337FhdUatKvKESJmE6RnsABdtJmTLS7esswKya3dcEL",
  "key7": "fG94AeUfPoukkeDvAYBenoJdCGYQxGr93RmFCFUPGJQzpjfBK1c1W2RKpcua8WjFnaCdapbGCoC5KzYJ8uc6j3y",
  "key8": "4xyQHY9yziDbnPwoB2SKFEeZ4zBFYJJ7N5WZtNgYnMBseMy5TunhNK3PBf3M5VVW4vM7fxKjpU1t21hVPqeMyi7k",
  "key9": "2mkZsisGJGXBt7bgLvnqDewKDZBGnDUY22capqx7R2rzWtcrffPjtHo8xyQZjAoZFVygKJp2WHUdLrivYkHrGLt3",
  "key10": "4sopV9QpQBs15EqBK48f1e9BtVhMc8cihqsLs9iShfLxG8fWgRCzjDkoYGEGJx6dTBHSfoCvcxe3MHVXHjK14WDh",
  "key11": "5AMs31tJJPD5sWzKgVEBcBntEvnYLFs8uQDX2Uc6NhmmktF6MPHaqFqx16bwZssJffkoe6rXeanTP2ph3sBSQqtN",
  "key12": "3NMBcfePdm7bfLnA1i3Ad3FuaYSMvmLbaKBJnHEkg3spdB8Fop4Tjxc32FNGSr4GJo3g9dMGfvqWG4RGMBLb2gzq",
  "key13": "43XtUwbThgwuNsMFAJ7vkG6eUFHA5vvZuHae5eAr1L6K9vC4zJxx6vGyAyCKtK1FbYgKV6AirGHt6fqctn6Et6XJ",
  "key14": "fsadAsw3vGtLivjZ2FkPziuxSK3Ey7JZ7FJL6cfmwEtRcpKMhrkhZsu7zmSUu5948m7MKXuUCQz64sgkwXTiWGx",
  "key15": "3jyTQUfiiP86zgmNmaMN9wdFu1gfQRbJ95Z8dm7tFYNMYdeKXukFbKPzgN6szzgzRXDeZpq3nJbkueXRqScAVx7u",
  "key16": "3buLVBquDPnB2VFqTFzq6DKGfXazBCfV46xrDADL3YYJpdYwGN5v9bpz6dziLLvxDm7uYTkjhpq7Y5jvK9wxUcov",
  "key17": "4KvamiqTHW8X7V2eQnv3RUXz6A8vyZfW7PV61gwNNJfE8xcfmDGJh5d4pXNzCUhaC8YeYEabxoEREz3rmqiJGMqz",
  "key18": "43y48sUssNDTLq25XJXChVvfGPkN9728gVLEz861X9Nv7APfnyLCvqwdvyWKbXdYJnAG6m7J9KJGtegA5YevPRxu",
  "key19": "3XYzMrfLABNma7eaFiLQ8D2zcDqMc6ZPMS5R2fRU7XWSuBkt2abXwQKmYLPRGgzrHwqvQSXKEkmQyckwVqDfiGvp",
  "key20": "2WFLS5V2SzUhxNLPeLx8xUxLdSPcod7qmRiCV4681ycdTKZVb5qveQu9ZKiY4f8vggQcy1zdhhLDKdkyKFsBMwdM",
  "key21": "4xb2dWXR9TacnoQDJKh4RS6ywBvgzTybAhvLG7rM9VPXZpa19XWwoTRftNPcVUe5mXj5fgug654JfSVMaQMowEtF",
  "key22": "4k9EU2dJ6NiXQ5TZjY8CCXGfCJ4UY9Jbr9YMXbkwPTg8kMo16zoPEzKB5SSTTYNp4qS5dtBAzhLdMHuKsiNa42QR",
  "key23": "4SDqTy4Q5T1szq4YWg4UDS4XjkE6i7H6rqy3UF8tM7pPuPTvJfW1asqE26nPVjjoGs66YFFzoadWk4VDbHoKQPHk",
  "key24": "2tEZsWP5H8iRCMw55S2o87mdCjCBxCCd6tWqoT5dsJGjEKejjtFzG1uXcXEt3chmgt6YUMMrHZ8De2KmsQi5SvdY",
  "key25": "51iZ2zLJRgTXqUcKJk3USqbbSwQcUkUWr4kLsYTbnjhXdfP8UQeZw9SKnWwK1nPRubfb2GGxGTGxjRQhJryMZk3p",
  "key26": "BYE1Mh4LFqKeKJTmUro96ei15xDvvpabcxB1ritRovLfW78tEZXk4soAdwEBgCESGMRthkBYuBpcJjNtY7Gs3hX",
  "key27": "Sog1YbRfxqHvSdhvJW49v3K1azALCuSCi1sZgAPchvvTh5GJqnXQkUaapFCyT9NBiqXDsEgC4WeUS5xKw31ySTN",
  "key28": "WDxN6eM1tFiSMBJfqqTHY2hgmtu4cnP5QkrEcq5JQXKZiYY7esd7JmEzbVYLPkWYL9HYNbCsSC67CQCf6WA53Q4",
  "key29": "T4N7hTzd8w3xreLAfW2v4WyFreb2EpTC9bQtgwABDSBsKzdVqcVAbpDVX5doZ5PkyPYeSXWwrUAwpmkv8J5LESf",
  "key30": "4XjWGTRGiNFCjV474FdEdKD55NAm9rwxPFy2pLfuTZVNBbiFeHgZcFiCEMKxJ8hA2x8cTbJEfHsahCHzopEvUrcj",
  "key31": "2MifMDQ2paKtMk8FSrgfwwHZZunNLGGU8wAWadhLfddgPkwKgXaTnw9FtwjGtQKVg6CoE5HWaAtquqjErQJ1dyaC",
  "key32": "2LbeA8xUhZSygeKwYWAfxx73GoPc2CdUksFm9dZWNQ6or5pUcnUHw3SVVoBgQ7oJpqCRpwhcZ5MnDMT1DU6Ba77f",
  "key33": "1Ns3D5EnyR5V2h6z6xTNfrqa5X4ZuRy2zDaef44VXacC8ZFvApTDhfTjVyAEg5eQwMSmXLYhguX5RRkLVh1LDA3",
  "key34": "4hZvoHcdJRiJDgSEERzaLFHYnWKtxgCVkQv7tVNV7vudR9yzC6sF8jeVcxA8JDjdyySdTzEnqUWfmhaChefjxJqP",
  "key35": "3aBQgJ3GUStPHJ1pNa2EG15DqgkYsB9askKXtVqKAe6Zdqi6BfpXyyFzBsLtqKqcMMNF6zcqNuBiuNChigndeBQh",
  "key36": "2pfdandaUo8KiqtweyvHbbBmrGuswvNnT9WEXitGNTig7BChLwV4asGhP2cwbxcMgAFoh5XB6j54ePr6teqXWKR",
  "key37": "2dZdENbYRGQnnenZGCVNriycQgQ8V9BndE2f4i35mSadQmvc4m937cTSy2DYV7ZoT8JoQLAr3nbsUdvApRFrGVF2",
  "key38": "uAMS54iHnMKQSpwp7fQrKTd8fVQNnChdqgFR4CqLbCgAu4VFMVgDamXZrhLGoV9kU5bP72XBQ5Lfejf8wedPKin",
  "key39": "3Hdt6R3uiT4F5MdERGoGBPAJ3fYMHPp4K1zKssM3knVeVzcReBj9FVywfs2RSx1T3raJ6dbpMeM63LoJLWuvzS96",
  "key40": "2atNEzSFSEiyVkJyDhFD5MPZAmtJi8v7KR5ziHen4jw9RA1n2qFsWeqdxtWkt6gDutFtpua8A5N92nE4Lr2Uv9mQ",
  "key41": "3dLygEcDAgrjxsegiaj81ybjjgSLjJQBTC2TkVVoxsfzhn6hjaPdhLRAREnA3c81TghvXkXSFRjjv3snS1naPbEg",
  "key42": "3aSMG6yizRnCmw3dS7GH527cTmb8ZsTa4SsseDxyogTyAGFU3vHjGkBq3YHJ3bHUAV7XDHu3peFEZxerXggBdM9g",
  "key43": "4n2kyh28TebE8QgH1dRPjFsDrXPVRUDMHACfn4H6B3M8QwvWqPr5ea8ENB7xNqqbKmmi7EXdz6aXjnsKeuyYAA4m",
  "key44": "3NZAWQktavte6tDP7G2hrCCnqCkUZFdvxWk85j8g1djbcVpN1umxMeGSmVMDxqiCmP2C3NWqRVRonFL67dSEeEDN",
  "key45": "4tmVnph3S9LE4ZdzZPhxWDQsV5jsKTsJnaaB57K2UNY22wqjFMBj72wYhg6bRiBDETrkbmktLnDZv5oAj2KWgZoC"
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
