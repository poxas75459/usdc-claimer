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
    "365t1xfCsicoEY3j4jiZM5zSPHQoUByo9Db9MeyCEL56JArJXRt92rQVch8qLgr56SuWYDxfvVZqFm8AW8jFkFhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iRJyZPuDmgg7fjEPD69ZMBAwB3zeVTxWPz5LpqzwA96DpNu446q1fnNHxapq5qzLZiLo89HH9gTj7YUesixv9fD",
  "key1": "2jZwJgAzZFd8LXeyHtJe2PfvjzwYd29au2isCP5MV7PjGLvuTqscYJxBnqJ5pqEqfbyxobEv1jS76AVR9CMTmxfJ",
  "key2": "ZhuTgf4T4MFF4QuZE5amm9shJ7CF6QQ4LhTFUyyVaCU2eyhbJKqtYsy398BethP5Z9kFFbmFwz8EZ53bDDk3Dze",
  "key3": "2MDxCwfsmxHWqVzwoV4Ce6X37iKUuJpcsvzuQsE4CfAdKmc1Unj2KPHi5mMUXvxNabDqF2CY7MUpWtAmwRxFskhW",
  "key4": "2uot8PJCKNKJpF93kj6Lgn7NEZD3JVojjqfippd6iRigey2BRYZ88DxaQoPBTHRKupW4ELfkjWke6XnUHY4u63jX",
  "key5": "4qaBt4jbSxWCG7XNdX9tchUb3d4ui4YFCkG4yspwiusPB4KbrhdMZLi73nvV3QRVsNZLNgAeUfhkJxTZfLYZG6Bt",
  "key6": "5BtG9a3VTyFSKbDJugArCu4cHrTyLQ8qC63wEVDPTdbewMXXeoUuLajkN38XHcnPBJbWzdLqVRY4NrQkQSkTpzPW",
  "key7": "4E24mHJqYuvjSuYVwr5fkFVEPeaCk3GCgC7YgXfii7FrJgtLw8W3cZfpo3F1MML8VTUipgvPg6YSSdMWYnu8nRZM",
  "key8": "44G2g4pAmssKS2y6TcAGveoX5LEkDQMB3t8Dpqiuad6PwLuggkAZmGEgvAcsMp5YhRy4B5SBRTVdUKNqELWdsNxk",
  "key9": "2vgaJBqoXJLArr7pUC4PAa5T5ajQTnwF654t516Sp41YQWfUtT73FhuPDn98qu6hL4WzdsZJKWdAFaxhbWVi86xz",
  "key10": "3rUp8nw3Y5oT5iWQThWJoPDRxmGNLvzEZRb5iUUpqSDkeAMhFbwSpP68K94DJuHe5Z1t2T4yvDbzkhdsauWPWQ29",
  "key11": "ErrhqXuNGgQd2UwfhbMJmg9XcBKMRvy5qfKrVUhJiWNseGhXbGKoeqJpR1TKK4bznALho95SShn3FAu4K63ih43",
  "key12": "4QWwDyQiKrCTZSEZMcJS5GfWYHTjEdLJt2iRpGAMrpt5q6TqPDLMDBgNV1XfpHVbCnjY5NbcZook3BurNF8bXwhc",
  "key13": "2KQ1Q1QEJuTzcJwL6UaxRZC6Qri2AuchvnTfJxBoRFs7jS2orWjyq6hMdqri65YAyR9aRwdp4tzptfEGRdB5efW3",
  "key14": "PUm6ZcvhutmZQdTPZSGtrn5mzdkTGuQ9SKCnausH7hXoXZxxvZnXX6AUmxArkpHAdT1k4GGQ424LV97oL8LBuS2",
  "key15": "ChZQvzYDLBJrEzSgbTXCynfBV7HsfjZHPTgPaUp1SK6NQ28ycGCx5WFPFMUm843JNsGhPCFNNuib3k9dkwyFx5d",
  "key16": "d9VP1mh6HsMauNjAtwbXmBk6p83EPevUSf47eqSpVm6aHfEeAz1cfhyPUWsvFLZUsbPhrqZsV5vYEGtJcRQVPrS",
  "key17": "5EyX43bYjw8yHsdSefFCczSBEbse4gEuECN3xEqxqLM3QNzBJ99CmoJhE6HWaHJWgAU4N6myWAU1kYGyaWB75qwc",
  "key18": "2dYswhUbypiDu14mxUtHM8tCodQDGLfZks3dodjnT9xnyJyf8FirMqJ3ARELKCi1w7vbNNQ4mXCZfdYrAv5d5dbM",
  "key19": "2zQjMWKm53WWEvwZmMFoRXtmdrZVHA4c62Dn6PXzfpqxZPoq5X5XXa2eDd6CGaHTvXedfJNM1LB4Gfh2pU1Rdw4p",
  "key20": "2Dk3i1H9xCSqFKRKyhDipkJNadzj48QggAPjfVHP4h2JC6U1BfeW75ME8f9yDu5noFFpE9R4Zaa7KcWTaknKzC3N",
  "key21": "2t3TcfvsrrvbFkZPS8Rca3CatDenmn365tjyCMXYrNwcRPxu2SBtAoLuAgk64XrEniSFqxW1ec2krqHeV5fLGY3A",
  "key22": "5PuuF3KvYNNGPs6JCdn3C8YBajxvk91A5BEisDThASG6K2VTMDFDZ6yC7SRQ2WGU3z4AmKAjmDxa9ShqpCbTYP4r",
  "key23": "5DmPKWgt8b5r7XsJz9uHNxuf1kNZzwth5VErn1LB8b9xUvQzhQP6dt6w3UR3y2uTbEFPEnWVdrcG8VygS2zQng14",
  "key24": "2jav77zE7tLyDUt9k95yFfjKxEfVDSZnRC2oDHMhaF8DCLgGTFJK8x1d2xXLU11waCTrKMU8kVBp6hPu6ahSfqwM",
  "key25": "23Yhm8h1nmExfTHdiMm2tniHrwWhwBmqgMjzYMkbQZvDz36asPPs96rk1gBXpCmv1hpC64ZpoS25WSXsdsAv3RhG",
  "key26": "4ewiZ5sAqoVRHAb9dHV82CpdNpe2udWZhoNLzgE4LHZxwoXsAVyHsr2S7KywW89zL6CAw1wPdZzC7xtkeK9sKEKw",
  "key27": "2LnSW5k6hZKMUkBcFxpScEe72KCvTQU5TyvddxCwTdomUbTFisQvHVPA7jvAox7zu4VSJgQ9qX3sYF1dYf6sEakv",
  "key28": "3Xgfi3xuh4fycaqsdE4nYmt2EXToefKnzV6hUmkjKuiQm4Z5E8LACoxtQZTY2q7Tu39q199VnTehUb1TdbNBqMKc",
  "key29": "2LhLt9v3v5kCYam8iGh9QJoSWLySxhWFH2kFJQ2Wx9fiFyq8h4pf4iFHjMd3t9kvqD4tY5sFw1D1VwEuQLgnFEhy",
  "key30": "5VeJMRH9VxpvCNTdD4Cb5XTnkw2Ru5Xs7R8rKkrLVfZ3iNENeSpxoMT2EQF1fHWHSRNMGj6sx9kzpxU5GKvQ3V3g",
  "key31": "359ueqHvrS7sN5oztJuk1LrE5DnsDqGGSEPFxochzmf3WF3FWZujEaPW59hNrPCSMX4DPgAE9hQGopwEGHLSipff",
  "key32": "4aKpaTTHfuhVmsS6mMpBX8e7UpkHsuTVvq5Chx9i7KjpizhZLTPty5MYhGdM6wi6HPJ6F6NFt43rkYK6jQyx9S4c",
  "key33": "64aUhutTmvSGrz7ay9ApZWofrUUHdMFCP75V5v3xP4qWA5poVptjBNVHKbja4ftKJxDZ1iaaHSw6G97mEKoTaUhj",
  "key34": "km9zokz646x3F62LsHZnRveVwwmxwXdceJjLMuo12WAwgW6juEunfP9SuKgkKeoZYiTfaYMi7CEALowqGQK3Swm"
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
