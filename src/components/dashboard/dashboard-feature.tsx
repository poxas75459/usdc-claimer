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
    "3cXYSvX1xnsXE9YnJZZz8udFPFZxijA2tWGAU3xDTC5gMDBorPbwDdj8gKCb8umx7X6U4PS1ibjpL3gharpDTKoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nmdLysiFUakhBgucDSuuU9gJechnUjFbvmcPimGeUVeuhESpQmjoGFBe23dX97wGkxvKvZqhYNcB1RztpCQqDZR",
  "key1": "RPGzFnGFGinwq9g3fdj2gErbvPn77jcEd34nRs3HYFdwhw7EC3Fc3Nk3wp3HGXEnLg7XMR5Sx5dzFNes7yyTAdD",
  "key2": "5ggWGTpaSfhmPsRYpxeZWqZnyui9qaTh9ojbPAob7E9NnTS68QgwhDF2NpZKf8z7sobGgBTnLWtU85M8EgrnN573",
  "key3": "cvwHMNzZd6ynfNiQKnPoaagFVnYvbUPAd8ZgZxSELDhTpwTVQ9ZyUHS5mLRCKMMwjVcMUbAWDDGivJasbrgK2ZD",
  "key4": "5JgymN2FmJJeBF4uxRD83NaTirkRea2uRYWVxh8fak8xDiLwZY3GAzFYY2BnNHPAC1u81mpWXpwvdeUYoZ8DkKmE",
  "key5": "549XhktN61DyhpVFQesDqEtdr7YYngysuxdY2q5THMCSy5sEcnmZmd7HzXDqmDFJQYgR8MRqvxD8kkNfn1Lf8oXo",
  "key6": "3TXv5Kjqvn5ncgGdJRnd2DUPQvzjgi7Xtoq2rCrvPS6UUNLo1H7d6J1bDFhkTiMcTitjmDjqpf7CXWHZy71fNHz4",
  "key7": "3S7vJHiw7GYv336vMqLPKtUitkFw9RdotCK5tNGEAZGYWwmzYrrm1UpJZRPhSZVm4xrwwU4Jx1j8CycFhVQhMcn6",
  "key8": "2PJi9wKgD9yqwnC2RbGbKmHVFHXF5NW47qj4gbhod5cX21tJqmiCJemub1aH8vpRiYCYZHyHGexfTaEEWmsRaZFE",
  "key9": "56GHywRnxCiEH9UuaLZ2c9wMqmzF2uGXoauw8pwhFaVW3AgoWEcPv4GHrqG9gwvkjhxunPMx7WWw5MW4ncQiHRF4",
  "key10": "5oStgDXZvwFiwQMkrRt4cNpFPVBWD7FSXMnt8erzrtz8udEDQUqob2pxgAHMM4QcqM9ZZi1sL6f1CVeFzHur42zm",
  "key11": "5oXtwnnxo3873TDZYK9gGYxLCZKsT9Yc1YHzNvLmmnoHLdw8cytWCRd3hUNiFgnW1YUr1XHhHWjbrH9QpQybsU9s",
  "key12": "5FvMKrWA7XY3BUDUaSn6VyEaEp1ctMGVnLWuS7Jf8eCSuyotmp2e1CFSqpKDJRazExFXXkQ7oBfFTrpc2W8PkbV3",
  "key13": "4X18Jt3xF6ieQM1L1e11EnDJzm2Pb5R8ZmecjbL89nV4KyvGQeVLNmPXFXaHE6k1eYAVJeMoAozr4FMwK4YCSVgU",
  "key14": "41cK8GJ4Y5dbdFTXizrQHiDrqcgPPioUoGeUVRFDCEHRLt87ySg6jEPJQn39eSiKx2zpgBykthGo9Suh1bWVGWqn",
  "key15": "2rRDRxFxWdAmkHVuqVeWD1uWJvKqiE3k6TZEGgfhkJrn2MXHmxBfBySpnzv5dF53GKtvjwc9a5wztzokbRFbuipk",
  "key16": "2SD5xhwNBBd4oKPckPfnrMP9Q67XpFJqY4TUWaB2fk6oHjkj488XaDpoCZvRrXf1TobzuMybPCfZecqW5ruJ4Bqg",
  "key17": "5X8TKYXb6tGAAq2PB7crTA3RDTkYW3QeaCdEQNVyLMRmpwoZUi4Ww7DjHa3DKMDApHdwv3jDbEEFywdiqsfkqo4E",
  "key18": "53JPHxgF8kmVemwm35Fkt72aQCZbUnZ4TGWcmLZTsVsQ5k7DGT1XqkYJm63Tqn4X3UKMnB3xhcco2CYci91babJy",
  "key19": "5Dn1VSGepDeFAmMAXiCXK3fgTUG6ZXaoubHo6kKGGXnM6q9dgeod5tbRrjTjJVh6J3nFdRe3y4gGwq6dPymyNuuN",
  "key20": "5hwoJB5qrkpz6CoUoipfdQXT5UsjC8Yct6NEeeSgqCgQ61HvReqeJtYDsCyjdyRVBaXY34wkehuXZhrLovsVKD8X",
  "key21": "Rqc8EtXawGnRrnJyh6KkbNETCcQaUEJY49hE1YHGV15D53FUx7zDpLk89XzNKcuho8vpaY8Drwu3zfEfrNVsHS3",
  "key22": "TMX37SgpEXe177Bfw9tW36P6AQT3UuuJsRBopyX67V6UJzwL2reT6WYgTrVTbUCKpfxaTFP9CUf2Npv8ATrntxh",
  "key23": "DW23Hscna38oPZR6EDiS1EV9BGFs6PvozPDZKKKaM6WkixfZUAobFizPQH1afqMkc8rnP1RAQCnZmGxrRfPAjnL",
  "key24": "4Cz22nnNQQKzuLr3v2dH8STTEhiMCLCLjQUAU4Jjs54qq6BRAcyJzjWC9wQQqmXJPu85oAu3CGf5skNnjVihb6p4",
  "key25": "3zzNQeSWHxi2Huy5uk9QYycBGTs8eavUaE59YoSr7jfWN2NexQGLR8yV9u4f1yk6sG9SvUrYnpvyb7x5eX7L8rpy",
  "key26": "BXAMggu93sQrBWRJWPR3KeikJs5qC3x6sp8zXcwh4dTpxQpGiVX7WSEcNaRYKj2pdeVU73vnbcsyy8nkpVZNRwA",
  "key27": "5VF2r2UvUME2vopr6QPM7KRVfH42F8bhTNWsJ3gPfHjavy6x6eNN9MeEQ9rQk7J85cE9Cv5ugicWHgiNQWe6oP2r",
  "key28": "3X2sjbNC4LV8Gyir4rpdospbaKatcgXYXkV87utMgWxedF1LTBifpGSxefAn296LQXSxPxfHLBvV92y6nrwTD3Mz",
  "key29": "3kNXn8G1FEe8XSrJAAiPF9psRBSWR6jApbktjHUX9Y8Bxvhr6Vjinv8xg8fGZfzhmhFy7GCkzKQU5SpmT37XevJX",
  "key30": "37S3sHzKLj4vvH9PsYwMde3URQdPW2z2rygQHyWBEy1YiazbuUpA5UhPBFLDfeyaB8JYpFc77XKBDS7d34yocZ3q",
  "key31": "21ZXzD9w7bmNuUyNyApRxv7cs9TscyiynNWjupsoAFSCwE8kTF3SguP9cpNZVfjRksgvrBB1e4hhyPxbWgrG8E3w",
  "key32": "3fXvu73C8fh1EGTSkddPc6WYRckvTbUm8nVDG81WrTxVoFW72FY7KFrhMwvy7HCevn4RukVvCKBfCZUKijTBYdTK",
  "key33": "4pd6FjpZDDnS24KoYZHxKLtkcJyD7QktNoPeCU5DC3LGWtTiRQMN8HbukKLTvXbLn6cytHdsfjTzMpDS1jinpdEh",
  "key34": "5rkXqZztx9vEnKMvYhsV7xmFzWW6t3zWfttYvVhZySgZHsamryfvY9QxD53PTqhqroPtCXGAPyZkAhur659kUwc5",
  "key35": "4RsAGyDas68hFgttZKXoEbDLPDGEKKYYpo5Xukf9DnifDgjdQ4WA2zz7o7REz2B3xryERD3Aipap6ZKSoxUTzDfq",
  "key36": "4nUdBn97z2MRiPdnPNU9FVB5owZVZTXGBCArvMgSkjcprerVCbABoP5Mtw6dZqnfDb2Sc8s81n5efvvbes1VTxeA",
  "key37": "2TLAfD6yUoqArpzk6Sv1BBnnpge7KtUR2s7KRJsqDbn26Vf7MbZVZoxJ8i8McHyykscZJkhMn3t8W1JKJeAjknPz",
  "key38": "2cmYam5D52FR3F539449mT8LPaAvimaM7foc9XfgATXm6UXhubopmjN9mjyT59KRHLNK8Ky2TDLRNjJrBDpcfvcV",
  "key39": "3uTMWiWApHK62qvYPDSPHAWhY5pFtvSR7C4MaUXdUJejEbi7fzadnPuYB1SDq9XKHHXKxDCMjjerDh418ZPHd5zn",
  "key40": "2ZQ5HvCTXqkGXQQkCexm2G4wzac1gtzXzMTU3vY7XSdoLRQGDXmtXYW2sE4oXMtRGjdcUZ1pxsshDWg18BBLBPtw",
  "key41": "4eggUFnQkF329pRa9B8gVXpXhmWdpBje25kzjcnxdcW7hLJkTyQaX3k3ek7KchGCbtSpnn4EWTEkkewQLDxwiBCx",
  "key42": "2uRqp2yJWG9kvkAS365GRCUeLGeumHAsRGQVKngKS9YXz6u6EryFZiXWuor3m4rmjvD2guczaYnskpeyrW3R1eCR",
  "key43": "3sx5n4nVyGyNTUARutGCxWxRC7VMf2aFCq5HHLscbuXnyXM6ughcDbtKCqe2jQhuEyS5ZQsYcydBVQsBfufNcGou",
  "key44": "PWGeemDHh4hfCnV6zFJzKmbbo2Go4CnuPg1TFvq9nKk4JVFoJXhmUtRuZwFcCZVf2ZP1EfD11jyFoo66rFaJwzF",
  "key45": "2DrsbLGEwLr8UTwFxMa2aFeXNKC4AF4dLqjFqEZgg8SCZVmM8AwHdQDEWn7zER6W5NyHqv5WSVasp5fgBpkNohc1",
  "key46": "3dRSfi8DpeT7nuXhcQFqLK8vxATgwizCeLRQKUooymhnqGKRyCjN1icv7N7BL495RKav1aSjGqVbb18qdSKbYzQ1",
  "key47": "4cudZgkUL9GePNoiawnb75H2K1xmyBVkpnhwxHDQHekP4pryJ1bfBrLcsZSPScVueXMgw7aUFueFLmLTyGxChowS",
  "key48": "4yGt2cZqikmXs1UbPUW1akfnLXaXmbkngYsD4T6xFL6nzHSVEZ4BkrHVuPnuXBMz2FcWMLAEMUy5wy2eXQ48kFeB",
  "key49": "2rWpE1F2DLiHyN2m2KRwomaQJdFzBQzStz9keNgNPrgsQMGR4ypX4FumDrRLiuVJvN8yWQmBm1drH5RB4hy1jJ2y"
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
