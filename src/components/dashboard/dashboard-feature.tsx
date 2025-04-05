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
    "QLBiukDzoPkp49shZpNm4n48kNn4QYRn8kbKyJ1NRKR3vFz8aqGi2NFyBmzqdTkZaoJU2WXhzwRGkLHnHcRZxj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K94i2wyZZL2p3VyoVW9L1dV6ei7egz9xKP8oYUyiEUFpyQmM6Pvn3JuCXZQ68FbQkWHgTnYmiBJbU79wn8mgoaD",
  "key1": "U9HXo4GCLX61iHebL7UjLxCUg65pd4KeqmD4TyZar6c1wjRw2FMosTU7kigVbnQKnCttKG7w8iocgL2qGu3EUmp",
  "key2": "3n9JAWr6sqBaL4ifRcqC5PEttkDC1jhXZuJN9suXFdgL4ZTLAjbRaDZjWQLA2TGdkBqzCcKb1rGr4E51wrGHWNWi",
  "key3": "3mfhDf5xowtzXJ7kPxLnumzUeed4QFtamFH2wR8N5tP9hkWQf6THxHSDXfsB3NX1p5PbzJMcCq91HEox16W8bb1S",
  "key4": "RUhvV4ASKizSUo3Jo2P1wtrLSp9beAYrvfokfBZmJytixbrdZecvhDzqRsa13WAWUHwrd9c1aTGZzLEGAyMZzwL",
  "key5": "3iuceDvKA4W6hG2M1dCb48iYHtnr72xFwD1qCznEhrdSRWC3HcG7Hu6xHkXcH6hNYfWwrUyeVaiTAu9KiucN6jpU",
  "key6": "53kJfqt4Bf9W2n9G4gRyNB8cLtoWf71x6NouCJQLCKUSqXGPBRSyQBgVED9e5apWAjh2DtTRU5gyxvHJjGewCbkY",
  "key7": "3rzoYhERM8Whh9EPJM2Dkwvgf6VJ1nPC5wfC8JukV5arC2a7JRKWrWKGsAzmKnKQSQzw2zTQr43ePbuGLWWBw5mp",
  "key8": "4xyr38do3bcjjnVcq2uSV6e7DefA8rjK9Wft1Ab7tx8qEjJZ7thztkcjeXv7v9gBVV1G6KjZDvgdGRbowtVQsm9C",
  "key9": "X7pPujMEsYZVeK1kBqm1ApioN3S4DH8zQXj9KpLEM6jjGs2Cfy57KZgnUEJ81uQSBoLBuP4NtLUFzqm2gSQnvNm",
  "key10": "NPx85ymvKLmAN2KnkkhQCBdVevqesioLr3HWKewsdyXQtG2o6Tmcpord6FUyg9aBdsSsmWXmMnUNB7uVc2zzhny",
  "key11": "4ARHqNb892a67nraomAtuaDc7CuUETUnDrm66hReSynAAikPnTV4hfp3vFthgZXQXzLGVK1JVPKdDMLEGXLToP17",
  "key12": "23rahZ1mJy9AXM7tpUcp3j5VcaUFNZWpNfwhrqAh2SxcUCQAT5x7NPXx46qyEZ3H7VBJprqazPNnr8MSdnCYqhGi",
  "key13": "JnKFWYpF4wHebvB8y7d1zcMAiifrxYQxKwrn6xJN2cKyWZy3uFRGZbbnsEPmSFMWjk8z8orhufzjHyb2iGLwmUd",
  "key14": "59yskHqwj9wZtAT5mvcLmgFsBFhhZ3FenPUVDrRxc85K8pZ3LkXah3PHAHXHZvkGGZbpBPy6dNYbSLxixx1P22UG",
  "key15": "5S53E2XnjVixnh6b2LiNYXcQjoAedeTw2ccnpfJdZcAGc4hJepBKYeGJXcCkyD3zu9Fpv6fvJTJZJXAJsBYoEJMc",
  "key16": "5mDrPaw1Jvgt9hu7S7tUXMeCH6dRQJnkFMfPM55R1gDYpFDjbjYzfWiUa2A96UZXTpRreJLQASnSw5PR5Q5yjhoN",
  "key17": "5eTvZmbdsNKea3SF4nKuHAgT3nDDHoMoUFgyY3JhJQSzdT7AEHzKdmPNcHLe1JDABDMvKkLnExhRAQ4nDXg3me2A",
  "key18": "5ZjnT92zjTRrhCRuiNgMU8MNVACKwikKifbQeEi1QpXUacuNZhYw3xff6fzMFAPc8Xnd7WDeXqayih7D1BhevnCK",
  "key19": "P7KARH6cuBeafTiq4roTpSwoAnT2YQMqKChZm7rcsgjSfQv9BjR2m3vs8Co1sMjMx932dy6jEqtaJUYUrawPfqi",
  "key20": "4uUqXvifrQBkzW13B5iFyGH7QG2cWdwtdRZit1zajYCdkwUjxCLnTywZ7kVWvCDnqCd3TJjCMPNDsYv4Z1ToHyV2",
  "key21": "qkPsVwUZNuWdUjdS3WczuFik6M8SocqKS272PFnrZorN91AfBAvzvLyuGDXkv9aKvCpjMvyu67k45skpggHXnE6",
  "key22": "2PYnALdfFM6QNLGsKtv1FZPrFdNwBXmyiRjPppqibvdSmhjfimHe9vvfYrH7LKQk12AaQFcmrMSn4FLTvP4wK3AS",
  "key23": "3bZcC7bxmdgi6bfwsVrXn5a3RSG6Zjn9aQTnZN47xrz5RADjTLdftgM6ZapwBhsg5oVur9kvYmPBscWDZXJVMcgr",
  "key24": "4AMyUbzU51ZuvdSKtMTpC4c2jUp3VDpZ4jT9NZQ9zmALjCx7t4A5c7dgSTgFsEbbUkSo7HSiXnk4GaFgHLi2nngv",
  "key25": "454JAMLVHToJRqhVjbEkEvMvvbAeSH9kBMgiQJs869W3JtynG8RwEbsXYEXN9G51aRRFjTZJqYRauUdqkzk79C4p",
  "key26": "53DFt8paHVqudMRxRZbjYU3Ts36TgpDZyKwLJSzPbUMKpyg4mf8mYnYWELbohgQdjhRqQozHhcWohkQLymcoTDec",
  "key27": "39kNUkLNgcyGgxvwACtyxze5AHTNE8CgyK8pxTmjGcTKwwbwBD83gUF7D9sqa8b7ymDkE6NTfLMC7YRsqdVnNsV2",
  "key28": "5HnN2XjgPDtmimLYQh66wLsjawu4XPo6adSaM5FnQNB58o7JJgsZeHpVZf7wtKFApqYd8udRF2e4PGXvp2bLeVod",
  "key29": "63dEsyo5HwEsdwrrny2SZiL49ke7sETERTWt9kKnnQVmPDZQnKzB2ydRc7snEBnxmeJD3LJt8oy2J88hwow8bDx9",
  "key30": "ZgDqnDC3neSy54rqRor6DLWGu15hcqGkoA7WQcC6css1NwWyjzzahHB52hduNLisbYGE3cEA22jh4Lt38P4hfFg",
  "key31": "3mv4upFJRecDndGmzVJaRjNDcmW9PKoCfKCivLmytWTWiJR6uGm1WRKhEcrbGdzg7L1WCfPTscPY3sq5ziRaFygS",
  "key32": "4S8xZgegModn26c9K9zNFnNZC4kooBdpRFdTAExERySQE2DhqtxEjuWpFVXzSBweRQ4bHfSQEkNUfXaR7UsRrEmx",
  "key33": "mqJno29Ro98iWxfqdAff93QHzjJcPioMTiAtxacpdn5SpAZwhqgSHqzQcL4qedpXcd4FeFrHEs6YhQUX1xhH2Fp",
  "key34": "2kiERrQVuFpDyYtPpbunPtm52ar1REvFuGzcd9TvExYz5n2KXBtxCmR8yqmXDCMJw3YR4ejFFhwtFy5PiUquseHQ",
  "key35": "31idpcGVL8jRKmM7jSArCYjpbSYRsEsw33TmEReqhs8qPcLRSJHaW3yxxK7WCXK76kKfwy9DKj7Mag8a2feTfXSF",
  "key36": "5p3kXPWYdx8ueaVwBnCfkTe8vyWRWb9VBfJNeKG8JNqyL6XhExS8sjYNSv4YXuAJAi9Qk28z1FDxguu2FSCFHfbU",
  "key37": "5aoxHF5QtJ3YJrSLY5AZ77xEC8FKjEveZeBHibYJjTPrB6UGijMj6SmkDtd1dmJ3NEBESbb1TaP4xy8uHxoA43us",
  "key38": "2FXjWzy5kKfzjXLSGkR84v2Ck8Mo5cd4smLB4NR7kae3ZupWtitKnatHPHZWeerdEpnACZUBXosWsqH9ZSXwoeJe",
  "key39": "WMrrEoQ8vsJwJnsvCv4QEcFksgbmgdPw7xcgFRkbgJbCfSvzsY7MuopyEpBy8jy81yNxtxr3LYKxhJVrZCiZ9FL",
  "key40": "2SK5GD4Mu14rHggnctrkGTr8eKC4YLKXxNRgVH9jEPkGR7Bmx1DeaY8w6ekJYoDRDFXZGMfz8ymkUYUeZx5NMCx2",
  "key41": "5RvrgvbkHWMz9yZWS1HjQn3rV8CMXaVFRUikbWcpqBNj7fQorTKGyaz1FqCpaBsqbwPeRJ1fJ1RJmBHZLiexr62g",
  "key42": "53nrFBU2sPhwecHogQss9fgDjPHTQr9yBsFrjBFeUquMWogC4M4uRhrnXjpteexWA9RfXxk2mVAha33Z9VFCp5TY",
  "key43": "2o46uu8nWQinsPAJ7YBavKEMyjFnYGzxmXoXbTBrFLCQzv7ifM6MEafRLucX1kULb7S4aqEY1zmRfEzh47WUiSFH",
  "key44": "3y2rwE9dufXh4yW5hjJpqnjq8Br6prkvVJtKVfAHg52aRCHTPtCtY2yxWNrgXosUYijKQLRhzdiRSBXXUhwz1Tte",
  "key45": "bQnNz6cpDxQyWhWWcAar55uS2A4PMZSdgPi5bn4QjxApeCze9CYQe3UjZe9ps77Tc2CiiquqKZRHwJGyERyXSpR",
  "key46": "21W7Z4yK42raKpdC7Si4BuH6BDUc4wus969PfvgavfYrNGqHqLAU52cALV871BUR2n7h9hthaecT6PzQCC4hbPRC",
  "key47": "5YPQrFY9zRKRydfWzUspQWGaEYSk7h7TDTWG1Nt2JRT2CtxSxNZ63w2UrY79iEDgZYWh89erwRXeCSEhdC9xNFFv",
  "key48": "62DLnngJqrgp7DCSYgR6q688jHByt32bR3iThYjssk2WKeD7PksssJVp84GFcqzCNvmtpusWTKoBHfD28iBgFaPi"
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
