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
    "ts3XUhmnceYYdHNB95boZa1VATwu8eUK6VFwHogRurqiBerdSVbfSrR8LnAprtdMGCD3xwiV4vQNrxAjZusShKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtKu4H3rpwpD1G8VZ6UKMJ3E7ZvLTrvcecCUZKFsX141XoszP8cJcuhS8uoyYj6BetH5PSFQ32GZZF566cKeC16",
  "key1": "5KerPvNEF1X3Kcx1EeuMATFMC3rVzAtJT2eC6SzMz8HB978NwGW7yF4SwR14Lu9NRpZRgVNPBQWnEwLfJ3Jxkuzo",
  "key2": "2mbyT2k7nWhTS2MPRrLisYE687ref9LxFW3Dv9VdMjrtBrDPfjLmAEAWG8G3btj8gKHSPsH8vPYUr5YNTmDuWLhy",
  "key3": "4JvL9VmvUWy21ikA1cfGFqaDRJ1N1xbyF8nSYA3TLf6yvywxSEuLuNV8beHR3nsKUUfCSVVusJ7zerZXMYNoPpBS",
  "key4": "kxnQ7wyYrAFuizcit2kjoQZURdj3hiZ78UpVtwxgfS89pKDhX7tnptQmcoiC4fn9YJpn8xXyHV1t8NTRRGMFMkv",
  "key5": "2qrBUjGiErDcfirTJLLMB2Sww4chw3XVDKCKqSNFqU1ApHa7oWDsMKUwZKK5QewpNtF1SdP9P8r6E6JMcxZhEEaQ",
  "key6": "2wpEAFro6KTcKhJhZkumVxchDELkGsSeKt3v6Xt9tsTkpBsKBNDQNUnaLhEReWPZXNJujtW3aVQethJaoraNS7YG",
  "key7": "3P1mQjnVykifub4o2rCUsvm9DaAvJ5V6RVpEfY6D9ZexVz9pNXSVJgri9uFjhCv1Wf5HoszvjBQxJ1HeQFkG97tB",
  "key8": "5EJ3cNpFnPfdgpKiiyErkmMXVrhCCxbLFATg9PFDvgQNhfbPSV4SPGmGBxKpLaYduAdWYL6pQSR1Ugii2dhMpJ1T",
  "key9": "2ryMiQRgSsQFUGEWRubHFYcQbgMFxHHkT95HNqERLRrsCahLBcKUovoNR6Dcizphz6KQK9EbMBNV5URz6WmtRXoF",
  "key10": "3Y3Zt8xsEYnxE9vnpVUa84NjYeynxG7gaYcqQQfzyaV9EkJGwwNTdBgC6rgMs8bKZgWhWiyAXGopJu2c7Y2UuRhB",
  "key11": "3ZgWvPP4rZvaJ9pjM9FQ7Loym7wvfboqppvW6Pdxb3iKvpzqLs5tLbLEzNZevvfn9HkVRuNhbfkeLmMbCia42dft",
  "key12": "3M1WopJokaxK3Ck5CMvV22T7CuGbPm9E6AZ81aT3HZy2MzmmJcRpRvgTUWJ2jVZyq9FBtXLxRULaeRYRECNMGXgT",
  "key13": "2ijHorRTMcjac59urfhJMWas7PQeVNEELys58mWyGBjibCiB7jVeZP73boq2YYtB7vmXvqWmaFVsxMZw4ZzyA6JV",
  "key14": "4kcX5M4QpReLwsv5AApdbaeWy95St6dgoSv2eHRNU1c3FNtnDZVS2wxS2B7gb35mbzcwKL6mhZhwruuiYXTeE18",
  "key15": "38xjzg9GUEXgEkeNpShAX7UyzvBjnHarxBWgL96E39qSoJEw7Ru3h49miWv1mqALHVpPpi4PwVcNSYBdswE8AutT",
  "key16": "41XhXfah3tcZ7C7dNNvNqmVKri8ezMqg26A1nTTwEUnuuz2TNLwFSsrfjWpWuyzquqwpUP3ToFjGGQ4xQrnqT3b7",
  "key17": "49aXWTPc29UmAa6Dp4jb6gdEtN3tEbFBaq5rNJf4oGH4jASXuPfJvUKCfxQWbDYjeKCminYRa4D669wfNJH5TVVP",
  "key18": "3zECTU5Hn8qpEpfBuKZHCa43bzbznVAsfd9T9CqBpYUQgCgqsRdudUPkue7Y5CG64TiHxE35BpUkJJxXjwFewW7H",
  "key19": "4uhycUDg7VEwDnAFp3TQ7U63X8ofeMvKf2PcsngCkJTY7N5We5kni22raN7vK64p2NK3AseWCcGXkTcVB76t7aHh",
  "key20": "3HQatCumXhDvhCBUT4CCfjMLt68zDJ7SnLrXwRhwZvoo6cg9dsgDH3VZuLqnDmbAZij1425iwbk2NfmLg29NY1vm",
  "key21": "4qQ88WG88FW9uZ4YMgunh4a83fRr6kYH4bRCJjobmjeVKzDxp951ij1Qqfb1a9igp4Zk9TxpB8LWB9Yt7Lrygekt",
  "key22": "4oT4HKNN68tqDehvBDghkRwbbhMmQfBYxoLpv8U7Qct5cptSYJhUn21doVxFrcvtJRZ93Mf6JZ6vkBZGdovzXLZY",
  "key23": "uDSfXVWhQstH7MkL2J9Yor7T1RFwvPPNQmRQWD3P3XbWW2oqrd3jggtTNyRoLWQuGWo2bT1uaH6upyh4Y5VxSTr",
  "key24": "23SAYVjBrKFEqWY3WExHDH2W5QDQHzfkXUYaErJygWNWXMw89zK4NKMHESvg8LyGWWvYgHARTgkHaUkERG9xmtCW",
  "key25": "2iZVb4kSBXAdkpAYKa3XZP4J8XaCcR6Q5KgsfCVVrTuANesBdYpmVfDCX325mk78MB3V46jdVpXGtAfqqogNLQMR",
  "key26": "2pYmhNTzknvgj3WS5ZJPj9SYuDHrGNTTEiA6CteRJLpskMQbixrDKVEKtmiQoN7kSF1DYmW634GyMNuWSgDjX1qY",
  "key27": "5kZ3Tkb76FqH6P4UFETwUHPUJCi8vzGzfJMr6Eqs5bwSbmSWNpUaa813WeHNnz8H1UNubdagQ8V2s9NPC8MSTef",
  "key28": "475qLa32xbk1beAYwxTsbwGQkMLgpYHKwGUQmE45PwvMvBzMVuX1SFJ3UTgKZoxAXS6oU6hpZUhNvkPKpZuj8jLC",
  "key29": "4gqXnmLasyrsRRLbBRjtrQQSLdHFnUU75Ksp1wY43LpkWpGHg19Lm9DsTBkeLzhCwjZVyojSDhDkiopRmxZyFFwA",
  "key30": "H7VQVDeJKyQokWy9gYofiV6WkAs9yJGzQx8P1znfaRYMYJJHW2xymc9cycfhwviHvQFEtnpbfbKYUH7oFUZCDuk",
  "key31": "24Kg93mLdJvVMTXNqPVifA2yQLiL4YctQvpnaYayjVJGNjZXwgXeRcqFxKbf2TjZqb9P2X7BnbBcmFNAsiZTpyur",
  "key32": "V1WQ7dVyrRoHvsR3Li5nh1b5j6Z2Cxqy5Nx6E8VFZcMR5KX1Qra3huMNvQZK4Nc7xBiw2poa4zeoza5bD7DkE5j",
  "key33": "4SSjhKeuMmGjxfvrryEBmCyQgbrG1XEPU4HGtCJsnrd93ZN29uL5JhrYZpUzGBMv2AyMVCWznpUcAxvEBpcMWni5",
  "key34": "443VanggB7hqDaATnMw3eQj9Kf1Msxk4HprTxDSnYommuqrcPu4NQL79QEj9SgWVav2GLZf2qV6LYCkGpYfEPkG",
  "key35": "4UfzRR1Es4PpQrNCW7kho3RRfdf1Q6iZvNMU9A4oiPBMC5n6hERT4B19k3VByNg4rr3Nw3zuukxPidku7wzZDbRi",
  "key36": "22VuqBppZZbogJxWNDGWFLwrCHyGLA7ekCCZtVDEWYFivtpBiq4VTKkESw5MhufHaqpavs4Zx8E6xtzbHiywX1C3"
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
