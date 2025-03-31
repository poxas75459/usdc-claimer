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
    "5VHKbgbbr7CLiVub5MTgFyLPv6jHxwxXbgqNct6vYCmMpmxjmAz2nDNUp4jLHFsgEBv6qVrZPi3N1enAfrWRaKVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tYeRaamXY5FpWMN2ovyJ7iQhEKF8pT4dF4c1RSaFgnd7QVJtuwC1B8gFkxVaczgTXx4ttmMuYxuNfZsgN3jZkvP",
  "key1": "334SMiiP2fwCCoSdC5sLSVMkXG1rhPDATyzYYjd2xjN4MUiEeSuGAXECUcAGgt1JskKJujw2ggpbBZ9LJwvsz6L",
  "key2": "5Wh6q3hphPEnfWdKVAHba6aMD7jcNZ2iDMuuGeYkuQVTpqdxNX6zUNem3txz7Kyx85EjomxZt9Nn7i2wMcAD2hFq",
  "key3": "RrTmXBVoqS7WukfNrosmHhJFrZ4abZAssXVVuZ9m68NpwWtGeRavcstzAXsHZqmi3uJLiyD3JPcMrX2JYrWt84n",
  "key4": "cBDC7v1YfhvSJCNVkHBndurpSHXwcm5Ym4dtccNcEjdfeexnZdWtSvhjKURFi41yFMnZpNn39aHh7uPR92RFZLC",
  "key5": "2r8457wuEztDCs7MMM9UQYJJN2dEiLDQZFhw71PYBBtYxBYwfQ7QbXDVrxyzhGe6wydmCFZLWJmyiiwsPo2SLTqd",
  "key6": "37BxrGKGNngDkQ9ECwJq5KMHEf2wE9WGq5TcUCjMLHjQJsGJy9o4MNXFo3Z2PaY6M2nVk3LDjPvCe1ifYkTL4ceD",
  "key7": "3CkxbhfZAoeRfWLrZvzUHiqn9z3N5eeV6hXAfBYyYAGeAxPJumRKUpTMghTCX7patph2owwXERQaYTbQ2Hm7i9Qo",
  "key8": "5Q3vbS3PNVUFcxRTpLyAqWkRmoMK2MoQfpmF1Rjgp6EUUEmUybHX3kuoqf31kh5peee4uHJUSuTBfmC4uYUth7h1",
  "key9": "VwcDoZ7vdSeYwTM5fd3y2xxEJZVzoSPAE37HJaQza2ZTo39JZsWVVG6o1DSEyhEJKcZgqBB8iF4tzesMSS2QifW",
  "key10": "R566BsWMA9eyUopZu3yF83qJKEegzNrkZidy5Ejamq1GRCHBpZTk5hRXCxb4oPYpLEpnMQFzvKdg78sR25YF4op",
  "key11": "dQPwRrVphue56n4axAeTQPhRSBHCpNJSo9S6YLeofWETaGVYcMJ9v4cbepaMrB1SwV2j9yapB8kGTcnMG2RoJjp",
  "key12": "4bgFDTQEvtvM3Z7fDPWgpxrBzNdAV2eDXD3gErG9nc1dKZTkrtLAstVgcCczkzhZAnv3V4ENc7YfBhFRrVZTneMT",
  "key13": "628LKRETeePAfSQrSDGHLatfTMB4tAGF5aE6TWY69eqF4oY5GXE4i7hxBK62AxAKGjuNJ43TWb44zthUGurTfN6w",
  "key14": "4cnxjivZ2usTiqJ3ZmeNF7dSQA769BUDjeD7jGfWCkcnxivdpsURiwxoz6naNamSA4J7rR7woAvUpj54jc8mtfz",
  "key15": "25RP2X8rwXrZUtpWzXZGuendt3BfjHoPg31Ny2EbcrhNj2DXDsYvWDUaWzK1HVJsHmHouxCPctc6psvMBS41bGta",
  "key16": "ZLgmSHwecwr5xTKJDiUjBbCsenTYnugihyKbbrUGkqzn5xTLsBef5uSsNVU3hhyf6A3Yt9FLZ91E1hrbdRRhmUW",
  "key17": "AUKEVbbKnz8t7cndmuwvjqj2v4aUtGgfQyF9gAKrsiArjatDUxEtcnfv6U614VqAzxteg5omikgPdgiigMigw7s",
  "key18": "3j12T8mKP5GFnK6jCXtdVq8dhBUbfYyn7bvAfwy5V9LN6xpi2JxYBMCNUhhPvtYBFneCPJkPEgNPmf23Bt4jzF8a",
  "key19": "2PbSN6Q4NiUPK5G5xTaRZ2xWnQETANjciU3XJwcz8H47nPonhfT16QMdRve4hJoBZo4SHc873SijAmbwCC8XrX5h",
  "key20": "3atffrnpgUTcumvYfDjbYCrkwz1gh5wfFgRnktLgMgVhLT4h4kNm2pJsvkw9ztS1uziM5VyP9Wn5kXdqdbeXQLcM",
  "key21": "2S8Nups1tTs4MQ7uYKDbfUvh4xuV13g7y23mQJGXVDxUdKbDrj6ZCWdsJvgMYFG1msMGSKLv2wzXm77WKvbmkavs",
  "key22": "5NrPBkTjjvfSycafu2Ma9Tcqt6rgxB2QoXydFFkdvXYFakm5cxZQLoMMzuKbxyZHSz6PQLkauff3UPUZZKbJNWBS",
  "key23": "5dr9TwpS8YH8FTSWP753CZmRJ1xjUPmB1mRL39uoA2PZE6mNnU1a2uALRrZcfnpYUi3Mn4abVvdgpJvAHTzFNbiC",
  "key24": "3xZCxog2TV247XXWDAVScLVt8rVUh7soWXQtusZuqqZthe3Hjxm69YmKqU9v3siFNnZTyfCAzR8duUx3xm6ugC9a",
  "key25": "tL7YSagNfRAEtiMMTK77SYwPP5SrUimXf3qV4L2yYwGrFNvxJDE5EjPh3kwqe2fxnJqxnxKKhRUWfFHrAmybuB8",
  "key26": "wXDAtgmqfJSW5wRWfVyu7inu4bEy3XKav9biRo1gsn4SciopF128HrhuAKQf5EL8M4QtzWicgaHACZ3rptwEKyY",
  "key27": "4tX2pitBWEkiy9mBVutQUh5u6L9qqY3d8iAyWapZMBpvPpu2XqRrS4u7YqWFpw9owrsMmJ9C5kNtSNH8CZP3e5gf",
  "key28": "veQ9VLuTBccZMjmtS5A8EbySwTi4t4N535gbB7C4XCCp4oyZPY3mcdoPDmbH5dfiB8u2TAgW7MKCd9qgEEZoM7y",
  "key29": "25yBgpqGzsSK1mkVm6jj7MfHpMUQnML5t1BBS3FxVaEDgFaDt9kfkCcXognno2t1b2GJTwGa3VnByLnPvEx22BX5",
  "key30": "5DcV3zwCZcbbe9WYaWcWr6AVNL7nK68iedMida9cCGFk7f7zXVojPWZH39Sbu4dTXhdG14FVvZEUEGAWfw1pkqx7",
  "key31": "3ExBoPX8rynWXDcz86a5ybtna2Lc3Uzubi6iLv8jNybwdc5B46oPiMAQoX4UGy3QPATBqJCzfsLsbwBXjnRkPHgT",
  "key32": "55usPijwMToYZikvo32jkJmo1edCPJPxvw41aX6pfHHyh5bsgxuxGx5zV4UAVAGcrwwxrjv3Xegamvh1rvYMcNXx",
  "key33": "5fVXVpDCJXfWPEm6ExJ6SDPQLyYvd588uqgboCk7zFkTEVdAN3B9MNimc2vEqe8XeCesnmmgnFK2DrcKHLVRPWbD",
  "key34": "2PdFyS1DgiqZmpELY3FMxw5htCxsq4wkKKuDNYDnknEHjSdmabg8hJFDVAcgA9u4K9C3K6UguLGsXoh1EmW9pyys",
  "key35": "5XqxQkR3ZxnYtfpFUNAf3ePF3tPjRS9q7qT5k5hLre5Hagdkt524zWVdtEBSN4RnHuWvjmJMkCCUiJCVYn8hgdrS",
  "key36": "5RFwinzvhtWV1romt2Xy7MpvcTLBjyp8jcQwWJ7f4kjrU2NSyrhUA9Te3UMdue9qonSMPafzDyXRjDjsWA7xenCz",
  "key37": "4gXW37KrC6NKuLqvASWuaYCQKyVhXpFSX1Vr747DdsRSdPXR33nBM1UgYwmM7heiW34BYR7wmUVDz8y9dYU5cuLF",
  "key38": "5A517z4Wyb8fgRpfUTdyaDKKG29XxGcKo39xZBKWXPPkPWCceBEvQS3vuCYnNxo42MqEVmgRCPajhDSrH5Ru2M7k",
  "key39": "6692kcLpxSouS24MFDh9a1gbQqAHzH5HpPhXKGDjaCnmsTp4dNkftHgxbh82562vCWanvNVsERzFvnYcq6kTrkkr",
  "key40": "3A1mykoGMTqtyYjWbPifKvtkn5wcyoXeGXfXhDoGPmiAr6TjqqtXQjEwqtHifHhog8xwQkrETH9FaYePGjeRHhr3",
  "key41": "5UqBCaqTfzHKaurJWgw4RWw9onhTAnM6EFARiBoqMResQpVxwB4PRnXs56a7Yd4fPJExe7WLwD99ca5H8u1TVYiB",
  "key42": "5FAH5krHGRMReFFH7LvsCkrMyAokcJX2Y7zRLLmZkMN2wfiyGx3bPYC3ZZsBMViKa6r4F61Hzv7CwdzXHKBSutyU",
  "key43": "BQdfn9aX5J1UPYvxMEThb2MqPxYbjJswTUf9ejWcdmdX1eYazUrhEy77wQQMMGAVBgYxPDLKJCCmDrKzL7nJkXd",
  "key44": "k431gfrE8Mc3DMMNJjeSYRU7fv1GKqrCB5CGG3MXyMK7X2RX92GzCErfZiBNzaVw8sNR5JsHKp3VvVRVTDhbyKS",
  "key45": "2SzaubNgnhywSczQexyj8rccmdXex5vQiYMPvkfEeXvhgXRms8riLDkDBQLQTJf34Da1b254mHSyxG9qp3MGbHbp",
  "key46": "2QWEXDnNnxKx7XpNYE7fhv7MBff6MdyebYzczeKLsXpoNW3KaWXr1DcEd6GiaWsqevhDNTpWzCLGy2BkyoVvCWZR",
  "key47": "4yJbo9xuywbT5TfvqmaSjFFmna1gn1G71oFWWxpMuY9sFVQi2gbB1tPyyo8pY9gMfymTJudPSoAU7crYNLJDpjHJ",
  "key48": "4hB8CUWDuabJfAmGssqvUsV3uZZ5ncGBUiKxhxuqHrbe5ohyskLJxQjvHdLMZ8VFvSojNJA69NKPh5T42g5EJfaf"
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
