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
    "4Vx7EusD22nqDcwMcirM3K5s6NRaqLR9VVyghiT4gTsxoDaaXLW46cvtZ3B2V628K1EkMB5x7BZpJEKSgjKn8Ejq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qt2jUp8vBeih82miFXR865NuNQRaFRjpKnyHL5gMVBeZGoorxSNsHNfUzAz2Ae5F3jjHRV36x8xg9E4djZyZXMQ",
  "key1": "2SnAp91CDCK13yFtZUhrQy6i6a8FZiogbiGyQda7JzNVi6UrHK7SkHuWZaUGCfRzeSF3MJqoQV9CoB91fURHsGqh",
  "key2": "2X7BNou2yWYXYYfdoxqFQGjWUx4o7upwLA3ze6FEwpMeqm2CJBRdtgqnmeuQrhvtgdddfAU6a7GYNYAEKQkXVikn",
  "key3": "K62VMQj6H3jPunaaQaWAJpJwtN1RJcFG2HXPp5mNTnnHg8VGvCcUmJWGwpJksz88rHPThh5XS25PzSsWUPvSMRS",
  "key4": "2SGLA93ufHGdRzELoDfZavwmhMgtEi7ihe3LKTBMEtSWWThWDYg4rgoi3DLMPt1YTb3JRpiatJZRqrzQ3Y3cqLb2",
  "key5": "57xXrPSChWRP7huLW7k9rcsw8mWcePeTQQ2jTyxgcP4MJcvbkPshP6taCAQF9fZrpRaP3kRuEXy1v7zMr5D1bxRJ",
  "key6": "31kkm9SDKxVB1GcbtZ2JuczHmhssVM9FyQXsyrcDLQXUD56rScLVshCbB4i2tznw5yDLMLNGC51TUqjZvjKpgUBS",
  "key7": "2dZo4DFGC1jdT5r5SSpKkc3Luu2mdp93jQimNfDFt3r1hMxfGQHaD3R24UGFDD2kbV85EuBbW8Su31DRmYFeyXDo",
  "key8": "3TsJ4qcgRPR6eWSbeBdixMiw5qao2m8mRnDfekDEFnyfXcXHackHNYFCaPjN9LEB1uqk1gmu6HzbwND9kSXkGSFX",
  "key9": "znPH6bpvF7D1ci5QF5mb41dEs1JfNMSc9Ru1apbU5eFESGDrZVUM62WRwb1zErsMaEWCRakDxF5L8JT56ne3rFs",
  "key10": "4ohcB4MCEPXy5PJRnVjqX58b3EVRAzT6hydSTzZBC2h5oq1x83UrgqthQodm438EFgbNqUHf68bGtvQbQnEMxZMD",
  "key11": "2CMEYEHtVV46osDYqXwARrZithuU41jNzZjguViUCU5aogVtEpqk8wiUMWBVnEvJZTRggETTxdWXMJYKBfLWgaZa",
  "key12": "2395Q8Buf4rjT1kRRXLWk4RNMzQDNnxGZvXGzfN9HRHKBcmwEEkX4qxVSjkew7GLszyD3DhcE3iTaeuSCB7MjFdy",
  "key13": "3MrdoaQ8NAnLgG7pHmW2hQdz2Hpw89g2c5pW79x9DZUsC1hiDDEgJeqtybx6vcVUUzKNU81j3RUBhP6Y9mP9q2yS",
  "key14": "2TJdCCGmjhuyi5L9T5hSK6HzmJUniuDhwYY9XUmeYvS7KFJaweyjTXJM6ou8AkAwgQ982zj9Wa3pVsAMosLyTaqK",
  "key15": "224jBst7mqbgGzCEoSExS7TYMMEG4s1cPCQ8BPsvdeshqPL3JiFRKDPNxAzM476dZSXV5iRWqPZism3iRFXPUHcn",
  "key16": "4ebXrUKhUm1397UvkK2352kEnb2dZAFFvehmEWtXh4Vdvsqk4H5kCqBPp3JLhSK7id9XR7mzTZTCuCysH4cDZEzA",
  "key17": "2wAfSKhLYwLFhiga1Kn25BtYMjhYKyFEKQ1BU4Pe9C8bvm7WVM41eJCCN5Mk1nyewKBHjZsxsvBjmsyrP3nAmQCL",
  "key18": "rUgJwHMmk6w161NbaEKjnHdwDgpXPSasvLWNh1DdMPqd5kBuVsZ2pfXnfk18gBLjZcKzTevDRQM8bVF3bsaPWxV",
  "key19": "65gixKU8o7uaiapriwrGuYCpY3HpxWnXskaQfdu81ehjyTKULnhZHvd5kVSvZnyDyC9r9iwA3YttZLVFW1Q9oboy",
  "key20": "2bUXDH3RmGQqVuZj92dKkjqRPyfsXMenZdTYgwPJ5xpbBAimoFCUCPBfgwcy1FRFhmMWJSJgrbXvg1wTVefpnyni",
  "key21": "8NhohLy5x4DLFrjeqYnNWpY2F6jzMWEpXCctt9ZQoBiiQGvYnFSuACgL33oefmcaH6bKSDDFVrWgYSDXWk73dec",
  "key22": "29vJ8QPuQ9UdLHhPdcEkLDkDqVREUmoB9gw1TuJH9JbmrEGi1Tz5MHiwiDuxZzYTDsxA38ZiyUEcwVoXbYkB7PRG",
  "key23": "2nkYxpJnzWQJ6Jji6cKK1HVBfX2QBNtgdn1XrZXVVD3ngmsnZeMKFJNu1cHrUqhPR1iTyP4xT6vzdKqqZu9tLvHS",
  "key24": "5wiKWn7mEy2aMYwnzwYzmciaRiooFony8wjYFX8vrucPmwbH2S6D4rxgApZWr7xNvxmeyBZZ4oJBtaD7ANf53aub",
  "key25": "3BtkPTugMTpscA7wkyBTLDmGhwRwfqdxHJMGjmhAy2LWuZMhf4pbfvAaRbLn96YZRVzuMMRx7c9g5w27gCd3EVPw",
  "key26": "2tpq69eYp5Ec9mx6wFfdzpV6gcEJBofYQMTGMDS8jnUpVYvPrsMScjrEehdp5h75dXoWJiyxgcWXfKaUEutfJafG",
  "key27": "oSctqfP4XHnUchFu1M91oYzTiLoKtEpW8sZExhuCFKAfiwuhv8cDQD3T3FjDwSbxqAazTaPhSc6uhZ5kABMLgyA",
  "key28": "5c92wNuxbNhBErZqC3XBeAYEu21ThfYoth93H4nUTtjAigLu8W8wH48UmwuY5qF1eiiKjaoaa7XXUui4rMz66Agu",
  "key29": "2DpKCCvndKem2fhex8o6i64YrjuWvfcrBJ1QG2i1gUS6ySxijmoZwB9gSsQbySPUNGhLyCDLZXZHXssQnmy1htFd",
  "key30": "DDVBPgihx48VQQFK5ceiXLPYvoBa1WehmBGes8B33zss6Tso9Vqyu5LXcWLWBKBiqRytwDwkJdmwr9RhPYjNQiU",
  "key31": "3ghWcrhvqgmCJVHLnCeurCxpdYy1hNXCFd1jgTeLFMkaUfjLsCZzXcZy9BeTTdKuLHRSSbdr4CSV491sSQdmASzP",
  "key32": "5ZvdresQHHunrYv6dMW4wpTYKeM3qfdc9PrPvEa13UimWy4mX2U6PabDDeG4JBgw3L9YogcjjG9rBxyvYUgNShzv",
  "key33": "evx2tpJJsLYd7HRUk2s1pQLtpki1Dt2FrBRj9pQKEBYL1CFvb2XsKiQngx3nYjM223Bpwn8TQb2P7UrVpZSN5tK"
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
