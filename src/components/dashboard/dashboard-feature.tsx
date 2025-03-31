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
    "vKRYL5xNDWZw61BsjxG2f3gXXkGBt3XYsyWvdq8fuDi9zmwKW5YHi5zRXw1m2wMm94Xjy1yqU9TrG17NUhqHdCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HR37rsTkpaikJtThpF9yV8sBmonTwCDApT3mNxSvBnKFqg1L4kHghiFgrk6ixWWU4bqgXfz5gtu91dmPGunE6PQ",
  "key1": "2TTXpmCfnAy3fzNjM3vnMCkFgyNsD2FC8koaX9wEQ3NPhnvtLRV8rjwRsXHH2MXP7qzts2dsLqkRqMbcnB9dEj7k",
  "key2": "3ochEQovVdAcVVRVtr4gArBzG2rttjggZAtjePbJiwtMySLWaT7Yb5g5goyEqnArbepXbK1cJBaw8D7Vk3qRiLfN",
  "key3": "4m93tH6bu9fLvMygbRpAnGSs4rUroQKCtqFGJnNhZQRuUdpoT7bkYbWFpsoNHSazu5YsNvqroutN3BGSiRk13REz",
  "key4": "3nXcLKLGmj8AL77tQ6tPhgoETD724g6hTU6HCcwZXHHTCm1PaCNgTMKdV8ZwhHCSLruYiyTwPP8Vc7af2PS4FHa7",
  "key5": "4adhaG1xShrtTgK7iyd3gW71EDgtVRstToeaKfyKZGQ5eHmXGF1d4GpMkZPSAZ4sFZEWHyWCF5X93FkwjGCV6d1r",
  "key6": "4vzLRPyF8G33MjuumYVivKRP4aynn6DuDEK75WUhs1uDz8sU7e5y45azKykMWyMqaSNci5pfdAXGfSYd5SHfwtVU",
  "key7": "3yT9bMdBSNHf1TVnpe1TVjVfqY8656BzwSRo7PiGdU1H4aTQMuS6mdTHfdCEa2eGEH3vkd7ZqMJf74mQ8swnvKBy",
  "key8": "2TjpF4gbYCnCTDX2VSA7jNnsCN44KjXYkJKFvhrhMN4DvUT3WjTFW14WCuLRNZsPuMoeArjEeqwz78zX9ZPfgzzm",
  "key9": "5RASdTk2E8XwTrfDTGb6BYr4AJin5Uz1PKoDAD1mGGA74xfHMboZwAS8YEqU5CfEDHuiAcHDoRGDweJSCeUC1Qhj",
  "key10": "JvbRyAWwQ9gAU32eDGTiYZfC6h1PQ8mjmnWveDRTUxhMincydqzcEJXr8utbDHXpQtB4gwPF4rLRAxy4tbyyv7X",
  "key11": "29uTMipQFnjDyA79NzbhpfodWaFpPqkW7JTL9GBD4f3S4Dr9aaGKYLq6jeXrs6XvJkUoZ1w3ujqtoKMnrXE2rJFm",
  "key12": "3Ub3Qi2DNPXzRk1bAnk73WW6o6wscuccdv1cq2cATtZTab7biUqW1kcyVbn9vdLQTupQUtCUKr5Uy3RMCjjbEbiH",
  "key13": "cwhL6iCiUzj3pvgESYfwcXCYZY1eUnE4Cbg8vaLa7HjyHTDgWbWdJ2qei5cchPz3CFEcVP9A2nYR66tqBZr7ymm",
  "key14": "2gw6RQxT1ip6UdP748dwaJXALgXgKzfevWUQ79FokhLMfhS2GVoeVtt7VhAhiMfrbHmx21uuJe7sTeZyk639TRRK",
  "key15": "5sstCi8QvdDQQdScj1kgg9m7U9wRUZkfi4UcnS1SofeZKFTY99j2Fo9GP8qamiWb4w4ay6uSgrNvvX3K1KMMYm5m",
  "key16": "5JpcaLFvwgi4MXDSv6WtXGqsbjcBd6ZXi3RQnJnvX6NfuhNX76T5NoamDfPyyofiXuaqji3WgQ3SkRTtH3d9VA84",
  "key17": "4bN3QzvfR9fbaGqLVEzLJQ5yC7hsh9R2yruHBD84CWK9GKaQgcawsm6HtHyzfH3BubXB1KJrZTLBBw3vP9MscdAG",
  "key18": "3C2NVqHBex7Adr9cFQo2pAdENtBsAwW1V813FsYHMp2BxiEbytMfRijG6NkaitTH8Ug4Xp1RTPuHP6oc9tdbMJDp",
  "key19": "5XbVbPR7yMmATm9F9DYwBxP2mA7Vhj7uQcsu4DURnqsWJLYUP444QkKVxrKwWeaL8cEVBxEc66aBvnkDqS6QpkWd",
  "key20": "3L6XhDh7Cpc8eztjPHWCXdxWg9uYWtVVgKTJvJD3xnbERWMNiq4v4ZHSbhx7QFYjML4nMiewBPASd5SMm1Bm5Sbs",
  "key21": "KKxoDf64SRDvj2x4yFDXQneSxvdVBrf9TgptsFNdYSwUUBHzqv3ERmZFER77rYfs7jSFJVUxrkVdDVY6aMJKdKd",
  "key22": "7fVM2VXxTA9hw5c2KPtZH2Fokw2TxxpEtqHW3DStBPDWJMn2Nhxx25hQwEeGzB1cWRfYcCrXmrEePPi4L4Mf1Hn",
  "key23": "22i6KDR4eXTnmst7gjHWyrxXGahFYjDNP5oN2jEKKkazAVkTama2pN6KEEEZpDxoxf6cmKwU3JVcEAjEHeB62UAz",
  "key24": "2HMargmY5wbMVw8MxZW1qsp3rjx83WryGiG5t1A5iF14YrhrY1XqzttWbwCyjHykgWsAHsyVYEqXNCVjBNpMjpjR"
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
