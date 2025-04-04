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
    "3H4L9N1Sbr9iJ5QNDPaVESQsN54bZi6uLs5CpqybyqDHxtXCYjgmLzSSWrsWUDdYegQ94G3AzAEofiUzLeoyU3vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vn6hVJhdrRhbSqNiS3ho1bpkL9pweLdnzrEo8ExNBUHSGySZsCisdroJoKv4ED9FfhPeEtyAGcioQiBC9Y7jgYi",
  "key1": "2fj1nJK8ppGQmzDT5tXgJ1nkeafxoTqdZbmUVeRCjVBd7i9486QyLWb5xTLjJoHqm34Amh28Ey74zEKuFNdqXhNS",
  "key2": "2XgNT8pzU8yGpeFKcmbjBd6b81DATJJ8taxSbCicZZm6UttmpSoSEbV84Y4C9DkKTM3kmrXp6hGsKUrQd9m9qSAz",
  "key3": "3uKSVjN1ibAMbJSvLxmDPs88oXWNhmxBdchQ8MSS6qgBENConK64GA9ZB6rK4AHX7kZBSbpp27VbwKGyarvWRuF7",
  "key4": "59ChWXkteBR3NhcNk8GcF53ja5VNPtWtKbg9hTWeCp1W1CJftXLCK11D9whn438iV1kseCUdZq4CaiWFmpTe7a4T",
  "key5": "2je6J4yyH57isNjkkpipMkYPX4MVnwEgdThTEsUpUi9GsA92kGkpgzer7kNBbLT39ATUPywRrow2eKoCerjbzyub",
  "key6": "5Mm2XHH75tNhhb5gP1xQz6FtDPYjY3Ur99fXbyC8nzPZycNZoo3deJrEB6YWEtzyXwJuQ2TfVhnEZcqc9QHoavae",
  "key7": "2P5xscq8SzMiR5wYR3YmXLenhSJPQiKU2aMhiapNEKAnfFrqihB2xXKvF6izR3zJaL8zxB3rbfN3wrGeYsefsvfD",
  "key8": "2FXGZWyurqjQnEWZR5q8rnAG7hikZEEK8ZHGTnwCw9LLdQXzQUyEc5c4aCdLeJK8i9vawTWPLHV3XEfnK1T6ZEdZ",
  "key9": "5Ap6FCeuTTtY9cMgUyshHAAWczv1Q8DF9TvAsz5dQVdextZfr2bqVuAoFPfFmiEDisJbktHKmexCKHac7XRVru9C",
  "key10": "4xf7yKwzBKHSM9Xjh9sSaRmNbxaLdAKN5wfkps2qr2QiynefuYggdERuVrms2Z2u8utfVkWgwqFTfiknuYzNTWmu",
  "key11": "4Cism4VAPEDqv8N6sMTZo1DQ5ehZ3TgSp5boen4fcEZztuqUc2ozoJrD1qvCgtRAnykdV7w2KuaTjATkaf1fD2um",
  "key12": "3XVXNNdPQ46ZaKxzK9vsQrFY9zC8EhXyghQV6z27Csjup9uvtTjSLKCcmgHfRJVLhssyUwaimBSVogU3Ka91LefQ",
  "key13": "2pG7AGu3ynZp2wScCoLbjPX1Qz45ULRrdsmMhRd7CwofH2B9ePPt1VT3VQ5Fcz1Nm16UtxcmWsYzyEokpDbjbeDU",
  "key14": "3iHRnHvVSrJ5kKgus4QkDThL2YTgX1XqvCsxdVPEmJ9yJRmpvDhTrzwDqKPVqrno3g8pZak7bAy4aSNvuFkKtsmK",
  "key15": "4z8sm4JYFMXFoQCPyAKXpTF6itwHct4jedC7xiSHiy4kU9ZfkJJz1eo7sG8CH1mEikFdxJ6yMFASAnCSYKuxuvdV",
  "key16": "1KtBeAJfwPgtoafvzbQEfZxM2eWDQUavytBidV7HyWp1upQ8pqgGz9jV5uouEuQjxkgpwWyjjZjRKUQu8rEoe7h",
  "key17": "3gHVzriQUrQZ2sd92BZCw8YCmQLGwczhmxsi5WFmNPLWUm3GEU8LtggFT4DPW6QcHZezyhja1fCWgBcJZF7HhSCf",
  "key18": "PBQ75YzWLLRdXPSTQYAE85ZPneZNu7KcTkzoNY9izpH8Kmi5rbc4rkxpkzenu3dQBDh75rC6rtQkZojjvzHx7Zc",
  "key19": "51KpYkMD3JM7U1vjLYSkGyFPB6zSGS1gBDaNCD5XN86YPh62F7LnDCZk1ChnZNcRi2PJxeWeeaKttKzKH43xkdSh",
  "key20": "5qVmFEuAbu87jn4j2chL56bPWzaGEeseEtR4YqQzkbQgcamEei2xPP6xSqzfeWyc4NWSx2CfBLKxMpF7YpM1P3h4",
  "key21": "4gWaTua1gai7FpAuHoxRrHPZXYt7Kp2d5aozUXiN4gM4FzeHw8dgdjr3ow91BQVbZuUGWVoA9ZkgGMqXhVBcMT2j",
  "key22": "28mpTnfc1BPnyH3tq35wF55vZ4rsc8EoXZAJ9BLAS9eWfy51Himr1VNpxrtr2WGvTDMADDDNHu5nhoEAoi6kgJYq",
  "key23": "F1iFMudPLKTkpQLaKTPyiAvKhQN54s2hxqK46HAb975kggUC1EPfbErJPxo3iChJVVyuyYQkM829BriLqgZxsCA",
  "key24": "5gsexkiy1NUS62tUfNhXdRkC157XBULpJdGPFToL9uDWEj33d3je5z4BrVhLE5jFiHDEpsdFZSFWRKxXAAb4g3Qw",
  "key25": "AaywHg5qASD7EHvjnamBACycGwLh6LM6Ckd4e1BepPWk4qBoGrnbvUQwxY68SceAif7JmrJmkpaYjM3z8rT95pU",
  "key26": "2tTFgcZbHJD25EYdvRSqudgEJCqiEqFvf6jf7o6k7a68uJjRASuhkNcZX9VMB4ZqgZdxLeKUcS32zJq2KXTKpnbG",
  "key27": "5mKknZYwAT3hyoRsdVZ41Dy5KG3HsQJWQQuo5Z2FbaU8VnzD6Roqz87Dn8uyohurA1ZkCcmrpf6HQBCAZomfYxUY",
  "key28": "2FwJ6bT6n88Hp7N3DhieDMYKEtxzn1qtCVnoSMDSukbRhhSFCbMUZ9EzS278s8LHcfGMd2cYcBbpahUZmPSvcFgL",
  "key29": "Y8W4XvriYixyPG3hoYzLmLRzzotvnLrHgX3HdCGtgGBQsmpPyQWx27fALju4bRtWWshDjwuRLkNG2kBLpPA6PrG",
  "key30": "3s8JD2gUttFYz6t46afanem1fJitJUt2PucKQ7CNMqeHvnWqVmpXT9uTMoFEqsEgjc7D2Cx5A4vu52V5svxRMKPy",
  "key31": "qcR4o4vU8KKcQE5SvQtvLqxLN8CWr7MKssB656nMp7nj1griCSe4P1zpSzy18guikTw1uoyezcaD4HvoJLKgPP7",
  "key32": "4aJCXXpWiYBenUAUuGDwPSMokLd6Pg5U2uoYvG6vEoZ1xFm1xn7HZeauLSaoSXdFupXxvDDet3HUrfto94NFMEeM",
  "key33": "5xWjNx1N7FwQw2f37dUNbxBErGLT9HJ8fUfswLYKcp2NLS7i2Uet4Ys9ChLUDfqobqxxG5eFHcEMCkGW5vj4ENmw",
  "key34": "6PbPqirKf1bo7bYeR8TRfvnn7mjgwMfjS6aqFQ6hBXQffB4Ra2bJmCMy6CQEXP5LYPUH5hAJvMCqaZh8RcSUKtC",
  "key35": "3sUmwyia3FvFaBxS4SzGhsGxovw6h6hHuUSRR67Fw5zoGkcUGi1hdtfjuBKMCzWm2vz5vPar98veD7HfQQRUtmfz",
  "key36": "3xruxFZRpB6BHRH56hCPo5EoyHWebxz7HzCsTtE9nHrT9NKBCJjGRbAvdkKhPRUcSyzDxNn4vsv4tfeYwKPi6Y9f",
  "key37": "Ry4fDqv59RjXKvketf1HUSwPNZDKoKCX4E6g1ctA7vk59ezdDiiKJpmDpXCkEbuU2ZVyvbbUFn8XT25W39nwrUL",
  "key38": "3E8GifmTHC1ebE7gywN85nivGwFDWEVW2gjP8GAF4znd8cMkzEFqKCr7jSevvDsQryKFqUDH4s52Y93Xoe5dBXHx",
  "key39": "2Mc99CtfXDrrMocT1tTLxYP8Jj1xTVWvzqxiKiLsfPaYbMeaFujKC5f7RAKQ5hWnQUZGhhrzRBGzg4PGaVstwbpy",
  "key40": "43P2JVJj4ZnkrL51pf8Q2LDcSqp4qDygK4BDnqBejJ7pBGqAqKPCxuDe31PgcHfbsAcLwc6pUy9w6wCRmuga7ViC"
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
