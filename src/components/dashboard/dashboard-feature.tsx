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
    "5UzL1NPqmsogdJvbmxAUBTaJuXky48LHwGk7APZC2by7DnRhKehWkPC9X2VwN39F1Xt91RAgXsksMkNBgK8ycwoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnpxXJxnH1guZeYnxNCrbvHVrSnxmLRfEVqm1VVeK86aKPw87dVBoq2ktbcA5vwAkKXVcxAkFvavAcWKnkoUY9n",
  "key1": "5Q9Rd8mJC52Zn7RM4y4TfHKAwqvMULWZiReLFqmcuWGnm2REtCohNBZRLydsLMevG8gb2N1UErheKuLGNXba4RNo",
  "key2": "52GZETHyq371ozHGX2MS2CgUWxSYF6sqB7cFLVEkc59KGF1DukiaKi57vg4uWpti1iD2ChdCqyUYs7hWrPsKAumD",
  "key3": "5AnvtUVuM77Eqyc1ioSfsrq1tpDU5gwqA9zhdnoXcrry1CZsxfCd1S5r9qgyt2WbgZLdCgSnBdyccWKH9KYwHhKL",
  "key4": "61MQkbkMiXHwSb5EyrfNXyfEESgyVAv7MfvLLjyfSPnwStvoKcbXCi1nNRpWfEwatyWqpnqRWugT6smGw1hQQYqu",
  "key5": "2yPNHF6skZEVCwgmzmCAS7Y2Mk7D97CE7J84Kg8Twyczajru6b3w7Tk4avbPxvH2VEqZaK5YkmLb4NbXEoqtc6hC",
  "key6": "bWBXbb1hbP4T1ZbkmH9iWnWdF2umiBgv8WGnChvUJJ1e7oKXPHyJkhnF3toQ7eNqqQbPHLv8yQz469ySPeDmxAF",
  "key7": "2ViNs2wYQxhkgYSDNMiYCzWeJ82xYzpqjdpUzhHDbeLakcJQeE225QekdMHaQTQVEyxcQdSwL7a4cFXuKeeRpfaR",
  "key8": "654xYdggE8sENWkeVmdZHRP6FTL7gEiJgVxWoxVdNbURKsWWnXVCavAc5UQjLFuSjqziAT5bcejM2fLRhmZ9akg7",
  "key9": "4J5E3kB2NhgvntXTkYeRvcrZKwqWE1jXgsCgeUnhRNwYS5hAqzQnMJy3Miu77tZrwix2QppmfgzCP5tgcRHarN9N",
  "key10": "fa4VdcL1LxQ81nprUkgxQAjudLujxzZ7UVJ6YLgQdL6bwHpGw9WBKaH99qHYUmrP7saXzevYVDVt9LfoTPDhDrU",
  "key11": "2uMBgR7fV5Ywp8WG5Q4sSCjjuXcK2aq842nRtTYT95XDMsxv8o3tAsZYpwyW5n1RS3tjWaABVDACjTUA7C7m57Q8",
  "key12": "R3k7jhSoBNxnFSpgBDXqgmfWs66Jyp58wuDzExzNLkw2KTWzhciamZAi7Q4ZQx7uoyW1PqW2U9nc79dbLtSBm94",
  "key13": "2YAoa2aQsfGXBHhJwKUAkydCmjUsjxFghKEbYeQwvRCpUKPDwHWWv4wJrJvU84GdcibrJbRvgj4u7FHW61m9MSAY",
  "key14": "FdQtt3xjb9msPTHnYwBNR7AETGmptK47DeHLBsFPnzhz1h7Dbw4nkM3GqvkVcrayLtpGF7oc9VPetLEXqAPbPPW",
  "key15": "2VD3it6npXBmrMXYF4ERZ7VWGbmxFHt8xkZVSaHxgSptZpWX93XFQm22D7CmpnaNdrPMYQGfwPibQaPhwY8HF3AY",
  "key16": "4twayqG2jgxEjHGMBqpAbKVUAJBAwCeCxmBrhFfqLKERqctZ2iThPtvoAurdexG3iQ5k4DKpvwKSjaBVWTqhkq2Y",
  "key17": "4Xb9VChuxcyMp2KCdZmE5pXuBMDKYaRTHTPcXioRpxiiWLE285eMspUS9sL5ZvfqbLck8mzLedpscv1i4z3yqehD",
  "key18": "2GHDDUfe17afKjfhHH2MXBGSxJ3X3RvquZKSRr284ToKfwNiLSCL7Dns4sscULiBCbp1Xs4Dv6tPLfCnKdU1Njta",
  "key19": "21rSJxR4CrbyXeZJTiJ2qELts7CtC21WgU8DmXgiz9Nt3iK74jfbNMFhkmMg3svzmo7StwDe4e4je2bD7692W5w9",
  "key20": "3BssMuJxwLx1ZaadaQrarb2J3riYNu1TXrB3DLUWARe9ab3oU3NkbcfS78wrTdx4oXgxrdGNKSyyeNjXSh85FBwZ",
  "key21": "256FsytnNRyJs1nfjJqdWdZQy8w74H8FRgTXedrxRP4REKNtksBMgyGAgjb8spit8yNN8tfWhKJrzryouNZ1S4wn",
  "key22": "5zCRhBYSJb9Rk6TU5T7qPXx4JYdKSkqJGUDc8A3ZmXsnCpGuCGJYSUELgZrTTqPFy3FH1Bdg2e4iHi2qYZScW1Go",
  "key23": "iuYyjqHZGrvqWvQBhMTXt3CNMdBSnJfTMcCAQ4H93UCEs9MNvRANEuFQ6WCzdDcoqD8nCJS2GopWDMHngVjqDnz",
  "key24": "5XoxaypWm7R1Vu9ydtvmZ5AvhiJbAszE4yDFPgmNYGKj3wGeeUCpdo65PZ723mVRdcd3aamxoVt4c4h72ai69GR1",
  "key25": "3AGWWpibLVNxtzFnrQjKN54F9rU3QZFw9omkYD5fB9qbxbJifTFSBiFuMut5ZvtbcqkSvziBX8iBDk2MUFqgmXTp"
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
