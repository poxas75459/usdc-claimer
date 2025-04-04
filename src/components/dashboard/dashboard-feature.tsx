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
    "2AQa5WRMHPvUFQF2mCNZmZE55P9QRVDfFnkNdCQ3yBV6d2AV1oQDFqDU6eiibS2ebTamC2io5QiByQ77Jgqx5CeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2au7RD43aG8XQ6xpog6gVn8eGBCodHoFVy5VyjWb3BfVrnFCZXqN79ZCRVYw5HhSMoRmB9PX9UBpjFgETgQc75FQ",
  "key1": "3pVVP91NfoMLSoYNYCM7VbeRyokZvKhhpePU5zN1qPxtPbRy9xLmm9wroFQgQmRGJsH6LtNkiHjQ42NZbKkbudDf",
  "key2": "VYGdbNbeyVSbbvFrZHWwpnMgWFnYwWkzAASG5HMZWaJtnTQWpkHMPFCj87uw9mVRQb9BCGK3CUFBAa7pvyzcMYp",
  "key3": "3HtJUM1HYcekp7ffQtEjuvsxksFvAbuoxQ6ZpRQdNQn8zGShQM1PbCyXq8xXPtU8JRVnfxWMBvxd9iCWgsg4pSwx",
  "key4": "ddNLjBLwFRBBp8XG9NhLi9qke1JUkpDNZwPj4LH68NhcLtHDTKCHsPGqWje6zsc7dsZGu7iZLmDVKfjF35cmt3L",
  "key5": "5CQjvmud3Cidz9R9pyP3xY65hGKzKZnQ6x7QC9DVn5zRYthuG6uJ29XEby3629YNbAYMJvAAKLZY1iNhxCPdHFxS",
  "key6": "NxnNUwuzNx1NMXdbCQFm6eAoMTiJkiFbBf89Wk1CRcaBH3VGJPS253fR6yWFtL8qNt7yWEzz6Y3QQGarKtouDVb",
  "key7": "47AoNNbHHgu9mAGiMqRqdny5JRUu64iKkD6RDh8LEgLjWeidxVdbdSpT9gdatmAZSDbGpJVNLpLemZEhKJhwzaDr",
  "key8": "2pZFnwVjvyJzw1i9YuCQjuf8Gxs5t27LuvzAjsGpET8Mh8Ck2SrypKWCQB3bKe8GmGLjR45wisaP7G5sjprSFjsZ",
  "key9": "29HxXBGESQPMokgKZRCitanXNyUQ9fMwADZMJ2dMLYLNa834WihTxVYq72zJPTPBGwm42JArzz1Cur43gUzAmghG",
  "key10": "55gDYxqKv8axnRX5Rq8Nq8fHsibChCJ7dxitqKi8FxEtuYfFsTv4kF5ejN4hMejx7ks4u9hyuTiBgtnAGoCUdrin",
  "key11": "3RXhqov4wYGysWhoDqH2gPMfUtkNanQV5nt5gFRMHmKVTksWN2JTHoAjNKxDhapBdwsgNED7sMeKaRK26Wuqxup6",
  "key12": "2hN4fKV9VnsPtKq4hYvf6vYZVkCuJVKbLtXzf5CGG9vzu1xcXuGSpGqsuyJyVbnG7BJ9UdQzXLPCzZ4xcFjSjjgc",
  "key13": "4MsP5jRW7TCWkev9p6eHFKFmah4Z8EcUjBecrNnCBD2zHsL3A9pjmJRDcBZTbDGQvc6hs5ExodUK3EZxynbU2QiC",
  "key14": "5r8HL5G4i6rLB6ntX31fE4ruYJSs4VGS4LJKK7kGe9RNwWt72QyWSosL5UHLDwxETwwPZMZqLyf8Zt3nFWgHkijf",
  "key15": "Foq3HoAuwZreF7X8THbRczyF7kq6wn552mj8BeUfSfSRKiopv415LEmXLm5PiYKDEkPKaZKZX1taUdf7x2rkzK4",
  "key16": "z98mWi3MYx3xYywpakTG6R64sL8XF9nnMap5MJR6aLVnhuddDQiVCJJ7KjZmP4a8vjziWgBqUN6s4RNfdrd3y3E",
  "key17": "22ijw9ekTYEqoxVCy2nvL5L3dHG7Pyce8BeoCx5gotSHhUQPQE1nwBvjMWzoEU1K4LDHq66aPVHtYhq5X2g9htiE",
  "key18": "2ULm8so6yuFUU6QLHMnrdMoDS2akNzohgcuZZwTNTaKLMiDFviWb3bah69wzgfM8vStzvyu2Su6Y2gLxqhK48ot4",
  "key19": "5pagLH69UfjYsP5WMymuyxyUbEH4eHKTMCUDnVneYvPLb9UPyTNX3Th9t4CCkUg59NHLq38rdbZqQsqHxa6GzCVk",
  "key20": "3pKzLwZKLDXEvnyKNRHDcyFBpFTCvrErU34pP53aWv7jA1W9kYDiJaH82MzBm2h6iWfMC6RzKxYEHpMyUEotydD9",
  "key21": "4g575Wesvowi5yVQhoWBX1giCFcUy7y6GFfafbqqiAYGFc2YPnivvvgXvTaTaiSSpRySeyciAaQBRkew6vkr18eD",
  "key22": "YBGCUzmvHsip3MZ2moE8whKQwoNUB5yUYbhHSv3v3wJuUWAfA3qXNNWzuWLqgUoE1t7YwdyYwmNucdDsNsgQ45w",
  "key23": "22PxZ4x269WeLTTphoc1zY3SHnsVBBoXqBt2vygMYAVeVnBNGi3tcUPHnuTbPgujrC58V49QGPfDoa8GruBpms6X",
  "key24": "5mnFoYTvQn8zJhXcmHkwf3KmTibFTsK9ny93f9ctK4Fu4JfnGCb8qxDbhh1TEApKo9dApQzHT3DSiVJroENmPRXt",
  "key25": "5hAruM6WwhqYktY1vrcMYK2tvnPTUHEJ7YSgdABbRVefGpuHcN6B8DhYjEyvunk9mbVaoK1PhbEKp9V2i7jsPxqL",
  "key26": "5iF8rcKo4yjRnRt9MvdMmCSoNbLceEU1U7sGfWwgGa78mM32Ar1YC7TJkEK9u7EF25pdzDYu85wvo1mqdQoVGgBG",
  "key27": "seYBbeHLcvPwAdsDscZ7f9KdCRdempKF5EuiAHXExmucFDL3yyNm94nL2C9MyrFG47i8gDsuwx7CuhjcumUEq1h",
  "key28": "3jtwUXXtrqh6dfXbsumyfoRBGuXVy8vuYwZz35tGGzaodnrHzejQPKnmu2g1nPL9LpPWZuwQpg4TZavQJrhUFVex",
  "key29": "43BrL1q5JY7DTJdaaVTnr6Tqn9FXb8KnmaS8nvfX5ufvBh2EjWnEi3e2he8RzAbmbVscTqvcTV3aKrKvwuL25y86",
  "key30": "DZgMURPZWtbYmRnzP1vDKuLVtUtGgTb9iXQ43ffsTXWCEK6PYD5CjEnPKjaFWMqq4T79aepZ4AhBvWKffmsWKVU",
  "key31": "5JoJB7CXQxVukpFBbzEG5ayWni84D8zRJiof4ULdrmY5p2W5okuJc72fuXnUMNNKpAHoweq2QgYmtY3FKK2Tfb94",
  "key32": "UPaNxZekgwAfhbT4MJwVLjZAzwGxoWTPyfRJCtZUysdtjtmPdcBziJkScobUTRVR7NwDxZZXNG5xoHKLSAkWYdf",
  "key33": "Xft6fX4LwiTARxKZMm9uKp73jLT9gFav6SW4mMi4oVdCpGr1nDdB8puAm9S3m54rHZuRmvUCgrXQLHvwetueNTF",
  "key34": "5t35FkDepLwe4qDFBREL9mivhg7D412j6kYtT46F7mFD6weVZwuyHHJSy7msgKQUSXhCrv8bmj51QHCvRjqg7BJR",
  "key35": "2hWx5deooqfCKZgotcKSh4mhxT4DGa5FJo5qa11Hj5g6g8JyWEz2LHHsppUqguE1j8auTSws4AvuvPAZKV428UtM",
  "key36": "51KWNFiNr8yP3FgY9mGAcHfjCJEjcFtSC1JPhAbhXWnqTrxc9suKV7p65o517GevTcQG4ZfexAV23xvKkYdsDm55",
  "key37": "2MCcotzDVE2eBpjQmE3TGvuNdxn1iCqyAxDRrSxXVa2AorCEJY6Z3nPK4aJTiS5n8zcboS9wTE8tbhR25YPERTvA",
  "key38": "1trSPsWp2dxW74gjDv6JDiaPcnepj5vijBy7Ec2RasEwc6aWoZMTE4REGuV53G8dAGqCKrchiXmw7g4MKWbEa1c",
  "key39": "5tSWvY7kPP9mNHm65MUJqbJE9TqDFi94HfRLLy52qnbaindfY934rjjT5VqhJV7V7RU9CAtyyHoYmXCUrT5VbhNk",
  "key40": "28Q18SJrwgi5iysvx61anSx3uXHqbes9LHmEcbxYRSAEWj9jcr7pLH6sPpFFywYdSh6kXjAWcssyABR9G6D5qMoN",
  "key41": "489qyssvQUqwvPgiaKAqzNWHi6GP6q57eUdSHy9aWrpzqJVAsxwFBnhBx8bvrMmkzUfXUjZEiLAC6AENa9ZVTUh5",
  "key42": "tZnepFHNAStbMHXq1iJJYDmrZbiR9JDhQn98gm7tKjE9fRZnqM2QMQR1BbxvskE3xYpANtTPyTMZAKEGu1xVSfQ",
  "key43": "gmDJKA1g2dbaooVPnX4UZmdHoqkeeTqAUnWwVHoRQ7FhbSv5AfNMvLx9EmCUPNvhrfHSzLLJsEE9mpgowcwe2XX",
  "key44": "3MCDsWGQNdeR16516whANRKDkmSrNaXguddEWKLHRT9JeEDyZcZL2Sw5MdWs34JfPPY6qj93oXaTrHu6hZt4DSJM",
  "key45": "39NtAwsQPuosiK3VYggu2YNjEcGqbtpJ81tNsisjBqLPpzvPGvogHoTt9mAW6NpntY4Yw6frFA9Tr6kUZwycY4iE"
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
