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
    "58wkX3ebUHYfAyU7Wtb11DBGW9zTT7Zf2aLZTxPekr9AXi4L7CpqDDYmh4JzyV7vv27i9J2FCUGVBvfvuMjjceM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ERJWUVjb7xTjrbFHouZTKPbYqumqUzZuyUvPLhNeQkwaBCKPqF9sSk6HocUcGcwXjMfEQyPgwoF7EaiXKxHgGf",
  "key1": "3ZihUfo7akiF24gn4qeBRZromPzrvVedJ6MnFEXQ1JZEKkVWVxiWGV2DfkkVgysbBS5J8vkjTmt1jaU7rdFX4CtL",
  "key2": "3m2KjEXiPEP3XJKT98JX65DgLggYk1RyjWs3BqWr8zD5gYjQ7ZHSJosFapCGckCsqjsU89Jd7FGFTNXRSuMwtY7W",
  "key3": "5Qa3V2QzCW1emRpuvqYDq8pE8wA49ewuxShX29zZxUDuXiyHUjE1b29ku7ztLCF4tCfBQw3DF2XkpjHVo7PZ9is7",
  "key4": "2X2vYUhaaAVwyUu1DJsCkK8qx8Ke8FXDSmY24nmym2ev5ZwMnQS4dGeheo5eLwsg9iEFtcyFTxHs59e527BQ2ddm",
  "key5": "3jPnJ2xKhCrVpSehNMSEdx2DsQLfT1nd7CFX54AjgHUb6XJtDHEvMUFBtm82wQnR4YPSQGrrD2osHaUzjEXvFk8u",
  "key6": "d2gUD9QmU7zzQCeVFvWibS8GxKMH1rcJUyRfgckWjVf4o8YjHEQdGU3QnRtGZnC19RZjByzEuR4gkqWdNYGy7LS",
  "key7": "2N9og24MBKX2iVCmaNCfAEAY76z9a9xhjpvJqeXn4QQskNJFUUcCfzi2jXmgDyc7DHpsxQk1SgGaFQkkLuQWST4H",
  "key8": "3HjFu69bBQ9ztWQZGBX4kDLFv4mNC1VjxyfFTcZpuoHA6HWAQo2FnrVxhSQ8Vdu2wQ2oR6wgxXM7wPiWLLTAVVy2",
  "key9": "o42E4ipjfSCY1pWb7tJY7jdpWUTRd4PX2cgv2sjsrwTBFUeGymzMEyd5Afayaxj8UTH9mz7BkQn1sqmxTN25jS1",
  "key10": "4E2LauWn6zV2nkK3xW3TyhV5vbPajWcCHY25kXwFYEjfxGiM9yf6WMQ12og7D4GfTpcPFtrhK3JtUvcXyZXXtjy2",
  "key11": "5ewCjKQELpTwL72rr5vesnCosq9bDmkMx5P8ZX61chwjShfheg4SJWTJF4CgbgPtpfhtSuDmfx9pM3a51YTXDRPn",
  "key12": "2kRTQhg8wkFsLneEB9bEyKgtkhTtcQadbyqpJLKUwGrpQ473w2F8zrsWzf8jtDGXT87p5HpfP5hdvKWMm6ohxQZZ",
  "key13": "3sGLdjuS8NwNsgHTTNoEVZmu7Chbruo8Z1CjkVKzByBqKQP1VBwLpq4Bk9yFVsD4NNsxYyLoApTD9cEXMvmEVBpV",
  "key14": "Q4iR2HG6UFa66LBEcHBHqA2oWXUozvnT2N8zwYMwNaULTAjx14hGgwJfgKnaEZZQ2PAhYQRS8NuoTPyB5F1LDrs",
  "key15": "3W1RSUyLupEreo8jKXSuja7ZFtY2938kZYdbnnqexqpQDDdd4bCvs4GpZRHisdwyRVqT6qDwL22ohNBNYmdsbaV4",
  "key16": "2AoQkGuobDzDwsmw16M2YZnGky43gMkoUU3q5QZKEqg1nBQTkWMBhpKpGkgTVZsVGGamcR9SAQepSZzS5t684pM7",
  "key17": "2HtovStMUyZo6Bjzy89TotPEijz6xVjh3hsyjvuACcq83r3HqvGztp4C9XYTuXD6aB3Gb1fi1gLFjczVYY53CDxs",
  "key18": "4SDrfsRizcuGH8z4hsnRuToXtKVXN6ZzyezUP8ESNoXybNJ1X1fkp847FonQhqYcncGG2vigpKdwvpK4GvDWC41n",
  "key19": "2zkZK5aqEFAxcX3MarpWD8zSeqvembLCG5Urce91LWL8kfyLkrJCWEtsRw8htGGCs4QRt5ZFpRdsankqREmNXWKd",
  "key20": "4LQz3abV88wSDBhP6p5RYvKkokmPxagSp18GJhcyWiRkbVimqBWMWjFFKg8joa81378UAvfFyExpBPrY3JwTczmE",
  "key21": "Scuw5y8n24x7ktbKVYa4gVEsTt9p93fgExrtBqHdyumRa75in1Y8B8YbvuKi8RMxzV4kVKrF1XcN3qFNouyepft",
  "key22": "JCAQiCHaqYB68QyP6tSfBrDaAjrkagzkKBxmM6sM5bQbywcdFMV1g2bsjWtfP6HVatkBrCVqXGpVqECcpxTohSg",
  "key23": "2wGuJaVggF5Me3ixTZxo18YZME1GNKmu3maYmjDgHtdo8oey4skQxLQAB1VD6hn24fDxpMu3zKe2Aso6hy8eLMiS",
  "key24": "5S9xB18jMMWsZNz1G13Shp2Pp2X6kMTosTasjgL9NArSev33ii5gicd9qs71cd8HRFkxVshNtdguPsxHsf5kHhYW",
  "key25": "2eiXsZrGxRhYPiPEMsc3YiWwuwAi4F969dzB4uGfoHJFyuswxmPx86xNU1kUDRCARWQGjXSFSpw4SnreyX5kk9fp",
  "key26": "2w7ChGGkENbUbr89JqQReEYwPXf2WWLwdPSNe31eW5Bs5VSg1MSL5efsPGhekm8sdtKrgEQWyrDYFEQRYP73oX1R",
  "key27": "4YSE9kWqAPxMT6U13M6LnDNj9PZzWJYeMij5ByC97W768ERTtF2H4PpwfgxF2gB5NjSA6m4hawvmhBkEQ62Z3B2d",
  "key28": "4qpSyEJG99Q9Gh3sxPhZfQvbypYjQkYpYupB91E6g14znPy92MsngrrpyoZTyubLrrbQGyCpk5nKLPQe3y24EnVF",
  "key29": "46QNG5jxQRGHWFoC1buQ4RHHbxqMHztukgdp2zycidUL4Ph6p3qxp9V1BKQqKu2eSr6WyFsph3r4H7B1VAjFDuEY",
  "key30": "5Jkafz4cwH15JxA3CCirEmQwWd7aCzjSN1bdsKYB3jJb7v7djDeR79fzFhPGwC5U2aPsY5oxsbUTmU3hi5AT8Mtb",
  "key31": "pUvkYdSXWWKmd22JyiDY6zL3zQPYzC3sWvdHvygnUqWFQoKsVyEwvtUGtGFfdzbkLg4x8PL8e6oo74FHzbHHF5P",
  "key32": "4ARbVDgYMEpLaeRWjxyZ2oGz8DF6Fc1ZMEFzE8GWyLAuMnEL3HxFMQJgbBDxebEjwkKmsLa696h3DqCrrhHYtzCZ",
  "key33": "494AxfpsMof8rP4vxpQpi58vy4Awszc6p7AhjqXYK2mWxqRvhdFz8zJabfUExQC6cnLLA1fjwpLofC3FUfNdd9Cj",
  "key34": "5ntYQjGCmzSqrLcXKDirxTDmDnjtKmivTRswnBpMakWGeQSPqDc7XLq2QFgiWrBa1XeQj3Y75AfoawoMMVjejCd6",
  "key35": "47mxU3c3159xDD4hnQAHQv91c3d3L5Z1jCYxt9yyAcwQuMkJvb9oy6DrJgBQAFz6c9gTDAkR89ipLiXnQL8LAfAE",
  "key36": "2he1NYCT6jzzSawEYzhJ2Dh1gQKXz9dRoeMHucVZP2Kvj2SkuSkXnWVJoSx91uGFUAy2Gu3AJd5UfWoagqFpgD2h",
  "key37": "4kE6R3HX8LkZtFkk7diSjoo9yvG3856UijHuYbZijkqy2KSRd2q77Nx776JkaAgE67LC8ZUkvGx2xmX3DHNxKuAh",
  "key38": "2V4MzojtEomWwNdFTZeNCkZUJc3h2ZpLeuyTtChTsGu961YBkQ2gWfB65dHbspY2GurpfYMGD8d1icPtDRBcGJvm",
  "key39": "bfsVCt81CLR7AAxs8cUkeno76eSpmYHkqkoGVBdwy2DRcAASi6YFv9TQgchBGgcQeRe8zqKsHP75RQ4UGGYCMjM",
  "key40": "393tKgzbSe114fL77npSPnCKK7kbk6YZnawr6DbjgFKUiDxnTh6uboD44LELVokG8L9R6nsekMtd1RP8mLkGJhva",
  "key41": "2oGPa9HQPHms3XpL7MwkUGugEEpBk6UcM8Z1YRCV5ysgV1SCKzVAGqYCHQimi6ftNojiBU3phNHNv9FyUezNBmEy",
  "key42": "47XM3fUss8gCuvHaYBjL4Hs2yec6A9d5xdKjEgkpDNSprfGLAZh97ZZyxCnw4fdgr298Q1exCmCecsuu7npoeSjD",
  "key43": "2qsnNubZ1QGAukXSKM154ea2L4o3sHvfAWNAJAZN3DMg8kYmToE5dyA11eh4FbAHzUqZoAkVJXHuqLXq7qMgqnzB",
  "key44": "3iwdL6eoQzTUHrGjU5uoN3XfDvdMXUdm4wqNmtP92CYdfmJG7Cyy67t3bFE6aRbscbry8U5xcfdkfseZ8hwYKhmF"
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
