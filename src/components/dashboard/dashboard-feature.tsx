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
    "2dcACE9UjwaNEx5cSkb7bkV3axMoxP8fCKhcwhz4k2zTtNUvzkJVtC3XiygWELssCpuvsgMhB6fPTF9ZZ6g1dqpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jCLANjfadkGZqyzuUazcmLkmT69AYCARMHJMJraMu6ZWDNijBRxcLacNuPWNnzU4A3goH8tkoRaJ7Mn4a5ajtKz",
  "key1": "4nxhTXiFc6acK8qv17bQ6vBagydKCMRAWWiwotPjFYxDwyqYaixsgTne28ratgRdavF7s2rbG1YjTajmaihVGhoF",
  "key2": "5hTQqbt5X461n3BixqFUBZUzFMtqrPv4wR7UKVzNDf5gbgcaGp7QLvz9pJ6vQh2PEyLaCS7FS6fPCMCMkWcfV5aF",
  "key3": "5mnw72YNemhx9bovJUtRpCbju9r26vnYSfWicpjWQnPGkXLEhDkANyY48xzsWSg4QdaWzz4zpSUM3onMvfMwBttw",
  "key4": "dKPoQs7UPfBa9a9C5SwBcEfbfJdSEcKHSxNv3DxVESpysYsrG1JG8pciF4LeMNn56A3tZMmJSbL6KQskq1ixuZE",
  "key5": "4NTMVpT58GYakaQiPg9U2ut1q4x4MLdPhLLFN93ZgXKchuQ2xH6zqVJLkTg7fEg2aoozixdkVy9wKk462f7ZvmCH",
  "key6": "7URUsVTLBr7ipMamP7RnMeCUT8cAq4wYTHJJPZUxLZLhg69kgBufpgShXMVWGZ8UYJEoFp1i7ocuw5ssBx1pc2P",
  "key7": "44cVwaR2sxivahrrCZAA1T74V1SgVesT1QHMF7E1TwHns8ktuKcRKRoN5NaXqAhcYJjgMXD6PgBu41zxcxRgPZ1S",
  "key8": "54zTvaPP4PKTmJ83ezWQaj6LX5xwZbgg3UHMJgPU1d5anXwuPKzraBLnisRTqxMyC7L9chr5piJj8W4546ckgq9r",
  "key9": "51iFzS7hVNmyKxKRRqWgLEKjRxdw5i1QxjRVgyhbPqvWegi47Mj2jsXTCWUWuvNzHzxrTSkiPSEyFukPGZ23iVyw",
  "key10": "z5YYQiRkuubWraCws1TDDXKzy9mtSMUXr3UtX2N7D1tCz4pyvr7roHpEq4mjiDNkt6dt1QYV8KgLgMVp95EGCEe",
  "key11": "5xV7uKyPQH66V7G5fXAGT9VEscUGrRy5KbmRCYmhWMgtxybAHDCr57JBRynNwD6tz27QcCkJygqtYquS2vKmAE7f",
  "key12": "5RW8NumyH2Z2Bq63oijjQHN538kbVZvGovjhtVnPtwWnPcj9V96in5CQKeZnvK3oCWaf2NZHvTgi7ivVkf4qsyGL",
  "key13": "41afhUVfm8CULJeJmxVmDaS1iVC9wXSfpF3Qg2GeiDDPYhwpnhWrp3XYM7PGTuCgLzyxpeQUXLVTj9Ug6kiCGDvj",
  "key14": "3ZhCSChXQfdYLhbA2bBLaDBo4BfCdZJdPavJivPDE3EcHmXXsZFAaYe8FmvpKEukTW2NtcYPrSUVAEYRGQeKujjE",
  "key15": "yk66EiVDJCuzgeBpKHM1i57RGGY1eyHHT2gwNC4AgkUDMtcF7EWi2owGwcYCNuZzEr4NLCPkwYjo59aQVKmVfPJ",
  "key16": "4RgSryzZY46UkuMhwzDAWtvD9KndgtjWByktGxXgS2rP8czX5aKCAv2RmKx62QUcPN7wezW3LgXKnvv7oTY1jsmp",
  "key17": "47DXK36tHp24FKZoGJ7ZpfGehfbTtte58SmVoboK8US1SPVCPJHqKDrieSkCspqsfkZirbxeF4Pc2ZKitppDyzj7",
  "key18": "3oQLTZrUdiWUyv1pdf1ejVsHhjd9tdVAhpdfmLzmWyybumiqN1XKYMVP9s2xLvWDoxotkyU2uBHLhPpkukhnZwy1",
  "key19": "5UYMwZB2ZTmfmZfmEp19xmbcRSHdU1ferV3hvrZq8tVAQDTiEv5haA6qifydFhPXc5svRGBnFbrd59MnTxhHJaLD",
  "key20": "2YMUJoQsTyGX4vdQcM1oVJNpMLH6bZR2mQdqacxgAj7Vb3L1oR8pByf71sf23tLoSu9zeZYsbbK5kxYogY7y9j1o",
  "key21": "3gKGkuEWujcXdeAWU5LUSaEbhdPpfS5orJwPYgVTpe1nRpm8dt6XS8TjJWkBfZvs3whfJDbF2EZ3TV27HbHKLxwx",
  "key22": "29DoLRqjaEuUrMSZwCak22ZtMeLyLiSthEP9NixUy6AxWigVhsNEoGUpzg1QSxfTfGLkJSykNajUvnBA1PReSGxd",
  "key23": "FZ1My16LewbUoRpzLPkcP7EiawuqXsmGKLMKpULL6mY94P2WVUFmq7ziuYdwQ5mbfxFjGT3BYJDNtoY7Jv2yqUA",
  "key24": "4kMsA4R4979QKETS6zs99i3MbZjjDXhBhcpY49EhMz9SVLRE24eC36RGmqu9ME38fqj74xtq6TxnmUBaRjJ9j8Jd",
  "key25": "2SyNG48fezpmru4KMJkZzustYkAszoytTW6u7EAmT9yqunzoRDJGtgGtgR4eDko7ZY8D8KzPxWzqHc5dhbD89Lpo",
  "key26": "Q8MBL7KVLVvPJNPvHugb3a84xBGqe6kScbqUzuPmZ57pmhJC6561HCJNbbE5EnaCH8kft2phQiVMN5iRrqX3aSN",
  "key27": "2QVAaqckeXMe2zDVG5ez7gSahFs1bY1fTAhrBTEnF7HaeePDzj643gAMN4jSccg5CRD2RUX4GdVo7a6RfMjox3kB",
  "key28": "4QFK8nu1JFe6iAhjKUqWgAHgs7bbLoywo1kH6ffpjFhfzsFdExBkC1U7bGpvFB3DYCQ7vm4Exm3gbPzJhWeHKrHU",
  "key29": "3Sh9LEMtsVET4qmkLRJcDf1ajbGzgpvJxQDXA8BVzZ7Hkby1MadZH17oEQenohYtWLhcEksZXVUNcXBEGFokWqTA",
  "key30": "54x5RKH1nw6QE76578G9CZwWXQKMuhkDqAgSK2RHa4fMmrMnKJsLTgsRUF2jXNKf9tpe5grbr8ZjPdM4LgtviVTq",
  "key31": "3Fj4FwnVd6Ys2vfbqNkjLWxQvP26ThFKfNVVqBiLYFTReGJNdXr3FhMkEFfJDjF4C32JSeRTHDxj8MzhAytg5DVM",
  "key32": "3esc9GmhZnFhTw35FFadp37GoFAtuLrcntoMK1MfR5L7DwMc3JePzbKjUk5c41nhFRhubi2wYFxaCmxTFBkWAZiz",
  "key33": "3ndgjv7dHWKWGb7puB5jUkesELns5P6VYEpVmyo4gfsTuVdiudJn9zGNr8uXWQswjpjxfea7pWa77tREJXb1eQZF",
  "key34": "3Zyo3zFDs3wm8HNBK2XaaijUw7pke9YhLdwj9bNTRhpde7RCCxX9zQbYjrpz7zMGQFHmUrjpb5WBzDNwqpgkejdJ",
  "key35": "22Bqof5zaxtkPc26qJxNr3qCbkEBuV2owMdTA57N4CEBtcxCNLcd5TdgTY9FMv3qFKvgNFzGFUKqHUN3t3xYo27v",
  "key36": "24U2HE4oczJyWU1uvacspnVAVC1X3rKYYn8mxkbZNcqRbx6fsaBzJMM5kFyQVDxLCwXDQQ2P3mKKT9ZFkpTKaUkQ"
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
