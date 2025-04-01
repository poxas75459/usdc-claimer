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
    "5uWBk3Q77fFqNRLLt3a5Vk28XRY4swUCaxwJ6CTjTGPfmon9KfGM5d9r76VqXbXKaCBoQbAUxq7tas4Lsv371qKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bEMjzN9mQKwcY3KXbT3KvPZSKj9A6xSmosEBmX48auqLwvCb42N1zPi1EpCepTEYStmDyu5768S1AtmWxcMeLza",
  "key1": "4c88WsNxZ4vyoGxxtejwkijKk8kjaysRZdBERCJqSgKqbymssg7f1kRLoVHRb7F9pC5R1ctrh2EVNvDNPeQJx3kP",
  "key2": "5333Pu2EeRbChdc7cSxLbkZ2vQNcK6MWVFMHpdqeSHFeAQaug4qXpdxM9CPL6ejez3xf1h7WuMHJtxDPxGx2KoLm",
  "key3": "5xMuShuBBj1LFaq8nbL51m1EdJDnWNUPVpyqgX1TuadqEcgctVP3TYiSXw1cTduTPv9uGGgMPHEbMAyCjqEToKgA",
  "key4": "2d2xQxxA3UwH3XStLWTZWKcwt4HjLaZfoeEGr6T87LMyyT2auyNNWstJRwZU1PfyQZEESb1yZbABTh7DGT9wBzYt",
  "key5": "4SfAgN2Sugs6UVytT9rme5ngibeLmzduLhEETNheToRHpahNK4oxa4PouGihhVgtn9XdpuFaKL5Gf9vdjMc6X4fF",
  "key6": "5hG3G37f9K6TFMEwYoGYgP17SPwf7wXmwHvzBCJ5E9VYVNkf4zbKj9vpiaV1wfe9WJD8vZJRVro2eWoiW2wMnjet",
  "key7": "VeJcMsmh5gxLR2H6FBrxFwwbj8MupDFX51HY8jDN1XiuHnPE9wkjY7tmgDU3T15izyH7gkDWKTomHiom3hb4JiW",
  "key8": "5UMeSTDdgFzNPLL2kQG46wXL6R9CPr7Gq2tTNzQuWqNT8shM4ttvCv55HapKUadmZVaGqyNNz8wbSDiAcvcsVYAu",
  "key9": "4wZ53c6sor3z5dUyDtShufu83tnzTQDH1khReq2dqHnNk7HpFwceDLQ9LSrCuQhQtuCkz54BDKaPs6PuNQbY5piB",
  "key10": "3Kc44FFiZkcxQDapmfNH8LsyKbKo1yjZKR8AuTMHtZCYoL3YNJtoP8N67DHMtiJcj4X8H1MNQvZbknhWHW72S9wd",
  "key11": "4HXVUk1GsgTFaP4r3BTQiNGacGSFn3d2W45yym3XLmna62QJ4iNgguhYonqB23xj2bnYdQaazf41vTkrEopCL7cW",
  "key12": "4ERAmAwFw8nVSzbkkggy7Ps2yjBjxBAEpny42jPzDYjXamwMnmRiLZTUtaZ7vCrSaX9VFG4sWE7PS8uphmZciTQY",
  "key13": "4gKcABMk6SsCwmrcYepd4X1VTxwJDQB9SiDEZYQF5TZh4L4h8K26DR6WwJy8NQB1fwXF5hPszGXPjqfqhQWZRQnL",
  "key14": "5Nt6xEGNr1RhFBREYoDnEexeUUawYyK2X5rgwmC5QRh6KUnAaWedj5pJ3yiu8XGaovcZWo7ePAe3giacbrZJebRH",
  "key15": "ivrrSvCficP7m7v4BVWMNpfuBk5DSHAHNnTyajKrkpyT7skoCCwVDHTmuSwogwtcrkwmqCgbbo762YzqCyAxKu9",
  "key16": "3x7hqwrCxNSR36M4xgjUkoJhgxdunCc2bVkixqmkzWWML3q8nQSaux3pTP69fKwWEujuTqjM3WNwfHHhYrogQX14",
  "key17": "2zMqewxbUeBZdJBTdBRbsoQQYFuW2GpwyTgvQtmLjsF4yMmTByb4aLTsfM3LbF7hCqszATAZ9eHpGT3TYHHG3x2B",
  "key18": "4rCLUEMREDEJWVjETo5Pb72WYuFjtAGxUfBzZZBAdRaG1i4xnuZLnQiJUGvar7sZ8f7xK6TCTvDirpf3Fk2LbdAZ",
  "key19": "e8wLYkZcNDmrVUdjDiTo1xgkVZg2bpQtTLg2hiVA5NPv1cWnL7JRAMvDj2kmpS7Gn5sATCaFftbSLfsdFKLnBxc",
  "key20": "39YEfzoW3nenxYFY1X7x57UTE4UeUGvkYF1RZjCuYdBPejdD99rtPLZqLocjEedupr7qS3uPSJ6MmwYZ14iVanbn",
  "key21": "4CHKxDTaP6oukeS5JMib4GqAakYmsCqms5s1w3eeN13bGuceqJqQpKbH8TRyafVes2Ff19DVSrBHoS8fqabZAyr1",
  "key22": "4gHCDhwChUqPeuqAJURRqacURynFAq3yy6rhj4WQHEvNsdqt9zxmgJuAkWuU7n6jzjN5bbjfAbsLXiyaLzWJeWjA",
  "key23": "3bQrrH6mgf9v1tZyiU9o2myuXG8sbNwejdgQHGL8nZNSvL7ymCtdkKwsfiLLGFEcwA8W5xJhaqPyERnM6zf9hsoE",
  "key24": "3buY4kDK8m43gQ3rh5x3ExtzEN9EkDWVbgeXPCihDSY2pankHPi4BhHAxswWLtc1N9ukSpvKw8ZQ6WL7ZjYNYenm",
  "key25": "5braTgvhM2zrdjbb1L6whYmVnm62U8FaiAi7D7YVeucUZvJNtafvy2YBbjJc1REMgf3M6DWPtN63NDrSqJXYeppc",
  "key26": "5kwXedQCwS9HmiS9Kr6LcwCt6Fr3DCG6maictXyMgJqL4aMmdrEPZhgWuN5KyiyQDYGEa84cLsWVzZb6TrCUTYdc",
  "key27": "3kY7m4yWGKie46PwFMXJZjM8sj9dnahQaTKuDLJVMzkTeMgphsCNHprDvX7SPv6fU9JHppuCLUEtj3Q5Lh5rCSBq",
  "key28": "2rwMeKcrccjV8UMiT5CJLVLH9MGwGt3dZMLTbgExNzgSLNmGYiHfJRey7xd6CmfY515FBktS96iS4EVSdwNRomzy",
  "key29": "4F6qbT5nShzWxhWcJApjueeute9KifanLcRvFs9MWYisEgyGEoJQNxBfSAxpafcqsJobA5dAJQZMfYD1NqmDv25Z",
  "key30": "4pNP4JbVGWEHGiWfKk9RaRioF2TDjJgwcuEFim3ZzPBo5RMapbqZpGU6UXvxSdgupXpugjwBGHVYVqfKhHNgBY2E",
  "key31": "2wJ9ytoifvQqFJzJsmpjBtxQvzXoJk3eABUL6VYuoA98mSRhmBWopg4ah2tGf5AKuZLcQPUBmGhWWnpuntkNCAz3",
  "key32": "5XnGxXCBGTr2tvPJjd9fMwiHaQNAB1yj9RWPymWvixso1KAEaANTquZNgi9pbnDayuaqNFiyGAtjiZQaZDkX1wA6",
  "key33": "2sn1qvmqvvWA3kbk3e5TAJYDBirUvRpydiPjMfzTCTzeWAxYgVnUH6XAWwTBzaUY64SSQmtkWtbeKaojUrzft6Z",
  "key34": "35UfjcJcBB37MWbyyzk6PXJGkPwo6GBLoavEnYaQRdty5W6PF4F8MmVSH4xaAFnkK46ACGy7zpcJYuvDPGMEhP8j",
  "key35": "65bnfgVsMJBJ6Tuqu8CCwZAVDqbAJf8LwGj4xDHShSrnzNFzvWjFjPPch44q5rqfNiuquaQpsQgLGAz6qF9gkgLa",
  "key36": "3JrpNWPJjBKd9Fob3NiYEDkxbuHB1z5XWKjVE9wg4wpdZ5guMYpjjJ1spMwTN7DX6WAXHrLv2ehsfXnENjY9nR2L",
  "key37": "4K7qa8dhgtaNLKtiQ6t5MCmCJFi2cG897whY8fSuiHTgvfyvKBfMCgNoXh751VDRaxgUaz215tDQqnRLzGJYLPRB",
  "key38": "8ji631bkwEiiB4jFHj7egkqzvYjEM9AqA9igDYuKzYW1fgZFiP5i2HRfM1vypfey3UisnBJj76N5hM2WB7ZnmgT",
  "key39": "2zkA4WCyGatTDvdTuVJQfNZmkZeiaDCBxmchxgRMcAoCc2pB7rSsgQCmLi5J1HtTo2yJtW2wLCBZiYF5UXHCMLJt",
  "key40": "2PKYGaAi4A5BhZayuFXsxuqF4rrMtKuDHjzDn1wRn6qPgZNn24kfJvKdPg77HBxH9UuhLqhaLqtDgQFCAFUMemFb",
  "key41": "3LzsV4myKBn6o3sL2XdAfQ4bh4NUSs4viFJViyMKMUTAoUYJ7CB2vh7EipmrR2d8JRv6X7RYT5ngmRG84SLxu2q3",
  "key42": "51BbDX37NZ64XEoxYBeXivTpqkqpaBXt3knaWXpayNraXZwvUQLNvEXBfN1tKv33Pep6KMvpXctQ12KggEVFTAZV",
  "key43": "4yiJCug2GJhf5o4kKgTtp5gh5WQT4awUeExoeL1ZsckQFcqUGURzQNaccdJiHuq7469TziheZo7yKTp3ou7i9Pq5",
  "key44": "54CvNA7q2jtdfXFQbhyMC8eYQLPBMQ7QGwcC51A56KSf46gPqYaGX6u8jdd1mGetKbMnvqRooqZiBJmesU8HnBQJ",
  "key45": "5L5akCi5vp7qCXzF6jdJ4YiGFG69Ws5BzrHxRHBghYpf3T9Xsbq4XjMA9AqoavqMGgwzejPWxRYM9D97GK8C5CbP",
  "key46": "2NDXz95NZUTE2Ycs4SNFzDsfjgRHozzVroy4b6x3DcL6PBqqM6zensrbdjjudfmQNUMzdKFm39gPuJyjT6pZumPT",
  "key47": "373X8U7vqE8BKC3og2JD9QvAKb7jabUjx3LCN4ukyS2xzSbtkjmCT3abpgtZr5YMPQNGntA8femd7LsWCNmW8Zbn",
  "key48": "42L1RvA3oBfjPSha6bpyLKPsvAFgtzHUYQ6AaGcZaKekqdQ4G8gT2Z7E4m5XDexJDwMHyJ8CPn1EH5BtZBbhUTo3"
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
