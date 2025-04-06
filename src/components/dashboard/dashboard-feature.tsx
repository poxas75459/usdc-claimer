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
    "486yq9K6fCJmXdmBGpddeP7A2yswiB7xZYPHN1V5kDsU8WRHFAwsHULCWi5pCDD1gdWHRbf9TYo54kNWeJ2NWoJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYoZG9gmuVHBTo78k3TE9UXMjDZWyQmNkYAcq3UGsoGQRsMaSBcwwGux8NcRGxkHNxuXGYJTRfLsufSrHgD21mx",
  "key1": "3iqqyT1CnQRpbFLLZgVpLD7AypHXPHiSzUBJVAPggDwNfKgPLY1hqDsVF6Ztxux44U1BtJFd3WPSJ9vwyRqtrSmN",
  "key2": "3TbUUmnf1GN6NWjhC9pfuQRKpK6qXhcD7Qkpy6HuH3ZnMoPd3FdixE1a9XdtbjhzvLwVcMtPQbUGGTiMhbsBozM9",
  "key3": "K7Hxhn2WwBUK9gNFypUigqtVSNp2bruMzWGbTdQFCBZsNLeNnPH81cNwjZKYq9Tubog8TDedRpdWTm7vmgV5VnY",
  "key4": "67D4WncDfpkEwso7AFE7WpE3hvpCpLthw9YQfWWQyunsJcJ9LYwbejwCUYsX9izDF8Ev7dNi3BrhFTaU6fuUnjny",
  "key5": "42CiXL9M3y7go1MhisCBUtaKVeZ5fJpxx8M5JZpivVSaTYAWy2iVaRxHuUR5KCZRpwFRj5MuBR3TNC18ovSuE3Mw",
  "key6": "EgwzRWabnVB1qhEEs2PhjinSFhxgEXZSA9w13oxDVbVjNo2pSYnsSBvkQQ8pmKYPu62oDfkBy8NuzkJQwJ2VLpq",
  "key7": "4cpd8NR97m2pmSHzR8JxLCAPM2tx7BPvYMSMskdgtYnnp2CPUS1mRMwcxSdLKCVfS5HRZqQuSCQphySJ1bbCbuxZ",
  "key8": "54ppr1NHbQNRfSpjFdJsjpFWEKQwrK9y8kf8PCweVdqiAqXTNkUzq9kxfNSELMsQqk5NSRoKPAvgJhKBbqQPhKuz",
  "key9": "4gcS9rkhGq65PhuAEhAyaVJCGm8UjdNdvMw66otV3mqRLSxTSTDsym7F1jiVMeixQHENiBkwrHKrqTkfV5xPrtbf",
  "key10": "21S6B75E5Mr39sYTR16Jya2UHiApLxBGFpnok7nFF8rZgSNam4wKymVcn5G45DViYmQwZhLDn9KHQwA9rruWpYTu",
  "key11": "2pUQRUykfhmEhyEU5yBLvCViR1JfDTRygh2spgcRJBWXWT3VeZDRFCqYiFr2qvjTpuSkMMsjNG2Ych5y96EBVYgv",
  "key12": "5uLtGX7pXkkQT1vvjjCmfWpKeeFoZF8gQEqJaCUXVhxAVKUt3sW6mPoPQoAmvPKMUGRC79C3jmWcMd5agWkMMeX3",
  "key13": "2GnYhy6a4Vcyigo1aZP4TgksHf4gCsasGQDF9VjUoZiGmwDZPb62rqXrZykS4X6UFHXj3Bfs8sSDNyjTe6hhzq9q",
  "key14": "3cPPwTzGn7cEegaHqPVF6cfdEu6F9pqsZ3kWPe1F5Gsz44HYCLS43uLgR9h3w3ftzhqqoSrAxUo766JgbznNKtd7",
  "key15": "dfduKJsH6eDrDBLHPX3M4xN68yfXpRJdADKZ7pDQd1D4KE4Q1bvmdfEbmoDBjeBHgairNcK4ZrRd2FrbZhCd4U3",
  "key16": "5DEh2xUf9QcAPtTJtW85QrzZNAdA5GPzBTyCZWtLaAsxWAh82f9xmPmnQNaUFLnHSPwk9TxknKV9VVkhTpuyGVbb",
  "key17": "4fPZSQrB3wW6nzEC6X65dmaqe8H4Mmb28o3aoux9yVLeK6Veq1y82H1joiwAkkibwCGrEcEcJJX9HNfxPaDpMdFj",
  "key18": "4BVCLLdRiXqYa43kHkD8e5CExDL99WvPAu7a6jNf7bCHdUdEoUE3wDnE743ELsr4q77vvGCskRZL3Xu18Yuh6Uic",
  "key19": "3UdHcdLe5NrDEqap5EFfNdttfp4EyP4Dw2sLD2ogyWBe8NL3FshKEXkoifHX7kskt9ShSCXjxuLKBt7hSUD2xY3L",
  "key20": "b7A3PticNv3he4Q2GAtswVwjRJmYtT7VvwVjTg8p2DWU721AoUBzuuV87Pk8hYWaDgVJt3UrkiTJAnE1cYsRk9H",
  "key21": "3Rxk7FKLe84TnsGPSfQQhwBgVzkbKrMFyQjvDrzcaQtqkgWD2mb95QmCM4Emk5oSqaytSFhMA2Fja9tGeL8HaN9o",
  "key22": "3CtarJjY3Cj1rCh9J87pNLwQdt5TJEVEwjXfNdNTD23x7bu3vZYbFKUK4nGxDBAwcnw4ydsK2CeMnEjKjdbiVU3y",
  "key23": "5roa5uWvVTxkhLsgVGAt3ZqngFC6Ue5hceHpCxBPjtdSMbQmku7a6mCCgEfB2RF5mjy8FM63UNTTcDmp2iVuEd7o",
  "key24": "3WEiJsG9j9GfmJHBuL44txcfeMvisuHgkMH3Btg3mji5PhoTDUYaKSKiocW84G9xnWVR87yxDPXzrh6ccfhbsxgd",
  "key25": "3z5rAS8YSCZLwtn4wtxhXZsGjvtz8S5gpRtEKw8PFJsrwtaTJrMLAGwqDLLX6TXvvddmDVkjxXn6EQKvywUsBPWw",
  "key26": "NZRJSCdSdMbtRPtLwwCQBTbKBu1JKpjVko7d8KzGpe95Cv3m4BbqT7V8FmqnEkLxoLd4xRSuWozHPm4Tt1TP6xM",
  "key27": "5aEdNKsvN9XhZhgyzhCGy9eBtQU1TTvDiKAVYfRFXnUGpKyqKzKJP63SpZm1QnqqStCscrYw6eVb8kjNRG6qs2v9",
  "key28": "RCsALt1fcchXpCkvLpMCBByg15XH3QaKfRPikCF7qtoP8ihzfSmKP6potun5neQ87tEn5ESbfy1b3M1EZ5SjC7e",
  "key29": "wTbo9hKzM6ZdgibWkSm1Q39bj6fkMWixEWszJ2pvukr3C5aoNG2o5kzKFFcRBuGddUDsFTMLKrbo1Ms2ZA4FiHz",
  "key30": "5CesAEGVX28WGXQz67Wqaj2hQn3pE96J2HkSHhMq8Sf5ozSQffjhVbSNtFYqAPs9Q5MSa9PtsBseeJRGcUmhxKj2",
  "key31": "4aKKXqhwmiSU4FdiDHSifJjwVxxsvuqo69V2TEkV4k9uusKMrS7WWwKGR9b8wXqUvLfCzmK8kSS6guBdzF594QEC",
  "key32": "3kfY6adgMsE5pThSeFnjd7iCniEPdkYnyDa4jAmkcHmkzR2NFZq7uctCatLV9BR2Coe6fpRPLUEFstem6x7Jk3Uy",
  "key33": "4GYx7fgNjpS6rseNR3sFAGzyd7VsjYk2yBN4HaxFXBk3oX6XiXGYnrYCezBWgkkkHUbkhssuRELCisS6xX2JTtjb",
  "key34": "2u8Cy9rhEBJub5f3eVkvW6QdGQonvx1fCTAZBn5jP53XCk6k8QrNo1TG9A4ThHbo4GxW8F1ZzL4dX2H4iUyj9dts",
  "key35": "2TmHMi6VLRuj4A28LmSx6E8u9cbWecbcKxwy182hU65zMuUP9oeP2BLAko4TK2ufKZDqY8erh2SBJAqFdTN2uzov",
  "key36": "erQWUgePJdEDkenhUuEsX5isMVUnBJsSaJgUVuc3CkqVe9xga5iAyzPjic3CgaaiaAAiKsdpmVJ7RsrHjjSo7db",
  "key37": "ahvn5nRpyFQS5aBfv1bZsGnJaeZTkwRoizipkSV4Rk2zrXoVufqDUki7jQ92xYMkNpryaeDHSkDJnooDeZi7c65",
  "key38": "5brJvvghckSgNT6T7eakMWfCtXT9M576xrTS3a3cBDYZwKiAivxvz9RCRXEAnfXdyM5JPq9ePPBipy6uu26FcdQ8",
  "key39": "3EoqcZvKCymTmMTt6QxjCSC5NE3r54gajCnzJ7CdE1Mp3LEARBUuqx86MGpUjswZfAg7ybQSQUCG7QSNrD1VKVbU",
  "key40": "3wefTvjM8oFtHgp3HDdi37ZZfEKXN8WmjWkj9oHefhwQ2yLCkhdFNqJsxH2KFnEyWpiusRygqw4h3cg6KuWrDYvG",
  "key41": "3JrJYw7sM1hDZD5Pw1QbTx78e88nP7wKbgt1EBvowbUqYUXJDLiReyAstPHk5t3xvdBcS2SGsU3k6sD132b6KsmN",
  "key42": "2ZyG1A9dmk142ysEXxM5AkGxrKRYmL3CMv55FcAuhhtAkUWdT9EgFnkTJ7hqxouufEdaUy7jDTNVnQthjJQvAF2G",
  "key43": "2ejDxodbHG8DdEk1XsyPwij2FUdpFcGFzKZbrse87dNn2r1CFsXn4bPge6JwFpXo85DvysqEwtJxxuAhmZhyu1LA",
  "key44": "4UA5bDYFVinctadMMCEPiXmP8xFbyM55ZBTyv6EHYjxCdEcaB7Dp7iT6wiVaiFB4amKoMLwz8AKnRoTi2RWfahKw",
  "key45": "284P5WvB1WRsCWq93dJMMCqv6wPQeb7tvC3QBwshNJ4WpaWDC2oUaKnqLbDnPx6iWs3us8zvKXewLjmN5DCKUuzK",
  "key46": "2bAP6iHSMpTkAgMZwkNtidNZNVqVt3LsajZQuePA3165pLPfpULjGDHVqbEsqCuT8u5uYN3ayt6mjtrWggzKVyyP",
  "key47": "2VWXaFz5sWRkPu8uQuw7bnNPNNzrWVH5WHGZV1CkW1GyHpHzmjjxSE6L64GDiXFPiXBUBWUAo6rEzSEK5upds7Ej",
  "key48": "5gfztFxaDvaTqvq4NMSfHTCnYjUoaFr7vV6Q37zRMfYDUKRRsnQkbdvbi8tg6cN6J8S2weAbpDdP9b1TBetmTjBU",
  "key49": "4hMEhaWoiECTCAk4w1skRQ2othNqcxjKvbFNy6oVDHVeUNM9jiLBQVC1MFk8Q5ZTb4ZU2QgnU1s35LnGMY6vfmbp"
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
