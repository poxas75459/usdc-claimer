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
    "24xx4yWKmraWVjHsF3Y1rtP5MrPdRaAPemLraAKk8XuogRH7AgfekYEQPhAM51ZrohnTar2mq7UJuEQQuMeygLpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eKjzbakqbgEZn1XkeVS4mwQnbT1ZwiBDbX3uQf1mSvSPXDe4bGFhgkydirCCT1bbpxvdEMbcnBscYb5PsauMsoN",
  "key1": "2qJw5LDV29M121Ni6JmcmYmnkAgpGUSwja8AvQxPArznjBPkbEfkHbWYJ69zsPmtmjZNHHTaZs5vLoJJb6ib6PXA",
  "key2": "3v5NhdVmBjgGkfQDzX5YQjr8RtPY1zenNhnHhMQdbuyAnqBK42FFuoSak87tPTCWsntdBS23vqzTNcLUBkxDj4CL",
  "key3": "5AYudsSG1NTccAFp7xXsuuSbmXNiQhYYzkDkLMH2jDm68q3WK6nv5XTFWGMPQ2rER8HMY2SyHzKbw7oJgYspyQ4Y",
  "key4": "57A1NqUYdrFDRVkB4Zir2HcK47Jq4uxfvqTiDwKxFEXdWkkHtJS4WGtta7Bqi9JugEa5kJpXabQCctvvYhdy8qSa",
  "key5": "3PUTvHHvuNFpy7DcTSnGw6DF3SN9vZiwq1jbdRsGDm2QXzhnWJu4EeuG8gnKnB47VY2rEkFecAG5yzpUbasAXKKa",
  "key6": "5CSSZXX9bPjK2NzEnuLt9k2KwGqc12RWR6PAvR47mGntLu2bHaDNMu78hTGw7Mh2vsvMjHuC2QXSkvctakRXAx91",
  "key7": "3ujkH8XuYrfDifLFF7KWoakr3GXU3DVmNN95QLPRK5yXWqthDaGvEHgUjine7RScuXNj3aTR1R2DxnMnFQkvGxkE",
  "key8": "5TG9EJwvD7D4uH9LKsPD1Uwk121Tf94Ta1gusQvRFdeo26yVkz2k8H43YKqFA4KWUzr6HJSFXzgzYMBe4WcfbTiw",
  "key9": "4sWomhYqCKTPSNSQ7dp8HAA2PKpzJTvwNYNyWKFzN3XML9sAeYtSSzWUGqib3Dyvgkd8ExiBcRQbv6NhAN83EkVa",
  "key10": "2e36UQUP63qveWUYVRuUnAVJVj18e6epKjqYEVVPFJVW4mQYrv35mAa4q5pPRvxmWXCvZgszMrzRg5HJFC4tBpdU",
  "key11": "4JZfz9cK2pwNsEDwUr11DTkt99z8nYBgED7KFpBC4oRQgbAUsJ43uL7zcEo7TL6brJD5FQHcPCTei919D6ys7jxq",
  "key12": "U2CpXxQZ9rLM1fBenZU7GLUdxC5ekBitPd8smvtiqSrdszQhf79nMaua22xG3VbbfKxmMBwRSDCdmaynh9G9s7k",
  "key13": "ioyUDEzJasBvj7uLubydGzMofvJ4eY5iiWmW4qNiVZqQvYjVurTfntynfzzFn13jhu4njcgAcAsguQHx4iKAvN9",
  "key14": "xQBoxjEkDjUmusXhY5fqmk9x74pYnRAbNvjcDbv3xBao4Uk7xaaBzVsCEHR7Pmgp9uW5yHpAYGdBGsEY1oCKZnq",
  "key15": "49PzZJMLRnu2ziVTQLNdjHssJfLWFpmUe8HEhvSdqz2rfXazj3avU2E3b2xLQ3VUtEFZR8e6b3rakyC2NxpTEjRZ",
  "key16": "4DYifGrj6e27X4xoDbL9r53XvRGcm5XcyamXoNntWrHAnkxpwzrXYHMdaVSRf8UbcoLjYHH6GbEhPLUwjDsuaTDu",
  "key17": "2YfkTvT9QDucfmhQtgsn1kqX8WeNBRgEuYfpJK3h2QDhCzHhPyBtgNrbdwX2oDgUPbwt69xy6c7xVcQPBbHnSWu7",
  "key18": "5gBWExYtjgwPGWM2aCdfqtmAufqFdvPULx82hfuuQfVwCy6wWp6dSqJT4HBpngCaXPkiA7wVavj2WmXgeAKVYpYQ",
  "key19": "TWuhPadGjDJmzJyD3Nn3CkHJ1UkistXRGCF2T4VLSz1fWEMzNXQo855GFM6K7ZgYS1FAj4z2Gxe1gFrgN7mv9Mm",
  "key20": "3hjzZ7bAgNXyjE334Nv1t7v3i1EDe1j582iBiU2zULav3YY4i9yx6Nmc6erc3fYM9kSBJLLm1nuBed39dQX54YT5",
  "key21": "4cAfmQ8PfJrJxMvcQfjXU62yWdX19U6coaZZtK4n9TStuxgD3P24M9eP6DihbY3Gpo3E6fkxNS3wUVd7WtaFadoB",
  "key22": "4GtAPTrLAn8CjYWhXGaeK69EzZVSNAEKTzVzsZ9cYqisiijP9uhy9dEQ9T3tg5twMEgnVcjtTztVUzebGD5TZXTM",
  "key23": "5m8BzNBM1cjhP5YC5D2cXf8LP7E6RUirHNjWKy6SuN3VDgFwzQUofd4qWx3EKstacvz9GaqtdcSdfGbnGmUXsY9q",
  "key24": "3hAioC5cNL8TyDqQNUpdgPwXuytG6W8Rdmp2ReH65JY5cJTmMtCRTfRvdW6Sy7eKYwWp1Pq3NRmHtgHQcdV269SB",
  "key25": "2rZ2mERof6FMUqrXN9gTjXTW4bgnRCbF7JuyT6iRxkafMBujuSz4am91wNguPimpWZiz7NqJm5bTzESP7NQeXQDh",
  "key26": "22HRcqtSREUESiHLtu6QBf1mUTj9hv9XQUjcBt4bEfUbvzAnngQrKFX2KXS5Fq3vDRtgPK7srUyfosccc3JxaiLz",
  "key27": "5GJgBqQVMATdx74jPpZY9kUvSWjJSu2Fj3ohHoBeCMSpc51orkmKc1YG3AHFkHtN7hdYqsGMAdU6Wi7DuV4nYPVW",
  "key28": "3zrx96CRGZpokyngL134VZ3B5M8NXAi4BykirSUJg6ndRzbk1VwNPTrq4FTchgNv4u2YzWXsVHg1ayZ5ownbu8RX",
  "key29": "3H7dA4DaSSSXwHpDFBzPR3uTekc1R25dGndR2HJVbwCEHpEDKKVKGrxvNmEBj2xbNK4pBdysK1shtLEKv2husEhV",
  "key30": "2NiKBiYznyHDmkiBHbt3CMEvv1HWqFNT466cCCiHTLo3rQ56d741GX1Bc9HieezoMKubeyg2k6whuCp9RX9uGMKR",
  "key31": "zvTAz3e7WfN4ocAgya2u6ZXy41NZXnf1kMgXDvRQscz3JqqtG3mjxHjZHEGCeUUHDQVkYBureA5w8pSZ4pR5F7C",
  "key32": "4amNZt1xMGZBNQrctVRjG6Hqn2oinFab3M2VJLscxjpqGG3MrtRmWk4ZxjTFELwLAwVTrnkYo6Z6t4YkPsY5irZm",
  "key33": "4Nry9DHBGD4tkNmdV1PMecFgyRRoeYsAetbDCggSHnZafYBbjU19YxDsfXcDEMZXkfSEbGjW5yx3fX4bS9qUAg5z",
  "key34": "4T56ZQKE2EQyaVVTtskgwHFPkgJhtaH4ea5BY7vS5eaz3kdyJ8WSAZzLgZYTgQTh5p8JpNbqEVeBANypgvM4mT6Z",
  "key35": "5VwewJWGExVYFEVFBnLMJkzggW5cBecEnLP3KbTeJosasAmzuF5dbpUV4B8aBDsKXUWYdyCosos8Anyhx1p7hQQ1",
  "key36": "5sLTkLHtp8vKqmJnYkhBnb9Pdh2Dzks3PeZyuGENa4N5forZbvZ5bFN1zJXGgi2XFAoHkvE7u7srYiJecNCUEbK9"
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
