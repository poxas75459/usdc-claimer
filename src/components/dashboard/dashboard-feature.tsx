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
    "3GybGPktyrBL7ifTUYiZ5rqZCVg9NTFPymmDKr9imRg2bMJnF54ywyyh4MomtsMEikQ58u7xc2aYGdwH5gtAc41r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDGAMuABDwhCM7uYtrVhT2hqB1emPVKPmGscmAj3mwKdkoYZuxmjGgHiPK6DkKbhnzYBroFxotC6hxLkAJE2Doj",
  "key1": "39cXrSAzhnfFBYZ9tcC6RZokztxBgziVLBrzCXwquY51UEmzM2dkRjmLLQxRYNEXMqqv6Vt3PiLm2oUxNEPx3XyA",
  "key2": "2pWEd1oUndMoQUrEZVDtzQF92T6b1XSx9quQQdNfWVNktTgrBNZL3oNwUq2AjKaUFDmKED2d1Qen5qkRVuyXNwXX",
  "key3": "27FRVMHNacoqwGE6diEQ8xSgSYyhaEX6HkKPibFSaU9xMygt9Q9FmxToHyZ58y3exHSD3s21tpH6xU19kjcDwKub",
  "key4": "4QZYEQaevkHeN3XbKnEVqrmDng4X7Fk1RGYuZRRBDgeLFNT9uxZqe2asy9NzQLAuxXbf49kSiAyA4R8d5AEmHwqc",
  "key5": "4viArvZxUg9GtNpkLYU7hqqZ8THLyBHJhm4yaEBrWRPM87xAGNCPma9kgdNxmqjDUSqDPKnJ3ZKuc5q6fuTTRv4G",
  "key6": "4HRh417sjohk4DpDPt9VGynwXRv243gw1cmgbL1Sch5hfmBqiZigN6CH3QGw9Ga2iHYnVR1iacK6ewi28uy4ScP9",
  "key7": "3CiSXx6zU9CPTDDKkpPkNF8hHr2V6WBmDb5GqBwwJLVDtsfENJSTEgoL7QM1DkkwWTozUKk1ogiJMGdzuGMM8fPP",
  "key8": "25CdqTntj48vNJjakimMMVqCmtWRdggsy9iA6pLRWDwQbC5FkE7mtRszfQXrWWuJwGybaSkYjHH2j69UK7uGKZ5L",
  "key9": "5tp2A19MWPSK3wGx9RMpCeMyR6ugx9vTdPQJpB77a2d3bhWJMDfv3LUVyMfMTcxNtXnsi1co3pKjiNHkCK6PuboR",
  "key10": "2ThzpFq3SmbbSWaigr9Lys14NLAuiKYNW9eMvoKQDG9n7DMM9ySevPXQVgtC8tdcHUYvxkDcV4bGbGu61CQNz79P",
  "key11": "4NQK9F6PQfJPH79oJBUJ6EVuVTBLXXdzfC788DS2w2UUoWcBQn7yQespU9QQ6nWsntVwekxtoBLqPQvmSryzGXW9",
  "key12": "31saZF2mWJvqxyJDMb8LRPMabFArSsRNfcw8Hje2jEkBcJwyKrJ68ZGYFkvkx7ESEABo3k2k8fHvjgpvxsBVWmU9",
  "key13": "2NQWrHUoQV2BujrPgyiQ7PovT36yc1PKb1ywkN7zPSFMBcmoPszW6PPWEju4fVdQRuXpGVkH7LBExzX6FsPj9tEX",
  "key14": "5wf9bjYabTagVguMzREAB3MP7rKQARsDp2UzJL9cieZKejcnCd3hPH7KNXVi27fLAT8pEAbGx4prUyRWRW1KeUi1",
  "key15": "5sdz1qBqsNKjdRHS57GhcXZxLeobn9YK3u9HVSvMivtSUbtaCswBEnikS4btQScv2XDM94ThNNRp2cTZ7XYtR7sh",
  "key16": "5NvXUNomZGtV3oa7Qzn5kDd4uTYHVZ1uqjWd5yPTkKTBW6uAnCjN8VYdSUjZraNGm3YpU7NXKFGiLnRWudGWBAk2",
  "key17": "5u7dQMWcrCzXd6pMMQ4ujoPDsncuj3L7u5vywfktvqBhQrNsyCjrPUYkQgHwxhPwCj3uzV3L9zf6kWgt3y8obdGt",
  "key18": "3fvcAagnsuYgzjGys8qKM2kXAv5UBfxpD53ZJsbRXh9YXRNMUWDW9rAf4kwT9JvsRwETwmf4zkHo7aUMCUSCABzQ",
  "key19": "44bz9wCr4tzZz1pmTkfCXixZ3GQipWF4R8SWVwah5J93zRwa79tZesz7HLomeBTYCnSZ2oUTkxLu7Sy4YzJ1kiob",
  "key20": "32ijhA98EB4ef1w4sYPCTLdvXZmprxp9juWBYmBiVYASY87E4jnvSfBGvuNZSBygrLcrdB4kUrXwyzfbqm1osjwc",
  "key21": "5jrYoNTNisCJbXM7tAQRE7Hd2eGgRqzqvD5QNEj6829ios1y58eNUas86zBDqwZaKoV1tMeYg7QUHdQgYA6n1Djr",
  "key22": "57KzpSWGN2amyH3pp1myg9tncUUPdNgCW2mqMw5sDQZCw5cVKVa4sZXSnSXnmfYkSLDEVcr569oCTwKNYw4WmU2Y",
  "key23": "4nUNuGKS2nwLkfC6sXH7EUNqtrKxcYccuPHE4kPR9ofoMXXwGW1moMQ9xqyzNwZLmtEScBbrP38g7aevN8D3bvqH",
  "key24": "EvGkffAE3cspnPULow2xHpee7s52BiyQL2F6XeW6jKT3TM7bz91BrYqL6aNjMWFRXUfA15LKH4B1CUxa18Vozag",
  "key25": "2BgYYhVey5uA2WgMjbReSWLaf3sR4sq45Bue2uc8ptUoDdDY6o4H6pAmENzJAThfR75dFFquGTDvFmgBW4cK3kpx",
  "key26": "54ctiAytGeS45Nu4QGZvWSrR9WeqX36pfJgWSr8AEW3yihMrRUQfdpuucajyo6M4TbSfnF5McpMEcNFWBZZKf1PN",
  "key27": "59uWGtGwiy4mLsL9ZSDyWGZkjctRugqSvbq7qsCiBkjdcjzhoc1ZFdThkoqXktTwWDivMN4xSz5GZqD9fqxuiFUu",
  "key28": "2BJmUMG1GsyqLXPvB3UGVP7K63F6rC5EvUZeWMQ5xZ3qjEGvg4B1QuDi2kboF6r3eR1pm3uFxrKfahnmrqyTj6dX",
  "key29": "r7P7XbrqfdyGwMoSmykn68nEiXoyzsfnonTPQb6tfrCXYMZdApfM4D21DDsE2f9mLyaLJpxm3devywhnhCavzEb",
  "key30": "4nPC66UufcSFCnUiXa8BpFnmwKG7NWj4JyuSUBwBfSxKkx74WWc9ZuyRnx6sejyK3LMpmJimRheGnyNG19qe1pBB",
  "key31": "i55hmwFnLTauvZaMVpyRYnhsT8VQu8ZxZDPEftHtcFDKd41s7brrTpsG7M4dbEGM9jFjYG6rR4rU8Zb7WoXjdjz",
  "key32": "5zESkzEMCkGFZN42eVjzXC91y5hGJSqARWsaGtWnN3Rwa1Xo7U1vs6y9pRu7Hq7kd313WgXGh84U4KoL5QBTPQbz",
  "key33": "5XQbdDgzBNzxv2vUP3Fzv7KAttN27TZpgDCjwfVXp42HNigapYKETkeSYrqe1pn5Ez6138K67phs8te1k9JMQ3tP",
  "key34": "3rTStrA8FoCxJQiLkh5HjqD6FgQo8mDdQuSXR2yQW6XHZJyRcXCaHETK5Tt6ZGUrxDQ9Er9MPhPLajvB9dBfj1YG",
  "key35": "5T77Qth4QXxet55sVTsFH4LSR46XcSouexx4k3kymdQBKxM25dgqg8HehzGVPb2nvcq7e9QYTLueoSXH4Rjzyy2H",
  "key36": "WFJfcWCHKPqTq6qxZt3keZpVJRBCfneSauMiQxTd71JvjoXqr1V8rLPcVFppk1tdqqyzcVuyKuqwTQmYYNJEuv3",
  "key37": "3jSHqvNdERUAr8XoMMZR6wvk5QoRAS6HRw9DiAZ3qTxcGyscBR1693X4wmxYRL3tVFJUmDq6N6FAQJa6SmeMGdCu",
  "key38": "5NyAy4twmsryuG4Y5SBz4Uvb95P5HZvMRX1xFM6jseHkkUzBiKXRt7W2CzJuxuBEG5HKCNkZHZ9ZzorNGy6VX1ME",
  "key39": "2MuF67pB1aN2jE47CVMyeWvrxcBsfStGsYNfSr8hVnFMHhkEArdQXydydnaDQbm919cK3HoBhHpy9rkTBiTTiDWy",
  "key40": "cZmkz4yZmboUCUgyQV2QqqfPfd757HQBkiA1rRyDkGpLyhxXTFDEYwaRkVLrbMyDMuUoeaK9hxQa5e63tk7FF6m"
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
