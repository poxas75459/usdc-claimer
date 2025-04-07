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
    "39GkfgkssBb5iDkAS9QbajXcjodTfEb8VX1kaoBc5cJJwd55WttgMJ2AyHD736ZqyYrKQVnFpsXhDP4sPhibhJJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mwkww8eFeBZ5gNNYdcrsLznSufvT3Xt7k7LTo4zKSXV7nKGiNPcf8k7mBAADx6gBeiT2AdoX52yuJeC4C3Jart",
  "key1": "5ptrSmbwKRyHBsoPVTWEpVvoTQFunGyohKFcUh8t811mD7eMfv19BGuyyVwFRe7RZjSAk9sZfXPfNXeahzyjp4Zi",
  "key2": "39n8BD1movtM1vd13j75Ze8RCobiSEj3iTJ7W3WCHGyNJGbemT26jHaRToXqWZbqejHNaUyeoFEaSRUFTCNadoFz",
  "key3": "fZXrNgPqJpZUSG2v2Sr2EwogfiocpVSUZNPNJWyriPg1EaMGdRbD4N37zBd4NRSogsrpw67KDLVUcz73ZjsybXq",
  "key4": "3Cc1MNnu81SBGjqGHj4YibUgNdfMvVXyLTUx2w1muL92yrifjZ5QMSiRj6bMF2QGt5WUC684gbCeG3Sw9QWuV7zK",
  "key5": "67TH15CVDskMSwyXMsnHoh3Rz6y3cipkWFsH4roo2sopLNyYyFDxXgcagvxcsLc2HUZiz6J1adcxiKq7F67jLvK4",
  "key6": "4Yy6E89dAjUdoLnBDwcPDdAFKXjDBN1n9WZesPSJD2qRyMXJxvCLxPk8yk6RX1y7q2Gm4d4sTAgrt6fLhrar5Hcb",
  "key7": "5PCGc8inJLoJ1MHSER2vHJ1XTNPKgLgmz6F7HN2kKMcAyRcmtkkcaYMjLwcVePi3yw8ZKSJMrwMXCXvyi9vBV2tr",
  "key8": "Yx77nDzhmkzxTDJXs7CDUP45JcJKBrNMJe7sz9FMEsrxXQi4mBXCbds3eV4AmwBiSmzs2pYTuS4s9X7Git7DYek",
  "key9": "5MsehLsrZPEbg87TmKUBwRDs6ExPxTQDvJUUcpNKpvR1TfyvejVEjJvJyEHqYWzCvQ8WsucRzvG7prfpM6cDFP4f",
  "key10": "5baZsrear58F2BPtpqJsku7Jr3oVbHxdqjaUjeBi6eVqnNptgEmqYHkYvVjuqTHLSLUMh3gJUytLopE2TPtsrM9B",
  "key11": "H3HuXdAQVbt1hU3WDV8VP3cfLSCF366Gge6vyEQGWG4YVE42pYU3i9BxRRcnoBQQGjDDLSmWuwh4rqLHw14Yyd5",
  "key12": "CKDJiaiQ7PmmKyYj46sZDjYfXzgZpnfzBvPY4qaRUijSWQMQLzUtPK67v6kBuxf2J53TTxC1Fr5hjNYvnXDw49c",
  "key13": "MtktSKMU8EVuTzVJrb9KDRFPig9v7yWJBoGMwpCnNXfE1MxM5mDK6sTWesTbKe8GJAVmrGryvj9afVbXAUmod4h",
  "key14": "5TNacRjLgNz4hi1veKQr7tJWGsc4Lxa7Hto8GcR5CsXyNvBZ1wmCuvUKBXjYRvXEFDJkbHQ1oY95bou15wVzQNyR",
  "key15": "4NM6EnHXoRG6KyTLSCumEJNbsPuUfMTYXwa7qdV6xt2Qdsy4mC7134RUJXyZBrd6CpriB1sGwHk6Cz3YEwFB3FUa",
  "key16": "4jkWDJKbRTJ7v16YHvJxtVtiEr5n3T2FAkRqzgQd6zFmm2kP27VFjZRYuZkND4QjrDuyAVrBZeQh7YG1qVhz1DYU",
  "key17": "2RXydgittR2QduzsPhw5dUtW8D6T6gn3mRTBVpGa17wHhegByhQhn2f4wqByfUjdegb7SXhcBkL2PD8DJUykAQxu",
  "key18": "55p7vMU5U7Xxu2qe6W1VYALgZAwp9H59LwmHsJ9ngsvfz8C7L8HRZ1oPr7MbevenhG1DceR9ZQmegN31xi5zY9sV",
  "key19": "5VToP827dZcADmgtXMo3fMAoRUWr4ewvh6wkjWrSG7nDzE13wQGBJ5B4DfEHBfmHdkFvUnavsrJPWrgGL5N26YH9",
  "key20": "4wnH7DzmKzFdv6zz5nwkdhVsvfCbPECnpqpbcc9UC6KiTiy9BvFQo1wQcfsD9WY3VFsf5LPvSiTfB9ykXEJUW9v5",
  "key21": "67E3EPCtwvfJ8f3mZNzf5GGEokCkA9bfpGgghHgggmaFi6NKzXpgyNAoLfzTsAqaX1eytHpAZ8pZpdvc9Xsx9VCs",
  "key22": "3WWaPibbaNbn7dSKUhgyiqX6dmQjvor9q9EWL4DmPLZdQyfW5XHjsoGy4WKPfzrbThpxqBooozSsPoWoYqw3aMij",
  "key23": "Bx1RjpHCDxSkEPhJaNGbrry9kfmxnjbBmjfUmkwECGEyPe1sVCEQHs5AdJainPVr5Ea4yfsUdhbU3TpX9o1XyRy",
  "key24": "5y5uXoGJqyrvtYYcCBg1giwRvUPVfP5Ljos1DU28nGwtodrekPfdcfTaXKgpsBoHkfZ2fgBFodBRaS4UGZqUKvx7",
  "key25": "omjipT99BCzqAZvsXKfuXdkuUPT4i9ScRzY9M67JxG4kDPwNZ1sBDBrDwM54Sp9pHQPxqmYTTR1YUUkHVaJbjZ2",
  "key26": "4wvc98idAbGzLCMCLN2DaSKEqkCqtzomMmibmRt8A2mu1Wybff2zX2jpPc6pYa37f6vT5w4iAPihXJeKfyS8Liz1",
  "key27": "4rUXD3ZA9wcj9mFPmSc6oxrfzaeTEJKyvn9NS364HHW3UmHT4aCTDwBC32bBdmLedWBFr4GpSH1swerqxd2PXcCF",
  "key28": "5c8uA1ZFor8x7NqHZc89aSFoqSS9CLKmps3E5bbLP1CgzASZKZKTBZiiHeW4hajWDSfAr5CwN2NhbpiCk7aTTNVQ",
  "key29": "3zMy4vaJ2Y6CrC9DNwFgJygPFZtSBmEsKjKs6Ar3kgds8PEFbxGtbrsCifRXXBaRAtAVefErEeBhwM2CXVBrKxHN",
  "key30": "5yzsJ28S2rqWEHcs37818V2CKGAFdTsjUkexwqG5ZuwghNGgkPvKe6SxYwqS3qxEyg7D3GonYUhymRJis9Z7W4z2",
  "key31": "yohUGQpSP78ttY9pv6fHZA6N2CHwEdBD2eHovxhBqT59tsfi2c5zyB63RBqm1KKU4avficxdnt7J2i7rYhKyemq",
  "key32": "4ohWj791Ws72sQb19QvLUbD5RnMBNTajcHRrkX6gg3GGqQrgMvnxg1i1ftCnURkaNq6Zq6EPrnr1rK57RvujHVwd",
  "key33": "NR18D9a9GVcSPKaf61Ug5yxSWQDEqcuxtLCiD224d25zqTXd3Xyrt2LEeL1uVoLPKHQbfXKEM48TreQTT949Qvc",
  "key34": "5wnJFXn2WT1Zbf5Q7Bn3zhbwUZVm3GMcE6nr38E1Wxyk7KYC2uXbEbxLeQFB9oXn8DHFWJdMeXDJH6ow3FWFAGSX"
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
