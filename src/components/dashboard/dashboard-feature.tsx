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
    "66FS8sdMcKdGUKKogbJXnWzn1bbsoaKM1N5LNHdaunTVuLZNd6TpQkA9WicpmhgBUaJBN6kL9vnjo1mYpbb7uNZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CMYv8bEZUsL2MnUVwTwFG23ZwqUqkkZP5L3HpWP2rUw5T9fc5xa6iDnLrEXWgtLneJMJDUY4fqwuTktUVx5PsL",
  "key1": "2rwrknRezDQL8i5wMUKBnka5dTjKa18SfqPhVLEmz5RcvfuPQ92fiGkZqb8WiyLy4qDVZt2aa6ftZXMsg9eML2qd",
  "key2": "5LpuZs2vf7tcAw3D66YBhfg9atR1CaprWxUSX5w6Y8EZb14twtvSf8WkyTHDAVvEoMLoneAfQkHq8daeS5YEcCVD",
  "key3": "5p3zY56tKcZWbc5PoGdy397GnmvyvqSCEyhXkRDtgZD35aLVf3eJhhvovpdbTnuzRUuUSQLYrF5hwvm2c1W3Mpeo",
  "key4": "5AtUFt16virbJvFcySDnvzsNVjMmj1M7K4KCMDmRZ6uvSoNHjSERfy9R8HmSSDeE9QiuXFV6ar9kbw5Rktr9LZSk",
  "key5": "2r2L4djhSYpdQHbNMuG3PCruzpRs1e6phK8U4GWPyQNoQWLk4Wvy2o9iXkHDFwtoPVTKra4HnJUDwzN3VdF6nxRc",
  "key6": "2vBDAVXddXVofBs8uHK6LKjwHreU9EyA4bhWGH6Aam1gKLFYqWVmKDcNVwv8siFW2EWLdcQScKKC5vFDJom7bPhi",
  "key7": "2MnctCxi1Xfx5wbvqig436oB4mVBgXzPZr6nRRyTSiCiXtt2wuzqYfi1MiApVF77GNDCuqtsX7CYJv637zEXTQdz",
  "key8": "21bRe4XKj8diYiK4vhCvf9vZmjn7i1Mhh9bduytJmSUynLMe5j2UWytaHDXphgYzVdRSU2rN6Cfs8VSD55sZ568x",
  "key9": "2qnpV1V2o6keajtsVt7nPWcKkCzwnPsmL8rsxkYHW8GcXXk41wzWHtGa5e5tYuQiiPBfJVWLP7Zfe4VhXMvY1rZa",
  "key10": "we7RVLcjbckeWwMUMwTZVo69aZdtYD6qffBTCVgZGzUL77LdYcuEjdV2zbMBy8iEydhFCpM2WGbLpTd5PsaSFfT",
  "key11": "R1q33SFDgqAaYYWiT3Ph8KLKJAMVZndbGYeA1WbV78ooG6UzZdsjobZNWbWYqok94Yfewpb5ZupdeLphBbTyYP9",
  "key12": "3GaJQ51SMG81uRw72iSM3Uu2Zn5B8ybBbeyuD5gUGuX1ZoWW4uBVjDrFyJ32wJjCWNXmHPCBNEmLLEa5hgJsP8hf",
  "key13": "56xcfTrZAgAuv3pLjHDttrKPdKqKTiySLLckY2szJ1QXbTotXUZP8pXZYXqZpHQQLCUfTKDhVL5ub6MUMohmhKAc",
  "key14": "2qpxsKsGKoGZqs8xhSpWRpkNrRNP3md87JNsmcATuxrJscE6xbZZhpiJxJUUiSUXdNYamQ2RifAdqQfiQVbm3USu",
  "key15": "3c8JPxnMXsXzGe3yP6rxq8QpBbsfypoGN9FUtf6QmdhmLoZd3hyddFAA8hK1kfVHpfpdCaKb8phcSjd4vXxErrrw",
  "key16": "VDq1RDQ2BhWFGpxUbztNsLFFtTaxP4efLZY15B2RYVwL4tyu7Kz7w8ddpDw8udGoYE7jGXeTTwRk6NghxfX3919",
  "key17": "4UULNHDL9dMZoX9Wey3PQFu8dhZvpUr1HCjRh8b4y9CrdPLcRw8ozVZV4RwCghf4hZQ7JUu4vzTFMjH2FZ2eePeU",
  "key18": "EwyfTDzgP6ED9J19wEbVMi8nCVFahcgdVqnK7fWfsyioUGgJdrKrV545F5Z1LPLvu2msGBjnswERVUCsGxgrZWT",
  "key19": "2hR1WmB7GdVcZB4MC1XDGm3J69EKFZuiDjCoNoDFU6zWhMQajUD8jkxvk6EwodR2WnfTizxWwpamE9kWVsJ5pMMi",
  "key20": "4AhWtBXaatYYCvtjMt25Cd34pMecEoJd75w9dVM5R4vm2qh6TRaiQrVjUGrUFp7RoH2noYkzofJDsr2ebCRqrDB6",
  "key21": "YmAP2WJ5bhfZHPn759LwPquTwg2jVeXo2qRWxk2ZSgKU17voMEsYfcteDaSeRaBCwh7GTpVN9JQgYMwMxKgfd8w",
  "key22": "2c1tdSkXyyDFxoG86seQ728YyTV7nvanX3x4QY4eNnNPxRK4puKfThuXBt63hRz324fE9qpiPgdavSFEcy49ooho",
  "key23": "5WkbvHHfcYQ9zFuVfD4UQ3WfhpT6beMHfER1gdfii2Fg4cxinCQ9WPp2iZTKyPqxcCS1usNN7ZxEsVMBGCzoiNtt",
  "key24": "3drZ9yVztDfcdveq8EJHfSUxAx7X7oC7Q32sY5KaGdY6Skn2YyY1GBfb2GtcakqwYR8fezXrtgasErhLjae577Wa",
  "key25": "3eafZtZMPneaGDnmu8363wC4E7T3UGpuaqN98fMn8r1GayoACutFMiSW9UTayZTBZKrzaW5hSafpJ19KJ3JVGRSS",
  "key26": "61aW5jECh9phdhsob9UfTqf5hx5RiGg8TX6F58DQqakqgJCKq2oCAAUYhmrwxrzSiP41qgHnQXZbsBho9q391QiD",
  "key27": "2oqnLcPxXPV1vWrLAadeTkQN3cfte2hgjBoceVkMpQm33ZZDzAjkGwP4y8UameGguMtAaa7MKVRvVsRFM1FGsQvD",
  "key28": "8dmXLfXKwUegz7mpFh5e3st7kvYRC3J63MJFufx32RpekjY3fZAPNgVTJnDqwQVeQDrvt7YHFTUAvXd2NDNK4JA",
  "key29": "33xN2PxpXD5NkYKYDE4wLbdYA5mr7g88jaxtaYY9u3kq5eJaPDQ9fHEELtW4Gg4Jz51m8GJzuh6ttwZwMFKf5t9x"
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
