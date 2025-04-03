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
    "4tNHTJZZYqZ2dXk3Zm5pHkpkFDQJWiHakfzcTLXQcwTfT7NHEWUwT7eJ49FxjXymnWoKusHwk5WASrzcju4CKqTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NeHbmkDT8ZJrQU8Yf2FgLzFgbce243kM8zSg8akeg7FBpnZJQYAQ6yVxYaB1PpM8JwtsGLLRwe1GjsEwnDswezB",
  "key1": "51nVyW76i9MdRm5CTdNhDweidyBHsDupkiGwdPRrkJcseGhM8FRRPjAdigPutVBNAENmWQE4XH2GNhku42Z8v9hN",
  "key2": "5GhJNse2xVQMPLBW2MQoPNFabig2mEoNoHjnA2etAqc2HYMCPU1mBr7phSzTnTrZvEee783mkBFhAh4WFWJryjqq",
  "key3": "2ftko5bXZH8X2aTVvaSrGp1oXa3iVdtoCi4DgSkNkjNye2tBRjnYp2HerLafSQ7bT6XNn2AX4mCgS7u5w2KcoE6o",
  "key4": "2YRiiszYccZpnNaVY3MZsZuwuJ7XHv8XfWFokcnyQD4iAvMFnLwFyueG88PX4o3LeoXzfSC48e8Dv2e3TxBARjAW",
  "key5": "iiZMZube4cLiuAmCGCbpyUiwpRddd9YgtizcuRkWahjQe2h8wAhmbzncgGUN54YALMvJy3rKBLFMXquv5pMY4Ho",
  "key6": "2Hxhb8DoCx8NcmpGhMBLnWvynSMQNa63HxZPfgJn9x3tG27MucoNqep2V8drpZvWiMGs7GSLURwQ7HymU4vWXB1a",
  "key7": "3RiWnaQMW2BBh6Bw9DqJgG9xD1YnV9KZZE9oA2EnEbi1Kjo9S3tWLC7pcT9N9bAqYtM5Bv9mSbimaWKuphw97rui",
  "key8": "2zyHfeYzgZ1S77c6EnBAFLZG3cfBdtzovt2iVyPY4t1Bv8UGdXzhEvcf65TdYzHeHAVaUcFxng89JD9cCHA6QYfP",
  "key9": "TQZW94rcGfLejGt2faD6LYakxiZs6siCvnzoEYG1SBWf1GrvoxXExW47kSLkPan1JPksz7BFp4fac8sjt6AYUuM",
  "key10": "2MuEcLKdqKqwnhhdMNTq7CPKN5JwEB72uHC8tcMX9QyNdhDg1g2ZFHJ5J82jDWeoyQEX3YW7JAeMdCNG5f17khkz",
  "key11": "2He2B4hUNpt8CmYTSjdWgwaFSC2Gy46kDbcQfNemG4bjXc7KmxdBQKKwFRyJmwPk99QsKABMWfxayLeasCZpu9AL",
  "key12": "7TFcmdLkpHKB3PnmhFChJnzBYg77G9mW6L2cRG3hHunCMgjBygXTbSr1M7URL8BmjLKPdpTuaE3JdzgXoxMDYKd",
  "key13": "2GR5zSEA5tpzVgbHaF6E94dXx2y2atLAswg82rMGVWaL5qUp3UqFtSckp6x2r9rQ2KdtdD1TPJJRcSFzHWyrqbG4",
  "key14": "5BNref6e92eXZZfuJJSrFC4f8dFmJ72HJyrj9v9HEVCFAzh3t5HEMhNUJM8saBSR36ecFoCNT3yBmcjLVJnuj32Q",
  "key15": "4myYcuTB3jUZir7yodTutN3mxz1mLenRkSjsbkFSoithk39t3jEbnTPAV8MmEuQp5txWdFLQqGGD9vFbgnYiMqKE",
  "key16": "5KKkFcmozAWPwqik2KtDWEh5MWeEtEKChmbrEsMFC48PfRAqu23Xmje9cwLKUimHtVHzCgNXe3cHXwY2KvHRof97",
  "key17": "vWsSKxQBtqnS7UxNeN7TTdXaaL2mBCHUQvuqWzi42GjBhsmeRSApvCKHbdc3PnLTfz52Y5m3gjRuHfKVpNjBhAK",
  "key18": "Xekq3goL6PuFBasRazMvZ7HdhDrL6piqAUpq3b7uA4QkQRou36Jbws6bwRg1TknjntH1vHzQ8L9tnrYVE241TPV",
  "key19": "3jxi2Ao82Vt8hBBVS18oCf4XvqSDj4wJhw9ayDzQWZ6zVKdX6RNmQY3zjp97zdD6H9tVALjuWaqMLVbPRNpenPaB",
  "key20": "ApidY1YpcsXh1GDNrds7uxA1spY1yzCWAhn3AaFT3uKUekCzatBKpkVDRs6f81ThPFxBgmSMNSF2rAmsSDLjb69",
  "key21": "2pGdBEjdStexpAZUZ6Rotqu3KoQqcHYM4YKtgUofUL3ha5nr7kCQM2LJGMV2cayBBbKjuruF5SVi2RuQ2ygQcp2U",
  "key22": "2q59t9brNhYVK43dhavWLP1wqMdeNCS8F9EaNg2X2KMj6c9iZbv5vT7MfP1CbHJ8zc1wJgsFdQutuQKRfqXhgvJW",
  "key23": "5PE5UveC5GKZdKAWVXS3uQ6kqviunn8JUMJYi3p8UN6upWPh5GB24fr25nBs256c7d3dkBxt89U6gASsPfq3AJcV",
  "key24": "2MGK8bAeCgVaGVm53EFjqNYUdtbzmVgWWt9XTqX8NvfMZ1uvW7ExvbG3KA4KKnshvse9sDjeVc2DhtodPhoDrV5h",
  "key25": "45xttwgYjA3zDSokXqXfApfnWvT1h95SrQGQusZJ9eB1S9K4R6qR8Xu8DLdaQzvYL65sK9C77m87E2fV5bGDn6Q6",
  "key26": "4nwcyxhp27FZrAc5APbZ7EdSkhH3g9moBptCnr3cwQRKAGmTVnRMFMc1o5bUicGUghQVP7Wesf9ZTztjWK4rMbeo",
  "key27": "5D3w3YtJqtFD2b82trdWqxQpAbv2mAVm7ztdj7FnhwBVeDtSo1zzPcf4jEh9CBeCmb1gAhvkNqDbbuMFvGym8Vgi"
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
