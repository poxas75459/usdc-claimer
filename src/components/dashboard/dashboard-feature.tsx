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
    "3G5HoFEFrm3tNcbjtoyHzXnivBpxuBGsT1jDX2sVqejVgMkonMRUsJ2dW8znkJkGXF1ueA9gkxYkaDNjBvzdrZsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGVSxA3sP1Zo9yiE87sZwSRjgxEcT9ED5xKN6MmypCBEbDymxFbsZAHmVbWYFcF9beqh6E74FEvUbDaViAdkdx2",
  "key1": "5Ppio7kcoSJxeDfW6wnwiJdLrVwsrrAjjCyX2KDHBYhEwRJ495BNE8czjRWpQisUfoL1XEAT8gekBLY9JCv6N14S",
  "key2": "ip9BDBUsnwLPoqdJM55uDjmcWxEF1pQok5KnbMjeQj4uBQ5TvLyeoropyG4jJtwwyLiGqcR5E32QuQbRFisc7Zc",
  "key3": "4yEvavdittEz37WTsGkv5rg8zciMnknDedD9gHrddJoruzMRMCFcpbe6zTRJuncedpot29E8j1pGqH8ziQUvf3MY",
  "key4": "45tkKFHRKSy2JeAyCx4sXZBMwsRVy9FKoeFhgyEQHGBtwcEeArWUoNXw6ewUMNz2MpnseYMKKND1nDs7uvpDPgWt",
  "key5": "472h57X29SkLnWC84ugZHTtpoiNM7eiBkkyDwcjJjfy2whF1HtbMusBv2dVGfu6n9qSEXwnHHGSWD1SHUsmgZrLJ",
  "key6": "xZihjagheQpfaKycDHYjVL3c77oMwnsytZJQmj2GyDPPMhsNbGuGP5TidXvGwvF9qtDJ1KBLDWtKv3RyoFTtHJq",
  "key7": "29TVtzZw9Cprmi7jBDyRK5uAnrxyirZkwkFbDKTZSRtAdJtf9ThLULBz6akrGGTGyLpAt871ZAtMUsVe1a1ZNYFQ",
  "key8": "5XR7RBKTmxbUzNDkKudtG22fCc2oAabMfaJD6Y3U6yUJ8nh8p2tXjFjiXNyhj6Gu3AkYHtkoEqjZ3RNnpk6rk27f",
  "key9": "4JgSUUiQy1UQExmmwzvTvBV5nbbjakePxd2zr26LfiAm8USX45UMBBK3gHqk5XT5eD5SsznVLkdQKhAFwWa9C7y4",
  "key10": "2rK6eaEixnBddUVu95KaebnES6QsFDiY9KwTsfk75tj1qAaveuj4oavaPV53zuhWL2rMomCgBzqcvnToV5sW7JZG",
  "key11": "3Z8boPPyDRRaoNLa5dMuj3bAftWwZtBUicME2wcegmg9nDRRJSeBcrY7BSJ6v7AkwKrx66yDAt243EVnSbpvrCuS",
  "key12": "3LUbgKid3qWGMyfEwETGCgT5gUDiUd1bqewWwmbScKwGfGtiEwx8TKQ3xEsPF2fvMHFrRSQjxx71tTQyRt2zMyDA",
  "key13": "cX139WsDvEDWQZq22BZrupdND2ZV79mZVcrcZF1STafDkPQ5Caai42tUi6iMZPXrrnDxVTFjB6cYVvHkLhFtddE",
  "key14": "5nWBzVvKq7tQ162xJAKoKtYJn8txymgLtiJj883CgNUsxa1PT2wwRP9hGUhvuqokCa3xS7oE5VKQrV8SGGEiiCoV",
  "key15": "4KQmHF9oDAzR2FNS1w4mbk241BUAhNYCvmQ7PewxNfCEm9amfxwMHzF1sbXDHqFf91xNNpJKCsbpXs61xJXcCpr",
  "key16": "537AkjKtLk5a2axbPfSnSaLM535s4h2sqtsGkaq5zeCGcHtuqa7tCGMhv4ehjGDJoUzesdfvbiqXaucQD17sKTtu",
  "key17": "2xnhqcb31LgPy8UYiSE5DsnD3JX5dkNKdLfns7jbJwebwihLmaBv31vSJTKLftPFNaroyq481YDggNtzG7qoraPT",
  "key18": "3DX7Y2dZWjACTZM4ANBKSskrc49RLfegsvkZgpangJjdbFo8PkhKBkCSD2HdTXvMzuqSMWXRDCgfkbmiHED22udk",
  "key19": "4Dv4maNWfSTQYJ9JZ74WAsXWLUskZAX24V4pzZPu1PvqQgv23Sagkgw8cuDwtgnK8DNopFetpyQe7X6P8k2jdwWW",
  "key20": "3Dm6GfU8WxAgW5wuEAwzr3f7kAZYAaNSRWxc1sJxF4PKDeP9kBFrcrNCuV4TXQLTNS7NC1uSdPspvEEFUhkLzYiB",
  "key21": "3aFyEWQfoJ8y3RnQTnnx1GbKNsRHbc3Db5PZNA3iscs4LpifF8xfQuZCSr4if2LnvcCf5xXJEJpS5KSnE3wwNrMc",
  "key22": "4cYU4gBxC6cp9mNJUBAg9FwnxZXmvhkDHauK3wdSoyQtWUZBDwAP7C7BbJYmzNPFw96JVQ2ivQFrtsJkxa3MpRBz",
  "key23": "3pFRHXdjhatFhnrxZyJZwiuED4ETUfZgdG38yYw6V5Z3ihNAuMf2eWSxwj4NiawmtvjNfD36RxU69mJm8T7LT6XE",
  "key24": "4fQdh6P5pMUnHwsKomomrpqofhDXSqPDcmbggxJEYhnX3E7qdqLW99WFP1rwEMELf7MXEjfQQeqB9RJiaubHWG3F",
  "key25": "5EB9r3U5MzpP2jpVswqkrP38xisC5jz9a5qb3Rn9TJLFiTtTGsNbz7LWcpgz1TbrRTRPRCHJ2jzHwHAH74pqyLZ8"
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
