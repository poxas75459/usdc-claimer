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
    "JC7W9bG2houX7aVKgk8ERNt3WVsiyW76i4iNvRQYQHFU2nRYyywixQLxRBDQxahkoBuFoj2d1kcPgMkT2Ej8C9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qYoopKD89N3USjCzG1dgiJoFb53UXWH9JnZQuJSH3jazWj253yScLhSYwi4np1pAZ7WGZEQck9Z7u2BKcd9dSQ",
  "key1": "5C52HACaCh17KUTappanJ4YKbpymVe2txomMhmbn4H81wXXypVQL2Jjscc7WUexQpwsDjn36QfeMGrxmktdSeMgQ",
  "key2": "4SVEeeSvcpLQxH2xiRkwkGkiBQYo8BtkLPDhrmzkiodBP57AJDm3Vma3V2kAhqk3T41QtgkCLh7P7yrUPBfXfbZ",
  "key3": "2vNV2LExy2dc1wYMj83Gzjxnwi2dXDm9MXQ7MuFa4bo1XpACMWWLyiiCtRRQ6nPTpfQAiNodeHscdJrhSgFnPB4e",
  "key4": "3iMjNKdc9FhC7cYtLBk2eqVRHuYMPAEuoun8ognac7gKpaHsisiPze1nPKCssvjsVNNewNb5LAdjwctqs7Yo743z",
  "key5": "3orHacZfwGFgMRHoYzWZUcrRsnZP55EkDYvZUWdZwrjA9R165Q8EYib6ryhUTagjoDwjHrMyRVcqLgWr5gZ4HZT",
  "key6": "2oZZREuC5asuyDaUTcwPFrwi2RepniUFCiYfsk7Ryj1sSFeGmqcT3GAxzKjPh5gn464XmYFmzDrfdKkLVaCF2Xcp",
  "key7": "2JTtBvoisJ8QHZ2FGmSvAtLQ6b2MV2VEiB5ZXsVB6n33XetxJQUqAk5jF7sfRrh2Uu4Sm6kVYyrowBkfb8YA7LZe",
  "key8": "2ckibfzih8Je5N4eVAtoZCjTZbDcMXgwQ73QidFrR9QzNriYxNsTBZUNGypxygior73FGfFkvgSWL8KH6Ne3zs8c",
  "key9": "4j8qGoTEhnvG1VU76P5EaJgbpXhhkRP7sRpkfMAcMfm6Q4CcNbQMWhYjMT9GByYuYwQaz2AU1rPpAdSFXRwVpr8a",
  "key10": "5ECzvwkqYHxVQb68s5fJNNa96vtmF9TPbpy2XuMUn9KHnbmHBEgDkSx98vWgLfNSqx7rHV1NQASceyKcS4YYMZGW",
  "key11": "YDEjuvT2wuxyfWJRRqCyeyQV3bcydSAfRhPDutp2pifYWSf9x4KixAYJcDDyhwNqWSgRaq6uymUt5zxqGSTm7f8",
  "key12": "3aZqubr5X3tSgx6VVApBz8RETAjcHAQpUMvPUjMLuUCMPgfNTEeiBLyXpsyRBBw3kPDsPDngSFv1YahW6K6L3H1n",
  "key13": "yCL8EH2MMqkPbfmzybANuxVXEFGa42QGoS3ApoeGwtTXUqoLe8yfvzk8H9xkquRf1nnPTYsRtGa6i84NWfYWS18",
  "key14": "5WA3JACHm3bhGsi3CJ2WQxoMms8WNetf9LCAhvBcgo4Jnnmy9qeQd2RqxruTX2kKVWCBX1XpHvNTF8CMS9WY9Psa",
  "key15": "5VnzY3GUvfEYBrrnDoayQ3jbFabxBVvSvgNWEsnXt1kZiZwzfcAimbe1A7iNuk3PEW5AiU2ZHvFYmejnkswu1o2a",
  "key16": "EFMVteozRYVtFMABT2R878P6ghAfv3LA2nBVxKy9348csAEyiLVSwHBd2k9FvPnCug31beCqoBg7t2FTf22s1yB",
  "key17": "UNJbX3risw4VUdDiWdTqPyQrrUdjQeHhWm1SRKVq5fZYnL4zvLZWGxMc4pfaYjNEdN6cKa86EfQM4JTxvFqggMm",
  "key18": "2d1wor7Zdrv1nyhXzH5w2cB1hCCNDeVMrqmaVRgDCCb6kfLSY9g3DJgfCA4vEwfLCj1tAPJQ2UFBrKQPXeACwd7c",
  "key19": "2UvKw5CxSjJSP47Fpe873kEpWNkvYBtg38cPcKympTxpXWF6razdM4pEjYrd5jDfpfirCRdceGacx2hkqoBVdcz9",
  "key20": "G3iCbt7kbwPtH94Wuij4MWtLNK6TTXpNxZL2uKTAyJwK3HRKZswb88wfAt8ZnVtvM3qMDD42Qb5J23fP7MdF79r",
  "key21": "2YyjBmxAKwp3RQAwb6ASekRBaG6rXRdciqzLXbXyQX4ov1M8vVtkBQL8anBgWBnjqVVxfg4ZCVjBsLS7JjTVzhmh",
  "key22": "26h7mAYJmUJ5DQHmjp34ukAqiTXivyKMXR5K7uv3gTNb9LQNTiKDd9D3uL6mH4A1jJeaBZ6J49u8EcpwvyjXXGEU",
  "key23": "49WzJnKu89W8y1kqjSwWHYhziznXz8TJFmsfQ35C2Hb67aZ7U8jtpSMB5fRwXUXhhXAMDo57BfqXBEbD43SRmTQ7",
  "key24": "2tyiSj2jbrTQSyCBnPwstt8aGUkPCPVffh44CwogP6USLbBiHHMAEZrcTCa9vKrthn9evdabqCKqr9Wm4gU5RMk2",
  "key25": "2fpmiYQYAGxUuyXufKy9Hr71a8vsGBhMXDLR87y9HYVDmk97r1ShQU1QSkZUysLX91A87oEFzSgorR4rMN4HAB9c",
  "key26": "5K2pckhUK3H7KdSy4S4Wu5Xdwu3HGF6xqVUGRJ78PC1FGdKYTavG5DUx4T8eGyGVqQduALsTujuBEYtxZiGdZMja",
  "key27": "3Es6w84RuzSbSCJEYjwYm9EkHUEjrFi4ReAktwT1TCoucy3K9VkTavFKEPF9bfEfXreAHUJDyNBtiyB8tdZQyL9k",
  "key28": "25fkchy4XLPKGc1oSaAT9cM9oZNJuCumhKdbK2Na6BWiNnJ1bVR8XnW5e4eGNAtRESTQBn8qP4v8Gzyj86vf5A5Q",
  "key29": "3cYRVdv76CDVUeYdDQvsoR9Gqb9MxSZLHE3Z3FEmhPuNGBhZVzs7mj3rWyThAxMBn6ceY74DLkEqeHfZ6CRUW9Vp",
  "key30": "2Fju5pq4XswY9XCn31ftDUodsQmvZ4broBf7o7BtYC226t4192BGYcbF1arup2DEApECwqQHkjDoZhVjMX8c9hPt",
  "key31": "2d2KeTdtEYASvDi46r99zTpMRBFxoKqsvzceBddvqxJAeDAchJyUCk4S5GBoKDxAx888NHV41H458wkxTAAwS1R6",
  "key32": "4tzwahninxm53S8vs5XfDRbsLsd5P5xvBNYqwBdxAt6giLXmGTdsjrC66gWWkuQVskPKZm9omaXJfwMpEXWHmVuL",
  "key33": "3Q29hhJRtFJWbcP5ikt2fzuQPvYqahGwUWkbTTLRhZmm3QeuZHWe9mAx7t7M8LhZyLReyr785fWoJ23v9XJuvJNi",
  "key34": "55Kv3W8vsjiAdZRizCBXNmCX6DQJ3ZYPDveHFyogPYRMrxcYbR3m5p3DhxKXioCVUwLsxRtfKaP4grjHZM51kxyj",
  "key35": "3dezjbcVCeDVRjPBywqj7SHqpexbRJBg3Jc2fiJETuFzDGzKPMQuTazguHDtw2zNiSnH4UAAt2RU7KzW3vcdp1NR",
  "key36": "3pRi6uGCP5XebAYmCiV6QtizyyPDFwKvHN6EwE12Kcax8L91Pzrm5L2NtvJEXyhUXR6kbybd4YbsSQrDWTALUXDm",
  "key37": "34dfWoiKdbwBpBtoZj5K5x2LA1ivUU2SJBeGqjTR3h9EPVz7NgGCqupcL71wvxSBKkqdP2DNqQ2CDy1G2U9zdWG4",
  "key38": "4cnoaSqGkCvQ8ReofLwgaLzSKp3oyNVXHpb8ZD4GHmd8dK2ZU6BTNbHU85iNPNRJon3fHhP5rdLtzZZvs9337kZQ",
  "key39": "dMaBR6P45frgF7dBn8nwtgVMWVQqSSjEr3vvskWZVDEUWhZofnhcQqU6uNuC1yzYEQSv6cG5mRwPTmzQph5FGWk",
  "key40": "3K11pxohrUWdWyJzd9FjGmKQyvDbzFfQXyZoUdMr7QS9UMFg6azQFwmvg7iWcHgMzEbPdvs4FZEXnmENpJ9PYF4s"
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
