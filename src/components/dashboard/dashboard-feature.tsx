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
    "2Px9iLuaxfavQDN2jn9nLk47GfYaJEd8ARaAWLXPucZmqBNCJgBN23bXxGeTGFh3f3v68sCBTvgA8Ti7KRmk7Bdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ur44chm9yDNQWXkupKeCTzcHi4Qzekni35X3RD8KskeyGnrNVJfM8MgDzUdvVqE2U8o4dRYScoqMTp8pbE3smou",
  "key1": "3DMpKma6Rih1hBgYD8hgVA7piiJpQYXAGBzXxStqNMmheWAGY5uAGv2Ei8udAsjJkYRfHdZ3EFH8UNu9RZ7CuLX4",
  "key2": "3mRRJar3poPtEaqiuqStJhGtaCVVbdktAvzdkY39uQkdEVQGEuVjUbHcKuXioBtKAiWKAKhpgX8JAvnajaEdkgbe",
  "key3": "3g4RpksnmaFXscRCSbtTT21bt3iRVoPxRrPHMBonrMfYwYCFRAE6mort5sA7ej78UTxZKGJmTkq6sTR5pP344Qkd",
  "key4": "2qrKHiMGvEkQxGkEzZzZaTvwTGBp72QDbmk8zAu12EfZ2QRYfk4N3igs7kUdkenvWRdbdcCYBUdYu8zYcZD7xkhx",
  "key5": "42oA86oBk71opYc6BujnhpFm5m1ePSBvLUsKKD38n3d2AigkvH3A8fTJZmcsjvbv2kwCi2eB78hZCBpbc8B1zUtn",
  "key6": "4wCRmoU4LSdGnfUpLhdH33R8PBJimgLcGbfMe1kZrLhDbZtQXaxDcwA9635PSqidBLUfSsZwEWrbPDPZ96XQURMj",
  "key7": "5A9k6NftFW5b4dDxnqu6y5Ny8z16qdwc1iSNVK2MNXduZWHo9HMGaUHJ8P8gfJHQCFXkDYJTcgaHaBYCxe25tHPx",
  "key8": "A6KFnrCn2C4ezMwEBcTRUf5X8hhrcZh3C5B6yv7Bwqa3BXq7tycB66U311diRJcSDPLtqVGP9QChixkkC1pdeKZ",
  "key9": "4VZYhed65tMAww5hUASS2vnUJzYzmnAShVrtJfRVCDTq9u5GGkcfFXgZba4DkLtACZyT4E5uSQ15aHKwCQx8gugB",
  "key10": "F29x94poex2yerbdD2mZWoa1J5r7iimqBR9jn8F1LauUTp41mbFbNrWpPbH2Gc6rVKooMG3tkU2XKZRd5yxWK49",
  "key11": "4qahRtJdtey2FqH572aTje4tfwJeEaeqxJJVYM9Qm57ogcJMUAuWZJCDo3b4NSgwcdVSSJKszEp634J69nK3FDKK",
  "key12": "n6JMGunLGFTWvQgg54nU9wA9d9s5epqV3DydRfAc1hG3sagbfSWQo8yB6x7BGhrc2aXPaJbAzVbeHZ7CTGLNFC5",
  "key13": "2ypuL4cDyW5CM5SxNaj3z5BwAYJzrY2pXenNo8sVV6C6nocGMLAeQvCeDF9R2uJEWTLTjZTQZY1YC2hAraPNepdN",
  "key14": "uiu3HMVtdUpKTgVhw7qgUcyjw2CDxcRuHLRhCnCjZzd4omHoFVJ2h1dS6crJgg8Fd5Z5eCBths6XieBpFrFFFgJ",
  "key15": "3nGyFHCKSmp6vrxmmX4TxFqegCKVKFCr5QeZdJauBmfMQxHpF5uCBdGiMCvM6cCBzDTL8fFDhrJqAb6FvC4vGtWw",
  "key16": "5bLJNJ7MbcYhPHTdK4Xq6BhGaYjFTY9DWgF3zbSfYcy5GaVWBpb984uCBikCVREobjbS4azELNPbmA9fc9zRn6mT",
  "key17": "Kn5PwzRJygRhnVEa6EgzaQ82DSRzHKGimu5gr5fQuruEgtEbCecuhcyVNU4JgJSursKaxANiHDHHjUqin7r9eUc",
  "key18": "2Mw7KWCG7x6aLmc1fPA4vfbEk5ZoE86HZBJuCE4qkDfn4u5K5G1rydaZMv3oNc4vvKLq6MC4rYFssXWpjsVviX3W",
  "key19": "2FP9xtUUsy9jRPzoLduZv8U2rpMpehvSseyqq5NGrYscVZt45B7nkSR5EeAUs1unVc8ZaJKr9Wd9ggAgeJzzoECT",
  "key20": "KogFBnANBTgASq7i3vFUmx2agVWavzHU8LjhLn6KuRuwjctDwg4W1BbLLSrw3CUn53LSFZZRKLfRLAaBJRfURPv",
  "key21": "4xh8CitBXqU5uMjpCcTeiwTZKFVZdsnkNKkWe14wz59Qvcq15zXi9adYB8aH5ji2Rk1rhGMph68XjzpaXy8MZmiw",
  "key22": "5ZDY2VedcSx3XCrfCQABm9dzZMpjoMSM13oCyuZSDkrGsMv8D9DdLvMZmY2dHXU3JSLAoVj9ggPbEyU8isvg6PrF",
  "key23": "PeYBTPs9rJikPgptR3sGrgHizkQN7uowAmH4sp8ZQEyEdQ46uNZbxt2tAAreQDNFY5iS77iuxg9BVz6WUJ7hNJk",
  "key24": "5uGwm22voRx95iVDH6yUwf4tH7UscF59Ggb6xQJd7YD191DzTXdCiLu1CfeTMW6c55VQUykxiorF1Bs6pRXe9qeF",
  "key25": "4z6NYt9Hdvt7BQsV3334C9RDrR7f7jFcnKwFX9oMM1vCTnAcTEhSX3RzEsChuc6fq922MgPSCgAV79ZLb1KZz2xy",
  "key26": "5tH5gBe8x75QZEaF6By2TarLoryxmdA1GNty8zJgbncCfYp9NWGqxGnxXcEY4iEUgtyKXd3wpY91duSoXVi2ycKL"
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
