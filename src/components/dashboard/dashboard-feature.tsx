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
    "3zfJxUUQL2FDQseuNtzFt9XnSUyYGmRia9qKJtA8BYg2JsmPgkcf8vVJuypdhQnwxsaDtyTvTfWWGY8A3ZfuRVdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gE1AinAvdTDjPvkNYfwdpuuqdJdghotSKkSozxN5NKazZBXAhSrpf3EnveNseYeU9rKjC8E5gvuCag8f9eQzaot",
  "key1": "fcrgTXLV57kwpqwT3mYFz2LDP4Y24Ntp1rvrbKGi8RzCpr8vVzWUdhGGpMR6NpEZjKGowxRVoMHAFMpX145b2vh",
  "key2": "45Jf5kWuR8ryNAoYKNVLts6HiM5hxbieh5TvekveSDDjxpp1aASc7FjNDCv426uVJ4bfCHcugXQ1CX71R1o2gWii",
  "key3": "4mXi8vDcciH3RR49dMZGPeP9noZA93w8QXmkejdtVdyi6V3ckXNCKMBNejdwuXzAi2nK33s7TBXCL1LgXk9Si2dr",
  "key4": "3Yimeh8h96Q1cbbYvJReNiPhJDuQyuKmndQRwnHcsn8kLebW2vAjABdyttA5HKEY5T5u1eDes6dPgtAZBZ4BN58j",
  "key5": "3ty8935V3MRKCbYxnJS2ryW1HvJU7gyBCDNwvpgs9PMTxCEDXhPShSYf8FhJYnjibiUoPYRXDwq1y8QCwwHnfdM7",
  "key6": "hAuM2wKVvk8f5fwyFJiai5XCNLRs8KeBbdtHbrHwR8rMqc53eGvd6YHrC6GVapfCHMtcGPGXt6bHtwm6RxGCm35",
  "key7": "4PHUtqgRHsXYFN5NSpHrrKAz7zRTLhh2MCJzeyAq832xYjoakcdrhKb4mWeKhegL7VpK2Wpo3HT4g36aRsfqk8L9",
  "key8": "21zu7ZsFA8U2rtPBbJ5WtAmcLpqh46QycM3rsrUpiBpSmTRStjRPGNgg7f1tEjdYBrECdif6embx9mXmpHccniaX",
  "key9": "3v9nxjooutfEeQQGkYvLTGrdKMdu1SLXhWAdDEW7EMmLjGaVuSxBhWfCWc5vD2pN1kQjnNQQXjcd5KVxdiRgnUjX",
  "key10": "2m94rabCSrb7Go4eHACj9MWvEVidoHHiLozodmgHMTdJH85T946jNHsFgLLxrrdZaDrSS1nVgXbThSAQaC8PFtn7",
  "key11": "2NzN3SDEJwCrXAmUNQuF4rQdbHxkbJ68fnysTi16FCCE5wCTXqtHqrtu433fym2RXcQgNJD6S5kZPncaGAaxyCgc",
  "key12": "4iFSECDgDYpyTq6ENEW9A4erUjSbm7JSVN3sNBvPnHsHPuemHgk8DLeKzsqwAJ1HwxQGPvVgHjQFMdHfJ9ai2kEU",
  "key13": "25sY5psjKHBEhsjeimhk3sMvtsXD6XHnEuEJfCxRAzcKTaQydzust8dyWxucRmw3tkzqHNbHX8ZRgkSASPdx6h1y",
  "key14": "3Nf2PqHBU2w9XT6Q8ZVUxQkX4DsMmF4XFmJU9cA42c6BFk2SQy6UCApFijL9Fx49xwXKqEk89jV3YermUyjfTh1L",
  "key15": "5GDdJmd1C6h17Cc57StbAgNqxuaNzZpgnvQb5ce18nJ753MndjkJ79VcTSrL5QiSB99rtygpi8SqgkbvRdHAEUSP",
  "key16": "5acJzkzkB5QVQLzKEEpqHsS7Tdow5AyFUh6Pk9ectV1GePYGbwRXYVFV5PVx3Vhfdq47W74fdnyHLcsncFraGjkB",
  "key17": "4qJCyhixmEcBQxGCuEqDEzGVo1KtaVi67rmikJLqmyuFY4nndtGqLoiXcQUi58TuDUrUEYhuoeLb2RZMgiezM9HT",
  "key18": "64b78kr6TmH7jz99WHSE4tUZELffjaFKYwZVpSSFPSkx2s5VuKH69CiZ8U6PVkkDShL8t1DMAToEvU1KZSpf9cj1",
  "key19": "5VfQTfivVt8ABeXtfbcp1mj5asuDmkoX2YHoeRU3p2unRYkWW8NCzGHD4bKsbHkqGa7L6TJC3B4kYcMNVYKggxB2",
  "key20": "5M7Egthw5XodPmTRTjS5WeCKksHbuoWYor6YHqr3KnWC1KwBWy5vzWehC14ihhp8R9gsarcJNuSUE7mSjxAMaxeR",
  "key21": "5h8ApYBLcgFgN8n3YhFxNKqHpG7hWM5FDQDuktYKCGyFRrNvGU7d1B8XKxQoN2t8goesjaC1wtq66B24eAejTgZt",
  "key22": "5SCiJc1EkMaTLtjv7KWHjhsYFvvuBAVnkzeJPVFU1xzihhBjJqk45PsJVMueMTewkZaq9pgCS3nTXUCZ2sFtsjxk",
  "key23": "4pwzAJXrgEpZAJxuPt6rdbQuAx7MCYvw8LyWeAi6oYpY6cRsyTGhtxeaVokqm5GdHn4G3sBcQbGZcQ6h3sinHvqC",
  "key24": "W4JAJ2UnsyszpPcaQQKimvg4q3r7EVFLv4dLCxD3TEoAsHhQxUtk3tNrX5KSZNJgK6Leaqbf56XJujw7KZUuv2g",
  "key25": "4AVEeGPLUHhk2eBcjcF48FCxzf7K3W32TcGHU5FjavB7rUacxJwPbV3h1kGP9XErP7pxBDMkLYNdTfLCpZkk8cwu",
  "key26": "4juvqQv96r9FrvHUn65etJjZiFfXaRraEqfzEjVSy5Ha2E983fapJx2rM57YUSJi4wZYBPm8NSm2CdCkTZrj3dQe",
  "key27": "4ea6jEiu8uGRt7UsPX79AJta2W3h1W4gtS9WAJcdE6WJQXa3RnYPrdSDjzCa2X6eoz79rusUKhe4kjbtjbp3qYB3",
  "key28": "PXy95VeBVjBM5AXhCKiuJAMaiX4oi5JRzqY5q1fHBezjDj8SoMuXBHYbhKCE3vmM9Aa9bcAoZ4wHYMpu64tKgdU",
  "key29": "3HsPUKm7sj2NRCmdK1pA8yyAqtyhfUamddggoBopUXSzvjoTTLqL22EBPyKCaxXfCvvwLc3wKJVxhb3uHziUcbkj",
  "key30": "3uhPaCbrTMMGYVCrGL6ZhSK4cjwCCEUbM8pYnvPRoHazDSsDiTuGrvJPtYPNn24MBa9Wsf38GKhMsryTb7g5Eaah",
  "key31": "5yk7WgoSYrGN1Z5tAci2VS3hq3rdrJnPsxkhmG7koqQijdmSKkbyoUkuEoyKvYGghoR9shEETTBosQfaZKdzyzYJ",
  "key32": "3e2ejrbWCHZpWPvZMCx4ZLBYqquEeVjtdNCv2x2wjenHTGbWtfRT9ocyoT8QcDi38TBSY9hguePckG2JPHaBBYmL",
  "key33": "2kd1KSifPm8FmmUG2CgJPF4SYVrdVdNPRyKktnq7uqhgz2h4Hv9bG7ABvHgR241fHTPjydEfnz17RHfSaUcJ9krF",
  "key34": "CDiZChe8bnTKPPtQ92BN1LjnLnyiz8nmvCrF4ggUDuMEW1buFwxhkniKka692TpSCiQgQDZCkr6cBx2L7Sbe9cN",
  "key35": "5gntrPeQXuVEPd1X4eFiTszXAb7RB3mCkEnYTY8YerQScCxs1J9E3mRNfRbRtKMWbcWaGks21NuBgbDFWH3igzsu",
  "key36": "4LQhFQkxTQGeoVZniS4LaTUp3hGtsspoepvozkN9avcxVBPAef5nojKBBFvhevuQFWJRiGbCBqU6hs35mKVhRjPx",
  "key37": "4oPSSv6mbesFGQ6SFQg3pvYBfAbPFmNc2n5ZkuKi9pnnV9Mo1yTVJP9zf2QyC2aCKPUG12eZnPP9ASR4qftU8Apc",
  "key38": "W8BRDCQt9PYzhPX2PzysNDFv4KLqs5dm5HhCXzC32wFNqN4UnPygxrVcSZkT3wD7CjsKeit78C8f43YRM6iuAmo",
  "key39": "4f2KLA8K756bgRKuYKv2C2ScvqJe7pv4jpVYFwDESCjNEaEhtxUa4yo6wgMHn21j4mx8wWsvMXmXX8XEaf3XAudi",
  "key40": "2hpBRHLs8kq5DKbqHrxhXWQ68qTuwEqsjfPsq7fKGKGeA64fTTnULcMoe7UsHdKVgLq5486H6VB2TRnp3LqNfCvd",
  "key41": "49D8UX6Da4qZLshxc4oSL64UPpxT73y2UK6jy5JvL8UQoTSA1CH86eCP3abSTDBwF2CvNovEkcFz9LDaDiLUqJ4B",
  "key42": "4mSdwURK9UvhAXEK1DSqGp7zHESptx68B3c28MbEgkuDuuXpy1ckxQEgfQj2dN2wn3sQJnL5urTWGQoDj93Q1e7T",
  "key43": "2LEqDHbBg4gExWyZhmxJBAx8XD3PTEmkN6ApFp21rJmnoG6utaktHaLvFmZmLNwucmXt6PGeTAzQQFpSJJ9kLWsb",
  "key44": "5Aeiz4khNfThrfzhPoW8LCYpzAafHqLy5izQPak2878xDWiKUsadWfdE43bSq43RofPAocNMpgYMYjBsVZSKFPd8",
  "key45": "38fGu2DHThNzxkZoWsWziQJhePvbZehPhqT766pjv1REQS7iXAdFhoHZQvc3zwsJhwcxmBrcKyW2XUjRNYo1JomJ",
  "key46": "3s83NtB6aMKnt3szYPZLPjHpBfksxxNFjiAjPhHrdXFUdDTDpdDEnFeadX6PBNXcb4jcPg8qXNWRLK5ZRezCBLm2",
  "key47": "WZNepnf24jvrUp2xb2w2Fm4cRrkfRSDYqTuTjgKhQCfctPerYzWRVBV3VFauYSzXLj1RhekUepcgs4ryZvxo6km",
  "key48": "5nnU6EL3oyiPgk6Da9ShMZM2oB5LMuNt3ET7yPf8UHwrrAooKA7BhdPFQhhLKBTCPdpU2uD4YKrc6B9B54YLgLZo"
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
