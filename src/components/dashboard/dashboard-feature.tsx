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
    "V66PYxobVvT7UHD61xN2LVHA6HWW59955vjYjbq3V19JopfBR6NSuaKnhV5LsMQQ2YVKFrVPpG8JKr5DiH8kpgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NArRrrh2WDZgobq1KEUPLbKfkF56YEXApMFbby6ohRB5fBM8EdC7Lz66pk6gMYizRC4fprMQui3qMnBv51RiNwB",
  "key1": "4YqYrthcR4qCvksjNFsuiCBvpSvQdMGMrGUzknkf29wDCiTPWJUKj12duxq4uQUsA5BLdwUekTKg12rxWeYTKqBU",
  "key2": "3cQTMnu5F12qJ3V41fqtEDwB24dGsVfynovXmnxhjcjxwJhrCCxoFZn7hSnjnj48vbm2MpxnkSby5h5ibJjDcXSN",
  "key3": "27nJPsfp6P8FqcZYELgPxLQN5xiZzJzLkPmjkrHVcxiz5dtjUrRFvL1BGb2UdXjvuaM7g9ZmqvQY5c8ijP4HsxXA",
  "key4": "2J3tJjdBdiEG2ztJmRiAHpzP5Mg1VnUn632McpVmi9dhpSNpSK2pgy2NZnxQMMBzaDL7dnJ59q3jE8tEhSJepRkD",
  "key5": "5gd69BKoit8neCr2n9XAaDWQDYobMfDFGkyywP58c9QHYwzKum8yNAo6KzDsKnwCTVZxqjQdsWDcsCjYHB8iGBkL",
  "key6": "5jBhXpxErE9BdSrPbe95d118k7cDfANndn5VsAGNoTqiUPms8wY8GMjMjwGKKka6U7NeV6YNkDRh7SbeFB3fCbMS",
  "key7": "4vG9F9f1yXUNZUsKoCkV8aqT6ZYoftJpkb6TmJebxMAH4u6yd4xCgwXCSQJKdXsNPpduM5EiwWqXja8JKMMyJKHZ",
  "key8": "3KR7a8LVNypegXVdeQRb9kckG8H3csoRNZGBYhotTU8cm7LBXofwe4SctBR1inKsUCvVV2fEDYKctsJx2atKfYtS",
  "key9": "ujRgrourDoMUzbaPN1Wtqd614Y4QF9XWuu4R8oFc3ff3YYead3K79pXv5ZiJaapaB4tmVWqWPAcZrUNp4YDfBHo",
  "key10": "4YZKGu1doVhgsrhZASRK1SzHrpyFd9nb7FXh1wcNrMwaZ4i3FUR6SQoSRmvhUroM6JhvpTUGyZfGEPPFyH34sz3H",
  "key11": "2MVrBz7gqkytA6c33id4EwExDPeu8ukFGP2HrQGsfHGgTjavLLmjQZwJEAy8aV2pcuhupqEXLDqqPvzQinvxEqCE",
  "key12": "5fzPWJhdgVnjFzQhJ552hvWpaayZVHHgSEbYSnfPZBs3gLkNMLedxd4rZmsuRbj5Vnucdc6FuBQRktuuX4SANhFA",
  "key13": "5HxggquSAD7UYHrwikgmBj9egt6FMKoYvRTcCJazYARsndJHqGA3juj64dhNLBsYTi1GPo3tH7xK3Cys7eQwWnsM",
  "key14": "42JdaNnPvQLTdEuSXc9jBQQMqXU4HimUjamndWhC8pLTd7NwbeUuUHKkatns8K57XXEZ6se6X39FExqWkJhBrHJ7",
  "key15": "pB9f1ickYUMoXSkBpQECnYHQM7qUDczWDXi1E8h6JiSZNtYNoNuPLdVXf3vxKJ6EETPtp1EZRhjzWpSFMZzfKCJ",
  "key16": "2SMKEDbGjPWcJd732iunZeMHkWogSoXVUtXfeXEf1qCh9KM7pWQLeSTfd9Y6edBwyWtU65uBJVyucssgNP12jQz",
  "key17": "2mAxWef3Faa8MFpQ913WWAgnDyvaHyu2GeF2aUgicLa5L1Q4o87RX7PjEjYFc7NWztkKKWmVwcrWYaWben4dLS55",
  "key18": "4PmNkh911iQmoHUfaD546cL9rtuyV3YqXivr5RN65K1umsx7DwgrPqKDdpAtavFSYwg3F7mehu9ytzb2iYdfztkp",
  "key19": "4xP9PPUaBgtzN5ZLcHyFM4z2yrEYVeZ7y1Eff5Q5eYJjDVoeLiovDitJKdB8RacRpWzZYoNt6qpMspXYydkUM4g",
  "key20": "2YZYhsWgQyVaTDkSg3mJgm1e45h6dRQhbPKB4fkLpo5QvXTYS3DhCpgq8xAH2HFJkz1asagsRWgVhf3veyh2QDdo",
  "key21": "bmXDMrs6C24VoabU7DECY7KeZ4DEAPVeLm49VRyGJraBCfZRQqA9TwyRJcczgcQsfuMvDPNkERtQPiuSFoKZJQV",
  "key22": "TQipRYuWExWeRE1ZVprZxEp4wgfBaFNe5PZkRQan5WJoCt1FhNPp3BYBZP9y5QTcQXJGqrvVwKnDSe3bKwrYXHZ",
  "key23": "2rAjgnAArqcncyT2yKjXYTkT1fpoMRPaZzUw6biTxb6DgrRkeJ2PkMA592bsZdKmQqN9eXMsM5fCMr6E4HC74yE3",
  "key24": "5oGnqw7Qrb2Vp8ShcthsSrgzqitYhvALmecfrbEag2ToJfTU75A8aBnqhxpa5mpc6B8xsQxkvK8gr7PPmyD8sTnV",
  "key25": "5n354X5WWWECvuRp8p2pPpRWZdrAomUN97hcUko7Kpn1CWUfNFhMtDkfxiDsvfLJCCPbZvxFQGc6sPr4BSdd3JMN",
  "key26": "4E1H1U8jnPfPEXQimsny3mr5gzfuXPgLQwR2N4622UubkgS2gXFq9UcK8Z3vyQSsNtu2ndKcGjmPzfpDdL34dmCW"
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
