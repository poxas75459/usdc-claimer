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
    "4TYTA5zNd6qF5aCcDqETyktFs9y89rLhVgsL4NxGeH8cJdder3wXicSuhHN65nv2yiwEn8WVpTWsUV5S4XbDtGup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkrcW6yWcLWaHtjTc3yMLBb8jKRdisKhvdXvmSsKtVBMW7o8cjBuxutCV62cvFWpq9n7fF2V483D42iX2XuiTqa",
  "key1": "3Bqp21TzcEc6abycyN348PUpPK8LcZQ5xNBZyVhU7XbwovRX7RWYR2q1yoAxU98CDnmk6KbGh5XRW4AaohkSexxB",
  "key2": "LTyhWh1ixBJbVCBGGnB49iLZCVsnz3dewnGY7RpgTogkgGAY8YKApTSorssG7fB2VmsYxWq3YoHSpq1w1GdmR2q",
  "key3": "4K2XGyKyLKgCdqN2ii689am6UtCpkd6xSMZn6ykubspqJ7ESuHowHiRtKRQbimrHcAZDyq6JmgiqurXEuptaqgHa",
  "key4": "2mHewLR39iqqGY9TfhfdkMYGLRjB5pLMtTyUGvFvwKrUTH5zAdP7ajg7ahPDJEAtJtJR4EXTXfLcTsLDZQbYVSJT",
  "key5": "614UC8R7RDNdtZaZQTjTxzLUYp17WyK7PD2yRb36pj4sd3g14LSEZL1C1LgmJNrmwSX8bL8vJ7iJhQh8Zn1yL7Mi",
  "key6": "3i2ULm8Y7ykDWCKxkun4WKuxpnzjjQNTHJt2egBondc8Hn8oBbdrtcEnPbm2ChFjiB5tu5UyjS6TF55uLzysu1my",
  "key7": "4hd8jCBKzZLAdRjUGkzsVChFZBDL9X46mHZnQAivWXwBxX8HHpAibsuUwNspPQEMBiTWCsRnuEb8DyWX7SxDqzLc",
  "key8": "WvZDLeP164muyWCotomJueth8TDdCVw5DssZPGDxtm6RyLwjnN3DuuhwAHonZCEYW8mWjQsPD3CibNRvJWQTnJV",
  "key9": "EtuXnxBbdp9NYwCPhhi4ycG7bGcY1QeEKykDxhjfyzdnKSUWMQeAzns1uD4q8F5UqpTFNRaDPBkiCNzHkfhmiNx",
  "key10": "4vMi4DxHTtK52mJeSvQBXEHah8gz6NTo9bAcUrH8LpMaarJTUZZmMrzAvkQa3FVvBnfVvaQ37xj8JKCHX4hMSteN",
  "key11": "5aAmSCfUfgK9aKPD3Dzau4Cig3URPp8n9oitKb59WGcGhFaTsUgW79dRmUu7bukaqYYaVyqh8Nbzkid8iFugx2G5",
  "key12": "3PTJVgxPqLae3XfUmFjkaXR5Mz2Pygn9zvwsUY4s1zyHu41NPpqKYSnk2vUisqV3gpUGoKL5U3JK8sboFHRt4Vi1",
  "key13": "4Z3GdtiTfgNYwK7A3KawkRaj8nVnfL9YsirfxLRHaiPiboPtFpwopxCSWdfY59zzu4aFWdc4AGPsPusnsWE5fbT7",
  "key14": "3yKYWrnXAg7hqTxUMDqndxah6nfjyweo4qrPYjfnqQaA3DxP2zFGcb5G3XyYx7dWvfY2GdSBfnjd1Kuteo8YqWNQ",
  "key15": "sZQPb4z9gkxLjXLDntqz92SSuCeEtbJTrASb4dwZMAp6WKZa6cTmA6bqVvostrCSgna9iikMC9QWfetsSMbDJDL",
  "key16": "4baTi1js5L9C5BM4eMRY2WLTbhtpdz1oXv4VtJzwYR9F6wFEFJzqfyk7FPWByHEvJXb1UPsjcvpERMvaicTHkQSK",
  "key17": "5LazUgSUUbzBnGYUNAmWRgpw2UuRuDP2DiPBh12RyB3EbiDLLULdYijXk1YtzcTbBq6UyXCCV9xmAqk6hoPXHwJf",
  "key18": "4xvwZt68CWo92JcSvWT2PywhzA9rsGTWfJoNuRutF4Kuz515cFeVLbwRgrZLmu7T9gEm9h29MjEsupr7Hy2HR5uq",
  "key19": "hEuRSsDXxkFcDYixKeNQVGDVMq2mGeCykwrUFBK3h1xAU4JKV1V6Uay9oW8Q2rKBihQqbGYfEDoon8WAg2uk6gV",
  "key20": "2VhVuW9KxDCaWxcXhc3jwDhpRYBZ3xoMJs8MAAMyrGWwnHk9wswboJis1J1pazMfVnF7eUzKaZefaLC7a735V6rC",
  "key21": "5oSuq94EqEV9mi43sJQdzAoa7zLXDxp8jBE7L3s2JbNRs2KtannyYGjae4gWTn6287Q4mUgLchH4ZXHrxAKqZLx6",
  "key22": "2GrQt8pYoEX9PXnR9kUBUwdu4Em6vLLfYwsLif689pooZGZ7kcJKKqS9KAeLPFhgenW74ZUcNomm81qoBSuPxA3q",
  "key23": "2g6ShpXTQrs97hWP9zvb9zQ1bLpijpBzqoDy2S5W4fRbrA5RkKMLVemGLBr6SvDdVEZKtoNt5R5L3LiAogWUmYev",
  "key24": "5bAi6Uk58f3TJaa8i1ByTNmLif1ywqpmUiHBW2TmntGkHyLQK2NpNPSJ131iRvQVByxk1L1u59p2ipn73VGNhHxr",
  "key25": "295mSybD9RpCB4oMaSgk6drwut44GmJtQYrrDmLK5ruD72pLgKzKQeCp9Kf8dCgKYTJvDm2RDXhH3v31Ah78LU7e",
  "key26": "ZsYYqddxiGnvosmEQdJnDaAoqnKGHQJ5AG9bpWuje3LmqNcPz6p57h3SyYLD9c1H5TCG4szpvvL5zF4MrRAHr21",
  "key27": "3Vmrdoykhe5x8xG3AF4dASysUYWeHfFY9RFmhBXay2ZuDr812TTHPhcWaerEopGTrY1yzT37qW21r41LpvUErYxQ",
  "key28": "596GmButugmABMqCeQYSBtkJNr4rJyweT53VfZfkMTuXVkwzugnx7yH6bwBDHUitnzRA3jbxZgFCuCYdECsiW1oJ",
  "key29": "2j72RcAnmqpwAHYYYoJcZvijgdUGGxFN3EBeypVbS4U134DG4jcz12UZBZ3NYF4DqrBmLNQCBuJyrsn7REYv3GEG",
  "key30": "3p1Z2VdSqdsegUkMyx2MpNS6JrRGW3LwB39osYYWP82k2BY5MYahxJzap31WdLqrPo5RaLUmye7xDmFCGfRK7uAn",
  "key31": "5FnspEo8ri3muKjGuKn4VbnuNx73okXZ4GBae23kETfmM4arXXN7FZp2cMTf9ecfsohiHrBocg1yPMyUY2SDmdhB",
  "key32": "27Jm1N89qFYg1ECbD6ZHK3YK55RsUhxmKhYLvTkKitjYHe63HvUdmLViELk4jSC1uYFKMzNyn8dfM7mvzitA7zMV",
  "key33": "5HxqTZmSwDh9QAD1VepLfDG3PtZF1EMWoDfSZECqng1TSdbbbgAwBk8B8eUjCfgnDzR53t8EE56MqrRwuvg9NFYo",
  "key34": "35AokoKRWwrmfZhDEz4Pdw3w537wSZaUoWWFtt1umPFzJsfcvVjrwgambtwu9Hf2XL8WDcQDbtKXcdqiXpNic1mC",
  "key35": "kpSiSN6QxfRLS63MPKJs5vDCFvWbRH3isbeemKsxMZhWiSZkGUvf6DVG9UaCCF93zSts59X68dGdR2hrF5k9aX8",
  "key36": "2oaAsag7rSkaQkAHn5z69p47MdknU7QWskVnkjwg7v2JZMF33t2foi1vd2difoKthVE5HNvfXw8Cft9Rnko8YZnm",
  "key37": "58XgFs5Me1zjn3HZmSgn5eevsR2T9PE2JTJ5rGJoF3qBCm9JsgCutaigPt5Npou5box7MUNt56FJ8mKB5RyjE9S3",
  "key38": "UafUKKkKz8pGXni9cXLFGPDkPRJtKf3S8Sqwg3ywz2ND1Gi5BdkovXvDLzLzH28bXqkySobKv5bp4qTU5uqtRRu",
  "key39": "3f961Ffr5pmpRKkJFyiXqE28qB2QUMG5FsZvsqdaS1NJcmmbPMKjqe5ZBCEA76JANAxxvQxLyAEwGZVpYxqrfRqX",
  "key40": "4aS4A2gKxRfJVEHKrCVpcypcDd1EUzhN5KaGroa7XdB751p7QG7QLTK7MjXaCoczfbGABD1iDAg7HGxgB9XAkqCQ",
  "key41": "5qKNH4DhDTBv4UN2ELVsJAG3ekwQKfAezUPTPwkgVPQBr6rJSmdqxD7jdRNbMcVZRJRozA5Y5e45u6zydQeKq22V"
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
