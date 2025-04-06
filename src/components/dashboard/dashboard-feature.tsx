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
    "3iJuRkqA4YLoBkLdePNuLUTPFnD6J4yNGT7mQpdEqsx8f4Kbmch33igvMPQNa1ag7cx2PbkaLkJ3Vdoq7gieSVV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMo49R4vWnnRimersaKUB4YB6Z3xCtkoqQYXBH1ibmjsv5bPDtzjAKJR9VykN6jx56yeCGYgyRQX1KbhiFxTqw7",
  "key1": "5Eazs8eTYmjPpD13SAYvRsme5K2FeeDUd5Xd4Df4BcXkbsrTU1gDwFMAx77DEGBVPXgYXduotK9ogWDPNwjwoY4P",
  "key2": "2qtm9metKg2ER2hgFF2BsbkBWEKkY1BiePvQPq2qvRf1bUhavLa4gYSbsQjFnDZvmdZbHzAZyp6MY1fYztngeBkh",
  "key3": "3435cS6VHGKouwMgA6Wvgbpx2utpWdQ8Pegqv26M2GxcNa7PhdQkkQriuH367TrzVNUtKBx5KSHR3aGv6GJ9MiWA",
  "key4": "Tx9hUdfREy1UXL35XMLuF1EzrZ98tock2rDPi38tPAPhnxctUiKgJN25oyWNxb7iy9oQPLcSK1D53NkMAYm6xYK",
  "key5": "5fmCpRdWb9fgU6BSJ9afUbwJwpXYKS529sAfFbuYJmGVvpQtzYDgJx4vnqVmskQphvQv1GBZCgBfDjGY11Fwhgyu",
  "key6": "66dUkpj4zxPzUXmMcyZBhfWxsh24Fneh4ZZypUxmKq9tzPKWDXBcYxCTKrknArEV1nAiusPVWb6VgbFg7G9WBbQx",
  "key7": "ZS6xLUEpyKHhUqjg2LSbnimiAroC4EWHpX2FEq3QMsW89LCv33RJf8fjYNZhHawKAFGo2VCiCcqHhQi7mh4rHoc",
  "key8": "5vCPupg4JbPEyhxzBd8JQFP6Fd1m91BeiFfgm7VEgiL42JSh2tzUkTiA1CtpRvzEGHpHCCWKvhMZGbobNFQKNZVp",
  "key9": "3kr6WTeUvsc4JmfGFq1MaLTU77sdj1aaFztrSJqReUCPSY5WEWckfBBedbYF9M8jYjbMoka5pP4gvcKBJwDp5FDT",
  "key10": "DrDEKq8WBcbc6JVuNSC5Ma64FkWEMYHfjpg6JuVbbYwk7QNkh3aFE1uynoesm98GUq6YdNJ6rh6tut7gHCHKwRa",
  "key11": "67FjLim2uxy53WEgUSU6WaPGsbGiwbtmtKWfGUgSndC6BEE15SvP42FAqAM5h4bwYiaH3xD9VAk7QJWhtCYiTpZs",
  "key12": "5N9jAXLkipWRmLe9GNmfAoHggHPkosQqh3mqfMgwC5nNCqyMFKVA4yLUekyNGA3R87irGfR8upiYZubYDrDuSd78",
  "key13": "2Umhje9paGu3HHZDDVpZQ19QgaPYFAbiY143eDqNAG55m4eYvPaDtoYAVB5Uotvr1Pmcq5iMEbK5STa5SuwED2Xg",
  "key14": "3wA3Tsov3AyuTyymYLP1UnJPFrLisp6TmJ4KLC8WLb3yXoNyUG7aVGkPASvcT7is382q4EsnrrL28ncGGuieSCHm",
  "key15": "65DUDoR7GW7XqtE7VQrZvBua7xEJf4aRw1pNppyyv45dqq9ZqBmC2fPQbf2f6EuRS54L2SH9CXmq8UiXDhCgPsBN",
  "key16": "3N7SNCBNszFYELTu2jPSSdSqbJsbqv5W5Y85L7M4KEa6RZQogw2zLbd2LjN2Wsk97KcFpkjJL9sj8DVcNALC1kEU",
  "key17": "2oD6eN1fdWD2qSV4hFuZkD5z1esajAiLPGZHPCWiGPXyqrMgW587BWjdiYtgFS34hKkyZ9NXLZX8yoAcVR6WJsoe",
  "key18": "nqE1gnFofbLFFHDmuexKNHmcYhpNS7SFWMRDHyjWfLJfoodmkM4AUAL1XGZamGKoN3NL9QcRQVqnjQrYkKZjSfW",
  "key19": "2yMaQx9SzfMJ35Viggx8K6JR5HKS3vHv4bNHkQvvBs5eFs7b29UV5HtZ21YVhfXADDg6K5oV7A6oTjsyHhpzSUpj",
  "key20": "4n2VyEnUk62qLAFWih1ArKfQwfAub7xj9VbaAmGqfSgMi793x7kwRpKHtx71oQWaN3EZadKwZq2UDYwtoMxs9JW5",
  "key21": "3NLS5LKmB1FLHPQABihNaSsRo2DoGNKZ9bN9ViSHyxXbac2Cwevnny4sV3PAZqXuyTf9bnWnpKD9j1dDLkEyk76G",
  "key22": "55jUQpxf1wVNnapryLAX67rB1tNXzzh7zGoh1S49RvhJP7YSuC5KVdfyFbFVxcrvnnTwzLjWLQcuUeVKrXXfCSwJ",
  "key23": "3owTkW8BU6K3gewHK8UtgapUxswK3UxmxrJdtwuDNDHE2qG6kJ5xwCqckQmhhp1Vj6HuWMPuGNwjoojc6eQAKFGQ",
  "key24": "2S7MqJxyzvu6LsQLotp14Xk5CNy5EnCmNbUrrxten7RKaTbYX6A2pzcwEY4D6f7KZ6AJEkj2skob4m48JWoLceV",
  "key25": "25Hp4cK3t6RnW4JyYfeymUxhFh7QnZfxormSsZgcDD4BMsTpAbp3K8HciKovzYAYpu1FJvZfPjPd7Ew6VyKCGzgQ",
  "key26": "bzJTxhYS6LCwS5cBPTrJZV25mwgu67rjpsuxxCnbbwNRXScDrnJKSDbL4iy8TkVevU6YviLFav9j7Wcnb3636Xa",
  "key27": "3pVz1EXRB2Aa63MzTUhZG4CvaUQRvY4YtDY1VrzdxPvE4q8qRPXh9Apw1bwMsBCUhNM1S5Lr3nFRxYPKpAv6WSRN",
  "key28": "3vUEGnX5YY6w79yAHDGmxc3mhkKkRMsHaUvBPX8KfRMGbmxYYyHpGNQf6D6mevscNczgMfcNhXYK8MorijEAZht3",
  "key29": "2UX8eCKomBngDHpFxue2oKK4r19n2wnUrSVCzuvAPiDDBZk6bSagJDLEEYoYGje7s1se8kwfBgajeutZWYPP7MwS",
  "key30": "27jQXhiM7y1zXvJUjaesdLYejnRvW5FjVZq7i1RsYHxwMaqHiVYNHMuCP2tf7YAgpspCrYFuMstUqKiZCCSPTcuu",
  "key31": "4b2NcntpYVN5aMKVzY1n71h4jwWjbf1LnRwdrLrtDY4tYb1yZwNzbbuNkaGSjWPisw5c19ByWMDJr9LwX76Av61x",
  "key32": "2Aomog6BriGCV4KSfCjLmkzNmyVXiqgT4NCjopjUyx5ZFmkGKfNAUbBEGH4Qoi1ZDaBFccYrN9Zm1zMwvzon9Dyv",
  "key33": "3qUAVnzpoe1ysQFufxuoXccLXYpeHkzh4nALogYEfsVEBZxQLTV2iLrKRTFRBCPnoMJusHYhbrSpfwYg8nEiMhrq",
  "key34": "635RQBVWHK6dgEV5PvWo5fuRuMDWaWXH5oi1DXyPG6WaAy2TeYfe1TAvWfCtjmUrfQBc4LXAT3xRga4MDsnvzq6b",
  "key35": "5qUNdiNeSMjDnjLjoN4MTF5M2ua2pGooyupu7bMAKcwMXpjMDe6J1QzimVyQLR7FQMhbdnddk65AEEcaDNiAfyxc",
  "key36": "5H95nJwPU3qQ2xWHsztMbwxnRxb2AB1BbqNH42FjvKyXC9zL7m7MpznaxbEWx4zMaCUqQgbvVeQ7HUiNyJHSE4GY",
  "key37": "YvwP4yPwzn3NgvzpWJApup6x6RjfjnrtoW1YoSTVs1HWZzqoJBscXrLs9zg97GovYVomvH5M4o7TXLF6hGEFy77",
  "key38": "t1A4TEjdZJac8fanLe9ChyCiLjxHBeatHamZHbv9rBLKn32RPK8zAuiyQATWw18md8Sh9HPk7PTGyquJuTREqpR",
  "key39": "3kntPTHR9dgQq3Jwpz649dtZscAH9R5pUHAL3SZRm2B5vKDHcLBqiSSHJbrfRN8bU3KeD3mqZZ7Fxg1R8yxCSLST",
  "key40": "4k1gXhgwawsydLJd3u26e3jjq9A9zZhTtkRbbbxwrjZmyt4us3JZvekGN5nv78jDKxS7rMrtVz4Mffn8ytE1EDEG"
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
