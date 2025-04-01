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
    "2Bxo5Fj3J6wMgntUoW2kb6Kv5542eAfTHeajs9dPtx6zB5N4vLYHX8FaYjDb9vKH1niB3jeRq4cTNogPrfhkSctd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KDtQiZcoj3dSYFzj6QATyZm5oDDiNVyBaBCEBBtabfxrrhp7GBZPuEKJtvjVB2KaBoS3gf5MCt52c6d5eHhvJA1",
  "key1": "4hjt6HsdS31upCVaC4Gmvaojae6cHwFmxUu4xWg5Ls3YJkVmMrNCgrEfyz6AuoaGktoEprbeSMWmhjTPq5CCLPDV",
  "key2": "mf9CGiVTBfwZZfpKbTHadu8Bmp344AZrPF4QWYxo6Cy6kwBnsaFdDie6G6WjMWVaAj3LSqGhfHgXvx5x11Yx5ac",
  "key3": "442mX62m7B6Ta9svL3a7jfASNgLvZNEf5bmiZH8qeVG4En17cxLpnG6pUNss2Tr1vuRxPaDeWv7XiiXiimeX5p9h",
  "key4": "hqs8H7HM1UNRrzaN7uJ6MQrscL1oAknk7M5n8bWwqHYdCtDjHibDGutdTMKeJTWMvWfHeuUhrW62dPJewN3nMPz",
  "key5": "3G21V1LbjimEoTcTjGh4B7Fn72U9JYKy2ve75rpA5HeMS5tAfTMdGf4eqJBWsXCJ16C3SYMcGD7AHSMxfdMDZLWA",
  "key6": "47WmBKoG6UAFY4JPur867qhznwj7rB8JjGUx65zGHMtir6YKyfTac4pqT4SAZypEoDVb6TBMwQBiFuc3ZsFuZnHz",
  "key7": "4q6uQRxX5EvhdQ3GbWDvL7DgDdkdcx4PseEmY5svDeSnSyhYFAZh6tDG1gWaG9BFXbvB4EwtLdGiAChAp8mea8ni",
  "key8": "4AbPqwUztYZEx7TMSeULdK6u982BrT7qr9WueL3q1LdwEW6CTD2qp7FrMnZu5Y4K4sFEtc6F3ykjoLYqR4Umf6mT",
  "key9": "4E13fq8y3VJBkxrREuc14rrEVhiJa14ysHJojEVPp8Bf74WpGdUDJwzrLR57UvEuiZAP6JYE9BTRkH2VqLoqgp5F",
  "key10": "21RTQRdm5LkPDiMaHo8m1BPCQ5xMuiJQwrtNEa5iFmdeuiWQQPqy1LyjGt7cSwbyKWKmu5eDPXyWrErfgFvt1h2T",
  "key11": "e5uthcw2skB7VNu5BHm711u2Xpnx214mU7iycyFMWL1dxGyttuSAfX63ZA1fr95a18wbDY7ajtPoiGiWWDLiqnc",
  "key12": "3srK74GeJbk2vLBB5ZUY31VcppiUw5nzmbya4FxYEG6nFMqc16Jz49sFQ7iqfTzZQzxDa5VcDJz8wmEyi67pYrcx",
  "key13": "5EsrNdZrH9QVrC8AvTMfjzXAN7GbKz9TTx1pkakQJgCjLDgxf2R6tZyNfk42uXNEmRoHFq9B5JD5SPBb9NEn85T4",
  "key14": "3E4AcTSsiLw9DgQ1KZEBSYAg21UyGbJhB426eBZGKp4QmJUvtAuLrpHjeA5HyYv5xA6QFotXtJ1jxUwGeQLeNd65",
  "key15": "3MnP51D63AZRurgVXEprXVG3iR2nvqJ1dg5NRpChzqgrwZGJA6zNQSrHfWy4SPTZsGa3sd6sNze5XiRDUvb84tnM",
  "key16": "44jHxCatw2YE4W8WutwdtjmeXqg5bvvw5UEWuLHBKkaubKwkend34U39FJiotPUanPLa1pV4yi61pS1wJdpvCTTc",
  "key17": "5pyqzDccZeeaKw3HctavdrSN1hR5zW6iJ8tJi4uqatgwEhBM1G7XvuBvwS66FA1f4LDjPj88YHJvUZi743MNBLka",
  "key18": "2oZEwjgXNKa6yVdh4PQrXXSF1NFCJSKvQVKvcZd3mEiW1hHjpLDWB19u3PZ7LD1xXkQS2qLK9cvTJRhGaQk1RuhD",
  "key19": "4atz19Aj3cecE1JfbXAMSRbfZVD6tZ7tGtfPQF3RrHUneW848fqwJ7HQk1ywGKAKvpWL3boCakRebhpm3FPeuHBU",
  "key20": "aXJaP64pYygsm2vpdzQv5Dk8f7YKcXT51xnhKRqWn97gEQHQkBtrDgY8Y6fkkiq2MXQxkqaPCJ3cpTj3hdoCdMK",
  "key21": "5QVokXkyVpqPtE3PNQM4gZb4921uU6oaAoh5igZkxid7DtSytQzxficriPi5H384z4RoAG2rKeNqJBvQearMAuGG",
  "key22": "5kxGqaANgCpbuc4YuTxpXGexNqpNzjREcdjetW68BkQSUiUZ2ZQyQit2V69V7RCyGkegkhuPtCyX3LwZQfkTPKeu",
  "key23": "5DkRiQvZU6otNt9pNEet4byoZqGg8a7BbpMUrsbFVpK8B8wytBN8Q2zSzdPPaBUyb1AZ9P7yM3kCC8aF3BCKdZsX",
  "key24": "3HpEusrWbatgn4LLdzHKWySwYF2HuQvcsnANqyoP1Jz1gPTqgskZktm7WQp5urjoBbdTsgwE36LwPAiz9r2hnuir",
  "key25": "eDNtB3f6YLQnfWucmMtyyLToEZAJJQtAzzhroCAGquViCY2bQvGgXxQQD2erwryFgsXJUCCyRk17LR9iFZzYnaL",
  "key26": "3hoTQ43s6FmXLRhjbpaK4A8cfwDZ5BtusiofB2QEZrUCXkMMBC5Si6XAitsn2WfsfLbJjdHk2FtqemMx5quQLm2S",
  "key27": "5Tn5AajWawDkt7mMboG5mhUeGPAKcQXrTz1Q9VZqrRvK3Kd77KLXRhGYEUt9bQ6kt4UXYCZDXrq5VAEfRRCLjkHw",
  "key28": "DozU1K2feJE4MH8BQQByM72aLEfZb3GFaWSHaWMwxziabcKWxVmJgkR4XeHHYu9zeg4MVM2gkFWdJGZaBBS6RMz",
  "key29": "3gTQL6tmjcakD3erm3Jcg7RgY77B64J61xC7aYiANkZ6T9PyVjFhyEv5V2GaYjJqNAEdH3ivdG6LFWYkpHZuzrji",
  "key30": "5UDAHF8uRi3SEHhAba2CaE8weiJ8GLin84eXpgvE333Q1cCmZV4Y1L7deryjKW59A5HtsYNDzhBBGNEYPbCvwArV",
  "key31": "jvabg1ekN6fEuCzCFmoJ1CUVZrGxhYxoyKgaP2bxGf6ctYMdqM3wGrHfQGbv3Zf9NVZSNEYXtDqpThr54TAXV4k",
  "key32": "2jcdJXey7cSMYQqFkfMR1JnhhKrt2CLTXwTrBe4YMuUmdiqgFoe1NSMBRSbmxgnqxgdXeVHrEE8UFPbgU6TWQ1Kx",
  "key33": "EX2ya3QnaQNdAKbYLkFeMAz3jnGLmzdKK9948CGUMVAZCKS4Lmy3LTS28ttMczazGvdtCWm3WjHrv6cTiMrNjAC",
  "key34": "ZEZaVGi8DFMLZqhdhb5eMVoZ18bKi4vBtbf62y4ivURRjNEm5FpuJ4ESp7VfZtBvjRAigVsVKVEpZo8TaHraCmM",
  "key35": "2ed5mVSmNvG4jbRChoXXtq4tLfQGe8bCgabLKL2cVzqEYM1WEXKN9kc75B5FeHWg9L6bTspuXfb8wzMDmA3fZYhY",
  "key36": "2wQPMrXLEbjdHpQn4PvET4YBmEXwjXnCiHQLSJS4c8vADu9mMW1hxeuLQhuiodzTGbDaxzLRgi4TNdMm1LfL5dMD",
  "key37": "4y3B3Kj2GKKCLM7WdGHc3BhHwvE7BNZnETCZwdECS3mH32TDwD33tUHTjD7UzZBKg6RQUHB2QX2bW73R58kqPPcK",
  "key38": "4BRZ4fi9zegFyqQumXpHLXCrJ1uyunV928vGfefXuYNzYViJjSQxCtszFKMPAbGkVtoNKYri2B59AnTMiRvu9ctb",
  "key39": "4YncUKd8bk6my7jFt9qMgJFHvsWAyvnaXhSoH8YrGFE7NCadLMuZt1K13Am5mxZCaVBGN6AeFRv7pzTUW7yTRQVg",
  "key40": "5MXoSvzL11dZ15TZvcpFYTsaWe5WJgfkj9F8BHQeR6T7hD6rEH6unw9yJCDBk11HFRxLDxJHvfzTAorbwYHKLdgx"
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
