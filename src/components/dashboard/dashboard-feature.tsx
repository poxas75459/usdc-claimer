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
    "2Cp73cR8U5SmPf5rvjQv73BtSxAdHo5m3pN4ze7wWFKX8MV5v3naAoXMq7UnAMS415L3wGRZHUFPdjNzd5EPpp7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PLqCYEgDpj1HR42cUrNTpWW23DavgaDSonLpSertcSno7XtjtDGGo6iToigcLdd4WRZU7mNLsVihMeTELvzXo2n",
  "key1": "4M4tpF2DtD1ACmMS6XDyUMewqVcD6kUs6fgkPiakZwe73w42g38QuxLP3xpvgcBiCsdGqHtfuC7jV8k97DgBSqoS",
  "key2": "CnYi1UqgAmkZFXcBa4Rt5cdy4AXgQq8WpW7WJj7RS2WR8wzkC9TeQmNb8nHtuYHhR1XFhLeFpQBGdV64r52RbLa",
  "key3": "4stwdL1WDHNynP9ew2vNjegU3PPLMTw9VBv6rYEz6C2U3c8n2uAb1ymFWEtdmcRkNqMuWjwGGeN1wxECY35qsgKN",
  "key4": "5z8xRePSvp4gTv7BfZSuYaWk5jaSHq4GKP9jeteLZVhjKbggTJ3P5HhRX3g5t1ozVDB3XBWVVWoN7yXnSopjCVjX",
  "key5": "5BRcD8seYqY7i2msDK4nTwdsayofyrVVkhmTerzR5rbVunRBV6yBMKCym2xADdfigRfQMHWcpn2Bh1rx4rVuxSxz",
  "key6": "X6QDUVguh6wGDWHrAjE1oxT7xzpEz1WvZu8ega2HZWWPfgq7ZqxYREfX5yqw2hug798pSb2DibSodBZzENCc1AR",
  "key7": "ELw6U7dy9BFngzcqCBRp3NEP43Vd5R8RNCgzQJWZn7mJxCYym9D6BxhNtZF8UwSBZWkRWeqNTreCMNQniMZDYLz",
  "key8": "26PtLSdW5EGCoZBNXwscy4EiWc9S6svhFiJCkER48vSj2zVNKWBwm3Nv763eFZJ8x6JZmhrMZe3suc4quc5tmTvp",
  "key9": "3vgfcAjJsLCFc1TQcMS3CUBD4PTEHV8p2H6o1YVp9sUtRNM63XA6njSS1srY2bcJQD6sQ4GirJUemZY77Cwr5kwC",
  "key10": "3XjRX9S4UhoUioBBdeffrCDK71FzQQATJv34W3J59atEVQNAUHC31byKccvBTsEhkDSXvExPLX13WxoC7WzmdMft",
  "key11": "64LeHhaSjdKQ39V5Ycna6ukapBvvqJ3iJHRKjEDfD7QkHjvGB8JhCKzkkaBRbxEyAjvAWN3EiceqqRxE7XL7unmP",
  "key12": "2bL6KFKLzaaPbW51Q4aVPzdZDDimchwXskuZbeBHMKPXHANBJGX5bxspEcMyssKpfMLVeWsUsUvSSE3q7vchrPta",
  "key13": "3rGeA8JvC9mJHkyVU12zSbkt5MAbUVY7LdY1746M3QU3YMzULdNPRLaHpiejruZ1XSQ9u6x7FJ6atpUBXd8DK5G",
  "key14": "3yhMbxHGH8hc71QzDrAfachJp5TXpL1mjTLFBxjHpMYqfUYTBc9QhaTBbbWqEAH68wptU8h83vvUgXRF6gHmxnR4",
  "key15": "5AcwzXdT7ciDZU126FTBs6KgvELdxPjw3oS7y4KzGZeqkaHaTDV9TYs4rQdYfN5XftWAfQ5E3SPe39YmoTYcVhid",
  "key16": "3H51smeskiqNGTQ5y8Jsthh64AyfbgzbmFGM8m1Jn2qmM1WoErytChzQe9b6CiCnx7YGriajprCjUrR2uLzp9aNk",
  "key17": "5sWUQNPs9WCDB6Ko4nCtFgcNEoTkh2T5p155ZwxpH8V6WmM5jC5KNyH1d5qZ9Kv96CmwH3GFc7uHGVk3GEUe8HjK",
  "key18": "bcYqrWNJPBS4VCWXYPHTV1DPzSuqqyX8sdGMDnpyhawa913HSUGWXbdyWdHrnZZrpsvgzPzoc4hmm38iHYvLSHN",
  "key19": "64jkJLiLq3UAPwkna9CRy7ZUT7pzzjfSV9hNSSXuN92cNdE7GR8o7uKBacaY2arUzrDR4FjBmwongg7o54ad5oUo",
  "key20": "DpL45mNVTZFyW5SW5numHpwMAJyFZZTAaBXsiNAkmj4zzKU1oa4KEJpsc9sLNLEXi8PMwmNp52qtLkKFSC77Hg7",
  "key21": "wqZBXQU2vPUR45wum9YnJHC73azqEutXHXv35mDd9krz62z9V7do36aoF6MGvmWTLEPDWy2x841t2VzjKDartLP",
  "key22": "4Jhff461tPhruLoStcgb2o6jLgwXmEUkyPxNUGMCnwo2rP6Xy2UQFtCRJXykjdLdRGZeCSw2dLcTSnEnZ5eut3fi",
  "key23": "52p1k7q9XUFvA2mCpPwBFET8Wh77nTFPukwwEuCYounbfiEzh7RsYu157gejgNwhgSTSxtTKFvzKdSUvUtxyP3HD",
  "key24": "65f2N13YsQY6jhXjC9n7Gm8KEePPH11nin4cfErdBmJnRY7x7Lc58DKTPiJQpQtFLBBK3mEtMKMB96PCZvnsFKSu",
  "key25": "56nu3PcLVEzRQFygqnxYqnPbqNsC5WMmcHgZiYncNg728Kt8D65tLJDJ8319sHcg6iy22uu9QqFv2tbHjUTLrJBB",
  "key26": "5UmHYmQRe1ztm7bwZKLNFFEmug8tXS3rcVDA9WdxRXr22iG9SWfnawqNX9Um8RwxdVkJi3yLFLsY5XrtKXw8E1mN",
  "key27": "5gvTUmaeXyraBWwbCuVHReo8edFCZ6TJkoVEy7JZBGBk6xbW5CFtpiHRvjj25Ddoup59MmoRcsTvcmtLfviN9JaG",
  "key28": "3VyUfaCCetatEZkHMJ9JQHhLFTMfLc8JmDSD8UpdVtE8Y9vqLZvpnhr1WA1uK62ZaxWkjeoPctCo3nJTRir7X1BU",
  "key29": "Je1n99umZyC1YSBKzzLqxNCLAigvxqa2CrPNK8w4tdKN1gYhGQkauW6T6njph9KmyJAjVseckVuKjNP3aBNYfye",
  "key30": "5RXstNAYdR2sJoPu4vSALFfAgfogv6d42WPoak7uVSCpbKEwRgZUrRdsAHBBh1UZicUZXHxqfU1YirRqmQvwiSiA",
  "key31": "4Ahy3QGLMQbZi6U5RVrfuwHeSnFH2F9UCRtLhdSKhT2aFjZ4bHMrhAQqFnwudDvUMz5BWEHMizJEVkZy4tHXBe11",
  "key32": "5eVZcjFP49gkPc38jPj5BcfhncszBsPU4H3vUm5JJ5TdDc31Cjo2zMrRA6L4TA8xzL2iD6xUzFBHExJ2WGKSLAsn",
  "key33": "565HM6zAwCeMFuWLzohXewybNGodXrXpPXVMhGoh1z5pPPaoeapqU7Ah7xP7zKY4YbuB3upN22TpuFT6aYg96tPa"
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
