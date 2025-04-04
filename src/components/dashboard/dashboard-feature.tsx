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
    "63BtGJUtNYbXNaS3Jy2K99L9aLCtqMihzFeuF8w32BLKzjqQLwBexFwvXyXmdBEAc8Vgm9uFd5xhut6ruSWFu8nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZxY2zj7gx5B1Y4xbGDcVhZP4HJfahEH2t4KVtt9WsYRhBNWrYxuui8Gh7sSmfL7jBKfizgWmM5XXnjDjWjkkPu",
  "key1": "LALNgi3re6npVY61DS2PFJjVBJmwxfq2GnNoMs3HDZtk8zH8QGmZZEPNTEEAzDPmNjR6t4hPekUdnUYkVpk1e9Q",
  "key2": "2wo676QkZPLhUvKedZC8QzZvy5YcRVpvc2wHofohcAKh6JymAET23J2NbcHfccAQ7XxMGV7Ptb2PCKkGcxYzfCEu",
  "key3": "2Qbcy1R58eHnueZwTVZdxGSRKZRfxkgrPtyegtSH8g44FYVXr69AanMMR9SiB816GGc293Z7tXbxrsMBWgUy4aPJ",
  "key4": "6cJfFNCs7TbdhQwZB7YPWS7buZyPGcipPeGxX12cA1vbJrPj5uJqVerEsffNdziADL2SxgpkaNi6NZGuVbDJ9uq",
  "key5": "3CJaiU2CdJMAmqrws6tiBJzAXaF5qfdRSK5TovZVX8j7m2PjVFyZuENwB7ASAGAU6uwmMp6kY8HnaRYX8HqGjFyf",
  "key6": "595JZMkHtTudBquwVxrSqRAhahg1AbA86uFbCapVW1x7tkRkhThBYKx3t5y7MEjzLmPFRRs3ELBYpzoXrTWHHpkz",
  "key7": "BgCCWcgKdRiGbhZKSARM2Qiw1WZK8dRRLKLSPCYXy8xcGXQKQQPeVhtQDfsrF9TvAAVquoorrPKJF4wLxxqkiz8",
  "key8": "5wNRejyLFrKVBvX27o6eGm3w9ELGxAkLPwqxUiumub2xsLwPpDY9jivALbhbABvRXoEer9XBvm2xDoJyDu6DaR53",
  "key9": "mq1XMTMLURBqKdYcG6J2BudMnipFuTdus8Yi25kScwe2dE2BZ7WxBz516HrxbFXkk4iZFkKK1d4LVLfbqfqFPne",
  "key10": "66hsFmBB86FD6c611ypiAfNEb7pCALmNtZLd21otW51HsKb8RJmfZgarejWMz9pLJh3oMWK8i4M6qYvSgmndHt7s",
  "key11": "44FsuSEQfW23tXMCaivLtwvg99obGjYZkdpR4KJCtZsXvudWWLiEHUc6AeDVvP7jiTQaYCTWsbp7J1EvJqubkry5",
  "key12": "2sohb1WeTqXQEkx4RZY3JSgn1dMjEkY9K1Ftd28FgkASkztA4SRULVa5PBrbMxdg2Yf2Gy6XP3cHdWyNNU6LQyfR",
  "key13": "2hDtYwgqb8K1E4V1tYtwEud2wviTibErtoY2GhzxEKbMzGYjnD8aoB6ERUSPxJ3YEdLeseH9rYgtPrVGfdxHLivo",
  "key14": "iiDmnWYB7fze6jbR4TWwcrdGPjYK3U3vKz994MQtj5pFdLkfm9ezT9XKamhAfxA7z4fX5G74yK8t9FVCKvh5AQ1",
  "key15": "44FRTeus1xpzs5DhHKin4tTt7yUB1Zhy5kFewUngtVqzykriiZVmYtLumoqNnZSy7gUednCoQvoiSASSb5HRFPga",
  "key16": "38e2otb4y1XdUVRQUycs6QXVVHHaHrWmBF3hekn28SLYCFrtCbRvbVr8297YZJabesayX3fENQxWXTDXmsvj16Vt",
  "key17": "sKm47qaRNhdcQxoSfY9RSYX2gFohYsdY3sEWmPz5AJamRPM7on1HM9FbnKV4Fn2Qxz1rbd6pproTdAfreQceJ25",
  "key18": "5Fv71nJEKdNZYfwN4JdiugrfvpoMQ3pgDat8Tr1fDoE7X1edNXdDHgnksMrU8RGYMXjp6ZraXEa33E4RHsYEnJKj",
  "key19": "3fGA2FQ7EvUbti8zsa7QCL6LacYsD7rHj1J8f6wc4JAMyPKCf7kGnmwHjki3eYn4judbKqCwfa2c63gHU8KweN3H",
  "key20": "3xUmEGCMyx4qBfJ3ZSBbhBhtZuaHSTVNXBtk4Lu8EmwgYWD786qqPpRPzNNXiSTkiWbfF3sxmiUwpEr5EeFU6ZZR",
  "key21": "4zB6okbscHKNkHVxUWifuzzJSPAmFG2tErBNQR3efz12YpiFksYWrvhupdL9aEeftcCyANFCgWgw8KU1CEUMSMaJ",
  "key22": "4qu7DygURkV7ExefBGnRPqeewffu7uaNxbzmzUNuo42VpwDnwuKsewJT9o7Y8cV9pGZkc9a46gSYAYwDnv7bSAsq",
  "key23": "2qZziD5gDtwhiJcz5FzfvCkGnn81mLGdppAYywi5FQkQQUWGo9uuHUFGaqbeMGgCyPAxvH98T5H3mApZpk7xJPH2",
  "key24": "7cZVsG8QRTfEgsHH4JDJbhSNhGjCMseXque4eihijwgDMjLQArNJ7xHSRaa6sE7wBChibGfMvi2S8MxPyTYuPmo",
  "key25": "1XCL3HeZkXB7d732ftdbCMb4BBDffVGDk1uRk7GLvznRFWgPqy8aej9J96KFf7PfuE4dv9Zzoh9RZmZWhicHYaP",
  "key26": "4UP1n9esgrrD2WAEYPuPrspwwMku4Xyg5mehGEhS7GaekNVPyaYkMK3T4byDKkVYmSnGy9NLXdDVzNPczwfJrqEK",
  "key27": "4NDzVycLqWC1WVzgm4oHaozLTiWqFoWtbxbVnbVEwHzVdfKDXiJvzatWbKhW8pYpFJp3NquHsBpm6wMy18iikLjD",
  "key28": "TdEFQmcKx1qTW2pVFKvPHcEUFSgmYMED6BvtnSVEG8qHu2hpUUuUYttSv819PQiwwayrE1FrJWEusoyinCpiVah",
  "key29": "2o5QgwVJcRqadCBxoNuSzepohCy6AkBgGiGWDfuXYWMj2CS3yFSpY6DNr9xnx8SHB165xxxWWvdcSGZ8JHquGWqn",
  "key30": "45nzE259KmR4yh8rhQfZcWnaFBgqdfy2VkeUt8PW3TZBDyG8pZGVyR1xMMuXGR6ohDQKVEpjv54j9JMooMEsDRfc",
  "key31": "2sg7QVwQwYCmyP4Vj9oy7cd9cUasgtPnNYRnf4zaX7iDnKHdLTau2tG5vERnf3TmLcWHENH1X59DTruTRx8jWnjC",
  "key32": "48cso33H7JVDxm54Stb2VHdJe69xmbNe8VDte4zjAQaFdLRjQ1pwFt7QWwrXRoVfMmeVq5GQ5FKNz4WsAWn16VJ2",
  "key33": "9vRbD9C6GLEfmWg2wdj6wzf7dBdppf1GNCax63Rf6fH7eBeLNiX98eD5x1KNm1CT4NqgsN6LtBHiKe9wAmsfVr7",
  "key34": "PerfDZ2bMoumA8NgrczNDoZBdd8JpfG6VxrJ7d1vhqvSbJEyQjjfrbAd34tGHH8U8Egvs72m5F1kyY4aGLqehGn",
  "key35": "4Y3mmhJrHW9rvCSGhUmdWpEBZdy7Vruv1mnU8VodZJ3kcyhYDVqfXBxZAuCJSXrQ2dJb4sa41HmNk9gcdY48yJ5u",
  "key36": "3eMY5wTo1so2MTiNtVVcTXK9r7NviqDkkN3NzFUjiTbFm7nEK3A9LXxAcArm4mF4PxL2wPhLsGqSgYSZQURsYj2K",
  "key37": "pmw2xXwwQzbCkdNC6V3jzyHYyFdEGqdPaRxncZgxt7g62kzGdM76pYr4YZsakka2yBoz3AZgtjvbHkVvcxQK2FJ",
  "key38": "496f3wBa8CChRZ12UvVcBJX58eUXPqWqw1BAMLdWzkMS88TyEMjniRWYscEShdZypYTDCeDtTnemoeuSoHjq5ug7",
  "key39": "5X6AuHTfHpLy8oYBFTChUQkxE1sFAmfo8eySmWBJadoXEriGAFQjS9M4inuMma2CWsPXoknoEKuw5icofZFaEvLM",
  "key40": "3mVkUr8H2DosFhmfRBexU6C6GejR66cUx39AckmxKXyGjp2ZRVLoHHNk7tprRwj76FDJyw9anBkyiao32i5kdWVm"
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
