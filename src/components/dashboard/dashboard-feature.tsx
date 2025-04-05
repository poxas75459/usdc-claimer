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
    "2zp6uYTGh4oMrS3JY3JY7nLWNspmHihBsj6BxZQi5hyZjCs3Hu89jVGkB58PxczxcRhBpNf8dJNRKivMRFgzvVs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNb9JgcAFUckevyTamvFpDgurrXdyLM7HNirfBuP7a2doQJjmT3mJEXAeYuYcJR44gfGoCDeNu7p2qNUSRSnKoX",
  "key1": "2hNZApX6vCogAVZp4ZAhFH4XCRorg6MWb9dyh62mwLmK7B65cxUJRbNp6E4Zi6L6SBMc2z1ghCspADfKR7Pdj5dS",
  "key2": "3vLZkM6Zn9K7czXLVafuHZRSitU4NX7K5DB6mM2VRZFoHMK8HpaL46uPbXo1s4njXjkQMkt2gEHQBMzKdCjn1fEW",
  "key3": "5SMjo6qN7AsUjqfaCynKLmRK5q3Xkp3KVHEq7uH3GBxUfuEdxG4XABSk1PW51GUDhhLok71YXF3TL9cDWGDWb1wn",
  "key4": "2e9rRQqxqPoE7aXWTwcmkU7TTAmKCW1m7MdMtUKepKTfD4x2kGoV7C2FtpRW77ToX9BvAA7yjLoDD6optj53Fdm8",
  "key5": "2xhjiM5PF2YwYXoqoECuUJfGNg1pCe6oTEN43JNUgsL6v8nT6zpyHPgv4nPACctGGpeG8w2UBQgeuPtSDiPNAJyX",
  "key6": "2rAK6HpoGJdooyULJM2a6ZwfkE7pPRos6ptRxjHQygvkoQtkYynnD5tjUk8nafapbzwGqY7nJ2Rhz5zts2Jvzx2m",
  "key7": "3wQVjpteonELFDNFKq1p4E7tT6gVonXTtwhxWckdhAa7P1ikF4Ghfn2x8NhWzTcmUvrr2FuMV6WVBajSaHbGg2vD",
  "key8": "4uw4A7BhRcSveMTYTuR1KnjGUEUCDadPsZGxhRddQAn6kyFteyFU8JGfiZ6WY6X9C6zyXhDq7JezN91G9Bpwo9G8",
  "key9": "4d3i9X4YLwj9QSEYJHfwK2fkxpjVCKViLyeA88CZtk1YX2YrPEkBK2sr2YpbQFT3g3TqgqDz3Zg5hpbpBoNfeVBz",
  "key10": "j1jDs2XdEVKWpz8WEsEJocTj3FaM1BfRzb2Sh13uW76UjX72qgn9YdJKiMTdaBa4iM43eQWRLCsTX1tUcj4DpKw",
  "key11": "56xyfjwGMuqzdV9SknJPmGpJwhsfG9DmBu87aPtKALJsNN8NPSiukaVvBtZEBU3Lg4PUjF8UcF27gSErJWnwd8rQ",
  "key12": "M7H9QbabdiSxqcdKEaKgcRTzXgfiTd13FjkqhgNJFKojCnTN5gXGBrA2qN7FdfvMC4tLpfCHgBfgZVZ6ZcMUG6Q",
  "key13": "2iRfuBD5gRRTp5FBLXyEfjUmvMGGUGfexgcfTvmfQJzei4U6rHUUsnzMUmSqS4NnGqYKp5P4zb3WawJABzyLf4Ln",
  "key14": "5S5P5d9s2sCS5rBxMw9kwNQiKC6dukcRozm2vTEPdpsoVHUrcjS2XM2sWhZAbxC7XqHSCTNQc7VU7uktMGeRbpwZ",
  "key15": "2t1qo85QKsQfXeCfuujxiWEt8k7wBJRtrfBfGUXaE7rWjcYeNCF2CQrDyV149qycwPCukHFXGkt1235BpivWZtc6",
  "key16": "SJcBAb9eUWk4p8TjQgJ8ixX1VWkyq1TNWg5DXWojJuyn8qW3DEmFvkRwUrr3sJzpKCLBT4WFiJ1bCrJRBvqtV11",
  "key17": "4f7dD1UyZMA9PTnuY8Q3jsDpUVgeAP6p3iRz548LqwosndxbXQ9e8TMUxU3t3ZbGhCfRuKzbMqxAJa4DX8kyoD6j",
  "key18": "NR7H5xWPh9nszF1UWKpC2zhSbts2nJjR8W1Pt9gAGRN5dzC5B8ZBCkHj2dSuLj3kBKtJuN84rjvBx6e6RsTUXc6",
  "key19": "5JoeytjPKwRxiaraPQq9GpTP5ngBE3ZAfbTfd2C1ksLaRxGmM6gKdYDTMrVp61nEDhGKrS2Ddtjpr5pnjybuLNPD",
  "key20": "5nn1yJU2DZeF7k751CxTcsv2Qmw2qT5b61nUXHMXcbpUk9dG3keQAeuWPLheqxHqwAABuXS2c4w6zhoi22s6VHqJ",
  "key21": "2ZN31b6hEnp7h5oHUnN3ZDZELY1eq9immELbsVBCUF7KEgcKyvEbWSEt7frEhokqu354VDyLqG9WhndGKmJHUWy1",
  "key22": "4RkyNfE1vETZfsGHkBU1piRvSY2fdtNbP6F9Nu4ULBVfqxR9s4zLKR9nxDkFx3NuAmCVMiPzmpzbLV5JBnG7Ciib",
  "key23": "34RGKVRChuBbvc6N6Hu3TzTc286PiLF8jdE4Fnc89HHtb8mc5RH5WsJZ9ckroST2iFQxF2Rg4v5qYTwAgj6VR2cr",
  "key24": "3hakcquuGhbKCjy7JVe77Zy88MdETkq5SUgcE3d18cP1UwVPNP2cmM7z17BPDAucL9Gd9HupbvzzMibrRx1fmw7r",
  "key25": "cBpgina13s6KiFZUovFdQH1Qkc6yAo9jBWC91PJetyFsessv9GkscKhmpDcct1shUS9diPJ8x1FzLPKQ927Fdt7",
  "key26": "5EZ4y4YYQz1vzE2bwgqfNVwkwbkw7mfWuNLcm4hhU5zoQRJN3tvoaFaynGZV4wjzGG1mr2XnTYmCHGETvyYhjuY2",
  "key27": "2K6But41Vy2su2CxbQDomZPMiZtBpmS9bP5ZQ9718rHLyufcQQHGUJtS3BDt1VnsDbg9uW8sr5UFdtzneDiwprfb",
  "key28": "52xbKvtArGGTdzaE4MCkFvn8r14aTRTKbFhFVuJo92FCThNbCwN7UACkqmnEQKBW5EjoqVog718hoVk1EQ1hfmN3",
  "key29": "5VtLxpV51of33ibyvjhX74X5J2BbqY5v4HAMmnjj2wKgtit2xyHB9cvYBNa4FMxDoMpasKXFZaAcjLx8UkeLpnZY",
  "key30": "4RFDZ95x8g1Eh26nVj8cUFic3md5eM5XDuoTtQLwBcEXnTFyxWpUjWREgyzyXLAH9rEf7BYxk1fGvrdXd5PCLx3X",
  "key31": "3qsc7ey1dNL8NsrWS1kSE5pxCvNGa7DaoeJDBg7EtUHoxUigAu9wUXT4RU33cKiSoi12vAqUvUDJwtVUoHmVBNJC",
  "key32": "5WCwcxSRrkwv93bmQEHfs2po92fC8RDQ6hfwaDeKJPmAGK8SPktg8Px6HzwhuUr7Xx3XiDMdtYzrPFG9dcVKTBF6",
  "key33": "5Ye6AhLrdSLoBgQbTNQHKurjUYSp3C89vme869F6kcGbWc9xG7JXNsf2vHSeo3GbBurfbMA43F3Gh4Jy3az6iB52",
  "key34": "32gikLhCHHfmGMrqr6a81gUjcwi8p76Jfexte8tHvYdntn1Ti4U4ERBUtw13eyyW2nvKs47YMijmM9opb3uXb6dv",
  "key35": "4FeCh7mp5YqPiESV9XZML42wDKEyd92sHnvKv8MQm3V3xn1x5ssJMLDuDbP14hybQtAeprUETu9eDAsnSieyXmND",
  "key36": "LUWo8kwa5r27MCUpsTVpsjxxnefx3yaV8RSx99ggFVFXvEku64FVxXUAkcJzbqfiXaA33FJcH9S8W8yqp1cGBpE",
  "key37": "2cAXE1Gs5X9PocQNuAdLPb3wBSnneBzMV2K5aMJD9kexFAwUgxEEpgXKwCNksremcJeCLAbdNJxnBEMgVVnbCn5J"
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
