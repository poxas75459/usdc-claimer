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
    "4ZDNHq98BoeRHU53piu967p7RSpGYwV5Xdr5aANCZBLPVQN3u8qDgEiAacudm5RCNe6As7UQCVD3kRhw2fafd5N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmkKxQUt8Q6ZAUiyzHtjcgCRtGfLJZ3WbCtcdWWRefLm1naBpGpWmRTEjTTuJw9pzVjrpXkZ6MyE2EAzCyRE1bg",
  "key1": "4kC8cCiuKJL3AiruT6qSE5XijoPeM1816i2SQZCZAx7HrW2ofDaGc7u1VA4DJeAWF26yBpWW4ZTk2ooPhoVjUghZ",
  "key2": "ST4e4siWvXmn6mgV8KMwvBTAw5StEXHzfsWp78X28DGZC9TzE7ib1XtX2hDfpCaZTq5uEXCwuwpLNj1t7E9dKFZ",
  "key3": "5XoVMWxSBXktMcc2Sbjw1qPrvvsHcdv9AMMDfyhWVJ21wES9eL4VcLsuHiE6Q9zG2aiU91Z3EjxwDzJru4iWXz3v",
  "key4": "4EeYqbWuv9gCHeAhqKzWowFKq61itjvqoJP2DaC7r7V4gVY76SXZPNcP1qbJXUtY7Rh67CaLNw7L1A7AcZSwjn2X",
  "key5": "5fn1tXzfq1qASU9VMp1ggUQUwpgD1nRcHaAatB9MZfpxiBwWmiumxafp853fjmZ68nC2nd64fhh7joE2pLeC2FrU",
  "key6": "4CiBxXf89mqmMcFvdJ8JV2f4F8UDVfMkp2fyYBeVPkvezjzaFZDx1BY3aiCpYb2LbgSTeg7V1KeiHmmtSuNV1rze",
  "key7": "3GC2mSmP2P3wXQvF3gW2pCA8LNfBPgf49xt8waH9km1NBySAhjfqs1wJ5XtbgUFsfKPbpWdLxHjf9rtRj1R4V2AB",
  "key8": "49cWPrDQ3zPM5dJxg1YmwRPYnvkhm7TZcfaCWnE7TPRoeq6QyaU6N5C9qxHs7wviQMwuG4UkJvtbc8b1XJbxwP12",
  "key9": "HSVVJxt3De33GSft6vTa5NLGfbMhNRCmiLjGdtu7Fu3i2Ai1RKmLv9WvpZETBpvBpW3ZXtPXQRbgzCTkoCwgPPU",
  "key10": "4Cvfo3FbmsREcJhsBizHNCMFwyVrcBZRBxCVQ8TxK8pmnzHQkFmCB4kvR1j9QCU5qX53R8u3wUTbXe66hdCDxYz5",
  "key11": "i6gzsJ7NmMUmgCNf9rsVvqHvKYwUGFeE9AedBvDV1PBsEwt1237zktGSzGSE3Ev4vgKGAHGmaMP6tv9z6KkkcGF",
  "key12": "4K397fZD3PNRKQWsrHLCaexdgsMUtawAp695mTFmm2WH2L1s6EF8E9YkL1HnVo6B7U7Ko3uauGXsjarFmEDcn8WR",
  "key13": "42JRhinZFLVQrmHAdLWCJRhVqm37kBhpSdaEAVNhdydMuCsZaD2J7Lsb3bqQTza7dX5pYUrHo4mAGdFwPQPW7iyX",
  "key14": "zq8Xav3TkjNL4E8PmgCQdc8ukV7Y89wTMJtHuBKwDoCkeAoy7vZCUB2uYURFF9SMuxmFVtmqovBUNBQforsd86w",
  "key15": "5bogtu14658s5AdxBLcL85TbQCgDD4nZ7SdeUkcUZaKczKh8qXboJLv8KJxSJvsf19hvRoKpPmTrRUgq6a45DWzf",
  "key16": "WYcP4CQh2BBYFSYmyHC4ZmFDBhgP7P5CrdBTxpNGWe1a8sfBZqUNbcpabxm6wuMbMtCwtRajijCWcZriqP6ytgy",
  "key17": "3otAKsT1rMPyscLnuGvMDA4rUuuHCJS1FryxLNkBZNNFC71xSdqNoADZvmDBaoUiqhg7sfXbzcNduPtTe2W63YAp",
  "key18": "5xMGX5wUB8YZ8QwW3JYdTDWvTh2VWN3RfyphMqBeDuDTXc3ubZgJyzJGGNLKbnCwJYMCQCbCkxseSHEs8rfWiXh1",
  "key19": "2cksF4zyjH2pXgZ3MHsUwKcFYfzVsfrQ7B6q51k8JQBHfhzqX2PCN7k5mcV2HkGAQ1EGTCtCz7Ks3KLXZ4BXi36n",
  "key20": "NUQUTEvZai9xsxFf6zonB1YkQbLs456gWrZZPNu1f6xpx3usMcxVnGEuCZYrASKzQ3pxMe5kYGKhPbE9rGVfHVB",
  "key21": "2KzDso4yMsMxS8C9KgDW9iEFJHMwn7F7dJKQqyfaS94fVwL3WbjS2RCHY4PUBpVoMy6EMmE5NaJMREY6BVuE8urZ",
  "key22": "2gnj5TAsoHKZ7bynfC9PLTq1EWH4Qh32yNYbsCSSUqMHwkXJ5USymUDWFQcWAs7eP7V9GV6cKdBay2LDJz2PKi57",
  "key23": "3EFcP6Nbz2FoJdMH5Woe7rtYqGXS6mVoZdGP29CYGnezujDciYK5bA9LUVR8whMUW1TEMaXCk86RcVZMs9xcrmgy",
  "key24": "4pXvMPx8ZMdrnc4sKLjcdPeqBJLqo7yVEnDwRHRjBx63xrVRYjTDsCrZRX3qbPdHt8JfyXaWDgPkdRk47Yw8T6jZ",
  "key25": "B4QWtQiSvxBYFrAXmrju5w3wNDhT9YTV92umUbygFd7DgVYxXUJfNYCjfmtuSqHkF7oxcsUBVsW8graPgfPoZus",
  "key26": "2b1qQ6nwaEscf64xET3ppXUo852tjtErm4H1wTFtBjUZfJTsHzQr7YnCYp2atKTaJvajG29SLfySRPyp5Npk4V7T",
  "key27": "4eEUpo47aGQqmtoK9kC34v8iJhoeYv7bvutvjtNkejqtzqhJoTSkJaVStorRaW53CMMntFV8qHkXcfbaymfBUMZg",
  "key28": "4TyT1eXmutFaGKFaZAWvemcZKfZtfXCcszYcSm3sKGZcnQCaFidBJsD8oBWYeN8Egu9pNBoYu1sMSyyLjG6iCBEr",
  "key29": "4F4Kyy2cucYZoRSLNrR79B4jweHtBz78exbo3NQh7xKuryb7B3Zvenxw3Sqwge9JPZHkZPfv7yVma8UpHdavxyqa",
  "key30": "2dcZWqDC4jQXEcZfdmADcFvwp1DU7nKVJwfcY7bDePuTKUPefoYc32oHtfhLpWa6hH8uw2dxWaoswRvg37Ekn8dK",
  "key31": "3zkd7nGFQ3CcyG9aCeALkGsPyJRNas1dHvWbQ6h9oaeM5G3gA71x7tYxQYe17KiChDDdfUH8Wdys8qf6TMudwddW",
  "key32": "4SUw2PLWB3vqGCjA46tmoySnujr7edt8duyAkAHmWhg3G4Nko9FC5DpsZJ9FLDWfEFjQeYKNrLCfBxr772NKT1JQ",
  "key33": "5pN776jdJpjbXPhda1DjiQfkaK5aBmPvysCT97XfsaRNzkou8P4ivVg1F4wCfYLBFyTRZqJWMRXUJ7kuYrMvLuDc",
  "key34": "4EeLqiYDyeqa4VzNmo8ZsrDrnDyT5Yw2trF3PVMbzyuwqg69H6jh5bobrEboAcTPF4Y1wQsMfFZr4Eo9mVCGhwk4",
  "key35": "2bsSybZrWKuLeBkbF8eimK2KukRnLugU8GzVWWxgLb8fQRpD3gb9WsjMd4AYNT3vLswJZqYoGyTm3mUGboEgdMxf",
  "key36": "4H4Cf36jVP4cpjaSXNwm6ypragew8FXcVqBJBepKLBwPu6LccwiwZRfSvAw6UEJRAk2mBGJHhgw1xtBpHJjjRcfv",
  "key37": "637L8hy2Ky2f7gN7Uo5f7YWGJ1LWMhfCWhY4VSLG9CNkCo9NAZtdycJinZCSGZFpWUNeRyTAWduG1DsLZARyQD5m",
  "key38": "kjwmJRsoxkVyrQn7KXZhze85Z62xP5c3i3j3ZvRmHHoDmfGptHdASZf3UJhDnzLhkDhXJEiCPeTQqFnvS82vFKG",
  "key39": "5Zae1r1D5rCmpL1SsFWKV6jujTYtyUHbomm1fRgPF2arnyHAZuCdn372JjerKV5gXsJbUMvirfM9YZk7SctrZod",
  "key40": "4rEjpHXqa8uNtVtRjinJiAedrz6zWcoT3bYHs8qnioHMRvMxJXk2oCDYDmUf1Yf3mEYYfJsgqJMvQn5g2MKRUBjn"
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
