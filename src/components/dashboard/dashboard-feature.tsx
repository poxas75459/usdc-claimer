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
    "2SMQA6apRS8pB6NppsqerVE4snsaLaFgr9DLYu7kXRktHS9rAG2Tnoo8i1KDiHWTt7GrgqoFTpAyuWppFL9SRCEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWDUuAbtXVPj5N86tf6DcRJo1pBtsPsGvuAz87YJC8gt7SvEjAckQBvdXQgAc7u6owhmG5JdLWvAKu1sfqnw6hk",
  "key1": "JGWx8xCYFebw9etJdc1hKkH4ZhxPt6kJTJvf4VjCAjESxi4mMfsKRfsBcok3BxsXM6dNeN5nQanp7kMRZca5TDn",
  "key2": "4wnC8Un9qampiCPeKn9nFHopM7n72zAaURR99GihLgSaeBLL3RTtpewbZVbtB1tAwUucGqwoGg7b4kWp7yP4P11Q",
  "key3": "2wxv8KBtYzRiVR35Kz8qcftGKQ4Ynp4uWtNtgtuC8Gqz1WJDRkhrienJSaNaG2V5EXg1KNNjupaQE83XfZEtYEjK",
  "key4": "3Y7MruSgMeBy1PK9cxq4aRkgJhehQ1eJEfbu7G4r6gY1ZCeNxt8FYWiBmFtV4SHsejChBCFaX8nm6N7gfdJoLBWt",
  "key5": "5qURRPFdFbenmkbYCNysNsCrFzXYo8byRw5CsHHvVEyunjyuntkW9Gzbi64wZN2tCKUa2HgZVP98cCnbumuvgoQC",
  "key6": "3pQwu3pHZdVHe3HNhfMLt6a7MKGCAnBUZE3fAqZHfhd7thAK11CMpDSNPwdoBTB4HGeWCDhWXCF4j81AqJsSoosi",
  "key7": "5fF69QpKLmrzvJi8ASZt1zCMYx1stWGsPcyJyoK9mvPKGeyiY3ZF2kFzWbvLvpAGeVFHCY3Z1dtM6uqhgCM99rmP",
  "key8": "2xmEXqx3BLzzzPbmb1HtX3YfUU9DC6Ckt7785iVQSDpff5MYUdbQtGHkeysRJRAvgwssWUdgKHG4TvgXuETNiHyG",
  "key9": "3reP2qLKnTPxogHQLKCzXK2UBGn491wWJ7EAeo1cq84w254u5FKQy9zqGLdXMh2dEoRgtis2Ti9goidNgJ3McT11",
  "key10": "4NG67dNT881iEbnm3Dccyg47qPRsq7fVvUhLxgFn5oxUrStHwoqbzWCJcAFNUhStpzR5GACAnSGqQgEnbZQA5BEy",
  "key11": "3BjrBKM9qJWDAGuczHEAiexsJ7oAkzf4oXpLvawSY4QTVP5va8MVWMxknPefsC79gs7b8Q3GiK5ssohGeBzpM6EP",
  "key12": "2G8UU7t8xgctRMrPkMbgYW31qQ9AVZ1AXWYwEpQ4EKtxou24Tsy1TRB8v6L37jPHyis1vCha8XgdvvRyHUPkLer4",
  "key13": "212BfC4TnYthAeCaGQsfdbE9fZQWcN9fQooRooHUP6M3ELge1inuFEark6Fchtjj89EZzuyGEf8v3aTdhyLPzYQ5",
  "key14": "kpFQpnqFxvdUrPGZF8H9PRyVkjdRH79o66J2UeJ5mqp1yNfMFQerRWXg6e61TJN7MCYxSnF7Dphmpj59wDcM3f2",
  "key15": "2jzMnzPE7bKpP1ByzbwigPCa9FnQjCcHq1To3RDSnwhkGiWG2TBVLDfndBpJvwcNLF7CTsdBJUwkFzqPrPdFYXZ3",
  "key16": "2AuC6Qkr3AJJLJtnSmtptPWEcPtdiP2qzFw1SK45jfg1oVzTu2mBvAwoibqJ8d9hGERizmFukpjmgYxTaDwWs5mc",
  "key17": "3VfNT1NV7Y8znpkiSpSpWjfhA2XUekeFZNXASVfXgqs94NLEX14CSV7Ru8YwHLR8ptNrrNeGtuyK8JajDMbFoFdT",
  "key18": "5n5ehdijtKU9mDhNbbHCsqf2dr25hNKUjaJdqaBpJpgzCgYUaTxHjNysDQJzm2aQ6gcQ64eg1uYiBYx9EhmaJ47W",
  "key19": "3YaNrAwxbekAGqH2hBS6nbAamTBwpj6EsLUpyVfnHJEgNspqUFYGKtMYSDwQABLmVHn7EKxp9UygzvYjVQaguZXe",
  "key20": "Pvydp76CobwCCrRKxe1J4enWKvfizuTdSvj982fw4NQEVvXe8fnnV3VHeCSXhXoYXEMtFiWC1HVQ4zBoGoQfU1X",
  "key21": "2yL71uijzvhiTyxpV9PruXfux4xrMF98S9Z31GZirwo5e7QPnCEjjGPfJng2cK8MzZBH7ezYQiS1mm7W58Y83XEj",
  "key22": "4GzQDVL1wfnGFqmryhGaPm2qCsdsJ4koSsaNnqYS2DfMYiy4s1pZ1Guxo1QGwfBYYySc87rA9NGwttkzygSqWMUK",
  "key23": "58N3N9rDyPZnYNCbbDiwPagrPXgUVuh1WJpTrmngQnQFjPSjkWzr9B5riZz6Q95MLdp1oDYbQVpHwLER46gghTaN",
  "key24": "2AgFrnZZNp6ArUWDPMhBnthcPYQjxKURwkBjbaabAZ2sijuctG2yMeobKSdk66dD4XY4xxrTK4MrJGB9k8n7xjpB",
  "key25": "Wb3zH9mNbrrFQ9iHmNfB7XK1eEErWZSw8JA2FthqC5UqrieTZCDNhWYHTEd6hTHUvuSJ7rzJnAxthcdnFYXA4ZB",
  "key26": "3HufmwKvjJb3ywNnw4m29RMD8L1SCAs14ix3C5UdWbafEg2J66NgLSb7RLKKCmMbATdBaHyGA1Q3n9Zqax9rcFRm",
  "key27": "4GNSiF9TPEq53E6UHTBycpUK2F5LsPgrRJn9Xe5XYWT4dwcF6XpEeejCLRGitgvi5BPbiJEZ4Pa3bHxU9CwPDhay",
  "key28": "33JtVhKTeVDE6LMGb3fZrAVQ9Lg9hvqL9QZkkxAhkTv8f9xB3fpF8RoHupguFNRyaR7mFYyfg1cq4CkdqFztwa9T",
  "key29": "3SsH8fBxsEPG9TCXtNWJ73qb5ovziHAQtNmBhEQk5pYAedRYzkqwrmdjJyfKm1sFAc13mfopaKwNZWpQiszrGUhs",
  "key30": "5Y3jbsL1jx3QB6KvvjcV4xiFy5PVfNxxjzVjrD3hKPVe3FNjW3JS7MJRWbfgo1hRWcD4oArF43WVrEbgMDhb59oN",
  "key31": "4ezTMkuTHN6FGTfaNATN1GcTFntfiYXKDwoWWM2n2SeJBSh8ggsqw8rkv99Vk4rwMpVVJuWjs6YzEo6q4ajdbmsi",
  "key32": "4ksyzwx6RoBZp3z277PWP9QyZ3DMfhvxyDkdoM25kpuDemecFtMb37Tj8SzqYeEHys6nggP4CceKQc6p35XaELWR",
  "key33": "5Rx11M4PuNGuPHsm3AL8GaQGiXGr8Y9qjYeU65WtcmE1v9vxHcTgF38V18kSZfWLp7iRgkpvGdJgTGPqSNpDV4cr",
  "key34": "23Y33BoFQywRnjyEoPVVqPt2Qe7aEFv9E7sJmxDQjAxBUGEpkZ5SyUmfZSyMe3422yetf7ZXqjcpywszxTwW2yLJ",
  "key35": "3yNkbKQLhUDgfbcpAaWBro3RC3QGTALAFzh21WyaQuwgaCpsC9msuUo4A1wukb3vV7M7KtQJnecZat4MsGNPD3H9",
  "key36": "kpiH3hscifxcJJKHpVNGorDPK2Pv3B1Aa3Xb5R32ckv7xz58Y1CC9aW2yeG6RvrFHYqRqB8XEVv1cALKcDNAVfR"
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
