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
    "4mbk7YsADzymFzY6fnM6FD9gRpJrkLfTVoCx4PeWWKDnqdvFWWW4jp8cdkSKGpS9z8h4NCbyACAY8gp3B2p9RTa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pJknWjdaAR2NkDuy25gq23Mp3LSPrgsFS2bejuN5DiG3CkuYKBP8QLqivo4HNGMk46ssHvg16mKxFAJUWWYs8hS",
  "key1": "22Z6oti6Nt6DvWezspaR9bbNaHNags3wTSbD5aHKxwZCA1CwpmGYkzuKUeU86WTRFzrCfMK7WwJzWzoqBeEBRD5J",
  "key2": "mUGh8bijnDPtGCyd9MF1MevYjWnJPgMqzFsPeUfNVYNidpTTq9MY9Y4cRMEVktDrVQzQM1HwQsATGbPwKTo3Uyz",
  "key3": "63KPY1Vt6PLdg6q1cqfEyzBwJTFgmDZCWxCnFHMoDSU6ysJJsFRg7bY9fRE3k1Q8xRsjoFnKTsV57yhEQUhkUNno",
  "key4": "3Qgw3aE3iNf5NihXyozwPyJnzxei8LY6VTFXX3vZ9yopQSJbaAgNSErS9ruDRG6B34YuB6E4n5mfpo3bqsFPDyEv",
  "key5": "3hytP1wwc5WFDiGwxVy9qNi7VxPtBbKQtvv758hqCZpa3kvVWNGiYbuwkfq4P5eHD5aGRdeFfHSP1dFZMhQUoTcw",
  "key6": "5FB5gLkiEizuEt6mGbpRL8jWW4h7oZ6cqE9yJEU8cRMQhvUfJYgrq12pFtNUEmqhvdVX5BV9DT4BtM2vn7KuA31W",
  "key7": "62bWhWVu2gqfCa2c4DfHj2JP3mGmiaDihPKNqYDHFLujva4UgDj6AyYz2thzxy3XiU7ETuLnVx1FoZ24oAuBtc42",
  "key8": "47MByKMe4W51XPP5M9PFsa4Bmn2B1d4asWxHHMkzmkLbMQqHVGcXV5Zgb2Y3z4yNkXrNgMugY89a9c8aqbadft26",
  "key9": "2rQFoDN6PYvhm8vqgVRuwfb76JCpiSmMXpeG7FsN4fgLByofJNoV2n6pZGy9LvKEF1GGYPHk8YJcLkKHswq4vevq",
  "key10": "2dSzfXy3EEQNaxn5brcPvpCsYXd1ZHCd4vBgpM8nmm1CGYJVwf3kVamxwVvDAyYdA9yzsnLqRPkpddr21ihrxi8W",
  "key11": "4355iGeweDuzcsAjjN46Ub3ZzZFn7oj54Zq7dr6E7FVfrSVg6BaU6NCi2kJgUwPTPNq5P2wFGrVK5hZhFtiMT2KG",
  "key12": "4o67zmmp3bv2JrDXJW3xu3ZztbXGE7xQEQ7xMwELrt1bBsJDzeH1NgEJzgRgX9gDzzSQWKqqCq2rLBwYZomWhXta",
  "key13": "3Aogvw2a8P4ozrgBLdJv5Mx1gdpAjuyuu91TB4YsiYPDNnZSCViAtAqMje2US2DEz4Jkzq7AWxxLsGVvq2NQJUP4",
  "key14": "YzhytkYqNPfe3MuFZPsWka9rbfhhLjB2Nw7C1NGeQQMZomWaaJHupC2VEA3tkrYJobioW4riSwBXmJbVKUWPDUY",
  "key15": "3zHLr7QggVoRqHxoQXR9nSCTG8vHcHLGMu1eLnUGBpydZ1wWNCaC9UhKGSi3jN4qf5Ap7WKxTQS2mxEpzBRUgG12",
  "key16": "2h2PhpHsjNw2h9GJu3CdWt29CvNMjeVckx8L4uxLV7Q2pkES3N6hE84JAg8xMtASNnhADce2Ba88qMTNrXdcPack",
  "key17": "5dovMSi5mYfYjbmpQiXp3JRva1uNiSnSyEooBivF5bVWo4Ev698dLVLBo1ixfY2VuacM5XvE3yyXw4g66BgqvCoC",
  "key18": "2Z4xhD3iFneCJJJouWndJaoRGrmzy7S1MpWuuVBqnY4u1ZcP84kX8PWyHSMgiQT7dLYNRnayvfR2Hd78tqbBXvXp",
  "key19": "nSkbZXq7xWHZtbSdhe7VkPXqEbZiXgkgP9dNzKzFq3Fyy9Cn7vedYoQjwqx5nZpvevAai6MzEi3sKxqpne4j4Af",
  "key20": "2EEyt2CfgnVnoRXBXxuo8hS3ry6argrC41noZ2ZyzFtdrhieeByXWMK4PRnJXAJ9FV1gArSnVuZpRvEEtiwwEh9h",
  "key21": "3c4wpsXvW6u5MhSh67uLeSvnodMGLjPHthjMevtwCcUtBxSgaGeSdZW93bG2eW5FvBmM9m7eoqTfrCpSPHioqWSP",
  "key22": "4GcrddaVathe3ktWgYqNPzSASS9ojQ1fYSJsKisehUZAfBbGi5ygErxNJ6H8D9yHxKXs4fW7zNvLdTvsui9VmXAW",
  "key23": "3rcu2UCdVGHtapvyuHHYQi2MaKTR1UUGttGj72bBcYPNxC5he5j1UDMiwC2BvQ9MzQWLWt5v5r3Li3KuHKjZtkHc",
  "key24": "Ue6jRCBWsrykcF8mkNmS5SrK9hprhXReu8osZqSBXq9AiTecikPY6NXSUSPTvJBT6VkXf4asTUJT6wisqd7CH1c",
  "key25": "3uSjMkNpJZ2tYNsHx47Br54MEQi7GqkGi6DrFJCMupBi39yQWRixFz32PjWBc2c4KRZRzjKaygt2RXougVaPpdtS",
  "key26": "2szhs6VfNsdpCFhkha2PQ6TejTJa6rqQKVqGwxxNkrgnEZJj9iLA6YxYSuyxmEQQrtcCtUpMvkcdyQfrvY2Rqozr",
  "key27": "3PMb8pBWBmRrWZjbaVQyjEdEBPUAJpPNMR39TvVCM4khybLn64eBcURX4vJNkz2iQ7UAEehY2jtgSknHkCZizSCD",
  "key28": "3YfsjiXPBUsNk6aif9yqKERfaZrziEhv61rDitTAptBWSJPWgtUZ1acoh2UxU8aVeDxEDz4iKo1HkSA3HY87TrHW",
  "key29": "5ucieFhmwUYUgtmxEukR2bn3gaaRnF5ZqsRRnhUizjd1S6Rb2KmR8Mzh15kRmepDvjvi4Lij2M4DvT8xP8GpNehD",
  "key30": "5aM9nW1VE4n6YKPTw9dQ476UzAPyRQ3KQwqm1pPH6EPAkm1CwyGY8nGSSRwB5Swmf4CGMB3j3VrZpkeodRyXGHPv",
  "key31": "KJ3GxnDYX3CDoi976CdYa4gZx4YvL3yWtFFBYLdAxMEpPCk6AfkYZ3PwRQrNKGV6frij1ueb7h7irjhMoW4gaM7",
  "key32": "QvBYS19FVxS7vN9KGS9ntGu2VH2fcr9xgFEJtRhZ2YoRVyC1ETPP3Va5UsJGFxg2jjdF5Qfo8Ha5vfZN8cGoTg6",
  "key33": "5nJAR53dHTMyDPCvq4SEDWPZ45KmScMSfQa7BMT73NDYrQgsuKkwVMaNgEofv7oKy3K7QiVp9j9HEpnKxkn2Yv3v",
  "key34": "32yUZymRFeeQjtjiLoJhp6pvcFouKZGXbqpbeQE1fiz5kh5k6PHVWgeFuaJkAv4AYczezTXBxrP23MXsMTpYuGVy",
  "key35": "5dZPs4o1n2ERhntdmJM8VfX92wUx6NsWjKhwWK6zHGJyf4becDg52XtqJ2NZcs6LP5FRpRw4xMJjawVJVG3Gf6ST",
  "key36": "52SJnPJfXkbnEw6m41rUdtbjst4YhUBEU7MEar41sRQvuEvNwMxnfPESbzs13xjWcD5DpfUbCmd5rZTkxPxRmRki",
  "key37": "5DER6Kup2PSfg9g5jATeNHZmYCcmJTkvkVeCUdiXFaE2ikD2PgYDyu5ftngtEL3e5H8euySxtmSqjx7Q5NywUEXS",
  "key38": "osgJW8KsV5Sg1SPBqQqGyhPtsqT9bQSbLwjzPKpPxfhduSpRjHmQqxuzpaxHdtxipbCGSismSG8kse4Puh5J3Hg",
  "key39": "5UWNaPZurccepTg9uQ7Bc6J5hp8V7zWunagrLPQkgrf5xfNnUc4dwJ53SbEGkiFeAEND3dAFHGiaDRyPDvz4JkKg",
  "key40": "8F4zADTZPLpi8Q4E8TYENWGFt94qs3X1XdVdrW3811rFnLoMvArE1J9wxqZYmHM5m7k8f6Dxr5pSXjMjHTEkzse",
  "key41": "2LihfZFF3WikfD6H6UBoeK6ZM4pprJESxsmKYFS5ABLs6WZiGpiikEG7vhwjgSp8b8TXDEHPmbiHmMLcZVhFtnvt",
  "key42": "5L75SoHWuvY2BsTnCcRsWejKxGZqsPVrE6sn69nnUCfAWpp3aiFzT864vW7xfoG75kMLUarVnDFfnghYxgUgbqBk",
  "key43": "3kPWUb5vCX3RRLXAGBq4Nm146zFeD1Qa6hXoCrNXGTkzLycuiyv2SN3JUZo5ASLp2bUzejRZxQ2NcYPyfQStHGjo"
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
