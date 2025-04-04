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
    "g7zfpe9sXfEWRjvxztdy6SAk4ZBjZg8Yrbgie35aHiqAkKEgLfuah3SsXpiUzTpT32rpPXVcTwACkRADoueeXbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "667NDeCJgux6dGrzX1utqfLKg6XnKZtK3uS6ErYcQSeHzUnXj1df1f9LSRWGZsqhX7CYyBnKo6ssCu8jvRWZcMrJ",
  "key1": "65FT4gJfnmjPfsBsErsKScruXN1tN38NhdZDfbVTfUmEgrRvtw7k8ARXDghpys2pJbc2vSpBbz1rdte1LX3KhzLj",
  "key2": "3vteUiCFsvXZHr4LdPkYU4zb7HLAj5NAP7pHyKzp1eNctgNdtvEVxxos2cKUdEwHcisDfwp39XVCSzqEjUyUahq1",
  "key3": "4EhR8AJEZHS7oeKjyBTb93BZzvaCZanKsj1fsjFLHnJ4yFim1rcokKyDtdPjGuz46dP1VTaGLwHBRNTiZtrYGqkC",
  "key4": "33ZJFB1R8tqfy5V6KAnPq28TK52u1nEHuFb1PbPihPfAUK1Ccey5GdEaD9txvKJeAhYo23jCDYMRb1jxxLsofLuk",
  "key5": "31k9MZoc35mcseA2WjEGsZxdhHoziSjBunrpRTnDh9uejJhjTjHrFYabd9yGd3T1PXAqfVLcZWEp6hi374nYSyj9",
  "key6": "vsXFJMD6YL8wDdTXagnTKShxwWwrj3mXwYbnn2DUTUG7nQSSM2qEVQ1Ejyv7oqjRe5TBLqyiQSbcbcbTGMVP67M",
  "key7": "2UQSgFUi1xKL1gTrDxVndDvBjCnj5Qbg54dTt1BD6g5K1cq3WFM9kNhvB3mec1wTJSSiqamuYR1XkbC4G6Kt8cvm",
  "key8": "59S4kLwcAFwrbfdDn8s9YCLztUgm6o1bjddfbCPMRK5rCKGAUNSga5aA7uBbabDKcEU5sCE7vkSQm1hkoyn6RA72",
  "key9": "334RuxJu7bfxmN8jCuZaafditnX1j6K6tbHYP466GHVZxcna2i6kFoyRxTVsebHv1FEag7Kgk985qnjAWQ8wiES5",
  "key10": "3qEFhv6AaXwsKxSvj2hT7ncJyg2TBdv7titbrR4LEiJVUcBYqXbpKZdPQiHs8jqcCx63RwQLsuTv2ecQo3FvvYcT",
  "key11": "52UnJ9q4VphoFXFFM6wKjXNFYZMd2jVwL1h5M8URdEJTJ7fidtZ3MeXVKj5TGRGNVtZA23Sf4795mzoTpL3DXQiG",
  "key12": "TTWHdHiXig3pH3ojZFMaryjRVtNntNEsauLgycv8vGk57z91rHBjm8TUYcTLHQoduABkQBFWsGJSqNjxrqpkD3K",
  "key13": "22os6UxCVpfEB6Dkc38f3S2aUb19sUWtKc7HXpKJjAnV6gdGN7CELo5rhVvomwNtJYczdPoCbay2yDtRSKEfCh2m",
  "key14": "3mSXCgZJcWpSz1wrufqGWkXVqjX3WnLW3NLUfHG1XMQJHJjcfeJshwoCjjW1suv9c5oKjrvDzg2aLVkzT1LPhh5J",
  "key15": "4d89PNsaRLk9WUp8e7J8byP9ypNVADBX1rvVDUAeHEovd9AtEbpDJStLc9kCXt3Q9UqvHcQA34QtaQe9QMAGnQsk",
  "key16": "AQa1uAiRZdRvk2SgRaJMjwQJyxyZHQqbRvPqYGRocc8Zk3afVurQ2ZkkWQRyLCpJ3uefeMFwVQWt93fkzMXsqRE",
  "key17": "2kw88KZ8thpF8Ma3M5maHHVcVmBxoGePpSsgkBg3W6AuzGU3sprfqQQ8LAKFAg1Xnat4cm4Kjo3iKrUhhPB2xUbA",
  "key18": "2LbicZ9ER9tvyNLsgtGxmX5wWyfDUBxhy8VACfdENb7rDAA4DoALco59tj7FPqLbGNkzCsFHSaoCmYvUWz7ahWA2",
  "key19": "2TGjLYotfqqHe1KXSYJ2uDwh2S4yh1TDcT5Haz7LVoQG1HXAW3fkLd4X5x1rhMgaQqGRAkUkrPnTts2PTN8R9P6j",
  "key20": "5P8ksH8wpvN3oNodsf2LevVCbnFF4uwJgukDa7t1Pp2HnjUuacXYdeXswGFYgybeAK3voyzjH5mRqdVdVL5SX2hB",
  "key21": "4v7Rw9ei14pCiZWYcST9tVEStVvfnafKvqBWGCusj9ohjYAXWuQrDeDKJBEiV4NFaYhpt2Mi75v5fXgJ7MbZhN7r",
  "key22": "4ENqsz54GdpJ2nNrEtUT9FnB8crpQfU68Zf86L4g5wPzMMU1phrYJCNiVH3CoP1wBZ7fKQBebB9xCQtnK49uAvav",
  "key23": "2BfqAkhfLgcniPKkAktKi8NoELqWaeN3gsLkq1jDjckYGzDEkAyihTJYRBCbzHWeVdwfuVHXu7oJTLbc9DD89fBD",
  "key24": "5cKBX6k75NAqWjGV1kAg5b4jMUyawUGRn1SdsG33YeVF96qn7cft6P1bGCBiUBPWmuiLnNTc5TFrzxmaCxnhmfaJ",
  "key25": "4vDyvemLW3A7TBahCFgrvRaqUaHqNqACbiT3QaDBgtfZscQ8w7bfctNqXDJhRbGX2rhkvUTMcodQ8K4JKLjwifvC",
  "key26": "3rYfpQ4QfVbsieABWAjhdPc3aPsRDahkzUUroHodz5orbRKA6wYLTSJqGMX1uR5yt45eiq2q9hujjLCRNY9RmQrD",
  "key27": "444rXGRdHoV6nxcjik6qXv9oATxt9ZEW4tchEXnfvReCcXyyEaexxJpoPWMwjMXkXgbSY6MuiFDvNtKYHySrGuyE",
  "key28": "oEdJCFiX1eNfxsMxZM3FWLghVV7Sg34CeqAtPHGuaqgfaS7kBmin7CWL5CbqsLHxmMZ7hnGcQN2mmYvKf83fjod"
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
