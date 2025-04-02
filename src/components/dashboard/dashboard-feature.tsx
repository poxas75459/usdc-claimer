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
    "3nmaJh3Z7s2AnE65i6P74YegahPbJ7HFYQcxuGyKtDC2RwjN36MXyXWx2gLys6q54RmUKJtjbaMJudYMVu9TJFMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XbycTzwdN5MeRNXFJezHajAf84AziEwWYY53E8TTBkyjT9ufHTLsWJYvwZyfkpGrkm623EN3S8RNiF6Yq2wzAes",
  "key1": "4qRk8No3gZuM2mvnToAT324mWpbjwziE9Tt7GrrRa2SYMTjghk3oWNAMHHiyVLthq9Qk8Jv97LC8UKh3GnXsK92t",
  "key2": "4tkWz5qa6bdY4cF4Bnqm7LGQU6LPFQVuActSSo5JPSEtxZTxM8fuXCLFmmK2KLBQt89R2NiEt2jyC4VtwPZevmGR",
  "key3": "3q55SkyBuq9HtLZJhMbYiBhRuBNsfKsEcgy4w5nfMTtajVbs1Va4fDj9QPEmctAppdKKTuPXX93ikQbX1aQkcko9",
  "key4": "598gyg4fTJJSktXnKjEeiPFjsWEgDDg7zfkszx39HHoGQetEHAYJ9vdqS7aZG7hfAwjTjXVQayXQ13uP7kXGYxd2",
  "key5": "5kwtECQZ7FruV6bPr4wZfmCRCfSeNr2KCtyCMMFcVQzmwCQiEXrMMUWWdnmUkDd2kVJP1LaK6VUmoJjA9CfXRN39",
  "key6": "2X7mPbsgtMDdvnVmXNjNbBA6ZeGnHVbdFRuc2ZJXQco29kTkgM6aFnxAhzLGtZqV7sGuvnt3zzqscsF88ypRHPur",
  "key7": "4EL7KigpgnvHd6Kxu68jFvAGTuuatJFx24bVp6vFztmPZhBqaKqvPyYLiR5GsDdNYvTD7FNnoi3VJkDAFpjxgYMp",
  "key8": "3UDwddyfHQ5kNLCwiEnjVD8S16mLthHBQPeMuF9MB7E6JJUPsV5H7Gx3qPRsvfv6vAa4gpkgtUN2eBM8GRKUuchs",
  "key9": "q862EbMkNEMRiytXkFv3T32Umrb6duJN9EucV6s9B95zLGwcXYKxvrcvTDp4XvHiNScTprXLhLye7ujh3LSMvx6",
  "key10": "28u4L2vNGkp7eeQqYoemVd2tznWVPKdF1RhahTuYPMyHwzvYgbvhi6gLAMyWvPdRVjqfzbVQu512rp7y9VuoKAVJ",
  "key11": "398t4gY42BAHf2wqEUxoPPEcTYu66FaR1C7csWL6rNemA2RKVUKr57Hyr5LNvXqvxshXojAY2eMAHnh1joBw5WVf",
  "key12": "2cAHU6dzY5eGtudLPnm9K8QKE3S4w77KsBZDNs6XMqA1P9Z9WpLFEhx7WrCe2jJ8sgUrGe4VrioUtiGTDit3K9AG",
  "key13": "49k1gdgM1Qau69wJMz6gGibjdmbi3nfQRzc7H9FKrxxvyGyyFrgNtKriFcxasZSU7hT4aJ7yCNJMZESbdrdxKUGC",
  "key14": "Q3Pze5gvnSYRMaj2DBUxAvTP8mtMCAfho6VVxuAd49waQMxLCdK4LLbVckUdTwhPEGfPL8XRwPWgSAbn4NsXmiC",
  "key15": "4bVGDkFT7RSQBmdSjsR5iuLPnhbnVLn2c4iu1fHuzj7M6o4f2XbA2WAe19sYuEcwkUf6yXz6YHKncEbEVEmjvdaD",
  "key16": "ceyLhktfe4xfE4W2fBkKrU8Sz7Lkf4qgVvZn6AaHe7TtnvZBEtzQuCB6f6f9Qo2YjP5DowUtNhjWcw98sXPLgCP",
  "key17": "5AbhwUJrsh3w1Si2qE8CAc93Ts2GiAE85uQuHeTgJw7SbE1SqFiMcrA1mMHkzXiS5VbQZEUmCwPFn42V54nCaR6e",
  "key18": "5cQj6QPha3xttKVysDRnXGNBLiBmhTmjQQ2iusVG34iGdzyVhLwxL5xXp2zeKBgRNpVdgXXw3S8hjPyAjUKtgvge",
  "key19": "R48aGwAsz7C5yv8GHq6KCJxNnN2ZhGFWZZiphRu4E1ppnbsw6q6nuHDcbDMP6x1e1kyDu19EuJmRBMxZnwjW6HB",
  "key20": "56NsMDhArhfBywHZ1U8BejSBAZohp2XfXurFSYUvjVshBA2Y796rzAxSCrMX6wxWBzjY92KATHWZDPNsmGBCLPbx",
  "key21": "2SmnLZLNgLLf6c8cUkSwxCU6dFfmMN1wiNZn6jGnZaLQEatcXQzksprXpuMRXAKYUDS9jHt4qgevxruR6r7UewcR",
  "key22": "4o9drgGNxaRat7deNLLwVgDoSGxDhtJZWtt4BZRUx7Bzyx1bUnJw3t3FPGD59gzgtsyXfWEX9D4WNBRQdry4XhL4",
  "key23": "62NLSTB8odoR6Lf7ni5BpAjBC3YVUAM4WYRVJQEHUKxjNsERXCjzX4wbMdMhFbPLYQa5AeuizpiWYdVUuwtFcA6j",
  "key24": "MnvjMHwbwQjCDG6oEULpPGzWwG4cHkNHbF8XzQQB583gWxRKPYqaYQv4R6X6voDJZg2CjQLSZRcfrqKm6VsgkvE",
  "key25": "3dEYft6e8A8Xhp47UeZyUP7juBdxfLvvYD8SrTDm5uFZQMjcR1e4FKosWpYBqc7r4owo3Qds8Sg37FSPSkohPbXi",
  "key26": "5kUyC23bpCNWcXFjYq89BzzynrYwLZELL6Pgx9d2oThHik5JuD7bbwGmRUXSW6BhoNJuDLUowpwAaXjtH21pF1up",
  "key27": "3YcdyV7ntUcG9jcEgxjLkHucNkTyhmBmKVLwtNotiYgBvZnS3A8HHypZtGTpq7MZ36pTpEJHekTi1DDwSXHgTnb8",
  "key28": "5tzTMxLKrQMcETHXX3vGRD6F9s76GeZALU7DASzhmgX7GcoeSRwjKViTHUzghdnfg7Dyqhpa464sztv9VvoqVZ4B",
  "key29": "2sckBwAZYw8EVWtDKRVryhquPo1ufd8sph1SmS7KCwB4UB7ZDsfB1Q9wxhbJ6ez1hP3FH49u1MWDEAbvWdynFqSX",
  "key30": "3KLpoZryjYUdrrXfqheSBiXs9djbbBspQsRq7WSP5FrzNgC6bVCNGmD4wHmbjKKrNNb1zSvRueBmURfSQyFNFEQX",
  "key31": "4bZrjNoLhbDSZg3UgRGLAuXw3sECnfm5xdQTp7Te4KYKezRW4AwAeHvpGpgzWRDpdX5AU3gAcSvXubxnzYL7mxNB",
  "key32": "3NwBqBzrQpamokEMCMisVqXmsEfA6dVHzHoDaVMDezfX6fNP2BXDxorcwsHLV1eVpwDCxe3hNTNkDMNAx2rFwHdW",
  "key33": "2ecnz5GsgiYcPrKr9wn3KaoM47AkyiuAuzRNu4Wck6DMkJA7nKo6n2dKWsv98CMVgZWVUutvji9n4P7p91Go2nv5",
  "key34": "4XdhgAoGEVeB1K26ZheXcRgoRjXwFdexFUV1t7RxSEsis3dnkLAozPs8cpj7ZprM6qSQtMYsSDbuanmFYHhu1mnk",
  "key35": "41qQotXtTqt1v4uFnu3geKCG61aYwpN4F6k51N2R9nGmBPe1NB3arpyUm17qJ77uypAimXAuAaH2FigoxbnEEQBZ",
  "key36": "4enNdDdVsrbEYjKmvoxe3ezS4ePCmokTXKGJLiJcfjFS78uV4dMPF5UtmHJaykF5v1vQT5cEnfgKDwvKwQFcuWGy",
  "key37": "5NjtT9TAzDsd86trtUajM7QAbzugDZL86U3BFNdLoGAR2t8QaxE4t65CCBtQCdfjzoRXJfYsc9jNSfkaUR2VvqMG",
  "key38": "5UzxtKFpZLLprHtUFoMW7EHjMXuzxwUXSTc74PKovZqroCWoWhK7hWLzVDmpSFvsk1B218Jty3WbHYpLEbK7c2Ra",
  "key39": "5jmZnxCvymzHSUg7UQFdHx4g1HJTXcB4YYcXTYGx25Qxpugbto7R1tnCcJmDbotRT137EnZD4Q2NNCEd5veFf4C4",
  "key40": "XpCr2vtfVCXAji1fcffUYqDZrtkerXtP61HNnbzVZDiduZEGiNCpUQSmXHw3TjLzSubCLLe4gAENoU4HEkXAssn",
  "key41": "3mQyVfGUKHF1WApu2rnn1jveBYbuKQzkDegFkvpSMsJPrd4H31DcuHSAgaELLV8sxn5eFy8tKnJhrikpuUsRKiF6",
  "key42": "5pT9RAEHofW2j2b8PqjbzGGGJDAEschVdGsLSpXiqxi5woR6kze7yduHcUXXc5LxhxNKNfpCxyyjhfGWe2g6UQpZ",
  "key43": "yaftCWcx5gNXwm31L7B9HM4LRuKNe7iVd3vtSm72aVAWVFiGUVu3Q6X32Deh9MHsmLLergJLLuNey8Xd8utLLXZ",
  "key44": "5Rf3VGA1bveosf13hJ4FSXvCvbara4moS9T5q8TnydxkL9Vn8hRraBqLVTsX7E6L4Ki3RNQ1GenFEHmwnY3o2u6g",
  "key45": "4GBoRRTqvVHAqKdSjNqcsaDFy47Ri4EHhXQCg8vMjCGTMS8MYGn65n1GKb1zetHFRRNsjB5d4VLX5WTLRbn2tiw4",
  "key46": "4cCCYLvoCKd6aGJtZrvpbZNGeacwBQTUXoUCDp9soQsWSrfSSbB4UbAjMmJd8L1mMstTHkJYAvJsLKfEMLfBMLLw"
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
