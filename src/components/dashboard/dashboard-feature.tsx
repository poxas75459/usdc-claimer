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
    "29R4EBu3RGi7JsYpSGUHBQiQAM88Y5QsVg4pA3QJiXqKPigyNqcRB2xvP6mQuLDCRPGNhvdhpbZhSsGLGHeKLcZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N5A2yrHDNknv9TkJ6Fgkz4yDveQEjEf2Bgw2efRfMxuzVpwFzJiw3jFEkntSp592isPzK8598qLb9xTB4rFq2fH",
  "key1": "5CeQnp9ajRFZJD17VWbUes9X12VGrG2ahFP8UNFscLogysHvf9NvM9QpLMPUj7qGR7Rq9D8N3nUVbmPPWG73gYEB",
  "key2": "4K6hKpbr2jgb68oJrcRRxXGVZ1T4hRSfVJC22qrc2jc82stpT4oHWhDVvbUXiNCwD2Vubc9Pp52UafRTCAP5Epw3",
  "key3": "2joqUUooxr8bLwG1uSgfxYp2fJQQtUphpThH1GuJxVicUdJ9Qu5DoUSMwkpoErD9HnT1BpYJ1vqDqyCGMZNT1KsC",
  "key4": "4q3EL2g8LrB4peaWkxNNMhxgtYFn3TQ2EKpr982nzJUq4NqyCfyvMnc2cwjK7GrtMnrjpHWM8HUQtBJ7zist6rdL",
  "key5": "2mqU6ijTnJYU3KHJZjNNbn4479oxUZUNYRwvTAvqdbNfadb9sTziGKrXFuACh2DCft5X8gL5t2y2EM8EmToxLg8q",
  "key6": "3oQ2JYQ5ZDtJP4QhucKj6FRv5sxncGmP8YMov6oPEcHrtZ4CQgfVTAdRKqjrJEbqzgTuD9UxpzPWsZ3Z5YohBjTM",
  "key7": "3kiGnHx5qpawbWF4HADJQjJJFGJTewoB8mhgzLc3UAVYsp9y5Y6iAG7WKRMkXFJ2jjic8B1JTjgofy1AJR42pBEQ",
  "key8": "36ivzZD3DkPk6jtrKmVSa9Mmkx9Bas8tcqmWy4gYWesDvzRLeHtMSWse3J71DNcXcNKnAABoyapWPJ2q29R1exeZ",
  "key9": "5Lk5mDnPJQDzFwsr83UXnp37WHFXZc4ZqjXz6aCBQEfRHJheCG5jMCJJskpeFK3kytmDvKBNag1tT88J5JLqiX5F",
  "key10": "2kMKYePHkTEQCAXnSuFUzAdDbA1fTrcdog38wCvKHYQ9xhDx6fqpNbjuDaRBfv8qsxJGApmDzs3x4tgNAfmJDGqF",
  "key11": "4ouWHwycDrykFHPkuqzxneXgQUecM7Zi4qWjjZWtsantYzozBXrZBHuwKsWSVTWGwMqRLM8XcjX5J5S2noAc7ksG",
  "key12": "1PDkgThjcNkhMUZ2bSMP4icMwTV1A3VupkPer5HgfzUyoFXbzsU9qBZK53qcoEbHE5pKrPy8h2KeoPETJnoTLtG",
  "key13": "52bNU62oXqPc28smtQJpa6sjWP9TvuaVhYjQi5C4FjJsXbr9k3JHxjEHWgQzDkZ11edazs9A3mw2VtNPQYqZYMhr",
  "key14": "4zmkCFLvPEAZXEUAh5JHCbCtzTYCuKdCyyrMLRoARGJ6W4gFSHcLVcyFJwqpRfddGv235hZiLpgqVE74tb2bEN4k",
  "key15": "4pSCoEm5aa3szb1txwzH6CnzBxUSc3gmvDb2yeMEiTWtQ9iFnvB3Cn5oQxbrCGyE4ZEthx1x1SbE3MyW6DdKCTMA",
  "key16": "2tQc6YY2PSnoDSbR8aZZojsXyD2qC4sm6vhmfn2QvKJV4Uaret5K9ungba1iNZ746kq2dH6rGVPnntdKXD5bKBGm",
  "key17": "L8qv9F7EWbdRLGPoTMHTshAcZTfnsNQS8FtgQrNJi4hGwHXLqwcbEB9oEKBrFRVc1q1vN9emwJLZecg98E5AeAH",
  "key18": "3YqSTSy9YrGXRAFUzEW1WmMuEd1WFBVXwEiXMSnm9J1MMuN83WSVoTqPaFE5yntRAA8rGDMdLzmSu1MC8r6aWPWh",
  "key19": "46z89MQwkm7Yw72RbEaAmNsWrPPPwV7wk2apc6H8hz12mSFsqTED2w5uQTyoPXtjkL5TW9iQA1QoLWY1rKLLRji6",
  "key20": "635L9xbmRQzqeLRrprMCzhcUmhC3HSsFKG5LTDT3oVyr4bUvAQSGe3ric94PdtXwcq9REUC6H6RjaLqdzVoD1rth",
  "key21": "3dvcHmRrWV5qQuWVAHMYmvzuwKhrKbegSRaUQBngrADC9jfZqS4iGpsz2PfxPSLUDMg1vqJmcGiuZowdWLkktdXo",
  "key22": "5iqxm4ke9cu8NG291cMAmYBysZdydYwswWXNfd716AcMJVZzB9CTpPDr6nrD2BoxtNuQxNH5ok3AWcKE9L1n2apT",
  "key23": "5q3AMeKLMW9CovmdPf7DRXDhUfJykMrMqTgVtsag9G8CgrpKBGLSyw9oX6ZV1et3hv2fhxDwKpf9Pea45YAduwP7",
  "key24": "4shrHjTdLHrnBkTRZxo1GSKCXHc5a4yxFWc391EzWxzJGXyToSP5g3LxKHoA357C1P8dHZer4a3f1D7QpP8R5RE8",
  "key25": "3cKvcRb3Gg1HAh6sKWQUXwVVkxizkXhgKtMzREMPdVvcymxiHuVgA9VSCnH72LBkrvCLvekr2XoNFdK5j1ZWBGh6",
  "key26": "v8FPJFPyzEiobGHDSEB3vxqmZvJNRWkgTimbgBFbrxaZRXmBZCP6dGJAVGCPfGC36W8cFDTmKFqz5Y8CLvMYJyB",
  "key27": "2T7c1M3uLN6QXM414CLLzGf5AGsxKgG8nE5DiuzJDvbZnHnEZuXGMFaJ8AdateH8oD4bKGS8WxGs3bMRN65CCrGv",
  "key28": "3PXUHttKwWVoakj8bTRyJHcG1snL14z92XdGGtToLzG2nAf1oS9ca7YRXYZCxc4VngPkUDDqNdTA4uzNhL8iuVQF",
  "key29": "2Y5NLpiVX9ZixmodkThzynAisHdHBT23FSkkLofufNzZgMyDiAp6ZiCrGmVJnGYpoxWAAxqbA2N8RzesGYjWX6VM",
  "key30": "4SWRDq2qSHiP5gnW46JuqmeRD53GefDQEQLFQx7SgQCKTgm7odz7SEpz2sRYThfiTUh1T1K5eBU8vn2gmY4L38ey",
  "key31": "5e3nHZMLfgta8d82vW1dnvYdJs9BPjHQF2rsKL24AEp7pSSJxtGATaGX8p1yMyjfjWBrVfLFguRAvGDCpc1kvxZN"
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
