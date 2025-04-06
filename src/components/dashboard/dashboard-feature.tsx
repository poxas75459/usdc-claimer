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
    "3B85ebf99pZeB6HuXV9bqh4gVbZ9PEj21JCom1nRCM4uSbpnr5Kwon9r9ZJMxjxpmkLLGqA5x7E6z5jx4toLUaad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMJxrAPdi6CF6tsQGTpBshPrZPMyEKCVXpTyuu4YNEvHg2qqPu9xdzetvcfJHtfi66xSSU8hvU5nomcaNHNVwHe",
  "key1": "54WEBCGVCSWGigzsrqnu31QGRUHUqzHQEBwaUGXLWEwkD412oeJUDoro9VZ6sFXbf8tueyKsk2vfBQuxAhfJ46UB",
  "key2": "49bURddah1mM6AsGtL2xF7XhPFWG2Y7Mcr6tTLMc6JQFxBR3G5GESJCSt3LYhiJMQrbRH2tmXAV6pC96az3BXXWW",
  "key3": "1KRtT3G3Pngj9RMmM97mePKyL5wzEJt3tbnsEyrqb8SgR9BBV1RHAv1LUqmf3TQm3ibd8qjRPD5Gt1zG8ouCXf1",
  "key4": "vKWqxF2W22dQ3Fe4uC3DzZpXivSQUBDyXfYFWPY6HjcPtovy9SSb4EZqV1zvfVoVNXg7McDKd9QhFFKVi3jt8Sy",
  "key5": "3MnnCAFn2gxkHati4AXT2WQVw4bidcKiSTiwMmDNKt48B9k4sAemXFf8TmrLf6uaizRoYEWrXeg9oFcoNyKvDRFW",
  "key6": "2dskss4Eyd5S6DF4qA7xb2qqmzq7q6foJMVR2ncPZiXAEUNh7stwbGjZxtSGeM4vW4fuSRAmz1wnw3B88QRvb3Vi",
  "key7": "2U5uDSEztpA2G8cvpHTEUPhboEMXF2MCsvpT4Q7goqJQgVLFTMbs4ZnsJRTLVyyJcL8XmprGosbRNZAnedA51asU",
  "key8": "5tbo5i8djS8i1KbHVJv5MoL2HaByUmztZo1N9hL9Fd74ZiTTnRmMLiW3s7hV1FKzSH5XnD52w1qY9BKQjuCBZD3z",
  "key9": "5o4qGCiXz6VX9jEhcLMDjG3XiD1NGStWobZSPzaXe8eAfAaaparvrMEEBu8VS1QEfzEaabnfTXQUyXi2okXsjSNM",
  "key10": "nxTTXxpAp2ERRvkDvdXUaQeHF14WW5tiemUZ3XhQoJTXfUSX97r4KEgyBDBvqfFVZfvWS2D64x68ae8C7RuAaH4",
  "key11": "4WpRGxpvDi36zfYT6hP7Lg8iTqALK4b5JsquR87NTGdayotGuKT14L9FG3pR762JbRfvjhTTuKEyzksMw3tqdXaX",
  "key12": "4BR6eccweVTnduGawyokoN1T3H8oGGa191PzybeYrJHv731Uu7bVjfAC3T31JhPUvt2UUthxCTbrvKR4TbprAWtu",
  "key13": "3kAubdkGwjzKvJRQesLoKo5rDZtxJjC3BNxiBERs7QR2cm16LPR33cqwXWvsNsc5hY19eLacMzfnJMM1ZrcYgH5M",
  "key14": "5PyYBHjCt7y5VNV9iEDW67MX9kEKtz8vK6MzjxGHBVC2XEXJ1nBJMyjW12jEYyw2GZjx2gGNYEfdMGFtfbgapxQG",
  "key15": "3L25ja3EDY5SPGqErjbaVDUmqvnzkMyx6tai9v1jiD9XYCqCa2JcYWnoUC2ZX7bsUGq28rCCSPoyvXznuxSWDWh8",
  "key16": "4EtZdZaP94VsVrcEwBnxSCYh7Z21TWKQc4ngQsWF6FVxFVkDEDb6o6zGusW7SBYbaXqLXLWsAPUDsnjn3mEN5dxp",
  "key17": "dD8DuhZoXyHAYhc5cjDsgfeZokJL5QRKMYRMSD5RnT6wDUS5tPPcuryNDWq6wXRptNFL8cWmsyyYbYNJKarGZm5",
  "key18": "3Z7iF7f3FGBQa36VYaa4cwzW6PDNUDUhudEYppHm9bE4ynfThuqpgi3c9JrkEvBi3gUGEv5pr9UNSWiWznu4Ur5G",
  "key19": "5p9Y1PgGkeJ9NmfVigvM3apFUNKMFuyXzNmrnE5cdCe3UBQ5pcVH5dbX6d7S8e256mu4FeHTpGcRFGjxBB2xJHRy",
  "key20": "F1ohb7UvW6MPAACviskwfSRBGQMnic25HiyqbJvioTBnJbMoMLW2BWdTjrZUUpuBuRnTKtcupTGnb5C3KhPEKmi",
  "key21": "4H3gE5C5QXgDUPtYuiLFRRsP7teoDNA2wGCQhnzj1cw7kSHLmFFb55zUrTUUNBjtLUzUG4KP3bsDxJKHCHcP9mep",
  "key22": "5xSEtSMvpKAVqCEFk4rGhdqNEcrfCwURNp2wdsb9sED9BNfjFeg9mLPHEtGeKUcth5ig7ERekNSdHPzPrFgsbqv",
  "key23": "4cmJSKTjBUpiFf7rnUxhTKRTWeXZJ5oNG8h7DYKG8L96mK9g64mUwMj37zhSq8nMWnTaAKjx9EQr3U14Bx66qkRX",
  "key24": "5m3vtrGE4ECisGhaGhHXsV9p8oUifRusTVq3oH1WNVzYLoGbrZ1VY3uinB1wfPisi8spVzGoqyTN6FGruj7ePpFG",
  "key25": "3TkfEFZf5MMv4h3CoTyeBZUvW3E6VghkSmPtqrowJoZN1bEJbaouxoFnLGg2HTMvd34KkSy1wpV7QLqoSY2oWbXz",
  "key26": "53tUVX25sVDGA9AqT2UtZskNyvo3Cu1jKgAbkws8rKAkHsd9c74ooSMDAoxNCUvGRY9i858MtiecxshbTmh4Xthv",
  "key27": "28zDebksPHNypvHuHhAPNtARK6dWgjE9CNjmpYwuY82fNyntrRJcDpxPGQQ7sfFAr9fpobatikkaCN2EBZqEwjzy",
  "key28": "4job41S6xi4c7Kfn126PeAGtoM4qpNuV4SRxPmuzeESSpBroDCeEaWNytPxgnmbe7gJcEXWebcnC1VQ3wCueiR1N",
  "key29": "23RWxMdK9T48UtMB58DXAWDNvPjZAfXzPh7ZTLXzTWvZci2ZFeZ5yUdyNuBqt22Z2Ry4A8QHUBoBXfXVkhyQZSmP",
  "key30": "4Q9Tua6V5Bn5pM9sx8PcYarNNJEnGYxPtWwJ5K5Vntq4XebH8kvGhS94TMZrYED7awzm5ufz25kuPZbYPKJYNSCP",
  "key31": "2T33sD3U2rTSqCLs9vA4TEXmFjx4ai6atHqSQvPkGjRZHcQhVSzmqGK9SSvEpeKDPgyXCSu9Rs3ATYZW8eAze3Zs",
  "key32": "3tB4a5DKjmQWJ16dWTPdMDCDPxnwiydtPvdbiGNrKLnk19GCyfhk25i9cBrNcyAHX6f6Z2PMDPv75vYnXDvqNmDc",
  "key33": "si72e8dYe3AgzoBe4JoSczsoexNtEFKx6FJvKC6g2ZUFbfdBWFhxGMGfX4KwcWqUguHjamu2qU9R9xL5RFqevbB",
  "key34": "4TPDhtRXG7GNKDrBKaCMcvF3jbzkyWnyD8WyJSTjbkXGFjkDGMLPQSj4YgC69oynPbGPPbKBL8zeGdHvL8kpiKgP",
  "key35": "2rf2cMzPbG5ZNPTMPLc3HRkiADYuGPRr4gJFp6YHxbvuJtgpmYYL1fqUjZF4Jfmw5WmAywEFYvmioNmHt5VZ1B1J",
  "key36": "4YowRhJX2MvaSLyeTgye6oVLTzh8X8bX3bLGryj5JJAAyPSo4zrhQ1V9rFMeeqR5DnQBUrsKgck7Gyep1ALataGg",
  "key37": "4BdaE2vz29oZ3EK9wtvp1XxmPPWRRzZaFmrijhkrXT1XXMtZgAfmPcbLcGT4NrDdsWkBguWh5XXT1aK4iJabxpaF",
  "key38": "CngZ8Vh4vueGK71hQ1GeE5nCkQfwsYXBJu37giLajTdg4oVyxknhYUsZtN8uThtn9M1bUYHNMDBy2PQn3ckhKCd",
  "key39": "o5YQi4rhLXajwDNhWkT2TP5qqS97QG2u98oUUAagCPKxV1T6mDHLtYyZ56SoX1uJqnediPRu5fmXsGF8AET8EBu"
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
