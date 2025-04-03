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
    "26cb4wDPia3YARu8SSodwxaY1xesX7RUgmLwxpSCbLYUnm1SLkhPxwXagF1k8SRHp47bTg9D9G8QdT2ASrU5vCpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZvQzixST5ucTkt8z1GzcqPArhhZqrMKCGFUzhcD2WWRNeqDbZRfZpqAFwyFWv6ZjBEs2rbeQawPeKS8i8Xs6Dq",
  "key1": "4i54e4ZoRy46UnPzw5ZEBYeb4Fudb1cSXbutpgwZWZCc39WWvK177nzqGSHgpKDLEHfRoswchZJDAh3v15PwrCxa",
  "key2": "4nsJXeRiDGPkkV986EFwaQwSta1sCmiEHGpfAR9563K8H8A6dA3TDxJH6dYerLCdkp55MNsvj47LjuP9SWv4vXtg",
  "key3": "RtpZJeHnqEKt1kL5jfX8VtsyRrXnYyFS3ysUj7nLnzy4xo8VHGveEWWt83bb2jYSn4Rd5kKF6pZkgZrH41igaez",
  "key4": "7VZHi8HmmJ6G61LobtYaDCgRJHi69EHw8FVjraEy447CynmFiyDaw4ohPB38nQe9gMxhbu5inDq1pRcy1LFySAz",
  "key5": "2898JWXTrFgiJAL6D7H7W39MB6BepZUNWW8WibGLvXxkjZ7MkrcrWHfiBsPtDEHgCeFTciQvETJgmPbbvn5AKVUA",
  "key6": "5L77Esyt4umTTmo9yJjURJkmKMvS3JC5CrYkSPnEUSxLWxiNDFHhmna48zsHzz8VTzBpdtMNv96GU1BvrKnuY6UT",
  "key7": "3XAPnwntJFMF7Ptyho4wg8NsqnYGG1hbnqox1WWMYbrMDKsMELgfGyRBRi4KvxhiMfFfroFJnWiWzqLE2HJocvvR",
  "key8": "2s8AH6ybZaPgKCz5n6MyRyeXm7hZvjqAYTdy8csL5L7rjotJ2g21ipRd73gntEHPnBegG1LpVg7LVRKWAkrc65qn",
  "key9": "5jMvLkVRav4Lrhq9K5p1yCnwHHoe1RiYctVrp3SJA3tKcFkUhc9imPb5iHYuV5JRPiV4qxhTcaxVEPmEXJMF6Bqb",
  "key10": "65qiGpvPWkQSTc1yP94tKqYxEWEVFb5n6gKG1EmxUNMiaWYXGcBHe5JkPe3vdegVYHv7pvqxX4xkJYL8K82Ty3r2",
  "key11": "5oXwpG2LycTaLQUACgPnqQwueHp5Hmqs4j1ezH2NMhDh2FPwD7L6pdwJ8DK39RFSgioqUnmbSrVbDkqERfcnjpew",
  "key12": "svFuqYNcgXvzQRZZnbpqFzz7sVrEbebX7wFd9p6rCVRaqxD42Qz9WgsuyfQgJAiZL2gmMKqz6sdU6daXh4mgczW",
  "key13": "5xiZX97GoZMRSvqeXP3CN12vGdkHnhNGNXTuR62ngSD2GHZSbp58d1AVthGJ8xH8Jq9Bmm3xvmMgLivUeeugordE",
  "key14": "3vV9wTrGCErRiGG5xP4DQXuSgckBYLWGijQatGtexnZZor6q5dYgcMNjJLfsGCkwaWTTg9aw5rkLJS3fce3A1R3s",
  "key15": "unbQiySqPTKFrRp9NpNhEDRgDGPQgFjhDQZBPkHjYAnjPoKPhkKHRssFeMcvAygYSKPvFyqKGswsj4PLeai1oba",
  "key16": "2x5mbg6FisMn2DnkfekXpUurF3Z6vbudiQKaLhAcJmfvTxgUbhqwfz29KBHxb82FdBFGUR8WAnLiUnp3bXBsM7oQ",
  "key17": "4V3Mkqac7Y7RcqmHKfMpxXTmehWgfKv5dED5oPdqpCoEDZeMp26GCh6bFBBNbhbrEDRuSApmPoe9u7C7vKbUTKC6",
  "key18": "xyq8XN5JjGX4jhnyWR2kVwR73Z59vQvJBpQg8cTyQCijNVwCGst2QFxNkNM6VsdTVGuEfwwGfDQ8tSPAB9LaGwW",
  "key19": "oTDXkpPHJkgWFKUtmnm8LgHbU92t7X6EYxqqGzTAKt3Sn1KqqvNfb1pw2MXC4TkckdbanA3sLV4pcV3mK77k4MH",
  "key20": "5w9zYcecwZwoDPU9Hs2JjDY5cvdETVVkdSUkgFE5Jzxsy82Um9U3WXunK1dtY2PGQzneEmvPZgGqwrxxYh5sSBuP",
  "key21": "3frFLYivAPZnNEqmrkM56SpGSzqiuSdxoPPnfSXeiB1tww9qnqkE9JuPhjXrbgsyRY8KxCUgGw2CYgTxSvV17CLp",
  "key22": "NTjWzu2qtXF66Ey2zmvaf2qJEdBewJC6g43Q7ibevQzuEHyFBzvDfby5QV64VWD85cCGnVVpu83HWNUwAduEqhy",
  "key23": "3L1eYcBDPcMQcRrPKkHfLG68PPybDUNfeeiPpAKPs5aKqmWE8FavX3HpkgsaCsexgpymJnsg58KicG1GPGaF6P4u",
  "key24": "5TUnz5XQTxSa8viQ4vMa9t2YkaU6pXaRN1s9aUh1p7SWtyD5XDSrmy6nJuWdKcWdHAqoKnvW51gZj6kETb29Ei2d"
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
