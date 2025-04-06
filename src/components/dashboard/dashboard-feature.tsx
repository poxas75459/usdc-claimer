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
    "3VXUFzc4aJXtiJdDHDW7gEHWZBdW9QqEtAKvNKLqdgEDQA5Mycmkbunf46oVgF37dvxXsnuwsrxZbbFt6tj9kJQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLM8HZHN8xsJCBYU6hNgUgV8yEupmLyTdCvo7bZeVyL7DFxdzrTXTEi6gJwRfCHVX4dFjwixzxQhBbVg6AjPW6H",
  "key1": "3PHhXL847EPjBEwy3arT98ke11RDK3SfAxRcTjseMfBZSh5mrM5Zmb43DeBPcGorwrKgVwUgwWznv3Hr5GGUbU3W",
  "key2": "4GRxsPBy2nw6MoVTqU2cmx6nXvSrdZAzX4WFpruYjVv2pY73yjxueQX2ddiBoPuPDuK6ma2twYV9rSfx9j3dLJcs",
  "key3": "4soWfy45GaQ1HePGbqytD83nRe4f3vkc5R31ucyFRjEUs3NZ1XZLqPDe1iDWXQd61XSipac7cDuQVsEXYU32Vn4S",
  "key4": "4h9PZu1EssiNacU5DZQ6MhF8XnJP3iieTWpbCye5EiFmWBd5htZ9GAGVmKdtn6HdM56CC4kLSBphVbwWdhY1qXR4",
  "key5": "pVm5GZDTdh6mumW9zCoY9h2gmB7BJVazXhSuWXSPAzD3NcPb2cWZJNsP5UGgiqwvpUsCwLJupP87VLaaXroy5JS",
  "key6": "4c6YF92s8j3swhFRLw3dgkFF3coETFbhz5iQbe7GB32U8s9cLboMrXQuBXL1CtMDJCxBLwMqn5AyGLsBVPWZHvt9",
  "key7": "2iauxfERWaTxMdjXZAz2CYciHcD2Fnr87AYEczDUpoaNHyGmjg52SkJggFBT1Cc5icYyq4vTTfx3g9yASW92dtQ1",
  "key8": "4161BatZGyPpegJ9keuC2vsEBrJjJhyigysSKBbGAddG8n2hKhDuiECnScYoq2q5Qow2X6X2hxSHS57rC1BsHr7e",
  "key9": "GZK1sYZn3ytjo68Y2P5SR9UAWxqygZUo3TkWsZCm1xVthNRpaKpV5buxuaRASzAH6jtrQXBKmRo1JSWVJdfqL3C",
  "key10": "46wWhrRLn5pMFUXXuhwSwFup8VosrZ93z6nEUKGY9gCZmQpC9AAetNH5Zi44oGU8aTPGjVBNttF16BoebdEPh26Q",
  "key11": "W4R8yhxL9tgF3H92y4gunUP2Mz2PNMDsMPuaneyPNfvAaLAHBgP2zjXv4sUKLYzXuAAajf2gFhnZ8ikKgjwqFYP",
  "key12": "3i7R5dazx4ee7CtbsR7BokrYNXkBs1GHwS1DHKjzXPgD4Hz2cfUkeiwN3A5YFNurAJjKP5XY7jLyRaPmo12Tieur",
  "key13": "47CBrEcMzw8NzPoDnDWG2wRaZhkYbDsPGTD88Zy3tjp4YEgiL9YKkotrhvrkdF1LARsJsNaRaLN5yaa7fzqYFDU4",
  "key14": "CsVwVSFB4f83ohY8tffJZsMnqgogTdZbD28GZwGfh3UXS9SEkUnXPnuLn8cLwJ3spWkW3t17RbYh3Y7R88TxXr2",
  "key15": "3dt8MCqMiE58VN1kBR1Ei9pnkTgzM1wxVMFK8Gk2QQcV17ndwfNYVubadwUbfJQcgpqoVoZpgX1BGfaBuXNVnU8R",
  "key16": "W6m7ae8UUDmfstY9h4b4yHdUYGcVEsKdwK21sFoVvAeJiCWB4gJKtaw854GxiZSU943T88c8QNqKdUJnJtHzB3s",
  "key17": "4bjrYCmX9ihkv5oS2BzYZJxwSNvEXfZVTgWEMf1ka73ngfehoESgNdqcfRPM74NG4UC5nkYNQyZxMaNXWPzpa89c",
  "key18": "52pKfi5ms5ghy2Xxv9HNaxEwAMcCQJYtVy2V2n6vyzjbuwmZBySxKaeKEN1XgqyjmZtq1vQpeEcYtvHWjR67TRBY",
  "key19": "3Z9uuDcFc43qQgWU9F412YFcB1Hm4tdNx8stopzKzGLz1JKPv6nVPxjueeAgZhgp46NMuneLYNTrWfPM3SMCscLr",
  "key20": "5DcA4U7jDsjnNXbWPJUZ46uqRZirQt9Vhhrdi2UZYfynifHU5YP6tTPf4RvYzLWyibNJ1A1VT89yEEhStkyhMbUV",
  "key21": "4TLnBBaNdVUiU55hWqFdmZnPdQ6E5Dkbn6maNQejqmQMDFN6jrRwgXJE6pRTo1rgSRrViLgnbwxy1k85muw3Sxh7",
  "key22": "5rcZSaRhBUkxELq6npuqSeGwVS7vFwUSNHVgpTFBfz11xwmGfxWjUNgTjrfcwHHn9jNc4Vu34UotYfe1V35a2WEe",
  "key23": "iMwFU3SLWS4UpYtpy6N6fiv7CqtUFbxbTBFJmV2Ez3aGBVZTANgV5sGaauNDYCLkquad4Z3Dz5p6tv13dBNfpYt",
  "key24": "4ssjQFzmSaSkzkrpyTynixDdHcNTYS8ZP666wb4UFrNzNa2yoSreU9dW3Ni12PbFesuN2QH2JzpoNUG459pzDXAH",
  "key25": "4HhaRR2XoX4SEDLkFH8bwUTXnjzCQniMHHsQaS9N5tvL1ePFRadUco5KKSJBG72xH1Arz17PEyoVQbKeVQ1jK8DN",
  "key26": "3aUZHZeq3jvUgQVRXiSCxCutGrorpmJGe3LpjzBHPdcwB87sdPEjNvGKjyW2muPbXExvfoSd62JZbQ3eSqAwPqeh",
  "key27": "2kfUMZByRx2r7wqgvbubr7Ds2HWfqwYMAVLhC1yq211Qs7KvuYqd3BvqAY4eFHcpSxqo1wDQ9wecW61tfdmSqmmk",
  "key28": "53LpmeDvS9CTsMDm4bSDifKKN4QX5yUBPYQ7AFSxdSPAzaD4DjeAyLY2MX3xk3VLQTEyhPVkjfzcbtTi6FEQXsjh",
  "key29": "2Esr3kGicEH6CARCWDswWYZ5ij9CQrtykyMWU1VMM1VkzGWgh3ioNHY9RkjAgNhG67151SRMFLD6a2QXYf7n5A3B",
  "key30": "i4o5xWo6s7cArL4tZD4G7UtWrmQtiRes8Ui3To394UffXX3DzQ6uQaabFJ9jAhZudVjtUqKJXmLe5mzPGe9doXe",
  "key31": "3zkATVJyrurXDbtvXLB7Mbsu4QSUg213T2G6JQxXFekWgQVdm95WSZVx9AjHoBUvqPv7Fuib6uy9sVN9MuKfz35j",
  "key32": "4Yfyx3NYdyocreMSmxLJdWCTwCskwAp6cpryv4WxfZBpLhiTM3NgjicbdjCvYmdjaWgAbzSKJbRSyomReist8nG6",
  "key33": "2U4q62Z6BfAz5EmPnpjZbrQotqAYUffyfVtmkH7KZ9N9xpnMXW4sMctEPWi1Us39tHR2qF24sZtNzeco74wskJ3H",
  "key34": "3VzTaoGuYK4PtsjMxZ6a8Xh73tbqgmxxNTWmzhCuYPmZ7AfWSJjFy21AamAvrWuKenjNbYNHQgiSFJR8am5H6D8w",
  "key35": "5kuFCoQd9QgnxYgvEoyBDzEPFJyaGHz9zrP8dRzFfnuqZ8P93Ar14YB5tQbZvb9FYNXr6rDq5FbpYey6JVTjKwG1"
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
