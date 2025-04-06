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
    "2Nh38L2y7UMMMpju2xEN2ifzY2VN1fHanxuw9fXw2QbUGFHavNGtjLeEgj8NpD9Vhcmc46AY8ciQntFSzKUhCjKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56tC5fdkS1kBmFJkxxixE9SVHgYixjnw8EK3ebh42RjcmJL3xio68LWm9WHSYNeA5AMQrztKZCpnC8cTNo8E1Pug",
  "key1": "4yAqTuxPcBzYZqL68zNtEPcJQxMuzzRYqBrMvSA4X5yVNwm9amc8R5VDZZEcXqVSWnoBnHMnjbtSHRbrfPszZWAN",
  "key2": "4WWF2XpVae2z3WZxqA2dw5Wost134YpNn6RbsDGhkoAqJvwmxgUq98FDk7mwaBfTbPjgjBGjBgqSkPkfBPYbGAY1",
  "key3": "4VPWADsWc6N5Q41nVtU67NZ4X1HmNvPG9iWYchPx9EAXiYw3QgK4AN4Fzani1ZGkqyF3DC2nf1uDC4QzfPKkhruB",
  "key4": "3FT6EjodH9iWm3gNKq6mzP1cbAjTv3bHDfDcfyU8FbtrzSTgkeUTTGc9y4D1jt2NexMguVDb2xF1LjJYn53yx8MH",
  "key5": "Fyo82eFf3yQVyvPJpEqBsoPvf8qLWwHa3nnGBrkXYYa2Hw6afNHRxLvLntX2zqG5JGMEz3G4RkxE7E8TLVkHsGm",
  "key6": "3QMGAbREaWW8AYPS1J9R6BAZH27aBGrntT4H687Hc8dsiTeRcBSFGiXZzNqdRuLQUPJuPDhqqSLq8EQBupVnH5t9",
  "key7": "3o5Qk1H9FYdTHzgvdAZMbmoRR8arnLNN1LY7gmVxc2NBwXZcyU2ZKqwbz629mXNUvW55782aXod9D81MMaWfbAWS",
  "key8": "3MaSpxDUjrRG5GFjx4LyoqWJJp6AwVvb8KGS8CakT2qFNxCtpnaY9LjMknn49TSx8vnUfhoUWx6h7EZ1AfWZxiDg",
  "key9": "HpVkLkFq8znuKjYvHFaNewbh2HWejxUkEBc1z3y68Qr7DzoXJwv48vw77hWN7w2a5DCM9eoKaBx8p9qqZ9hT9Cn",
  "key10": "4KFEe2qs97JNwaRmbYvcTdysANzt19mpHGEtXLNvEFYVtsurHjFeY2kCLuVzurnMKxwLMHzSRJYUCQ1WmT7cWtuj",
  "key11": "4wLSfCD7kSBk8moaoFvXCMqNEYmkwj6DPsBawiYEV79tBtCh8hKPS31D8ih72mSywJAMpdAhX52fsEc6L2QFtBQi",
  "key12": "5egWVqKLuejDHZKNykDCN9DCk8J5iWF4cS1ZsAQhivpGEhVk53rrnf8655g8cqt7iDMr9FAc3SrxNfrDpXUW9H6q",
  "key13": "4dwWQYNqhqHMuTvAMd1Mzqx3pfeP6UyT6N3HBop2J4v2kSnj6jjxZZBVAfKun1qBqUYPXf2VoGWR3mokazHV9UBo",
  "key14": "WK6MUkTLGTjrT4ZapnQQ3ChVGiqgfFYyW6n9YtxWByePkJwgiMKRHBMahN8oGnLGeo4H9rf3HnyjGSfkfjStHcF",
  "key15": "vdEvfe1csJhz8B4tUYaVfx1qw8NNiEN12n8Es8neNrkuSeJR5MWzE3RbZz7K3GAxSmC3sTCV6dEK8Lr46SuJvaH",
  "key16": "5NFdTeRre32hX98as9h7PkrWBbtXAXCdAGZHeVAtj2J9MgZQ7mWeAyJDbHGTE9esvEXmh2pYoqY79GsxunmmticV",
  "key17": "4FL8PbDiKyhExTbffCg9UEameAWRtas6uWEtB3RbqDQ39wfHqt8xNnWMqXeMry8qwNHNogS6woi7XU8BmwbQMKUZ",
  "key18": "57wUYh7ifATS1RQ3zsR37qFn1pJHfr7dNPQFWqXdb2AqZpuwrQ1HGYQnYtRmDzpkkEGb1L8BsijKDECZfQ2VEZue",
  "key19": "5HNeiZhZ18qams1VVsnKtgM3avLMkQz1DpDuhX8qi487UN4pwShvyBEcoX7DApnr9eSPdDfvNNvj3jRGdWbK6HXe",
  "key20": "2MLniRzt1edsthHZWsg2DPATR9TWhahShPuMVsqCD9cNnRBkwy8AhWWKbQteerRm6zv8Jg7eJbJ6ZiBtcr7gMABx",
  "key21": "NTE9A6oHzWszNTyasbMWPdPSzYmFHwRoTMz258EahaFtL2RHDFkpQYPUS6sE9ay7eVtqUwnkdKdbcUSCSu2LRyn",
  "key22": "4qVLfJbggy6WvBHDd52K6q4bNwKzPRbWUtEr52gJHMXwg9mZQfvFm9QyJKKGSDmTyBfKZwspPSuskJhrLdJqUCiR",
  "key23": "38MfAz9pQdS9UHZUvwdhzwv9dfUhMEX4kAAi84aAGg5haRKs6M3qQw1VxZcguTwfgY4F2DSWcQnDWQLNt3fnxJbn",
  "key24": "2m9B4W7FLqFbYp3hhzavqnrTz88ZrwFXvL5bvr3ioHj92CCWEcs2oGBKeNFatSJSNo2xuuKA2phHi3rQQ66ahwaA",
  "key25": "2dCKqTQE8WbCnWqHWzJrYX3cb5AQAjxGZoV9Vcdw57xHkLQzfyS6r3Zf48NnzhA1p9T38NtmHJ2MSmjp2RnD66P9",
  "key26": "5KhPYBomf8RSfhHrRCjurrrVQrWhAMUDzKnPiSAcDC44CN8DZt2gwZzKKPhx7hkS522L137FDsEmX4ZCEEUwHKcc",
  "key27": "2yQ5ApMUSaoKrZobKqPV6SwPR6Y9Lo1nDYa7oysKwr82x2xgXFAmdtyheBVioFRFtviweg2Yu7Phj4vtNbTq8ANf"
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
