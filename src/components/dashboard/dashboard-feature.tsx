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
    "4D4zArDj24As3atJSsuQJW55etjEZBd4jPkH41nmVqGMsNzCn8CEZRALJEV8NhdrtCcbJfYDmZdKMm81CF4MHPcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ymDjo4xxfyqzpVxX4Aaf6ckpwAYP7Y84wSv79zr1R7wHcp4VZ2TfTiXJq69ejoeikkDTEoT3CRZXmrn8Nv2jPW1",
  "key1": "2yFH4x3HPuLQeZFa5isGUFtajCjF4FRZQoJeJhEwWhxkV9vy6nA7em7SFAzwRPyQgpLTYN29rkPmLDb616MajRXB",
  "key2": "3B7z6MMCJ3sXHGwZifdzSQyWbKXgyCaZwMVKkake9KBArACWoJRpkGhVdCCbeLcFtyH49WLZJPDiDDGb5ERQo5E3",
  "key3": "2ok7TUqWq415KL8tEE5L3hjpnKysmzuhfurXsfWU1La3A4vPcyyLUaDmmULi8Ef3KQfj4S2stGMb8dVvok4m6CDR",
  "key4": "nDBFHxDvu9AiZLik89MgwJNrE8ssVK6z7BrFQ48fWSqDrEA65B5Fo2cFQwfFkuntcSNmWP1bomPxxGBs6UpYbNe",
  "key5": "3Ue3ZdBC4VuZEEguPyHZ7NqJbCxikFHKJrjnPjzn77JnpwwfWSFEVxpUn4dCUVvvfqHFNwkNmPiNuweAQP7xjQz3",
  "key6": "2rtkTCKujys4x2Yo3RDuqA4PWtHbAc7ueu86umeTEDejhLHQ42gLACBNhDrWCW39jpAFR5QzzfMKNiw3JAQw8cZR",
  "key7": "24nHeqkBgZ3bN4aMeCPRemGoNR51LtMDRNuQfewd2JSRNha8ipurdq8S9w9h2anPp9XmMQDkUX2afX4GavdUoCRC",
  "key8": "4WVtHXZy3mUKkorWzye8SNx4itB83nF4uzwsd3yJ7Ysjfq8qHTB5WZGSvuNBpn3dbncVNPfUN7FuNyaHjQD3z17U",
  "key9": "26m65CGK4TwYuJpboHCPeHidHj1jWVgaghoJgWFSQjQ8GMYbTuo8nhUHarD2UeD5v7xQ539CKdiX2CmwpXjW2LWR",
  "key10": "4JjNbQtVrUnMHAyUEMxQMT2BugQHq7gJXadN4FSSLjkc9iRBaKctRbYUCFgvV4WiNZaBURyJkjzads1gn4adKA95",
  "key11": "4araUrTFopjB74weddke7YQLnDs7vhUTqYnpL7JGr8isKS6Z4Zmrssa6i1bHoVHTUV5GLgVLgCoCwBwKMVh61SxD",
  "key12": "2LuXv6jGuiteafMBVnJcYTJSyk6rHhAFHWcU8zw1vw2DcXm311ZFAWLB4XKXYCE6AfiT66bdBnK2tMyWb8mN2aH1",
  "key13": "3RHQzVRmMZKmMR6ZZzpzuyx5zyij8a354Es288pPaXHZid8NHzLgiPBmvDxQUNb2nqUh4dVn9pw1jAv4dBGNQMmq",
  "key14": "2g3RrHsSPCA35vZoYY5gqupPt6tqBvhHfrNMq6AwENGUs5z58skimfUptQnwxt8jUJp8GrXbpdqWueMPxBruqMNb",
  "key15": "3xXVqorcKA4oSVb4tbwTjPqWqcznPnjsgtdgnANw756L2ohNrJuyWxEug1SwQ6zGhCz6hUrruaVpjUBMQ6DcMkKy",
  "key16": "2W3aady2m66wSGiNKkmUX3DCgKyvWLCsXEiAPGWb58eyxyv7horCMGkCJGzaoDbLCyMhUBQ42P5B2c6BPE7PXPua",
  "key17": "5kvvFGw5oXWsv6rVN1nt1fyHpnGRtCh6nwrHNuCTV9WXoRF7Xh74Jut7b6r6BvsyNxPDBQRmvrkLLbmFxc7eSxNG",
  "key18": "2suqhdEhbzLxDQdwmxV1QdddY2cvXkZdjZWN4UmSX4wk959QSbzts7ZHM7AkuR4S6LMYFVAnQ1hQxm6vAhZUS4oP",
  "key19": "4PLn4Le1pRUnSUnDGSTG2mwdCYC1brEB4HdkJh29hbTbVJGXA9A4c9ouWKeHfosAYNjRDuHWCoKpU1XYKEpJRkTY",
  "key20": "3H7RFVejjHdBprH6p5HVs2fT7Jzg6P2vkD9VCU2LsAmGP119LD6hi9QEhMVZDgKqAz185anaPehnvXvJCaRtzhVj",
  "key21": "5Mvx5SGSLDQW2TbvCX5BbjyUYrctQPGXkJcToPbJF85zWVbJ4Z4y7SVJuMyQ2DmJmKsJHckDw5j4HxQtpLZ5YbAw",
  "key22": "2kgB4qjxvNGfKUH8tdo3R1zqJWKJDcZrwzsrPJ77pdkugjJcovnUcaXZJCxYpN5N5BZCLUZSs8arsNT5DCnjN1cs",
  "key23": "4oUWgzeLLhj64wev2PaArB8nvcANs5DXnaJwhT2AH4ji7TTYXLssdfUPZCwtGXqkKpHBRPGooTLKgBUUZFesJnCx",
  "key24": "59Gfu9u9cSEnhewXTvXkarTxhHhvancD2ZCMrQnoVnawSPBqsgGmyyx5tED1bq23NHaSqjvmUdoouCZZde8W17UF",
  "key25": "2SJok7bWQVeUqiY59j6Wu99CiufNcs21SBiTkCgaEDg1W7jecBAz3JAd7RTqCRy8DxfePUf6kypcgwFZeSL4J5be",
  "key26": "42RzUaAqd3nDoNsKTeJAx3t28pdWegQjHS4ExribqUHQ5LqcDY5sidJu3zG7uRWT6k4mjgXCfJWEuqq47Yu4jMT",
  "key27": "4dtn1BE7joziRVUJU96igwg5nbyLHqhYna2SjpqwLiqmnLP7DuZnQ9tj1jnjaHaY2TRZPCvogcE3uaCeDYMaMzL2",
  "key28": "4wBhJuRNUbnT6tTFDG9CE4pGGq4Vb3z3vfyJEUwDWhnxQr2fHH8UVw29YnNU3mpHhtFaM6qzBPddQEaQNMnA5HvA",
  "key29": "3UpF6oVKuhoJL8sT6uVySJBwHGay4jNR8FhvjeAVe2wiJgxw3F5yVRECZ9x2kPjb43R97TR3NqLwjLqVYGZ5anR2",
  "key30": "NBaTBKDyi1aNNTLjdeKNoLSzASfcCeGwAvp5C5yH5ewkL7WLVDPNvRGwQhyd6zunwsn2XWbgHUtoviEJnuqbSrZ",
  "key31": "3rE8M6T7redAuEmFPDR9jqvQCmjzT9ToBSF34mJAKYg13uQpmw9mBwUVsHFCYBT1pFxbGSEwRHrnFucUWtiPJB6H",
  "key32": "3oXkJVsnV6KHouB32HK6Z6jGWx3LkAZMKBYLoGaG8vvubPPXxxzEE2jrBcT11AvXJv7YQjjHUgXruceumdC8zBPd",
  "key33": "4MrRbNJ9bGM3MUwXBX8fGDrCi2jtqo7tRzAJDR9zgQk1Gw67NrGP7rM1cookkb8CGEKscR32aZAMG2nxT6ZmRYmi",
  "key34": "2ZqpLtzJmUfEG8W41wWWYL3fWrqcmGtBi3H491Eytwep6zw7aqo1StsR32WU1kcLWyxMRYWoH4tYCvppr8aiJ8PK",
  "key35": "4xsnAYEyYAEvGdWPEXkDb48CNEf31JtrdsmqVhbxPaLaz3qyLAAetX6s4uqtWWyHaboMbEqNb2Ly4xaKkk9ZLSGK",
  "key36": "2DdAavphu3DSYXreLUmYUFHpi2aJtYuyiEe3eQ18hYtvwMYbSnJsvpFx1SaFEp9Covasf8vafjS4yZmhntK9gXCJ",
  "key37": "2nWEmu4UEZMy7voUHn9WJLkLefpJcbwj1pYQssrtSRmjdAn6NSSXcb78WupjpjLomoyg4PZqVxh47DYYGxrMH5vR",
  "key38": "65M3qjBzkzf2vAnQmdy5PmHQad2CdwRpdxRqpUmXqJxGQTwGKL4JFvEuz7ST7ZjA7JN2ZxA3ZjpnF6wSXG4f5tzT",
  "key39": "2v6RSpifsJBQL1JvTiBn6dWRbejnadZFPX2aA5kGnvCGftkzBrQZeR3m1x1ZE9xVzy5gicToKYr98GSmyeNtgJEe",
  "key40": "3j319cGWdKymbSF8ys8CqXbTu7D6gpRM8ESNExLz6X1b5Z2uCCY8CvpWbMTqvq3fJRVTcSayVsDFeSY39DC4QPGr",
  "key41": "2ysbCMuhoyiwz8AbYxv65kMHyShwKL6gLjU53qWQRpi5XUPvRSjziVLovdPGLr5tzXAgo2Q6U3Kcy6LH785WfCae",
  "key42": "3ZSpj7H4nvgFAwp2sHokQhbFFDup9neuqTEgk1wzXrtDvoTL4CNPo5eqB4c1SgFVKFF9k6SuyFDeqsCwAQ7h54N1"
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
