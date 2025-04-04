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
    "iRcft91yBcsyG1D5ax4jY9gRvSsG9cjYMSK77gWCycsXd57rvP29DYLg85Fkg74sGzo5Lm2ySdaraVAPjKpin9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFgHaaCMnCYazEMS5zHEpzL2V2dNvLXfXYdFAdW4bL1QYryVRr4N3BZKaverSraHp8NpQcYsmN9omETHctKttJD",
  "key1": "5Una5sMoqqtSRtyBviWNhP9XuFhbPrAMRHaD2aVwfWx8gc23hz83n4cDmguDpLo8s2yemn6vFe6JpvS5F6MKTYvw",
  "key2": "5ahTpMFjxwFtupsXvWdsRAbMwt7gwKL6aXLWQkgALAd6EVouxqS2Z5G59xuhx13a4C8E2ksjgqgK1pncZWAaQcW3",
  "key3": "5ubXEUsvQ4adupd2M9jBDQJyp97mg6dXy8ci3ZTksbtmaK7r3RxZegLWqVkYVqxULF4M4Ed3HDHS9u7RQQJ1Dzoz",
  "key4": "5ndDbCv2TGXJhfBLhmbVsZ8v3C6s3g4t5VXB7rWBbr9M3kDMP45PaiysWDMvochCHgiLKusdg3J1QbCQRZV7Q7rB",
  "key5": "3VRKGZmDtH3ukLJdJvN8zmeLgCTvMVBitJnito9WPERmkPVQpzZGfZdDdbm45L5qagYJQdK7DRYF9MDkvcBvxPXq",
  "key6": "SHqLWFCQwx9yRiY7FX9Eu6VFygQ5zM8RnK1uxrLgPeYsq6DXxvYw7Yweg8rUqa1ZB25YggxKTV39wxHpReWJCey",
  "key7": "3gFJGzTMetEa1VRFKigDkN9SLhadB95puJLeJQnsUH9azVrrf5GJdi1shubeo75TZMx3MAxKrA3B81tz6YL3oJwi",
  "key8": "2YKPtsY7vdEMP4dtuyoHud1PcYpYNBJU36JXgrDZ5CiodcQkVcsqqsNwYueeVm21cZWQWTj5NQSJ2uuWPfZpNMoC",
  "key9": "3EgCBgaitvfpLhXnonDzVQxkzxTCp6djBZ239vSWT86VdkkDSbDjBLzhU7X8HvXLqXRfFQZdtnG8CZSSqgi53JdX",
  "key10": "2oNP8NPt5FE8zPkeYY85s5PMBSHEasfQR7c1SF6UZAUEqBxQ3yU4qMx5GDyJUKwwAsJGpLHDV413bSb7rVZ2vkuF",
  "key11": "JCFvY9UEtz7qjcGWpNvtvnq7TQPwTEoSeHSnSbZWS9oTgEMh6BdNUjnuRouB3MJkq7NGokFvDjqZ6i2pA8YiBtM",
  "key12": "62xrK5uWhrB75Q65ZXmV5Nm3ZzjiZFF67RdxSWSMjknRv6VHe8j1Uqka9qef5wz643Pu2CPwXiPyVgHZ6siAcQyd",
  "key13": "2Tpd8tNfYYpJ91NPHshA5VUS6GAKqxWsMqMfybN7rRBCfxMWpRnkpmupQTAAcwyVJd8QJkGB7vvps7vEytT7NRoS",
  "key14": "2en5Vgn3gEPHxU4oPzFxC1RQExHcnXKpw1Qx2FNFTkQkuizrST5ffPrz4Y8tT5h4dZsu78zyU8U5qk8e6BYzQdDz",
  "key15": "CMrk6edyszrTsWHD46Ciyspky1sAeZUpNhRtq4VhjYFpSEt9eV7Q9EFu1QkyaHsd2Uf3UN4AzhkVQu44HVQoBrY",
  "key16": "5HZmQLeLdnyLvG2qmn6JHDXNaAqVshXMt7D554C7Qw1Aiq6fsGRvZmRcsvGnuD6QKdXc76BuXGdGR5fxa8NiMEYF",
  "key17": "82AEmndAQuGJzarzByqELgaNkbhQa9eCgF5tSvufX3YPR7A8TXvGJnGCfzahaXJDiFrB3ThGMKvexNuj8K3tBdF",
  "key18": "4tgyZnudjmUZEFpAuE97267ANMAALb8gVX5uHGgXyqbnT5boA2C9Sg5oAqmZgm6Ch8E8UDK8nSgftGgmNxSXZjSB",
  "key19": "3eGY6E8AvVL55TSzbVYFWBitqdmbD191qQtPQAkap4TNc6d9cUoGhakLL8XaKPKR8FnRoqrpkXH4gmhP4gQWpirH",
  "key20": "dBeoDbLyFnK3euBrVo47wWXw9HGKL5U2iaCBkk2xYmyXFg8BWVwPkyQ474anZv6zfeaFj3VuHJ9ATJ83ZgJktLD",
  "key21": "uSJCZr2BZpnV745yNpXVro5Jrfbfv9kjGGMixgWnTaCr5L8YuBBa9kvAfLhGUUcxSVDQYKKNg8tnxbxsW2LVzpB",
  "key22": "5qt4vJrZF1Mz3whgoCaNjDrYsWuqvPNRTguB62RC4hiqJcD18faTpioZHgtcSZNG68EUFssCrtSVhUbMBZLsLvMR",
  "key23": "3EGEZcFXcUejHTTh2KG5VpsrA5QkTHSqHtMu4pS6p9ETgxS8iJmfAV3rNwz8AewCtyDe8dacYPKQe7rvtJ8fiZrG",
  "key24": "41ysseE5VswAZeFusviB56qMWqyZci6YdhfdthdshuRNQuKpwMGmAWmFB1vTn1vfbrwdRBrfLU53Qvf68iiGRQ3h",
  "key25": "mf9B4GGGYPjkuyjUcdJ6iKK9HC3wXAEmQgBKqn6Ev8mfKgPCH3PGRp9payZSsbwsbt4WZPJQ3F7hoMVph5jLWqK",
  "key26": "jeu9H4oKuXJdQxRszkY1HsBUSejzAhPQkJS66YVFUGmC1wtDp8xfWaepturKz9aqfaDZLHsFvv1zNroooAuiS98",
  "key27": "2hjiyNfffexM8Y5tc8F2tD2Ti9iVhXL1jD3ZuyUZS9833pWbCZFNxCL5MPC9VmqyzBeWrHF5ZWfd1mk5PsLKD6R4",
  "key28": "58acpn8kgsianZZbMGExUmfxzYfpsqQL8186RdQVnbfWPD1wyz5rtHCmGZiaBmPxKXJW17fR93HcFLQizt84kQes",
  "key29": "MVcu6yJvx6M1k65dizzTN4DDWUfzuJ2WWsSjeWo3483Ui6sPeBL5a3mZWyRSNmR3FwV1L8HyGmCYuzS9JimASCV",
  "key30": "5KbhSdzsbVecrWxZDPE2zTr2APJAveeLK8WtFhvZ981383cH7kZfkMLVH3t1JBysC6H9dW8vCwzGWhhMfGqAR9dB",
  "key31": "zt94F8fcE1rRMhWLqiprE9K9pnGkj4Tu5YpEdcWC3bgbjautC3GEdRZn648k81C4PgvDpwtNvf3wm1p6WqECw72",
  "key32": "27Gb5eZUD8HkqBi3cR8JqjPo7u9hLHMZAM2SbqT1eoBknApN9cdw7kkueXjQVwBHcmdLZCaQo6FUG4y24GuV5gdf",
  "key33": "4ajETTVV5n9BLEqKNQkHbRUceHHefbccwq1Z1bHSLKANr3Hc8YpoRnrV6xypPfoeLDZMN7hEiu6DiY16uoubASWG"
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
