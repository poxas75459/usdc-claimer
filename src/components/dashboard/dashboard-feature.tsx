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
    "iVeXSaYLKPW5WWxQKcahivaFaiMT1rhBzwEXMfwwfRkRUjEgWsEVNGGwmwG5HeG5HXzyCpUYjsw6XpzWccykHNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDgz3JLt4LFG96e5ZCrBYbHJtcYTAx2usxTxBKmeZfJvAKsdbFr5wvT1x2rNYDroW8DSgVa352ZQsznmJpmFhGe",
  "key1": "4wtnBaQCSmwgywzivPb2kTFytwo9NAstijQKoBewbFGM4x6MGpk9gsW2UUvyXsmfZn9umLUzk416rL49QhYozVJT",
  "key2": "3S7rfKoUpriGGsf5Kh4CYu25tcZD96ukyyQ9t7B3UgALdSevbnDme1d6yqudE1ZToKSTJjFuazpfNusDJ3JdX3A5",
  "key3": "3AmmV2P2VbnsFxfeEYbW34zsEPmY4WoA8r6J1Y9Z7USYxZPwEcVqqSdeEHUnpB2o9qR9gDZ7eqwV8G4fybHwHwwJ",
  "key4": "2tahEFv1kf7UiSj8ZtfoPKMipsrb9KuWRRoSQR4KaRzf8xYLEdxvgf7xYR4zqZwbw6EJBfgkr4hXaTAgyv8BEz1r",
  "key5": "5N6vpDB1cC5vHX3iHEH8N9VP6frZ3s74KHoBtaF7bVNatKPnrx35Hg3bXsedVdccMgEd19zLoUppFAvXvVGojfqL",
  "key6": "4ueuK5yMQ4MHvHXPtMzcF4KpHnywRyvFgK8uAQjZVoyPsu6CGyVCUHsZqkFjSEvees5uuL77AyVcaf8K45Lmvmyj",
  "key7": "M9ieEe6xX94FUqE9Mge2SDCJqVBnJ1XupsYYXt27tEBYDvahMeuCeyRCj2eZdj5aeRfmzuF3i2KsjnprNRGdnKC",
  "key8": "3uWC6NndYfcA1ofFTUiE7SLnksQAfUtbocdHj1yvxrwzMxbmVaLgN1MCH18yd7VDh5rNbqxvmWJxBsBKigRh2otp",
  "key9": "2TLUpowy9B6LwfcaT47zsiqpNz4c7gmpay9J924NUyb3ZanvGahJr8uWaGYiZjAiEJ9p2kUi3Pi1uwRhKWN4rsAG",
  "key10": "4ggbaNZeVtPX1XZAX3Wn2ZevRfrooJRLDnUMgiNtrHXpPASqYqkdbcgBe3xf5Xc2PjM4tuywyoiKqLQseQEvHdpG",
  "key11": "KeMsU9TgvL3y5tz6GgzHpAHPw9p3XYGXXcVEDxryRisKugvTdggZxqhMofZXg6kSHVkkoGwzTCgCsRNdfxDWGzY",
  "key12": "5A4uRQh1odhtHkGnuqKvCtwQQ8tFGgFnHZGLrw7cnJnrG2wTEQdNoE991GJsCjcBq3LFYLxpEmZXd7kyonD3AgkV",
  "key13": "5GPdj7mJgwPs3HuDmmN8BGkxmWJ59wVhZ9qHSb24khAsya7NPA2qwhc6mnSEMqosrczJQpaoK9azjbpycfFV7SEE",
  "key14": "BR58ii88KgmpwgswobWNM2LsoMShEpwPkHE9EJ6oXN6Ftgmm2UtzwoYZZw4yLZkJfxFrgBdtDA5ocUbUhYDMD5Q",
  "key15": "54cmvdYK6hG4E8VWfLanMvCjUMhru42xDqT7SYQz3qukjCGvmEpdxGLPYBPmvRvjnS9ibguJgzua9UcWck15hjSQ",
  "key16": "47psQbjszyEmrSmj1kr8QNHN4ngpRTHYyGESAdSBpTVpCySKgpBhtYMvzPSVk6FM6AM3FwFmmEvG5EYzvHnKCm3",
  "key17": "5jKistQCrEho3LFGjXh3qyJqaebRd34oxKsabpAizJYRZz92icqcJxBaHTnPsrgzKN4ytzbAxkLpkmyDM5nVR6Yo",
  "key18": "5Xy3XS1kdyyWDVA2fsHYTanF2wc7ceqFoCp5LGBirVWSRz6h9K46weUQnfxVosJcN8bB7PQ2ov6dNFQhdTGHnsz",
  "key19": "ZJfEdtUFn1HCcpKDXVgxfPLYNqn1v6VHizhXQiDa6ATfnTDhftzocbRntdXrXfMUgER8bvniYoLAM2RwXqrXs6k",
  "key20": "4WDLz9msDFmxUQLQU6UCrZxm1YoNXsBXXq4c8EhEjxhuvaDoKS1FmapwjvV29wDdAQAJZz518Nx6dPHytL5cLPbm",
  "key21": "3MoHNSijfg9zUXDoxxCZ4dYnAfxVNogdCMABhzRoTP7MzmdNhGvDk4Pk18QmSNgwV4B6WPSRpNPd8MZH8c9T7CQ8",
  "key22": "34fDH1yr7vM9nKDqTAZWU5GmLTThPecVUEpnYcYecdy9tgFAAtYwhsJBPSQh9FBdSY9PLyGErWPtET7ppaP3KW9q",
  "key23": "2dhrU5ZdjzgcEhuE8EAew7rDTniV8LwEnuEvoU26czYhH8NtX4xVrvcnvDyiydHtn9WB4ZyyR1L6rijzdD6bmTnd",
  "key24": "5AD6Rg3F3BkCPEyrPgrzYUmHVEr2bTiwDYQ73bSW8Z4qUu1ag9gqHvfqr9tiieVuLFoScSCvSqyuGRLeLbacLMJZ",
  "key25": "3zqdoFu1jcT3WdjoP5AL1jsLEycCfTN18cv2ULu56HcbYbbXQjLnZJc2KLeB619bqgZT9tj51rftzUiyMM2e412Z",
  "key26": "SDFya6smDV3y3H14RQ5nR5XgRkuGT5dYq9n4d1bKHapW35MSg8Prro8s85ry4HbKjyWowsBdDo7hopSCX19mk2r",
  "key27": "3wjDQkqjUCfkMKZQo7uKwb5L186XGVkneagNLckLYVQ393AkT51KSQQND9Mfg4DdYoVVs8LsnMRkSsFUkrFxeWcP",
  "key28": "5Kf7fLQg8awTq9J6Ynod8LNXyn3aUgz2xEvoUuyDHyLGduVfikPycXZFLSLrmVjWB6meJDKJ1v7BCVmEH3fBw4us",
  "key29": "3GDsJjKLAhkv9LoS6ZoHRVsyN1W3ZiA94kdqGodTgL2gekn5NtkuyaMLVZnRg4qcmqmTbfBAk4NYMRCssvFczoq8",
  "key30": "2dyMm3nZoPV2VC2Bfw9xYpUS6jz6eXBjXXo75zP8z49FM3FD83QnTBRfKy4ypEonChZaUdKWutCUFyCdqdsKbTzY",
  "key31": "ccPNvHa8ebVgk7bnvgZTiyRUoQQWzVbTqAXJfbpbfBBGNBS3RYWwwG1fZ7UHgc4Vip3KkQ7jusmpRuNxdKQEfyo",
  "key32": "4zeFPVNQntuSMDhiR7CE6xwprid86Y2M4fiENW1CJZibFu8LaubzTVnocNhEZcsxmxEd1WMfhR4d6sHVbvhvuNUc",
  "key33": "42y1fnLpkVfBa7ZosxRmZeA9RjsqqZHuTy5QMD8vqFJ9dv4scVf15gUGHwQz7zADGgS3GuBG5RQ5JZAgr5Jv1U5E",
  "key34": "L94HqcW56axzYiDq5oWbU49hC7Hq5qGKzYQxLLtDKPDvmVmzbHoHzNfZrW6F4FbaGjQV6Xuyze5QYZjAq1C8CaR",
  "key35": "PcqrUTFPjt9NnQiJu5T4FWoFjCQcC6seA7DLPacsmsgSX4akThzJLChj8FXN7qswBqhj9hmqaQcSQMQr1bwDN1r",
  "key36": "2e3PLWBZtEZ5oppriTCKTAJSNbJ1HfH1fh9owzpGTyFhMosLBC7ScHBVLHB6ZxqtokxspRNUV8t5AQkv7tZyJLAR",
  "key37": "39ZvKYmYzstqLewENgGUwiUDmac4ApGWnwiZhrT9ExrhNpZyrGeuH3FY2E8fgTtrYZ7hT98kf9WjPZNuZ7igLN9z",
  "key38": "2fS2X2xo5Gr1m55Yu9YfmRXKzJVygSB8pXes8ZVu4i7eDzBw3Nntbz4j825ZSDcFytVscU4vrVh5jh6TXNRpWXWZ",
  "key39": "381C3fgQWUFZABuRUFbtPuXn9vnsn51xVsmMppH9ccTecfHLkEfhUeCW1HWaQ3s4Jo9izvn38QmWG82BZioAyGQY",
  "key40": "4VJje3i8Y2FKmECHqFndQSXWkgA3SUW2kwrBac39U7NmQNqtRitd7sXYeH6SnF4Y3Gu5H7thxAVKJmhxvz1BFsGf",
  "key41": "2p4UoarYyjXLuuMkGaJEdRAQenoMW8DHWCyR9r7qhaEn8C8K4dq4wK2iryF9PpRTXTgN5qQDM4vpwHYHbPFMm2GQ"
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
