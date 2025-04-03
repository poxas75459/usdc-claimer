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
    "2BCqFes2h7sNHxSH8w9zZBFRALSKTuv9yCeCspNZN86t5iE19mp7hjnwtojemCXpj9uAteABj9EgDUMf1Sgs9VVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wrcnPRj3isadBzciPYoZ8j13qBJjYN2V5czWS7WoQU4wki3YRGXCdpnAbA2uEBdTiGyTXeQsyx9peRKQho1GqdF",
  "key1": "5dnew6hVx8dbrUBSwQ1SgPmV64q7nnYv6ocrpX6ywvgbDjsQV6jMbmYB6NY5cdySJWsjWstmbphpWhnpVyAtZmbV",
  "key2": "hfrr8RhVZLCY7HEnUj7vaPUCap9GFbBXkN7NWbTbspaqvrHeDVaSNcS9prjMFi7AeuQSujeFqhF9SG6cXPu32EM",
  "key3": "3smBRW2Hn1aGW5n7c5DJcViwkTRF5wLns8n5g1whNv7KqZwjtjzwoswSY64jWX1PcagCysxxTr3n9sKSnPLvSEbu",
  "key4": "5wovr44YXAU2ZqHNJJyvGPzKJoM6Z82fg1ev3Qfo5BMoxBbGaPhbmutTWfmn37HbR15ezTGkcaYF53guaiKXEF91",
  "key5": "fAr9Qix4XQJNtqUTjBJjC1CsdMM5bpSaPiqAvghWjZ7PSTZFo6o2SX2CDBrQgqGtsZzHsFKjCpXBCN1T8xasAGg",
  "key6": "3shoY17dpokBBHtLDSSvxZnrpEjFw3DVY3RxR1JVL7JRXQjn62uhuBks7SHb3xb1XBaLLL1RGyyuLduSgP528cD6",
  "key7": "5kSSW2Y5Y1audUz8w8qeXSsLCc8SQ3MVYCFqWyvszzubG5cyoWisifBeehTE5tqR3cofnketn8jq1AvdGAtUnZrb",
  "key8": "55pwzNNzGTyghVvpKekVQPxYj5FS7sjoBw8L9RyAzoWaSnHr32PsSpAy3a9Viu5dzRJjquQ3hnfz854SPv26uLwz",
  "key9": "2yEqXN1iXZ6Y61SCgZCMY352x96iroKEpybmhjFkz8YGhunsJgeZeZdTHRzVBmci1gaoM7HN1vkBzHFzTzghJDtB",
  "key10": "36WgMnh6bJmwFkQr9qNTKCe5SbdEhzTqVq3nTutkTTNeGJ8MgoCvPcpLc4QeciwGDwKx59PQoriqNRcUb9GqchRS",
  "key11": "5n1zpJXoynZrRg7e3afKLZ5fMwgAkFi3tdD2cYmvBtvgr1b9dERco5T5dzpr7SpYbFfw5cr25AmZ6Po9sCYYJDAo",
  "key12": "5EtvqezTvGxxTDCPtNzSDCELNJRajtucjx9xe5MKZaUcrgBCj5cYxqcnyjEFzSt3qJdNVfnANbkT9sCarJjdhjDi",
  "key13": "3rGQM91HmK5EHMUTZwfmwkQ5NPxxW8i8S5ktVV8HN5oYng27zD6trtpN56zzf8MX5LRgDpEY27bEXnn8xHwv7dPU",
  "key14": "48yKLuWVhkopBMK2so1NXMpSTxdLcA3QfGmGHkAyP98N6ornhTKsLJixbgrB1VXVVCy4k3tAzAdSM8RZrPoH45Ar",
  "key15": "3gg34RpEMkJiQnBoguNvL4hbLwNe3NgNpnfNmtJJ4TxxhnkyZF2qsj9koWDysGdwA1mszZRZ2Bg9n1v8tVSuiDYJ",
  "key16": "4o8QEzgTCwrtPMU5cSKmAhNi6K9QNmXmgKxfMNrAUhhXY6tFsFRbf34GcfkZaS7GtbWAF1zLTBJxpnYExJsWHJLo",
  "key17": "3nRG3yE4aXqgTWLCbndpN888yrvZ487Uog4dfpDM3GM7CeDfkAHpY39TBkucrtMx4aMJxvQxWhwte6MiJFwh9LvW",
  "key18": "66neNxYVMTy3DN26KepXEz4fzkhHFQjT4LL46XdTGsy1R18LSrksBiEJ1Tza9Jrf4Lh7QNJfdT9QRbVdd9ufVpyT",
  "key19": "4Jcfn2UVeE8ZnA22UabmM4aYYyygWbnNciErFqKzzGS9qYUo5bo5SzkohXZ91zSJ6F4kRfCTJh1rmp2Mwj8XXLTx",
  "key20": "CJiFjshJKdzxatz6qnPkmXhZ7daj49tST2kDt4Z9bMATZwbecJxGH57fhShrwR3dyBcLE8eHUKea6waaGnKn4LK",
  "key21": "4tHag2QiHrVEsKDBeR7cNeKTfD4X9YmqayN1ZBsdZMWvK3ZMuzR4sqiKDLPn5iXvACaDw2NdSsQAauDi6RsAd63f",
  "key22": "4QVcaSBSRtqPA4n64juZDNEch5xjt8o5avNh1kphvf9tzSgCjRy64jUnVDdNrY5FV33UMjchq6PURr7SNR1J1Wpa",
  "key23": "39w1f6BTtEr2GBAM5vw78vzvnmef8HCoERCxbv4fyxoY42qM8ugGr2McJcQg4mqoN2ptvWWVoGKN8TVKN7Lq3J9Z",
  "key24": "3vr5uyp9tnMdade4KZLNgaJdTJRLg5NBjPBbxRzK8w81bPgCrALhN2yjEF596PVC5gmU4UuU1H4WAec6VJcDmkQ2",
  "key25": "34omeFazdPM2MohNfriftDqbA5y4YYGeNaCHTYd7VSrKHgp1SiHPdABLMCcpkYkxGsUNt5Su4kzymSuDfC1fUP7S",
  "key26": "5KmwPHbZ3WWybnvc1GcB6Ac8XFL86v8SRCcPc5GoP96AAaHVqJarAQZcEAp2pJNi5DZpZChvejECu6bRfb8e6M2k",
  "key27": "5j8wzbJF9ZVSqPUprGsc8XJVy8kjW4oZ8ZAPWA3NyRTYmTi8oxUmoMryCmZZKBnotfMenUfTfFFg7PBgmMBviTgA",
  "key28": "4ro5YT1jRdy1L4Q4wX9uiAkY62xatWtXV587PSpW1dRNCRr3naRZW4nWtwBdMvFr4XXENWLMH1zL9ZSJ16R817ng",
  "key29": "4ZAUKTMn89jTCy3DLuknU94JhRF1psB3gfyRAdD9d7sqbtiBoJ9bRAtqcWvU7h1pzep6NAuDHy3PMCfeqUfMoJrP",
  "key30": "3yPVVSWMrUgs89xWdnSKceYMESqVt1q4hD5U9GgGQPvm1B6aH2PAeed7WvBEAw4bUzW1h2FwxFjBCAPA9rmbRi5f",
  "key31": "32YzcFJiDTRwyM7XesQBnJtpx4Wa4QS7LWrTAfFeaEpfNRUhu83x6VY8GbhLgoPkST8X1hNFUhcWaP9U31oWNNMy",
  "key32": "5HrMKGQnd2bkz2r9kyhA1ANmCHi6hok9nkK9WdgSWboHjmxKSNWA8Sa5JwfhkSXWKCZrsShogASWivKjUE5au3j9",
  "key33": "5RKX3pmpY7nkZJ6cmBumcQMXNtUmR1AGCJEXFf4voohhk2BbYSzpxtns2dgYxtudfHVsoXnxiyzRA8DZ4fiDxfpT",
  "key34": "JAXffnQVkKH3misLU44yv3NwAX8fjtoxNL9JTVbmoXamacHU2UxR4UtkST5DEKiLVaCUWa4ePkWzfJgaUEHSJBx",
  "key35": "5GEzA746ojXAn8i5HyvLAyqbz7KzUG5cKBRgpaTQH5VHgLucAZAFfgvPVd2poTUwV2RtovygyFaNScBt81CYmmAr",
  "key36": "i6nAzMmYzamC9QwWFYfX5Jwhw7Y53nwuYL3upYTQCRiBhiU2tYs57qMsL199QkQwiLm8e5VEPDAmQGPLjdZEiQk",
  "key37": "2Ay6VTVFiroAR5WLrxx1MdauF5GeeUWREiW7kxGgNmqk2sBwmzXqZL5fiosbFKv5JWeQkBb9dEMV3mBsjA6xnjEB",
  "key38": "3A3cyduEh2b3QXbgP3EZbYTVuzvy443jCr8dSCirUgYnuYgF2H4RYQ8k7uzuCKMWyDKJfXYyMZzM461oWXQNsana"
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
