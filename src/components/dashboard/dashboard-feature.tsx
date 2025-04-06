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
    "SEPvUbfXPoAjqTsENPsEWeBrmCnRFwLvKmanvC9qKCdxw9VdzmGtkx1Mr2w4Kyz5x7d7VufYQ4zcVyA1s9qTRWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KesKPehxJa1zebv7dcrarwYujmjHzTgpyWCTA4yXWF9cv1JLbFmTtLB2KuY24q3FmcXFB5CmTEWYPgZVFmugKo",
  "key1": "4jt2UL9W3k6cX3U1rqehwuew77NbuuqFztYi9warSUYX9mtGizJ3ptDaqo43G5jph2m3DUmBbDQeE8DfCSwpa2v7",
  "key2": "C1ncPuxFMp6z8KoWnRUzBR6BEAVoxN7urb6MEPLga2GN3norGuVfyrTcczbY76VxhTShA1sur7wZDumXFjMZwZt",
  "key3": "4j9NhZMDXPv5KhsjiCyc7HvWoVVAgpJcEw4K5WWcEppzSDQ528m7obtB4P91xrLd4sJm96ABFb78PiLZLXsECcWB",
  "key4": "56tUVcWcxykorrTYQRNBxz9DXwCFSAgy47MYYmbjZZfYgpFiZTrrbf9NCLWuYX8aD3zbyqQWgWkZbj1MSvNQyXv4",
  "key5": "4hwk22oPWm9MVUDQxe6vqqSrGQ6D4dAvyNtBKFSe1RdTdqmYvp7G22qKT6dSRbgebZWq5WzRwmFFGXDXsyUN8A1K",
  "key6": "4mneV4a6SvbZDRZv95ibSkpjX6txEPR9ThCKP26miWhdyJwXAZMD4ptGMdnyRQZ5NeYjxxJ6wKHdgnYzWwiqPGAc",
  "key7": "3etX4n2PjFY1pyMznA27t54bt9zuKPg1Hdep6nNK944vmDks4aYKHTre5tPWgWxVWybbJBS3cyLGgzRoLB8DzZUs",
  "key8": "5woqocKJU64kzQDt52jf6B2FtLd9ZRCMoTVLgn1q5njPvA2xEHbhDPLtfC2x6ndJNYMKCqns6YxQCaJJCmtMdNvw",
  "key9": "5tkPZUiBA9RXaT4naWvvqbnjDPnBt1qEsEkvLShDx4kuQ1JDj2E6bXuNBUbrjgapRagCsfPzyrgdaodnaZrTHL87",
  "key10": "53jeyXgWKhtPvdgZajxu94spu2PocukePN7Szd66DxPewT7qxFUfaksv1KL6J8AS3tixKZKUqouewumjRVNRNYDD",
  "key11": "3gsNckUzhTDKwPTWxr3u1prGcjtCJqCSyicgRkQBGBPxTcrqkMAbvZEr8B5ugjinjLVgaFui5wwAr1SGd4nBwUqV",
  "key12": "4sw78V72XXcPB4bNvD2aFtFFieaX3GwhGJ5ByJzNsxjFGYdc1cWvMhtWYNH1RZqZGePTUab1DUfdLiS9XjwEf1Ms",
  "key13": "XGsLL5kCt6jPg2YLa4EmrCji91SeLezPBAhyMbXkEVrHgZUFPk4WjGJK5P5NDzVHoWd53D63LX9PAXFmUwK6JcV",
  "key14": "4x77pp6AaLZMwbgcDCmTx78jyjD9veYZvp7Ub6ECrPdhQukXbpXTh22qsmEHetqgRFR4AC9XzGaSUbo4ESiES5ND",
  "key15": "5r8J4dyGsZEBBhgb6b9rEyrC3X1iUrG1eBGBDpRTXV9ZpYmz8WXE3mX2PpijM3x1vS2QmR7qMAsmtatWANieq75E",
  "key16": "5mfu7skx8bES3capKt1YKSjDpXLXqHH2potZpc8zmQd7rq4CUS5DVEUqpn7RYaLRaQFF3KYMs2ykZFC946ezxVns",
  "key17": "2y7mShFLnzJRP7MkQ6skFg7o2q9krjdsFcfNjmo9BoMaGhjwA826o9z6pQEfV8VkdAjnQZ42ZH2joWKLi2k5qXqj",
  "key18": "4imqsjXvJ9UrsNjtGgf8fCsNkQG7S5CpPuLNYETETNS1hzezUo3AdecH1nnqs86WVUsnm7Gm53H7eD73kTaqqaNk",
  "key19": "3MGgPXw4Db3JwP6fXUpT9nxKVWiNcJkoYQiRZdiF7hL1eQqjTKcm6WsAnnrzuw5g5AYfuLRy9MV7tE8uHbWmRN7a",
  "key20": "3BY49joqZ3pEos7L4wwgyvqm9DoLTDmG7DypNJ2bhNAAVQuGUUaSaKy8rDwBaSbftkcMZbQTNt7ot4ZVHPJjrWVs",
  "key21": "4MUEZ54F3aTKtSCTbgtiWVnw1BdTnQsSC4BbBfDuT8bjez8XDTXiMsAAFoniDtJuhGsxb1o8fratP3YoBB2E9u9T",
  "key22": "zuCgsmQTMHRHwb5WDtUFM5cmqbdv9LRyndW6HATadjPSTYxHZU2M159APfauxLyrBohkMjNpUaLYqHyb9oD65Jo",
  "key23": "4FTqQEJ3RYqhKTFxBrdshMw9sqVcCBUH6Jdai9M2rfXLSeHC8o3jB8fzxYswCzwyVpHUndgMJRmsEYMTmo8QZYyC",
  "key24": "3TCK3ohdYTa8a35NG6UgcNNQSwjo68HLhc9WZkgJgzRi1tJ2YyH2w2VZCzdvAdKMrpicYqGH3XC4schGt6KTx366",
  "key25": "33sNAycMZM86JVZMZmqk3z2kLcYi7jBQq2nmE2vNfDY1iRyhH7WKwxS4ocGHbR5k3sqnLDKA6qBNpJR6LLeyZvD5",
  "key26": "3EgDw7Pgch3omqW6n7e9y8ADB2F3V44hZJ856b9rT4qi8cc9gtw8UvjUs1SC5joncRHM5o2gzX4xKmtb5aJ4ujox",
  "key27": "5ZGfxpHvnwYKqQqWMQMX9a7ipWxzJZQu7EfBht3gdbQEQa34oS51jmDfP4ANdc47EX1wojmyxg1T5Aqrc77bbLNj",
  "key28": "3jFdeij58c6o5R8KnCqK9J6fgYGKgfwne9DTzNMx8MUAWfMNmtPqdroRNa9QUi1AKygS9NDkVWd4NHubdah6NdT3",
  "key29": "5S382R7M8X649HXD78At7BkFjSJb5zoEhDZQtSENwRYTNpNrPcdCP4Gcpj2kC3RhkJzDnskPpj7LqEbALtak7umk",
  "key30": "3EFoRyVTvEQgpS3Q9WwgsKZfS7DUoYKw2C22QJXUKGP263tshwxzDsAMk2wU3SGtM1JEKbe8dnMwQLRruArjopKm",
  "key31": "RyybZqiZnS2JtzJAGiM347qAhmJg2Z6spyRzxDaC9ywW4op8NKsgePZ1ewJgg25WD4FoknTBRJbdaKBvnhdW1h9",
  "key32": "4n96hpCF4o1yq869rzHGwfhs24RRGM6xC6ni4huJLaM6iu6grffwnRpp95FoS1LTeF9WfoHc6kio2qFPZJnnGcCS",
  "key33": "fFAqXdUx9AJVr93EUVgf9CXYhsAFrJ4LS1LqgF4FEr4Y6GU4ZRDwKxa3cSxkzSg1SvwUBzH4bz65sDMDYgzKdhg",
  "key34": "JjzGkUh1Zch6dyepeDrm6Kbh4dsr6HM6JGk3mgySq1H4eK1xioRvwm5gqUQSmsFE3co8TYDk2YJKiCeh2huX4Ze",
  "key35": "5uCKZGeLJPm8hLwvzJzV49TkpJPSr6TSStdn4nLp9TeAEnPwPQSQTBxzJwvt6YvjMT9zvt2Pv1ijCKp3GFWFXcCC"
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
