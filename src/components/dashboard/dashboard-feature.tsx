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
    "48jry81vqkMhwo1cLntk1SNFyfC3a1Uxy3qbmpw2F4vKuWw2LpeWgSTiJjS9QVMA1TmBxVHGaDHEkJd3GqLwdY7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iR8jfcqxfaUYv92jcpXmNCksn3RpJF8EwqEsAUxfHmAT7gmWmmhxLig6wHTREMfxsx2b7cJaogoGjCbxAPWn5oK",
  "key1": "2aPVSS44Y3GkrxXh1KmpFSH1jf6idfCkRteArMbE1XonrV61Q1rK7HcAQKsXRMusCUXfS358HZYRwZkL9GvrriPj",
  "key2": "4Ztis7DBgZQMFjL29WY3E3aZZqQmZ67ki2jK9jKhkUXf68BGQ1TKASjQHJECjAteCuVpJJJkAShX1kLW7Ncpm8r5",
  "key3": "4MHtfBUoPHJDCYLwZC4D9m6xVWifyAAAFU2W6aTCkAwzUSHjDjG9Y4PZWMdeAR9To35JHBktAXUvGejF8cPt2BGK",
  "key4": "43MrAm2y1FaF4DjvxFu3GoM1K8A35DBjDGb6EwcagVDwtsDWDdNZPPQpXTKSDbdiDp9Je5SYsSiAq4Wi6waBzKhC",
  "key5": "3YiZCRZHMLd1hvXD9qAR5MaFQ94aLYyicqHydUqtxH6zc5QQSMcjsuQjC38MYoRnU2GeatVRrJ5hexGEm52L1koy",
  "key6": "YBLxy3uzhTsaCdsJpQJ3hVFgyKySKShCjHsVxZaZaxKxHddQ6XNkwzgdKw8nSeEFi2ySLpqTySzDsUqRHcqttC7",
  "key7": "21Qy2jCLSAgCiTXXyoU2JMF91JFiMjACpxe65DbN5JoE2VXLxgWmRbKsJbUvcikcRL1yxbP3Fab9Wes6FyveThaa",
  "key8": "4MNDZhFfm4rWJn3cxiNigHfwBzp2MxQQUzs9NFurstL4yMLbecQZMFxNLrpu9P4ry6CCfhG85feU4p1Ua2qUgN3f",
  "key9": "DXRjMYHWvZaRqX95nY7EcfxV1i5LUt6D5EpHTCwnZ6WNyuwJCHrgHqUtwjVmTSEY7D1vgPpn17bmd8wmJ3WhYYC",
  "key10": "4wNygZGJd7BixKkXpnFb9Jeiet7dsYB7moftpSTahXoAh9gwCrCmAKTCgtsZcQQpuH3vu2SqCur1RWqjpLty3rNe",
  "key11": "67rPq71QAieonHuSGbQoXf5xUM7CtLAMmKuHHqrSNV14Jirok8TNYCou9TKzHbFqk5kgSxVdZHMGCKcRvbnjJqj",
  "key12": "5utab1TndPVDEMRnsCYKNBykD7dqZeCU1gYdd6B3pLoa828quagdbgy2Jso9YWYC3YniEbnu8U4KFh114ajTebEL",
  "key13": "3FqRyBe7pV9ciZX6tURB8U8DrDMnm6bz41mydro3JeiTH1o74WYvh9EWteA6Y14oLYa2oH7YBW8EJAk19wiNAJty",
  "key14": "41VwbHLcqvjvqQXKqX1g264q18hj4vzxrTNNCygat9RdmneuEmtw3oVRNWjkS6yPY9Jef8yPLVbywkVRfEct5xMa",
  "key15": "2KpqteHmiy87Zikjx27fjNXRBE6CKEZZf6KfAtdQVcXEankz1qapyRM6DHzoB1xXdTud8fbVfoiqh9Davf4XZ554",
  "key16": "4XTHKig8THs6m1APjH9zqz1MgYJ6Tfa22fC5VEEgTZyckoYtG6Aan4Wo1KZqCVmxJws53d2RNHK8b2HK58Gsvae2",
  "key17": "3mPdP8gHFFVk32nicWFKeCwiPMt2NAKNs1aQ3HME7iiLvQMKy2L8gyYwZGhETiXYEFjJmfEzk9JyYaNQ9tWdXEc6",
  "key18": "5rhbMVpLSNYpRwAmYXcjnV23JbmrFP29JjgDyNtBH8cD3pVk5jBrvoyvVKuUofTgx7Zv9tut59vZDdQ9hCDjEhrD",
  "key19": "3V6pLFX8rHX3Dw2yZdSHPQUmKemFVSkS9UQ9U6jKSHWBox9hN6ciTh2r4yGdjVGf3JHJz4iqiDb7bqypp9AL5MFk",
  "key20": "3kHFPBQvdnXDo3SnYxoTHapeBneb7xmcJr4YTUsbQGCgwSj5dhCtLe2r2tgDGjcBkQFLX7Tdpr8Bs4P1zB1gsibd",
  "key21": "2iHP4Y47SmT8Lodjshm6ypbTB4jqjHgT3zC2pCuMPo6EGhH8etGkNPqwHRVKzGTgrbeeZgFfEYMYAkZHCqaMbN7R",
  "key22": "5sk7K6N4UddZToZGQgNy5dcfELv9H7aYuaw2wPiTB7osXvTV8snQS3Vqhis1MAmEripMRQHR39DgVqSxJA6YzfnE",
  "key23": "2KtQmHrLAEwNApPZ6BWfGKZGnLejVxtt8Nrwampe5BmRv3uymKcVcvJSXAUkpwtTfBE6w6ixqw5FvbPhnuRMuMz8",
  "key24": "4i7ZPp3Yt35wcFgB9LNEcdwG1jmH93U1osn9wxSP3AbhSoFKsdRdbz1mxDPBk6P4x32eiBubfc9XjZToc1GBoDJq",
  "key25": "2bvAbiqV82EaWjKu72DGgYUdoroSKguY1W49wm8dv93pwF5ncw85ZWm8CxpoqtDsgwp8QvgD9NPbwMYiXbxsHMg1",
  "key26": "2ssYReWoyFMpodMvLbmDL9rFzk6PYJXigHrcP4Mufi2Y4edZdZWEmVpo8WUcEaWgcdn9S1Q7sdFhaqiqGut6m4T4",
  "key27": "kBN7vihVugtvD8UWCBanYTzyJpEXLM8Xy7gbkN3GTEbRDB9FuCNr2FwZHRrHMsshQupDd8wrcbNL1qLfqR3rTR1",
  "key28": "2rYVsXtNnvyLHwuNqbNBgNLa3sLC15mLtPUtV58DnxrpvHbpp28wMn6EteDmoTYxw32JugLCVxkmKMvV9LHvLcui",
  "key29": "21vNSZK69haCCTs7ZQrkM1uMmX4mGvtqtg9NqVNLosbCDTAyjqWmApbJY1iXcFiNnBjQsiRjT1PAW42CxMJAYEEb",
  "key30": "3vvhthvw5EFimxRvuTACRzgVuqk27Xx9BCDwa68VK93YJBxRNgw7a7KaKBauGmty7tFxJ3kBTvJzsUhpkHjQ8apB",
  "key31": "B8VPz2r9BAhjAUrXsbJHC8AghQweviTdry1AAAXuR3nwTMfvE9VNxPhdBAiZD1TddHuqcfnfefygCYME22G5RFd",
  "key32": "2oMQDTRceRTuhbTBWAk4cWfso7zoKP219eyku44yzMh29EvnsZcGKyrFo3vCFUqjs59bE7LuHg91TgSm99WUFvS1",
  "key33": "zoqdbvx75gWgH2cHjj4pR43EUXcgwSsMyqZEEmvpK4GzjxkrNK5DYci1rZEXQNnF9sJb8Q8VZyBxaXHwf1HMxRt",
  "key34": "4NnV56g4NGwk376XJcmQbHpBpQk2XsaVoUiVSDfYcxJDXkgMDRDM3N6mewQas4D5dHs3uiJvGyhaEL3ZCvnZJqJw",
  "key35": "5tPep7Er3Moi8EyEkGyGKa2jsESETxN6Bc4mQGVDDWfRjN58br8CqcpF9LEmqapLc5hGY2SY7hfToqc7CWkk9ciX"
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
