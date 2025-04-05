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
    "3Qjh3j5CHfG3DreovTPuZyFMPCWyhxxyEsdH5tERf3Vk7JmakJ43J1DeZwzcqjRGA812Bknxii446Wixyk7Z6RJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M51Z7txXRCJ5mXRLGLiY8PDeQijhJVDeEA3J8u1vqhCr5hn52wZ3bvHgQ1eYMtRquryW5gyBk11zEVVtniXEu2f",
  "key1": "3P6pAbcir8MaKq7ieZHaq5wKpAWDzFvxXXqbdNBEcrq6oQhVA8ozLbeV17NHjhyc7CGV83BquHDFHcAJjPB9Gng9",
  "key2": "qjAFuwsorLgs67WfNRwn38mLYgKUdTE6nC7WkQFMrJGQPd2yg86sz8WWKLoCmzxWyHfXpzzBATkKpRWVdTJ949S",
  "key3": "3GtwWmhoZF48FRZVtE5Wk724s4U5nV45sDKLUT2YTDRFEKcjt3K1uko9qmckb349XJTB5MqViy4kPnZem8KRseSi",
  "key4": "Y4AY69VsJ4PvQTfgRWw7pYkN1orefunfbjgJBYxDHUsHPyzjBi5Go2uwEWadujM2Ssgryx9NVSNmnd3JZQAgVGj",
  "key5": "2oVzCqvXXK4Q6yCYLLzUZqwxGU4GyTQaweSRwdTZmm4xQHnw6oq1hcKdiBXe7XZr73rKxM2wWh5Gzhmi1b5Wsy8j",
  "key6": "5x8FpUX8PzJumGKKj36rokN54yHKLts97EsEHPVyTTk7AzU3px26eKoGjApBw1cWneLpjrzhokA5FQvmrmpKXxqo",
  "key7": "56DMS4LgP5n6PKgGA4fyLfT3aUC5WG8oaxxGtkHDiULZHXNaof4vHCbumt8VpRmp3vY5L7ZZCNPntipSv2Jw2mej",
  "key8": "3DPeiu2iDJaa2tx9JL4iNkPg9te9bY5pXpgrH2iDfajryPkFnnFf4DM2daLVf26cj7YmWrjT8CCyXg3XwBoBu8Lz",
  "key9": "492noJhk3SfvW6gXEr3nvGVWQw4xTbm3iUPAy5uy44uVFu4WYs6uuE2anMDoHhpfqEyZsqFSJ3tezFmcindtW2Xx",
  "key10": "2kTmgt9G3EGL47LdeQZrFczgiduso6hEvxDuTPcnSvzxsiqbcgtdEB9yAXro8Je6zsam3UuqpprRWs5dteCvGgT2",
  "key11": "5C14JdaV1aDXsZ77wWg29oyKVeZo4vutnJY2CHEuDnD8pkz77NghaEM4dvsCt8QDcRwPmKaBhRBRgRc2Tvpr8BPT",
  "key12": "3ouXJjjVW18jAPsX5cqLzVpbZe6Z8LbWeP6CBBVWmaKmqe7tgyYqceqAUHVDiJA5cieYQjMMCjHpppXeNwNWP6HN",
  "key13": "2U7R61W1PyTkMWncagX2jM8BmkNSzdrMLT3ui2KW52Hi7pYipJhDQupe8W1iMd5hgWg8sEuth4ruGtf33b2usCBN",
  "key14": "5PyAq3vL9jGs5AGLVWfXeRDYBsrK8zGLCpY3vtyMB73V8pRcNzSS8ZxP7WgFZqVkaDpdrDu9JYC2uVoRX3BWmZdh",
  "key15": "3ptccrCYPGSpyWCjuAB1qHuCNH1M6daqcb1EvfgT6e7J79PVf5kWZ9Z4QRBxYrLgSmCFn6PgHpBvoDTVKXfKboaD",
  "key16": "25oyuNU18n7b3nmLsAErwgwTWj6jpxyUxECyNQJ5Ao9WERkw67cUmficwmDPHjMi1R3dB5pv9khupNZzyzqpfRDr",
  "key17": "2Nn4zAHt91pwyJaU4qUCi4ajHNyZrLbebQEjvQJyuhkSmQwMF522yW7BUksd7VsXFSim5zB7jKHYRauEqegofV8s",
  "key18": "2hPsBzzmrLKkXETpZpeVSHWnCStd8MmvJ2bWHasdDvW7XuKGBihUPL35778waqSpUom72J2w3kZrowuSD2VihuN1",
  "key19": "584sbUa6Bf5KQd2gtnXNsAaDCT7rEUhGdv3gYYMbD9W4T68HMHKQ5PtvNDCgG4dD9xTxdCkTB4TvLQmKdDwexWjM",
  "key20": "4768GxZwVdRKHYHStFfmdokoaRj5LTnAzFfRWHohX7XSw4NWTfRYrQPZ5AWQGueWLN4VdV7T3Y2MtAzB6ZYZ1bkp",
  "key21": "5BzkQmSV2wRRd7axhJ94eqnJPWc1YAtdKJKqkHBNFDpvs1MzwbXd8GHBxqNHjcwapfoizhuRigVWtYxBZAkBxDHK",
  "key22": "5zrvj8w5LbAGAdtMPrQWC839ydTgJg38QpjZ1Kw8e8Q7Jk94q7WrYTVv8TTFvDJALcAaS74rimd1TtX5FW9rsbdd",
  "key23": "3kti7bESL5FZWPqf26UFyAfzSDj8wCqdmWMKRB45YnXHyBfSAXcCbHqeEMNExEdyE6Tg2KUHrXHUhJkR1qi9graG",
  "key24": "dxVx1juEhmYqtfpQxFw3hBsHzyDectipjrGxSToWVmDE2wpL4QdLGFJwVEniJMuGLKUK9tb6SpUKqLvrisFfKT9",
  "key25": "RRGnPwdztkhBenQ7CZH7PC9kG9kTiRnNzANhUsf7T5pBGFxVvVWK4URPvu1AeTx19EWyYpnwBM1EGnCDiZ3v95t",
  "key26": "rfZfUpXkU3cp1aKRLK8udhrFcXEEQthXeYfpPMsZncJ4SThhvWPwbY9ZciEUe7Mtnn1Ezk7v6J9xmsrRy3R8aJa",
  "key27": "5d6UfChLzDzQQEDAbbXqKY2aqVdirSyiU6XJtMdpdnQSPcnkGBLtVDXpYrCkriWbLVLkv3fW5MvRj4jbxUxpEpu",
  "key28": "4kibiRZBo9UaNmBpa92A7ppKh5cASucXcNBxRa49uNPjyY9hE7wVVaKjx9V7tW1rb6Qatj4RhSFAWi6yos4BUAp1",
  "key29": "62MhYH5krhzdB36pKW5xG3PtdbN1rKL7HabsMRAiDgV3J3tzVNoiHk1z6He5sSTS9hwe3NYxuoveR1RP4dea1D6L",
  "key30": "A8NAkPSCwbwRKXZyzXB6h6s23MzHjQq7YHR3zAzJRTzXCYcjCEqva9nqZ9QFXsCgfffDDL7XVM2Cd1pgCjAs4Ji",
  "key31": "2iWNWB8SEYDYgmxFwFpBLfNaw3dpv2tDBESNP5QfZcZfan3GD1f3sWoLQcRzLBhbEqU1KSQjShy3bmVPJMtadhPS",
  "key32": "3P3B9qrr9geN55M9sMF2g1EksZJ3xhY8KrWM3fYnxFV6UVN3NTLhsfaKCu7xoj5KRMgZyooTLn6EST3EZ4Vb7kC6",
  "key33": "5kPcmeoY5byVYXy3R4Q55LqTgLeYAFhj9twbBeTHNMo59Zg8MQZeBwCfEEN5osU4F7Q5tRyGcuBixJY3ZwvVK8up",
  "key34": "scdcofcpcyM8aLF2Z5dCC9CMMSscpKZ7yFd6jh9o2fRTNwvTECsxwHwLKUZvHZSWEz1LCveqfkL46jydSj6ivGF",
  "key35": "4PVJosam4Fqo31V6GCZHJHqrdQztSGXbHh8ih1UJnz1G5Se7febdVPCt7nL2y1S7ygAxju7V71RSiNRMs8xdroSe",
  "key36": "3tiqXY5V6ERUSX73cqiGAAHUjwDRbYzrJ2osRgMM5sjctpqYdhRpHhE43CZfhN7qtHUwxMiHAzFqi1KMyjh4qTN9",
  "key37": "QBrJJvsBsc7G6kx8zWM7njob1q5UUSss6cp6exEoTNCcNYbnT6E6U2jTa8Z2MHsXTnSk5keDmKtDhNntiyPegGS",
  "key38": "3EB4vTPCxezAB6U9v7GgtKCQwnpJsjn2aK1HRf8ZMJpdNqAxX6dvUsoih12j3QfeFvemN2wj7yoAHEZHPDdGDqgM",
  "key39": "2LFNH8vriwwQ7h1rNyyysn1oCL41Do6zd8jetkbWcwQgfzVDTpWMo5F8vdjj1wcJbSHF67aKVaJrpgNwmuFdMks8",
  "key40": "3TWvNVvzvKWLScsnUhporKG7Xm1QHzgu475d5KFUPx2ScrXKYoMKdrUvpkjB12zpUBqhdHL1DG9yqEu2z85HQHXk",
  "key41": "3mnH3wS1yKZru5LGvP9TdusEvxZ5SBGBdeJq8totN9dm21ya6WFWkcskQQMTDAbArX6gAVbC82nNryS621zTucRx",
  "key42": "4NXcXiWxxCd2GFoFWd5JCxLTo9DXNH2NRPQj6nPEjmn3QTo4PLYjWR8dBzUA7hi5FJtQz3gWNGyvaxoeDD9F458z",
  "key43": "5CDDkuMUcui8CFJZp7CbSHnBv5wKmbfbpQX52v81iKx766xd8s1rWeirHphp8rdg9WFPzXvNRKxtDDQpvkGNyXEU",
  "key44": "2P2nY89whjHMFsg4F63JBr8GnDgTKzeawQvgmo7oa4ccjA4CfSzJPwNpkSQXL5BGYgopJw8rF14he3BWYX1UFV89",
  "key45": "43zxUgNk51gWkHwkpGHbi71k2Tc3sbLgTgAK3YB2B8Rby7G3mSoabEffpP5nJENqvR1ZxzMJ2fXpvd6fddTnShEW",
  "key46": "Q2qWcy3UorkCzKFfoF9v67MKKPn3mtccawk1EDavCADsivJFJqMhpfKBAzTnnz21KzLsFVptzXBxhuTmrv3osPM",
  "key47": "XY92wX8byEqbznNLKHFQC4p5Hk3rw1r8tJB94RTTEEvbsuNMPH1QNCmvNLfDr5P2wHEHxFut9WSAifzq5JHse1E",
  "key48": "x5SFroCDs4YUXCCZnMVBQWisxPSncejgGA53k3svuuUXPWJJ64XpBqvzsNcHSBxfqcTDpHSgv3S5CjG28ujK6uS"
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
