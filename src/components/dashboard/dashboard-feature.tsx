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
    "55wmXHU5Hv3VVxwcitdmV2QFB1S45KH7ZK9N7s8V4d86e98HdNvxsJG61fGJunRVGB1ufJrET3LcBtBaqP9oJxzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y43Q55EYUDXjnhWP3VVUeXhpK6BDYA59DpWN5gaT5xEj6xkVzY2RJTXyLN6oCs1vdy95kSbbtFu5M4vj5LD5SeL",
  "key1": "34Sy814K3WfuphfUtkTjsqJHF8go2HG8vFJTBt2wkMprAFMpuhoH33mfj9nxNthGT1McsxgRVjdUwJ9Bg5WzttWr",
  "key2": "gMFkQxDw2U97oSXhhtzdFA79PpkBmuM3zmjx65LvLLFUixEMSQwWm2JirULFY71PtqFMNVGGoqob3cyronU5tkq",
  "key3": "t1kuNJ9usXoAcFCG3ZKrP4BbZMXpZLoFX98m7b3zDyCCv7A5kWUvqvDVwFuyG7dCNAZ32oJe1qXhq2Z9EDZKiYR",
  "key4": "3FiJurbchz4mdcgMArhXF8mACiitF1adTT6pJiDxTiXcgcKsQnbFykx6458p7SMPjRFzHhp6XzwdUxybCLZ9Ebvw",
  "key5": "4BekZ8iTAstFLju8Fpkgijj7mGEn44dswkqpNfkaNohnT9bozpsj9jJD4ren73rM42xJxckGCcNT43tq2QLmyYc8",
  "key6": "GxuNhHmqfPQoNJt8bamGbxvoyUU1yWVo66Cr6eLtPrh6VXrNPnCMQEXTi5CiQDSiQeHiJzPBzBtyQ3NYDQhDu2N",
  "key7": "2zPijStkaNkELQ1zjtNULQsaiJVj2ESA2vjYnh6TiPerLoxNgmcFVC5iyhCizyox6LD4v8Yix66Hw98RatwaHiCN",
  "key8": "5KF9NYEbZzw2ooT3STpm2KMx3vg3wkzVXXGmX1YPGaBC4eGQPHH4Qog2hZe47cUNbyAKCvU8o7wfBTC8qJwCcQWd",
  "key9": "3DQEfmxNnjbYBpaVAKaNiw2JCKNvKe1JqU7cHRop1qLuafaxKy182LGxZ7DM2eA6UKGSvN65DCxuSjuZuNMBR5io",
  "key10": "5whLPtJYJCL1ThdrxWW2gnDe6xKiCRpNmhLXMCyJVgA3xv9Kjf6ExLTUgqHhX31SpGR954sRANvxqXgWGy4h2xAs",
  "key11": "YVDbwFUVTYktB16CdVDRxuxgE8Uvh2emQ5zoFnRfP2mzNbkhvmyRLzmzaikkT6sCepzVXTSNzeYu3e2TKf5TsmF",
  "key12": "4NMny2Nnaop6EnTS2dR4Fg4UZLUDFQdvmGmNdFS9C7egwni9xsJBhjnRDJersKAC3ELs2AvneNuFs751jNHpSViL",
  "key13": "42JwRPfp3Jx6CSLYgdJdqM5JoBhFE5vksuqxstJjk2T3Jn5nsXjwrinmgdemQBQL1KMFL49H2c2wHaEFkSnUS5ak",
  "key14": "442ByuwN9AwZ1rvVg7YuZ4bDBMjMTXZZWorUdDfQX4JZ5A61nbdSS9Y4RHkgUQHxYxD47aC5c6jEAdaWvsZtHcd",
  "key15": "56eSWqsBdi13uEhJGeKMf7wp16vpBqsBG8iURBvTyejMUDRsbHnYBdu8RhpcbnNUrevSPRQA33MLewCryHydefE4",
  "key16": "4D7WcNGcTBJqNjGWnrjwTWASaPoAZ4qUD8mCQj5phoAqYcY44BDG6BnnzPiKco3W2rtG67JfKT2ZGEENig35rZhZ",
  "key17": "2j31X9MqfNHfp7To9ZvLq1a2iLDc74nADwr94CCzg4qC88w4UDLdNqrv1oWxgAPvThEajNSxk9NriKEywPQoGU7N",
  "key18": "N3Y21XTPBWYhKHRZsjV2yF9EWqvNdFCHeRWDJMceibDShUKL4q3EEmYPfS1sksTLeCPC3CiDB6xFkKJwjKSQE3p",
  "key19": "2FrFdC9t8NJQsXRPcQrknuFZrkK2ankJnfceCDgjmTGLxe1RNUVf5beoHPHKZEVEvDpvysuPD6xe3Pj5e91BtjGt",
  "key20": "4D6fBaSd9XgeqD4iG6aoHP4XYKQrC7ozmnzYTiiJrbUKCi2cmUxMcvB2GwuDWCHiNz6QXj5iuoVKCzjngkUW2Yv2",
  "key21": "4vRz4XdgVyACzrLr9EaxfS55m2xLcpeCbBoUSUqmpFxT2LhEMG5J4skn3SiczTkeQRFDExDj7WWGfbq9bQLsCneK",
  "key22": "5sNfTH9yWG6ins29Nk9UVZztw6EfkAJLYWcooW77yE34zhNajhaEwvs2TCB9RjYW5EhFo2szyDMoQNtzWfhcHxkA",
  "key23": "2jKe93UUGxCG7jHBbRwVoTar6hSPTbPPHXTJUXJoU92C6wmhJkK7dieZDZKCezTH9MCYmYPS9xyQhhjrjt3KtRJE",
  "key24": "tVHBJ8yCbmrE6oeHMMjzytcidDfwXbZw7E5NDXXNvq1etaxo4E4KdniTReCGfyWQixwtE72PQYU2G4f3gu1UHG9",
  "key25": "5aeuVpfY8raSFKiStXd8tQVnB3uzXjnRCx7gtkeGkycz8U8gFqabPML6ud7Ss9K8Cjj66JHiyqV1bug1MK9qSS3m",
  "key26": "3SszurewhLg58rMzVww2MEWpLA5t2TTyn3qnJFxkzzTs1pADopT2KgrJnuKs32z6YyozxxyaJGvEfoD2PUK5rTst",
  "key27": "2ZNRLanmysD98Xrqx1VkMzf2rjJKHi3bfjwjdkSey9hMmUq2zhMjwzRPpzNvpxzR4dkRcTinJEVaiT5MzYvr3DmN",
  "key28": "jzPsfnzraA8tjFcj85Ja9i2SrHfU9eDsXF4UHeASKb1cVDavrZmEUEUhsMibb6DdvKntYfUeeiucbbvXQzLi2Qm",
  "key29": "433jxbgFevCJuSTUZiNWnHuut1MYAZtuXmtFPaY2bvsGTCpDSC9v86fordTSh4dCXx3XD4FLptb79XSnBH8dGDG6",
  "key30": "5FQ1Gqj6uD2SGv1r33ani46saD5Qvbb5D1Kjf2DyBKz7fhqgRCokxWUnLtp6wZAqPLJUWgTpECxcV4cEXgLcJae7",
  "key31": "4CLTxErDVruspu44MfsQcbR1sf537VxMFGPnF2ProDoWa9M8XQ4ARLmCA2BcqdiPQG4VbJ4ay5VnDe1zfJmZv6jt",
  "key32": "GLfAwuo6A4RXvQftnXiHxHCLn6DwB91RV1kBUyBmX4R8wJbCc8xHkdPAoT2i3wVSPNoMK3rc9kBcZMKvKKQR1sp",
  "key33": "48rdzHFhHMtwroWbBkfkgmFz5ayAtfEBZSkDAW98JST7AZjzt5Zqswor6q1jN572VM1L3PHSmpbjfy9Y3voqeJLK",
  "key34": "5txSLULbDvs6PUww1g7aDRnwtdUm7SbyTDP9Ljx6ngfM9d7oHkjQ9moTTsVTWM4FwqEkPoF5MzreM2oqpypjynTg",
  "key35": "3RzSgRrb49vT6PRmWxVr65bbiCrPfe2xwgtYSJ4eJniP2aKJa46SbHnGJxmP7oUf8fKHkV1R1nAjnrHkNV3353kK",
  "key36": "4zw1RQLL3ZJjC3DuQjDPNsKYs1jvGNo7SEJ6Du3K62QZDW7eizzRQDZuqxB2SxTVQzL7m2nVR5phaVE4grac4wsV",
  "key37": "4ZD8z3L1WCwMvw5rteyY7oetXivMkZgeXURW2Haqj4ZTVN422f6cfmr8KjaWrWyQNEruFYtjAgMvSp6FvHKmdYMh"
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
