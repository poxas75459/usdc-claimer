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
    "5YAGCaQ1k9MD3drTxbWkkBsWYuMvrQRGwjk3sw2KFypg3ee1UNs4T9M3KzPCNNh5M8bPan7ET5APrqfYVoJ5Ps3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M85P3dJiuaPNKmo8eeUkXgLxEcYe5Wqxuad9KeYB6nEx2h8CgH7pWrZQ7jiRfS7oS85iXk8Rijjg5Y8NXFuEULo",
  "key1": "2Fazoh8gLuMiqc9KbEd1drcTAkqcSgL7eMwCBXi5pHcxPLaVVXpBPwr3Vnr94yazRcDC8FfzYqNDi6xMpTiwbti1",
  "key2": "5deRYAzrnma9Nx5gfV3EE8sXncotAbHLDud8FgqgAEVTtqHH589cHAFw8YQakQW4ZraMYiH5S7aFhdxAfdwcCZbw",
  "key3": "5cLmb7vnFFtYTkKaAkVusVfJLrpxwELhLiex5tQ6qSoog1jtSYPTmcUiXo3di5oNkCg5LCujNJW1zb8ckYUWmzs7",
  "key4": "4EqjtEWw7xwnmsJ3rfMqk9LyNF1KwkTPpzczgWekKcCfMbtJddrNbaa8cwXHKpAHgcdWojeXPSiBoTLNBYuSEfwZ",
  "key5": "5zns7ckcKcCopiNrWBCNjuJybX1Q9SGznnmei99XBW7JeCubmYcW68cqiow9Jitx3ahuYPQZkzGMxRVuoz6wddpW",
  "key6": "4Xap5DEGt4BeXqmT6H4XMfnqUH4QC8obPWGMppa8mn9PHhf2WJazVCQF4W1qcQTpBD3dWXAEgvrUehFsk6ayKBf5",
  "key7": "3tcWw5TysCkzxBZdXvGpQnW8nxkh9Mq77iHA54MdCZKcxSmY9Y5XgHMBu6ikG5mTDdmVT77C1vbshXzxSGBf5xjE",
  "key8": "4busf2ucSWWPiEBsVkLVQLvStjPENqsyQgXq3av6dzKL7RANetVAQzKNo2UV9uFUQNZH4LqW7mWBBhxkbBVUGXBp",
  "key9": "2raBxr4Tx7VuY3aKbY9EsQAvVJojzUuiJ5E9ezi6PuBFQEjKuR2UWAfpvxyqWEXV2tXdvWhCEwMoopAqmFN4rscR",
  "key10": "4RyEhEVu8pPrk2TgGr9iYtE8CbAdJUxjXRHZv5RMkx3u4AM7rHnoQTb2zm3W2GVN1PCyB4LM9V9PGhwr2ej2yM52",
  "key11": "39yDTJad7gP9BhAPEXmbeDqnns1eW19WvRVhTXm7b1BuHYKFk4YyCftV2sxrbpeRoR5T6qrgrFKzL4cgMHh4zPoq",
  "key12": "3PqmZ8Uz5k3XZ4mbEnRqnMmdHVueZq9xW4zUQd6KXupodXUnbsvFpnteTDLycqZUD3MS5T3MUogaT4wUsUh1hqm3",
  "key13": "Rh7CDLCpknQ1PjHxoHPcnn9tyzfUqSfX9NiRkE7DExM9jE5X6x2RpC6ggyEeZCZqWadF2L5jGf5CRVUFQ7dJrj5",
  "key14": "xWwVfU3rpSaoVpQ48o6iYg5gbK73G8EFodk1SSy6itgVkr9oUbwrua16vTP68XiU5qL2AGrTenr47iCRDnoANZN",
  "key15": "34jnsoSFtyMASLAhCtzrMwWRoGrCuAAAC4qFoqcYRfZBKhVxwbqmgwocPEPfuV4oUgcJ9CYn67rPj1ogfEspBn6R",
  "key16": "2pdquYAzsW7eYhtwaaH6Vi33Hejfegvn4o5EPCTuHedcsuvrEL1vkRhjZwxtzkCZWimMrxebUgQhbLsQJABNd4y7",
  "key17": "4eqB7aGYfRyPZ82rmBVMYgt4BA9dRSmStdJsaHLUYp3QRzPg6T9mny6oZWNEyWi1oPpoPHeXoBgHW7q6yu6oWap1",
  "key18": "CkL6QTWvTdeJeSZAWSyJxAmXuYLPQN8xssGu47QgurXQXuTh8sej5u6X7BHMombFtfmCRZhhYnLkDoupb2uBcBD",
  "key19": "4wyJ6Xs96S3NyWtiq448auNf8MLtV58LY1N1oagYb7RxyDThrAuH4XnVwxTwAZfEsthqg4Lc9wVLFcSU6sgbx2JY",
  "key20": "HcdqEdVsCtZZAd4BEggt8rDHKrMx4AQDv7csGoocQNvSpcgKaRapv6rj3GEKCaiNwmHLjEMuggJVyh9tyPU6oWE",
  "key21": "28KX1RRtk4pKhmXk15FaDqFPn5wT9fDUVFrvNSqFcnQ1mxkz6gnAxvVELTcGBeu8tAJrJSghEeRFYmaXNJWfqyE3",
  "key22": "5F9vhTV2HKnTVysFgiTCsiDL4gNhX9CM2nco9qLmtPwouNYFZCZzp5DEFv5zvBTvKyEhNXDLYPYod46YVPSCqesZ",
  "key23": "LTiESTVTubCR4eDevvxnjd2em3CEAAcD9a4y3D2d5qUAnUNZ9RUpTy9iKTsAfs9mcUT6ciuqcKggzZQfwNMk3sm",
  "key24": "rStUmdDqhZL6vBygUY18wMN5egFLw5G3fRHf1CwDkFyA4HmXB1YCbhAMSRyKq9at2yZSJngZR8CB4GpjdhwHQn6",
  "key25": "2GTBkAxN3JhkZo2GSsncT3G2nKyxxFVSSS4gRPVhwoc4QzR93TJdqW3nz6vWrypfMv8ReEQN2DPFdnmwtkvJUUcN",
  "key26": "2hxEp1DyeRGKvC3fJceczAC4J64xdKEtcCLGa1H122H44SyqzonU8TBGgMaGgPMphPSDoTxKuDxbwCG8WvsDuVwz",
  "key27": "yBQBcikr3fB5EQGzHNq5SHLMoFDFX956TonPhQoArVGdRWd2BHMVzZsr3tRYXMxLyoAXMdKo9HgLH8Zh47mNPE2",
  "key28": "5hZWf3zvGVq397rjpii8MKxjqCZfS8pN59xCXUGc95yKEcNYjCN4itzZVfgYyXVoktj2UewnjE7vdXqWM9VTTN72",
  "key29": "5JeZhbqAfDXTg6nhTxzcUWx6NoRotc6zUqzRnb24V3kRr56q8iXjJwqBDUPPaTw358aaWsauRwhhm7mdd6FF8cHc",
  "key30": "5w1C7zERGkCCw391xPyxmK1A59UKgZztJGVkLrEikqGpZFWaEB9ZnaCThHcjsCkg2Kb4AP9dAWHd9wbPyYbCBJpQ",
  "key31": "31RXtWZpJdrcNPewBpgV1qUL8ev7VPczF9aayW2o6APFtk1vSeuD8h6yfqoTztUxiZXP5LXbZQbPptyNVyn8PmQW",
  "key32": "5DnJVKmkAH6NsjqRmeB4ohxcAaGwBQQufcsXPuoTY7ofeB2LpkfRnDDKm48r77Wgi6E1H4sMWiufwNrsf7Ku3jDT",
  "key33": "5tv9pZWjCR2S24Hw5CWwaBKvHmdzWfd3wDP6zZhgTy3WTrNCUSzWPna8YTKfrj3Wz2bACcQL1xHnhLBHh5xZjUKM"
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
