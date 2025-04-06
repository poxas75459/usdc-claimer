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
    "tLxY6JH3mhBvHhKBJpnvMa9PeWxb6vqPAFbqCxcCd7QXP37VWAUi2UenKLjBsWi9FhBkuPAdHWnRuNxeWysvko3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AvN6uKD31fodBYwjMXSG8pr9GXVWkQZzoViDpZxm8y75PN16LxygmEoNp1nxXNn1wL294oHfNLQw2p7mhSj7PLk",
  "key1": "2iruEVjSzq832FjoZ7LaBNYVWSG8NqVbDxMbQhsXK6VmCH5H6NqwNEn1vD46tmup1vbDjipqwTSnoeaHTxVuWCem",
  "key2": "XqVZynRS2KDP8dE67wHTDTtg1zZwtj3kT2j64H1qwiAgehrxHH92dKLP3dWXMms2ufZn15F3sH44UDSfdDeZ9Ar",
  "key3": "3MGpqXxdRYWNDGWAYace75CevnTFWwmvAn1XpjmwayrfGkkYuwxAZARbAAFXNGshrbUhV9Ge2Lt5ophjiZ2Dgq9S",
  "key4": "TLdWDaspXBh32AujQKFDywePu1YHYxvCfWCGFSwurT1VprgySy953Rq1wCCV7kaLMApase9GRjPLrYbJDMecddL",
  "key5": "4JpL5tWVSK9EDL2JppGbKsibP2FmKd4FN9VEB5qnWBBXztv1PSumeAZv4c1LCLbBFdhXQ8qjjaWz9bFSJzMq6o6r",
  "key6": "4VPU3ydENGf2GbUJZdcyXdnJ1LdkYTQe5sZoyzPjjuiBPr5BEqcUSpZPmZYoTtY7uAX9JovaWZ3sR2c9jMr5fie",
  "key7": "4hRTZgkMsQMyU1bPy54itWDXLrGra8J4V1i4mnfooX5kYjvN6EzL2aE35rJDHLdePMDm7uzeCkWmmtfhHh9Wnt1j",
  "key8": "2nm9kPt9D43Uu574gHGB1g2Zt2E4ShTteLG5swmCeeqZFLYDWXyL2yKuhJe2nqPiNhtgtPhXamEMd5xhztNBrRf7",
  "key9": "5pmJXQgA1anX5BGVmgT85NwcGKismvwfKiAB713MR2DrAVujwFxL3TrxaDptkvAegJPZVjnaxvhHKtmtbXrcAuRN",
  "key10": "2ZaEU1a4fySuhc6WZTsbRh6DVLHYdKP59SLhbNnzekb6UXHvF3i3SUKgLbQ4soXwmLCsDofWM9rd3gTNemPQeq7o",
  "key11": "hEPFz5E5mNwAuAB8LpyB1Vuhwr2qzZdDeYjNsT8MgsucWPZpzLDREVig4oW5o3K779tsrV1iabCF57TcyDx1rpM",
  "key12": "5dnyBUcTr6JDouMnWdGnvSyNsDpqzNbt3iYVKBE5tKodPnzQLLPii8CEpjRkC7YjRwh6eebXqhhgKkFkVLesJ171",
  "key13": "SKDSRevjiKBy1evEPiWz86WV8WnrhQd3VYtuU6wDgqv7atDVwBiDwJvxhe4CcVYXQU5Qu8bh3Cr1GqEjsSHpH7M",
  "key14": "3K5SzuLrJCZDcHAQHtMKAugFBKv5ttxKf2tHsp42kFCVo4PxbGHPUpgEjSxg2zuULJqJ8oQZ89dk935w7MCLQ54e",
  "key15": "4vSfzFGXAbfsMXZxzV7nEfzuoifJk7wq5T1CvoGJbPJcQntxsqDbXTq6ZgpohJgTa9Joz2uBL9US83mRojfSRSFD",
  "key16": "5TbeJ2g3ezkMEjxUTnGz9X11vhyWujg6DwbwcycXw6XPzAtFKxtk3QLjRknBStYe3forj2gVBvVpw1qFt7zWFWKC",
  "key17": "2f1bxysAURSsBNSuPmDyx5bQvCdg3u33CFy5xVaquf1mor1YRunYhZ9cKdX3jXvvdLAbMnQucttbnYMCUkrKLbSS",
  "key18": "5Uh1zBh6nbm2kV38ebP7HjRjTX5YV2iv9fpwZdQy1RYN2qPxCGwS8nn9uTXxNf6n9h8KQH8r6PTD3XFZZgn49mwc",
  "key19": "2vz5AnusUvipmgwyjc3hWvM881b7yytTVQBmvAegQCE7M2yukN2Zv6KB2YAAjy9raGoXfNA7Fz4nwD1utqMYbt2a",
  "key20": "2jxZPqsrt17Qg87vokLweVGcjRjRcoYZiVgLPsyeiVjjBMazh2ph7jJGMmt7mMXbT9WNwGjJHtTExX7fTdMEv6gw",
  "key21": "5mChbvCAP7dQR5exduoHPPE8aLstp77zXkLxj1SaeiY3rGGbmqL95oND9LuoP6xGfMZy1aMZLFQHLam1dKmjuBSv",
  "key22": "5nAbisrXvswTq1RnJWCz4L2JteMKnMdMHXNeEW5Nrhkx8dLjRc7PGem3pTauiLu9reDJENKUdsqDgef6TMVSATxC",
  "key23": "2eHo8qTrmaFcDrS9ESmFqb8m7VfrXrHAzBVegCxfaRzhNJBakH8wkbswxgo5GD3o7R7F9YarUzVfV5c8fzrb6cz3",
  "key24": "4vCUK7HbYXHYEE9fG6o2eTEF63jCEo8WrU4wxnaPsu4SEGGsxMyTXytc3ZUW3pvTzhdrXwPwp13SxJ4NJCEvAdQj",
  "key25": "5kYAAat2H5RyDiDyy6puw62sLrhqo8fjLVrezpj5cyzLnDKE7Bv4D3LGaVRUDqB1uQzSLCJSwLxbFudLUskJGCXh",
  "key26": "23c93g7vuTiW5d5tzhhSCcBs2TAGUA25UaV1zUeoB2BJsyc1ocadKP68s6GAokH3UPXRtBHrPK1APJGzviKuXoA4",
  "key27": "5quWXguTd6AYuck1XKgu5eFgy27cq64y35Hnp6ybRcK4BdUkavaCXoj4aEyi4SbyaosfyoBg3FqiwZ4ed2NmXyHc",
  "key28": "3jnDPJtCMPkiPkcBDQLVakmVU546Ans8E16bYNv9Uty59dEN6KYZBgaYT7fQALaegN8zDpQPeFphMtz1FUs3yato",
  "key29": "2DSmv9X7tTWtxf7amik58zgBYtsrHCZr1TC6JdpkyjmTEVbKBY5UNKq7saUdkQbfsSiNeb5337cwhsNkhpsXKbvj",
  "key30": "3FtDyaN2nrcx56qyeP51NreL8HpoN7EL241avtVF1azekBcMqvFSVpVACWWAufszZYmLmuDPmPHjjjYbicguPsm7",
  "key31": "3uKTFwZESXNW4aQDqz4CuvazWzwc8Qezf5N1urJ3NpShU71YsZLArgV7haKTNYhAvqrbm4fteNDs2zGQNVH44zbm",
  "key32": "2oEpNbbDg7oP5ghcAspL7T1Ef2qvsEy8Ad18o29shTH6Ri9MmEgyMTQPDGZr2LNq7XZUtMrfAczbTDvkdKeMvGUh",
  "key33": "4XdehbJHxDn2ednXxXQQXHZjPKeXD5RNLC75383DWVM9w9TgXdheZkpre6gRM5qyVryuBF3d7jZtuvCWHejkwaTQ",
  "key34": "2aC8BYB8rY9DChdMJcvtrYweW8W6or4pCa5RxsmSuh6j5xLqBxZK57afz9gv3iqcmf1FpKopYVo5KF6X2accfMG2",
  "key35": "4WFrJA6uc8HX2iTKh9KpzBHoDcziFSpwxuGjAvr4mnQ4oK9sv53kvneDVhM8ib1cf8QucZvMi29hq1pR7YXr78ry",
  "key36": "RHbhLBo6tC8M3xAsKLyvYBptFHueoMzaq8dLEHGWL4LdZBuwQkyjzqAFKeHvvWJHEicBKDCLjzL9ycPb1kMvDoN",
  "key37": "5tfjqtnXeSEkECoz8EegSWyLU6bugPLixUSCxXtDrsxthERhGGRBY1HU8Hn7owrNMreykw7cnZRBjVLAAMSh1LoE",
  "key38": "5x7vgYPuNS6ahkjdjTe2QwKDhNCRxhXxfHHWWTivkmbHTAcZZdXJBwXK9VMWttEMttSG5ZTcg8HeCvrtfjcpJ83p",
  "key39": "4jvfoNTorLY2ERmw17PqTbq7XERDwpJabCPvABQbp9WXYDqdyaaEcsQZndhL9jQu9PrJdf3VHxr2w2Rq6ztP1eLb",
  "key40": "3cB83r4TVhdc8qjeP3462XENwnR8JzMFy7t5VwaoH4RtcvuRG5VBAHERAx43QcNcMVxcKtsHafGBMYtSK44rgLwW",
  "key41": "4nQb1dCf9rfgerBpRTizuqyvZ81UzGrg7xLatB18sRWH8nhdNbYDY1SxrA6wgxwhyuiMV6sx5N7UZ9ZMvwW2Kfgw",
  "key42": "3pFNf6H6Wazjx2C9qUDU2otTmUkERUc35Vw3zNwahuKZZemYpoiW1Fkbdf6aPXa8jRgLEWHkbgMuKCNGcRpFP3Bq",
  "key43": "2zELivvQrU26ZNF82Jv8HCmpw46iTzFzCiyZJdnsdBUtZ4VgEhrBMayT5yNPmVVWjtud1FSifTZ44rvmMTmgdCe6",
  "key44": "2N2bqLpk6cgXrrNCEbqM2T8nhJ7fsrK9KXPqCWxTXv4PtJrKX4i695RVQE3eMYCsEo5fJ4KzxGgKgHkAMPVFNUyB",
  "key45": "271uD4uVNyfoWRqkfHGvdRZzRkvzYA9jdHrk2C47HFrA8urCBv7quY7HtCoA16hDa8tFf5kTbBpsHhuabiXtNfEj",
  "key46": "5Jp4x3tEFhWCBCEPFzqhBs74i1FQMJcEFfeNqxESi2bd2L1NEoSQigosyU6kRNLtEseyDjfTqHehdKxqd2iqMxYQ",
  "key47": "jL8te6oXgKApFK4zZ5tceGSFao6VSPPMrGDR7Uo4VdJFsaj83SSXJeL7i6fg94qkb96f9TpJJJCtvw1E2bEENtw"
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
