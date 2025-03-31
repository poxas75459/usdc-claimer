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
    "Yms1SkpLaEySJYRmGWeEDb1B1yMZAtmdvrQSFHryGYL8KexNQr91FPK2D6v4muB8ySaLEMMw8AsRvamzLyaayKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "287wBSSBRSQf24pbCb6rjHktgteQgJNMC9uomSG9YnLS5Dgzb1qUC6BWBeyCCUH7Dpdxg1diMDedGw5zqetvnkmH",
  "key1": "6612s27iyzJCKzd5tqmhm1GfAjkAL2UhYmbxuJuygjictVfYESZTymxLkyoUVGDozng2Mdgu8udTuV6bFr6A9XF6",
  "key2": "3PphDApC4bArzxTRCqKQjavngKbjXob64PKPjySmF4VYp5K7nvAzmeRmQ1822aoLg2r5WLVHAsVQS1WoroxjPgxB",
  "key3": "3YW5NaHR1rCRYpHeGvmrbL9RniDb9vV96tjmsWiFGPJcuUiXo4EBciMZKWvEUfEQQgGVuzisR84K4ZJ4cmv5vb6q",
  "key4": "2JH6Zoy8RrYS7BWw2ztv2R1YYmDisaH42hpTk2kyF3Tk95FshyzTnXvrEy7FAegrCESQoUCTejRfTj77urWm1eSb",
  "key5": "33FaSaWkJxKg5pLdB7fN584tZbdKBaUdnfHFi9Dxefpu2VTipcv9PYk2mezyr7CaAMSZhqanjvJUtBhuyjAXWC1u",
  "key6": "4sKRKNQZoNgocNvCmQdFfFrPW5nxjJUoaL2ZpXWSX7CJSzVSkoD9M9rvpKxESkaFEau4NjBrFjg7DyorFkxT9tMW",
  "key7": "5jktaDXLtKb57PQFXbGU5SKPDigTem8UGREp5QykA3huHvJmHTH6B3bd6RTCJ7KGuocuNBJMwyuRkvMZ3jbEFfQg",
  "key8": "RQshYbNmLkyCNbmLSf7iQHJahx2kscLQkfCziXFSE2d5HgBFRVosKdwEcR9U3rSXXvRG644GE7c9UdFDz4Sb37A",
  "key9": "4GGMoiNAr4EiUtavisou525HwpjzPQCBAhZsK36NupY1seAzFpdU3ZsBwQ8scFRfRx62gyysQ1SQhnXBdecbGM6Y",
  "key10": "4pi4qjHZdqbBwmCBLT7bmDAuqtUCSt8V5oY3mvZVdpGNkDQRLb2556d4YV18Y9Ky7eri9wCB29gCMYM5DUaAUFri",
  "key11": "4PUQ6Hjm1PvVFNutxfmAmGS53zPjdrhZsLvc9GUbRaUUjKd32XbHVxHLp8dfLH6bYzEyn3MJ2Z3aTm7aF62PTByv",
  "key12": "4cdABzFxPLcVhdxNbYy4rKogfpoK7HPEPTTsV3sroYrvsQnBSJjuoaUHz8mZbSmwuA9sP7wtyXg2ucgVJM9GgvXb",
  "key13": "3Bqh1xffgKu5THKcHdPzREakCnPcxjPogv5ZNPd6HqYf5HQ3kENh5u87Z1UVPgJ96df8x6wUCtYdGwgwmgWwmkhY",
  "key14": "5BPac4FES83Xeb3qQkGKqdUCKi6PEfkCBRp2rTn1oPxDJSH1d7bMwiL4NGgJae7DHUgh1uvi6Y7Ha5S2R5Z58Scf",
  "key15": "5uZVM7kUQhUzAKTDDVqp9MHER7m6MNZ9RVsatkPKAwwsCf1r2BGsaKNdeA3jjBeQwgvsLzRCiqLmebvfV6iV31F5",
  "key16": "2marLHCHLTbQoHEWTCU1itB3TpLTMtpPhG67PGKwBrNBXbF52Y6WssfzWHDkjcedzZAsCVnELgStcCHJHYBNM3hF",
  "key17": "2DioVjrN9XSzwEq5oWmMingAp7FPSvvSQzzc6gV6nEK26HDFX7Svop76tYXspRCZNiGiJFdTtEcpWWnDV256GnfL",
  "key18": "4Qf6tFyD3rVw4rjoSsgq1XrHKYpo6vQSU3eeTPZ7YiwGTMA9L4u43Ne9JouF8SQRYoePHQUUCqfUB1UJgXftZxSA",
  "key19": "5Ezri78MeT9FWx1RqqbbydvULQKJVeS7f4VsyV5bnDtn9UzFEsuUD1nQsKh7JSFBxNnSrabNcvKnfxcnfTbuW4Z7",
  "key20": "4MoH99XRVYu4zpCix8hGstBxGU5sFkhfg8bpaJkAkmYn2BykrVmdpSnE3yxkSkgKV5kLvqASsu6WGv2BzXT455sQ",
  "key21": "2GBFTvho5QrVSc1Gt8qGyRbmsPmtdbKLehKSE9v2VDAuppRuk3FrMJGckRXzgXqJ5Bg8FTtQM1VqHHfZTANYi1Pu",
  "key22": "4gQLmH27kDqsRToMaW7dYVKgXxR2hZAVd5K1krgRvLgyQpLY89b4V9tMPgbFyiNQk6ncwQFkEJFSHTiCERXfrfVR",
  "key23": "4tiuu9PbDgMJKxh5CWJgyXgywwkKySy52w4xjQiLdorfb9upEpSHZCZ8Tx3TVgQMdvakpPhf8M3U6KBKMk9wDmVJ",
  "key24": "5GEKYzqQNN5bDD6NkgsbBvXgf2xLxHJssdcP3W2yWyRi66crZftJccWQN1ENn9sB1CNchTYdN22YK3rVZ7FFyXVa",
  "key25": "5oq9VKPJB181SrCcQLQborM21YyzbDpkaRsdqReXtfGRvr2SMnWWX7DGT2dJWNthc3HinX3CM2GHq6ErDMgqTDyX",
  "key26": "5vy9ZsJkgHmiqHtAViyF7j1FRnyUvGbB7T9rfsyyehcXbgNdKzD9iFVj6jvd5XwHXoCjNynAEJHt4H3bCbN9sqc"
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
