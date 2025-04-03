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
    "38esivbz7ct27CrU3aVMj5d5meSnWrQ2JRH3WogcKGwDfkHRUp1wjzPMt6N3cKX6yJ41ojXmhnkMN1Qp8WAP3S92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pWYasTJpjMeVVCiK5STpRTQjq1cWJyySjohjLCkq4RH4w6wqwV7fB1pASNkNw1UD2ktHM3xGwxMj4PWSmuQdazK",
  "key1": "3SaxToYbnev6GCurwp9XbjusR4bCJjGaEbYwjbiaBeUjzveagPPPRrJdsrfr7htKPjpVkktaZNL6NJMnxH5ZeaAS",
  "key2": "3mFwnRc1tHTHCGNAJvf33Qs75dU3RftLWrvGaAHrsUqaETgs2L7t4mtkiMpg7wF9ECcnGrbTqhYKwYdABzW28df3",
  "key3": "2o4is6ivTLtqwu5sxfdjkwrpzGo114hRfRmd6yDjeC5dwGdQbiPjTxNZH8us34a1isT9de5fRxynMWFZpGCBssZX",
  "key4": "r1EjN1MDXcdb8Fu4fouR2LQMZsoDKMKToUBznFao9B8jphPUQL6r8gcNpxJZ5yrsBmtBQggUcgY4xE78Jh3zv1H",
  "key5": "4WjMbFYtZpSephhXD4QgJZLuBnM57aPooBBVevHdosHmxqD6hcJkRgm6PwWmQ8nZ1GMEeVkGg4Zz3A12iyrj7mQW",
  "key6": "XurX5VVEfGwYyNx6ispyMqU9eYN3u4fmBV3podXSkNeq9XVYHnGwQiRJrnpRhKKm1EeUqTGC8L4eaCmbPkzj6xM",
  "key7": "4LgTbizGRtdtwzb9EQvv4E5nAp4smPGaEKTFdWwrWjPbVL35Uz1z5Y2GT8pXzY5SzyzD6JqD8fNUzhBoGCPBsRjf",
  "key8": "38BQWRwzovZip2bgHHr6AgEJhaFBWstS71enbdGcAK9jfu5HELrphXxi35nM7ar4G7FUv583SLy5HyJyXrNNcuN",
  "key9": "2vzf7XCZv3vCRjHX1Do1yTrWFt5KTuGm4YxrRedipbkVuxnqmjao7mURZEyGrDXygKmM84mRF76DhrBk9JW6pp8r",
  "key10": "2RC56cf1RNQozypz1XybphBL9XpbtXKaGE5fd7meRdeaNP9TWXKZzXxs2WD3h3gDfYJ4hRmmSH7XsK2bGS8bb8tS",
  "key11": "5euQkh6MiSGwgYwN4gMRKecC8jvcwGjRyofm4qx7KU4ss28nTfCaN7XFAjybWWtG7yvsETXdbQV4TPxcvoBjUjBk",
  "key12": "5xKbpEePz1iNYc78Yq6azpjDBYc7C8rxJbWRRv78Lx7ZwcPeLVftkkrRHaosTPWwF9k2AA81vjd5guThw7WjRJF3",
  "key13": "3B36xE7kXFFxoKewMSefvwKZDMvVvmd4hGSrYgnpJKmbrNbpSHaPjGK3sdGzq7Hfod5qY6rysuRF9Ju74VRhaPDJ",
  "key14": "3eZ4gk4yL7TQ4e1111aX3c15t73PzLNDEbx5CTv4TG1E7P5TxQRmYSJpUYiiTDQLuAnqdbVBzTkh7k2szAResru4",
  "key15": "2Ti7YVbXMULdB4C4SimQ7kwFner7YWB12usrpy8wgDtxn7YnDhxb9kqzbHbMHF1B8Pp1mge8idsui3L6XiMzABEZ",
  "key16": "52pGJ6ynfaEauoYV2T4CfkeyRaEMQTKh4ErDPCBtkYoDHFYEA8bYCSbVtxsXRPKQeWKSuUXCMhxexJxePykwUwER",
  "key17": "5SBfQgq9uxchBCvFcZjWBVfPDYztMuiYEaCzWJbxDe4ovgLs28ECVahfDQd1ehHT3iEngZTuBGm3Jc19R5cRAxPq",
  "key18": "58EgeHLhf1h36Ec2N9hv5XfMax3P2ErdRXjfqb7Zdxop3DEGPaeE8CkXRGkgBRfZnpy5Kj27fJNQc2xaL4j89UcH",
  "key19": "39PmDmtUbZi4Q9eK2Ns47Ez6iwa4XGxbtpchU2qCNz825jzQsfc1DSqpLvFz1XJKeYyGeeYWpHadjsTrUwpkCi6s",
  "key20": "5CNwuciz86t4TsEAYm2aGGcCnrkcGnEenponDt3feBmizxbwMGn68Nthdd1xyPUx7CfSCPJDxBog9pzhjugAHyYd",
  "key21": "2UyYMmqLiuwQVBtrjWJmCbugEBj8wjiTgtUdu6MnNqDgDLEhqkGwjw7qbaU8xmY5oH6P8fjchqVXDTpamqNSwpvf",
  "key22": "4WHfPXyVFay6npbAHGPFPCtt7rEQP771XxRswXodPjuo5jW6UkqYxnSU6PNaGd4JXrvx1e27biT3FZSyvRp3yzkE",
  "key23": "jaVfZowDs1CKK4MPoRAMukKUSZcpMrc9W3sNvdVtnZYLnUejoXMQDpyproSeFyTeWZ1LwHfx1Dvc48xA7HxMz7a",
  "key24": "SDmNfyMz6q6cTj3LUkWYH1S6A1ZCfVUQ6UPbZY9Yz4zjDy1h4eXU8W1VcJSZJcz5tfpSmYfaKvob7KkPFZGuahL",
  "key25": "3D53WEAfcWeykr1NYWUZKSgE7WyBCvGB4yGfV6LbzvvS5be3uBYTyD2LzgRWsXZT5Ng8vipP5opgbVjjxBguB2QF"
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
