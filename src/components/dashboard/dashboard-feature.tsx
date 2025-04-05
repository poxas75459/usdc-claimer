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
    "59uZ3gXZSaFdbwgoraXmh4dS1iX1ubzyfBV9s13JiFWM9qGut8h7exzze78HSQk6WVAS9jjNjT2o185UUzQ58cpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fjo7fK6Xt1DeE24j8NhYAscZ5h2nguz8XMbZa6bTvTKkJL8cSCYJ9UF5hrHs7E9LcBeP7ou1HGZvWBLu1FEDkNF",
  "key1": "4Ksciarsxyqmt3JHmH9pumhRpExBiYZJv66P8mxJuBBqAXPm9qqr1qY3zH3PUFCerXjqK8R2PcVCLDPxJ8RbxLLJ",
  "key2": "5wXwhZRvNL2fBqmVBPnTyTFiAxjWFmgRs4iDFy1DFodGmeb37Q6S9rhvcKR9CiGyrv9uW9jcRMSs8hrxdzbgHbB2",
  "key3": "29UUvWPj1XxWwSv6FWCLUvPT28dBuzRzZ9UyYX9JAPt12ChAmhSfQfQG2PkP1h7cmr24HpptaL7jMXhMcqR6sFob",
  "key4": "5fey6kAYmoZmHm2JQX3WeEzrvs6jjqKYbkFRYGf3ipAVudZbYC5zWmDrbbmYRFSBk6mUhnxrrRv344ocspgGoisy",
  "key5": "324E1391puPN6bScgWAsA7mr4nLA2uPAsGcVQYWgUA6Hf59XpbfwmUtCsv7ptA5EhJy6vsa2kmwVAGZRwbzBMSg3",
  "key6": "2pvhmHGvbsuaYnLssUpucKSxkHmnRsoEXtk5nqGEwQ7teXXd21U4AAbqmUwQhtm8HxTatX23qePLBiQhFsAxaGrF",
  "key7": "2emHtfuQg4ucLgaJthtoEeeDLUJkYLRgvHPDJtH98GLqCqLYzM1xVAVgHxXRtqKeRXaUMHSxQfLPXR9NpNLoQ2we",
  "key8": "9BJ4cjJECxbtTa1fWhqe3mnoXcc3mtVvUGLLngnEDjLmiRztQbCUodyFi8sAPzTfSwxCYXRowZ4qzANfccGnSoa",
  "key9": "5aQVuUJgX97B3ozBEH3d7m3rTkQCBjwiCktkGzpQEBzGWxEpM1axHZKrxga4bEx69rCG5aGzoeq167VUS8TVsacg",
  "key10": "5ZkiwjduwJuFbG2eYBv6Koc7wZh1Fa9VkfUhhLJB2SwHj1YieCuRquCdxWMww4SwGtqZkH3kvPXWNnsBJHY1WwJy",
  "key11": "MCzCvHxnbPGm7f63ZL1CC126fVD2d43qFGNnMjpss1QXCxa8ZH9ezLjsuAGss2rhJ7PPCrSsjrC2zEcgi2pMLzM",
  "key12": "55Hr1pySw1o7Db7gGcCNWH7raengR8hwUZNr7kkE7EFcn6LnrQ42gS65HmRh7KSrKM7iAjdNiNS7Va2Xzck9TPbH",
  "key13": "4kUE1JKv4tmkTPHeNTA794yaEonqwnrYGfUgkvg4GNqS8mvVj751nAVd2XYyqo6vAgj5daTptcZmao1M1iVYRHU9",
  "key14": "1sypvmphT9wN63pkoTnhbi1bcREJJaWd9vWByxp5jQGyh64Hubei4gfB2QEMceEPaRDCJd2ng5rsiMmu9PSdzA4",
  "key15": "348wmAgkcKm2rbAmQSaAhwaLX2ntmkhWnBoxKV9mWWgdzekeWZkVk2VKTusvzQbVwFgtbbhguNRcKzpXkurXdDuA",
  "key16": "2wShmT7WVpJYH4vZmKUfAfWhxTPZAhEm2QrKW8ajJ31EXP2PUwZT7kdkJ3a78iHbmLhxpTrE5ifgCVJ1HiqygUpD",
  "key17": "5zXdetaoSyy37qxCJhw4yc8bvaFrxkyZxSZaJb3jbG5TXTwY8V4EsPbBRiUQTToWEcYxDKcS3Ws5siSRXggNs4Ai",
  "key18": "2oLpRUFeG1Jo1cDULgWPDa8fupcz9aoh3pNT5JbGEaoLK5hbGktMzr25SpJQ2FQBFgvsJA29BvCth4H2ZhmBkFRK",
  "key19": "26eyA2fABu6KxkSpiA5zDB99i1ohHnkwFD2vDtnxhGgwzvr4Kgm6bWjtgrih4fDL5AyrsTymtK71yi1sNvv9vCVX",
  "key20": "4g8qZtUWB6VkRg4R5LSwHnpVpkzAyToyQH9ef8aeWx52oLbeRKRVJJ9Wq6CnssQD6kJh4MgLF2gkWAYkZLnK8uL8",
  "key21": "4eLUa4stkWJupJ3tQT7Soj7viiKduj4RmMA2eMhwYCuhHNb5hsTWbcWThZ88fewykpnYzagUFTidWWKjYVuC499M",
  "key22": "4Tz1y3pX6eqcDbYp6hTfSP6jjsLEX3LLc2RsyPmbo4BHqQsMQHCjua7XoArXucuQqH9HZiW2qnreMyJDWYdE6Nt9",
  "key23": "4SJqiLHkeKop5rAmJTDDdW9prWoe6F6AMsPXLBcHreRrkGQDFd4dML9BXASycy1vtoZPXHe8w6nKTMg1mF28CA1K",
  "key24": "4bYML56wrepyeheB8mqYHyh67scL1AhvByRRSrepm41mrFL8pWxbyzhpyc4VGcHRHmFifMQUYv5QqjGQkgXd8gSA",
  "key25": "bCmRsccSfYN9iLLJowatVzuQzzm4LSqwi62rAuovJoMvYcpMMHFgs7PzBNN6Nh5j1w8UucBdc57RwnEMum8ZSPx",
  "key26": "5nCc9gz84gE7nkR8My8CQnoTydAE6692W3tqRozC8KaARJk4qdJoCNRSF7bxKi9HiY7sR2vQcckpnrEQguYd5pgn",
  "key27": "YCDzb4ykwsEMKacbiEkQmwhLFWVhskg5xSquGtDC9MBioqs9AUcDNgHZXjifdpc8o2iccfvSEgk4bfCeJhN1e9a",
  "key28": "QF172KvBSJ1mxFJrVftk8tTzjLdEwaRg7LKVRat7jFWFHWrVfh7YBZjQc1N5XAV5HDwQxAs427Bd8ibuoJs57Xp"
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
