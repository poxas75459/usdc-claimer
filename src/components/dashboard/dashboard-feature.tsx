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
    "2mN6wjoYusSqyJirptxxxPcDRpwQdfw5M26icPubHJrvhZK7tg9V1dj45y5PxBJQXnyenEmumL8tjoLQy6vHo7Sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GY9MH8fxYxAZK9WAGyxQ5n6YbNjNVVdBpADQZmwNEDB5nvwy8pSMaKViS1xD95FrVzR6QXL4o7tf4RwLvxZ48L8",
  "key1": "28H8ikfueGPC7Jhv5kW9C646d1uGpt7Kb22vENuXWdwKusmbTzV86riLg4PvZcXss47MBN67ZVsEVRFFF9D3StY5",
  "key2": "5A9WCCWfPjH3HaxMrqUJao5Z4J8sy7btfYZ7NgH2CUsXGgz85xPbihD5AdQ15QZykWYojVKcwGqFFhoj3E4kjkex",
  "key3": "5etSfrjce7jNHhQYmVcCAk2DdGhACE4ZLvUSnNXQuLhbVc95n6PfAetCFZTfGuFVRpTuC4Kz9HcUc6SRwZiyWvxu",
  "key4": "2QdqkzzH8VUpKGHRNYinu515t48U93jzAztdt23Y6Yg3XR9nmdLWhfmzLDTMm3AbfQv2QZ63hYxpx7Bq9b8V6JKy",
  "key5": "5XPMQKxwmLpMSoPhdtFeQXA48b22bFTjxsyRQJDfU9qeZTRuyuEQq8ArEnanyGeym1Efu8YnZ23W5tsLPp8YGSH3",
  "key6": "2NdEA8HNjMoYih86KWiJV6PZqa43YrixKb66qGuWySpxr8GPBc7RUpT9hGKwGNjFEB98Xx4FN9FVUao4Hk35KJ9r",
  "key7": "fAb9ZJyWRfcYcvXxZN3BchGFCwZnDoQYwiEjrfmQp9aZbD8ZyvErEKsM9j7GpFs1sMNvDtTdHpNZAnXsNwJRLFL",
  "key8": "4opuFEjQcJYLkQ47j4MteMyj5qCoY6aWi6UZemtPPNgJHMtZH6WYvkPV3Uy1MYmP91vdSgo5cjpJNiTkunXvfvaP",
  "key9": "5X1HcCun1dsFNgc5Fofv3tBoFJDz8ZSUBnnRCUkx8Nkg22ofvTrPNqYAktHKhjwKsrGv52XLTJhrEdT9b5nmaFFk",
  "key10": "4uLoFLUvbjbdcd3LAhwHwRVwyUW4MrxKR5hA6azPcbandVqShSRgAT6Kr3hMPeV523MtX7GrfMhYaPnbvQkEPmnQ",
  "key11": "3rakcEyTjdEBqHhHK2pJD96nntzcCiDNHKzEPDvqVj1v5UtbgmMTzgZzSgiry9BRPVCWhtC6pqnT8qFahzDoGh1B",
  "key12": "64yYVGXqL6i5W3r2BP4PjcCMa5duzPDdMsmxauxL5DdxRe5ypsDCJsN2nLvkCkqRZZFpge1hdV6vdg19MeVwBmtq",
  "key13": "3H9DdvVbXHNmiSFDaT4FTEreBRbsEdZPHtC1i7qVFDcWaniFwd3FYtgAUGJZ2K7Qxe7jWq8QSfeJXFR7vENx1cFz",
  "key14": "4jQdpB59aaSFwpQqsCU8wuX1ZwfU5WqdsgZdkzsKhbJN4uFV3bWxDjekfQv2kaSSsvD3pVYqiQfDWTvXxTjYWm4w",
  "key15": "oXJyygVgw9NQy9kod5w8eVjbch4KzBovYz4hW5JUXqqdCd1cvj2BjjspdfA76LofvQC58zeaMEtHQYSh1aTFogt",
  "key16": "5raXyoiUCmd5hBPLpBDw21FDjUbqKXu8R1UdwMfhkX5AMqsEwEpzsHApY78S2RaucmHoZ4awsDPyjaLfHXEnpDTE",
  "key17": "3ew8iiAeLihnFZycC8QKrq7i8BAsE9178uviNJ2X3cT4jgtFRsKNJg69XNdeh4xs3BpjKWPceUKi4ThqGkLK7aaN",
  "key18": "3vRewooZwREiLsK4yYLS7cJow8waZipL5xC8P8vAPTpt333mtqMn7DAB3ZrDg4ZvKz4syDsJHWJfZ7EkSt3TyWyD",
  "key19": "hYSta5AiKXJKKEatamXEG4zV2mPFhrbNLyhZhgrPa3nkUGGRfeSVmq4mcnMGMGkJj5pRTdeidsbrNJ4jnL1CowV",
  "key20": "2Fi2uJMh6o44AY46RYsJnKSZz6xF25xXywmQmGQWNmYEzAizz2eZUkRPtP2LnqqqHRy37qzM1QAcjR7H9eGXoGR5",
  "key21": "3vgXmnFVz3YJyYckjCeikCxmhwcFy4ZpS3cgnDAWtdpXScGnvytivq5t2q15FTe7ESrVrKX5D2eEYgUQi5ACKgoo",
  "key22": "2SRuVdJ1cKNjg64GtTQPVVqLKZpYSs4VsVdkYykpUXrZEoeHQuyrL9oj9M1zCZTCbUPXzVmGMLYmKqJXZEPKT5HR",
  "key23": "2sGx1K4QZ6pyYdobeaGAJKUcCYZEigVDqpQxP63G6BkJaMuGkbx1yU5GDk8QoDYxzZcWYuu5aF99QcozRUnS2deG",
  "key24": "4hpzQzP2tKBX965DCvoeSSpR7PsXkXrqypmocYpX82Qe1K4BMZ9T9us4VpRxYfwsXvwLrdo32aQXg1AsQfCkYJuN",
  "key25": "2yFDLsuWuA4oy6hQH923yg6yHH1fHSXXHhQRBiY4AbPun2NF6DW7E6CLC7e6z9RwRn1xKNmdchWS1rthjy84WXHM",
  "key26": "hjnvc2e3ca6TVkw5SG5C6G4j3MjRX85ZAGmdP49cwLkNDgSZrX3ubhsq9B3iBFjEy24Zk7F23aSvEJ7pCrbwiRc",
  "key27": "3XP5qYJn9tXyN1hxod3RWN9eCCrdvNQiX8BwREAXbmdsEnxMeScZQq9zwTMmXGRGozdU5CEtrA28XvMGPb81wo16",
  "key28": "33tfvNXTVFW3neKkMNq9G5shjYaY9pKFwUjeuYuoHCadjCRHyW8nnTbb5TVt4Xj9WTk1gGuP1sW6xYWLiThSUMsC",
  "key29": "5q48ZJEJkxWZkr3mC8H4yc5e4DETWW7QpUyHaTWac7BcxTPMYgkYFYoDafxVuDbukBwqSk24UN4ZpsFmWwXavFpd",
  "key30": "2e3YcU4SHaBZGwrYfVd26rgZuHx7SaYDhzgwBsbhopkNEPzfsLCiMprVTr8ntaVFkkB3wmM8GuHjspUJxRvpgYsf",
  "key31": "3t16eLi8LuVQsvXhxLwh6S6CUfHkRmYnri9MbWcHWcfkXBLQtYauY3hnabJKt6PEwRhPBTYYtBWUiB2bZWAmDDYm",
  "key32": "67WeVGo6CTUweGTQKxsMF8R61PZGNP5MTYRnYX8G62WCCG1EtRNE4tPPVR4ZZ1PGdNRtaUFPeq1eUAQtegHnhXKT",
  "key33": "2HjGUWUbLRRznxv7ZyiEeh4V9RNQvLgwKQrzrrEVbV6kdTdTdSjRszgU2pDTZ3tfY4s5oVyfSjS4mTzV2fzRBxvb",
  "key34": "65ca1YruQ9zK6dC3yrcrHgxnV51FvpFvkcX8ffoYm3Xrvb3vVSx9yVGwy2vgpfBa3BekqhsTECptPX5vzHXyyfVD",
  "key35": "5aQzd3U5dA5D1cz7GRLh7HvrkvYVEKNoXjtpEPRgcqtYqVMR6wuGtnWxVpNo4Qfv5b5pqZVwjgZv1zTE2wdCZjfK",
  "key36": "4YpAyj6K7vKnqTqYDWKPcjicPiLZkFp1rN7ZeqAvtR2CfgbotHG7od7CrbiC6PCT63DCMHqWzMaHR7FWPaj8QF4x",
  "key37": "4ZWtTPbtvew65jpXnABBmrFpHWZJEP7eStmt9zbdBn5fYArCCdkJ4apCdpeHL8JwnRfSjBRAofbg9hTVsF1A4HfY",
  "key38": "3qiFGHiY29zube5fJ2uBxLnZTH6y3R59q6PbEigZ6ScECUMRB8fTwK2EzaDyT5cnjgDnGsEcFPkJxM4DFsKYPGSg",
  "key39": "3D8QABEXpU7UBp7Q14EwcZEtc8WWXjALcHk9QnAPA7JpnTtRQgXPshYTpDVS8uStEsZFQYxJMtkdWUFNtiMgyani",
  "key40": "5zYksCLwKtqPG2VAi8FgWt9TK1egxKyawPVYqfM4wDmLmrDWRSn1sL56wgdjNPajmqzqMELcVeCDMT9Q4tPLexqp",
  "key41": "3CrzBEEutf599NBUHE4LhL2BZzGzY91c82yXSZ5z4aLURADqg6X72g5Yaqe17TkJvuKZnDhR6JQPAkcZeWVTMqnW",
  "key42": "5cpgMFbnLKk7oMsyfJgpC85FYT3tPsiPKopzHjqGeWrMKz8msd2py1nx6j5j2QDZhYdZ8tx7yDZiDbRNZvSTVu5Y",
  "key43": "5pz3GewRJitkTGvNC1AHhN63Bk6XA8haeXq4pb8ahz9sLPrMNze6A2Yvat8Lx4B2zkqwL2tNjwHpPT1rcrC46XRm",
  "key44": "yXrd5Rk3JLoCNrohjyzhMYvkKzruNcoh7Afif8DttKmtmaz9iRkB5aXU196A2QeBWSbYVzkJKBYM7RqG74AxJLm",
  "key45": "4tBKceM7M4keRpKyKcpMbVNMinR5Tg4R4d9qAuw1fDihx8AjZGubzriZu2qVKhEcaspxt2HtEMbATs3FAL6qt9Ki",
  "key46": "2LArKwiFvNaFfJ4vxEXTZGpkEoXGCdMMxQ8RVQmdkNXJ6uXzQwAByn4QiAtMqvnTzB7FaoUD4LCNvg7sTjmZpes1",
  "key47": "26Du9neb91rX8UW7dDLxx3LcP2PmexyDHExiBKD1g8wZAbS5asfbjKxrFKEYCy2afurndDmnEAnAJvPLzqYEcWVu"
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
