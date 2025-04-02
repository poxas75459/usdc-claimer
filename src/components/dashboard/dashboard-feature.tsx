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
    "63BFEFCx48uxcba1NtiG7cM4MMyjy85n4xhbbbdCiS1QEnasAMKVDqSUnpLtDTaLTQnJyAmGxgjKe39dWqyty8uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FzfztSwHymW6PHbqUBvzQytX3zNCNaYiZ4Hxdm5dRRDXHgBe8qFT1TfNizQfvcgEdAYppdRjVp3Dy1UYCMAo9Ue",
  "key1": "3RgiFAop6VFmEjG3PETHU8RMDFZkrVuQUBWzW8hcCrT2nq6uViMmpmqwJo82it5qgWgu99ykwL9X3YyKucg4Xe7r",
  "key2": "25JrBiyCDy468dYBTFjm6rvWwCVx4X4n2V4ezPpoczUg6u1MyPWNdmzyuiPP4fJ4y2QWEBTeGMbCpKLQp3zUnyD6",
  "key3": "5gTVBRMfua5Seo3X3FZi6HEWiqfqLmztDiZCcvVvspy9vLRgUd9u3biDQSzD7f72BaADC3HgxS7tfKg3yuoVqJh7",
  "key4": "ptS5WmHAvNdmVA6QYUHDD9oDdjx7eW1LX5EiNcoQwer2aexP6FmdcFLB9sy7yufyGyLTrqhGXpAu7vQdjMTexag",
  "key5": "pWZzKznk6uLQjbJbZn9BMCyJe2CxnnkwfXYCBNDonxs3a18Cr14HS9cdp318vcRobXDucZsEnaVWubEonnoPJYu",
  "key6": "NG8W9tYAHwCiNN8p1tUmbooCBRnzChBqdDom1oVoqStv6JBFuSzfEmhLT1vszpRYm2iEeuUsUy4grXk6jfskcKC",
  "key7": "3eZkab6uV1HatCgy5eLq5wfEhaDJiJkDKifGS5YmZ1k2E2fBgC3kkNZo2XuitToie23rhbGWHa1RoJYrEeVSt2GF",
  "key8": "67MJdw42YENVuNJqgVwGhoa6FXmPHqhdYxsUnCg1PoSkKut8PU6t8187zabAVUASkFdejUXEYUjhcyj3SSkMvQUG",
  "key9": "5yKFzJQz3rkJswHxBLQ1EaxzRfGSiH4ZtoCBwYt6L7DK2jDziDsts7fURzBML3huocTrQ2WK1qxP848X3LmeX8NA",
  "key10": "Z1wW4jn4jrAfhsCsdMjAekJ4tcLH6YjwpvDRRhXKDY7GKFgs4gXJ5u1JBzNsPoUSohZTqwy3xYqEs6845PXEbBe",
  "key11": "mrrwmrKzmVbD78NGk9Evnj1f17uqZ4XAgnJVwp6av6HApcAUR6Nfz7MHfBpLsatkUBMrMH2To2Gnb6LNkYMFgiU",
  "key12": "3BMNLcr5pCdSQx63vkwEBnZptxfZ8wBTkne1WDCLYwha4BmaHG8kNF1bEYnxnw4twEYW8RJxbzXZjnEt5EmCZfSt",
  "key13": "2bTUztQbcbF5iS3AE4rbbRWHGh72wvhV5ev8feS1jCSvk3q65whBPw72To4J7zK3hHwxnk6xzcU8vSpipGopgaRR",
  "key14": "5AW8c5ghBUJrczTjikX8N6bfiF1xQpSFEctgxS4P61vXTY9Kz1HLiN9CFmycKASoeX4LW1rTFWLkvBrnJvtYcixU",
  "key15": "KcDgErHsP4UeUjeeJ6XGL4pTbnyMDReSUVmyPM6nWx33bBds1vNFHfnynN8Ld9XXKh7DfGJBrt6GDnGEC9RWXLx",
  "key16": "63oYjx1ppHnfjoGw9u4iPRVKyjUxqWczXcN9yjiJHHuy5yqqQsjK8xFVfCMzGmdaRc5hjg8mudu8MrNrZUJB64FE",
  "key17": "5mSAr5mb2ng68iMPBkMiQM4gikRT7bFj59B7dBTPQ1bwW81zewQgscLFz7tpc9KqbQsSwTo8YYgHS6pbknofJYLC",
  "key18": "rJZGwAeuMoK7pA7hYWd32nMfrwdCAdtAgPPErRie6iqqVU3PN79KQJXCMLawPm2wPdTKpxyCQ5oKsqHaQzYkfSn",
  "key19": "58nysW6dpmugsbhLfBkGPLS8CebnhrRWZcRwCRDxDiFBc857QtGWvigphBwC1tZwBbeXebXCYVVNbLPNuZVPwemK",
  "key20": "2T9rcc3MAHrv632NZqSu8ivYRCcQXEfrot58nngFVLMqsEob1SZ3EJv6V2RSFgUPEGMgy8qN4zGAaYuHgRfb9oXf",
  "key21": "5bWjzVYpKt9xd3T6kDHnoThwv3WpE9L3T8YU4Uj5Gvm9Y1HUVP8GHCe9WPAnSwmkY7uryNDSXz6QErkU4rzWm3w",
  "key22": "5rsyiVsWh7U16nPLuBcictW9u76t7jJVee4dYuiTGjs9FbQUzHnx7xDy1BPUTojf2BS91HG61jcdVWPpF9TbFogk",
  "key23": "3AHM185YKp6zccnPPHVj5LKgKiQ5x2pbPRN26X1naTPZCZwXpADqQgDvbirN5TAPW4HqVPAvAjQPX1QXaSxfkELr",
  "key24": "2SwCD6AP3BufwZ6r3w9u1derQjYWgUbPyYRg1LX5UfbyNLVD9rVA21JeoYAJisNxHbQB89ChBseyRmBG67iv569",
  "key25": "2Jeyt6JUuYRcUCEJwnoznzrcJogWHJgAGoXoVEzQWZPYrAMgaCLUAc8vWwzXSq1LgzQ5S6qeqHQzDocfyuDkdaXo",
  "key26": "4BLpqojsQnsAooiqmrYdKcjxoFVpx5BF4JLBySqtrpfRVaUUuaem9aBMqrYF4YUFFZg84Cz2MxjfQbUewGp89PUT",
  "key27": "4SGyQchBPGQVs7KRH5kYbEg8CPZeA5FQWQCpw6XreKUN8gRPLz7JAQJfpMCr8rAPjWDdqK8NBBSwrvT2SmCFgVYP",
  "key28": "64LRkYA6SswJk9ZypGZYKPpx1EYrm91m6PkjYu4mQNYD8tvq7eZxyVP4qQVhZjUck9MTNpoFgoES3emw8xAUjiYd"
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
