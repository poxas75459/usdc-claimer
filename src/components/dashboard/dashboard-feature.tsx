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
    "2m6Z8vgKon6XyBFXFAiXpD1K9nbDwzs9gukPjSuBvhCrUqyK1AAyneCNgYtSwb7wZcqU1yfwPuQ45gdbv2eWbZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8Rmz9Qh7AixVdKTcNQRES6ZAKWYmmtfJxP15kWYHKEQUm15x83L4CRwApsKUmpnMXKmsuy5XDsL5p2G16WeJEP",
  "key1": "38n5mJJH8Eahvf2b5jw93tpd7X9twmQ3eoDbdiT59i2k2EqX2XiURTAeinwnUTUFf76hgREaytLVW25nWiijXRAq",
  "key2": "E7GVWMjcHRzWa36TBjPxXXFeXz1FS7kPqNcsSF4NLFd7d1xbRxY5j5KxMHoMQMTLxe4WPympV9LxMKqTyiqyRPm",
  "key3": "5ww2nnYVcVetgZKghxkGNaEmFNoNDYsq2RGxWxuHZFjJWVpRYZWNuv9Fq61NFenZdCfnC2s3X4NXnxzHghpNCpi4",
  "key4": "3jn5EydsVB7EefMwg64XWXmuByBhyQoy3K7i5SzPc3FXG6PT1tygGxQiooA1eDj8MV6FUACwz45xyaQssKTuEzg5",
  "key5": "4hWJjBFvQ2VEnPj9Mj9QnSajWbKXU2u3TBxt9nk5a6PqU2EaRqznocLfHfK6mPGamJcGDFx74WcmQBzLcJpY2Pis",
  "key6": "5tJc3HGNqTYyKsucDWER6AQ8Bdv8tyt1K8dnwwioy7atEbxHe1WNqi6agjvZt3JrrGUPadjtGMnNy7XWABcUrEBo",
  "key7": "64GAT5HeKwZERJcjryeb4AXLugY2ULdkWFg3jhHWPfDNBC7xpLQnYFS1f2srXavTczjxLZwsqkj1PXKa8jFE4EqX",
  "key8": "2m5auyKapJKtLVDwoin1yEYNvEvL73V7XvoSFspAejHm7ne1bAb6jJu6NDDMfj7fFX7vDD5CTjxaE8Tt2C8Wig7y",
  "key9": "GCboFU3YxZnqNqa4sMC9RJ5cjjwi8GS9fDHs3cPz9A8gHsAPVa4gABQjpFk7McZFQSGJjptUmfb7iNVQS9yjpYy",
  "key10": "3KBy6DeQyHH4R6F8JZoPNPG3faPZSMHaAXdbwH81titVFHzTq3eAvbjt1QYckr9hpoH6Y1BQDNLr35kXe3VkJL5F",
  "key11": "3Ko2WHeA92nSNChAxZLUSQz8nEkv6ZqJnwYsWhRzr8XoXhxLTfKoh7KLJoq482DXUGposj1gMxdpUdNiaTALWDTs",
  "key12": "4V4oqZnEvLLm13brf1URmqmQWmJuRRJEWW8r7dD145Mnc1vm8cspfNjsp2xWNFEUdkDJMwnAseVpsMjAjBQnbE9C",
  "key13": "4YaQaipGEkdpxS9g3EagtjqVVBEKSYkmxRNawCovoxyqvRVwRj638yCLAkfJ3hNFvXaJzR2d1SBcCjVTYGjiMDgQ",
  "key14": "4D3UgooZmMQAEiLCk1kghMxhvr6WA6K84BKf7PDYNW2yVtZ62tTRaKZmWSe2Kbqscr1XhDHLBHjEKRd69KJsW7T6",
  "key15": "2Uph1sRAua2n6c1ys22oVY2TyhySWhG62uKU7QvvkYUdYFaebTQsJuM9VLdPrchTfUSg7D6rc4xXkGQszZ5FhaM1",
  "key16": "4b9ZP9fNASByaJSxp2Jy9w3aoLTZzcE6cHuixnem1jYYKYrAUMhWKYH6wGE78idnjeUBWBFbAgB5zp78CCRSn17B",
  "key17": "2yDRBHJ5kusuMezRbAammyyaKA2ESW3Zx7oEFR5mSc9Tg6P3CUN6s4jrw796Dg3GQ25ZheAJN4Z3wYK2iYcehb1M",
  "key18": "3PaEGB9qFDs6dDiqtEtz6zVTNajPVadQbgqsZAYqB7kj9SXhcWYh7Vpjs6nhsnHV93wjh9He5KBwuVKcdZZvkDGB",
  "key19": "5XAUvhGsxhxzuBftMAK8XnT8eWvf3ftQftmwqPYPvThjAeAffrWuxosMhu6nnsciKdpFybJT9fd25J9CVGDrX4k5",
  "key20": "45hMYRYv7HK654zgSVpPeDJFuMsCBLzmTVR3A5sKtkg3Vg2cTaqy8chq3258RxnrPoXjgM83cgQN66Cfz8CVPTaN",
  "key21": "5RHcPEGrRFmYM3DjELFpXxvUp5oQjoMJn1pao9sEteQby13vRzV5ccL3eJrdfHjG6hXCLazLkhMA2Yq5Ycn66sXH",
  "key22": "4jmgqGC2bhC7AcNLBCjJahQesd8y77xGDnBBRFkmEjhzzDP3oPAsr8NGAPNeEy9jrq5NFLvvHtTvg1KELS1Yn6YV",
  "key23": "2YuLxEHjqE3CSqDVwFXqjdmMEmGiRJdy1Pp1qWPJ2RYiPndnwiWC3Q6aVMGnVfFmYe2NVqjehaPn2WCexWavdiLJ",
  "key24": "56gbfjaXy7Yssj7Nb9jurENEp98rzowdmAKDkWhHNGN3AypacuNzEB6Q286xb4bPnA8PfQ4apuyr5FutEBpN85HD",
  "key25": "5nopdMUoiTxmP2gVgf8yYtVUzHzM5t4GXRBzWbhkunG6N3f1f3xiigxKpBzceQHcVJ8rbyoK2UQZKq5U6wjwmg6M"
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
