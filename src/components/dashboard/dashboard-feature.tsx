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
    "6YS6FG49cbP7JxEx9peHMjeRD7mWWEh4taUW8UJD9ZWuQVbz4mVXjuwXFh3ULzLd8ZLhDfACdHTKcmWrsE7kpVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvaotLnroEDXctfS7x7LW4nApdVXCmMTrGRcspJacEQH9B7stYMZH3vA5iKWjn8F1wWUj6vphPXqJBYnw7Zkyuw",
  "key1": "bQtSp8X93bJvsJmLsps8He5H5z5enXgHpNnwrJfiXoXNSScEKbVrZMFeTcZHULViT47MzUxo4n9wNqY9Ybspk3G",
  "key2": "FcRomw1M46mKzuH5fSwQt366DJjSfehLAtLWzgnz4GS8txVyPaEpDHwNuTufmK7Zm182toWiVy4aaJuCrEkyi93",
  "key3": "2ZPmRKbNTDEEwvWQmQBQN7YzJrj3t2o4hb83jvqgpD2efKaaaPWtt8dPSxC7gAjN6iG3opaLVMNgDZ5qvtkqhUch",
  "key4": "j5oXPJN88sux8P4V3bFpUZrmoZH6hhhaJ6d7bqSLfkWAnF2R1rtEk7xqXSQ3gC22EgpD8SRi21Uh8xGgRPvjMnC",
  "key5": "5WmDjDA188xHn7WPczpj3jdnLroWsN2vPJt2gnpPTPNx8uAevWWF2ejPkgSyZDw6Sceh5ZeqYJ4NFKXxYVfs7UPg",
  "key6": "5jeny1tsMVwh3pMXfPLqqHTfcZbKayQjyvdxWxMrdm4cQgU2MqEraEQPivsW21hdmYvN5K64tJ1yEriNQFBB5F1g",
  "key7": "4CAg3a4vWq4rGxUcW3BiqbKA853i39xsa6WhWbGY1tAchX5Fa8XTpR9sWYCgovCw8RsooLDhK2HF6tfCr564ZLYp",
  "key8": "2k86Bteyf1PJcFUqtCcRBzfPqWziAQeeZJGvWW62nLr3KQLY1spAMmsc7zUhNNM5w9XmmirJ1TkHLCHUJdTboMhJ",
  "key9": "4r68TLZfzirN59yjZxKeYfCLCr6kCmVkhwgftg1kyrAPg1D4wr8gxTucZdTzrx7XMrceWTpaRjxmQX2AD93meLt8",
  "key10": "2ywYDGonxAwHmb2vViR6BUhJPtmS9sqVS4qojmZihx7Ch3Tj2M2qopSRDNc8FFEknvt8BTb4oxNgeYRv6s4nekq3",
  "key11": "5LZtBBz1gdbbP15uFSZ7iT84JM8g2FFoib66micC6LbykGF7AFXVQQCziYcBDmvdWh5FMjRKANeALNBCsAXTrRnX",
  "key12": "4A9Sw5R3jWFWDE21qdaBr29hcQELT8Ud5iKTXbKWGKCGDZaMfN5qKziA4aDKJYDS1qjW4DCBaP6PkJse3KMUjHm9",
  "key13": "4w5aFegPRmnF9nUJFaVueudzgB4pGawGpLXPHw4wNo8LnDsh6Yygg3r3zBGzMUPSPoW9TvnCBz9Bs9oChsgRbkLD",
  "key14": "U4rzBcc6QqoJFTEiWSaKEsLckPKxTMjNvKUwFnN4zwvUmgY1paB2StZbFKE7EsSfC1aoLby1ifrSmyuEbXtLW3b",
  "key15": "4EGzrgNr3aEHpzqMjDS1ALtZERSzyGw6qT7pPyEYWxnhUeVZ2JLWVwbU7tBVJq8SF9T7Q9HYdpJjn35Xuq6te9iT",
  "key16": "2ZMYyWJriRpC8MUk4BDRGFuAkSapPRRmxqEAKqdt1qYW48spBcEtdsbpDivnchMPTkksAw4zVRZC88tdzm8N8nEU",
  "key17": "2pFaocNvUa9vTx2Zo9mrvhjh8CpkiYsfmaCMRePUE3rjDuUvM6o33HHrdjcmta2riPj6sYnsi9a5LJHytTQonDJr",
  "key18": "FKaspnh5FtTq4kWknMLLdesvm3VBE8tc4a5hBhEaF4yFVnGp2vu9Zb2TFeBBTBPZTbuWcWDhEzxwEBXCSX1vupd",
  "key19": "rawHRZC2DoQ4HcaBuP2WSmx1meMXNV6cGbCYYM2wQaq9e1j6n4gxxuS83a3UCCPedAsmZdQ2dhAJqMnpcCo7rop",
  "key20": "3S66ru6GNXXuGGEbvG4AetgR1QxevJ7UE6bew1DxNDGHEa79JZ6dbeTAcjLqAcJJB27BUK8GA1ky32R4jFNfPYGc",
  "key21": "253frY9RHvmgE5hZQwDrJVwqyRZtKwEZik3P2hDxyvLChmzsUHebPaKw9LLn6W8HPykKj5qHaT5BeexyvEV7oVW1",
  "key22": "5h6U5AdLnbMQgZWpzgX3EfJCiMUDK2PosbRXvHcRECUS8TCvyv5Dvt9VNQDdyNhxDZEDBMkNctiaLz2L3vvb4cw7",
  "key23": "2GWSaTMoxKNWZMv1sLKW4DxwgChCWEVSyUpCXRvT8PEdN8AAfNZBEcmAz3BCTUhPcPbwveXY7BsTuxX7P3nNrS2x",
  "key24": "5GqJMpUAfzCLPfjvHpA2w1AbfSmyYEt9LVJpro5WFtoJ9iFf41uePWmWXBK1Azuo6LkQmEcAM3eW7QhSWNkKzEL4",
  "key25": "nvCPd2iKNg7abshZdH9koPhMJRNF1RZ3hJeNhhxzT6qww7bYMgPEHG2zX9jEZHDGSEvaLeE1TK8eqakQ542mV3W",
  "key26": "4gYXhE39XRAFiRDWykFSWGd6JaFw1TFPSyVTYvS9bH8UdbsoYVe5MB4NFRhHSZUGjbao8Hfa1cbfHyuM2ybKKH8M",
  "key27": "2K18U58kTYkKeaocwopwGQiwAK4eajdEKAqU6afc1RksWdCC721gvyRXaX8c11ShtVoEQmgZgQ8Y6BNWPvsVPvxr",
  "key28": "HdrBSJoyWuAHVVzXfcTU2WVrzCjPbVkL9UP9F1VLUpqUtCcfNsB23ZxMevkNLKasdFXE9GQVqGraEn4UjqeuNKi",
  "key29": "2uGyYEdW4rJCDMn9KdQEKHV4U9Y6RRJC3Lhojb7sMsPCbPzznNsWJMVgwnUNcYvybPgP3Sic71r2tEwQiH9Pdo6R",
  "key30": "47DugAtKvTdv7PPYmdYS2mWSZ91HxnsjuHLcYWmSMab39tUoRKsjY7VEdQMqsuWgtYE1Xb816Ad2yqtPJDBpiAXY",
  "key31": "4pLeXe6o1yGRLBGBZroZjWrvgRLmiFXn2mvBRcDVTXg1BBJVyahMTsQFgqjZna3vihNut6FdKYRsX1AkhWDSq415",
  "key32": "2WS6Wt8asYdRikmTFRvNMgXJK3jTZyuMqPUR4VCL2mZB5ZAinmBpEGpaXdmmy979ttLWiS4QDFsFwjHCqP6oqFFj",
  "key33": "4gLaCq6yxqEnYKHKHDfEzkyG3f6omBXr7KM7PgRw7tE77S1Aj5Vth14TakMCVseyLvqwRfM3p293NsLWqRcU8Aq4",
  "key34": "2GytTXnMGRhNKadksCkeJVrAxpbe6T8SNni1fWdSCGpC9CfvJ4gPrNj6Exdh712ZhpKNdh7twL7fiLefq9EA2C3y",
  "key35": "2fLwykFEV33KtY2g9V2j3PFEjFjTVL4BiqtRrxRbULuK9TeEj9LqYtTo16i1xX54vjENWx2SqiLDs8jWfqdsGnYp",
  "key36": "a3WLBiszwYTkWLeF9cMktVMdjVzq3stYrnTMDLAD6kPVwyQ7hG7DBns9WVwp14Db2fdbthGAKysRkFXhvQCNayp",
  "key37": "4v6RPv1JgLHVXCzCf6G5UkQf747A8wkmArRJ5e2RKkJGXYW3Q5FST6dmLT6UNMoUxW4YPknUjAQHJWXgCEr7DbzK",
  "key38": "2M3DPQ3FkFZuX9rCCZ47oJ3QD14sUSGduND1WWkGnTWtuLWXSbgXXNoU2qd8vh2BaoQJ3zapvTtUkEETKhrB9GqS",
  "key39": "3f4C8wFyo1Xb9LNK7TnMCNfjvu7S9MkPu1zN6E4vcveAipyfMCm1Gx7UQ7D4tveTHZq3xpHv4sah7cvdRxmvZ8Q7",
  "key40": "2vRc2De9C3WunrLQ2LpswwYYDWBkcnFRAn9HWFvpArLNAMUK7NUrqPCkHxyARo5AY14aLABU4EgZCnhnFuEj4CxE",
  "key41": "5zp5hiiMf1C2CQzitdJoWFW341wpivxrUmUzTMxxUDtvTrbHU7uzWu2ngD2PBdn2AVgX2URpSi8Teu17MQJw9Zma",
  "key42": "A5tQQb8DGv8RJyCtuu3C6sKda7B3A1tBFhdkJZ3z8YmJL3nahiXSxxRx4xwYTGSScL2pQLi3Top3VzCg4jTrNzm",
  "key43": "kqEmWCh494jojtc6CTTkk8chAZwa7bjjN3WjNaB8gA32rshFgNQGTm2WaFTtBAtV1QLdugqHLkeVDhNwMBf4Hmj",
  "key44": "3GBHHQnZneo2ai6Baay8ydcEh3TX2VCJGn7cNYGeVUsXhe2Ch8cyUS7XH7ExMDqqhAgHKxTreDSzH2XTuhNXLQHp",
  "key45": "2MS5SJRaWiSV44C6FDYH9XTMxmBgbSwLEEQGKKRMDUHKYVLBSbFs2zdMomrWkC52vEDLQ2DbPU8NXqQ2VXYPEdQ7",
  "key46": "58rfPFZpWSxEX2ae5iNqphfJ84KEi7cqxj539bj6maFMNR17T8U1Sujd6ZdW3yGBpe4MM6HP9oCK5YcGtpkpSccu",
  "key47": "3kLYKqFpuiAU9gUHLvApjupnmH5zVZzs98T9BFqgqyEp55ypUYcKCyFqMnmNTVxWbJ4J1dBDHxRvwGK8JUW25TYr",
  "key48": "55vYxA7trFGVeXL3cuMEM9X9RxdKZXYSCQBbzyodzfF3e8kk2octMWCHsvPN5wDMsAFFt8FxP37VSXmJXPgZHDA1",
  "key49": "2QLDJ7LToCEUPf2BniQrUkyDGuFuvPFEKtYi53ZU92FaeiEgjAHFZNcQhzoCPmQifkBNA6d7t5oMzxa8Lngvc7rQ"
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
