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
    "255ZYWFfzYAC3NhHeWgptrPFc6TUci4SFxzN2CCcpZaCsaxLd44aY6ZTtQcmWZcUa3yUwysDQXKBvUyaZJJptJTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZJXrAJ5MRn4SKmMr7v9giMLzgb6kUfiZ6a9mjxnpYh41BpqYAg2ekmnubQ36J5ieMHmXGviTtL5mmfqqA4vhUqS",
  "key1": "3mAL5ZGoh4ZJCqfceAuM9DAQikWwC5FsCALxke1Z2hpdGtXHSrTGBuWHNyKENRgGLTvdPENpHDLdbZ6HEmjQzMSu",
  "key2": "3ZWwSGDVeLnbXpaLPf4LJaLWoUvPydDXJFD3Kr1im3K3KasGvVAzXWSVQ288tniY24cjzF5JtcLsPWTm3W5Md86z",
  "key3": "2pWRYa4a4NznnCqSXx8cNACM24jJNYvF6ZJqdnMmRD6QzCRxKik8deNMsNGHNEA5DnNQsTWcvaEVoExNbCJUu95S",
  "key4": "3d3Udf8cdqC2uDM4Dp59WjAUukKHKrKYKGSWvDHxV1TuYzycXQSDU3wEatQGMJGz22rRYdQuNKbVeWtsnCssf7QF",
  "key5": "5KgXn3ZwLMpVBdrMPMfQwnURYZekoVoNCMAZxdStMUMZwUf6bVHoz6xFDrN8sjnhyywrpik44MnwBJqSrB4HADuw",
  "key6": "25oESYXRzbR2BDYcALsawqvTd9v4qnLARRKHrTfWDTAcjAxT3o75VDtxW9zsxw91LWSf4u5iNkPVoLzYSyAqzq8E",
  "key7": "5324LDtfCvzwcTkXLvPWWLW2b9p5MQpTxVRJC3DR6C2DDk4rQkVdG9LJhMaT4b3wKj71LeiwdxGXJJTfULPorZrA",
  "key8": "3XC8vwsk6Fm9p5mMvuYMZ1Gwh8QnK4ihLFX7KBmBVNTrgmtPWPJpFQNiLYZmFwBwZ2jFppieS23yNpCnTM8jX5dF",
  "key9": "2REP1ccsvSzdZL2FFDBHFUrAgmRLNRwXJYkFiVEXBXwMMMiLwLxZH81k4kUQLVaYTiyphDMSpCYJwFQ3G1mc7Q6n",
  "key10": "3Eh1zhPT7a9PuWR5WQDkJptN1GwPRN5MZjnaD4wRf4eFmneBdzYb1JLHmSJ3Z7J3EgGPsXfnza1dVtGVRjSR18k3",
  "key11": "2DfQeMY5oS3pbJUYHQXT3cAK7UtgFudiS3pKKa6XrDYH6EA1wMbrpYxWTg6yT8fAZauTbsH27a7JkyGxLAgE98RH",
  "key12": "4RLz31X6Yuv4sWpxNuckT2S5NQfSus5f3wSwMJ8VRkqftQJ63Tj1wNN6nTQaJyTUwakZ6wGbP9Q63Hs87xQqNg3g",
  "key13": "2P9r4dvC7m4rC3RWA79SQe4tJ1bwGKYsuspHHkuzutFQ2cmD3MaaCp2Nb1aedfpw6c3hdD1z5oR12HkwM7GUcH4E",
  "key14": "q3bSXzJ7MFJ82Sb1sbeCkQGYK8e4Ds4aUACNw8fTh3zHfMizJNEoNqzQgNANCexMwLatdLCEDdkEbZNGDpxySgA",
  "key15": "3Xkffv3nCXKe9dnsFMVrFywRwC9ghkABtuZmCxoj4mGVFGTJFvBZPVLBUJmD8w9ftpcSGK7o8JagQVkRuwCGL2Yc",
  "key16": "5r2Yac1UCwGKA4U7WAV4m7dWjqNnJbPHF38sudP2nrtxaLpoKyuhrYNPGVnr1Doz4jzngTrzYvqzxFQ69MyzKmqg",
  "key17": "65v3rio6eUVom3Zgv6CW2tWD7LFQDCxZKkDGhnFFqiFKGqv3bGBCt3pid9pqcK9mfobtjE6NcxG3RekaKHFWLvZw",
  "key18": "2Dots2AWA9Z95nZETvG4KodQH7kY7SwkkLyJPsnEThyAhBoEXFFDJgBugEsMJhTsfW8s3CAQfjbMoNdxVF3RjfBD",
  "key19": "39VtBkAGnLuDkM48g1vSDLD6bPyvmPpB5iZ3okjrcgj7dNN8yKMM9kEvbmodUMeCV5dYesLqFpxSmWmFWaAWfCCh",
  "key20": "2noJmSSr6MAMkmS15F8bBqokNKDMZCfMxYcgvK44SHTPNQbuKNbetxo28FzaCW9d9PyAHPzpE4byG2NYTX3XuJv9",
  "key21": "4QHsNRU5UPjhp6heA6fxmnRwGFWZR5JTpXkqfbmKDXzbhiUUdsuoipzYPKduJW1aDUAwGY5jRUfxKkUxvCrG6MR6",
  "key22": "4ewk7WgYr6UH8tPPtk9sKDdHNC2ZASWKtZURinRCtLaKUR7g7o3K52LrvLXxtkbVVaus2ocE2CDBWSNpp1jme4nY",
  "key23": "5MwM96cTHe2datr6b4yrCqejYnMosqg3FJQDg9djCuCF79dY8BFFZARAHd9Lp91PSpxiGKSXmYusGmTNMjBTDNwe",
  "key24": "4kgUTamq9y72spHdVbNsfoMX3LwhCB1dL4fhCjUsf22xoLdnwwKrYWT6vTDRQbNeBSXufuwDMUQp31GMDu3RUzea",
  "key25": "2NtAM5kk5V7P1LGiUZJm1WcjT8rYhSDqrPARNEc5mZqtaW61uPdS9CVwaTK2rFDeMrQ2jDCLDHfcXyZj1VGeFmhy",
  "key26": "3QqWQLY9BGs98RNNtHTE7F7zSpy4cFiHfuSCcEXb4EaAnWqBe5jGLXnb76CbMFAjG6cSV26NH2MSKTCDYJ1CSucK",
  "key27": "4kJPf5xrghYZGZyWk7YhJhvSqDzDjKwcqvG1iXTTh2Bt5QUrv4p6eL8e2kftAAv3ccmeEF9saTapveqKb58ZUvFj",
  "key28": "3fhpz4ZUtgY3PrhV1sqoKHW71jat4fEfXczzFNnKjXkHv782dfAK11BjXRa5XPWz1NsugPavgxdWxmA2Zk44nW3t",
  "key29": "ZVJTYbNhL8BLXvs22FSB8Nu1rcjVnWjHhSsoXEqHD9rMPxey2Xkp6AX8U728vUSwPxyGETY1d9uRfeCsWw29Sij",
  "key30": "2iPkHAmkEFhz83Zo9pNJvzMJ3pJMXwn8bkYGkLVzeNdPmxBuMTroH8jY7BxFqN3odVEquqC8V4amEmbCN5CdiCcK",
  "key31": "4eRFQj5Xi9SjzaX5UkM1c1VAbQaeJ93fMknfJd5MYt1N4z7HWdNVjpzEjbcoDytavXBh1Xxhj3fF1D8t7yHYjEJH",
  "key32": "51x2E4Q1hEcmXjmCdVZefJjb8DAmMQUkhawv9PgJapRBcnbYHhonJ8GroJrkzb6F2YFJjjaG2sYo5zHTE9fzuNju",
  "key33": "vhWABovqdN7KsbZXA7hmSqQwZzL6GdtSfmEckK1V6CbyzztfAL3mdC3tnJyzYk37zwrcjBvgw3sxWkoeyYeGAMQ",
  "key34": "3cDkMPgfgFAXozVzrnwVrp2dQrWTnCXswefapYcmuSHTCEHXa9keoQAy9vVwqXEpmRCwSJ8utQGje5xF7dgdCS6z",
  "key35": "4hpCzp8P3VojyFcpDZM7X326GsNZGc4GjArbCwhUrq3ku3S72En2cXcVmiXQxycWK4efgtfm8anhnHK7UdhoHPrQ",
  "key36": "23zbM6QG5TY3kwrutH6gmpsJphoJNeeUrpm1HPUghPWFwUyCYjPvXAvE1HnKBZNKutZmFqqBHMqFPqXuHtE4PZ7t",
  "key37": "48JMvTkVDx5zaU3XWMKgaGU9mLDph1Qb1k5hrMDSuRsHVuXwVSdMGWyZp2JEJ5tSqoG1vbsM41c4bQjk1gGrnd7X",
  "key38": "33bWGv5DnwikBHHXgD2bz7DGgjYVafkbptLHCP1rRRnruhPvTwgt4a4HRcHsuEL1TMteFUmfKsfuCmGnBtuu81Bc",
  "key39": "nFKGM4AxN5szTruRFkQN9RXuE1tkeyvcaLasVvQ8SfBWivjBq8yaEoUmpQ1rS7vysoTtd8Y7MQKYNyXf2yXQFay",
  "key40": "3beNWbC2i5eA8tAXojpEHYgNkknWAVP8uVUD4PhBZju1VbU7E5BEvpXF6oLSQxg7JEjHcui4Z9vDCM1Abkxmu5iU",
  "key41": "5ccRdGiUm98bNJey25u5L822qv7gvVG24a6rh6vXb1HK4zk871Ue7FNoZFDnyokvLFG5g5Q1JvsKBNqctMFhmaPm",
  "key42": "5Ux7D1yetYKVxNVj2DPjBnUHukLo746kSVcyK1YnQm9vewPhVTTnpXiydQforMyt3Fs6LBGxaWt2nQGrZ2JksPhe",
  "key43": "3Mb8MjdHUDsqdsreUVc1AujM6fPhGtkZCxwZpAk5Mew2q2c22Hwk4Nr3tEKdjacSVCt9RvU8QmzfiiSczDfAbzxu",
  "key44": "3kpg5veQJgXEo3L9ifZbVgrtBJNj8v7c7yTBwz6Y7xuZtrWgvYtfGsh3LKoFqCV56iJHoWPi3NgS2t4iVYUmJKz",
  "key45": "5yuooSxKHHxwVBBCK58oLdnBBe7iTDdi3nBzniNXZrR5s9jjhtrcYdkpbaifWZi6FUiqG1kSkxSFBrwKcv6iHRGa",
  "key46": "Qc3EtdFwbdrwaekY1Ym5bzBSNYMnF1WTuj3fYJsNDjNpTdfcqoHmpNCp5AY7gdVkqX1HuSAQoabsznkdXrMuJLy"
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
