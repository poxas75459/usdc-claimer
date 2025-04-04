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
    "3PxVAJBHWUtrUGDoy6NPZ5w71tsDMWBsPvsUHJKEsPo3gvvHFggMxUBNacSV6PFR7PoGmCv7gsqc2XZK2EYnAihz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63J2d8xt2pe4GrF4b9kCC9mL3WVphVpX6UmRSutJ3GdAAvdcYZXwSFzEfW77tPN8LYicEAXFbhAPy9W783nFGowW",
  "key1": "5SvqM52o3C3rLgyRDQA4RMgji2AHuP9fSZ6ReHZrG4ds18NRFJY6N3WGypqCQTo5icH6zvSwqiSiFtdkoLkLML6k",
  "key2": "3DaJRfPGpWSTWwYfXA23C9RfktUe7w63SWCiRdDJnb7E8NPnpauJX8dL8vzuGfUwm3Jpq2J7PDbJEZv138qdJAuu",
  "key3": "4Fjens5x8KRn2Ph9sHCD87iR3iN2yMAEWHCS8c44HtN46BQngz2WbeQpqLFXA9vQrmE6s4M9FDsFN3XkbrhKerAM",
  "key4": "Upoec5gQSgDKof8Rj5tfKL4cHzYZ9EtoEpXF8vbUzsdMFaUMrcJ3XrhwNTRBzM3bPhS5MTUxY7PjgtPUejbJgtg",
  "key5": "4SUmGicQdpCiy7HWAVSytHpDC9jXTXyn9JUf8knm87TtGBWeFjC8A3qcPpaLCn5ZsUJuTy473D6XLrzzRm1vCodu",
  "key6": "5zk8GjYdPSUrnMKpWgrzPVBF3YRBVnt3c6ryujE39mgm1D3FCQWGEhhxV1FE2epCXGyMB68igWqdarnzjC3rjodp",
  "key7": "4DnuQ4sxfKr7hf8wd7KwbEftaNvCafMpV58WCqQd9dW6dBSNGhT61ZPTocepyNjCQh192SfBTP6AFU6ph8egk1nr",
  "key8": "3TpaVMRQWgB6PWUUknuB3H8cDiHMeocN95TkpbHdvBwBJgs2jV32Kw8wZdD9wbPnoDh78NjaqtMvJ75nWzEYsU8E",
  "key9": "3aX5yZFXLmDKyV6iVa61AYXmMCvASwJdY7P7tMnH6pjrFu8yuiGMiXfEkgNDdgXuoeb6vfQQo54TbHoYNZtJ6kQ8",
  "key10": "2aGz3hrVVbtonqeHgzTjQqm1yHi4y33w5qTwbo5pWqsvXxZE11aPaAw9dXdXjayHSr1B86qcgmyJ6ZmBgnGKZe7Y",
  "key11": "2PqPAeA5JzPp3UAYvhQ8KyEDSeYY8yEycd1jafLHLuqkSh6oNBY2uUq1K925DPKYTRkzN3utZt2ZLUbRKUe9y9c2",
  "key12": "5EmYQPEe7yd6dCFqsChvANqwYiFFd4krPVgKRpS8KXp9aBBgwap1VQUGFBa3JrzYV4cwhp5aKQurcavdbcAm5SRk",
  "key13": "SDmQH6e393ghjm5h5R3PHa3DCzE8NHTSZzhSYqqnRBDE8NHTmGdt3wTvWTU32DQMroKBws9tg2PdFEP3bWTRPiQ",
  "key14": "4X44HY3LpbdsZHbiKrkG43rn3ywTCsQh11F3QQed7AxS3tc7SNShMfbNFA2UPBJf2NqWbWBTWb4K6qPJKjo9isfz",
  "key15": "366Hd6uNaS9Z1D9V6KaPvX5fugcNtdswA4btjp1uCguPqytU1JFwhw41BAadYi5SdZuBpZFxMET2NockJdFqqSqS",
  "key16": "3YDmMPYtpR43SxCKUuafgAYL82cDP8w4Xpt9NFpHvt5vPWoogdvKAq4q3bfPTqdLDtbGxzN7S3J64QgT6QRRKkan",
  "key17": "4CFkbqSuUsG3Rp4jqn5uchFU8aXoSetuE49bSdUi7UK9U4iFGXfg55CxTUCt7bv3PTgTYhiCtPf7MAEmtB7dKDqJ",
  "key18": "2UpznCiz4XQwXot2MPKgsyqJ24KyFXzx4JhofWschHsFfQCHniwzenTQtRNTraecttLCcbbGKVUnAhyk34pWMdB4",
  "key19": "4grzgNF8YyNCqJ6TadGNzjTLPX1zGvxCjmLG46qE12FvyMCD2YHyXrFgVCoQKVHm9Y42Zrb2YjGPPXTM5nFJjKbN",
  "key20": "3xXqjAPbUJHKrRFH3xybjE8j51wc3ZzZ3wmjQ9Y2Bohz44LayDJQmK1bNm4FufrTSFdMcJHmxNL9gVaPyfyYftiK",
  "key21": "3wKnfnn3cJ8jZtP5aC3gKYDVAcEh8Kx3FiQdjk6HzugWRTV73qLAfXivGijzTZYRpEYKjoY9hCUZntV5NTgfafyg",
  "key22": "fTRoyPNsvT9Py7JSX4bcSeQDGnwC1HacStyVXmDy4rQxRo1vNvmUfiq4ioUVuoVAHhVSm9C7BuAENaVjHyeDbPt",
  "key23": "4sBfxrGx15eGZCP7Fj4mxkkHUUDE8Qz2FezAXeSaf9P1f81GePTgnmtsdMNUGE9Hw6Xo58z4LRbEwSCigHYz3UYP",
  "key24": "3GFt17tTzFaqqXj6mbWXUcmYnvSHV5b7pybkVVdG77NSMUwZZT5xzUktvXDZ61YdYNXJxumVm9pZpBKYeuahMM8E",
  "key25": "5yv3rADWtas5MsnyijeHSxS5N7qoBGXsUNjRA8ot3aKFzp8YtQUMZi2mKvHVCpaWYmXMhWVbrNneT7CWLVdCKocq",
  "key26": "dm7kUD31tbN4ujedcWNPEMdiBMtog2MNtJazCbNVdKohtcS31mbrE6jG47NUUGd3gvuwBeSnTfEBdEBfYQPgnZx",
  "key27": "4nLx1cBWtDNwz19SMdUsmwmQAZQkWxsPr5ozRWgAV6KrycywGtjyoJt6mJAVbgcJSJfyhtbYFqSbCyK3c8Ej2Rmb",
  "key28": "g7BQUZfugwFbMYCkdMwRMTv99S4y1uoAGfQWFm8bTQ555yyLjaMWDz2TiWDoormDziWbEFtT5Z9PNuM4bTdybXa",
  "key29": "3YPxR19LgU6n5Zckvihb3SnsdS6VdfhhT8jx8LAc2b5HYQPGuzuHy9dbPM2C9ZdHQqy6gBuYqnMgp3K9CHRv3tUy",
  "key30": "31U1TuDMMEnpM1q8mYFDsDjCrE5sPnT2kdfrUWMCLcggezMm6kngCvNjrxySoJnfMHYETbRUTT6JTrXnqzQcXGoy",
  "key31": "4Fdhab2DHmTXra1DBiRAL54rw3i1ucywetwLCxAJsBQqsh2wJJCwG2HMVQkFYvBRf4byUS7eHHWR3njqipjKkhVs",
  "key32": "WrFneQzwM8Wpvo46wBDuY1usioVTbhvvkfLb262eUzPbUTaCn3gvHuWcLFu8r8o8snkNUfe1oEugR1F1ugK6S3F",
  "key33": "4V65iRh1DcY7VKQZiFm6npjshxeq53dWLGbpbdqU72zSE3VLcpjavLhkqEV1A9eWw4jAobkePAbDiGjfEPBU8ZMZ",
  "key34": "532Hugg2eSwo9GAVnH1FvJZnSYSgdcb5ZGckR6S4ZQuZP1ZTUKNWo6iRJgAhj9LSWKekPaKcY1Q76GkkFmMd4q9B",
  "key35": "3FnybExqwFspHd7o3xBRBojffP1qy7hVvpEV52jdh2GNc4dCKzNsS8h1sqNjRnXPME4ifYoxkyNmactGXMFZaqzT"
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
