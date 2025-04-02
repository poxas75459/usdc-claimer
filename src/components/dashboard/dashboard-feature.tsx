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
    "64igTHHJWh6Aos6yrTwyDwBgDc2Mxb1B42bzxySBHTDnVo5JEefj2JX35wPJQRKqHwNmQXriUSQjwG7WqjTz9Ud5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f74Etk5eByApKFMZEz4US1P2ZyYipZt777S286gSNtH1xTT7U8LJN8ehakJGuJdJ3B5QGof6c3AQTivVp38YHT",
  "key1": "GVc2XyiaKtYvQ268yZPa3FzYqwWaU2M6km8M5H94eFoFiq93pNByLZBfAgS2a3KVxTnu3fb7zsMqZ8YEnaNntvz",
  "key2": "2nwi63sWxAmXc1u5DyQTGdB5KNp6MFbapyxvWgRG3VTSJprJwCVgMwvNL1dXpiYmPo8s3A7hAZQnFXae57MxKm2s",
  "key3": "5yeFVvo2XN5ZbvC8hUBwub6DAMiWaXFZonDJZt6RrmzSn9oo3JKWUwgeoa9v4XjApPTgeExxpRfs982Ln99dXtsv",
  "key4": "3J1gcnPVzVwpgDBkFKzg7oqvY9PviyMJ4SeMD91ARxLMN7ZibLeaMbK1jHL8obhUAscVSafQHAqfKeK4KPG5H9z8",
  "key5": "62utwp6RQk11udNBSEzQfUYN8v7VXxyZ1q1KNf9BsPge68KNKeVDVbnDcmFhTCN41u2XAFfn9mEfvsBdnLhSmu2p",
  "key6": "23HbubaG62qNy8oGytbMTE255qaJhMV56yrmYLWvmc6jHgXpGVULeEsAtG9TyL7UUN3rcJYuRpaRSv9L4RpCSnm9",
  "key7": "3NTUVFMiEBVKQRwV93YDEWvLaCwTmvhGZWsuwVp5VRgoDEYi28pCZ5eEmFcDjTFpvCEsEbEN2NHxZd7yhMKNxh4P",
  "key8": "3CfS6VAUaRsXgAXz99wQrRb2ufJV1GHxydCDQPfkZcDAuWSTvQYbGm9KxYXFqWnxnHpLcfmXN672bsf8iBRcuWYz",
  "key9": "c8AKWMCpHKQohEbX9nEvAy1BKefwnXjekk2fpHGD65FtXR7WoqywTJZK4KJPN2Qf4i3r8NeJTC1VC9dere4YJPD",
  "key10": "5PHdMMwXTi3L8Pd63DHz8bzhjBEmXjXPWm36FnQMcAG42FkkoHP9aumhL34n2TEmpK2Vi718Ur1RnrJYJ6ggf2Hy",
  "key11": "5mXTojViTKwQS32Wq8i1faJJVXwE4UP1oSvcBX5wc5KXm2N1qNZABMW4di4ixF6B2BnU89hPGG7K4k9jhSm8t25g",
  "key12": "519PwtnDTYeJjV8Ug2LFWcKBzU4M9fzntECeUZp35znXL9291H8it2vMhEeD8bTQNqjiRq8kouwfAMAiGCP1YQ13",
  "key13": "3urMTUT9yyQ33GVtCNz3SFoG6LNY7bhCkmtgWFtK8Ppopg45wcCS3k2tUKtgpdVn4gkmdtX3TAbwzMRborvZVzZN",
  "key14": "4frKb3ykH5wAsqyQN5Z8KfARvc9QVPq2DNCRbugC5oFsT2vDYVd3ttip7VRRginnMJpEb2cdZEE8iPdrHxLKnJHz",
  "key15": "QLGYTfmJAA2iRha9DPEJbq2eiWDVBrfxVZ22RwvVgPnuff6b3iJqxi9onaLZrszy8qQGeuxX4QggaeyrTiM5mz2",
  "key16": "31jFAnLHvRz1aYpcgN3CWtyjUQJvSSZ7Dm7uZkDJDjK2pCHmNFYWGB81h68WVEBMskD5jAMsT4k77H1weTkxr4JN",
  "key17": "zbhQQYgcGg8sUJW2rFQS5dwnoXXS9s7tXy1kEBgn9QPpivEumzCjXA4n6JAp9aat5PsCw88tL6GxYE84FXiduxJ",
  "key18": "3KTwA8AoHXTAfqBAoUSoS8ZYL5Ke9AfCcggoymudGbGApPH27nhG4UKJ9ay7vXBJNzDZb9uptqtTbZpFXTj3Lhej",
  "key19": "29PpNwFQgVUuBSpDhYmCSG8aZ4fGTBS9AdqwVLKDxX8AMzi4JPqDcyRJxVw6neZidRj1psFA9EimxAeFPjtqQvdW",
  "key20": "5PJE3TUk7MU1nDivWDZFEXtuC8Ux1dVxjbNXQT2gWx1LHnYJhDbob6XBskiSoSsjwarBrGLVfwkH5dd8fhBMtoNU",
  "key21": "32jFXE4K3M4ofBueWAK6yKSt5LZdvbwDnXNHtnmXJXsfvQSMUyEAkR5EnooXbwYfBn86EB158HVorc3jYqWPv2Dp",
  "key22": "2R1S3GkL4r9N4p7UtYPqM3oW82DT6F7KyEK7qC1NA4QTvtmDUC5aW8sU3SfZaLJn8YY4iWSeEseyCMmV6MFsgcsj",
  "key23": "3RSBQoVtHyaMtwP1uRs1Uhz8uEii9u4BgXS5QDs4cXSYq6UPwyxqqGGHPGgkXsJ3r3KfM4BSUte2wp6HzoHvwmfd",
  "key24": "4bRe2DgmrgPqHCpRbzLKDSGTQft9VGkf9cMekYretBLX9nG5m2bd9T8g579CTqNBFLq5d8zzg3JMxHx56R9zwUrS"
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
