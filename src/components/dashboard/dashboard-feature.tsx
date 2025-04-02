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
    "61PiqGBN7gr4refXEH6wqsUYK34cfGJ3YCXMjVGBLKHudJdPDmzNT8rKFXTxcfSeuQS9R8G1XEZCwiGRFN1QTqZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3un8Gmy3xG9Ua7tgmuSWXR2HMT1qv8n46SvzKPHZcvgi3ndEuZeumCjBcxcufHqHZkzr6PYw41xUQZHjS5kRNdJg",
  "key1": "4ftbdR6FB2dT8yGSTsNiPcCNwobRBPnroxSB3qPLktLfNSKpDy9hAfgkKT7qYrWVjkEGYFfFN1r1ieNLvq813m1Y",
  "key2": "ySz6GRLmaPQZCwvYJPvmnCx9wkBU4sF2f3scvLMcQrKt69o5RUFo6BDcDUzHUTPrRKq1FHiwqMH4JADF2AkRHcE",
  "key3": "2QcxFsJ93SkCpBRhG4ymEsvbtjEUD1N2kUmzYbMFYngxnYe3W7qAud8J9rfRo7WAt63yJARRpNzEWWzA4RpQ4auV",
  "key4": "oqFaEPKveVVaXeAckscYVPaxe1Nimhw5zMidkNUhskxuD1uKTVWCDMT5NQp6Bomw3ySmc3VcdevNPxeUgCmgW7m",
  "key5": "2Hycf5eLBEcN9Tn5Hh1sdW2GCDrvCuy6jMSJzRc7dn5sogixauMepZJ4NC2ra25vFDKm8kEwTvk9jg5AZmyrrYDN",
  "key6": "2GCCYidap7H9FX65ihjbmEE3NAkVyDSZBC7688qJCkf7dnSv2jAKgEwLan8cCaLMk7eBg6ZL4rdPHbGEYLC6Smyw",
  "key7": "4XWxecoH4EBSVYDdrDcwZgszJL3gKAAtdqRzAZxyKHtVc2js7BZ3gNpQjKMCFV27jBeWjGMsTaBNaBgaoy2Jccxj",
  "key8": "5PWxkG4NeCeDTXPQfZW151SfQztLjETkkDhuGL6sjuaQyB4AHAAVPSP3a141qu2eaE8Y7Q526EpLRuwDr3HTWVD",
  "key9": "3bzCq6TKsDf4y6S4C3jC8w9aHnpQUVdZtS7DcYYMZYDp6FrscXhLS5pG22eUEQz97CbnQKoja3vP7WPpaDBSzY2M",
  "key10": "2pPtVtrFUZSskY4N8tyyACSbCHL9xCfvBBu48VxdBySw7nDi7Ay9wwmpH4cLavLW7LXtUSRKciZvcrU4E7DWxmAw",
  "key11": "4aBZdfRnTpU34deeyaHj357TNmitLMBk6Qx9Ley3Ax4gk6hismCV7J823ne6PjcSffLKdUf2uHk87PRYv9E1PVxQ",
  "key12": "57GLYg2J7BqcdZFXpDn5Ph9AoudSJV5CMKFaerbBXTp9RPwf7Dt1fJbsMcLmcgEQZ7UfWu8x2mmVJAvNpS81p5wv",
  "key13": "5ne6qih6memHhSQXzahYn2awEUiJoE3hz9YHbd6V1XnTWLjJBJMo8DArQJUtc66ArnRhj64i1etG1n6FgsEtEJAU",
  "key14": "2UTdVgFCjvpKsZn8UiUCubRbXd8CdbcyZK98AWrEFNwgUfRVY5FwYZSt5GKqinxsrzMQw6KKwRjgvUbSB9AxnaTY",
  "key15": "i6NEeg6Sg8pPwSz9GAYKSBjj3SkFDLkAHrkHXejs1a7WgJ8RsYM3MfPGnk2Za4qYjFMfjtRPynMWYeqr4UgwXqo",
  "key16": "4PhQ96pB65MgSCsG6MJfrj8ogjRCazwJZzapKpvw9t4EfkUMvkX8SeS7ZLnXyC11pVJ9Qojn2wZoudq7CZSvR7XA",
  "key17": "5P1eABE12sEXFYvGPWUVTDfW9nuiiCyQND4vaRidf2cXcmbBj1rvjazoDtcmcBZgmDhhhDFsrDoNDkuBZJnzN5oN",
  "key18": "5bfMhQzpbXD5HztrTGEr4yCoHHKJsuKAvVH5aJJnkXAbUg8y5R4LW4zDFUUNvwxCBHypTCYTtuCngYmvdG9kW6LC",
  "key19": "5CWEn4xah8EnHHka54XuVi4Ge1mtNeKv2LqAoLijqz3iQpejbQQhYeJQZDxdjQbsrSxBE5z6hw4o5YVKArcaX637",
  "key20": "67Rnst4EzaXbXgGE9PXuPWnVKS7p3eH3z7xcdDjHf6F9t4K9CbmMQb7vpYhaeKr4cPXWiQjSgmucKC2fukvebT6r",
  "key21": "5Pb2F1YbpvfTzgSLEhniPUB3772HZXtDUzV97Wv4QvLCw8djghzKLQpAW6Mt8keMmGztd4vTV6cKJVJf13Z4afkA",
  "key22": "1jV4WbehFvkN88NpgjHL437FoQiLtCo7N8eSsg49iS5GT3SmMd2XM8ARK42trQXcVWRTBbEmdX5xvVuxFggqZL2",
  "key23": "3TGMB2hyWhFGNcLDtmstw3ZFXtkZLA5EwqUeyZzu8UyDSLz22pwrRsDnUL6Va9a4CJ7wzh4WfQN59wCqSwj1r1qd",
  "key24": "4aFzKaYQaAWrqFaBtCgFQ2vkmmYt83w4nfeSDzNyyKDvne6fyxQwY5kDgLFjQwje94SQ9kqRH2PPDBD5KdpwZTeK",
  "key25": "5WpoFiK63V4QKe6oxFZpYM7o9NgVFTe2CGEmwVKY8aqZPV9BLDfuKVyEBZ4AHQge261MH2PjFeZof8Ukwa3KXb65",
  "key26": "4r3FRjUpghcYYMJoRBx88nhc3DzSLdFc2i3QRdTsv984DDARDHGoHRFwWBDgc1DMfL6q2xtRc5L3otsbgDDTYsih",
  "key27": "4oEPgfunErD7CtyLfxavqDwqXLQLyXg1kS14hDeUEqW7h7abm2keqoHhu7hhtzp2wx5TCjAvrwJTDd2oGPR2wmoQ",
  "key28": "2wwqf6wWWTkaqes5GQ8koswe157WZfVyi3k5arQBvQmrMrNizmFrucHRnsFWq9DPqKwpymrMRnFaDgdPJgYZAdRw",
  "key29": "5uGbAc7t7kzbv5TFpFHDouxgAWkKmX211eMnDReJTHpSmjYFKCq8aNdKYJsuijjjiXjvqJNJhqGnqTSqEdimANyY",
  "key30": "3yByFSFRP5YaFfSQqm1LtwRgruWdxBMqxyGsdFZkyXRoz826NvbovUbSxXp9Yc8Pzrs4mjze1ANiaDvkHxN2u8JG",
  "key31": "5YT4kaENCRd5pof1mCDxZc634AwgavS8vxCQiJjGj6Y1ES3PrQjzRrBcdN99FwiRDJZtMX7gMhKTLtkekh3dNdm",
  "key32": "3hMyKwwuqHKeGN8PgdzSTeEphcMH78rTxL3S7DzMrfdXByb4HisC5cE1ssVr825toxmASdDSsBtz5ecWaYv6JMw4",
  "key33": "gUSjZRfpBjkWhtm2u1eiidS8zSUCTb7KUkV6ULmabUMpiJhPbC7uGM8vtME7dhvxrFxYyt9xbQDDgKuzbBM2TJK",
  "key34": "5j6tHYVNSnixPmjgGBipCVBDtHYANasy31ud1nhCc4riZTErfFf4v9bQ8tMzbMs9nqgZ9VkfrY5hrFcq2u5XqrvX",
  "key35": "3eXyV6rf9SSRWgKDNZPiLwP2Ph92423u3BNFe8ieKXCKqfs5qZjjyEyhzeYrkChqh4vN3QTn4VPPKiHECTWN1RMd",
  "key36": "56ba4WFiRETRdhe5QT4QTGq8Q34xCLKyK24YbWXFh4S925rL6nnsvdN4EiMDcV8JymRS6EAs9tSg8ytHsdn1e37c",
  "key37": "2rjXyqzCecKD3o8Nqa8JTcVTA31nsUACumiGsyRgRRWcPbhzDrX7gYTD5sVFczMC7w3TWoNi1KvEWhej9ibt3ppg",
  "key38": "48CEVEAR4ViCqhUxEuFd1MfxNeyDJSw3ZK7MtQdwVPbkkerbZJ6Y2npArZiGtxgCCYAad9CqJiZwowAcxWhUVhND",
  "key39": "3cEoyxoiqhjw17iZh6XCereboCCCH8RPrWJge7wpdHrc6xtrB3HCaAvsmkkufuqAHUv8K4mdVgwctBJZPJDdA9X5"
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
