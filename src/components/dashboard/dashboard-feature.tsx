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
    "3ESFzx6eWxMU65a9AJ7GULLggqoZoVt8Rs3HLN6GvhoHFJEt8JN6z1qc3GkG4VKePm3fdAxAfZ79KcUQ5b1us1yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ncvQXHFF4TeRc2xL5eAh7cWTHcjRwWuUf3aVagCkQFVyzNjsduD27pFxUZfR6g7nJDHYE9Hf2PnaBbne6s3Ljwu",
  "key1": "38qUycF9tZyB4YQHwZyRLqp6buyJTBVMU3eZbR4RGVwCmgfHpUBUt4tScjiDiMBTDJV1AerjpPocf9Dhp7G6vr9U",
  "key2": "mLZWCsc21R3rPiDHgyhCTb687sCoPuURkk6GQhtGhPnzFFMx2W9RTad8mzTQYetzAf1BpKbhHAyfDmosUs5emRj",
  "key3": "2nsGmLPJZ9bgYjH4G7AaeozaoHfTukcqn5NHWvcaduoz1yQYCcPqJewbEfS6hjRVpJM1b469Ak73n35P4Qi66Qwv",
  "key4": "kssuR9iu7cjzU4q42S24Nhnjzbc4ymQmCJz73r2NKJFNgCPqoXMhXJTZZXgiGG2P5Z948YhXYEj3HwmgScNwnoG",
  "key5": "49ufYM1D11q8AMdUa5RD7EAqfQNhXeMMhuqpkWaHsTd1xkRzCcE3eUxXmDgFyUgk1KGTiJAGNHKJVBeWG42ZzEJC",
  "key6": "3BXdBu6iVcfxCkMSgnDmjC8SCLmdgAHhctRVzm2WNfjo5armL4DuCMpiuynkz6EeDgb7mKbuPpxcvYkbwbB9Kgsr",
  "key7": "41uc1bCixAj9kVd1brUu8XPoGcpCyBTSRR9cEKtVJ9xgWrzsneHXDfoGoqHWuYWoA2fLRdLwq68fQsQmzbFsVd76",
  "key8": "5VWwFrW2rKvsXJSas2wdjTGtk192XUXS2eg9osCzJahF6AvzKNZGdb3BvihbpakUzAvUEgqs5htgswqy8vUgyBsz",
  "key9": "4r6ijZDJJVqhb5DPd5ym7hewHJJyRwVqAtXiRFoKHVNpcDYP2kYsuZRxUHgDRK6n3nXe9DhCCMD63ntCnV5SQneC",
  "key10": "35wrGrhEwzPaV1NXFc8MZxfTbL7P3TVYQFZv7oMo6P3YNTMKnP9aaRw7srLXGF2aiCZV8HcSN3gwptjpwQbgUXtj",
  "key11": "4oJay3Wc5Mo6vUStrYVE8JRGfkbqnMVKj8jo8uQJnMZMkMLpcogJYRgCbahiq5Si9pcrhpZmVxZYk7D3TktxPsnk",
  "key12": "2DKXnWHgQCJ2CzWctS5WhWYFW5aGRgHwWSZxyxj7LFxQw7isJF54JeVRvayskxSAb1j7CwKjkqRKj2wSWRJVpe3q",
  "key13": "4rZ2wyJ3dVhjMAoEWsvEXHvMHTTcTUE1wkpBZUa5ggT1Acf5GAnRrTudGiBYWQkgukrm72z334d5J8tLjwceqLKp",
  "key14": "2VZSaJseNHwrYBXh2sQ6Cn9RZUHJdNncGngtpGk5i7Phuy4UrrHgVdEz3urpXvJZ89i1MaSwHttiY7uSCHkKLGQF",
  "key15": "QdjpPqLM35LgnoyPQ6LZXwoenjQxHW9XJmbBKahZKnCQKmY81RFXhdaYfyKHZnAKKeUt9coKZGZB6uKv8D8Bx4V",
  "key16": "2mTDjhzLmKrKAUY3HpXLSVawghVxBAsAGbqysQwaao44ZtrUXQTc5Jw7gizj2Rxf7MbEGRipP8bx1QotEfi8cQcS",
  "key17": "zJBH425PqroKe2wu7CwAKMo9dujfoUCPqaN5MXJLjjzEYfrsCdWmPdbL2FahNTrznUzK4dyxJkXRiEkj5jkNufW",
  "key18": "5EpSXaCurE97cWsSARearRnjeMJ6CYB5TuRGxi7eJGUaHN1soTWg9eXBxzVzRedFa1k6BZgJiWCZKWAMmG34S9W6",
  "key19": "4S8vrdiuPwkK7Fc3u5EQReLPGdaPhqga8x9s7QCwJ776PRBW7abVQjFzaTzVRKdDn9VgqLo3knNRLDdvMurfEdGc",
  "key20": "fSyys3yYPpF4Fi2iZxY84Wvt94cfFANqF5DGa5mvGZomrUqmuNtAtfLU6LdmSf5f6BFprPxvW3VadNdMfpHbceK",
  "key21": "3PagqUaawPBYuQvXESP4kmPhpu7hSSKgyrAgKiorYn1o4Qf23wqv2twPpfVoPVNQv5ipqGbhoX5sWtD4BQcKUBiq",
  "key22": "56GE8XCT8qkgBijQFwgg3eStx6tsuqhwLG1HRjtXVfaiZM6AciTYgtftgzscHpWBkhA1AsSjKGof9H2GmVE5NXwr",
  "key23": "V92jDhFQy4V83iQhtNrtGjFHJUnCa4KzPPL8Gsmuk791wNJ7iLtPbifAGiz78JHbSMQMGepdKwJvtHEFpvbtQsn",
  "key24": "4c3JRFickme2RPBE8F3G2hLQeGgDreYrUkudmUG4D2ftdiAvUsenXZi6uNPrxSBDC9K8VbMY2y2r44vpFMeYnxMo",
  "key25": "3p2htwqgysufgNwELSyS9g6WcuPTjFYU3Wu7CBwsonyK9kCDAHJDSz5fM87ohgHGWRnLL2RqFgKrJsg3tEZEWF63",
  "key26": "3H82XxEYa9SDhFqCq7kQTh8iUXgpKcyoxisX5aV2bt9V2YJ9AFk3sHvMSPVWjjshV774JaBKFh3rTPNvf6CZ9FUW",
  "key27": "2CLkA44LK9giedbHNWWpcFzEyNu4fcCFiQoFfjYzi2DyfaJoQWQjVQBdnZYVzrhUTCFMPPYG8ZHm8QiEYfRMTsqL",
  "key28": "N9SogmmcGxhj9d967QdpyiXfSG7fXrWM4By9ZmcPcFnnx3UFXo6Nx1HHDzXPBEUD5ELpsqptCt8WHLWyiJkhRmu",
  "key29": "2dJDdgTTqp5NjFEzA1q6mx7v6DvCj6nMARKuZvWja4WdmHFTjFTGhzjh5BZsfoH3NXzbgYZzsvRsBhbV1Zr7g3pz",
  "key30": "2rdsshapjNByjA5gdYFc8BnUcfUMPtawhxnxG6B6xeve49nwfadi4jdtREX2AhchG9ihXbeAg2dgtByKw6mCpfkL",
  "key31": "uARvcaoVcjAHru7jD37wLfcYDFvWcQucMGmAPvQC4i9T3hGdRx3ducrjYUbYZxqqBmLpvchUHUZXDo7B13krnzs",
  "key32": "3K41oRFW8P7sYUNEDjSoj9bRoAwhKNbX7mcHuJnrGyoix3AeppqrC8FiAnzfjeVKdWuJbXPDXFwCsgi9PWxFQDVs",
  "key33": "25mNQuMih2tFGvnGqoLph4nrSzpTKekfSXhEtTf6zag77PAK1aAMi4vuziGq5yvMkvzRY5ymAUHVY2wG6LK1DJoC",
  "key34": "23UepwUzFN7Srb7Gmc8Rxyvg36dKFKFif4KWKzNyWNCQEPVEBEEYuBb3kjcD4pJNFQMW3bVBkYJVGHae4s26dPyP",
  "key35": "ti8tX2EFs3aBJdqoKyADDUEuqnVYZq4G7tmFyB7hJQzcqZLKNeXTwyzPKeJA1knT6ssgHmU47vy7HNJ9t5ZLmuE",
  "key36": "64mhhZn9LRpxikSPrQAGsMtV7BP9nTaEG7cJyqyno2rE9pBKdc3mBM6MpCZQmc57QaVudMftRVLB9ywTyxYv93CZ",
  "key37": "4AZ8qzHMANDvNWNaT8j5Wv4injC5i18wG78VCgDHp4LbT6ZMUwm3AaZ5H6VLQovtp8wXs9CYP8cpgevSkYokMNaC",
  "key38": "3TLK7SM9RRTKBw4qrCC9Ps6u2FGPEeDzfrpGaZ1sM22P4iZ8gzjwn5hafzWB4rp1JBa1eRQtD3z7rs3PBSV6MS8e",
  "key39": "4vd2TfDfJZBJQiTSPF3HbCdau7ffw7RotEhPsAwqQumMgPQPMi2QX45p9Yp5XeDhLU95qvFsW7wZzRc42gH4Cvkd",
  "key40": "5YZGMLfWzHxCVrngzKas2v2HGHCqCa6LnLzxobH8zYRKwmbJLkmBaKgSd9iN9bSXmz98ru8VeLVahMW3KxY68diR",
  "key41": "2SCLFpDijnBgeaqsAUXvfmSTCGayFWqnu5WohLjeUCA6yEXTjrmEyq29zutWPqtH2BEYXLCbsKcm88Wy9CRvpnv1"
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
