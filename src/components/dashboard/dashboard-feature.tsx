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
    "5eQT3Lo6eDz7RFvNVRBoVtMmndo3e8JT199WDaYsgpScQoEib98NwQyavkQ2T8Z4sJRGekdrQZp3f1n1wzHdLRQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r2q8LHaMTVGru7z6kciaUqvEJsAv3NWRW4UQnSjGA2r7h4ApnvnzdHS19ZZiVnQ2L2kf66w5xbk7GpW6NLPe3MK",
  "key1": "4NiPSufDRe1eCtkWxRatcYYKL9DDsFsmSuipKdBtgzVSg5QK847yonP4NuzK6FwnVaGtnT8LEhhy5Qheb7EYQg9U",
  "key2": "4eF8BajhcNJfmGEF62JYe2vxmw61GQNvehAXXi1EwLTGhwtRmDzwgA1iwjTpR8e6iyY91qFU1m99NtHqQPruzrwS",
  "key3": "3mRdTKjJfU26TxzsugQ2s4AkLk35PycHn47pKBny8kuosyenmpusgSRDf8GKXxhsCDJL1KHHy72SrSRAJsJSNa8r",
  "key4": "4KBpFSMJrEuT18kcRCb2c2e9JBr5YajGGj5vRZmkpNmH9anNBF8toso8JVvL3Eid7JHTS34NeYqYsFMUXY7wWWKT",
  "key5": "2WcYHegSBVpQd5RFMMe8BtwL4LwHnsRyt6XbDabtn4AUtXvhdn797A12ygWnwZaDsNetDapZ9Go3zXghcrPNYKVp",
  "key6": "61MvDFfmTMmnak4iEL2G3sgNAPKh8jkmNt7HJoygFEwDhAEMob2VULUGn9pFVZFkEeeY8tLesZt2ga3auJ5snbpN",
  "key7": "xHdApX5a58PoEfqxFnQF7jueFHnDLWyDRKentHqM7C8fsFowCYfSw3HcCB483FBne3tJhpS2Fjdx1dFAc9E5JAG",
  "key8": "2ESRpTVRutfM8xHdVTQ4z4u3LEr5L4cJjbqqkHYruXhSjt9Sf2erReJRFvywp17sWcrgRGxnsBA6zXS6zt9BxAPy",
  "key9": "XGGHEx9EpF9TVCb6Z62eMwdE7HdopH4wEnsktrS5NyqKwfyDHSAhuZG5vTKbuhPXCs5qaUWov9vt8DoALTkkVmL",
  "key10": "gtHsLSxhhUxkq7xWpXBpHrjubxBhxk22gZNUEmkhbbQhtJhDqN4Qa2zQJHNjBsipvRk1bUvh8HqQu4JnQULeBkk",
  "key11": "2tZ82BeVCexJPqoAaMmAE39UmxT64aEJiqmhvfrUyBHPNcpKg7p1uX7zvDqhSrNyrXx3zDQvoN996C2ewKiWnH6C",
  "key12": "5ExMEkH7NfD38Ugr7QcA39bvZ61fYRBXVcsnpxihQNs755UwKsmgDP9Jw5HUQCGe2yQ2E7UZqsMFeZWVodtnjZih",
  "key13": "5aqE5VRvAQDc4SEPeqBrSm2h23G4r6i3bKZA6PABUYTMyFpzs2e6dTZswZaxfE8SGi6X7ADTm2yhc8ChnsPmegUh",
  "key14": "4y9eC6uV2dvpeteuKv2UdAxoouLPznFTwXCN4EBRpsnYXMJSQqTiVyCmYArVtXqU1PPv9c46o9PSTQ7vn8AgRpps",
  "key15": "GR1vRtcbhYZEbNTNaB5ArAey5ngQo39BwUx5tpvYAAS1PbNnENgWpuCHke5Qc3Fex7YictszNC1QT3VfLdRYzSz",
  "key16": "41XUfcg4CVcMLnMLAmLpCd9dUpbW5HbR6NGVKhHaD21k1sVxaJeqEfdYrNVGKm9E8F8jsLH4d76Jr84SiZEBVQyc",
  "key17": "5iGr27fEiU5YWoX8pteLkjgZgbUmbALpcrLm9CuZTLbhXVX7jAjVqnWJKfT8mbcieeCbUXsKPUJaDBtMnyUamq9C",
  "key18": "3K6aZPnMBLeAuGjVnhTcoSNcLoxWHAUpui2RymVNBFaJWP4zXQx6G3MHYHygUPZpitBju6LPbhY6fQwmakHK88HG",
  "key19": "33rEMFbSbfhkXmMScUiNzVnyzGz3ojSgTmBJ9nyiLuNRjrv7uG8WNj9yLxBSb752aUZVMHhRDHwaBRCQYDSkrQdp",
  "key20": "3a8nCUzMPty4YVSsBt1RcKV95j1KZY3a9Q3YrtA63SABASSiSVZr4YBkGmnzooeuHNUxUsHkbwhtiNf4SbuVEJCR",
  "key21": "4FWRpsn6zoin1gTdV7YuZrAzfyvgnaSzCpFFYdBVsoX1hUiL35XaoMmUVYYofwAF6TS2gUrhR8uE1tHZCA7x3TG2",
  "key22": "4QgSN6pSnFDz77ipZKZDNe4n1uSqcYaJRkTdnN2wY1uTUpVcv6QZ6zHQUNoXXvuL9GjpMxpwZ2FsNckHUr6ypeSx",
  "key23": "5gNiPPwe8gA3wMdLAWk8CwKAFk8A2vE7BdHrkfsqB95SSgCFjMVPuoxY2qM9Q4BwcLBQusEKb7QQvY3yvsxut6HN",
  "key24": "5nQVzmqd3ASsBeDU2R4Rkvq1uGFK7f7BDSNvd8UEjEBkPWmMwJKXwZ3oaBK1EDRssBDu4ddWtU12YkY2qy6KRWy",
  "key25": "29P3WmT7gYJkeyKg7CsEuPLRTYJjER8wunCLdBmAGWTPo1Jyeb3FdqnkQUHkGrooykH4eatoGBPigSbCB2JyepHT",
  "key26": "4hqLMK7H2Eb7TfCAQtheLGSV8B8sJn8v45gaPgniHZQcPsZJtYEd3z45WJ8KPJyoSYKGQd4hTm4RDanFRTWtowTY",
  "key27": "4fKKRBrYiUxJbN4Cre9zCyDat98zJKoQwkw74iS4ttt4DHeAXERZ8sgVrvYFiytJ8VMtsc1dAgbmc9mv8E4Fqs7M",
  "key28": "u6GgQKbUb1jmwm4YUZLKkczqu5ywhupY9Nw6sV97uTKpUCLYAsBbanmQVjdpu5eNsFzWbbigVoPtXcJWXhGPSVz",
  "key29": "4Jd2bp2B8RnyRqB4y4Q3BmbpHgjx8547b9QE2F2X6QHZEbHsFzU7J1W7qB6HQszHEuYdKVt1vtyo95TCxoKTa8s2",
  "key30": "2rrnw3h2UsdtUFHoW9Qm2nhtWeouFWGRxgPSZiKWas7x6YRhw8qrXdqYCmmgB52NarF8A31w9TMjpmS6QVQkiFkB",
  "key31": "2kaTpfy8imMvH4onLJuQWRvGQnSkHcYkaL9c4LiZUEKtNeDyCpEXDUE6X1A4zVNFg3hSMXBMQ52JcK9bMV2aJC9d",
  "key32": "YWWTiUdtFWkipm9gPwMLLWAREJnV5DcMmoPbk5p8tR51AwEA2BFHYxrsVWuXYL45mNPzKACZcS9WNBdjKe8ufN2",
  "key33": "4rTjV6Z1YqbKkEdvEapsTK85YPjAovPxAyNjGQ2Yy55rQ31Ui1oxXDMHmf83Gg9CThWRhZU5PBF4yEDhCJgDyVF6",
  "key34": "2iUKqKKorWieup4DVaNiNXtHGn3rkDWyN521k6eCuCig5aUsTa44noG1AyPFNUFoDin22upMqUWPhEHyjh6Qjrs8",
  "key35": "npdqxBej73SjQRXQVmrhAnMUbs9Rufs8PqY2PzWPSbgdi6MEqgCNsQKHSVYGPvpAXCuw7kPkzFVFD5NQ4G4pidQ",
  "key36": "5R5DoK4bet5XAK9tKP3N1y6r64cbqNkXxcnhGUxy8AxnJ8w3Zyi97Nv6dczYHTU4fWNPseKpta7SFaWtW29gELrt"
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
