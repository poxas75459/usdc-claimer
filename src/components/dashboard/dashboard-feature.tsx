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
    "YckPAVs3WrmCeDSheS1yxQ2NFCxTCSpaL1EwVx4N3VMdPXoWuLfwRBkz61LZ4zYwtfja2ynraLe86CTjnE1eYau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWTQhYwUHj7cuDGYKR8u3GUw2Zcw4oR15zyD5jb3E74CAjt8g9oRejCTj4SJkX6WzcfC2LCMiu3AJJLRC6MTwk5",
  "key1": "4Cgkiicmnu8sD6kB3n6HQLFWiTzhtVH1cdFD3BFEmAasUQNBc93MGAuMCfi6sLF1zjKiFshB6Z3Bk7uVEeJuNFbr",
  "key2": "24QtKm2FV71JryLftyVcJ5qUG6qMRMY9uq6wdgb6Y1X6YQttp7gaWCtWD1xxZ5KPc11kxh9NiG9Foef847EAtB5F",
  "key3": "4cHPgR3pMcRNand6Yp5fdC1bJKXdNjhvTcapPmXEzFyF2PJn3Fyr3JSki88V64GMFk2wwfck6WrCoRATTGGMarZP",
  "key4": "5keuDpczvra1FMCwxXhLtdxye3a7LkzPpng39nvFKTVKwAGsGDEg2n3jmHPgdBwk9NaU2HrDpbvVVozbwMkD7os",
  "key5": "4FhZr5LQ3YYYkeH2KdtWasfM2VSbs9P9tCvXcjkvDPF4xxEYjPj3xvUS2fga29A5yWfP5KGtnp5YnTyK3UfWdhs",
  "key6": "5JNaiJReEyWtcFXREoRDQ9gy2Gcm4GkXPR9PukF1gQ1JgTsfh9TocSNXD3h7nGmBt4xg45M5yKxL9W6CA3adAZz3",
  "key7": "uNDiSS4RXB1CB9ZaVo79mrGME4FKhMv6Mzj8QVXBv6vAKG2jgsNmcP5GmHHqaUmzN4PnPXTw8AEoBBa3gimPztf",
  "key8": "2d6bEw69nSCrCcSPBauaQapXDQm7UGTeomaVmvxaHanvdiXoS4kMwKRK4kMz8jZR1PXB4g8r9Mqtw1dpzDq3m1Dt",
  "key9": "2mcXWN2sih9TEWvusfCdyhKe8u9QZz9uXxXswf1YE88GBUBGGiJRdxErkSatbwyEhVuiQLB7GTa9dNEFfznACJcb",
  "key10": "5yqvBRtZzmHxVpi6G9Je2PjExepeTtKNyrzULmY3fsCWaxiveHU8SKzHkyxXuS3vBSjDDhdDtx5VHZM7km9PswD",
  "key11": "5LsKvggXjBqBg6DY3S5gzGq35oHdg9wD4oRYcDmhXvX42njBHs9YWhFsQfgZ2mKV2XCPAhTNixiHycDqVpzwMXKK",
  "key12": "5fdMCjT9iNduJLTMF5HSMipvyJqqxdPLsSt4sRrYWD8VotqRHi5cDcR73DocTBcxnxPkKrY16Les6RXHGgxrEuU9",
  "key13": "3MTc58qsLBxmYsNR3iA5K14s6385BxHNTcp8CKkbwYL39MwcXA82NjQpWriVB3YtLcTCqKynaFGs8TQ42L8RFmKT",
  "key14": "4J3UWZAgQGotozRAjuYWJRGzP63MAckeoE8ZUoEDpJJcGV935XwEsGHoSSDApjwWy3YniKyJtHzD6S2XQxmn9PVE",
  "key15": "4W1Y8RQizA5YC4skFq6v5EkuGrfZu7PJVd791G5fgMSr3MiXrB2V9Bv5xjpWyGLrFynggVpsnMvD381ntT9huw8M",
  "key16": "3JkhuNkh6VcmbQV7HbnywuQccLiu6tZ92Uks456YGaC8jXw1WpgCoH2nDeysjqm6cnUowtmfg48ctznibybrjmYi",
  "key17": "63hrSokMQyocR6PJss4NauSSakyJsTDR5E7wQ6CFhASu5QABjY2s3RsAXqeDFfuCXxwzExzPazA6FGVAQBWBovj5",
  "key18": "22FKkwRxU84MCg9geuqNN7sfMMpEeMKsSvqP6qYZon8U629RGBk2cwaj9gvwxL3hYWVn3KCYdAdrGgPpVfPHcwxA",
  "key19": "4UTKb5fKgKbiDT7o1iJZqNUAcSF6oWduMj3CCYsMmFN3qp3YcP7VXLLazxeo19L3D9ZJVCaL9zTQmJTPzFTVd9dn",
  "key20": "5Vb3yEqaHxc1UmfVV5H88oCpNoWaLkjcELoX6b41FsrjarPiBYWuPAao61vfJohnZS9qRKThj415iLSx8TGPChig",
  "key21": "2ANgSmYGabfsLUmxejCfUisDzbcrhXGNqDhZgKt9GuZn8DMb2myFzkHS6rCweNwx6tEPrFNVZMKi1LEp8QXutU6W",
  "key22": "3F7nxUYPBxbBUPfnynAf8D9xQFU8SN5HTst7iPLp3byt4RYXQLazCqc3D7APqDbQwGsuafnqAeaWZWjdwGPfEKXY",
  "key23": "BWAmVT6YW49BquHb4CaKascjDQhcNDcffBqeMePfZ855Es7Mk19s4KCCe6NbnUVE6YvBdZyAKFuV1uD2sjH59MX",
  "key24": "PKpDAmuRsWo6Szkcjs8pZFMLsAevgwNQb8LLUrHVYreQRcHsRWUBPrLs2maem1GJvZUSwUvJsD1yGbW6RFAVmpr",
  "key25": "4WoyM9xQT22Sq3gFBGKfhbBURdxzvMDtjQXfwFTgRDUz43rHrpMp8ieyJ31KC51WZ8SdPXy5HNDmXC9cFdWXkZqG",
  "key26": "5b96N5QzsXfpTPLcaN1nDrAMKQC7drhfBWwSM1QNbM1RRPTwvvmEi5QyjwR7QSJSR5rcLzfVMxSZ6VPw7oaYfYvh"
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
