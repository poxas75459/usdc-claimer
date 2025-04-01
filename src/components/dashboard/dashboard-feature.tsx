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
    "2L9ZLZEJVgsHzBTrFGp2YJMWTaf8rNGvb7xxWeK7sLiyFVY6NUp2ga78n7fKghJYogXHsaxEopVd8aqEoT9YGPiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HeWyBGT3LTV93b893NwyDfEc47RBJhWReAS5rHaafJT6QXgpy9WVNTk5BhcvSf6Tor6AeCBdRYjJ6vabdNKiq7o",
  "key1": "2mRvGqFReoHS3si594jjTMX58LXSUPWgiCqbMboKjuWnZM3Jd7XhyAzVD62R8o5SFqMydtYzNJCReLYoPKDTdrgr",
  "key2": "2pu57grGA7YhZU5zLzad5f18xuWMTvZZiG2DJAjnmrMrobqYorNhqxXwXp7VB22qNnGdD4aMU9SkfS5fMYzC6hCd",
  "key3": "3cmPZRRZoRdGegcyYpBXtjZeF8fJrpi5eNeWTd9JUNMKH8PSNFyuS5sLxJfskruvemmw4yF2ysR64xXeMjh6bxGs",
  "key4": "W12C4sTP4oRsLf6WGmBRCZXyyYdtPAFjz96YFuYPwRxnvbLiT6xcK7ewfBUxrXeB2BW5chLSQQboWf7A6TZANqe",
  "key5": "xVvAYkqN2Pve2Y67EA8dwR2FJLdvBNvJmq3T4frQsBm2tJxKX8L9jHZ7J679Pn4iZRghGFY9dvx9oChy17navZ4",
  "key6": "2626NuAuqibRij9QBeJGypnbrt6KDn6ovULQJ8eZekCPMcM7Rc5wzCjQFLFEyiiHhzjMMZK7gQwWw8XMXsSr5Vvi",
  "key7": "YpteKRUVqMCU5rEyYUVsKRUBFnsh225eRxNbd5KQZTCQYSNoEBTKpPVKQ79BoB7E35GaW1MsXjWAEN1fxRkKRso",
  "key8": "2pgfEiNULbBL1GAFMzFBeb6qVQFyxbdpCtc2m88BTPYPQneaVD6eGSZ9ruTEaDtsiLj8EUAYgYPdRDwUTGGzDsRg",
  "key9": "5uRHLXkwZfyhDaZ4VF8vPfGY8VttBsBE4Jnzw5YSpXvG4wHCE2nwjts7GYHAPBiMoTf5WzjtT7UVtr8rfo1NS22E",
  "key10": "3FL1foJtB8ouEzwUSgKyHrwGohKs38ZPhYFUpVDJzCCFg9xE3bGTVFnAigKrHutB1JTXFnLn6MtZXUUaibFZq2BU",
  "key11": "5m4kUFULkHuPgWZXCPiUb5VUYTGP4GMyJctygRMwSUJBYW3B1TWkv38BzFqLm19q5vErF8rqpsjSPyS8MnNykB6f",
  "key12": "CpTAdNu9hNhzqgmUfsMfAKxEhdj4G2wHKKEbHjxD7JtAMYuWuWpBTHJpo32kC2qKvkPisVX66xGSrCBLC7ZgwpL",
  "key13": "4HkbLEiEAFwwjrgtegsqu3R4SZUReCoNwYhKU7gK3YsoDqGJCGgXpSb63Z6xEyZbJpD13mupP2UtaPTV3APYEonu",
  "key14": "4j9t62zEEgG5VsgMUSqv8vxp7yhSxygkH4ySMduaaxtFoiyPrE5wng4wzaityGtcrNvEyx6BdUoJu6vVJPT76x4A",
  "key15": "4P8oGFUAV7DZeG1CPEnsSYeyUrGKjLFg68NaX3jM1bsb3BHk959mrpy1BiGFL1Jii6PDLuR2AjRufUJqE6KT2CJ9",
  "key16": "KBiqv2o8ZsEoFCRGb5UGRZDBeu9CjSjCzkD6VZDNpd1DF8nmTF47C6z1wsvV6YQJonFh8XnvCQQgT1wAPurSpb8",
  "key17": "59TRYitiEiw8MXAXNYNTHPMt3t53RHBzg5fKK3dso1vfwQa1d8kKRdw3XBweM3LuuUzaqJqFpTZZUAmeK648GSU8",
  "key18": "jwgKSWDQg5PoDjANQeg8vGdBAfJ5cUiuhC9guNckW3EEaXrdWygnjhacfJ9e5sQThBmPSNi1vSihaPhZY81UEkY",
  "key19": "5dQH5sfzV8PRpkGWejkiztLmLYyARCrYsxvF6F4A5PDLMLRHsqCpi8AAuogmdVqY6UWnBdZ6YA7KuVyyLNSJB2VU",
  "key20": "5976Fn9QJSbxbvVZXW4jDiHzk5eARri7ysnXzP3LvzieKGXLULDMZNwkED6sxgM1cFpvM2FnwtLaUg3bQ94WXGsT",
  "key21": "4qaKgwRZdYmb884P2uAFKgC4zSK6co7wfmYQa9BCRL7Xs2Q6fZ3NrCSNhZ9MuRBsvCrgt9uSgkgHqsgGmmUVXkr4",
  "key22": "4Q1CQx9xnNMpS2UCx2PD37bJi6MW6jHcFar62Bg9AqEG1sxVTgXpMk8jPqBCT814GDfpAQMgCqHrhvXEhJ65pC2s",
  "key23": "5Ca6Toq9BXgnKisNDNU2cW8DyKcfcmz1XPerirWjFeDU4UUN86B1C6f7ghUtsUudzNv47VVYLVWN84MH6A488qjb",
  "key24": "4NeZLLkhtMxVgrn4oipQnVy6pZvMJM1qZgcsphk1J5d27pTCroNScmvmWWcbJBsiY8MkqdP13a6Tp3Lw9zhgpiMx",
  "key25": "4JozRH8DeDbyuMA7UQaa8hdPEZeQcx6MGWYVjAZ1arCeMT4z5k3feTWJzEUS2LVxXLJRffBgLQnFYutwrjzAxeW5",
  "key26": "57Nj2Bn6qiwEcHa4w1AyRq7acZhuk32C32ftRsFHYAYG577rCxcBLvtpSFdTXSxPeLJVTjMaiVSr3San1E7DN8sc",
  "key27": "Af9FUYzz782oXiaUPSzkvxdLzb5p4oXCGfmjPKfnYzRVN6crLWkNRrNW2QTYPcj8YrHx7kuBQPPkEDYJKVKNPsg",
  "key28": "3mDEfdiYRqKqsShc5bXAfYQpQVs6v9mpJ9v4khzTt3WcxVArrNJUNitg37tK3LebL3eHcx7u5Dgbcc9rwUqrrze7",
  "key29": "65qV1DPdnGzgxsCChNv412viovuwRkddYPaUkuokmUFhnoBBQ7YKkJGjSt8ZJyAa2Hut8LgPbimBzXJhSCcrJyxT",
  "key30": "3diQMwQvBrFXRKsEtfV38Wq6mYpF6AdiVb2qe2p3ddHeSgX7NSKtfk1m7mRXDeeF8ZyJFoqMSu4S6SLPbMwtpwZr",
  "key31": "5h8E5GH8wu9PRGy5bquXBehbRHTB4kQ3QWvZinhpfR23QWpzqPs2cntEgvAuY26iypT6iifiwCVypA4pwiKodpWT"
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
