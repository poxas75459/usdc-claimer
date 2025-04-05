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
    "DvCKQdi3dJ6cWMXhGwGfkzhxxsAgu4a5UXEys8ZSFakGTaGJ2ueMgREXgvJ85mfMqEjrqHisAfgPqNkpQ8SbigK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39TnKd2mQyD4satKGyUWtd9b1GCNda8qmbkU3tLr8Q8B8Se99MoPjJN56A6hdnekaCudbGdVcBb5agAP9zMUahHh",
  "key1": "AkzLy5FRoDvwVgeh8Qv3s8eTvgdEguXuf952W3C2rKiJoasehQoRr8N76r2QRZm77MuuqYxfiAHZrYb5rrwGR8f",
  "key2": "4RBxFY3GtgngXGiRQd3rW9ywagNRVNsJLwvGvSr7NjaTvWhAyfHpZ31FEhyJkfSxtkaaeq7PfYfYANUTrSjeZr5N",
  "key3": "3DgDhh4USCUJ1jPbAR3TkeuamcoZZPhJNr1hhv3wB4utGp82KxdGCPupR4cUNh9Tv9BccMLu8A7N9vXR2QKMTo6D",
  "key4": "3TZKSdGAGCbHUaHCNkKkNSXUm9zruxW83Z13uDCNjf7RbB3p4ZwSkZAQF5ZF6W1WrzPprKroziZnJ2sCrDRdubmE",
  "key5": "5cymweNPRR9U7yEZG4qYnRWDTAC9tgKR6ZpuDPPdDXRDozsSqx7D7fN811usXaAaMUzuD465eEP6UKQD15c6SXH7",
  "key6": "3MhW4c7jnzQ9Ck4zzVcjMVdmaJyerRvEcjgRFyvbmkGwbjF9F8EU13RrxG9EwKJaN7faGG9gpUR4KtYm4EgD6PpQ",
  "key7": "3r6bSSqS1Wqbu4aMKLgpMVfpFmqxy8Fw42EicA7hN1XxoMJ7hvgxnvpFpBb2GvZAXTpa2LmDUF9JepcdQuA6HXVG",
  "key8": "Qp1fwE7ewKtaDbSk9BAYSqmvYYhFBFVSoSkC44J4hDh93u7JJjWN6QyqmEKt16xJe1UD3Vtd5udiHFQ14FESpLb",
  "key9": "34bShjxopzNBaNoi1sDh45AoiSLztx4PYDqDKKoZFzeGvtm1JCvaNMiaLGA2bSw8JU336uzuu11EgFvmVAT1ffWo",
  "key10": "4o56T3hFHuGKbKAyK95cgwMuLGncGhPC5YGa93dyo8fFLrhkRBAkgGqEF2wUayPE4jpgh1G9D8esxaKUzHqPcAfp",
  "key11": "2cik4s8eLKMZftRMcGez5HGAtr73QC4T439hyj43QqPQqhq9YWVd3qPntXyrBJ2582Rv5ukNuFvFzqgjNvQzuseo",
  "key12": "xRNWZAt9tU529ih2r1Cjgqjp13Cx3ERS6W32NdiYjA11PRu4nYbhu5xBWCoMAEHUoAHMBX9Cataij42SdZh3sZU",
  "key13": "3BEoVpREeXijYkCWMmunDWb75rphcvsJ4JtXEepXznRELbe88L1Fou1JzQizXEuv3Yt6SesM1QJZjP2fikh8piSK",
  "key14": "hLsdnXzpBCQFpvhCNzqM7i3iw9rkktqhgUy6co9EsVUAv8nafUz1w8tiv2KVDJRwKmWdqK9xqxPB9svkkiHHFvE",
  "key15": "5wuvku726QQdLCkYPLTYWEq2uhcjxEKV31yVikh8MshCDeo9yUviuHvASrCFbqZczAvEvgGnrfVscHu9FsjiN23e",
  "key16": "5TSSYE8E1g1t1j3dsjPSah6u6ps48HKRZjjcTiU2Su2mskYKmHRJz2jvkBYQtMjNDoHrB3aCvMoFf7x6bVR1VPLD",
  "key17": "cdBVNMiq9CA1GU6tV2c5pvU3f4CGAdyGwd2jmFzXWuWExY5ZWKK31WDzUHch1iQV3pw1Ex5irfkMWvwBeyMXDMz",
  "key18": "4w4CNDogsrfm8rN55Aa69KNaCCb8iePihQ2z194nM3aDFkgxdcAro3pumapaEUqahAKcVeQpJBaiABwxYEeW23p2",
  "key19": "5aBGSPBMYzkSEfm5YUsCJXPXwCj7ociDnVvJPSvqzg3JbsfB3tVHrRbCe5Y882bFBjmfDeMmCNwugmaK5i4gYm6C",
  "key20": "4Gw7jZ7TV8ipckCDqinanb9zVC5mrjLRAVvguVUbkfgwE9v35fc1hDg58W19zryHX4iYQw3CB72GD8yu3RdUgVAd",
  "key21": "4J67cs4CtcNC7WK48r9aZSysj43hzzYgnVdF45cJsuYv6DrVzaUBSodwLvBfqFq9kGsisNy4C4beuh1YCx9wu7Vy",
  "key22": "uZNFCgmP98E6dLhR4AuzuCKb4jdM77tZ7yhBjyy9chLLwmYMYfywLdh4AARA1Hza3pMgqNaivY4taKfswFwDpGK",
  "key23": "42mKhaH7decC4ZyP2WoeTvGbgWquTb6f4ijoQPVSovtvsRU4XNzyxPqqjZ5DQEp4pkRyUV77RLLJMkzwYSRxAXwe",
  "key24": "3oTrvmpHMHLuvAcGhDfBqvF7cAmpNeoNZnJYANHQRtURUNWZvttqyzU6po6fX4jJuov3FNdD7wpCNteoL37TCAGT",
  "key25": "4o7XE8s6ah398UfK1kUMv7pkMkG9pqXhu7YBAXVh9WhmUkzk2CUtUwRpK64tNhRbpcjtMk6Tu71gn1THS8Wmm4Ug",
  "key26": "4oqBRXG6MeFuJS2baBoWC9wPic3eL4tK965hW4csgKMHvCPmVyFWA5xuC6pq41BM126R1SsCJLoQY2QtMFttAFz2",
  "key27": "3vFPppccWBBpRG66SCa4LupNR8qwEGoe2f1C7acQeFNmMcNNSYkVftvj6sKmJT5k9gopgdw7BA7M86fduAyjzvgM",
  "key28": "25HYWoSMqrP8Wyqwf98V2xzZVvCs73p5uCxnpv5MGj14M1VZqrSDU4ua2o4eN4XbUQ8afpexrnTxjTqWvCM8x33p",
  "key29": "Za8Be8o6QJFhsUAKqwDFAouJc47WoqTmFE6Kt25tJMbFdcbf1kz54YDDUqxoS9GPigApvwwd7gH3a1dQ7m6iEy9"
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
