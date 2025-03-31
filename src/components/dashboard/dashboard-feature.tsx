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
    "fu1oZLLeyFDaiapFtdzsvW9kFdzYuSiQweJiq6bwDUP1wrz56SvSfJpE1oumQe5Nu8TdgUnbRXjUnd1AVWHby3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEcKrfSasxqJop9j1ZrFD6hShb9CxUS5DWMpKmwAJ1KNdjcV7KhmnoW95qZ4nr9QwYNGdu827ZkUtoVaMSc3jHW",
  "key1": "3igNtw24sRpEfMPt4krrp2LZHfAAaGha25GzFNcWxz5T9Yd1eH544j4JjHyqZn11ysJhq2WRaNMfoSpiDKW1f5az",
  "key2": "3XPrxoRheQ6vdkNfcqFwsMV8dVkuRjD2vV7SB1gUj4zvczUGSBadixqi8ayh7L1xJ7bRkDviyuBxhwHA8p7Zawjn",
  "key3": "5VRwG7FxRVopqBxrUaC3ZxbZBoS8pipdAwKFnDmANjEuNUfowbTNaUXCPSh4fhpqEpjXpXWW8TmR8CvWDet69c9D",
  "key4": "RPWb9iuGvRj8XMAFwBxD82AV5C9vir8fsPqeEjehBh6Wt5opeQDUHD9ywyLYyvkNAkCUVKcuJ3KYjZ9LhioJiJG",
  "key5": "5yN3LDEVtwteA64JWNMA379d6xcpia3BvGUXsvhJPQhVAmL9prVD63yXXaycTHnvGLLY7RN9Sd3xhQkZMzrSzQdg",
  "key6": "3VbLZYuSJt5ZABqGxPbRg1ZmkCbx9VERhrp96St66XVsYn2vmeZc9XH8nEJoPQR2A2uzASkFQ8RzNuGeRpT5uxqT",
  "key7": "86DUATEbSvXogdY5qCQF1GL2QisjhHuwtq2phi4FcozXaBE2EtbnJVZ6vnSiUsG52FZ1jwhggfknZ6LEXVD5jmV",
  "key8": "5m6gMg49kGcNe9JTswv8UqdzqTbqNWcc94K4Tkfscsd4s5X9a9L3dpbFnRCf6QjbSRLbD8ZmLmrpDKDsFPYXYpCZ",
  "key9": "2iJSsjtnW1N4YfJfu6DZHvnxgzsm9AogN8JBEH3e4VsWfhY7tamTSienBQRqdK5nT28bCvg4fyvi41moDPGfrd3e",
  "key10": "3qsQprKBe6cy4rMpD4VGcqZAvj5iTuEkqiT7c2NtVku9UKB1cqbWzMaPvfMA3oNBxZLN8wpBzTUY6AnuZZEJLmz",
  "key11": "NsaBUH3bWHQQu9Gk2NUph16CDX2qLJBxAmh3h92g6WnSSATTYacDWSYnWFnY5i3EoHTP6q4F3Pd1hFPiXf3pYmi",
  "key12": "Ke2JqAEJr3rwE1HwVfExGkmgZWNCEEJBMJegjZNtWnLEVKFNsouoXspBN1EavQyr3QUsZg7UodN941WGR2suCY7",
  "key13": "2Lmx2CiyqKTyYLpYu7Fose5mbTBaXA586NjzYEwNJNnGjWhBJksuF7rRMuB3fdtC3LPZKTCNfXiNrYZq2nLgQhrD",
  "key14": "3g2VjHqzGSfRyVVnXjXzHXfm6bvHH8RiFrg3td9P2pzoRs4dPZcHngLAeMkkayYMTxFCoXGWYRM1obMQdq4NBPaV",
  "key15": "5HdxR4ySW12TSupgndg924k34HaG9T236ymZ9jxid1VLu8myRhuAje2anQQbye8T6EssvaoL8KKyWNsKyTTpFSAm",
  "key16": "2EizuouUoas1Cv9g6rEdJXxRojWQQqnaf63F5fhiDrKvh3RaCJRYACqzjAaB9cYj7to1MdQdTYsqa9PuVQvcSMVF",
  "key17": "Q4fVNDrSGm3DQnK4p4rdAAd6XSqGyvULEekYMAKVRvXGvgZTsvaGZ4UM95N5XB79tW7qWP2ETi1RhLPMkUBk4ij",
  "key18": "3W8sSBPex8rMYocvT8V2dbE85wvnk6xFYzpWp8zE33EibVTJnktgEWKs9YG6pkmSw6fFvu5HthxaExYdckaWz7S4",
  "key19": "4EAzU1z8MHSqr6jtvTD3Y9Ayw2LosB4zgiuzipxsoNwGxW7ivAExV7ZV62FhyBjxRV4h2b3GXMzVH6Wk8yzjbYwj",
  "key20": "up8T35ddoHgzbySxdM3WcYkrUmE2cz18sPC4ewQgPpi7jTRFtFLFvvoPQM4tZNyq8kHsW5ezdSVv6d3VixPzWYC",
  "key21": "YeB38PoAqv1Vhf1Sxb37QNBHdQfKYAvFuFPmXA2uryHK4a1s118DvBcgKdc6R4xMHTwAtBaJ7qPd27mGnPEssVf",
  "key22": "4wdHo9VCXV6dsQfG9Kadp5QgzroiNLLyHtPCejMrp9uVnw88asw7dLS4qyT3deNc3ov6qsVCmp95LRDFPgSM9ZjH",
  "key23": "5xyP7eW3jAscU4nBHBMa2yH5FdKWtbnPMkUXZ2nnKhgqZymaFN3Jz8px5iqeigdoXz61GU78KfodapfxDUhGdxrD",
  "key24": "4bXvdH6f4T3q2cJopLhfzdPqB8RsDdxwJA16S414h16fNb699veqvurxGVbUotrsY51kVjrgY6BoxHoepZknBHVb",
  "key25": "2aLyib4CGaE8vcwoMoU5GuzbH9sW9FmVxngbGHNCUQUGyQ5eBuhCzFvie9ohnwidxUmMBu6FsvMnvbbKkjGRZ9aq",
  "key26": "EQHDqa7Xeeq88sg3E8RXudmVZa3ZTMEyDjgcKSK8oWWu3gcSiNidcqtq3dsqTsF8MqyfwXj7qMmzBMCnhiktjJe"
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
