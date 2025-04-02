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
    "3eNmKAycPGSBhGcT13wMdHUyP77Xn2MompUtq2QUjP9rEpgcFykT6s32o5ee58kAuWhL2ByHTvNBqsQCgEJoz2LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6Diwm7Hfa82H66wLzz1xwbxX48scUk8u85dTCKx2rHi3FmLJiUAa7kL5t5gL678tK4Rrh36hexFfPh4Mk6nTzk",
  "key1": "2YVBQJhdSXbYoiQAjkLMYfvxzRFfcLZnyLqRo3EHezGstHz5tXPwmrgXX5MyCkXQUdMD41sE2ctzZn87RQ34BbQc",
  "key2": "4ZcMX9R3bqQ9aShtCTVfvz4Cv5ge5PZZajqqoVUFLqwFDWHvm42QG7RPjxcroCwTE7kn8FV6yvQhfqeNpx2Astm7",
  "key3": "4XJDhfzqsaEy4XWQAhhycyiWZXFEhXYMHvsuw5jtwCS8B7zxcAXevropm7TU76NCyGcSTCSaqKQRaHEPJMZH3bsS",
  "key4": "4JEXTzpVoypbatUfR5WHDM8qJPbDmVb5Pd7MnYY7Pkos5XcZPFS27tNfpWQhDHwTUvkUMCRscvKS1KabRghfdJSn",
  "key5": "5jDFXoBLA8TxQ7fGuQC9vgvhksHmrD2qJtznTXatzKGMPnX9WDffVPb3ZGWVXV78xVLKftd2fwPq6cFxmciK2nLh",
  "key6": "5857ZjDbhZ8ce5M4WJAEW1PY2fx8XWamhQBQPKmjPSg3isQ7SNYyxfTgXQKzH1W9QTUnZ3aZBPPWzUowPA7Q7ErS",
  "key7": "26KfJvBXzZFztK14Fas9sbR8Md4xJe3WCiCgkqCzZF5mGCqwr2JREcVTeZ6tonvG7uHABckjbKcxL2fadjxj5s6w",
  "key8": "2e1TEfK5MmGyabFoTnGoVhF9YrDYvX7V3cBHn6hM4JCFqyteNKKGgyLrTFB7nCpzx9etDL86wxXuFW2UGtFXfHMy",
  "key9": "4P1HPAVJGxuuSHGBR8QZ9aKdad9BMfJXtqmZnRauviQqayRysgW1wVJKehEFGLyUfgqtKbZZzauFpTPiEtaiAgXP",
  "key10": "3Zeqau5TDY29vTwpQo4oGycEjcd7kD8bPqbfT5zibjPsqTdLzrHCMSXacmk3MJUkW34VK9XAcbA1uNSafiXv8XkX",
  "key11": "2BcNdi4hvRsZeon44zdkHUP1mdabNh2nxncqCyKdot2DSDUG5t78ESXeaoKabXTBthSxYSSvVAZV1YG8Leg7no6P",
  "key12": "2F4X2Mt87YP6UcRyFN61PdHkHJURxnZGpJhUdcH2jXVufTxD81Jz5QLMeYj8JaKDyGq82s3mdy7r9N35nYJWpsfA",
  "key13": "4ASFTKXuVdMuXEhNGTnfZHGwtTSYRPY9i4R7oRMfXggXrChtHGodQwtt7uyxJia1g1AyynPYFV5VW9kM41rjFFNT",
  "key14": "5ARnd2C886n6912GJmD8ZhVPg7ocGNhfycQ1pjbR44Y8oCX1oerQCr7wr9zY78qAKKaxPFQAxUEWVA2vSmGdYyB9",
  "key15": "gxAT44SLoTiuQUPH9vsjGuUNNvqUNwXysNvnVvAHAM8jhCXBj2UpeNNjymCRR5u8kYjMGbu6aoPfzFGKFZzPmsn",
  "key16": "3kvgPP6A44huybxJN99BA18MYgq9Ke7u58BmDdkvdCJGXrHRG6sNJyTVmiyV8HkpeN1cvC5UDskELgpSmasyR94d",
  "key17": "msaiwLTv1ghjT67dFZAL7FJ84hDGzCAC1TGmNtxj9c7dgcz81JdQ4uNqfYxPV5jCkedwMNRkCA9TBrW5xfBaT6y",
  "key18": "2L9ABQYhbtDYixZFKwV3C6enGYzEiVGQAqYYiZvjgcjMRSPVfJyz5uSZ6qXtCvCr7nMgVL8n1Dt5SpnmGBwHqxFM",
  "key19": "5xb7uKEbipRU7caWQwUrhWS1A6U5ESMU5BVscpCgJABdUpJzXP6JrAeCiwJDTRQpTVVxe4MyDS4WczAKeYSPTb8H",
  "key20": "58AaSe6CQ7hMnCtft9TMpErkpT8LHpUnC9feAp5m4Jn1dTq7AMk1WeSKMzpCbPtxqsWSCPxxGiuqbFdzqWCDr6MM",
  "key21": "K5TRkRNP1DeGMNarat5yVEWhCpVrCqhsADX9nWyqEfB3NaTrnR1xNaji9Wtqm6be9LxUo69ZSFncPuPfRvtzsFB",
  "key22": "33vHoiLePa1fQ8mhKbBpYdhvHvk9bbm2yrJCR9C8mYB9JStkswzLFU7zsZFj8ZsE2z56DHCf9Y5xBhs3yNCCHdoe",
  "key23": "33k4sRxfXo7UZuyK5MUF9E3rMeTjAsVqu37vHNV1MgutRcPfUkxwJ4Pfs1msbVEYWNnx4prhiuzQihPhqA2EG9Jf",
  "key24": "W3xQGU2mrdajxthWpq36a81HBe4sBmGjnLdvwRt73cdq2r1BVkaxeX8FbzhmAxERUmkNfwAxH8DpuKPK3xnLEk1",
  "key25": "5RtnAfVY9noNWKhFTns6DgPbmRQWAYeY7nWBFB5RkL2oHeakDRanHcb57oNYDuHLx3qLtfFRpMTXhYnHgcAH3mGJ",
  "key26": "2U7iSCW8zFQXYf9UHXmbHTo1HXkkuVXSrPJtsGYLagkCbPzAjKRoojYiNCxBUs6xBsCzBTbySpYYqkbH35UTEYsq",
  "key27": "2Lz1Xg3B3ygeiK1JbZ9oTfFdpoXjPU8h7rXFGQhpqF2E8cMzgNfS1LnypEQuimtvDYmkpFvGYGPE3LmgWXaNKrYL",
  "key28": "4ZPNMtMdQNPvZ7iakgVNhtYkKX5t8c3PZV7ZG9gV9VJtUurMhcRVi2uaRRgLHSZtGGN1VYXP7yQyW5EsQEmb3JwL",
  "key29": "3ZVu8rTTsmvz4idueDJ1x92ksgx4JkiEJcV27UdZgbU2um3VoCEtAJMN5VWVWHKbW3sxDhKnK4RSwuENpASfD41d",
  "key30": "36NNXQXTtJPFb84uVykzatDdZyoKgNjG7eMdf58hmuD18v99Yrt7t4igs7H7u2bF52QNemDicueqxSGsLUpBp25i",
  "key31": "y7KXCXn1q6YXbq9gVCgS5NhErStpkF6hccnedGvwpNnzb2qdyjxnqazvc6n5ZC7aeGNqQp9sU6Minn6dSKz8Yrd",
  "key32": "5Efdu6GR44HLXqdwWh5fPNnZs85RTP4Ednq7Q5T9V7iSMa1K3GwUjQNNEah2ExRbbmX3ck5YdzAx8SCddXxbXHwW",
  "key33": "3QAjWbNkEupLFus7rDUexFtsur5tG7DyCitqUa4oWU6d5rB6L92HtZjmUmB5ShEspjsw3Vf5ZNiE3Lr4EA5N17DD",
  "key34": "552XTYW9sU8A7UGFo6SEcS1wCS1ERmEy4TBpcoKHyMS2Y8HyhU2vQBk1wxFKHmJX5L2QVHmdj8bAiL6p6Xr941nB",
  "key35": "gFLxpaMkDxWXNr32DmvqL83HEpgo6hR83rv5PVqXswQ4kGxsKJcr3hyMdjtZddnFrYrLhk7rptk5uATophtvVJU",
  "key36": "BJPuP4KY2VudEdGvz8SP1KzNnNvk6io1td43gw3GVaeXzFUYXdceu4YzMGKjJ3A5VaRUx16n33PzJ65PHP1kvrq",
  "key37": "2WaJLBvvUeX7SGNgw2o7kPW6aXT1Py9iYWu2BvStt4zBB2EWXf3WRZB5J7oq3pnTEXgZNJfNciuC7HdfeZVvxC46",
  "key38": "4oqsyBkxvE541FEp5USxaNe9H4Q5vo4UAijq3HiCzdQKoSk1Qzvy6hTua4ujECSHRwm6tt4vxhi1DrHVhBjYpGHu",
  "key39": "GEr67eGXQNKyhPMKUaMvsrxHbLAUZaQ7bzAGMwjK3xS5GPT37gdtTHn7RAsLeLP74kSwAPc4HKUzhuoBUCW3nZv",
  "key40": "rm286oe7ns7Lv99JuoqbPZBThK1LbLTmziMYNw9PsyiJW7iewNGrMyAw1XHxxaVMZENRcJA94DKwUsmezE8QCMn"
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
