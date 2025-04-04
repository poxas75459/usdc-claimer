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
    "5QfDoVrXzzgKXHUcCKuth5etJmDELTHuSb1vhQbrKVeQxFkp7otE9fW6GX4D2wUnu4v2NcbgADbZuj2zyk8zFwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNBgWjSScH8mZxgPfNiHdffdBekmg4Kbe9DxTjnuPaYYss3PWu4BsjwVGoEkL1eoCBmQyUKqC5k5mv2iLnq5Es8",
  "key1": "3WrcYHH8Wg1SrmnU1H4sYqiP6ma68ArXwbrhxAocKw4aNsqgF2xQ5yri9bRG5DG8KH6QY7WBaAUy4NSH7cEvHYA9",
  "key2": "5G43wACzwgAurpj6zXU1rVhNn33iJLSsaL6nHAta65PcHnUJvUmsMqYyNRruZMuBuQBiLHBAS7FZerBaMnGLdNpG",
  "key3": "5SL6h8RdVMuFhs4gdxgaQ9F15n9DjztEZR2XF5pPmDbcpE793oNfweTxbZoECfAHmGGB5voAcA2ifxYbzJJLE8eD",
  "key4": "4QRBhaYdPngpUC1h1PBVTvnHm8CUMeAANK2NvRZfS8z6JEDr8PTx8ZuGjJvCtPp1zvAEFEz3wadbvse7edPTtQfa",
  "key5": "49LUqyRn4mp7sSovkKr6UdttT5JSrzNQMdUAyanoP1ViMe2tkWJsmTh1QpKmNXB62ddkagqR4KCYhM4hQQdLU2vw",
  "key6": "4zJjwiVFmSeR9hja82qqn6pbNuH2fUGKhUUEYewGeTDy6ZojKqQEaBh7HZSSFoThQ5wc1cqNckM7zd6Zb33LHtaH",
  "key7": "2pNVpMzhojVVQUfWSStkQWmRgnGrZsednF99PLC7xDteToG4umWHFwcExqCcN9T8uVCMvU28xeMA41DNgxBCk7f3",
  "key8": "3kpLY6dTrBStAk4rFHGvDWBGFppKN4Tmr9Fv7Z4QrLbSXLEZNi6kYKvUuEhhjjRUuCjjaDubjNB8koiFsWpdEna6",
  "key9": "GrFFzEhakcPrT4RapyqoKbhkaqP28k8a5KHdpFaG5si5fNEM727B5ST1PQ8nJYBLqrhKSkWym8UFUJUg5wDtaj3",
  "key10": "2L8fYG7UyoRpkYxbibuXM4sQom3Lrt1ypwxZxehVFxMhoMQU8WJnu6SCrVBXq2UJsnC7y5DTtdnAvHKkqWNnJMHf",
  "key11": "JaR1zxttJ4m3DFzDDE4R4zR3HNNYjoi98BnvHTJdvL1grP9DFJHpcWF1GJN1iD7NVa9NQEQzg2B26VmJWipWhgc",
  "key12": "5uhHCMUhLXZBRidsD4u4yr4vLcpeqFiAHV3Y6aoffBMon3y8fZ81ket51weFjFs5hVXAMaCoCnEiKCt4NvAK2R6X",
  "key13": "5uauyDxw9DDp6BHJ6m7xHsfhXdqWJseVMAMCUpiQnpEx12T2SQ5q8bwAW1fnsxmgFgASMur6VRFcEJhRBAo24qo5",
  "key14": "4cDS1PU8EoHFLUrGvFt61bL5c1ZXiqqrqxMFpp3WDTMpzPtriM7M71mWSFqq4GaPYjha5nF3H9zhk5BQr1k9LGm7",
  "key15": "3p1YUHCEG3rHSn9F5ABoj1MuMCfDj2FnR522xc5EE3tpYjodsBRwUHAGMCnoXNxXSQem3dAk5XqWwzneofbXnnfH",
  "key16": "5hjxd4r9WG2CKhovj7gWXDDrU6xiaLM14o7Tp9Tp48vQzbDpawD1WZXCec9zvSE2wBtHBojWCMm252XxEZwB7mSp",
  "key17": "4faypzD9AmV3rWD6dtmnKz2QfL3nTeuvXZkeSWYZ93uvvUgyzC9mwBbtkwf3mfetiM6VQnSw4SkBLWQPqihHfZuy",
  "key18": "2foWx9xZXxywa76ovWe9iZnmwA5srm9EH7wDQ2eVQbdu5uBkQmMZbr9CGbEnFuCR8g7DyNA5H4gn5f7Tv3fwTxCb",
  "key19": "fpN1scAk9Lm4EwbefcrP3mTknNnivjVmhJHDZmptDSFrfSXVikTUTr4KSSM9MksFq43UeVHjoHJsnDUSj6V1v9W",
  "key20": "2U17CFaYmuBf1boeFqYWzqh5oKqD2K76EY8TrE37ydqpbELXYwsKCqN7tUvAY2yoCEz7aMkLHRSFJY2xsJw3ZVMN",
  "key21": "31wNXCNjtv5xKnHTKxrLMAYgKTxTnZLq55ZDSeen5i3fmLCdvsdSj4xGGqS6dPGdnbsw5kRES69qjLYaKWKiNzBh",
  "key22": "55zfWMU7BRxHbYZe8xsqMLEqUZ1tQF3xSzV1VUiFPeYuc7oE4qZ5GkUVG9GtMQw23uTwruYH1itWZ5VLQWR8dTfL",
  "key23": "64sEkqes4VFy6BD8jFVtPGszcFZ7pytXuT8EuRuqzRNAsDXtEsNgBVt6iRN1quhX4ENzyEDP3rUGxF1C53EABioX",
  "key24": "4VrzFzHyNFnKwdtBnupJZmUv3zXaiAHrqd5kv98T7j2tNBHANTHtnc9mb7Uq2fEEwa9j6fmmSzon2JnGyRBMrxoU",
  "key25": "2h3KWTT75p6usynKJW6etZKUK9CCStupiPvmdP3nTRsj9yTi9LmM92dp14YWYbrLM7UjBS5MLJgeotFkrvCWZN8g",
  "key26": "2B7aDeFUg7tbQAtpKTcsxUNHorvGNqFEZSnehqz2Ybkk3CnDbcCy8bGefA8D7upCrr28PGbLEqjjdK74h3AjEY9d",
  "key27": "qTfgdyhn55GWno6rWh4U4bfmkZpGLUaytXAXBewXp8eFdnwdc11x1BSeK4zgrycBCeJn6HirA7eyeRzdZXddKvT",
  "key28": "4CQvoKcP99JYLxUJTrqmj8hpNnV4Xb14fNCQ7WcoEoBJPsF3ZevahKdZpRNv2ecfPVSjDrFRvjFddfEXyQvbzKkQ",
  "key29": "5agLVx5nZGDy7vHLXME9n1kMGhhExpuBETqBMgoyKr1FUoDUX8ybvaPuyeAdfYedBFofpAsikcP2rawUGuaHETgN",
  "key30": "4x73a7uZx1Azu33bPggV1L8Vw6kgodsHZ5tFN1h3tR4LKeTrF5EW2QZB9ZbT37hvJAgFViv1AnryxzcC9XDKXBPi",
  "key31": "242Y2xiwPiuEAw76efpSHVotZrhZvkZLDuWECRU8iExDrbDDmy6RGp7tnLq5mK2Wary183hAaZ24TaXha7iMxzj1",
  "key32": "xdD2w1rwodZWmSBFceeXtLpL5KDhPrawzoTm28kvaEcNXikZb1HpkSRZZADAHJwWx2mpeiLebNoz4smbym33GTD",
  "key33": "5hsxogkbKKtrDCAYux2bmu8RT4YrHc5YhpGKgYXFTsBmfWqdTXHA7VETPxtvCZ4MYBb2YCe3cuagqHPtJ2D8MLav",
  "key34": "4S5BJnxieJ3Dq61xXT6DmyG1bZJNZ4WzWqyK3JvxN4GmVQw5xP4vScktMtEfCJCXcQqjmA6wB8n4fD5xb3aPJhJ9",
  "key35": "xnsVHykJS4e5ZTmbTNQ2a7aVxgERNsNs99aFVPgd3LyTvDYMD3FqetDh1aMC7KiYxbMuaFWSZFZSnDYMtbZBCMc",
  "key36": "5LoG6FcEpkHoj78VnjLeFwynwF9adcdnP5W4cGyoggTDFXDVNWNHTJPaz1nWa8DaH3rhV6UMrc7kE6gNXH3QDwMq",
  "key37": "3xwtyyvj1JicnGhgjhQwfutv86bncuZeApA6hhSeGWnVy9mCkwP87wxhpXpwq4JNTB7ifSv9us9qoS3yPqk6jVyA"
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
