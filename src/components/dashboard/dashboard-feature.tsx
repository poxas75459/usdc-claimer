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
    "3PuesfXpPp2Aw9EBQtSJvuihW7s2VvjyGJtYcNzKsVd3vg6p97EbBsHYNCAhSpbadiWkgBBRjBMckjHS5CmZeXjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nx8D1ixcBvNmDj2MPLuwHpfJTBnQCYfmdpfH7JMU3VYjpjECRKwBDhnt9L7sEsU3csXrnDBx3aNu2xCEfaS61EM",
  "key1": "4DxQst9vhdqa8uMfaQvuHAP7oJZW7yUFM81mcZzkFGLFnBKum1LcV9JVqaGmpCdNzukbdyxfL65UPYWNURcszmxa",
  "key2": "2dWF5v8VGbBe3vzpBP96jMGQgxfhogjj8RVW5actsVRR5SqsDeHbxxvhEmiz1tRGugMoCeKEnfeyvjmDfCvFWTiM",
  "key3": "2UPAU1xQCobv72nL51CBSjw2wtUNH43jsbacLUPNk9BFuJBrdAtnKxKMsjCvvVeghxaswZ2XUxgABNur12PTUULk",
  "key4": "QbnoaHGjF2kEgoqXCkhQNGwgd1rEWCiwAhqo2qFsriWdBM96bGnMvuXpiVVEWWUST2Wy2n3FVT5q1yySpG9eoMG",
  "key5": "HNGwtJiSmq6bK4rPHS7y9dVsY6ywLS6GuQ4BUBcvNFoHbLELBwhUDauHsYiJSsMZGF7SAwGcQf9gGg3hxvCTLtT",
  "key6": "5hAebG57Uk6D7fQhepxBJSc9T6JqFksEUWCpjgu2mrHr2nULMTzK6BmyJ3Ecz4uDFpzKpqJzRv89BgqASTdSMyVb",
  "key7": "7kULsWf84jvyK8YWSLCyfzUMsAWHgWdPVEdi5ChXyTbcbC6RNLQsL9w5p4mKzFMzv97i31uCtzuQtHE7EzurpcX",
  "key8": "41yhhytUDPssm2D5cecHvaune65J5FiaNYQZ8z5MivE49QsQQJe3FAi7RJBFK8ArcEkYZPf3HKagGrV7fSMp98MX",
  "key9": "3ZKN268PWucACY64MT1jS3n2idsrXgq1hhC1keiyikkfb5SvZQt7rVDJ8B668yddrs4QD7APybAecypoFMJFrrA6",
  "key10": "4hMpAfc9rnMYjCEYTjURkqfEtpWH4qLm71tthR9d2ccntBcJxzQtfZoXWdsLKSYmRzUtW5ihm2GHRZsNU5tweEn7",
  "key11": "2iCTnovFTNZQaPd3QqYcyFGTjTgYXEefJRMcSdPBHhbqvyMyuHDUDAR4rWmUEGxyAz7ezaYNQB4s82TfumJUqvkR",
  "key12": "4ae3Wvdvc6SNDF143LiMa4Gqm3noqmXPxvqCtAhvmbdCG3gZ1mZ3wzj2ZCp32qCVRZjfJEUyEo71SaJ3kuGn99rF",
  "key13": "XhmJ3A4SwACNAzdYjirMa8AGWQimqtdk1DoU6JX7ed2WDunQ6aLCyzcEbWTd1cg7XnsZUL1Z3QJyaHgUMxmzsfy",
  "key14": "3ecfAHrK8H7LB2yZwfsG98EgQckTXkbk5xziS4RiXasp1wzYjSDdfZi2ZvvvBQPqMTLfYB1ET47DT6oqPWb7QPNz",
  "key15": "5nw2BVvjXvSGB1E5cnqWML4sU96CC2TbFDmwxNhuv9XdeDrFv1Z4U2yafJzPMNPPvkx4Ei7wERrJrwQQz52LFPjV",
  "key16": "6E4w1eRC9AEjtV35B8wpWsZMQPHJSQFiBNjSvAqRUb4EUx3R7weEm44QfvqYba3WGdspHpPfTtahyDJNFPntn3T",
  "key17": "2Amf7CHPMKizLzMYCDatsfJLAYCJyYYLvLcMKWaxFTgrLX1hrNY2VaGWaVMj1zRDVNF2HVrQK3HysXWCWaUwDjrp",
  "key18": "2kQ63fDXenH8mqELFXJE1mstqrGzVPBaNEQnKTvNP7QkzKswXGzYZgJmewKFnoAPRvA1riVsoMYRaKKD2XvNF51n",
  "key19": "3JT9tbXNyeQ6YFCgy43C2YHDG3KxLV2CWpLR5qzebwWfmANTbhrFU4Z1pmW7oGkvcxzLizVrV4gG8oSamxFuCLud",
  "key20": "2gC33c8jibzWPm6oakV3Amu7X3YnoT3i9HamoNjWAGZzjBUYBqrhVoaLjss7KgMinFY6WisdU9mZhaG9Y1WeFVm7",
  "key21": "4xg9ehBDAVEjgFjbDBWfXArW2XKP1WegmpDAaJgv2C5qEfDx3CZKxv2EWfY4L8PT9G3ZvXT9UCqK4tmqRctyrY9",
  "key22": "4rMj8x1wujFcHa7M929YWr3mHMmd1jkoAs83wUTEEpPTVRpnU4VzTpzvVpzXxB7resHsaVVz5xioeW1zuY1o3Hyf",
  "key23": "49yVxnbzzUPkFwA3SW7c8XdUGadP2wmazZFeV87FUtTTX1fw76pFMehviuTLWrxdwdmybAHTBrinojVaPzENXGQw",
  "key24": "4uo21dGhrdEyDqkgPpV6Cv5kb2p73mTmrrav8yhZVHmacEomDb8gt67LubiTvfNerUiAaqJWzJ621qFfWbjQxhmE",
  "key25": "jZYNXRxasVw5cuv5TVUkzimXPsUzVGkJRuzrGshMv9Vks7FCtL9MJ1LYKaX1gRXsMycucz9AokWkHLzSC8PH1jj",
  "key26": "239qxfseYTZkrbstJ5JcMazKPUnscEAaYNqc4k9iQ3ZGCyZTpx9BZ2Pp8GREncDtd4Fak3hA8RFjxEW8sGQ8WVHa",
  "key27": "Jy7SsBFvzZsv333nWECMYiznWZ4PzuGg7RPXu5BpXcqetVyrHT6oCbAr8cD2CQBoBv9fWZGcMJTSYSoBftcbmqy",
  "key28": "2EsGLeitaMceQUwRcmvmnhTwBJaoVfhChEZg9oyavW7QFfDZCPqwTyeHbW7RhJULm8NAKyWXZ3ftLwF3PQYBLmvJ",
  "key29": "4A3QaoYreWuGygKBTUk4KVMxZk9aTRQbj6qaRMCEMxG5XHY6o6Vf9BPcBFtBwSorfMNADTvGEJa5vxoHFx9tUzKU",
  "key30": "Z7nXHHqjhUBcykEBe79oUFqs9mdcKoNqtfCtRMUWzSQTiH8LmUzrMvgY2V3YZsPHK22wDWFQ2ufMi6KpyhPaAqV",
  "key31": "rGvKcRKw41ufUwEtQqxd516qfDX2QMR6twU3PfZvZc8aUhDshGY8VUjhyZCJt2Xaewn9jv95qQpquBaVqZcfaMU",
  "key32": "zpCbqaRU5GGmiiWn8xdqFnisrLfPysQhgvk3Qo9yTG9Np8bbxAKRGGg34dEBCPP5AtR4qBR1EJ1Mg8nALRuryo6",
  "key33": "35rWbsBXDcKhxEZCGt1fVqNGsgx81ix79DAgRhDgcVAXZNAjWsk4NdZ9VcmpPt9bRMnPK4iNVC8b5NyAaTHQEknS",
  "key34": "2xbZRqrDDyH1LRvbQiq3P6MzAe4J6sko1xsGp8643Us2SxHRJRv9s9KmgYYc8TT6cb2TqJQgDqYrNVeqfTahUTdQ",
  "key35": "4P1ZP4qgfNfYPKSjRHwYimnZoQtSdnXwEFL65wybrkUGru6bpoLfTecPhKJEiTgZzzi5aMWhsFsNxmFBtPph2RfR",
  "key36": "moPzLNwHG2cLhJywvbjFUVf7B6yUuxFhVRYBdycCqdKxBDwRnyHrC1EFCKMuyea8TxQXeMkV7QwQVS7hBEjmKmz",
  "key37": "44CjPvcmnvBgBMzhcHR5m2DTafzWFd9KvBubyhFifWJoqg3ksRfzpwQ5Fg7GVFSqjBKLsrorePZey2LkQ3QZiqw2",
  "key38": "4t92ERF3zNrsQtCwL5S7VVcJdDYnMsGoVMkLFEwck21Jx15wF1iBkCaFJEdH6vQ7tB2hCWeq9hNgdLzsQ2pjmJ94",
  "key39": "5YhgE2vtnttjtzBu4kbg3ca6tgquNuRMoxRoNHJfoiGBzHJAMMsEsxWeUDoUK7TupwfuhdQffuLA4ybaJwznWAWs"
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
