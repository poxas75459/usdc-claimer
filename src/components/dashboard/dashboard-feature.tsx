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
    "5x1ZgBXpFD6Zdbkb3w2nCB6uAbkEkVW9X3QkzX2dtyuwWN3113FabYvbTtVpWxkJiMjGdTdyMGjV3MFhYB1cYV7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPvU16fkDdgjcLFbvAhJq4AbX6PisstH8g4XDCA6iXapvykruBW5tybs3YMimu2yJepyGR6NtjA1weyQeYfvM6W",
  "key1": "2xEnxECK5pS6jWCCHZ4QPDZdqKbYAbtsfsKZGHENLbawKZy2p981Ce9RUj8RkR67JuQuXjYRzL5ZJMwqA8YD2fz1",
  "key2": "yF1d5rRxpLfhRbYxSh8DswTkhCRYS1HSWtRpdrSYrh9GRnr1JEuEMY6cn1D5HrsMr7PdfuuTdcYrByVzwCYGztN",
  "key3": "2e2VYBYioMjwXGwJTnNfsAX3SnrJ2wGXV8yz7zbQTsVxNMpGNZS8iNXZXXddbh5LHNN7qHaCTAFHGn4zdpQcYuL1",
  "key4": "5C6HTxEEeTNhWg1GppP6bBFoZQ6mbGtwE9gzi76v54tzKoeoLYjYQ3mVqaGPL2YpcHTNSWUfe55Vu9opYe9ypYV4",
  "key5": "49w38ijbvjhmhuXhRBT8qfY9HMun744ukArJiK66oJGe1LwvJ4FShXpY19aULf7x5NUiccLWuvqfrRHF71ip2p8S",
  "key6": "2MphRY44YafvuU39LwMwqkq7kh3xfh1U2ps569xWUdVPAGBhDyQGpGDGq8uWPz9sHmgsn19s6ybP7pue9ptfo1Xp",
  "key7": "32dNPvP4omnZzKJowGAjFBMAbZoPZSsjBU1Kkjoic6T6KKRy81eBzR6hfMUGY3aiwapm7t198TvLc8w8PyF7gnt2",
  "key8": "3inumowjFdJGWe1RBE4PH7dVFiPwk7goc7vSqdZNXvyFPZXzoBTX6rw7mm7ApxzKLyr8U2Eam5Kbkezep3WTEL4k",
  "key9": "3bcGWrnSPRsZiaootnWjPGMANwbb1zHUJBKEtQs3NFAfaaibKbzkQi5dTqXHSd3zharYazMBv5PUSjyw955Cn15W",
  "key10": "54yNjSkesb5SLw3nhWaq6qhkBnht4RFzhdXSW2jVeiQpAeGjZMLihAtJxEeGNvsn6BQm262uanQysCr2RuYMLdiQ",
  "key11": "53ufcZwEKayxesQdiDc7KcDVnDP7skKaHjk7EWrktNSkHokLGiptxncUSHQMbVBxXV9KcTXYNzgFpPFsuTRH7BmC",
  "key12": "4ZAYGRDsjuL75emz9dSMhY6yDDuWAMm2sgUytW9uYH3HpfQ7mPJbRSDYZjUNW7xmQeZZ7isPiN33WYCBYtjGWxSG",
  "key13": "27SZ78TMo1etYT6T74XKddFnCiQDc4SJoxusz9ow9JjK4jJ6KfhmExYUS8duQGj8sN3xQXySRBj1ZFGBx2P6Bo11",
  "key14": "3cMaUPcHn5WiN5xXneAoK8ZiYypMTwvZuvQBJGArWgRGd8suZzWdGd3rBQesNyMHDV2FucsNuqjGxkcGCumsJ8Mj",
  "key15": "2Dsdu3Us4nqPm4MEFiurKGBJs5Fo2jyaThXFqrYZBpxknqk43oqfzZDZvG5BFkzLVKq6dubop2RAYtRVJvNuBvr8",
  "key16": "NhCcJ2g5Qft4M4J11oiF4ZBnF7g3aUKFKv7MJ543QEedoAZAvH9XVkw4HrT6iqhKuLwz9anK8ngrSBSLDVKqkg6",
  "key17": "3Z4z1tF1G4XaEdDNQorRnpqvthcG42E8bZAcPi8XBq1Xr2iDunwVwLcnmgyocmk5HGfFPtSLDR1MKuGi61FGdPpk",
  "key18": "3VivMRj7Xr4EEWtghJugzEGVnuC7yVo1GRMiRKpuiVBHfj4veBNJsoSNW9FNL1pUGyHcLoA6ANc8kQEQSu539ZeT",
  "key19": "35BeN8CXuPushKSWKcxk8eWLZmZwMqru9JUopbVP3pwMzjyXaqdpQWxjoFMM35y4ZTuZSJa2tu4dwkQQy8JuWRPM",
  "key20": "4FtLv1RV9Ea94CRzE5XreaQqu8m77AsFBKSWC5qm7qZ2sFaE6ujjyXaGD3mZcvTMNSyjUNXrnmKquCsDG736PHfC",
  "key21": "2p98aGfXEDT4XX6Pv97wb7djTx9tx1Wq4T1soQA4tUAY4DsUkfsDLEDFyneKRAkZ3FasRYkQ4gzaHCRTBzwX5NFq",
  "key22": "kFe9qwChE12wUGxowDrhuzbxhEBjgsMS7nUtEqSjp6F84ZBf8kXePm1J1hsiJYGijCEvQVNUESgKgvACYRvsbTQ",
  "key23": "39MCJ3KkRiqsPqsebDTm6bxcb2ua5Rbj61hXh8QVokWoTDuKcD9bxwq2NoZUy21DKKrW2aWPkr2arufSRZStkYYZ",
  "key24": "2LRw29wdePjm1JhjYxReMnjGgLoirKo72a7sSgyxEGonP5f73GhZYkrtW1YsnYyKSGWZ3JS55YFx69yYVqzvxFDC",
  "key25": "5596wCgB6zfApo5NjWWqbMCaaq5GN3rkRAaPWGZf42WFLBN8Mo6UEpfovDTFSVUdhpd2YX1iTWkystvDAbmKimWT",
  "key26": "4Vt4fi5vTD6LKAQxXGa2bUMGbVVVA7oCqaPJXHcJQNH2kiLXXU4r6qhF3Fr8GSrX2iV9ie6iV43hf6P6DDvfxWDn",
  "key27": "4uawwNHbqTZgdQYabyAmArDhyAjrMuLjx3pKAY9awES2cfv2oh5tka72zQCYzFzd43PaWcdNniL6Qqtsd7B1NLaw",
  "key28": "LPZdR5ydfJVa8wjybEd9ZWEfSvRRcyHYxK2As8ii9mfFgNFoNk6g6Jj6XvuYqNGYtE9s6RRA1HpmvJJNiRb18df",
  "key29": "4fmXwFmNcuARAH7HyHizfXe2jbSPuUFqtxXAk5N62FzUT2XBLrR8BCXo4BiFEx27tpU5h1ksz2FjQRHk44dSPvcL",
  "key30": "47si1wHR1GfYGSnKDu7me1RcZvxjYbAS3kqn9viR1PaWZQNdq8UBjX8Wj8yEEJccSrpgTDz5Yc6yNo3LebkT6Ls1",
  "key31": "2hgx119cNog9Rj7N8Sd6sB9fiEysNatcJZJ7Wudn2vYAGAHJ12ahvrDkGEjWw4yk86AXYyQqGfFeRLUonCsTrDz6",
  "key32": "2PhNAEfZBXAD17AKHLUgVbMxzjapq61k99Cz6S78sY36KDo2t69bK9hncwanrPaRC3ojhuhRkEPncPQFR9bUktHe",
  "key33": "3ZULNCMv64QbDfCESYRGpfz8uS5xHE6fYZtyVc3acjsQRqJAnATCSwSJiSYfGR4vbjdnDCm9Yr25KmeZbCn6FDRF",
  "key34": "4uD46C129jp1M3cc4feUzopFBL46hvi6kdMDsUtGtDvXnuKgpGyC1ADggtaVh1iThvc9v5861E5SkbnMUZc5hn9M",
  "key35": "2aLmRmWLkjx9c1oUB4LbaKt31XFd9UrdV3eRg7R4z3rq78wjaZBagWbwBBDG65MMbwEbuTdHZd6duZGUTYzkVBUK",
  "key36": "3yUnYHwcxSAyaVJUgkiijCE2i7pnkr4YNV6Hav3fGqC9gLAbaSpovCwUy5u4E4rXbNWit3kghomNW2jmvjY1Sdap",
  "key37": "3trLzQquARBXo4Skw8LpryzpaECLWqg9gCjf9p46roPdqWTqLdfXa3WWSECG9BfozaxMDp8vfJcxS2ECJLHGCPS8",
  "key38": "QR4cdB4xRGyzqPQCk6rWJNwFVzMB5ydmw4aDtDAcSwMXQpfxF2HRXorm7tyAV8XVz9y5W3RjJx5gZrFk8FXtxt1",
  "key39": "ZLEYoNKRMWjE6aPW3HQ8cCJ2dRDb3JTb5twdnANbeBtay92BXepSCygjeu7k1tyNpqBwtQk7CScSMZEnjfMquh2",
  "key40": "42m6x1192Th2NqrLALQUBk4mUw5SuMAGq5reDAeU89PBHpmYG8MQEJhkiHg3zC6JTG4mTXsZRKr7AjbMyqx8rUxS",
  "key41": "3osKBbCfTzhr7vQQ2DU5r7Y5X2KJjfCQSMPQ96YEbLrsuusZ7dZpCSGm7hK5XFn1S296foXggXXC1v3cciRj21ZG",
  "key42": "sfPAKrvo3CRXf8ABuH6LKBsDyPBuzYbsyiLqxaLoJJihkqsQa3h2YjTKre5yTxg1sdGho4qwnJPjQFLEo9U2ysz",
  "key43": "DrZcqTbrTYhNtHPKzqwsySPUTXVBsYtRRXPfYjGMk4PpxDDRVZamXpynYrVQGT5WqpboCGLN6d6dYSFPbCqa3LH",
  "key44": "23PRxTejrrYV9naCxmM3VVRamUHLy67Q6uWiVKFc8aL8qF9X4xqZANXc8TCyXDHsEXK74aRRayJ2FRAgWb5PpW9o",
  "key45": "3pHDNNBCo7sPWU9fG7L93Y1iGFZuUzmxi42K3eufRkMarFfKXnrnw49TLxrrxeQpd4EPWNQCimMbtNWe6gyg63Va",
  "key46": "4Z5vnx9fKBz5ammwWTvDA8fzWYMnKBr2HvGpSju88tKbEvBs4iMMs5rzdYrb1Psvha2vdns4cdxaSRU7StFAu4A6",
  "key47": "cJemZqnsEcofR7gKnrdcF7nr5CiRHCRKxSdKCymrzFjcKtSdyQ6Nk1nt2UR8vHkby2wcd4MxUfe1DoaRQ1AsKW5",
  "key48": "2oW4XwH4GDNCRKUZkKRxEzaqo6DXNPZUwo3vpWuB3zo9JdjyUuGtTfFC7w3r9NymWcBs6deTkKkyKAhVpGcEJo5z"
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
