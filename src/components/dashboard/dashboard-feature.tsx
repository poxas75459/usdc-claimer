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
    "5aEcErHcZNRH793yXDYo4QiUCXbySaqUemPpUZU3DeW3D9isLUbwxhxY4EVM8n1Enu2x74GbMBJrHiGdT8kR7tyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fr5E5v6GfQDTncgZiMajjCi5RQ96NJKFihS6aX48ZQUUU6XtUc6wrrfRC9YLaFQyhG1prXPN4X9vVAXbuGud2x8",
  "key1": "5YWJz2nxFfRZKHX859Pi6zE7A6bDP7TvK2jJsBz5Do2fQgWKCDBw2pnJGdadgWqEeuF3D4zSePXWdxMXWL741kLD",
  "key2": "3vqnGJegVXHi9JUzf94hBbph2HvV2visdEBJrK25N9GvhFSKqTdvNKx9yc79Ejyf3JD5t4puNkJVC7ZLUAMYifuN",
  "key3": "5Ymozhx7afD5d7eodZSQmfjzBiuGMAEyRFaxiRS4NYeptyKqo61JnU8n8nVp7XZCA8cSEthoGG7VJgR7rP6EjitF",
  "key4": "5CVA7yuVkHEYRgHNUMJeDxBVM7zEj7ZuLvHhwfRnZUDQQSEuvUwXk4CwxUpztzwQv4KbRcw3B15QG7NxzuA5ZAkN",
  "key5": "66gx9RFYnGQ3cCPZJyB8YTzAE5kxMfDR9E5UfuggBqEDbh8JR1YDY2NawwJwCJLGDbsSbYe44HNzne25Yf5BU3Pb",
  "key6": "5k6PrBCSHvWWFzkXGziQz2mHoYoXfDvW6Fw9LpdBdcrS1n9gDCvAt5p5wznqGRhnLB4igmqjfk2L9sgQvSyUjdEo",
  "key7": "2vZc4H6zw95Ux6RwamU2HMJWz4LFuhDq2LwVnUDcK5vD5kPFKa4nhbhVZrkG2Mao8boJJozGKtZMA1Ls1KpxLahP",
  "key8": "2aqk3EmwypXtGQyDwBgjpfBUR2X47qh3KFjEmyiKANpzjKNY6db8fcBuPtdy1fxgyzHs3CDCA4iaxfBELj6zyYxE",
  "key9": "2S5pbbphhgGTMozdzuFdXcvrVYiL7Tvep3DciZzy4WtNA2FjYPEAThiQ9eW5qnk8sPeUKebmLseuguuNLFAmye3u",
  "key10": "j7gjUv82YsjJXBTSGJrKaRyNr1P18V8R2AAfu4mSzujJAgjB3pSEq4bx89ZppykZb4qeLTnNPvFBxPNkireAt18",
  "key11": "n7oqxgwXF5eNSGhxjU1HEXAa5EzJWUuGHsUFgbh4j6n4pJ7nfePZW15EMXWEaEx8v5pnj3QRCPjqyVktVQSzoFw",
  "key12": "Jm4zGLSfb3do5gWkJjiqkX8FRmspDk69fNZcNRadjsVYSqWEGH8sAmGkiAFoDxkVKEScGHravb6zL1uyM5HKjht",
  "key13": "AUrUEvuubxrxpj8JFyxd7xdC9WdDWBGzubR4n6K4wpzb4PZMGkfGhHgwayeHKrQ8CeFpNEicjc4Zhf6rkDHsido",
  "key14": "3Vx1MUKzq17ABdbaEUnE8obi3o22m5UMHj3aNmMnBAaoXqtKTWUM8tELT2WBHJacqJLmJW7fbHZdycM1YguWA1N4",
  "key15": "2TCVDZ2N3bZ2p71GiWaQEVUCrjKRBnZ3siu2w8N7pHwPyx93HKVunzaASkpNdcm2pMejE6AjQvGhAvmdMKDaFD4L",
  "key16": "3E1WjWBedd3csekKeT8NfCoy8MEh4YjLukYiTqiZGLBpuN2gxPjg516de5DTntrDGDaLpUAJXpXzQKmA47vKgTFY",
  "key17": "5FmHGPvX6TdiZvM6TteVSTwwWA6uTJFY3NceF6czbr5rAEG3j2QCgVQJayopjCiVwDz3iCKMJsVvmmZV5Qvr5yK3",
  "key18": "2F574EvUtj3V51kLAvjaQim3kV23kL5eYQHEZ7xnjVdhXeUyQ2hN1W8FpAJj73eLn8b2JHYZ5RhXMyVomDHgGFwH",
  "key19": "4E7gqF9GyMNmCe7rEkKWcq27FHjSmB59TSKXq6byByFxQzhDbE3tdQ8swEPcpo3SnBS29CjWzCg6d2bndYhVABJP",
  "key20": "4G9Wm5qG7Bx1eDcXFPXydhvXR9bBowRLL7ehd1NvFkFG21YB9kE8G2WYeirFeFrFc4gUVTsX1NYwwtji8r1QJMFF",
  "key21": "4RFndHf9B54UiY6Rb582FujNG4TYRkCX5MZBYoA5LzE8YLXw6w94gHZoMkNi9BH8qcFeWd4t4d3vf4gGtNvL3KCb",
  "key22": "3SRCk9AKrFYkoq5Dhg2NeYvfGUVNKGJ2riP2G8d52FCAku2EudTAZ49gjwjYmBdxqJengAV6EiRwQmbF12nYJEWo",
  "key23": "3S1Bz8CM21XPV2yq2oQYMGRty4HeWrPJi5komiFTcZ1uerdkVt9AfhvHtcN2w8d3UZb65yjoguFcWo4zJBmfwvvV",
  "key24": "3BUfBmLUpPiJCYUC6Qmo6Aob9P93UwQFsKpax1bYQzam9pxeS1YjjP9mTq6U8mVaZAc4TW5rfguf7hzgmdHBVzuo",
  "key25": "47kqc2gT1S1TegRBwqAWmQsziKW6J5izANTp6dKg3A9KwLDgEgymTVaN2MgMegCo2cEdNf7DeT6UQzTc9TFcMbRe"
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
