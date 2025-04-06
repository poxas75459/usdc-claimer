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
    "3J35wtt6PYCViPkGLiTinD9ZS3E7VCEfwqDksh55mboo9DUCh59gL4t9xFED5ybMyJ3DXAUf3n2u2JKwmAgqi6jD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VVGefF8bYbA2VqkUzBBp7ggSe4n9BhyFQmLEeweUU4BMgPRotmZw431y8uGvK5fDNpocuTnMwNdgLwk7jdC2aLR",
  "key1": "cVNiki19zJdCgGqK6cn33YyhtacFm92Pp23h7AiATnKnrtdxk9PBpZE9qV2kgvbJ5w4mPxzfJoAfbMfT4TebMmn",
  "key2": "2gxLDEXwVbB5MobEDaDpH8BC8qz2t7VNUPaWPncjf7b5A33CTqCL5NxxK7MbDNoMNqi858tPDUo9ifmhKg23qrS8",
  "key3": "Vhe1S8yyRgjTAxLLrFQZxJQUb9fm6wScELfhf9UffapPRdLZSix6PuLejC6orntZEHKwZVbptwXXcueyvV1PWUF",
  "key4": "2q1JhiWhBZryFdTnB9zZjvNJV1iSJjoAb8Ycko1bvvDyjRsaqSNwM9mtJDjGXZjELsMQNnUJyHEEjC1ENGo19LJL",
  "key5": "4nmDN22vTWMV81hKc2TdcpfRdLERAjm4GV6Gd3nmoG4XsPHLdz1ituWyaMLFwYoy77HudwoTwMH1Txf7RaTwnhrc",
  "key6": "JhB3Tp7ij1aCedHwjFAAmpqQDvuTeKSF2T8sYPMXvy9fbZ2P9yRmBZXN8xpeTs4fkLw67hdKeX7FYmSygEMSc4e",
  "key7": "5Xzk8r2iMsAAiMkjSs35HHYrUTFZfCmAH7TixoNDxYERSF8uz3jzHFHgeogxZ9nzCvFcHhAWJSxBnErepxKM7seJ",
  "key8": "37PNgizgzUXhBnetFyRxCFbTRfVXpmyHqYMbrKQ96VpYE7UoJfcQ4Rm1qeCwBaxygvqNeQHmNXG4WD2cyCswKiv9",
  "key9": "2BPBvgfbwt77pKMiJAUNsHErG4mAdzfiXWVshkHCX7g2rzvoD6PNvgVjibVgRnLXCtLUSCWzCUjT9yEiBPjumjty",
  "key10": "2icpkhcHMz9sYss7GyWdhCsgVMjKbBbaEL352fArt4K4whRMcPq8BMoufMGdUusNEvXsu9xCSYDWDn5oxKtaea1o",
  "key11": "3vHL9a1Yg2bmxVLy7GxVVTeSkdgHGJQtS88VHP8vR9ziXN1bkPsF2NkF3jYwCVcK6S1fKuDQkLKJemtPzez7PqCT",
  "key12": "2Mgg8zBb7fgNHXtQSNaTTmvRv7h46SrBkhNCrx2GJFiXEeAs3B4VcvEU2vtvHfaBNMup1BEaGxJnhzm9AVE45ko9",
  "key13": "5cJU4Q3WgadkyQReGBtBLWS56mawbkU2ddvvJj2YZzuCtxTURRXVPgUx5MHzbdoPHDjQ8MVJhf5Q8RTg3688r3mv",
  "key14": "2opxFpkZ2Jrqa851sBjBGg58JqKVdyNG8zy6gcEUX7kwvEPyNoAaVWeT5cyzqL7HJbMDdxntUDEwwe1V47xuXD1s",
  "key15": "D34An1psaZGkwEzM6PNGsGi9rLwjkxpRDexCdzpoEdcZzkTbKatBDVcSq1rWL5DbFburDmkzH6qKYtE5hwMu4FT",
  "key16": "2H2ZCQjHMPQ1TNDtqXN93tcdQh6cTX4xPSw823ivArEs1YmEYfXEMv6TM9yaj5hKmFphgrqcLjvpB4bRpsPvaXn7",
  "key17": "2RxLQW7tyZJxJ8cGjm2pPBBoZRLtFewadaRYiYsP3qs1Z6Rh1WgD3aJ63phRGDavzzvhH1nA3hyHFUXHE9pdFLcf",
  "key18": "nfhGgZzCA3iBQmWmZeNqo7ebZS6ETdkKjBRDinBwgxNopM6qFmmsVsKeNGY7XPECKQHa2nJXefACeBZ93CChMjN",
  "key19": "5qPD7prFf9RPnN2mFFHhcAmQVw2PUNfTkFMDmmg3A8K3n5dA7WRbMUN53AXUprBN33Q8kch37HCwWp3vcctFyMVS",
  "key20": "2rRHnpHH7QTtF6SvTY2MqMf8jfMoEMro6JKMWoTqVr6A1Gej8weS9vntUTrK79tomfvE8i7Y1sbzhZkgHb92hM8s",
  "key21": "2eBhi7x9JjPpX9RnjrUqQR3g2H2HP1ipEJrWkhJuG6BE3c3hwtCKijMaeA6zG5iXqhSnkktHUXLXgyfRwfMRZQoU",
  "key22": "35H9gdoRJchEgbBodjjD8j9pzmpZeBzahT4yqLfBg9YFLvJR6FtNnFZegwVYnnkuxWU7XEa823JK4sVcDKWLGWYR",
  "key23": "4EnpSCpniKQnfFicWZhEoS75htxDNP5YNfr443raG9XqCVWdoe6uNvgB2kSUaZSjriPp4H5AHkxjwvYUFApo82i1",
  "key24": "4zYoNX9tpfd49k5YjuiUCKje1hw7ALTxeCkD7hHkMMk86D17LA4JECcb4RnRR5fGrkA6Wb8gCtJ2sjzRx5cCSzjn",
  "key25": "5eHZsk7urzCVUPuFLd6HFxJKmYpJPEzTPV3N8i2G7hKL6BFndFN8hCmRxnpFBTf2prVZ9JNkuVY1cHPZF7tSN9r3",
  "key26": "4HBUZzkXHGq9Z3hRWGi8hFZZU5EYEH6oeiT2C9jcCjktSn9yjbfwzJGXQ1ZYcD3aJ1RWnRiUWXYhE9MuTE7Sf5Yf",
  "key27": "2ND9agg6V6TbAin5FHHLxHA4iGhguUg5WhUatRYszsRVjJMZmuF6SPhJYTgKVmArVYdQFQbywyW4624XFQ8zwXEX",
  "key28": "46PqBSXzy6WeqABrtxPpUrNzBXWEGzeZoku6ZwEh5A4UesmYyCh9Z448q3W2PGgTXKWyFfLZXGBb5XexgyMns79J",
  "key29": "3izzHmmXZkhespawAoEpNQSNQReeF5gBCNMJPMR3uRi4EkmLJvMtqPEDek1451wV421zSpUMsGzfjsgkA6pWnBpC",
  "key30": "2wNbm8KNXvTj51qvZ1jwpGHvL8MD4FJ8W7WKaieNGBXcRHizaKUeLKgNwRFrKPjDBaKybkZWBMZUALybTNZMnotR",
  "key31": "2zEKRgSRWLaLeW8ZvZewYdLeo4KGyy68Xd11TDDokRcDKEXtkkbPVAtL74Q5YvEe8gGE8Bd6a4im2a3txidvNxBL",
  "key32": "3bEvTmCrbSCmVn9h7BAazwzNaBUPrjPLDhR3zcSQZa5nnHeEnYbAYtRPqaDpaZwoCk7wWoqzmzTDvXHJh56TiFFN",
  "key33": "5ARM9MtPMtDJVf8xTUt7rtHBXWkqtzH8gZspKGKeTjfXMm5XTXsu1NtjvUWn9DMYJhE4RiHiKTqHxKL3pQhv2cJ",
  "key34": "3SoUfdT6yf2ghobnn9sg9j7kZ6TxkkuVezYoNknECC48acLRVn5e8w5L6vT2zVwtzqpwhyFUtdEviEzeoMYgXY8g",
  "key35": "5E4zhM1oQxTMa37QFnLKmuFgRzrSivhGgNVKMVk7QeXsSCaWAQbMwwpUWpCy4sxdpHWqH59Pf5gDLtN1A9PSJBe3",
  "key36": "3KRz6MUvNtgeSWZW9ykf267UCwr8NwLY8GdhXDnieYA2734mQBUWYh4exBZogVJox2hsDPjHhvaHVmYRR9tE8SAS",
  "key37": "24FT6Gi5i5nmHxHf7RUcbF2B2vzoUbg37i5oS55gWJSLgXGjkSfvoJ8T69B3WCQAfefWg6Fjf5boni1otN6ygug6",
  "key38": "5TSR6NHhu1id5Lq4JotnPDw7N6u7PeM5uyM2sBhiUkQm5TohvKuaxe3rNp2sLAkDZf5eXFy4bkQ9cbCG4oFFtv3F",
  "key39": "4LiciTPuaGws9Cae3TiBtwtGxL8oiMGdyoaKEkMRTUHt2w2Nq6M14WkLV5spudyCsPrGV3opCs4fxLnhep8ZLX1a",
  "key40": "3btvyv4bi99Hmr3d75mpdhEMJKe9xW4M1hVWnvZiN223kYz6DkjFPpzmaD9ydYbjx7ojrnxLSEDEzZT8gJcZcuoa",
  "key41": "62YSMHgyNgM1bVenjGqb1o6RznUjnh72pHosxEFaHTvsXQHEpMizrcNgS2n93NMmraAaS6sVDYAcPKE9WyY9mMbU",
  "key42": "4NPZUjp4PneT6uWGPo1CqZE8z36PKDkM91T5RkHHJ8F1Un1YihCp695VBgf7jqevKgMY1Y7E9mBHSwED4r46Qzva",
  "key43": "5Cab5tvCEeBaJPQSHFjfzrgdMf9PmbsZWx2cN2fwqVE3tgnXm9GhhXU5ncxxKphm6W6Y9KpXZjnzSLbnxGGA5qu8",
  "key44": "5TuA5UZWE9GiaHF1UTbHaFU9P56JeXDEg3942V9Pc5SRfTKbM5Gobh6uYN5dvkisZPQtCSH25mVxuhQnBygzb7rv",
  "key45": "5fyU3Vz3TDLWto6uVdoDCyDF8saMXPewoeiaaKZ5jKkxL4bgxi3k3dry59DaBRK9mR9rfEJ3Yp2BzAc8QHb3h41Z",
  "key46": "5ocmoEs5zekyekAcuCrdyn1Qs9oyvQ386DMDVhaJW67pqWjtZRUNUSmWmcrX2JdUZgxJEZcxoa1C3ARKmGDVTdBk",
  "key47": "5UCmQJH8KyjFTDRquegJMrfBJpLr8pXJRmMSgMw6fvp9qxP7g84wLVVvWEfqGbbNCeJBNrEqrsTLYPNfXq6q6jkq",
  "key48": "61VJvixtDw31kUR6PcvG5rQwE49s8FmMCnuL8GpLWT2BcQGLpQzTaeBkksZxTpuzF8eCap7AjPkS2K4t7HoUMrQ8"
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
