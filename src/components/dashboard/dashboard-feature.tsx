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
    "5KEMYo6Epr8dcMeP9F33rLyhTnWxxiQnWTQETSbcYM8fsLBuBxEuidp9JiEwBCzwzqmzQau9ufPZwtWMgPbw4B6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2rHqwoGfc25TYLpwudSjsE3fwVhpEhurhp4nAHYBnkwBoYmx394CRF1Zh5WFXDd62RbCWmP3mGSJm4Jyb5QtZv",
  "key1": "4bTF9Xn5HCNaSzfuRs7GjMwHcaqoN16v9DaaonLm7TCtBDhELtQx9sAvpMSMJdYZ39YmEbz9NfMMc5bEWgwhgCSH",
  "key2": "25v7aL4QXZT212HeMh8GCgnKDwMcuEy7gHHhfQ5QfnbTyrQetP6tGcghBSF4Vmip6jT6KtL6Hfo26VgY8kvGyaXR",
  "key3": "MicKV3t2VgvkJfSYrsrrAoT2Y2Pk35oMDnaFVcWug4AX6CN3UvvcAWPx1cc8XLYHqWRNysBYNsCqWvh1gWtxA7g",
  "key4": "vW8dZXNKn3xMN9AV8AuT1hKqUEN4RPwQWezMaZctPftCriN1MfTbzVGmK3TfwFCjphGMycp1Egmnd8St7HL5b1n",
  "key5": "5m7HodXBSB1Tbnd7uhYCqszAJ3AUSJNiGzjPBQpXe99uQB1LDNCTcXyVqDTEZuc4wKGWWN3ScPAcet6Sm6RSvMKe",
  "key6": "4Wt5CRbK6bqnVPibspLb3Nk2CbVVBa19StLPWKeJhazGv9gF14pCPB8AguhV9EkaJfgBE8Y9rSmtTtHAjcNhFXvB",
  "key7": "2kuENgMhnE2Fo4HLMhuuouTH91JmBWT5qE5huSJo8nf5gphkxz3phAyrkTt8mNLsXHXLowUHphR7pYpcQmsM4Bp5",
  "key8": "56c55zypFVo1h5RYZXQACCfMsVcjGR1R4jM1SGxpetyH2SH4taSHQG1hPMuiUZWsZbibXoSEhaUTCbhn5QS1jsbP",
  "key9": "5NbntKLCr3N7ZsAVzY9x3bL5YynxnzNuvkTYSsxBVZS5DdqFfekywZ2qDmxUiandh7qm8ESkTtTeoKdd1EJVeraX",
  "key10": "38VTVHrUuyGBB23Ycj2LzVx9k9epCWPDL8Y2YF7CqHvybHuyq6vKcDS3KkcpVHAhtaHWQVvrLm7mgHj7H1WGdALo",
  "key11": "2koRd9BbENiDQ9GcRB3bGDFKTyouB8sG43eUfu7gbMSpnGQGJdWaccUidTFRUvcfGahG5nVS4PV7db5ApnM7pnDT",
  "key12": "39pgERX71ds1XMx3b6aymYS2aPCF9kLxrKhT4kyJ3Waf7mzsLsZU8NKP5y69CJAbaZSc8XWfQH7fGLw8qomYs5VR",
  "key13": "4cBPg5bMJRmz2QbvkaTnMRS8LDqc8Se2vghNKz8XU8oM4nCaqgyEynCGkMqUP3VwDFv8659LYjtyD9tEURVHU8k1",
  "key14": "3h2GAbb2ZvxoQEcJ79HpoJKAH1PwwzgVM5JZR3nRNs745Fv89FtcPA5tcdfr4h4iBADMAnnr218Lp9YNWaKuzZNk",
  "key15": "3oJtjYQB9tqtwAV6nyBwRLqPfiWwm6BDMxVTfU7KpmNjQSmDf7b1zSWg8E3SnFAG3WMAjuezCr9Pz2ZwmHgXDRL9",
  "key16": "2JvDQ9KDaxb7vMKkzXBvqbYTNpfo27UQnv66897ZMu9q93uN2zrcxWUrnJUq1GgWB8mxuV9PMg256NCXC3sGcPYe",
  "key17": "4CaAVcNVjrcdv7RiAJ2dNyDnC6r8HydKqExJ2Crk4yLe38N4A43PaNxCtGsnS29dyopTN5Dmh1GgkSL3q41rSRT2",
  "key18": "37tCQbm8C2gLGdivCcfTkS6QQX5zZGQxjSXd8LY6GRDiRN64DQ1FZUJtyP58zsifJSTrNSjkzYURAy5B7ZSb9rDv",
  "key19": "4Ktn2CyY5hzE2Pbyzc52dbbvHqvF72xgAmzzHAUnnNgoodykBRVEhuqfkq642QLhaX6bguCaYbP2yXqrY2U13zp5",
  "key20": "ougvMg1MYE2jzVy7dRskmFohwjEHMSRBfMbd9UHSXWSmCnJXvKch6s1WxDnyc2bdWixwRXxgL6rhEafC6MJunrb",
  "key21": "4VZz53xNgqNMiWBeZ8BZkLwKirycQQbdUpFAJQsrXrwp5g5BXdR8u5fgvjZAy8vhotepCpzvw35m6CBhYPqYpNVp",
  "key22": "3i9cV2vHSQV8CTQAj33UEiQk3eYpiq39LwNtzCNimpvGN7U6tmKKP7dW6Q5fDgevW4prqpHbnd3ZikavBHG6tCiT",
  "key23": "4728n2WZvVrpd3cnBm4JBJUhjaUGGGWGB928YABjnZ2Rw5QAq4kq4G4nwd8iCBkv2Db4D6sNJ2m1XgqitLXVFPZy",
  "key24": "4Ur2nkfsXyZXy1uJpHvNQeEvsmFGcW14iEx3pc9WgpbTMTu5kGLyVdSp4G5zTrm4vjz3ibwSSR8Vjuwqed25ThMG",
  "key25": "2KvZFre9GedYgEdP8UYibBVtds658wtijgnNEqyX1QGCpHVJ6Wn2iM5Y3ojT4jA4Uaj8hWDAVdkSWrUXgSFNcaeF",
  "key26": "3K85NxZTgiwL7tsovnCoLVtDJhYjxcVTtu7riWd9oTak6sS1iB2qPAjPBuu7qP6nLdMARX7Yh7GuiqwTA4Sp2msm"
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
