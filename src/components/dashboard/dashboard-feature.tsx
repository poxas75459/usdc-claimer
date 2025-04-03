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
    "3Ceba1Q8fzpCpxkonRRtCLSHFs2u9W6ex7bVqtYBLxxRaZreMu9NMq736ANpqDEJ7wGG4erFXZ5efobEfHLMinyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j1QLbFqN4ESSGYwEcTFNcZqmyrwQtcj6vvaqTNVaBJ3eKhaGs51R9sb4bLay8nH9793eSunmAbECWudxQPUH2Dp",
  "key1": "392KPVdDQkvkYTj3XMSigXsUgYMR2brrkZ58CyyJzv8ECe6MrwdQeagMRtfEGHRkxJG2JEtMZXBemgDSmhqnafr",
  "key2": "2JeprBNKdpA1bMaYCVF6ZxPM4FuArUX43G38r3xtgrwGr54hQtFwNCx7ZBWSTRGw7b7dXVV1Ar3QvAJhAkhVpDJk",
  "key3": "U3MVXyqUfhia29995vHxU26PcgZyMQ6oLg2LesmvA8T3UDA9yi8Nr5nP6Y7cGn5gZVrnT5ZHb48UTMqpUvUAE3v",
  "key4": "3pHdLwL5SBSPDkWQvXVMANmH2ehMNkT4Qvr9XeYHjbBjtpzJCxQvitTRu6HfijLLp4eXL5r1ofFezcSEq7W4118k",
  "key5": "2ivCutmFF2xLQ9xyD456AoJes1ewLZkghmeep7Aiq1w5owm8u8JqyEHMHwyoLChiJWXtRiyQAN7Yxk63BVmsXHgj",
  "key6": "KsasKTMyrsga3hPjmtncNCZd6UivLfW8KF2uRoH9VsEjf7eFidVngVaFMB2keWhhb1R7pkEWiEApipXS7ytFdai",
  "key7": "658uCNi75FKiaAAYSts5dApsN4DNsajXyynK5xi3ru4tfG3VTXV8SW8htDi5RPYgwGosbgH1GeRXW5snyjgMtnZU",
  "key8": "3vm3Ed2QqgiyAfjBxqgztHQXKoxQrwC67vLaXtMzuZMVQCTzGbBw1kozTcKNgSh6z56iuMHvmGaja6aN7S3ATZ9J",
  "key9": "5PFUsh48Q1qoA4TctNkwA6qAYxD86gU6ma4uExfEmiwT7aCacvedVfnCrdgtF88YhqxosRCWU6eHZwZcdiSYadxQ",
  "key10": "5NTCteXMVGe9AbvQQ4qcog71Pj2L7EfuuoKnZkvqk628TH8uANPs4mAa41GfwX7X9UfWGMtUdiA1Y5XyjuRNy8Uk",
  "key11": "21AEBXNVXSMK1Xj4PBM5v3ZMHGX1TKM7pHYaf5Qa3kDPVr83F8owzDbSESe2WbZTG37FwmoMTENCK6qhz94NM4zD",
  "key12": "3s1nyfR2rH4xu524zmY7Hnm3wxJT5EYanF4hcXsSfbWuFQ2AwiEHUWRW9NKCC9TFVL9taMPpwmC1FDWLnxa2FnNK",
  "key13": "Ch9UABY3dky4dxNnrCpEQGYx9SP5a9B57HYRDYmBtWm25CxBQH2A2zhLRi2QvAKttKz1ggu1HCKja8ksiDKEA65",
  "key14": "3VMquppSXnmaU9yEqinGMbCmx5Zw79bFerDUVH7WSKRvkCvePbuZiuLAKoXiZFXpgKEuMz6V8qESESqqVsJTSQ8T",
  "key15": "GN1GfyM5hWLn3vZ36JhHDvunMLGuqAAt7QYD4W7Wma2aA4m99767o8zZtcMKotrDDDWjEcTZshSG3RKvZQXQuGv",
  "key16": "2xpuepe8gqwjZkSaVumnFdpGNdmuiZ5434tdpn3CpzzwHskvq5vNkrZ1oC8pDJqCfFYCnDpexKJpZ6MFrzxzy6Sv",
  "key17": "5SeLSjypBV3jcCRqSCxmKH43nJJ94YtgiCeBwE72aJxdPnHKj35cWaNr2dEXkrz8ebAnoU598Rdakw8sm6Gz7qx6",
  "key18": "2do7b37JeqFgZjEs2AV6ofy8mV7JzCFifZpyEgQtcrA19rEbnDz4jf7u9DEQf6fUE1DfT1FMmMnu2M74oRptDDjT",
  "key19": "4erG7AKhqHKoqQ2i6NakJ9tgWSCZK5z49CZLPFuoGazapn7sKsDBnnkfhRhKPwXLBFpaDiF4z4AXXhRm4C9MfWHF",
  "key20": "X21v114MW4wMkA8tfPwyw1aFhYkav94xVRcKqrGw6GtuHQBuwnkZUNbUi8X3oMY3MzqURrsuZKC8wcDUvPN3tSb",
  "key21": "3GcDN2vYosviVG7dvusk8Au5nHXadPunN8LDLWc8JXGWok3bfYT2Ms7JEBi5LMza6jFvPNXqKGwT6RsBNLjyPfdj",
  "key22": "45VN2QoKrc2BAcra3PpdGA2zVh24EZEhbgK7XZA9mcG87gjy4bkzvUSJ13DhJyAzmS93y7TL91HGdDsEydUgdKoH",
  "key23": "ZVTYXjop8GdCse9CYmieD6hzMqH1ze74tt2cEbzTss3dnZwKyzKogYduH66MdcPs8ireQD8bXkfJRyRS9LXErbX",
  "key24": "pBYAk3UypZ4h4ZkYxArvXyTpbjnR8LTF7Rt8nNmv8hrxXgyB9jkUeQycwRKf21tkSTJ48oeJDetaGZMSoWrMwxB",
  "key25": "XoRSExAQAj51A3JpkCdxuSPikA2Uuokggk4uypRY2TBT2XT2zEGZqAc1BEW65LwMCAWi5pnAibx85GDg7EPKavy",
  "key26": "SA1ZMMcn1ssP2NgsqtDrcgdtggKjja23fc7NpbvVvdR7S7fQidC8d5G44C52w5jiyAzhi6GQxtwyRqmBt8iF1q9",
  "key27": "29Xaz4h16o7J4MSB5PT3UJwKBctCCPeQscwZCTQRCqT46pQbftAqcg58i2PFWrmkooWFErTQf5yxmnUA1jyg7SjH",
  "key28": "5GgdKgCPNNAMHMgRyWteQjpBaeLpLVf7FrvWVZxAAhECjaQXptiQuQD3yqsfnVT6edWAAMAoqiSdwpCkG5pmVKqH",
  "key29": "32ibAf5woP2g83PxDrJo2dVncqf1YdUWhoqjHs9EuXJ8pbi3zD95wZ8c2qaiqybmHwg2UpDRhtWCoxj2DnByEFmS",
  "key30": "34oWuoPiHhMTKDwjFJaJ4SuhB4mhgAaqQNpTu898gRc1Q3DmaKhXpWZ5DkxdR4BooRzf3R2dftEnhYxdvNLcWLDk",
  "key31": "3K9FUgeZ14SJE5fE3CQGmo919EXo8hrne5r86C2RLiNmmNoQtrjLFAnCG9AB9rK2X5S1RkcHK6zDTsQY1aL4UDvJ",
  "key32": "5RDvcf2AGnpjJDZER893DKKxgbRvBuZBja1txfSLEE28AvopSquq8WuSNuF3t3SFfZGLAvNz9XM21tQeND3NeYMA",
  "key33": "N1qWQuDKi32Ns45DYY2PSKmK3ytSU5zqa6o6R5EurjbTxGFtuZzSS3NxK23L4GyAJ2xrV59D2fcU9p7MLKBPsc8",
  "key34": "3A81spDooiacRc98ZAeLyHyrUEhu8EvXZjbz2gBzU6BKhRfw1MPGdDgffygxznXhz5t7yJX9pxeyPAgJKpXGW5aK",
  "key35": "5ANxDTkaGs7FqQkneFnsGL7QCuNkxbFmbAs6dVUCh7XWPssKCMFAQjtSoSnwefE8vdL5kR32515q7m3GehEmLQCA",
  "key36": "5tFv6xTZtXxr1g8HbxDThPNr49chaiU6pKh8qtdvmSmDPYKtMgbHCmpQHiNvV5wKQKn671RkpfwyQ7dEqFeX4TAA",
  "key37": "4PMBkV6m8HLJYvRUBZ5ghXvEUpBuJUMSRT8ihUDo4azjXUwnQhCmLkH71VEsAphkSkFTQsoYne5E8Saw67KyJCCp"
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
