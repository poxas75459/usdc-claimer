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
    "12uQq3TYfxeHVyDWVJiJuaUzhPcSipTAYLq34Yrb12RgPQ3NeLGLXvogYqptWLjvHD8Ug8yTvq9K6YK2jK1m8go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyqZEWpPd43ohsASy27WbM76vwYeZxYmF1RKryAtCt2FsPWFoRALRanie3CZaU3tmwibzSETCgP4kjxGte17Sy6",
  "key1": "5tyNbZwHJ45dNSxDR1UoSXNNpjtLZzany1b5KVJVyD1jBNp6HuV51WqqWG9QAyJkwDiad4aPaNSrDZEtA32miEJT",
  "key2": "4ZL8soVfWxWX2N7p6SN4UYNY67V4CYFkgWwo4baoAsfopoDYWNegRVaUcPLGRXdc6VVWNtPV9XHytqySnryDRKAW",
  "key3": "4APbkUwJsLjgZ7Pm5PwUyEqQ5goDrJv3S67NfSjQSF2tmsgLXVnshbzzgsqGUQ4p3Tp1VELB3VgkznJSizxVyGD3",
  "key4": "4SwXFf8V3nwWYmbuZ4zivEuv6G2U153qcnmYTC8k7tJFWXT4WvGWTUuYG6aN7cN5EPbY1M4evkwtDJJCLBmnw3Nh",
  "key5": "2gAtfzWdPDDVCZ6GAz1w6K5RnMAsoVXZ7CEXRPq6kphHrJrBLb6VWnJeLF3rgdzU5yYdxB2gqd2vM8rKZgNGvzNi",
  "key6": "5u8Qg77FiYg69FRHRo1oh6QjsGWjCG3FKFNHqqy9FPTF9z7RWHR8Jxor2JJ6ePpRgR4AjUSYdUziMEBZ5mscDwcN",
  "key7": "oyb5sTugDUGofVYRkNpMNbyWNKtoM9K29UXNZ4VS1X7GFiVT8L3z5vw2hEECDNoY6HMCQ1v3MhNTk5K3vqVaw55",
  "key8": "3cndpLzTxunWAeqUBqzzA4ybXxwktvNN6Quu9amUVuqGgP6UVKHKzarkGcPDeZnmUc8kzccZm1GxXEFGLSmPB952",
  "key9": "3JyX3dSB5QuskSYRf8tHtfKxF1ywsXKBMhFNN6YDEutBYpMTkRkd9v2uw4YcdAfSc1UsM6F4hgPY1E5i79ZoQRJp",
  "key10": "5DLfAiY5ZLn518JjiHoMbjbCuphGkx5SVL517z9s8o4rpKCQzSBcTR4J18J3UUZjLtwZC9aPSSCf7sMLqGeGqBcg",
  "key11": "86Zq8govatwszNz6SpWetrMaem7Uqd1TGuUWU4iaocfNuWrKb3S9qwfVKHvtiAdxKWRqAjUMC34kAUXRHmVVX21",
  "key12": "jr8JECKHs5ETYt7FkD3emTZv1BiU42ZfKfmgr6B5gLbNNVAQXPw7rvugUazMy1x1USzXeM4GkqpepvG5QaaDuSS",
  "key13": "QH6dbWf8RSzbwj6cLeqoUrkm7wc9p3g1sFnzWYKmvzwimgrupTBAQtCaNiLfT1Dqy6JAHCKTbUhrT8raKpwbmvb",
  "key14": "2kA6StLpAtLQXegSu8T3t7LnZWLTrpaYxECmEvp17FRYx2rsPEMELhNZtrd2fNo3QqAdiF6BVs8NJGqW51VmrxFV",
  "key15": "5dyA47W4tFM2qmHzLP3FXrhy7zyNKQzPwLQKcJbYHfQPvbDuGLzMedPEwzX8eb8ZyPSj351Rmt4xFcpmP4wZb1KJ",
  "key16": "5JRrAkkB4Y2ak2XdEmzN8QcqYcB8QTYbyKCg8YUDnbdMe6W4QFJ3p4ZEbSxQBmgzXSVcJNdmuCmJxMVwu7QevSkq",
  "key17": "6cnNE8yvkx5v7kRtcf9i4KWiP5TS7bqa4bzLp4yroXEMbQUGuSULSwP9yEJpmwn7KNFEiHK3pTw9rqgxGET8hTw",
  "key18": "5vAUDxGERXXNVyA5gb5N1hSPmssnq6t6GfLAM3K56od9fs6ziLrCgpfr3PvMHRGc25UPXpmudTWuYJL8cXZtRAmi",
  "key19": "4p7WM7LPu9uE8kBHpQwz3MiAP7yaE7Vy939gmV4H8vtTytUNNoj2CNoAbnuS5yRZfiyj3bR3Kvfza9gzAc3Wxfw2",
  "key20": "64LjKCkiHH5ydF2Rz1VvsEQLduACh7jLKc24esFZC7j1yJ7Mh4B67XG4ghV6rUrhGGwPPvJpYQ2n2M9oPkVHWFED",
  "key21": "E7SwSoae7iVudhDAgusRkmQJ16dtVNB2FGcJDSfffbLVuFBM3G8QUmd4fbMxC8C1h28mxicQDUSXLR8V7QMpH7o",
  "key22": "2jLgpy6Ci7AVrPo4Rdvh579oH4QLYKiXu9iJXEsNnuDZ586pddkDFN5ozzS6NkngthBM1nSeBQdAh8BHWZfHceLB",
  "key23": "2QtWkkfwrrnorPTBoNXNykAJyW58xQSEkJBmA6fY3DVJCRxV9pcsvLCnV2FF1RneooRAkpvH8s3615nbZiFgedwd",
  "key24": "BcQMroPZNDHw3ssFyEsFkLiF8LEmxrLzeAzZGvoJ6ZspgAk3cLzcVfjmktqDKxXjH5NVBwGKVAhoHhQSnq8bis6",
  "key25": "MUzZyNiSBVc47Civ63eKrAmgD4LA7HPjb3otG7E7uYTmN3pyS3gtd9ycax5yWfUyV6zKGNh5ofLk8pHyhb3qBJu",
  "key26": "B6FG41DRUHuuF5Z8PruJdRA4gpqyU44qQbtbWHRfLkqdcEfLV9TPftoiFPzfcQP7ZyY1z19W45qTNkwfQ4wfsmy",
  "key27": "2fMftvK2SgZ4GEiU1CAUnh3urpDxFBHVFxa1GLAaexsEwqqF54HzimjUAG4uksx6VR6WmvPuE9jyzmE9SQqXJd2K",
  "key28": "8Y71cT1kP6SPtxqD8RUkymweKAfC5RShDM8KPWi6z6Envg7rRTBcMAeK9FH3uQRBnkuBPkPe5HGmCsfCeDEvPr9",
  "key29": "HQrbJoam8PXPQLAnEoaqAg7iT1pJthf7DQyzCvQX7STDRy2pibVbzzEJ3aY3zZ17VuJyEQvsJxRGE65zPPgewet",
  "key30": "n31mXVbn9PvMyNkSq3tytY9Ts2qcgtLoczkfBHeyBu1SUQtD45CwbiWJiYB5vdkfmAmdW4AEoyHpzPKknD1hFWK"
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
