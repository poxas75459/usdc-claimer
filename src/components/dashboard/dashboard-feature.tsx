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
    "3ZtDdwzaLPqAdeXy3U8txKQNeEJd58iPs2REgU4tasj5EbgQ4pu2v5vWLLWm6XGzxxw4wS7Ptj2EXLRtAHa8aVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSZ9g47WDAyhGTV17Q6uJqTRpKjAWhSsKFFmTUsXbFyzU1CzHyh1YqLzvtxpN8tKi2hJ2bYze5iocQCD4YJ7VrX",
  "key1": "47rbBDxnKXYW5Ehef5toK8qkTVKhwTkUqDF8WxBhekSzGKSxyVxK1KKjgGyjMpjKiSQpQxawo6qRU4F3QZeqQGJT",
  "key2": "4vcBu3P5oPTXmdVbMhqK2ryd3Lc2JBdtBn1Li2BBZhNVJY48VZk7Gh2S6RTwiaZxiwTTYLHtMXJxsRrruLHhzkCt",
  "key3": "3zWQgaYLKrAmPGPHPCDrWNzRx4YitdDp31iB4Ua4yy95kTeuNXBk83pnvA6mfYRdoEx9DnzSf4SMxU7BJSYkFsSP",
  "key4": "3vM4XYwL7aUMq4uj9htsy4FbMQWC3cZmiYwN8anmxqhJxDvXoNcxuYVm4YDb8ja4JpCENFh3d8eqCoFCUPMJN5XB",
  "key5": "5GpcbZgqyA4SeqWKoihX4C9kGhJ88DTuhEC6s8mC9X4whw8bkrZ6dS4Xr5b8AWtq5kefqHSyXuTpEzdZpuDB7r8v",
  "key6": "3Q5UXFGK4t45YaqzMZy6PgFH6BfuNHHMKDZ7m6vrDRVrkTxr3rh6CBCGN7yrS6EgsVpL7T7u9qNhcwSietUAo7Tf",
  "key7": "32hicKzFM8yNRaTWBrdsCSMZY57TRzAkdDviheCDPdhASfhsZWBTDywLX7CCbiEyKQUBeVZ9fq9DhyNyLuMjh8Ny",
  "key8": "ARWjHYrwFyj2MQT4f3yt4XLSFDQ63zvMwsSAxABjuLip6WDQ2s7om9j9YKeHjNhMHd6Hha1KiZMYam36bhY7i9e",
  "key9": "5ZpYV8ZS6cdUryEwcmaCZ2SnHnwK2ZXh65zEoAexRz3hhGWujsiWxu7UgEnJW2MCiXrsSDMZ99v2bkQtJLUBfSMM",
  "key10": "yciBnz14XkuJ91knDUBQ9bGczMBEGoHZ1qRoD4r9BgQfLJqsvDpmpV1RCrBSLgivmZtjfkyT6tkWBXdB6yXPKtx",
  "key11": "59bRUGjeM8x4frN9hPshNJTqeyQRrEsmTGry6f17RnixhGcD4vvJb7DQEWbVXYvFnzDfPuHjCGbsia2TMBiVizfa",
  "key12": "4rn6uUzimD9FmCjfudNiC8fzMwa5WSpr6bBwyXw6pMBB2SRqJnBpC2epbtRdZRWWT5BCSG7EtyZhBLydJbSxCeQA",
  "key13": "2G4LJ8NtRHZi4VKmg9y9BQxFZ3E9p4JAy6qVMHfqnnsgaPqkgDWq3ia72VhtwFddgtQDbQomuibfZiDTGj9BDFQD",
  "key14": "3t3LpG4mH4ieRog8xgixPM4DhyXvTbc5idAHVasrsoaTJVYXWumohVFUsdBQjUGAvQc3C9qjLKtxr2VEB3aUaCMt",
  "key15": "44QmRXf79itN7b9v8tpriNL9QvCJ92WGKuKPHxBhRHetpWuQZYWCcsbjwmDeGd8rxDriUcxhn1kSiUeBQosLiyan",
  "key16": "5Teee3oQEC4Yhzte5feqnd3n6tVM57uSKwMnG9pQeLS9iUfMN4wB3P3aSmNas3ku6zmUrpfNu65TZwDJJ1tpRF5b",
  "key17": "2B2fcxPrrCfqWe1aZyrJN8j7cmRpGeeWDBaT8qkKrfgRsVPmR33PggXhkfCU8PiTvEPc1vfdW74xhP3qFPynhX4X",
  "key18": "672PbVq35rZ5fWBrAnLwddSq9hAN1Z8CJ46jjKRR5NEiPGoebTgphHfPriyBUtaoMAtqnZmqUA77i19YmWLc4hgn",
  "key19": "iHPxnVZFN4pXoAKHUnS7kttHSBPT4ieZ7oYEkBsnbRQHJVnqY9QACk7Ux1ftWsKwjtAKhkeJjcpXFnm5G2KT5gM",
  "key20": "5MTmRgnTZFhEGN49WmhHPsndkVyhQkhaujFPuFEUWqxG2rymyiJ9imAyMdJQ4hq6EmfNFHFd6LoVq6jVs1zkTeiU",
  "key21": "2X7DxkTt2Kq7QWRTF6SNVwKKvi6duJvfUuC6aQiZCtmbGkKFLnM1rbbZCemUh8NSc5NFMPP734oUomjQ7ir7R3oW",
  "key22": "4zVfG6gMeCPs8jC21xb7yKKqCHxLQLPnsQKKzH4kUHarQcdNBpfQKLQJHSGRcnwqU4yQNqcFshVwmJFGeoi8AxgS",
  "key23": "5YYzTJrKdUEeQVEk1kym1ncrtJBaohfHqRi9E6KjEugA7JWfpgfk69XitBrppv78xtw1j9dh8ugsX4XKXaiRpeB9",
  "key24": "VUmzZxMvyvjs1Y8U1QHKhyw6fxTwKk5fhfmteXQFRK3ykFWRw2QScY7wmBQfVZeT8hW52fkPiv5wayHUAUCmdN2",
  "key25": "51hGGNKHonNHRwgwwsTnLZLvncdjvwuBZcGeMDEj7KfsFE6A3E6Am9CLZNakTcdS3u4ftvwrC9AXSSifPvLCxSh",
  "key26": "66srxZTt6WceuUiDcNAy5r4qCHdn2jQJgZpViFxJBdBVA4SVVYpr1FNeavt4w4Zk9BFihRfUAzYQWcEwTwfBKD65",
  "key27": "GCrnf8vqYYQf5RKa5SvTvyLh5HDvDmw6Fk4r8eVtC2APZic3rmMz2QYxdwh1MGG2fCNSsqDNJ95UDfhCA5TZ6eT",
  "key28": "34saSCz1JxeENMpxyvovv8rTs9K9otbswid1ALKCSCXek4HLyKYsH4NWN9BvdNJ94sLJWRm51RyRoBw7NvQrb1m3",
  "key29": "3Egvh1X5DWmjpPJ2ZzaL4CC15j72wg5AKg4d9j2Qkyr4hTicWqWN35tzS8NzCzPkPqwmBE3KtMu52M2gFQrbgpUk",
  "key30": "23Rs18VSNzzgZZHRHVKbojaSrpqabokjZpxkufiQcLBBSF42TAnToJWf98LwjcrceYSE1XdkTiNq7BeEg7SYCXGW",
  "key31": "464wkVJPHgmLe66Kgvi3TnGxbkAwFS8p8PJDKFoeoStradoEHXUBtgA5xf7Ejte129tYaZBShHrhkvxWbaJPJAhr",
  "key32": "4GAb9kPfpBvWE9PLxkVRS52WHTQYmJb3CJUxT4mqKvND7nMJgpjwSZwUJ4ZPy68B3kaWKmfiePLUx3gcM8LAMuTQ",
  "key33": "54zX52ThaecEB3GJqixiyevvGiMJ5Xmu5QCQKUmqnG5oT6pnD5KSoLTmFwnqjU8XafBA1YCYJC79oggZ3J5N2BcC",
  "key34": "3YDXaqAPRwpA2ePFnkMdnSRAtDVh28Q4xgzNnm3hbRgaJBDbRyxikskcnd1VyMHhhyWkBAL2DBPFfCHheG3eoHub",
  "key35": "4YUgUCMzG3YmBiJVYzYfPUY8gp8yrZqUEuNFGt14xyhNJN89imEWDbbMujhRKocotGHbqMq7tKNSatR2xwF57kVS",
  "key36": "HCuKXLdJJhfPCUq4o6uds3xzcC2b7Wh2nVoSe9YiJReCzrJdRoQfyGc1bQv8D68gWuPi3HWxUVpT8TSbk4oJwRV",
  "key37": "itFmScrXvsLkXNNj3j6nqpPLgMQZTcAfsiHq2NPJRvsZUvBNBuJhRYxK7eeDYgK7L8sTfVsRuKTSEwFq5Af7dCQ",
  "key38": "49PrbgymSEKinRuL8vxDZyrmxkZfZCoUSpZhRFTe5dpjhFPdxuVd2bWdoD7Hqi3Ktssec7VvQSuc2XkX9G3TrLex",
  "key39": "ba1Gw6GnCR5GX8zskg1KaK9P3LDy5f2cZ127KDHF9kNo7B4JfDo771EbLh1o9Cr7gUVFJZtBPRKLxv9mVmXj3Sr",
  "key40": "3MBh24fRWA7N4cCQViF4LW3h24RwubPrGsfVu6gQX1x5PEcRzXxsRCRQ674tSTCYYWZ6Sj8wypFFzK25GPmrfnLR",
  "key41": "31eWybEmRmyDKapGhRHjhjrbPw2c8PX2WdXkJihL11wZ62Dsx8J9oGorGVL8oKktGPUuagqEzKLPHuKRgNVkqqnm",
  "key42": "445yNGGTTeC8pMWLEW9DhewugFrYLxzi3939CAoP9HCFrfGWY2ahp2XxQLyLWfi4NM5BbYTgc2HpMFGTcA7TL5A9",
  "key43": "3dJvFMGZ4ztXkMkqw7vyooPw7Qb58yocC6BTmiaYzM6V3hUbknate7yUoGCAmu5QsXMkvj3rwrUktgaTTYw49e3Y",
  "key44": "3A9iEq8vyZxWLRbTbmv37PgdV86SUhytZXcgnonxc1ysW3ekEydaTnJKizz6SZrGCq6SGYAdenQSv4c2Nxjddqqe",
  "key45": "3zpDS39pHeu2dpQnp1FmRFTNRPpzb5KKFPtZYwT25nVhsEv9ttEwBRU44KMrA3gd9kFrY1Jc1CcFXRMq8VTTywMn"
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
