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
    "UZz5MM4KCzckR8vS1Eb2B3k6BS5Qq8f4bD6BowRwf2PDnGtMMRBK5A1sAWo8HLoMHERbvouoZEtoPdTvKKd33g8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJyG4J1jBqF7FZ8rUdPVrub3a3F3ggAtZKNmfUGrER3y16bDqcRMK3LoXqbDS9q1Kdbj1FzbZWgh5ZU3h8Y92Qn",
  "key1": "pNshzaKhUDgmpGorQhy2xpeSeqaey5bLCgg5oSGBqQfAT6bRNcm3fT4DFE6t2v83H8MtUAE7yaFfBKJQErXBEgC",
  "key2": "2WXmQ7U3sLxhne86jYCpNuaRygsAHgAGKk4tKMskRWaeFeBCqnjKbtwJFoJj8eViAYdbD2zyCZHkYnAk35xes1EN",
  "key3": "2AwSf4eAqCMByGr3cY7nvhZs6E1TeKYhinN83W5voj6xBhCWszo1NFDNsNwFRLPSPfyDFAuh8DKFeo8QhpPgtCyS",
  "key4": "4rsh8SWfLv5Aqo6x6gxHjswVyxbPzfUuMrjLvnmELpsWVog3hEZ3p8azPEwY6Sx4YQo8DGguT5qfRT77afvdoNCo",
  "key5": "64BKqRjytBy9hhuuqqKxe4vq1msxHkG7Ag4twou9xM4HmhLeVwkqmxXFEcNT8WH9au6eTF2WWn7co27LmEm8M8iv",
  "key6": "PE2KGatUp4ZPEeu6wtvRENLLpYinwtwAogyMG5Wxf3EXm68AKnEs9W4NEMbNJHKCSY1F3XrXfo8k8EegjgWdDF4",
  "key7": "5uNnpr5yo6x8uTdZWxXevJ5BSy92uDRZViXWRWWV62QpBRDRThBYXmkdWzDjAhBdtC1jq4fvjFr7VtHvcMi6edxn",
  "key8": "5z4cXGZTM46dzWcin8seBMPqrY7z9x7Kb1YgZKxpnvYorpEiNLDuKb23CFLDp7TKLjAXUE78GKTLKdYgSRovZULU",
  "key9": "2Eb5y7vmyA512zDUTLgjB786SxsJoAj3Eg3waiH18HBYmDhGDz9ArZg2m2fRZ8xaSHrSmjEq3Mu3eu9C34TqPBfN",
  "key10": "21rHk19XoUGCFXQCjB2pzaX4NR9HA8rr74czJ5nCWUSCWUqdGtsWHoTDZSC1ZkKZyUkPt4dW1Z5YSYDgBcNhGTVb",
  "key11": "5sgdmfswPqsZBjP6UqSyYbCThU4x7Ni5xK8qSPTf3wT5AvT73LeFeiZJB8R8bqc4L8kAzso2bnXoLJLHwYh2Bcmf",
  "key12": "2CWCxYRbhMEEjDGVPJAcx2L92kHhHeJ1GMKAF5XLnfKgwrxhQharg4tDYbpWZzMuqvw5iBh3z3N3R9aQrudDraXT",
  "key13": "2zbwR4q3qCs9rLpVDvT2xmYFymVTU29rGh7L9cKPjjqeqmxDeXNUajmuVgjt8cCdN3hFUsbobZ5DCsRYHKovo1Gg",
  "key14": "5gKK9SR5iD96PZEZzReL1cuLyuK4ktUWm5UAxWC9L8zD3ERHLXW8piUoKYYQDyrFW8JRZ7zHde5kGz1T6Bs1sVhd",
  "key15": "5toNaXVPSJiPMsvZnGiVs9unXzAGL9bU3mfNqitC54gJDLuCcNwZxmo6qyLXtnUT9jzg8gumPKyYtdSuD1RWRtdN",
  "key16": "3oyXiW8A7gA4Hu1tvZoU5U4YUUJGggTNeQ2QYfS94snoivAZmnUGUb9VsMFA19kTDaxz7AWCg4xoy65uMJe1SyUN",
  "key17": "sQfqceufs7afeos1YTo3bK3GEtxo5BNGAM2yRpvHArATujFn9DvGZFD6yHDsXfnmLaCZam3FUugRHiT6ymuuuCL",
  "key18": "HutURxgJZVoKFnPpAmBXnvacUxuRteD7S2L4zTVrrq5W2Jr8NWMfH4aKGA4gBbrkzDakaGGi9QazxaMYMdsV2Wh",
  "key19": "5fY2Cfh267JLfKgs7aes1ez2DiHkpQEQMnp6tmQjajGKqsnSqkaMnjrEtMpAkWYtzyCEhnG3jK8v3YhZ4FrfaoQC",
  "key20": "4LLiVsGz91dQks2GCNBS6YQ2UHNcv2KAfcajHwfAVFDhaHKzWNzR5os6dckVYvLCecmhCQrSHrqta4itMG1xxj6K",
  "key21": "3qt3CUa8MJWPrvJnqDeb9NSbAwcs6YJPM31W5MDCDoR6KSdKvBu2EZMLFqvm3ZxVHKtVndkCNiPRnmZ7tdYQcWsr",
  "key22": "5GRNiYxdUi8DzhFpxZp5hcDTRzy1AynNnCr2UR2uFebBkhUKiXA9Pn7cQHcgA2Tt7hYZH6KQ9o9h7RTsNFJwaciC",
  "key23": "2bSFqir93HxCSFoDYdMfKuaY5ebZREMCPQ687hXPuffH3wgqV3inzFdmPt1YsX5hQEMm5sPCTCtt7zutxJffeoHz",
  "key24": "5aHSJTBhmwLnbBNh7EFptNt6qCa5vR6gZMCW23mztBxr2VUSLatzwiLUZ7jVx12GjHTE5DPVHMw8aRdh1Trv6cht",
  "key25": "5m7EyXC8ps5gQ3g3i3V9qmbz4g5BhE4D53hLyjnNoUWrNb6MRWHkWddqeQyLPr1qP8Va82z9PbvNpJ1kinYRPvfr",
  "key26": "X1yJ9ZpEcbfXESBCnbYWGwcjqPwZwvyxuHoyTautGGipJ66AT4qomh8A41z7zNL1kMcTithCvqviers1Md4DLgS",
  "key27": "5TGjNAWbSfkfpBJcZvdFnAtHT9nxp7tD4wMcs4TLnXxg3hJQoS1CXCEmvtjdqXbd4x3cZiArxjN3fDfekaZyZoh9",
  "key28": "41m2cDoMUZSd2Djjk35rVd4MPwVsF9LzJtnu1y5g2dMVLSjaC52ztvC88JwEN5r6TxWbAfo7Kaa7iiQiaGc4ydFZ",
  "key29": "2JnLRCiUNSsUQEgAmhCYBypCKLJqsUFjAUu8zfKzw1XAgEsHaRibZhSx6zuZN8jZi4jNYysoifUE9PNxB5J6hLEB",
  "key30": "2FurVCnSikYYNbQHaqXAXrHjwp1BhUEQ2JPWWStxD2XZMWE1HXbuSb1G4HULQBiNzXnUppEqrSBfckrjTsegc1gK",
  "key31": "56XGQFVTxzboUMA5W8d515mg97uPbgQkJ96L7vbcqyoqAgnbjHeNar1761XpjS82Dvk2aWEs8eH752ANZJzxLjJ",
  "key32": "5Y6is4yG81AUFKwA5UdxKCsQSAMtuUDprQGUFwNiZhsDSfj42L5PBBizaEwxkybSHeCENLiv3vLpZburNXkN4KGe",
  "key33": "5Fxugo8HtHhAH5zmaGByHcTsocRLPFjmWdEtF83xKdeUpEyicBybsQrBD15iPacrz9HQTDosA1mEoqY2rhpD881n",
  "key34": "2zMebW1Moc3zk5co8vE9Q4CxtX1fu7YA6oZHEwhteTT9dw3DJ8NPXYsVobxZK3gcw7wGC6p1jHq9B3fET2ACoruu",
  "key35": "2iTU5bNeymKTiDutK77Ch1dMawrrpxvvXiFdNsYuBB7nzj6WScBUxWiscqcSG2vNxP9pHQJr8w7xRBuTTAzm5kzk",
  "key36": "2xQqeN22mVkNCkQjywdMq75oWKxZQvdvSayrwArA4ayEk3NARq6odrhKQ3kcgD9Lc1iizYz66pThJcNTuHRSQ5sz"
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
