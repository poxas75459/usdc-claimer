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
    "54e1uQrm7dPQXmG9xeyLxdp83KhRGaECQ89reGvNR5mkDiDZXq7Fpx7mxwpqWJ4riqaSyEG2BXz8XKypc5Sn1dBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sc5NBxXEcvoX2X9PdrJtRJ4P8ad9g1hZ4T3sD5yw4aYy4bngHJR57YVroPVNsv1qtaJ86pdwXdgmonGUJ5J2adk",
  "key1": "52SyqGjEWsQEU74ft3Vi6jRKVdGTdFXsc2YH2Q253Whd6bPBHsnLBsF3mzkg3hpabjcxqtcFuihKoWmbv7NEKP6P",
  "key2": "cvyjHDNr6JPDGu9fpKR76xAQpj7fWtAhfes24Z3xhpLPP7uuxut7Zruvc5m3E8uPGbFJ2j2QdtqayjY4WyJEYva",
  "key3": "4qphjXevj7wvYG5bSso7cme3nJpVtGZDy85unCEFn5zcsEnzhC9sA4og9MQyvHfe7cdbh5T1cq7XaZ79W21a5kNx",
  "key4": "2VRfrZNzGmFQWjxw98zi9P2Gvuka9cmVRtmkY4DzrCFiYKyNM6uWjWVTeUkf7PrawMQ5imP7ddmMfHbn2BJA2ro3",
  "key5": "5SidvtNRaUiF2HZe1J7cd9BnzWMuZKEyLjANyFav6VWCe1qkLLsDmQjTY9zcqrbaRhfFaKEJjRaQf4JLNTK5m9xF",
  "key6": "45momnopHSWBTQtAKehYegaVwcFjKn8zeFA4SRpyMzkx2UknGzYqSMzntp1uibiU9M4EmTKkjvYG6A2CjJKcVpfG",
  "key7": "2tAHrJBwhMKJMroXXMeCwEFYtUHwvTkfj2rfaKXZBNvmBr5y1arJEhJNiADuGkYmgcg9QFJ6xvCAR3YNo3K9mY7G",
  "key8": "gpZgs9RpWtnHZCXhMebRFhgWvDiPC4nrAC3oktY9Zd4nFDxzrPo2JC2udVCeuXhYUNCR4XLF8vSnG7GzEoHqQPQ",
  "key9": "5jvmj2PJeCDQpUW4B5KoLkWLQSd1Drn7yFXSp1niE6FyVPsHxcAMMHLuUJQ4Z38teNHD3MuV9LCKpjZho5wCGQnT",
  "key10": "5c3edyu2n4iReBXzKuS5yYvZwReSEbxpBiw2xb117kY1ZtyXjdQBrz8Jn6gqTjw1qcmqWsPwYM1A39oXSrDSLx9G",
  "key11": "65w1krKfHwJVRNTLCgK6PL41dord5nsB3FWEHyRrvkXb6RGkv4j8AdQs8MU8KRYL4Aa7uwppqCLwLATkDX7p3aQe",
  "key12": "7oQmrHz39g3ZNqxE5StpFmBBGwgS1PEoc2hMfCfiJKwnb6PkiWWbvF8NKhHZT3Vb1yrjfRFJRJz94HN9rtdd8se",
  "key13": "3oqDHeXLPVheWrBfkJtdP7hfnJvwywGWc235jLx9fZhjNMkKadanz4seDETzsNtbL3Xfn8KpD1jFBvBADRNR6Gtm",
  "key14": "3vPWiEHoAFrW12c7McZhzR5YzBNM9pphHUTyissDCeTfJsC2zrBWdCcQCWW8ezMrZU6j2L2eTschpVpN3VjQwJqr",
  "key15": "3oUnUyE3CByBg33wg46M7tm43GYfSd73VStDLA6RwrLTiZLHYAmyQpuBpzgR8be2s725vtn9c49HGYXd8FdE3zka",
  "key16": "2qqYe3zzkzWyAtba2wytC6SE3Rk7vph3HR7zNuU1u8oC8bwD9BrrADmibzD7uTos64jzRvvs3WuSyEZriXZ1drN4",
  "key17": "CHJoNTHVm986nc4JcgmjmrXixqn2SPRLdNF5oB3dfRysd5MYMJK3nbY6rDj54Vj5eLVbruz3682GaqZ2z35biUv",
  "key18": "gb9tK4UTFVvULj3r3VA6YMhXsxwrESGmQyYtdM8buce19V4fyRYRDrq2SyMyU7QNPMhu6WpUXAs4GAcJDWYSoY6",
  "key19": "uBBzHVGHWHDW3GaezB7SVwHjCV3ZNUJii5UqZ3ZUugs8BTanpKfQCTAmgp31RhLZd5VTRxvByndagNiTyJ22USP",
  "key20": "4Zy2krkY3uiDmbhPMcP2jt7dhHT3qWcaHYDjBMwwfaqMMNVnJ9teGwaqM6Eq7SXXX1aeJv2xGRVSpfanRP8rx5xV",
  "key21": "4H15RtpvFTrmaBU2xRYuWQedWg58EKMHx6fD5guerSUGpfLWMSRw9uHHEhW1zWKJh71KaGqAMayZwFt2iRzyZHhU",
  "key22": "3DT2odnHHfZve8WJgP8LonQtvu7iAW1WprensZ1Ku9scCJtVVmpZdbXhmPUzzWoB1Y5Jd3LoDvRiwHYxcfB86wkC",
  "key23": "cEBN4pv6vcwH1cLtX2zawhDrPRRTRzzQGfeYdirvFCegrQuzsmQ6QfnH4n1mZGTuEesYa4SyES6Wn9wLEz8sh2b",
  "key24": "2gHob5XXSuKDDBJAhJmJmSNujoGgduaFYyguVqy61bBq3dJNqs7LKsXZdn7pXdhbUtKaLiTHxmJRwCQiXdUZLYcv"
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
