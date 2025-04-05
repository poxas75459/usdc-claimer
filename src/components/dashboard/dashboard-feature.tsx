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
    "41gB17b7SpSbvqRe9oR8K9PR9t4eXYfX97JyditK328BprdZDrfmh6fBEcyF6mdmV34RykioTWeLD4xQ5nhRxeYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Upm3RX27jat6UVoajXi7Mu9PaAmQYgaLbDbiX8VQRfCzT3m3Y6xEZCnY9pdfL7U3aT1FekHVRpQVjDkvi48u99V",
  "key1": "5gNS2hL3tLvEdXPfZSWhPU3XLA2HiTSxnBkg3qkuu7CufP4EjcsXK59L9ivEzYZAXcRKJmXT3GQaRs5yzQkH22Fq",
  "key2": "4K3EU8rkcPc854yTm5oStZFXWPdHgKkqgcVCCwadWUshRY8w75Jso2xRpF9FVAsZSaWYWYKLeatZ1K4WMCWGsxy7",
  "key3": "2Pe1rVGrgNswDkiuRM5DFcrc54i6h8tfjUgNaN7RWQvmLUszKzPRVR43y8iBKcZPLVMHQ8WGTKyBjswwNF9YTSiF",
  "key4": "jHaSF3Vvz8AyBP1Lm3zGAJrrvAi6mE5Cw5g7HhkptrQm9S2kajcD6oBsPNkwd9JweKAZ2LMHuBk5ubCHAiz979h",
  "key5": "Z19dEfY5sw3RjA9jkGyq6aRWaNLQ7X5TfqJPhy8SUQr3C9mVYRvaRbZ1dNX3utFC1TDjJ5LHnhYzwETBUUc4A8z",
  "key6": "55stThjqo47S2eK5qQgVFLG5uR5JaMksgGQjPHrhumoefjLLgWWPhzEL5V7BMJrk9W4AVxf3NwvW2SvN4dy5Jo45",
  "key7": "3VGXvG3QAg2oRJ9bRs6r6eCBMqu8MQ6ugBrEBW8Tqxv9U1UNYeCNpkDDHVggn8Ts38GoYVjSxqeunhNtyChxN4x6",
  "key8": "4xgfVrM16tvxM3jcVGX4kJGy751CQeWmMoZMd3Tj2ivKVDHXQJk87ADuggcVqvoi7zt5bSzGFEbWPUCSbyGs1LMV",
  "key9": "5nms5AaVX5tCJCDmx9dP83kLRZAwD9252JWGrcnrtZkFHQGGG2ajzyHuqGDcFbAumDNkbQHfavSAXdxoXkNECbd7",
  "key10": "3ygQJafHqaGTwABbmkwEMJG3pbpKZxxNPgRk5sm9FUxyVVLqv1bAyyUfkGHSw4bhESJPvGM2qsSMtuJ6ki1mfyDw",
  "key11": "3PqF3PQLU36mZ11MSCAE4Mb4cQ15WU9Ji5uLF5PawGrAM39xRGmqhoPTAcjgLvDYN9oPwV8jEXd4dpU9NSw1zDBg",
  "key12": "MKsSDmEz3kHQDLTadi9AHvSDVY2G5463vTQqSVCDkf1CHzruGXimNGxwrtswnPHWM1qwp6kQTZ5uq4bb5QEADUf",
  "key13": "63LMjNXLJqLgXTyNHLSaZ6deLTvQgL96eiyZJTPPmWhsFyKzqBE8y3r5zGtGKoA33a9nbjXGrm7MHUWp6uhf98qo",
  "key14": "GadDC45j5RryBKTT9BQsbEzS5Aq8E9M5YAEpvsMXgvoL39cJ3ajC2Q3aGJMgWuzP73mjm83VN2LwbQ1Tw28gi3g",
  "key15": "31twLyQCCk2dFBJMhcxEZxEUUDDnPM7pxNauuLqKnnj6kbEkMKJHxYJHQPH9jaedJs55iG6ne8Ruq1sdgKniVEDS",
  "key16": "65gbbvbVSJ7FfmqZjDmR7ekh3MYMpvqDJszwfA5ANLNx7FVDhmtqRoMmXq68fKAq7MAhTnjDfjx8LS3QfGjnNuD",
  "key17": "552c9nCsai9nMjRGPBTpMZQyvS1wfqp3UcMqcnqkaNZ74n6t7dscRh979oT9k6jFgutNm6Qb9MugUvczsgFNwhix",
  "key18": "v9FEDZyXxZqErVbstwFD5b9egeDEzNAt9YwpCaSdzbAiCXZVZsQaWgzbw888c47UjEogiY88AmhEJujggTBffZQ",
  "key19": "2Sxx17hVrAPuQfU4Bpvz8YqJHbajXfP3cwJSDrAGKcwhsuT6nH9cMpdmyrS3e2poC5ta3bZ9puNpGvsKVtcPN4yL",
  "key20": "4ap4mb822umBFkQm4jKg9TL4SbxWjnqNbzHexjjmL2Tgkjp23iAf9Qi5jiwbkdd58GSDHeSwSsz9Fin9PNqAcNsB",
  "key21": "2kWqtw3YfKBf79ujib6sGZW18nEX8viiAPisZQYQPU287d8rHfD1UhCNZye2twBsxaBKRGrkbS6Xu9j8LS32rmbY",
  "key22": "49o3VVEYoALDkRAcc26mCkuin17WMaJNmg1kNsXHJVjiH7mf6qDaPkHHvyzsGRrdedERNM2qmehrDCDQmXobihw4",
  "key23": "hguyXvyJ41SA5nLDwTjZV4T4bsqCZDcA7Yjk8fe56HXNaMDJDNWYt5cUzhMgXzG1nTXq56FVGThQibDEKdYHpoh",
  "key24": "3kxrCuQJXnyiUZyw3azHNsiEADMnmsbmEsAvHB5xwq3sqyTReAKFt75pHnpY2wEPdAh9yTrmrk6yi15C5idtzCY9",
  "key25": "2uoJqr3n7pEz1nczqgoexRcjA5scGTPrKLf62KxPdBUEG32zSs5nQbDPhN8zHcnHeSeuHLa3rVLQLt8PMHPBwoKP",
  "key26": "iPUd651ihwQfsRQHtUJH2n5gxxZMwzKunjMcpfVoCM1zutSiAtV3Ws71vXsbGupr35pmNCCjZaUDQeifxA4E2GQ",
  "key27": "LpH1fdMCp5GYVCVv32MPe4wADW5SfsPGmRWyicqoB2F5MXFN8STRwncu7ZeaoA959ogmYk9YiTCoHAMDxrX5Lgk",
  "key28": "3ug2717tgrRYkkDCdeQwrwrh37FVuRXZe8FiHDR3BetBRRbFnarvXMpnEQnketewMRgA9Z57iUAWPoxxPStiSEbt",
  "key29": "2DbJYD57HwYQisQ9S8ynBzpb4DRTaBzCKQ5MtuBjj88JGhN8or4xgGTmFv8Y86UFKGqJ875LEPnuaoQtiij2psjg",
  "key30": "5pPL9kkuWypJq2Pn8QWvsWrm7kzdFP7iUUwZxjgJuMueCkyKsm15vQTF45jP5xcH7HPEnLHmQPpt4didSRDczfg3",
  "key31": "eUMkxdR8fDQEHfdJG2trnofn3URwPFxp5DVgkNhz4V5ikTLv4LUPaZd9kW9V12pCbYhzybzrV1M8ZaGMy8Yau8h",
  "key32": "2PJgTAQuRbrPNZQjcFtSx5buiC2yJkyZAM9zrznd29S18AU9QcW9rQYzA3KmvLFxQtTygj8B9i1oMcB5dkmxw1YX",
  "key33": "4x3ozd4HZdLSm9Af45EMZZiWuWMKX52KswPPJ4H2b1fuEJcqfuzQp555nA4BgwpEbo6pSCSPG1pt5VbxkDCBTMN1",
  "key34": "4ho99jsuHyKwKVfH1Y4mejCEYWt8Tp4wkKKahojwBXbvF7ZhxdrCCsuqMNARo4pQvntkuhDZKWpepQBNLnVp4pVm",
  "key35": "3Km7hcNHX33mY8jJgkcidoK7wnocrg65hWguzZsaM9quT2GtMBTUJdYid4CPfrsvUSPTtPLq8fekpjbASCFC7ra7",
  "key36": "51RtTCuuGNkPwmaYCRXtGQ7E8ii4TTs9JVhstLLNoNtWj7gRHMBxCftttd5rQtEwVRtctbxfRExG3kpah98KHLv4",
  "key37": "2UCF3ouJHam3mSULVpaNwRJ1gZioZTKzFwxMzaq4SuoFvbo1kZRgnnLKsv1k9PhLWR5CNZeAbyHCGXjPyj79ETbk",
  "key38": "3sS26gJKCeJsRHrN5RSXqh3L88gJdtvtkMDysKPrSzqk2TZfsv4tzgRMjNCy3ws5NjCcNToFTvhhBF8wiSt7njz5",
  "key39": "2bZq5a9YtUEju4Rd1r8FkcdfN3nYt1mu4qRbMHPsWT1xAvvQogtbEz6fG12ZyGo2aPkv5Rbp5HH8ni51njzh98RV",
  "key40": "2XWoDxNby4YzhaH11xMKKHfzFBX8u54r8TRTsLuprDv1zG9siDRXcPE5xVe94pULLthuKFNYjw9CmuAjrucsKLEy",
  "key41": "4zbPxhLhAcFf25TYii997UpKqbd1ha9ckzSqpKURbTxtf6LSv3CE9pK7z3bLeH3BqPAUqebsvfbwohLvTfGHo7kP",
  "key42": "3hiPdw9NwfDdjK4aUXwyQcq2bRQsFnSsFqNwkXwuP7AAV9DwhMkjfdSYmZmjtyNW7bKVeFzoEEZjKWFWMqtzqy1z",
  "key43": "5GYcyjBkthA4vNMDQUuco3ZmmE31aPeKTiSMNKids67ghs6gGFssihidkAkhAExUemMN9HX4ap18TXjn5FdMK3Aw",
  "key44": "24aH9Xky71JF2DXQYHTFfJUNxoL64fjCLCRX9CGnkQSGa14NJQZpUNctczLSvVV5NjaQXHWhph9LxjVwmrj4YrJu"
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
