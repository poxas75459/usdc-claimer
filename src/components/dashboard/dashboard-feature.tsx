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
    "4gxTRvMddBDRCrrsza9q656RFySe2M2pkdtMhgu2NQRx8MYzvcmor5RcaVc3TagffW4Z3B2MVxSCSaBvzheWTwdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DLnTmnLSGp1P5PwYdcpUsua2Usbw3Rk5nQDwjMXts2dQHZ2drBC8c6FLDJqvEV2SFv4AwxiPdQ1SB78UAWvwBFE",
  "key1": "5WGsqeZePxFsLsf6jDoTNS24wo8izb51pMGX6VD6JobL1Wtp1KCtaA4mLaEo1R7GCprwZDPzXxRmyr2CkiHXrBCy",
  "key2": "2R7zu5EQf2E5T6Rmk6eRZwCAFxerQi1nyHL97ciZX2A6hPuoDPbFYrueQzLM8TGPPPEffdAfBEx4ymFScJAZiDBe",
  "key3": "5czcRCEZxRrMeCs6VXiQoZGHXCePeYSH1nF1qaeRbi9cgBZaAhFfvj83NWYMw6jVTzAFyrsYwKFMRkL9N7zcwcpq",
  "key4": "26BGZTZ7roypR1rkJxLh9cZdPJfy37V44FYu1JQFqoJQPfwVT6DGwPS6cBfeHZc3oZ3QAfj9wDnbgnLRexCBnT3j",
  "key5": "5g5KeY1KhWtEUhZQs9jtZk3Kg9JvvNe4EL64XVzyT9axa5AHdrXbdxb68uKSScPRijiRCPWrxvJ33vxdanPBBRLc",
  "key6": "3Smt8uyi8tmsBJjJKa9kkbpUAdwZuAuxajhCexzkXMRxcH8q2KbDkVKqXq3tq3tkQqLsf2HqkwY8435JbxkTf8DE",
  "key7": "5fJNfudBHMqj3j19yddWDjws6MJFt4pYidn3cVr5dL9Wiy48fU9RcPNLBDrcRFoxigz1T6QCQLCPQWXMEYzzcHGm",
  "key8": "59iyGRqAACQ7xTwRRqY6PbGFBYzuh5RmcEoJk8qBxf4Qfo9v5mWePqFPM3FdvQgwLcsea2voeFnVAXyFSnFjHRtH",
  "key9": "JELoKudFL2unRkwkebeDfvznhF7ncH5mgrxJv1QZQT3VzXjTfvmduQyiCiNdcRo1FdXEP8vK8dZyUAaJ1fQaurQ",
  "key10": "3LVvmFkKpcPUn9yYnN4Cer479n7u89PuBCCU8nNbyWwAPoyYnrW4hix8FAGtaWGSqkfKmmKqtr1rH6QryFBXSTEt",
  "key11": "2cdapzUbpg1XDZaSNvgYgTHZa7oK7s8BbKSwEAtCvFL2rtGRUyDEt16TC71qfBxbazsziSrEJmFFDix848cci1oG",
  "key12": "2v58AWm82nkVb2nY5m6Fdp9nwxrAoHVtPJSgB2ekJ6d2nwyqiNQs7cmHxkNswkHSRzJGFSnApsgYvYaGviFBXajf",
  "key13": "4fPUv9V45y6F3bxc4yebW2N5EfRAy2K17knVgxiavoq16gGFPY5TbR7YTY9yL429deYTcMvE72AuKPFNjE2YMBnt",
  "key14": "4YGBWFZn2T16Uad4sVqft1gZiQ4tWok1pnjNERuGXd22CcuXM5r9tH5MDsM6UWaVm2ka49yjeqPi9L1NFyv8zsJJ",
  "key15": "2gNejQDup5BvooVa2piKgDgcKqr2ipfS5T3QJFmkxPdvpqgsn2EmY3dvPFmYtjrRqr4BY1UP6SfjSLNsR2KVHjwR",
  "key16": "2z1o4gKMKen8nzXoJ3Ucmw1db8q6EBEtGyrg5G7AuU7VF1gsGdd7ktNi1G5vrSDXVjsM76NnzasihjSJeaBaUBe2",
  "key17": "4P3538SdWcXPTqYky3z6oBagufCkqsaBppPehXkk7ACYi8TDKakHCKdRV24NHcg59eMsjaQotB8DyeiRRxmSCMbB",
  "key18": "5s2gp5FbGnx7aQTWr75xGbWeJAYNTHmdtTx2c6yMUNbmnGm26mYTYNvN3ixJaG3YzNtmf6c1C1onqALgvQG9m9p5",
  "key19": "GdUY1cEvQDNV8dWUQcNDKrdUeAeFvR5ieLidvF2du4dznEM3TNx5pwvB9xtTtTcmv8r1Jsi8pJVgVd7MNvM94t8",
  "key20": "3ssEbFXHZQM3H4bB5gnZ7SZr2KAJDhtaeTjWmz7XKUriPXwZsW13JEWsUmzagAFzg51kru6zUsTAU3Qx3Fb1Jzsn",
  "key21": "3k4kQjhHYhXgsT5rU2UHiCn4yugNEoxNcRog8cqa5k9oH8zyDkx1C24q5ob2SR8qo7cTjHBxW7477uR5bYeJCk2o",
  "key22": "3F25Fmr1s6bxdnMiKuFvrWvKwB7xnL1uuGcT4nR65SRzJAcoUKzR6yQuheubjnbZ3nGuv5q1sQC1H6PP1GRaKxCL",
  "key23": "3gp81s8qHKTyxAXaN5HF7GEaJtBa2SFfJsS2ckjdDxofyrTzasdbpKu8xJhcjYDttC5jTqnHdRAeN2GZcV9jMTx4",
  "key24": "tuBSghfZ4PD9qGfPqxhDZa6uA3i6ASjP1wZSdgqviKVjGgm7WPAwT4KEqCns25GgrB7FUM11jXJqLmkLrNWdk6H",
  "key25": "2p3pBPREkQvkUHS8Sb3iLvADCNCpNDNjRRmMQKESRXhporUPaoobvPb76jSrBeqj5qevP8JBEmSZbmPoG4fJW6in",
  "key26": "46KqHJVAYWoWBuK4qDA1pm5JYSjxzRR8uNpG4DGbpbzSHw2LzYMi6kpQtnLBHrrfcFEBY8RyH7HFofYgmYBEASrh",
  "key27": "4B3L73jEf9qWBZGRLnqH1vsgmv4ZhWcUwpUm5xZhENHAPUd2GFo18i9RaSeVtNJBjLFzkabGJG5XMyKxQANxbJik",
  "key28": "xcamzjfvBmWSc7MXfe6sZHypZDYcUUa5qFYUpcnZks4AQGGMkbSMw5w4JPd1MZo24EADpfoy1mkJJVsuLV8hY2D",
  "key29": "qEJaGqnsoT4BYTofDt4djbCqdtprP4arsCEXT66LV8HwvGeKGYAuMtYe7rqJdYx2DKE5gcYCx9iMBFkjTwgTg2j",
  "key30": "iJkNnsnrphHBLzcmJRhWrvYaP2VzDZFAKG4A6qvQSrNTRCrxp4iuaL6dJWr24M5h4xMKfd51efU8tGRWuYowEgr"
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
