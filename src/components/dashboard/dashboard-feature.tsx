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
    "2wLwtCeUkWLj19TdFeZeuLGXjHjkDSFAVqaGSRgjcaM1E9kiGXNoUxPxPa1LkCW72mY4rip9pATFoTMfNtapQPZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "njAhP2VBx7h5Gb664Wzzk9N4JNSPNgrmGczZJgEJrapUEHY5u7qNtnqDtJmFpf21HXfvTMXQ5nEEV7qBhzYxjoX",
  "key1": "2x7xs1X2ncUWNSvVXrAoaXQwTveoaiitB6fN5RgLtyWUAHC1ZirYLjdNHdfGWWyvZqVxEEK3RXAfd7PJ1FtKj3Zd",
  "key2": "4XJa1GuTAaSGYQF7dJGn6YmoTzXoArtGcgspZLuGZGdALaa6uBugXYr9nLtVeLYg4fdMVZjk1XBYEns5KEbcDAPV",
  "key3": "36TQiuLeBwEbwHEjGd4aXinpToi6Gwx8rSHCvEUDuAf6Gv7AHXMuKUWp6qcxtA2dzcZ1PGKg4a4AH74kkcFZCHi1",
  "key4": "3NEEB5gNiXsFSD6sbFrCART968foAXuKzYg35BBUTgQoPLyC9wqS6X4a3twUcbsozMVyHwDaEgCR8aAzWjdkuBTB",
  "key5": "2thUJsbxm9CuUdMTRh7iwGMBWeP8vhqL91y91RFTu2PqQ4P5KXg3zyhUXQ3LXj9gx4mriBVY1qcNJqAv2BjoBV7R",
  "key6": "2wZetem3N7xj5rMddJFv5o89PJNPSh6mwnqRvVB6tD47fyJpWCuyUggWGqe2AtN2z3AkE45EWqBCDjNX7q2V4EuX",
  "key7": "4nj8NDBQtLRZMVDSm13NkTeFAqwCotwW3yTu3kRK2aZxFEa7dse4cwkYAHw6EF8KpykNTgtUe54rHre2PgYJR5ad",
  "key8": "5oG3r6DYSgEmuK9xozJkYJTp7mA9ETgbTpKCfWEe1Mzj8R8dNJPEBCKz3VQh2vARVNTCXF1ZJBE731rocf324YDp",
  "key9": "21ReoiXhMAhUVACCwM2AfmCHcDpfVgt6aj7RKP2rWnPWkwmwcf6QLrTjZGYCt75qpzuLh4BzkMZFi253WjfrMUSA",
  "key10": "cEqCUnLZr1gwx2U3wHVG8iiY2bYrssdk2jz4Fx7CExLXwaBVFp5xC4RCmsiHD3u54TzPmVn654zGBhtGiwDn8JU",
  "key11": "57vGppGscownNV5QJANEz4SL5E39YTmXnFr9qeDA2NTyh8Zw9UUtnCU6acia593iGBf3SJWPrGo8xD4yafmYLWKk",
  "key12": "2x4rQ5WjR6kcPs1zCwm49Arwc8zaJXz5v5VXdr99fNTHuctGgewZrAZC5dSWf5XoQyq3h3WZUT3xYyxeWjdK73Lx",
  "key13": "3mbUZk1fR8YwLa8x59BmoYLtcnaJf2TaLLeEAdzwv2Qiin55JhCnyRkySvUtYDa4uBTBoz6HekvHXTqQXCqMB4NU",
  "key14": "3iqxhANG3iFf6VYKF5QfWaq6krRpYkbQ7js2agx2B1R6Fiq62wPFz9uBXY9AxB33dRmJmsiXqfG8AniDpVfMaJKx",
  "key15": "5b9FPFnuvY6RnfcCZyvqNPGTpFYX7Cm4ENvjWqw7JiWA5yVuhA8929r7qYkDP1fEgcMtRYzYMoRJCDShXbuJ2CSW",
  "key16": "g3xAL5t5rvHD8y9o2sLgqZbLmk9PYrgtFU1zZuTRYRa4X4h68uiGSYbTde6Lb3WpnDATC6hNxQvh3ZWkQB5G3fa",
  "key17": "57VJsjYHFDXoPGsSnYtKk3CxJ6pmXfppgzST95r4UzBqq2Q8dmakqYJiTdmQmkp6Kh9js6HMdnxJawXws8araEk3",
  "key18": "6ihpNBrGCHL8hzr8E24B24LupFGJ7WEJDNiVrANV7tdJtANPZkHcgws8vj15Y4u4wPdaHRZoGEzLao5Ncut57SN",
  "key19": "3QCih36JquGjCP9389weJtJGMa6U1rGgLeupN1gyDPYb6a8izAbApo99NhxwwF4adfbUhibf7DfJbg7b25Hi9G4p",
  "key20": "46EmKURdaXQhRk2Td5UbjcehA6x7i9Mpu37uAZHAz9eLLvqQ61tMXqbmNs91Rsw2LWLjiYZyc4Yx58SwyE1TC6Rm",
  "key21": "Ef5DnXg9JSe4Sd6W91rhwetzSAwv1FN3q64pN9ieQAgrTC88BSD76NcVKbMUqmY6823rJvyoBeJg1HBAdCWXCnd",
  "key22": "5VPBjKp3qHjEijAQWARs1oBsk9WcJCJaxdScSJ1gf8ukhoETnxQNFr9mP5bUvvTf6hUhe5EHZnyaAYmN3ffY6XNV",
  "key23": "422Db1gGVMD6ynenHuAJ2UA7MKkoHG5DVQ6gepiWEb5GZSTxttbn1s2noPq8xAPBUqvpkE7tWKf2N6MczsRBRiwd",
  "key24": "38jkk4y4xtHWtRJagGZhTkcLCnaajSkMHfzNYqpxhCAcSKmwGQyHVJ2cjQdsasZEUcVVe6aNeNBKJBU6p5XfWRVX",
  "key25": "5CoCHC5QAnegkG8cdi9wGQxRFMExZ8WbWYqkRnh7DFAReEZjRs2k4UgcgC3akPuKXFCoQgrncJkUGdHEmC5ma7NG",
  "key26": "64UCPnntWbANoqEghnDqsUqYpXBtyusLokBtCi7mVAJe1kB8SXhujV2b3fTRcxM4veLsTK27U1VRgEYkMED6r8gK",
  "key27": "3rypX1owcXY4PtXAcPt6Q3EreGu5pWh2vhHnbLyULXQZnAs5CoVpX6NHNgz5MEEf5rUmQgZ739uzfFQkZ1yHErYP",
  "key28": "2zBGyKbDnqywEM1DjsXjgi5MCwEmPVHPrnQBR6GATaHuMnfLyrT1cZ21dRruwKHwnkNhNEKmK1GwDqKXkVBCQNp",
  "key29": "5QaEikvekXzFLYoXiBJURrddL7einHsS8ym8rsZigx63BmWuQvhoWyoiE71VDst7z8DExYLWLyf7mwAxjrmALWv8",
  "key30": "3Z3fAxhDQw6vwJvtrcgYkR8dJQwW8mzbKbyw3pqeTauJASc2AnhZ6MGXTwUycPmTAovqErFoRktkBMKTF3wL5oDy",
  "key31": "2NXSMfczo2U28WRaDrckgqZJKeGRZuucWx7E6yNQsCAW26yTyj7fLTsWz9Ep2LpQFYohpyT9r3Y8T5kMGKzaT9hG",
  "key32": "5dupHofdwmzXrdmTH5bccabbwDrWxus4N7S8U8aMq8ayQWUGLDB5UaVADSC8WLD7jHnKggneMhghpfDohgD4onzf",
  "key33": "4bENnQSWnmmX5JL7DwBgoigVm825tCCm7TtrrxegfBAbiRjncDrpV6kZnHxkYgHAJq42xrCS3JPVZCCTqK9fwcN6",
  "key34": "4dA6fSR4H3Dc3NMc8sZgowi7LG3EBVcfVuggVeXnWpyu3WpWaSb1wKyvbwTAhghGFwCGYqnmsqrEHLcCxH2nm3vX",
  "key35": "5MsYSk1ymYU3fYGDPx4V924Do3WXdxL5NzpJdGHquJWJeMji1NTcx2pVqATCg3x4gk4zvBPgUfJ9b77gfdCAVoUk"
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
