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
    "44JrYz3GXpwBwMHnUvtnHqu2XQTsUherqqiZkdnDmcr2Ub535GmJdrBPNBe3tuFw5eLGVbV2jJfmxkYG8gRwTnkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43N5xfGv9RbZdqDP7yEktdMCqJhwmbKhpGtWDFXgxW5cc2xRmtyKikUqDJWXzgTYW9pJiYFDAjgADkV3Zq6yzPdk",
  "key1": "4Qb9zrFRmRroRUZgK14quh1r9ec31x2dcwXZAatHNrHjpn5LePg8frkYJ49cSMxesFiG2MWQGxdWz2q59cSeQYNo",
  "key2": "5moo4kF399hKBVQKd5s62dSuYGV9aQCroeq3Z4cGEMwhy9tBNUdcNyEykLJTrAx1gQ9MmGW2uy5nPmb89fxzvFB7",
  "key3": "46avx6NoZ1bCi4oRXuTuDHhZKDU7sh5EuQ24Lf2sRZn3yXmbc66VbkTwJS3UYtqxgC5u8e9ZRhTg2qQ1ee3RuRbt",
  "key4": "qxSTrMwLREAuSE6N4gBYGFShi5ci7GL7KtHbmZ3EC4zr4BYiWpnnvbEmTVWnC8Pn7s5UdCPeDYizmpTW9h2ACDe",
  "key5": "Tgb8WmM9558dWFA5HZRNhYEsoUCSRCsTmqFLmy48eSvpHxfkxdhkorJhSTio1mwudKTAQ98D9n9Ezus6KM1jgEj",
  "key6": "5rYxgZzu8MFFR8aHaTRFdAY6KQMBsPHgDq5itucukHw3HVPNGxbNqUSS2t2M6yX6V5tTpcPDfgbr91aQiBbszgop",
  "key7": "knyTZ8y9mVkKxDPVrq42PxTbzoBAPf8w6ySFxLisDk9GbELKUjr3xqm8CrmEWvygH1FJrgLd6Fpc6jeq6YhhbrE",
  "key8": "4HeZgnXa6GdKq9yCeAL4JfBB2v98ukEgvvqrioRYZwWMSJboWLUJ1C9gDB2m9m3WwX87UuJpis8sWBgEPLEGLNYa",
  "key9": "2ywBC25RuCfi3iM933qpnvmEs2QAKFrH64GHuYN34KkNhMYJizcEAUm2zrizBmJY9UzDUkP4ch84S9nCtNytVikB",
  "key10": "3tDdNuX7rJJ5dTnutd5YwQcfkZa2w25hcuaocBppm8pxVKCwLC8BioaBnii6uyKTo9BKz9SbDNxgZ95DpUsD9Jo2",
  "key11": "cSjsaTRcPKNz72JKD496MNxyoV4edo7mjyDGWNUAy7hLHGUMkzu2JGxNvZFFPnH72K4bZqoxCtF18T4dxJKaoQD",
  "key12": "5eTwGdvTUYJX2GZUBcFxSKkqhuikmTKAubUL82kNfRvZ7qqK1bne9pXqwcN9uYcw2vJedcJPUe36dJDFZ4JQuPLz",
  "key13": "53xbNEVhqAFyj7wBXuk6jzDkbNCaSVZ2RbbmSNhMtexxsKbUaT3swmGqkSaACinv3fxL4G7rPAtuEVXRiK3jqtMd",
  "key14": "4DRJzZd7GQW23dzckrnNUXDCN5G3dXDVWFfHFVNKc6NLpCYmeTfiiRYjmqZfQztKYzPyEYCGE5HqeLvAZP4ZSP6c",
  "key15": "XDvjEjQv28F6QGLtwTcF57nn7aXgzzDo1cDx2En9B1oRP3ce64k1PD85e3CzmPB53aRaWn3BdjkVbZcYSWYNPP2",
  "key16": "3z4bb5SsBA1HpuDcqTrFwFZC9pXf368exUkTVkW5ckxquE6DrvGrdGKhCkoxw4jLfajb61VVjfnVoMmaTmTSneYK",
  "key17": "5WGh91JFtDSUUpbngCR7sg9tcGT1ba3bwh4oAsmKyyib4kNCYQmUDUXUuXJspfF3fDvbvJeJQhscMPQbdhNocEqY",
  "key18": "51sPY1LUnLxJZ8UGnzNi78QNpPAL9wnrE6V6ZxU4nWGoCBJvNrq8QxuGdfqVZT1QrG2DfYRXs5DARs21FC7jhVwb",
  "key19": "2qTdLdMJ3F8Pn1hjZE4SHKeAoueNvZFusH8mGS4LrEGsvZNYvvEfnBvT1yFpHQhLcxNfmgPeM1QQrnq8VkT1MbRy",
  "key20": "4r211i7e9MX8VbkNC5kwPRdcrGnbxZrE1AcFPL5coxPDZfZh2pErrJVt1c2XQxhybCX22UC3wqBpRCtwxYeX86Zj",
  "key21": "3Ht9KLAviiAeqFTj9VbPxBaPXpQHrLVie2QqYzy3UsaEZEXKfSNDsZStQJhPVYusx8zBQ56zGBi5sFbvdpm8Fax",
  "key22": "4PYKsHuRUKEcXdPKQxVfoduyzwMEA2n8P2ThYy4yzM5Vh8Qs6cY8GT4V3oqsTZwuPFgtoWsGEVjAUSpkPDH4PUiP",
  "key23": "3d6iRmr7f7PfRXY22QxxNJhs8rDBmDdYghGSHBnu3Z1waDKffBcL2vkkRB6h6NwZ9sa1PJnbiwbQg1pMA9kj6bFq",
  "key24": "4ZXrnkhyNvf9exQANGQdY8LEVvjWhmaXTdo2JDtePPBM9Huo78UEpZRRYih7PnZ75MLcsEWym3oDGYHw57p8uVmL",
  "key25": "59iZMNFqHPY34PtG98GXw9iW7EVCbiUGmQf35HCLBxp12y3Srf2At4mdfhtZHdK1irmN4sf5RjvPXWQ9AEcVtouW",
  "key26": "5KduBEMrzQv6wMMsy8GjPn2JqhXXEKBVK6bQpDXM4EjrucbxzuNXJLApuNcYBUYCRcu4SPdNB9kGtgaia3tN9qYj",
  "key27": "aBoW91ryTyhxEnZQK7jHZiFn5oxoQ4yaicgbfeUzxgjFhSYhWjrTQUoReQiR66KPBSWTS1ZE7SHZVfydtYCa4Ar"
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
