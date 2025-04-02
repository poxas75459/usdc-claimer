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
    "3PibFuUMx7u4XG2VaMaj6zcKDTwjqqT6dNDMjjs8HCHu6kjZF9kmFKTQPCH2cx8Kf7r7fA6763FP2XxeNsxTFtLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpSZXbJPVjeheUWD2L6psDohGFTg2vsoQWfPe2fjncJfiUeh8Gj8WB3tLmX24Yj5Gqk6x6QVh2a2uH9HDS367pn",
  "key1": "3WSm5ZtfEFbzfkPhAe46gNnWuFMnVeCDVYFAYoJzEK5qVzPs6jRJLLGU5syyUqudSoyLiyM8J7w6P6PhoEfPYhpd",
  "key2": "fZ5oVxZpRTXrQgNCMQAFX1FMmQftEg1taAnow2ytCXbNiPDQasuX1PzDTe4NR8BDMSinfGrcReGrGhH4NUnVTEs",
  "key3": "2CCwCY5NahP8LqEbHFZ6jEDkr8V8ZhTx2H8gepnpGYqR2LphT49SjGm6n2A7RPYuL7q6QKWaJYjshLUNrtMpufMk",
  "key4": "42KCEgAP6T5wkQDX3MXRyWxBeb2dEy68yt6exfhP1yN6xyKjmcz9W3CGG2jZuDg1wTSg1KUTvErSQsRJ4oforAbF",
  "key5": "65MvLDWdmKZWVz7qXfDz5x84J4U5WrSZzP6zuLDoJSpNghsEMULDNfmrLGKRQ5D8vZCy9tG4ceHosjk8xdLTuwpK",
  "key6": "2m1DsLkswQzPsxdfeTnNmRJnXcKNRtHuBcuMnbATgbG9hNnxtBhgcYAqdqg2D8JuaZLgBvCL9XjHgFwBQnzvkogh",
  "key7": "2pNA9e7yuuPByqLr65UJ5BdP1qjHYPoU5qYkF1kFswrSrd3Hk6SLhJUfAfXG9boimNvw4cPE8toKvXT1gXzyxNMT",
  "key8": "24Y53ZzvxcxBL3CceSLjfNVsxwy4wLdxqPWWPFQbmjjcjQmggWjFKYgvS3aDsNdvbXh4rmTcoZKA4TUtZUV6X3zp",
  "key9": "3dFMPNfcUJmqWNzp33e2iWoFLjF712PWZRh4MhaQ6ZfQx3j3rCxzkrjguCAmWYcjsXnqZjbwwDhZHKhNK1GNC6F4",
  "key10": "ywtVxx4ysB8b5nhaZoPuiftKavMNu7FGJw1Z8x5STnWUhwGrNnAJytepKKTc97L49RNiPrPL8XoUYQRHKsKRUfF",
  "key11": "4tKWAFrxwHFQx6Zj2DEtj4dxBsnRazRZ6SKDQrDNjxbCCCDtw2GaD4rquoEoC34AKnzHU4NcuK4E1d985CDnjRRq",
  "key12": "251Ds9fCnNjLgPSKEcDEGDRrYNBaenSZKCWJPzK782wHkVTmocPuwRyPBMmYFPC9oc5UX1Fuk9BWQ7JkA8pj3vHd",
  "key13": "4qkx434udYnZywnmxRhBLh6oNMhq5C6uBG9DHMJCAiWjJAgYh4xKMRfF7y8H8waN4crEMw2PRi2yFTQJfQnz4R5B",
  "key14": "4JyxTKsXkrj4mpr8448XGJ4WG66BsnZHUrEhkS44y3D7AuhweVGmpmnRzAS8Wf9yQkfpNCF76NGEzRM7kMeMVcTs",
  "key15": "21R1nqGyrHbz6y4p1MCuDZU1QxVC4sSf2BNBmhPv3J4GqLT33SGRJrap2cuzJtZa6w6Aa2cKMEj21wW8JNHTnfjo",
  "key16": "4A5yTwSQKppFV1bvNCdZPdba2F7Ke8CC6vFAdnPh1K34WsbXCh7tV3iFhD9By82zLcdDNRVYTRkmHEWVeRfAMYtW",
  "key17": "3MqgswvcF2jNhckkqXDF37qT9rtz9EMSeqLrABtB8qKM36yoAHZe18NcvPYZXut1uMXVVBSbe1AF9zNyxktWMMcY",
  "key18": "4LtpJE83AgsUCMRe8akxo6HPYJVZ9iL9yjee7cEGZ57hzuJDMam6751XZVyYKCMFwYRzCK4TgQSiQUjiPba945pv",
  "key19": "2nQ4eBA6djaAYdrLfVxwpgbq8n7A5F9Czd6P3YFp4WVUWEQB4eSkfZrW8Qna2h8GLAJRaUupqqStcFAAR7X4wJXu",
  "key20": "3BSAHT4XLASV9LRCgzxWDKU99PegrC8tbwqJYTh1AYLhm6b3ixyYwEWU6T4XpUirHjG9dnLBk5UicUiVQoqQiiix",
  "key21": "5DNtXRYXyEbnguKnDvSErmiX7FZGcbT1FZwu4uxRT3tD1RXmTiecdS5S1SHBNvxBXqD4x5wosQJMPHNJcfu3tUnT",
  "key22": "2MNYkoFhDKWax2eCTn6BZ5JsjABTBHpREj7ETYqusbStr2eSa9MyfdfZfhNYB9ZUFsDePHYGCaxfFy6U9yXyfEt4",
  "key23": "4Xx25CKTmMgW2QpgAxJ5nxWW3Pxg3mfCRozzSRTSWJfvvvTq2ssybRUDFQgfWG9rCWjeLYNqq5C6j9h91nd13EuK",
  "key24": "3mWuYGQNb4UrkH4FMcBjN99sJyGKA2HMo8TtD5hFa9FZizWWX73iZKnnTQ4fe5kaw3enf3gSbJxA5b6ySqwt27se",
  "key25": "PQuXVRyKeNwzrV9aJ8Rpeoh8LrEQGaYh5mPSqR4knnanQevdn8foZcaE9vh2W4UhL26kH4fAmhpDtrLUNuuPn2c",
  "key26": "51qbRAUWQTphRMr4diBUUUitfgVi3YKCymZAx1U3aEwU1vZGYru5vy7feHw2vqgwczQVWugyDXaPsTm12U2vJ8vk",
  "key27": "ns8wHhjDMRjea8c8U9cnQKbXboQo1FutuRkwZaE6qHosF5cCkZs7d72cH8qih2u9VKxXKVM3dkmN7H3NETe41ks",
  "key28": "2Vbu8tnQiSzUvjF5bJanhHC5HFrCviFJ2GSq3tZhHPLLMCtq8cX8yYJQo7zZohyCHG6rGC3m6YCcmQrVCd5oCuhR",
  "key29": "5ByasRSz6q5npCDjoWc9FxDJPz6UWzf4EKoT8BPebiBj973MWLu5ywXmdxUihGXABZaaSbCdwFGKpn7RwWRWvHfK",
  "key30": "5izPZPV7EuUTswP1XdptgvMnDiFsn3afkvLhaJW9w7niubiuyqKxPLwUkgMM1Ywbx9Bu7SZ6ZTCYBDEtCgWwmXMY",
  "key31": "Rsi1yWi5x6WKd9KT4PkvdJTQ5xkRSLYXoaQc7Lukyp4w2KNdYCVoenVY4Yq6DDuRaQDeromzuZnbpHSAbN6pt8r",
  "key32": "gh6Zmz8mcHek73V9KYmgpCjbbnvxw2Q8TPEuLyMQ84knvFU8N1zW3HWeKMC1r2hcajgywhFKD9vL8gTZKuTGUXN",
  "key33": "2Knb7VrirL9w9yqxJL4GUEuKcBikwgbMqwXziir8yV54o2Pxtqom2L34B4L7zRSWNCYn3NRgVNRJfigoBAZG3qRB",
  "key34": "3tMQogzFoBb9zkiEXNBGCrWg79NBdUm79uUgxAYLZr3uzjhhvQc3FCs9DpBKjGe16VcxdBuwxFpN2nHVEHG471Rr",
  "key35": "3ubDZnZ2tAgWDHQFFdx7uWNvpMvUxaJAAg5D7tkNGiFL5AWLFr3Gu6fwdW3P8cy1Xanj5NhMmHn4e5JnKEbNTH8N",
  "key36": "NeUqH42Ui7QKFgWKkPo3d8TrFGpbdojQXgHfDdB6aTMntiRoaGLSU8EcTrJnUNP7z2YApAHuiJa7Modc72kjL8h",
  "key37": "5q4ikcWjzsxtSDyAH3LfcCgVZL9NhGDLJ2JDcRhsABSkE277rhr2RmGskPeejkbv3jtWMhr5vZutbEBgg9XecDaX",
  "key38": "39fBhxzJzTKeVRDyn9TUfC3shgdzh3q8J4e3tLsTd5wLhJkHuwXQaNmUXzkj9Qvp3Bax9t2RXEWu4YBSApbYfcvA",
  "key39": "27z3UKRbhwJxTKWV4utLu3MRG8rT2qrjbAAumXPa4vB28qRTLrm3g1RKyn4NLnX3Bj8Dgmv3nJaffRFcLdRNzLXh",
  "key40": "3vamaFjU5Lb5j8veX18rDv1kLe3PAGFoWgYqbohxyu39gV6UsnByDXvfgqP6cXH3nL9epQkn66aTWyCkchdcjfY7",
  "key41": "2BsNbVAuYtSx6VmJt7MU1Eajhah5QzAHyjYQQMAgG1viyArKCrpQ2kYzMcKaXnB7UDHbri7YJjR1HSBVAMrZuDth",
  "key42": "5CgFWd2WDCoKjjEmS8s69Y5MXhCENhoZHs8id4VRWoAt34rp5qjNL3bw9RLoU5UjjEuPo1E4wqF24Td4JD7E5XKY",
  "key43": "44dLx16PbMEJaauKuS3A2wPXwZSZVXYEDYEXnDFvEGGNxNJBDNHVoXVA17si2oVcEb8WfXuLY8egnemxJXY82y8Y",
  "key44": "35LSrcMUXveQ67r9mrszxpQ8KRkuYKP6Na5xstudw5FEst51hC1jUZeXqKPAik3TbPzrE4Wyb44ANneYYy9U3iBv",
  "key45": "3uxrn1ejzh1hR64SXMSGRdRxEs4iWjcSYspifLWndSCLAmiSmyDKgv8YphriZfuyp3gsiRJAk7zxHDz7bjJtY5nh",
  "key46": "3GtT4AvjmJZ1Nvk56B2nBgDK7cDeHjtBZPYRfn7ndHvSq2Qpsut6hz5TP3965eXgDx4p8ET64sWgsdwAsRd5t9n4"
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
