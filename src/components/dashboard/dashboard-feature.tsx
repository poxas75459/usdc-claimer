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
    "3gfNAkXoeAtdMuLZM2ritJ8ioUAWtCH4HoCLRGCujFxmTttrS9iU8aCNsyydd5sK72iSQs99Ce5EmrwtqSXnQNJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCqCsHQNpz8idWfyvuis8fUZYApobf6kxBRMgbFyzGwAKV19QpbyT64GUxvezuZRKMUHcyxMeU528jmDcrLcazW",
  "key1": "7uPkh3vma4wCaXTMJNUQ74aWgRoWXM8LuVm6xfXGiYVVC255eK3Bbp26v2QUXVX9N4WrVvyGrmBmUCPeK45L64H",
  "key2": "YYhFzFdTRDKXB6oDqgH2hhvhPKB8Q4U3AytNftbKg6FpX1c9D57meADwnMsgGT1tcMNA3X7wLR3W1wnX8JnA4Ma",
  "key3": "2uPYEmcTDGG2579ct8xSncu55b7Jcaz3vMT7yNfTNgts8nFpNbpw8hr5sRkCmU7svr9yDN5WGLcuVhwYC9Mgaz96",
  "key4": "2L4x4ehVmDqJbeao1GmbMZGDDvhwu5yAFWfsHgtgneoT4cdvL6H9AUhgsweKi1ZmgxB8hyfFDmMV65dEy8AAwuFM",
  "key5": "HeipXnMmRjwe77uK7tDZxSZK9c52vZ8megxACtf9Qjj2r6q3EWAGRruBiSmxnziVstL194NiRBn4atGYb9hyVUS",
  "key6": "2MhHHd6pUksiFdhBZJDBmbdfhLLba269AsTRzwcdB41qFEfUdpBEKftUZpXK2GhfayHR828gnobf37Ftr8xxEDz8",
  "key7": "2kwKXLT1SxByTjvcLUekKwh1aJ1bV5sSdoeZxv4p2yXhpTazBGQo8E5qBaaDnAzNZwgk8LMoru3AL5syfXWb6L5c",
  "key8": "598uRVMhzj82TfAqKNcEmPJN7TiH8QexRki7pnN3E8tfsmkSJfN3A64AsGo9LLpSVY1SskyHbrcxeZRi6HUaAoEQ",
  "key9": "3LrvG6VHNhTY4sNQA76bUQ15eCA1me1qPdb6mNLYS2MVrAtfJbpQz5YuSoiJ1HayW4sNj5aNBkVWWQcJWVgbY33H",
  "key10": "5rYP86y9MY5k4tFXkrxichLirGZv4XqC3twoUHndyofd1P9akhi5zLNfLz2aoioBEHygKoKdY5DzcG4mSZHa36XD",
  "key11": "5npu2WeuLdeVmtdZpcj4h2WBvymtGw4MtP8FCDakPqZTMSDr9a36LbxRsMobuKrV1CnLyVYdJAv1RbFLBGGiXa1r",
  "key12": "Xopx1yWhQvRCAAcEMUMB6FuC3gtQJiX2es6k7Cfd7jbQuP8BDKr6qGePuS8LVff5y3Kkx8nknH3Rr7nYjutJ6oU",
  "key13": "ZxLX7jD93Jz8JtB1dhG2jLq4WKCSsUBzYpyBL5D4sRZ7nBB1MECDNNzfsRfaTGCF6kzWeqUogvDnZgnGhv9uNLp",
  "key14": "2bnidg9yWrUtix7BXqinzpAuzNTLyRNVp99WVFYiZKvk5j1Br3kiAuScYRLSZe1jGmxZQvoY8o4TEXyqvUpFfRS",
  "key15": "2vkdSR81c9vGCQKRgyXN7N3Qj9VTedcJnN8NWg2jmwr8eCHu28MG6waj2KTbNtns9jQNuvHhgWGRLd5juxvKH6pj",
  "key16": "4EgXJRvemQaSGndt3gGwpPgVxT5BdiYZfq6qrsVcC7J6FziwugGiEdJduEuhpHrZCDFXWkD4wDbyhqVxskVGYfKA",
  "key17": "G12okb82heebY3woX75GePzVgcB2QPQXTebtMmhmHZyQrq12qyVTD2L8ZNwvqVKFzQbo6svyZ5rTQRDrKGTLbNd",
  "key18": "3rAx6DcQSJksNscGCHFaqjXA5ousFKaRF3koUmw47RKBwNvgzSfCw4mpB1gxQWvbpgxJmat8WQQTDd4hcHjdguPu",
  "key19": "5RosHJSPgHxSrzhN8GE5CB5eMbYhrDk5rcZyHCawNs1oNjjgSW2XHpK5644J5bTooSYzbKo4BWo7sRxQ1yHPbLaQ",
  "key20": "4qg3gWvy4wF32oQa2XLockfifH1iW1udCcQeWGaC5p68A4rbL1VjXJBh47aN9aZTTQq4BSdMRtJERK1kDH5fYGcq",
  "key21": "576hswugYT8LjpecJxiTCLU33fyxqQ2FnXKH5u19syJ4nBrXopCWDd7zsV5jk477Y1PN16Sxw3a2Vs6McKnPuQ8r",
  "key22": "5H3srE1mZ6vvYbM9SBkBrDGZp5CESN6SDMCmBtcZSzkZWtntaTbFcTCUQfLr2FsJie2yQUWpRQrwXsBMJX4Ua8P4",
  "key23": "5vYR3LhmAu8efpUKZEbrPHA66uZfHohuzTheFe8BdhZM3Kd5PoSCFPMmQZmSNJPohegY2zLopS6N67c2qizYi4KM",
  "key24": "2MDywK9mjVZYjifhvuoe3jjr9VJCBTJdGx1dT4Buk99f5ZTEUQr9wtzP8V3kCK8dJgsKjannVa2K3MHUeo5ZC2bj",
  "key25": "ggV3EBVmwQQJNaXkpGiyJt1QyLb8nAuG71nNXEnKueA2CnqRwjHYhocyN5GnDYxRvPVSwbGYPKppPwuD9woAYfM",
  "key26": "2BtUhKHFfMJomMSjtMEis76jZwaBVSPdAauBSfcdLWLNMBEyvQHcTQ9CMmt9KWvP95SqJjf5eSvFSNStVpx6f8aL",
  "key27": "MUmdEec41Ssmz8zgn1mteFsF4bHpCYAHjYQ2HkoPubsuLH1tjezQxZJYqcSxaWT62ZRdnqAErFh2kbzjNGHyxJq",
  "key28": "3Ua9Bqg6QegyrnjWQrrEWtwVqCegi6aPHYER6Js6PcjQBNBnpkHQ4Hz4QSdJHQJBRVf3F7wkF927tBp7ZdLdrNiz",
  "key29": "5JG9Jq92LEb6gjD6Ur76q9ZzitCTWfiAzPJSKgsHBzJ5zYRrtEAQT3bTJzQKsWryaqcnDaGQJsS8zx5ME12vGtiS",
  "key30": "FZeby2CKNfT5uCxaMfeuPMxJJpTFoDaYBXCz5upK7Lsm9aDjrDRc6JQf7SEDDbDAB4tHRsdYjswE5kGPSFKfYh3",
  "key31": "4zNU8AUKTxQLkxXFEXRMhjutLXGZdL1sHhEB37Zvt1AWzrPwgNuSMiNzdPoYY7BxKnYGjYbAuRaztgMdaeSNcZMV",
  "key32": "2x1Y46xK5hzuc6UcE9HcaH7WMu7uYvfBA4K63o37NkK9sUTt94eKesSXXUAU7GkxoWeufr3NPYppxxBsaqAjH848",
  "key33": "5VvEPkF2MARc9Ms1aNMJDuTxiNbbHQvPZUxktTtehzMHashFPUjPQxWhtLAumVfnQWv474JLLR3Wf6LYHSwpdbrM",
  "key34": "3uJbGhcuZaWPBS9j7AGXiTkTkFiBvQJcyr5YjfamBgWQL39KmRev6rjEDZuz943cAcgY6JzgbiYxbu4VDkHFXt1Z",
  "key35": "2iE57Hhyu4NwZJ6854bcdiev18hTvwXFLfF6fBwGkiML9dEgQu8RVWeFPrgdkxwFeJRmVFckMqdyrGQmrex8EUwj",
  "key36": "61KocAXkmAcUSxFKmr5FVRoAF9wD9VkPmF4RJisuBjxbha6bwGTpr82TCKSVhimRr86yzP4RrhHEGeLekFaBYHbY",
  "key37": "5M6JDQTc2bKyMhzHvVYrkpL2CgjFX9sqwBMxUDfesGEy6ErLEqqLx631eSZmr1hQgPP16fuo7wQthhQkL37dU2zH",
  "key38": "Wo2NgKhf4svmKDaNuTrXBcx8zpC8fEDiEeBmVc9JP4SEQtNQ4BnchtCB9a1EhRfyhZ2PXoNKkteFQnZSP2ZD9wW"
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
