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
    "3HBRLduUzzL5DRUj9MjLcYF2M2fwWsjTrccG8f2TbiPwoVeLgxi5HG3yuLyDbHaXhp8aYvn9aKYNpLMhp4dQVMRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4XdpKayPKAE7quCEMn2WdHnn3tHM1rNsARfoDQBkeLEGPgo11XniLLJ9Efs8ahJsyatMDG9XMrj6ZN9Ez4tN3X",
  "key1": "5LjyvuwZPeUNcrWnJmD19hqzbNhuETg1BvbBfPoqZhvXbtFdePCWtu9HJQdrpCuoPs1EEYvof53H77kUuJwcb94W",
  "key2": "kXM4cYyouffb2y7GJ5hbEQAxxMt7AT2WSBZpwq8q1T3zmoDV4LXoVXu5vNL8GqCJ89M2A2EES1H8kTY8WE1qDaB",
  "key3": "4boZDCogAEagscpEVhZDGeLzFwvTnJdvDKKcq3WEK6i78NxiMSXF9UNsubVX8qt5QVBRGQhUKB5oiRDoHNzyksys",
  "key4": "yaA7K3js998AAomafUphGaTxdHpvJ5Q45MbUN4dTCoCPGSGmsw7gPHsBSY279uJsDkCPkdoM45UMfJTUxsEZ3u6",
  "key5": "62NmPJfuE2WkYjyimm5trXEarePUJMweh5Zegn3UgCNP4TQmE3MCok621RpQM4uYtB1dVHkYo2jvBRNUty4FSgzr",
  "key6": "2NatcW4zrjkBmKYVAZEKJH1vgBrewpGzEFgz8T2cJmhc1JgJx9RwJvMT74xSWYLSk8b7m22JotFWv2YYrX9TH6ZF",
  "key7": "2jCz89dna5bT1nLpStYVhe1DN9JcCvVX3TRQGJp8iXHtJoWjeHazZnijw8u7XCf7HWNLFXXWLu3Aeas6jKMsHNp7",
  "key8": "4PLcJ97hp2PiNFXP8C2658ng6dcKZhMaNCAWVxDddGLbUtWqK2Ka7jveSKK1tb8BmkARXLpJ5WXj6YYRNgCajfUV",
  "key9": "4tDdLYYJUse3Df94j4apEnsdJU5Q7LxutnqFNRbTu6v158RePo9yD565SqBJDefZ1yiVgaMKsTakAGbyLdWQib6Q",
  "key10": "4drhB555HfJHEZDk7zQh4qWhLHYCSS2G8mGWW4R3EE96TTvrs5v3da3KcdqzCW6szWnaEeCccrJfQs5dMYgnGndw",
  "key11": "jaj6P1YGqbUPpuyhkJ9BBcvu5qqSbybKC8qgau6soFL83zGpPCooLXDubBjbQ5e2PFvkTnNtpvDT1MCC3tk1vT7",
  "key12": "1UHEGYv4xtgJysywYb1dLox9ypXRNtxbvnay2MAxmRuWhKASDbPnhfaUA46aqqZZPoT5Wcpr7D1ArVQ8YhNwXzf",
  "key13": "NbgogeNe4Jxx8cBeEqxBxGMB2CgjmrhXAz48Sb8Kde95tRtR8x4RWXvC4LWDcNuPq3nF82uaaBSX5XewTU9qotF",
  "key14": "mMNua28UyDL535xdBfKrR5Lz9UcPkFcGUDekSquyRCARhKvisVzKdLaHyCW9jKB5rnUUqf3xiQ8C5fBXsTmAr9d",
  "key15": "hhmu6a4JEW8VAkHKiP3SAGTAH621B6ECTWLs222SgzWi2UKcTkyKxJZf5gBhhtkPoujTWMetEJFuTedAbGKCBNF",
  "key16": "3uHBp3EPhrXFpKrBd6J1tULRmwDZCq6o1YzmCp3n4nw4tjHSsPE4kQMbhmv9WADrTs6SAammPgBrWZJ2pLjoVe3c",
  "key17": "5Pr96YUnjJUPUXJWGPGD3TYTF5dSRTKutW7ff4uqkceKcr8ubB76t9zJEepwnhd4hdm5MzEGZzd6wEkVrNBT5y5W",
  "key18": "4P4Ee3BLTw18G1YDSoydYJ2Vbwd3ZENHk33KsXZxDjVNzFk6Z8TeCuE7wdthXbg9Z8XmkusKACJ2DLTB77Hu9zLZ",
  "key19": "2j1mLhgdbJSgZiMSgjdKWQ8xLA1j4SEhgPkNsUotx8bBRzQYCkdnt8M6Xg5NjYoev3zW5dvr96hRyuJF3S7ACy41",
  "key20": "5MPKCyQWtzGtUCy3G1H4Lqf7ukXtFYVSUNbUhMpanffppUQkK8eeaq7jUVRBVd2L69gkyKCsCkDqyTjdwv3CLGrS",
  "key21": "5SkWxtXYZtQ84seL6p9rLQZxUfectxtWT3TUibHHrJApGki23HSefEr1A95sxSyfna5ZR2yp3X4Jj9hinZ8A421o",
  "key22": "5iEyy9K5vZicEq8pjbBzkZaZ7NWxe3or5zuSVNSxGgE7ZRBckyYhqJT9aax8WaBqQtjTQMhbMaJhhbDd1n4BeUkG",
  "key23": "2VD1sXfLAymsUyB8qDzLWQwRfDxon1oHt6k9MazUbyPUcGQmKo1xCaQUByXP5dMay1N9DHficanAaAic6nEFTTQB",
  "key24": "451SZbdXTsBHfAhpL6cuwAYHoERDppdPp1JepHLUqV5QDBgtGczGMq14rK13S5BYsq2sHEf2fvp9wZmARjd1nroS",
  "key25": "M6NcB2f1vmzNCwhubLiLYJyYtHBf1KjfuCuE3iMMa9qw3ekjW7N4LyzbzeNJrpEoEV9BwBZrmf8SEKR4VfvoDim",
  "key26": "5hg8L5krFqswGv27DrgHCZgAHBxyZ8mW9Pt2y1tdk4ij6ufGev4WwmSEjd2AtzgxCBnNCQ8NbcKGF7VnJMtTMWJC",
  "key27": "2Eiod3knq8BnbgkSY2eyQDXJeSsR2tavyk5XUaQoFEBwAc2CKz3DXpJhaZX9knwdEq9nZNrydRq81EvkwPLZLs4J",
  "key28": "2vzTXkM5WE9FU4EnzrZyDCcdEanMGpcAmkt4GdPkzhheKpiAWmc4CbLSFDX8v4mEeSximzRsiGpF4cG2q7FZq4xV",
  "key29": "4DavzaA7Y9dnbmDzC1P3svBcLcaS4RAHE5Xqm8U8DQLDbAY49QtDb9Co1hFpduFeEuLSc59TqNg2yRPazP648BB3",
  "key30": "4s7nxP6GebBZDT5DY9ar2T6ULhfrW9cqEQd6z59BuWAFqRb3wFGzzwi7b776kRebG1L39XAGfaEtg2LZ8Dsg6fyF",
  "key31": "3vFXVYw1uvTTeYB9QSe9xMy9wXMPZ6aqJ1marKd7mKCHxNbLr5FsdSvyaQomiU63fapQtQMVx38rA5hpF219uDmB",
  "key32": "2y5xhSD9c2K6AnLTiDLVYWCvY8Lywu9vZAY1BnMGRJuYJ1qcEFH8BZBDNME5qVbovrya6q63uCFBGkqmSXxg6nxE",
  "key33": "5bsQmL6FPidsDvqS63gVMwxzkGxsV9fmN7R1nLe3725AK414nWwezApGhcuYaxdarDjBbRbwJBV4DahzMgiLmXeE",
  "key34": "2VzCbXaJYb9sJUHmKPLEvttoHmdkyHeDMa1GRn7cgcVkYUnEXrFJk7eK48w1b1TMgfyJ9rXyX1hWaensxovNfS3M",
  "key35": "35fD9MWArd6oNyyAHYuxReu3N26t2KDxvfADz3HZcKTPgasvD2wD2tg86pUMUVyBKkwJVHASU2yASi1iidCVVC86",
  "key36": "t1CwBNKnGmQYHiT2wJPk6V59oYLsEphnPAHXxqAV1KizE7RetfqqNvYgftHHcTT3XNC1tdMCU2e2UwBXD9Je4i4",
  "key37": "2JS7KRUETH874M5K2ozJQzPWDxk3JZLtaLn42v9FNZpc7CAvzbzky4weFwNWzkDPUN2Bip9SuDP69CMyB6dmi9td",
  "key38": "3496A15XkeVMzGto6viop5Ee5uLWagG8WwBTU4nKWEYj7PQKFEDJrJXdR5k7BVNB8oU6gjmcFTbeq9dpSamKYsu5",
  "key39": "cXgLcufNZvtmwiefUrLphWoczozidQd7a1BFmrXASrNwD2bXyHgxXGWkimWSSMSFJUY7Ptw4KadmcUZJFVB96P4",
  "key40": "2tvGEaFUsBo1DPyZyg3Qv9jqZ4e9bMjHGKkowyg82Y9a6ZFj5sXVfPGhR8SKbeZTTPRh4ZAPHSeLvh9TZaSeND6V",
  "key41": "53tr6a5fkJ7efZvfjcodcJSezHNkQyaxGeZcveRPkxutDCSJASw2xkR3KaEFx7XJvKkpXbGNx8MZ3ip8Qs1ikyq1",
  "key42": "3cR4KandyzgWrkYMTMZ48N3EavQNhe29sZdkwDJvgaSkUQ1BzSSgL224BULVhvfv7pvz3LsPP6sp9hycD4exz6qk",
  "key43": "ghTiv4Gu2AjZEwkaRw8BBCGmhJCMUAwY8fh1nPxkgvdWPrF26iA7vKzm2oXyNzFchCxGz7NY4pRmGfJciS9L9aL"
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
