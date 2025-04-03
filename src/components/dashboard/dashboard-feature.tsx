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
    "4fLNEXMXvSHNgsB7gxmhWrBH8QvJEJ61L3EyyDNjRUMMPfUy2Y3khs7FnXEnVnnSgfH81GoRZ5dkw8YoZ5iZ9ARu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y5q1P4KD4ihCTymagHgyT2sPicZ52CZWRYfSDwJYZKTJkACTGT515gLGQKRCsVhoC2Zg1r8Jr1WCfAfPj6ohsts",
  "key1": "3PpypwxGBKhQQhHh1bhh2QJCCabd4wKrRtFZege35vAaEgT1uXgcyQTvLZZhq25htkoMr9Z8gcyrvS9aVMbG58P3",
  "key2": "4dPFGBGAwR8hpogqzVxb2Ygb4XXW88aLXeBU1PwAi6SheCQ1pJzkS9ZZUEaAgC2dr65FnaAbDL8d9jcvB7iD3C28",
  "key3": "Mpso7RE8aFMsrYJLe6RiC571BC5cjZVrtyQLXNKth5iTKCvKY4LGUWb1DnAq2Hzr5DJ4DeKSKZEgCYY2QwAtE7g",
  "key4": "2dLSveYU3YuGj7T1FAsdqUnHAMejY7PUGTXdLNbGuV3f851s6PTPxf1GDvdeTu6JcPh1wjepDQJgFW6UVPL98gCg",
  "key5": "3kW5ZseAdAXWnhzJ2xLA3AqsTGmRFYYWfmSDtiRG4qSpoBjQzkLuLhdNDQva9sJmna34YkcWu2ABE2rD8yRLYS9f",
  "key6": "3TJYJxU12k4zsDnJbJc4ZjbhWEY1TvYvXZqyNf4DZFHgGHyfSshChWy7dVaPuTRdBF8BMWsujUA6Z4mxyP2Ed6D1",
  "key7": "4EsLxjcfaJZJkpsZW4oTmPnkU9j4ofFkduY4bxLJEnQ3qRxd6SLVAXArTewQXBsr82mKmUCyqE1K8dmxDvLqPwSJ",
  "key8": "26nn67VbGRLnofRRdNTZqANr5yXtNpCAgXdPWER4AXP6AcdoX6K8L1Y8xdQRBt9rqbcVj3zV22FNJxBQBbfwbmYZ",
  "key9": "2ieN64ZLBrrdTFLh3ry9iq9ybtKdp2Z7Tsan1QHtYenqjjAYFi2eurbTwp3QXVbJ5sHoctGu2pZniDjfHuBuWHsn",
  "key10": "5JBkE8YFiXcUdqbr7p7oWGqmB5CmRVP6EB2njrQqZ5x9wWVbX57WXkrjHH1JdSZMWKM4HMJsEzuK9RkHraCWkiZU",
  "key11": "58yvXU2bP2rZW4zXTHN9tp8XEEYp4q8Z5LfmGazKjcqkSzYkPAEHfZ4udeyrRtnAWcmjHwkFXJmYVJriHbNtw9Fi",
  "key12": "3uPiqNoCnsoi8ZhYBSPpb1SYHxKJ9EBdWfHqeXWM8mqDj7NWBVCraLmhNXGBFGYevg9Lx1gVV5XzVy9B9nwHFrSM",
  "key13": "59svn2euxTFbKGT2f9eV1ahUo139ghnDZoWhtFTNkU3DaVfDtsycnot7pzbuoQPPGxUGaf1TadEZPh1tUyVTMd3a",
  "key14": "4CA2eQK2gLHU9oEEBZeqwx9pKjxpNZGppidnXdgLhRxAPsnr5cQxncVBgE3soj2qYzDHuLLfQq2yaGY5EREUbDdc",
  "key15": "32XM3xKKPjCLcLmYz76GAid9PVCt5FdfTxgaSaSX6RFcPnNq4wkmSfJhPiaLBQF2wdGmJB2QrjHFMoKiB3jjjziB",
  "key16": "38AbJDtNHNwjdquit88Hvp4djXrKKt8UA2DNTFiyit3nGR5a2ND5RHrpFAcDUPeuYsb8gDuZ9EV2SvAEg3sCe7rL",
  "key17": "4psHCkva7Z7DExveRrxxcyrbtaNApAbivz9T6wWbeRYzC4kSw82dtJF1K4NS8sCtJWfpVuDq3yNSdjZwPRH1nYeD",
  "key18": "5rbjtPafAaRu5MXCw3fHkQ8uenLQn6vbPS6Uspzd8AkokZM1GzbnBvKPWVKhSa4AKz3NfHrzZhN9tns22kNY1WyK",
  "key19": "5xsFAfF32EmYVjT5P5fy1V9GnXDkjQ71rpc5V6jV8mjkP44QtAvJppAdrZGi22qSCVpuobvhVwBgCe6uNCp12zv6",
  "key20": "3esD8qT3K44p79WE3fTwfjGEoeZqUTCU86tDHm6jvYLRa8msemQKSab74LWRdtmFSaoHHFezcsMazAf7P3Q6Zvyz",
  "key21": "26i47fZvXw6eRvLfE8sQxgUQtGVap9a1mdnU6hhoweFJe5M1iYXVGM3LUE6aCckiPkNvQFk7fnfr4uoXRb9UkngF",
  "key22": "4odUdiR8xSecfhSxMmGVzz9vvAf2ugHjHypSkw4EDay2cmiKYD4ktKLhwn9A8uvow6ZNC4rsZsmJjrP9fJrtoU89",
  "key23": "3c6rGNW3A8XYLp6F6YYzXHD9WBS1b1hsnW4YgZ6MDa2AwtCzcWzGeDffvBKWb8FzxiSn8ZFrDhLxQzPGigjjiHMS",
  "key24": "65evMiSD3TqTMYfsCbRMPJKn5vNYqhu45TwnX2p1rhYaMa9hmk5Vehw2EmxZDSdMukAkGqKyvLsaqCQLFSuMyWBx",
  "key25": "46PEhikdTj255L2qPv25YbWEfXwPVNmcnnyskLbbH8tKYEuCNA7emoWMArPV6nH3Hkk4cWvd3CoV8TU2dtRNTY85",
  "key26": "Saqhpsgr6vWGLb8Gdif7xBa86Uefk2kdHkCvS1sVoaadAwheEAk8vxjoq1iUWpni4DkFNNLw6eRUxtcDxKHEH92",
  "key27": "5F5VBKVQmYgAbzo7jrcLRDMaPsi4XBtUXBsPpEFRbRDEQ8uDpwMdr2FUzTPUpQpFRG4kHPqpJpRmaVRdWXvFow4b",
  "key28": "3QNRQQ3729SZRHmqVEKUndqD2GrqBJqqFVWYgVtoeGTWP5fLb3kEtEw4RCUXhB8zsQ2zNHFE7Pye1A7qbByBVdCr",
  "key29": "3jTMJkvdFg6LPej53KCrKdWxQmmjdZhqS7NNes6rwYpHB985GM6uUi83UehXWizbux76h1PUNjuzsZuQxJXBAr8Q",
  "key30": "T9tgM5o2HhETLC6cHxGGhiwG26hSF4ivELoX3Yos2PMUR962srTuL57Zo1m5MbpTRHcJcfodXcsiMX94LNGYnzo",
  "key31": "3SotPDSJBCLypi8MFbG3BdRq8FTHFyGRpQzB966TLZthMhQUJo7DQx1Ff9zS3JFnwQJT4nHCuBjN4eCKnX3j2LxR",
  "key32": "NEUdxR5x9j6AnxEt2uZdqNqmFuh5pB58Rtt1eT8SBK5pWyz4zYXkvS5sUsTSNrqBJ8mks78yFeJGdXJ3LKuFGM6",
  "key33": "4hHgJitR6TpD8R7xHLdiDK32CSFTQGeihDbhgzCoEVFL5bhUyDGKSukWg6w41Yu2815HVdRkKfr58AtZk6dDY3YN",
  "key34": "5mpuq93vMY39qeH43Ks72G6WSLaaS1418gugKwiiXejaQdbEf3XdeqQuxbAVwGJrFG1taPCpwjBmnvBf72vdp96d"
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
