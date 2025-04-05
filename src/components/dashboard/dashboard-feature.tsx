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
    "xQBVdXG7LB8rut7QVCL2bHyuryEZEuFDH8yRrQzCimj3pbpj4BXeRtXWhwp6Syvw4k87tEg9JQnhCqSbr61VqCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gPpeEW66Gqvo2iF9goRmzxJYnjJLSWrvhcyS2m4dFTaEgDdZzzNCVZKNt95Ks6gsDpe1zePyA1zqJXnJZyUa5bQ",
  "key1": "L5E3qh7XrNC1vRaRcgSEUZPknsSZcWmzWKsLTM2m3WJ5gGSgep4R5sZREZLB4w5byHNLbGg4JqcuefFkdWrAgww",
  "key2": "5r9Er5ZEiSxzcPp9qPVgTJUR9CfjMFMWUoL55WyBFnbsaPDh3wai6pMrk3WXtAu7ahzndYhLRdNzCXbCM2NmWmi7",
  "key3": "21GaJejVzxMuRJRig895XX9TiG295wNjW67usTnj61qXwcwLeNFXDyx4hg9nyZVbCFrpBsaJSmPc9aDCC4rqQoju",
  "key4": "62CXGZvEUw16TYTdPiYq7AJtdJ8xJVSn1P4ErRkvT5FTG8w44HGA4qomVfQ1eYsPVHsnfpsziS9t9CGZnE59ZsSK",
  "key5": "4vJgNrm63G2bFxXDdhfK8MCfRbCJnKho5Mer8z68u4tnr5xQXFXWMRGDa25892EUeRbNxr2XApSdMm7bYtHTZt6S",
  "key6": "5fZApXEvy8684Bd7BEGrjHrsaZy8xNcN2NPaULDBfqb4z78sM9pc4AU6Yt8u648LJN3LAXBE82te54gYACnNem4C",
  "key7": "54ANnHxmcQdJkxy2vXapcQY32YKummzFtqnr5MFPrypw2UAsqGetuqPm3NWPyXuuhKFDBumjUQv5ofPSSFcwqcYd",
  "key8": "3dT6eXiydwdq8hssKKpVxLwnDDaDZpKRjrTnkfa48thQKvzCikRzqfauXXmyPQLNEAB5TLnHUxVC6vdsRFN4JstH",
  "key9": "rDgNdFCLE78a8prbrfWREHdDhAfbQgCY7Q4G2PqvXx9euUBUxnEswJFEcWpoqW7zFqau2P1RhdvssNEvjUwtRxA",
  "key10": "3X99UeB4jYHVLUfcmN7tBFyy73i4CCTX9Nu8hHRDG7k7PeVPsDTMH6x8TyQgjEhB14jqXjaoSNFkjcqekBq28qfE",
  "key11": "4iXPCNiKWmzp6kkGykcU6dmT66oHS4ozYAE1t4JQaoE7zebJnPayxZNpLMGM61qWRztUtH1sUWjmZREqVDLqQ4QU",
  "key12": "4a9vparYfHKvw15zWaXgrEzoj7SVK2ujP8JkH4NVD6jWDVjiWNq4zW1umgSkXZR8xFKPaFJL1cELZ7bRAZu9dhtA",
  "key13": "3qQJNhErgGj4nB7riJud4naW1fyDmfQ9MdGUyVBRNmxrreyVAoQAC1Rnvarg7JEDJN4RNKHkVHHXgh2vSjPmLatJ",
  "key14": "4he7iKngXDc39NhvFCjMExsh7dsCX3WDgNWqhDg9VJTmeJMRXmDv5TwG3jJvEKJ2kKY5ewQ1qo9VH9os2o2rpnf5",
  "key15": "5PVqb7xXKaeebxYDMczW4FGyNJJA4QJP97WTycw3YgA2iggqicKwGKMY4qWF3F2jXviV3UzPWLamdEKEhUJhfBLy",
  "key16": "4m3SmmUx6DkVd8JhsMbNi6uZUEUfuq7EVZkFu6fAnJ1ei7bV28h3ro5uUiu1wUDRgWa6716weFYEcrPQK318cL3r",
  "key17": "4Tn1TyfpgQbkQqHmSReQsEpibfsT6FSm3QBLPucpxPhh4psRs4oiocRzhoVqMNMbnkH4bTZRsGvb7HMTckRwRcuZ",
  "key18": "2JcVMnNbVDTZUpPEyqXb6JdAAEhuSEhUcU4pPwR93ifPHkmkW89Nu8MNRB8TwpsGWmkuSLK2cSfHGzkeftpzaW7y",
  "key19": "47eY2Wp1Fn6K9PVV9bbWqXjGYML4fitKNPjYzpYLbBsRWoFLSDRZ9kg2m3soqhYyNyUV2QKHdNPzW4rqZxE9b62a",
  "key20": "2DHGT8VdW9WAR5nYrQnTzkQXLwmb4i4TPfoHVZsEVyzk6fDd21C5hCasaMx4442HMzNrhrwtkwHWpXjZW5dk8Fmt",
  "key21": "4rQ2du6i9EF9WRSmDCanHkH9Zahx7TeoKzHCJ7b564Xe2Fvc8QPJSBzpEG1rFKrAfFbh8aqYHvjXxsZPaUpPy7AX",
  "key22": "5qCc4pcEWbayRPx5yChkSNakD62CmegbJdhwhUmSVrynvnZZeJiHwRFNmFPLDGHw1FG2RGQrozHb28YawGXbu2DF",
  "key23": "37Mq8kJPz32wVDhasTNiNoveUgLmL9eL6dcBCWg1we7sZVAVh1z1ucgxHsdCMhkEu8MRXZRWojZxrxsTQBEHRh3x",
  "key24": "4pum7gnGLzfdjK3MukEQvtDP4m8ZJ4bG1X6f8Up1stJGovRvZ75FrBFT7X5yqBA3G1PreDcF41KwN46fVKMKRyZH",
  "key25": "5ci15ySNJYCJuwqV8KW4Wtc6quEz1Mhq8GMKCtwMuBniSDw11K8SEicnYmjZyzkth5zNgrffPXJef4xpkRg9oEQJ",
  "key26": "5mfKVMoCC1n5iubCJbAV54EYAKNLDHDX4m4yDx9uttNoLt97B7nLs39TkJW9gjg9wFUxvvXSd4vRrDuwgnvJDB3o",
  "key27": "ATKjUbtY5BWxibFJpyySLx7nxeWUQDWtLPeV9HVysc7V5AsoCMP2jwHNK8GeZnoQsDruXVYwzmwDJwgh6cWWwzg",
  "key28": "5oaLnarLdDbK6YMDtGFdGDdw6fkk5x5BsDdxSjRULzdeUUqwMCoWJGuMALPzXhNr8h9q9NLLwBqVGE9N7S4N6uHT",
  "key29": "47PKvdfPdBXf6pmHHWo68W46pyTVA1jChVRXAZbQpWES4UKRkpMjoyfnW3CvubrUqde2V1PP6YCjbjUtdUSxc45b",
  "key30": "1Azof4XqU7Xsnpefk4AdAPqianCGpo7NvpBG68f7abaE21JvxXP5LikX6ctiQF1syyutY9eHpVWLokHt46tLkxN",
  "key31": "2ydJf4Yia8kTE7PbzoCyLWzSB7qejsiB43g3qsnsmqRAbyjJdvvjymtKE2xrPGqw7q9rXh9PezogdYXL1uwC6hrF",
  "key32": "2BPhtkASe5EaydRakgf8jqE7W9sCNVsRbD5dHhCkNpsSvusBnHbLmT8xuFY6oFwC97vi5CYoqFvEVG8fGGhq3wzY",
  "key33": "3bsppZRHhAMzLMQ4jWwYr1njnasFG8uEm8B199WTqySBBod58Ce2viqEcYfk3rzXm932b7W3tBN3wtQq79FMLGTU",
  "key34": "5PumD6MR9Z4tpqMB5XkSF1NXPuMnXc7Fbwtbv61j18FHrufcrbZhgmsGQRmxbYTCnkVcusZDBPVx9groR38wuyYL",
  "key35": "2ysmqsmzNzR7HGWVX74vTauCNg2iyQ3DNtaknPJuKjFQoWRmvYsSHs5sMWpz8aBo1oC18ZanSWUaXUoA44kCK67C",
  "key36": "4vXD21smvmYQnsroa9Njb5fZxwRqTeyuzRegGGYSHTJcHxnHBLMYNZkj7Dc1CewqJ18ANegzcJ2KzoY6MQmqwSNB",
  "key37": "3j1kdKAQQgTFrp7EMwwTtkMcv69cBUDtdJiSYPHXigVZcvo3cDTAMuypEoBoB6mGuAvKVHKUTRXaGYncmbuSQVyg",
  "key38": "ujGBtW5ND1Uj31EypKu7PZemTikhAKi6ocZAGwGZyCgUyFBpTfYa3hFZFqFb6aBuby1Ko2YG2MQS6rpcxPaXqbY",
  "key39": "3XR7ay6kqLieNhJywn1urnWVjxGigDMYnTn2KmfAwAunh1xKdGXNAaZpMZxdCLJYutXKvvgf9bJ7rYjrzhyQi9Zg",
  "key40": "5LDBW16YBF8Fpg1TNQUVb7koDWRAv4MNa58NonPjZZL632aVar9Qutytxv8xxjHTjhGCu8YD7KSNzkP9PFCexy47"
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
