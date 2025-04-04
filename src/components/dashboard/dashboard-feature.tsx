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
    "2UM5SNPD2zuDUfw3zBpkpye4KwP5moh6M7H5P6P9ETWacbPKkrEhXixcMBxXuEANaNoCRRzXq5bq7AaAnPbkANnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FrWKkG4UZqGq5zEMdPpzpnnahA7z9SZCfBtXhwqHvbyoYtPx6BnWY4k9c36gZ16ziJu98Sk9zi9yPoo2mRaNa2z",
  "key1": "s6pyawRTRY3y7pwSYCVJEPkMtPNXjvz2CqQ1JcE7nzw2d6jrfX26uZZMwHhPUPh9TX55A1oymX5prdNkF88Uvnf",
  "key2": "5TBAHsdH5iPgE2kXMnxuiprLaSt9AAsx5UbiXuPgPopXSPJVECM4PEjfZh8Bp2FhGwzMFSszY5DMvWfJGNuRCGc4",
  "key3": "4RAYYBb8gQqGtE3qCkLmM9JnJAgUff41ZRj6632D2bEVGE7UqUvqdnaeJ9mqY1XAuZzAnZrTBipAiYR4CveSNTZt",
  "key4": "4qWTU7RyNgikcen3PCQdNHykZyacYAkvR2Mkfjy3wvTysoFPSL3f5DiAbdGYRERHYAXBGUyjjxpBfUnABgWdwBFX",
  "key5": "5SPeD6ZyPADJAsrnDYe37reJXCjMy8zJyCWNrqccgbQYdAhhru1PF9jxFnDVEmiR144Da2QP4e3xNQ2oJR7fMq6h",
  "key6": "39JnioR2js6XsFdzbopH4h6zhC6wdJKeF16gu1NMnmW4c9SetJaMYJdvspT8A6dBioWi4qguybNLtcaJwXyiBcZe",
  "key7": "4VTvne8VAt1b5jyicgwKtjZmenhVJpQtJ8rGtmHMbWM3P5reh8AArw2ivPCYLSEZAgd8uRt9YmuU4edd79SUdanQ",
  "key8": "23M21kevbbPYAiURVabhEn7P5wPdi7XyfEcxzM1zpmrsqWmxCw71MXRUNyhjX3ZkkZtrANuVPvN8UwAa3U76arMW",
  "key9": "2V3CwxPnWmjNiCF3dF6eBvogKfB3GaZVdnzKFvdEURRsNSDwUFo4DcrdxMRua9XPW4fc82KkeWDX61ASMT4vgPbb",
  "key10": "2JaG9CtKbfFwE98WJvtMhNk9fVxvULQMBpKcHujXC2qNVwbYWqv6fisV23TndrcaMt1ojuy6PGeJLXFAm69osRJE",
  "key11": "4Qocqrsw9q6HY2Rd8zYW8ptPkNkw6gmAwQjRFBR9X4p5PfDjjNrC94trguaEERKopmq3Z7oKsfvvTyGLUQki2FVY",
  "key12": "4kiUQdZZes2PNTHN29KUy3fBoDtNB8WYPVhLY6uE6LAgbAB2iSqeB8NULhASmVoZAbHViJwGzYdCYqWeYH2P24hw",
  "key13": "37DCaPYtUXM8RN49pBM4s69wZe9Bx6R9X9sAAFZYEwxNXBfe45pSDLJHRwaLXa66FLHV2T7uCduKcC294G3vivU1",
  "key14": "qHkLFwPsKiesvtoepXGhwGjKmvyJBrwDbw7fsGAGoA5osfy2apMv5LGCP2eKzM868shSMAmv5ehCz3qGsqYKZJt",
  "key15": "2WNwTSsK4Yzgyy35u4z3jhQk1pK5kBkwsnd4eAWDZapnaJYvXVnzwnxmc4bPVxng5dSvvM5P6YMDKUUpzNQN2QGS",
  "key16": "5rDM521ZGB8v32UF6bWsUTydLBJdvE7DqFRM2RwjW7xCGU3m7fyt6op7pm8Axrw5KMJhy4Ai23cA7cYasFqZVCMj",
  "key17": "3aLFStAteHhYjuFCWqkhWUbmAa8Yn4hqnJ1rxNge7agGf1WB8UnkbtEjCSjqhFvgfRsNzpd3w6Q8h4Exgs1XGLRY",
  "key18": "y6ivzo1HUdFdqVgmRjmWSEr9vsekqUxfp8wwBNNDP6t3D5rvpgUcvievLhRY5ckkpZgkP8g9TubrjoEw7enPjdA",
  "key19": "2NMQeTeg4Pf3MkBNxgW3kgocGV5BGGBpNEJXFzPv9zhMpMQxJzYMBShTkXEoqHK28rrVxd7h3U6CR9m5scdgARpJ",
  "key20": "2n5pdhmk763TUmPAhVqPJvimvckBgsSHp7wFr3kdDjDbhZ7nQcQu8VagyCnhPPrKYHFNxDFJbyUKYx6PS5nFJ9md",
  "key21": "3hgAWtDtfEe2wTogtV4Yg53SxynNZH2AiB7qoyJZVwzeW9hxZzLkACY5H8MD3pCCLWrePSqRnYsghCT53oj2z6GH",
  "key22": "5PogYfFdN5WNk9e6k5vu5osPsFzM4SVWoRJ4x5U3dBLwj3fQogKJtnxvCYRhiPM24TWRuPmpQjMiyfYASwM6y4WJ",
  "key23": "5oivaswaNVji1bhd88TgfGdfocNNLBDQULncudk2S7raPVuSyLgs3w3AS5Tf5KdCjcSEWkkCeqACdEAVQtLTL47F",
  "key24": "c8k5xKUzrg6r4haNu1no3rMxffQ9iR2GpHo4EiBCkraNVdJHx7M2CGyYeA1qNVtHRsfUDkUSe89DfBpwD7kuFp5",
  "key25": "4KpwviTqAonnK2JXwsQKaLaVpopnQPhyYYT5137t9pdUzjoKacdposh6Bz8c8eoinfR5YaMavjnik9hgwervjMnB",
  "key26": "5dV5HyAs2Vcsw49jVA6cd4Mw4czAdJdmvM8Lg2CeDc5xQvkHs8GZkFDzZuLUPm61DXRAsGPqz7fQvKqanohcdpG5",
  "key27": "3Ky7ALY33dhCwHuGTmJp6DmkeLhv1rHUjtYJtcgytQDxwMh9QXi1uBhzHErQTbo5csGtF36jRCA8h2RYUPFPEGiL",
  "key28": "4eF4dV2vDtuf2o3K5B8WCzbmEpi7eLnTNrWhcBYzrtEBEvBVRBDtETM4q6C8nk7MALjQ2pkuV8sXBctLrpVfBPZU",
  "key29": "S8g7EC4kWJQWpx4rxdLgH4bNzh4o6LPArnWgMjsdg4vT44n9dB7ifKBSWATgvudDxVbtggKBbbrSpGkGaHbKfhw",
  "key30": "XTwEJDLmfiCxgPSE8e8ce666tozonhaXaab8AUuriqh9LbAEcYAbXK78NAK5Fhm2PpvJQVN3zzxdYNEN16biQZZ",
  "key31": "XsTcy1VCG5nBeCLf52m7BVesaPn7QWBMwzAopoh35ibcLZp5c8E4hTBcuSHH8wLoeBZm4TNB5ssuQMVrAK2d6cx",
  "key32": "2jmCCYo7LEGZjFidnjfk9jZu2BhiaKo3T39fNkUkqmfcV3gV7dW2jhVypa95FFY6XhjfPbTeuDZ9foNkmk1ApcST",
  "key33": "5GpNo8fPReXjXa915KLUR5B7UBFFrE8EgDgcAocTzYqWQGjCV2ZqTERQKoUtvpQp5kxWRh4Htx89UrZ7DtRGeCU6",
  "key34": "5MutqJdHBj8vEHrhnGLcvjiZCUZfY8iqoZden23cSX6p4yMnn62PfcMorrxHvxoV2SKVQoMRVYzNZd3xtGwi4vcj",
  "key35": "DuBHJPZTKukLu285BrNEv8xNqVJ45nwTeAN9EsyohgNzZ3PFqzN9PLLy7C11PToFG3BQCZ8UHt3JCPtc9xuPNEP",
  "key36": "36egzXrCf4a7C42e98qnJvafEP2AaBnwhxh2z7BiQi4p41MNGZo9Ybri7zQjnN2emmzHaah8snLsexNr7ZqF3xkW",
  "key37": "2dJLVJxxt8ujUyvYK7EFC8Jwwdn8sLLuYTm1pYKxL3BMM7z4y8eNZEJiPV97e9aENs6hzV2uxqqbnffS6VntBFrE",
  "key38": "2mLh3NFTZ294W7D3PKXWuUxQnfEX7WDSR7miFUThHrxdqmSWu4ahwY5SxnPKCPLcDyPCPNeQikmhgCVqVT18FEZX",
  "key39": "3MTfS4ggXbDXxbJnJdjb6vvLojaZS9owtvkS5AsDko5axXd6jKJdPcrL5Vo4oCP1K3xhtdSg97Ai3tf8VufvpC8C",
  "key40": "2FPgf2QzEjcQfanHtzevYBSrG2AApFBK9FijV8BimAedenRLM88usUVLomywpPaeCmb4jnr4QAxS1oxVV98bhAHX",
  "key41": "3EbCESwnr98Yt82idDx5mPvFvBPHpxM2JodEWtWxWHBnYXEb3AAeEeCJLPxe1YonN75CRAgAqDbZezqW1KEcbdWA",
  "key42": "5bF5PByGdVeg8H8y5ouiPKGTDuiTKZV2eqj8gaKwh4xvQuyn3YJ7dfvD1jCq73e1nVtHmQ55njc1q5xPe6FYY24u"
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
