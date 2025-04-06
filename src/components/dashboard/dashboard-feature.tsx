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
    "3qHw2EPY8nHEZgHqyq7nsS6xGb2JEC8CZuvjRQ8knmuW34hw4UtKUkxNDCKMrJsP8MGY84MXzbAM8LymFBVoWjtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xgi8cAxMjgXgR4gRwkYFtAZKgcqse8zAcNkgc8AWzxTdyXk52qBaYTJe55GwGWwiCZ2ja6RiJVhhEriYorgXuVR",
  "key1": "4JHafQrPgs3NWQ1Lq7mtuHSB81YSUZmkRsozBVE35Rr4YyGaGFLu6z88QU4f4a1C4k3yUDhJ3U4T9ZEEvA2usc4x",
  "key2": "4KQqdJvPVkRLiGs9nu5ifRw6BHH9Zh5wst9oGx3GxmQRvZHT1UenWLBh49tteipVnPBkSF5iLyq8iV5E1EVxg6Zs",
  "key3": "5orzrLXrzqxLmX838tupXCRZQ4hJx2dbX4WPP8XdbCALcRKUezTeQgkm7S2APtrWas7sjwEouQiLzMzhwQBBJTdH",
  "key4": "4DtCqWSXag14RGPfammv4JsxZST5M8ce1o83pQdeXZiscJTic8E8NDVvAGMzKHLoGiuwX4FG9CAx7rX3jTTUb2ed",
  "key5": "5Q6v9tSj9W8Hi6JhwSa4BEyudBKdbFy2MeDt3cNvV7bnyFKktEroSin9QxjD1BisyqXdgFkHsmST6thK5Z9Q3HDS",
  "key6": "bHeyvnxY158mFY318QpZ4bSMyBtGA4FBSBZfCzurQJLKzdDuX2SvkR9EyUndj5ddYjEPyTyPdDtuT7oWhQhgk48",
  "key7": "3DBQDQiMSdZfGi63pxoNjuqmuNb9rkBbPSGPsGGYpuMgpkC62MJLqnLdo7XrtwAS3Ymjtj1ZdnX5HYobH3zEVggB",
  "key8": "47Sq3CCYBMhvAE49fQ5czSphSLpQvQNaajunh4z1mq6Rd93riEZwDgHZtrZHhKhxSLVKcnkd7GnXnGj3mAeqUM61",
  "key9": "jedVZqxz8W8MV3xDXqtCieydkHg9Nr48TQjJ1tpBBYmfuvukB8ySvemU5T4KRWeEuyfXDKWEQhfXV8pdcNUuh4x",
  "key10": "3vCtYrhfqdzdadj6Y958o93p29Ncpp3fGZgoXtTNNoj5hxHMEtktC8N7wtkDo5JdpdxrnJw3wzjX54dHdc9Kn2ub",
  "key11": "oTgntoHBwNGBrCaXB1fZFwiVDKgAVgi4vZJP5n6P1eSq6PudH4CvaeHkYsRGA3niUVUrHaP2pfkQhFB3xVFx9zK",
  "key12": "5B4ar3RcNZP6fj8X48jycnoADiiP9V2s64hCeBiMtGkpmimkVmiJNGHH2wbz7DuyVbfYyb6fEmdQCLxzcmoqX6Qb",
  "key13": "2FMMem5parkYPBh8wPB92JpBz6KRgjvjbCQ7ws1jCH78MmUo2ajG8FdW8jaiL9WXe2QqaASdBRnbnx15jTsu65nR",
  "key14": "63VU2kytETQv3RKqZYihq67QUY6WP3H1mnGWYRo7mFkm9cX1Vhjn9tzfiV4TjisExatQZ2SCJXFgpffiYRWKeQKx",
  "key15": "pcy6vZPkUUUcCJjLxJGtr3YasXP62DZaZ5nynLyQWjasiYvsujqDEqin8EP2fVmH8PpJRJKSySHrnseD2bhgPtV",
  "key16": "41pDhGrcMiVyHV9ZhCTycwsmwp4J6VqaW1YQskJcbivRsn7wYXSPpjMExMrysWY8naiqMzrHSLPhQvD8Kh1KvNBk",
  "key17": "4eXYnjuMpicHxN9ZyFZYdByUnwPqJEwc6GAnDjRNg4wLVy6ZiikP9DHXvg6saHPfjhbvvv7bmLuR2pyzzUBnDirR",
  "key18": "4p31jhw8fyXVic3Sthb3keDkr6faGZKqufBddSChG5iwrpPY2s4EhxEqCvXg5Ko3oPnwDmpFm4vANBo7uEb8GLqZ",
  "key19": "5bYTdupzVcxJ5pStc9SvC6ua77aUMDZUxcRzrG2eEPNjQqLLsnGgPTom25XDbT1GohpiUfkpBbHbGeggEqnYZH5i",
  "key20": "4SmxwFvVuvTWdLf6ysaKzAbJUjQqPTHx6k65Vm6M6BF6ifxDbRduQ3aFnv2gZEwtip5RZkvKgrca5GA6vw7pYWaW",
  "key21": "3VYT2ot9r4eJEckdkRRqiEog9NBugFnzHnndJm2prQX3h2ZH5h5k8jesyYL5ni7L122GjJrqh6o9u3gvmNTVjBhL",
  "key22": "3AtQ5DAxQRNoFHsvFheNry9SAitRtRpyVSzFC8fSpChULsEJCAzk4VgLSHTSdVrmzggMSFcTUQJHwLkZHUCcWaNm",
  "key23": "4EMrs6m4F62dnv5vMakNWS9MmUiwG11QqgtUQ8aTjuEMDg51WD1fPuEqPXkXZqLuJwVh6m2NG4ezUcWEQS2p444r",
  "key24": "2GgPiY1wVHRekvuDkEzyZcMHSLf8k9yf1xq3eC9CUnN1xg52Mixce5v1to1hBqRmpWK1So6qfuXwQvwHU268ynCZ",
  "key25": "4WhZgisC6Dr68iFcFGnn5jkbUYTAmHpmVgqdCSmmmPhMhUf2YZ12k3SYCpeR4ne81fXuYaQGWbgt913wBWcp9BCb",
  "key26": "3eKZXmSeZZpe96wL88XkkuDPZUSEvMqijvAkFww1u56XD5EcqcJ2SpDgPDW5PxRKs1Q4P47XGAsYzpSFSu2EUCTK",
  "key27": "4kpmThhuDXnAPMXyiXoRXfMDhY3fSmVkpAhhg3rktEPf89pxnpCALiHc3vRBvsvbjQ3DBFY72M5VGyNNPJ1Fpjjv",
  "key28": "3tTsN671QderHNeSCW8ouELZ6zqk3cnGNPZ1hqiP5a1yJMsy7utTtqdXdAGK1RWctU4J9pEzEcBWZM3TLPpyCaFe"
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
