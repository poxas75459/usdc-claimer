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
    "jiNTzzKmNuN13jQgTsejk6JZ8vzXQFwMVERAh7UNsjuETg8KWxUo7wKDRXo7o9PEYEdu8z1GoTx3JSHs8WJqed9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5Nux95pT1QR21CPpA5wzjpX788Kfv7nk2yBMK24e73XySf58XNVmi4zpHHb7X352q4kvsVLUKD8jzV6dMv3Sen",
  "key1": "3ksXUDQ6LvpHvp7x1W8BaZYhunpWyXF1R4QMr2nfyyPoQ7SJsuLxu5B2chSv8bsNY1j5utQubuFa1PXxtV6gBpsy",
  "key2": "5UtV9FqXrTdWVXUsKjcQ5ExBWNErBArTKUvqiGgf2AdH9dunSUEUmY1bK6uJK8ZJWVCwLXqqzT534X57qFLqSK6S",
  "key3": "2fMumGci5tqmPw8bHcQFxMUHk9D6EtveABoEaxRGtGENAzV4Ff1HoxjLJXern6TZ63XFdNF7hKekB7YVh9fvbLyN",
  "key4": "yzuwSwWnRU4nsDsHVBDSPVuFmiAGv8exYL456pGzwES74Vt6JY2oDyscXF7Jimc5JUzBN8g9jscC3HifgJSi8i5",
  "key5": "31yM7M8aUQfNBn377Dbo5uKvXUcKdC7su5B17SG3dHfAdCFFqSLkEXBjvVaGeCPfg2nAUvuatWFr1w66n85eA3bK",
  "key6": "3ajo9hHwy6PnRKd29aM8yodscx7wtceE8a3Jnubbj9AryxvEMpXyEgEQBtGCTZtVxqWrnZpuex4zr4Dy8q6SrM3G",
  "key7": "DNYcYjkpfN1F8wxxjPjRSe7mA7BK6ED7ppGQqEt8xWCw78JNjdebhoWUvnPwxsazwG5pHbZ48VE84HU86dxgTJs",
  "key8": "5yYcm3Fx2VFF1j8aTSohXLUiG5cdoMaofe9BXBcDWEJsyijaW77Fqc5ozvKKS7E29j1wrq6mNP9V8GviEgnS71vt",
  "key9": "3cZiPKjk4huekVR9zse51aiXFx9nwLZ4MAxStqqjuo1j1DHJQUoZ6awPHYDgNceeuAytq5FhgFqfNJQKYDjT7WA1",
  "key10": "5P2UqQkhxuCsB6XRqNUhkhYa6UYCbmnhm5n7fQzDkbeNHf2hY4YnadwEynNjDmREdHeEfec3LR3rafziLLtzCifz",
  "key11": "2SKXgsDqVNKwqYBfcku71Vk2Zn5miYzw35ycqVksScahxhFib7Sp7EwS4zQHcbSBXb99EKF6kQAVMhWnmaKREYrj",
  "key12": "4SpYkym9in73BoQwCkh4vVHaLYqNupRqcwaX2i7aMVcmzdyMx1TxYw6HmQgs3SwF17M6UmXDXJcoQbnkMDem6tAp",
  "key13": "2oSJ2t4h48RiW8DT6H9x2APoP2uFBasdbmtXRt7HyCGZDppeGxp1mVpsmRnDtQXDVEYT7ANKtq9AzVRjiLK37ZP4",
  "key14": "5QCoYzCwU1YvzWp5jioEox5aNdSiTFBf1AsMngyVzbrTeE56egKGQshgxjA5dmtvJs4ZXLNNKtek46JnRD9N6L5L",
  "key15": "4Rh7GBcTni33oMTHqjYyHLGc5m2fB96XiCVbBzjzsXMytRi4N5Fu8Z1KvmSREdc4rWHGmQmUq79zGhBEXZvDtMuf",
  "key16": "Vg4jeaWe8mz2GVG4p1kjXaW2xRBxJYUv7CZsVQArPP8FaPKoChMsGHsieXRCW3XEoGn3kTahoLoyJafNYb1MHuR",
  "key17": "sxJGMWjRJghVeV473QriQ4Y2nfqGF6dtpSzLCD8YTTZw7EXLDT5Ax4cT6it1unJ4vrcZB1PYN1mXxGTHLLh996Z",
  "key18": "3hJ7Ux4UyMadcfMjFNL5cfVUqGU3kHkKpLNv2Tj9RevkZuG1XezTfgt3WdQMJ4652UvCyXHrXoH6Rkx8WrHqGiNc",
  "key19": "2vEaSfLA1BkpmxjR9dHsWGoESoc849BuMnU3f2Np1RT9nMdfgef5UnmCh3jxtkVLZRnB1o3R7Xpv6gq7GVgExnWJ",
  "key20": "5z39CVkDYMqYNMZNVdu7X9JFamLe5UKYxtFFk4dJuHUzAwEvuRvEXU8npfxfNqW5cEPodh45MEYGcngHRn7Hw4jN",
  "key21": "5wiG7wfNSQqewdJzjJpB9oYFwosNso8fkTSqBp4WtDwKE4CnUQPH5VSw95QnRQvM5qPFQeoePHnex5WnyzSaJdgk",
  "key22": "3GpEq3bQio9N1ZYAuw6EwceVDUQr9bpP1stmN1nPoMFcbTjGh5N9JRFtyBk1w2tLVZrYyoDtgfY7W747HZ5XEeRT",
  "key23": "4TRc6R8RfpHFe36zh74frWghbgDt97NfDDvvANKBYAFX6mPYoMri3huEpPiFw2W8JhtyaRFRRY5NoduxbMmtKMnP",
  "key24": "56KXKRZ6JwkMK7acrQFhKSoawH3L11UWFF8u1zorkxPRPW6GU2caeMFxyvmBCk9qQW3pWinzW2SDnukqtcRxcoLM",
  "key25": "3oh66KjfhNn6qT3Jarwo4JR1XDRendDnJqybt5WMGfVVx7adECXGeuY3nwaspeKSmkEqtosKM4aB1tyRB2Xu5r4K",
  "key26": "3Qt1zFfi2ZfjsNDZ3UMvBvytTgaW2tmMRAnVSWxVCLAvtLJg5QxUjJTAdNzuiKRfkG2tUpz6aeDV9wHK88rjQJVE",
  "key27": "yM9JJh9dt3ehKoAQjT7DHmm4HzLqG3mLW6oTHUndUWdZErqxbcyYAx677fFYRkiHpBxEgbmvY7pPTPwVhjcNexK",
  "key28": "66XnKsGXz3ahTFuCtR7YbEgBcMq3rXEeRwaNNBEwNoS1TXkMPwnmzbyX66z5aE7itGfVRXBP95LeXYP1XyEJBVUz",
  "key29": "3djp9GeCLC5uuiVYJYLfqtq5GQ3Mhd69e9Cbbb7hkV997teEVjwzfMtKQFNXJbkfd4CsNEcqVsx7RwkuCqRropZJ",
  "key30": "5ZUR5hUaJh2Gd9r35qmkFeX3cVN7Mm1m9ekuqLcoDKapuAf9vQdR4jw4phKr1BGzvK2SnxCZWbeZh2NVRDANQfjT",
  "key31": "4XcVk82wp3Fb2Hunze3TdJX9ifLug5BzEuqKGj2Q8CY1e1CQbz3XtSoJBAv1wfc5YNc5sU7bSpqqy8SvKkXzHrt8",
  "key32": "4qJLpcrYxnMShjh5VGi39qjJLb4PwA99h426HAU18wiTZkXTyb8jc1UucuaRP7Gtc8izxnWSxSXxHKZ115P6DzZb",
  "key33": "31gSRnXroqnEnaBLeVxoHEzXaFi5m8WcHD3omqBXNx7pGJq9cvf5jGvquVAW72AEcHH4R2NHwp4TeXsN2dh33x3Q",
  "key34": "49tQ43ggGvHysn5zWiv1di5i8RzDLMZpvP3CDGNe55GmgkUxAY4woAchZ9SSESTYum9TRNocBcEsPaPPeXFgBvTg",
  "key35": "Viz9zFa9h6Rf6Cg9iR8jZ4g3Ygr6bed7Esn1fMkAXLSoHvjh2an52hRQXyEnsLu6V8n1pFQYrX7ooid6ncebpek",
  "key36": "4uL7sRSpk7sfQNiFFti2QUgbVxhYkakXJz2QTEU4qAq23FSrW76ibBVTzW6oQ98phvn3a9a7ZAfijFinuftkkL1Z",
  "key37": "64Q5ogcHi3k89RUQGpL4cq8dLYQ4r7AXbGBKkRZM8ZpwTfx85CpAAHsU3d9Sajre33mFKH4vnJrPSZj3aFvK8vUK",
  "key38": "4Uv7TxAmcWVhhyM1zc8E2HaaYHhELRkCZkoiThXTztwAMDFvGscnDZQmU5LKBQRFhNH1Usm7RgfEsxQV17GKo5oJ"
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
