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
    "5tCFEx8ZWgzjwh9UxxhuYLqufrEFZEtqJSDceTKAeehEyi4hTsRTMuuW9yGrXNqWZGuSHWRPzNhc23FjuqEU87Df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GTzBADhRbXgyGw4yCVqST2BSiCAm43wJ3t5qqC11rekVu318mf2rHQcbqxKSPxU9PXjL2bFncN2YMrAGJ8jej8L",
  "key1": "RqxT8nnqb3sZ3zikKTJ2HQ8r3yf4fa2LA5SpqjkhCyt4cLmpDXvirrkK9fpeZ68gpmTGedn1ZBfgyMJuo2a8aJt",
  "key2": "MuoF2mHPGeVxS6JtT52r9b1xqdEzECKBZSkJbcvA9KQjfh7DJvKduAh24D79Zt4atwkTxAVJCHunpYduUEiaw7K",
  "key3": "4cUKvAs3JH7RUB4axwZyk12mC3CpBuyPsZCVqetrcGm4x3H9a7kxbYdPnDu4s8L3ssF4n7ojoqbxvYg8FCczfSVb",
  "key4": "FTC4sduuWu3bKvYMEmPeWc2FHEqLENubth9VgkHdpdjQgs9C5gfVzmp5m5ve4X56wkyRB82fRkrFLn8bmX2hPSb",
  "key5": "4usQYzhhTPTwADXwurxLDwFnEg6Auviig5UGAtXvQ4iWgfcosBoWd3LrHb8sXYQCgdy6zyvpAisdGVndAjTSSxCP",
  "key6": "4wmjmxPimoC22tP3YDBt682LUzu6FGGLdZNAHjFMtoPrPXZ1b1h4v6aKGwwBKw2osqHnQnxeBxpRzfP4xQwkBSAp",
  "key7": "2cRTcLS5p7iyMu9PqYQ8Yyh5CKDMUmkLZGH2vMNHAkBoyUgPE854PAZxFH1KUiJk3niY9QX5kpsCQHdcddW6ty6n",
  "key8": "Dti3TNBvJSm1d9rXVdsw3G1NVRC6yHdfoWQ7FUr5mYiExUkq6BCjeArhtpSpLrDHZjmXNu7jT4yHCHxwE9gkcMy",
  "key9": "25ZEdhZ1ZE3jpsmDF7SFx4FBo3ABkjuhCGEASgyaRf5htYqPvD5qkjJryRYtNLYSsLWDc4HmHvJbcArhisbFMoyp",
  "key10": "3NDUpC6sJh4RYRF9GTr52giRU4DQv8WmePcW1ABeVit6njSPhjvYXEShMjAZuymTFjpnSMLHxCZF6pkcebRKu8sg",
  "key11": "3RXGUojDS4Y1afYNPvAPwpDdW84JyxxkgPz6DcymjWoPg8ppcFKo1XJy85v8c3dM4cNHAfMBeuGKqXAUS6KvhEpo",
  "key12": "4xoR9qD9xu7RJg1wjbbJmUVns89M45B3Kd2avJ7tbPqiZGDAWtn9yWmi7iwLuxAkjD8AwfaNgETXKhKoSghQ7dmj",
  "key13": "61dmJFjJv2GzXg6D6QW2VeA8DWPjkj9NsA39ZdjV242NsF9hAQ5F6fZm5PZFb1VJAr5wLJzA5nT2bnsWEiaCJnDe",
  "key14": "2mpGk5TLk9VFeLE93LkGCP8h98evpRip4Td3rPYwAAHZbVbZSGjoJFEmdym5EtccuRgeERHzofDWJCix4XBiD8Kz",
  "key15": "4nNz86SsJJeDyiJ3sMcSYzztteoHm8rMs8K7dVj17qvZ9YgzRCmWLu11QN8iFERCW2SfU6xwVxrRLDHK85PP2vGr",
  "key16": "3vPeVav6zhr9akgvAajS3oz6XfsCSQyJ9dSVUqxLXYqKCQxMMhMMYmKmq3tpTvhobNj91bwuStkVWApc6JYhaSgi",
  "key17": "ZDHpycyHfyvhFPr494HAqFYyNMhZ5sxhQFQeoqA6gb5ERxNRn26UHdxX35LiwdmSDpfrp8zHqXqcmhYV2JbWn8Z",
  "key18": "29jftZHd8cTtPeDCbeTijpZj2ufKrxRFX4ppugcpwmd3LrMXUTT3djJT2wQRvZxHDhVaRNdunrXBs5PnmuTxrzif",
  "key19": "4mXb88AyWPiVwuQ1vDBXGuU78ag7VVgpJ5YcNU9puFDfmQieCjWcFAiqYqWGqaMkcKyskoKtCP6bxJDBitcmdtkg",
  "key20": "4rFqEFn96juddHA6iqNecjCmLAyKYa4Jk3QXPPBp6wTEWWV5pMr3Px3XjNXRFtqQNWZnf69rrpix29kpVFCU8dMP",
  "key21": "5M5cpvXrx4mqdDCv1AdBGi8bPrZjW3RxLoXmZnJXLHutfg29wranxPZ5ufTDc5yWAqF6rTuCUkkwfb4MnFFNYmeT",
  "key22": "2njk1NxDySU9YFcwi6h29RibxofykxKGCEN43LmAG576EH3B7puJBDrfpULpXU5XChpEKLRBGAnSKH2cU7qd7r1E",
  "key23": "5hUKAbvmUaN4Ayn3JtJtcTyK5vuTHTWRZT6mdp6kcXt7TSVNMKk9YKk2MxDFnjGbVKkzd5RxdT19K5QBc7V49rj6",
  "key24": "4sAJpXwnmaBsTvE2PwYiM3huqVcGgnDP7V3zYSTVwJNxjFTzpgt53PzEwAfVmErkj2yJtAk8RMyTdJLHSbgCEnVp",
  "key25": "4JjXt7rpf97tGHvnWntLeNx8XbrgTFasZsJVEfaNeHP2sEUHGUzHtaYsEW4UExpkEpoP5WrSxNNW5d48zU3cHU5y",
  "key26": "3JxXwDorTXAcaMk5eMmJpWW8gfQNjY6XcWqSRM8QTiDimbPmqXzh1p7bZCECbmYcajPbhbJ2sk9kHWRywsavfFho",
  "key27": "28uQTZQD55t2Td9Hkb6LiH3DYvPj3UZe2kaYkGf9ZDcBqqW2bXyYHxoXqyVnFKPMXQQANQtNhxYf3ED3XBDfFhWS",
  "key28": "52JbqUh2aPHYMwnxYHCxoe4Pr4VRB6nDjjtDgCab54SedjgBrFhqyT28tvAYSb6cJJxJAu53JcwadWCbfrMytkM4",
  "key29": "3QsCNoYHgGbdituR6421q1sfwPa2yMyAWLpyvUAmuty3iULFb9gXsScLScCEQMFvQ3GFKkMxdCLLLePSX488AwPo",
  "key30": "4G3AQDRn8oxUWxj8X5rjE4ystManZaVojGB77KcMTB3BE9oKWfTJ6RLHfzbrK9g4hc8L18QpDcVrERp1mFvgbQr2",
  "key31": "3xkwoytFLhAqc5CxxoFywxMpKd3iSqbYLpR9i2rEoBn6m5ckhTHXrRkyG3SfhjZWHRw4EC7E3JJnWsk12BAh3dYJ",
  "key32": "5HMqg38xrrdxVuJwXnXqBaeohUrN64peTyRVnuSmn1eBm3e3rVjf57rxYWfqEXQJjwpQtQVn6UpmYdodu4L9xzpK",
  "key33": "ywbjL6YozroTXhBSb7FCh6Dv2AefqykzSpw4CX9LsJgKjr1CTyKgTEgbTkKBJAhxF4vWALgUWcdvcsD71bTCm8B"
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
