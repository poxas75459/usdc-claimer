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
    "4o98dF6tvcM1jGYWSkgBvwvvT9ENjRDerRKzeqsQ9e5T5wLf13V6tP9x4H5617yoKfjJP3cmZvfepGXtVBLV5RMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQJEsFKAmyuQ1bn9nt2t6ZcGx48hxHV6J2rWiYjDQ9UsPudduH81TqcEbbhMA82ALTPuV4c3h4Vqt8uJzkAyLyb",
  "key1": "4LS7y7dyzTLhonDuZVUN8QsjKfE9iFFrZ4FuXXBMmmUEe5nUzz6njj9cvscMGHv1pmrxFRxNPbDeQhxzAPKSdzPk",
  "key2": "5ctFAbwhBCcvyNreVAJyrSdfATF29n8k2RsqbP54mTU3jdwuLpX1pSFFNRQcp6ATX2AB47RVJy8pQdmmHoYEaMGK",
  "key3": "5RtLxVdRLvU1NbZqN8ho6Y9gpneDoS4HGFDTxvKjc67uwNceDTq5GyFxHmBeCBRYW9S2Bx1n2pG143QqtuP7f7k9",
  "key4": "5PAGjkSpDjKsqeH9M2ExyPa2vKwW8DqEHuf7dJMDgMfPXp4s6dJhSqfCkBqQtnMfVou8rHmqdvCgGY85t4bn2EWr",
  "key5": "3hehDgZxtNLJNnvo9R7XzNxYtqZsVqdcCqPLg9wrczF6SNJdwr2Uiuhdbu2xcd3m9zAAxwqKR7cdojoKhMkWvQ7X",
  "key6": "25C1tkniMshFZHBrjEw2gpCvGVcpWSXLM78NoaAs3rJcZviLbD8NZUnzDoMePCQ6yVJuuUdRxo4nXgvtWcxkojXE",
  "key7": "3u97GxA6zBDxB84PKrsMT6KDG53mi16Kw1pCnkvoHaS2AWtNWZPHvtUNzk48diz3KSUmnh4s3zH1HdRbJZn6WkrB",
  "key8": "RbJxJ6KX45Nvkk6VujwjEewHHXYaV2GrEx8mqXQf7Vhy3yt1VRH9rACo45TWYwUrqmGhSzUGQewnnXd6h9WaDAk",
  "key9": "ouCmBbmNMfSuemYxihDbDSV3fQKZxw6tZVc7Vd8v4Rqxzeaxnni1ts2FGaKVZg51bafTnvrt7FacYybLd2484pv",
  "key10": "62PohFbnT2KZDS1PMXbaY635GyFc3dBTTTTvQCZqt8wLHSmSMmaaA4cHtGbbkbKGEk12kryykkT8GohWS562hvh2",
  "key11": "58Ha2ziGQjs61KTnUYPkGy4Ls6PGedkibT6b6gdmXA251sU2sC6UJgTCeN83BYP2rsnHMcZuGjCRoDFQVAiDXg9X",
  "key12": "5YF8vcEjUApzBF8hnTv7Hcm4zittc2ewfxrfn8PHEpYDLUw45WWcDXUw1iUfeH6sr5NjspFnKkUgwM4XgRBYZTsg",
  "key13": "4L8CbHgiHgfw3fj9u79dKZ1m3J98GcjSDyYHAULCXqgkwyc7UmZUCB2ngHFpmkYbCeKLSeCY55d4Gc1HaP55EWx2",
  "key14": "2RNUXfVvdDR4Tj7satsHQ4du5rQgvdGrb15DsTUqa9iaEgDHzEmr4GjmKxNzEubKFhGnCQAW8UKKcDA5DUFZrEWY",
  "key15": "5h4NcahmXjt3wG48zwstPikJJWvs2Dx9zL3kPzhJ3JGLZRisQUH6XPHF5JtSjW1mQ7vLXfX1p5HSTa7VTzqRs9q1",
  "key16": "2wfEcLR3WFnMUdnLqYfpkBt3WoRqs66ysPuyWFeaWU4atni6gKaNitidDNXJK2o5arsYEjkKJT4j94sduboGfcFV",
  "key17": "udrWjKT1NiHN8EkP7wzueJdp3mESLj41xF2AQHrgtfcDeJRs3NPaD7wEyXP7Z6SC3BaJr19DyMXD59MYmy5sTCy",
  "key18": "3vMiSCd8YNHdJKy9mE5Yfdx8KpFTmoaTeEa19rp9M8mDgPtdDDVMRhwSYawSiZcwyaMDoQ3mfxDoEigLvveSvef3",
  "key19": "5bcKb6GTyirxQFGQNesfJrkV6RfPJXgEtazkamWZwq7EeDdpy73nZ7NHCcc24tUyNxQEQij9acdR8meDoQXkHoSf",
  "key20": "2VqRzkN4mqtGsiqG9gfLxrNDSTSBbcbhU878wkidi5zbg6x2HKJYEF3nc4qw7aZnUJSMLC4oGgMxBKQKijC5wS5U",
  "key21": "3NFH9L3wPTYVTDby16pJLWPAMn2CnJC21BHigSNdqEM3B9PKruQLQg1TDrs9yWEbPQ3qsDxx3zEBsoXJpUgMgBfC",
  "key22": "fLad9RdZQfqGHamB66zefAkXs21X7KeWHjpEUT5oQkxoYwDHncND14rbHFRW6RZdSs2Lbmir2R5nncGQXnomnbd",
  "key23": "JDUni6odS5oXVAsfqD38s4t9JzJwQUmYSUAY5Qh9pewoSFxWPGbhphyy6GH13TYkUQZoM2pbvFea8xYjRgKkKpQ",
  "key24": "5xwvBBFaJzQbK6XMXVRUhATZmQG3SjUMPDaPMTsuM6tKXRZ9zteXuNVJbrdaaLeAceRGY9cYBCcmHGf8UkVqMW82"
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
