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
    "2hsdRL1iSi7VgG9b6dF1gFbeYPUq7nxnjhrW1dm4PLeHMHDt8onUxLk8yjTd7XZDn5djNZjngnrzRFwQTvacwers"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NRXYHNXc6EVcdkK691fRqc26x7u2vA2Xvvw19nxnHXR2mvQqCooFixig2T6LFjW2mRKegu6AWW62d21uN84SBV",
  "key1": "63nTHLBZQkZd7AMo6B58rxVVyiABgVXs4zG8dizh6RqjWgJzreWsdSpCbWs2trbEjpjvbFNDiDL33zd3ZrUzpwcV",
  "key2": "253SgPmNb6hsWNhs3JGSRfBFXAStjhW3QPrntsy28bpKkV4sPBqG1BdC7TjNksTFBwYGK7dfDe5kPKYMtybLb1Y1",
  "key3": "5Q8ZR8kF3XtJbuBAzyYUJMWkXY3wCtpjE1Fpr6ogzRzaLGNsUagLDExkBF2HKv4xHs1hmrmK9ZQi2Z69xz5ZUhij",
  "key4": "3B5sVk9eaEVKGPoAxT11KL8bi1XmaMYPhjqCkUg7G1PDCH6zrEMNYd9nfdeH6JS4KYzfnrpBqWsCY4VX3mA5MCrb",
  "key5": "4BYWeQoNYfG3hQ3hfSuzrewaFAceximxDaYHRpgatMHkQbqwT1YpXJarhVta1LsUJd5BKL8koSkgzQUM2UsHVFrs",
  "key6": "qbFyPBBMLPTA55bTZ62DQMF8tLW9aioNL5E2VJJH2iX8gj6Kt9B1vuUuvHr9RsK4PCJ8T5UpCKxtdYzMFcTNXTt",
  "key7": "3JwfPfnJNy5FSJHswdVeFT7KT74e7x5nhztKhxgL3nRrCgwk6MJLGnrT4q3tvpGyHkNw72nrdb3VWUXxhTZXxea4",
  "key8": "56SpWUXJgJAHFjAyxK9hB5HSDJ5hUkBA9eF9EkGso4CwdB5LeqPNKpJM8nxGEKeQpoLwKaWXfNseGDtLdaK9X8DT",
  "key9": "2dZPptPF33mY7D7xCyyZrdwfL2aUQggZ7xWha9SAvH83jbaFksvXDvW4PbWvcBdsNYNzAx7Kg8CgCU4SvxvdyfSt",
  "key10": "CwvDUshar7Wp2Rob1MbCS8oEtT2SUHH1epYW6UvTz2GkzEYAbZaTNuE6X2VfnsuBey4PPZb834b2vcXwcKzP1VZ",
  "key11": "282LU1YxsMsUjNEWhCifxu9agAvnsDgn5ZkBhTKnUfvjJWdTvihsFU9N4g39X2YcdpvWn6rwLEatsUFswNEDLatL",
  "key12": "5RCCySTwtA4Zucvojpft58x9hPmoFEN2iA42oVxbtMvqATBvZ28KnDrnPVypT4JxMTQ2NpdG3CZyTKr9boQDtZk1",
  "key13": "59d1WkPkWL1eiuce2MeB7Zf4a35GosCLdB8RDGf9eeEFLtD2KVGNnGsk3yGNwLt91Hso9H71749w71DnoGnGBXAF",
  "key14": "4asSDWeJbczGBk4VJCAV7PCynVsnos6F2oRRGwtFfrEBvUd5ADyQQ81WSPXEoFh47p7Gx5fY4YShm4T7eDJ11QC8",
  "key15": "4jDNA4VA9A3wwFaSfPFX7poAPwhCnmv31hCtXR6fZYsFWpJycqsVzV9Ajs1QGA8u9LoMFKsB2EKAZySwyADy15KQ",
  "key16": "2Xrq2P6A5uhopzTuUfvkkJCvw12N1X6EBhYRQxXF3chZ38sAYv1JRCxJc3LGpqDoCTK5AqvCku9Qj5mX6WhPdcpF",
  "key17": "4bbBaybLUgk74DN4zS2zSBtPD4fSgYQNYNVRU7svjdMQJ8Xg8SJ8CbmKM57U8FPKa8i2G1fCvaAmkVKzydqmzE1u",
  "key18": "FxmBCW96ZGpvNcBxgQrvTEGuAYwhPJZypEJL1NFS3Gw1YvQyYjqtQ9pVphuBu6Xi2oV1JP7eDXR1cBZyxNddNfS",
  "key19": "2Vhj1sBJiacBL61soWXYbqwNc54H4GmfceCxNbvZmkkNLZNrynDhVJV8rmYL4oRNhSpDz9DU4zuYtH6SkLrYT4nY",
  "key20": "4mCMjaR6xNkqPr1CoHbjiD2D4YBzuDmE3pJ23fK9qpiRNzyctUJyuv495w8Ba22UZQifHAjVRvyysHsCtSYGmrac",
  "key21": "5HUt7kHAXHRAfy1P5WTRc95ig6bqbbxJ3vAcdtbDG2jSAoe34ws2U4UaZL2K8zTFB7nBYyhRtxHcyRsWBv7XkGwy",
  "key22": "4HNRGK64Eqyzbi2jTcQbcaPSGxzGHNhme2Y2XymjzXTZq8uMGVfXGioYT2mgwbZkRZzNk5pqK5wJuXmGR9bLZ1qv",
  "key23": "5Ecmd2dNF4bddifynyLSKbdRkxo9AZQJ8x1ZZARToQyGaythZYrQy3B9xH9fBuS2RuZWYCYrJmpR7UbAReowUYvU",
  "key24": "4HRpqoisx7ADEf4u6fhGPSuURHJwxXNV4JN1K4kZjtTuuXmj9s2N2U5xuhALwCx17PrJGQ6gzrGbGqm2zzBX85SX",
  "key25": "3h6h4HumUKmGMTMygSWHhB2ecy16sfj3ALterAcA73XHtH98k8Ng5dyL8APoGeSXXNgeZTksAa6A6iukQbTnxEwU",
  "key26": "2wYPGoo4xKdBhC5mRg6vQXoij2CnuRpMm9Lzp2TTp5evsWC15QbjJfYpsVwUSBeCqVMgRS5rbr7S2k2ZPQVrnhsf",
  "key27": "t3pF5NP2htiTGzWvf4jv7PZdtyACKuvuejRRQ3B5KweDidZWMLk4waW8ti574YaeNot4Y2Jb26xJoG6kdw3qnW6",
  "key28": "2J5Ww8LLthAW6WHnZh69iGYuWSJ2SjKUQrEXAJMN127KfzeJTAkN7r5s28u2kwdxJHxN5hpYee5VRdpw7aHsoQBs",
  "key29": "45d4RbBsXtMctcmp8JGDZ5uhGSPnV8iKZpenSwyRezDEZaUBpkwbNNcFAq2KhtPktEzhnLWTGKestXGF3kSknd7P",
  "key30": "2jMH9PDBr1ZGGsTshuLiwqTZbTDb73Ubu1tovpcCK5fdWpYphBDUCZGmCDit9JijBQhxisUUtsShuLYiB3UQh9Zr",
  "key31": "2Ch6CPGjcJkstMsxpvNMj1TfimA4LPoX6tdw1HExJvkwL9se77VU5UgaXwyG2N2Dj4hSXg2CjyxYB9DqiJn8kDmj",
  "key32": "3DZhczFREkUdmaAWim1QVyPcX83uqk4YP2rm8GfkqGJ19fF23PQ1jGqEn9QJfxi3t8K83iYZxSMHNz1piTfcUzjK",
  "key33": "5niLM5JLwbKJQ8mKDe3s8qtR6jgqUDNUYi9cpcxe6pdfcrZA8aLPc9VZBT5mdfwks2gNjE2bmK4CXtjT77mqDXAu",
  "key34": "77AMbo1sdARxvdL86v4UaqSHaryxcqyzB4JEP8rbKeXuLgmVVB8BVGHnZiZG6TdGg5oxtc5npU1DUAHF6Bm3hhT",
  "key35": "5a7HRvEp3L4s3v1eATnNg9jXMrEJLhak84NmpMUCr9JJTbqo7pmhXD3hjsXXg6hdX1qjus5JZ8M1SanP7miXfqmc",
  "key36": "4LrHirc8HvReqdPVLCFuM2YiksiRTSqi22nfCPkwJTfGQAdF8Yj72p9ArGHzcpYjnmXB7S6jWurutTVtyRzWW326",
  "key37": "4wFngsFCP2cjYiLb3afTafSiyTuDwCmmy3xYzgabCb9GpFnXjGxPscYoqMYhHumDUxDXBksCUB3tK6ARaPThYfYs",
  "key38": "2T8w5Ks4F4cfphf7AA7deYXt4RcJUDJNrtY2xhaFZ51MdVShAmcA9Ebj5vWA2EcEK1RwDpACByZGRs39iue8E2k7",
  "key39": "5Gb8j3ZsuEwWWHvJZC9w8ABwL5hqu876NmjgT2BjRzuP75YfnqhaFrvyhCKrMayGKPnZShJhDdhcM7MesKmGb1n4",
  "key40": "VSjY2Tz489d3RX6psuPXXuC1zyo5BxkLkMPdW52UQPeSS8oGwgLAckhFwHwJdtm3S1Qsrbq4VobVF6GUUsZuYkg",
  "key41": "DTPMbG1EqumYdUjHZ7daBKvtnStqsK93Mq5G6c1hjeCYVTiCgEcn67PwwAnCoCtqTV61F2RGZQm5Nxvafpxn8Ys",
  "key42": "4QxfJzbuNvUSq3KrmGMRdh34BBjNbSPeeZhkZMRSsPmaSBREc7AN59HEWKYDEcdiv6nZ1aR6hfJzakiq8zDmpntn",
  "key43": "RFGkgp3nqcWJmFcGBcKxz47GpWc7qrtxVhKeLFhtwMauvKArst5GR7L9jHMexEfmNTdwwCiu5ytwpCGjsdaAUUV",
  "key44": "4fT1TWEHEXyz9JxCRL253xZe8ZMNtfWCfKyKJifzYBLyCnnXKT25xEihgZRwzPYLPWakHS2NTG8WupaUZjwnfFEc",
  "key45": "3qCpndZL35qXhFgSVdFDeNib9oyqeb9TwQRwcmiGopcLzuS1XZjuSu9y9YUzr2TbW2wFfGLvCyziLkhb3nFG472x",
  "key46": "4dg64NyvCTKh1TZMzVCmhLzp6xymVBuErQwKtJYAxx1E2asThEtgVR3ksnXtPi1cB9gPmS6eWZ5g2UpbdYy8iRVY",
  "key47": "25bHDqqCnZPa6ztk5FdTKjWt8Fzo2HuYWysiTt2exCdRCtUcSF8QvmGJaYMnbTtdyGBHxYSjCTzvE7SEyvuZ6cGF",
  "key48": "3Xc3xR5x7Rb5tA6TdDGz8hqLpv3FQ3eX42TUZtWwVPF7qMrL4Bdp3EHst9CxDapg3Kry58QfFEsBMdtoL3Qt8YtA",
  "key49": "WavJf3f6xDjdQ4B8TezcJ3ny94TUzbpJXAKw3m2t5Lf8K8LuiGr7H8tdn2DGxEyZSKRRsrPpmNrwSCAJEyxsaNG"
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
