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
    "2L7Bdhik348Cp5r7fiaiSQZVAqPsoc2edFSE1gSHu37USAB3xqwzxNWDxqRC7CfPPS8s7xLEBznsUVkn9SdQ8Sra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LHoPqU6XtkkzvUNHT6X8b3qoTjPLaPWwHf9yBHXkmKEi1ScXfWJo8YY9BJiDnt6zfHN5qBW7bF9KSM1Vma3B87f",
  "key1": "4u9KkuAKKk7EjSQftLUiYWpKM5Pb7w7JCKCfFTuqXgV2GM9BLgekcqjoGrtT9mPv4BeVNm5cTCDA1PWHnfUHZayZ",
  "key2": "PTxfZS8MBRKsRfx2nNZRH45mdwwFBnDKxh3DScA53tudzANHNF2tfLudVj4SK6adsp2557SwxFsFm1ebEVAoYEH",
  "key3": "2fidcHrvXXd8Tr5hFFw5f9FhNMX8KyKcrdUeWKkGgfRzzybneDhShjLA9g5RXJgwa28mizPfiYbJkFkkugLbrVwP",
  "key4": "c236nyvnKkGKC1cx2V6vbYCc56RojcPuc8fJUtQkgJ6MjVew9UwFNJS5ykjLgBTG8PRtQLu2dwVGq9hNchzaJcf",
  "key5": "65MqQbcHRoBDXov2Hky67DbL9zg43aPjeYH8qRcCGdt8BaPFr2LB5PvLSCqXJFZ2HbJHZJhdD1C5B2Gd1AdH1Jkz",
  "key6": "4tPmiQL4xzJCFLoRt9NGHAUug7rvT4Kf8DYFqN84cGBjGM7wYpggM3ipiXKmdBEufK2uSSn39c1ijGbA3BLRarbj",
  "key7": "2J65kAi2iQgctAEsocHtMMTsgssMRDQZ9TL1C4vJ1u11VRcF8tWZ3ksAeFpMNhu6x7g2LSt7f8ttUCT91q29sFAH",
  "key8": "2cu2Yg41mz9nKoYDmfXe9hV5LCMvq4RYynbr2D1Q2vHRXGDvbevXEDF9SJJT1ypX9iFwW82PsuR5V5frNJLjYZ9k",
  "key9": "43d9U445JiZmWnNUZYNmhwf53jrfb1qzPEgMMUbznxYY1QLn9wHri5KZW3mjUVkZNEGfq252esxLNJBk5UrEUyC3",
  "key10": "4fMPztu5meqB7G5YXRtDbLvsZ7ZmmQ7KeQqD8ed4hHgcTF2VwrazoHjHf7vW6V7FB7FWkT2Px5YLXLyWtZFMGVQd",
  "key11": "cB1ymbGZupzN1ivuhu5V4Q2PYdMyevncjT8FyuZeVHVdcbQWCCbFvnQcLXiwFUrsoQiCd2A2qYzwm3uYVdLkbr5",
  "key12": "4UZgU5Vik5i8EfFh4RSnbnHMH4iCQfLLhnRmFUYSYBNnWBtk1HiK4hygPTbSisUjarszKVtF7embQ71KL8M2bGWp",
  "key13": "4uBg2yEq6FiUDCH57TAkw8VyG6M6NkxwGjnsQNkZeyewuYUvxz5RTA4VFzgfVzA94BR8B7uRHXvS8X4ULA8fpEzW",
  "key14": "3g82XfKabMbiY5eKPzDBBrCmW3FAX1oDGN2ySYddcZ6xLoWbfKzYL7862RZMtkkebrSSydmd3ELodS2URTNw8Ftu",
  "key15": "3RZQzmm7bW1R5aQRbFySLF7MtTL6ouMubZb6tLKMMzG2yzVTt4CmMp6FHZJDwWKsCmQyVYMgJoVw9tSV2XvfPRcD",
  "key16": "3cFYMajbgwk3W6pd4rjvdL3TSNp2EpoLfh58domoZoBamf4AZSYsBQcvfJyFPkRTRVULkjkNgBxbKdEEpiwbeWKF",
  "key17": "qGGe8qQxE7pmq3TWSVkiqa3bWGdtHaeXmHiw1syQwxTHi163yJkEYyqKNPhFU7aP3yyR8WcRFFNmWd6xCm8e3yA",
  "key18": "3v3wzGZ4QzkTL6pmixekXoEGjU5CRNpa7TLn58LDa7KYvPtdGDS3hdhG9h1mGB3p5yHPpBsfMQMJJ5KWFWUYWWhU",
  "key19": "5cTRegc1M5Q2L4EmxPoHgVz3v6T1yvqQw7nY3afim6nc7zPUX43Dwa3gm3pjHKCGKh2pWdLuLW6rUcJe7oW4xbU8",
  "key20": "3DM62N8hxHPgRFdoW8jgP5DrBTwQPGV7Z25XmU5youSiZiioBy6cXcsEruXENzKidMFzonnFR2KWvZoXod78qZi9",
  "key21": "3cbvZomBKagwpVdM6qiGAnEf52F18qCQ1EV4J5sKhXJxH86ZG5Bn6Q3zc9wr3f9WnKKd1S3tBkUsQUJxb3zy2ibi",
  "key22": "44jyjN9NsZA6M5qSmTybAmKwAGSN1DGVfH1DtQuDghFouK7fCDXC9y1VoeDRBAQReJFnH5dQwsw4UurtYmovSCVN",
  "key23": "2BHp6g8GNBw2wNKZ365vQBwXAPuFZB7NC3CPPbGeksMnf2BRUcZb1tGPdB546nE66Hfh9kNucAn647RuxGzGUWAk",
  "key24": "2t33UGXGJe5mNZ3XZF57XPxigk28KJfTMuhHCPpd4EwrXuu9YLLR3shMGtrU3xq6usgQYBbJ3exhBn7zzjFzPmvf",
  "key25": "yi5qchTM8gcDkz6AVyEebbpqKMtVbRycQppArmqn6pvLt6PVxNER9PJhx69YVcVwEw7dgXEc3KBYe4YuWPSpWWp"
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
