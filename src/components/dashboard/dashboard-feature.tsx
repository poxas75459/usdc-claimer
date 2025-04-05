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
    "3KMsH1Z8LWgxnaxEMhHNUJCVjd6CXmHv3amWhW3dCdA3sNPT4iMvKxCp47XND84CHgCBFBrDG8sBVCnyGeSbRPGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZivhXGDFw8dFKExSJCALVyoH6YhXm2FTsxwQ2vjk5AAu72TeDvccr19Mu8WhzgzsmXCd2Bk67zWK6fNS68UfRy1",
  "key1": "2HH5whEZE8PEhqXBoKAVKCqgjuGt78PYku6yEfNmrwfzL2aa6NnHFRh579NL69GuDJMuUSqrQdibhqa7ThGY5QFN",
  "key2": "3Ws79pZC8ANVGb2ZgYWpRwpuA76RcjWxjK2Wnf1z9gHWmidhcbUn8nrK4AgCZJ2LhaYfeGsfLtfC2uY2yFb1Y7nm",
  "key3": "5DSvGnW91oNMpGfPRA1cU8HtmHNGYvqFGEo8euyKnE5rBdnBJVERoBWd6jR1yyPf1LNKPkNRC1VSVA4WmkNoCj55",
  "key4": "2Ec39VgXbh39CcPJb5UxFVDkuaxSW3iQYvJEsKqdsDoeHPqnvjXyrukrcgfXmRbzvunsZZYByP4ejazUSjrbGcec",
  "key5": "5bUDCPsqpCwCvXU3idfZKCTnAAu9Wr3g4jgzs8naaeaKra3BsqykRajrWKVT1sP4NYFH16WR9Xzz7jEzXBxnuJzE",
  "key6": "3G9EMvp4PamNeNx2FUPz3GAgY7HndYJa5yLfGtFgx9gb6inE6qrWRDjnSuH1SHN1EkP3dVG6SRo6VVzUy59Kx7it",
  "key7": "42q4MXag1Nq8QuaCz4RagMFNVW4vhLFyMNCcnojntosDgRFhFEsr3oyDnSe8YD1tEmnzrEd43aeXRzADCaZdDF47",
  "key8": "4XMRmiuZi5qTAuWqgEr746iaEsrUuD5dbnsC1EQtQivBWeBfEJWBxKVNu57GQoARm1aL2jfbPDhNYGX2H2bzTdRp",
  "key9": "S1gGxWf3FM9GGxhnfpmeHz5r96CLZLjdKhvqC8MqHzqTouFdeaerQgRwthTQ87ZSQkGKpAFHsMaKXsrktQ9wKz4",
  "key10": "2Nt8M2yxchodFQU7c1ytg3djxaP82chN3dkRfxTypnZBzKWnGoAekqpKDNUGswUXrxAQcL1p8pwYSksbMfAmWaCk",
  "key11": "4Zsb81pciUw4y67sZsvWb8NqqhvnHrBdwEqBuC3vL8SSvSTxxNSznhQoPsSSMVx4rNJYNFVS6tSAqxLZ39TeQvng",
  "key12": "2yJUeUkKVoSRrdo2tAoRLXdzpvQRE7zf7JgCG3AQU6guXWcT6yJeNfdyc5bcaRBKyBGfCzTt53hZuZ1rAW1PR1Q",
  "key13": "516y7nooJkwQngTuaQmStGaaSizqyvSqPccd9U224YHn7Nktu6BQcnkDrQB6h1QSVZztWDmaaQmbNtQ7L6JbX3Jk",
  "key14": "3ubXTruziDH69LWY5bUqBZfUsazxYgQVahmV9v269W3CAKkooPzQzhNx6yFAV9C9UGexob2t9G18RjAYsATqG4dU",
  "key15": "e3htchdhRRZH2pC9CzjftMdqmADede8T7PLhVUjJpNvrxDrEgyCtLJ8cwFkzWkYTvrxaq1xYES7eTBsoo8yvr9a",
  "key16": "4LgjTUeKgTm1mZ7USJvcuF9GvW9HHwCR2SuiVQHsK1Lo4ftqgn6b33JfsQiYunwggQnaD18ELaJbvf7ffo1Hu3tx",
  "key17": "3fBcXYDpHxJJVYDdnc8jWTC4gLM5ha9ayVs2PHBybJ2CDimGKFRDRLnNGwkk59zpLqhz7VEAm8sF5mZHF1iXQrDF",
  "key18": "4FpbCMJ1fkzpFDngBwpVc2JKRNFDx6WZ56WnJrB1gW5PjjsZWXPP2bQGQ7F4WWnhuvDUJLh19G8og3F4Lv84rzeK",
  "key19": "3xfRpQVdNdqwsppiCSo73hTgAWcYg7E8JMSUYqHYqn37swbmckdBgr48FEgiivCXb3w1dybVCpYm3PMCcEUxgbbQ",
  "key20": "42o19pfkUrq2D2Bgnu6aQRK3VxGKtgaXaNYKZVBLpSebaLAKdhdU8Exuc2srboFpYhaG5r2JTz3e5tMocFt7jQjw",
  "key21": "67iVd7CDS2ozg7cDjFThWgJpBvqZzkc7y5GzBvspVz4ZbZq6WiXKcfm6dQGLyfLGMVwnFcetJ9HFwUMpXRXeZz49",
  "key22": "5Uerk1rqs2FLdkiNmXdhnP297UsE2YaMpeSWXbivW5z1QjZW2ZfktvZDWSFqsfmGtsJ4fS3ZWoTkYGz2qnaYgXAX",
  "key23": "3EpmRh91XacG3mcFQcffarCRYEnxrJhAXx5ofixw39WJvFBup4ot6N2KHYUUw1PB1QNHrQk1dvmWygw753XUt1XF",
  "key24": "xSmqqqMnozYEB68e9S9rysWC2ew2SVHjLnQ37Q4PCzfKkeHHBhEqpFrNJnAYje6eiUw93Dc5TcSm3GCgjiohcs9",
  "key25": "5mxtnxgns7Vzo7t55LGy4rBr8esZ4pN31nDYzny1gVo7Phsx3GBCyp8AhXdzP1mpji3uvEFosBuSaChQNfonoSmt",
  "key26": "49sFaM1YXqkNiTNkz47wnYiQtsfF8mjjwpmc54wS8aHo5g1swoRKHHmmH4QD1BHosj6rWheGR2ofJFteWd7SnCtM",
  "key27": "585xf9uWWHjz9zYEQDKSewaT9M35ireXSe4LzAoZZu7FJUGU1GfpzeStKzbx3gY9aWgnGf3vHv1j25LgzXG1ny4Z",
  "key28": "4ULduUojfjiksP8Mvz2qfDhnC69PackN1qnnFyj3EKTD1mq2sHzX6cC3Hs8YHkyi2zMqA3ZeTECGGNny4jiaFBbW",
  "key29": "5CdgZhfSMDFBsKb9wXfiMmP7vE612XTv7PjAEyX7o9gJcWqZQ9AfgbvLFCG9du3dSKraqsh6vfgviKoKtUVhWqM5",
  "key30": "jXhMB1DAMf8rwociaUViGwkNoo5UwScvzmWYSf1wN8dUGsdCdqkmqMpAEMDzQC7bS99hyxmXNV3jQfW84wch3hw",
  "key31": "5YtamRRgWo781UJ6DwumH7UgZqsPmd3vps4QohvUdpvqxubk7Ft6oXQ3DsiWPVdLE723WQbbEmXyU6SAowvyjfJy",
  "key32": "2exV4VRdFJ2Bunctu4snQ62bZs87hpHAjvzyp5EgVZqx7EnAmGz1wf4HRzXAFpcG5aygME5njWVyRwXYHC8Ziq4K",
  "key33": "41VRJZoUemAPb3Q2R1DPXV8QZKeFonCD7twWiEU32YvwLrUCtd3rx9wPBAkYU27jMcj3nKpaft4Z4UrKY3Jo6dLb"
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
