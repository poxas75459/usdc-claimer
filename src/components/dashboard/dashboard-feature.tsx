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
    "5jnzy8aTr8x4fMUgPtdhv4whW5nFnT1iGsEKq8wRko2HmggoHg5KC1tscxTaJwwXUt1Ep2wSrLHsDjG6tudpTunF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jGN7Esjn94DUQ6Vjxb3cQQuXmwJZ3ifVPP96cAA83rzSZmPLRkBBvE8kAXS9WHB9DDB9uhrEdAbqF6VPnQvShUz",
  "key1": "TTy18ejVB5eQR5tNJoc9at9LTkbEBZ2uuJD6NvcnGaoUaFkG3e9Kaz9Jy8SmFiRFy4ivz8bj6KWYogR7yMpFxjP",
  "key2": "rGXDx87X8tKfZs9MdR3sWTYmZkbbHFYyKqL5gjRquevkaCRSMR9tWWsTXBhbC8xXW9hFAxSJv1rekie39yKewEZ",
  "key3": "3K72zSoVCy75Qy28FeR9tqczeCs85xbhEaJNhxwwRpBa8HnC3oVyLvYy7mb5P89hrbRJfPyirCFZq67ac5nBVDze",
  "key4": "2eyHURp74gUKHBFHDzpxkumt6ZfsQWj6wJPA7zi4h3efJpmxK7LjTsjy3NJXekeAeqGEV1ddkLEW6yc2p5Xpasvs",
  "key5": "5eo54tndUc3USfAndYNafmuxitnrrFFxdoYCM26z2pKkQGx2JtETX1DjkyWZxnAhmt5R97gKEHU9rbxrXsCEAGPB",
  "key6": "3fbgkuc9xJMLMJdwgjUNmnrbaweo1JrHRxhaWpKdohQN2uw5GJpZf6BGULWknM79GtAPaWuev3SMzetco7o1vr8z",
  "key7": "49Q6gV6xMn12zyugQw65Fd7vDgYSprWaMUuF1aQuufegP6LB28SLwY18zBVRrQhcCGP3QL7jmJPPhbfm66DZyogW",
  "key8": "4s912kRGBBKFbYX1LLgBXX9rcrpP6YajESWafQmxSKXCxP5nBNZsabbps3BQwPF9ZQFmv3pVCE8rhB3rrB7NkE2w",
  "key9": "4MmSgVxHaAqvJ9JG1kpNRQyVDRrC1yx7rhCZryegAbAZN2dxAWWYtxdgtDAWGC8gvZGqqNFQ6eM9zjARvzU9ifAu",
  "key10": "512eksTp5nVgiBgvTkzAPRH3fou2sjXFqFgQoXW6BeoSHJXKXUgpCP8Muj7eG9UTsVU9SCrmgdnzEtqwC92gWeZ2",
  "key11": "4WyVCpzcSVk5HDsGcgG3dX3PiUdSVsJjQA78NiNfSYck98cCZ7p5mtfPnoadE9qFE39T7Dz2FZVem8FszRB8opWS",
  "key12": "5XqsMA8495BJ3bq7WgKhZjVtmhKKifUuRZwuksCVcPuEtLBwsQEH2Y8Tno692XC3hXbqdYH5LsjmovSqEELVgVP5",
  "key13": "6RCcULRrFkty9JhQ2d9NnmQujnZAEfnsrYQbzkKz5xPWfMqAN6e4pqhqGDbShYknoqtWZjuxm3LNiTnKLkavfnZ",
  "key14": "4MuMPBEjwYJh9FYisVJHNXFS1SeZv9eruzUHsDExVSbTAEmLHAXs9PiKEL7HRdAwr2Bpy5aKLSacs2R8iRDNjiED",
  "key15": "5mQooVEHfqEZkfMiMSvxPP5Hw9xbaY2XgNpzmxJ8oUDeHtVEH54Hn837LiCu8UVD3jKhsCcq9dCdVs3nGAHVwGda",
  "key16": "5qbnq62KLrsxb7dZ2DzFwEAGcetbC9H7PaPXSqmgg1pENM1SnCzuPikssBSDhQWbHkvmfsHCEGUizwjTi1zthRqW",
  "key17": "5aCUkmLXQW2cyc1NiZ1xxyC9gEtKDBEr5MF2UxgiphBUuBj3o4i8vnruxB6BZy7JtSZZvLXr56MKGMn2RNhGYFo3",
  "key18": "3T49aq5HrFYMKEreueyFZQ3svccoPrbzTHZJxkneWwdewBKNrvYFr275L5BpckxiQNgkJPH7jcK8GPgP1GAjyt12",
  "key19": "2buqgSCihz1jUGkvtU11yKcJryJUJgQo7qhNXb66twemuvgYYTnhwwdRksa2zu38MdpsQWujT5iJycadnLPS29tw",
  "key20": "3VAutQ8SKvqxpr2o1CvLF58XrGpkthNUcrp8irHZQjwqq2gfTvjZpBX3nZeGEKe6LpivAknPQbb1xkknZHEDZkqP",
  "key21": "4MguNA7q5k642ch4eMnPLrkBChPJ5PCnCRMoGuDiScxtStNnteEAAzrCgfh8kc4Ms7ds7MCJYGnyvBkGFqUS23yb",
  "key22": "41EmZYmUajkt399iRJcBaZLdFGYjmyvmkgWAFD61dtiYnNeQAyEs1WQ55eMEAqgpw1uJCSh87XHShm5xhjQ4uT5Y",
  "key23": "2mwsMX97rhTTZ1coc9FrtLKUdZHLbvLYjC56fcD63gXapRrPvX4SpxESAMbX3vxpjFKwAmxam5SK2k2npFKtfxz9",
  "key24": "56WHhJApaAT68tQt1zSPiRoRVdBn811hLef3LWksBLYrKGRzEexNhoZx3rm6BPjzWiCdayKLzpMEm9uZDEvmLTj4",
  "key25": "QGVgmebBRh9CPQRwvqmGuKBewYEeeSU7cdcWef8gngPAJ3vURhrUCNZxv8fR4qVijBqGMgqoq1ai4o9XX1wm7Qh",
  "key26": "44oubGSff7mnJQqSVX8TNoxFNtYYJjjcuCdSuZNtYxacf8wda4gCeCvBefs23hJjyjJXwKBmcan9mYEH17g1o7tk",
  "key27": "2WSpLPpxgY147Efmj1GyWiAHY1VST9GbMcufkSAqffEWFYghkKZUAMPic4KS9Ks4Y6kPhZW34e1UJRpMYWjoykV",
  "key28": "2vHCbyyMv4AbyHzN5uNCMYiEcSFcWR3NhmCQZBTemEAVScfT6GTTvyE7UVHCzDHE2hupxYK7Bd84gDfKYJKY624a",
  "key29": "3EXTT8L6r4EUSkiUpGYFYFTfqVSNz6LZa7o793fhsDVt95JjF5mPyXeLKG9KxquTkkTZFAFdyQk3pn7SnuWVGobx",
  "key30": "54KWUs44FGZwNcA4Av9qZ75Qm32z9XnHvhhrBvQ123Ut7bmoUPnWigkKJ5VyoMTLhtgUaanqHXHuaN7awXECakTk",
  "key31": "46E8qFcJK8URTBbhGYkqALk9oB53fPkMY4gnLq4YtwhQuz4Bn8EWc6ZbsjgCgisRXUAPWUECPiw6KhtDj5KAfrqt",
  "key32": "66pR6eW92CUbdMgiNUWUCpzzJBJvG7qpjvjETw3zu4igPRfMjoLr15E8LvT1qwJARU7vRWWDiquAzd4GKXPFLSDy",
  "key33": "2J8trN1KD61RXmcxqqo8rwbsJq1f6YsZJVuokLwe28jKC7ZVdU7RMTQDsye3Qjf6SjNmYA9bqk899qenGiV9JwbY",
  "key34": "2FMkEyvgVGE2pRgdSsVktPBnGJAcCrVyaapCg4kyZa2FoaYVXLMguPMN13HExkVQ8Wcau8a7mEvrkQiRFGq5Jhf6",
  "key35": "3ZzVuDqat673rVSeKWyoXWREpJNBAug2u3PmUgvUX4p6MP8JPSgddZH2ZKRULYWHZTRMAChCtBNrJXhwZxPn4nvm",
  "key36": "3G11jJEfDo7Sidv2fsHrMNZ4mbW3nrumeUJC2rrbZm4SJgVe9BaKCqAMr4fh2VsaMNmM7qjFaYQeYyp8YZPDRA73",
  "key37": "4REBN3RmH2CdiE7PYEa17aUipUFUNt9pVwgvwCX5mccNEFMDwJNrY4oUjggeo3S6TYx38XtG19KPURx2MZtZVwAq",
  "key38": "4iJQZeumtHhBK2jkLoQdhCh7MyvetsQEYWMCkNaGZpi7wHzv2uipndwFfTsESvAQqMKW86FFehJLct69YW7ECAMc",
  "key39": "3LZMRKLvNqegWWAMvhj4bFX9wWHYbUciBdUNu2icn2cN5s2gknBWbWdk3MeMtRShuXUTJBCda5Cp419MNM7xtF8t",
  "key40": "3Xqf1X2XZXddg3dJDPy84VbbZXyZWCDcg96Spy4ezeLvXWaPAwRkHtwAqzyFj6dzDZ6UmC9LtViPPJTEf2Xatqqz",
  "key41": "2ZJkaZ7o7bQDzspwbQtaS6LHpJZw5VoosXmjq6kqQK9MwwWa6nQExQC8Cfs9J4bZyUdmzfDJRBdHmTuXJBnwbvD1",
  "key42": "3XqC7g59Ug12hB973sMdyU9WQ2XM7EwAC7GHUBxdxThZC5Qj3FDunFSVuf9bnktyqNRWDHoKqfniHu5hqTZP3f6W",
  "key43": "23q5deaC1upDZYhiWqzCLECZ2oKyL34Cry8VgvHP6QuVqAFA8kJ6TU47jkYs698cVTXETcrH62JVwEvK8JdWfZpT"
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
