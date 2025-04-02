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
    "49mRtd397eQuqxzoCAoJMq39GnkfkwwMhe9jdYQDM7pU7gipHD3xC1FqwcmqixKMeSVNLkBBNZGVMcSfYGUjCTHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yYv28NnpZBnRVuVgV3K5P8LRVAYdgJLnxQzNpvb5xFygGnyax9o31gNimvKvMdUCToskEmuzFTKzcWChnsnJqMN",
  "key1": "2tXdCwa3WMcv1pTbu86zA8Az1xB7keEZiYZwRRBYChUqvS7bESgyGzKsPLczsAP7DMwEtHJnxpdtKioWKdzZzMsZ",
  "key2": "4FWPAFgD81aZzL683LyFTc1jj2tFYzqwagH6hWNH1gMfCeVgAyJJVGYXDsK9XDDp7ext3sVX6AePJfNbddCMZBUA",
  "key3": "5xK6KcpYiZym7Xp4R4xJbjAT6V3A9A6rBLEKcfsWNoZkjUtAZASCgpedsfoF7B3w2GDGK6AeB4kyXjvWRJ2FxPfj",
  "key4": "3JdxX6mmhETqxrtmZWN6qdVrWnYyu6RznJiPyaUnrvQvuc6oY49hiLxn4NgKisXJG3W1bmkPGWxZckJ1V6zcVMBw",
  "key5": "uU7S6mtyWMty8Sz24wT9sgfagBfNKHuMujafex7xE35pmCTBp2D5fxYvAoqUBdBeAJdXy8WkRv9DXVwcx6bFSeY",
  "key6": "4fxy5KJi6ExzXohMyd24FwjVMCpgjA2WMaqYAWWUAkRYSJ2ZPZjwVpBub1ed5UW3hkfGsUqdLwWtknZtA4H6QBr",
  "key7": "5YAmYbSk1ehGGDurZEEvQyfFDpEpoSAFDDArG7XZ6Byu5i7NcmGpvS5STFAzyiwEs3CFt5otq1Pcbd1ZodrRx4AW",
  "key8": "3Tgou6qywBYLCDqbuhbrYAf6R2949r4aRHEuxseRWQ4Q4QJGuM4oVS7yXvJzCFmg4hzsS7aQMKmzfNpHT6Hgqvvi",
  "key9": "2YYWgro5jJW3Vo7h8GL1duwK7tzzvTrUDYNEk8dRD4uXeDFYSUJFwU29eF5FT1gafDJu711pzkuLS5iuJLASKwQ1",
  "key10": "4JcKJ5xQ5BAuHr2ENaKbYqXLfH7b1ncx2Gs7AQ1HqjSSP3eY7aoPLTPvf3P91bd6B5wins5bCWf7JTM8JAoHL1Gm",
  "key11": "2i9rcRxJPosGDY3irCUDHMgTLTbaPFLqeKxu5SJMSirFTAwgVdseDjKJBbNvTDZBk85qMPzirbf6nx2fhNmHULB4",
  "key12": "5xyS4M2Gc4YXC6FVgubdSs5e8ERhr4DNzqjzi3gtMYq1WERqQYYGQs2QstchBhfgKpWhJEmVj6hTGirvR2n6gUyh",
  "key13": "42g5nAobvLwXriPF36QupWinhBacmQGLXPyQgtYxF6cZD2FPmRFzgCyryBdPYgaaaUPE1MpBiUCL2oa6f5xqKQJa",
  "key14": "2xLCFQfKnGWRdpoNzDdsL4MomgE92k8kzTXaVteFkrh9FeG32WgXzStFeZJPidRkow9CBJPDbKXfEDEwLgN7NEuM",
  "key15": "4WbwASbNvJdLTh5V2LErnaEsEL141AntjLmgg74uPXHETNXzR3hggSMCqm3BSihtBrZYXtoSACYqQsp5j3DzvCzH",
  "key16": "JPQTgvJy7RnN3xYR7rTTUfhW19wSA7NL4smyPTPwRzUKWzS3ebyqKueVbVMXwPmv5m6hTnKFJft3vzFqwcXWQPW",
  "key17": "2YZNtzDU4qeVsXHeNHpiMgdwVdjby36bg9HjuqAmf8VxDae11BtT27SfXCDyjB9iv15iSR43jYiBezTED8DFRd4G",
  "key18": "5kotdLWa5F8m3XRW3ra8PbtAbRpDKpNyyX8Wxv7Ja4Pr1XQv9nafabg52kaaJ9CJqWHLRvEfg6T44jNTQNhy6MFX",
  "key19": "4Bqw8hod89eNW7XR76xJQ3bFMff6jRtKmdNwSJ58wMLK1XdDaoqLSWHMp6XoFU2NzkP56QP2zpYFpVcUV25gQHhN",
  "key20": "4yeTT526ruXX1C3DbeDzHf1maZgzYcWcz2iteqxoqtog5FwaqMBh6dgJXMh3BoKwxz699UgUyBoRz53z2ohdQYWx",
  "key21": "4mMVfecgiR7M2gkYaCxjRnNYQSw7WqrPyRRch2mj7oKjE6VmWHuCVPK2k9CKDWHMsWjWNTF9eWyrpfnUAKAzoyhf",
  "key22": "557HEMwH7Jupka613F5ZeHnQQJvUC4CQXLQS3vVBNrTmZPn4vwLHK97jECiPbW5QBSftB4skxaXq9A7rpUGTHQgR",
  "key23": "4j9F34KGeTou1cw6Yiex44Q3ipJnPUjPwCMA5wRPRQpvv7UHANyeXoUARjMyhqJjEJXVkqc4XNQpDg1njtECDuS6",
  "key24": "8bioaZby4TGV3eo5to4ncU45gbrKvziW7JwM9mHUVzWtYETnQq2fk9oY1Ubqe4ZhhxErL7Y5ggnmqWPAnZaoTZs",
  "key25": "NsuSNyxCuAqKCmME2HPT9zei3CGZcprFrfg2EU7XitiUdsimrtboed9LFbFNGXLDqCwu8vBMa6pa4ULD6ia3FD7",
  "key26": "3G9kC7KB73Jkf53rkShpedC7EAC82qrnFjpAvgMMzz4e2kS6kEw5Zh2kU8jWJSVUBHJogXbZ9c739S2cS9YJGi9x",
  "key27": "2odhMiyYSHYocN9KDG6NXzgMRdJSfpMbZ2VWt4UYRHhgWnguLvDrkm79c98WDirXdpHoqkQunX12FfxAAX8eFke2",
  "key28": "3YsMytPnA2qLynXNLdLX8wH59yL1aVK1HuY91tasDjLSCEN4yqhymPtv1yL7NCirHFqLHCaQudbd7euFUSoB9vPS",
  "key29": "w1a2qxBBRBaRGVbTeM7djZkHz9WNVk9soVKVQRf3X32V16KnjR59Hnxwfhy9zouinKqwze7Fat4R3PJPZiQe37C",
  "key30": "QuCQT3oFjoLxgKWW2DTHfr3WmA2kzHhRfaN6TKCUoeLFM7Mso13tUE45L7DKt4Rkppo4jaMxXtcZe8mMrToUcE5",
  "key31": "5r7EeZhUFiDdFdQg8rNBDJBpobZzu4aBaBiJnw6gjb2PeDkpGroYm5YvfzcSc9d4Ja2uboKZi9o5SGHMuNCTsbh3",
  "key32": "4Df7UH7SsiHz1w7Ru3cXT9SFzyZynyFuYVm5XmD319V1ybZdYYWo4e2kMv1pYF8DjQnAtgE1XyUV8CZAJ4ieYo6U",
  "key33": "cXhynJ3usaDfjWJoH1NkZpJXJrVQJowMexUudCdYJsrtnzLMhd5RXN7ofFJAf42uFtBryDLk8zHtYmiJTaiz8WD",
  "key34": "5nGA4vesqbvGG9rJ9FNn72CqyQajMDVPyz3wt3eKs97d8wrCdFfR3yD2ZTDuSDfhzyUcmZR27fK4ocyzBaWcaVrJ",
  "key35": "5ExypyrowELVp4CmGPjEW1HLfGM4EDPauVMJFgUdWhYLNop32XXQEq4L9kSLTHKV7Gc2EzWXDgHW1cVbkDStTKFa",
  "key36": "5pn7t8m1J63HajdvNysdiuqxU94WHBwKMuQnFUWHTpwzCcH1kKcbuDDk1XxCnikKAxmSk1ZYDbwLRQTLSgU5ne2t",
  "key37": "2oXqCPBviqQXEaQAJBAjsLrwqp6szcfSa1VWCtxepsUQ7knJ3yPEQLndvb6idptt9QSEwWE17cXopiC3f6q4hh6c",
  "key38": "4TyDMN14mHTHKcBKWaMhga9Yex9xNaCYfKkSVSyiibrfivr2uLGLRBq9dkqbBHrmK1ku1pa4jp8L7VTC7aAdKEXY",
  "key39": "26Vh771EayhwXVpfq6eiJRrYzA8X5hsqew5BCJpK8ehtBEwzV7dmRHnjxV6pjUCNLnweuphE1Zh1BfVgeTLbAnfd",
  "key40": "3YCfrGbiHaq56u63zngjwodSHMxTuX6zy4ywzahq5NZvi1uUyz62YWvtH7y6KdoFpHee2MNizic3CYjwTVpFPMSA"
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
