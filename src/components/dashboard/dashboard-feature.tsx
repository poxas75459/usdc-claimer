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
    "36QzaiQ7MoPbwCw9i32d4NVa6Dp4tBTLA2rW1hUGRYQqSWty8bw6uwxcoU6wA372aPiSRmcD8Hq3AoYJw4N6KhnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YjQCSJ9L3W5CpVieTYDE16egc6xj7y3uX3z33aT3C98385MUe5ZBtC1EnwaRftCq4CE2GfVnyMyuAGXhCbp1PGm",
  "key1": "2DwKU8GS5CvyaXLXJrPj8J7eKiEDyx62AoGpp7cu2HGNHVvvSwG9rTbVUhURTr8eU7b7Pgbn2JcteMVfpNRmob9c",
  "key2": "4e9MWGXG58NFhZtKR9zJJm2r177RUiMPNgFoSDEhToc17mv2FxWiCv8yoRESfwnhgBzv8gqjdxFkXB9gUZu2YpFr",
  "key3": "62Jh3jMZoD3P9Xip7B34rh3TfjT56wngZJZoHFwA9emDiq1ywMp2sydWcSqrp4AUq1QPAisMhs42hiDvFNz9S9QE",
  "key4": "5L261y3ZCMtQXaVfJC1EaSQdwFEV5aqJ496PVbMfS2RE8EhEUCJ5X6ExWz8x8i7rGXGUMWBs5C3G89qxinc33zUD",
  "key5": "4oAn9ifuzAijygqbJQmYDw6aS73nLLtdmxe7eyjgRGHrQvR2oPazhbHM4eoZTeJrY3LuDLnNHGRNp9fstn4SXHRB",
  "key6": "3uzmLDEB8HtFFfhHcUJehNdHapc9LEifww1SYaggeiuRs4chYEq8CdebqhPBpE1PG5toJRXPgn7LkH45PHTZRuqE",
  "key7": "5vjUXsX1qEvcC4s8eXBTAPkpFAuGtcjMkJuaqT2qucKHuNisVACJW3tu8zAwxQaKd3fznUXYHo5yPwF3ShbsUvCv",
  "key8": "5bKKL9bHWoDkAMbYGgsJKhPdCK775tZp63VzNBrdzgQcSQF4iW3enfpF5gvQr7iD7dLnobB1nuas3KHqDj8pkrUk",
  "key9": "5TcfafmYsgsKACQ1hJhAEKrK6ub1kamShWZwKZKvYWPCHVShMMoyS85W18LMfJkiGftP2asZr3eEzBFgjJbN2EnK",
  "key10": "G6BpT34tH9Sby14FMEQzFwRxXwAnruu6KPpTz9Wi7Ptb8FBNRZjzyW1i4HxNvqP3bJVc1N7gKy82b6rBnbdx2dy",
  "key11": "3bVNwVBs59P4zKUFoeH9n3SzVVUBUfHNdtoSbqYTaejw3wQfVgA45J2ZNwWRmq1HvLmoJKLSebFtErBmsZAUqNoi",
  "key12": "3Q6DNHPVAoDAX6gi7Z8MYMSNVeaSaqHwoQ6Z6Vr253Kw1DcKLCLhTvCfY5mpXj3CqncyAiGtaoNRNJ9ndVmUjmHc",
  "key13": "3KWVb5GfznF9fKnXcpE5XrH29bqekw12VD7wUiUG5tj2WDwXF5tsVKQVK72ARdFiDnv5aoXk7jpdkfKowWcw8wA9",
  "key14": "t4gSzwD95cLN9r3qACGXY4TknAaYXQkcmBDAnQgodhHJ23YxBPqhoqv24PNtyM9oSZRribYn2j3nJyj74WJ9CqB",
  "key15": "5VgdYsCvba5t4M9q8Jvr87tUzgwDovQVpgLJWTrJGgxBpaHXyLwwteUjAini7zJjzniA5s3hRU5ZzXY7tVU8JWwu",
  "key16": "4jYg1Mupu2BeHMM7An3SDviHWCxNpFDM4mXgmALUhZ2z5D7QDNcyPrLoi9LR6Zjbvp6EjLyf194fj1niTpQM5HAt",
  "key17": "62PuQ6NDT1LwTWoz3yo2rmbzeVcNNtvnBq6bf4ACzQbveKKaEJ2tCVKgCCZBy7WGEuJitD1CUbikYDvnNj7XZkgc",
  "key18": "2rarJWgdc4P41pdWwDdHr5vwZfpLNB1iNoAnBbohSQzgPhKmcmMMitTBF6SixLXp3tQNMk9LdZiaS5P9yB8MbUzq",
  "key19": "31EoHT4X919VYyLBpnqdULZEt8bxCQBs5cPZDozPvdYEYCjHFD2Rdwu4vq3Pj7u9T8HyxUDc3zamdR28H7MQGyu4",
  "key20": "2312vGyFu6FqRtoGDdkNrsfrjzCfMChSebPfkP5LzHGDbVtErf1uiZoTVDadapRYriWVqc4RnxRJHm7U3zB5dCxy",
  "key21": "3ugXL62c8GYNyVCbkT395VvaErTtdhDVN1Ee9N4ZFdaoy3a9PFD2cxviV2SmKy9srrU5iQJeJnhFTfmYgGSdfH35",
  "key22": "349pKBJJoCKDJpwHJBdtvEA78SjAHj1565WRqjqboqJt5KD6Wcmz85vrsCo4Pfdry5QohPCcMNZsTTKL2rtu1DLd",
  "key23": "j2nn8JZPt8qcHi5LP1e2EP26sMB3gFQMfVHgGw5A1pFCB8KtvA2bK8ZTp3XCtEt97cnoqh7rxbvWzw41oGnpzTC",
  "key24": "2Z7Ei5N4T3DcZrJnHxRgqW7eWwaRD7hKxP4JhN5FAbTt4nmVWcE3DygQevbizKNuzxMyybZj7zdyWEQ5nG4BaJkG",
  "key25": "3BqxPZkshbS3xgXNDPBz71MG8M446sxfcMpDwZofvHJ2B2QCGAUyjhHTmxtKQaswxnqyaxttdt7FiEh3W1uXE6P2",
  "key26": "uQnJqqoQSGPE3i2R1ijRGcmJwB9we7CzUfi3vqMvJAxiutsoz2iZhtru5x2twa9vfJYX1m8JEUZAqtrHvfhTmtY",
  "key27": "7mFPJQiGFLvgKQaHUbAWQjajzAuMg3si4j4Xasfs8XgifnMtD28V6BxS6ntPVzP9LPRk4wEQWTmMhK5ty5vCrPD",
  "key28": "ZjbGpoYFZyRCJLPoF45bkGccynp2Nmbg9XiyuPnk1mA9B8swKnESJk9u1fw31fxUC16snKp61AHhTghGPuxP9j2",
  "key29": "2MxAErFBg6kjEi8VcdTMTf79Z24ipioK9gzQEHsbxQ2SHQ5ZiSUe2qH7YGv53thkaK2N1i2zG2recKHbWc4Sjcqd",
  "key30": "5Y5uZSHeJpVi9ZkRPhcjJxrKCBBTg16qmccre6fPTMCPm7qpVvuK273xqb9S6phAePqUA5iYvbnigQNNbCUAq4fA",
  "key31": "u3SGiP8aeuRBd5yTScS6r7QUxExDkzFhbf1NXMUYf7WUNq9s7LYzBR753X8M4DHzYrNc69FzhK4iVJ7J93VhEJP",
  "key32": "4ZLcwCy3Ax39FrLuSgdqTtpEA9tNYviGtMZYVj7ozjQaY3hok2P1WMoKU7AbA4PF7t2icsZpjztvXNSgLWXMdhCW",
  "key33": "2RyKt533fdrpBMgJsYsZs5o2sh7RV37pq8DzA3f7JEw7fx8TF1r9rcCG9WAfSem7Lge2k4m9H9WLGew89rCwYTeT",
  "key34": "2AojWbzE98vz7iXegv2goCn5Cwp14xxfhPFtkXLmg6zJVNWJ6VZoDsLcPNAUnF7tKcYeBExdZBPu54Y1yBQLm2PH",
  "key35": "43HsmZo3PyKtam8f2eJ2quAKutiHtKj1m7YkRgp5n6hczT2h3sZNP1issXCP4xTFxe8ZY8TdxkNxVCynUPgS9gr",
  "key36": "414vZ9QbyrNE5NBX2NU1Y9mrdsGt2qmfn4K1KF9Fi8cVUsG6gUCTVuWP2Kz7ar2PeFHiVuRujVPTNYps9fNkCMGJ"
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
