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
    "4Z4QED18xJhwthxxvsNwhziENVgh9HUYciNdTYP783mQVpvsLqqTuPDQCpvzPfzsrTiFjb3DnvMWMktefQn1v73N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bprRAW4g7bpZuYbxdFbKdwKY6gSu2dMPyPZJJFR3GqsuphGVHKVHMzyx2SpTKjr5S7Q5CKxudRtj52hFq9Vr1di",
  "key1": "2gJmmZyZvA1FStTZAozYMp4Ws3qN5eRmadAPun2j97hgMBdXmDfTco84qbn4BkMTAMvVRrg2i3BXBRtwN7WL8AFe",
  "key2": "5B2m2XzaZMdXdupizS9Jm5BVHMBJcDV2WNpZ3ACW9gvN8W54dUf4XFxWAQUst9tMRAZphcHTQfB8q2XuL2MNuMme",
  "key3": "58KF8CuHU7P9Txy6f4GHwu3p2Ln3SBF4SHapDB3YAJNJLj3dG3gzaPzLFCPfLBipgi8YJRZHKRVXGnkmgqvFgGse",
  "key4": "5hegjGyqhVPda5iVqFFqdEgNBEF2voA6jAPBrGKzXAU1wXJYUDfVandLe9LFMc9h55tAa95DjzKnbpkVrFgsGUo",
  "key5": "5YUpm4zRC2hcNX5GdumeqaXPsSNgnkvnWzUpKhPvDiABRpgrwEXgykve5aGEtsNu5fCzjY3LS72MYVz4sMAoMqy4",
  "key6": "5PkMfE8zr8RJ32M4LrbyGfZAjwGH4XzrEobiTusyADhYFumc27cyBBkaaFRuTqR1XAKDNjznwvdDpkGjBWqB6M3D",
  "key7": "3bzxPeZ4Nuheucxk6dV7SDMm5Hvk72mGWryJ3JFkTMmK4oG6UJXj5WfR1yZvi8tNW4TfVFuFbWRffJe9oiKeXuCj",
  "key8": "34XP7VsN21wuhzGaX8MWehLZrGVFrYygxwKRMDxWRmfxCu3XLugBPpdJhhDwaCgYXDvKDSAJqX5uf7DbiWHuukj5",
  "key9": "5geX6mc7JT3ZqxN9eHKSfzw2d2tPqHyc4KLwYMb9gHWUjNA77TDxxHMdPvjgVd5QFeKoQ1KPm2MJt5o15TJDb9H7",
  "key10": "ybamwRtcV5xWtFek3vjX4QaPsKFW3iFspxm8uevYQhzxtjfNpg5MRKNEy1ToKrMaZEYSgHis2Pqv8qu3TDKxPuh",
  "key11": "2MeEujeXzBahLfNYcXhBKXwfhyeKPjf88RbaT2rZAjyB4gVP2vNhmChuEfc9e9xxverpskGmjTv8XtoAisu71msz",
  "key12": "5wWmdvr9fb169ac3fmMPBpQdhFBtVWNsptk3jtycWuaFCekUW6W6rx7ZJWcVo3dhDWeiPns7ks85W7FgRotVKgnG",
  "key13": "581NJVAZ3HAd6kKpUkfL4LhZxjuqLNtwa2me8RNktbJGgLY3A4Ht1L5qGGqzwhKnLrVMeLeS9SvnLs9rRacs27G7",
  "key14": "3yTHaEZxEBNP3KLNizAknf1tPPRBUPvNmFs79opSUS4YHKMMukqWT6ccVBeyxopR4yMgc4cGeWGrvYJsSyrTD98B",
  "key15": "3o8GD3aGiydkfXtn2TUjcYJotC4ysNX7xXfMTQrT9edkaEG9Cayy9ov5HiQLU4HUvesqgqAig4amKiF4bS4axrCd",
  "key16": "4BNPgV3rqg6oa8u34hsTboG82M1iSoTXePmMEZkvo7Fcwaktw6wRTY4aFnjDvudYtwXu8ro2PT13rNZSP9QwbYM5",
  "key17": "3Ux6k99p6PAFGV89frRChCwQhYJtMzmLNy2fzk9TU3UoPdFiH86bnq27gpuonjwGWPJGkFGRDmuAw9UU7ZQHfdNN",
  "key18": "2mRW7hp9BiU63gtFboUiFy7b7R2tXJqJzUSayLCCf6qBA8knL1uf32X2o4Y7sCMjjeyX6GgU6vDEZAEjcu7S6Bnz",
  "key19": "2gm4Knx3qcxBK42iteotq6azTYGzo73ykxC1B5jqndC7FhGUbK35gzRdXvciyfUPK5moTtxhBCD8EtdtriYHzmjA",
  "key20": "2w6upcZoFuD2h7HWX9Y4YG7dVY2YqkTXMbMyoPehDKr6kpD2sGNsgVjS7jaaqqkXNMzn4hG7GsXdrs1LDXSsfNZG",
  "key21": "P6DbUPyW26P3zZzxTbWdVBjUMJseJHnAf9fxcco53u12hi5ymnxZ68snma8HYNeJHAgLb6t7k4RpiaAz74HPSbS",
  "key22": "3r4kfwiiPxfL8aUuPdVnKmRw4vRLkbywJfi9CtfSVZznBccsN1j3Fss8MfJhMftHKTh7r1xDr97gMuXygMVe3AYA",
  "key23": "5RPhoorpN6RQkZ6q4WonEsp6aqAtPnCNXQDASRiD48QACd4izRuf9k9s35eXJWXFyZgUPMtG7vGjoJ8m7brwud7o",
  "key24": "3M7EbVb1xRQJ2Wpoe8rgnJFsEMNiL5PfXbjeR5gk8bHZhfTFX3GaJA66bUGcBHc1MGT5sFHqjz8aPFumrRek4xuM",
  "key25": "4vvA3b6xsDVQg3fFZzw1JPX51di5gUuga9gRgHe8djz9Ff2NwS8SBG9D5J3kxfBMh6vLe6g5j1o6GqdAGWboB3of",
  "key26": "ForY4SAHcbJkrhrfPbUxkASmiMSa3dNsnhLh8TqUbXrCeeoNSQwVUPUUGPZ4MMfoCo7CZ7KpoDwVx8xgQhzwvSJ",
  "key27": "FfD8jMc5rCgmgqFjN6zfj1FDymVfzR26kKk8TN9qTxbUqzYNWtgfFVj7cS8WQSumAfHiAcRykKvcEFrgCA9pAG4",
  "key28": "43hmSBq5WEuBEDFU3BZZZ2ihs75cKSCeB59Y3Ti9bFhxNrYeELqrXfkBpShxF483ayrfPBPtAtbwtG1KD8Qazhw",
  "key29": "4Dkb24HZ3baNAYZkSUf1kRbCXgyxyTMeL8i1shrk1weL71EckMxa8sPY64LKoztdMVkAS8z4Pv5t1XQ3NfimtkkH",
  "key30": "2NPK8BkcDbPkafSiJ1HhU7YEUgaEnqW96gGNTqjsKWvmmVnpJcheFYyBpPT6FpKSEPcbeEKvfKJqhDVMTPJwH6im",
  "key31": "3d5XcHaCSAnSUniKBjwkJgDSNwvHYbzBHcAyAHpcsZGJe3GBAyyMX5ofQEr3zEwu78KJMx9sSJuZA8HRAPacAxJG",
  "key32": "2ej9LuMvQ1Dv4VVCj7vZc5aonJvSieXEw2xudVBfKUMnJtTTUAXLXDFfSesSBZVrbj3rcYBesYnh4CvxY51thHEV"
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
