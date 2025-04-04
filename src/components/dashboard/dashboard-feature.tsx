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
    "4SSZ4TfvSR47d7qNPB5J8ty3HFYJUWB449XkLEUmykKGdvM4W7H5f6f779vRq5VERHBad6MLM2hqyMVDfEWqQaok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mirHiS4RNbWVV3Dcs3NPDb9qsTNaR4LqoQr7ykyYnTBjsCwMMdTnjh9rD2AU3ubezz4UeTHXuN6hXRi4HSiA8NU",
  "key1": "2QSRpEfpnPeAHiyL6oxf4Yeg4EgG2xYqz9msERaNPqTS3JLHwrNrkNoDk2Qodw764fYwmbUKEqurbyrmAL6VazTH",
  "key2": "4QBxW36mQi3o9HZPbJx9unbWtAtMtNvCbAPGUTE7wDqCp4cheKzAVX1ZVKQ4akX4NmkmbTdYz3XV4bx3ymM1QqHU",
  "key3": "55Wj96zRYZqM1cK7Ak4955mJyH469CbjL5ueeqArSwsD88YzkSXRLPJMbMLr9qkonvN3fymBMshLwHmNM6FVknX1",
  "key4": "45NcK1bNPGTUkxTSaNEW3fZQFuUUQ3sGuSggVZ9ePrcwsSGJmYj87Y4EsqsLwWxoWYVuJPo1ZtGn5h2BHyRx2f67",
  "key5": "4cT1pa7Nx8CWZiQeoszjDfYLDvZe7hzgUc8hyVLQvAEpqo7YGxLgrx2DjBLRdSWrcJocaVaRi1LADsEdSQATnqmD",
  "key6": "3EEwKFD2gC2SxBhb1EvQWSqDwst9hzEiaWMqrTMoynM1etLfmpTtzoMZwGoL9A8W8o3UFJPVRcTq6NCfEPnZd2s4",
  "key7": "25rPpNPRzAKpKDcBUjorcqYAk5qKKsfHaZecmAzoZMk6zUjkpNrqSr1AmjBU6pNTdQywvu5iDLiRLNjAfzeQ75SJ",
  "key8": "4PNthxi17ziDqLNNt6u8vVo7cU1ayAXzFwwLmVvSBFmAVZPYPCm5Da3s5hCUrWvZrbKkXYr5us1PuDP68AsRdKAm",
  "key9": "4YnWCSPNnoXwnEiTME1UdEARVLpDjiLxfXyRZMAJUAFvhpcCRounpNvLMYGw5YM6yuGHi7gAmMAJHKFCA82uSfA1",
  "key10": "5Vi2G4vpjb9qwE4UWecxFex7XBZ37hkwV3SpuQvBhgnWFHWzg5yaacNbhqjcExLMo8wbvndNLBfe8cyBs6H65XFC",
  "key11": "5pgsVU4AGiW1oQwukFaBdfVvkVUeJ7akUMJoh7fvYrW4mG5tvtKyvcSBdSQ6ZtpgE16ULRkptXvC92snwSHaL9ub",
  "key12": "2iVUYGNHYu1RqEew6U5g6uTNxE3GUuNjrZNdSver7hBcQWcKDY9tyHdzL6UTe1gEtQwrzizBsvHbW62mPVob3cre",
  "key13": "4PkM59P6dzfrx7rvNdHWmuLXh9R8RayU7J4Bo1jeW7ha7QpCVEUhyJ2t5GTzPeFxu69yEeC2fzu68PPJVjh7YYXC",
  "key14": "4nmfE6Knmoen6LxJ5Z2n1KcBZHyGPasrgm1QLWAF8r5FKu1WaF9qoxocUZV6qYcaM64LfA3P1dUGnhM7WhFbzGv8",
  "key15": "2hpRzLxKCDY8TgWdtCHKgRu3nbdRQvbDXCUyAvdfomGZhJC6fB8StPeh6W4tDMF3He2p2RvanZeXJZEyPReFWGqd",
  "key16": "5eLZKiRLSC6cTqMWpx5skSnNi9JAw7s5UV2YTXCynktWamvQbdQb5BsqVzQadDCUopi9vwAe4QwEsAmrf7VPZ57U",
  "key17": "nF2CtBwdkZDxLSavJLWtJAqxvCvjo34XqNhNc7JdMp8GanPXmcscu5kVcnxUZz431gkd93VyYV1P1xZePYtiW2n",
  "key18": "4oVSy8RWWgHN4UXt3dHcnoZC8gaH9JrnVrvPhUAaoy8UiTQupBqhpQuxwsyWj2c5SeXSkXkSWyk5yXYWVv7xyNxw",
  "key19": "3VQaDLgpMEAcY32tfYAiVshDE6g6U8pLtJRVrsrF11D34oKymnyNsPgELiFExYWk9sA9UgRxxUBBcEtPDVos3sBZ",
  "key20": "2s6w791QPzs5VYY6qQC2tzSQDFjkpC6QHHvmnCwxncW5gPJthY82LYSgFijXXrHtvxxupody2j5cSQ8zAgArhdai",
  "key21": "5EDsLWmHFgHPccy321FB4yAF63BN9wEK4gM2ytswKjJNPkk6S9qYZGUFMTZnanPVFYfdC6HBNDNBDnrYgJxwY2xC",
  "key22": "fFVuTgHXwdjsE3Lcirh2VoAozbyh9iybP6af9TeuB9CRGHSnkMuSadAexP2dE8voThuDr61Cj822kdrF1pE3NwN",
  "key23": "5efK9GkC2gKSWRnx5u7XdF3kqsYBVQq3BRYjULd1HQjwMtNEWuu377KPp54WNC25tCL4QpfS8iH7NYYyLD4v6frS",
  "key24": "5thTPSjQRGzejS8rtNstMDKdLhn3RAgzvQx47hXdK4XRGcfVdoKU4imMaJxv6GGHGshs9ARvyPiNAFKkCPYAAmLX",
  "key25": "2XCnmh43XfWZitvvPmihSrqYp3T7nQNBAEtN34zPfZmsYnkgQQwvgvdygq7EumdBW4aECVLAugxD2PSNxyUrXSJZ",
  "key26": "3NAXJe2bCesU943LjGWHaNvHkALzepxNuUWz9dutJ9hykSRuCTef5BzDfHpFfbEwipG5BZvTGADdBitxr4pgDPMz",
  "key27": "2T96abd3hZKdXk3BfcwsiMdqJ7F3o5Z8wi5ChacHg98EVx72NMn2ma2CuSWPocAZWwZJp7M5rzpKykKZ9GYc1mfA",
  "key28": "2k9dWxTQdCdhwJwgiaxSfWbhgh7RpBoqhKKSDuXfnYWUNMRjvKLMnkPHUaAWSyffEexoAh5E4KQePH9JEitfQBe8",
  "key29": "4uPNA7CZCefK8JrETN2b3pDV1JFE4Nw4pigPmn1wz5d9TQfRs3DVvsnJoTkPP6EvkKHESpD9dw1dDnWv9g3ByZen",
  "key30": "4pttQ3R5vds32AscmEGEq5sGT5zvKKEUvPohDzetYEwdVokbctrmsBFtV9dHTRLLegf7BVApRtEKiU3nGmxBb7Du",
  "key31": "63BP1uwhnuQuoWL41kyNLxKbn3XFps27mGyVkVrQhTDtWuRgsQwYq4a9okYU1UqbAjXKQG7gWaomdrY4cf7gQo2D",
  "key32": "2iib17o4FowhPpKRCG1R16DVKhQc4mXZ4L6Lcg2CdkhbhAZqjiJ91Bhk2oMhq3UpY3eZQFzeyzJ8CVh7GmA9Cf6j",
  "key33": "4hK9CmV87exArUnNpUCUz5fAnYCaSCnsFNb55xo4igAmTJ1KbiPbnoUzfTm6XuTsbQE8s4Wn28NRP9PELDhKUi9z",
  "key34": "3ZJocfqjUUmLxZ6xjNRhggXpE6QS4chTVDyxrgp9SvSSGrC6KFoKkMJxhdhRzYKgnz6uvrh9HSsLzWajm1ESqz1B"
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
