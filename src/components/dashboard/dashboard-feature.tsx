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
    "2WQhCqP5D6eaSg8ozx8yVGiDxr4UcRDyNAg3iYpZbQE3TZ57TUMokWnfg68RtUNzyoZkuppnCd1whKikoHV9BFGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T4Br4vYqvLcMKq92vLRJ4pq3myPBjRad3ni5akSPWHeg3TtwpSFFJWrkYfSDT4LdxsCWRHQBqzti2g1RAYB14PG",
  "key1": "41z9TM99bVQ1UzXAqniXyFe8ttmkDJACq29CCjMtDovGk8Lf72ho6aPx11fJWovNTNMXSYMWQyLqgjLPNce7waeV",
  "key2": "xLwiM3i5eyT6fSUZQqwpQZKx7apovw1PmW17dwtrq6aGE1b7bEHHaN7bwWUahQqchk7DQ8Wn1bDF9xcG8L6jktU",
  "key3": "UvRzjhpFuMpvfNWPhqEJDv5H85g2DWQVko4P52PiUKhwitektCrmWw9rk4qEKENM3zTyXBHd4fZKiciHk4FHXxW",
  "key4": "2WsKpZMjZjtRCUy7H6yv353gDBsbyofNcFi9FCmwShstBnRkbZCsutP5M8N7HF5CZwyMMuwimYaq39gbDGoiLR15",
  "key5": "wkzF3KDumSwFc9zfZv7w9jKEGDrRGEWyUqmTqic4AM7ihjarLZk6mE4856DTa3tKBKyQjEhrLSKnN4MhPL39CAV",
  "key6": "61ENPJ6Hamtjo74pjU36YsKVsncZdHrEEVk62QimX3fwgqbwhcZXpf5XJM8k5v9rSsY9u6bkFQnYr688TsUSHhp8",
  "key7": "58bQyNKkePrQqrPATyAey1PbTkd39wCfjdR4ENY8tkyYsYsonTSq7iiD2LxAHSqUtYmZSDEEkSZ9brBFLFqFqaqm",
  "key8": "5tixdJJWm955EdkpBwZMRtvABn1KXSb6sAnpyZbKsEAuGZMHARZbshosnCARQTpM5ETBTmpojtVrc7T8EwZB1YDr",
  "key9": "3PaqDfwPKE6NGJCKfgWgxqzd6QpznZ8CBScfyyg52aud73gR8XqaAWAE7hTFpUzLawDdhNKoMHqSXqKbTFox88wF",
  "key10": "McZ1Hs4Af9TSwfz6XxTznA1ZHT9LoyGLaGVbBcDWGRVQSi8d6YJTTdXU1d68YLtnVnxNSJbhsmpRqAkYkcuWuSe",
  "key11": "3LvpPVCwQ8CWvyCUr233Nfrnyra8NGgvqMov1BbFKjLr3uCUua1YQ9kXd5kKhxe5D4BEYbGEePW9AEZWh6BDthTd",
  "key12": "ccjDVpeH62Zz5gvpkXq6cYvTstXs9W1zmLBKiF28jn27aqVPfWG7nBL4gWFJkTZ2LfrLFFY7PDA2bSkuMPzp8Xg",
  "key13": "4epLRi2ZT6zp25yrGA3HjQKqrwcMibJAFZAMLBS4dmGodDXoiMdU9werQE69HCugdLTyyRRxZrDmQTQ1iyF5EXya",
  "key14": "23RE2KdGUZEbWX53GEu2X28EJj6Ko7spjhg9KFLHTViZbKiGS5DrbRDxosqiJiNKRK4HsjCyU7MyQq4hUGVQ8VcE",
  "key15": "23GgJV9FsrahwHjZ3urMez4VcBAVpk6Uk8fHiVXdK2ACbtDNyyUotPxLhrn5nXEFmHn9TJzJGBR4KrKfykxaGSHS",
  "key16": "27zrncWgyFiMuM1RzuPivuP2snTJU28j6UJAGMXbq8TZLPyGXoXnuGv1G5KA7cw5YJuXNHsYTyECwsr4DsQVqgnM",
  "key17": "3mmQowgxYhvpr3gkZeSZiWycgehHnGWNWi2cakPjDrmeLP5KpEHbLNmXLxM9FMXSvaSeTbVrsct7wvq4MqqUHbzU",
  "key18": "4afQ4CLNrpN5jCNGA7qLK9hKctzMCpBay6WNKQyozH5iL3kQNDvu321Kft7KR8XQLwH2pX2bv1VhWWnzPbrnbTZF",
  "key19": "77JZXdHVjbU5j65gguG4JPDr2HKNrv7pFTUi4RzLkviYVkfwD3SRvecBT3DEAH32Rhj6okLB438wZb7t4EcoXbj",
  "key20": "aMCwgiUXQ3x6ZWRj7VYvMPFcp3uVkmZRcHfq2YYaSm1GG3bANB9q7dpbnoDyQMyoXBhNGQhj2L5tChjwHDyPcqc",
  "key21": "3kJou8kzYRXEZQiG2j8JrDCGrozmu3LWsy5USaeUEvnuNKuUi4GV2Zr1MWEp8RpbTjfmhAyhidA1QnL6W97K4VdQ",
  "key22": "5RcuGDCggcAYG8HELtJYNjMTGhJLXjJXztZxkj8i6pLhMe2w8x5u1WudaJabAd4vExGQV85fKd9MR8vepcBgYyCV",
  "key23": "xPqeBSDYM2RGCbxeBfMVvAUufm71pW43H6gGNYPKaqT8camdGwZg9QJmuFsQ5HCqKc8r4gh9ux78bfFoYsCZ6G7",
  "key24": "3BxN5YRcJZUBfjysy5PGfafSVe3hHbRwVpi1dBJULiWQMmUupFBK4DvMvkmhpNXMYWvEToKnCxRZVZNq8iMaiKLB",
  "key25": "3FtT35QJaXoVNk2EXkGbFRoQz7Qvqk2AdmBeuMC84wKLJnhBgpe6dZASWDMLNavBWkvPyRtFUjYrkKmbatVK1jXX"
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
