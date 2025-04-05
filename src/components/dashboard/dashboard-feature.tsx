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
    "2VeGXAa3CUhjv3frx12kCc26EsRFQCUs9hPUFdEeKDRXFhNbAddMo2m4KjyEEcbC72ruLuaAFNYn22JeDPJcFYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQntdXo2irGKPXkUbs3M5Tw8S5CUjpjMwpWGxgdPdqXAZwJnEjFJxUoPoBMzmghHxnxt43ybecWBXqZhwEyrYye",
  "key1": "3wuAJsGLAY2LPiXoagKTtFonJJ2YBAGn2u9avE5qHjyuxnTtaoPUK6RMZc6FghPVzM8C486aV6mwyNV4ef99JW6r",
  "key2": "2UieFTwnvEGLpSv3B2S71nwVmgb8fdxcN2T4fFHBjXru9mqFZDL82y7FxieV7vcMrsVBrbLcMapty5HSdMWZJ1EB",
  "key3": "3SrZ21DSqNByrqwDdaAJAeZwSfL5oyvDcieRpk9SCKhf1dQk3XQomEb8Q1xMh3amMquq5RJ8C1vSC3FGbHs6Q6pn",
  "key4": "55aENp3es4gw7Eiq8DfBUAEQN3QHLZGn9VSX66TBb1BpUtojx3aS2iHKFADQupyK3oR4WDoGmHogdqhncEPRJ7jC",
  "key5": "2jUjAeLhYnYZP66UkvbF2baRW2wBvqfLEbyi5g4dzEm2RY7ASPEwCqR1w96tCrXgQSBSqgB6cWKv778o3M9nvLdE",
  "key6": "WvCSjuTa5Jz5YKyZnCaD9Ni59FHCP8h9emyER7tnq7RgcN5QL1wiksQJgWHnApPFSCdRGQvBfzmFfphY1JrpB8L",
  "key7": "2biECrdQ5d2n8p42QzrFKXC4dUdmqq2qHaPsNB5g4jfhVDL8WDgM8C4hXFcie2PkbGqoM6bKGoT2wpPtRf2GEMie",
  "key8": "3AdM3MXog7SLYQbYYLUWKzN6mDKbm971fVzGE7krStTPcJEpkL1Yk7EsKCrVk23vn7sBN2dfSBPXGK3wndY8iinG",
  "key9": "2fHUmSUyrzZ8SBkWq3LTQi3cyeZVQ3hpKHZGjuq1AjUDM8qTebbCjLF4ct1fQ46YTUrKQzisPM3g6dRmPbChYcCV",
  "key10": "5QV1bGERsGjwX49AC2hwQEf7Zc1pj2uLMoBJShTGEs5H2McuEmMEFJuG5t7gJkxHwch8de7umSDSExrVB5aU1P8w",
  "key11": "2rUjgLGvs593VV3JkZKvLV5YVcZHtG8sqikWDk6FWEsGg6AwL6R9grm6N1NuaNbc1T2kZofdmHhR7sRW4ynbpBui",
  "key12": "3mDLccsdk6tpYRqBc56y2ra7v9nQWwWZwHnPXe8nZdzJzuZey5N1tKZ7xhuVdpeHfjTNjncNMav9WB9h8BJznXyK",
  "key13": "EvGkbXTUznAQRi35zfodtquQzg5F3p93Yfb9YXMTtyJePWhWJG6LX4GcviuBvYHcXvFdqggoYCKdtRu13pWXzdQ",
  "key14": "3XBx8c4a1dpKWp2DpqKM8GKbZBHTKemP19joVMMDKuM4pfrHNxPtkgtV3oo2h6CSAqTzdtNj172Tg3DvJrW9GtLU",
  "key15": "3ZCFQqSh5uzjXJE47GCkh6iNoRcQkEaE85JJ9wkwD2YMdvpiqN1UUhjw6N3KBZFQqRojTxMsoP8weqRpF7YFD3kk",
  "key16": "2mokzb4TMLMinKte1ynkLrGrym8pSpy2UipNAZpvv9h1Kqvdy86krgoWuGaPxUPB9GaerMgfGvBYz1hLt7EBLWv2",
  "key17": "c6TszrXisu4LNsCKggr5u9QR3VLRkQ8Kd7dTh6i1Vqt2wYXgJ95bQvGTCSoW8RdnWaEbapdiaJVgeQuEeHPwjE4",
  "key18": "2GDbjwMcj14wPQhxpeHeHrySt1xrNAegq1MogPAWAzHp88peDSWYfHNsciUKxNtkiDo23NHNP6NkBPzaYkX2uJ8r",
  "key19": "NtLyWD6HuYBfPg64MFV5E1vEGEpSCdG1xA2R81ogvd8mgAQ24qUveNPSS9hhhXQScC9TgRgahRc3D9xsZK4t4zt",
  "key20": "34JdS21tdx3MCfyxJsBfdXjAkSVs2cnJV5EoLVQAKnEa8wioG7XUTFk3zrm9vadBdMAGV8scyGudSDZ59yCVMrk",
  "key21": "3nm3HHCxazFv2o6K6xy1vj2iZiNdvmeu3btqvJDFXLVMWn4X6Ni8v17QmEzp8WLjXNVvkXdJMwf2EPHMdn3NWYUv",
  "key22": "3qUYxzyJhRgQKh2fpig3VGMyoTaNV5jub9EqvSx8uMQVTjWBMvgetUgqLVDobyd4Hmzb7DEcBvRhHAH637erfeJ",
  "key23": "5A2pbJXuTMtN6qRJRYC4HJYcKgethBRa1p8Tegsk6yAnoiqQyLZ6W1uUdAuQsmYRmyx6sMUJkvsdwDnMzcuSRdmj",
  "key24": "5BRAZvYfCsBFqcH8SNcfqXc6fJuT4AzJJVJ57gCQ63UsE1koFUc859V5G7A6kASzQDzKruPcXDnDQLQz4rCva9Uv",
  "key25": "52r7xjrFAdgt8xnJ86FvSgeio73x7KxqZBJtaBmFQWCgs1SBX7jDUcUpo6tLk6YC5i46PMsdLvVqBGLFWZrEVDuM",
  "key26": "2wvcFqkebj3fKA1jaXhsGoqCnRyc6TuoAb1JyLPcwt9ndyWJMmWsUV9kJtz5RhNyQWsqk2eqFysyVhLcpjR85qn1",
  "key27": "5D2736bAJP6A9hDV4K5DeEctrgEc5SDLsHKYqJJzrEffKCWgpLsHiaZZoHvfyVed2tA749p9JYyREnjtX9aSEoMe",
  "key28": "3X9PyBNg1BnW1pCJigVEAABqSgUDfa8KDeoGmJLHXSteT1XQHz6nCgDDjsQtMwPhXJiFHdcsQWPbVSTnKw8TVUKm",
  "key29": "4gjiSxZ8xrDrrr2euGm46N84MjEvcpyj3EHNYNwdLEn3QCHBTZ5DxGTgEq7Z2fLyQ2HefNjHC6uFsqRuaYoesc8s",
  "key30": "y1Jqgnyqbj3pHM8GokzNJTB9ZYxiCDzB8Uw9sZwvnEM7jWAwh5PmVyNctSQQz52MsNz3QEA3Rs8Qzjg4GKSMMUZ",
  "key31": "3YWHNSCn1FqPS7VY2MAmpGCVh43HSfYoEomaHwqDkK775AEV3gNtGrzPJqz5REAvZbeiqNkrWfSx3RUpR96EovJk",
  "key32": "3fV89Tewty4fnQj19Vorj8qy9LNZNTBJcQuAfC6JXvGWywTPtHQmW8RdrNGLihhHB4nMWvkyrAaCbdhuN68EqTwV",
  "key33": "3RKfecHu1rJm5z4A8qgxE1Z42wzTKuSxakoAStK7Ecb5neU789ZJLp6tpe6wyMKFU7uLmm2JUZWPMxMrhaiNwVMK",
  "key34": "5MG29xnWx5DqSs5wMbUW1zdK1HJELKDdC55nxwKa8YvYre739z5iR8z1cxAPek6hHzKJwhatrsTDMXzwsJTZiV8d",
  "key35": "5TXAHihwF1LDzak9SQp1vphaPL6xitBzBT4tCqn5Vi8dRdDGUVcrS59pGZnTqf8RSDsmkxH6TXgYfx1J3cZaopvk",
  "key36": "5HL86xKmKCmxMwaeHyku5Ee5WrbWBqMopTdz3jpq3hxnhG63vzrwmSWnKdZAS7UqhJcnUuVy5uREW9utSfULv2Um",
  "key37": "3fcghxz8X3HX38WR8uk5rKGjvTjQwDUQntJMQPa99Cs4Fhhk7W5SQfCnSNedEVATu7nfNeqg9mDHgqrAHqbs1Lc7",
  "key38": "B3RrgQGsovnogADPBMHuoUkYMHpYhXyWZz1J2D11eeRswv3qtWuecF23YfmaGnkYWV57Kk36aGw1DDe7Mnjpm4r",
  "key39": "5GSWUZDbdiZkYxkL3maB2zUKcUKEG2YQALgKWQ5Zrtam3RR1R92AyaS2w3RhMEYH1gLCCf9MgX4ZWgKHke6P4xua",
  "key40": "2pFbsn4YTpEasyqgtgXphndSusoudS7CoAN94uHJwYn2iEcxyGmf5s5sihw8SYfmCwiZpYc4qTNcbL2kjatqnN4f",
  "key41": "2mUdnYk7CKKgZmgbzTtXKqQzZsgzZQBbtRU9qEXa91XsYbXheo1g2L873dUZCiWTqxuMYgtJ8EKpiZAvSbxdhKTh",
  "key42": "48TXXeKQmmHhxrRB3Q8RVHh6pkUPRZxaueAE6ZWUdETLjUg2WZh8eVHCVLFbX8FedZxyaFKKCjTi3WF319dbF3q9"
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
