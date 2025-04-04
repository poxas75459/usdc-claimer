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
    "3UEs6Bb5FjvxVXojkdexEesBr335vmTHVSVkCABJ6BydckYPHRniC25iiEHbReeoNUo1pwU6B2Bu4SKsLxdQrgqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pRnTnmDzNfM7PVTmQjm4D87Ahm9qirWPDZiWnLu4P6eVZevpjjW2FMJmaSD1ur6Xtju7JmkipTRBuJeueoPwwQ6",
  "key1": "4eUmvus9t9K3QHX4YPH2QJxBBRQaQF3SC485ZZgzio3ZJfCTEqqg5FpsBx51CAiWtBvqfs8NR7digPfi4xwE9UER",
  "key2": "47Ujq9NG2ryjNHoz3YhdcySZ1NcUtj5HHX2dZ3B5TSUQ7EsYut86dz5rEAyJSoPgLyQZTpuri5AT6YU4Uv2xrgus",
  "key3": "4FWmURt2e3hJDBYNqneGfn4SntDzNMD7o499QTZz9ZnM9cSHPtEh334VgQPi3268sEouusMPeqbDa1aPrjhzu2gq",
  "key4": "61wHYRGrYyJycjuFaCYbgoKMBRyqgqvaWqCT34nQ8LVKDNMmVnZTEE21tvx3VRP8SM35D94hK6Ft1BvYiLmhg4F8",
  "key5": "41pQXDvJQy5mnsNQa8g3u5br3tCwWTaFyyLUfz8rU48eBdYKD9qtS56xgLE5QZLE8sedcGPCpJTnN84i7ANA8uYu",
  "key6": "Nk9GKJqpQR38ncpmVqJWfkcn7RBFEFTDiekvFM5THGUG8aiLRwMyRnMLRr3ar4uXFQ6X9Bzx6u1bzCvaQ5emEVX",
  "key7": "2AcPbFjMZhRvHgVnz4HRgYR37H4Vrbx84GCnUEFN27GxKXWixysRXWBpcEkrFCPo8FhZURQpXQr6tj8dyWcijv4f",
  "key8": "WGiF1iDzFuYJNGa2NtVhnmrUaAJ8NgrGUzyV1MAWujqHnuQESVivFCSM7YdLruxmE4jD4A2r1wsLxcS1fMeUzrL",
  "key9": "23Nu8obJ3UKv977SASbttPxzuTZqtpqMYivfBZpZAXLdmw8mxTZ8GSr18iF6osEHkpZ1wkDk5YdD2DUMCLMdA674",
  "key10": "5CpphgzoANRbrfTqXaVifEi3cE7pVSuhERRgifiGYkzzLnRf5HHSjBkdSaUZgJAqBek1Kfyijdf42BzSnpMVCq51",
  "key11": "3XKCPDrZ3FkCDFezNicRy26CuEvtPp1hXGUEwdYuvqTEoLgtdky8oiVRvW3CVEcUTorEBxhm1YyZbtJ5LNHJV6ob",
  "key12": "2NbcfTc29s3j47epERFS6jePm2k93nADowF8KoGoUU7meii3CToenqAcjfSUUrDpG9piL6RScvhccXcLpw2iYuRF",
  "key13": "3ASq9D3nBwJ4D8rJ2nw6TLaeeV1titx8MgJE4fUgiAoF5ctYQmA32V2Q91wjSeQhNwX4V95V6kKxxqiboz5cKiwt",
  "key14": "2vjNrwsKGW4Q1vPi6t4aNUqZzgKvnZK3wzNPWCasFLUdYQDeNMArTuDBdigWpS16MyHux8DKe1fj144MTawUoHvg",
  "key15": "1fEgcvytnicHfvBUjX5aTs8JvLj4hKxTGTz1d3rkYLqvySuaBkXJbPAVewSqtLRDcKhHVTK3k7jRV4EWQHnzdLu",
  "key16": "2CDfzKnEnuf8pwQCa4rve5y5b2Tpnzjm5UEbWze4pTwhoBiEkj2UDVdHye7KVGmaBwaQdvMk1yEJuq99STfXvcwo",
  "key17": "3WAtrRAg7TJTgrUNhKF1aeRKjXfALpEFa5jW2gT5Lk9mzYCKpPrDnpZAd45qaAUnAUNUMDsRvPctNeeY3rp24BQg",
  "key18": "4gUGLpRYRpQkJwqBJrhn4nxJH5Sx5v81X4DwkL5z3ZsCGqzvvmeEucaqvB8avJtBJM95nzukWHNJbdLM6aDmKiwW",
  "key19": "3PbVCnfEJVSB68TYrroNMpRzikpnKeT3u1RPwn4kV7EemKLxHP5kXVCn5xF3MSZcsQvvegGsRbmz7aXv7vmtyUDq",
  "key20": "4kU8oFcfZMEq7cidwxfg1B6LFPh5uvsjMLDZMDbZgeuK4zHDuYcc6qiHpKC7f3deup2XtzwPPy8V5h54p5i6757d",
  "key21": "2uroBUgfixtggsaqwVMTmTfVaZihDwkg5FieLV2zaLzPujAYCsp9QfSEz5CbLHmiUQ1qSvSbP9xfdvn7HgTCSS8U",
  "key22": "3nqfrCttYtg6SBQDWYucvFFSwKM5jZCBEzL8oyuMx2CZNvpmAVRJzAKab9zAao1rrRcupKkCVptnrQWNUdvwvBWD",
  "key23": "5oTHiFGMyWkYp9rh3YAzcyBe9Ssa8CXdXDxPmpxgdyH5zcVemaZZAs35ffHfqdrHnVwKWoSAdHtusCtdVVFzUBvu",
  "key24": "3n1xqrKE5Rgo7QK1wvKRQVCat3nPvjQuxDm6jQ24Mb44Yz5whH8Dikh8iVdfwhXKGLnxjX3b8TxgxBKbVgWT2c4M",
  "key25": "4hKRU9LuszfcofhkhX4DuHy5M6Use2KJWSu9knCK3NPeBUxfvKtLWu1wWpMLj2iGWeRbktU9rtsTzp9uDU3bMD82",
  "key26": "51m6K6kkPaizZqcqXKoEvmyQ6L3CBmrHPX55KmchLH9qmN7iqDL5fUADfJ7VqVP9rwNgreeWGKwp1chdgFoDn1rn",
  "key27": "6V1aG6bWGWH7wR94gwMH3w4yUopGtU6ci7CuoorZ8Fy4XptuCaB7KAaxi5U6ch5MNetmDLCfhBFnRvCw1N9Jae5",
  "key28": "4xrD7o4ofLGXJKeD6axLb1ReA4pDYinLzPhPjsNYxf4UdfNy8uE6BU2eF3bFQfU7jjf3wiVxf3ifJKVQPKQLY1ZN",
  "key29": "3bNjvBPWQFgoroBvrmiabBHWok532QsLNMn9XmZCNnHFgV4H1vXrtdHGTGHCgbRKdZTDMhvPMQqGmhi2Mr97PYhA",
  "key30": "5dPgSSVSt91VQGsJ8cxS3pFB3qqvmx1yfTnNhZJ2zFKTyPwEHSVHwMQMconQsF32Js4SpzaMeQKzJRg831qmVwTV",
  "key31": "3CimAtTcRpJC7x7j8vFg3fvSAzX6rvjL4vi2a3uMSqkX6fDPBk3A6tfQf6EvghqCF3Y5SUNURZK1asQpgoHEGZwc",
  "key32": "32cnWUN61nVSbMxBvEsbqSje3owDzTyCitwMJmw58ni6hzNuKkrSBaEuhVJZ6HmnJnhqT85a4RAUApEUMbDWXdzM",
  "key33": "4DNfGkRkGy3yaj9X1RMSAMSkC7CMbhumufaJePk7vYMkXgDAhpyqhBo16Jg5d29AkkJRmrNgAzEtZRjF6ojfCzaM",
  "key34": "34dDHryZiNbP3jd7HieKyEi8TvAoaP8TFTuzB3zphf6ToP5GU7NU7B4bmnPbedxcJGH6Rf5MDqadBJGmWcmF6yKi",
  "key35": "3dy1CSK8nr9JjtqcSEF22c4XRUtU2vwREp9rpPHGxdnyTjrgLUKe6kBMxzgpRFJRvfcarGrRsXv3n7KWCNr2tQYc",
  "key36": "24ry925ivPaRM9HteLsJxwLXiQTdjT2nLnE5rGyyXMeuePB2nPqc2JEbG24aSGM9XRE9JE5ey3ThdECf6QLGHEsu",
  "key37": "4YZq7kKgY7V2AkbwzFN77m4fKDEzmf7tZ7aQVML2E3FZvKnfauiykgozoDps9mjVgh3EFtVnjFZ4bEb7NDAFrQcc",
  "key38": "5FNCyA3vTDKjSXXnyPBiW1iPTajZ5qTvBzXhNRVyVT7XWajaATLKhgQzKadjjxpp55Nhd8uwXAK3jpLVBnsctnPp",
  "key39": "xPbsrHkbx1d7bvBaoJka6gbr9LrgG6nXhq4zCykcccqwjjC7o7qyvuwSXR3MPX2Z76cfiEyirbeTQcxqE853Xrt",
  "key40": "5DSG3MhBxQsxPsX5ahKVDsYJ3Wy7k4qd9ArVgixHoMYY2sA1m6wpWX5koPQW8SiME5xs2R9tdmqLe4eJBMPmrXeZ",
  "key41": "46eczrXQhvXk8RsugFa5GoJaXgeHVQedJVfhPZ7LchSxmoqwTM7Kq8ByAFZWnXy9USvh7cSL1S5FydaJ3tviL83A",
  "key42": "3M87RQMaWCzLAKTeP8FYF8Dfg3ctiFDJgmCL6hDXWvwnKyHg8dj99uMu6azcAPd19sDmjWky4EiVLme8RaBoFpDz",
  "key43": "4GUrp7DUgkybUD8PWHuUPESTtgC4D6Yu3E2vYYrZgDy4QR6xoxLHFNXmWWWmqRA4C41rUmf9STtdU7cUYMvVXNdU",
  "key44": "hVGM5rXGyabknye247rnrJ3dVs8JDaCkNzEaZCMmVgSvPGCbYbjFmkBvdjQiopmHknjnciqggyoPTzuVNDfWhgu",
  "key45": "599VMbwnjY546VMbzfkxWkfnQepVcMjmZiQA6NjxGCGDvs95LHpfYdKGLmg4VaC3ifR78opyEDckNKWSvZYgQsVe",
  "key46": "3bb6pj4wsH3whsJ9JAcS9jtobEhtUoTYdTnCHEeX2MgKPXevrfkBZN4rcdfzgQhS7zYrWkhM4kPb9myRvs9KUaLx",
  "key47": "3onBDnRVeGytWjMyXMbaEnS7wAoKvn4ADNwmaLGZ1Ze7eM7TdLFYJgfE3Dg19Fs6fMyi4LamvANdqKWKCShHxqiN"
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
