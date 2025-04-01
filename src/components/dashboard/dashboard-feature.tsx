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
    "5mq15zDt1jez7LGv738emKW1EZ26JcrrRK1npTxvGfKTHMBekEqfqAPJy7RrMrPzAGn5sRNGK7mYQjLoYzZGcPB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7u2JTDEM77kMhMrQXXMjnf6245Zaq9RigBd9yaqhEuiaUNehRZsKtwuSCkpJkPhQtAgzBBHBSDX7FKgupqu4ye",
  "key1": "BUiMXrefQF47J9oCBkhirWBZmWzNUn3uRdxtpizHFnhtV53k8kqkMCtGhh8wqG8AMY27S6NFKWsHfo18AU5N7HV",
  "key2": "3FgzTihF1EsSmZKWVMfAe4dRXwtFVg6KVGG99g47Z6efxHJL4tBf5dZstBSPaVnzB7A5AzJbHKc78CRWYG1R9pXi",
  "key3": "aheu86vhBJC6EA3a4ZrerEQAB7MdeuAjsEWro9JDgn1Z4feJYgDUyJLPUkVweJ4SJ5FLtuVU9xA7CZdKvepdZGF",
  "key4": "nS4cja46GS1SubFzzjZbip69j52xzzJVqAmvNUYwNZFHRQ3vpuz4JKZ3FNjzW4XyvGnFnBMRhMdZ8DjHzbHn9AX",
  "key5": "3TUjdPn8eq2UnzTFDNyLpnUZW3fbDcBZiaYUJvjUkfUTvhH8vZLtHhpieQGPo9EKEUZ7TwMRR3XBGtQULMDYu9P8",
  "key6": "zfUSAqZM2fXmG8jSSGwjSpYTgveiJmKKqbqip7LkcR6UiV689TN1o8yn4PWQuc96rxEBP9wxi8iXZE9khtyuHRK",
  "key7": "3Kz1wP19ua6Lcj3kfuA4MJDLp6rctcwYf7EEHYwUrqG8MvrqaojJUNiN4qjwiHo2pE2qyMHvqD5cPiHhAuqY8rFM",
  "key8": "5b2afP9Rhv6TvXEAniXHCz4CwVpJFmAfj1vLVJ3osz8Dtxnw8AxAM7y6rNdC2P7EPUPWfua8RrZG4MnrFesnjosX",
  "key9": "2Q1gUXWL8MvuEyXpNpHXTa53Y3q1AaWYxu1fMCKdPfVJoVVbyzhAcqFBzdyF5MmjPYFuxKrbk8sALdM1PnbSpNst",
  "key10": "22HLBLhERct6TFLZAdNSSWgJxXsN6nMka29ZVsYTG73NTVvd8eyDSERbxT8tZksDpiSCdZUe5riRx4Z9z4EBXGxK",
  "key11": "54rh4633HCkSRHsVrwApSkdA8hwzZCa97yz6S39h3D7342TeogyX2PcGuTa5fd1ZLxEx1qEijsFU6kSxycdFk99A",
  "key12": "5iqXhbAQQ51kVL6UwsbyXJDNaFhHAQt6HGQVp12CYUMHvzQXpBVhcvFo8Ui18cUFtjxKXsNGumz4gruGM7UT8S61",
  "key13": "HoVXDV4mgUToxfDXztEXrDJff5xQTCV9HqGxGVnZ7xJgdkwHpzLjNwr9efvgTAAbnujYuMZkPYSQycMDPLZWwng",
  "key14": "2F96wbgcoirc2rKxFWikwMp1tQoyEQaqaAyt6abQWNFi8Qcm72ZgaDoi9cQLW8XSQfYgSgsVdxwXrxpyWGhy8iEg",
  "key15": "4N5ieboyE1vbx4ijYi3EJscAVsQ9QshTxa3VVhrA39fkmjbf2BXVc1YF8a8kjdzUrPAaD3FHmY1oREmzbNttX3nj",
  "key16": "4ctTkymsUahJJHbyNBJVsj8cWWMG4Pp6a4bPzstmNZXqQuHqczpLX2kjJqecfZ2KguMJtcFKGeKfAWpQJetTJvcE",
  "key17": "3ohZ8bNyBy2SmsDmgDA1VmAPSWjjRNuCYF4rKJFKo1qb3ahuYqwt49YaWYKey6ojkaUJwydrPSrxvbJbGK7FXtby",
  "key18": "4rqXLHfGW76tF2jXbMRomz5K1GWyWP8feaeefTYhHyjzukcvxJYcprrxBdUeFCGBjYzB7RAykynsdXQQCXb5iTTo",
  "key19": "3K3Rm4htSZZpZAxzVihRro3uhnTLnpDmw3t1bixiDUehP8e2hJUZAyiZL8MW7m6EGTmN9rcMZ9Zij4SdgGmxghXr",
  "key20": "5MJqVcPp67Aj4LhUB2Am4vEHLpJydnkp85n9TTa1AC498FPkz9VqHEdqcDYwtGvk1gZ7uhPABR5fFsFNVYuTxcbW",
  "key21": "28jUdYwNuG94eMCoFwYcu1JggkQnHctnBd9Gq6M1SPgQWT5VZmvqFp2EgcDKFc1rCXgJYfjJmsqqEnsY1skKBVMN",
  "key22": "4Sohq8EegMfjn1HL6gCuEiZXh3qMzfDUVUBfG7a8K8X83JY788earCRZrCDLdgmo33GpgDWXv6egwKRaRLEjZXPA",
  "key23": "4NrqS83JdnhkJMuFdq774VShpdzaJmaegjnvNyTe9NR6KvHZApmmp6YeHUNk8j9ojcSZVVpMkK46vnZtv51ePPt1",
  "key24": "4pHGaFQ7FoGk7QuCBt8ZTz86axZjDtNGLPxY4uyPs2WKweQSvhyvcz1tYeqHbnCGRR3ia1UnvvhJXgNriXN5i2gy",
  "key25": "4BvG9fWLo4GrSN9Zj6ZtjtqLeQbCof5hg3rvWiozmDQUZvVNMYAfMS43iMUv2gFBTgTKZPqCWdnrNsYKkRxP2k5X",
  "key26": "ejS7Um628MnPHBM69dZrvBEWxUNq6TrK4JS8kpT6hUYWNvVsfUuCB3ANUn4cZYERr6yt5cTAZHQZo9GiJNGRnXP",
  "key27": "TTu6LLZpXfVJD7vi3tJ76ziFTLRZB31hYTfmPDpZMHN1f7unCnvNAotCyzztPgUKJznUSjKhgVuNZ6grH6TsoaA",
  "key28": "4eZwgQxo5wVjNz4pDSV88SycuUhYKCfokkZormSa6SrmBcNhREoe4UhFHE168kRPDn6rvJH6bgAEkbaAMmpJjsLB",
  "key29": "3Q5enks1ZmcUR6wtBJNuzBLLn6cjmC8gCtjsJkgK8dHo6kkELuarcR1t84T4kfvm7wuLphHCDPzgLq3neCgVBrsA",
  "key30": "4rgaBZCsywBCHoTVB9nAUcMEAiwdnwcLG5MECZ9ue1Eh9rUNaLuySdg8Ep5ZMS2CiRzDLTbGsmi1obptFQdqpJBj",
  "key31": "52riWcZzXMf9xEaSEU3SJzYSHWvNHxkD76mTXcBhzQU7PCXd7Laqbnz5A39RHjmJd4WDmxQUg4jpaVtwJo2utsQQ",
  "key32": "43WVZuWE14JJHqLUkSt5HfpnW71d2AVD5BJx67Ww899HkoiLf49FrE6C3h5aAEaKKyB9CFXdGYHjCfatGn67S2ZW",
  "key33": "rQR3g2AEWdQyfVJA6dnroDNf1C8CsubajVyuEmRFcFc7gkvteRCCUmgJuZq5QivBVhWycCdjqxASrbGa8iSNS7C",
  "key34": "2esij9CzagsXx1vZoDAqbsrEmU7gQWvTWaMZdFuAT1cMum5G5uw5WagsGWS7K36SmzLaB5anRpZDFRJFCSsEJWFE",
  "key35": "67ZVWHn1FPjfx2QWp8Tf5jDV1ZRf1eKHWH13DLFZEuKq1u2MwPcwer9hvndDBWVxxdmU7hgmntwbAjL4xrQToDgn",
  "key36": "2FzMQHgBrxjXnL6nMj7YzKtJU7Z3mpjs7N2xFfhehmKTdsxf99QmCjvdeP7HAXpD6EN1fj5uaPZqtVEjRhXZn86M",
  "key37": "5NKB6DhBvD2ywSkVNSfoDARmHy9RxhAkudsUY1V8WhVxSQNtWni6Z3XFVxzmfTY75FGpUCxeqjNu1aLinU1X9CjN",
  "key38": "Y4zHtgzY9FvqGoy1EvwcnSrqMF3FyeEPXNQfLBYZu5gWraer7bHuE4mxKyeR36xEesZPCDLgv734ahfVzzdyptz",
  "key39": "2G6qqBxApiQuT92qAMNyp3qvugfRBdkD3UErcT8cRSnoVVuYzc6HqiCGr8gGdbipJVGrKxoEpoZKYMyC9DrPyW5D",
  "key40": "61rrxNghinVpkVuKXPL6rdoZE19TMdp63kSfhoe1j2QMdH27rFCp4122HdKVhebgtCrpTnNquNxo9M8VoJkMe5Zi",
  "key41": "2Bta15Rjfkkp6nf43bhVzxd1XMQFHPnMPnb87CXMcfQoEn5e8Y4Jo9AYqera95Jj5Z4dNCNnBQLnPY8FFkQXd6cW",
  "key42": "5SzQdyriEELZLijL351FgjZhrD1Lj5eXyuAPs2X4QkG2e8GM1vm8UMTPPwdjcFxkDoXkEKpLcVXHt1SLEF3ajC7F",
  "key43": "2ggL97DDnrknYWzEEiX4TMQiqoA2Rh1f4n55mJE6K84x15ishC5SeyxFF9YQHrGw1VGxosdD3f7WpCve7bq7d5Z9",
  "key44": "5btcHSRdE5PmzCoKpeHX9Dx6mid8XhVWNWH2pAZFYEHgxPo5xTtXAKkyJWJ15nsMxf1YGjKQ9k71sovL7Jy9a27r",
  "key45": "4p8xFuRUQDiKcPMRP4BZFUN2L7SMAJrz5aw9RBdRKBetKwCayZBBgXJtBFRrvuR68KQipBSvQrQdcsL1FoUQhz82",
  "key46": "TFACAbrxkndZoCUyZRSPkyiYFHDJLyBYQfkNsn9ywZ7kuxDVjWtZqm5ASdpqjVgd2VvUWHbdikmRJL3PgufjN8z",
  "key47": "3TbAzyGFTM1qPiH7yqNhyh15TWVcr8qEttjkVWuGnD5sU3Er2mwi1YK2FJL3mr7dtWBZtGCu5ShfrxgFKfkHMpLX",
  "key48": "JTGtJ1XVXbrgxhx6KVN7LPtjdqJ9EKRdME9rEHAdxQYb3ChwuXghywFD9GTng2cfhJCG1w6UhZuaRkdz81okfYq",
  "key49": "3y7Pf3xjhXmSmpwK62RV8HnPvFKc5RMvvDUdayEPN8PxVriMqojULKHZFDnPx152iAr344jcQXNgJnz1Z57qDaSj"
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
