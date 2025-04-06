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
    "3Tucg5Fj6tYrdm389tmXTSADWRoMzyrKKeF6VivQ6ykrEoMDx4hKp8Dsz5Afe7YXzPn6ePro5XPmq13ydXaCDmY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nihVygb7275v4WeA3irTxJoEPZFdSFRzFbWeK91wbcqk3ATBUWJ8QKE945DkCzcxppPK3ReSHn1jm44HCU1brnS",
  "key1": "3G5LqwBu4yFZ2CPHv1ZX13WNXG2p7gC4kBmjvdAsQZyzJAiXiPBdCzhjmH7MWvbNFHp5GH34HFDW8Zet2T21hitL",
  "key2": "5o6okgxUuA47mHTCt8BtZQ43UojPUiqxAH5n6nXtvTeJEr7oj9BRcHY277nZjN3VqSvpkXCsyGCUztM6Zhc8DP8a",
  "key3": "2siyk54WUQmt9WxPPxRwLBNVnzmp6s1xdo4Xq65JxaAhwzNx4o7syNSCQmDrC3w3ozzmwKPFBHT22MNRh5bjbMwJ",
  "key4": "5neC8JYpa8exnrUKSBa8vCdis9kVovcgor9ccNkzHX3QqNwv1WdVm47xEcQbCCmFR3P3bofutEAjrLYwnUHVvVnN",
  "key5": "2h6kTLso7rPvitTHctzxmiveQZuXTacDsidzCaEPTZHCBfZayi3BbqKr81ZwRfZ3XbAtUPw5LKuy72jVyy6bWQhy",
  "key6": "5oi1SoUCHpHBM7tYTTtUBZC6cqg8X53EHn2QrBAmDkiXyJRqeW2EEBYaYmaHaSqiMTjipd8HL4f27YehcBqkXJCq",
  "key7": "48AHefS49gq3Bp31bCiQn319M488ukKmgh2FV2LeTzEgStcLmofPvgCTFasWRCKTTbMqzZU4hC19UjuQgQMovmJd",
  "key8": "3J4HmApdx5xqaV2KgaeRBch6E1rTn9iHjXN7edbNxJ5veZkWwHyWshsvjnrW5hzGk5MrLN9g2wvnTHQpyn11BJQq",
  "key9": "54VxXJLmyAVWavweLfLrr999NC3XfX1efos8kpmkYfvEkXLW7sN5nHPH5trcUMtzLATDk2M7NADk7JZ2heE6BNVM",
  "key10": "iP5EMETCcGrKxqhHudqy7gE6pcntJJo9qX3eAhLztNPB3yhcDEqfkUWkkvyDzf7MNxjQeWceQwNrYbpe2K48NvH",
  "key11": "2LF4SiDKvUeyoMixxxMv1hQL1AUY7R2jobjNABemYGWeHhe3KH9kTZfDbsRyDLMTmn3tdBzW9FquKUqV3qvrPCZz",
  "key12": "3N2XqNwMwbbXxDY735Ya4MAaiEqKNppRp6psmHradegQ448vHuL3DTmMS9D61H53cgyzVpUBjGWyh58MQwq82RGh",
  "key13": "2yQAfBxDzABxd7uc43ZyGAt8BtrMjngrpYWajDkGpgbhdYb6BpvQhoM6bvJf3Fu7Yz6hBibcv84ZnzwKAWDKTVUR",
  "key14": "wUzW6MidiUMN7ReJQvr8Z9fXceLtwXuWkoGrjAgNGGeaKCHh44hiyEo5khDpitpGuuEE4ntTTRuTiEfnqaSZTm6",
  "key15": "43ohoZCwQhaTZw3gxskE3WbFdRzspY5JGsh82Xd5sy3nz74iat4efbo3HeDbknYWDcQ9ATnNLhZ2Mf1EK3BA1yr7",
  "key16": "2Uros2kqzQP54kK4DyDxJEkVGPpPqwgC5vPKkahgpvAKANJzYgZVqq6UrfFzvEoHyjEYW1o1VWorA9vJWnByxkvN",
  "key17": "2c6QP9FE6y3auo68Fu6y5L4JoMxy256gwRhHrhX68j8ArxYbVr8jCjpLzJHKpnnC3BPppE8rWCqE8zJEPA5VKpDE",
  "key18": "vJmAHebWvkNdfxScUTJBsox5JiidtrVMCjSsEg7K7RGfDf1fsHQpfwfdsSmu9kbTvNYa27KA4MisK8dvydiccZZ",
  "key19": "4tFpiXsmnQpb7ftuEL6AFvDRmREoZNKU7Zomke7i6g44zMc1pbSBNLvp1PxRwMWBB2tmCgXx3N3ddnuVEi5LwcPE",
  "key20": "4Jm7oAEVgSixRW2pZhmSiAuAVBXeYDu4c2ChC7mbVKyumScjhTXNQ5Jr9kzuffPfLd3zvD4XsBRh3keUboa1F1FG",
  "key21": "5GJAibGpLryTKFFBK9EVAGfVopaw92A7Zrsjt56rgpyEoA9Zvo3SDw5dBkMXyntzT9P6FgpzrkLvtuum4A44X7FT",
  "key22": "mGmchuq79vgfuPx4V3ExQKx9JgfnEv8ZvjCyBbcqhXX3YkLB847QYX5BKbUZezNxQuipqoXjzjnQbUBF1TnpMhB",
  "key23": "RZqLrGYtZLLf8QTkF6nTZQPde13j9Pt2WWM9P7iYdC1iiZPbX1JK3M6znt77E9eqvmfJmh41QmWgL8Cutvw9jKm",
  "key24": "uj3N3fJVQCejaBcxkAYrHLLc1th3d75AEatSHMEvX1PoHoNVXQ8aswuh85n9VRBLuBmK76aDPvPWbfKMseE2iKK",
  "key25": "Mv9zQixbHvWXznfzgS6rsGJkGW3xLt2wE3dsrJ4Pn3uHF4AzpTJaw6AymrLnECwQZpyRHJ9swXFEoU8AkqqRKNX",
  "key26": "2P72aYzyUF5UrDsmSzgXdF2QTshqZHrpsQJAozPfuZHYgPY4oUmJ7bBLaFhfZgLgT4PmGpZpX97ZncTgkPU5oxTr",
  "key27": "2NML6W572pLXPv5smSyvXJJgMSJJHgWuo51vKH8SVR8mHekzB7N6z1wGYsxHL4UHEbSc3amR3mMPpsgSxybagpsP",
  "key28": "5GBxsqUd7XA7wr3GgCRrxngKgDgVUkicYqn7tRpEg9ryZGEsEB75zTBK37YryH6D7E4rWXZRQjK3UPw6tZht9wwb",
  "key29": "3C6kaB8EWcEnDNko6eU52hhfZsBxKgkvFg7tGezHgBYtdfD6zSK7F5epibhpuhAW2DAX692Sa5wUzBDVxukAXyd5",
  "key30": "48PmHG2kdGYEfeprCKJaCFWa1WqtTRM96x3qRC3Arsf3cmeXEuWoGNpdBEVGjQCmKSjo85EoH3g2YfU3n55SnbzA",
  "key31": "2VvMxzWyQyCRYXjmD8cLQRKEbeKWhn8eJwy8Y8nF5s8K4M8Cms6tsoosYdZvuQWMpHkuzSa9ioQD6eePoHBiBeFu",
  "key32": "5Loj68LB3gtuqFRWRobbChj5ctDFEWFsaCZyijC8CEJoCWGvSWZxgaYmBWDkodb6qic25pWJTktzArrwHUjPmTJK",
  "key33": "2KfXnZXFyQfiHLd6oSGYjbEcDq5rwasjMVTaHYtZuXfHXRacxzQFHxmYi6i9UBoE6TcMv7uUVC33pkCgDiLb48o2",
  "key34": "29ZrbetuzHgZGMautehGqdMKHYAjFki3GaRZpZc2tTZSB4X18eTjtWgTXYnEmBKwTfhGTHztseSAk4ZizNtYTf2a",
  "key35": "aCMPLkSCvL8t93iYLwksqmaZsbVkv65jP1wmcdajasmjeBmeQKdNUmQk44yB9TEHZjknoV7E7BR2hmTAueqXd9h",
  "key36": "4LswNLdvuNe6QD8AYSuSLJUBJd22UeYZUtvNrqckZs8ZumiscbLFm472Z1c9ArfkBsWzHJ6W2FvZaQ31PVpTipo2",
  "key37": "3PA2gcBicQA9G2BidLaxT3qJNESA6cMRSgpoXdp1HqGj2NvkCaJN2pKGQR7yoQ7eJLx79SGZr2By2ToH5dzGwDRb",
  "key38": "3Gp1r8Mi7Upq93dgpU6p6uowjM1r4TXeDEmevk4GPzLVutPERHo62HDszmBfE8cxnxDNzmNrus63i817yCSafCr5",
  "key39": "3roLFTJQwa23MRCeMqcq4Yb6tb6gaQuwbihKA66b6dmSE7kzKtbrzU9v6MrFAY289V4gDUcrhLrfYfDQweM1vRcW",
  "key40": "2rESNBVzZ8H9VYHTcJ9jw6v8Ns56KywQyNCWrh1Qe5aFEZCGUdverABFL8uvF2UADpRRqwiWqqgJDREghKNWaJZx",
  "key41": "3PnoW7XpPTzPed4FydgaRZBwWNzqJbxftwQGVS7zCb13KDjqPMJE4zCsHzpFySMjjo4vkwTSLFUzd3cvdz3HPoM1",
  "key42": "63d46GCPY3EKxXs4v3MHdjTwVhdgupAsFiMCpZnrYbTn9LjgKGcCSvam68u5anYKKxFyhw6GTKKnTXuy7xUvXXNt"
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
