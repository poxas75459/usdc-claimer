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
    "4Qq7Ehtab92fFRABYyxn4yq3MYqGuw2MZUWapDZyTrCBaepW3bp4Hui5yUMHXLNFaNNNcp14gZiiJo3gLR3Tc4uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D7LdMPZLqsjrbw4ts6r72SdAj1rsUWXKViojCshznpHiHL3toMNxXJcssZF74KC4X3tMyFW3K8sGrmgKeibsm6k",
  "key1": "4koBodmanhBNpFgDX3iCAW2nNkKriUS8kUxn4Fy895i2mPErrUeRiUFhZsJNsJjwT4gHGZwaPUzqavXi335PHqVF",
  "key2": "2muccN4kNRSsyovJ2XiAfVhUaz7S2boJiCDvc7Ahg1VfKnPQjfr323RBMo44wrSxqzmgBat2Av2Wfxh1PqFFt8ye",
  "key3": "5xktByrrNnVq3WrasLM3SQ5e2XZfpCeso8hFPfQST5G7NbRXJmrRn8M8LGohigWGGsuu9iqov6yiv5smsHoVVtPV",
  "key4": "WNhRxmQd7cg4fAWyceW2S4Y3zNvcwaypMwiSCLcYqmLymfyfjUhUjb6QdzZ6sxoXT6F1xuSfSBtP8BCeKGnWPeg",
  "key5": "3ky5ruKuRPvxDckGzF8zP8py4N1SUoX7iLQdiRyBQupaBpY5TVwbUgrmo8o7v4Brjn9uBj16m91PNGhQPFLFtBDy",
  "key6": "2zyYeavsmT5gto5EVkUBM2xT6xovjGG3sLjepPRGoUEG5gaDUYd4NDXuFFYMJVBwFJcUjypCRJwpttP9d9Dqc6ZV",
  "key7": "3RfLDXoPJDU6NsSorzz5Vint6SWctTThwZVpnv2MW4FSH9SvPDNeKtRNH6d8LyP4pktnLv3vVy2SjobSNrvMKrUe",
  "key8": "2b94CeyYKwd2miBpAiZ5smAWyrQyXpyyqAvnECAYv6QYAUwf36maYs5a3gr68jovanRg185Pev3ziRHiQSyQjJLH",
  "key9": "D64kxwRCcSdyJ8JRC2fDDkysxm37rAmEJ2wypaaU65WrSGDQqsoiVK3Jb1grd4udP4ZoAp3S4eSEVA1MBYDWbMf",
  "key10": "2Vb9SyeRHSE7mjv4GgXzXyK8FyBhR6VNAFd19a66VswGc9YowJjCs5E4c321ouwRSnocY5h7QsBaaMSzF19GjHUg",
  "key11": "3145XoHYY9tRMZA5r8fTLiw5DEy2inxV3UJWHXofuCcSEFSbq5RJx61rDdmnLx2v91KDpkZakPrAMY4kL43Tava7",
  "key12": "4d3XG8UC4RZB97TkNrAbY9YcsQTRkLAZib96CN1TKRq15vo18QcoQmLGWHkurh8m6TdyLbiW2RKnC3ZRD6V5DquQ",
  "key13": "64Uv1YGc79m4xkzKTz4JroCsqYyoZaqzjugHwZ8popZuvk1qvJVRiNHovAA2tPNjpzbuRHG79K2mq4xPcNis7GF4",
  "key14": "n8LWAnmVPDt1FqSDPAKzveu98fEwrxN7QksnbtBpoU27Ph4ytPYNYfJZvSgjcGpwcSczaRANbWkB2wzofaVo6Zb",
  "key15": "3rwfep9TxQRQCxah4ASg6qEMJefCote2JVjHoEer8ZE9q9kDA8P4hBw7TvvnQQkZjiatQE2XYhVmgpDL4P71qV2Z",
  "key16": "SVQysDLwRK9CAfExBUsQpQ58ydeMCGyvv4yksmBDWj7o4yS168DkSJNJo5uQJART2gbqWn8vykR3LyhXVX7QPWz",
  "key17": "3B3ttxEp6JjGjj15ibxF1R48zkfEExDo5hR6ibaH2o1WUdxAZ3fbzeKpJ4mqUHSnqnJcWzCu3tiyVRahZJ48EbWk",
  "key18": "4QvzzRpCUoenrXDtXXBw1Ehfoy9GXmhjjNfxLFHNM2Gze36q5nCGupzCaWTFP7bgjTAMRjwJtJRoNNbnfGLQad8n",
  "key19": "5EZnp6tY3qijNVdDALWBjfvP39WXHGCu4Ub8tLVY7MKDGZEaEvQu1wtmmw5UXtN3QTHUkwuVwLB4QdHp4usERBJM",
  "key20": "5Wa7ZA7ousWa4i2QLPkffsTDRhn9qQEZBbisWVAaeyBVuXBjPPQc6FDmRMKfGyeveiHRVzwS5fRAc1yGpWgQdpPN",
  "key21": "35f4bGLp9HuFxv3GikTu6Hv7ymx8BnnMpyEWFFnBqwWdJtSK6eboZk2WS2cLfEYhm6Aa9HVsspu5VVaEW9eoEUeD",
  "key22": "5dqFpQSjy8beaGtqVxMMF29b3kx87gt2HPMXJFJUjK6mosETLXsgmSeoCDm9YR9nD8R4NbUfUijv2gZkKN53iefi",
  "key23": "43zxhi6ov8WvLRNtnqBi6MSPg81gG79EqLChWmKnWDj8jdFGMrMpmjsitJ5qLqgFiUxV3fMHQJJtE7iZTR2pigZJ",
  "key24": "3hc2t9iixKUfu163vy7uW1Asd9AXxsarSSRVg9usbAVeSqo84mqEpswobXfKwEPTW7LW3ETihLmfJ4x1z83bmLco"
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
