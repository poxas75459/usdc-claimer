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
    "5QuMYobuvNHxhoihTKwk4bZDEMyJwptKDzyrUB6SvBSDAms5KztUQSC2zCtamWK2vEmqnQgjgwdngzE3sopV4pfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bv3eKi4jNkH6xy8s9iUk92SZfyA3Bq4sgAjU5DL9yKNWRp9HaxAfErpxNc2y378JCczZo6ypoeFgJmx7n9LfbEw",
  "key1": "3bUUdmCBiE3oTwpq6LWay544m2gAcn4Y4gGLcqbow6UH5sd2tbPd2hHknACZCKtnPDMVfVug3A8vwc5XtiF8MeRU",
  "key2": "9ykxMDGPZiPwMaz2ZBmYK3598VnzSu8LXnPMD5an3Af1H6p2MN7R1KU2oenutb8X9Pcrcd6jzjtz72GbFuFd12y",
  "key3": "3d7wJzK6FK8JH29RyAoXPbQ3ntpGReXnamKRwNYVvRgxu5NDcuAWgCRQcehFjeeGX46VGEoTrdQodyyVjDmC1vBU",
  "key4": "5vNAU9c9m9h3fJgCA3QyDMXGhdxArDgi6TVnpcsZyPMa5bFuPsvedy6owFQRba5RUFFj7ssTaedrqJHj7ofUPzxZ",
  "key5": "4uVBpmZiasW4n8JxXR8nmLErZLLbVW56tLvAPWveqeV7XVu62Hn6dpwpHRg2SdDow6a5UX2MzvfPhwCqhpMwMrTG",
  "key6": "67Wn8H9TsrNV7FiAfQitTPXzGtnV3DMqWAbCMzgU2ozTXLFer5s2BBy4wchL3Td9HWViDQH6gbeFhriZcJJYfKxz",
  "key7": "3E4bziB3k9uYioFAx8jtGjMmgmG2Rt3zQMM1rtJo1gggVVH8L4ToUfK4kXo1aC9QBmuqD9d2P6vZL7XjcaQpgvz6",
  "key8": "4PURz5yXSfSfEpFJ3cGjrEs3yhoWH9z3LcavBw6JVNbspvbVnGtKf9GGMvbMKqk4oxd2bkFHYxgU5FVribvSZeHr",
  "key9": "4rDGxfZYWDPvGkQhHeXvfmULvAsKeMXY2NK1shcRZoqtQPe1rfg2DASRHgfHehNfFg5Mdk58h8HRqEESXpzBeGmt",
  "key10": "65fajqUYsbLwa5VqtE3FFN8bEP6bpPDoL4oU66cKZPsKSU7y5Zv2tcCkJuPtQ2ckdSMEYBLHKneVp197hCtYp4w5",
  "key11": "47zndnYtjGZTWyC4n8LbqbJFJk6ywakZSUhRQMLY1MeJfFts4rk71FarExLDXLJCrTxG6xQbkfxNvRruNzRmi4d4",
  "key12": "5hmfnp6JuNXPuhZUTUFh2Q8ZFJ7P2aPLYu9bY1NmJuqhoGBGmogS9MKKpPxoPKeDsCQ3VitBTkzsaoaMQa156Fad",
  "key13": "2qH5LBdMpoHk6FHKe3knauBVPmTheuP6AkUbsq44dopzjAXozX7Dn9HeX58pVmp2scoF3uRQ5toCqtmTVXaKAqXX",
  "key14": "3qEXmmBSqnP2eZrzA3TaGHhETYJpy4cLZ3zDhueZ26Qk242wUUAu5o4ppZSvCUW2WfRmREWqcM9tSrFn2UE7SMYN",
  "key15": "26kF9nTqwPuSDWj1e2rWDf9rpWB34GooMnMGND3ryDgQgZsmapVzNoWQ595nTPDTDyjw8rWDwctHRahWpMTGZai9",
  "key16": "46g5FNrx8GgWSFDHdSW4RMXGTTKeyLHZys5wTP6Woo5y6Tr3P3j6FMP7Rx85KbTo4nSCpDkrMZksyz6YMCoWzzjV",
  "key17": "4AhDtPpWyWtF2u12vMvmEc78xgxHfCAReaq9ZPMdWjWRY8sVon7QokDb8EZ8CocVfnRAXAe1bYqFvCpA3NETDSoe",
  "key18": "63Vriq2fAD8sy8b5NAJsq6StHv7ryjeYAAUEBYqq9Q2t4jFffVLedFEsybTXpCsT9YXZ2UNF6jQiiSvhH4p2CX9M",
  "key19": "4Lv9L9xqYDuTmFiH68VGw3WLLgmmANFHDWC3s7LPa7adSBPv9ejWfFHPcoeZrsGTRNbwm9ZKAJPaxY5Uu5CpH58G",
  "key20": "4Bx5wLGpZ1XshLTVJPHRs9NXWbdMHbE2vPr7MaY88pkHVuqciNtoXwemvM9omWy9CW7kzeDwLzPBBdhLrpS1NQhi",
  "key21": "qi8wqqHbC2BoFo614Zxw5tdEEEBmed9aqxqCppoZYB95jKo35gfF4SJCGirf53h5QvamCwBCRk5XUN94yqRXWRh",
  "key22": "4vEinUXo2gfFBrg41o5Vx9xqxw6r5rKupYkhaVprNFQwkFmhwcDvsfoY7uqFH4YGyVMxqfeS1554Zttbyckpe1Jg",
  "key23": "3Dqu9CjeSbGY8gsyVsa2UHy8JtX3wdic1zhESY2yhriQdZruPoap4D3pS5tRhrStMtPRXPwRsK5oqFDsuY1VnQpx",
  "key24": "4W8aZ1W1gz9jqAQQPih17GYhtLYsfHbZMBdk7FdbuAYMTHyjmi1VUsgWnv8QTPnVk2rj5WsKkP1YdT4B32QzBDVW"
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
