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
    "5Zmro85FgSckTBVwCoCJaiidQwjJ6qPT2hpTGgLMcxZG4PoQAECsZgujkZ4TXxRxinuabviFvfdxhcf8dhMWYuKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35JaWp6R9DyH3kBvsr6hjgR9TxCeG3xZLy3MuiLEDBSYwEiKSfSR7umYJMPG2vfDPPJrsedEYSiiF4qo5oaKbPRW",
  "key1": "5gYduf8Ri1b145yCxx3Qumb7LbMwjtKLd1Cn4tRBnw9e2K6fq7CfipUMkunM5rSdTyYWbKCqZUqMBL2KCRCTTT2Y",
  "key2": "QYTkdoEU174RkAyY8nGuDHQKMGSohW88HnfCYu9m1CQ1a22GdyPgRp1jfwq3HNRN6BJZVPjfUdgw255bVrMka14",
  "key3": "3uXziTxpJfUCpRKEU9ARnzSBverbwx4ZbwdbytN2Lz1XFusKZFZmKfDwUy4jVEfDT7X7yXdrWD6W4xjFhT46eUMg",
  "key4": "3VSdgoigap1TCYj45wAskwNfaFS79gCcxvZ443FDo2pHzqWyxQVwAcVwXgBWiX6zEgr1VTgpTVeH7dsCVVBSiveA",
  "key5": "yjaVWJxw5rp6mrTF5r5ffhuhzAKD68NHaowhJSdN173yyx9qiRRjzEZf2UZacK6mMgm242t96LYcdYmWYpXkmQJ",
  "key6": "3gnJdQWJFjbsGKKeSXaWXcV6VVHhyAQNr9FFi4kkiab7DAtaTy4QnieizhCo5juTzDcN4EwhuU6VKy34rcFqiGZa",
  "key7": "53QbNYyx3Ac2YFxzBaNNoZ3TnouARw9H4kFUiT3h6E6Uzm1cdi8e9tihBRf7AHeFwfhPtvAG9KzmDycBZ21PH57L",
  "key8": "3pjnHyc4y3x6WjrnGywEw97FrjNBHPaVp7E5dekuraBqoKHBsVtuTt8mLhUiX8k8DSkg6fWz2oNd6351kpbVY3qX",
  "key9": "4Fez3fPso95GD55nEnM7eYcgwimYiqbwmba7CdDN3RFt3EYXoXjvsGahJu6iaW6kRTHvsV2JhHEQCsYPYeNabBss",
  "key10": "WnX8H1hRM1Si7JB9Hd9YrVuMTCgX1Sdt8Bso8yygiMPXLcs1hkqkSCsfXNQyLyKV9pMGHhGr8X2RvAoffb4tPLR",
  "key11": "5TQyUDM6DzEK41MJDDf5pQioydQg2m8W8R1krxRrDVd5WQCgUFnmGVDSPzBnVBs19CZxmJE5MgjiwzghbirgjS57",
  "key12": "5v66keV1awxAfd2CB9QRQa67jU7ajuf6oFPNJXrm4RBx2FCXL2zmuacUv2D8xcCMoLpy4AGrw9xUJwqnnZ7UsagZ",
  "key13": "33JQqBgoksbuJvdi4c2zCVvQFo4dyzRZSDaCpewnA51D1Hdzo3FSqAapbk9VhnaodqZmt42VEAxcMSge1oYJxh9r",
  "key14": "67Ao1546mWJXGfvVvGrsuBpHwK9y8nhGyt16K14mWrryzxGCfcH4HtwSrv9azJ3fr2UjCqHvtb6u8NsBggj7N88Z",
  "key15": "52NLQrXhFoXZ9sFu5RJDcYqgyZMU5nWMDT8CBEx5KtrnoyzzdKPxv15t9hDtqQSnfhzSsQLfQQu4ZFuHCqbCiGdV",
  "key16": "56TLcwHf5gMDcwVxaZjDKHC1mroi9M67o2WKTwJHbPTFnAR6VW5kXPCSRB8WUoSzhUx3UJt5A5UjQ45jzp299taP",
  "key17": "448W8ZWkkK97VcJQdVo9Y4wrWbFd4PNjEHkkjw3aE6ycht8TSCG8MSzyiis6Nyk8WA6drjdd7FgZGDRgNS9Gffjr",
  "key18": "Dy761hSugxfUpki4RCRvngaWi6YE2HGwyUAnQdFcWErTq2fwhZExnXzKek7b5CkotpwHhaCDuNoiivsE4ehVZpi",
  "key19": "edUBKq9BjgEAGFuSY1WH2SzW79BXoWNfmJeonNyeE1hRqSDd8fhTrMeM1gVEnbAiTevkMRzUNBFWa6ux8nWbuXT",
  "key20": "5pgsrMngw234USdpRnF975MsYSfx9b5BSnJg2jE6H5LKmNZ4xSMoNoCJrd3WG3n5BbSPurjYW6vkyknDjNdytbUC",
  "key21": "3P4FJuRghdkCM979cZtPdCPZzSHqyMkSwEA2rBvLCW7VzNpQqgtkgdLy6ur3Xi1BbH5Tsro9Z5oH4K8ywDXx8CPn",
  "key22": "aqGhqAqCUmXamSfB2to9DAkGKLnqWBz9fLLhx4AGPL6Q3erAypeT69pcg8xdQHaFoEkNZv9Gj4seH2JqFXZxMh4",
  "key23": "2fLnZFYNUxrb2XbLPpsTSKcexWFA7KxSDhNjphaDBTyQLgvW5Wzekv2KLPWGN2Nmjke5hSNjUaBHKCxVdCAhoxRA",
  "key24": "4knkhPdeYW2N7Fw42D3DJu379j14YNVEvDgc551hvo21SJSfz1hSrwgzwvDXvrjDDuhTLYptkFbiSrMViicEK3nN",
  "key25": "2JbfXcYrrSiGXYAW8LdPyKtJeSuenXJhJsnq8mvGQi1dVioRmJBJcjeJaVzWHKThMtJw5bgWdq2Cw6UimGvqEsGs",
  "key26": "5UEo3Cc5wd2YzvB5KVvBLN4ha3A5EPrHBAAY1U4hrCLv4RDP6DakBTQca3TaSKmkcLvdwXMhbeDbbEe7nAKAH1cz"
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
