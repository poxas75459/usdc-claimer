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
    "4EZsUCGsp1CbnYKCC2PvCKfViYsj53UwghVN1t4YZnWN8aKD2Jp9nwDiE3gDk7zuPKCg3h6aG8AcJd1LBiqyicyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41d2V71kEkQnMoW3MUk9PVminsaQ9w1HQJPEaEvfEAHfpAijcWn7NjkLFwxhMgED1Xy3cJAjdPC8Y5ykLYGSC7C2",
  "key1": "6DxiZqRQ4CDkVfaLihabt35ALZKP3b2GJqg3ETr628HQ1VUwTHgk4Hf9TAESPScFsKErBKSBsxXCYTzruKdGLyN",
  "key2": "3xeLMkts9ocNXJnaN3zr55ank764oCXjLqC5iJ7fwS2ypkXZLkjPvGvn4PM2mydMQoVrPgnLe4eD8HSjs1rhkpmQ",
  "key3": "2LkNXoRR66D5KjnzVrqxms2CmUi6t3NXeH2EmAgKBwoS2waJNQ6pjDSwGhbEx38QgniQttgSsCGgtPYRsoqsim14",
  "key4": "3P9TyB2vjeibRmCsFFX1tsYdqqEoNwq6VcePrevQVGAXAhtCUoZygHhvrfR65QXqohvppE2c5ccJdsoEkxHXrTzf",
  "key5": "3uJgJfswx1mmzSDufu3CHcouZfi9zCXHfsTBQgY6G7RZ9XeMuyxFtKnNP2XDGxVFzjCER1A4treyTDnTZNPakUdG",
  "key6": "4Faddtnoh53zozgYvjTDMe89otFduZ7BDemeBBgH3kCtYJmEKDm57Ar7RZ2u6TrGbwCUdV43FyQ4gvS37T5K9ALg",
  "key7": "5QGFbMJAyFYvqX2gzEvwBsZYVWQNH5GAm19dXaApj39j2epZLFVnByvvcrax6RAT5228VAoLSjmuivWe8No4hRxC",
  "key8": "6ksbaaiVChZHRje9SHM8atuvUpM8EwrutM3ged2vK3r3ys11EYRbgpTrzm1ShK182HnKcJM2dp6CPDRD3i2WStW",
  "key9": "5pWe4JfgoyUdkb8xaS9yDqpf1YcRCuQzdo6FHuxZHzqvkvGYeYW8TX9uz23fhVCyJuz23Zp27pthwvPyatpqHycP",
  "key10": "3otsFyienAqw496AhY3egeorDdbmgGpM4TyhR9a6iGRUh7WEGKgJ6whLmtBuQ5nLW3YrhV1Wv23oW5YiikzgeAPh",
  "key11": "3koFn9LmBCaUp3sZ1QR7ERZdGDRWQdMdWjMUNCUe2Teoq9o2B97NVYWkdxdsEeahFt8P74YMmxXTW8BC4szjY5PD",
  "key12": "5ysJiwDSMW1Y4anuSpPsRFP5rhuXei9fRifr9ZyKSAhgFXL3xM38LviX7DqEn1gJkH7vv7zwa2MjGHWtbT5zisdM",
  "key13": "5UF7CXqo3iHincmyqMLQQA6nZAgxPNVyZ9gArhHQPo1DiCtTg6cBgkkEJQzbgWMRUzwiZrZLHjvs5cRR4XtL5hoW",
  "key14": "v5sRDtqXgnGcV3AEnvRuoF5S2txHgxiB5YMMgYjt1ER1zTDa3K7vaD4qqu3tk2LMNmQrZnFXmkpmywMQu4EECFz",
  "key15": "41Ub1eHWmRK7Kk265DhzWQ7oYf5P7gWK5znKtwMDkkhHc8rq9nuEKMeoSpALDRWxkpPYKJnARveXBbNYpFJDJe2m",
  "key16": "5YA45a9J5STwA5TqTJ4qSPDZYTrTQgpaVzUwtKMMXGq3aC7VtkQEqd5GstiqHDLQqWq6MQkA3xf8BrasY837vSLL",
  "key17": "5YyNpwWrcQNZT4VRoryoQFTKBSEtjXG8R4Dss1VXNq1CXyvTKH4rFciHfCFTpPsDtniDbmUmvneZnPhyZ8Bs43xz",
  "key18": "rL6SzaRSqRD5tLVDtYu8LMS1cFvqqcuYm2SWFPvuFhY2FVSUB2mZr7R8a793FgvFJQsZmjzKF7DPqmGHVcCRpea",
  "key19": "aj4oa3LrXKcWEFNeGUgaPSqmo545PxkA1pHkv9mjsy9HKpskXDtmtuCFxX8bpRbKY8rmjeruNuW3trEXc4R1vhS",
  "key20": "5mAM1hHYEfGB1L8tjnaV1aQUhDqoCPAwzZfgM5g1qpfp8dkeaQKuCW3ek9ahVvKLy1oRkzyksP5o6EkZo634YyoX",
  "key21": "4kH2eEQb8RbZJda6MFhW5XsKpgaRcTqFbnodZJpsE4DiFWdKs4C7RTXdeAe492B9J8vrvcwL8ra6X8pUZ27kdRno",
  "key22": "43fSogEuGPz29hvNg3EWCKdtkxuWVSyNF3GsnEgqk1Jxfe1vjrMiqLj3foMm79WzqWvXz55uXBKUNZRMHYcXPfp",
  "key23": "46ufypDBKM8e4HoyV2EmMhvAsNgBu6sz6mstmDvbx5vMTtFtjDr3dE1iswzv2fvyJw4jeq9N5Fn8my8ssBFkdCy9",
  "key24": "vqX1jg11zTupNmGFeWbkqSL2FBfSJA3qmFiZMAKLnuSFkSu9LkpN4ncavaXzjWCPwaJVPicTNewqvJvrZeNMbpw",
  "key25": "y6s4vSkD5iNuuS618LeEStwRAxBMgcVt5QQ87L5WPEfLYDe3N2cfud1db8fz6rzhgedySbUs2EdMG2gRb82h3q1",
  "key26": "mCCkgUzubDgW2yUVak1AL7PdxN5NkSM2AwVEVuvZLJQdwPMqBn3Hi4kKueueeAa5Jwm8p8y28cQJUXPmCNc3aCT",
  "key27": "jWficetfkPkmDBr4b1iGPVjNx8WLsv3Tb9Arc2nH69Y2d3So2eyqeoinXKZWuYAdmAY8kMe9joNatJEE1syoqHX"
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
