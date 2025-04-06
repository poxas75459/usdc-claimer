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
    "miNuzXHp2K77cvVvNmumQTusirXewNtSEukhP6gFhDGRN1pf64vPDw2NRfWJxjp6zYqHXwZjy2Adw8A7xLRYiwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kYHFXtLxb4QQiWtWpTGTjWVca7WjH57CJ7mqKiGCDt5VQWE6iqAoBJYZ4ku2SBFYt1b6ZKU6U2MUDpPxmA1D93h",
  "key1": "G7Ct1DwZy9cHy4VFx9kTrirDc3kKPyV3vPy9En7kmtFTrHNEBEWnkBxPzTCTMt6stjdQkQo528hcPdnmrqKfv8K",
  "key2": "4BLFtqeDxwTRtCjedeg5WmCgQdXRt1csrukAErkXXGzuAHQN23BMUhFc9pd7nu7GcwD641MipGKGHe2jbMsUVrjQ",
  "key3": "2VUxn4fNVytt621TK4uWjPyZNB1oWLaMfNzj4Vpa6t3ipWBt2dcudaUV7DBp2u7JJUSVo9zkmxReBy8sPhG3b2aq",
  "key4": "4nKGNH4vi19jvzikJxL7pvrLgijTGqq4wWYV4kBPniyrrxuyEogx7zJdKStgGPYpB9RUp9jy6byyriLx6u9pRj1R",
  "key5": "5XjTdFP4ChSWxgFKaum6qVJ2B6hAtRAHB3K8aSBzmwkMkwkvSjTUuwXRsFoXgWJzALSHKkDiKTp35xnLzF1zdC4p",
  "key6": "3FjvBXai7c9fqgtDpmZJGnBPauHewEYseNCxfWEiNtRDJ96RUY2ynccpzaQ4QXEpKLoio78i2GuRsiPCxejAm2gT",
  "key7": "4hmnKcjmvKz93EZtSFtzxekDqZTERxB4aRejnhmTDvELguxzBTi1EqEGe1AYrCribSrpio3UqboX39LddxP1cEMF",
  "key8": "VtBpdtNwb1yCFuAjXoGtmvosHBmteGSHf6xFDPZtozNuA6kwusfVfSnanRZxZaLmppEonNXEHddCAwnLcmaFQY4",
  "key9": "5szhvu49wi7FHLZxyFdH9kZDdfDiNMv4ksXrcRgT8xqZ85ivrkEAJMEvohiX7MjzPMCa3NRwZurMx98EeKL7XNYe",
  "key10": "hMDnJQLNssnZB41Ys4k3Ljr3nDCAkAsBLX59KxdULcC58S4ZApg2vJMChSAPtte2MxPju8ZRy1stci4EbAtJTcv",
  "key11": "vL6Zhcszy3qWKfGjZL8AbXMr28oeEC1nm1Ga4VxpueGmQvFa3vAuXAu5mrHAChpgHMRbRmNB2kmavc8PxPFoWqG",
  "key12": "43SVBvv4iCERHzSK9bs3VMWuok71yCJuDpipTEp3KqgK9hQrRQ4rUN88Ji9Xsw2YoBJgwvSEY1EpmN9ex4qJncb1",
  "key13": "4xiC336pzwgSbdmggvg25d7D17dUtwQf4LzrwsgVWLQYLYKPCQkmWxoKiJmb3rmaJD6TrEea2swnJsq7EPbZUVVW",
  "key14": "2LtDzvbwh8ohRFddFT31YyBBMxK8vz6hfGgnEVzics28bH1QE6YSiRqqsY9c4SFMLPuzL8EkPFAr7xJYsu4Yxb8N",
  "key15": "2AMC7WA9FuYNg44ZC4tvH246gJNtSNjCxkRoR6qY1PcyD6fwtax2pPSs4deHaUmZiKRNqJ1ZrPNg2Zf27CoHHRZF",
  "key16": "Q12rKVbg4BuDnPM58zAAvyjpjce1vY5BmawnieUyk3vpMn5KR9mhqxE2gdnUSFS6pcfe3VNn1becn2s2Z3s2yqk",
  "key17": "45jpFCGvB5VVgrrsoADgek7BWGqAz5C641d82CRYC6W6nkJTotBgfdoe5PkFayzXfK2CAQkeYbpcpNfnfts9X3B1",
  "key18": "5rhUPzjBhh7TPQCWk5G36QnKZvD9jCoGhAoKAiBDWWDLaqxjQiDYFhgXUFrR8cXBPN2uemGXbUnbGQaPepLfhSxy",
  "key19": "3FYXVRQ5swdGRNV39cTLELHye6dcHBtBaaPeNSqHypf1kT5rq3UvMs4Mg8QreydzKRnaBC4jabfXq2sVwjmKmfyS",
  "key20": "F7Y3CDaQq13jjbJ4qYSFBjmFjVQbhpQwPYZcgLPfykFk8erRu2FyaRzUShwmKYiMHDc56YGPUZCEhNSRvSk4Hpo",
  "key21": "576fmQMHtHhCoPAi6a4PvN7SYYCKV5rDuGe2KENGD19o6f5G2XWzQAij656wsJToE9cwpkRcVwZ7UMvkZo4yHQmB",
  "key22": "3YHVmWzEPg7W99okMpBngCJqMTNjPweYGgUS8XSCjR8bFnSB7iA7fnB2QRxw8k4kybvRTyKnpQRC7i2YW7R1gaL5",
  "key23": "24Sa9D5LtVVp84pn4vvrkddJcgM7NcTczZzaP7A9WeTQwJ4mvT7qrFPH5UaZKSAoqkZEkiz9L5ZapWGHFZ6mRpR9",
  "key24": "maE2ZhCkj3LwX2rq8LRxCwLdnVm4T2DhpFUVEkb6qYmTEN4U3BuxVLXVjb3mWaVCKEryQh4mWCBaq89prPJ2qa2",
  "key25": "5rvcFKgm41RECseHcARWBXAESazp1h6d3to4tvfSPh2xPoX5n3wTD9ftDeNH5ArapLwPRtDrAmiELkmEwKudFKkY",
  "key26": "aKmovhwGwtbMhQTg8QmQZavYuPzpVGWBL5BCzgvCyKmrEhjbtsTWTYfMYMZpjTFTckud9NGRYFaEQDNZwGYsEb6",
  "key27": "5YZ9nqRT21XV8XU2MMbnAZ82rcX6AH7VHcrkWYpCEQJNeTYgpf2MeYuajRupTtBRGcnQE4JHe4thdCxF2ajUSuaM",
  "key28": "2YG9H4bWbM4Fkyow9jfwF3HDURYiz4b7mVPkze46RsUJm3mZ4VMkctJQ2Eg7DTBbdU1i19fJ4GwjSNdZarzMGwWj",
  "key29": "3Ek6CVemzKs2AFg4ZiVSDMrKTRkijoKHoTP8p4T8E6cV9kKobCzt8D2PdJjzZEdxgq8uyWVhU5CdYhRWhYH54rSF",
  "key30": "4wCW5aG8eWe6tGb7BAuF2ansGvWEwpnA5pihcyFkk3VAckHPtBxPEfYCNhcJYfxyVcM7DL8sMA9G7RVZzY5N1zUu",
  "key31": "3pDVhJdqoM79b2GSazoZsn5kXxMan9Ny8r4ZVeLoaYZSfLjyaTJaiNRdED91C9BynJXfqL4CKUX5pcNgVcs1ZRDK",
  "key32": "4wRh4n3bTu9o3igdPGc12mcURkMU9V64s9VcMTTwh11nWxpYXkHyjMt1ah1CwSaKMwryDjJWa2r6YTrqdH19Y6Nk",
  "key33": "28GP8CM7Vzdm8K5WP61qwedS4jsWaJ8mUp7HReDPb1hU5Q34xUiJevvjSa4FiDksCgipeC4wbYQ83Qfcx9DTWVmh",
  "key34": "5UQ6sYdNa64DeXk9iBvZgzst7LGFf7VTeCiB4LyKqwZoZ2eFHXdrNSViCDZ7BKxP2Jg5PS2VCU8z4DdWUJQNf7ow",
  "key35": "5zCcrSPhpcXZp8uFu8SYfeJfAbeLnCbJiDeqVQGYCL36tyW1c5TMqCJVTYQbJ3wHackPKukt6ZYQDoUzdfBVeksy",
  "key36": "2UBnLuxP9qH6VhdgJXSgoP8pbydHVcfGiyhaLxikdGuj5UgWahjtAtR1QKxCzmW5opBZPdTms3au2pPbUcQR6X73",
  "key37": "4mp1kSJz9uGa5ZvWBhES7Qn7jdXfF9hi7pxGYCkznZjYUTUqfqqfpWB81HY5YjZS8v2JnuCPkF6Nu7yC31QC1HKe",
  "key38": "3KqdtbdfHkKzEvCttnnsDcmbDcCdixZc1YpNczwDVoJ4DhMrwdQhLccGumJRu7Jijt2KYJU8ig5ZQmJ4ixgbabMd",
  "key39": "39GRivk8zuBTTJZcra64P8H5att9fXeFC55KBzuNybRRb1dAbtcp7V2qzVH7u7Lx1wqMAYgXdnG1Ahp2K3fPMXyD",
  "key40": "2s6sjF9ZfYQhFvM6P7hBqhvftcDLobi38X8ge2cGwBuTaZjMvx4XzJVggzF2CPB5e1qgbN5e2ZJb65U99LxLu6jR",
  "key41": "65TcTjoBQq33z3V1J9v9k9jj22vTV7Cy8WQbTfTKr2mKwqfHVV6qyccmxaHmp9grUJ5LaaPuxWo3zA3ApmVNUDQX",
  "key42": "5h2ZhA8mMt7gmk8qryaqcbYvZSSBj3rj3qj3uJGEykE3RnQbpUSdQPxEraxQqmW2u9X3kYWSeTx1CX6jMzDPc6ST",
  "key43": "2U6pe3NVPucR28T5RP9eZPt95NoirdN7KpcUaMmFwKiikpsupH9yiRJDoUaCDnxP5CbvSDsVcSpzfZnorCEPaxGD",
  "key44": "nntnojqod1wbrRWh95Q3TYFQoKdngSn5GYD4wN2KCQXUXRHSsdPX7D7JwAqP2rP18NPPoH3beQgMrQpEMTG3zsX",
  "key45": "5EepEgM11R6jZobdF7mA2n4SVVnNoXLhvxiDAfZuckL5v9pJsRiCWi3BQhpLCXqutFAc1qECxJxD8Yt3BJSoR3fm",
  "key46": "3yzbRpYXLfmUKfxwuG9cBnM9kA4wxwJB7XPvP3VqiSeayuYY8St2KT7aYNebZdYbgLk3ZrFysVU34UteGGdzdWsE",
  "key47": "5CdmxTVSSW5CBTuKKX7W5GUWZXoKzDtZgCbzNBr2AqBgTrHnyLEHWgTqap2a66Sk5PFdtBNnAWX9Emu44DbqApXd",
  "key48": "25tyNy2mVLMowd67HLQrJyCVJ2DcKXi5upj8USgxeLG6C51fM5p8U3jkqoBpe5bSgH2t7WrwGGkBsycKmEUHFpMN",
  "key49": "2Bnmk1X4fJxEoeQ3j72CWv5YMHtLGZ2sXpYbKTHX5MYBA9Mzr1CFjiGJJt61bm4Ed6KbW6sqwpGka7V7ZH9Dy4K9"
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
