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
    "4SctCuBSPo9aCtxBcjkWn5iBabBFD1jMZvZbPmuKycWbP7R5vyKGyNohMZZPiy8tSgrGDoT3VPuxVcpjj6UBfozp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cC7dihWkEVxXqfvhrYwGgcLw8pMiWBdswwK9T8tNSKaNynrMuXSN8LGdmQoBDebwGdvtuZLce7ED1pA7JNybkdv",
  "key1": "3HLLRx2PE9F6fDUQcXxozrRNiQpQyLyqKJcFkQ8zEt8FFL7Lgt59Z6Uty5f8ExstUZtKjxNTVraj3x8h3pZhqxsk",
  "key2": "5mtgL2nu4L8KHBqS5DTaNGaN3aef1W6Ba1PH12EofvsTpPBGL5nhSMq8gNFwzHGyNAwjhrZUTgoqg2weqWeyZhPE",
  "key3": "4rthUFsxsuf2K9TC2YoiAsJgatmLmMbfjFKUL5xvxv2CmGQhsULXQENbc5REihxJn5Ph4SM8nKopip6PhrvJxM1E",
  "key4": "4diYidgQhLLFXVWYa1cgZxGQ16DoRwN7xgLDYS6i4jtFAAKtxrDcufRazT7mgfpqx8pCpEsx2J1aRBs1F7HpMB1H",
  "key5": "C4o155oJD2UjFLhBaMqQCwKk8vBWzVAqes3kgaqxSs4FP4rSkc7xsZwVGVaWEi8D13A8UjRTEq9p38hRM4cdxGP",
  "key6": "4FACy73cbRBVEaoa8hbCPK2QgiCoaDiZraot1XhwpmHoPSNuR73hiKPj3NmmqNCjWZvTgjqy3W7DAupuHgi2n964",
  "key7": "3pYiESijJfC681kgawB7zRnrBQkpVXFw9ssF4iYFHEn7WEN2bDvePDr5unNimSzXoCVkh5CqQ4mqP95FmwQ7QRTU",
  "key8": "rdS8bhuXhReN6dUBDCXGBP7QDWpAFdyccnHXa1xzaB7HghSKZcBwjiGHGiJYRx3L1gDNqRRVcWiHxCazGAEyV5d",
  "key9": "4kuNfeQ32smH8XJg3eE378qEAgSwC3rTX3rqJGZhFi7TTegw2HAGshhtBYmELHLguzbmv4WcUHZrV6WD4BaWHVGp",
  "key10": "34iDaoSivpsJNQoQvF8fpeeAjZtronmxtmGRi45QyKvcmGyKo4JKgzCfeReXN1FtZnLMqN835Joqy3afdkN5h7VC",
  "key11": "gBducRBADgU8K7NxfftgUcjkG6bTGULJxHhKCHqhPGiUrKsZWeM9jsUJon6NS2DrnE1gye1bz77sLf5247W3zGM",
  "key12": "2RenVHPUEGW9YDQoiDXsPNCLtuu5WRWHvZLoCEFJeZgFnP7mejdAtenLuac5BD8JSrM5SYfDrfuqsxB7NB5TPCVZ",
  "key13": "5rzhrJE4cAdLdFMJ3Ffa3aMQZUW3y9PsJYAtBNtmnbxKus4y2rwhX3EAJA47wHgLW6Sbw2eb7T9kfQGVsdYdvCa8",
  "key14": "2pccQ7neQ2Cih43m5pyrJEKBuGgndfHxAyd5Ji43fw9qvDYa68hVNMJcf2fnEYPLgVSDt2vPhkfe99mxtR7fzYK",
  "key15": "3fQXmDrUMyURUNP1eNmiqYtXJtFBinBmH3pKUk73L9dvteMtEocnHWRBEmXXhXX7KXcSgrhG4v3BfhZ9soPAdBWK",
  "key16": "5gqt4pM63UYpX4ChJPPvS5TnmVe9qRk2rdn5znwxKsgddbVfon68wdeN7fZrTDHEtctNb2VCxxUYgRyvCF4TPNWR",
  "key17": "wSMybeSGVkNtSf69on5Mepg5f858U3H35Rq3SWGtpD16mFbjmnguiJGrBmvYp3V77sYWbbJGw3HqPoc42NJC45R",
  "key18": "sy8dExFd3BRs5Jh9oB1GwRXpDT4FBt9XmChLQgVdeypmWfprx8n1nYH5u9uckkfdTm9RLnQXVF13sy2hd8EA1N6",
  "key19": "2fD1WVmdMm55nKqwaPfUVW6QVVNFH6GR52qwsE9a7bTX6RZuaDaYd5VR7H7A8WAHUcaCp28cDioTJBa6bbWmjCwi",
  "key20": "4FQDduRgoJWr8oTF4ptPC2ZcLn6skJ5vyHoqcw1nibhwfPMwikEh1Pi3TQpZGB3q8EFkYoGJ7A5VgYaJFFig7n2K",
  "key21": "4g7zYZt56b24W7kh6Ao4JBVy4SeK9qj2ffvwtRw5npytuVLnEVqrvEbWUTwGtdDWpVq3YVfqSNfoHonSpBpPJGG",
  "key22": "2ymRFc2z46QPBatseuBWdaXBaPSuxV4EGr4TsD6e5kgK323caUs3f4cfLr5ugcYvUqPdFb9bmdLqjLM3PsD3SUxj",
  "key23": "5nW4j4GUi9jox1xkBCX9v3ZxzbSNnnVut1owHGay1C4kDcvCx4zdatjNYMitkzUH5ueCUcEK9YzjiP4AH1xtvkaf",
  "key24": "3mDd5UKsX529xGeN7fFBZaCZmYzLWShrwMybkSRqxsnBT2XrrekNPDL25rAS1pDfm18Sja9ViHEdL7ghuDtS6bkq",
  "key25": "3yMnMYeqVD53oR2VNNxk5FG3CgNL9YxHftKHUm8we4qgD5fAE8QP19LDcgHHJWNw31DaqDD8Lg28guz838gG4KeC",
  "key26": "2RX2WiEjMW8o7pQwXr2mFSvBvHiGzSYT6AyNQLdNajPP2u7ehq7A4RADYcwqdC6dWLAT2fhLC8BEuYYbecL5GdvP",
  "key27": "3Bby292RtuB7vuxtMmTziRMK8FNZ6EG7fERDxffAiYq4u8eGJmubGLgQQzr7dVYap52syqkzVgH3y3Df63wfd2Hj",
  "key28": "HX8PbUGTq3zZLvSiHkEwSREyTd5gZ8CLKpgdTTsyfPYE88bPo13GDKdwx64bkcb1LuWJgznbVDuJKHnjVMEELtW",
  "key29": "3x9kKPRtYUwnkeNhAmaE6tL9U7RN2JP2HdZLis9ZaEVPYxyBTfdyvXoawPJ2KMBVvShosjrRUzxVH5PZQ5xcSjzX",
  "key30": "2QBawr23yjkbPraPAG4G77eb7sRZGhLio4L7hP98fgSLE1J5Etuaf37Vk6QFeFvMSjT1CyyQjnegXg1Fcesu8Phr",
  "key31": "5bm4m6pp9BLMVf6dAAgQPy3NTXep664ULo9Rrt6JiwJspVhWTSopi8yrZ3NDURdU96VU2aDMuBrrdnjU8ZxApGAA",
  "key32": "5CcyVg6bdTNAcR7pvi7EXxzHzgYUdAHMCca7H9n7ekiZ22xrnUKAvksX4Z9hq6AAu1tuCz2oFLPFioEe71AVCSiu",
  "key33": "2VPxH392Kmj7HCQCzX4RvVskAisskrmeuPqFK1o2DZrpBxgifjRwjLuZSL8F6UEAcvsv73u3R6vt9dkaJRHDXWcU",
  "key34": "2ibq73uo4K8toDXzTbSYgzP8gXsQoCJnZ1W5XvWAysmDfHWRVKVYyiQaKBXqJ8SxBHL1UbvrSJVrmmxTDoDCn1SA",
  "key35": "32qSaGokEB5S3AkGNEas6vEsSw4YFToDmELa2uXjwdgh5xrhGTghPPcue2XxisUyR3G4CLE6Wm2H14WjRBL7aZuT",
  "key36": "2WGkseYCobMnwkxguqvSeT28HPxeLznwKKquZsszQY69eU3JqUKGCUMBE19umTSCfkPWB8VAn7SpGu14QxhQPpEo",
  "key37": "2F9nB5uNEXFwbGvtwYCF61szFU2tDzAA93Ju4wrnLLy6JE3xEpGwYcbbfmbjWKJbYvtjq7727oMPbHDbjHc5FKxj",
  "key38": "i7Wir7Z9rmKZxpG1nw3pE2NozAfQWJR4QSrfWU3ac8rgtJh3Cbi3KY9s8wa6ACvzAJiSsRR23m8zeyUqThnzufE",
  "key39": "5gLh4AAt4f9p7uZNLCcNPj7qJ5Jtjgwya6F8ztSjeLiDFpUpGf4xXSNjq3M9rwfvUkKJJ1JNGbGzeYi2ByUB4yMK",
  "key40": "3D7vxJZmUNM4R9FhQPzT8vuCXppPHYZcxAymveGgAxA9fHZbRpVkkSuKwjPUZ6QJBbkVJhgFTk1pJiLjfrhtJk4r",
  "key41": "3RAEJYdPfNGhb9HTrNHJrs3thDmZgDaRhPtndtnDRce4ZQL1oAMNTtcJDFb8tto7ZiEy6rLNaX82MLuhwYfH5tg4",
  "key42": "5wSXzdWZaY6tAJNbtfaXn5ZoTEXm8bz6PqLajs6yTtVSpLschPL9YNDBA8VUMgH5Qmqr4f4CXZqiUH7hBbZYTdEY",
  "key43": "2t9PJHd6J7L3sRh77QTyhLaAJkKfA1Yqgw9UBhHN784FhJZfxdHQfwnBpTaFk4Be8GCmSra6m3phykCF9w9rpqEu",
  "key44": "3Vovw4LwzRAP1VHQSMiR18YYFqq1Wn8yY3w9k7n9cjkPCiyTPgRfEwC5SRBZLeYdLCAofM4KQiMN4KignEvJYAt1",
  "key45": "3bLWCeanqkF7HR91mCdbUg31iehUx8ar2KMVRTMMiSeQaxeZjZkLSoUcW7RH8vsXyvJdABtJMMzXYvfzuhzamYKP"
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
