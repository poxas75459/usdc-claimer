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
    "xQknRyovyh21niktscQAwhsdkUrcPy1ZSE6VNmXzjTrjVCiSKmEWPqon4NWan5qr1WEPUbVUwtsPkKbM52zGTnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ev5TgogGwceZYPaJGopRfazUvSMGHDmRtQSF267mFTYjuXYHEFxMgn47sGfoZc6wBiQvxMjgYEP2VfFEwXganC",
  "key1": "63syK4JcsmgS6Yim7QyvgoFqvb8TLJmjPzE1Qhg3vQUtDiSsc1x3tF63Q53g9ec63fcMgJHJuxtEq2uaoKziS1GK",
  "key2": "BYyamg5dpHKv6wmwd51jCC5SZ6b91Er29G5YqZtudTDXT2aCu8N2i8X9iUDfLGSkxCbN6MgwDDmCKsAA4Et5Upb",
  "key3": "2LoyipTro7Z8QYgScfTZQ8D6nzU37gadSNcsXYUUp1AVrVr9CVWGKeeJXseRmvfRGPNc8VQA2TWdew7GsSfHzEAE",
  "key4": "4rsr6Gba5T65VtSLrkkr37cLP3owh4urSdpoF9jqhr8YG4mrP2JXCsax9UvLYLX3JvF1cFMuTNb5zvPDGAXmUi9B",
  "key5": "5anamWt86Dw8fb6XEfDuohsPQ4f5e1QyhvdQaH4xNvqAEuHKSRQrmABpZ7UtFKCWSi4PhZK6hcC2wbVWeB4h7PCw",
  "key6": "3hsTqtnugLSzUaBfGsj3P5zp4MbKdmxS5mF7rv5mBsTxWmqrzeSCwCNwgeK8TZNVgLKkWzAjAopEDC5SuPWiiPWe",
  "key7": "3EzXreT18VRUGJmLs9FguqAxka3U1DH8micFmpu3U7owNbaaRLJZBcCymzPQjYxSknMr5bL1n9WEFrnGbqhL8cr7",
  "key8": "RtNH2e3fR61o6mmmVKvUxtDeMjLJxP7Nyc7WBwofb4i1nBAKL4JKsjVtqe3zGVhXwFWxmddmVCeV4sHNm5VivhA",
  "key9": "5GQ2NV5SBrJPUYoLnYC3qNh8ktbHcLxZ8TeW75UHBSKiUjpVfNx9u11R9wNXtHCrGXuXzxnaEGqV4dqfbnVdePNv",
  "key10": "62Cb564ek9bhR5pT4ALs7Hn23fG79WAhyeeZQ8W985jMQrRwCdBRHWkZRpHtzurys5LAJTXAHsfKjBoDTv7s4fCn",
  "key11": "4F63wJeWHhFBByDiBtdUgU3bPTjjfaTzVrmGBvBkgNDwWC5om6V2Ls9NjCr6LpJZVTJVp8DNZD5LY4iNWZCduRdk",
  "key12": "2eaCxV2hji5XQRQJ61pneYrMVX7eorLw3qQCFoi9SaT76MR4zwhn6FPycWHAY25khmkA4RxoMqjhWKMc2cdtuvEN",
  "key13": "2bYSgB2PbPJWT2QakZXeqibDMmG6Pj8fcZTZ2UtbZTFW9xy1d81vXc4dRDSKfXKTmr6yorB5pVue7rggRboak9Pi",
  "key14": "6y5v5GfzybdBvPPNawHbNHqaAPU7FR6AT3iRgwZXsrLkxy5VKojhhHMGNHHz8QvAWo7yPXhGV23oVeLSgaCZk3F",
  "key15": "67hnMNhK21i4L4JBc54ZJieUKwMfqqdpkYLc5jtXHL2bZm8VKSrXV6CbHvWLbhRVqByULcZpjWdAY8J773mogzyK",
  "key16": "igr1kYJtGEM1GWR9NWvJycZami47nrhVu1WWKnSksUXfyQrPsF7s2PutQidU2hroroktAbHfpebgQuEF5JLrbAA",
  "key17": "51entrWivbdezeruFwJKyGttG2wErdfPzPLE5n73DoJqq2Nswru2VYwHjkuLKwK3LcedKRX8GatktQYkidJvzN92",
  "key18": "3M7aRM2onhBc3d6dgy4NsxZV4EqqKZ6HPBqi1FQmxC6p4tZtSrJrctK6ZPneL9BAxMegKSuxWN2bgKqdQmKTgev3",
  "key19": "2hDnZgojdFdYr2EXPs2VNpLAMDqmeoUEqBbK5y6kbhcyKFXQFzpmjM7xW2sPyTH13nDw4k45Lp7rvqqYGCa3CAv5",
  "key20": "2dB2q55cmJaQBpxUdAmtpcvP9S5R51KGAQzyet2SvUosUF1H5ueF9tJk8TWDU7izECaiXmo4KDwt414sjhmVTTjj",
  "key21": "3n6W3FX2ntPEe2A9ypotbLfFcT6A41yfnb63iqfSozw9sFJb4YqD4Cvsw4YhCVCJvgABe1n6Rj2bSaUMujXfVYzs",
  "key22": "46r82gGCQuPBgKL8dKhe7M2MTeVmrpUUnVPmHJpGYWzDiAfrfvVSFUmy89WrKZmunEv1RzFHsrJJnrhgFSfXw6qQ",
  "key23": "zaR5o9SMT4stCAd6phNoZUeYieuwgmyB4Y1SuKkVr4UhBGHsof4ektPJgdeyk3bAWDrVa1pWzyxDTHKavocaU8g",
  "key24": "2tJjCkgVRdiVTURxjHwhJZ355MmHvZJsfDnLfst7eeX5fKYRvKTU32KCQtyae8oPWvSW9NhwiuT9owPRjdvwpCyh",
  "key25": "5TDH9WrFaqtvonTiiQ4KnGNzZyXThHL73hX5wCYpx7HRTyJ88cqBdac5tkyoTtqaZbJUhon8WbLinUzJbSfjt6cC",
  "key26": "64EDnKXKS2yMWT62vd7QFs15tTJiotGY4zN3pckKxj2BX73aRHdYKdgLEEkMJ4yq961MR4iqc1iX2eNTnV6MC7mM",
  "key27": "39NnEWtTL53BMaQWGyz8ytHu1iBxJkSbDZN79nM77xQZbxaEGxQbKudbox2A1MqyLbsPubHrt6fkTwh3Yesc1F31",
  "key28": "5etRicidoCt93Gd7f4EApvN7kRdk4tQfa2mSbu5jJ8tYCiAVuAQ9uEmUrPs6Uv9NtXtjfiVYYCVqqAQFPBywh2Vx",
  "key29": "4ofuRiQUPB3QJnMzPYHfYeuctg7dJRS752aurWCgDXFWtxquevypTEFBqwrhoJ4n67ScafDz2atZQtm3w7gt6qvd",
  "key30": "5u969vgbzr4FFSwQhK45jap449jwmYH8Fa1dVyRgSsXDshpvFpb8DFHTZQaN5cQYwZ8wp42Facs4q6ebdNtgbMe4",
  "key31": "5rFCypP9o7jno8QLBU7pi9ohzBabpJPqcatWbcZ7LspzXGCZorZdZGemkkgSFr2kZJcV5x7kdvx2kbCs2AsrvxMW",
  "key32": "4jcDKSRUHPDkYSbJ4GzdPDrpTvssbUeWbJm4oidCUVr9oQDYStSgV2qFSxRL49MRmMUjmuxuSv5biMztGsnNBz9N",
  "key33": "4mPVgpcv4sMdMM5RjcRtMRNs1uTAWXt3kVvEiV3mNAQtfEa4sWzbDP9MHoA8TZifGEb8hRAK1pf6H8MvUaHautk3",
  "key34": "xdvzGdyD6npXw4tyh4yny3TLAAsmunZhT6eGpPpNhhihpcbYKrpzyfiTwqtXBWqD4PyecAjM1AXHzCQ42AEkgfM",
  "key35": "5CRxKAtDxn475PtzCgpWcK3duGFzEi11JDcZVewCtzmU76ZMwsqmrFQT9Z8VJrH2BmwHXnzfj4GpfXbCgEhMJ7zu"
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
