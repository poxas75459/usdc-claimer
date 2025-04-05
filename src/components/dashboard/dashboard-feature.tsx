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
    "2opeKxP39WobymzKo2wzsP7YEwundSNUVAppzP7jo4yEGknYRe39pSsW5haaK1K8f2SEvRNcT9GqDdBo3UAYgG63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDdPArmcvzAz5R1ZzHPJLyiHsSPTMoa3XJ66fHasjVjrTVXyXgd2hhgL2svuwQZrCid2g1dedPkpT82vwmbKtf",
  "key1": "nwerwr2TRJuZgHhwubxkE6Q1EEM7of8z1wBZVAmMzkKdMA87u7aKpQPGT9GbeA3equ4zXGbmEjr8PB4zNwBwgmm",
  "key2": "342pEtnsYXZ2yt3sgH5Qqmeujf1kUk7myCbKW5e4tf7jMUuG8YGTpnFUkfKBG6NAc6dFC1KQ2e5BxvefwygP7NMF",
  "key3": "5pJj5atwfJCajRVm6Z8iAt7Q9XAqz7fXELSgyBQ97TvcSGBpGZQyMvSFnPiAAwfN7iHkKfRS97ohM2icMC5tvb7T",
  "key4": "52PYXduyQhuEB5W8NBGKWeZt2uPnPaEmd4LnxtdgkcaNaMMa5GXbGsuFYKY4MwcPrGbETYC3xuwfeZZDoMdR3odX",
  "key5": "3QDj4J5jVJVJqo8TcZ58UKN49wkDXvJJuhiThEVtd4HghPeKvVRG63x1E6m19a6LkYk7VUjgttLZ9F18yxxzSpa9",
  "key6": "2rucW5YGZSbphkyuuNfTz7PFmmTFSWhXUA3V9a72bQ1LGz1k787m1pFvKZvJBHVgjeExVvcwyPND4GiHnrQRHG79",
  "key7": "3dD3b3mVGsYh6Xrnrhae9kEUu8WpjoNQn9Fq82kwKBkQRFEsLABPWXWVVspRrGdrzKrJxFqfbXs8r5gV8WDnrZ6B",
  "key8": "yk9WD7BH5no5nWPEZhhBaq1iahk429NLVc5Ss4vcfJJVHfxVJZjTqQn8Ve2q8FnrtXjHyNimfV3zWhwbF6eSi1t",
  "key9": "2XYW9nB7RW2Gpnw2o62kp4AysbCbN7RzgeVEGUPmwGAnrn5vwqVMLArA4yqZq5TJVNy1fwMQJBPDAzHK5NCgayc6",
  "key10": "4HXwQ8R43QrPZfHLE7jN8qoGxLSNG4kH9PSgf8ZDj4KFeDaVjvU2jcVyiayVRSfWKhy7LwZ8CFwQFoZMhXYP4655",
  "key11": "2gdJwsxgZfbexGs71MiHXAuHv62gggWQeHBKp5vKVeC8gaY32GeQ6krZo8qWQyWSyCBQrwrkR3et6VtiorapkMty",
  "key12": "4tQfx9oGacHY9X1wrsgnq6Po9Q1frEVp6RPjr1oHzFtoGHZyGW9JbvNTfmSqAkiW2b2ycvJZiihdGkUaxo17ijpN",
  "key13": "4hD9w9JUTC8nuGKwcsoTWoXWjbsL8ttbe5TaEX8ruTz4HcfocTzTLfSTXKXFW3eCQYd97pWpENY6JfbkojvqD1xV",
  "key14": "5DLAQgDMw9H5pDipZaZ1eMsUY2UiK4b8t5YkHGGhG9MurEk6FScFM1NtRC5A64cwWyEKahaG7zoYFBaYPQpxrbQt",
  "key15": "35zRXxK2KRXtttHv5LZTJ6v5ozpJx7PPZVv2F6BZQ7FayRDaiQa4vZh7A2LCcjbzqwDhfWutHtkMrEUWpC6MMD1Y",
  "key16": "o4bGBMjN2DYEMQiRLcwEhNH1eiNkSRtM2qZFXGfaBHHW3EXjruEEm1SCfmoT9GBp2Te94syXTNsinRjZttCWi3L",
  "key17": "Bs4JEr198VYHiTUcKEQAV6bnmHCUTsfBQiGdZzZ1QRNN17S4AVefpU2et19CYVduCzRDY9PyNtmEuWSPCR1w4Dr",
  "key18": "4hD5RiPydf6uQp9wyiq8Yvbo4UnDGLqC7eLJDsHhgRgpXsnxa1jm6f5QJRs9PkoyPG5HWQkgMfeTC1JZZiC3bGMU",
  "key19": "DbPw3thKjDLz9xYfALoEgTfQHtQtJDhRZT722qEHDFu97mo2greCXLM3tAZ6x1dShfyGzND7KD3K2a416LwUgQz",
  "key20": "3z7pEhYe3yDLpBT1pAgzEaZ6ex66vhoebnQSdyegaMZDkHoYy29gSw1LHzVPuY5LM5kZa4ZRkiALAjnHqvid154N",
  "key21": "3U5S5y8xoLaj5o3LYCYoJQoFMDwY6mPkbjQXHFCjAKCbXnEwFucJ778W5VjUkniiX8BxbV2uXhR8hdLQYmo93Lw6",
  "key22": "5kNP4jmJm9Wf4cgY6ugaujusZUQUL8rG2ytrJRX481SshKiUi8nwLP6YfPxRPvPsFYr9qFjEpWfEhfGFMZmJTzeX",
  "key23": "2VJaD9hCsbPWgDmqXxFKe2Vqg2wuazu6MWBpem619BpvknSTdwihN8m15o8zuSemcstGJhATobdR5hKwrvfYRKs9",
  "key24": "2dbij4z1ewH3K1Nrv2eCM4gr1ctrbCfXQEFoJDpLjVH4UjLeCKCmZBjxTdR3BVs9attgsJoyf6nMCQUgvziTawkE",
  "key25": "65fDdiL8rSq2FknfTSuFXxUdRMNRBcfrTquxXjLZVGaexU8dTsvney6jXgi6YZhYo8BJyQtYSri3VKzM9ze79ts1",
  "key26": "3vEEEaAPYsYRxyf4mH9WWKUzdysFmsMq4hc2wBPeZYqwUGf63pCzCizE3VxytBgZrznToAx6dywcYgq1TWYtxWsq",
  "key27": "n7LSuurUteHkXqpK9iAFCSdurjuNyUegcGFFede8Lu3FVknwnMSQ89TYER1uQSqxhZSaw9kEJjNFpu3DRVhz8oZ",
  "key28": "4vbbtsBXfWNR31iNFgt1Ky9sWT2492E6xi5Ytn387RE26KUd3MUbByuZsL1erLf3rN7XBJCz35HTgd9n5oToiUEM",
  "key29": "LQAwMTM5Vgu2QRQ51AhJFconTsWjWdcndRUeaZ32JE5rY3MCdP4PpMykeskLq4Vc6zqJ1qk2qTtoMurETTFeNqi",
  "key30": "2UGtTtMRu9PrmhB9573hyiRFUtj6Rb16gafnT8fw8tUjrWjPB7ZDNcJ5Jvt5HfgtXWz4gN4dyjM9RAMomNqXLsLx"
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
