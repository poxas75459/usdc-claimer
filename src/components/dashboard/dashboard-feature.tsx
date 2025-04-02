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
    "5Hd4qRFm3EVWr5dNBibMfYRcyK6wwWfiGFrW84H4zQoBsiGqVSqKv69ag9Dd6A2GHhwHHM9Yn48NG3pihGSde9oQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rhXDo8v7bqBioybkkVM3Cqj5emJy9nzjBowJWhZF8waMmgLGA1RqATsGqJhu7iXsXSHz715TNJfQndgAw1KMN4C",
  "key1": "2gbigzHRaWsLnTGDHvQ8zfN9ndpdCipXm7qq5sD1VRiyeUoLw4Z4t8jLTkePc7Adi2DApn9URJK1wSU9wGRAvYue",
  "key2": "5BoADPTT5DmFEuA16hAHweGFwUrw4itsQJWcqm4fwqeUPtvQZBsF6V22xNrmMPTJfS7dV3aT7A6xYtutMiREmRVK",
  "key3": "2aCYNyhb1NmVn36bndokm5mzmux1scTYU3Juq8hDjBGJfAmrPmw1bZRLCQt8ot9Zg2RASm6kzTG9VuvEJnWqsXu7",
  "key4": "3CXJZvZgf9EexVnpppadEN1dULs9QpEwN3pxAw27uNDerjvFatYFRbBhNij466qAKCNFev6ZWQ4urYjfrtyBSz9a",
  "key5": "3zJZtC5TkAb5JXREm4Ftx9FDH5HCMqJq1eujsEn4Bb2aREWZDYW9XCKc3onaDxDth1oRLsLTzee9e4AhzC8k7oVb",
  "key6": "4DHjKzatcxy67Tvj5thBq78vt5xxS5eP3L2ASKiKMApHFGzPDTSL2ckvSk1aFFA8RWQdPvkFn2pKud2PfNTeogSH",
  "key7": "45Db6YaQxmkoiV2HjzH8S6rT3wvbB4NWmoEs2TGRG36XQ9mxbucJMvFT99gBiM6YR4eSdrGq8BXiEazseqTEECZr",
  "key8": "B5U93NmT3phwxJ8w21W4xEuvtnhmDMTt8nx5J5re743G1tpLDwBiE9mhGQ9wxTwhDwyuQMwBdGBP84SrMfWLhEK",
  "key9": "57Wws3RZpDUE7hJ25ciA4nQ3aTVezdL7p26Uk8g3vANeh14u7u43xQmu5xAc6moBrFi3LdxvhwuUAtR5fUgXqzLm",
  "key10": "5ShyWYaN7eU44fW9aLtdYpw1NTWC74SYay8HF6jF7QhhWMhkmYJjs9xYzyzmjb22mhzHthSM47XLUszHwMmSnji2",
  "key11": "4Biwnc2xDTE2C26qn3NCeXQz3REyNWJdhLDzXhWCPhr2CrCrwnHcUD8y8yMEX8eaGgJY1jLRNcvk74TLDFmeu1L2",
  "key12": "3q5AbfSHtGpq2KbwbXGonVBT4pnPKuVSKmn8H5jxmPJG4t1ndvYhM3RQ3GYMmtPCpsBFXLhaDmvFyy8wHfmCQirH",
  "key13": "3T5ZP9WQyazBs4qtDCPhxc9NAKB5z1UAFUeojme1jCeKAm6AjcjworLkU3zyKEfud2TaPZSYEJfM2xQvCAeNhZ3f",
  "key14": "243NdCPjAdwomkQBKM5a2fWAydwN5p9H8936fWTvsqNRa3v7jhmTKXWUf21AppKikKKow6f3J2Y3wrKsbkYph6zu",
  "key15": "2icWTMA11ZJU9Mq9h7Bj54UoqWuwrAqXCjcWw9Dioqc9rFSPnM4xP8Q54VhrRUJk7qLQ1WRGuLcrUthVZ4tbzRvz",
  "key16": "5vcLijst9MwS5PbtKb79MnQHhTaj4nBQSi4Hhhs4czarynEm8Sg3oXJaBZY7FoEZYtFA4qh7eCjYyEBaRh1AczTb",
  "key17": "4u5evYvi5sJnY5maw3i2EN3Ffgc36LKdJ9Ww3cNNhHF82bpY5EFtDCcgBp6bjVMdvZxpowFRTAWSQT3dc4ytPVMR",
  "key18": "qvZqrHdHK7547tFBJM7tkopGLzoBU49Gs9Pjt8UckQTgLdX61sZkeQ91DPAR7M7Aa3aKxmET19yqALCp6nnF9m1",
  "key19": "333AVE5SXzaCJzPHEJXqfBA5QbfXvzDoipo6VybSipr8j7vyrf6k579B5ueVaCA9gM9dBSUBC8kfnWtFs3XHkLu3",
  "key20": "3ryGLDHmnQ7WhuZ7GBYhi4fZdC41NQhNrhzL5yqvxkb5EjsbfpL5j9iQ8zqnq1CahPHF3WewTJnSbDG183qX9ER8",
  "key21": "63VZ6tFwPBSSFKsyS1ZsY2pdTk6tEqJoUg5CBKFnmSsvQedsxQorcRUVfkmEiFvxkhGYNPXTmj5GaXG8Xpsfp34S",
  "key22": "smW7yMyTSUgX8Gz5nqbM9gFKqMPSLqfGj5dshuE1UNckD2hv4FeJhroDi8EtLSscZ74X6AwVMRs1fqqqXSngHja",
  "key23": "5Z8gvjTJ6a4qA5AUWT7uUgkZLTRPenDmo17AUi4VFFJoeFMed7NVH4WMxdVxa3oZ82rBqtG928b9vqQVXd39ppSu",
  "key24": "4d3MGRpaMUzqayZ3v48seV7Nw34dMmdMPKFiuHQxu6LwvyvBDtiKCb3D321xdqEkjvdXrRGaJe9SgV9Gm2MfX2ZK",
  "key25": "2JxyiMbD7HyAnfhaNeM78abUpRpNE5a3vnFw6Edphci1K1L9u5Gv4ETVYPwNUjEzbpTY7JPJ42n32NAXccVkoN1L",
  "key26": "5jjA9EhUdnFhpRVnhqyeHgGH3mxBGG6h3Dfa6UJnLauzYwn9aYtafCzeiSvcmarR5bkUKZQeMqqWiVnMh2skvoSc",
  "key27": "49tKXyZW3cz4cMkCpFe4hixnqeVdWfNmQwK8VZt87hUpq9sm2AKxhFdfDfBoMBfxbXJgTm8YcSfDv3atjsvg95rX",
  "key28": "ayqBtVhW11WhQPE4CLJoDaWFXdUXGwNkaLJ8mebfEFPVGQnUe15GZE3uq39yfw36GwysdbQrYWB5oRbfTsmp6rE",
  "key29": "5QrYH5quukbjXcjjPyxr3gqp2Kji6HWotyHuH3nMXUC8FmhoUh4pzSjwMbnXszLD51tfvSc5szM3TSmaYp83riFp",
  "key30": "4sTwixPTHmB2LFSwFgiQKA5qd7Bdnbt68QudhTqeDJP4NctrAEoSaEaWSAFPzUmmaiZqXinJJg1kTqXdWy57kg56",
  "key31": "4RKGqjMk97Ly5tbnCVrNsddaZAYVvR1rhsYhZi8Pw5B8sb4p3MArxMB6HeBz6ivxrWtLwdspRqaVqrUbBhNYFnea",
  "key32": "4EdTQopaLiaaxoZnAwC8ZGRy52X4xTFcgaURaYaZM8qy9FFQm8pdBPcvrJoaPkECmepizL2ngq8PPyWN4X1XmmnA",
  "key33": "mdzSwPShYhSMw7yYhBYU46nKzdCq16tpkfmKKK1iGzRLWHtKcRH6AKPCdwXF8EMFLChP1GeLWSc4wZ7VMJffpVM",
  "key34": "EYeH3kK48mWTi6Bw5r8GX8Gaoxa9qkWTuN9mDN9btfUeKnFoc7nCuaMuLy7Xp3deTRJJqaWDVwMC9eRu9b9vVj9"
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
