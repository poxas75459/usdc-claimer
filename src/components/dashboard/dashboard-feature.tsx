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
    "5zUSDyURdjDWrPEndczfEzrZCtrQUfJHr2trftoKsJBXfBTAoqyMRkoCzRgAp1td5k4Zz5E1NCCGJGsXPryt7UsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FeDUJ25TfhH6brcNrw46ZDEKDVVs3aNJmrjxdXQA5bkEsvkfPvUXvqGrc6h9G6B7dVGmVenzhzMPHFKWkpsKqy2",
  "key1": "9QoHuVBApBpd1AtnGm1yxmpEXqoKoFtsPchjApushHnkj4xVW1aTjom2Kdxdh8YNvcSpXmTNKYvjfZCX5Q6YgSL",
  "key2": "3Ar4TxzMFrHE3JNjwEtKH5K4jrnSzfaoD4SAUDBqLqcyZuXMh1jtvJbiHjAzS6nXzTqYJvpBiqVwRwMgM6SZ46My",
  "key3": "mfe7E6kgTRC1JsJFwyyMh9LStyYrNDL2SmGWiiDV56vdJveAeMBGyy9gwYGq2t28BspgXn9b54MpbVTWpmrvsnp",
  "key4": "5R22uPzXVGNNxop8TS5kbBhm2yLYi6DbvC5Dyb3WJdx2zLbPNsohjpLAt4irbsQrJVPW4Zx6FdxwRiCquugMDd7p",
  "key5": "KusS4xN5YYRBXirGaHE9Px9hLNDrB9Znt4yYndufBXGzwjTJyWsxBXfqZcbbJRQurcbaYByhBUAKZfvZVckYiei",
  "key6": "5N3LTEckjo55rZf8siiyUB4Qh9GfuH1pNfH6bBf3jZK6bi3YHpoPpyVAuLx4kQFeY2BJV782kuhhvoYdoM5t5Mpn",
  "key7": "53cEivJhPQ7FNo74JaBi8C5MKduG9LgLzw35mFdGVNa8F7FJ49rpVMmYuqXhqA21D2ju7MLpeAtAGXgJ38Y7gxdc",
  "key8": "6vzp2rF6PCGN3giT9mm5W3VoRMgtFMzhKhGPU8NtL5BUQye5VhZPyZLwKy4HefhXi687CBRyDuz3L9tvPEiQx7t",
  "key9": "2EXGCjYixZscLNgvbZkw7TkKiGE5fnKXbJZqbHam45RynoEv4eLYajqm9aYgmqS8RAmfSs5TDjtPZExFkb9CByUk",
  "key10": "zn8rxdKKDnvPMw8Kw2QSB1FgknSpo8h1gfyZYsS9rVziELQZGA9tBPPFt6iqN4hrP1NF81G1eYVfuXPCtLctFaz",
  "key11": "4STky9CD3HpFes62oeqnVfPojjXzPhMfUVTC7SfH1YBrRSsDBzVTSehsRQHdzChwGWDNXWfso9p9mXqZcaBM2aJu",
  "key12": "u7Q93aX5sK7nmjs6Z7EXEg6RKSbBaMEp4NFHsHCmRrUx3a9orkWfJGWCAboX3oT8dTW9H2J7SgXmXYZgzw6bwCz",
  "key13": "3bhTw2SgZw1wzhcyHGgXiNyTg9FnWcqecoWJ618KANTUjapZrjBogYcLyRHTmQFHBfMRG9bukRDM6GNJywja6Ame",
  "key14": "3dt3AWkTirpkP2YFp1VLnJRWoagY1P241yfcvjsBCJfUYgEyLwkxbrdrEjYYw885JFm7vkqYRsEkP4ZM6GMrzfbz",
  "key15": "yi8GHtkSGdSzXo1rzLWPT3i2JeEWdVqsUjiXdqnh4AoHKpXzUaPKN7bwco1hGXo49BWivnQ5mzGomJiJRrnR48L",
  "key16": "63EZnj46f3TqJzRjWET6jothfaTKqyVsxjcqYu2evaMfmPjFLrRUh4SVK437xtr7ud1E9XJrHTGE59wZutmQsqZx",
  "key17": "33ZAptmBzuttxfgyuptYyqgEZZdiCEunGNFUX2SU53RQww2R2m3NSSg378jtiksJAJmVBY7e4cCvduEvqAD4M2ak",
  "key18": "4YtGhuenvcDPC8ktJSWJNBL4Vq3NRKTbrnLHA6g9VZUuem8PRQcJiZ49M88v58JvA29L3dydWSW7SMde7u4T3W76",
  "key19": "Cko4DzVALTh8ej1wUoNJtUYJB44bLZrGRqYSCtNG3tzwYzN9WdPMp4wLrgq1MkpGJLxCgpwyXACcMery19DHp6q",
  "key20": "ZvapK27hD2VcH7sKDo298MkcJdPusG4KqWh9aHyYt2YimCbjAAHm7PGA662k3JN1pvcWD9KH3myahaxXSZT6euE",
  "key21": "QjoA3t3kwKMd9fwCLtiknpAYx5QfHKCf78yJH5njx3yCCWEfNwxGc9XThh2Tvz1dh2PpChWnaFdTu2cxouBv1cd",
  "key22": "39zvdoMDha9j14EL8wYR76Q8A1aQ8SvhWVv1CwuT9JvVrApAz46UZKrVotKM6H7LxdwUCf9QdBGorp1sayyAegXN",
  "key23": "5bAkYEdyBkhrMm7t8ueh8rBaWrAy68v6gpXpLawhsZpB39WC9wyXNi2taNB7G4GDMm9uxY6Q2wQrjynPDovqab84",
  "key24": "5oUxNzPPJkSjbwkL4Qw5qxqaoeXwJDRQSRvNkegV4n2625oPLwJ698tePPZivVWcJqaePj65LbPS57WN7kDUKGzw",
  "key25": "3eGNKC3jr7bCTcDpYgwXwBB216AjbQNppzysd7hTrS6UaZjrMarTXB36ckQkrA5cgitEfB2rXqVXCP9wGywc9KXk",
  "key26": "452chw8yBVsgvYEzfNo7Ef3xG1fDm8YZ1gw2281P8u4Z44Aj1x1kKm2USjnnLpdZnNaMo2mHpmvJqDa9Pi9b8kip",
  "key27": "2nQPWhfpJ5Lpx6WCCXX4nkYGnGEhvLcfG1LFFw4jBoGnKV5ftDy4EdqcDVzmbeeNZdHR9yS4UWZGSjHbCYP73hW5",
  "key28": "5Uut9DGpni4h1NG41BidKrDjTe4eS1zjV62LRixyhhj62rAraT6xtzUUsGAyWLprcWHxsM1wf2CmcyL11XDNkkXT",
  "key29": "4xyi1LDmp2dADEXr48rtiiPcec2TmJGmQa5EsRkTtvZFYE7umbykKUNP3e3s6KzR3MNVWZVHDqjhakf3fULeHbwD",
  "key30": "21aNYtrjNggb2AmjAv686DfUHa8K95Nv85ZHp7oTEMYfxTGrTUhAtZiLjqykjzoPBT13Y3AmKn37GLKKmkTotgH1",
  "key31": "34ZMTCmDnLBYX3d1Facq3bHUBMZKdqBEqqiBfhTSanky6cQvzhDEKYnHVqNZf5zXYPGEVjuXCNmuRbBWMCLBdM2A",
  "key32": "2pHH7rKLLwLhfQahRtyKKuBnWrdcmrbMXmg4hkaTQjJEGTymFFdzsxqto8AK2y9aqx829H6TYZwegqXeCaJgsuAq",
  "key33": "3wzGrznsCHrkho3dMML1JvyekTPWhpoydAZqot84oBtWmBZfnRQedQD1g7Ud4AdAd42QPCPp9paEeuWemcCcvsci",
  "key34": "4btyZAzF5JXvi6toCZ5PM2bRu8hVMhXp8EYFeYdRXwFL8eJfSJEu42bYxCFkwGSrCgGZE2jzDWCQmVGxnw4B2Bec"
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
