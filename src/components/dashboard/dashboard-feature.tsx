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
    "4TeRhpMsMWNQi9aHPyuoxkE8mG6FDNJsNoc5wCjLXBa4hs3SNWvBKbqhUzNbcnh3wSaTEh74fdNnDjCwoRCnsJ6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5osiss274CGs7w69NbbVR8GF1UEAVtRprXc1ZacGrahbPr2MRQu7BL2a41eXfsPnif1VUv5ckRTZuFeSg4tTje",
  "key1": "3xUrPUYWTL6UfnmjtnzJj3sqEa8FWG1BykqDc9mqUPnv5GNmoq5GYoEi8RJFst2JbDMQxP6Lro4qonvPu9EuboAm",
  "key2": "214xXEJ8zy6iRKjwqvFpbjguLWDaEDr3c6pn4GAaiXCAesrt6BbwoKRkGcHgYdY4u48peNxoujEHs5dqdAvMALue",
  "key3": "3cmRjmhdF1LKufqQg9Tg2RQx3YWarhfhK7981QzjCynGGZ8XpfpscSWuruVTgMWgpoMjPq1V1sCEYv1ac98HXC3F",
  "key4": "CTfYBjWm9hoErzuNGdYKVCVwY82ibDniFDZKFFSTuB4144e2KgyC3ARWQKf6KPfjDE5PYj6eynczoGuL8vL3Z5S",
  "key5": "56kTkyH7XkkY9kfPKFnSBjumdc3Zt2Xo7k4GjQXRvhxBXorNvFf65YzUeE1VGmrqnFmTxPd3nMW2tPsV4FgabJkV",
  "key6": "2bgGqnZut8gFdKBURuCTF9CeXPSQUjkRyrxLpPb9hhzY29VjUvRGLGHVWBqKduWabPVCXvVnCJAcZyfbgEnu6B9g",
  "key7": "4XQqf8KxktzcRgQD8PCeS5h5yqoBrMdhCXvS2E8v6pzJVCZgkTvjJBq2ogvhqVHUWgQeLaynbM7Kva4pVWxNGopc",
  "key8": "5MSVXvLweE2UnzDnnL7mvqRZs21W3YJbYAbyPhhtmwKSyVgzhcssbxmwu75rC9VCmvHz4LrnxrCwbwvH5cvXxf5N",
  "key9": "3aei16FrcbMRVtk3rfB1nnKCrgiUTF692i5B3j2tmSUvU7owC9WwUfJFiQbBu9zm96PYtPRBancwMPPKat9DCjws",
  "key10": "4Z6H3Cw8zVxsYnpJ1CGtfhH7nYKM8cUz7gpU9SX5vRJLhfZdnqTt4Vy1AyZyZTMehjKPLNUoxVDqNKYNYiFeoxyD",
  "key11": "5Gv4VGia9naqR5kU7RoexujcKSRTgw6ffaEKKnxQeM4M1hjGmgEUjghHbdjWk5yJtNC6LimREt4rzjueiacm1ZKn",
  "key12": "4KgYdsL5CsCvo8KXjjufbBJ232rmWDr49NyWR7CvjDM34eXHxBwxmqyRG9c2uN6dnNhUwcn5MDFaZAKJh8FBeeKC",
  "key13": "4V4HEnB25faErSKoCe8BTPnW4RhAo3TwMEsomMZaJ5B7K1KXNn98ihdx1EX7jBZyCcU46ETXAKueYpzLZCrs8C7F",
  "key14": "4YiBK5KeG2iDktxheEqQGrirLVmT2K87dz5Zj1nxcF3hEuZWH1rsbJzurBGeKw1EfJVEK9EeDZijk8Tr7FUqi3D8",
  "key15": "3QVqT9cLWFvhrHhLUwij9C2ogZ675gUNJA7guPLsupEWi1qjjxJNXBR4Kftou1np5GR9acYJtqtwhUZ1can6LkiF",
  "key16": "PdKSjc7Qg43W7ZXJP7ZD41pEFihqAVDNewPU3d6WtoFB6RjvA6C6smRhSgh3CfidK1g8WdMN6PaLHcPn2q4n3Le",
  "key17": "eLWWUoT1RbLAE1M6bRhCjhwPH5qYizAVdAy595UuJaaRBFd2GQd9hqwUmxE9K8217ZvHPhdBGzVwBbtgnUBNtqm",
  "key18": "3BPQugpEL7YZ2NqUiR7o4kVxKqZJa39UPFMGwouF5E8Pio9F4H7nRZqtSjuVrH55Da7pctUdadBdjCxRSz3P9g61",
  "key19": "4MNWvsYWZBWChBcFJfX9GqEv2DUvPAze5BsegK9LvdBMbjDiRRqN5YvrxiiaYJHqtvRTV7DxFss1RVtdiQxWYSRs",
  "key20": "4VCqPbyC1wHBxWsQUGBveV8fUiFWedsYcmRN77hDbMYRN6BP3vhy5o6iDLnzt2t7ygwr32yZ6yQ792J5FPHD1Z6n",
  "key21": "5xpsLz7JGwFNaynjEUjeT4jeL41E7fr7LvLuWRGaZdCcrij8Yf5sKEEYEC7CuWaFFtVELjM5rYtbL76o4A5s99YX",
  "key22": "4x9hx38ot2Wy52YAuxkbm8tEAueQ7em9poS1Pheypz1zuDwvW1a4Yy4nDTCxoavY1jaSnDoCnHuqZe7FNyanfVyx",
  "key23": "3ELpRFgko2XUuwmospAFY9nGuAatFwf27niSR9nMsbPbJ75pRuSk3smpJnULHpQinqGK6MmnfkVDcs2r7zYnaqsy",
  "key24": "5wxLoj8tqtcQiRdxiXUjDe8UT2261M3fQvg6PBMRysUiebaWGQf9dEzc3RaMTuFJBFYCXGHzgD7jmFNFXtLBRA7V",
  "key25": "5pLsyeDS1oL2PacragEFuNpWnwMeUj9wVyvL32tYMyjdzqKugvMDqDZ7VK9PCRNKN7DGXJbj6AAe3kP1zrWn2sHr",
  "key26": "3RQGcNjDhD1LBqxa4nURZ8MsAVKSN9j2x75DULn8i8pokaQMtr7rnafvE6TC2Ju3hXiSmomjfE7uXtMMGi9C6QQ9",
  "key27": "xBn6aFnHqZBDRkcDGkCFswaCjJRxdfDRpTj8jnaJpEWbaSDJvUqzWmdwTiPxhqz8jyxPjqvjJBPgXUtkb3uJ3o5",
  "key28": "3VCxbtkwL5KrXUHCR16xUQ4X2cV1MdQoVVJpfhWoE8dHEWodfpauKMFKDiTBpKo6fFyniFetr322ysDuHbwMeqmZ",
  "key29": "j66bMyZyoTF4GFyBXunBDaWiaCk6gjodqeDbuiZE6TUmrnh9gcnwiP6KXc5QZNKmgP868925UwjFVeBSruKVx77",
  "key30": "5CcFTbm1WdvpwMSKWgtoJMNS58mavCPSWXGL1NxgM7Dc9TR6WNRtL4SZxcGWL1w3GbA1QePwrpsUhgTaUSpSBppZ",
  "key31": "23GFWvGYs1KoydMiu5QQbgR4UMBGyQqNhJUKv2JQhxw6DAKrmEXhHdzrQ9fFrNHyNzezXmB8qT86yt2yc6qEfJbb",
  "key32": "55SvSke8FTTwkPPceoXDSR44vHcHf3xVLAjMo3MM8HtXd4T7Po4bTJBcmNE4B6UCckeCqfaxoRD1JGq4b5RFo5e9",
  "key33": "5aa2BMSReTN9idLwWbdaMao5gwho9PRi1ofjrj97zzuMfR6Q6CZXEMPbd8fz3iC5q5XDffS3EJtFEuME16hMPkQk",
  "key34": "5RANj44ixVXyN6Mfo982jR9NS2tHxAjBBjwj7t8raWSZyDV4n7bg1wqsQsk8RwqusbmhevK5zd3R6XBPHzwWVWPS",
  "key35": "2K8giarwKdM6VpyCPCmtNkLsaJcrantbRxUVvPntGjWoxDfM5XEWMJ39QLt3TJAspqidobd6c5SafPKf7SBhtetB",
  "key36": "xgucSoxiHJF3YyptZn371qaAWpSyN4yKeJbUfyb8MXeFYWZ6QnreX7A6CuHpkbYyK4YuBsaJdkUS65pxFVx6UoF",
  "key37": "n6Wq4fxADTFAFWuQyq6RX3Tpu57DD33ZKMi4im9yY5AyX1swvNyGu4dxxnhrK2VC8ocPnNtHYnAaJrJkzyNWJJp",
  "key38": "3V2HSHzwJUSmiZvL48usuJotALWh3Fpd6Qragx3CccsahwAuX8azd4s7cE1TnVYDgWxJTqoDmzsXGFeQJwv5btFx",
  "key39": "32Zgp9dkvM4EPgacUUPxJn7bJ3PLP4fGeXoZ1RzvGh8ypXFvjh63ycc7yaAsSUpvEQxg7y6F37haecCW3LZHhX4T"
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
