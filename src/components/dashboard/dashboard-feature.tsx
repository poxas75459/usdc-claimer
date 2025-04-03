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
    "9hqZsJPotwYaRLL1JghgwTXRrQb1EDmrC18PVvgYudp374PHFXKGKrb1xo9W69QMg3ek1EM5zucnAbVMdt34UQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4enT1teZXNBdvC5XZ1zDTq4HUoJdHgFWSvWx3tLrnqHMLbkWkmbtgFLRUfBgppuxcHSSC6xaZwgrmcHXNjMsfUga",
  "key1": "5wndABameyJjRg18oKWrn9QPzhPwyz3XzM7dSDa1SSBJH5Y6JammyjAmG2djG4QQTuYpQGQcjSrHPvfFQCmPJCKp",
  "key2": "2uhs6cRwC1PY54xXteQwa6aLbhfW2jYaGqM2ir1v95yGVT2rSZ9k2L6mGSThgmUbUVd6AR1P6PEvfhAUh29Az7P4",
  "key3": "5wqqFMptzk5cYjwNhU2JcX369JrcK4ZYg7AnoZYsPP1f98EKx4rvKvordz1QFDzmhHpeMXSh73nATGtVguRw9jML",
  "key4": "ukWyxwzoVVGaZms2bDTw6uEZEcUUjfjGjTQmbVD4u6kN7q9f4GwUpUhZqG45vdnZRoHywy2ixFney3oupPXEmf9",
  "key5": "52W3jv1imAssYSgCWRcCmrRQUnpPN2Wx1auMGDgJ9kRYVU2xJw8goQdyMVUGTb9jCwTM7tA1fzUME4S5UrUSAcPQ",
  "key6": "4oksAAsrqwoEbtqPuoCZFdkE6LafGdwLfwuoTXjpXPF9MdTcihPzmfDdMFXLYKdAJTYbq5xGi7bLa4T9QJxt255L",
  "key7": "3k3Lu2snnn1Hx66eftayVZ6iaywHHBvrvGXDFgWRZZS6DaFUtYRNSE1Fnw1rfABeA5Fr8vJVmTL43pt8QXDWybrY",
  "key8": "2p7G782L76wWRnngXtcnKETAW1RYxiXVoSCZiSkwETSjoJsMhQ8Hj5aZ4278GmCsKCXyqb9pXFo13MCRQhwqinu6",
  "key9": "3iEBmAy26LfzbCc11NAqX1c43VmjNztneo34fSVnFvLQpQgqgSejH7N6U39u6D7V85d9DE6FS4xMi1twcMP8Ehev",
  "key10": "3anVvfGynNjSQuQKbHW3GVh8vrUBGt1qceNXm29u4VYEEyFBS9j92UuoqM6MmjFT5AniUBkd3R4WnSq4XL9Ju6iy",
  "key11": "64TdvdzQpantfeehLzeMtZqQkijEx2g6PhPJRLDnPHbBbPmxWFmWrCkKhaeA4qji6x6Lou8xCFv9Z419Nw9ZUxUb",
  "key12": "3EDszPCwccvzE9Nc8EsbyrZUr4dUxzyZoEyZAGUnPTwkck3GKxscVf9C9d7tB4Lerb6mwv1BxWYH7goB9G4T4Gf5",
  "key13": "31W2Vf5m6CYaX51dFB8B79gRp5jaewjDBnurdkLS9ss5J5rzUewfS1S85T3XuqiVg1CQGtvJYqb9apYaoakj8uAk",
  "key14": "5VaETJ4ZjsZguEcetZxd8CvYoEUGWZmZopV18vwQuLgPSnKY9jHkWYFiG8Zc7tT2fvgNuSLQDTNadLaRDJaBrffs",
  "key15": "2WHzHnbnjoGrDytJF8GrvMGh7cpGMNM7CqscEkiXpYKFa1uDRxG8nJUqrGEWFE9RdZofzv265brqWZcadgMLGGH2",
  "key16": "2sgvc4i7xmQcYqBXqhqwTTkX3tLQhHoyjZa13yC7aucMt2qs9sEfZHcew2HEWmsLkwU7FBBuvaKEhtwETRYiGNDA",
  "key17": "3TYoMKr8Y9Ld5DzWjDM3kmpVZ947DYPjdRxUHfiphBXgAzwSnSxp1owQTYJ5gfjdn14xVoVu9uZhr4Udw9TzUWoL",
  "key18": "3zbL87NRKxVedhHMqtsKzDdvNwAvssY3AAWqVtbrHUYmDo6ACuLhESt9jq4Ge7MunRdvU6vnCmWj41v99xugRs9B",
  "key19": "2jnAUQ5wy7tubTne9FhsjS3Ci6Lgy9kbZaXodY5mdawVHjbdi8Yc9oX96BnpvEpye6eETSz14hxhwMxYod9VDz9K",
  "key20": "o6mUnD2DCfoSVLJUrDjGMsTU7z9VfiGu2PAh7PEW6GCWv4ki16dpXNxihXw69p67g2sgL9oimGK5WRxWnesRkWk",
  "key21": "rYYK4TiLycVug3gek4gmT3KWG77tkFuFcdq4cfDfCyshXwF84Bmcgsm85B5a1n5QsJ6gwZS4evCc8YvMfNNfcWh",
  "key22": "FZ6yvk58X7UMAmanYGZEpmgge9UX4PEyemHDfqeure6Ng8WgMFVcc4H87p2K5vocYGWk12HocV31bXXjQn1UJNU",
  "key23": "3ZsqUvBSDYraoWk49LW1qm61EBAsT6pgDebt1WpstYTwrchpnFMQdxREv5FSkzTxJMzWpkdKVMF4ptnvZv8Dy2pK",
  "key24": "34VTPeK4SHhMWzqa8wLL7qtX6E71veRSe1AXrL2DSLJjpTqEU7tuG16BJ14qSstRpbLMU4WvnnPJJTyLfVhBM1iw",
  "key25": "WhE8skVMEFL6XCK1bQtdo6P7utL253ye2udbzoGMsbGNM5Jpi5oezPYj7zTbk21QyyS3QQ1qRdzrB4HbJboeqjx",
  "key26": "2H8FWXqEoLHwEzhfsS7d64TbmA4rfeSaQX7rptbMhSThCuW9RWE3CzLqrgkHX2tvTA9VVP5iYCmu6SxHNZzJYfxx",
  "key27": "3PuT26bsvVD1oDRAhFYC2DZkZGWRfscvob1bxsFU35mVY8udEVNVtxy2oX5r24MTYorpWy8trnUEc8C6YZ9TBvdP",
  "key28": "2X9JDEsqfogo6Zab9STJXnTKz7EgcgpU2u8Vcq9qU2HcLZtek4SJhHu3jbZdT6yJRMnX2RndE7wbFZPR51fFvD96",
  "key29": "3QLCXThiob98cTQkhbfR9DKtgufnnQkbpg5Wn8AFfw13fv2WwxzQ7VeZWLGiJtK11pmRQzCvuhhrRfj98r6NZnKt",
  "key30": "2m2mfoWqdsriGWHMSxc8ygciqFoguQ93QyyuaZYGgo6vRTBRLETnT3nJBm44JtDWra4bRDjbGF2JRk7NrnmVYbfe",
  "key31": "3tjTUqruwVHZ4yv75ZqaZPfYJ2oRvsH5iZa82y6R7LCfqrJq2HDzspCF8Kar2ZiWEmvrdM91ME36e9n7FUdMfiXR",
  "key32": "tcfJfAAMzRmekLHPUMnUDHC79D3WtdyvQrmFao4JfhhTmzDgjQrChZh5FCb4Whu1qM1puLHwEdrowDvdDLTsW3W",
  "key33": "2aqDzPE8XyFh73s1nYyRkYZrWn68MFo3ri2eDJStd1n68HiELhjbkmAxyLUKujxCdHk9PJBuuuETtTL5xEM9mooH"
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
