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
    "5t1n1YSCeJvTarpGc1j2mbjEv8u7qBpWxXn3TouNrpMeFXQfuGasM3MzYv2zW864cWJtZqwHZEvDNkr65SHgfRjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhyNnvMtZJa217nxLnAzYobT4msWJJLHmmxpXbF6DaHS1UM1nHmk5RbzNgu3ZpYcdPzx3hQkqejxDua4EHXMfvd",
  "key1": "3M2FhNGZXh3LnRVyv4cunurp4XUttH7Tbgcwpjyk3hZLK32SA6p2QgbHkG4UcYoNL7kHJMnpAhJcc1669jJBsDWV",
  "key2": "5dyGjbNHc19NNnVReESZZX9fe6VrnypGiaZfV8GsXqKz8SV7oc4iZHykvtBNV64YjSrZgihReWkftfTDYC7tU8B8",
  "key3": "3tPhHPokVBDdVBtexM8vaAQAfgDoJdoc3XXXaHsfVerqdLsWKSrq91yZCm4SY94tNDK8Tu8JmEZS22TocpWSph1N",
  "key4": "2c2XK1ZMJSqRS4o9kXzcnGGfwpfLZ4ZRHsvVGSet6gTycCCrgnVK7mZBV6CavovEFPdFfHUVWgUqiZjDiZsKM16N",
  "key5": "2DFe48LJLvCK44qPdXg9PYn9mcAhpjwLQRePko6DgkL6a4xdyHYG9Gy7TZj1CH7dYJgEDLEc16GLiZaPDnLns1Z7",
  "key6": "28mURpEbZNNoc9s4qcCK4czAUtYKAJRhXiRxygsYRSP2JZZB5hTdpXgDxFpEPBgoi1EeeCDoiJiRTPrnWJ4xk8w9",
  "key7": "3LSoWoBB4T1s3uDnKhyjfYrAzafKmAMfLPmaMniCxVGLVjZ73R18w6abYt3aPLjn5aHDbx8bEMss9ks1sxwBFgdw",
  "key8": "3KcVaVqMdo5peSCnCzPi2m6fJQ7Mfds9bfbKo7XvrhPxPNKX6Jia867rqTPgR8GqeuKARNe73w88UjM4goP8paSx",
  "key9": "tKYgEiFMkURitmLxFsv8nDDmLmQxGTUoq5FaQ2MW8pUiaJWDKw7JDCDrSugPyk7xtchpvqXoFpfQUA7cea8GEfU",
  "key10": "4UGZUdoFTq6bZEEjMWBWMrKqZM9sQLnsQD5h47cn2sWWrZnUPumYTLGUDoJRHJHkNcfHH3QWLuwqSf1pAg8LCNid",
  "key11": "2aBT9sP86jpJkqujrq99XMmAY1FziUcghd4aysn8m7826V63r465L93aJqEhyqnzW4keSPGgTiFPM5JhKZV1ypXQ",
  "key12": "3eCSSt9KNnDWyk3WzcwYuzBAR2TnviicMcedmAsRKHAFHSRy1ctLUCHZw9BCyJYueE3HCUNjjqSQqNimPGDmXmai",
  "key13": "3FjCfwMxTK4S5z9tHjsakNrHe6a6jcNo9LWvUeVeBRQPmvjrFDi2D7YLWeMYhqqfsbHYxsb3XWDsGF1LDq3w8Fzv",
  "key14": "3KGZUeb47YkTtw2iqAdaNAuzozVbiAA3BXvsr2bgg435kPVf5EmuswjqH8CkxmDrCYqYvZB4k8JRvEmun4CdfEqi",
  "key15": "4H2R3THuUfAqabxEPTzUwt8kNpadupUQ89Xtc8HQMkdFtFzq6aUhLSLUvDis37YTzTKLQA2whQgF6e4FkxRjBxg5",
  "key16": "2kZUHTEE8ijcJXLYyA8dvQT9SUBZ1fU8kC4nB9QjbYhs8LWXyyDYDg2GjKNpV4eVzi8VawACJQiivF6ineata34T",
  "key17": "78d9KstHLT3vws3J5P9xj2imU1ANzcbrTc86XqWWDy8YsrpLbJuiGLiWFrqB3Ym2dW59nzPUFPKQrUeJrfkFdsw",
  "key18": "5j4tM4F9Y8hNipRkNSuodhGgXBU2WhucJtHEwGsULcvdoEH5nZd7Ly45cFXuPFuD4CcFny25rnvwKQBfPs4Gf7gM",
  "key19": "31RoYhLAEP5rVitJV4Mk5Xa8YFSZzp8aCq4mokocKNSsKPKpBQLdH5k7hvY5t7TwdBA31VDQ3dnJ6CmUvjATEZ5p",
  "key20": "2sd2KWcKmZj3EzHW6pcaNCoEKw34GjiNomDwsKZD4dnmsLCbhgqrEWGqcWi7t6B5vZjuQajJYnS5NEc3LB8stQzH",
  "key21": "3n2HcqSM6JDR5nqwvf4ZmzYYyxZ5mL8bEwYpKeK9fEbSkpJgaDjCPwa9sUzzcZgw7j1MqccziwA1VaYjnV9kVaNQ",
  "key22": "3E2QWhcmD8CdLaLyUhTWRRXhCR3yXToxVFWHeG6dNKXHZsDmDZGqgsUBDfpFz5qSE4Pb3SddYBK1vtEeCrNKZryx",
  "key23": "2ymb5vd1hbf2VQAgokQTcLEqy8xzwPxuq6YiZW6HBmZdeEQZmscHHf5CfTKtAQj9jgAU7XHnQQLhmYhxrAsBPTU6",
  "key24": "5fmLwQ6psCFybjT4iqgTgFYpcrZufBj6k1HnA9SctEHrxiqen5GAsou2trpHoUkhvd6f2Coz5NDoLhgwiw9Hq7c8",
  "key25": "5YTNjwKoie5SqNA1XwPKaJnvUqmES8WAEVP9aLuBzbjSXfCvLtKhcrL3sbZmqeXqxDir55y2SDHpKqHqwcnKoEe",
  "key26": "3FyLxEonkn7FxuQVaEeiqs2t89H9ebjQVPqesQGDD4s8vA1twscswqjzGvK7HgEEgKTTzfXLzgpLCRQZfELNopFS",
  "key27": "5Prp3YKi3FB4nDuuNgg7RJUvvZ5wndiwQnnvfSCTWVVGekUmrkCMTej1xpXcbRyWgoZVPuEGgXSbP4LCCFyjPCBi",
  "key28": "3reY6HPAqh5EqLqEkwRFtqW6PEiRBTNPTberJ1BtmVFzSUGoQimo5WgBUdVVvM4Rpgts2ohmGeZjcBYZiBjnodzM",
  "key29": "2qaYwhAm2aK3W5KfjTSYfA3CYdmWbZKbPRE1iMwdJjbfGZnKZGKaS5gfd7LDDiPfVkQz8Qxs6iJekXTSgCXTi5hQ",
  "key30": "4U9bH3wjiVLF92Eq37tbJyL9jSMxRuzBMBWpHbZvVCADuZvU528tXWrJbxwiBixX9RXPu7ktYtT5gcP5aun7SoVK",
  "key31": "5k3tP16AfD58S1Ng4p5N5vzccMU7auEeLzaU3Yp6CsgmCQ2Dy4vyqz2sDykJoTfBuWqfjp3ujxUnwiuiCit7CEoQ",
  "key32": "357XCZ7KD8cpZHA2PRuvPcnvFW8fugFNbgrkQTanwHqycWbbUhkTung5hxxp2jT5P8o38AnAe1PBGUdUGjjNkgnn"
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
