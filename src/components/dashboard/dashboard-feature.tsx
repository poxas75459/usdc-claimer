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
    "5jYrbAyXecM9vciVY7ve6ypqjYpU68c9sUaNpgGEm6dDC2CiuQTnEe4iRTS8DsABucdq85zcyyzKQScVcKBvYfRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wFx5y6wt6cmR49z1E1FiFYesaEhHo1wRPWBEZV3fUKBBjacEE5pzyxfxv3hkeZoZPkikFiFRh3VF941DCpQ2XXh",
  "key1": "RvKrp9feaGMXB2cNh1WKTP7zHCZphZvUNptKYwreQvakQaZoxqcuzahkds4YwA4TLo17xmAJqfAUYmgLyW76K23",
  "key2": "2BdF83ryjv3eVgvDWK4ijuXAJU6uGhTApgDXN8cSJhE2RAVgtVRNCP2tNrCu3p1kpDjX8rR5Z36f4SEG9229ys6Q",
  "key3": "FA4JXABhHZn5yQpnkoEygMZ1uyA8am6cSFq1ePKDCRcgjv5Brt3wJVZU3chX9AQrxoBe8hMHyBpFvAT7LeeqFPa",
  "key4": "4vYZHxxwudUES5cb5XY7Vex9rJksBVvMhqQrKo3GAcoxFnj98yaUtKqBjZ62CmgSy8xNsGB6LSfM973imWymkKaW",
  "key5": "2gJMnP4ihzZqPbBV3wd6Pw3qZJ1dREHgZwSdGmABT9nDv4M4JYcyQuaWWhKsbh1j5tHztGm1SubGceycpgnEvwid",
  "key6": "2R3Has1FKVTuyAU66abZt48tnyFN9xN6jncNpL7uaXAnoCck3vfWmSyeb4DLxNP6Qq6CHY5YNAYbb5wLPM5bQPLE",
  "key7": "4yE4PhKuNeJog9xTbVT43fQHD7LqEYmqweQGyVSWhoJ5GCZvuozXf2QntARojUkk4rUUVA5AhBxqv5UsSDeQsWdC",
  "key8": "NwvPkrm4XmV5DqNRnRZS7JiKr5abnqC1kg2jMpcboHiaLTJTXiBXhiPMhJ5EmtMYTi8dUnWn1JzsHLA212RBsd8",
  "key9": "2xquLdw4azdSdpXJZXSyRmDZj9eqNxSVuV8RBAaYPY5c73ro8vPDp2YfUuJ5mvc9yEUk9RPyLVx68yQmVx3krHBR",
  "key10": "U57Y58k4qEPs59GVzCynYx1PTexpYSDYPJgtp3pa6USZUV8xTc4FNdjPVQGYk4E9amYXTH4Xp3Jj7o9Ajj51ftN",
  "key11": "4T71AHQy8WeqG5nbweCK941fkoFpW7pyUkbBXHiGeh7eV11VSdUdzaVCLvvhc6DTb1hWL4p6JVxTJcArUVgY99vH",
  "key12": "5QdNctYkJWFiJwHomaSAc6MpBnqsUaiMorruyWQ4N4EazKBuEEtN3RGXicFnFh2PQYbABdofbYFDQHyKPpRk9XtB",
  "key13": "2PTE1EreeKRvjm2op4UKbzGKz832dhs44SyREDSZuxUSuXVvTuRHW6AY63kLMEA9sNUFJQF88Fqv8T7ChUMfJxs",
  "key14": "5vucPVYLudPyPhkzD6ufAzQ1iRmBNhJvhxwRM2Y3YjnaTLpL1kZz9yYoeThJdgQ1MSEcb5z4YZEpe22VQZuQCsFg",
  "key15": "4PhSkj1cnMkNbhTYNZWzQk4LzwmqE6G3ckbCa8jmU3A47cMqieqcEwDYyoxhDTjbd6SyH49uE4Rdx7YQTQEvQFC",
  "key16": "5YMMavsUhuauvgWoQzjrY3ufZnXoNHPp8iKVA5ecTU7t4PaYkhCda8NaPEXfr7wGbaWV56aivxXJk13oDbxJUZVj",
  "key17": "428RsRXRR6zvjQUGCTe8fEaAAmomJyN4bxwrFZzAhfpQv76Whnk6WhpfmkhVghSPhg6f6dvNLcxrQ6oHxkgCKxkQ",
  "key18": "5vQw7pMzj1nM5v82bRWVWnbkrePkSNePDoWUxWBU52GCDSfebJvZANsaiDmNASCHwZ4ZdtNFTRJQCSZsFeCAonv9",
  "key19": "3kmJ6KbdZ5EBh7kK8Ka2nQEGnGxfneatcvhxTz9KQbzmMd4i5iRhCAfK1omgdQwe8c7XhArzvjjMBc829Gquk3eK",
  "key20": "4RhSmaQxNUKW7EwVB2qECXzodFFaDjGJVZLvM7Rn5uLQaMuAZGnnnpX5615M4MEZqKjjLcTDWvN61y6uybySGqny",
  "key21": "4sVC1zusZyXzNDZ1YrBV6udjBhvR1eunUs2RzFnt7PaEysignFxzNAeNMNE9bER1BFcTEZ7w5zDsg5vKHkqdsmKk",
  "key22": "53es5L5TNvGCSdNy7R4y9NmTz5tLLJdXYFG1DrzkcQnjC4BFQZXHWV6L1EhLGDBU9zvEmoR1WT7MVLDNLFBEusfc",
  "key23": "4omvFh5Ph68KJSNycqZ8TAKv6LDVQ5HmNUDB2XX2Fbcrndgwu7hgfTrGX91j7S3s51sHLZAhaXLQUsRa5KXDkcZk",
  "key24": "2fEhvyzBywhbk9GjpT6F7PGZLvudUEdkVvEK8KuqhQVq6iLjE9zBXmBVJkTu2D7dC7HpCY6EavRKZKV8ahmLsFNW",
  "key25": "4CfP6vB3JFtmYYNpAfTbFB52PziH6QHee3sewo9xzyuiQ98LwKHUTgZJs7awSdYnRDKmVzt75zo5N8FfXdfr3j86",
  "key26": "JRicR2pWSzYkTnq97Yx6PG3uNtHbcn7tpAMwQ3BUsS3ctkQzpt4HsaY5HHkrkfQv1W6cYrV8DXLoqVJST2nzWr6",
  "key27": "5SKmUvChLz5i5QB9mKUd6Hu41nz1EsAixkkJ9Nb7KomKj5BT7cH1UhgdGs5qguNUdrTBCQwEF3xyhRgyiiAwYXzK",
  "key28": "TCFPxuS1tTptM73MusNuMmvBcr2Qye2nWGpFFmL3Wnxgctvt6d9K8TJpPZ4hDqB4K9AX1NonHyZviMpQyAAEaMo",
  "key29": "5Ls3KRdM3gdLHpbKRp1Z9NjDVebA24JfUkyr5BWi4gNdtWJ1hr9QVdMddpjZCKQCSzQSWdtA89grYwTcVZuF49b7",
  "key30": "4LcNTF4XbZEDcGc2TsrAxcGM2kFkwQG5Np4VX5d2nduQzRuVWXiEGBrskJ3RxKNjhwkrRpcNyvRkM2abHSsWYLs3",
  "key31": "37Vq8wCgrEQrruvzYKWnS8iuXPkmfs8oEid3qPwZeRHxPjCeV32oW28AEjuCoTc1yvPzshu4t3VUfLuiHNJSdPQu",
  "key32": "4vB528xce79xkBm7cPguiuqPnc3Uwikpp57oVR1gmppjAzz2eM8BxRXWeRBjn7x5xeQzkDGPHm4Z6TdDysDDYNgs",
  "key33": "1oTueobNY6zXzi7Vp7xqWejbjnuj9p7kjoiFMxuCfGFEJSXTr8de4qsQXmc6HoAQoYXtazoYmhziyequRHs7Jkm",
  "key34": "4A2wa76fZzeDjR2iCkT8EEQcxQULyRxLWJMrWgvT67jB9CjgY4TSmoubbtBxZg5H83y2oVN5TBRy5aK8ybpmfn5r",
  "key35": "35C9Ef6tFTQv1PDQz1KzdaVRESCkvgm93kr75KTJFTrJ8t36ve1M31G1ZMm26uFL29fZ8RxvxjqGdtTFWMhPKj7H"
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
