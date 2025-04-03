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
    "3Uw9xSUfknFWU1E7Nhy7BCp7n2NTVcg13rJGxEN1d3MfKpqApPLQ6AqY548vVdQVGjXJPbSum7qH5jKbwfsAKfyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJKwPtcUoKjyztgR1XqQHyENxcBsmk1ZMNwURHeWZKrrfAs4qznRcB9H5onMwdS616bDaNnB5o9wbgtmLFhw81i",
  "key1": "4psVZVr1GVkSFeFLYaCexjGjB3fRyvM7SRhQATRXV5D3rdm5GdLFiZXFCZcFMPxbPMG5DrkqpzQZTKXpZVkajBo7",
  "key2": "4cHBxd4gzVKRJMyboiQTRKkQTsgsaVqFJ6hwhz2VcXaXUiXZuHSgDicHBfWF99kmqEubxgzmAzZQqTpzYsKKjY8L",
  "key3": "2UwhUy7qkJytPNGM8PbrbBZQTfx8MhCXtHercW5n4RpL5J86TDA2kVK51SpnhdXmXG5xxzYTg6BNzLBeNcM1vBbe",
  "key4": "5UBT2cVNFkC6ixNro31w6U2jr2XkULncMDRqxwDyrvVxhrBDTYE3fKp9kuM4JraLmm241dw4JJturqZBHSxec89o",
  "key5": "4X7Ci2PW3eEaMFoDqcoeRRc7kz2YZgVeJCv2BdCVs2Gx9BwwbQ9si7zbz5EsruBohKzZeem5WQFgKZxksgsLvoPi",
  "key6": "5LLxgEiE8ZJCbRb23x2GjvhFZoFquGtWCTTXV8zv8CppR4tsD7ACjrgDax1mUx59KTwKcndczsw31oNWGruar6TD",
  "key7": "SJELEoNfVLUkgbSCi2xYtvEFto4yaKeG2Fb8m1zA7xoRQfoQsEkk1WeFqUoLLYirRZcQktTugbu6hcJ9tPVbiMj",
  "key8": "3794y9V1Rf4TBgqEn9MgoZRxM29jQqYDxqBN1fPfYioV8mhkYUE3obrALW1bQDsH26RKTJsD7MDA8i39zozLaAZL",
  "key9": "4JY7jHZHMPZ59AsG8Mqskce8P1VquNgwanVVt5VwatvQA9Vb6yGYZxzUPB3BquYJ21jZnJStDFEwaRfxSvMSh835",
  "key10": "62TVfkvZEoHfyzEH49tf3tUVQBJyf1EgGcS9N91uU8UthcAjzFtmn8FGDfbE9ukK3eXEvnd4VDfbEUbKWJSYgYj6",
  "key11": "5S9f7sX33mjdZPMzd4PEwQZ1G2LwuWPJByPSEwVKFmVJkum5iTajJUHfUFwgfCqimuNVDx21z5xYX16tWTyFgQ5J",
  "key12": "3tS46q1amcrmL7zHYMQey6aZ4Uft9DuYo9pVQgVbbFfXQjiAmTXdTLkZKguFxvm8NLWev7Dw1aRpAHc4fe9iJDiW",
  "key13": "46LVHbmMhvcA1SgXM2vPUwRNQCA84tepTVsP4xMXESWafusPrV8o23cGdfyahjfQzywmPu8DBSk1zuWcMz6U13yU",
  "key14": "2F4z7Vmo1tygCndZjrqrEA1KWFQpPr716ThmrVcBWRedhQoKv7aJJiVaM6fwzXegvtgNEdfzxaZSejhx31FjVqcN",
  "key15": "2mMihRWnjnRqHCiy5XnrCpYCt21WeQNdKd3Bq28d55CfM2DnQsZyWYc6RcjCPEWPkYrRTs1n5xjxtyWNj2AyEM6K",
  "key16": "3bFHwEsWQDS3hULPdQuCW7KnyUzLK5Q1rcUn6aCjGw99dKwmetRh71vNL4WdSWbw56L94PLfVWHkATdNSVy4WTU2",
  "key17": "5cn4RqnAPAxE5ZvzeXJNBHJ6dUtNiSHdygsBrCT5kA25RRhh7nQbmfj5UYQDZQEAiAgbkaRnGtmw2vQtirBb9hxy",
  "key18": "5A9aPxEtsjNh9oqxryPMfgXoR2U5MDeVdhnAd4c3HF1EaSNEMPC7SSpQt1Vuvpet9Lg9Cdq58JVgp5rhWeirtG75",
  "key19": "63JaJ98Qg3hSQbTjWqKexM2zQMwgfmJkr1J89nDT3cQxR8zRGKDg9KC9nbJ56nKY9ut4eh2ZjmDGunhuSdbNW1aE",
  "key20": "3MRHKssK9sLpC9AfGsi1LAvi6hhWTNZP5cHQbhsLbF3nQNCbqGNdnJTyNAMVbHsBAiXbQ2VXnWiomdwYcfRnot85",
  "key21": "4Tox4NxcBukk6DkySF5hG2vo9qCGeeBy1JhD5BLeDSmSKifhnV3YvR9dFsy9vddw8z7c7y5ucRCnDd63pyr18tjv",
  "key22": "46sGDUgTrLPk96mFiUA7dpDgm4LrRpAb5aNi5ghY1hw13hU8Ypw7zkNDbzdhXXy6Q4scifSYrmy6YTj8MAKaSR5T",
  "key23": "2Qe3RmfuqUUbGDetZoupDMkkJgZv3ThEzFENquXLrYsa7WMaAR2iECxrMXsLyg4U779RKX9PMCN51XGE4RhFaiaf",
  "key24": "4B6fga19YNxEfdxzWaEiP9SAbiX8MxDYesWTfMLsBBBB1G25DiAd7k1bPYL6VjFf6TKYjyK99ksaRUBVxJ5Sdbac",
  "key25": "3wEk1tSw5s3EtbT9b3yhQAzD5Gqm4ykGy6VZj8xBS8yFf8kXx4AUSvWHvMsYNNoYVvwb1ZQbM3Mk6rqpwccM7MHi",
  "key26": "5MgV4AVmm9JLb1bi25dbbTX9BScY5NYZNMZTWPhEuhDgfEKLHiPKwWo3d1NTfir6wJdHygxNKSjcXDKcCqGiWAq3",
  "key27": "3v46jCaT7Wec6wrRbLF8qzYZMVpDX2UkoEGMB3Vwpv4J8kdKpbamLbQdePeudgw4GX2VFPut3CjDuEtcqjpXEVHq",
  "key28": "2fHKg1WwwyKuaaERhmsxzTiCgJi4wTidCmXmjm4H1XiebHxxY9wfrRfDhcATYSbAfVm5MGg2urem9LuexRzqiJCW",
  "key29": "gzcNV4YUguvtM2fbnkdhpTSTrMnuGdceFLykTqU2SW2LgA33aokaTxQ8diqUyL4RvJfhP1mc6wZkNny53gbThXn",
  "key30": "pGbjNMywBBEkTkECopWZmSdYwPybJytckreZcV6fDYKMPvC9pQhTBqbPVWTEgUqSbexdgc8NX8JpbEQJJLxx3Cx",
  "key31": "G6Sq55weCtRQsZQYUmR6QySp6qaaafdwHgy93xu8MBGq2JEjC6hbcidduGngeHCg3x6aSHR33SVBjFibdUdDi9y",
  "key32": "Fs2aSdagExsrLU6EH8VR9VZ1TwFBECbxGKrvv8bDm1ubXw4tzUQc89HUbyYfLVhx1duGwH42FMZNaeyvtQ4sDj5",
  "key33": "sXtPr9dHxxyM415atK99sJKLvJgPWKCxVXpvo1WsM2d31Y7xFAag3f1EzMxDWJ6MQjwWk6XRdKasKEvLh3mbphm",
  "key34": "2ptWp94ofzb2AjtgtmtJzDYY3QbLK1ugxW5SSAWS2itoAd2V6naL4zN6Mb5sgJopKDdAebbX7jckDcT14iChg7Sx"
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
