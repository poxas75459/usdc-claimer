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
    "5fn7tftYkCGiDqRJrmBLnACNmPqJsPXxuC42pbAvpsTg16vUyPF14dUDTsZcHkGcqFtcRuDLiezoicyUHMQweauG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537DQPgHc4k4mfiq2vRirT6owAcMnh6c38ZquuVRvhCHTukaMJ7i2DP2dqVcJGzMmS4ARJAktXB5SNJFSvKYmF7y",
  "key1": "4wFv58Vk8oGaTZJBLjhjkE2USoNHEBkA3ysvY7zWYdJPXMoqgeU7rRSTeEkytNkpZpAeQD97zSFHgXgH47cwu4GJ",
  "key2": "4Bkm5UbdBGGy36NPPN1t5uqDYKn9j16L8P5KSdiUDBSadRjrxUYKJ8pViWsqpmvwQ9Yu3EiZBKdaYKmV1BdT9xaL",
  "key3": "5sSvwL2Bbn7cZn1V4qyMraEY5XGqWZnHEtLsdttvCUPxLRBXUe5t21gY5ZGXvi4yDVD3uY7dgWtPWcEpRuzrwryk",
  "key4": "4xERGdRu1gkUsmHPm379HGB2shkRRi2s2YbK4DWNowh2rwpxHb1nX42AkzyAAErwS749SQ5FMoRi7DcTHMmvpRwW",
  "key5": "4KYRX2SKkd8WopRkFAzZcqaKE6w8ASw7kVjgqUG3qzK2CAyTBqrHDjsk1GM5hC2vswVxhcGTdeeuFeWKz5nnEthA",
  "key6": "3iKTk9yFoHdpKCABMnSYs8ysZJMZfzmdgLgH1xZUFp8osMbM6jBMRXaxYQxL5r8MAQYZwfnjdyQ6RWxhobXzi6Fy",
  "key7": "AoFpjEqR8NtfoSVhydSuWnXyAucKeioCx9bwH2heZpXdp375Z14WpHRQvqdvKsQcyrfCiL7njnoZTKADNUvc1pa",
  "key8": "3tdGZT9d5c9ZfRynBTSsfPw6jJEDo27WQQ5xmDvfRn2wLKuUvSEfHaLjpba5oRcMq8H8EmQR8NtjfEhonLWczLzq",
  "key9": "5tAJHWmBp1gzkPGQU9wKrshYNTHFJY8koZv79HAtYUk8NLVJXJXPDTG2Nk56amuzd9rJbyjNSEQksP7Wt5KoRgw9",
  "key10": "5dgWSrSSSR6ejKpRE6Ptfmcg5MdgncF6J2Gya3QYNvcDhSvnkoxTf532Fo72gBM3uZYs2DRFCQsny8y3yrmLs1VU",
  "key11": "4RzvknTTfUdhMwnYoqpF5RmQqrW6xB8mi2PNR7hPk54xdVbZKvi5oXEjbDP5ZDwXh39aumMJxEhezDDCMToeg4J9",
  "key12": "5UeXm6ssX6x83B3Xy8GsDspaEJ3FmLJoX5HcEHg8CRzRMu3pNTHuqQvqy3pQ7qPdVLkJgo1ZyZznKmS6pbjzcn26",
  "key13": "5gDMYwfKqqAWn7apqDjtbFYceVuCA4jrU6wtoVaa3qdfhgXZ4K8FzHtE35oyASgS4vr5HWmnbKVjmt9UrKXLLj6y",
  "key14": "5Gpg3WkDVZHqMFyxzW6V7uvDV3Wk6U8n5Ubr2dhfCXRhzE9XD8R1F2ypMkGspRyUFrSc5UXpaeJbpftzqM58Jyh6",
  "key15": "22fPiAjuPFrVVhGSbjxNBTSf7paCWAE9YUUEX3eg8cufa8z8NpV3kQC5QMmvh45WmmF3vzUjniwq2V6xGstrV3tk",
  "key16": "27UJaft93mr2UU1CPwEUQ2ZHS9eQkkRfByYFFnHmzVyFLZkCD7TZD7EWBmgVi9D1nCBaYMTmnF1y99xn1RDd5Vk3",
  "key17": "4NY7DEioRMSCyPRJFx2wLEzRQgoJvHWQQYzHFF1yLzdFAq2h6WtwSHjMPxrRqUAmymTNCk1585QJqZswBQa7ww2N",
  "key18": "5Str4wAFwz9ti4nBuFEs1dD67v5axG3EE74TnxZAmxq8a2RPD5kHDa6ww1sXLDaTrfmPPwsur3vVPFPJni9uM8CE",
  "key19": "2iW35mEKzTXWai3VMoovPuhHc7kXqFCxr8w8Ukq9fNdH4zzgRf9qCFr7B6x6axBJx2epjXXjQQz8wnMdLn9J3vEe",
  "key20": "xNvRTwdFTto8Wk8EUkMcipebuiaNJZJapnAfrN6AdkGssmXR1DiN57rqoZEJJ4WhZTwAfUaqEjb4ppRmHCGjcTm",
  "key21": "5id9QvkuGjiRPz1a6Hqw2XQCiVuiP5vFrE5ek59VFBERYqDdULPuKwLBUbPnsfBdHXHcwTV8dihF5HpLrqRFyb62",
  "key22": "3jBECZ1kKrBuv4mMWBwxbfSh6BoYFuQxJdd3e5R2Hiz4ikurXu5PcXjYAncU54qK6k6bpVdCyBkaEGVYWAzg7a8r",
  "key23": "36CyMQd5YEWEVqbQm3phMzTq3rup1uqxvoYpw2nGEAXYYywNgiLsK6ZsEaCdJLSZksrwGabPzt5p214N9jpgHYQ7",
  "key24": "WTfVZaTH2q9WfMMT8tYFrWJ28FWbpAicyA4f7N57ss6fgvQy5vQw1sgrY3MeyaPXVUMaGBKR3z8kr2xcVUPTF7V",
  "key25": "3jsvhbYhAPSayaw3VKSF7XFFHDs8GJLaM3zryw6DRTdJfs56n98yGULYWVij31dDzNx8rBwTwLzEGJiWxTroKSEc",
  "key26": "5KCDsKvwGKX67xF1PnQ1WdvrWqD42ndZuXNZiFhwzKY8zKL7HobzkH9Cteve9vrog3gijUa8YWFdeHuGMZBTpD5j",
  "key27": "5o3Vt2rkJRuosxdJeZDbSPpemLQ2A5CFuV919PVKhB2aTQd4rD8VQRs9jv1fXxqAtMaiosA35hNzUgCvvbuiUpLU",
  "key28": "5g1jBG958knkQcJz7chvU5jrbjtEBVFnYaUfMKUFB3odgYVRmTtMK2Dr6z6NzuriJg4M6UcxaY8kdrVumhn9UtsW",
  "key29": "3BbW7xLFnvyjLqYQSdX5nV7RVbj1aWiQCnuQ3r5HSJahtgqeDz6EnL1YafMsJctKso3M75mKtyKHS3ZRLPy37xZC",
  "key30": "4GqkfgL1rf5FLuoaefrdJDKtBmh4ckPFXpXqrdZt8BCWYqcAHRZyGwMnFLYbb14D75uWPffJyhMRFkEntNLFLNET",
  "key31": "4FfR6kWCYZG8QCJpLEFj5A13Q2SpMvX4t3QMNrWqWxdunxskSNSQCn5nKjQ1hquwXtHqg7i11CWuxbpPkg56ch5S",
  "key32": "5kDeXawaofzuYH9y6djGKSddCTUcjqF5iuorGFFDx479FGb6atDSKFMsg6L2YZsCtfdAFqGxvyxC1bZVFsn8WL3z",
  "key33": "37aMTfXDWWX5Ao3wu9qjGwayEpzvo8bHptiaZ6HAAErAYtQs9jdT7yiUAKV46vMqDCfDtw9FRyDsNeH6ffwHubE4",
  "key34": "32WDDgyervyt91musQaiCAmcGaz33NFGWS4yoMwcHMKxJQ1s5XVy1hcujSBSwqFLBVbTWrpmMcRYSCneik2q9AvK",
  "key35": "5uJpJ4sAt2gixTrMUKoBjETSyx1KfVU5uUZtBeYE2VjW3nWviCJA1ufjEYusZXiEvtXY8KgZUakLgdGZkmeLXo6a"
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
