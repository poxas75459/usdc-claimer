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
    "5HHLUWq4ZFDiUTcyVQwt7YXM5MTzenN9KGB7Za2jgdi6PicjWaQ5majSpGTczuoZ9pXKCVUJYtK1pAo3F2zjNzQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "471ACz2u9rpkxJCXH6keaKMiDhURv57RtHTXrSRkKJ7ruZVD3Rm22pcneD36ZtGZdF3A9AV771Z3XggnDi6FoWRJ",
  "key1": "XSaXU4a3eqgGgsXBkFDRbgYABqJFiqSiXQeog9RpZVpdH9q5wi3xpCAjKmEbPX3aNKmzrYebkuFJFvmjYqzEkXT",
  "key2": "4KvYEd4K5C9nwDnu1qpusQ25q3R5e4aTEuU8oZzKz1jEEoSo2Rebc3BEfEhimpCS6zcvDmkf599Myn2aVHKkw9Hb",
  "key3": "S5AuTSAMfBdLMw53hhtYrC9KSmj7XPDfR4hYb4KSmBzBj91BRm7aeREmMGchcLY1AqyaTZneeyrnquRBXUXM7zB",
  "key4": "2CvNKa5zPYBbTo9tPwMhhTpBrVZdymxnBhTFjxGb2VHkoc2NbWJRFp6Shv3X85PRThR679e2pUQMQ5XX6tM9h37i",
  "key5": "5rG9JDyWKR8eePiZTKuCFsNbrb6MDLYPFgsXoWvTi6kbSsxZy1aoHXXahS2wiDWHQDGiWCswUicF7qBARgvkhKCX",
  "key6": "3cfvsH4DSYJYLEC7T5KTe262QzqcSnH7T4CxezC6mbgJuEwjLt6dDciAKaPq3aDrtNBBdevwgH8eMmdpQpiNeuZW",
  "key7": "2iPmsU9CDUGjUEUSMtWaWeJPMSCrr21RYbKjZnQubDW8b2f7j22MkSfvP463fq84TJfN1v1TVAT5kt3gj8ZCkqiS",
  "key8": "3hVJ6w5sytDU8NAG82BLhpSdRDCQH2F1A1DS2gJqnjfeXsJ1yurk8FpF2bwT7XkFyn7hVwcdnxAuYqDHWAN5Zabn",
  "key9": "2tifkzF2oyRNrttZje5gKaboppECZpbZeYBM4shJEyNzp8LdmssM8nrqw5YPjfVBAgKLW5THU3gcTzgNnhdJ9Mrj",
  "key10": "5WGeUwbfVbDGHetZhNq1MafNFKh98GPETeFSx2jhSeYJJRFkCqyCZbVMexVzGPt2LQ1MztFfkQ76pbwKfuoZx8gR",
  "key11": "n6Me7NLqVHVqgymGaYNN3xDU2pmVTjPcQHTUVgLzoF9GhBSZ1TeWkx9BuJ4yC87FSoqvyDoRXmkmeG3SJ8gTDw2",
  "key12": "3qbxS7An62iH9rYBi6Fdm2BgKLUpizypbu2trUBkYfG6cfEWeHRyBso4xtL59X3SfBrXwmqm27Hm68L9e4ypenfy",
  "key13": "5TnztTYgN63rpKdgRrYKJMcYNtk468Hs1bAQozZXJhTszcyNYRyMJpEmb91gGyN19V2YT4opwCnFez1SdBxVdiZg",
  "key14": "21Qbe8riJ1fCEFApwygwRmXkjdjHTsn26XDKTC4WJJQEUyfmGfYdwiy8VC8Tg7sMKNxMM5huH5hnysQNiReu1wmN",
  "key15": "38RfR48TXeUCcJjJoL95ZQ1QrgjrDeCS9XfutUQmsgCrWpEDcDJgvZwDFheK73rbpyRpxBtv7d1iPQs5Zr4RJF7q",
  "key16": "5aszN7vyfYonjh6FuveQp4gtFLb9QmRGGZhVavD3VQubepiUjJ3KUkj9MATbE3bizyvxzjHvZ1Ue8QC9tTDx3DrM",
  "key17": "61wtS2NGSTorkqn24WrxbzPN5rMgKMuV6kyNbkApG6boaueiLHUjuiNk9ByBon3zegkXJjt7U6L36RCpDTW5QhWX",
  "key18": "2MBnRCgkZ9koLDMdoEMc82zfQDecSPj8V3KVN4aPuvPekfS6P95EhrEm3ELQfQsUnz75bvFZrooTqv4MhfrfvqjG",
  "key19": "3SASy6p7av4o9efTfydvoufdfGcFMcuHndWiD4LkjF2BjrSu8N3k1kcCvJYBQSxBWDzep8C4JuhN8iXV5jEosnnJ",
  "key20": "2tNwHVTHYfmvbzy2Ud4NyLNvJa78i7Mckg8Jv1qxnNej6uk6ttt4g4w2dxyn1i2ajLGdm5BDxRjSaBce2nEipAJT",
  "key21": "LjJCoBFkx8mKfSztsxC61zkGCTBQCePbYpMPoUz2DP5R4K7Lm629X4njKyc6oZYA8N4hQq6aAufhjikViFgTwmc",
  "key22": "4hm95BCuWhtaMX1BKcyb78XZy6NdbH2nXtPahroNf5kdNmjo21TaUbV75gTYrr9ADkE4bJ3Yv4fmgAcoVEAurQs9",
  "key23": "2ccPZrQK6o1XnHiAjDe2Srbnf7btvpvvpCLArgeV447LAmsQJ6P3jEnsu825vcJetvCPhbZoH4nWN7ECk7dpRwC",
  "key24": "4X7vYjMPV5iAZ2e2VRNdUnz4nhkdp3kYBc2fgYc3VyQZDYaUNAaT52Pkj1HuPaduU33SSSFk6ysrUZvQ7ssnW2RC",
  "key25": "4YuukbB6KGcX3yDXhQCiLqM9iag1awU9WBsWPqBKwMwxM9NFpaztPXiQ5hXSmwkdbTf5iPNNzSCZcjXnWDKTiYgR",
  "key26": "5rYqDxSUM8MqH4LNcnFuRHajPQ6FbyNtcFkgxESNVD4Z7dyeNxUgYc9AF71EkpVPcNqXKjSipjTCn3FzxrrcfVm9",
  "key27": "4j2mPeArpQFmRHL6VMtnbgok9eNcQhA7NGCxNDGv6d9aCY4rHRQNwYuW7Jv7w8Aa2p4qRsSchtXGDVYs24yPG9RD",
  "key28": "57MpFJBau31i5NfR2VVpWivvQXBkrXZTaUowVHgNepAPic4n44Zuby5PAqS4T6s49LPiY6TZDd5zyy6Ex31fQ7mB",
  "key29": "3SUWmndNVbSJBCeqMbtuykftfwnJnTKQS4bDAmn71iGqwwCnBnLEwudhSfaTje25mhVpDBJiySSBuCnmdWzmF3QU",
  "key30": "4QjUTr6tRbXemCLTRrLJh9iibms7CCNMaKCyRDEPpt8JzhMwYMTS2wx67S2zbLEzxkwBW9UdMfH4SU9LGyqsFh5",
  "key31": "2QZAfNMSn24xsyq8SwmbJp3X6Qnu3Korz8TQfshZN1BPv7DjftGEXqfDnPjGXQTyeXUMX9cHrduJ8BZMpMPWo9Ba",
  "key32": "5PGiX597BAT21YyQNw4UjUdYSUQdh6bkDpfXi32YjaDz6Mwn5V9LQ3LmCkbVugc2u7MVyNS116SPhz5XAxVTF6Qh",
  "key33": "5ooLBVngFYJR2qVMui1eZVmfULJsuk5NmAPmMBURjevwjJ7ifvzJMHRup3wHccssZuWmPzRQbwvQaoHMu77ihurX",
  "key34": "zzbwFmtHz61zWyzmWfvmp9PTvqGPukm9kexJSo2J2M4b8egkmCgYsgPsnBozZUNreCrqjpW2oP5fj4YndDY6hk8",
  "key35": "2tCrmwRx3rNotNzKDUEQKsutd2jUWyLFrf6fK9sHA2Wb8gbehfNatbpyv7MMrc7WGDERfbnq5kVPzhgjM3aH9ZxS",
  "key36": "4FpoEwweHow1akPppLE2AQfkfScZZiHxTtvDejnEFyATGHCzBh2Vy8ErSTcDUJZKBj6Esu1n2Hko4U1zH5JgU3G6",
  "key37": "493xRifBok2j4JLYqMv9QpSpRDTvTUqZSMovkTgNzPu9bbW6Et4hNxUkmz7Veo223hNHo3hNcsBH4TpUg2PwengP",
  "key38": "4fXSdSCRZ6vbXQnoHZURHNd6TgPHX2yv5iHfq6Gp75FUsu2Vg49WaGptFDbioiK1fXpsyHXmzVbWNwUpQ35hQYfW",
  "key39": "N8XTTfrCsydQoKZYvsPa6AU37wzAb75VEnJUVVWC3HshmG17yfyRASCVWgsr6zS36ukjFKWmB5UpoQUyMEKNWSL",
  "key40": "2NPWt58eoPTrk1LPwmgWKHgyUFaRdqpVwZfU2WxGeh9toCRSmoEx2GFYA4KPf51pppJyCEh491M2MtqEPvi2jmoe",
  "key41": "48cX31p9yuof9uenjZntyH5zaibqwQ5HnR6Uzm9wJqqZ9aLAwxT7BKhFwbJFYUecDLGcMgonwL8135mxdT8Kea2",
  "key42": "2ypksALrbuFEBE4R4x1MQ6vSuQPMe8pRfTULxiZV2kp8cHmXRyRQnE35ZoW65nCPcEaCW3cBkGY5WHgKjgno8C7x",
  "key43": "3B4hfgwxPp2ShmknmRHALUGJCpbPxhZKQceLCmJo9vsutzjen5PKb6w1aWGgMVegu5ozW17SmvScx2LCDDXPPiwS",
  "key44": "ZV7dimZeDgrhD6heRw31LacVHMGULr91krphJo9bonZ23Gtudz48pcgKUpXYw2eE9KQDZUjyt8U19ogrwrdUZaT",
  "key45": "5dsH6TLBkYTJ4JhGBGeECyhsZsZZUnvT6DuWVhW1nemahEKCpQBftNQKSDwnnvd1HLgYk8j5UWrdeEp4J9ae1Gq7",
  "key46": "4V4MRro8YSCp2zKwqxGsi8d2uaDCw3hqeDFN2b6m3xkhguYDYufkLRDbFkJ6CosNh62hxMTApM5i3JZ1DuctsEjR",
  "key47": "2HcNFqFWWYuN6G3QFaswAWVvVq9hnnFR4rk1VFA5hpQ4RN1K4ZsiQfsaZpZuiFkp7eyNVPdCUwPCvwkeEfPZ9qvj"
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
