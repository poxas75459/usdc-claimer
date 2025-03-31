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
    "37d97YiNLjvNQdmNVrhS7cx5Z38PSWwaxEwpbZc7yKivn2fi74yu7Z9SV51vLPkrGCfugYJjj2ftTNBotC4a94Sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SdwK18YE1Xoc3MUKSDYo2tW5UJML7mCVMDFVwb5TNTSRKbV1r6GvxF982wp3Qvb1MVLDXG291CLYWaghXX1iuvw",
  "key1": "53HcKX6NxG5eYQKHqyiAYUfSS1DghePH6Mh7R2xkmRXa8aTJqSTXVvH3EKA1PripPntZv8pbFzyCARXuci8dkGe7",
  "key2": "5JL9M4rKBAVbe18S3vEzBYibPDJjhBQRB1J4kf5FvjiVDnmfvtaeGz6kYid5vGjCv6PVMwE5JBdxnoePhmHxmivC",
  "key3": "53aXSAax9Loaa8pLr8B1DmQmrURmJ5XDRNug8d1kJewtYTnpHc9mmwUY9JJAxxhK4AuPZdRVfVZxsoKx5dn2MBVB",
  "key4": "P44vMmALsdHZXJ3ox5grCmFc8BK8jocuF4sFmc255yVcKKF7dXADd4kfNDQM4NfC4t7D8YYigPEWk6fjvcsPQjp",
  "key5": "2JHo7xbE9Rk2Z2mzLeqcuhnhcDg9wKSdX6bUfp5yRhjsLtJzf1LydTEF2wBd6jggNkTfqXEv6o8aaeDhsrsnE2M3",
  "key6": "4KJ2ySrftbSM6NfVNP7mjQgQiDUiGFvZFqQXyCUsFqUoxgXMZxygnfm8BPxpGNCc3Aq1VLNm3jyy9tmQ7sR2Q1T5",
  "key7": "5T1W1ERSY5KEkUJQwFXpaARM15JpSYT3aVmyXiYLtMZKYPjWTnmK37ihVdubZPH3Q16hnUPvqQ2Q9BnpeK8tsFMp",
  "key8": "4zE6KWFCYsioZspt2PAWg63cVrzuNh7QzkigRL1Hm6cK8x5CuXSi4WqPtgfa9thisrNoktZNBDrhDW64XULG9u53",
  "key9": "5ahE1ZcbGwy9R1dnGHpEkcFkFMx3EYgszYnSft42ZUgjT1Y174E47WR3dUuL1kJvHz2SXsMsbBFkLwA5y94UeUtf",
  "key10": "63ZBHAsSfjvn3YkNHpDGtatvLxcALfJUaR6v5RJAeBGAr2CiQjHN3hzxT3bsfFpup3oZFs2LdWy6TtyCXVK6qGiv",
  "key11": "55oL5zMAErfdkWaP2SvXHn29ocLhdxPqGcuPX1iHR2UMpia8RNLgdsuh2CdC9FkmnsYJX27fEtYHnkFeLMriwkEv",
  "key12": "FdwEyDqVPstsd2JAAqTM1gr7Xe2rNi8AFu8WYctf7XZrQ1kNZiDQvu7vvXZjaShEoRF5YMpFAnpoqjQATh1uj6F",
  "key13": "5eQ5NV1ubBmZSa2X3znhvVbG33h5mvupDMVSnGd1NsbQRcytGcXPDsCYK6vPvv1q3mYHjbRZX1LAJTwh34vxcLze",
  "key14": "szp96Lt2vYpBSaXEh2BLE9xAEnatUSfyCNddwGib3RQDthF1tim4C4jvgWge3UpV7NYZgtWxtpX5n2TsceGPE8X",
  "key15": "2Ae6TtsinnsTJC5ArGr6pRvea8LTn9LDtuavRbrC7jVrsF5P2MPHNJhyfEaYsStHjGMTHRoguEwwqiq7p4JwYGPo",
  "key16": "4B6zHVG1zZeEeYnWFWWL8zaMznQXMPxCEEqfSRUR64xqzCnS3MzM64BCJiN2f46fpjK47EWeaeGRrcR3SXTE96RL",
  "key17": "4AReG8EQvj9Su5e1RbtfPqNYtYqPcaGeUgxpr9kZB6XZXcJAFiCfbstfqNooVgPFkvxMsJjdpEeb4TkyMgpc5iSA",
  "key18": "2iJNKGYfSjh74RW6D9cQjnZMEbLog8PTo7uGhroA7sbuLgfv63i9zoGwkRhZvdcb3eCeg4EE8r555HA62Avzu38R",
  "key19": "4qeFzMW8r2ezJ8wd2sMtgfQYeR8aWtG1nq19YUFez3a5TyQrshoQhVckEavngBu3FDwnPDHKBuV8p9hGTFcwsHXe",
  "key20": "3PxgzndMt83jB6L32E2BBAhy4Ro3oSTe7mRSyipUGN5VaTi2qFdqVnxJkU9GrhePDh6Z2E34Ayhq1tqZmDY2cyRq",
  "key21": "3zQiMQsvqKoqcF4oCtvPSbnBRLa9eK5EnEJDS8kQLfvyhMJfuYRJVZUcCWsQqDeRwV9cBkhJ3kRsa4iGDhUqaW7z",
  "key22": "3tdpMbtb2Wsyvk5hp3Gqcje9U1aMhoDPRyVr8H5EQKB71Mrhh5YxMzQp9mokwYPr3W1eK1eMtSUFC5ZTfL9RJBTS",
  "key23": "g41vjGYGSVr8jH4REptxEJrCp1GmrHR6cmRc2GqGtGnp7sooDkmpfVKCfTbpRFL4sXJn9oGM5SN2MrAsQ6foVKj",
  "key24": "42vzA8DM6tk4tZwd7a1DZ7YaAWU8qQzFq8RBzfyQFCWy6gfYeaPuaiDytjL4NaQ4yaCpCooVes2Qqs9RbcpUcBzB",
  "key25": "46GrAHwazPAid9LJohmMfuUZi8rzAcRXvCSVjqe49Sp8LA6KbG3NAi4THBiFWwvEVB1ERJsMYoTfGinEXpi3wQVP",
  "key26": "41BWSNae7h2268rFEu68p4qEwsY3Bv67wEyXv8FfNWLCuhaLxbyET1pxrdzf3z3tsE2gnRpds8ZSXALFbNtZLfPB",
  "key27": "tk7B9gggYyjvSk53GQapAGkBCuE8aip3ZpZAT3UkjZ9sZsz5Gdp36b8tEX9b18jL6dc1skh2YGDKfjQNabxUkmb",
  "key28": "37Q8ipBgTVpBUSSqgXrDKXXmCZvx9hKPpAe47h1s9T8AG94qnuFhZHoxgkPRiDPEnrV18XgMDHPwSKAZJy3H6PHv",
  "key29": "5RLT9Q2iWFvfWACoh7o5ow8tbEAt1GxWUNKYNnNj99494wv2JZ822C5rWRvECwtfpL66khiTV8JSCYBzwKu386iV",
  "key30": "2qhQMGWgc5pevD6QwDjtCEgyRVSvgaYT54BHi7KhRkTy6RVk69B8K2P3mgK1Kr2ZB6n3wfSqc11Zd2vapRwaZxkr",
  "key31": "3ETqaCDF31dUXZbjcHLqkxZ8c5gDF7GdNySzGu11XMVQVjnLR5Uad9DG7DG2n7uYQ4EiiJ3JfrE2ZTn81sEwxCBk",
  "key32": "gMaV4uRSo5FB8AcN9zLLB7JzNjXxmaGdiusoVRnnmtaFnPjxVCCHDpDbhHGe96zc8xYpDizN2kCeGS56usmp1mM",
  "key33": "5sG2Jf3N3qTyeby1WBmRvXfLS7aoVQRRan972HnrbGyJe5gJkojUGiXdNj3H8hMCUJDBxMYwzh2ByiN1aq7nt4dA",
  "key34": "24K1H7h8TQnkitaF6ii5YPteLDQPYD374ySvYuk3EJneeS4GmJLrpkY5NczDQ3FWZF5agmiua3SssihUYBY4Thom",
  "key35": "5aYmpgr5zrDJjHgNrkkU4fH7Gb29MqNWG1GpMyRgU8QBRSkXC8T5P22gv8TPLPRWCqE5NCiSyDw9hroVDp8ng1R9",
  "key36": "4n6LTN2hsq2cjrHGhoKWgU6nbgrVDNrkzTJ24LRqxvZYMspqYj9gdmQmMBQtgzjQvbUCebfYv9N7qzJC5xpwhy55"
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
