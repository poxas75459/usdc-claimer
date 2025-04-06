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
    "x8gUAmW9ETmwcAqfHhnzL6RxQQHfA22fVhdvrfw5Ca11tGr81M8oPVczqBMY9DW396WPT2i9mstk464SBkMPpME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45x9P8mMqqTJvu4nA2nMj3nsvTYjgefHcwdSocZuD6c5ZJFxnhpQLxWifva2shSzZqqJYsj9etToGtRQZmrZRJcP",
  "key1": "649ZDwz8VoVn2481GzUdqpNXMa8eDdupoQ2V3CEWWevtzhrtWx8Ygjh6EigjxBREBsjvK6q5xGLfNdcjCCg87dKH",
  "key2": "w7o5QxrEATdWA63Fn9Sk2FhniJRh1uaiK8c35SBtbceEVGUoVhVLGjNhp5mSqfrQvGudB8X3oMgdbvSWAXCgMfQ",
  "key3": "2kxyq1BToCwGmRMnmAsVWNDGH2tocqJ7VrDMTeKpu2erPtBsc6pfbmaiZcEbZYPBx7xV72BCBMwRHUfhMZpDZATK",
  "key4": "fxkEALAmYTbfA74hj6NSwPeu4RqpR8vkKiVrxMWGAffzGQWHz15tsn2L59xfVNr8GJydzKtVw9K98Mm1ARqLUc7",
  "key5": "3cYHpw7qg44NVhfxXUsVJrNj2u48QjMnMKBsrchQpU5Q5Y7QhjDsa2qcdyuBwtRVmZYHuxyxfSzQt59sPydmnEd1",
  "key6": "4DM7AaEvsGNzUfHxRXdwCHg27mmJyp5Z5vxhBMshtzefpGyXFe6EqTH1Kt8hKGhn3CzJ9YLJ6pMZDkcezPJqsnKw",
  "key7": "2xogJgw8a3FwT3VfdwSD48LQnCLKwTWwufz98FHCpX3snYQLJN699YtAdXeHJzajK827uDJ7ycgq6Z2ehmgpEPri",
  "key8": "5uoyiqu8ujY6NX4x6fKKomkUZZNTqt3rVppvowTweNnSwFuyEUWHnwx5ws2RTp8vkcwZp266Tx5M1o5C4zqDJZVh",
  "key9": "3v6YaCEDAhNase51G71ZpA2WatCFyUxbZV5x3NEa3CJcCy6LsRcuDvFYV2HrWR7WHHzRrc7H3NnP8jncMEwkot2J",
  "key10": "3To4Q8s4P5mAW7AwKVszHxWm3HUs9DEreEb9mmFNNcchQUqibvq9d3XFxC8YnR1SmBQWbkR5vqphUFvE95k5Rf3U",
  "key11": "5EX7qw7zmzcaJAWWfiikcbTDScnqwU7pRBKaJqvMksRiqAaHFYYyF5HHBDQDYt7QPxt2zRUhgKENfFEACDjoVEm9",
  "key12": "21bGCixmZS8f1v8PvdBYCC23CgGM8XXwL3fNUu2vk473bjwhha1Zy9fvbrWqXLVUT1dAVCCNKXjX4zDAAa2Kk8Lf",
  "key13": "5fAjwRbTukVdnYZ6ZbYwxYd1QSrKUqzwgkS9yL7KjtA5FPt9hYeWSKXBFhxgsJGHWEujbwMMbsPvwYfvQgREgPB6",
  "key14": "4dkAkTK9Re46oeeuu5sNMfeTNB8JBnC5RRycMUUfVE9UUddfpYgtepuDRjLn7Zep6LR3tybpzfnNRyzyR3obfUwW",
  "key15": "3uunDMhZECDBPSCCMabizzXe2CrRDXg5wSc8y9SbPeSo9JWsGvtCcgRKrg5Uicd2HRchREc2JcpBgZAKUPHrfm8W",
  "key16": "5UXnUksKSjHnV2Py7WvQCyHMmT1uvWCyui27kAqPMFZXXxHugquqNdcFjw8uFjFo5B6dahWsNpDZhTPWhkMHrmwf",
  "key17": "5cD4ef5io4MPdkneUPyMMjWNmzP5s1EBEhbDYu7W1NMqBd1Z5X1Bkwk2uCyRXRY9Yi7gPNhsWfdn4pgWV8aYjfk2",
  "key18": "3Fx6aK2pZcatNtFUVWobzuBEm4ue5nVAcHmdBFFD6WmqqBPPePnDVdKF8qbjXsiCrExo5CAXEJwSSn7fG3arkMS8",
  "key19": "2fAQRKGzuy6Q53TTsA9yH6y4hca6vsZ11gkzTjaaTqoqx4KfNzAauD2HqBA5H3ZFnWurm3cwVzXeifa2Z4japDwZ",
  "key20": "5BwTd8ZyTddPETqPiQ2vcs9qkhHmde4WZ2J7AGjTgP4WA4792i3MBmGBM88o8gyK1q5xPhc97PjaxwSUL5Pt5yFL",
  "key21": "3bZ7RdeZoia6SeusJYCW1W76PWFurXf5m64L7kGKfTeDkbf9SpJTjxj8cV9BvtqZcoLVGWHxB6QM9RybrBBuvphb",
  "key22": "2mBbzKctNGwLqaAqRiwdFW5qe7EXYDmKzzjbDi1EN2QmGmrYksfc27c2LDd6Jf8iDdCCqizbdQ1AZX1LmXQKFMgh",
  "key23": "5uq3eEeKHKKEeNQQajULLykrdqkWRCu8fwBttpkXGVKBTH5k7GFakwSvW7bBXdtirvCtZWL4axWQPXpZSf54kJCs",
  "key24": "W6g65661FLAkPyMHLCSMdWSQihD5KgagTSKE8seX1YL39ALQSegFYKYYwsbRJKkAQRkjsiusMLx8a8bRAFvDAv4",
  "key25": "xARN4qZ6nYMdfnhTBp4cpwEZkdRdqf4j9eokLYhk6FDYzm7fi1LZM4TkRMAzNQnhHp4ruPLxSA46ejs65VEXXkJ",
  "key26": "3ysReTuugABRiEcLekwf2Etq917mAFHsuDBv6bixvFXKSzZCrbTyLmcb1cZDiTw16iMw2UBCXYkgbcszHUv57YC4",
  "key27": "2wRz2YzuZDQ2jzFcX2q7L2fc2FaML1ZpzRpsDczgh6mYVsvWUrFS9at4vWu6f5MwQsHy9eyEWD8eGJqKNxwJNgnd",
  "key28": "VvLo3mT45PeLsEu2pL9VU4MjdvpX94RnxFk7EteJs9RxqwLqv23LduvkeqKiVLk1girLBUvMtusDtdGF5HCCPnZ",
  "key29": "3n5a2kNJcr7HBCHAzFYobQPKc6UhNhDwJDkRnguetYqP9RZyyF9PMaJUTBo2awFUdzqpa3uKrLyj1nu3KCg6PUoU",
  "key30": "2uvgrpZQsn8ecMWXpJUJw28PAfcuB42bDwZh1dGMNSBXKqLcv9tAR9RUHzLMTrrBFkXCGxQVJrEoztgiNyu7i32y",
  "key31": "YjA3kJhDXwZPXMYZkF2TAen7k1EvjVeUBStRXCwjAxtUv3gzJD38XeFunCjWPegYgJS6X5eSZ9yD66BJEBGP4Lp",
  "key32": "4S9RqwwPcjE3f8nRDdhNMBsU7eUhrHJGxKoRfcLViuZomH1J6iG394Y9YuFPt2CrXVhqkakz2cjJ1Grvm28zxnHL",
  "key33": "QpcEymyuKbD6LiUA3EbNvW1j5cx71HxLY1uqsAfMcF5GDxmbLCtXoNEGo7VyV6kRgztCbARrhMNjkAiNjvPoyTR",
  "key34": "Qb5rKHSJZX4tLBgf38f8dcWivs1YZaKeH63DtKU7DQ9Bym81au4LPfpGadhBVsJmgSiN4vneb6DPDEry8v8u8PP",
  "key35": "2NbDmKscrgBHgLDu1uktWd3LLZdt7cB8eSh8AD7edMmVhnYy9kFLjxv4FgSk7ZdyEAZbrNRKHZrhYMVRS7q8d5Ay",
  "key36": "5AqvLsW94p5mLxATkkS4JK2cDhdycJxVWdPp5gzPCHrNk3iGJPLHviZ7yXHgoRd5cFkV79FJLoPoK5WpDD3bsZ5D",
  "key37": "frvriaVF473df97w9RiS3QyJrEp288R7UBtBkDmb1mmFxP1uFvguh9Vh4zGb5D1scXD9vXUKnyiaxSAKr3tXXgB",
  "key38": "2BH5fLHUPNiZSWBwLhSoi5RaxkoV3tZAQSgPxM3GFeVstPPDwp2oChXcHhCQmk5FZjiAzemDnLtMSs87K3Tyen9v"
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
