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
    "3R1pFRvSe5uHS9Kap9Hh5Wb2Njpb2UWaGmuxkSPL4Gcae6y9E9HztzXqUVEmKTPqqiD2DwZou55AUteiNA4bxZdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zsfsv9emmgqzzxz2RTWqkueuhkhDgmyuYPAsu9KA3RjkDpjzhxcsGRVRSeEfFABG4ZRD9VkYNPszyN9HVWxU2BC",
  "key1": "28xvzXpDt3XWRJTxAyiQSM1nPKEBkrWFEsH8AjvWMasTfpYry4jAcFnUAthwucgthXfBhydNP25ZBWWBh6YHonyJ",
  "key2": "31DiHxxD2n9Qnmse8fsnFhCzRm3JJGNadrjDejRSHm8j5SV1WHdFNYnacod413j1owvbqa8YLutProxJBMMeb91q",
  "key3": "57BSHTQfssheyzSa1VrSgqcgJCmGGD1vQpQPZNpbaoNU7i1Tn8EqiDfKeUhZMjHnaKSTcoayCsq23JnBvP3zgkoT",
  "key4": "7WLcSvAMXCw18nXa8QCJcgGY29YEPSscfNS72d3eWGgHJLuFuCzCBRjjDzvpW3xpxZet5bnAkdn44QqciYQQNz1",
  "key5": "aiHBcQktJgFpkEgE2RdBU1w7AFR8sAgAL4og8GETUyvSK3ThWtt1okZi5bjnQWcDzKQimGRj1EntF4RFr5yVTCL",
  "key6": "244jpYzighLSUkgUvjY5uxwedvVt2VeWh9gBZoBiTPBQZ2xoyCRhzMw7jg5eWhn1oDiaCR8sJcttXor9mqKGR5rq",
  "key7": "3koz8UrkzamVjvM3n1ZY82MNx9Gr1wDVBHe44Dn9XzF2fZxUwNyB1Fxnuda2i6vSjum3fqbJyRpVGYv2wm2bo3pA",
  "key8": "4wCVzJDjhcFz8Y3aVwSbfjfA3PZEybyMbdRGMurULKwzFLMmg9e8ysexLKhPyrwmj1gNAxcR28FoqNxxjk4fTsds",
  "key9": "5F5XCML8eiFUWeth3K11Nnyaq5Cnz3hnjjT26qxLFZD2LFtZa4FBA7V6EpU9qBVQEN11rXGPDtyBPDEAVNXncEh7",
  "key10": "5wh8kELwQDSZPXMgUepNU3Y56JHUTWztc2khL4VzNEHjepJr78DGGfcEnp5DnpFQAgUA17zZofKbj5Ri4AHSH4Vj",
  "key11": "3Qsvnfsh5x9HGTKRGiq4ZG7hBVqDncajwjWV3PBTDhV35xaB8omC6UwmG5XnwWUUcvD8AKdWk3qBttpxinkeHduq",
  "key12": "4Mh9AGt9TpZhwZrSxPmQ9kYpbng4nC8HA8etVaSmSuPhLofhGkG73XBii9zaxVFQndB6988MsAM1YMYzQhBVBVsd",
  "key13": "4ckQFDWGavXxob7jGrFXcnBM25rFaazEdDLyAtnAcVXSM3zzZSqXg59Ry7ijydXXazL4ZtnMS7j8a2xhMJoJBNVR",
  "key14": "3A268968wRQTu7TebZtpC1kc2PW6RSpMJpwucbBMbRniDWSC71THeeYjpLfnJZrpH8Gjh5mjt6aa3QuE2PzKGLdx",
  "key15": "ScRWa6P1nt3ydd85Soq1fwx7M4sLNqFEXWE7o4WpHTG5WDy6nweo4MZfthtjPiTfvjct7aHHnRANGuVwya2bafF",
  "key16": "2KP8MZKghcZLhrD53B6vWWeRwSxML1CCWryRj1xu8MzrcCAfxQEELpN41oMBPEcx1Tdw1JmvWSJX4ctWYfsRPNzv",
  "key17": "3oHdPveXEFfvpn9gaxxH5ToKio5bjnHuC7Y1xHCVqELNj36yikcMmDn3hTstmr1UXyBnutX3gbXqHupVk5fQvS97",
  "key18": "SfcMm5nQtH8TNz4ZN5ofFkCmBiwRCu4bBaH7EjHGJqf7kRSmuRbeTbS6kbvW4oSFVd34ci1Xtv4as39mnamKhfD",
  "key19": "2EByVvGMz9rKCzwC1NhajajJKXkNGVnvL6h97bXre6uH5FyjLx795X58qEZcewC2N5NUoyy6PXejkfd2baPSNann",
  "key20": "2DDZFE7pZHVVaNTsjJA3VNS4MiGLk93ugipP2BfDUYYGgiaCeEdfHBTN3jAfZwbEn9Bm4fyanqNEvRmutciabqGU",
  "key21": "Sf64tW4AyKiPRhqiG7Q1TQEPSsd5yCXyVvrGQg3zQ7nJXqZFYpPiSuTomQCPYTrkA5dM9yAGWPJtaYcZVEQPLGR",
  "key22": "LeDXtWMPYd393UHUCXnyQxZPDnBbgbd2wMwjLhK3gBiUWEsuigCfkXd4ue8LUWyNSvk4khrxsp7vsVxnvr5NiBJ",
  "key23": "3hDNo5qEEF1Xv7C8jFe7Fxhu3JsahZ26NNDC4NcczP2YNF5kSRaLoAhrUdCsLuXjLuU6p1egXqz96dpzdv1vJ5PU",
  "key24": "2iyGJGMA9AgpdtDEbWpJcnJgLRxQcA4TmP8jdhRmyTYnkwG62LeseojTVnbkx2YvVqgzEJ1NrzGmk6SbLcqoyEiX",
  "key25": "LrkxCmSwsjy7DMkz4CuADxtn1RioFES9MNiBKdy2f5HMueKqZeRxGxqykhxE5Vp9tJgzFJAgmqSNbRE6XownmsE",
  "key26": "5Y4CxUTeP1wZyCr2t89e2KHxqpJYGYeBsJL94wK9dvnrtPTfaJYZCE2QgYSzqboGGBbEAoDBSLDNg4bfdBp7BS6q"
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
