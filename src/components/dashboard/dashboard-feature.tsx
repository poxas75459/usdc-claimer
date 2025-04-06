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
    "2od8p2oHHQZ5oBLaya1QZV6Ape8LWPojrTybV1aBVDrYGBNTXZ1NXvBZswnH7P7GuQeMqiGPXUcph3zTn77XmiuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPQjeh5gDm4a4dzPaGxE8nP22LM64bQCEZwJznNZMFq4BYbzKVsyQWs1AW8PUQMdSve38iPh9vz3DnfnyE6y2q5",
  "key1": "nBfehcrXf49kx4V89RhNdTyNUx9hjgKVesgYzR4k8ZJYcgQDyqZib7QKXMJ7TTDsAkp51pFSxCGouHDgLpMQNqx",
  "key2": "3wVXN9nvMrCV9b5CAL958Rymd1DWq3wftf3GVr26c5fUuru8sXUDHpMwV3f3Y7NSmnMBMLjYNCG8Hcu4XVbW4euf",
  "key3": "33THi2o49Aj6hrr29H3tWYyoXRmrArLP4CnpGnEYCZBfseUhhcRidQ29eJ1UNB543LJd9t866T2HqRsuHAFCKtWC",
  "key4": "2frRoyCu2vVxx8AUqw3cPqtShuZmZWLqnRkmL9TdhL3Ejz61HJRSYwPTmLhvpHQnd6DFyGKuWUJ5yaxfeXgYkeRm",
  "key5": "5GhznycetdXn6paa8cLGUjNM3Vy9ZpafmRNdmL3egto2BrEoS7r6PeRpqqqwR6KsmsA2Y4j3RfEWYVV42nRiGGZY",
  "key6": "2P3BNSaZ1MU85hpVDfWyLVbeGh8SgUSjKxbdiMj1q6TVxXvbsDrkshdtZJhYCYLFptRHNj7ep1cm8hW4DN5GdBaM",
  "key7": "3WXJ63YqmSWo42Hpdg8dL5FqMiZB4MBS4PZyrDiCb84QoBDRLACKPNuchJqjnz2kK17Y4vJc2ia2fTfg7t5dy9Hz",
  "key8": "2Y9gh5qESnMwHfhoqeEtpEKLjwyUG1WHMtnX2zaYQ9iggroCtScLPBnXLTWHmThcX6Zz9wcTGBwNgGaHVXJuThUk",
  "key9": "496qEkye5zgcfStdaJfMDzrLznX8pLktitLK9UbqBc83wR9Vnxnujc2abr2NNufKYYebkt5xMSwLpGvYBrKPTRiH",
  "key10": "2tKk4ZDGL7mv9Yq1BfQ77TvGWiG3aRW9KK2Yk3YBC3FTTEZBWZkeCnPUpv9VVfc1N7cZNNTtNWKARXfQWVkowQTQ",
  "key11": "2WitykBX62R18JiUSSePjxxnYUFbp3DvByHzmWcfXcuLAErkqiP3C2dVtGwPc2GNNmXR3p1rBj992PqtQysTLovd",
  "key12": "5xGX1vsKuBZ5eZBvhjBxxezQaKTgBBcaanWR3u64BACJ9nByBmJGjYKEcL5YBZ9vhCAq51bg8XDjNRn2EPd3jHBZ",
  "key13": "5vWTwoa98UKXMYc4s19gcfhNGf3CHHxLQcoXq8Re3q5afA2FmWtJPHCQswBeGC3DNW62AuWsqu7CACHGZPKKx2Eo",
  "key14": "5DFVebuLtgDUX8HxXiNJQkqDmbK9AeN3ULMKyrWPJiYkRf1GySWfEfbpAMCko4Xi6VQHjQysUpUfaxBy3My1UQSr",
  "key15": "59k3Er4FbKVAY6brcgYNJHTQYFV76xQmVcHa775Wfvgve15uM2gV2xHv5bwfN7kTMFwnesCV819N5bgApi5VrYRR",
  "key16": "5X7RSg97osMMdjwgkDD2YWoAsUQaKhF4Gv9SAgbwhr1RRod2Pbx2P3Xq7x97FEYA2Q3V898jW5ZtFaUCdR9HcpDo",
  "key17": "5bj2WS1J7VTRir9MSXpyyguxwxiZ9vY4D8jhgANYNSTX2Po4tYCfTejVowXrHw45PDJmpGBW7YDmFq498rbcUQ2g",
  "key18": "3jCr6vaKBwpfd5tdKLfDDTbDVwT3eLDU2N5g7nasqMqWFcvkL7SKnLX3QxgdhNq4WcFShXH5pYD7jKFGH26opQQQ",
  "key19": "QLXZRxrLSTiagPGQkX1ftUVZCL8ekoML4742Pg2giwayugCiaPZrvfGGaxm68azWVW2zm7RWgitDwekyVBDgnHH",
  "key20": "VnFey2j45RzYoCCwDktYLr8ftVyrepABsAJn6ZxwnWPHPrvmBhySBCG5fRiEKgcK8ynX7rXm83gFTi7BPU2GGCN",
  "key21": "2aHk3nvepRrW2hBgPv8XCMeJhFrj5JEiMmYY6sbrwkm4SH7M431MKFyesNVPArRkEiFbVLQzB3gCfYuXooHyHtMA",
  "key22": "4C44MYoVQt9iA6P26nuerWfzDsVRVKh9oxqHWETRcgLDXxQ3iCxtd9dBV4oqG823jZd5FobfimS9DWEoGpSfRtpm",
  "key23": "4zEcfmtmpi5g55KS4LhJjegdMtvetujpVFLvW48wxqKaLaenZEskX4uSuFsXYpxSCJ89wfPe18eso6g6ZjRfijuv",
  "key24": "5FKCc9iePCGTvMrDfLi3bCE6HdvdCucME321fnqmkY8ZinSiZWnkBzRHESfkwybp91dQMk1gwg7mUn8QcF1P19wG",
  "key25": "2PbZqf4iJxsPHtRqmMjWpfa6g79ogHeTxLPdvDVk3iXCHnUKE3yAspYAVFwJPEm1XmmbfQThvtbVNuwJNhfUFHss",
  "key26": "YAwQgpCMCGBt9gngMRFHauekxTTGnvFpNB3BNBeW3fycmFev8vwbZbTFdLoRjg8UEGdMt4NUmTAV6QbroCXnvGW",
  "key27": "3f6uWHGHDxpuMmC7zyEdRdsAgnC3WUqprviKJqEBy3EKjLS3BvdUfKjJFEf8HLwfDp9tD8gyEPsWhweghadhbYuM",
  "key28": "4kPwwyPGWDYVFXA1ziAtKTCxmiRi6a5xu7HaPJ5BAsgMeHdpEcfPaY92MjpZXdtvkiPrEaw1TesBe2TNQNA5hQNT",
  "key29": "4weM6mcUxJjuYCosoo6SYWui3oo3pcfd9XuRHsuvzJP1cQkSYLU5q5uBJMn2WpT54hctxiEjawmaNjjMUFjDhxaF",
  "key30": "SgH9ZomPWoazuRPzhPCGxxcUsaACXxWu42JsUdsWQdU7gdapzWKDGEBEFVaN47qXStBVMoKa1m6jxayLheskpzN",
  "key31": "45ZAsDJe5XpWsaMF1YCgaxUyC3MgeuBD15byhgsKCb5UZxETFjRNb7v3SYigTzYHoEdgo9412tXX4maJupcLbCft",
  "key32": "WmzQJC8LuXKNuNEeMLMy1Qux5Jeo7kPgG4QLPeQ6CySCTUDZ8UayuM58zEdae9m6N4FCZNgrxDuWAzCvL98FG2P",
  "key33": "3EREdiLxXFyoq69rwhw9BNu2op2U3yi8XgqXLMx8QZNFSjTXTnwASMHgD9XMFZvVgP73Tti9VfZXhz2KACit6Mjf",
  "key34": "5RsnpADPYc6Hetwba9V2fimNK2XrTE4tRmV6o5h7z4abx61kkZXhEm4Y4YZFq3azuQsa7a46sWnechXXfgaXC7ih",
  "key35": "2YFGKUig9e52r6kbNyr9yiVHU5QocqRFmrhFGoCjyfmtFgeGXzk5GABFk8fDXmQMJbCcMag7DsUEBmNGheQuSJA4",
  "key36": "2Gc89JbhvTwYwRhcRcGSvPdHrXGRoJtV4bgjextJkK4zgbaVevBKKXvhw4cLMLVxzFNq8h3SZXeMQpRCFKbDbxpx"
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
