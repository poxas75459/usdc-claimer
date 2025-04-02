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
    "4ntzQBQ3KBnFMaACuJCn16FRoqhgJtty9CrCqbU7Ka248z81VBpXAVMjmzAoSumNZYon3LVtnC7ofPS381BCVka9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63fe9XZaYfCEr5JfYNmQJ1eXMmro4TvKSQeQ2e7tqfcxAJXCrMgDcS7EbsdN4MV2t8UhohAPp2fqiZjtnj8Qgq7U",
  "key1": "cQhrgdjgEcoGMBj94MGUh6HVPKFjGq6NJ8yshjYEp3gTdEQvW6wTR1x3VkFWGhw8YbRYrkFPeA2YayJV5gTk1vB",
  "key2": "hgYNpCcdNL65bADZdksTMpkf1NquvCY26fpc39C8s3SJkhppLLVQbF8JtzgehTMVRx2hZvgHUJSEjbCyEgpk8my",
  "key3": "3mpTtrRGwuEYJEbEAoqHK1tUZDm8yR4QspcQ1XiTyLw4VPDJKYccNFmsuzy2YLdLbPzC65nPu2iKeZbZJ6T6Ae6K",
  "key4": "W5F7UeGuKR7jSLim3bsUg4p6Mzbg4y6eJmAQaQHFvCNwebHBHyE6KKnE8hhsCpwWjmyrLejrCmEq3L6yV1PxQag",
  "key5": "2DFYvwbAWbSANfR7rVeRi9Mzo1Fa8HmgbSsTnk2s6yxzNBt7kvedeyZfeo5ZMSH5iZ4XRUQsNHFqVrsJBTR6nvXp",
  "key6": "4Rfadvdsc4ALiAkd9B3iacEPgkgmV7Bj3tTuMsf1Y9179XLgtPYKa7743BxaKPMgcdyEu6jE75Ru5VMKPyWTzxMA",
  "key7": "2HkaSiXRvsuPSMqM8hGW9dqkd1U33BWietourJFTvmSo2wLXp2K18GVRqvWpKipgSfpYLbk91ng2BcfCpiRo5gnE",
  "key8": "3Cb76iE6rCZnssjKSKoLXfgbtZkhD4JVXYSNdXBp26RorecyhhRwGSCDAQ8Md9FxfDzUouFe6bKve2vbVaDCgjFf",
  "key9": "2fdkerWyYPg3a4HUUeYAygKCmCpdVqVzf4DDMqHWHJWgdTCmTUR2gK2jefN1pPoRFAL5Ho53yhWhkch4MYaN35gT",
  "key10": "4ZBsRWWTpFQEC9k2ezDuKHnrgMfjikqm1xxywGVXPVJfd45wocBDYe1QzmBfh7nxc1rdNWz9XGTBt9dK8xe4Ttrt",
  "key11": "2AQd7Qy5A3E7gtxLimnGxV3yQVE1aCStAdcsgwcKjL3ZiaiHgyLCET5q4bsC9nZ8hreSLnq2QntgcmEajQLoaFyK",
  "key12": "5zuFXwjhMcnhdWpHZYUxVpoq8hYjbKhdt84xn8yPHcPAZtkERXjKMgje2jYZADG7apY6772KT1hEpeWcJhbrdYv3",
  "key13": "5e1LWxXfnjB8YhENnYmeZpBBcAW5uiUkab2LsiSkVekrECjQnAG8PX2TTrS7g6XJnJezqjZyXafSQygDprswNK5P",
  "key14": "3sSF41PbYwDazw4xoRQrB9KiJHfYarqkfyo3UxSkeJqJgLZLs29MEeGnHwqzcjEQsrgDt4iXKmCLadZYSKf158yh",
  "key15": "6qGo2zB6LKLnaPZsaW4WeGPeJFSHwCRvwLLK4oTJtBgV6bpiQfyEdUUq2qnUg6so9QHFoKU4Evj7QxnyLTeusqP",
  "key16": "4xaS19ekYBiBQn3pSXFo4Y5Asg28xwecCrWmcLndNtbKgy2BdCZ3TkyYWJRErssz4osfyoERCU3u6V7jaGNNMSqw",
  "key17": "YSHn74Su9LfeamBpiSiUWMvLyNHK1XieqGZUuHHERNtnEpmjn8JBPXWRfNtJg4vtydxNx2Tk7vfQN7ARxBt8R82",
  "key18": "5uop9WJCQoqoUWdPjMvUK29e2NddaQbJkXW2iYY1efPSAvoufHdsreNtwos13TN5mQpWmeDZT8rGhaxMZDtZQRh7",
  "key19": "3oBtfgbpcPqgNPy2e8hpZz3HVpuYEs7ouS3CUgPwbNfBip53KBwtrGCwYdiSDvFVK24mD7vKUdKdJMEucGLxGL2U",
  "key20": "2Db7KGaUNM9Hsfwa1cDJnnx37DnEofFunoMUrv72bCXzMsnu7L2GawQ838uJbUuYikKA4e5XVAKvKexJ71Xs5UyC",
  "key21": "3t4YVsJSYxQ5jAn6dnjvZSRp78xRQwjUQKrWitiQApou7t8ty7zwVZgN7bLuHGq4u1v7mNemqGYpfD4nmkyjtiL9",
  "key22": "JA67vEQqCfzPG1xhDZprkQutmdL9jALL4Gmr1bxzaQCdVfkw33gJvVvhmuW3TVTy4YLyaLChp2BHyUu5DendeLi",
  "key23": "2ccT6WQqvwtMtnM6ui8zFNj1apqMc4yxVrgJqC88VzV4hs4gfUewZZqPVzYgPKg3H2Kc1i6mrGqw8qZrCZ57FcSd",
  "key24": "4xUwTSoXmCohya9ZcdzyM5bvWWWyimsen51Cvku8tEHsiJNeHmyo4nPHi2HFm5RHp21kbkrYVDtnJKkryJypQ69m",
  "key25": "xRmuP3H3xY3NwjtUAU7dF2YBBn3T6g59f66aLqQ9JBXtvqeMLfPuzXRXWVC2K4ULoP6K1fFuL9dmfX2vS5HMEQR",
  "key26": "58Wmg5N4aH3ZGF7pvyf1AcApW3zR7gQEjW23Eergh6VABXRB9yKZM1Wk3MtTiFopKTrv14qBD3pXMm2MWd8wGUU9",
  "key27": "iqicVxutcfiuBibgyDxLnk2mdCtwbqLrbs1t1mwQH5FgckgNsAjNrKyv2Bp1pEvDRdsMNx7GVSduqwHo6vCXfog",
  "key28": "4dNEzdosSnpLtyMwmoXRxQw7TNQFZhGY7WH7zvtqQwvrVHaUXASFK8JTWXtzPK7QPPkhRBP7bxZfRpYZeT8tut9P",
  "key29": "5ZpJeoz87LsD9aSBWbRJJDUBTNq2rr6S3euBDxGyaiox8tasSGeYbL5uNUp8CAou1aWCtSEDFizHUU3m7X6ozpdu",
  "key30": "58g5UkeBHP7wXa5rw8yQcDxguPd69ajMPfnKEsaTYMPFtVeWLAj6QPbtsVjM8MRupKq59smAygPNuUmTZU2WvVkm",
  "key31": "3Hs52u2Rjb8gFFQdAQTp3VLjtDJMZ6BvjLM8zNXJXRSD49y7mqh2mx8X4Y6HczHE1i6fZv28FHH7q2kGXCzY27yw",
  "key32": "5JW1bGdhStXNEyZQKZPSpoASe4H6iYFz3GBEs5JMGyvZifxnpH2UvZoRhP8W1XNVSLMwp45Mhp26qHETwMEXPeRf",
  "key33": "s4rNs1hGov6qdUH43ZMXNCY4GrraaPDmgxvJdf1J8CRuKf2QTn9jq46Yd3wqadi4qQF62Jz6xd58LQrn1fnKF9y",
  "key34": "2M7CP7snqjqMdJ1ufiMmTdMK68KGB4JwyRp5Ad8dTouwkRRNFcmXF2M8cmJCygxuSK97NP9CdgCHkeEUdSQsGY5i",
  "key35": "4jf4PtFYSg127aFmvyNJaMBaiUWNfyyKHNrVZx5RcaCfUUGZFKMgyTC1LaLfh6rHDUTzg9W884LV4ZgiojVEpXdm",
  "key36": "aoPntq3rXdBHTV9wU4aGakNyFSxFJYoAKk1yEvinLhSL7yychPZVkoQW9GqFpaC2WTs8SFyicQbqSFYgk9Nw4AU",
  "key37": "5SGHtV6oaZ6JjdXxjs6TcHeuSDo9mvGVGwDBarqgFP2HEpFydYpAg9mnc1sNYks6Zz821iUf7FQbThwAmuA5ot3J",
  "key38": "4m19hC56XhmxoUbX7P2oKY7eo5ftsQmG3JmvPUeBfSAMWUTUX8D6DZq6qtEbfHRXyFcicpyEjL7yjTvRqdzVAZxd"
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
