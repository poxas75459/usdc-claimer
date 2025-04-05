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
    "5VQkg5sAHE7etsESEDJCdE2NKUoJZrp9k1jNooyuU6ZiobMBWhQ3B958p2yaztsD8p7HPiVFTC9cbZFX2NKovneh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vdg2FCuKmFC5kvtm6jhzmtu9uKFzVJhTiU3cg6jG5SDSqZMvo6RPjBRfEnuhRgo3FykSeHwRFGqV68kjYDe6Kw3",
  "key1": "2fcsExYPaxgBW6maKccgCCZvhYePHig2iqN4ZC6ZwZZqFHXB5hM1GfmqYF2qv96MLk2QSsbhr1E5hx6qGFPL4JwT",
  "key2": "3zuc3MQ4br2DcfJVYYAM7KMjUZ5w4LYwLfee8Sye8X7grXs2fqJr8PEhjyLUZQ2odptQ9K4Sx1wrVjJKngnKjuA3",
  "key3": "3smNxDNNkjrLpRtJEAJEyLQmC9zp1FrZoV3ErbmWHcEzssLzK8jaHtEARGSttLgT3S1LBpbFC37eZbd7e9Bk494S",
  "key4": "3oJkcTcu4CHU5GZ7Zg7ydEL3QTVV7fqhqfgf1JeDEbFdeicy6TP7JVYoH52FvjcxFjMyPUwRhngpxspi3QEjwgKy",
  "key5": "3jZJLs5Znf4ucLBQvTN4TpXEzs2t9ao9WScofcpz9s6qQcQJk3w9Ku3QC184qqxu7mCFeJ9NTvdvFGb2JvMWQi7H",
  "key6": "5GbjfrmNhtbB8Vmn5a3oGqVRQLcTkW8JZa7hBXcH8ExMWUhV3T8cw48G4JbTPa8Qxacqjb4iZE1DtqC2ZBjL3uuR",
  "key7": "3NDKCjkwZmuaTsfUDTDKZBYsDFkqF3VXDLE4KXBGqTNVu7kt1faar9n9tPaRYtnaq9PDoEFELX2wsDzaAFjaU6Y7",
  "key8": "5XpkHUy3fK7Rap5b3Wnf7vt1AYS19egNDpwjutsq8kuJoUMkC3H6e4Uricb4PWkhD7P5Yhuv3X7nDFkxu2kqNsjy",
  "key9": "RoM4dRmqrASLqwoainyDmecWhvyYXBYbKEvuxqBnENLHZELBiqF7EBGSDZT3ku35BEd3Ehbo96p1vSLEz5nFjAK",
  "key10": "5XWTUcrVn3QjSa9SwHLQLEYcwzJMMYcx3iRQFwcjmPQoP7EGrQB4Rr2tdNPe89wBwCoRFNj7iYQZpSNhqoZqARd5",
  "key11": "4rZaiYxPhsAg3TEAN6RGiDhSTP5w6sQCUQQSsAoyeU7wknacMs7Lk7QrHkyXTKdFmHhqVp22MxYtcyrikK1rLZoX",
  "key12": "2fk7JY21JhhBuc1RK5pE7Uef8w6YZZp4SXgxngHQgzg5rcdHX3nBXEkHP8KpjCwzs9yfKCYq6djjWNPT5gB7NmzG",
  "key13": "csH83jx54MuGSZRQaWHniLH411bN6w7pswLXomFN8K9nQBTg5JG5Ti7VxvQdpvMA5Rq3z6UDyMMcJNF42762kSv",
  "key14": "2U4thwRuWSRrJ6x9NY7eKuYpJs4kBV6xYtqVCDPSTYu6qdzKiTDT6ku3hNnnwa5DejzHUxrpUQZPr8229aQsd7Sq",
  "key15": "3327aJpFt7SB9tN23GvT8Xfcqb2vXTmZC6XMguiM71bsAZSPqXzRYBajbBUivShdsuvUfU7qcdSG8S9NH9Zi2eET",
  "key16": "4Bgq1XYyy78AYUCt6GX463ooS4VcQjGMc5enZ2XrNfTtoYhhfergKXpJhUAwx9HV5d4vAScviNo7eFTJYf7ChFZg",
  "key17": "2wByNGbVrM74j9cdCvjQTjo5rymXPiJYiwTLSzc9QCMRjyAwWS8chfXxob2QjEpV9GL6SvGV4fBTU5yhzXSMvQSr",
  "key18": "dBVj296E6GcswttyxG6CJRa5wkAMyntEgmNYgbbDacjd8ikGK1ReDjF4PB71iRe9CNdV9iSfYkzrDA6za54XCLD",
  "key19": "3bcjmvDwkJbrNXvMMSt2scSjD45gALzBCBEgAAGRYgfLPPernzeBGoTZz4tzbx3pePop1uBLdFeLeg41vhnkavsM",
  "key20": "tMXZPHMDnCmdyQL5zvaHtFvQnZuVtsZnYemRrV3Fa1RY9bCsgCb9A9aM167aoUYFFuKvkHgkSbhUAN4SyZdm4bL",
  "key21": "pw3uKrNPVMKhgXnFRGYrQDN3imUicWnRetKynQmkNdNT2tfSMoSCVBFQfSNbVDPmERGbGueezzERA3jkaYCj22o",
  "key22": "4PVR9i7q7dbSVpqwGgmK7yjEpXdwfY6HnwPKo8dsfb2d4c8evK722vrofM4KrNrDvJESw2zeP6s9tRfJxDziGhuB",
  "key23": "3xmgQ2WwewWgR2QtpE9ja3JM9WnNFs81o5S5wU6qUcgJUFNL7FiGrJjxsvrYaxitMMEVtdxzc666HhtDujWcEDeZ",
  "key24": "4KHv2W6gnKbR5REvMGZxPQyha97joNJ4PBQC4aZK2GeGRvoBfTXphHCD5NVFGbXuudD5mBVKka8WQwdzg2i5kjbg",
  "key25": "48SSbGVr2ocHLJ8oUSqeq62wVnGwLDec9U3VczXu5oP1bUWBXDLCWnkHJP8ZUUfuFk9mzvnB2zLUdpsoKwPtsd5B",
  "key26": "4MaYH5vbsoqh58z9ZxTxTSAMVE8LuLEruTUu2tS9YiZKGPYZCmbt3CZx1RUdBVorZgDtUmk3N6wv7QriYJfPdYL5",
  "key27": "4PzJh8sUoJCpjDkZD3XJN9gyQKKMhoem9UiXgsb81uhs3DsnTKNfNKdsfWaVkNdYJsLHtAkAsCZYGmkUyJyYTwnn",
  "key28": "3GbgYjRuuq1QAnCvKiqJ4vnhFZwp5q1zpdkZTedR9aB7pgu8AhSXb5g63wC1RqHpU8EcmBoajZbKKS7Hr3kDWHMv",
  "key29": "2MVsBwgpU99CsKcutKwLqJwTfsd5NXxnCnkrG4J3nN3N8vE8yp3ouHPCjpwK4GSef8KTgKru6JN2Dg6WYjhWnFno",
  "key30": "5MFSwGApkP2YSVBktREyMTV74ce6W8dsgnhuAJFCNExoZuWjW3ztyAaT4vwvBZjecQgENpt52a2f5tgkCujPYMnr",
  "key31": "4KKk4zTJHeBMiXLnmXwkTNijyET88vhfCPi2Ge4TUpKLxd4fBwbHs4SNQnCNSBps8hmsdHbD1a1vtagMsXFD8uzh",
  "key32": "45p84qsofzJ1BpPZX1xzeUwXEUQpp3yi6TsXvB5S8eUxTSMtZbhfNU69cNFEb8M1g8Jj6cavHFcXjQwUbX5Y9aT",
  "key33": "22ff1VzbGGXc7a2UEX9XTKTTZiegRN77nTwx9axohxvUA5pYPLR9jhDE1aeG699vrMzWoU7X5mseK3vxM2e22mg7",
  "key34": "5khid1KpqGYCB6QhcpAqKRzKu1EJqxqh37wELLQSHqkXaWLQCLXU5mQ6jXrMV2Eq1abPAskVZfH5dmhPzQSBRc1U",
  "key35": "yr5mQM883RECQozMpQoG1pZSdrHibvWddPVnXe1WpPuiJ3wKeesMracuMZ2UJxXxddUfi9G16A48Xo2DQRPG5eF",
  "key36": "oPmRyLyiNsXpgx4xVeTqyxDP5kGt8U75zTSYqcFMixm592VAA47gMKsbMbc3GZ6T54fvS6FfFp6RewLeTQsEa4T",
  "key37": "4oqNDRxm2vUyYwegCwcYYujFWQHKznc2rZv1RibSwXEQuK5rfgnhK1fvzmgguf3xHFrdqmZeDzDVTCHvVnXptPap",
  "key38": "aVZLk3SzyAFr3LYhupYzvX2GVJe8DBjMfYnRZXyPkibK4RSPzp514xWnV9qzCvWDP4FnY4Kizatfg7JYvae2Ftj",
  "key39": "5xWHvoJ46YX6Ftr5mQnaJrneG9sSrF84NjEPo26mAa852rhMkRf3wf9HjqjSSW7mg8rCQZ9PM4eNMw5TCS4DFzNr"
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
