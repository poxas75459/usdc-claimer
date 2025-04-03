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
    "483vMrsJ4ux5d28UoEyG7ksm4FBHqjnWJUME8QhCMhXVtcZRakmPykyCarDHn6id4sWyDAru6wVq9qsRAPNxzbnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rPKcXovtZUegM6HFCXLM1K4Rqv4BoucoY4nxaFfRy59MiUNRhC2aZAbLYHKyjQxBAq4BRMccgu5YpFNDUyLkcsn",
  "key1": "3tD9B47D5MZvtESaaxdnPiMLquQQfRoKzphPmD2GWtAWCzCcL9wRLAA1m6aVkuPwGYcj7NnEngUMp5N9MFfXvmnA",
  "key2": "2LPG5KFKNRjZkej9nVNTHE6hHbWGdJhHdPRdDtUq7t12mr5rszXau9dXGCiuKHR8MGNfafs3L45cdj96PoPKRnQ6",
  "key3": "2xCaVfFCdMUFR4Aqce4EqQpcGKJ4EiamJpXV75ZShoaFTc4QPcXvcKq2R8pmNt6ZCCD9fVsHVMohLzEUyWY9ZGh3",
  "key4": "5fTPJM4JhLU2jKXFAPecxUCDgygfGoxN1Mps3wVUXQpUAu48rPzzEF3KL9XiBEWykxNN4tk3WVLTyVk6XdRQk1aq",
  "key5": "K627JkLQmNkYnmZJwd6crwFckTcM1LsGLaBxXTT8shV2H7DNr7gPS8w382WW5niyCqdko91xJ7rBeiRmfktC7QU",
  "key6": "3v9kymJ3yq6AKeuYgSL3nUTSVUAzy8uHmQFt9iBgnQLhtLSsNZNNbaZtWMhUKi9GrbrJkP9LrLYX6mnnDzuEvc5B",
  "key7": "48MgpDWUiymNhurvsggLV1g7CwGTTFvGXTnsnuw2zKPRBXbQrtVrRnXR993PM2MynsGEuNFBn3u9y7LQ8Qup3ESQ",
  "key8": "5m5gB4xGteZTBfCdLsxRK4W7gUu5M8kbFrEqU1ibzutPMae4G1feY8mkD6oGaZWiJijyUJ9W5PZMh33JD9irwmRQ",
  "key9": "5EsopNGrbib86bhjrV2bhY8rvU3dxrWRy4BNRbRpDk6DDEixVPd4GRzzLrAjU6acdhfgDxfkGDruUSwQsD8rBTpj",
  "key10": "7ChhsU1X3itBR1qN8JTH69cZcf7B9L9nt8zxGiXrq6QLCYxwDzL6iKddJqSHhfBKDLCMkp5t8g7KErBNt7xFmam",
  "key11": "4sJDSFDiopjjXCHcfDnfuHG4iUz2rpJpismPZvp6oCcfMwXFuQMcVkYhiFZqu1uwoPby3p6akRN3bqLBvtzgULbw",
  "key12": "2KbzMwqJFjPu1rV62LaAKzn11BYdbvpVJew34SHcsqwSdQPSkbTPpz1jR3THtNiCZjaNWvHCCKHeDUNJ9zU24MPd",
  "key13": "4pxcLQXppgVhN9UmfAoiqTq3NRkEEaU8TQULw5cYPYHsjXLCicQ1tRqe99VQKnwukGugePSrkNTDW85FgS4fQc9C",
  "key14": "Bnu16KtV7U6nEHD8NxdaGUeMCJ6qJdQaufumAmxoJbMbPz1BnJT2yUB2tHmNWwKcnG9tEVc2rU39MjRFsqiGW42",
  "key15": "5dXVMRFnCer3TjNxpdceUKyF5EmKw3tfqrc5d6vUesSGnqUKZM562W2GnyocTVQ1xkMKee2Ai5HJbWcEkFgUXysm",
  "key16": "2hnM1wF7RtuQXiR9rGt52F5nLM3ymYmSLdDb9VWJHRMifUY4VYAFgLyhcoSd9m7G1Aw2829cDBr6v8ukZ8wspGmc",
  "key17": "2tbncj9FVARqfpykE7ukTMwoWiShcJSwY9DzBfbCMUh8QnuuUgKhG9z18vuwp3cpQLAnhWHBnnuxY6rSWCEYBjJ6",
  "key18": "7twBNEUjBxCKksw69CKE9ym1j2yuKrkZKYwHA1V5KvTigLpJj4x7ErBYegkEHsEyYuHMHZZXQ34EJsF9WUhn29D",
  "key19": "2VxxPapYvLNn7DR3wjYBAK6DEcmvGKC6h4HaoogSvWXEY8byohkzdKTahSqbVjtqbTZbjuM8XuyFtqgZjdxgYA1P",
  "key20": "U6BvTZJvjxwi1sB9gtr5ksQsMtEfqbiK8vdU39WM2CU8QUgK3mZh2KVPNjuKLoXEosSLJmYBD58WpoPzg5jCiJF",
  "key21": "4mihvZEZwV1eK6JWHkSp6Vix4F82eWhLadu8psGdcKE4oDavtebyD26uWSoKqBJGxkiWwieGKu7WGv9PMpwi4xAR",
  "key22": "2WuyskoceFoUgfyL2jvWEx5bX6xDhqJcc7mhukvxKXG2siVakuVfJmmbcjYd3637gK2wxwe39jqqNrsdUXDCHRY9",
  "key23": "39wjDhhuLs8bZfxNBb7LGkFU3rzWu3EBCfttTyVDjvJSb4aUPzVj7De7PwcEadXjSp9agpkFgYioB6w5Sbx9h5mA",
  "key24": "5S6RLZCA6grvqnhyhqqx7AraxoWudqHo9N8h56SiDT2CMxpjV9UWCoZuYGe2wqgya3T9DrVjZbtFZKXc6hJ8hyn3",
  "key25": "5eNF4wLcHL5x8hRxWotpPubwxD76TVtAj5ReEAFvM2Li9eASNzaZ5yqNXtVYtPfzYB36wKEsFYMbLHv17Vgomqy1",
  "key26": "3ovYhsYvggEnXcFWuk4UQJxCjN7yyLHMeAxZQkJKVSCRAuXnJd9PoNz1D451od9LKBvrMD6bAkjNxowEVoxeeCud",
  "key27": "3hi33PELU7nAqrGDP9tMaczguwsrWLMTm9AYhkqxbDf57sxNBs2cNiYWAV4VW8Sjk53NJSEwDS5v9zzhoaLkNyhJ",
  "key28": "3qoPenhBBqN7LtC5S4xXFGinWymnwgEBtxyRCRw8BZjch34G4NtMveBQ93u5eVjW6DBJ2giT5hEkZefT4EgEsPS4",
  "key29": "3xE4ad93BytTVQeog37YyTH1naRRS5uTRcB6ERZhzd28Pbfks7thhwZqmZBmqaCi8cCjhtfDHKHD45DSoArui3Gp",
  "key30": "2y4gKZSLTn7tECmQ9rtHPyqsdZneTTAyZVjMMBpwgbQ5jcjTyX4QFTLhD99kTjU97kQagbiUyRbNG2siviVYbXqH",
  "key31": "5vDjGp21mEQJKVVLsCQbYbZYXzwFgTFNVb5NssazBqANvvvQU7Ws2UZcGkLApSDhGvfLG44TntF29ULuiMGn5LNE",
  "key32": "SCEA2ua4wfABsHiPQTm1sk5rcj7Sp5FMMAyVoHaLikMVzWMkaEcvDC6mqcH8YCEaQJcun7d9y4FWHnaM9Se7v1f",
  "key33": "32JMQfofgtMVF2gksF3A3bxss1sEG8Pqegb5MeVRJuzEXxd8pzf7vBptCjmMTwRPvaoQJRx2DWnxowKDQEuXNvL7",
  "key34": "2g9Rf5cnfYPgc4UN7eDx92mb1dY25gPSnCgQVEzaTm4dZAkrnYggfpuwLiSDMMHnQ3A3auqiVtG4rMiDsJQCi6ba",
  "key35": "22MAz86d4QHpczd4Yjwgrb9r8zphgP9nW1RLhzQnYN7gty2bt3Xg8VeywGhyarnH5ThuAeixGHnygudpeFPVr4ws",
  "key36": "5wsipfFzGUW3PXHvYwhLBttWWBaPW9jVkPDtx2qPZkSezfEs9a4VTv7TEyXHLJDFD2LdRcK5fSnDCKDcJwydSV8i",
  "key37": "3dkxgEUYoxWp58jFcjifwHANJE3PxGVHrSEVuR5vRzaQ1dnZpXJvBUJnoEPLME7rNGLSZsm9RXze7maUW5KyP9cD",
  "key38": "3frb3RN1CbC9oz6qsmsA2T72BZ9C63KNiEN3HQih8SQGP4UMx9USd6E5nGRGGrmAefVFqh7wYSgXX4tGRgLdw2LD",
  "key39": "oQYB1Ry6fTEiD7L455W28Du5F9yGLYKbwRA91Wvsni1qi9hj5AQqJcFz8ThHEpeUGyM9bEEjsbvLGrondg91MS2",
  "key40": "3uXxsPYFWRS3HXTXkPe9jLqvYpxXADJhaNfEAuE6KkWhbGrfgqYisPpe5sbWwJ6XCgAWFTjDUuNxQx2UjfhHsWUT",
  "key41": "4UsXKNcicsoQof881EFGTaS4cJzsm8qYaJ92LcMnW9skfrqfdfDcZ7ztZSx2DN7swF5Mmfe4w1t3BcLzwuNVYWxQ",
  "key42": "2qZUnBWypTXvD9YFFHSbPu7Rm2qB5GsotmV3EdoGWPJZyB68YRLtwnjYV9vc1djhh1KmBG1roCPFxQDEdY5MBRLw",
  "key43": "5omKTLUj86RHRrfYxBuyDtzwFLuDMkaSEEFUd5SKh7WjQFoXtZELF8GwZfEWEL14kntB74RVURMyRJ2ospNz5pip",
  "key44": "5jaJZw7tzj7F3jC5A6ueturi6j8oa2MCBEGrNSSXo1LGaFZ8cu1a4TyYNqQhw7dXwnsef3VWgBupjYjJKgUg5jnz",
  "key45": "676KAKiJPmcKnc5UHYdpBWYaCFV8Rg6gFrMAxqMNT9dAdaUenoZwNbsZLGgFJhKLear5vBcgeGtenmmkc75tyQRE",
  "key46": "2a43JFBNmP2FKcbZCCVv7qriB8KbA1Q6JJPu3pBgGcf8DFMBYMHvvc1Zo7D9bGXMw4R9SjNezajPQGEGxB2DNHPR",
  "key47": "2hNejd3keCgdvKiE1UrvGNTTE7Kyr3u3guHKGgjV3LpHRC6j9frrBjXA8Cs2fGWNe7GAasNhzXVCMSXMnutj6ouv"
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
