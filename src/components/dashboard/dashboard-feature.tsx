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
    "4GKL7wqkwiA7HsW8T1XhcLVNhLJpaK5PeDHd3TFazUNR8WKGCynAEHJTqxwThdDhMaSzH9UhVBVwfs2yutxcoGUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qH3ZcTxCdmbveqpsWtQaADVASz8trege1mCYD7fscd62YhbCHZiJwv5YYRHQKDMpDWNQWXVM1vZvaL2vdP1yB7A",
  "key1": "d6cpacRpsAHXgvAX4bGVp2bbBvBrwKndyXsyEiBvEUa3VQsxoEkqFQY9uBzDy2yYUzB4YoyC1LMhKoKN2Jsvwzi",
  "key2": "29dzNRBo629RXNXRAXvwqqjwy9mcAnuuLMXHmHd9dT7o3tAaxt8DqUsWDi5a8B53thqT5uqTFSmbP7zM9eiDDsoG",
  "key3": "2NzBrnjQBsGEV2SLqf9gJATLj6fVTfAZ5pVq1EhU3CzVJAJqoaYTyvcSkbsZh1AxCTRiXRr9Q4xCPgrzHinJf2MM",
  "key4": "4CKVmuiqANm5TwmB6tUwQWS72QD9tcW4a7xYpRBvKbWijaovsa8io8sX5xeY1MbgbDMnWg4aFEW6ZKRisdxEQWNo",
  "key5": "4uqPJjweWsN7HFLm9baXLSJaLxHZr1oSQZ5eACEXyVAyVXtok7V9yCvUeQn7jjhdUHuf5o2qYJPzaV8qkhEpE1en",
  "key6": "4u9FZHeiBbDRZHGqwH2rnyeX6wCGgde8txUZEH73S9PZXhTCDHf2pzNpuwxmtsvUU7wGaPDrdXbbqL2rdC362pfE",
  "key7": "4w2NkpSYrXndKoGKWVZX1kNEJp2n9H44H1Etk121NZnUsewwGkgug8rDHuHr8zcojm36kU13uCy9jfFTadT2ceZG",
  "key8": "2fvWjhro1ourCUs21FfEcBo3SrHLbBMieNMcavL68TRe5LAjAwqTri4gwmwwLa7X2mpTfwoCSpqkQQWk8yev4ddZ",
  "key9": "4ZoGYP21fJuqrLdLENdmy5jFS4ourhFxBkoZNAqbxdpBF1t7Po1M378tJUHZcKu1H4tv6qKMEBsS1duGcaAZRYyo",
  "key10": "2x8NwpGm5y8mW89gHDrreU9DQdP5m5J7iZdRJ2gdQsgN6UqAZb7NUYjFriiQ51g5j2UqWEe4JtN8ojcB921rFFqP",
  "key11": "6vHCQVFpWi5DAByMguSPuDEE5mtmgfMupxQk8gQMcF6YcaK9811YiN3e2foLj7FB5VrCSWAtdLnvCaNE1teNtcJ",
  "key12": "Y8Xch82prgNsCaQJAgNEvGwNXfr868d1X3DohF1n5p95JZXMAfmM1wGrWR7ke2pYU8JVdnU2yAxojoEvx33vaPH",
  "key13": "4W3f7VtiZbyw3qCKnJBS8RVcbyB3ikxFmjYN6kXUhhBr7rP2YVuLkCBpbvY1vfxKna5wADw5jyk3s9CMN8rYZzZd",
  "key14": "33gdT6BukXT3xcrfiDsbkgfwfnkRgsQeWPvusXd355tWzD6mXcviarPQRD6ajkDRPfwgmZm4BQh2qV1Ef2tUVeQ8",
  "key15": "34bQJi1g8zcJoVpThHXWPQtJATSuAstx8cNLp4Ay88YCFLeAdgxXEctf4gTFpHeLR96DjSiRYaqTe4qT6BorfJ32",
  "key16": "4rq9uvVpxzqPPa5MvqE9KAe9wf1q8dMWmmjQW8W7gptnnYZT5o6xuheV1Z7yj3MGvPADYg9MqpLbf1ijq4fRKs47",
  "key17": "gq7qSpz33pRhzf5x75E97mgVCEc4AZMwo9scraH6N9eEw2mR2K4NFQEADdY1nvut7cxdBj7g4LXLMtkJ3YZNz16",
  "key18": "pXvZdxkNm3izR1QAorSFXSYCQs4nyKUo1iRfKXehNzUgqeWnQ8Yz3CDRHSyHSp6EhHHZqesBGvBQ6pBXrWtWdw1",
  "key19": "yLDg5Hmirv2HcEwpqnt2j4WURwuUjroXbYEdGQr4XJK6nmVptw3tdaVsGCrVz7E6fnFPpVJ5AgLbVsjNKpk8zRr",
  "key20": "3RiDLEo6ELHHuoYX5FYKFVzB87YunXL9EQBK9nCKrEAVyvZrYSSZZ9FbGysAHcck2HwpREAajM7eEyJsMtj9VF4E",
  "key21": "4z7ZArYeuzMZqV8kxPmQqa2mENvWwo2ZP8bAgSkpXmqYRRYKt1UruLzKnz6mU6wmTEpug35UJXswnrJY8Uvvdpyt",
  "key22": "4aNiNk2d5haH1Pwsp8HmGZkybruyXtAbR3uZArE2gTMXa8u5guQSNFzHypryDzgSLQwYmuYnvEAfQ6dY5YMNQkqH",
  "key23": "mf7XrKyKDCfWPGTJ7FaWyqaENSwtGKfRJex1byrEetK6U1yQ8SpW2CrJKsaguFvFSYWshFNafgR7wrzPWRFGsHa",
  "key24": "5UPBR63oeUKhfNPD7gJ6JZjtt3wLJ7DUWP1DtLzrLybBrT7EwwFtgWCthzjaXSXj2ctvx55JeBwHfZ64uRtYdDQ4",
  "key25": "yFRzDETc2AFBdaFggUvKeUCnABKxQ6q8evaRCu1kyYKzGvGYDH1W3GVetJb63gwab7hJWL3Rm3hqY5JRxTKAYpd",
  "key26": "4DSe99XM4unsdYpx2NahXLPaKt4iwDedur6w9a7kEcqqK232m9d82MdD54VRRF4UtptAjuE3qt1G823G7nV49NvS",
  "key27": "63kcCyG81YX2CL69twr2oHEJ2dfDcV7xjSg8hHybHkGhwC1GZk9eC2S5vtan3mS3FCtu3TLWDyQherkXddT6sPMt",
  "key28": "4hVDVAU6sN9kPXjWPA2nNRDc6ivuMwm3DBLM7NvQuc7VMfEWSEYtVf2UXvGMscAxXu3TFv4rwqCbfcRj4dC8q6sh",
  "key29": "4goLBQdzdsaunUJCBcVrRJTw5Rp8LqSbV8sR6GS7dM2qCHcAH4hCMXJSS11pAE6PicRBgEef3XrP1RqbmkSiepj3",
  "key30": "WBkoFpNf4CT5JoT44AwctUWPNB6LGRaJkj2RTGYhZ5cttXWK56AiT9vR6ffQDqhVBnzrFoKdPtbQyyoyJXuUXFo",
  "key31": "3Q5fJxD3rxZwVuBer2GESALSqn6Ddr1VT2nLF1sW15cWmV1s1ps2NJuHBjmoZCk2YbXLVcAf95TnxV8YrCkY9KUJ",
  "key32": "WqAoRSs5R8C4s7F4qq8gVQw553EGHrrc6t2YJ5TyGJwcX1KNFGp4gAuXSSBdd9oB7PWabtX5cqq9CbCvxK4QkcC",
  "key33": "4fWjpnVMARPzwkMH9NgDg8rf3jKxemGKfo1NBJiMsqkoUC21Te9gr4JrYexW1LqzCoHcSwMFr4Le2Ax9HGFcSW8o",
  "key34": "62gV6PekwYt9mJ3ALEbhF2ZMo4Frmm7s4FNBegzndZG3kRNvrXQpjSeHJtgNDuC1iaPFuFtCj8Skv2vbbJctBjzY",
  "key35": "55rXwJoyVTDFe9DPy5gcUhRFLhT5ZKTD6hTphAUQoD113mJEuSJLhXYxChjeCQ12YVb8GRCdUxWuELyZCSf1j1GT",
  "key36": "57yXYG7PVVK8EEw3dd5vNBmSrXaWuVd49zMxXvoJwWzK2KSHGyMEJmffTSWBKYrjGNLxfHnTGx6Spk7afoUYvoD4",
  "key37": "5Bc7tHXqb4Vmvax52L8Djbk1cSBTkhLFHAS1q5kq9CApKtXXu64phcHVSTFG1dPiWiTJZgMNJ1oDLBnokirvn8Tm"
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
