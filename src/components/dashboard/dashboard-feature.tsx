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
    "3ujvFfPuX91zd9w2PSY9U3J3pq1XJkVwQDaoFjDWB78u8voy6sdZHtgoHeUXK13WteTWHPuZgjSFfi2XZtQmknEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41jZXJhNv75F38dycCoxzKbfKB7KZcYJJQ3w2p9XuRNfhxL2PEdP6GRYKLFhrrEzydFHUZMfB2PSTzdfSPJ7ACZC",
  "key1": "i3KKeEvYsVCYiAgsWQe5ePeQj1D7FA6p7Snq82HvjyLqDdkY9xjq4AQgNG7J4emGC3XmsAURYPeAitCGaXMSad8",
  "key2": "4SWLgPGb7tTmPpM479sSReMAaTLkEzDCibqCxVo1JyM9hCtkK7cGTRazr8Xtb8jHPymL8Bia3vLzMuA4i778Kjk6",
  "key3": "5vDXTTg23vdErh3noeUGnLZKoQ8vqNvCCLG115Gg29JoCrkqdxRXEAH9PpQfETMrBp8X2dgKcDLFwE3ttdWnoTcF",
  "key4": "KcNkevBiy18FKX6sXCv1jjTdqGNryZV2D5FRv3hYt8xB3gzgpyVZfAwPF9QmY3w5mxUkJVLhMpwesPKQ1TQ3txX",
  "key5": "4CyZMZC9KvRmnbd63E6FD953x3FxVSt54EoRhdhAqi878TeJ7xzA8W7LxPH1wDNQV5z6cK25j7UH3vRgKE3WBn4f",
  "key6": "2up1vTs3BS2qwPAH2ZWyL27u2qnNGmF3kEjub8eSvjgSqvbVK1UnJtd2RFAPbvZowWTxkpRqGYdqpMy76cdVd3uY",
  "key7": "3ofVVLyH7DgFT1AdFwwkHAgvn8PWDZpfVLPNjwxUAM6qDA3rF3EomtNiJgprrBSy8fEGHGP8Tns49JtxbGREDtaj",
  "key8": "ekw2HHCw3f9nVr7KSeXuciFzPVbaKnC4c6i3s6PgfC19TqQwKTuKxSHXzDTZqc7c12UAuZcBxwbhwcBkNEgmxcA",
  "key9": "2XiNVVyeDyNTrfZmM6yBuSxGn3q8517guTZKgMmsMaUFRysnVZrPK6xLQUDC8xpnQmRtjc9eLqht7A7rz9jGgJ5W",
  "key10": "UVjFpWwYweSaeiAqck5SDuc7h86eeJJTKWme1CG65mrcjvw6Jb7AU5veVrmdmCHmdQgywLtnn4A8J4epv9eAKUu",
  "key11": "2Hz1Zc7KUyNp7J6vQroYFYLEnjCFX36ja2GmFeT8cstzFFG2L9dLm86qYsYqHjXKFixTz64XjMC8MMTar3gQBHEv",
  "key12": "uDHnmn8GMYaQfiwhNAEPTr4RDepzeLMPR4V8EaW1adqf7G6cEBsBqWTj4tzLucAFYP8gBkoSmF5MXTUe4ZW99co",
  "key13": "58dHG1EjNLKskNvi62UxUq8MspHGZnQLHQwGgdFWhfoSd7jASuQwHKJpVxWP8okg8MgUzM9hkaN7witenv3BJ4KE",
  "key14": "4D2AeFmC8BySVEQHakxBJt3g1oXQ3mkveTWZ7JeEkE43HrA8tcxKDKhCpFGEhWhJyKpYSQytPDsko7Rqq39Z7WQV",
  "key15": "4tjVymSTW43MYYBQULT5BAfz8WEU6xG3mLg6gUFYrqLBUWrTtnJWwZZr7Z1CrP4uXqUGekf22HGoNu3jjYvLLfk9",
  "key16": "3eLeoWzdH9cYKr35MSaELTd4K7avGXsub4qiKNwSpHFz2TZLD1kPCq8fC3gL7ReZpRYaCXzSvKWKATexPqhN9SJn",
  "key17": "wh6j3WvkjYBqsTGfQpGpLUkndaa8QAbjonXVPdFiDMNRuP5rKDxB5nqp6tUzrD9zww4qQtyssddCiALrqoS67i2",
  "key18": "3pe48H4AC61HCyT3MYPwdmza6kv8uv71jvW7z1EmBfteuHkcmhg3Br2K93rswKZESV1SdtosvhfPXre5C8BjQLZq",
  "key19": "38AzEJB6DNaskoPz1hvTKSCr5Lf3GYE3SckuvNykD6QtbJQVGCYLCdoFSBsvTstPyTMfniQtApdLBLe9wxaT9rmp",
  "key20": "5v3FnpTeaEdWL9XPJn9DW7YssSVM5Zb1awexn7JQfLmNVKS26TWYmGoUNSzzzaB2GV9o3EncXfQSK2jDcBZ1Vy5T",
  "key21": "28PVxjRk7v8wK527TJJMAnm9sjNco2S7JCq4sYXfwsGjkpzuq9MACZUEby4KUM6mechph5tGpWL9EC8ABNCq6Xrh",
  "key22": "5gtp46QB5zYZJwvsvycjUfsyhaG6UXrnBNoNfpjY8j72qCZTex59dL9x22RisnZG88KDRVMBT1YP3moJsx52LQzx",
  "key23": "ZYHxmH6hjDmChs79GEiHVSAe9KnXtdih2B8gyq1xxaobpT7SJAvbuXY79vBQTrQbLWX4nefd7PqGQ1nZrWVqwyK",
  "key24": "3JcTLw18XynUXqJ4k1JmimgBEvKGy3Q8X31A8dwDGhabtnNGm7kvwFBhW4jF2JSPjysETdPtLyaL2Z9QqNyo4RNj",
  "key25": "5HBkuEq6SHCbJpogxx4JbFJNBpKwwRBGhft87CtGhar5HDw18HkJgMY9e1tdmEzB6omhkkAZ4UpUhbtsbiCTwHL7",
  "key26": "5fZnWejxFbxYszen5urmwkLovLMvtBq8m18iaAZmfnCD5uiyzVupXVEi1qKUgbuHNEeBajZ5681USbcv7fE4LeDr",
  "key27": "3S4qkqk8BgREx4YBVRXXo7G5tLTYj7MUYwfsxY68995KrzhAgqWFJiVnCBRYSdcAKjQseNUpCF8eUYH6iebymi4A",
  "key28": "4J3ufns1LGSbXGRz95kCjQRJxaLN1EzRvhWxMBdVrDS7p57AXzNm13edh5XuzgfBVtUFC31DM3Pprq6v1LFPNiYU",
  "key29": "9651kC8M9uyZPFrJNykek5opMyDwyVTAWSXaB1im8UEo2zx4ZL12hzpMJeS5NiVMcv7hJWgcVnQpGz1vF6PUZvG",
  "key30": "RNwLwqgNZRHbngWUpcmZtdbFynoyYM5Km2e7CWeX21ibhqN4ob9ZoUJzHMsGJC4vL8njAuoDJmRZpfiPw95kLrh",
  "key31": "55k6PpUuqnrh9eRHnR8Fqa5gSan953jRAFbHPqUBNc3Y9NoWrdSeigza2FkDP75CfWEjAd5ZJeFgxGn2ByQE5LRP",
  "key32": "2chGGSTAX6Yp7HrcsrDsW3TiBqxLTkR9E7J21ubt3Pve8xJRNVLTjzLvz5KeCpjtVTERxdK8haJmxrWKo6F19YE3",
  "key33": "33FXSN4BnB2AYFYsaADsHNTTXUdoh6cEaoebBqa79Ny3zgtLVEJXdyVzPirw3VoEVMp5USMAaCvSkCakT3UqWgoK",
  "key34": "JMcZ3HL9bZxTrW7rHEgoA3Sx7eTFjgT5HzkTjiRJZ8qHG9R59yBsWqgaozT38GhkcQcJn21eHWFgKMFjJhgf8PA",
  "key35": "39ULmQR87u8P26nT9tECdn9jpPYdS91wVnSpcgWnw5hnC6NLpcE1oQNv2igjh8QhQ8biB7sRtgXnnKqj3eNehd5w",
  "key36": "3hdgmPoAVBDKrudCAnoN1yyprUrjvgcqynRbt1NKJDGXhjYbvoYZrBEJeWiXZ8KpG7f57SmwXtYeiBdTruLw5yhR",
  "key37": "5YibCs4XUMjje1bTs6iQFAAfFHaqJfGhKZsMC8Zhzp3xMLLK87hf6aW4xxhdhLtpHfTZCFf37mHH7uFr2hgo4N56",
  "key38": "4NZPxqzgPqgzCHs6GrYSxkE1i6feuv4AixjaxC4nhLn2oqFoqrV2xUb6V6rWKmJxpjiZpqUoiKF3xVfP3hDBPpeY"
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
