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
    "5Sypi1uwMBcj31Y68ynRbDsiJYEjib86Jmkdveu4eupirn86fwj1ZgggoiNKF7mFqnbvAU9YawZgnV5X4Uda6poG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56atar1as8dnTMWihV2XnbKZHBhdoMNJbtgy6cCCSC3E2LKzfCeE63onxAB4fVc81SZwBqqmJVqkj974YHQEZmVd",
  "key1": "2vmN37dqT3jGA56AFruwNLmz5f9L59eNdFkioLBMorMmEw1UnHzqyYdRprWr5BddK8q9wV4WyY6qy9w9ekvp3PVH",
  "key2": "2jeqUURTp4RnFyj2We5qnsH6QbQ3ZZ3GntooeQwV5drunDA8sqqeFgSAvNgdPXkaaCjoAdvBgMyQX2Zh7gk6VbPh",
  "key3": "4nhUHADy3AiVgNHqD91nZgnDo4SuFHRaFYQ97LrxvnprKmvqTyHpjmKHswdKtKim8EtR1kKanBE9GsVeA7PzVznP",
  "key4": "64LyR6BS3UoaXQNFEAiXxzebUgYD4PotPyLfLPgip5tUWkYA5ZvFTmahKVzKM831WJVgW4wZMnsdwp6fzsdRGrT5",
  "key5": "51b7KDnXYDxHurJ5oYT68Bz3dGZjHMXehkXjs7ZyQWLvKarJWjpLkfFTJHqaXaoeqQ8BBoZ8bagZWu2YeaptHN97",
  "key6": "3oLQYeoE5P746R8fzzpTvdbT78Gjw6uSc6kBzsHwhTbraQZmSytd9TXWj4Txhtc6bhbc1Eme7HpAMi2TVqTffgXE",
  "key7": "36JaynpdZrFJp6ncFFknPbT6nFyYS5dZbdXsyMq91G1qMDFWN7s2ZHzFLXUGFsFJRHA4bTvVKKyWvM9JiMnEwCKL",
  "key8": "2Li4M4JVKiYaHaXSAfg7HqjunJqz1iix1HP8zaUkoMzUotWLxgjnqbcBxCi1KEYwiJdvt84MVVwxrZck2F3GvPw7",
  "key9": "67f987nkP9HcR3NQwrDSTfZ5ekWHY2GNwNzEV66Jz2iW5NujUfaNhiv27R9niQn2as7uKMfFzZcqudeDUpmr5J1y",
  "key10": "5oAoZPTaG3oP6Lny9zdJr6kDimD4DpehuncYKke3kixgeKmyoPQ1nB9JE6HsuDi4SRakcJ4XdbpWrsW3dNQ1hiYN",
  "key11": "5ve4vkLYSfRYokqtYVrr98KsCE5AQFyFxEpwMgdqU3o53KRqGLAv5Gapc4nzKVERw3YhwaTh1yfdxyZXKECmawTi",
  "key12": "51tMNCeVX5N7RXxFCEEfujaMcNXZLfRiXpGLkkeZRaVzETqYKdygwKzAMSgt36ZDYNT5d6J8bmZjNh1xBFpBhsGY",
  "key13": "3u3XNbs6xKnQgACD4QxBjUTedRr6Ch7x8ughWs61TDy1j2k9heMqupk1mtbS53LqKw7sTKWVW7r3Dt5EWXoBrh9v",
  "key14": "3rp2qZnbXtVgxwpK29b7yrqaDa1N3UoqDacQgy9Q4kdoLE2mFJpdQrrgx7fvq7FCvvD28abiqPrgQAmGEvuRifui",
  "key15": "Q8eZWRZwFLP7LWoyMKaCrdTT3f1DKS2Rr51cj7neyGj56qJxGkQBbAbuFGXbFKvsEeaPnokxtutZr5xrDnuTZxr",
  "key16": "3kuLpVNSddmZZwoYV5Pxf9D8US13DjuRQf9i8e6XjNyd7Ny54kHQyEaSkpEjA6ZHpVTzFUnF8zB7ct1i8r7vxatX",
  "key17": "2RTorahikzGrfYSrkPTbR88TeuWTPpMuN75aYJnG2koK6mM7NtMgg4V5EtF8KQHcnhEyzXFsNmVeWAqMn5UvN6Rw",
  "key18": "Vrv41CBtiduNNfcfKuFqSk54fcBkjG9iZS2X9SpwaZ3BY8EPupoP95CfvCXqbNkLvpZxJ4JcUzbCZucUAsocwhy",
  "key19": "3yUvw5ZnA4c2bLk8ATdtQXrNZRBhew9ECQQ6ntk5uPJ46WuZB1WZreZcTiavRULjZUGY5akkNmhNtEvsrcM7kzU6",
  "key20": "LApcTMQZ56tnajNTt7k4xL5YUDpR845m8vTuFGCbUXr4bSbMY9vfKxEve6McwxbmkevAyu8WTyrxXUXo2swsJ3n",
  "key21": "5PwDTzCxiMrMqPsr1mYNPDuibVzzQqtMAhpb5TAf34iJcUPQ5VPM2sjQJi6VuAWhpBuqikywX6NtnqHuydjLDNn3",
  "key22": "2n7iwnEf4Mxhsu4V33FowgxdXnsBfEDMDwiPNqSRZz7Fzs4hPPFATFyCjXnDZGGwmhZbPaQfyuAHVGoDMaSEnxXs",
  "key23": "WeiMnXEboS48ioMDZU3Vso59Pyd8bhoiVGKyyQtmvCrkUYRNXKSAKPuGdDx5woWrsgBgfEqnoKRRK76yHJWVga9",
  "key24": "3iptkhB3TN9Pun6ECp4awSgCcBk6nkFhjb7wjKB1k87AJXXzeQgr83zzeXA1XiCM83un4UHMgEZJvi9kwb7FjxHx"
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
