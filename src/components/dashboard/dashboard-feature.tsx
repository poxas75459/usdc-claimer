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
    "38H8Dm3tNVzCT5BbaU7G4xH5tm9Fq22w4vr8G2nxXLWFzNsfgeRxXjCVZhrnBeqkWhu7K7zr9tz1wPcvPooVnKEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQLZYtgsiB2wYzhiHe9TxwctCY8eHus7rfybp4jTYjQ9e3WphaCrQEA3dosuJJt69B1VzSPZKk5Wcdiv2Puo2qb",
  "key1": "4TbH5RHEmTxoaWkCyadW6DhUSMmAodKAE2iKWAZZhdcRcxb8aCJ1t24mxGWKCM99ggujkRme1HP5sqyk282k5Can",
  "key2": "J5YPRNVwcVJHK8QftVKggajXsGFZ1axd1XuH5DmLye7R9JhkUrjpLbAuE6REp9LDZYaRp2VUHDphykSDesFMWDy",
  "key3": "3b9PLjAeVDmV3DrJxFKhJeVHNvBrWJiUgNb5hPsMKRR9cPNtYMMCSprFxHjgFjTikQUwA47AY9eC3xMGbC3JCEL7",
  "key4": "67fsCBkAss94NpfQ3xWTSdQmvz6ztxaCHFPQLxJCcjGkiSG8r1UQPifFML9b8fg9e65CbRycSF8JNcahFPy1kwUF",
  "key5": "5h58SkiwmQ7RG3tKKgXdwNV4KR5KBZrqexx8Yohvyt6zFRr8PQLwTMtdKBM3Efkr64Wk2LhnemL7LhhXUJUW3q1J",
  "key6": "ehbChjooptBYDJLJcYauxSo94pBxMrovXn51NJu1Rrsk5S6ZDovAYGSW7F1PnePF6Ac2sREngSet1XxGC15qTgD",
  "key7": "fSAWwEuqAkmxHk5k5L9L4tSejzAh5n3j3enUbwEQcWyHTGbptamVvWDZwPYrVmp67yEnL2ui56qKgC2adNdpcjE",
  "key8": "3tnWRGcKowxxzQ9jLueRPhc1t5FRqEatTfViL1mrU3nBxfFp8V9iSxTgBxgKtrvTiwaLLPpjwtNtL2Mx4vDWRmUY",
  "key9": "gzWN8ggLWk14dqDAGKd7K9kcVBUbgX4BxyRTeKkWtzGi9h86QnG1arhZ7JtcKAZLeQnwxP4iqtusYiJqjNWLa8X",
  "key10": "4ddAuL6oU78prU2ca91GGzJ1iHUwV7fEwiGPYXRc7GGWdS3jyppJUw1YZvbbq8KXe8kZdRd2WpJBJ4sV42NKey1h",
  "key11": "3ivJmMN8Lftw958CtJyU7HkmyNe35shmRdrjVTJkDQ4sWa9AsWqmxTp6DKngNTHE7mqBkG42F1fe6cibHMx9uAJT",
  "key12": "2kq6aNEYsfZqs9LaAcs3YH6UNccoFWMpC9Dxb93z7Y2vA19rUcg7oDQqhtYUjpLTTkBQDYGDkrdqCKCZ2hGDpNGi",
  "key13": "Q5GKCiJHYWtPbxjMBqX1N6ntiMwr2eDDJXgniC83HLeENtwatUJQThZvcBtdCfRs8EmgkuTYgx3MJdo6w34ZeV7",
  "key14": "4fXFtAHzJ5hcfCGJcGNBbVktYyscGDR7aqJRUcVh314cZKwzyfhvdGd53pCaWmYRCtkLRcX2caHn2WZJaChzdRPH",
  "key15": "4V3YGiG3xzDjCmFp5GGZbx1apahA3y9TSevwJFs5S7HLVPrsimfEx32yNfp4P8yNYkDWsnzuGJWm5akVZH6cpftZ",
  "key16": "3ieJMoQHz1pEH2ciozXySZ6aFuZv6aGoFHFn9Nwfno3A67t4uYZoHH5vvtxrRkLquMcBe1X1ANXcLQqDGecPDJfM",
  "key17": "2Q4ShgTfm898sqPDhqRU6ErAJxpunZKS1o2zVXyKfPHafCRSeEGJtMEQKupxvzybi6VGYe2V8hZjNthAXLdRDAz7",
  "key18": "61ZKJqB5DZWv96H6cVbYa44TTLBbyWtt6jixPEaoTbD8jJNYj6N56jTpKrcmF43WzuHPqPdLAsZBivz2xTh5GHU1",
  "key19": "26YRjZEKaMEa1MBbV6fZKa86BWospX2pTPVBCawMktBj3zNzAbivtSCtsMp3dYYhCF5DsuzJUNScaFsfXQC9GaL1",
  "key20": "29fyBqqjcyztNDwJ39UeRYdYh9uEwKinkjDFJ9Q6HVEUxjggT8cTBCwXii4ZpiHiQ12yy3GWpiEAnU2GA1bZco8R",
  "key21": "3nwKPP1NnAfQnLiwWw2diri17bqZBQDm1E8YZaYLquvFVLUqdFCFnck7pmx7uXveFDALKS8cg7Dg2L6KSqumvGhA",
  "key22": "4djJCZXAvjdGoW2UzD8TXDM2nxRwYua6Rg7nZvf76tYkiiK68Jey4sSRf7xBDKmHSgCG9EGEezaXjVKXtcfFTx1Z",
  "key23": "4sEsAHUqUeAEo9CHQgKgeR49pg1qexZr4M21UB7k53rR2TgC36Qi3dmcaAZtyjy9umbGG5WZwnpUtBekJKuAvt3m",
  "key24": "5F7ySmabJLS9ukhPYijTAAKFtgrBuZhveD21KpVqpXuH4yUB133cVNLvfwFkbs5zDNXHNTuGQYzimnn2s6f45B1i",
  "key25": "2QXEtv6TcWE4Puuz7ryNA1W8GWgcXKU3wA3g1uCmFrqJeBerzXJKHAsF5cBX8hF56hg1WFtPv9fvauke7ePZu8H1",
  "key26": "5yBcfcrx2V7LJeKfjV91fQRCRPJMRPBqw6sPmsaCaMgPW733f7sFhzaSBvQkm9Zcbm2Mbh8sDREMea7PE9GmS45r",
  "key27": "uFaDcypZEm7vFhzmKbimj6TXmFFQXKULrSUrJ9fSNnqoEs1hzeg5G9u77Xd4NuWT3FTR62FPY5XysE4PKv8xUQa",
  "key28": "2p5d45snFnsdv9tPFMp4MjjwYA3kth4yi3EMHofKv4fMcm2PHgnF2xFSTX2iE5ygri9JXF419y4PXR6gM32cLUya",
  "key29": "2rqqKkK1YRE8WDDwxXQYaGCwsJhr8Tv95hZkb8WCgX25nyJzVWWNqk1trivvoY5LywSZWBMLSjsjaF9UhbDstLWa",
  "key30": "5qurT8RNyDu2YudfdGduGuR99jvZYgH4vNtGp9JBe2A6vyNJSMZ2fixtMSEbLRSZtfXUkuKsWNAfPfR286oJ7wo2",
  "key31": "4c2ZPJt3RyoahrGxthF91V8nt7bMGtFFg65CtrVGsuEyFU3yTyns2hnhwjHaAFA9JvDZRu8BWCaindra8gNfZW7p",
  "key32": "2HQvxp4DcdKootoCNnAiPhYo1F3SFSBGvwQrtDswj1E5GEtTN6XjNMNNAX7Ly3mhQmQ4BiQ9cgfrATKHK9nny5Yo",
  "key33": "P72BZjLpjwyJCzihXakThARBBr4Cg5pTQjUF5X1jS3KdcmTwurgLtbFSeGP17oeFksbKX9TyLqXaiKifRX2YGtT",
  "key34": "3TCXaMQDmacgUUfhR9Qa59Y6asixcFZb4ANPisnwLsh7VsQjvTgamJfKShKEy2Nj3muDGaiWnDzaQ44yUowF3Gwj",
  "key35": "3UmQ624ZfuQX4aZoXqrmvcgU7VAmg4igekKLWmLPnREJv3fWtFuEW8Ko3SXLshC2d4Hp691cYRP13C6beffAaV13",
  "key36": "5Bdo8tNaptm3TCg7jN3VACCJGoxLCT7rLg5SrGzEEEos45Y2RYoEa6aouew5JDTwekjXoZztcVb2AbmB4fqMWck7",
  "key37": "wayCD39vTz3dtJ377caaDnn9z3KcB5thZoQUcKMcRbeHLmPoBRsDuzGdTZJyPepDgvQjhrQX9piCJci15ase5MW",
  "key38": "2HQTL77F5sth4EETLyiGSxrDMDyRYsCvWqn3DZCcNcWqLRTWMA4RmLWvUFyxqy6DU6vGPNgQXYnDFj9oUWY66UwC"
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
