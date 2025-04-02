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
    "pMmLeRfEuTrAMWibf9cN1pV7RKU7tvHWE8r1yEiD7JLTyD9DiQ8QUpu8oGb6vVVMdEU6Ax2bNThXBMqNZuxwX8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d6GqgoVu9MfDEsxUgj2cyoQ9UGtGT6rsdRPMiPFt5HuRdXfKQTSHbxgFsPdmx46a14XVRUyAGzhHWXH95tFvRi5",
  "key1": "eNw13ec6pC5cU1pnAchoa8u4eTEmPN2KFoXxSyXXSprkZiZ6aacNtsn3ZShohnaw1Wv3rPL49P5ryCSp9QcAPMG",
  "key2": "5fSFkMJAgieQSnKfrMKagHr3eAYriXWbVT1HCJCtVP1hmQcP2F7c7jVrESKfM8mp4tQER9YCBjqjDNdEXAcrJera",
  "key3": "3YsFvFnXGBHEVvTb4d3dQQTqAHfhrcbewbw2R6nhD2smDumj7mN1QYhUfMPoSrY41KmtdqPmyqT8yd6TuYdy4erk",
  "key4": "hqBDC9b3Kgun5ywFW3qeunibpqSgzqqA9tmgPVgovUmxM29RKyAqEvhp4yPJBPt69oWH735hrmSMVygHiQnm7wz",
  "key5": "3UvU3yTjWqNQ3G5vag4NYAMzGGo5TEwgFpM9mCRpuiA3cBa1LvCpcAt6xjZyf5Akz2ZSvrBEggNbnp7xCDgzDe93",
  "key6": "2ftfSWhpSC49rbvMCWaLWGNzViKnPBaTezyjgX7ELvP4tVKk8mwUn3bVUdvneKdx4SGYrkk3emkHmuwxxQwAHJ1H",
  "key7": "361qhDN7XMF2YrA56kzRgPgzDcpwC2kL3Va9xTMGXeV6jjEL2miUyPvvaSJ6CTZNFyFk6F5tLZ6DpMw9Mw2ex2k7",
  "key8": "5NB4TxhNsybTaeRGGZgMthvjv6auwZoPb6aDfB4TUYFKBhzJdMJvRXU7y7jtH2NitPqve7DGgpn6srz3RehbF3oW",
  "key9": "4oLnic7xEgHxjeQm58G4DeEWaonb6ddevspJNx3S95auNFAcEoSrHTmD18Jj3a3hobKkjpk22tHPZognFjSG4KKC",
  "key10": "2XYvbcecQcagi48srm1441iHwr3pEBtdGtGnEN4BHT9RZD6Hgj53WPvNn4Y7JhafDhoLRc6bA6WfM9gBDhVb33LB",
  "key11": "5ENk1Bd627v2CUo1izBkMGqDW6Yz159hqhBT1hWwHh7cjoKMbQS1q9GMAzaaAKZNrJhGEvRZiSY5h3QN9Qy8c7d3",
  "key12": "5Ruif7XfPDDT9VNFqMqzSs29cb78SCrxjk6ZJi5nXYtB58whnu6mGWAutURUHMcRFeC3Q2AsBHoKCzvJvrymDjhk",
  "key13": "57Cv8Be9LPhdnofeDoNKYH3XCJqhCb1EkVUD7DXJpbrhJ3g2bjC4Tc2A2sYsmVootcCgATLtwT4guZZeR6Q9pDt5",
  "key14": "2ukaKE4YRwcTiS7eBsiU92QejdxXYnG3VLLKeyPMnEFSfTv4DueJmU4syeNtH6tWz1wnmkuwV3i36ukVucZQY3jz",
  "key15": "2JM5fxj417gkGne8S9fUm2zNCKfjRx18i6j3t6TKzGdyXSjDMvzjzRZufYB3VcpD7RFMmuV9zNz7NPcRxu4QAr4b",
  "key16": "3WyhhCNGeLC7JtzhgGXMwXf8xCh1asGvYeo3iXTqHWLH482PrqgBmfgVv64aPRexjPjL1T8DtCpkfMH6maitaRCr",
  "key17": "3MSqvVafxS59DLe6qEgBHniEfushoRgt7zqQqLvMyh9RgBewvwDDCpiB2HbzNqxeaQ3gd6KaJTaVwGHianpQRWSq",
  "key18": "3s6zs7iFwDvK37QGes4n9oSEzgKNLairU7uQoNexHsoaaypG4AgEPRQMM8CWBYcLySuiKiaJpwZ3TpQru8yp4sog",
  "key19": "2cpwkfFXCHfG8MTfZ8QTRor89AF8B6PWbVmSPrSebyNAEKxuTG6jn1dvkmPTS2WChn2CaLHf5moqrU8PwrrBbLvU",
  "key20": "3ZJf8X1Mzdj4f3uPSFhe5z2i2oXsfV6mBpVsx9HU5TrRqAYFMVxtmJatNoJU3g1B5St4VzBCzELrmw4ZUJomFpxG",
  "key21": "3csT5K3qJBQVGmjrUfDAY8sVZGBYAgsqGsoAutZNsu1iD1pLb6cGrhYiLYUGvrQAbVkk9tLwjCfjfnrFEcYHNEVF",
  "key22": "s8y8gdgqgDZqKcia15GMSazBQmuEU3ukgXWZEYNcSV8nGeuuSzC7r8YugsfWHgvm8x4yakCraqVKLrW21yjc2Lh",
  "key23": "35YwiiEg4GMtUpBmevyi1tzX1gysaafsYF9Ym2UE5ErC8q8XUfGv62GvgUvY6A1eifX4tJ5mCV7fyUNm1edd8Ntz",
  "key24": "21yENre2R2AeVpyjuEKrsd3teDt2KvyfMZf6uADgydmjREETszK4GQ35bunA9noZiAhAYn5ZEGhhrdfv24tbcgWH",
  "key25": "t6wDHYZ9XYd9mjZQD9wKW3C3YJyZELkT3VFCwxqVj1E6FTQSUoEUDfZ3VZdby3zMxXpvdyVHhdjZ9P4oN9uKzQK",
  "key26": "2o5977fVyu1DBEhFGkJWzRQzysW9naijozqVNQALqNbMTRe4KZsEqVnQEP8hNZW8ZCcWZRLApDVuAuVeg8KoefKN",
  "key27": "3cKFtfdUMjL646JjwsfXbm9mSL1WUzHfAPmv4qWq39VRBYQov8CR7FXeVFJWnUJAo1j81TK93GiQJDsJ54QCMQsu",
  "key28": "5y7CpfdUi4dAm33WrTWbuhNdHPKZ1EZEzToUCQ2J8yzU4dU3tWiyxFEZwHkUWDwY8BUCQDcVS89d7wqgM7CBVuXU",
  "key29": "5s6tKveaFjCHkPhg4pvLT6KNP6tu66uehFwNaMz2QPc81EpsFM3eNoGwyNt2xJdnn4Adz6okAz3ZeUgqspkYaUGi",
  "key30": "4MbVvCBVGn2GR5ghJeq9hMGquvUATf2d1UgKxKaLnyzwpA2NxGGwcNRiu4iP9ego65sDpsaBtUg2ohmWpUtura6e"
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
