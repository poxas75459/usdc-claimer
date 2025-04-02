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
    "qtnLcax2TGLQSzz4BevXAXbPsSc5uajZcjFQTcVXgHyXDEQgsW8sQdJgWat1ir3EYoAjpfcwD187tUSSkkj91nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pewzf7HKpJ2KDP3MVhSbqANDb2E5z3EvbPZKJaA59LPDSL1VKo3yCRELUPr4YbMDYbrh66bH4VZ9EtPe5N9xagm",
  "key1": "LZw3bXp4WutRJw7JvYr5vxC7d6pF65awDKVuwD6zTrQ1GFZQ9hVPZkuxEG3vYtXi1V4dnw8SvKcfcLvfMGtwfoU",
  "key2": "4KRVQVQTaatKrHHY6KJU4aUzEUAzoWtwNjc5DQ4ZmWvuaJqQPVzEkx7WnUWju8trneXdxZ2CY78BkBoLz2aGxgBf",
  "key3": "4wuTZqQbGDdvRkuKWxnmwidGUGqwzqzHchgz7AepXba3BLT1WgPz3LcgBkyo6rvyS4Br7MUPhEFsMYUDqPHKcFcN",
  "key4": "kpa1pmAN23mTL6gVWQGoFBAqwqtNDuMf55RDDnoQDf5hSKML1dSsXQHLTTNQMLzQX76ZDVmFox6p6XVt3SyVcr9",
  "key5": "QaD6yneSMZRETC1rbJaL5dFhs6bBuPhFntmKBTf9b9MQnv9WHP2DuXQjrBQcVz6pDQvZjWisgKePTxcjSJp5Lg3",
  "key6": "4Q2dJmTFLrTmwZhmBheHm3tcWwQ7R3TUt7xptTFcm9krXHAjtEKoP8pMxMs8zn97YnmSyeif6zL61XX9uezL69UX",
  "key7": "ZdVovddWRFFN5Fd1B83fUeaR9uC1eUyNGaHt4NByq5Wayb4KWVrb4GU5Ep8LspTH2NVot3JXdmS9F8EwhKZRvHN",
  "key8": "3XxRd4xo3H9yaVt5n5Ma3DhsQZCQegreqyjSncP9YcdtZXw3H4BTzyQnKWRmNuVFn5ih8pf8Gm6V7BGXznzt6WRz",
  "key9": "3XZTnbVrTQaJSkQZcCD5hbpTkhdWWFbtdumAVgCGU2SQ1bXJDMtTKLz5rXPyeDenPzToRYyjGi2HMuWmq4LP3SDD",
  "key10": "5M2CirtUwhMjWtbFzoKemxXNFyvTEEemzgbDU4dAbgSYZUhXsWTsvHzLRNLKjTBLVPgWDqUh5wtBL98s5sP28QQv",
  "key11": "4kGof8qHQQ6TMfVHB9CY7t8m8org3i4w2NrPdhdY6iZ1pkQF13DfwSfwNYxK8mUSM1XR734cWpyJ86R1WTTgFK1D",
  "key12": "3jH6QjnbzrKfcuvAxBShGgYSL8V8HHsqVjQRrx9o7Y82ubwSAfHkUnkYkKJh9tH2ZQAtJAfR6gtkTVDzja2CLhjc",
  "key13": "v2JhyFpMmabmRYWBqp39t2U1VTutLaiGKzRNSF2SVdABvNesayddaxHLxa2nhPJ7D7VoNWb7mVLvXP9dodAksMZ",
  "key14": "2eTHsLTLnXLidPfV5ZcAJSjRNFnkqVezfN3XJyBgHRTTxF3gV8MTXX6st7jBU89UY9HgUq11adGgiwYMrrd7Bj9f",
  "key15": "2zrvdr2U2hs3jooGV24cxRkikjHDAuoVuQKYXsiGpFdtxGhWC45rXpLV2aqYfNQdu2oduz37CDXH9eerRuLTb1jy",
  "key16": "5ixbAmXAXyAvzKBgd6EeABT5QCUftSrbswmYmoD8tbSctuMF8ySTRd9x8wiaNmEMBt6e4u7t1M6AncphrXm4Bw89",
  "key17": "4BZMjPxhB1J6HKYtHbxpzwYFYq9CgoRqjRupCEkvi45r4a9Xkhhi3Arq2WMmDtjuXLJLtqUV89u8Jq4qnzrwYnP1",
  "key18": "5HgxFQZGSJWVfR7tQBK6godh8wNRvMJvmgmUdaqgAWMDbuLuD2GqsgV3R2uaHbY43docDahdPj6AuZ2LWBhqRUbv",
  "key19": "3MvqtWUgn1mwAsoiYb6H6Dy1b723LWg3XsVCkGUVHPadTbUFxuQDNKfbS96WqM2pHCf9utRvM6N7xhDDKcEhQDUd",
  "key20": "2dzU2t3z2ujkJhruvWy6EHfJXFH83bqhr9Cz1MpxpqAPCPEWsWexfqcmZYksgCwAAEbibb7N7pSCrCEvNyC2FY6t",
  "key21": "FVN4q9NEFfZsQFeG9VqtMB2aCXxwZUzu2CrxrL3DK4fQRQCAfbTLqeRgNEToS8bpBFMazs6aNKcn67y8URrhZcF",
  "key22": "2m3iF3kiZkUQLZuMxqubiyepSpJGyPzTkKiW8JBUWD8mYNj82etQoRQWqXgEwrmDQckjdsqtrnt4aJueisGDL7JH",
  "key23": "31dT86VezGnYy5e5DCjc1Gh3ho2EEydnHmmd5Utrf5iAhpnXaG6GJ9FgHCNG72oFC1eHiybvYcf2BhCpihzUaVcx",
  "key24": "3VNoUx2boxdZHxuUfLjR9FEDr7vffb3eKYvSzbhKdoNFvx8srzMFeMmNR6M5f9qXtDuh1GRj894gEL9cd7dy2v7C"
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
