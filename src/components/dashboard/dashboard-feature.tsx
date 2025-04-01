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
    "2F3AXyiaBtRmpodR3ExmPwEb91qVD7ZKHXgatiNXsdtzAn2pPnWM4Gxmqi193UnoqNyF8Wos3Wo13kuufFLHFwTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25u66LNiZ25bdmvYKcJjtoBpXsXp2LjpnYjNvH4YUpRHvnBM3YsuJUsSLrBkzvSSg6cgiMieKMRgF4dHB3FWPwZy",
  "key1": "2Rj1z87u2ZP44GZYEpd1yXyQi1s18R3Fe2PAb2wwwCGnhpWmt8bv4eNbP4qSESfghFEd7eRdTU1zX4zMgfGSGFZS",
  "key2": "2EV1zBvxZWJGfnCo4GU2R5te6h47BU8txsScS58KYdf9FgZE3PRHUxJ5xzF8eouvmFJcMfdfzrUcQvUDqpnHd2JE",
  "key3": "4e747wenaJw5SFDodMfeKkWvcJz7xRaThGKui8AjxBfubsWoK3crwsFY8k8FMqdg2akbic6tcaVvEgUqvidvPfP1",
  "key4": "3P2iFYT8EY5NNiAcivxpn3XLEMKx7gjAcSouukihPSNA1Zzjo76wEeV3oLmXEqkNhCaDJ6r19pkMD8fKFosVtCKy",
  "key5": "32kCS9pyJiGLBdMxLTW9GavJPDGcr1FDH9JXt4waCLfVQSfeaz6Kp6fC6qEsmchVXzfMVPZWywaJjfyKkHg76mCN",
  "key6": "5w78yC8BatcozaLoMtHTPqQzNqp5f4CGLLX2zv3mscvYmafnFgSZ6vhEtq4fGasmxvvBpEGxRsJV8jQCBXovDEfQ",
  "key7": "WZTaQbrC2KYiT7bg1C3p9w2kVv3WpVJdufacLkoonwpLj7cmSsUrR7oXKK5spoEsCXFyfzRDRnAkThFgQiqQYSk",
  "key8": "2LkkHv3wcyfHmUELZ7DDsv7sm4SUkwjrsT3WSTYLE6c6dVomoCtzvij81Uek55Q8hxCPusEpgDPY3MikkUohYnHw",
  "key9": "2U4d5828xG3yXhE6SzuiPKNoHCpssWQFXXGfFQbKXyPVgDyjTkMhqJZN5DWDZuthqxdMidr3NHQjGC3inntqhNWu",
  "key10": "22b4Jhjzwzez6FnvsezDXL3PqbDfckwJzWUGkhdj9t32mFUeU5NnEj9YSsCxsWKwqojvjA4YVZXj4KeAdHx9iQyE",
  "key11": "4HghSd3UG7nGXyYo9jNoxfK1irtozUJhkKHUBdyRMuAn9Faft5mD14N7WxLFQrGexmPkCEz5EsXEKA2x2mW8MKv3",
  "key12": "4DEWuavmAkYy3D2sFnHV9WZvEfdAwiYYJUWMPo3MmYzyWBN3Z19PxKVxvvnryGKe3SdhxrRwYQvWkTZ8Re1niudG",
  "key13": "3jJWRgttNtXxjfVorTir9AoD4ppbzMvVfU9AiWaZ3ecwsFBZJuhSkyD8K5HP2rxpLzYCBD2pYjPboD5D2pui9Jaf",
  "key14": "5yu4MoDPV5NQJCwe5YegosiUJ8eg2SmZx8GyXGytbPYCAZ8UEe45b6RQ8XtcTxXjwZT6n53XYkGAZwhHVsfDvDgY",
  "key15": "59Wuih8aJPwbXoUx9gJTNDSkekWNPyvGozT726fDztZF2oLA7BVayUtnTS1hCCHxn6wRduVsJeQw4BP7PeT3t5CE",
  "key16": "452CLWP71DjrPpZA2ssmsAjknvDBnT7rTRTtJyv3e69JDGQDkrsCgytfDhpwjLQCVYEfTBnyvKMea1sDQXmx7j5E",
  "key17": "2xBboz8Bx1D1J7uytoEWVSw4UTSx1SYYHzGMT4P94u3XpkmkXagfCFaQ7Dhqt9X5ESh5Y2YXAHGiN6DFEq5Mo83D",
  "key18": "2JyZZ6mXG8X5Lrj9Kv52TXnfSkhkw5LKt2L9ruoPwGfXsuMMMfGgzfprEvxCptvR35dV6Jt4VQjcescDDzJw7yJD",
  "key19": "2hJ7xuS4D3dqLZ3AZQGe4mZm2vBHhKdu9Rm6nCBUtRWuSkqdTh3W1CUq22oBQCbuMxKVLCZzvo2DH3gzYJEThC9o",
  "key20": "49rB6Uxjm782Tu2TUiGiKscAJupcfHeV2RMcv4cB9qQjFpE9sNRASs8DYaU5qfVh4Z6xUPPU1RQafBhEavsfWKrb",
  "key21": "4H7ofenHBr6hnZg6Tu7NRN4T5N7vA2Hjk4s3WMgQx7iXeJKNWg4Mca7eF5YMQmtD1USCXiaMaxR5RKW2Lai9VZgv",
  "key22": "2funiiiL7LR2V1PMHT7FTvTMhmf45ji7opytDptGvv3KqaUBgz15Kck8z5Hq1Pr8ocuHKPtXvSn6K5hG6nPjED7a",
  "key23": "3De3GvJnaxjF6VboUGC8xKJCfXhBfRA7i9oARH5WXAc9u3Efzwt95GUXZjXvjdAoXWjMy7DTGuw2nrX1gDuUnmhJ",
  "key24": "4E5rYV479QWWoAePGAn3VPE3K7YYtiePueD6rRUGnsXNaFa7d9Xanu8dCPFaZs4FTHbfq9B3LEDxaqFwb3kL1coh"
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
