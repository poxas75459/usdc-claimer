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
    "5Lg1dmNREFVyeRUajHgDiY8PTgmfVkY5jXGSzZw9gcxMwveERGV7m7rLqdwbt4SjKmxsbFUuTYirJM9ptHKEgDpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28f2rYgDiumBS5WJ4XFR8rVKRbqVZEVZ2AByjzc9CJgz6mGJT4HCGE3vVk4M4PHzG544ZdCkLu7Z942PtbvBnbjM",
  "key1": "j6dshPv1AcfHaibeVHzNkjAdFF8zhuAba5qi2JYvH1h7rY4XJNUD7bdHea4ogZXJaEfm4e9xxQy8kYMct2CfWLw",
  "key2": "3q9tWxRsHc2Y7QQtFjbf664QM1gLyAtyyTfSkAAQMhjGwSfpeVrgGc44ay7v2qryCZ72KyLEuiFNFmEpE6XpqvYf",
  "key3": "5tRFckVR47m8bLFjt8xfcwPCngUusqZS3EY3ktZYefHyxvjYZoJ7VKw48KeVJrr4MfMRDWD4VffeQYwXAfdUhKaE",
  "key4": "3QPXpR16mAtLvHweb7UUj6ecYVGZMUiZvwxjrgPiSNFiKiAFQnMjXjhxcrUbrF3HmstVosFtXghx4HqwuMZCstzh",
  "key5": "4ZK6SSKKpTw6SsU9kytWfhGDKuH4bapoJCxLKibeWpSzydMS23sajbH4KzR53KsTGCj3XBusJ1cJvykEKPa4ycDu",
  "key6": "3QYEe4xiRKTu7YkitXKmFtCTnbdiRYgw4wZkvE5J6SQ62TcsNYsAHSBrWHfbK4MCecqUa8CV81LkZM5kmLhdY5ZA",
  "key7": "4x28LXEW8TFeAvsaWksAH8XEqUFaAUZXrK6s6nzt9xr3JvNTrQPBbs925KK3TvQigpALroeMSHEXREP9xJMnuWSX",
  "key8": "35nfF355Bgu4P39Dk4tz9izZUbvDNS51skc5DJnh8tQiAjE5QwzTwSxK5TYE5HVyYY7zfnWC3gKZmNxwWqaDAMeP",
  "key9": "38NuRDH4ftQRtzSbSUfwCKcSiC96mJQQ6wZsRPJ1JdcHE4aVnwaFrLi3bSGEtFopyFNM9yVP2HBkeUddSZdWCtcZ",
  "key10": "UTkzsUmVarnD1vgzEGH4GcHdHggEP3PeuaMMNmMtTEtp9yzNDE9f9Q5hdHue4kvZHqp15r4GPmTk12FvraNGSRK",
  "key11": "4AFGB7fmGzzT37v1LcjDofou7Z1fKNDryGYodyqGmVABtuu5ayDqmndU2jJ9AN6fWe1UqK68JEZvPAd4Hsq15zGQ",
  "key12": "vE5NJYYX33HVzQu94E2Ay5LBnVZDrmz2EiH23sceRr5SHswtb3fCxsd1z6GN2jLLYkBQKJaPZ7hWpGh5GKX2WYY",
  "key13": "5PjFjdMRAupG9rvAs6aqrVFvJmQMRMzQZd8kjSk9SiyfFi7EdxY5G6CKWJMq6wtFMgKmJhgoUocLGzsUZdAzdGSZ",
  "key14": "5ueJ4nXyH17EnsT6dUDcESkcHXvbapBtsKqRieAdvbKKxTeuqGie71fT35KEKPZmkBryfA5zmZvdkP4NJz2LVyU8",
  "key15": "32nCyVJ9c2f966KNkj75T9FFgPH51D2AjRretf7TtjocrR7LamRXwUrTsf3Ki6xWL1WWBtEiDHAzatG7h5EaT6TW",
  "key16": "2UFsmLgGKKw1MG7n1dqi4aYVHWN26oC6zuk2f7qPHR1xdoFW7PJ3D3GuqwaJ35Bs4dTtM3qhzhDzSaz2FvNHX248",
  "key17": "5QVe8t2Eabg2Rpzr32zVPDT2RmrsvdUnoEXBXqRv48DDyBYnpvXFUEk7sobuHDqd2Fr3Je2Rcv8VfHR35WwivGs2",
  "key18": "5XzutqbJ1g6Mo7ZkcUXtFrJ3wAMHP4cUgQiP4TvZ5sFQx5SwNyf5jKFTAzAUrtJoALTUDCkumtT6zQ8ZNkaM7k8e",
  "key19": "65DLhvSUBECZwJEzVqbV4AFnvhKSWqgRuf7Vca44VCsFYAVbKK3KrAdfLkLJzhKXFfKLjsHFJeUY1KGoBWhUh5eA",
  "key20": "3DH6oXd7roc4NriLmHnng2LqP6kQz9Zo9tr8UhYXShypRrZ1RhkLoTvC1EFJed7vz4zWiGsyVau1Mk5aiA4mLoUh",
  "key21": "3NAAfxuXadu2fsvsc4Ja5uCfVoMUq6RRVUPH3tSRqmZ6AhQVpW6mbpwPKFpLbA7GZgkGQw8hXKRMtnVST1wpiFxq",
  "key22": "nc5Z1NJDTKN18mrzJdxkUPMzAB5pFuSg2GMNafKfagF28CxLbCuMWPCpSppTFHwaTQejGKsdCvq8hBVPcmQHdLD",
  "key23": "657A48EHZb8mjjHeTCYGcnpf34g6xhAvqHPjVnnnfc2HB3q8LDMjJsmpqadsmoXREd7Pt2x3pX2MNmDgxbg6xnGK",
  "key24": "2x7b84zU9A7L13xSfUcGVYgTmbAMeLkXEr1TZ7PYTJmjdA3MaAE45uuGAt55qvJi59BhKDXAddJut9MHwqoGu2XL",
  "key25": "4XuYV12jUUDxARW8wJ4wH8pT3dyWKoFUBPhtg7pz85a8PPzJiY7NZ61a52Q1BxJU5bycT2rezpYnNvv5G2ssYrrC",
  "key26": "Pw2v613exxjUQ5mJLz6tkb8ZRPjxjoxAfYWtTZGptn5SEp1EajXGBaEupZRGhaeAePeQFwf17FtvyEKGZ6M8ckH",
  "key27": "3A6V32ucVpWLoaPeFRAM8TsFVXZXaCDUZ35PSBmjxg5S2gy7q9s9xDqrY5bTF4ywiZfbyKB8CjZPnvgTQMdEMacE",
  "key28": "3iH5KfhPXf4a4wL8okgN7jknsSm3VahwLeCHGR6Dvqzpf8vmk1GyYgT5fXHZU5PwZ76uAHerT1ZXdcxwFCHDzb5P",
  "key29": "52fh9AmXyy8ePvRiNNPiRkH4PyZVViqRXmB2E4iXTMrE5bPc1VHJaxmRZxuxPxFVkMrXhQaXF9g4PzuDnq85JySQ",
  "key30": "4dvFr6LYrYsuxRoBPKwUaMSMEXBend51zFuidVqTG9rT52g9bjYCmWZzUUGdpd7WaTH7sLy4qwSgBKK4Hc94MUga",
  "key31": "5txvNpN1pRwVMCpvXwhbUVZ2CiuWRUUYGEaz8CFWuFaxpcJkmQdtdm82wHMSpp59mc9RZHVr9nMZ1sNBMn4QWLSm",
  "key32": "5gN8zi4xiHzbbpgLLCFDaAK3RUG45ByTfLF18QC6bqVuuTFoEbGZCdCpcMSc5PNqMeiynXZxePHmh1kq9vcPfAL7",
  "key33": "2Ap9NWpdjs4JYYyYSEGozbmQvL16m3a84YEHJisnEZCMdEp7EKi2suNhziHupqNUBrNwvyvTAktuAoRrCrrJTPTz",
  "key34": "4wGH597JQSZ81p2Wx8qV1Bt9To524XTGHhMkbUnz5D3vHJM8FfQ3Zcyxc7Mn8xigxAneMk1L6QX1qD5gpvNUKP8r",
  "key35": "5nD98uGrTZ4DPpgaoWddtahB5tPTLgLFbGLyysDwxu8CPWdZRjE9wVMpr4JDHVVG3XTdSUGAU9AdTaBvQVyYEGQ4",
  "key36": "5pMPzaKHx6Yyzsjtd22RV3pox2XkuvqgpVhD66KH5L7H6CVqWEHHgMZrPWUZdcEM4Equc6ohH1VxmvssiwC1VxAV",
  "key37": "4FwztRZPtTJGrf6ML3HvQ5t2YqGRV3TdWyohgqtFZodyz5vuhTZbJtbFUdXanMNiy8dXm3dxkuUR9t1W2K7RsnQw",
  "key38": "4yZTmXLLrLz67ev2rxC7tVnLsPJF1kPUU6vJ1173CVFWP3iACHc4FzhSrR5JGpNsbT7FmQjx7taeo79AtFg5N37x",
  "key39": "3wTAm3iT9a8h2mwspQ74fBUUAAqtE6uDjNMVhVYqbFBjzZeCekKgVbVWzA2TWUjW4G8pqYcrFqEnymHPXrVe4Xhe",
  "key40": "5niRkjWPNcu8R4QgjMEK6GgkuLy91dcZte4NQ8amHYn9R7BUh7L8grRj8EYmZ2FNVD4ZbGfLGHVWi7rCMJWM7j7C",
  "key41": "28iH88KoCzyg6EszreWK8uLyeecuKivERvgTwEGCeqBybfScRwaKREUDzp2uJFPTYv16GQxHJ2PxxYeJPGwKgRwG",
  "key42": "3fLxL4E1rqFCyDtvAH9kNZQaeqBsFFXRcL22P5MF5D8WtG4LHYqv9zcC1gwi6RxqyVaFUqnapxxTSCUcNgCBd19H",
  "key43": "2DDLQmLj7tqeTv8gUkbqscDGncHaAp143znoy9koXeALbKSJebjnVC8i9dKMf9TKrzEY9FwNrTMGbsJj531euw2U",
  "key44": "4icaCpsU6oKTmvEPuNk6KjZDH5MjoRuvkDHSmqh71woxuytKRjMgBCMnh4JtDpCSQz61Jhy5w32ns1eiCrCc5ovS",
  "key45": "XYyw1jk6XR7qchZZpdEyXxB3RUfMA9oXgN6gKbdiLX51bcGPjGx1eSrh7kfDHiULPghaqqLqs4hCs5KmN1coibo",
  "key46": "66JuwKtTEHpexJJ5GLh4KXn1WskidKSiSSDShJyhGRTJdBHnj68iA3sP7euiGBYUbDVQL2CwNs8CMAh4CmM9Siz6",
  "key47": "58A4iJrC5fZSyuYFaZ5dUUchr7fE7FKL7g9oni7aYXSTxrgJXQA8nzyAnGKc88VJDgm99t95DLKro2ucdxfsfHGJ"
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
