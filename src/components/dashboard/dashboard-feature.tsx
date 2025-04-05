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
    "261Ur1GVctfuCc6j2BU9bQR18fYCMfGuLvoxVobkJaU1DaXuhNh2k5HeedJM8rEHVT3XNPb7qUGia84UTZM5v2aR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u1hndHK1tZFuGwPEd4qVkbZJUGZnpmy8t6F5MXnyunPJpzJsH83gpuyCx4pBgbrFbuW7L4DHym8fdwzkJ5X9JKT",
  "key1": "3EGoGgBZzd7PbDRXNnmRyUX1UQ1jbrfeXuXhvy5rU3xJRM4eJf8ir9zdTK4V96UkgtB896kuUWGHkqjxaTfSUY4V",
  "key2": "2wTorGFkaqeYBcmeg7kHpozyG3bQgX8iJGYSSsiLDbTzEf4tM8HDcPvMcESqVjSzbAG9r7hmZnUDSgLCdbuiggpK",
  "key3": "9PHW6xBCZn9hitvvvJRhGoGuaAujwymMX8tXUGrESy4KSW38wXNKaUCMTsZN3xPRubWX895WX34Q86zL1qjbSUT",
  "key4": "3S7pR9sVz8ZPTNRZWUoum28nr4g3Q6gcLpGQBNwbDtm6Vp59yzvSgau3bbSRtQQvCgKJLhkScNbMd9zvGskudbib",
  "key5": "45rHykPKJY7ASV5QnSy3XdxjtyMVMzDK7jfZ9aycyT9rpRX3sTP7rktmT6peit6zPJP5HhmPbcYvtpkYdGXFu8W",
  "key6": "5ayTinqWQWHfK7t9XZqKvHrrykRjpR9oye4jR6acRnvXkTuZhHjZcB2DtxMvuNQmj2B1zWBoR4hCCBYU9BmP2iJv",
  "key7": "KMxAwMJRopjA8ZyJa3B31ru9R1zxJFXUZurSFEeEG8Qgyd5rcRzgyecUgAKCSoGztK8Ehn2NSZVvHztM8ohcZM5",
  "key8": "aUB3Emi6f2ZcdaV7fnHHp2uVnTPbm6cu5cDVCtVMxNMK74qfpZCYgLE6RLv7WWNaL7jw3J34SUNgcDHT9a6612a",
  "key9": "37zLBC7WQk49ftPQf9NLrsdiMdgNFk2Cz3JXrZtY6ehdU1dKj4U6VHveReZkUEqVUEdMmdaWtzaC4jT3mHUufxp3",
  "key10": "GAwE3UoA23kFohfprhKiXVzwGJCMTedRMaUgkEqstsCBqzdC8AEXpLMiaboU5vxstCd7y2wJabYDVY33Xaeseah",
  "key11": "d2pcVDX7QcCqTYXvANSMgrFYLGH3UB2qMmvRqmnTYvurQeEP4Ctvg3Z8sVvQeWFr2tWqLb6Zf7XiLhiLpnBRQ6c",
  "key12": "2H3sJjmEDjRKMzc4RLmp1hQannoBFKCFTqzS7CMx67MAGJU7XLiKUAV5VNTpxzaDW61Es8CSAXXBVq5qqYcQAxd9",
  "key13": "5jaB3jcrfkuhy6sTjmBmnVDohFm738cNQd5eBuXNQiuuVUquRNGhPMGAnntPkNouq9TbtDhyaNtooT9txfNm8gXo",
  "key14": "52274VGDqgk6nRxCxznbiPW52BXV5cAtWLuNQmwKipDpnoPcjXf45BLmvDPJ65oTw6dHJQ3tKnSSnZcrnJ8J3VcH",
  "key15": "4cmXbkb9KJRym2YT7smEHvVPNTX4N4mNCVSkuF5F9aWyz5kQad4WxHYJ9qVy2WfmqcfjfVdt3jR75ZKTy75y62zD",
  "key16": "5ZVnEyaD6NJuUGgS91bEbwrbvDNdiNVJtcKcVFphEWzMCR6QD61TsXod6verSgYhbLayfGuGTpv3KGpoxeVisDQu",
  "key17": "4oYqeyeAM8RjcbvJ7MhWs5jzJbYsW2zdiNA4RuVwGiVYBHoQXwpZgXLD7GHnMj2LN9F5viivtaBN3pcrvq8oqoUz",
  "key18": "42HbHX1h1M1BYcYMMtKvNqbZE1iRKy2QffdJThYDG7MgpSo9rEiveHP44rUuJwFxKeVq8GpgCeM24KHiidhr7RL8",
  "key19": "5aMfBPybmo9rv2VLc4ReDTQL6dHuN3zZerDxRRScUAGy7YNB1huus3eUr3sqpkfjzMTmmCNLL41FaL2Rj1jX6YLg",
  "key20": "uZRDAVbHuGckbzf546dfVKMDaoNrdx2PVPSKDukq6cXsjRcNRAeejoTdywEjXoV5HYzYf8CyB8ZDTLQpdDHr3iC",
  "key21": "2h1AawZ3J1KEFfwSWS46sqQ1nUCi6KATtfVRZT26CZjEYZXcYxrb293AYKJpd6q6sz9vA1yBZSrZGS9nCgQVAYJo",
  "key22": "2V4cfECF3H3SYpmEY5gS1UR26Z2ck3Y2XNsR6VeWLCZAZABGaDG3KtEz8AT8MQRteXyiZAw5YVHZqiDHNXMgfce4",
  "key23": "5UjQCA8hf6cYYKFnHKLCm64Qyp1EfkEyCN7uKN9KBHaD8aKxcBet2vCME8kxyw57HzhWiWfhnwicdoM1d26vAaaN",
  "key24": "3t1DDVrgXD7Q75GuqHCyezd73dJiSP8dHTu2KBGAJhLrTfxoddLKJwMKNTrfZu8b6WUTTPmAwi5xPaZiDdtg3RtB",
  "key25": "3XLSU3nQfHWTqSkRo2ARTzd6w6R8r7gv4mKW2wStuyJ1mdmRGRrCtAEbG3HEn9FUfhucGG1vx71HHPrhfdjEJZfR",
  "key26": "4jc8fxpu3MrXwouq7GnATqkdUPvWthiYdBdKBRCUXKgZTVKjxbRbASZt5JJdpf16i52qM7ox3MizumQobEKZ4hEm",
  "key27": "58LBtgtuTbZXMgMChwRoAikfJsfGPZ92pM6vPzDbQ6LLJ2mWrHxdtq4E4vZzaRwxFC3fRw6PVrFxYdfhCmXsT9Jz",
  "key28": "5cpQFVm3AsKwMWWsXQfyoWfFPiHz7HqfRjynNTbqLJLV8DExxaRhCi5QCnQFSwADUm1yXDbq15qNNm3oMLxArMVR",
  "key29": "53EUHdY9HZMQzBqifj82nLJLsoZzKQMiMb92YnawAf7W8deT1xPdwRSGhaCcQ1K47pVVxEBgSpQnJ3Mv7DR9Dgjn",
  "key30": "4oZArV8mKozCFgANYUSrpi9vruewUzRXHA1WhqS11isAyj5sXekA6KBgUT6JxVjo57K8JajtaowsTHNZFNaCjYLW",
  "key31": "EtPWKJFeCZwCXBuwHsi5HMjqGEenJ4EpvChZnSzcQuz88ZL5cS2q6WijRkNmQh4MsShsuV3fpx3yidFKaj9Kos5",
  "key32": "Vtes31rv56kiCFnkDKS86tpXwqTmDgMSokLupRMKFvbtY4UszpbiysA6xk9AWNTsiK9uHfidwPhEHNYBFmphFRY",
  "key33": "5F71jSRvJni886NKruYW3X4dWaRLHL8WfrGGU4qwJuYLvGA1DKbX6V6FgCmvFQNg5wNrrNk2ju2WEVeXp8FP2HRR",
  "key34": "5X2voe4iFqck3guVH38mfnRs5MQBdLRa2xf2z8bbJgtw5iBfm4sfz7LakLCKrGM7GCvHc1iwfZjZZ4caei4hb4Uu",
  "key35": "xvUMkEstB2SjnQKGt3VDCsVrq3633BYAw5pPzuzUyPAM1ZuubhjfRGhAnNRESpheZ5BQiCa39qDwXM7RRQRowzm",
  "key36": "2Nn6Bq1C7iSMmMQepErvXYMPYpGQt3jhscTz2JE3pbhGsEcVx2iK55hqFMpm3AioojoYJg2dnLYmz24qE9UuhuT2",
  "key37": "5k1SEhpi3g7jomCUxUXhSTKsHXNVMeW2WS9cjZSP1GuwgqW9gbuAVN3BEDgGSXVWFYmKxqgVG4nwNL6m7zfkBJzF",
  "key38": "53b8Bw7zRLMBvD4sLVTBNBJyvnq2pZLiPddam7mfpwdeBzdpvDbyUzEDbrqBX9gLCcCRVqhLzcvtj5WdEt7A1fjr",
  "key39": "aGuLqFwTJta65gpdgTRNQhJzzrVXRmiNzgbGFKTApwqm5v1rJhpH8YqVG2CuLaEsGixLzdMsvUsofwpguyvCPQR",
  "key40": "xZJiBi3kTLwfiMBCVmok2mStdXUvYy5Te3inEwvAEr1CEzUkvF2zTiMxdH94n7gW6tXpPFGUbW96bPhfRiBKdFu",
  "key41": "cdKkR2zhidVuRyfCM4Y2JeZnSm4ftsqJzXGwXWyD25Ljc1GnLMbh2KadCNQdHVqqz1dYsYEf1GT3n1oyH6T3BuW"
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
