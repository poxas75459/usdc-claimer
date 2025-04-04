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
    "5B3bqdGZMc1oSZgu2gkbyoWG2YsaazyprTuS4eteeN7vg7NX4Pkpvm6scFEXpL5znfvgKcQehM1xdrZpL55vJCsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZdCQosRYCdcoDiAkNw9Mz6ou1g6vg5yno1dhiD1GEk48WWLHrYvMqgiuHYuzfvy8sAkL6pMuJ4MqophF3oyzzvo",
  "key1": "4QASJt2Pae6rSubzHwoEj1MuXZB1WWnM1X7z6fCCgQz6LHinnPdSvDHDGH2Ybu5WvwgJR7GrXnqL47wMrBv25pBd",
  "key2": "32b8Ps8gLi7trEXTcSN2caYfafLAmV1L11zqGgYBUxdEUfbbX8G598qj6e2tRRmtn1z6xPhmDU8T6hqVFkgGUY6F",
  "key3": "5XJToL3hTqbmZAaTxfV8bJbtLaRyK77jFetyQr4ZWHjYv28XiAy5UeHCzDVvrs1xfT8N2isunGTjjZijDvrf27rq",
  "key4": "5KD2vmrGf1dHWZYxVSR8rk4D1ukXDXY2X6t1eVdRU1dBdrbBVhfh4XJdgwofAzwfy8RqYgjkDapyjbAxpjPTd9W2",
  "key5": "2Zm88eVoAJxzfMTXLqhCTpgNfJ36xfD1WFGgJCknRk2Tds5foKCV5di9cnbiDpKxuPwBDLHt4ttRYLZ993LsAzFj",
  "key6": "3eABgqHwYpixecKHqdfUVdkV37EcVmDecQbd9eVFMM1PJV5hPtG49gfHXdZdgSAC8Y5Fz1QC8LcXoeSe43JGEzeN",
  "key7": "4pvwASJxvFesWufqg1Rx1xLDB8x47TUXBcrEvfq87ShCjAmcxRPszx4xwQDzGBdWE9mQRoBJ8qwo17iDzozfS2a1",
  "key8": "3vFD2su6ZPRVvRTzMKMzXeWQLtZAaB4DADynWuWP2ieb8cqPhTFnUQjk9RtxbCiN3u9EbyZMR1di2DahP5TxbCgF",
  "key9": "3hmsNktc2kX6xL3BfY1BbxZ7sbz2LCzzxRP8bhsNRXrCmhk4ceow4DhXBiVs37q9twtH9GKiky5ctE2LEkbtXW1a",
  "key10": "56oVzXAiFAFHjt7EkpUNB73BZUhX1j4iEGfGBwnkag9skpmvvwURfEHphxoAWxCUSoavvYm5n1HNRCvRuwtmbZES",
  "key11": "3VWDQnhy5vEcRJVgMaaoAyNX3Wd2N8bvhpNMB1h2WZHM3zAicgCCSBrKLLUaqyoZwCryeuNZGvDCX4GRwiB7SoML",
  "key12": "21ZQGYanEv1F3X2wy4DEY9xBUHGc3LN3JaxbrjmSuuBwR5NW6jkdWmi4REEGUCcGHgcsF4kcYmWWnybiWn6cnh4M",
  "key13": "3n8fC4ryGAa6TXiwmaphDk1aAs18abDiLMiTLKeRg2djzfT2ymoyJc5jCXvecvpv95Gtgadjd6aW1DMRcwTD1CoY",
  "key14": "4ty4mvqfEyoPrtH3cVKgbo5moUnEwafBuyiEWy9HpVSgLi3XqcjJNEQKz1JJeMiyY3xxsYNCgpRU8qAamFJZpmin",
  "key15": "5JFsU9b6BSqvNEKycxYx33jq5mNdtoJMa1AvLZNFmnXbqwnxjWvrBkZjDQDn1ViBRr9enKfS37UPc9xEx7GAkMUx",
  "key16": "3AoJGvnChAxGhxZVpjzLB1iFEcd91yweWnH18A1iDvJy14F76wbTUbo2uiU1gZ7iHV1SooecmGPuxwqA59W7y3oJ",
  "key17": "46BwsEa9eFjrND8YXqGEjA6EbjQCJbc7WW9rk52JyLr56bovZpC6anqH9EYUmSE81mAuFUzMVTnX78172ciiUpGT",
  "key18": "eAbGSPSz8fv5nQH8eQc69cjBemeLsoYNNbu1fXhkRd3CBUPKDGArDUUYvUvdrvJbjwvDdTveQfJaYbtK1qPD6W6",
  "key19": "2gRUcs9FcpyRdZxeVkaLz5idLkxYHwfQB6xEkT8DbyytP2ZV5W1ASyegzCj163C4Mzrocpx9zPU1QAEKA8yFvDbx",
  "key20": "3p5B2esDcm9ja2ugfr6hjkTXu37MZKFoGXfm3qJLGJEjfSWvb6WgkautyjArNFNZtBSW1qfrFqWDV9tg6zyg4SFE",
  "key21": "1r9fGdhZc3i4rZcmSZ9ktu9cDkCS5gCzEMgteD1tKiq1TpAhXVwJuTkYFosnfgUEwNYjxr8nyncJHFFoP1ejcGt",
  "key22": "5yGD41GyoNbBVnDMinSfDVP6XfLnxRYzyHo1ZPuJR2HHh2GkQc5KUCfvhfTLeJjo5x53eGdeseYeNxQvjTKTRUG4",
  "key23": "47G7YPkq8yNFfEx4mb8sXMLmVxoWQn91pTVbajkj6GCwZexGiEkdeWXoLN2izV8aWT7yrcAynwmQXg3BAnSdmnFo",
  "key24": "Hm4kwZBaLBTyopaZbYa8mwFAc5vkVtnvWGMCdxQQbkuWKie4utzxKGWq4DUqNwh46JQCzEzGGx3QGFKeYFSbmTJ",
  "key25": "2xnfgX2Uawafv72VKEvzHzPB1ntrZyQu8PLP6JejHPgmYamah39ZTr6VW6XrcTgAuSJW1jQe1rJpdUpTKpJx8HM"
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
