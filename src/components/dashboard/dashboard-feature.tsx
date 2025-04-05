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
    "5o2SQcaRkFKBncmNk8DSBexbcfZ2EhdFnaMKSgwyJUfffhUVL8fp2LPVcxfpe7AADLHDcRVuvbN5S7tvrbim51wT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wrSUr3rfvFcbxEDEWDuwc68x4nhQt9yebPBeA3ahqi2oabMkaVYGuPZnZ6wZfW4Yeprh1bjyCtQGGPu9umnXaYu",
  "key1": "3Lw96LrfU2vuJxActDp668yNoVqddGzeSq2xjenMxmvnoNVhJaim2wbAcPDwmcR4XLLa6niN5N8dDG6MmA6fkmWy",
  "key2": "3tmSKPXJFrPUJKXQdFMHLhv2NL6JDQat8YeBjo9Mzqa8ZdhxnjrvDnCLdMqmKkD1FsHUtYuhaMxjNHfoYzb6SPBp",
  "key3": "3eJegBjG7K76gcujxE7YdtLPBxeAUmUUzEnZcCyEpgwt2jWVnARgZzzH5KNVkz9UXhT4viZLEsPaYPkpccmGWVJN",
  "key4": "4pYdrD4MT6Hsad6LELVVswxEVNL6PNJwX1CLrsbAe2X9sWNpThmgPCHZqKqVb74kHMVTwKgXRmTTHEBYxV3BtWoV",
  "key5": "vBjFixWY9rourXCn5a8WMd4eXK3tt77HsBRySNMXgsc9WXCHWtaBrKKaT6ZRd5QS2bZCpkV5XHojGzmJvv2PQVm",
  "key6": "3Hc9sz9wQMCbJ6rpK513Ahk7BYjWDnowLkueWakHLN47soKdHEnJiPox8G3h64smgHqwPa2BY2FQYChQiRsCH1Tg",
  "key7": "56bhrRrmcsRnjYJpx9XcZ26V2BLhiwa4Ak2KYrnomMUXrxffJ9NwQkY8MEE1UtFrp4t5UAwB9Z5r5EQPXR4qmvEs",
  "key8": "2jbDsPnbpuCWHfr2kdTDTf88HGv3HqSXYAyzzrRnn1QFvhfdPQ5f4zDGMYFnXm7SyxVJPu5AVpQdFzdvi1gChgsZ",
  "key9": "55u2MkuUF1dNyk5oScMe1oFnR3xbP9TbSxHSth958r8xGdiCPx6eEu5ufNrPJp4RaRK5stR2m8HEs71Z7WCrdUJC",
  "key10": "5vMrg6mJpUXUvUyJ9qAzMCUgSpQJCdWx7DqKpmMV3cYsgahj7mEcophdBQVYeHg9KxWfTv4aEmNwib7kXSKKAZ9L",
  "key11": "HNq2u7T6cZf5S39S9Yp3SYTTQinQD25hSem3QeWQv8YinwAJcVTdxMbdDuj27vGzQyfYGpDZ7ByTY5xECwGm5TQ",
  "key12": "2u9scKkTpqXEv3B6zJSoeAbcMkY4xFB2o5JYHa3DdshxdXU26SRZnwTmjVakGQoTCLXMxgq4YuZYc3zUeZJy3qvj",
  "key13": "4jERmcAGKs5WzJjXs7VsVsvdmHEF9TNkYEK9PzybFjKpMftYZ1g6ujfoP8Ddx2HapkrxU7FzP7oCi2J4TEJk4mte",
  "key14": "2tWyqXvnSaUygEfg4RdXREzyqaEkWFNFmyfnBDMPWNQKw9c4Q4vg3cUkXYtU9UuMyYuHyCLuze5o6TgtysTnw2Ad",
  "key15": "fgdi47Rs23KsKv7UhSPYVHctr72j4ZQh1Fg6Uw6eZZqvjBhjZvqY6SJmMXHbKKNuQstbJYC4eukqs1zhB1AGJK9",
  "key16": "nzT6BeNdLZNNJpLnmw231Wu9qwvSMDANwrkdHc9eavLHZueXw24VznX3dqM9vCE8D185wt27RndHgd3W5LCvvUD",
  "key17": "2immVmvYyfJEFYE3vhDiFiMeMN5q1xEuJuh6Mxon2jiCT6arqd4qzj5eXj9Zea3X6PpwcWCHLD7jNt2562sAuUcK",
  "key18": "2A2Gf56tjG2e2tckbyoTKqCmCWbvKjFBwiSigehndraZx7YNk5UutzX68ZEUsC24tTC6tTQvNsHA3EEeXryACc4g",
  "key19": "47vpVoSreRiGZdHjtX2aHeP1GAz7ZNdQwSRDiDCAKoQH3CYwcxP2GHueiZWjRxyGQ7JAptaKijNMudje7q3DT3Jv",
  "key20": "5CvShg4LRHQxzrViwTZMapvNsxuqCgYZvCstk6zLj6oe96UJhB3eAgjMgamnpNXPRqxtDh3CrWW2THjYTuhLtvUS",
  "key21": "5xMcrwcEWyPD4rtrVUXhDTQFrZ2nMMuVBTVhWMh7yDDiNqrLaRUW5cVH6Dej9JweSXuh2yYdx7eTh7c33FXxCGEi",
  "key22": "2Y5xUWs2MSfFpZMjABjNFuGD4NX3pJxedwFmwqqfYo7U5X2UAnewYzLJLBPkTRR9aEJXypwKbQHybVeeoQeZ824g",
  "key23": "2ccG7WhaKbcVPtiXmfknuMpFsqFZ4QnXLxtTDeft9soizBsXyTU2C9ASZYY2Yz1LtmQFpt9MVUoqQpUGfED47ACs",
  "key24": "4TYdJ3iwxeFtZ4jAnxPTweuMVuLkcUyfkseTBtXMhxJTtM8vM7hHkFvro8XCnykcUZNocp4qdrHLzWzEe5u4ULFG",
  "key25": "5fTKjvtdLYnhxfnk7cFoPbg24uzVMt2GyRnAXCNFGMdZ7jGfJWfd1twTsUnvGTAcTXCnEjrAeqADp6waR8Rv1pKb",
  "key26": "2XoLovCadKUFQgXDdGcvNjqFXAyoRkXWruCMz32D1MPDreqGAT5WRRWT52Q75vwAwrR6SUHRaUSLCLAnPMy9G5V2",
  "key27": "meQnDNSQAVMf5RyVK8xLoi8wpN3cYBLNZQQ6R1XHWzFhxzs7U2JheefqosTUfHV3gqokbdkptizHJo1zTMMJo2P",
  "key28": "277RBVhx5874yTVNNo3jjGwWXA3VhUNyzBjhF3B5Cowcn1qsXCkCmdJ4PPtHatbvMseBzJLmgBUJ1axAo2578bVg",
  "key29": "JyN4MJJwVfk6EP7UNWevsGHT5wJ4et9qceXTZxhZ2UrowFCJZQyBYfk96ha1f42MHXP39zDNa8CZT7aAjhyyKzc",
  "key30": "3ZaQ1LthBf161uSfXLSSWJTNbcmCUDeRNX1X2WJpkfQFiibBGRuawt8m2rKudrrJ9v1uxMFzMjsHBMNDv6F7Xsny",
  "key31": "2GMNSc3rzscycoCK45QYUsrXh8VvDavJqrA7HFfyR9cVRDxJDa9VSVNwaaDAfVNJG4wpx62wR3RzXiXsJWGAvSYM",
  "key32": "32vM1c316qtQcMH1HMpwTaZt4aS73nuwDD2SSBgrDE7o75cyvgDTjrDp82xotNdTQe3Nx5SVmv2uXQduWWBBsvud",
  "key33": "3u9gy5j3As1ZPKk9P5H7BPAiwinweGfhUBaJZo65SEtbEwuP3V3CwVeukWExsYdk9MnNmv28y6fy5hzufFE97MJY",
  "key34": "2cv1s27xccxxhtyaxyzEyma4sp1fmUwW4HvSrkU5tG2fiWYZMNvvyJZsQK2B4avaisPxQxxMGhFb6GrBkbxdGB7J",
  "key35": "iiYv7JhgQeXGG6xxSXpCQBk9c4DDjsAgaNBUVHHSBQWCZwXspbXc7hE5hgeB4ssHt6kFZJa2dAZ5c8JHKwgNgXN",
  "key36": "mabkXbNoJkKR9eRtGdetwfV5mSbj29CQ7BF2L2eMzS4PhqaQYqMvuDJm2b74gAgkcNDwRjsn7bzRBVDdP3L9ngc",
  "key37": "5x9fehVL5hdu7Y5FLEgUEjYdj9ygmUr8ZNFiaohPpQDZss5afKPNFFWwvfqP7q9VUXJpDspuqV9RUFJxxyU6CMb5",
  "key38": "QYkmareyswL3yG9HyfEnAeFcA5PA3WVn8umb7gbH2TWcyfNQyRuWP3VeJCD9LcH7ov3yr6N7QooDK4ZVS2KVmvw"
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
