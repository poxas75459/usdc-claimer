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
    "2xQL3V5xD443C96vRzofMMqB4LpdmYSfCGwdmUeJnLqd9BKKdeqckL8a65ab9ezQPYWskHCm2Amo5arBy8sPnirD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HLdekn64ELMFjBPmLw83nzBQ7zNERSCXSQhYy9WoGFQb5V49FnU4CHLv2xyjn8Z2Zj1wATM7tUh77skdsSC9H2z",
  "key1": "o3PDbugmJNHh3fPjQ1cLuLCGQtNxy7569PNDUek1oRyTwarn16UDnnUUCY5PENgi6nHvtZQLQ7ndcMrBmbxv5QE",
  "key2": "2RomUY2gijMwgqJBpSAdLVY2i8tyckYwaiFjk32DJYuakfn3RDwyYq3p1b1wRRAQgiENWB73iqRQZxWZ8oqeFtDa",
  "key3": "4fzyx4S6UiCSoXcu6TgnBPNESSW6no6LhJmLsLdJ4VXyufqc5XMuiLrjYhuM3ws1PAoWJGFmCXedf69FtUENMycq",
  "key4": "5MFCzB5RgUziEU4WymYQKMYuTyHHDUPLPjvNsuoYvUYUQTX1vbra47duHxWrzSNbHgt6dp43DvcJxp9JWowkaCy4",
  "key5": "2yhMgLtmdE4AyfXEFUxQTN8CDYXUSFVyYGX9qHbw71VFcbmH8YXxuvZZgHeFVsL2eDNmELGu3WwjjJkqoY4tWaKb",
  "key6": "E3JjUmys3T3yM26rJR7TA1Dpu8a6Dw1f3wUieAW7mj4foGGHYQFkP92Lq4tR7chqwkpi6oMsozNRm3jPeqkNGa1",
  "key7": "23PiMh2ims3EMaMzD79iW2P16zFBhyCv921WGVQatVixDV5uFiRGpiqwLR3DxGiHXQDoHN2t31vDsykvCAMujmeE",
  "key8": "5F2vpDhnX7xLW2t6xQTfbUj3Hz3BKL7heJUtM44cxfypwfsjH6vKQdvGaeoCyUoEXrFVmDH5ZKizNYK9NPD9zVDe",
  "key9": "2CBALBrZV4S3HyYyCspvifdM59m4cL2ysEx3fsrkznTYXZdMRo3JVa5rh8mrhXgdiWm4jafBc2cRTnwdMpd3jewa",
  "key10": "26hsDDQ4xWZFLnZiEerGeQr8AeBUmYu7MKt4k36kGm7bbJ16r5cH9p7fGmrWEJPur2QiFVHYLEYbHUZ68a6Wwf7T",
  "key11": "f7ek63ztj2CQ4QUjHpMXy8qSUpYiELThSVm9XB2D1NSwP5hqXH6HGTPpZbynXsmSoDo7RajHQZxeRrR33vPRzt6",
  "key12": "54tQSavzwaND8aidfwouzzYtHz1Mak65pUFugd2yTM3MRZEE5kUUCZiiV46N3uaHZnfnfivETdBpSccNjCBrgwYj",
  "key13": "4DWmTu9dwnrjqyqNRuGXjKL4oDxVLPazTMZPPH5cSCJeXrmskteaAqPFM8ZFY6Hqgju3AQGQtCgaYg5PJ4RsjXe8",
  "key14": "2jHX1BWLNB6krNomCjw7JUsoFabUz4yjkNjuyD17rtx69qbGULaoAY9K59FtoaFEEZkhGx5ik3xbmX7ZXtRf82fu",
  "key15": "29RA4gnkGi35W5pyMChnwLTnvtbTgEWBW4JngyzEuczGh2ofkDUauDX5uFueZCEvNZ7zRNgQj8wPamZUiBFt2XN9",
  "key16": "zNEQDzMEdtJ8BhTCHEracdfswiDUmuNiwzsJv8d1itbVW6vx3jWUMacdHSBPbeJ4nuoaBCPuSDNJuzaySdedeVm",
  "key17": "5k8BRDQkWjSJA5ePYtGUp6qMgDFjAkmP5tbyKDmN6wyiog3x3uSh2dWwt8rQE1WqUP1icTnuwrWzWGnCBnRHiPTT",
  "key18": "3SqXon3GUEUX2CxnkVEDp2Lo53CDwoxbpygTwUJoqKXjTBLCmd9DZ8q5SxBeSNnJn3922ejtComSYJiCb9uGh9Bm",
  "key19": "28a3zxaNTfWJorPG81s5kNUMDjG51gmPubsCmQLp3chZF1wQLzfQvyfedYpzppSBnPfL6WGJWfvm3tVECPc58boK",
  "key20": "3SBKG2ddKdhLH8gz5RXMBHCFjaDGot1rSVxJv3dvfYAgT7WzMBjcn3wkwyEQjts4DLJwQDM61u2Co6iNtNKygwcR",
  "key21": "4LVFmSkVWXZykiZXmKavonmpjsJY3LDukoaZE8eiHSymNtNKHuTYfB1JMPCHPBq8FSV1xoszER1VTWMmyaMTSEM8",
  "key22": "5LmvybEG5X5N2q3oMWBaeBNLhWUmB5ezBURpf6rCgW4iDWuYXBPKCxSwExBwWY1Jy77FmPkBKjNNGqXb2auxBC4y",
  "key23": "3M7eBPoJv4yX8QwyvpBXUYU7K8cadX9cMDZkHGV5cQyRe63p7mP4FVaKjsSzZJVXJWM7EELgkcneVUEtKGV4am6J",
  "key24": "UGbmPhtmKzGyEzbriTFZBKsqgXyNL3y7LfFrRRTRbTcFgzHkE4SypP7mePNiYfvHgCYcp8VQUikjG8btENLBn44",
  "key25": "4eP8npUwFeV9XXZEkDoaXDq15eosZ8TmQVKxYZFxyCZfW34iuvNnWwQTfJbKSXScG1U22U452oSRPKpKCtsbVuTY",
  "key26": "4eAngPMFVUYiBCNXoF8EtSkjiiipuqxETSpPKcaeKaXi55Pm2Sh7Q7RLAhtzfxTKpFHULSrYBbsU9ytBDBwySpSe",
  "key27": "44ABwMYc8fZaW4vwNenVzd9cM18KzAj1VNo2DgjdER6gsFqxBM8rmq8TxQL3PvcpUevf32r5cTVtY8CLLAToKqYh",
  "key28": "4u22kAZYAFRGUScxCe9mznnzSxHy3uaQ5nbmF5xXzrip4HnNkWd1tNJD8RojMF2VWiYNVCz9VPjcRsnpZ5RPedJA",
  "key29": "a8RCJdNw6BFuQjqXCAXknbye5z3BM5CokeugZgrmPcLdLcQz7YDHEK7bhkHi4sHAQzhAipB3YStn1kQtqkzyepK",
  "key30": "3Fy1v9p7HxUtBc7BQHxHUHyXmhVGXWaeTHi9JhqSwFyUiJFtz8jnPYqgfBGEZ9pnvYBT6EdPRo5KG2UmZzY4Vrv8",
  "key31": "4NqhaiqFxubZEDvD6wxJ7hQkYxktNGbgRpaGmZgcEs6gWaa6Cbh8ZGv4ZJBBEpbwWtBc8tt1Q7RHZ1BsDSaXRSer",
  "key32": "4XJkft9rXVeVapL9igivz2oG6pAdA2GjXS3fcUKPxP8xYgYNF65yWRxWo2sUsALX5WL2h8YCnXqmxCVsdUcqwodv",
  "key33": "3Jj3uUKbGCd6vHiu3N41N3J8zdGPUVWaDvw7nCPYJLdL2xhDDVkKtctsh41Vqtt36qzrRt2xp2Lk4Q72c7wdSTn6",
  "key34": "4NUQioiYsuAWqcUC79D3aQzgvAT6hLnv9FTRKSuQ6xECLG4bpwugbZBuyCXY2VJHdBNs6pUNJzrBEABbKHYB84Bw",
  "key35": "3WeQZct4xknBuPCWQqoTs1AL6Q9zR91otKrYGhxC5Yw14buo3SzrhKyfgwU65iZcxMpCfbqvhJFBTbKGraDjVyeG",
  "key36": "3naokcdSCMhLbFhPTACoZHa41EhAX6yieukojUi71M1JVmfWfqWNBbGtwiotZGUN9WcZU7efSkAZhFidoL3LXXuV",
  "key37": "5Sa4nRbFg9bMaB63hiTdjLPnnZz7KqRGFikLzYtJTuzhBy3Zp5xqZMR6ZbRdMpgd6nGssJN5fLsD18LzxtvcRZ85",
  "key38": "2MxVNnf6XFbcXn3Yvh84PyhgHsTAjewvKxHPW4nXJFqqX97Yz7UQEPhKptXpqD1uNvnfGG4YJQptEoyGnT9dNYmx",
  "key39": "4kuk2SBVcnCLBjVXMtDC1uTFQX1sSJVNyd2SScQTGNVqbKqtWyD5NiAxkey6iLuumG9NENNfrmp6Qw7zSU18UQxM",
  "key40": "J9aMcLy8V1qbpTcszWKbezW328RG3wwNAhce3XBkgQ4ERYGQntQp4hzy8z42Rkgtr2aYmJRpLcLnD3WwVJswfVn",
  "key41": "633yVeyz8GChG5p7zfSHfv4MNrExUtBo37uW4VQcUHogGUET2sNPDLgpzDfn4nd63tiYrUzNwqvzww5cfpoaMr7p",
  "key42": "56fMXeHsDHLLjWBfBcKXSwW8MEbkuyrpFdP8QvzZwwCE4wWrEbybGSmd81zWJK77c5muRrQusV8Vez2DTy2VoxvN",
  "key43": "62gpkaQaSb9bEVEbV4zwub11hB841EnJmbMqjaAqBxtqYNLMTCocXoeQ8TCGLcNgH26gMuHN1w6Lx57qW6W15KMg",
  "key44": "3PGzrK3SdnUK1MYSSCeKh1mUaQYEHJ1QVoG6rYo6xGhqBn4xgcBTZXkpZN5vBFdjFJGQuoAjLu3VwC1KU3ENfejX",
  "key45": "5etzGbbW8s1TyHdWXXSw3ngfPcJqfTwmvtYAzUu7doHtmDu4cypNVncnKn3WEvFKaoUMmDngrdVRFWXVJYwVEc7e",
  "key46": "2RLwmbvtEZh6PNecWtYbSG6DgonnsUemRzH8xrTGSbBsQsbU6FVPTwkDrR6dHC1R1mgaeVJBwTscf99W8iC9PGYF",
  "key47": "EwVhbYhNK8fyGgJgkcdByvwmHAqNqzY8EhsHhsvyVfhB9rL4MJd2QaGtsL13h7bvNjrwRzh2st7Q4vb3ncTmb9o",
  "key48": "4hRrQftATQFsUs6JhM4RKqoouT7SvDdN3cbcX8UeKjbkrrgx6SnLh91TXPYDiXxD3sA8AyuTYM8YZ8Zb58iXzFYc",
  "key49": "4iBCjEeXfYGbsNLLosnZNNsqb2PpRiZBdFpXHGWDwF7YZqdZpsH9ugfnFfNHCtu1Y7NqY9AHmkpye35EYhMXTSCZ"
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
