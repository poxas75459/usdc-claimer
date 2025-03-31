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
    "3Gz1q44axhLZZSwJBHznqtQTXg3ab1Jv8dYjdx77rSbDLm3EiSCjgoUXVe2CwR5cxzugZMGiGB55n2GqE7K15iBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pw9yUG6RJkYp9EpDn5LUtKVjbmVXTWF32vyB1PZ5TJfqjdw9LC52Qtfkmf1ajDLkRaUs1jXh1FYKXJx6M4s69Lb",
  "key1": "35mweCaWbyVrBJA3i1pCQWvA6kwfGK92e37EZs9yiu8L854Yxrxv3VpBFZFMZRZJNdS4a4q96Pcc9tTxAhxELP79",
  "key2": "5Uzn4a9oW36nacGRx87JdjXNNLqrb5Mj3VMgNtyesB8B8RW52PUgtFcND6ABNL4gjLKdSH2qSesjynNhFoCgbTEE",
  "key3": "2StSwNZb3UxsT74F7Bw2MuVbw8erQyemgYoCy8e7Cd5fcXw4W24KcskAYhRWoj8vuB3NFtv4oQrLJAAEwqJfxsVX",
  "key4": "2ZQwp7rwEkrmxfwEknWgfWFWp6uKG3z7WDL7L55yxeNjwhyJGa5LYpd78PgpSf78jUTHTGm7jWk3mkP8d9UbBw7x",
  "key5": "4PXVww8w5uxY4mrc28MmJMLCTzjKpCW4tQeAnTPYTcLwzTHoKL3qxaf7C5tJvG66uZtecRbn5tb67ACAT14zNAEC",
  "key6": "iHW2ZACkSCEVpjcDbQUkgfBB2XKiawgQaWcUo6mNL6zFs2JJ7wp6BRWZ4XxAGVs3tn7NmiYez4zc9CYMvsBkgXJ",
  "key7": "3LsVCXx2R9zTqsSx7NbpsuDg2TLyNKT4NRn3HJ9q9UxQJqqJwhaQDBdQn26wKbV6nkTycy2PP277u1qX9hRioruf",
  "key8": "3L18FMYJfH4nKEPWoaw5tvrLk1Xuv8nTFmqWGFKw1odnw6Mim8C8hPauh9krWQpJ342dvw7GL8VxKKjPSth1oyV2",
  "key9": "5zznM9z7jKwbXRXHtYWqPQTr7a3STXykFatzVNu6EKdCvBMA2UCRF2eG3LJuV4uAXbYY333tuDZPWESZnWGN6Xug",
  "key10": "ExFKEk8V271RaW7inYxNmxJ6i52hCVJJ9ddXHLpAURqWoUQDTxNmCCUhHDadnaF66neUMb5ghSfNLLtr2zXUz9j",
  "key11": "3VtvJevoeDNSHv5yBpDKAcXui8U74zWyW4N3NCSBo2ja5Fn5eSJPDNyNT41XMtjSPk196wcVBHQQKR9LZiAFUJqh",
  "key12": "3p476ZZeyv5WwUzaBuQVMrhqXMthj3Vu2DBxg6XEeoHdAZPArzUwXX3iGHcXKPZ6xKux1Wbobxh7s4XFCPgCUP2X",
  "key13": "4JxHa8CLHKsqBEaqjQk8kkuMSGdsRZ4ehkt6sS1uTV37b6BUXfkRsTcwoEMofYKydg4W69Lcgs5LD4KkGCHAebPz",
  "key14": "5nRUvj9TN4m5swX9Et1DxyvuchyoVKgn8Yut5LHZX9N8QgZTL8a83hGwav7o4tJUAoFMEFf9fCdse4tBS9YhXZyi",
  "key15": "521CSJtJowSA92TwBSTUEipiihAHaC8WGKYJQDCKpmu6x3EpTVqDwKMep8dHLXRx9HqU7yKmBWWc47NaMEy4pY7x",
  "key16": "PdzRRY4ojFk6di4E59E8G3AnXreiWpix7yadCMX4inUtLJop3y2aQGDZoTjC2erRSoPFjM433bvnGHs2VcPvEva",
  "key17": "AQ6Pj9ia2cCUiR6eL6RGWVzGqqkqezAY7P27CK4GETQWs2ZhXPSFRc1ZGmcx3MaKQoLGDBJT3dmyx8SeafEBaMz",
  "key18": "GbBvBEpFXcUhJkTAT9DzmN77aaxxq3V266CgsHf4zHXmyH255BpMpNdcpFduDsxdMCS4G2Vxy2yFRaLSt9d9qJ7",
  "key19": "48X8jzepA8KtyfrYu7GW9LzMRJCiJvpEmHWwAbjBEQb1vWpF78xdS5gnULA5eb62aZY2miMwhf4Xx7oVMGhHujNi",
  "key20": "29z63Y8siRw3MzsETsbTtw3BmzM4b9eH6gjBCawghprY52Hmg82K7n2Q7y3Bce5mr3qPEQgc4bdmp8zv6FjKyYh7",
  "key21": "4LhxiKussbf4Mjo37xMPa5RkMeshhVR6NHV9fHbG1hCY9ygp3wvMG9JHCmhN3sbES6GpNcvtf8qVoGMZWZqWUB6",
  "key22": "3YW233n15PkQLqwGzViV1igMwijz4wYbtH9sR2tW7a21WWU3REATuuvB7QPofED5L2CK7UFf7BehB9UJ3a3eDD8F",
  "key23": "2KGPb5iBpXcKNtxwpdpL6dxT2mxKsUEwn6cXFwr8soJMnSbVBGVTGehneFbB6QiSZcnUUJkkQh8JnB8f1R5izbe8",
  "key24": "61ZBeKTYCWTZjQKvyaAwcwMhfeYtH49wnnkvcTHFdquiQs56Q83gE5Ad7UmBRDUr8cJ6i5vUuoxwbJrMZBhor7oN",
  "key25": "2mCURyanDV1vwiPdx7NkF6XpmA3u7ktBjAvn2JwmRBmgfgLYwgD7Vn3q8Djth4KeKMvTEiMo2YTPP3eQnFT3sBAH",
  "key26": "5jM4LcUsHkV6HQEdBbftydg141sonyV53r734QeVs7YGeTQKg5x86Mz7LdeoWvRWr8PjPp5ppKFGxwuNgjvsRP6x",
  "key27": "4zvWck4gLsTWUEs2R5fojh32DBj4HM5hTE7o2BJqQhhJ55kBtJWwiQTz8MTYTKLzkAF2dvF3nQvFfK5AxjkxHpMK",
  "key28": "3sdMhBXXK5P4pisxFb1KEEjcUAEcqYxS3GGRVyNQiET2yES4odSHwhdRsEu2gHhneoF8yJkJbkEj8kw9dbWzLgrX",
  "key29": "dFCZUmuUnBwdh9mDptLuPum6hqrpdGihmsBsBhQdYERH3HWhdKcMkod2BTLSeP2dmAB2eiu7ftuR1bynmaUowQE",
  "key30": "z3uSeUTqCmvGg1Kzu181enZaXwF1E9gL9QfKmruZDSNcPrbMH3em3iYsXZquDt77GZwroBeBRt95Akzf2GWsRDj",
  "key31": "2GZvjeq9mmRHqi6VduoGKz4xrG3Y2V1wyMFn9swHDJr38RKitVuBg7DDs3gJ25VV972JZjTNTCBFShG7bWQGwycw",
  "key32": "2htGC1sLMqkB7NTZWvAEfE1jDQBhuVND2Fv2tqkDK9rZt4Y51ZFpLNAWfVD6pxtv4N3BLxxnqTfUjMnp4zhZ9sXa",
  "key33": "tZduLL3B62GGiqiXbxKGaPc8igq6WHrJj8RZ9nUaDUnXzjNr2c1KFfV2X4QCSSZwGitsq7stV2vz6oCD8YANYSe",
  "key34": "28ktKx3hAuzsN5FGK4BfYnY5X4jVSWf5JBzWgLb3eWteC6iMhixLZnNA4BDjDwnjqS9MJDpcS8i472iFeEtcEy3G",
  "key35": "5eba3beXm5FNqecXsf541hAaHH5FtUgsFxdJUkiEHHFt1C9eR2CtfzGh7o2T2ocxDWjkfH64XKmcwFZ4dVQF9bmz",
  "key36": "44jyfQLLmhQFcemjJjnPJYpioJnPsiDbnL3NuTFQmVMQrKGd24RhB7xvXYd9c3ZUAopgDnfnawgy2SBx9gkusuW6",
  "key37": "4MtYoAr2Yo3xYC8pL2N8LMkhd5i23JX4wdXGEcUTVJE3RPhob3n3qrof78LyznyBhiwnuWJVS3pBiuyg3Hw5pCAE",
  "key38": "3vtDj4msZrXgzZknkPxdJoEKAKwnYrfrvJEWmPjvwxjXJCabZGazaBJywTgfe8HERqVZnuo94D3aZfftdFYDMReG",
  "key39": "4WzMnHP4aqW6cQbuo2vuAsy5aYEfddeiEaPgiab48iuHEwg8VqQqn876QCbBETGpbjyKmr5w3CP67JyHsKKfSwe4"
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
