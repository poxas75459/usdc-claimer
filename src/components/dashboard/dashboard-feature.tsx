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
    "NvY9XSnMWKpUL2cZ294jyVpwLUoRVPLSqRYZSBTUWsvN1ZdjGQXY7sbjMg3N5ieXiUUnnkhX6N1KeWQNMqZecdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkGXuFN6KhDLuxqPfixTgwFyZwWFjHZWNp4BLzVjaUmzssL6BffLcbxappRekUqBuWDDgoFhN8R3982Wipnbow6",
  "key1": "vi21TzuMFEkTQ4kMfV791vFTTRwDQh9Q4oKUCUjcoAGRJZpmiiFTVzhQs9CWcj3MZYEeZ6ePiekxb6KFnPj9iod",
  "key2": "5Kd9tyPW2NwuLwH1EUMgbyWn1nzoAfoJFr2xHHa83KvKq6WB51Qe9GwhqdRZwaRyruf2oQstfBCGUVCf4Zj2P47m",
  "key3": "2XjXMkbvLZzD8QDSETWzQftKGrch8QKq3r16JiGeW44QiELJYFAqsdBWWLpVrn8XgZELpbxZbn8yKL2waCqmCSdD",
  "key4": "4DoQoNpns2sWLhBopzJb5M3fkTJq7psLLL2jZhhTboeDrSWsXcwZqxF5sxHfof9Xm2kg13wX81BCVChiVzPoj3ff",
  "key5": "5xhioA9R6apyDF9WGJJQXRcauxh1xQUM3fR22prZVLdh3ypMsnzyHachDYeHS2jFYHmeihu2dQrM5G3fNg6GCxtf",
  "key6": "MwReF4b5Nix4xB6SaDSeWpFRuNTGDBiiQunbX8K5F8969QHF1mpAxBdDH2n4aLN9UU8zK2jimA7RdgTbaRYirbt",
  "key7": "667n2VpY6AKJwvRPSd5KZyjJ8VEuhUbamjS1Cok9348rUk9jgUn4exL4a23zKyqJe8pfSU5nPCWmdg8Gcmh3a769",
  "key8": "29CwMbFKYH5ZEaMkeDXzfuuP5CWzWUZ9GGSuQvePk4MSSCwuHWNFfT4QECxCQamtzmK8n9n2Qn4g78sKt6b2Yhz2",
  "key9": "2zkDHdDSH1ZPiCqwqYUBYDxtHoMjhcriX2sK7vgvPgFgc56BPwepPTjBiwPxRgBNrTEnqvCdqE9d2dR4XDP9n7Rp",
  "key10": "2HmHcfzLnBHXYLxX5rSArfqqLipVq3Qq5z94hTFgXCuEda3b9hrMe4bQt8RTn3NwwxkwS53MDdytheqppMsr2pYi",
  "key11": "5srpR3jP3MwstyjbvMF9hd1q8k3agCoeKtxa5P857AmSACbPTLsW1xNRfi888aCfc4BBCQCrEsByDZpQihWp1o6X",
  "key12": "2KW7jz1HGdgBa77mNvegSQ73ReYvHJ1gEQuKJPGhVye4ARLEzcCM5TkiUPxVN28dF3X1u9pFkb8jVRM8vJAKzsFA",
  "key13": "9ugAudEbfADY7CoJquodQwPgkVuQmbUhJScdunfXrs7oVBXA5kNKYiSqzHmdtzwJ8spSB2Sff8XzERecKm69snP",
  "key14": "4TXQfUqRQ75QDjk9CNzhc4V4C6fzWfH1qM9EB8rE2pmf72iMCL2PTN4s3taoufMM4ZNfohFBYBeuLoHY6RhTCVLz",
  "key15": "4MBd9FPPodvqtjycnBUDPLkSKGZHfnBx6KhUf9fgeBNcmUcYsLm8KnWBoEHKJMFyCUgxT5VCcDanxW9g7bvuD1id",
  "key16": "RBUJ2fXpKCK6C3yGdi6DdWMqmqVbhWFAufxFZXEFRx5dQ3SA6z4rQqeQDgQM7sZhZQyopnonJZ9Gjy2a5aFzL1z",
  "key17": "3nXcAkEoJQbYXa1TyDyfZykngCaJidCrxcdK9GyvX9TqRutzCJckHKYdqctcZmzdyYnjqWYpopjWDh2Xp6UX6Mt7",
  "key18": "iAtHbf3gxrYa8cNAPLoGKnW5LGdhjb5aGYFU7tnP9XKgp5e1uJUk21VNVWJmaHYNkbHBCqqKcznMd7NXvTYDmQX",
  "key19": "1GdsK5w7e7qewbfako8zPWthMDtG7PAptbMN4wmepLD5E3Pa2REyZSRszZkMuNows5rgcjedcPGKvrF4AeQz5zw",
  "key20": "4SLicJTMu5ks3bjt8Bk2aVAiWzeWswSEbAyg3zddZGZsT9soM5dgHxGxPtQgJvCVv3CmE8XyxtWAYmd3ZUDbEQwW",
  "key21": "K5aPh4Sx3vmm3zCCUonquSgRaJGwWSyrNEcZeLMRJkq6gDUqhmW4V4dLK75g2WbcvDhrXaqXfXQcbHjcBhjCadF",
  "key22": "5jPTJmh9sMbdnQAtBs23KNbmtPXichMGQbkfYam3znr6C6vKhPtZwSbFXnXxDGZM3pzigvRH2upBcAG7h54fPffa",
  "key23": "V3ncgCU2xKqibPrPxY78VtJjSkfAuK9yds5dnkMK2YYt3NCf1hSMY4ysv2FnT2kEPLFmDbArDMn2L6QzeYcysae",
  "key24": "cqd6Xy3LJQRcRH8Xxqq4yTFD7pA3Rz1cRYdCN3wzNWiPeqe2URzPVV4VcQje1uDJ93tQGHLCmaeoCn2LixETFdf",
  "key25": "63exa2s338F8nKGuBJH6zQaKHAMepmozbCZJk9CKbrC5FvnE8N3sEactGUueAh9MMXmT1SdG184bPPxdgdbLvqTq",
  "key26": "5Yj8yNnrh55mSxYfMPeHPT4eMx3vgYN1afFU1zs4MWdQMmzi7QxxzuEMjBMgUeZjfBuV8guSpwNLNgcn8kuraBUZ",
  "key27": "414dCGF3CVKzw3BkXB7TDUXiadGUqNUDark4Kt78QMbmHHNGregRPhF1yqti6TpC52CuhDDJ6tYU4T24dfENrdPh",
  "key28": "61vhZeeBtWeu8yK14jtvm1jEvbWr4E2TKqrqN9Qu252J7AvQHgynEnSaMGr9ANhJh3UL9b8syDU4uyq5bUYA26Ar",
  "key29": "3DKJKm7kdC1Z8wTAiBje4WUuLr22LEhLGrePzZ5aXAadZvQghts16UoHznkxtzvE6h8Nemuu9ZSPf2quwRhbsBrj",
  "key30": "59vv4nsfHXHZ3No9Kk1er59MpwqTR4btUF7sdc76PK43mX6pVWymmCoK6W5KXBa7xpVvn3GVC6NySx34KZpaKAGc",
  "key31": "32HutWm1uYUCNrtUETGj5QWmo4Xvdqb3YJmYiUL1MWT5zyEdFFrsPDYtjfGw7FLrSQPb6bLohYjKrRJf87dsYM45",
  "key32": "64L3vS26ouA31xpHU9GcvG7mNjrRyLt23FG56mLTNYtUDx1mVrcBiqrHcxisQTnwAcLUuJ7BLYBx4NHLQqvsKNRe",
  "key33": "3vdDT8zm53Ly1cDwFovh7QW6JW69zALEz1ABFzCshh3tYCDfShZ6mzjyn9kTQC4RuEdftQtysgakXMCCNsEWhn1k",
  "key34": "4tvHqbpFm1GumPRVNwt15D1uhG9Q2rLuG2ssUcvHH12UoxPNWzniHhjscaaF5Ff2T2WX3ser1gs7C3FzcVDcdmDD",
  "key35": "4zkjZeYdkAxHRaNFWSGwnH2nttabMRjmyWo8kqbzor62UMpT8U3kt4wZbvckexbagvAjXvjeqvoczVcCSqm3wXsy",
  "key36": "4qsVS6RRxYpWiNfXJpua9JTrBk2XeAPYbNfy1ra5iWso3JENMUAxYw4SfTuKXF4pbqCdvSuoBbiGFJgtvnQn34Kv",
  "key37": "4wbcADczAXYPanDEZk7DNU3mQkU4ze3k6BeK1iq6PVnAEDYo7RcKgvtN1rShtWyf2UsoUaHjksJF4FYmGbgKs6tu",
  "key38": "3KinXF92P3bCbYqGxZ3rhHHwnw3hqDLSGUp9Bdxp3msHVBcjEFFgk2WV7Kxr8QHbFmkS8FZoyZKNySGKiTWLAsWf",
  "key39": "4gF9v82ho2YfbEjGMuQ18ngWTpRGkgV65Eov7oKiTiv1byu9JGJMb1PjbXaU4dcX5QkAeK9tXr26tvAYZnbZorLG",
  "key40": "4h2w3b5uQrKaZo42hbKZUtiJSzAtLwRp9FpZQSyqnXbQu9mPvuJb7dXbQYELcCEcHdfSTNcZarTqvw69RNmjpiSs"
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
