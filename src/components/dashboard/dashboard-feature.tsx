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
    "28PEnGnSPZ9GtW8JE5F5iat1UVX1dShg8tciXyxU4FMZRPa3PrBFoBZQme9JBQVCsdXFG1vJk9mnCA8WrpSSoYQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZ2o15tWxbA8kNr3tszEtSUZP6csTy3kv25ZarasUKbZcGpvJNZTFh8jgHjZb15dVVDqAD8afyGTGLRwreVi8PC",
  "key1": "Xrc7Aeh6puHjaJzGeYtHGMvdszWHi5Lwhrr5bEqJoQ4oCqcBXGKwzKm5zcXboSyu7MBCbpnCbF2mBHYmJxMiG1g",
  "key2": "2ZibU8YBF2YqQP4HwZ31YWtxRRiyqKMSr9GMxnrMB2YtbtBnsrJwDa9UCCmJhFh6yBDhMTBHwyiKBSHVoxfiMLV2",
  "key3": "4u1pvQuTB63aNmFt69jnMAJGSmeec1UujKa7drYJ11neEsGFNj44ehinHTKjy43Hvg6QGjBXzAyssR3mEzHmcE83",
  "key4": "39fDVp94KVt1WLQh9YsjgztEmwJYHcezmiMA2uHq3ZhgmYR2heP6qAMdgi13TE6Ev6oRHwNSB3mK5Fn22YhzDJJH",
  "key5": "4iksJeCd7dq9ZfQuHqNovNqKju8J3rjgJLNN3RCVDycPEXzLFSN2vxb7TePSm28bXoVD82fYXiYDUtmKpdDyWHwj",
  "key6": "5f68QowgmQvrr6iCXC4gfVZYykPXDxPUZCPe54CY6RZVKLZwzoacR3cDw8gUcBuQgHMTKL9mRYzSXxCoioZNYxiA",
  "key7": "281udKRY7R8XTrTJhpHLXpLSeHHeVDzXCPAaGFxN7TLfFzjf3a8DsAgGpBhbGZLrwuSCsmzqKoGvWcsxhp7CrxaJ",
  "key8": "42tHafZvG1AN8uCptF4qjptXeTr9PcEKZod1Zp8htpZzkpndx2EJUFSn2UyYdip6GfAr3nJDEYpT6Pzpa9K8eKi2",
  "key9": "3HPiHR7WZHPuZHA3VdkqBUbMFECBbz6caVzgJGBXvCs7tHQGxQYmo3EguHoqAPjXqVGQXsy2sxHm6R1bX4iS5Z9S",
  "key10": "gZ13MDSu1CkUmcA6wTPLMEhSFwUs5NZfTLxqbZy7gXeY9LRQAsZPLHSg4p2FHpr64hHAmkqiTKneVP2s3RPqYAD",
  "key11": "3cKxWh2rLkzccN5Up29Nei5kzZDQ7tYyKv3rgsBuhLpdCeDnjradwpmjUMSyjj5xf2P4XtiKb8iomo7RSy8KAJwv",
  "key12": "59SgV5d65LDTzN3m3NSt9zmjSgsmyyxmTovzmvySY6fQL9Lx3TVwPFCRAfd3fzogPFV3wiqmNdUNzzGZCZp8uLt1",
  "key13": "2GcMV8iJt6gCA64R6XvtgEXz7vqWsMWfG93opGPQnvcPSSwNpLkv3cBBxZZSyMMfvvmADTSfmodF4xvaALrPmsJ1",
  "key14": "24AxjhW3dHDfJ7nVZX3Gkj2V2ftKQjaiueQR7P7nHyZ8sLUU3ZFyQEvvVA9ujt7wwjCVvj5nPczcWbEFkLHqcBKH",
  "key15": "4DCjscAGSCv1SGZU9vMwrdybhfLsTXy24a23yTCt66LLZMdT5H4CEuTKaSkS72BdvCjbmSGrqT8zXjB8vGiUyE7o",
  "key16": "2tJB9dKsKhdWaxsMgYm4mSQHB8wtKwcCpiaisszU7LUAgf3XyzBw3ZznwL44dvFHyVpmZZ7pKaZWfNzQrC8YaDkQ",
  "key17": "4T7vYH8yJJJQ5tGSVxNqyWDFfgMz2iZMqAMb66aQ2crDjrj1so27E26R1DonVrZ5z1wtxkGhE3nBGU41UjmVaUwp",
  "key18": "4u3uj59vZCvcS2nrYV15Aiw6de4PEZqB79zSzPihhqaWSBNPeDJhCkHL2NjaaX6EFVaX3g1tDDhCrtpsjsHvUMkD",
  "key19": "2Uka7fFkDo9gi33fUb3Ap9kvayZhTvWxgkkXzVdjbSJBKXQ5Jzx1DnFPnGFGvQSvUCcJ9rRPFEefnbq7ef66jCz6",
  "key20": "CrLtqwQSsKVkVdwbgX339GpFvzpoyySz6eS7u7SBuEfEWdPGNSbfFANFGtrJxQKJ8Ab5SaMbgTMUJ4a3GgQCzcb",
  "key21": "37cxAAmPLGjp9KGA9pHmzKxbm6KZyAK8hDpLwog8UgSgRWw4zY97RsCj2GzCmjv5Qru9FrXusdTzBd47vqgDiA93",
  "key22": "gGxJnNvorwfeGj2ZHSfNkMGcTDW2ZuRs7rtPr5HCAEBCLinznnkAbUJWFvQvrtijnEvFu4uBEXAxLoDQ8mgdQjT",
  "key23": "5K1AKBBiDzzKpxXDrDJdXr6GmT4Ew4K5H2LNPFF7aiGbwed2hxsyXPmBRwqN3MtD7tMGiYTjC6LCMQsUVUpqut8V",
  "key24": "57uQDCQSkfGrW7jBjLrip6s5WUozVX1HnBGA9VaNiCvq9Fru4h4S92e4HAM6PoCMrqb3eYXAZohB16Efu2jd4jHj",
  "key25": "mx7cvsEzvSGTBhSwCB29auFAF9LgNSZc2DeB4J5qyDH5GJ4qPR9dtNAsxuQmfccvAZ7rRVNPLpseeaSbkVsgtJr",
  "key26": "iUi8ANWcxyi5gZXj64ap4PvrTKwt4D7fdgK6yjts8N7BydpBSqiUmdjnWKBBd5Nn3f8AsGLULhWM3PDg5vaqyq2",
  "key27": "4pKF1KdgsQCAwsRi4ZhRLE7Nt1QfJkNkfrktwJVcyReFfTFxz241rS1gokFFjGnErDUYQDfFtXpuUh86YMtAmPtZ"
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
