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
    "4w3KU3VDKS4tSg24TLtSLPraBw7ALw9yK1CSCfSUJyRimsxo7Up89mAWJqeRszfRXCixyA1SbvnQjzBCCMFgqDia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRDU5zvC4uy9NGkWjz3r7cpQhDfi57GV3Sg4xFHuvgAjM1m1tfuKvEVHifsagRpuaorwMmPT8WLJ5KnDYWatvYd",
  "key1": "2ZM4sAqegUqxJZozWUbPWxfxxvtQJcr8E4vP8BeGtgukBKfMM7wAQNWQnDwFkGaAkdiCjRauwmPpNWoKtMs1YAnQ",
  "key2": "4kqHK2M39yXYB1kYLDgxTDn8GZSMxUgto5YhMtQSR62bs5UqYuA5ib3dvWXK7yRbYN45QdyteMvPtZ65JTY7wLG3",
  "key3": "4JzkMMB6vgRuDNxmo5GBDVoNs9KKXNjhXJL7Khp232R6gGEAEQ8iZYAEA9hvzaJwhMaLM9WSrF21jTC3VvguXX1W",
  "key4": "5aVaEeBWQAHFxfLLB18wTVhnshGWtGZGxWyQhftHZDFcUuDDX7pAH6mahRDH8KZHTk2cmjq6xvaZacBQPrm5mmdj",
  "key5": "M88sU4EY7T7i6UX3NWtRm8S4PxPDz6AR2c3qVFZT9HDwWBVJ3mKD3bFuuipkNsHvtWYoU3qJAXbKkaU2xNd1sC5",
  "key6": "2Sobxou33TakRTXdBXMQKokdj3DXWPUEYgjKNWAggPehvRe5SYQ92GfvgBLqKZRCcmFQWdNAfwCXciwisrdpxX8",
  "key7": "FfeV9W8bH9Xxp7tm4jmXWYq9cqy1mkJVu7XcZnA8vAuZfATjnCsTg6mRykrxdH5SVDog2um3U2v4aNCpWXUXd6q",
  "key8": "2AmEQitEAeTyMVvAKYpsKgvRL5iVtivLUqBRifW7kMsQTyqTWjdmyNFLCBX5mgRttc26FqUPQ8XoCL8SrHLTGkkD",
  "key9": "3Ga3VSTPHRNTFJmHPEubBE4CHVcJvPn5basc5zyxrYdr2jUNpYNh6AydtxCGnkJUQ78W34atsXt4DVPsskrUqSCg",
  "key10": "3fnJRx132i1izArkXLvn6V37eYjt9TVbMiDcVfUoN2GtZPiwRvsxuSFJWdH3AJnhT3vmeWrdngYTMBekxDcyDxa7",
  "key11": "4jhjGr45DY4D8mGQGYzduSjL1mMrtHnExqoqG2kMbxTHV35i9rispPcHHgG9DtQtrmBG79n4g7sZXWEev3Lz9gKi",
  "key12": "3Whtvsn2jEyyVpsvtPqpAiZtCUZnBnrZfs9LG9hho7imcbEfZLySVQdxYVy2o5UX12RJv56jK1wSfoEFwFRKtJ3J",
  "key13": "Yhc3gejeWs9j4sE1YVjHavNgNbdAJfQN8aaSXngoE2DyNXNLtqpSGTBDAFv5BwvzfHv2HGd1F5wYf4gZKHKcUZB",
  "key14": "4ApbRFEwpjT4HDfBQnnBtAs4MxQZm6AAW7NHWTECdWegp9avfK7UqsVLZgJ2QWWF7DgB3xXRg1nBUN6juybDwXSQ",
  "key15": "TqAr3VAHwTLjnoKcEjo7hJoKGctRw3s4cnRbAuKN5EBJwDG2hhYqSZLjtHFktxkTXtaG7gEQUr79tfqAJ15qkoY",
  "key16": "3SCFy9zUaMkKN1emR3Wiqm24RMLTE1QE79spYAg5ZCfjzz5TyZ6P6RyypEJCsvCMedrAqDMHNcqk2VR8qLN9RSt1",
  "key17": "2Lwdc7CntcE41zJMtzx9MZQkosvMcu2ACNp3gtH73m9hfCSDQ6fjC5oaqKkLQgwihuJNX6AYkvHM4fKVoYRAP7EB",
  "key18": "5yN6nJKCqUykr29bTSiZTBQLJwpVsEMYzoUqQbiajT1Qg45cDhN4KiLgSuMH5TKFCM74XMeCpcRFWyofpsnocqLk",
  "key19": "2ybFVdkww4KnaUrTsRQK3eUbysiDpGP1Rybz5xGzfZxMLa2vmNDgd9AzfqsQKNd4pKVivM3tDX1YwKrjpm7QdYnR",
  "key20": "3xMmFd7qKoAixMA7VqsQdnxHKaXZjghmjuspFUdejRZYWVbKzRy1HDSoKuFWGXTfHWcynLjBjfqFiVp3ppswFptm",
  "key21": "4EqyxFHg5dAjWheYR9vX3TD57LG7sqbhEYCiKciphXfjBvqD2aswebY2hkz88jWXmW4b8HqJBSRSDqoWiYmJAzZ4",
  "key22": "M2Uqgb2kgtDLuELWAeCg2dQL57tTJNCs4qHRZJDecQrXoDP2Urp4zsZdL3zZbkcJdLfvur4NH6isWk3TFTZ7DE5",
  "key23": "578R2dxpK2gi9BHv5CrUVJ2sJbz5BkHwTe2MV4KjG5MeNLiNt7n5QLrwY3NHoEjZqhedhCuuRCqzTWW5CxuZLWXB",
  "key24": "4MKopeyXcHZN6pmmEtWeCUzyrmCqs1P3S2UBgc6wGsTUg6o2PFoFG13Dynxk6YC4MkT4PqoEwUyRe7nEbWCCLKaw",
  "key25": "3zSF2NAmrrSaUJvEiQEzi2u9y63kbgSfujPpDvEMbLPZyBTZjW3Fso4zHUZdvxCb91fKRhFNcQJBU1yFHjtLhejB",
  "key26": "5is9u4W9y3f44DVyMFz3ojzzZoyoXxnE3XXEq2xK4XmVBSst7FdkZ5Yn1dMmbjyp3aDASZGtkudjm6MrCV7at2Wq",
  "key27": "Ae5Peii4jzP4UgZdwdjZstHQ2rnWLzmAVbyDVEjgbhdXVPp7BXXFUgCGaih8RwXw7Htdak3YCH3Aj3asvGZgog1",
  "key28": "3e3ZGULXntCTdpKptgQUnewwkZjEFErqE9fUFq84b5rb2ZrGSBzr4xGje3Zimq3zNwuxeJMVH8NdjP2vPoSbtVj6",
  "key29": "5odwHpEht5rz3ZX469oSR8WBZZqEETsLnhFKRvzjg28K1SpTFY5AuRGSnxphWhz8G4KzFt8FEMUXZXxeLYkFmQCK",
  "key30": "64i2wQK4hmsCymYP6qnb3KuRfMayVTBVX7J7gLo13L8ZJZTH8CkE2UjDZm1c9LreA8KqP8hwmCqhLncVxYKj9T9j",
  "key31": "yhJ4xYToqCAkN4HW7e1reUxJ4HUS3R8VNEQFCwd7fpMNkpmmrsDcXY6N5Pxt2uatZ1DoLRLQTFxk7Zpfu8ALEHm",
  "key32": "4kw3CRL1FdDLmNcL1ESSf2dvGCCgS4EFSFxGKFtD39BKMoVx3ks7j36AwZ9x5DdQcw2vsEBMRoFksndkfkKKzM8m",
  "key33": "4FMqkSBcKpFpPQMt89VqdaWSbpHmBDb26rccqBrdeTB8XqGdjHAv2s3mDzJkAgNAw5dxJAFixDzN1fhMqBsu8UCX",
  "key34": "e52t79s3wLkcjLGDGodoGJfViZjNq3GhQt3emdSoofvGywg2JDDpvV9WPX6tPSc58mADSh2MRJwi3yo4MeZzjQR",
  "key35": "A2mq6DhTmCMkwKW2wDSfKKN1NW9uJcg9JBoXHbm5W2mjnoQWhzyQrje2K7iFLpC9YbvwpBsAqw6PpJq9ncEy2F4",
  "key36": "2StwTNKmUK5psbNAjRozYLk8bUMTT73GDZmmD5VHsXnwzB7sM4Xm34UJn9qr9G832vVsQK3CD7CmVSAHVN5Mw3xH",
  "key37": "51cNSUBrrCp9okqUH5KD5vu22dQHyRLLW6iZoJNUnJMfoV2WRAdbnrck7h9UmEWmC4mianaAcjAnFwczK1R3VgvQ",
  "key38": "NUDus97uJican7VGYbCunMKJLNRJKfYH4nBrrWkeGzk39rpCWqMnNB3rBJJEUxJG51LFDQYWomNCX7f8F8y4MWW",
  "key39": "63ZPpSrJebzaJJonogxRspc9GmnHWFeUfE9rEEFXi32dLqShYUSxjeMYz4wse3Ln1dXY2SidJG9y78T621rR5PKt",
  "key40": "y12k5izmWTXNSeRPaFwoy8khysFpBFyhGT5pKB3aq4iRuHR4UTD8itrq4tE1ddxrcBt5tdiQ6MfKQUhiFUU4h7E",
  "key41": "H3YmkpQ7inomL48VEQKxhPWfzYJAHj1hs5KsgGwCuH6nfMTgBaCc5Jyiezf5xWg9dVYwp1MV4VCT9fiMukNroRb",
  "key42": "2thxrH7P1vR8tGrNWu38GRnn4vHQ78LV9XbcLJdestCEPCPPVY67akSvCXXpnUN57cJgP5RztuBARyLA4wXazuFa",
  "key43": "3Uy6kPmtoDDi4ok4nfxsENN8v8Nm7yBBisvuHtpksTytpztDATyq9jT22oSnhR9GQK5pctXXtbjZcGDtKYBHdNoo",
  "key44": "5GyDazcEBsTf5vTM9QW47d3STbDXYXMynixXNazAF1ijBQWL2Gyw1GYSEVEqXsyQ4Ry5cZaFxaNB9QxCXYDmRThW",
  "key45": "2w4fM5x2yeWPEV4DXRgKUwhcXFoqbRpGUzGNTJhqDVrbDhYjEaPP5Sz6qas24i3tJkEgZmxbchp9UCGCxBdR5B4",
  "key46": "yEQ8Updd9dxmV4bzBje5XxvUt9uHkwJrUYkHtpF5c7WqxKi3TiJJ1jC68pxVpCznJvaqrhJdkF2Sp6SvwEXLSVY",
  "key47": "2BjbwBpCkkkt3uvpDva1rA4bXxPGwYNUHXavhj2R7nGAQCr3Ttqtx8T2ho6WQ3ro3Kgzpk4zQF4QsjW6tEmqafPt",
  "key48": "337kZWuGetxmXGSRoQPZrEUwzVeBTV18gSqAd6ScUweNt3D52s8xXxiZ1sSJ5RpmTARsHUD38o1ktLY9haaxuMYs"
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
