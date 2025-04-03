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
    "wYG3RCpqZSgzfUX7emDo7Nt6p4freo8aw9K6K56tqh3mUwLjSrdAPTC2FGGYUHhZ4WNcWYw6XmTYfMsRrE1xpCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618Ep8pt1BFd12BpbMENzv6vdmJ4YvX8hiTwXSkeCUrFw4pogrMbGEVUqjWxNTsPxN4iP7cVHEi54g9tR6yijCNG",
  "key1": "kRxcb47gGcei5EgBKGoaXPcbxYZif7bULBt4m8W5eC8TJDLZmH3rfxggH14BAcfu127bGVQnEnDkcaJrtVyNndR",
  "key2": "2sAHCQp2NBd9JA3xjXC7PdbwFDQQEkf8EhuwSUNqhgT3KpZ4aTW7TrXeLJ7PjHrkQh9UxWwKPGeGspSqKT911qDh",
  "key3": "61F4yTtjE2Ad6c3ct3hnj1aoGTDiAJXbFPa7nf62eQbKbvU3RauN5QuFfQr67JTsRP9Pmjw8tCnK3QCnqxV9RiKw",
  "key4": "4XESWzgoEPPi9Tw4nsEkp5DzXyftDqS2kkpe5Lqu45UEpnWQ3JUcVjFsj4Lu9K3r2YXT6s5WhAsVPa86U1kQtWtY",
  "key5": "QoUcgaygJ1oDPNZXCPYddi2HJgxe3WDvfPkd9YmW77GWqeTss7UhPeWesqNQa9s4HoNjvpNJdPA4BVTVHT4Kmmy",
  "key6": "3JjbpqxtqLyMnNoecdwyD8ar3fRAEgHjCwSiMmbJUg1yoBAcaKBh1RkkoXTYfUFvzgPMZcYGFTzTLqFvDrjebe31",
  "key7": "34y8bJnWd6yGA1PxjtCWfLy6Z9TqxZCEaGsMMDWBXU8EaDyroxTAg8ensMDmHBbscKyCHrHSv2DM7895pJUQgxzG",
  "key8": "EUYWZ4mU4HUamF2HykEQaqyHSRDGGv6UBaHJuhjjGb41gpACmQq7rYTjfthYfBkYwgot4DTTNkkNvMa47Fmu3f4",
  "key9": "2tQFHfV2emDPqKe5CQyakgGH1BJuhn13vFXuSLLxpXsyVuTWZDpEVJsL1pADhuGK8BUJJkaiNxQR1SydjzRQAkD1",
  "key10": "26EQr6x1uTvY7YQFSQYN7chajidx9Bj3FeUvtU3q4aB7wWPNJkrxtBHutxHeZ38rztAXP13ZjvDi2zVVXtKVJWFJ",
  "key11": "4fMpBJvd4iBqKQfp1JVJTy3Ca8Y9xjJdxUcd29z4FNVMD4qoVQtBjsqh3vXaTRp3GCimPNvb9qjocZAafmcjComK",
  "key12": "pYMoNTavGZvLfdEikLhardVGdP4ZJr8vzURtxvEyTAb95xoEMjKSrEyRjMvx3Kk3oPK8wdHczToMFGBm2iEeytH",
  "key13": "4zp1Ck28CWQc6rXcXaCXnRRfwPtFhWxQgpaugpGhEc1wwspRnQ8Y3dTURP64bkJjcWjGvpyg7cMwjHPpZeXew5Tw",
  "key14": "3947NmBMFHKAjPHtHmc2DGW8vkE5UgbuZdMDnkR8uMS1Jnsc2Lhmyir54V8gT2DuZfzSByMakeiY4SXZTsqfEDVL",
  "key15": "2XSHMKNiixMZLDxooddjdYC5KDghg8WUhhxF4KSGSaeg8HPRPdzbiHa94iYgJRjpnLeFtNkV6u7nBW4Etrb6anPL",
  "key16": "3pxHPCKT5ZsvMtXUMcAzUjFFjC8hXQeXhnuALmbhY1SBzJJmGWGZVM17ZPqPXcC2rd24jVyuHw7kMdp34PfiZEGX",
  "key17": "55ZbVMX3WHYva3ZC3jcSBR8RzEDceYFs3htp8LSNoQm5XeHpc3QmYn12MXzzM6yEnJqPTRNqc98h3DVa6K4oFZjx",
  "key18": "56sgdXqzjqjFD4syAZ325YoBBhT1AsuEHm4cEDgpg4JoAkzspCMogH7STHzbPEDr1dkSgCXLGgnvSmbQFXy5WNMp",
  "key19": "3LqqyV4DPP6Yedpts6ZyxMKiz3apdv9nqbemwg2ZB4LsVnRBx99juFNhXvUTMZUuYsxnHbEUjnRb3DZfLZiL25FJ",
  "key20": "51HGwXW82BVkJZ2ME7m2oRRekQzWKbTxfg3hTC2MjQXXgaHhTNAsYwY6v6yUY66tYt6PtBrJwcBWWrgsWzgDuGih",
  "key21": "22KwuLYMzYaG37PYT26vXdnW5tTQ6aSvUBwaRmho59tQT35vqtmDFW6R5jjqQW1V44GjXbZXMJrtjse74Z4bfcBY",
  "key22": "3UZVnpCM5Pw9ZjvJH6uw2WK1LWVLVzXatpMM6LZikPVfJ5C5x3p7xYeAawJZf4PrDvsctfn2i8KPbDHvrhs1GRff",
  "key23": "LRFVDBdap8o5cANttfsxXQUHd88zdd98DDnqRqZZotqsNPfZMyVsQUZVcTRSieHuTe6FBczid27nfnRgAM976NW",
  "key24": "3HZkCGZ9N2zyNjbgUT8zKvxQAn5QVRGbjfp6NPma6wgTSCUsdvEoSheNVdZ368zRSqBGr6MtkpAafSKQD559toyf",
  "key25": "CXpAn5MdsnCmdF7W6eAcTrejTmvfbiZoN8Y8tJex7t98VdDLNvyb8w6UPYmNaDrKN4yEzZsnWTXpoWC6P68LbWJ",
  "key26": "3jRNinQZ9gio9wjqTjowGkMdEVEUWd5ZvAXcA5JXNBVYDvJX6RW7aaNQXVJkBccCoHJ6wweUCfwaFvYokbQccqXj",
  "key27": "3bTcuFnyyd93b3WR95YzNXDipzoqsQ8gxx5AedAFP9vCf8L41P4161oLARxhE5ZNQ9Za8wCYwN54ZURppL8NSC8T",
  "key28": "4XrHsDzAtvviyRc8a6a6pNHvvW1ujnERM8kPToFBWYStr467V52hSAT2eZ8chZAyyVqU28u5gyzyRYBe3GCNMn8c",
  "key29": "5x2PzdFC4CjS9tJwW5w1ZfbPUzbLsNapuRDF1oenay1HYuBc6CYWseBtiFKgT9SqGApU9wwimPtbbEAgzpJJT3wR",
  "key30": "4fVjN4FRqYgV3iexWfwNSgacjBzpf8jo8YFaceihEi8L83ed5kRa82c8w9dYekeeH2SUkS9FcsQQHrKdcPRyzM2q",
  "key31": "3dmQFyxsvkXNULH3Ub7FAT8GvEbT1uU3fwxJNDxvxgchLD2RmgkgGhSSqfWFDAGxKPaCwLZcCqoehAbdK3s6KWCo",
  "key32": "21EJbGtyxmPZGDkvz7G7qE4Quf9wCP6shV9UZa4rcumSLyoys41hPUubM23wKS5QeKvZJHa6r5hozzrSABwgS3GW",
  "key33": "3puiALybLocSofSmpdEZLQK5h1ugiHa7KgAep8HE3MA1T37g3YR52EBaD8ET9uR6njptK5G8WGkd2vFrrYWoDLkj",
  "key34": "Paz7mT3jPFvfhSCWGXgfBzVQUCwaqk3XG3YVCq6oLRkyKBDCoySvoPEfPncmvfL932k5DfQGwrPVUuw7aN6rhcM",
  "key35": "3ErWXeCrKB9kDBJLVkKedtc6QooX8MvRnWR18pejUsBhcYVwn1ZVM5Jg7ERkQpGZojzSrS1Qbnbi65HVUqTU42rW",
  "key36": "4Qpb78mdUmbPnodKYjTX4cRFMtbKuDQMjD17cdVTzFiqj2kToUEoDE74QJJLwYCPE9LVA4Rx5dgcyw71HTFiCp9J",
  "key37": "5LbRJ1rujNfzNom3AsgNtbgqNys7kSP8RaY7LQoscX7obwVhJAQKMuzmrSX2zzipd479FikzeBX9GxU5E6HE1Q8A",
  "key38": "3X8ZpoBirubiUhTnufmakidiauW6zGvCB3rEunxubuPcQ6WvEYa6eey1pMUHgepbm1aVT9okp1KUCT2RVYCuUDES",
  "key39": "BjHeSAxHNLzKHj1AZiUottJeRFM8UnRQjbJzXHATLVJLuXcMnormCsh36kRbYn9Arc7shwD5fpibFFWusN9ra3E",
  "key40": "5rhxiRLVuCYqa8iogWUCNZpQs6PpMnUFsTYe7y7u6gUUiA12QqdwUp2piSBQnMt1MEeZFNYFxnSW7odUx6hQqFLu"
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
