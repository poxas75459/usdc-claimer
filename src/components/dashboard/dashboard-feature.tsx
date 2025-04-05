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
    "LJ2B8mXy3Nm2pUwnqqtXMgqF2U28j2CQKKeUxpJN6VW7cLP9DZKzc6p2mQU8XbyMamzfqXNiScdagZv2J8YSpAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6V2uL3Q7DoL43eYG58vLXR2LMcsCBKCGfhC2NSjR6ij2gydpgY6GQTEjrcrhd15Hf3izXUvWUiEzsdL2334tMJ4",
  "key1": "5EEcPcahKqhAUAm3TQySuu2Vpr4USoSfNk21ETGore6a2ZrDCE3EHtCAx4yLD1zWRGBhZR35wCpw5pZ8cQDgJMTA",
  "key2": "2Nbi8grdWQe1TikAohN35RWypsz5oAKWLmD4Ey5dTEt8HEwrvmymmrcdkAnQ4mKQTcFiBNY3GtBZoCBopjagC64o",
  "key3": "2kBPbhfxZHdLYaDXWKx4f6Xegmy6pJevPe7zEb3GPELZ4qc3hHohT76LDb3RwZwwNU7Uu2YroQ4NcUUSKi85dGz",
  "key4": "51z3gDP6zbgYmvRPxhcrYg4nL1KzvXBhZAAMpQCZkYAtYkEQvSCcZeHUzq89qznKUAsZyVjuUimFTvZm7ajeDk4i",
  "key5": "1fogK2nQYLqs4nt6SqDre9kfnP3ZwBETXzVsM4EVjsYUg1BhFt5mdEi2naVecAXuxShkTHjVxoXbnsdWi1uevHU",
  "key6": "2yx7W71zLByz2b6xMuAfEPDcjwb3kXnYk6FwZD7mvL9mYuz53xuC9C8bCwLmETVV3mdCMTQpAsTTMsLM2YL7Nrxa",
  "key7": "ZJ2DyW3dhpfNGWLUHgp9hy7SHVhKHri8e62aDNKwNtBSsA7354xL1kvAP6zGgNgBHNAFXpM3oCqtUBtbmFzGj6B",
  "key8": "4CHQ6L4JsGuMHL7T2CYfM4co4EcRd67fHdxyqa6b2yvRriJYBKFxPFuMHLBqRKGr1HogCeBLcik81KFt8SKWjXh2",
  "key9": "27PXUo9pK6PTgFiUMdd1DAbPCYhwbTpiJSEKEy96E4KNeNFCBRLn9Gm5HLkJEah9ertYnW2o4SRpDzbUDYiuEPcs",
  "key10": "4WVmzeoR9n3KmtVUxs5WEfo24ycEJaGjVytf5JYSMwMBrETzT9v4QpWiJHNBL7C51a3bsai86aT2Nh2kf5wh5giB",
  "key11": "2KepGigaSoo3BgJ8t6koSYK5HH7DAc5pUqKBmQH6cw48S33HabFZoKz5jNqkFU4FAqHhH352EzmU6nrG7iS6Wj1J",
  "key12": "5CdaLpH7AzsXL5B59pq49rUgU4ge652k1UPqVoZCkMZBPMwxuiixj4QKh76CbFQLE7m3J4BHRgesKJ8it9oSMAqL",
  "key13": "2Dn2MLWLqsjCUZuPofge9d6svrket8ghQUKUfbHurLinCQjuck62xCmVFaexHyHXTjkM2qGvE1D6k8eMmhqBv5GS",
  "key14": "wAq5BDo33aMjTYQAqAqMaZ4VfbX7dysUTQABUN4fbcxi7QPEFarFgh9Y6qEhU6Q8umaVR6xqjXPNme4jKYENK58",
  "key15": "5Pk4QM5eN2wuw9FxLBui1LJquC1fZ2A2CmkycWKbN7swyDpxZostXfVwassHvwSvdYotKghiEJevg1WAphexsK6m",
  "key16": "5ARU3fMRvbhJnSmE4K5xSV73fBPZ1KC3ccoM3jEfGWqTx399jyHhUa7NMrD2qtuKczEbogzf9qvkh9hchAARejTU",
  "key17": "3eQhHvNZbQmVdjhZ1FaKze61L98Qf9gt6TikyM7k9S7R3h6pd9HtVrWNyFPSVhG9xifbBsG21hCEQWuXavu22wvG",
  "key18": "5ChKE27bVp1yFeV5PaUsYANCeexEBDY34K4wuswj74gjQmk77dsxtTWYD5U87ciUUc38uEacyWb4aivgdb7u8dbC",
  "key19": "3cSXUFe1nm3bcKaRFGbpZPSMjHJxPWxUtMs8GYT7jKUtRRszUkKkbLAWvTN4RaYCaXf2gSVhEP7qpcGHvnDg9FRP",
  "key20": "3MSDXXhnLGU4HCni7JGarMmfUahC5foTzv7qSGrcAXTXoTKBVwNdgvqGM3XDkJUH8xyNamtWUHRdjij2fvK15gE4",
  "key21": "2iB1wReVPdjQi24F9sGiypsLhRJRzguCq2VQR2mnG2dMB4m38yhA5iJ2FKAJJvSFBEa53QM6f5SUeJhrc1FN3Evq",
  "key22": "3kteRP7zsKZNv1DncKTP5uvQoZB5aG7aDd1eyZL8CJDm6JHpZy7cFxgyhtDuj8UXEx7ZGGK1SmP4tvn6hk95LFmL",
  "key23": "46c3EhQZ5G2Ve7okHhhSHLBdveqcXS3HEYpgepUmvNWN1gycbaCuiHNzXRDhoo9sE76QKtXqfh67w9aLZz35ZCrA",
  "key24": "2BPBMoe9k4UsXFvoqkoU1cDBsSyk3WUGt3LgbbPkAF4EwPJ3wU1ufmKpjHVXtmWaudZ5R9Thtr2wBtecShyFgZJq",
  "key25": "JA6AgttcnkTBuLNv6rMrSLzQqVVx37Jrt191ASMc8ardv3oLsJL92RQzJX88og997Yxno8Fa2zBKSmKYZqHkmbG",
  "key26": "44Chtad7H4Y9C6La5BYc4BcbxT1EpD8mvtx7Fx5GNxSrS3S8TNoardbiJ2fub949RboWv5oFAgQwKKAFrDg9bwmF",
  "key27": "3HGf2MEB5SL847x24UJ7YbocLvtrqctNrjozQH8e1TGmapQ1bcwGL39nTUBibLGnYszB29yXz3vrKzGnRF9c9FS9",
  "key28": "AgvC9EzBJLFcfgLHxuUwAXYbQC92ze7VroY5d3nsriXRmDn4hdC4vQP3hnb1fBjUU1Q7bmuZVhcQsL2FJxDdopR",
  "key29": "23dELH1TUmX8e7AU1ZyY4mrCvnCoD7zwgQSmxnqk9aCKuxpCj3mcb9LuqnxEZJJJfM7FZNEdSV18HrpzYy3j858K",
  "key30": "3GqCq7tzyoprGqWMkjxysuaK1sNJ4QUtsDeS1AQEqFQvLQGyXKu8gkFPg9h89EhaoUnAVL1Z8bs5cE23Yg3C4FYZ",
  "key31": "47wsMHajpLXXUt7GU4kTq5NciqjHaMFE5K9bMGRv2myTz1KhJk1o3udGFu4spVVE3mfhzWgyTZYqjU8JRZbaX2ez",
  "key32": "4Dt3MZu2WHeeunbsqLrHjzrmUaS4Hxgc997usWhv7PKqXr1mWsc3JFtDbP6wfzzDw7CkTX7RQ3XbXQ5CUzdmiCrq",
  "key33": "2yR7ta29PKTeQT1RvuiPmDEzfnoo8eBFvSB8mXZQKLXYQ3vNcyjKFLWZBqyG53h8g6H5uTsoy3Bzi626cq1jVJzR",
  "key34": "4ocU9zJARAEg17p4HbrxDPMnsnhAgziDpjccLMzhoZV4MVQRAjyBpqpdqtB6mTXR2rjyNF2DkuaWEniYGwfZQeg3",
  "key35": "2TV86o4z3NYRaXknjrx8z3CB517azrHBAVF8B1qhcpde3ptzmYN1cc384cGwqNTRKnP5KZ2NKwbBaAdMh7eRuqcj",
  "key36": "5X4VeyjYrsLZCbLCHjcQu6N64GTHS5CYWJQK9N9qW93wLN7AyuBRSyPhZA5nChoBaHACkvyzvu3WQAhTj4Th97UD",
  "key37": "2e5WpFgZzRMKciG72EAWM52MjtapsuTWjTuGFnn1jbnX3kYK5oxBBnuqHt6VwMXzaLFHa3He2ejQDwFtmC9CTBAK",
  "key38": "2QVoyfM34o1aGB5k6FBFG7xyMCwxCUcfkfr3twqeSkeEoF22PjbceSwGgutNijNvJDo2ZvHk43rSKT4rqF7b9GJY",
  "key39": "3D7mF3AkCMGL9UHA6bsa3TS2b4qLSUU88zQToVzDYqN5hE2p7JeNLjQMaZeZ8SzpG6ooWbbFS71wqb8erMJtAKg6",
  "key40": "3ZT1oGLM1Eui8kSqTWNbKjz1hGJRUV6pDEEf3weDWsGS4M9r5gEZzTHQ6b6QNWauiZjZ2WcyXWzGa9iBjcJxJrLu",
  "key41": "5hAZ4hMjLYt4FqTykc8QKn4vCMtjywn9hMmoV3kzpi945fApsb236KCJzfgmVhsXUL2VkEDrhN9pXLcDQ4MLujEe",
  "key42": "2hvpPHBbgr8hq2STjwmDH2v8rtoZdi6VVjTzERSEnawuNY3YX8YXvAB4exQ6qAVD7XEAhZpN4bH7VFgD2eLYXGJU",
  "key43": "55YqPaj1tPnxUnA1Sv53piAsaeX95rc8Bt7eVvdoLqFiy4qbowjTV3kFru2VNHQM4XkLennPA5A5jZB8KeN2pUEG",
  "key44": "4M7gQrvsTALdHKbd6HGxmoG5qvmySa19mwnaLqxMr89cAPCjZ1Wtb7qW3fjSUEbiuLr3bFtBh2qsnTz334zfuV4b",
  "key45": "4sSRhrY4ZxWQGdMERVupZKeDSoXy18gwm9st2pVSBY3KebJEoebeH6nPzK6xgaMWEE653SULggMdoaSM1fqjoLRU",
  "key46": "5y2Vxf8KFF4oRWGhzzLLwT2GhHY1KbVguUX2UYCNjBFnUFX9mqE2CXbXdvCveBo7UxJKrpeCmRgYGdgfThLaUWFt",
  "key47": "2o7tdHgNsSDUmTk9gftCQCmtHrz7JsAfUvdCqRQZekWkuAGkT9UQNM6bZ8qGj9Dkc7C4qREpei6B1KgLsdHZaLhp",
  "key48": "3QjWxUNnZ5quc3VS2nVVWaiVwFQfkKjdMzNmuWEXqGELnerCCSEXYFXWm8QqESSwNjUPdh81xmP8kDqPNWo1EaB7",
  "key49": "3aiEFQDyCjkHXTYMx1v3bjvrerCECZ3rtd6ry8uyG2J3vQ5cxbdQBt73FXjJW4ucP59CxxZsWKKQKZp5Cm26TU3X"
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
