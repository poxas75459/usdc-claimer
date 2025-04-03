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
    "3S2kZv7HnNH5muZbv68CFh49teYSsvKa6G2N9wLCBoYqXbg16ehrneEP14Z6hivNguc1J29mfrFfTfjs24nMYVTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z4s6oNQUagWSVY3B18TLQEhYq2NPNFNihK95BdCkGxmXizUCUZeLpCyohR39L6wTung7Gwn2ufxQ9SgZKVPoJM2",
  "key1": "4p9dUJC5GBD35WMcqjEpfR6KU6d37cruPvKZaoHaSv8EvrVDfgovPNujnhMiPZxnjjebyiWiDgLd8Hsff13RUvJe",
  "key2": "5WcAHxkv1zF65YEiqgUaotnywe1qw85x7ZiK8TpQK6KnKrKTNPEFTiZqeoAaJTqbBq1uHxa4pb3rVqFHsCGNG23L",
  "key3": "os39ZQx7oJp7N5Ce7SS2qNhPVSDGJsZ2uQGWVJ44jAp2LmFdPDLSqbDYfbEXFJ3y4F9ofi8Wn5NCJ7rxsFnZKcU",
  "key4": "35SyoUbHFqyKx5fo4VStzE9vvKTJXhFmqnztURnf2Mk44kHBCvMzpqm8zvpMDyoeLLuygjoAxtJZSYE1E89zXRQK",
  "key5": "3a9YgtQoxXv6CP1xG3TYNGJ9hG4MC8N293MwZqQZ3Vnug5ZWixYgv8PEEjcVSkw9FDwbN9Qcft6Rfstoz4Lmef2j",
  "key6": "XXVX1B6uoYxh48ixSMfabiBdvL4pUgncs5kfNDTueMbmNkGHP5KPc9HRGAP65S5iCQ3maRpDybcfJ8uhjYgiPB2",
  "key7": "4PW9EZGjMtTUqsjVP6AedeuwwyeKwub9GbTrFzgoAHAHFu92F6wtd8268QGEqq1ackeDE5AtyMFsxob5fQeUMHPY",
  "key8": "4pQT3nrTpzUtkrXPPGWWVfEjWCcxJrpK1nYWhC4Mr1GPtRZG2cjX3pdZHrtNuAJu1NkxYKb1CFzDFKx8bZYBc9wz",
  "key9": "5BjwKeS7FBYWpt4bF6LSyxR2XqsTA1cScyasfB1LXvU6EXMmYq2PGvbcDpGmscn5XhVh5XvCk9DJbKBDPhHbfSSh",
  "key10": "5536UXfhnmbfKkynYxpf2hw5iuGDVhCbj9GSPFrBXMNeRM5k3mYiVNb8eoSagzp1jZwJKZrftHFFxZwdLww44CYu",
  "key11": "3yeHvktTwsVNe2mTo78WsZ9fixNoSU9YXkaDu9mHF3SrYVYeQBSdNsAixQ63tNtTUvKngjKecb895H9A6WvwyCsQ",
  "key12": "5QoUTKfYrG35RXPRzJD8EMjnwXxxYAWwFE9QvKHyzHAUwZ7bKXmC22msp2Yktot7xX3VSw7oboATDcprWTfkhACm",
  "key13": "yjHycCwJUMXy3QC8GABJbz9LozUeMj3Ea78FT7CmF2d2q3qT3QYCyxw3mtiyiki52tjqRFqLTaf2Qo8dWnNx45n",
  "key14": "G8HReBwntfRtJCvD731JHumnVWbsHHhznN3jgnZNfyQ5aq7xWremHmsqFZ4F6uHXoJrEXHJbr1WkUAuzuJq5zke",
  "key15": "GoXygjaTeMKxxen8ZPrCkaXhWSBhoPXm7q2NTPjZsNemAr1VBGY7AfN1tKWWVCffzT7LA6HsRTsAxGiKzgCubNy",
  "key16": "37iHqEmRG4MhXYibWp6y3JgiVDcpEPYeUr1qtTJ1Ex6nbqKJB6iVKmnyYERy7uWaYnLfuZsjkqPe6suWNJybygeB",
  "key17": "5KQdjGMkLbSTASuFMSPsouddz9xdZpRkcDPYwziteehpJjjnjiratyPdryydc3iMcvp7YqZLUnEuYAvejy9KyQT1",
  "key18": "31TuzyuFQdpLiirzXmJsyJ4ub1UA4krhL1y33veLGk9V287RsrYddpxMSqx4rA5uzshpdpWozPpek4YVJzhWvp2A",
  "key19": "28SrXayXBaFBhvnEbU9ghpGTk3PmVSKvQuQLbsTxwG74aThRiwFKeGzh41LPxwNf3eYYj6icb1dYcpgFNpf5kRmi",
  "key20": "5GGvybE4rYqfrf7EFaqwXYV9n5VeHMKwun9qxfRVH6gn5LKsqRTCAHWa424rzFw9u5iJQkLJSneCNnErnTjzn82X",
  "key21": "5JDvUANYYCAYTSrbCvHH5QjWpaHXF75RXUVrAeCpF3ptQvxeYAUBykfMeuCeA6DPtjU7HmfsZeAK73uPFmd8N9Lv",
  "key22": "5CAqcrXEZ15hHhT4iF5S32sYTi9oXs5tZsep9CMdUFFDpN3aHRDeLJu5HKTJ49kKGg8EN853nPUKzHB7D7JxWNZ8",
  "key23": "2ZpwiC3cNBy5MJaiJrcqEoPWPbiSDYe6kZBbuSq8q5RGcPc8FhQs7o6LmAjHAHYbncdyEVXufnzgGtPQmJpGjSaq",
  "key24": "2gWhRkre1F4F8wAaQvRsnHCC6of5q8qgZz93mHS63zeWiffbGcF3dVib9xjCKhT4DA27e96mg6Dj9Ru1NYhWwV5B",
  "key25": "2Jh3Qzkf648NZEmrHGum1mW4V4rrZaZYBwo3CG5QAKF8Krg6e9KT6LJ4LsFgqzhVCoVJDzAyVN4eLpoaX4cdpkFx",
  "key26": "8XN8EYAYYjwkYBZgRVMkEcg22Jaqj5JpEimdqVeHbcSy2rBtTu2fZB3Tz1ne2To1DSGYvXyLfKWJNb29yHrovSu",
  "key27": "EJ1RiJejpGMoaJE8nZfH9A2SAZVWpWVPCKPmqJBuHsSRrysDft2qRgHZMU73fYz5SeL28dQpuDZZPXgSXqj3mBt",
  "key28": "3jVJTGFrioUTGDzYnUeczavotApM86TiKj7u7Ja9pfY6L91xSupsf95cBK8Q8syW4TntcHifyG7miUkEuwu3KWtp",
  "key29": "5BpXUDNL68bQx1WwebGAv5TqSBgrUjEjgcbgGtQV5pQ41V1thseCnrXU4teBRtpDgYpqH5XBnyXqrfCS5bwVxwub",
  "key30": "3w3n4ei2SoQAJcaCn5AMaFGHZUq1UMsuJC6G2EdxiLfbYx5EBG7x4rp6147W5mgSdZFYf7TMsy5n1Wc5Qyjqu2qy",
  "key31": "5NocNBoURVnPh3awsD9GEryoV6vtdKYTpEUe1yuFsqfEMFadrC3BxtGRP4EN9XHLh5J7of88T3rzJpdnN8vFrGfG",
  "key32": "3Pk8kfdLs4cSDejGQVeSaLahCi8J5Wb9gQU3Uuped458so1miecNPzQSNRqzNrK4VqkLrSKTDj8v7prruEg5LF74",
  "key33": "4guMHj1JJTt6WsNkkDoyMsN67Gu1XqaSF9BX5xS1CaWag5J7bqgNZZxxv7enbxQcxwF2qN8vN3GTwdiyy3WohXsH",
  "key34": "nEYDXzPmLgQZeW4LgGzgVd6aVBggEeu9LipJvdYvt7pWjQi2SBvtyPETcx1o1tUiyhzmiDvt9BDfaQrjkiEPmdg",
  "key35": "3d1WZUDuiyjwSMnvfEiiv21FGHo9kA8txdg4caWmFvGrNaaH67dqvQdidXS5sk14wMezhDkiCbmrNEeSz5oTyW37",
  "key36": "582Vn7ACRY3A1R4exw9C5GvvQ82iLPXJEzqBHDXb2zyha4vz2MMFjonfbVsB4VWW8ZHfQpyvPUSdmgN8YYTpdZRE",
  "key37": "4AvruWVG57rBWpXYVpYMjiaHTsDssiDMJym9gwBBNV69woAacCE6e6N2sNcSgXdYfQm9G7TUmr12Mx9U2x6Sjvop",
  "key38": "4syzBKH5hxNeHGSscZw2A2qjC1V58t2QEXSiPWYR5oSzEMmhHqjWDf1u9ve8XLzrTHKWtZhQPbTkVnhrWfvU1bXb",
  "key39": "xRALBbHbwsrppdEeJTTnncmcADEAXqxBb5kBz83d7NDoQ2HEKP9r9nR8HsqF2cLEYUDvPXkfskqgt6gW4Dsfpop",
  "key40": "3kW13f1i6mBSCu9BZP9QEYW6PWnrzKUBwZgicRp9tvmb6VmbNyuCwMz3b3U24cFh3DurEtnC5GsLuYuwhFd3Luwm",
  "key41": "5BZbM3bLux9gTQupu9mH64LW12UezGcWBCztYrBb6aAfCvc7FbAKay5SrdVkkA7ZytgeHCHmn9oUStADrifNpRKB"
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
