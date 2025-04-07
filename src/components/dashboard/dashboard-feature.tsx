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
    "2nFxDZLrjKwSYNTnFTozLjvaTUAsKD6wTbQvfBxQXBThE5rcJCb1K7Fp1ziXotHFWimMR1H939z33WamTAXqc9FH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "483zGHxCy3q99fpLeEVjE8Vu8ehL3tvLqZ7cCnZtoG5rxGi58PgKbo6awwDaZqDmk3qRZwaZBfTwm2icnerYycTm",
  "key1": "4bCvgUUtqYSV7cd6Y2jUy2dPpCTdTNvFAjyNtLu5NZewE3XyCbeoHHqX1MoFozphHMyK3VuvgX6B8Lcyxjo2pEQB",
  "key2": "4H8Rjb92X5EVsgPNBt4r2VvoVEwjQEq3eqRT6G9mJyjc7fHuUPsC2KN8Sg5qatGk7g9buLeWKB9qxjhpMpTxNbDD",
  "key3": "3zzq2ZL34UCACeBrH8yUAFxLvEbBLmoAdDwYZxQck2xzrK7o61P4AL32oS6mss9jQCrTZmhqYc1nbKCCG76fTCFF",
  "key4": "4ShZRgmtE2NgCWbFzLVNpcXsoMMDnBHnxEtaHRo8sBy3azNBimA6u6qPoPjeHnbaHJqHV2wiQuMzoAijwEfyS16n",
  "key5": "5p5MykffM7YZYNacU2XUKNrnyrMimEQhLHVmMAkQLksoCQnpQB6v2CkaVCvLR83vt6TY1MvdH3CfJzQTRifu1rNr",
  "key6": "3YpHWXde3G1KAo56fmXotzTJD4ahTBjGgLdESS9AW1J7fa3PR8RND5tzri2qdAx2459SQJWa6gzmJdd6xtzxqfbX",
  "key7": "3yYt3VVMQmWQodkSs6VbQout5oUw6EjPqT9axkaJh8UAqqZfb73RGyp5xXEwzwqRab6kVKdMky7Qxax6yXKBkwrM",
  "key8": "dd62mfoNVthSZz7fdwULqHzJ6ksEAKnuFwMdDcrswv5hb9Kq9QSTg1cDN7C5CJYy9tg8Kry3BL95RxRmMDHG7Nz",
  "key9": "of61cwEwmZdMG8yt5bqXDxZ6FR63Bu6kFk7f335VXaY5dpFTRtpEzmVYmVMt2R342XKUQVdMMfXM1fttmtUi7ry",
  "key10": "65hTAfXTrngH1LdryQjRci4Qb5UMaak1SK2SbXkN4fFxAu8AvAcowTH6r3LPdx8AZaRtQCC7hwzYGRVUSTnhAU3h",
  "key11": "2D1zc8pVNDrpfevm5nKLWt8bwLiWhLoMFveSh1g1hFmXYvauYqzYb9ixtJVQsZuQLd1GeJL9syHvjEti2pVzZguS",
  "key12": "56brrPbmTnLpPXFKkwb3i4i21deU9F1xLL2zRwV2UU32xvtDhFwG1vX3iFevkWvenQbH2LmQruzGJnUxVhkvmU34",
  "key13": "5qDQvkc52mfgAifDBS6Uxk3o9SFif1xQSSruuw3EoL2Pz1CkA6DdMXGpw56q6Tiya6G6ymPRQ5e94wZe2sG96PsH",
  "key14": "4JktsFY2niHQjK6xSSaPVkkrAEBcisx9yxKMHBt2TrqGE7CzUWTn1sqFNw7Qg44hHgxt7FciUTrm8Ntc6QFWP3eX",
  "key15": "5w7qNG3Yi43cGYKM6Ag2h4E6FyE1wubqvVxamY2h49EWn6WuZmmFgt3s1rwkyvvKrKWmXY23P9us9G8hfoVVYcoq",
  "key16": "ELRtDnN8ErbLM29awc6o65wxTq3F1QSWT8bhwwab67YiiNaBK1QgDGxZ8rxZNoMx33KUWyhDhCq7tvgSHv6cZRe",
  "key17": "3SDDAcdfAXufpQj8qH3MCra5ayeSiTYXo1gA5idCcBoQ27ShbfLwhvDvyPBuudC7u8ejT5Cyku84zXydNdS6jPjY",
  "key18": "dN4HpPv6UDgRGtUGFVDqJxjD1mGU7ECY2Zm1dKnWVVj5Bhn7jfTACyMYYXJtZqhZGaySveuZQF6XV2mWaBmC6md",
  "key19": "59oB6nQB15ZBCEY9wkdFY6keaeiMhtC93voiCEudqjTHiNKDpog6N7DWHMuHhFVbuDScqS8UfUqtnpiLx7wv8tfN",
  "key20": "JDP3atNndJoPus4Z2g9HMwC3v3UiUEHsYc2MCHCXAPJ9jZoqN5fuSE4cw7qYD6bjXKjvJ6rEBd1jm1nirYb5wtD",
  "key21": "wuGdvF1CbJBuxN4m9R4THkQYidmEhnXd1M2DuL5MAbTKRgoUDX2wbzpFpxA2bQizSSVEYFj2SafsD4W3HFtEu3j",
  "key22": "645kNzxZ3stpkj2hiDRLjcMyzG4Y74BoFU8kZtJE73ndB5mcM6EHUYFJ7aMSmXUxbEJycc34UpU8ygDPMaknXHGB",
  "key23": "64VikHSiC9CBm7fGwPp22dARbxpPUMiEyGbFvDgpGoBDsDTwy8jEqyxQAFVuNyJBuD8zMqYd7yZUeDR8TsJCcSQ6",
  "key24": "BK8ktijoxvou2W4ffSAuFPK33AhsgCbefx56Rd94wocox4Hw5DZ4JFHdcqDQrZUgSdhNXeEBEnZaDeDr1DXKTbE",
  "key25": "61t9MKk9QARwxnaVQEtiix6nHR23wYCAdmqzSYjKhNbacebohLVaMPemAnqkoo9MepxdqjmiTXxU5abECuxnbwtT"
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
