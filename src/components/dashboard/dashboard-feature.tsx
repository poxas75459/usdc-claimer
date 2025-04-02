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
    "5B3oWbr9C2BgnzaH6N3eCEWTRgDLKK9ibFtPGUsCZBtqYaxToqJBCrVqSbg2PojvARSsZnagukyZxnkYBhHvkZBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iRr6cesXgniftGWBeb51vHjSACmpvkpgu2BMzvQG9qKU2x48nn1oJFpoiKuT2zHfRLL1MNBCskN8JvEDomyk66r",
  "key1": "59vnaK1KPdySoHkMa28Eup2m6hjQPdqtEwUcEz7fhzVchVwjx3bnWFacD931b9aUZgSdyfxPXAi23hsMHB1aBNdw",
  "key2": "h7FZ24HU7Sc1bMLa99GmojNFoom6kz264gfGgRYPU2XgTbx3pRsNjKXvYad8884kB16vr6eAyjFt1y86XCcuZp8",
  "key3": "aAzBKDRkB9gw3orgb5Pv1gtacFoMtqE4gcCRL6kYRjzkFAvXE4moHEAbSRxQGbLSNURSBx1eSL38mSwNCDB1tEN",
  "key4": "49Yz1mFNWjj3dh3RJ2S3WmrR1W6jtquUVs1EowJkc23DwMyNLfdwFn6YSJXCpW2w96hQSwuqqanJRSJLZG4dbWGe",
  "key5": "13qW7Xk5dSjNaaJRdCTuf5aArranHnmECeefsMuetA3VDxjAjH1fRYsi5RKWM9B3798ABGmULeMuiU8fTbV6FQQ",
  "key6": "2xKzfmGrfvYd56ifnzSry6f1xbLRBNCjcdB1rKn8jPp3sHRmpSu2kKgoz6X5NuNs3Xq6ppPDZhLEMHDryo3SgGUW",
  "key7": "57toWb61VX4uBLFBuPyPEmqb9H9oiTt8uWZDhYJ9Bb3ev99ZbUprhLtoERi9VmprkyZvt98v1vVbbDZd7PMLAMdh",
  "key8": "5nauF7HPyZAA95XCZLD8biTf9WvTzSAfLxAvNmV7dceKJXtcECi8BVRKYVA5xJV4BB7u8XEr7LqvPT6F47qvn1FZ",
  "key9": "F5SUQY5eawaPH51gL7Lu8X3EnGErnyzFRmGUEuY8F7U3hvu6423XwsVej6aqM1hEtbL6jXiLUDkog2utqsjth3x",
  "key10": "47K42mDysbBeM1UH4JiWe4LjpXASGsmvgoys7x1ZKqY1muaqUhb7pi1rvDgHFMPzJzMTJirXAkBBi3Rb7tf6VJQ6",
  "key11": "5H9rz2y5qoj11rDV6Ls3aNGu6Go2jWQT7GS58gCtzbtqUMqnJGuJvyZsgrt7jAN35V93EumuZTD4KwrZTLTvzdAp",
  "key12": "2FVTGsq5Hfqw4EjFPUCc29hHWdv13B8mQRHMzTPmHiC2qP4a4ArNhWeJC8sBJrvXJfK5gUDRPnfcdzSZZr6ukUyS",
  "key13": "3VV6kcN4rfaqypXVFnikHyvYWs3LkeQwy4DNVVDEB9fxhMJSjp46nvNkcw2qt2YbwkCzsSzbWGKGRN2nnWi29zoh",
  "key14": "88MXXkqg4iEBEiKHZVpEyPHM9HGXn3aND5LVBiUA7XvzgCEgKxLZCAn7FFAt2ghe9kQ5rbg6Byds7ixEBFhLXdb",
  "key15": "43WNqwWHS4fPcdEK5wmk6FtHQvkW5VksZSiyP8PDx5PdGdQR9hHjCmDP5DMMTvU4V86qpUXM7WzQ3HfD9S1m7kuZ",
  "key16": "4o514AxB1gsMm1YtmR7LYckivF5APGqsTY6wEcKi1Eor34veAS8nyaixrD5k7B8wRW17yaATZcQshyMyTfNnJkmq",
  "key17": "4fjLaebz9rQpfb4WBzzHffwaRBk73r1g1nSwmfAfYsL8YUTmwrMCGduFC3DXHJbeHH2pgEy8zjxRvQHmS5EquAb1",
  "key18": "5ZyC42beNwN7fdMzhrVtmqWqikGitNGuHsdr7aSzrLkujGLKteHKd8AZ4U7HxsJGzpNsDTv5yWmj31kca5npENk8",
  "key19": "49mUHAkL78rHJ7jnjc3w3YwibDPjg5qbzti1eqWZsh7iQ5N4x2vx7u4BFHSJC91Xr1AdMo2LRgpKEeBPD1hBNmkF",
  "key20": "4gv2JZ4uKWxVoyigrsAEDkz6cYxca6MffkmNh56SCxN35P59mfwBvogV1Z1yN98d1HVAqoNm2wZKY2ScpFNMjCac",
  "key21": "5qVC4D6115bHegyBaGkEp7XAzYDJGToa8Wt2E6GCRd3ox9WqWgaGVX6pSVUP8hPGXxtt4g3xmzw1iVaZX2TrugD",
  "key22": "5vhPceFadYuMU3JRV6Yy2TosxgknvjgN47sdgKoDiYTSuVzwuDr1uGGrDRNxFE5hegJvEbVGBQiDzMYzpBcaZYyS",
  "key23": "2ftsknkssht6uaxjv17TbgRHiXC3wvj6nNkfp4dzzPS5T6BzF1ku9WSr9euj7PSLDawRp4T7PSSBZJCWyKMCsMuh",
  "key24": "2sPQ6v47u2exB6pBmmQF2rbk7c6KwDwswA5MmkhMTzNUyEW1MWEvQDv6a6SpQwKTJf5b9YrYiRHuKydk2y7Fgt1Y",
  "key25": "4LcsVjjrW51bQxdNeNfZuLJnMmyeZUUpKJsBaRQvAXU3qmYM4FRpByty31PD7dWqandmxXztnS5pqqjdttJPNpDM",
  "key26": "3ghTz6sbN5tFLnjPCZ6rNZvVNUN1XGzEDPF7dTaqJZKiHZAXuB8iD8sthvViEbRwtZintGufNpYQxNgoNtyj1q7",
  "key27": "2a46Wsks8z5XgtDZHxxNkLyBNsiABhv8LCmQuqT8VKE1imYqWH5NkQekEVVPiVE5ZHnv3d49v6HLejxHrsgeVNAs",
  "key28": "4z4WJYgS9KbJDrdzjzi91YzgRESxdNtgCm9j1f27WsqLjq1xbEy6ReSwidF73s86L5XRaWGizwurz7sRbUcS3pY",
  "key29": "42mMzXPquTvEXP5TsGFq7Yuocou9jU3haruXSiuf7GkQUfhSBB5oEaTAPFuCEEdU5WWVjnTkRxahE5GFjpekF5x9",
  "key30": "3GXf5qTvoP1XLKhMHd9ty26N7Q7AzFFkUQw2mkQA2usytPMbvshub4tM7smvQ46JnU9x7SGBMtJXZ837awYT4Y5r",
  "key31": "4mrx3Pni9vdqrRREfzWq1hbWTMG9zoxn4Ls4raFTzofvWesY6YMQ5Sq6JsoJaHbCJDznPTdo55vMNUtk8JmLSV9N",
  "key32": "3EHMwdyJBaGdr9P7GavoRSSeNLEkc9d4jez3t9CH2qSCcYF4THBNtHM6bLRiLnoCGAKqihycaFhTzxTS8nNnHpY3",
  "key33": "4c2EQPqwcuRy3cN64PtW6R2hWAkwXqp9Hwke9VD2nWsV3N6suGffXRcc3aAK635o2fvCqYBaRbCRLo5FzW1bVjQ5",
  "key34": "5B73pwAx4XeN9N9jFkNwJAKuVMa895N3r3ZBiV8eNdSGShTJVtDk3Srir8h1aSSoipTBdrQP9CpDcrLkJTyQMaUv",
  "key35": "2UVAMd3dYEhuH7y551Bx9i3G5CtcxiptWU1UKDrUaBYLC8cUocpDdKPj5MAv9h9rdw2ecMEpKvD9wMyukScVqNJd",
  "key36": "3bs7fh1vgsssoRYcdYnuEiPU8HyrHrKpt1mptwPypj1CSEKQPWDSXeEnHKfEzkdq9yfwgwjnKepPGgEWjN1pvKTW",
  "key37": "3pYE6f3VT6yCet6ZfyBiScDSN5DwpZyLLYsFjwhSWnhBQprNCEKr4Rq7mHA4NyW77ZEz59Ruj4SEfSrChRxPKEf",
  "key38": "3bxkrZFMvLXHsqohdaVt552JL1YHVtsKkCiBdDV5TmQJe3bx8YXdWFyEWtvquMKaQpVAB4NcoxpRPLPLvqkv19sC",
  "key39": "NosRBn7EuzFGSVusbwJQsiPNb1zveKt7ENA6Tk8rAxkkRoJaHFnCcdmo8XH9jmdyxjSNtqEi6g2bESqpPK85EfT",
  "key40": "4fTE18m8vMWazpBhiCtGkZvoQmkY5Xf2T4WwURCujU3Qrw3VLZXxfPn3xpVwdNKquZzPjmEnxXMJSjZVPyecbL2o",
  "key41": "2ZN1FBWfSkDL4w9QH694WSc4k665fU8ZTNaf2qf5LQAnnTuC6ZefobtxFzGgZDkDWMRCfbNijM5GhMwsvNjnyded"
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
