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
    "3AS6AwFYenDKYzmgWbYPPVHEJ9xY7XBojetSPivs32UaKwc3cfnrcgundgpSr6aqdjfyUaXU8bEWFpSodHtgRkwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9dqkfkvY25Ws3HdHWu84KP13mt2wUeVHWfh1bQVgS4Pn8ivd2dHhXTPuEPdRpfiBrD23LpSmAmcSFGaW2vm5E4",
  "key1": "neQh92z9uWDVACEniYpthcKzSPsf7ob5hNT18KKfKWfFeVgeC1QRbNxUh92duXUJqq8nEaFtsX122AGNRUofYXC",
  "key2": "5241eH73CZ52ecPPjE1Fz8gzEGbF7dNk8NYxNNGHnzMeNmrABcu43RAoRBibaMQZYhjUWtDzzoszx3g3w39LzETT",
  "key3": "kztT1mqYMHZ3iJzXWiAhP3hvwADBNQhWqqVd5JsNbt6AJ9oJghpj2t9pxq6Wh68xYayGEpLVfbirChiP2Vw88au",
  "key4": "VzU6RPq6h6gXY7ymeA9PRfZyVVVsYi6jxo1FqDjDpW6YLrx6nMucSmRLjn5XVT3yEzg2Cx7dcaE15UrWGjtJCV8",
  "key5": "NJFfQXdL2TFVUiTgirSkkrQRgqBtn6DSB7hAtZ7xp2z7Ziv2uB4c4R44g1bkv95ToSjUwk9hDnBu8hqUC8Zs5o3",
  "key6": "6oXPKjhHw9jBNXWbMgzSg8SXam2PfJgCqdZuDbvQ7gYXUU1efeRn6Qmvj45JChbgk2xRvLKRMSEXM6qr4xQuUa3",
  "key7": "62dRwRj1KiExNMtqyeqxqDt4FZwEHEp4EbnpPKNqvPSB9Mrri2dxZRJG22HUDPii88j7dR4xykJdJrPvRvmjjixs",
  "key8": "5VsQ1B69zUmqTomAsZVZzS5YfLsKG6J7FXwGb7gzXrSXuHjTaDiTMrWsiuKmQjkQztjsoedssQzmYaKs7vXbqnwe",
  "key9": "CJ7C5NySKxGa5qecjsdGSaq77HF6Te7b276Qa9KtnQhiYiXXL4UtrE8ZTftFK95mpxrksh8hDxMCpsEyR6SoYhi",
  "key10": "66nZTsKBotCMJKtJAhKyU5YdKjcpcekcvrRFwG4VdQbEzufQ4W8zCuPABLujVmWbPZJecvjV4DjmBYLgcjaYryET",
  "key11": "PsxbU9GJukMZZXk9zYKxtyhv9DKUe5DQNZexFZFG6fbT4mhjpo9XkQCrKXKxuXkU57FqkYmGMDcQnByWFLdoSC9",
  "key12": "41Ss29aukinyW14ak8ofyx6rM52bWgUigKf1rZYVBrQKVVugyqzNox7Ez4cYrF3wjtfpEkgKpZ7Jjhp6N4PqFmYc",
  "key13": "5cokGn3hELG9YSWBM4ozF2qPVdmjUScow3Lmvv9jm298dQy1xxCJWoJxZptZP68jPk57sn2dmzn4guDn9J9MJXxb",
  "key14": "33xawoboxDDCEk5T1PsMCAe2mkobdt77ckVN73q2bV4nSZTCVpHKr7XQPSmuWf33zkRa7XFPucac84ZMZXvAC9U9",
  "key15": "4t3U3TX18sENqViEZ9S9PeatFDnbzz57bHEjY4AnRiYtSTGkbHf2AxXfrUqvEyXm9CNPtS6LnXBL2a54Hodvzuoy",
  "key16": "3KGtUUniqpzfJUTTisbbsUTexdYAJG17HjLsciqzSfSotbJuT5M1j9PS1jvHnKkFA3A9k9dCqhCN4qtcPJ7XNoCv",
  "key17": "3P437RoFbi82ECgD52pe5srhFi37xp5fDZMdXE8EXoBb2d1nzcSHuQhJMzTsPAzRDnrReveebW7vYiwu5rUjQHCx",
  "key18": "3zXQ8gBPDX7PQXRtaeKbSyF3G9HqQwbKmKifYeDmCrjEsurYyeELpZPxxki4aXdPyupFZyjqh12sGmiw8ex6XvK8",
  "key19": "3iFLG16Jhjm1NAVKN4QHZzdhVoLF3ZXLumdoFnkvKe2iys9RCvcnMnv753y1ASWAo5RVmSN15kU97jax6UgdB3eT",
  "key20": "27EPruKQ2dpxhNN5svsA68Xu5JptfpQXojCM5VvQXa3YGwhJHEuUDisYuz6gf1ptEtQgU12U6aW6ZPxWUebHFSdT",
  "key21": "PmxD9mih1fvH85Sdf6QEp1JgjQUWvN5tA6T8X81Do4Enjst66U4JwzeijQQyhmkUJyAgvbNZP9VB9VXafEijKMe",
  "key22": "3nQbFm2z45mJVqjmiiFa8vAgst8agtaAcUPE8jCt1YNi5NzSeMoJ4v3F1fxLAdYtptvbuPd3CGfpizn5gf1rMNm3",
  "key23": "613NebTCKc6DSffHg8wFkiGzBuchujCqRxi3U9CybREmtFtMmXp54YDxMz6zu1MbZUgquxPhoEC3eLHvefF7SDFP",
  "key24": "4T7h2t4csoQkEa76R4q5WtnbBkyBv89QNKLtqaHq759nr6cAjif4NBoaXqQ6w7naQ4Ro29ZGGdz9u4TGScKVBu5c",
  "key25": "4XuHQNYb3Y5J3p7HSoFdLyGYjcDDzfHyCprC8w59XpD67uvKMcgx3STfCfKh2AtoNUK6kDRZ8aUiokqMbsufV1ed",
  "key26": "41r5fSAeu4EqxCdYVXeyDw1q6QjcAH1p4wpWi1Hevsn5tohgY5PTrHGXKQ4fLXFqBvzX3Gn3F4b7XPx58zBUarcE",
  "key27": "5zRRZB6oN71H7Nmp1EepK7MVtuSo41Ys8ausw9UNEDX4uRDW2k6DpSjqGjpQEWRMo4TVJ1EC2eYPRXj4Mkrr8fzA",
  "key28": "26kBnEDNLNnHZzqVoG6pu4GafU8ntsBLkfNeRfmmTPBgjsVY8DPR9garBPQri7qRmWFwFwDA7ggpL2zdi7vFHghV"
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
