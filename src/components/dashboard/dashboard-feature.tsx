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
    "4xPVFM4VxsE8U9FYsbbC1frPhZ3zs64KXBFFUPeA8BpYF1wXU58SHz6ZCQ5aBNFkN8zX9xAomWNrQHrH7NBuP1qF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sjv4G1SdTofLvK77LecT7sfPZm4N7Qv6X13xZu6YykpcfAVNACHQtgzChbPvoSNHYh9qmeJenNP5UHQr2NfBVLC",
  "key1": "nbDrh6SV98VHNguGxy7anUjSTbDyrFMdY79f8gLshi48PvzNG7gtcQjaVvRnLAArbHw18jFnHbp3SYJhCuFYPpV",
  "key2": "5d38DTpJ4khCNQ9ghGvyrJCG2iU7PsuYCimiZV6eC9LQj6D6NLn9odj1me31pfsShZzPYW321Aeg8jawGSmkgkc6",
  "key3": "4ibVNxuyogZg8xukQgQtzLoiuWHy3ot8rw4r6LnDmRqq6b6APGycj3vPsteo8shrdWRcxberkDCjS3ZuMDBRbmo6",
  "key4": "2sEGCg2ggLNQNXr371QvLE18UL3g2pW11DdnUuAKrNx3skiDAUMjG6QwYmfKGiXBwYeute8xtqTf4PnUyS2v1rYu",
  "key5": "2y6msA7M9SPGU6GcEv2Y7oaMQTukfvPm4RotaMDsy4LknTCWf6Yfj9kesvwy5FVvTDWuRHQuSiH7ND9iNkjMRFUB",
  "key6": "2aEuD7cgRVwM7bk1T7PwZdNr2D1koxRR9fsuH2rFUain6zqLB3i7V8dFabfjefpCB8YLQ94Tsfmgcvqn1h7o7g9S",
  "key7": "5rqQ767hQ59oMqyqq7YKnhcSqwqUkT2XfY9UjXkXzbx4d3cF6UQjVFRJDX7gv1Fr8oM6fdAihpJAaJAu6H859Jvu",
  "key8": "3UCb1My6bSWXAdxVz4QVtgQKUzSB9ZzXfgiDTu8zWN5J6hNnAtQFm6tZeUkDTAZM8RYjUcRAohfdsBWzR36Cvdms",
  "key9": "2t49X4HhjVKSWwuH4pkfFfWjaabdaM7VdgwjobbW5xzAfaMBkL7YEJz1WAfSsLjQ9ZYyxqeTVPC636FeMvkXWXQ",
  "key10": "4AaVxkiJfkPA4DCxVvijF2XyrfeJy7ULbMSKnuq34fEohvwWCpsBPXAkXm9L46TzTwnQGDkGfwMGe3ryVEhVkTgq",
  "key11": "563Jmr2s2jnGGUKRSGqRdb8j1Rmfxkvbtty5kvYHBapMfMg1wgMF2RFU7KhhTHMCqQ2cUxwsXP9GWkf6c8nS5tGT",
  "key12": "5jSP95jpgDrHth62WdM6c8yLpcxmjfgD7YKnVmRkZTEpsx5e2W49yekEy3WVwmZGiqss4Ls5dSNJpKQR1RNGAqsW",
  "key13": "45N6f2EfKUtAHSHGSA9jQ52wsUfTcQkQJ7EUZUh4vGzaPnYPPCoqcXrUKnhyoqRSVCtdXfrDjaHEefvNNoF4Npdd",
  "key14": "2ZSib1NQ8Jkw7xB1UssumBxXy3wBtbPEbT4BE66KaaUnE96zSwxFGx9QanoErrBK94y8fu1MaaoqTNfEak233dV",
  "key15": "46sDkPtnrWj9PJ6XmeBiNFErqUHwG4hMZ2JD5T42UMqtJfACzcGZxxVm6Qp9j2xT8vskXfvY5xHMRtJtezZmqnYc",
  "key16": "2eetoGYRdM3jzpq4nStkTWMHiEUvN9XcJzhSRYJYRd9bgDEpBDmwVHnFwwJcLRALUhConqTSg62HF3zEUrUa9H7N",
  "key17": "5LVzizyZBBrBP4UhyP9C7DqsiUqRf7yjdfJEGLtDo3ep6L7GPwo3yhxCgKFqmTRGvideBQn4cwUGV13UuvSmTnFZ",
  "key18": "2oanoZuJ13BWZdiuQovn6xHsoV6GQyhhHGnxNbERdhpbmjvMLbCqURtHtuchkcdJBXR2B8Et8PetfeHktaT7yD73",
  "key19": "3chS38V8RR4qAVTG8yneMFhh6TQfbrL2Xm6jfV3bL6YAmSRqgy9h5Bg8YP6ggf7rD9Vg72eTch7wbxZpDkXRZ9ST",
  "key20": "59CChGmGaX8FxzxxwKCWpktJZP749ihX61tiWDXPkFU338PHDbvXLYMbLRToF3DXWgnWJfuUM2od3TYvdNWkavNh",
  "key21": "wxzouYaMUEZGJWfiZRAwVX19UuGDpQ2VVUhzhaTdwix2WCv6YdzcCzRwexUCQBzgd2Kf9bXdTKpZb9xT3NPMeht",
  "key22": "5ypjWEf1dQV4KpjgrmkfH4PeGZtp5eFaPG38NfQEUcp6H6Syvzwe5EjMyCbzV3esQsjmhQbyvRPJJbVVu3ZnRaiQ",
  "key23": "39Y7Y13XvdWfTGCdmVQvSumHJQZzdrvYoVYvb7BDViuwwqZX1jVSN62u5TmwdPottaLrMitk4yz1nhWYCPPaC7eZ",
  "key24": "57qSJDA7NaajBCD2rs7Moo6fAw5LkyfVg3g4vTzsfKFjWLkYyzMPi4rmeoMxjL1LMqRdb38yoyYktdsgA4bGTBm2"
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
