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
    "39oCLi7tS5cfWTwrQBnaUyS4qThVHMQBaxxfohBwszdob1cWFf2Ut8wsRasXMUVF3WRJiCgWyyQkTnhB1GvFa52T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HjZDAPywwoDSduZUiocELc7ZeZSehA2Md6UWw7XWFcN53YRT54zNSNCEpsi6auuMaszzYq3jVmzhWWj66AG5jtM",
  "key1": "487AeCYZ2SfeN3Z9oYaxnAhgBhN8a8wUQ3PBGwFDc9RyKGHMTzcqD7UkhiVFbXd5tFU4cLsLYyRW1ZrSa78ZD75g",
  "key2": "4XWH61WpBRjJPVSFvZHEiPjzSu5gQKTxXiwqFBHuCdpX3ERGrY6aBAgRx2xct6Cg1rnXiVfApuRZuFQn57eQKddY",
  "key3": "L7wxa15agHnEBXDqnJXywjC3W6McipLNMkgbzbYHPVKbYVnkoh182YG1hSNWu2ahSufJoEKFbRQWdy5c2h8KorP",
  "key4": "ux3MvY3ji45shqvbZa2LUgJvYdirEr429j1XWkGkFQHRwNRUAWtDgems8ZS2x2GruqeiEgigGS9Ncu7cMWh2U5C",
  "key5": "5YW8yRSguquJJCrBs19kGeY6PNST2L3nVdawJzfNjgg4ct2Uejkqr13kwLxVD6vV5FBLhRRUbsFQNnRiSw58Nvvb",
  "key6": "52E9zMeEMdKbgvA3JM8hCPJEk6SLJFihPqbDiZ7DvtKxxMq5K4WZiKmaNcUJj2mTxtdfPTvJxRBV1o26a4Cqs7jv",
  "key7": "2R4C9uNGJ6Tg46eWBWmFgHrPjYjRBd6peonai3L7Ak9KQRsusHSZ4QUyWBnxgWzNHWbKiWdojh31ZwMAo1mgA4VH",
  "key8": "2qxVggRzUoZsjsL7ZMM1RnZXTtg2m7jkJUdaL4y72TbHhonjg6uYWvz4jCWF85MUkuBsRyfrBLREV4LryD2AL9rU",
  "key9": "mJu7nXEJGksNRNn7V3K1nxnCW3QCGiNh8CXPD2vQGdzzoNAywBTRKtiPyDqKACHeYZLzXcD5sroaaVGnTxFDwey",
  "key10": "5sRRL5fBUXXRRhswnGC3VC76QGFyTvnctkiVUYfp5CzE7s9J1bigfxKBrBhnvjB2jyKyugpPQLKEzmJLMH4cqCXM",
  "key11": "2Lrt19qQYHMj7xGGKoxgbADZhLVaLPjBmeHmEC9L1ZJXFDHmxtmqC7xiY4iRSvuNVPCWrzHXdLthgVsuA8JMz7Qd",
  "key12": "3JT7L4cfxpj2m1uceLqs1q2m9XSzi72fYtgsA7hwVQzjjEb6xwPvz3gGm4z7Bvd967znwYxc3Ck5TP9TZuf6xp5c",
  "key13": "2RUbwpBw3aP5FQKeTyCf7nS9JVJ1SX2NsLaU2puxx141LpsrJeS6R7LvDxRZn25tnu8ZpPQcrwGCFPSKNp62FEsk",
  "key14": "27inKPMd4YyBLEaRVdyV5daKaRDKFmtDTZGTtRdR9KgSwFY4QhPPhEapHXa8GCia2SSYXmZzTwX4VmFDfo1P3MRZ",
  "key15": "UcBPrBgLzypPpjdWxv2YGbtM2FP6hsTDLJ3F2k2tiFEcA86jqiqzMLtrK61yViU3YXgdTUxsfBCFGvHkikzWXba",
  "key16": "1Ebnp7UaL5cucR4c6nTpGReaXY17qnTK6pSFmaU8GYeATeCe9bTB5bh8FnWMSc4Y8yEKWQGSkmpXSxyMY8cTrkh",
  "key17": "61CDZk77oMiCborSLAg5QokAfA3zgywNi65pYMYPVXvs9MSESmr3WhDa8u81Lhz3Q9XBGi7orgQmEaFFpjZhm58Y",
  "key18": "5bvFoUdHEyEhEtyZAjk7L1xA4cadHX7enAwC9DNAhPiC62dcoCfYHVg9iAEdZm2cfiz9vk4iyKVXHEo7iKH2Lt3d",
  "key19": "5cTXrpH5KKmZ7rob2tar99e8REHm9yNkGquFtQiLnNbomA7fbdmGsY6RPJ2VczQdd3DnJtZ1WvCAodyrzp5piz92",
  "key20": "4uUXpXx3YJZucRBLHQJAb25DY9husCkczoE4TWTbkSJk6ZFTGdEa9tX3akMtN7R82k9c9xfoS7nVF1mxGfrrLZ3t",
  "key21": "585WS2mqqUWGt7jm56j6TqRe6yaoeRykkaPRHPBpMLqiVvmXLVqtzEgavttjfvwdUFceDcs8YY4eWqUc6wmoBssd",
  "key22": "5M7neBuwX3ABqtDQfdcwuw2J9KH46intSdi15YutkzUopg7b8qE63nTs19iUkvNDJ3s7f1fyxvXbvM81GhR5XvPm",
  "key23": "3TwTkVYoS5ASKBrkV7XL7gNe9rTUGQeGcshWWdDnoWTD2cNcLUnL74NmiQuSorPuYqqbj6VLk6i2X7Bnya1MgCUB",
  "key24": "BbX8oBrYp2H7wauFz8DWi1tni2UR5aCfLS7WrNfVfGomZsvQbgCa1RwwZs8erbNc75QvSK6fGn7M61ArT8BGYrc",
  "key25": "51oWopRUPTi57d8MnmojivVdpRrHujEW5goMX7fya4AiiMVa2hAnuZzCiYbgTr9izapy5eXt2WfaeGg5rkiAcfeN",
  "key26": "3JxbKnNzGkBexKMn7kjK7unLvmn8WoW61XbvKCFHDqzTwn15X9reNF4QfjkQ5Y1HgKhwKuXNMFc8yKztvbargxiS",
  "key27": "4CGNCak66MTcKkQyH1vmcmKoZqHoniFawKRh42b5tzc2wHuF7H9Ur3JZETo7pLMUipyhgMxrbMwdhdYKk8f6Vyyg",
  "key28": "3dteYYFgZpBJ29E4gx9728a4aYExzQnnPGHMAvg51nL9fnc382YsKTdPNto4pTKdynzomcFAifEKaqAVYK5veay7",
  "key29": "WRHoPWmKetrJDAoDZKX3y1bAF2v3V9fzpdi5J9f8aAkDzmzaaZbJeje97MsksH8PimYjhjL4JSTGyhbbkPc5Pmq"
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
