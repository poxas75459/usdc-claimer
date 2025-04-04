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
    "4MeVsdjJbPmxpSJJo73M6c4tqXHAGQsqcWyfMEhitvgSuJ94zYE2saW2SszrwcWSWhtuATkZN5KitcshGR9zxj7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CxZWZFYTVGHFND15UePkbF8gn1d7VtwkWn9ZuFdjyCRaoZbjGhWWaP15CkkGPD6FLjs76bdZS5SdEeWQfniifb4",
  "key1": "5hjqZ69ZsRkxsJ1dEgT8SyhtMWh9wJLVvuAfUuDVtFrkY2rTmZaLijFRX7H7ZKrmoX3yiMGEc2q6mAnMADq1yxna",
  "key2": "3YcLGogBgyesaua5T3YdUoMDrB2mrinWSwGAaNVPkifDHmycwABjos1DZeo1Hgqq45amkstmiqCTKEJTFp83qa7G",
  "key3": "bvRFw81q3FbzqAWPyUKWZXghDgHGkUdbVfca7i4eH4CSRgzwEsFBaQSYqxDog34G1Vang6JtNGUNjbRMpkUxWjv",
  "key4": "ra7nDZiDcMfnTqiywzv1NVUineaFWRVaBSAXazfoKWi8pcd1thib67MJnj75cZLVTQFhTcbtrDKeyPoZhtkd3tm",
  "key5": "3QUcaU31NUabZk3AGU68GHGs19u27SjSun5wn1CXd23xjiLgKcDwjUhi898WkeYpU1Y64uGSE6vBR6jYYN4muuQX",
  "key6": "2vnWpZxgcSyFnXFqKeqhz8JMVAg7NgNXve4MGrws6oYtAWCJEGNq3GuVoh73zNC8ecWu6BgZPEHdjimm7TiLunQL",
  "key7": "vSUWefA3svd9ZdPXmzzTErnjD44yAPUKJ4Fdc8qtMT8tr6a6VdtRtBpaeZMpkfa74u1roVsZHRuX6DUgWD8WhsX",
  "key8": "4hgiGZeZ8BkRHaSt7XcAFuvck1MLmJz29i11gcNvebmCBSQr5zvE1gWHHDpfMUfZNw8dqheM1GMR7BFfWdUWUHPo",
  "key9": "5jtpUnDLCWu1s6XkBfSCCYcWk9JmsHaiAGf2GAuTAbgYSmTyYXcfhg1Kxme87CxNFZVGCKGbsvdKrZ1kSRXZqkbG",
  "key10": "yYrViZTAgRw6TPczTGMcMpXtApXWdpG5wpDjYNcTxwYtaJvQtuX6ReYHxNv9nha2s7GQz61jJdKgDs5Pukh5yQZ",
  "key11": "KyqbJ6vM1L95af2VqAHEJDdjvfpiDknYPRp7tRqoU1SAQZrFjatLFJMxvtrpTj1SEpzAjdw9CBKWtx1KVxzUgkj",
  "key12": "3xjowK5eDyfeQ7rKRY4MYrCfH9K8ch17Fn9APuX5w2KZjheeuu5ajhbhTKo4xeoKaZY9m3cghF7uEHUuV2gdve7p",
  "key13": "3vN7HYqc7GeFSVVPxQF1sWfKktJVjoGQx3u6AnVGGayb2cXYSkAkNoWT2w6Mr66ap4vXPLeRLuSMh5HevjbnQ6f5",
  "key14": "4B2FY7nPe6RMQgeei6D75SuvYDaM3eV9U3FN39z16VZAe97bZFRb9xhXvNjjLcWy6LmYmovQwjqvL3dYCN31cVzz",
  "key15": "2CMsiSBTH7jYgqN7UrSm1DULeob64RvMhCuUaUQxWBnnQo3M8JkqWv29r8u9iHewz8zuCZvgmybsGvCgrX7juqav",
  "key16": "53Q8dwKGwtzUtrudbywNdZrfMupzqtzqpfBSvosbSNNiiKMdMHuTjZw7HrE4hPdkEhDhz7C2V8t6X26QmrDLnBY6",
  "key17": "3RMsTJTv95EqZqoXLSyYzMTpbBWCmSFKeEJLC79uidLgnAEnbPpkXvN9VEvyCKUh2BJDezyjhREZ2KpNhXU4NCRz",
  "key18": "4hv1ipoLP4eRAoVJ9acHW5rsjjyMeksk7W2jvyWyh2Spx3gboZFtQuyWNsgPTjvbznfh6KMz6gyK5JDbDUtotMmW",
  "key19": "UNrx6LwPJmR5HyNWwMaSn2WpKh6fME8vvjfSJEYmC7CNG3s7sXUnwTNZiyNAmy7VBRoV33GWWd2NS1KpQAPkfAx",
  "key20": "2xQrfdxyDooskXKJgBVm9PCYptFQCDPH2A7rXtsLXdsXLd7FW3y5ML4ZkLJTq9uBaHbaXeoNFs8LDkurDtP6Frx4",
  "key21": "63MK9pdmWkMjZ9k5JVUgVDaCReBULJFMWjBiSKY45AHhG8traorixY3KFUuCRu9aBju3gXa5gFdtYw89nwQR4HwU",
  "key22": "3BHjCE3vbiGhZTaWjmzneDgHXfrC8nKQiRqza9eUSjsy6NPSUtkLScP7wjR7aPEnYK4jZVYkPsMGNuRZbRx8PNYL",
  "key23": "4Xsw5yTrhwNSqmk8sz7zbbJq2zPtpZAAc2YZDBcsQkbAqcLukuswFcdvegAp9gGCA2w23C4H8wEciByLAju6Lg3G",
  "key24": "oRwHfNZrbLGVz8inT4Cuk8LVVLmV7Sp44K7PXBmgumq1tJZ8VuvCKQ8AaEBrB4aanBzwddpC5a7LY1jUHsekAJg",
  "key25": "7qHRqd3pR45EmUxfAg5hPLZv6VzkLsiFR2Pse82w6Qey19gKj8zdM9R1iBvF2qcein2FWWLbgaKNezoe7szFV3z",
  "key26": "5nLpZWYzjkUonSKExLKZprszRkmo5KJE74rB8AgWy24ayCqnzY1AiSuybMDMkB7c1jg7Mbbgw2pojokRBHvdC5pW",
  "key27": "223es47v4pg77XEMVKfuZX5JZCp1CGS6K8VWmf1VbkWyiYjAWSjfTvJZTn4tsQo5P4r1J93Eu4GUoStFwJ7mErcA",
  "key28": "3Y7KXHyxypNAViQtsqpHKWUfQNcpWa6zRtp346YP65nxRANTd3Nwss3vmrXtpNr2ogcbqiU6AdkSwqEiQmiaG5Aa",
  "key29": "2kks4aGUfAGGNMKU3MkGBxumGFXuFozDXAEBfyNcsDYLQovBSxyn1nuDT9CTM5rCjaxjPouFWs7nK1HNRMxg1xXz",
  "key30": "3TNuUcGTATUVQXZr75A7gATSrGPtr8xN1uyYztsGRctotjfURBjyLmnf31UUiVx21FKGr45DE4aCfK6UPZKSVasd",
  "key31": "5w8E9sJ3XsEUjotGjR9eZwmRJXCznmWSmDZ1F8ZJYH56XVpWq6aTHyisvb7vKtFxjeahEDvmrYFjkZmsxYMiQTb3",
  "key32": "5Tuc4zDBYbLGvFeTqNvVd5AgKpKDyAybiJgD2j6L1sNBiZmrAAwecf5s8mnXKmMqiHrkQP9zZPoSVPcKCqx444Mx",
  "key33": "48NJPrQfQzou8LnU71R4RatSL2DxGWBCYZTHydnWdBsUSruQoD3AAGGEExS3GHJXnAvrTLh6n9ab9rzgWZPsQu1U"
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
