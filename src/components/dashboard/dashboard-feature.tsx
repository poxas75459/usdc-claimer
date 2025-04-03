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
    "3zJF2hqjaTQ7Yb36mtpjpsabVBHuQqLncAg9do5Nt66TFNQQujBVQXjXdwUt4MhQyaDEa7txcFpauwojvVHu5c4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e86ySV1C2swSErHFnzavvbiTFwdHFSHFgNrHF7UqGJXbBht5Ld2qzMU7gzvdsxod9pKub8NM9eAiFQvj62urQo6",
  "key1": "27fJ1HnRpPDZXC9QTkwKRF7uMWUJqix928b7iY7sTSduuAg7kbuesknVfAo6bHtGLCPwAtndrH6gP31UA5zBuFaG",
  "key2": "48xLpFysjwFfPY1HKXFXEZWxyEY8L8sk3WqffKJ1PzFj57MtvYZngSHR8zZSNKP9ftHncPcdxbeaMNHYz5LbR2HC",
  "key3": "4eG5vjKwVS4U8jSLew9qLdFed5DUpVS15WLQx2WjFuPNLqxoJeTzCTNxXPwN72c5hrYJGYjm2ciLLhz6iTUa5LH6",
  "key4": "3kHfcAX8U7sLcFBWCvE9RN8Pm73LKTkK8ibqyaAh9FaTy7r3b8KGqZbFMmspGSEQLo9TjjSfzhPWmMYkHnQwPnqZ",
  "key5": "5Yo6vWbgipW8nxJPvqc3NknbdmPG4pSYfBo389EqbcJsqbDC7dgau55GG9xbqKyVc5TJ94xHXRSN5M7wVXpKDfw5",
  "key6": "23sDk4A8G7BmjFpeb1Mzi6MRu6gCZhoyqBnAbebCfdmZywyv9KWzbKBs9T5Rx5JZhakkGSmSkN1pRcKNqum1EHjP",
  "key7": "35L3jBxJnscmMvdxoSkoLqkyhc11KEWP3oZnAvQgWQVJ1xwfVC4H5gMbCnVDsTaUKkRbJoYduzsjWGYKaHMn2yW9",
  "key8": "QSSs2kui9gqaX8B7PR2AnJALh8PC9uX6dGwV47hQMXKfdns9f2y8EGz7g1mGPXsbz8DDPEMpiP1eF6PJXwqvGVk",
  "key9": "5J4TmKVRV3CgVSZ4egFinQ5NtVmoyAvHbmP1eNtZsHcoYVPEYPnv8N4JCNTaKi6SZGVksndxwQJYpQFFZgY753MC",
  "key10": "KpAVdsgwL2k7V5DS4ZygxaQVv3ZVY7mbmojywUTU48UavqTgn9Lixngk7zpvhMoXRhZJW72vW85Eaq1cy4HkMPk",
  "key11": "TzysocaafNFR5iP5yQSFPmrSQfHhAuAhf8gbyxFQyyoAQAHn2NGyrboGzoLWhqJ5NedPDNVc9NjSE2JT3jZ7RLo",
  "key12": "32ipeqs5qRo7yKTo48YQbQvTF64kbYHsuGjubX6xzWAWxrxn1xpEVwPPV9wxpUBo1ztdDLgJNf26nVWA7zGCbAXv",
  "key13": "4cdZ7qgUwrVdKFZzdZv85bMLKQXhjN7BRM2w93SLgciNmDqv5UszqmjDgALMpw2AvfXqE9gKx2iqnsrHb9J8UJWB",
  "key14": "4bPMNrxqfhPwpKSYMPoTyCTURTAczZz1M3bX9hrjMSdwJ6aPhWXgn6mXGnAvan6bo8AbX7Fp8cj5pK6Zr9FvrtuQ",
  "key15": "4nakrPP29ADLrQGEA65RZfubTmKUnEDWkzg9o9JiKpSAY6T2THsru7jDQd2Rg36xXU5nYWYWeK1juTqhdnU62tk4",
  "key16": "4tcE7rSyd4mvHT9GDyeDzBt3ouEXC3yK88gmdoXefo4mv8ZNSoZRTtdqmBVb4gELrZTt23qEbvHtHbixYXMerfTg",
  "key17": "3jBN3hpbGnXkQTxWkg3DptjXd5rwzzkbtruHMRCfnHQKgkcHBiEyYqnp9HBJDh6pW1nhqo8x1RLeGQxjzn39AJ1B",
  "key18": "5FRBhZ6ksGD4SpFJCeerQpPU6pXwtLeZnEvuX1NHLuR2DVdoyz7XpxudtM5PF3fyccKG5XUxkpxaLTQ9dj7Di8Ps",
  "key19": "ojwxpdUfuq88tg2XJY4k7d1M47ppSiRAhGgik7Gqiqs3sSPmmrAjX8j5zx8vU4ENtkSHkxsERpjyc38KfpD7ETp",
  "key20": "3p6rnDYdgAt2mxJTZEEBpCwGtK6KVUb2er5zTMxAUBTzbSPVXY8iKBiuMJZiSaZFxZkUQwcyUMxCNme82XJrdsvk",
  "key21": "5P2CotA749a8pZiuaLiaKW3Z5cLS5bSsfeaPueLYVSnpHL7Uroc5XzD4m6s6EnDvtFLcXJzd6PJ7H9tX9UB6GVGG",
  "key22": "3BR3YvZMRz64YX4J6gQKx6J7iGvFBVnkQHHuZ8MaH7pki1PFu8T35JYFrLhxh9acKjXGUWLWhRvemDXERYBaaRzZ",
  "key23": "2qEX4BVSGouAs9b2H1Au1SJ3FR3rjTn4uHju2HBLFYQMTLUj3V5wbwCfDEpF7QQFwbmTQ28gdKVxLDjkwEeQfz6o",
  "key24": "2AKftCXSwo6FtzV2iJH5gjSDreHgDy3X7eWebdniNaJeNSwED2qcs1wgmKtRB6JqCYssR4qmZaQnh9Q8titTJKF9",
  "key25": "TNEx19VfA6UPFf5a7r2hyAG4khAAJUXpYo5yDhVzwqbb3YsWsjssMPJ1zDVpw3M1bW2LWjEdEidP29riQUAY3ce",
  "key26": "2q1dgqMgGCpsqL8n129ESsJYZHY9T94HgQxDsM93RHTBaxTyamY9dJSm2VBt4LTjWCMtFweQ1kLW6aVC1FH2UtuT",
  "key27": "5cAUJv48Ja7oZBAPHYeZXrBAbJkSwB8ZssbwQn1TL6aV3gWQCp5w4E1X7ivnxxv9QreJyP6QKyiMmKA4PnKWydua",
  "key28": "3h5dhmi9rGcgeLxSLu8mUzQ4DvsQ663CkXWy7ATVx7jKujzqZQkDzULHsBMHYriTW9sZ8LvYUzHu4ToCHSsXVo8a",
  "key29": "3qoFuRzMeGAAXTXfA4biv7Sz4b59BCQB64GqSP7kKoHfEvsaGSAj4fPs9vU43picnHgsQz3LTDs7JAecmNByDgfy",
  "key30": "3pcdBTyFHUKbQH45kEWKiDVX6oqErmaVLMuyjvqVshNHuxeRMVPcnugbJEqBujK8xKkWWd6mgvoDY5a7E443CAXb",
  "key31": "6EWD5H7SvokcqmCYPnSyRSZ2NZojRw4boDn3ybV3cnbyQwRJimKgL2VXVE1nwoE3AqHYD1VAcBp4SPLVsUbJ7UV",
  "key32": "37V2uzMzZNfFnfmwDyspeRDC8m9EHCVY5giraT8HgFiXCzSsPAPsEwgbG134fUTxQ62pX7gZKFznnkDEfc4z2iwm",
  "key33": "3nsUbPLSxbMUULAB4rv1eRBwqnLehzAoHfQ5C4wmHSqnVM7D7hmQJ8sqnsfGoob9KMSUE4TFMe1veANtpKo2Cwpv",
  "key34": "63GRJyG4yhLCfqZJdBgN8ENjizDoXQSp9ChGMEaKRbFwmTijaKtLsUSJNBzswqBEfyt5aEeoPyZixekRdLzt2v6T",
  "key35": "54JLePDtqKus2H99nZr8HiCUpGkgZkMdPvhhVjDVjUZhSi549YRjYhdCVATjJsUVyfVCh5snbLXFCBR2rFTnW3aF",
  "key36": "43pumVMeuqKk4eovXVyoA6n7TSTpa4u1u751cXFceaYpkvNfAfJ4DHhN6AtkhMJ7tiyimw9nnfysgwQexrd363o5",
  "key37": "444GDHjRVfxvGjrTxsqeNohy6Cy2A582A7iv54JWhHJMCq3UKNaVhN1azsv11CG1e3mPaRNhMT2Mta8KwowjvkfL",
  "key38": "2e5JpSw8jahpzYyHSmGEYgPdeWZtBANX8JGLfGhR74YXfafkeFgSwrvhMyJC4T6MMtRN7jsHbZ9KrPDh4Gn2SiJj",
  "key39": "3XP4fMNgsWFxtEy1rD4kTbVrfvzzB7kb3DgKuajBVuAJjGH6MXFVkL426Jxrq3nFrSAEfktrrFoRTYTsEiCfgZkB",
  "key40": "5Rbe2fcHWs6aBNP4YyirpeijGxgLgfkeQoqgtRvDRx3pS4FjfVF1h7zpPkGR7UcUGLJWcF9k8qKrE2oumQ5FUvX",
  "key41": "WfLbeddAzH9k9XnXTsZ1fa7cfsJLe69p5pGohY9sJ9MvtwVsB7yT6FSHewfKZFwt4f41b7Qe3dfpis432woHq8n",
  "key42": "2CcEA1W8ZAA26ypRn43d2eyQM6uAQd1sKk4Q4HdDkqoEbpkRkUm8FBLnT6tsXDAi8MozbvUupdkEU1Q3k3DZf9wK",
  "key43": "4oGYkYX1eThcSAjDPLo1RpC8gznAtvXtV3qKGNiBaXSFFVvLCd8AaAHoDD24XzJv4LfWhLbzvLymMP3Dw6hKDUAr",
  "key44": "tSLTcUJC9b4SwiGNbuV3LznB3cXxFyN2c8Y4pBGXWKM95nHTDYCGkF73TcCucCEmis6c7osNv5z7VMAUXq9Gir2",
  "key45": "5zJMuYTByvKRQscWn4RdTWTTLNPeUKx4MumUf78FraVutmqJWgjRjTGtUQHay3XKonqvABRpRfXtSjasQvhurhUg",
  "key46": "4JBE9MJbaPwyWbhBHe5sV351qxBp3jEXGtQCXPqxiscy6adrjDYJY5mhyQw7r8eyGu3ErEgZzpTicxWNKXVcAoRw",
  "key47": "4ee5rti8LJ5vc3S7oFawm3JU2FQ3X2A6NeUbmcE3qsCDhQh27VE9aaJAraPwpMoHRYfiv3FFZA9UvjttC7uqZVSD"
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
