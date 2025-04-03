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
    "57odEunTzESZMtGLSPoF9h1uPYSWvkVWPLyxPL2uk8Yy4KgzPTvbLf37xHKWg7DiQpHgiyjRnbwajzgzvAKW3tzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21SU3crG7n7bsBMjHQgko87b18PbBMkV6J8jAVpDVkRQDY3wGq7W9jJqgtosDM6yBMRS8SDFySXkwFUT44YtrLDY",
  "key1": "3BZbiCXzo2gV9ebYsFZ87vMyaWDkTrbekUS1TQ1MoM97YZpKX5t7V21hgGUY5vJUb8cmQ4Y84VGTqA7jHztvx6Pg",
  "key2": "4jxZ67xy5tvPwRWf5SvxpZT8iRMFg9EMECZtjBapxPBo8PkEq6gVorn9DTkpcKMYrZDEB4kNFdRGkFWX2fCtRZvj",
  "key3": "4HMoZHF8NRa3n9Emwhj5RvcgLuQrwYz7dGZLCLXH6hWPjXbp5QJfnQyByFpZX3q7uJ5oBX4Hduas8s1z93cq37Zj",
  "key4": "2Qi8GuCotFK1Ub3ovryXFrsXf2eiphi47hbdmYB1wz4EsXJrfwVX5sX3LjaEJ81Gwyv33DoKgasMGvTXPZPpiHbq",
  "key5": "3GSQKDCD9VEkThnnC8ujzWJ751VtJ1rW2QJebLN4J6bZr5hUHUJ9fJ5BNpnWSxbZ5BoHZ6MuiE6LGs1BLMuqANVc",
  "key6": "2dpbdsDUkVLWTc7u9miNvMwHai5EbBQpYdQGg38NFnhwD3UtqDvAKa81Pkt3HqPCPjJkPPp3j3tBH21Ncn8C1SKx",
  "key7": "4SsaRPNjya4UzaymGsZ3vatqeTGkDvhmxmNy2mGPQvnAPDFpivKCcnWGnBd5gMfghwAhQrAKTbmaPbDZyfrjqLDt",
  "key8": "4YqTZz69G8wYa9NTZdqEu7FcBXACTuLjg9hsBATbu1iMeMSo9aYXHLPdZ9q6Eu3JPixQnaLngNbxpaXb2x639c9m",
  "key9": "3F5S6LeswLp2u86LkeAwb2eYiH1GdCvNH4fj7cvNcnaVRfUr1dAr7kcvWeY7rWMVKbMJ9c5kUY1V3bqqmthi1ZzW",
  "key10": "cBUPQCZAkZvD6LJ1K9gb82NPLnHtwC5qYty8732iJPGGFEjiV12BgwipUPnjkqWGYoH6x9Cp1SWU9vvNqabPHX7",
  "key11": "3YnE564Pq5bGmwH5Z7KryQKt4cqvPnnwazaxk2s94Y1iGVn8ttSWR8XKKDJM8svuigfwtnCNuxk7SVgFmZCfCAqJ",
  "key12": "5sb38DjuN8CamBkL37RXHxnaFVNFDnm5ctQzhJGSpmrcNgCXtJYNUqgggkoZKV1KW4W9szFMWz1RYfXK2Ndye1Zw",
  "key13": "2soqMgYinCCU4se6AQ11KQfEk5GJo2ZBYSLJ2fb9wpvZwsew9kX8JAVdyKfzB2HDCdja7koqCfrpwfYRVRHqQLHG",
  "key14": "4oKjnjEDMW8vnzEpX4ffoQF4RrvFDyqyU4fTcgWZ1SXtTn7KxEqdebaNi87yNkxCXXxeovaMYPdwuDbXSBTjHSEP",
  "key15": "5omq2CsQhJGmouUuaYeb69NNxVEC4TTr44VeTn9SsJEWZiSXN6SHLpX4sFySCQh9f4eVrHsN74mqCAH8Mb2WGyap",
  "key16": "4dzuoNwZiNvHn5XiqhAziWmmbznVLawhjn2DH3gHGqY822FnuQWfycM8EYQ4K1wMXhDPqYbRrC2ERgEPaUWsPgT6",
  "key17": "2pAM6CUREoft2yejgo9sU5RQg8uDgH8AS1SMEnQVoRJ7sDurRxMKHk1VJRCmb43aJ4g9bdeGe3w9KN7kLvRm3b4z",
  "key18": "4EPFvfWG1SjshkzRE3ts34ZTryH5wA8FHHUb47eA3gEUABkruhXpLfiodC2aytkfhF11XQr1q1iLw5YXTJTm4oYz",
  "key19": "2Jtu12haMQTNFSnPmrwWnyJVPcuWVuhN1tGgoR9GMQFga6c4uwJzq2JySDdUoeHcXtT3J7y59TLGbSqF3zcJwKVn",
  "key20": "3XYMVT63sK4PvUuAV1hTQ8Nu7tzkE99T1Jrutr4NA5sJJVxJGNcTsnAmMBazD1VFDWaM2pjUfVXUhaq3MMyaESmH",
  "key21": "3cvNZsXEvuU26Zkyb6EVu3dhjENPtSs1c28E9zgvQC4gJdx9Fh5FNypHnPEfqPBjhAxPKHjnAZqQm1G2KKzzn7rA",
  "key22": "2FR6gNvMCfe7X7TUXvSyxNWatXbRUA8tn88Ucs94robu8Q3bRMAjuewR8yfuTcUNdf7nxaSjD3sjWGy5ovC4owdt",
  "key23": "fVWXZNGMGzKHswmq3oSt7HGDTvKK8ReqMEFfrDpgynNwb4Y8pERKvjXxKMTsP6AG4xcWaJnRLpJ8atGhGQbHM7S",
  "key24": "P2pE1T8Re1Dm13NPz1yoBTzbu5fmp4RAxUa1aGExMg7SigUmqgHkoknaEJsfcdpK2wD9Ne66ZWfPGsHQPPSCG6K",
  "key25": "5dzxcJViHaM9B4Yvp82ebpvGySFP7Labk6ARs9xuFrsPjAmLWPBFEaH8rigvPG2WCWDnB7qTN14NVRJYVwEw49wp",
  "key26": "54n1iLtkWyMbqZ67YpGdEzECR3DobdkrrvnAJbfQ4nsf4eWswKHT8DXHjYnS84jRCL8BKTPimYxA8V9ZgS4kndr4",
  "key27": "5G3PabCPTfkU9UbgCcrxV5bXGAGvrjsWbBhpVPrUon2x5EPGsbbYg2Vfm3U9zhpmmwHLj2Rm93rj8HLUHSK9bwrD",
  "key28": "4wj3iN5uxvFziWneZZ95oMAuFDbWKqoW5Pue1mEFZT9PSbMAEvAaPGU6ENamoyvXRzxYQmY7QJRdpazeBEt84epR",
  "key29": "3e176e7UsCsmS3kJeaj7U7HBJYHiMNFTjC8dHcPrMXd6JK7ysKdKixKZap3VGM3iAGgL3y6gWnCxhjkzmuw1ZTmV",
  "key30": "3MkKPbBvSpRUpkur2KdLUPSHjHpCYe1EuK5739jJFCQ8KWUunAkqcuwC9bCtRgGaYfqqBVND5qjMaVLLoyaJWSHC",
  "key31": "cPJCJFmyziqtHF2688wYSdFaQoox2WyBT1J1RSWJrcKWFUU41hdX317bCAhFdrGBuzkq4KpwrUPqJT6vdP9pqzh",
  "key32": "3bv5CcaJRRMcHYGZa4hPb8tiV4efcLW3WZkmLwnfzbDk7WMX2crvPuAzREKyQCrgfG9tVwEjmD1Dxx33ydCW7mu3",
  "key33": "4C7wrdcS3izJVQq7VgbXTenZ73y7qnBexgg7c5v5W63PosCPRniYW3ojUfM1EqeQz4biwKXMFn1VnmRCGwRjvNW",
  "key34": "2Zw8nYWALvK7Dry7nLzs5QB5kXnyebU5CW2fFgF9hMUTwqEGjzcG7u6FTRQVAMvyAVGvTrUBnA6kJbWcVRxECC5z",
  "key35": "nA5AETfKShK2h9iPHebVPcKxboQZXYJtJhrbE9KEmLZKyRLu7Fdv9S7wUh1gy3juPXxek6BzRsMgMc1aMPLivsf",
  "key36": "2grugUAgDqR46oW9Cbc8nCypceVWinZKA2pcznkiETeKkQhhEQNKR4QknR7rQrccsoBaDNGQoEH1jvmRXNDqzRi",
  "key37": "3WrpbYoKnGwzw9YbtRq6UxgV9thC8WtNXUb1AMANLvrKeye8qc1swxiny9sUNjDnPFbYnmJJFRp9YqHnJvyvWp52",
  "key38": "5huhBGrMMy88XHPoaGn6grw9wwsoHgw9iPdXnpEekA3GMm3buYeaD3o83RRc4YwgV9FeG4oSAYBwtxWqcgm7UU8k"
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
