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
    "52ZPycvV6UEE6DRgYGNeQW3TtENxqY9ZNQSWcsgWfitCKoMKGG9xDdoeDjaifPvxfv8BPc6wbCpUDJeWdS8LAKWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDC3i31VA585L3E5cPMok1B6JTidGMnwC6KbbogzDetKhaVDswY7eZdT4cU4bYw9iZpfZ5mkDoh4kWBtqHGyG5v",
  "key1": "5EbvQTifE5XBcpnuC6BCYH3TSetMd6JAEVZD88K4ZtviLsrLoR4UqoGkqiEzp583tC3Q2sHXfiDjYsrzRTgLGiyt",
  "key2": "5nNviyrBPRnH2rdQ9b16AEaGKHJZripfZyEWpL342RBGb6fmBR7HPzgezfa1XBjvdFko3r8DZ8rCESDxWYUHyYAz",
  "key3": "5HYNrSCfKJEDge4xaFZ1HoCksb7tkiGdA3RbWiZCkdVjEXJnosNpSE3qypdMvtSoEt8N4dEFuAct67X2B8JLrjCH",
  "key4": "4exmifsJhC1meF5S38GQzSULLcsdtELiJFMVdNC15mGhgBpWNiasWrZ5PCYVjcXFgayzgRsFViLyGNRqERseetMK",
  "key5": "2LXNcnFZM1Ex7Dz1vd5FayaChsuXVs3MT8pnuEWuw8bhvoAmgWsXHeRF7QbELJrp7NHFbEjB9HjFNFEZYoDq7jRY",
  "key6": "5CBJyQ68KALhkhZEKBiDsKek6X1A7weUUR8N4fBs9dkcMQF678NBd4o61wSXYGqrjdHmbU8Ad6vW7oFZtTGeEDSk",
  "key7": "4wQbNVqUg7PxAbegY9Vv7uesTDgXRX7wNi9DwD2ZxSPMsKXzB1d8gmv7Vz3zQbF6RM2JQrfhQTpTmiKnnNSQC11g",
  "key8": "jvgjLUFzXcEwrkM2z42g2Z6NdBHhnLs3A9sJuQdgSBRm8KogqA6FpuMNNPMWSiJAKS3Ag1pnwH1ZXK84VKgn2qL",
  "key9": "2mvk6Z9Bjyr8My594akyMThHwxvAEiTGxHpGhhquLT8Tsr7ofZJWgpgouGVdPNX3D4kV7NuZpBiSfacmkKc8swDC",
  "key10": "66C26imYRkSqTb1deNdtmnWswkY23WaRcD68Yzxa5zNWgUytHj5TtSYdgJnEPdL1z5LV3BNkxZ5ZixJDMJcy7reG",
  "key11": "4f8UwvYiqC7gr6om4U1fbUunUZfYTBZocoRKkzYcDdKgQ5EjHurKYjHMEw3yTy51bYnTxszCdr5gpfCPsiLUmDTB",
  "key12": "2LkHfzbvsr2Nibyndn7jr2oxPN34puV1VfBR7jQUGvVSsUnVbn8hxA8m8gNJkEGVHkutwtsTRGfY6McuWFcvJ9rH",
  "key13": "2kPd5RGcS3u1hCDLUCTiNdprc1G7cXT1iVNHmrgRarLCFei3fJKDqNE3d9z7K1ymCFsu3e45MXHnaneaNEnvtAvM",
  "key14": "5xiwNGvwuxtyV47AQresvuo7rg944wdRBD8GZSkuLN5iA6PREdQTsAbh4L2VEm8FkX8QM5GGQtWZCTngguK2Gji6",
  "key15": "2bByCgGFeK6XaMoPHNk1ykrbCoYV3r4gSsjtyv4jswBdYGoLTVwKR6FGryGZTTnoVQaBQ9dHF3MXSSibUJSpzSxZ",
  "key16": "62PNdTaKYWNiQeCkq59jaQ8PwGgV2JtuMXivuZfaFm11RVH9aEWSvR7Vmk86fysJUWKASBHyzXiwKKSzVwjAbNi4",
  "key17": "4FrMrpFGXjdDmZqTLcpybXS1TvQrJh1STj34Pgft8iUq3QgKmyhzPH4pGwJZmeVKp831My7Un9atypLuQkWS4bFg",
  "key18": "3x15UCWrnEmdEhmmS4UCekMd7y4fksRmuFXMxArJsUZQwQF7UbeMervL9NTkrVvo3vUqubJjQFqt7xwJR5cRZZTE",
  "key19": "4dkhvHXv362YjzBj6zL72UYsA8txTK8ehU6BMGREZMAbAUUD6LPdtKKokELrm4CeXMsfD2Y85DWhz8KxnVEUuqwq",
  "key20": "33YRxphcgtLW8898f4Z4LQ8zAsnRUMwbjBMC98f4xh61xNCQud2c1BNFEUm7uyBFrEaVGGVbxCN8V7UnDNvKwab",
  "key21": "3k9zS2zr7CQaGMRXdnR485SGLgd9vX1qfXWSVFzhGpXVvc7R1474k9b6dxsvhx1wAqZp9CLPAEh5hXc5px6CqYSU",
  "key22": "BMn7uoKEtuyY2iTE7mkq2XtxcAHpriLh42X6CUVnJkZkTcF7C7tpY6EJRiLUGb1jn1bETQ8X8Brbf4jJSn3PpVZ",
  "key23": "4mRQU4NTtUUswAH5bh6HiqUQnvuTXaciNyH7juShvGe8MDTFLhTpKMjLCxuPTyV82pTria24tD3WD2gtL6DqQwVj",
  "key24": "2UhVSAsLB2q6rnYe9LVDpEpEvtPQiwQdmLXBfriWHuJSGX17BVfUnBTYB1zzgeFaBWhWMu3XJcncsPQWDjpVvDaa",
  "key25": "2SNkUybcMpFMkZ4J1v9fAUjHFpEWcUES5Ex8Gn7e7yjDdMQbZUTf5EZ5HGk2NAPXbqqn9bpPRCYa4AaWxw9wwYLd",
  "key26": "zDP8iZyTa93E9x3sgnKt1QWrgb3tffCf7j1kNMfmPAypR6J88GxKRmmwPPkY8jcREcbxsxwZWyNQt42ikUjAerw",
  "key27": "5dx9u3LaTkBxatGpN4GeMeBoUQ9qHWkx6iLkhY9raZqMHY7xHEkzt4xwsga6eR239sWirzSnLK5yHzbB5qM9fQJz",
  "key28": "5Mgcsw2NJoXxYeUEVMLfpHZSBhVKAzHBAzEEPBH53mHmGiP3ooc4f8SknXGnbXzBcqdaUW6pK8moMN75Abeaa5Nv",
  "key29": "4B8Fsnxyqpub7DZJRFt9SBeBhnXGusfNfFvBP5eKMs968cD1kp8DGZcg7vQW6GJhLJaLppbxNurGW82C9ehmiM3s",
  "key30": "5UBaSKf1PRVnjnUY6X8b4pF1LcHFmJ51iVawdWETQAU8frFEAobfPoUKs3vjCzuhURcBu1P1hBtCGoftaEKmggum",
  "key31": "7MS44AREJWdYwkxNouNjFkwoQTTBe7M1kqsK61m6t8BnQsUnX4DhoKrTyTRA3YryQ875aC5bH1QCbE7sPaWnw78",
  "key32": "5dLzwxrmYmvjo2biwiHENRitCmx7e941JiVXuWQTUs1bwuAja4ay88QjXQKoHorTYY3LVyN6vFU5voexMwYoQCcJ",
  "key33": "3TkDAVK9DxTMDKvxBtCYhDsAJzHhpYSyX8uU55QeUuMcqjs8mdZo5bTjtV5Fif6kFu8oVhEEaChWzWReQmm66jrE",
  "key34": "3kM5bKFm48ZA8w4vgmiWhWNzBSTQZqVvxHkRf3jrNBN61hryymVzFgKhw1nLYRQisVtmWwUxH8HAsbbJUMiWv2Uy",
  "key35": "4am9yJaKKF9FVTHyPc2V33EhESu5wMxYKLzd8jA4s4RSHQYYSCYcXRsrdKuhmm6wRvsPHXEc2E5CmVRYkoHENRfi",
  "key36": "4TxsxmLSc5DEPqeFbFNZ6BXCDL8jqgk6Nt9xiJXix6pUfQ6ZjirtQsChrfteKLFhDxuZdJGqER4WyMjL2vJ7yw4n",
  "key37": "2kHbFpK82HfXKyizd4GpUpbhYNveb94DeEhtAzKvuLUBAbSxEDYjJSxHKfdRXVWr9uTKiLJqLdydojZ15sw6hVq4",
  "key38": "4WpEq2HgerAL5meMARo3PNUa8UWLMGnrPQb8KSosuLCSPhWFncQL4jt6uS7wBusADvEqQnr4YYkWjs3QoRqMW9sZ",
  "key39": "GgeAAScS98MFSBBagh9omJ6pwxq3FWHr6mABdmRjaQBuCnLDnhEv6tZNkJepc3utceBJLy3CddPYet4BKh2Qb2T",
  "key40": "4ASdthBRTa3NsahPyvrZ9uqCkSuyCeBKXT9mv58zKAkue7TpQTX5kpE1ZHEwVPAEVkw3eLetSYCc3pMbtYWbwhbS",
  "key41": "5cC3RM6uz8gcDufe8aMh1vyzWM83Eaoxfprx2kbPMxX13WigXj617Sp1WHp1EMmF13AyomSrSNbLKsLVZ8GhFox8",
  "key42": "5Sg5cAwk1hf76FBqvpSz7FMb5cYEiKPHFN7JMhLoyymkxikeR4iCMntKfs3MZCos1phLaradGjwqrUm1Kv7uZkva"
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
