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
    "24Z89wVKiFu9eskF2pCzZ8EpqqGKSrec1nkT2LVZhjY1QPf5FkbbLURyEfoDwNBEpUw8AadgCV1b83P7kfEKpErU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64qxwY9WBJtmdxNaBbeDdYd6MAPM5NZwt6q2aBRWg6NELNy9EmhTuBHLvxeMdkXBSmAP7vsMN8uyY36JLE6G9iu9",
  "key1": "4E6vEkpJPRNZAmoBpd6baYvtJQ4WWbmFoa8JMtrERAtpSWCFnZZXY9gQ5Ji1FWd5gzsfEK4bC41UbaCWEsRRTUgR",
  "key2": "3Ti6UFXEMHvkk37cUn7brRoaZPQTbB8JgBfzFJ3q7hkopArRg1vqG3FutvdDuoUyRze9BPHBrbYnSpBaYruTuvw",
  "key3": "4cYzZWhe4aAyqASS3qkujho6YBH1VG2rcUmQozcLJ57Pj8kiVQn3C4aARwBPmQZpg133gLWd3MABi4YEB9fFCKr",
  "key4": "jaQZzhdj5iUy3M8jjDvfzu96JjkwC9SHvCHxUaiURj84McwBuG7A4wGGAcfVXtnQNsbnb1FvHpD7g28KfAi5Sym",
  "key5": "58WRBjFpKYLKjnKMryXMSgMLSdF8S3Bnhjz1VLCzaggHHmsb1zFum2zaZAQM7G6txpncGf4bsCM66RTLVhf1Pc4Z",
  "key6": "44st6JxTiVfFATVatPNWv9vzxmno1fccR9MxXeU9RBSCpynHWPup2hDfhhAvdNrwq245pPLChyoESuunNitNuLPH",
  "key7": "5LeSHZFNcwdb2h2tNrJAgsx1syLavEVCVaSBEumv1NAHFjdifGGjxCgpCgChkTLmvigtgcTLJXy98aeb7uW49N4h",
  "key8": "Eg49eHfgC8Jg2c9HHb85LTQaxLRRi4fKHJufoQJ4SgpCrsNmpp4FXeUWRPiuBmzBbGXJAgk1qRnxFYQwDuFcWXa",
  "key9": "24sMx8x8bXkm2HHwA3f4Y4cDUYes6yfJa1z5A2h1HpkMrBtWAMGvYpvooEZnKuvwuXZpGaUdJmU4p7KCM2rvZrG1",
  "key10": "5naoNkHRSAsKeypyeUgCL4SipHsPXLibhbVLBctXtjtimpiYQ4fCZe5z8UFPxRvzggr8V2qicXtDRaHfkdaPYNjx",
  "key11": "2Ww627Gewh8hDYBCQWRZZaUui8y2XKPChMLuP8gsvip68W3P5ManixJvsgK6TbArgKKdy486iQ1hJp7FdeXRK7M9",
  "key12": "28kXPioLLGrTkLh5hjso5PjexQFxJqx3EPVLqngBDYhhoFtmySnuFuqynyCNi8QUPtqD6o85xHdWFpG6ZXt7d6Xr",
  "key13": "31dxqNE1QTfcPUj23XjfXfndxffo1u5uYdNFjhVK5EZgwhZz8gAVHznkvuD7843wQyK9JW7yjCJribMkB4mjVpYk",
  "key14": "4EmygSVy4RrVWevjaAwZEqLf5eKRgAZ3DchG2vBZoLqjk1P7ZQt3BVYzLb27gVWcQ3MGAVhxawNmWj92wzZUWHMQ",
  "key15": "5bntfVQxZFhWi8fqiW1WXPGS8CD4MRqXBfesR6JqhcipHmMqazvkpW5RS1NBjPrqeuaxZCu3b834DwRusnE7c8Nu",
  "key16": "4pTzxbXnizXvzxJaekCKaQTFF7o7NeHdmy4VhL1LGrscxDFdrjQeexZvuS256maHanUCeaDf5Z7sJu5YkvXnXkFK",
  "key17": "pRzTeFKnmRhR7eVZm58QXErSuDGE2BjL9knVQuCKgXLTvS6adeKAF6qm733xzubWQTwPBvxnM6ouZuwY8PyYhch",
  "key18": "5iMvAMMm8XxbeMqWmUr77KpQmdb9iEhAkxxhqZm13fpWACEVK7j8pBxAXNaLTbENJMdQU4DfdK8NmPwS7jKBVBeK",
  "key19": "5GLSMpx3W2fpJRyKZzw13rhcVYAcAjKTPbRMY1sy97b2vFEchxXdVjj19WFafhgGCLAxYB4jgM9mFPxtQhAH7PrS",
  "key20": "eMVquj9uoVyuQjcjtj4V7QGCR3D2Hnb5Gmzj8CzWJkZENK9v7V2tKjt57WbfVFdWUQa858WWQUh2tW1wnkPcQP9",
  "key21": "4uCnBCPtNLrTrBghWdmdyHZdDknRepFoYHbFSDGEDfTBbgLLS8HpbMF3BYqGudXnuhyQvk8DkYh4TavxRg3RBQxi",
  "key22": "RqtXFHtu9Q8AHYgB2dLV1zXHZn3wTAna12cWJucBR4zoN2g6UQBsHVAJESE2LdQL6keaKF2FuYJMGyappNLDxVx",
  "key23": "2TBj7eHi5WSQXVgkCQiVSxe9AwtvRah9ZRrnkayFWep6ZdavikVPdpEeFsKQ8M5jbtik5FbpTKgPmHYfVEZ28dD7",
  "key24": "ZRuqMAagdH7QryKXEeV5UQux3cKjnfCx7YCzD1ponNotEQgW8n8xSQBT1uqqS6y4wjyrGFRAWyxLNaBYzJ4QZoS",
  "key25": "5xiP4kopzwb56fReH1VA26zuDMVVXpiWuiJ4gRYkcyUzKygcgW6r7ojLMvpuhCQcXbLfM3P9QLPYN6Fk8TFr91Mo",
  "key26": "21xMppkFzxL35PGZi1aHyG8fgPaagdousBptzFaSM3jY5Xbv71Sqvbb3nji6V16T5y6Zp9zEVN1qGo8RjRi3EZ4Z",
  "key27": "xobEczSTQWxsR8tV2gWr5jaF7zDTytn9c4aDgQuYi194evYu8Cj8xNsNJTE4yBuCaPUAY3aZN8XiGPRPjRmm5vv",
  "key28": "3rxTC7KVAaZPJiNtuxutZhNFbye9ZGVNNPPcM7rJexjDJ8nQP8QSDthha6pCJ8ZWX6BXMhxk7aeuhbHoLRnRrrGY",
  "key29": "3c2uRbd4d12EFbHJZbRbkmahph2SbLLBNXXF2boTXgGddVTTJ35MtrBS6YtCC4ip9QHsstEPZktq8ux8fDZ8CUAY",
  "key30": "8S7N7tRLuN53TstbPnnHsrYJ9pbASS62LY1wudrqiWTQEn6fLznVnAELhbatGPkaU8xYNBsoDvJPUFonaGsjzUY",
  "key31": "65KJQQuZmYe96AdBeCQkULJUmQLtxVn7DqsCi2U7VL5km1qUYXQbeYVWoTxPBctWEUN6Wh8GuF6mMK2aTXLzKFrU",
  "key32": "3zjLjP7jrPKMaoHKpXs5bWgqmW6m1L1eXNHCf4A4y4ZGWFnTWnY42GGewNYJiuCebNvZgBpwADZyVgMQNyTaUMUb",
  "key33": "2oLhVUVTikr7eaFwuhUKig48EipXduQTLu4UcQBWwJGxiefoUBrdmUTVW9tfmvCiGLdKQMt9ZqRKmuHjthjNVrWt",
  "key34": "2BZF1Z2EZPneg7YsQazdJBVp6ZP7o8BJzEvicguJJzuqUjkX58Dnzp5qMfK7Nj7U1g9WByrSZRnU7w8V4Up48rpt",
  "key35": "5vZnqradMSALU1DaYGRRWUQN3kMGsCvcm5tn3EzZ7VjFA8UP7fSYZ2LRSBqu98tLm8EvxP28Q9Qg4A2L4TFtGZe3",
  "key36": "4KscPR4YjGHWN1qivxL8VaMd1qQiAepEHtKkQeQd7avm21ZReWWWrj3pvDt4zbhbVLT5p2m8Pa4qTTU3GY7gJZbQ",
  "key37": "2ZyXZUkGqGPzWmU2Agb9Sbt1kZKefDiKa9FdtpTrvzMWw9mZdpAmQMXowdkfizuJX9X8bgPBeCB6EewJqKqMayeA",
  "key38": "2WcJ3KG18RzrqEP3kmdVf5pGj7rWnpVTTcQMcww5L2vZvFJ5sfxeG26UAsFVAkqnutzPxuBkae3tHWZAmg9zbBfm",
  "key39": "3qqSeAw52o7FUkJPEKL3KJigZBxEasfV7SBtv2QMEsbL3vtr4ztmNisDCwBsr3mSLWS7k6UrqWhMmVtLh91DSp2e",
  "key40": "5stBc6Ct5ZzzyY11TKmgpf2RKzcTn1gMVMdEh21pHEAHPKbiJqBpcMA1vpzxW57KdVcQ2NG3NNTUAJbBUYfx6z6M",
  "key41": "3A5ncBT3TP769ikPjR6rmxL8B1mk6vk9Z1KhK6VbS16Jazs7GHfeffkJFHaUvqJNmMcMHaA2eKzc614pLEqdaz4K",
  "key42": "4JXM8p9YDWWomASjwbpNdefADZ1vDbuovAmS5RXUp48AwJ8s5zEHPicS4YiNnaZP4pRE9EF6rJv8v3dJDP5bgspi"
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
