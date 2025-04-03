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
    "2orvvDzHqnx6EN2cUUM2HL42NiGBduxEeg4LLxpxFkfFZFF81gU5jtjBdW5vzPWAxj9LdQBjC7DnevSrYHMXFz1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ti69RE27VSsdjzyRbAVRYRkSepTxyx8RF7p2DuKCUfKNjRghy1ZF3ikUAsdG5zFCZ5CwAV9DV1YSPpgEyV6R826",
  "key1": "523TVm2yoi4QTtGvvA4U5R6avdp1PxC9itksdZPGPUxcQczh6H3hGjEGqitfCSBoLL6VfNHP3hK93Jei4VPFuuGT",
  "key2": "39RKg2Bjxc9A3vj7fqWTbVTzM9pQWPDi6yfBUU6UtejqQTiHmkqpaPp8wqgYLotRZstVifiLRzcrFkR7pPk72QnN",
  "key3": "4BKAqBcK6kurtUFfrjwKbEPu9h5no3JmqqERtf5a7Azwzq3pGAqXL6L7dL8My2kcXxVgQWgyxpzK3ik9KEiMAcQ3",
  "key4": "461vBwhoWFdbAMiyaM5xpyvtqSt51wf8vzv3eCqPcfWE9uD7UNa2xvutuPT7EF9TygYeHXSdZY5kYer3uCKXPmj9",
  "key5": "Mu8gX87H3ddcKeQj4jgK4hDBkZiebNjX8nGxozgUqBhH6WHVnErVup7yXaCkEYVT6o2WJiSHXmhGudzVHMD5bCq",
  "key6": "2RN1JwCzaRD6QZyZrGjAwfQba28PQAMaDMuxwJnZkSSvRbvkDPYyENs9XUQf3BPA1kym4Gz1VLTE4TvSMhKJk6Ts",
  "key7": "t7qiGGSHegc3jVkxQeD5nNfqNpM6hxw2sWei9ayxMwQe9M15gXWmpLrSb7Ax13Difg3LjxmeMw23CCzWrSAXEVw",
  "key8": "3H1vmDXsQpChkACX8x7g6xnRFKc1LQQw1pVBuLsvpxSNftoye3mzMavzKA5LRPqxDdz4QjeoSvhQeHz4ecziEDmP",
  "key9": "5oF6rzLqJpuQ7AjhCeBdeu9ZVdBJTMTxwVVYz2TMDzWMhnaTLoYaCfNTJ7WzPCPjh11QDS64z2CJ53QFFdJAYT55",
  "key10": "2QKDXnUN8AhwyGVVQQgXXcWcuyL1z7rJV8sxxwmmMYYCYBDTYGvs35ZekKWdpUkfLNT2QhyjcdXCVQxCYPpDe7Db",
  "key11": "2GVgRX9NCk78Vh3bVyW9q8cgpLU2zZdkVcJ17EmWXXk1XKBsKSfG9PDkqbXbSBGAWQtwYidWEn8BXaJ8L3m7Xkh4",
  "key12": "62zSWs6Fqhn569sEC1qQ3kXLFUnQfJUQ3SWKgDRoCVNwCG3Jw8G6wNqUjh9XrDbFTJMbQePcKkgrumhnGXZFUNEk",
  "key13": "3bMY6pXhi9XZ18y1BBCnP4VYpWQxGMRhnsvpUyRCfpxaTUXHd32MPmzUKT1PYXgAWBczzY6hGL2B7CLKUKXsjw4m",
  "key14": "3N11mWZwiwDtLA6BsxNLiPGwvHKY2DyDvN3aHjBiZvN686JAUPZrip4oDHDernEeghTS3tCCi72RBuRf81BRNdNp",
  "key15": "9ibKVa4bfGw5RNYAYD2hpubc1KE7nHCL7VRwmy4c6oDdjPM7Q65BWzEK8ugSVpFWwtk2m2oWTC7geYPc2NztqfY",
  "key16": "3sVx7H44G11Vsxbb7zzMSiy4wMjSXhFtcD4BEGazs4ftd9QUCp1zmhRMnijMrQsXNKzQrzB1uPEHjHBJzhHgMh1s",
  "key17": "4tADCs1kk3b6XvfJeuJ1T2s61UV6ekwWjwQShnYDH762u1fHERhEYiMazAcQxit7uZFYYVmfBZWLuNs4dyw7UsCm",
  "key18": "65vneLhpVa1qaK5zxmCSLRKL1Wv3hfWMjDvvyMjELhkiQFjkkVvNKRonFzkkJCfxZQ4BtwgWK96TxXxiUXSwSE5T",
  "key19": "2R7YNsH1dgzxDiF6nNyVoXL1GypUQpZYaTQDcAtf4YJHVwSKsnUGWXrQsxup2mPTDsp2SgXiuzqf6SvWUTTpZPgS",
  "key20": "3FroMTN9rmFGgWW58LGGohvr4pBoWTkX4p7bchGmSJPsE9kquGfZpvWBq7WcMGDmBaUY3CSr2CCXvcjjjgi8sjLY",
  "key21": "673po9qTKAFw9KiwVfhoaCWduUUpV5Z8THCa5r8jeXkDZ2yMXwbcUrrgESPzFptfUjGM7bko15mv7wwgmTNqY4B2",
  "key22": "4JsRtRMyHkYEZouor4aHhcsf8Ez8i35NvZtXeF9qq6o3rLsDMMm2tuFajb7RtXgALJF6dVNLbn6kXe7XS55SFPAA",
  "key23": "3pbqqbFEN9UbQw66byH6PeMtrK26GdQzm8as8BKcTurQJULwriUv14X1yBUh7uRBK7bdES8Vq39E8tGgp1Hrmprg",
  "key24": "4Jn67Bx5UyUvWns8aKY48qHw6GTRDFnKFwEh7g4JaKCNNgYMeHkimb64fpdSeo9yFir4d5FDtVjp7zFFPLNTnJxk",
  "key25": "5CRbrGX4Q454JpbrUbv2SQBS1SpBiBrGMzazGAusNmdV92GLpGnmYrF9wY6a2g2xAdXxivnv51hzCeBKQw2MSeKS",
  "key26": "2Mb28gcHbEeqBwLLS8cDRYsJ8jBzCt7Qz3s4GM69qPKb245vFsX8gXnrNCotEJt17JGMkDB35Ez5ZGnPuiDtiyag",
  "key27": "4XGqaoHNM9BhArQFu5Hhwi6U1maSys3Ytn3W4GoEQgJnUcG4emznBfyAtPcjKk7qCPnxPWY4gwEEucmdTz48ajGw",
  "key28": "5wfCXZgpBFUfs5B6B5LbzKFqKyKz4bYZTdahupHBFNkzvXo5JVCfEnJyQ7gyCNEx8CLTLkvzvr128EYWm9zvhjA",
  "key29": "5zR4MHX1g2AmxaLvVzDFQF6Se4GjkjT95vwcemjtdUscRarjcfH6y52ThpjZFWkWhj9PkhhsjS2bMrQ7RRe6Xgin",
  "key30": "5Rj3vF7qzADkbh5DVgNHVTUhyPMhnEdUomJTBrTtBL866K5pwDtZXc1G42HnH2SCEfAQ3t33XbHsUj3tuByvtuPL",
  "key31": "GJYcJp6yNum9Uj83ML9Nrxem7isMsbykT93icyQiskStK6QnzxHvXq4yE2DSn8hpACrDvxMaydWVnkRnH7XwJNk",
  "key32": "5uCoC3D12G6HThwEqQVHtYcTRLyVaB2QQD1ZDTBzW8PWWhFYKqWbTrBSmFY9eg853x7aH26prXtY3vmyLfQSZyLM",
  "key33": "4jyXHNeKsWnB37A7PdMhD3FV7MmTqppcxUVuaiWBpgH6qd2bA7HXQNuw8JEbt94ZN3GofVh2acdn3dMDNEumqZaz",
  "key34": "ucFi38RW3MQZigEbHE4DFeuAdDdPdyUaXELiFibPFbKKztfURLFWjoVrGAvXJFtjTs8U8bBE3KywGNqDWitY5M4",
  "key35": "XGZQBYkPcPbJ5YRs6TmRmZLBSyRPxojVmWZEMfHoSERpDChJ2AKBp5TF3zcJYppJxoQSJFFb69VhfFPATjyDsUt",
  "key36": "4hNmeB8J5f82HK1BG3UW1NBSepzZQySFt2UyUTWYe8oEDmGhgnDTFYT6gXC5eQbYwF7982Lboy7c3bt9vhVm8W9y",
  "key37": "3BtnCTLNAvNBFc1dKyhP1BueoZ3GMga6xCPFj7UPyaoTcXK2XAagtfDwq3zM5tX2DRFJ6EgpKTrFSMGpggFgjAud",
  "key38": "4XDDCuNTeQnfDHYUHVZseLHhXpGVnJ16wHjyLnqxwGhg8huJtK2Fupg6dE7tGwtwTdmkBdFYLdusY4LgvTKf2p3P",
  "key39": "38TWWkSgVwPT5ZSMdf4AVMex1HnBNYakVjvBGsZGi2kjVq3DB17skQoyryQLiP4sFUDHwY9yeFFn5h5kUb3AqVUP",
  "key40": "3g6KxjAxwh4LmUHJa2XG8yJDCUhwpCyUA4DqwuYP3X1aSVCkw1KnuiEVyNwCNU3tiN5stZkvwmyxCSrwUZXju2zK",
  "key41": "5kEi4jh82fRABXnNiyNbBCZ6y6esoLNJQHMtS2p6c1bjB2UGEWHtGDBupiAqTtyXucPk25zSqEgXhukkPkDJqLnE"
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
