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
    "4mD1d9dVQZRx1mA9DMLTWs9ieKbKEswiNYqvbvPVNaCe418YZGLe8nEVtKVFsHiwqrh5hivnmcuHujJhoRPHVwGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B929FNRi4Edyxb1jYcrfQ9eteXsSLBeoiQgYvh13z85mBXMoVHeU7fgbsKxnnvZ1ZsbbPG2izk4wYN5PbYqyUvK",
  "key1": "3EMm4A5HraGFoK7Q1MvZwDEgFn9QUGtbgQzfotUdDMZ5Eu3HSCYg2sZwYEAW6b3chA4Y9TFBCtSWTzLtbDQQ5Aqm",
  "key2": "5hG1HRSFG4TkxyZK1YJcrYWPnqDAd5ftA9rMuqg8y2gu4RrLP23UagDQ3tHsZN74RLxw5Q9B5pfmDdybF3Z3ndq",
  "key3": "2R6XH9FS5JFJwxNDVoZYJc2ymmATTWg4YSsBYhjsjwNbes8PA5PkJt5oMHU9inVaWHJyHGWnripPDBRa1fXzG4QZ",
  "key4": "73pmS2s1g3JwpRV7PCjajxVYHQZnBZ2SsYn1aVbTrW5DnkCr6CW8RHHpcw2UiRbphf1z6fNFNeWVaB2N1hohzsM",
  "key5": "3yxJpNGSsPnH3vencJsqFnvJLdHSpTLMBQbsYgtmETCVmJFJ6nNJsG4KWKgrqxgWvhy8Q5iQzzTN3r36NRpLFQdT",
  "key6": "3xZeucLaKZogcDGW6Xeetum9v66scZFfZSGZ61YdrU2K76YM8TrVi7Ges3kGcgsj4FWZPL7KXAYe7C9endTjB9E9",
  "key7": "5XC2SQ42WQcgiixVhxCvhoP9bK4n673UtuK9352kYhZYdfnqbzXiemhgNkeiinLxnVYPofM5ks6KYCSVh4cGPxgP",
  "key8": "yrGmgNgxCYF7sdUGxkdQ5MVYVBWzQGcHx1XP5Bx9Kkq1AcatS2k8VmZxBTtWAr4TVSZLduRnkYwC3ozLmYWpLkX",
  "key9": "2Ga8m5846NVGcsaCWPiFMwkM1Sp4D2otqiZEgFMiiQf8EszCyXfToSvkMKCmd9ZoFH8q1EuAfiEciqUMDJAP3jdm",
  "key10": "JtReiJ7pkWqB98HvCjC3epJvAeUU3gP7VyY9kpQ2vYjdiDnP8qb69D31TVFzwcsXhWDAC4ZxjRPLTc8Hdugivun",
  "key11": "5RtJpzAscL6aD9Hjk9x8L6WJSyPPrS9wJB1AcAkoPasM6VstvbP4yep3iVSUvEip7fAP1d3cffYhuhh5XULjNv7V",
  "key12": "Wkhix4z5XsyJqT8KXst1nrESxqq4a1fHjSYMgGT8537XT9sXrRovSdELFhwQ7jwyW2kfhBWHN5571uhXure7TQ6",
  "key13": "62S2LPnR3dNUVMxE1oeNpAvo5emLj2uSEFjV9Qshq85wuVLesfoRVPa85JRtka9XFa6QD1bjQg18zYus82pdtVdd",
  "key14": "3SPnBtLyymRnrhiZgJHkvgrPnTpuDGXwui59z5Qgf15SW3gBFdRhkwjZ9SLtWzphvQi1XF5BQEhZwVEee2vy614F",
  "key15": "4iUmDkQcu9R5c4f45ZfHwjfA4zHNrsU6uvw6jo1CfL9aoMPqTBk3rY9YCNa9f13VuWze6BpnZKDbomByeeqLZ5T9",
  "key16": "5n2bXmQQwvrWg15foUMpcGk8KXLWwEURS7xrEdtjhV3oZSBMpXfENcf2BYTVSG8yKExVpce8PYGd1kF6m376M5vz",
  "key17": "9suu7qiitpE1n6tmP8yabZopEN5t6HgJoFSYqKc9Q8SUn97xzgMuX1UMTpV1UT7ngpyp9y8T7paiJbJXLWJEme2",
  "key18": "3pcQpKrx7j1koUkjcb8JEGNZ9e5kvJnWs9pehwkMsiX4jUZwvxnqCCbsRYvAF8pKfeTZaDVE1MND1shWNWg8FTyf",
  "key19": "5DdRYZZK6ua68Re3aGm4FY9dZxXS84xb3ciA8Mnq5yXF8xGx52hbDyroKmpoAVcJX3dhSZCfYCrzWwBCiuuPBnrz",
  "key20": "4BsYH6WPAADr3z3VhKyJb1X7oSSmwH98F9898rMkLSEWH3aNK7ZMF47uMThBShDTwdrnwoWTzQoxvYeY5h8cin9J",
  "key21": "5vBjGpkvCur1a2QxLt3SsaVJKj6erHd7piG7Da7cZQCZ1fXBqHcei1TcAtWSkxTBXAYpbtwBmvhW7dP6zZeBp91V",
  "key22": "2uQLZJNo8fZLb6Sx71y6gBebKTQQbv8n8ugy8AcVJB8wnKKbHiCWPicRyEgSarL92YTcgMmBWQtw33dar37GbrMx",
  "key23": "293WbZ1y4jsdenvoYaDh8EJEF4FzhDoXGSTBKMVyHVmdjp2afWLBXz4aYZxsa5Zq6bbVxtWZuXctTyXGYGLYQrE6",
  "key24": "5S4jyZLf2hUFLYEj6Tzgz9mbNdYc6R2pQuJ6zNUnG6KFvNYWs4yYiqZ6ZXG5NCVNEbeq6LLnQfmj2yY6JFCRJLnV",
  "key25": "35MKGDEhnEMFPxQMz2Nb6oLdA85fkyD1jL93894fYe6uLaXaNztvSyLEksDD9URRKgqox5cmSj4ZeLPzVeXJUrJC",
  "key26": "9d4UuwfzftWathKVXndhAu61yoUMLFRdHQph9zJCeQ1U7LxAcGTEoe1guq6YFBhktckQMmLmYBK4QyAkUdiMYqd",
  "key27": "baq1bXoce2T99NQS4fRbvdahKEmYzgozZSpR3WcHxYx1oMnPqqJeuHKx6kH3tzFEmgHD4iESyYQS2Memepkx2R3",
  "key28": "55U6e3i9GFR8hSazhwYWxY8f9jHbtXDQ2BNS4J6X6zNVUTdUq3w4BuhrnzHqw8uBgUvvAWDVtBgCSGopRQcWJ3DX",
  "key29": "37Lt8ykDp3DvkuxCzN2S4i7GgU89yvNXuPGsWnqyk3DXsUmHeddXGzdpyMtU9PACB6TohYQCdsWdMgks8HJ1tUs2",
  "key30": "4qq6zMEjT3KgKZPgShRnNKzEJwbDpKMdQrC9W8TMgDW9aWyqq9LKgrU45zGKbR7SCzD42p9jS3Gc2px8yTBuK6ib",
  "key31": "28ufAQS3hRk4ws4sHNfDkD6NfUxWntX9Q4M3gGn4GZ1ByNTz1awmh2faxbvi975ZJcwcn6wyeDpArzSCGpA2Yhg6",
  "key32": "5WD47s2mvUG33jYH7T9ZdVwXDgidqyeBSbMu8p8Tmr6Ua6kmnpvJuk88VLwNmVGZNvFDePgASMnpNcj1LM56EAHe",
  "key33": "2LEaa86gXYjib5TmZ2pF6VKu7DaKGdfjCmDPZSL58WuVQEckfcgKSJwohm23xtRS3g6TMLzW25238UoEfx54SrFB",
  "key34": "b2tKeDpNxARCE7KmJyWPw4xuSkcQpwzC5fcyCVQDyXfTsBWPCvPjMWRx9Hr382gzgnYgJmEs2rSrpEgWRsi7xQ3",
  "key35": "55tW9mpob2JN2iLu3R7v2rvdaNrYxeVFY87yFjoUt5G2mENg9yQfgjLoDf3xHNG2GXqq39u2rUrTQ2s1iQvY4ZU2",
  "key36": "36MufMbn8qb1BzvkDVT4LW4XSFLTZiN8ViBtZUYsejKRqW5RpvMEX6QHzodTgag1HSq7b4QjGmpjYepke7vR677v",
  "key37": "5f7C1TLQt359wYoteEWuCbw7Fp5dxrdCAGUVWPFXVSsfjR35snTo5Tx654bFZrZf7umBLs2LutnsmXwBbL3JeuHp",
  "key38": "29HNfkgNcnSFUyWCXPfEk8VrGFMdb5TjPdMVyizqA8zXT9TkvA5Wi91ZtS6LLfr144eCzhhZUZn9Btdh3oVLMdD4",
  "key39": "3eUj7yGnoJQckPqrmCkWsGMzmDCTUjTtCWj22GQNrFnH3MYda6z8cDXsFGJtemydaeBabXqbaeCSDqMFMzDuY1Mb",
  "key40": "43wWiNmj951KSJLJRxjKCpLRpMD1UtRY5Qs4A1L63yyJaka6U8RiVidJx8DmF7N5zqY3Se7kFP1a35xdt2AQaguX"
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
