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
    "LjiLGYgbhzgvVsZrx4bZjU83eQTaUEtJsNbaB1nRdb9QZdkyZ3uaaraF6nEWmPeX1fkWB9uoBmVL1BfTT7Q4djq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUjPRSeo8jaxirRhSgjoAnrg5YVYeeJrohJqgUAcnopvPwYWsbdbSCUYCNAnsmEkE2gYVGM8C1N1FTuZjmAj2Yd",
  "key1": "59ffrUan6F7N5Samz1X73eWGYbFugfBKNu88vNWAechn3M3WnUUT4XDvdDymu1ekfeyC45h1rsP2esGEsmMnJVNy",
  "key2": "2qbgGgv9pHQ2fGWiQUNxGSznoA2WRL5ThBnzkpuKDGQUGs423jWoDUAfDviNSHYn3oZkPCL64A87MoSK5nXU4mDm",
  "key3": "M8rDemuW5ixBUv2zBoQYpH8hEj6P2wqzDE2G9FGxU2CfP51fTKEpmUVycVbuuNrARDiDBctiHxAE6WjjB4V6mBX",
  "key4": "2vtfTLfNDv53Ur8XiJdkijmyeMR5Et5RDUX7T159m39bayZtma3PniHNtegs2ARjAgT8eQwDsy76HYkGruDt2XkA",
  "key5": "2zjSTC15g9G6T79NEoD1Yp61UzngpTFKrh1ZwNZMLxupQDRai6hwJXw2Ugoqmrdnq1C4eVu2bnNfwQxwhrKx9Vsp",
  "key6": "48JyZ4v9V6LipYDUZ7NRnndUYZC8y2UKGh6N59edGypDpzjN9EvGWH1MBKYag6wRnZU1hRamzJwEFhiqoDWq7rQG",
  "key7": "3WrjVdHqxVaVpPmmKaAMNpteKb1WzzJBrQbngRZm4FkAKfARMK8exejcjLtQrSzRL6yvtF7Q4MievmED47S82MpB",
  "key8": "27LWe7nvvvSVbwDhhFQZjBHngdmzzdm89jpb2EUjNfA1JbAbnAw4TWYWZCg5rxxW6yA9WWhNDQy4uW2FSjzEdJ6i",
  "key9": "4NtsegM9wcG2nLjAyEe8kk2xyrkwLHZiRLVdN6sDbFUFg9AiQgxaME83BCpuEbNgSvHwfncH5qu69snZqsiQ1SVG",
  "key10": "KqP3yFBeJ1iNjFB9gc2NgyPPzw6ezAnXLh5wi5WBfdXLCKxcBM6XsXhr82SLjGNfGhndUXx6PpPCNJpa3giCFZ8",
  "key11": "3Niokb6WT4o5ca1phNy9pKxYSDxqVu6N47Wvk84zx94M9pSVoP6sh76yBpy4f9EbQpn9LkiE1ucJXRsQ1pbxjUAy",
  "key12": "32BQTz8z7jPVu4B7rnhYrENGiYQTzBLiXwBxKrWChwrksUrGG51qgev3tGvUeZqi2hivrwWjZBMG1aLnBL3dm3nh",
  "key13": "2bVbdsZKLTijYMsN8C69YHQrk61AEofT4baLAt6WDAXvgDAbA46L2z2qUm59wEurAsfPdQyR3SbpbkPWdbcmGSty",
  "key14": "orpWdR1PRkkxxeyJEogNM8FhdVm9j11n7D4Z8eoHTtbeFeBFTRvaZ6hePvcMw1zQSp1UZiT8mZAytN8EgQ3NVVt",
  "key15": "4yoM67Xhjkvy1pxfX9XtzvtkmWqupDnmSBxr5RprvPJPSjmHrZiQZ4xeJdvZRefapnEDWk1mfr2xsAt6K8HQwbDo",
  "key16": "ridNz7cjT4A2qWkLKetYeMjgFzLuZWeEYGTA2UXnLWyEeQTLFgsJBynDKDs89LDHB2Pii8Ugkj38RKLnhdBXp2X",
  "key17": "L1vNSkWYaVTM2wGZmVqxBcrH9oPgzxjx8yMC9oDvBjEeAUydb3DxjSXrhFkn3NUmyXddhLXRs9bpyb1H5bgAAef",
  "key18": "3CT4NsU98zzrkgBKmp5pJwCBkugLrHy1tQn7zMUC13A5sfdoZ3Mr1Zw9bpEJdHTiu8QisFyK7XUQG4FGxXRPjLDC",
  "key19": "357BEJL9eGUeCS4fcJn6DBefQUVdMeG4tF64bmNVxBZhrs2J9y4xNkDihRPKEhgfezMdRapkLhfNtZLdQczW4pSK",
  "key20": "5EBdD2fbFJYzQeJi6iKhkoTtjY11KTPctEUPfNrZZfZCXnJdjKbVnLYfuYFunTdAtLZY1XLVfYSk2ftbpYUwUyww",
  "key21": "Ux3CR4C2GKy7MRpwgxRr25M8GoN8bnjfEPDHq18JDKxXx6SAWJ6a87BgDUsiqCC7Q2P8AhoRY4W4B4pPfK9hDgX",
  "key22": "5aVZmehNYVSg4MWTHeqMonfARB4r8ecXBgaEXRnt8gNaG3QzUBJ6JhPRPqNY4W4VZEw7bEFHPF9e2mGHWyM82ihQ",
  "key23": "4Hvi617XbqL9uVVdL1sjzEkcPdabr7gcwENwdC2155fLxq91JF27uF4RazS2WB9AHgC6xfSrrWX6uewakstbgpD5",
  "key24": "5uZJwQ897Qw8Q24gHvp7qAVwtkWxiLKphVARFiRwwuVTnSCqSFuQY5tn8aaERFpwhwbwsLWELpf4QpAKt9sohjha",
  "key25": "2uSrz5iGvwE6erWgFT4S5hYvpf4SwNh1dnLQtPMsmYsAVpcBDTBxaFFRqbmeiSk33akRAZBiM6vawatsVErmbWdd",
  "key26": "3uvL8uPdap8GbjHUmHyYJvhvztnp4PxqtzFpCSTy7tphuxNiPqYGyxGLWr6MBmATiNoN1DKuukUP84JSSixcwXq6",
  "key27": "43ZHFPGLtHR2JiGTESdaeqb9iW6THrKvAKJSGmKzAwkeJDk8Wdoc1eUFh3EqUAj1FU8MEvNrsy99rrmgNaUyWrni",
  "key28": "558w4frqJpPHFt3hQQdtb8ACBbo61svybEoteVbkyrmRLL9CBbtAm1vs2PSz1tDXb4PieuiSQTfZhe2U1T6RtCvb",
  "key29": "5b912PdKf7mTaEJwi4DjC4G81rKjhC6ZupBCn1RSNS8F7Y5jzy4KurEUZig2NQdPyCA8s4SZ7PnHmT8mU9tnwZYM",
  "key30": "KBjw8agwTehwVSn4Zch13UAjjapAu7KmnJnBZMhDntk237RnvQkBuagrq8YwHiZir3YZQprGXuiejik5ckSzDpR",
  "key31": "2fGNZPczVHbDYCrRn8mtpF7PjKMtoTb6pXCsHGdveDwdDC5ZR2J6m5qDkrTrVg8N1fbK7tcLece1pqhhkWzn1PPp",
  "key32": "2oUi8oxNSWKNBMLbGUx1KvpJQ46Y4k8W6t342Go9Hu4mX7PY8rTxCPbJmryk97AZe9TWc968feiEEp7B4zevWuuw",
  "key33": "2aUjTuZFE4j4QyUG9sJet1dMSb7wN7SxtoXDLmtz5mhiY7uuxCBNfEwZs64xJtMwvTb6ejENXBBxuvV9SiK1V7f9",
  "key34": "4vUYN1eoGoUtBYG2fcqESoS7n5FbZypU86Tccc4cTWGX2GhGfw4477xGMf7eixxfwmAvo1TeW6UcqtCJy9kUH1RZ",
  "key35": "3hZUnTEgHuNrDsUjFfYWuSNkQDzfckoMKG77hoFXBhUk4ZZmiMHRwTHEVnGaBkSpD6gPSXBNeVhaeissuTJDy6DG",
  "key36": "3TEFmYNYms8GELgnSExnEm6HTKstk8mgmTbRNMQxS1pHR5StAhEfksNQiR7WWpfg12x2p5zyXwkKKGc1qX55KA3K",
  "key37": "8eWFuC1zTGNtCkQ3Y46VQfZUB5Qa9z2zMGTCuN6kS1gSqeA5HKeUSexRnC95jTBvu8pMs9x5hoQqtrxHV9GN6co"
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
