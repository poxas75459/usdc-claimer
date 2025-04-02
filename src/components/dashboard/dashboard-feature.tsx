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
    "NteEopTuaiEzum8Rc83Ac7ckQQ3NKtbw2htb3EZS7mhSuqLwu51ymD7TgrGTRCeXC2uMFfdBsW6PjhNUi6LEFe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PrYqmVV8trUwi8zWEuUua8YJx42GdjHbWmDCkqRe97HjCx1KGThySTLjHvJmFvGbQ2FXCTTpuEd1jWkANbLxcsk",
  "key1": "2iGdBcJwgCnAr5o8jghDTfq9nUEGPvS5ZsA5zm8LjpRYtGF6zRT8b2wzE667CdQQbvGwomEzcpFsitJBd1AvLUma",
  "key2": "2XsmSzBL4CGHuHknGQgK8KiX6NKdto1DeDfTJRqjFRV9QaZBWsBtVsxMzD5JayALVPyjqyZgVdRVLyCmdbWQ4NSd",
  "key3": "3EkUh83WpRgPywUc9wPZmN6JQanQraCq4bt8KAs3o19XTbWpqQg95RTFHTV2JstBPg787XRA8YfSa5CD9gUZKSiU",
  "key4": "LzPKzUBCQBvLFL7RVNYPEnS9Fw6Hp2XP1yYmL9sYjsGGTvhEALQ9WGrawnjeFSCp3r3w58Tk1AByki11X9Gf772",
  "key5": "2P9pJPFgrkuXLQtKZEr5Rgo7V2HELA7qXxD4KAYkz5B2WvRCHtYFiQpM1tCSEJLhtpTZRrMYm3b4NVdE6Cxu5JfE",
  "key6": "63MNifTXt89nBeLVz3oZN7dBqxnR3tZ6QCgQifPzN4aZKE4hD1wKnuTQ7pKzgmsf1oSx1n4qnrEsw58ck7XRMau4",
  "key7": "2EHPHjgiojg1vXbT5oLMPh6aJ2ExAwSkoL1vHPiYDxwGyfLL9HY7U4pcgmA1qnE5xZBTcrhay77rdhPQJPREZEvs",
  "key8": "otjL4EAJuMtzsZwAeByqvPtDvNMwMXxEUuDoH7tgVdwgtYt98P2QRcSZT3XBS3BvED3d5DYfeGyuQ3U7o5h53at",
  "key9": "5FqenccU8i1F8p27pEf1V4hqy8CYEgys7iGzk75JC3SRsa7H7SZ2fgHtNNUcNm72bR1GVo5vupMfYt9Ym9fEVoY8",
  "key10": "5kGcDSrk9QJ79EKHFBzLA436XQLdomvSdLSiZuGXsZ8LyiYqnGUBZjmEHB9Dbk25uPEBmAnB754g3uXHaqCdVicu",
  "key11": "576mimA4Wy9Aew7eEunA3Pkm6UTMRMu87wGz82595hDziYyya8PDy2Cw6EYRgEvR3MdpUxs5S9BicfZUTrYmcyzd",
  "key12": "4os11bQJ229nRdDmHVuABi2En9ztCxW2zgpmQoPxoz5K7Kq8r6EANcMKUxLfpvHzXwcZBXHGYMQHz3cBeQ4fN9Nr",
  "key13": "9sWALD8yKnnVum2rigNaAPuzHdE25o3aobdeF5RsaF6GURPN1UJxbDyvppdGxTZNdPdHKatAzZ47s7DJvA68ZqA",
  "key14": "5o1V1tikAT1mxXoN6ThDSqpE6U5uGMXvFDws8vF5jdzaRF7pNp29tcoihf7AWWFS2Pvd79dztnFk4JXER2BMhHNe",
  "key15": "4ft4cvHJHCNNEqLTLqMNGZGWuaG97X76XDrXdCA3A4cVWR3mW9ESfJQEj1N7ojcozMts5s25aLt5X9VNdXT3795L",
  "key16": "2kR5WLTBXm9xNu3Kq89RoFeZabkiYaFxLKFo9tCeZE5cpqm169m9TRbsr1sRgwUXjJjXEdvh7v1xCRv63c237WBF",
  "key17": "Sw5JSknKtcpnR8RgVrMHDmkU7DAk4yabkiC6uc6DaScf1vf3bPqZzYF2q8JJ1P1aMhEgWPZH7P9hLN1pq5vp86z",
  "key18": "2xsQJzt6XCLNQ8jxcKu6gxpJyeQimEVvHaw3Zwxqrq9bcquiojiThdFcqVF4mJToTaUEp9NEUjtM8f63UMunCmBK",
  "key19": "2Zzr7FhG1f1rw2xWqfeyAYwsFAvrEbhnL822fXEoEnia9bRNMy53QSjpvMFdYJJBmNwQSvAjSpKR8yhYos1PeE9K",
  "key20": "37oerpWpxgxqK3NqsocYP1iyVV69TF7ud542KPj756NbBwR8r7KrtQjXoXHyEmJ4vNAuX5ZZhBoFY7uCDPcaHCaq",
  "key21": "EZuAQ9FGKiGcAhMnApMvb8yPHBy9kG4KrdM9o9ABZuDsiiRVyCStd1c4HXwomRnYhfY3EtzdVvwAqvxVENAU9B6",
  "key22": "61nAW5fg3J3PiYF7Ni3SqmUaY6SCHGFtB1xKL9JoKRuTMcyCohenZ2DbRCEcAc9qyYkftsawnHFkWeNh3nAPHRRE",
  "key23": "Gn4ztGwLSPvNEZazzGoVWR5srFyyqscXDL8rLVR34b8kwurFYvymLkapxpe8WS6GncrVftDfuhDLgroR2pJvhFC",
  "key24": "2ihGWMGdCuJcoqBo9yASj5fjap7aqaHKkFWRBu48FovqnMvLTK5h2zh28NWXmU8Sxv8q3K7DbvqZX32MHjS3Um6t",
  "key25": "5UGU4wDqptdusf7VZXeCHsCen5fjZFAaeALDGs7dV1oiaX2gjZUoQe7n6gbhjodKnyh4jC1YdDsyiF566xoMM4bX",
  "key26": "ZUCzWhRAGBGd9vp2MjdW7qR9JUAMZRPdPSKVijbDGUCy9RvxRT7PQHt9C7ZEVy859zdqCf9SQ2FWk6VxZhPKCKr",
  "key27": "5LrXXhsbGNgikKwRgdJJiPM62Dv78hHUNzK1HrhTfCMJMsFj21NWFgPr2AHBgcD8uobBg7kq6mvhdoy94bU6iNcX",
  "key28": "5iA5uPxDpJJsUkbBdE7RzMiovnJywZwteFtKz8gAT84oqxKMVZte63Uf8Nja3pV7ZQGeXD3gYbt4aB6CiZkLizEE"
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
