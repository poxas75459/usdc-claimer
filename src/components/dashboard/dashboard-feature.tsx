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
    "3F7xbEG74y7xiUhd1j9qnvdYZfhMPG6ayD4UEdwayruSCufAMy4iuGo4hnu4LxwjpJBoQGUjk7PZtzSmY5zkS5AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awEApt9DefBETv25UvAwboKjsqknZwSDHGjAh4GN6LrhiXu7aU2xiqEshiJvZjj5Pq8quhdeMcaQhaWD64JArpD",
  "key1": "5mGCiWk6wMbx5n2D64QkHKZet2os2bfi3TAf1GiXxMCerUawMfLWsfMerxCKRmLzxSFanEhzvxMeuAy3SM6kfHUL",
  "key2": "F7oYGYfG2VuASSAzyJaE4GKTcFC17SXKZgTUPCjNKfzTJNB65Seq9HMNoMbYB24HY5oDoyTpX7bKmcbtPzdbMRe",
  "key3": "2TjTex48s1JQBY4Y2kdvabMhLxyS82FxLw3RNgErAkRmcA7XXxMrcsedNJy5yt6zgghQMvaGPEV1NPS38YUfTDto",
  "key4": "5UFswpu17QhqenZzFkoL61DdZVJf6u2vWK9kTS3SGHXLwmZ3s4YxNGCsJGkjE1YgbEWhsGezHyhF1FBkiPxxB5DW",
  "key5": "iGus6TdGqA6NbqaP4FhxQLg5cjxtikmPEauoog1F23qRQJDLG3KkrM8Xw6vnvEhFsP5Kvg4WihcMfkY2Fw1g4Rf",
  "key6": "3EE5sNj58ExymrqP79Dgr7nKeA1q5sHkNzYS9bgooWnt7cbmb88hZHTGbpH5XSzTZRRd33azd1TVgN3GyoFCdRHA",
  "key7": "8jr9ADay548hnwRUbCvENtL1k5JdZh4YoiuTo1uoF3Py27QUpRCpsXhrUu9NTMkSftZ4mpPf4GPAWexMvZy49ZY",
  "key8": "X6ewjYWLnQY3hWFsx4FNMZtKBwia8yHCP5ChRFhdQ7rYx7R7cF5xMC2QTXe7Wbp4zqt8o7scQ5YqwESKzFQKaRm",
  "key9": "2UTnf5svN6JDTKW8TXnAiYF3hLNkmU3W3zNspBK8av5gKeh7H7UZxe4m2x834Sj22TVQV7wChaXVMmko4J4oNj8F",
  "key10": "4xy6Y93yLpYrccP7TiNGVvhb8g1f878VbbZ8UWmSeYfHqq4KkJMdG3eGLc9W7MqX9cNyE716diTWNx2Fr7H8pGiX",
  "key11": "4QgWNAWe7kwqhNz2D6aehcsHJP2pqnFrUBQbo3mm1E8xyh8rEepQ19GYqXgEbukHVzotwGukgbCUh1tgoAmQDS87",
  "key12": "5AEoEv5qG6vU2B5heHG78hBNZpcNK4sdQ3KVbuxmUyjBaJ1TPJNw86qMLJXosGYfQNZZBuY9E8v5qkbvkwak8yqf",
  "key13": "ufjGeqP2bfdEijBCgs45hAAqjEPiGCbvThVbpYH4xzuMDqvSKVW6to2L3r2PR5Q5nXdQct7aok9w1mZfaRjPkEZ",
  "key14": "2SobcSNsVs6eXRuq8iD6G7Pu2bvzM3y4WPCmUgmvrBS8Ck7AwjxX7482TJynhQKFZx2h2TwAC6yA7RfMStipgg69",
  "key15": "3cPFce8FZHZD4q11WRBf7M8T1vkt4rxiNbubbnthyuqw6ro2tmBptxSx5J7jKJrWQN6gnnJ5zFidygEP5WGyq34b",
  "key16": "4TX8izKEXdAyVbgmLxrC6yyd7bYzViwsJHkkhuLU6DFM8zzYNeQxZCiDFXFGq5jAV2de3FH56XLYgSRqzjtMHw7W",
  "key17": "2ndQHEyAAaHSDGppuMLi3XF7uSpm8ArsuqeqcF2Mn76TwBHQPzwMqQhWAXGr3Eupj8espXFsSBmGqY1L5AMTBYL",
  "key18": "5HiSjyv4ezCF5RexoWeuKuhgeVCdKFcbNChWH1KyW6z3Lyvb3ApAQNSYx9TMfjj5aENZYEozZ7FUExDF21Z8Lonf",
  "key19": "5Mqu8h5wvJ7vgW14tuu7V6RyQqdabWGq3N5FZfMH5gRZBni9jGEkdR1tBQwrTcXicEprTi9rcBMRFo6iFb8NJ2FU",
  "key20": "4yz8kSZPX54nuuUjAzVz2mqYyEAJZzj946FfepGTEWFy9XEGUSJnaR4ESp3qohsCyx3p4m5YLeNhSsnM5x3hHrNV",
  "key21": "4v3iN8pr97t2XjvDLxy2V9N8569751htxaxzrVr25yoE48WX7f675wKau6AjhPgzgMhLsjr6SNN2Vr3mQEbQ9XmP",
  "key22": "3Uuu2mAFxEjw6JyzijfHVCoVtNromMuZMidX6qYW6VYbpjMkTsaGLDQLLAuBb8o7qC3z12eg9NVou1nVvuNQSkV1",
  "key23": "2LQ1aaaTBpnjBKyL4U1svD77XEeGZSVd2APjgWskT3o1HyogsfUc1EnmqQwUYCDH5hy6qt8HbHT3ERX3ebAYsVAC",
  "key24": "3ttuVdtGcprqdFAAfeypeyKf7yFoJYbzhQhFXeqwMvc4xYMf86vha7FTPN1P9mfBrxwgsvRXxe3R9P2p3y5oDBtN",
  "key25": "EuY5U6LRSihjWVwJp3GMm522WyXKC2Xh8YtgKKjbxE9MxMn2Yt1VaHRGRPurk9KHjyHMGVuB6z6ovVEAiFCVV4T",
  "key26": "2yvKR54BuQdMRi67kmuz6Pq936XH73WQdzd6AkozzxBxZHotxxSUHeKxYHLaDetzPpaATaK33noqacK869FpPj8J",
  "key27": "2MAKbnTzDZYS34w6c2gut12RFK63FZ9wKDxRLFSbMSDMccRRZZjVvKLRBQpFTRYknew3wQxFijg6va2xLQL2bTX9",
  "key28": "5TB8E3QvrEM4cxtAEe8PESKzGCJCFEypxzMsSfBR9dZBwXTH3pP1Z3oaKw4AWsZct7q91iCmRZbCfxpXiBTVSu9q",
  "key29": "bQtrkr4fFGPZtt4VUyfUyJHst7kB3wqXhPun2e1qd2DJExy9c4J68rrwoU6xxRrfFsNEu9R2wy9N4fQttrBQ7mA",
  "key30": "3h12NKBXBjjQ7ydidMWA6din3scu1Wjb492mpybyb8HPsbBJxD2UyCvCjsYQnM8oDfgWNGdmPeL9wR6Wyi7n9x6k",
  "key31": "azWziW6egivGuDdShaWxxTjgT7UFn99osihPsr9pxDXBng7x4FCLinDVTQBYSyoobKM7PbpjWfuzagQjJbQcNfR",
  "key32": "hYgDbo4SasThQ3jPMcDxk2VB5KgxSSyJ7aVu97zZUwJDC8PMssAqNLQAckJARxhZuuXf7fp9QuExBffGQJiJCGJ",
  "key33": "3xamozY19yWvTyjuUsbwv5HSmAuavMYybGHp9tjDkPGBpHCCUaaE1irmdiQd89AHKmowQvsXN16iwucTrbEkHtqQ",
  "key34": "mnBUiQny8nzqDwHiKUtuqXUDvqdtGrBmgqpGYL9xswqmSEFzWippyWspZNR6myNZHUevdZENvDVTuhpo7M3zffp",
  "key35": "2BJdwS6fLEDnRv8WURiKgM1uuq8ZpiUMuKfspmr5n8CCFdJhCRooBjy2uGE8pyFAgV2Ni3kscc2RrEEiYfrdd7ps",
  "key36": "3TEVhgR8rsc86BVqUyDb5KB9THLeHfpJgrNF9MmWW8j8HccchWnJDP4qtmxwDyVVQZbd3oZ1Stiget2CPcyExkWY"
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
