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
    "2jsZA3GoovAXGguRf9R142wvsmPNn7Qk5cw6KdWshCcoBBDvPGxshhFGW8W1iCpfdHd32Nyqrh69F4h8VciUHWwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lu4jKG96jQbY97m2tsYgZPHQhcocmA4Z3iEXqaGc5DXPJCCxGnHcZ8PWWuXqkctNLRwPPCDvAFAXDeQ4gAeEd5u",
  "key1": "ubtGKcRtkeXh8TgUQpVFTpb4tyUkJewyBWYsqm3XgwUUFE26Jvy9rLzJBhPBg6u865GMUKzL2b1GgkfA1PA9LLn",
  "key2": "2KH9MJJDwJaKEwmYp4MBVYqor976WFJ8jWLfN97DbGJ5CrvbuuoMoZamMJhV4eXL5EF69WWbSSFkeovAujc9gpTK",
  "key3": "fCSXbdgTNC32w4T1yCXayW2ScVPYYHcTPzcsudV6e9rqvueFF3nCq3Ta33Lgtn3SaYXbbY8e4eQ9j8yhyVmsgrZ",
  "key4": "37jEJygpsLpo7TCweBMu6C3BKoY16s8CyJeALEFEd5L7ZWmmnffxNwdMMaZQCWLWnzhG1fvwCQorRFnSnadYrfPT",
  "key5": "4nkA8odHpScEchMLjVwbiyxkSQxZSCLK1uKHMwEMSvzuazkaLEgwFP2bJV4LLuLh45BfKYHDu2LRi9UYR4iantMZ",
  "key6": "2qiTyrhMgKEr7HmfDAKnKwFjSska5wJjneP2cxvNNiRKUF4F3Hvo1Rd7tQR9reY4DQyutJ4cCyf7s79euttyKdTg",
  "key7": "3fVwf8bk5foD2pHYEHdq59gvwP2dku4qjx31gTuN5KhtKTSf6bx9RnwbP1dGbCD1h4KDSGfzcTDJULuYD4481p8",
  "key8": "2XTAaCXo37iQMxLWmbrXcSZPD9oDELiMRG9CB3LLUjphKoDF1knWPTbdEhFs9LnRyzGmWvLd9x22wqGGqGwqtHUZ",
  "key9": "4b9e9FT63GGY1DLzkhyjN7n1orV6xVfNbnjjLcVpWdZjbxvq71G25FjVKgYdr2fpxK9To3pjj6cPrtdx93y7J7Sr",
  "key10": "2CP4e4y5yqMaTDehcFWr1jZoVvu14SprgRTKzVLJuPRv6zYSisRW4oqvzszpvwgz3BmvQSLY16PKwVgPFFushjjY",
  "key11": "2V4kt43KDuhKjf1RmtjPYBNDbc9GaUg3qzZggPq14MtJCEjFDqrs7i92b4PPVst3cN8UJYM4wdw9V1o9SyVNJUiw",
  "key12": "5nss5Je9bqgB3hzMXgAnERzGhx5CvySioswcoWUqtVELWoEKWCvDoRxz2Gcp6HAkYV4Tn7eGinUDwg5Rsv2G2bTF",
  "key13": "4ThWvgUA2DcHNKA9pMrrp14pgKEbLEuUZ5muFXwbAVQneBEYSvHGrPry3c18G9yFu75RjNam9TuTMehyQodFJoSZ",
  "key14": "5nWrmBmbQKz8Mpe1wmjTa2TZLpdFReyaaH8kKrD2eFMjv4FfGvrYLJ7APDjLHU6pHKo564v2Bwkj2Yiwx3FVrSLZ",
  "key15": "2Qs4eEeBTkHdNQSpeorzYHzmAU9F7tLe3stJ1G17scgYzgaUSo78NiXUqPPSe1BgirvyTPuRdXR3p4dBJUnASPXQ",
  "key16": "JMF2cRLLpJeq8bL5CDHV4yjUhxW5x8iwYx2DT7xNuTxmaJnQhjfE1tooxGwQu1EgDKWpPQjtS7GydVyKaNZfbiz",
  "key17": "hvkcYskxmUFpjvokUKQFwBsoapdKXo8ohLK53m7kPSmui9N8UhQ818ngP1pFfzgxTk9UaqQboaVcy3QFG1eV8Se",
  "key18": "2uBxVcKK9aKtKmjwwx2Zh9XwpCSLGo4bPKfMqdn3iHqmtVL3nfFLUxmpBABjrdeCtgf7nRsSc4DvU7u7NzJC91m5",
  "key19": "UGeA8b3Ggvk3cUVcyUqkszfdL7oGkR4DLFmdDS8dtiJUzT1iom2WF9zQLsS54PJ99buvUF7djyzptmfFZUP87hQ",
  "key20": "2ohY2tgcLD4BWaoraSZpJNoSx51ahTzkdJ9t6Ps2ai399oA1gJyGq8T2iH8xFEcw5yEY9JkvDZatWHTa3piHKdd5",
  "key21": "2Cfm8QyJa1oAZYyg4vKYxzwzwJEjDDwzT79YxFMKhwDEYvAr6vienk9ZA8rHHQ6RKe2NWCCYtqu8yUQEhWXisKeG",
  "key22": "3dmZAVBGu7EZak76iwr3eTrV49CYUHS1iRPg7BxnfQiGTDH1di2N1ikKvz81oTHdJjX3HLbX6Kcv4ZzEAmm8kYPS",
  "key23": "5f7T8CDcZ1z3TWKnri6ispfzp2k6F6Ge5ffCyc6ByQyQYtGvTAu8soiWYTt63bgzCmNS4QcF6M9sAWWpziuxTryG",
  "key24": "56zv44so6D6HdS2QxUzbLqsk7hH6W16W6ZgAP7g81UZkaxGRD7u3dpP5HPX8yhnMKZN9cRKnpws7s5xBDQrA9oMU",
  "key25": "5ReFXjSC3uPuXdLfquuwfMNYWakdn6hEwyo8TLd8hyqwvvNczy1enT2Hn1RuXKHrJg693BpaqUNEJLvh3zT4QZdG",
  "key26": "2VLCxP73XpA3R1WBjLM8yoswMwqahTpT7SEcLxot8PPT7HySdmmvqyf4bZTZqSgqdo1GRAqqk8CUDP4UPfK3KGDT",
  "key27": "4MkCjfMeApP6EnuMkPBGA6Q5PqYtHaoEntBdfJnpfMuJgQW2s9oxSZYE8Bt5jV7hyrTrC5kEfPCJVsGr29shUf1C",
  "key28": "43PWjBjAapYaPKYK82Fq8NSDS2kCW49nVQ1tVebrVyHBg6wmQ4qbgfBCVZ48SPCeeMtoEG1ndNkkVasBHe3vXcib",
  "key29": "afHSk18FerS6hyt18BzW9TUVLoXTKHMLevgsjMwF2sSyV4ezHeF5QsctHfo4WPTaiCm9LHdVfudn2cr56QqcRpv",
  "key30": "4A8gRvDs8vLVnZ2iJVGx5Vyg6VJy7Ni8CFAyckayMdkQeY4XuiJFBi1z4MWnzHHitsRaNKpHWnoDaM45eWPpfQ42",
  "key31": "4gCU5tmgmo8Hf9HhdmMM7ZZARHjwS1dxbGUkWkNyxqwmEmNmhTk8nNZ3gfzbUUKkdZj1q7kwFxJHZQ2Cjyc2reUt",
  "key32": "kuWCtugbc9tqPRkfsVkGU13N85TwvzTW4vazYGnaoat3EFhqkJ35spvYisKo74ekTJL7hpaqLbWdPsFWNM7fc2i",
  "key33": "4pHDzmZSJw44PBy5b6t3fUMczVfQTvdy9fZXUtA2tSjbu2SXYZQ6LnjBFHWyD3pHPyMbPmwLRbTHwc6h21nAxHBo",
  "key34": "5FFBcEb2XDk6YDDN2Q2tHQH1JiVvCgPmLUXmitQXm7Ynau9CFBTeWL5EzTNm671eE7TodewECMe6RCbwnaMFDKnu",
  "key35": "5jb8QVzTN7eTo8CHH6Hty2rrs5f7bfRZXUrDozZHwfxLB5xn9ueJk4CoEedanTzYxXDffEKLx195gCFUoRskFXEn",
  "key36": "4SFBDdStRkqdwFwD4vLuQjwZuL5B3ongt4sRQPPMfVpAXwSUpCbvgQ6pyQ27WPTjAK3RJ6WX1WZLMmA4Y8CAzVzf",
  "key37": "63BJjzmXX1pfFmZi3nPJXvcXYNZDhAD3VoGJq7wtSwgcBP2NBCHMBhvAH8Y5Jcn4DQ9hPdEapLoM45o4YFXpsyq1",
  "key38": "5A9ZsouLhivNn2RMU8aWMUDLXHoZrTe5dHnpVkRwRqUyimiCdqUW6FMqg7cpqgKLMUDhDU5taUvYkhm5omYkyGWN",
  "key39": "2qxto71SieU43x4umWhM1Gi35AhQmeP1q6JmQHGEtovyQjYGBabXWq3BsHetJmiKv75STbZurt5h3dYYGS9Qwvnx",
  "key40": "5dAW9m6EUVc4ojraXcvgE1kdwKhCxsnHxGB5izbKaLoNP4go3v6n3pzGZKLSrQZf4Nn8nGmQyERJtYyoa338aeVw",
  "key41": "5sV88syQpWwSEjWS82vwDPCKhy2KkzPPmU2QARPEkaq6YNQLsAg5xz4M3Zgr9S2Ad3aE5eyYg7HKBDWQmTBEVU2D",
  "key42": "4oLYnUej4NJvrzMYeCfnRmtGxVRg8PPUsc7XZ71T6qzALK2KajDakL1MGkkcpjerbCbPFeoaP1vXoSvRh6DdT28K",
  "key43": "mquW9FHTeQDEhgTGHtRu2tXyZpvU4m3ZEpGJjDfiYtLT8Krb1RKx55mo1bcc5nyuhUcNVK2iUvk7mVcyygxTJi5",
  "key44": "3MCDg7oSGHi2jhkbzCB7FZHa6NheXCVnh6Vv97wzjataQzcnWaEhiAut6c7i8vkohWECxQ4sN66Ndxipi7NuSHBi",
  "key45": "293ZwKiEMbYYaQjP6ziuZfVHuq5yEPUdD2hvPRiB1a5ssP32o8LYFa6mF6Wm6eVSM9VWnyrB2yiBsMZi3av24BCw",
  "key46": "4sCfcMiJ4HQ4rbNc5Fg9VuAvkoF8pey5MirdPHu1KSG7Wk5UErwiyqgwqKwZ2eE1pp5Gt3eTG7wgzpf8sLwJ61EF",
  "key47": "2AFmjEnbjXuxaPnKwHUQJXWiCE8Abm8aJ2qoBo8Y2BtBFi65ysk8Peh7uV3oqDx1ed9zNcgAjBs6VeFrZw3sbScj",
  "key48": "67bwzEnaqsFMQmidY9vYStYKTMH6vaBLGZfBMBKvySct4mtR1j2wL1egLKm4CPF4QYgisJboPfUTcmzGYi66nfsJ",
  "key49": "5FMAUfAWWpiHkuZkH3ta2eWHMDmcH2nsCDF6eSMtJuP9iDqW4S4KGwS5Q4jUFZuyjtWz2RwZ29qZdzC3tg6kwXRf"
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
