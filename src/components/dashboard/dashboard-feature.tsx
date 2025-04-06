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
    "4fZNbkqzVD2HUJnYbMw7ev75LhpJ1uLYVA7TFL7mLkt3hqbVDhQ113Z6JcXXWAeg4EafZGcW1QUzUaysQWDYrkyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k1rbZKi7xcxzriKiLTjssqJqGoTEhYbqDqirFZDp3hh5QsL6SuQ6jT6868e4fecxcAQDwkJUvscr5Vh6dcBZ3uF",
  "key1": "3AXo4C7S44FTp5bPiGF5ApymABEbi3p3wdduz92N3AYeEmu5sv8dD2AmsSYLccQbtYQ5hrUoF8Ek6syoboja5yh9",
  "key2": "32rcysWzdofUX9i9KLmiZYQpWRMMXCo6A43b4DYzBgeuxJmfA64bqYY3pVHMD1kRDDe2BteyV3FdztCWTYkdUK5F",
  "key3": "3wFEtVEjvvLPh5SP9A4wj9gzJHYrc6pkEAYHxE6g7tY81KknwRc6456ipFU76U5QWcA2wwjHFsmUGCzJMHwEdaqg",
  "key4": "33Q7gNUZN7jnFQuxCKDki9Pa5fWPABaUtZiH1ibURwWeoHXZsieBquG31QLZwtu8sZ8GfiCMaVbnd75ZuTYuJ4Uq",
  "key5": "qUBbGfpVLhe7vJonAypNfk5cdoFoA229yMq1BMtzc9RTqFqULwD3skt98EK5XgCUVhsooeSYHqji6BX4xSoMBJc",
  "key6": "5sZTo9VkgEMhpsih1HpmKpw2DaTXvxf45LTWGXLHGw65yGAnFP3YYUATUVroV15mEc7q6bWpiaoZSMYdnUr3Hb9f",
  "key7": "3LvEfqnpDtdDXtaLYdpoMDkyXmvJVYzzU8M1usZwWDAEgd1cvKcajmB4QdaNCfQW5Mdk7r1QcK4gPcj16GvveiMz",
  "key8": "3zc1Jc67kCpVf1Zk9zXga8cWFuLK9qiQCdNMA7j1csgVAHNnbbBz7HsbpkKWRFnghhS9EHoFahJZ8xDno7scaJ9x",
  "key9": "mC2nvwunvfjsakVDvSvLPJeLh6XkJohaAHVn5piPsEXj1psPsNBkmraVb8wzwsppBgWGX4xe7BjtSNdFjVZrckH",
  "key10": "wpVw1cr9eJf51iU7tFi2RnHAaZHD6s35WbdaqWxCZXrDr4U8cRjRCRyxvyvEHTkGu8Qyqkr8WJwmxA6K8owtwHT",
  "key11": "bcwmunXXX1ndobB18Yr438AJkEjNj7838aSAdmjAAzVSUqbP2h3gdEm272MM68R3dThurfJS9nH7TTZ9QrtdiRh",
  "key12": "3ZRdz61Nnf3SUkZR4rLGqv2SCQvZZw2QF4bguCsxHDP1kJcngHvbzGsGLiDdRdsUBFKTS1c2ASm2QdAUAjsvnjdS",
  "key13": "2mqhuYC2vbHUBUJ8HNsZKTjsXDmiGBKhxe99QfE19vwgUTv3ao17ajqhPz758fXwHGqfwxR4n2YDxwRURiVRzR1G",
  "key14": "31Fhp2EqxbfxstP8h5XVcFrXGzkSgvv7U5RVddCkY2aUL3vqB1inusjQSWs9UL3cb8qLgRSrNkocCc3ExpVb5zmb",
  "key15": "DBgrigVNP7rNF3Y2HdQJMacxUGwyvqMGAZy56SPW8x4GSkyvL5KqKzRPVS8sBWwtqtUKZVSXJmuYD2GJgkKvA6s",
  "key16": "7hExPSd5gDVmd4SAe1cZSFnWxyXUB6cZ6Nvtr4AbStyHN3MZyrnvCbXLSgSLHuHAmT6iSzrqYpz5dnYYEXzGNWE",
  "key17": "3Md8F8AnsZmyZ28RbJane8GKG9Ff1odbnuUiqEhA4bc5iv7FG2p4ihyzLBbdJPn6JsopcHSFpKZ9W33X98wnfzhr",
  "key18": "66FJgpJCfE5HsSt6q3e5n92gjpGrydhL6DMEnPaBhQTmgXZS64vCuoXDyXiiGn3aRb9aZipWfJSpXY8V9Fc8v2y1",
  "key19": "2tMD9jZqgUADUoo6QgKuG9P88Lmzqw6fHS5evTA2oc9Fd3R3KVh2of495MpGpVo4ViD8dbfRFkTxXzZjBNS3iqmq",
  "key20": "LW9bR7J9XGkk2vtUB57yFAL7A58UnBFLeEY2WKiPq2hXS2HQgqKgfMz5r4wp6ZGsEyGyMzzuBiRzKqXDVZSn5hV",
  "key21": "3MAUkLM45A515V2kT64ZpBcB6VgrnRhPqnBUtbq9FWMDHZmo1vxyUzyi22Kfq4dnxbeQjnaG8a7oH2GX34WLnDvb",
  "key22": "5GuyztWpJpawuDySCVzQ1eERGx2DNTx4fqbnUDrGLTha56KDU12fZJCM8DT7GkSqMzRFmqGkCJf5NUQpNC3DpFdF",
  "key23": "2wardTwCn34uF5DwoFYETP84eQnCdH2FX3fXitVDUj98uY1M35gY4N4vyKChP4rzfCiQdHP9sFco68VS7TjnNcba",
  "key24": "aXincwi35zW3a8W4pTTLCMw2arwTk5na66NDuk96VwtePkcpVx4969r4RvtjuBpJ7hTTahMmSEo6zQxyaXim8zc",
  "key25": "nxu8XMWdDU48nyniNuDuDjX7aNFBTPNY56zYn8ds85HcwQREBiUJmwxMmEjUyWygPuScCv6GKoTpr26FpWWp2zn",
  "key26": "5dDxy8bNrao6DJLU79JoH4XkCG5mNBETFJ7zA8cpqX9ekKM9if2DZDuiZp84skr7zr7EVeYLRxVvHzEkaewdi8FQ",
  "key27": "5vGMA2g5MuqM1yw4gESZPwpGuHn1yZbjpgaX7ftu1rV9zJ7qKhJekq8uELUMam1PLdv598Go9z6qrcPtEf4NVE2j",
  "key28": "4uBeB4xqWDu4K8ZVEqYt9WCmca6iSg5XkW5h5mEyrFJBZ2uVJhy1vgWLpP4Hj2BUDP7kVo9vABwmF2xx4njigBJd"
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
