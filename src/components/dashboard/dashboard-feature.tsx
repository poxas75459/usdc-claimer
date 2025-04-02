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
    "4sqyEkjDt8epPyPq3cKNzVMjAWt5xhxTbWTjyesQnGA623th9CocyDYiSkePeDCnF58wyWJRpPxfF5BP4j562UNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AixDLsfnWwtXcBuVk9VKJCKtpJ3dezQyixwKn2rdAm7Y1norzn3fnX34TgdPgNWoS3QvZMvjByopA7UY7NsYR5u",
  "key1": "5vdWFZW7sXoPsPZPcdZYLE5oszEq9MpyEqg5neBVGRKs6whVgBRhdw6W9WspdHwZiBSLYxJUGCGMp9zhDEQaxWfL",
  "key2": "33HnHuzmPZ5ZBMPVE8yNQodm8BqL9LkDDTgxUwDoVXUofNkawp9urWyQbGkv1ExFb8L1wsgunL8RFsJ7VPCRGJb1",
  "key3": "4rbBeRNvW44ActAwX2bCVEqkVGSmcxmc5Vj3m9ckzyH8BiJdg793TLU53RZ2cUvUSZ9G75aZLy9kJetDGJCHWGcs",
  "key4": "5Xs1xZgH12bwKkAt5yRReVvGVQhNV2kfdp9DGWorBwd7pC1t2KPKBmWeCU7yaBF2ChMBpYKPeCDovGSGZDR1oJTu",
  "key5": "4ZK8jcYLrF1rDSdVrHzXBKUAEJxfeWQtaJ6jmCewb3f5S1Ndh1d9bNsKodEmeNAsVuEiKcmmGx3Rf2h48pEPMwYB",
  "key6": "38d3S6p66t9Yxvntu9fwFdTmjvXkMHP9j5m4d26V1sy84kGqMtV8n8LozTpvLcjEVJCVWcBHHwjfqevWooUaQeEn",
  "key7": "3EVXb8NiPcWNS3mo8fmDAggvgTrNLRHzMeaXtDuLNgVcdb2zWbcR1oQcap84xvgnemEKtxrPVkVwEFXHajYqsf7z",
  "key8": "2HjSxzrwQUbM9mmA4UxFnesvyWUmUXt4xksNJqqjnHQLj35PVF58mEQqxdWgGTXESVGiJvQKaPCvR3SAA7uHZKt",
  "key9": "4geHg1yF32orxnS4bkQJa5P3nAKpmzUss2wcCk7H8j1P3n8UtWtcbDTR8MyF3nAUTiWGX6FNBd7nf2SBnJnQf2Vx",
  "key10": "Nu4czWNfkZfYBPKaajNK5MsExJSZLWGfHvjsjAq3QhXLRsXjHigv8b5g11jgbLcf65aR9xkUzsTxzCH3ZM9b8R9",
  "key11": "5hPmiJDN8Wk1zqQHbehUJetzyU3vUHJ9HZfB39bmadX5iAnq4MULx5beZWmFsJFzM9TGwrZTLpaWGxtCUoeP4j6z",
  "key12": "E8MwgNvN7msPFdui9XHGfstpJRf8RtNYhVDtw5DKZ4936E1XgRqHoa8FQJJv1LbvhZg1PzHZcaiG775R9Ntzu3r",
  "key13": "33EBHU1Y9MQd3dAWMpTHtk9n7CRR2fqnPQH5J4Ykt6Z3o7T7ui1oJYapPLikkfXJT3DnYq1jhSbSDSR2fhBKgmxQ",
  "key14": "jyzRUGGH6AGZn25ggUYkHLuEt8hn6fx66YjNQKYyb29MzDiQKkkjktVXQAfXnaHpQHWAwGptf31WA4YCTkv7Vp3",
  "key15": "2F32f8fA2BrJAwToFzfXwiufebHoXyF2v4U5ysT5PFtHk3eqyL1bM5xzYo6NpJGmYpzxJaAhuEwa2E8ewYumGFEc",
  "key16": "4hgpGfj3Ay8FoD2NUM9rq8xNPoi9KoS58F5Zj6GAQ2WwoKaHGfK4jtYQYoDbKuyJ4eFcijxQ6sT3yqTAdxktkrtr",
  "key17": "zYWUAcmXZNgCzkWvRVLXfM8TzMUisWFgsmaqMSmWwruwMHkfU43VhUXdiNBQdUEhEEfMZe695Qctb8K71QWTNu8",
  "key18": "4EWorNcrPJhVLw44hfMGoydGWkALfNu3vjMhR4nhMSCrrwsuRXEeciMBFvA7EN3kxbVc2PoF72WeEYNkUYYzoNws",
  "key19": "3NCST7oerKFQcojJxLYq3bEmqcZYF777qCYmAomjXf9fp7ntNDvNkPX9r8wUT8VgPxpJ9rhbqgGKnPxLQUsTUacc",
  "key20": "52wNKUGKZyXB72FHyPaHDR2EN3VbVB8vUmBv3ynN2PdeEyJvy7nuk9v31UF1yvAZ5C5GhsAvbf5KV5nKntSKP5Zk",
  "key21": "cmaJbSW4zx78RMnYMtvuwgcxJ9fM37EwFhXsYCSpQqVieE3FGif25J7KCtLzfrgJmxmc3hN9Rbg9bCs6d8btgY5",
  "key22": "46QVSpsibKLx6SaMBfVv6KL6hXc9mhrMvvhuwRYUoWjtqozDqZFgArbyCm3c3FcfGYFHWsUfKyyets14syTTV6jR",
  "key23": "8JQpSmTtHNYwpVGmfHUntMQnFRiGcD7VwUiYqQvfnSuwfYpy1f16ewCrRtRZPyvzGpM4nzxbCyT74uR9My6A9qK",
  "key24": "4Qxh39rz3RSiQbfcfNZdXPvLX3myo8xN6bFuLjvhPbtaVUkeSTK8UgingV9tMgk6XrVqBd5fH9E1KE3MgVss6qvV",
  "key25": "5vHbVhjGyP74iQz2mQFmBK6x1t8vrMmFvetdfqaKCRCTDzbEyj5Nt46nbtGTZqEvH1RP4TccdYM4xG4fdc3J3Zxb",
  "key26": "1yeUjg1J94DTsaPBsQnsTMPekVHqv94QtuFGi3YLjF6b9u8MSbb25d2ny9Q3B9eJz3jNT7UVFyAjqdBdUuss3Gq",
  "key27": "3CaUWkpACNraBv6iN3N4YHKzeWVTWXAPnwbGmEPZdP4BFyusBL3FismLhdzxuQ79waoRUuLEzFFh2BwEJuwH39TS",
  "key28": "2yn96AMR24KoUuUHxisP8kQhKJrzDFSHNSG7TQKhbN8vwzRBWJwT765VEXs9x1K7LAupf7K8dyKBYvNm26jpihds",
  "key29": "5geMnkcrEaLigtWm2VPzbiJTe6zBSethE82LMu8rdy4Zt3dBL9xfPquRiSoZW5Bj3JCRxssswKE1zNLgwUeYdeaQ",
  "key30": "5RzipaeoTHg999depX1esAFAMtFcqWhfN6hjXvKiq4T9biUKjpax8reSqM9911EheNcuoZdFAQPCmPzFETtMGG7D",
  "key31": "5nV84hYaZvoNCNBcXihhoHEu3fyykDXZuxdYANvkhPaxKDjhH2q9w6cW4i4ApACYrmD6F7ACpSqg9fWtMAguzYfe",
  "key32": "6zsQujVBaXGfzVXseKsUjwf7wkqvkk8GpLaD9qDmji2HtpYpGPwmE4HbCJ6bEqYjwSgdUfGGrJ5J9au7L1dks6b",
  "key33": "4B3pHBfMMjGktkijK2kv7sV9XumNRZhJne1GGg1axQbvMrMETDnrdjVQs4KNPHSdHZyQtzYJRZBT4LgazhJH6xNH",
  "key34": "kesQGrFqkQtXYwaB4aqdJBiEvnLnTVV7caKGPyTHAq7ywjdA196ee5ZcADuYrbTqM4E5yDz58rQNtrCEpk9oPAh",
  "key35": "5AHuYpchEPvJV5D27NuV35nfAWCxwJK2SdUxGTgFkpjuH5sHFoxg4tkxXJVpFmmkAbigS5fjWSEHCbCN3KCvj67M",
  "key36": "3Zh4CpAUi6Kpj4GMdcDKzbS4Kx41xqb81Si91C4nLaXFs7ive8b9AffgdPzptSmG6izyFyAC64RaXde1TXC5kDqg"
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
