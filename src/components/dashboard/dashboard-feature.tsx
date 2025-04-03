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
    "4FTSUHTbx6qd2qchYBK71msGTjX7d8WUtWHpUG71RqLsUNsBTuVyg1iww1DJXZTs7EsYATC69vVuPbM2sGt5uc14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "knrQ6YVmUnHi54Xt2pLpAnj2uU5xMWQg1MvucNGjUQkVA61ru6pZ72n3ejKR6UB1KsbJFNGzgJNnLPF9E2ALHeM",
  "key1": "4JzH6H7KfM9FdRn2cHE1DZWtTichiw7obuFy5X774RYzkZy3mjV7kbPN3Kwnff3Fa7XxZZc1s6VR6avkjcu6QUbb",
  "key2": "3FjXVCd81dX7mptB8FH1oU5YwQGJsxRedAu5QopPCJEmcRB29J2ekYqvDWySRqrw8HiMJHa4ELfZuKCPqTM15YGh",
  "key3": "55rZQ678snyYRqrixXc4RPHy7RaNExWcQBrY4MSWmieA5EeD8tYBWG6N4qeA7AS1kLTSP5igeQhaDjYMRB8Cn2Dv",
  "key4": "4vtjtWYVR8Mf9X6nRBdMXHCUB6hSHVvTSQq8epk8wE9k1tmJu577nKXsUYLrNkT4MP4fRBR7JxPGujaDH1kieBxc",
  "key5": "267SDLrcdYfPmR13dMWfyNMjHgSpnh3EVVq2uNNsbinQwdDB5hQr5DjQqSbvBfZ8GZJhpyeXsqru4JgFdZnLpRnu",
  "key6": "5zxKw9ewucs8Lg5zpgs8vLKwPfjtEkKbEvPSXGARjMvxweSoej1abdXy8y14mn3AXjDLBJVBunsztYgYsHRjdEGa",
  "key7": "2rhD6uKVHfd2kGPLWk7YvyyZV6CH4w8MTGLkYb8JKfaaJufszQBoHD3tHSk3SsFUrSuTGNDgh9aAy4gr9vWpRwYe",
  "key8": "4pBjQPGDRDZSdh8rkUDnNhMLooMKQn97XqFXgSFoj5TrZQNNFQmK9DMr9UGTrBDhuWrtkryxbxKAUXXSvGxSYsaL",
  "key9": "4qYyz8stWGjoZC6W3oEF15wTdvSFnqdDzV2L1snJkhx9PTszmnrzzi1j2gtbLY6dEe8NL1rcsKwEqvaphMy6nJmp",
  "key10": "5M8cLnPHEZn9evCaMcRRS2WVAquGugVJU9yiuK5PSRHXCp9cZF6dMMAKJLyNMy9K5ZEnVEfECH5azTYKwncGVoMR",
  "key11": "46kD1i7isAACfi389kyHWPpvAv1vP2Y9uEuisLnBRheHPQsmGp2sZiN81MbZRYM4gMAn1N3dgfNLSB4Lfy6iJRqS",
  "key12": "39vfwFRoCC3uASDPp8RiyvNjf1V6jSXpWXQKdQpKNGqHn135wS9HrkWZy7iPPJRpKaJcyeAcPGNwwCLmDFyEMMLk",
  "key13": "2vbarAeETTTXwxHzQhfmkrLvpJssoGdzCpSpqwJKiBgkMhrsYtrR33iTccAzRzzx7oR2H8F5JyBnqAsiGNdZQQ1e",
  "key14": "3doWTRjtia8C3Cm8fMGhUZUqhR6dNjmd93jgjoysmm4um9rMh5ChKodxFEmTnu26CKkeuwh3p5vFbpmGcxx8PQuy",
  "key15": "3fpZqw11dUzSDN5kLwKgzHbfpGCfKRHykthccYvc2LF6UkN42dUVV1AK2N2aWCABe9w2912sdLygaRR26yLG8HS8",
  "key16": "2jwJ9R2HqX6PfSuo75y4yLoqY3GMNwkqHxgWEzDMv3LneDj23JR5URZB5gMbXLVjaHH5hSxH4wtBCTDpYsMD5ag8",
  "key17": "2T4qsLcgpxfDnk7ygpNTktGPnKtTubWnb4frp7Hmdyk3z4ARbW1ZPePCL2uQ6py3VEGYazF9Tg1kdgbpnLw8GTvR",
  "key18": "u5XcH8mhMT8eUhoKqjwwxuC9FcuPYafZK3EveaaGbRbp1XZs9nR7LwbZ52LiS1xYeGUjE4USebc1XKJJ6cpwE96",
  "key19": "29uMyjFbhnjso1cZmKqeLHs2fosvBQhS8Npxw38FKrTGz4wXHHXHACHD19sPBGeNzENDNVca2L6u26mTPeD3DtKj",
  "key20": "67GaCFSNZoibW5HdtjS2q44Fe1c2oQcjWUMViGS7t5cvs6j1CCLiuiBjMtq2mXo4WK7onrkKyXALKV6w6B9jBnDK",
  "key21": "2ogkfEvCFbhQsuJoBisLs3ED7wVFRPhZXP5eymVx6UUUZH52dHxrCZH1WLCBJTdxyGudSdQzh21Nd7dpQEPiVxRk",
  "key22": "2yNGdoPnEM7Bau5QfgQ66i3YCedhJaUGvHK1TSHE8Y8w7hZit8m9zr4dVA8DkngDVRgKr1EWE4yEuACcCUoCcX5R",
  "key23": "31sDuUHSquXJqCNUDxzTo2cakp1ZDtqbb3mdyLHPtMnvE5UZDT5D4zDG6hUU6ytX3EDF3Cj1gBawtPwKWW2HKCe5",
  "key24": "39CHAr44EW3THvSp7VMezYQUKvYbdQZWQi44DW4fHxEpEzSuFHTfHKU6EpvggMxSh5oyEVtPpMR2rxVSxgurrm3x",
  "key25": "2p1rgEr1TCgLzr5DwAP5CPEgnzxm5QqCq2CHPRYyMAwYp71DGcSLAbqetkkjFxENX2gJEuvqoGqsipu5rqtuynrD",
  "key26": "qKeRVzfm1tzkxhBrKdETAMwmPU2qQqNNesDd5BFrnmQSowdQaCpGKDqLLesdz2tprVBydHkzLkh6J5Zxztt59uo",
  "key27": "VQ4CB9VysmJqtURGpK4GN5kL7Ycaoiq6cJdGaenYYp228VtQDZmz4eUJv4LaYvkH3TcqZkVZeSyDEhMZB9aaoa5",
  "key28": "5qbuRrkpeDVoHoh2bfWZrckMoT2akM4k6av6iNv7LjXZWuH1dtGYS6bd4sz4aDmzc96kzjvZjEp3U5rpMsVrAEvg",
  "key29": "RgM5E9FPd6teKxhgVx8RPWu7wT5rnd6onNuAVvuQf6vpGBDoyX2xC2yunK4vei2EQvfqMWGur9JV1RsnQu68WrW",
  "key30": "2gumSLeSGZHWejnypFpx4DrQLqW6pwF788uSYMxLUwY1o9VrSuuVHJtWa7s3yXsDjRH1aFmNQ3idn9WPtvxRFTAg",
  "key31": "5ZfZSmMdZDdRCBuf9K5zm4Hw32JdZVua8jsYSUqFqZgfsc2cibWkRytfMBBvh6yZq8DqiiQHjFFZ7WYgHJNXWrd1",
  "key32": "3mwAj7THsH2PUxitt4hJYgYQ39CSfTCkx3AAZmDU16xUbv1SJWiknnVJ6obpn34aYp7HsqzXbx8TumvZHhuKSWST",
  "key33": "4MA4GosrXPPvEGbis6XLsTWmqWzVtwGihMHumPsfM7cDa8ZkaTQC83DnDdMFDFCAhuHKkMPxyUiiCa5pVotG69Gn",
  "key34": "2r8nWoE1WHb2LCt5rb1JetePw6gthRkgnQrJJShVgAEbbgR8MdvpJpt6uDMDR4rkZDJaXbpRnYTUintjrT6F5Jw4",
  "key35": "3GkLj13H2Z84nkczvSxaCEDzQpDs7Nrg47vtQ6m31dy9KEskX7vZRnvRgNhdFXar8UESYNWt9fKPTCWASCgXhFR2"
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
