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
    "4kDgHkvTpzv1b33DLB8HhmT1j8VFsvn3MfNZEzf6aA3YPEHpwcvqs9FCza4vqU7mDxABvs8Zmh1aDQe4B6GbbLad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVTGAr6xLGw9772dcd8hbi8EVtrMDrGy5nFeg6RjShrpiMFafH4y45aRihBbX8jo6vUGVrRmbeV6Trsi8mhiLQQ",
  "key1": "2iEzDWoNBJSnREZAvJtkHFuZYn7ZD6J2u2qiAXhg53naVntMtoNFJR6NS9KU2KPiJR8gf4Jjy6KknwHhubrToPCE",
  "key2": "5qbuXTLoK1Ggximm36S5ahPRh7yehwpK9S3KP1KrSh4yxiUCAfzcFVVMRbm3sXAgt58VF3hNcNY1Sf9rJtAfyk1V",
  "key3": "4YGceahTy2zwLSjUXGjynghesPMhQ4SYSyhywXyWj3721FuzpYxJygMK9RDWR7jPEEAU3dgYM9TwgAYQxidN55oH",
  "key4": "3d2iZDZw1sSf9JJYGTMuUm5LNpgdwLJGPfGG6ar5oDZSecHmrPPkkHp2Pp8fsQcYyaNwKzkpvUKafirV1dFA885t",
  "key5": "5aQc8pXGdgo2WU2MCfaJWgPesWztEXKmNcK7sfgPLjxLDGrAmn6mr1D5bKtmpyQtZ98ZMZcuDBzT2dC6sboKqany",
  "key6": "52AEAx2rWsX3SEot873XoBcNLacerBvV9tABPYCnZg8sRLFJTHkNQECKMZ4ZgaSV4embhhBffqxgutuRRrVRiQVi",
  "key7": "2tMcEARAHCcRPm2GFnvKZsnb91fgsvYeg68NyVzx1CVv2GTwrXJtCs5CTe2eSfMcwKgQwHJg4wsB5TcF5Kyo6dJV",
  "key8": "5gSpbFoJ516hmYG7WWpXhQZzvA6tTkk2N2Qqw7GUTJbMTUii4Nu3KcysshUGFw3VNbu3Uw3zaCPdRb1NcUWYdsCb",
  "key9": "5MVfjyZ5fHvt9qishi9tEPzR1h1a1KKxxPPWALh5UQpupohD5qgcKmwi1oKKGxBpffCb1jobsCh8bc1cNRCnqeuP",
  "key10": "pSVzZrScEAudS5JTh4nJwadQrvhgSAmk43PkYQSasrpnW7bn5VqL3jL9VPSA4k26kYS4KSZP6fZzabLQbrXHeNN",
  "key11": "2qaYJnxUxvdCMuo8c2QjFRXLSfhEojpNo4q2WepTiHzVJZdymUVpNsfKeAhdPYiByWfEvEJ5fBWATGrYEhJ8QdQR",
  "key12": "4DYBUcRmcKSk7TBEuboJFoQPPYRUQpssT7DsmM5CGm41rcpzivR7J5NRi7MRjqArYhKyVFkrue72UWq7bX7ivryE",
  "key13": "4cYXNTiUafQj342WB1gRbxxJK5c3X8TcHUaX4FHLiUiLzQGm2XnL7unqsXfaT4UmXPDxkcn8TeY2wmqM6vSyPUHw",
  "key14": "2X7UHTBq6BBbT112jTKUishqbPXr7UQBgQXFyv99ypesL6VDUsuFbdoscqVWDdzjzXiVbXGkP68EBcgYL6H57aW9",
  "key15": "iWB4g97sK82w23TKd4Kfkk1BGmfrQzb7Sd7CUqR9H3mqsJAVDtHAzKHtw8Uv8EZzonsHeETNEPpx5fExHk4scmn",
  "key16": "5inERbCmzAjyWdmdaArbENrM4hPAL5V8rToP9kJ36pPtPSqTLTouKsvJD6G6Xg7BqJf6AS1BuUsohDZ89CPcR26Z",
  "key17": "3EowiM4dWrifomjM9aMNkGFVd7hKmV5cif26WfmzytdmH1S1AkRd2mKFAcNpp8avmyh1iUqHES2DVksGtCh3tKfD",
  "key18": "rxzfQvXC2buUtdvvoNN8xWrnHovW2cs4ZMYQhTHUZE2F66ArXhCcCgCojuySFvfCGfbeMEFSxbj2w1qDPnRCpff",
  "key19": "5waJjm3R6brGJ4enWUi4ySYY3NZJaPQcNZUudDunyTe6xAJSM7qwNCkoJQCG6FurMg7ujwbsCiw6F8jEW3v2MFL5",
  "key20": "8vcguU5JujMLfgmbPM9iMUMxWNQjXjaihb4pPfNj6pEnsHj69K2rbrks3jErqNrREqjUmfTgWkrpEmb7Hq28YbV",
  "key21": "2iutcs53dP3QXKcpBe15ykhyDE16zYNnq2WJEzcvMBoRye5YD5DkNKMgGhmLqcCnUqpQP8jTY1PB3qBiFqKtFXJ4",
  "key22": "5KeT97pv47BWZyjxQ8SkE168P2knVYUZcS8m2dAhm19Mcd944N7cDp5U6Kd8gBEYnJH8EtW3pNQs6HiEfm33qrkw",
  "key23": "5AYts7yQw7DJ7hKi8HZ1fNpa4cTYbcywZeMgZuv4Zo2RJgdGowsjRLBcGyfEwmwSGfdcFt3Yqsk6Uifppfg8xtrp",
  "key24": "2s6gf8HPeR7XMwxnviDs8cb5GAkB42eBQMTspJAbD1kLxyao1RtHhDwALyJ4cpD7jRrnheo8v84awkD4HMg43xS7",
  "key25": "ir35fXLGd7qdPv526SpmgxziTkAJdVFDzTqESvHUdxVxTRzTekdpUH5k5LsLGRuUZjKv73Z12mq99JxVxpbnU5N",
  "key26": "2cqZe2dRojwoZN1kvg17uwKY68D8XKUuGhzn2WzEJR2TNcHNaLUxRbAaboyE58ev6uZoAV2HEQCRVsbGNg9YWLLY",
  "key27": "447YMACk9ERgpm1c8CJt7hEz6ttKwsgLjakr9nxTRB7hjgAWE66MuZGmrC23eyLC3RAT3gtsevtjiyMZzAdFgdem",
  "key28": "JVUXtSrKfi58epA2WaHSvrbukwjAvDk4LEkNn8HgW4Ui3QfWvrvwg1hAR7jyspefgj6xDzEataVsjymJ3JAw7Tr",
  "key29": "2k15fQWchmYUquouPRfrLvagwjPLWsAA3PLwQpnYjS5gjwfH2BRw39HqyHrep7hSAVPKdxrV1oi3BHQePpJvEapT",
  "key30": "4bg64exRi3byxtH6sHNexNieBSZQTCoZTQ5ajo4sujYENNqhj6GBfrLXqyzjzwsxCqU3jrLNHnNAsCCmYhz8xDGR",
  "key31": "4VvqWoxtQVddsr6HxqVVe4dwiWeG6h13cMK3sGXCYwmHSmvhrFyrvHWHBKwJ8FDwaDeX2Mmu4GUfsbSaXFJtBz9z",
  "key32": "5G1DtfpmgtQJAfCH5Fny7bzFQciD8bQz16tDxAUWS8rKgHSfb4WSJtNLXJccGPqgwgVAAZwpWJf8rWgYHMXt9kbv",
  "key33": "5VexnJTBxH42LVyaqxdA3LuvAFHZGgpU9cB1jfMZFiPvbNpjNoS96KPVrYjeyJ2774XB6bs1EcDyuLHMDwtXxr6J",
  "key34": "2nc4o2bCdCiqv9fJMJjNVbkFsd6xJFQj5dVvUPcS5mu9ueXfGNAFF2AxmeodvB9F1RBpnBvTtAxrwiypJcYmrDdb",
  "key35": "5fR2a1oPVBH7RgVqEj1KZzvHQGdmK9t4gRjcVKSgCwrSz356piJ8GbvHuryQArj3iipn71uAudVmkkgdc2RHW4q4",
  "key36": "4N6YPZk3nvHCFKYVdLp1RWx3nftjQi4WQrfrvppS1Dm3Cwmt1B798Cthy1JgdGFEtvy6Bo39Z8UDgHHkQUDLGa7v",
  "key37": "62BmjWHtTZE8jDdoqdnN494n4ywW4JvxkNFX2XbPsnshSwfRjdMmnRhEs1JZMyQ3P3tYwqaogxz74THWEdq3N5bi"
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
