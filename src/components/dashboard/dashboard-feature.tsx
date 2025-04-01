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
    "5pdVjArQWDP859PCNGKbUJmpMjcqmkZkSYzUPm2EerBgysDzCzyqvSP1fPYABszC69xfgQymWQ4aaQxUZubZEUuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Ltj1jkqt9sm1bKXQsMDgzDQfTactvTs6U5pfiKpMpVeDfLLXK1DDnjwekyLfGoMgBHEbPZR4wpJ1BW36Gbwtny",
  "key1": "2DJhcEk1AFER3pwL6JFsjHDpbAAZGEW8Q1JvRbVAXLZQcK5MjWNLhaqhTvFt8xU1G7XQS1MJmiWF788Csqs4rEKz",
  "key2": "44HUbUGC29QFMcpGpdEXy4whRjCnK8r88s2WqkzxSEUgaUhYByNty3VQWh1DDB44YCzkwSzufhe9VciPm61Jircz",
  "key3": "3rDDo8HbXKV7HvPnxZVmvfPrHMYoC2kSRwvS4U9gNPmSYmuBiWr9DaJT1u3TJxe2Cyx7A6U3ogQdjTgqfR4vneTj",
  "key4": "3ZFUPWYGkzs8tgKtvtooJ9nVvhQ7CtjKLnbdf4sj38swkdGiZWNPaBeY8EoMdugfj5s2Sgw79T6tTrhYTMeWpK3Q",
  "key5": "4aQy2HVs1jSrfwN7JVEwutBdfYZS3kFZQN29B86VHao8ouXDFw8RraAZQL8zz4ApESCj5q5mQczcYaNcqTr47LAH",
  "key6": "P1WuyHLwiB447MBxEHGC2jHx8oyeQiwgzzyebJmdGcjhku6y3ohc5PRkekTr8uyscMBn8FA76rdYkxjDxGpkjcb",
  "key7": "5qPF8kaqRTUgKD7inWJDcAipiwVbA9fD1d5VSE8aEJNBg7LYRwYPTTT9bYsZiUShUfLVmZRQ2WmNqdHmcdp61iT4",
  "key8": "AqkGvJs4P7wxD5NruJUQcJGLDZzmeYiexbVWi7UdP4MrhjecSX4ZXLCigHnF3854PmW7zzwAELAdZiBWMCQap93",
  "key9": "2sCwtMMAevtSvFuKmxJASrZySBDtVDwBnePH9utMu4K9yaGypu1R6gAAqCXQhhTus4YqDWronTAxi1PsAocFVj7n",
  "key10": "2ACcUGBWjc54hHeBE4UatoYfDmEBNjEhX4efvNaMDkYQYss456AJrkpcLDa7xTGtzvW7dyUkXEnQY6mYubLX6mLF",
  "key11": "3Ltv2LErEfyoHg1innSVCjpmdSwtg8gUomJuC9XkWdxbGNpA4zjgYtT9nPQ3kk24Z3nEMKeMo6S12DGsncisQcpJ",
  "key12": "5BnkvAyzXrUkEmeUUPTbUtsyEJsmpo7cGeWNntZX4jmWJNowJNpwg2xYrhi7HQMTLmeZMQNfnVouXjLy6r9yqSnN",
  "key13": "3Dthv6QR1vjNmvx3qnrmWqCfgujqcJAMdXCb2ccbg9Bd3dTDTh8SCXoDEpLZgFnjxLa9PfgHpNxstcWEahZBZhMt",
  "key14": "3qnquoXubEoX9MJMGHTrzSDBt27Uo8gmYf2uX1ReUa5vda8XMxrFeigPgtbwdk5mZ8uZNTaFY1rDyyggN6RyLFLi",
  "key15": "45gLSD8xtp3Xg9Tkb4jDJEdkJWdseyfcjKGBXVqHkZEfYbkn4UvFa2M8gCiPDA1No615jZB9T8dj7WatvXkmcKR5",
  "key16": "3ZG9dfEKSjTuPqU8TtNvyw1Kg58JTfiKCTtCecgnUsaijnBk3zo5xGPMnbvf1L9DxT9nL27uDDLiQuUpcsj3AXTb",
  "key17": "2y14o3UQ1Z6NUSm13yVabQH6mHxbMEqEhTYMLbV7SqgGLJfC56jmJdDdVM8z3ykgpDRGPeVpy4Jg2Mok57USh6jM",
  "key18": "5t5V8RkQnSYDGfwFAWVLpnfKmw4EuJwGXy3e7AX4P84FvzCtPwP3MKdtTUmA8J1SSHxC8ML9yG53SYmvUefjWTYQ",
  "key19": "4y1k1Rv5KoSKLBa2eaCpbgmh1c6c8SnGXc4XSRkcyJxJ3DZSTHB8ccz1Wu2ahQiS37Q3eqK1UWU7DR79tNmxm2oG",
  "key20": "5375WtoEKpEVvvymmhYqzF9k47p8NurHYDFhYavZ7u4NiWUSbZNS6UFxDLZfij8qbsncAmdKZV187JQ7XMFeu456",
  "key21": "4Q55bnE8LeaQHkdfa3TDkeYTLzonU48cfE5VaGvtpmHS34QkyVDMbJKw8BmNjtozZDQArDAqnVSdDRYBgYhiVB9s",
  "key22": "vDwEdnCbjm6TUKw39xiYyi2Pk9R8GRresU5NZzMFMjG9o2EybJ95BkhL9KiJyC8NhuXXtvN7kVWPHDauLM2H7Dt",
  "key23": "3yBY75uBawbyVQZRuCE4aaaX1ego6e61wBDEHKVwajsjgszkfoEicvBFUzV1QUTLWYmDChMPPDyoAX8vPZ3iKAD1",
  "key24": "3FxqmCiNcxnEKjsuekDuDQ4cWHGeCHbNxo6Yz7JWzrJZBwYzpr753gwCq5BhMKT5eQiDPAtSzu8UYjxiK4qhCH4R",
  "key25": "b1sDW4DdCnVUvcJ9JULY6bJnk2KZXyGvnthZkyCLL6HGyxQxGebxPqVZANu3uoZLNDJkXDoN4z1GtR6srXmwY7d",
  "key26": "H9wiy3yQjfbAyW68QrRKpaQyyaQRjFWjrxgXC5xDBkPF6oBkNoJAf1AosQWE5FQQufKvepYQHoimnGSv6AFsDT9",
  "key27": "3vywe8bR5S5We68M8o3cdpQah7ivGPcH3Wionu8f51PaGov1viwr15CT4yu82eZRCJ9u65dvPK8ScP7twJeyKbtm",
  "key28": "58mvhamHjGzCefHShwPQRccENCtqDRBR9yarkizzfWurDaN7MJ2Gr6jEeP9dVBvQgmEccBHqRf4PUsBnSoAN8caT",
  "key29": "2eXPUWM7sMuEd8Nip5DWiwgfhUCPyVEhmGSCNoBXpEC8HaQ51TGw3Hwn5SiqZUwY5wcSDhZZiTAJ9PEhAUzGr7cJ",
  "key30": "4AvmFLbZdzPoHfWz3e56DJG318r7subUBQSToXdCaHyC5D9pQjtoUi2E4fz8G9RDiVriY9jmvq6SC5LLJgZ6jkCd",
  "key31": "4JKYBTug5LLvghoMKv1jxeeo8bf916A2G7WFM1sEV2EeyZ6eqDkuV9S5oEiEAJwPVuZEyH3C8BdSMY9eXAHVp9BJ",
  "key32": "Yu7prifVNxyWd53rP2xqNHDCsLL3wcm5d5Y5x4vNP2MPREReJD8tdnfE49wquG2yMFK58SRPBcXhh3ZpafgdYJL",
  "key33": "48PNpfQXgNtDqLLYeGnCKxUZikmivvewAkaiA57Jx87tgWmcmAAX8uJCw4yHepUhF8LTMD3hruBeb6ypckcERw3Q",
  "key34": "4C9CEXHXzmtaHCHNgAbfivCNhWwVApyHinMoot97Kcpe3RnUFHEZNNZ2dYBwZ8vqwJyDag1UWJqFujcAwV4wAYYn",
  "key35": "2rEwSxgNU5bLSLVtUh6X4M3wr9hJvenPhAmHuZYuyBTyUVbfxrb7Sde3fmGsvHughsM6kzcoiARuUtcc89BBq9UF",
  "key36": "bfSKrDz3S2kp1QFAaE4SBCTHmZxDpxyiduSt76LWgXkTSNDv5NA4kEHCZCWKgtTPiuBvQzXRQev8xNsuq8dW1Do",
  "key37": "3x93wqQUTaUL7htwKNAZWYKTCiUuJ7Tcf9hunPpHgXSgxRzmsGTsTkaQNbdMnTdiSB4dh8XvRHQnhaBNneczpLYA",
  "key38": "5h7cP2JKd5EwMJKGNp1urnHaL5qhkAZ82n1hXwaNqnf8TGoFp2jKW1R69LMhSNDMPZDznRveoncKp7AbmFMZuDvc",
  "key39": "5DrmXeDHaTtsumYtd1zCyyJxRnbpyZMaCYbwcq6kGai2vsQFcCRuBWmhRACg2FpfGaaACzX2kT9F3TAiHpRNDNiQ",
  "key40": "61tfrBfMRAKKQQkjR1WwgYsCWyvC8TVKsmoUvbo6Sne4o6XnZSdoJupA9uRjHD3Ahsk9ebwKs9GyxqvjxXeLmDnG"
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
