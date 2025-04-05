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
    "wS8CLZXvcHMytehUana4qir3xBeTox4P2qXLviFHHtnLWXUZVce5eKewZ7iwnsnVegP88c7whTcpg3rcHMctjHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DW17vQDxH2zjPdtnygJSpfUZZby8Jg2upPeBQN5PJXTMmoELtLC4BNbPZbHP4wQmxUH9uz4sX3nxBgUKE1kY5Qm",
  "key1": "4s5wbCQRJpbeWw87UAV8uBHsAVc7Q3K4D26yciBVtPzzWJCYZD26akwY87RxwuC6CRnLhKikyRpGwYyEFvB6Dm6P",
  "key2": "5PabgJekXANu6p7QMc5QpapSqYni2iUFQypxsjsWLjcPcMSenzzDxFcN6P3M6oCUvxEsbAdjcfhnZyJfyENS1hAS",
  "key3": "w2As7qd8fWfQsXhZ731BcaguoGTeycPngj5e56eUC4vx8R34wGsMieqCt8KngSkcJ9JZFzyka6ZQsw1n1Xo5QfM",
  "key4": "3TQob2cBWW6Xyqqoyba5wmfkCJfZ3DSDgobunBZVJuCWSA4mhTwa43jS66Qhf8onVZ9FufnqYFBHajmJ8hEMxAr1",
  "key5": "4jchAvBVbiuW4exFT8PyQvxjFJsG7m7vzNsVM9fjHLnox2MWqHpY7AsyjBwj4u2QFjzJ7cs1WKocGSPBN5oL4rTj",
  "key6": "4yYDyh2z54CNqSiWQFL4zm1vXzh6Mk3tns8aG3DJDrjEWr9s99eFEpWZcsKaMXksA6TDHKfdRYWHBTc1GzSFraB4",
  "key7": "3dqrdJ9Aot9PC4X6VKNiH6WdPka1jK8mXHf5hgXkoNnQxWpw2dvHoiGYnp7Wn3PiuuyPxFG91gZgs4xbjBt95viT",
  "key8": "2zvDvp1ne7jUojQXBBVYoG6WRi16xPoRdkVGu3dsMv8RcJwHobzLPgNhuRsjJgoJAhhhBUWNnTgc85WdNHUYmJ97",
  "key9": "3MYzHCJmdAA5HeNerh2siMhFQ2Q2dxekbhfupoKMuDbs4SuUGUcgKRbdoua67YH3mMV3wLwdJFXaVBPL7wfbxKeU",
  "key10": "DPtRggqDFp7mBRCLSybCUKjgFkEiL596cGaiwF36iu5fd9TxLqJjWSpZQ9EVy7dmP6KRBeyUHXmbCSB99iFhFwA",
  "key11": "4E1VbxMBSvPDWJGajyeZB75A5iQpPCNpPEtAzaB22QU8es3VkSmRkD7QVEbjJ8QXzWhrjDMGXebNDjAPpjwtPyEm",
  "key12": "3dYPYgEwprNXjsXE7iZMAxCWJCMAFC1i1eWy6kuACqDtuBttAHdoDNpzdcA2dVhvNWDD17VZrbeBZ2T3wfYe2ea6",
  "key13": "3jfU1xnS5biQkS1Rm9sWrXDZxRM25CG522eD8KrVhdvZKUZ6kmFTaVPGrPbKn1TstGPKUZdxxqrxojF9ZeZWkGHa",
  "key14": "fZbqaeTS4878jR9NLKJkfFRZGE58QmX6PgBPGkKobm8k2SuDjCbPhpqRXa5LPqN2HbX4c2CAVfjggXfNUuDa4UC",
  "key15": "45oMroc7mk5kyeYV4rPpE43Fb4Kak3SA2ziB432X3BkMEC6iQBqJR3Yc3KNnr7PmcjKULWJLWwrM2Nrp9yNHyRaP",
  "key16": "2HMpxzQPCKjN2eA8G64k2VD3jLHCXkeLCNxq8vjNJbkDC4E2knbeKQHifBy92dLnDmScKbiNvTdD46yLh5uPmr3p",
  "key17": "2K8n6Us6ugb36CMsrMy1HuNLGzZq621qmy5ipX6zauN8pNrRYx5MDqKWXLo2myB1YS1TRL8u4YJc9Nb2Z6uSXBuu",
  "key18": "ewkRWJLTwzJnwhmk5eRviHwYQhzZjaRka2jtF7geUWPNhhw3r3oeFppma5QqD6LXu9v6ikefWj4xdwHCiJNhG7A",
  "key19": "dZ4U8vqXutZBisGosDLP9dTtd3mkuvRzFo8E6bpbinrXBfe1XVLKAjWd1PeZsnhghVUpJ7icNWc2S8nk9NzNwyF",
  "key20": "67WD2WGJKTQA9e3tQxt5GjU8Pi4QKnwipfXJhW6YX25xLGqcZ7tXMR255QRhjmgkoquXwWZrMsRo73CS8bogJdAy",
  "key21": "51WgTSTDs3S3ubzc1tqLbWUUuGkffNPx8KopeSWwnEvQoSPbA8wGS4dv9xLFdTmWE9TJZQwxKsebEfeiwRiiCGeC",
  "key22": "q4y99WdewPpjbNWt8G7kfkqYTeaNsCLuSp1yCDemfsnBBQUfTSWRbbWGiz6XdTTZdyJxKTTChSKn2wE4m94qrNJ",
  "key23": "4fzHQE5QkvDcE4bdy53rEPM9QKedhY4PJYwp3HgkJ4Z2mVLVkUgLnrfr2d5HnUJBy5mRiR4mdLwHKA9rhe6Kbz3k",
  "key24": "34LZhrdoQxSQegzwgjps7SJGQN2P5JN2GjFr5ypWEHwKgZ5Ez9mA4b6gpPAXd9NaJCfSRCi1APTXXDJ1sfKFAc4f",
  "key25": "2rrGZpmAAVhvDAKupUzkeizYdo62jyjTZT5AHUmq554gz1Y5CtmxTw5XJxR5vh6q53L9Vq2etGAdXGSQtormenkF",
  "key26": "2bfwePFimqkCy8tstUngsr4y359TPRvKbQGWbyrGDAvGkVvyWZyN5J7pr81K5uWTcNSkruvaP4BwzfBKS2W8pLCG",
  "key27": "4x4NKiWot3oLhWcZgU213f8jVgLEc6WzE3qDV6DapxCsPeynqjvmREyqZiV58dxHGZdDs2dyXXH1QBfAjiRNgsHa",
  "key28": "3pegJQhURnduxUTFBVJGtL48smkLc2k3YzT7jMhotaH3KGFjTu6PCtum2Z1AcyrWzP4BVGFGKbghr3DgJmMKvr7k",
  "key29": "4YmgtDMuASdBjMU5HuQpiQoxU3ooXoy6NJunGSbKm9tqiZnSifSoGMAJFQn7FPB7tLn3BJU35pJfSJwQ6KiGzXE2",
  "key30": "5cUNz7CuPoMsxhfjscfT7ztvH25QYSuYdVRGnMPQnsfe6wfoDx39A3Xzp2Jib6qwU5CTRcUspDTnKwFW8w2cgokv",
  "key31": "4pnXchFsEtofmMUGF58mbBAdk8X37sQ6ZqiTXR5X3NhP1C4PQ75D5h16hDcJa3DqEQXfKa8BXzfQDvBnJwJAG3tR",
  "key32": "5rMZ8PsCAaETMnMqS3fbXMh9unuacEnjYucozB8NSRbN1pTfpdtBoJGTALWsCvao6knoUcNtCnLDZpy6eooc18vS",
  "key33": "5DmNLb96MrrCzKjRzG8HqZeooCbS2iNhJGVf9rKB8pT3mU5zQSBrJkr3c86KjFLzr9z6ATrmnACZn7xma2Gm5k2g"
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
