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
    "YhmudtMGaxXZRAJ1UbSC1obThxAPji8wyKE1v6Vzbk2PwgReJhbJK89GB6yr7QGGTRJC81oSqcjwr7yZMdWCQtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTNp3UsHZsfiiQatipYKjGm7VfEtp6zyTKWpV7h5ZanSfWaNVoDxrDAs48kHoTCp4ngtXP4889YPee6ZYX8dLtC",
  "key1": "2wEcsrZM2hDtXXTYbnUjWzRobowJvNbTUA2qHWbS6acUqdJVjgCfbviWdP8qrc83cDGWz86y9LnzkyTJi9gZZr3",
  "key2": "2mnXmzF7MZQK6XoWbCuMtqTKveUAExfQAFDFR6Rq4RXzqrckPmaNsT38irDQvN9tutTuZG6GwJWhwMRW2B8HxdLo",
  "key3": "5zC811R78N28u6gsZfvnWKzPbqZjHeJ213CLBZ6j3u2jBBj4Ghw6YCE6UPj6XtSY3yWd7qSsnwdBsDEw42LswCeb",
  "key4": "buDwUELB6tozYcXoiLqXvzgrn57Gtx6zx7KgXLjJvX5NfuVrX84PiLxrR3gzw6kdaFSxNEaEzbvrNXyt4xgsGAk",
  "key5": "3q6gAYbFgV1W7x8H5rEuywudtksAauvd5ZXSiuSg9NqQqBtFEYQbQyRmpBauJu7SXb3qR8KetvADRKzQwExdXS2U",
  "key6": "49ojPJLsZRvAYs14EcH6aETvYLM7Xw1CbUYSbCs8iAXwBXg1ajy17Hig1BNxKxrchCro5ZsnrAQNVMTsWSmWRZnV",
  "key7": "3Y4zxxCTvMSYhg7vwbJiCqdKAmvPeTfkHhSEF4uWZ2YBUW5MS2ReADxYm6fyc7jB3mZVzbVRSBBVGxQrn2ThNhPF",
  "key8": "4j6D7eULwmrMqCpzZyKfhBT4JSQ77BYAq2d4iF8yaQrRMahp5RszeDjdf12m3ZwLBGTM6dS3rGbYsQCQeXVgo34c",
  "key9": "5otWREyz4L7mD4GbmJ5ZfSMRyWGC4EATPL5nk789pWSzbwj3UjVT2MoShgD2Q9HfriwKfcXCDCbpoxWudsNW9CGh",
  "key10": "Kr3DCTWimFgYSK76cuH2oN4SmQoQsCucLPzh2rNCneEiV9nema9S59BoLayezPEFXP6Ko9QZdSX1toCNu3rsbFW",
  "key11": "3YVyDyYzYYkiS36dDwR68YxCgJarcUjdhQaZTW69qTw7tGXMsyv8XUuP7bt7bg2oX9uyFHukztcNVefj9yLx45HP",
  "key12": "NDTq41gaBoTF5RsYqR6HdRTdkLTZcGtjMni5Z1S7iLrnVqPs6NRMHFvQHeNu71KZbN1wNUcKiacwXVYZbDWz757",
  "key13": "4WV4WxB7RUs9KMPJrxRsqFx54VPHg7vEQS6ex3TUuPAEKxjGaL4FvzozK5wc4fzQuzHTrcNp9C4PcmaB7ZdRRBoF",
  "key14": "5uaXVzJnE49iEcRticcG5PfyFkcVuXwSxWGzDG2JoUSnG9Cpo1y4Y4wq6T2cR2BwiAfHzhS1JAq2872t18JnL9r1",
  "key15": "63EXxxHoNd4M4LHU98g9TACXqzsZ9hxGnRdiCPfxVh4KbMmmv8r46Qq6Y8wXwryBTka4Neiu3Jwu5CqucgdECNz3",
  "key16": "616DfDx1bgEmPXxkbjHKMLbt5aDXge2WrV9BLySmzvxSuo6TzgiAS2Z1dfr4Zff1oSA9gi3k6t6kQgCmECU2bQZ",
  "key17": "4ofD3h2NNCS5eYW3UmexDPoXFUJz5aeA4yMTAttMUKfpRABpzSz6QKpzo3Ra7Dz4dfWmERnVLXzKPb2fAMf5wjSo",
  "key18": "sCGX9o24vhYcufcrgaabmYepbAhRfx4VTdKTpGve8PV5AUkMLNhfLFDxbcaDDW5DgBHd8kUmXthZAXU7WN9s6rf",
  "key19": "33pEjPtYJeQVaXnFeFXUxXFYYe6NFosxrsnJdx7aWGg7DYNu3nTJweWEhbmwqQBUBHL2VMcKsSd9swPB7MV5CUfF",
  "key20": "3Q3GWbuprz1maqAEGKL2nsbSx8V5WxiQuW5nQoq3MZMiCPjdsbfKBTGpc1u5S6Q6Jmd2xkQBt5G9ajGR7cRdexCN",
  "key21": "54zq598sypdwfrh6pgeGVk1CohesekazHGPt6TWsyioeKRvfR1vPiM5qfxxkNXrSRdn4WYSdbTgEa4uwihzTwVqo",
  "key22": "3zRDy3Ms8ga7FJxc8946EAeDeLi3c9qijZKrZmZ6Ma8jEnzSg2uB9LnEjSgjDSJYnYe57QC5ZQaYf12qHCGuBqSy",
  "key23": "38BE3CVV8B13DUAQAVwa9sU1r52pfS6mRrzKw3aWF1dPBbC1prG46UZ1c9JpB5Hkm5dPiHYc8gA23kVerftb7sHi",
  "key24": "35Cmdzeh5bea6YjkW3FrhobMjfeDG1wCr3SLJzK551mRMKZ5BYxwssVSQQpWXf26c43xTXyDuGywiMnEuSayC6yj",
  "key25": "Xi5AfcQ3wP4vm4eX3uBSMQrzjYcYoYheVfRycmmFxdFp3mfr8FSJ5s69WH5Hn7zDeyqCdMt2Atz9WFjzMP2LP1R",
  "key26": "4BYc4BD5FG5y3MaU8M3akSRGJE3dcuMkRMWkaSCERfLoxpTViJ4AhNg9tDVEi5m8vohQgcyHHhoR5NsHvowuZaUe",
  "key27": "4j1o8a3ydt32Ftsng1ZKBwemuXGUJbLai6U6P2pjrgG823Z95uvL941KGAtUb1zwAbtZEYHxjXoE1XmgG1NxEBj2",
  "key28": "2Ne3RbcfmgfDEywonWBfJjCM5izKUye1hoGVdQRutPkLvQdAm8aNLR1yy3uZ5z5xv5qUVrRb9ZcnGc2Gb1FP9uG5",
  "key29": "4nHZwXZ4MSfmoPqsth8ucqg3qSfEPUviLmZ9Hb4dBnJRdSSSpXPagH7ARKaFFKeQcY91AYpSi78aaLnQwVmEMVE4",
  "key30": "2UdK9WbJRkEp7R3PLKUfexai77oze3mChpeu4njUNKVp1dtcyXhcJe3qnZA9EFLsaewJdygBZq3UpRVPVSgU9WQo",
  "key31": "fEyVRcukQP1NvA5mBopUcDmJZRrYvESg2XJxvkBeEL1G4U2NFhyzsfTqbXyvamUnbem3aSY9DHpvAykBrbeyY5h",
  "key32": "2rkpjYYKmsHnRiS622fdCxhnJ8T6d14aHwWZ8iVBWN6Vvaxxt8LYCe9etS9em8uF4vX9KXfM53CaQEwKshddaypq",
  "key33": "nLNG8uJPAiiR1GoTYcKUYeEhJxpfm8MjwNP4HjxScS7pDK1kxsdSJwRyXr8RWCdTDMDqXXkSQxp3Hhn3fV1akyc",
  "key34": "4y9JmkimQEVkESP5cpyMmvfYL3vag14g7iRsx7J4ppLqZXVrMSaryaWZeqa5uxe5pxX5cdrR2cJ8TAoNAe2V88pD",
  "key35": "54kHUNgvmXfybVNZBenytN4eGZaSWG9Z6D8ypXCae5gRKMWBFTkW3znhXX8tT6jBUNdrHNQCbUFeAMeMwsfcrbvK"
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
