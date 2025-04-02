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
    "3WVhBnaSygoSvTbXFZKo1hXQJBzjjhpYwVSq5Fd3zdZHXK5NfiUKxMGmyvjnCLND1jegwqoivnmvfUG8Z5zo943X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGTwthRscTvEn6gjJ58ycme4SseyNAGaBmLkWTso5N66KxwZu8Q26fpMGMnn9XBDxc4nsuAVZApyViAQdvg1DYP",
  "key1": "3NxjRVVjmZksmuPe86Caewfk12aUmkJJh1jYkJASr2KUF2tLQPQFtZy8srFPVD3TSoVYt9fT9m6Vudy5AU2kfzSu",
  "key2": "5brgEg47BPJdRJ92ppjhXirdBKx7BqmHMC73KoKsY6gd5wkCU3u11RLNSVRNNMuRobvoPaj1Q7EjC1mdbDnLt7Ga",
  "key3": "54y3uWciuyRrzNa7fSjpJLER36hGKwa3GXQkDgftYTDJEPNGBF5VSxQ8CurNmEvmVrgZU5EiTPnVKyjqkAHxYuBS",
  "key4": "5NoCpaJGmsBuju3K6VTDtQVUPyX5FSgKYxCeDhWZuZr952WmyzGimiyuTz7rxHYyDhNQT9QymBNrnNxWvGFWtXEG",
  "key5": "317a1upRFvAEv5Gu9jdydNX8qAGoeN6QL53rwEnU14X4AfsmbDzDDL7nMB2goQRFoTxzcD1Bo2DwNKzVv2vi4nT5",
  "key6": "3c9QvDVBwZdfNzvdoG4wrrDnzuw9X6SMEoyDy3a8tPxWcWfCNj25K7XcmCuNPADctnW5QasRJfRUyMoLX3T3sbx5",
  "key7": "5uxrJrsELduQYoBqbRniTdv6LXqWeyvXP4C34FJtbUSX89Qrm1QhGxBVGQfdwhZXaE4epxEC3neFBeMd1nk6XGks",
  "key8": "3KKWfJpigdP1YMRSZ9itM1jp3mbzM64qDdrj22wyX1T3pVxTXRcL3s5a4DatGc3b2Q69MnxEdUoqYrGvBuJUhKaN",
  "key9": "4P9HWGKVpErtzHUQFyEDHGVPPjwFAW4ERJPmKDEUDVY1TbUXMj9aWox3h23WzLJAtqgwL8h1ETP79qVHa1GNQvQs",
  "key10": "38qePfiYT8jykNrxPJwNb4ZoqnJrRVz2xTKDNNW66zCET5MMDLuJKqCSXmDX2w3mFNTP8bJdpM9Rfuu1cvPQAJE5",
  "key11": "4MQR1ozkrwKYiBJYyZ134rE84wQ53TRff9JzFZwEvgnbKTqjLhpeH7S73TgGBY8PHVRsH9N2GyZEpXSwxHWYC48u",
  "key12": "4q9m4WAuoAKenqaWKtvBzTXDVLhFsqon6ASFe7QLTUuKH8VcNzJruyAHakoj283MQX3Rzq41XWqViexrBJfuVmii",
  "key13": "2JbqCp8gS6vwweZxzpPQaKCYkpKLJgZ1danmfJ3FQy9GuFSMEJGWz9tYaHzQvbX9DYSm1gLnicRRtHWoGMmxTLzz",
  "key14": "3tNaUgjJJzMcD3ne2u9TMESE4kjHBCacSWbtpJ11YCvpWzzEefqx9zVnc5wAwiemmcQKRoMSAeR8o9ceyAKCqtt4",
  "key15": "4Nota1shCLcoZcvXJY3aQzSSPsCn8xkvK2Ba7beuSvnmEFuT14RP496d75YDV23CTgpiThFfEFBou8LyzSrPxsa3",
  "key16": "UGfcAC4AYCJfGhxjJLTZtZkDrXdf8FyZU4uXyd7w87yusWvofBjW7n6BBGPxkmMiz4Yrk53WbbAi5v1FMwrcqM8",
  "key17": "56Pzs7NyEYR64nZLSz7pCBXpzYjANS1xVSBvXnWugmDSHTKfHjLz1hFBoFE3mKNz7e1n8w2EcK4FjbxFQqJ9gHwK",
  "key18": "34qKshsqximx9kqM3puoNkm3XSGUighASMUDvdfDgmrY5XjNvGD2czJTWRSQ72urr8ttmURHhowyatemrwTCzaqf",
  "key19": "4EXEfdTLehgdhNb85ir8Kzki7SPmpQEr5onANUeSeiM7tMjiauB9AcvPobnJxi4Acz3cmmBy6adT1KxyCsKPDNDC",
  "key20": "4KDTgDZgFaoUQ2rgspKGhsCWeqrhGczx1cJ2CN6kCCqNaBMq23gosdrZ61TQCau1k4xmeNXcGwbbDXEbfau8rbo8",
  "key21": "2iWWxKN2GgC2FvzdXghy4oyrQDNSa4AbtKuV3xFsbrns5TM6y7cTC2V4n4iGMpVSFi1DEYrRnHcuicHbHbE2zGwR",
  "key22": "5e4qHneYCHWTyx4nTFpzJ6vg6Px4BLwpFL4PKJBdBR8jSuJhjVKZ7zbxQot7J4N8uGBi79wVfPDU34WtG8J1TNH2",
  "key23": "onwHKez16oA4MhP7NmHpfXXvCw3jAe29nkE7eXpLkGQNvpW63uwKykEFh2vLgdb9DdFhofCiCybTXcGLx5R3jUq",
  "key24": "4BEfPUpQtJevSpRD5D31dVWYiJJM9CehRVSUiGZfpuz6WMqEsi443VVNU3tvZLtD79kGYi7dQkqjTK6HwU3BcRaN",
  "key25": "wi4BZ7BkQ6XzMuF4HwiyXMm5rEob88qasC438Pp4SUvFZem2GzQTnLnhnB9VueYeZSnKbBochWznTNfEFuod4ky",
  "key26": "2eTvArGWf9jL9ANF4nJjQK2NKNaJ2A8dPwBjaaJD6pipi8rPBKhRNzBHH8CHe8cEspM6emagHR2pxKoRQp3feA5h",
  "key27": "4dTVqyrnLEyWYf6xXrrAmyXXLuo2WZmN44VG8FDoS7hRqfS5Ek1DPcZgsA4LyxoQa6HZXaUvn2ysrtesteiq4Fdo",
  "key28": "2yhMWAHT228FAyxVM9kUdbqfgR97rrmENafiBs82ArJwxjEi6qEau3Wgo4vXey6dipPpdvGeuiWNkpKAf7DdKbEn",
  "key29": "2i5qwF7Toz1DcteFsMSSYnyJVP8ErvwbyeCN5jsQDGLDNmCKwTdWmW9oxUQEH6cUFXWgbs81DKmp3ayMJKLffMJk",
  "key30": "2bxfgkddhCTTCqJfqvYMTmf7de3sYbU19YhfhEnmJbW29RBcjd1gBcAjs319w6fX4PpP7EKfMS9JGVoZ2fkRE7Ne",
  "key31": "2rjvNsP8KhRH5PgfnqkALaYEThawd8hLKAS1qyYAHM62jMdNqYhUJUosZnhPvrhTRWkNJUGB4ewJGGH4ravN6m9u",
  "key32": "5PDrpzr1k81Vses2rDuJtWVDEyagJjpbwEwC7HauYhyAaYgeX2tP14HvLHW7W5r8jGMoBiA77P6dTnpymdrqghSH",
  "key33": "MdXc9dGF7Vo7ayhsfSqPCJGGR8fmEX4gDCrdBSH7b8Tnvjpyg3K5FmSJc7Dp8BcB2sH8QQ7mzhk27KYJNwe3Y8T",
  "key34": "66PgWHqTuxPbZshYn8eKCHWAJK88HkBkxcGYPEgfpE58k2aK5vGDJb4H7ybgzZp9WDs75ccGm4xRoo4nNDCtKjw6",
  "key35": "5ogs7Qbmm6Yv9bfMjHSjK421GY8c5dL5kMPqhLq8n3FVqv6AHvQkCnfyw8JDajcTHS1poHDJj4Xy3Mdvck2HsjFQ",
  "key36": "2eU8HZpboNhMrzg9zV5PAQuNGpquM7dbPVsL6rNiCDvxDGzoRJfBRReVm2MqkowSkwvehr2EDD4pz8mSg4Kna8Lj",
  "key37": "U41zKgL1Nz4cmzSGNdkqGBMtv6yYFkLqkefqmPnnUCJPLfauCPezp3g3pi2UEdcx775joPXiNjSxMUDRvN65mFc",
  "key38": "5f8nGYQcUe2cNGfbbXqb9P3LgrLkL9fDdKRpjoWrSUxqkkokjBBvFKfJNv5vx2qn2qiAqBfwrVzL3tH3pmaLhNkP",
  "key39": "41J8tSVAaXnBXRs1edox6HSkNbGHmBMreRxuUEmDDysaEqTQCSujzn3rgXTK72LRqpBEuT5NLuoJzKohFfQ5wvUi",
  "key40": "5Ye2e1Jpz77ZSMDqDH6CQDNhNtcUv2XCYLnU3qxJcAixV2uw9orchtCWkDbetXY46ZcpsqAbPaH28pbYWSMSBzqW",
  "key41": "34huGTXgiSnbxDp42WKZCH7LEU8MiFPGv9GYQtAJrWcc9XeWMtn1JvTXJAF5g5vGBr4D1xohFTnjXhEAuCnot4iJ",
  "key42": "2ibHjcddUa5ch4Tom7EpJzadfoUH9FfgkEE96AF9E6zqTck5WivKASPKKMUCbduQKdcpJPwp2bmrS9pfH5cF1LFD",
  "key43": "42YDvAFKR445EQ3iDtyPhSXxr5Rh3fXNSkaGJHk3HUVXhm1NANexSvHHAM9S5d5aqHHhEWiiB44ZJCvu44nbhXA1",
  "key44": "2mKPTtCYunUHAwZkgwKfhukJDSn7cF1jyEP5eDmBmyRymA4exuRVA1mzxaoewr29zCnCRKMnGBNFSc1EN6R5Whs7",
  "key45": "WGw5ENDZVH4ntz8JGy226S5knHbAKh1SwfYo64eQ5WQqGqskAXdYWrahybh23BCKu85gSPRWYGBUbk6cqJzJmbk"
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
