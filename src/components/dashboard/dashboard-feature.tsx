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
    "3TKJBPoda6dPs1UEhF89Ex7GYYrz3GuvoUhwFfYYQkLNafwXNJrXjep5W9TodNgaWBMHrQgiEfuQ1EpZuBKFQYjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMn5rS8Jj2mk7SuP4dLqfYmd61ecZNzF8mDPjP3sDRHNG4Hq29CGuuXLjcUfw6bRhKYJdYb2HZF4StV24RX97sH",
  "key1": "2CnLhwYSBGSFy5xgfywgupSmE1YxcpzPCGJ68Ph4VmZUx6e1TgGS18b2j7hpKhA46UATbLnHm3mU1v9UXFVQT9mi",
  "key2": "hGcm1az84LwXK1nTmELH5gSbv6L2X5CG2yhVtgFETt4UnJinoeZtgNxGX6uBYhjB6BfZhfJ1PGWnbFFsmjvmzm5",
  "key3": "3ugv3X86jiEXP62TcAbd7HqZfxoFyUkPTGfqNSkuPpuyrwyxvtR3AmfeHgrDCBkx5ZKj2V3g15heaYqj257bGPfU",
  "key4": "5xLwKtca8HasXTSEEu5jbvTsJ1jpPY9MSb89MApoZr9JTTJ8F677ZJnjyUcNH16Yed89bxMpvXsgMYVwTYDiAWRC",
  "key5": "3rAdp3iBtLZHj7Mi9r4eJ2fXsJvDzg9AQMBp5VDJriMML6wxxjz3mZr2N3H9iUXnWPFG1sMGcipL7wYogZDLJ4pb",
  "key6": "56XFs54HYWPLCX2o7jZ6fHPW6MHXbEsR4BsPYnuLnAV4ucXNwBUYqvtKxW37kk96tQ1mEPRd1KoFY5KKoh4bkYRK",
  "key7": "3w3qNdmpuRz567tPhpgfoABZ18oxnJ32xeDB4qZ9wucv93nydFSwNEoyoELRzXAErBQTPdAEsgqTkq5SWBABFSGa",
  "key8": "pveSaLgfoLQzVxCuodNDnhZXrdQZ8CjS12t7kHgsDwTTWyornNcCHoxPSuUNoPEHvoYeuBtwh12Zf2DXjPNiJLC",
  "key9": "2qZYKgcBh5iw3gPfzLhobv7kcHugcEhu2yKx4gtmymvnUdZdcGPX9Nk7xur7uZqq7dJHddemyoK7aVytn849iJn3",
  "key10": "3oc4wpnH1YFqb7k3jTNBqwrP1uXu8ZVumDaPdhR7A3uDmbBbc2BKfuvPm9pKtxNnBJUx3AnbMaaREPkCisYPREWX",
  "key11": "3w9Sf7jwTyw71fbGureCXY8RNFbKMpsk7aj8exfWVUkihe41ZLLMfmsvTWCeBNujBac6ToC9bHSdg9k38PEvNRg9",
  "key12": "2LcxTNB31CE4d8Gsh6LKgxkL3LxzCLHHCRYvwvYfayL7EDFHifTb2QwVxUNu3QLPXYbmyRgxPYZ9TBHL2JLGdNKY",
  "key13": "5TQUVmtAk5cfhjF6RqGxQoHUwDU7hwkAcUwwnkdoqUWEq2LmzXXaQPjxCAhsRCDdip315GqdrU8sAsvsG7TRHJSA",
  "key14": "5bp6CiZXDvzAZTztTsVkwrHqLXmRzHjLrddSoTMBa4jtYtEVhkgCEP2NiZwHT1MNV1DTfWGJsKG3ke9baJ3y44qF",
  "key15": "5Nck7n1yz8hJ1WoaHfrwjnw8AhfNuTtvjyhS6n12QxZQVmhru6EgdME4Ad2xadpKPWNuueLMYa2M4QajKkTuqirH",
  "key16": "4kU9tbezZaFLH9x6R2KynXBhtF2N8nUFkZ8VEHU45rCzcuLLHy7terTWz6hrWT4gFLHczPEASdxT7qBVfam2X4yF",
  "key17": "5wcEZkhfy4tYAkUBMT2CtuUSLnF2oxcpBBGkEUH5j3ceemNpSUw4S23inFEgrPGkhmLysGGtfxGGcNd1SNb8Hjzu",
  "key18": "3eemoK1G2Scyhd4SXTTsVY3oQ3TKUoCQ3UtiTCwuJnSwRDved2bMtQyXB46ZUJqLFgFzgg2ZP7oGy4CPC9AogMMc",
  "key19": "5NedXEQ9yit9vjH2VoSVUSbemLRdryqiYJZZJAWL2s7DygDJvaTQnWpYQNtZt3d2ypJredVAZ3DNEA8AYBP2rg87",
  "key20": "2ciy1BdAJmti89kJ8bLZjdGzxnrq9huLeGEeJvASahZNEmR8WhVy4HqjFowqYKPE44Q3Kbgf9hx2heqvndgG3GoH",
  "key21": "49wsYajV199XQBqry1tTP2SERMKn7HJcjWEUCq3t879x92nFP4q1crx8qyx7gvR8kJ58qWpuRCCJL55g7wi2SyxG",
  "key22": "5sytr5a7BHj53Wq8ZwQZ786FuJ3EE1kBpErLYFMa8ow29vwLwEk5qe2FSseUbitNYkiNKpuKHiKjEoDu2hJbPWKU",
  "key23": "e1fym4VJxa95PLwuSXKEcg1jxXLD4bXy5yGtV5BuEV2EspCqpRsM8EsBLCCvnzRmAPhNNSpfG94ixnVqJUsNqqN",
  "key24": "5pCPTDb4p9ABfxjqpqVCGW7qbGT9U9Gd9rtzvzauZBKxnZThA9cGUZUKT8wGzhjjBDAYpGKBAPXJed5jqVvP4Pvv",
  "key25": "2S1xeb1T6gxrpiBjZXN9HapmiYocTgAGT1qAf9J4do1ThiqKYw3CiRYbnvsV99p72LJ7erp1bqBgyXhHqwh4aNT4",
  "key26": "4LEQydAKVsMRU4QDVa9YEfiZKuc7cSaVgYGTXdcirnWihTXzABxiqSY4muQkNEbKZVwC1ehLPuFGYFjvDxvPXGGQ",
  "key27": "5iQkXf1fSfJWgNYRaPraTpHJrW72Ua1uginQuTuNUuxFaqdNQTLFq2XQD8GbKxWnpANxAwM7eDufw2c1DXQjW5r6",
  "key28": "2MVsbhYoWgqJqjne2mxZYigNqK5HLm7Gz14ip6fsFUjQj2j1FFkKLnFLJ7frhT3GmLNHYsXDMiVgsmV47CBGLYc1",
  "key29": "2jvPFGecJ7E2kTDZTixoE7pr5XG7mt8Ymm2MWq4D1ZSe8mBAR5DKja64um8F5hBNbDAFmrD6p1Dn6URroJ8zXXDR",
  "key30": "4MJHUpAQ1DLH7ueyfNuuvrWKkibTymzttGdyyZwU7Fsn8AACTianZb17nrwZRh6npKkeEkJjjUHVR5j2SH4uQnic",
  "key31": "3mWwKQTqGXPFfpwUHcTBcy8BQD3wkHUaTgB227HozAxmZ1gUWn8JFi8yw5CiTNphYtJC4Y82v2T43GdAViRdNhcJ",
  "key32": "49JsyyvTirYpUjCnajMb9YdA9RL8L1tBLvTUfiR1SBqKBvPArybCtZFCb9EAy1n8BmCk6d815hbHKo7jdkT3Crzq",
  "key33": "2GRpksbBMbQH4fzMZ6QvVMwNMHs3gLfRdAU3tV8QjCwfumuRBptkS6NGqYMafJrWksvX7nNDioSZ1VGWfJPHv1r9",
  "key34": "opExw6tuo8YYtCYPN5XA9shyE1uGc2oSKM61Mfussd6STThZpbjVAWmBNPiuSjnToAafWKig9yWb6EwrLU91ZBx",
  "key35": "2nuruX57mW5mjFGKb1Q76gMeEQUppCKnLVP7j6aV7Ky874WGJ2UCaUptC2AcmufzzHnrY3E3wyR2LWberLREtpL8",
  "key36": "3id4TRMCnh9No2dos5ijg7wznT5ZcEtzBr4KRxTBjkbkdiVrctrTthQLnwyfL71zUFxHz2D1FER4ZJS4jC6aUg2P",
  "key37": "4Ubx1vWtdrAytS8gyyVysPxzWLXpoqyaJYgAqF8DspF8xSeQTxWehGGhCsbkpndm81ino8tQBiNBpyVyc1juEHRC",
  "key38": "41P1eJzfJyyoixkRkxQbqts3CQAN92NvWecyXhKQ9Bj4ptwH7KQDcJUeZ8ETJGPJqz92UHYUVHmnHFR6CSXXV1nq",
  "key39": "jw5EbhFELVKiJmNKYB1DAmPnND7DtGRaku1hUn9BDFhG7eCNN6BGuQjso4LsobdYWQwA3qSmPw1xD9b2UJxJEAu",
  "key40": "5iirhjMpR1iEHoqEhtehSNLSNmAhav3th34GC4JaCx3pQGRRXYjH6pCRG4XG67RxZwBhta32wouGqb2NfUrim999",
  "key41": "8EBFffP6D8vKMFrkjPv7Bqb5CpwzQaReoGaVJwxgs1HiUtSYcDe6JvxfRGuwDTpdC9mLfqKvDJPzeDUVgQvgS8B",
  "key42": "zXVTLyEsRZWi9TWMog4N5DorZHSU1QuUiRy7kcX1tSXx9qU9dc8pKgJ6nE7iYiyTYAPCE6QeFsR8iAWE7S7s89T",
  "key43": "5V8tfR7KqZ9M1XNLjiMn6Ao4cxBxGntgprGH5pLSMk4uKsVs4nPAp4F4GYV6dua4n6qsTCtPjUmZY6pU4TX2KKH1",
  "key44": "5i1nbTUZ8BiEff1rwJDVbqmgj3wnMi78oFj6ZaCSwUUHGq8VjuM3DGvSz7xGcPyemqta4TEwqyskcpmTD4GuDw11",
  "key45": "4nsiUwws9uyFELeMu6DaL2VivEWVUgTofy99rp9tHjLJMtGyMcirT3HQm5GoianudZ8EJhc1K2TP2FcnezpBuaL",
  "key46": "2vLyQJfAt1aqrsUkhyjMVB7WDfwcPmr2p4CVrs5Tv6LE1qofSp2kp379nUxpEAmFrLqiMn2MJ5hUgU4uU6feZzkL",
  "key47": "38dSAWZaVdLeshd4Qs3VL9N6BN7CwBgxZnRShvGueA1Nqcd6DeGgEbcqUrmJVdW57SN6nSKNdHtc8SzzUajCYJMV",
  "key48": "nrSUVWmTsqxCFS61z49yUAtZ64zJkQnvwUqmFsFBRgPcie7nazrRA7M9qakmBpeKER2NYJYFwiAiojGggYh3Y4z",
  "key49": "3Yf6DA7or3n8nP2ixJJoGF3Wm88EKmQvaqyDJ3PSPqPhgD7ZgMT6CU8YUbPAjLHWbqA6s7qC5qmwu1P5b5fS91do"
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
