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
    "44STQ9cdyocFn2WyQBXxSdDKoTMGu7SHwpVtdWdMtMuJ99T43fG7szDxSWEujr7EiMf79oY6gNQoB2p5UDYTF8mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vGitm6B7yYvvnvq7U2HsV66gxH6NRTjpQjw2sy6s9G2Xdtmrme4uHh8odC6wrDjYWdWkbidzC8zJ1v3ewJP5fX4",
  "key1": "3hePJbng9gPT4GoJJJpcgr5SsPH3WWsGARzHmYZs6fsXJiEwQb9BLkaxYbV9VXhPBNmfZpoRm9y9XEX148j76gcG",
  "key2": "4FwR8HZtdU752D4QdvZJCniWPfERgJnU7jU3GDiViaCoAhZ1r2gNVvWtfthcnm23LdxTVtsSyQsj2EHxYANEr6dt",
  "key3": "x4jL5SX5hagTmkq41MbrJRZK19DSz14J6x5bQusaszeQ1aqQKEeYGxxbgav1d3CFykT1SLtGJAR878Fy18vu7gb",
  "key4": "3hpey6Ucj94FhaMYasixAGdempAdaXaExEuRjLL8fSNRgtDYf2DJE3jvFfEYVEiUZhZdcoGHKtJiXYmfFBYkpD1y",
  "key5": "5Mfp1LvGcKnaqtu5kg3yoAm9raQ6gBcPxeWRXzjjMvQvxG77sr1fKp5X8sMyy3yaUMujDK1UcLSjd1ywNMBvx2gx",
  "key6": "2zUaQmaq7E6rZ3XhdPvae1VEVfDo8z8gVziGBqtaCGfHDYb5TXceWZTrMasGMbvLnTN7WFLxfn4FnSF2Mj6qWRCm",
  "key7": "3aaX4TLyv4N6WrPSPKr1SynDdpNgAE5TdJXwJ14tCva3V8nfLvrAiWv93dkYC2xxm29KmBugCMvxU4qH88buSu46",
  "key8": "3MdxHFgZFEwAaVKe7aXAKJFPoMYPctAVDsG95uhPJYYW9zp3BVtrzAzswpXQLRf1PzerPVu1fscCjSdAgRkq9CL7",
  "key9": "W8iyNRqBqf9WL5gmGE7euSWkGBnuJQE8z7PgDKhxTuKh4QjW7YrMQ9qRtdWmoMFPxYNSbymqkwBC6pMxe9YZwT1",
  "key10": "jrTJoYdBqPqzfLi2BjWwa3XEXW5DXvXnnVagx6ZHGbLxDbZS8wnFXPpBYfRvjwbaHT5pSj5xkP9P13r4bi3kcdW",
  "key11": "62fgYkD66UcGJBGbpsvfLW67m1xaFLsQjosiamZE3URTx8rRqmfF2ijjyAWAWvpiDJMW4o8AiQ5HSRhGxjc64pCf",
  "key12": "5i54kFtLskufBDsM6mUdLrgSy2AaLUMWCbb2udMWd7UJkiqvZzWgDTJDofWYGGHhpfJgEzX95Gase93nXyX7jqzo",
  "key13": "3Nu1XMxRY8eWuyHwPNwP5SuGWGs8kZ9pihtjJtdrUTttwmMX3SDaWWeHgFyzHjS7B6Ro4JPbJXQdj9CYQvxyKm3c",
  "key14": "5pRFooa2Ry7qezBRQL727oceAJU8iHtW84ogHDFbcw3XQ4hDTbuDEGagYtomR4CNukpiyJNd9RFD7vZovWwkkKsg",
  "key15": "2Y5Xyd4Q9XQnED37fq9SzHjWGGDetvTsyjAcg3Q5ouGZ4nrPrPfkMEHJ2yJpskXL3hH3yBUHZLyYGrbWHbkKLmgK",
  "key16": "3mqZhXTBsUCafKzuSauqRS48ddSHx9mcxGh7mCoEGgRGuADMFATWimSEGKbzGpRnoXtZDsZyXKLhj9rv6ZoaEVy3",
  "key17": "58CpvPSXzjNXeSuk3BUX4U8r2fQDKb9yujxp4aKLsJsgSYLgEVRdk8GEKQ8zmUBv5cpkBf2SXASwxpwPaHe4VKrc",
  "key18": "bPQCP59iv7R23ekeUsUaWEQdZtBL75qQXvBGpsZhmGn1H5g7hV4yFinMXeENBtrJFdsCdJK9UTG1dwnzocAW3EZ",
  "key19": "5aoedmpWXdgaouZH34Y5spet9sJB6Ddrabwe9kQw47e2M4qppNRBy7qaUkVZpgskQQusECUCnZLpwUdHb2T4Lweg",
  "key20": "4NM6xdzqc8zymcfmgNrRsuqUUmbmU6NARCrqZzEtJTRdewvBQSNSWqRex2GWG7P8j2G2DMGxDv9GDjYFVVMSpHks",
  "key21": "4LRPLSNusYvHSeDwrik7eyv1A3YCYf2KGmACUm9bQg2q6htzwqXhR3Q9xqtAEu8NfXgdCBHVjbsj1YYtVP91Rvji",
  "key22": "4VEcBpoFrChwMPzGF7kG22z2YDTEqDu2YhqaCVatLgfKHrArpYzV74PZiuLgde1hY7TEfVV663hoHRyCWcvk5sZC",
  "key23": "5hDBs4jdwCidQbpJrcJ8DRVAyBqRy6rEABQy6hnx4UC8bTVXCGE1EANx6FbwbVa97egELKQrMLrojzaB1M1hhhJ6",
  "key24": "4ijHpDcUnP4qeas8ypVzw1BmNLWbF8uJXZQi3z7XCKtadjjUqx1dTK3TyCsMZtFS6hvaTd63YgH27scnTxphZpHJ",
  "key25": "XMFoJiVAH7uY45USyeotydpodS2hKjHgUMZKZqrjgpAwbWk6fvS6RX7jJsD2e5vfzuhsoM6XqytGScUAkTcV2T4",
  "key26": "37BrD48BGfBYoZoBJeVYP6ATcs75h6ZUupgLnARJAQvmvFivqzGBZLksrxK9c82oizwALfqXmHF7zgua1eHGNu69"
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
