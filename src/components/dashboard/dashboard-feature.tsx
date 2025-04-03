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
    "2bhr42MFG6RWQbLDrcsFkDKF8f24MMNVsZrDavYho7kURRanshxm1GoztHcthDRRxP29R1vJQLUn9kYifArYxwzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgMwqYTZHQ2XWZJstBX9mMzAf1MK94dxoLpBVQPiyrouzHKxB149nqsbiKgeNqjzbWvcQZzJ8eqCevfmSx9ihpF",
  "key1": "3yn6d9n8jVtecdWLuViFpvvbEHC3REvetVA9rSc7gcvbazGyGMq8sbrKmuUDkMQRYTH5Gm42a5rjFQuxKxPkKfzE",
  "key2": "2mDzLt36FDmoPFpWCQUgBXwwTaVXqcEhLvPcPQ29Rnaz3Qu3uMrNU32KPg81keQkGdiKFZXSG33p8fQE8t1VLmHQ",
  "key3": "nRtrqQagrj29oofv15LoinUE2ADHhB2NkwbekjSNRssbPeZtQwFqy6bkWGDTW1x6x9s7mHzXFK3KUH4gDUiZFCV",
  "key4": "3YJBY4F4WFPJ4MkBbaGcFkpPGTzJZBGQ4yKU2cWfqa4GEG5xnevMdvFpBj8yJsfPL5jTnoajsAQwpCtgBuGYiuxm",
  "key5": "23WE7syT5covC3CfT83jR4SDzdTMhxyfMYF5paKp5CDTf3b4m493CtUBxtfJvL36SBfPw5qnZ93mU3hA8jREaBGs",
  "key6": "3SaTKA3vXbgadJzc7nTQ7pFfUgkz25KJUZHkCHjZaqg3jAogxhoG4gxBsfL2tEa6imHktozfZv5yADWvc7M7Pcm5",
  "key7": "4xTBrbCZmfH9pG4H13qbxm6tewMNTZi1fuJPpYrKmWSTu11nKDYUR6T8FVXC8So6GqRq8Wv2jHgq4zZ8RGMKf5F6",
  "key8": "3xEbYDaDhe2KpUCRFqnpp1w4NejzDxLqnt4Vhx5fDEkzw48xLVUdTVnMhYexRGnkVEkdJAGH5S6qAWMf64kq8CCH",
  "key9": "2g3M568QzaNzjjWwUGDVSGPFUSvs2ZVZ37BCvPBo3UkhjuBNFJauZ7K74cFtxJPvk4FRZ2j3KSTKvjmsLCP2Lf99",
  "key10": "4iJBMEMoHMZTRfsb8sdRJna9j5r4wAQUNNLkfu5bjNnDLQMU8A9j6AYie7UEEcLMYYebjwXjVrzH5WjDptVHCcHf",
  "key11": "2BXMNCexxzUrLMNvSULbsz2BwAyW4ubhPJio4b4pjndmgXrXnNN9yPyUmAz2eEdYDhxwFF4EMSPXaCtB8qLJRRQU",
  "key12": "4i4b6nFVSwaecTcnvyv5fwGngiPnapRroXpCW8g53UKR68A6jK4JgJbmWJrRFUM8MuT8hesEEtvDDCZ12MjKierp",
  "key13": "4gX5Hc51HsNQK21gdGoWht3mtDqFqQPoo1aaErfSSQizkDZM6PJ35imdY8Hn16ShHiPXeMtXB8nXHkqnarY7k64",
  "key14": "hkJ3Ege5hDzMp8pTD3SV579ixMxW7oCsf2Mpp8Sr29L2nrB9TKFqEknyusa4Hi6HhR3a6KsuLPHMHNG9ezz6cii",
  "key15": "4WG6HcGhHHUqVtURmT8dHwjSADTVcw15RGp62XuHiRzs4a4A2zJX5VpZ6uTVsmnfSBQYjtqW8wY7bS8t1UWbUgWA",
  "key16": "2ephDeFJCTmSYZxDEJTUTQGbiEJ2rjpcWFMGvP3YBrBhVihz3o7ZBTqYkypJiTZppyym692v1Nu1Z6LuPuQbHEQ8",
  "key17": "i6RrEALfyAYKbqV3ze2zVD32vnBT2kwX4yuELKMpFZ3bnQ9ErKfQ3GHrGfvDsBxxD5hzFCBhAP4UHbkpGh6VGPA",
  "key18": "62SiAuSqfExtmN8S8YHvboFTpmGDVw4LaVCgvBBjKgCsQBusLKMmsN1wdpdhYEZ4gWHG2cD9VBE8pGUFhrwY5HuW",
  "key19": "5MeVgSvkpx9eqPyumpoHqsVpyrcQwzX4sGJYmBZEbEnCVynF4e9NTzHuANmVdfKSLWBRKSvwHkaFohB8ZsN75VPy",
  "key20": "5eKtFhnnYAXFfE7jFiHS6G23ZRM77WZgcKY1p48UQFjBDse2osy71jeBvX5KLSpLyVDKGy3ifpYfHhhgX4uARsDZ",
  "key21": "5myT8Uc4zpHFnayZTotQUWgEt6LSYJRUMuy9u3eekm6McYcUbpux6kMymgP7XunyRAoT6dFr8Ew56td94Qnq6SW3",
  "key22": "5kDt6kJmngmzmGSXMPb3cdkw294PaigJmEqX2qKoczybw9uzJ1BfVxBdLGAzFkEffTaffB1iqFQnNKDmgLmMuUWy",
  "key23": "38Lxcr5MR2FRW6rJ3KYhWuMLjqjgqMcYxS4zah9KoNQ8eG31PKye7n4cxRn98rqPMWJZauDHWZonrfRoL2PyftRP",
  "key24": "2dC3U7yVm9Z8FhL4cWy6GYVdt9HmDcdAqApB1kR6zfVYEe4btAKpUBR1ATj1TX4ymS18MTvCzGZMmEjj3JCJxYWf",
  "key25": "3aDiN4Srm173XVyqRvSKtFGxxu2BQiVuy8RjxBrZ9R61ynRaSdnaaxVrfpKueZy4JTcRJbYM5imgExHUEtTK2A1n",
  "key26": "5JXVo71cdeCiRmLbXBzxdK5g1T89acxsJbscGv63NKRxtzzCRB7mqYbQd6Krcb69qm5HgAdv1PA9aVJGzjBT3obF",
  "key27": "4suQnyn13gLtbnH31h4pjQ4F6wGzEqLuJSJoVbJCdNkyiMgLYfUyAWNmJWqmsifCHzNsBawEKact48GLCftrWEnX",
  "key28": "3HbVR3FXpVBB5i9BU44ZWES4TebRgwpcGPF5WeqMGo8Ly6gTvy86FjgR1NpuPaQnzw6ssrWYbCUDMsTPQvKT71uE",
  "key29": "5QitW68NXnhiqBTN9t8r83cBqEBVt4iKZTYqaKcXP24K5qSAgDKsy9ShkD1jub1Zmcza7VpVKMDDLninowtvYb4d",
  "key30": "51yrLDpUxkG6M9C4vYpE6Zii7JExQ21dZSVSDZEetJj5n7v5KoH4jTYVduCixvbGwfsCQRyZqcoSBUKqjPzLRMtP",
  "key31": "3k8fnX4JBL3U4xGsyt9YfQUNFBVxuqdciEvPCqc8xThFXN2KaKtPoWTfsJPDHsVUryZkvY4MTVL6hqfwF7zChmY2",
  "key32": "2QVgYGD4cswGP8z84bADR4H26KYUDVJKyYMUGf2JGjwxJTmAD4sYuZL9eCzunJJGEDNUwAgKfAKnfBhEcaMxMz5Q",
  "key33": "MdRP1n8neoLdjnTwErYjVBdzdNrh8YPzhGPaEquReN8vyUcSTjet4yh7GQQjoFyW9WYspCQEqi3gfhk6UqbN9pz",
  "key34": "svCoP1KpfQPPCBFYgDTjK3LayZLQKZaoDf5suebwF8uWSXwNnHu31rYs6jBkq9rkfPDigjtpP9g7gwZyZpdoxPK",
  "key35": "4qrQ7HWM2kTqxjMJeq2jTrHAbzbPWaJZNCtcrpbaLracCbMp9vJRtjYEtFdK2YG19VdNkvy6DYfijdLhqsyZJoiW",
  "key36": "61TBtyda78ZiSbKLa6a2gjgqyJnEps9rAZ4Hm65b7jFqBcoN83BUGvghTHfdemqbFGzRrZsA5vziKekJi5xCLyh8",
  "key37": "3gN22Fa4THL2UCS2MTEdcRD1Hzsf69ZtkRxBQwjXiCrwvJ4gBiR633P2Q5ztckLXnVdG5vNaQdpPAhXDmawb78g",
  "key38": "2iyL6rjfUT6fWQJaG6uHHuhpgHBUbhNVRCG9QqeZVRTgKQ4QKbLzZpuQD2i6spBHCZdQj3XP2ByASMLwMF1RaRWh",
  "key39": "4NctRtP4fGGhVyP4Zj4L4YTYwHsjtWYX3om4RS1fcyC2n2skK8uHA1BM6EjeeZJWDx1b8fzf8HSgApmgemvP4t3m",
  "key40": "yestyb1br41CgtvZ74GVaCwSBN1izXSRi27Fvmi8vx4mvz8zNq3LAXwDktGjSNUQXTSFYhVtFocFzyv1kMGLVH8"
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
