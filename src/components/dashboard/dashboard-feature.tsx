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
    "2MqxG7Hs4UJi4Tqm8uxj8cLdK8xe5EapLwFNpLzLdan4nn5Wd4BoMFzopFCBmsPNABrTYgu2TqqQ5gURVHo8Uecw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Em5yjXZ3Av21d4WG84ATePHY251vXxc2FK6g3woveXsEiMJCXFZbMzK2mGnQrXkVweevziJt1SceSrWnjr63kxR",
  "key1": "2wvTkWWLnBqAcidZ6YPkXFFLxjzmDKUHr65Skum7DWATwdMc5UbPDpPGDucuR8gJwVMs4DWSx1n6uRrbzNd2gfK4",
  "key2": "363BqjNm7pQEkMrKWp9CJBzx3UXAKsJDTey9oUuJ4eR8sdm7gj6uvctyXPkiXF2mPqcwUVY9yHFcDxfwePti1i9Z",
  "key3": "5E7g66mzS8S8bxPKD4VHr8RtesLBLn9MgqYvabfL1y8C3U1EK93dPXMrpdoQtwoFEq5akMSoFzNKRHc2LPMpbqva",
  "key4": "3M3kZkfMa52zx89vw2qwSfcP1HE5pKRotUydEisazUK8g5TaqnBoffgfDFyktr67f21eTw4EykQdYsjAofntn4Lt",
  "key5": "3QNHTMMnG26DRFQrj88Wxm94k6UGFzFvKXSSAjHhHKCrZsXFufXkqGck2Jdgeuj2wwuyHrURErwBnXpTMRaeW8e4",
  "key6": "5kSjGcDmPiMLvwhqVpai3Y81DDXm9izn8RghGFgwWfenTfoEm7UxVuNewp3ZYvAeiEPFAmaMXPRy9UY3AR9FeGuf",
  "key7": "aQ7jbYn242rraW73AgjTy5R42z5dRpRorcc9eSyzq9bULjMCbx9jC2cGYxRTGpgYMP9CLRUvo8KLg9ckAzXHBF1",
  "key8": "57LbAAZ1NpRUBhcmFHkrFsaQQhbxuRXf59wDDHaoVXpNNhgWi2ogwi2Xn4sHt98hFWVpBPZGA6TUBzGxqiM9Wrw4",
  "key9": "3NkLvw8T46vW37B4HV3fzM7yzMAhoitPa8EPeNENmt5RQdTxyTfsqWHK8B5hYPk5svLNWtw2WSVJJphYTadxvT4M",
  "key10": "LuUojcfoDay7wotjqrp1RyKxt2ADri3Js995HNHi9S7YkvbgFoDffq3pcDzvKLorrqwXB5WghcHdFegBWdSA24t",
  "key11": "63XCfGw54zVKRnHM1fzJDu4uohUDJepopZpoVNWGDksFzsFHjABZsgPCHgfqhgCmtJ4v9cWzXfyJW76byB7WQr3y",
  "key12": "5BfX9BmSQU5GQKNbLGSiXw4x25CwU9Z5hpEhTuGPcHaSCvN4irubDd8wDYn2wMzTZVyThDz6XHaG6b3gcdJSGQBq",
  "key13": "4J1Es64iRoui72uzcWWKqKLjmXFJ2i85nZ7JCdLbEQ31pwdd64Mvnt7oZryyVEVtPfXBwBZAZUqVFHspzjL5wKsu",
  "key14": "4NeXQtQGRJ6pmN2igGMLDijLFvX7YAzChmLi2ZZqCCyVSQtB7R38LgfM3DvULAzTzqmvCfpiR6FCh1BsQb5erkNA",
  "key15": "3EPN1FoVTUrcs9EYgqv4Q5p4bjaPU6Hnv3P9hoXeQpPGHxQ7wPrELcWnfM3YDkLsJg1TzqCxNzW9mZiwvauAQuqC",
  "key16": "4wBkfYc9ZadNB4iPVwQMhfywf27f5KUu4D3fke3G6usnucneUNqm3L7VxASUQVCtq6VB1KNv8Eeqd9sBB5SqWwKk",
  "key17": "5ooibxpgds7mwHdxTHkiYXxcNs9ygpdsmLMGpD48Eh4ZHojHKtA5r59nHNu9e5Xs6NMKmR28B61mTQ6msUjRRR8p",
  "key18": "2cbTvuSpoGQJogpKhdhY2UizXipGCGJXv93oXK7AC5aeaqvcnErJvdFUMxVkxRjEu76NLJGgDSMYbZNCZ23xZ33e",
  "key19": "5XB1ZdFs4sqLq7UhZj5Ca3KSaNRuff4RmSXgFDJujCzwX5KuqwUMxavXX15McBYeTxUKLXMkepbjWvpbwsoCcCiy",
  "key20": "61eRvZ3861CUSru4dKRyxonMySiUJFAJrx7QtXbwyoybFTr5E3bx2K1rRNKfP6iZAcp8pvu5YB4augRacEe7kYmn",
  "key21": "46REDSHQqERp3TwzvWHLCB76wMabMnc1t1QnHQ6yPhy1YdCwRMkHu3nESK5daZPZ7VwEHfjd96f1TSHf2moVm1vk",
  "key22": "2LYPDXt6du2R3sVimXAjbE6EnWCDJy71v6U45ywCummWXUUQTs4dZcachq4Mw1gQsMqZqWu2ZfAhkeuvDYV7Evn2",
  "key23": "35iufRDLkxViChAYG3fbsW86geWWqWq52yydDA1THTz8HroypEXb2y5C9Yr2g3xTn3BP3aVzo4ZQzxyoZdh3vUnP",
  "key24": "39daVjJFWE2mYhyojPjzUvoZJNPR18pd2eTwu7AbPW4sGcTCj8M5km3Pr5zaA2zGaxiVutDaBb9T3km5VpKhk2sd",
  "key25": "wQ76f4KMfbcnxp9vhy89zJoqGDNt2TiZw4rcp3L6ARwfgoyomrAdgnbHTzFUFew63rpfH52MeJUq5naxHV52Q1A",
  "key26": "5A6oKA4T9dt82VdWkA3KELcUfoonehBDTkEEsk5wuGJkrYfYNrLUcBY6VNCPqbhfco7Y4AmNhTgbpFRZHyPTxgCs",
  "key27": "2HmER8FjzjDBHgqt3aQMPrXtkiViqUKXYV2nmvpjm66c6vMEFLDk5FW1JLwnZjcjqFQxqMRkqy7Xe86NjukGAGWA",
  "key28": "7dPG8j1vZoxtsJZiXRrGji1Ka2m92Kos3P6ThTUwn59YT2S3NNjQeBdJ4jaxYDkxBEerdskoS9iHL73KrUALDf8",
  "key29": "32VBGtSu4DJb1ZC1fma6banUqziDyesyD6aKcFfQQvtJwSPn6A4Vh1kLMKvzNJMbungSGMcpSYU7V2cqyPAKJqAx"
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
