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
    "515k6ya6TMKHL2yfgehBSKLtBQfX85Y6Dmo3qy83MYMDx2ucFk7g8tbT7vMQHWqwHVsUE69J6jQFTerviXbbjqpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZwsUjqmxervUt1BtNjNQHkXy3TS6AkArEraQJfVeNMJCMV3WvRfmhfkZx2j3igVEsxrhyDfk6UdaSrK7vSAt5B",
  "key1": "2oraui8yWhXbmPNZRGtuzjqChp6oKTtiTuBtnJKVaSDzW6XkuzsdxSohCmKWFjpLcamjvaS7HBaqdCKobiNUhyVN",
  "key2": "3wXcyd71KTVgGXJfPqMENrMkASMC4YBfuweGW38WDmqjWcz1T6o3mzWHFtSLLZnLw243MKZ79rMHrPhodAdABnXP",
  "key3": "4V1nuPZEfoW9sAinEgAJQoWwTzDdr1MnygDEKWmgEueXG3yUcfJgqvhfoqhhJgRHas4MRTa4ssJG7NkQXi2K2qKG",
  "key4": "a1XCcVssDU7A2CUMRRU6PiJ8FtjVpc1qUU3g84WvogpNjqQWUvTu3QM3i47WyEEThtYcrYH8NhQfFyiowHMJtTe",
  "key5": "2gP7rKzuahnSmiUDAY1ZkYg7hXV41KYMiBUREa8MLQPZPS2KV9bw1DmijkgJTEN59Vd2bb4CtEVhjkQmzUZVe4Bf",
  "key6": "67BySFD7wkBBQnRiye4RTr8p87TLbRo8kqjXEgdkrocFvHUswmu2mrbY6Jfcj7P7asEVL6FAwva9NcDSAiAzYLLY",
  "key7": "4iL8tqjSEdrbjgaEZuUYECZgD7JvgbbF4FspzZQHaCdWuQMEG3xhV19mAt63X3d3PJReeUZadQWo8evWqQLFhKVt",
  "key8": "28fxj6m8QZsiMK2dkzdKCbrra14BfbPWsvZ3TdVenf83Cs6ibtQSDFfQ9FGAZJjVknYmx5rMUus2JSSmzfrDFBRd",
  "key9": "125ntXttrYEij7HMu98B561pSQ2Uyf5G72YYg3bFnDFgQZbynoaLfwrumCd4jELR397DyP7iWavK5mR3uXW4fbLe",
  "key10": "Wfg719r1AujvEWzotwZtrDezZK6n9SXJryq73yM8Ra1xWJcJkRod7A8yqvGLqr9nUeBJwSpjMDBtQzznV1Cdn94",
  "key11": "5AJK7CoKj1BdAvWWPN94o8uayRw63RU1Jhw6TKQz18eUGYu93XGzPUgcdFyervouCwxoum2N7ANfd8ykpgsUDnzn",
  "key12": "97JuZdBLQUpEsECH244ffd98Mmt2dQLzENx1HMovgtv55ZhsjJHXLBn4T2tGiC1m22GWYtXMozdxc89cjHavBMd",
  "key13": "4trY6LNSr56Rh4yn1sUQmKeYwrmR3CjXaT2gvCA6iGDBtSwfQGmQ1TYPaQaE8yiKGqgPacLTqMNGPK7gbeSM4VLb",
  "key14": "3H1G73HHxU7nX2ZjQP3xtonyMzQkKfhPc3W8DxUYNKrtuZqAisRWJdAyuHxjSuYnwge9a53KNWUUXnX1T3gD7hpf",
  "key15": "oHTA5Ce9Aky7A3rS1XkwsqitkcbbkJDyL3GK3tvkPz28xnwUwDP36Ct5cy1y3vx2DPZjFGpgK8b12bpQbbBRPyW",
  "key16": "463hjj2F6U1o4UTZSng1kzMMyUKRnmzX1CDrNqyVMD4cegXqNauPMjWo91cgSxUkqMhopyX7jgwpVv8cQ2Av88Tb",
  "key17": "5vcvhsfLEhAGghtbtSPRAeVpxeHgdpY9sNnhE2YFGStJCgWjKezDHwvcT2GvGNjNTBpau4Vsna2vzuiG5rq7b432",
  "key18": "2Pp1wFKyGuFRbktnv4caC8gmGUY2jqp9NHxcL7DYadCxNUZAFmkTdyYqQttEK3PeLGs7hLW98CVReW7Ke45SVBwh",
  "key19": "2WyQozEV2gnSMQZLCS2FT6RMFeKAUHTnuQNkiby1o1cyG4Zrrm7htdeEfRtDohm1ti6DYp2ZJBaydiLBBPtA2efK",
  "key20": "5CirS6hRwuvMuRCPdGfvAAGXyFsaiaigArNWDAZfHPawRut85XEXqmyzxi2Do4ifdGEbBT1Sa8gtDKoZVkFPkD7m",
  "key21": "nYjaLDGRGCiruC4GYJpzzMApvX8GCGgX7usYLrxB6vPivDtGMANFJG7RnG1wUjBWxq27VVymMCMNzqRjLU9XziF",
  "key22": "5jC5rBSSkT4FNcDwFHrXKa2jG1KGD6KiSaRcHeee25UgzwC7Cyj2ZwiRgzc1E5vBKCGAgsarCgrZVsykDE8ytDJ6",
  "key23": "469GGw8hBBNVqQYHheaefdQEpjQvP4eSAM7p7xHx1LzyTrjYXtS1HWH5nZSmACvJthssgYQHUf2PPuEr1GvgAcuA",
  "key24": "4KeVrSoHVwYYHsqGmHdi4XWb1svaWEs2gTCuL3kacsX6ekr8mtML9uG1Yiv96Hg9WN55h9KUEuGY2WNtrGVpMDnn",
  "key25": "2HP6RnKicUup7wbae6yRaHmZRRxaBFYQWYirRgnYzMgcNpLq2qB5573bvvYqu1youLd6RqrJ7TkYEi79MYHU8kiA",
  "key26": "5tA4szKvES6gmSrokSqxwT2NSEuBQPChtvHi5BGSia46ZoXiRq9LmyttGqVgSyghJQ5tXzUhLGu6zTdrH5vtngei",
  "key27": "49VamzFPkTCavc4nYivom2DLRChTXbMyf5UchNSY3YoMYJBcwkdN4LwRqDJAh6DdD9V47ahPHWeRfKNoFxMQM9F9",
  "key28": "RgqRh3Zt4NE7HBnt3mfpDaJdtvkx25kHGA2JL2fvJEpkvVxyYTg7ofQQo5JMUAZ53gZ9kuBoxNDApBvZL7RSDn9",
  "key29": "4bhVberkstAJYDbYBf6u7WgUtezGGbnHzNRgSxG25KujTA9nMWxpZmE2WYq1A497dp3NeUQYBhyxt5tVfAB7FAc"
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
