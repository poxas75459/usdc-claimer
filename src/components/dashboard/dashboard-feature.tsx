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
    "3LST5Bxof7s2uYpUhqXAp43ZqKVEASwVNKSX7Kr8MQNuey6r2AUPQpbfEEpuQC2mZuSxjLpwTJ5sthwi7UsF2HZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gXv4q5oReTLYjJuDim7PVm1NmKfygGS7du7tYe3AveKyMGMhMoy2aYFEUMyREQktmfp57esY44yRxn9xVWH38g",
  "key1": "219kPCvMTfM3xRVBzXFWDJwzkMcdP8UEwxiXTKLx999Ng1QQsQJFA99G8nHbUCMY3Kc7kasHd5ymnGHXoovChMHL",
  "key2": "2EQgf7J5M15grNx9o1hZ4tFfTR1Ufi2Z5zyyb9DJLVnnfiW5qTyENJnqrTJUHesqYfnaE25VGK58FkiBoZRC1MNm",
  "key3": "59ensun8VMCWoFtckWEpb9TvMK4zAfmDDSqbxAeRHrsbVyGP1rC4pFHSLD7p1qsVFJP66jAnrckxWW8MV5RWabF8",
  "key4": "3wKCZf1iG9Ta78FEv7DfZ3JJRNM7yDyCv6ZhJAeuSd9y2XC9uppySoBNUFghNsEWUvjzhNraLbpYAPEcMq4aYqMb",
  "key5": "4S95znSLNToD4ZHgCjTV8kEP5YjLonfrPmWctEBAh5W9XEjKxjWuBdwzAetQEfE2Y2eEhu19hsYwe5sUs72MyP6A",
  "key6": "4ViLuVHXzq38stwtVGQUWzjcJHxsGUHxF13h2EGH4rf74eB6pRn5THxdgXQJjHUc2C3YfSnzvXuwZnVwuNumwCQv",
  "key7": "4BppdFwPvwY517vvvdpJtE8J5tsMHaov1Cgu5pTEF6S8EAUt5DqMEqPDQGDoQFNMGnEa7c8Zxv4DhN7weKFNhntM",
  "key8": "3DSsjrBmcAMVXtSmW86epmrP9ofrLUqrMspQPBNZAqsqNTe576CksHUiYXQCiANj24jCsFfeT6GPi6n9HegurCHZ",
  "key9": "65k1XncqMa9V1TWi5V3NzN9tiFkrnGpxa2y79TtUY2rHnnMUPnTDordgp6N7CmF9vyvU8L3NCiu21wHzjECR3TAa",
  "key10": "2hc9NJS1skyp6NJVNdvLkshmW1TEew41PyyAs7MM3bhsxvmt9rtspAfGU7wNQPftWN3XbmrxXGxcBkfQYYvuECBt",
  "key11": "31nQ79jKcRTRezkfoipqLdLfzEuMKH4QFVEni3RsuxFWKoKosqMs3Y2rKN2aexQ6Z8EBmHVdKWfDeq6ddLharTc6",
  "key12": "k6jfA5v6ftMLhCZwuWvThTXkDHdzH4MTmiSG4ELcxZtv1Mae9nN8xtUjTrsqYEoR9k6LAGzESVrms5B81ZbJQbT",
  "key13": "4qvbPLCzLmsYcMN7DZf8iWS3mnuZAxMmGNsC3uwFGdvJVSPpgcB5ZpQinNjV9fFMib9eA7MkGaibMsxbndwoZ4Qz",
  "key14": "2G1R8gNfxeXKQeeEuK9MXxUdyN5CoCMB4wjRZHEtHow4VnghLAno37qAJAeU9pRhDNuY7cpXTpL2qC8L1K3HdqWN",
  "key15": "34SjNWwmYw8VBns3y7Xbgf8Y4UTSRNBnqGyKSNeuWbrEDj5wPGVvXSgvGS3ztb3W3XetGqNLi5dkLsf5QfWbivKu",
  "key16": "25TUf2WSA3bwHeX8rp4WwgLvbyvDEUkZh23nDWFMkft5vEEC7gmkGHzqMijMFvrofpinoxYHAabdDepYTMZ3Moda",
  "key17": "3ah6FydeaeoT1ojCjgSZmq2wJq6swfaUDBM4krkBdyFT3VXiUMejeUSKKNBeSKhkaMTZyvsb4XdMHcppqwsJwXLM",
  "key18": "4vWjUDLQ3eKAhrFkLJzKdg37rBH73vyUcxizEnDyuM5Yzem4hUuhnsK2ANucotgzZX9Ep7FRnqEodRm3sH4obGAv",
  "key19": "3hqEEeaJYQMS3xWF65UDpZC285xvJfP3HuzAAhvjvmWHKNuMP2urzRJsErk4EUwMSHipr2kmfUEqC9gW8bTFRs6R",
  "key20": "3Nzo1bX3YJU3EULKXpoHYed1S1jdeEtNStmWJZZgiUSy5HGKfmHL1T8sXU5CNFu9fYWPfYLrvjVo13QugLfr3g22",
  "key21": "kC3twLH772rPiyKb9UK3x1jB3N4634jWaz3sfk4cwgsDoAAGQGXRnpZkX81TPYtpgQ5c5JkEdGW5csCJ4gBze8F",
  "key22": "eUgdpG4tN2WT7JW4SvbH6hndsYLPTGGYr5Fpd8Ex7tv8VaWVU9F793PdsUZYPNjN7BAvJdqyTTQV1BXJSu1YSoW",
  "key23": "KyXniPxECcemNU586zAETRF1EA5wARSwRLjGZsFHUt4uwWxF8jPBSLwgQxR3XbSMiAts3GDh28EFR1wwWEfV3JN",
  "key24": "45JpbJSiJwdnu5yGphBaRgnmv1S6cYwL4rRQWqjpTNjQYCJiyT1aafTPG88NErZk6RgvVpde5mGcpqogfiwWBANc",
  "key25": "4V53G4H2Y5aAV7EucBKBTUCuWzKzTe5ApCrxFR242NLHLZFnYckpraEVtvCHykMgsykJNRFsf3WKaQwELFDLjhG9",
  "key26": "3nusqsyvfYbiyg48dv59pk1EjrqrB8ENyRBTfeaAYXqmUdjyxWaqtQrJgFZEArk1irLjBcu6tUvGp4TYi5NUJCkz",
  "key27": "2WpCDqtSDzSjFUkeFMohAboGE1U2ovnsFDr9CjmPoLFiQeh5LNpgnaiAX3KRAGEELVxSyFXvTZ44Krx1fw27JpPg",
  "key28": "5zaT19qo3LqLRqvFGPuLhwYtTQBxjTeYVLvH6nVxBzE15PP49xjgb4gVAKmT347U2W9uhXM73v7tu65sxBfWuFAr",
  "key29": "3dTFv2Du9F7nb5mRmfZnAHecxHc4rabcPEjE4ryCT1NLih6YmufSweJPXVJnNNsEW2KyEQ21EGBCftTN21LDRLUN",
  "key30": "2xBc6JcmHE7F6nAJddQFYapHrMkywzNWh5xn6UNxNVCgbNMzNNfu23qPg7VFP5QHLeniCxarDSQ7ZPYL4eK4fHo3",
  "key31": "2pTAEcPjwDEeb9ZPLFdfMzQU5nTZdt9HERArP6AGxqnNTmwHmRzGLrzL6JvbUMHNzmFcnAT5K1iraxPpoffrLsVX",
  "key32": "64gssD1QANL3gTwaVvAm8Ss9nwahtF2dKktyMyWnPLh6h9N5d1RaNt3mQRg6gP7dkLsJ7nmDt1ZvQDYrKwYKZu5R",
  "key33": "4Rc4CRuqfcRa4QLmRKYvJqYKkMKUy4LiNV2u13D8JNWGS6Stq3XSjDFWSQqLRmcqijjVveovuVAWm1oVZt4HLZdk",
  "key34": "5sXzLAQE6a6F1YsaMmKiX86H6v73UkfhqRRyay3yHv7DcobgLapkpcqoMsCSmwXvJPeiGMfz84ntYs3Tnnt5Fnv7",
  "key35": "4L1AbWUsdBDNnLAFWa5sXa9xLrCDD74ZUUTfttQqDmiL3eYVyjH9oyETZqN3c6NYfUiGg5JWiBaL8E6Cf8aKV54A",
  "key36": "523wykgCkfCHwiQnbv3JeqMiaaeCoccLLkWFNebPdTRMJUmbd9a5J1aVaQb3Pu5CFWPsbenUh2PxoZJZBeW4v7Bh",
  "key37": "jv63roexYAh2eYs6nCcnkmpGYuw2W5uhubhoYwd3Xc12jQJ6DPYFX19khLE3Xb9LM9S7iZiG69brZBkSLZMD75w",
  "key38": "3snxgFQ8tU4FwHhB1apTUemxgyZAWJHDHLyidHTuFiuEM3ZsjYogvM6L1KxChz7296qaVokGsgT2j8NcUXnHuLvJ",
  "key39": "2UN3MjxuCK7JGWbKYSsRfi8Cxr7BLD7hkMFDPvmVKMo6E63eDofwqUnTGvz9sB5YAwmQiAotWaGf4rebayKFi3V4",
  "key40": "67LPKVpQnECjsLht7bdGJugA44fiWurDZogk3kP1n1M7iXsqhmEANovvmwNwepzS7b57n9THMpYJMNkvL9HLxGo3",
  "key41": "23WHJfKShypu7vjHbhVYjLMxaRDJuec2go9tHKpVtyEjyHLL1MUT8XuNNqbAnvNkNibZFx3WGBsHSmJKWCcscbx6",
  "key42": "3VbvhyhoUxkE1pBKCkZN7MfjkqF1xXrJT7hYvuy6tWUMJNXtR5oNZWdFhdzRZV7e9jdMKTsFc5b9NRHpr17AH2r9"
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
