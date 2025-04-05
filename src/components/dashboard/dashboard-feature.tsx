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
    "5ZSHr9n3haQ2PBkNGsdXu1BLFjPNo17YZScF1dgDedjUzvqPv4UMWp5DFQrhQ2t3vj1iLjMkPyehi4Mvfx27hfKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQJetEHfRsFEHejssMkwxJfqX7Ypm1CxeJoBfhye3FSzv1u9QsA4P14oLxf1Ypd72fspKE7uXPw4KF5pcVvWkgR",
  "key1": "3q1kHz3fg2gxVgwRXkkf8MHekSCQG5CkPzbQubUfMwMzo8d6xQt6evVE4fw8a1iwKcMVRGxwp8Cp8gG5qpVp23pL",
  "key2": "5QSqFFknRz7ju8Vupsf7PtXhiRAxB39EB7SE9xjkhxSL3EvZorphKRQatbavVWx84NT4NdhTFbHeMgDjnztqFXrH",
  "key3": "4uEGFBogQ3H7vBGyxzwEKg3UJ4WohWbcChdrodsexbo5HpLKE1MUG3bRxERcGieCAJBSQXZdrsX5acHsKC9e3rGC",
  "key4": "2xy7eGzaZHDGuhU8xMk1NzRTkYKNuaH2gqyTBJzBQa3u7vFi7UxqaipznN2U98Tu9EjxF6JoCTUqasBygv94QC1X",
  "key5": "4Ajfp2xiYhSL8YRtQBP7k4bQDELfow3s7CRVjjy74tWJvYVQGxD2Q5Dn7v2dLXHVfzVzdDvU7gXqdZtf6F14H4sU",
  "key6": "qTBFoYPGxNPwsQh9B2YXHEVCcASDhdgRrg5kwwzF9aXZNunaC1d94gRnV7q45DaxJuzjLkxdSTYYB3s7Fm6oqee",
  "key7": "2YUam4TezdoytBrtBkBd5pbD7F472hacAS4ivkt7ADEu5dkqpooLJyXJVY8deVT2c4NQW91V6bTAKmFfbtbVwNsA",
  "key8": "4toqQQ6qWrwLWAv3F1EFzoQuRmWGZzr8aZE3CW3GSZS6y4aULsADovmZPcVvb6oihmoXRmGZNPmVedLzer6Ehiwj",
  "key9": "2JhpjJkjx6YPPJ7HMjhAsfJiDdztXQPYf8pvt6XqfrmVPawKdpWTNQfQ6k57Uj9D2d12kK8KwGqvjEt6oh7SrBwY",
  "key10": "42SqBu4cWmAm3eEn2gzspbr3HQss2NATdEFoULTKrLiVE6DcXKPH5jinvy9PiFRboN11Uvik6UAx7wVWSEfw4CXS",
  "key11": "3oxhCBPxzkpotiKbY2JS5JTpgi5J8EwdN6NbCTpmXEE1Q9gakPRzR6oXRY3nxdpaSV6yWJANdfwr8dUVvPj5pqD2",
  "key12": "3bme6Tm9jaMeFA1sNaqLNZFKe2MdQVJtotaa6AUJ4VACVotK6q1e7VAcNFfVeDMZEjxev14K7E5AceCWYFTgX3oo",
  "key13": "29WxUAnSxSnp7vtM7HJ6FeZa6y42wFB13JatyU59ThhFVMFubJPZDsJZU15YCBnj2GLnYghVxGDpUR1HPsSWDiSz",
  "key14": "M9EYhKEp3DjzKu1svRT1GQTYtxPh7gApd5SnwwxF3ugZQKZb1JVu6WURU7VPaqnT1K2TvXtBkBV1R4NE3k9XNnR",
  "key15": "eeDP26MpnSkrdW2SVuwz6ZTbE7AQYiDFg7WkyT4oiDavdnru8SiasceYUypL8QzghiYtYg3VG82iUcC4Go4v2Eb",
  "key16": "4XKQptYHDn6THREyMqQQMHqZFWywB4tXhaNJXsoaWZBZGJEa6TPgWqRzNDTTXL6ViWBeC5ND98Jj7kHgzW4gyfZn",
  "key17": "92kHUriWjGhTiFvugx1Jbs5VBEnpYurGVmPrwVef6LW85XmPwGdMyJ9cFzi2hsw8eucQ9k1cDUfEWTHWKqj2kGi",
  "key18": "24qyqkqyDMWx3R5b3d2bvnGZf4gqfayUs8jPjcR8nXDTJhXgJ1jLe5uxKMFwLH1dPqyz9vFKiVQKsvhP4HSNXHzo",
  "key19": "knV4G6xHzF7S4GtuubsSm3MzQdUXY9hXfqf77nQdBZt2K9dr9Z21P3cmB9vea3Z9a219DiHSLvLmYqrJ9LwkswR",
  "key20": "58LZNt8yY3Uv7RrXEcWaMMHHh2vyi741HxgTbKjKVZgh4C7v1RfbvgzeAgYgLRvniQUne3Zj3ZWddBhthZ5jJeKe",
  "key21": "54afm9qn4bxU1daeKSxNDXFD6NT8YqnzBhXQ14QhgHL5NTCizFs3CsU9ENGRvBMpyQpLA5uJtKNbdRSrHS6MbqxX",
  "key22": "3QAZdpoepPPfkG4bRZCxyUKC3USMmQ3q85TiYC3gEsEuLrQ6ic7T2d457ZtZQYstK19FRhn4LzMtpg63uMSCeF1B",
  "key23": "61FSgUBMEmcAMZf4yzDvUdGyoFzBD2JL3pZtK8z2sarMNPKvdVXF2BWRU87AmtTDB8DzHFrfeXzAAFngCocxrpTp",
  "key24": "43UWyjeVfiCBFhK1NLkjZGPGYancqY4wbAo7vSdHgGpVKyRAMb6Su6Qedbq8aNJpiCM5kvz1jyifVDQvZU2kKoFS",
  "key25": "5GzN8VgY4mCZdvfqPa5RtAZEb3Ns7kow6zBLFZiQffA55diSvmJfpnGJuhyD2Juc9hdxZyVsQCKoXsG9cNGpxxnQ",
  "key26": "2Qcba8K4nGFnNGubiHzSRgZRX68qpFL1KKkEfeqZcgh8KB5N1iLRmWXTWSkwxcdymKaEzCgMCLA5G7qoMCyncMBM"
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
