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
    "5VE5S6ejEeZ89yT9F2QU5fZ8Bgh6iHf7AxdRemqGchM6igSyT9yQ8FhRR9dwCmBwzRvkP2nMizidiLra2Q6UGUjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dTZw2dBc6ZAMJS7fjEstGgdV7DNxjNhfrPtsN9JvPM757U28u7Zcaeu7AZAUFFHnSzFAHNdXASjg656NbAgdPGx",
  "key1": "4QKUUK1SGR5cZf3ioyiHcmchFkVGwNbTx5A84cYZb648t5M72GWXoCywVWi7XFCfx5fnYHSyPU26XcGBAmjE2cTs",
  "key2": "5eVpT4zRPSVGpGnSih6wxFXf9hHeChsgtbYMcxK7zXxgyWBSy2Ta5S1g2JriLf5wmvKYev6Rn3JmE8MRwWErNTGT",
  "key3": "5sDawFcXFRnVoDMdVMiEfxHzSr9Xrq7EuAhFg12gwSgeSe97kyY5VgnaTzijEpoEwZ9314hYABqZZzm3jrfW3FSz",
  "key4": "UB4r396SB51QztDa8tm2vTfPApg9C3QcgCNn3eb73DGray7TXCdMVN6hu64cBvsLEErMCvDD298E17qnuBUJTmQ",
  "key5": "o8rSpoCfhiNk6p9nB7oYcFa7CrHsrA69uCNuZRoeJW9HHqBm7DW3a9JAPsLbJnsWV8TRyqmCD6WWD6uWttL9Ub6",
  "key6": "5338Si9j66wn1db7ThTigyBcCMh9g38uoAoPj1wahRu8ZEFyQNnVrVtrZ48d14duvadXmQ38inahLQH8yRB56gxj",
  "key7": "3TSKD2bZBnjaRsT8EDay7kcKwLcJd83wCwYwohuCymyjsE6ajxgEgTAdUUEYrzUYKvgYPK6bazv4NfGJaDYSAmgh",
  "key8": "5MkPpn3LKzpPd9fNG7iiGSDNswmje2yU58YTTDMp3UA3xdFsYLrV1PXa1R6bbkBav1RsJXXwxdz2cKtG8Rixbudv",
  "key9": "2xD3DbrUKsZ617RinaCeZ5LWTrugT5sCDUVayzwtGqqkzxb4ZryjYE93Kf7tx51eXgdr2GckDLfujssf9yvP9toq",
  "key10": "2v1D4DdGYcw5oJnef2P42rBGsh6LPhiQTpSfUELeAKQWcPmiJavgHSBAhUtLRf4LnPNBVmn8BZXuC63kVWAkLPsh",
  "key11": "4r2qZLitbFcnxpGUVcv4788LN4tPoG3PecpwuFEuy9319QCFzP1DhUKECwXeTMWQFJ2B87UDTKWPYMAg5NpQAGV8",
  "key12": "qzFggWBJeiScmeXZCURyANuvXUo9MhVqqhrjUiXKahzkFD14LydMgbzzNPoBaqQbgpXQfCpePYvLna5wSpwvsnM",
  "key13": "5A677D9GrhXD2DkeRjX8rdBETVJseRqR34QeuZ7Dkso5Pmq7cxQ1BM3PvxEaL277WrKwJ6B9qV8Egojev3eRy7M1",
  "key14": "UkHGA2ipwKz9PqFrVMHj2DbYsoBm3jeCpZv3k4Kc7QTt4zqzuC45zksSLQVXUzLpkZiyMsGvebm7sfFxZzEJHJt",
  "key15": "2Ryjh3dvr9VGpYgeQDzt1tsEmFcNkDHE6YXT2gMLVbe6y7qMvwQuGkR2ajdGVF36PyedqgQEiFHVdCe85tEEZvHk",
  "key16": "4vTYNec9TEppW1Kt34ProEExAYtHtR74LUtwPgNEd8PG5h6FiiMo6EMUHX8mGnK3rUkfvRD6LsaR7v4LLZZXmk2L",
  "key17": "3LyRUCbu8eguqjdxZQqknqxKiKEKRiofL4BhAp9cBH9zzHbj8vgHuEYLNbkgfQQBnQPXrb6g5z4Bnwm4FVQL7rtx",
  "key18": "5cLtQuDGJnRdpsNUg9XAjyLRji1F9MYwjFs11f5RiZfAaTzJ5ihuRxVm7hDDNBaUpg4C4iu44n6Vf4cQ5giT4TxG",
  "key19": "Uizwkja2zJKtAaNGGRkssoLwjcn2JaDGoL2S92DHgQx5bu5FPL9iafLUCprhqX5LjWbc1zVUeH9xCWKDnnWzZmt",
  "key20": "Rq8YfVomezqQzm3dDUPp7oWM7hE9E3UtTxJNR152tVN17txJJ1Zk66f5MGSEjGbv6nPWDmbUAbYLiKWYzBjoCXE",
  "key21": "PYt5wF72KjBWSJr5uu5tXKeHPMNLXRBod3ZojsZqVqDkw2ca3UHZD1xXuW49NgwxnfX55ZVABJXZakdJDj2RZNP",
  "key22": "5G33zrXfveFsY2RtyZy7mJBV6Z7WdQVUHNhd9W3TFC6JAAHC3HDmzKij9QJDpsaXfpwc432k1jtb9ptfQTDXGuyt",
  "key23": "Samjc8pzvXJ7Ne6Cuid1gwniu5sxcFZCtx912jnzzvbnFuifijweEr95eXeCDHsW8evjTmWP4Zi82htuwEPuyWX",
  "key24": "a1447su349LWC7pBi13ZYnuEy9HshBZWe27y5ycLZQAmFyFbScFgL2u4yjaU8csQMUwGjty7nERu9XBSvAwMeDC",
  "key25": "PC4qczYYinQ1Kqakmiqf5xAupwGNqBBmnh2Q4hrybyYAqEPR76aTJLQUNsHHjAtR3BSAPfpNCnJUiMC1US3hnhr",
  "key26": "5ZefP5KaT9Brz4gBsVPAFt3LKiNJQHkQrdncV3PQ5x2s9q2yRGcRhbZ1DjjTP8pB5zqUwnjH6VFCjniBn6t3mZ59"
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
