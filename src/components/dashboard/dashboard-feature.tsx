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
    "42u9GZg5wgaokGhSxGFqeukz7Erk1nQNqzPiCcwck2L9MLTNkbnBKuG4ctpdKDkae53Rcd24e3q7VdNWGhEtvn2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EREA3T2Wzqf1gLoQcrorwpAx2KccTPe4Q3UpdnWCTBguucweaW4dJRr4WotVaqHbuA9hQF4QMTkGZtS7x2XWMp7",
  "key1": "zCUsvUTAdrWASTt6zVyMSnAzCe8Gx3SJhr3ETU8QC7UhTXKKm5cmVaNCpKUY2EuYnK3ePvuL6rfz2SMnwiJADx7",
  "key2": "UH6ZGDBH3HdJUeUBGQRcyqtxouAp8BLDiefNW8nmx3G8SRqAdtmpEXCXZVGFPBaoWJAfD3ZMvxDY2pnkUNCrqgE",
  "key3": "4hik9B9g1sMjMiYMYwZmoqaQSAnCMwRWTEU36pGJQGTX3az8LWokndnTMHtriHPWsNSzjpnsbUSC7jkCMYd6MaPH",
  "key4": "4wevGU9G9mszGR1yVvDmSbQQ1tmz6z8mY1uZ6uFDGAi8LTH89tsNXRWAc3dvnwnxUEjwNo5xNtMb7eCt2UkFanQM",
  "key5": "ErjHY6ER9DUkiABz8iba74mVqJeRZimAPmtzj925Nog7fnjR6BxBfdZbVzUaoV7FSquC2rBR7ZWquYrstwjof4u",
  "key6": "4Npj1EnCsxFjiGpUPWT8mb7rgchV5tQGVjfTjTgxq5RzJpUDTBXLpWE3oAn3YYHdzvnKWyijSSt2dZsHcr4nLTGr",
  "key7": "JoxWPaEa55QJEm19JS5dxa3PFQB9xdsuXExRzFVxo8Aq8XRNmifKzkb1GFFbsuek6WUn3DaWMqui6q9wG5h1CT5",
  "key8": "3qKRwJt85ghNKhH5cyK5eeRdp3GSSxKX6dRaMpK8QKtazmDHTUBwR4b9xXtfECpFHaN1JJvZRknCcaVjWLMXEL9m",
  "key9": "3Q4bYa2BAj1AvTwFtLsDNV9QaovqvBXYFsEyp4uxDYbgzoKh1CpEH4Zh2ZZUhjTricFnmM3wLPSdWveaMYV5h6uq",
  "key10": "2Q9aCuxTzgHqEDEPQkqXxrJVK6G5rymSvXowptru727YdsMy6mmMmR5ceFC4hE7aRJnjaca524E5M2NXFPQm6FG",
  "key11": "4d8jd6fS7mbxbGxqew7uxfHniPNdLpRcc6eCRNNaQhvhyF1GpUG65c5sGrxs3HBRCgSGmQ9wyTo7C4vGzrybFSqN",
  "key12": "3jsUfZSE6s28mTDGnpMFMjEYQ3hGFHoS4vZjXotbEaPof3E5Qgu9Wu58QKx4v3GyYJHKuiENsZ642p9E6nSNYfZh",
  "key13": "4J9a138SSvkeuc2Cfn6T7tfLCT2wNEPqfiGL1614j192ycxSJRUr7SBP2w2DzpQKrqrRbWBEW9tZZoV76SMm5ffE",
  "key14": "5vuybhfXwrF4PtMiXcqNCrUkHEXFtFhS2qcpHD6aFSG91Ra9R8Z4pPEb36tmNHmmAUq2C1JfX3LmxjbXssqW2JWk",
  "key15": "511RLhwi2uPE49SiqTd42q1eMAg32Njx427bx9GqfYiUbkPjspMQ1VktVpckZcgwF7AJMVC7RL6tJ8VPGiYSDAbD",
  "key16": "4Q4ZeKcbnsMqzatFpWwgXR7oN6KEQMjehF1gyQqrxcnQGopD5Xx4UdQQ5vWfoUvmgPZPTHRhXFnHrbT5nqo9PT6Z",
  "key17": "CY8MLx6XgiUUxJP3BWLz8uggEuh65ZGeweFL9TfDex9PbHpfK2wAGxQeEauSrj39jtpnTQov4pcEBrdX5rHWA2P",
  "key18": "3QNk2Ybv6RmNDDgJffhs4Q5jVfAGSRySLA3MmnVn5eZqaUedwumi853LNYqdhtrKrmfsqbYSnbGGc1UTKmktCH64",
  "key19": "3XxoPxvCLYy1kHHZrMXakaiP6FK9DqVc49HXarGYQpmNqsGZV71UaSofXyK4mReDjxgktweWnJC9KREQFpMiqUtP",
  "key20": "55rJvqnxqcryMmLhkiBqUcEAoYkFfyqqVC74wNHwyrtPbSfQe449HyBdH93BAjzfp3UL6UfWUJwXRYXPvSPDGGPB",
  "key21": "5evuYr9vYqf6vKPPJfaYQ8P29os16ZKAuAst3NaQzuBDX3LjcKAuJfhtVNcdAJXfJ2n8iqPX2Pj5WRrYRJ2t7xNM",
  "key22": "4nSPXCgnxpBUTfkR4U5EHj3dYTjNsd7G78q3kZz9HfuLVU7KP4P1ktXKx9b17aHVegbwoPA4dXsZjEUAouf3zjua",
  "key23": "3EVVgPiVhz61UgFAYL4KJDV84BefXwbHatn3vg7WJHQ7dsD7GNwKzYF9DBXDHAYinv6QRSkAWopbsGgB4tZkfe7S",
  "key24": "22RDVFxBKaKqmbNhsL1BWJPfp1TUk3agEYdUz6hWKLfuKxAxnFxpuWdRNKzrSTcGaoQcDQaxgTMvSQLJyL56GhvQ"
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
