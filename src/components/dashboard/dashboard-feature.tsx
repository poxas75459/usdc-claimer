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
    "4zNa3Gak584atFnC2qbCCDBvDhD3hUasweKA1rXmSrMYHhonxL7Q4PpRBWJ5EQqfTjTAci65doHNmY4q7mnMQeXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3HCdTqJNB5Dj4R1rn1xuAcNEoFDSJkbE3hPHuoqeeDpPjq1byrtExrqz1y2Y7KTHyUMkoL4XrFiwycAt3sffGi",
  "key1": "5tM4p35pxjPCydhpXXRWBdpLPbtaX8SVzsB1hvwDRW8V7KxyuDbqxSG5sTxnuppw8MqYoeMJcwSc57zNz3zBJ8US",
  "key2": "45DP4BsodCewXLbwzPbSKu1FgSAMgoep9GPmtDXt7UGUDMiigSqAoUhfdxfV4y3FwUZuMs5j45j6jqZZ6Q3TJToD",
  "key3": "4f25cao3B8n7vnbozLPPZbBsKDErXPLaTtGu1zhG9FPJNJt1gn2Z3WZRRKuvzYEihBEav5VHaRx1JFcB1WY1ADN6",
  "key4": "2nTEwVfpNmxurR4U1cRerNH5G4KkanknC6Vqvb1aK5ir8gPaSW8dpKKj1DaeSC9egidMzD6iaUvDCTfpaxNMDxFy",
  "key5": "52fMW7253xkf8ZihY1Sv2MZMAy7NsXQT5f8uUCpw94YmuGsarF9Qh5N5HuXFKojgZ12WfKPo2DFsX43zKSiiPG8u",
  "key6": "3hkFj5F11Ji58dWiSPYYh4WAYjwkr2gqQBKZCLuVp2TtZYH5Xzm2JmE8nVPgjuBrXoq5qab64Wiw858BKbiuEEgs",
  "key7": "2H68Q1EoZLFTozEJPVDjiH3wYZQTfZ21j1oSqptwoid3RMrH2UPbS7FQhGz9g3wX3j9jUw4nTeZHU9Nwkkk8pUBp",
  "key8": "47UC6SSfB7hs9AE5EcS5ZADn9B58qq9cMYNFuSizUfXK4hqsGgGWx2fc2oLQCooUmdxCF9SMxeaZGNApFZvxdrqd",
  "key9": "3fnURVKw9xXEL1fVqWA4GCZpm3oDPCFUQwAiydXtrKqKf3vPkEohhCLFkjabHXPcwyRLDoDjsbfx5FTq6P691Hjk",
  "key10": "5QEYsyiQVobRbG6mKPUBRPAHBwoLQD3KfdFJsHhVG4oRRabJNxGTiZEjcPbkg2GDs2mJtmyw6UDGsdbijEMdojgP",
  "key11": "54rCoCfpF24SNVRX2ThZT3MuuML2MrvL8vDKGmqFG1Mu4VSjYa4yQjaAfyb5jLaQraSuQuy58oyChKq84Y54aUtn",
  "key12": "5fzp9DvRcVQvVGVaJUdVV5qFqbDdDAVrsVpZ4wyYXwUUcFcqrhuTTjFo8wCD38pHaRB9hh29p8ghs5YzVXiHCS9C",
  "key13": "3JVtNo9nyL1XPP8HLdtZaoUYyqAS3otUWDHKqUnHvqDr67doW7HFbJhJrPH1dy9Y6tXhmi5qTeg6JFE8gospPy1J",
  "key14": "5fgXK6XAm232i6Vy8m9kAjUgeiRZzLWypoFqrinG83dRe52G5TMAH4D4ShLVqmXB3o2UYpE4kVs1Gg7pKgad6dza",
  "key15": "2KkVvvsb3MEwny21pMDHTPHopMMvFde1p3T4nJpVZUWwM7XEPGVXG6s3wjwwV5X4BeaNsVkp8V7F26VffSGurwPY",
  "key16": "5h6kY1oXngG2RU9TEZbrAf3H3FJKw8c8EzNu1a9jjfUNXDzKJpcRVHK6Hh1VDQ7hVAXWE3Tg3vq8ZYaiqocZ31b5",
  "key17": "pyrNFg1f9tR8BL8QxeQLTYGbtEJr1d4VRGwuwy7DQC9AY9siSRoo1CzNSJt5vEJUhb6MrnxKbCjeXHbZjXcodJ1",
  "key18": "EX4aV3Eu3Xao1V54a54KpmtuQ7e525y9yC95DfU9qQb3hfP5fnCctzTSWetnn7atiQRx9rAVSmsByup4g9CENDX",
  "key19": "5Y6h4G3AcQ48D6B4u45U23uJz7YEuBD3vDM6rjMpTbAcYgt4aa2xzeedurSqexCSMgyKhyY9PSWTSnLCm9yEeFWj",
  "key20": "2u9kJgscFYf5kMHQXdE3m3MbV3jd5ixz1FSWaAjU1KFgt7pJ4zHfxSXddsXX7d2sXYPdEi7S1854vWnqg7cLGAPs",
  "key21": "4TB5u2stV8jPPpdQfsddw6qfHnLeWTn5iUrWR2hSuGVveh7sAxhFdX7Y4XTLBCpGwCocDuCLKGDvQWWiLumnZcPT",
  "key22": "i736HacoAWR8u4Vybsf4x2vnJLJn44QPL1V2eCWRaX6zxq9Uv2HDLHA5yqUTmmjcqXJMgFA44vZ8W4CWmjSUKjb",
  "key23": "492CkeFun3Li7FtDVHqqryzkCvrux34Kjas9p398qhZJiTyGLn4enZcjWHdr7efZbWqVx5vL2LcrwR7Zex8cLEuy",
  "key24": "25DGxnKtfnB3Jh3GUbEgS4x6xnCnRh7ENg7QLXuALPqVoCHKBFJ95kPTqEkaagqws1B91fo8fNVvvxTJsWWoVHr3",
  "key25": "3j2aedubKUphNJpZVTLNkpiH6hxpjYmvqP25RzpBtE53JJcqCRXCucKsXDCCYc8kFbfJ6d6PF97Cfb64gtdZ8wXv",
  "key26": "5FHUCcFQ4jmKYZu4aqiM3VY6dqrpjwHmqTxVpWdmzwA4KzFCMsB8cBDw81q86zQMjiD5P4vFTPEUvCBZkESUMfm8",
  "key27": "2ebN29SpmADnjUEptYfbh3Y6dnkQPcQec2jxf1xC4tRKFRpKWE9HpgaCHyQ7TxapGML3a1TtySPgTsLV9P7JhqQQ",
  "key28": "RXnDBxqdwa6A4MBvmkpasmkrJwgtVdVG7euXbD9VwbaGBWDJirzzCbM2Lubn5zhk5wcxdp7ABcyVmNKeSPDWGqv",
  "key29": "4erofYyJc6wk14uLKhxkEw3DnPvsAqKWVV7RZKs1KLrKWvSrRCW2NjmmD7ZTaLXsHXDtKwBo9tQkveFfvB4NWRkk",
  "key30": "5o7JBq8sTwxhYmxYZkr8HBRuybydec5CA2WaaKczK7b6X4hhdJPVrMxiqZxTF32aCbZtswWtEtRmcrxwK6pVXY6m",
  "key31": "2wuqWvhg4AsDx7YBcbswiixfadN2yFbbWrCx4E1RQn7hfmhvkaqiznj3ADLFK4aeJCfePRiyqDrw39CjTTniw2By",
  "key32": "5rA94w2dif9fG8N2CGuXEekNjrTTrP922NhVPY7w1JxLfuZBdLPZmA7y7DqE224n8cjMVw82KFQ6aVSKoA8HybgJ",
  "key33": "2D3n7ZetaJXXJ8GpSxjuq7B4SvfBgTHB525CpZSLic8JZr2T5GZ2NKFuApB5r5YNodiaFpVVxqMmciJZDxd445b7",
  "key34": "3ezs17VBF51Jeh6xfBVU6jEaFBpz8HdJYa7LX6HnnRpTEFixD4aTuMLBeKs4CAW5ps2zAEVFeQX7hD6mHpHC8tWY",
  "key35": "3VNcUBL6RApYHg8yDHT9jmk3HRpm1SQLfGEn8nqcrbTa5gbXkzxi5fALqirjLCcyKtqfcT8d9CMHCBpn51ERvM1K",
  "key36": "34vnQSw82RWo3ZQPgGNFqrvtMAkHX1cTDEC4EbTaaUf2SacfVsn41Sv5pwUxXGDXgmrvxPvbjVGLzuHpM5HJcLFh",
  "key37": "28YQzQ1PE3KHGZJUoNPe4kmvHN7NvcEsrwicvJ3RJgQhLCeuKumFZcwGGZXtvptPrEeMWfcYSFPSAEGUstcUvkVF",
  "key38": "4kZ7PeHT7Ad5PK3xj1cLfn6SDo2vLb4h84byXWGbo2MsoRw4N3ueKMBM8UiWXQYSS51JxBLfFYsUc4yzpAjnSvyd",
  "key39": "246Ws2og7TAXePWVKtW1yTRbuk2yFNv9VCSYFJBFBfiU5zGzDbohGs2spuyp5eG46LFsDY9r83c1kdw9vGceLLsE",
  "key40": "537ncV4i83SNpKDkaS1tHogUR6xqkGC1S9YZes5e1c6XP3GsSRocypBoKrf2KZfX3H8Dk3XDoHDX7AEYRkkUzoPC",
  "key41": "2s9Z2NsDbEqJoYhXXk59FsQpojsx6vkdcuKkr5YgnT9MyMVMZXxty7rmiuNiBMVYoKTXbsMzEXgjAcwnLsnKjcaU",
  "key42": "28DHtQZUgDwyuu55u4pMDoCTrX2nuKDM9Xeo3BPfKpXsdkLEsSaTbyzNumTUkvWxYtNtBz45aixa8r4nEXEXFoSy"
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
