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
    "611M3kc3th1zJ6Pv6QRcWPbQ2U7PXpXFe2Q4MAs3NYmSrE8PJK4D6fLbr3ToGYakVzEtaD3Go1YxsFwBG8GaRufp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ZqcCK1wyowYu5YAWUJsfnbdF498WK6523Y44ohQoa6gguu9kuXHFxJXqeDXY8v72BBoG3mmTB57zeoiU1qBL3W",
  "key1": "5yP34n8u9Xa8yRtrC3nmqdXSjLKAFwjZUsfDkre6fWDNMjQeJwr1PHvkm9ybivdAPnV8m4NBZ7vPBpJjDyFjQGMe",
  "key2": "4bBqTy7PbNAe1jfA9K81FgBHHX9CAJ9zgfDJx3wffUfinp8Gfwqms7L3TttQbzAeE6oUKqKFuLouGXindf9Ht7cQ",
  "key3": "2h8YnFAJyXW4kUQe9vDxjKotwtVQLkfwU1hSD2UpjGUvG7U8uri5ogMJNy1xfL1nZbUi6HQ3mu8pMNohdXQPcR4H",
  "key4": "2Mow3hc3vkXgtr9uTHJLD8x6uDeSLBvbKAS4eqkxxvzBamFjMxB6YbGDuEEL6EGG29CogFruCe5HxcsjjqLmHna5",
  "key5": "3m3Qnf2kNatUtwZV5BVtazQT3KQSnyorWdftH1155wcPedGgczRmAemmWohT5audZbs23iXC5AbsaLZ1BRogEX5s",
  "key6": "3jeQahNr4HuU6Ma3Y7JJzRsxaSSrEaAUrBChKqYe4iBDLYBQyncH5V9CoZXYymt8UB85KGDzb3dw3W2Q6QrYrXpd",
  "key7": "S4UPhwpTEZUtnLE6R2o1Hj22ftKPEoghYv2u1bE3MEPyeMuUs5mfikq1FbSSQeThAxdGhHAQQeJYM3D9Tg7kwJX",
  "key8": "5Y8D7KC3ZprCshfvd21Xxc4YfawLSP213pgT1KBEdbeuih45kf7zomK58rE47iTPRZKgNuhLZ252a4s4QkuMfWGs",
  "key9": "5KrxKXKPd7qHxnhnpJu3WxspUcXkz8ckRP8ueUdkyWtcvL2WW8NH3mm37zeC8YfpzUyyZ4kaZqT5CR82HLPkzozt",
  "key10": "51cMKLAgqtTs8UX27VPDTetQxsiQMLyvr9PC3ifx8FCS3kXS6aUwBYLj2SAmisAKhtksGbUp69zVMmD7oLzAtA4u",
  "key11": "3kFhrJumu7pH7oba49UaGP7FsBaNLcejrtPoSCP5ahVeeKZHivJUg3USrsLe2CBuhqjWSnWw3wzDh97YGuPmKPTZ",
  "key12": "2bvcWQXmBBTrBt4xM2HyCSwZkwhzpeonybMw9W33PChY8sdi4DB63WgP9HFSQ5f72c55GvX6SA4uFEGCYJ9ynjbG",
  "key13": "3S3927L6xjRce15WqnkZnYgo4cqyUM1hewvW6M4hXRg9WJ7cwwozK4hDNzdES4euGJSDS5U4ZKUbHsvA8oJcXuv9",
  "key14": "5vRomGypnimSjayA93cvjQcTC7XU4FWkEcmjKP3Bvv3xbBREiCQuCcc17ShuczgjrVz6TeMa21uP9f5DeCaosDoh",
  "key15": "2DzCX6Q2wgLFDqTneKaQDDUzSrr3ABdhL3zR8WNmgn3gDB1Xonixk5yajZmL6nVUrbwXn6zr3pCNUbWd4UjTA3C7",
  "key16": "PzDfXNFF7LmnrUyxp7XG5H58LzNpcqv13tQYos9cxQ3fsXcoSWcBptGbfhgN7jUTB6SCmq1XPudV2aHn7Ct8zmG",
  "key17": "2Dgv7fy9mEmS3YSQBDPTejtdnE3QBe3fxNyCMzfT6q47vXryDWWYhQFDVm5t9BGdPa5Pw5x7J6X8oUV91LhGMB4H",
  "key18": "GPvuQWv2QzZc9mprWxUHSFgTPou5LBNhVy6LiMqWRhcJjqoZ22iH1ERC1PLT6h1gdfaKNTvRz6btaZikwdiM4ie",
  "key19": "5sWWyixEBg56B62ngRHcPnfH6FHxx3h3RSfjJ2gkEXAmUvMjZXqdQPCKhpWz7WEyTc9D6rwoJPsb33oEFqpaToPo",
  "key20": "bc52khynf5bgMfvN9kVw2SFkF8gkSfdxeXC5kSKTd9zxaqKAXWyVdfVPpRJ1fUwaJiJ9buoNu9R8EccqbZ1army",
  "key21": "2CcdrztvZQCtjkdqBUaYpGM7nSS2w8JDUAJgc5ehdgcSXkZYYDDnMAr7HQb7MiK1PQm58XnjtfpknDknTSLNxE1B",
  "key22": "CuC8donTiHo1veG1ttA6skoFfFGeF36wp6EVZC32KghdM4KXXudpS1fxGuqeEzEGRpffKmEjeWDebNQGhVneu1e",
  "key23": "3Nj8v3Zt8BnxrY1iwGnu1bppqZfxuTuwQpqfDtnVpFJ7qdsQdMmzc9SZzrtYi3Xt1ERUk7PG1D9MEmuQ8Dn48MyD",
  "key24": "517XDkR6atj8WLybDYEeuxWYNhRpn2ovZfw4kwVueQcNYLhTMBf1C3swbmWkEehUH2dmaLLNhFSjE9YTE2VFjgAF",
  "key25": "49fxrGFkGwQo3sLDsma324rX2yHXsr4tNiEFsBCZuZFQSgSWiFzfwQxMDBXqJC2VQzQA2YC7MvPphnTuCCv137Ue",
  "key26": "4cXsYT3qWV8KWY389Fpqma4Zvvuz6JwUK6xHhG9S3ZKE1xynZhsUN4SEZhPMcd9Qs99Z8UBMfDJpdYtNwzwWakW6",
  "key27": "pZ3oZEZGpiMt9WJNJzRuGRmWDwHsWnroswfRzz4aEDftFeNZZaekpaupmSkU8yc1it8URk1fzJMNocjSgukDDJq",
  "key28": "3v3YtvGYtB86jgSUvaJyzfYdFeFu8rdHtf5TqgVSZJ8X3jWtuUCfWbbvzUtiG7m4nJ8WzuV6V6YZ6FZauRLt2MYT",
  "key29": "5yf61DyHBxasge6im6rRgRh38yvx8qLt5JHXsU1BZ1QFT2oSkMod4yUiSiuxv9yYgDpXYF4QCtF6YuVUPgXoLwwk",
  "key30": "57qM2L4Eqiri2cxZb57dYESowqEfT1Kbz9jPdiVZKXevTJPJ5oh6hhzstFeKCUNSvwjze8UjGhhTBamY4dAP5VYd",
  "key31": "4XDuQBiCkhcNLxZGAKZeLTtWXnmKkUgmkckeaJgoDdm2rMRFJ69YrWU3Jm93QyEXZn3sDqkqREGiCL3oWxaLrFKN",
  "key32": "2TvrRJmZPaTtcVkaYThwuw75j8w1tY6JeYMUgKjR266QQRiPr5Ly6yPft6rpbFnrwVK15As7BP8JH5StTtQL3Kmv",
  "key33": "4pd1PJSQnEPKBvYDWZFpoepGiBcKfUCzLpKSdMRnnqvmKqciqepGnNw4tKbnnzSgbjBuF7LRvTyUW9Jj1HJkcsb",
  "key34": "4vEzPgHpR5tua3uwqQPvsTVLEsznY7nAVLurdU4gSRUQdW8neYZ31zoPe21r6qvq46j91G2jTyVpSBcrTU41GikL",
  "key35": "4bWdw2mUtTnC3h68dUQXAJnuxUsqycydoTSBbPJyv8tXG47TGg5fFb3nVoGAawqBB2UkxaAvpa1S54icLKZ2XjNC",
  "key36": "5JUag7BPai9h2NkcNaJBacRhy8T8R5iyKHWS2TxSsAvSDVPFPUrfBHhG2BjUhtDzT9k1nnix3V1gmh3n8yqwt9Fo"
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
