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
    "4cdq4gvFTqL5wy8zbQidp4ywVV85Ws24Y9mgufz1Ygd3Jii9JJ4Lgt3hBQsWK8CyS2tuMgUbdXR9yi6EfAxMDga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aENLaUrJbHJfo5vvKJm5yHp1kTTE6jQi7egL8Nd285UGvXxdYq2E8eCMArjXPgJBKyTDPZ8uzBGYyuuz1qa6V5F",
  "key1": "4zfj46pRuqrKe63c4h1bH2ZawwmnNqGnaGhmezfKVGTQDsEJWVDQhjLBH42DpREH6BjJn9nsHDjSx9jMRgZMyx1T",
  "key2": "3T5uq5VL9HoeUSnCmr9pDiPmYMkS7gLLHjjJywkd5tbnTf3h62vZhY2dMsdgE2LhhbQ2UzoEnf9w2exCvNBv1MSi",
  "key3": "45uxoauEyH5JzXsUCyBsUn64LG9cZ8tWJz6UANwBGVP4Euof5m1n8HwfDJJ8Jj2kB9zFJSkiJSjJZyp9hMtyj8zj",
  "key4": "51o2cLXrPH3cvZourC3Ljxye7ttNHKgmeSWg3YrEWCuAmxqLJ9HPYGmf51ugVDNqFqyasWx88RGnCVqTmwNjpxuM",
  "key5": "3XAKmVLYPQyLc6rpmFqVGTSccJCMW3nHkwpQh7F7kDMypnnYSg4fxo7BYakYBDQ7KLcCCfQH8suDobTQHTXS6cud",
  "key6": "5suCKMpDrh9rHZyuTX2r3NdKsitxbhSWsZFfD2Rg3TnGuP8ef4DTfgZiVEiG7XmLNyGfqSx6pxBbN289F6rnuRuo",
  "key7": "5MQ6yTuiuDStj1A2xwWzs6RnNcDFp6SoCw2R9CYrey4gDmpdUGrTsHbr4Qof8BzFtfYm8PBtBoWsBG8zj4mTZz3p",
  "key8": "5pAXMjy15MzrjiB6MjHT1jo3KGvgWNmJ4ta9wk3iBP6NC4Fot452HbJSEWhn1AnWB971maij5EVh4SCLQasRtpip",
  "key9": "4YLnPzk5aKf9xBf3VjgrTgefdba4VxjaWaXZzRv1MdcoKA3k2sb3os7sdnsLWip8LSA5zQoscxHeEtn4AWwtyVV9",
  "key10": "P6xRA5WF1M28Lmb8xcD6ri8bN2RNDXmGXiGQcRGFVJ9UxWeJEbYKwVxFR7bEfkFamQF3RJGYxDDvgA3NUfeVXnq",
  "key11": "23kf8yL1MHTWEQFqeAU7BfHyzFcpJfNpbDon6FAEfWcSPNb5pEj19UKsTnqX2o6SgDUE6ZJnGWVqHEUbKZHWd6aF",
  "key12": "5CTAjKHuCPZgJiHpnWVvg2BzRnfvoT2tAUiD11uXmtQeGzuS54g5iacDvFSrn7nR2sJaKQWo6LLLDgk5JdSEA9dy",
  "key13": "4qyW3aboz2Q7YRfxNzxv6qdcHB7UzB77iv9SrwGnY2a6hE8JiNfNpa5wvmhp5p5BuAePjKvB61YbnSGzy4HYjZ12",
  "key14": "4bTqAGDZjWAG7o1nDCw6ZTuHHjVN4tVN2Cjy8tsvaTGesHTpknV8Z9qKvBRvuJdU9Qj6Ev1aJKSL9U8w2UpS9pvZ",
  "key15": "cVKSe4wRehsPU32LFjhRBL3H7LiLTQ38BqEmYizxpdVZ1kgDS6mN7HLaNNYhSKf2v8Nw355QMCijYt6z7AoZy7X",
  "key16": "Tv7tmRv4bh93gQ22rQgyLNYQbUtbMAQHPwdw9AzN9VWx89ngijS1Yxxi7BmGarVVuzyHnae45rLKfFq1dB3JuMP",
  "key17": "2H3gbDUU5BLiHE4qrQV4E1Q4LrafyuF9XjaycJ8RzPbfKBe4qbXBV4rsqKzNLo51zrDdFpcuzfPGiyag57HnXrcG",
  "key18": "2A1YKcA9dyyxfN9MUSHnqi1rTS9LGtAy1SjFDggrR92yqJYpD2oKhbHm4J3wvDp3Da8tNRskMTX6aH9ZMW96FUbB",
  "key19": "4yFegfTrDFoP3FGnRF8ZJ4eHniHGMwWyFkoqcaFyGEr2LRgKuyHkGcZsphbmBxgHv6PXDKFLhhyXeaq4pSPRAgje",
  "key20": "3VNocdDYbRd1gGospRQD5PSWdpJZkRL9iBh4gFhBuN1BS61QuwniwWTu22MDnz9o6ZNLz5HSB9AAtzY9dAU2WauP",
  "key21": "3Hie6wxSyXp7oYUPxPdMagdcG58Mis67kaPn9U8DsgYv9zD8CRBvKK7BtDxPScco4YL94vZWfHQGCNAYaC1d3pxc",
  "key22": "2QpWJtyUuuT3oevgztG3Low4HAUjuvmZtxbfJj6VzNKL1FpxrNvx216k3V72FmFyt6yg8y3YP5uQa8vYpdpyVvaQ",
  "key23": "4PskARxxGjVS4ZuQgB3Drv5aaw5t713bLUEzGnr8JxQfj32Xx2rNNEWPoaKd6nfsYcufgqxJ9cdFhKt6dTP2VwZp",
  "key24": "598Fp7jgXWksgjBvmDycVhdkbQK9tJ7vqEs4p5ynKqQL7gQFvwtksTk82ioHayD83fBZPiSjtaWsi8D3XFMATrBW",
  "key25": "2rzHfs1WxhFKCCKG9iQE9frT88mqA2436AckGo56QpjQP6LmRmVBQy8Z8roU9tF14e2C6ghqULQzdAz6imZC16e1",
  "key26": "5SzQEBQycKFRz8iRwSzfFkWC4F7n21g65Z7C9KUTDjof7Mnd22UYKNL8EMvjePZJyv1VxrjXTXKF9QPDwsXXvMLR",
  "key27": "5VuiJ8UyhNQZMLJ8U8CWY7te79bgC3PJkeFdavM9AMVmwuvuVqcHhwRPjkipoffPVnunuoYnxoiNSMs28KKQZPiG",
  "key28": "2pu7PLXG3m99aGj7kjBrrDTbMnz2GCXtNr3ADRUAhwFfwLt1u81pNENT4peUfm892AAp8VazPB8bHSCA3J7arFZ",
  "key29": "2MkCeNHGHNKYcd5c7k2owUEDjpJhYBpATNTJjRG2gGXQdND2jqPdkTxhHpDdRgefa2tFEMjp9hG7pvwZsfeyz4m2",
  "key30": "2Qv91C7nrfQbsQVyDbndD855YPXs25C79jjd3QgePTRnjWV29HDAbfcDrKrT774AsSgjhQ43SjWKmUHfAM2WuP97",
  "key31": "qubh5q1A1G2pSvJ8MLAapaMbGQntWidNLYhp3h6gTwiz7aGSp1bEESmUvyfAxASjxzkJHGTLhp7DKrhn5FfFDSw",
  "key32": "5UXy991pnxvykAMeYWTKNJcRQggaHzftZ3b1RByEneSSMrrirbZJiAr8HvEweePxa8PPuqQq2MzQqFE6sYpm2qx5",
  "key33": "hCVzsHEZ9jncmF4n6LEvZtCfTKEYfTs1vSsc49jJkzLBe81ygkpNun6NJfNGsxtX6EHA9zzhn2TxWU9XgyDY7Pk",
  "key34": "3tCFsPdN6UZ7KjEkYu3XVwQ5TNDUWRsqmVZm9ncfyKpCosvn3ym19W11yqspictpsmowL8LoPnxuQYtoqQDLLDHm",
  "key35": "2iZxX69yKfRSgPBYNkgAmiEYN63SeuLzKY1Vi7VpFCCwd6jYLhXx47rGSkBoDyN9TVPz6v5wzb4hZ1ddG1m72q93",
  "key36": "5e7ScyxYTytrSkx6mo3gurNZBNiygiicgREo72r4KLCyswBZ7VVSFoDw1R8BJQDiCcxxRPA3DknLuK7iSGHkcaDB",
  "key37": "3cod2NqmZrRhLGiDQe3PbDX77cm27Lw1EF6iZaVpYZeUqJCQXGGr34rRZcFkeLoVNCSHFTkRoy2hu3oRqu4wzqNf",
  "key38": "2u7yqaUmrEnnPc92A12thsVmNnvYy4pwagxU73Hz2brcefxeT5Dixx8KQUCAEYyaRGzpii43sqQXwyZLzRJ1iwzW",
  "key39": "4AwC78L3wTesgqajqWKNLvZSF2t9UH46BjNHq8iPnuWv3SGMjBPQVURKSJ2bL16zmW5c9ZUNaAXSaQoMESr8GdRk"
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
