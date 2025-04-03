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
    "4RvkWSucU7i66HS4c4ogPDoXkrTPG2Lu1Y6bxjbDgReexDvDnyM7UauRe9P6sdcdrbQwofKmpumFaG92QDPLVvJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xMt5gWmvCd3bstNqt95epdEBSuX3hZALJqabS3QYLnvnXwQbrsvBEVJ2ryEpX1a2T9DWkVYBDQxvrgL5kFWU3Nh",
  "key1": "3BgFJx2qHhez4YmeEsjRiDHTg5kmYFTfBCrz1qiKLme67XLt1Dy7mep67DSiKg92DKsQ9d8R2BtaXME7m4S7DVsU",
  "key2": "3s3fvXDxMvvZQtwnGEr2jBgmWV8hEGcy795JzyDDsLj4VsqFATK7DtXixYcmYFUrUHwj6gqhod4e6U4PDpVfvzMg",
  "key3": "3bNTzJycQXK3n6BtEBSh1ooRMX34b34pKHA3z1a45isCHKWKrSfKJSFKG4x4swZRuZTYzRf7MqjeYcQMWX9xK8my",
  "key4": "4Nn4SCBoG733RFt2NkF3ifnD1eg7HuQMfHHuxYfMeQRuUnoz2pKYeq8sWVLohvwHXbHJB7TJ2FvSswKbcCcCTt54",
  "key5": "31NjvV2smjCAhnjEYi4m4BZZMmMc74tG65GRUV1FLdtgAFQRJCRtD5owTT8KCp2XWgqgkZdbJcS6VRgjFhz7Rr8N",
  "key6": "4eAnekFCETYMs1L9dkZV97Pm25pEBeZupra1U15PDXyiNRemo1ySbiFXxx9iuEtN8LAoNZFYQpHL2fjNtAG2mm8R",
  "key7": "2aUFXrKgUzskNegmt7NghKcU1ymHjeHjhpv82A5t3JZPWkT2LrKaaiKHZJcZeeUQ4TAQ48fMHioXiPwVAoy6aFMS",
  "key8": "4Roow23bktPKYX5fQvt6Cb9hkKrzJaVsBpZBLggY67FAQoVUW7cyUfmBXM6KuyB1owEyWS4NQCAoRGcmFPFZNc1v",
  "key9": "5MPj462eheqyrDaSa1NnAACa2pzVgRktc47om3MkThTAcwmRELoWxgQ1EyQ7R86XEcwy1d9AKYkG6NPXgfuaB76C",
  "key10": "4kDh5xVuTx9aVwQYvaXu9jGLMNjQvb5VMf62QWVe2CPWm8hoz1bJuDoGVPqsrwvkig6Vjsaa5UxGyT2TDMgeD18X",
  "key11": "5ApFjcdKtyqajf78L9NSLXg6WCjtpAid3sgsS7PjXhABqS8jsvxHZfEYgBgGJqWPZDBJTX5ZfiT11rWHHYxN21m7",
  "key12": "2gk94QkuoVyU1QxDpHAvMDrL2s9FCbZSpytbnBxAwxGK8kjEhge7LwkBwfqs2zfYS6nDGAWgtzyggDixNJPoJ2hq",
  "key13": "62p5wEM6RC3X45r3mSXH3w459PHXbg83FZNGUZqZhzsB8xAbqDcWBQKtNNEUtDBm7YHZyfQc3vZ9Nf5MfMs8dNRC",
  "key14": "dZYcBn4qT7fhAVjFR2ddpkKHBJn1PPwjr86qsEv5kHSio6DrhW3zTpyjgoswvj4gr3HUjA3Njv9EccqtDEhWdXA",
  "key15": "7kYqJQkK3vq2tWFxHV5yVTuXLy1dm7H1KaRE5F4jXQUjAiamWoSnBdZT6g3YM2xcpsatNyXAJvrtfyGH1wcMLbv",
  "key16": "3pqHm87ihjdEyKRzeTm8Me74ENZmEsN8X51TzE3KKeWCMMmHYMpbXeiBNypiM2ASuX5gcbjhh2uFaR27RP2aPw1V",
  "key17": "5t7aHV2NbwrWwrmuFnA3uXrQZX4b4sEK3t3zNnjftgjdPDnM1txc8y3swfhVzGVQEJeAYKva2Xx5pnhnAKeVyY2r",
  "key18": "4wLzMDMvHWUSA76fGKAVbhX4DRMsR1m3fxfsr8rpU9HqoeJ4gfnfGfbCZFosDcjyZm35arTwNsHqbyDJQnVNK7cq",
  "key19": "4QPN9qbCstk5LLc7aszfrT1petrSgEHHPC7X4qvuoZ6iFHpD6tDy6HzA35Hsx7hSXMhfsucVGHW7dHWhWMyvN4FS",
  "key20": "2rVCPrRwmUfGsh2sFdnqkJ9e8BHBYc2zBuy255ysERZaTj5ZNHhDNFtcm3qZ9q8kpbenajTvHjocjKMb44cfQ1f5",
  "key21": "4sKyAbvwDu1x4wLG1Jdw4hLXdh3x3yzUX1Ua38frnr8zcjgshv5cuUNE65Kaxf8frYFKpKBwsGsieSQKZF9bHkTN",
  "key22": "2tZkguLJhpqVByvr7vu862zTJHdhRKpHK7hMj84X1utDjGnhtGGqjJDZufxHoSq7AbAYLinVZZoKYLBGb68BagYN",
  "key23": "3eMD5yy5St9L4FoAjYA6QmJhtaozeJT4ixpskcEhefQcoqpmP2SG4VFc7dHQQvwu65S8KK8yd1VYm31Dh7pbFmjL",
  "key24": "2pQjoktdaApZSF5MXtv9n6ScBXC1976fLv6Cm3cFpSPwjwv9KCYLv6zVinEq4NHFa43KydWTkGHVDmUo9QjatB5o",
  "key25": "3jWMsoVonPaSoYzcSfDL49g84uPhHXGeTihag2oKr89bo6b2bpRYDAqgV5JA5c9fLLGqBAX1nCWvhSves3AzXLyQ",
  "key26": "4ecdN7S19DwbpWRuEYV8Q8xUiXQKVpjJ2EbW7PBsi4ZctNsUwux7wU2UeMnXvTB5pMR8SfzCQLKAvoNMUyioeQRY",
  "key27": "5niQoC7dy2xD3cEf1jHMgMJRrae4egMbWxyA8FompdMioncSG1SzJHFN34X9u4B8PbWbCAxTNfrcNzKvhkz3NT4o",
  "key28": "61VGwmsPb4qs4o27Ph3v3jLmKDXKUkHBoRL2LhGsY3uMnLewmA7DHrxttndaN9WpH8FUxWjt9zdnV2xHfneDuBz5"
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
