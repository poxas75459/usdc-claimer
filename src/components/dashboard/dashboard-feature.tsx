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
    "3ycwdsASDbQt2MJYr7XdQb9XafCDLK2kw32WEDdHgsDHttUnXNS1UekNhibNtzv6ep9jMUaErwtorxGU6jFZjsPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xX5ZwFxPpHWrVVz2ePqBx9ydu6PpM5rg42JXCdERfymNdB4zvhWoRbqkdTyPhkByLmW2MRHFH4GpKfwSD8mihoA",
  "key1": "he39dy12SPgWE3o45gc8Dr1SDtb6sGysYN6HHZ3Kf7q1jmDYZzx24GhUr6HkHhycq2pfXMcKW9GLVJGDnAwGzfw",
  "key2": "5MtBWEwHqxfzpit8sn2UTSykaek4urz2NVjUFre8ZNXxhKqd1Ar5daF61PkvCTHHE371vqPgtpD4sn7nRNcMBLYm",
  "key3": "5aLMqdWNdNKbVyJ8h5HUdmpRX2UhW8bGvLpquW3juGvKi1KpVkqBsYDQUApdK61xh7oYnhGqzTgBf4BzfSVoifiJ",
  "key4": "5z1Kb4Bybns2CN6MZj6bRPkcBeStJkjFmFeb9rHN83v9HPSnfCtKUTs3AMi1WG9ATZAMDdEnxw9P4SoPekyTAaAa",
  "key5": "5jdULCTcy8R4sK5TAq5tRenMzcKrVNhADiC8XHTYpYSjzdMa3ZzXFXji4K9QfMCGE8C82opWKy5iZzLWm7AH4p4w",
  "key6": "yVsHMjLyHCeybStA3KtxHdW59zdgkkoGPapwktEPGnpvt4LzWTAkreMLAyyVPL5miX2XKHVyxrUofXRKQBkgXVj",
  "key7": "2WvGFE8zyyH4JJ3nGMq1CsUfjqZh1FyVeNVDow7YZFJNgwgzThoqhQf8Ct3ek3HswKgof3zBZdp5FYFdagGhb2bS",
  "key8": "3JQUYn4up3Mv93jWtKcvULejqTk8zk9gYTYPaghWKXbtdEA4ridZizFp5xgKV8Az2QVnMJPm9ZgXMW3M5Dxm3hVE",
  "key9": "3Biu6vTrZBUTopGSKHwufvpYb72BY3TXY2ayJZgBv8BvqQTbKGRHEXZ5BDmvWrNTVvDJrX1JrcveozCc7WJkXCDZ",
  "key10": "4X2kJwb5LW7uTCviYqBCyXQA45NsCCVQsmXxV3VvJULaYEuxwDKZW7YiN8hPALq1FNd1LF1RfTs2zvZWuKkRQFiv",
  "key11": "h54tNu7EfJ4NTEjbsmR7c635siWuLfyGsz6ByyfLQkes2jTc5JmmosYgAPbShBHEHnPeNWGApAUaWzZv7yxq4yZ",
  "key12": "4tiYrGFqFnRkhW9HVNuwyKe5E77ghErGHzMC2nQ6jukUmJ8XGuUmg5SXKV9jqUTkVakWi7kvzejXWDgHJWAUC1BJ",
  "key13": "56XaABLKTAd1o6GFSyU1bmDLnQFdAkmKaTc9fnhJ6K3TcGSUQtEtyPtAcXjcyQJA222kYq9eV34bMj4XsrRsGJaR",
  "key14": "1569JS2H1STt55uACGqn7jMBJdGcL4v9EmX4EWAfqBJPWde1bjRRh7y5chbt2knpfzrrV3ApXXiwKXqQHKG7EW9",
  "key15": "4fHGPuegwzoop53kTDuMpCqQFaH2Fetjtn29xjgDjA3xnxbK9gXWKcRohQ6YrQCa1CtPyWfwSnf948ri3hqaYSdj",
  "key16": "2WL1ZJTvsUfuyuSpmEw2pS3Am5HYiQpZihiNCC68MSyR7vVjAtqynvE2FGWVx86xHCer7DQ8oLicq1chYwH1Rm5C",
  "key17": "33rT6H4YnyX6rUFvtQxaSrxRPqw3zmtDGdJwb6Wuu6hux5aQmjoJpTfWDQ3odTqwvvKDR4EPmaq48qHscJpbhcgR",
  "key18": "5eJFRoJtA8aoJWVTgJYHdTAVzdEkDdCeEPyjR7HrtibM43wJjF63dfiDspFnRuiKW6ZFxYd5oUxr8nuyadz2j4HE",
  "key19": "54ZwUAzyLMt24eZA2ifxVDFG8eHDrJvfDwUMjxmm9s3GgWEmHTniZ4DYhwCcBWrzEqLmRNX27gHrAUMiWF73hY9A",
  "key20": "5fREsn4WyV5bPudDQKbVxcAtnLZ2uHeEWzyigjMRWKetNZEr3pScLhttdE4MhW8R7YsexVQ2LJ7LQdMQBsj57o8G",
  "key21": "41VsVKbRCHTkp3Mgs3XtitGUya2ZJWkNkAUM4rPDxDw83y9u8qmoZBG2875ParDi5nbpFd3a2LSGwDpY1ohjc5TD",
  "key22": "2QoJL3pSXVjDAS8EbpFetVNMNWqMtzK4LhUAM1fyT6ZHP5up34sTf6EPdDhLKMkUDtEk2L1N2dCEG2pXfbQREqci",
  "key23": "3q7CuhTkdgnAaETWck4HgNaVxVnDYMC2N7TZhwkk2qcwciE3zMSTNvNJFxjG3hJfwUCuVXxfTV7nvSEEWUzXAogY",
  "key24": "qZD6fEAG1gSMvjLcFztQ5SMh1X57hSpNhpFAk2PNJnT7WRJNdTrNE26H3bsWRPAfoSF8VhGMUCyuWJw2NLGbSrC",
  "key25": "3bAQMd7ditViBiozH84VimpXXwLWk2n5Ef5vLzU893o2bqbhn6MSmWFoTwku4JtwzyGZTcCAaNBD7FiagLmHgoTP",
  "key26": "29Ut6r89Lxjvng6pkwGoL5vfFMPQBt7v1t2bEJnEbjToHwdW5goSHNzaueGLcJ3BKV5xN7bRgEbFNfH72z3VSg4e",
  "key27": "2EJk52ezh3jWPAMziz6yZB1Yj24Fi9juYJeencrDC2gff2vKWssrNAx2L97TgTXp3AXDX13cBRnni4NzZ6a4wvMC",
  "key28": "2BHGDxnLXiwF2vom7B1MGetVgES3mqt8GZfqqUy6MRS7LNB1HLTJoEE8gDXGeyfYAmX55NeJGJPTCMjeQpb7eeGU"
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
