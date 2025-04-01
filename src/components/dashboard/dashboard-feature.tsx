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
    "5FA9MHJkXVVkdy95YZPuDStM7VhL3wPcY9Nn7yTQZrN1BtWeDyryPRQXZwdbTsdGECXw4Bbz5pJ6YQJs3onmurSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ByYWuihjFw9jKe7qNH44yeJjZa5w5GHY9cTXCCPSs1MxCM6HpnziWX2Nn94ffe4ibvo1hMsZP8qbqSsJJ7DWbPR",
  "key1": "2F6bTPuwiGMyf2v2qdaZiVd9NEFd6NN9P8cgA4C5ZDySAq5QcQSLkiXtNDp1E7D2nPvc33CuwhVVYRQzSVdmsNtf",
  "key2": "2ABwryZ2C1CVczQHWaqdp29goKHshpBFEkCzHm32Yh11sRbCjjZmFGyu87U2XjF7U9HfraU86zb7RGsQX1Uukqw3",
  "key3": "4kaFKg7CtFweP7FTvqro5bpKT6Lb4DMUJCwfgF4KgAZePPFTWCdh4F4M3vZ14uV6fEVCu4ZbwJ4vRftrBq9ijo6b",
  "key4": "ovYS25ctW59ZhS1XbF6KYVtG2PKojxfDHd7qoapiKNJgdXXNUReAoCpqRoRjpVPHV3dRKvpLTKFgbvuLkSce8d2",
  "key5": "2mYKwTSPvReV5vmJjzipqZ71Lo44XS1Kh7RDtdmS7xSyPNSyEpUrF7zyrp6U5Xg5jSm2maBjMeEjvzgk6X1iCrXx",
  "key6": "23gXCvtZDEmvDvVyG7Yoa1rcd4kB3DvW8VcgvvC5QMzWtLT7jsJWZ1yQtFjygBcCZthARFXPB5K5Fh7x1sXNW3wK",
  "key7": "CNWCqRtPvwRahZ1KCQF4zGT3woryLpS5sRE4cnshrGQg3eqX5zBmmZExWvtXda5zLCkepd12LJoq15YK2PR4aFX",
  "key8": "3r5qGyPsZM2VG3QiaKjYW9vv5bF7BdUeAarUWB5jLaKaApDDMtuQmn4nGmT6hr2XZYMQkFdJ9ici64ckd2Q9MZot",
  "key9": "dW68tgcKC53bZv6nkULP5EmKLXuEkHWkUZ54dVswUfYNu7BDfhpYnhAmNU6m9jrJw91Uh8hzw85VPBUgTUWJ1FY",
  "key10": "5m1vxzdjY6twfMMAYR2Y45jniBz3fDH8f3z8Ua5V1mBVDNPYJ87xuuGFvcmS9QB5eqEF5wkVuaVTQZUzpNPtr8ut",
  "key11": "5nB4dmAYNgQESKS1sdHA1zqJx2LnyT1xfDizAYfgsNtzgvTLJrgiMj5GznHpWU1izcEVSCEQb7FfugqvdvwKLtq7",
  "key12": "pJTr9dbzZGjyTj3ZYyreb7z7DFkcg1E5RsNCnNuXAWMn7beiqJkVrEeJgzcp9MYfxovRuJCvQaVonQZU7usrycU",
  "key13": "63F4wMzPLmdvGczBPuxjcCJLHAw55xhCqACUaw9YUvAcnVnmNF1si8s7PD6ku5ASCFJCAEzGHnrPiFDgYKPboWo2",
  "key14": "2bdGyyag3YJEhJKMiARpnMRPttChHUCUX1JqjQ6AV949o55iG3t63iyuNywe2h9X241nx8YVBEUsdxX23ttcPtLX",
  "key15": "2YsKxBgHU4FGNRD3mmCTvRy9yKuE1DWWnQecw9macZh9GN438R8EhGQf9SD1kpUPNswSLCCsL32TkmZJsFswRKvr",
  "key16": "odSgrgtQahn2Cv47sVgeMRbNkowGokWca6STRJ37ECfmbRPLgu1xEJ4MQ73GHNyDhjzLqJCU5qwHhU7Gsk3sZwS",
  "key17": "5z7qp6dq55YdKuuf348HSucNtGMUp3DSQTbiUk7Fx5RDzrS7jHskg4b1SrAsrLD1KbSj9R59TSwtJam7Muy3Z583",
  "key18": "2Z3aX9W3SfisTuVNXmCwkSoEN6THcUZMKCStSxU9cUS4TdxX8tSNmkx6sQmvorDb8B6kJwipcnLmxk21snUyPYXN",
  "key19": "3mU6nHDbD8PNDwPrBzcLD9Ji5SBs5CUozghbWvnGkuvv3vCAnFfEuXbUifJquAtsPB52opK1uA7pRG2D9s45kqQb",
  "key20": "2R6xPjyqELznf4WrUBUGYfZL6tbizqqxFcKxcJRjiNENJbP1TdHM8pdqtwz6ASzjEu9Zpc6DAaCcXGd6dDxkxBtn",
  "key21": "5LJicFerVFwey4rgPb9Zxd4N6vhzGqyMhkYS7bHSvmxHaSVgCPPkbLCxSijCEpjLGvi546g5r9kmeo63BPofaMMj",
  "key22": "67ajkm9MSbt5JJLFwdJDBDM24N3FFmPgEjrAyNQK3t52ho7kx4FDjwTbRd1pib26zPpoGV7nBCimknTxkPt4n1z5",
  "key23": "4kaKukRwmkdSzEzLrn67AmE6VyYoWmstMCNrmQEWUvGeHMeVDm1BePGwefj4zgFPScRd6G5EdkcwJ3YZk5ngjBGd",
  "key24": "2xmDrs2p8aSh2sc3CDXBkCsQ5f61EAkFvQQusxuR4JWZjQNYnG5bHVZzaHWNMLG9FGB64A43iMB1vRL2dsJeKN7N",
  "key25": "9HF7Eobuxm3nked1BY7dVGrLv4om3HrRhX14n2KRnNCdtEGYRwoHc3v7VNYmL9QEYwxx4YDbffbozFieFGC9Fov",
  "key26": "41Kmrs619BRfNKymk1ozV2o5EzUR9RHoppUQEqr9aj4ZWayVWc1rZ8YNbc3GRe7WqtmUWxCzc8Ut8PqPkJYAiwyM",
  "key27": "5J4QLvgPsEfr52nPyDpMeAcNVsvMGan7MrVhVdT4KATPxYXQH6sm3qjMFDaykeAvcU46QeMBZLszgZhSFzVw79a2",
  "key28": "2Qx2bTBvGcMcox2xwUiHs8wUpVeGB3udHEVjNNASMaKcLP1dchiM1kzDELMhRWdqFvPbTNRCUESadcmVvM4J5PW8",
  "key29": "5QNQN659MfbEHdhRwLYMVqYidiYixx7CPRs8qzcpCPHzSVgTX6Dbfnw687kM21RNeNQxAtKBwfeUvkaQKGSxvy1M",
  "key30": "nvnrakrxSpYYsUceKB2imaHSwVaicD6uWDZQgfuDNV6MJvrhUfQDkB1iVGYNUq8AqmruixmPgAaqYagjmY6sYN9",
  "key31": "3dZ8HpdCJx85e1a3eUMz65W9F3c4w1Kk2CNsvxE91Z6r8ia7ScNs8XdG76ZypfDa6C3NZCcQoaWWXSuWzm1gpP39",
  "key32": "3JM1R5fgmrybRxEXCxu4sXojniRtBWUNDXXhZLRyrwtP9RYQ4YjqnbdvNuKyfuvANRzq5SyphHxaeoyeSvPmaNxL",
  "key33": "2oGLGHDjYTFbNeytPF6aipqJqRo8oVXUc64wmVbzf8xbpAcxs8rrE8L33BvPpj4wq3xd2qpVdRW4DhnukaPC3o3r",
  "key34": "2DMiMU7wCCgSj92uAoaN3Rs8EMxGa2SWqPjCDqVAo73cc2uR8zXYpzWxzQBAK3GBBWWNYF7S13Pi695hqemwJp3U",
  "key35": "JSvMGhZcvYDA8GGgKyZv4LiZGkMCgh4u7UE16p6Ndua6MR4471u4SL4sfrtytng4a7UNW4v75tFphUWXDVw1TzA",
  "key36": "ngpxta2mYyc3CgD6kyGdq8F1LBcGw46yWNnDZPP3KuRRUDYZVHp5RKzGZ7ofqNw9nfKoPEFyZPttiWfM9iEUoJ6",
  "key37": "N1J1i1UEVjWaKeQJRgkXuCfeSxUGpC8DDF1F65MoBXr9cJkKB66U2iFHSoeEaFpkXAQSwCU499ZnSfu5KM1PnSb",
  "key38": "5MH126RpTxamm3UzKhJiY3E1iC2ih5vhuHW8Hv7ZJWwLzvevLigVQTDBbHWyuoWzvgtVT4vTmPXQk6fNF8tATbWS",
  "key39": "3brT48jDCpebvjWJKMA1Tvpwip3hrixT1ocNuhwQUx2HCur6CSFU7K23AuFv5jNSnP4tDMpv5Y1Jh5e7ez1VoFkg",
  "key40": "3PkXpVKhXBti9XDS69Xn9wkRVSHSzbTEbsghhZxU7JwirmXiMyHR7YyvXHVkjZDFxa9AaEiScXyqZjZZRqK3eBXJ",
  "key41": "2RwUqZMX4nzk8iEKw43KKzVyQZKNoVeFp538f417P2nwM86Vtro8Sm2LNAd9mCsstM6yduhmcxbVZvag85EVxnNB",
  "key42": "2yEnyQiQDaRH2gULabtbVpBrT4vmEcMrkWHZr5GGPasZXn5RKe77bQY6PzvztcNNUy599syzPkY6N6a1enV4DRbd",
  "key43": "4Md98koAeC3f2CCd9XL1mMiXMAimU62gR136mqxf5zdXy21kiCW3RgH6SwuNMdhxGem1VU4PdB2BvtXB8S5gf1qK",
  "key44": "BBqtKbiL7yi7s7nREjobSfydfek69i2WHJiXuGUDtMosgyJaygBPcYCeYtaNFQFyi7mAdniiuFnqr7if1u1Rsi5",
  "key45": "3NDRJnTtxYh5NGn4CBdZ9WZZFS53s6L9iqRZ7s86UYx3VnJm3dMyyFdWvDbegraq4PTbgH5PQ8MHHrDExNN3nnab",
  "key46": "4JcXpG4qFUSuKdQg6haXxEuqa5Umwa8J4YaejNTzqyNvqkvDtEtQCDagS7bUNUGy3MbGEkS93h15saRsDZBgRMGw",
  "key47": "43aWHa2AHUboqpWpMvFbtcF8UrQukW6BuoLDTfbQbtMbxVAebqHLuGakJE1Hx4hVdjdVVzrFHrycmarQNkgamwLa",
  "key48": "3WwEH2gsw4T3fUQtEYVN2akjDSzNkoKEEXWLzqjiDjF1t7cc68dfYHHFyt2xnU7nFZhnmDs5xEfD5PSE1nYt9mDm",
  "key49": "VTaHp1soqsoXnS6zpEjFhw8DgtfyACJwgF62XxavPdK58JLTFYPH5KcYZmqPWq4RAj7K9MnLbJq74MmQrzJg5kF"
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
