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
    "34JL54Nik2zR9f7aHNB3zMv6G5JJjzij6iW192kN2XEw5kx3Ly2FLckBieYQrhkE7guBM9Dyn5CqmQheqFaJgsnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZfTxGJkcCFw7X86YccM3Tf52tHUdxLRcBt74N5eWB5yFttB8ENfeSRuKmeLsnoq6tbmYN1b6ZUDEtwkWjTaH37C",
  "key1": "34Dtap4xWSPsmfYAxCYjeFdTJ5EoGefqHZnBcSNwAVKsLzm9F5EQcLPoV6bzqyTEfT6X3Uh9Pb8iaohKngzjGnVw",
  "key2": "5xTyUK4MXUR82WKdyVgzRvrbRbK9JdeUekXL9njzg11ayhYx7dsA77tyPDPXeoyVFLGxp5KGYi5ioA9dtau7j1Pj",
  "key3": "yjbPNA74LSkg4NNPqhDjz8otER6y5rt3DabuWvPP4VZJY3gP5LHn4P6VKxscrRT5PEehNFhzTukLtfzoUufEbmq",
  "key4": "59VVbzbF2i1goomdQhboGAMrwmEFVUnhxhK9GWWDLXRKVbx7TZ3CesP5LtPmr96DXhQcwGtyT9NhDvc9avHKXnNw",
  "key5": "21y4DWx5GaSsav7r1tY1LiStfA1WJ4yk3N23eNPcngyNb2dmh1mMFbtyJJvgDCaDBvna59gSivN2Qw9Y9QFbCDNE",
  "key6": "3GQDMU3KCfcx93tWrJLUfDvn1tYuecum8pNa4JFwqEfKiJb99B5DF52reEG9G5NG242CfzCBmLfYhrSBUcgGuJnR",
  "key7": "438gNBkjrBN8XSQwQpCJeGxUWsud949nFHnHVfWqzyvCugjLtxeaA1QJxJ1M9gu5i2eBntug3z7SRij9bp4Am9VE",
  "key8": "Qn3scL4garGedA7f7kUsntiWe2t3NNNrkvSaHGWsY2LhmMjLez6Dc9neLaWYckJ3evBgLEwqsG4PUP5jFiqmVMM",
  "key9": "4amRXVghvG8Ze1XYqRp3ynDRJpVFjyrF1aoNHyWrsyo4xBkoFJrJXFzebyrZMhDDEPaDq6npxfTF2bLuXEywUnmP",
  "key10": "4CaDUGACoBZuz4aZrN8gWobofHY72tuP3xUzZiXxsiW2K5tRUvFuFC2yKornYRXjBbX8dozovd1UTuNQKYzSxcjX",
  "key11": "3A9XUqYqtzyn1sCucfEcJht7B8rHXrkRDUoJ822hHTLr6HqV86o1QRbtnogdyhK6ZpMkb5m2pDLkVCrcRtnsMwuD",
  "key12": "3j4M2SPDoQU3c7xfddNrJdD9vDA6mXGyRgAnbMc6ZsgDZBLQY6uBUmGD2Lm1STN2JTiCJeJ6WYsvKGPfxSaFL2tq",
  "key13": "gqe7HfSgocdmm8B3MHRSpPx5xPkPJ2jxKhkMNXWPXJgkkmqMp9BUq9P5LtRUUFHk3vEEn55KgNZxXttJrMF6F9G",
  "key14": "2FTJ63FRrAcaiX15dKaCMpJobv6od8knppoQXb8pR4zJG8SXFFkouWiedu2DJRQV7RfMESEL2YXxe2ppuef5kJ7E",
  "key15": "2BfBApM5gtZGDp15mZweSXK7BHR8SdS7WJXFAjysKWK7x7p6bVAFYNKQLs2eoufSzGKZzY85qFANy7icECbggJNB",
  "key16": "4ErFgnXdgttFe1EyqqWGznGJSzU5MNeTQB99npjfsvPvAj1FJRWeWURMVocoUBvpjGa7n2WyogNdHo8GC5eeL6rL",
  "key17": "3GvhmTHBVQtsW9UVLNk3vo8ZMPK81Jq24XwZDEj6woNw9dtZHFqgtQSGNsnwFENETZv1FnK87QtffAYUeZep1eQX",
  "key18": "3GHRK6opy7B31Hv1o2ABszWdARHr2yjU8aM4av3ucFT3NpdGB7y9B5fF94Xh6k8pHrmhvbqnzVB3GZgfGRRkuX9U",
  "key19": "3idHButJsXKkLcxUDYG2MuUxauxSouiwHLU8z8zc9RgtQqrjPNWxSbcV6w7parnwqMMKTDsJnXG5ssjDujLKvGhP",
  "key20": "4iaFUkacnarQYhaUvSRmRKQgP5r8XwM4RtJiNVudqcy9WGiwq5NW8QqaqjpJimY58oH6efdPJDF4n4rEgymuw8uE",
  "key21": "64o2JxMnMKdujgXeN42sdyN6DJsWHX8Z4ShnAVPkqPH7Co8PKWashWTzMm2t9C11z9bYtZMQ4pqCaxF8rwhHgjuE",
  "key22": "2tTZdrGnGDbxZKQUxWgfbh4KEz7x3jiTitcFkLKQFhjAbCNA5UAuh9NcXrdhfJyQUMFU37NMunP4g6MpqMtQN6La",
  "key23": "37HfALJWMFH7S2xFNZQcJ4b7cFcU8QwdZvghRpfaBMzGE43pQ1yjhjhxu5mvtFSizng4mC8Z7vsNwQPP6SCHdZ1S",
  "key24": "K9Bh3M7qJvpuRb6yE28K64QuP39L63aiaL778NTsAw2ZR2T4YUNeGuzoTnBirvV7YbTb79G5xQat9TgWsfyh8cK",
  "key25": "4gQKVQurA4Er7tDRKcG9F7UgWFDdwGrdmqo57XsfSZsLLMkJpk1EUYvAbJA5n5Hj1F4UoNqXi4mxdFTSGD6swkDA",
  "key26": "5kAQ3Ds2FN63kvV6oaWrLeKmxJ6c8ej336f5uPLBjYgGbW8y1WpW64iwqsMh8qN9oBJR528NSSvDGWQfMVTYw3ms"
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
