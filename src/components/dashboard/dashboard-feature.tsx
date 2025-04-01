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
    "3TF85k45hLmqJz1XRYfupcgUWc3qXpTBtgBeY1tsyDV6QZXJp1Rnefszo92CnVUgrCZfQ9pscdWVATmC5v5QBAnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LMy9nMqoeRd5evYvR4GiGXPkFnqxjaeJANsreJNjP7NqVEW2uyU5Ue6MGUNNBaAS37SU5atwwU9FANqe7BtB2kf",
  "key1": "627oxAUhKAPGgXnDmqtxM6VU79eX5vtmvepJdKFYfUJvkEnzQvkuaCnAezBj21cw46XPnRNgpNHBKyYV4BzBXs2q",
  "key2": "33Q9UXY9Lwo9gaEo1RwqCwP4sZG6EUvu3LAcCKyzNRHcXJ53drEbr5tyGP62ZTCt61Jhbe6Mo38GP1ZkpZtPCbp5",
  "key3": "PdodjnfFaDB2Ss5STkuXJ4e94rHtQiFt9wcBSHJgpXYj3byzUeXrYTnKNrWGfwTPne8LvQmRwNRbnGZudtA7SPH",
  "key4": "3shWGytmVT7VRouyGuGkQJvmp4Sfn6iMZ5ThVMfmwRCtjPnmNBqJDisbtSVmSMwNjJa93WK43TwwTaZm3uyCXKCh",
  "key5": "4EviAgVdWPyZ7nqy8u1jf5aKFWNTUqhVwvWgPFUBNi4qaZrSyR1eJBcQJCPLuzdCnt8k7rLRvGWq2hxo7j2VBg7G",
  "key6": "3zMgZJ4sqH58rMc7AmVtwW2T7WExWJ3tB5Ch25gm9WFLzxHX9JSSnxH1eLHpxDiWyZcR4U32GjTGB9LSphsE3P19",
  "key7": "4vibyDf9v3DcRL6W3niveW1rhrosbf5EwwVY3ChVJW3RcM5dA65D54uVdKPxeRXYvHR1dhCMCeABqE1ymEgPRSfm",
  "key8": "5cd4DuijKdF48DNMtqBhQ8vZDksW6F8z3LoT8Mo6HAwKtU5t2EuVrXb8rBCDtHQapKvWuH2eDT5CapahntvRwsC4",
  "key9": "5britV6AzjnEkfCSe1R6WYZamYbJAGpeQjYxcWuGGXTHeWK1uegFgHC7iyq6VqCgeCGZz8HAEhcTdUMyJQHEjx8z",
  "key10": "2GSh3xWhuRxKwgfreQLgF3qsohPKPRnidqmG3ikPHwGVxdsDEkTVqwwv5T7H9utiMsDBFkrxSg5SoxJdDyLdv2xN",
  "key11": "BctUGWGJdgFxpYKphozY52BjBf2QP54J7KKnGsCRNzaxa4ywmWhdUAKFfCF1bYw9FbjUbUD6Uvf6D4ZtNyKUUVE",
  "key12": "214kfsu1MQHXxV3fijjkz1ey5qqaCuEsABf5GaKUfHLvFpukjddyg2rVcvNFPfqwdb1zn3XjJTBnXmiDAZ2KFkqS",
  "key13": "Wkz1DDkXVYTsNkZZBF2HvnENzd2hkqPHYGkYL39MVdWQcs2PmTmeCJLvxKVM2GyWU3NzAmna5ZcLYywJHqSfGAL",
  "key14": "24qVYtgPEC9mv1BRyJMgEHQh4NYfnWnSk4rqsCVBrEDSULHBy2fUgvYZXLBPfWU9mjcv751Mkpupf63X434bquHT",
  "key15": "VYYNQkJ8v94Lxuf6dRiTYMpoBjgBSnvHSDRSnnn2nGAZTYhetoHWRyxVmZh43svWGeZJLRYVvG2uzoCzmcnNSzm",
  "key16": "bQWS7hwardLV2mn31fmFGemcNMGJzxztHZExzyBgo2QA59SBsY3Nzg16zUxoN8E3R76vbW3PtUC9E9yp8XR1PSL",
  "key17": "QPa5AS9PDVj66QJYs87WDwBVDNVNqbmRLy9ZtUwZm7Hdq8PQLdUN6cRkFWyhCT7S7rjwtL3bRSsy13FtYPNkMBr",
  "key18": "3S8AwTnoJ73bssCj1V79wcXtsPPfujV6E6K2Tnd8oo1LETci6Bp4V4zWTBF4Jj4QWLf2BgDFsLUtSdut58Q4YRpa",
  "key19": "5pEa7hDgaf5tD3S4WxjNiWyAvFBkn6frUgz5rQgvc6MjPs24NzKrBWN8vvwgZaBn3NCxezsGqpPNkU3uReXQJ8s8",
  "key20": "2BrnfaSntv5ph3bRLDswPRj19eWQE31FveUJJB8o3dHo5XQG3az2ujVHWfHvfFfyAYp3r66aotTZYyHY9PWTUFJA",
  "key21": "5sC48xjgaSo3Zbvq2wbV3LZfqJVKsqj62bRVAAWvyZdupcqHqxUm5MoZjuTrREwFqho99tKzeGRoXVCYd8NL1ZkM",
  "key22": "29ExRF3gW3S9JLL8y9JSZLkeHjhKdWp79mCg8Q55PWHMdBPbdiQpcNXXyWk126k48p6hwYjoLt9EPFNu3C1krzyU",
  "key23": "5zN7pofjEsudxJbL6EAcEd8YazjppY4DvAiDJvHswkKYcGRifNyNnS5kT3iXE8EzyAzj9VhFTnH9tqG3X5PiiC4A",
  "key24": "5N6EYquvTbMFEStTEUAVYf6RZyTLaCpLmaGMUnMn1RRAcvnwZzh4oMuJ3bDhb8sYaz4Z6pyriHhmohYkKHybU1Bq",
  "key25": "3Sn9gLUhYtSEjfBAStuP7SX9gXbrmM5hbwF6LFfQSftuv9HyUnwwnS9HTiZuYJ81CwLkADLetfDVRFm5ywKbCubc",
  "key26": "5yoWLAayBkMvQg7rJo4Byh2JyLYNX6riznXzw3HvnNoraz5XXs6qjpiBqRVt3anAQtCxJUEgAfNt7H1RqDUcp3YA",
  "key27": "ToJGnRCD2qbBGaNP7eDkrmcU6z5yaxCCiRMV3834pB7ixc7UkYCKn8kEpAqfG1tCo4ReX3B58iCcMoiZK59RKR5",
  "key28": "2v8eHJuxeCJHi6MQrWGmsXvjDU4fxPAPzVjpLscuYX6adP9QPg8kkTD1Z1UxNFgUk5ebJXohHNnzZvRXCBs1N9NZ",
  "key29": "5UjkaAk5n2yZCzdrvdX8q6bdDh2jEmYvA4xBJKuGhptqT9tDWC21aozYsCkGxsdTSmcGQZuRdrctVHhbEX3LaRKH",
  "key30": "5VGPvj5kaZD5aZbUsyuGkF7JRE5h2ZR4rM9pNqVHTNvAXcbfDSHts5DhVSHsXgYwPnETvj1Xv1PWoXTnHCwK5Qy5",
  "key31": "51hfY9tUdLwrMiduHppa8P9EN1GFzT7v49Un7JGjL7j5TnfnDQUKKuaWDXSMC88qTstX78XMXpPLurfeFpBJqEuM",
  "key32": "2znFwHZdtsSsXL8jQbHKSmztDAfoVg1Z2JjYTiNU6A6xfLS7B2HCaAZ6C5gsvTx6nx3MEDJna48heqi3p69i1kqk",
  "key33": "3x14LpxCXmieSaUo3adxuuvLGC5T2PDJRojM7aA5doCXFXywyuvD8wmVzizYB9HyLsQtNC1dmt3szriuzqj1i4Sa",
  "key34": "2ZDv6jpPXTXxRoCWJouVCNEhungSFyqfCc3DJAvb1yRgRX8Rqx4KLXmwZfDUe7GRiA8Dv58zZpt6p9sB3px95Ucd",
  "key35": "5Kzr7LKTfqQQXBA61AHSuYeHXKKVSaoyDMS9T1Y6yevCRwkzMrpieTJmHojHvFiyuyPwx6HRwkMhHKBUHVcweUs9",
  "key36": "2EzgJ1TB2Lnhu71buGekW2CNgbyaZtpLr3Ri3f7P4aEzmfy7HVnQPK1sAw8KsXM2S7N48WAxfXauxt2LQ7QNMvpX",
  "key37": "5KHaNrudPovW6EAXG19xyPTQKd8qpykUp1adEbNNq9ZB85Fb44HaYzDh2AXPNR76JgcZNpmDxX5QxiEJqJvRMQER"
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
