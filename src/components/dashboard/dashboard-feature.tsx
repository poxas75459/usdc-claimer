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
    "5mV6WxBcSnakh6MdCEvcTcVWtKcGpcdSyaJFGSsqUvHd6zSDyo4TEhZhmGPpQYs26aeastEkMqP74iwFnciLNRSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sjqimuv9H7E5pK9rFeLWwPdK8f5FhcKoAi3GtYnN52yvQ6foxrxg47TL2EqxkBAPWEBUGuuBSrM1e7xqfAEjL6d",
  "key1": "2nByTr8Z9dEXVqKtsEcQd55UXuDKA9DHfGPYm4dMke7aVeEojJwUDnt1xHmtRxVhGFmX1tpTfzyewQMcWv2YBi4d",
  "key2": "5dK12psHrTdikYb4mH6thM5eJfRS1k8JToKZRvHCLB4EPWJkr7tRx2oZTGNYUs1Yq2fKKwVVFFCZWwUNUydKkD4d",
  "key3": "2LZ1HPGEEAfHNVgKfu48JVLSWDcq2UFf19LfgXsDeB9ZFpSuaJvRqhrSR7eSUeegubxYNbVCBCQsivz9edMGKCks",
  "key4": "2RVPo7ydVi9VdKipNW6stXpTr3shWz6KempD1zAvbvovLZTxVS17gicqgxQX9YNeSjTd2cTSXJWLLRioRBm35nqE",
  "key5": "53uNzsXv2HCJE9Kw1358UD9YskC7JHSUvn8jduNF9vqnSyXhZCgGHjrpHSVQMBBbhB3vEQ6vcRgirnWQ23hbggvs",
  "key6": "271rNLH9NNMmBveFKXJf9BFryzciPHFGKwEGSENMXoG6bLkq5danpMA18EdwGvHBGeDCAHffqCmzms5m5uL6RSYU",
  "key7": "3g132f98AtX1nD7h5Y3ymiW5LpqFc7YV5dg1Wqs4JStcn38MRGr5VDqbFdu7cWfSFsUh5jZ9ebNr4vp2iLFKr6gr",
  "key8": "4xiyznrgBjHv7g9XaG3G5ddDBbzfvGfoh8JW3j4SyfDkhnUVqxsLxgawNbJrLLUk5qdTEuwD7rckNXf9yG7bSN2p",
  "key9": "hG7KQbAmRoPNnjWdykzgsGPhn4Qbs7JRF2kHom4gNQPpUcEUx5o41bs8sLNFyZ8cKTcmepdJbVmkvaTehzRju7W",
  "key10": "2aukyGR2TY34SK9URcuZQbBc6VmyQUxqdxDa18z8cwfYx7wszoP3f2nWSVQVHp1q6sojMGZeEq6KiJaay9W94mR9",
  "key11": "3Yb8UD7iU3SQHMXtU5PFzjyuwYEXkVYZXYtrRjiP6Hm74rcjoZmxq3ZN69AKXVQYsvaU9rwFjXWT7DBQSuVYe93s",
  "key12": "5DHD5YWMRnbkm9twYpi4Q5gZreAKv89DbniUGMamn39vSNg6edNhuMLofJnXVcAxLtfhSnwN9JoiUd9ZWsGHcq5c",
  "key13": "5J3QJErbTZW7CbNAFWohJ62UpaUrhU7XZXGKZmjpH2uXWKR98b5TmPmoGH5J4o8yFjeJ8DABapPQPhrWveQUC1AG",
  "key14": "2KpL6Eg9AxEJDkWwWDrZae3wp9GTYhDJ4QSgy3aa1Tiv5rG79Z8gGGbH4h65K4YFkx3jBFy37D4TNt6bNJ4ks7Q4",
  "key15": "4XSKw8r5HKLfrdFNmc3vfDodJiUfo4az9YsbknUHkT2Yba53oAFL8mw5eAdgFLjrk2wMG23Yre6ZjJctV8EWJYCo",
  "key16": "4Sr3LDRCM8wWGrBz3Mm4mfF9G3jwztj56ezcrbfYiQd8G9cwUHJs2JmoEhhbn11SGovBMmEVwVc8SdjAhiCsQCtX",
  "key17": "5pHoTn2qYwv6YXn3xRXX9imMi6tLaUq6v91tVPTmfghN1qqcsu6V5MyrEm6cGwqpD3htrot7VNbnBRgJYiWNwVUt",
  "key18": "2sQi2C2bY37L7bVAdTA5qGCK5qRHMQufuZs8nSTRw5mVc3UpM3uoC6kNAAD7Do2ptwNUrtevqijDsrpEGHQpjF4m",
  "key19": "2bM3o6ABRFp72QmcHnXYrmnGdjJBYjNTCgV7LZWTtaBFyyqf8gsaX9uTCn3nJAifRqkfafzmxkZMqnMLYUEKcpRk",
  "key20": "2LVAxaosQwTiu8neCmKzxUeWecKBvBiE7xi7uxsBC9PxFecRvwnoDSUUthufdXYn5zQ5omgqPar3GXE5unPnm8mH",
  "key21": "4bwqH9VjGCEsd5X1bpdUSSPfoNGWK7CxJxYFRnSHanherozot4PEPRkCjCqREEvzQ56H8nWWiGHT4FPaidmmC5zb",
  "key22": "2yVQrCCcJ4Ho3dmaibxGCQueXX4RasYjtijGm1c1jwqPxord2nbXEHf3vaU3qyBrRrBRctmjDihmpvb5NGe65guh",
  "key23": "23ReK78wsJi67qMbJdvFxsbkExjh9e2hrKnXtc96JT5T4CrJrWCKiAWDBD5kBZJs1kLrNbbrPsPsYidWL5jZZ9pP",
  "key24": "5ZAmgMBEFVcgUorBcF7jSVSRhuZpZj8QpA4hAkvjYtC4utqZiprhAYHHVEU3mzbEiXPh1x9P9MLo2Agoag9cqq9A",
  "key25": "ULTyHPMMoz1coVryqKwQha76cuaqfhNDhn8jHr2zhPvsfrCWqiWcK862N9iXBX32jZvcFksdVjTn9P3kv2JQSFQ",
  "key26": "21tzZEsmo6BxxtqAcx6SnziZuEH4PMwUYgv3KtqiKZR3UGBHo6QHbk6njG1u3r9oA5G6rr1WbKwJUR1i2fVfsu27",
  "key27": "3LYh1ZaiTY9zDkKwptR5qU5a2RMVzeKz3jHSBPkiNvZjopEwa7tV3AfT7q1a42pVnNVMPDLnc3PvzRA2jAfcBh5F",
  "key28": "eQpkq8dpBpyNrXyhLrqJ7CKJDiTsyPbdSAMsjGchWaa9zexP83FNP8KAM3kb3PP4FpdhQrsj2dQCP25Br7nNWdp",
  "key29": "Q83iA2Av7P2vmgx4T3dYpRxNWHrzZU4GM2s97q1BvTXd3Jumh4CLJzhtyq5NTWn8TCkGsKopTgpw8EFX11Y96sM",
  "key30": "3WyZjwckPdh2rdCVb7muVpZ9amHdYxdRJu8LPitNuhi5hnqDGMGpoySstoFf8orbdabQdzz2gc6CXK43eBaFkej",
  "key31": "2LkxF17bXbgKdxnu9P6JZyLitx7eX81ibhhPuxw22KSiktjtFsQ3nLkPYeDbFfZSds8Kj2eoaYB9Ly74KAp1XxTJ",
  "key32": "5FBWMRFzCimFAHDhWSUGuVaioUPn8WMs7q7tAtqEhUXwgVV97sq865sLXaMQYBBt4GgDTtmEujH6Tdq8thfFGLxW",
  "key33": "43yJMMXnj8Qigb6TGyknqUsetpnjLocUYPeHWLSmL31WaPaAvN3c2JCXRiPPXDuorT5ij4tM6nKJXqsT7G6UJgEa",
  "key34": "3dXXFCyD7P8aMnCVFG1NG3KJgPsFfPH3vB1hVLQZeCCWBMjQAcwRBdo7EKxg6BSLtgWFDeJtE72iJkyYYTdbFWtf",
  "key35": "2txvSmtbs6xQ4aV3f4zn5cPyCJc7f7ZnHrdTYLxGNPUvYxkvV2Uhhza6L7VcAZQXHWgkpi42m13q1nskiQwE9AuR",
  "key36": "H9wTv8w1EJDwbFc6uKry5335SBEKskuwNy1e1GEZVqnS4Tvd8B82KC2u1uXEFrqyqUDeQQQ69AhYXXsTjDzvSmA",
  "key37": "LcKXVd59mfpRGdBYWP3nDuAQv7KrfXC4og4GXvPVb16Zq5Vfawbm1kZ7DCoLxFSNpEd1pD842fTdmMDaJAM9VQD",
  "key38": "2CYsrrEaRi2zHzMCYquxA3wc6YjRrWL9MwHyh2ct4f2y9nJrYf2CVnP7YWNQ1F94hAEbyaDcpB95JLeFLMcDZAkS",
  "key39": "27murPhohtR6EjapL442tj8cALUTM6FTdumfiEehKmcf6KH6zosirvjrAsJXAFNUvjv4PDdRc4D7tZpRHpnAgRbL",
  "key40": "jGrNFRdtS8fZgLyLgqJFHnAx9EQKq7W95q5Hp1EW4KgH7d77PVifVH3Gb8GMKyjkMAnR6hJceB1amujGQaQ76kK",
  "key41": "4i2msnD5UTxG79E8NUV4jD7bTkjZfuva7eA6EyL8ehnex6gg16oVJHj17sKqXHtXk9jctCutrtFqkBbKiY5JLmVE",
  "key42": "4FwqBc6GzyJMUCJ2u364cr6E1rPb8qrWaajrT9Mtx4w75LxDoht37FGGTCLSJA7iRsCFKLcLRd4oxVR9GTbAiiRi"
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
