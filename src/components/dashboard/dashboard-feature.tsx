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
    "3vLhAKbzeGBPG2Nva3obdXqf4svtJz8XMH6U2GQ8VAv8PWgvYanW2LDr5TaucqpQwL2C3DehmdVtbSuGoPKYPYLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybWbwF53uW9ELLbfuBUkedASWniJzebbpceQ9qyNEbjdpsHqxm7HPd6vTzkKgEke2w9zRrLHnaHWNx4FoyjQRBa",
  "key1": "95DmMAJS974Ho6uAXtJrQdkcHwT49oAETXgRC69NseXPTSunAfKgF4wxAdVCn43p1uP2Nk2jqn4VD612GmZpUJU",
  "key2": "aVuTAd6WWpx15UuGFVWBAHpo628JJ2JQ9x3EVYehc589JzGHB9CBrffw3uRwrMBgntgp1s8dAj7HsgsPhM9F75N",
  "key3": "4nZ17K9yERQekerWu7KvWUuKvujNFu1yNb9wWhPrZmKDFcEyUMNKYhKjoHZJRUQsy4hoMvr5ZFVagWq6nv1iAUCN",
  "key4": "5LQaRaFe2bF8cBjMchyUYrmcVjo9KRCPp1nREgi3sC4xddb9pppd2y2MH7UGaKvEa3WJf6DmgUgC9XYTh5LUWGSp",
  "key5": "49JinugWAeHoWazjb7GQnQorizJXvkwFtafqu1N7MPFukq74D6rC84UGyFZj5XKpgrgMkru6JJsPFsj5GZECkzHg",
  "key6": "36qQ5bZ1ci9y28GdpU6qBQocLbKQVTDHSrH5qMBCekCnoWcLRoJvJtjYbbV46tbe7ZVJiDUdJdACc91n9zyTbgZ9",
  "key7": "3L63icUpcwEuCJNCm8mRVTkMt2ugsPwq2PbGR9Zy3vZgtgpZgAc5YaGTzA1311bRm4KYcZ9A58zpFHr5bbbvtCzJ",
  "key8": "2pBkw7Yb7RqM3mG1snZVQtcPVXv7kg5HwuBXmCf9uEHmrcqgsanuuykcEkymCXvKFnyJr7G7JbzcjPnEa9GAJYeo",
  "key9": "3f5EX52JpsoTiWufhAGN2iB8eY4FyYW7k4bJLNCk2bAu2uvsSLjgfVncPqbNwSRMFfqmNavi6UMN3snu7iHWZako",
  "key10": "5oH1n4fQa16VyKyAcWa9B9Y3QD7g6YFHWzKKCxSgqkQAG2zXarx9EF4vTPFyXuvsDfMZjFfRRVFGJyKeK76hgGus",
  "key11": "2AwJXwzLaDGXnKMbHpgPr2a8f9kNyUCJTau9Q59srbmSNUmuCJtY4wqnck9XTQt2ho7k6YKr4cwR1ymDFxJeU9bh",
  "key12": "57zmvV5sgGagEHeg7T4Pb8FuBJDMFqBFn4dRGS2XLhTX8meG3679bcprga26Fc9cKiwgY3PajQS4jB4vPUrAkQBY",
  "key13": "2pxEZMLDv9qiqGcTfMBSap2vP8sZYpzDXUqMzpjsj1gJtmc3kRsknt15D6URRNWTRSURN9PCgwZNogREerkikKBk",
  "key14": "3b5xPfbj9piLKxA4wXnW47WzkCGdTpN2ew5nYfAVU3QfzRu6kaTG21wcVrzvJXPXWUZuTK8uPQy9hXFNf3DmUHnQ",
  "key15": "4w5aczr5WNxg6qjJUByT8kJVZbJjhy997Zrxa7aSjEtCp9J1rXcToaYRPBNZSSJsdELU2sUtse62GQVcgh2rT5G1",
  "key16": "mbVRPTHbEqhoud3BX3fQFE1yAx8YJME2q3A8EaT7PBFWxgp5fD41EWHuXvvxcn31ihyBJXiDV43FWGFKqhYh297",
  "key17": "XZfLWtjWgMxaf26Vdo2WBbFnd6LAvzZSCFzsTD11f97SjwAacLSawZcmV8pSxPPVDDedqzRaaw2aTtBQbCBQgKW",
  "key18": "L7zB1tch4FX9NLj2dijv9AePoKKbYFtZ8RQoR9Fgsy2D1qGrY2LyV3iSTnck8Bw7mUzhdhXaQ5VetSaa85GG6sL",
  "key19": "gwKoKrpo7ZcvesSRDavPutpirb42qjCPohDHRDVg2FCbL3QKE9DSm4FAUeRxVVF5dsVFRA2FFwsqVQWnEEMQry2",
  "key20": "5PMf78ySYXoTSxDsDXZAHq497DWRW5NPoqNqNrfWts9mHNZ4hpY1ZSVE5UMCPg2eK58GF48opukHuLvwZNWTjUhk",
  "key21": "5qCGHVzavTooXATF1YCYj3TAYrmy1dBHJ4sChDWK933v1NECuxDnPmKS2oyZG5Dmsm67GBoQvHzN1pTxgwqm2x9p",
  "key22": "4rzDZZrwYEXv51RDg66exk3uQa5um4SHQc7bs7hvzh1LndcdXNJyJ41A5881MgyCo6Cxia3mqXRaV66moQ5MxSYy",
  "key23": "3toLLHxQm5wpkYEf3JKjLT6PWWbVmvydn4XmhGGmEnpPUiiusPfu7Et2L7bUQb5UdKd66SyGiVu2va3WRBLKKW3d",
  "key24": "2W4sLAv74iFPyJ5Ahgmo5f6m748McmpGsXCEmdqzhV5c2aqJ52qvsVtDW1BcTUsRjgK7tCypDuf6tegrWQPrS3P4",
  "key25": "5RcFEwyG5noRRQZxokHuRq7jsWch7vcxkxXxhDC9PumonrSxPopYRHxWmXqHmUDHKAF5mzruskiTWH2F16NuWzxT",
  "key26": "4Hjbdpcytt5yv4djGcRZ7fRGLLdTva2SoVUQ6JnvQeNFyGvthwL5fd8vFYAGhnE1J9ZxEKWKUArXifcbxLvq5yTY"
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
