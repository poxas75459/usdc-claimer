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
    "5ebQywLprcASC4F5MPatVUFQYjrACkKaSbA1hwz8Y6ZDqt5zX4bZaEPHBRJzUkv9K4znWw6YgQ24qD7fTj6tyVmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BTJWirn3Sv9wfNcHaNmzMRptPXhVph9ptrfFquwAKcVanoanzpmHAu5JrcXN6eJw6N9w6mAjQACi4iqUjvKXDWr",
  "key1": "45NLYhvxJCYRacTwJvkTq1zcxf4JVeYGiK2HGhUT3MC4dUUEtQmQHBCe6o3VUd79MvKBmsZhQLnUbMXVikRfydLi",
  "key2": "2wgMheuAAghRGBppzCyUNRH2HE3WwpwM6zFd5jt8ag9j1iesoUf1TAfs2AiSS1SW8uMriWCDyDtsPQ4okyP9wC5Q",
  "key3": "5kEQnQ1czZmW937fmdYmogNin1ypn8fX47QFD8NQY1KtGFjNSJLnZiYBhX75Cj5AN7pBDe2cAQYFj3Vb1iW4AZV7",
  "key4": "56ZTuGN9au8DrQDwSsyJsxn7JPmiYvLZUri7xXVG4bRmG46ztuynAg8FJfGd91mq7norzear57LQRPtXW8W3PLKJ",
  "key5": "54g6jxRXAL2XCZ3DZJd1rh6aSPUvDj1FdUafMA4mgqHxe5Eu9bDU6kULqQdgQ3CpZubzaaWkPSTjguhYtgbb1raA",
  "key6": "QAcTCqnhMKmy6TU3GzvCY8YvXA25e7B7JbqGMoMi5TS16dwHcFHm2HbAvReJWmEXBX9kKdPvGv6JUsekuutwML7",
  "key7": "2SWpAcm3dusVQj2v3GAgQxw5KiRSytq2kuGHK4b2wYkPk9hJEWHKRhnJfnusZWNxcYWcKMGKdCYfoZEtpiXg5qeo",
  "key8": "3xzwXSwGnKiAcPCgoA9pz2Zj8d84DZRUEkyKPNr1ac7MSwbPajrLo3PK9QqKWgVfRx9gLryH3MaxfhfyeuTK3jHa",
  "key9": "38Y2kkUBeaZhriBjeCENjsb2QDpkmW51dHgc4kG9AXsUiDTYoxdEZ763reUnAiKUiZnLmtf2W9LjDTUJNnmhN9Ru",
  "key10": "34A8vowbwYWBJsP1sYjhpTEnotVNUCJLUbLTxc2aXZYs9vZTLmZ9LLHfHa66BdbwuEhiqum527vNJZHcjiJMkc9W",
  "key11": "3utHBpgBXrVo45JdGDFGCPWRWXqwczUuH6NLhvDcDqb4tJScgexZbA5M7ZgmiAw4tPktEWtqfPZvY5BTBbUjM4WX",
  "key12": "2pDtkoTCxNYZ3rVDaxh2GoSkeknaza3jHkirZPLmQoQMrgbJPzmRZskS1YQKrhif8B1UYjsgGEsZKv2y7p9vcXUb",
  "key13": "iC1obUBbC4QVzapKsjP1Btot8QLdHzfZBJ5stBUBuBJS7YoBgnJaYdgX3RPxZ8rvPbfgXqMLiMVvdNM2SA7SNtF",
  "key14": "5XGpe2GEoYn5FcJecVcLdq9P86C5uPaa2SkR7p7xonvNjoctpMDZfB2UVQPuiL6kJC1cBA9U5acgn7aDNKbFQfF3",
  "key15": "xbeCn3q3egfRVxvVmAsm9XvsWBpdDxEV5QLt3YmTKSK9LJQc4TDcHGDhJJWWs5FNA25gcBVMmTudrEEwfKhRcdY",
  "key16": "4szLGXx5SPwkS8BtdrBvtry5Kw6EqSeuDownPUKWS7nVfjtPmGAuys7fb8itwUnxbbtNZFvXR6JU4VyzHc7BeEd7",
  "key17": "5sZYJTHWt89MMMxtcZYandU5qysxiGanAUhGDHb7yGsG8ByyPXqB18tNmmPb9SYJqtE11GUwtkw5GFVoD71JCftC",
  "key18": "4d6BLc4PGpazfVuiN6PZ1bb2EuJD3VyCNt32KuJUhr2M838dLSwdq4Yx5giYyDtdXpEekyPCty3a9WRNTjGxrNji",
  "key19": "2SHxUE3ihVoTJTgahhi9tdgi8VVyz8f4YfHZqM6CU2WJSwmWb6vGaf3oHnj35FwR53DKLghWPe2S4o6rwoBtZwjv",
  "key20": "5MZQRXnGkVBm5n62bs3bwUXDFzW1pi8oV1oio3kH26MkVkUr9as1gv9LBmtuiEhjjz52pWQ43Fn3xtD9R9fgQHu5",
  "key21": "4mwEziimvm638FRxYHzGgBVBLkRyZtjYn8yJxvP9x3E7NdQbwnSsZikoUit9yhXgMzvZ7j1hhKF4i1fa73Hfms6x",
  "key22": "5KQEETwm2NHMFoSfPsEYMuHRsrxY64ePDBGgrvhwYUihmgFND2u1fKj7pc2BYz4HBG7HtnwNr2gD1L9mA1q9n8tW",
  "key23": "5wXcgTbaR9owa2gF1jsV6p64VRobiYPNEJis4gL9SJbLTyEs3x233hBLQMCXbduXpy6jLgf867VwA5z7fdfSaySb",
  "key24": "3Pqh2Q33hKqoPn4GeAVuYbLuHt5dedhRWNvHtw9wTJmmgtpVcWdr9Wrg1EzpjJTSb46gFzHqVknygaRxJ9pTiLi9",
  "key25": "4LQneYxyUScRWzfr9dV7VLmN142FSxbsA72WMffwqVeRNhELTdnW1x2JsEegNNLx11ANZBjWxc3qz41JyCic3cKs",
  "key26": "4EjAQyuJ6tnc5qUy25AQW3TrTiyA4iR4JGRH92S6HSHeeUHGuNLUKndQFDVbYA79Wrbo8H8uTXP3DSfkdBwJrWa2",
  "key27": "5VLxYzZ1jmmG5P63i69aYDbtBF31uaMyb5zoeUh1PVfg6zhcQ6TrRwtTz6D5UKegJqxfFup4wXyeWkW3aGp5u2zX",
  "key28": "48QCaWqjtduUCFBtr6XF2GymphBZTC8BmTvZYvPDRSoKytT6iaYvTA1uuoz6jtubQk1Mfw1Ww1uGziJyX6BRJUBi",
  "key29": "5cAtrsatqpppjfqXDUgjWDevkaV3U8fbjS9r8Utoh8KHDNwVRigcUZZGgkn9mJTBbJsyea7emXAeWCnjYMtU2s4h",
  "key30": "4D466i8Gs9TuUBrXBaMe1dySwHPHQg9Ab1F4cmUj5DpJETpbCZSN6hjZ31mZM81urtvoANEQZF7CQjbTvzjvUgPB",
  "key31": "67qufoVc5Nzi74Cago1oFvYrXTKynapmyWKi6ar5HY8kuv8UTyc4qjuLkNz2r1VqdmUFom1d55yArXDr3HAyEa9X",
  "key32": "4o6qsTgsSaqrjogYqg4i3oS9FQBbbKfFRPhP6UeFeJgJeNex4HCWHiANMsAZtZfigfcn4eZxeYXPk7ngkgbT6pEg",
  "key33": "3XvX84KsWpWZghJdy7iWjtxLTtvpQbEAwMzde4NiRAdZf26e2C43jTcwdHQJBRfcb2Jh9GXpufmhGd64TFx5dFr2",
  "key34": "5QFds5gCYHtPjVQCK1Md6uc41XWPU4wLK1SPUKew3PHbxEnAiKLjtxmHQ95pvdWGoUtM4YtP4yJcuNvLMpnMe21t",
  "key35": "27YHk65zzwaWBZ2p2zXB55BGZyBbDuLLZ65ToMKeyFFKN2wGeTWyLmU6iPYtndemTQaNaaPMpFx1o2DTFVoXLVXa",
  "key36": "3nAw6BeSawLgkccxHhK241aoYihnkBZSCnVMR1FkKLUb4PNZHqWaW5kewEEMuKQVoH3RS6B6YZ4WNSjYbQhbjZe3",
  "key37": "5xdL4u2kb2T2aEZSipjECMWur97G51FdQebA4Gmw734xiWJi7jw4iQ9FftYqfA5vmRYhn5LpX8UcvtDMULB2qGJq",
  "key38": "4byktRQvJupC8J9akzY7osfTkQganvhbbrQn6cK1gbMmkLuQdyAjs3vQUY2te2g3ggqbP5DnurySWN6mDv85apoG",
  "key39": "24hkf75mt2tKMm6jFU7LWJp3YY5a4ck9AzcN1xf2nseDXvyLUSRMPjAYRM8VVeAynD1ZeEjALjTYyDu8MZwkix88",
  "key40": "32zT8Xe3FjsnNymqknHsYjt4A3mZAWBN8gFVt8gX3iQAZZtxw1Fj7xtV6htmjGPWRYw7HUoUAy6AkF5Hjb9cJrjD",
  "key41": "39dtgLwd5mQVHwGLHd5iz46VdG2X2HBJNhLNto59FtGidrgYhLD53jQVKojasgZACPsfYxnJLrEUgvZi8u9hWruh"
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
