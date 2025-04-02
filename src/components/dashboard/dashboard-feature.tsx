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
    "2RNAdJDRBXtYmCBF8evLM4QbJbAQJWEhMVtRGD2m8UgrY1rzB4T7pqHGoy26nrRXqvRm2LoyEJAkrccfrN31PfH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63YrbZyK2bksKDZEwTZnEMBLrEXbX4Eq8R5R9b9hswcDCajuTotzf1RpnPMgriB9nLEFFNmeRBvYjYxnjmzqMuSt",
  "key1": "61gvBLngVNMRYF9xJ2trtti2ArWnGxhHkNE86zJCXSqG1hSjy2vQN6UsSuph5qGA1xeTK2pNzKPD3EPEvHCTasmH",
  "key2": "5RYBEToBB9BN6UgMN58hDFhiFwoaiTupd7NZF7UWoj19tGpMfSZopXkC8uJh44vUDE57arU6M6eVh9a5VxCjrgHH",
  "key3": "Yaons3gKE562yToQoRY5crfwtnnbF72Vz36NFiKJJYxTJwswRGzBQHMp2d5eN91hPzPgBxRWbC1BT4xZggDiqZ6",
  "key4": "4EX2eLSM299SpFQaUAjp4xFqkP2xmjG9YdRvvm21Z5zdNGrA9SNXmR9BPM4NFMk3c536LgQ3BWqyq1p2da5vng2N",
  "key5": "3Z6PPnEtGPuK8ZqGAZ7waypAj2THrrZmVaC7EWvE7n3S6qEcKmqXAJ3gzWYL94SBhciExYQPhCDokwQkhst45LDK",
  "key6": "5uMruxqpyGoNTQU7WCxLPBhGrsV9FFiNqm8x1zYrWUQKw855ezazzpg4xNb2cS1GcTJzGpamFX8YoqFBnvdL31oC",
  "key7": "sRPcuV5VgeEKwsVHcdazETXqwy7L5fpSbxZvW7WujwxuMzXTti1bKgqPutzo8yoLDaKTBES68eisKoMikpxYBd5",
  "key8": "22WarqrkXMz97D3Y7DMyGZayRq1Dimxf5qJ2DvnXnThBJgDcVCZM5gitBDUZza6Y6YHXaQF5YPTdaWecyqFWGmKA",
  "key9": "CQx15zR4KXZ94GZW3NZdg8xh1tPUgGPve7evnkTu4gdZm9d2XcHhopC1ux5U14QieeBW3ysQQKJ9ADdXofK62G4",
  "key10": "5xBwFMVv9qcfC2nyQqjtrafsLhoKwZLDDEFRMiWirJeN4ErBh1NnEfyEfJDBBXRGpkw6ACaYZMSqNiCLvURx3fj6",
  "key11": "2YVcV2N9WNHVsTdbAiGyq7yoVngrmz8Gre5qacM1hbUGT2P6cd9xS7gZxkPRW6EgYgmDDKiUNmB3hKZNywZRPTEv",
  "key12": "3JWhxW9gFvBvU87RAYVJPiR4ifusdVkWFVkdaaz8wz8ZyFiEuV7GkoVTzjqE5FccfW75tcPYyDutU1r5yLmYq6E5",
  "key13": "2Vu5Hr4weBsQGGnuWL27Wp784MsdQbfsAVL5NMMB4KtquZWFB4rMvETMd24rMmtBFu6QYgzmzsquBkxe78kTocwx",
  "key14": "Ph7jLPsWZNZ475pGLVhanrfV6sRfXKPEqBrdvkkLYBWEpPapAfeq1tVtcKxterp3A87FMLf88m9tXvPgPUQuJao",
  "key15": "WqksC6dut5US9ndNVkp5T2LeSz7hYhD2aKTLPMnMECFHNN5SR4GZW725WiyX9CVxbYcnnUJByFMPrJW9uMY4kbv",
  "key16": "3RiMiTCSD4o3zgPP1awgk55UwPn7mVntDNyShtFmudY2KPifM3s5jcdgNtiHQiL4kn7pRcTad4P5ZRUiPXSyFmCc",
  "key17": "3isNB5ZnCtmstiZPcRTuKiUBtRjsXb4ZC641LVMu4w2jTRrMyyLhjgwheywc1Sgb6UCyTfczRFwCKi5uPmEarbE8",
  "key18": "3yGN8iUie1iBEMHm6L9WW3FNPf1WXm3GaxZaLGz5iV3CpfoX8YzR5wGZZ4LLBXjXQFEf2rrfkC2LC78hZK5LMG7W",
  "key19": "4Y1UUwpMgLaoJubpXQm33XGEaozErcVoBnMf7xqvrKnHGstDMQrrXuCbeUid7C8aKz6p3zhiJzWUKdyG8cKVyuuN",
  "key20": "22E64tL52y4DncPhJj84QjeUrfpbD7rcFF397t4m54fgesNth1xqygUGk2DwWA5DU2tKsDh4buvT83moSB8qw9Mu",
  "key21": "2VFgE5ifbm5jpFRJtvCtULB769zFojWu52iMzGubAjSAmtqxTL6QR8NRmzaqRtk5EA68d2nZLNpGmdq2bPAqkJ5H",
  "key22": "5pXh21c3zxvN9esh3tjaRDVgFcQ1T4QAgJn4qBTX5z2AozfkRLHiTSVVL4KNthrHPFtVHhxnF98WH6o1jgNerjvy",
  "key23": "2vu72RmWVpKzt4UYQfTFZjcxz6wyaKe35YHLwDcSwpyaJJNUGbCnE8ypbS8TC58UV34wtTcQHtNFKu62eBSLPKNp",
  "key24": "5F9yCMpAv9KNPAnkoEJyKVEM7fcGq8wCWzszKvYxRKyq92afqANeHqHZ9RWgWRzTme9V2X6x8FviuAMohSTMFhX4",
  "key25": "2SSrnD4pE6SmRmhbHoVVgcrh81XZUJ9gQmCg9WNQGV8ivkH1sn9XoDrCjnMz3bdwC6L27mh85svhMwSKsQBzyggT",
  "key26": "3srf5TF4NjYAVAXwpLFX6B6ouz6cHVx1XGqxJyUpKtgucVEVJwkCYdtHWSzogQfb9ajsmqpb9ej5U5u7VhKPf262",
  "key27": "2C3x9zt6JPwpy63cnn7CcSpB6q7r5cpQhawPLdjSFqMgX8QhaE7rpZ91f7vuVVpPaEs4ceFBUTtbRFXjS6u1bf4c",
  "key28": "5Qjpe5mKpcy4TrriPvJeg7v5pMroZZnhKhWUPqz2E9wksjAa8Nvu3Kp6cTEoNHktX8fM6GjB7W4CYWYGxi3nuMWs",
  "key29": "27arBTHdZVZ6VkGRJiP3cyHKdisuNZaowzD66Foibh4NqSsd92zYqiZG8jpvWfux7YBjWCY7yJj3FbNpeFrTGNnU",
  "key30": "sdxzkU8urGcETXwL5sZ4cQuFVutxruHsC2S9WZgeCxr2iFYnomHdzYsf73iwGehzU4EvmH2Dxo4FbUBMJTLz7hK",
  "key31": "iWXvRNKurqM4qNpHED4nzQk6HNJ1t1KCF9VeLYj13GXQeQeyhLf4eaG2gEY5bVGeATum5Z6jyrZSmnpqKHKuxZr",
  "key32": "5zbSPkUsf6A3xDosgjnEz9nb1tboGjxUSZ8hcJ3iF5mEwhwgQkvxUMB1U3PCJDMYXCmisFgp7AX7VyNE7GSfWaLX",
  "key33": "3FxUskWhXdijG2nwe4k2BC1VznxaaKZ3T3cTrDCok8muFJRSHrknrLF7YFcFNF2nFxDjc1FDYxyaTVncVyF1oFgF",
  "key34": "3Hof57kPqUfioKCok1jcLuzftPfgP5ea9AztGEJKXTA5kufDgNSeLMN73ukk2c4m6Jz8Vd3R9jssHc3DetUcUeYU",
  "key35": "3MhoATVzmadcU9dqyT4ZiLN6iKTaymBtMtMHCCFibSwfsMav6u9QUaQx4c2jgg6byABjKg2iYMu61LzvuHKa6pLJ",
  "key36": "Qkb7jjcGccBKxCBD613KbQScHYGR3uWyNYNsD5musKGGwK9FtD9dfUJLrPW25eovBggoWKs7sG63CfUCWgmu7AV",
  "key37": "46JhMBuMsoc2GvjaSBW4DNiiV6pymoDdGNvfxt9Z8aCEAjAEfT1V9RBgFpukqY8vb4Ysghxomx6JaCKiJqt6PdpT",
  "key38": "B7Ru74W2cKY8nBTxg6F7VLmWCGKBxRoLTX1bxJajjAUdQYuhWYyLN56jXqpLeBoNrj7HFojZAixvYmgyu4JwGGj",
  "key39": "4RD91bkR3bhM5cfYFpL57tRrAcsFT894ZAmpgLFToz8DWitAdWfaXiQagHv8hZWpYbmEKdi7Pu5QiHjmULXPohsw",
  "key40": "zNUYH1TK2Hj4zmTM2vTyLSzDaCT9rr8MEooKZt15BKNGbTdn55QPJymeRSqjH2rKvVxQkEHHUiFMp6YDZgBqw1S",
  "key41": "3M8darVU49pKhAQrH5b3cmGACCMmaUtpReEKgwjzD2GAJnsAMmZJBsHrNypU2BGVtP1fBu9ddaZww6tmk3YaU1jn",
  "key42": "2gmMcXurxaeTYNVgMg1vzPg57KBHMCNUn23iQMHBnEfK5g9M4auBVe6EysQ4vHfJ6Z78a19J5dvc5XZQ2uNyURHk",
  "key43": "69mMcQRbGcv8UF7ArmXuQ7yFprJ6QrP4wJyv1KVG1CZmCucsBXxtsMYunaF7f5m3n9J8se27CMtZu3To9Kk6f4N",
  "key44": "39LLDqoEBKCBTdbScVwBFHtTYRUMKxk2hhWACC9RyC3aPaNbsqCRQR2FKuacMY7GLg8HfiMxa5HsqT4MMHz1XRw",
  "key45": "4aj1JmimBhvXS4ev3btCopa22m2g5HrFdMH82EaHh72iGyiNM2o5CnHCpAiAPk6FGMgQgAVpo7482DmWrhHYNH76",
  "key46": "5UtMKLhZLkL5gDaufkLBcjdE9MetJRsoWuzDxjc8ut4a5ZnXmbeJN1TnQe6kRojGtyE22H41tBhVPC138yhmabvV",
  "key47": "4SugiVY8csm1At3aAYD115ViMvJ8kJ9R12XXnXpoxWUsEok9MVSZLTJnxrqkF7KG4avxXU1yLrqwnb58Kfy5ukEG",
  "key48": "28SZtxuu5daf18164iPvaMaBrBos9uy1Xp59nc3UySy7nMXhinc8boMiJdS3jbEwbLFfkT7MteNc8omKQYox7mvR"
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
