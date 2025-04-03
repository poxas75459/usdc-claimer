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
    "3Co2HW5vQv4QCQZSru5E6b3m26NPgsRZdfGNcRkGaycX83mLu7cNYSu4vREHftT6DYFPw3jNEEpkEDXhF7zWYmer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dNQWJBHgApnsfzLsLmpgvc9WvRwTbPrKzevj9E5RiHPKpdtswtwxU9ee3BuLcADCDN2BtVwCDoG4qZ6L9Xpd4MJ",
  "key1": "HEVYJQK1b2b82vA82F4PTXx5ode7BNHCZV694wdfZ17euWDh2A7rTrvVBuAaiC2y3sVdqv8KhUPp9id9payHwGz",
  "key2": "4M3y2HtxnLcPKSQ1mnHx3K8SQbRRQUQNzQpHwU4SgniPtEf8SnsH162Px1fDnVVuRXuQK7iFG9384nBNhM1R3i9Z",
  "key3": "U76ELwkqycVA439P9ssvgSHzxeXDo3G26FWM5eYgDFD8wJpPCEtsGB2mckQt6teLK9WE2NkdgE31tfZB3otbngs",
  "key4": "5sYun81sg1egLXeWKhchT2zYfNNVREF3qAVChQSgUb5AVTdWHYev28eLGdke4eh5MuXdkZPQChGdEVNfMJSURnQ6",
  "key5": "5vNjBqKfYxyAgz7xbep5Gvqb2hRej8GAiixP2usFCf3MWjY3w4jPFXnoePoiEh3PZx5Bco6YgJrKWJEojP1skM5F",
  "key6": "fH6dAcGNN9TKFtHKDmALH3BpTVS2QkLcAMv5A4mFDTwn7FeCarJyy4zeoM9MHgVUNuGWsoHz6EA558L1q1dTwbH",
  "key7": "tbKztLJknDu3m8onbSgmtVmjJzCtjZ1EAnWmyrTigHuGUq2xxU1JqssGwyKtV3we6Lmjkh3ATbVMAvXn8vi9kQy",
  "key8": "3aiXpRvNqbMg8qo89ojdYssNxp7MnLtjBAuggBJh6rut3jdxKTZBup5hbJ7DPa5zGwuxYmm1ckbm6ePSZPeAEPty",
  "key9": "4kYwXZkPXGVXVYjhF2m6eqBDrMkxxEgMAU2Nb22Qrk8Sb9iQJsXcgbLcTpDS9Q52EbPtYbNkYZsiJ6pRFgt6QAEi",
  "key10": "3rbqeyPfA1XEaEszRYTjGbZGcHNFZ2jf4FMiRdZpqDdF89Q5C2aZrmyodvu6YkeJVWJmuhbybVHQYvNZCCavsnp9",
  "key11": "3RVJmtFJgvpB7n8cmLn2HT25vBnX4eX8XWitnCyVuyVQovJ1fGuHW9CyhubpGwyhS8yPnJGpdc86R1sRD632hKQo",
  "key12": "2uQZYdYPTHWMCLDTw1xzVR3cAqofcskRGm1PcoG4R6JCTBC1BqyDA1Y3hGEhUZvgyjYLRvbDPFzbpKHeQoCN8Fcj",
  "key13": "oJmHQ3K48vAfJyzAriC5B52TuvEe2d4EYZ3tHU2QSmyTBzf3rnkh8mcL4x4EdY68r1D7T7pXwxfM5WVz9obBvZX",
  "key14": "KRoda2wShvb35SKp6p36EYv8bYsEkvcn1AMXTQhPE6yq851CPdTyx8jBgVZUk3nj4cbEArqEoRnN8KwLgszizKj",
  "key15": "3tGxg86oQ3vUSmvAu6D3ita8HTMcCSR8nx2rBJQHBjsWAurEK13umyYtNCzkPLcTBm5jzHYUrW1UNGTQfEfzdbsX",
  "key16": "vCZUExcxivNSUktDWtCCKJvxAUYvubjY5QhTgyTs8z6FqzkKNrcsxtY9SGof97pyVmpXqrBpDP4uRxYWDaupC47",
  "key17": "3DnveUGM2sT2yGjfc9csSvtNF7LMTPHgzcZb5Gusp5bAW1GYEXfXPNwLUwhwShfTjdfnvsdVw43Aw39MLwE5ZT1e",
  "key18": "KZS4fpJKKm9zjCMoCQLRxV9gxZKDVfEPcJXwCDZLobJmie8d9KvaURMyTYoJQ9rwYR4aRXGCaAZGaFcFbKe4ku3",
  "key19": "3C4EMeeYpR28P5qH6a1CT9jssGwU8vhAn83aYKfa7wzMkMYTNvFQNenkHFj1EpGe4Qfu5cmrQyyAr66kD1uVqn2w",
  "key20": "3GiV48wmhaPvDZrdHVeMNsfHx3X9cc2d66PH93rsA6XED1Fi5QKASMYfG73otu9fMAkhyJAxrzpRg5ZTWPZZ8muH",
  "key21": "4SvNMB6C4qpDHvwTBVBEtFdehP3n1GyiwcsvFFSf8Bvq96A8NQuf7eJJWpenE9YY5rxuDeZAWfdnxTEERjtBAkXq",
  "key22": "49oH27d6RR43mWpWUgmAFaCuextiq7tATju1M26ran1fzkt6LcX2UhbVPtDqtL1Ts7rv4cKF3thFVuv6JjgBio9D",
  "key23": "4pmCa2Sgwc6x7P44pXmzAd1fVHR3uJ3v3X5Q2TGCNLbx2aUGzNvyGEa4sj1gAWQgMdFNTZjCiCK9AyjfK6dx7TBL",
  "key24": "ecm9EgcE2eZuxPdP4zozfbfEvwPkYV1xzQQAggxWuBkoRt7ahs6LMJRNj2w2DcPFT1m6cYqFuEEYYbPj2zrGkmj",
  "key25": "5Td7emHic3rB6drS9LN6jpjtStef1frtKpgzxbxckfjSuaJUqoHYWGU3NC9cUjiUfuUA6cGxFoZVETMCNN2oSP8E",
  "key26": "4YPgEXcsJs5pDGJoUPCWm7Jq6NZ241thAd7mQFKSuXnfQJJ8QKdoQwhkbB6PBzPM3Ft4Fm1bqqPmHtdiL4VwLtzU",
  "key27": "21FDstANAaW9FAECC5v4RK1zLTPTxEy7G1gVMaQsaPxBJo22BabdZWg1DK1QpMN2UYE29trRroPFPum9pZjpLYmL",
  "key28": "3qPPdbxgrQA2SEyTkyRabM5KqCjEf2cxq6Gmic3cGhRYP6hnR43amECw5BPUEQ6L3zR6DNGxQW9kX3gdbp6UngcE",
  "key29": "67HqUAt23cPswTGzt2MVAXJjpHUS5amf3jHqwJQAykZSxwLDGEsNGAxHzvwT1ABvgESJ9hFLYj97Z9mNxLYWEhTj",
  "key30": "5d6p9JTxpywjVTDVvGFoSmFu3g98mPgoxib5kFqRzoUzwjqnNUFfCKiUeRVcmCfqAEKARd44GWNxoih84NTS5fza",
  "key31": "2wHijmLAJATQvPpqBdB12qUpu5FA8SrEV4FD8JrMidnSYf7mc33ry4iuneexViP6UDggGbALqb13vQ6cRZCqmmvT",
  "key32": "ue8G8M5wCwDGr9aUhnCm4eBCe3LURqRSXLzPKXhsqHTpS7JDzDNZYb7ipFKsMXTh85XdTGgk4oQ6cvGsgLpdGa4",
  "key33": "3f5Wy7Ny9cTwbAU5SvovAGaH7xQdzVeG9rgNAwncKGafSuGjATbEZdgA4Es8B5rbQ7G1rStck1F1anJt43cj2AXE",
  "key34": "2eco56pKYtcdpjVE9KmJ6xXEGf4PuWNv3PmCZXfNkLK6YWfLmPPd3MoYtAU6Ef9VDjCDuMPiUBMHm75u3SamAB3c",
  "key35": "3dvx7pW8mL5HWjsENPHJUmMK7XpUeTSnfuephiUrxsK5eEN1BkPxE2vBY5s858pTpFgGGjz2YD3XVMLRqwQVA7Sg",
  "key36": "3rwmUPw1qVBuzH4EoDszgu2DgWu2zGGqitNXvpaHmxtZEMZ56CKvGu6QGGUyniGJ3wR1P3jfFJeHmsj6aaJcvtrB",
  "key37": "3BpNfMZdua9EV1tsY2c1EzNAEoBxauaBbWdbRQSucUzMeLTNyE7e5avdnjayAfSUdXRuQbbw8eBBxQ367DKgCLsq",
  "key38": "M6Y9cFeZLD5A5g5Heg7otwhAVJu6oePRSUWxX4YLPNv4UjeM7cxvzmAiL3Ze6Xbj4SafuayqGjJ3Nj8psJtbyqe",
  "key39": "BM53e5uyo625C9QdPJvFbfvzcCd8NCsLK13zyE8iHiy6UBkeGq7zvcLvoxFmEX4c89bVg46aqrwyHV3sE3DvywX",
  "key40": "2SeMAPioRd7WEsnZzWwf1GQurzw8xjPsdvVjM56GGvTFmRAzNhLHmNDfUzwKKLN4uNoFHSGnaiJKhQ26soPt7keW",
  "key41": "4428iLL92vGsYyNn4yozTT7YJd9hntQvotv4v6QE9kR83zPd2VMc4QJGWzfJ4Kpq6kJ8aiyD7XM46FxnPz6MTWdJ",
  "key42": "21Mg61QqntXGuDcqM3Dh2jujtcTEZKf38Y4nC528PLGyFv3XwwWosXyP2ur25hejrL5swm7ozvU7mnrkNeWesYGe"
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
