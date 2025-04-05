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
    "3kP5dP6ufSoyPyCpuTTX9q8aD4EQKNfJnkhaWXeFkb86N5TE3E9tyW6MvL3wheWucbUKAFubh7eVyKVypSbSFTAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64EzWMbDpqw8NsEZgQVKvdSSXJsSwdAyouAsKda72yKXhYgXUigQXP25Rvx2xEp9VxBVG8CwcfZGfeftpHCQphxb",
  "key1": "2z4Z3w96YaiMvahfRJAzzSr5yd3hUv5pdwGNLiQHb4hLLgmSB49UzEWxRQwHH7QPsmTjLaBd2ypnd6jCWj7Q84U8",
  "key2": "5tByMB7baMoZU4rqi2xEiLHBntVfTcEKn2mdtmFRKEYYm9mreRvf5iDpVbLxgxoccfD6wxzgADTbiu2NrtePh4Rd",
  "key3": "4JTh78sYhM5rqJMhJMW9owF9zwL5HEnto2uQSv6ENtbG1eebXqTLM1bV5pKxFsNo9N8wmZnPySBZX9HbRXiX8rdj",
  "key4": "8NnCL2FJ6fMGHR47c58CG2N2Fz7o3MNdDnwCcCZH1WAQ5YBrmZxDR8JQCvxNfjyY4g4H8RkQ6JBTx9z421K6vCL",
  "key5": "58djV52LDGUM82AQE84RA3z9Wam5oQcfhMGZac3ysrcRCeemdAfusSvFnpWj5wRW9SqLRjVQzzJ9sd4zMqtu4XFo",
  "key6": "4EevGDMifYjzgU5Esv7jgg6HUcKh3RsN2ov29HzxRmgRA3auTukLEgQdh1rEAvmRk2jWGFnVreFxZLNC23P249ya",
  "key7": "28cw7HudjCe2EbKPNuyLRCv4Q5GXkoYVWJKeYpXFYbBAkyjYxBpBi1v9Ab41EXF4hrArC4svuCrGkp3Nj2bHp73X",
  "key8": "5BYfz8ZoNUELZ16GdygyQb7epTu5XTesM2LbqyUfp75XJA14sNn5eu6H8Nx1sy7cjR54Eeded1VXB4WvHst3EEPr",
  "key9": "5DmmVg4AubwpQKBc7h4Rk4C3TDqs432kFQB8LQyVgXUPTf3r2vN6h3GeGA3yCt3G5KBtA4pozUwm7hKy8WdFWDFt",
  "key10": "5Q8aD3XiCFQfcAX7AtmX9wdH1V3ZQeUF3ESgLPXajT4ZVw2QgjDcAq5hHfMJjJswVxsDNaB1MBDAJAM9Su2PBe4v",
  "key11": "4CHuf46j5vQnxEtBXrh9wG2aqxesZDKWWyRNTcwMFDAzkiRHQzXQeVxquZnhVLvFpuMNJkVWBt3PciDB2X2xLot4",
  "key12": "2bf692SKTd1JuUgHKQuqwpF6GQkGJGzaqGSrkU9puxxbSvtMUyC6iXTXNQXrA6j7wrAJ8gKuG4uBfZrXMgQoNchh",
  "key13": "2NoTZeYkdj1tq49mC5F5eWrYyDy1PcmTxaVB88vNMdJa8kZzEno7snViFAqJbcQptvXQGzWQWyTuvjt8qUPZvp49",
  "key14": "NX5QSYsC8t7AVsHnSKqMLrcf8iRzq3PjeQoAREii8ozPkniFAuowvbDKemzhYr1KQUC3HFVac2GAiBbzAnunfpK",
  "key15": "2e46jsYvKX9qxBSkdXamDmnwvHCiy3TFaAb7JLb8WVAAtR1U5oWm8Y7hKZv4fGA8GcPhBg4nvqYsqADXh2tV3ErE",
  "key16": "JfpMdc1zdUPicsXVR3Kq64aWBuoM7RQzno3kadv9NBmyPUhccTYKQyBQmGb1Umt5mz7Eh2ybHCszCVMyjwd8TR3",
  "key17": "2br2zHYaMp2kMohGE291RcB35b2BfiVqtbpmtVmJDK9zjXb7CYu8aH8uqSgP8MSwhf6ErW2xRk6TuHV6akm35CSV",
  "key18": "f2Sjne6enNiBc65RnUVJBh96mbugLaAH4VkPpgfcbFdhPUhcnzy9G5dNpd8HMcVX6F3TrrNR527HBLksoX8G2qy",
  "key19": "54j5nHgkT75Uxeu3pGKLuRPc9hFqfWaRZdRnfLomNr58mgwy2FuZK557k4kBhxHaA5BMu4hkmTwt5MJsDytaQd6K",
  "key20": "bRnmott59iNUz6JgTV3EnETKQdYtnw3Dr9weGQpA4wgEDpNFp3XzzfM3WSiLdJ3WfnpN2jjb8iYCs6DPHD5wqpW",
  "key21": "2gs4EJEGoJiiRJ7EsRujWjXd6bVNSQsQ9J5jLK52kd2aLA3MJgNP84MtW2jCVQVRfNiK7t26ruswW7cTTw1YCisz",
  "key22": "5owvuRPMYN9XoEZF5WQEPhiqnYPLvkgQZzrhfca3hXCxLByrMK7izTGvbo5rsVH4Vaa4wQPnc7LCpbB5J2n6PuTL",
  "key23": "3PwfmHmstuWXgMndYoQiZBBTp9WmJVsKnkvFbwtdTYZ6Ahmiedrc7TBjjq3k5e7L4wArgMZPLV6Bw1ogb2N6MWU3",
  "key24": "3hTQeXpXojkgQfFst9YTi6EZi4o5quoAKxzQPWSDGiDg3AR91wUZUTSapBUsZt7ytWN4YRmbpdqxtCgZPBFXqFs2",
  "key25": "PZoiSb2nuMWPTNnYYsyQpCVHTngcj9C5MHwBz595MGjNunogorYKWsiRpj6DFt71vfJDXCnc5Ebhki5hfKHSyyb",
  "key26": "442SiqhCzGEZJhHw9bPu6jRo64fAGdTYyYBssSYWSkZbYAfCjvYW9uMEfN5tKS3ttWRUXGn3p6VMC2Es6d27tJp5",
  "key27": "2geax1EFTPYs2xiip67H2csy1RK97kM2REPk1hmqoYFRdmBWzv7kQUTAR45321g6B9oKECgTfGxUCBGrMQcLNVZu",
  "key28": "k3gkk1NSnPDdaic6p542nNjwRPGjT5XhsH3nMDC297rTr7bc8fukrjmcmtfAFbCAKLKVhqxobmPyzL7aaQng9rL",
  "key29": "5x3WXoGHr1ZwSWuqsihcqGUKzGHMc3gch9kFeR6Aaf69Htg2fXJNxEngvSvDYNtSRLDUruCk4WjwP6rDyMQbuexh",
  "key30": "2W4FFf2XrBC58NgheT2NHD3tsfghNuxekcUz3Q7WVLsHqYEuepAxXUksgKoojLhhBPrpJ5yBpe9hxWux5tcrjHvo",
  "key31": "4mbQ6evNC8gmmHaoYpNDhpu3VbYN5uM5WYi32KRJ6gLU2Ni1swnz2L9XjbD8FZU9qi7gcuJ14p2cKaiXS5ukrkRj",
  "key32": "3oFZWRVNe9JR7Z9maNCWy1eoCV1tJu2AY35CD9rfmuDoUsNzW94PtqkDwQYhrW4f3GJGLbXNpH4rHtue5rXLQpgQ",
  "key33": "4ySQYREFWYdAWZ2cjuLu1ZmeikUNW8uZio5vWb6R739p6yqBBgoFxu8YhtiNqfPqk7aKgaHJKf1jNsutdhvGeSsM",
  "key34": "5tTCRV1icqAnk2X21Au79auXUQBx33jMt9d6hRPLXYX2K9SBsKc8MafAbXZrd2JT6U62gBKVst7C13AKkKULSFpA",
  "key35": "2FsiPbWczQjASqVrysi15kYubWvxtGjXmo8ERJbwLhDMP7nN8yibmJnmM2yG7DBbeg4Vf9FKYMfnHiBW8u5fw8uo",
  "key36": "5wR746crYnUwKimSLtA2eoWMK7B2yt3yhWDnnatrJoaK3CVeG7XvvL6ebiaUj2h7mcesNBCCgwHNBxPrvsVxqVcp"
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
