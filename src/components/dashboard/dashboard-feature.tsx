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
    "2DGE7zKrQfcL4upZWZLGMDsZ6UV7NQLFforBombRvwaroyXync599d84uGkZa7KRwBLVm8sp52A7HuJ1HuRfSkhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAfGZ3reiarCczspxT5pXGsZUp5toowC7uxMc9PDeqeCMoxNjbZT4bhztTiXF5bJH2ygjpW59hgjS5CQ2cCDqzt",
  "key1": "FiyK11TLWADZe768voxZiBM2FPoE5VseDAkHDJonqpJ1SpbKsaj48brBgS6WgnRyv8fCjyWgJbX83skR37azHxE",
  "key2": "52FMmsf1SyJ6NotBN3dwKP12NDFYSxABQ4uc9JDHVGWX8VYdffgMwVf2UEJ52Nbfpf3Lfvca85nNex3DwtdQN51r",
  "key3": "udPjJEDeh7KRCb3oTwjYSG1aTCu26XVDavWqvzBsy6s44ddNn6ZXMf7kAEdCeumnvWNpgRk8oabbs3gkzWV9DMU",
  "key4": "ppBnX71UJvwitM27ygBpcG4t6qgELsnjomgwgMabJMdQTAC188ecxSNDr48vkN8cfpUMmyGXVeRW3u8XSjEDdyW",
  "key5": "2hnNJY7DX4a15hQmJYT5zvdaW2nv3jFpCgDgJj86roNhCpN5EqbWjBCy6eJQzKghphs7QX3g5Gfm9J5y75qZznJg",
  "key6": "2KabM2RBbrRqE7FgXy2YASqiC9evzkRnzbu9gZYkNR7jB4hK1VDzTBgUfNEGEmS4aqVT8xTnqxtSnaWqEd28HRi5",
  "key7": "45TayMLGfkpmDqFr8oGvaep46ZR4zDGWL3zMrmfURivixsX5bF3QVZVCsAAvhkmMyRzboTRvgi62mj8zfy1dQyXk",
  "key8": "5UJCrDpVS71uC4ydA1eJPNGYyfTVkJ6zhU8gfeFHdQXehcbzacGQNugwVar96AaxuEkCUoTfbC9nTgaYN4b4taXp",
  "key9": "22u6S2bvxsQveKgFBKDd77DWrNLgXmBthWjoQRWUhEDS8mG2baFLHs46Nc9zP8Rgzdabu6od4zzStuSQPBaeBXGB",
  "key10": "5SbjHPKMYEPZweeWKA2cbNrFjJXnzkz7JJPW1VFhaFkBym7rw6gAMWWNtHyLDAECuGsZ32K1FU5vZ4jYJ9HdTVsu",
  "key11": "Vj1jqSEJby7LwDRLbmnQUeaXGxpECDWtBAA4ua6Zvsosyw8kowjE3P9tEyovvptdaRmKgUWN5Nw5nE75HLtXjmZ",
  "key12": "42BY7E6LgmWxYGYHMS2ikPkTrSqS4eJhzC8pbQG2Rj2rKFCGBQg7MtydgGs53m4GbNautpVPQtUXPKVmrdCopBx6",
  "key13": "4H9vbMJK5Fc49jm9gZWqKJz4eJ1NBNfQcwWaHgt4wCpEKsCkCotdrfnKu1NnB7uReXYB2ixptMkiVPTRSut5jNrQ",
  "key14": "3HiWYbdZmAmWgeQMNUEwdt2Xjg3E1hph5TMgDcFcnvHfVsXhCdogn5FFB3dqzxpzbUKNWJTQgGYZRo8sLuDExQRi",
  "key15": "4gcUCtyQDR4JVqDgM1gxAUwX3uGvaeDqQJYJcd5pbjdVz7yhCbcZwS3mTwnEQ5T8X8MKmDnySJZEaoat9H3VnFkH",
  "key16": "xGk2Sb9SxMuRUJKktetvU1AwsJvLtEPXS8JReHqcy422cQoBD6LYiPcScx9J9gL5wDNEo7DJLJ49ShJ3bU3LqfU",
  "key17": "64dautNXS8FFiEHyq99V72eoLQecY7nbaRuZzbNgPNVsV8HSumZZC5WDQ7hLeHLUK5tSFZbN1RYKaGxw3zGtB6Pp",
  "key18": "5jjRkjs43b4KTgaoMTPxhV6SgZHukYdYFdQBXHAUjLtnwWagp5fTwo4hGVtZYHrMYYuWDU9ZJbQ7mqb8i6CZ4sKU",
  "key19": "5LBfPAJXCoEQ3Pbh4C4TsYFo5zZj3hqdDhsZuN5h3uTSzpxbPYW2PLzBaukpndHe7M92fPyBkhNeiU1hETxeZoxy",
  "key20": "2ygxBPRg3e3EtYyuEUWJSvVU8bk8rtjcmieHWz4TKao8oxAj5fEKnpt41ZgNmKQitrefTQCiq6Yf6qiNkozpLvdf",
  "key21": "4tS2PyLD7n9ji7S2CSa8Dba22dcXQBTPJYvhXepM4wDtjkcijAZU8vxRCceu7UXSBwBCaNPrvfqkPmdpDES3bQxm",
  "key22": "5srm4fpZ2SSvWFRg3A24kjAvwZg9nyrR5bxqHk3x7VquWAn6ZrnaRHxeTwVaRraesPQZiaJv3TDz55iPxL1VjS9J",
  "key23": "35ssBSmmEwA6Fe5vWYsyCbXWdXkcP375RsRsJruEmrdSj5MBABcg1oUtUAPp1Q7D72JyLLYDaiNbmtEV6SLJ3q3z",
  "key24": "4TBff3eiU69sNV9hH4q7xEdCaCB45WEokpR8yN1wGnVToAReUECNFSRXNAujoJwyAHt52CgKuQjcXyuRqRGqYu17",
  "key25": "dYkzEjvP4EicunazYxM7Cb8uxcGApGCvaMBoKhpdXLBuVCt44ZXQg1tUzusWR5JYE7YuDqXUyAyfucCMAYgw7Xw"
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
