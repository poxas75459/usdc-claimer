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
    "5aaFC1nK9Dn25RkRWFKgA41j3oCXGprfkE8m2mHo4Z3w7gXJorpWhuGApCAk1sHJNjaUiorPiwjxxKP5tpaS82HB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hjLJyoMmU23KWz1Tb2mSRZFixYRGeN9zTR8b1ec68cTmzHEkNhCHqmz5TGYwAkzvdcNNmCrARQqaQw8rEWcMexc",
  "key1": "4bVdSCdXBnM6js85mA1wyGQh8wtqjZ4xkKkyAk7G8i9xWsutU2TiL3nvkzVF8MNsFkbP2BU7RNjyKcxNy6ysJ23H",
  "key2": "SG5H1WbcV92FzMAv773Puj2bZKVuEPCXViJPwPGz4nfz62KGewgV3RxjVhQC8fdaUDYzLmNE523PEVDhGSF6FGt",
  "key3": "2xJityh3DTXaVaj3MjZyWJZywu1GCkpmPhuziAjy6iMDbAUmLjHG4TzERdPLNsm2ddVodWNVANh5f9o99J3FkaE",
  "key4": "4n8qJ2EWKLV9m6BSuPYCRz5TkscnEoJejKNJ6RUwEqxT5RBCgJje3Mk7qzvpPPx5wnmc11GajPAWcxupaxAYYB23",
  "key5": "4BQR4MmiKDVn1V36NuX8x6v22UVDRjnZ88gvaHFvxXCizrLTQXYxz4o59n5p69BXmEK48uumvPdTQ7SYs2uLeVsq",
  "key6": "eePtQDJgRjueDZSy3G5TEa8XccV6xzmeiNwepFgrgUXyLtgednE5UzMUzAR5j6sLPv4srj832RtvaQeHJ1QxWpH",
  "key7": "31zyB1PxJkdtWgHsHacwyPd6hTTa8UyG8Tr6ajUzHrfJJ1pqNMS9vZTepUsEQgRfMcPSFyYgGUSmm8HL1T4zDA2i",
  "key8": "2NDLRyFhtXxAZvfDrKDBs2F4dXypy2pR2i7AxpkHL5PndSWq8Uuwr44UCMP6NU7WWYpQsQ2TwuytjabaUivXwY11",
  "key9": "xksBqHvqPXEY3w4ZLW3nynx2GFkqqWRQ1HNvTE5FLKkvZSm9UPESqn2RhoiKxVJZQZohMPA1wJF83xCQZYcB4jV",
  "key10": "4daMqxnMu25aMbPPDLj5YEFd8cR7x9UZGpsuLmaBzetnWoQ9EdR9DiDysyLjQfrF6Pu6GdXCLxfk4wVVQ6Zy88Lr",
  "key11": "5H1NTXa4Quy1pMZqe7V814pN4mGLEWWH2eSvuLBcKXpF9mnJc3PPSuNN8yRByMn36zUz5pKfR5epJnSuzuWQ9YDF",
  "key12": "5FMBWQai82GHmGbfdVqcovdgWk1XdJFRzohnSjK1EaXyzSbDPUYs1Q3zKFd6nihNAzuAycwfe5tNhbbGBFPrpasR",
  "key13": "4Nm9pv36z4LcjqAuHwdJxMPS75zsR6iG2S9My3VLGE7tQVcZdCnepxNaSt4PmtgzWSJsqBn3WAA3Xm8Mo3EjaX5g",
  "key14": "4pWx5JC2xXJ7FE8MhP1cyDETdxQrhH7m8k4LAN31qJVCjG9VzhJ148rv3gtp46ctBBqBhUorP3xRWQpKtURsccSF",
  "key15": "3z8VEgpbiFbpLwRPEreKZqBf7untNPpDEHoMH71ixyhj1SVEkJE4cvGyvFeaKRcA3Nn5ihaP8rK7o15vXo7LCWdR",
  "key16": "33xpEJ6za5kVrVT3NSHVYm188u9yefok5SZ4iSrsroFaoZ61koMAijcd6dSg6AKmCrZ91wL5C9MWPCkc4qvfrQvX",
  "key17": "5zu2jGFkqsbAKUbuodH37mkJSDrfr2pTghRqi93ckV6HpapebAGKKyfjo9fg9rLeuFXdVLxpD9rbXHyUv3D7vk47",
  "key18": "3WzD2eQTpzXwXFdaLcgMVuZxAqaDfEBFXWHm5bo6Qxzyd9nEWSUWsB5idcvcyTUDk53tXaJYqoKfJSeiv477MTZ2",
  "key19": "2v3XDvT6tWiW1hhvYYYkfzLPyNgLHyYEUM8vr7WG7inmwmqPbECFvjKLhLc9N7zCTNcZ4Jqd7rxdMP8pwW4eh1yW",
  "key20": "58cUScJQUfkg2DtxVkcRX2hxubfTUef553cRKXNGu4abTnair4G9V21J5mdSEnkwtwmpBFyPoG7HcKFKn6pLBFw1",
  "key21": "3QMxjcu5UsCZSPFfseP4TzNrDpstyaDWQpfGLzAABtYtxuCrR6846hz5V4oGs2ERMxFMczkkjLiUEWNvyniwAKpm",
  "key22": "21QvePZYi3NTGsDozihmwbrnnpYvo2mDigZGc8AXVGke8i3krK6SHRAhzDchSibC3Qa3C78DPDQCa2RtL98xbaTZ",
  "key23": "3esTJDEjeMWdyZoeFr8mJ95aBFGYFxMWBNmExzvWzznK8b9BwsPzVLxPNuwEGNJCxoVxfMNZgtTKPYA75Q1s61wM",
  "key24": "38GB4f6dLd8RJW35b2KqJ5giKaEtmiUd6n6fvEkvg8BwDu8ZCtrP5LN1T6dSSsK4KVuAdmrzWXRYuU792C8NPZux",
  "key25": "4EcJAgq2Y7FcUgvoLdrqPnSpmeiAGpETFnzb6DdwU1ExkfuREnaB2RSpEPn3dHCYgrEM84nTxsSB8eVSQBYDhdEN",
  "key26": "2ubqMNNJNbADhRfkXaG1wfRDHN8oTgFcXHi4sTMB98WBVpczzvnQpEWUQgMWJUfLuqrjDPMjjyRdBZHfzeJ1zEtR"
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
