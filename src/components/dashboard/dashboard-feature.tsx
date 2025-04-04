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
    "3weVUBJvcX7vAUHdyTsy1o5CoPPrWkgJZ1wCPaQic5cjc2SxA1QZzxqP1p8oZ86VArckqLkNSCAHT8HD6JE4BtpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MudDt6GwKAeYnT6TtTd4LF3XFUbNa32RaN4VZpD2wTSs41E1ZHk6ZNLLcQM6QwNEmQtEU7KECx14WRB34EMj1Gk",
  "key1": "vvyhDw4UKNSUtumPTRKwG6DoWFWMvTZdUyTmMuiprgwvUsHcNZBQCDyahd26g2t1bsLrmwbnHFybb5yQ6tZTNpi",
  "key2": "4WdqwHjXbrbjaRTL5WKvGQrvPkGFTEhjJLzgLKLhQxPUU8DfUEUvBhEbYFagqvpqkZWXBfDjsqHR2ox3cWC1PdyU",
  "key3": "5mRBJPFpve2i2FYHfyfGqjhBU3VAWyeZk9R6moKMeXqPMrPsngbb335aPQJk1xReGzNKgaPNrPqnGrCNtYPs5RFH",
  "key4": "4iWuurexFUeQ8voxgEc4hH4dsrDVCya7D1MDbREzagirjFHZ25GwBzXCLprwUg49KEFEAkErwmoEm92Q4qGspir8",
  "key5": "5FFLyQeErkEBBNJVZuEHr416bworShRUa29koi4PQ6iwC5ushHSSW4aVDKbX6C57fv9sgEqNssLVKK4mcemMCoKJ",
  "key6": "pqjGpAK6yXoggL1JJwArDxmiCprXg4WXedDCuwssjh5QNSLdXLpPBnXPESKJeNXfCYVtoc9wPiGyBdaAZj2FYAy",
  "key7": "3qvGkDYrZXPXno74QUuc7D4w2Kc8HyTB5Z3AFUJGWqEcSFEGAzDL58Tvd9kGPf6CP1BRieSid5xDNUXpsaSGb1fB",
  "key8": "3snzL5GAyLFBaHbMhNTtUjghvGDy5f53aX2fQ4vtvfcv3cSsqo8e4spcUxVZXaMnFGsJUUdhi3MRVn2Gi1CHaoSZ",
  "key9": "2DZnLsFh694SKK5AYcrACFShWETRtRysXnjcLy9R8fbWmk8irVk6PfobUXXHJN6jSWNhLcLPn1sfZ1DrTCiuJZNY",
  "key10": "4A6rUJGFr6qU2m91kAhJ8hUAAx1m2xq5sRuFtnPY62sPA1H6bwP2ED8dP5yrVuRLm6vV4vXwMdSSJ1TbewWnh8aA",
  "key11": "59jUnZsMAN39Nqnmr1qNPX4myLndueC8FBzVQcuPygKyxnjm5m4sQxiEuSTSHN7uweJCy3DdCCgwhDgNu6o4nK3Y",
  "key12": "4iNSp2ev6bCgSS7dM1Qo4EViHfyi6aTFDpvJPtrXk1CmmFH6fh6hvGmx8kNwvGUYG3nmGFBLkVvKYdYRBMfd1i8F",
  "key13": "5LNq3jYnDNgzRd3uKtCZDusqcyiwwoXceCS4ddskRismYrus5LBTiaamtFsmibU9EzsUoHo2fB3ekuK1QBCMk84a",
  "key14": "5N6uMhoa3aafaBZTZTLX6FHYJTyB1ZKa22JhsqDD6v3NB8hcSLSRbAtKLQ5unZL7t3uJJaaB2Mqk7c2VzXJFqoK",
  "key15": "4xDRvB9TMpaW4DYeifdgYSYMS8ZYfYpXtejRW5ouLw956DiWiPcQjMoBr9EjqEN6vqTh9qdK4fKCiy3HiruA2i1U",
  "key16": "3eSLnDokqE5mvJszTiFCTKogK2iab11pKyT9CLPGQG8nC9dLUksEqMA5zR5PuJdRpDzu7ag4ew1yNceeXXgNamL6",
  "key17": "skcuxjFfpU6phthfRLCP9y849ttuMEubY7hydWvZ24CT4DAsRD6Qxx5wuxDLvG2vErSW9DFtzZ9SSukhzi2uYQz",
  "key18": "mJjk7UnqwHLD191CM91sWWLEWHoDjYJnx3rkAUkmgaNVtsAYM2EGTJd4rN54QqAZCiYP3WEidUnr1WCRoDBVR32",
  "key19": "GJ6QS4as11z152GuWjUtGvv8MjnyxyvA3Wy4zfuSrp1CrAhkE3kHKGiSQ6WKDGMjix6F2YikfLdP4tvXM5hYgCj",
  "key20": "2AZDpivPxbWQCaXCFriHZw3QJp6U4nc7xyuqKz8Fd5oFMHCfeRbQhDksaBbMrJyfKwW9nbSZfXfnDfrzQdUnVFkj",
  "key21": "3RTr5YKs5dpem6jo1wq1oa1zPq1LTbsVs2numLZx2APzCuNrKTVtnXxuZmuvSSGohM1haByncvAqwUycjFP794zh",
  "key22": "3eawJNtk9SbhQbWwAVxkwYJKD6TS8VKdXsYQ94ureH2ZLcbDLsXycDo7wFiitiz1YdsdapNQfF7Me1uCbBVpajDD",
  "key23": "h4xsGVqscW3dotWhkZ8oXP7JCCrrpgiR6TptQhRzpBvSWPfhQ2oQGwuSS1kE7HGb276p2ydpkmyeBMkyPV8wuYo",
  "key24": "5AmmRBmA37exaZahuVvp8KS1NyLUxD4n3SS3kL7dMx4kXRMrmFNPSGRXSrype9C9EtWb3MfZycopKuKhNgRhso5L",
  "key25": "41DwkZ6vgGxsAHgdFQ5oDWBWKvkeCFw9qstSVAyxLbtaqsxpohwceoW8sKvGMLNPUn16Sn7QpuCgQzAmVvionYAJ",
  "key26": "KDXz3ue3VKkW6Wze2mY7WbLbXzEui3vykQW2RBsFMQTRLgFTRuMyTSSNBhsJAK3KbNb1hMyBSxPMffenaKWENWL",
  "key27": "2TAJptFETb1XCRSZFXY4s5f8FTFAH1vJJPtR6YxoMNgkHi3K18aN679MThnJntDCYhKhKrMYvCPs34jWL42QVr4V",
  "key28": "CkHHWZbay5xFR8gMjoP6sG1BgA6Uu11x7PbWgtCqGZBbhcNtcMoJmKiVGuBtj5Hzcq9CydiKZDzJ3qgjH7kkvDf",
  "key29": "3o11Xf7kHi6Ew3XYtm7nsRVxXWtG53zQJmFVcBJbmg34MReJignKDKExvHfZxMtQehKYkw6nfZaKcbfw65UqKAjN",
  "key30": "KYA3L9UorJc2fDNH2RZatH16SJsGwbMjBn3UShjJ8d1S7atAKRwGJZ2k3frqX1rMM98MNfsF3aL6oAg7jixaKmL"
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
