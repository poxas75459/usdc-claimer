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
    "2TVeAGEvniAVfpHMyzQKgnsBcyG6WGucue1X9sGLxtyCH7AmEBfyK2mW1RcnVfrPJUEBfQPtmEnQQyE6EuSEgGwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxkdNNX5mq8BRjxR1bstYeVncANDYoCWCda68QBK5zSRMFWXqg9fzqGRoXGTg4sWSsmnmkcNu4m3XWPgfysoi3f",
  "key1": "5xgQmq1iHjSBGEm84K1XAwHVR2VVafSTgEtkkqiCud5WpZxfLdbRakKhWDgZXYdM1MpoQ43FUmbaFExjib4jtAKY",
  "key2": "DoM2jvN1Zy7Ae8tyeh9TiYDX7NwuWg14gtWnmKKjsE6X4csuMngpiTS8mGCZSZzjwAQ7dLm4hMdBbkSeKM9fuWp",
  "key3": "5LmrBNyJuEH29B4rHqBwJ8XgbXg6Qc8uYJ8H3PwWevFe2k9gCZQoF3mr3Dkd783LUWu82NfMhEfXuSojZMpNws3h",
  "key4": "69i7v3DPHfNmEaJ9kGcqYvSBFtC9cdGzWPU9yUhZABGa2Fe4FLrFp2w5jsX26XYgS3gUnXpKsxZDiCwWiRbCHi8",
  "key5": "2wFeQkohjZi3RF6gP8Dn7rr4tdkd9RqumgbGrdK4wSCmMscazU6WankbRup5Z6w5U9qZdiPEv25RB5W9KTDXJAW6",
  "key6": "52qx5gzidXuddvsEsPnXH92KmWjKNvFYnZQVkNEp6crSBUAZ1aBGDTPHCCriPa8zmgsA7zoJVCPFFgxpdKc1NxoK",
  "key7": "4w9uY8sR9uiQcpbfF9SzV9fDgpVEJQbKp5TU5nKD5oWbEx9jEUUr6dSpDeMSybshYR79vBPNbfb47oepqy2zXWcp",
  "key8": "37YqCJgbg9XpEsWNcQduYecEbAEFNT2rHLPZeyWJF854m6mbD937JH1Pp2xnEKznBmkXq3Ec9Yw3eH2wn61KoUiz",
  "key9": "5C8ey7VzwPNVM7GXyCLEzLpb66p8d6UYnnWW3bzHSxwF63j8BaQJDGMDDGHT5it8MpPAvgZqCaQpvHsc4SaRXhbb",
  "key10": "2xRu3dey95HV8x2GSybfHGysoNFK92AFJGTCeL4peSEsnVVcvWzFVGsCvTKN6jH2MzCXaMZ2hx9EHPc7bWy1YG8n",
  "key11": "2Xo8Q7NbT4JfLz3jfM4Lsj7129G18QkuUZtEDDrihA3spaqDULqGhJatpjnDENzh3GUwfGDosKbQ1vXyNxqpkCCs",
  "key12": "64xiLMKVVZnAha4yAkYbEaSH4uudm8gv117DNBUGCzCpoQW2JyUMuMeqxn9aPe3vDw6XHyxGfmG2PjkQuemM3Qot",
  "key13": "4rQeeHTrmFXc9MhEftLM5yPNoTueLtvgE3P1mzeWKxruroFctaKyQgZE2xwVWH2nWprttwLupa7vHLXSTqgX5L8V",
  "key14": "2ngNN9ATynsetrC3uBfHnV4uDoi2T1T3NbM89LDZVAEasFRCna4uA3GBL2E2Gehb14wETJ2nq3gW1eNCgGafosMb",
  "key15": "8YYBMYbMf5bhQVcySWWLP67wKd8uJogRcYea7h6axvHU6XNktTzqJa1wDXaw8zLeDjs4ttQmakeJ7XvNbwHnCBP",
  "key16": "2ZhCrJD5Y4JJ93paJPTGGoDgxihNyFj7JuNkk2aFieexhScAJnhojYHZBiffxdGmvSBCujaw72KDTYVZWpsM2Vqy",
  "key17": "5SFyuURup6XYUBeNwVWfpkxw5mKULvgJNoo4PvYiQirx1MCmQRSTR3aoYtt5EvGYxA4DS3PPr5919wTPoNbBAue",
  "key18": "JSbx3VQZQCFtVnN1nM7RAWXNBD5hP4U4xsF3iujx6TzS3wEVN15fwJpuaA3QgdzLpvebkgEwhyRbNqcYFPT8puN",
  "key19": "2MycyWYuw86FaSh5if86Ec9CHGNgNUjPjvBQVPpKc6aAQEBQUrYGKHe5JRLEmFYzR7Np6tweKkowUe3BY9LgABML",
  "key20": "5qPcyT5HUJwdKnoNusGcjaTzgpzFYHhPoYwJix2Lswb76cf7ywj5xgYeV399CFzP3W1omnAfHvknMvUcguZYEjVu",
  "key21": "2tmfnwhCVaBgDNMhVCNdCCNiF7rLv6ziDzGC5codHWHps4UPS7aFzFsRDFdqZZsL6pkJCy3MYAzuXpHNAwhfvA3W",
  "key22": "3V6a31gZHn7Tfidy1EUj8ETFQNVWBAQc8zmJprdqYz9S8sivhmkcLqgbSqhurTF1R1mhm1TG5aCjTs29V4ZaNsds",
  "key23": "568YkqtAmaTg8kBtRTH135RnEhy1k5zvTAypx6xTUyL2h457bEiCCNFVBMNErAmrk7r8u9Q2Np5GjwR6xHSc5xFq",
  "key24": "5kbBEyxrj77vUjbVa4nHAicRu6BHyHRCTabRxifcQSfLfMCiSd34VMSiVU2oDa5XPfzxgD3RW2qCkR9cwthQSSEH",
  "key25": "usJx35b4jWNfU1ZvJyvzUk2o3m7fPqjfwZzt27VTWpBpTc6uVfJV6hdo5rCrXx9Km81B3WDTMGT3ubTDYfSordL",
  "key26": "3byHKBBzGY1bAiTNR1xULJWutpuv4Bhfg78woc3nwHnU87YwnN9Mcjidkxr2nYexoibaUV4vbQFSyawFAAfHNp57",
  "key27": "3oqCfRFYPhH2m5XNRczw3vzcH4qHZpF2FoLZFpVm5AJU5CazvLubCASmUTmesweNk2Sp74j5XAENJAcNwcXKhMZZ",
  "key28": "4SPm6tsF7fDUFZXMCjyqiUwnz4iJLqy7JVc2kmfNuRFRYuCqNQuLQpgVU9ZL9WuGTHK4Up6nTkTksRoxKKK2VnYi",
  "key29": "2BLu66TLcBWP7sQ4fSJFXV8UF2b1ozXhFBxEdC2BFmGv9bzhAj2t532n85D9BR9QfXtDswm58awyR4dJnPvDmJLt",
  "key30": "3aWan23HNe3PB4bSD8i2HFKFq7prpfufx9QWNhcfzDeSCghgKdH7o5sXx9TcmdwJ4bFr7tTEuNr31qs9MY3Kha4x",
  "key31": "2RNzzwpnmtbrvSMvRb4YnKcDWfoEME2USkK5U18PTgL4BTmeuheieXxHvWtZAQyQvTwPLjfhVta9aj6QMFjcqFFw",
  "key32": "4J2VsCqFZRsaKYBhq7135j2XiT4mruypBusnmzuHSJajmUCj4bBKUirVV2GnNZgrLnuzqdE7Lg38MqZtvTjzxP5",
  "key33": "5Wp7GvxoFC91YNtnNonG5damxcdUd3dYgErRLsE6geGZL1NRhWNcvpBWm9PWcSLS1GzYQZ1HyNzDM2WBi5axMnzb",
  "key34": "2HzFQNd7JJCnmpmujFv2dbA3ghBR2Tn2A9Qi5pH95fKv1JZLSFQ8QGC2CiMwbxtBYEPXeAchewjVGKzrKM13DQdf",
  "key35": "4mjzQn3wyt4feMgZ2UTcmdiJ8XLGy9xHfsJfVXdQNXVquTkKcsX38bTqYEMjWSun6g71N11WsQGV4gV4g9xJDJmx",
  "key36": "v6x6QAp6gb2rqhy5j4Ei4sjyJt6kn9MeLnmGT2E2BWfGYN6aCoeEiA3c7gt8nNu8YRZh7w5juu3ZbYTMomd1CHa",
  "key37": "5UPMZuvHwJWsi53yuSRFbnw25qkCZ6EaYsnhD5tfa3SC22RFFETi93D4LSun7ZDWyjpQS1EBzQbR3qDd9C9k4JLP",
  "key38": "2C1j7dBqcH18nWPSd3VTmodZLct8xNYoKeQ8QuvmjQcRz7PBt2uKoMM43bW3AjTsKHuxt1mRHHz55db6v76bxrtu",
  "key39": "2wXjSdoZ4Qd5T4byrnoyJ8UBGUsnCCmjN7gmEcokn9NgprfZXnLqq2xDcV2nth4ad8eWX4ftkwGFM9WFAqhr96R2",
  "key40": "3HAExbJirMmGNm3JTf42pay4p98ZR2gamjhnWmjmRma5pYvgV9S2BtazEBus7jcYaBfmQvt2eMoAokvfXfx7DtGJ",
  "key41": "1vPzAxaihNJNFZMPA6YUPaEEmCv5uqq6cMv69wTaW4bKaRYEk98PhQymrUoY263VqeQ4kWqvEH33SnRpkYKxNFX",
  "key42": "5D7NbPmKRxGh5WsUrnakHzUVX3fpZ3Ez6tHm9VacHZeRjroPXXpUgVMrPBkJGYvUrBqY7Mo6rg4r4YbmNxfuAywK",
  "key43": "5J8tg6tGTTC6mvGEp73zgZNKmkkXoEqmhWLgHxJViqCcBj3pNxG6QripiZm95aVExCJt4Q1enJTtAQdo6gcwATwp",
  "key44": "J3nkSJL226P8Zw13T66rpjJZXxCbxHLHAjJwuH53vSsonoRkt1QXVWchGG5npdpgBMwAKY29Jit4VqN96VNHCyb",
  "key45": "3geHQrSfEdWzfZBiadkCCUXvmrfeKzvuikK6NusqQeVwhQHkadTQoe7baaoshHyJuq7h6EWk9G5VNVi7guY24fda",
  "key46": "2dLJ6Kgkp9BcRqrWXm56cmar2jbfkCNdL2RDGNzpCLgiiUJcN2jnA6VVsmxy5EkasDF3bkX2zKUNEgBVnWKVEkUK",
  "key47": "3ryYJ8FNSE2itNbwgtVbmFgHTbWTx137RcpqVLE8X17AHunFApSyt87sHKhKxPmdTJ543q2kyn64gYD9DjfJm3h1",
  "key48": "32n8ufgLJKRajDRHH6LW8vMSvAg51FVyJiByjJHzixiVX6GudZpzLLGTR1Z1bqb38eLU94hT7TWecrN4ML7VPBqz"
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
