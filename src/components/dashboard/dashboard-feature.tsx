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
    "58NnMwkJveub81BuD2Uu1fi9ipchny5UwajLEGs4gMJqmmJWvmdnuQPKVNpPUs8NY5rwg6q4Scb68MxdvF2c1DKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SCWWhJ673wGyxbBi2QQ94Js9BLCfnyGvW4cWxbRbVi4tuvHUdW8pfXzv62V3jf3FUhHZD57YkY6nqdbVDXKfHRM",
  "key1": "sW9wBXWJghEwrQGbrwJt95WHkQjaRWBSkPAuWocNJXNx3Zeif7Z8J872towP4KHv9QuFdKjoZdBaUmZBC6nD5cd",
  "key2": "2vgoYNY4iB86gtAGTwLjcP4xqxAxWZ9oU95vfnUEavqaAEnR9tfRC3RgmQJwVsAahm6VdA1a5YnD9S3eEFbn7g5J",
  "key3": "2jdhePQCgb4ZkUjxSMNMCRXZbanhYQCkR5DaNAMbrEsuFp3osyM5P7LXxa5Ek7VrK7WqEegTxGwF7EcHDPt1sX5c",
  "key4": "tyoJd9LZ5DabP93Zw56dCBYiejeQonw4MCQS5SrfRLzpn674C5jhSggHsYKyZbi6kRDgP6aw9xjcUjTFi9wMWVg",
  "key5": "3PQAvtZVRdN38WNFjCmkMedLgedvuwPoVkZkacRJVKnifF5BRFsak1sE4a48eCUm1zHxsiN78e5A13tM3cY4vznq",
  "key6": "2Le53UCygExbZLZqr9Eggd9dbR7fd7j8rds9jDXYj3LKLuRYgc813XTF7kusbRZA4HWvcGrx2zM4CcnVF1Y8hkcY",
  "key7": "3yCNepLkMFUvWK7BXSVJrwHNckNKppwHxSDwoVsQruhVDZc6ztff1YYs6bfUqbZW2kWD9LiufWsmrGPFkFufLrRn",
  "key8": "2xXdBo6MSdXmSSv9mq2obyLAZDmoyVr9M1Fi1nBUzMPbvFXHjFFot7UJurpT2g8yFmc6jUfUWtDvydUPUQTyRFzi",
  "key9": "4m1gUu4giSau84N58XTgWK6wFFdTEbQ29diMLWTm9zRbz8MuiEbBCM87Pkqbz3Am2XUB4tvHk9vXqUq39K2r6jJv",
  "key10": "3SjTUXGFxJPBbGxs7cXMu217tQV9iB64S652z3htuejwKBwnoRWCP4xABkXTJGs7AnEMKY6Y2QKfTnMEBQZrBSwm",
  "key11": "38fR4LHwHRAPtSdGhHmLUzrMMifXS4iZuo2RsxwMJv7gRiCmmyxK4JPhX7eKL9J4Ydzj2pJwP9KQzzaQFvrN8HUe",
  "key12": "5bn6iw2dfqdeCutbw8PJQx8CSxZiutqk8hMJy98aXYbqwbjF1WUQUktQquK76oMH41LyThjU4dU8RXMD6mom3SuG",
  "key13": "4LNCoA1TUYAHQR8ZJu9oSaTWyUrwJxY7NLSsiWNzXdzEuAZ9Z6XcJEwEESCoUMCMHpKiQ4s9U6gjF3oJZkkWbGwb",
  "key14": "39jzKdoSdWmmxywXhq8BkC4DKe3MJKy1tjXebcDiN53GY6X7bJQeuYbCFuioiC9H6wK6F4Az3d8wN4UKLxANcJQn",
  "key15": "8Toca5BHT4EGrxabDjki65T2BPYnRb7bjndcgjkn8anpmgwe71DsTJAuKBoUrh4MapmKDk6k8hqF14mhaun17eZ",
  "key16": "3AHgSvxkzNQcGWZuuTyy7QS6pLMfiWieibMqSEb1XdooWn87JMc1CgrMitkGa9Wqn293xkGbsKuxBGPj1usFezG6",
  "key17": "21kLLex5nVZKpBQUnS2dPv3xCknAUEZEggtEHA8kWQXUsgeu5rCrXNPzkHEjDjyWqwJUg2fMja2av61ayWQbhBkT",
  "key18": "3ReuSReE4uZRiPG93RePCxBqULUZ4xTJN4VGHTgnD75eh3nURkREdZ3rssU1m3KYyeo1gUd3Kaz6AhYKF7L2iGSt",
  "key19": "5BCnftSac2o4oPpwHkhnfhR39pSjX4P319MAs86yiNsuUvX3xfYa579myzCrmHs7vBMjqY353YxnPmP6vgt3TxQw",
  "key20": "vZLLdgkKV1PVB783UDy2kDw8uuzGp7GjU1xzwppwXzQoDmFdyRXwFxgrSq4VRQsBcgeWK1hFfVHRhL3NoWMAk5a",
  "key21": "X2QqXxyM5UiiFLrEgxRcjdePSrKtuoxaxhtXHPwgPNFaChXAEd1wf4PAQNLT1xspiqG74ikvQjF5wbzYJFDY3jU",
  "key22": "55Y6NjeCFmDJ2autcLtmpEP6t8fU6VMnLqJe1quVefxkwtAirSMENHq6ZXsKJTvGeXT2ezk2qD5kioykvTwPAbQh",
  "key23": "gGf3yaWTprXwhpnHjHhJ7TWpCmUvwat8MfG2hGWa3uuvH7pZ18aG6tKxCbv2TPGmnWaGxeeTNPGQCUrPfExui8y",
  "key24": "wttZWMjzdYSSiZEbt9eeFDiT7c7vhhrJ6hR4yQS8fep4YVd8JpdeN3Fnnc2pDvMqgv8772J1ss1dcLi9Z7cUBcw",
  "key25": "5i7WgqCmdC38BKvLdjiomrxg5qshWydunoC2TRj3tHxWhLNaaik6tPD43BMEDij1w4e8wCAQQsy2e71sVeUVDsto"
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
