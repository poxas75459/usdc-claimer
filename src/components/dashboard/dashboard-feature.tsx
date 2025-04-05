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
    "3keeHRMTV7UTis5BEjNpK9QwpEYtBPeX3xAhzKCHYHjGEnFgGhtMwscm3kT2v4nctiiAXbnoa5YwzQfTj8nNE4Nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NGpjDseHbVH9CTpDWw9URPVLY58DrjmPiNc15WbBTZen9W7JMTTjSpp2YmBucq9cKSJudAUaXqpHGA4Nah7HcEa",
  "key1": "6Xtg9aK3u3XX3juicfT8Cx2DNYr25VC9Efja8EKdConAH5DDcfvUSjB7J2YjX1jzQiJMJ1e79CFYsKMJg9mmnmz",
  "key2": "2R9eW7cnqDydjVvBhgWZCsjYvRVyVXatCDxrBz6Hf21Q7FFKZ6omzq6M6CQbNWJr2gKBchxDndWYH3tiwJf9geCN",
  "key3": "3MmBtatbPsw5fCo4b8QtCfUNS1fYQWNhX6Rdsw3Woa2WaxgaVPAfqSL9UbyfvNgoqA6kHP7f1m4zkzBg6Mra8fza",
  "key4": "3dvLNfZTepHDW8om1WXbxEjfuFmCUL4V3UQRKD9fRG2T4AwE5fLQaRhjTfgK4GmJ14QczUJJFNpQkogipYWwHaoW",
  "key5": "4pts6NN1ii1obrSeMRGAP3BEHTNgahKzsWbkzvM7TT1fDTFfvkKcoKYpMZEeG739XV7uyqz7VcesfMvwpogJxncV",
  "key6": "4tV3at88Lf7AZEiqQK1Tfa23fuzfKsBJ2k2w2qyGPGpVSVHotPLNjhMbzd9xkRUzLCMueFWMg35sz5JTRVEe6iqa",
  "key7": "TjguMwy6BJqEY8y9Y4bnFUf4RtY9V5VKoJ5ut2msHPK2V2d9b49UszeBuN2HqSi27zJvfK1LQakTwwnH8DDVZeQ",
  "key8": "2XWmraWSNjWHfgeaiNSTDhbv7EhEQcvVPQ6TQFEgRBq4NdHbEDXDptskmBU3BkB23J4tEY6LiFWPk8Ws25j2ESeP",
  "key9": "4fGX3oaPgG56oRnpSgNvZbgrZZWtLPYbezfLnd77JnoJZLFjkXBK68s2EGprdjaHgqQcZVn2NQx2Ru2xZThok1tJ",
  "key10": "h8v9tMA3owDgAnKmKPUHpqTTG4NHGGjdsexNquWvB6P6HCyQ1TBS4dJNcsUKBZPPjKBE9pK6mteYBbUopRaU66T",
  "key11": "3t4PnT1NYV8rEacVnYN6yX5sYRSLNRCcUrSubVVHgDwQuQvt3SpxPiqR1Wq4pZ841Jwk5ZQ8QdgE3KZ3hyFShmdD",
  "key12": "3SECYBi42dGnKBXEBTH5WkPtjpDiJmHGVKuNZhjmv92zni2CQyzQx5LwNyFqnEqc3nCpjkqLMrQ3Xh3RDr71AFFP",
  "key13": "2LuVthooxhhwcQ5X4agFZVkauqHWY5nTehSxK9iEdCrKKjN3MLxpLyoK6QRcAv9YHHb8q7eNeyZoXy78UbK9sfrq",
  "key14": "37CTUpcEWUXmn4xpXGYvfmgESJC6q89cyu3mX9RJuGyn9xE3iYk9AHDSg4yWuh1mNe58sTDeZJDXwS1afARupcwE",
  "key15": "2Y23HyCVbvPdipgjUFav8dtuymWjp5NePCRBL57eUPPZZb6cqzmqEh3xCXC1A6AtoH2MKSSxwuA3TdLY7uJ4X9Ty",
  "key16": "3UJVA475ncHRMhE8FC5ugtrQSxLsPoMLXgZDv5JwQ1veHVyitqRvxruSWP6qVUvJwgHfqK4haE2z2VDfhBSgxouU",
  "key17": "5PnvbTeqaM3ASagvhiR21VE6jJWm6f5iwp4fPKJUZdDMBohnRjDm7kdz18a2VWdF9zCjAp9w7d2A5JxvUNtpfCDe",
  "key18": "2tawyjU7jnwxLVvRf1YUEhiksDnjLbLTXCK29gJJeWyTbVTtcD3nhwyhdR67jQBMfP3xSaxBR5FfEVhmZT4HVrqo",
  "key19": "3ZN4V98E2e4zAqyM66Ut3j5msAbKxWEeGaniVwgPaPYGbiy9EhVwePX97JDHFXSHD5jkqpbew96sWamHTGdvgHTU",
  "key20": "mnMXSErUfe6BBvwYkV9CykBubziiHdg5CM3nhrHikAgmtcA8wXmbcMDAMCsGtwwJ7DmonNmdWBTwWcxH3SQ7gKB",
  "key21": "SWJ1Jr6FTsvRA4B6kMwiBxiAYRp3BAarRcXVkPuXEpWLUeVxQQSZRGcpfpyPmnDUXkezFqnwgWNK6SSfpiEZq5B",
  "key22": "3LdqaGHH33wrwj4CMFeSuyDJEr93CqPsrGUMbVG1YtYZW9qAP4TVcUrHNXswPUv517rQ5Ge7qi7pk1HtSjd6umSA",
  "key23": "3mc77ZevkC7eB5ekedfiiZiCsVhnuNW6dK9xk39TVsG2YLiHoHqJTCTfRMhjc5zU4zMsVi5uGxRRkrgEcsN7dSnu",
  "key24": "5uY7tDjnC7N1ht7cX9RYAxQUzoULWPbcFucD6Ast9RcGMt1NrjzbSeH4uinkMMpuyZAyzvaEs6odgfEjZ9giC4VY",
  "key25": "3b95Bf3mxMBe5mMJuiVskaB1S9bJJAqdt6bV6xQsAMmdAE4QnA1PaZfPbaAgFtNAEp3Z42Pi9rpscShtYUNVLWVi",
  "key26": "3SJ8fJKHouv2afAmqTQc8eysrYDJMaD92VtWHxX2VC4kupKfVtsDV836b1DRQPbUbAUHZo6YPYeXGWEMwY6uN4ad",
  "key27": "2L5XqUxxwtyDjdDfLLoFzfE1xE5P4VUdaZ2V4G86n41gofQtaoNM1SJsTd9yWjRVeaHKXJg5Lj15y65CrLz8a3r1"
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
