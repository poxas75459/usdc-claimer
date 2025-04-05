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
    "5jDpvhpBByhzGCAJxcWTpN2pmff9ULX6dLD7xuqHiMDbpYFhHy1wMfA9MTxpymqYG2KkJqStiwgaEp7gM3RVDeYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jYo8Fig12zPj2Cs4NMKVZwgReiUFwLvUsjmBfyPYhd14FqdXZ4yQCJEwTa58w6KQHLSiQPnXuEXfi1YHRseriWT",
  "key1": "66azzeWQss35WRya6fE99XxorndL1DaAjrvZpgss9UDpcE3sWu8wRr5F1Cdq1pc8JBJzsr5JG1a3GjZYA2QMvDqe",
  "key2": "49LGkCHKADXReqvQ6kqL5p1xYP9XH6ehYk1h4UwS5h8tKkgqQfrcHRKDjK5f7PkhxATdvJdFfe6Qu121aAnRcY2F",
  "key3": "updxkeH1hj9rgRJADrSsn9HLE6CMEtnUA4qfU7tME6enFfP5r7UdSXcRv5MrUwzBqfR7GctUZVqA5HCMyUVKVJc",
  "key4": "dfbgGnqaYCaSg6pak9Gk19xCdydeM45WcqtrRDsPb24QV1sXdu3s7mZ2krQQmcE6M5PAuG1N8MKzj5wfYqxmBtd",
  "key5": "LbVhK9cZVG7BqEUC68PxUu2G5PBt25DAjm6oj3jEkwUDmYHUEKmxvYfSgZ3FTUchzSxfk9UEbGSb3TwfzdtQTBD",
  "key6": "5YDV5FCXBpDdeKjTsLgai27bjxqLSRwcrRe8prz84AnNTEnkcQR3RRPE31Tmp3LURoBTPCsRoExLrWPEwiigiHDu",
  "key7": "2vL3EBYRqGdqEC26GAw1GHCWyuVuf4VgLDcpnH8fA8uWjS6Q41FFnRSjtR835wJzpvcdxehmS5DohYTLjpDv6EBo",
  "key8": "4vJsBACyZBWzi1Y1vFCWHktesZCdsCcSLcnftHoPb6aTzGGov7mEazJhCR2x54FfchMfdSN2TTrWJ6gNKHH7k3gr",
  "key9": "23pMK5zeaVPLnREhnqsFS4WNu8N9z4WrMFSitYKc7W46e16HeJdxEV6A4X1JbKPuxciNrdaSnnhvmPkKwKetEW7z",
  "key10": "23HdYgiNy1N8Di9zvWabmUzNCkHHyKWUihYdBNN1XkeoeKLAi214FsWRy2BDFhjCeifGQjvGFsxGQ3diu4RCfZun",
  "key11": "2tUNTf43f8NCFtxASaYKVfDsTKLc2Y1gXofXduQ7Xa7ifFbWSvgGwXTrzgrN6R9PyevJ3zvPzCUKk8318CsoLRw9",
  "key12": "2gBGfxdaH6gHCsbikHPqTVvfp8G7vQyek3JBzp7ik6m2qcjWWAqk4LEEVTakN1QBJdJcKm8VVDuj7o2mt8P8hraB",
  "key13": "2o46MgWPrdArY2z2HSimvyUGXx3CYSsprRymwjqgmEDhj2J6MwwvKuGMP3XSzuug6eaYMbu3UhVCPs6AUkQQWD6W",
  "key14": "2kKWacEqt3tFVULY4vtVV1JjogmybpsFEAvJcunQVQQewSALFu1Unf3zuWuK5BjUF2kPfcS7AdaM9p4EMp58i7Lj",
  "key15": "2hpRLdo1AA4kNFMUTbKEHPii9AD6c8sqPsDRZEhHqnTJhx1kqSZyz72qB34CkTJvWBda1idA36giX8wG5H6L4oij",
  "key16": "2Ka88eRvX8cQopwkmgENE19sZccg1k7BdzYDZuqKwGgwDapNPGYzDnBDhNr2pU5G1XmjeK3tbgViCofnDYmXgciP",
  "key17": "2KLVWZgP5xrt2JEpMe8wRF89B8XNevib6JXYu4qeBMPTwHpULsiuLsZYjRzt3ZeMzzQdQhKnZQ1YRAV4J8S2Bk5W",
  "key18": "5qPKJbjUfbvyYByBRighY3yH2UYtxBpjP1JdMSvZ3gCSeDdcSXrA36N4TUEZaC7jRo12SRTeVoMRM3KnQ6T2RVJj",
  "key19": "T48XmGzMZGXCL8avgjd3ojypdYCMjoqUYd6ujkSJgb6nN8GcigC9kFMhCACBiXMDmPZ8t322u1psi2J94zdJ593",
  "key20": "4PyfxdGsgdcz5zzwpzowSMKMsSmGobNzuE2123PeFzXSi2qLYNBjgUG6P2Gv7BdtC6NSsiYibD2Hc2d9m5kqvREb",
  "key21": "2oA6MNs3yx1C2jKyjVu5YzjXvC4umAvZE1jboE39cnmbvFt6prF6KsxcwRQoNT9KfoVV2psVzpJwbx4g5cQ54RZv",
  "key22": "5FZxeCzoyNKMmKXq5sCP1v653i8nkgRWqYyLpBciDGHif4NrATV2JzJviFc1Cj95YwmamBPppzyb5pxYHTQ3byKS",
  "key23": "44MgbpF9gCrtsNLg1Hnyyi4FPWREnE3Ps5871EFpnp3WTRTqzFHtDLQSEG44pbhe33isv6SdQXeUxdV4SzrDBDdc",
  "key24": "3ZFLnRyhXLifURooMVpcNhFtC1DrBF8xZgmgYLUkcWJcpD6373paLXKzAJjbCjJnah533ccXbXvP3PZSKhfNSZ4D",
  "key25": "28NroDNEUEjywnYJj3nVnTFHmdPQjzY3abXycsb819HPAJ724jg3bo8b9xtCRLrmUnxkRi6fAsPxmkAcWMKX7Hb5",
  "key26": "yKGfVPrymsM6rYDM9HnGQtM8PQx5rJt5U6kymKkitfwrTSzxUeLCcKyrBGEiGurAUmGKjH9CZtbAL6qhJZGCPK8",
  "key27": "4mJDiLGX8bbDV6TaPWzDnKEtobUqFbvocjVWfSDMJAstuyBgqdqmkucnhMk6fpXRYdzgLJTpceRPz93H2pjXrdPw"
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
