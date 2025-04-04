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
    "2mhsi6ou4VEJw1b4mzgSWJmGYg3AfU1Zam87qR1xfjnhoEYqAP96oZ5bSP8jaC3n7CXd9YzcgEB3iDSS7AE5M5K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xVVAHycd6TWtJHQcM64JakVFT7cY53kdo8KoUofSDryATAYwx45Yf9UpKKjs5iKuWJUX1RLGRYHkA5MsxBn7s7N",
  "key1": "62vA3ZuSuryJo1oXNt8NNkcSu8TDm7HkMCtxxckZr8uRzxjp77ByqGGSqLysCajM72FcbG81JRxLBLNNXjUv6gCw",
  "key2": "5aDUsJ9LrfrbwPh4jJbbmtTkcJmpnWS38N8YN4FitHuZ6f9BA8e9R8DqSKSQToZfU5mCEZEfxdDzogapWGS5Lpb4",
  "key3": "4xVXp6kdacr1aZtmLtVeNwj7sKzPTPaKyh8QEhpqQpP7WHZ5jYDgEHFgD846XrR44WZ2RTnZDq56V9NrgU5DUvHR",
  "key4": "Npz98EFYY6usjPSaPE3iWwMRZZ6M59PsNyTQds8Tz4CZ6JK5UHwkUWXrLYnQ8TRkv5rNyGuMBtZAKU2Ub9xccTz",
  "key5": "3WNFHLqMvTuaTRBJ6XemX5oZ8oGB9A9ZYmajFNRPgTCGcqKiPYEKikaD2h9B3yTbF7Txm5jKhacCHE2mXwv93eL7",
  "key6": "JrhmKmxLBygWfwUBN6Kmhi4hXARRc6ddfF4Jr8BKMFt1uVkAhzAikZAxwPDh1BVCfDK65PptxjS3jTySNJMrmbs",
  "key7": "4sZ5TDN71McXfBprTUUaWRpuoB9nMRUwAbMYDbF9PGAXFkwSpGVH2PbPhR3CwN7kUUAQV4YVAtz7XTRccaLU2CXe",
  "key8": "55H3vdYHrrsYLJyFYKKnuTvKC4YWMrRueg9eEHoNFYij1nXVvEyBx54XySkGATpSKZSN41fmREgftr3rXrMRPipi",
  "key9": "4SSgEfpctHB3VtPWLdw7tcdFRgNicyF3wztRfFREBPFKX5U8cmuGCMFCSMYx8TJ4cFbpBpAwNPmNZGrJGKFam1E2",
  "key10": "2QD5aHonM8JRBQiqa5mZPhX15ez5EUNzMfP1JMhrZVq9NVcq2383Hm8q5RuHPZbgrWxFjGNLeSJ4odfAUDSd76z8",
  "key11": "5chkQ6vjpKaBn8hneoiK51ZP6t89cFoVzsACxf8twBYqKSFf8F7wKC7Pnbv68vmXTobi4oHBeftYnabXsKpCg8FD",
  "key12": "dTcJ5zSwfnMCPXJys7bph8wj6Vshzq1EpiNC3jftEq1fbiWacfbY85P54bwk3kY6mXAttLdn3h6EGyVNBWoZv3S",
  "key13": "3zyHbKENQTqdCwinaXGjT8HyDuwxn4HBxQViHzxrAbaW6QfXY3xPCLL92h65tNz9xYeDP4ydCUZFoGxd6hPkhUxj",
  "key14": "5iYVteMwqnXyWYHdzXVR86oMy5Rc8Qw9TZPDWXFHHba1i4Wf237LX66j6chG8HYnKRQx4DVHTUQWs8hmwgDNWdMY",
  "key15": "2XFHjy2qifQx7A1kf2ZmbBnRNUNbMNR3kT66Nix5z5e6WCR55rG1nNRbxNUGnJiZJAncv5gvhVXsjuVgePeM5D3q",
  "key16": "3YMKxd65d4CMjo5PEQ3YAhSNwqHveqyZG8cV3zqxL58J3gnhxqk7hw2wg9qfMKLLS5uoRsrRtRDyjTvcW8TtwmMZ",
  "key17": "5TJWcca3bhrVdZFQLq2AVMxkHc5XgMbfGDXSBryz8dLGpXbRFXCDBrqHmYAnEsYUxESbHUpWoVKB39KjUXhp2zid",
  "key18": "7Azo6RpYuiWt69o9xnNpNF3ZPyRieUQrMsWXC6g83ESgo2pUjuJjpmmevqES5JVTxzEpfd1cbAsqahyAZS5tzgD",
  "key19": "3Vas3BR1XQgfE9Q342Sf2peqkTh5Q1rns7LEuJh5BBTURytM2vxXAnYZykzJkcgaMRRjZV3ic4pLSXweJbeoDgYF",
  "key20": "4k9ESUEbEN6E4yVmH7wmzgnWyYYi8GgZPuUQpTTA8pqV6aTHNzr76VqZPzurDtGr6n4pvNb4cEgqw47wjbLzQdWk",
  "key21": "5XXEzbDAbgCcsaj3EptYNy38HZ5jpGXHnNFZyh8aaBziUX2nrRd6Cgcav431j2rCmpjXhqPpCuRG5x8oUyNbqRsg",
  "key22": "FoyJ3sUa7bkhH9q3MJJJg69ZdP6XkQFacCY1LxLjzE6ZUCY6m9pBz6tD764Ja8eB6iAUJuAoXZdizzMip2H9HhR",
  "key23": "5m6EtPp2MFY5ZPoBHXJw3Zfvyifid7Eg72XBVfZbBsMAMSaoMtdUuTZZj7BQC6xCKWmUpcmTjRyNDTpQaxJpQtf2",
  "key24": "4c7NfhjD75a24WXJTeyMoawZK2vnmcdZAQQ8TgCCXYKaffhAnvEHWCq897EfNLw3AKqpixDoFvE6Wn66mKgDbG7J",
  "key25": "5x1HjtYcY7cuDXpkLvDExpP3ikmuGyWYT7ioMTSu3JyiTVbyy4CCH5Z8bx8owAkNxDC6W2Gn5ebUZXNAPJtySWoW",
  "key26": "3ZnXKTrmNKBCMCvPWNTQoPtY5kitUMNmRy1v2Exh6Tbn9CEueh9Xp2tHkfdh1kAThEdqfxBjeq2nHPJsVocj2vY3",
  "key27": "5uk4BDNxBLUwvHy769MqFbsWT8mLTWcvqBs7cj2G6cnoMkL5vbS9i4Jf8iqKeSHyRrW7TEjCD2jBgkj5M1LHxmoS",
  "key28": "2fK45f3B3f4Chz3LREmAC2dhhDALuqCp5dgrT2ybpkFC2HgqgthHdrvi4qW6GxNHYcWnVucutMy3Ew3qbPhVN7MU",
  "key29": "5HzVMn932QW8FFqtaEBvN3RvgA62wzVVHMAHGsoiWqjqPjZPy88JtYPAXfn3oM2wNzsB18okyFaNAwj5s6DwF7jD",
  "key30": "4sGgSgM815oQRrZUtDFZe6g7r9HFA2xKdTfRYv9yebwux139MMfAWNkQmPRvXgiF7UTMuCZPf5efNTPqtaWyr9H6",
  "key31": "hAckuNrcyRJe8DMn9hLvb25GzmgkuChzxybWwZRJTuyRskH3Xsjp9gPzks6Nm4AJy6EtHFtn54HYMXTp8DVJUrR",
  "key32": "2x1FNbnQEQgW5fvQ6WupwYmUL55jNwDHsek11rbn6uzQe3AH777Pci8musdwGr7WSUo1mJN12sxkKJu1WCNkk8kx",
  "key33": "2A9iBLPwupwBwzhKBX6o94zSdi6NV3eeZsFVX6YEFHvxump1NFWiJFY8jTCGd6Z11ZwJLkvL3marCypn4Wj9qTvp",
  "key34": "3qeX3Sw2Vh7d1ERZScHbBfQrDH1vurtDnyZdU5VrPhsmGXmULa2JPn63uzJK11Unbzbeqbt62kU6RhjCFtbqKUq8"
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
