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
    "128TEuy21ZgRbCi9CUhejLXLB2KtfhrS92pXNWsmwQuKnt1oSVxj8wWYt7D9PJYcn9UdtTEaSAtbqYbFqY5DVcuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BRmYLvSJAChkTzFgX1BoPk55bRsQw4CSoEeqXr4D578mrNh2fLMBhYJCP8ETjcs8ZJT6p3ZeDfYk7akR3hjM2Vu",
  "key1": "3dk4atQuCnjik8J5nGvk8uJaq8f5ntqjoD8ZYAbL23BaqZtGW1y2VDoM5dsyL1MDgp6JPZb1eeBY3Ln1MdXDC6W3",
  "key2": "2Fj5GwQJGWJzZypmNAPKUJ8yeyZvqZuXhaUwVDEDMyK8U1egUtMBwFLM8rKKPEeh4vFuhhwSSdVDKPYA8Ufmrzuy",
  "key3": "5fEH2qwLh4gKtgbTjKt9n4VGaS9f2eZWN74RD9hUmEbUBeSM52gwj6hTFPXCPdgxHSgH537oZM1CfpfPFAaxyjXo",
  "key4": "33mLyia3AAhMjvnanGFqYmf3SXGwYVYoLZ6kBT3hdUJiFLDj1MQ4Nqjda6AyULMbibbQCDJB3wqNp2XBR2qHLamn",
  "key5": "v59FF9KEYxvHPmGF9J96gFwnwX9ggg3Ax3RdSm1ihuQnXyktmC6a3ptdPhZpXHyrP1dwwMEgmYYBi2QSWcYZhxE",
  "key6": "3msboXv5D3sXDiobNvWqtLeDQS7VUvLSo5P7K5cQfLpqVELNacSRFRzWZ1KKjV9Tko4Bj2b2QZzzAcU75QPuVMe5",
  "key7": "5kd2XF6oKj7c7evUJDjYZbbvnTKAVTnMbyeXWEmJt67DiTTGY7spT6yQxv9vogJArTZUgYJ3zQr5cxL7waYig4yb",
  "key8": "5sfq3NJuP2ef4BUutAFHVB2paoeNkjo9GXWKfN2MySjy5NDDn1nmH6pU5F8mDaqdRrS9zRUGYGF1ghq8pgbYfNiv",
  "key9": "44QvR5L5o5KyhCEXNPGKi6UKGewRTwLEUdbZskF57cEu6JgbiTwYueZ7ZyoSfdGUEGSHrZsLKGwP9TgnMvKEwyVA",
  "key10": "3Xzkey2totrJsfc4NiSaSgt9dVGuUJATr1rafVws6493TMpyQM8hvEtdnkh8rViprS3JiKx3NqSjtnyQSySdmFDx",
  "key11": "4YE5nekp2K6kXRwkgayHHUy9qWDQQQMqZcoDPSdLHGdS8umSA47CTnVcgX5AbuWcyZsoEafLtGKNHX7BKdttRYTH",
  "key12": "bpakngQbNv9vUZnKgXfUGYmhWGjDg1txxz9zuxqjrJjTgCF9WWGHCyeioSWqGQ3AKQN5Na7E8494gJ8BjYF7gNw",
  "key13": "hE851UK7ikAwTAVp3UXU7gYa7WQNYddWji6uYNYDFJW3X2ggvjYWm6tb2okakZ45ahuHaPWT5TtviA2b88EPzwV",
  "key14": "3hRGYVVCwfeW1oeJPNaUnNhcDMfeKQ7BpNLtiBQXfHGjm9vAFgABm5fnCpvoeejWyS5k2smaaGZvBG6QX7SXhzxr",
  "key15": "52y4hhN9SCUcGmMYHpBXJ3K2aMWLWwYCvuhf2aKbE6ZfTRnbEF9V2ojzREKnoQTLF11e6LB31cDasAhU5d7XFrdm",
  "key16": "55yNXNvtBjyvycocEuuZXDxZfnx22ZbDtnz9GvbHEytRWRZmgAA8yAov8KiLSLm2L41yHdfdAMshwaSt7qt8patv",
  "key17": "2pNE32VmF9DXseuakTat3c478Bp6aLRskY9bC1y8rhkSEhjjoTjTsdtn7ab7sE5RLGMa8nvpbyzMrDoNwz6aTbCQ",
  "key18": "41LiwRWPMcSsFJzFHLcsxFvLKUbaHsmGmR1uyrKSuUdPtc6SdY1fTL5QueJJ9pNnn9jVzUeRnY4o8ZPKo6VVWEGm",
  "key19": "4aSsyXkpJp1vhHFw7MPSpf5hcf7cuboHJfsqz4ETNp22CxwMbLCNEgbgyhrGxUyiGPnafF9fyfsaLfPUzozycDAx",
  "key20": "PBGQcG39tyR32LTLAJoV1GowTGf8xcZQ7mRPHttYNCWDcbd7ytgATdex6qQ8H6wuFraz3fwzA3LRjyezYR2nA86",
  "key21": "3k3pwAcdSG4cJPSuaBcubYuLrLdRdADHros1NSM5HntPCNjopFx4u6Lt1zH4sRNAcRGMxNZAi5D3q5K4sLUYb8XU",
  "key22": "4CsWeZ8qGjdq2LsnanotfSTbFSzPzSpuu91tv6LkHiQ2aAr6LpFHVdKXJALWQoU1ni3DRjzoCvZ6DgPqAJrDDb2o",
  "key23": "5KccoZFZwJHjnNxUL6qKr2diGHBqxGmVZ2sBgjLZFxR7r5db3EvLnzjXRmmor5FXGKmTGfsUkG8vd1E6LKvrtpXq",
  "key24": "519i3DNVeResLDQnAACU1U5u1S3kwJhnxzbeQ1W87j77Y2WJHakJWmf6GbH4bizAhQXmR7qqrsAH49w8CqvN6gyb",
  "key25": "v3nAE6ZTNqen34aGiu2wzrBcT6LhiUhS8LAsyLqPJSGZoFCdFLNwS3qL2mQwqr8BPTTbBircnybtuv2k4iGGgtR",
  "key26": "3tZ9pXYHvQfPzUsTTxFthDrCdxpkK4bZKUYDsskFPR9pQY3c3fKB8qq1LJfSLD2P6SFxRC5c3K6JBDV7XbEtMNDi",
  "key27": "5iVmdbtE26sjc1LvGvDdF5WWbeXA6Kf9pdn3pAEjVM6JetEqWQTppxewGgcV6qsQrvAyDTmSuiPMmbtLqsM5vWWn",
  "key28": "7EbqvYJL65UaEztZwFXo6RD2drt3ymx8KQshYoLRPBzpwNpvsLCa8mvyAiCH5XqJGEnKzEJySDeCgQNkzesTbEU",
  "key29": "4JnrevnkLuhs6sDNuY1cd5w5Y6PjrDDtEQx6Zagvg9v9DuWK9AwnHKhEc1c6ikXs98JdZtKtYbpLHRU83wDDdV3U",
  "key30": "F7ZPPdgQvepsPvtUeydgrzBfM2b8coMzff3GVrapgjBMTzXwpjXg9xwb8pabAMFSvXSRMurZhL1LNHsdQN9iHrK",
  "key31": "652kSUQQFFXhdxZQvPJoMKtWaYTbQbneWCt2ZJrdxgDkurK6eZ1J9eNhdrNNgiKYdH71U1LtrB94RDCSR97JNY8J",
  "key32": "58JGYTN6PTAxe6R9egDdHBJ1nASwaxCYK15NgJSDDkQYWrHcQkBLQFqvJQsDgtNuzewrdoZ8zFKbe4mBpwXEWuNB",
  "key33": "3dbRfxWWRZnXfhNVkvJWMYA3i5Bn1maJU8fDyrvSXU9RgGMN5inahZnKhrgu96aj98AwHSMp5D6Fhic64hc2ip41",
  "key34": "2sJvwYk2bVAun5T1WjzMJZn1FqAyBB5aiBqiHE9cMmN3z8T81SaGKbRgzZUd7ZyNo3FXJaYzhMfX84x8bGhy612B",
  "key35": "365AYaYfS5jaJ3xz34kVXhzWdK24BtLmGYgDSi7DJ7r2z5dTQX8ZMH6BQqbuJdhnEzdsX9TjfQt5xaTpD2bCuZrF",
  "key36": "BLahAHjdCeyPddQJE64CZLDFJHo2bXrYGrVRF8DNT864bdcFs4hgLqv8HqTFtK4Ddz4QEH6C1BDN8GNUsNQBjwr",
  "key37": "4Bo4SCVqzG6XUXg8MpQToTepDmxaR2ShbmkXQ1YesoxTLDwEqe1kQRvkP312A3zTznJMj1GLhEU6eypdWDg4ZEF7",
  "key38": "4RFRzCGsdpobZkAmzrrqjsTJstrBoFyo81SR1mEsguFMMqvaMNspC9rffbcZmxxqUpYwwvxbpWpVW4ikYB7Rpmtn",
  "key39": "VAVWp9pA8fCP57JohJJAxVvR59jq1KazTqVZQRUYtkbdX4iT4arYDYTuzUmw2Ai7JftHzK2dJo2GVpfgxmPYk1u"
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
