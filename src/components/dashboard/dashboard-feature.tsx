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
    "5ZRp2wLN9bkarkySMxfLKVL4uptdrydePngWHCdEapnprWXUmhehaTaaUNBPHVzDvTxKw5YGi4Uqmr2uD2aTbRXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d44yoU5VdKFU7WdBHKdudgWjoHZQztyd7e7nPMNdVD6qgwHAsTBDDpXzrRuwNg8BwmtrBGvuSmo4k4dYTZqvUaJ",
  "key1": "61ZNEqchgJ1cPnSUjMRSmBCFkkCYpToPdUghnwFAbm7ygzrKciSdjAUzA2wvkqtkUJyQraP1QS7ywZLZQ6dgvYXM",
  "key2": "5HkKe1vVNAtbtTJANyzzWUcucyYhKJVsiUFmE6MfqQZgPEnQwytpDynzmHXa3LGnKHQYnQdRXLumiN9WXGTv6AhX",
  "key3": "5etDLoVJRiUeVq9m1WP34oDEkTGyfLL7U3mA4pW1pxYcdxScWEcWdXoiJdkVvEUkBwaXJx19gFho9GUK6X3N3vVm",
  "key4": "2EFSQCDV9etSchtRwK4KzMf1xN8Dq3uVWPLcCKP7M1n3zc9a2JPX1gxa9LUhdAHhwU9r6fHyYSHjAzJCxs6sr2CM",
  "key5": "2uUGyCi4Ludst4rKsFbsX9R1Wh48dFgPWW48BH4x1dureteeD1GSEmRKKgVUBwDZkUUDBgg2dyFFk3hXWgt2DnDm",
  "key6": "2r7te8Ybm8dzZa2rkSFggqbeZMnVvMF6SVMmH52MGu9kGJ2K3vfARAgCRMpbH9iLKsaXaezFjSmXEjTX1Y9zeY4M",
  "key7": "nLAky1J3CwJphs4TQJhYysk9vHhyFxoFdLNsAENLP8opi7vSQg3mVAhdDw3Wi6GB2BFA9JNiyDSAqbLLutPyGtJ",
  "key8": "58zGKibGR7VXrgFNDrQt4e78NNCGksDzJK8nuiWiBTArCufXEdn65BND3ZLNCBuSFttahVXJQVrMLyXo5Ph3ErLk",
  "key9": "5bcwjKAvC1Ehc6uknFVYrhpsDoYcmD4Qfn1tycPbhVvVVRFBXYGLaAphecA2AGdbRRUGiF839GR1UBqqHHGemqCR",
  "key10": "2rwWKXFiri38Cz4Q13m3iYdKUzsGGK1Mi42bTHxemYrr7P1PePUW4sFCm1SCgfER239wb9kgkdS8H8GYWLYXXEx7",
  "key11": "4p5sCBCgiL11tuCL2joDLD6fJCTxKLbbpPf3AmuVYC6g89MTheyGL9ukpdUoJCWUX2httAcGqQDxRNSX6yDV89Uq",
  "key12": "5TD1uzyxKfAtdyx524yooYw6EVLGqCtuciRKKned3JX47RDi4fmUqjwLETMuEBkv75Y2c1GXPp12u6fXRVSBR5RF",
  "key13": "3K57PyzUX2e49y53aZzZ7yt4eQsi9HiUQP5z6rADKTPdewYdmNMobwZzPxQrsvDw9s29twpj4S3nTMmE2PpkYyAH",
  "key14": "663P2Qn2wKtoPmDaZTKhBBF7p9iH98g5QeuD3Kv87ZgHvDjt7sDyNYVtCj45E8nYe6UWG3xrCpwafdqbnt565ao3",
  "key15": "4AvFckD5mMPVCd23UKbE2VRcMfF8fk35t4FTKPEVw9bWWVgsUhBTYPqZ2nJegiWpKt5hS5G5jCvTiwA62Go6Fvdq",
  "key16": "2LyreAyM5rbhZiSGRfNZS8T8eh6StRhreYizocobW2JVMhQRGR7Rg3xL6hfb3Kk2Zhd2MKHkfCEkLZDw8wwWuaHR",
  "key17": "5Ps7rUUQMb6v7fne8HRgRZbqdwseXqwtFzna7YBVWFBam3G8E9e2RftBxeTALgswaqkjNpBQypqRwLxB2UJTx8Q4",
  "key18": "3j65GumPX16J9Mr523UuDqJ5zwqbvSxbpAvr6MmnZecbsWSRERwkX5t1P9FuY89CwryptnWkwBK8i9369CKkfuFz",
  "key19": "DqNKYz35EWyeF69Mq2Pds7yBQvAzbAumdKRNSe3zJ2sJSZjwzN71Qy3YENyHvdUovmBFMz4DVZXxW6fJemUBsmM",
  "key20": "4MyLcCGiWSw5kQ57UdHs4XS1SdhPYuBxfrtDsKbaqhXG3ktpbyrP7k2p3vNmLQF8LnbPu1GBqbjjtUj8zhmR6VgY",
  "key21": "2cL8g1khurqiEUMww5PBmbzzvemc7SYinQfDQVQ9kvMDkaei1stcDPcdrjvSSwUXHWVN4RFxFyLbi1EWKjexRW6u",
  "key22": "5nMaP1h3Qgiz1mN5GF55ANDUG8zshCA848RPGa8veVuLRUFcJA96X5VeNJ8KnqupKxeBTERpaVEqeaGytFZjozy3",
  "key23": "3qVmCj1AhKre91s9FKGVmBjkHoBGQ25Cnzw8ouAUkKKFSKgKoLQnB6KpcAAoLfZAZSJJWdBDmky5q2GKsDYBDa6V",
  "key24": "3LCoKeuMBHLv8FjkmKf6prMzMnCjJtz1bE3UHDPWb6ZDkek3nqrdWWq6mScuf3PhGYpxVbzvkmB7i4L633eCKGWE",
  "key25": "51PK4i6suFLpN6x4o7eiMZJLiwfNs7TrWCGwo5mSVHsD92we7K4kzeQ8JwAcjx44eCjZHrCGUUaPhESJspXGRwVJ",
  "key26": "oUkFjHbCT5JU92b6pgyF2enf4TkHmfeBaEshogYoYr9QK4X6sy11VoaMqV6SSQgN1kRU5nmDxSbGGZsLCUFtgfg",
  "key27": "3Wek9MXEy5sKotiecpu5pvGvHN1FmugjZk9MkgFthCDTa8h1uzsMM1XW6zrUGnR4iRZiiJKN2Woam97WK43gsTjk",
  "key28": "r6iR5eJLDDfSXNNho5h4Nr3bLdGafDwvq5noThXpSHLA7R3anyM4TfqcQJZvLDGEe1vzigG4nFS8dU59UnjX5d5",
  "key29": "FmWSn6T6ijhZY9z4a9hoaGL5voa62DKEBRcTPFfp4boZXnzwj7eHcaHYZWjQSUommYRYRpd1fSB11gTEuvppht7",
  "key30": "4iN3DwavJ6DaCEmK3TH51i3Uyx2nvRxYv79aPShzLHg9nsbDV58vJixWtgVQJChveo1dpAYRwJpeWUuFRMCSxQki",
  "key31": "fdkyFqBEZLBNsHZi7z4AcAsJYPtGaK54UTAkQWtwE8Wfd3h2tM442KUDzrd3kCH6FJNC3aL4yC3vpbJYaZLH76c",
  "key32": "3zycyCXZAbWs2gbFVG8jaAA9D3vVrwb82Ce7FoYiLcT3AVFSD5VUmbT9yg6byEX7jYMpDbhgvqFLWotrjZNpFtqN",
  "key33": "MtdzqkbKK1WG7G9HjuLWcXa3kVinmAHHGEzxh9ub22QxxVwXC53fbbNxRuQ2hEu5P8WZwSeQ952c67ABdRvsZFJ",
  "key34": "5BVKYNVwTq3LmEwebawxqfHAZCsVH1hYVeuXUBsUDA1PWmXSNN31cjYMRdqXpD92QkNnM6cVrwQAqnCrYGEft88D",
  "key35": "2THbXLWjiN4b4g7i7LrX6dXNMCJvLotv7pvyVTDPAX2Yoc7aLD1Wj7KkDVoPjvJgwcRZzhAGjQWMLPXqZ2nTMh2L"
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
