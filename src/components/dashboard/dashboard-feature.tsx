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
    "2nQUAnKbH6rh7pvgKv5eMeHeMZ5F9jY4vAZxG1vdGEqqUXwhTQiPXBiLdxuSwugoEMt44wkkEg3XhfbMUgj6xu4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56qXqAq1mXP37Pkz4xjsMLMkaxsSepFFabWDk82cpBv7dab5vyFHrPX53fNvQ1KTXESwbjM1EBSzfuz1nx42gkMj",
  "key1": "2YUpRjLEHLwV7Cw4Btq1LTPUi7TGxTVgPKZ32kk6x2LZiqAPnM54Tj9cWkGyqRmnmog8pSYVgQLjxuRBYHKGZWKT",
  "key2": "5S5GaSfza1MBU2AjtKQRLSWBkCX148fA9mqUKEnLD2iXtvsvns7ezWAmGYv1k19KdNNDo5zmj7y2m5AUR7UJV7KR",
  "key3": "wiwAGn1j6UuFegoJ9pZ7To6QZt7qbnPXt3cFBs6JDfq9rtmwNdvAkmLxm3nmtmVyCFMdg4ZT8daFTVgYc9aqgXy",
  "key4": "28VCe66tE2yxUn1ta6scWK1STa3J6VrVNoWZGSPzr3tmY8WEqxxLA25qWoUfET4CEs3ZmBmmXWyLYG616RTgwJiq",
  "key5": "51Gca7o5ahcigb5Wq84eoitQaYxu1PWuZvEodHuE9pM2Sp1DccvzHabX5qRSALUjSEa5txK7BcfvdCct8iQ3U2ER",
  "key6": "3F9RgZETEfBFesnS6cHp4r8GStou3TcqbvgbJqJmus33ao4utQWbUh5qGLTomWAekuEYRGTZwtgpP1sivbCLyG3w",
  "key7": "5Ce1QgNn4hFe6dcvCfg1Q5Uo9JAs7p239eSGf8MiXFNhP8jH4V7Cd2iAgRCXxATuH4EHoHZSPScLmQfE7rRmqUQp",
  "key8": "3vGVX8tPfosaefmY6uQfmX2JaaGnNRkEWPJ6m6SQmt23vQXN9Fjrc5JfWRfu3hetdq68Bkfk7MbN1kDGtwyJRyT5",
  "key9": "48K3K6EDMyMmMKzYzLs3FhX4ohJvVEnYZoowJ96GPeersPzPS7yLWH7yeNx2rnr1QkfmhsSaVo1HUYYqV6J5Xoj",
  "key10": "5csiwrv8Ye721Cm2LEykYJmSE9Q6TLbzFRoVTdGebyPtmFx7gTxAM15w14mZiLoskYz8qCahGaWKYmbH9yekL5JT",
  "key11": "5bwZyW567teUZi3rg446n46XWDhh6PrXsYvu2JPoX5YnYPpTdj6aq2p1u5MCofWUDuQxACHR4eUxCbWNDpmJddKr",
  "key12": "3oNTxPpbpUkZS547XqAYED7RBnhkRxUd9Z5vgVDz8DQ7oZV5NcpTwBnZVtZXtyEaa8rrKBmGTf2Jkaq6vSYHGMkp",
  "key13": "dfiQG5AS4YVy1idWhx3BTDwW8XJ5eAkRy8MNb2AntQZ8Ykc82DksJ3ynwZyzATUFRevhKCW2TM5mQScwfvWmJDV",
  "key14": "3NbHBSnSfqK6PUs9pcpAh9qP2ezbMn7qgGeMeqb4upia1xspdGrDE11rwrCJTFJZ5V52R7cD1PbxaweAS1kr9P5N",
  "key15": "4WrnhpJoLjoMoJqzTuwMkqqg2E7coAMDRJJDJfqDn95AQgdqEnD8GDN1XE8rX7QPoXX9TXGpZdfssNWPBX1Kyr53",
  "key16": "3w9obAZmbiFXs2PAzcwTcHj4uTwZTeK5B9ZaqSK8x4HY5NiXrLQKThPVeDk8edAESgySZhmccV1TQYbmXCCdwwSB",
  "key17": "5UMkD33CTqtCYKDHgkDssKV5Y3m6r2oF81iwNsUisX2rUfvMxuwDM25r2ERiDkPQ9VP9XND5j9hV7ZWC3TcWK5LM",
  "key18": "5LNBLXz4GscdAdE1vRvknSw9CwdoLgLpESAtH6penmDNsp4JCnEXvzsTTDeRbpjxWoeG2vuBoPsA7kEf6RVSmrvh",
  "key19": "3DCEfEnMehKTeB259JBCs5hcJ1noxVP6sWi5LYifd4iYBbCrSP8L6Uu4QHkCzDQtLzhK9Uor9LADv6ah2BRKPmRJ",
  "key20": "5MepmYzDFqZFUjzRuyMYZCZMk1tzpWyuBdjfVhBx7kXqfE5mFooyFxcrhfajPHCKksyGS4tfzHMuAeBhTd8pgsDs",
  "key21": "58JqXkotKdbc1qBptstTu911C3AMF7zMtsFYRLbssnPCJzVbWATQ8xTJ6FNWwan2tBtPRY1KjZkDJVKJwiN5thb5",
  "key22": "4TxjN1D7aBsQVUeEn7bodmz3nhQpGuxHho44KtyVXKXQqjfcudXkdLmSZ5PBosmTGz72xmxCs9Wemm4qTCeW3UL8",
  "key23": "N3aaqqzAHMac2hvsop4W4LPJg8K8Lt2eriipLxJWabUTd61UpPH3DsUf88NxGwBstA7kRB5CRbNXoJoRMRpP8zi",
  "key24": "2dr2Zr6P8AnFZ8knBEyykZjeyrR9bNAiPKRc7A27xp9ERuD7GmLCdU9rTk2hcHoW72KyLXudrgwU9dQMxueMRw4A",
  "key25": "jJu6LGoEDhkXHvpZ6HWpJm71sxEKnkPBh53VMmLS3HayJHPiQbUeHL2J7HLAs4NpBWxhAJo8tkmedfQV82axM3h",
  "key26": "2fdde6h6QuPhNhzh5X7Ez1MzKZsA1eU1vjeAAVyqybjLYp8BunFaSJXnR2i9EhA2Tx1QgD4ENnjh3Da2qLR2Reec",
  "key27": "5bedj3jgmt9hBSGkN2dZ2UWYnLFR2kdUhxeE3nRmeo4DjpoX9Ugn5WNvNGZZfnppCk7b4mVp1cCkbrwL6KfQngEn",
  "key28": "2wS8rETkonkceTyePtWDGh5Zq6mYGDmi4SV4sKVdqVp4xbPDibLfweHhpotdwC3dGXT8L6jVg7zjRtUyQmsznJrh",
  "key29": "2oi92BNMJpzmxgP32gKcoPmKTVD2RDJVcq1K5SEuxtqjLpdSAUZn43zwWKiZ7Xg33NiGBAtmFddj5EtQRR4V51Jt",
  "key30": "iz1tuUb2nYd6Z3KKBbWfdVup2TxXbH8z2DsoA6Bh3GXm2aidLrzY3WhYYfPEPaTcLZj4vzQhT8o3Rc8roPzwu9K",
  "key31": "2rYZz7HgfHpMkiuHFxbmu3F1x54J4YN2hkVeL1ef2W4WuKTxrGZnhAvRvvtyTVdCrzBtKAjksDfjq7wesH4XRfXR",
  "key32": "3tJQx1FRgp6Vg8Mi7TW3RPM17iEwg3GuTsF3WgU9JRstrRS3xt2zCcj7fuKJBD2erq5PyVTjNzhEqxaicCBhWqvg",
  "key33": "DyAUsvwt1cSCvDFsFoX2hu16bS8Ccs9RBLtsZmX2Czek7A9qfciMjJH8kyd4iYx9odXAZAhRZsDTLLt1SjfQ1F7",
  "key34": "4BD2LrR33oHqUVcLcVg8j4VQRiaR4Ds1zx5Uat9DYWJ4FA2iMsxKQ3snR3npWyvDpSHtM2XMT7Boyj9ewQfeVVfE",
  "key35": "5333AZKi8sGzXRSe7VrNYXECd5iAhNU138cajckuhvDQekT8z6XBEFqybeZP35YbBY6PhyE8FMLUwX5bUUzRi3ED"
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
