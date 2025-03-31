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
    "kDqzEig26njmMrEvy2g7sZFDp8tX9qD199sVX3Zhj9XUwkSthNWJs2LVDHYbto6ZrVAhyHinVChgGwa38s1iUtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diP3iJe6pU2VhjJmGtn3292nZtgHhG7SgqLWMmzG9TNMCgHwcxtce8wyER29P7qKk1CWqHiE1bPW63VHWAKmzoc",
  "key1": "3EqUyW48NLiS31QQxhM43UVxR9qqdi5Kx7voRz2e1Q3Pv3d4oh9A86jvF68z4N1grkqeJDFZCaXjSgHMJYWSZDHD",
  "key2": "4pm7JLPrL4pVn1EguPRxJ87nCCfF35rLYLZnD7WPLUQUHjAVwT4pGCWXtSnH79ANU7fXCuSqefVMa9AHuBj2uaKR",
  "key3": "3Z8VNmiF4i91oLTCSS92YuxgNLgMUJSt2svXY3dQCKyT5FuyxJpgygn6yYdze9gHud8tqU2WZQQCkyuQ8A4FeSPi",
  "key4": "4UV2RXu9ejjZ54zXmxhGxYz8nTYvFziyWzGTESw8APWobWDuypTQbYmSSdUvGodkQLkBgYnZ2SfWPNdrLTPXKUvu",
  "key5": "3p5FY6AgLAepQjMURXWadmWWxcQh2yUhAatA7NReBLoVgCLxDjQsHCyeDoC2q4TK2yENwbyCBGPEpgiRrH23dfoN",
  "key6": "579aajqTSdAFqbFpWTWmNcvG2pp4fxEf6ZukJFyqEQyQhQgWR2fYT8RVAtYrRpKdGh3xeNAwm15W8JrWyGKwT4WB",
  "key7": "5uQqdJjnfAbtyGbBizxprjGavRowBwsbb5ou8VavaQfRNSrXUpCbSrZ2bZyKv6Pb7YmqcUq99snxJasA5Hs359Kj",
  "key8": "5GpnLMMsyXhF7K7QaeBNVMa8HXs6epgFSduZsE9viC5NqC9Lx9GU2ygbBfoisW93mJqPiDi2e3tDBsprebgwiUmg",
  "key9": "4VHWTniY1UnTWzg75EFEKK5ZDfoTMHzJ7VR7eUJBZUFtjFwAG4hUXms6wiwN3HdpbT5sKSGgw6jW9haM7LSri1FU",
  "key10": "5q1czGn1XidRo2dm4EC1FP2BCFYJygucxyhvLBUFEP2M5XWBnDeRDMQKCdByBv75FmqptVH5u5DoPPYEAFVveWuN",
  "key11": "56SHop9k5SxV4h5ewT7eYjzqADjqGbt5owbq18oNWauYANH8Fryk3S1yPNEkjfdJVFgiVLV8wb6Y9d94nwEb31Eg",
  "key12": "3mhUi6G82jtxZ5ryyrbybCVvDcCgWHicgMXFcTkKDMBhDkcoASVKzUrPFjTQUpZ7Sz4dviG6afCR6CLDUnYDJbYz",
  "key13": "5ZhdNHtxuHdoMQUstMefsbWrs8o2Z1pN26tqJ55Ewe6J1Ad1H5WhwMVXABCrJ4ADjQLESp2393HCbhDAAGeB7eEX",
  "key14": "452j28oay7i3redYD3fbc5NL288Ux628bxfC1Lj3ToXsRo1EyKP68j64U8Lf8UxfwAVGscRyzd1zHZxjWtTBU3DL",
  "key15": "uSiTVZxSCHaYrk91s5BbsQZDne8UKryQ9jsdnuS2ofqGbxn5WtqaSEt4xJLB63f9drh8niKFhZtkmfS5nLDoz2e",
  "key16": "9o3KHMx6pRdRtpBWEjQREbNo5VmaWsRnA4sntTdLGr56T8WG8jFBdr8pwVPJdSr2C2xVcKUEYQF2r8tnHzhtb4J",
  "key17": "2uNgEeYDPzcgF1GDVcZ7J8KoPDrh1ZmAYPBitrVQvSuEuPUQG7ukTnedjAgKE5wpQ1QpeYA8sisVs8QmwWrf3Ksy",
  "key18": "3kaZnxCjuRkiQxmEyzkgK4E5UbHnoA28MJzyBfbjT6dWD4UV9T6xpkkzpo9QGhCFL4ccDTs6FYVW3po8ME4NY1W8",
  "key19": "25UFjs3qbXgbBNZGUopGKgoMMSC54D2BcXXbKYzQHtVU9pMNX5cB6HfrySvYXyWEayY3uKPZqx4wHN2DHuy4UCo5",
  "key20": "UhcU7a3g5mYGwifytBU5tzwoUpj5pTCuBsiGHhHuKHLPKpKf5F95eEWNaAjp1fsULfy1BA3og7rBV6aHPuC9vWL",
  "key21": "RxwYR4LZFBprfkRvznbVdeVXCWq3bFhHnkCqSAAwzanXSVuGDPmp2jzyqgTXdSf8iX1bLbSe3RU1kNNBmhxcpbD",
  "key22": "5iJ9hKbhSyu9Rpn8terFnpk3Dw3RcA7eSJKKw4nsj9ea2aZb56UadGxXSBEeKXz6W5TYWp3jbxj2MeVBBMvUrWc",
  "key23": "55j3HGaHLxZ7eG6sL1Saty1mij4fA2wANUPkxcQU5h2pEYWL8tVnSscJUfH93iLG94yrpcmsj2JKPekA2oF7cip",
  "key24": "2CCTFip92bkT31q8QpJLK2KFco79XEagHu7oidhb4p7ZsVa6JADNj6uNA8n2fh6J1LCP6QeGTY5mmb7EkYZb7Lv6",
  "key25": "26LsXammg3G8F6TFKEzEsXF4YnnF8roNuAtKEu3S9r1NVcSRDXyRPBHE1FEtHtg7eHxA3DhUZqUjzwkeD8aQ4Por",
  "key26": "2B1Po2chJucseQgmc3JdJRLrZZtTHm88BZs1DNp3U57rWRkLQJf3hDfjXmQVxQShA9HP6N5cZA93WvAMu8PhvguT",
  "key27": "3ZxRgreYFLvBLh5b8ySoJA2WS6cSDQPVGDSTsyv3aUvyTTCDyv6wvmNDueAq2BUHfoPBt9BJfC8Lr1QVxPUv3Vnn",
  "key28": "2Qw6bFGHgv3zRdgzTRWpdGtpWdvR4Wi5C8A7ouExt661HLF1RhiQ5ZnYAsHf8UUbJ9gpw7mye8ShAdSdpvUX96tT",
  "key29": "c9sdG35rcmbzmPBzRZZBo2jMmv3xtDGDCppzTetsQeAFrVxK5WsngV8xfrrQdJQZ3u3DnC24WFt3qY8VKSFsoQ9",
  "key30": "5LbHCDWgMf6DQxbDXUZEZPvHUhxzTG6PFbkcExrJ9aUx14MpV86R4YbEnMXt89jfB6B16bFcxZes8uk7kCv5BQqz",
  "key31": "1GUARziwioqQ3eEsGCux4v9qcq9zCEjkSrfbSmcXt7EBtLthGKX4s1SYQ5NKreCQsQLShwZ9j71DrcVedPMVFtj",
  "key32": "ExKTpsuDyRZABEYPgZ8x2r27pjhbFpzQmpbzgh8McDyzCW4PT1ZkzFuxADkR7DBeqWiqMUrJZ4Fncx66iu2B6NE",
  "key33": "5hNe3tjEq5ws3RfbMzrtJ7DowX9V7vCjZZJ7gBN1PYPCu7FQyy6bqFkj2VYJCa8Cmr1pUHja7WmdCtsPgzNvZnE8",
  "key34": "2TxV4schxifA18hTnwi4NxZhoaABpuQgKcM8oZbiioUXjxkRcEjvViSYsMmPP4qm3CYne2YBZ6MinXWAt5ckzdao",
  "key35": "2uvZHUVwadV2rapabb4Wqenh28sYssmNj2tZzZ7E8d8C1A7ikfzhUAM7psdknB9TKazVFfg5SrxTY6EuKbi94Knk",
  "key36": "5YUfFLmSzdVp1iHxjLLvaZDZhp9iozUbq6hN3McZzS9Mpryqmov7pWT6Vcv3maWK87D1vCkpKh8sL1PSCcPpP5f1",
  "key37": "2WFtBn1ksBkhhzbF4voEWPs5DikCEtRzZT1QargcsSf1zxYJvfnVnV6yvFAbcZFfjdzVZdG6SZ3C2yRNSwbjPZzH"
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
