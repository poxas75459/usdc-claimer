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
    "4ZbDLgiTgQoGo2iBA6a9oRX8Rx652t7LKawgRhBdqDpwdrcB6woWrUUSsB387Sowz6kuDe6onRAeM6Dnemt4PqGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bj4ayLoHsg4qFj5YSwmEhCyMySCJ49xfSKiybc8aAn5daDzT19Sv5FZguzxfSCYybFKk95g4fzGGTaz8GdrtbLc",
  "key1": "2wp57UeNorv1xRbEFm7PJDDWQ9b6UWoVwmAnAZu5emhCG2fFFj4uwSrRyKddhPVTcivdZXp2GxyQCPvmnDPRR8tA",
  "key2": "kUv3CshbQq8NW5cqgzCxqJvKdoMK1WyQqJpD9MaG9f3z7g38abTgvvKFjfwJXwJNiPqUBmDDHTvAbBW8nkdAF6d",
  "key3": "47zLw7K3SYSDqtkpEHYYU8WgMqjHKE7vgTLsMUFVwUJDfUwJhuwMtuFLvh8tDYqRC87nXCexJW7JGfc387TMyEP",
  "key4": "2tG5i25xj5Vxv71wY8NCgM2nyHQLv2RcoV2dJtj8CkMnKgXqAqNvsg1zFUCtDVxnfiyVjBtxXNYieXGQZSfYDx6F",
  "key5": "5aaEBWKGKhVf4CbgRR9XLyrqAHrghKkUsBrm7vdBXuUwVrJ8eF2kzoue4UGi8Z66z99n7tgCfdCTUtB98NmTK3cG",
  "key6": "5U79xonXWBrosTPBztPVjbe8eRvvqcpfNgpGVVs6rNoLwa4q69B2EYEnbEikfLaT7iEe4u77VPxGh5235rvNd6CK",
  "key7": "4euN2wa1pDCSRfARL7n9BQBqt4bQNZTvhJE9sLwA96GaeAqXoWXYAATKJnvoec82euKVqb94DVQ3U2p1a9qXokEA",
  "key8": "4xLwoF6H7L3LZ4hJ6TvaQCkzCpo9Hvwxc99pgr656zeQxdfcDS8HZsiR5LmedzbP8EKZ5LxfaWNn3BvdWPBFzjWr",
  "key9": "5DotjxknAjcHiSYuTVqxa69bYwT8ykSujojoVAY89rsrTjq5Ziyt7cPajVbzfqxzSQDqYF9ofKdPCWMHTcr8vvrR",
  "key10": "4SBsrWHLJkfnLnLF4pxX9UPyq2QfWe1PLZsg19hos9CrNyaNpwTs8F5HDGdHaVUTGjxeVxW6LJbVxUAxLrcS9RcX",
  "key11": "qmXJnrhYJwaKFxb1Uewx6PaUrRb2C98SSgZchrc5knbJRM8ZvzNq1pdDXJNSDnFTD8BRHZkyfwY363vwQw5qFuA",
  "key12": "2Fy5DRBnAAWNQnx4hwS1SEpzf5YFsJe1YnTAYRCxFAzTRnbSLHpdfuW2wkkePPSJ4kJ5BYEeKrB2dJghajpZYXv7",
  "key13": "2PjZHaUdRJ128ejje81AtR8w9oqPiupUpv8uhuDTkh2jPtVdUsP9evgruecZKfCioMGQ2Dqui9wK9cyS3dF2fgMq",
  "key14": "4TKbPez9qKhVY8vEQkdmM3LK4V4WwTdWzxUzodDR7K1xSvEUnqtVp5bo7aNUDEek6Jdk8u1UagYdxV71Bs6G4V2w",
  "key15": "2dmPiDMvnscZkNocjhhy7MRtV3AWEcGf3aHPhWufJi9sgGjC6oCuiHXVaXdNauBmTz6JbQ4bLMsnqyTy3Wd9NQo8",
  "key16": "537brbCscPUB4teEMZtGK14Cs6sFjQHDeGPEJVznyhjr6dhdedm8aodpLRGm9KWE9otE1FMZaSEUH4XJw1C18htB",
  "key17": "54XRasiaWK48yH5JoVfdUmTNYhUTmpKxW6krzJer5MLDmAoLU6SeUkyeLPUWdRYvibKk26okqpjMmMEJBnFYMr3s",
  "key18": "3Dahe2dLc6wFLH72A9XmYFrA6J9yP3SJ6QZ8eEvFEpeWtHQovQHa5CNATZxrDreo4TAjPb3JTSjUxLzPHLZgBfQw",
  "key19": "4V1NCTKMPXP5QfVe22B2Bksi8vxPP5upKTd2TaKfT9osHnza6yADm9J3XV7dJoHFuJjskRwi8dv9p4EC8ErEBkAV",
  "key20": "3YHNFgsEspQ4PDDTYXDPvonusUUrJWKSH4MzCCFdby71RiRgwuHmFFPMUaTsyuab6pHVJQdCizfHhMVbfX23VbYS",
  "key21": "31wPrkLWxptpjm3jYvtZVcLUUg1vFDVQFmv4wx9L2Z5kUbLBxphZZZ9punBv32e9unYhNcexBtXHL6uorK31zU4h",
  "key22": "w73NmMheuaiGfSEfHcXxXVf52gnFMg2wfDRLmaRcHHsqwbeNPzXbETRBAQsp516wQ47Zd32Gx38UqeXkisXt4iE",
  "key23": "2adM71rHUimT2xwYcCrKEz9g2MetXhJmZPyVQeSfmzbN7GV4zJJJZKFKjekrP3mRd3HNnjp66fGXf2H7jj1qQb2e",
  "key24": "5T42P1gLov9Y1ZC9PDSWqGKQ2RediFuQj2AgWmr8WjohHpaQXobj6jtwMagdTSAKLj3YPzunWBTbHf4xR4mWxmP9",
  "key25": "5kZRLy8ADwZSibuRLQoByqynpiG6ygVmH7rH1JutENZaHZTEXBWEkkZoaWGhELSh4AUr47Vw6ihW8dZYTRgQFC3t",
  "key26": "2tNpUi4svwxKraRanG1ZaYfWEVCeKjR9hY16R2ScaPTJ35tkqagHi7UJP7zoMXN4CMPMribjiox83oDs8XExX5T4",
  "key27": "2kPktCuNra8pLGrVK4kYR2qK2SzcnV69gjpuGZYpj3X7CbqFfSitrk9ndCBq5PSfARCqkY4A1kFFYfLBvHg18NGq",
  "key28": "5ZB1bRv8Hx8rLKCvJ875b9kRDiowfAoQ7K8PofS1hzBdnmQKdpr5x2bp6hU9mrxUS92jbvkKcqNvELXZ5ZJMhaHz",
  "key29": "Nwtw5jg8oJBuQWqKQt6oiwW8fFkjf26ayMouKBHYVg53AtbfMYuxqURDXP2j4o2RLe7ZyNh56XLcsrA9y5yBDKn",
  "key30": "4DkWdNMJQ16bUDquBAfF3joytGNgKTvr59z2evAYSigVbGFgvNWrwV2ZERA3PrvQYK1zzJzbJaCp6mYpJ3XCKvvJ",
  "key31": "5Y4KfjnqfvatNcgcx1odqb77m9sWZmJqSuJH6sUTpyuaiPkTZWoDKQ4UVi3eAYE5nXptUiwSovV2vDKEH24eY72e",
  "key32": "24kHJummvTcTntkjw5TSJdaLHsvcXbSMa3NTMr4EfrEi8fqLPctzg282L38TmXkWPZDvWtpt4GH8wZsAsEfeGvHd",
  "key33": "5yDK5JJbtnyFJNJmgRUwsRrSZDuFJSdzMJSniFBPBr9HFf3XuH482h75RgXZm1H8jzGGNuPE6NnyzEQTBCUQBQNV",
  "key34": "2GZwkCswTf3k444KSy62RZycLmTU8SuV3CkPWEcmUuSEXqLdWduvFCGB7WPpQboysdNkeguw6W8JbarLjgQuyZgp",
  "key35": "4C8EwgHLTEa3TMH2cMgkkeqnsUtmUDHUcxWfMoTTcW9NP7uh6Rt9dz4HsMBihrmHw7qrj4R7jSwDCpeF22sd3o6b",
  "key36": "52T7CHwqG9fT65cAzopE6bAaZhmtYdiEjHdjRBCkp4bbDMx1PmaBDZVfoRNn6nQ8ScxY5LhXbzn8466vSHiFZn1y"
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
