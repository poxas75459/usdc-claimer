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
    "4bW5RcMbansd89aRKpoPV96fsYbqaHt6vuP96Pb8Uhju3MSoc5Ht6MgUm5J9mwBQhqqkCPdLxgML8hdtBTp1gboH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hAZVCyDnP11sn2CLZbjKk4QRHdd7dFYmCoApTWLdG3yDJBMWq6mxqTfRFBtFKLtb3hD1Qg8LLGT8eJBWASDbDdp",
  "key1": "2vWmhRnExXvzj6hMt6m1FnDS46UgpH3THZiqzuh4sWeXY7HDe9PqumXQgfpv2niAhEv7ZihKKE17f5vqhGD5AMyf",
  "key2": "NBYoicvdzbbwLwQucf65NLLRpTUeVMknSysuL3zvuWnXepq4FCr98KX5oC8oyH1ifZMqiuJdN3t5tYWBRXPQnzU",
  "key3": "4Ye1eq4d7E99ZKs6CVCoi9yYaAqU4XqZnp2eNw6Hoay6hQjozpwNBtRBhDjr8xHyJNjQBRKCzzdPfa8jwCjrPTqm",
  "key4": "65gcwvoWZrSv7HTiGszxwr2ecC8UqHCzAgBsRBRaFSVDHVbwTfVFrFZ1cka8jvJFBVW35QWG797EVCpFy1QmBRpD",
  "key5": "3FaZGezpevvwqzZUYhFtwiXhJPaLrJLoDp5sKMyZ9M6YuJx4svB5GmWpDTPssKKVeJ3dy9rrEgJJy49AqwXgNhsX",
  "key6": "4gDAEwaCiSoWWTjqakuzzhy5TJDMnWgqUkQLeiJHcCd4Xd2ahkHUEBTer47gAxR1WWoaKDfFLWJ6nvUnTNFKmWze",
  "key7": "4hC3vMtminCmnjjkooBEzhxGhinJ8bCHrhyWXiJ5DLjJDMUyw9Agf1M7h5o6cJBsNqh5A228vLXXrXRVqfa2Xpqs",
  "key8": "3bziJnAJtHeEuLBg5JDnnACabEqynGyugvAd6gKCzd5BEwqxCUGPun4EXoBAyRH7besZpYnetkhahcJatoQwfszE",
  "key9": "JD2NLarZiGQUCymTQtHufMcxcg4jGDeGZUFsTwfSwMRh61iAvixPRtHEooDcc9n3xoAtjxoH1k7RCF7iCmSX5DQ",
  "key10": "G52XjhHBqbTtnwPPExEmvBZ7PrbDqFnQ5BJmNU79MJGiKp8UDsbRHT14iQ2kqa4cJkGvEyXArER2cyALuQo27PV",
  "key11": "3tx12PxArzAPFYdzfe8h7pViCjzvgqdzAjmDq4uKtDHw9kJGkohfk8Lek2kaGyNQ9ybHyxuiTFaDsVWxQcbyXn7W",
  "key12": "41udvWv12VLTJreM1KdZgbZqKWph6wakdp73SjJipYvjJgGvkJsrzTeSr9Ude94YDQ6z6Kkz5dxbwaCDbs7ZthT2",
  "key13": "4KYQNzicEhaqQDdHtsr4JJN5okzxtmRUjGtN96noHoWFAcsN6z2gnSns63fPE2LL65CHTP4X1MP1Ye4Qn3rk7i7g",
  "key14": "2F1bsG17QU9Mm4W19d5WYcqzAigfbroErMzrZyHSmYc3vcKVAZqRhy5kb5YSRrHXBwNT5n3JpWkkCM3gPrRRinPv",
  "key15": "35iLNXrDT6PNUrfYivZrsMHaTxAn5krBZaZMMvDRLNw2ZS1991mmbXtVsFJWu9igBpbcJfMRPRdouqJW7CnA1bha",
  "key16": "4Lhwiu1kT15EwsD2Ev7F3Gz4oZixPrmwTc6mmzoqvEJmdqiAJriYXZA6PoZ5GE5cucRGL2ze7C2xZKvPcB4oeEEQ",
  "key17": "5zfL2BtUz6zgL98r9xrMS9F6jof9tHkEjNMHLXyMiFqyT3jzBsi4g54n7PWK8Dd5Ew2npKCGaXw2qgYzKJ522oUR",
  "key18": "3ErSMKPeRsD2akCkD4HQTLPe361mvzYWdTjC28T6T8FkUBR7XiVgbvcbhvWc4ZTMecizYCqtjTM7toyTjzrYcTZX",
  "key19": "9rdyKRdkDHZjUqxa4NekJ4DWRvTdraqQomBZky3Fx8KjjYDGLfrW31kVyyNHHCf7Z458P2HV1TsRgRAkS4Tddok",
  "key20": "2mLvhGJueiXvFDtvUvcs1equE2aURfTsbfVT8T3q4ReBpfGxLnesF6KBemq2owd54NDcL6j73JtU7HRsCufrxR34",
  "key21": "22tr23J5XdhuYfpJ4738Mvmc5m2L2D9qGa8E4QxWZj4Wo4xJgVy3XXvT6ff22CEtrrkzB8vEnSpSVHqtSMufaMPs",
  "key22": "59z2eJSutdJ2QSptHRTttgbYLoVKFynXWUP8nG1ExzK3ep6whaYvN8wU3AKR31Eg3KR4eY1SX65Dw9e2UEbvjekw",
  "key23": "5TgQfhwac9jQWNtbvmCJcv7yiAWCdaWdPVwkWcVowgqc8Qomxv7TzpL89xssizUirKSic3ZMBUXzX8wpdo22p5j8",
  "key24": "2RyaB5uvK1L7SLJ8bUyjzveUx2MCeTymGsmgfLuZ7HMxrtqSwEi7XnHZm3EMjuWMCryP5kw4SNezNo239G8ApSdm",
  "key25": "36uWPVqWXJm9nK7GZYvtuMoAVygU9TcNrHnMC1F4BbZTwwBEhDxXM8wWj8Jv8vK45RMzMPrscGe7Jjv9UM563An5",
  "key26": "sGm7hyN8uFdyFEedd9771G39BwAiYXrQ4FiPTsefY5NvDbDZZhE7JLdzQSpNj2PbTPT24jqZHVW5WbFENSDsEjJ",
  "key27": "vafQD3otcuDJpafucgjn6JXLnT55Lhiz9AfAgYnaqHyPTZeDD5NPTVVAoTFGyjfwCTCBkTta2FV6cdEjP5sc8dt",
  "key28": "3oRguT7Ga6QD6KAnbezi8DUcRAxSLXKk96SzKQFdfH7ch99S9xCS3u9xCV2pc1Jr8jBZMCm7ajMJsUei7YAvRphJ",
  "key29": "2tNi893cFPTqQGcCLEWdSzvr6KcFVhynb2n1byoEULYhWJoXhrJt2YZNGk3R9g5VcZ8A7NuW6YDwSv6L2b7p9fa4",
  "key30": "5CALonpDiw154HmX87JG4QBcLwUN5eteJoMZgia2KAhT8FXvKq68J998VJMMo5MWo72Ea3WChP2nfamm9dQsxKK"
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
