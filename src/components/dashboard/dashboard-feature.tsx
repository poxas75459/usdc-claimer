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
    "3JYNCXPtgMzdQhEp9Bkabjh6MZ2Kaz38xJWEWpnLWaisa8JFx1sAGTVkaeyQVQFZZ7P8CxQK2DmkMJ8gdWzcwrij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MHe3TPmkXF1bRff9vQapUBr4Rxh7Ge4q1kKAWx8X3b4LtcatL2fSggazopaK2GXXinwzoD6f2n8uRfB9VZVDt8W",
  "key1": "3UPtYguCoa53DfKMb1hn3X3CNSYeAJqdo1uCptvbmoWouwFT6Xd5xYqFjoDV7TP8UFv7VGdJPTmPCSKf6wtTVYLe",
  "key2": "3p44MCFdKnGshJ28Mu1zVm3A23HX2Y85BGWHjVvoYWZgL9ubvQz5UdFGBFTEBWs9cjvZXH36jfe8dXivjA5ics2a",
  "key3": "tsfynD8yEqx5jU5g81esQYAfy6A21k55CpG3Sn5EMEyuvKHCFSyBNtFVZMj2hEuMx9NM7H5utDGzcrQxuarRMXB",
  "key4": "2KQxzXuyCMgsN6SzVCZEm43rxJrfAeQpkKHGdjkcpqDbBCZmy837p4SnidnPR9nvgw7Y97oyvExHe4YdN3jj58ij",
  "key5": "5VLGEKnF32kkUdzMmXkuQaevBjiqVsitvEXRQffh7FNYkQKRKsPgkPnCa3YsX3tUk1EUgoKMFc3pRSnTbdxGFz7y",
  "key6": "NHnPFi7MsdfykCnCTtjqzyvu4wwXKd2XHz8qzoBPvKJL4nN5NSe2321HSjZchF9WigTzXYHKfBzhysqYVTi9Hp1",
  "key7": "3HB4e36JPa1B6pDoqXrpJt66CEaoLmhpwf6obRCtoXVeprCcRhJVhN9ocSBjbF6qVmZ9rdxNaRGaDova2NTey5dA",
  "key8": "44UQaymVGAG9NcwPWFbTgnfSstwTq2WyUg52HsqBehXbTxzcbQtkaw96zHGQDVsCMm5KDj1rpBZ5VnxaCeXth3Bz",
  "key9": "38CayZC2EiQ3kSfsAjDBxYWw4G7BFc37hps352A4JttvHkxJbbmV6TeoexX3ggh75U2Y5cviaJb4RJShLf6s6mmV",
  "key10": "5dDuJRwPRF5eY2JhptQCPH88szAQHADGXyAVLk4R5P4eWRyZzeoRKSCQ67A5Jt45VvyXhxkfFZZqkxFAmFJXSqky",
  "key11": "2DnDpmYSt7woVorCdU2KzGcN8Psds4Z1ugvkHveEmjBLHgXy5EZ4NwEFg6TcafSBz4GYSJAxVFXWB5HZ7TYLeDVw",
  "key12": "tfEnny12ajy3NHADrnhojwvUZ1HVgWcTYYsosPocF2rNA6TWXHpon6gvtNH3iRyYxygqpQAm2dCNTyLnVf36ShV",
  "key13": "4vLvZAqrWiaF7w3FKPvAFwkivatRbWt29eQQqr3RtZyTFsBVkGNph2grsKo8fSyPMHb2XeahVo7EqC4MZtz5cbho",
  "key14": "5iUQhpCT2wyE4RoY9fDxxUKwhEV395xSpmP25WU5NGczWgN6CfLT5xcwVXu4KWkEUABTiZ33dTqjtZXgs8NVJjdm",
  "key15": "3ecstuDHpeudBTNu2PBEjCrnce7xeiVf8oNco3i5GmQkKtpSF5JnvcSrr4X1tNfxwRD4dyfETC3yjd6ShaFbpnYm",
  "key16": "3CxLuxaDF2jFBwSoQyH4GZrNLttLawk1bmPgmQ3pkwmLwxzQDDiydJCKPqCweum2J3zpuJpuC2urz9GsSE29e1tV",
  "key17": "4n7Ej9KQ6PF1twPNwepTY4aEofPnbUbLPEiBco62C2B9DFji2Ppy279sPmAer9DdVTmb2f8JK6iG1EoZHqqRgkzm",
  "key18": "3sKKA2rpK27xupNcq23KZoSR3QdF6sbMfAmYvQXLsLGShvV3cwWzxQNpDHConKeyf6FTS2mi8963E17LMZbhDYXe",
  "key19": "4U8v7KZhdA89KpE11qJTJtDff3QxjCNMKr1jqnpLbCuaymjR1povM9GFWtRVFjMXd2rNEFAq29UkMsiNw2yqXi7Q",
  "key20": "5MKjPNB6GaJk3w4zYqAR9664Md3CQUXQouxwXoZYtrrSUfEroKVLrdqL1q3DCUudGKrALxjXNrjKoHHSETHQCxqv",
  "key21": "5s9bdGaBoijBczzakchUurtHZNDZoM4T26JVRsLMMJweDLSyVa46y7MCb8BV2tnSusAoxysY11FDm53QxNt8LXpd",
  "key22": "3H6T5o8ZHfriYxKy2p9eWPKzQ4wpJP52L3t3ZSdCjrpuKmzVsfcWNX5vbFQKzbZS7DSH1EbCRnzHYQeYsiumrfKx",
  "key23": "3WFb85X77rkuiuzJQU3mHiByAAHgVneJ8M1u9SZgTj7g59HspPkxyw21bCZ5nWPZAn2QqNyFFebbwjpUbDvHrkd3",
  "key24": "3EPk4kAdC8EeJy79hTfiuNLqxytazNGzgBFHzFnXr773roERR3VVADw7K82hJVHyhPLVbHFmbC2KLkS4byqXre71",
  "key25": "mtdBEAY4m34GkBSfefkYoSgU64sGR4YVmwqEubBwEJAJ2CjVJeJ23Z4APGZ25RDsa4DDY8AdNoNatRiMCb4Uzai",
  "key26": "434DGun8qw7BPZuxiiH6uMx6Jgt6f4vEktat4DWaD8yXe17qH2kSxsVzpQEVtpEdiP3t9CMFf8d3awiWxGhaBatr",
  "key27": "4sLs8iodtXrZFkdVrHXbT3UEV8bP2cGEkaZpxQ6nbSA2XBPp5kynw34P37Ka5bUbUoM79FwofV6AxwxAGwBHpQQs",
  "key28": "3bbVUfmJawBvaBnrW3MTz2zWMZ3kv3iexDN3d52ZyxopsfKikHKm9X62pyXGyXwUicfQ4ZqoKLQDmX2q3YR4rWYP",
  "key29": "5GyMmSzUFgJiWsQd5Kxcghn5JMk3Na6qs8KADDMwDekd7PH6yiRqabMEgh9QnLMXJ4xXRmuCFjj1tBKxopbwCaki",
  "key30": "X76FTmexq2fdaZ6kiSLmAvismCJWVqY3gbRDXVFn6b12ugjPDC4KBUnkuxJAQvwDhSdh923nye9e7sAZzscB1u2",
  "key31": "3C1UKvJqEoMZ6QGPFFXLx9f7rcQ8joKKR4J9YePoMjdxWhD6Frc3uYgB4SJDhX17TvYBDi3aGdKCr5GVBF45Tvkn",
  "key32": "442eZyADPwSWnbCd7NMvfMpcbbX5QekcGjQVu1XdVteYzVqGGC3VZDhWaJ7mensey5SczHE9AN4MqNhi3RwEJ9ZV",
  "key33": "5ge19e1f5FpYfgHRmzXXpWhwQGK1jpnhSYJyNxqqZ6j1WaQQfLuMat6oGkrBB5FtxYXTqszpGVpABZcRZmFSwGp6",
  "key34": "4HBy5StHjynWRzjp6tEyKSfF8Aan48D4LQqZn7n1jy2Z47hJu3w2vfV38WMCpp2LCB6bDhydzrUnmRsCcmP3pkFU",
  "key35": "2UPzGrZmgPiQvQHRkJ5z8drT5LVLovEKe1ktAeT2PHcTSqLYrjdJ7Vd7TzaZRz715tyLEWuEVR1uQUYZNc1G4RWH",
  "key36": "4MYeYSURhiyXJUjEQAEQCg8ZXtqcbeNqJYXX82rG4qZHVzHk97GSoBW55QqjNuBMu22fXMruik6Jm6m4J8oUhyJJ",
  "key37": "28MeP8CsuVbR1v3WUgLygNW2fuiJjQv4Zkp3XDxUwrZgvtefbmM9c9k7pz5NNWfKng6ixiNzCQ1M1JhVkRUho3J2",
  "key38": "3xzirVLWmAFLRiXrYXqN6756J6Y26K9VsCwyLSPxiPT1UmbaPd75ss1TmRN3PNPpoDXjRsd6G2qvetGQbHKzY1sU",
  "key39": "ipEezwGP4rycWYnC5JuswJikYa2DqVtRTuKA8zaRYJJdzx9AAPih894uVCUZknGsZz2xDc31sFyUmk3pfyDT2EN",
  "key40": "5wmbiu865RySpkQuNCVsNEpVtaEntFdJYWd84SKgNgVVbKdZeTq7gUhxs4bPpmgyGJXq9cuzmsY74aHGiiH5XyD7",
  "key41": "3DYW6KpWKNpV5hFBgNcN9h7uxX8LbH1rbTMt8FtcWKxx1Uu1rv1rFJV3KMc2YhxKo3WMgjeG4Nd34nNo5ofFLhdR",
  "key42": "NZT3SX7E6bSh7wtBB53DQqiqm9sJjj6F5S95dSnHEfmT9aewR9CkuK2ZEcBiSN9CXYPSgJpEQv25m4ssjceKjvc",
  "key43": "4L2h15tm5ABy8oaY43BMxQs7NozAsAnE7TnuJWozmxmKRBWNFTmubKBn2WoFhixViNiNiUunATSGVPDsD7ZMNqXd",
  "key44": "2aMJrAmGheh6mpHG91fvJQDxBGRMhfXfbphJC4sb27rApmiM4RkP4Sq59hR7bom1B1ZfQER5R8np6Dp9x33UFsdd",
  "key45": "zwPUPdSpg42vTNpqpRNkf8tnP5SZd2sTcWV6NP8sz75mYGmFCQbw8vb3kjgxaMi3derR4vJMQVG7e3BFdbjaCxr"
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
