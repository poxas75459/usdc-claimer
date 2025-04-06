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
    "4WDHVzJpn3F1Rc9jQqbKvPS59dDy6UcemRv7jMmgaY93zoKaPJbP4X83g4aE3gVTkfLfnQdPydBvpVAsu2BSAgEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twAiyAYaKht28Q6AvEtdg1Z7Xgzm8z56JcVvGGe9FJKuA1p69FkHai3ht3MzqZTXkj2zjJYi6Y12t6nQdHcue1g",
  "key1": "23YniEunHr11fkp5Hp3DqWxbPKkYiX5BWTpyo68esanh9F7q6uSqMjJ2tRjdqTveDXK4spFdZXnhf8aquBHgQksF",
  "key2": "2AHD3rhoJcYGCZXrDKNnRk8QVB73eZ43sJoRS9roctX2yGdtQGX1SEhj5jqD3n6jkPc7rWyUVa4YK2a9CWXVe4Uc",
  "key3": "3cC3uZj8Yvv3ZPMpuHg8U4kqG2UdYvEy6MwURxCsLDsabBZigKrGPBAy31Wr36Zamk3XcBby7xF4h6Y25kPbDbVJ",
  "key4": "2o5ZdGPEYsfznA9QFeBJ35zwt63NZ8LeHejJa5dmN3FGNHsTjYb5YPif5Z62TWWqbQfEF4FbuhYS8xD7oQCfwteQ",
  "key5": "3TrSrpM6vxDMzAEKn7ZVdJLFSsiYLjrqNMdeMSFfbDR1ncv5iM4tVNF2GviU8gE8xjEPq4htuigYPxLvBR8ffVMo",
  "key6": "trE2PXq8RkV5S9s45JwUiQZPw6q25xopZ9SZWKV7LmCW1PX8T6m9SLDomRuEyawUGXXLFUywFs1v6uUWpZCGDwf",
  "key7": "7xFerFx6cjkuHWshx38dYcdeDcfxfA59wnqAVnY552VUfhmm55ftHTtEeyhy5QZjY95w5XYSmW9ACwxdzpqk9oV",
  "key8": "2XDFbRCFYveib8My1hT6NQHYrtEwFsgyJxpGP82o5PRmhWrN6Q2R2cdCKwDMdtQa6bwa8HdjLmihackxQkW4N4jX",
  "key9": "2cdYeDFtvGSt7suxMh4syvRcdsfRjPGAEvDXkwtdAdKHDRsRMrCLZ5FsYHFMBVobeghQf7Cfjhfv9nRS7gWLacHy",
  "key10": "3xz1qF8x8Gzjv3JDhNWAyEsq67V5SgbK2Amugy4NA1TxHpPfrpGbKAQ6Wt9BEXazfJ5WQMx5NxhkD71R6YQeMF9g",
  "key11": "3hbotUGkgJb7qMxoLEGq9wAComqoBebLSdh4xmvP7d2ZBK92VqUeuN5BswYnYCyqpTHRV7AbG4SdKe7LFPxRqhuG",
  "key12": "3WeEZ4FQSpumpFqbbFAH8nYLh33gdxdMWFqotEKhriGjNBG4P1vVCMk38HrASiCPMiXnW8mct8U4vEJ23SFoAvfU",
  "key13": "4HAkhxzFQjbZBoEAyG6A65pAHPMrwnNbeocCE7e1FPXVtKaVic3b1Byq11phDm85rJwkbbkaGW4fRwkbbbnD9mgw",
  "key14": "2e22GSSGN5Rd1CZgDWtYS3gZKQSLPmf7tLiGudq6oWKE3uQZSRoryiZjoVp23Y23Fjny3PuFdFcJD6xuaNcgMK1n",
  "key15": "5dkmduPtj7B6ScnfisWjSxK3wVwcDR3LabnXQTr88yXbqiXa83f1fwnhzovtY2z6XKJQiLc3yEEuThHCTbekyjWH",
  "key16": "4W9Sgoj6pZd8LH61pbedstD2oXb4MFqKd3wVQJxYa3Sx6uQhKtGAWrZHj7CyrQ1EKDJJ6uRV1J7hLaSctM8jT1vK",
  "key17": "4e7rRLUQPy3p7agSk5HcJhtXvtYpJi6ktS1qaEb7KREvDafeELPe8DfMjtYUA7Nqp7q1PYEyeKV9BCBjzAstdXk",
  "key18": "5QrKZzFP9VD8k93qbPY2rxMzXfjZ2iLvUA4JhnC5xs1M6Se3Demu539sGM9RfGAk63VMgzBPuHh6ZQpsbYpzdhFm",
  "key19": "2qKKcb3AhxsXAoiq8KNNSAUDefk3VMqCrjm1v9pBBnzk9NKq3X2ea9FTDKZHa7hsDCDY6Ennu59ts4u5bHKuBGJs",
  "key20": "1pDkpGTfS6WMdDrYPTT89EvM6rt72om643Zs5RGxd6grFuPpN15RGBurUf1YkuqH5NKdc4mbBsWNW7QS3ihrtsN",
  "key21": "zgPRoCZZSRvxdQoW9rmjptqfKzfo7NdyWz9gvqxDr5nmpNFt1yZwMo51b9eqUibpjqKLB2EpxCcaAJY2UF8hV2K",
  "key22": "2iEDbpEtBK5s2iWXv6kjVGRJ4d41G8Z5manySdD3no69sFTXreyGDK5FxQdwfCepfK6ZTp3HVFroCSJzHt182sCm",
  "key23": "587Fo9FmRdURgXfaaAwN5kzshFCxq7yre2XnX8FdPkuT5i6N1SgeT9xbWudCgHQxZa9Nec5695hxRg7YccRh1gAu",
  "key24": "37B539s7fEDfTNt2J7SkXGuH3Wkin4kFprdP6pXznVs4LBfTFS6Z7nJtfY81PBMMarb1HGxZRTJvkas7k6b9T1QX",
  "key25": "59pBg7N95cAQEErKxFw4KcLRp9xhN2nT7jGd6Wz6R5Emqddr85ntWcYe3oEs9CS7NpCSY3d2qrgqn8igGeeETTeV",
  "key26": "3MfkY7ui8JmfVhFyR8MBTfoaeqx9niXAR8iw3XhzGLBEAa6RwL9bwnqByetVR4Yun9fVM9Rbj49TtbQfKocd16kx",
  "key27": "5WyajHaEGSNtoGs2z7vYic3qMg9mR6u3BbCQv5cDiHGrPpoMiWCWQyvzpjo2nH1Ht3ATLqe89P5cohp92LhYqeRw",
  "key28": "36QfUWkSSLuAQj7tnctaHXGwSUC13ruZLg6hAiwD5LwCPMPZg9uBpdkyKZ1P9UNvSAA44kVh1E7nDSBU787DxWaj",
  "key29": "5BnL8rkp8RVLkGUyvbq6Hg2PmUjCe5vcoNZcUbLD628LV4vyzvLZV7cJmR7ciU7QvRFSRvyA6oJAYfBeSN5u2kD6",
  "key30": "52BAV5QvqoCwX5LvNzcs1Va8iuTMY6rqJMAe2b5RYegu5LHiMgHWbsmMVrY5kXiYLvBeBtx6RphZHpVLp3bCkzXf",
  "key31": "49BMH8hkAXzQeXGh5o8McSunRdoXeDR64kY7frKcrmrN6sKvZTAvZdsfEBbagbujB9pXWHy1gahUe5CoZJq4ZpGV"
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
