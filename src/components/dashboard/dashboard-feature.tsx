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
    "2pzKPYEmCmbRtqmVe2dxpB6KExiyk6Qg48HiDA7dQ85rNRuo7nboKJNU5Fi8jXPM4jtNKRRnGZQeC8wPwbuJhkNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FH7NsYUtJb48JZUfPExhKB1UwmWdHAQ6mhHHTtAE8g2v47LWjuxQgWKBogtqFs96kAFCudLKZKqCf9FhX9hK2GA",
  "key1": "37LCLPUz6mRU7dWNrg3iNdSSxgyJkCmaUjCQERW1LG9Us7CFSakwxvBCgjH1eEgy2FpHWBsaoucQFDSCWHb9CmuT",
  "key2": "271rF5rmVG96Y6u4QBHBjUz7doZ9H2dubGYwuLEXghLhc64brXu3nT679jkRQGqwj1PoPupeBFozVhjtQsebD7XU",
  "key3": "3HaXa23YzDSnVeHhLMPYdsnutBUCMaf3P1Viu4m4KeTnmaaDv3nNXPtNTo4PtWbYy7nBRjYWCKkUG55MKi8cuBuU",
  "key4": "913Ke61qn8uh5c7evYqLFfwtpDtMs8U5jPvFEthjYFVz2Juy2yLJnJhp6zwUhE1HKkr6MrwLNg5PYEdfxoYtqE5",
  "key5": "5fmiYFYxzKpBYnWfQfQNXH42k9vhWECy5pfZ8PspS6MRjL7vyMbMP24J3zc2aDnuzAjbCLtz8MyQg5YhNS53u4mr",
  "key6": "4jakADqGSJa4fE3XH15P8ou8QaU3Nzrat6nvUXnhpAi39KE4mAMuhhL72nNPihp5H6FnAe6UiWyDmHt4E1rd4KjD",
  "key7": "2BosiuL5Z9as5k5kR8e8UdpvHcMWWtaGbjvm5EE3kySWeARqJwnRhdCJAuC1zfnreiCzthpJNhnA1EErPNfSGRzj",
  "key8": "2XA8VkAnMvV6p8evm26UX1f7LJJkW3YGBYP2pCc18YYAbGvn5YaDHP2Yarvz3aL4tSorZKoKfaQVhVf5r9wLGM4Z",
  "key9": "4LgUcprTrA7ytR24GxfjGx8SxUhdvRBBBsBApu8GRqWy7iKwLo6UCR8u7oz2RK7bdxGvXUWBPtQFMwBjsWcbJYWB",
  "key10": "3CcQik3y1xnoeJvWdhSEUhtXbwcUdqZoo2XhKuK7DxbbdWEtvWVb441Zxb9Yvp2GPpvA97pVRoZph64e9LNNCkzL",
  "key11": "uCwu78LpFH4GHGPEFHYVhLCteeJiZnSmHBgzoL2rmDViTt2xqd7ZyMJHTR3qZ8qGZ5pjiAoHanqboTMNL7tWC4e",
  "key12": "593bXGt4QNuM12s5XwPLJBxjkFH9mVbXmRFdqNZDZGXLnhmdyDkSSHyQdSWHcFubaVGwg8fNVSRcEZ7Gq52V4io6",
  "key13": "67gAwEtHBDK9cKKVAKwzWgNp7PsE6aScE1Jwxi3TPQUvBYKKa8EeUJpsLhGrwwbptFnTysr3Q6H6rFQ2JGdPJhQ3",
  "key14": "4D9GKUiQaMPWPcAbMhxLhGp1ea6YvyDsPNmqK4PrtjVyEdZNgkEBTLG3CjcDeaCoS1Ta37SaAnvPqXBVfgLU848T",
  "key15": "4ZLejZSic5fATkhFpbwYnFQNyCGqJ3sro892VQjPuY9EXZ6tK5kbN8FMcvqrCpkHCxY7WrEbWrYu683zJCHNhfDn",
  "key16": "2nzPmnbjGJaDrh4EBF5JWFVNeNnGHhkRXb3WL2nEVRwdXprKoSHRZCPykL56j7LxhnDARHyrD6qLyUsvucCZjfvE",
  "key17": "5vt8j7zdScExpocBDtrPYEREqJknxaMrcjhwDsbAx6w5CHNv4hEoTzvQHUnovVYSngj2yFmDXEjSUSvKMaeBiwKp",
  "key18": "GoSFvStBk8HCjLTe2mRrqWXaLdj5PnYgs8PZeM3MdSMLGQo3m8pfTeQVtXJySTywyebJ5hMCrtbybobmknpBRWr",
  "key19": "4QjUAtfY4eY5P2KYYDnTNjNX6qRvGPAFP3oZk55jZZ4GsZqYMVopCYDfDHX2fW1rqTo7asxeYqk4kXgMrYnp3JTo",
  "key20": "4PGcsfQsMe2jjsfdwiB3U6mrbCbnXv9aXtLbTJEmBh8MNnw7wLdY6hfPMTAk65SY3xrSZrQq7Z8potTpU9CTsjuq",
  "key21": "2iaQFFAnL4eyQmbGLKSCgujjFMBt1dYsgPLiDobKYN6giTzgkek2HMNb7mLouE5RRndQbYTuWg5WAeS1qU3w3dMF",
  "key22": "3hHGFo4TMRkgmY7grn1dm6bE1UeXyZN8vq481cz5eY453AHjf8pib3uKnK5C8QwnwMuAPAEsHo5DWAWXJKdD258L",
  "key23": "d42nEHZiyZCzdeAssUP64jFJ9TAe5jXf3NDGJ3av5azUoMaDTw8rWTjz2NDMJYggEtrzdVx95wKhxbsahMnz4wC",
  "key24": "4JexLXVuuQY7xwRZ792wvnvJZ4kDXzHrJMUKPApFWJsK6xm7sfPpub9x44QYJoYQVGV1ZJkpDpxgGo4n6CGE42xh",
  "key25": "R9jWAmnQV16TaqvMDGVPsRT5QEzET1qhwAMj4i9okfgjodBsajDfTQKoBdyKyy5tkW9iFQXbANrPdFEGXLJpgho",
  "key26": "JBUX6LfPFpDQHX43ZSxNBM77QX7c1GRCGyktvqwNLzUx1MCqKPT1VbjBSBqxnJSbSHXCmbaG8JEf5BxDrudVkEW",
  "key27": "5QFpnCbEaHe9fHmLcUMECLRUgHr9CLw5Cim1vHHdLhLUDxqdvgzFcEsedDTb7zw5aaCd4pBLSuifmdpaiLMjDkhA",
  "key28": "3m59NzpTuFVtP3TYjJSc27bUEqTbgPRtwDczAurEvBUTMu1N67MBcpTjckyrVwm4Cbba56h1DDefmApwLdN12pyx",
  "key29": "4vzR4igSujJM6oNWBKAS2CS797voKga7wX9GDwV1P22H5FC4CDH7cbj6UppYftcmFxbtUPRUJYgX5CubUBPrEkre",
  "key30": "4ZAnCWNwCJ3MiYiT6zrKverb9AZruHodWDJBYwHTHiFWGRrM1m1SnYJwuFqQkR7Gw1AHLn4FzQeAuftEt82innjK",
  "key31": "2aijfJxt6164BKqV9jGKA7P1jdJv7cQNDxiQXTdwQPt1Kw6uovUiiU8KZGtjT42vui94werDasvFfUnqHinC9Cux",
  "key32": "3tHsgrRzUDvXwYh5DDZcifvr7SE3dLYVNx4qciChduc8aBW2nicF9euMXMT74SUCa7dffswvqAEqA2ang7oNHMLj",
  "key33": "dUMHyqenQELn8r8Qihcyg5f4RAei7DM3dPJCbL5KMou3dy8NLL6SBHinN3AG7LhZ4R3w2GYxyLV55BiQCaETCdP",
  "key34": "5PCg8ZnoZoSFsjqjru6zDTeMpn1sXGoXAVQfKDjKCEy5dKcmfqNps5qk5B7XyPt4As79fJZqZaQ7CKKNHv6nsdqw",
  "key35": "3PGG29oq9zPhxjWg91RBRAPjdpKAqrf3fx4keoC6p7o3hpTzY9y7UmKXw7VwonRCj6muXvJePaEGyKYTpg5KLpe1",
  "key36": "4Kmtq5gH2NokGhoAf35ThQRLteND5P722EZ7K5PThKvqZijVUuKfgEn1fTcwG5MFTeg4PS7acxdXtoJfLaEgTpzZ",
  "key37": "3nJ17gUp2nEexZg4vjftg6QENCNtCwiAHoXLvKdad64XaaLT93EMHXdCYvw4zzgHKhtnL3iSiaaAXD9eSrJz2zSa",
  "key38": "5zuTF4Zqcm7A4xYqYKUvwsn9E8kgyVt9DF9PPrEDpLcxNNfQYF8CVTNfoFfJHHbZSG29eNLpDgb8bu3oPp86HZnb",
  "key39": "3tHq193eWijcqV6jjTApKGjj9NCM9nk7GrH1igiNLawrLssqdBQcUTj8GkPYBdhE67LcobreGHNiY1cANqJPMcX6",
  "key40": "5ZoVmSbmJeshm8t3jqSqd51DGA7u6MtgKJWrWxN1xQnh4vwKqpojDf1U8W5X5YF5kmBgeKFvQWneEWWDW7YB1xkR",
  "key41": "3wrPyqU59wBan6DcxKkQDS1ZJzfkQrU697dN4hwiTHv1KjeHqNcCQCozKq7bp3Y4bLTBYJCvYzFbZZ7jr6U6zmjs",
  "key42": "5ZKtpLVDYe42uxE1F5FrQdeYg8hEbsAsTDw3PexFqeFgvzfcHSmdbji9Zd6tE6LYy7S7zHfomHax5ci42TL44XBu",
  "key43": "4v9qcV5MDPSruZVbWUFz51K16QDGdMQcp3L5AC6spyaQzZCNGvjzFQr5knUDBD4NB1uovstLFLxzcA3YNfEmJAoo",
  "key44": "58hTdHU5cJjrbijdm21RTK6JdHfPKw1xCMScUtBjVK4WqzkfwaWudyatAFhxNN4KFiW7N5gJuNEfv9HV1BQuYxMp",
  "key45": "5dnyPipbhdvnFmmMLZp1aTwzKkan5BrQXPNrbzYtvvhn5E74gDwpu2j2aMC3AKkbQEwyCZoszgRDbP2NNVrUDYfd"
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
