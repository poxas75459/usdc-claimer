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
    "25DyLpZDGwEguVADYbnNFdZGg8uQfNEyJqB9wtPvdFamDsdBcXFCycnyqX6bJDTNSqnUgQP19Rj4o6JfZe5kSghy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Ubwp8NJ6fafAWhnzKsJAZJh5WRqwFu5qpcP3TLL9tnEk5bvRwNHm9aEfBJTbBuJBUM3oYHV2bos8GXb826bYFW",
  "key1": "5FvUR2ryN1xbLiPESfrHVLxq931ZvoCpq8GfEUfhZqYntGevkycYtcmUrMs9xC2YtPWGYfWSwV89cnsLUN8XtZM",
  "key2": "4LWy4nEwPJ7rTbnHQDFvuX7xCpFVV4LTBd3Ftsf4hPsxaLWkRcTps6SMnEVjrNNcTFw66uc4iabyHBCtoKhwvY38",
  "key3": "3pNhFiEFEaRA9tVtFTFhP8XC8tYe6ij3mg6qZfHEmWmLNpwBkT2dPJriqjPFXsxUiACvhXmgD9rVV8N3wPGca11k",
  "key4": "3nkBQWXFpLgpzFEcxniXumoVVG7qzGc9trwSyHzsuycjiyPy5qqbDVh1NTrtArPEeCiAYGC1aeMS1V7GyVT2S5Gj",
  "key5": "3r7Cx9JtzjcRRyqu27RTBtuV71mNuZ9KScEQsJPFazEkSVLNgtk1D8HeNtJEq4JnxzAAxt98Vcvwnqpkjze8gRDV",
  "key6": "PVZdTYokZwhdwL1RjvBJTM6cSPLZzgr2RHtCPWPUgoLg1exVpiy1p47QL3syZWyPPuqJesnevvkxEcicMBWG947",
  "key7": "2d7gZWwEgD7xak63BWrRFCWJTZLnuQZfoUoixgkzKk6phJaansJKSPcdA53srZRJhPTBkW6SZqwpBLiovPyPEsqA",
  "key8": "Jp4M8zbFW1WAQv9UULisGWztSEf2imRD32CYXosuC7VYsXRyaQ5fm5L3vwgJiZbm2rnHAk1mp3nN74PLKifwEGo",
  "key9": "4WRVhMaxC9kXAdKEa7mHJnGXgSokZUNr9ZwhQv8eZr2iddkYKcJEPVD9h14gqXHbTd5MNhK82fHmLRQmHgSDKssC",
  "key10": "3XpsfJ4LKrGDCszkq7p1wQzTiVjN8TejgXFpgRRqt1nFTo55LtodeufFmA1fktamzgLhKJo4MkYmB38ZDX5MHwSh",
  "key11": "23Wt7TEZ3TSB3Xu3YUizkxspS3YhXN81tLcShFaCfktDbhsQMZfPZrqY9fBVMvez4zXMCHmATRJxrYvujR8z3fee",
  "key12": "2MTBYc9xacR3UkE5U2H12aHNtFPzjWPowYdpBA59dyx1DA5c2ubdN949gKQKT3wSgLGvkAXMELDW1URFPtifjAcU",
  "key13": "3kQKnMFk8f2ueN1rfQLqu3AN9Ff1k8vfwfyABZxke1oC2eSK6RMWRFxmFx4SnhDxUqub5UaTMwYPLYaNx7mxykVY",
  "key14": "56YuyvAeCHrMcXM1hSPfZX8Q8tnbMuJYrC8hhYjg42nvTRds6NsTVQMejUWzvBoJ6QTbsrNX8pKEEwfYxxMx65pT",
  "key15": "PdMCvAjxakv85kPkN7av1VEYL22MtRtLEWroiR3rtDDNBzmTZaun4htSAYDJTbSqEgL7BaXvxa3ncqS3PBxtake",
  "key16": "5XwHNYFo8fVMdbAYCnVaAieY2RjG5nXxKBZS5Brjhzimc71XX54RHaAg1d5EpW8YQxrFnagg42NhHs3iEcYA7HRT",
  "key17": "43mJ62ucj3QHFg6JZSJLnFdJc7EKxm58LGv4AbnGMoHsQjiwC3T8bvUwJKdieGxqiLccEjNmykdCqDMZT5U8wied",
  "key18": "4NSRtdsiUsf15kv8omzfdPorAHXYLmojnhJSRmuihGT1y3qhQL51qEcPR949fMPKyRkrESzeAugWPeD8PxJVV7fH",
  "key19": "uTfix8ykxUXfDtFeHNUNGx8EG9dq2zjmLXAVrzd2AS6Mm4JRNuckBfASCkSVnf1VASi5f18niJJ2gBwSRgmLLRD",
  "key20": "3xBt5xqM4gvHBaaH8bqBM146NsgeX6sUiemTeB1xqtQF7zrjNwVJ1prPvbCuKJuCpNy17tiZDGWnqi1Ezh85jGyF",
  "key21": "39ppiH1dyny3uaCjqBPKznjSMtmR5trqbZrcLjc5YTZX6aQ8od87bQnwyLk5ps4Em7SmFtEaJoonPTF4onkmAB68",
  "key22": "5nf2pm7DAwxPeDQtBkfaJZAD1ZysQaGut7GTfwXjjukWDwTsyXdHkJM5WiMJ8CTC2gTVhzXvuwt1dC6rX7GPgsHS",
  "key23": "3DZmDyhBjJBXc2UoZTSYkAhdXTm6piAENMcp8JaMBW1tLmTBJjLFuC22FQBswk5oKp2nGK7fF4PaduWkrkEKZ4va",
  "key24": "617khE6YuKe93CZm4ezWtMHW5v5hjbHiiNeRYQSoaM1k6bMFKxb1BgYjeqdvuZWwzLcMEy74RdJ4XMAcH2K7LZwd",
  "key25": "5s9ZModofzVRLfHU9PL8Euc1fwjnPg2bsxrG85KDa6GFtn2wm1UERX4zsyGYHnkDvyN21iENdqXcvTQX77RcdMuM",
  "key26": "QYSBUik1VthSXoqM6EyDRmA3CRpNGcY91F9LeAxpGX2BUtqBX4sKaYWfB7D5W7UK37ZeEGRRgstesDjWpMWs9WU",
  "key27": "4tvqmzNGSZQc3VGTTiwE3UNypbSt1zPafkK3B35Gi1EWB9AP6rUtN7XWGKJ1Bh2TpdiGiLYymiwAjAwj2f9pNMW7",
  "key28": "5eZEji5Gxh7aP1XmsiyYFmvk1LjcXG1b2vHEFnbSJbt61ceJ4qcZiQ1P8tywPwhsTmc7jZyvdFVqGkr5pn5BZZ1C",
  "key29": "LMFTATUs1QU1K5aCHp5mJFnquMuZ7QYAzFj1YgQLcSdpSPrXpfxWoy1rb95VVwgadXwf5jDb5H56KDooSkp8HKn",
  "key30": "27uD8msUwHtVcbaoU9YqTmGL7BzxRs94yoN3D33ugtnoS38RM2zxLB3mnvS7inZztKDuDKcJ8qY9PsfzPiaiDZx5",
  "key31": "23pd8UeY5ntVUkXwUHe7UipQ4T1hjVZvyk4AfSad3zFMhRLE7kbpcqGocWr6TXC3MtCXYPEYjjGRQVJ2jAbtHEXQ",
  "key32": "675vA1xiZL1HYw7ggV82JUQ8AKpQCxGMDkNYtYsD4dbiiynF8pGZ9SLwrey48FCdqqEDU4k2W4dQmesDU94GM5hf",
  "key33": "2E2MxpYuXLd3VSyi2xV4PKKcceCaC6PP31RXMnX28jAZEKQqBBXry4tNzRCTpJhU9u2TsE26HAtVKapeY5k1oS4W"
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
