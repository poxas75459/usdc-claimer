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
    "34gWyY2mju1QhhfutsjdQ9hJVuVgZJthxE61FbvqgfPoEYKGHFNu4fmPPbcvSSuspPfjTrTUaLjvQbYjA2kMTQRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CM5bFMCWMQswtkfaPn3dmHotPP75sugycV5A812QXjz6QVzx9jAcnMsVfb5ycAjfYms1iqHS8ypuayG64tX9vcv",
  "key1": "5SzGo3nXjGXAzsFPxD1RLTB4Et9mBZFq7da99LLy8Br1XcNcpuMhRTnGbG5TJeHmTjgDt3APQPzwXBCioC4naqXk",
  "key2": "2K4D6m6HahH4jHgxy2zuDjWEvn3MHjgoyyK7buoxWaC4R2e8nyhmP5PL3D9AXdoQv8AZZBSwLHz9qpQ7WoyabM6z",
  "key3": "4CgaRHzDKvExzH369VNCp1QnjpTXJPXiov8Unv71jWQ76GKevdVa1ge3XQuTgUdFt376UpA2x1Hv7KVT88ryWgmq",
  "key4": "4FHtLY1PN38Ye3YL6GKpGBZtPtKqif3BmzaMLba5eaBpGFu7LDUNtDSSAxP1mKz2B4Z4GxraENg2CHpaTnhzpbfq",
  "key5": "4gyqPrkGP1HNSnidXHBTyZAFDL4iRsrgSkCCTESa5Sb7yvyewVFAN5oZigNEw34jNAywV9mHqt7hZkBr2mDD94W2",
  "key6": "4GGCEi2woYX21S5NurXm9QzomKa1i8Z6smaix4osKMLJfUQe4HidFRAbfPFR3qdbb5RvHpTRFEXJSmUkJq3VcXvd",
  "key7": "3Hy9nAzc38Uht46Gkeh2Wc35HCDkVVYoQEgwWaPPkpQmwyfSXBepD2XMeQNDAa3JAF1dTz9Pby4KSBWTK6qZopNQ",
  "key8": "5JptvehdUNp7tEv8sQVXsavDCaCHQNqU3dHY5rwPULHA4jjipMyV93EcDsYDHgqAk8ayJz2ZAn5N3YZgL3H5cgPx",
  "key9": "4DHFf5nLdQYu9Ru11dUa3Y7ZWcQpNsT52a6DYtHGRmQMT6eu8Qd5FW9bhvtas92cbxiBtDh7B75JtSSG9WzM3PKH",
  "key10": "GDWNvQzocKwh3C3Kf3EeQPqmiDucqAw1ugZZGREcixKPk8GQcz7b6sZQ7FifDqwdThgXykdBuoK5c4u71JKvDGD",
  "key11": "3JXyxuGCVdR7m3cudnHad3emufXv5JrepGjduMZvocAB7BJVc6YCT1rbrCdZQWaq6QVzt8CEyWQYVKSG98PHomgs",
  "key12": "1MpPHKyGxrEm31pSiWtWB8neWJQhYX7cTibiATTA6NdMEmULgygkqz7c917Z62CGNJSq9WuacUVWN355DrYFk95",
  "key13": "2Eyx9oxw5HQDoipQWdbxnqG78AdJNSepMZFaCMJUK8xsLL4JYh978mjw4kuK76oLx1kecyWMxcsMNJjSaeEBKh1S",
  "key14": "2rEfWxkFX3RjnTMEmmVmBcM2Jvx9AZ2XUwMuX25XcKHfyvVVPJEzRNW1viSiquZht1syoW1XZnuvAKwJLZc3h2pe",
  "key15": "5gHDC4kugC1AcjjwB3rqhuWrTKx9FVL4MHEXKjgaWfU3qV3wUMeyNMpKyfXyK5d1rfFsX8XpoKU7RzAYBQH5Qmin",
  "key16": "643f84D15PapQrHNNHvQDf3oUGxdfRP1aZfyxtafVDv5jfyfUksG4YgKvbEEckx9WA1BhTAzobpC5ZjKLPfwPyei",
  "key17": "5maQGv2UXF6joATiugwKCSQinEyrqrViJ5yy5LETMykSoNkT96LBYBVaCYLigRCk9TPdcpSWRVT91NpB8DhhJB44",
  "key18": "5fZET8BRXFBEjMVf7LHpHDfXDFToAa2RoRvpMeNE7jLMhoKgoVB2BeBVisCWzd3DhULhr8MsoaxTKcbJrBsNYAYx",
  "key19": "3WbUzHnXFKh3JKSvByiUYfRuFBxWSDSJRDZiiZzPLsKCWYChtDQvvk3G5FmDvmCpGozT6DKtj3YhhHUXxzrJuTmF",
  "key20": "3QfU5F358GWT521Vxtu4gopwgAtjAvGthStP3qJxc7j32fyFqEnGoQAvb7GBzvnrfxtyujZer4WpbmSpS76EagkY",
  "key21": "44KwzMjUhr4MeAUncphhBz7nYqGfBvMghwgg1RbZFx3yuRgVkfiX8Lwrvx4wqbJReU8UakEJpJnbLpF6czmVdZZy",
  "key22": "TsnUeEbYXgY4KvhXYJMNKY3E6hAUnJvBTEd9cGMEiWekgboNLHm7zHynPqwPhj6DnKgut9a5b5PLL4EV1ScVa9u",
  "key23": "39JVVkrPQLik1TyReeECSJME9HC7QaK9VK7ze4tT9vE5fhMz6jvi41RvNVQfp9FiLQMfwDCEufFbyczZoUkfAsa5",
  "key24": "3JSbyVG2w5ZCPwXGwhinCv8P3m6xr97rxgHvfKxDyprnFFo4NPhQyatQiuAyyMo7T9ns5egw5YCZXP4eLaHiEeC9",
  "key25": "5GTYCoYMrvwMzSynaB6C1inPn2qDoScsnXjPGSRDp47qkZaKr9eip6VH5ThSUPiYjSSri9NNgmeEkPX1PMY1DVin",
  "key26": "31bJ9fxGJpc9CAVpohNfCpgizFUPKm8Bx3n8B5iGSTBBD69H9Kd3AQ7NgiiPU5Tnstq3tQYdXybPQid1o9QJShgk",
  "key27": "4T7oCwPs1e5sofRn3Uf3tY78LKoDvvgiPjuYtgYxonETy7oRo6X2gjxDciUUrdBisWVnH44MAXDysq9mATtjm4L3",
  "key28": "4eJAC84WJuBrduDxAWrAd7vkb315xTkiPM7Vq3qkbkkiRMyNCNS1geSRojPZQdmwzDERWsjaWCmxoybQTJ7GEzwS",
  "key29": "3kdck3W2z8xGr5zDagFW76DcpQw9wXDg5bXLXHH5aoA5Ue4RkBxES4XBQo7y1JXDHuyhs2b6EtFVs992xMQ2aAXW",
  "key30": "YDDmnfKQCpTDXba4sKsPLgjjWmi5tr3nWYjYv53kgcMqbCiefbWocaAV2uDRfPDHuv5yPV9jevY6bChtLTqhD3V",
  "key31": "aiBdB479caYBKsgyddeedU7ZP8j58vay63YdEt7To7sz2xxSjiD3DnhnQ7UsnaRBqyu7xkdMtfhjU7kenDdBnpj",
  "key32": "5k1ojTfd8wzdGi2dj1ZxLQz22pUUNNeZD2ZbfoZ9UcqcBkFBeuEWcWZnsFvJqea2esHdeKoSb7t4MEePgzzXGQon",
  "key33": "o1aQJrJrpNMJF7wyDxS8RekNFX1qVATteQfLgzHBEuT4S9GDjjEhj2RQZtMfBNztVockV5jfYZJKaCKiLpE8NJ3",
  "key34": "LqqKsGrRRcXy4kaSBtw65teRNjwa2rXgqTgx38XXwtjFDXrsyhkP9ACiVDkRYBkW2kP5FmCktdGVEwNLF14fyrB",
  "key35": "4JN4jSypd7GDQh5oRJTXCptJbeemGvahoEciQbAntWHFrgsHNCy6F6gZUn8wX2rSU7e9fMN1Db8ZYjFC29BrPwN3",
  "key36": "wbAGvVcupd1abzFBc5XNwex85aqSdu8Nsw8sHg47eEHs4TTAFZVUcYLBRiUKDy8KLsU1yzijhm6D7ovWF8e3n3V",
  "key37": "owpTF4Hu4XWKSayVPDKUartvXzHPREoeySCQ5g64RHyA4vv4z9YPvFNW3FexciCkFeFMop2apTHwZ2dcCsmKbNv",
  "key38": "3oUGd8nozbynqU5VZ4MXNC2vEG9vyZJo1rH9Kh8yA95MRGdwcmvm3ebihrxtNvcaLBPFPxCTP2wivpdBb5JEbwmp",
  "key39": "2TgoFaGYNpMzeLk3cia6LSJoE4tgbANg3JzUd6JadL5s5Bya9MoW13XFAkPw9TMUxUmi1ohnke96hDdKgJsTBaLg",
  "key40": "2ZsvhWN5Vm9K1rQSvfLhovCapTFsdt3jmESF9Rruyn68WGNpGbF3sWqWcLuShZKGJQf6xLVQ9ZJU6aCJV7Hdc3qP",
  "key41": "4rLGBuSxXWggyUiMGu9wrYdykPV9gh3NtUPuj7LyqsRXxw4rjacEjus5W1Aj7pcXbzKg8t5iPPEM2f1KfQCWUWgs",
  "key42": "3N57S2hsMqb9AK1JkonpMHabasCDt9kwJmjxS6szsX63fiJCngaRZjQWiT9coL7Egxvs1L3ckvrCwr121AvAZVcj",
  "key43": "rMySnc5eeJh86dMmLLPdRatJ4kNQqvL1g5YBvhGg3YfFEcB8ByoFwPNhLPBLshkWpZRsr51YzHpprpmtFuPgDcF",
  "key44": "5yvWDJM4h2wAyB2MHF9TiUu7rH16aEj8bWfPgT9h23HxbfSQDTujkRm8USWCrT2oLSrpmjE2NnMz3RdFCqgm678K",
  "key45": "41wegMEnXyYpZa23S8imxmTA2dAYMKNxuxp511UR8ToWtYYUZh4ohcuozzc3wQF6xvN5XasZHBgHqdDLtDUeSAZ3",
  "key46": "5THJxA4CSuuitTGQ69EvWF3Bvn2ZhyPav2mkGKxgby5Fe5E7UU6zoMt5rykKEB8etfcQ13GnLFRJYC6FjNqoNj3D",
  "key47": "5dbZyBTranRkKq44Da3ksyWt9JcwwAYSjijyruBNrHo8Uh1PHWZab4eUEJqRNwv3VpkuyjPB6em9GAifKNSxsSdS",
  "key48": "25pTyGU4DRfBTA46Q4RsFbY62Tk1q8ARvL3hLdAHtm8tHrQ26B4qYmg4fpHz6bYJhNA3gEF8wX3SbhY3rjoVgod8"
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
