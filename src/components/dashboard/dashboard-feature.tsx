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
    "61BPDjypCdpHD1Nr1ATLAsuAMFfEozzufnWshXHN2bwkPZFcB92VGas4CZPXzfPTq8vPWyVg1PogSy1ydw1YxvBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WyByRG98PYm1JaPyg92yEtcmhm9y8sSt7sPQFncdx1iUXrPqDkVXmcXSwJsNcKQpiyRgGhNNHEcfBVsEzhty3gZ",
  "key1": "3g5t3ucuxAeCagyvNvEqHmYbLSvNjCEB91v1bMW67MbuEj1wcrx2dFvA4NMWsixZx789MGkrJgcsSFKkw7vkeJdc",
  "key2": "4Y4NU1ehc8bKa3qeC1wviDdMFeN1mzpoNHyYnqammsQa88bw1e8QxBZ8DYky745erfcusMq1tc8mbeWMsrxhsSYA",
  "key3": "6nyLZ31nEXZtgZ1kipHGt2vQQ2TDZfKKQBhYtiRm2HTToQZAjd6Ucg7ujfC9VgdMuZxz84VrgdXZqFH8AE5Kjcf",
  "key4": "3FRVoLEYLbpf1s8DMtZRV9Zasfvmeoj1tfoNZpc2MDczYhNxG4ucwpChUNdWsNhJGPieK6kLjegWYvxMxXRiVBRY",
  "key5": "54a3kji18A9E5z79vt3i2mmXiTbmjwvy3oNcGX4RAcR7mfW1wV2M9utAF7ZZu3Vhk4PrVkbXyCMnwMT4dAwzgMdJ",
  "key6": "26EDYqhpv5Q1etp6ShAGmVtQAkBr8V3VVBDUjkjQPS9qb4ric1Bs1Zmtd5VoFXAVvYs4PUBMgrK2hd5Atqb7nz97",
  "key7": "5PtPvYe7K2Y1nPDBrJcUnjRL1262pj6UJLRYzdoRUst9Wo2Zfqfoo3cUgkouB7RopPwPptebw1hMAanGxa6UTxMs",
  "key8": "3EuXqUnr3oipX3mozxXE4NbcznLYu9jJkd1r6ewGzWv6QfsipqsuNdxtUz1B1SEJ2ZkrSWZwMNR8roRzj92ArENW",
  "key9": "5eMc8Gb98koreETLn3rQmRpDB1m58qLnLVSVR4pH2fA3UEbYbC9czRQsKRdyvBJi2xWYfUDaPnNnVUhDYJfra3SV",
  "key10": "BYeVJ9cjUaANztqphPUNCNksrnmeQ1bkvqiRdbrUCPHChHu77HS66oPsDVFL1pVaHomQcpPBJGa3NxL9eZkMeTQ",
  "key11": "2e3gVpk8QLyG7dmkzSedm1YhW2E1AxWoG8y8j6YKRSTiRj3J3bTEq6MyMbAHZta6eRSqxBrpHofwPsAZjehkhbZQ",
  "key12": "2QjaHATfeGAvi5jZcgcmAtyHbFMi9vnTn5RqKLSVhyta7FNEEUkNAbG3ftrWX3KncyGV53RAf2CyiPC3vR9uRseh",
  "key13": "5hMXSPqAWz1a2Yez7b4F8RyHB5H3sBQuNvNc3kd1WVzWf51By8ct4TTa5bqWVosCpW3pLWmDMrWTJ3FtLn2QSin8",
  "key14": "4ypPRoZDvjkxSXKkGGX1mwKoMpBR7eidYDcV3euAM76YqCQXMRGnT1m7N5py9QXuAzRiN35GESpnt2TpZP5moqjb",
  "key15": "4KgJsaVumfMmvWzpvbCFw8vExSK34G8mr2S2hebokTh8WG92MzM9GSEKGeHKQrUQfJfw88RB58vVms3uA3A8F2iw",
  "key16": "53VRUw7k3HmaDedU7UVvRk8zLBQhCNKiiU1iQkLEF2CHNhp63YXRf8nQUygU9F6bi4D5QogGZpzhAC4ugmnVehVv",
  "key17": "5AJh5fKSoLmRGJq9waewZHASx1MDm637VDYze9RttHZYXc17MePXarBzUAWWwSGSDzW6CsgMCfoYvkFGvweoXsCa",
  "key18": "59iQaS3gP8wGNmMCntEM516Kdb8uw4aJ9NKJGKLbiwbhQdSYAxkR4cNW4uw48myU68QbDvqiGTKiN94mSffuZfEt",
  "key19": "5uWALZ6z4koskYDovJf4FdQXpUxamvSvqHnM5cWFobpfqjZ6UPbpP8VEGGKYgqU6iqtooKT292TGtvTTPnR6REAs",
  "key20": "441wh7umqbvzgGognyEt7BK6S5fh2dDvY7ed1NaNzaAQBLM7NMJ8ppgpxCyhaNtsVWZPCtuh9gN7axym4yUASnNE",
  "key21": "5rWrwq8ECbzLfi88XUByaTWWEjk6GFKMqRiKSep8xza4dGBaVJWEzyKroocLtT86uSh3REuqujd3R6mmX1Mf5SV3",
  "key22": "4Bd1vVAPxqqHm8yi5s797XfbPNs612CS5NNRtWz7YyC7fvtS9VkioUpyH94dX9q3ewn1aL43FK6c2PKPGu1Act3G",
  "key23": "2oYeQqbwLZWkSMcuF1xMzgiiWgQWaRwu74TVkyJMkELUL8xKHSs8UhMTQbcphDHU7g9NncCVafkNjcx1SFug722h",
  "key24": "4PntXRuTkMWQRXpRx2V77QFkP7UnRsJCLQDGQ476PgjwHkQzAVZSo6Qar5d55rPt2ZLK5uD8VhrNXFf6W6854Bsh",
  "key25": "2qiKNN6WsYUm7LvF21nVBry2TQ2pW7s6frbdXqtevQLQYsWFUi2Yn52wsZuRByQVNq8BbEfSaRYJWiG8JcDtGyu",
  "key26": "2HsboXmtEoWs6e3BvG3Ja8b2MFnjVwLy1fA3E6eiApskkRm6mY5bm8nzpKy6CwPj9XHHRBm6CMQTPAr3HS38dKLT",
  "key27": "2xfyvtYDoJTNWLcoxMQ8nr3TSnihR6YKmR5j8bACrz2Qaf5bY1yqYWXToeM6xKLAvcN9QFm7y2mDU6RHFBot8TC6"
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
