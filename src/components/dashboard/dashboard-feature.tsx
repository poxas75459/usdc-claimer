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
    "67o2qMgqukmTCzx45kLdtD2sK945gRF84s9YfptD3VZj2Qy6DbC3qMzXx5KA6pWcgErGcgpGdmrc4SQYzspAEaaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JZKdgTvz96YUKD1L3yPLjQaTa7DpsiLEZEd1aTRsGNWSx2jGa2xUux1rLz9s3ucyiVZZAL2PWLXKoVXY66u5m8j",
  "key1": "2VYDPY3irdcyfcYjAKYAWd2fyd831q6VgFX17jMX3VQFfvrbGoepJok7arD8mCnXjugnAzPZL8zQsXmwrLwo9pm3",
  "key2": "3UDRWMKtZheQ9tyWYixWutJxhHYcdRYv52if9kzMsPWLiARHjVDeckf2aRvymr55iURMTc27ab4ifVYbsT6K6d4F",
  "key3": "3WCbfZQUbpMbHom9yjMGSxzwdM9Mgaijb3tZtE9tc9QVCMZYR59xWdaWPAUfLPfbQPpBbVx7SXuAeyd6ApmrWY1q",
  "key4": "3qAerSc9yNwNk6nsHMP3pfP1njGPTQGhpn6mfrXazhA96WPBgPUHLJcc8Boj4DApqc8SpYUYpP8JxcNQtHiEyr4U",
  "key5": "LwaCmwyMPMVyj6Hsgfqk4kTHYiAGFfngW7DLHBLXBHmaVi2vw2JzjS5sGyLj66SehMDRCEWy5pAuraeu7k1kS19",
  "key6": "27YnnSgYrNAQzqC5vtsaQBhcTLbSttvK9UMiZUxbCUVGSXmkkKKMSbiWDxBucehx3GUNK3YDgqxGaXm9qyT9nH3z",
  "key7": "4qwqnAhVFNWLVbiPHM5Z1xmWH5PMJ6f158nTYzCEJecNe6D8iC2exo9VyPFvQ8fdDHUZtQQzTvTHdqds3u1qAL2G",
  "key8": "nJtsowoLUHiEQ53UB1R6r88FQoPE8yCbqmP4f3LLcLRurbq27CQKQEXmvPxY4onBu6KskpGPJnSTmuXnp3EAVuR",
  "key9": "3NLR973fxWhywnyzC8kcwPMBrwMN7weDkeH2T5Ns417Dz3eL978Lmpnuwnt7GAKUEJNLUCjyrgmaaihSnLKiqP8n",
  "key10": "38mS4uZBAQQvc1o9Lgxaf2Kxxne6P9BzFvBsSdrhWZhSp2KjjE6dqRcuxHd68C5fVfq9nb5gt5WVT3Su97knceXX",
  "key11": "4PfP62vgznyW9fY424vpaCzSbRYG39a7DUqUFUqA9PunwVNYk9FDYNsbpcFGRzWfytJFy3khCqYEokZytv4LGiPi",
  "key12": "3UJR11TSLYHnw1CSJ7uuRWkmpcEJ6w88Y8XYv9kprqevehWQGgtpcoUjhTES7LhiaLyXoscJzdKN9kve5xYfmrDt",
  "key13": "5GVp2gGKHiYC17WMoAjFivSvHP2LzxGgLfTEHuiZGAAJVdYpPf7EpWmLCaBo2vaezBX7r39NjZcFAkq8DjGrG4bg",
  "key14": "5KVZP1nt2Muo5UzTFiB67Sc6Jd7A9GBddWMumGvntG1StuR8Xq2XAaT5CJSGJufHHn5xPYzuV44eZf5fLAYBiULF",
  "key15": "49boZuV7esgnN9rP7SuRX6hUsam3S4k6fk63BcfFxBof47zA96JPhBAnQ25CmbC2x4AGFEc2BELJM3ChJ2hHTU5j",
  "key16": "PcxXtseEsnrTcZTNESeknaq1CLfRYUQ9oohP4UsRPuKsnNjhxoWTcixbPDRDQyZAimScb3FJcm7QrbpcrNbUYTj",
  "key17": "3ZBdLPNQPZKQmJyEM8ssd3YcK3MHsvArEcPsUpNMLhKgHDYRnF8YPedSdT4iC63aSKynZfDh9194aFGLgEbeKxfW",
  "key18": "P1kZ8rXRAS5WwAj5f26TyGfHqJvuPXMGrNGRm7K75k6kr1hF5tkVRdsoo7W1u64P77BupNEvRBhnVJCmFcWeEGn",
  "key19": "5BSu5dfutRKRmertrJGcjyhhSEVH7jJVW2DUfmwWZCTBhQGf8uDwsj2FdBqRbpjfw5wbaiDaX5UJDHDaVtPTxnVN",
  "key20": "3wxEnDvRYA3uZRjwszMKVw6Moh1jqcVubifUzhBfFP8sBKMN1fD6r9MRbxAVEc6TfDUUtoUNoYUbwBcEM21pgq2u",
  "key21": "xex7ruX7k6Lib1oq5LRdKdyziCKZaGw3m6u7kwoAhUnneiZ1dchKytRJ2d9eGR19TDfbfVQvhhu6k938gAQ46rr",
  "key22": "4J4yqMjK86rDzV3HzvQr3U7NHs8vK28KJ6KkGJShRZa4BPbFbW23ABTJLWS2jMdFCoKoxXEbcp8WqdACBH4dQSfG",
  "key23": "4cxWHcgMg92zXuM7b7sVVv4do4kZLBhP4u5yNBXU5sHSgSdHbwUyz4R9J947JkXZUapQ8AocRcDAZrtRKrdUSyJr",
  "key24": "2D2f3w7oMokjcardEM7xN74YcZB18V1UqDW72iWdok5746zCzGRjrg1TEanyUddngRSDujGDU7RmG9723K8JjQ9C",
  "key25": "iEoKwVocsRzZ1LT2mYX8LdPUkWX47tTsX1fm6W7e15ehjvEh1VaWw3Gd7omrQdJd36qZiQr4sbbj1ou9eaVXoL3",
  "key26": "4ndrAk79J7AzPmkXRtRWtTV2KaEwbxosieGu2qez2RktffMfTiF26TULvghMT7wkU32uVBRFKr2be98vvuMgpnTM",
  "key27": "5njt8bAu9WhB42GD4PrCdc1pYCqR5ptKR8jj3Reh7HNX5J9sqQ9YTLLSdPhDTHmVaQVFgVwFkGD4TMpcBbXTak6F",
  "key28": "2tsYFAzLeZqrFJxW1krBZ7yuB9TjDejm2Ye2RurGyS4vjBSDW9TwpyNdXvmSAG3McsFzsR11Wx1KATqupeTfcBZJ",
  "key29": "63KpcQykQ52cjYrKnrqvnc92CDYkugXSgF2JnB2kUf58kqi9fawPHfCNLMY2DtyPwLaRQMr8c3HuEj3jwKhhBhjT"
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
