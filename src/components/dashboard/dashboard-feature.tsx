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
    "61VksmcKaE1cj8FYJipgWp8BaWAxQy1VcUKMPNF8FN658TKjMvr3dm4MQnCEjmi3oUPuobBJ9mRPkKFessR9kyRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u6i6KZxWsxEvHjxmsmT1bzeYfbdBJ7VUzvKEMXM7pYXFpRB4DF2i8CnEb4e9KTvAp1dVwcgKdYGc3uD9hKMwqZh",
  "key1": "39qrfvSUWfJcBthGjuvoNubZdSRyzVcDvPP2jKffVB3GkMM2cxRzQtMSJKJDALS7u6NvinYWkcKWC5nNDqoZG5Ne",
  "key2": "3HiEK1zmR2KW4FjUy53vzpLtP73HLiWdRqkG9gJB7PRgpPfiV2spJm32n2Qd2bzD5GViPvAEybBZts9s6tGBGJfo",
  "key3": "WCrMpcaXVtJ3E3JYRyUJrPxkG3cEJSnaCprXw3Xp8q8nKXkCuwVMNtpgsnPPPthPG92CHaDxw29NWSC9eSMiLVi",
  "key4": "4cnS3Dr5hi5815pjDKNf4d7UFm2EQtT4ViU8QiY9wboyPgQm1CtgZU2y1b9fdMZgPneTu7UehHqrbnpq1YxAydiQ",
  "key5": "2VT2yw21mAobyW3umpS6Dc19jK2oHS8r96V37TZvTmiwsdEZ3NScoyR1vr7gqwREyA6wsTTgiw9UYpdHr1fBD5hL",
  "key6": "4gy6tpEUvGoYY22dxEzuaB2aD95n587PAykKoUnakzKp6NRBemjTgczKoBmZFEHdwNHP6MZJe7LFXMHRZ6B6Exyr",
  "key7": "585n7CxWtT2WDpLSqN1yPQXg27Pxe7ArCF5UUmzejZwhX5t4bjGm5heB6BRqz25xTm57EMD9SXiJXN7k8xoWM8dy",
  "key8": "5C8d6KbTPjihbKa7xwhCW3iercJU58kiAkab1NpjrpryTp7VVQL4RDJ9UH5HdL2ttogFCCjGvRpX4K4mxrpDKqrL",
  "key9": "4zzqnbbDbypVvsmw66oEtH6MR8WQ7bpMgSYT5cYvcKaJPQMMjpvtnKpj5nupPGmJvKLvZiTBvv82EjQ3tUJj893g",
  "key10": "3z5M1VavmAkhp7cCpzsUch8qUcxAWdhhKubWjThm3AqtWVhbg89KWxjtZv7Xb3Z89zaKboMUevRiSRDLbsRP19mf",
  "key11": "283yst6DaS1sv4y6Ef1ukPA8yKHErHDxhzkApqxwETXBTeT7BCcDXcbGaJC3NF6rgqcVhJKANWxGseLcXWuQSg2Y",
  "key12": "424aPCknbcHRknELJvnhYV2bEbSzYTohyoJZH8RR2EVDiBVSYSPxe21xtVpK93nmDJnkZfyoxLM3mQEW6epHWSGB",
  "key13": "3kHVkMv2F7r8CzMuWuFCsqy3eL1ccKGougYFWweW1J3QZru2v4PJTPp78j7MoZeeihAhh3sg7UAMVVftn2QjQc7F",
  "key14": "62iotgCDJcF3ReGeKrjCN14eHUK1i4MjZssrmBtMengBcn2FrKreNGynX9QReUrrzfbu2rVAFw1ycDxpzXQTWyhN",
  "key15": "2XKeY2vaQP4ck1bS8usfh9mNESKF1WkMhJVS86n9TennSNX5V2a9xrWbELZFdPX6zJnJ3Nz25SMA8aYeQu1QyY2H",
  "key16": "5ob9ogutFRENeUcpPZHiTcdiboXCrGe87q2VoW912Sba9bYbCUzanfesCGzoG5iLBfpxkEi9Z73yRzBsTHth6WwC",
  "key17": "iNNWKg7zXWBnCUiTesvJpJiDuLqc1AAhjRDSYSvroJF7aWUBdm3q3VpuDbmaDBpqgbvsjw1AJsyrj4zgM1TssR3",
  "key18": "2CLMjVNqjnoVXiUzyUZVoz6xaaoybibH7a7CjLLdf1cT4nY9GwuNm38GmwaqCTDwhPfgBXgbmjfgo3d6sdNum3yZ",
  "key19": "LXJYVyiGATdSVRDrRiJRJQhWjq3V8amYL9NYUQCrG4yDwRhik48qRLcMSHcxrhY6FRStF2m5DJR2uPBszAxm6md",
  "key20": "2jPDs1UjS815rkNxWzjzFUBa1mP5uZ4ZCLaU3sEnLBSvg6a7WnhNhju92JDGKxjWgj3zommyA4uj8Lj8UCLqd898",
  "key21": "5AytwWB3AC2Sp2qQiqLUfHFP9uW4Knv5woze9bvWitpvFnDZj3QU9ezgqkMCMiS6jU7zwr5JxdgF2WswC7qn8fcW",
  "key22": "5Jrjj21LEhGwssL261bpTNcgfZ3MmZB88Yuri8RG5Es9Me4Cnxoc27kJkjWYBstGGh63sYQvKoDitaacMaA5eDDK",
  "key23": "G1RXVprGTZUVWCYUCymAVBdD4QqcpukJ4mfXQq1v1R4YjnMEuZNgVyDqUCaq11i2pdTAuD2Wq8ZMCvrHagXmSbC",
  "key24": "4SGu5bufKgMxtoCkCdAYEt95iQYDcEv511WSz34yAoAX5AqqesUU5eGhiCzLGaSRjDqjuPgbpdUnFXmDizyNww9L",
  "key25": "2Epobbjzbn6NeYHbUGQr8aPVxkn918HMYqMPVcYYyJDWTjxLxG6CBreZexE39TUQ3xD6VVXQMBSxUjektCcAmenN",
  "key26": "27eoQ2Lp789dSQ6JZojfPoLGcMBPf2qVz3heHsvhFYJGeTCgFoYzusDkk4d5rUvS3ksvw78eLEjBN1vmxiHAvzZP",
  "key27": "Z5yPPdzSp7U32LcGboBQo9BkMnm9VCmVCWPmWd8TB9FCyHDyBkPGhZRNpPDC97xhf6tcYHmtAhnUVrg6QbiboYx",
  "key28": "26BZgHCvQrwriaP95VVuRk3X2MpbLnDNtguahQwVV3yJC36mVMHxo1ayK1xdr9eSZmw8FaEnk5nAiKEnKJe1WZpq",
  "key29": "5H3XYDrLm8ySFrdyNWwkoBWFdmm8CgAHTjntqiJPEefPfWqcZYyZ21Hvqi41RECk26qHzzma6rjn3SBNXkBc2dEw",
  "key30": "5kiz8k9tctVKQcFrgfK93k8ViAaSets2ip3WkSVhNQmY2SXL5xtHUmLtEdjzHwNCY3cZK9tDiJzPMdcRvLrmtp4s",
  "key31": "jEobZrnRW8drnaeaYkVAvHb2ELSBiXGYh4tziqWHBVdd2evsBpVLkYLVAUSYKrPe9eLRDmvsnef6WfD5sSMGscd",
  "key32": "2WELRT3ULX5moWbZTXivLE5pKU8XRpVQSUokfMeYEc9nJLycnAmoeN49V8jDJanTPbLUENPFvVBAas7UyLzvQGMh",
  "key33": "XTEg1Mtsx5mHX9BtVj6kgUhjNSRUGcwcoxHmswWU3DxDkM8kaT24WsUzv3Vj4qE7DhZbDCmVUmkku2Couf2X3h7",
  "key34": "5wtCuYFzGwEVTV4gMQBLUii2UAFzjwNM52A72cX7swtN8GrnKcXYLksdYhLUYxxoS3aZ83q6XadcVkiyaQX8Hrbf",
  "key35": "3pY9u15vE8T3pgv6cfnBxLARy9wB63DpzXeoQKG3UCGquFEUNPWGPuMRd6UuhLzyguKazode8kkV4RMgNioADGEE",
  "key36": "4uqacPQ9kcpQaE1fbaFNWStHhSZ1aKWukZuAjM7nhvf7sEhHEShfuLtKKB3MNf7pZyvYehCxYmiA5oFxZBdYpWK9",
  "key37": "5nV1XAyWR1dVaM17FxKurMWssMdW4jrHP8BumbGWu1NMbqfvUcwPnCwHWDqdB7PwW4ehb9m8V7BxR6EF1BRe96Ek",
  "key38": "2kosPsefcAxnr1NADxiB4HmEyP39Xw9HaoygnkKXPpCrJpvLo8ZiwuQHF4ad24VHpFSMJjyd9vYbUbSpWxogAp6D",
  "key39": "4ncTdYbMt8HrzJ7bTZLZmCF1biTuf7voHXxL3LzkhQNxaFkBCSq3xWukrvE3cCA5Hx2zjnmXTq4bMYk9FReiWD8V",
  "key40": "62xU773WvDeuGACo9WtEU69PRXB9k3H2sqWLB4YhSE7YpzudmEAnCweGnULy4EgTBYxv6sUs91APr7SZN4FiKFS6",
  "key41": "4wHdgqBgkCm4oMvdqkA1E7hDtRqkDyBcu8JUeDvptaPtmRWMNULEXeDb3WkdWg4FUSj9tzkggg7KKAzcSKHzQ23V",
  "key42": "3xr76z4izy4JVMHX1YarYWE6aF7HM6jZf9x82F9M1YSghU5agGiBZ6mDFynj62qAi7nXh9gg8q1Faf4UyZcaR6Pj",
  "key43": "kjvQtW1CbeEoWXLmcqdfa74At9t6RW9phwkvSuUWxRAviW6WbaKjovHzoq2CBZi5DRpu1vwhxj2qsfi9cd5Eg4E",
  "key44": "3x81jmFdLE2pLKPYK8uJNWsoCjpzYWMzRoUerhvEfQN6188xWXtPVhEeLfNU41PoZbVWGaAA1f77RgCzxriuPcVB"
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
