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
    "2udC51kMvcARv6uK8ZuK55kCudYpv6xrdq4gHdDyL1b1eXmoEkxPtMKjrAat5z7gNsxXemgJFjHwW6oGx4WvgzSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66fB7oufhpZRfhDEm9pf8mJQGRZ2gvqQhYPheSw4oTL8YFRk1LnHm2LgrzV7Gmv6XPGxd6RFSMKihcMVtcLVdicd",
  "key1": "4wKBtXF4J1eT7VmS74o3csJijVx38zr5VHuc7LS7P6a2bT6Gh3V1Rkgi9bmR1dDc5KVQ6pV1NGvEvcp97ohSx2XG",
  "key2": "5gTGV35t31io9XNLNfBM9rSW2GVY78JPq1NPiyJyVgx9oxCPc7GX8oMJZB4yTLhbd9NrnSkBwYAzAqPmnW5qjE3V",
  "key3": "41SRVTdJWEsMsWUEw5HSjw19cKbdtmjwymKeMLZTmGiBzYUsp6fc86mzay8nUU4XkWdps19tAHuqYmB7BDLosQ8S",
  "key4": "4zitJmHQji74u26MZLxqGgUYm8FWcXvaFnjEdx5anQi1VpLTiTQqpqj2AkkoRr6DvoFqKx5wp9q3JrBB1yEi6YYm",
  "key5": "26vBVX7kS1TZybNvqnnEsxLaU8YfLw8vjsRXACpN1WEFQNamuKNZtdU819851n4wB2wYkkJy6XgUVwRoc2p85ee5",
  "key6": "4WwuLRquFYpARbrmgxAiWJ1d8dS1dWnaqCqb3piv2dWC4gdZtgGku1iDsAnPVhq5MxMo7GwJfU3aHZxi54DYT4qL",
  "key7": "2HLBa6PLo2RDvvNRwBwf6bPFxAHBq9D5ykDhab5xFhDWYHLytZQ8SttDYEcjU6BuxH1DrHmnRnthQC8Hf5HdBPX9",
  "key8": "51Lj9ud4hzmT1ereGh1VV2jdTSNGgt62MBJVHj26KSt8z6w25uSyZFhmj2Xx7VGtvMyBmMw6Bu8jysgRHzJNFMTK",
  "key9": "4onYc7xnuMxGQqVC96gnKkvchTxWWMhGgcfcPqdWHaRFg2oSwJDnAUtqwAVMuYKJLgeKTPbJSDMEfk8aJVYkuzrC",
  "key10": "4u6H1M8wzK6YrVhi6utJnEWYUvwFi3D1boQN4M28KAMJEHDn7B2YDsi3CagdRKGjCdJ2XeHckBA4D4YhaG7R7E26",
  "key11": "5w1LeBVmQh8E8N1Va1bvjqN3CpRs2sBjDr41TkiD97xy2yjTsErqpiG9KiYKuQu8TawBrDBUfdttpLB8GeLqBLK4",
  "key12": "oHEZESgXqujGMim2RGaVtr4aU9o6HAkWcApxCtYiMjRwpk6VsF7iqy4Tf5Xmv2s12dBcFdvqxFDnnp2UsXvrvyP",
  "key13": "5ZyoMcK5nKee1jQQ8k91Ty1FFFqzZHLrRFR9tf5A2RJN4vQNarEYhQVifmfTrANPoNwYfqaBnAJ2Ujp4nBsFDyyP",
  "key14": "2gfCUbb2FG4G2wC9z5qESm51MvJ6RERp27wUwN2nPRqWbfre9iaRdN2FAtcGhNnTVoVoiEvoRxNy1haP6CHhRwaH",
  "key15": "5WVAwwjxg9QLubCLXSCtDNLHo3TDiHGV5K3ecuGK5eSooHPoe5hR2y8peSQYyQQfF3SBfeUr7UQmj4v7FEEVaKWT",
  "key16": "4vkaVj3xjW3ugMyvqLn9vZVP1Lz5dEzZFSVXZwUjXByduqfmTh1NAKoURnQCEvky2GgnvtaS2aWMNbn9cSTMkVUt",
  "key17": "5u5QvmZLfrTawy2zqfQwLwup1ki8PxShLszbiUdy86jzVcsr6vayDypYDd8LEe9smVre9QCvumjuWq9FCCFc2GVR",
  "key18": "wJeQZgrrmbi1bAnLzVr3zhEQfjVsPociY111KtoEb8F5QtwwAVsMqQi7W58uCFWrHo6CxNQdydUNYhK6JBuXxpq",
  "key19": "5tG2WXF1wX4kEE1sjjif1THBV3ka92bonyfUZNJRKbUsWd3wVzvTuX69BfYuPNQowqSGFPgj1mFndfmTaQNmgV1F",
  "key20": "24uzB2P7yvhTfkyre7HAS6mF4BCN9AfVFaDizc93xh7iSLETfpdDaxFSwtw2UaunGrg9VqLrdNchDFDogxDx1Kzm",
  "key21": "4nBqnHU6thGHb6dVNqaNTATxq7yfFbZZ8QqWWFD3kwnA3TJtvUWqcitqKfzAVgby6VAfLc1cFPo9n9UAMYc2LsuM",
  "key22": "V5TVdhnnyF17b7u6E6y1GVMHrRLfNBzJ1gSALkEhhW1AUeiH5eXtZW7NuPitvFMWyTYsY2BCPwpPNe2mWJANJNc",
  "key23": "27CDLL93oUa4UPCz8cwhHe1NTE1C6koUQXqeohZgSa92uxP99EGX7zFRhhPpiFHUSX75Ze78tYLFXyehdtr3miL6",
  "key24": "42ZW8xGhmfrjnJjSXLzPiV8c6m1bpEZtiScuyahm1wXZnLTNhVxtTYJH176isn9MrJwUKVUUwqWQtBvTAGwg1KLj",
  "key25": "5wBtSSj1h1qEDDsi1e4LTeEg65VprLtWZXQ45UXG6eo2QPzGsQmZSo5wTsjSbff6xvfS9ETodjfKXzjgLjo4EsHq",
  "key26": "5Sdk1qEPFTtaXQtmjzUY3rgMp4M2T4zQ3LbGWw95iLFfB5YkmKXSod8axBK6RXhxcQ9XeoEyfz8XDDfFX6yK9Mkz",
  "key27": "4Vm2sgkRevBh1Sk9ddRXCqTk3NkJsveydq6CQ5RwMnikgtJmXujb7ZzDsPTedUpqAjew2KrBXqgBnNuMBR2QvCMw",
  "key28": "3kkgq5SUPtu4W4vNRs4j94MxBzdszE6J3oAq4ZHp847cwNLSkGHzVYu94XeA75bUULq85qF6NNNPcyqcZWtQQoPV",
  "key29": "2DjFyH6nL7CXzFXgcwqqw4gLLg59zQi1sx96TeCnY9jj6og8WFTQQ53onVP6nWazwigwqZG7paoMFCJmSRgT2DJS",
  "key30": "4K3mVY2J7BLAGK6X2HqewxfLqy6mgTk1jkQjNYSPf9EXo8Fw62TSWR21suAJxo9dVPyant8p8dK3Ep54ggugm9sB",
  "key31": "dapMSxi93MkB2DCer7zwnSmYMQrRm5QiSRkhemUJUYjbf8TLrPq5rn77TTKVdSJqztaiWKxJb8TtGbV8f7uKY1G",
  "key32": "3Cnctjs8dsn6fq1DfvsokrzathQwUNFQH2jWR1GZb42RnSz7TY48uwLZCddW3qmLtDynx6jok63dyEcNxcxuyhkb",
  "key33": "5qwiLewzw293cgi9DhZvRbszYH6doiMyPKgY5Z3LuXeqbvUHcHx7cUtKAgym4eTVvgF71Z3Tx3zQqWcDWmnEUPLr",
  "key34": "56gyVGeGvVy2vriBG1do3ZJoGtebVRvaqFZd6b8M3BEnGjaEYBwuYvX8VmCKbudf6RMeneq1eEWCySA79byAkAuX",
  "key35": "3pdNbL41cvxK2hwzU59WGsF2YJy8bZoQtYXo2RZqb6nuGqwCCRc6dPA1kVWN1LCHyCmjQL9k953dw8fPUpRqM7p7",
  "key36": "4Cf68K8TnGWVa6ffMCUjGcUGMaFMUW6HBoU4mrgNPGm1iTXvfDCj6TfFYWEoqEKXrudqxxh4n99Hv3Dbnmdq2LqN",
  "key37": "yPBkEgijhZYkxXDgdne1pgXdMBbn2fctMr7E7N1CiQJYp9Pcm5GH35u7mQmuiGgZBHsDK2dannZ7cZE9Zsj2VV5",
  "key38": "69F6wJzH4ZxXZ1FfgudttJ7b4WKMhwaChfEzbwELYofwCEKgnmb8TiCQ1HZ9akxzn9tmngQFgVFNwwscgpqEhrD",
  "key39": "2R9K3A8wM9sehqxNM4Gz9H5cbWfUePcrtm8tySzKZaVFJCSGjPtg77kwCGn7npc12WrYmQCcfPi4PtMht4NNcrjx",
  "key40": "BJUWLCjbfiz7Hga59VTL8uNXmDTBGxwSR63owsedDupFDW88fEk3LTMCnBDp5T5suTZJ7wp9M4QrrASK1trE2VS"
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
