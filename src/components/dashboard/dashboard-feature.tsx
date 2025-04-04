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
    "5f7zy6xzT6yAHsastcKYBxLRQpe1Sn229cxB1RDkaaWc7ej72km3gTBdFoCH9AwsQLu4BYUy1HNcVCbGAACtebmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCQ9akjFLEkpgzKAASumEP7mucqocYvg5bTYwoTuU71cHMfdRdGMMhnvuYfBtEkNYFiqfzaESo5eAA4CHG72z45",
  "key1": "5xyBP28nPvLi7zd3acb71toLRUaBg6bNQh87qeeMxWAqxtMaKZBwFge63Quj5979wCEF9Ep18RLc3YSJx6SpWKaY",
  "key2": "qGYiEZjMgkkEuQojo4kAbMoCWZL6qN7vFDVzoBPj2tKm54qCGxWAEhxqNmnGgYo3DeVVCsMofZxWHx7pfG4MgN1",
  "key3": "27J3tT5ntHWbeNXnzLuJenwnMKHfsR7RiPWEdoyoBvwxkRnTV8n7Z58MGyZWs7FJU2JC4eupHMHDNQtpBc4ytajU",
  "key4": "3fW2898i6j9T97FeoHXnFqg4rr3PaK8kqVLJdfuoBrTAVCs7DRTpEctvduHLy1hYasHArp9y1RsWrbcHTqbHqmts",
  "key5": "2UNJa1MYkx88KqZ1vJwGTJpzT2TyHUvAzsdni5xwweBWjtVCrBqbPw4FJD1JsEZcwTLXRTqRC9TmJGoGnGBouBSB",
  "key6": "3VfWpPQKpc3da7Pq9CzkwP8htrudTqWCTqD1wjsD2GjVXLMBH6QfB4gRSbKgM6UA86fB2UAQYkbPgxNKaGp9SmJ1",
  "key7": "5jN6af68H6127tiVRuHBjQcodEiYQQHt1qpCHCTqC5XnpDqRnPNB1EGTSFYewHL4QSrhRUGDfrPxvzTzsCw5YFCM",
  "key8": "WirbquRnnAajdzYAPMbzMtB6TTu1mio6twwPeN2VJYFMG3SazR4Unhk74ksMs3JxVvFm2KEHfsTkH3zPq4jqKtG",
  "key9": "374W6rbs7gFJtn7QiQLAvTEsSi1GKLA8QgR3NE3LVqnqZmjwBppkkxbwAzCDsdZpdQMpbSnfDsFvJEMBxE8Q6Ugr",
  "key10": "3xYwNHvnxRHyxD6GQCnzU41Ma4qC1cCHEsnvbyGCA3GwNYQzb3gwFFQniuEJKzkzVGN3ZDRELtU6o35hGXUha7u",
  "key11": "2DQhTuHCFH4JjQdJRSPQ66qPdpS5ZpGikgXT94mqR6Ass7bYqFSFdNEbNPZcvBywHnL9ifd78qsyRXHiNjGL9bQd",
  "key12": "2guZ2iYTN923Dpp4R8d4VuwPePwtoTHecgsruBpaGny4zKgXRRbhfSudrKWuDB1L1weLJbba7UUjyK1n3bVGArok",
  "key13": "3KiPW1tnQvuYoJFq6LofgzM1xt25jj8MwisTzyAs14DfwL7LDyGo6WmYu7twcxEXSgFyZsQcLFEn8wyn3F3QraH9",
  "key14": "3ML27aJ9KpQQLoUvT1HEiAJpFVaSWCLzw2Eu9WfC4Mme9SMJLx7qHXczQRmZRE9PMkXuLg4V8cDQqDqAESHVNtd7",
  "key15": "2cLummkgpd6CwjdCQ4PnCNv6fKTh6tBwK6QxxmBDfankY85iBHEhXTgivuuWW5SrDPgSxd9Sddnp9PbPf2f3FLvt",
  "key16": "2twUh6FeEdGUpD3FEouk8EmYZYMjHQXu83vXAEjEBxw6PLekWz4PczRfM6RpePBM97KVj9p2s3eycTamdR7spUew",
  "key17": "5TehCvUy9SsZEExYe78Vri7Jvc1xUMT8WhfUABgnvdiAPz2DempniihaVo3CkZCspP4R9vAM8AMPPywQvjargCQE",
  "key18": "24CmS7jnWDNi1KN8w13Wc9Bodawkg3FySu8ZC6zMZwLPwBywDKpKycycvZcbRXNSJdDWES9DcwYqpStHV6nBMs2J",
  "key19": "5KorhfnqhJok9gUDt3gFWxWhNmKuWgxBFGSh7kNQJrorUeHvAWv7SgWgaLnp1KEr7ZKfGxQJD4vP1rtJTstXsNMn",
  "key20": "2Vnh8w553yMV8zUj5XXhBD97swLQR9WCo4KQDAWkRLBA4RSpTngHuN3LoRXgbzzk1E4wgzGZt1DaV7NVF7JuwbEY",
  "key21": "3podJBnkqXzqfuzEb9CEtiM3WZR3eBwvMq7yuinr61xs3cvx2KEYjboDNuf5SykNBzUMFrdZqDezp8wNGo3TU6N7",
  "key22": "33XNA9i19n5j2QfbfeWdXMy3hJQX7UJGfx59x6ZPpscwPgK5WjeVh3b82xv52HnZ5Gn5T9bWp2B4yUkxH2Z9cmUT",
  "key23": "c6u2H5C3G1ArjigajWMtPUFAGWncusfj1t4JKxw2i178xeynf3EbkLzX9mcwi5FQKB1cbcSqL5LdzzNbnEv6dR2",
  "key24": "61TqbzbZ6miQ31P3m8vUpPq6JHCtaHenva6gJZPwCUNvdYT1m22fXW8UEyzmP3ykz3gD59DyhUKHo3xnMTDCsgqq",
  "key25": "4Gqbf6YUW2cahsC6zAR3wDP2oMWtefDjCA1wxo6TmpdSx2TazxXUMo8gw8rN5j5GHTCibkpZFrhvrZqhnnrGrpur",
  "key26": "54hX3CCzE4ESEHbTGTrgpdEQFbJoEWu8fBmBkGyfdocvysF5JUbTo1hwz2J4HEkvJd739sQSgisYSZV4JNCTJubn",
  "key27": "4s77MkoQhJnk7vEvfmEsXtxx3L5UKMcQrftYy4CYbmMfmdnLvtz5Q2dnLnoSmDj32jgcfT5C76KgxFD2F88kAm38",
  "key28": "4wcvwfE2cKs1MkysktaYPSf6ui5G3YX9D4vifXxAGfYd7m6EkJonHm7QVPGJiT9otgoPhEmR8FggWX9LvjTR65nX",
  "key29": "2qGfvxqJH4jvbAiC7AYLMZTT1WgMK6gBt21JWduiiVdiqJXcv4ALUgbwM6euVjcJTkk2SR1zGFHvtQHjyDXLoX6y",
  "key30": "5WzEv73e7bFacafS6MBUvDWZ3MWhFDc7ioyejoJtex5cLqbBTAjBriQkroR3zdMngMFYNUKwGygcNQ5w3eihoW3a",
  "key31": "MenmvCczVcQMAJZmA5zNkJdZsKoAtonRFzEi5prN8YkohXFR8PgtMvTVuT9peWHKX89M8dL3FZKUZPUjMQni1gM",
  "key32": "dgyXdzRMn17Dtvc9Kis9aQpsM23pNdojBfeep4xCqMAhm49ViBqeXFDEwHAHyUcggnecyQnaNtTNm1Lx2yxKpCX",
  "key33": "4ckAkkXRTyh6WTDukFMhDHDUiBF1ULfmMK341LXXtsozCftUNry48DWNityxaMo15srhs5kkKSnm3Hac7LKBxibB",
  "key34": "3MW9iFAvUsA6n2i7BT14w8ZxfScH35yoDRPADps9rhbVwaxrvGRRf4ekJAb9UDv6gAiAVHTTVrjSntqV2vLZKSgj",
  "key35": "3LZuttGNUHp4UE6XrPdHGWSCc5s5uwT59SyCMCHYzrAVKvftsCX81CpQ4SsxJaJsJuKtyetTvvkfhZ66WrGgcaLE",
  "key36": "4wafRnQXKwRraYLyt4L9bQfffxiRxrKWY7h4PP4d9m51Nm9iz6JJRtdxQW4PTtY32J8fPxSNipQ6w4nwZQ9eUnJc",
  "key37": "5QUULpXvM6tNCjZdKMd3gw4bAoYbwBG42REYJc5MQSx9RF5ZtGJMnaqgJmBEfS8px6E5MUGEXwVhvjpyi1BDTU9M",
  "key38": "35c77eMSJSpnTmr31RCnzmgo1Dbu7bVewhchuP23hmAtDXZPo8ikQuqcx6anmQy72c5kT7ZdA5VHGoufjctXq5y2",
  "key39": "4KckjahtZLEFq1uzaWzXaera6tRAPwpPF8H8HhFtdKL5baJKHNVtSdes4ZDcUD24E9MneJ4VeWjoDtnMx4JdPc4L",
  "key40": "4LdEfTr2LS37wQ6SzF4d4mj34fJeczyyEoyzyz3SYUw37bYXf3sBxUXgKHzPCLbBAN1q6uYtWTL6c5jjggmsbsBg",
  "key41": "61tmaAdpFTRsbMBkJtoefPsE4bCEAYnwpH9EZorMaG4RPWzWxkKnoytFDMBmcuKHKBVwinBCQLKSGTjRC61drRwW",
  "key42": "GgkguFZSPEsPF8f2G7urx8AutaFoJBXVVCg8j4Hbgr6tNNWk68M9rVj2mhueJsz5M99JAThtG3VQa9nvXS297yE",
  "key43": "4hLn2Yyoaa2fipw9vB2Qjc93H6j7PuS1AqtHuBkwDFpRd9NUHsZPBGU7kyaHtyFQLxnz9hJWvmSR9XL7PAoLfND1",
  "key44": "4UvLXMsEtMnbdtTRbstY6eNssr37RrXGre2bURbDgLdcXWXGhCsLVbMce7QwSX2wFSFY6v6ZA4X5CqZASukLb9qm",
  "key45": "6Ed8UNewJyXN4TXKKDpZTp6B4zVXuRfW7UhvQmDmcmcCzxm2mhd4CDRfbvzJEpoewNZSg7tbc75zVBpZUMQNA2v",
  "key46": "Xsz8RVmDD7HaF7kYxah1Yon8j1S2qozHMbnWFa6LFnooqjs225ruLsk5fvmSTW6w6uGY1DcWS5zCbhM31JEiRm8",
  "key47": "2p2CTyWw7HwpbKR3CCinqJLdKrWpGoJdCBgTqwK78KgH1xwpQkA85rJ4ubosechap2mBfQxFszUKAfyLqSpHL2uw"
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
