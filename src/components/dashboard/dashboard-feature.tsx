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
    "2br1M9hidx4JbMkLtcCkAjBdWTeMR8y82Ad2otLWtK56JaCTyUj7R8HfuLGuoTFAK9wU1maXqsJyPyeJkG3VnXZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5Lc2XeCRxEuKznjPTVQRSe3kmHJ2vsHXMfDLNNDtRVcG3YLVLf8C8zS1cvFBQB7WBK3bqEYd8QLfngbARmnVBg",
  "key1": "61mkY51hivDvwX7YEGcbCvkAQrcGygosMAScMKptMARnLuv1H51c9SfghpWxtzMAdqoQsFURcdhepEPNmwum5hv3",
  "key2": "4cuR8sBun1vHjW2UHyGsrY7hicsqnsN7i9Tbp9rRPfreb3pZGAUhnHHeE7L4som7oNyYF7ZQnBPGvJkoNvnWoX5t",
  "key3": "38XPpYULC6gUiNBP4swx3QGoNSo8kHXHeoxxqqDBAR86aBNZcanNDtcPNwd3yxkMfnTa4zbekcK2wugWsqJkqBaB",
  "key4": "3gRn2zrYeCAufchJDZkbT1ovgB97EQ1LWa9PUerLR172UTbThgy7QcSWY8DUgd3xpfJx6VjKD1UjQFmvjm3sQ34X",
  "key5": "4RpoL4n7cQvJqqCrC7XFy37nmfy8CXQwoXNUNVQTeyGb56qUbPMyiEGMQuBacMYxT8Wb1gwvPiJc5TQh525vEGKh",
  "key6": "5xnPE218m7nLzaT8Zw7xkDB6mTbHSLTAQpUzeB4fAuWhtKFPGGDJ93gXCzWg5ZewEo4cZ8ctasdL6ubb9dFKQ4rN",
  "key7": "49kce7vhiF2tLLSS1zEFz8H9z2X5bdPrLsrfAW9EMJjVqFY5RD4QcFVQmySxAxcBQUrTXZEAS8uSNZmT2x5fGKm5",
  "key8": "32PQE2dcjdUKRUjaTmJ8a5psFELXt8rEGNJbAqS2rLwggrgcJ7NahE2roW16PvS1dQRqHMGaLrTjkyket7cSzDzc",
  "key9": "29zFVKThW95bZ5376ox6wpeehFVhoRWE6FdQJt9rS2TDEZKcXA6iHpaRYHxaxSEi8K2R81knjVnibU6LTo1xeVQ5",
  "key10": "4A96FotTieVG8iGGZiiaqoRAWSY7wwnTqxefqTmwmyQwy4HcUi8betPwDUqFLHdKXwNYrFnHdCjePJi3Ex4jfoNC",
  "key11": "5SgJmWifBuUwyZc9H54HvgsbzS6W5TNcNYb2UBUx4ia7cgWV6EtZQ4on4G3qzZwZftkMdEjByjgCvECbKWt9qXvf",
  "key12": "3NiyjupuLvud5HjhuLxMTqkhBMNFFt6Q1kJiLNZjn9DkWKjnPMKdy497RCWsWjTGGMtGB9iPx5M62aPRTe5ZtyEw",
  "key13": "5qPtbsShHWe9ffLoQkXesdW4DrmJ9aDxVefzqDvTBEqYgZTh32PzxN5Ed3tUiMsvjQKu1rEPfDPuqHQAHuKbrSES",
  "key14": "4DJMMLcGiAgg12Do2ydfZcSVFEVvziE2wSRda7U7Nkenv8NyB9tHGHCQwuGz6kBEc4VPCJZtBYR23Uac2KHt6aEK",
  "key15": "5TAAUXAoXikRCJr8TbqxngKWej4fRL7tghnNTXYnJCEd15weKoQJB31MBzq2ddg7BRsxuKey5QKrNcV6FaxLJx3t",
  "key16": "2fuv8BN8w2PWBtHZm7xeMHUcWRCM6Z4G5NFdXKEJdzoGpNfqqdw6NiCSxS6T4E9Cd81T8SuJQYFKFBBRvU1DXTYz",
  "key17": "4hPoiPVa64NFX7hsWHNzQEChy35ZedLSzcG8UEb4H9jz5Xd1f5QWkpuLv63YCZWboQQLTR29ri5fnSznMDjviKB2",
  "key18": "2p98CVwgZci4xfFMBZiVKMVxfGkUTjM2jMCSgWgGRK94Px3tS21fFxeiNQJwHLzwvyRPgaE3YhZfu3evvJpMsB2s",
  "key19": "51R8CgrjHH9wEmvB8oZ1GpjavaTeHNMGoUApjukFucEoNafEE9ozc156Mxez6eCbNpMXAzvaTvfWT5deWdyagLXG",
  "key20": "55VuNjPjtg8CezvBszM1SXtzt7FpezZMPG8czTna7veXGQ4SGpqRbopKeR8PbjKPtyxxGJNLUiAxzeY1xWPvh7kn",
  "key21": "5rsgW5pbP9MV8EWSg8Z1Ntu31SBVBBTwysBoF1gZW3aGcawQiFbBB6hAZ7yGJuFw1x9kcvxnfqcYM8sKbs3veUkH",
  "key22": "52ts8buZ1fGg6MCUx9GDAXZX6oLAVMkNu2qDdPLS395SEPuDtexArkftWqU72Szg8tkkVD4JyQp4X1GdcJRvMEGR",
  "key23": "3yJqyyBLopaLXDC3q93SBNCjSyqUx36Tzdg28sYEQaw5E5MdWb4BNHa6HC3Fmgd8WAPiQgU2CH5Vjimoy55AUHVt",
  "key24": "5G6iJPfw1BgfVCaqLbnZWshuD5SRMhaE7YVCUsE22NBfmwKzVgkAYUaoYae3fNxkqDuotyTXS9kBAkmm3q9kJ2kF",
  "key25": "2gxHDTUmesRBGahaUj2LVBQpMRWLP34Kp9qcaZaD4bw8z5bK6LMetyECN5mEm7YkrbMtFnFt1zoTBJ7LBEfeMweT",
  "key26": "3u7hgppR9megen7ACZ4VJo3weoTmUCyFoyr3VTguJALNQX6DSNzmEtktdGiHxtCkZgcnJtk7ijLyFFtEeNifhWCF",
  "key27": "5Dgpn5n9oqEm6kN2RsxtRB7bZmEHwhXQ1XvUpfgfHMUvn5UH2TomEXDBu1hWKYeFA316ib8Cnm5JAb4KGsxxxmqK",
  "key28": "5sJ7zoeS615fixBEozjGcKqg2JMdj4eX3ZPhewcWvoNmt65Ef2nW56mMXBSRjfM6WSYvEeGqw1PSGmj9zJ8vpAR2"
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
