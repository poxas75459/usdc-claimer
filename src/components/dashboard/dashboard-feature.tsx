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
    "9a6aZa5EwPPxn6nMKVv3ZLxzeRRigxR32DeoHFQS3xdV8VRDc6MF4VEpvgjGPmgobCsK4BzoeHnau1pKD2KjAmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TxiAm8c4rKe8y3tV7iNbkfCeGUm2V7tbAFNRZsjN9xRstt9Sp73SQkH6v9BEBhTaFhbT1i9uNVrSPD7jAZS9mD",
  "key1": "3TkMHAvRbFiQXQUxzVT5K8Ep4z1ba6vEDLNimnMUW5x2dWzZmXFfQWj821LtJCvSaETGDG7yZERu68pYBcYWf96T",
  "key2": "2DA1kcvWUGd3yKRmEkDurMsaRDqdzwrAcKtQFmBDoWWSR5G1L3uFpWnRU3ewKPSyWapyvkpp6iy98NvWD9yB6qrn",
  "key3": "2GrqeVn7ibk5KFKNg9YnsraH3uBWYF26YXTnm8MBes2fcWy4XTTVUKp55kZBGzRaQCJYysyzZDtMb7FcCMWXVofr",
  "key4": "5srPQGq3e2vAGnvPBgHpNzziBaY4YFotxw7HD9zDA4NewqPZqGkNcf5m74gtBcU56ZFmFFGMofhm5AZPVZLhUi9e",
  "key5": "5MfEZXZa55PYjmrh6SYkvfRbywYd1gF4YbP3AQWxKAZhMtfkneRrnSywXgF7vyVxtAacqmwSvdnm1fFNrzGePf2R",
  "key6": "37jK4f1a1iU8chLZFw7BrwCep4cALaZ8D93ogNDNS7PeXgMDDX1j3PtMxqVSqDxQsQYrqUmU4wAC6LSR73tH3jF8",
  "key7": "3LrrSfX3VrBu9HHLpwLyddYaTgxK2Sz7A1C9KuNrBfhNh5NZGFPnFUdSSJLvyPD8TGMq9gYr2Ea3H4U6zigd418R",
  "key8": "3G7mFAPAKuziZeSKqAEx1Ep9TvWyjESejt29DUtVKfxpxEhUhdRw6HpgYoVTAkYocKhx87eEyodXusKNPd9xrdUJ",
  "key9": "5tdGsjTQZ9wH4umy3sGEKNGJkwMCVYTQDhU7FJz3b1nbdbtTo4rCkmJxfeCLQmzBFkey7287Ddeepw39GM9cxTq6",
  "key10": "2fRqkG6QtK3CqJ91283F4d5iiisiL3qYUrqEySZGKSyjN4PWDDFa2j466M6nM2g6UEsQxwmthFc1AzbNXuYpGTkC",
  "key11": "cw2RamPJugWQAThEhJXpZBGLTKgtqkPAsQjYrusbTQjKfm7a2Qd1HD7q67izSmzFN242RCS6V75oaXQoLkDPGcH",
  "key12": "4moikj9WEtbeNCh3KNw7Qp8Xq2e2oJ4GkUq7kjpJ127aZsM1oQ7sEoHkWNJhTEouji9HEdVyWsKkj6zfxpQ6hLHc",
  "key13": "iRp5Vifrmf5GS8AktcmouTwPryjDBQt4sF7DV8gcGud7Mwwe2s7WDGqMW63ao21NSpa9VnL3z4ikDA3VrEVKhnn",
  "key14": "jRryZT8fCL63ZzsXh1c8DiZTRM9WQCYKwvyyZY95EPFHRvXn1k75iA3SwuTbNFPqauetFTii2dRub92hiXWSEPn",
  "key15": "ds3PKFW6Et5LF4uY6qVjVQzGtaV4zQSBPG8ACE2BVjKix2te7gJmzJ2BmVyrpZx1KhKJ7d1Qam3MoyruaRbUNqV",
  "key16": "4n1n1t7Uxg92aQ3UnJdbpaBVEuZGqaDMJmM1CE2jPtZaWhpAsmG23NEhXv58PM2MByRgvfRLp2GxcoRzCyAYjKUg",
  "key17": "21ycpLub7Zc9bNsCCtQUqyr78Ny2Xw93SLAcagP9mAnSWL6dj6ZFawMxFgidrKr2HwLwvxkuMEtSqrbMvoLrSFps",
  "key18": "3Ba2UT55Dh6pLMCgiXCUwB7JCV3tPcG3mB8XrH2Nud5Quidj3Y6DTVdDhCLQaDWK5A7tyAhW6788CRQYzWvSpzxR",
  "key19": "5bhW7mW8sheM5j2KVqDsuNDMrH2KeY18FAypqkbA8s2Ji7HTX9W7JzTP66x72yj5tsJby5QysuR5RZKStnvFPG22",
  "key20": "4Uz1RPUBoFx2PG8ZxtgPNiFaRXiVg98jRyxmDAADWkuPtpeS1iRgQ5d8jnRjbmXFwFf9BrNY2TNXB3QBKRFfk3aK",
  "key21": "5KRrLvMVVvRMZ35zGFn4FhssfpmP3FPAshJ4yzPk67g3zVXpmmANa68mHkG9c4ZAMbXjtFAFJ4Nsicda9fNjbaYe",
  "key22": "5taH68isQfaUvguWwTYYgki2C1Vs58V6NgUfSzuDyc2ePa1J4VWYkvugCnLsmTU3ZH9RsZJD1hvpwXMuzSW5jj8Q",
  "key23": "26wT9SnV5R6gt12FqfazfPqHWUA8x2w8A1reHtDPLVPdB7Rs8DhupFXQ6fTkmE44AcVYcNBFonAaESZbkbsMy4cM",
  "key24": "79heG9EvCFng6fkXpNS47PkuEdsXdbzkfa3MY9za5o9xnYViwGYBFzteXTBiVUu5ZvUuw3ykunNyq5Z2XfbqLXF",
  "key25": "5whnC7ua79NTHhoY1TsVMj3SvqqFLcHUgkFhuxj4LKUtuGRxzyLkFVC9sbye7zmavb99YaGC2Mr8wadHxnTsPXf6",
  "key26": "329CDVfjnYM13deQvLVVb4JShxsWsV1nNM9qn8F21qXAaaoRNnrgd4Nw4Yh4NcLwE1ACkqDLntcsJx8hdwhqRmGe",
  "key27": "3pLourSbstBijGma1uzoZzJVSJuvrS3VonUay11P7GCiVVU3HQCPi77Xgg7xkZix6VtetNpb5L2pTKdd3m2sZhxN",
  "key28": "3vguNF6K6DNTEKHrSbFS32xkknXMBghQtzWKrmXzUGhbyszUhCcazCrSv8EjeQJ96JkE6XGpj1rMXjp5ckkqrf5t",
  "key29": "5ARuPZpBnRF3cmTL1kKhHqboWv2GGZofEbKrfJR2uSzQMJg71ggU9JobRoHUzQ9WThcYk51JwmThUVFks3gCqLK5",
  "key30": "3pVeTHTcVUagu4qn6uMBUQJdy67bEPiXXtFbXSwF8DUsY8B4V5iugAbJapcJNU3AxjZkeywcUyYUqrK6fntVPN9X",
  "key31": "3s6vuWsmW5FehoAzj33Vc1gz4aoAQWQwwa1f8isnhTdJwdC3MLTfaqKyT6UpmhRTFvs89WV25WEtEXV8gmcYk8C7",
  "key32": "5HzK5RNnsastLXWEyHjA2N5PK2uMHzGZ8BQxMSYXGjmUZrpTjQq45apySqCEubPyc77XdGmENQfECJoFZR6ihKhQ",
  "key33": "4oxnFjaB8ofSPCefAVjBLkRSDVW9WkAVWHHfztT5JVCJSC55sJispnPeaW5sYxeyx95CMwPuu8gKWc6dYHVAEKNZ",
  "key34": "25UqBdYULXH8acTWWrAnBnXjUuGwaxQzNSJKrUr3yYDkEgN9r6MDB7Njs6g9JSNrDLFEk5tpAZRtxR7VnXhQ8ru3",
  "key35": "24eRrtH2msm3shobTqAe96mKUPQ28iqycTvqnBDWi6PAexmQQQKL4dYXuX1LuA8JbEmurvnFyHZtsQM16kGWd4pJ",
  "key36": "5XDt95y7kd8UyNzNdWE8BoqWnDfj9CDVPReJU8fVraTLgPfYgX7fgo6Tk8EuarnoAkmsfpk1JAeNP5mcEuiwvnCX",
  "key37": "USncX41vuMWgRt2pVrUEPXUGWCuZ1eBNTa8LnHpjX8ECE82w5nMGxSGC1Ahtp4PUrG9iCZWTPrDZZqjZGxNYkDC",
  "key38": "5SZNkuSAZoKYeYFGEK7MKWBJLq2bPBSKvj2Duf1ogxAsBqgamzQgWBmR5HedGaCEQYnQJfXBnRq79Wk3Hb9eUne1",
  "key39": "yAY6xYqdzeeJaogNo2WddkFmzh81BGVnRyTKY5W1thGJvpaEdTq35uUTtsyjCzratkSBy3Nq648psY69AhujmmT",
  "key40": "3MfX1Xo17qnY6Vy9W76r2X6YKKeHNr83geu3t4L7b7gpQkwDc3MnSWhZpbRzeEAoShFFrT2VD6LqeotV8SRPWpNt",
  "key41": "rTSCTHSFR97be85yuLtePHiByrkzqMFzeASmDZSJjEcLspjinAdfzgDt8mihqEKiZGFEcWEzsDHiAk9hBs92d5Z",
  "key42": "4J2JDPcS1nGGNgeAfjiTTwpMyxqVTDSuEkCagQ17jJgd7cSCqFomxyPVdxgxeUVAmBruWEfyLg8UD8icWj2TNKe1",
  "key43": "3YUK9TpwLA6u9FQqix3iFHHB6rEFnMr92w83VxucChBTa45qTXyQCyzTFkaLCahKkotTznxbQnHB4nrLhp2EGVnA",
  "key44": "5aRpDFtQeHaxBHnWE2k4oTAYewJd2q95bAmfijJcJHBmqHappV4pQ8vgohGPs4LKYa8yqPKppLndVXCnB9sFYRW",
  "key45": "49Mj7gbFftfA7DG6ZLqiHg9X2vaFmzrAvc2AaCyKdmLTDG9TA6nVgJonh9HnjrbdvFhvNK7zN73NLs9jdtCEJm1C",
  "key46": "5ecr9Y9EE8Vb3EiACd5ErWGoeitQiaJLpQURCNdR3a6QXAusgXXLYHqxq5bWJd5u6MovgwgV829fv6rjABEZz1W",
  "key47": "59WQSUxK5HhVoSRBYcnoKt7F7ztaMrBDJfNwBaXiCsk3v48behiffXiiU1JCifUjjck47Bc3iDreKncj4Y5RLpzx",
  "key48": "4qkLMgZmVXEgDiw1qCg8PErGDYsPYRynLFJr5FJ1ofyrAQp53G9WJG2YHb3hTugiGwdwASfCjBi46fRNQiNLqiv"
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
