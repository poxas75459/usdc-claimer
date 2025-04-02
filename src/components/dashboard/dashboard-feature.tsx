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
    "aAGE6KTaC5RdXzUmT5qcMqDXLT3jf3JS6S8X2wuzkL8QSQJ7QKZkbsLoeb1YaKEeDCfsDRnbNm381ru6dShiqkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YnJcwW4oNGwDzxanZ5oNubK4ByRqCbHUxPYN4SXHmyCmdVRUjr95Q1wm9HouBhV6riiQ8oBoMTtZZiFSMd58HpS",
  "key1": "mkeFL2Mxw3EbC2wbu1PZFFyQWtJxhkgkGhiFiGDM58gffN1NjU1K9MPLceLuMDGfpjRct5VxLHaXkzsSdPTFMLq",
  "key2": "4hhBicF6yAmFVcbBALKpSWYhojTLxUe7sRA27NYKuoxyFLhGkMv9CvSB7GUFZwxsTG289WwMk55Pqmz6tvqpKm6s",
  "key3": "5MhYxKf87kvCoyEo1yLrhGEH47DuTbNZ27kEvnTgCsBHvz9YJSq9HGYWT8ZJf4HEdg48ozEGhX86vtvyvPsrBjS1",
  "key4": "5t8eqNmwqur2VsdTCK7s8cSwLR2FVKUXNm9oKqrLDK7dD3QfrkhQeevihgNjb2K3SXDE85pRHuPg4LfVSgJFtest",
  "key5": "35rjaP3NQbMDfDU9K2y8KpypPwQeKCtz4P5ZMJXkSwH8ucommupCzQAEuu1DuJqohcJvDKNADF2qNhV4XQqUzvse",
  "key6": "3bvEqJ9rFjpSEt78KWVKKeVhycEhYUp1giCQ2qEkTAkXdkPMdHgfPfESCaNAzCjjLUkFuUUzjDkGxDpZ1BJLGp4P",
  "key7": "39Fyq7Lz6CWB2R1m8jsn1P4drBWpiK6tCzYevYbsGzFoSoxSiU1UiKrmySnbYUmPAPNhknjJ3V5KJoTjmRY7BBym",
  "key8": "3QRzUKRMBmtHKKVqvPyHVa24w6sYhL3B6iJj9UCxLCjq1ovu8XJGZygPpX8WdXmXHbpdQP9L69iT6QeS5asoaAHq",
  "key9": "5tyCFaPwQwzdqLruuq4kuKdeU1PRcq5dhp5W2f23x7zpmfgF3AdgqiJBGxazYDBjBYizBufB7TtkAx5YtigoFxSR",
  "key10": "3cYx8wfGDVovadq8R7tJUaV7qHcY92vLjEuR3SZqb2shAJ6vsFPyfYfupsL3eBuW2YaeSbhFiWnwsaoXgwwCZehz",
  "key11": "4zWC6NAv6mdDNMKjmiwnGSVz6MXxWa28Tak5UQbLBMMyT4T4NoUC6KZ4YxSs4M5oHDqBYGQXoLsMDTaaTzEceSEE",
  "key12": "4TVaZjwHQLyooRE3GhqBR17aQbtw9fPwPkAYaJ1DzLUZ5hAah9zysB9zb78Cserxerq7kydPj2sNJRtoiYXkij8v",
  "key13": "35gCxtZNKgNM213iV1A25t6W5VXCziMWwTtdXqgrG32vqqDQzfubG95YgaLkjy4SfN8emHSehvvnpsoKoQpysAGa",
  "key14": "58jFEeo6WVpJbTVV3nr1QQKVik38y4f6qfgaYTU6KG3M6Jv1iTFkciDiop8XZUujm2m7XXrEgZ7Qem6bJ6Bikwsf",
  "key15": "3jqvcftF8Hre91zLTixrQQgjAgMCWxexdBYyPi4f8E3jpnbxeLXnX4bHHatPiLnv2iCQTSzEQYctse3bEDK4zTgK",
  "key16": "2NcqyHveQY2QyCKPuwRh6tirKidiJLAY6CH57yAXdMZKXqWghSMSm25WDF8b8YqA4SfgHzhMzyrUDn9Ah3ddUAMA",
  "key17": "5vi48ZzzPghErGcHdcBwwBrTCSMXEkgSjsfg1HqLzUdYqckXy3Ps9Dw3798eBVpyDsyjD7bQnB1kfgb99tr1qrNC",
  "key18": "2UD9UNhUz8uHyfmXsSjZRhFWWYgF8hDWT8VVk8YjFg8shNYTJR7jjic9ccdMDos5KVfnesCkhaZ7he3LLnM46k2i",
  "key19": "2J3hKhw8eVkm3fUfP63MBEfwoWHJDMQXThHeuJTwUq3MfL77RPT6zqrgsbzPAsVy26t8Sfr3qGTpjHZAB98zFihm",
  "key20": "5mjxuZFXu1dVGY7Yxzpb9PEUg1FpaLuhSTMhFhEnTXE2S1dfwgwwTequex8D5BxnuwLKWdsZGPFuLKxPxDZk9GLk",
  "key21": "gjByUsaEJH1Ud5LKqftb4EQVKYGtwHg9EKFQuC2EiC8jRAaTd9mAeYz31joFDUzJswFKEBiqmjZw1w9AL1xX84K",
  "key22": "5KcKzC54iupWJQatsCSMegg7K8oNUES6A4TphF1dVLqyEdL5b3M5Q2z3Y5Axx3ndtw229D9p8YwWWS5EGp85jGQK",
  "key23": "3pzC12czt7B7pnVkAPbNoYpNVPJBZZCFV43vrN4E4G74VTNxwXQtr2fPwJ4Fk3d2mpHvqU4bNK45Z7JMhiRymVHk",
  "key24": "DABu3k54n2vyEckDW4VzSfidMiVH8amZ94MreWvxYtRYdwmKvQxS1c8p6cBLobLNvg1HJzTZZL2bXgrfBAXdHr8",
  "key25": "2SuMJqDKyRewmTra321LcDWhv89xCUJQtZS1Atv8pTPbiEQhwEpNxs1apDtHvViCg1jEzFxEWSBmK18icxWK6H2P",
  "key26": "259MDiLxNAaZHmR92mD9GdavuTFjyd8Cj5Bk1ZrCnMn5foiCh5mYW9hSVmYeSbeXzmy9mfq2JdBY5fSZ45T5ixkw",
  "key27": "72M96wH6THSmTDYgHtireh9dkJ8WeQSazhRvrLgDcUrj6UbkoUuRiU52GczvMEXDdy33MgTHaxoajK49NLPur8S",
  "key28": "4QV3yFZDNDAcbrqGhpMuuBqS1FrHK7KjEbkcXTDfYTDbX1eXcW9rC3GQs9oQ3gg2p7erQTK9mQwsz5P7wYYmhFpp",
  "key29": "iFePx9vym5rixJczR3rzTKQ4nqJ2AYrg7vVgZDHD1uvch3UrTH9KmjtXUXNhJ5NpndgaenzwwAEEuFke9aZoVPR",
  "key30": "XKgewkeyyx3PFhBirsJZ67dHqqvWxDL4SeoTKQsJAaQFNwmMdkcRtmE7Ph4644vzFKJmvGgptVkTvkChVTmWhLs",
  "key31": "4JbeCPAn67CjPYngn5Ydu55pzydBdgE5yFGkuh11oMwFJLr88zGHhgiVeqAtrwkgPEEy95gvcfi9XEDbn1oFqenL",
  "key32": "3iGKMd8VHfD3peXC7XSig7v9vs93Nv7DJBRKaWToA9r5vrh1HiKKuaxbXvW2AaeYG5CnCBhNeNtDX4r24mQZ2EFq",
  "key33": "5BMRqVRL2KL4sE2n6LAA3cug27rGhF8Abi6sDqRoDn4kQVF1xD5ysBxeczwP4KWpzFKbE71HgSw8rfXrVBJc7pPN",
  "key34": "5X4aAriLaY8wNUUEWDj1MmRCnaRugpcvW6CYtJFug78R8LQAT7MbGhyG4FZLbccEC1eMgVnooo1FGEBew2FLZDjt",
  "key35": "65PLan1p3C7rgkyY4sCEEXze9dXvgq6zNdBLdfsvHqPCJxvUZpc6cMktdi7djAPFHvDfpmqfBh6PVJUDygMm1Z5Q",
  "key36": "G5eGkA5fcKf6vMJn15RLoz61TZKhWmQZNP9V4MCGSoZm3kKrED2957vQPN1Sn5QSfXmR2A5gWPJVFVACY19SpYM",
  "key37": "3gLoJkMgTjzU3VXd3tAgjfym9227jTJygZMw3sa9Y1URDxiV46xNJt6xxVUCfjuaCC3DXfYCePbGhcH2pBuF391N",
  "key38": "3AEdnxHCAthYh1JgDRrCR8MX27ipDTdQBhwcVFLrqPrp5PPsyUyfaVVf98FtUHw7pqHU2h6XNkQeUDtxRkLiUJtC",
  "key39": "4dw4ZR7ntABgw5pbq7qP1dvbH77Rdg36bFU9ozgKa1Cp8L6YwMnkU7CMnU54c3PqEdFi4FtKyPDMhbmGCfsuAkqS",
  "key40": "3PVvqakEK4U2XzhGsei4ju1NHxJDYAvcwBGpQtPP1RuUzwqLbichT2CvQZhQDoPyUyADxpSqyEUxBZEvLFWgrf21",
  "key41": "61PkPTGPAbt5X6QUzR8oFevvAww6nr7AjgY4Ph2MhuxDqnCGyPsTKEdfMLn6H9swPw3wKKTDfhuBVqdiSn7xFKM1",
  "key42": "BaLvJ8KQHoDCS3YzEeyxcxaadKVjywzzP6e3CiPRWsUGNbuLvK7p9fq9dkGqZtTK1RoGXNbju6SuZeUzFX8KgWZ",
  "key43": "3mDLthmN8vqaz7642pKYUv66qSYpK6CBFZAUm2hrLCChkPBq52fUzu4xFvWV9oircBYBkJYPHd5AJEi6uQpzLb6a",
  "key44": "4X8mNxCHJQHM9Kk4fxotdo8XPeWTZH7rKxnmN65PqbEEsxLHA8m2rZ48DtpY8jj8DdVve6a9wbnEf15NFRxG6Cs1",
  "key45": "4udAkVSD3D5GCirijCA7ygZQjXVh7DNKvhhNxcDLJi9jWmaLxN9jHxkZSoLPGrqRVvxGxt2heSkSXJn4EQmSKpkW",
  "key46": "3UE7j876nDC8ro3PnugABsE3FNyTHQ3hjqKVKGaiRjB8VvzpFZEzDSgbqT1VyxDtQqdQKxeXFroitN8Q5oDjCt3b",
  "key47": "6rMdqbXYxJXEUz7iuf1mcycpRY87ji2jWWkkLKpNhyvZgoW3Y16Gfi4rK2Jrb7dauEi47qr295tdPGmbXMriAU1"
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
