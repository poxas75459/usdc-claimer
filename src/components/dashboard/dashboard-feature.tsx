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
    "9Y3tgXcUMZqb9U29aTizV5FRBmkkrsTZGJGdZiWd6Bea6xhJmJVwHJmk1CY2BXYiomAjgxZvQEdH9jBNEymsFun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eyojJUe2dPrCwV8bop8LnRqfeXsYq8hdgg765jwUTXjyUkLWKpDK5sZu8kBnLZ88mhHPzBg1dvTX9rEwDmHPoj9",
  "key1": "2fbNopC7QBDt1tTLwbfAaQrw2ME68RfvkhUxGu29DAyPn4Ng8LnPsRdTtGJHyKuNTVs6Fgi7ycLfgfooFRyjhVbq",
  "key2": "4sYEkq7waEqgP3i7Wzhxai6W82RWaziiFGpi3BwZ51E2ULWJKwWN1viETvRJzSgoNPekgNa4N3jugQahjad7n7sw",
  "key3": "5u5YEJjgmW7yr9VLEzb39dNDxfsnhWnFgGZVT43ieRFCGPcSn9SNBQ9xJYduppEnfuskqyAKVzUy8hkqeBbWHujD",
  "key4": "6Gtn2871JiQD3pwHfoanPW4pQhJt5AxqLDyYG3xpNdMX6Xr7DuW1d95T5ovCU6b2HQANvdPPwL14SuuUkTr5QBF",
  "key5": "2WadnyFXgkMEEBJpdneqckHkFLpoTkJ9ZL89pSujms17YpUch5waQzV6buJBLCpT4MjRp4BT7K1xHEMqq5C3c2Yb",
  "key6": "4yMcLt3vQNFY6tCthSVXu2wQDDzP3DVcjVq1FqnXuGXWWPSKYrwcwsVX26ZqZ5XupHJuMPc3PfNCkg5dBfkq3h3T",
  "key7": "45QFN1zXNRPVSkUdEb1fpbsznCxXE9L95jXtH1rTbvDgZMtYW3kd1v5w9pCNwT93gSDySJj5LekC8G8neeb8v5YG",
  "key8": "2Na8VDzzQSxk6iKDriozkbF75nP3bagLSLWDP1rHo63XLdzCNe9JtPskFenZia4YL6gZ6q9vUo524XBFg2cMgJBb",
  "key9": "3y55PNu5kuyhWEhLbvU1vnNTJLfbp6QRXSuZrzX8C2T68hsMNExb72yiBe9dheqpW1bAPdCEaRhwUYFNPuKnHtjX",
  "key10": "5J3owF5fiLwMEogvtruJT88BPhFkF4XgYZuF6QED2Tb6F7vPNdaSkuNvqVttebVNkLPGty4sgBs9uB4uwxENnkDu",
  "key11": "H37vFX4PWhfWuS4VFMnzfPVcnu9r4Wq1eQSGKZWr2FzN9uED7QVHvJUiyQCPui8A3oxizNR1tcRAq3ntHdvksVe",
  "key12": "4etvbAtG94Q6f4YrnSTg5nXGX8bx3pUpEBWc2xP34pmkbzQHjv2gHkXN5k6vmEJzRm2A42scvfhydD9eivBo41DF",
  "key13": "2kTehnRL1H7jEpg4TXctRZLt5YZUKLCjtZFxyurmZehPVYhR5iWcjWuP14MrCPMD3QAzk12bifDx7HXwLRkhYE2t",
  "key14": "49xt64dksdYsCkYNgrEcFxbnFwu7zYmkno3bW9qa9WDY8VK8NNsqKeUi1Ya5DnUw9uhsACqxTYRjD9aS9axjPFwR",
  "key15": "47AUxzz8ihMK8bGDxF2tYgpeGGqfBnorZaEVjmfajSjTnqYGRdtni9x5QtEu4y93hY8N42464dS6ufghWDtN8hoa",
  "key16": "4NHzcuDjvniAL9QDg7Z6HmiFT6aMFJxaezBW2iHiC2TivXULB4TcjwKFcZCSJ6TiMjGd23SpudtWwRBeNzT5xYo",
  "key17": "4qjmyirAZ7nCDWudfeZciPmEfc634bqv7dHZToArvgNaJNi8MQ2nLxrmHAyXnr9fKGPDLnXcgfMJUHdZgxk5M4kW",
  "key18": "314KNAetYcaso6GeWLHmYq2mYuZf9XRCtMW53pMPTHsvM2TnMVaFKWKNxX33TbrxVU1AbDnZafi3R5gdohPycKXk",
  "key19": "hi1VFffWxmcxn1NRcgjcizF4VA341NZMM4SywmZtBJ9mbTwkff3MabkwnVZBLsR5n2tecQCxmG38zs3WtrwjFAY",
  "key20": "2XJLvMi2pj7uePaT6YL4hDcDsD5ZiBMg53YR1K2yLew8tB6NbdXHP1xHTQXydnFfqugtKZ3gjXyEiuofrPn5DScf",
  "key21": "4dqq5AtVXeUjo6WhBvrR3XPTFH85wooPHELyKDn13YtYqVviJ5arLNWdjrntXs4CTsoA6V9kHxezMPDCq1qzcDEr",
  "key22": "4BE1rPFEWmmKxfnSDEVRJ27CLbo2jNngFeyyGezhdWZrhGNKxjZRdv2wUjNZVRGfkixd944a7cKyvBK5N745JePQ",
  "key23": "3a3T9PDkvyhhr6pKWHzkN3vs1w5P8gK91GUqLpbaAMXAbv86TJiiC2e3nc2fD2GVS8MjKGSMZAh8VWuWnzz86Pj1",
  "key24": "269eEy7KHWam2B9go298j8ZMNQExXnCbikKdK9AzfhoxG7j6hiirp3VeobjXJr1WMwDJYvVLPnumfUf5ZvvM6qTL",
  "key25": "4t4TqqsP6ZWbEJ55amCDPBee6jmqG28TGyeXKL8ooUxejN6iopYBScKoYYVFWYP91cxjVFHyTv3zbWmQwpewE9ht",
  "key26": "31tD3AY2gWqBsCgzWVaE5SnTHJ3Z3dxyjKgrWbkrbVq5dpsYhCcofx4iy4U7f7p5MfYMYFYuTJJKfE3ARQmnWB23"
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
