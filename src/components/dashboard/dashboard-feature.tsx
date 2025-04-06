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
    "2ft6N5z9NEWt9s98iwKjg4Eo5k3pk3Fv1fDa6Uj8bRntGe4oj2QfvfLxs3KX2V3uRHm3ZFsmbwpAXp21bnfrZdDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7c9jc4bShkBwN42WTZ4Fdo499De9xHvL3zB1gLxgVwKZrjvz4RUux1EQUtxjDvXpyoXE7iJGLwFSniqiSbiGAK",
  "key1": "448Ry5b91Ez6pNnGapXiMRrcviEmoqoXomyRqhmgAWw2iaeuPcX27M8kGMFaW44oXYeP1cdbWTbN6y6KqmqAKuS1",
  "key2": "533ssHSgia45onQpnVjmGV4nZCtji4dqhMronjGGZWck5wJVgwmq6Szm4A3mKRzrJgDeVP3CveL1bDuQdcTN8RzV",
  "key3": "4yNQnh2eEfiBDxhdicamc43purFd5ZPSHimXq9sqoqKkUrAe5e1wsLzb1uHjypHXodmkUcbupm2WytkyhMLt1go5",
  "key4": "348M1xd1DzSBF3SRYPEHqMMsuTaPnuciBBsBUyByeD6xoT7va9HBtRgzeBzfkbViy3f4afGxUeLqfERKsMnMGpst",
  "key5": "649wZ7nFQ63x3mg5gBdrJVaNJJFcb3CY5AjNDy23ty8oQnzsaAP8SXUakQfXGDMLJx1RHDYyBpHDPTpxGhvD5j5m",
  "key6": "5ooh9j2UU4Gh2n656MLnYCSdCGBrrZ1eqcX4ZsBXSeodjwjCfc3D8UsW8roE4zPRLYXo4BcbLTJfXuMiTZXspwu4",
  "key7": "495VvbxxvRVaC8GMNMZZev2afCdzAAAu6G14a9wWPiKwyhcyDT3HzsUytLyRZXMs2xbjSGKZASGS1RKVg6M5pDVe",
  "key8": "4gm8ZNEJ2ZS4Ks41KDccuVck3yGSEES6cRFx2XKVeBRCKCn3bJ6BNkRT9sRSmt7AyqCvVRSvPRxGYFdXR5hqqbZB",
  "key9": "62paL4aPhBZPhR6LM4vvBSd8XNeU69KwAYcojYqB3XiyK4aZVjAoWwABPBgYwD4HcdmN2PYnVKsNre11xTd2Xan8",
  "key10": "5vu7YEPXCaJhJLAzZJkYzSvif25UR1YdTEx1b6iDyDqcUiSYgdEFPsQgLSfx2wajhmdR1YDLUemaWvXun6qqgjLL",
  "key11": "3K8aN251uv31AFqF6KaJu9NkfCcoEv527StMcRhxMUU1nQiZk5cZ6WNsHFH5ejBmAyrh83W1JKFrKcSL7EyvGwxP",
  "key12": "q6vEGPh7Cfj2fj9MimisLZo49N8s6ZPps73Pw3c3gEttXBc94hq3F4YZQbyxMGBqBq2PdNLuB1TZeB1rfinZbqP",
  "key13": "3xheYDYHkHev7ZmKgonApdXDkekySAqCcoKfGkdGCR5T9tDDMKvMpLv2CVEqiK52p8YGrJmJRiHM3FyahnJJ4gut",
  "key14": "3LrkYo8eBHDFFbmzuAAZ7zrfFj9YYFgdDpibAXaVoHqJPxSLY58KB75nkFs8aGwXzyUKFwsCDt8asQGtAZ8Vibtm",
  "key15": "fWXyodxt4qzEqLiiShL3RPsTnwX6KbFWqhnjvqH7cMfpJZX49ynQVcwh7tvNC1s9tGhcyGezaBSVgWeAkmfmAuu",
  "key16": "5wesEoahkA1DF4BUs4NFgf1Zc2HJNeeYcFCy17AX411y921jJ2Gv5abRw1cXtt4MhfCJYbySr7bKYL73UbmKZ818",
  "key17": "QVLNvQm1yCkVc4N8ddhA7kDcY3vjLgXK157RoJPmedK1pfG5NZYq2NJcuiMvvgiF813BtRWLZBfonmwCAdFWejc",
  "key18": "4U7Go2iQaxLpJToQXB7uhuU1biywHQMuJ3K2pW83G6vEWjV1ZKf2bVZK3i4EK5whBGi7u7p2kYB9BrdX4V3CMCYX",
  "key19": "26U5KQ8N6ueZJunZgRGUyj7aQXjtUErrKToRUqxGd4Eeo1aYzL1oiT3URUfdyAboGJWt5cFhBL2xCAC1M2d1V46t",
  "key20": "2SFDoVpaaopir64oHKdiJKzF9q6QQkze9ZXEFrujx3F5NeUTEjEW2heQf4YxNpGiP786tcJC69k23dxGQMWon44h",
  "key21": "55mPi3uXsAZQeujDuk5pVqoABpJLPd8P8ZRkEXiCL8T6HM4C3E9ujsgiGKbbkaoNmqRnr4RJdYY69ZsCysMW4cz",
  "key22": "5dkVHg1kDQJE8yiTJB2uw5Zg5VgkvVDoNTDvt98XM1AE9jtfeJVgQjJTX58GJZdctj3tEnJN2pVhTLTrPDszKBL7",
  "key23": "2xDZ87fZ1cCoJ8SnY14KjQzqrCK2UBt2uVnKRh1N7RN3zxdnbS66HwtrnmZgRuFY5gNk4Yzi2ZNGhMf9oxzxwWqU",
  "key24": "2LjVjEFKVLcP5VuESRCGmN6DmmaffcwFYFHvvbogJAoPz2G96HmbwSkJTgv5D5TEHngDgRcvuLv2J6EFg2EyBiJ3",
  "key25": "3VxAwMTcBmgJVLiiAekLmz86GUwoaSYEfkyFm6YXjMmDfzC8M6XprNrvWZy7hnMvrGpHjWpwvWha4cpck1txDL8w"
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
