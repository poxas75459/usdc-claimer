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
    "2TkX89pdVCVofzucUdnsGeqoKt5J4EjHuf7iXayFzCmFLWBLQjZ2Hqzsu7ceTXRPSdo2zW84cZa6tmWxJbEFizRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZXMaf9mdS2KA2r85YJLECR3yFDDhugiCaTYnZsUseB9GrHPMiNYBLPKEzV3dwcu6EMYEJPvjYQe6WEhnnLiym7S",
  "key1": "7xdVHbcTci7FjD74bTtCB1wZU31HL3hjWTrmNRUNzfNcChsYf2wMKkbqL3e6SG6ZEeyZp4Y489pGwQUnvyGAbCx",
  "key2": "5vMWWgQxGVrB8HNBbYHyUiggFucc9inTQs8mnSJV5Uj86sa8By1G5MRogDv4mX7dG3m9bsvAxFRR4mg4gew6tYjy",
  "key3": "41aqCP3jgJeBbFeS57Mko6CWuTVqVs6riBzMa4uzqS7UjsriaJAtqSeuKbfHpzFqBnH43HfdTPjsox6zCAaKossB",
  "key4": "4MNsmweeP6QwfnKwSymdQ9BiVKuDs8GZV7ynd6JXLdiTQ9c35HSfQXK51cyHEgm4a2WTzEfzctvtsvGvp2z5mJPG",
  "key5": "4kbP8WpUYhAyhGAcyjuZpHB2FPHuSjL1ECy3iTT7nkhNP1JuPuhukPyXD2R1p4ZvGn89LbscokYsU7HNxgZRf7Eh",
  "key6": "2JRbZYAZur83hzM5vCjGUw55gnjRpg1bf7jEHg15ZmMU1ToCRgcSuCZ9jtSda5cpCeqVSJ5nYR8fEbEYageFMRH",
  "key7": "58tXiTvvo7sMXLwtWzCRCasFpGAEynTC21GwUyYg6wFSrAEn5T9CJ4Gdj6Ctz9mczwJ1g54kfZmCuCtBjTzHe4Sy",
  "key8": "4iH3ftsSN2szqR1yjFFEYNhQjPnyt2CHtA3Cz1hMjfEg4G9dHNUHxdcpYezJ6nVSDFSZidmSSjmtQEexVnSPx8Sq",
  "key9": "2jk2hNxSZCTW5oLb6ueADo33UcNBPwxrS981PJogbsBekV9bie3Q9TiF413F7LVYGKdUsGa9zLBuxY541r42mS5e",
  "key10": "4ppo8UHpDPdwDALY1aFNNP94U83pbvQX2fmtte3pP51PhXHG9YKq5Z3KgjL7nfJ2X4PqSmSPtefgKyvJ5h9D13Xd",
  "key11": "2nUFggcJmXiLnuZ7P1eiaUgUR5d7zXtg5koh9YaZcmSGAPUJnuudaa96SgHc9CQ6yStAGnUmgoSR4hFDkzeUABCZ",
  "key12": "m6S48TgRYbdipSbF6zp2U8gzVeYgwDwZccwaBUAbBWq5o97hMHa6FidsThGyudFscx9wsLdtfAzKxj6cXxrND4T",
  "key13": "4a2M46JvVHcwt23TkppngsMhobHQ5pWEcuaS8KPuHXwnGDEz1LqjV8TWBpkudgEF4kGY3yWWXcT6c1fZVbNvPvnc",
  "key14": "5fwLpD8ny99ywc6esdqkiuY7MURoTQAj1DBAYwRuJ63qz5dUnSHCKNTcZK6ECe9EFSmigXSF2VuYBejm13wyLumN",
  "key15": "2fFLuJ8rLkMb3jfC3ih5yjV3fPTRJxNLCTogAE15GJhNXpSBgZD55miESPRd4HbUJCAzGjNG5eqPS1eTYC7ZMCSX",
  "key16": "5FjLq1GFvJtTJGSZ5UBqv9U47za9Z9guapTJuuy1JKh7m3zZNYtLnkdR19W5JEFrMtKdRf9GEZnQ63e2FkM8oNQ8",
  "key17": "5SBWZSXkUBCHb8DhPCBWaK2xhoENktuCESUfLGrtkTh8uqNnsE49nDZsq66D14kZ6ZaavHSoi9HsL1MtkHiuuCZp",
  "key18": "5UTRWHk3SbeTUxzptdPZACPQL7e1RVQxYraAeRJRGF4NA1FU3dWgGwiq8ov3tWbk5RgWuymvMytf2nVd6V4pKtcr",
  "key19": "5grmZSQZ2GUKeyVcewfWrqM5PFiA8rqatHjADfhPGwmEVfy5Jyp9AXCpYhuvqqFCVC8WyhQneSqaXJ6HWcFEKJ6s",
  "key20": "4cmsASKvmT8LtFUjDxjcHf2Y1aWxpDxTLr8Rzadx1r9TmSAnADLSU2KqRZR13PmbLvCSAkNUm8gCiZwQtuWFqcmi",
  "key21": "35JdBrKL3e9mzyHR6Qmu7o89M8JFR6cBSGjSVm8gwCrZaL6WYZjnX8eGKcqYMeSi2tGCsm5FvTRc3dbjmJg3YRrK",
  "key22": "3vausoqPvXc3RTpoj2RjC8qDLsVyrnyZLg2Gwbfrntk2QmV6ZKiazseRBKFwrJzicYPuhmRoSYThA3hDZdJbVNKE",
  "key23": "44NaUbCcqbVDrzHbqgN2gv7Eaj3WntTVqMFYhj3oUpGvSeXi62it9tuGEJkinnLZGjBwAWrk8HCVfyr1kVGBLa1V",
  "key24": "7uMf9ZUjuut1Lbmey8vTCweAngTKrHRXioScCM2urHQ5mCEPwSi44QxLsrW2BhMY6EKoTeAxK7N92aunuLk2MGh",
  "key25": "5RqvFkb6vom6eK2Qwbj77fDmNdxgPHnBovaxSJFE9oEszN8LDSp7cAX9PcQefZyDJBdZCN4VB5Te5sZ5i9e6yirT",
  "key26": "xCfuKEdL43x3djm3oAnp1GwYxCLwHN5Lo9dwX54nLLM2NHAxb2ZCVFDx2tKtSDvvKWHZXQJLAw4bRRsH7VxdDuE",
  "key27": "5KAyrFM3FGWaUNAMmmwSaXQjv9Gr6BcCmqhhXBZGvzRdTCbPGJTH9aGkfL5RzSZ7GBWYSMhNkywKL5n5diroEi97"
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
