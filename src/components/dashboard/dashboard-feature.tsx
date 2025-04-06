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
    "1vrNc3fEC8faxKLZvEFd3qio5y7feu76KDM75duqMfWbL7qXs8nCUW11jnWPvNqTqdCL9Bc6KvMUsXiwpYPU1gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xG8CWZzfpLfjdD6yNMvqRDhiy4KdLvxkvuyxW34t45RmdfEYXDXtiezWy1kgi5kAbnqZ41CxxmfVaCrevSm3ZJZ",
  "key1": "32coRY63EQTEhbk7GkZFbwCEKsr6AECPad8SpwYM7yT7vxoip6qNCXLvibvKmrafom3LdCHB9cNPo9uS7AEKQdKp",
  "key2": "2LgvRjxBHZV9MYqnqPzVLbKccAeam3RkVMyr9Ks6L9uECVc7A8WMDfZmtRtKosZZAK1uJEPwSi3sT9hmzUGJUCvL",
  "key3": "4cPjBWUjpcbvfinyhgsorhKAkVcKS4tuadFhwZnkrM7eJvuCXJ4WgSBos7czWTu6efDAP2r7TE2A8mrCM57CZ2qt",
  "key4": "55Rj2WpFhpwTYqAfcNVhHytcTXNBivjSidhFPWuQ5QtU1BV2WUabcR3hsHqxjs5pBY2ktKNVVqBMTj6p7BoSHb5a",
  "key5": "5dnQGGuK7Lmoe61VfwNUUPGuRYDWbZiyFkCM8b1YdYioXEafyMPAtjbyqeTta5o9fLrKSaqGc3NunNiga99aTkNg",
  "key6": "2JyVpXk4dcoyUtJXi1M8YzNuVBGdqtd8YGZnbYnDPSvDLa5NtbRBEE3nDbmZYjanvtk5HVN9N1PxiyWM18DJmmNX",
  "key7": "2ENpWBR9w6LU1BADFazxddcFmsuNgQ5DNRvGM9u9iKnww9kWPGiUfwTjPiKSsmZcyPz5XR1MAZsv9NjmiS7Ab793",
  "key8": "44xiXeY1gyUqQBfn6sf4pqpAqHiXN8RZfhx77Ur8v9Bib6TPWY7EujkCknaZg5T8X2ghUJqe8Bx9q5XMLVXn3av9",
  "key9": "27LLT95zKX4AnUmrPhJRnfBLbszqFbGWu6mxCGKhoeC3aA3JfZPdLcQhxa7yKVihebMtjduRofbnPZA2qxmf4gEM",
  "key10": "5bSWWchojdANovyXo8DHtFRTbK22ALbfB1HxwtiA7aX19T79e8Gwu5P4WxKfmEFefEANZZ1PUyDPWmqEH3RGo8ib",
  "key11": "2Scsv9FFHBhaJHrU4xhm44MN7rbFJMHwMqjEJD8meNxxCNkYGyXfNWxCBitUXCdCMzTmJGfP3VYM6tfb7vNgJcpJ",
  "key12": "3bnwnUKQ9s1pYbtosCuj25uZ36RWmzrA8GL91B7REaxRnekhQ2oxyU4rtuh2dZVQQn7m1r3xe3uZm8xiWMjyf6Au",
  "key13": "1kNz7w7mnFBxNQGNFhFKj7XSZLn3QUxNGPC9vSh1pvK1BJH57XSJmbpFXdBHUhxBQXpCJdnrWQ5axRMe3h7YW2B",
  "key14": "4kzfrgEaMavJZXyvXHLU426JxrhtwhGfznMV7SfwMBfDdVW2gGX9PTMRj5bUYQvzfBX3MogYVqyq1YSuE6WZeFaB",
  "key15": "wwBbMLnRTWGYFte5dvxx9XF5V1P55rWPfNFXwTXa6gsd3jkTVzVUGd2peUVKWmC4MBAFEU979vLcX7xLFNpkV7T",
  "key16": "5ek9xEwXM6btiXPLawrBDPzAxkFYCBdTBc1SKV6UL2CgqpCpqmXSDwE6SV9QW4ATm6pXV4pjZGV7XMiDytE9KmzF",
  "key17": "E6wSTUYMdAJfoBZb8Fm53ePA9WAH8mrcDkp6dN3esSQf5h8Ft9pXCm5tf2wzjbXeyVhFegXHSDvhsgrvFLuo6tm",
  "key18": "4FnmE1wJATiTAS5ygLuiVFy2FyUXCH7M2prehFJDVNAYEbRbJYW3wePyEsJqcDgLVTnLJ3GrpGFgVYFh2LySWEdp",
  "key19": "2EgTf6v6NAfjW92MazTNV2Y2NL6RGrBYfUBU9LViy8pxzyVqok3dQm15XUtmUKWT5NdHKWjzC9FYfUcYoTeGVBV",
  "key20": "4EPbwXMKZPqiuKBzm7o1EWWhhKUStGrQDFJ3CduwqVQXEy6cP6iK2BdaF5xshGW1Fo3wfVLrcgATuq3DuKUVf5KS",
  "key21": "6DbBEoSWsEwmqsSpoUmza33745nKuroSyVMugSqkXKPtkZAdD1boSJdEbdxTvegaZ1LwzbJyD9B2tzP7ydFiGZi",
  "key22": "2vCzpEFkCSkeNiTtAwSaSB9ZJK3e8aFUySjdywwYz3imvxabJu2yS69pfu1EyvX3WZScatsQ1tfJ2RHcbHrWvCXy",
  "key23": "3vf2xsTvXY7Vp4B1kaLgSXpvj8f8TDdneZtAYbxQxc19GWAXCSQi3RSeGDgM39rx4qmBK3qYwtFZbrQPyjXEa9Pw",
  "key24": "424vzp6T4vmMMK15G24A5dJyH39Tc8sHFhSgkNy2ARBNiPm5YCWswCbVNc3F6ec4bcUrEJn8rcn4KRpZeAy3A647",
  "key25": "67EAkMG7Qh6Ma35uhTMzLpWRjhTynJNFC6smNSyRWLq84kc9B7kaXr7Nfr6bzxS5q3swNvovZjZ28LNNiS1injvm",
  "key26": "FWEvhpG6AHU9b1sJDsiMWdrbDD2CaAEkK9MxY5AdCZYZgxMXL3cHQDJEfcU5ADh3GodmCzctD4QNvpETyeA1ZBJ",
  "key27": "yj1cqafCxLxCHoHmxTht8P3Mwd2Uq99Bb2TAUChfbCHXnGP5my93BPgHSUwnJ3wbdmuKtC4ShyBrXqBYuYxFmzr",
  "key28": "4qcFdp8R7RcQ1XGYEH8siFtDyxtPTF7HWHMXg674TZf2JDYnYYgbcos1PUoH2WU8a7abjdMHegtrXgcnNhaQi6m7",
  "key29": "5exqobvAenKwkvgZFmBEvtivSNyyfFdKWAHWzyhQ6bGxkBVhUfrbULCYzfq66PGFCuXLuPQiMYSvm8nYncWs5YNN",
  "key30": "2gisHMdmWwG1i9UaowPCV2Psw3LjrEmMjpRUKwdeEzPoCrxZd1861iv4Mr86yxVwiFEn81kx17TFhGR1f616hUbL",
  "key31": "5kCtjTcB3feZC1zt9tKRTcJYSZRzy7H7RpyFbuX5fogcB4P8hgu1HCFHDo7dFZBviJk7tumriJJ6DaucK7Bqb3nz",
  "key32": "goTyP4UNyLBJR9Q5WZS2JD7yh1d9kNcA4qgLAFqqvtNpTovHAUoHMSdwKkqQ5od4kdM8YvNceVi4nv7jPg4Mubv",
  "key33": "5X3SoXCcvPju1RoyBC13KCwQjQ3DhQR3pebqAbPTgn39S6X3xdBWEh8JCjw34EMcdjyCkXKu7Eb2H5gthMcGiNbM",
  "key34": "42VvAb7C9RdeUrPoDUVWgFiscADjs5VHmjJXpqpQwwKFroFyGoHFPC1Q8H5cA3SV9bo5XXEoDQxrwPMTJGD8nLFj",
  "key35": "4zqa2chbZqKwgbhBVQ8zttRxzD1SnWXAdyed6DY4o3G1FTnNeRirPBkRNM7farbZHQHEAop5hT11w7QXP2yyHHP1",
  "key36": "5DoVWXvUQeCZ4AX43E5DJRz3LxczUkt6KGmBoVw7TSv2Vm26GL6gqXusBYwrocWHQocRu4Z6hitybm3nyRmpFupU",
  "key37": "2Ngje5LuZP3Y2KbsD5KJDCs9qkDNwCroPXjFGZAFyXrNb6Xi1cV2zK87GzdkbLrJdobFnYWuP7veio65uvsduvPo",
  "key38": "45iPzekdnmrczyBQvtByu3wpTXLzLByDVBVUQH6mbpiBvpe4K9JPdT8KkSyPxqLm3oFSVAK6916XLGEi9y4yWdQa",
  "key39": "vQWuzPknuUnm9rb2DLnsS1uZUu6ZRrhDN1g5Ujz71EtjtwVpu9sA2MvUfoHrpCsJC1TFNNfdV416C4iQEM4wH9Q",
  "key40": "2hkB8PgTAR2p5v8yuYfvZABCkVhihQ8cP3ZJDi16kfWs29HB4ybJzFWTL7JTKrZUTjdMW6gBLPa55TPHTCrpyEUA",
  "key41": "TrZ7zNnojx782qZMspMF6v2ksqebCPaegE38AZEzA652L7Hb6Qcz5vVEfvtPGsA4dWu6TQafw7HiZUe81Ap2sdG",
  "key42": "2zoebDesuh3EeRUifz64MyEnp5L1nYk6awdaTFDRGVhKDtpbDAg7RHntZHTNYW8R6xEdrQL7uFkrD5CKJ7dPfDiC",
  "key43": "2PpgnsezDJ6z5e3oQG7d6wFoxjCQL7TLVw765eEzmBoWMgCt6Pda9Eotk3dmqrJsSnNquA3Fg1yjt4xMBfsFgRCW",
  "key44": "iZrtofeGA6frd2bhVAF2q7Xpg1MjfKwgQojuYbZYBGkR5DLSFhyKGEDPugcn3Koditsr16DqmV3zCwKd4H6iKpm",
  "key45": "CjaXBtxEJaja4H3RgEdi959KWBAqzKKF1j3ty2k2ac7gmPcsQPZeh4WeqzX1aidnvgowSLsEDLQVVZqRokfCgko",
  "key46": "2banMVAFYCWxo7vvzmsEfbXvGrcs8bHp3xrnhFEy3ZVu3ouEZxvbiMy8EybPYDUnkeD9NrxFVYHb37CEAYk8CRP2",
  "key47": "48eVqHFQQEhasjuJAvgF4nPmrva3USPPMweiDaYeTUoq1XnjqnEfAwyZC5hf4LXgGPswZEWRL1RSdRR1kzK94cKr",
  "key48": "53VhZ9EzeRfa37BHvJFp7BMN2JmnzMPV1teKsFKiKhFT4yxQ1q7fYexMDdh64tC2yqbPz3QyP3txNtJRghSoMJ7j"
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
