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
    "2dH2hbAaEgUh1hFjFd34gY1qxXvPtekEXZt9wJCY6XXCVo65dr2Yxb65aZxUy7NGjNAG7Ds52DnuuNDeDnfshRWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uFFFfjF5RkT7gKD7TWf8zBcy37Q1oJnZQDNhkqQPnkT2aM5a2DCF9n9YifFZykW5h2pr5fJhRgZenM19k1p6V5M",
  "key1": "5YGeo2uvrQP5q7bo2xqeMAWPkyinsZEFTDzWKB9AjWA49L2Gn4L51K2GBws7MMsRk2AuCn8FQzcUEAwPLWK6uWfT",
  "key2": "58qLMnynMeUQDU7bssudyAB738DrbjRDyovYQEpt77rzGNHS5KLbnaE1rpKk9c4rLD47xsobz16EKvy3GHQYTAP9",
  "key3": "5V8iV8gKBQayrMFkTnGYuYMoT2wuF8kPts4AVXh4FCcVGRGivxFKkfxjA1ofJoCPFCYXcGmEUGqNnDqWcAWx34we",
  "key4": "4drN2gcU65zGjcSB1w7YoPtd6ifb1tmpmxU7z1FcA38tKGk2xFia4A9uuzhhwjvpiJhmehsvBBazbB3me6khiUrF",
  "key5": "CDUCkxaLxJMCP8Px3dxuRvvZ95K2f5EHRWkWvmCqC1maVREb7CHkCTCDLvaz1YahN4rHytX1LUfT8NEcGA2X8QR",
  "key6": "5zpc4mr9RMvNdRYuvQnVNosmHwxzvi4JPjqzA6jiGnH5wtmFpEaVAa34XNTHURTafy5y4LMbePEYFFLX1U4Zs3wR",
  "key7": "5FDctmjx6CCnifbS4L3dcc1NzpJ8rPKDvrnaume5cpzE5hibgnqaB935tWf9TBHE6Q5qPhH2YrerEirHKRBkHdtp",
  "key8": "5KNKMBQuXsJZ8kFyTo2n1dY8qMyFG6kHNhFGdJdxbJDmvmRgcM6q8Notenibpge59iZHU9qy1D7qtZRHY1x38bjA",
  "key9": "295oHDKf3oykZdHDpHFXbCBfDeXuystuxTFay3YCHP3bobYHjGc5WHjJbb5fQbAkpNyxDXmPdvDXCTaYKW8h4i8k",
  "key10": "5HDYMvw7f4umZKQQFGGMnMxtbSw94esKdAtGt4R1vAdogvQK4y9oQypQ8tKe3SkwSZfjm8MNdx2K63HnmTdiKJGm",
  "key11": "p9d431CpQ4CVZLo9GwCrrm1QEfGoomhHYWG6fxJ2EZTkHw26nRLimCGwonpQNu1FmQvSkagndjTwxEgwSFXu6Gw",
  "key12": "pQA4Ba5dXc1mkrehA3MdUuzZ522b1aGkbc95BMnEZkXCCwhLecM7JhEWU82ekkB9AhN6HKxmQqa5ZcwLyghkKR8",
  "key13": "4pkLtpunz1Rh2ajVd9NvQbrsNwAFmgBfbXY5VrDqzz7FfkBHniG2agmqjWQCeYtJ8T18cSf9G9yKHFPrDFm4EvnD",
  "key14": "5EnxfJk4k8yGZNVyUozLsdfFV513DuUkv1GXuKZZTd9bbEaKpSfVEA1NackQwrQzgHUjiB5yvfTbzS3MeCLquZWL",
  "key15": "4LBsZ2BmmdhbdRG9FZXTCs6q6q39s9wXnZjiJPN5CTCWURBNVBFnnCiUnZo1Ck2kffuUPhrWtpmgNmMmApEqBm2a",
  "key16": "4CipB6Dw9GGQqzvNm9GpPUBVcy5X4hkV9AWUMwDAsvLjkdrxosUtL5Gohun9iLakSAsovSAGo8yuVJg58NoakSRp",
  "key17": "5mWGwpnBExdFVEtGfMnDPUMjwHHcJpcUfDC7cRBPQt6ZAohQD3ubkwUi9W8SPHC7c5ex1LLBvPvjZHrranphgsGH",
  "key18": "2NPU4h2J8PrjdgKgnAcodSCzGSeghH8wo58m89HVWwdczb7gkj8fAwoTWZP2vDwJt9ggMgcgdB1L41C1xDNGrkyG",
  "key19": "hhM9rNtAt5ffjhUWi6HdG8eoqzUoDjoNxhRHaGpXqjGwJsuYTqrPVhCD1G4LeYhReHW2kJq6TrWZ1GcRPVCkop6",
  "key20": "4fqZdL7L1bBVjUP8kRhDvDhXXGy9otJ5etqnxntVvhQVHCSHedzQ1ieokqEWUrfNrFfQtzxKEjoNm6kXhqKvmW8k",
  "key21": "5dYCEp9UfS5GjN1pPEe3kR8VPWpjjRk8nuDjsZoq6x4Pe19Cky1hnqM5kme4M3E2GrFSuSysk4m3EE4bPrBwbqEg",
  "key22": "4Bzwa9crywcKugYZoKxjVuzaLhXjYr99ZSRW9tzggSF3PTjMAZL6p2yF78iGgiG6Nbtdamwfg5HqwQqV2Y1KmMbq",
  "key23": "2PCXQw5nz8WzpLvBeufqtHFr2gJoTYNHmLB6dmaPXvUX7mJ8cbf91ddKtEPnY98WUw6aU5DrretxCVLWjiFtBK6D",
  "key24": "3R48y92REwxyNCLiPeC7JRsNXBeQmnWAeVDyPkKbwhJWVG1EPsgHSwNAxx86AepnasxRa71FecnTKRZx47zDPzzU",
  "key25": "2UPYPtViDPtqBuYihHVZVYSsxU1SG2WwMz6f8uj5UpfGT8TUtXSGzAHRGYvWNUgk37iZvFiE6EBhxFVmaVh4B2aA",
  "key26": "2YBB2ND5tssFR5tbN7vxnRgmqtr49ytsgNucsiFUSuiTeSMZGo4wGz8HasTQskLtucP3DkMw7LgKDH5iSLSFAFAB",
  "key27": "3MygEXvYfkfCP7LdSyEEbJfmCdX3kTN4rctjyUYvYXHmEe99USuGXAwnYbHBfQU72VgZuaMs4LZJBJqfVphLYdDH",
  "key28": "4cpHKuuyveknyDCFFSKabBRBEoKX8m1u9FqxpadCV7cDdAJoiFPtFu2NpX4ZcBqbYcDLWHdQPRcf1NXfAceeDtXX",
  "key29": "38yMzzvKQptNqFrNaeeHEXdJGhAQG4x7vXbFKvrrvtGyXSHxm3qUWFyBErem6rPHc415smh4SuQ6R89sF2xxNAbk",
  "key30": "324rC1DxY1nNdozMquhqViMZxVYXkLyAfFxKY4V8G525knSPdPw7tWNRuZNU2EfY65jjucPfT3jpf6SStym348xz",
  "key31": "5TFsdpioXj2PjbhV9dqzjfYPL35Xa5j8qwQPBad62L33YQqsYkUGqZbn777FpqcUB2Y1JCBSV4HHAdhNFAD13j94",
  "key32": "47s7YmA2K3pATDsXYrdafw3fNPCpjtEs3tQrpLKQkC1XoYysm1zBTD1n5cvHsu8bRb6AGBivLWsdwhJcEA2UAZu7",
  "key33": "4ADvbx6tpj57ZNGq2a9GvZKTfP5xm3sk3MyKx2q5kJ2CzaaRq4SQhKPHTek1KhZ4RB8TZmebjDe6a4VSbwsteRTe",
  "key34": "58SxqZ3fAd7aCQm1PV9HrL9nxP49Apw1snk3otLW1VrN8rXe9Xzq7MiQ9LPzCaLztkwFr3VHQTkvYjDEf3RhX8UT",
  "key35": "4GgDjku2Rk5NYfaCPK2tdK5Nev8EW8SgjXczsqo4jU3rcZbcCP6156KvLkH4tEuGcsjakt6NR7Z6wmBdn29Vvcgu",
  "key36": "P2531aV8kCdZ4Up5Yu6h6HQ2tZJLEAgzusYdVXBAZxR66TZYbFABgZxA3LBuMUM6AbniGKrG6MT7c8DTMFTUz7V",
  "key37": "4ZiGu8WajbZPrFTTnyxWC9wHXLUQMq2MeT4bWzb1Km1NKt117uyqexeTKQ7c347tYYxzuVuM9VZagt23n8HUvtRV",
  "key38": "4Vy16xnDbL3FNaGwSQ7difx6fw8UHsFzxHGBfH7rBWb4JNmWPRKe28HeK8MEyCddKa14VvREMDGtX1Gbp9GmTW4R",
  "key39": "rG3xF13xqm39PhA5rND1TXW86Gqk8j7W4CvxqY9sMYSw8cZ7cYjxu23Etw4dhRiQifKCNmrzwWZY1VNSFex8ej3",
  "key40": "BK1At7Wv8dHAqeLegY1mjXxL86NHTwLPJ87pqZdi2kQF3At1wLtP3gRueUgmMmn2jeRs1QLMNS8DwryQGe9vVY8"
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
