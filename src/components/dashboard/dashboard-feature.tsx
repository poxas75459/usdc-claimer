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
    "36KmaYzigZWFzn7oKNWM3hw8PvGidSbNTBQjBYEEfSZJxLUMzjEzbGiZ9UKRpoc1FuRKKSyYzzprWoi1KP5LaNxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MtQAehGV7iTn26WFxmFSuNgoEKpJM3dTQ3zpCiSYRG3g5ZpgKS64ogqhGmJzA9d8T1NMJwAaRa7xLA2YRQ7zopt",
  "key1": "4oyJ4yvD9kTvX7wij6uMY6bpiJaHP1oCp88QhwjxsGKNSsgmazR2b3RakYujzPJrvZasG2pPhQNB35jk4rqmSvra",
  "key2": "5ntNzmb6j49UGaH2b4BidyscAkKk8iyxuUz3wSfCQGNVKEjZ1KPVRqNZNMW27JohrCaoVMQpEhVq1TyfwVMvs2zM",
  "key3": "3xCTJSH9CYoKUdqzMEbm4zpUConfKQpunFRuEY5RrtD3kYqpg282hEDZzVinC2aPBFjKi6zELbLiE3vVFvezdJxz",
  "key4": "5aFrTS55WsDbwggscEwZ9j54Tnr5M45fwhhYtvP6eP7mdm5QNj2bFCtFFNMdtcwcdUpNeMHvHtSv5AjuVYuqJccn",
  "key5": "pKg3QgcV8MrJRV8HLAHbMaVEWS3663HwPpDDU9B4AfAZNmVkcSzNdDVKC23P3dxVzv5tz1FaJpayo7teHzBUJxA",
  "key6": "61xegkYcYbjmnnAM5gM7hHvyXKG8bxQWZh6CQmPGNRQCjA1NbW8BkQBRCXtkY8qC7AtDeURwXjhPe79aKPmEkKg8",
  "key7": "3qv8Wbc2Bhjzn5NMJRG11Jq7apmHBc6GP7mGDJ12nJMyGxNuFjb6r2D8WSjLUSW2ihKXcv1UJYXHBRWNP4QWoA8b",
  "key8": "8idEEVmfPW3emvWfocEfvCFNNrfF14ciYxULrm2Xnx1DmTCLTbw8E14TNqQssmDRnZqkKc9XFyyFz21Mh7ZBBkP",
  "key9": "3nYyhRLA6MJ7EfZrqBkhU7ecqwwvqepxogX4DqBKDoDaAjWs2FCXxRwvTAvPPrQ9nAqCp6SEznJwkkgbbBgrCCeE",
  "key10": "4aWkEtdWGPqavb2d7Ks33mLmqM283KPP8iSKgjDXpJWv8yqmGFGz8PVnKP6fZpwUYNpzDUXrNJT3nKb14LCTuaf1",
  "key11": "25QFF62nRtwxSPssuTZXd4tY4rzEk7yTMPcegBcpkPPJN6CfHXYiDHoRLXomXFLuYjHsmuV48kWkwcacLtZepJfP",
  "key12": "49fWroZagmeoZN8PzhTPuT6K2dCuvKj7tuH6QXmJnPtp1D3SgqPETEZsUqHCfip65KkKDXfJSjY1ncKiFf3D7Xje",
  "key13": "4TnQrvpGcprRVv2aS6HEb6mh52mi4pyBpSAfrMWbTLwLURzKUXLAiPi7VuktSV8FeCCQ1urxuac2Efy2B6iWPXuw",
  "key14": "61a3gTV2XwaapYynQcnuh8SHL9Jnz7EneD9DkwsLwFRdV5Kq9USPXmtqg8NeJsiQWCoa5kyNnQRBEXT66LJtiiUv",
  "key15": "3BSAqsMiumfm2WXXKRjHyAbAoY7Ga8ocSjUmkGHjqHYeSZtb9aSEgVHih5KVwrNa5Q9V4g3HPiVKLoDE3juFApdY",
  "key16": "5fBmUo35b3pFLq8ZivoWCVzu9MBbV3VnawiT8EAET7mG3V4FXHhPb4fvi2Y2GzdFYBMdjxnCiGE4tbcTCivrdmYk",
  "key17": "5r4V6evRedC1gSrUWgZrZyG3VN1hpVgM324TJtHeke1aDDMuNTC6JqCgp3bqAZts6Gpp3TuRkERtKLhniLPQCEGJ",
  "key18": "4ekpYpbDSuR1MoKWfq62XNDwU5J6UKCYUK9FFZ1u7CrbnMFc7vWuKcPLRydszXLfBCN56c9VD2SwvkAdWoLE7br6",
  "key19": "Qasu7GDqaxju3tZ51cyQPasDNxbTnaPSRttEVEM5m9ZmuLJKhXyycjc6UTzap2tGCJH6fTQwLEsvH14r85Ata2u",
  "key20": "3V42PLMsDKETLCNxf3CEorSmgbG5TuHtctZxRJ9vihPPxzyoULM6UzVqEGukMkER6DeKKkgtvcv1PrGTCurtAP3a",
  "key21": "2UJyB2nANnGWXHNa4nsr25Z52TzwFGUmR3jYquRsfr585PvioesfeoQUoHuKZxwhXTT8seU9FDga2jZyXux7aU1g",
  "key22": "V5ToNzy1JfSWAqoMsMyUUj3tx6tDZz6A1uT92PyXJxW5m4aHiMJzFajfPUjVbaBBKBwTr9RMAQvsDDvqFLHGDzA",
  "key23": "3qTj78m8LyX6taenkWneA9GEdPL6QeQNb9jq8rSqomxH1TqG5tFqXwfYGLz1j9baVNHdNqpRe7rHUCbeURV2bYws",
  "key24": "52xEvZ4i8hzc6AJi9ipxTNsenyTzGVHVEFUFauZ3YLWBvkzFn29ttR2Kf3DeLa846pVCcVABU7SmneuQpDvQ4Vyt",
  "key25": "54RdoUCDGFCtuTmyoRbLeBvwTpAiCzc39eCe7CfX7uwXEit8nnS8KWyU2XiRY7rD6NP5iQfeETXcDWmZxBZN4X41",
  "key26": "5Rxh8jBgw6EPkBzQmCGsWUFBau4ttMMrabiFMeCizXdhs4bXAd7rPNgyGyRnm9V2aa7e1buxkfXGCeJztPvwxpxs",
  "key27": "5V73NcAHzrqw39Bwfzco3pwxhCkxJrv9JMn4EJ3CCHUtmYUjNpC7jcPAgUgFt91BHiRTUvxPps3KtUcivmzpa6ii",
  "key28": "2GbYGi3KVpZjBfRvV6FLawtViKew8nBr9qRjVetfW5hzjaMDaD8WCSBmJvZRefk2tDXmjm5LtCN5Ve7RuYmSHwvi",
  "key29": "4zbJr7djpu7P7Uvut3cZf2SrzCUo8cQSejPmeKo3Fa37gbogF1gWsPMLmGYaDUYki89oUmHRBkkT1KkiRvxL37GN",
  "key30": "wH7UDdYDoKdWF5TYwkor8ALqB4pTqEYfhxUanZCyY8wSoaDvV7ffzXMLVE3hiBf3BWq8Lqeo3oPUniugS7mCQ3c",
  "key31": "45bUHKicQ9u96RyosvrGKcoCkHtLjQiaESVko67oag71VEf42CxSgYkL8JSRCRZmVNTJHjRoNyktp1pHq2SSYbAx",
  "key32": "5mySYE1biMQU5hBku4fVKs81x82RqU9Qxx4tS7HLA3w5L8A7DW991UE6WoRZz5biXNcwBNXUFs2utQVdnk44JqfC",
  "key33": "4UW6vbbKyMpCeUHbeG7aWHXiUZ1P1NjTaJ7HDUvqvp2mBhkqpeAMhpYQcXw6uofcPPMSEsfVhZd9RhQprYNbZyRn",
  "key34": "yMj2c9TmY6d25gSGLKMTdCBdoL2bD4uSvdknP2LP56HPnzUkPyP1Kt3ARAUuSmP83CUtQXCJ1WJgWWR7s6R9U43",
  "key35": "SYyhMpKwBwSE8HWWzJyeab7zhpHeWQhnWgDQHw27Fg1ohX2REGcg5K5hiEpmCwu3jreCUCaV2AfaX1FhuQcQCs9",
  "key36": "7PEAFtpLmjEvf9ypn8J1Gy9WDEu5mQJdm8ZiYM82cA6LMqnuD4qbft7DvKTKSgi5nvEQycpbQfmqA7Z181pTLcP",
  "key37": "8HfjzXF7FhZFbuSNsXNuKA99ncyUTDPvxhD8iJDpBhJDTbMa7kqjw71MFTKQjeCYBT4YBxUPQ9B9Y1L2drm7pX8",
  "key38": "5MZNeKUSNxGSEGt1MY3Re6xEhncnn5CYo1UofFB5Swj62HUaDKtFrSXKEarg7UtH7WV2Kfv34q5qJvJE78We6r4J",
  "key39": "2LY9Jatdo8zw9xSEVuuT6YnKbATrMsfyMd4ZuaGDwmY1UXy4Pf7Yi6FJJF72dSD9xVoPJTM4wHMvWYnrTHdYuwuC",
  "key40": "3DN7mXLL5YKE7a81LEiE6fx29UidfnbF75kunan1MXRPavsBTkkrWAixnNks3sZjcAbpXP6QNzsjZCqtqu3HCinN",
  "key41": "4dBwdfP4W1DVAZCJaPKUve3mfE5tprU1Bg79GRGFxp2hGReC3PtJfqWZcbAWbbbFFa9Ku4VSS47sJGxZbdFvmY4w"
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
