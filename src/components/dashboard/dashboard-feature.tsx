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
    "2tmaJF9wYg2A8Gox5nCszMxBGKKgqWerME5oXGfjGc7hX1FaJ7QLp17N1y4DNz8g2C8NnBNr6sZh36dAFahJftX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1Q6s9FU2JApE5kCT6A4nvjMSNut5c8ezfG3Ezi1FHEBk14e1AjfKGCwMi3pXo4F7N4jU3wewn5rouFGSL7FrkZ",
  "key1": "ieprJ4WrGgMnS9ZAingko23dW5h8GbQxyB5BvEzkEkru27uSSWBRGrYNx64ScbnndkC4m1qv21zWLkxTEhmt4VD",
  "key2": "evV53qhfbSUxCDjcXWFTcnwhq6ecW8ABueiCUFUV2DfJ3T2i9wuWi96iQKAoqdWYXQN7pbMnuJtY3uXfyKrENvj",
  "key3": "37RYQD6E7EmBipjqzZrd9WKHyJikPHQ6td29zJzwvwTfyCNDfapEfzyY3A2PXdQPetw6cRcQz4jGCTCS8dFczsbv",
  "key4": "2LVSLDHUZVp5jgUp9KCxCCWmiyjHZ1cfNUPPizANbnaswXpoCdFMiAHTSrof5xCXLik3auLvaLJv6SNx49uHsvDG",
  "key5": "2KYmLzm6epRGbnXQmooRJjcrpUJCL6BbvKeWCRwuEg6U3fAFj1Fpx9EVUnXMASk6SUufNDtaXK41KaTuLLy6uQPs",
  "key6": "5qfDhfWTGrQXkUs8PNQTvZktsdvDAenntjv9CiGsYEcaz52YVjeNUF7AqhUxHwNiJHT64JqNNVnmX7sDgrf22QQd",
  "key7": "3u5Vf4mueM9a3TsioAEf6RoLkmtFJ1swhav4fUvdtvrCo3gv3Ap1gZMumaubn2MPodL2stuoQu3Xd3PxqzRn7nKM",
  "key8": "4rj1NyTXqBKSVTa1jvPHWwpz7CrDeP3ew4MyKGmPJ91BFnAZvC6eoMWpB1UxDVKfPjUso1ZNG98ejfpdZQqMAQPh",
  "key9": "43kQsx6fL1odczufDsQTq7RmzqYC9A5ff7kXQH98gsspcq5ERj4hR4tyuD7NxxmiwAUzE3t4rd1QFh4GTdHpP1cd",
  "key10": "4Ts6uHMaWzjm1A54mfY4iJkxfxry1ESQ2eqJurSSc9kvp58UkGw9B9xxkjsrnynwwy6zQsFJEkNt1fBS7oSdvLf8",
  "key11": "442kuHDQ9MMrFC2bk5E9ak7J7omcV7BhebF1cQmZe9PLd3xSNdBuLPxFhRUefgAEfcHnxpXvPUpW1cK3FnCbThTB",
  "key12": "p6BsFkt4RRWeQDfdRdm7EdiAeTFtxbMyHg9XMdg2PJDU44e3cSmxUEVBvHDUEsbXef2WxCfQ7N1VXJeKzJEuRB6",
  "key13": "4tGZoTZddscaja7q97KMP4gxK2E6qk5gRwyDXtUUGT9JcXDsHyQh2i5mE2SPBDK9inQ1HaA3AHRpv4TNySiPtcwP",
  "key14": "Fmm4mzHpg5ATnMDkYRdGkVn9QgivGTJb3YC2xqRRCVWqKQiXDcRyTahDLFBBFPLJEiWJ1UUuhbjYu9417cFhXkW",
  "key15": "5ouN23dGkU7KXbhVVFWZcRi18C8WBq92S8cZLDdiE7CC1KtLLuFAnpShVK7bF1kJtTwCnbXNLBLdVneQbseYDrQZ",
  "key16": "3eyCjroPnNWQ1RuLZ1KqqFHC1axcTcRdu3uNGarkaWNF4yiDJhJEd4ccprD4TPNNYmb2u3fnhDfVjgzu4tNPruJx",
  "key17": "48Rb13vPrDX82JNVSR6nCnLbtiniwpCNX9bTbcjtzYxiTuHuBDXegMvgjx87SSA2NRDH4Kb1HgvBxiTSPvEHQwa8",
  "key18": "RzM1zVE5uZNC1XkEon89FcjVS2Eg1umzEyMeGrRi84NMWekghsXYpLXxFyrmuUu4AgrBS2QFyJAGeVBkBDbT5Uy",
  "key19": "5D8UbPwSPBwyUQTVcA29yMenpZZhovCHgPByCUP5jfBQ5SMxTfnpuWnTsB8pnMvecWuAZ7MbqAUVqpQBdGJiUAAF",
  "key20": "4NHr8i5cR4AnBkomVBV8vXJYyFEahuV9ygvb6ng4sjbaRhpVefNZkvGsU2UAva1VAuZnxqRgtGLD5pQqtM2gCMXs",
  "key21": "5S1d9usMBnYbXma9WNzH3KyvraKN9rZmsrKZPAKNsAADyrktxfwseq4tByHv16QeLZ7aq4MvjUfSX2brzggBtfxU",
  "key22": "4iTtzfUw2p2CLM34hUiAcNzsEYZCwT4X4SQSXrnDFtG6AeGm5fc8E6YxPKpd5RzDvodLQVQZxnEwm57YgpGXR3Wb",
  "key23": "3mrp9Qg2LGqzLjEb5eyqvTDV15htPkfHpZJfFEDquTBH4mMCzpA13jy5CZCdbWNoHTx1HkMPfTfyrQW1BqWE9b3b",
  "key24": "3dZQrWrPQ1s62rziYCKam5YjkascStfqCcTs3KXfMLmX3Wns942PWzyC8EEunPfjye9V5YmFHvvfZ8cxY8oiCCuu",
  "key25": "4Cyq14NV8CZWkWezkN4t5C3fuJPmfdPVKZCZNDd7H821vQ8juANgc8pLAVNE64rJXamBejPhGnimCVi7KZRi7d1m",
  "key26": "2CdMPoqJW6L81wC6aurXS5GBzPL8Hu4DEj3QmLY3U5Y1fQSQSD4ZiqfBt7RiqXxMtCLgKHN5PSbNSco6AuuGMHts",
  "key27": "oVEwVmAXiLf77ph9EoYxtS8NVKhwukRsCCjFWYgknzrbhPamp4p6tBX6kFR3Qv4bF1dGT6umA1hV14zjcWngvzi",
  "key28": "52TQXGzzDBSFD9nJRG14F4i2PBPgBXTPZaThkVfpn6NwfF7G6hiFcS3MP19TV82Ra7g5FXTg1pBoQV9GkwVLDYnE",
  "key29": "4YeosmEAVb6ch5PN8YAnnmb7G5Fkz48uoaBftCHqjqMALxSnNw1KH6kCR75kqJEezh3Nvt3BgUeZAUP2sZpLgJuH",
  "key30": "3NhyAw1RSLMmNMnLCunnAsVPsYBkoSCJ17DzBGoSyjrNfMyZYLnMpF7P6MdzUp1vtgGh3kXU6uhen8qBfCcP9o2y",
  "key31": "5fyc4KUXzup8u6YcJHVZP6JM89oX5NERd1emEpAqe9RCJBXaKBwreKsYxNuEycoBCjmf1vfrgHBuvaY97cBFEPuX",
  "key32": "5BcuTjUc4xZphfQchgCaXr8KQo5xQUG3Bxi3BNkQZyCGc6nGutFAdRZQtkLP6i9qsMf9JRHecdNRJ5reRDtCmAZM",
  "key33": "35GzU2g4mvaxiJFXgxM4YczKLMQdvM8w33fbRjosbQcbcVFcT6hbnLw1rC4NbMMa6oJDAowHpiRsXXnuPVY7jP8q",
  "key34": "3jw1AZNjsVcPYuv6o6qcM1LnUWb6SCSm7y9z6NZddM25TUwHkntYt3qUV94uyUs2BRRG38UbYG7GvVtMXy9uaTqq",
  "key35": "4AjDYb2WMWGfGXaw4bpSNfKr1iy8AKD1RBYtc2Q2YXydBFbT6MvxbCTCrqnXvi1KoFuJGpjYSonzNg4BoXFZuRgU",
  "key36": "2tacsPCTgjYXjMa8pn7wpd75ayxp7H4roB4ooxaLidU3GUXrxBeUektLESjj6bSSWP5aJgVWaQ6ZfvcERuoJg5J4"
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
