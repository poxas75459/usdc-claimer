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
    "3WR6HAx256uVmomkpuux9JEmbsuQMFL3n3iPe43bMvWAT6oyiXQ5yQiBZNCaFkPSC7twFWMWoH2Diuje6i215PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6gPmrMEeNKHebEJ8DJrMA8mVpFVwTc1vqyuLiUNaXzgMkButK7YwMDw8w1j3mriofG57Y8JhoXWgRjDttW5aZQ",
  "key1": "2jZNFktr8yu68J6UurWTWsEEP9wESrARDc7QC1ykSBdjPxdLQ5ZdS8DffRbeEExqL2KTgN9Ry3GBMfbPBUCZb2n5",
  "key2": "5Af12s3X6Lix3NWkCAQT9HxYksJCPMWvFm4YBCEpfpw6wNjVoB6jC9vW6aVBFVuEpdjuLXSekZqXXvtzAKoqt9bc",
  "key3": "2rc34oSzCFhd5qBioREZU2j5CPbVZyKppN5DnKSJLRwTN7GTjqR9sCjTDCdhBDW9nme5dcpnZqAZu1GGwQQz2Hj7",
  "key4": "5AaPtkzspfazB9XkeSeLsSz5JJz8LEjyq6bwbieqrDrEx4vc8h6Ek9JPSYm4jiVKoUwfeKPdxMb8995fMZBzNsbd",
  "key5": "5WnZgcnLKC8nwfgGp4sfzGz7WR2fe9y1P6A4HUaXUaTAJK7B3oznRzmLFNDWncWtM5LegNpD6Raerxwx7EgTdNAh",
  "key6": "4Vm7wjUSiiKZJZgBXkG6SwnHrhM6QbJSJiHzMcCKJNhNFtPEN4HpCBjDMmCPet38vNGTa4NP7ihUsFeeRHbCCGtf",
  "key7": "5FPHGN37HkkFFqJJanbKeu4KdJxQTt8ytjy6dFG5oQ3co1UNPG433t5X7Zj7sqLq4uUpcM6n51jih62RRoqN9Tcy",
  "key8": "2dyvyY8tWsjBwPzpsuasQcpWCAwyAqaoMR91L4SpBzpSkBAESoeaFGdXYrQ8p77U8z5CpJWkrXzvSfg2p3F6Rhno",
  "key9": "23NAho1u74yRUTbJ9BrNFj4x4nmnaEBgZ2qkHCEWbFnkGTqCCKPk9nEtTmZTQubUrs1XAgGeM6fqF8VXkYp9djx8",
  "key10": "4BkAsT5iHmbPEbPGXSLbDMLyfbELJRDPnM2fg3nKbHSqDnrT5AumLbWyoidTn5hvqaDYMY8Gu4SLnA8KnUSLS66F",
  "key11": "4n4jfaCNy9gxmpbTncZdHczAWEKHr5iGzphJNqLK5Ax1aVZwcef2CEBcfQZ5mrzZRTJKTPFRaQ4JhKzS7Qb5PJ6s",
  "key12": "4TzxkYRgeC1ANGmPi3vXVDpnkq3rnwQ3ix6jykMqJYPcJ5Mgb9QzVH2tWUzD7zha45T4VqY96TuyFK6k5GeczLbA",
  "key13": "3UdTPEgSxigcUvPRzTHaDXMvPxe79KQjD7geRqtVWg97tE8Fs1zErTCB5ZE5C7gQT68bhV8wYgin63n8D2VhE9hJ",
  "key14": "562Lg8KQJfjuWfFL6tqNA49KGS2R1VKjrxv1QZU7UfnQB8YpiZLG7HuTqMB7KrKNXXMxjPh7zigetqMgL4tr12Mt",
  "key15": "5zWKaFE6ryA5SMva5rxrGVx35KicXFz9oHJw7JkL1wkUuudB3TuZu5ugcAridQiS7VgJMDFY2zJfV56TkfKE1yRW",
  "key16": "3hgnGsParokq81Wg2z5rCsiNEVWG4jJaS731QCEWQvNYssoCzQdxJJmuoyhqtjuCAMXUDV2hHztMUrHUPTSg5nSg",
  "key17": "4X8Z6wBBQ8BiEY1CSvTQQqLHyoaKZJEGxCsR3eTgv8KEirSmB9aybSBJgUwqMfBEomaXSFvQxcr3b1Z9HgZ1XQuR",
  "key18": "4iXcNuhWKs8bFQ93R8VbEDoCdqWrjDcqYwhhbHzXiGFcGfoiyjYw7jND33V1gDd8bHRHyTyncJaBEMiRD7qpyTGs",
  "key19": "qdYRK4uaXkWXAsRfkoy6aNhMrxXmmWuYVPYvsF39NpiEq6rEPg6p7NexKLEcFmhw7vzj6t8nPdvmSwB2ym9sNEs",
  "key20": "29gxhiCE7w6xN2n9GLimdvpoRkTi8o4zoeJ6W758hNprLSV3dReVF35iLL6ctzvQf3PbyyGDstD4L2XevkAVmQVb",
  "key21": "23zBbzx9MvmMfgGQvfZ8gNBYUXvyqXquDZ71ffLqdkxZjkLmQEEyHqqeg71KEaaDByYejKQoqyqF3Xr1WUNBBbdQ",
  "key22": "2U8WSkpYyAhU5a6ZgCgou3Sgji4cdRRydpdgx3kBmdF84Vy6qosfhcEDU3oGbUZgSzmAUN6VfyXg2jQZZpj3AUCx",
  "key23": "5rV5DHu3w186HtLcNBoK3M1m8zn89Fy2mT55RsfB9a5VWx9opK1VxYtNnpLjTQ5gKNLauWY7omF5FPnowxAvsy51",
  "key24": "29KjGCAxVrtVYPovvcMb6iWpZ1LpmfBDTFoz4huSBK3DRQdKR4GpPC6aTeJEByfJmuDamyoGj396zCSEMxwEM2QQ",
  "key25": "W8b2fNZCNVAvZoqDwQnmH1oiXsDnJGwkwLxPH7xYJtDK15cCryQsf1uYyXqUyekfbPrM5YYf1Kr4hzYjET5s5uh",
  "key26": "233K85LkZXgkEYpUEz4qKma6WDSj6VTYgjEuWnPeiQjc6Q9ArW5up2RiAbVMtaGKnmoJU1EJsFBy381fqjunvdzu",
  "key27": "W1Qb5wu3B2phyrCVnK8VWBK8Bvx9YB1aTsAmykbVEhNF7kCeSgFbnmvS5BLSFnuSNnd2Cdopwgb8doEYxqvwXB9",
  "key28": "2ZDAVMq3bLwgkoZsKrZry5Fh1JCLE5k1jxLZt2yxms6MQZaTUvDtNJUy5oB65UNu9bryN82inCHJNqfy5qXxof5Z",
  "key29": "5tgC6MqTyrtFoL7xBGiHZdmC17SeXsWZiGX3ibzeCGveYh1rqy12ywg7XEtircJAhrfb7qsGeaSHuRpPLD3oJjKx"
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
