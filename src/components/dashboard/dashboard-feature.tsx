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
    "5tVB8SJ9fhwmBLMKUV5V483JmcExCLiKmV2tErvrjRg7SpjTFvez3Hgy9o3CLyz1bSsGYqTPDBN9ktFCSXbTRSvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLKfomonzmdUEFiAS2MfLVciXqzFdhJxSAeGFD1sxEX33U9d38JAHSoMTwCGckQA4tRu19aLFH1ozu4pTNyW2jC",
  "key1": "3QJaEyLrGKtTqY2TiLW8pGmtfTZ2YzM3QDhdX9Y9mt6YitJDtvNAdtPBSh8nq1Kvdubcrao7CDFn5GP9g6MSEQd8",
  "key2": "2ZmF17M1DnTwEGFT816oJembAxxxZqceYHoQf4jjBBQtB4eZB3KsvdPg1NmEgHHrujNmVvTBdM7gpuPyeNdd7Be9",
  "key3": "2N8jo9DZfc8Uto7thJeXLaBHxCLqmPJqvhBypiFs44mbLghc2BsXAeHa3XBk6DDds8Mg3FoKaVPb3JoFbTtsoXB2",
  "key4": "pit971T56nrZMsQYd6CudWzLm3kLF89wMWKosCmQbQGQmJnmN11oo9rxcJxemQkGYVAtif3afjTghDpva9jgQrs",
  "key5": "2LFV1JWBnU3QNUJWTf3gFA8pnkf3gpZ77C6qm13xXcEJVVjfPFF9PfremnAUUonE3Eu4utK6qQZLLaP8sfd5v9yA",
  "key6": "4G7mZSNws74uEuntDXEwAXx9F6wzkmrDXyxCKhBLqs5y5W2M8Z94a4XGsn5uJjAmjNuLWP6p89bwyn1v2FWE7vvE",
  "key7": "ar9LccffbiQbn1JH6wFhUn2JJUL2kFbSGQNd4muGvxgV2iK2f17wqoAq5ThiAZJQrYUeD9a1syqfzYZHUqoT5mT",
  "key8": "3URjJqawW276it7wqtyqaHReKFPRzP5soJuMPK5EFvAmncde8y1epgKeCGFZHbjs4TQjhQapFrPA56qfgxTwTpJH",
  "key9": "2hHRgQW4yHiCfr7gCCcK53txeHQ4E1iThn7kokqzsXmTxfNU5Djq4Je7qE1b5vL4QdApDeVR8JnCzHmaWQApAxti",
  "key10": "4qzaNp23kt91bSo9N7bir3jPXoeUbqEZkVAQRyKBiadoNNk2ue33yETLDejnwzV5K4ZgacmYhyYZfvckkXYcmbH6",
  "key11": "5k2V1kaGW2q1TgECRZ5Dhowgk1bHAZKqRMJyZ46DWZhK5geqXBotx2NhK86DbDKe64DYLwma55ZYU8Hy9QqECJSv",
  "key12": "3ufyaih44KE8DzkENgJXVHsgSiCe1EDrF9Tcixiwi5X8ZeFgwzkQe8Q8GjBRXaomcLq662E4RputohmVcqWaYiAr",
  "key13": "E2BFcokWYbxU4H8D5uvq3jd74i8hdtMkattm7c8dwZZLyYSzmtUZPAnFjrJcq9RnTd3V1zc8E5Lr4JNYB4y9ftD",
  "key14": "JY65YM3EkcGG4wxzdmsTAw6drFMy5C8JyvXNSyczuGeFNkpNzAfEXQxFKGoHmbGPNubTAuGQVgCyRnF526uWwXA",
  "key15": "39AF5LTDZaTb7hFWgKJe3kRCuouo73ZQwXArXuT8TkhvUT3QtYWdUPkCsffpfHGE9362nB2BpBY15dquBu4zvu5u",
  "key16": "5KrK6r6xexPG9JKteBvWx8pN3kezMZrcakN8rx4F5854MyUKof6WFSwkkFTjQUKQBEdZxHGfq5HRxnPUkmQBW9Sd",
  "key17": "4jYBg7Cj9dHdeE5JbJYQcjXAKgtD1aEW3JhZjKxL4KpkpZoaKYb5TMjG4x8m1gpYut8bnUEX14Qs62unnpbVu7Ch",
  "key18": "29oPVDEo9GdsbRSPxHzc5tzrCn48wHt9qHKxvbBoKZwtY3N3awuqsVos7R3XfysdNSbQSFs3aXNgKeiyjGuEX6RR",
  "key19": "5dJA7X1ApENg9na1TbstEcFzAcwZeutRt2xuiDQtqGynZ7ru73C2eSSYTnUxRrGSkaUCSYbLn3wq2oiRo756ZML9",
  "key20": "34jLMDkqQpNR2WGsHf7PC16TDBFezPtkyrE25jnmP96DMPZ6QVs5jQYy4PeUN1rQn6QngUNzFfFRfPygSguUKVoP",
  "key21": "n4mvndDV4VPiZfwDZZVfVfqpCcw4364JEYa64uDnoxGhbhyNyUbHDhe2ifPDvGyzyYRsra9dUFPUSCNHrrEh3Sg",
  "key22": "59qgqAyoNyL486nZAK4GycdZ8EkiGiZvUXpHf3okzVPEHwpAaQJgfUH71wZf47etSKsonE8yJt2KtauTSR3FbgFs",
  "key23": "3Jy5sQhTvArEoYJCMF4ShebsA3MhmD7bTHSUaubNXS86hwMQXgZwHN21XeT6XeNx4rMwR9hUcL1Z5KqrriUtb2C8",
  "key24": "5mAPEgZ414GCrSzZxjJYKYuXPdSws9oZ24kQ4rQNydsBmvWJy5jrSxrZQTXAVqMLaKYQFRHv3i25yvoHys9rQteK",
  "key25": "5jR7wAmaWMSjtVXQZ5hhDSkqg77z3G6oR9FSuVVHmbv6QhyPBC4c61Ng1L25kd5yT3vHoWJ9JPMGqfV8SA8AonWq",
  "key26": "59X4bDriQ25tYhzotdnQEh5PB1i1QNmqCNSsoXbKiNEyzqZSu12tGKkmGbwwBwckQ6E9PLdoZiShGys7kbNXY4J8",
  "key27": "57h11gaD9hQ5pDGWw9qa3TsSFAj5xM1fdjPJgXQGBMDDMDa6Jrhatbjm8HckKsJHkvFgQSz1g9KZaz2fwHHqqmfn",
  "key28": "cz1sD35fUL1SdAMxcRqDeaYsCAyw5HwpEwtUuGmkuh5UoJKqJXxDUkJ7gVbUE6WXFox7hF1bQGp2HNc9zfdrWf1",
  "key29": "5BPQKd3nu7DCrWYCw6ayaZz6sNgn17LpKx94tUytjwmH8T9Eozo8okbNVYi7YkfqAyCjpQYrXnqCz7ai38KSA5LD",
  "key30": "2sC4RZgaM14eSiYiHK2Kk8CgJMbYHWVeWaE8dBVT7T9PTXogDK3WTAjapEtcd4uvmiHVpNVJjNnv7qtssQiRK761",
  "key31": "EhYZo456muELmkTrDkXan58DUPTs6SMUv88NhXK4X7ehCa64oVoaUbkx99JnmPLPoQon41wR7nQ8twQKyKzjCke",
  "key32": "43X3PasE7ThqpU6R6i11ehhwZZLKygQ6tNwEVE5sxkPZpLBWxkUwYKa6GXCvAWK2oSi8SckFkwjjcurFU9eoSC2M",
  "key33": "57LnvXcjHdhfa9p6ho6LSAFCvPgFx2xgnex8iEDfVYYUUPSW1EHq1rimTct97VrBZucnFpxnrmR8LrDSJGbJJctc",
  "key34": "Q89hTnagLP7zTALWTgieobRpvro7xA9hDXfGsx4rHuxbr1mjHw6bNpMfuDD6a9GKPcigRzcKqNXSvfkJzVaG1o4",
  "key35": "4646XmT9a9vgrHoogTcXRVxQozqQb46Do2PDeh6yXaPKQ6LkTq5fUAaL3SKFz85JkcRnibuCRDxMr3n8SfkAzPwB",
  "key36": "PMdTc2Sk6zW9Ufx5fDNCCkbLEdYineVcLj5wubaoFDEADwx6pe6fpZSzreiWz7hahHHBgwxpS2rEVqHx9nBTZhv",
  "key37": "AS23XGAjYpSYSwrZFVFjHVhDZvfWTUyX46DtjSUtkM2qidibGGUXG2qeACiLNbJd5eBJaWzykipRE6b3LttXspW",
  "key38": "4CmEMfjGP95P4fhYviyahz6hudWpsZ3AxVgwgnkK5FdVRG9PDF5xDV89RssDzVDdPCi8w7Z2kPAwfh28K1y8Zgd3",
  "key39": "2qiQtDQbt7ZwMvM1KNCKXjApb5WTmrv1m8QCYR7Uoc8G38LxV5rdzKL1uBdUqiJxr1iaMqW2bXs9mk4rEpYvxnZZ"
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
