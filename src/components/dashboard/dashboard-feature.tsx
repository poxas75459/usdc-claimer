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
    "3aGip99JixrRpc6dRc1uhULUKmDZteXeg5rQpbbKX4ErL4tcEZL3Rfx9tZgndrYi4gBwqsDe9uaiYXmoB8GSndyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JUP7AeVa12sh73zyy75Y8AxPGUXg6Zks1sg8nj8EMUsbFkM9rMk68tQ7vAQDqS72XVE3b5ZHu3Mqe1GpbdurDY",
  "key1": "2fn9MQ6q1KhGpcjbM2sLrvASXFpt5aHLJnEGxPgFhq94egy6Co7BAnuCmhAXETMTRCiFAmciC1bkxJrEXj1Y2UaJ",
  "key2": "38A8T2ho6BdArHgwK9WweT3RD1nKoL9Avok92HepbmGeMZCtXdq7PBweAhBVsAmW46nFyS1P2EYPry8ceJ6nd6dX",
  "key3": "5rAFAa2tG4DVsLmLAcY4jtB4eNEkL8Ja7hgUXbJC7xR48dSG4z48S5XHH2XNmPZYPXG9gwE5qqCdEw2nExbgvC7X",
  "key4": "WzHKXEDZ3Ri5mDq3jbxXfBcpUsyzwPe9JJ7f16H1L9U1yRPvrBJeWEN4mkzneJXGbcsiwvjhE1xCa3mVbpVwgDC",
  "key5": "3f9VwmrvpVKLp4iwK9fhDrR23nLcLrCmWxSJipopAeqXgNfJfsqMXCxXYCPAXs5vVghvkFPjTWpC39APEu6SrfyV",
  "key6": "3QMPhrvcCvcXdPb6L9iLRcuHCyXfo4H9fJ3PzRb7a6K4ic8GQsCDZKe4eLdVCyuzX1RnEhMoCcdGU8k12WWakdyB",
  "key7": "5B2dSQ6TM1H8U9aWALVeSuFC4dUYumncfNVtWnRK4yv2PtXXX1yB4Hr7SquoWt1g5szqAr1NQpQQkCGEbTekHpXC",
  "key8": "25Wk1p1Z5UxhFf6ddKibhA92Kamu1K6xYkUfketk79JY78Q4UvkRPxG2eEv7TjLZfJjW5PZpHqJHTZAGM6HBVTsd",
  "key9": "5MsQxqE5GnqiUHABvaf5rpWgqwW1SHBwQ4FsbB4Zekhphfw8Znu64X3n34NchrNYr7cUEvZNtHZ5BX8VoaniQdaB",
  "key10": "YZSzvz7WjdvjtRehQpDi71mz7etSB9wS3YFc1dbgA4pySzRiCLN7YLdRUSRtcsReEgE2Pn8WW4se2m6ybEjfLxL",
  "key11": "kJu1pZyPvYFpEmsy8wxZvNaqGKjLMrtGaD9Afm3xwdNciq21b53XFrCRE34t2j8EFHv47Y8Da21yrBmkvuVus6i",
  "key12": "5hhvyGk1TLQFAoWASpN7Hg2YvPDXJGLqdH9BkrLiiUWjgndj2sf5Ny5cvgrYzhVNEnmgt9Bjfgtaf4mgLzd7CDPp",
  "key13": "3Gw21sCxgHYSbMxfHgxNYvjHD28edNMio8qLPZUtEzSfRWBVafmxzbbsMKPmukM4begofVWUzije9RRHL1aGm9KA",
  "key14": "NDkgB3qnKsE3y6deEdwx1p2BxP5Nd3jaaNGc4nSfYzMf3PDwpdZW51TydnA77G9G14HaqrgVBtDcLPZRyxBMCa3",
  "key15": "mbTnZNuJ7KN9Ckmx877rYXiMqCqw2z2JoN48kftx13kfyjnEwBMhi4QggCsooZmZ1WPN9xHiXRTRE8LVxt5HNxk",
  "key16": "4p64dLoxX2oJKvesf4cbcHbht6dAjZ2y5PZiNxii91QvBee6U1HLXD2dG8SvwRsmx7YStwUkWscAnphpCwQUZcTa",
  "key17": "4L7YpSgZQf27rsMrMxH9jqF1Rj2V4y9QfajPxQV8F2EiPVPf8SwM7rc2DoFwa5SDEegaWo9RB3x99Q6sroGYGf3J",
  "key18": "2SuYyTw45hGvsiyd9S4ECMmRvuUNAGNgGvML3BapdpsFgwwr9wMW8JpuwVLfhErrfrXhV8UyZ3jpjtXzNwjJEGY9",
  "key19": "48cYkVarmSpQPuUcPzUPweY8YEyTjSXUpTHsLnhfCHFqK66dbKJvNLUb7fWrYaqzcjmtxxL6DZJ8oukuGhgCCEDm",
  "key20": "dvY5si8kSzUJVbWrC3DQf5ifPitULtnCehP8aVPCjbLDv9xLiPNgRLiW7WaaiR78t2QgPaQAgyQFjTw7wsStSJ5",
  "key21": "3NtKGSxjvtbq3fJqbnsDQKDvKJg3e3QCBDn4anstTmG3pkMBbucfajGcmYuS7h4zomKiTzexaHatNi9GNbzZDR5f",
  "key22": "2kFkWBcGepCwU1ggXJqws8MDPLFmD1pfqNuRmo5V8H1ztk9QgqtcmkTunjQjUsMVWnZtikCqR6Xtd1i3NqT3uzQK",
  "key23": "4vRniEtL6fM9FvWiicwiFVzBF755ifebSRFiYE3sAQdiqnnDqt7NjjvoTAwjPttokwPkG7Rdh3v5XQQgs8KNdBXV",
  "key24": "2n6g1hTSdty2mteRu91LNzuXUFLQwvuFnBsAHYmfEAWUnQqa1VnjQKTKrNn2wKtnGZTSnnksSsN4a7BXBDbP5ArK",
  "key25": "3ZaUjPxAGADd69MD6GP79Z5DUq8Bx2HQgGdiKErTFN4LpbtkeWqnQgqJZdJ2hNUvbHigCvMGfdjBgVa9UdMwNGyW",
  "key26": "4AuvFS2AZSTMK8LBQHjYMhXMAk9wumSeST3EqWjAsVS6F9cbQSHLibALWMDA6dfdXmNmehrYRC4omo5VemhbiYLv",
  "key27": "2ipa1jo6ddb4Q8Se2E7PHTdzkBTHxcDxYqNBh4XvAC2vNifH5u7jNGiL7csNUVrdVHnrRpx7WFmJgBZZ5eLpeS5y",
  "key28": "498gQBEHcD9HdmH9YUBRj3URY56KkrUhKstVxE5UGRwZ4PSMDXRhFitb8pSekinunfPLLcikM5ZxPCJC9pn1V9cD",
  "key29": "4B2r46UNK54VyoVzm6bev5tqsGjfpycbXpfLkf7GD963Mc8L7F9Mv717oKdbQq9WuJ7to3WaceFbjSYStXVmBMV3",
  "key30": "5m4VzorsNeu5B4tGJThfgXP4AaRcxHgEnY5boa4wab9GWnVtPVssnL3cRP9o9hargoqBA3TyYiD4niyeSXek71R3",
  "key31": "2bnVGHwpGmXC9zPxcQvspGqb3v9FdZaX9rqWJkawyW913zJhZjHSLXV72dzJKNnBqPj1mvZ1MKwvAj1mgyFsid7Q",
  "key32": "57XkWpzAbe11B7noDY9xbmWb3Nte9jezgeZ193ZWS4ccRfH3xGGAgJYg7xeLeWg3X9qdJjGAaY4XGL8HGTv6jkcb",
  "key33": "4zq1prFFMVcfKksRa8yD3zUCmRMpRqaWZC7pX4jWDfKCWEBTeniuah6hDQk16Y5qUTPeG3ZujG2caXt9qhJfzFuk",
  "key34": "3Ey89x13pBehMDvQgd1PRGb7X3aE5PcLiKoR7Aj6nM2Ryr537hku4EcDv53PUe5iMCJm137s6dZgNziVGctA1mSP",
  "key35": "2SMASABNbYRGyAV6uc6UtW7KF9LnbZqS4kvm8mE5MTTcbHSndBtbc5sAGFKoTguqZmsgXEEFy4GPpjYHPN7s4umd",
  "key36": "nTHfKTevwjTfmXen71co82XB4wkpfEEGaLqkrgAdRJuL7hh66RyUb8uw27jRmGrbniizj1EZPjsLLYWznisebej",
  "key37": "579caYFBA92K6fGPNJPU4o6qatHLizZqJTLgcpNA1LXtbE1Sm5JVZukTpRp9UizPwxnmkYx3zrSbQs9EounZosm8",
  "key38": "3TxBavPbTkrLPiVCUuVDrNa9hTS48NVg2BuSAwaofmxKMFF6WztvPCmTUsgeftGb7z2UAW9pTgyMM9up1KNu5Eq8",
  "key39": "3YjBWcUZy6cbLTcrKd14smSodV55cJLhCrijqJGVpmXPhB7VcyFcbxstkWxw4MyqDDfhW2oUMt8R1GhG4cwVigAV",
  "key40": "1Nz1HLA6hvk7CueeC1Sgwj7uKg8xFtpucSAUNUjHT6nN1YudLTrNXTWkXwsSVnt85Hb8nWjiZ6NB3CzsARLLBV",
  "key41": "5XrQoJZhUUUAcSCxzWV3ktnQMUr8ubERG9fvoCpqrMtDSqCSqLxGTKz3L7QsWua2ZyMvsQQKJrpDNHhf1ndHvkTJ",
  "key42": "AJTePqAH4WPgdHvfUgA7CGgn2W56nn5rYAEk4b55jyi2qa1Ux98L1WrExNfC8gMD5AMBC4pAccqtkFtNftaxh9J",
  "key43": "3neDNn9zsiR2vTgnt36Ng8ibK6tmMuvHYj9gNhzk3w4YrGyWrhd6bkMsDCLiP2sxsgeY83fNLHxVDbYVPgPSbwFK",
  "key44": "4rf9L5mC5hgAj4YisVS78gHTSVSpSKGeuZRb7YWGQsGnqYD7bh9nY1rkXZCpFDnwq7ytP9aT925i29vb9PfyMcB6",
  "key45": "27oxufF18SgUumHgA9xed9JBDQDJEepj5hhhuQMfRzNYkVFFPTqE4YhHtEH5v73gNivxGm1Zr2uvADvUeVwwyn3P",
  "key46": "2ywqAE71S9y38d3QNYRj2rrcoCYwfZi9KPzN4CsD8scpXwTjHEjDg6QuNgPpvV4wYS5mSbPYHb97UNzjAPQN5X6j",
  "key47": "2Xb7EpFxVjdwFEVT3ViNo8Zmbgn4mZoXn9Pe3TjDuF3rnFUnQDxudBUnp5reE9pNFWuLVvszNF8c5v2yNwsDhCN3",
  "key48": "5mSX9rSPCPTHdk845wA5VL1HkrvjakVA5C9ApdiAggTHtQ4XDYET4rJ5Umj9KveVhaozHwcFj7TDXUtsX9eeKP2v",
  "key49": "6wWzkcBpU1xMLjAo3KJFKJJq9HXVWbsctQ8nCJ6LuYFWQLWbixcz7L8sPDaBHXLNgZo6oNKMGc95MRJBVgYxhev"
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
