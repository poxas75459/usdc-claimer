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
    "2tS4LbfNwzs8cC357TFb75Mzgy3Wqz7uc2Wxhpqh8qjoAMG8SQvFynsu1p19Tnc9GcyfZoFSwRzM1BH99AsTqPeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g9nQSBpqsLHCH19Vb4ZXVoj8Jai5tikiX6QDBqNfp26rDuWLqw3jAnUHgd7WwFJosbyKLXCnWqnafqv16c1i3uV",
  "key1": "21gdcwzQ5L6GccHNCdteKExJgrNHCty4tJPZYBz8oXALXow9r4x9BCdo3NP1HBWrRbFj3KmEA5DLmYKjG9Waxbvb",
  "key2": "2oa4d2W7713kkAPN1emMKSVEwkgpoQaRzguSHUkU9iEWrNrnBtNSmHWNv8oXQ62zMfuvRbjxB4oETnNzJQaHsg7t",
  "key3": "53SuFxmkZUMRC6DcxC4ZcXN4ozbrE6PNjFnrspUkV71mztgiNHam9zpSDbXzWxtXhcyLqGNMXC6rACcmCDVbjkKh",
  "key4": "3V7KB7PE2r8KrGoiuWJ3L1TapEaMuafACqbfrgKxLocDh2H6yJvyBxYTpKmL41iakFC7xrb4YapoFF9YGesKVTGx",
  "key5": "qqrxEkwMBLiyhPEAsmZ1qWMRD4SRGcvzR4EYNif6DVbChR57igiBBSRgEX1wiPxawGnf2WPmJvNqwCRs45MNoyN",
  "key6": "cFrsqx3RyWVZXFQfrRjTXwVzoxHx3Q5yUecyBHpXiUp8NttbN3oGq48MD7E81Mrj6e7U777nTdxhRZLoAxWzT8n",
  "key7": "5j8pb47mqH2BfwMieuANaPgLC57iEzRJc4fhpxY6mtSL24Eg2oGrUiFWWSKJrrEVMUJ2Bj1HAUPqH8fDxqeR6PLL",
  "key8": "nR1hbCUnqsxb3y8hQDvZoNCSmshJmUwFBSkRKkP8q47CnmQcjKXDWRw4jNbxyTYB52owBZW69g5bJ63bvk3RMFo",
  "key9": "3xZF7mfto6jPWnxY8kAMyqKhWij8JYRU7DBYD4eSDZCPwLnKvysYSoTAjqsynPCXKpPcnDn8ZxRK4rau17GBPcF5",
  "key10": "4kxMkW5WL2FyJhoTgjZUaK8rJGkn32fSwbzNsrfSJkxzGn4nLPh7NsHGJghHDDKZuAtSvemYsFZ4D1VxXs41j7Mp",
  "key11": "3NpZWdW83B9ZkwLPepqVaQW2TWPEoFwCskaWzLtFRVTvrPTNhnT3p1SWDjzywF3mwDyq15vjFCU1aXDeS5eHPCTH",
  "key12": "4tupmfwtvQV4kfnqfcBAKjMqVwgGVXHsPcieTjDMu5L7QCU3A4HVaMJG9TmV6y1frkHavWVGvgx6k75RDUXDdSLh",
  "key13": "2Tv7egbFyCrkVopgwBSftZRscKQMAVMDinuUXK5vhQCzTuBY69xsjps9ca96AZAEDgJVyqc6n2gp4qRT1obQJ693",
  "key14": "34AcaBdoCEQQk1MxXePm7dkA4qjP9muCnCFXUDSaE6QYer86m8qcjbUdnoyH9FC9H8V2YxugSPG3eGMSKyCFcBv5",
  "key15": "3NfueWNJXnbqHSA5xUFBenFgo1XaZU1geVFe95TcvZWTPLgzrB2Rxopqjfx4P75jiJhcpEPDNR2XeJLE5emvJ25m",
  "key16": "vXmet9jBxAW4oswz32rPc56Xh6m4RBdKKB73K5AU3Bg2bXke4dSMZGXELAxoWshizvLXBpRruY12EaJHG62zjcc",
  "key17": "31WMCWUgnDLuyfdp7FkbmAyuCCn3rKa93pZzVkLJ9wTL4o1TZcUHFJ6exXBHT8h3cjmgFpDhSTLraWJ89Ztohz7u",
  "key18": "3FRxwkbc1vpQRQQyDJuvBDpaw7zvzHJeVBVR8Vz2phAiCUcECVDxpsLAPiD1d6rVa2jnV3TSsXhEREkuRT8dTKRf",
  "key19": "4dNZxYqrmWqe7H4eAQ5hhEFSSVuHT5DcDJHJKn8vMRHkzgiU1haw7SNRy9eSqiJVHrrP62LfLBpiKHvg98pYk1jq",
  "key20": "2gK9afWtpSdmFmWFzTPryVimCX7zit67WtBVFxx8aiUB77NnKcaqyy9tyN3uC9pMmJtTWUuNHCc3UPkVB4Vgdjy5",
  "key21": "4k4pTEFJVapr6w3WX8jRUSV8DDEx7WQ6GbEMXttw5Y1LZuZ39eFSicGZ7Ww3vw6PGRcLyYFbxQj1XeXWW8ZAMwD3",
  "key22": "2n6pA95a4GbSTZYDmBoXNwbYpgcWLMZiZRh1ZsWCKXELG3cQ1EUG235XWVpDN5jeKtDur3KtzbwQxHis8fjN9xbq",
  "key23": "3ErC3uN8sHGmjG7x1UK2TKjRN3j1JdTBmx9vidAFr4c2f3hBLq1rdWbAWMJX8hqUB9ULXe97QJawuz3JacjDoog9",
  "key24": "62PL3x1s5LpC8RZ9Nbj6HiZ4gdBBRrTQBKQPyrCJz8sGaoAQDN5j7nsQZAntgaieykm4wfusJs4kAwtjrkgsvwug",
  "key25": "CwMVrJbn5mueqkxv99Lv3MST2r1QPtqQZg4HMgyjQTrK1chcanukYXDunu7FJG1FiQAKmDaMqstxkujFRJZGb6b",
  "key26": "tUTUF9mGcgynjVq4kLzuSKscMpfdvSYZwcsv7fDhK1dejdPsyvVZTe27PDyn6qKdPEGvfcfUbgPPGL1Nsh4wfy4",
  "key27": "4TnJK1gxQGtVnyMdcvxJYzQy49seohmtoTYVH7EtJVZGQTRCEayMqFYNqsVqEXmV6awoeaarGnLEc3K7AGy553Re",
  "key28": "3uq5sSTNbmPAmZAMUKCGRF6d3MonX5jgPJkjYgi4DBtFN2cyGLzrtrqhMSfaC88vTVapH58kSLjZAc6VP98ykVbV",
  "key29": "61UkUHFYMRMFvTnzQXh1xoC7Fi5HpxSWZhm8yp2SJpXeuDuDxhzSysf4jW4dffaH2vYNfcwCWcQFHgjFDPnDu5a7",
  "key30": "2L5CzJ4QKxRVhwkgqiYwe3vViEJXSGg9dAZUv9x7XE2tbAeG2P3GFDnAiuR5gHN7Sbsbcjt6PcZP6EpBzwnK2dF2",
  "key31": "2oQyw9sYxCfYmTcGo45k83dT2gFHv5mSTsGewEPmAG36Can2Mnxq86r22Ue7EAng7NBE9wJN4vRwRa2bnRNxvtmg",
  "key32": "4mcUXVqvzotUZCYNM6AMFMS5HbZmmngcXf2UrfPe88QCzH5eMzRN7nZTTXZRevJ36Pc4k4MWhSjBqVkRiqYEh6jW",
  "key33": "4md3dsWkavdE6XM8GL428Na5SaCauLPkLg5dvNV8BBtZNwXuNkj3t54u11F3BmEHLK5vgQNZyHw5U8ri8X8dtL58",
  "key34": "3pjauGL4vX8dQrQmbLoStMeRoiSGbsvn8Kn2XHCiieKB78J7Z2jwQkitjtXUbs9urs5sbchr145J1WW7Jrx6T57c",
  "key35": "4UyMZQoWnR5aE49TP1rV439dvuhtKEEBfq4CwjwGK3Fpas19dV67rLnCYk9suy4Z7FDu7EoUD5jcmXam8KnUhMGD",
  "key36": "5buTfvQZ9UvmxFmSHyjZgLR1VKEfv7BttoEzQWdgdHwhHfU9Gr3HKhCo766nE5x5qbhq8SxBKZzKyNSbbFRHoWER",
  "key37": "2u35XQjs5KjWXkswU44mwVfzKvmFjR5QHZ8oxLMogwcYge7Gt5ZoRxN5p1rC4fgWXWQH5mafs4QbkKmyFqSTtukB",
  "key38": "5xA9bydBjFrjheDNPKDPN3bU11s6gcq92hy82iGCzfoF3t8v7PspBfeafv97WcXpH9uLWX2RrRQmaojPmFJrx6Hb",
  "key39": "546U3V9AYkcXAMwbmdtoccyamSBjonfSdKhGycqwueu4ot9tEHPdNfAY3Zyh6RMh9coNgRnix1JqCkfWRKvYJqfm",
  "key40": "3htnjmFWXDc6rBtRwuW55tTRWvKJuQdrWAZDnjA1MxUfB7rRW3czAmrnw4tviZGrBymbuc557bCupjg9jbDwGsoe",
  "key41": "2VfRh2eqgytgNtmhujbWe5PGuTjnHdDL7B6rKVevXX5kTuqNwmSvtPCnKqAP4iQHCinGmLVYrJnu7bvwr7DQghY6",
  "key42": "5ZifkMPYfSJ6Z4hsEhBKmPqcnZfrowBmNSjznCdBCFHF99euacmiqyLhwdHcTjH5a89rwQVcKq7xpynnebeom9vA",
  "key43": "36YvFPESzH1ehRREDstPmYShvsqLHu48ypCk6Yx75y1af6v4gfC2NYae6xodxPvPcuBi2YEKL4rxftVA4nsEG9RW",
  "key44": "36ffXQ8eKSXe7HJ9zuW93CajXXeuPNhxQoisVUpHaJc7CXzWe4vhTqMCE8KJths4BfkeBWmHzGWmTTvFVeAH6csM"
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
