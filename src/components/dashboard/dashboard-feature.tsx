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
    "2SHYvfLS9GiVuaDNM53Z65Ds7wfT2fGGy5fBgaJQZfsaCez8gJbcUTsTdQsiqqMqA4Qrmu7NnNZ3y43mFVqxtiTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1wo1Twdw5Fe5U36g2B1SFeG2sjH9TGKqy5diKds8iJVH2SmEDciXxQSp1gdSxZKvt7fMzGCrRuMsQwoWszQQLGg",
  "key1": "52JY8WegyrHSJSb4Y5wSLG9PengSTGpb4gHvrB7hU5PjK46PN2mpBxYYeoSawgf2mW7pSETSxUxgaiNeZrjkKTRq",
  "key2": "EFwy42hD6YT9uhSKJRwsznxgwZbgikpwV7CtYstqK7n83eiaV3ke7XFEsoDScKDhHd3o2Rfp7V93ip5invyLDFH",
  "key3": "5srv7oCMujAw1ShJyTDuQocEqLwseLiEaVy8ztwaN4yBXyuBjpCbuUjBe8NBGGd54fwCT7NUfqHJpLKA2w5dUhHZ",
  "key4": "33Cdw186Se3LM8Qt1V6med9g48JR9xxd9QJcQrEUX1YnjqXSegMP5t6ZVdgmGJRLGyrthwJok8b7oWdxmvgmJ7W8",
  "key5": "8rMhbdLHpVyCFps7Vx47xsYKq4S1MW1c1N3H6iwTBPfLhJLc4SeSakJBfkxv9dY7HGQt5vZaAv9nGa2ZZAk2mip",
  "key6": "4RVoqXCWf2mq6Aaifz3CyA5jyZWrHSB6Xu1VcmL9p1VWfD71aTkVZzdZfSof926K3c4uuesg9Nky57HPoLTNCWD3",
  "key7": "4WzuFUXzp5UtEs57NM6JTR2V6tAkTchQcgDdSGwW4qNmQ1jg4HTXCeyxxvrjPumQyMoD1XPuknJJNEf3SXAC4pMA",
  "key8": "4fB42S743xUudX9aGRRcvBJdeb5dkBuBqZCKZTBv6SEa9q2bVNqfAX9bhuKXoG7CmGftJQfaidhBRj4xVNdJmdyF",
  "key9": "2dppN156NdJaAhZcAKg5brUCiMcmrAdayYVhS9swm6s87WXKccorvZbAYSEczn8spp65xNzb3ZC2HzDQ2hriWzqS",
  "key10": "5mtB5cSFSmqwzcmYhEWpL59RvUtiRt1iwyFUYuoBpnpz9YrsdwTFg1Rb1u54cifqjLgZR4fBhDuCLbZZfiX5QKEx",
  "key11": "46z1oMUCSfuvtrPsWkAN3gXRBG4a4dg67vcxY5h7EAKPjgB8h4u7LDMwq1cb2uPkXsdbZfcxW3GKcpC8joLVsSJA",
  "key12": "3HGYsj97EKY2U1o6epPXkQoKen1P2RyXdo6rjFrZnJDrdY2GvsoYbjuAwHm23cS5j1zL8zibwR7xYLX4ijDLgkBz",
  "key13": "2syzw8Yf9xxByDzf6N5KCuNfVi78FAkvJZr6pQE34GR6mGMZxehaDzL5Gwgu2YMwLCSyqfYPZJs2FY286LEw8zEE",
  "key14": "rhHfi8P65c3gpNJWpzq79cCMsB4uqPnxRuriFyxaxK14E94uDfUDPerMAnrX7C2SG9pHWx5xmSFsD3mrFYKy3YP",
  "key15": "3p15n53NgFL9QV9Bo7hRhweSf3jF9SoeSqvDfJgCQiPbnKjYTGZhp4fdhUSn5hrchfMmuPx5YZtDLKDokqmL85rA",
  "key16": "3GGhvauGYgWLocbtcDUfqNFNFvaw3V368RGgwZQBXaJVV1bUJps8La3FMsungCTKkkQ7XiTbEJ5dMa2NtyW5H9Co",
  "key17": "4DSoqVsxpu5uXe2zjUW8N7C94pNbWJCZk3f53iXCvjRrRtnicQG748ufoDi95aVZsJZmSbdp2H5bbmWjWTrYrFge",
  "key18": "JsSy3QgpR5ntPc3wbDRjhDpfC4iWWmyEMaSJo3dYgu7esx5UXGaDuYeykHNCGPr5WKwzHqcXVNMsJ1syZ8QM1xm",
  "key19": "BVtxXwia5zFofVpgpSPPxQKqaWPBKGad5LdYKUfMeBXVcug98ZU2zZceVcm2gqtbRhks5YeGTvSRUc5z5cdT5WW",
  "key20": "3YzPqJgX9SMRSVzaWhPS99RUPUs16RQTwKLpu3yohkcaF6Bd5JJwqjDRa3moMuRhF5NSaSkBmKTYLgissVzfG8xm",
  "key21": "3UCrAvjebkKNpBuA8RpPePF8JALwcjebh13MS1RVyw8Y1UFYkTHdHKJe7Z3xLCm41eMHKccm7rRpiAZXhrYmPoDt",
  "key22": "4MQGrcS8CDFMTYeF7LcJfacr6QveyLJ6n2dPzPjgbvn5JsEphggrNfKyFXGY6rKPvMoJKxetxnq6XXVK9unA6qgX",
  "key23": "3f83vmbcF7CqMkkchpd93fpkAZdaUmEdHRVXFKkG94D4nQdGoZUjFLfJuV64HDpPr9PobJtv1bCVqNuGytrQ1jPE",
  "key24": "29orwum1DNu5U8NhtTereJH6adCHaXdaUp3n3m8FppReqercjKLPgpZqfN4pGd1jMfKGCRq9bwkPFxm5tHM5bQFz",
  "key25": "21bLFM484G1e5jwM5TqFbFBfvWztGXWRAHQp6yWnf3VDuh9DpuKbNJ4P3AGrR8X9TaTSweyFpY65j9c1nDXsKzDc",
  "key26": "8pcAMUucTBnfh3YMaTv8MLTDnbocAPZKAGieWJrPjfSfk4s9T1FLM2YhAP7j8Xzb6ZcsExFSK9HLkjhjAmTwNJU",
  "key27": "5k8iqr43uetajhAv9hiidnKnsuiGLwiNVe8jXJgnVdrj3sjXpgHRvxfHpufJB2Z8pfsFLqAPRjZRXrbxKiTnjmES",
  "key28": "5Q74pg9TWSRSGWhsijbXZxnR8TEFuTP9dwjxQPgT1pUcv4VvPFUooGYMnrnyr5gTMhdsE7pctZy2LcRWWjSC5K12",
  "key29": "E6L7nK5Ts2WWULhJgqCZWiyPe56iE7dNHUcodxLhr6s9HXr1N6Px7zxUd5SbGL88F9UZeSkkFpBxLWHQWE7h2RM",
  "key30": "5ND3ut7q37kpePuYVvfNXsawwVBKNbRESUKJc8ekDvtQTf4ejF6WsVMLLteuQTWuwteN3sgELbo1q6s6M8iL1XsN",
  "key31": "33Qs1aRBJEgfSBQC7bYZ8dMjcRaCVjjRvFKiJoPubLFUrfmJEajLb5wkK8KRLE3KdTtb9DMPt82Lvt87M3wDuYo6",
  "key32": "35DcRgTh7n2xSmBHtp4PUcmSRhgmWi346eTeRaK6XK6P7rRfeBxZjMAEq94wCG57VmisK56RHF8HiXES6dsmoYzk",
  "key33": "5XNgk5T4HqS8Z5BCBCmdPy4Qzwh81JauTP97Di2TtedfjW1d9uQ2FKtdT1rjiPS7K7JKF1TY7mZDyKKKuZL1HNUp"
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
