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
    "5n2XGbQKz41kybReB51SixKea3DrVWZHiL5cuK3csyFQ199nUXApxVrep146v7acZhw1VJPBS6bmmxvLJYKkLgdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eELeCqmabgmaksmwSBPJY2NWQzRUbr1MmHt7oBhEWoMvuTWy9Nbvh6aziGjWGJ6UiNPdGDw3s6JJ9m6UEAsLsu4",
  "key1": "4BXGMirdWMyS7Y1o5rdzMuttziD7UKbx6cp8AoEpfvTndKXpMjQ2pgXJPgtAtxxvRNP2gjaYTCe9VUsP97cqn9sn",
  "key2": "pgwfTZDG4dJzqyMvXF5Y4yFvupvp8GU1c7yBpFhxjCwQPQutFP5wzkA9VU4kKA6k2wx4oTv5cVBe9CqWXgKWoWH",
  "key3": "4H8e2SGH8ubQfiyEm4xznoXEtfKT9qJ4SKiarWjoFuGbj5ybwkB9dsrtzq8Kmyzt1GssbMn12SkPHkAsxL3FAiaw",
  "key4": "3pNA6yZ2NXoMmwJutGaJQqAKguXE5bqXpFDzAV4BCUXjb2vmcjXidVJfrBrfRJNH2VQgBfZWBJxE9K7qLuXE9qJ4",
  "key5": "4FEikEbdhxLN4kcqxDGvCNXdptWFPb7UqzUDhhEcbNSbhDot89HXsiTDGGHRkp1kwAXxiW1hnNTPdAf6JNF5YMon",
  "key6": "cq8ub9fBuSecHaUMJ4iDt8rTLnGCTX7f6Jr9mt2JRT57xr8QN8FS9bgVjaSKTAXY3WK2bG8eUc46E3AXi8ranxU",
  "key7": "4Q8qFty4nr6bqgPAT95gAncFtiJcQhHRjQr4hSLyDnDDkKXnrZAyRxeB1VdnpZdxvv2p66JTWnpxfLgw34fjeYdx",
  "key8": "BJ1Up9ExMhbrCMVK5oTWdoYJVU6ouxSoBU9RevWr75oVeR8CRDR3MvsGj1y512jemaDEZ5fCxqiQ465BauYT2Vh",
  "key9": "5W6KWjTWkLkzy8FNUqFxUQUNVzQPCU27F6j62wD7da4KiFpdkvWf5fh4ctpuhzdKs1nShmFRB7yzimjCahxuvkhT",
  "key10": "5cadxuQqgxwdzccT1cBBNZpS1DswQc1TwHopyvs6Bxc9k3CJNwbiRrjhVQxgMzwvRB2T1ChDYqzyb4nHnKM6SrNt",
  "key11": "4xwHrcVUNigssUXt74mLiWPJ8HEGRf6UcirS85iGroj1LXnwmVTZD8aCKenrj1isp5YLgTnD1wvCQFdty4VfdeE3",
  "key12": "22oWkciMNtYmfN1NWYJEh9ZYKdKAX8DWKJh5Hd22hX7PKX18bm4C7JsZTUvp6vffNkS1LETQQWywG8yhXcvEEBn6",
  "key13": "3JCvCyb9cAzkxfxqLND3v51iDLny6rzuww8hhF9DGPJwkJ8ih4gRiAdTWLL1tir58Nqnb5ysgaYp7dG6d8Y3pzrd",
  "key14": "3JT39BmYemuowGmUgceWGHCf3ytwipLqTkyz2E448oAampYFoedvQVnL85reDsQtJwhCenUrS91VyY8AW6Sx7XTy",
  "key15": "42gGPkvW6tgVE7QMVKEV92EjSHciMyRAJvGWUa9NxHhCkf3vf3E8Zhi6KG9hWbyy9FqiPnTDTCrmpypnz54niL1d",
  "key16": "4mgkstCGmCsNzNNttw6EWriY5WqcRR5UxSvJq1RuELx5diixkNbPzjfesVi2wZq33QLhGV2t38EqGAuhNgVUespy",
  "key17": "4tmYSJDUEiLA6Ps6tAi3uLACpmxrF7PsLpTBjiDGjH17hpYgPGyr58NzeSSg9ENKG4ueaLGmAVUKjwPZoEuTq5CF",
  "key18": "42WbvSg8kVUZ37uT4kbNzEH1hGJ4KsckCGWTnvmxrdKLAeSmVMwrhemanTrAtwRLP8uwe6e8p56LnUye3FKao4qb",
  "key19": "3HxvE59SGysCtfp6rcdqLnMTaBU7yNyXhW1CVeobvB4Rattn12gZpy5JuefYYPtNQ2sVvyTYhNo8vRDW1PLVS1qJ",
  "key20": "nQDSMtnAJFAG67QGnM51uUwpDtBJqrtFGPGYyfrzkbgk3nGfp9pEmThRhgCT2R9MWEEGoNxWqFkcv4v3e7AHHjn",
  "key21": "VrVsbNwJWcsAawKycrnmLk6BN9YHoWMGgXJK2Jf7yB61C4gGgP9AXpSJpMDAd1NGWkKQeVPGDhUiWiiuuPX3tHM",
  "key22": "5hgve9JBCewabBfyYzcssGsWjaH7938drwQudGQNUxiU4SBkDJ5j1cJtAZ7xo9R5cZFK4hUiSzGcZXro7JYhoAjf",
  "key23": "4Mu28fJAnxU5cGWsZ14NLY8ex7uDAbmyESQ7b9ckF9hJRQV2Zyvhcws8ygayHVLY8SbFnrjM9maMGEthNF9z2S7u",
  "key24": "3a5XGmbJqtTTXsf6BCwyfCfXraTASAFQ3PmXqBH1Di8yB3NeCd2QYSJstqRSSgZVNj9toV2RHhPMDWgqQghizHkw"
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
