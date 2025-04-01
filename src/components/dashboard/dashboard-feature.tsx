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
    "B1MTfWp48Nr1pRNASJMrv2K9vqKBKwvzUpSQmUhWGBnySrnpfK2kYjcSG1vWmtXdWfGcEkQPujUwmavgSs3Co94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZtopeBwJrKHQwkkJaaYEwsMG4KMbfHpWEkJ2ngsaQAsMnKykHMBGkjZMx6AP4qcBKrMVUcHxxdQNU1cgpqy1VKb",
  "key1": "xHzvvGNF6J9Av5LVeVHiBpitKT6jqPqy9Rc2UwraAgLfdfNqCDvVyFzaxepL7gCa22HfkZmMB38i4d1NKq2eVY9",
  "key2": "5413rzu4UxTQWrBMwaBFn8C2Uoe9csJdgLdoQnQxwsSRL8Ac5JGADRKyxKrTxxTd6ZAJ4p2xTB1875DaudnAJByt",
  "key3": "8tZ9DkdZxJdCyi3SM9CtpjQMYNcZTuntBBagaQYz1dEy2ti48rF5AN2q3SHePt5BrkhsL3VbCEjo4he9CtyDDUc",
  "key4": "21keN1EiRXnxfrFFtVoPLz4QX2peJTRxH3SRyjFGwtpyykMWP4XHk5EgVw1TMY7AyjNS4wTcwWKu2ikkbdNMzEkj",
  "key5": "FdUpCCRgQeJPNgun6y9mhuhaV5BqkyzaWWBF59i9ooDZqWKKZthUBiLHiKqKEEGNzZMLYcjskyUaRr2wMBhRUai",
  "key6": "2vF4VJNJUzFajxb2F6SzKHkAoS9U46kksREGoQ6WiBFbwMZonYEAacQWLjFVoYBvNdybo739GdZuaYrxtBrXFycX",
  "key7": "3K7JGdptrLH9Y8DNTaYrD7MtjbwWkwJ6bpvG3KmszJYR13xxHcPS3okuPAGUauLn7UCubkS6RHA9Q7jtF1Zc3pyn",
  "key8": "2U5Ny8BA2RnwLYpc3RMJ5WwHcGA9udazS5bdnknzzYAfGf7p28k1cTTDD7FWvDgKHtqmxtggcHVTtBZoVBKwLq2J",
  "key9": "322pSa6Fx8mfWTyguoKrMHPPxWYBs22bgAdNnyCLurbTnMKjGjN9JT8qpzeeGdtDHctzsUGvcwhY1YY4c9X3TNJG",
  "key10": "2scKpey9vpVuQ41XhaBS7wvcE1jmqnvWhN4NcRT1dPkxnFu9EK13R4hp7E6RHsWsEn1DehmDJtjg3WTQXLje7ciJ",
  "key11": "2UaVGBDXtXnp9NeWLWRk26cUHXk5dujm2CZwruaJ11yam4LGR38NwMW5tvsyteA8VsWCZ9r3vQeR5FmpeVwnjZtK",
  "key12": "t5b4iH36Zvjqbqmb55wRxkLg1SuSLAyTd9RegGW99nVJscyZRKzGRnTMKrA4tYY5d5UNH2Dc9bMc5dNJSnFkUvb",
  "key13": "3MSNnJYg7YPVjhiXmh5shHja5AfJGWXWiWozR55VdjYqHpDYxK29uJsQe7zynnemKZtuqr3CtPo17hr1r7BgoFD9",
  "key14": "61StD8JuQp5n7Vgq1HKqSR1ngYAE4qKtSFZF1zwj4wF9gv43djHJ3SFSicZc5oRpjhZbmDaA8sF9GFAWC3eQJGy5",
  "key15": "58DNWaVd54PqoyXteXnhB9F8uHaoNS5fqJAHo4L8mHSybzSng7HJgHBfXgavkfrNjz16aj6WdDhcL11noZyHBaBZ",
  "key16": "FTYTN9pGPEywWjrhqbQKzwnUJTAqzkvJ5Dhf5vCE7qhMEq5XRzFuHxCHDT6Huxun3s3k2W9cw4R96seuYMLnwLa",
  "key17": "3bpNUvZRQZt6CMjS2Lrdbgi54nRJG3T98Weo4pLfAUTL8ra4WubquhEDLokncAymciEn43EM9andzTnWkd9iVC7a",
  "key18": "2qSSRtkywd34y6PsxsdhXwSXdnkTVuEDkr4QVTed77KbewFUzD588dYnTCU7tXrrt3MrgaYJPnUCupMjekCesGkP",
  "key19": "3ADR5B7H2kC41fyBLCk6RigTSqoAGPKsbwXYtJUst8TWyQSaGWTLPfudakm6SE6SWwwPt46CczHieLAgovX1QDEY",
  "key20": "45Lf3ZV5VMRYKEUkyMoxZ327vwB5Xt9MafTfmbT2xv7pWyDKRaxvtf5LCxGWx7jPCnvuo82SbfJ58BHMPoGvPqQ3",
  "key21": "4QrzDjS3PQShNJfTxHbwxRyUCJjxJrLmMsrAcydnhFG9PUSGD5A9CZDq6SUVuYQ4erCBpd3gsYWNNxLcL4cNKrAv",
  "key22": "cLJb2uAWmKAvjVBcS4qANMD4YKLFftNCVGZUe6eFedfGGAWzJuVtHWZsWKsEwsEZpTSYZLS61foaDLZRLK8zmf2",
  "key23": "4uioDKy4icnDV5UedKfeNenTAcgDE7SPWpK4SR8quA1VUtqPGciTvhY5Z1GvoqYxdPccDMDCgijkeUF7sxAASW7U",
  "key24": "4sYkGo9LZi6gy8dhcB7CyufEs3J1wQGfNxnFJndtfq5CTSasD1SGBcs9cGNFNq8Tb4J1uGrqUhCsdxpXhGeywjJV",
  "key25": "3p13vFF5ksZgW49WBeh5dCqM9hhU8fc7y5PHgczo6LdwEp7sg5eRWHJrg3nG5xyLXoEPdXYW8f7FBFYJYjwLEFBZ",
  "key26": "2xrYi72NMxdVwXQJH2ykKh1fbcqNdFB3XYWcwmY6oS9zHebeoaruYDnx6SPut6apj82wWLCY6xSvDnPuAXejrEmd",
  "key27": "3uk4pWv6DLDXVvCx5dJ2g5dGHmjLdGitPf9mx4vW5si9j9iqZVfv79fgjWV7Eo486N5yQJzqGtozNkFJkaEaaMf7",
  "key28": "2qNCe4jSGJjCkpKvRw5LBVVVRtibA4zrmTZ4Xwv5j9gAxBZyc7Xfe3mNsPB3bWK1RK1Agtf8NKSaFDHfhT9wReuM",
  "key29": "358j49Acepfo9avXkshmfbWT3fn4eieERRywuv4nW3yRQwcB8f8VgALkQJ2ZtmpHp3SVGKegqwGQALKRGG1W15jX",
  "key30": "NnKMu2tXfD6rndDzxs5yrKYcBd38VxAFnQEZBVPg5VjznHDm7PdxXXGexwbTo7DwZQhLszqfFtCD89kdQAFdwmv",
  "key31": "2vLHA1Mopb5tBGSVzKMZGpzUsHoK2rS5sFDmZxXxqvPQkBSLXDB7JgBwZb4FWy1nsqhqSvS7MBAZbp8Hf46dZdjD",
  "key32": "3trdZ4rRAgRdWKNEhLtYL9mNvefBRCLt3j5ZwxzBSiFM1wZhGZ5abkW411spU7gdiKCzRBNM8KGx6d5BhabtMUsf",
  "key33": "47WYFsgFruofaqzrPt1hNr16nBc25Kk9ibKTYX57yWyftzUipwa68yHJyaHMt9skEPxvJeVpZkbdkRHnmqDL3sUr",
  "key34": "25PGgCWgNtZKZPVJwBGNtbqNFuT42B1YdR7xKTHGDLyYCAWpYh61fzsuQwvjv2hkw4oMMWAKZ6fzG7dUHcnTkaeu",
  "key35": "gCyW5JixojuQmMNu4jRoex4rzqxhtVjzww3FF4eUQuNuV2tytbJEqHveNqzFMxxjYdhj7RVTh2vciiYCeb4apWc",
  "key36": "m5NAVJfqeQMnc5Zh3FMocmHCxzScKF6HqrHyyHsfk3EwU1MLt9xdP3Xz2vpphkSURiRaUuADPSuNtrgWFTmUgTG",
  "key37": "5QSjHv8j8ZFZUqsEXs2EkEkWi4SJo7EN9vVmfcGozCkJR1eUfu6xwHZSMW7nxawdKdvR9yzweidoGNZXNWrL9me7",
  "key38": "2q85J5QZTHfDYVbAujFJGs7LoGo5ywPSyd71RTRKCKrFoge5REdNXtM12vyV4sgamMkvfoEwvsEJSysf3BgTgJvN",
  "key39": "3gajUFBy7RxF4KMuywLzYhemmSYd7M6uzVNB8tANaZ9ooohWJwB7CtuQ4ih2MnxYHn46mBaTeCdx3BwCu43ybq5Q",
  "key40": "5W7t3MKCBsLYzjrHqPLeRvVXhpX8NtxjEdheEnA3gGQpVq1DNK4ZhivTqcrbVJHwPKnvBNTP4SCZeMDdAqh9QUqs",
  "key41": "3vxHKrcHYoWvpFZkwShFkzEhHWTBM4DYmJH1c6DgSQnLEFiXToJBEwcYMoQW3EpEQg3UXwe32xKedkewEcrdUhzJ",
  "key42": "2iZSLhx2Ycg83EPkqeY3aQ8D8fHduFmDHT1tikb2mGNKcrBY7ThhiHT9tz6zoLEGMcund2Wb7APyodFq3uv2BKyT"
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
