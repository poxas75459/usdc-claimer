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
    "4A4ur1dxE9YKXGTALxLpPwt8p1KFRYYiMR6LcdYY5jLSoEtsiachhXucAEfgCnkyC332jnJRAoZVJnVdYkpBpMVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6aFt9ne2pSuxjGfer9xD3sbUj6rYT2HrMJbsri9Jw94x5mN5sEYwYEgGan5nehXFNz849QsMEu25hrgW8T1xBY",
  "key1": "47xBEawPdSERoZuMDR9ETi5dYZq3hhTCk2oXikiXoQkVKVPMV15euBQtNbN88PKH5tTP9ffqdkcGyYLpBm5cSCXg",
  "key2": "NymEmWCuqUTnMu3H3ZNeWE7yko3J1LdYrUrokTpRJnuR5BrpMcbGfbx41hCAmHTFZxZC8cYDaudD9XzCtaREiEs",
  "key3": "3HGFiTKYaVvzjjCU7wopyVoZPwLfX7PBz8myinthiVm8n5aP1165CyZLhnYXDnVNU627Xe1TgWdThVSGVXwcpHTy",
  "key4": "5xALVFeNRTv3dYpVHTGFsUDNecLztrErGQsqzXi6fMvCCWt4RjLFrPxaqMyukTTavd2AhtEEwB26kL1WCPGBqupL",
  "key5": "3NzWnP5M9NBwiPCGLGPTdDZ27QccfyUhK2KJecsqkaZiQu9Ns93ptGr3FYLrZmCYRTGrFeask6QEYWQLQyVeS9JK",
  "key6": "2iGw3wWHTtVGiNKtcLhyfJf3yN1D62CYXUMBjwxT6uvaNUYFqmTaBT2BFUa7Uw1gD8E4FjpoxGrg134vJBpxwGUB",
  "key7": "5eif2jh1XeHVbSjjroFB2iMHS43B4Pt8BHLZ76K8uo7pLH7wJA3NkJM9ZdWKG2w1a3wDYcSj45rnJm4hgeFYvMoF",
  "key8": "4r6G8WrJ6rdmewuz6hbFub6nrUi8UYScnrqujgZtkujtpmevk3eCbcr8L9R3Y6j8mcSTXvuWHwcWjjbEZRrubL34",
  "key9": "5NC51AbJ1BQ1kTTQCxzXYumQnYczJmTStR7pSnunr5Pkv6oyqECCUbxoaHiUsMsMnroV3zxFjtVskESwihbaWDYs",
  "key10": "29p6wrdEaLYm3JUJxmA6NCwcBEYTG8JzJrfRgqEFVEP2e952tmdVxXVLRzoubfSUaCAnSs8jKZHx5u2PBQamoD6w",
  "key11": "2mM3zANnFNGX4ZKPkbxEZMQZsdh9KmV2EXGG9cf6cn1TtuoVjpQ7dXUUpnWodWQTA4Ku5t3XT3vdeXNi51Nbn3Uv",
  "key12": "3Z1tQu99XKXsRSqSyfTHUfkoQjzUAdCyEKR5917DNsNSj4xdVZGmAW467uQwgv7qwUtyexkcXV4ckfvd3hDzKjCF",
  "key13": "3pXaycwQGDb2bMqPxZWRLwyrNvtEzmkHZz7gUQ2j43z5zVQTQwV6whfMAbh74gLwPv2hH5CPYYhr1m3FtsXcECsS",
  "key14": "5wDd4fnvoNvwivJjL2AfUYksa7bD4rqP5ymt5DZppxWihpHLseDs6NqPKpSQHGQh4qguDgUtTjD2ncwSVpaFVC6z",
  "key15": "4jWUq6e3KSoegzoF985qrfh16LB9RJgjwGMaW8M9d3PEA5LTvHgvsTvERrypxAhcEJqrkbCfwgQZKVdYMH6Vo6gY",
  "key16": "5qGHezrAo2RKgi8EDBxczEnkYT3hkSc5Hbo577uoNSV8kd3W8iL2tTTHDCZSGzoNxgCnA2ruc869xqfdBMeDtFLX",
  "key17": "5FoodSSDw2yRT4QtUDpRXQshTon12b53JsDNS3gjP5ume4LWrVkiXgRKuXrkLBMDX3zxRmbsdSXNivJ23VeC4QHd",
  "key18": "4e2v88gK8rbeFdivJkouBQkwxtFNYLWkQK3Yth4nua7KuopAPCT6diPWfXAZwSttx1tqBVaGTJBPGAj5eEv3PGEE",
  "key19": "315BL1LbUiQKbE8iaii8YDAaDPqNDQweuNqtDaCqpLsNbYhcHgudXwsSWcAfGbcMGkZn4kZvfBdUq8gSfpAnabLP",
  "key20": "T4BzCCu1YvoGman7P2As3KMB26b9c3ytfZRnWeJLD3bV3a1XPdQ622zoUpo8sBvWredSLYpUjwgtQV1LAsRXxpj",
  "key21": "49UrRSeuiX6aTxgaLianQ6VuW6zH1DprFPquB2wvm5oGYJvmgZc55MokgL9pwwgdS8RzLALQqNLrPcJfW1oryBii",
  "key22": "5HV6t3pu6CtAhEv39yKopD7QgaUebxQXrhPLcpYJagziAjESuL8rC1R3ZD9k9iJGPCmPBhs4wQRiuQAMr4G71gsm",
  "key23": "28UuJYq8wXvUP3z1upWaZJWL4dbZHM7FPp74ezLqEGqPVEd66Koxk4iT3rEygs1Mk6ZxijeSVUVXLHJ7eBJKuxvz",
  "key24": "oyJf6GBiqrVedPw2frMpxCR5iXTkTurFqswYZBWgdorGyhePEhKqJ7zoDgGyYBu6XgyJi75SangRKVyDGutMZiu",
  "key25": "3qxzVYsBqBonL6mjYwyquo1D4imSEJNTqmyMdqehS1QKNB9DY6sHZLG3XrUcBd3tCfuYq3Bc47zigsidLH4hHqMK",
  "key26": "4G5EmJSc91qZ1Mjeuw4QBgKL2S3gP19HnRygCryMQfucwnhaNpW2fiMZ3PTZWh6YpoYEFx8ngsGSZ4Hj33LeSnKb",
  "key27": "2wDuQakkgogYJTMsrYKuMhePdfVeyjr7GXnbnr9s2pTMSYUVtXJf6hj5mFj3ot2fgCRACzoSnsbHXr9K4uf4koyz",
  "key28": "6a8EgN8NHEghj2NzzvTGV29Nuz3TS48A7ySEFHzmYWYtntaW2oM1YjySLfuSKhqDqEvZt5E6ArsgkCBDEpHJEKo",
  "key29": "2ZHAiC4KtPX3as9b9e4h56bzokWKttdezzeEKAZavqKjRnLryTvsfQt2zxT3nAmeCmYcJHWfvzDKxXw3cBSK9JR8",
  "key30": "2gyBojJGJFDEu9YiTY89ffErMAG8LVd197zYaetR9PGDgt1hp5KRNtQbu6LacuNWVXoGoMfYyA9BdHSqxrZ9D6Dm",
  "key31": "3kzFYZw1voit2eVPZUCMwdoCqKhPwNKtFVAAgKCniAfeq6rDH5jtCVwrDpAMUExv4rPedTXGkTshM5YiDkDtXawt",
  "key32": "34JizEPka1RDAWGsrGHFGbgsQwk34DShXibxjPwNxpq8BkjBuLgjQE4vhx2XkBtFgnYZrWXJ1dnoL1eed9KUtzdp",
  "key33": "F6yYGFv1rrnGKx4MrwSZjKMTZkGHyfWCzkTfcC91uBhdQPnH6kz2gC7Es7qt7aqzsB3rq2XRTBkaRxv5etAuyar",
  "key34": "4XJtUjPYCyZEWCTY21596m1Q5HqZpNuVac1FpG291PF91fr17uEwNUJqd6UovdNA18QpY6rmySq2jN6Z9L6GbrgU",
  "key35": "2PaxHU7gJQoTso5TP6bw78tEduTDSVqfATCobJgQ1qVx44dw3c9yjsrdF31NpA1opAD5aeW5Mqn23aoCsgZJzSrj",
  "key36": "53q2qKBHiYXd94LmDW6KHxdaKEzmUeL8g1okjxAtXYi439kArBtnahRvjVQHecTmiBuX3yMzafyn2i4AiSivMkWk",
  "key37": "3nAySVB6DbK2SjS8RyXSjsmjU3ejYbBSn9HdMwQ5tySSH4rrG6GRZ4JENBu1zysBj7y4k9Lbqj6wCTEDGXJwJobJ",
  "key38": "4FYGmvpWnEpQPGc1X8t1wnFLSv9cz7Zd3qgxhEj1eAJyANCrayXQLd6EnSbqizoGsKYGbeb4LZxZyYmVFBxHwpFK",
  "key39": "44YaagrvAhY9zGb8aMxvm2psvHW4UgPSCNeNArSzqHo8sZYQkHZG8mRmoLCqX4utnboEpKiPuMGrDFTHHwSAoy9K",
  "key40": "2brFc6fufwWFDs2jMYY1UJvLTyYviXrYjp2PpY1SvBQYbteMTohqi7sNzDPMgEnyWNFxd6fTKLEyRT5LPVVWhTmf",
  "key41": "21hCDTxih3EfKWnVhkyWLigF3bhRj2ac1MypkMUY2uqLHrRApDnSaPTvavRQfa99NEcCfkX1ntEsmR73VghRPi8Z",
  "key42": "JEjEKtEWT7kBSd43TmjHtmtVDPVbB1ApPMuAaoowWuu6aXLeSG4eGjryJWLkRzWpBci3N4cdmBCqM6V4MNGRqr9"
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
