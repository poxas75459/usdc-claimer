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
    "4KdVaKZ2Cob124PoGoesRYNXd3uUytE7TgbhkmLftrxZtFg1QvJrm73rC2rjKpA6ntSzckMSXoCwn7dxtaqzaEkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VpYjp5PSbKSGZWotQZHiNNPdUJGWCWXjfZprydkK2og4qqTa6vx5xiWos2FpNKZ3vejs341vjMnnTGMMD85WCLY",
  "key1": "4H6F66sChzxyih2QEbu1R73cTrtAAfDgjEQRJ47iiUDVDoURfXWvxpDiGBeYLmsuXZis6S9ZJxWszjS4jPEXidQW",
  "key2": "5DoCysiu7mmmaTFbeLamgaCEUJoBukiSeUU5Tou9Cz2JzgEro4co2GKS6aL9uAg4xmbTDYuqyjy1QfdGj8rGosSt",
  "key3": "5coChfNeuC1kxNuqeW1yQWdRikxoWxEWYPZhYAdSeKDUA2PMKGBsv3kdBQYpLTvdynpoN64rZ7WNFnJ5JNQDT8nZ",
  "key4": "3dTxRyhf73YW19iUif8uAWYhSAiKKEvNmzMx3UaKNhWWRqhVRkQqCMTc96ByQG7Bs9KC6uBYjPqNXMfe62FGWiWi",
  "key5": "2rmxVSX1s2vNPote41ALncsCk5XQ8jUwcdkK7jQvYxo68LpXxzWaML2FjJAGQ5suEc9P546ifWsXk4t4tzXSAmua",
  "key6": "44WKoPtEJe1JGkhVs4QMYKUQXWKiazG1HFVpeFfmPfiD5dBeq1Mag59QvydpWAqoxXkqYebsJ3Hr6zzp3T466U3y",
  "key7": "agt4UmsXy2wY83kMcVmkoJumYaB9iNwFkxxDpfW4CeQ3dzSDEeeBvdcTGxS2rRtxLgo9SuugWixhjSYhU6BJWMH",
  "key8": "62scHLNFBF1kHDpAN1VGDotDYrEWuoqK5FE29FbhYxMgrswfWznf7JptmcYfgRs9L6ndMi9JbK6ZEn7wXKxHrLig",
  "key9": "5M1Swsd7YSZ5in1LiD2HNfMXirzZgsAh78WUZTcWxHTd8GY3TLqgnTLwfsKeVztbvFSHgk9wJi6fWS2MYxaievNR",
  "key10": "Grcws2FtBvUtEbpi9qXxtJ29Un64t6B8ybdSsP9aFQYqkGs4uPPA4wSiTzKguExpPdurai2WDqh63Ptg6N8jown",
  "key11": "3n7u1gZJmhAXxAVd8LLJjb5EgPYARpbbPpgnZZgDVB1i6cR88mGLTSwqauaUeBokGv15Fs1qWAkW6KC6NbSQv9Ti",
  "key12": "3JkoBWed9p9cnPgM7tpJNMtESbVynXiGwoMnwiG5ixjm8x2SgtKqYe9qAomjn23VJQG1RCAHJKXK4bVkCbc5D6ne",
  "key13": "5bTzYmYCaCtZUqJtuQkyaGc6gHyMBmbQaxMDGsvgq7qifLNCCcA4BdWTB6zENzw2iYBx2xrD8r71JESbz3ypzWr7",
  "key14": "53jWEC8FhztumQrGujdcKULTFMu2fukqXdfJoJxbwk8E8zRRCAdJiSngr58QGyPy1VavwCLX2eeNH8kRuDGJ1tKR",
  "key15": "4yi4KN2LN2FdjwJpMed71fC3F2LNT4msnXLtqo3QPaUfSr8RjsyfKr3KHGCh6yLiiFXXqnthPLkDh1souVt8N1Gj",
  "key16": "4MhQJ2ueqjaLZFVrKmZm3kGBSyzU6aNqvjZyJk8A4ieLwSiD7jarM82GE6gaRKjQrBej3WQNb92fxP4soJE5XZDm",
  "key17": "5mRmfzKnPByJepL1PDGJvWLw6QzbNhaJt7EG5t52i8kuxLqFggyKE1p4H4EjJB7jTYmRn1MhwqYTYgcqo5bHpzgh",
  "key18": "5UKikyqa1gEUuFdPGLU1mGuLGTtXbzxQ5RjMofwEv4p2bgihLP1TcoEwXhLPLPd2b9pKVtNBvK5GPTZ74T8JVA8E",
  "key19": "2GotrVvcR8qWQzSX7ke17Kpgd1RfHzXx4SJNsgxd3MnN2NkJ3SXUv72AUXz5gJfCgujWB8NDHVQiYZ8MkxNJuckF",
  "key20": "eDJd6bQivaskvxdsPCcSd365dUM5uLMWFJoVuDjd1YcEwvPAbLNyTJzv22iaB7o4tQFz7iPUeKc9Q9Acxb241Ge",
  "key21": "4aCWFkLpJ2oza4cbXJJo8NxgWLFGvJPQvBmhYWe3GkkgNyJsbDRdtLbVmousQRivudPJ8i5Bh6iNnhPB6CqioobQ",
  "key22": "5pv74fvS5fDQvPBaUXSZdUv63Rv48NC72MsJDsBDn2yBeiJ6c2HcG3qq8se4Uw3SptFipoBb9vXsvyux3SA9KLav",
  "key23": "2vzSD4MDVSXuixVEB9YaDr3KE2NqkmSj6hXXUH2FaUC51273mqkpC82p4Zk34Z9exvF9KfeVa7qiqNBxki8E1wmE",
  "key24": "2uibMAEfZ1RbZrUhihW1NGXnZRe38EnsHiedP2ZZmcTseJVeBEXRiJ7LpTs7ETYDZnMaoCKD7CKnGz4gA1Dxx4jw",
  "key25": "2yfuBg8qtgWNZiN8vPhTbdqTYhJUDdEocopdgujsuzLHJ9LPt2Tbn8JokkxVg6MrJW96eZcAAsFHVXp7SmLrHHrg",
  "key26": "5sEhSq5sbEX5jeQL2u4WZ4dKa8Jj91cpCCfaGHMnYaBcLZQqwxDe96xHrkGFJSy7V4aqetZq2RVBfwrN55DLJs4C",
  "key27": "4jH8d7an1qzSgGUPLpWtyReHxY7yrHqKpsFnT7MwNxK2gjzZcAqBm7kgXYZsvqmUm85q6tbmcA3DT4K6e96c7erf",
  "key28": "5dgXmvdJkQzZSosKnRSPwdXiFpLBmxXLY6Z2dhiqiENwNrNXFprPCHparhEkRj6F9VM8hz86ofzo7RTvEb3wNVcd",
  "key29": "5eYuQPRrsGwFsN4CPA2vwRo2mU6JNhxzqo633E4aHzBtYehinxzqc4bTt35bqTXgyyQ6JQky6rYtZqeA66Tvrdrs",
  "key30": "4yPeMnNqQEXmmmC9YiNvoWVth29G5YPaxr1xDHsaZjU1U8fcFT3yMNsHoWL7t6X8eVJgRgw2Kjs8kkXZKdYKYwkT",
  "key31": "21sbFSTSKuBnkk6RJAcacYWwEFvmoakireXwB7sZzpnjwMeHXEV2CnfeEo38KQ8tnqfeCngk3ABcbL2gTmZAxiHL",
  "key32": "epD3kvLvZbpp7N17D4jzBfnDxdBVmYzY8eLx25DUuxDgtoNL1F8rJped2LtgK8bUs9tjCRSbHGY9JL6NKe7d26J",
  "key33": "2Jhh8K3PMdeFMHjHoz6QKHTVtnT6Zqj1B5SRLHT5tAt8jxtAdJykyc7KiB92vM936SE2WxMZqs69FMTVFLeJS6v6",
  "key34": "4ptaDNxCzD5V76i6owsro1VGpmjBbout28xW3gxDUmReXzY3ghQA7W91DVL8M2QoxpCHEEtdkscwRNdctA7THpZk",
  "key35": "LQPuCGnzwbBBDGKz9xH4eKXd137HwsaLMjPJ9s1GCxgKDrF4ta6kZBdxsRLf4A4YKxAjp2y8KrP8TtvCNmpncZy",
  "key36": "47yGrJ97Fhg7UaPU9ZX5q8oCVnYFprb5sETPCnuP8N7roaw4V9sDJKJRiaQ75Zd3KzF6CsR7RMWHFqcpRKPUoTAP",
  "key37": "2f7rxpJe92hAJeSZcPu9oKfPgMZ4ggJ3QXQhB6KvuEgGkMVvn2PbBMyU55tsLXMGVkct6h4Xq9xTbvZzeTanjM3B",
  "key38": "25QW6Ps8ZZbznEyjiwBoeoJAkh3NWZ5nBnN68xtokiNPJfieJx7xdWXgS2HAGTkUZffWmZAk3RjKwgsnfo6he7rv",
  "key39": "4REuqyp2eQghPekh5rBQifiMjQRTDPCT9FjFe6TzTJRm3rMZF1pEQ4eQhF9Y9jRdQbVQ3JsT8ZWZxhjLYMswqVoe"
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
