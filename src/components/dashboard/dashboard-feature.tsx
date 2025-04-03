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
    "4Cn2GtQFZcRWpq54rsAAfjWvRwZrrg4ZU2d7g8gEkKFFqbsz37zdWpyuHhjdistiTbPxGAZw1f5QvHvG85D1ZHFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73Dx7opmspoydb5TR7syJfjxesp4R36tQ2fMhzmNBaa9JW1vjtWM7VQep1nEjNctjD2Hs5FFmyWpraGkcRVaa72",
  "key1": "4srEoVzyGVVWaWfpFaUMCyaveFGfRB9WN8ve9kXUuWqpUKT11ujMVRrJxjkVthuBp8dVxDccRjAxexpCGwkpGX72",
  "key2": "odvARwXTyHkdnYFwr6msuBAm9QKDe8XgGnuTtsFURA5KRTGPA5ZJ9VCUpkbxMNTQj6MCYWHU9KB7ZkYrvm7ZYCM",
  "key3": "2bk1HSiXxQhca4dryBeCLXAGAZN1u5uczAZn4sX1RrsoeG83y8Gu8nRS3zGKWdQ3vp2QaJ3eFP3SkbtTjBDpLQRo",
  "key4": "5MqfrexCcTp3FzsUsr1263KT8qtjoVH6TC9gMMK3FuLPrchui2V8eqHXkAvSMEUtTK7HY4dxBqMfRUXo5UxGFAM9",
  "key5": "rjD1NoE5z7gqYEpJ684yM5T29iM4ZHu6HDFUcRjypZCcmCVQSzmGQpdqhXh78Lckp4dqs8t2RRpFzVTjyzp6bVG",
  "key6": "5sBbjbX2Y8zHWaCrPGS6uo4w3xM2sgZsnAGxxJtiZ6Be954t8KaafXx8zujMh8pqX9tLbqMXrYXqrjcuJeGKnNqA",
  "key7": "51j6EnAunMoxCsYvyVcZ2985Kmu5HYMNVwbLZBBiuPZNpskrSw8NyzCSsgmUsfHvzMPofuyzxvXhgN21EwaST7SK",
  "key8": "3KPHET43kHkh4JTxjfsPTf2bkXk8GWXwt9ubnvwi1DXX31UHwKzFQwtFdRzyEabSDfKtuAhrLs913KPycXSByXgw",
  "key9": "4byCrWGLi8uYDzoZhFHEfrKsHaDMNZFbV1DUEo6V9itzZedBDXXfL2ox9NsJaLDpcHMxXzcrM3cLSihqtizG5Uhb",
  "key10": "SNAij73JFvnggoth422AnYQ9z2pV67PqpCfHn1yydxWvqzZshLo8tL9jqeRjBh6BZJqA5kZURSeoJnaqway8RwM",
  "key11": "2Ywtw4NR4Wu3NiLhpwwPsux3kgjFNsS571mBZK75UP6KmjE81oa7hkFEJQrs9ooPqkcNEXE9cinrnoxz1pg3s7Cs",
  "key12": "31nTQnZToDBmbhi3CHMoSo2AHRkroKh58HgE8pP7HfXXFhLZvYnmByLS3h6m13Vpw62mtcPg3K5Xgimu2nMUG4RL",
  "key13": "315YWTmXAGcb49KrXaMPhxbTv2KvW7oqAPnJuAyViwokxpFpb6MEp3aZ627AzQdj3Ry2Sx2i5ALDnjAaFDMUxfft",
  "key14": "j7XBrnBoPkSDMazcarmqSJoeKQeVXu2k5TFiJ14kwKUBQAGnY3hWYnu2VfAZCTcfrrKQ3inXUQhj4bJK5Wd8WkD",
  "key15": "AtiujeSvFAEtd5JE5Yre2ejUCSMamsEC7dsLdtstP53cmeZ51x6YpqGxhNCZhkLrv5JwjKgwwjVThSbfnXFeoL1",
  "key16": "4pewzbLgviJErX9ErhD4TaLdxcvCfuhYAZSibUMvDbUXfgJYZWRrTDpJmrkSFkNbFfu45VsckC84VqL4VPkJZjtu",
  "key17": "27eyaGWbkhcATNNcmzGc5ba32XWaTgtGjyWfnEV1PhHyWmBJjf7RYbTmsFrx4mJAGoNNKV5XfaQRPHNMz5CoAqmo",
  "key18": "8yY21B7GzwAdGqEdFSDQ6UD6HzoGVxMgsqfejuYr8RkpwQcXFkiq66GzcmFXSuFTs6hnehbQZhVKwqYLffjj8cD",
  "key19": "4fb59g8VaMRbZgRae3HsgsncVNc3iTvZXvbpPBeTfm5Q82XjDrHVrmdYzf9oNWUrBg3uhkje3wqEuVjHzJKaHFEn",
  "key20": "58UBKffoCs5gKmyYVVnFvs6Wehc86HiAuUHAxjrXZSmFYv6pBRAKjKhoutHTog6ZGktbipWEQq7f9FC9Gx7egwQp",
  "key21": "5RavAD9zAtrj6c5Knz3wfwgLcve99eFrVhsk6kPHjJb9aMBSjGBhUsENm2ZmgEztaVW8RLjkxo9gqtoPrmDPwrYp",
  "key22": "3nhqmMoLjVEA1uq17qifELp9Mj2nuenJFrkT171Buv5mnxosvSdATCYywRqNV1HkX2e8EDq3NfVDa28eXUarBBCJ",
  "key23": "2K5N5NeGKoDDfDQwoaxZDMCYe4QDHJZHfD5MW6e7yUu8VS2d6aWfZAHYU9gQYztM2AAJT5P2TBEWVyw8vW415GBL",
  "key24": "R4DHN3YmyHJqM3iAtcvrGWoGN3HSMH2iwbcuJqKqsLM12UKUWeXggRcxRqq6LuyonYfhYB5AC7iwCqBuKAZG2pd",
  "key25": "36XHZhv7PCYjr8SVUCdbkrhC7oFbh91124Rh8heCQvzcPhC5qGAvP3DwoVeZkp7EjpF1TuopLx91U7PNRC59vdMU",
  "key26": "4FrDP6MrBiNNs4koTiXGGzMgEgvzwwnPmjaZJN7J6KfxmVZiwRSh8s9iqmKSu9tZtBrKqMPnR2Z3uMDN3VTAQfS9",
  "key27": "4XnLFZwYhB4HWnKnGx3j1GnX922NBMtZDLepMpCM2MgdQfGYHUxfHd9CFeFtJ9qtfZe1Y3LsE4VzA6ypH9YARkRS",
  "key28": "4HcJdDLGTcREPT63Cs1LHuYZ3nMRnBD2PgdTnCr4AU59yhWJkxVtyVaMcbH2Np6gmUp9s1d7z3wjHArsM6aF7bdh",
  "key29": "5mVF87xCXm3qA7SWbvTohkbV11QhrCm7mjwNq1nq1tjbuVBA7GMsyAfeccsWkEZvVcdz93ScrfvoicvmxvFur6SL"
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
